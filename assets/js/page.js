(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    23: function (t, e, a) {
      t.exports = a(24);
    },
    24: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a(0),
        n = a.n(s),
        o = a(3),
        i = a(4),
        r = a.n(i);
      n()(document).ready(function () {
        r()(".js-post-content"),
          (function () {
            for (
              var t = document.querySelectorAll(".kg-gallery-image img"),
                e = 0,
                a = t.length;
              e < a;
              e++
            ) {
              var s = t[e].closest(".kg-gallery-image"),
                n = t[e].attributes.width.value / t[e].attributes.height.value;
              s.style.flex = "".concat(n, " 1 0%");
            }
          })(),
          n()(".js-post-content")
            .find("figure img")
            .each(function () {
              n()(this).closest("figure").hasClass("kg-bookmark-card") ||
                n()(this).addClass("js-zoomable");
              var t = n()(this).parent().find("figcaption");
              t ? n()(this).attr("alt", t.text()) : n()(this).attr("alt", "");
            }),
          Object(o.a)(".js-zoomable");
      });
    },
  },
  [[23, 0, 1]],
]);
