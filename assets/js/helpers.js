(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    1: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "isRTL", function () {
          return r;
        }),
        e.d(t, "isMobile", function () {
          return o;
        }),
        e.d(t, "isDarkMode", function () {
          return i;
        }),
        e.d(t, "formatDate", function () {
          return c;
        });
      var r = function () {
          var n = document.querySelector("html");
          return (
            "ar" === n.getAttribute("lang") || "he" === n.getAttribute("lang")
          );
        },
        o = function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "768px";
          return window.matchMedia("(max-width: ".concat(n, ")")).matches;
        },
        i = function () {
          var n =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)");
          return n && n.matches;
        },
        c = function (n) {
          return n
            ? new Date(n).toLocaleDateString(document.documentElement.lang, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "";
        };
    },
    15: function (n, t, e) {
      e(1), (n.exports = e(25));
    },
    25: function (n, t) {},
  },
  [[15, 0, 1]],
]);
