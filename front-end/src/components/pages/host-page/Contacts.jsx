import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import MailIcon from "@material-ui/icons/Mail";
import { compose } from "redux";
import { connect } from "react-redux";
import GuestListButton from "./GuestListButton";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  ClickAwayListener,
  Tooltip,
} from "@material-ui/core";
import ContactsPDF from "./ContactsPDF";
import { withTranslation } from "react-i18next";

const mapStateToProps = (state) => {
  return {
    ...state.checkins,
  };
};

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: "initCheckins", location_id: this.props.id });
  }

  render() {
    let locationState = "uninitialized";
    if (this.props.locations && this.props.locations[this.props.id]) {
      locationState = this.props.locations[this.props.id].location_state;
    }
    switch (locationState) {
      case "initialized":
        return this._renderLoadCheckins();
      case "done":
        return (
          <Box style={{ paddingTop: "20px" }}>
            <Card raised>
              <Box bgcolor="#AADACE">
                <CardHeader title={this.props.t("contacts.cardheader")} />
                <CardContent>
                  <ContactsPDF
                    title={this.props.name}
                    date={this.props.date}
                    host={this.props.host}
                    id={this.props.id}
                    location={this.props.location}
                    entries={this.props.locations[this.props.id].entries}
                  />
                  {this._renderMailLink()}
                </CardContent>
              </Box>
            </Card>
          </Box>
        );
      default:
        return (
          <Box style={{ paddingTop: "20px" }}>
            <Card>
              <Box bgcolor="#B1CDE5">
                <CardHeader title={this.props.t("contacts.cardheader")}>
                  {this.props.t("contacts.cardheadercontent")}
                </CardHeader>
                <CardContent>
                  {this.props.t(`contacts.${locationState}`)}
                </CardContent>
              </Box>
            </Card>
          </Box>
        );
    }
  }

  _renderLoadCheckins() {
    return (
      <ClickAwayListener
        onClickAway={() => this.setState({ tooltipOpen: false })}
      >
        <Tooltip
          title={this.props.t("contacts.noguests")}
          disableFocusListener={this.props.count > 0}
          disableHoverListener={this.props.count > 0}
          disableTouchListener={this.props.count > 0}
          open={this.state.tooltipOpen}
        >
          <span
            onClick={
              this.props.count > 0
                ? null
                : () =>
                    this.setState({ tooltipOpen: true }, () =>
                      // Auto-close tooltip after 5 seconds.
                      setTimeout(
                        () => this.setState({ tooltipOpen: false }),
                        5000
                      )
                    )
            }
          >
            <GuestListButton
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              disabled={this.props.count === 0}
              onClick={
                this.props.count > 0
                  ? () =>
                      this.props.dispatch({
                        type: "loadCheckins",
                        location_id: this.props.id,
                      })
                  : null
              }
              text={this.props.t("contacts.initialized")}
            />
          </span>
        </Tooltip>
      </ClickAwayListener>
    );
  }

  _renderMailLink() {
    return (
      <GuestListButton
        startIcon={<MailIcon />}
        onClick={() => {
          let addresses = this.props.locations[this.props.id].entries.map(
            (entry) => entry.mail
          );
          window.location.href = `mailto:?bcc=${addresses}`;
        }}
        text={this.props.t("contacts.actionmail")}
      />
    );
  }
}

export default compose(
  connect(mapStateToProps),
  withTranslation("host")
)(Contacts);
