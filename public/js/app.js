/*! For license information please see app.js.LICENSE.txt */
(() => {
  "use strict";
  var t,
    e = {
      403: (t, e, i) => {
        var n = {};
        i.r(n),
          i.d(n, {
            afterMain: () => A,
            afterRead: () => y,
            afterWrite: () => C,
            applyStyles: () => I,
            arrow: () => G,
            auto: () => l,
            basePlacements: () => c,
            beforeMain: () => w,
            beforeRead: () => b,
            beforeWrite: () => O,
            bottom: () => o,
            clippingParents: () => u,
            computeStyles: () => et,
            createPopper: () => Dt,
            createPopperBase: () => St,
            createPopperLite: () => Nt,
            detectOverflow: () => _t,
            end: () => d,
            eventListeners: () => nt,
            flip: () => bt,
            hide: () => wt,
            left: () => a,
            main: () => E,
            modifierPhases: () => x,
            offset: () => Et,
            placements: () => _,
            popper: () => p,
            popperGenerator: () => Lt,
            popperOffsets: () => At,
            preventOverflow: () => Ot,
            read: () => v,
            reference: () => m,
            right: () => r,
            start: () => h,
            top: () => s,
            variationPlacements: () => g,
            viewport: () => f,
            write: () => T,
          });
        var s = "top",
          o = "bottom",
          r = "right",
          a = "left",
          l = "auto",
          c = [s, o, r, a],
          h = "start",
          d = "end",
          u = "clippingParents",
          f = "viewport",
          p = "popper",
          m = "reference",
          g = c.reduce(function (t, e) {
            return t.concat([e + "-" + h, e + "-" + d]);
          }, []),
          _ = [].concat(c, [l]).reduce(function (t, e) {
            return t.concat([e, e + "-" + h, e + "-" + d]);
          }, []),
          b = "beforeRead",
          v = "read",
          y = "afterRead",
          w = "beforeMain",
          E = "main",
          A = "afterMain",
          O = "beforeWrite",
          T = "write",
          C = "afterWrite",
          x = [b, v, y, w, E, A, O, T, C];
        function k(t) {
          return t ? (t.nodeName || "").toLowerCase() : null;
        }
        function L(t) {
          if (null == t) return window;
          if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
          }
          return t;
        }
        function S(t) {
          return t instanceof L(t).Element || t instanceof Element;
        }
        function D(t) {
          return t instanceof L(t).HTMLElement || t instanceof HTMLElement;
        }
        function N(t) {
          return (
            "undefined" != typeof ShadowRoot &&
            (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot)
          );
        }
        const I = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
              var i = e.styles[t] || {},
                n = e.attributes[t] || {},
                s = e.elements[t];
              D(s) &&
                k(s) &&
                (Object.assign(s.style, i),
                Object.keys(n).forEach(function (t) {
                  var e = n[t];
                  !1 === e
                    ? s.removeAttribute(t)
                    : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
          },
          effect: function (t) {
            var e = t.state,
              i = {
                popper: {
                  position: e.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(e.elements.popper.style, i.popper),
              (e.styles = i),
              e.elements.arrow &&
                Object.assign(e.elements.arrow.style, i.arrow),
              function () {
                Object.keys(e.elements).forEach(function (t) {
                  var n = e.elements[t],
                    s = e.attributes[t] || {},
                    o = Object.keys(
                      e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
                    ).reduce(function (t, e) {
                      return (t[e] = ""), t;
                    }, {});
                  D(n) &&
                    k(n) &&
                    (Object.assign(n.style, o),
                    Object.keys(s).forEach(function (t) {
                      n.removeAttribute(t);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        };
        function P(t) {
          return t.split("-")[0];
        }
        var j = Math.max,
          M = Math.min,
          H = Math.round;
        function B(t, e) {
          void 0 === e && (e = !1);
          var i = t.getBoundingClientRect(),
            n = 1,
            s = 1;
          if (D(t) && e) {
            var o = t.offsetHeight,
              r = t.offsetWidth;
            r > 0 && (n = H(i.width) / r || 1),
              o > 0 && (s = H(i.height) / o || 1);
          }
          return {
            width: i.width / n,
            height: i.height / s,
            top: i.top / s,
            right: i.right / n,
            bottom: i.bottom / s,
            left: i.left / n,
            x: i.left / n,
            y: i.top / s,
          };
        }
        function R(t) {
          var e = B(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
          return (
            Math.abs(e.width - i) <= 1 && (i = e.width),
            Math.abs(e.height - n) <= 1 && (n = e.height),
            { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
          );
        }
        function W(t, e) {
          var i = e.getRootNode && e.getRootNode();
          if (t.contains(e)) return !0;
          if (i && N(i)) {
            var n = e;
            do {
              if (n && t.isSameNode(n)) return !0;
              n = n.parentNode || n.host;
            } while (n);
          }
          return !1;
        }
        function $(t) {
          return L(t).getComputedStyle(t);
        }
        function z(t) {
          return ["table", "td", "th"].indexOf(k(t)) >= 0;
        }
        function q(t) {
          return ((S(t) ? t.ownerDocument : t.document) || window.document)
            .documentElement;
        }
        function F(t) {
          return "html" === k(t)
            ? t
            : t.assignedSlot || t.parentNode || (N(t) ? t.host : null) || q(t);
        }
        function U(t) {
          return D(t) && "fixed" !== $(t).position ? t.offsetParent : null;
        }
        function V(t) {
          for (
            var e = L(t), i = U(t);
            i && z(i) && "static" === $(i).position;

          )
            i = U(i);
          return i &&
            ("html" === k(i) || ("body" === k(i) && "static" === $(i).position))
            ? e
            : i ||
                (function (t) {
                  var e =
                    -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                  if (
                    -1 !== navigator.userAgent.indexOf("Trident") &&
                    D(t) &&
                    "fixed" === $(t).position
                  )
                    return null;
                  for (
                    var i = F(t);
                    D(i) && ["html", "body"].indexOf(k(i)) < 0;

                  ) {
                    var n = $(i);
                    if (
                      "none" !== n.transform ||
                      "none" !== n.perspective ||
                      "paint" === n.contain ||
                      -1 !==
                        ["transform", "perspective"].indexOf(n.willChange) ||
                      (e && "filter" === n.willChange) ||
                      (e && n.filter && "none" !== n.filter)
                    )
                      return i;
                    i = i.parentNode;
                  }
                  return null;
                })(t) ||
                e;
        }
        function K(t) {
          return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
        }
        function X(t, e, i) {
          return j(t, M(e, i));
        }
        function Y(t) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
        }
        function Q(t, e) {
          return e.reduce(function (e, i) {
            return (e[i] = t), e;
          }, {});
        }
        const G = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e,
              i = t.state,
              n = t.name,
              l = t.options,
              h = i.elements.arrow,
              d = i.modifiersData.popperOffsets,
              u = P(i.placement),
              f = K(u),
              p = [a, r].indexOf(u) >= 0 ? "height" : "width";
            if (h && d) {
              var m = (function (t, e) {
                  return Y(
                    "number" !=
                      typeof (t =
                        "function" == typeof t
                          ? t(
                              Object.assign({}, e.rects, {
                                placement: e.placement,
                              })
                            )
                          : t)
                      ? t
                      : Q(t, c)
                  );
                })(l.padding, i),
                g = R(h),
                _ = "y" === f ? s : a,
                b = "y" === f ? o : r,
                v =
                  i.rects.reference[p] +
                  i.rects.reference[f] -
                  d[f] -
                  i.rects.popper[p],
                y = d[f] - i.rects.reference[f],
                w = V(h),
                E = w
                  ? "y" === f
                    ? w.clientHeight || 0
                    : w.clientWidth || 0
                  : 0,
                A = v / 2 - y / 2,
                O = m[_],
                T = E - g[p] - m[b],
                C = E / 2 - g[p] / 2 + A,
                x = X(O, C, T),
                k = f;
              i.modifiersData[n] =
                (((e = {})[k] = x), (e.centerOffset = x - C), e);
            }
          },
          effect: function (t) {
            var e = t.state,
              i = t.options.element,
              n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n &&
              ("string" != typeof n ||
                (n = e.elements.popper.querySelector(n))) &&
              W(e.elements.popper, n) &&
              (e.elements.arrow = n);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
        function Z(t) {
          return t.split("-")[1];
        }
        var J = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function tt(t) {
          var e,
            i = t.popper,
            n = t.popperRect,
            l = t.placement,
            c = t.variation,
            h = t.offsets,
            u = t.position,
            f = t.gpuAcceleration,
            p = t.adaptive,
            m = t.roundOffsets,
            g = t.isFixed,
            _ = h.x,
            b = void 0 === _ ? 0 : _,
            v = h.y,
            y = void 0 === v ? 0 : v,
            w = "function" == typeof m ? m({ x: b, y }) : { x: b, y };
          (b = w.x), (y = w.y);
          var E = h.hasOwnProperty("x"),
            A = h.hasOwnProperty("y"),
            O = a,
            T = s,
            C = window;
          if (p) {
            var x = V(i),
              k = "clientHeight",
              S = "clientWidth";
            if (
              (x === L(i) &&
                "static" !== $((x = q(i))).position &&
                "absolute" === u &&
                ((k = "scrollHeight"), (S = "scrollWidth")),
              (x = x),
              l === s || ((l === a || l === r) && c === d))
            )
              (T = o),
                (y -=
                  (g && C.visualViewport ? C.visualViewport.height : x[k]) -
                  n.height),
                (y *= f ? 1 : -1);
            if (l === a || ((l === s || l === o) && c === d))
              (O = r),
                (b -=
                  (g && C.visualViewport ? C.visualViewport.width : x[S]) -
                  n.width),
                (b *= f ? 1 : -1);
          }
          var D,
            N = Object.assign({ position: u }, p && J),
            I =
              !0 === m
                ? (function (t) {
                    var e = t.x,
                      i = t.y,
                      n = window.devicePixelRatio || 1;
                    return { x: H(e * n) / n || 0, y: H(i * n) / n || 0 };
                  })({ x: b, y })
                : { x: b, y };
          return (
            (b = I.x),
            (y = I.y),
            f
              ? Object.assign(
                  {},
                  N,
                  (((D = {})[T] = A ? "0" : ""),
                  (D[O] = E ? "0" : ""),
                  (D.transform =
                    (C.devicePixelRatio || 1) <= 1
                      ? "translate(" + b + "px, " + y + "px)"
                      : "translate3d(" + b + "px, " + y + "px, 0)"),
                  D)
                )
              : Object.assign(
                  {},
                  N,
                  (((e = {})[T] = A ? y + "px" : ""),
                  (e[O] = E ? b + "px" : ""),
                  (e.transform = ""),
                  e)
                )
          );
        }
        const et = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (t) {
            var e = t.state,
              i = t.options,
              n = i.gpuAcceleration,
              s = void 0 === n || n,
              o = i.adaptive,
              r = void 0 === o || o,
              a = i.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: P(e.placement),
                variation: Z(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy,
              };
            null != e.modifiersData.popperOffsets &&
              (e.styles.popper = Object.assign(
                {},
                e.styles.popper,
                tt(
                  Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l,
                  })
                )
              )),
              null != e.modifiersData.arrow &&
                (e.styles.arrow = Object.assign(
                  {},
                  e.styles.arrow,
                  tt(
                    Object.assign({}, c, {
                      offsets: e.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    })
                  )
                )),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement,
              }));
          },
          data: {},
        };
        var it = { passive: !0 };
        const nt = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (t) {
            var e = t.state,
              i = t.instance,
              n = t.options,
              s = n.scroll,
              o = void 0 === s || s,
              r = n.resize,
              a = void 0 === r || r,
              l = L(e.elements.popper),
              c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return (
              o &&
                c.forEach(function (t) {
                  t.addEventListener("scroll", i.update, it);
                }),
              a && l.addEventListener("resize", i.update, it),
              function () {
                o &&
                  c.forEach(function (t) {
                    t.removeEventListener("scroll", i.update, it);
                  }),
                  a && l.removeEventListener("resize", i.update, it);
              }
            );
          },
          data: {},
        };
        var st = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function ot(t) {
          return t.replace(/left|right|bottom|top/g, function (t) {
            return st[t];
          });
        }
        var rt = { start: "end", end: "start" };
        function at(t) {
          return t.replace(/start|end/g, function (t) {
            return rt[t];
          });
        }
        function lt(t) {
          var e = L(t);
          return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
        }
        function ct(t) {
          return B(q(t)).left + lt(t).scrollLeft;
        }
        function ht(t) {
          var e = $(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
          return /auto|scroll|overlay|hidden/.test(i + s + n);
        }
        function dt(t) {
          return ["html", "body", "#document"].indexOf(k(t)) >= 0
            ? t.ownerDocument.body
            : D(t) && ht(t)
            ? t
            : dt(F(t));
        }
        function ut(t, e) {
          var i;
          void 0 === e && (e = []);
          var n = dt(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = L(n),
            r = s ? [o].concat(o.visualViewport || [], ht(n) ? n : []) : n,
            a = e.concat(r);
          return s ? a : a.concat(ut(F(r)));
        }
        function ft(t) {
          return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
          });
        }
        function pt(t, e) {
          return e === f
            ? ft(
                (function (t) {
                  var e = L(t),
                    i = q(t),
                    n = e.visualViewport,
                    s = i.clientWidth,
                    o = i.clientHeight,
                    r = 0,
                    a = 0;
                  return (
                    n &&
                      ((s = n.width),
                      (o = n.height),
                      /^((?!chrome|android).)*safari/i.test(
                        navigator.userAgent
                      ) || ((r = n.offsetLeft), (a = n.offsetTop))),
                    { width: s, height: o, x: r + ct(t), y: a }
                  );
                })(t)
              )
            : S(e)
            ? (function (t) {
                var e = B(t);
                return (
                  (e.top = e.top + t.clientTop),
                  (e.left = e.left + t.clientLeft),
                  (e.bottom = e.top + t.clientHeight),
                  (e.right = e.left + t.clientWidth),
                  (e.width = t.clientWidth),
                  (e.height = t.clientHeight),
                  (e.x = e.left),
                  (e.y = e.top),
                  e
                );
              })(e)
            : ft(
                (function (t) {
                  var e,
                    i = q(t),
                    n = lt(t),
                    s = null == (e = t.ownerDocument) ? void 0 : e.body,
                    o = j(
                      i.scrollWidth,
                      i.clientWidth,
                      s ? s.scrollWidth : 0,
                      s ? s.clientWidth : 0
                    ),
                    r = j(
                      i.scrollHeight,
                      i.clientHeight,
                      s ? s.scrollHeight : 0,
                      s ? s.clientHeight : 0
                    ),
                    a = -n.scrollLeft + ct(t),
                    l = -n.scrollTop;
                  return (
                    "rtl" === $(s || i).direction &&
                      (a += j(i.clientWidth, s ? s.clientWidth : 0) - o),
                    { width: o, height: r, x: a, y: l }
                  );
                })(q(t))
              );
        }
        function mt(t, e, i) {
          var n =
              "clippingParents" === e
                ? (function (t) {
                    var e = ut(F(t)),
                      i =
                        ["absolute", "fixed"].indexOf($(t).position) >= 0 &&
                        D(t)
                          ? V(t)
                          : t;
                    return S(i)
                      ? e.filter(function (t) {
                          return S(t) && W(t, i) && "body" !== k(t);
                        })
                      : [];
                  })(t)
                : [].concat(e),
            s = [].concat(n, [i]),
            o = s[0],
            r = s.reduce(function (e, i) {
              var n = pt(t, i);
              return (
                (e.top = j(n.top, e.top)),
                (e.right = M(n.right, e.right)),
                (e.bottom = M(n.bottom, e.bottom)),
                (e.left = j(n.left, e.left)),
                e
              );
            }, pt(t, o));
          return (
            (r.width = r.right - r.left),
            (r.height = r.bottom - r.top),
            (r.x = r.left),
            (r.y = r.top),
            r
          );
        }
        function gt(t) {
          var e,
            i = t.reference,
            n = t.element,
            l = t.placement,
            c = l ? P(l) : null,
            u = l ? Z(l) : null,
            f = i.x + i.width / 2 - n.width / 2,
            p = i.y + i.height / 2 - n.height / 2;
          switch (c) {
            case s:
              e = { x: f, y: i.y - n.height };
              break;
            case o:
              e = { x: f, y: i.y + i.height };
              break;
            case r:
              e = { x: i.x + i.width, y: p };
              break;
            case a:
              e = { x: i.x - n.width, y: p };
              break;
            default:
              e = { x: i.x, y: i.y };
          }
          var m = c ? K(c) : null;
          if (null != m) {
            var g = "y" === m ? "height" : "width";
            switch (u) {
              case h:
                e[m] = e[m] - (i[g] / 2 - n[g] / 2);
                break;
              case d:
                e[m] = e[m] + (i[g] / 2 - n[g] / 2);
            }
          }
          return e;
        }
        function _t(t, e) {
          void 0 === e && (e = {});
          var i = e,
            n = i.placement,
            a = void 0 === n ? t.placement : n,
            l = i.boundary,
            h = void 0 === l ? u : l,
            d = i.rootBoundary,
            g = void 0 === d ? f : d,
            _ = i.elementContext,
            b = void 0 === _ ? p : _,
            v = i.altBoundary,
            y = void 0 !== v && v,
            w = i.padding,
            E = void 0 === w ? 0 : w,
            A = Y("number" != typeof E ? E : Q(E, c)),
            O = b === p ? m : p,
            T = t.rects.popper,
            C = t.elements[y ? O : b],
            x = mt(S(C) ? C : C.contextElement || q(t.elements.popper), h, g),
            k = B(t.elements.reference),
            L = gt({
              reference: k,
              element: T,
              strategy: "absolute",
              placement: a,
            }),
            D = ft(Object.assign({}, T, L)),
            N = b === p ? D : k,
            I = {
              top: x.top - N.top + A.top,
              bottom: N.bottom - x.bottom + A.bottom,
              left: x.left - N.left + A.left,
              right: N.right - x.right + A.right,
            },
            P = t.modifiersData.offset;
          if (b === p && P) {
            var j = P[a];
            Object.keys(I).forEach(function (t) {
              var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
                i = [s, o].indexOf(t) >= 0 ? "y" : "x";
              I[t] += j[i] * e;
            });
          }
          return I;
        }
        const bt = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e = t.state,
              i = t.options,
              n = t.name;
            if (!e.modifiersData[n]._skip) {
              for (
                var d = i.mainAxis,
                  u = void 0 === d || d,
                  f = i.altAxis,
                  p = void 0 === f || f,
                  m = i.fallbackPlacements,
                  b = i.padding,
                  v = i.boundary,
                  y = i.rootBoundary,
                  w = i.altBoundary,
                  E = i.flipVariations,
                  A = void 0 === E || E,
                  O = i.allowedAutoPlacements,
                  T = e.options.placement,
                  C = P(T),
                  x =
                    m ||
                    (C === T || !A
                      ? [ot(T)]
                      : (function (t) {
                          if (P(t) === l) return [];
                          var e = ot(t);
                          return [at(t), e, at(e)];
                        })(T)),
                  k = [T].concat(x).reduce(function (t, i) {
                    return t.concat(
                      P(i) === l
                        ? (function (t, e) {
                            void 0 === e && (e = {});
                            var i = e,
                              n = i.placement,
                              s = i.boundary,
                              o = i.rootBoundary,
                              r = i.padding,
                              a = i.flipVariations,
                              l = i.allowedAutoPlacements,
                              h = void 0 === l ? _ : l,
                              d = Z(n),
                              u = d
                                ? a
                                  ? g
                                  : g.filter(function (t) {
                                      return Z(t) === d;
                                    })
                                : c,
                              f = u.filter(function (t) {
                                return h.indexOf(t) >= 0;
                              });
                            0 === f.length && (f = u);
                            var p = f.reduce(function (e, i) {
                              return (
                                (e[i] = _t(t, {
                                  placement: i,
                                  boundary: s,
                                  rootBoundary: o,
                                  padding: r,
                                })[P(i)]),
                                e
                              );
                            }, {});
                            return Object.keys(p).sort(function (t, e) {
                              return p[t] - p[e];
                            });
                          })(e, {
                            placement: i,
                            boundary: v,
                            rootBoundary: y,
                            padding: b,
                            flipVariations: A,
                            allowedAutoPlacements: O,
                          })
                        : i
                    );
                  }, []),
                  L = e.rects.reference,
                  S = e.rects.popper,
                  D = new Map(),
                  N = !0,
                  I = k[0],
                  j = 0;
                j < k.length;
                j++
              ) {
                var M = k[j],
                  H = P(M),
                  B = Z(M) === h,
                  R = [s, o].indexOf(H) >= 0,
                  W = R ? "width" : "height",
                  $ = _t(e, {
                    placement: M,
                    boundary: v,
                    rootBoundary: y,
                    altBoundary: w,
                    padding: b,
                  }),
                  z = R ? (B ? r : a) : B ? o : s;
                L[W] > S[W] && (z = ot(z));
                var q = ot(z),
                  F = [];
                if (
                  (u && F.push($[H] <= 0),
                  p && F.push($[z] <= 0, $[q] <= 0),
                  F.every(function (t) {
                    return t;
                  }))
                ) {
                  (I = M), (N = !1);
                  break;
                }
                D.set(M, F);
              }
              if (N)
                for (
                  var U = function (t) {
                      var e = k.find(function (e) {
                        var i = D.get(e);
                        if (i)
                          return i.slice(0, t).every(function (t) {
                            return t;
                          });
                      });
                      if (e) return (I = e), "break";
                    },
                    V = A ? 3 : 1;
                  V > 0;
                  V--
                ) {
                  if ("break" === U(V)) break;
                }
              e.placement !== I &&
                ((e.modifiersData[n]._skip = !0),
                (e.placement = I),
                (e.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        };
        function vt(t, e, i) {
          return (
            void 0 === i && (i = { x: 0, y: 0 }),
            {
              top: t.top - e.height - i.y,
              right: t.right - e.width + i.x,
              bottom: t.bottom - e.height + i.y,
              left: t.left - e.width - i.x,
            }
          );
        }
        function yt(t) {
          return [s, r, o, a].some(function (e) {
            return t[e] >= 0;
          });
        }
        const wt = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (t) {
            var e = t.state,
              i = t.name,
              n = e.rects.reference,
              s = e.rects.popper,
              o = e.modifiersData.preventOverflow,
              r = _t(e, { elementContext: "reference" }),
              a = _t(e, { altBoundary: !0 }),
              l = vt(r, n),
              c = vt(a, s, o),
              h = yt(l),
              d = yt(c);
            (e.modifiersData[i] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: c,
              isReferenceHidden: h,
              hasPopperEscaped: d,
            }),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d,
              }));
          },
        };
        const Et = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (t) {
            var e = t.state,
              i = t.options,
              n = t.name,
              o = i.offset,
              l = void 0 === o ? [0, 0] : o,
              c = _.reduce(function (t, i) {
                return (
                  (t[i] = (function (t, e, i) {
                    var n = P(t),
                      o = [a, s].indexOf(n) >= 0 ? -1 : 1,
                      l =
                        "function" == typeof i
                          ? i(Object.assign({}, e, { placement: t }))
                          : i,
                      c = l[0],
                      h = l[1];
                    return (
                      (c = c || 0),
                      (h = (h || 0) * o),
                      [a, r].indexOf(n) >= 0 ? { x: h, y: c } : { x: c, y: h }
                    );
                  })(i, e.rects, l)),
                  t
                );
              }, {}),
              h = c[e.placement],
              d = h.x,
              u = h.y;
            null != e.modifiersData.popperOffsets &&
              ((e.modifiersData.popperOffsets.x += d),
              (e.modifiersData.popperOffsets.y += u)),
              (e.modifiersData[n] = c);
          },
        };
        const At = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (t) {
            var e = t.state,
              i = t.name;
            e.modifiersData[i] = gt({
              reference: e.rects.reference,
              element: e.rects.popper,
              strategy: "absolute",
              placement: e.placement,
            });
          },
          data: {},
        };
        const Ot = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e = t.state,
              i = t.options,
              n = t.name,
              l = i.mainAxis,
              c = void 0 === l || l,
              d = i.altAxis,
              u = void 0 !== d && d,
              f = i.boundary,
              p = i.rootBoundary,
              m = i.altBoundary,
              g = i.padding,
              _ = i.tether,
              b = void 0 === _ || _,
              v = i.tetherOffset,
              y = void 0 === v ? 0 : v,
              w = _t(e, {
                boundary: f,
                rootBoundary: p,
                padding: g,
                altBoundary: m,
              }),
              E = P(e.placement),
              A = Z(e.placement),
              O = !A,
              T = K(E),
              C = "x" === T ? "y" : "x",
              x = e.modifiersData.popperOffsets,
              k = e.rects.reference,
              L = e.rects.popper,
              S =
                "function" == typeof y
                  ? y(Object.assign({}, e.rects, { placement: e.placement }))
                  : y,
              D =
                "number" == typeof S
                  ? { mainAxis: S, altAxis: S }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
              N = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement]
                : null,
              I = { x: 0, y: 0 };
            if (x) {
              if (c) {
                var H,
                  B = "y" === T ? s : a,
                  W = "y" === T ? o : r,
                  $ = "y" === T ? "height" : "width",
                  z = x[T],
                  q = z + w[B],
                  F = z - w[W],
                  U = b ? -L[$] / 2 : 0,
                  Y = A === h ? k[$] : L[$],
                  Q = A === h ? -L[$] : -k[$],
                  G = e.elements.arrow,
                  J = b && G ? R(G) : { width: 0, height: 0 },
                  tt = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  et = tt[B],
                  it = tt[W],
                  nt = X(0, k[$], J[$]),
                  st = O
                    ? k[$] / 2 - U - nt - et - D.mainAxis
                    : Y - nt - et - D.mainAxis,
                  ot = O
                    ? -k[$] / 2 + U + nt + it + D.mainAxis
                    : Q + nt + it + D.mainAxis,
                  rt = e.elements.arrow && V(e.elements.arrow),
                  at = rt
                    ? "y" === T
                      ? rt.clientTop || 0
                      : rt.clientLeft || 0
                    : 0,
                  lt = null != (H = null == N ? void 0 : N[T]) ? H : 0,
                  ct = z + ot - lt,
                  ht = X(b ? M(q, z + st - lt - at) : q, z, b ? j(F, ct) : F);
                (x[T] = ht), (I[T] = ht - z);
              }
              if (u) {
                var dt,
                  ut = "x" === T ? s : a,
                  ft = "x" === T ? o : r,
                  pt = x[C],
                  mt = "y" === C ? "height" : "width",
                  gt = pt + w[ut],
                  bt = pt - w[ft],
                  vt = -1 !== [s, a].indexOf(E),
                  yt = null != (dt = null == N ? void 0 : N[C]) ? dt : 0,
                  wt = vt ? gt : pt - k[mt] - L[mt] - yt + D.altAxis,
                  Et = vt ? pt + k[mt] + L[mt] - yt - D.altAxis : bt,
                  At =
                    b && vt
                      ? (function (t, e, i) {
                          var n = X(t, e, i);
                          return n > i ? i : n;
                        })(wt, pt, Et)
                      : X(b ? wt : gt, pt, b ? Et : bt);
                (x[C] = At), (I[C] = At - pt);
              }
              e.modifiersData[n] = I;
            }
          },
          requiresIfExists: ["offset"],
        };
        function Tt(t, e, i) {
          void 0 === i && (i = !1);
          var n,
            s,
            o = D(e),
            r =
              D(e) &&
              (function (t) {
                var e = t.getBoundingClientRect(),
                  i = H(e.width) / t.offsetWidth || 1,
                  n = H(e.height) / t.offsetHeight || 1;
                return 1 !== i || 1 !== n;
              })(e),
            a = q(e),
            l = B(t, r),
            c = { scrollLeft: 0, scrollTop: 0 },
            h = { x: 0, y: 0 };
          return (
            (o || (!o && !i)) &&
              (("body" !== k(e) || ht(a)) &&
                (c =
                  (n = e) !== L(n) && D(n)
                    ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
                    : lt(n)),
              D(e)
                ? (((h = B(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
                : a && (h.x = ct(a))),
            {
              x: l.left + c.scrollLeft - h.x,
              y: l.top + c.scrollTop - h.y,
              width: l.width,
              height: l.height,
            }
          );
        }
        function Ct(t) {
          var e = new Map(),
            i = new Set(),
            n = [];
          function s(t) {
            i.add(t.name),
              []
                .concat(t.requires || [], t.requiresIfExists || [])
                .forEach(function (t) {
                  if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                  }
                }),
              n.push(t);
          }
          return (
            t.forEach(function (t) {
              e.set(t.name, t);
            }),
            t.forEach(function (t) {
              i.has(t.name) || s(t);
            }),
            n
          );
        }
        var xt = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function kt() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
          });
        }
        function Lt(t) {
          void 0 === t && (t = {});
          var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? xt : s;
          return function (t, e, i) {
            void 0 === i && (i = o);
            var s,
              r,
              a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, xt, o),
                modifiersData: {},
                elements: { reference: t, popper: e },
                attributes: {},
                styles: {},
              },
              l = [],
              c = !1,
              h = {
                state: a,
                setOptions: function (i) {
                  var s = "function" == typeof i ? i(a.options) : i;
                  d(),
                    (a.options = Object.assign({}, o, a.options, s)),
                    (a.scrollParents = {
                      reference: S(t)
                        ? ut(t)
                        : t.contextElement
                        ? ut(t.contextElement)
                        : [],
                      popper: ut(e),
                    });
                  var r = (function (t) {
                    var e = Ct(t);
                    return x.reduce(function (t, i) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === i;
                        })
                      );
                    }, []);
                  })(
                    (function (t) {
                      var e = t.reduce(function (t, e) {
                        var i = t[e.name];
                        return (
                          (t[e.name] = i
                            ? Object.assign({}, i, e, {
                                options: Object.assign(
                                  {},
                                  i.options,
                                  e.options
                                ),
                                data: Object.assign({}, i.data, e.data),
                              })
                            : e),
                          t
                        );
                      }, {});
                      return Object.keys(e).map(function (t) {
                        return e[t];
                      });
                    })([].concat(n, a.options.modifiers))
                  );
                  return (
                    (a.orderedModifiers = r.filter(function (t) {
                      return t.enabled;
                    })),
                    a.orderedModifiers.forEach(function (t) {
                      var e = t.name,
                        i = t.options,
                        n = void 0 === i ? {} : i,
                        s = t.effect;
                      if ("function" == typeof s) {
                        var o = s({
                            state: a,
                            name: e,
                            instance: h,
                            options: n,
                          }),
                          r = function () {};
                        l.push(o || r);
                      }
                    }),
                    h.update()
                  );
                },
                forceUpdate: function () {
                  if (!c) {
                    var t = a.elements,
                      e = t.reference,
                      i = t.popper;
                    if (kt(e, i)) {
                      (a.rects = {
                        reference: Tt(e, V(i), "fixed" === a.options.strategy),
                        popper: R(i),
                      }),
                        (a.reset = !1),
                        (a.placement = a.options.placement),
                        a.orderedModifiers.forEach(function (t) {
                          return (a.modifiersData[t.name] = Object.assign(
                            {},
                            t.data
                          ));
                        });
                      for (var n = 0; n < a.orderedModifiers.length; n++)
                        if (!0 !== a.reset) {
                          var s = a.orderedModifiers[n],
                            o = s.fn,
                            r = s.options,
                            l = void 0 === r ? {} : r,
                            d = s.name;
                          "function" == typeof o &&
                            (a =
                              o({
                                state: a,
                                options: l,
                                name: d,
                                instance: h,
                              }) || a);
                        } else (a.reset = !1), (n = -1);
                    }
                  }
                },
                update:
                  ((s = function () {
                    return new Promise(function (t) {
                      h.forceUpdate(), t(a);
                    });
                  }),
                  function () {
                    return (
                      r ||
                        (r = new Promise(function (t) {
                          Promise.resolve().then(function () {
                            (r = void 0), t(s());
                          });
                        })),
                      r
                    );
                  }),
                destroy: function () {
                  d(), (c = !0);
                },
              };
            if (!kt(t, e)) return h;
            function d() {
              l.forEach(function (t) {
                return t();
              }),
                (l = []);
            }
            return (
              h.setOptions(i).then(function (t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
              }),
              h
            );
          };
        }
        var St = Lt(),
          Dt = Lt({ defaultModifiers: [nt, At, et, I, Et, bt, Ot, G, wt] }),
          Nt = Lt({ defaultModifiers: [nt, At, et, I] });
        const It = "transitionend",
          Pt = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
              let i = t.getAttribute("href");
              if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
              i.includes("#") &&
                !i.startsWith("#") &&
                (i = `#${i.split("#")[1]}`),
                (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
          },
          jt = (t) => {
            const e = Pt(t);
            return e && document.querySelector(e) ? e : null;
          },
          Mt = (t) => {
            const e = Pt(t);
            return e ? document.querySelector(e) : null;
          },
          Ht = (t) => {
            t.dispatchEvent(new Event(It));
          },
          Bt = (t) =>
            !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
          Rt = (t) =>
            Bt(t)
              ? t.jquery
                ? t[0]
                : t
              : "string" == typeof t && t.length > 0
              ? document.querySelector(t)
              : null,
          Wt = (t, e, i) => {
            Object.keys(i).forEach((n) => {
              const s = i[n],
                o = e[n],
                r =
                  o && Bt(o)
                    ? "element"
                    : null == (a = o)
                    ? `${a}`
                    : {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              var a;
              if (!new RegExp(s).test(r))
                throw new TypeError(
                  `${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
                );
            });
          },
          $t = (t) =>
            !(!Bt(t) || 0 === t.getClientRects().length) &&
            "visible" === getComputedStyle(t).getPropertyValue("visibility"),
          zt = (t) =>
            !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
              ? t.disabled
              : t.hasAttribute("disabled") &&
                "false" !== t.getAttribute("disabled")),
          qt = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
              const e = t.getRootNode();
              return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
              ? t
              : t.parentNode
              ? qt(t.parentNode)
              : null;
          },
          Ft = () => {},
          Ut = (t) => {
            t.offsetHeight;
          },
          Vt = () => {
            const { jQuery: t } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery")
              ? t
              : null;
          },
          Kt = [],
          Xt = () => "rtl" === document.documentElement.dir,
          Yt = (t) => {
            var e;
            (e = () => {
              const e = Vt();
              if (e) {
                const i = t.NAME,
                  n = e.fn[i];
                (e.fn[i] = t.jQueryInterface),
                  (e.fn[i].Constructor = t),
                  (e.fn[i].noConflict = () => (
                    (e.fn[i] = n), t.jQueryInterface
                  ));
              }
            }),
              "loading" === document.readyState
                ? (Kt.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                      Kt.forEach((t) => t());
                    }),
                  Kt.push(e))
                : e();
          },
          Qt = (t) => {
            "function" == typeof t && t();
          },
          Gt = (t, e, i = !0) => {
            if (!i) return void Qt(t);
            const n =
              ((t) => {
                if (!t) return 0;
                let { transitionDuration: e, transitionDelay: i } =
                  window.getComputedStyle(t);
                const n = Number.parseFloat(e),
                  s = Number.parseFloat(i);
                return n || s
                  ? ((e = e.split(",")[0]),
                    (i = i.split(",")[0]),
                    1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                  : 0;
              })(e) + 5;
            let s = !1;
            const o = ({ target: i }) => {
              i === e && ((s = !0), e.removeEventListener(It, o), Qt(t));
            };
            e.addEventListener(It, o),
              setTimeout(() => {
                s || Ht(e);
              }, n);
          },
          Zt = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return (
              (s += i ? 1 : -1),
              n && (s = (s + o) % o),
              t[Math.max(0, Math.min(s, o - 1))]
            );
          },
          Jt = /[^.]*(?=\..*)\.|.*/,
          te = /\..*/,
          ee = /::\d+$/,
          ie = {};
        let ne = 1;
        const se = { mouseenter: "mouseover", mouseleave: "mouseout" },
          oe = /^(mouseenter|mouseleave)/i,
          re = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
          ]);
        function ae(t, e) {
          return (e && `${e}::${ne++}`) || t.uidEvent || ne++;
        }
        function le(t) {
          const e = ae(t);
          return (t.uidEvent = e), (ie[e] = ie[e] || {}), ie[e];
        }
        function ce(t, e, i = null) {
          const n = Object.keys(t);
          for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
          }
          return null;
        }
        function he(t, e, i) {
          const n = "string" == typeof e,
            s = n ? i : e;
          let o = fe(t);
          return re.has(o) || (o = t), [n, s, o];
        }
        function de(t, e, i, n, s) {
          if ("string" != typeof e || !t) return;
          if ((i || ((i = n), (n = null)), oe.test(e))) {
            const t = (t) =>
              function (e) {
                if (
                  !e.relatedTarget ||
                  (e.relatedTarget !== e.delegateTarget &&
                    !e.delegateTarget.contains(e.relatedTarget))
                )
                  return t.call(this, e);
              };
            n ? (n = t(n)) : (i = t(i));
          }
          const [o, r, a] = he(e, i, n),
            l = le(t),
            c = l[a] || (l[a] = {}),
            h = ce(c, r, o ? i : null);
          if (h) return void (h.oneOff = h.oneOff && s);
          const d = ae(r, e.replace(Jt, "")),
            u = o
              ? (function (t, e, i) {
                  return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (
                      let { target: r } = s;
                      r && r !== this;
                      r = r.parentNode
                    )
                      for (let a = o.length; a--; )
                        if (o[a] === r)
                          return (
                            (s.delegateTarget = r),
                            n.oneOff && pe.off(t, s.type, e, i),
                            i.apply(r, [s])
                          );
                    return null;
                  };
                })(t, i, n)
              : (function (t, e) {
                  return function i(n) {
                    return (
                      (n.delegateTarget = t),
                      i.oneOff && pe.off(t, n.type, e),
                      e.apply(t, [n])
                    );
                  };
                })(t, i);
          (u.delegationSelector = o ? i : null),
            (u.originalHandler = r),
            (u.oneOff = s),
            (u.uidEvent = d),
            (c[d] = u),
            t.addEventListener(a, u, o);
        }
        function ue(t, e, i, n, s) {
          const o = ce(e[i], n, s);
          o &&
            (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
        }
        function fe(t) {
          return (t = t.replace(te, "")), se[t] || t;
        }
        const pe = {
            on(t, e, i, n) {
              de(t, e, i, n, !1);
            },
            one(t, e, i, n) {
              de(t, e, i, n, !0);
            },
            off(t, e, i, n) {
              if ("string" != typeof e || !t) return;
              const [s, o, r] = he(e, i, n),
                a = r !== e,
                l = le(t),
                c = e.startsWith(".");
              if (void 0 !== o) {
                if (!l || !l[r]) return;
                return void ue(t, l, r, o, s ? i : null);
              }
              c &&
                Object.keys(l).forEach((i) => {
                  !(function (t, e, i, n) {
                    const s = e[i] || {};
                    Object.keys(s).forEach((o) => {
                      if (o.includes(n)) {
                        const n = s[o];
                        ue(t, e, i, n.originalHandler, n.delegationSelector);
                      }
                    });
                  })(t, l, i, e.slice(1));
                });
              const h = l[r] || {};
              Object.keys(h).forEach((i) => {
                const n = i.replace(ee, "");
                if (!a || e.includes(n)) {
                  const e = h[i];
                  ue(t, l, r, e.originalHandler, e.delegationSelector);
                }
              });
            },
            trigger(t, e, i) {
              if ("string" != typeof e || !t) return null;
              const n = Vt(),
                s = fe(e),
                o = e !== s,
                r = re.has(s);
              let a,
                l = !0,
                c = !0,
                h = !1,
                d = null;
              return (
                o &&
                  n &&
                  ((a = n.Event(e, i)),
                  n(t).trigger(a),
                  (l = !a.isPropagationStopped()),
                  (c = !a.isImmediatePropagationStopped()),
                  (h = a.isDefaultPrevented())),
                r
                  ? ((d = document.createEvent("HTMLEvents")),
                    d.initEvent(s, l, !0))
                  : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
                void 0 !== i &&
                  Object.keys(i).forEach((t) => {
                    Object.defineProperty(d, t, { get: () => i[t] });
                  }),
                h && d.preventDefault(),
                c && t.dispatchEvent(d),
                d.defaultPrevented && void 0 !== a && a.preventDefault(),
                d
              );
            },
          },
          me = new Map(),
          ge = {
            set(t, e, i) {
              me.has(t) || me.set(t, new Map());
              const n = me.get(t);
              n.has(e) || 0 === n.size
                ? n.set(e, i)
                : console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(n.keys())[0]
                    }.`
                  );
            },
            get: (t, e) => (me.has(t) && me.get(t).get(e)) || null,
            remove(t, e) {
              if (!me.has(t)) return;
              const i = me.get(t);
              i.delete(e), 0 === i.size && me.delete(t);
            },
          };
        class _e {
          constructor(t) {
            (t = Rt(t)) &&
              ((this._element = t),
              ge.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            ge.remove(this._element, this.constructor.DATA_KEY),
              pe.off(this._element, this.constructor.EVENT_KEY),
              Object.getOwnPropertyNames(this).forEach((t) => {
                this[t] = null;
              });
          }
          _queueCallback(t, e, i = !0) {
            Gt(t, e, i);
          }
          static getInstance(t) {
            return ge.get(Rt(t), this.DATA_KEY);
          }
          static getOrCreateInstance(t, e = {}) {
            return (
              this.getInstance(t) ||
              new this(t, "object" == typeof e ? e : null)
            );
          }
          static get VERSION() {
            return "5.1.3";
          }
          static get NAME() {
            throw new Error(
              'You have to implement the static method "NAME", for each component!'
            );
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
        }
        const be = (t, e = "hide") => {
          const i = `click.dismiss${t.EVENT_KEY}`,
            n = t.NAME;
          pe.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
            if (
              (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
              zt(this))
            )
              return;
            const s = Mt(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
          });
        };
        class ve extends _e {
          static get NAME() {
            return "alert";
          }
          close() {
            if (pe.trigger(this._element, "close.bs.alert").defaultPrevented)
              return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
          }
          _destroyElement() {
            this._element.remove(),
              pe.trigger(this._element, "closed.bs.alert"),
              this.dispose();
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = ve.getOrCreateInstance(this);
              if ("string" == typeof t) {
                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                  throw new TypeError(`No method named "${t}"`);
                e[t](this);
              }
            });
          }
        }
        be(ve, "close"), Yt(ve);
        const ye = '[data-bs-toggle="button"]';
        class we extends _e {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute(
              "aria-pressed",
              this._element.classList.toggle("active")
            );
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = we.getOrCreateInstance(this);
              "toggle" === t && e[t]();
            });
          }
        }
        function Ee(t) {
          return (
            "true" === t ||
            ("false" !== t &&
              (t === Number(t).toString()
                ? Number(t)
                : "" === t || "null" === t
                ? null
                : t))
          );
        }
        function Ae(t) {
          return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
        }
        pe.on(document, "click.bs.button.data-api", ye, (t) => {
          t.preventDefault();
          const e = t.target.closest(ye);
          we.getOrCreateInstance(e).toggle();
        }),
          Yt(we);
        const Oe = {
            setDataAttribute(t, e, i) {
              t.setAttribute(`data-bs-${Ae(e)}`, i);
            },
            removeDataAttribute(t, e) {
              t.removeAttribute(`data-bs-${Ae(e)}`);
            },
            getDataAttributes(t) {
              if (!t) return {};
              const e = {};
              return (
                Object.keys(t.dataset)
                  .filter((t) => t.startsWith("bs"))
                  .forEach((i) => {
                    let n = i.replace(/^bs/, "");
                    (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                      (e[n] = Ee(t.dataset[i]));
                  }),
                e
              );
            },
            getDataAttribute: (t, e) => Ee(t.getAttribute(`data-bs-${Ae(e)}`)),
            offset(t) {
              const e = t.getBoundingClientRect();
              return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset,
              };
            },
            position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
          },
          Te = {
            find: (t, e = document.documentElement) =>
              [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
              Element.prototype.querySelector.call(e, t),
            children: (t, e) =>
              [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
              const i = [];
              let n = t.parentNode;
              for (
                ;
                n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;

              )
                n.matches(e) && i.push(n), (n = n.parentNode);
              return i;
            },
            prev(t, e) {
              let i = t.previousElementSibling;
              for (; i; ) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling;
              }
              return [];
            },
            next(t, e) {
              let i = t.nextElementSibling;
              for (; i; ) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling;
              }
              return [];
            },
            focusableChildren(t) {
              const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]',
              ]
                .map((t) => `${t}:not([tabindex^="-"])`)
                .join(", ");
              return this.find(e, t).filter((t) => !zt(t) && $t(t));
            },
          },
          Ce = "carousel",
          xe = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
          },
          ke = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
          },
          Le = "next",
          Se = "prev",
          De = "left",
          Ne = "right",
          Ie = { ArrowLeft: Ne, ArrowRight: De },
          Pe = "slid.bs.carousel",
          je = "active",
          Me = ".active.carousel-item";
        class He extends _e {
          constructor(t, e) {
            super(t),
              (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(e)),
              (this._indicatorsElement = Te.findOne(
                ".carousel-indicators",
                this._element
              )),
              (this._touchSupported =
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0),
              (this._pointerEvent = Boolean(window.PointerEvent)),
              this._addEventListeners();
          }
          static get Default() {
            return xe;
          }
          static get NAME() {
            return Ce;
          }
          next() {
            this._slide(Le);
          }
          nextWhenVisible() {
            !document.hidden && $t(this._element) && this.next();
          }
          prev() {
            this._slide(Se);
          }
          pause(t) {
            t || (this._isPaused = !0),
              Te.findOne(
                ".carousel-item-next, .carousel-item-prev",
                this._element
              ) && (Ht(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }
          cycle(t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config &&
                this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }
          to(t) {
            this._activeElement = Te.findOne(Me, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding)
              return void pe.one(this._element, Pe, () => this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? Le : Se;
            this._slide(i, this._items[t]);
          }
          _getConfig(t) {
            return (
              (t = {
                ...xe,
                ...Oe.getDataAttributes(this._element),
                ...("object" == typeof t ? t : {}),
              }),
              Wt(Ce, t, ke),
              t
            );
          }
          _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e && this._slide(e > 0 ? Ne : De);
          }
          _addEventListeners() {
            this._config.keyboard &&
              pe.on(this._element, "keydown.bs.carousel", (t) =>
                this._keydown(t)
              ),
              "hover" === this._config.pause &&
                (pe.on(this._element, "mouseenter.bs.carousel", (t) =>
                  this.pause(t)
                ),
                pe.on(this._element, "mouseleave.bs.carousel", (t) =>
                  this.cycle(t)
                )),
              this._config.touch &&
                this._touchSupported &&
                this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            const t = (t) =>
                this._pointerEvent &&
                ("pen" === t.pointerType || "touch" === t.pointerType),
              e = (e) => {
                t(e)
                  ? (this.touchStartX = e.clientX)
                  : this._pointerEvent ||
                    (this.touchStartX = e.touches[0].clientX);
              },
              i = (t) => {
                this.touchDeltaX =
                  t.touches && t.touches.length > 1
                    ? 0
                    : t.touches[0].clientX - this.touchStartX;
              },
              n = (e) => {
                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                  this._handleSwipe(),
                  "hover" === this._config.pause &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      (t) => this.cycle(t),
                      500 + this._config.interval
                    )));
              };
            Te.find(".carousel-item img", this._element).forEach((t) => {
              pe.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
            }),
              this._pointerEvent
                ? (pe.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
                  pe.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
                  this._element.classList.add("pointer-event"))
                : (pe.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
                  pe.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
                  pe.on(this._element, "touchend.bs.carousel", (t) => n(t)));
          }
          _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Ie[t.key];
            e && (t.preventDefault(), this._slide(e));
          }
          _getItemIndex(t) {
            return (
              (this._items =
                t && t.parentNode
                  ? Te.find(".carousel-item", t.parentNode)
                  : []),
              this._items.indexOf(t)
            );
          }
          _getItemByOrder(t, e) {
            const i = t === Le;
            return Zt(this._items, e, i, this._config.wrap);
          }
          _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t),
              n = this._getItemIndex(Te.findOne(Me, this._element));
            return pe.trigger(this._element, "slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: n,
              to: i,
            });
          }
          _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
              const e = Te.findOne(".active", this._indicatorsElement);
              e.classList.remove(je), e.removeAttribute("aria-current");
              const i = Te.find("[data-bs-target]", this._indicatorsElement);
              for (let e = 0; e < i.length; e++)
                if (
                  Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
                  this._getItemIndex(t)
                ) {
                  i[e].classList.add(je),
                    i[e].setAttribute("aria-current", "true");
                  break;
                }
            }
          }
          _updateInterval() {
            const t = this._activeElement || Te.findOne(Me, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval || this._config.interval),
                (this._config.interval = e))
              : (this._config.interval =
                  this._config.defaultInterval || this._config.interval);
          }
          _slide(t, e) {
            const i = this._directionToOrder(t),
              n = Te.findOne(Me, this._element),
              s = this._getItemIndex(n),
              o = e || this._getItemByOrder(i, n),
              r = this._getItemIndex(o),
              a = Boolean(this._interval),
              l = i === Le,
              c = l ? "carousel-item-start" : "carousel-item-end",
              h = l ? "carousel-item-next" : "carousel-item-prev",
              d = this._orderToDirection(i);
            if (o && o.classList.contains(je))
              return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            (this._isSliding = !0),
              a && this.pause(),
              this._setActiveIndicatorElement(o),
              (this._activeElement = o);
            const u = () => {
              pe.trigger(this._element, Pe, {
                relatedTarget: o,
                direction: d,
                from: s,
                to: r,
              });
            };
            if (this._element.classList.contains("slide")) {
              o.classList.add(h), Ut(o), n.classList.add(c), o.classList.add(c);
              const t = () => {
                o.classList.remove(c, h),
                  o.classList.add(je),
                  n.classList.remove(je, h, c),
                  (this._isSliding = !1),
                  setTimeout(u, 0);
              };
              this._queueCallback(t, n, !0);
            } else
              n.classList.remove(je),
                o.classList.add(je),
                (this._isSliding = !1),
                u();
            a && this.cycle();
          }
          _directionToOrder(t) {
            return [Ne, De].includes(t)
              ? Xt()
                ? t === De
                  ? Se
                  : Le
                : t === De
                ? Le
                : Se
              : t;
          }
          _orderToDirection(t) {
            return [Le, Se].includes(t)
              ? Xt()
                ? t === Se
                  ? De
                  : Ne
                : t === Se
                ? Ne
                : De
              : t;
          }
          static carouselInterface(t, e) {
            const i = He.getOrCreateInstance(t, e);
            let { _config: n } = i;
            "object" == typeof e && (n = { ...n, ...e });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
              if (void 0 === i[s])
                throw new TypeError(`No method named "${s}"`);
              i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
          }
          static jQueryInterface(t) {
            return this.each(function () {
              He.carouselInterface(this, t);
            });
          }
          static dataApiClickHandler(t) {
            const e = Mt(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                ...Oe.getDataAttributes(e),
                ...Oe.getDataAttributes(this),
              },
              n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1),
              He.carouselInterface(e, i),
              n && He.getInstance(e).to(n),
              t.preventDefault();
          }
        }
        pe.on(
          document,
          "click.bs.carousel.data-api",
          "[data-bs-slide], [data-bs-slide-to]",
          He.dataApiClickHandler
        ),
          pe.on(window, "load.bs.carousel.data-api", () => {
            const t = Te.find('[data-bs-ride="carousel"]');
            for (let e = 0, i = t.length; e < i; e++)
              He.carouselInterface(t[e], He.getInstance(t[e]));
          }),
          Yt(He);
        const Be = "collapse",
          Re = "bs.collapse",
          We = { toggle: !0, parent: null },
          $e = { toggle: "boolean", parent: "(null|element)" },
          ze = "show",
          qe = "collapse",
          Fe = "collapsing",
          Ue = "collapsed",
          Ve = ":scope .collapse .collapse",
          Ke = '[data-bs-toggle="collapse"]';
        class Xe extends _e {
          constructor(t, e) {
            super(t),
              (this._isTransitioning = !1),
              (this._config = this._getConfig(e)),
              (this._triggerArray = []);
            const i = Te.find(Ke);
            for (let t = 0, e = i.length; t < e; t++) {
              const e = i[t],
                n = jt(e),
                s = Te.find(n).filter((t) => t === this._element);
              null !== n &&
                s.length &&
                ((this._selector = n), this._triggerArray.push(e));
            }
            this._initializeChildren(),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._triggerArray,
                  this._isShown()
                ),
              this._config.toggle && this.toggle();
          }
          static get Default() {
            return We;
          }
          static get NAME() {
            return Be;
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown()) return;
            let t,
              e = [];
            if (this._config.parent) {
              const t = Te.find(Ve, this._config.parent);
              e = Te.find(
                ".collapse.show, .collapse.collapsing",
                this._config.parent
              ).filter((e) => !t.includes(e));
            }
            const i = Te.findOne(this._selector);
            if (e.length) {
              const n = e.find((t) => i !== t);
              if (((t = n ? Xe.getInstance(n) : null), t && t._isTransitioning))
                return;
            }
            if (pe.trigger(this._element, "show.bs.collapse").defaultPrevented)
              return;
            e.forEach((e) => {
              i !== e && Xe.getOrCreateInstance(e, { toggle: !1 }).hide(),
                t || ge.set(e, Re, null);
            });
            const n = this._getDimension();
            this._element.classList.remove(qe),
              this._element.classList.add(Fe),
              (this._element.style[n] = 0),
              this._addAriaAndCollapsedClass(this._triggerArray, !0),
              (this._isTransitioning = !0);
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(Fe),
                  this._element.classList.add(qe, ze),
                  (this._element.style[n] = ""),
                  pe.trigger(this._element, "shown.bs.collapse");
              },
              this._element,
              !0
            ),
              (this._element.style[n] = `${this._element[s]}px`);
          }
          hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (pe.trigger(this._element, "hide.bs.collapse").defaultPrevented)
              return;
            const t = this._getDimension();
            (this._element.style[t] = `${
              this._element.getBoundingClientRect()[t]
            }px`),
              Ut(this._element),
              this._element.classList.add(Fe),
              this._element.classList.remove(qe, ze);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
              const e = this._triggerArray[t],
                i = Mt(e);
              i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
            }
            this._isTransitioning = !0;
            (this._element.style[t] = ""),
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(Fe),
                    this._element.classList.add(qe),
                    pe.trigger(this._element, "hidden.bs.collapse");
                },
                this._element,
                !0
              );
          }
          _isShown(t = this._element) {
            return t.classList.contains(ze);
          }
          _getConfig(t) {
            return (
              ((t = {
                ...We,
                ...Oe.getDataAttributes(this._element),
                ...t,
              }).toggle = Boolean(t.toggle)),
              (t.parent = Rt(t.parent)),
              Wt(Be, t, $e),
              t
            );
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
              ? "width"
              : "height";
          }
          _initializeChildren() {
            if (!this._config.parent) return;
            const t = Te.find(Ve, this._config.parent);
            Te.find(Ke, this._config.parent)
              .filter((e) => !t.includes(e))
              .forEach((t) => {
                const e = Mt(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e));
              });
          }
          _addAriaAndCollapsedClass(t, e) {
            t.length &&
              t.forEach((t) => {
                e ? t.classList.remove(Ue) : t.classList.add(Ue),
                  t.setAttribute("aria-expanded", e);
              });
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = {};
              "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
              const i = Xe.getOrCreateInstance(this, e);
              if ("string" == typeof t) {
                if (void 0 === i[t])
                  throw new TypeError(`No method named "${t}"`);
                i[t]();
              }
            });
          }
        }
        pe.on(document, "click.bs.collapse.data-api", Ke, function (t) {
          ("A" === t.target.tagName ||
            (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
            t.preventDefault();
          const e = jt(this);
          Te.find(e).forEach((t) => {
            Xe.getOrCreateInstance(t, { toggle: !1 }).toggle();
          });
        }),
          Yt(Xe);
        const Ye = "dropdown",
          Qe = "Escape",
          Ge = "Space",
          Ze = "ArrowUp",
          Je = "ArrowDown",
          ti = new RegExp("ArrowUp|ArrowDown|Escape"),
          ei = "click.bs.dropdown.data-api",
          ii = "keydown.bs.dropdown.data-api",
          ni = "show",
          si = '[data-bs-toggle="dropdown"]',
          oi = ".dropdown-menu",
          ri = Xt() ? "top-end" : "top-start",
          ai = Xt() ? "top-start" : "top-end",
          li = Xt() ? "bottom-end" : "bottom-start",
          ci = Xt() ? "bottom-start" : "bottom-end",
          hi = Xt() ? "left-start" : "right-start",
          di = Xt() ? "right-start" : "left-start",
          ui = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0,
          },
          fi = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)",
          };
        class pi extends _e {
          constructor(t, e) {
            super(t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar());
          }
          static get Default() {
            return ui;
          }
          static get DefaultType() {
            return fi;
          }
          static get NAME() {
            return Ye;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (zt(this._element) || this._isShown(this._menu)) return;
            const t = { relatedTarget: this._element };
            if (
              pe.trigger(this._element, "show.bs.dropdown", t).defaultPrevented
            )
              return;
            const e = pi.getParentFromElement(this._element);
            this._inNavbar
              ? Oe.setDataAttribute(this._menu, "popper", "none")
              : this._createPopper(e),
              "ontouchstart" in document.documentElement &&
                !e.closest(".navbar-nav") &&
                []
                  .concat(...document.body.children)
                  .forEach((t) => pe.on(t, "mouseover", Ft)),
              this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(ni),
              this._element.classList.add(ni),
              pe.trigger(this._element, "shown.bs.dropdown", t);
          }
          hide() {
            if (zt(this._element) || !this._isShown(this._menu)) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            (this._inNavbar = this._detectNavbar()),
              this._popper && this._popper.update();
          }
          _completeHide(t) {
            pe.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
              ("ontouchstart" in document.documentElement &&
                []
                  .concat(...document.body.children)
                  .forEach((t) => pe.off(t, "mouseover", Ft)),
              this._popper && this._popper.destroy(),
              this._menu.classList.remove(ni),
              this._element.classList.remove(ni),
              this._element.setAttribute("aria-expanded", "false"),
              Oe.removeDataAttribute(this._menu, "popper"),
              pe.trigger(this._element, "hidden.bs.dropdown", t));
          }
          _getConfig(t) {
            if (
              ((t = {
                ...this.constructor.Default,
                ...Oe.getDataAttributes(this._element),
                ...t,
              }),
              Wt(Ye, t, this.constructor.DefaultType),
              "object" == typeof t.reference &&
                !Bt(t.reference) &&
                "function" != typeof t.reference.getBoundingClientRect)
            )
              throw new TypeError(
                `${Ye.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
              );
            return t;
          }
          _createPopper(t) {
            if (void 0 === n)
              throw new TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
              );
            let e = this._element;
            "parent" === this._config.reference
              ? (e = t)
              : Bt(this._config.reference)
              ? (e = Rt(this._config.reference))
              : "object" == typeof this._config.reference &&
                (e = this._config.reference);
            const i = this._getPopperConfig(),
              s = i.modifiers.find(
                (t) => "applyStyles" === t.name && !1 === t.enabled
              );
            (this._popper = Dt(e, this._menu, i)),
              s && Oe.setDataAttribute(this._menu, "popper", "static");
          }
          _isShown(t = this._element) {
            return t.classList.contains(ni);
          }
          _getMenuElement() {
            return Te.next(this._element, oi)[0];
          }
          _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return hi;
            if (t.classList.contains("dropstart")) return di;
            const e =
              "end" ===
              getComputedStyle(this._menu)
                .getPropertyValue("--bs-position")
                .trim();
            return t.classList.contains("dropup") ? (e ? ai : ri) : e ? ci : li;
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar");
          }
          _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
              ? t.split(",").map((t) => Number.parseInt(t, 10))
              : "function" == typeof t
              ? (e) => t(e, this._element)
              : t;
          }
          _getPopperConfig() {
            const t = {
              placement: this._getPlacement(),
              modifiers: [
                {
                  name: "preventOverflow",
                  options: { boundary: this._config.boundary },
                },
                { name: "offset", options: { offset: this._getOffset() } },
              ],
            };
            return (
              "static" === this._config.display &&
                (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
              {
                ...t,
                ...("function" == typeof this._config.popperConfig
                  ? this._config.popperConfig(t)
                  : this._config.popperConfig),
              }
            );
          }
          _selectMenuItem({ key: t, target: e }) {
            const i = Te.find(
              ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
              this._menu
            ).filter($t);
            i.length && Zt(i, e, t === Je, !i.includes(e)).focus();
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = pi.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                if (void 0 === e[t])
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            });
          }
          static clearMenus(t) {
            if (
              t &&
              (2 === t.button || ("keyup" === t.type && "Tab" !== t.key))
            )
              return;
            const e = Te.find(si);
            for (let i = 0, n = e.length; i < n; i++) {
              const n = pi.getInstance(e[i]);
              if (!n || !1 === n._config.autoClose) continue;
              if (!n._isShown()) continue;
              const s = { relatedTarget: n._element };
              if (t) {
                const e = t.composedPath(),
                  i = e.includes(n._menu);
                if (
                  e.includes(n._element) ||
                  ("inside" === n._config.autoClose && !i) ||
                  ("outside" === n._config.autoClose && i)
                )
                  continue;
                if (
                  n._menu.contains(t.target) &&
                  (("keyup" === t.type && "Tab" === t.key) ||
                    /input|select|option|textarea|form/i.test(t.target.tagName))
                )
                  continue;
                "click" === t.type && (s.clickEvent = t);
              }
              n._completeHide(s);
            }
          }
          static getParentFromElement(t) {
            return Mt(t) || t.parentNode;
          }
          static dataApiKeydownHandler(t) {
            if (
              /input|textarea/i.test(t.target.tagName)
                ? t.key === Ge ||
                  (t.key !== Qe &&
                    ((t.key !== Je && t.key !== Ze) || t.target.closest(oi)))
                : !ti.test(t.key)
            )
              return;
            const e = this.classList.contains(ni);
            if (!e && t.key === Qe) return;
            if ((t.preventDefault(), t.stopPropagation(), zt(this))) return;
            const i = this.matches(si) ? this : Te.prev(this, si)[0],
              n = pi.getOrCreateInstance(i);
            if (t.key !== Qe)
              return t.key === Ze || t.key === Je
                ? (e || n.show(), void n._selectMenuItem(t))
                : void ((e && t.key !== Ge) || pi.clearMenus());
            n.hide();
          }
        }
        pe.on(document, ii, si, pi.dataApiKeydownHandler),
          pe.on(document, ii, oi, pi.dataApiKeydownHandler),
          pe.on(document, ei, pi.clearMenus),
          pe.on(document, "keyup.bs.dropdown.data-api", pi.clearMenus),
          pe.on(document, ei, si, function (t) {
            t.preventDefault(), pi.getOrCreateInstance(this).toggle();
          }),
          Yt(pi);
        const mi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          gi = ".sticky-top";
        class _i {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
          }
          hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
              this._setElementAttributes(
                this._element,
                "paddingRight",
                (e) => e + t
              ),
              this._setElementAttributes(mi, "paddingRight", (e) => e + t),
              this._setElementAttributes(gi, "marginRight", (e) => e - t);
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
              (this._element.style.overflow = "hidden");
          }
          _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
              if (t !== this._element && window.innerWidth > t.clientWidth + n)
                return;
              this._saveInitialAttribute(t, e);
              const s = window.getComputedStyle(t)[e];
              t.style[e] = `${i(Number.parseFloat(s))}px`;
            });
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"),
              this._resetElementAttributes(this._element, "paddingRight"),
              this._resetElementAttributes(mi, "paddingRight"),
              this._resetElementAttributes(gi, "marginRight");
          }
          _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && Oe.setDataAttribute(t, e, i);
          }
          _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
              const i = Oe.getDataAttribute(t, e);
              void 0 === i
                ? t.style.removeProperty(e)
                : (Oe.removeDataAttribute(t, e), (t.style[e] = i));
            });
          }
          _applyManipulationCallback(t, e) {
            Bt(t) ? e(t) : Te.find(t, this._element).forEach(e);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
        }
        const bi = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null,
          },
          vi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)",
          },
          yi = "backdrop",
          wi = "show",
          Ei = "mousedown.bs.backdrop";
        class Ai {
          constructor(t) {
            (this._config = this._getConfig(t)),
              (this._isAppended = !1),
              (this._element = null);
          }
          show(t) {
            this._config.isVisible
              ? (this._append(),
                this._config.isAnimated && Ut(this._getElement()),
                this._getElement().classList.add(wi),
                this._emulateAnimation(() => {
                  Qt(t);
                }))
              : Qt(t);
          }
          hide(t) {
            this._config.isVisible
              ? (this._getElement().classList.remove(wi),
                this._emulateAnimation(() => {
                  this.dispose(), Qt(t);
                }))
              : Qt(t);
          }
          _getElement() {
            if (!this._element) {
              const t = document.createElement("div");
              (t.className = this._config.className),
                this._config.isAnimated && t.classList.add("fade"),
                (this._element = t);
            }
            return this._element;
          }
          _getConfig(t) {
            return (
              ((t = { ...bi, ...("object" == typeof t ? t : {}) }).rootElement =
                Rt(t.rootElement)),
              Wt(yi, t, vi),
              t
            );
          }
          _append() {
            this._isAppended ||
              (this._config.rootElement.append(this._getElement()),
              pe.on(this._getElement(), Ei, () => {
                Qt(this._config.clickCallback);
              }),
              (this._isAppended = !0));
          }
          dispose() {
            this._isAppended &&
              (pe.off(this._element, Ei),
              this._element.remove(),
              (this._isAppended = !1));
          }
          _emulateAnimation(t) {
            Gt(t, this._getElement(), this._config.isAnimated);
          }
        }
        const Oi = { trapElement: null, autofocus: !0 },
          Ti = { trapElement: "element", autofocus: "boolean" },
          Ci = ".bs.focustrap",
          xi = "backward";
        class ki {
          constructor(t) {
            (this._config = this._getConfig(t)),
              (this._isActive = !1),
              (this._lastTabNavDirection = null);
          }
          activate() {
            const { trapElement: t, autofocus: e } = this._config;
            this._isActive ||
              (e && t.focus(),
              pe.off(document, Ci),
              pe.on(document, "focusin.bs.focustrap", (t) =>
                this._handleFocusin(t)
              ),
              pe.on(document, "keydown.tab.bs.focustrap", (t) =>
                this._handleKeydown(t)
              ),
              (this._isActive = !0));
          }
          deactivate() {
            this._isActive && ((this._isActive = !1), pe.off(document, Ci));
          }
          _handleFocusin(t) {
            const { target: e } = t,
              { trapElement: i } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = Te.focusableChildren(i);
            0 === n.length
              ? i.focus()
              : this._lastTabNavDirection === xi
              ? n[n.length - 1].focus()
              : n[0].focus();
          }
          _handleKeydown(t) {
            "Tab" === t.key &&
              (this._lastTabNavDirection = t.shiftKey ? xi : "forward");
          }
          _getConfig(t) {
            return (
              (t = { ...Oi, ...("object" == typeof t ? t : {}) }),
              Wt("focustrap", t, Ti),
              t
            );
          }
        }
        const Li = "modal",
          Si = ".bs.modal",
          Di = "Escape",
          Ni = { backdrop: !0, keyboard: !0, focus: !0 },
          Ii = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
          },
          Pi = "hidden.bs.modal",
          ji = "show.bs.modal",
          Mi = "resize.bs.modal",
          Hi = "click.dismiss.bs.modal",
          Bi = "keydown.dismiss.bs.modal",
          Ri = "mousedown.dismiss.bs.modal",
          Wi = "modal-open",
          $i = "show",
          zi = "modal-static";
        class qi extends _e {
          constructor(t, e) {
            super(t),
              (this._config = this._getConfig(e)),
              (this._dialog = Te.findOne(".modal-dialog", this._element)),
              (this._backdrop = this._initializeBackDrop()),
              (this._focustrap = this._initializeFocusTrap()),
              (this._isShown = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollBar = new _i());
          }
          static get Default() {
            return Ni;
          }
          static get NAME() {
            return Li;
          }
          toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
          }
          show(t) {
            if (this._isShown || this._isTransitioning) return;
            pe.trigger(this._element, ji, { relatedTarget: t })
              .defaultPrevented ||
              ((this._isShown = !0),
              this._isAnimated() && (this._isTransitioning = !0),
              this._scrollBar.hide(),
              document.body.classList.add(Wi),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              pe.on(this._dialog, Ri, () => {
                pe.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
                  t.target === this._element &&
                    (this._ignoreBackdropClick = !0);
                });
              }),
              this._showBackdrop(() => this._showElement(t)));
          }
          hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (pe.trigger(this._element, "hide.bs.modal").defaultPrevented)
              return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              this._focustrap.deactivate(),
              this._element.classList.remove($i),
              pe.off(this._element, Hi),
              pe.off(this._dialog, Ri),
              this._queueCallback(() => this._hideModal(), this._element, t);
          }
          dispose() {
            [window, this._dialog].forEach((t) => pe.off(t, Si)),
              this._backdrop.dispose(),
              this._focustrap.deactivate(),
              super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new Ai({
              isVisible: Boolean(this._config.backdrop),
              isAnimated: this._isAnimated(),
            });
          }
          _initializeFocusTrap() {
            return new ki({ trapElement: this._element });
          }
          _getConfig(t) {
            return (
              (t = {
                ...Ni,
                ...Oe.getDataAttributes(this._element),
                ...("object" == typeof t ? t : {}),
              }),
              Wt(Li, t, Ii),
              t
            );
          }
          _showElement(t) {
            const e = this._isAnimated(),
              i = Te.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.append(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              (this._element.scrollTop = 0),
              i && (i.scrollTop = 0),
              e && Ut(this._element),
              this._element.classList.add($i);
            this._queueCallback(
              () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  pe.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t,
                  });
              },
              this._dialog,
              e
            );
          }
          _setEscapeEvent() {
            this._isShown
              ? pe.on(this._element, Bi, (t) => {
                  this._config.keyboard && t.key === Di
                    ? (t.preventDefault(), this.hide())
                    : this._config.keyboard ||
                      t.key !== Di ||
                      this._triggerBackdropTransition();
                })
              : pe.off(this._element, Bi);
          }
          _setResizeEvent() {
            this._isShown
              ? pe.on(window, Mi, () => this._adjustDialog())
              : pe.off(window, Mi);
          }
          _hideModal() {
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._backdrop.hide(() => {
                document.body.classList.remove(Wi),
                  this._resetAdjustments(),
                  this._scrollBar.reset(),
                  pe.trigger(this._element, Pi);
              });
          }
          _showBackdrop(t) {
            pe.on(this._element, Hi, (t) => {
              this._ignoreBackdropClick
                ? (this._ignoreBackdropClick = !1)
                : t.target === t.currentTarget &&
                  (!0 === this._config.backdrop
                    ? this.hide()
                    : "static" === this._config.backdrop &&
                      this._triggerBackdropTransition());
            }),
              this._backdrop.show(t);
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (
              pe.trigger(this._element, "hidePrevented.bs.modal")
                .defaultPrevented
            )
              return;
            const { classList: t, scrollHeight: e, style: i } = this._element,
              n = e > document.documentElement.clientHeight;
            (!n && "hidden" === i.overflowY) ||
              t.contains(zi) ||
              (n || (i.overflowY = "hidden"),
              t.add(zi),
              this._queueCallback(() => {
                t.remove(zi),
                  n ||
                    this._queueCallback(() => {
                      i.overflowY = "";
                    }, this._dialog);
              }, this._dialog),
              this._element.focus());
          }
          _adjustDialog() {
            const t =
                this._element.scrollHeight >
                document.documentElement.clientHeight,
              e = this._scrollBar.getWidth(),
              i = e > 0;
            ((!i && t && !Xt()) || (i && !t && Xt())) &&
              (this._element.style.paddingLeft = `${e}px`),
              ((i && !t && !Xt()) || (!i && t && Xt())) &&
                (this._element.style.paddingRight = `${e}px`);
          }
          _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }
          static jQueryInterface(t, e) {
            return this.each(function () {
              const i = qi.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                if (void 0 === i[t])
                  throw new TypeError(`No method named "${t}"`);
                i[t](e);
              }
            });
          }
        }
        pe.on(
          document,
          "click.bs.modal.data-api",
          '[data-bs-toggle="modal"]',
          function (t) {
            const e = Mt(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              pe.one(e, ji, (t) => {
                t.defaultPrevented ||
                  pe.one(e, Pi, () => {
                    $t(this) && this.focus();
                  });
              });
            const i = Te.findOne(".modal.show");
            i && qi.getInstance(i).hide();
            qi.getOrCreateInstance(e).toggle(this);
          }
        ),
          be(qi),
          Yt(qi);
        const Fi = "offcanvas",
          Ui = { backdrop: !0, keyboard: !0, scroll: !1 },
          Vi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
          Ki = "show",
          Xi = ".offcanvas.show",
          Yi = "hidden.bs.offcanvas";
        class Qi extends _e {
          constructor(t, e) {
            super(t),
              (this._config = this._getConfig(e)),
              (this._isShown = !1),
              (this._backdrop = this._initializeBackDrop()),
              (this._focustrap = this._initializeFocusTrap()),
              this._addEventListeners();
          }
          static get NAME() {
            return Fi;
          }
          static get Default() {
            return Ui;
          }
          toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
          }
          show(t) {
            if (this._isShown) return;
            if (
              pe.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t,
              }).defaultPrevented
            )
              return;
            (this._isShown = !0),
              (this._element.style.visibility = "visible"),
              this._backdrop.show(),
              this._config.scroll || new _i().hide(),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              this._element.classList.add(Ki);
            this._queueCallback(
              () => {
                this._config.scroll || this._focustrap.activate(),
                  pe.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t,
                  });
              },
              this._element,
              !0
            );
          }
          hide() {
            if (!this._isShown) return;
            if (pe.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
              return;
            this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.remove(Ki),
              this._backdrop.hide();
            this._queueCallback(
              () => {
                this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  (this._element.style.visibility = "hidden"),
                  this._config.scroll || new _i().reset(),
                  pe.trigger(this._element, Yi);
              },
              this._element,
              !0
            );
          }
          dispose() {
            this._backdrop.dispose(),
              this._focustrap.deactivate(),
              super.dispose();
          }
          _getConfig(t) {
            return (
              (t = {
                ...Ui,
                ...Oe.getDataAttributes(this._element),
                ...("object" == typeof t ? t : {}),
              }),
              Wt(Fi, t, Vi),
              t
            );
          }
          _initializeBackDrop() {
            return new Ai({
              className: "offcanvas-backdrop",
              isVisible: this._config.backdrop,
              isAnimated: !0,
              rootElement: this._element.parentNode,
              clickCallback: () => this.hide(),
            });
          }
          _initializeFocusTrap() {
            return new ki({ trapElement: this._element });
          }
          _addEventListeners() {
            pe.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
              this._config.keyboard && "Escape" === t.key && this.hide();
            });
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = Qi.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                  throw new TypeError(`No method named "${t}"`);
                e[t](this);
              }
            });
          }
        }
        pe.on(
          document,
          "click.bs.offcanvas.data-api",
          '[data-bs-toggle="offcanvas"]',
          function (t) {
            const e = Mt(this);
            if (
              (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              zt(this))
            )
              return;
            pe.one(e, Yi, () => {
              $t(this) && this.focus();
            });
            const i = Te.findOne(Xi);
            i && i !== e && Qi.getInstance(i).hide();
            Qi.getOrCreateInstance(e).toggle(this);
          }
        ),
          pe.on(window, "load.bs.offcanvas.data-api", () =>
            Te.find(Xi).forEach((t) => Qi.getOrCreateInstance(t).show())
          ),
          be(Qi),
          Yt(Qi);
        const Gi = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
          ]),
          Zi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
          Ji =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
          tn = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i))
              return (
                !Gi.has(i) ||
                Boolean(Zi.test(t.nodeValue) || Ji.test(t.nodeValue))
              );
            const n = e.filter((t) => t instanceof RegExp);
            for (let t = 0, e = n.length; t < e; t++)
              if (n[t].test(i)) return !0;
            return !1;
          },
          en = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
          };
        function nn(t, e, i) {
          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);
          const n = new window.DOMParser().parseFromString(t, "text/html"),
            s = [].concat(...n.body.querySelectorAll("*"));
          for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t],
              n = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
              i.remove();
              continue;
            }
            const o = [].concat(...i.attributes),
              r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t) => {
              tn(t, r) || i.removeAttribute(t.nodeName);
            });
          }
          return n.body.innerHTML;
        }
        const sn = "tooltip",
          on = new Set(["sanitize", "allowList", "sanitizeFn"]),
          rn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
          },
          an = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: Xt() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: Xt() ? "right" : "left",
          },
          ln = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: en,
            popperConfig: null,
          },
          cn = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
          },
          hn = "fade",
          dn = "show",
          un = "show",
          fn = "out",
          pn = ".tooltip-inner",
          mn = ".modal",
          gn = "hide.bs.modal",
          _n = "hover",
          bn = "focus";
        class vn extends _e {
          constructor(t, e) {
            if (void 0 === n)
              throw new TypeError(
                "Bootstrap's tooltips require Popper (https://popper.js.org)"
              );
            super(t),
              (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          static get Default() {
            return ln;
          }
          static get NAME() {
            return sn;
          }
          static get Event() {
            return cn;
          }
          static get DefaultType() {
            return rn;
          }
          enable() {
            this._isEnabled = !0;
          }
          disable() {
            this._isEnabled = !1;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle(t) {
            if (this._isEnabled)
              if (t) {
                const e = this._initializeOnDelegatedTarget(t);
                (e._activeTrigger.click = !e._activeTrigger.click),
                  e._isWithActiveTrigger()
                    ? e._enter(null, e)
                    : e._leave(null, e);
              } else {
                if (this.getTipElement().classList.contains(dn))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }
          dispose() {
            clearTimeout(this._timeout),
              pe.off(this._element.closest(mn), gn, this._hideModalHandler),
              this.tip && this.tip.remove(),
              this._disposePopper(),
              super.dispose();
          }
          show() {
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = pe.trigger(this._element, this.constructor.Event.SHOW),
              e = qt(this._element),
              i =
                null === e
                  ? this._element.ownerDocument.documentElement.contains(
                      this._element
                    )
                  : e.contains(this._element);
            if (t.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME &&
              this.tip &&
              this.getTitle() !== this.tip.querySelector(pn).innerHTML &&
              (this._disposePopper(), this.tip.remove(), (this.tip = null));
            const n = this.getTipElement(),
              s = ((t) => {
                do {
                  t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
              })(this.constructor.NAME);
            n.setAttribute("id", s),
              this._element.setAttribute("aria-describedby", s),
              this._config.animation && n.classList.add(hn);
            const o =
                "function" == typeof this._config.placement
                  ? this._config.placement.call(this, n, this._element)
                  : this._config.placement,
              r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const { container: a } = this._config;
            ge.set(n, this.constructor.DATA_KEY, this),
              this._element.ownerDocument.documentElement.contains(this.tip) ||
                (a.append(n),
                pe.trigger(this._element, this.constructor.Event.INSERTED)),
              this._popper
                ? this._popper.update()
                : (this._popper = Dt(
                    this._element,
                    n,
                    this._getPopperConfig(r)
                  )),
              n.classList.add(dn);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")),
              "ontouchstart" in document.documentElement &&
                [].concat(...document.body.children).forEach((t) => {
                  pe.on(t, "mouseover", Ft);
                });
            const c = this.tip.classList.contains(hn);
            this._queueCallback(
              () => {
                const t = this._hoverState;
                (this._hoverState = null),
                  pe.trigger(this._element, this.constructor.Event.SHOWN),
                  t === fn && this._leave(null, this);
              },
              this.tip,
              c
            );
          }
          hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (
              pe.trigger(this._element, this.constructor.Event.HIDE)
                .defaultPrevented
            )
              return;
            t.classList.remove(dn),
              "ontouchstart" in document.documentElement &&
                []
                  .concat(...document.body.children)
                  .forEach((t) => pe.off(t, "mouseover", Ft)),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1);
            const e = this.tip.classList.contains(hn);
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._hoverState !== un && t.remove(),
                  this._cleanTipClass(),
                  this._element.removeAttribute("aria-describedby"),
                  pe.trigger(this._element, this.constructor.Event.HIDDEN),
                  this._disposePopper());
              },
              this.tip,
              e
            ),
              (this._hoverState = "");
          }
          update() {
            null !== this._popper && this._popper.update();
          }
          isWithContent() {
            return Boolean(this.getTitle());
          }
          getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return (
              this.setContent(e),
              e.classList.remove(hn, dn),
              (this.tip = e),
              this.tip
            );
          }
          setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), pn);
          }
          _sanitizeAndSetContent(t, e, i) {
            const n = Te.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove();
          }
          setElementContent(t, e) {
            if (null !== t)
              return Bt(e)
                ? ((e = Rt(e)),
                  void (this._config.html
                    ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
                    : (t.textContent = e.textContent)))
                : void (this._config.html
                    ? (this._config.sanitize &&
                        (e = nn(
                          e,
                          this._config.allowList,
                          this._config.sanitizeFn
                        )),
                      (t.innerHTML = e))
                    : (t.textContent = e));
          }
          getTitle() {
            const t =
              this._element.getAttribute("data-bs-original-title") ||
              this._config.title;
            return this._resolvePossibleFunction(t);
          }
          updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
          }
          _initializeOnDelegatedTarget(t, e) {
            return (
              e ||
              this.constructor.getOrCreateInstance(
                t.delegateTarget,
                this._getDelegateConfig()
              )
            );
          }
          _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
              ? t.split(",").map((t) => Number.parseInt(t, 10))
              : "function" == typeof t
              ? (e) => t(e, this._element)
              : t;
          }
          _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
          }
          _getPopperConfig(t) {
            const e = {
              placement: t,
              modifiers: [
                {
                  name: "flip",
                  options: {
                    fallbackPlacements: this._config.fallbackPlacements,
                  },
                },
                { name: "offset", options: { offset: this._getOffset() } },
                {
                  name: "preventOverflow",
                  options: { boundary: this._config.boundary },
                },
                {
                  name: "arrow",
                  options: { element: `.${this.constructor.NAME}-arrow` },
                },
                {
                  name: "onChange",
                  enabled: !0,
                  phase: "afterWrite",
                  fn: (t) => this._handlePopperPlacementChange(t),
                },
              ],
              onFirstUpdate: (t) => {
                t.options.placement !== t.placement &&
                  this._handlePopperPlacementChange(t);
              },
            };
            return {
              ...e,
              ...("function" == typeof this._config.popperConfig
                ? this._config.popperConfig(e)
                : this._config.popperConfig),
            };
          }
          _addAttachmentClass(t) {
            this.getTipElement().classList.add(
              `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
            );
          }
          _getAttachment(t) {
            return an[t.toUpperCase()];
          }
          _setListeners() {
            this._config.trigger.split(" ").forEach((t) => {
              if ("click" === t)
                pe.on(
                  this._element,
                  this.constructor.Event.CLICK,
                  this._config.selector,
                  (t) => this.toggle(t)
                );
              else if ("manual" !== t) {
                const e =
                    t === _n
                      ? this.constructor.Event.MOUSEENTER
                      : this.constructor.Event.FOCUSIN,
                  i =
                    t === _n
                      ? this.constructor.Event.MOUSELEAVE
                      : this.constructor.Event.FOCUSOUT;
                pe.on(this._element, e, this._config.selector, (t) =>
                  this._enter(t)
                ),
                  pe.on(this._element, i, this._config.selector, (t) =>
                    this._leave(t)
                  );
              }
            }),
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
              pe.on(this._element.closest(mn), gn, this._hideModalHandler),
              this._config.selector
                ? (this._config = {
                    ...this._config,
                    trigger: "manual",
                    selector: "",
                  })
                : this._fixTitle();
          }
          _fixTitle() {
            const t = this._element.getAttribute("title"),
              e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) &&
              (this._element.setAttribute("data-bs-original-title", t || ""),
              !t ||
                this._element.getAttribute("aria-label") ||
                this._element.textContent ||
                this._element.setAttribute("aria-label", t),
              this._element.setAttribute("title", ""));
          }
          _enter(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
              t && (e._activeTrigger["focusin" === t.type ? bn : _n] = !0),
              e.getTipElement().classList.contains(dn) || e._hoverState === un
                ? (e._hoverState = un)
                : (clearTimeout(e._timeout),
                  (e._hoverState = un),
                  e._config.delay && e._config.delay.show
                    ? (e._timeout = setTimeout(() => {
                        e._hoverState === un && e.show();
                      }, e._config.delay.show))
                    : e.show());
          }
          _leave(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
              t &&
                (e._activeTrigger["focusout" === t.type ? bn : _n] =
                  e._element.contains(t.relatedTarget)),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = fn),
                e._config.delay && e._config.delay.hide
                  ? (e._timeout = setTimeout(() => {
                      e._hoverState === fn && e.hide();
                    }, e._config.delay.hide))
                  : e.hide());
          }
          _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }
          _getConfig(t) {
            const e = Oe.getDataAttributes(this._element);
            return (
              Object.keys(e).forEach((t) => {
                on.has(t) && delete e[t];
              }),
              ((t = {
                ...this.constructor.Default,
                ...e,
                ...("object" == typeof t && t ? t : {}),
              }).container =
                !1 === t.container ? document.body : Rt(t.container)),
              "number" == typeof t.delay &&
                (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              Wt(sn, t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = nn(t.template, t.allowList, t.sanitizeFn)),
              t
            );
          }
          _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
              this.constructor.Default[e] !== this._config[e] &&
                (t[e] = this._config[e]);
            return t;
          }
          _cleanTipClass() {
            const t = this.getTipElement(),
              e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
              i = t.getAttribute("class").match(e);
            null !== i &&
              i.length > 0 &&
              i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
          }
          _getBasicClassPrefix() {
            return "bs-tooltip";
          }
          _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e &&
              ((this.tip = e.elements.popper),
              this._cleanTipClass(),
              this._addAttachmentClass(this._getAttachment(e.placement)));
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = vn.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                if (void 0 === e[t])
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            });
          }
        }
        Yt(vn);
        const yn = {
            ...vn.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          },
          wn = { ...vn.DefaultType, content: "(string|element|function)" },
          En = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
          };
        class An extends vn {
          static get Default() {
            return yn;
          }
          static get NAME() {
            return "popover";
          }
          static get Event() {
            return En;
          }
          static get DefaultType() {
            return wn;
          }
          isWithContent() {
            return this.getTitle() || this._getContent();
          }
          setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
              this._sanitizeAndSetContent(
                t,
                this._getContent(),
                ".popover-body"
              );
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          _getBasicClassPrefix() {
            return "bs-popover";
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = An.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                if (void 0 === e[t])
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            });
          }
        }
        Yt(An);
        const On = "scrollspy",
          Tn = ".bs.scrollspy",
          Cn = { offset: 10, method: "auto", target: "" },
          xn = {
            offset: "number",
            method: "string",
            target: "(string|element)",
          },
          kn = "dropdown-item",
          Ln = "active",
          Sn = ".nav-link",
          Dn = ".nav-link, .list-group-item, .dropdown-item",
          Nn = "position";
        class In extends _e {
          constructor(t, e) {
            super(t),
              (this._scrollElement =
                "BODY" === this._element.tagName ? window : this._element),
              (this._config = this._getConfig(e)),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              pe.on(this._scrollElement, "scroll.bs.scrollspy", () =>
                this._process()
              ),
              this.refresh(),
              this._process();
          }
          static get Default() {
            return Cn;
          }
          static get NAME() {
            return On;
          }
          refresh() {
            const t =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : Nn,
              e = "auto" === this._config.method ? t : this._config.method,
              i = e === Nn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight());
            Te.find(Dn, this._config.target)
              .map((t) => {
                const n = jt(t),
                  s = n ? Te.findOne(n) : null;
                if (s) {
                  const t = s.getBoundingClientRect();
                  if (t.width || t.height) return [Oe[e](s).top + i, n];
                }
                return null;
              })
              .filter((t) => t)
              .sort((t, e) => t[0] - e[0])
              .forEach((t) => {
                this._offsets.push(t[0]), this._targets.push(t[1]);
              });
          }
          dispose() {
            pe.off(this._scrollElement, Tn), super.dispose();
          }
          _getConfig(t) {
            return (
              ((t = {
                ...Cn,
                ...Oe.getDataAttributes(this._element),
                ...("object" == typeof t && t ? t : {}),
              }).target = Rt(t.target) || document.documentElement),
              Wt(On, t, xn),
              t
            );
          }
          _getScrollTop() {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }
          _getScrollHeight() {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }
          _getOffsetHeight() {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }
          _process() {
            const t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
              const t = this._targets[this._targets.length - 1];
              this._activeTarget !== t && this._activate(t);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (let e = this._offsets.length; e--; ) {
                this._activeTarget !== this._targets[e] &&
                  t >= this._offsets[e] &&
                  (void 0 === this._offsets[e + 1] ||
                    t < this._offsets[e + 1]) &&
                  this._activate(this._targets[e]);
              }
            }
          }
          _activate(t) {
            (this._activeTarget = t), this._clear();
            const e = Dn.split(",").map(
                (e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
              ),
              i = Te.findOne(e.join(","), this._config.target);
            i.classList.add(Ln),
              i.classList.contains(kn)
                ? Te.findOne(
                    ".dropdown-toggle",
                    i.closest(".dropdown")
                  ).classList.add(Ln)
                : Te.parents(i, ".nav, .list-group").forEach((t) => {
                    Te.prev(t, ".nav-link, .list-group-item").forEach((t) =>
                      t.classList.add(Ln)
                    ),
                      Te.prev(t, ".nav-item").forEach((t) => {
                        Te.children(t, Sn).forEach((t) => t.classList.add(Ln));
                      });
                  }),
              pe.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t,
              });
          }
          _clear() {
            Te.find(Dn, this._config.target)
              .filter((t) => t.classList.contains(Ln))
              .forEach((t) => t.classList.remove(Ln));
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = In.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                if (void 0 === e[t])
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            });
          }
        }
        pe.on(window, "load.bs.scrollspy.data-api", () => {
          Te.find('[data-bs-spy="scroll"]').forEach((t) => new In(t));
        }),
          Yt(In);
        const Pn = "active",
          jn = "fade",
          Mn = "show",
          Hn = ".active",
          Bn = ":scope > li > .active";
        class Rn extends _e {
          static get NAME() {
            return "tab";
          }
          show() {
            if (
              this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              this._element.classList.contains(Pn)
            )
              return;
            let t;
            const e = Mt(this._element),
              i = this._element.closest(".nav, .list-group");
            if (i) {
              const e = "UL" === i.nodeName || "OL" === i.nodeName ? Bn : Hn;
              (t = Te.find(e, i)), (t = t[t.length - 1]);
            }
            const n = t
              ? pe.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
              : null;
            if (
              pe.trigger(this._element, "show.bs.tab", { relatedTarget: t })
                .defaultPrevented ||
              (null !== n && n.defaultPrevented)
            )
              return;
            this._activate(this._element, i);
            const s = () => {
              pe.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
                pe.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
            };
            e ? this._activate(e, e.parentNode, s) : s();
          }
          _activate(t, e, i) {
            const n = (
                !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                  ? Te.children(e, Hn)
                  : Te.find(Bn, e)
              )[0],
              s = i && n && n.classList.contains(jn),
              o = () => this._transitionComplete(t, n, i);
            n && s
              ? (n.classList.remove(Mn), this._queueCallback(o, t, !0))
              : o();
          }
          _transitionComplete(t, e, i) {
            if (e) {
              e.classList.remove(Pn);
              const t = Te.findOne(
                ":scope > .dropdown-menu .active",
                e.parentNode
              );
              t && t.classList.remove(Pn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            t.classList.add(Pn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              Ut(t),
              t.classList.contains(jn) && t.classList.add(Mn);
            let n = t.parentNode;
            if (
              (n && "LI" === n.nodeName && (n = n.parentNode),
              n && n.classList.contains("dropdown-menu"))
            ) {
              const e = t.closest(".dropdown");
              e &&
                Te.find(".dropdown-toggle", e).forEach((t) =>
                  t.classList.add(Pn)
                ),
                t.setAttribute("aria-expanded", !0);
            }
            i && i();
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = Rn.getOrCreateInstance(this);
              if ("string" == typeof t) {
                if (void 0 === e[t])
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            });
          }
        }
        pe.on(
          document,
          "click.bs.tab.data-api",
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
          function (t) {
            if (
              (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              zt(this))
            )
              return;
            Rn.getOrCreateInstance(this).show();
          }
        ),
          Yt(Rn);
        const Wn = "toast",
          $n = "hide",
          zn = "show",
          qn = "showing",
          Fn = { animation: "boolean", autohide: "boolean", delay: "number" },
          Un = { animation: !0, autohide: !0, delay: 5e3 };
        class Vn extends _e {
          constructor(t, e) {
            super(t),
              (this._config = this._getConfig(e)),
              (this._timeout = null),
              (this._hasMouseInteraction = !1),
              (this._hasKeyboardInteraction = !1),
              this._setListeners();
          }
          static get DefaultType() {
            return Fn;
          }
          static get Default() {
            return Un;
          }
          static get NAME() {
            return Wn;
          }
          show() {
            if (pe.trigger(this._element, "show.bs.toast").defaultPrevented)
              return;
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove($n),
              Ut(this._element),
              this._element.classList.add(zn),
              this._element.classList.add(qn),
              this._queueCallback(
                () => {
                  this._element.classList.remove(qn),
                    pe.trigger(this._element, "shown.bs.toast"),
                    this._maybeScheduleHide();
                },
                this._element,
                this._config.animation
              );
          }
          hide() {
            if (!this._element.classList.contains(zn)) return;
            if (pe.trigger(this._element, "hide.bs.toast").defaultPrevented)
              return;
            this._element.classList.add(qn),
              this._queueCallback(
                () => {
                  this._element.classList.add($n),
                    this._element.classList.remove(qn),
                    this._element.classList.remove(zn),
                    pe.trigger(this._element, "hidden.bs.toast");
                },
                this._element,
                this._config.animation
              );
          }
          dispose() {
            this._clearTimeout(),
              this._element.classList.contains(zn) &&
                this._element.classList.remove(zn),
              super.dispose();
          }
          _getConfig(t) {
            return (
              (t = {
                ...Un,
                ...Oe.getDataAttributes(this._element),
                ...("object" == typeof t && t ? t : {}),
              }),
              Wt(Wn, t, this.constructor.DefaultType),
              t
            );
          }
          _maybeScheduleHide() {
            this._config.autohide &&
              (this._hasMouseInteraction ||
                this._hasKeyboardInteraction ||
                (this._timeout = setTimeout(() => {
                  this.hide();
                }, this._config.delay)));
          }
          _onInteraction(t, e) {
            switch (t.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i ||
              this._element.contains(i) ||
              this._maybeScheduleHide();
          }
          _setListeners() {
            pe.on(this._element, "mouseover.bs.toast", (t) =>
              this._onInteraction(t, !0)
            ),
              pe.on(this._element, "mouseout.bs.toast", (t) =>
                this._onInteraction(t, !1)
              ),
              pe.on(this._element, "focusin.bs.toast", (t) =>
                this._onInteraction(t, !0)
              ),
              pe.on(this._element, "focusout.bs.toast", (t) =>
                this._onInteraction(t, !1)
              );
          }
          _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
          }
          static jQueryInterface(t) {
            return this.each(function () {
              const e = Vn.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                if (void 0 === e[t])
                  throw new TypeError(`No method named "${t}"`);
                e[t](this);
              }
            });
          }
        }
        be(Vn), Yt(Vn);
      },
      425: () => {},
    },
    i = {};
  function n(t) {
    var s = i[t];
    if (void 0 !== s) return s.exports;
    var o = (i[t] = { exports: {} });
    return e[t](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (t = []),
    (n.O = (e, i, s, o) => {
      if (!i) {
        var r = 1 / 0;
        for (h = 0; h < t.length; h++) {
          for (var [i, s, o] = t[h], a = !0, l = 0; l < i.length; l++)
            (!1 & o || r >= o) && Object.keys(n.O).every((t) => n.O[t](i[l]))
              ? i.splice(l--, 1)
              : ((a = !1), o < r && (r = o));
          if (a) {
            t.splice(h--, 1);
            var c = s();
            void 0 !== c && (e = c);
          }
        }
        return e;
      }
      o = o || 0;
      for (var h = t.length; h > 0 && t[h - 1][2] > o; h--) t[h] = t[h - 1];
      t[h] = [i, s, o];
    }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      var t = { 773: 0, 170: 0 };
      n.O.j = (e) => 0 === t[e];
      var e = (e, i) => {
          var s,
            o,
            [r, a, l] = i,
            c = 0;
          if (r.some((e) => 0 !== t[e])) {
            for (s in a) n.o(a, s) && (n.m[s] = a[s]);
            if (l) var h = l(n);
          }
          for (e && e(i); c < r.length; c++)
            (o = r[c]), n.o(t, o) && t[o] && t[o][0](), (t[o] = 0);
          return n.O(h);
        },
        i = (self.webpackChunk = self.webpackChunk || []);
      i.forEach(e.bind(null, 0)), (i.push = e.bind(null, i.push.bind(i)));
    })(),
    n.O(void 0, [170], () => n(403));
  var s = n.O(void 0, [170], () => n(425));
  s = n.O(s);
})();
