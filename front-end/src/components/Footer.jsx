import React from "react";

function Footer(props) {
  return (
    <div className="irma-blue">
      <footer>
        <div className="footer-info">
          <h4>Vragen of opmerkingen</h4>
          <p>
            Ga naar de <a href="https://www.irma.app">irma.app</a> website voor
            informatie over de IRMA app en bezoek de{" "}
            <a href="https://privacybydesign.foundation">
              Privacy by Design Foundation
            </a>{" "}
            webpagina voor algemene achtergrond informatie. Stuur een mail aan{" "}
            <a href="mailto:info@irma-welkom.nl">info@irma-welkom.nl</a> voor
            vragen en opmerkingen.
          </p>
          <p>
            {" "}
            IRMA-welkom is open source. De source code en documentatie staan op
            GitHub. Bijdragen zijn welkom; je kunt ook zelf je eigen IRMA-welkom
            server draaien. <i className="fa fa-github"></i>
            Bekijk de{" "}
            <a href="https://github.com/privacybydesign/irma-meet">
              GitHub bestanden.
            </a>
          </p>
          <p>
            De IRMA-welkom dienst is gratis. Een financiële bijdrage, voor
            onderhoud en verdere ontwikkeling, wordt zeer gewaardeerd. Dat kan
            via deze
            <a href="https://privacybydesign.foundation/steun/">steun pagina</a>
            van de stichting Privacy by Design.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
