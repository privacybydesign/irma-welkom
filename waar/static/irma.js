!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.irma = e())
    : (t.irma = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 84))
    );
  })([
    function (t, e, r) {
      (function (e) {
        function r(t) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n(
            "object" ==
              ("undefined" == typeof globalThis
                ? "undefined"
                : r(globalThis)) && globalThis
          ) ||
          n(
            "object" ==
              ("undefined" == typeof window ? "undefined" : r(window)) && window
          ) ||
          n(
            "object" == ("undefined" == typeof self ? "undefined" : r(self)) &&
              self
          ) ||
          n("object" == (void 0 === e ? "undefined" : r(e)) && e) ||
          Function("return this")();
      }.call(this, r(1)));
    },
    function (t, e) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : r(window)) &&
          (n = window);
      }
      t.exports = n;
    },
    function (t, e, r) {
      var n = r(0),
        o = r(47),
        i = r(3),
        a = r(48),
        s = r(54),
        u = r(97),
        c = o("wks"),
        f = n.Symbol,
        l = u ? f : (f && f.withoutSetter) || a;
      t.exports = function (t) {
        return (
          i(c, t) || (s && i(f, t) ? (c[t] = f[t]) : (c[t] = l("Symbol." + t))),
          c[t]
        );
      };
    },
    function (t, e) {
      var r = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return r.call(t, e);
      };
    },
    function (t, e, r) {
      var n = r(8);
      t.exports = function (t) {
        if (!n(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e) {
      var r,
        n,
        o = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === i || !r) && setTimeout)
          return (r = setTimeout), setTimeout(t, 0);
        try {
          return r(t, 0);
        } catch (e) {
          try {
            return r.call(null, t, 0);
          } catch (e) {
            return r.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          r = i;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          n = a;
        }
      })();
      var u,
        c = [],
        f = !1,
        l = -1;
      function h() {
        f &&
          u &&
          ((f = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && p());
      }
      function p() {
        if (!f) {
          var t = s(h);
          f = !0;
          for (var e = c.length; e; ) {
            for (u = c, c = []; ++l < e; ) u && u[l].run();
            (l = -1), (e = c.length);
          }
          (u = null),
            (f = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function m() {}
      (o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new d(t, e)), 1 !== c.length || f || s(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = m),
        (o.addListener = m),
        (o.once = m),
        (o.off = m),
        (o.removeListener = m),
        (o.removeAllListeners = m),
        (o.emit = m),
        (o.prependListener = m),
        (o.prependOnceListener = m),
        (o.listeners = function (t) {
          return [];
        }),
        (o.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (t, e, r) {
      var n = r(5);
      t.exports = !n(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    function (t, e) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      t.exports = function (t) {
        return "object" === r(t) ? null !== t : "function" == typeof t;
      };
    },
    function (t, e) {
      var r,
        n = [
          0,
          26,
          44,
          70,
          100,
          134,
          172,
          196,
          242,
          292,
          346,
          404,
          466,
          532,
          581,
          655,
          733,
          815,
          901,
          991,
          1085,
          1156,
          1258,
          1364,
          1474,
          1588,
          1706,
          1828,
          1921,
          2051,
          2185,
          2323,
          2465,
          2611,
          2761,
          2876,
          3034,
          3196,
          3362,
          3532,
          3706,
        ];
      (e.getSymbolSize = function (t) {
        if (!t) throw new Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return n[t];
        }),
        (e.getBCHDigit = function (t) {
          for (var e = 0; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" != typeof t)
            throw new Error('"toSJISFunc" is not a valid function.');
          r = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (e.toSJIS = function (t) {
          return r(t);
        });
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var n = r(145),
          o = r(146),
          i = r(147);
        function a() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function s(t, e) {
          if (a() < e) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
              : (null === t && (t = new u(e)), (t.length = e)),
            t
          );
        }
        function u(t, e, r) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(t, e, r);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return l(this, t);
          }
          return c(this, t, e, r);
        }
        function c(t, e, r, n) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, r, n) {
                if ((e.byteLength, r < 0 || e.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(e)
                    : void 0 === n
                    ? new Uint8Array(e, r)
                    : new Uint8Array(e, r, n);
                u.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = u.prototype)
                  : (t = h(t, e));
                return t;
              })(t, e, r, n)
            : "string" == typeof e
            ? (function (t, e, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!u.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | d(e, r),
                  o = (t = s(t, n)).write(e, r);
                o !== n && (t = t.slice(0, o));
                return t;
              })(t, e, r)
            : (function (t, e) {
                if (u.isBuffer(e)) {
                  var r = 0 | p(e.length);
                  return 0 === (t = s(t, r)).length || e.copy(t, 0, 0, r), t;
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length || (n = e.length) != n
                      ? s(t, 0)
                      : h(t, e);
                  if ("Buffer" === e.type && i(e.data)) return h(t, e.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function f(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function l(t, e) {
          if ((f(e), (t = s(t, e < 0 ? 0 : 0 | p(e))), !u.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < e; ++r) t[r] = 0;
          return t;
        }
        function h(t, e) {
          var r = e.length < 0 ? 0 : 0 | p(e.length);
          t = s(t, r);
          for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
          return t;
        }
        function p(t) {
          if (t >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function d(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var r = t.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return z(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return F(t).length;
              default:
                if (n) return z(t).length;
                (e = ("" + e).toLowerCase()), (n = !0);
            }
        }
        function m(t, e, r) {
          var n = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return O(this, e, r);
              case "utf8":
              case "utf-8":
                return T(this, e, r);
              case "ascii":
                return A(this, e, r);
              case "latin1":
              case "binary":
                return C(this, e, r);
              case "base64":
                return k(this, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return R(this, e, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (n = !0);
            }
        }
        function g(t, e, r) {
          var n = t[e];
          (t[e] = t[r]), (t[r] = n);
        }
        function y(t, e, r, n, o) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = o ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (o) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!o) return -1;
            r = 0;
          }
          if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
            return 0 === e.length ? -1 : b(t, e, r, n, o);
          if ("number" == typeof e)
            return (
              (e &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : b(t, [e], r, n, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function b(t, e, r, n, o) {
          var i,
            a = 1,
            s = t.length,
            u = e.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (s /= 2), (u /= 2), (r /= 2);
          }
          function c(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (o) {
            var f = -1;
            for (i = r; i < s; i++)
              if (c(t, i) === c(e, -1 === f ? 0 : i - f)) {
                if ((-1 === f && (f = i), i - f + 1 === u)) return f * a;
              } else -1 !== f && (i -= i - f), (f = -1);
          } else
            for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
              for (var l = !0, h = 0; h < u; h++)
                if (c(t, i + h) !== c(e, h)) {
                  l = !1;
                  break;
                }
              if (l) return i;
            }
          return -1;
        }
        function v(t, e, r, n) {
          r = Number(r) || 0;
          var o = t.length - r;
          n ? (n = Number(n)) > o && (n = o) : (n = o);
          var i = e.length;
          if (i % 2 != 0) throw new TypeError("Invalid hex string");
          n > i / 2 && (n = i / 2);
          for (var a = 0; a < n; ++a) {
            var s = parseInt(e.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            t[r + a] = s;
          }
          return a;
        }
        function w(t, e, r, n) {
          return q(z(e, t.length - r), t, r, n);
        }
        function _(t, e, r, n) {
          return q(
            (function (t) {
              for (var e = [], r = 0; r < t.length; ++r)
                e.push(255 & t.charCodeAt(r));
              return e;
            })(e),
            t,
            r,
            n
          );
        }
        function x(t, e, r, n) {
          return _(t, e, r, n);
        }
        function S(t, e, r, n) {
          return q(F(e), t, r, n);
        }
        function E(t, e, r, n) {
          return q(
            (function (t, e) {
              for (
                var r, n, o, i = [], a = 0;
                a < t.length && !((e -= 2) < 0);
                ++a
              )
                (r = t.charCodeAt(a)),
                  (n = r >> 8),
                  (o = r % 256),
                  i.push(o),
                  i.push(n);
              return i;
            })(e, t.length - r),
            t,
            r,
            n
          );
        }
        function k(t, e, r) {
          return 0 === e && r === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, r));
        }
        function T(t, e, r) {
          r = Math.min(t.length, r);
          for (var n = [], o = e; o < r; ) {
            var i,
              a,
              s,
              u,
              c = t[o],
              f = null,
              l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (o + l <= r)
              switch (l) {
                case 1:
                  c < 128 && (f = c);
                  break;
                case 2:
                  128 == (192 & (i = t[o + 1])) &&
                    (u = ((31 & c) << 6) | (63 & i)) > 127 &&
                    (f = u);
                  break;
                case 3:
                  (i = t[o + 1]),
                    (a = t[o + 2]),
                    128 == (192 & i) &&
                      128 == (192 & a) &&
                      (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (f = u);
                  break;
                case 4:
                  (i = t[o + 1]),
                    (a = t[o + 2]),
                    (s = t[o + 3]),
                    128 == (192 & i) &&
                      128 == (192 & a) &&
                      128 == (192 & s) &&
                      (u =
                        ((15 & c) << 18) |
                        ((63 & i) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) > 65535 &&
                      u < 1114112 &&
                      (f = u);
              }
            null === f
              ? ((f = 65533), (l = 1))
              : f > 65535 &&
                ((f -= 65536),
                n.push(((f >>> 10) & 1023) | 55296),
                (f = 56320 | (1023 & f))),
              n.push(f),
              (o += l);
          }
          return (function (t) {
            var e = t.length;
            if (e <= 4096) return String.fromCharCode.apply(String, t);
            var r = "",
              n = 0;
            for (; n < e; )
              r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
            return r;
          })(n);
        }
        (e.Buffer = u),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = a()),
          (u.poolSize = 8192),
          (u._augment = function (t) {
            return (t.__proto__ = u.prototype), t;
          }),
          (u.from = function (t, e, r) {
            return c(null, t, e, r);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (t, e, r) {
            return (function (t, e, r, n) {
              return (
                f(e),
                e <= 0
                  ? s(t, e)
                  : void 0 !== r
                  ? "string" == typeof n
                    ? s(t, e).fill(r, n)
                    : s(t, e).fill(r)
                  : s(t, e)
              );
            })(null, t, e, r);
          }),
          (u.allocUnsafe = function (t) {
            return l(null, t);
          }),
          (u.allocUnsafeSlow = function (t) {
            return l(null, t);
          }),
          (u.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (u.compare = function (t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var r = t.length, n = e.length, o = 0, i = Math.min(r, n);
              o < i;
              ++o
            )
              if (t[o] !== e[o]) {
                (r = t[o]), (n = e[o]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (t, e) {
            if (!i(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            var r;
            if (void 0 === e)
              for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = u.allocUnsafe(e),
              o = 0;
            for (r = 0; r < t.length; ++r) {
              var a = t[r];
              if (!u.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(n, o), (o += a.length);
            }
            return n;
          }),
          (u.byteLength = d),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) g(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              g(this, e, e + 3), g(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              g(this, e, e + 7),
                g(this, e + 1, e + 6),
                g(this, e + 2, e + 5),
                g(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? T(this, 0, t)
              : m.apply(this, arguments);
          }),
          (u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function () {
            var t = "",
              r = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
                this.length > r && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (u.prototype.compare = function (t, e, r, n, o) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = this.length),
              e < 0 || r > t.length || n < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= o && e >= r) return 0;
            if (n >= o) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            for (
              var i = (o >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (e >>>= 0),
                s = Math.min(i, a),
                c = this.slice(n, o),
                f = t.slice(e, r),
                l = 0;
              l < s;
              ++l
            )
              if (c[l] !== f[l]) {
                (i = c[l]), (a = f[l]);
                break;
              }
            return i < a ? -1 : a < i ? 1 : 0;
          }),
          (u.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }),
          (u.prototype.indexOf = function (t, e, r) {
            return y(this, t, e, r, !0);
          }),
          (u.prototype.lastIndexOf = function (t, e, r) {
            return y(this, t, e, r, !1);
          }),
          (u.prototype.write = function (t, e, r, n) {
            if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e)
              (n = e), (r = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            var o = this.length - e;
            if (
              ((void 0 === r || r > o) && (r = o),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var i = !1; ; )
              switch (n) {
                case "hex":
                  return v(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return w(this, t, e, r);
                case "ascii":
                  return _(this, t, e, r);
                case "latin1":
                case "binary":
                  return x(this, t, e, r);
                case "base64":
                  return S(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, t, e, r);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (i = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function A(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
          return n;
        }
        function C(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
          return n;
        }
        function O(t, e, r) {
          var n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          for (var o = "", i = e; i < r; ++i) o += D(t[i]);
          return o;
        }
        function R(t, e, r) {
          for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
            o += String.fromCharCode(n[i] + 256 * n[i + 1]);
          return o;
        }
        function P(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function j(t, e, r, n, o, i) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > o || e < i)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > t.length) throw new RangeError("Index out of range");
        }
        function M(t, e, r, n) {
          e < 0 && (e = 65535 + e + 1);
          for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o)
            t[r + o] =
              (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
        }
        function L(t, e, r, n) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o)
            t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
        }
        function I(t, e, r, n, o, i) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function B(t, e, r, n, i) {
          return i || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
        }
        function N(t, e, r, n, i) {
          return i || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
        }
        (u.prototype.slice = function (t, e) {
          var r,
            n = this.length;
          if (
            ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0
              ? (e += n) < 0 && (e = 0)
              : e > n && (e = n),
            e < t && (e = t),
            u.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(t, e)).__proto__ = u.prototype;
          else {
            var o = e - t;
            r = new u(o, void 0);
            for (var i = 0; i < o; ++i) r[i] = this[i + t];
          }
          return r;
        }),
          (u.prototype.readUIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || P(t, e, this.length);
            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              n += this[t + i] * o;
            return n;
          }),
          (u.prototype.readUIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || P(t, e, this.length);
            for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
              n += this[t + --e] * o;
            return n;
          }),
          (u.prototype.readUInt8 = function (t, e) {
            return e || P(t, 1, this.length), this[t];
          }),
          (u.prototype.readUInt16LE = function (t, e) {
            return e || P(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (t, e) {
            return e || P(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (u.prototype.readUInt32LE = function (t, e) {
            return (
              e || P(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (t, e) {
            return (
              e || P(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (u.prototype.readIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || P(t, e, this.length);
            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              n += this[t + i] * o;
            return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
          }),
          (u.prototype.readIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || P(t, e, this.length);
            for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); )
              i += this[t + --n] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }),
          (u.prototype.readInt8 = function (t, e) {
            return (
              e || P(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function (t, e) {
            e || P(t, 2, this.length);
            var r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt16BE = function (t, e) {
            e || P(t, 2, this.length);
            var r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt32LE = function (t, e) {
            return (
              e || P(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (t, e) {
            return (
              e || P(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readFloatLE = function (t, e) {
            return e || P(t, 4, this.length), o.read(this, t, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (t, e) {
            return e || P(t, 4, this.length), o.read(this, t, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (t, e) {
            return e || P(t, 8, this.length), o.read(this, t, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (t, e) {
            return e || P(t, 8, this.length), o.read(this, t, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < r && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
          (u.prototype.writeUIntBE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = r - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
          (u.prototype.writeUInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : M(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : M(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeIntLE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var o = Math.pow(2, 8 * r - 1);
              j(this, t, e, r, o - 1, -o);
            }
            var i = 0,
              a = 1,
              s = 0;
            for (this[e] = 255 & t; ++i < r && (a *= 256); )
              t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
                (this[e + i] = (((t / a) >> 0) - s) & 255);
            return e + r;
          }),
          (u.prototype.writeIntBE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var o = Math.pow(2, 8 * r - 1);
              j(this, t, e, r, o - 1, -o);
            }
            var i = r - 1,
              a = 1,
              s = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); )
              t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
                (this[e + i] = (((t / a) >> 0) - s) & 255);
            return e + r;
          }),
          (u.prototype.writeInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : M(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : M(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || j(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeFloatLE = function (t, e, r) {
            return B(this, t, e, !0, r);
          }),
          (u.prototype.writeFloatBE = function (t, e, r) {
            return B(this, t, e, !1, r);
          }),
          (u.prototype.writeDoubleLE = function (t, e, r) {
            return N(this, t, e, !0, r);
          }),
          (u.prototype.writeDoubleBE = function (t, e, r) {
            return N(this, t, e, !1, r);
          }),
          (u.prototype.copy = function (t, e, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              t.length - e < n - r && (n = t.length - e + r);
            var o,
              i = n - r;
            if (this === t && r < e && e < n)
              for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
            else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (o = 0; o < i; ++o) t[o + e] = this[o + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
            return i;
          }),
          (u.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((n = e), (e = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                1 === t.length)
              ) {
                var o = t.charCodeAt(0);
                o < 256 && (t = o);
              }
              if (void 0 !== n && "string" != typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= e) return this;
            var i;
            if (
              ((e >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (i = e; i < r; ++i) this[i] = t;
            else {
              var a = u.isBuffer(t) ? t : z(new u(t, n).toString()),
                s = a.length;
              for (i = 0; i < r - e; ++i) this[i + e] = a[i % s];
            }
            return this;
          });
        var U = /[^+\/0-9A-Za-z-_]/g;
        function D(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function z(t, e) {
          var r;
          e = e || 1 / 0;
          for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
            if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
              if (!o) {
                if (r > 56319) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === n) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = r;
                continue;
              }
              if (r < 56320) {
                (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                continue;
              }
              r = 65536 + (((o - 55296) << 10) | (r - 56320));
            } else o && (e -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), r < 128)) {
              if ((e -= 1) < 0) break;
              i.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              i.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              i.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return i;
        }
        function F(t) {
          return n.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(U, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function q(t, e, r, n) {
          for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
            e[o + r] = t[o];
          return o;
        }
      }.call(this, r(1)));
    },
    function (t, e, r) {
      var n = r(67),
        o = r(68);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw new Error("Invalid mode: " + t);
          if (!n.isValid(e)) throw new Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return o.testNumeric(t)
            ? e.NUMERIC
            : o.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : o.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw new Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw new Error("Unknown mode: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    function (t, e) {
      "function" == typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            }
          });
    },
    function (t, e, r) {
      var n = r(7),
        o = r(14),
        i = r(29);
      t.exports = n
        ? function (t, e, r) {
            return o.f(t, e, i(1, r));
          }
        : function (t, e, r) {
            return (t[e] = r), t;
          };
    },
    function (t, e, r) {
      var n = r(7),
        o = r(45),
        i = r(4),
        a = r(44),
        s = Object.defineProperty;
      e.f = n
        ? s
        : function (t, e, r) {
            if ((i(t), (e = a(e, !0)), i(r), o))
              try {
                return s(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          };
    },
    function (t, e, r) {
      "use strict";
      var n = r(38);
      i.TYPED_ARRAY_SUPPORT = (function () {
        try {
          var t = new Uint8Array(1);
          return (
            (t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === t.foo()
          );
        } catch (t) {
          return !1;
        }
      })();
      var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      function i(t, e, r) {
        return i.TYPED_ARRAY_SUPPORT || this instanceof i
          ? "number" == typeof t
            ? u(this, t)
            : (function (t, e, r, n) {
                if ("number" == typeof e)
                  throw new TypeError('"value" argument must not be a number');
                if (
                  "undefined" != typeof ArrayBuffer &&
                  e instanceof ArrayBuffer
                )
                  return (function (t, e, r, n) {
                    if (r < 0 || e.byteLength < r)
                      throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < r + (n || 0))
                      throw new RangeError("'length' is out of bounds");
                    var o;
                    o =
                      void 0 === r && void 0 === n
                        ? new Uint8Array(e)
                        : void 0 === n
                        ? new Uint8Array(e, r)
                        : new Uint8Array(e, r, n);
                    i.TYPED_ARRAY_SUPPORT
                      ? (o.__proto__ = i.prototype)
                      : (o = c(t, o));
                    return o;
                  })(t, e, r, n);
                if ("string" == typeof e)
                  return (function (t, e) {
                    var r = 0 | l(e),
                      n = s(t, r),
                      o = n.write(e);
                    o !== r && (n = n.slice(0, o));
                    return n;
                  })(t, e);
                return (function (t, e) {
                  if (i.isBuffer(e)) {
                    var r = 0 | a(e.length),
                      n = s(t, r);
                    return 0 === n.length || e.copy(n, 0, 0, r), n;
                  }
                  if (e) {
                    if (
                      ("undefined" != typeof ArrayBuffer &&
                        e.buffer instanceof ArrayBuffer) ||
                      "length" in e
                    )
                      return "number" != typeof e.length || (o = e.length) != o
                        ? s(t, 0)
                        : c(t, e);
                    if ("Buffer" === e.type && Array.isArray(e.data))
                      return c(t, e.data);
                  }
                  var o;
                  throw new TypeError(
                    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                  );
                })(t, e);
              })(this, t, e, r)
          : new i(t, e, r);
      }
      function a(t) {
        if (t >= o)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              o.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function s(t, e) {
        var r;
        return (
          i.TYPED_ARRAY_SUPPORT
            ? ((r = new Uint8Array(e)).__proto__ = i.prototype)
            : (null === (r = t) && (r = new i(e)), (r.length = e)),
          r
        );
      }
      function u(t, e) {
        var r = s(t, e < 0 ? 0 : 0 | a(e));
        if (!i.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) r[n] = 0;
        return r;
      }
      function c(t, e) {
        for (
          var r = e.length < 0 ? 0 : 0 | a(e.length), n = s(t, r), o = 0;
          o < r;
          o += 1
        )
          n[o] = 255 & e[o];
        return n;
      }
      function f(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
          if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = 65536 + (((o - 55296) << 10) | (r - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return i;
      }
      function l(t) {
        return i.isBuffer(t)
          ? t.length
          : "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          ? t.byteLength
          : ("string" != typeof t && (t = "" + t),
            0 === t.length ? 0 : f(t).length);
      }
      i.TYPED_ARRAY_SUPPORT &&
        ((i.prototype.__proto__ = Uint8Array.prototype),
        (i.__proto__ = Uint8Array),
        "undefined" != typeof Symbol &&
          Symbol.species &&
          i[Symbol.species] === i &&
          Object.defineProperty(i, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1,
          })),
        (i.prototype.write = function (t, e, r) {
          void 0 === e || (void 0 === r && "string" == typeof e)
            ? ((r = this.length), (e = 0))
            : isFinite(e) && ((e |= 0), isFinite(r) ? (r |= 0) : (r = void 0));
          var n = this.length - e;
          if (
            ((void 0 === r || r > n) && (r = n),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          return (function (t, e, r, n) {
            return (function (t, e, r, n) {
              for (
                var o = 0;
                o < n && !(o + r >= e.length || o >= t.length);
                ++o
              )
                e[o + r] = t[o];
              return o;
            })(f(e, t.length - r), t, r, n);
          })(this, t, e, r);
        }),
        (i.prototype.slice = function (t, e) {
          var r,
            n = this.length;
          if (
            ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0
              ? (e += n) < 0 && (e = 0)
              : e > n && (e = n),
            e < t && (e = t),
            i.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(t, e)).__proto__ = i.prototype;
          else {
            var o = e - t;
            r = new i(o, void 0);
            for (var a = 0; a < o; ++a) r[a] = this[a + t];
          }
          return r;
        }),
        (i.prototype.copy = function (t, e, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          var o,
            a = n - r;
          if (this === t && r < e && e < n)
            for (o = a - 1; o >= 0; --o) t[o + e] = this[o + r];
          else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < a; ++o) t[o + e] = this[o + r];
          else Uint8Array.prototype.set.call(t, this.subarray(r, r + a), e);
          return a;
        }),
        (i.prototype.fill = function (t, e, r) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((e = 0), (r = this.length))
                : "string" == typeof r && (r = this.length),
              1 === t.length)
            ) {
              var n = t.charCodeAt(0);
              n < 256 && (t = n);
            }
          } else "number" == typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          var o;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t;
          else {
            var a = i.isBuffer(t) ? t : new i(t),
              s = a.length;
            for (o = 0; o < r - e; ++o) this[o + e] = a[o % s];
          }
          return this;
        }),
        (i.concat = function (t, e) {
          if (!n(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return s(null, 0);
          var r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          var o = u(null, e),
            a = 0;
          for (r = 0; r < t.length; ++r) {
            var c = t[r];
            if (!i.isBuffer(c))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            c.copy(o, a), (a += c.length);
          }
          return o;
        }),
        (i.byteLength = l),
        (i.prototype._isBuffer = !0),
        (i.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (t.exports.alloc = function (t) {
          var e = new i(t);
          return e.fill(0), e;
        }),
        (t.exports.from = function (t) {
          return new i(t);
        });
    },
    function (t, e, r) {
      "use strict";
      var n = r(25),
        o =
          Object.keys ||
          function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e;
          };
      t.exports = l;
      var i = Object.create(r(20));
      i.inherits = r(12);
      var a = r(78),
        s = r(81);
      i.inherits(l, a);
      for (var u = o(s.prototype), c = 0; c < u.length; c++) {
        var f = u[c];
        l.prototype[f] || (l.prototype[f] = s.prototype[f]);
      }
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        a.call(this, t),
          s.call(this, t),
          t && !1 === t.readable && (this.readable = !1),
          t && !1 === t.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once("end", h);
      }
      function h() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(p, this);
      }
      function p(t) {
        t.end();
      }
      Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(l.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t));
          },
        }),
        (l.prototype._destroy = function (t, e) {
          this.push(null), this.end(), n.nextTick(e, t);
        });
    },
    function (t, e) {
      var r = {}.toString;
      t.exports = function (t) {
        return r.call(t).slice(8, -1);
      };
    },
    function (t, e, r) {
      var n = r(91),
        o = r(0),
        i = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2
          ? i(n[t]) || i(o[t])
          : (n[t] && n[t][e]) || (o[t] && o[t][e]);
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, r) {
      (function (t) {
        function r(t) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function n(t) {
          return Object.prototype.toString.call(t);
        }
        (e.isArray = function (t) {
          return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t);
        }),
          (e.isBoolean = function (t) {
            return "boolean" == typeof t;
          }),
          (e.isNull = function (t) {
            return null === t;
          }),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = function (t) {
            return "number" == typeof t;
          }),
          (e.isString = function (t) {
            return "string" == typeof t;
          }),
          (e.isSymbol = function (t) {
            return "symbol" === r(t);
          }),
          (e.isUndefined = function (t) {
            return void 0 === t;
          }),
          (e.isRegExp = function (t) {
            return "[object RegExp]" === n(t);
          }),
          (e.isObject = function (t) {
            return "object" === r(t) && null !== t;
          }),
          (e.isDate = function (t) {
            return "[object Date]" === n(t);
          }),
          (e.isError = function (t) {
            return "[object Error]" === n(t) || t instanceof Error;
          }),
          (e.isFunction = function (t) {
            return "function" == typeof t;
          }),
          (e.isPrimitive = function (t) {
            return (
              null === t ||
              "boolean" == typeof t ||
              "number" == typeof t ||
              "string" == typeof t ||
              "symbol" === r(t) ||
              void 0 === t
            );
          }),
          (e.isBuffer = t.isBuffer);
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      var n = r(87),
        o = r(43);
      t.exports = function (t) {
        return n(o(t));
      };
    },
    function (t, e, r) {
      var n = r(0),
        o = r(13),
        i = r(3),
        a = r(31),
        s = r(32),
        u = r(33),
        c = u.get,
        f = u.enforce,
        l = String(String).split("String");
      (t.exports = function (t, e, r, s) {
        var u = !!s && !!s.unsafe,
          c = !!s && !!s.enumerable,
          h = !!s && !!s.noTargetGet;
        "function" == typeof r &&
          ("string" != typeof e || i(r, "name") || o(r, "name", e),
          (f(r).source = l.join("string" == typeof e ? e : ""))),
          t !== n
            ? (u ? !h && t[e] && (c = !0) : delete t[e],
              c ? (t[e] = r) : o(t, e, r))
            : c
            ? (t[e] = r)
            : a(e, r);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && c(this).source) || s(this);
      });
    },
    function (t, e) {
      t.exports = !1;
    },
    function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      (function (e) {
        void 0 === e ||
        !e.version ||
        0 === e.version.indexOf("v0.") ||
        (0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8."))
          ? (t.exports = {
              nextTick: function (t, r, n, o) {
                if ("function" != typeof t)
                  throw new TypeError('"callback" argument must be a function');
                var i,
                  a,
                  s = arguments.length;
                switch (s) {
                  case 0:
                  case 1:
                    return e.nextTick(t);
                  case 2:
                    return e.nextTick(function () {
                      t.call(null, r);
                    });
                  case 3:
                    return e.nextTick(function () {
                      t.call(null, r, n);
                    });
                  case 4:
                    return e.nextTick(function () {
                      t.call(null, r, n, o);
                    });
                  default:
                    for (i = new Array(s - 1), a = 0; a < i.length; )
                      i[a++] = arguments[a];
                    return e.nextTick(function () {
                      t.apply(null, i);
                    });
                }
              },
            })
          : (t.exports = e);
      }.call(this, r(6)));
    },
    function (t, e, r) {
      var n = r(10),
        o = n.Buffer;
      function i(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function a(t, e, r) {
        return o(t, e, r);
      }
      o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
        ? (t.exports = n)
        : (i(n, e), (e.Buffer = a)),
        i(o, a),
        (a.from = function (t, e, r) {
          if ("number" == typeof t)
            throw new TypeError("Argument must not be a number");
          return o(t, e, r);
        }),
        (a.alloc = function (t, e, r) {
          if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
          var n = o(t);
          return (
            void 0 !== e
              ? "string" == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (a.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
          return o(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
          return n.SlowBuffer(t);
        });
    },
    function (t, e, r) {
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = r(0),
        i = r(28).f,
        a = r(13),
        s = r(22),
        u = r(31),
        c = r(89),
        f = r(53);
      t.exports = function (t, e) {
        var r,
          l,
          h,
          p,
          d,
          m = t.target,
          g = t.global,
          y = t.stat;
        if ((r = g ? o : y ? o[m] || u(m, {}) : (o[m] || {}).prototype))
          for (l in e) {
            if (
              ((p = e[l]),
              (h = t.noTargetGet ? (d = i(r, l)) && d.value : r[l]),
              !f(g ? l : m + (y ? "." : "#") + l, t.forced) && void 0 !== h)
            ) {
              if (n(p) === n(h)) continue;
              c(p, h);
            }
            (t.sham || (h && h.sham)) && a(p, "sham", !0), s(r, l, p, t);
          }
      };
    },
    function (t, e, r) {
      var n = r(7),
        o = r(86),
        i = r(29),
        a = r(21),
        s = r(44),
        u = r(3),
        c = r(45),
        f = Object.getOwnPropertyDescriptor;
      e.f = n
        ? f
        : function (t, e) {
            if (((t = a(t)), (e = s(e, !0)), c))
              try {
                return f(t, e);
              } catch (t) {}
            if (u(t, e)) return i(!o.f.call(t, e), t[e]);
          };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e, r) {
      var n = r(0),
        o = r(8),
        i = n.document,
        a = o(i) && o(i.createElement);
      t.exports = function (t) {
        return a ? i.createElement(t) : {};
      };
    },
    function (t, e, r) {
      var n = r(0),
        o = r(13);
      t.exports = function (t, e) {
        try {
          o(n, t, e);
        } catch (r) {
          n[t] = e;
        }
        return e;
      };
    },
    function (t, e, r) {
      var n = r(46),
        o = Function.toString;
      "function" != typeof n.inspectSource &&
        (n.inspectSource = function (t) {
          return o.call(t);
        }),
        (t.exports = n.inspectSource);
    },
    function (t, e, r) {
      var n,
        o,
        i,
        a = r(88),
        s = r(0),
        u = r(8),
        c = r(13),
        f = r(3),
        l = r(34),
        h = r(35),
        p = s.WeakMap;
      if (a) {
        var d = new p(),
          m = d.get,
          g = d.has,
          y = d.set;
        (n = function (t, e) {
          return y.call(d, t, e), e;
        }),
          (o = function (t) {
            return m.call(d, t) || {};
          }),
          (i = function (t) {
            return g.call(d, t);
          });
      } else {
        var b = l("state");
        (h[b] = !0),
          (n = function (t, e) {
            return c(t, b, e), e;
          }),
          (o = function (t) {
            return f(t, b) ? t[b] : {};
          }),
          (i = function (t) {
            return f(t, b);
          });
      }
      t.exports = {
        set: n,
        get: o,
        has: i,
        enforce: function (t) {
          return i(t) ? o(t) : n(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var r;
            if (!u(e) || (r = o(e)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return r;
          };
        },
      };
    },
    function (t, e, r) {
      var n = r(47),
        o = r(48),
        i = n("keys");
      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (t, e, r) {
      var n = r(14).f,
        o = r(3),
        i = r(2)("toStringTag");
      t.exports = function (t, e, r) {
        t &&
          !o((t = r ? t : t.prototype), i) &&
          n(t, i, { configurable: !0, value: e });
      };
    },
    function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == r.call(t);
        };
    },
    function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw new Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = function (t) {
        return (
          (function (t) {
            return !!t && "object" === n(t);
          })(t) &&
          !(function (t) {
            var e = Object.prototype.toString.call(t);
            return (
              "[object RegExp]" === e ||
              "[object Date]" === e ||
              (function (t) {
                return t.$$typeof === i;
              })(t)
            );
          })(t)
        );
      };
      var i =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function a(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t)
          ? l(((r = t), Array.isArray(r) ? [] : {}), t, e)
          : t;
        var r;
      }
      function s(t, e, r) {
        return t.concat(e).map(function (t) {
          return a(t, r);
        });
      }
      function u(t) {
        return Object.keys(t).concat(
          (function (t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function (e) {
                  return t.propertyIsEnumerable(e);
                })
              : [];
          })(t)
        );
      }
      function c(t, e) {
        try {
          return e in t;
        } catch (t) {
          return !1;
        }
      }
      function f(t, e, r) {
        var n = {};
        return (
          r.isMergeableObject(t) &&
            u(t).forEach(function (e) {
              n[e] = a(t[e], r);
            }),
          u(e).forEach(function (o) {
            (function (t, e) {
              return (
                c(t, e) &&
                !(
                  Object.hasOwnProperty.call(t, e) &&
                  Object.propertyIsEnumerable.call(t, e)
                )
              );
            })(t, o) ||
              (c(t, o) && r.isMergeableObject(e[o])
                ? (n[o] = (function (t, e) {
                    if (!e.customMerge) return l;
                    var r = e.customMerge(t);
                    return "function" == typeof r ? r : l;
                  })(o, r)(t[o], e[o], r))
                : (n[o] = a(e[o], r)));
          }),
          n
        );
      }
      function l(t, e, r) {
        ((r = r || {}).arrayMerge = r.arrayMerge || s),
          (r.isMergeableObject = r.isMergeableObject || o),
          (r.cloneUnlessOtherwiseSpecified = a);
        var n = Array.isArray(e);
        return n === Array.isArray(t)
          ? n
            ? r.arrayMerge(t, e, r)
            : f(t, e, r)
          : a(e, r);
      }
      l.all = function (t, e) {
        if (!Array.isArray(t))
          throw new Error("first argument should be an array");
        return t.reduce(function (t, r) {
          return l(t, r, e);
        }, {});
      };
      var h = l;
      t.exports = h;
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = r(170),
        i = r(172);
      function a() {
        (this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.host = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.query = null),
          (this.pathname = null),
          (this.path = null),
          (this.href = null);
      }
      (e.parse = w),
        (e.resolve = function (t, e) {
          return w(t, !1, !0).resolve(e);
        }),
        (e.resolveObject = function (t, e) {
          return t ? w(t, !1, !0).resolveObject(e) : e;
        }),
        (e.format = function (t) {
          i.isString(t) && (t = w(t));
          return t instanceof a ? t.format() : a.prototype.format.call(t);
        }),
        (e.Url = a);
      var s = /^([a-z0-9.+-]+:)/i,
        u = /:[0-9]*$/,
        c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        f = ["{", "}", "|", "\\", "^", "`"].concat([
          "<",
          ">",
          '"',
          "`",
          " ",
          "\r",
          "\n",
          "\t",
        ]),
        l = ["'"].concat(f),
        h = ["%", "/", "?", ";", "#"].concat(l),
        p = ["/", "?", "#"],
        d = /^[+a-z0-9A-Z_-]{0,63}$/,
        m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        g = { javascript: !0, "javascript:": !0 },
        y = { javascript: !0, "javascript:": !0 },
        b = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0,
        },
        v = r(173);
      function w(t, e, r) {
        if (t && i.isObject(t) && t instanceof a) return t;
        var n = new a();
        return n.parse(t, e, r), n;
      }
      (a.prototype.parse = function (t, e, r) {
        if (!i.isString(t))
          throw new TypeError("Parameter 'url' must be a string, not " + n(t));
        var a = t.indexOf("?"),
          u = -1 !== a && a < t.indexOf("#") ? "?" : "#",
          f = t.split(u);
        f[0] = f[0].replace(/\\/g, "/");
        var w = (t = f.join(u));
        if (((w = w.trim()), !r && 1 === t.split("#").length)) {
          var _ = c.exec(w);
          if (_)
            return (
              (this.path = w),
              (this.href = w),
              (this.pathname = _[1]),
              _[2]
                ? ((this.search = _[2]),
                  (this.query = e
                    ? v.parse(this.search.substr(1))
                    : this.search.substr(1)))
                : e && ((this.search = ""), (this.query = {})),
              this
            );
        }
        var x = s.exec(w);
        if (x) {
          var S = (x = x[0]).toLowerCase();
          (this.protocol = S), (w = w.substr(x.length));
        }
        if (r || x || w.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var E = "//" === w.substr(0, 2);
          !E || (x && y[x]) || ((w = w.substr(2)), (this.slashes = !0));
        }
        if (!y[x] && (E || (x && !b[x]))) {
          for (var k, T, A = -1, C = 0; C < p.length; C++) {
            -1 !== (O = w.indexOf(p[C])) && (-1 === A || O < A) && (A = O);
          }
          -1 !== (T = -1 === A ? w.lastIndexOf("@") : w.lastIndexOf("@", A)) &&
            ((k = w.slice(0, T)),
            (w = w.slice(T + 1)),
            (this.auth = decodeURIComponent(k))),
            (A = -1);
          for (C = 0; C < h.length; C++) {
            var O;
            -1 !== (O = w.indexOf(h[C])) && (-1 === A || O < A) && (A = O);
          }
          -1 === A && (A = w.length),
            (this.host = w.slice(0, A)),
            (w = w.slice(A)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
          var R =
            "[" === this.hostname[0] &&
            "]" === this.hostname[this.hostname.length - 1];
          if (!R)
            for (
              var P = this.hostname.split(/\./), j = ((C = 0), P.length);
              C < j;
              C++
            ) {
              var M = P[C];
              if (M && !M.match(d)) {
                for (var L = "", I = 0, B = M.length; I < B; I++)
                  M.charCodeAt(I) > 127 ? (L += "x") : (L += M[I]);
                if (!L.match(d)) {
                  var N = P.slice(0, C),
                    U = P.slice(C + 1),
                    D = M.match(m);
                  D && (N.push(D[1]), U.unshift(D[2])),
                    U.length && (w = "/" + U.join(".") + w),
                    (this.hostname = N.join("."));
                  break;
                }
              }
            }
          this.hostname.length > 255
            ? (this.hostname = "")
            : (this.hostname = this.hostname.toLowerCase()),
            R || (this.hostname = o.toASCII(this.hostname));
          var z = this.port ? ":" + this.port : "",
            F = this.hostname || "";
          (this.host = F + z),
            (this.href += this.host),
            R &&
              ((this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2
              )),
              "/" !== w[0] && (w = "/" + w));
        }
        if (!g[S])
          for (C = 0, j = l.length; C < j; C++) {
            var q = l[C];
            if (-1 !== w.indexOf(q)) {
              var H = encodeURIComponent(q);
              H === q && (H = escape(q)), (w = w.split(q).join(H));
            }
          }
        var Y = w.indexOf("#");
        -1 !== Y && ((this.hash = w.substr(Y)), (w = w.slice(0, Y)));
        var W = w.indexOf("?");
        if (
          (-1 !== W
            ? ((this.search = w.substr(W)),
              (this.query = w.substr(W + 1)),
              e && (this.query = v.parse(this.query)),
              (w = w.slice(0, W)))
            : e && ((this.search = ""), (this.query = {})),
          w && (this.pathname = w),
          b[S] && this.hostname && !this.pathname && (this.pathname = "/"),
          this.pathname || this.search)
        ) {
          z = this.pathname || "";
          var V = this.search || "";
          this.path = z + V;
        }
        return (this.href = this.format()), this;
      }),
        (a.prototype.format = function () {
          var t = this.auth || "";
          t &&
            ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")),
            (t += "@"));
          var e = this.protocol || "",
            r = this.pathname || "",
            n = this.hash || "",
            o = !1,
            a = "";
          this.host
            ? (o = t + this.host)
            : this.hostname &&
              ((o =
                t +
                (-1 === this.hostname.indexOf(":")
                  ? this.hostname
                  : "[" + this.hostname + "]")),
              this.port && (o += ":" + this.port)),
            this.query &&
              i.isObject(this.query) &&
              Object.keys(this.query).length &&
              (a = v.stringify(this.query));
          var s = this.search || (a && "?" + a) || "";
          return (
            e && ":" !== e.substr(-1) && (e += ":"),
            this.slashes || ((!e || b[e]) && !1 !== o)
              ? ((o = "//" + (o || "")),
                r && "/" !== r.charAt(0) && (r = "/" + r))
              : o || (o = ""),
            n && "#" !== n.charAt(0) && (n = "#" + n),
            s && "?" !== s.charAt(0) && (s = "?" + s),
            e +
              o +
              (r = r.replace(/[?#]/g, function (t) {
                return encodeURIComponent(t);
              })) +
              (s = s.replace("#", "%23")) +
              n
          );
        }),
        (a.prototype.resolve = function (t) {
          return this.resolveObject(w(t, !1, !0)).format();
        }),
        (a.prototype.resolveObject = function (t) {
          if (i.isString(t)) {
            var e = new a();
            e.parse(t, !1, !0), (t = e);
          }
          for (
            var r = new a(), n = Object.keys(this), o = 0;
            o < n.length;
            o++
          ) {
            var s = n[o];
            r[s] = this[s];
          }
          if (((r.hash = t.hash), "" === t.href))
            return (r.href = r.format()), r;
          if (t.slashes && !t.protocol) {
            for (var u = Object.keys(t), c = 0; c < u.length; c++) {
              var f = u[c];
              "protocol" !== f && (r[f] = t[f]);
            }
            return (
              b[r.protocol] &&
                r.hostname &&
                !r.pathname &&
                (r.path = r.pathname = "/"),
              (r.href = r.format()),
              r
            );
          }
          if (t.protocol && t.protocol !== r.protocol) {
            if (!b[t.protocol]) {
              for (var l = Object.keys(t), h = 0; h < l.length; h++) {
                var p = l[h];
                r[p] = t[p];
              }
              return (r.href = r.format()), r;
            }
            if (((r.protocol = t.protocol), t.host || y[t.protocol]))
              r.pathname = t.pathname;
            else {
              for (
                var d = (t.pathname || "").split("/");
                d.length && !(t.host = d.shift());

              );
              t.host || (t.host = ""),
                t.hostname || (t.hostname = ""),
                "" !== d[0] && d.unshift(""),
                d.length < 2 && d.unshift(""),
                (r.pathname = d.join("/"));
            }
            if (
              ((r.search = t.search),
              (r.query = t.query),
              (r.host = t.host || ""),
              (r.auth = t.auth),
              (r.hostname = t.hostname || t.host),
              (r.port = t.port),
              r.pathname || r.search)
            ) {
              var m = r.pathname || "",
                g = r.search || "";
              r.path = m + g;
            }
            return (
              (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r
            );
          }
          var v = r.pathname && "/" === r.pathname.charAt(0),
            w = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
            _ = w || v || (r.host && t.pathname),
            x = _,
            S = (r.pathname && r.pathname.split("/")) || [],
            E =
              ((d = (t.pathname && t.pathname.split("/")) || []),
              r.protocol && !b[r.protocol]);
          if (
            (E &&
              ((r.hostname = ""),
              (r.port = null),
              r.host && ("" === S[0] ? (S[0] = r.host) : S.unshift(r.host)),
              (r.host = ""),
              t.protocol &&
                ((t.hostname = null),
                (t.port = null),
                t.host && ("" === d[0] ? (d[0] = t.host) : d.unshift(t.host)),
                (t.host = null)),
              (_ = _ && ("" === d[0] || "" === S[0]))),
            w)
          )
            (r.host = t.host || "" === t.host ? t.host : r.host),
              (r.hostname =
                t.hostname || "" === t.hostname ? t.hostname : r.hostname),
              (r.search = t.search),
              (r.query = t.query),
              (S = d);
          else if (d.length)
            S || (S = []),
              S.pop(),
              (S = S.concat(d)),
              (r.search = t.search),
              (r.query = t.query);
          else if (!i.isNullOrUndefined(t.search)) {
            if (E)
              (r.hostname = r.host = S.shift()),
                (O =
                  !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                  ((r.auth = O.shift()), (r.host = r.hostname = O.shift()));
            return (
              (r.search = t.search),
              (r.query = t.query),
              (i.isNull(r.pathname) && i.isNull(r.search)) ||
                (r.path =
                  (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
              (r.href = r.format()),
              r
            );
          }
          if (!S.length)
            return (
              (r.pathname = null),
              r.search ? (r.path = "/" + r.search) : (r.path = null),
              (r.href = r.format()),
              r
            );
          for (
            var k = S.slice(-1)[0],
              T =
                ((r.host || t.host || S.length > 1) &&
                  ("." === k || ".." === k)) ||
                "" === k,
              A = 0,
              C = S.length;
            C >= 0;
            C--
          )
            "." === (k = S[C])
              ? S.splice(C, 1)
              : ".." === k
              ? (S.splice(C, 1), A++)
              : A && (S.splice(C, 1), A--);
          if (!_ && !x) for (; A--; A) S.unshift("..");
          !_ ||
            "" === S[0] ||
            (S[0] && "/" === S[0].charAt(0)) ||
            S.unshift(""),
            T && "/" !== S.join("/").substr(-1) && S.push("");
          var O,
            R = "" === S[0] || (S[0] && "/" === S[0].charAt(0));
          E &&
            ((r.hostname = r.host = R ? "" : S.length ? S.shift() : ""),
            (O = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
              ((r.auth = O.shift()), (r.host = r.hostname = O.shift())));
          return (
            (_ = _ || (r.host && S.length)) && !R && S.unshift(""),
            S.length
              ? (r.pathname = S.join("/"))
              : ((r.pathname = null), (r.path = null)),
            (i.isNull(r.pathname) && i.isNull(r.search)) ||
              (r.path =
                (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
            (r.auth = t.auth || r.auth),
            (r.slashes = r.slashes || t.slashes),
            (r.href = r.format()),
            r
          );
        }),
        (a.prototype.parseHost = function () {
          var t = this.host,
            e = u.exec(t);
          e &&
            (":" !== (e = e[0]) && (this.port = e.substr(1)),
            (t = t.substr(0, t.length - e.length))),
            t && (this.hostname = t);
        });
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o,
        i =
          "object" ===
          ("undefined" == typeof Reflect ? "undefined" : n(Reflect))
            ? Reflect
            : null,
        a =
          i && "function" == typeof i.apply
            ? i.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      o =
        i && "function" == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var s =
        Number.isNaN ||
        function (t) {
          return t != t;
        };
      function u() {
        u.init.call(this);
      }
      (t.exports = u),
        (t.exports.once = function (t, e) {
          return new Promise(function (r, n) {
            function o() {
              void 0 !== i && t.removeListener("error", i),
                r([].slice.call(arguments));
            }
            var i;
            "error" !== e &&
              ((i = function (r) {
                t.removeListener(e, o), n(r);
              }),
              t.once("error", i)),
              t.once(e, o);
          });
        }),
        (u.EventEmitter = u),
        (u.prototype._events = void 0),
        (u.prototype._eventsCount = 0),
        (u.prototype._maxListeners = void 0);
      var c = 10;
      function f(t) {
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              n(t)
          );
      }
      function l(t) {
        return void 0 === t._maxListeners
          ? u.defaultMaxListeners
          : t._maxListeners;
      }
      function h(t, e, r, n) {
        var o, i, a, s;
        if (
          (f(r),
          void 0 === (i = t._events)
            ? ((i = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== i.newListener &&
                (t.emit("newListener", e, r.listener ? r.listener : r),
                (i = t._events)),
              (a = i[e])),
          void 0 === a)
        )
          (a = i[e] = r), ++t._eventsCount;
        else if (
          ("function" == typeof a
            ? (a = i[e] = n ? [r, a] : [a, r])
            : n
            ? a.unshift(r)
            : a.push(r),
          (o = l(t)) > 0 && a.length > o && !a.warned)
        ) {
          a.warned = !0;
          var u = new Error(
            "Possible EventEmitter memory leak detected. " +
              a.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (u.name = "MaxListenersExceededWarning"),
            (u.emitter = t),
            (u.type = e),
            (u.count = a.length),
            (s = u),
            console && console.warn && console.warn(s);
        }
        return t;
      }
      function p() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function d(t, e, r) {
        var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          o = p.bind(n);
        return (o.listener = r), (n.wrapFn = o), o;
      }
      function m(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var o = n[e];
        return void 0 === o
          ? []
          : "function" == typeof o
          ? r
            ? [o.listener || o]
            : [o]
          : r
          ? (function (t) {
              for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                e[r] = t[r].listener || t[r];
              return e;
            })(o)
          : y(o, o.length);
      }
      function g(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function y(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      Object.defineProperty(u, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (t) {
          if ("number" != typeof t || t < 0 || s(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          c = t;
        },
      }),
        (u.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (u.prototype.setMaxListeners = function (t) {
          if ("number" != typeof t || t < 0 || s(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (u.prototype.getMaxListeners = function () {
          return l(this);
        }),
        (u.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e.push(arguments[r]);
          var n = "error" === t,
            o = this._events;
          if (void 0 !== o) n = n && void 0 === o.error;
          else if (!n) return !1;
          if (n) {
            var i;
            if ((e.length > 0 && (i = e[0]), i instanceof Error)) throw i;
            var s = new Error(
              "Unhandled error." + (i ? " (" + i.message + ")" : "")
            );
            throw ((s.context = i), s);
          }
          var u = o[t];
          if (void 0 === u) return !1;
          if ("function" == typeof u) a(u, this, e);
          else {
            var c = u.length,
              f = y(u, c);
            for (r = 0; r < c; ++r) a(f[r], this, e);
          }
          return !0;
        }),
        (u.prototype.addListener = function (t, e) {
          return h(this, t, e, !1);
        }),
        (u.prototype.on = u.prototype.addListener),
        (u.prototype.prependListener = function (t, e) {
          return h(this, t, e, !0);
        }),
        (u.prototype.once = function (t, e) {
          return f(e), this.on(t, d(this, t, e)), this;
        }),
        (u.prototype.prependOnceListener = function (t, e) {
          return f(e), this.prependListener(t, d(this, t, e)), this;
        }),
        (u.prototype.removeListener = function (t, e) {
          var r, n, o, i, a;
          if ((f(e), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[t])) return this;
          if (r === e || r.listener === e)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[t],
                n.removeListener &&
                  this.emit("removeListener", t, r.listener || e));
          else if ("function" != typeof r) {
            for (o = -1, i = r.length - 1; i >= 0; i--)
              if (r[i] === e || r[i].listener === e) {
                (a = r[i].listener), (o = i);
                break;
              }
            if (o < 0) return this;
            0 === o
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, o),
              1 === r.length && (n[t] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", t, a || e);
          }
          return this;
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.removeAllListeners = function (t) {
          var e, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var o,
              i = Object.keys(r);
            for (n = 0; n < i.length; ++n)
              "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
          return this;
        }),
        (u.prototype.listeners = function (t) {
          return m(this, t, !0);
        }),
        (u.prototype.rawListeners = function (t) {
          return m(this, t, !1);
        }),
        (u.listenerCount = function (t, e) {
          return "function" == typeof t.listenerCount
            ? t.listenerCount(e)
            : g.call(t, e);
        }),
        (u.prototype.listenerCount = g),
        (u.prototype.eventNames = function () {
          return this._eventsCount > 0 ? o(this._events) : [];
        });
    },
    function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    function (t, e, r) {
      var n = r(8);
      t.exports = function (t, e) {
        if (!n(t)) return t;
        var r, o;
        if (e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
          return o;
        if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t))))
          return o;
        if (!e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, e, r) {
      var n = r(7),
        o = r(5),
        i = r(30);
      t.exports =
        !n &&
        !o(function () {
          return (
            7 !=
            Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, e, r) {
      var n = r(0),
        o = r(31),
        i = n["__core-js_shared__"] || o("__core-js_shared__", {});
      t.exports = i;
    },
    function (t, e, r) {
      var n = r(23),
        o = r(46);
      (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: n ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (t, e) {
      var r = 0,
        n = Math.random();
      t.exports = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++r + n).toString(36)
        );
      };
    },
    function (t, e, r) {
      var n = r(3),
        o = r(21),
        i = r(50).indexOf,
        a = r(35);
      t.exports = function (t, e) {
        var r,
          s = o(t),
          u = 0,
          c = [];
        for (r in s) !n(a, r) && n(s, r) && c.push(r);
        for (; e.length > u; ) n(s, (r = e[u++])) && (~i(c, r) || c.push(r));
        return c;
      };
    },
    function (t, e, r) {
      var n = r(21),
        o = r(51),
        i = r(93),
        a = function (t) {
          return function (e, r, a) {
            var s,
              u = n(e),
              c = o(u.length),
              f = i(a, c);
            if (t && r != r) {
              for (; c > f; ) if ((s = u[f++]) != s) return !0;
            } else
              for (; c > f; f++)
                if ((t || f in u) && u[f] === r) return t || f || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    function (t, e, r) {
      var n = r(52),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0;
      };
    },
    function (t, e) {
      var r = Math.ceil,
        n = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
      };
    },
    function (t, e, r) {
      var n = r(5),
        o = /#|\.prototype\./,
        i = function (t, e) {
          var r = s[a(t)];
          return r == c || (r != u && ("function" == typeof e ? n(e) : !!e));
        },
        a = (i.normalize = function (t) {
          return String(t).replace(o, ".").toLowerCase();
        }),
        s = (i.data = {}),
        u = (i.NATIVE = "N"),
        c = (i.POLYFILL = "P");
      t.exports = i;
    },
    function (t, e, r) {
      var n = r(5);
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !n(function () {
          return !String(Symbol());
        });
    },
    function (t, e, r) {
      var n = r(24);
      t.exports = function (t, e, r) {
        if ((n(t), void 0 === e)) return t;
        switch (r) {
          case 0:
            return function () {
              return t.call(e);
            };
          case 1:
            return function (r) {
              return t.call(e, r);
            };
          case 2:
            return function (r, n) {
              return t.call(e, r, n);
            };
          case 3:
            return function (r, n, o) {
              return t.call(e, r, n, o);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    function (t, e, r) {
      var n,
        o,
        i,
        a = r(0),
        s = r(5),
        u = r(17),
        c = r(55),
        f = r(57),
        l = r(30),
        h = r(58),
        p = a.location,
        d = a.setImmediate,
        m = a.clearImmediate,
        g = a.process,
        y = a.MessageChannel,
        b = a.Dispatch,
        v = 0,
        w = {},
        _ = function (t) {
          if (w.hasOwnProperty(t)) {
            var e = w[t];
            delete w[t], e();
          }
        },
        x = function (t) {
          return function () {
            _(t);
          };
        },
        S = function (t) {
          _(t.data);
        },
        E = function (t) {
          a.postMessage(t + "", p.protocol + "//" + p.host);
        };
      (d && m) ||
        ((d = function (t) {
          for (var e = [], r = 1; arguments.length > r; )
            e.push(arguments[r++]);
          return (
            (w[++v] = function () {
              ("function" == typeof t ? t : Function(t)).apply(void 0, e);
            }),
            n(v),
            v
          );
        }),
        (m = function (t) {
          delete w[t];
        }),
        "process" == u(g)
          ? (n = function (t) {
              g.nextTick(x(t));
            })
          : b && b.now
          ? (n = function (t) {
              b.now(x(t));
            })
          : y && !h
          ? ((i = (o = new y()).port2),
            (o.port1.onmessage = S),
            (n = c(i.postMessage, i, 1)))
          : !a.addEventListener ||
            "function" != typeof postMessage ||
            a.importScripts ||
            s(E) ||
            "file:" === p.protocol
          ? (n =
              "onreadystatechange" in l("script")
                ? function (t) {
                    f.appendChild(
                      l("script")
                    ).onreadystatechange = function () {
                      f.removeChild(this), _(t);
                    };
                  }
                : function (t) {
                    setTimeout(x(t), 0);
                  })
          : ((n = E), a.addEventListener("message", S, !1))),
        (t.exports = { set: d, clear: m });
    },
    function (t, e, r) {
      var n = r(18);
      t.exports = n("document", "documentElement");
    },
    function (t, e, r) {
      var n = r(59);
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
    },
    function (t, e, r) {
      var n = r(18);
      t.exports = n("navigator", "userAgent") || "";
    },
    function (t, e, r) {
      "use strict";
      var n = r(24),
        o = function (t) {
          var e, r;
          (this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== r)
              throw TypeError("Bad Promise constructor");
            (e = t), (r = n);
          })),
            (this.resolve = n(e)),
            (this.reject = n(r));
        };
      t.exports.f = function (t) {
        return new o(t);
      };
    },
    function (t, e, r) {
      var n = r(2),
        o = r(62),
        i = r(14),
        a = n("unscopables"),
        s = Array.prototype;
      null == s[a] && i.f(s, a, { configurable: !0, value: o(null) }),
        (t.exports = function (t) {
          s[a][t] = !0;
        });
    },
    function (t, e, r) {
      var n,
        o = r(4),
        i = r(114),
        a = r(36),
        s = r(35),
        u = r(57),
        c = r(30),
        f = r(34),
        l = f("IE_PROTO"),
        h = function () {},
        p = function (t) {
          return "<script>" + t + "</script>";
        },
        d = function () {
          try {
            n = document.domain && new ActiveXObject("htmlfile");
          } catch (t) {}
          var t, e;
          d = n
            ? (function (t) {
                t.write(p("")), t.close();
                var e = t.parentWindow.Object;
                return (t = null), e;
              })(n)
            : (((e = c("iframe")).style.display = "none"),
              u.appendChild(e),
              (e.src = String("javascript:")),
              (t = e.contentWindow.document).open(),
              t.write(p("document.F=Object")),
              t.close(),
              t.F);
          for (var r = a.length; r--; ) delete d.prototype[a[r]];
          return d();
        };
      (s[l] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var r;
            return (
              null !== t
                ? ((h.prototype = o(t)),
                  (r = new h()),
                  (h.prototype = null),
                  (r[l] = t))
                : (r = d()),
              void 0 === e ? r : i(r, e)
            );
          });
    },
    function (t, e, r) {
      "use strict";
      var n,
        o,
        i,
        a = r(64),
        s = r(13),
        u = r(3),
        c = r(2),
        f = r(23),
        l = c("iterator"),
        h = !1;
      [].keys &&
        ("next" in (i = [].keys())
          ? (o = a(a(i))) !== Object.prototype && (n = o)
          : (h = !0)),
        null == n && (n = {}),
        f ||
          u(n, l) ||
          s(n, l, function () {
            return this;
          }),
        (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: h });
    },
    function (t, e, r) {
      var n = r(3),
        o = r(118),
        i = r(34),
        a = r(119),
        s = i("IE_PROTO"),
        u = Object.prototype;
      t.exports = a
        ? Object.getPrototypeOf
        : function (t) {
            return (
              (t = o(t)),
              n(t, s)
                ? t[s]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? u
                : null
            );
          };
    },
    function (t, e, r) {
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var o = r(133),
        i = r(40);
      t.exports = (function () {
        function t(e) {
          var r = this,
            n = e.stateMachine,
            i = e.options;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._stateMachine = n),
            (this._options = this._sanitizeOptions(i)),
            (this._lastPayload = null),
            (this._dom = new o(
              document.querySelector(this._options.element),
              this._options,
              function (t) {
                r._stateMachine.isValidTransition(t) &&
                  r._stateMachine.transition(t, r._lastPayload);
              }
            ));
        }
        var e, a, s;
        return (
          (e = t),
          (a = [
            {
              key: "stateChange",
              value: function (t) {
                var e = t.newState,
                  r = t.payload;
                switch (
                  ((this._lastPayload = r), this._dom.renderState(t), e)
                ) {
                  case "ShowingQRCode":
                  case "ShowingQRCodeInstead":
                    this._dom.setQRCode(r.qr);
                    break;
                  case "ShowingIrmaButton":
                    this._dom.setButtonLink(r.mobile);
                }
              },
            },
            {
              key: "_sanitizeOptions",
              value: function (t) {
                var e = {
                  element: "#irma-web-form",
                  showHelper: !1,
                  translations: r(158)("./".concat(t.language || "nl")),
                };
                return i(e, t);
              },
            },
          ]) && n(e.prototype, a),
          s && n(e, s),
          t
        );
      })();
    },
    function (t, e, r) {
      var n = r(39),
        o = [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          2,
          2,
          4,
          1,
          2,
          4,
          4,
          2,
          4,
          4,
          4,
          2,
          4,
          6,
          5,
          2,
          4,
          6,
          6,
          2,
          5,
          8,
          8,
          4,
          5,
          8,
          8,
          4,
          5,
          8,
          11,
          4,
          8,
          10,
          11,
          4,
          9,
          12,
          16,
          4,
          9,
          16,
          16,
          6,
          10,
          12,
          18,
          6,
          10,
          17,
          16,
          6,
          11,
          16,
          19,
          6,
          13,
          18,
          21,
          7,
          14,
          21,
          25,
          8,
          16,
          20,
          25,
          8,
          17,
          23,
          25,
          9,
          17,
          23,
          34,
          9,
          18,
          25,
          30,
          10,
          20,
          27,
          32,
          12,
          21,
          29,
          35,
          12,
          23,
          34,
          37,
          12,
          25,
          34,
          40,
          13,
          26,
          35,
          42,
          14,
          28,
          38,
          45,
          15,
          29,
          40,
          48,
          16,
          31,
          43,
          51,
          17,
          33,
          45,
          54,
          18,
          35,
          48,
          57,
          19,
          37,
          51,
          60,
          19,
          38,
          53,
          63,
          20,
          40,
          56,
          66,
          21,
          43,
          59,
          70,
          22,
          45,
          62,
          74,
          24,
          47,
          65,
          77,
          25,
          49,
          68,
          81,
        ],
        i = [
          7,
          10,
          13,
          17,
          10,
          16,
          22,
          28,
          15,
          26,
          36,
          44,
          20,
          36,
          52,
          64,
          26,
          48,
          72,
          88,
          36,
          64,
          96,
          112,
          40,
          72,
          108,
          130,
          48,
          88,
          132,
          156,
          60,
          110,
          160,
          192,
          72,
          130,
          192,
          224,
          80,
          150,
          224,
          264,
          96,
          176,
          260,
          308,
          104,
          198,
          288,
          352,
          120,
          216,
          320,
          384,
          132,
          240,
          360,
          432,
          144,
          280,
          408,
          480,
          168,
          308,
          448,
          532,
          180,
          338,
          504,
          588,
          196,
          364,
          546,
          650,
          224,
          416,
          600,
          700,
          224,
          442,
          644,
          750,
          252,
          476,
          690,
          816,
          270,
          504,
          750,
          900,
          300,
          560,
          810,
          960,
          312,
          588,
          870,
          1050,
          336,
          644,
          952,
          1110,
          360,
          700,
          1020,
          1200,
          390,
          728,
          1050,
          1260,
          420,
          784,
          1140,
          1350,
          450,
          812,
          1200,
          1440,
          480,
          868,
          1290,
          1530,
          510,
          924,
          1350,
          1620,
          540,
          980,
          1440,
          1710,
          570,
          1036,
          1530,
          1800,
          570,
          1064,
          1590,
          1890,
          600,
          1120,
          1680,
          1980,
          630,
          1204,
          1770,
          2100,
          660,
          1260,
          1860,
          2220,
          720,
          1316,
          1950,
          2310,
          750,
          1372,
          2040,
          2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case n.L:
            return o[4 * (t - 1) + 0];
          case n.M:
            return o[4 * (t - 1) + 1];
          case n.Q:
            return o[4 * (t - 1) + 2];
          case n.H:
            return o[4 * (t - 1) + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case n.L:
              return i[4 * (t - 1) + 0];
            case n.M:
              return i[4 * (t - 1) + 1];
            case n.Q:
              return i[4 * (t - 1) + 2];
            case n.H:
              return i[4 * (t - 1) + 3];
            default:
              return;
          }
        });
    },
    function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    function (t, e) {
      var r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        n =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (e.KANJI = new RegExp(r, "g")),
        (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = new RegExp(n, "g")),
        (e.NUMERIC = new RegExp("[0-9]+", "g")),
        (e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var o = new RegExp("^" + r + "$"),
        i = new RegExp("^[0-9]+$"),
        a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return o.test(t);
      }),
        (e.testNumeric = function (t) {
          return i.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return a.test(t);
        });
    },
    function (t, e) {
      function r(t) {
        if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
          throw new Error("Color should be defined as hex string");
        var e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw new Error("Invalid hex color: " + t);
        (3 !== e.length && 4 !== e.length) ||
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        var r = parseInt(e.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        var e =
            void 0 === t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          n = t.width && t.width >= 21 ? t.width : void 0,
          o = t.scale || 4;
        return {
          width: n,
          scale: n ? 4 : o,
          margin: e,
          color: {
            dark: r(t.color.dark || "#000000ff"),
            light: r(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, r) {
          var n = e.getScale(t, r);
          return Math.floor((t + 2 * r.margin) * n);
        }),
        (e.qrToImageData = function (t, r, n) {
          for (
            var o = r.modules.size,
              i = r.modules.data,
              a = e.getScale(o, n),
              s = Math.floor((o + 2 * n.margin) * a),
              u = n.margin * a,
              c = [n.color.light, n.color.dark],
              f = 0;
            f < s;
            f++
          )
            for (var l = 0; l < s; l++) {
              var h = 4 * (f * s + l),
                p = n.color.light;
              if (f >= u && l >= u && f < s - u && l < s - u)
                p =
                  c[
                    i[Math.floor((f - u) / a) * o + Math.floor((l - u) / a)]
                      ? 1
                      : 0
                  ];
              (t[h++] = p.r), (t[h++] = p.g), (t[h++] = p.b), (t[h] = p.a);
            }
        });
    },
    function (t, e) {
      t.exports = {
        header: 'Continue with <i className="irma-web-logo">IRMA</i>',
        helper:
          'Can\'t figure it out? Take a look at the <a href="https://irma.app/">IRMA website</a>.',
        loading: "Just a second please!",
        button: "Open IRMA app",
        qrCode: "Show QR code",
        app: "Follow the steps in the IRMA app",
        retry: "Try again",
        back: "Go back",
        cancelled: "Your data have not been received",
        timeout: "Sorry! We haven't heard<br/>from you for too long",
        error: "Sorry! Something went wrong",
        browser:
          "We're sorry, but your browser does not meet the minimum requirements",
        success: "Success!",
      };
    },
    function (t, e) {
      t.exports = {
        header: 'Ga verder met <i className="irma-web-logo">IRMA</i>',
        helper:
          'Kom je er niet uit? Kijk dan eerst eens op <a href="https://irma.app/">de website van IRMA</a>.',
        loading: "Eén moment alsjeblieft",
        button: "Open IRMA app",
        qrCode: "Toon QR code",
        app: "Volg de instructies in de IRMA app",
        retry: "Opnieuw proberen",
        back: "Ga terug",
        cancelled: "Je gegevens zijn niet ontvangen",
        timeout: "Sorry! We hebben te lang<br/>niks van je gehoord",
        error: "Sorry! Er is een fout opgetreden",
        browser:
          "Het spijt ons, maar je browser voldoet niet aan de minimale eisen",
        success: "Gelukt!",
      };
    },
    function (t, e, r) {
      r(163), (t.exports = self.fetch.bind(self));
    },
    function (t, e) {
      (function (e) {
        t.exports = e;
      }.call(this, {}));
    },
    function (t, e, r) {
      (function (t) {
        var n = r(177),
          o = r(76),
          i = r(187),
          a = r(188),
          s = r(41),
          u = e;
        (u.request = function (e, r) {
          e = "string" == typeof e ? s.parse(e) : i(e);
          var o = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
            a = e.protocol || o,
            u = e.hostname || e.host,
            c = e.port,
            f = e.path || "/";
          u && -1 !== u.indexOf(":") && (u = "[" + u + "]"),
            (e.url = (u ? a + "//" + u : "") + (c ? ":" + c : "") + f),
            (e.method = (e.method || "GET").toUpperCase()),
            (e.headers = e.headers || {});
          var l = new n(e);
          return r && l.on("response", r), l;
        }),
          (u.get = function (t, e) {
            var r = u.request(t, e);
            return r.end(), r;
          }),
          (u.ClientRequest = n),
          (u.IncomingMessage = o.IncomingMessage),
          (u.Agent = function () {}),
          (u.Agent.defaultMaxSockets = 4),
          (u.globalAgent = new u.Agent()),
          (u.STATUS_CODES = a),
          (u.METHODS = [
            "CHECKOUT",
            "CONNECT",
            "COPY",
            "DELETE",
            "GET",
            "HEAD",
            "LOCK",
            "M-SEARCH",
            "MERGE",
            "MKACTIVITY",
            "MKCOL",
            "MOVE",
            "NOTIFY",
            "OPTIONS",
            "PATCH",
            "POST",
            "PROPFIND",
            "PROPPATCH",
            "PURGE",
            "PUT",
            "REPORT",
            "SEARCH",
            "SUBSCRIBE",
            "TRACE",
            "UNLOCK",
            "UNSUBSCRIBE",
          ]);
      }.call(this, r(1)));
    },
    function (t, e, r) {
      (function (t) {
        (e.fetch = s(t.fetch) && s(t.ReadableStream)),
          (e.writableStream = s(t.WritableStream)),
          (e.abortController = s(t.AbortController)),
          (e.blobConstructor = !1);
        try {
          new Blob([new ArrayBuffer(1)]), (e.blobConstructor = !0);
        } catch (t) {}
        var r;
        function n() {
          if (void 0 !== r) return r;
          if (t.XMLHttpRequest) {
            r = new t.XMLHttpRequest();
            try {
              r.open("GET", t.XDomainRequest ? "/" : "https://example.com");
            } catch (t) {
              r = null;
            }
          } else r = null;
          return r;
        }
        function o(t) {
          var e = n();
          if (!e) return !1;
          try {
            return (e.responseType = t), e.responseType === t;
          } catch (t) {}
          return !1;
        }
        var i = void 0 !== t.ArrayBuffer,
          a = i && s(t.ArrayBuffer.prototype.slice);
        function s(t) {
          return "function" == typeof t;
        }
        (e.arraybuffer = e.fetch || (i && o("arraybuffer"))),
          (e.msstream = !e.fetch && a && o("ms-stream")),
          (e.mozchunkedarraybuffer =
            !e.fetch && i && o("moz-chunked-arraybuffer")),
          (e.overrideMimeType = e.fetch || (!!n() && s(n().overrideMimeType))),
          (e.vbArray = s(t.VBArray)),
          (r = null);
      }.call(this, r(1)));
    },
    function (t, e, r) {
      (function (t, n, o) {
        var i = r(75),
          a = r(12),
          s = r(77),
          u = (e.readyStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4,
          }),
          c = (e.IncomingMessage = function (e, r, a, u) {
            var c = this;
            if (
              (s.Readable.call(c),
              (c._mode = a),
              (c.headers = {}),
              (c.rawHeaders = []),
              (c.trailers = {}),
              (c.rawTrailers = []),
              c.on("end", function () {
                t.nextTick(function () {
                  c.emit("close");
                });
              }),
              "fetch" === a)
            ) {
              if (
                ((c._fetchResponse = r),
                (c.url = r.url),
                (c.statusCode = r.status),
                (c.statusMessage = r.statusText),
                r.headers.forEach(function (t, e) {
                  (c.headers[e.toLowerCase()] = t), c.rawHeaders.push(e, t);
                }),
                i.writableStream)
              ) {
                var f = new WritableStream({
                  write: function (t) {
                    return new Promise(function (e, r) {
                      c._destroyed
                        ? r()
                        : c.push(new n(t))
                        ? e()
                        : (c._resumeFetch = e);
                    });
                  },
                  close: function () {
                    o.clearTimeout(u), c._destroyed || c.push(null);
                  },
                  abort: function (t) {
                    c._destroyed || c.emit("error", t);
                  },
                });
                try {
                  return void r.body.pipeTo(f).catch(function (t) {
                    o.clearTimeout(u), c._destroyed || c.emit("error", t);
                  });
                } catch (t) {}
              }
              var l = r.body.getReader();
              !(function t() {
                l.read()
                  .then(function (e) {
                    if (!c._destroyed) {
                      if (e.done) return o.clearTimeout(u), void c.push(null);
                      c.push(new n(e.value)), t();
                    }
                  })
                  .catch(function (t) {
                    o.clearTimeout(u), c._destroyed || c.emit("error", t);
                  });
              })();
            } else {
              if (
                ((c._xhr = e),
                (c._pos = 0),
                (c.url = e.responseURL),
                (c.statusCode = e.status),
                (c.statusMessage = e.statusText),
                e
                  .getAllResponseHeaders()
                  .split(/\r?\n/)
                  .forEach(function (t) {
                    var e = t.match(/^([^:]+):\s*(.*)/);
                    if (e) {
                      var r = e[1].toLowerCase();
                      "set-cookie" === r
                        ? (void 0 === c.headers[r] && (c.headers[r] = []),
                          c.headers[r].push(e[2]))
                        : void 0 !== c.headers[r]
                        ? (c.headers[r] += ", " + e[2])
                        : (c.headers[r] = e[2]),
                        c.rawHeaders.push(e[1], e[2]);
                    }
                  }),
                (c._charset = "x-user-defined"),
                !i.overrideMimeType)
              ) {
                var h = c.rawHeaders["mime-type"];
                if (h) {
                  var p = h.match(/;\s*charset=([^;])(;|$)/);
                  p && (c._charset = p[1].toLowerCase());
                }
                c._charset || (c._charset = "utf-8");
              }
            }
          });
        a(c, s.Readable),
          (c.prototype._read = function () {
            var t = this._resumeFetch;
            t && ((this._resumeFetch = null), t());
          }),
          (c.prototype._onXHRProgress = function () {
            var t = this,
              e = t._xhr,
              r = null;
            switch (t._mode) {
              case "text:vbarray":
                if (e.readyState !== u.DONE) break;
                try {
                  r = new o.VBArray(e.responseBody).toArray();
                } catch (t) {}
                if (null !== r) {
                  t.push(new n(r));
                  break;
                }
              case "text":
                try {
                  r = e.responseText;
                } catch (e) {
                  t._mode = "text:vbarray";
                  break;
                }
                if (r.length > t._pos) {
                  var i = r.substr(t._pos);
                  if ("x-user-defined" === t._charset) {
                    for (var a = new n(i.length), s = 0; s < i.length; s++)
                      a[s] = 255 & i.charCodeAt(s);
                    t.push(a);
                  } else t.push(i, t._charset);
                  t._pos = r.length;
                }
                break;
              case "arraybuffer":
                if (e.readyState !== u.DONE || !e.response) break;
                (r = e.response), t.push(new n(new Uint8Array(r)));
                break;
              case "moz-chunked-arraybuffer":
                if (((r = e.response), e.readyState !== u.LOADING || !r)) break;
                t.push(new n(new Uint8Array(r)));
                break;
              case "ms-stream":
                if (((r = e.response), e.readyState !== u.LOADING)) break;
                var c = new o.MSStreamReader();
                (c.onprogress = function () {
                  c.result.byteLength > t._pos &&
                    (t.push(new n(new Uint8Array(c.result.slice(t._pos)))),
                    (t._pos = c.result.byteLength));
                }),
                  (c.onload = function () {
                    t.push(null);
                  }),
                  c.readAsArrayBuffer(r);
            }
            t._xhr.readyState === u.DONE &&
              "ms-stream" !== t._mode &&
              t.push(null);
          });
      }.call(this, r(6), r(10).Buffer, r(1)));
    },
    function (t, e, r) {
      ((e = t.exports = r(78)).Stream = e),
        (e.Readable = e),
        (e.Writable = r(81)),
        (e.Duplex = r(16)),
        (e.Transform = r(83)),
        (e.PassThrough = r(185));
    },
    function (t, e, r) {
      "use strict";
      (function (e, n) {
        var o = r(25);
        t.exports = v;
        var i,
          a = r(178);
        v.ReadableState = b;
        r(42).EventEmitter;
        var s = function (t, e) {
            return t.listeners(e).length;
          },
          u = r(79),
          c = r(26).Buffer,
          f = e.Uint8Array || function () {};
        var l = Object.create(r(20));
        l.inherits = r(12);
        var h = r(179),
          p = void 0;
        p = h && h.debuglog ? h.debuglog("stream") : function () {};
        var d,
          m = r(180),
          g = r(80);
        l.inherits(v, u);
        var y = ["error", "close", "destroy", "pause", "resume"];
        function b(t, e) {
          t = t || {};
          var n = e instanceof (i = i || r(16));
          (this.objectMode = !!t.objectMode),
            n && (this.objectMode = this.objectMode || !!t.readableObjectMode);
          var o = t.highWaterMark,
            a = t.readableHighWaterMark,
            s = this.objectMode ? 16 : 16384;
          (this.highWaterMark = o || 0 === o ? o : n && (a || 0 === a) ? a : s),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.buffer = new m()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (d || (d = r(82).StringDecoder),
              (this.decoder = new d(t.encoding)),
              (this.encoding = t.encoding));
        }
        function v(t) {
          if (((i = i || r(16)), !(this instanceof v))) return new v(t);
          (this._readableState = new b(t, this)),
            (this.readable = !0),
            t &&
              ("function" == typeof t.read && (this._read = t.read),
              "function" == typeof t.destroy && (this._destroy = t.destroy)),
            u.call(this);
        }
        function w(t, e, r, n, o) {
          var i,
            a = t._readableState;
          null === e
            ? ((a.reading = !1),
              (function (t, e) {
                if (e.ended) return;
                if (e.decoder) {
                  var r = e.decoder.end();
                  r &&
                    r.length &&
                    (e.buffer.push(r),
                    (e.length += e.objectMode ? 1 : r.length));
                }
                (e.ended = !0), S(t);
              })(t, a))
            : (o ||
                (i = (function (t, e) {
                  var r;
                  (n = e),
                    c.isBuffer(n) ||
                      n instanceof f ||
                      "string" == typeof e ||
                      void 0 === e ||
                      t.objectMode ||
                      (r = new TypeError("Invalid non-string/buffer chunk"));
                  var n;
                  return r;
                })(a, e)),
              i
                ? t.emit("error", i)
                : a.objectMode || (e && e.length > 0)
                ? ("string" == typeof e ||
                    a.objectMode ||
                    Object.getPrototypeOf(e) === c.prototype ||
                    (e = (function (t) {
                      return c.from(t);
                    })(e)),
                  n
                    ? a.endEmitted
                      ? t.emit(
                          "error",
                          new Error("stream.unshift() after end event")
                        )
                      : _(t, a, e, !0)
                    : a.ended
                    ? t.emit("error", new Error("stream.push() after EOF"))
                    : ((a.reading = !1),
                      a.decoder && !r
                        ? ((e = a.decoder.write(e)),
                          a.objectMode || 0 !== e.length
                            ? _(t, a, e, !1)
                            : k(t, a))
                        : _(t, a, e, !1)))
                : n || (a.reading = !1));
          return (function (t) {
            return (
              !t.ended &&
              (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            );
          })(a);
        }
        function _(t, e, r, n) {
          e.flowing && 0 === e.length && !e.sync
            ? (t.emit("data", r), t.read(0))
            : ((e.length += e.objectMode ? 1 : r.length),
              n ? e.buffer.unshift(r) : e.buffer.push(r),
              e.needReadable && S(t)),
            k(t, e);
        }
        Object.defineProperty(v.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (v.prototype.destroy = g.destroy),
          (v.prototype._undestroy = g.undestroy),
          (v.prototype._destroy = function (t, e) {
            this.push(null), e(t);
          }),
          (v.prototype.push = function (t, e) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : "string" == typeof t &&
                  ((e = e || n.defaultEncoding) !== n.encoding &&
                    ((t = c.from(t, e)), (e = "")),
                  (r = !0)),
              w(this, t, e, !1, r)
            );
          }),
          (v.prototype.unshift = function (t) {
            return w(this, t, null, !0, !1);
          }),
          (v.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (v.prototype.setEncoding = function (t) {
            return (
              d || (d = r(82).StringDecoder),
              (this._readableState.decoder = new d(t)),
              (this._readableState.encoding = t),
              this
            );
          });
        function x(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t != t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function (t) {
                  return (
                    t >= 8388608
                      ? (t = 8388608)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  );
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function S(t) {
          var e = t._readableState;
          (e.needReadable = !1),
            e.emittedReadable ||
              (p("emitReadable", e.flowing),
              (e.emittedReadable = !0),
              e.sync ? o.nextTick(E, t) : E(t));
        }
        function E(t) {
          p("emit readable"), t.emit("readable"), O(t);
        }
        function k(t, e) {
          e.readingMore || ((e.readingMore = !0), o.nextTick(T, t, e));
        }
        function T(t, e) {
          for (
            var r = e.length;
            !e.reading &&
            !e.flowing &&
            !e.ended &&
            e.length < e.highWaterMark &&
            (p("maybeReadMore read 0"), t.read(0), r !== e.length);

          )
            r = e.length;
          e.readingMore = !1;
        }
        function A(t) {
          p("readable nexttick read 0"), t.read(0);
        }
        function C(t, e) {
          e.reading || (p("resume read 0"), t.read(0)),
            (e.resumeScheduled = !1),
            (e.awaitDrain = 0),
            t.emit("resume"),
            O(t),
            e.flowing && !e.reading && t.read(0);
        }
        function O(t) {
          var e = t._readableState;
          for (p("flow", e.flowing); e.flowing && null !== t.read(); );
        }
        function R(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (r = e.buffer.shift())
                : !t || t >= e.length
                ? ((r = e.decoder
                    ? e.buffer.join("")
                    : 1 === e.buffer.length
                    ? e.buffer.head.data
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (r = (function (t, e, r) {
                    var n;
                    t < e.head.data.length
                      ? ((n = e.head.data.slice(0, t)),
                        (e.head.data = e.head.data.slice(t)))
                      : (n =
                          t === e.head.data.length
                            ? e.shift()
                            : r
                            ? (function (t, e) {
                                var r = e.head,
                                  n = 1,
                                  o = r.data;
                                t -= o.length;
                                for (; (r = r.next); ) {
                                  var i = r.data,
                                    a = t > i.length ? i.length : t;
                                  if (
                                    (a === i.length
                                      ? (o += i)
                                      : (o += i.slice(0, t)),
                                    0 === (t -= a))
                                  ) {
                                    a === i.length
                                      ? (++n,
                                        r.next
                                          ? (e.head = r.next)
                                          : (e.head = e.tail = null))
                                      : ((e.head = r), (r.data = i.slice(a)));
                                    break;
                                  }
                                  ++n;
                                }
                                return (e.length -= n), o;
                              })(t, e)
                            : (function (t, e) {
                                var r = c.allocUnsafe(t),
                                  n = e.head,
                                  o = 1;
                                n.data.copy(r), (t -= n.data.length);
                                for (; (n = n.next); ) {
                                  var i = n.data,
                                    a = t > i.length ? i.length : t;
                                  if (
                                    (i.copy(r, r.length - t, 0, a),
                                    0 === (t -= a))
                                  ) {
                                    a === i.length
                                      ? (++o,
                                        n.next
                                          ? (e.head = n.next)
                                          : (e.head = e.tail = null))
                                      : ((e.head = n), (n.data = i.slice(a)));
                                    break;
                                  }
                                  ++o;
                                }
                                return (e.length -= o), r;
                              })(t, e));
                    return n;
                  })(t, e.buffer, e.decoder)),
              r);
          var r;
        }
        function P(t) {
          var e = t._readableState;
          if (e.length > 0)
            throw new Error('"endReadable()" called on non-empty stream');
          e.endEmitted || ((e.ended = !0), o.nextTick(j, e, t));
        }
        function j(t, e) {
          t.endEmitted ||
            0 !== t.length ||
            ((t.endEmitted = !0), (e.readable = !1), e.emit("end"));
        }
        function M(t, e) {
          for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
          return -1;
        }
        (v.prototype.read = function (t) {
          p("read", t), (t = parseInt(t, 10));
          var e = this._readableState,
            r = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              (e.length >= e.highWaterMark || e.ended))
          )
            return (
              p("read: emitReadable", e.length, e.ended),
              0 === e.length && e.ended ? P(this) : S(this),
              null
            );
          if (0 === (t = x(t, e)) && e.ended)
            return 0 === e.length && P(this), null;
          var n,
            o = e.needReadable;
          return (
            p("need readable", o),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              p("length less than watermark", (o = !0)),
            e.ended || e.reading
              ? p("reading or ended", (o = !1))
              : o &&
                (p("do read"),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = x(r, e))),
            null === (n = t > 0 ? R(t, e) : null)
              ? ((e.needReadable = !0), (t = 0))
              : (e.length -= t),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), r !== t && e.ended && P(this)),
            null !== n && this.emit("data", n),
            n
          );
        }),
          (v.prototype._read = function (t) {
            this.emit("error", new Error("_read() is not implemented"));
          }),
          (v.prototype.pipe = function (t, e) {
            var r = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = t;
                break;
              case 1:
                i.pipes = [i.pipes, t];
                break;
              default:
                i.pipes.push(t);
            }
            (i.pipesCount += 1), p("pipe count=%d opts=%j", i.pipesCount, e);
            var u =
              (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? f : v;
            function c(e, n) {
              p("onunpipe"),
                e === r &&
                  n &&
                  !1 === n.hasUnpiped &&
                  ((n.hasUnpiped = !0),
                  p("cleanup"),
                  t.removeListener("close", y),
                  t.removeListener("finish", b),
                  t.removeListener("drain", l),
                  t.removeListener("error", g),
                  t.removeListener("unpipe", c),
                  r.removeListener("end", f),
                  r.removeListener("end", v),
                  r.removeListener("data", m),
                  (h = !0),
                  !i.awaitDrain ||
                    (t._writableState && !t._writableState.needDrain) ||
                    l());
            }
            function f() {
              p("onend"), t.end();
            }
            i.endEmitted ? o.nextTick(u) : r.once("end", u), t.on("unpipe", c);
            var l = (function (t) {
              return function () {
                var e = t._readableState;
                p("pipeOnDrain", e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain &&
                    s(t, "data") &&
                    ((e.flowing = !0), O(t));
              };
            })(r);
            t.on("drain", l);
            var h = !1;
            var d = !1;
            function m(e) {
              p("ondata"),
                (d = !1),
                !1 !== t.write(e) ||
                  d ||
                  (((1 === i.pipesCount && i.pipes === t) ||
                    (i.pipesCount > 1 && -1 !== M(i.pipes, t))) &&
                    !h &&
                    (p(
                      "false write response, pause",
                      r._readableState.awaitDrain
                    ),
                    r._readableState.awaitDrain++,
                    (d = !0)),
                  r.pause());
            }
            function g(e) {
              p("onerror", e),
                v(),
                t.removeListener("error", g),
                0 === s(t, "error") && t.emit("error", e);
            }
            function y() {
              t.removeListener("finish", b), v();
            }
            function b() {
              p("onfinish"), t.removeListener("close", y), v();
            }
            function v() {
              p("unpipe"), r.unpipe(t);
            }
            return (
              r.on("data", m),
              (function (t, e, r) {
                if ("function" == typeof t.prependListener)
                  return t.prependListener(e, r);
                t._events && t._events[e]
                  ? a(t._events[e])
                    ? t._events[e].unshift(r)
                    : (t._events[e] = [r, t._events[e]])
                  : t.on(e, r);
              })(t, "error", g),
              t.once("close", y),
              t.once("finish", b),
              t.emit("pipe", r),
              i.flowing || (p("pipe resume"), r.resume()),
              t
            );
          }),
          (v.prototype.unpipe = function (t) {
            var e = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit("unpipe", this, r)),
                this
              );
            if (!t) {
              var n = e.pipes,
                o = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var i = 0; i < o; i++) n[i].emit("unpipe", this, r);
              return this;
            }
            var a = M(e.pipes, t);
            return (
              -1 === a ||
                (e.pipes.splice(a, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit("unpipe", this, r)),
              this
            );
          }),
          (v.prototype.on = function (t, e) {
            var r = u.prototype.on.call(this, t, e);
            if ("data" === t)
              !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === t) {
              var n = this._readableState;
              n.endEmitted ||
                n.readableListening ||
                ((n.readableListening = n.needReadable = !0),
                (n.emittedReadable = !1),
                n.reading ? n.length && S(this) : o.nextTick(A, this));
            }
            return r;
          }),
          (v.prototype.addListener = v.prototype.on),
          (v.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (p("resume"),
                (t.flowing = !0),
                (function (t, e) {
                  e.resumeScheduled ||
                    ((e.resumeScheduled = !0), o.nextTick(C, t, e));
                })(this, t)),
              this
            );
          }),
          (v.prototype.pause = function () {
            return (
              p("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (p("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              this
            );
          }),
          (v.prototype.wrap = function (t) {
            var e = this,
              r = this._readableState,
              n = !1;
            for (var o in (t.on("end", function () {
              if ((p("wrapped end"), r.decoder && !r.ended)) {
                var t = r.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on("data", function (o) {
              (p("wrapped data"),
              r.decoder && (o = r.decoder.write(o)),
              r.objectMode && null == o) ||
                ((r.objectMode || (o && o.length)) &&
                  (e.push(o) || ((n = !0), t.pause())));
            }),
            t))
              void 0 === this[o] &&
                "function" == typeof t[o] &&
                (this[o] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(o));
            for (var i = 0; i < y.length; i++)
              t.on(y[i], this.emit.bind(this, y[i]));
            return (
              (this._read = function (e) {
                p("wrapped _read", e), n && ((n = !1), t.resume());
              }),
              this
            );
          }),
          Object.defineProperty(v.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          (v._fromList = R);
      }.call(this, r(1), r(6)));
    },
    function (t, e, r) {
      t.exports = r(42).EventEmitter;
    },
    function (t, e, r) {
      "use strict";
      var n = r(25);
      function o(t, e) {
        t.emit("error", e);
      }
      t.exports = {
        destroy: function (t, e) {
          var r = this,
            i = this._readableState && this._readableState.destroyed,
            a = this._writableState && this._writableState.destroyed;
          return i || a
            ? (e
                ? e(t)
                : !t ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  n.nextTick(o, this, t),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !e && t
                  ? (n.nextTick(o, r, t),
                    r._writableState && (r._writableState.errorEmitted = !0))
                  : e && e(t);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
      };
    },
    function (t, e, r) {
      "use strict";
      (function (e, n, o) {
        var i = r(25);
        function a(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (t, e, r) {
                var n = t.entry;
                t.entry = null;
                for (; n; ) {
                  var o = n.callback;
                  e.pendingcb--, o(r), (n = n.next);
                }
                e.corkedRequestsFree
                  ? (e.corkedRequestsFree.next = t)
                  : (e.corkedRequestsFree = t);
              })(e, t);
            });
        }
        t.exports = b;
        var s,
          u =
            !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1
              ? n
              : i.nextTick;
        b.WritableState = y;
        var c = Object.create(r(20));
        c.inherits = r(12);
        var f = { deprecate: r(184) },
          l = r(79),
          h = r(26).Buffer,
          p = o.Uint8Array || function () {};
        var d,
          m = r(80);
        function g() {}
        function y(t, e) {
          (s = s || r(16)), (t = t || {});
          var n = e instanceof s;
          (this.objectMode = !!t.objectMode),
            n && (this.objectMode = this.objectMode || !!t.writableObjectMode);
          var o = t.highWaterMark,
            c = t.writableHighWaterMark,
            f = this.objectMode ? 16 : 16384;
          (this.highWaterMark = o || 0 === o ? o : n && (c || 0 === c) ? c : f),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var l = !1 === t.decodeStrings;
          (this.decodeStrings = !l),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              !(function (t, e) {
                var r = t._writableState,
                  n = r.sync,
                  o = r.writecb;
                if (
                  ((function (t) {
                    (t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0);
                  })(r),
                  e)
                )
                  !(function (t, e, r, n, o) {
                    --e.pendingcb,
                      r
                        ? (i.nextTick(o, n),
                          i.nextTick(E, t, e),
                          (t._writableState.errorEmitted = !0),
                          t.emit("error", n))
                        : (o(n),
                          (t._writableState.errorEmitted = !0),
                          t.emit("error", n),
                          E(t, e));
                  })(t, r, n, e, o);
                else {
                  var a = x(r);
                  a ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    _(t, r),
                    n ? u(w, t, r, a, o) : w(t, r, a, o);
                }
              })(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new a(this));
        }
        function b(t) {
          if (((s = s || r(16)), !(d.call(b, this) || this instanceof s)))
            return new b(t);
          (this._writableState = new y(t, this)),
            (this.writable = !0),
            t &&
              ("function" == typeof t.write && (this._write = t.write),
              "function" == typeof t.writev && (this._writev = t.writev),
              "function" == typeof t.destroy && (this._destroy = t.destroy),
              "function" == typeof t.final && (this._final = t.final)),
            l.call(this);
        }
        function v(t, e, r, n, o, i, a) {
          (e.writelen = n),
            (e.writecb = a),
            (e.writing = !0),
            (e.sync = !0),
            r ? t._writev(o, e.onwrite) : t._write(o, i, e.onwrite),
            (e.sync = !1);
        }
        function w(t, e, r, n) {
          r ||
            (function (t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit("drain"));
            })(t, e),
            e.pendingcb--,
            n(),
            E(t, e);
        }
        function _(t, e) {
          e.bufferProcessing = !0;
          var r = e.bufferedRequest;
          if (t._writev && r && r.next) {
            var n = e.bufferedRequestCount,
              o = new Array(n),
              i = e.corkedRequestsFree;
            i.entry = r;
            for (var s = 0, u = !0; r; )
              (o[s] = r), r.isBuf || (u = !1), (r = r.next), (s += 1);
            (o.allBuffers = u),
              v(t, e, !0, e.length, o, "", i.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              i.next
                ? ((e.corkedRequestsFree = i.next), (i.next = null))
                : (e.corkedRequestsFree = new a(e)),
              (e.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var c = r.chunk,
                f = r.encoding,
                l = r.callback;
              if (
                (v(t, e, !1, e.objectMode ? 1 : c.length, c, f, l),
                (r = r.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === r && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = r), (e.bufferProcessing = !1);
        }
        function x(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function S(t, e) {
          t._final(function (r) {
            e.pendingcb--,
              r && t.emit("error", r),
              (e.prefinished = !0),
              t.emit("prefinish"),
              E(t, e);
          });
        }
        function E(t, e) {
          var r = x(e);
          return (
            r &&
              (!(function (t, e) {
                e.prefinished ||
                  e.finalCalled ||
                  ("function" == typeof t._final
                    ? (e.pendingcb++, (e.finalCalled = !0), i.nextTick(S, t, e))
                    : ((e.prefinished = !0), t.emit("prefinish")));
              })(t, e),
              0 === e.pendingcb && ((e.finished = !0), t.emit("finish"))),
            r
          );
        }
        c.inherits(b, l),
          (y.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next);
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(y.prototype, "buffer", {
                get: f.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (t) {}
          })(),
          "function" == typeof Symbol &&
          Symbol.hasInstance &&
          "function" == typeof Function.prototype[Symbol.hasInstance]
            ? ((d = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(b, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!d.call(this, t) ||
                    (this === b && t && t._writableState instanceof y)
                  );
                },
              }))
            : (d = function (t) {
                return t instanceof this;
              }),
          (b.prototype.pipe = function () {
            this.emit("error", new Error("Cannot pipe, not readable"));
          }),
          (b.prototype.write = function (t, e, r) {
            var n,
              o = this._writableState,
              a = !1,
              s = !o.objectMode && ((n = t), h.isBuffer(n) || n instanceof p);
            return (
              s &&
                !h.isBuffer(t) &&
                (t = (function (t) {
                  return h.from(t);
                })(t)),
              "function" == typeof e && ((r = e), (e = null)),
              s ? (e = "buffer") : e || (e = o.defaultEncoding),
              "function" != typeof r && (r = g),
              o.ended
                ? (function (t, e) {
                    var r = new Error("write after end");
                    t.emit("error", r), i.nextTick(e, r);
                  })(this, r)
                : (s ||
                    (function (t, e, r, n) {
                      var o = !0,
                        a = !1;
                      return (
                        null === r
                          ? (a = new TypeError(
                              "May not write null values to stream"
                            ))
                          : "string" == typeof r ||
                            void 0 === r ||
                            e.objectMode ||
                            (a = new TypeError(
                              "Invalid non-string/buffer chunk"
                            )),
                        a && (t.emit("error", a), i.nextTick(n, a), (o = !1)),
                        o
                      );
                    })(this, o, t, r)) &&
                  (o.pendingcb++,
                  (a = (function (t, e, r, n, o, i) {
                    if (!r) {
                      var a = (function (t, e, r) {
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          "string" != typeof e ||
                          (e = h.from(e, r));
                        return e;
                      })(e, n, o);
                      n !== a && ((r = !0), (o = "buffer"), (n = a));
                    }
                    var s = e.objectMode ? 1 : n.length;
                    e.length += s;
                    var u = e.length < e.highWaterMark;
                    u || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                      var c = e.lastBufferedRequest;
                      (e.lastBufferedRequest = {
                        chunk: n,
                        encoding: o,
                        isBuf: r,
                        callback: i,
                        next: null,
                      }),
                        c
                          ? (c.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1);
                    } else v(t, e, !1, s, n, o, i);
                    return u;
                  })(this, o, s, t, e, r))),
              a
            );
          }),
          (b.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (b.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.finished ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                _(this, t));
          }),
          (b.prototype.setDefaultEncoding = function (t) {
            if (
              ("string" == typeof t && (t = t.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((t + "").toLowerCase()) > -1
              ))
            )
              throw new TypeError("Unknown encoding: " + t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          Object.defineProperty(b.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (b.prototype._write = function (t, e, r) {
            r(new Error("_write() is not implemented"));
          }),
          (b.prototype._writev = null),
          (b.prototype.end = function (t, e, r) {
            var n = this._writableState;
            "function" == typeof t
              ? ((r = t), (t = null), (e = null))
              : "function" == typeof e && ((r = e), (e = null)),
              null != t && this.write(t, e),
              n.corked && ((n.corked = 1), this.uncork()),
              n.ending ||
                n.finished ||
                (function (t, e, r) {
                  (e.ending = !0),
                    E(t, e),
                    r && (e.finished ? i.nextTick(r) : t.once("finish", r));
                  (e.ended = !0), (t.writable = !1);
                })(this, n, r);
          }),
          Object.defineProperty(b.prototype, "destroyed", {
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (b.prototype.destroy = m.destroy),
          (b.prototype._undestroy = m.undestroy),
          (b.prototype._destroy = function (t, e) {
            this.end(), e(t);
          });
      }.call(this, r(6), r(182).setImmediate, r(1)));
    },
    function (t, e, r) {
      "use strict";
      var n = r(26).Buffer,
        o =
          n.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function i(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              if (!t) return "utf8";
              for (var e; ; )
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" != typeof e && (n.isEncoding === o || !o(t)))
              throw new Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = u), (this.end = c), (e = 4);
            break;
          case "utf8":
            (this.fillLast = s), (e = 4);
            break;
          case "base64":
            (this.text = f), (this.end = l), (e = 3);
            break;
          default:
            return (this.write = h), void (this.end = p);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(e));
      }
      function a(t) {
        return t <= 127
          ? 0
          : t >> 5 == 6
          ? 2
          : t >> 4 == 14
          ? 3
          : t >> 3 == 30
          ? 4
          : t >> 6 == 2
          ? -1
          : -2;
      }
      function s(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function (t, e, r) {
            if (128 != (192 & e[0])) return (t.lastNeed = 0), "�";
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 != (192 & e[1])) return (t.lastNeed = 1), "�";
              if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                return (t.lastNeed = 2), "�";
            }
          })(this, t);
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function u(t, e) {
        if ((t.length - e) % 2 == 0) {
          var r = t.toString("utf16le", e);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function c(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, r);
        }
        return e;
      }
      function f(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - r));
      }
      function l(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function h(t) {
        return t.toString(this.encoding);
      }
      function p(t) {
        return t && t.length ? this.write(t) : "";
      }
      (e.StringDecoder = i),
        (i.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, r;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < t.length
            ? e
              ? e + this.text(t, r)
              : this.text(t, r)
            : e || "";
        }),
        (i.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "�" : e;
        }),
        (i.prototype.text = function (t, e) {
          var r = (function (t, e, r) {
            var n = e.length - 1;
            if (n < r) return 0;
            var o = a(e[n]);
            if (o >= 0) return o > 0 && (t.lastNeed = o - 1), o;
            if (--n < r || -2 === o) return 0;
            if ((o = a(e[n])) >= 0) return o > 0 && (t.lastNeed = o - 2), o;
            if (--n < r || -2 === o) return 0;
            if ((o = a(e[n])) >= 0)
              return o > 0 && (2 === o ? (o = 0) : (t.lastNeed = o - 3)), o;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = r;
          var n = t.length - (r - this.lastNeed);
          return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
        }),
        (i.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    function (t, e, r) {
      "use strict";
      t.exports = a;
      var n = r(16),
        o = Object.create(r(20));
      function i(t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (!n)
          return this.emit(
            "error",
            new Error("write callback called multiple times")
          );
        (r.writechunk = null),
          (r.writecb = null),
          null != e && this.push(e),
          n(t);
        var o = this._readableState;
        (o.reading = !1),
          (o.needReadable || o.length < o.highWaterMark) &&
            this._read(o.highWaterMark);
      }
      function a(t) {
        if (!(this instanceof a)) return new a(t);
        n.call(this, t),
          (this._transformState = {
            afterTransform: i.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" == typeof t.transform &&
              (this._transform = t.transform),
            "function" == typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", s);
      }
      function s() {
        var t = this;
        "function" == typeof this._flush
          ? this._flush(function (e, r) {
              u(t, e, r);
            })
          : u(this, null, null);
      }
      function u(t, e, r) {
        if (e) return t.emit("error", e);
        if ((null != r && t.push(r), t._writableState.length))
          throw new Error("Calling transform done when ws.length != 0");
        if (t._transformState.transforming)
          throw new Error("Calling transform done when still transforming");
        return t.push(null);
      }
      (o.inherits = r(12)),
        o.inherits(a, n),
        (a.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            n.prototype.push.call(this, t, e)
          );
        }),
        (a.prototype._transform = function (t, e, r) {
          throw new Error("_transform() is not implemented");
        }),
        (a.prototype._write = function (t, e, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = t),
            (n.writeencoding = e),
            !n.transforming)
          ) {
            var o = this._readableState;
            (n.needTransform || o.needReadable || o.length < o.highWaterMark) &&
              this._read(o.highWaterMark);
          }
        }),
        (a.prototype._read = function (t) {
          var e = this._transformState;
          null !== e.writechunk && e.writecb && !e.transforming
            ? ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            : (e.needTransform = !0);
        }),
        (a.prototype._destroy = function (t, e) {
          var r = this;
          n.prototype._destroy.call(this, t, function (t) {
            e(t), r.emit("close");
          });
        });
    },
    function (t, e, r) {
      r(85), r(113), r(122), (t.exports = r(124));
    },
    function (t, e, r) {
      "use strict";
      var n,
        o,
        i,
        a,
        s = r(27),
        u = r(23),
        c = r(0),
        f = r(18),
        l = r(95),
        h = r(22),
        p = r(96),
        d = r(37),
        m = r(98),
        g = r(8),
        y = r(24),
        b = r(99),
        v = r(17),
        w = r(32),
        _ = r(100),
        x = r(106),
        S = r(107),
        E = r(56).set,
        k = r(108),
        T = r(109),
        A = r(110),
        C = r(60),
        O = r(111),
        R = r(33),
        P = r(53),
        j = r(2),
        M = r(112),
        L = j("species"),
        I = "Promise",
        B = R.get,
        N = R.set,
        U = R.getterFor(I),
        D = l,
        z = c.TypeError,
        F = c.document,
        q = c.process,
        H = f("fetch"),
        Y = C.f,
        W = Y,
        V = "process" == v(q),
        K = !!(F && F.createEvent && c.dispatchEvent),
        G = P(I, function () {
          if (!(w(D) !== String(D))) {
            if (66 === M) return !0;
            if (!V && "function" != typeof PromiseRejectionEvent) return !0;
          }
          if (u && !D.prototype.finally) return !0;
          if (M >= 51 && /native code/.test(D)) return !1;
          var t = D.resolve(1),
            e = function (t) {
              t(
                function () {},
                function () {}
              );
            };
          return (
            ((t.constructor = {})[L] = e),
            !(t.then(function () {}) instanceof e)
          );
        }),
        Q =
          G ||
          !x(function (t) {
            D.all(t).catch(function () {});
          }),
        J = function (t) {
          var e;
          return !(!g(t) || "function" != typeof (e = t.then)) && e;
        },
        $ = function (t, e, r) {
          if (!e.notified) {
            e.notified = !0;
            var n = e.reactions;
            k(function () {
              for (var o = e.value, i = 1 == e.state, a = 0; n.length > a; ) {
                var s,
                  u,
                  c,
                  f = n[a++],
                  l = i ? f.ok : f.fail,
                  h = f.resolve,
                  p = f.reject,
                  d = f.domain;
                try {
                  l
                    ? (i || (2 === e.rejection && et(t, e), (e.rejection = 1)),
                      !0 === l
                        ? (s = o)
                        : (d && d.enter(),
                          (s = l(o)),
                          d && (d.exit(), (c = !0))),
                      s === f.promise
                        ? p(z("Promise-chain cycle"))
                        : (u = J(s))
                        ? u.call(s, h, p)
                        : h(s))
                    : p(o);
                } catch (t) {
                  d && !c && d.exit(), p(t);
                }
              }
              (e.reactions = []),
                (e.notified = !1),
                r && !e.rejection && Z(t, e);
            });
          }
        },
        X = function (t, e, r) {
          var n, o;
          K
            ? (((n = F.createEvent("Event")).promise = e),
              (n.reason = r),
              n.initEvent(t, !1, !0),
              c.dispatchEvent(n))
            : (n = { promise: e, reason: r }),
            (o = c["on" + t])
              ? o(n)
              : "unhandledrejection" === t &&
                A("Unhandled promise rejection", r);
        },
        Z = function (t, e) {
          E.call(c, function () {
            var r,
              n = e.value;
            if (
              tt(e) &&
              ((r = O(function () {
                V
                  ? q.emit("unhandledRejection", n, t)
                  : X("unhandledrejection", t, n);
              })),
              (e.rejection = V || tt(e) ? 2 : 1),
              r.error)
            )
              throw r.value;
          });
        },
        tt = function (t) {
          return 1 !== t.rejection && !t.parent;
        },
        et = function (t, e) {
          E.call(c, function () {
            V
              ? q.emit("rejectionHandled", t)
              : X("rejectionhandled", t, e.value);
          });
        },
        rt = function (t, e, r, n) {
          return function (o) {
            t(e, r, o, n);
          };
        },
        nt = function (t, e, r, n) {
          e.done ||
            ((e.done = !0),
            n && (e = n),
            (e.value = r),
            (e.state = 2),
            $(t, e, !0));
        },
        ot = function t(e, r, n, o) {
          if (!r.done) {
            (r.done = !0), o && (r = o);
            try {
              if (e === n) throw z("Promise can't be resolved itself");
              var i = J(n);
              i
                ? k(function () {
                    var o = { done: !1 };
                    try {
                      i.call(n, rt(t, e, o, r), rt(nt, e, o, r));
                    } catch (t) {
                      nt(e, o, t, r);
                    }
                  })
                : ((r.value = n), (r.state = 1), $(e, r, !1));
            } catch (t) {
              nt(e, { done: !1 }, t, r);
            }
          }
        };
      G &&
        ((D = function (t) {
          b(this, D, I), y(t), n.call(this);
          var e = B(this);
          try {
            t(rt(ot, this, e), rt(nt, this, e));
          } catch (t) {
            nt(this, e, t);
          }
        }),
        ((n = function (t) {
          N(this, {
            type: I,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = p(D.prototype, {
          then: function (t, e) {
            var r = U(this),
              n = Y(S(this, D));
            return (
              (n.ok = "function" != typeof t || t),
              (n.fail = "function" == typeof e && e),
              (n.domain = V ? q.domain : void 0),
              (r.parent = !0),
              r.reactions.push(n),
              0 != r.state && $(this, r, !1),
              n.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          },
        })),
        (o = function () {
          var t = new n(),
            e = B(t);
          (this.promise = t),
            (this.resolve = rt(ot, t, e)),
            (this.reject = rt(nt, t, e));
        }),
        (C.f = Y = function (t) {
          return t === D || t === i ? new o(t) : W(t);
        }),
        u ||
          "function" != typeof l ||
          ((a = l.prototype.then),
          h(
            l.prototype,
            "then",
            function (t, e) {
              var r = this;
              return new D(function (t, e) {
                a.call(r, t, e);
              }).then(t, e);
            },
            { unsafe: !0 }
          ),
          "function" == typeof H &&
            s(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function (t) {
                  return T(D, H.apply(c, arguments));
                },
              }
            ))),
        s({ global: !0, wrap: !0, forced: G }, { Promise: D }),
        d(D, I, !1, !0),
        m(I),
        (i = f(I)),
        s(
          { target: I, stat: !0, forced: G },
          {
            reject: function (t) {
              var e = Y(this);
              return e.reject.call(void 0, t), e.promise;
            },
          }
        ),
        s(
          { target: I, stat: !0, forced: u || G },
          {
            resolve: function (t) {
              return T(u && this === i ? D : this, t);
            },
          }
        ),
        s(
          { target: I, stat: !0, forced: Q },
          {
            all: function (t) {
              var e = this,
                r = Y(e),
                n = r.resolve,
                o = r.reject,
                i = O(function () {
                  var r = y(e.resolve),
                    i = [],
                    a = 0,
                    s = 1;
                  _(t, function (t) {
                    var u = a++,
                      c = !1;
                    i.push(void 0),
                      s++,
                      r.call(e, t).then(function (t) {
                        c || ((c = !0), (i[u] = t), --s || n(i));
                      }, o);
                  }),
                    --s || n(i);
                });
              return i.error && o(i.value), r.promise;
            },
            race: function (t) {
              var e = this,
                r = Y(e),
                n = r.reject,
                o = O(function () {
                  var o = y(e.resolve);
                  _(t, function (t) {
                    o.call(e, t).then(r.resolve, n);
                  });
                });
              return o.error && n(o.value), r.promise;
            },
          }
        );
    },
    function (t, e, r) {
      "use strict";
      var n = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !n.call({ 1: 2 }, 1);
      e.f = i
        ? function (t) {
            var e = o(this, t);
            return !!e && e.enumerable;
          }
        : n;
    },
    function (t, e, r) {
      var n = r(5),
        o = r(17),
        i = "".split;
      t.exports = n(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == o(t) ? i.call(t, "") : Object(t);
          }
        : Object;
    },
    function (t, e, r) {
      var n = r(0),
        o = r(32),
        i = n.WeakMap;
      t.exports = "function" == typeof i && /native code/.test(o(i));
    },
    function (t, e, r) {
      var n = r(3),
        o = r(90),
        i = r(28),
        a = r(14);
      t.exports = function (t, e) {
        for (var r = o(e), s = a.f, u = i.f, c = 0; c < r.length; c++) {
          var f = r[c];
          n(t, f) || s(t, f, u(e, f));
        }
      };
    },
    function (t, e, r) {
      var n = r(18),
        o = r(92),
        i = r(94),
        a = r(4);
      t.exports =
        n("Reflect", "ownKeys") ||
        function (t) {
          var e = o.f(a(t)),
            r = i.f;
          return r ? e.concat(r(t)) : e;
        };
    },
    function (t, e, r) {
      var n = r(0);
      t.exports = n;
    },
    function (t, e, r) {
      var n = r(49),
        o = r(36).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return n(t, o);
        };
    },
    function (t, e, r) {
      var n = r(52),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, e) {
        var r = n(t);
        return r < 0 ? o(r + e, 0) : i(r, e);
      };
    },
    function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, r) {
      var n = r(0);
      t.exports = n.Promise;
    },
    function (t, e, r) {
      var n = r(22);
      t.exports = function (t, e, r) {
        for (var o in e) n(t, o, e[o], r);
        return t;
      };
    },
    function (t, e, r) {
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = r(54);
      t.exports = o && !Symbol.sham && "symbol" == n(Symbol.iterator);
    },
    function (t, e, r) {
      "use strict";
      var n = r(18),
        o = r(14),
        i = r(2),
        a = r(7),
        s = i("species");
      t.exports = function (t) {
        var e = n(t),
          r = o.f;
        a &&
          e &&
          !e[s] &&
          r(e, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, e) {
      t.exports = function (t, e, r) {
        if (!(t instanceof e))
          throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
        return t;
      };
    },
    function (t, e, r) {
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = r(4),
        i = r(101),
        a = r(51),
        s = r(55),
        u = r(102),
        c = r(105),
        f = function (t, e) {
          (this.stopped = t), (this.result = e);
        };
      (t.exports = function (t, e, r, l, h) {
        var p,
          d,
          m,
          g,
          y,
          b,
          v,
          w = s(e, r, l ? 2 : 1);
        if (h) p = t;
        else {
          if ("function" != typeof (d = u(t)))
            throw TypeError("Target is not iterable");
          if (i(d)) {
            for (m = 0, g = a(t.length); g > m; m++)
              if (
                (y = l ? w(o((v = t[m]))[0], v[1]) : w(t[m])) &&
                y instanceof f
              )
                return y;
            return new f(!1);
          }
          p = d.call(t);
        }
        for (b = p.next; !(v = b.call(p)).done; )
          if ("object" == n((y = c(p, w, v.value, l))) && y && y instanceof f)
            return y;
        return new f(!1);
      }).stop = function (t) {
        return new f(!0, t);
      };
    },
    function (t, e, r) {
      var n = r(2),
        o = r(19),
        i = n("iterator"),
        a = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (o.Array === t || a[i] === t);
      };
    },
    function (t, e, r) {
      var n = r(103),
        o = r(19),
        i = r(2)("iterator");
      t.exports = function (t) {
        if (null != t) return t[i] || t["@@iterator"] || o[n(t)];
      };
    },
    function (t, e, r) {
      var n = r(104),
        o = r(17),
        i = r(2)("toStringTag"),
        a =
          "Arguments" ==
          o(
            (function () {
              return arguments;
            })()
          );
      t.exports = n
        ? o
        : function (t) {
            var e, r, n;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (r = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = Object(t)), i))
              ? r
              : a
              ? o(e)
              : "Object" == (n = o(e)) && "function" == typeof e.callee
              ? "Arguments"
              : n;
          };
    },
    function (t, e, r) {
      var n = {};
      (n[r(2)("toStringTag")] = "z"), (t.exports = "[object z]" === String(n));
    },
    function (t, e, r) {
      var n = r(4);
      t.exports = function (t, e, r, o) {
        try {
          return o ? e(n(r)[0], r[1]) : e(r);
        } catch (e) {
          var i = t.return;
          throw (void 0 !== i && n(i.call(t)), e);
        }
      };
    },
    function (t, e, r) {
      var n = r(2)("iterator"),
        o = !1;
      try {
        var i = 0,
          a = {
            next: function () {
              return { done: !!i++ };
            },
            return: function () {
              o = !0;
            },
          };
        (a[n] = function () {
          return this;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, e) {
        if (!e && !o) return !1;
        var r = !1;
        try {
          var i = {};
          (i[n] = function () {
            return {
              next: function () {
                return { done: (r = !0) };
              },
            };
          }),
            t(i);
        } catch (t) {}
        return r;
      };
    },
    function (t, e, r) {
      var n = r(4),
        o = r(24),
        i = r(2)("species");
      t.exports = function (t, e) {
        var r,
          a = n(t).constructor;
        return void 0 === a || null == (r = n(a)[i]) ? e : o(r);
      };
    },
    function (t, e, r) {
      var n,
        o,
        i,
        a,
        s,
        u,
        c,
        f,
        l = r(0),
        h = r(28).f,
        p = r(17),
        d = r(56).set,
        m = r(58),
        g = l.MutationObserver || l.WebKitMutationObserver,
        y = l.process,
        b = l.Promise,
        v = "process" == p(y),
        w = h(l, "queueMicrotask"),
        _ = w && w.value;
      _ ||
        ((n = function () {
          var t, e;
          for (v && (t = y.domain) && t.exit(); o; ) {
            (e = o.fn), (o = o.next);
            try {
              e();
            } catch (t) {
              throw (o ? a() : (i = void 0), t);
            }
          }
          (i = void 0), t && t.enter();
        }),
        v
          ? (a = function () {
              y.nextTick(n);
            })
          : g && !m
          ? ((s = !0),
            (u = document.createTextNode("")),
            new g(n).observe(u, { characterData: !0 }),
            (a = function () {
              u.data = s = !s;
            }))
          : b && b.resolve
          ? ((c = b.resolve(void 0)),
            (f = c.then),
            (a = function () {
              f.call(c, n);
            }))
          : (a = function () {
              d.call(l, n);
            })),
        (t.exports =
          _ ||
          function (t) {
            var e = { fn: t, next: void 0 };
            i && (i.next = e), o || ((o = e), a()), (i = e);
          });
    },
    function (t, e, r) {
      var n = r(4),
        o = r(8),
        i = r(60);
      t.exports = function (t, e) {
        if ((n(t), o(e) && e.constructor === t)) return e;
        var r = i.f(t);
        return (0, r.resolve)(e), r.promise;
      };
    },
    function (t, e, r) {
      var n = r(0);
      t.exports = function (t, e) {
        var r = n.console;
        r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e));
      };
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    },
    function (t, e, r) {
      var n,
        o,
        i = r(0),
        a = r(59),
        s = i.process,
        u = s && s.versions,
        c = u && u.v8;
      c
        ? (o = (n = c.split("."))[0] + n[1])
        : a &&
          (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
          (n = a.match(/Chrome\/(\d+)/)) &&
          (o = n[1]),
        (t.exports = o && +o);
    },
    function (t, e, r) {
      "use strict";
      var n = r(21),
        o = r(61),
        i = r(19),
        a = r(33),
        s = r(116),
        u = a.set,
        c = a.getterFor("Array Iterator");
      (t.exports = s(
        Array,
        "Array",
        function (t, e) {
          u(this, { type: "Array Iterator", target: n(t), index: 0, kind: e });
        },
        function () {
          var t = c(this),
            e = t.target,
            r = t.kind,
            n = t.index++;
          return !e || n >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == r
            ? { value: n, done: !1 }
            : "values" == r
            ? { value: e[n], done: !1 }
            : { value: [n, e[n]], done: !1 };
        },
        "values"
      )),
        (i.Arguments = i.Array),
        o("keys"),
        o("values"),
        o("entries");
    },
    function (t, e, r) {
      var n = r(7),
        o = r(14),
        i = r(4),
        a = r(115);
      t.exports = n
        ? Object.defineProperties
        : function (t, e) {
            i(t);
            for (var r, n = a(e), s = n.length, u = 0; s > u; )
              o.f(t, (r = n[u++]), e[r]);
            return t;
          };
    },
    function (t, e, r) {
      var n = r(49),
        o = r(36);
      t.exports =
        Object.keys ||
        function (t) {
          return n(t, o);
        };
    },
    function (t, e, r) {
      "use strict";
      var n = r(27),
        o = r(117),
        i = r(64),
        a = r(120),
        s = r(37),
        u = r(13),
        c = r(22),
        f = r(2),
        l = r(23),
        h = r(19),
        p = r(63),
        d = p.IteratorPrototype,
        m = p.BUGGY_SAFARI_ITERATORS,
        g = f("iterator"),
        y = function () {
          return this;
        };
      t.exports = function (t, e, r, f, p, b, v) {
        o(r, e, f);
        var w,
          _,
          x,
          S = function (t) {
            if (t === p && C) return C;
            if (!m && t in T) return T[t];
            switch (t) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this);
            };
          },
          E = e + " Iterator",
          k = !1,
          T = t.prototype,
          A = T[g] || T["@@iterator"] || (p && T[p]),
          C = (!m && A) || S(p),
          O = ("Array" == e && T.entries) || A;
        if (
          (O &&
            ((w = i(O.call(new t()))),
            d !== Object.prototype &&
              w.next &&
              (l ||
                i(w) === d ||
                (a ? a(w, d) : "function" != typeof w[g] && u(w, g, y)),
              s(w, E, !0, !0),
              l && (h[E] = y))),
          "values" == p &&
            A &&
            "values" !== A.name &&
            ((k = !0),
            (C = function () {
              return A.call(this);
            })),
          (l && !v) || T[g] === C || u(T, g, C),
          (h[e] = C),
          p)
        )
          if (
            ((_ = {
              values: S("values"),
              keys: b ? C : S("keys"),
              entries: S("entries"),
            }),
            v)
          )
            for (x in _) (m || k || !(x in T)) && c(T, x, _[x]);
          else n({ target: e, proto: !0, forced: m || k }, _);
        return _;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(63).IteratorPrototype,
        o = r(62),
        i = r(29),
        a = r(37),
        s = r(19),
        u = function () {
          return this;
        };
      t.exports = function (t, e, r) {
        var c = e + " Iterator";
        return (
          (t.prototype = o(n, { next: i(1, r) })),
          a(t, c, !1, !0),
          (s[c] = u),
          t
        );
      };
    },
    function (t, e, r) {
      var n = r(43);
      t.exports = function (t) {
        return Object(n(t));
      };
    },
    function (t, e, r) {
      var n = r(5);
      t.exports = !n(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    function (t, e, r) {
      var n = r(4),
        o = r(121);
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                r = {};
              try {
                (t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(r, []),
                  (e = r instanceof Array);
              } catch (t) {}
              return function (r, i) {
                return n(r), o(i), e ? t.call(r, i) : (r.__proto__ = i), r;
              };
            })()
          : void 0);
    },
    function (t, e, r) {
      var n = r(8);
      t.exports = function (t) {
        if (!n(t) && null !== t)
          throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(27),
        o = r(50).includes,
        i = r(61);
      n(
        {
          target: "Array",
          proto: !0,
          forced: !r(123)("indexOf", { ACCESSORS: !0, 1: 0 }),
        },
        {
          includes: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        i("includes");
    },
    function (t, e, r) {
      var n = r(7),
        o = r(5),
        i = r(3),
        a = Object.defineProperty,
        s = {},
        u = function (t) {
          throw t;
        };
      t.exports = function (t, e) {
        if (i(s, t)) return s[t];
        e || (e = {});
        var r = [][t],
          c = !!i(e, "ACCESSORS") && e.ACCESSORS,
          f = i(e, 0) ? e[0] : u,
          l = i(e, 1) ? e[1] : void 0;
        return (s[t] =
          !!r &&
          !o(function () {
            if (c && !n) return !0;
            var t = { length: -1 };
            c ? a(t, 1, { enumerable: !0, get: u }) : (t[1] = 1),
              r.call(t, f, l);
          }));
      };
    },
    function (t, e, r) {
      r(125);
      var n = r(129),
        o = r(65),
        i = r(159),
        a = r(161);
      t.exports = {
        newWeb: function (t) {
          var e = new n(t);
          return (
            e.use(o),
            e.use(a),
            { start: e.start.bind(e), abort: e.abort.bind(e) }
          );
        },
        newPopup: function (t) {
          var e = new n(t);
          return (
            e.use(i),
            e.use(a),
            { start: e.start.bind(e), abort: e.abort.bind(e) }
          );
        },
      };
    },
    function (t, e, r) {
      var n = r(126),
        o = r(127);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[t.i, o, ""]]);
      var i = { insert: "head", singleton: !1 };
      n(o, i);
      t.exports = o.locals || {};
    },
    function (t, e, r) {
      "use strict";
      var n,
        o = function () {
          return (
            void 0 === n &&
              (n = Boolean(window && document && document.all && !window.atob)),
            n
          );
        },
        i = (function () {
          var t = {};
          return function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          };
        })(),
        a = [];
      function s(t) {
        for (var e = -1, r = 0; r < a.length; r++)
          if (a[r].identifier === t) {
            e = r;
            break;
          }
        return e;
      }
      function u(t, e) {
        for (var r = {}, n = [], o = 0; o < t.length; o++) {
          var i = t[o],
            u = e.base ? i[0] + e.base : i[0],
            c = r[u] || 0,
            f = "".concat(u, " ").concat(c);
          r[u] = c + 1;
          var l = s(f),
            h = { css: i[1], media: i[2], sourceMap: i[3] };
          -1 !== l
            ? (a[l].references++, a[l].updater(h))
            : a.push({ identifier: f, updater: g(h, e), references: 1 }),
            n.push(f);
        }
        return n;
      }
      function c(t) {
        var e = document.createElement("style"),
          n = t.attributes || {};
        if (void 0 === n.nonce) {
          var o = r.nc;
          o && (n.nonce = o);
        }
        if (
          (Object.keys(n).forEach(function (t) {
            e.setAttribute(t, n[t]);
          }),
          "function" == typeof t.insert)
        )
          t.insert(e);
        else {
          var a = i(t.insert || "head");
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          a.appendChild(e);
        }
        return e;
      }
      var f,
        l =
          ((f = []),
          function (t, e) {
            return (f[t] = e), f.filter(Boolean).join("\n");
          });
      function h(t, e, r, n) {
        var o = r
          ? ""
          : n.media
          ? "@media ".concat(n.media, " {").concat(n.css, "}")
          : n.css;
        if (t.styleSheet) t.styleSheet.cssText = l(e, o);
        else {
          var i = document.createTextNode(o),
            a = t.childNodes;
          a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
        }
      }
      function p(t, e, r) {
        var n = r.css,
          o = r.media,
          i = r.sourceMap;
        if (
          (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
          i &&
            btoa &&
            (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              " */"
            )),
          t.styleSheet)
        )
          t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
      var d = null,
        m = 0;
      function g(t, e) {
        var r, n, o;
        if (e.singleton) {
          var i = m++;
          (r = d || (d = c(e))),
            (n = h.bind(null, r, i, !1)),
            (o = h.bind(null, r, i, !0));
        } else
          (r = c(e)),
            (n = p.bind(null, r, e)),
            (o = function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(r);
            });
        return (
          n(t),
          function (e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap
              )
                return;
              n((t = e));
            } else o();
          }
        );
      }
      t.exports = function (t, e) {
        (e = e || {}).singleton ||
          "boolean" == typeof e.singleton ||
          (e.singleton = o());
        var r = u((t = t || []), e);
        return function (t) {
          if (
            ((t = t || []),
            "[object Array]" === Object.prototype.toString.call(t))
          ) {
            for (var n = 0; n < r.length; n++) {
              var o = s(r[n]);
              a[o].references--;
            }
            for (var i = u(t, e), c = 0; c < r.length; c++) {
              var f = s(r[c]);
              0 === a[f].references && (a[f].updater(), a.splice(f, 1));
            }
            r = i;
          }
        };
      };
    },
    function (t, e, r) {
      (e = r(128)(!1)).push([
        t.i,
        ".irma-web-center-child{background-color:inherit;box-sizing:border-box;margin:0;padding:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.irma-web-popup{background-color:inherit;box-sizing:border-box;margin:0;padding:0;position:fixed;top:0;left:0;right:0;bottom:0;z-index:2000;background-color:rgba(0,0,0,0.5);opacity:0;visibility:hidden;overflow:auto;display:flex;align-items:center;justify-content:center}.irma-web-popup>*{margin:auto 0 !important;transform:scale(0.7)}.irma-web-popup.irma-web-popup-active{opacity:1;visibility:visible}.irma-web-popup.irma-web-popup-active>*{transform:scale(1)}.irma-web-form{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:flex;flex-direction:column;width:80%;min-width:262px;max-width:400px;height:480px;background-color:#004c92;border:1px solid white;border-radius:10px}@media screen and (max-width:768px){.irma-web-form{min-height:440px}}.irma-web-form .irma-web-header{background-color:inherit;box-sizing:border-box;margin:0;padding:0;position:relative;flex:0 0 auto;padding:2rem;margin:0 1rem;overflow:hidden;text-align:center;border-top-left-radius:9px;border-top-right-radius:9px}@media screen and (max-width:768px){.irma-web-form .irma-web-header{padding:1em}}.irma-web-form .irma-web-header p{background-color:inherit;box-sizing:border-box;margin:0;padding:0;font-family:\"Roboto\",Tahoma,Arial,sans-serif;font-weight:500;font-size:20px;color:white}@media screen and (max-width:768px){.irma-web-form .irma-web-header p{font-family:\"Roboto\",Tahoma,Arial,sans-serif;font-weight:500;font-size:16px;color:white}}.irma-web-form .irma-web-header p i.irma-web-logo{width:70px;height:55px}.irma-web-form .irma-web-header .irma-web-helper{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:flex;align-items:center;justify-content:center;position:absolute;bottom:1rem;left:0;right:0;height:calc(100% - 2rem);background-color:#47679e;border-top-left-radius:6px;border-top-right-radius:6px;border-bottom-left-radius:1px;border-bottom-right-radius:1px}.irma-web-form .irma-web-header .irma-web-helper p,.irma-web-form .irma-web-header .irma-web-helper a{font-family:\"Roboto\",Tahoma,Arial,sans-serif;font-weight:300;font-size:13px;color:white}.irma-web-form .irma-web-header .irma-web-helper p{margin:1em;text-align:center}.irma-web-form .irma-web-header>*:not(.irma-web-helper):not(.irma-web-close){transform:translateX(0);-webkit-transition:-webkit-transform .4s ease;-webkit-transition:transform .4s ease;transition:transform .4s ease}.irma-web-form .irma-web-header .irma-web-helper{transform:translateX(120%);-webkit-transition:-webkit-transform .4s ease;-webkit-transition:transform .4s ease;transition:transform .4s ease}.irma-web-form .irma-web-header.irma-web-show-helper>*:not(.irma-web-helper):not(.irma-web-close){transform:translateX(-120%)}.irma-web-form .irma-web-header.irma-web-show-helper .irma-web-helper{transform:translateX(0)}.irma-web-form .irma-web-header .irma-web-close{background-color:inherit;box-sizing:border-box;margin:0;padding:0;position:absolute;top:1rem;right:0;width:26px;height:26px;background-color:white;border-radius:50%;border:0;cursor:pointer}.irma-web-form .irma-web-header .irma-web-close:before,.irma-web-form .irma-web-header .irma-web-close:after{content:\" \";display:block;position:absolute;top:5.2px;left:10.92px;width:4.16px;height:15.6px;background-color:#004c92;transform:rotateZ(45deg);transform-origin:center}.irma-web-form .irma-web-header .irma-web-close:after{transform:rotateZ(-45deg)}.irma-web-form .irma-web-content{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:flex;align-items:center;justify-content:center;flex:1 1 auto;margin:0 1rem 1rem 1rem;background-color:white;border-bottom-right-radius:6px;border-bottom-left-radius:6px;border-top-left-radius:1px;border-top-right-radius:1px}.irma-web-form .irma-web-content .irma-web-centered{background-color:inherit;box-sizing:border-box;margin:0;padding:0;height:auto;text-align:center}.irma-web-form .irma-web-content .irma-web-centered img,.irma-web-form .irma-web-content .irma-web-centered canvas{cursor:none}.irma-web-form .irma-web-content p{background-color:inherit;box-sizing:border-box;margin:0;padding:0;font-family:\"Roboto\",Tahoma,Arial,sans-serif;font-weight:300;font-size:15px;color:#7f7f7f;margin:1em 4em}@media screen and (max-width:768px){.irma-web-form .irma-web-content p{margin:1em 2em}}.irma-web-form .irma-web-content p:first-child{margin-top:0}.irma-web-form .irma-web-content p:last-child{margin-bottom:0}.irma-web-form .irma-web-content a{background-color:inherit;box-sizing:border-box;margin:0;padding:0;font-family:\"Roboto\",Tahoma,Arial,sans-serif;font-weight:300;font-size:15px;color:#7f7f7f;text-decoration:underline;cursor:pointer}.irma-web-form .irma-web-content a:hover{color:#004c92}.irma-web-button{background-color:inherit;box-sizing:border-box;margin:0;padding:0;font-family:\"Roboto\",Tahoma,Arial,sans-serif;font-weight:300;font-size:14px;color:#7f7f7f;display:inline-block;padding:1.5em 4em;background-color:#004c92;border:1px solid #00315f;border-radius:10px;box-shadow:1px 1px 3px rgba(0,0,0,0.5);text-decoration:none;color:white;font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.irma-web-button:active{transform:scale3d(0.99,0.99,1);transform-origin:center}.irma-web-button:focus{outline:0}.irma-web-logo{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:inline-block;vertical-align:middle;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1522.71 1381.02'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='none' d='M1366.53 814.27l-101.22-301.78 67.32-3.08 102.1 293.27V148.6H89.91v1107.11h1344.82V818.75l-68.2-4.48z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg data-name='Layer 2'%3E%3Cg data-name='Layer 1'%3E%3Cg data-name='Rounded Rectangle 1'%3E%3Cpath d='M382 1351.23c-35.92 0-67.3-21.45-78.11-53.37L114 736.23c-14.22-42 11-88.67 56.24-104l903.9-306.31a92.59 92.59 0 0129.72-4.94c35.92 0 67.32 21.45 78.12 53.39L1371.83 936c14.22 42-11 88.68-56.23 104l-903.92 306.3a92.27 92.27 0 01-29.72 4.94z' fill='%23d44454'/%3E%3Cpath d='M1103.83 350.79c22.61 0 43 12.62 49.87 33.12l189.89 561.62c9 26.5-7.85 56.15-37.58 66.23l-903.9 306.3a62.81 62.81 0 01-20.16 3.36c-22.6 0-42.94-12.62-49.88-33.12L142.2 726.68c-9-26.5 7.86-56.16 37.57-66.22l903.9-306.31a62.81 62.81 0 0120.16-3.36m0-59.61a122.26 122.26 0 00-39.29 6.51L160.64 604c-60.78 20.59-94.39 84.19-74.91 141.78l189.89 561.61c14.9 44 57.64 73.63 106.35 73.63a122 122 0 0039.3-6.51l903.89-306.3c60.79-20.61 94.39-84.22 74.91-141.79l-189.9-561.6c-14.9-44.05-57.63-73.64-106.34-73.64z' fill='%23d44454'/%3E%3Cpath d='M425.74 1060.06c-35.92 0-67.3-21.45-78.11-53.38L157.75 445.06c-14.22-42 11-88.68 56.24-104l903.9-306.31a92.31 92.31 0 0129.72-4.94c35.92 0 67.32 21.45 78.12 53.38l189.88 561.62c14.22 42-11 88.67-56.23 104l-903.92 306.3a92 92 0 01-29.72 5z' fill='%23ffbb58'/%3E%3Cpath d='M1147.61 59.61c22.61 0 43 12.62 49.87 33.13l189.89 561.61c9 26.51-7.85 56.16-37.58 66.24l-903.9 306.29a62.54 62.54 0 01-20.16 3.36c-22.6 0-43-12.62-49.88-33.11L186 435.51c-9-26.51 7.86-56.16 37.57-66.23L1127.45 63a62.56 62.56 0 0120.16-3.37m0-59.61a122.26 122.26 0 00-39.29 6.51l-903.9 306.29C143.64 333.42 110 397 129.51 454.6l189.89 561.61c14.9 44 57.63 73.63 106.35 73.63a122 122 0 0039.3-6.51L1368.94 777c60.79-20.6 94.39-84.21 74.91-141.79L1254 73.64C1239.05 29.59 1196.32 0 1147.61 0z' fill='%23ffbb58'/%3E%3Cpath d='M185.21 1099.47c-35.35-6.37-62.43-33-67.4-66.39L30.63 446.67c-6.53-43.88 26.58-85.31 73.8-92.37l943.92-141a92.26 92.26 0 0130.13.41c35.35 6.37 62.44 33.06 67.4 66.4l87.19 586.4c6.53 43.87-26.58 85.31-73.81 92.38l-943.92 141a92 92 0 01-30.13-.41z' fill='%232bc194'/%3E%3Cpath d='M1073.19 243c22.25 4 40 20 43.2 41.45l87.18 586.4c4.13 27.68-17.69 53.87-48.73 58.52l-943.91 141a62.68 62.68 0 01-20.44-.27c-22.25-4-40-20-43.21-41.44L60.11 442.28c-4.13-27.67 17.7-53.87 48.73-58.5l943.92-141a62.62 62.62 0 0120.43.27m10.58-58.66a122 122 0 00-39.82-.57L100 324.82C36.56 334.3-7.8 390.93 1.15 451.05l87.18 586.4c6.85 46 43.66 82.69 91.6 91.34a122.33 122.33 0 0039.83.57l943.91-141c63.48-9.5 107.83-66.13 98.88-126.25l-87.2-586.39c-6.84-45.99-43.65-82.72-91.58-91.34z' fill='%232bc194'/%3E%3Cpath d='M446.49 1190c-35.42-6-62.76-32.43-68.06-65.71l-93.05-585.54c-7-43.81 25.72-85.57 72.87-93.1l942.46-150.46a92.86 92.86 0 0130.13.11c35.42 6 62.77 32.44 68.06 65.73l93.1 585.5c7 43.8-25.72 85.57-72.88 93.11l-942.5 150.44a92 92 0 01-30.13-.11z' fill='%2300b1e6'/%3E%3Cpath d='M1325.84 324.69c22.29 3.79 40.23 19.64 43.62 41l93 585.5c4.4 27.64-17.15 54-48.14 59l-942.41 150.46a62.74 62.74 0 01-20.43-.07c-22.29-3.79-40.23-19.64-43.63-41l-93-585.5c-4.4-27.63 17.16-54.05 48.14-59l942.46-150.45a62.47 62.47 0 0120.43.06m10-58.77a122.36 122.36 0 00-39.83-.17l-942.5 150.46c-63.37 10.12-107.16 67.18-97.61 127.22L349 1128.92c7.3 45.92 44.48 82.25 92.5 90.42a122.15 122.15 0 0039.84.17l942.44-150.45c63.38-10.13 107.17-67.2 97.62-127.23l-93.08-585.48c-7.32-45.93-44.47-82.27-92.48-90.43z' fill='%2300b1e6'/%3E%3C/g%3E%3Cg data-name='Rounded Rectangle 1 1 1'%3E%3Cpath d='M400.86 1214.31c-35.92 0-67.31-21.45-78.11-53.38L132.87 599.31c-14.22-42 11-88.68 56.23-104L1093 189a92.31 92.31 0 0129.72-4.94c35.92 0 67.31 21.45 78.12 53.38l189.88 561.62c14.21 42-11 88.67-56.24 104l-903.91 306.3a92.05 92.05 0 01-29.72 5z' fill='%23004c92'/%3E%3Cpath d='M1122.73 213.86c22.6 0 43 12.62 49.87 33.13l189.88 561.61c9 26.51-7.85 56.16-37.57 66.24L421 1181.14a62.8 62.8 0 01-20.16 3.35c-22.61 0-43-12.62-49.88-33.11L161.09 589.76c-9-26.51 7.86-56.16 37.58-66.22l903.9-306.31a62.51 62.51 0 0120.16-3.37m0-59.61a122.21 122.21 0 00-39.29 6.51l-903.9 306.31c-60.79 20.6-94.39 84.2-74.91 141.78l189.88 561.61c14.9 44 57.64 73.63 106.36 73.63a122 122 0 0039.29-6.51l903.9-306.3c60.78-20.6 94.39-84.21 74.91-141.79l-189.91-561.6c-14.89-44.05-57.63-73.64-106.33-73.64z' fill='%23fff'/%3E%3C/g%3E%3Cg clip-path='url(%23a)' fill='%23fff'%3E%3Cpath d='M476.91 518.15h55.79v294.84h-55.79zM597.34 518.15h102.29q45.17 0 73.49 26.54t28.36 65.71A84.82 84.82 0 01786 660.31q-15.47 22.11-42.05 33.06L812.54 813H751l-59.77-111.2h-38.09V813h-55.79V518.15zM699.63 567h-46.49v85.93h46.49q19.92 0 31.88-11.8t12-31.16q0-19-12-31T699.63 567zM1016.33 734.71l-46-.15-59.51-104.69V813H855V518.15h49.59l88.54 157.1 89-157.1h49.14V813h-55.78V630.19zM1371.75 813l-19.85-62.76h-105.53L1226.52 813h-60.66l104.93-294.84H1327L1432 813zm-72.62-228.72l-39.05 122.57h78.1z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");background-size:contain;background-position:center;background-repeat:no-repeat;font-size:0;color:transparent}.irma-web-qr-code{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:block;width:256px;height:256px;max-width:100%;background-color:white}.irma-web-loading-animation{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:inline-block;width:39px;height:39px}.irma-web-loading-animation *{background-color:inherit;box-sizing:border-box;margin:0;padding:0}.irma-web-loading-animation *{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:block;width:33%;height:33%;background-color:#00b1e6;float:left;-ms-animation:loading-animation 1.3s infinite ease-in-out;-webkit-animation:loading-animation 1.3s infinite ease-in-out;animation:loading-animation 1.3s infinite ease-in-out}.irma-web-loading-animation *:nth-child(1){-ms-animation-delay:.2s;-webkit-animation-delay:.2s;animation-delay:.2s}.irma-web-loading-animation *:nth-child(2){-ms-animation-delay:.3s;-webkit-animation-delay:.3s;animation-delay:.3s}.irma-web-loading-animation *:nth-child(3){-ms-animation-delay:.4s;-webkit-animation-delay:.4s;animation-delay:.4s}.irma-web-loading-animation *:nth-child(4){-ms-animation-delay:.1s;-webkit-animation-delay:.1s;animation-delay:.1s}.irma-web-loading-animation *:nth-child(5){-ms-animation-delay:.2s;-webkit-animation-delay:.2s;animation-delay:.2s}.irma-web-loading-animation *:nth-child(6){-ms-animation-delay:.3s;-webkit-animation-delay:.3s;animation-delay:.3s}.irma-web-loading-animation *:nth-child(7){-ms-animation-delay:0s;-webkit-animation-delay:0s;animation-delay:0s}.irma-web-loading-animation *:nth-child(8){-ms-animation-delay:.1s;-webkit-animation-delay:.1s;animation-delay:.1s}.irma-web-loading-animation *:nth-child(9){-ms-animation-delay:.2s;-webkit-animation-delay:.2s;animation-delay:.2s}@-ms-keyframes loading-animation{0%,70%,100%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@-webkit-keyframes loading-animation{0%,70%,100%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes loading-animation{0%,70%,100%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}.irma-web-waiting-for-user-animation{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:inline-block;width:23px;height:39px;position:relative;background-color:#00b1e6;border-radius:2px;-ms-animation:waiting-for-user-animation 2s infinite ease-in-out;-webkit-animation:waiting-for-user-animation 2s infinite ease-in-out;animation:waiting-for-user-animation 2s infinite ease-in-out}.irma-web-waiting-for-user-animation:before,.irma-web-waiting-for-user-animation:after{content:\"\";display:block;position:absolute;background-color:white}.irma-web-waiting-for-user-animation:before{top:3px;left:3px;right:3px;bottom:8px;border-radius:1px}.irma-web-waiting-for-user-animation:after{width:4px;height:4px;left:50%;bottom:2px;margin-left:-2px;border-radius:50%}@-ms-keyframes waiting-for-user-animation{0%,100%{-webkit-transform:scale3D(1.1,1.1,1);transform:scale3D(1.1,1.1,1)}50%{-webkit-transform:scale3D(0.9,0.9,1);transform:scale3D(0.9,0.9,1)}}@-webkit-keyframes waiting-for-user-animation{0%,100%{-webkit-transform:scale3D(1.1,1.1,1);transform:scale3D(1.1,1.1,1)}50%{-webkit-transform:scale3D(0.9,0.9,1);transform:scale3D(0.9,0.9,1)}}@keyframes waiting-for-user-animation{0%,100%{-webkit-transform:scale3D(1.1,1.1,1);transform:scale3D(1.1,1.1,1)}50%{-webkit-transform:scale3D(0.9,0.9,1);transform:scale3D(0.9,0.9,1)}}.irma-web-checkmark-animation{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:inline-block;width:48px;height:39px}.irma-web-checkmark-animation:before{content:\" \";display:block;box-sizing:content-box;width:27px;height:15px;border:13px solid #2bc194;border-top:0;border-right:0;transform:translate(0,18px) rotate(-45deg);transform-origin:left top;-ms-animation:checkmark-animation .6s 1 ease;-webkit-animation:checkmark-animation .6s 1 ease;animation:checkmark-animation .6s 1 ease}@-ms-keyframes checkmark-animation{0%{height:0;width:0;opacity:1}50%{height:15px;width:0;opacity:1}100%{height:15px;width:27px;opacity:1}}@-webkit-keyframes checkmark-animation{0%{height:0;width:0;opacity:1}50%{height:15px;width:0;opacity:1}100%{height:15px;width:27px;opacity:1}}@keyframes checkmark-animation{0%{height:0;width:0;opacity:1}50%{height:15px;width:0;opacity:1}100%{height:15px;width:27px;opacity:1}}.irma-web-forbidden-animation{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:inline-block;position:relative;width:44px;height:44px}.irma-web-forbidden-animation:before,.irma-web-forbidden-animation:after{content:\" \";display:block;position:absolute;box-sizing:border-box;width:22px;height:44px;top:0;left:22px;border:7px solid #d44454;border-radius:22px}.irma-web-forbidden-animation:before{-ms-animation:complete-animation .8s linear 1 forwards;-webkit-animation:complete-animation .8s linear 1 forwards;animation:complete-animation .8s linear 1 forwards}.irma-web-forbidden-animation:after{width:37px;-ms-animation:rotate-animation .8s linear 1 forwards;-webkit-animation:rotate-animation .8s linear 1 forwards;animation:rotate-animation .8s linear 1 forwards}@-ms-keyframes complete-animation{0%,65%{border-radius:0;border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;width:22px;left:22px}66%,100%{border:7px solid #d44454;border-radius:22px;width:44px;left:0}}@-webkit-keyframes complete-animation{0%,65%{border-radius:0;border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;width:22px;left:22px}66%,100%{border:7px solid #d44454;border-radius:22px;width:44px;left:0}}@keyframes complete-animation{0%,65%{border-radius:0;border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;width:22px;left:22px}66%,100%{border:7px solid #d44454;border-radius:22px;width:44px;left:0}}@-ms-keyframes rotate-animation{0%,32.99%{border:0;border-radius:0;background-color:white;transform-origin:center left;width:22px}33%,65.99%{border:7px solid #d44454;border-radius:0;border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;background-color:white;width:22px;height:44px;transform-origin:center left;left:22px}66%,100%{border:0;background-color:#d44454;height:7px;transform:rotate(-45deg) translate(-18.5px,27.5px);transform-origin:top left;left:0}0.01%{transform:rotate(1deg)}32.98%{transform:rotate(180deg)}33.01%{transform:rotate(1deg)}65.98%{transform:rotate(180deg)}66.01%{width:0}99.99%{width:37px}}@-webkit-keyframes rotate-animation{0%,32.99%{border:0;border-radius:0;background-color:white;transform-origin:center left;width:22px}33%,65.99%{border:7px solid #d44454;border-radius:0;border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;background-color:white;width:22px;height:44px;transform-origin:center left;left:22px}66%,100%{border:0;background-color:#d44454;height:7px;transform:rotate(-45deg) translate(-18.5px,27.5px);transform-origin:top left;left:0}0.01%{transform:rotate(1deg)}32.98%{transform:rotate(180deg)}33.01%{transform:rotate(1deg)}65.98%{transform:rotate(180deg)}66.01%{width:0}99.99%{width:37px}}@keyframes rotate-animation{0%,32.99%{border:0;border-radius:0;background-color:white;transform-origin:center left;width:22px}33%,65.99%{border:7px solid #d44454;border-radius:0;border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;background-color:white;width:22px;height:44px;transform-origin:center left;left:22px}66%,100%{border:0;background-color:#d44454;height:7px;transform:rotate(-45deg) translate(-18.5px,27.5px);transform-origin:top left;left:0}0.01%{transform:rotate(1deg)}32.98%{transform:rotate(180deg)}33.01%{transform:rotate(1deg)}65.98%{transform:rotate(180deg)}66.01%{width:0}99.99%{width:37px}}.irma-web-clock-animation{background-color:inherit;box-sizing:border-box;margin:0;padding:0;display:inline-block;position:relative;width:42px;height:42px;border-radius:50%;border:5px solid #d44454;-ms-animation:shake-animation 1s infinite linear 2s;-webkit-animation:shake-animation 1s infinite linear 2s;animation:shake-animation 1s infinite linear 2s}.irma-web-clock-animation:before{content:\" \";position:absolute;display:block;width:5px;height:5px;top:-7.5px;left:13.5px;background-color:#d44454}.irma-web-clock-animation:after{content:\" \";position:absolute;display:block;width:5px;height:17.5px;top:2px;left:13.5px;background-color:#d44454;transform:rotate(0);transform-origin:bottom center;-ms-animation:clock-animation 2s 1 ease;-webkit-animation:clock-animation 2s 1 ease;animation:clock-animation 2s 1 ease}@-ms-keyframes clock-animation{0%{transform:rotate(-30deg)}40%{transform:rotate(-30deg)}50%{transform:rotate(-15deg)}90%{transform:rotate(-15deg)}100%{transform:rotate(0)}}@-webkit-keyframes clock-animation{0%{transform:rotate(-30deg)}40%{transform:rotate(-30deg)}50%{transform:rotate(-15deg)}90%{transform:rotate(-15deg)}100%{transform:rotate(0)}}@keyframes clock-animation{0%{transform:rotate(-30deg)}40%{transform:rotate(-30deg)}50%{transform:rotate(-15deg)}90%{transform:rotate(-15deg)}100%{transform:rotate(0)}}@-ms-keyframes shake-animation{10%,90%{transform:translate3d(-2px,1px,0)}20%,80%{transform:translate3d(2px,-1px,0)}30%,50%,70%{transform:translate3d(-2px,-1px,0)}40%,60%{transform:translate3d(2px,1px,0)}0%,100%{transform:translate3d(0,0,0)}}@-webkit-keyframes shake-animation{10%,90%{transform:translate3d(-2px,1px,0)}20%,80%{transform:translate3d(2px,-1px,0)}30%,50%,70%{transform:translate3d(-2px,-1px,0)}40%,60%{transform:translate3d(2px,1px,0)}0%,100%{transform:translate3d(0,0,0)}}@keyframes shake-animation{10%,90%{transform:translate3d(-2px,1px,0)}20%,80%{transform:translate3d(2px,-1px,0)}30%,50%,70%{transform:translate3d(-2px,-1px,0)}40%,60%{transform:translate3d(2px,1px,0)}0%,100%{transform:translate3d(0,0,0)}}",
        "",
      ]),
        (t.exports = e);
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var r = (function (t, e) {
                var r = t[1] || "",
                  n = t[3];
                if (!n) return r;
                if (e && "function" == typeof btoa) {
                  var o =
                      ((a = n),
                      (s = btoa(
                        unescape(encodeURIComponent(JSON.stringify(a)))
                      )),
                      (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        s
                      )),
                      "/*# ".concat(u, " */")),
                    i = n.sources.map(function (t) {
                      return "/*# sourceURL="
                        .concat(n.sourceRoot || "")
                        .concat(t, " */");
                    });
                  return [r].concat(i).concat([o]).join("\n");
                }
                var a, s, u;
                return [r].join("\n");
              })(e, t);
              return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r;
            }).join("");
          }),
          (e.i = function (t, r, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var o = {};
            if (n)
              for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (o[a] = !0);
              }
            for (var s = 0; s < t.length; s++) {
              var u = [].concat(t[s]);
              (n && o[u[0]]) ||
                (r &&
                  (u[2]
                    ? (u[2] = "".concat(r, " and ").concat(u[2]))
                    : (u[2] = r)),
                e.push(u));
            }
          }),
          e
        );
      };
    },
    function (t, e, r) {
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var o = r(130),
        i = r(132);
      t.exports = (function () {
        function t(e) {
          var r = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._modules = []),
            (this._options = e || {}),
            (this._userAgent = i()),
            (this._stateMachine = new o(this._options.debugging)),
            this._stateMachine.addStateChangeListener(function (t) {
              return r._stateChangeListener(t);
            }),
            this._addVisibilityListener();
        }
        var e, r, a;
        return (
          (e = t),
          (r = [
            {
              key: "use",
              value: function (t) {
                this._modules.push(
                  new t({
                    stateMachine: this._stateMachine,
                    options: this._options,
                  })
                );
              },
            },
            {
              key: "start",
              value: function () {
                for (
                  var t = this, e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                return new Promise(function (e, n) {
                  (t._resolve = e),
                    (t._reject = n),
                    t._modules
                      .filter(function (t) {
                        return t.start;
                      })
                      .forEach(function (t) {
                        return t.start.apply(t, r);
                      });
                });
              },
            },
            {
              key: "abort",
              value: function () {
                "Uninitialized" == this._stateMachine.currentState() ||
                this._stateMachine.isEndState()
                  ? this._options.debugging &&
                    console.log("🖥 Manual abort is not necessary")
                  : (this._options.debugging &&
                      console.log("🖥 Manually aborting session instance"),
                    this._stateMachine.transition("abort"));
              },
            },
            {
              key: "_stateChangeListener",
              value: function (t) {
                var e = this;
                this._modules
                  .filter(function (t) {
                    return t.stateChange;
                  })
                  .forEach(function (e) {
                    return e.stateChange(t);
                  });
                var r = t.newState,
                  n = t.payload,
                  o = t.isFinal;
                switch (((this._lastPayload = n), r)) {
                  case "Success":
                    this._close().then(function () {
                      e._resolve && e._resolve(n);
                    });
                    break;
                  case "BrowserNotSupported":
                  case "Aborted":
                    this._close().then(function () {
                      e._reject && e._reject(r);
                    });
                    break;
                  case "MediumContemplation":
                    this._userAgentIsMobile()
                      ? this._stateMachine.transition(
                          "showIrmaButton",
                          this._getSessionUrls(n)
                        )
                      : this._stateMachine.transition(
                          "showQRCode",
                          this._getSessionUrls(n)
                        );
                    break;
                  default:
                    o &&
                      this._close().then(function () {
                        e._reject && e._reject(r);
                      });
                }
              },
            },
            {
              key: "_close",
              value: function () {
                return (
                  this._removeVisibilityListener(),
                  this._modules
                    .filter(function (t) {
                      return t.close;
                    })
                    .reduce(function (t, e) {
                      return t.then(function () {
                        return e.close();
                      });
                    }, Promise.resolve())
                );
              },
            },
            {
              key: "_userAgentIsMobile",
              value: function () {
                return "Android" == this._userAgent || "iOS" == this._userAgent;
              },
            },
            {
              key: "_getSessionUrls",
              value: function (t) {
                var e,
                  r = JSON.stringify(t),
                  n = "https://irma.app/-/session#".concat(
                    encodeURIComponent(r)
                  );
                switch (this._userAgent) {
                  case "Android":
                    var o = "Intent;package=org.irmacard.cardemu;scheme=cardemu;l.timestamp=".concat(
                        Date.now()
                      ),
                      i = "S.browser_fallback_url=".concat(
                        encodeURIComponent(n)
                      );
                    e = "intent://qr/json/"
                      .concat(encodeURIComponent(r), "#")
                      .concat(o, ";")
                      .concat(i, ";end");
                    break;
                  default:
                    e = n;
                }
                return { qr: r, mobile: e };
              },
            },
            {
              key: "_addVisibilityListener",
              value: function () {
                var t = this,
                  e = function () {
                    "TimedOut" != t._stateMachine.currentState() ||
                      document.hidden ||
                      (t._options.debugging &&
                        console.log(
                          "🖥 Restarting because document became visible"
                        ),
                      t._stateMachine.transition("restart"));
                  },
                  r = function () {
                    "TimedOut" == t._stateMachine.currentState() &&
                      (t._options.debugging &&
                        console.log(
                          "🖥 Restarting because window regained focus"
                        ),
                      t._stateMachine.transition("restart"));
                  },
                  n = function () {
                    var e = i();
                    if (t._userAgent !== e)
                      switch (
                        (t._options.debugging &&
                          console.log(
                            "🖥 Changing view because user agent changed on resize"
                          ),
                        (t._userAgent = e),
                        t._stateMachine.currentState())
                      ) {
                        case "ShowingQRCode":
                          t._userAgentIsMobile() &&
                            t._stateMachine.transition(
                              "switchFlow",
                              t._lastPayload
                            );
                          break;
                        case "ShowingIrmaButton":
                        case "ShowingQRCodeInstead":
                          t._userAgentIsMobile() ||
                            t._stateMachine.transition(
                              "switchFlow",
                              t._lastPayload
                            );
                      }
                  };
                "undefined" != typeof document &&
                  document.addEventListener &&
                  document.addEventListener("visibilitychange", e),
                  "undefined" != typeof window &&
                    window.addEventListener &&
                    (window.addEventListener("focus", r),
                    window.addEventListener("resize", n)),
                  (this._removeVisibilityListener = function () {
                    "undefined" != typeof document &&
                      document.removeEventListener &&
                      document.removeEventListener("visibilitychange", e),
                      "undefined" != typeof window &&
                        window.removeEventListener &&
                        (window.removeEventListener("focus", r),
                        window.removeEventListener("resize", n));
                  });
              },
            },
          ]) && n(e.prototype, r),
          a && n(e, a),
          t
        );
      })();
    },
    function (t, e, r) {
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var o = r(131);
      t.exports = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._state = o.startState),
            (this._debugging = e),
            (this._listeners = []),
            (this._inEndState = !1);
        }
        var e, r, i;
        return (
          (e = t),
          (r = [
            {
              key: "currentState",
              value: function () {
                return this._state;
              },
            },
            {
              key: "isEndState",
              value: function () {
                return this._inEndState;
              },
            },
            {
              key: "isValidTransition",
              value: function (t) {
                return null != o[this._state][t];
              },
            },
            {
              key: "addStateChangeListener",
              value: function (t) {
                this._listeners.push(t);
              },
            },
            {
              key: "transition",
              value: function (t, e) {
                this._performTransition(t, !1, e);
              },
            },
            {
              key: "finalTransition",
              value: function (t, e) {
                this._performTransition(t, !0, e);
              },
            },
            {
              key: "_performTransition",
              value: function (t, e, r) {
                var n = this,
                  i = this._state;
                if (this._inEndState)
                  throw new Error(
                    "State machine is in an end state. No transitions are allowed from ".concat(
                      i,
                      "."
                    )
                  );
                (this._state = this._getNewState(t, e)),
                  this._debugging &&
                    console.debug(
                      "🎰 State change: '"
                        .concat(i, "' → '")
                        .concat(this._state, "' (because of '")
                        .concat(t, "')")
                    ),
                  (this._inEndState =
                    e || 0 == Object.keys(o[this._state]).length),
                  this._listeners.forEach(function (e) {
                    return e({
                      newState: n._state,
                      oldState: i,
                      transition: t,
                      isFinal: n._inEndState,
                      payload: r,
                    });
                  });
              },
            },
            {
              key: "_getNewState",
              value: function (t, e) {
                var r = o[this._state][t];
                if ((r || (r = o[this._state].fail), !r))
                  throw new Error(
                    "Invalid transition '"
                      .concat(t, "' from state '")
                      .concat(
                        this._state,
                        '\' and could not find a "fail" transition to fall back on.'
                      )
                  );
                if (e && !o.endStates.includes(r))
                  throw new Error(
                    "Transition '"
                      .concat(t, "' from state '")
                      .concat(
                        this._state,
                        "' is marked as final, but resulting state "
                      )
                      .concat(r, " cannot be an end state.")
                  );
                return r;
              },
            },
          ]) && n(e.prototype, r),
          i && n(e, i),
          t
        );
      })();
    },
    function (t, e) {
      t.exports = {
        startState: "Uninitialized",
        endStates: [
          "BrowserNotSupported",
          "Success",
          "Aborted",
          "Cancelled",
          "TimedOut",
          "Error",
        ],
        Uninitialized: {
          initialize: "Loading",
          browserError: "BrowserNotSupported",
          fail: "Error",
        },
        Loading: {
          loaded: "MediumContemplation",
          abort: "Aborted",
          fail: "Error",
        },
        MediumContemplation: {
          showQRCode: "ShowingQRCode",
          showIrmaButton: "ShowingIrmaButton",
          abort: "Aborted",
          fail: "Error",
        },
        ShowingQRCode: {
          appConnected: "ContinueOn2ndDevice",
          timeout: "TimedOut",
          switchFlow: "ShowingIrmaButton",
          abort: "Aborted",
          fail: "Error",
        },
        ContinueOn2ndDevice: {
          succeed: "Success",
          cancel: "Cancelled",
          restart: "Loading",
          timeout: "TimedOut",
          abort: "Aborted",
          fail: "Error",
        },
        ShowingIrmaButton: {
          chooseQR: "ShowingQRCodeInstead",
          switchFlow: "ShowingQRCode",
          appConnected: "ContinueInIrmaApp",
          abort: "Aborted",
          fail: "Error",
          succeed: "Success",
          cancel: "Cancelled",
          timeout: "TimedOut",
        },
        ShowingQRCodeInstead: {
          appConnected: "ContinueOn2ndDevice",
          switchFlow: "ShowingQRCode",
          restart: "Loading",
          timeout: "TimedOut",
          abort: "Aborted",
          fail: "Error",
        },
        ContinueInIrmaApp: {
          succeed: "Success",
          cancel: "Cancelled",
          restart: "Loading",
          timeout: "TimedOut",
          abort: "Aborted",
          fail: "Error",
        },
        Cancelled: { abort: "Aborted", restart: "Loading" },
        TimedOut: { abort: "Aborted", restart: "Loading" },
        Error: { abort: "Aborted", restart: "Loading" },
        BrowserNotSupported: {},
        Success: {},
        Aborted: {},
      };
    },
    function (t, e) {
      t.exports = function () {
        return "undefined" == typeof window
          ? "nodejs"
          : window.MSInputMethodContext && document.documentMode
          ? "Desktop"
          : /Android/i.test(window.navigator.userAgent)
          ? "Android"
          : (/iPad|iPhone|iPod/.test(navigator.userAgent) &&
              !window.MSStream) ||
            (/Macintosh/.test(navigator.userAgent) &&
              navigator.maxTouchPoints &&
              navigator.maxTouchPoints > 2)
          ? "iOS"
          : "Desktop";
      };
    },
    function (t, e, r) {
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var o = r(134);
      t.exports = (function () {
        function t(e, r, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._element = e),
            (this._translations = r.translations),
            (this._showHelper = r.showHelper),
            (this._showCloseButton = r.showCloseButton),
            (this._clickCallback = n),
            this._renderInitialState(),
            this._attachClickHandler();
        }
        var e, r, i;
        return (
          (e = t),
          (r = [
            {
              key: "renderState",
              value: function (t) {
                var e = this._stateToPartialMapping()[t.newState];
                if (!e)
                  throw new Error(
                    "I don't know how to render '".concat(t.newState, "'")
                  );
                this._renderPartial(e),
                  t.isFinal &&
                    this._element
                      .querySelectorAll(".irma-web-restart-button")
                      .forEach(function (t) {
                        return (t.style.display = "none");
                      });
              },
            },
            {
              key: "setQRCode",
              value: function (t) {
                o.toCanvas(
                  this._element.querySelector(".irma-web-qr-canvas"),
                  t,
                  { width: "230", margin: "1" }
                );
              },
            },
            {
              key: "setButtonLink",
              value: function (t) {
                this._element
                  .querySelector(".irma-web-button-link")
                  .setAttribute("href", t);
              },
            },
            {
              key: "_renderInitialState",
              value: function () {
                this._element.classList.add("irma-web-form"),
                  (this._element.innerHTML = this._irmaWebForm(
                    this._stateUninitialized()
                  ));
              },
            },
            {
              key: "_attachClickHandler",
              value: function () {
                var t = this;
                Element.prototype.matches ||
                  (Element.prototype.matches =
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector),
                  this._element.addEventListener("click", function (e) {
                    e.target.matches("[data-irma-glue-transition]") &&
                      t._clickCallback(
                        e.target.getAttribute("data-irma-glue-transition")
                      );
                  });
              },
            },
            {
              key: "_renderPartial",
              value: function (t) {
                this._element.querySelector(
                  ".irma-web-content .irma-web-centered"
                ).innerHTML = t.call(this);
              },
            },
            {
              key: "_stateToPartialMapping",
              value: function () {
                return {
                  Uninitialized: this._stateUninitialized,
                  Loading: this._stateLoading,
                  MediumContemplation: this._stateLoading,
                  ShowingQRCode: this._stateShowingQRCode,
                  ContinueOn2ndDevice: this._stateContinueInIrmaApp,
                  ShowingIrmaButton: this._stateShowingIrmaButton,
                  ShowingQRCodeInstead: this._stateShowingQRCodeInstead,
                  ContinueInIrmaApp: this._stateContinueInIrmaApp,
                  Cancelled: this._stateCancelled,
                  TimedOut: this._stateTimedOut,
                  Error: this._stateError,
                  BrowserNotSupported: this._stateBrowserNotSupported,
                  Success: this._stateSuccess,
                  Aborted: function () {
                    return "";
                  },
                };
              },
            },
            {
              key: "_irmaWebForm",
              value: function (t) {
                return '\n      <header className="irma-web-header '
                  .concat(
                    this._showHelper ? "irma-web-show-helper" : "",
                    '">\n        <p>'
                  )
                  .concat(
                    this._translations.header,
                    '</p>\n        <section className="irma-web-helper">\n          <p>'
                  )
                  .concat(
                    this._translations.helper,
                    "</p>\n        </section>\n        "
                  )
                  .concat(
                    this._showCloseButton
                      ? '\n          <button className="irma-web-close"></button>\n        '
                      : "",
                    '\n      </header>\n      <section className="irma-web-content">\n        <section className="irma-web-centered">\n          '
                  )
                  .concat(t, "\n        </section>\n      </section>\n    ");
              },
            },
            {
              key: "_stateUninitialized",
              value: function () {
                return '\n      \x3c!-- State: Uninitialized --\x3e\n      <div className="irma-web-loading-animation">\n        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n      </div>\n      <p>'.concat(
                  this._translations.loading,
                  "</p>\n    "
                );
              },
            },
            {
              key: "_stateLoading",
              value: function () {
                return '\n      \x3c!-- State: Loading --\x3e\n      <div className="irma-web-loading-animation">\n        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n      </div>\n      <p>'.concat(
                  this._translations.loading,
                  "</p>\n    "
                );
              },
            },
            {
              key: "_stateShowingQRCode",
              value: function () {
                return '\n      \x3c!-- State: ShowingQRCode --\x3e\n      <canvas className="irma-web-qr-canvas"></canvas>\n    ';
              },
            },
            {
              key: "_stateShowingIrmaButton",
              value: function () {
                return '\n      \x3c!-- State: ShowingButton --\x3e\n      <a className="irma-web-button-link">\n        <button className="irma-web-button">'
                  .concat(
                    this._translations.button,
                    '</button>\n      </a>\n      <p><a data-irma-glue-transition="chooseQR">'
                  )
                  .concat(this._translations.qrCode, "</a></p>\n    ");
              },
            },
            {
              key: "_stateShowingQRCodeInstead",
              value: function () {
                return '\n      \x3c!-- State: ShowingQRCode --\x3e\n      <canvas className="irma-web-qr-canvas"></canvas>\n      <p className="irma-web-restart-button"><a data-irma-glue-transition="restart">'.concat(
                  this._translations.back,
                  "</a></p>\n    "
                );
              },
            },
            {
              key: "_stateContinueInIrmaApp",
              value: function () {
                return '\n      \x3c!-- State: WaitingForUser --\x3e\n      <div className="irma-web-waiting-for-user-animation"></div>\n      <p>'
                  .concat(
                    this._translations.app,
                    '</p>\n      <p className="irma-web-restart-button"><a data-irma-glue-transition="restart">'
                  )
                  .concat(this._translations.retry, "</a></p>\n    ");
              },
            },
            {
              key: "_stateCancelled",
              value: function () {
                return '\n      \x3c!-- State: Cancelled --\x3e\n      <div className="irma-web-forbidden-animation"></div>\n      <p>'
                  .concat(
                    this._translations.cancelled,
                    '</p>\n      <p className="irma-web-restart-button"><a data-irma-glue-transition="restart">'
                  )
                  .concat(this._translations.retry, "</a></p>\n    ");
              },
            },
            {
              key: "_stateTimedOut",
              value: function () {
                return '\n      \x3c!-- State: TimedOut --\x3e\n      <div className="irma-web-clock-animation"></div>\n      <p>'
                  .concat(
                    this._translations.timeout,
                    '</p>\n      <p className="irma-web-restart-button"><a data-irma-glue-transition="restart">'
                  )
                  .concat(this._translations.retry, "</a></p>\n    ");
              },
            },
            {
              key: "_stateError",
              value: function () {
                return '\n      \x3c!-- State: Error --\x3e\n      <div className="irma-web-forbidden-animation"></div>\n      <p>'
                  .concat(
                    this._translations.error,
                    '</p>\n      <p className="irma-web-restart-button"><a data-irma-glue-transition="restart">'
                  )
                  .concat(this._translations.retry, "</a></p>\n    ");
              },
            },
            {
              key: "_stateBrowserNotSupported",
              value: function () {
                return '\n      \x3c!-- State: BrowserNotSupported --\x3e\n      <div className="irma-web-forbidden-animation"></div>\n      <p>'.concat(
                  this._translations.browser,
                  "</p>\n    "
                );
              },
            },
            {
              key: "_stateSuccess",
              value: function () {
                return '\n      \x3c!-- State: Success --\x3e\n      <div className="irma-web-checkmark-animation"></div>\n      <p>'.concat(
                  this._translations.success,
                  "</p>\n    "
                );
              },
            },
          ]) && n(e.prototype, r),
          i && n(e, i),
          t
        );
      })();
    },
    function (t, e, r) {
      var n = r(135),
        o = r(136),
        i = r(156),
        a = r(157);
      function s(t, e, r, i, a) {
        var s = [].slice.call(arguments, 1),
          u = s.length,
          c = "function" == typeof s[u - 1];
        if (!c && !n()) throw new Error("Callback required as last argument");
        if (!c) {
          if (u < 1) throw new Error("Too few arguments provided");
          return (
            1 === u
              ? ((r = e), (e = i = void 0))
              : 2 !== u || e.getContext || ((i = r), (r = e), (e = void 0)),
            new Promise(function (n, a) {
              try {
                var s = o.create(r, i);
                n(t(s, e, i));
              } catch (t) {
                a(t);
              }
            })
          );
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u
          ? ((a = r), (r = e), (e = i = void 0))
          : 3 === u &&
            (e.getContext && void 0 === a
              ? ((a = i), (i = void 0))
              : ((a = i), (i = r), (r = e), (e = void 0)));
        try {
          var f = o.create(r, i);
          a(null, t(f, e, i));
        } catch (t) {
          a(t);
        }
      }
      (e.create = o.create),
        (e.toCanvas = s.bind(null, i.render)),
        (e.toDataURL = s.bind(null, i.renderToDataURL)),
        (e.toString = s.bind(null, function (t, e, r) {
          return a.render(t, r);
        }));
    },
    function (t, e) {
      t.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    function (t, e, r) {
      var n = r(15),
        o = r(9),
        i = r(39),
        a = r(137),
        s = r(138),
        u = r(139),
        c = r(140),
        f = r(141),
        l = r(66),
        h = r(142),
        p = r(148),
        d = r(149),
        m = r(11),
        g = r(150),
        y = r(38);
      function b(t, e, r) {
        var n,
          o,
          i = t.size,
          a = d.getEncodedBits(e, r);
        for (n = 0; n < 15; n++)
          (o = 1 == ((a >> n) & 1)),
            n < 6
              ? t.set(n, 8, o, !0)
              : n < 8
              ? t.set(n + 1, 8, o, !0)
              : t.set(i - 15 + n, 8, o, !0),
            n < 8
              ? t.set(8, i - n - 1, o, !0)
              : n < 9
              ? t.set(8, 15 - n - 1 + 1, o, !0)
              : t.set(8, 15 - n - 1, o, !0);
        t.set(i - 8, 8, 1, !0);
      }
      function v(t, e, r) {
        var i = new a();
        r.forEach(function (e) {
          i.put(e.mode.bit, 4),
            i.put(e.getLength(), m.getCharCountIndicator(e.mode, t)),
            e.write(i);
        });
        var s =
          8 * (o.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, e));
        for (
          i.getLengthInBits() + 4 <= s && i.put(0, 4);
          i.getLengthInBits() % 8 != 0;

        )
          i.putBit(0);
        for (var u = (s - i.getLengthInBits()) / 8, c = 0; c < u; c++)
          i.put(c % 2 ? 17 : 236, 8);
        return (function (t, e, r) {
          for (
            var i = o.getSymbolTotalCodewords(e),
              a = l.getTotalCodewordsCount(e, r),
              s = i - a,
              u = l.getBlocksCount(e, r),
              c = u - (i % u),
              f = Math.floor(i / u),
              p = Math.floor(s / u),
              d = p + 1,
              m = f - p,
              g = new h(m),
              y = 0,
              b = new Array(u),
              v = new Array(u),
              w = 0,
              _ = n.from(t.buffer),
              x = 0;
            x < u;
            x++
          ) {
            var S = x < c ? p : d;
            (b[x] = _.slice(y, y + S)),
              (v[x] = g.encode(b[x])),
              (y += S),
              (w = Math.max(w, S));
          }
          var E,
            k,
            T = n.alloc(i),
            A = 0;
          for (E = 0; E < w; E++)
            for (k = 0; k < u; k++) E < b[k].length && (T[A++] = b[k][E]);
          for (E = 0; E < m; E++) for (k = 0; k < u; k++) T[A++] = v[k][E];
          return T;
        })(i, t, e);
      }
      function w(t, e, r, n) {
        var i;
        if (y(t)) i = g.fromArray(t);
        else {
          if ("string" != typeof t) throw new Error("Invalid data");
          var a = e;
          if (!a) {
            var l = g.rawSplit(t);
            a = p.getBestVersionForData(l, r);
          }
          i = g.fromString(t, a || 40);
        }
        var h = p.getBestVersionForData(i, r);
        if (!h)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code"
          );
        if (e) {
          if (e < h)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                h +
                ".\n"
            );
        } else e = h;
        var d = v(e, r, i),
          m = o.getSymbolSize(e),
          w = new s(m);
        return (
          (function (t, e) {
            for (
              var r = t.size, n = c.getPositions(e), o = 0;
              o < n.length;
              o++
            )
              for (var i = n[o][0], a = n[o][1], s = -1; s <= 7; s++)
                if (!(i + s <= -1 || r <= i + s))
                  for (var u = -1; u <= 7; u++)
                    a + u <= -1 ||
                      r <= a + u ||
                      ((s >= 0 && s <= 6 && (0 === u || 6 === u)) ||
                      (u >= 0 && u <= 6 && (0 === s || 6 === s)) ||
                      (s >= 2 && s <= 4 && u >= 2 && u <= 4)
                        ? t.set(i + s, a + u, !0, !0)
                        : t.set(i + s, a + u, !1, !0));
          })(w, e),
          (function (t) {
            for (var e = t.size, r = 8; r < e - 8; r++) {
              var n = r % 2 == 0;
              t.set(r, 6, n, !0), t.set(6, r, n, !0);
            }
          })(w),
          (function (t, e) {
            for (var r = u.getPositions(e), n = 0; n < r.length; n++)
              for (var o = r[n][0], i = r[n][1], a = -2; a <= 2; a++)
                for (var s = -2; s <= 2; s++)
                  -2 === a ||
                  2 === a ||
                  -2 === s ||
                  2 === s ||
                  (0 === a && 0 === s)
                    ? t.set(o + a, i + s, !0, !0)
                    : t.set(o + a, i + s, !1, !0);
          })(w, e),
          b(w, r, 0),
          e >= 7 &&
            (function (t, e) {
              for (
                var r, n, o, i = t.size, a = p.getEncodedBits(e), s = 0;
                s < 18;
                s++
              )
                (r = Math.floor(s / 3)),
                  (n = (s % 3) + i - 8 - 3),
                  (o = 1 == ((a >> s) & 1)),
                  t.set(r, n, o, !0),
                  t.set(n, r, o, !0);
            })(w, e),
          (function (t, e) {
            for (
              var r = t.size, n = -1, o = r - 1, i = 7, a = 0, s = r - 1;
              s > 0;
              s -= 2
            )
              for (6 === s && s--; ; ) {
                for (var u = 0; u < 2; u++)
                  if (!t.isReserved(o, s - u)) {
                    var c = !1;
                    a < e.length && (c = 1 == ((e[a] >>> i) & 1)),
                      t.set(o, s - u, c),
                      -1 === --i && (a++, (i = 7));
                  }
                if ((o += n) < 0 || r <= o) {
                  (o -= n), (n = -n);
                  break;
                }
              }
          })(w, d),
          isNaN(n) && (n = f.getBestMask(w, b.bind(null, w, r))),
          f.applyMask(n, w),
          b(w, r, n),
          {
            modules: w,
            version: e,
            errorCorrectionLevel: r,
            maskPattern: n,
            segments: i,
          }
        );
      }
      e.create = function (t, e) {
        if (void 0 === t || "" === t) throw new Error("No input text");
        var r,
          n,
          a = i.M;
        return (
          void 0 !== e &&
            ((a = i.from(e.errorCorrectionLevel, i.M)),
            (r = p.from(e.version)),
            (n = f.from(e.maskPattern)),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
          w(t, r, a, n)
        );
      };
    },
    function (t, e) {
      function r() {
        (this.buffer = []), (this.length = 0);
      }
      (r.prototype = {
        get: function (t) {
          var e = Math.floor(t / 8);
          return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
        },
        put: function (t, e) {
          for (var r = 0; r < e; r++)
            this.putBit(1 == ((t >>> (e - r - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          var e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = r);
    },
    function (t, e, r) {
      var n = r(15);
      function o(t) {
        if (!t || t < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = n.alloc(t * t)),
          (this.reservedBit = n.alloc(t * t));
      }
      (o.prototype.set = function (t, e, r, n) {
        var o = t * this.size + e;
        (this.data[o] = r), n && (this.reservedBit[o] = !0);
      }),
        (o.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (o.prototype.xor = function (t, e, r) {
          this.data[t * this.size + e] ^= r;
        }),
        (o.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = o);
    },
    function (t, e, r) {
      var n = r(9).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        for (
          var e = Math.floor(t / 7) + 2,
            r = n(t),
            o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
            i = [r - 7],
            a = 1;
          a < e - 1;
          a++
        )
          i[a] = i[a - 1] - o;
        return i.push(6), i.reverse();
      }),
        (e.getPositions = function (t) {
          for (
            var r = [], n = e.getRowColCoords(t), o = n.length, i = 0;
            i < o;
            i++
          )
            for (var a = 0; a < o; a++)
              (0 === i && 0 === a) ||
                (0 === i && a === o - 1) ||
                (i === o - 1 && 0 === a) ||
                r.push([n[i], n[a]]);
          return r;
        });
    },
    function (t, e, r) {
      var n = r(9).getSymbolSize;
      e.getPositions = function (t) {
        var e = n(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      var r = 3,
        n = 3,
        o = 40,
        i = 10;
      function a(t, r, n) {
        switch (t) {
          case e.Patterns.PATTERN000:
            return (r + n) % 2 == 0;
          case e.Patterns.PATTERN001:
            return r % 2 == 0;
          case e.Patterns.PATTERN010:
            return n % 3 == 0;
          case e.Patterns.PATTERN011:
            return (r + n) % 3 == 0;
          case e.Patterns.PATTERN100:
            return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
          case e.Patterns.PATTERN101:
            return ((r * n) % 2) + ((r * n) % 3) == 0;
          case e.Patterns.PATTERN110:
            return (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
          case e.Patterns.PATTERN111:
            return (((r * n) % 3) + ((r + n) % 2)) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + t);
        }
      }
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          for (
            var e = t.size, n = 0, o = 0, i = 0, a = null, s = null, u = 0;
            u < e;
            u++
          ) {
            (o = i = 0), (a = s = null);
            for (var c = 0; c < e; c++) {
              var f = t.get(u, c);
              f === a ? o++ : (o >= 5 && (n += r + (o - 5)), (a = f), (o = 1)),
                (f = t.get(c, u)) === s
                  ? i++
                  : (i >= 5 && (n += r + (i - 5)), (s = f), (i = 1));
            }
            o >= 5 && (n += r + (o - 5)), i >= 5 && (n += r + (i - 5));
          }
          return n;
        }),
        (e.getPenaltyN2 = function (t) {
          for (var e = t.size, r = 0, o = 0; o < e - 1; o++)
            for (var i = 0; i < e - 1; i++) {
              var a =
                t.get(o, i) +
                t.get(o, i + 1) +
                t.get(o + 1, i) +
                t.get(o + 1, i + 1);
              (4 !== a && 0 !== a) || r++;
            }
          return r * n;
        }),
        (e.getPenaltyN3 = function (t) {
          for (var e = t.size, r = 0, n = 0, i = 0, a = 0; a < e; a++) {
            n = i = 0;
            for (var s = 0; s < e; s++)
              (n = ((n << 1) & 2047) | t.get(a, s)),
                s >= 10 && (1488 === n || 93 === n) && r++,
                (i = ((i << 1) & 2047) | t.get(s, a)),
                s >= 10 && (1488 === i || 93 === i) && r++;
          }
          return r * o;
        }),
        (e.getPenaltyN4 = function (t) {
          for (var e = 0, r = t.data.length, n = 0; n < r; n++) e += t.data[n];
          return Math.abs(Math.ceil((100 * e) / r / 5) - 10) * i;
        }),
        (e.applyMask = function (t, e) {
          for (var r = e.size, n = 0; n < r; n++)
            for (var o = 0; o < r; o++)
              e.isReserved(o, n) || e.xor(o, n, a(t, o, n));
        }),
        (e.getBestMask = function (t, r) {
          for (
            var n = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, a = 0;
            a < n;
            a++
          ) {
            r(a), e.applyMask(a, t);
            var s =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(a, t), s < i && ((i = s), (o = a));
          }
          return o;
        });
    },
    function (t, e, r) {
      var n = r(15),
        o = r(143),
        i = r(10).Buffer;
      function a(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (a.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
      }),
        (a.prototype.encode = function (t) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var e = n.alloc(this.degree),
            r = i.concat([t, e], t.length + this.degree),
            a = o.mod(r, this.genPoly),
            s = this.degree - a.length;
          if (s > 0) {
            var u = n.alloc(this.degree);
            return a.copy(u, s), u;
          }
          return a;
        }),
        (t.exports = a);
    },
    function (t, e, r) {
      var n = r(15),
        o = r(144);
      (e.mul = function (t, e) {
        for (var r = n.alloc(t.length + e.length - 1), i = 0; i < t.length; i++)
          for (var a = 0; a < e.length; a++) r[i + a] ^= o.mul(t[i], e[a]);
        return r;
      }),
        (e.mod = function (t, e) {
          for (var r = n.from(t); r.length - e.length >= 0; ) {
            for (var i = r[0], a = 0; a < e.length; a++) r[a] ^= o.mul(e[a], i);
            for (var s = 0; s < r.length && 0 === r[s]; ) s++;
            r = r.slice(s);
          }
          return r;
        }),
        (e.generateECPolynomial = function (t) {
          for (var r = n.from([1]), i = 0; i < t; i++)
            r = e.mul(r, [1, o.exp(i)]);
          return r;
        });
    },
    function (t, e, r) {
      var n = r(15),
        o = n.alloc(512),
        i = n.alloc(256);
      !(function () {
        for (var t = 1, e = 0; e < 255; e++)
          (o[e] = t), (i[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (e = 255; e < 512; e++) o[e] = o[e - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw new Error("log(" + t + ")");
          return i[t];
        }),
        (e.exp = function (t) {
          return o[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : o[i[t] + i[e]];
        });
    },
    function (t, e, r) {
      "use strict";
      (e.byteLength = function (t) {
        var e = c(t),
          r = e[0],
          n = e[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            n = c(t),
            a = n[0],
            s = n[1],
            u = new i(
              (function (t, e, r) {
                return (3 * (e + r)) / 4 - r;
              })(0, a, s)
            ),
            f = 0,
            l = s > 0 ? a - 4 : a;
          for (r = 0; r < l; r += 4)
            (e =
              (o[t.charCodeAt(r)] << 18) |
              (o[t.charCodeAt(r + 1)] << 12) |
              (o[t.charCodeAt(r + 2)] << 6) |
              o[t.charCodeAt(r + 3)]),
              (u[f++] = (e >> 16) & 255),
              (u[f++] = (e >> 8) & 255),
              (u[f++] = 255 & e);
          2 === s &&
            ((e = (o[t.charCodeAt(r)] << 2) | (o[t.charCodeAt(r + 1)] >> 4)),
            (u[f++] = 255 & e));
          1 === s &&
            ((e =
              (o[t.charCodeAt(r)] << 10) |
              (o[t.charCodeAt(r + 1)] << 4) |
              (o[t.charCodeAt(r + 2)] >> 2)),
            (u[f++] = (e >> 8) & 255),
            (u[f++] = 255 & e));
          return u;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, r = t.length, o = r % 3, i = [], a = 0, s = r - o;
            a < s;
            a += 16383
          )
            i.push(f(t, a, a + 16383 > s ? s : a + 16383));
          1 === o
            ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
            : 2 === o &&
              ((e = (t[r - 2] << 8) + t[r - 1]),
              i.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
          return i.join("");
        });
      for (
        var n = [],
          o = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          u = a.length;
        s < u;
        ++s
      )
        (n[s] = a[s]), (o[a.charCodeAt(s)] = s);
      function c(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
      }
      function f(t, e, r) {
        for (var o, i, a = [], s = e; s < r; s += 3)
          (o =
            ((t[s] << 16) & 16711680) +
            ((t[s + 1] << 8) & 65280) +
            (255 & t[s + 2])),
            a.push(
              n[((i = o) >> 18) & 63] +
                n[(i >> 12) & 63] +
                n[(i >> 6) & 63] +
                n[63 & i]
            );
        return a.join("");
      }
      (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
    },
    function (t, e) {
      (e.read = function (t, e, r, n, o) {
        var i,
          a,
          s = 8 * o - n - 1,
          u = (1 << s) - 1,
          c = u >> 1,
          f = -7,
          l = r ? o - 1 : 0,
          h = r ? -1 : 1,
          p = t[e + l];
        for (
          l += h, i = p & ((1 << -f) - 1), p >>= -f, f += s;
          f > 0;
          i = 256 * i + t[e + l], l += h, f -= 8
        );
        for (
          a = i & ((1 << -f) - 1), i >>= -f, f += n;
          f > 0;
          a = 256 * a + t[e + l], l += h, f -= 8
        );
        if (0 === i) i = 1 - c;
        else {
          if (i === u) return a ? NaN : (1 / 0) * (p ? -1 : 1);
          (a += Math.pow(2, n)), (i -= c);
        }
        return (p ? -1 : 1) * a * Math.pow(2, i - n);
      }),
        (e.write = function (t, e, r, n, o, i) {
          var a,
            s,
            u,
            c = 8 * i - o - 1,
            f = (1 << c) - 1,
            l = f >> 1,
            h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : i - 1,
            d = n ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((s = isNaN(e) ? 1 : 0), (a = f))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  (e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 &&
                    (a++, (u /= 2)),
                  a + l >= f
                    ? ((s = 0), (a = f))
                    : a + l >= 1
                    ? ((s = (e * u - 1) * Math.pow(2, o)), (a += l))
                    : ((s = e * Math.pow(2, l - 1) * Math.pow(2, o)), (a = 0)));
            o >= 8;
            t[r + p] = 255 & s, p += d, s /= 256, o -= 8
          );
          for (
            a = (a << o) | s, c += o;
            c > 0;
            t[r + p] = 255 & a, p += d, a /= 256, c -= 8
          );
          t[r + p - d] |= 128 * m;
        });
    },
    function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == r.call(t);
        };
    },
    function (t, e, r) {
      var n = r(9),
        o = r(66),
        i = r(39),
        a = r(11),
        s = r(67),
        u = r(38),
        c = n.getBCHDigit(7973);
      function f(t, e) {
        return a.getCharCountIndicator(t, e) + 4;
      }
      function l(t, e) {
        var r = 0;
        return (
          t.forEach(function (t) {
            var n = f(t.mode, e);
            r += n + t.getBitsLength();
          }),
          r
        );
      }
      (e.from = function (t, e) {
        return s.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, r) {
          if (!s.isValid(t)) throw new Error("Invalid QR Code version");
          void 0 === r && (r = a.BYTE);
          var i =
            8 * (n.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e));
          if (r === a.MIXED) return i;
          var u = i - f(r, t);
          switch (r) {
            case a.NUMERIC:
              return Math.floor((u / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((u / 11) * 2);
            case a.KANJI:
              return Math.floor(u / 13);
            case a.BYTE:
            default:
              return Math.floor(u / 8);
          }
        }),
        (e.getBestVersionForData = function (t, r) {
          var n,
            o = i.from(r, i.M);
          if (u(t)) {
            if (t.length > 1)
              return (function (t, r) {
                for (var n = 1; n <= 40; n++) {
                  if (l(t, n) <= e.getCapacity(n, r, a.MIXED)) return n;
                }
              })(t, o);
            if (0 === t.length) return 1;
            n = t[0];
          } else n = t;
          return (function (t, r, n) {
            for (var o = 1; o <= 40; o++)
              if (r <= e.getCapacity(o, n, t)) return o;
          })(n.mode, n.getLength(), o);
        }),
        (e.getEncodedBits = function (t) {
          if (!s.isValid(t) || t < 7)
            throw new Error("Invalid QR Code version");
          for (var e = t << 12; n.getBCHDigit(e) - c >= 0; )
            e ^= 7973 << (n.getBCHDigit(e) - c);
          return (t << 12) | e;
        });
    },
    function (t, e, r) {
      var n = r(9),
        o = n.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        for (var r = (t.bit << 3) | e, i = r << 10; n.getBCHDigit(i) - o >= 0; )
          i ^= 1335 << (n.getBCHDigit(i) - o);
        return 21522 ^ ((r << 10) | i);
      };
    },
    function (t, e, r) {
      var n = r(11),
        o = r(151),
        i = r(152),
        a = r(153),
        s = r(154),
        u = r(68),
        c = r(9),
        f = r(155);
      function l(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function h(t, e, r) {
        for (var n, o = []; null !== (n = t.exec(r)); )
          o.push({ data: n[0], index: n.index, mode: e, length: n[0].length });
        return o;
      }
      function p(t) {
        var e,
          r,
          o = h(u.NUMERIC, n.NUMERIC, t),
          i = h(u.ALPHANUMERIC, n.ALPHANUMERIC, t);
        return (
          c.isKanjiModeEnabled()
            ? ((e = h(u.BYTE, n.BYTE, t)), (r = h(u.KANJI, n.KANJI, t)))
            : ((e = h(u.BYTE_KANJI, n.BYTE, t)), (r = [])),
          o
            .concat(i, e, r)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function d(t, e) {
        switch (e) {
          case n.NUMERIC:
            return o.getBitsLength(t);
          case n.ALPHANUMERIC:
            return i.getBitsLength(t);
          case n.KANJI:
            return s.getBitsLength(t);
          case n.BYTE:
            return a.getBitsLength(t);
        }
      }
      function m(t, e) {
        var r,
          u = n.getBestModeForData(t);
        if ((r = n.from(e, u)) !== n.BYTE && r.bit < u.bit)
          throw new Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              n.toString(r) +
              ".\n Suggested mode is: " +
              n.toString(u)
          );
        switch ((r !== n.KANJI || c.isKanjiModeEnabled() || (r = n.BYTE), r)) {
          case n.NUMERIC:
            return new o(t);
          case n.ALPHANUMERIC:
            return new i(t);
          case n.KANJI:
            return new s(t);
          case n.BYTE:
            return new a(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" == typeof e
              ? t.push(m(e, null))
              : e.data && t.push(m(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, r) {
          for (
            var o = (function (t, e) {
                for (
                  var r = {}, o = { start: {} }, i = ["start"], a = 0;
                  a < t.length;
                  a++
                ) {
                  for (var s = t[a], u = [], c = 0; c < s.length; c++) {
                    var f = s[c],
                      l = "" + a + c;
                    u.push(l), (r[l] = { node: f, lastCount: 0 }), (o[l] = {});
                    for (var h = 0; h < i.length; h++) {
                      var p = i[h];
                      r[p] && r[p].node.mode === f.mode
                        ? ((o[p][l] =
                            d(r[p].lastCount + f.length, f.mode) -
                            d(r[p].lastCount, f.mode)),
                          (r[p].lastCount += f.length))
                        : (r[p] && (r[p].lastCount = f.length),
                          (o[p][l] =
                            d(f.length, f.mode) +
                            4 +
                            n.getCharCountIndicator(f.mode, e)));
                    }
                  }
                  i = u;
                }
                for (h = 0; h < i.length; h++) o[i[h]].end = 0;
                return { map: o, table: r };
              })(
                (function (t) {
                  for (var e = [], r = 0; r < t.length; r++) {
                    var o = t[r];
                    switch (o.mode) {
                      case n.NUMERIC:
                        e.push([
                          o,
                          {
                            data: o.data,
                            mode: n.ALPHANUMERIC,
                            length: o.length,
                          },
                          { data: o.data, mode: n.BYTE, length: o.length },
                        ]);
                        break;
                      case n.ALPHANUMERIC:
                        e.push([
                          o,
                          { data: o.data, mode: n.BYTE, length: o.length },
                        ]);
                        break;
                      case n.KANJI:
                        e.push([
                          o,
                          { data: o.data, mode: n.BYTE, length: l(o.data) },
                        ]);
                        break;
                      case n.BYTE:
                        e.push([
                          { data: o.data, mode: n.BYTE, length: l(o.data) },
                        ]);
                    }
                  }
                  return e;
                })(p(t, c.isKanjiModeEnabled())),
                r
              ),
              i = f.find_path(o.map, "start", "end"),
              a = [],
              s = 1;
            s < i.length - 1;
            s++
          )
            a.push(o.table[i[s]].node);
          return e.fromArray(
            (function (t) {
              return t.reduce(function (t, e) {
                var r = t.length - 1 >= 0 ? t[t.length - 1] : null;
                return r && r.mode === e.mode
                  ? ((t[t.length - 1].data += e.data), t)
                  : (t.push(e), t);
              }, []);
            })(a)
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(p(t, c.isKanjiModeEnabled()));
        });
    },
    function (t, e, r) {
      var n = r(11);
      function o(t) {
        (this.mode = n.NUMERIC), (this.data = t.toString());
      }
      (o.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          var e, r, n;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (r = this.data.substr(e, 3)), (n = parseInt(r, 10)), t.put(n, 10);
          var o = this.data.length - e;
          o > 0 &&
            ((r = this.data.substr(e)),
            (n = parseInt(r, 10)),
            t.put(n, 3 * o + 1));
        }),
        (t.exports = o);
    },
    function (t, e, r) {
      var n = r(11),
        o = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function i(t) {
        (this.mode = n.ALPHANUMERIC), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            var r = 45 * o.indexOf(this.data[e]);
            (r += o.indexOf(this.data[e + 1])), t.put(r, 11);
          }
          this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
        }),
        (t.exports = i);
    },
    function (t, e, r) {
      var n = r(15),
        o = r(11);
      function i(t) {
        (this.mode = o.BYTE), (this.data = n.from(t));
      }
      (i.getBitsLength = function (t) {
        return 8 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          for (var e = 0, r = this.data.length; e < r; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = i);
    },
    function (t, e, r) {
      var n = r(11),
        o = r(9);
      function i(t) {
        (this.mode = n.KANJI), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 13 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e < this.data.length; e++) {
            var r = o.toSJIS(this.data[e]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else {
              if (!(r >= 57408 && r <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[e] +
                    "\nMake sure your charset is UTF-8"
                );
              r -= 49472;
            }
            (r = 192 * ((r >>> 8) & 255) + (255 & r)), t.put(r, 13);
          }
        }),
        (t.exports = i);
    },
    function (t, e, r) {
      "use strict";
      var n = {
        single_source_shortest_paths: function (t, e, r) {
          var o = {},
            i = {};
          i[e] = 0;
          var a,
            s,
            u,
            c,
            f,
            l,
            h,
            p = n.PriorityQueue.make();
          for (p.push(e, 0); !p.empty(); )
            for (u in ((s = (a = p.pop()).value),
            (c = a.cost),
            (f = t[s] || {})))
              f.hasOwnProperty(u) &&
                ((l = c + f[u]),
                (h = i[u]),
                (void 0 === i[u] || h > l) &&
                  ((i[u] = l), p.push(u, l), (o[u] = s)));
          if (void 0 !== r && void 0 === i[r]) {
            var d = ["Could not find a path from ", e, " to ", r, "."].join("");
            throw new Error(d);
          }
          return o;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var r = [], n = e; n; ) r.push(n), t[n], (n = t[n]);
          return r.reverse(), r;
        },
        find_path: function (t, e, r) {
          var o = n.single_source_shortest_paths(t, e, r);
          return n.extract_shortest_path_from_predecessor_list(o, r);
        },
        PriorityQueue: {
          make: function (t) {
            var e,
              r = n.PriorityQueue,
              o = {};
            for (e in ((t = t || {}), r)) r.hasOwnProperty(e) && (o[e] = r[e]);
            return (o.queue = []), (o.sorter = t.sorter || r.default_sorter), o;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            var r = { value: t, cost: e };
            this.queue.push(r), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = n;
    },
    function (t, e, r) {
      var n = r(69);
      (e.render = function (t, e, r) {
        var o = r,
          i = e;
        void 0 !== o || (e && e.getContext) || ((o = e), (e = void 0)),
          e ||
            (i = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (o = n.getOptions(o));
        var a = n.getImageWidth(t.modules.size, o),
          s = i.getContext("2d"),
          u = s.createImageData(a, a);
        return (
          n.qrToImageData(u.data, t, o),
          (function (t, e, r) {
            t.clearRect(0, 0, e.width, e.height),
              e.style || (e.style = {}),
              (e.height = r),
              (e.width = r),
              (e.style.height = r + "px"),
              (e.style.width = r + "px");
          })(s, i, a),
          s.putImageData(u, 0, 0),
          i
        );
      }),
        (e.renderToDataURL = function (t, r, n) {
          var o = n;
          void 0 !== o || (r && r.getContext) || ((o = r), (r = void 0)),
            o || (o = {});
          var i = e.render(t, r, o),
            a = o.type || "image/png",
            s = o.rendererOpts || {};
          return i.toDataURL(a, s.quality);
        });
    },
    function (t, e, r) {
      var n = r(69);
      function o(t, e) {
        var r = t.a / 255,
          n = e + '="' + t.hex + '"';
        return r < 1
          ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : n;
      }
      function i(t, e, r) {
        var n = t + e;
        return void 0 !== r && (n += " " + r), n;
      }
      e.render = function (t, e, r) {
        var a = n.getOptions(e),
          s = t.modules.size,
          u = t.modules.data,
          c = s + 2 * a.margin,
          f = a.color.light.a
            ? "<path " +
              o(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          l =
            "<path " +
            o(a.color.dark, "stroke") +
            ' d="' +
            (function (t, e, r) {
              for (var n = "", o = 0, a = !1, s = 0, u = 0; u < t.length; u++) {
                var c = Math.floor(u % e),
                  f = Math.floor(u / e);
                c || a || (a = !0),
                  t[u]
                    ? (s++,
                      (u > 0 && c > 0 && t[u - 1]) ||
                        ((n += a ? i("M", c + r, 0.5 + f + r) : i("m", o, 0)),
                        (o = 0),
                        (a = !1)),
                      (c + 1 < e && t[u + 1]) || ((n += i("h", s)), (s = 0)))
                    : o++;
              }
              return n;
            })(u, s, a.margin) +
            '"/>',
          h = 'viewBox="0 0 ' + c + " " + c + '"',
          p =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            h +
            ' shape-rendering="crispEdges">' +
            f +
            l +
            "</svg>\n";
        return "function" == typeof r && r(null, p), p;
      };
    },
    function (t, e, r) {
      var n = { "./en": 70, "./en.js": 70, "./nl": 71, "./nl.js": 71 };
      function o(t) {
        var e = i(t);
        return r(e);
      }
      function i(t) {
        if (!r.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return n[t];
      }
      (o.keys = function () {
        return Object.keys(n);
      }),
        (o.resolve = i),
        (t.exports = o),
        (o.id = 158);
    },
    function (t, e, r) {
      function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? n(Object(r), !0).forEach(function (e) {
                i(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function a(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var s = r(65),
        u = r(160),
        c = r(40);
      t.exports = (function () {
        function t(e) {
          var r = this,
            n = e.stateMachine,
            i = e.options;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._stateMachine = n),
            (this._options = this._sanitizeOptions(i)),
            (this._dom = new u(i.element, function () {
              n.isEndState()
                ? r._popupClosedEarly && r._popupClosedEarly()
                : n.transition("abort");
            })),
            (this._irmaWeb = new s({
              stateMachine: n,
              options: o(
                o({}, i),
                {},
                { element: "#irma-popup-web-form", showCloseButton: !0 }
              ),
            }));
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "stateChange",
              value: function (t) {
                var e = t.newState,
                  r = t.payload;
                switch (
                  (this._irmaWeb.stateChange({ newState: e, payload: r }), e)
                ) {
                  case "Loading":
                    return this._dom.openPopup();
                  case "Aborted":
                    return this._dom.closePopup();
                }
              },
            },
            {
              key: "close",
              value: function () {
                var t = this;
                return this._dom.isPopupActive()
                  ? new Promise(function (e) {
                      (t._popupClosedEarly = e),
                        window.setTimeout(function () {
                          t._dom.isPopupActive() && (t._dom.closePopup(), e());
                        }, t._options.closePopupDelay);
                    })
                  : Promise.resolve();
              },
            },
            {
              key: "_sanitizeOptions",
              value: function (t) {
                return c({ closePopupDelay: 2e3 }, t);
              },
            },
          ]) && a(e.prototype, r),
          n && a(e, n),
          t
        );
      })();
    },
    function (t, e) {
      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      t.exports = (function () {
        function t(e, r) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._closeCallback = r),
            (this._element = this._findElement(e)),
            this._element.classList.add("irma-web-popup"),
            (this._element.innerHTML =
              "<section className='irma-web-form' id='irma-popup-web-form'></section>");
          var o = function (t) {
              return n._clickHandler(t);
            },
            i = function (t) {
              return n._keyHandler(t);
            };
          this._element.addEventListener("click", o),
            document.addEventListener("keyup", i),
            document.addEventListener("keydown", i),
            (this._removeEventListeners = function () {
              n._element.removeEventListener("click", o),
                document.removeEventListener("keyup", i),
                document.removeEventListener("keydown", i);
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "isPopupActive",
              value: function () {
                return this._element.classList.contains(
                  "irma-web-popup-active"
                );
              },
            },
            {
              key: "openPopup",
              value: function () {
                this._element.classList.add("irma-web-popup-active");
              },
            },
            {
              key: "closePopup",
              value: function () {
                this._element.classList.remove("irma-web-popup-active");
              },
            },
            {
              key: "_findElement",
              value: function (t) {
                if (t) {
                  var e = document.querySelector(t);
                  return (
                    e || console.error("Could not find element ".concat(t)), e
                  );
                }
                return (
                  (this._elementCreated = !0),
                  document.querySelector("section.irma-web-popup") ||
                    document.body.appendChild(document.createElement("section"))
                );
              },
            },
            {
              key: "_clickHandler",
              value: function (t) {
                t.target.matches("button.irma-web-close") && this._cancel();
              },
            },
            {
              key: "_keyHandler",
              value: function (t) {
                "Enter" == t.key && t.preventDefault(),
                  "keyup" == t.type && "Escape" == t.key && this._cancel();
              },
            },
            {
              key: "_cancel",
              value: function () {
                this._removeEventListeners(),
                  this.closePopup(),
                  this._closeCallback();
              },
            },
          ]) && r(e.prototype, n),
          o && r(e, o),
          t
        );
      })();
    },
    function (t, e, r) {
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var o = r(162),
        i = r(164),
        a = r(40);
      t.exports = (function () {
        function t(e) {
          var r = e.stateMachine,
            n = e.options;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._stateMachine = r),
            (this._options = this._sanitizeOptions(n)),
            (this._session = new o(this._options.session));
        }
        var e, r, s;
        return (
          (e = t),
          (r = [
            {
              key: "stateChange",
              value: function (t) {
                var e = t.newState,
                  r = t.payload;
                switch (e) {
                  case "Loading":
                    return this._startNewSession();
                  case "MediumContemplation":
                    return this._startWatchingServerState(r);
                  case "Cancelled":
                  case "TimedOut":
                  case "Error":
                  case "Success":
                    this._serverState && this._serverState.close();
                    break;
                  case "Aborted":
                    this._serverCancelSession();
                }
              },
            },
            {
              key: "start",
              value: function () {
                this._stateMachine.transition("initialize");
              },
            },
            {
              key: "_startNewSession",
              value: function () {
                var t = this;
                this._session
                  .start()
                  .then(function (e) {
                    "Loading" == t._stateMachine.currentState()
                      ? t._stateMachine.transition("loaded", e)
                      : ((t._serverState = new i(e.u, t._options.state)),
                        t._serverCancelSession());
                  })
                  .catch(function (e) {
                    t._options.debugging &&
                      console.error(
                        "Error starting a new session on the server:",
                        e
                      ),
                      t._handleNoSuccess("fail");
                  });
              },
            },
            {
              key: "_startWatchingServerState",
              value: function (t) {
                var e = this;
                this._serverState = new i(t.u, this._options.state);
                try {
                  this._serverState.observe(
                    function (t) {
                      return e._serverStateChange(t);
                    },
                    function (t) {
                      return e._serverHandleError(t);
                    }
                  );
                } catch (t) {
                  this._options.debugging &&
                    console.error(
                      "Observing server state could not be started: ",
                      t
                    ),
                    this._handleNoSuccess("fail");
                }
              },
            },
            {
              key: "_serverCancelSession",
              value: function () {
                var t = this;
                this._serverState &&
                  this._serverState.cancel().catch(function (e) {
                    t._options.debugging &&
                      console.error("Session could not be cancelled:", e);
                  });
              },
            },
            {
              key: "_serverHandleError",
              value: function (t) {
                this._options.debugging &&
                  console.error("Error while observing server state: ", t),
                  this._handleNoSuccess("fail");
              },
            },
            {
              key: "_serverStateChange",
              value: function (t) {
                if ("CONNECTED" == t)
                  return this._stateMachine.transition("appConnected");
                switch (t) {
                  case "DONE":
                    return this._successStateReached();
                  case "CANCELLED":
                    return this._handleNoSuccess("cancel");
                  case "TIMEOUT":
                    return this._handleNoSuccess("timeout");
                  default:
                    return (
                      this._options.debugging &&
                        console.error(
                          "Unknown state received from server: '".concat(
                            t,
                            "'. Payload:"
                          ),
                          payload
                        ),
                      this._handleNoSuccess("fail")
                    );
                }
              },
            },
            {
              key: "_successStateReached",
              value: function () {
                var t = this;
                this._session
                  .result()
                  .then(function (e) {
                    return t._stateMachine.transition("succeed", e);
                  })
                  .catch(function (e) {
                    t._options.debugging &&
                      console.error(
                        "Error fetching session result from the server:",
                        e
                      ),
                      t._handleNoSuccess("fail");
                  });
              },
            },
            {
              key: "_handleNoSuccess",
              value: function (t) {
                if (this._options.session.start)
                  return this._stateMachine.transition(t);
                this._stateMachine.finalTransition(t);
              },
            },
            {
              key: "_sanitizeOptions",
              value: function (t) {
                var e = {
                  session: {
                    url: "",
                    start: {
                      url: function (t) {
                        return "".concat(t.url, "/session");
                      },
                      body: null,
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      parseResponse: function (t) {
                        return t.json();
                      },
                    },
                    mapping: {
                      sessionPtr: function (t) {
                        return t.sessionPtr;
                      },
                      sessionToken: function (t) {
                        return t.token;
                      },
                    },
                    result: {
                      url: function (t, e) {
                        var r = e.sessionToken;
                        return ""
                          .concat(t.url, "/session/")
                          .concat(r, "/result");
                      },
                      body: null,
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                      parseResponse: function (t) {
                        return t.json();
                      },
                    },
                  },
                  state: {
                    debugging: t.debugging,
                    serverSentEvents: {
                      url: function (t) {
                        return "".concat(t.url, "/statusevents");
                      },
                      timeout: 2e3,
                    },
                    polling: {
                      url: function (t) {
                        return "".concat(t.url, "/status");
                      },
                      interval: 500,
                      startState: "INITIALIZED",
                    },
                    cancel: {
                      url: function (t) {
                        return t.url;
                      },
                    },
                  },
                };
                return a(e, t);
              },
            },
          ]) && n(e.prototype, r),
          s && n(e, s),
          t
        );
      })();
    },
    function (t, e, r) {
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      "undefined" == typeof fetch && r(72),
        (t.exports = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this._options = e),
              (this._mappings = {});
          }
          var e, r, o;
          return (
            (e = t),
            (r = [
              {
                key: "start",
                value: function () {
                  var t = this;
                  return this._options.start
                    ? fetch(
                        this._options.start.url(this._options),
                        this._options.start
                      )
                        .then(function (t) {
                          if (200 != t.status)
                            throw "Error in fetch: endpoint returned status other than 200 OK. Status: "
                              .concat(t.status, " ")
                              .concat(t.statusText);
                          return t;
                        })
                        .then(function (e) {
                          return t._options.start.parseResponse(e);
                        })
                        .then(function (e) {
                          return (
                            (t._mappings = {
                              sessionPtr: t._options.mapping.sessionPtr(e),
                            }),
                            t._options.result &&
                              (t._mappings.sessionToken = t._options.mapping.sessionToken(
                                e
                              )),
                            t._mappings.sessionPtr
                          );
                        })
                    : ((this._mappings.sessionPtr = this._options.mapping.sessionPtr()),
                      this._options.result &&
                        (this._mappings.sessionToken = this._options.mapping.sessionToken()),
                      Promise.resolve(this._mappings.sessionPtr));
                },
              },
              {
                key: "result",
                value: function () {
                  var t = this;
                  return this._options.result
                    ? fetch(
                        this._options.result.url(this._options, this._mappings),
                        this._options.result
                      )
                        .then(function (t) {
                          if (200 != t.status)
                            throw "Error in fetch: endpoint returned status other than 200 OK. Status: "
                              .concat(t.status, " ")
                              .concat(t.statusText);
                          return t;
                        })
                        .then(function (e) {
                          return t._options.result.parseResponse(e);
                        })
                    : Promise.resolve();
                },
              },
            ]) && n(e.prototype, r),
            o && n(e, o),
            t
          );
        })());
    },
    function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "Headers", function () {
          return d;
        }),
        r.d(e, "Request", function () {
          return _;
        }),
        r.d(e, "Response", function () {
          return S;
        }),
        r.d(e, "DOMException", function () {
          return k;
        }),
        r.d(e, "fetch", function () {
          return T;
        });
      var n = "undefined" != typeof self ? self : void 0,
        o = "URLSearchParams" in n,
        i = "Symbol" in n && "iterator" in Symbol,
        a =
          "FileReader" in n &&
          "Blob" in n &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (t) {
              return !1;
            }
          })(),
        s = "FormData" in n,
        u = "ArrayBuffer" in n;
      if (u)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          f =
            ArrayBuffer.isView ||
            function (t) {
              return t && c.indexOf(Object.prototype.toString.call(t)) > -1;
            };
      function l(t) {
        if (
          ("string" != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
        )
          throw new TypeError("Invalid character in header field name");
        return t.toLowerCase();
      }
      function h(t) {
        return "string" != typeof t && (t = String(t)), t;
      }
      function p(t) {
        var e = {
          next: function () {
            var e = t.shift();
            return { done: void 0 === e, value: e };
          },
        };
        return (
          i &&
            (e[Symbol.iterator] = function () {
              return e;
            }),
          e
        );
      }
      function d(t) {
        (this.map = {}),
          t instanceof d
            ? t.forEach(function (t, e) {
                this.append(e, t);
              }, this)
            : Array.isArray(t)
            ? t.forEach(function (t) {
                this.append(t[0], t[1]);
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function (e) {
                this.append(e, t[e]);
              }, this);
      }
      function m(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0;
      }
      function g(t) {
        return new Promise(function (e, r) {
          (t.onload = function () {
            e(t.result);
          }),
            (t.onerror = function () {
              r(t.error);
            });
        });
      }
      function y(t) {
        var e = new FileReader(),
          r = g(e);
        return e.readAsArrayBuffer(t), r;
      }
      function b(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
      }
      function v() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (t) {
            var e;
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = t),
              t
                ? "string" == typeof t
                  ? (this._bodyText = t)
                  : a && Blob.prototype.isPrototypeOf(t)
                  ? (this._bodyBlob = t)
                  : s && FormData.prototype.isPrototypeOf(t)
                  ? (this._bodyFormData = t)
                  : o && URLSearchParams.prototype.isPrototypeOf(t)
                  ? (this._bodyText = t.toString())
                  : u && a && (e = t) && DataView.prototype.isPrototypeOf(e)
                  ? ((this._bodyArrayBuffer = b(t.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : u && (ArrayBuffer.prototype.isPrototypeOf(t) || f(t))
                  ? (this._bodyArrayBuffer = b(t))
                  : (this._bodyText = t = Object.prototype.toString.call(t))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                ("string" == typeof t
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : o &&
                    URLSearchParams.prototype.isPrototypeOf(t) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          a &&
            ((this.blob = function () {
              var t = m(this);
              if (t) return t;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? m(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(y);
            })),
          (this.text = function () {
            var t,
              e,
              r,
              n = m(this);
            if (n) return n;
            if (this._bodyBlob)
              return (
                (t = this._bodyBlob),
                (e = new FileReader()),
                (r = g(e)),
                e.readAsText(t),
                r
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (t) {
                  for (
                    var e = new Uint8Array(t), r = new Array(e.length), n = 0;
                    n < e.length;
                    n++
                  )
                    r[n] = String.fromCharCode(e[n]);
                  return r.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          s &&
            (this.formData = function () {
              return this.text().then(x);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (d.prototype.append = function (t, e) {
        (t = l(t)), (e = h(e));
        var r = this.map[t];
        this.map[t] = r ? r + ", " + e : e;
      }),
        (d.prototype.delete = function (t) {
          delete this.map[l(t)];
        }),
        (d.prototype.get = function (t) {
          return (t = l(t)), this.has(t) ? this.map[t] : null;
        }),
        (d.prototype.has = function (t) {
          return this.map.hasOwnProperty(l(t));
        }),
        (d.prototype.set = function (t, e) {
          this.map[l(t)] = h(e);
        }),
        (d.prototype.forEach = function (t, e) {
          for (var r in this.map)
            this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
        }),
        (d.prototype.keys = function () {
          var t = [];
          return (
            this.forEach(function (e, r) {
              t.push(r);
            }),
            p(t)
          );
        }),
        (d.prototype.values = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e);
            }),
            p(t)
          );
        }),
        (d.prototype.entries = function () {
          var t = [];
          return (
            this.forEach(function (e, r) {
              t.push([r, e]);
            }),
            p(t)
          );
        }),
        i && (d.prototype[Symbol.iterator] = d.prototype.entries);
      var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function _(t, e) {
        var r,
          n,
          o = (e = e || {}).body;
        if (t instanceof _) {
          if (t.bodyUsed) throw new TypeError("Already read");
          (this.url = t.url),
            (this.credentials = t.credentials),
            e.headers || (this.headers = new d(t.headers)),
            (this.method = t.method),
            (this.mode = t.mode),
            (this.signal = t.signal),
            o || null == t._bodyInit || ((o = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = String(t);
        if (
          ((this.credentials =
            e.credentials || this.credentials || "same-origin"),
          (!e.headers && this.headers) || (this.headers = new d(e.headers)),
          (this.method =
            ((r = e.method || this.method || "GET"),
            (n = r.toUpperCase()),
            w.indexOf(n) > -1 ? n : r)),
          (this.mode = e.mode || this.mode || null),
          (this.signal = e.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && o)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(o),
          !(
            ("GET" !== this.method && "HEAD" !== this.method) ||
            ("no-store" !== e.cache && "no-cache" !== e.cache)
          ))
        ) {
          var i = /([?&])_=[^&]*/;
          if (i.test(this.url))
            this.url = this.url.replace(i, "$1_=" + new Date().getTime());
          else {
            this.url +=
              (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      function x(t) {
        var e = new FormData();
        return (
          t
            .trim()
            .split("&")
            .forEach(function (t) {
              if (t) {
                var r = t.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  o = r.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(n), decodeURIComponent(o));
              }
            }),
          e
        );
      }
      function S(t, e) {
        e || (e = {}),
          (this.type = "default"),
          (this.status = void 0 === e.status ? 200 : e.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in e ? e.statusText : ""),
          (this.headers = new d(e.headers)),
          (this.url = e.url || ""),
          this._initBody(t);
      }
      (_.prototype.clone = function () {
        return new _(this, { body: this._bodyInit });
      }),
        v.call(_.prototype),
        v.call(S.prototype),
        (S.prototype.clone = function () {
          return new S(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new d(this.headers),
            url: this.url,
          });
        }),
        (S.error = function () {
          var t = new S(null, { status: 0, statusText: "" });
          return (t.type = "error"), t;
        });
      var E = [301, 302, 303, 307, 308];
      S.redirect = function (t, e) {
        if (-1 === E.indexOf(e)) throw new RangeError("Invalid status code");
        return new S(null, { status: e, headers: { location: t } });
      };
      var k = n.DOMException;
      function T(t, e) {
        return new Promise(function (r, o) {
          var i = new _(t, e);
          if (i.signal && i.signal.aborted)
            return o(new k("Aborted", "AbortError"));
          var s = new XMLHttpRequest();
          function c() {
            s.abort();
          }
          (s.onload = function () {
            var t,
              e,
              n = {
                status: s.status,
                statusText: s.statusText,
                headers:
                  ((t = s.getAllResponseHeaders() || ""),
                  (e = new d()),
                  t
                    .replace(/\r?\n[\t ]+/g, " ")
                    .split(/\r?\n/)
                    .forEach(function (t) {
                      var r = t.split(":"),
                        n = r.shift().trim();
                      if (n) {
                        var o = r.join(":").trim();
                        e.append(n, o);
                      }
                    }),
                  e),
              };
            n.url =
              "responseURL" in s
                ? s.responseURL
                : n.headers.get("X-Request-URL");
            var o = "response" in s ? s.response : s.responseText;
            setTimeout(function () {
              r(new S(o, n));
            }, 0);
          }),
            (s.onerror = function () {
              setTimeout(function () {
                o(new TypeError("Network request failed"));
              }, 0);
            }),
            (s.ontimeout = function () {
              setTimeout(function () {
                o(new TypeError("Network request failed"));
              }, 0);
            }),
            (s.onabort = function () {
              setTimeout(function () {
                o(new k("Aborted", "AbortError"));
              }, 0);
            }),
            s.open(
              i.method,
              (function (t) {
                try {
                  return "" === t && n.location.href ? n.location.href : t;
                } catch (e) {
                  return t;
                }
              })(i.url),
              !0
            ),
            "include" === i.credentials
              ? (s.withCredentials = !0)
              : "omit" === i.credentials && (s.withCredentials = !1),
            "responseType" in s &&
              (a
                ? (s.responseType = "blob")
                : u &&
                  i.headers.get("Content-Type") &&
                  -1 !==
                    i.headers
                      .get("Content-Type")
                      .indexOf("application/octet-stream") &&
                  (s.responseType = "arraybuffer")),
            i.headers.forEach(function (t, e) {
              s.setRequestHeader(e, t);
            }),
            i.signal &&
              (i.signal.addEventListener("abort", c),
              (s.onreadystatechange = function () {
                4 === s.readyState && i.signal.removeEventListener("abort", c);
              })),
            s.send(void 0 === i._bodyInit ? null : i._bodyInit);
        });
      }
      "function" != typeof k &&
        (((k = function (t, e) {
          (this.message = t), (this.name = e);
          var r = Error(t);
          this.stack = r.stack;
        }).prototype = Object.create(Error.prototype)),
        (k.prototype.constructor = k)),
        (T.polyfill = !0),
        n.fetch ||
          ((n.fetch = T), (n.Headers = d), (n.Request = _), (n.Response = S));
    },
    function (t, e, r) {
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      "undefined" == typeof fetch && r(72),
        (t.exports = (function () {
          function t(e, r) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this._eventSource = this._eventSource()),
              (this._isRunning = !1),
              (this._isPolling = !1),
              (this._options = r),
              (this._options.url = e);
          }
          var e, o, i;
          return (
            (e = t),
            (o = [
              {
                key: "observe",
                value: function (t, e) {
                  if (
                    ((this._stateChangeCallback = t),
                    (this._errorCallback = e),
                    (this._isRunning = !0),
                    this._eventSource && this._options.serverSentEvents)
                  )
                    return this._startSSE();
                  this._startPolling();
                },
              },
              {
                key: "cancel",
                value: function () {
                  return (
                    this.close(),
                    this._options.cancel
                      ? fetch(this._options.cancel.url(this._options), {
                          method: "DELETE",
                        })
                      : Promise.resolve()
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  this._source &&
                    (this._source.close(),
                    this._options.debugging &&
                      console.log("🌎 Closed EventSource")),
                    (this._isRunning = !1);
                },
              },
              {
                key: "_startSSE",
                value: function () {
                  var t = this;
                  this._options.debugging &&
                    console.log("🌎 Using EventSource for server events"),
                    (this._source = new this._eventSource(
                      this._options.serverSentEvents.url(this._options)
                    ));
                  var e = setTimeout(function () {
                    t._options.debugging &&
                      console.error(
                        "🌎 EventSource could not connect within ".concat(
                          t._options.serverSentEvents.timeout,
                          "ms"
                        )
                      ),
                      setTimeout(function () {
                        return t._source.close();
                      }, 0),
                      t._startPolling();
                  }, this._options.serverSentEvents.timeout);
                  this._source.addEventListener("open", function () {
                    return clearTimeout(e);
                  }),
                    this._source.addEventListener("message", function (r) {
                      clearTimeout(e);
                      var n = JSON.parse(r.data);
                      t._options.debugging &&
                        console.log(
                          "🌎 Server event: Remote state changed to '".concat(
                            n,
                            "'"
                          )
                        ),
                        t._stateChangeCallback(n);
                    }),
                    this._source.addEventListener("error", function (r) {
                      clearTimeout(e),
                        t._source.close(),
                        t._options.debugging &&
                          console.error("🌎 EventSource threw an error: ", r),
                        setTimeout(function () {
                          return t._source.close();
                        }, 0),
                        t._startPolling();
                    });
                },
              },
              {
                key: "_startPolling",
                value: function () {
                  var t = this;
                  this._options.polling &&
                    !this._isPolling &&
                    (this._options.debugging &&
                      console.log("🌎 Using polling for server events"),
                    (this._currentStatus = this._options.polling.startState),
                    (this._isPolling = !0),
                    this._polling()
                      .then(function () {
                        t._options.debugging &&
                          console.log("🌎 Stopped polling");
                      })
                      .catch(function (e) {
                        t._options.debugging &&
                          console.error("🌎 Error thrown while polling: ", e),
                          t._errorCallback(e);
                      }));
                },
              },
              {
                key: "_polling",
                value: function () {
                  var t = this;
                  return new Promise(function (e, r) {
                    if (!t._isRunning) return (t._isPolling = !1), void e();
                    fetch(t._options.polling.url(t._options))
                      .then(function (t) {
                        if (200 != t.status)
                          throw "Error in fetch: endpoint returned status other than 200 OK. Status: "
                            .concat(t.status, " ")
                            .concat(t.statusText);
                        return t;
                      })
                      .then(function (t) {
                        return t.json();
                      })
                      .then(function (n) {
                        if (!t._isRunning) return (t._isPolling = !1), void e();
                        n != t._currentStatus &&
                          (t._options.debugging &&
                            console.log(
                              "🌎 Server event: Remote state changed to '".concat(
                                n,
                                "'"
                              )
                            ),
                          (t._currentStatus = n),
                          t._stateChangeCallback(n)),
                          setTimeout(function () {
                            t._polling().then(e).catch(r);
                          }, t._options.polling.interval);
                      })
                      .catch(r);
                  });
                },
              },
              {
                key: "_eventSource",
                value: function () {
                  return "undefined" == typeof window
                    ? r(165)
                    : window.EventSource;
                },
              },
            ]) && n(e.prototype, o),
            i && n(e, i),
            t
          );
        })());
    },
    function (t, e, r) {
      (function (e, n) {
        var o = r(166),
          i = r(41).parse,
          a = r(42),
          s = r(176),
          u = r(74),
          c = r(189),
          f = [
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "secureProtocol",
            "servername",
            "checkServerIdentity",
          ],
          l = [239, 187, 191];
        function h(t, r) {
          var a = h.CONNECTING;
          Object.defineProperty(this, "readyState", {
            get: function () {
              return a;
            },
          }),
            Object.defineProperty(this, "url", {
              get: function () {
                return t;
              },
            });
          var c,
            m = this;
          function g(e) {
            a !== h.CLOSED &&
              ((a = h.CONNECTING),
              S("error", new p("error", { message: e })),
              _ && ((t = _), (_ = null)),
              setTimeout(function () {
                a === h.CONNECTING && x();
              }, m.reconnectInterval));
          }
          m.reconnectInterval = 1e3;
          var y = "";
          r &&
            r.headers &&
            r.headers["Last-Event-ID"] &&
            ((y = r.headers["Last-Event-ID"]),
            delete r.headers["Last-Event-ID"]);
          var b = !1,
            v = "",
            w = "",
            _ = null;
          function x() {
            var o = i(t),
              d = "https:" === o.protocol;
            if (
              ((o.headers = {
                "Cache-Control": "no-cache",
                Accept: "text/event-stream",
              }),
              y && (o.headers["Last-Event-ID"] = y),
              r && r.headers)
            )
              for (var v in r.headers) {
                var w = r.headers[v];
                w && (o.headers[v] = w);
              }
            if (
              ((o.rejectUnauthorized = !(r && !r.rejectUnauthorized)),
              r && r.proxy)
            ) {
              var k = i(r.proxy);
              (d = "https:" === k.protocol),
                (o.protocol = d ? "https:" : "http:"),
                (o.path = t),
                (o.headers.Host = o.host),
                (o.hostname = k.hostname),
                (o.host = k.host),
                (o.port = k.port);
            }
            if (r && r.https)
              for (var T in r.https)
                if (-1 !== f.indexOf(T)) {
                  var A = r.https[T];
                  void 0 !== A && (o[T] = A);
                }
            r &&
              void 0 !== r.withCredentials &&
              (o.withCredentials = r.withCredentials),
              (c = (d ? s : u).request(o, function (r) {
                if (
                  500 === r.statusCode ||
                  502 === r.statusCode ||
                  503 === r.statusCode ||
                  504 === r.statusCode
                )
                  return (
                    S(
                      "error",
                      new p("error", {
                        status: r.statusCode,
                        message: r.statusMessage,
                      })
                    ),
                    void g()
                  );
                if (301 === r.statusCode || 307 === r.statusCode)
                  return r.headers.location
                    ? (307 === r.statusCode && (_ = t),
                      (t = r.headers.location),
                      void e.nextTick(x))
                    : void S(
                        "error",
                        new p("error", {
                          status: r.statusCode,
                          message: r.statusMessage,
                        })
                      );
                if (200 !== r.statusCode)
                  return (
                    S(
                      "error",
                      new p("error", {
                        status: r.statusCode,
                        message: r.statusMessage,
                      })
                    ),
                    m.close()
                  );
                (a = h.OPEN),
                  r.on("close", function () {
                    r.removeAllListeners("close"),
                      r.removeAllListeners("end"),
                      g();
                  }),
                  r.on("end", function () {
                    r.removeAllListeners("close"),
                      r.removeAllListeners("end"),
                      g();
                  }),
                  S("open", new p("open"));
                var o,
                  i = !0;
                r.on("data", function (t) {
                  (o = o ? n.concat([o, t]) : t),
                    i &&
                      (function (t) {
                        return l.every(function (e, r) {
                          return t[r] === e;
                        });
                      })(o) &&
                      (o = o.slice(l.length)),
                    (i = !1);
                  for (var e = 0, r = o.length; e < r; ) {
                    b && (10 === o[e] && ++e, (b = !1));
                    for (var a, s = -1, u = -1, c = e; s < 0 && c < r; ++c)
                      58 === (a = o[c])
                        ? u < 0 && (u = c - e)
                        : 13 === a
                        ? ((b = !0), (s = c - e))
                        : 10 === a && (s = c - e);
                    if (s < 0) break;
                    E(o, e, u, s), (e += s + 1);
                  }
                  e === r ? (o = void 0) : e > 0 && (o = o.slice(e));
                });
              })).on("error", function (t) {
                g(t.message);
              }),
              c.setNoDelay && c.setNoDelay(!0),
              c.end();
          }
          function S() {
            m.listeners(arguments[0]).length > 0 && m.emit.apply(m, arguments);
          }
          function E(e, r, n, i) {
            if (0 === i) {
              if (v.length > 0) {
                var a = w || "message";
                S(
                  a,
                  new d(a, {
                    data: v.slice(0, -1),
                    lastEventId: y,
                    origin: o(t),
                  })
                ),
                  (v = "");
              }
              w = void 0;
            } else if (n > 0) {
              var s = n < 0,
                u = 0,
                c = e.slice(r, r + (s ? i : n)).toString();
              r += u = s ? i : 32 !== e[r + n + 1] ? n + 1 : n + 2;
              var f = i - u,
                l = e.slice(r, r + f).toString();
              if ("data" === c) v += l + "\n";
              else if ("event" === c) w = l;
              else if ("id" === c) y = l;
              else if ("retry" === c) {
                var h = parseInt(l, 10);
                Number.isNaN(h) || (m.reconnectInterval = h);
              }
            }
          }
          x(),
            (this._close = function () {
              a !== h.CLOSED &&
                ((a = h.CLOSED),
                c.abort && c.abort(),
                c.xhr && c.xhr.abort && c.xhr.abort());
            });
        }
        function p(t, e) {
          if (
            (Object.defineProperty(this, "type", {
              writable: !1,
              value: t,
              enumerable: !0,
            }),
            e)
          )
            for (var r in e)
              e.hasOwnProperty(r) &&
                Object.defineProperty(this, r, {
                  writable: !1,
                  value: e[r],
                  enumerable: !0,
                });
        }
        function d(t, e) {
          for (var r in (Object.defineProperty(this, "type", {
            writable: !1,
            value: t,
            enumerable: !0,
          }),
          e))
            e.hasOwnProperty(r) &&
              Object.defineProperty(this, r, {
                writable: !1,
                value: e[r],
                enumerable: !0,
              });
        }
        (t.exports = h),
          c.inherits(h, a.EventEmitter),
          (h.prototype.constructor = h),
          ["open", "error", "message"].forEach(function (t) {
            Object.defineProperty(h.prototype, "on" + t, {
              get: function () {
                var e = this.listeners(t)[0];
                return e ? (e._listener ? e._listener : e) : void 0;
              },
              set: function (e) {
                this.removeAllListeners(t), this.addEventListener(t, e);
              },
            });
          }),
          Object.defineProperty(h, "CONNECTING", { enumerable: !0, value: 0 }),
          Object.defineProperty(h, "OPEN", { enumerable: !0, value: 1 }),
          Object.defineProperty(h, "CLOSED", { enumerable: !0, value: 2 }),
          (h.prototype.CONNECTING = 0),
          (h.prototype.OPEN = 1),
          (h.prototype.CLOSED = 2),
          (h.prototype.close = function () {
            this._close();
          }),
          (h.prototype.addEventListener = function (t, e) {
            "function" == typeof e && ((e._listener = e), this.on(t, e));
          }),
          (h.prototype.dispatchEvent = function (t) {
            if (!t.type) throw new Error("UNSPECIFIED_EVENT_TYPE_ERR");
            this.emit(t.type, t.detail);
          }),
          (h.prototype.removeEventListener = function (t, e) {
            "function" == typeof e &&
              ((e._listener = void 0), this.removeListener(t, e));
          });
      }.call(this, r(6), r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      var n = r(167);
      function o(t) {
        return (
          "string" == typeof t && (t = n(t)),
          t.protocol && t.hostname
            ? (t.protocol + "//" + t.host).toLowerCase()
            : "null"
        );
      }
      (o.same = function (t, e) {
        return o(t) === o(e);
      }),
        (t.exports = o);
    },
    function (t, e, r) {
      "use strict";
      (function (e) {
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        var o = r(168),
          i = r(169),
          a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
          s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
          u = new RegExp(
            "^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+"
          );
        function c(t) {
          return (t || "").toString().replace(u, "");
        }
        var f = [
            ["#", "hash"],
            ["?", "query"],
            function (t) {
              return t.replace("\\", "/");
            },
            ["/", "pathname"],
            ["@", "auth", 1],
            [NaN, "host", void 0, 1, 1],
            [/:(\d+)$/, "port", void 0, 1],
            [NaN, "hostname", void 0, 1, 1],
          ],
          l = { hash: 1, query: 1 };
        function h(t) {
          var r,
            o =
              ("undefined" != typeof window
                ? window
                : void 0 !== e
                ? e
                : "undefined" != typeof self
                ? self
                : {}
              ).location || {},
            i = {},
            s = n((t = t || o));
          if ("blob:" === t.protocol) i = new d(unescape(t.pathname), {});
          else if ("string" === s)
            for (r in ((i = new d(t, {})), l)) delete i[r];
          else if ("object" === s) {
            for (r in t) r in l || (i[r] = t[r]);
            void 0 === i.slashes && (i.slashes = a.test(t.href));
          }
          return i;
        }
        function p(t) {
          t = c(t);
          var e = s.exec(t);
          return {
            protocol: e[1] ? e[1].toLowerCase() : "",
            slashes: !!e[2],
            rest: e[3],
          };
        }
        function d(t, e, r) {
          if (((t = c(t)), !(this instanceof d))) return new d(t, e, r);
          var a,
            s,
            u,
            l,
            m,
            g,
            y = f.slice(),
            b = n(e),
            v = this,
            w = 0;
          for (
            "object" !== b && "string" !== b && ((r = e), (e = null)),
              r && "function" != typeof r && (r = i.parse),
              e = h(e),
              a = !(s = p(t || "")).protocol && !s.slashes,
              v.slashes = s.slashes || (a && e.slashes),
              v.protocol = s.protocol || e.protocol || "",
              t = s.rest,
              s.slashes || (y[3] = [/(.*)/, "pathname"]);
            w < y.length;
            w++
          )
            "function" != typeof (l = y[w])
              ? ((u = l[0]),
                (g = l[1]),
                u != u
                  ? (v[g] = t)
                  : "string" == typeof u
                  ? ~(m = t.indexOf(u)) &&
                    ("number" == typeof l[2]
                      ? ((v[g] = t.slice(0, m)), (t = t.slice(m + l[2])))
                      : ((v[g] = t.slice(m)), (t = t.slice(0, m))))
                  : (m = u.exec(t)) &&
                    ((v[g] = m[1]), (t = t.slice(0, m.index))),
                (v[g] = v[g] || (a && l[3] && e[g]) || ""),
                l[4] && (v[g] = v[g].toLowerCase()))
              : (t = l(t));
          r && (v.query = r(v.query)),
            a &&
              e.slashes &&
              "/" !== v.pathname.charAt(0) &&
              ("" !== v.pathname || "" !== e.pathname) &&
              (v.pathname = (function (t, e) {
                if ("" === t) return e;
                for (
                  var r = (e || "/")
                      .split("/")
                      .slice(0, -1)
                      .concat(t.split("/")),
                    n = r.length,
                    o = r[n - 1],
                    i = !1,
                    a = 0;
                  n--;

                )
                  "." === r[n]
                    ? r.splice(n, 1)
                    : ".." === r[n]
                    ? (r.splice(n, 1), a++)
                    : a && (0 === n && (i = !0), r.splice(n, 1), a--);
                return (
                  i && r.unshift(""),
                  ("." !== o && ".." !== o) || r.push(""),
                  r.join("/")
                );
              })(v.pathname, e.pathname)),
            o(v.port, v.protocol) || ((v.host = v.hostname), (v.port = "")),
            (v.username = v.password = ""),
            v.auth &&
              ((l = v.auth.split(":")),
              (v.username = l[0] || ""),
              (v.password = l[1] || "")),
            (v.origin =
              v.protocol && v.host && "file:" !== v.protocol
                ? v.protocol + "//" + v.host
                : "null"),
            (v.href = v.toString());
        }
        (d.prototype = {
          set: function (t, e, r) {
            var n = this;
            switch (t) {
              case "query":
                "string" == typeof e && e.length && (e = (r || i.parse)(e)),
                  (n[t] = e);
                break;
              case "port":
                (n[t] = e),
                  o(e, n.protocol)
                    ? e && (n.host = n.hostname + ":" + e)
                    : ((n.host = n.hostname), (n[t] = ""));
                break;
              case "hostname":
                (n[t] = e), n.port && (e += ":" + n.port), (n.host = e);
                break;
              case "host":
                (n[t] = e),
                  /:\d+$/.test(e)
                    ? ((e = e.split(":")),
                      (n.port = e.pop()),
                      (n.hostname = e.join(":")))
                    : ((n.hostname = e), (n.port = ""));
                break;
              case "protocol":
                (n.protocol = e.toLowerCase()), (n.slashes = !r);
                break;
              case "pathname":
              case "hash":
                if (e) {
                  var a = "pathname" === t ? "/" : "#";
                  n[t] = e.charAt(0) !== a ? a + e : e;
                } else n[t] = e;
                break;
              default:
                n[t] = e;
            }
            for (var s = 0; s < f.length; s++) {
              var u = f[s];
              u[4] && (n[u[1]] = n[u[1]].toLowerCase());
            }
            return (
              (n.origin =
                n.protocol && n.host && "file:" !== n.protocol
                  ? n.protocol + "//" + n.host
                  : "null"),
              (n.href = n.toString()),
              n
            );
          },
          toString: function (t) {
            (t && "function" == typeof t) || (t = i.stringify);
            var e,
              r = this,
              o = r.protocol;
            o && ":" !== o.charAt(o.length - 1) && (o += ":");
            var a = o + (r.slashes ? "//" : "");
            return (
              r.username &&
                ((a += r.username),
                r.password && (a += ":" + r.password),
                (a += "@")),
              (a += r.host + r.pathname),
              (e = "object" === n(r.query) ? t(r.query) : r.query) &&
                (a += "?" !== e.charAt(0) ? "?" + e : e),
              r.hash && (a += r.hash),
              a
            );
          },
        }),
          (d.extractProtocol = p),
          (d.location = h),
          (d.trimLeft = c),
          (d.qs = i),
          (t.exports = d);
      }.call(this, r(1)));
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t, e) {
        if (((e = e.split(":")[0]), !(t = +t))) return !1;
        switch (e) {
          case "http":
          case "ws":
            return 80 !== t;
          case "https":
          case "wss":
            return 443 !== t;
          case "ftp":
            return 21 !== t;
          case "gopher":
            return 70 !== t;
          case "file":
            return !1;
        }
        return 0 !== t;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = Object.prototype.hasOwnProperty;
      function o(t) {
        try {
          return decodeURIComponent(t.replace(/\+/g, " "));
        } catch (t) {
          return null;
        }
      }
      (e.stringify = function (t, e) {
        e = e || "";
        var r,
          o,
          i = [];
        for (o in ("string" != typeof e && (e = "?"), t))
          if (n.call(t, o)) {
            if (
              ((r = t[o]) || (null != r && !isNaN(r)) || (r = ""),
              (o = encodeURIComponent(o)),
              (r = encodeURIComponent(r)),
              null === o || null === r)
            )
              continue;
            i.push(o + "=" + r);
          }
        return i.length ? e + i.join("&") : "";
      }),
        (e.parse = function (t) {
          for (var e, r = /([^=?&]+)=?([^&]*)/g, n = {}; (e = r.exec(t)); ) {
            var i = o(e[1]),
              a = o(e[2]);
            null === i || null === a || i in n || (n[i] = a);
          }
          return n;
        });
    },
    function (t, e, r) {
      (function (t, n) {
        var o;
        function i(t) {
          return (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (a) {
          var s = "object" == i(e) && e && !e.nodeType && e,
            u = "object" == i(t) && t && !t.nodeType && t,
            c = "object" == (void 0 === n ? "undefined" : i(n)) && n;
          (c.global !== c && c.window !== c && c.self !== c) || (a = c);
          var f,
            l,
            h = 2147483647,
            p = /^xn--/,
            d = /[^\x20-\x7E]/,
            m = /[\x2E\u3002\uFF0E\uFF61]/g,
            g = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input",
            },
            y = Math.floor,
            b = String.fromCharCode;
          function v(t) {
            throw new RangeError(g[t]);
          }
          function w(t, e) {
            for (var r = t.length, n = []; r--; ) n[r] = e(t[r]);
            return n;
          }
          function _(t, e) {
            var r = t.split("@"),
              n = "";
            return (
              r.length > 1 && ((n = r[0] + "@"), (t = r[1])),
              n + w((t = t.replace(m, ".")).split("."), e).join(".")
            );
          }
          function x(t) {
            for (var e, r, n = [], o = 0, i = t.length; o < i; )
              (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i
                ? 56320 == (64512 & (r = t.charCodeAt(o++)))
                  ? n.push(((1023 & e) << 10) + (1023 & r) + 65536)
                  : (n.push(e), o--)
                : n.push(e);
            return n;
          }
          function S(t) {
            return w(t, function (t) {
              var e = "";
              return (
                t > 65535 &&
                  ((e += b((((t -= 65536) >>> 10) & 1023) | 55296)),
                  (t = 56320 | (1023 & t))),
                (e += b(t))
              );
            }).join("");
          }
          function E(t, e) {
            return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
          }
          function k(t, e, r) {
            var n = 0;
            for (t = r ? y(t / 700) : t >> 1, t += y(t / e); t > 455; n += 36)
              t = y(t / 35);
            return y(n + (36 * t) / (t + 38));
          }
          function T(t) {
            var e,
              r,
              n,
              o,
              i,
              a,
              s,
              u,
              c,
              f,
              l,
              p = [],
              d = t.length,
              m = 0,
              g = 128,
              b = 72;
            for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n)
              t.charCodeAt(n) >= 128 && v("not-basic"), p.push(t.charCodeAt(n));
            for (o = r > 0 ? r + 1 : 0; o < d; ) {
              for (
                i = m, a = 1, s = 36;
                o >= d && v("invalid-input"),
                  ((u =
                    (l = t.charCodeAt(o++)) - 48 < 10
                      ? l - 22
                      : l - 65 < 26
                      ? l - 65
                      : l - 97 < 26
                      ? l - 97
                      : 36) >= 36 ||
                    u > y((h - m) / a)) &&
                    v("overflow"),
                  (m += u * a),
                  !(u < (c = s <= b ? 1 : s >= b + 26 ? 26 : s - b));
                s += 36
              )
                a > y(h / (f = 36 - c)) && v("overflow"), (a *= f);
              (b = k(m - i, (e = p.length + 1), 0 == i)),
                y(m / e) > h - g && v("overflow"),
                (g += y(m / e)),
                (m %= e),
                p.splice(m++, 0, g);
            }
            return S(p);
          }
          function A(t) {
            var e,
              r,
              n,
              o,
              i,
              a,
              s,
              u,
              c,
              f,
              l,
              p,
              d,
              m,
              g,
              w = [];
            for (
              p = (t = x(t)).length, e = 128, r = 0, i = 72, a = 0;
              a < p;
              ++a
            )
              (l = t[a]) < 128 && w.push(b(l));
            for (n = o = w.length, o && w.push("-"); n < p; ) {
              for (s = h, a = 0; a < p; ++a)
                (l = t[a]) >= e && l < s && (s = l);
              for (
                s - e > y((h - r) / (d = n + 1)) && v("overflow"),
                  r += (s - e) * d,
                  e = s,
                  a = 0;
                a < p;
                ++a
              )
                if (((l = t[a]) < e && ++r > h && v("overflow"), l == e)) {
                  for (
                    u = r, c = 36;
                    !(u < (f = c <= i ? 1 : c >= i + 26 ? 26 : c - i));
                    c += 36
                  )
                    (g = u - f),
                      (m = 36 - f),
                      w.push(b(E(f + (g % m), 0))),
                      (u = y(g / m));
                  w.push(b(E(u, 0))), (i = k(r, d, n == o)), (r = 0), ++n;
                }
              ++r, ++e;
            }
            return w.join("");
          }
          if (
            ((f = {
              version: "1.4.1",
              ucs2: { decode: x, encode: S },
              decode: T,
              encode: A,
              toASCII: function (t) {
                return _(t, function (t) {
                  return d.test(t) ? "xn--" + A(t) : t;
                });
              },
              toUnicode: function (t) {
                return _(t, function (t) {
                  return p.test(t) ? T(t.slice(4).toLowerCase()) : t;
                });
              },
            }),
            "object" == i(r(73)) && r(73))
          )
            void 0 ===
              (o = function () {
                return f;
              }.call(e, r, e, t)) || (t.exports = o);
          else if (s && u)
            if (t.exports == s) u.exports = f;
            else for (l in f) f.hasOwnProperty(l) && (s[l] = f[l]);
          else a.punycode = f;
        })(this);
      }.call(this, r(171)(t), r(1)));
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      t.exports = {
        isString: function (t) {
          return "string" == typeof t;
        },
        isObject: function (t) {
          return "object" === n(t) && null !== t;
        },
        isNull: function (t) {
          return null === t;
        },
        isNullOrUndefined: function (t) {
          return null == t;
        },
      };
    },
    function (t, e, r) {
      "use strict";
      (e.decode = e.parse = r(174)), (e.encode = e.stringify = r(175));
    },
    function (t, e, r) {
      "use strict";
      function n(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      t.exports = function (t, e, r, i) {
        (e = e || "&"), (r = r || "=");
        var a = {};
        if ("string" != typeof t || 0 === t.length) return a;
        var s = /\+/g;
        t = t.split(e);
        var u = 1e3;
        i && "number" == typeof i.maxKeys && (u = i.maxKeys);
        var c = t.length;
        u > 0 && c > u && (c = u);
        for (var f = 0; f < c; ++f) {
          var l,
            h,
            p,
            d,
            m = t[f].replace(s, "%20"),
            g = m.indexOf(r);
          g >= 0
            ? ((l = m.substr(0, g)), (h = m.substr(g + 1)))
            : ((l = m), (h = "")),
            (p = decodeURIComponent(l)),
            (d = decodeURIComponent(h)),
            n(a, p)
              ? o(a[p])
                ? a[p].push(d)
                : (a[p] = [a[p], d])
              : (a[p] = d);
        }
        return a;
      };
      var o =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = function (t) {
        switch (n(t)) {
          case "string":
            return t;
          case "boolean":
            return t ? "true" : "false";
          case "number":
            return isFinite(t) ? t : "";
          default:
            return "";
        }
      };
      t.exports = function (t, e, r, u) {
        return (
          (e = e || "&"),
          (r = r || "="),
          null === t && (t = void 0),
          "object" === n(t)
            ? a(s(t), function (n) {
                var s = encodeURIComponent(o(n)) + r;
                return i(t[n])
                  ? a(t[n], function (t) {
                      return s + encodeURIComponent(o(t));
                    }).join(e)
                  : s + encodeURIComponent(o(t[n]));
              }).join(e)
            : u
            ? encodeURIComponent(o(u)) + r + encodeURIComponent(o(t))
            : ""
        );
      };
      var i =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
      function a(t, e) {
        if (t.map) return t.map(e);
        for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
        return r;
      }
      var s =
        Object.keys ||
        function (t) {
          var e = [];
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
          return e;
        };
    },
    function (t, e, r) {
      var n = r(74),
        o = r(41),
        i = t.exports;
      for (var a in n) n.hasOwnProperty(a) && (i[a] = n[a]);
      function s(t) {
        if (
          ("string" == typeof t && (t = o.parse(t)),
          t.protocol || (t.protocol = "https:"),
          "https:" !== t.protocol)
        )
          throw new Error(
            'Protocol "' + t.protocol + '" not supported. Expected "https:"'
          );
        return t;
      }
      (i.request = function (t, e) {
        return (t = s(t)), n.request.call(this, t, e);
      }),
        (i.get = function (t, e) {
          return (t = s(t)), n.get.call(this, t, e);
        });
    },
    function (t, e, r) {
      (function (e, n, o) {
        var i = r(75),
          a = r(12),
          s = r(76),
          u = r(77),
          c = r(186),
          f = s.IncomingMessage,
          l = s.readyStates;
        var h = (t.exports = function (t) {
          var r,
            n = this;
          u.Writable.call(n),
            (n._opts = t),
            (n._body = []),
            (n._headers = {}),
            t.auth &&
              n.setHeader(
                "Authorization",
                "Basic " + new e(t.auth).toString("base64")
              ),
            Object.keys(t.headers).forEach(function (e) {
              n.setHeader(e, t.headers[e]);
            });
          var o = !0;
          if (
            "disable-fetch" === t.mode ||
            ("requestTimeout" in t && !i.abortController)
          )
            (o = !1), (r = !0);
          else if ("prefer-streaming" === t.mode) r = !1;
          else if ("allow-wrong-content-type" === t.mode)
            r = !i.overrideMimeType;
          else {
            if (t.mode && "default" !== t.mode && "prefer-fast" !== t.mode)
              throw new Error("Invalid value for opts.mode");
            r = !0;
          }
          (n._mode = (function (t, e) {
            return i.fetch && e
              ? "fetch"
              : i.mozchunkedarraybuffer
              ? "moz-chunked-arraybuffer"
              : i.msstream
              ? "ms-stream"
              : i.arraybuffer && t
              ? "arraybuffer"
              : i.vbArray && t
              ? "text:vbarray"
              : "text";
          })(r, o)),
            (n._fetchTimer = null),
            n.on("finish", function () {
              n._onFinish();
            });
        });
        a(h, u.Writable),
          (h.prototype.setHeader = function (t, e) {
            var r = t.toLowerCase();
            -1 === p.indexOf(r) && (this._headers[r] = { name: t, value: e });
          }),
          (h.prototype.getHeader = function (t) {
            var e = this._headers[t.toLowerCase()];
            return e ? e.value : null;
          }),
          (h.prototype.removeHeader = function (t) {
            delete this._headers[t.toLowerCase()];
          }),
          (h.prototype._onFinish = function () {
            var t = this;
            if (!t._destroyed) {
              var r = t._opts,
                a = t._headers,
                s = null;
              "GET" !== r.method &&
                "HEAD" !== r.method &&
                (s = i.arraybuffer
                  ? c(e.concat(t._body))
                  : i.blobConstructor
                  ? new n.Blob(
                      t._body.map(function (t) {
                        return c(t);
                      }),
                      { type: (a["content-type"] || {}).value || "" }
                    )
                  : e.concat(t._body).toString());
              var u = [];
              if (
                (Object.keys(a).forEach(function (t) {
                  var e = a[t].name,
                    r = a[t].value;
                  Array.isArray(r)
                    ? r.forEach(function (t) {
                        u.push([e, t]);
                      })
                    : u.push([e, r]);
                }),
                "fetch" === t._mode)
              ) {
                var f = null;
                if (i.abortController) {
                  var h = new AbortController();
                  (f = h.signal),
                    (t._fetchAbortController = h),
                    "requestTimeout" in r &&
                      0 !== r.requestTimeout &&
                      (t._fetchTimer = n.setTimeout(function () {
                        t.emit("requestTimeout"),
                          t._fetchAbortController &&
                            t._fetchAbortController.abort();
                      }, r.requestTimeout));
                }
                n.fetch(t._opts.url, {
                  method: t._opts.method,
                  headers: u,
                  body: s || void 0,
                  mode: "cors",
                  credentials: r.withCredentials ? "include" : "same-origin",
                  signal: f,
                }).then(
                  function (e) {
                    (t._fetchResponse = e), t._connect();
                  },
                  function (e) {
                    n.clearTimeout(t._fetchTimer),
                      t._destroyed || t.emit("error", e);
                  }
                );
              } else {
                var p = (t._xhr = new n.XMLHttpRequest());
                try {
                  p.open(t._opts.method, t._opts.url, !0);
                } catch (e) {
                  return void o.nextTick(function () {
                    t.emit("error", e);
                  });
                }
                "responseType" in p && (p.responseType = t._mode.split(":")[0]),
                  "withCredentials" in p &&
                    (p.withCredentials = !!r.withCredentials),
                  "text" === t._mode &&
                    "overrideMimeType" in p &&
                    p.overrideMimeType("text/plain; charset=x-user-defined"),
                  "requestTimeout" in r &&
                    ((p.timeout = r.requestTimeout),
                    (p.ontimeout = function () {
                      t.emit("requestTimeout");
                    })),
                  u.forEach(function (t) {
                    p.setRequestHeader(t[0], t[1]);
                  }),
                  (t._response = null),
                  (p.onreadystatechange = function () {
                    switch (p.readyState) {
                      case l.LOADING:
                      case l.DONE:
                        t._onXHRProgress();
                    }
                  }),
                  "moz-chunked-arraybuffer" === t._mode &&
                    (p.onprogress = function () {
                      t._onXHRProgress();
                    }),
                  (p.onerror = function () {
                    t._destroyed || t.emit("error", new Error("XHR error"));
                  });
                try {
                  p.send(s);
                } catch (e) {
                  return void o.nextTick(function () {
                    t.emit("error", e);
                  });
                }
              }
            }
          }),
          (h.prototype._onXHRProgress = function () {
            (function (t) {
              try {
                var e = t.status;
                return null !== e && 0 !== e;
              } catch (t) {
                return !1;
              }
            })(this._xhr) &&
              !this._destroyed &&
              (this._response || this._connect(),
              this._response._onXHRProgress());
          }),
          (h.prototype._connect = function () {
            var t = this;
            t._destroyed ||
              ((t._response = new f(
                t._xhr,
                t._fetchResponse,
                t._mode,
                t._fetchTimer
              )),
              t._response.on("error", function (e) {
                t.emit("error", e);
              }),
              t.emit("response", t._response));
          }),
          (h.prototype._write = function (t, e, r) {
            this._body.push(t), r();
          }),
          (h.prototype.abort = h.prototype.destroy = function () {
            (this._destroyed = !0),
              n.clearTimeout(this._fetchTimer),
              this._response && (this._response._destroyed = !0),
              this._xhr
                ? this._xhr.abort()
                : this._fetchAbortController &&
                  this._fetchAbortController.abort();
          }),
          (h.prototype.end = function (t, e, r) {
            "function" == typeof t && ((r = t), (t = void 0)),
              u.Writable.prototype.end.call(this, t, e, r);
          }),
          (h.prototype.flushHeaders = function () {}),
          (h.prototype.setTimeout = function () {}),
          (h.prototype.setNoDelay = function () {}),
          (h.prototype.setSocketKeepAlive = function () {});
        var p = [
          "accept-charset",
          "accept-encoding",
          "access-control-request-headers",
          "access-control-request-method",
          "connection",
          "content-length",
          "cookie",
          "cookie2",
          "date",
          "dnt",
          "expect",
          "host",
          "keep-alive",
          "origin",
          "referer",
          "te",
          "trailer",
          "transfer-encoding",
          "upgrade",
          "via",
        ];
      }.call(this, r(10).Buffer, r(1), r(6)));
    },
    function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == r.call(t);
        };
    },
    function (t, e) {},
    function (t, e, r) {
      "use strict";
      var n = r(26).Buffer,
        o = r(181);
      (t.exports = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (t.prototype.push = function (t) {
            var e = { data: t, next: null };
            this.length > 0 ? (this.tail.next = e) : (this.head = e),
              (this.tail = e),
              ++this.length;
          }),
          (t.prototype.unshift = function (t) {
            var e = { data: t, next: this.head };
            0 === this.length && (this.tail = e),
              (this.head = e),
              ++this.length;
          }),
          (t.prototype.shift = function () {
            if (0 !== this.length) {
              var t = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                t
              );
            }
          }),
          (t.prototype.clear = function () {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (t.prototype.join = function (t) {
            if (0 === this.length) return "";
            for (var e = this.head, r = "" + e.data; (e = e.next); )
              r += t + e.data;
            return r;
          }),
          (t.prototype.concat = function (t) {
            if (0 === this.length) return n.alloc(0);
            if (1 === this.length) return this.head.data;
            for (
              var e, r, o, i = n.allocUnsafe(t >>> 0), a = this.head, s = 0;
              a;

            )
              (e = a.data),
                (r = i),
                (o = s),
                e.copy(r, o),
                (s += a.data.length),
                (a = a.next);
            return i;
          }),
          t
        );
      })()),
        o &&
          o.inspect &&
          o.inspect.custom &&
          (t.exports.prototype[o.inspect.custom] = function () {
            var t = o.inspect({ length: this.length });
            return this.constructor.name + " " + t;
          });
    },
    function (t, e) {},
    function (t, e, r) {
      (function (t) {
        var n =
            (void 0 !== t && t) ||
            ("undefined" != typeof self && self) ||
            window,
          o = Function.prototype.apply;
        function i(t, e) {
          (this._id = t), (this._clearFn = e);
        }
        (e.setTimeout = function () {
          return new i(o.call(setTimeout, n, arguments), clearTimeout);
        }),
          (e.setInterval = function () {
            return new i(o.call(setInterval, n, arguments), clearInterval);
          }),
          (e.clearTimeout = e.clearInterval = function (t) {
            t && t.close();
          }),
          (i.prototype.unref = i.prototype.ref = function () {}),
          (i.prototype.close = function () {
            this._clearFn.call(n, this._id);
          }),
          (e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
          }),
          (e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
          }),
          (e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout();
              }, e));
          }),
          r(183),
          (e.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, r(1)));
    },
    function (t, e, r) {
      (function (t, e) {
        !(function (t, r) {
          "use strict";
          if (!t.setImmediate) {
            var n,
              o,
              i,
              a,
              s,
              u = 1,
              c = {},
              f = !1,
              l = t.document,
              h = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (h = h && h.setTimeout ? h : t),
              "[object process]" === {}.toString.call(t.process)
                ? (n = function (t) {
                    e.nextTick(function () {
                      d(t);
                    });
                  })
                : !(function () {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        r = t.onmessage;
                      return (
                        (t.onmessage = function () {
                          e = !1;
                        }),
                        t.postMessage("", "*"),
                        (t.onmessage = r),
                        e
                      );
                    }
                  })()
                ? t.MessageChannel
                  ? (((i = new MessageChannel()).port1.onmessage = function (
                      t
                    ) {
                      d(t.data);
                    }),
                    (n = function (t) {
                      i.port2.postMessage(t);
                    }))
                  : l && "onreadystatechange" in l.createElement("script")
                  ? ((o = l.documentElement),
                    (n = function (t) {
                      var e = l.createElement("script");
                      (e.onreadystatechange = function () {
                        d(t),
                          (e.onreadystatechange = null),
                          o.removeChild(e),
                          (e = null);
                      }),
                        o.appendChild(e);
                    }))
                  : (n = function (t) {
                      setTimeout(d, 0, t);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (e) {
                    e.source === t &&
                      "string" == typeof e.data &&
                      0 === e.data.indexOf(a) &&
                      d(+e.data.slice(a.length));
                  }),
                  t.addEventListener
                    ? t.addEventListener("message", s, !1)
                    : t.attachEvent("onmessage", s),
                  (n = function (e) {
                    t.postMessage(a + e, "*");
                  })),
              (h.setImmediate = function (t) {
                "function" != typeof t && (t = new Function("" + t));
                for (
                  var e = new Array(arguments.length - 1), r = 0;
                  r < e.length;
                  r++
                )
                  e[r] = arguments[r + 1];
                var o = { callback: t, args: e };
                return (c[u] = o), n(u), u++;
              }),
              (h.clearImmediate = p);
          }
          function p(t) {
            delete c[t];
          }
          function d(t) {
            if (f) setTimeout(d, 0, t);
            else {
              var e = c[t];
              if (e) {
                f = !0;
                try {
                  !(function (t) {
                    var e = t.callback,
                      r = t.args;
                    switch (r.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(r[0]);
                        break;
                      case 2:
                        e(r[0], r[1]);
                        break;
                      case 3:
                        e(r[0], r[1], r[2]);
                        break;
                      default:
                        e.apply(void 0, r);
                    }
                  })(e);
                } finally {
                  p(t), (f = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }.call(this, r(1), r(6)));
    },
    function (t, e, r) {
      (function (e) {
        function r(t) {
          try {
            if (!e.localStorage) return !1;
          } catch (t) {
            return !1;
          }
          var r = e.localStorage[t];
          return null != r && "true" === String(r).toLowerCase();
        }
        t.exports = function (t, e) {
          if (r("noDeprecation")) return t;
          var n = !1;
          return function () {
            if (!n) {
              if (r("throwDeprecation")) throw new Error(e);
              r("traceDeprecation") ? console.trace(e) : console.warn(e),
                (n = !0);
            }
            return t.apply(this, arguments);
          };
        };
      }.call(this, r(1)));
    },
    function (t, e, r) {
      "use strict";
      t.exports = i;
      var n = r(83),
        o = Object.create(r(20));
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        n.call(this, t);
      }
      (o.inherits = r(12)),
        o.inherits(i, n),
        (i.prototype._transform = function (t, e, r) {
          r(null, t);
        });
    },
    function (t, e, r) {
      var n = r(10).Buffer;
      t.exports = function (t) {
        if (t instanceof Uint8Array) {
          if (0 === t.byteOffset && t.byteLength === t.buffer.byteLength)
            return t.buffer;
          if ("function" == typeof t.buffer.slice)
            return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
        }
        if (n.isBuffer(t)) {
          for (
            var e = new Uint8Array(t.length), r = t.length, o = 0;
            o < r;
            o++
          )
            e[o] = t[o];
          return e.buffer;
        }
        throw new Error("Argument must be a Buffer");
      };
    },
    function (t, e) {
      t.exports = function () {
        for (var t = {}, e = 0; e < arguments.length; e++) {
          var n = arguments[e];
          for (var o in n) r.call(n, o) && (t[o] = n[o]);
        }
        return t;
      };
      var r = Object.prototype.hasOwnProperty;
    },
    function (t, e) {
      t.exports = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Unordered Collection",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required",
      };
    },
    function (t, e, r) {
      (function (t) {
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        var o =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++)
                r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
              return r;
            },
          i = /%[sdj%]/g;
        (e.format = function (t) {
          if (!b(t)) {
            for (var e = [], r = 0; r < arguments.length; r++)
              e.push(u(arguments[r]));
            return e.join(" ");
          }
          r = 1;
          for (
            var n = arguments,
              o = n.length,
              a = String(t).replace(i, function (t) {
                if ("%%" === t) return "%";
                if (r >= o) return t;
                switch (t) {
                  case "%s":
                    return String(n[r++]);
                  case "%d":
                    return Number(n[r++]);
                  case "%j":
                    try {
                      return JSON.stringify(n[r++]);
                    } catch (t) {
                      return "[Circular]";
                    }
                  default:
                    return t;
                }
              }),
              s = n[r];
            r < o;
            s = n[++r]
          )
            g(s) || !_(s) ? (a += " " + s) : (a += " " + u(s));
          return a;
        }),
          (e.deprecate = function (r, n) {
            if (void 0 !== t && !0 === t.noDeprecation) return r;
            if (void 0 === t)
              return function () {
                return e.deprecate(r, n).apply(this, arguments);
              };
            var o = !1;
            return function () {
              if (!o) {
                if (t.throwDeprecation) throw new Error(n);
                t.traceDeprecation ? console.trace(n) : console.error(n),
                  (o = !0);
              }
              return r.apply(this, arguments);
            };
          });
        var a,
          s = {};
        function u(t, r) {
          var n = { seen: [], stylize: f };
          return (
            arguments.length >= 3 && (n.depth = arguments[2]),
            arguments.length >= 4 && (n.colors = arguments[3]),
            m(r) ? (n.showHidden = r) : r && e._extend(n, r),
            v(n.showHidden) && (n.showHidden = !1),
            v(n.depth) && (n.depth = 2),
            v(n.colors) && (n.colors = !1),
            v(n.customInspect) && (n.customInspect = !0),
            n.colors && (n.stylize = c),
            l(n, t, n.depth)
          );
        }
        function c(t, e) {
          var r = u.styles[e];
          return r
            ? "[" + u.colors[r][0] + "m" + t + "[" + u.colors[r][1] + "m"
            : t;
        }
        function f(t, e) {
          return t;
        }
        function l(t, r, n) {
          if (
            t.customInspect &&
            r &&
            E(r.inspect) &&
            r.inspect !== e.inspect &&
            (!r.constructor || r.constructor.prototype !== r)
          ) {
            var o = r.inspect(n, t);
            return b(o) || (o = l(t, o, n)), o;
          }
          var i = (function (t, e) {
            if (v(e)) return t.stylize("undefined", "undefined");
            if (b(e)) {
              var r =
                "'" +
                JSON.stringify(e)
                  .replace(/^"|"$/g, "")
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return t.stylize(r, "string");
            }
            if (y(e)) return t.stylize("" + e, "number");
            if (m(e)) return t.stylize("" + e, "boolean");
            if (g(e)) return t.stylize("null", "null");
          })(t, r);
          if (i) return i;
          var a = Object.keys(r),
            s = (function (t) {
              var e = {};
              return (
                t.forEach(function (t, r) {
                  e[t] = !0;
                }),
                e
              );
            })(a);
          if (
            (t.showHidden && (a = Object.getOwnPropertyNames(r)),
            S(r) &&
              (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
          )
            return h(r);
          if (0 === a.length) {
            if (E(r)) {
              var u = r.name ? ": " + r.name : "";
              return t.stylize("[Function" + u + "]", "special");
            }
            if (w(r))
              return t.stylize(RegExp.prototype.toString.call(r), "regexp");
            if (x(r)) return t.stylize(Date.prototype.toString.call(r), "date");
            if (S(r)) return h(r);
          }
          var c,
            f = "",
            _ = !1,
            k = ["{", "}"];
          (d(r) && ((_ = !0), (k = ["[", "]"])), E(r)) &&
            (f = " [Function" + (r.name ? ": " + r.name : "") + "]");
          return (
            w(r) && (f = " " + RegExp.prototype.toString.call(r)),
            x(r) && (f = " " + Date.prototype.toUTCString.call(r)),
            S(r) && (f = " " + h(r)),
            0 !== a.length || (_ && 0 != r.length)
              ? n < 0
                ? w(r)
                  ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
                  : t.stylize("[Object]", "special")
                : (t.seen.push(r),
                  (c = _
                    ? (function (t, e, r, n, o) {
                        for (var i = [], a = 0, s = e.length; a < s; ++a)
                          O(e, String(a))
                            ? i.push(p(t, e, r, n, String(a), !0))
                            : i.push("");
                        return (
                          o.forEach(function (o) {
                            o.match(/^\d+$/) || i.push(p(t, e, r, n, o, !0));
                          }),
                          i
                        );
                      })(t, r, n, s, a)
                    : a.map(function (e) {
                        return p(t, r, n, s, e, _);
                      })),
                  t.seen.pop(),
                  (function (t, e, r) {
                    if (
                      t.reduce(function (t, e) {
                        return (
                          e.indexOf("\n") >= 0 && 0,
                          t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        r[0] +
                        ("" === e ? "" : e + "\n ") +
                        " " +
                        t.join(",\n  ") +
                        " " +
                        r[1]
                      );
                    return r[0] + e + " " + t.join(", ") + " " + r[1];
                  })(c, f, k))
              : k[0] + f + k[1]
          );
        }
        function h(t) {
          return "[" + Error.prototype.toString.call(t) + "]";
        }
        function p(t, e, r, n, o, i) {
          var a, s, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }).get
              ? (s = u.set
                  ? t.stylize("[Getter/Setter]", "special")
                  : t.stylize("[Getter]", "special"))
              : u.set && (s = t.stylize("[Setter]", "special")),
            O(n, o) || (a = "[" + o + "]"),
            s ||
              (t.seen.indexOf(u.value) < 0
                ? (s = g(r)
                    ? l(t, u.value, null)
                    : l(t, u.value, r - 1)).indexOf("\n") > -1 &&
                  (s = i
                    ? s
                        .split("\n")
                        .map(function (t) {
                          return "  " + t;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      s
                        .split("\n")
                        .map(function (t) {
                          return "   " + t;
                        })
                        .join("\n"))
                : (s = t.stylize("[Circular]", "special"))),
            v(a))
          ) {
            if (i && o.match(/^\d+$/)) return s;
            (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((a = a.substr(1, a.length - 2)), (a = t.stylize(a, "name")))
              : ((a = a
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (a = t.stylize(a, "string")));
          }
          return a + ": " + s;
        }
        function d(t) {
          return Array.isArray(t);
        }
        function m(t) {
          return "boolean" == typeof t;
        }
        function g(t) {
          return null === t;
        }
        function y(t) {
          return "number" == typeof t;
        }
        function b(t) {
          return "string" == typeof t;
        }
        function v(t) {
          return void 0 === t;
        }
        function w(t) {
          return _(t) && "[object RegExp]" === k(t);
        }
        function _(t) {
          return "object" === n(t) && null !== t;
        }
        function x(t) {
          return _(t) && "[object Date]" === k(t);
        }
        function S(t) {
          return _(t) && ("[object Error]" === k(t) || t instanceof Error);
        }
        function E(t) {
          return "function" == typeof t;
        }
        function k(t) {
          return Object.prototype.toString.call(t);
        }
        function T(t) {
          return t < 10 ? "0" + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (r) {
          if (
            (v(a) && (a = t.env.NODE_DEBUG || ""), (r = r.toUpperCase()), !s[r])
          )
            if (new RegExp("\\b" + r + "\\b", "i").test(a)) {
              var n = t.pid;
              s[r] = function () {
                var t = e.format.apply(e, arguments);
                console.error("%s %d: %s", r, n, t);
              };
            } else s[r] = function () {};
          return s[r];
        }),
          (e.inspect = u),
          (u.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (u.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red",
          }),
          (e.isArray = d),
          (e.isBoolean = m),
          (e.isNull = g),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = y),
          (e.isString = b),
          (e.isSymbol = function (t) {
            return "symbol" === n(t);
          }),
          (e.isUndefined = v),
          (e.isRegExp = w),
          (e.isObject = _),
          (e.isDate = x),
          (e.isError = S),
          (e.isFunction = E),
          (e.isPrimitive = function (t) {
            return (
              null === t ||
              "boolean" == typeof t ||
              "number" == typeof t ||
              "string" == typeof t ||
              "symbol" === n(t) ||
              void 0 === t
            );
          }),
          (e.isBuffer = r(190));
        var A = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        function C() {
          var t = new Date(),
            e = [T(t.getHours()), T(t.getMinutes()), T(t.getSeconds())].join(
              ":"
            );
          return [t.getDate(), A[t.getMonth()], e].join(" ");
        }
        function O(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          console.log("%s - %s", C(), e.format.apply(e, arguments));
        }),
          (e.inherits = r(191)),
          (e._extend = function (t, e) {
            if (!e || !_(e)) return t;
            for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
            return t;
          });
        var R =
          "undefined" != typeof Symbol
            ? Symbol("util.promisify.custom")
            : void 0;
        function P(t, e) {
          if (!t) {
            var r = new Error("Promise was rejected with a falsy value");
            (r.reason = t), (t = r);
          }
          return e(t);
        }
        (e.promisify = function (t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (R && t[R]) {
            var e;
            if ("function" != typeof (e = t[R]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(e, R, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              e
            );
          }
          function e() {
            for (
              var e,
                r,
                n = new Promise(function (t, n) {
                  (e = t), (r = n);
                }),
                o = [],
                i = 0;
              i < arguments.length;
              i++
            )
              o.push(arguments[i]);
            o.push(function (t, n) {
              t ? r(t) : e(n);
            });
            try {
              t.apply(this, o);
            } catch (t) {
              r(t);
            }
            return n;
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            R &&
              Object.defineProperty(e, R, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(e, o(t))
          );
        }),
          (e.promisify.custom = R),
          (e.callbackify = function (e) {
            if ("function" != typeof e)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function r() {
              for (var r = [], n = 0; n < arguments.length; n++)
                r.push(arguments[n]);
              var o = r.pop();
              if ("function" != typeof o)
                throw new TypeError(
                  "The last argument must be of type Function"
                );
              var i = this,
                a = function () {
                  return o.apply(i, arguments);
                };
              e.apply(this, r).then(
                function (e) {
                  t.nextTick(a, null, e);
                },
                function (e) {
                  t.nextTick(P, e, a);
                }
              );
            }
            return (
              Object.setPrototypeOf(r, Object.getPrototypeOf(e)),
              Object.defineProperties(r, o(e)),
              r
            );
          });
      }.call(this, r(6)));
    },
    function (t, e) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      t.exports = function (t) {
        return (
          t &&
          "object" === r(t) &&
          "function" == typeof t.copy &&
          "function" == typeof t.fill &&
          "function" == typeof t.readUInt8
        );
      };
    },
    function (t, e) {
      "function" == typeof Object.create
        ? (t.exports = function (t, e) {
            (t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (t.exports = function (t, e) {
            t.super_ = e;
            var r = function () {};
            (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          });
    },
  ]);
});
