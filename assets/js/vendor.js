(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    function (e, t, n) {
      (function (e) {
        var n;
        function o(e) {
          return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        !(function (t, n) {
          "use strict";
          "object" === o(e) && "object" === o(e.exports)
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var s = [],
            a = i.document,
            l = Object.getPrototypeOf,
            c = s.slice,
            p = s.concat,
            u = s.push,
            d = s.indexOf,
            f = {},
            h = f.toString,
            m = f.hasOwnProperty,
            v = m.toString,
            g = v.call(Object),
            y = {},
            b = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            w = function (e) {
              return null != e && e === e.window;
            },
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function k(e, t, n) {
            var o,
              i,
              r = (n = n || a).createElement("script");
            if (((r.text = e), t))
              for (o in x)
                (i = t[o] || (t.getAttribute && t.getAttribute(o))) &&
                  r.setAttribute(o, i);
            n.head.appendChild(r).parentNode.removeChild(r);
          }
          function S(e) {
            return null == e
              ? e + ""
              : "object" === o(e) || "function" == typeof e
              ? f[h.call(e)] || "object"
              : o(e);
          }
          var T = function e(t, n) {
              return new e.fn.init(t, n);
            },
            C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          function E(e) {
            var t = !!e && "length" in e && e.length,
              n = S(e);
            return (
              !b(e) &&
              !w(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (T.fn = T.prototype =
            {
              jquery: "3.4.1",
              constructor: T,
              length: 0,
              toArray: function () {
                return c.call(this);
              },
              get: function (e) {
                return null == e
                  ? c.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(c.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: s.sort,
              splice: s.splice,
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  s,
                  a = arguments[0] || {},
                  l = 1,
                  c = arguments.length,
                  p = !1;
                for (
                  "boolean" == typeof a &&
                    ((p = a), (a = arguments[l] || {}), l++),
                    "object" === o(a) || b(a) || (a = {}),
                    l === c && ((a = this), l--);
                  l < c;
                  l++
                )
                  if (null != (e = arguments[l]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          a !== i &&
                          (p &&
                          i &&
                          (T.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = a[t]),
                              (s =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || T.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (a[t] = T.extend(p, s, i)))
                            : void 0 !== i && (a[t] = i));
                return a;
              }),
            T.extend({
              expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== h.call(e)) &&
                  (!(t = l(e)) ||
                    ("function" ==
                      typeof (n = m.call(t, "constructor") && t.constructor) &&
                      v.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t) {
                k(e, { nonce: t && t.nonce });
              },
              each: function (e, t) {
                var n,
                  o = 0;
                if (E(e))
                  for (
                    n = e.length;
                    o < n && !1 !== t.call(e[o], o, e[o]);
                    o++
                  );
                else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                return e;
              },
              trim: function (e) {
                return null == e ? "" : (e + "").replace(C, "");
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? T.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, o = 0, i = e.length; o < n; o++)
                  e[i++] = t[o];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var o = [], i = 0, r = e.length, s = !n; i < r; i++)
                  !t(e[i], i) !== s && o.push(e[i]);
                return o;
              },
              map: function (e, t, n) {
                var o,
                  i,
                  r = 0,
                  s = [];
                if (E(e))
                  for (o = e.length; r < o; r++)
                    null != (i = t(e[r], r, n)) && s.push(i);
                else for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
                return p.apply([], s);
              },
              guid: 1,
              support: y,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = s[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var A = (function (e) {
            var t,
              n,
              o,
              i,
              r,
              s,
              a,
              l,
              c,
              p,
              u,
              d,
              f,
              h,
              m,
              v,
              g,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = e.document,
              k = 0,
              S = 0,
              T = le(),
              C = le(),
              E = le(),
              A = le(),
              O = function (e, t) {
                return e === t && (u = !0), 0;
              },
              L = {}.hasOwnProperty,
              j = [],
              $ = j.pop,
              N = j.push,
              M = j.push,
              H = j.slice,
              D = function (e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              z =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              P = "[\\x20\\t\\r\\n\\f]",
              q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
              I =
                "\\[" +
                P +
                "*(" +
                q +
                ")(?:" +
                P +
                "*([*^$|!~]?=)" +
                P +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                q +
                "))|)" +
                P +
                "*\\]",
              F =
                ":(" +
                q +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                I +
                ")*)|.*)\\)|)",
              W = new RegExp(P + "+", "g"),
              B = new RegExp(
                "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
                "g"
              ),
              R = new RegExp("^" + P + "*," + P + "*"),
              _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
              Y = new RegExp(P + "|>"),
              X = new RegExp(F),
              U = new RegExp("^" + q + "$"),
              V = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    P +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    P +
                    "*(?:([+-]|)" +
                    P +
                    "*(\\d+)|))" +
                    P +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    P +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    P +
                    "*((?:-\\d)?\\d*)" +
                    P +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)",
                "ig"
              ),
              ne = function (e, t, n) {
                var o = "0x" + t - 65536;
                return o != o || n
                  ? t
                  : o < 0
                  ? String.fromCharCode(o + 65536)
                  : String.fromCharCode((o >> 10) | 55296, (1023 & o) | 56320);
              },
              oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              re = function () {
                d();
              },
              se = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              M.apply((j = H.call(x.childNodes)), x.childNodes),
                j[x.childNodes.length].nodeType;
            } catch (e) {
              M = {
                apply: j.length
                  ? function (e, t) {
                      N.apply(e, H.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, o, i) {
              var r,
                a,
                c,
                p,
                u,
                h,
                g,
                y = t && t.ownerDocument,
                k = t ? t.nodeType : 9;
              if (
                ((o = o || []),
                "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))
              )
                return o;
              if (
                !i &&
                ((t ? t.ownerDocument || t : x) !== f && d(t), (t = t || f), m)
              ) {
                if (11 !== k && (u = Z.exec(e)))
                  if ((r = u[1])) {
                    if (9 === k) {
                      if (!(c = t.getElementById(r))) return o;
                      if (c.id === r) return o.push(c), o;
                    } else if (
                      y &&
                      (c = y.getElementById(r)) &&
                      b(t, c) &&
                      c.id === r
                    )
                      return o.push(c), o;
                  } else {
                    if (u[2]) return M.apply(o, t.getElementsByTagName(e)), o;
                    if (
                      (r = u[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return M.apply(o, t.getElementsByClassName(r)), o;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!v || !v.test(e)) &&
                  (1 !== k || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((g = e), (y = t), 1 === k && Y.test(e))) {
                    for (
                      (p = t.getAttribute("id"))
                        ? (p = p.replace(oe, ie))
                        : t.setAttribute("id", (p = w)),
                        a = (h = s(e)).length;
                      a--;

                    )
                      h[a] = "#" + p + " " + be(h[a]);
                    (g = h.join(",")),
                      (y = (ee.test(e) && ge(t.parentNode)) || t);
                  }
                  try {
                    return M.apply(o, y.querySelectorAll(g)), o;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    p === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(B, "$1"), t, o, i);
            }
            function le() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > o.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function ce(e) {
              return (e[w] = !0), e;
            }
            function pe(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                o.attrHandle[n[i]] = t;
            }
            function de(e, t) {
              var n = t && e,
                o =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (o) return o;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && se(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ve(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, o) {
                    for (var i, r = e([], n.length, t), s = r.length; s--; )
                      n[(i = r[s])] && (n[i] = !(o[i] = n[i]));
                  })
                );
              });
            }
            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (r = ae.isXML =
              function (e) {
                var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
                return !G.test(t || (n && n.nodeName) || "HTML");
              }),
            (d = ae.setDocument =
              function (e) {
                var t,
                  i,
                  s = e ? e.ownerDocument || e : x;
                return s !== f && 9 === s.nodeType && s.documentElement
                  ? ((h = (f = s).documentElement),
                    (m = !r(f)),
                    x !== f &&
                      (i = f.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", re, !1)
                        : i.attachEvent && i.attachEvent("onunload", re)),
                    (n.attributes = pe(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = pe(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Q.test(
                      f.getElementsByClassName
                    )),
                    (n.getById = pe(function (e) {
                      return (
                        (h.appendChild(e).id = w),
                        !f.getElementsByName || !f.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((o.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (o.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((o.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (o.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n,
                              o,
                              i,
                              r = t.getElementById(e);
                            if (r) {
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                              for (
                                i = t.getElementsByName(e), o = 0;
                                (r = i[o++]);

                              )
                                if (
                                  (n = r.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [r];
                            }
                            return [];
                          }
                        })),
                    (o.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            o = [],
                            i = 0,
                            r = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = r[i++]); )
                              1 === n.nodeType && o.push(n);
                            return o;
                          }
                          return r;
                        }),
                    (o.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (g = []),
                    (v = []),
                    (n.qsa = Q.test(f.querySelectorAll)) &&
                      (pe(function (e) {
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push("[*^$]=" + P + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            v.push("\\[" + P + "*(?:value|" + z + ")"),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            v.push("~="),
                          e.querySelectorAll(":checked").length ||
                            v.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            v.push(".#.+[+~]");
                      }),
                      pe(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            v.push("name" + P + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            v.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            v.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          v.push(",.*:");
                      })),
                    (n.matchesSelector = Q.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      pe(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          g.push("!=", F);
                      }),
                    (v = v.length && new RegExp(v.join("|"))),
                    (g = g.length && new RegExp(g.join("|"))),
                    (t = Q.test(h.compareDocumentPosition)),
                    (b =
                      t || Q.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              o = t && t.parentNode;
                            return (
                              e === o ||
                              !(
                                !o ||
                                1 !== o.nodeType ||
                                !(n.contains
                                  ? n.contains(o)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(o))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (O = t
                      ? function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var o =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            o ||
                            (1 &
                              (o =
                                (e.ownerDocument || e) ===
                                (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === o)
                              ? e === f || (e.ownerDocument === x && b(x, e))
                                ? -1
                                : t === f || (t.ownerDocument === x && b(x, t))
                                ? 1
                                : p
                                ? D(p, e) - D(p, t)
                                : 0
                              : 4 & o
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var n,
                            o = 0,
                            i = e.parentNode,
                            r = t.parentNode,
                            s = [e],
                            a = [t];
                          if (!i || !r)
                            return e === f
                              ? -1
                              : t === f
                              ? 1
                              : i
                              ? -1
                              : r
                              ? 1
                              : p
                              ? D(p, e) - D(p, t)
                              : 0;
                          if (i === r) return de(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; s[o] === a[o]; ) o++;
                          return o
                            ? de(s[o], a[o])
                            : s[o] === x
                            ? -1
                            : a[o] === x
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                ((e.ownerDocument || e) !== f && d(e),
                n.matchesSelector &&
                  m &&
                  !A[t + " "] &&
                  (!g || !g.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var o = y.call(e, t);
                  if (
                    o ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return o;
                } catch (e) {
                  A(t, !0);
                }
              return ae(t, f, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) !== f && d(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) !== f && d(e);
              var i = o.attrHandle[t.toLowerCase()],
                r =
                  i && L.call(o.attrHandle, t.toLowerCase())
                    ? i(e, t, !m)
                    : void 0;
              return void 0 !== r
                ? r
                : n.attributes || !m
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(oe, ie);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                o = [],
                i = 0,
                r = 0;
              if (
                ((u = !n.detectDuplicates),
                (p = !n.sortStable && e.slice(0)),
                e.sort(O),
                u)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (i = o.push(r));
                for (; i--; ) e.splice(o[i], 1);
              }
              return (p = null), e;
            }),
            (i = ae.getText =
              function (e) {
                var t,
                  n = "",
                  o = 0,
                  r = e.nodeType;
                if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[o++]); ) n += i(t);
                return n;
              }),
            ((o = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return V.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            X.test(n) &&
                            (t = s(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = T[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + P + ")" + e + "(" + P + "|$)"
                      )) &&
                        T(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (o) {
                      var i = ae.attr(o, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, o, i) {
                    var r = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === o && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            p,
                            u,
                            d,
                            f,
                            h,
                            m = r !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (v) {
                            if (r) {
                              for (; m; ) {
                                for (d = t; (d = d[m]); )
                                  if (
                                    a
                                      ? d.nodeName.toLowerCase() === g
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                h = m = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [s ? v.firstChild : v.lastChild]), s && y)
                            ) {
                              for (
                                b =
                                  (f =
                                    (c =
                                      (p =
                                        (u = (d = v)[w] || (d[w] = {}))[
                                          d.uniqueID
                                        ] || (u[d.uniqueID] = {}))[e] ||
                                      [])[0] === k && c[1]) && c[2],
                                  d = f && v.childNodes[f];
                                (d =
                                  (++f && d && d[m]) || (b = f = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++b && d === t) {
                                  p[e] = [k, f, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = f =
                                  (c =
                                    (p =
                                      (u = (d = t)[w] || (d[w] = {}))[
                                        d.uniqueID
                                      ] || (u[d.uniqueID] = {}))[e] ||
                                    [])[0] === k && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (d =
                                  (++f && d && d[m]) ||
                                  (b = f = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? d.nodeName.toLowerCase() !== g
                                  : 1 !== d.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((p =
                                      (u = d[w] || (d[w] = {}))[d.uniqueID] ||
                                      (u[d.uniqueID] = {}))[e] = [k, b]),
                                  d !== t));

                              );
                            return (b -= i) === o || (b % o == 0 && b / o >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        o.pseudos[e] ||
                        o.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return i[w]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        o.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var o, r = i(e, t), s = r.length; s--; )
                                e[(o = D(e, r[s]))] = !(n[o] = r[s]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      o = a(e.replace(B, "$1"));
                    return o[w]
                      ? ce(function (e, t, n, i) {
                          for (
                            var r, s = o(e, null, i, []), a = e.length;
                            a--;

                          )
                            (r = s[a]) && (e[a] = !(t[a] = r));
                        })
                      : function (e, i, r) {
                          return (
                            (t[0] = e),
                            o(t, null, r, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      U.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !o.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return K.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ve(function () {
                    return [0];
                  }),
                  last: ve(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ve(function (e, t, n) {
                    for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0; )
                      e.push(o);
                    return e;
                  }),
                  gt: ve(function (e, t, n) {
                    for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                    return e;
                  }),
                },
              }).pseudos.nth = o.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              o.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) o.pseudos[t] = he(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
              return o;
            }
            function we(e, t, n) {
              var o = t.dir,
                i = t.next,
                r = i || o,
                s = n && "parentNode" === r,
                a = S++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[o]); )
                      if (1 === t.nodeType || s) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      p,
                      u,
                      d = [k, a];
                    if (l) {
                      for (; (t = t[o]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[o]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((p =
                              (u = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (u[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[o] || t;
                          else {
                            if ((c = p[r]) && c[0] === k && c[1] === a)
                              return (d[2] = c[2]);
                            if (((p[r] = d), (d[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, o) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, o)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function ke(e, t, n, o, i) {
              for (
                var r, s = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (r = e[a]) &&
                  ((n && !n(r, o, i)) || (s.push(r), c && t.push(a)));
              return s;
            }
            function Se(e, t, n, o, i, r) {
              return (
                o && !o[w] && (o = Se(o)),
                i && !i[w] && (i = Se(i, r)),
                ce(function (r, s, a, l) {
                  var c,
                    p,
                    u,
                    d = [],
                    f = [],
                    h = s.length,
                    m =
                      r ||
                      (function (e, t, n) {
                        for (var o = 0, i = t.length; o < i; o++)
                          ae(e, t[o], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || (!r && t) ? m : ke(m, d, e, a, l),
                    g = n ? (i || (r ? e : h || o) ? [] : s) : v;
                  if ((n && n(v, g, a, l), o))
                    for (c = ke(g, f), o(c, [], a, l), p = c.length; p--; )
                      (u = c[p]) && (g[f[p]] = !(v[f[p]] = u));
                  if (r) {
                    if (i || e) {
                      if (i) {
                        for (c = [], p = g.length; p--; )
                          (u = g[p]) && c.push((v[p] = u));
                        i(null, (g = []), c, l);
                      }
                      for (p = g.length; p--; )
                        (u = g[p]) &&
                          (c = i ? D(r, u) : d[p]) > -1 &&
                          (r[c] = !(s[c] = u));
                    }
                  } else (g = ke(g === s ? g.splice(h, g.length) : g)), i ? i(null, s, g, l) : M.apply(s, g);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  n,
                  i,
                  r = e.length,
                  s = o.relative[e[0].type],
                  a = s || o.relative[" "],
                  l = s ? 1 : 0,
                  p = we(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  u = we(
                    function (e) {
                      return D(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  d = [
                    function (e, n, o) {
                      var i =
                        (!s && (o || n !== c)) ||
                        ((t = n).nodeType ? p(e, n, o) : u(e, n, o));
                      return (t = null), i;
                    },
                  ];
                l < r;
                l++
              )
                if ((n = o.relative[e[l].type])) d = [we(xe(d), n)];
                else {
                  if ((n = o.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (i = ++l; i < r && !o.relative[e[i].type]; i++);
                    return Se(
                      l > 1 && xe(d),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(B, "$1"),
                      n,
                      l < i && Te(e.slice(l, i)),
                      i < r && Te((e = e.slice(i))),
                      i < r && be(e)
                    );
                  }
                  d.push(n);
                }
              return xe(d);
            }
            return (
              (ye.prototype = o.filters = o.pseudos),
              (o.setFilters = new ye()),
              (s = ae.tokenize =
                function (e, t) {
                  var n,
                    i,
                    r,
                    s,
                    a,
                    l,
                    c,
                    p = C[e + " "];
                  if (p) return t ? 0 : p.slice(0);
                  for (a = e, l = [], c = o.preFilter; a; ) {
                    for (s in ((n && !(i = R.exec(a))) ||
                      (i && (a = a.slice(i[0].length) || a), l.push((r = []))),
                    (n = !1),
                    (i = _.exec(a)) &&
                      ((n = i.shift()),
                      r.push({ value: n, type: i[0].replace(B, " ") }),
                      (a = a.slice(n.length))),
                    o.filter))
                      !(i = V[s].exec(a)) ||
                        (c[s] && !(i = c[s](i))) ||
                        ((n = i.shift()),
                        r.push({ value: n, type: s, matches: i }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    i = [],
                    r = [],
                    a = E[e + " "];
                  if (!a) {
                    for (t || (t = s(e)), n = t.length; n--; )
                      (a = Te(t[n]))[w] ? i.push(a) : r.push(a);
                    (a = E(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          r = function (r, s, a, l, p) {
                            var u,
                              h,
                              v,
                              g = 0,
                              y = "0",
                              b = r && [],
                              w = [],
                              x = c,
                              S = r || (i && o.find.TAG("*", p)),
                              T = (k += null == x ? 1 : Math.random() || 0.1),
                              C = S.length;
                            for (
                              p && (c = s === f || s || p);
                              y !== C && null != (u = S[y]);
                              y++
                            ) {
                              if (i && u) {
                                for (
                                  h = 0,
                                    s ||
                                      u.ownerDocument === f ||
                                      (d(u), (a = !m));
                                  (v = e[h++]);

                                )
                                  if (v(u, s || f, a)) {
                                    l.push(u);
                                    break;
                                  }
                                p && (k = T);
                              }
                              n && ((u = !v && u) && g--, r && b.push(u));
                            }
                            if (((g += y), n && y !== g)) {
                              for (h = 0; (v = t[h++]); ) v(b, w, s, a);
                              if (r) {
                                if (g > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = $.call(l));
                                w = ke(w);
                              }
                              M.apply(l, w),
                                p &&
                                  !r &&
                                  w.length > 0 &&
                                  g + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return p && ((k = T), (c = x)), b;
                          };
                        return n ? ce(r) : r;
                      })(r, i)
                    )).selector = e;
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, i) {
                  var r,
                    l,
                    c,
                    p,
                    u,
                    d = "function" == typeof e && e,
                    f = !i && s((e = d.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (l = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      m &&
                      o.relative[l[1].type]
                    ) {
                      if (
                        !(t = (o.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      r = V.needsContext.test(e) ? 0 : l.length;
                      r-- && ((c = l[r]), !o.relative[(p = c.type)]);

                    )
                      if (
                        (u = o.find[p]) &&
                        (i = u(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ge(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(r, 1), !(e = i.length && be(l))))
                          return M.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (d || a(e, f))(
                      i,
                      t,
                      !m,
                      n,
                      !t || (ee.test(e) && ge(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(O).join("") === w),
              (n.detectDuplicates = !!u),
              d(),
              (n.sortDetached = pe(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              pe(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                pe(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              pe(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(z, function (e, t, n) {
                  var o;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (o = e.getAttributeNode(t)) && o.specified
                      ? o.value
                      : null;
                }),
              ae
            );
          })(i);
          (T.find = A),
            (T.expr = A.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = A.uniqueSort),
            (T.text = A.getText),
            (T.isXMLDoc = A.isXML),
            (T.contains = A.contains),
            (T.escapeSelector = A.escape);
          var O = function (e, t, n) {
              for (
                var o = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && T(e).is(n)) break;
                  o.push(e);
                }
              return o;
            },
            L = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            j = T.expr.match.needsContext;
          function $(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var N =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function M(e, t, n) {
            return b(t)
              ? T.grep(e, function (e, o) {
                  return !!t.call(e, o, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return d.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var o = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === o.nodeType
                ? T.find.matchesSelector(o, e)
                  ? [o]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  o = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < o; t++)
                        if (T.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < o; t++)
                  T.find(e, i[t], n);
                return o > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(M(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(M(this, e || [], !0));
              },
              is: function (e) {
                return !!M(
                  this,
                  "string" == typeof e && j.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var H,
            D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var o, i;
            if (!e) return this;
            if (((n = n || H), "string" == typeof e)) {
              if (
                !(o =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : D.exec(e)) ||
                (!o[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (o[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      o[1],
                      t && t.nodeType ? t.ownerDocument || t : a,
                      !0
                    )
                  ),
                  N.test(o[1]) && T.isPlainObject(t))
                )
                  for (o in t) b(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this;
              }
              return (
                (i = a.getElementById(o[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : b(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (H = T(a));
          var z = /^(?:parents|prev(?:Until|All))/,
            P = { children: !0, contents: !0, next: !0, prev: !0 };
          function q(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                o = 0,
                i = this.length,
                r = [],
                s = "string" != typeof e && T(e);
              if (!j.test(e))
                for (; o < i; o++)
                  for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      r.push(n);
                      break;
                    }
              return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? d.call(T(e), this[0])
                  : d.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return O(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return O(e, "parentNode", n);
                },
                next: function (e) {
                  return q(e, "nextSibling");
                },
                prev: function (e) {
                  return q(e, "previousSibling");
                },
                nextAll: function (e) {
                  return O(e, "nextSibling");
                },
                prevAll: function (e) {
                  return O(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return O(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return O(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return L((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return L(e.firstChild);
                },
                contents: function (e) {
                  return void 0 !== e.contentDocument
                    ? e.contentDocument
                    : ($(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (n, o) {
                  var i = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (o = n),
                    o && "string" == typeof o && (i = T.filter(o, i)),
                    this.length > 1 &&
                      (P[e] || T.uniqueSort(i), z.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var I = /[^\x20\t\r\n\f]+/g;
          function F(e) {
            return e;
          }
          function W(e) {
            throw e;
          }
          function B(e, t, n, o) {
            var i;
            try {
              e && b((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && b((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(o));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(I) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              o,
              i,
              r = [],
              s = [],
              a = -1,
              l = function () {
                for (i = i || e.once, o = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < r.length; )
                    !1 === r[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = r.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (r = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    r &&
                      (n && !t && ((a = r.length - 1), s.push(n)),
                      (function t(n) {
                        T.each(n, function (n, o) {
                          b(o)
                            ? (e.unique && c.has(o)) || r.push(o)
                            : o && o.length && "string" !== S(o) && t(o);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, r, n)) > -1; )
                        r.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function () {
                  return r && (r = []), this;
                },
                disable: function () {
                  return (i = s = []), (r = n = ""), this;
                },
                disabled: function () {
                  return !r;
                },
                lock: function () {
                  return (i = s = []), n || t || (r = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!o;
                },
              };
            return c;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, o) {
                          var i = b(e[o[4]]) && e[o[4]];
                          s[o[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && b(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[o[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var s = 0;
                      function a(e, t, n, r) {
                        return function () {
                          var l = this,
                            c = arguments,
                            p = function () {
                              var i, p;
                              if (!(e < s)) {
                                if ((i = n.apply(l, c)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (p =
                                  i &&
                                  ("object" === o(i) ||
                                    "function" == typeof i) &&
                                  i.then),
                                  b(p)
                                    ? r
                                      ? p.call(i, a(s, t, F, r), a(s, t, W, r))
                                      : (s++,
                                        p.call(
                                          i,
                                          a(s, t, F, r),
                                          a(s, t, W, r),
                                          a(s, t, F, t.notifyWith)
                                        ))
                                    : (n !== F && ((l = void 0), (c = [i])),
                                      (r || t.resolveWith)(l, c));
                              }
                            },
                            u = r
                              ? p
                              : function () {
                                  try {
                                    p();
                                  } catch (o) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(o, u.stackTrace),
                                      e + 1 >= s &&
                                        (n !== W && ((l = void 0), (c = [o])),
                                        t.rejectWith(l, c));
                                  }
                                };
                          e
                            ? u()
                            : (T.Deferred.getStackHook &&
                                (u.stackTrace = T.Deferred.getStackHook()),
                              i.setTimeout(u));
                        };
                      }
                      return T.Deferred(function (o) {
                        t[0][3].add(a(0, o, b(r) ? r : F, o.notifyWith)),
                          t[1][3].add(a(0, o, b(e) ? e : F)),
                          t[2][3].add(a(0, o, b(n) ? n : W));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, r) : r;
                    },
                  },
                  s = {};
                return (
                  T.each(t, function (e, o) {
                    var i = o[2],
                      a = o[5];
                    (r[o[1]] = i.add),
                      a &&
                        i.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      i.add(o[3].fire),
                      (s[o[0]] = function () {
                        return (
                          s[o[0] + "With"](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[o[0] + "With"] = i.fireWith);
                  }),
                  r.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  o = Array(n),
                  i = c.call(arguments),
                  r = T.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (o[e] = this),
                        (i[e] = arguments.length > 1 ? c.call(arguments) : n),
                        --t || r.resolveWith(o, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, r.done(s(n)).resolve, r.reject, !t),
                  "pending" === r.state() || b(i[n] && i[n].then))
                )
                  return r.then();
                for (; n--; ) B(i[n], s(n), r.reject);
                return r.promise();
              },
            });
          var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              R.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var _ = T.Deferred();
          function Y() {
            a.removeEventListener("DOMContentLoaded", Y),
              i.removeEventListener("load", Y),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              _.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || _.resolveWith(a, [T]));
              },
            }),
            (T.ready.then = _.then),
            "complete" === a.readyState ||
            ("loading" !== a.readyState && !a.documentElement.doScroll)
              ? i.setTimeout(T.ready)
              : (a.addEventListener("DOMContentLoaded", Y),
                i.addEventListener("load", Y));
          var X = function e(t, n, o, i, r, s, a) {
              var l = 0,
                c = t.length,
                p = null == o;
              if ("object" === S(o))
                for (l in ((r = !0), o)) e(t, n, l, o[l], !0, s, a);
              else if (
                void 0 !== i &&
                ((r = !0),
                b(i) || (a = !0),
                p &&
                  (a
                    ? (n.call(t, i), (n = null))
                    : ((p = n),
                      (n = function (e, t, n) {
                        return p.call(T(e), n);
                      }))),
                n)
              )
                for (; l < c; l++)
                  n(t[l], o, a ? i : i.call(t[l], l, n(t[l], o)));
              return r ? t : p ? n.call(t) : c ? n(t[0], o) : s;
            },
            U = /^-ms-/,
            V = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function K(e) {
            return e.replace(U, "ms-").replace(V, G);
          }
          var J = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
            this.expando = T.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    J(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var o,
                  i = this.cache(e);
                if ("string" == typeof t) i[K(t)] = n;
                else for (o in t) i[K(o)] = t[o];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][K(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  o = e[this.expando];
                if (void 0 !== o) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(K)
                      : (t = K(t)) in o
                      ? [t]
                      : t.match(I) || []).length;
                    for (; n--; ) delete o[t[n]];
                  }
                  (void 0 === t || T.isEmptyObject(o)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              },
            });
          var Z = new Q(),
            ee = new Q(),
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ne = /[A-Z]/g;
          function oe(e, t, n) {
            var o;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((o = "data-" + t.replace(ne, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(o)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : te.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                ee.set(e, t, n);
              } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return ee.hasData(e) || Z.hasData(e);
            },
            data: function (e, t, n) {
              return ee.access(e, t, n);
            },
            removeData: function (e, t) {
              ee.remove(e, t);
            },
            _data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function (e, t) {
              Z.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  s = this[0],
                  a = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = ee.get(s)),
                    1 === s.nodeType && !Z.get(s, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (i = a[n].name).indexOf("data-") &&
                        ((i = K(i.slice(5))), oe(s, i, r[i]));
                    Z.set(s, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" === o(e)
                  ? this.each(function () {
                      ee.set(this, e);
                    })
                  : X(
                      this,
                      function (t) {
                        var n;
                        if (s && void 0 === t)
                          return void 0 !== (n = ee.get(s, e))
                            ? n
                            : void 0 !== (n = oe(s, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          ee.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  ee.remove(this, e);
                });
              },
            }),
            T.extend({
              queue: function (e, t, n) {
                var o;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (o = Z.get(e, t)),
                    n &&
                      (!o || Array.isArray(n)
                        ? (o = Z.access(e, t, T.makeArray(n)))
                        : o.push(n)),
                    o || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  o = n.length,
                  i = n.shift(),
                  r = T._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), o--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    i.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      r
                    )),
                  !o && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  o = 1,
                  i = T.Deferred(),
                  r = this,
                  s = this.length,
                  a = function () {
                    --o || i.resolveWith(r, [r]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = Z.get(r[s], e + "queueHooks")) &&
                    n.empty &&
                    (o++, n.empty.add(a));
                return a(), i.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            se = ["Top", "Right", "Bottom", "Left"],
            ae = a.documentElement,
            le = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            ce = { composed: !0 };
          ae.getRootNode &&
            (le = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(ce) === e.ownerDocument
              );
            });
          var pe = function (e, t) {
              return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                  le(e) &&
                  "none" === T.css(e, "display"))
              );
            },
            ue = function (e, t, n, o) {
              var i,
                r,
                s = {};
              for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.apply(e, o || [])), t)) e.style[r] = s[r];
              return i;
            };
          function de(e, t, n, o) {
            var i,
              r,
              s = 20,
              a = o
                ? function () {
                    return o.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              p =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(T.css(e, t));
            if (p && p[3] !== c) {
              for (l /= 2, c = c || p[3], p = +l || 1; s--; )
                T.style(e, t, p + c),
                  (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
                  (p /= r);
              (p *= 2), T.style(e, t, p + c), (n = n || []);
            }
            return (
              n &&
                ((p = +p || +l || 0),
                (i = n[1] ? p + (n[1] + 1) * n[2] : +n[2]),
                o && ((o.unit = c), (o.start = p), (o.end = i))),
              i
            );
          }
          var fe = {};
          function he(e) {
            var t,
              n = e.ownerDocument,
              o = e.nodeName,
              i = fe[o];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(o))),
              (i = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (fe[o] = i),
              i)
            );
          }
          function me(e, t) {
            for (var n, o, i = [], r = 0, s = e.length; r < s; r++)
              (o = e[r]).style &&
                ((n = o.style.display),
                t
                  ? ("none" === n &&
                      ((i[r] = Z.get(o, "display") || null),
                      i[r] || (o.style.display = "")),
                    "" === o.style.display && pe(o) && (i[r] = he(o)))
                  : "none" !== n && ((i[r] = "none"), Z.set(o, "display", n)));
            for (r = 0; r < s; r++) null != i[r] && (e[r].style.display = i[r]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return me(this, !0);
            },
            hide: function () {
              return me(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    pe(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var ve = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i,
            be = {
              option: [1, "<select multiple='multiple'>", "</select>"],
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""],
            };
          function we(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && $(e, t)) ? T.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, o = e.length; n < o; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (be.optgroup = be.option),
            (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td);
          var ke,
            Se,
            Te = /<|&#?\w+;/;
          function Ce(e, t, n, o, i) {
            for (
              var r,
                s,
                a,
                l,
                c,
                p,
                u = t.createDocumentFragment(),
                d = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((r = e[f]) || 0 === r)
                if ("object" === S(r)) T.merge(d, r.nodeType ? [r] : r);
                else if (Te.test(r)) {
                  for (
                    s = s || u.appendChild(t.createElement("div")),
                      a = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
                      p = l[0];
                    p--;

                  )
                    s = s.lastChild;
                  T.merge(d, s.childNodes),
                    ((s = u.firstChild).textContent = "");
                } else d.push(t.createTextNode(r));
            for (u.textContent = "", f = 0; (r = d[f++]); )
              if (o && T.inArray(r, o) > -1) i && i.push(r);
              else if (
                ((c = le(r)),
                (s = we(u.appendChild(r), "script")),
                c && xe(s),
                n)
              )
                for (p = 0; (r = s[p++]); ) ye.test(r.type || "") && n.push(r);
            return u;
          }
          (ke = a.createDocumentFragment().appendChild(a.createElement("div"))),
            (Se = a.createElement("input")).setAttribute("type", "radio"),
            Se.setAttribute("checked", "checked"),
            Se.setAttribute("name", "t"),
            ke.appendChild(Se),
            (y.checkClone = ke.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ke.innerHTML = "<textarea>x</textarea>"),
            (y.noCloneChecked = !!ke.cloneNode(!0).lastChild.defaultValue);
          var Ee = /^key/,
            Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Oe = /^([^.]*)(?:\.(.+)|)/;
          function Le() {
            return !0;
          }
          function je() {
            return !1;
          }
          function $e(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return a.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ne(e, t, n, i, r, s) {
            var a, l;
            if ("object" === o(t)) {
              for (l in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Ne(e, l, n, i, t[l], s);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = je;
            else if (!r) return e;
            return (
              1 === s &&
                ((a = r),
                ((r = function (e) {
                  return T().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, r, i, n);
              })
            );
          }
          function Me(e, t, n) {
            n
              ? (Z.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var o,
                      i,
                      r = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r.length)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = c.call(arguments)),
                        Z.set(this, t, r),
                        (o = n(this, t)),
                        this[t](),
                        r !== (i = Z.get(this, t)) || o
                          ? Z.set(this, t, !1)
                          : (i = {}),
                        r !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i.value
                        );
                    } else
                      r.length &&
                        (Z.set(this, t, {
                          value: T.event.trigger(
                            T.extend(r[0], T.Event.prototype),
                            r.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Z.get(e, t) && T.event.add(e, t, Le);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, o, i) {
              var r,
                s,
                a,
                l,
                c,
                p,
                u,
                d,
                f,
                h,
                m,
                v = Z.get(e);
              if (v)
                for (
                  n.handler && ((n = (r = n).handler), (i = r.selector)),
                    i && T.find.matchesSelector(ae, i),
                    n.guid || (n.guid = T.guid++),
                    (l = v.events) || (l = v.events = {}),
                    (s = v.handle) ||
                      (s = v.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type
                            ? T.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(I) || [""]).length;
                  c--;

                )
                  (f = m = (a = Oe.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((u = T.event.special[f] || {}),
                      (f = (i ? u.delegateType : u.bindType) || f),
                      (u = T.event.special[f] || {}),
                      (p = T.extend(
                        {
                          type: f,
                          origType: m,
                          data: o,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && T.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        r
                      )),
                      (d = l[f]) ||
                        (((d = l[f] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, o, h, s)) ||
                          (e.addEventListener && e.addEventListener(f, s))),
                      u.add &&
                        (u.add.call(e, p),
                        p.handler.guid || (p.handler.guid = n.guid)),
                      i ? d.splice(d.delegateCount++, 0, p) : d.push(p),
                      (T.event.global[f] = !0));
            },
            remove: function (e, t, n, o, i) {
              var r,
                s,
                a,
                l,
                c,
                p,
                u,
                d,
                f,
                h,
                m,
                v = Z.hasData(e) && Z.get(e);
              if (v && (l = v.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--; )
                  if (
                    ((f = m = (a = Oe.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      u = T.event.special[f] || {},
                        d =
                          l[(f = (o ? u.delegateType : u.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = r = d.length;
                      r--;

                    )
                      (p = d[r]),
                        (!i && m !== p.origType) ||
                          (n && n.guid !== p.guid) ||
                          (a && !a.test(p.namespace)) ||
                          (o &&
                            o !== p.selector &&
                            ("**" !== o || !p.selector)) ||
                          (d.splice(r, 1),
                          p.selector && d.delegateCount--,
                          u.remove && u.remove.call(e, p));
                    s &&
                      !d.length &&
                      ((u.teardown && !1 !== u.teardown.call(e, h, v.handle)) ||
                        T.removeEvent(e, f, v.handle),
                      delete l[f]);
                  } else for (f in l) T.event.remove(e, f + t[c], n, o, !0);
                T.isEmptyObject(l) && Z.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                o,
                i,
                r,
                s,
                a = T.event.fix(e),
                l = new Array(arguments.length),
                c = (Z.get(this, "events") || {})[a.type] || [],
                p = T.event.special[a.type] || {};
              for (l[0] = a, t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
              if (
                ((a.delegateTarget = this),
                !p.preDispatch || !1 !== p.preDispatch.call(this, a))
              ) {
                for (
                  s = T.event.handlers.call(this, a, c), t = 0;
                  (i = s[t++]) && !a.isPropagationStopped();

                )
                  for (
                    a.currentTarget = i.elem, n = 0;
                    (r = i.handlers[n++]) && !a.isImmediatePropagationStopped();

                  )
                    (a.rnamespace &&
                      !1 !== r.namespace &&
                      !a.rnamespace.test(r.namespace)) ||
                      ((a.handleObj = r),
                      (a.data = r.data),
                      void 0 !==
                        (o = (
                          (T.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(i.elem, l)) &&
                        !1 === (a.result = o) &&
                        (a.preventDefault(), a.stopPropagation()));
                return p.postDispatch && p.postDispatch.call(this, a), a.result;
              }
            },
            handlers: function (e, t) {
              var n,
                o,
                i,
                r,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (r = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(i = (o = t[n]).selector + " ")] &&
                        (s[i] = o.needsContext
                          ? T(i, this).index(c) > -1
                          : T.find(i, this, null, [c]).length),
                        s[i] && r.push(o);
                    r.length && a.push({ elem: c, handlers: r });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: b(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Me(t, "click", Le),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Me(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ve.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Z.get(t, "click")) ||
                    $(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Le
                      : je),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: je,
              isPropagationStopped: je,
              isImmediatePropagationStopped: je,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Le),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Le),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Le),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                  var t = e.button;
                  return null == e.which && Ee.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && Ae.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                      ? 3
                      : 4 & t
                      ? 2
                      : 0
                    : e.which;
                },
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Me(this, e, $e), !1;
                },
                trigger: function () {
                  return Me(this, e), !0;
                },
                delegateType: t,
              };
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      o = this,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === o || T.contains(o, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, o) {
                return Ne(this, e, t, n, o);
              },
              one: function (e, t, n, o) {
                return Ne(this, e, t, n, o, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    T(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" === o(e)) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = je),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var He =
              /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            De = /<script|<style|<link/i,
            ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function qe(e, t) {
            return (
              ($(e, "table") &&
                $(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function Ie(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Fe(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function We(e, t) {
            var n, o, i, r, s, a, l, c;
            if (1 === t.nodeType) {
              if (
                Z.hasData(e) &&
                ((r = Z.access(e)), (s = Z.set(t, r)), (c = r.events))
              )
                for (i in (delete s.handle, (s.events = {}), c))
                  for (n = 0, o = c[i].length; n < o; n++)
                    T.event.add(t, i, c[i][n]);
              ee.hasData(e) &&
                ((a = ee.access(e)), (l = T.extend({}, a)), ee.set(t, l));
            }
          }
          function Be(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ve.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Re(e, t, n, o) {
            t = p.apply([], t);
            var i,
              r,
              s,
              a,
              l,
              c,
              u = 0,
              d = e.length,
              f = d - 1,
              h = t[0],
              m = b(h);
            if (
              m ||
              (d > 1 && "string" == typeof h && !y.checkClone && ze.test(h))
            )
              return e.each(function (i) {
                var r = e.eq(i);
                m && (t[0] = h.call(this, i, r.html())), Re(r, t, n, o);
              });
            if (
              d &&
              ((r = (i = Ce(t, e[0].ownerDocument, !1, e, o)).firstChild),
              1 === i.childNodes.length && (i = r),
              r || o)
            ) {
              for (a = (s = T.map(we(i, "script"), Ie)).length; u < d; u++)
                (l = i),
                  u !== f &&
                    ((l = T.clone(l, !0, !0)),
                    a && T.merge(s, we(l, "script"))),
                  n.call(e[u], l, u);
              if (a)
                for (
                  c = s[s.length - 1].ownerDocument, T.map(s, Fe), u = 0;
                  u < a;
                  u++
                )
                  (l = s[u]),
                    ye.test(l.type || "") &&
                      !Z.access(l, "globalEval") &&
                      T.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !l.noModule &&
                          T._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce"),
                          })
                        : k(l.textContent.replace(Pe, ""), l, c));
            }
            return e;
          }
          function _e(e, t, n) {
            for (
              var o, i = t ? T.filter(t, e) : e, r = 0;
              null != (o = i[r]);
              r++
            )
              n || 1 !== o.nodeType || T.cleanData(we(o)),
                o.parentNode &&
                  (n && le(o) && xe(we(o, "script")),
                  o.parentNode.removeChild(o));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e.replace(He, "<$1></$2>");
            },
            clone: function (e, t, n) {
              var o,
                i,
                r,
                s,
                a = e.cloneNode(!0),
                l = le(e);
              if (
                !(
                  y.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (s = we(a), o = 0, i = (r = we(e)).length; o < i; o++)
                  Be(r[o], s[o]);
              if (t)
                if (n)
                  for (
                    r = r || we(e), s = s || we(a), o = 0, i = r.length;
                    o < i;
                    o++
                  )
                    We(r[o], s[o]);
                else We(e, a);
              return (
                (s = we(a, "script")).length > 0 &&
                  xe(s, !l && we(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, o, i = T.event.special, r = 0;
                void 0 !== (n = e[r]);
                r++
              )
                if (J(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (o in t.events)
                        i[o]
                          ? T.event.remove(n, o)
                          : T.removeEvent(n, o, t.handle);
                    n[Z.expando] = void 0;
                  }
                  n[ee.expando] && (n[ee.expando] = void 0);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return _e(this, e, !0);
              },
              remove: function (e) {
                return _e(this, e);
              },
              text: function (e) {
                return X(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Re(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    qe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Re(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Re(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Re(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return X(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      o = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !De.test(e) &&
                      !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < o; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Re(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var n, o = [], i = T(e), r = i.length - 1, s = 0;
                    s <= r;
                    s++
                  )
                    (n = s === r ? this : this.clone(!0)),
                      T(i[s])[t](n),
                      u.apply(o, n.get());
                  return this.pushStack(o);
                };
              }
            );
          var Ye = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Xe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Ue = new RegExp(se.join("|"), "i");
          function Ve(e, t, n) {
            var o,
              i,
              r,
              s,
              a = e.style;
            return (
              (n = n || Xe(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                  le(e) ||
                  (s = T.style(e, t)),
                !y.pixelBoxStyles() &&
                  Ye.test(s) &&
                  Ue.test(t) &&
                  ((o = a.width),
                  (i = a.minWidth),
                  (r = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = o),
                  (a.minWidth = i),
                  (a.maxWidth = r))),
              void 0 !== s ? s + "" : s
            );
          }
          function Ge(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (p) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (p.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(c).appendChild(p);
                var e = i.getComputedStyle(p);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (p.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (p.style.position = "absolute"),
                  (r = 12 === t(p.offsetWidth / 3)),
                  ae.removeChild(c),
                  (p = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              r,
              s,
              l,
              c = a.createElement("div"),
              p = a.createElement("div");
            p.style &&
              ((p.style.backgroundClip = "content-box"),
              (p.cloneNode(!0).style.backgroundClip = ""),
              (y.clearCloneStyle = "content-box" === p.style.backgroundClip),
              T.extend(y, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), r;
                },
              }));
          })();
          var Ke = ["Webkit", "Moz", "ms"],
            Je = a.createElement("div").style,
            Qe = {};
          function Ze(e) {
            var t = T.cssProps[e] || Qe[e];
            return (
              t ||
              (e in Je
                ? e
                : (Qe[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ke.length;
                        n--;

                      )
                        if ((e = Ke[n] + t) in Je) return e;
                    })(e) || e))
            );
          }
          var et = /^(none|table(?!-c[ea]).+)/,
            tt = /^--/,
            nt = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            ot = { letterSpacing: "0", fontWeight: "400" };
          function it(e, t, n) {
            var o = re.exec(t);
            return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
          }
          function rt(e, t, n, o, i, r) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (o ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += T.css(e, n + se[s], !0, i)),
                o
                  ? ("content" === n &&
                      (l -= T.css(e, "padding" + se[s], !0, i)),
                    "margin" !== n &&
                      (l -= T.css(e, "border" + se[s] + "Width", !0, i)))
                  : ((l += T.css(e, "padding" + se[s], !0, i)),
                    "padding" !== n
                      ? (l += T.css(e, "border" + se[s] + "Width", !0, i))
                      : (a += T.css(e, "border" + se[s] + "Width", !0, i)));
            return (
              !o &&
                r >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function st(e, t, n) {
            var o = Xe(e),
              i =
                (!y.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, o),
              r = i,
              s = Ve(e, t, o),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ye.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!y.boxSizingReliable() && i) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === T.css(e, "display", !1, o))) &&
                e.getClientRects().length &&
                ((i = "border-box" === T.css(e, "boxSizing", !1, o)),
                (r = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                rt(e, t, n || (i ? "border" : "content"), r, o, s) +
                "px"
            );
          }
          function at(e, t, n, o, i) {
            return new at.prototype.init(e, t, n, o, i);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  s,
                  a,
                  l = K(t),
                  c = tt.test(t),
                  p = e.style;
                if (
                  (c || (t = Ze(l)),
                  (a = T.cssHooks[t] || T.cssHooks[l]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                    ? r
                    : p[t];
                "string" === (s = o(n)) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = de(e, t, r)), (s = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== s ||
                      c ||
                      (n += (r && r[3]) || (T.cssNumber[l] ? "" : "px")),
                    y.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (p[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                      (c ? p.setProperty(t, n) : (p[t] = n)));
              }
            },
            css: function (e, t, n, o) {
              var i,
                r,
                s,
                a = K(t);
              return (
                tt.test(t) || (t = Ze(a)),
                (s = T.cssHooks[t] || T.cssHooks[a]) &&
                  "get" in s &&
                  (i = s.get(e, !0, n)),
                void 0 === i && (i = Ve(e, t, o)),
                "normal" === i && t in ot && (i = ot[t]),
                "" === n || n
                  ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i)
                  : i
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, o) {
                  if (n)
                    return !et.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? st(e, t, o)
                      : ue(e, nt, function () {
                          return st(e, t, o);
                        });
                },
                set: function (e, n, o) {
                  var i,
                    r = Xe(e),
                    s = !y.scrollboxSize() && "absolute" === r.position,
                    a =
                      (s || o) && "border-box" === T.css(e, "boxSizing", !1, r),
                    l = o ? rt(e, t, o, a, r) : 0;
                  return (
                    a &&
                      s &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(r[t]) -
                          rt(e, t, "border", !1, r) -
                          0.5
                      )),
                    l &&
                      (i = re.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = T.css(e, t))),
                    it(0, n, l)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      ue(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (T.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var o = 0,
                        i = {},
                        r = "string" == typeof n ? n.split(" ") : [n];
                      o < 4;
                      o++
                    )
                      i[e + se[o] + t] = r[o] || r[o - 2] || r[0];
                    return i;
                  },
                }),
                  "margin" !== e && (T.cssHooks[e + t].set = it);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return X(
                  this,
                  function (e, t, n) {
                    var o,
                      i,
                      r = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (o = Xe(e), i = t.length; s < i; s++)
                        r[t[s]] = T.css(e, t[s], !1, o);
                      return r;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = at),
            (at.prototype = {
              constructor: at,
              init: function (e, t, n, o, i, r) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = o),
                  (this.unit = r || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = at.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : at.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = at.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : at.propHooks._default.set(this),
                  this
                );
              },
            }),
            (at.prototype.init.prototype = at.prototype),
            (at.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (at.propHooks.scrollTop = at.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = at.prototype.init),
            (T.fx.step = {});
          var lt,
            ct,
            pt = /^(?:toggle|show|hide)$/,
            ut = /queueHooks$/;
          function dt() {
            ct &&
              (!1 === a.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(dt)
                : i.setTimeout(dt, T.fx.interval),
              T.fx.tick());
          }
          function ft() {
            return (
              i.setTimeout(function () {
                lt = void 0;
              }),
              (lt = Date.now())
            );
          }
          function ht(e, t) {
            var n,
              o = 0,
              i = { height: e };
            for (t = t ? 1 : 0; o < 4; o += 2 - t)
              i["margin" + (n = se[o])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function mt(e, t, n) {
            for (
              var o,
                i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]),
                r = 0,
                s = i.length;
              r < s;
              r++
            )
              if ((o = i[r].call(n, t, e))) return o;
          }
          function vt(e, t, n) {
            var o,
              i,
              r = 0,
              s = vt.prefilters.length,
              a = T.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (i) return !1;
                for (
                  var t = lt || ft(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    o = 1 - (n / c.duration || 0),
                    r = 0,
                    s = c.tweens.length;
                  r < s;
                  r++
                )
                  c.tweens[r].run(o);
                return (
                  a.notifyWith(e, [c, o, n]),
                  o < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: lt || ft(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var o = T.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(o), o;
                },
                stop: function (t) {
                  var n = 0,
                    o = t ? c.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < o; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              p = c.props;
            for (
              !(function (e, t) {
                var n, o, i, r, s;
                for (n in e)
                  if (
                    ((i = t[(o = K(n))]),
                    (r = e[n]),
                    Array.isArray(r) && ((i = r[1]), (r = e[n] = r[0])),
                    n !== o && ((e[o] = r), delete e[n]),
                    (s = T.cssHooks[o]) && ("expand" in s))
                  )
                    for (n in ((r = s.expand(r)), delete e[o], r))
                      (n in e) || ((e[n] = r[n]), (t[n] = i));
                  else t[o] = i;
              })(p, c.opts.specialEasing);
              r < s;
              r++
            )
              if ((o = vt.prefilters[r].call(c, e, p, c.opts)))
                return (
                  b(o.stop) &&
                    (T._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)),
                  o
                );
            return (
              T.map(p, mt, c),
              b(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              T.fx.timer(
                T.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (T.Animation = T.extend(vt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return de(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              b(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
              for (var n, o = 0, i = e.length; o < i; o++)
                (n = e[o]),
                  (vt.tweeners[n] = vt.tweeners[n] || []),
                  vt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var o,
                  i,
                  r,
                  s,
                  a,
                  l,
                  c,
                  p,
                  u = "width" in t || "height" in t,
                  d = this,
                  f = {},
                  h = e.style,
                  m = e.nodeType && pe(e),
                  v = Z.get(e, "fxshow");
                for (o in (n.queue ||
                  (null == (s = T._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[o]), pt.test(i))) {
                    if (
                      (delete t[o],
                      (r = r || "toggle" === i),
                      i === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !v || void 0 === v[o]) continue;
                      m = !0;
                    }
                    f[o] = (v && v[o]) || T.style(e, o);
                  }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                  for (o in (u &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = v && v.display) && (c = Z.get(e, "display")),
                    "none" === (p = T.css(e, "display")) &&
                      (c
                        ? (p = c)
                        : (me([e], !0),
                          (c = e.style.display || c),
                          (p = T.css(e, "display")),
                          me([e]))),
                    ("inline" === p || ("inline-block" === p && null != c)) &&
                      "none" === T.css(e, "float") &&
                      (l ||
                        (d.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((p = h.display), (c = "none" === p ? "" : p))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (v
                        ? "hidden" in v && (m = v.hidden)
                        : (v = Z.access(e, "fxshow", { display: c })),
                      r && (v.hidden = !m),
                      m && me([e], !0),
                      d.done(function () {
                        for (o in (m || me([e]), Z.remove(e, "fxshow"), f))
                          T.style(e, o, f[o]);
                      })),
                      (l = mt(m ? v[o] : 0, o, d)),
                      o in v ||
                        ((v[o] = l.start),
                        m && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, n) {
              var i =
                e && "object" === o(e)
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (b(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !b(t) && t),
                    };
              return (
                T.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in T.fx.speeds
                      ? (i.duration = T.fx.speeds[i.duration])
                      : (i.duration = T.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  b(i.old) && i.old.call(this),
                    i.queue && T.dequeue(this, i.queue);
                }),
                i
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, o) {
                return this.filter(pe)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, o);
              },
              animate: function (e, t, n, o) {
                var i = T.isEmptyObject(e),
                  r = T.speed(t, n, o),
                  s = function () {
                    var t = vt(this, T.extend({}, e), r);
                    (i || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  i || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                );
              },
              stop: function (e, t, n) {
                var o = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && !1 !== e && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      r = T.timers,
                      s = Z.get(this);
                    if (i) s[i] && s[i].stop && o(s[i]);
                    else
                      for (i in s) s[i] && s[i].stop && ut.test(i) && o(s[i]);
                    for (i = r.length; i--; )
                      r[i].elem !== this ||
                        (null != e && r[i].queue !== e) ||
                        (r[i].anim.stop(n), (t = !1), r.splice(i, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Z.get(this),
                      o = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      r = T.timers,
                      s = o ? o.length : 0;
                    for (
                      n.finish = !0,
                        T.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = r.length;
                      t--;

                    )
                      r[t].elem === this &&
                        r[t].queue === e &&
                        (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++)
                      o[t] && o[t].finish && o[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, o, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ht(t, !0), e, o, i);
              };
            }),
            T.each(
              {
                slideDown: ht("show"),
                slideUp: ht("hide"),
                slideToggle: ht("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, n, o) {
                  return this.animate(t, e, n, o);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (lt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (lt = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              ct || ((ct = !0), dt());
            }),
            (T.fx.stop = function () {
              ct = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = a.createElement("input"),
                t = a
                  .createElement("select")
                  .appendChild(a.createElement("option"));
              (e.type = "checkbox"),
                (y.checkOn = "" !== e.value),
                (y.optSelected = t.selected),
                ((e = a.createElement("input")).value = "t"),
                (e.type = "radio"),
                (y.radioValue = "t" === e.value);
            })();
          var gt,
            yt = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return X(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, n) {
                var o,
                  i,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === r && T.isXMLDoc(e)) ||
                        (i =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? gt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (o = i.set(e, n, t))
                          ? o
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (o = i.get(e, t))
                        ? o
                        : null == (o = T.find.attr(e, t))
                        ? void 0
                        : o);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!y.radioValue && "radio" === t && $(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  o = 0,
                  i = t && t.match(I);
                if (i && 1 === e.nodeType)
                  for (; (n = i[o++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = yt[t] || T.find.attr;
              yt[t] = function (e, t, o) {
                var i,
                  r,
                  s = t.toLowerCase();
                return (
                  o ||
                    ((r = yt[s]),
                    (yt[s] = i),
                    (i = null != n(e, t, o) ? s : null),
                    (yt[s] = r)),
                  i
                );
              };
            });
          var bt = /^(?:input|select|textarea|button)$/i,
            wt = /^(?:a|area)$/i;
          function xt(e) {
            return (e.match(I) || []).join(" ");
          }
          function kt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function St(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(I)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return X(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, n) {
                var o,
                  i,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                        ? o
                        : (e[t] = n)
                      : i && "get" in i && null !== (o = i.get(e, t))
                      ? o
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            y.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  o,
                  i,
                  r,
                  s,
                  a,
                  l = 0;
                if (b(e))
                  return this.each(function (t) {
                    T(this).addClass(e.call(this, t, kt(this)));
                  });
                if ((t = St(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = kt(n)), (o = 1 === n.nodeType && " " + xt(i) + " "))
                    ) {
                      for (s = 0; (r = t[s++]); )
                        o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                      i !== (a = xt(o)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  o,
                  i,
                  r,
                  s,
                  a,
                  l = 0;
                if (b(e))
                  return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, kt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = St(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = kt(n)), (o = 1 === n.nodeType && " " + xt(i) + " "))
                    ) {
                      for (s = 0; (r = t[s++]); )
                        for (; o.indexOf(" " + r + " ") > -1; )
                          o = o.replace(" " + r + " ", " ");
                      i !== (a = xt(o)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = o(e),
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : b(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, kt(this), t), t);
                    })
                  : this.each(function () {
                      var t, o, r, s;
                      if (i)
                        for (o = 0, r = T(this), s = St(e); (t = s[o++]); )
                          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = kt(this)) && Z.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  o = 0;
                for (t = " " + e + " "; (n = this[o++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + xt(kt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Tt = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                o,
                i = this[0];
              return arguments.length
                ? ((o = b(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = o ? e.call(this, n, T(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = T.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    T.valHooks[i.type] ||
                    T.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(Tt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : xt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      o,
                      i = e.options,
                      r = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? r + 1 : i.length;
                    for (o = r < 0 ? l : s ? r : 0; o < l; o++)
                      if (
                        ((n = i[o]).selected || o === r) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))
                      ) {
                        if (((t = T(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, o, i = e.options, r = T.makeArray(t), s = i.length;
                      s--;

                    )
                      ((o = i[s]).selected =
                        T.inArray(T.valHooks.option.get(o), r) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                y.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (y.focusin = "onfocusin" in i);
          var Ct = /^(?:focusinfocus|focusoutblur)$/,
            Et = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, r) {
              var s,
                l,
                c,
                p,
                u,
                d,
                f,
                h,
                v = [n || a],
                g = m.call(e, "type") ? e.type : e,
                y = m.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((l = h = c = n = n || a),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Ct.test(g + T.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((y = g.split(".")), (g = y.shift()), y.sort()),
                  (u = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(g, "object" === o(e) && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = y.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (f = T.event.special[g] || {}),
                  r || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!r && !f.noBubble && !w(n)) {
                  for (
                    p = f.delegateType || g,
                      Ct.test(p + g) || (l = l.parentNode);
                    l;
                    l = l.parentNode
                  )
                    v.push(l), (c = l);
                  c === (n.ownerDocument || a) &&
                    v.push(c.defaultView || c.parentWindow || i);
                }
                for (s = 0; (l = v[s++]) && !e.isPropagationStopped(); )
                  (h = l),
                    (e.type = s > 1 ? p : f.bindType || g),
                    (d =
                      (Z.get(l, "events") || {})[e.type] &&
                      Z.get(l, "handle")) && d.apply(l, t),
                    (d = u && l[u]) &&
                      d.apply &&
                      J(l) &&
                      ((e.result = d.apply(l, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  r ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(v.pop(), t)) ||
                    !J(n) ||
                    (u &&
                      b(n[g]) &&
                      !w(n) &&
                      ((c = n[u]) && (n[u] = null),
                      (T.event.triggered = g),
                      e.isPropagationStopped() && h.addEventListener(g, Et),
                      n[g](),
                      e.isPropagationStopped() && h.removeEventListener(g, Et),
                      (T.event.triggered = void 0),
                      c && (n[u] = c))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var o = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(o, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              },
            }),
            y.focusin ||
              T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  T.event.simulate(t, e.target, T.event.fix(e));
                };
                T.event.special[t] = {
                  setup: function () {
                    var o = this.ownerDocument || this,
                      i = Z.access(o, t);
                    i || o.addEventListener(e, n, !0),
                      Z.access(o, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var o = this.ownerDocument || this,
                      i = Z.access(o, t) - 1;
                    i
                      ? Z.access(o, t, i)
                      : (o.removeEventListener(e, n, !0), Z.remove(o, t));
                  },
                };
              });
          var At = i.location,
            Ot = Date.now(),
            Lt = /\?/;
          T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
              t = void 0;
            }
            return (
              (t && !t.getElementsByTagName("parsererror").length) ||
                T.error("Invalid XML: " + e),
              t
            );
          };
          var jt = /\[\]$/,
            $t = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function Ht(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              T.each(t, function (t, r) {
                n || jt.test(e)
                  ? i(e, r)
                  : Ht(
                      e + "[" + ("object" === o(r) && null != r ? t : "") + "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== S(t)) i(e, t);
            else for (r in t) Ht(e + "[" + r + "]", t[r], n, i);
          }
          (T.param = function (e, t) {
            var n,
              o = [],
              i = function (e, t) {
                var n = b(t) ? t() : t;
                o[o.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Ht(n, e[n], t, i);
            return o.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !Nt.test(e) &&
                      (this.checked || !ve.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace($t, "\r\n") };
                        })
                      : { name: t.name, value: n.replace($t, "\r\n") };
                  })
                  .get();
              },
            });
          var Dt = /%20/g,
            zt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            Ft = /^\/\//,
            Wt = {},
            Bt = {},
            Rt = "*/".concat("*"),
            _t = a.createElement("a");
          function Yt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var o,
                i = 0,
                r = t.toLowerCase().match(I) || [];
              if (b(n))
                for (; (o = r[i++]); )
                  "+" === o[0]
                    ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(n))
                    : (e[o] = e[o] || []).push(n);
            };
          }
          function Xt(e, t, n, o) {
            var i = {},
              r = e === Bt;
            function s(a) {
              var l;
              return (
                (i[a] = !0),
                T.each(e[a] || [], function (e, a) {
                  var c = a(t, n, o);
                  return "string" != typeof c || r || i[c]
                    ? r
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!i["*"] && s("*"));
          }
          function Ut(e, t) {
            var n,
              o,
              i = T.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
            return o && T.extend(!0, e, o), e;
          }
          (_t.href = At.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    At.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Rt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e);
              },
              ajaxPrefilter: Yt(Wt),
              ajaxTransport: Yt(Bt),
              ajax: function (e, t) {
                "object" === o(e) && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  s,
                  l,
                  c,
                  p,
                  u,
                  d,
                  f,
                  h,
                  m = T.ajaxSetup({}, t),
                  v = m.context || m,
                  g = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                  y = T.Deferred(),
                  b = T.Callbacks("once memory"),
                  w = m.statusCode || {},
                  x = {},
                  k = {},
                  S = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!l)
                          for (l = {}; (t = qt.exec(s)); )
                            l[t[1].toLowerCase() + " "] = (
                              l[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = l[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = k[e.toLowerCase()] = k[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (m.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) C.always(e[C.status]);
                        else for (t in e) w[t] = [w[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || S;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (y.promise(C),
                  (m.url = ((e || m.url || At.href) + "").replace(
                    Ft,
                    At.protocol + "//"
                  )),
                  (m.type = t.method || t.type || m.method || m.type),
                  (m.dataTypes = (m.dataType || "*").toLowerCase().match(I) || [
                    "",
                  ]),
                  null == m.crossDomain)
                ) {
                  p = a.createElement("a");
                  try {
                    (p.href = m.url),
                      (p.href = p.href),
                      (m.crossDomain =
                        _t.protocol + "//" + _t.host !=
                        p.protocol + "//" + p.host);
                  } catch (e) {
                    m.crossDomain = !0;
                  }
                }
                if (
                  (m.data &&
                    m.processData &&
                    "string" != typeof m.data &&
                    (m.data = T.param(m.data, m.traditional)),
                  Xt(Wt, m, t, C),
                  u)
                )
                  return C;
                for (f in ((d = T.event && m.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (m.type = m.type.toUpperCase()),
                (m.hasContent = !It.test(m.type)),
                (r = m.url.replace(zt, "")),
                m.hasContent
                  ? m.data &&
                    m.processData &&
                    0 ===
                      (m.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (m.data = m.data.replace(Dt, "+"))
                  : ((h = m.url.slice(r.length)),
                    m.data &&
                      (m.processData || "string" == typeof m.data) &&
                      ((r += (Lt.test(r) ? "&" : "?") + m.data), delete m.data),
                    !1 === m.cache &&
                      ((r = r.replace(Pt, "$1")),
                      (h = (Lt.test(r) ? "&" : "?") + "_=" + Ot++ + h)),
                    (m.url = r + h)),
                m.ifModified &&
                  (T.lastModified[r] &&
                    C.setRequestHeader("If-Modified-Since", T.lastModified[r]),
                  T.etag[r] && C.setRequestHeader("If-None-Match", T.etag[r])),
                ((m.data && m.hasContent && !1 !== m.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", m.contentType),
                C.setRequestHeader(
                  "Accept",
                  m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                    ? m.accepts[m.dataTypes[0]] +
                        ("*" !== m.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
                    : m.accepts["*"]
                ),
                m.headers))
                  C.setRequestHeader(f, m.headers[f]);
                if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || u))
                  return C.abort();
                if (
                  ((S = "abort"),
                  b.add(m.complete),
                  C.done(m.success),
                  C.fail(m.error),
                  (n = Xt(Bt, m, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), d && g.trigger("ajaxSend", [C, m]), u)
                  )
                    return C;
                  m.async &&
                    m.timeout > 0 &&
                    (c = i.setTimeout(function () {
                      C.abort("timeout");
                    }, m.timeout));
                  try {
                    (u = !1), n.send(x, E);
                  } catch (e) {
                    if (u) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, o, a) {
                  var l,
                    p,
                    f,
                    h,
                    x,
                    k = t;
                  u ||
                    ((u = !0),
                    c && i.clearTimeout(c),
                    (n = void 0),
                    (s = a || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (l = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (h = (function (e, t, n) {
                        for (
                          var o, i, r, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === o &&
                              (o =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (o)
                          for (i in a)
                            if (a[i] && a[i].test(o)) {
                              l.unshift(i);
                              break;
                            }
                        if (l[0] in n) r = l[0];
                        else {
                          for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                              r = i;
                              break;
                            }
                            s || (s = i);
                          }
                          r = r || s;
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r];
                      })(m, C, o)),
                    (h = (function (e, t, n, o) {
                      var i,
                        r,
                        s,
                        a,
                        l,
                        c = {},
                        p = e.dataTypes.slice();
                      if (p[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (r = p.shift(); r; )
                        if (
                          (e.responseFields[r] && (n[e.responseFields[r]] = t),
                          !l &&
                            o &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = r),
                          (r = p.shift()))
                        )
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                              for (i in c)
                                if (
                                  (a = i.split(" "))[1] === r &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[i])
                                    : !0 !== c[i] &&
                                      ((r = a[0]), p.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(m, h, C, l)),
                    l
                      ? (m.ifModified &&
                          ((x = C.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[r] = x),
                          (x = C.getResponseHeader("etag")) && (T.etag[r] = x)),
                        204 === e || "HEAD" === m.type
                          ? (k = "nocontent")
                          : 304 === e
                          ? (k = "notmodified")
                          : ((k = h.state), (p = h.data), (l = !(f = h.error))))
                      : ((f = k),
                        (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || k) + ""),
                    l
                      ? y.resolveWith(v, [p, k, C])
                      : y.rejectWith(v, [C, k, f]),
                    C.statusCode(w),
                    (w = void 0),
                    d &&
                      g.trigger(l ? "ajaxSuccess" : "ajaxError", [
                        C,
                        m,
                        l ? p : f,
                      ]),
                    b.fireWith(v, [C, k]),
                    d &&
                      (g.trigger("ajaxComplete", [C, m]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, o, i) {
                return (
                  b(n) && ((i = i || o), (o = n), (n = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: i, data: n, success: o },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            (T._evalUrl = function (e, t) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (b(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return b(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = b(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            Gt = T.ajaxSettings.xhr();
          (y.cors = !!Gt && "withCredentials" in Gt),
            (y.ajax = Gt = !!Gt),
            T.ajaxTransport(function (e) {
              var t, n;
              if (y.cors || (Gt && !e.crossDomain))
                return {
                  send: function (o, r) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      a.setRequestHeader(s, o[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? r(0, "error")
                              : r(a.status, a.statusText)
                            : r(
                                Vt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (o, i) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      a.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Kt,
            Jt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Jt.pop() || T.expando + "_" + Ot++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                r,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Qt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Qt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Qt, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return s || T.error(o + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = i[o]),
                  (i[o] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === r ? T(i).removeProp(o) : (i[o] = r),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(o)),
                      s && b(r) && r(s[0]),
                      (s = r = void 0);
                  }),
                  "script"
                );
            }),
            (y.createHTMLDocument =
              (((Kt = a.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Kt.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (y.createHTMLDocument
                      ? (((o = (t =
                          a.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = a.location.href),
                        t.head.appendChild(o))
                      : (t = a)),
                  (r = !n && []),
                  (i = N.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Ce([e], t, r)),
                      r && r.length && T(r).remove(),
                      T.merge([], i.childNodes)));
              var o, i, r;
            }),
            (T.fn.load = function (e, t, n) {
              var i,
                r,
                s,
                a = this,
                l = e.indexOf(" ");
              return (
                l > -1 && ((i = xt(e.slice(l))), (e = e.slice(0, l))),
                b(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" === o(t) && (r = "POST"),
                a.length > 0 &&
                  T.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (s = arguments),
                        a.html(
                          i ? T("<div>").append(T.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var o,
                  i,
                  r,
                  s,
                  a,
                  l,
                  c = T.css(e, "position"),
                  p = T(e),
                  u = {};
                "static" === c && (e.style.position = "relative"),
                  (a = p.offset()),
                  (r = T.css(e, "top")),
                  (l = T.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (r + l).indexOf("auto") > -1
                    ? ((s = (o = p.position()).top), (i = o.left))
                    : ((s = parseFloat(r) || 0), (i = parseFloat(l) || 0)),
                  b(t) && (t = t.call(e, n, T.extend({}, a))),
                  null != t.top && (u.top = t.top - a.top + s),
                  null != t.left && (u.left = t.left - a.left + i),
                  "using" in t ? t.using.call(e, u) : p.css(u);
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  o = this[0];
                return o
                  ? o.getClientRects().length
                    ? ((t = o.getBoundingClientRect()),
                      (n = o.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    o = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === T.css(o, "position"))
                    t = o.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = o.ownerDocument,
                        e = o.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== o &&
                      1 === e.nodeType &&
                      (((i = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - T.css(o, "marginTop", !0),
                    left: t.left - i.left - T.css(o, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (o) {
                  return X(
                    this,
                    function (e, o, i) {
                      var r;
                      if (
                        (w(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === i)
                      )
                        return r ? r[t] : e[o];
                      r
                        ? r.scrollTo(
                            n ? r.pageXOffset : i,
                            n ? i : r.pageYOffset
                          )
                        : (e[o] = i);
                    },
                    e,
                    o,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = Ge(y.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), Ye.test(n) ? T(e).position()[t] + "px" : n
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, o) {
                  T.fn[o] = function (i, r) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                      a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return X(
                      this,
                      function (t, n, i) {
                        var r;
                        return w(t)
                          ? 0 === o.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              r["scroll" + e],
                              t.body["offset" + e],
                              r["offset" + e],
                              r["client" + e]
                            ))
                          : void 0 === i
                          ? T.css(t, n, a)
                          : T.style(t, n, i, a);
                      },
                      t,
                      s ? i : void 0,
                      s
                    );
                  };
                }
              );
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            ),
            T.fn.extend({
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, o) {
                return this.on(t, e, n, o);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
            }),
            (T.proxy = function (e, t) {
              var n, o, i;
              if (
                ("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e))
              )
                return (
                  (o = c.call(arguments, 2)),
                  ((i = function () {
                    return e.apply(t || this, o.concat(c.call(arguments)));
                  }).guid = e.guid =
                    e.guid || T.guid++),
                  i
                );
            }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = $),
            (T.isFunction = b),
            (T.isWindow = w),
            (T.camelCase = K),
            (T.type = S),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            void 0 ===
              (n = function () {
                return T;
              }.apply(t, [])) || (e.exports = n);
          var Zt = i.jQuery,
            en = i.$;
          return (
            (T.noConflict = function (e) {
              return (
                i.$ === T && (i.$ = en),
                e && i.jQuery === T && (i.jQuery = Zt),
                T
              );
            }),
            r || (i.jQuery = i.$ = T),
            T
          );
        });
      }.call(this, n(5)(e)));
    },
    ,
    function (e, t, n) {
      "use strict";
      t.a = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (void 0 === t || isNaN(t)) throw Error("maxHeight is required");
        var o = "string" == typeof e ? document.querySelectorAll(e) : e;
        if (o) {
          var i = n.character || "…",
            r = n.classname || "js-shave",
            s = "boolean" != typeof n.spaces || n.spaces,
            a = '<span class="js-shave-char">'.concat(i, "</span>");
          "length" in o || (o = [o]);
          for (var l = 0; l < o.length; l += 1) {
            var c = o[l],
              p = c.style,
              u = c.querySelector(".".concat(r)),
              d = void 0 === c.textContent ? "innerText" : "textContent";
            u &&
              (c.removeChild(c.querySelector(".js-shave-char")), (c[d] = c[d]));
            var f = c[d],
              h = s ? f.split(" ") : f;
            if (!(h.length < 2)) {
              var m = p.height;
              p.height = "auto";
              var v = p.maxHeight;
              if (((p.maxHeight = "none"), c.offsetHeight <= t))
                (p.height = m), (p.maxHeight = v);
              else {
                for (var g = h.length - 1, y = 0, b = void 0; y < g; )
                  (b = (y + g + 1) >> 1),
                    (c[d] = s ? h.slice(0, b).join(" ") : h.slice(0, b)),
                    c.insertAdjacentHTML("beforeend", a),
                    c.offsetHeight > t ? (g = b - 1) : (y = b);
                (c[d] = s ? h.slice(0, g).join(" ") : h.slice(0, g)),
                  c.insertAdjacentHTML("beforeend", a);
                var w = s ? " ".concat(h.slice(g).join(" ")) : h.slice(g),
                  x = document.createTextNode(w),
                  k = document.createElement("span");
                k.classList.add(r),
                  (k.style.display = "none"),
                  k.appendChild(x),
                  c.insertAdjacentElement("beforeend", k),
                  (p.height = m),
                  (p.maxHeight = v);
              }
            }
          }
        }
      };
    },
    function (e, t, n) {
      "use strict";
      var o =
          Object.assign ||
          function (e) {
            for (var t, n = 1; n < arguments.length; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          },
        i = function (e) {
          return "IMG" === e.tagName;
        },
        r = function (e) {
          return e && 1 === e.nodeType;
        },
        s = function (e) {
          return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
        },
        a = function (e) {
          try {
            return Array.isArray(e)
              ? e.filter(i)
              : (function (e) {
                  return NodeList.prototype.isPrototypeOf(e);
                })(e)
              ? [].slice.call(e).filter(i)
              : r(e)
              ? [e].filter(i)
              : "string" == typeof e
              ? [].slice.call(document.querySelectorAll(e)).filter(i)
              : [];
          } catch (e) {
            throw new TypeError(
              "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
            );
          }
        },
        l = function (e) {
          var t = document.createElement("div");
          return (
            t.classList.add("medium-zoom-overlay"), (t.style.background = e), t
          );
        },
        c = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.top,
            o = t.left,
            i = t.width,
            r = t.height,
            s = e.cloneNode(),
            a =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0,
            l =
              window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
          return (
            s.removeAttribute("id"),
            (s.style.position = "absolute"),
            (s.style.top = n + a + "px"),
            (s.style.left = o + l + "px"),
            (s.style.width = i + "px"),
            (s.style.height = r + "px"),
            (s.style.transform = ""),
            s
          );
        },
        p = function (e, t) {
          var n = o({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
          if ("function" == typeof window.CustomEvent)
            return new CustomEvent(e, n);
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), i;
        };
      !(function (e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
          var o = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          (i.type = "text/css"),
            "top" === n && o.firstChild
              ? o.insertBefore(i, o.firstChild)
              : o.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = e)
              : i.appendChild(document.createTextNode(e));
        }
      })(
        ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"
      ),
        (t.a = function e(t) {
          var n =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i =
              window.Promise ||
              function (e) {
                function t() {}
                e(t, t);
              },
            u = function (e) {
              var t = e.target;
              return t === j
                ? void w()
                : void (-1 === T.indexOf(t) || x({ target: t }));
            },
            d = function () {
              if (!E && L.original) {
                var e =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
                Math.abs(A - e) > O.scrollOffset && setTimeout(w, 150);
              }
            },
            f = function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e;
              if (
                (e.background && (j.style.background = e.background),
                e.container &&
                  e.container instanceof Object &&
                  (t.container = o({}, O.container, e.container)),
                e.template)
              ) {
                var n = r(e.template)
                  ? e.template
                  : document.querySelector(e.template);
                t.template = n;
              }
              return (
                (O = o({}, O, t)),
                T.forEach(function (e) {
                  e.dispatchEvent(
                    p("medium-zoom:update", { detail: { zoom: $ } })
                  );
                }),
                $
              );
            },
            h = function () {
              var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return e(o({}, O, t));
            },
            m = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              var o = t.reduce(function (e, t) {
                return [].concat(e, a(t));
              }, []);
              return (
                o
                  .filter(function (e) {
                    return -1 === T.indexOf(e);
                  })
                  .forEach(function (e) {
                    T.push(e), e.classList.add("medium-zoom-image");
                  }),
                C.forEach(function (e) {
                  var t = e.type,
                    n = e.listener,
                    i = e.options;
                  o.forEach(function (e) {
                    e.addEventListener(t, n, i);
                  });
                }),
                $
              );
            },
            v = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              L.zoomed && w();
              var o =
                0 < t.length
                  ? t.reduce(function (e, t) {
                      return [].concat(e, a(t));
                    }, [])
                  : T;
              return (
                o.forEach(function (e) {
                  e.classList.remove("medium-zoom-image"),
                    e.dispatchEvent(
                      p("medium-zoom:detach", { detail: { zoom: $ } })
                    );
                }),
                (T = T.filter(function (e) {
                  return -1 === o.indexOf(e);
                })),
                $
              );
            },
            g = function (e, t) {
              var n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return (
                T.forEach(function (o) {
                  o.addEventListener("medium-zoom:" + e, t, n);
                }),
                C.push({ type: "medium-zoom:" + e, listener: t, options: n }),
                $
              );
            },
            y = function (e, t) {
              var n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return (
                T.forEach(function (o) {
                  o.removeEventListener("medium-zoom:" + e, t, n);
                }),
                (C = C.filter(function (n) {
                  return (
                    n.type !== "medium-zoom:" + e ||
                    n.listener.toString() !== t.toString()
                  );
                })),
                $
              );
            },
            b = function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.target,
                n = function () {
                  var e = Math.min,
                    t = {
                      width: document.documentElement.clientWidth,
                      height: document.documentElement.clientHeight,
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    },
                    n = void 0,
                    i = void 0;
                  if (O.container)
                    if (O.container instanceof Object)
                      (n =
                        (t = o({}, t, O.container)).width -
                        t.left -
                        t.right -
                        2 * O.margin),
                        (i = t.height - t.top - t.bottom - 2 * O.margin);
                    else {
                      var a = (
                          r(O.container)
                            ? O.container
                            : document.querySelector(O.container)
                        ).getBoundingClientRect(),
                        l = a.width,
                        c = a.height,
                        p = a.left,
                        u = a.top;
                      t = o({}, t, { width: l, height: c, left: p, top: u });
                    }
                  (n = n || t.width - 2 * O.margin),
                    (i = i || t.height - 2 * O.margin);
                  var d = L.zoomedHd || L.original,
                    f = s(d) ? n : d.naturalWidth || n,
                    h = s(d) ? i : d.naturalHeight || i,
                    m = d.getBoundingClientRect(),
                    v = m.top,
                    g = m.left,
                    y = m.width,
                    b = m.height,
                    w = e(f, n) / y,
                    x = e(h, i) / b,
                    k = e(w, x),
                    S =
                      "scale(" +
                      k +
                      ") translate3d(" +
                      ((n - y) / 2 - g + O.margin + t.left) / k +
                      "px, " +
                      ((i - b) / 2 - v + O.margin + t.top) / k +
                      "px, 0)";
                  (L.zoomed.style.transform = S),
                    L.zoomedHd && (L.zoomedHd.style.transform = S);
                };
              return new i(function (e) {
                if (t && -1 === T.indexOf(t)) e($);
                else if (L.zoomed) e($);
                else {
                  if (t) L.original = t;
                  else {
                    if (!(0 < T.length)) return void e($);
                    var o = T;
                    L.original = o[0];
                  }
                  if (
                    (L.original.dispatchEvent(
                      p("medium-zoom:open", { detail: { zoom: $ } })
                    ),
                    (A =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      0),
                    (E = !0),
                    (L.zoomed = c(L.original)),
                    document.body.appendChild(j),
                    O.template)
                  ) {
                    var i = r(O.template)
                      ? O.template
                      : document.querySelector(O.template);
                    (L.template = document.createElement("div")),
                      L.template.appendChild(i.content.cloneNode(!0)),
                      document.body.appendChild(L.template);
                  }
                  if (
                    (document.body.appendChild(L.zoomed),
                    window.requestAnimationFrame(function () {
                      document.body.classList.add("medium-zoom--opened");
                    }),
                    L.original.classList.add("medium-zoom-image--hidden"),
                    L.zoomed.classList.add("medium-zoom-image--opened"),
                    L.zoomed.addEventListener("click", w),
                    L.zoomed.addEventListener("transitionend", function t() {
                      (E = !1),
                        L.zoomed.removeEventListener("transitionend", t),
                        L.original.dispatchEvent(
                          p("medium-zoom:opened", { detail: { zoom: $ } })
                        ),
                        e($);
                    }),
                    L.original.getAttribute("data-zoom-src"))
                  ) {
                    (L.zoomedHd = L.zoomed.cloneNode()),
                      L.zoomedHd.removeAttribute("srcset"),
                      L.zoomedHd.removeAttribute("sizes"),
                      (L.zoomedHd.src = L.zoomed.getAttribute("data-zoom-src")),
                      (L.zoomedHd.onerror = function () {
                        clearInterval(s),
                          console.warn(
                            "Unable to reach the zoom image target " +
                              L.zoomedHd.src
                          ),
                          (L.zoomedHd = null),
                          n();
                      });
                    var s = setInterval(function () {
                      L.zoomedHd.complete &&
                        (clearInterval(s),
                        L.zoomedHd.classList.add("medium-zoom-image--opened"),
                        L.zoomedHd.addEventListener("click", w),
                        document.body.appendChild(L.zoomedHd),
                        n());
                    }, 10);
                  } else if (L.original.hasAttribute("srcset")) {
                    (L.zoomedHd = L.zoomed.cloneNode()),
                      L.zoomedHd.removeAttribute("sizes");
                    var a = L.zoomedHd.addEventListener("load", function () {
                      L.zoomedHd.removeEventListener("load", a),
                        L.zoomedHd.classList.add("medium-zoom-image--opened"),
                        L.zoomedHd.addEventListener("click", w),
                        document.body.appendChild(L.zoomedHd),
                        n();
                    });
                  } else n();
                }
              });
            },
            w = function () {
              return new i(function (e) {
                !E && L.original
                  ? ((E = !0),
                    document.body.classList.remove("medium-zoom--opened"),
                    (L.zoomed.style.transform = ""),
                    L.zoomedHd && (L.zoomedHd.style.transform = ""),
                    L.template &&
                      ((L.template.style.transition = "opacity 150ms"),
                      (L.template.style.opacity = 0)),
                    L.original.dispatchEvent(
                      p("medium-zoom:close", { detail: { zoom: $ } })
                    ),
                    L.zoomed.addEventListener("transitionend", function t() {
                      L.original.classList.remove("medium-zoom-image--hidden"),
                        document.body.removeChild(L.zoomed),
                        L.zoomedHd && document.body.removeChild(L.zoomedHd),
                        document.body.removeChild(j),
                        L.zoomed.classList.remove("medium-zoom-image--opened"),
                        L.template && document.body.removeChild(L.template),
                        (E = !1),
                        L.zoomed.removeEventListener("transitionend", t),
                        L.original.dispatchEvent(
                          p("medium-zoom:closed", { detail: { zoom: $ } })
                        ),
                        (L.original = null),
                        (L.zoomed = null),
                        (L.zoomedHd = null),
                        (L.template = null),
                        e($);
                    }))
                  : e($);
              });
            },
            x = function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.target;
              return L.original ? w() : b({ target: t });
            },
            k = function () {
              return O;
            },
            S = function () {
              return T;
            },
            T = [],
            C = [],
            E = !1,
            A = 0,
            O = n,
            L = {
              original: null,
              zoomed: null,
              zoomedHd: null,
              template: null,
            };
          "[object Object]" === Object.prototype.toString.call(t)
            ? (O = t)
            : (t || "string" == typeof t) && m(t),
            (O = o(
              {
                margin: 0,
                background: "#fff",
                scrollOffset: 40,
                container: null,
                template: null,
              },
              O
            ));
          var j = l(O.background);
          document.addEventListener("click", u),
            document.addEventListener("keyup", function (e) {
              27 === (e.keyCode || e.which) && w();
            }),
            document.addEventListener("scroll", d),
            window.addEventListener("resize", w);
          var $ = {
            open: b,
            close: w,
            toggle: x,
            update: f,
            clone: h,
            attach: m,
            detach: v,
            on: g,
            off: y,
            getOptions: k,
            getImages: S,
            getZoomedImage: function () {
              return L.original;
            },
          };
          return $;
        });
    },
    function (e, t, n) {
      "use strict";
      var o = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          "object",
        ],
        i =
          ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
      function r(e, t) {
        return (
          "string" == typeof e && ((t = e), (e = document)),
          Array.prototype.slice.call(e.querySelectorAll(t))
        );
      }
      function s(e) {
        return "string" == typeof e
          ? e.split(",").map(l).filter(a)
          : (function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            })(e)
          ? (function (e) {
              return [].concat.apply([], e);
            })(e.map(s).filter(a))
          : e || [];
      }
      function a(e) {
        return e.length > 0;
      }
      function l(e) {
        return e.replace(/^\s+|\s+$/g, "");
      }
      e.exports = function (e, t) {
        var n;
        (t = t || {}),
          (n = e = e || "body"),
          "[object Object]" === Object.prototype.toString.call(n) &&
            ((t = e), (e = "body")),
          (t.ignore = t.ignore || ""),
          (t.players = t.players || "");
        var l = r(e);
        if (a(l)) {
          var c;
          if (!document.getElementById("fit-vids-style"))
            (
              document.head || document.getElementsByTagName("head")[0]
            ).appendChild(
              (((c = document.createElement("div")).innerHTML =
                '<p>x</p><style id="fit-vids-style">' + i + "</style>"),
              c.childNodes[1])
            );
          var p = s(t.players) || [],
            u = s(t.ignore) || [],
            d = o
              .filter(
                (function (e) {
                  if (e.length < 1)
                    return function () {
                      return !0;
                    };
                  return function (t) {
                    return -1 === e.indexOf(t);
                  };
                })(u)
              )
              .concat(p)
              .join();
          a(d) &&
            l.forEach(function (e) {
              r(e, d).forEach(function (e) {
                !(function (e) {
                  if (/fluid-width-video-wrapper/.test(e.parentNode.className))
                    return;
                  var t = parseInt(e.getAttribute("width"), 10),
                    n = parseInt(e.getAttribute("height"), 10),
                    o = isNaN(t) ? e.clientWidth : t,
                    i = (isNaN(n) ? e.clientHeight : n) / o;
                  e.removeAttribute("width"), e.removeAttribute("height");
                  var r = document.createElement("div");
                  e.parentNode.insertBefore(r, e),
                    (r.className = "fluid-width-video-wrapper"),
                    (r.style.paddingTop = 100 * i + "%"),
                    r.appendChild(e);
                })(e);
              });
            });
        }
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, n) {
      var o, i, r;
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      !(function (a) {
        "use strict";
        (i = [n(0)]),
          void 0 ===
            (r =
              "function" ==
              typeof (o = function (e) {
                var t = window.Slick || {};
                (((n = 0),
                (t = function (t, o) {
                  var i,
                    r = this;
                  (r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow:
                      '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow:
                      '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                      return e('<button type="button" />').text(n + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                  }),
                    (r.initials = {
                      animating: !1,
                      dragging: !1,
                      autoPlayTimer: null,
                      currentDirection: 0,
                      currentLeft: null,
                      currentSlide: 0,
                      direction: 1,
                      $dots: null,
                      listWidth: null,
                      listHeight: null,
                      loadIndex: 0,
                      $nextArrow: null,
                      $prevArrow: null,
                      scrolling: !1,
                      slideCount: null,
                      slideWidth: null,
                      $slideTrack: null,
                      $slides: null,
                      sliding: !1,
                      slideOffset: 0,
                      swipeLeft: null,
                      swiping: !1,
                      $list: null,
                      touchObject: {},
                      transformsEnabled: !1,
                      unslicked: !1,
                    }),
                    e.extend(r, r.initials),
                    (r.activeBreakpoint = null),
                    (r.animType = null),
                    (r.animProp = null),
                    (r.breakpoints = []),
                    (r.breakpointSettings = []),
                    (r.cssTransitions = !1),
                    (r.focussed = !1),
                    (r.interrupted = !1),
                    (r.hidden = "hidden"),
                    (r.paused = !0),
                    (r.positionProp = null),
                    (r.respondTo = null),
                    (r.rowCount = 1),
                    (r.shouldClick = !0),
                    (r.$slider = e(t)),
                    (r.$slidesCache = null),
                    (r.transformType = null),
                    (r.transitionType = null),
                    (r.visibilityChange = "visibilitychange"),
                    (r.windowWidth = 0),
                    (r.windowTimer = null),
                    (i = e(t).data("slick") || {}),
                    (r.options = e.extend({}, r.defaults, o, i)),
                    (r.currentSlide = r.options.initialSlide),
                    (r.originalSettings = r.options),
                    void 0 !== document.mozHidden
                      ? ((r.hidden = "mozHidden"),
                        (r.visibilityChange = "mozvisibilitychange"))
                      : void 0 !== document.webkitHidden &&
                        ((r.hidden = "webkitHidden"),
                        (r.visibilityChange = "webkitvisibilitychange")),
                    (r.autoPlay = e.proxy(r.autoPlay, r)),
                    (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
                    (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
                    (r.changeSlide = e.proxy(r.changeSlide, r)),
                    (r.clickHandler = e.proxy(r.clickHandler, r)),
                    (r.selectHandler = e.proxy(r.selectHandler, r)),
                    (r.setPosition = e.proxy(r.setPosition, r)),
                    (r.swipeHandler = e.proxy(r.swipeHandler, r)),
                    (r.dragHandler = e.proxy(r.dragHandler, r)),
                    (r.keyHandler = e.proxy(r.keyHandler, r)),
                    (r.instanceUid = n++),
                    (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    r.registerBreakpoints(),
                    r.init(!0);
                })).prototype.activateADA = function () {
                  this.$slideTrack
                    .find(".slick-active")
                    .attr({ "aria-hidden": "false" })
                    .find("a, input, button, select")
                    .attr({ tabindex: "0" });
                }),
                  (t.prototype.addSlide = t.prototype.slickAdd =
                    function (t, n, o) {
                      var i = this;
                      if ("boolean" == typeof n) (o = n), (n = null);
                      else if (n < 0 || n >= i.slideCount) return !1;
                      i.unload(),
                        "number" == typeof n
                          ? 0 === n && 0 === i.$slides.length
                            ? e(t).appendTo(i.$slideTrack)
                            : o
                            ? e(t).insertBefore(i.$slides.eq(n))
                            : e(t).insertAfter(i.$slides.eq(n))
                          : !0 === o
                          ? e(t).prependTo(i.$slideTrack)
                          : e(t).appendTo(i.$slideTrack),
                        (i.$slides = i.$slideTrack.children(
                          this.options.slide
                        )),
                        i.$slideTrack.children(this.options.slide).detach(),
                        i.$slideTrack.append(i.$slides),
                        i.$slides.each(function (t, n) {
                          e(n).attr("data-slick-index", t);
                        }),
                        (i.$slidesCache = i.$slides),
                        i.reinit();
                    }),
                  (t.prototype.animateHeight = function () {
                    var e = this;
                    if (
                      1 === e.options.slidesToShow &&
                      !0 === e.options.adaptiveHeight &&
                      !1 === e.options.vertical
                    ) {
                      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                      e.$list.animate({ height: t }, e.options.speed);
                    }
                  }),
                  (t.prototype.animateSlide = function (t, n) {
                    var o = {},
                      i = this;
                    i.animateHeight(),
                      !0 === i.options.rtl &&
                        !1 === i.options.vertical &&
                        (t = -t),
                      !1 === i.transformsEnabled
                        ? !1 === i.options.vertical
                          ? i.$slideTrack.animate(
                              { left: t },
                              i.options.speed,
                              i.options.easing,
                              n
                            )
                          : i.$slideTrack.animate(
                              { top: t },
                              i.options.speed,
                              i.options.easing,
                              n
                            )
                        : !1 === i.cssTransitions
                        ? (!0 === i.options.rtl &&
                            (i.currentLeft = -i.currentLeft),
                          e({ animStart: i.currentLeft }).animate(
                            { animStart: t },
                            {
                              duration: i.options.speed,
                              easing: i.options.easing,
                              step: function (e) {
                                (e = Math.ceil(e)),
                                  !1 === i.options.vertical
                                    ? ((o[i.animType] =
                                        "translate(" + e + "px, 0px)"),
                                      i.$slideTrack.css(o))
                                    : ((o[i.animType] =
                                        "translate(0px," + e + "px)"),
                                      i.$slideTrack.css(o));
                              },
                              complete: function () {
                                n && n.call();
                              },
                            }
                          ))
                        : (i.applyTransition(),
                          (t = Math.ceil(t)),
                          !1 === i.options.vertical
                            ? (o[i.animType] =
                                "translate3d(" + t + "px, 0px, 0px)")
                            : (o[i.animType] =
                                "translate3d(0px," + t + "px, 0px)"),
                          i.$slideTrack.css(o),
                          n &&
                            setTimeout(function () {
                              i.disableTransition(), n.call();
                            }, i.options.speed));
                  }),
                  (t.prototype.getNavTarget = function () {
                    var t = this.options.asNavFor;
                    return t && null !== t && (t = e(t).not(this.$slider)), t;
                  }),
                  (t.prototype.asNavFor = function (t) {
                    var n = this.getNavTarget();
                    null !== n &&
                      "object" === s(n) &&
                      n.each(function () {
                        var n = e(this).slick("getSlick");
                        n.unslicked || n.slideHandler(t, !0);
                      });
                  }),
                  (t.prototype.applyTransition = function (e) {
                    var t = this,
                      n = {};
                    !1 === t.options.fade
                      ? (n[t.transitionType] =
                          t.transformType +
                          " " +
                          t.options.speed +
                          "ms " +
                          t.options.cssEase)
                      : (n[t.transitionType] =
                          "opacity " +
                          t.options.speed +
                          "ms " +
                          t.options.cssEase),
                      !1 === t.options.fade
                        ? t.$slideTrack.css(n)
                        : t.$slides.eq(e).css(n);
                  }),
                  (t.prototype.autoPlay = function () {
                    var e = this;
                    e.autoPlayClear(),
                      e.slideCount > e.options.slidesToShow &&
                        (e.autoPlayTimer = setInterval(
                          e.autoPlayIterator,
                          e.options.autoplaySpeed
                        ));
                  }),
                  (t.prototype.autoPlayClear = function () {
                    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                  }),
                  (t.prototype.autoPlayIterator = function () {
                    var e = this,
                      t = e.currentSlide + e.options.slidesToScroll;
                    e.paused ||
                      e.interrupted ||
                      e.focussed ||
                      (!1 === e.options.infinite &&
                        (1 === e.direction &&
                        e.currentSlide + 1 === e.slideCount - 1
                          ? (e.direction = 0)
                          : 0 === e.direction &&
                            ((t = e.currentSlide - e.options.slidesToScroll),
                            e.currentSlide - 1 == 0 && (e.direction = 1))),
                      e.slideHandler(t));
                  }),
                  (t.prototype.buildArrows = function () {
                    var t = this;
                    !0 === t.options.arrows &&
                      ((t.$prevArrow = e(t.options.prevArrow).addClass(
                        "slick-arrow"
                      )),
                      (t.$nextArrow = e(t.options.nextArrow).addClass(
                        "slick-arrow"
                      )),
                      t.slideCount > t.options.slidesToShow
                        ? (t.$prevArrow
                            .removeClass("slick-hidden")
                            .removeAttr("aria-hidden tabindex"),
                          t.$nextArrow
                            .removeClass("slick-hidden")
                            .removeAttr("aria-hidden tabindex"),
                          t.htmlExpr.test(t.options.prevArrow) &&
                            t.$prevArrow.prependTo(t.options.appendArrows),
                          t.htmlExpr.test(t.options.nextArrow) &&
                            t.$nextArrow.appendTo(t.options.appendArrows),
                          !0 !== t.options.infinite &&
                            t.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                        : t.$prevArrow
                            .add(t.$nextArrow)
                            .addClass("slick-hidden")
                            .attr({ "aria-disabled": "true", tabindex: "-1" }));
                  }),
                  (t.prototype.buildDots = function () {
                    var t,
                      n,
                      o = this;
                    if (
                      !0 === o.options.dots &&
                      o.slideCount > o.options.slidesToShow
                    ) {
                      for (
                        o.$slider.addClass("slick-dotted"),
                          n = e("<ul />").addClass(o.options.dotsClass),
                          t = 0;
                        t <= o.getDotCount();
                        t += 1
                      )
                        n.append(
                          e("<li />").append(
                            o.options.customPaging.call(this, o, t)
                          )
                        );
                      (o.$dots = n.appendTo(o.options.appendDots)),
                        o.$dots.find("li").first().addClass("slick-active");
                    }
                  }),
                  (t.prototype.buildOut = function () {
                    var t = this;
                    (t.$slides = t.$slider
                      .children(t.options.slide + ":not(.slick-cloned)")
                      .addClass("slick-slide")),
                      (t.slideCount = t.$slides.length),
                      t.$slides.each(function (t, n) {
                        e(n)
                          .attr("data-slick-index", t)
                          .data("originalStyling", e(n).attr("style") || "");
                      }),
                      t.$slider.addClass("slick-slider"),
                      (t.$slideTrack =
                        0 === t.slideCount
                          ? e('<div class="slick-track"/>').appendTo(t.$slider)
                          : t.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                      (t.$list = t.$slideTrack
                        .wrap('<div class="slick-list"/>')
                        .parent()),
                      t.$slideTrack.css("opacity", 0),
                      (!0 !== t.options.centerMode &&
                        !0 !== t.options.swipeToSlide) ||
                        (t.options.slidesToScroll = 1),
                      e("img[data-lazy]", t.$slider)
                        .not("[src]")
                        .addClass("slick-loading"),
                      t.setupInfinite(),
                      t.buildArrows(),
                      t.buildDots(),
                      t.updateDots(),
                      t.setSlideClasses(
                        "number" == typeof t.currentSlide ? t.currentSlide : 0
                      ),
                      !0 === t.options.draggable &&
                        t.$list.addClass("draggable");
                  }),
                  (t.prototype.buildRows = function () {
                    var e,
                      t,
                      n,
                      o,
                      i,
                      r,
                      s,
                      a = this;
                    if (
                      ((o = document.createDocumentFragment()),
                      (r = a.$slider.children()),
                      a.options.rows > 0)
                    ) {
                      for (
                        s = a.options.slidesPerRow * a.options.rows,
                          i = Math.ceil(r.length / s),
                          e = 0;
                        e < i;
                        e++
                      ) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                          var c = document.createElement("div");
                          for (n = 0; n < a.options.slidesPerRow; n++) {
                            var p = e * s + (t * a.options.slidesPerRow + n);
                            r.get(p) && c.appendChild(r.get(p));
                          }
                          l.appendChild(c);
                        }
                        o.appendChild(l);
                      }
                      a.$slider.empty().append(o),
                        a.$slider
                          .children()
                          .children()
                          .children()
                          .css({
                            width: 100 / a.options.slidesPerRow + "%",
                            display: "inline-block",
                          });
                    }
                  }),
                  (t.prototype.checkResponsive = function (t, n) {
                    var o,
                      i,
                      r,
                      s = this,
                      a = !1,
                      l = s.$slider.width(),
                      c = window.innerWidth || e(window).width();
                    if (
                      ("window" === s.respondTo
                        ? (r = c)
                        : "slider" === s.respondTo
                        ? (r = l)
                        : "min" === s.respondTo && (r = Math.min(c, l)),
                      s.options.responsive &&
                        s.options.responsive.length &&
                        null !== s.options.responsive)
                    ) {
                      for (o in ((i = null), s.breakpoints))
                        s.breakpoints.hasOwnProperty(o) &&
                          (!1 === s.originalSettings.mobileFirst
                            ? r < s.breakpoints[o] && (i = s.breakpoints[o])
                            : r > s.breakpoints[o] && (i = s.breakpoints[o]));
                      null !== i
                        ? null !== s.activeBreakpoint
                          ? (i !== s.activeBreakpoint || n) &&
                            ((s.activeBreakpoint = i),
                            "unslick" === s.breakpointSettings[i]
                              ? s.unslick(i)
                              : ((s.options = e.extend(
                                  {},
                                  s.originalSettings,
                                  s.breakpointSettings[i]
                                )),
                                !0 === t &&
                                  (s.currentSlide = s.options.initialSlide),
                                s.refresh(t)),
                            (a = i))
                          : ((s.activeBreakpoint = i),
                            "unslick" === s.breakpointSettings[i]
                              ? s.unslick(i)
                              : ((s.options = e.extend(
                                  {},
                                  s.originalSettings,
                                  s.breakpointSettings[i]
                                )),
                                !0 === t &&
                                  (s.currentSlide = s.options.initialSlide),
                                s.refresh(t)),
                            (a = i))
                        : null !== s.activeBreakpoint &&
                          ((s.activeBreakpoint = null),
                          (s.options = s.originalSettings),
                          !0 === t && (s.currentSlide = s.options.initialSlide),
                          s.refresh(t),
                          (a = i)),
                        t ||
                          !1 === a ||
                          s.$slider.trigger("breakpoint", [s, a]);
                    }
                  }),
                  (t.prototype.changeSlide = function (t, n) {
                    var o,
                      i,
                      r = this,
                      s = e(t.currentTarget);
                    switch (
                      (s.is("a") && t.preventDefault(),
                      s.is("li") || (s = s.closest("li")),
                      (o =
                        r.slideCount % r.options.slidesToScroll != 0
                          ? 0
                          : (r.slideCount - r.currentSlide) %
                            r.options.slidesToScroll),
                      t.data.message)
                    ) {
                      case "previous":
                        (i =
                          0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                          r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - i, !1, n);
                        break;
                      case "next":
                        (i = 0 === o ? r.options.slidesToScroll : o),
                          r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + i, !1, n);
                        break;
                      case "index":
                        var a =
                          0 === t.data.index
                            ? 0
                            : t.data.index ||
                              s.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(a), !1, n),
                          s.children().trigger("focus");
                        break;
                      default:
                        return;
                    }
                  }),
                  (t.prototype.checkNavigable = function (e) {
                    var t, n;
                    if (
                      ((n = 0),
                      e > (t = this.getNavigableIndexes())[t.length - 1])
                    )
                      e = t[t.length - 1];
                    else
                      for (var o in t) {
                        if (e < t[o]) {
                          e = n;
                          break;
                        }
                        n = t[o];
                      }
                    return e;
                  }),
                  (t.prototype.cleanUpEvents = function () {
                    var t = this;
                    t.options.dots &&
                      null !== t.$dots &&
                      (e("li", t.$dots)
                        .off("click.slick", t.changeSlide)
                        .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                        .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                      !0 === t.options.accessibility &&
                        t.$dots.off("keydown.slick", t.keyHandler)),
                      t.$slider.off("focus.slick blur.slick"),
                      !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        (t.$prevArrow &&
                          t.$prevArrow.off("click.slick", t.changeSlide),
                        t.$nextArrow &&
                          t.$nextArrow.off("click.slick", t.changeSlide),
                        !0 === t.options.accessibility &&
                          (t.$prevArrow &&
                            t.$prevArrow.off("keydown.slick", t.keyHandler),
                          t.$nextArrow &&
                            t.$nextArrow.off("keydown.slick", t.keyHandler))),
                      t.$list.off(
                        "touchstart.slick mousedown.slick",
                        t.swipeHandler
                      ),
                      t.$list.off(
                        "touchmove.slick mousemove.slick",
                        t.swipeHandler
                      ),
                      t.$list.off(
                        "touchend.slick mouseup.slick",
                        t.swipeHandler
                      ),
                      t.$list.off(
                        "touchcancel.slick mouseleave.slick",
                        t.swipeHandler
                      ),
                      t.$list.off("click.slick", t.clickHandler),
                      e(document).off(t.visibilityChange, t.visibility),
                      t.cleanUpSlideEvents(),
                      !0 === t.options.accessibility &&
                        t.$list.off("keydown.slick", t.keyHandler),
                      !0 === t.options.focusOnSelect &&
                        e(t.$slideTrack)
                          .children()
                          .off("click.slick", t.selectHandler),
                      e(window).off(
                        "orientationchange.slick.slick-" + t.instanceUid,
                        t.orientationChange
                      ),
                      e(window).off(
                        "resize.slick.slick-" + t.instanceUid,
                        t.resize
                      ),
                      e("[draggable!=true]", t.$slideTrack).off(
                        "dragstart",
                        t.preventDefault
                      ),
                      e(window).off(
                        "load.slick.slick-" + t.instanceUid,
                        t.setPosition
                      );
                  }),
                  (t.prototype.cleanUpSlideEvents = function () {
                    var t = this;
                    t.$list.off(
                      "mouseenter.slick",
                      e.proxy(t.interrupt, t, !0)
                    ),
                      t.$list.off(
                        "mouseleave.slick",
                        e.proxy(t.interrupt, t, !1)
                      );
                  }),
                  (t.prototype.cleanUpRows = function () {
                    var e,
                      t = this;
                    t.options.rows > 0 &&
                      ((e = t.$slides.children().children()).removeAttr(
                        "style"
                      ),
                      t.$slider.empty().append(e));
                  }),
                  (t.prototype.clickHandler = function (e) {
                    !1 === this.shouldClick &&
                      (e.stopImmediatePropagation(),
                      e.stopPropagation(),
                      e.preventDefault());
                  }),
                  (t.prototype.destroy = function (t) {
                    var n = this;
                    n.autoPlayClear(),
                      (n.touchObject = {}),
                      n.cleanUpEvents(),
                      e(".slick-cloned", n.$slider).detach(),
                      n.$dots && n.$dots.remove(),
                      n.$prevArrow &&
                        n.$prevArrow.length &&
                        (n.$prevArrow
                          .removeClass(
                            "slick-disabled slick-arrow slick-hidden"
                          )
                          .removeAttr("aria-hidden aria-disabled tabindex")
                          .css("display", ""),
                        n.htmlExpr.test(n.options.prevArrow) &&
                          n.$prevArrow.remove()),
                      n.$nextArrow &&
                        n.$nextArrow.length &&
                        (n.$nextArrow
                          .removeClass(
                            "slick-disabled slick-arrow slick-hidden"
                          )
                          .removeAttr("aria-hidden aria-disabled tabindex")
                          .css("display", ""),
                        n.htmlExpr.test(n.options.nextArrow) &&
                          n.$nextArrow.remove()),
                      n.$slides &&
                        (n.$slides
                          .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                          )
                          .removeAttr("aria-hidden")
                          .removeAttr("data-slick-index")
                          .each(function () {
                            e(this).attr(
                              "style",
                              e(this).data("originalStyling")
                            );
                          }),
                        n.$slideTrack.children(this.options.slide).detach(),
                        n.$slideTrack.detach(),
                        n.$list.detach(),
                        n.$slider.append(n.$slides)),
                      n.cleanUpRows(),
                      n.$slider.removeClass("slick-slider"),
                      n.$slider.removeClass("slick-initialized"),
                      n.$slider.removeClass("slick-dotted"),
                      (n.unslicked = !0),
                      t || n.$slider.trigger("destroy", [n]);
                  }),
                  (t.prototype.disableTransition = function (e) {
                    var t = this,
                      n = {};
                    (n[t.transitionType] = ""),
                      !1 === t.options.fade
                        ? t.$slideTrack.css(n)
                        : t.$slides.eq(e).css(n);
                  }),
                  (t.prototype.fadeSlide = function (e, t) {
                    var n = this;
                    !1 === n.cssTransitions
                      ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
                        n.$slides
                          .eq(e)
                          .animate(
                            { opacity: 1 },
                            n.options.speed,
                            n.options.easing,
                            t
                          ))
                      : (n.applyTransition(e),
                        n.$slides
                          .eq(e)
                          .css({ opacity: 1, zIndex: n.options.zIndex }),
                        t &&
                          setTimeout(function () {
                            n.disableTransition(e), t.call();
                          }, n.options.speed));
                  }),
                  (t.prototype.fadeSlideOut = function (e) {
                    var t = this;
                    !1 === t.cssTransitions
                      ? t.$slides
                          .eq(e)
                          .animate(
                            { opacity: 0, zIndex: t.options.zIndex - 2 },
                            t.options.speed,
                            t.options.easing
                          )
                      : (t.applyTransition(e),
                        t.$slides
                          .eq(e)
                          .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                  }),
                  (t.prototype.filterSlides = t.prototype.slickFilter =
                    function (e) {
                      var t = this;
                      null !== e &&
                        ((t.$slidesCache = t.$slides),
                        t.unload(),
                        t.$slideTrack.children(this.options.slide).detach(),
                        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                        t.reinit());
                    }),
                  (t.prototype.focusHandler = function () {
                    var t = this;
                    t.$slider
                      .off("focus.slick blur.slick")
                      .on("focus.slick blur.slick", "*", function (n) {
                        n.stopImmediatePropagation();
                        var o = e(this);
                        setTimeout(function () {
                          t.options.pauseOnFocus &&
                            ((t.focussed = o.is(":focus")), t.autoPlay());
                        }, 0);
                      });
                  }),
                  (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
                    function () {
                      return this.currentSlide;
                    }),
                  (t.prototype.getDotCount = function () {
                    var e = this,
                      t = 0,
                      n = 0,
                      o = 0;
                    if (!0 === e.options.infinite)
                      if (e.slideCount <= e.options.slidesToShow) ++o;
                      else
                        for (; t < e.slideCount; )
                          ++o,
                            (t = n + e.options.slidesToScroll),
                            (n +=
                              e.options.slidesToScroll <= e.options.slidesToShow
                                ? e.options.slidesToScroll
                                : e.options.slidesToShow);
                    else if (!0 === e.options.centerMode) o = e.slideCount;
                    else if (e.options.asNavFor)
                      for (; t < e.slideCount; )
                        ++o,
                          (t = n + e.options.slidesToScroll),
                          (n +=
                            e.options.slidesToScroll <= e.options.slidesToShow
                              ? e.options.slidesToScroll
                              : e.options.slidesToShow);
                    else
                      o =
                        1 +
                        Math.ceil(
                          (e.slideCount - e.options.slidesToShow) /
                            e.options.slidesToScroll
                        );
                    return o - 1;
                  }),
                  (t.prototype.getLeft = function (e) {
                    var t,
                      n,
                      o,
                      i,
                      r = this,
                      s = 0;
                    return (
                      (r.slideOffset = 0),
                      (n = r.$slides.first().outerHeight(!0)),
                      !0 === r.options.infinite
                        ? (r.slideCount > r.options.slidesToShow &&
                            ((r.slideOffset =
                              r.slideWidth * r.options.slidesToShow * -1),
                            (i = -1),
                            !0 === r.options.vertical &&
                              !0 === r.options.centerMode &&
                              (2 === r.options.slidesToShow
                                ? (i = -1.5)
                                : 1 === r.options.slidesToShow && (i = -2)),
                            (s = n * r.options.slidesToShow * i)),
                          r.slideCount % r.options.slidesToScroll != 0 &&
                            e + r.options.slidesToScroll > r.slideCount &&
                            r.slideCount > r.options.slidesToShow &&
                            (e > r.slideCount
                              ? ((r.slideOffset =
                                  (r.options.slidesToShow -
                                    (e - r.slideCount)) *
                                  r.slideWidth *
                                  -1),
                                (s =
                                  (r.options.slidesToShow -
                                    (e - r.slideCount)) *
                                  n *
                                  -1))
                              : ((r.slideOffset =
                                  (r.slideCount % r.options.slidesToScroll) *
                                  r.slideWidth *
                                  -1),
                                (s =
                                  (r.slideCount % r.options.slidesToScroll) *
                                  n *
                                  -1))))
                        : e + r.options.slidesToShow > r.slideCount &&
                          ((r.slideOffset =
                            (e + r.options.slidesToShow - r.slideCount) *
                            r.slideWidth),
                          (s =
                            (e + r.options.slidesToShow - r.slideCount) * n)),
                      r.slideCount <= r.options.slidesToShow &&
                        ((r.slideOffset = 0), (s = 0)),
                      !0 === r.options.centerMode &&
                      r.slideCount <= r.options.slidesToShow
                        ? (r.slideOffset =
                            (r.slideWidth *
                              Math.floor(r.options.slidesToShow)) /
                              2 -
                            (r.slideWidth * r.slideCount) / 2)
                        : !0 === r.options.centerMode &&
                          !0 === r.options.infinite
                        ? (r.slideOffset +=
                            r.slideWidth *
                              Math.floor(r.options.slidesToShow / 2) -
                            r.slideWidth)
                        : !0 === r.options.centerMode &&
                          ((r.slideOffset = 0),
                          (r.slideOffset +=
                            r.slideWidth *
                            Math.floor(r.options.slidesToShow / 2))),
                      (t =
                        !1 === r.options.vertical
                          ? e * r.slideWidth * -1 + r.slideOffset
                          : e * n * -1 + s),
                      !0 === r.options.variableWidth &&
                        ((o =
                          r.slideCount <= r.options.slidesToShow ||
                          !1 === r.options.infinite
                            ? r.$slideTrack.children(".slick-slide").eq(e)
                            : r.$slideTrack
                                .children(".slick-slide")
                                .eq(e + r.options.slidesToShow)),
                        (t =
                          !0 === r.options.rtl
                            ? o[0]
                              ? -1 *
                                (r.$slideTrack.width() -
                                  o[0].offsetLeft -
                                  o.width())
                              : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                        !0 === r.options.centerMode &&
                          ((o =
                            r.slideCount <= r.options.slidesToShow ||
                            !1 === r.options.infinite
                              ? r.$slideTrack.children(".slick-slide").eq(e)
                              : r.$slideTrack
                                  .children(".slick-slide")
                                  .eq(e + r.options.slidesToShow + 1)),
                          (t =
                            !0 === r.options.rtl
                              ? o[0]
                                ? -1 *
                                  (r.$slideTrack.width() -
                                    o[0].offsetLeft -
                                    o.width())
                                : 0
                              : o[0]
                              ? -1 * o[0].offsetLeft
                              : 0),
                          (t += (r.$list.width() - o.outerWidth()) / 2))),
                      t
                    );
                  }),
                  (t.prototype.getOption = t.prototype.slickGetOption =
                    function (e) {
                      return this.options[e];
                    }),
                  (t.prototype.getNavigableIndexes = function () {
                    var e,
                      t = this,
                      n = 0,
                      o = 0,
                      i = [];
                    for (
                      !1 === t.options.infinite
                        ? (e = t.slideCount)
                        : ((n = -1 * t.options.slidesToScroll),
                          (o = -1 * t.options.slidesToScroll),
                          (e = 2 * t.slideCount));
                      n < e;

                    )
                      i.push(n),
                        (n = o + t.options.slidesToScroll),
                        (o +=
                          t.options.slidesToScroll <= t.options.slidesToShow
                            ? t.options.slidesToScroll
                            : t.options.slidesToShow);
                    return i;
                  }),
                  (t.prototype.getSlick = function () {
                    return this;
                  }),
                  (t.prototype.getSlideCount = function () {
                    var t,
                      n,
                      o = this;
                    return (
                      (n =
                        !0 === o.options.centerMode
                          ? o.slideWidth *
                            Math.floor(o.options.slidesToShow / 2)
                          : 0),
                      !0 === o.options.swipeToSlide
                        ? (o.$slideTrack
                            .find(".slick-slide")
                            .each(function (i, r) {
                              if (
                                r.offsetLeft - n + e(r).outerWidth() / 2 >
                                -1 * o.swipeLeft
                              )
                                return (t = r), !1;
                            }),
                          Math.abs(
                            e(t).attr("data-slick-index") - o.currentSlide
                          ) || 1)
                        : o.options.slidesToScroll
                    );
                  }),
                  (t.prototype.goTo = t.prototype.slickGoTo =
                    function (e, t) {
                      this.changeSlide(
                        { data: { message: "index", index: parseInt(e) } },
                        t
                      );
                    }),
                  (t.prototype.init = function (t) {
                    var n = this;
                    e(n.$slider).hasClass("slick-initialized") ||
                      (e(n.$slider).addClass("slick-initialized"),
                      n.buildRows(),
                      n.buildOut(),
                      n.setProps(),
                      n.startLoad(),
                      n.loadSlider(),
                      n.initializeEvents(),
                      n.updateArrows(),
                      n.updateDots(),
                      n.checkResponsive(!0),
                      n.focusHandler()),
                      t && n.$slider.trigger("init", [n]),
                      !0 === n.options.accessibility && n.initADA(),
                      n.options.autoplay && ((n.paused = !1), n.autoPlay());
                  }),
                  (t.prototype.initADA = function () {
                    var t = this,
                      n = Math.ceil(t.slideCount / t.options.slidesToShow),
                      o = t.getNavigableIndexes().filter(function (e) {
                        return e >= 0 && e < t.slideCount;
                      });
                    t.$slides
                      .add(t.$slideTrack.find(".slick-cloned"))
                      .attr({ "aria-hidden": "true", tabindex: "-1" })
                      .find("a, input, button, select")
                      .attr({ tabindex: "-1" }),
                      null !== t.$dots &&
                        (t.$slides
                          .not(t.$slideTrack.find(".slick-cloned"))
                          .each(function (n) {
                            var i = o.indexOf(n);
                            if (
                              (e(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + t.instanceUid + n,
                                tabindex: -1,
                              }),
                              -1 !== i)
                            ) {
                              var r = "slick-slide-control" + t.instanceUid + i;
                              e("#" + r).length &&
                                e(this).attr({ "aria-describedby": r });
                            }
                          }),
                        t.$dots
                          .attr("role", "tablist")
                          .find("li")
                          .each(function (i) {
                            var r = o[i];
                            e(this).attr({ role: "presentation" }),
                              e(this)
                                .find("button")
                                .first()
                                .attr({
                                  role: "tab",
                                  id: "slick-slide-control" + t.instanceUid + i,
                                  "aria-controls":
                                    "slick-slide" + t.instanceUid + r,
                                  "aria-label": i + 1 + " of " + n,
                                  "aria-selected": null,
                                  tabindex: "-1",
                                });
                          })
                          .eq(t.currentSlide)
                          .find("button")
                          .attr({ "aria-selected": "true", tabindex: "0" })
                          .end());
                    for (
                      var i = t.currentSlide, r = i + t.options.slidesToShow;
                      i < r;
                      i++
                    )
                      t.options.focusOnChange
                        ? t.$slides.eq(i).attr({ tabindex: "0" })
                        : t.$slides.eq(i).removeAttr("tabindex");
                    t.activateADA();
                  }),
                  (t.prototype.initArrowEvents = function () {
                    var e = this;
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      (e.$prevArrow
                        .off("click.slick")
                        .on(
                          "click.slick",
                          { message: "previous" },
                          e.changeSlide
                        ),
                      e.$nextArrow
                        .off("click.slick")
                        .on("click.slick", { message: "next" }, e.changeSlide),
                      !0 === e.options.accessibility &&
                        (e.$prevArrow.on("keydown.slick", e.keyHandler),
                        e.$nextArrow.on("keydown.slick", e.keyHandler)));
                  }),
                  (t.prototype.initDotEvents = function () {
                    var t = this;
                    !0 === t.options.dots &&
                      t.slideCount > t.options.slidesToShow &&
                      (e("li", t.$dots).on(
                        "click.slick",
                        { message: "index" },
                        t.changeSlide
                      ),
                      !0 === t.options.accessibility &&
                        t.$dots.on("keydown.slick", t.keyHandler)),
                      !0 === t.options.dots &&
                        !0 === t.options.pauseOnDotsHover &&
                        t.slideCount > t.options.slidesToShow &&
                        e("li", t.$dots)
                          .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                          .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                  }),
                  (t.prototype.initSlideEvents = function () {
                    var t = this;
                    t.options.pauseOnHover &&
                      (t.$list.on(
                        "mouseenter.slick",
                        e.proxy(t.interrupt, t, !0)
                      ),
                      t.$list.on(
                        "mouseleave.slick",
                        e.proxy(t.interrupt, t, !1)
                      ));
                  }),
                  (t.prototype.initializeEvents = function () {
                    var t = this;
                    t.initArrowEvents(),
                      t.initDotEvents(),
                      t.initSlideEvents(),
                      t.$list.on(
                        "touchstart.slick mousedown.slick",
                        { action: "start" },
                        t.swipeHandler
                      ),
                      t.$list.on(
                        "touchmove.slick mousemove.slick",
                        { action: "move" },
                        t.swipeHandler
                      ),
                      t.$list.on(
                        "touchend.slick mouseup.slick",
                        { action: "end" },
                        t.swipeHandler
                      ),
                      t.$list.on(
                        "touchcancel.slick mouseleave.slick",
                        { action: "end" },
                        t.swipeHandler
                      ),
                      t.$list.on("click.slick", t.clickHandler),
                      e(document).on(
                        t.visibilityChange,
                        e.proxy(t.visibility, t)
                      ),
                      !0 === t.options.accessibility &&
                        t.$list.on("keydown.slick", t.keyHandler),
                      !0 === t.options.focusOnSelect &&
                        e(t.$slideTrack)
                          .children()
                          .on("click.slick", t.selectHandler),
                      e(window).on(
                        "orientationchange.slick.slick-" + t.instanceUid,
                        e.proxy(t.orientationChange, t)
                      ),
                      e(window).on(
                        "resize.slick.slick-" + t.instanceUid,
                        e.proxy(t.resize, t)
                      ),
                      e("[draggable!=true]", t.$slideTrack).on(
                        "dragstart",
                        t.preventDefault
                      ),
                      e(window).on(
                        "load.slick.slick-" + t.instanceUid,
                        t.setPosition
                      ),
                      e(t.setPosition);
                  }),
                  (t.prototype.initUI = function () {
                    var e = this;
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      (e.$prevArrow.show(), e.$nextArrow.show()),
                      !0 === e.options.dots &&
                        e.slideCount > e.options.slidesToShow &&
                        e.$dots.show();
                  }),
                  (t.prototype.keyHandler = function (e) {
                    var t = this;
                    e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                      (37 === e.keyCode && !0 === t.options.accessibility
                        ? t.changeSlide({
                            data: {
                              message:
                                !0 === t.options.rtl ? "next" : "previous",
                            },
                          })
                        : 39 === e.keyCode &&
                          !0 === t.options.accessibility &&
                          t.changeSlide({
                            data: {
                              message:
                                !0 === t.options.rtl ? "previous" : "next",
                            },
                          }));
                  }),
                  (t.prototype.lazyLoad = function () {
                    var t,
                      n,
                      o,
                      i = this;
                    function r(t) {
                      e("img[data-lazy]", t).each(function () {
                        var t = e(this),
                          n = e(this).attr("data-lazy"),
                          o = e(this).attr("data-srcset"),
                          r =
                            e(this).attr("data-sizes") ||
                            i.$slider.attr("data-sizes"),
                          s = document.createElement("img");
                        (s.onload = function () {
                          t.animate({ opacity: 0 }, 100, function () {
                            o && (t.attr("srcset", o), r && t.attr("sizes", r)),
                              t
                                .attr("src", n)
                                .animate({ opacity: 1 }, 200, function () {
                                  t.removeAttr(
                                    "data-lazy data-srcset data-sizes"
                                  ).removeClass("slick-loading");
                                }),
                              i.$slider.trigger("lazyLoaded", [i, t, n]);
                          });
                        }),
                          (s.onerror = function () {
                            t
                              .removeAttr("data-lazy")
                              .removeClass("slick-loading")
                              .addClass("slick-lazyload-error"),
                              i.$slider.trigger("lazyLoadError", [i, t, n]);
                          }),
                          (s.src = n);
                      });
                    }
                    if (
                      (!0 === i.options.centerMode
                        ? !0 === i.options.infinite
                          ? (o =
                              (n =
                                i.currentSlide +
                                (i.options.slidesToShow / 2 + 1)) +
                              i.options.slidesToShow +
                              2)
                          : ((n = Math.max(
                              0,
                              i.currentSlide - (i.options.slidesToShow / 2 + 1)
                            )),
                            (o =
                              i.options.slidesToShow / 2 +
                              1 +
                              2 +
                              i.currentSlide))
                        : ((n = i.options.infinite
                            ? i.options.slidesToShow + i.currentSlide
                            : i.currentSlide),
                          (o = Math.ceil(n + i.options.slidesToShow)),
                          !0 === i.options.fade &&
                            (n > 0 && n--, o <= i.slideCount && o++)),
                      (t = i.$slider.find(".slick-slide").slice(n, o)),
                      "anticipated" === i.options.lazyLoad)
                    )
                      for (
                        var s = n - 1,
                          a = o,
                          l = i.$slider.find(".slick-slide"),
                          c = 0;
                        c < i.options.slidesToScroll;
                        c++
                      )
                        s < 0 && (s = i.slideCount - 1),
                          (t = (t = t.add(l.eq(s))).add(l.eq(a))),
                          s--,
                          a++;
                    r(t),
                      i.slideCount <= i.options.slidesToShow
                        ? r(i.$slider.find(".slick-slide"))
                        : i.currentSlide >=
                          i.slideCount - i.options.slidesToShow
                        ? r(
                            i.$slider
                              .find(".slick-cloned")
                              .slice(0, i.options.slidesToShow)
                          )
                        : 0 === i.currentSlide &&
                          r(
                            i.$slider
                              .find(".slick-cloned")
                              .slice(-1 * i.options.slidesToShow)
                          );
                  }),
                  (t.prototype.loadSlider = function () {
                    var e = this;
                    e.setPosition(),
                      e.$slideTrack.css({ opacity: 1 }),
                      e.$slider.removeClass("slick-loading"),
                      e.initUI(),
                      "progressive" === e.options.lazyLoad &&
                        e.progressiveLazyLoad();
                  }),
                  (t.prototype.next = t.prototype.slickNext =
                    function () {
                      this.changeSlide({ data: { message: "next" } });
                    }),
                  (t.prototype.orientationChange = function () {
                    this.checkResponsive(), this.setPosition();
                  }),
                  (t.prototype.pause = t.prototype.slickPause =
                    function () {
                      this.autoPlayClear(), (this.paused = !0);
                    }),
                  (t.prototype.play = t.prototype.slickPlay =
                    function () {
                      var e = this;
                      e.autoPlay(),
                        (e.options.autoplay = !0),
                        (e.paused = !1),
                        (e.focussed = !1),
                        (e.interrupted = !1);
                    }),
                  (t.prototype.postSlide = function (t) {
                    var n = this;
                    n.unslicked ||
                      (n.$slider.trigger("afterChange", [n, t]),
                      (n.animating = !1),
                      n.slideCount > n.options.slidesToShow && n.setPosition(),
                      (n.swipeLeft = null),
                      n.options.autoplay && n.autoPlay(),
                      !0 === n.options.accessibility &&
                        (n.initADA(),
                        n.options.focusOnChange &&
                          e(n.$slides.get(n.currentSlide))
                            .attr("tabindex", 0)
                            .focus()));
                  }),
                  (t.prototype.prev = t.prototype.slickPrev =
                    function () {
                      this.changeSlide({ data: { message: "previous" } });
                    }),
                  (t.prototype.preventDefault = function (e) {
                    e.preventDefault();
                  }),
                  (t.prototype.progressiveLazyLoad = function (t) {
                    t = t || 1;
                    var n,
                      o,
                      i,
                      r,
                      s,
                      a = this,
                      l = e("img[data-lazy]", a.$slider);
                    l.length
                      ? ((n = l.first()),
                        (o = n.attr("data-lazy")),
                        (i = n.attr("data-srcset")),
                        (r =
                          n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                        ((s = document.createElement("img")).onload =
                          function () {
                            i && (n.attr("srcset", i), r && n.attr("sizes", r)),
                              n
                                .attr("src", o)
                                .removeAttr("data-lazy data-srcset data-sizes")
                                .removeClass("slick-loading"),
                              !0 === a.options.adaptiveHeight &&
                                a.setPosition(),
                              a.$slider.trigger("lazyLoaded", [a, n, o]),
                              a.progressiveLazyLoad();
                          }),
                        (s.onerror = function () {
                          t < 3
                            ? setTimeout(function () {
                                a.progressiveLazyLoad(t + 1);
                              }, 500)
                            : (n
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                              a.$slider.trigger("lazyLoadError", [a, n, o]),
                              a.progressiveLazyLoad());
                        }),
                        (s.src = o))
                      : a.$slider.trigger("allImagesLoaded", [a]);
                  }),
                  (t.prototype.refresh = function (t) {
                    var n,
                      o,
                      i = this;
                    (o = i.slideCount - i.options.slidesToShow),
                      !i.options.infinite &&
                        i.currentSlide > o &&
                        (i.currentSlide = o),
                      i.slideCount <= i.options.slidesToShow &&
                        (i.currentSlide = 0),
                      (n = i.currentSlide),
                      i.destroy(!0),
                      e.extend(i, i.initials, { currentSlide: n }),
                      i.init(),
                      t ||
                        i.changeSlide(
                          { data: { message: "index", index: n } },
                          !1
                        );
                  }),
                  (t.prototype.registerBreakpoints = function () {
                    var t,
                      n,
                      o,
                      i = this,
                      r = i.options.responsive || null;
                    if ("array" === e.type(r) && r.length) {
                      for (t in ((i.respondTo =
                        i.options.respondTo || "window"),
                      r))
                        if (
                          ((o = i.breakpoints.length - 1), r.hasOwnProperty(t))
                        ) {
                          for (n = r[t].breakpoint; o >= 0; )
                            i.breakpoints[o] &&
                              i.breakpoints[o] === n &&
                              i.breakpoints.splice(o, 1),
                              o--;
                          i.breakpoints.push(n),
                            (i.breakpointSettings[n] = r[t].settings);
                        }
                      i.breakpoints.sort(function (e, t) {
                        return i.options.mobileFirst ? e - t : t - e;
                      });
                    }
                  }),
                  (t.prototype.reinit = function () {
                    var t = this;
                    (t.$slides = t.$slideTrack
                      .children(t.options.slide)
                      .addClass("slick-slide")),
                      (t.slideCount = t.$slides.length),
                      t.currentSlide >= t.slideCount &&
                        0 !== t.currentSlide &&
                        (t.currentSlide =
                          t.currentSlide - t.options.slidesToScroll),
                      t.slideCount <= t.options.slidesToShow &&
                        (t.currentSlide = 0),
                      t.registerBreakpoints(),
                      t.setProps(),
                      t.setupInfinite(),
                      t.buildArrows(),
                      t.updateArrows(),
                      t.initArrowEvents(),
                      t.buildDots(),
                      t.updateDots(),
                      t.initDotEvents(),
                      t.cleanUpSlideEvents(),
                      t.initSlideEvents(),
                      t.checkResponsive(!1, !0),
                      !0 === t.options.focusOnSelect &&
                        e(t.$slideTrack)
                          .children()
                          .on("click.slick", t.selectHandler),
                      t.setSlideClasses(
                        "number" == typeof t.currentSlide ? t.currentSlide : 0
                      ),
                      t.setPosition(),
                      t.focusHandler(),
                      (t.paused = !t.options.autoplay),
                      t.autoPlay(),
                      t.$slider.trigger("reInit", [t]);
                  }),
                  (t.prototype.resize = function () {
                    var t = this;
                    e(window).width() !== t.windowWidth &&
                      (clearTimeout(t.windowDelay),
                      (t.windowDelay = window.setTimeout(function () {
                        (t.windowWidth = e(window).width()),
                          t.checkResponsive(),
                          t.unslicked || t.setPosition();
                      }, 50)));
                  }),
                  (t.prototype.removeSlide = t.prototype.slickRemove =
                    function (e, t, n) {
                      var o = this;
                      if (
                        ((e =
                          "boolean" == typeof e
                            ? !0 === (t = e)
                              ? 0
                              : o.slideCount - 1
                            : !0 === t
                            ? --e
                            : e),
                        o.slideCount < 1 || e < 0 || e > o.slideCount - 1)
                      )
                        return !1;
                      o.unload(),
                        !0 === n
                          ? o.$slideTrack.children().remove()
                          : o.$slideTrack
                              .children(this.options.slide)
                              .eq(e)
                              .remove(),
                        (o.$slides = o.$slideTrack.children(
                          this.options.slide
                        )),
                        o.$slideTrack.children(this.options.slide).detach(),
                        o.$slideTrack.append(o.$slides),
                        (o.$slidesCache = o.$slides),
                        o.reinit();
                    }),
                  (t.prototype.setCSS = function (e) {
                    var t,
                      n,
                      o = this,
                      i = {};
                    !0 === o.options.rtl && (e = -e),
                      (t =
                        "left" == o.positionProp ? Math.ceil(e) + "px" : "0px"),
                      (n =
                        "top" == o.positionProp ? Math.ceil(e) + "px" : "0px"),
                      (i[o.positionProp] = e),
                      !1 === o.transformsEnabled
                        ? o.$slideTrack.css(i)
                        : ((i = {}),
                          !1 === o.cssTransitions
                            ? ((i[o.animType] =
                                "translate(" + t + ", " + n + ")"),
                              o.$slideTrack.css(i))
                            : ((i[o.animType] =
                                "translate3d(" + t + ", " + n + ", 0px)"),
                              o.$slideTrack.css(i)));
                  }),
                  (t.prototype.setDimensions = function () {
                    var e = this;
                    !1 === e.options.vertical
                      ? !0 === e.options.centerMode &&
                        e.$list.css({
                          padding: "0px " + e.options.centerPadding,
                        })
                      : (e.$list.height(
                          e.$slides.first().outerHeight(!0) *
                            e.options.slidesToShow
                        ),
                        !0 === e.options.centerMode &&
                          e.$list.css({
                            padding: e.options.centerPadding + " 0px",
                          })),
                      (e.listWidth = e.$list.width()),
                      (e.listHeight = e.$list.height()),
                      !1 === e.options.vertical &&
                      !1 === e.options.variableWidth
                        ? ((e.slideWidth = Math.ceil(
                            e.listWidth / e.options.slidesToShow
                          )),
                          e.$slideTrack.width(
                            Math.ceil(
                              e.slideWidth *
                                e.$slideTrack.children(".slick-slide").length
                            )
                          ))
                        : !0 === e.options.variableWidth
                        ? e.$slideTrack.width(5e3 * e.slideCount)
                        : ((e.slideWidth = Math.ceil(e.listWidth)),
                          e.$slideTrack.height(
                            Math.ceil(
                              e.$slides.first().outerHeight(!0) *
                                e.$slideTrack.children(".slick-slide").length
                            )
                          ));
                    var t =
                      e.$slides.first().outerWidth(!0) -
                      e.$slides.first().width();
                    !1 === e.options.variableWidth &&
                      e.$slideTrack
                        .children(".slick-slide")
                        .width(e.slideWidth - t);
                  }),
                  (t.prototype.setFade = function () {
                    var t,
                      n = this;
                    n.$slides.each(function (o, i) {
                      (t = n.slideWidth * o * -1),
                        !0 === n.options.rtl
                          ? e(i).css({
                              position: "relative",
                              right: t,
                              top: 0,
                              zIndex: n.options.zIndex - 2,
                              opacity: 0,
                            })
                          : e(i).css({
                              position: "relative",
                              left: t,
                              top: 0,
                              zIndex: n.options.zIndex - 2,
                              opacity: 0,
                            });
                    }),
                      n.$slides
                        .eq(n.currentSlide)
                        .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                  }),
                  (t.prototype.setHeight = function () {
                    var e = this;
                    if (
                      1 === e.options.slidesToShow &&
                      !0 === e.options.adaptiveHeight &&
                      !1 === e.options.vertical
                    ) {
                      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                      e.$list.css("height", t);
                    }
                  }),
                  (t.prototype.setOption = t.prototype.slickSetOption =
                    function () {
                      var t,
                        n,
                        o,
                        i,
                        r,
                        s = this,
                        a = !1;
                      if (
                        ("object" === e.type(arguments[0])
                          ? ((o = arguments[0]),
                            (a = arguments[1]),
                            (r = "multiple"))
                          : "string" === e.type(arguments[0]) &&
                            ((o = arguments[0]),
                            (i = arguments[1]),
                            (a = arguments[2]),
                            "responsive" === arguments[0] &&
                            "array" === e.type(arguments[1])
                              ? (r = "responsive")
                              : void 0 !== arguments[1] && (r = "single")),
                        "single" === r)
                      )
                        s.options[o] = i;
                      else if ("multiple" === r)
                        e.each(o, function (e, t) {
                          s.options[e] = t;
                        });
                      else if ("responsive" === r)
                        for (n in i)
                          if ("array" !== e.type(s.options.responsive))
                            s.options.responsive = [i[n]];
                          else {
                            for (t = s.options.responsive.length - 1; t >= 0; )
                              s.options.responsive[t].breakpoint ===
                                i[n].breakpoint &&
                                s.options.responsive.splice(t, 1),
                                t--;
                            s.options.responsive.push(i[n]);
                          }
                      a && (s.unload(), s.reinit());
                    }),
                  (t.prototype.setPosition = function () {
                    var e = this;
                    e.setDimensions(),
                      e.setHeight(),
                      !1 === e.options.fade
                        ? e.setCSS(e.getLeft(e.currentSlide))
                        : e.setFade(),
                      e.$slider.trigger("setPosition", [e]);
                  }),
                  (t.prototype.setProps = function () {
                    var e = this,
                      t = document.body.style;
                    (e.positionProp =
                      !0 === e.options.vertical ? "top" : "left"),
                      "top" === e.positionProp
                        ? e.$slider.addClass("slick-vertical")
                        : e.$slider.removeClass("slick-vertical"),
                      (void 0 === t.WebkitTransition &&
                        void 0 === t.MozTransition &&
                        void 0 === t.msTransition) ||
                        (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                      e.options.fade &&
                        ("number" == typeof e.options.zIndex
                          ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                          : (e.options.zIndex = e.defaults.zIndex)),
                      void 0 !== t.OTransform &&
                        ((e.animType = "OTransform"),
                        (e.transformType = "-o-transform"),
                        (e.transitionType = "OTransition"),
                        void 0 === t.perspectiveProperty &&
                          void 0 === t.webkitPerspective &&
                          (e.animType = !1)),
                      void 0 !== t.MozTransform &&
                        ((e.animType = "MozTransform"),
                        (e.transformType = "-moz-transform"),
                        (e.transitionType = "MozTransition"),
                        void 0 === t.perspectiveProperty &&
                          void 0 === t.MozPerspective &&
                          (e.animType = !1)),
                      void 0 !== t.webkitTransform &&
                        ((e.animType = "webkitTransform"),
                        (e.transformType = "-webkit-transform"),
                        (e.transitionType = "webkitTransition"),
                        void 0 === t.perspectiveProperty &&
                          void 0 === t.webkitPerspective &&
                          (e.animType = !1)),
                      void 0 !== t.msTransform &&
                        ((e.animType = "msTransform"),
                        (e.transformType = "-ms-transform"),
                        (e.transitionType = "msTransition"),
                        void 0 === t.msTransform && (e.animType = !1)),
                      void 0 !== t.transform &&
                        !1 !== e.animType &&
                        ((e.animType = "transform"),
                        (e.transformType = "transform"),
                        (e.transitionType = "transition")),
                      (e.transformsEnabled =
                        e.options.useTransform &&
                        null !== e.animType &&
                        !1 !== e.animType);
                  }),
                  (t.prototype.setSlideClasses = function (e) {
                    var t,
                      n,
                      o,
                      i,
                      r = this;
                    if (
                      ((n = r.$slider
                        .find(".slick-slide")
                        .removeClass("slick-active slick-center slick-current")
                        .attr("aria-hidden", "true")),
                      r.$slides.eq(e).addClass("slick-current"),
                      !0 === r.options.centerMode)
                    ) {
                      var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                      (t = Math.floor(r.options.slidesToShow / 2)),
                        !0 === r.options.infinite &&
                          (e >= t && e <= r.slideCount - 1 - t
                            ? r.$slides
                                .slice(e - t + s, e + t + 1)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                            : ((o = r.options.slidesToShow + e),
                              n
                                .slice(o - t + 1 + s, o + t + 2)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")),
                          0 === e
                            ? n
                                .eq(n.length - 1 - r.options.slidesToShow)
                                .addClass("slick-center")
                            : e === r.slideCount - 1 &&
                              n
                                .eq(r.options.slidesToShow)
                                .addClass("slick-center")),
                        r.$slides.eq(e).addClass("slick-center");
                    } else
                      e >= 0 && e <= r.slideCount - r.options.slidesToShow
                        ? r.$slides
                            .slice(e, e + r.options.slidesToShow)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")
                        : n.length <= r.options.slidesToShow
                        ? n
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")
                        : ((i = r.slideCount % r.options.slidesToShow),
                          (o =
                            !0 === r.options.infinite
                              ? r.options.slidesToShow + e
                              : e),
                          r.options.slidesToShow == r.options.slidesToScroll &&
                          r.slideCount - e < r.options.slidesToShow
                            ? n
                                .slice(o - (r.options.slidesToShow - i), o + i)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                            : n
                                .slice(o, o + r.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
                    ("ondemand" !== r.options.lazyLoad &&
                      "anticipated" !== r.options.lazyLoad) ||
                      r.lazyLoad();
                  }),
                  (t.prototype.setupInfinite = function () {
                    var t,
                      n,
                      o,
                      i = this;
                    if (
                      (!0 === i.options.fade && (i.options.centerMode = !1),
                      !0 === i.options.infinite &&
                        !1 === i.options.fade &&
                        ((n = null), i.slideCount > i.options.slidesToShow))
                    ) {
                      for (
                        o =
                          !0 === i.options.centerMode
                            ? i.options.slidesToShow + 1
                            : i.options.slidesToShow,
                          t = i.slideCount;
                        t > i.slideCount - o;
                        t -= 1
                      )
                        (n = t - 1),
                          e(i.$slides[n])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", n - i.slideCount)
                            .prependTo(i.$slideTrack)
                            .addClass("slick-cloned");
                      for (t = 0; t < o + i.slideCount; t += 1)
                        (n = t),
                          e(i.$slides[n])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", n + i.slideCount)
                            .appendTo(i.$slideTrack)
                            .addClass("slick-cloned");
                      i.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                          e(this).attr("id", "");
                        });
                    }
                  }),
                  (t.prototype.interrupt = function (e) {
                    e || this.autoPlay(), (this.interrupted = e);
                  }),
                  (t.prototype.selectHandler = function (t) {
                    var n = this,
                      o = e(t.target).is(".slick-slide")
                        ? e(t.target)
                        : e(t.target).parents(".slick-slide"),
                      i = parseInt(o.attr("data-slick-index"));
                    i || (i = 0),
                      n.slideCount <= n.options.slidesToShow
                        ? n.slideHandler(i, !1, !0)
                        : n.slideHandler(i);
                  }),
                  (t.prototype.slideHandler = function (e, t, n) {
                    var o,
                      i,
                      r,
                      s,
                      a,
                      l,
                      c = this;
                    if (
                      ((t = t || !1),
                      !(
                        (!0 === c.animating &&
                          !0 === c.options.waitForAnimate) ||
                        (!0 === c.options.fade && c.currentSlide === e)
                      ))
                    )
                      if (
                        (!1 === t && c.asNavFor(e),
                        (o = e),
                        (a = c.getLeft(o)),
                        (s = c.getLeft(c.currentSlide)),
                        (c.currentLeft =
                          null === c.swipeLeft ? s : c.swipeLeft),
                        !1 === c.options.infinite &&
                          !1 === c.options.centerMode &&
                          (e < 0 ||
                            e > c.getDotCount() * c.options.slidesToScroll))
                      )
                        !1 === c.options.fade &&
                          ((o = c.currentSlide),
                          !0 !== n && c.slideCount > c.options.slidesToShow
                            ? c.animateSlide(s, function () {
                                c.postSlide(o);
                              })
                            : c.postSlide(o));
                      else if (
                        !1 === c.options.infinite &&
                        !0 === c.options.centerMode &&
                        (e < 0 || e > c.slideCount - c.options.slidesToScroll)
                      )
                        !1 === c.options.fade &&
                          ((o = c.currentSlide),
                          !0 !== n && c.slideCount > c.options.slidesToShow
                            ? c.animateSlide(s, function () {
                                c.postSlide(o);
                              })
                            : c.postSlide(o));
                      else {
                        if (
                          (c.options.autoplay && clearInterval(c.autoPlayTimer),
                          (i =
                            o < 0
                              ? c.slideCount % c.options.slidesToScroll != 0
                                ? c.slideCount -
                                  (c.slideCount % c.options.slidesToScroll)
                                : c.slideCount + o
                              : o >= c.slideCount
                              ? c.slideCount % c.options.slidesToScroll != 0
                                ? 0
                                : o - c.slideCount
                              : o),
                          (c.animating = !0),
                          c.$slider.trigger("beforeChange", [
                            c,
                            c.currentSlide,
                            i,
                          ]),
                          (r = c.currentSlide),
                          (c.currentSlide = i),
                          c.setSlideClasses(c.currentSlide),
                          c.options.asNavFor &&
                            (l = (l = c.getNavTarget()).slick("getSlick"))
                              .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(c.currentSlide),
                          c.updateDots(),
                          c.updateArrows(),
                          !0 === c.options.fade)
                        )
                          return (
                            !0 !== n
                              ? (c.fadeSlideOut(r),
                                c.fadeSlide(i, function () {
                                  c.postSlide(i);
                                }))
                              : c.postSlide(i),
                            void c.animateHeight()
                          );
                        !0 !== n && c.slideCount > c.options.slidesToShow
                          ? c.animateSlide(a, function () {
                              c.postSlide(i);
                            })
                          : c.postSlide(i);
                      }
                  }),
                  (t.prototype.startLoad = function () {
                    var e = this;
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      (e.$prevArrow.hide(), e.$nextArrow.hide()),
                      !0 === e.options.dots &&
                        e.slideCount > e.options.slidesToShow &&
                        e.$dots.hide(),
                      e.$slider.addClass("slick-loading");
                  }),
                  (t.prototype.swipeDirection = function () {
                    var e,
                      t,
                      n,
                      o,
                      i = this;
                    return (
                      (e = i.touchObject.startX - i.touchObject.curX),
                      (t = i.touchObject.startY - i.touchObject.curY),
                      (n = Math.atan2(t, e)),
                      (o = Math.round((180 * n) / Math.PI)) < 0 &&
                        (o = 360 - Math.abs(o)),
                      o <= 45 && o >= 0
                        ? !1 === i.options.rtl
                          ? "left"
                          : "right"
                        : o <= 360 && o >= 315
                        ? !1 === i.options.rtl
                          ? "left"
                          : "right"
                        : o >= 135 && o <= 225
                        ? !1 === i.options.rtl
                          ? "right"
                          : "left"
                        : !0 === i.options.verticalSwiping
                        ? o >= 35 && o <= 135
                          ? "down"
                          : "up"
                        : "vertical"
                    );
                  }),
                  (t.prototype.swipeEnd = function (e) {
                    var t,
                      n,
                      o = this;
                    if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                      return (o.scrolling = !1), !1;
                    if (
                      ((o.interrupted = !1),
                      (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                      void 0 === o.touchObject.curX)
                    )
                      return !1;
                    if (
                      (!0 === o.touchObject.edgeHit &&
                        o.$slider.trigger("edge", [o, o.swipeDirection()]),
                      o.touchObject.swipeLength >= o.touchObject.minSwipe)
                    ) {
                      switch ((n = o.swipeDirection())) {
                        case "left":
                        case "down":
                          (t = o.options.swipeToSlide
                            ? o.checkNavigable(
                                o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                          break;
                        case "right":
                        case "up":
                          (t = o.options.swipeToSlide
                            ? o.checkNavigable(
                                o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                      }
                      "vertical" != n &&
                        (o.slideHandler(t),
                        (o.touchObject = {}),
                        o.$slider.trigger("swipe", [o, n]));
                    } else
                      o.touchObject.startX !== o.touchObject.curX &&
                        (o.slideHandler(o.currentSlide), (o.touchObject = {}));
                  }),
                  (t.prototype.swipeHandler = function (e) {
                    var t = this;
                    if (
                      !(
                        !1 === t.options.swipe ||
                        ("ontouchend" in document && !1 === t.options.swipe) ||
                        (!1 === t.options.draggable &&
                          -1 !== e.type.indexOf("mouse"))
                      )
                    )
                      switch (
                        ((t.touchObject.fingerCount =
                          e.originalEvent && void 0 !== e.originalEvent.touches
                            ? e.originalEvent.touches.length
                            : 1),
                        (t.touchObject.minSwipe =
                          t.listWidth / t.options.touchThreshold),
                        !0 === t.options.verticalSwiping &&
                          (t.touchObject.minSwipe =
                            t.listHeight / t.options.touchThreshold),
                        e.data.action)
                      ) {
                        case "start":
                          t.swipeStart(e);
                          break;
                        case "move":
                          t.swipeMove(e);
                          break;
                        case "end":
                          t.swipeEnd(e);
                      }
                  }),
                  (t.prototype.swipeMove = function (e) {
                    var t,
                      n,
                      o,
                      i,
                      r,
                      s,
                      a = this;
                    return (
                      (r =
                        void 0 !== e.originalEvent
                          ? e.originalEvent.touches
                          : null),
                      !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                        ((t = a.getLeft(a.currentSlide)),
                        (a.touchObject.curX =
                          void 0 !== r ? r[0].pageX : e.clientX),
                        (a.touchObject.curY =
                          void 0 !== r ? r[0].pageY : e.clientY),
                        (a.touchObject.swipeLength = Math.round(
                          Math.sqrt(
                            Math.pow(
                              a.touchObject.curX - a.touchObject.startX,
                              2
                            )
                          )
                        )),
                        (s = Math.round(
                          Math.sqrt(
                            Math.pow(
                              a.touchObject.curY - a.touchObject.startY,
                              2
                            )
                          )
                        )),
                        !a.options.verticalSwiping && !a.swiping && s > 4
                          ? ((a.scrolling = !0), !1)
                          : (!0 === a.options.verticalSwiping &&
                              (a.touchObject.swipeLength = s),
                            (n = a.swipeDirection()),
                            void 0 !== e.originalEvent &&
                              a.touchObject.swipeLength > 4 &&
                              ((a.swiping = !0), e.preventDefault()),
                            (i =
                              (!1 === a.options.rtl ? 1 : -1) *
                              (a.touchObject.curX > a.touchObject.startX
                                ? 1
                                : -1)),
                            !0 === a.options.verticalSwiping &&
                              (i =
                                a.touchObject.curY > a.touchObject.startY
                                  ? 1
                                  : -1),
                            (o = a.touchObject.swipeLength),
                            (a.touchObject.edgeHit = !1),
                            !1 === a.options.infinite &&
                              ((0 === a.currentSlide && "right" === n) ||
                                (a.currentSlide >= a.getDotCount() &&
                                  "left" === n)) &&
                              ((o =
                                a.touchObject.swipeLength *
                                a.options.edgeFriction),
                              (a.touchObject.edgeHit = !0)),
                            !1 === a.options.vertical
                              ? (a.swipeLeft = t + o * i)
                              : (a.swipeLeft =
                                  t + o * (a.$list.height() / a.listWidth) * i),
                            !0 === a.options.verticalSwiping &&
                              (a.swipeLeft = t + o * i),
                            !0 !== a.options.fade &&
                              !1 !== a.options.touchMove &&
                              (!0 === a.animating
                                ? ((a.swipeLeft = null), !1)
                                : void a.setCSS(a.swipeLeft))))
                    );
                  }),
                  (t.prototype.swipeStart = function (e) {
                    var t,
                      n = this;
                    if (
                      ((n.interrupted = !0),
                      1 !== n.touchObject.fingerCount ||
                        n.slideCount <= n.options.slidesToShow)
                    )
                      return (n.touchObject = {}), !1;
                    void 0 !== e.originalEvent &&
                      void 0 !== e.originalEvent.touches &&
                      (t = e.originalEvent.touches[0]),
                      (n.touchObject.startX = n.touchObject.curX =
                        void 0 !== t ? t.pageX : e.clientX),
                      (n.touchObject.startY = n.touchObject.curY =
                        void 0 !== t ? t.pageY : e.clientY),
                      (n.dragging = !0);
                  }),
                  (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
                    function () {
                      var e = this;
                      null !== e.$slidesCache &&
                        (e.unload(),
                        e.$slideTrack.children(this.options.slide).detach(),
                        e.$slidesCache.appendTo(e.$slideTrack),
                        e.reinit());
                    }),
                  (t.prototype.unload = function () {
                    var t = this;
                    e(".slick-cloned", t.$slider).remove(),
                      t.$dots && t.$dots.remove(),
                      t.$prevArrow &&
                        t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove(),
                      t.$nextArrow &&
                        t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove(),
                      t.$slides
                        .removeClass(
                          "slick-slide slick-active slick-visible slick-current"
                        )
                        .attr("aria-hidden", "true")
                        .css("width", "");
                  }),
                  (t.prototype.unslick = function (e) {
                    var t = this;
                    t.$slider.trigger("unslick", [t, e]), t.destroy();
                  }),
                  (t.prototype.updateArrows = function () {
                    var e = this;
                    Math.floor(e.options.slidesToShow / 2),
                      !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        !e.options.infinite &&
                        (e.$prevArrow
                          .removeClass("slick-disabled")
                          .attr("aria-disabled", "false"),
                        e.$nextArrow
                          .removeClass("slick-disabled")
                          .attr("aria-disabled", "false"),
                        0 === e.currentSlide
                          ? (e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                            e.$nextArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                          : e.currentSlide >=
                              e.slideCount - e.options.slidesToShow &&
                            !1 === e.options.centerMode
                          ? (e.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                            e.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                          : e.currentSlide >= e.slideCount - 1 &&
                            !0 === e.options.centerMode &&
                            (e.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                            e.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false")));
                  }),
                  (t.prototype.updateDots = function () {
                    var e = this;
                    null !== e.$dots &&
                      (e.$dots.find("li").removeClass("slick-active").end(),
                      e.$dots
                        .find("li")
                        .eq(
                          Math.floor(e.currentSlide / e.options.slidesToScroll)
                        )
                        .addClass("slick-active"));
                  }),
                  (t.prototype.visibility = function () {
                    var e = this;
                    e.options.autoplay &&
                      (document[e.hidden]
                        ? (e.interrupted = !0)
                        : (e.interrupted = !1));
                  }),
                  (e.fn.slick = function () {
                    var e,
                      n,
                      o = this,
                      i = arguments[0],
                      r = Array.prototype.slice.call(arguments, 1),
                      a = o.length;
                    for (e = 0; e < a; e++)
                      if (
                        ("object" == s(i) || void 0 === i
                          ? (o[e].slick = new t(o[e], i))
                          : (n = o[e].slick[i].apply(o[e].slick, r)),
                        void 0 !== n)
                      )
                        return n;
                    return o;
                  });
                var n;
              })
                ? o.apply(t, i)
                : o) || (e.exports = r);
      })();
    },
    function (e, t, n) {
      var o, i, r;
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (r = function () {
        "use strict";
        var e = "undefined" != typeof document && document.documentMode,
          t = {
            rootMargin: "0px",
            threshold: 0,
            load: function (t) {
              if ("picture" === t.nodeName.toLowerCase()) {
                var n = document.createElement("img");
                e &&
                  t.getAttribute("data-iesrc") &&
                  (n.src = t.getAttribute("data-iesrc")),
                  t.getAttribute("data-alt") &&
                    (n.alt = t.getAttribute("data-alt")),
                  t.append(n);
              }
              if (
                "video" === t.nodeName.toLowerCase() &&
                !t.getAttribute("data-src") &&
                t.children
              ) {
                for (
                  var o = t.children, i = void 0, r = 0;
                  r <= o.length - 1;
                  r++
                )
                  (i = o[r].getAttribute("data-src")) && (o[r].src = i);
                t.load();
              }
              if (
                (t.getAttribute("data-src") &&
                  (t.src = t.getAttribute("data-src")),
                t.getAttribute("data-srcset") &&
                  t.setAttribute("srcset", t.getAttribute("data-srcset")),
                t.getAttribute("data-background-image"))
              )
                t.style.backgroundImage =
                  "url('" +
                  t
                    .getAttribute("data-background-image")
                    .split(",")
                    .join("'),url('") +
                  "')";
              else if (t.getAttribute("data-background-image-set")) {
                var s = t.getAttribute("data-background-image-set").split(","),
                  a = s[0].substr(0, s[0].indexOf(" ")) || s[0];
                (a = -1 === a.indexOf("url(") ? "url(" + a + ")" : a),
                  1 === s.length
                    ? (t.style.backgroundImage = a)
                    : t.setAttribute(
                        "style",
                        (t.getAttribute("style") || "") +
                          "background-image: " +
                          a +
                          "; background-image: -webkit-image-set(" +
                          s +
                          "); background-image: image-set(" +
                          s +
                          ")"
                      );
              }
              t.getAttribute("data-toggle-class") &&
                t.classList.toggle(t.getAttribute("data-toggle-class"));
            },
            loaded: function () {},
          };
        function n(e) {
          e.setAttribute("data-loaded", !0);
        }
        var o = function (e) {
          return "true" === e.getAttribute("data-loaded");
        };
        return function () {
          var e,
            i,
            r =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : ".lozad",
            s =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = Object.assign({}, t, s),
            l = a.root,
            c = a.rootMargin,
            p = a.threshold,
            u = a.load,
            d = a.loaded,
            f = void 0;
          return (
            "undefined" != typeof window &&
              window.IntersectionObserver &&
              (f = new IntersectionObserver(
                ((e = u),
                (i = d),
                function (t, r) {
                  t.forEach(function (t) {
                    (0 < t.intersectionRatio || t.isIntersecting) &&
                      (r.unobserve(t.target),
                      o(t.target) || (e(t.target), n(t.target), i(t.target)));
                  });
                }),
                { root: l, rootMargin: c, threshold: p }
              )),
            {
              observe: function () {
                for (
                  var e = (function (e) {
                      var t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : document;
                      return e instanceof Element
                        ? [e]
                        : e instanceof NodeList
                        ? e
                        : t.querySelectorAll(e);
                    })(r, l),
                    t = 0;
                  t < e.length;
                  t++
                )
                  o(e[t]) ||
                    (f ? f.observe(e[t]) : (u(e[t]), n(e[t]), d(e[t])));
              },
              triggerLoad: function (e) {
                o(e) || (u(e), n(e), d(e));
              },
              observer: f,
            }
          );
        };
      }),
        "object" == s(t) && void 0 !== e
          ? (e.exports = r())
          : void 0 ===
              (i = "function" == typeof (o = r) ? o.call(t, n, t, e) : o) ||
            (e.exports = i);
    },
    function (e, t, n) {
      var o, i, r;
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (r = function () {
        "use strict";
        function e() {
          return "undefined" != typeof window;
        }
        function t(e) {
          return (r = e) &&
            r.document &&
            (function (e) {
              return 9 === e.nodeType;
            })(r.document)
            ? ((n = (t = e).document),
              (o = n.body),
              (i = n.documentElement),
              {
                scrollHeight: function () {
                  return Math.max(
                    o.scrollHeight,
                    i.scrollHeight,
                    o.offsetHeight,
                    i.offsetHeight,
                    o.clientHeight,
                    i.clientHeight
                  );
                },
                height: function () {
                  return t.innerHeight || i.clientHeight || o.clientHeight;
                },
                scrollY: function () {
                  return void 0 !== t.pageYOffset
                    ? t.pageYOffset
                    : (i || o.parentNode || o).scrollTop;
                },
              })
            : (function (e) {
                return {
                  scrollHeight: function () {
                    return Math.max(
                      e.scrollHeight,
                      e.offsetHeight,
                      e.clientHeight
                    );
                  },
                  height: function () {
                    return Math.max(e.offsetHeight, e.clientHeight);
                  },
                  scrollY: function () {
                    return e.scrollTop;
                  },
                };
              })(e);
          var t, n, o, i, r;
        }
        function n(e, n, o) {
          var i,
            r = (function () {
              var e = !1;
              try {
                var t = {
                  get passive() {
                    e = !0;
                  },
                };
                window.addEventListener("test", t, t),
                  window.removeEventListener("test", t, t);
              } catch (t) {
                e = !1;
              }
              return e;
            })(),
            s = !1,
            a = t(e),
            l = a.scrollY(),
            c = {};
          function p() {
            var e = Math.round(a.scrollY()),
              t = a.height(),
              i = a.scrollHeight();
            (c.scrollY = e),
              (c.lastScrollY = l),
              (c.direction = e > l ? "down" : "up"),
              (c.distance = Math.abs(e - l)),
              (c.isOutOfBounds = e < 0 || e + t > i),
              (c.top = e <= n.offset),
              (c.bottom = e + t >= i),
              (c.toleranceExceeded = c.distance > n.tolerance[c.direction]),
              o(c),
              (l = e),
              (s = !1);
          }
          function u() {
            s || ((s = !0), (i = requestAnimationFrame(p)));
          }
          var d = !!r && { passive: !0, capture: !1 };
          return (
            e.addEventListener("scroll", u, d),
            {
              destroy: function () {
                cancelAnimationFrame(i), e.removeEventListener("scroll", u, d);
              },
            }
          );
        }
        function o(e, t) {
          var n;
          (t = t || {}),
            Object.assign(this, o.options, t),
            (this.classes = Object.assign({}, o.options.classes, t.classes)),
            (this.elem = e),
            (this.tolerance =
              (n = this.tolerance) === Object(n) ? n : { down: n, up: n }),
            (this.initialised = !1),
            (this.frozen = !1);
        }
        return (
          (o.prototype = {
            constructor: o,
            init: function () {
              return (
                o.cutsTheMustard &&
                  !this.initialised &&
                  (this.addClass("initial"),
                  (this.initialised = !0),
                  setTimeout(
                    function (e) {
                      e.scrollTracker = n(
                        e.scroller,
                        { offset: e.offset, tolerance: e.tolerance },
                        e.update.bind(e)
                      );
                    },
                    100,
                    this
                  )),
                this
              );
            },
            destroy: function () {
              (this.initialised = !1),
                Object.keys(this.classes).forEach(this.removeClass, this),
                this.scrollTracker.destroy();
            },
            unpin: function () {
              (!this.hasClass("pinned") && this.hasClass("unpinned")) ||
                (this.addClass("unpinned"),
                this.removeClass("pinned"),
                this.onUnpin && this.onUnpin.call(this));
            },
            pin: function () {
              this.hasClass("unpinned") &&
                (this.addClass("pinned"),
                this.removeClass("unpinned"),
                this.onPin && this.onPin.call(this));
            },
            freeze: function () {
              (this.frozen = !0), this.addClass("frozen");
            },
            unfreeze: function () {
              (this.frozen = !1), this.removeClass("frozen");
            },
            top: function () {
              this.hasClass("top") ||
                (this.addClass("top"),
                this.removeClass("notTop"),
                this.onTop && this.onTop.call(this));
            },
            notTop: function () {
              this.hasClass("notTop") ||
                (this.addClass("notTop"),
                this.removeClass("top"),
                this.onNotTop && this.onNotTop.call(this));
            },
            bottom: function () {
              this.hasClass("bottom") ||
                (this.addClass("bottom"),
                this.removeClass("notBottom"),
                this.onBottom && this.onBottom.call(this));
            },
            notBottom: function () {
              this.hasClass("notBottom") ||
                (this.addClass("notBottom"),
                this.removeClass("bottom"),
                this.onNotBottom && this.onNotBottom.call(this));
            },
            shouldUnpin: function (e) {
              return "down" === e.direction && !e.top && e.toleranceExceeded;
            },
            shouldPin: function (e) {
              return ("up" === e.direction && e.toleranceExceeded) || e.top;
            },
            addClass: function (e) {
              this.elem.classList.add(this.classes[e]);
            },
            removeClass: function (e) {
              this.elem.classList.remove(this.classes[e]);
            },
            hasClass: function (e) {
              return this.elem.classList.contains(this.classes[e]);
            },
            update: function (e) {
              e.isOutOfBounds ||
                (!0 !== this.frozen &&
                  (e.top ? this.top() : this.notTop(),
                  e.bottom ? this.bottom() : this.notBottom(),
                  this.shouldUnpin(e)
                    ? this.unpin()
                    : this.shouldPin(e) && this.pin()));
            },
          }),
          (o.options = {
            tolerance: { up: 0, down: 0 },
            offset: 0,
            scroller: e() ? window : null,
            classes: {
              frozen: "headroom--frozen",
              pinned: "headroom--pinned",
              unpinned: "headroom--unpinned",
              top: "headroom--top",
              notTop: "headroom--not-top",
              bottom: "headroom--bottom",
              notBottom: "headroom--not-bottom",
              initial: "headroom",
            },
          }),
          (o.cutsTheMustard = !!(
            e() &&
            function () {}.bind &&
            "classList" in document.documentElement &&
            Object.assign &&
            Object.keys &&
            requestAnimationFrame
          )),
          o
        );
      }),
        "object" === s(t) && void 0 !== e
          ? (e.exports = r())
          : void 0 ===
              (i = "function" == typeof (o = r) ? o.call(t, n, t, e) : o) ||
            (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var o = n(10);
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      var r = "undefined" != typeof window && "undefined" != typeof document,
        s = r ? navigator.userAgent : "",
        a = /MSIE |Trident\//.test(s),
        l = /UCBrowser\//.test(s),
        c =
          r && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream,
        p = {
          a11y: !0,
          allowHTML: !0,
          animateFill: !0,
          animation: "shift-away",
          appendTo: function () {
            return document.body;
          },
          aria: "describedby",
          arrow: !1,
          arrowType: "sharp",
          boundary: "scrollParent",
          content: "",
          delay: 0,
          distance: 10,
          duration: [325, 275],
          flip: !0,
          flipBehavior: "flip",
          flipOnUpdate: !1,
          followCursor: !1,
          hideOnClick: !0,
          ignoreAttributes: !1,
          inertia: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          lazy: !0,
          maxWidth: 350,
          multiple: !1,
          offset: 0,
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          placement: "top",
          popperOptions: {},
          role: "tooltip",
          showOnInit: !1,
          size: "regular",
          sticky: !1,
          target: "",
          theme: "dark",
          touch: !0,
          touchHold: !1,
          trigger: "mouseenter focus",
          triggerTarget: null,
          updateDuration: 0,
          wait: null,
          zIndex: 9999,
        },
        u = [
          "arrow",
          "arrowType",
          "boundary",
          "distance",
          "flip",
          "flipBehavior",
          "flipOnUpdate",
          "offset",
          "placement",
          "popperOptions",
        ],
        d = r ? Element.prototype : {},
        f =
          d.matches ||
          d.matchesSelector ||
          d.webkitMatchesSelector ||
          d.mozMatchesSelector ||
          d.msMatchesSelector;
      function h(e) {
        return [].slice.call(e);
      }
      function m(e, t) {
        return v(e, function (e) {
          return f.call(e, t);
        });
      }
      function v(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
        return null;
      }
      var g = { passive: !0 },
        y = 4,
        b = "x-placement",
        w = "x-out-of-boundaries",
        x = "tippy-iOS",
        k = "tippy-active",
        S = "tippy-popper",
        T = "tippy-tooltip",
        C = "tippy-content",
        E = "tippy-backdrop",
        A = "tippy-arrow",
        O = "tippy-roundarrow",
        L = ".".concat(S),
        j = ".".concat(T),
        $ = ".".concat(C),
        N = ".".concat(E),
        M = ".".concat(A),
        H = ".".concat(O),
        D = !1;
      function z() {
        D ||
          ((D = !0),
          c && document.body.classList.add(x),
          window.performance && document.addEventListener("mousemove", q));
      }
      var P = 0;
      function q() {
        var e = performance.now();
        e - P < 20 &&
          ((D = !1),
          document.removeEventListener("mousemove", q),
          c || document.body.classList.remove(x)),
          (P = e);
      }
      function I() {
        var e = document.activeElement;
        e && e.blur && e._tippy && e.blur();
      }
      var F = Object.keys(p);
      function W(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }
      function B(e, t, n) {
        if (Array.isArray(e)) {
          var o = e[t];
          return null == o ? n : o;
        }
        return e;
      }
      function R(e, t) {
        return 0 === t
          ? e
          : function (o) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(o);
                }, t));
            };
        var n;
      }
      function _(e, t) {
        return e && e.modifiers && e.modifiers[t];
      }
      function Y(e, t) {
        return e.indexOf(t) > -1;
      }
      function X(e) {
        return e instanceof Element;
      }
      function U(e) {
        return !(!e || !W(e, "isVirtual")) || X(e);
      }
      function V(e, t) {
        return "function" == typeof e ? e.apply(null, t) : e;
      }
      function G(e, t) {
        e.filter(function (e) {
          return "flip" === e.name;
        })[0].enabled = t;
      }
      function K() {
        return document.createElement("div");
      }
      function J(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = "".concat(t, "ms"));
        });
      }
      function Q(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Z(e, t) {
        var n = i(
          {},
          t,
          { content: V(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e) {
                return F.reduce(function (t, n) {
                  var o = (
                    e.getAttribute("data-tippy-".concat(n)) || ""
                  ).trim();
                  if (!o) return t;
                  if ("content" === n) t[n] = o;
                  else
                    try {
                      t[n] = JSON.parse(o);
                    } catch (e) {
                      t[n] = o;
                    }
                  return t;
                }, {});
              })(e)
        );
        return (n.arrow || l) && (n.animateFill = !1), n;
      }
      function ee(e, t) {
        Object.keys(e).forEach(function (e) {
          if (!W(t, e))
            throw new Error("[tippy]: `".concat(e, "` is not a valid option"));
        });
      }
      function te(e, t) {
        e.innerHTML = X(t) ? t.innerHTML : t;
      }
      function ne(e, t) {
        if (X(t.content)) te(e, ""), e.appendChild(t.content);
        else if ("function" != typeof t.content) {
          e[t.allowHTML ? "innerHTML" : "textContent"] = t.content;
        }
      }
      function oe(e) {
        return {
          tooltip: e.querySelector(j),
          backdrop: e.querySelector(N),
          content: e.querySelector($),
          arrow: e.querySelector(M) || e.querySelector(H),
        };
      }
      function ie(e) {
        e.setAttribute("data-inertia", "");
      }
      function re(e) {
        var t = K();
        return (
          "round" === e
            ? ((t.className = O),
              te(
                t,
                '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>'
              ))
            : (t.className = A),
          t
        );
      }
      function se() {
        var e = K();
        return (e.className = E), e.setAttribute("data-state", "hidden"), e;
      }
      function ae(e, t) {
        e.setAttribute("tabindex", "-1"),
          t.setAttribute("data-interactive", "");
      }
      function le(e, t, n) {
        var o =
          l && void 0 !== document.body.style.webkitTransition
            ? "webkitTransitionEnd"
            : "transitionend";
        e[t + "EventListener"](o, n);
      }
      function ce(e) {
        var t = e.getAttribute(b);
        return t ? t.split("-")[0] : "";
      }
      function pe(e, t, n) {
        n.split(" ").forEach(function (n) {
          e.classList[t](n + "-theme");
        });
      }
      function ue(e, t) {
        var n = K();
        (n.className = S),
          (n.id = "tippy-".concat(e)),
          (n.style.zIndex = "" + t.zIndex),
          (n.style.position = "absolute"),
          (n.style.top = "0"),
          (n.style.left = "0"),
          t.role && n.setAttribute("role", t.role);
        var o = K();
        (o.className = T),
          (o.style.maxWidth =
            t.maxWidth + ("number" == typeof t.maxWidth ? "px" : "")),
          o.setAttribute("data-size", t.size),
          o.setAttribute("data-animation", t.animation),
          o.setAttribute("data-state", "hidden"),
          pe(o, "add", t.theme);
        var i = K();
        return (
          (i.className = C),
          i.setAttribute("data-state", "hidden"),
          t.interactive && ae(n, o),
          t.arrow && o.appendChild(re(t.arrowType)),
          t.animateFill &&
            (o.appendChild(se()), o.setAttribute("data-animatefill", "")),
          t.inertia && ie(o),
          ne(i, t),
          o.appendChild(i),
          n.appendChild(o),
          n
        );
      }
      function de(e, t, n) {
        var o = oe(e),
          i = o.tooltip,
          r = o.content,
          s = o.backdrop,
          a = o.arrow;
        (e.style.zIndex = "" + n.zIndex),
          i.setAttribute("data-size", n.size),
          i.setAttribute("data-animation", n.animation),
          (i.style.maxWidth =
            n.maxWidth + ("number" == typeof n.maxWidth ? "px" : "")),
          n.role ? e.setAttribute("role", n.role) : e.removeAttribute("role"),
          t.content !== n.content && ne(r, n),
          !t.animateFill && n.animateFill
            ? (i.appendChild(se()), i.setAttribute("data-animatefill", ""))
            : t.animateFill &&
              !n.animateFill &&
              (i.removeChild(s), i.removeAttribute("data-animatefill")),
          !t.arrow && n.arrow
            ? i.appendChild(re(n.arrowType))
            : t.arrow && !n.arrow && i.removeChild(a),
          t.arrow &&
            n.arrow &&
            t.arrowType !== n.arrowType &&
            i.replaceChild(re(n.arrowType), a),
          !t.interactive && n.interactive
            ? ae(e, i)
            : t.interactive &&
              !n.interactive &&
              (function (e, t) {
                e.removeAttribute("tabindex"),
                  t.removeAttribute("data-interactive");
              })(e, i),
          !t.inertia && n.inertia
            ? ie(i)
            : t.inertia &&
              !n.inertia &&
              (function (e) {
                e.removeAttribute("data-inertia");
              })(i),
          t.theme !== n.theme &&
            (pe(i, "remove", t.theme), pe(i, "add", n.theme));
      }
      var fe = 1,
        he = [];
      function me(e, t) {
        var n,
          r,
          s,
          l,
          c,
          d = Z(e, t);
        if (!d.multiple && e._tippy) return null;
        var x,
          S,
          T,
          C,
          E,
          A = !1,
          O = !1,
          j = !1,
          $ = !1,
          N = [],
          M = R(ye, d.interactiveDebounce),
          H = fe++,
          z = ue(H, d),
          P = oe(z),
          q = {
            id: H,
            reference: e,
            popper: z,
            popperChildren: P,
            popperInstance: null,
            props: d,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            clearDelayTimeouts: Le,
            set: je,
            setContent: function (e) {
              je({ content: e });
            },
            show: $e,
            hide: Ne,
            enable: function () {
              q.state.isEnabled = !0;
            },
            disable: function () {
              q.state.isEnabled = !1;
            },
            destroy: function (t) {
              if (q.state.isDestroyed) return;
              (O = !0), q.state.isMounted && Ne(0);
              pe(), delete e._tippy;
              var n = q.props.target;
              n &&
                t &&
                X(e) &&
                h(e.querySelectorAll(n)).forEach(function (e) {
                  e._tippy && e._tippy.destroy();
                });
              q.popperInstance && q.popperInstance.destroy();
              (O = !1), (q.state.isDestroyed = !0);
            },
          };
        return (
          (e._tippy = q),
          (z._tippy = q),
          ae(),
          d.lazy || Ce(),
          d.showOnInit && Ee(),
          !d.a11y ||
            d.target ||
            !X((E = U())) ||
            (f.call(
              E,
              "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]"
            ) &&
              !E.hasAttribute("disabled")) ||
            U().setAttribute("tabindex", "0"),
          z.addEventListener("mouseenter", function (e) {
            q.props.interactive &&
              q.state.isVisible &&
              "mouseenter" === n &&
              Ee(e, !0);
          }),
          z.addEventListener("mouseleave", function () {
            q.props.interactive &&
              "mouseenter" === n &&
              document.addEventListener("mousemove", M);
          }),
          q
        );
        function I() {
          document.removeEventListener("mousemove", ve);
        }
        function F() {
          document.body.removeEventListener("mouseleave", Ae),
            document.removeEventListener("mousemove", M),
            (he = he.filter(function (e) {
              return e !== M;
            }));
        }
        function U() {
          return q.props.triggerTarget || e;
        }
        function K() {
          document.addEventListener("click", Oe, !0);
        }
        function te() {
          document.removeEventListener("click", Oe, !0);
        }
        function ne() {
          return [
            q.popperChildren.tooltip,
            q.popperChildren.backdrop,
            q.popperChildren.content,
          ];
        }
        function ie() {
          var e = q.props.followCursor;
          return (e && "focus" !== n) || (D && "initial" === e);
        }
        function re(e, t) {
          var n = q.popperChildren.tooltip;
          function o(e) {
            e.target === n && (le(n, "remove", o), t());
          }
          if (0 === e) return t();
          le(n, "remove", T), le(n, "add", o), (T = o);
        }
        function se(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          U().addEventListener(e, t, n),
            N.push({ eventType: e, handler: t, options: n });
        }
        function ae() {
          q.props.touchHold &&
            !q.props.target &&
            (se("touchstart", ge, g), se("touchend", be, g)),
            q.props.trigger
              .trim()
              .split(" ")
              .forEach(function (e) {
                if ("manual" !== e)
                  if (q.props.target)
                    switch (e) {
                      case "mouseenter":
                        se("mouseover", xe), se("mouseout", ke);
                        break;
                      case "focus":
                        se("focusin", xe), se("focusout", ke);
                        break;
                      case "click":
                        se(e, xe);
                    }
                  else
                    switch ((se(e, ge), e)) {
                      case "mouseenter":
                        se("mouseleave", be);
                        break;
                      case "focus":
                        se(a ? "focusout" : "blur", we);
                    }
              });
        }
        function pe() {
          N.forEach(function (e) {
            var t = e.eventType,
              n = e.handler,
              o = e.options;
            U().removeEventListener(t, n, o);
          }),
            (N = []);
        }
        function ve(t) {
          var n = (r = t),
            o = n.clientX,
            s = n.clientY;
          if (C) {
            var a = v(t.target, function (t) {
                return t === e;
              }),
              l = e.getBoundingClientRect(),
              c = q.props.followCursor,
              p = "horizontal" === c,
              u = "vertical" === c,
              d = Y(["top", "bottom"], ce(z)),
              f = z.getAttribute(b),
              h = !!f && !!f.split("-")[1],
              m = d ? z.offsetWidth : z.offsetHeight,
              g = m / 2,
              y = d ? 0 : h ? m : g,
              w = d ? (h ? m : g) : 0;
            (!a && q.props.interactive) ||
              ((q.popperInstance.reference = i({}, q.popperInstance.reference, {
                referenceNode: e,
                clientWidth: 0,
                clientHeight: 0,
                getBoundingClientRect: function () {
                  return {
                    width: d ? m : 0,
                    height: d ? 0 : m,
                    top: (p ? l.top : s) - y,
                    bottom: (p ? l.bottom : s) + y,
                    left: (u ? l.left : o) - w,
                    right: (u ? l.right : o) + w,
                  };
                },
              })),
              q.popperInstance.update()),
              "initial" === c && q.state.isVisible && I();
          }
        }
        function ge(e) {
          q.state.isEnabled &&
            !Se(e) &&
            (q.state.isVisible ||
              ((n = e.type),
              e instanceof MouseEvent &&
                ((r = e),
                he.forEach(function (t) {
                  return t(e);
                }))),
            "click" === e.type &&
            !1 !== q.props.hideOnClick &&
            q.state.isVisible
              ? Ae()
              : Ee(e));
        }
        function ye(t) {
          var n = m(t.target, L) === z,
            o = v(t.target, function (t) {
              return t === e;
            });
          n ||
            o ||
            ((function (e, t, n, o) {
              if (!e) return !0;
              var i = n.clientX,
                r = n.clientY,
                s = o.interactiveBorder,
                a = o.distance,
                l = t.top - r > ("top" === e ? s + a : s),
                c = r - t.bottom > ("bottom" === e ? s + a : s),
                p = t.left - i > ("left" === e ? s + a : s),
                u = i - t.right > ("right" === e ? s + a : s);
              return l || c || p || u;
            })(ce(z), z.getBoundingClientRect(), t, q.props) &&
              (F(), Ae()));
        }
        function be(e) {
          if (!Se(e))
            return q.props.interactive
              ? (document.body.addEventListener("mouseleave", Ae),
                document.addEventListener("mousemove", M),
                void he.push(M))
              : void Ae();
        }
        function we(e) {
          e.target === U() &&
            ((q.props.interactive &&
              e.relatedTarget &&
              z.contains(e.relatedTarget)) ||
              Ae());
        }
        function xe(e) {
          m(e.target, q.props.target) && Ee(e);
        }
        function ke(e) {
          m(e.target, q.props.target) && Ae();
        }
        function Se(e) {
          var t = "ontouchstart" in window,
            n = Y(e.type, "touch"),
            o = q.props.touchHold;
          return (t && D && o && !n) || (D && !o && n);
        }
        function Te() {
          !$ &&
            S &&
            (($ = !0),
            (function (e) {
              e.offsetHeight;
            })(z),
            S());
        }
        function Ce() {
          var t = q.props.popperOptions,
            n = q.popperChildren,
            r = n.tooltip,
            s = n.arrow,
            a = _(t, "preventOverflow");
          function l(e) {
            q.props.flip &&
              !q.props.flipOnUpdate &&
              (e.flipped && (q.popperInstance.options.placement = e.placement),
              G(q.popperInstance.modifiers, !1)),
              r.setAttribute(b, e.placement),
              !1 !== e.attributes[w]
                ? r.setAttribute(w, "")
                : r.removeAttribute(w),
              x &&
                x !== e.placement &&
                j &&
                ((r.style.transition = "none"),
                requestAnimationFrame(function () {
                  r.style.transition = "";
                })),
              (x = e.placement),
              (j = q.state.isVisible);
            var t = ce(z),
              n = r.style;
            (n.top = n.bottom = n.left = n.right = ""),
              (n[t] = -(q.props.distance - 10) + "px");
            var o = a && void 0 !== a.padding ? a.padding : y,
              s = "number" == typeof o,
              l = i(
                {
                  top: s ? o : o.top,
                  bottom: s ? o : o.bottom,
                  left: s ? o : o.left,
                  right: s ? o : o.right,
                },
                !s && o
              );
            (l[t] = s ? o + q.props.distance : (o[t] || 0) + q.props.distance),
              (q.popperInstance.modifiers.filter(function (e) {
                return "preventOverflow" === e.name;
              })[0].padding = l),
              (C = l);
          }
          var c = i({ eventsEnabled: !1, placement: q.props.placement }, t, {
            modifiers: i({}, t ? t.modifiers : {}, {
              preventOverflow: i(
                { boundariesElement: q.props.boundary, padding: y },
                a
              ),
              arrow: i({ element: s, enabled: !!s }, _(t, "arrow")),
              flip: i(
                {
                  enabled: q.props.flip,
                  padding: q.props.distance + y,
                  behavior: q.props.flipBehavior,
                },
                _(t, "flip")
              ),
              offset: i({ offset: q.props.offset }, _(t, "offset")),
            }),
            onCreate: function (e) {
              l(e), Te(), t && t.onCreate && t.onCreate(e);
            },
            onUpdate: function (e) {
              l(e), Te(), t && t.onUpdate && t.onUpdate(e);
            },
          });
          q.popperInstance = new o.a(e, z, c);
        }
        function Ee(e, n) {
          if ((Le(), !q.state.isVisible)) {
            if (q.props.target)
              return (function (e) {
                if (e) {
                  var n = m(e.target, q.props.target);
                  n &&
                    !n._tippy &&
                    me(
                      n,
                      i({}, q.props, {
                        content: V(t.content, [n]),
                        appendTo: t.appendTo,
                        target: "",
                        showOnInit: !0,
                      })
                    );
                }
              })(e);
            if (((A = !0), e && !n && q.props.onTrigger(q, e), q.props.wait))
              return q.props.wait(q, e);
            ie() &&
              !q.state.isMounted &&
              (q.popperInstance || Ce(),
              document.addEventListener("mousemove", ve)),
              K();
            var o = B(q.props.delay, 0, p.delay);
            o
              ? (s = setTimeout(function () {
                  $e();
                }, o))
              : $e();
          }
        }
        function Ae() {
          if ((Le(), !q.state.isVisible)) return I(), void te();
          A = !1;
          var e = B(q.props.delay, 1, p.delay);
          e
            ? (l = setTimeout(function () {
                q.state.isVisible && Ne();
              }, e))
            : (c = requestAnimationFrame(function () {
                Ne();
              }));
        }
        function Oe(e) {
          if (!q.props.interactive || !z.contains(e.target)) {
            if (U().contains(e.target)) {
              if (D) return;
              if (q.state.isVisible && Y(q.props.trigger, "click")) return;
            }
            !0 === q.props.hideOnClick && (Le(), Ne());
          }
        }
        function Le() {
          clearTimeout(s), clearTimeout(l), cancelAnimationFrame(c);
        }
        function je(t) {
          ee((t = t || {}), p), pe();
          var n = q.props,
            o = Z(e, i({}, q.props, {}, t, { ignoreAttributes: !0 }));
          (o.ignoreAttributes = W(t, "ignoreAttributes")
            ? t.ignoreAttributes || !1
            : n.ignoreAttributes),
            (q.props = o),
            ae(),
            F(),
            (M = R(ye, o.interactiveDebounce)),
            de(z, n, o),
            (q.popperChildren = oe(z)),
            q.popperInstance &&
              (u.some(function (e) {
                return W(t, e) && t[e] !== n[e];
              })
                ? (q.popperInstance.destroy(),
                  Ce(),
                  q.state.isVisible && q.popperInstance.enableEventListeners(),
                  q.props.followCursor && r && ve(r))
                : q.popperInstance.update());
        }
        function $e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : B(q.props.duration, 0, p.duration[1]);
          if (
            !q.state.isDestroyed &&
            q.state.isEnabled &&
            (!D || q.props.touch) &&
            !U().hasAttribute("disabled") &&
            !1 !== q.props.onShow(q)
          ) {
            K(),
              (z.style.visibility = "visible"),
              (q.state.isVisible = !0),
              q.props.interactive && U().classList.add(k);
            var n = ne();
            J(n.concat(z), 0),
              (S = function () {
                if (q.state.isVisible) {
                  var o = ie();
                  o && r ? ve(r) : o || q.popperInstance.update(),
                    q.popperChildren.backdrop &&
                      (q.popperChildren.content.style.transitionDelay =
                        Math.round(t / 12) + "ms"),
                    q.props.sticky &&
                      (function () {
                        J([z], a ? 0 : q.props.updateDuration);
                        var t = e.getBoundingClientRect();
                        !(function n() {
                          var o = e.getBoundingClientRect();
                          (t.top === o.top &&
                            t.right === o.right &&
                            t.bottom === o.bottom &&
                            t.left === o.left) ||
                            q.popperInstance.scheduleUpdate(),
                            (t = o),
                            q.state.isMounted && requestAnimationFrame(n);
                        })();
                      })(),
                    J([z], q.props.updateDuration),
                    J(n, t),
                    Q(n, "visible"),
                    (function (e, t) {
                      re(e, t);
                    })(t, function () {
                      q.props.aria &&
                        U().setAttribute("aria-".concat(q.props.aria), z.id),
                        q.props.onShown(q),
                        (q.state.isShown = !0);
                    });
                }
              }),
              (function () {
                $ = !1;
                var t = ie();
                q.popperInstance
                  ? (G(q.popperInstance.modifiers, q.props.flip),
                    t ||
                      ((q.popperInstance.reference = e),
                      q.popperInstance.enableEventListeners()),
                    q.popperInstance.scheduleUpdate())
                  : (Ce(), t || q.popperInstance.enableEventListeners());
                var n = q.props.appendTo,
                  o = "parent" === n ? e.parentNode : V(n, [e]);
                o.contains(z) ||
                  (o.appendChild(z),
                  q.props.onMount(q),
                  (q.state.isMounted = !0));
              })();
          }
        }
        function Ne() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : B(q.props.duration, 1, p.duration[1]);
          if (
            !q.state.isDestroyed &&
            (q.state.isEnabled || O) &&
            (!1 !== q.props.onHide(q) || O)
          ) {
            te(),
              (z.style.visibility = "hidden"),
              (q.state.isVisible = !1),
              (q.state.isShown = !1),
              (j = !1),
              q.props.interactive && U().classList.remove(k);
            var t = ne();
            J(t, e),
              Q(t, "hidden"),
              (function (e, t) {
                re(e, function () {
                  !q.state.isVisible &&
                    z.parentNode &&
                    z.parentNode.contains(z) &&
                    t();
                });
              })(e, function () {
                A || I(),
                  q.props.aria &&
                    U().removeAttribute("aria-".concat(q.props.aria)),
                  q.popperInstance.disableEventListeners(),
                  (q.popperInstance.options.placement = q.props.placement),
                  z.parentNode.removeChild(z),
                  q.props.onHidden(q),
                  (q.state.isMounted = !1);
              });
          }
        }
      }
      var ve = !1;
      function ge(e, t) {
        ee(t || {}, p),
          ve ||
            (document.addEventListener("touchstart", z, g),
            window.addEventListener("blur", I),
            (ve = !0));
        var n,
          o = i({}, p, {}, t);
        (n = e),
          "[object Object]" !== {}.toString.call(n) ||
            n.addEventListener ||
            (function (e) {
              var t = {
                isVirtual: !0,
                attributes: e.attributes || {},
                contains: function () {},
                setAttribute: function (t, n) {
                  e.attributes[t] = n;
                },
                getAttribute: function (t) {
                  return e.attributes[t];
                },
                removeAttribute: function (t) {
                  delete e.attributes[t];
                },
                hasAttribute: function (t) {
                  return t in e.attributes;
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                classList: {
                  classNames: {},
                  add: function (t) {
                    e.classList.classNames[t] = !0;
                  },
                  remove: function (t) {
                    delete e.classList.classNames[t];
                  },
                  contains: function (t) {
                    return t in e.classList.classNames;
                  },
                },
              };
              for (var n in t) e[n] = t[n];
            })(e);
        var r = (function (e) {
          if (U(e)) return [e];
          if (e instanceof NodeList) return h(e);
          if (Array.isArray(e)) return e;
          try {
            return h(document.querySelectorAll(e));
          } catch (e) {
            return [];
          }
        })(e).reduce(function (e, t) {
          var n = t && me(t, o);
          return n && e.push(n), e;
        }, []);
        return U(e) ? r[0] : r;
      }
      (ge.version = "4.3.5"),
        (ge.defaults = p),
        (ge.setDefaults = function (e) {
          Object.keys(e).forEach(function (t) {
            p[t] = e[t];
          });
        }),
        (ge.hideAll = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.exclude,
            n = e.duration;
          h(document.querySelectorAll(L)).forEach(function (e) {
            var o,
              i = e._tippy;
            if (i) {
              var r = !1;
              t &&
                (r =
                  (o = t)._tippy && !f.call(o, L)
                    ? i.reference === t
                    : e === t.popper),
                r || i.hide(n);
            }
          });
        }),
        (ge.group = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.delay,
            o = void 0 === n ? e[0].props.delay : n,
            r = t.duration,
            s = void 0 === r ? 0 : r,
            a = !1;
          function l(e) {
            (a = e), d();
          }
          function c(t) {
            t._originalProps.onShow(t),
              e.forEach(function (e) {
                e.set({ duration: s }), e.state.isVisible && e.hide();
              }),
              l(!0);
          }
          function p(e) {
            e._originalProps.onHide(e), l(!1);
          }
          function u(e) {
            e._originalProps.onShown(e),
              e.set({ duration: e._originalProps.duration });
          }
          function d() {
            e.forEach(function (e) {
              e.set({
                onShow: c,
                onShown: u,
                onHide: p,
                delay: a ? [0, Array.isArray(o) ? o[1] : o] : o,
                duration: a ? s : e._originalProps.duration,
              });
            });
          }
          e.forEach(function (e) {
            e._originalProps
              ? e.set(e._originalProps)
              : (e._originalProps = i({}, e.props));
          }),
            d();
        }),
        r &&
          setTimeout(function () {
            h(document.querySelectorAll("[data-tippy]")).forEach(function (e) {
              var t = e.getAttribute("data-tippy");
              t && ge(e, { content: t });
            });
          }),
        (function (e) {
          if (r) {
            var t = document.createElement("style");
            (t.type = "text/css"),
              (t.textContent = e),
              t.setAttribute("data-tippy-stylesheet", "");
            var n = document.head,
              o = n.querySelector("style,link");
            o ? n.insertBefore(t, o) : n.appendChild(t);
          }
        })(
          '.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px);transform:perspective(700px) translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(60deg);transform:perspective(700px) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px);transform:perspective(700px) translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(-60deg);transform:perspective(700px) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px);transform:perspective(700px) translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(-60deg);transform:perspective(700px) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px);transform:perspective(700px) translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(60deg);transform:perspective(700px) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:initial}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}'
        ),
        (t.a = ge);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        for (
          var n =
              "undefined" != typeof window && "undefined" != typeof document,
            o = ["Edge", "Trident", "Firefox"],
            i = 0,
            r = 0;
          r < o.length;
          r += 1
        )
          if (n && navigator.userAgent.indexOf(o[r]) >= 0) {
            i = 1;
            break;
          }
        var s =
          n && window.Promise
            ? function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function () {
                      (t = !1), e();
                    }));
                };
              }
            : function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    setTimeout(function () {
                      (t = !1), e();
                    }, i));
                };
              };
        function a(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }
        function l(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function c(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function p(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = l(e),
            n = t.overflow,
            o = t.overflowX,
            i = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + i + o) ? e : p(c(e));
        }
        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
          d = n && /MSIE 10/.test(navigator.userAgent);
        function f(e) {
          return 11 === e ? u : 10 === e ? d : u || d;
        }
        function h(e) {
          if (!e) return document.documentElement;
          for (
            var t = f(10) ? document.body : null, n = e.offsetParent || null;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var o = n && n.nodeName;
          return o && "BODY" !== o && "HTML" !== o
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === l(n, "position")
              ? h(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function m(e) {
          return null !== e.parentNode ? m(e.parentNode) : e;
        }
        function v(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = n ? e : t,
            i = n ? t : e,
            r = document.createRange();
          r.setStart(o, 0), r.setEnd(i, 0);
          var s,
            a,
            l = r.commonAncestorContainer;
          if ((e !== l && t !== l) || o.contains(i))
            return "BODY" === (a = (s = l).nodeName) ||
              ("HTML" !== a && h(s.firstElementChild) !== s)
              ? h(l)
              : l;
          var c = m(e);
          return c.host ? v(c.host, t) : v(e, m(t).host);
        }
        function g(e) {
          var t =
              "top" ===
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top")
                ? "scrollTop"
                : "scrollLeft",
            n = e.nodeName;
          if ("BODY" === n || "HTML" === n) {
            var o = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || o)[t];
          }
          return e[t];
        }
        function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
            o = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(e["border" + n + "Width"], 10) +
            parseFloat(e["border" + o + "Width"], 10)
          );
        }
        function b(e, t, n, o) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            f(10)
              ? parseInt(n["offset" + e]) +
                  parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) +
                  parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")])
              : 0
          );
        }
        function w(e) {
          var t = e.body,
            n = e.documentElement,
            o = f(10) && getComputedStyle(n);
          return { height: b("Height", t, n, o), width: b("Width", t, n, o) };
        }
        var x = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          k = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          S = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          T =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            };
        function C(e) {
          return T({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function E(e) {
          var t = {};
          try {
            if (f(10)) {
              t = e.getBoundingClientRect();
              var n = g(e, "top"),
                o = g(e, "left");
              (t.top += n), (t.left += o), (t.bottom += n), (t.right += o);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var i = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            },
            r = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
            s = r.width || e.clientWidth || i.right - i.left,
            a = r.height || e.clientHeight || i.bottom - i.top,
            c = e.offsetWidth - s,
            p = e.offsetHeight - a;
          if (c || p) {
            var u = l(e);
            (c -= y(u, "x")), (p -= y(u, "y")), (i.width -= c), (i.height -= p);
          }
          return C(i);
        }
        function A(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = f(10),
            i = "HTML" === t.nodeName,
            r = E(e),
            s = E(t),
            a = p(e),
            c = l(t),
            u = parseFloat(c.borderTopWidth, 10),
            d = parseFloat(c.borderLeftWidth, 10);
          n &&
            i &&
            ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
          var h = C({
            top: r.top - s.top - u,
            left: r.left - s.left - d,
            width: r.width,
            height: r.height,
          });
          if (((h.marginTop = 0), (h.marginLeft = 0), !o && i)) {
            var m = parseFloat(c.marginTop, 10),
              v = parseFloat(c.marginLeft, 10);
            (h.top -= u - m),
              (h.bottom -= u - m),
              (h.left -= d - v),
              (h.right -= d - v),
              (h.marginTop = m),
              (h.marginLeft = v);
          }
          return (
            (o && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
              (h = (function (e, t) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  o = g(t, "top"),
                  i = g(t, "left"),
                  r = n ? -1 : 1;
                return (
                  (e.top += o * r),
                  (e.bottom += o * r),
                  (e.left += i * r),
                  (e.right += i * r),
                  e
                );
              })(h, t)),
            h
          );
        }
        function O(e) {
          if (!e || !e.parentElement || f()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === l(t, "transform"); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function L(e, t, n, o) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            s = i ? O(e) : v(e, t);
          if ("viewport" === o)
            r = (function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = e.ownerDocument.documentElement,
                o = A(e, n),
                i = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : g(n),
                a = t ? 0 : g(n, "left");
              return C({
                top: s - o.top + o.marginTop,
                left: a - o.left + o.marginLeft,
                width: i,
                height: r,
              });
            })(s, i);
          else {
            var a = void 0;
            "scrollParent" === o
              ? "BODY" === (a = p(c(t))).nodeName &&
                (a = e.ownerDocument.documentElement)
              : (a = "window" === o ? e.ownerDocument.documentElement : o);
            var u = A(a, s, i);
            if (
              "HTML" !== a.nodeName ||
              (function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n) return !1;
                if ("fixed" === l(t, "position")) return !0;
                var o = c(t);
                return !!o && e(o);
              })(s)
            )
              r = u;
            else {
              var d = w(e.ownerDocument),
                f = d.height,
                h = d.width;
              (r.top += u.top - u.marginTop),
                (r.bottom = f + u.top),
                (r.left += u.left - u.marginLeft),
                (r.right = h + u.left);
            }
          }
          var m = "number" == typeof (n = n || 0);
          return (
            (r.left += m ? n : n.left || 0),
            (r.top += m ? n : n.top || 0),
            (r.right -= m ? n : n.right || 0),
            (r.bottom -= m ? n : n.bottom || 0),
            r
          );
        }
        function j(e, t, n, o, i) {
          var r =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var s = L(n, o, r, i),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height },
            },
            l = Object.keys(a)
              .map(function (e) {
                return T({ key: e }, a[e], {
                  area: ((t = a[e]), t.width * t.height),
                });
                var t;
              })
              .sort(function (e, t) {
                return t.area - e.area;
              }),
            c = l.filter(function (e) {
              var t = e.width,
                o = e.height;
              return t >= n.clientWidth && o >= n.clientHeight;
            }),
            p = c.length > 0 ? c[0].key : l[0].key,
            u = e.split("-")[1];
          return p + (u ? "-" + u : "");
        }
        function $(e, t, n) {
          var o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return A(n, o ? O(t) : v(t, n), o);
        }
        function N(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return { width: e.offsetWidth + o, height: e.offsetHeight + n };
        }
        function M(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function H(e, t, n) {
          n = n.split("-")[0];
          var o = N(e),
            i = { width: o.width, height: o.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
          return (
            (i[s] = t[s] + t[l] / 2 - o[l] / 2),
            (i[a] = n === a ? t[a] - o[c] : t[M(a)]),
            i
          );
        }
        function D(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function z(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function (e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function (e) {
                        return e[t] === n;
                      });
                    var o = D(e, function (e) {
                      return e[t] === n;
                    });
                    return e.indexOf(o);
                  })(e, "name", n)
                )
            ).forEach(function (e) {
              e.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = e.function || e.fn;
              e.enabled &&
                a(n) &&
                ((t.offsets.popper = C(t.offsets.popper)),
                (t.offsets.reference = C(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function P(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function q(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              o = 0;
            o < t.length;
            o++
          ) {
            var i = t[o],
              r = i ? "" + i + n : e;
            if (void 0 !== document.body.style[r]) return r;
          }
          return null;
        }
        function I(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function F(e, t, n, o) {
          (n.updateBound = o),
            I(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var i = p(e);
          return (
            (function e(t, n, o, i) {
              var r = "BODY" === t.nodeName,
                s = r ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, o, { passive: !0 }),
                r || e(p(s.parentNode), n, o, i),
                i.push(s);
            })(i, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = i),
            (n.eventsEnabled = !0),
            n
          );
        }
        function W() {
          var e, t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((e = this.reference),
              (t = this.state),
              I(e).removeEventListener("resize", t.updateBound),
              t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
        }
        function B(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function R(e, t) {
          Object.keys(t).forEach(function (n) {
            var o = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                n
              ) &&
              B(t[n]) &&
              (o = "px"),
              (e.style[n] = t[n] + o);
          });
        }
        var _ = n && /Firefox/i.test(navigator.userAgent);
        function Y(e, t, n) {
          var o = D(e, function (e) {
              return e.name === t;
            }),
            i =
              !!o &&
              e.some(function (e) {
                return e.name === n && e.enabled && e.order < o.order;
              });
          if (!i) {
            var r = "`" + t + "`",
              s = "`" + n + "`";
            console.warn(
              s +
                " modifier is required by " +
                r +
                " modifier in order to work, be sure to include it before " +
                r +
                "!"
            );
          }
          return i;
        }
        var X = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          U = X.slice(3);
        function V(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = U.indexOf(e),
            o = U.slice(n + 1).concat(U.slice(0, n));
          return t ? o.reverse() : o;
        }
        var G = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise",
        };
        function K(e, t, n, o) {
          var i = [0, 0],
            r = -1 !== ["right", "left"].indexOf(o),
            s = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            a = s.indexOf(
              D(s, function (e) {
                return -1 !== e.search(/,|\s/);
              })
            );
          s[a] &&
            -1 === s[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            c =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(l)[0]]),
                    [s[a].split(l)[1]].concat(s.slice(a + 1)),
                  ]
                : [s];
          return (
            (c = c.map(function (e, o) {
              var i = (1 === o ? !r : r) ? "height" : "width",
                s = !1;
              return e
                .reduce(function (e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                    ? ((e[e.length - 1] = t), (s = !0), e)
                    : s
                    ? ((e[e.length - 1] += t), (s = !1), e)
                    : e.concat(t);
                }, [])
                .map(function (e) {
                  return (function (e, t, n, o) {
                    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      r = +i[1],
                      s = i[2];
                    if (!r) return e;
                    if (0 === s.indexOf("%")) {
                      var a = void 0;
                      switch (s) {
                        case "%p":
                          a = n;
                          break;
                        case "%":
                        case "%r":
                        default:
                          a = o;
                      }
                      return (C(a)[t] / 100) * r;
                    }
                    if ("vh" === s || "vw" === s) {
                      return (
                        (("vh" === s
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                        r
                      );
                    }
                    return r;
                  })(e, i, t, n);
                });
            })).forEach(function (e, t) {
              e.forEach(function (n, o) {
                B(n) && (i[t] += n * ("-" === e[o - 1] ? -1 : 1));
              });
            }),
            i
          );
        }
        var J = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    o = t.split("-")[1];
                  if (o) {
                    var i = e.offsets,
                      r = i.reference,
                      s = i.popper,
                      a = -1 !== ["bottom", "top"].indexOf(n),
                      l = a ? "left" : "top",
                      c = a ? "width" : "height",
                      p = {
                        start: S({}, l, r[l]),
                        end: S({}, l, r[l] + r[c] - s[c]),
                      };
                    e.offsets.popper = T({}, s, p[o]);
                  }
                  return e;
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.offset,
                    o = e.placement,
                    i = e.offsets,
                    r = i.popper,
                    s = i.reference,
                    a = o.split("-")[0],
                    l = void 0;
                  return (
                    (l = B(+n) ? [+n, 0] : K(n, r, s, a)),
                    "left" === a
                      ? ((r.top += l[0]), (r.left -= l[1]))
                      : "right" === a
                      ? ((r.top += l[0]), (r.left += l[1]))
                      : "top" === a
                      ? ((r.left += l[0]), (r.top -= l[1]))
                      : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                    (e.popper = r),
                    e
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.boundariesElement || h(e.instance.popper);
                  e.instance.reference === n && (n = h(n));
                  var o = q("transform"),
                    i = e.instance.popper.style,
                    r = i.top,
                    s = i.left,
                    a = i[o];
                  (i.top = ""), (i.left = ""), (i[o] = "");
                  var l = L(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    n,
                    e.positionFixed
                  );
                  (i.top = r), (i.left = s), (i[o] = a), (t.boundaries = l);
                  var c = t.priority,
                    p = e.offsets.popper,
                    u = {
                      primary: function (e) {
                        var n = p[e];
                        return (
                          p[e] < l[e] &&
                            !t.escapeWithReference &&
                            (n = Math.max(p[e], l[e])),
                          S({}, e, n)
                        );
                      },
                      secondary: function (e) {
                        var n = "right" === e ? "left" : "top",
                          o = p[n];
                        return (
                          p[e] > l[e] &&
                            !t.escapeWithReference &&
                            (o = Math.min(
                              p[n],
                              l[e] - ("right" === e ? p.width : p.height)
                            )),
                          S({}, n, o)
                        );
                      },
                    };
                  return (
                    c.forEach(function (e) {
                      var t =
                        -1 !== ["left", "top"].indexOf(e)
                          ? "primary"
                          : "secondary";
                      p = T({}, p, u[t](e));
                    }),
                    (e.offsets.popper = p),
                    e
                  );
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent",
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (e) {
                  var t = e.offsets,
                    n = t.popper,
                    o = t.reference,
                    i = e.placement.split("-")[0],
                    r = Math.floor,
                    s = -1 !== ["top", "bottom"].indexOf(i),
                    a = s ? "right" : "bottom",
                    l = s ? "left" : "top",
                    c = s ? "width" : "height";
                  return (
                    n[a] < r(o[l]) && (e.offsets.popper[l] = r(o[l]) - n[c]),
                    n[l] > r(o[a]) && (e.offsets.popper[l] = r(o[a])),
                    e
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function (e, t) {
                  var n;
                  if (!Y(e.instance.modifiers, "arrow", "keepTogether"))
                    return e;
                  var o = t.element;
                  if ("string" == typeof o) {
                    if (!(o = e.instance.popper.querySelector(o))) return e;
                  } else if (!e.instance.popper.contains(o))
                    return (
                      console.warn(
                        "WARNING: `arrow.element` must be child of its popper element!"
                      ),
                      e
                    );
                  var i = e.placement.split("-")[0],
                    r = e.offsets,
                    s = r.popper,
                    a = r.reference,
                    c = -1 !== ["left", "right"].indexOf(i),
                    p = c ? "height" : "width",
                    u = c ? "Top" : "Left",
                    d = u.toLowerCase(),
                    f = c ? "left" : "top",
                    h = c ? "bottom" : "right",
                    m = N(o)[p];
                  a[h] - m < s[d] && (e.offsets.popper[d] -= s[d] - (a[h] - m)),
                    a[d] + m > s[h] && (e.offsets.popper[d] += a[d] + m - s[h]),
                    (e.offsets.popper = C(e.offsets.popper));
                  var v = a[d] + a[p] / 2 - m / 2,
                    g = l(e.instance.popper),
                    y = parseFloat(g["margin" + u], 10),
                    b = parseFloat(g["border" + u + "Width"], 10),
                    w = v - e.offsets.popper[d] - y - b;
                  return (
                    (w = Math.max(Math.min(s[p] - m, w), 0)),
                    (e.arrowElement = o),
                    (e.offsets.arrow =
                      (S((n = {}), d, Math.round(w)), S(n, f, ""), n)),
                    e
                  );
                },
                element: "[x-arrow]",
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function (e, t) {
                  if (P(e.instance.modifiers, "inner")) return e;
                  if (e.flipped && e.placement === e.originalPlacement)
                    return e;
                  var n = L(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      t.boundariesElement,
                      e.positionFixed
                    ),
                    o = e.placement.split("-")[0],
                    i = M(o),
                    r = e.placement.split("-")[1] || "",
                    s = [];
                  switch (t.behavior) {
                    case G.FLIP:
                      s = [o, i];
                      break;
                    case G.CLOCKWISE:
                      s = V(o);
                      break;
                    case G.COUNTERCLOCKWISE:
                      s = V(o, !0);
                      break;
                    default:
                      s = t.behavior;
                  }
                  return (
                    s.forEach(function (a, l) {
                      if (o !== a || s.length === l + 1) return e;
                      (o = e.placement.split("-")[0]), (i = M(o));
                      var c = e.offsets.popper,
                        p = e.offsets.reference,
                        u = Math.floor,
                        d =
                          ("left" === o && u(c.right) > u(p.left)) ||
                          ("right" === o && u(c.left) < u(p.right)) ||
                          ("top" === o && u(c.bottom) > u(p.top)) ||
                          ("bottom" === o && u(c.top) < u(p.bottom)),
                        f = u(c.left) < u(n.left),
                        h = u(c.right) > u(n.right),
                        m = u(c.top) < u(n.top),
                        v = u(c.bottom) > u(n.bottom),
                        g =
                          ("left" === o && f) ||
                          ("right" === o && h) ||
                          ("top" === o && m) ||
                          ("bottom" === o && v),
                        y = -1 !== ["top", "bottom"].indexOf(o),
                        b =
                          !!t.flipVariations &&
                          ((y && "start" === r && f) ||
                            (y && "end" === r && h) ||
                            (!y && "start" === r && m) ||
                            (!y && "end" === r && v)),
                        w =
                          !!t.flipVariationsByContent &&
                          ((y && "start" === r && h) ||
                            (y && "end" === r && f) ||
                            (!y && "start" === r && v) ||
                            (!y && "end" === r && m)),
                        x = b || w;
                      (d || g || x) &&
                        ((e.flipped = !0),
                        (d || g) && (o = s[l + 1]),
                        x &&
                          (r = (function (e) {
                            return "end" === e
                              ? "start"
                              : "start" === e
                              ? "end"
                              : e;
                          })(r)),
                        (e.placement = o + (r ? "-" + r : "")),
                        (e.offsets.popper = T(
                          {},
                          e.offsets.popper,
                          H(e.instance.popper, e.offsets.reference, e.placement)
                        )),
                        (e = z(e.instance.modifiers, e, "flip")));
                    }),
                    e
                  );
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1,
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    o = e.offsets,
                    i = o.popper,
                    r = o.reference,
                    s = -1 !== ["left", "right"].indexOf(n),
                    a = -1 === ["top", "left"].indexOf(n);
                  return (
                    (i[s ? "left" : "top"] =
                      r[n] - (a ? i[s ? "width" : "height"] : 0)),
                    (e.placement = M(t)),
                    (e.offsets.popper = C(i)),
                    e
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function (e) {
                  if (!Y(e.instance.modifiers, "hide", "preventOverflow"))
                    return e;
                  var t = e.offsets.reference,
                    n = D(e.instance.modifiers, function (e) {
                      return "preventOverflow" === e.name;
                    }).boundaries;
                  if (
                    t.bottom < n.top ||
                    t.left > n.right ||
                    t.top > n.bottom ||
                    t.right < n.left
                  ) {
                    if (!0 === e.hide) return e;
                    (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                  } else {
                    if (!1 === e.hide) return e;
                    (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                  }
                  return e;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.x,
                    o = t.y,
                    i = e.offsets.popper,
                    r = D(e.instance.modifiers, function (e) {
                      return "applyStyle" === e.name;
                    }).gpuAcceleration;
                  void 0 !== r &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                    );
                  var s = void 0 !== r ? r : t.gpuAcceleration,
                    a = h(e.instance.popper),
                    l = E(a),
                    c = { position: i.position },
                    p = (function (e, t) {
                      var n = e.offsets,
                        o = n.popper,
                        i = n.reference,
                        r = Math.round,
                        s = Math.floor,
                        a = function (e) {
                          return e;
                        },
                        l = r(i.width),
                        c = r(o.width),
                        p = -1 !== ["left", "right"].indexOf(e.placement),
                        u = -1 !== e.placement.indexOf("-"),
                        d = t ? (p || u || l % 2 == c % 2 ? r : s) : a,
                        f = t ? r : a;
                      return {
                        left: d(
                          l % 2 == 1 && c % 2 == 1 && !u && t
                            ? o.left - 1
                            : o.left
                        ),
                        top: f(o.top),
                        bottom: f(o.bottom),
                        right: d(o.right),
                      };
                    })(e, window.devicePixelRatio < 2 || !_),
                    u = "bottom" === n ? "top" : "bottom",
                    d = "right" === o ? "left" : "right",
                    f = q("transform"),
                    m = void 0,
                    v = void 0;
                  if (
                    ((v =
                      "bottom" === u
                        ? "HTML" === a.nodeName
                          ? -a.clientHeight + p.bottom
                          : -l.height + p.bottom
                        : p.top),
                    (m =
                      "right" === d
                        ? "HTML" === a.nodeName
                          ? -a.clientWidth + p.right
                          : -l.width + p.right
                        : p.left),
                    s && f)
                  )
                    (c[f] = "translate3d(" + m + "px, " + v + "px, 0)"),
                      (c[u] = 0),
                      (c[d] = 0),
                      (c.willChange = "transform");
                  else {
                    var g = "bottom" === u ? -1 : 1,
                      y = "right" === d ? -1 : 1;
                    (c[u] = v * g),
                      (c[d] = m * y),
                      (c.willChange = u + ", " + d);
                  }
                  var b = { "x-placement": e.placement };
                  return (
                    (e.attributes = T({}, b, e.attributes)),
                    (e.styles = T({}, c, e.styles)),
                    (e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles)),
                    e
                  );
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right",
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (e) {
                  var t, n;
                  return (
                    R(e.instance.popper, e.styles),
                    (t = e.instance.popper),
                    (n = e.attributes),
                    Object.keys(n).forEach(function (e) {
                      !1 !== n[e]
                        ? t.setAttribute(e, n[e])
                        : t.removeAttribute(e);
                    }),
                    e.arrowElement &&
                      Object.keys(e.arrowStyles).length &&
                      R(e.arrowElement, e.arrowStyles),
                    e
                  );
                },
                onLoad: function (e, t, n, o, i) {
                  var r = $(i, t, e, n.positionFixed),
                    s = j(
                      n.placement,
                      r,
                      t,
                      e,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding
                    );
                  return (
                    t.setAttribute("x-placement", s),
                    R(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                    n
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          Q = (function () {
            function e(t, n) {
              var o = this,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              x(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(o.update);
                }),
                (this.update = s(this.update.bind(this))),
                (this.options = T({}, e.Defaults, i)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(T({}, e.Defaults.modifiers, i.modifiers)).forEach(
                  function (t) {
                    o.options.modifiers[t] = T(
                      {},
                      e.Defaults.modifiers[t] || {},
                      i.modifiers ? i.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (e) {
                    return T({ name: e }, o.options.modifiers[e]);
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function (e) {
                  e.enabled &&
                    a(e.onLoad) &&
                    e.onLoad(o.reference, o.popper, o.options, e, o.state);
                }),
                this.update();
              var r = this.options.eventsEnabled;
              r && this.enableEventListeners(), (this.state.eventsEnabled = r);
            }
            return (
              k(e, [
                {
                  key: "update",
                  value: function () {
                    return function () {
                      if (!this.state.isDestroyed) {
                        var e = {
                          instance: this,
                          styles: {},
                          arrowStyles: {},
                          attributes: {},
                          flipped: !1,
                          offsets: {},
                        };
                        (e.offsets.reference = $(
                          this.state,
                          this.popper,
                          this.reference,
                          this.options.positionFixed
                        )),
                          (e.placement = j(
                            this.options.placement,
                            e.offsets.reference,
                            this.popper,
                            this.reference,
                            this.options.modifiers.flip.boundariesElement,
                            this.options.modifiers.flip.padding
                          )),
                          (e.originalPlacement = e.placement),
                          (e.positionFixed = this.options.positionFixed),
                          (e.offsets.popper = H(
                            this.popper,
                            e.offsets.reference,
                            e.placement
                          )),
                          (e.offsets.popper.position = this.options
                            .positionFixed
                            ? "fixed"
                            : "absolute"),
                          (e = z(this.modifiers, e)),
                          this.state.isCreated
                            ? this.options.onUpdate(e)
                            : ((this.state.isCreated = !0),
                              this.options.onCreate(e));
                      }
                    }.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return function () {
                      return (
                        (this.state.isDestroyed = !0),
                        P(this.modifiers, "applyStyle") &&
                          (this.popper.removeAttribute("x-placement"),
                          (this.popper.style.position = ""),
                          (this.popper.style.top = ""),
                          (this.popper.style.left = ""),
                          (this.popper.style.right = ""),
                          (this.popper.style.bottom = ""),
                          (this.popper.style.willChange = ""),
                          (this.popper.style[q("transform")] = "")),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy &&
                          this.popper.parentNode.removeChild(this.popper),
                        this
                      );
                    }.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return function () {
                      this.state.eventsEnabled ||
                        (this.state = F(
                          this.reference,
                          this.options,
                          this.state,
                          this.scheduleUpdate
                        ));
                    }.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return W.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (Q.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
          (Q.placements = X),
          (Q.Defaults = J),
          (t.a = Q);
      }.call(this, n(18)));
    },
    function (e, t, n) {
      (function (e) {
        var n, o, i, r;
        function s(e) {
          return (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        (r = function () {
          return (function (e) {
            function t(o) {
              if (n[o]) return n[o].exports;
              var i = (n[o] = { exports: {}, id: o, loaded: !1 });
              return (
                e[o].call(i.exports, i, i.exports, t),
                (i.loaded = !0),
                i.exports
              );
            }
            var n = {};
            return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
          })([
            function (e, t, n) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var i =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) &&
                          (e[o] = n[o]);
                    }
                    return e;
                  },
                r = (o(n(1)), n(6)),
                s = o(r),
                a = o(n(7)),
                l = o(n(8)),
                c = o(n(9)),
                p = o(n(10)),
                u = o(n(11)),
                d = o(n(14)),
                f = [],
                h = !1,
                m = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1,
                },
                v = function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  if ((e && (h = !0), h))
                    return (
                      (f = (0, u.default)(f, m)), (0, p.default)(f, m.once), f
                    );
                },
                g = function () {
                  (f = (0, d.default)()), v();
                };
              e.exports = {
                init: function (e) {
                  (m = i(m, e)), (f = (0, d.default)());
                  var t = document.all && !window.atob;
                  return (function (e) {
                    return (
                      !0 === e ||
                      ("mobile" === e && c.default.mobile()) ||
                      ("phone" === e && c.default.phone()) ||
                      ("tablet" === e && c.default.tablet()) ||
                      ("function" == typeof e && !0 === e())
                    );
                  })(m.disable) || t
                    ? void f.forEach(function (e, t) {
                        e.node.removeAttribute("data-aos"),
                          e.node.removeAttribute("data-aos-easing"),
                          e.node.removeAttribute("data-aos-duration"),
                          e.node.removeAttribute("data-aos-delay");
                      })
                    : (m.disableMutationObserver ||
                        l.default.isSupported() ||
                        (console.info(
                          '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                        ),
                        (m.disableMutationObserver = !0)),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-easing", m.easing),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-duration", m.duration),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-delay", m.delay),
                      "DOMContentLoaded" === m.startEvent &&
                      ["complete", "interactive"].indexOf(document.readyState) >
                        -1
                        ? v(!0)
                        : "load" === m.startEvent
                        ? window.addEventListener(m.startEvent, function () {
                            v(!0);
                          })
                        : document.addEventListener(m.startEvent, function () {
                            v(!0);
                          }),
                      window.addEventListener(
                        "resize",
                        (0, a.default)(v, m.debounceDelay, !0)
                      ),
                      window.addEventListener(
                        "orientationchange",
                        (0, a.default)(v, m.debounceDelay, !0)
                      ),
                      window.addEventListener(
                        "scroll",
                        (0, s.default)(function () {
                          (0, p.default)(f, m.once);
                        }, m.throttleDelay)
                      ),
                      m.disableMutationObserver ||
                        l.default.ready("[data-aos]", g),
                      f);
                },
                refresh: v,
                refreshHard: g,
              };
            },
            function (e, t) {},
            ,
            ,
            ,
            ,
            function (e, t) {
              (function (t) {
                "use strict";
                function n(e, t, n) {
                  function i(t) {
                    var n = u,
                      o = d;
                    return (u = d = void 0), (g = t), (h = e.apply(o, n));
                  }
                  function s(e) {
                    var n = e - v;
                    return void 0 === v || n >= t || n < 0 || (b && e - g >= f);
                  }
                  function a() {
                    var e = k();
                    return s(e)
                      ? c(e)
                      : void (m = setTimeout(
                          a,
                          (function (e) {
                            var n = t - (e - v);
                            return b ? x(n, f - (e - g)) : n;
                          })(e)
                        ));
                  }
                  function c(e) {
                    return (m = void 0), S && u ? i(e) : ((u = d = void 0), h);
                  }
                  function p() {
                    var e = k(),
                      n = s(e);
                    if (((u = arguments), (d = this), (v = e), n)) {
                      if (void 0 === m)
                        return (function (e) {
                          return (g = e), (m = setTimeout(a, t)), y ? i(e) : h;
                        })(v);
                      if (b) return (m = setTimeout(a, t)), i(v);
                    }
                    return void 0 === m && (m = setTimeout(a, t)), h;
                  }
                  var u,
                    d,
                    f,
                    h,
                    m,
                    v,
                    g = 0,
                    y = !1,
                    b = !1,
                    S = !0;
                  if ("function" != typeof e) throw new TypeError(l);
                  return (
                    (t = r(t) || 0),
                    o(n) &&
                      ((y = !!n.leading),
                      (f = (b = "maxWait" in n) ? w(r(n.maxWait) || 0, t) : f),
                      (S = "trailing" in n ? !!n.trailing : S)),
                    (p.cancel = function () {
                      void 0 !== m && clearTimeout(m),
                        (g = 0),
                        (u = v = d = m = void 0);
                    }),
                    (p.flush = function () {
                      return void 0 === m ? h : c(k());
                    }),
                    p
                  );
                }
                function o(e) {
                  var t = void 0 === e ? "undefined" : a(e);
                  return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                  return (
                    "symbol" == (void 0 === e ? "undefined" : a(e)) ||
                    ((function (e) {
                      return (
                        !!e && "object" == (void 0 === e ? "undefined" : a(e))
                      );
                    })(e) &&
                      b.call(e) == p)
                  );
                }
                function r(e) {
                  if ("number" == typeof e) return e;
                  if (i(e)) return c;
                  if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(u, "");
                  var n = f.test(e);
                  return n || h.test(e)
                    ? m(e.slice(2), n ? 2 : 8)
                    : d.test(e)
                    ? c
                    : +e;
                }
                var a =
                    "function" == typeof Symbol &&
                    "symbol" == s(Symbol.iterator)
                      ? function (e) {
                          return s(e);
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : s(e);
                        },
                  l = "Expected a function",
                  c = NaN,
                  p = "[object Symbol]",
                  u = /^\s+|\s+$/g,
                  d = /^[-+]0x[0-9a-f]+$/i,
                  f = /^0b[01]+$/i,
                  h = /^0o[0-7]+$/i,
                  m = parseInt,
                  v =
                    "object" == (void 0 === t ? "undefined" : a(t)) &&
                    t &&
                    t.Object === Object &&
                    t,
                  g =
                    "object" ==
                      ("undefined" == typeof self ? "undefined" : a(self)) &&
                    self &&
                    self.Object === Object &&
                    self,
                  y = v || g || Function("return this")(),
                  b = Object.prototype.toString,
                  w = Math.max,
                  x = Math.min,
                  k = function () {
                    return y.Date.now();
                  };
                e.exports = function (e, t, i) {
                  var r = !0,
                    s = !0;
                  if ("function" != typeof e) throw new TypeError(l);
                  return (
                    o(i) &&
                      ((r = "leading" in i ? !!i.leading : r),
                      (s = "trailing" in i ? !!i.trailing : s)),
                    n(e, t, { leading: r, maxWait: t, trailing: s })
                  );
                };
              }.call(
                t,
                (function () {
                  return this;
                })()
              ));
            },
            function (e, t) {
              (function (t) {
                "use strict";
                function n(e) {
                  var t = void 0 === e ? "undefined" : r(e);
                  return !!e && ("object" == t || "function" == t);
                }
                function o(e) {
                  return (
                    "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                    ((function (e) {
                      return (
                        !!e && "object" == (void 0 === e ? "undefined" : r(e))
                      );
                    })(e) &&
                      y.call(e) == c)
                  );
                }
                function i(e) {
                  if ("number" == typeof e) return e;
                  if (o(e)) return l;
                  if (n(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(p, "");
                  var i = d.test(e);
                  return i || f.test(e)
                    ? h(e.slice(2), i ? 2 : 8)
                    : u.test(e)
                    ? l
                    : +e;
                }
                var r =
                    "function" == typeof Symbol &&
                    "symbol" == s(Symbol.iterator)
                      ? function (e) {
                          return s(e);
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : s(e);
                        },
                  a = "Expected a function",
                  l = NaN,
                  c = "[object Symbol]",
                  p = /^\s+|\s+$/g,
                  u = /^[-+]0x[0-9a-f]+$/i,
                  d = /^0b[01]+$/i,
                  f = /^0o[0-7]+$/i,
                  h = parseInt,
                  m =
                    "object" == (void 0 === t ? "undefined" : r(t)) &&
                    t &&
                    t.Object === Object &&
                    t,
                  v =
                    "object" ==
                      ("undefined" == typeof self ? "undefined" : r(self)) &&
                    self &&
                    self.Object === Object &&
                    self,
                  g = m || v || Function("return this")(),
                  y = Object.prototype.toString,
                  b = Math.max,
                  w = Math.min,
                  x = function () {
                    return g.Date.now();
                  };
                e.exports = function (e, t, o) {
                  function r(t) {
                    var n = u,
                      o = d;
                    return (u = d = void 0), (g = t), (h = e.apply(o, n));
                  }
                  function s(e) {
                    var n = e - v;
                    return void 0 === v || n >= t || n < 0 || (k && e - g >= f);
                  }
                  function l() {
                    var e = x();
                    return s(e)
                      ? c(e)
                      : void (m = setTimeout(
                          l,
                          (function (e) {
                            var n = t - (e - v);
                            return k ? w(n, f - (e - g)) : n;
                          })(e)
                        ));
                  }
                  function c(e) {
                    return (m = void 0), S && u ? r(e) : ((u = d = void 0), h);
                  }
                  function p() {
                    var e = x(),
                      n = s(e);
                    if (((u = arguments), (d = this), (v = e), n)) {
                      if (void 0 === m)
                        return (function (e) {
                          return (g = e), (m = setTimeout(l, t)), y ? r(e) : h;
                        })(v);
                      if (k) return (m = setTimeout(l, t)), r(v);
                    }
                    return void 0 === m && (m = setTimeout(l, t)), h;
                  }
                  var u,
                    d,
                    f,
                    h,
                    m,
                    v,
                    g = 0,
                    y = !1,
                    k = !1,
                    S = !0;
                  if ("function" != typeof e) throw new TypeError(a);
                  return (
                    (t = i(t) || 0),
                    n(o) &&
                      ((y = !!o.leading),
                      (f = (k = "maxWait" in o) ? b(i(o.maxWait) || 0, t) : f),
                      (S = "trailing" in o ? !!o.trailing : S)),
                    (p.cancel = function () {
                      void 0 !== m && clearTimeout(m),
                        (g = 0),
                        (u = v = d = m = void 0);
                    }),
                    (p.flush = function () {
                      return void 0 === m ? h : c(x());
                    }),
                    p
                  );
                };
              }.call(
                t,
                (function () {
                  return this;
                })()
              ));
            },
            function (e, t) {
              "use strict";
              function n() {
                return (
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver
                );
              }
              function o(e) {
                e &&
                  e.forEach(function (e) {
                    var t = Array.prototype.slice.call(e.addedNodes),
                      n = Array.prototype.slice.call(e.removedNodes);
                    if (
                      (function e(t) {
                        var n = void 0,
                          o = void 0;
                        for (n = 0; n < t.length; n += 1) {
                          if ((o = t[n]).dataset && o.dataset.aos) return !0;
                          if (o.children && e(o.children)) return !0;
                        }
                        return !1;
                      })(t.concat(n))
                    )
                      return i();
                  });
              }
              Object.defineProperty(t, "__esModule", { value: !0 });
              var i = function () {};
              t.default = {
                isSupported: function () {
                  return !!n();
                },
                ready: function (e, t) {
                  var r = window.document,
                    s = new (n())(o);
                  (i = t),
                    s.observe(r.documentElement, {
                      childList: !0,
                      subtree: !0,
                      removedNodes: !0,
                    });
                },
              };
            },
            function (e, t) {
              "use strict";
              function n() {
                return (
                  navigator.userAgent || navigator.vendor || window.opera || ""
                );
              }
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                  };
                })(),
                i =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                r =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                s =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                a =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  return (
                    o(e, [
                      {
                        key: "phone",
                        value: function () {
                          var e = n();
                          return !(!i.test(e) && !r.test(e.substr(0, 4)));
                        },
                      },
                      {
                        key: "mobile",
                        value: function () {
                          var e = n();
                          return !(!s.test(e) && !a.test(e.substr(0, 4)));
                        },
                      },
                      {
                        key: "tablet",
                        value: function () {
                          return this.mobile() && !this.phone();
                        },
                      },
                    ]),
                    e
                  );
                })();
              t.default = new l();
            },
            function (e, t) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e, t) {
                  var n = window.pageYOffset,
                    o = window.innerHeight;
                  e.forEach(function (e, i) {
                    !(function (e, t, n) {
                      var o = e.node.getAttribute("data-aos-once");
                      t > e.position
                        ? e.node.classList.add("aos-animate")
                        : void 0 !== o &&
                          ("false" === o || (!n && "true" !== o)) &&
                          e.node.classList.remove("aos-animate");
                    })(e, o + n, t);
                  });
                });
            },
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(n(12));
              t.default = function (e, t) {
                return (
                  e.forEach(function (e, n) {
                    e.node.classList.add("aos-init"),
                      (e.position = (0, o.default)(e.node, t.offset));
                  }),
                  e
                );
              };
            },
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(n(13));
              t.default = function (e, t) {
                var n = 0,
                  i = 0,
                  r = window.innerHeight,
                  s = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute(
                      "data-aos-anchor-placement"
                    ),
                  };
                switch (
                  (s.offset && !isNaN(s.offset) && (i = parseInt(s.offset)),
                  s.anchor &&
                    document.querySelectorAll(s.anchor) &&
                    (e = document.querySelectorAll(s.anchor)[0]),
                  (n = (0, o.default)(e).top),
                  s.anchorPlacement)
                ) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    n += e.offsetHeight;
                    break;
                  case "top-center":
                    n += r / 2;
                    break;
                  case "bottom-center":
                    n += r / 2 + e.offsetHeight;
                    break;
                  case "center-center":
                    n += r / 2 + e.offsetHeight / 2;
                    break;
                  case "top-top":
                    n += r;
                    break;
                  case "bottom-top":
                    n += e.offsetHeight + r;
                    break;
                  case "center-top":
                    n += e.offsetHeight / 2 + r;
                }
                return (
                  s.anchorPlacement || s.offset || isNaN(t) || (i = t), n + i
                );
              };
            },
            function (e, t) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e) {
                  for (
                    var t = 0, n = 0;
                    e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

                  )
                    (t +=
                      e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                      (n +=
                        e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                      (e = e.offsetParent);
                  return { top: n, left: t };
                });
            },
            function (e, t) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e) {
                  return (
                    (e = e || document.querySelectorAll("[data-aos]")),
                    Array.prototype.map.call(e, function (e) {
                      return { node: e };
                    })
                  );
                });
            },
          ]);
        }),
          "object" == s(t) && "object" == s(e)
            ? (e.exports = r())
            : ((o = []),
              void 0 ===
                (i = "function" == typeof (n = r) ? n.apply(t, o) : n) ||
                (e.exports = i));
      }.call(this, n(5)(e)));
    },
    function (e, t, n) {
      (function (e) {
        var n, o, i, r;
        function s(e) {
          return (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        (r = function () {
          return (function (e) {
            var t = {};
            function n(o) {
              if (t[o]) return t[o].exports;
              var i = (t[o] = { i: o, l: !1, exports: {} });
              return (
                e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, o) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: o });
              }),
              (n.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == s(e) && e && e.__esModule) return e;
                var o = Object.create(null);
                if (
                  (n.r(o),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var i in e)
                    n.d(
                      o,
                      i,
                      function (t) {
                        return e[t];
                      }.bind(null, i)
                    );
                return o;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, "a", t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ""),
              n((n.s = 1))
            );
          })([
            function (e, t) {
              e.exports = function (e) {
                return Array.isArray
                  ? Array.isArray(e)
                  : "[object Array]" === Object.prototype.toString.call(e);
              };
            },
            function (e, t, n) {
              function o(e) {
                return (o =
                  "function" == typeof Symbol && "symbol" == s(Symbol.iterator)
                    ? function (e) {
                        return s(e);
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : s(e);
                      })(e);
              }
              function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              var r = n(2),
                a = n(8),
                l = n(0),
                c = (function () {
                  function e(t, n) {
                    var o = n.location,
                      i = void 0 === o ? 0 : o,
                      r = n.distance,
                      s = void 0 === r ? 100 : r,
                      l = n.threshold,
                      c = void 0 === l ? 0.6 : l,
                      p = n.maxPatternLength,
                      u = void 0 === p ? 32 : p,
                      d = n.caseSensitive,
                      f = void 0 !== d && d,
                      h = n.tokenSeparator,
                      m = void 0 === h ? / +/g : h,
                      v = n.findAllMatches,
                      g = void 0 !== v && v,
                      y = n.minMatchCharLength,
                      b = void 0 === y ? 1 : y,
                      w = n.id,
                      x = void 0 === w ? null : w,
                      k = n.keys,
                      S = void 0 === k ? [] : k,
                      T = n.shouldSort,
                      C = void 0 === T || T,
                      E = n.getFn,
                      A = void 0 === E ? a : E,
                      O = n.sortFn,
                      L =
                        void 0 === O
                          ? function (e, t) {
                              return e.score - t.score;
                            }
                          : O,
                      j = n.tokenize,
                      $ = void 0 !== j && j,
                      N = n.matchAllTokens,
                      M = void 0 !== N && N,
                      H = n.includeMatches,
                      D = void 0 !== H && H,
                      z = n.includeScore,
                      P = void 0 !== z && z,
                      q = n.verbose,
                      I = void 0 !== q && q;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.options = {
                        location: i,
                        distance: s,
                        threshold: c,
                        maxPatternLength: u,
                        isCaseSensitive: f,
                        tokenSeparator: m,
                        findAllMatches: g,
                        minMatchCharLength: b,
                        id: x,
                        keys: S,
                        includeMatches: D,
                        includeScore: P,
                        shouldSort: C,
                        getFn: A,
                        sortFn: L,
                        verbose: I,
                        tokenize: $,
                        matchAllTokens: M,
                      }),
                      this.setCollection(t);
                  }
                  var t, n;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "setCollection",
                        value: function (e) {
                          return (this.list = e), e;
                        },
                      },
                      {
                        key: "search",
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : { limit: !1 };
                          this._log(
                            '---------\nSearch pattern: "'.concat(e, '"')
                          );
                          var n = this._prepareSearchers(e),
                            o = n.tokenSearchers,
                            i = n.fullSearcher,
                            r = this._search(o, i),
                            s = r.weights,
                            a = r.results;
                          return (
                            this._computeScore(s, a),
                            this.options.shouldSort && this._sort(a),
                            t.limit &&
                              "number" == typeof t.limit &&
                              (a = a.slice(0, t.limit)),
                            this._format(a)
                          );
                        },
                      },
                      {
                        key: "_prepareSearchers",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t = [];
                          if (this.options.tokenize)
                            for (
                              var n = e.split(this.options.tokenSeparator),
                                o = 0,
                                i = n.length;
                              o < i;
                              o += 1
                            )
                              t.push(new r(n[o], this.options));
                          return {
                            tokenSearchers: t,
                            fullSearcher: new r(e, this.options),
                          };
                        },
                      },
                      {
                        key: "_search",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = this.list,
                            o = {},
                            i = [];
                          if ("string" == typeof n[0]) {
                            for (var r = 0, s = n.length; r < s; r += 1)
                              this._analyze(
                                { key: "", value: n[r], record: r, index: r },
                                {
                                  resultMap: o,
                                  results: i,
                                  tokenSearchers: e,
                                  fullSearcher: t,
                                }
                              );
                            return { weights: null, results: i };
                          }
                          for (var a = {}, l = 0, c = n.length; l < c; l += 1)
                            for (
                              var p = n[l], u = 0, d = this.options.keys.length;
                              u < d;
                              u += 1
                            ) {
                              var f = this.options.keys[u];
                              if ("string" != typeof f) {
                                if (
                                  ((a[f.name] = { weight: 1 - f.weight || 1 }),
                                  f.weight <= 0 || f.weight > 1)
                                )
                                  throw new Error(
                                    "Key weight has to be > 0 and <= 1"
                                  );
                                f = f.name;
                              } else a[f] = { weight: 1 };
                              this._analyze(
                                {
                                  key: f,
                                  value: this.options.getFn(p, f),
                                  record: p,
                                  index: l,
                                },
                                {
                                  resultMap: o,
                                  results: i,
                                  tokenSearchers: e,
                                  fullSearcher: t,
                                }
                              );
                            }
                          return { weights: a, results: i };
                        },
                      },
                      {
                        key: "_analyze",
                        value: function (e, t) {
                          var n = e.key,
                            o = e.arrayIndex,
                            i = void 0 === o ? -1 : o,
                            r = e.value,
                            s = e.record,
                            a = e.index,
                            c = t.tokenSearchers,
                            p = void 0 === c ? [] : c,
                            u = t.fullSearcher,
                            d = void 0 === u ? [] : u,
                            f = t.resultMap,
                            h = void 0 === f ? {} : f,
                            m = t.results,
                            v = void 0 === m ? [] : m;
                          if (null != r) {
                            var g = !1,
                              y = -1,
                              b = 0;
                            if ("string" == typeof r) {
                              this._log("\nKey: ".concat("" === n ? "-" : n));
                              var w = d.search(r);
                              if (
                                (this._log(
                                  'Full text: "'
                                    .concat(r, '", score: ')
                                    .concat(w.score)
                                ),
                                this.options.tokenize)
                              ) {
                                for (
                                  var x = r.split(this.options.tokenSeparator),
                                    k = [],
                                    S = 0;
                                  S < p.length;
                                  S += 1
                                ) {
                                  var T = p[S];
                                  this._log(
                                    '\nPattern: "'.concat(T.pattern, '"')
                                  );
                                  for (
                                    var C = !1, E = 0;
                                    E < x.length;
                                    E += 1
                                  ) {
                                    var A = x[E],
                                      O = T.search(A),
                                      L = {};
                                    O.isMatch
                                      ? ((L[A] = O.score),
                                        (g = !0),
                                        (C = !0),
                                        k.push(O.score))
                                      : ((L[A] = 1),
                                        this.options.matchAllTokens ||
                                          k.push(1)),
                                      this._log(
                                        'Token: "'
                                          .concat(A, '", score: ')
                                          .concat(L[A])
                                      );
                                  }
                                  C && (b += 1);
                                }
                                y = k[0];
                                for (var j = k.length, $ = 1; $ < j; $ += 1)
                                  y += k[$];
                                (y /= j), this._log("Token score average:", y);
                              }
                              var N = w.score;
                              y > -1 && (N = (N + y) / 2),
                                this._log("Score average:", N);
                              var M =
                                !this.options.tokenize ||
                                !this.options.matchAllTokens ||
                                b >= p.length;
                              if (
                                (this._log("\nCheck Matches: ".concat(M)),
                                (g || w.isMatch) && M)
                              ) {
                                var H = h[a];
                                H
                                  ? H.output.push({
                                      key: n,
                                      arrayIndex: i,
                                      value: r,
                                      score: N,
                                      matchedIndices: w.matchedIndices,
                                    })
                                  : ((h[a] = {
                                      item: s,
                                      output: [
                                        {
                                          key: n,
                                          arrayIndex: i,
                                          value: r,
                                          score: N,
                                          matchedIndices: w.matchedIndices,
                                        },
                                      ],
                                    }),
                                    v.push(h[a]));
                              }
                            } else if (l(r))
                              for (var D = 0, z = r.length; D < z; D += 1)
                                this._analyze(
                                  {
                                    key: n,
                                    arrayIndex: D,
                                    value: r[D],
                                    record: s,
                                    index: a,
                                  },
                                  {
                                    resultMap: h,
                                    results: v,
                                    tokenSearchers: p,
                                    fullSearcher: d,
                                  }
                                );
                          }
                        },
                      },
                      {
                        key: "_computeScore",
                        value: function (e, t) {
                          this._log("\n\nComputing score:\n");
                          for (var n = 0, o = t.length; n < o; n += 1) {
                            for (
                              var i = t[n].output,
                                r = i.length,
                                s = 1,
                                a = 1,
                                l = 0;
                              l < r;
                              l += 1
                            ) {
                              var c = e ? e[i[l].key].weight : 1,
                                p =
                                  (1 === c ? i[l].score : i[l].score || 0.001) *
                                  c;
                              1 !== c
                                ? (a = Math.min(a, p))
                                : ((i[l].nScore = p), (s *= p));
                            }
                            (t[n].score = 1 === a ? s : a), this._log(t[n]);
                          }
                        },
                      },
                      {
                        key: "_sort",
                        value: function (e) {
                          this._log("\n\nSorting...."),
                            e.sort(this.options.sortFn);
                        },
                      },
                      {
                        key: "_format",
                        value: function (e) {
                          var t = [];
                          if (this.options.verbose) {
                            var n = [];
                            this._log(
                              "\n\nOutput:\n\n",
                              JSON.stringify(e, function (e, t) {
                                if ("object" === o(t) && null !== t) {
                                  if (-1 !== n.indexOf(t)) return;
                                  n.push(t);
                                }
                                return t;
                              })
                            ),
                              (n = null);
                          }
                          var i = [];
                          this.options.includeMatches &&
                            i.push(function (e, t) {
                              var n = e.output;
                              t.matches = [];
                              for (var o = 0, i = n.length; o < i; o += 1) {
                                var r = n[o];
                                if (0 !== r.matchedIndices.length) {
                                  var s = {
                                    indices: r.matchedIndices,
                                    value: r.value,
                                  };
                                  r.key && (s.key = r.key),
                                    r.hasOwnProperty("arrayIndex") &&
                                      r.arrayIndex > -1 &&
                                      (s.arrayIndex = r.arrayIndex),
                                    t.matches.push(s);
                                }
                              }
                            }),
                            this.options.includeScore &&
                              i.push(function (e, t) {
                                t.score = e.score;
                              });
                          for (var r = 0, s = e.length; r < s; r += 1) {
                            var a = e[r];
                            if (
                              (this.options.id &&
                                (a.item = this.options.getFn(
                                  a.item,
                                  this.options.id
                                )[0]),
                              i.length)
                            ) {
                              for (
                                var l = { item: a.item }, c = 0, p = i.length;
                                c < p;
                                c += 1
                              )
                                i[c](a, l);
                              t.push(l);
                            } else t.push(a.item);
                          }
                          return t;
                        },
                      },
                      {
                        key: "_log",
                        value: function () {
                          var e;
                          this.options.verbose &&
                            (e = console).log.apply(e, arguments);
                        },
                      },
                    ]) && i(t.prototype, n),
                    e
                  );
                })();
              e.exports = c;
            },
            function (e, t, n) {
              function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              var i = n(3),
                r = n(4),
                s = n(7),
                a = (function () {
                  function e(t, n) {
                    var o = n.location,
                      i = void 0 === o ? 0 : o,
                      r = n.distance,
                      a = void 0 === r ? 100 : r,
                      l = n.threshold,
                      c = void 0 === l ? 0.6 : l,
                      p = n.maxPatternLength,
                      u = void 0 === p ? 32 : p,
                      d = n.isCaseSensitive,
                      f = void 0 !== d && d,
                      h = n.tokenSeparator,
                      m = void 0 === h ? / +/g : h,
                      v = n.findAllMatches,
                      g = void 0 !== v && v,
                      y = n.minMatchCharLength,
                      b = void 0 === y ? 1 : y;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.options = {
                        location: i,
                        distance: a,
                        threshold: c,
                        maxPatternLength: u,
                        isCaseSensitive: f,
                        tokenSeparator: m,
                        findAllMatches: g,
                        minMatchCharLength: b,
                      }),
                      (this.pattern = this.options.isCaseSensitive
                        ? t
                        : t.toLowerCase()),
                      this.pattern.length <= u &&
                        (this.patternAlphabet = s(this.pattern));
                  }
                  var t, n;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "search",
                        value: function (e) {
                          if (
                            (this.options.isCaseSensitive ||
                              (e = e.toLowerCase()),
                            this.pattern === e)
                          )
                            return {
                              isMatch: !0,
                              score: 0,
                              matchedIndices: [[0, e.length - 1]],
                            };
                          var t = this.options,
                            n = t.maxPatternLength,
                            o = t.tokenSeparator;
                          if (this.pattern.length > n)
                            return i(e, this.pattern, o);
                          var s = this.options,
                            a = s.location,
                            l = s.distance,
                            c = s.threshold,
                            p = s.findAllMatches,
                            u = s.minMatchCharLength;
                          return r(e, this.pattern, this.patternAlphabet, {
                            location: a,
                            distance: l,
                            threshold: c,
                            findAllMatches: p,
                            minMatchCharLength: u,
                          });
                        },
                      },
                    ]) && o(t.prototype, n),
                    e
                  );
                })();
              e.exports = a;
            },
            function (e, t) {
              var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
              e.exports = function (e, t) {
                var o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : / +/g,
                  i = new RegExp(t.replace(n, "\\$&").replace(o, "|")),
                  r = e.match(i),
                  s = !!r,
                  a = [];
                if (s)
                  for (var l = 0, c = r.length; l < c; l += 1) {
                    var p = r[l];
                    a.push([e.indexOf(p), p.length - 1]);
                  }
                return { score: s ? 0.5 : 1, isMatch: s, matchedIndices: a };
              };
            },
            function (e, t, n) {
              var o = n(5),
                i = n(6);
              e.exports = function (e, t, n, r) {
                for (
                  var s = r.location,
                    a = void 0 === s ? 0 : s,
                    l = r.distance,
                    c = void 0 === l ? 100 : l,
                    p = r.threshold,
                    u = void 0 === p ? 0.6 : p,
                    d = r.findAllMatches,
                    f = void 0 !== d && d,
                    h = r.minMatchCharLength,
                    m = void 0 === h ? 1 : h,
                    v = a,
                    g = e.length,
                    y = u,
                    b = e.indexOf(t, v),
                    w = t.length,
                    x = [],
                    k = 0;
                  k < g;
                  k += 1
                )
                  x[k] = 0;
                if (-1 !== b) {
                  var S = o(t, {
                    errors: 0,
                    currentLocation: b,
                    expectedLocation: v,
                    distance: c,
                  });
                  if (
                    ((y = Math.min(S, y)), -1 !== (b = e.lastIndexOf(t, v + w)))
                  ) {
                    var T = o(t, {
                      errors: 0,
                      currentLocation: b,
                      expectedLocation: v,
                      distance: c,
                    });
                    y = Math.min(T, y);
                  }
                }
                b = -1;
                for (
                  var C = [],
                    E = 1,
                    A = w + g,
                    O = 1 << (w <= 31 ? w - 1 : 30),
                    L = 0;
                  L < w;
                  L += 1
                ) {
                  for (var j = 0, $ = A; j < $; )
                    o(t, {
                      errors: L,
                      currentLocation: v + $,
                      expectedLocation: v,
                      distance: c,
                    }) <= y
                      ? (j = $)
                      : (A = $),
                      ($ = Math.floor((A - j) / 2 + j));
                  A = $;
                  var N = Math.max(1, v - $ + 1),
                    M = f ? g : Math.min(v + $, g) + w,
                    H = Array(M + 2);
                  H[M + 1] = (1 << L) - 1;
                  for (var D = M; D >= N; D -= 1) {
                    var z = D - 1,
                      P = n[e.charAt(z)];
                    if (
                      (P && (x[z] = 1),
                      (H[D] = ((H[D + 1] << 1) | 1) & P),
                      0 !== L &&
                        (H[D] |= ((C[D + 1] | C[D]) << 1) | 1 | C[D + 1]),
                      H[D] & O &&
                        (E = o(t, {
                          errors: L,
                          currentLocation: z,
                          expectedLocation: v,
                          distance: c,
                        })) <= y)
                    ) {
                      if (((y = E), (b = z) <= v)) break;
                      N = Math.max(1, 2 * v - b);
                    }
                  }
                  if (
                    o(t, {
                      errors: L + 1,
                      currentLocation: v,
                      expectedLocation: v,
                      distance: c,
                    }) > y
                  )
                    break;
                  C = H;
                }
                return {
                  isMatch: b >= 0,
                  score: 0 === E ? 0.001 : E,
                  matchedIndices: i(x, m),
                };
              };
            },
            function (e, t) {
              e.exports = function (e, t) {
                var n = t.errors,
                  o = void 0 === n ? 0 : n,
                  i = t.currentLocation,
                  r = void 0 === i ? 0 : i,
                  s = t.expectedLocation,
                  a = void 0 === s ? 0 : s,
                  l = t.distance,
                  c = void 0 === l ? 100 : l,
                  p = o / e.length,
                  u = Math.abs(a - r);
                return c ? p + u / c : u ? 1 : p;
              };
            },
            function (e, t) {
              e.exports = function () {
                for (
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1,
                    n = [],
                    o = -1,
                    i = -1,
                    r = 0,
                    s = e.length;
                  r < s;
                  r += 1
                ) {
                  var a = e[r];
                  a && -1 === o
                    ? (o = r)
                    : a ||
                      -1 === o ||
                      ((i = r - 1) - o + 1 >= t && n.push([o, i]), (o = -1));
                }
                return e[r - 1] && r - o >= t && n.push([o, r - 1]), n;
              };
            },
            function (e, t) {
              e.exports = function (e) {
                for (var t = {}, n = e.length, o = 0; o < n; o += 1)
                  t[e.charAt(o)] = 0;
                for (var i = 0; i < n; i += 1)
                  t[e.charAt(i)] |= 1 << (n - i - 1);
                return t;
              };
            },
            function (e, t, n) {
              var o = n(0);
              e.exports = function (e, t) {
                return (function e(t, n, i) {
                  if (n) {
                    var r = n.indexOf("."),
                      s = n,
                      a = null;
                    -1 !== r && ((s = n.slice(0, r)), (a = n.slice(r + 1)));
                    var l = t[s];
                    if (null != l)
                      if (a || ("string" != typeof l && "number" != typeof l))
                        if (o(l))
                          for (var c = 0, p = l.length; c < p; c += 1)
                            e(l[c], a, i);
                        else a && e(l, a, i);
                      else i.push(l.toString());
                  } else i.push(t);
                  return i;
                })(e, t, []);
              };
            },
          ]);
        }),
          "object" == s(t) && "object" == s(e)
            ? (e.exports = r())
            : ((o = []),
              void 0 ===
                (i = "function" == typeof (n = r) ? n.apply(t, o) : n) ||
                (e.exports = i));
      }.call(this, n(5)(e)));
    },
    function (e, t, n) {
      "use strict";
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function r(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = {
            mimeType: t.mimeType || null,
            onBeforeSend: t.onBeforeSend || Function.prototype,
            onSuccess: t.onSuccess || Function.prototype,
            onError: t.onError || Function.prototype,
            onComplete: t.onComplete || Function.prototype,
          },
          o = Array.isArray(e) ? e : [e],
          i = Array.apply(null, Array(o.length)).map(function (e) {
            return null;
          });
        function r() {
          return !(
            "<" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ""
            )
              .trim()
              .charAt(0)
          );
        }
        function s(e, t) {
          n.onError(e, o[t], t);
        }
        function a(e, t) {
          var r = n.onSuccess(e, o[t], t);
          (e = !1 === r ? "" : r || e),
            (i[t] = e),
            -1 === i.indexOf(null) && n.onComplete(i);
        }
        var l = document.createElement("a");
        o.forEach(function (e, t) {
          if (
            (l.setAttribute("href", e),
            (l.href = String(l.href)),
            Boolean(document.all && !window.atob) &&
              l.host.split(":")[0] !== location.host.split(":")[0])
          ) {
            if (l.protocol === location.protocol) {
              var o = new XDomainRequest();
              o.open("GET", e),
                (o.timeout = 0),
                (o.onprogress = Function.prototype),
                (o.ontimeout = Function.prototype),
                (o.onload = function () {
                  r(o.responseText) ? a(o.responseText, t) : s(o, t);
                }),
                (o.onerror = function (e) {
                  s(o, t);
                }),
                setTimeout(function () {
                  o.send();
                }, 0);
            } else
              console.warn(
                "Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(
                  e,
                  ")"
                )
              ),
                s(null, t);
          } else {
            var i = new XMLHttpRequest();
            i.open("GET", e),
              n.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(n.mimeType),
              n.onBeforeSend(i, e, t),
              (i.onreadystatechange = function () {
                4 === i.readyState &&
                  (200 === i.status && r(i.responseText)
                    ? a(i.responseText, t)
                    : s(i, t));
              }),
              i.send();
          }
        });
      }
      function s(e) {
        var t = {
            cssComments: /\/\*[\s\S]+?\*\//g,
            cssImports:
              /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,
          },
          n = {
            rootElement: e.rootElement || document,
            include: e.include || 'style,link[rel="stylesheet"]',
            exclude: e.exclude || null,
            filter: e.filter || null,
            useCSSOM: e.useCSSOM || !1,
            onBeforeSend: e.onBeforeSend || Function.prototype,
            onSuccess: e.onSuccess || Function.prototype,
            onError: e.onError || Function.prototype,
            onComplete: e.onComplete || Function.prototype,
          },
          o = Array.apply(
            null,
            n.rootElement.querySelectorAll(n.include)
          ).filter(function (e) {
            return (
              (t = e),
              (o = n.exclude),
              !(
                t.matches ||
                t.matchesSelector ||
                t.webkitMatchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector
              ).call(t, o)
            );
            var t, o;
          }),
          i = Array.apply(null, Array(o.length)).map(function (e) {
            return null;
          });
        function s() {
          if (-1 === i.indexOf(null)) {
            var e = i.join("");
            n.onComplete(e, i, o);
          }
        }
        function l(e, t, o, a) {
          var l = n.onSuccess(e, o, a);
          (function e(t, o, i, s) {
            var a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [];
            var l =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : [];
            var p = c(t, i, l);
            p.rules.length
              ? r(p.absoluteUrls, {
                  onBeforeSend: function (e, t, i) {
                    n.onBeforeSend(e, o, t);
                  },
                  onSuccess: function (e, t, i) {
                    var r = n.onSuccess(e, o, t),
                      s = c((e = !1 === r ? "" : r || e), t, l);
                    return (
                      s.rules.forEach(function (t, n) {
                        e = e.replace(t, s.absoluteRules[n]);
                      }),
                      e
                    );
                  },
                  onError: function (n, r, c) {
                    a.push({ xhr: n, url: r }),
                      l.push(p.rules[c]),
                      e(t, o, i, s, a, l);
                  },
                  onComplete: function (n) {
                    n.forEach(function (e, n) {
                      t = t.replace(p.rules[n], e);
                    }),
                      e(t, o, i, s, a, l);
                  },
                })
              : s(t, a);
          })(
            (e = void 0 !== l && !1 === Boolean(l) ? "" : l || e),
            o,
            a,
            function (e, r) {
              null === i[t] &&
                (r.forEach(function (e) {
                  return n.onError(e.xhr, o, e.url);
                }),
                !n.filter || n.filter.test(e) ? (i[t] = e) : (i[t] = ""),
                s());
            }
          );
        }
        function c(e, n) {
          var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            i = {};
          return (
            (i.rules = (
              e.replace(t.cssComments, "").match(t.cssImports) || []
            ).filter(function (e) {
              return -1 === o.indexOf(e);
            })),
            (i.urls = i.rules.map(function (e) {
              return e.replace(t.cssImports, "$1");
            })),
            (i.absoluteUrls = i.urls.map(function (e) {
              return a(e, n);
            })),
            (i.absoluteRules = i.rules.map(function (e, t) {
              var o = i.urls[t],
                r = a(i.absoluteUrls[t], n);
              return e.replace(o, r);
            })),
            i
          );
        }
        o.length
          ? o.forEach(function (e, t) {
              var o = e.getAttribute("href"),
                c = e.getAttribute("rel"),
                p =
                  "LINK" === e.nodeName &&
                  o &&
                  c &&
                  "stylesheet" === c.toLowerCase(),
                u = "STYLE" === e.nodeName;
              if (p)
                r(o, {
                  mimeType: "text/css",
                  onBeforeSend: function (t, o, i) {
                    n.onBeforeSend(t, e, o);
                  },
                  onSuccess: function (n, i, r) {
                    var s = a(o, location.href);
                    l(n, t, e, s);
                  },
                  onError: function (o, r, a) {
                    (i[t] = ""), n.onError(o, e, r), s();
                  },
                });
              else if (u) {
                var d = e.textContent;
                n.useCSSOM &&
                  (d = Array.apply(null, e.sheet.cssRules)
                    .map(function (e) {
                      return e.cssText;
                    })
                    .join("")),
                  l(d, t, e, location.href);
              } else (i[t] = ""), s();
            })
          : n.onComplete("", []);
      }
      function a(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : location.href,
          n = document.implementation.createHTMLDocument(""),
          o = n.createElement("base"),
          i = n.createElement("a");
        return (
          n.head.appendChild(o),
          n.body.appendChild(i),
          (o.href = t),
          (i.href = e),
          i.href
        );
      }
      var l = c;
      function c(e, t, n) {
        e instanceof RegExp && (e = p(e, n)),
          t instanceof RegExp && (t = p(t, n));
        var o = u(e, t, n);
        return (
          o && {
            start: o[0],
            end: o[1],
            pre: n.slice(0, o[0]),
            body: n.slice(o[0] + e.length, o[1]),
            post: n.slice(o[1] + t.length),
          }
        );
      }
      function p(e, t) {
        var n = t.match(e);
        return n ? n[0] : null;
      }
      function u(e, t, n) {
        var o,
          i,
          r,
          s,
          a,
          l = n.indexOf(e),
          c = n.indexOf(t, l + 1),
          p = l;
        if (l >= 0 && c > 0) {
          for (o = [], r = n.length; p >= 0 && !a; )
            p == l
              ? (o.push(p), (l = n.indexOf(e, p + 1)))
              : 1 == o.length
              ? (a = [o.pop(), c])
              : ((i = o.pop()) < r && ((r = i), (s = c)),
                (c = n.indexOf(t, p + 1))),
              (p = l < c && l >= 0 ? l : c);
          o.length && (a = [r, s]);
        }
        return a;
      }
      function d(e) {
        var t = o(
          {},
          { preserveStatic: !0, removeComments: !1 },
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        );
        function n(e) {
          throw new Error("CSS parse error: ".concat(e));
        }
        function i(t) {
          var n = t.exec(e);
          if (n) return (e = e.slice(n[0].length)), n;
        }
        function r() {
          return i(/^{\s*/);
        }
        function s() {
          return i(/^}/);
        }
        function a() {
          i(/^\s*/);
        }
        function c() {
          if ((a(), "/" === e[0] && "*" === e[1])) {
            for (var t = 2; e[t] && ("*" !== e[t] || "/" !== e[t + 1]); ) t++;
            if (!e[t]) return n("end of comment is missing");
            var o = e.slice(2, t);
            return (e = e.slice(t + 2)), { type: "comment", comment: o };
          }
        }
        function p() {
          for (var e, n = []; (e = c()); ) n.push(e);
          return t.removeComments ? [] : n;
        }
        function u() {
          for (a(); "}" === e[0]; ) n("extra closing bracket");
          var t = i(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
          if (t)
            return t[0]
              .trim()
              .replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "")
              .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (e) {
                return e.replace(/,/g, "‌");
              })
              .split(/\s*(?![^(]*\)),\s*/)
              .map(function (e) {
                return e.replace(/\u200C/g, ",");
              });
        }
        function d() {
          i(/^([;\s]*)+/);
          var e = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,
            t = i(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
          if (t) {
            if (((t = t[0].trim()), !i(/^:\s*/)))
              return n("property missing ':'");
            var o = i(
                /^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/
              ),
              r = {
                type: "declaration",
                property: t.replace(e, ""),
                value: o ? o[0].replace(e, "").trim() : "",
              };
            return i(/^[;\s]*/), r;
          }
        }
        function f() {
          if (!r()) return n("missing '{'");
          for (var e, t = p(); (e = d()); ) t.push(e), (t = t.concat(p()));
          return s() ? t : n("missing '}'");
        }
        function h() {
          a();
          for (var e, t = []; (e = i(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); )
            t.push(e[1]), i(/^,\s*/);
          if (t.length)
            return { type: "keyframe", values: t, declarations: f() };
        }
        function m() {
          if ((a(), "@" === e[0])) {
            var o =
              (function () {
                var e = i(/^@([-\w]+)?keyframes\s*/);
                if (e) {
                  var t = e[1];
                  if (!(e = i(/^([-\w]+)\s*/)))
                    return n("@keyframes missing name");
                  var o,
                    a = e[1];
                  if (!r()) return n("@keyframes missing '{'");
                  for (var l = p(); (o = h()); ) l.push(o), (l = l.concat(p()));
                  return s()
                    ? { type: "keyframes", name: a, vendor: t, keyframes: l }
                    : n("@keyframes missing '}'");
                }
              })() ||
              (function () {
                var e = i(/^@supports *([^{]+)/);
                if (e)
                  return {
                    type: "supports",
                    supports: e[1].trim(),
                    rules: g(),
                  };
              })() ||
              (function () {
                if (i(/^@host\s*/)) return { type: "host", rules: g() };
              })() ||
              (function () {
                var e = i(/^@media([^{]+)*/);
                if (e)
                  return {
                    type: "media",
                    media: (e[1] || "").trim(),
                    rules: g(),
                  };
              })() ||
              (function () {
                var e = i(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                if (e)
                  return {
                    type: "custom-media",
                    name: e[1].trim(),
                    media: e[2].trim(),
                  };
              })() ||
              (function () {
                if (i(/^@page */))
                  return {
                    type: "page",
                    selectors: u() || [],
                    declarations: f(),
                  };
              })() ||
              (function () {
                var e = i(/^@([-\w]+)?document *([^{]+)/);
                if (e)
                  return {
                    type: "document",
                    document: e[2].trim(),
                    vendor: e[1] ? e[1].trim() : null,
                    rules: g(),
                  };
              })() ||
              (function () {
                if (i(/^@font-face\s*/))
                  return { type: "font-face", declarations: f() };
              })() ||
              (function () {
                var e = i(/^@(import|charset|namespace)\s*([^;]+);/);
                if (e) return { type: e[1], name: e[2].trim() };
              })();
            if (o && !t.preserveStatic) {
              var l = !1;
              if (o.declarations)
                l = o.declarations.some(function (e) {
                  return /var\(/.test(e.value);
                });
              else
                l = (o.keyframes || o.rules || []).some(function (e) {
                  return (e.declarations || []).some(function (e) {
                    return /var\(/.test(e.value);
                  });
                });
              return l ? o : {};
            }
            return o;
          }
        }
        function v() {
          if (!t.preserveStatic) {
            var o = l("{", "}", e);
            if (o) {
              var i =
                  /:(?:root|host)(?![.:#(])/.test(o.pre) &&
                  /--\S*\s*:/.test(o.body),
                r = /var\(/.test(o.body);
              if (!i && !r) return (e = e.slice(o.end + 1)), {};
            }
          }
          var s = u() || [],
            a = t.preserveStatic
              ? f()
              : f().filter(function (e) {
                  var t =
                      s.some(function (e) {
                        return /:(?:root|host)(?![.:#(])/.test(e);
                      }) && /^--\S/.test(e.property),
                    n = /var\(/.test(e.value);
                  return t || n;
                });
          return (
            s.length || n("selector missing"),
            { type: "rule", selectors: s, declarations: a }
          );
        }
        function g(t) {
          if (!t && !r()) return n("missing '{'");
          for (
            var o, i = p();
            e.length && (t || "}" !== e[0]) && (o = m() || v());

          )
            o.type && i.push(o), (i = i.concat(p()));
          return t || s() ? i : n("missing '}'");
        }
        return { type: "stylesheet", stylesheet: { rules: g(!0), errors: [] } };
      }
      function f(e) {
        var t = o(
            {},
            { parseHost: !1, store: {}, onWarning: function () {} },
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ),
          n = new RegExp(
            ":".concat(t.parseHost ? "host" : "root", "(?![.:#(])")
          );
        return (
          "string" == typeof e && (e = d(e, t)),
          e.stylesheet.rules.forEach(function (e) {
            "rule" === e.type &&
              e.selectors.some(function (e) {
                return n.test(e);
              }) &&
              e.declarations.forEach(function (e, n) {
                var o = e.property,
                  i = e.value;
                o && 0 === o.indexOf("--") && (t.store[o] = i);
              });
          }),
          t.store
        );
      }
      function h(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = {
            charset: function (e) {
              return "@charset " + e.name + ";";
            },
            comment: function (e) {
              return 0 === e.comment.indexOf("__CSSVARSPONYFILL")
                ? "/*" + e.comment + "*/"
                : "";
            },
            "custom-media": function (e) {
              return "@custom-media " + e.name + " " + e.media + ";";
            },
            declaration: function (e) {
              return e.property + ":" + e.value + ";";
            },
            document: function (e) {
              return (
                "@" +
                (e.vendor || "") +
                "document " +
                e.document +
                "{" +
                i(e.rules) +
                "}"
              );
            },
            "font-face": function (e) {
              return "@font-face{" + i(e.declarations) + "}";
            },
            host: function (e) {
              return "@host{" + i(e.rules) + "}";
            },
            import: function (e) {
              return "@import " + e.name + ";";
            },
            keyframe: function (e) {
              return e.values.join(",") + "{" + i(e.declarations) + "}";
            },
            keyframes: function (e) {
              return (
                "@" +
                (e.vendor || "") +
                "keyframes " +
                e.name +
                "{" +
                i(e.keyframes) +
                "}"
              );
            },
            media: function (e) {
              return "@media " + e.media + "{" + i(e.rules) + "}";
            },
            namespace: function (e) {
              return "@namespace " + e.name + ";";
            },
            page: function (e) {
              return (
                "@page " +
                (e.selectors.length ? e.selectors.join(", ") : "") +
                "{" +
                i(e.declarations) +
                "}"
              );
            },
            rule: function (e) {
              var t = e.declarations;
              if (t.length) return e.selectors.join(",") + "{" + i(t) + "}";
            },
            supports: function (e) {
              return "@supports " + e.supports + "{" + i(e.rules) + "}";
            },
          };
        function i(e) {
          for (var i = "", r = 0; r < e.length; r++) {
            var s = e[r];
            n && n(s);
            var a = o[s.type](s);
            a && ((i += a), a.length && s.selectors && (i += t));
          }
          return i;
        }
        return i(e.stylesheet.rules);
      }
      c.range = u;
      var m = "--",
        v = "var";
      function g(e) {
        var t = o(
          {},
          {
            preserveStatic: !0,
            preserveVars: !1,
            variables: {},
            onWarning: function () {},
          },
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        );
        return (
          "string" == typeof e && (e = d(e, t)),
          (function e(t, n) {
            t.rules.forEach(function (o) {
              o.rules
                ? e(o, n)
                : o.keyframes
                ? o.keyframes.forEach(function (e) {
                    "keyframe" === e.type && n(e.declarations, o);
                  })
                : o.declarations && n(o.declarations, t);
            });
          })(e.stylesheet, function (e, n) {
            for (var o = 0; o < e.length; o++) {
              var i = e[o],
                r = i.type,
                s = i.property,
                a = i.value;
              if ("declaration" === r)
                if (t.preserveVars || !s || 0 !== s.indexOf(m)) {
                  if (-1 !== a.indexOf(v + "(")) {
                    var l = b(a, t);
                    l !== i.value &&
                      ((l = y(l)),
                      t.preserveVars
                        ? (e.splice(o, 0, { type: r, property: s, value: l }),
                          o++)
                        : (i.value = l));
                  }
                } else e.splice(o, 1), o--;
            }
          }),
          h(e)
        );
      }
      function y(e) {
        return (
          (e.match(/calc\(([^)]+)\)/g) || []).forEach(function (t) {
            var n = "calc".concat(t.split("calc").join(""));
            e = e.replace(t, n);
          }),
          e
        );
      }
      function b(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (-1 === e.indexOf("var(")) return e;
        var o = l("(", ")", e);
        return o
          ? "var" === o.pre.slice(-3)
            ? 0 === o.body.trim().length
              ? (t.onWarning("var() must contain a non-whitespace string"), e)
              : o.pre.slice(0, -3) +
                (function (e) {
                  var o = e.split(",")[0].replace(/[\s\n\t]/g, ""),
                    i = (e.match(/(?:\s*,\s*){1}(.*)?/) || [])[1],
                    r = Object.prototype.hasOwnProperty.call(t.variables, o)
                      ? String(t.variables[o])
                      : void 0,
                    s = r || (i ? String(i) : void 0),
                    a = n || e;
                  return (
                    r || t.onWarning('variable "'.concat(o, '" is undefined')),
                    s && "undefined" !== s && s.length > 0
                      ? b(s, t, a)
                      : "var(".concat(a, ")")
                  );
                })(o.body) +
                b(o.post, t)
            : o.pre + "(".concat(b(o.body, t), ")") + b(o.post, t)
          : (-1 !== e.indexOf("var(") &&
              t.onWarning('missing closing ")" in the value "'.concat(e, '"')),
            e);
      }
      var w = "undefined" != typeof window,
        x =
          w &&
          window.CSS &&
          window.CSS.supports &&
          window.CSS.supports("(--a: 0)"),
        k = { group: 0, job: 0 },
        S = {
          rootElement: w ? document : null,
          shadowDOM: !1,
          include: "style,link[rel=stylesheet]",
          exclude: "",
          variables: {},
          onlyLegacy: !0,
          preserveStatic: !0,
          preserveVars: !1,
          silent: !1,
          updateDOM: !0,
          updateURLs: !0,
          watch: null,
          onBeforeSend: function () {},
          onWarning: function () {},
          onError: function () {},
          onSuccess: function () {},
          onComplete: function () {},
        },
        T = {
          cssComments: /\/\*[\s\S]+?\*\//g,
          cssKeyframes: /@(?:-\w*-)?keyframes/,
          cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
          cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
          cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
          cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
          cssVarFunc: /var\(\s*--[\w-]/,
          cssVars:
            /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/,
        },
        C = { dom: {}, job: {}, user: {} },
        E = !1,
        A = null,
        O = 0,
        L = null,
        j = !1;
      function $() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = "cssVars(): ",
          n = o({}, S, e);
        function r(e, o, i, r) {
          !n.silent &&
            window.console &&
            console.error("".concat(t).concat(e, "\n"), o),
            n.onError(e, o, i, r);
        }
        function a(e) {
          !n.silent && window.console && console.warn("".concat(t).concat(e)),
            n.onWarning(e);
        }
        if (w) {
          if (n.watch)
            return (
              (n.watch = S.watch),
              (function (e) {
                function t(e) {
                  return (
                    "LINK" === e.tagName &&
                    -1 !==
                      (e.getAttribute("rel") || "").indexOf("stylesheet") &&
                    !e.disabled
                  );
                }
                if (!window.MutationObserver) return;
                A && (A.disconnect(), (A = null));
                (A = new MutationObserver(function (n) {
                  n.some(function (n) {
                    var o,
                      i = !1;
                    return (
                      "attributes" === n.type
                        ? (i = t(n.target))
                        : "childList" === n.type &&
                          ((o = n.addedNodes),
                          (i =
                            Array.apply(null, o).some(function (e) {
                              var n =
                                  1 === e.nodeType &&
                                  e.hasAttribute("data-cssvars"),
                                o =
                                  (function (e) {
                                    return "STYLE" === e.tagName && !e.disabled;
                                  })(e) && T.cssVars.test(e.textContent);
                              return !n && (t(e) || o);
                            }) ||
                            (function (t) {
                              return Array.apply(null, t).some(function (t) {
                                var n = 1 === t.nodeType,
                                  o =
                                    n &&
                                    "out" === t.getAttribute("data-cssvars"),
                                  i =
                                    n &&
                                    "src" === t.getAttribute("data-cssvars"),
                                  r = i;
                                if (i || o) {
                                  var s = t.getAttribute("data-cssvars-group"),
                                    a = e.rootElement.querySelector(
                                      '[data-cssvars-group="'.concat(s, '"]')
                                    );
                                  i && (D(e.rootElement), (C.dom = {})),
                                    a && a.parentNode.removeChild(a);
                                }
                                return r;
                              });
                            })(n.removedNodes))),
                      i
                    );
                  }) && $(e);
                })).observe(document.documentElement, {
                  attributes: !0,
                  attributeFilter: ["disabled", "href"],
                  childList: !0,
                  subtree: !0,
                });
              })(n),
              void $(n)
            );
          if (
            (!1 === n.watch && A && (A.disconnect(), (A = null)),
            !n.__benchmark)
          ) {
            if (E === n.rootElement)
              return void (function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 100;
                clearTimeout(L),
                  (L = setTimeout(function () {
                    (e.__benchmark = null), $(e);
                  }, t));
              })(e);
            if (
              ((n.__benchmark = H()),
              (n.exclude = [
                A
                  ? '[data-cssvars]:not([data-cssvars=""])'
                  : '[data-cssvars="out"]',
                n.exclude,
              ]
                .filter(function (e) {
                  return e;
                })
                .join(",")),
              (n.variables = (function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = /^-{2}/;
                return Object.keys(e).reduce(function (n, o) {
                  return (
                    (n[t.test(o) ? o : "--".concat(o.replace(/^-+/, ""))] =
                      e[o]),
                    n
                  );
                }, {});
              })(n.variables)),
              !A)
            )
              if (
                (Array.apply(
                  null,
                  n.rootElement.querySelectorAll('[data-cssvars="out"]')
                ).forEach(function (e) {
                  var t = e.getAttribute("data-cssvars-group");
                  (t
                    ? n.rootElement.querySelector(
                        '[data-cssvars="src"][data-cssvars-group="'.concat(
                          t,
                          '"]'
                        )
                      )
                    : null) || e.parentNode.removeChild(e);
                }),
                O)
              ) {
                var l = n.rootElement.querySelectorAll(
                  '[data-cssvars]:not([data-cssvars="out"])'
                );
                l.length < O && ((O = l.length), (C.dom = {}));
              }
          }
          if ("loading" !== document.readyState)
            if (x && n.onlyLegacy) {
              if (n.updateDOM) {
                var c =
                  n.rootElement.host ||
                  (n.rootElement === document
                    ? document.documentElement
                    : n.rootElement);
                Object.keys(n.variables).forEach(function (e) {
                  c.style.setProperty(e, n.variables[e]);
                });
              }
            } else
              !j &&
              (n.shadowDOM || n.rootElement.shadowRoot || n.rootElement.host)
                ? s({
                    rootElement: S.rootElement,
                    include: S.include,
                    exclude: n.exclude,
                    onSuccess: function (e, t, n) {
                      return (
                        (e = (
                          (e = e
                            .replace(T.cssComments, "")
                            .replace(T.cssMediaQueries, "")).match(
                            T.cssVarDeclRules
                          ) || []
                        ).join("")) || !1
                      );
                    },
                    onComplete: function (e, t, o) {
                      f(e, { store: C.dom, onWarning: a }), (j = !0), $(n);
                    },
                  })
                : ((E = n.rootElement),
                  s({
                    rootElement: n.rootElement,
                    include: n.include,
                    exclude: n.exclude,
                    onBeforeSend: n.onBeforeSend,
                    onError: function (e, t, n) {
                      var o = e.responseURL || M(n, location.href),
                        i = e.statusText
                          ? "(".concat(e.statusText, ")")
                          : "Unspecified Error" +
                            (0 === e.status ? " (possibly CORS related)" : "");
                      r(
                        "CSS XHR Error: "
                          .concat(o, " ")
                          .concat(e.status, " ")
                          .concat(i),
                        t,
                        e,
                        o
                      );
                    },
                    onSuccess: function (e, t, o) {
                      var i = n.onSuccess(e, t, o);
                      return (
                        (e = void 0 !== i && !1 === Boolean(i) ? "" : i || e),
                        n.updateURLs &&
                          (e = (function (e, t) {
                            return (
                              (
                                e.replace(T.cssComments, "").match(T.cssUrls) ||
                                []
                              ).forEach(function (n) {
                                var o = n.replace(T.cssUrls, "$1"),
                                  i = M(o, t);
                                e = e.replace(n, n.replace(o, i));
                              }),
                              e
                            );
                          })(e, o)),
                        e
                      );
                    },
                    onComplete: function (e, t) {
                      var s =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [],
                        l = {},
                        c = n.updateDOM
                          ? C.dom
                          : Object.keys(C.job).length
                          ? C.job
                          : (C.job = JSON.parse(JSON.stringify(C.dom))),
                        p = !1;
                      if (
                        (s.forEach(function (e, o) {
                          if (T.cssVars.test(t[o]))
                            try {
                              var i = d(t[o], {
                                preserveStatic: n.preserveStatic,
                                removeComments: !0,
                              });
                              f(i, {
                                parseHost: Boolean(n.rootElement.host),
                                store: l,
                                onWarning: a,
                              }),
                                (e.__cssVars = { tree: i });
                            } catch (t) {
                              r(t.message, e);
                            }
                        }),
                        n.updateDOM && o(C.user, n.variables),
                        o(l, n.variables),
                        (p = Boolean(
                          (document.querySelector("[data-cssvars]") ||
                            Object.keys(C.dom).length) &&
                            Object.keys(l).some(function (e) {
                              return l[e] !== c[e];
                            })
                        )),
                        o(c, C.user, l),
                        p)
                      )
                        D(n.rootElement), $(n);
                      else {
                        var u = [],
                          m = [],
                          v = !1;
                        if (
                          ((C.job = {}),
                          n.updateDOM && k.job++,
                          s.forEach(function (e) {
                            var t = !e.__cssVars;
                            if (e.__cssVars)
                              try {
                                g(
                                  e.__cssVars.tree,
                                  o({}, n, { variables: c, onWarning: a })
                                );
                                var i = h(e.__cssVars.tree);
                                if (n.updateDOM) {
                                  if (
                                    (e.getAttribute("data-cssvars") ||
                                      e.setAttribute("data-cssvars", "src"),
                                    i.length)
                                  ) {
                                    var s =
                                        e.getAttribute("data-cssvars-group") ||
                                        ++k.group,
                                      l = i.replace(/\s/g, ""),
                                      p =
                                        n.rootElement.querySelector(
                                          '[data-cssvars="out"][data-cssvars-group="'.concat(
                                            s,
                                            '"]'
                                          )
                                        ) || document.createElement("style");
                                    (v = v || T.cssKeyframes.test(i)),
                                      p.hasAttribute("data-cssvars") ||
                                        p.setAttribute("data-cssvars", "out"),
                                      l === e.textContent.replace(/\s/g, "")
                                        ? ((t = !0),
                                          p &&
                                            p.parentNode &&
                                            (e.removeAttribute(
                                              "data-cssvars-group"
                                            ),
                                            p.parentNode.removeChild(p)))
                                        : l !==
                                            p.textContent.replace(/\s/g, "") &&
                                          ([e, p].forEach(function (e) {
                                            e.setAttribute(
                                              "data-cssvars-job",
                                              k.job
                                            ),
                                              e.setAttribute(
                                                "data-cssvars-group",
                                                s
                                              );
                                          }),
                                          (p.textContent = i),
                                          u.push(i),
                                          m.push(p),
                                          p.parentNode ||
                                            e.parentNode.insertBefore(
                                              p,
                                              e.nextSibling
                                            ));
                                  }
                                } else
                                  e.textContent.replace(/\s/g, "") !== i &&
                                    u.push(i);
                              } catch (t) {
                                r(t.message, e);
                              }
                            t && e.setAttribute("data-cssvars", "skip"),
                              e.hasAttribute("data-cssvars-job") ||
                                e.setAttribute("data-cssvars-job", k.job);
                          }),
                          (O = n.rootElement.querySelectorAll(
                            '[data-cssvars]:not([data-cssvars="out"])'
                          ).length),
                          n.shadowDOM)
                        )
                          for (
                            var y,
                              b = [n.rootElement].concat(
                                i(n.rootElement.querySelectorAll("*"))
                              ),
                              w = 0;
                            (y = b[w]);
                            ++w
                          )
                            if (
                              y.shadowRoot &&
                              y.shadowRoot.querySelector("style")
                            ) {
                              var x = o({}, n, { rootElement: y.shadowRoot });
                              $(x);
                            }
                        n.updateDOM && v && N(n.rootElement),
                          (E = !1),
                          n.onComplete(
                            u.join(""),
                            m,
                            JSON.parse(JSON.stringify(c)),
                            H() - n.__benchmark
                          );
                      }
                    },
                  }));
          else
            document.addEventListener("DOMContentLoaded", function t(n) {
              $(e), document.removeEventListener("DOMContentLoaded", t);
            });
        }
      }
      function N(e) {
        var t = [
          "animation-name",
          "-moz-animation-name",
          "-webkit-animation-name",
        ].filter(function (e) {
          return getComputedStyle(document.body)[e];
        })[0];
        if (t) {
          for (
            var n = e.getElementsByTagName("*"), o = [], i = 0, r = n.length;
            i < r;
            i++
          ) {
            var s = n[i];
            "none" !== getComputedStyle(s)[t] &&
              ((s.style[t] += "__CSSVARSPONYFILL-KEYFRAMES__"), o.push(s));
          }
          document.body.offsetHeight;
          for (var a = 0, l = o.length; a < l; a++) {
            var c = o[a].style;
            c[t] = c[t].replace("__CSSVARSPONYFILL-KEYFRAMES__", "");
          }
        }
      }
      function M(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : location.href,
          n = document.implementation.createHTMLDocument(""),
          o = n.createElement("base"),
          i = n.createElement("a");
        return (
          n.head.appendChild(o),
          n.body.appendChild(i),
          (o.href = t),
          (i.href = e),
          i.href
        );
      }
      function H() {
        return w && (window.performance || {}).now
          ? window.performance.now()
          : new Date().getTime();
      }
      function D(e) {
        Array.apply(
          null,
          e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')
        ).forEach(function (e) {
          return e.setAttribute("data-cssvars", "");
        });
      }
      ($.reset = function () {
        for (var e in ((E = !1),
        A && (A.disconnect(), (A = null)),
        (O = 0),
        (L = null),
        (j = !1),
        C))
          C[e] = {};
      }),
        (t.a = $);
    },
    function (e, t, n) {
      "use strict";
      var o = (function () {
        function e(e, t) {
          var n = void 0 !== t ? t : {};
          (this.version = "3.6.6"),
            (this.userAgent =
              window.navigator.userAgent ||
              "no `userAgent` provided by the browser"),
            (this.props = {
              customStickyChangeNumber: n.customStickyChangeNumber || null,
              noStyles: n.noStyles || !1,
              stickyBitStickyOffset: n.stickyBitStickyOffset || 0,
              parentClass: n.parentClass || "js-stickybit-parent",
              scrollEl:
                "string" == typeof n.scrollEl
                  ? document.querySelector(n.scrollEl)
                  : n.scrollEl || window,
              stickyClass: n.stickyClass || "js-is-sticky",
              stuckClass: n.stuckClass || "js-is-stuck",
              stickyChangeClass: n.stickyChangeClass || "js-is-sticky--change",
              useStickyClasses: n.useStickyClasses || !1,
              useFixed: n.useFixed || !1,
              useGetBoundingClientRect: n.useGetBoundingClientRect || !1,
              verticalPosition: n.verticalPosition || "top",
            }),
            (this.props.positionVal = this.definePosition() || "fixed"),
            (this.instances = []);
          var o = this.props,
            i = o.positionVal,
            r = o.verticalPosition,
            s = o.noStyles,
            a = o.stickyBitStickyOffset,
            l = "top" !== r || s ? "" : a + "px",
            c = "fixed" !== i ? i : "";
          (this.els = "string" == typeof e ? document.querySelectorAll(e) : e),
            "length" in this.els || (this.els = [this.els]);
          for (var p = 0; p < this.els.length; p++) {
            var u = this.els[p];
            (u.style[r] = l),
              (u.style.position = c),
              this.instances.push(this.addInstance(u, this.props));
          }
        }
        var t = e.prototype;
        return (
          (t.definePosition = function () {
            var e;
            if (this.props.useFixed) e = "fixed";
            else {
              for (
                var t = ["", "-o-", "-webkit-", "-moz-", "-ms-"],
                  n = document.head.style,
                  o = 0;
                o < t.length;
                o += 1
              )
                n.position = t[o] + "sticky";
              (e = n.position ? n.position : "fixed"), (n.position = "");
            }
            return e;
          }),
          (t.addInstance = function (e, t) {
            var n = this,
              o = { el: e, parent: e.parentNode, props: t };
            if ("fixed" === t.positionVal || t.useStickyClasses) {
              this.isWin = this.props.scrollEl === window;
              var i = this.isWin
                ? window
                : this.getClosestParent(o.el, o.props.scrollEl);
              this.computeScrollOffsets(o),
                (o.parent.className += " " + t.parentClass),
                (o.state = "default"),
                (o.stateContainer = function () {
                  return n.manageState(o);
                }),
                i.addEventListener("scroll", o.stateContainer);
            }
            return o;
          }),
          (t.getClosestParent = function (e, t) {
            var n = t,
              o = e;
            if (o.parentElement === n) return n;
            for (; o.parentElement !== n; ) o = o.parentElement;
            return n;
          }),
          (t.getTopPosition = function (e) {
            if (this.props.useGetBoundingClientRect)
              return (
                e.getBoundingClientRect().top +
                (this.props.scrollEl.pageYOffset ||
                  document.documentElement.scrollTop)
              );
            var t = 0;
            do {
              t = e.offsetTop + t;
            } while ((e = e.offsetParent));
            return t;
          }),
          (t.computeScrollOffsets = function (e) {
            var t = e,
              n = t.props,
              o = t.el,
              i = t.parent,
              r = !this.isWin && "fixed" === n.positionVal,
              s = "bottom" !== n.verticalPosition,
              a = r ? this.getTopPosition(n.scrollEl) : 0,
              l = r ? this.getTopPosition(i) - a : this.getTopPosition(i),
              c =
                null !== n.customStickyChangeNumber
                  ? n.customStickyChangeNumber
                  : o.offsetHeight,
              p = l + i.offsetHeight;
            (t.offset = a + n.stickyBitStickyOffset),
              (t.stickyStart = s ? l - t.offset : 0),
              (t.stickyChange = t.stickyStart + c),
              (t.stickyStop = s
                ? p - (o.offsetHeight + t.offset)
                : p - window.innerHeight);
          }),
          (t.toggleClasses = function (e, t, n) {
            var o = e,
              i = o.className.split(" ");
            n && -1 === i.indexOf(n) && i.push(n);
            var r = i.indexOf(t);
            -1 !== r && i.splice(r, 1), (o.className = i.join(" "));
          }),
          (t.manageState = function (e) {
            var t = e,
              n = t.el,
              o = t.props,
              i = t.state,
              r = t.stickyStart,
              s = t.stickyChange,
              a = t.stickyStop,
              l = n.style,
              c = o.noStyles,
              p = o.positionVal,
              u = o.scrollEl,
              d = o.stickyClass,
              f = o.stickyChangeClass,
              h = o.stuckClass,
              m = o.verticalPosition,
              v = "bottom" !== m,
              g = function (e) {
                e();
              },
              y =
                (this.isWin &&
                  (window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.msRequestAnimationFrame)) ||
                g,
              b = this.toggleClasses,
              w = this.isWin
                ? window.scrollY || window.pageYOffset
                : u.scrollTop,
              x = v && w <= r && ("sticky" === i || "stuck" === i),
              k = w >= a && "sticky" === i;
            w > r && w < a && ("default" === i || "stuck" === i)
              ? ((t.state = "sticky"),
                y(function () {
                  b(n, h, d),
                    (l.position = p),
                    c ||
                      ((l.bottom = ""),
                      (l[m] = o.stickyBitStickyOffset + "px"));
                }))
              : x
              ? ((t.state = "default"),
                y(function () {
                  b(n, d), b(n, h), "fixed" === p && (l.position = "");
                }))
              : k &&
                ((t.state = "stuck"),
                y(function () {
                  b(n, d, h),
                    "fixed" !== p ||
                      c ||
                      ((l.top = ""),
                      (l.bottom = "0"),
                      (l.position = "absolute"));
                }));
            var S = w >= s && w <= a;
            w < s / 2 || w > a
              ? y(function () {
                  b(n, f);
                })
              : S &&
                y(function () {
                  b(n, "stub", f);
                });
          }),
          (t.update = function (e) {
            void 0 === e && (e = null);
            for (var t = 0; t < this.instances.length; t += 1) {
              var n = this.instances[t];
              if ((this.computeScrollOffsets(n), e))
                for (var o in e) n.props[o] = e[o];
            }
            return this;
          }),
          (t.removeInstance = function (e) {
            var t = e.el,
              n = e.props,
              o = this.toggleClasses;
            (t.style.position = ""),
              (t.style[n.verticalPosition] = ""),
              o(t, n.stickyClass),
              o(t, n.stuckClass),
              o(t.parentNode, n.parentClass);
          }),
          (t.cleanup = function () {
            for (var e = 0; e < this.instances.length; e += 1) {
              var t = this.instances[e];
              t.stateContainer &&
                t.props.scrollEl.removeEventListener(
                  "scroll",
                  t.stateContainer
                ),
                this.removeInstance(t);
            }
            (this.manageState = !1), (this.instances = []);
          }),
          e
        );
      })();
      t.a = function (e, t) {
        return new o(e, t);
      };
    },
    ,
    ,
    ,
    function (e, t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var o;
      o = (function () {
        return this;
      })();
      try {
        o = o || new Function("return this")();
      } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) &&
          (o = window);
      }
      e.exports = o;
    },
  ],
]);
