(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    1: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "isRTL", function () {
          return i;
        }),
        n.d(e, "isMobile", function () {
          return o;
        }),
        n.d(e, "isDarkMode", function () {
          return a;
        }),
        n.d(e, "formatDate", function () {
          return r;
        });
      var i = function () {
          var t = document.querySelector("html");
          return (
            "ar" === t.getAttribute("lang") || "he" === t.getAttribute("lang")
          );
        },
        o = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "768px";
          return window.matchMedia("(max-width: ".concat(t, ")")).matches;
        },
        a = function () {
          var t =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)");
          return t && t.matches;
        },
        r = function (t) {
          return t
            ? new Date(t).toLocaleDateString(document.documentElement.lang, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "";
        };
    },
    21: function (t, e, n) {
      t.exports = n(22);
    },
    22: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(0),
        o = n.n(i),
        a = (n(6), n(14)),
        r = n(3),
        s = n(4),
        c = n.n(s),
        l = n(2),
        u = n(1),
        d = null,
        f = null,
        m = window.pageYOffset,
        h = 0,
        w = 0,
        p = 0,
        b = !1;
      function g() {
        (m = window.pageYOffset), y();
      }
      function v(t) {
        Object(u.isMobile)("1023px")
          ? (o()("body").addClass("share-menu-displayed"),
            setTimeout(function () {
              d.removeAttr("data-aos");
            }, t))
          : (Object(a.a)(".js-sticky", { stickyBitStickyOffset: 100 }),
            o()("body").removeClass("share-menu-displayed"));
      }
      function k() {
        x(),
          v(100),
          setTimeout(function () {
            O(), y();
          }, 200);
      }
      function y() {
        b || requestAnimationFrame(j), (b = !0);
      }
      function j() {
        var t = w - h,
          e = Math.ceil((m / t) * 100);
        e <= 100 &&
          (function (t) {
            if (t <= 100) {
              var e = p - (t / 100) * p;
              f[0].style.strokeDashoffset = e;
            }
          })(e),
          (b = !1);
      }
      function x() {
        (h = window.innerHeight), (w = o()(document).height());
      }
      function O() {
        var t = f.parent().width(),
          e = t / 2,
          n = Object(u.isMobile)() ? 2 : 3;
        f.parent().attr("viewBox", "0 0 ".concat(t, " ").concat(t)),
          f.attr("stroke-width", n),
          f.attr("r", e - (n - 1)),
          f.attr("cx", e),
          f.attr("cy", e),
          (p = 2 * e * Math.PI),
          (f[0].style.strokeDasharray = "".concat(p, " ").concat(p)),
          (f[0].style.strokeDashoffset = p);
      }
      function M() {
        (f = o()(".js-progress")),
          x(),
          O(),
          j(),
          setTimeout(function () {
            f.parent().css("opacity", 1);
          }, 300);
      }
      o()(document).ready(function () {
        d = o()(".js-aos-wrapper");
        var t = o()(".js-scrolltop"),
          e = o()(".js-load-comments"),
          n = o()(".js-comments-iframe"),
          i = o()(".js-recommended-articles");
        c()(".js-post-content"),
          (function () {
            for (
              var t = document.querySelectorAll(".kg-gallery-image img"),
                e = 0,
                n = t.length;
              e < n;
              e++
            ) {
              var i = t[e].closest(".kg-gallery-image"),
                o = t[e].attributes.width.value / t[e].attributes.height.value;
              i.style.flex = "".concat(o, " 1 0%");
            }
          })(),
          v(1e3),
          i.length > 0 &&
            (i.on("init", function () {
              M(),
                Object(l.a)(".js-article-card-title", 100),
                Object(l.a)(".js-article-card-title-no-image", 250);
            }),
            i.slick({
              arrows: !0,
              infinite: !0,
              prevArrow:
                '<button class="m-icon-button filled in-recommended-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',
              nextArrow:
                '<button class="m-icon-button filled in-recommended-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',
              mobileFirst: !0,
              responsive: [
                { breakpoint: 720, settings: { slidesToShow: 2 } },
                { breakpoint: 1023, settings: { arrows: !1, slidesToShow: 3 } },
              ],
              rtl: Object(u.isRTL)(),
            })),
          t.click(function () {
            o()("html, body").animate({ scrollTop: 0 }, 500);
          }),
          e.click(function () {
            e.parent().hide(), n.fadeIn("slow");
          }),
          o()(".js-post-content")
            .find("img")
            .each(function () {
              o()(this).closest("figure").hasClass("kg-bookmark-card") ||
                o()(this).addClass("js-zoomable");
              var t = o()(this).parent().find("figcaption");
              t ? o()(this).attr("alt", t.text()) : o()(this).attr("alt", "");
            }),
          Object(r.a)(".js-zoomable"),
          window.addEventListener("scroll", g, { passive: !0 }),
          window.addEventListener("resize", k, { passive: !0 });
      }),
        o()(window).on("load", function () {
          M();
        });
    },
  },
  [[21, 0, 1]],
]);
