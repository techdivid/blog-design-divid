(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    1: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "isRTL", function () {
          return r;
        }),
        e.d(n, "isMobile", function () {
          return i;
        }),
        e.d(n, "isDarkMode", function () {
          return o;
        }),
        e.d(n, "formatDate", function () {
          return a;
        });
      var r = function () {
          var t = document.querySelector("html");
          return (
            "ar" === t.getAttribute("lang") || "he" === t.getAttribute("lang")
          );
        },
        i = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "768px";
          return window.matchMedia("(max-width: ".concat(t, ")")).matches;
        },
        o = function () {
          var t =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)");
          return t && t.matches;
        },
        a = function (t) {
          return t
            ? new Date(t).toLocaleDateString(document.documentElement.lang, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "";
        };
    },
    19: function (t, n, e) {
      t.exports = e(20);
    },
    20: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0),
        i = e.n(r),
        o = (e(6), e(2)),
        a = e(1);
      i()(document).ready(function () {
        var t = i()(".js-featured-articles");
        t.length > 0 &&
          (t.on("init", function () {
            Object(o.a)(".js-featured-article-title", 200);
          }),
          t.slick({
            arrows: !0,
            infinite: !0,
            prevArrow:
              '<button class="m-icon-button in-featured-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',
            nextArrow:
              '<button class="m-icon-button in-featured-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',
            mobileFirst: !0,
            rtl: Object(a.isRTL)(),
          }),
          setTimeout(function () {
            t.slick("setPosition");
          }, 350));
      });
    },
  },
  [[19, 0, 1]],
]);
