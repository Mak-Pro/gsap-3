/*!
 * GSDevTools 3.5.2
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
    "use strict";
    function v(e, t) {
        if (e.parentNode && (u || b(e))) {
            var o = S(e),
                n = o ? o.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                i = o ? (t ? "rect" : "g") : "div",
                r = 2 !== t ? 0 : 100,
                a = 3 === t ? 100 : 0,
                s = "position:absolute;display:block;pointer-events:none;",
                l = u.createElementNS ? u.createElementNS(n.replace(/^https/, "http"), i) : u.createElement(i);
            return (
                t &&
                    (o
                        ? ((g = g || v(e)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + r + "," + a + ")"), g.appendChild(l))
                        : (p || ((p = v(e)).style.cssText = s), (l.style.cssText = s + "width:0.1px;height:0.1px;top:" + a + "px;left:" + r + "px"), p.appendChild(l))),
                l
            );
        }
        throw "Need document and parent.";
    }
    function y(e, t, o, n, i, r, a) {
        return (e.a = t), (e.b = o), (e.c = n), (e.d = i), (e.e = r), (e.f = a), e;
    }
    var u,
        d,
        i,
        r,
        p,
        g,
        h,
        f,
        t,
        m = "transform",
        x = m + "Origin",
        b = function _setDoc(e) {
            var t = e.ownerDocument || e;
            !(m in e.style) && "msTransform" in e.style && (x = (m = "msTransform") + "Origin");
            for (; t.parentNode && (t = t.parentNode); );
            if (((d = window), (h = new he()), t)) {
                (i = (u = t).documentElement), (r = t.body);
                var o = t.createElement("div"),
                    n = t.createElement("div");
                r.appendChild(o), o.appendChild(n), (o.style.position = "static"), (o.style[m] = "translate3d(0,0,1px)"), (f = n.offsetParent !== o), r.removeChild(o);
            }
            return t;
        },
        w = function _forceNonZeroScale(e) {
            for (var t, o; e && e !== r; ) (o = e._gsap) && !o.scaleX && !o.scaleY && o.renderTransform && ((o.scaleX = o.scaleY = 1e-4), o.renderTransform(1, o), t ? t.push(o) : (t = [o])), (e = e.parentNode);
            return t;
        },
        M = [],
        k = [],
        D = function _getDocScrollTop() {
            return d.pageYOffset || u.scrollTop || i.scrollTop || r.scrollTop || 0;
        },
        L = function _getDocScrollLeft() {
            return d.pageXOffset || u.scrollLeft || i.scrollLeft || r.scrollLeft || 0;
        },
        S = function _svgOwner(e) {
            return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null);
        },
        E = function _isFixed(e) {
            return "fixed" === d.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0);
        },
        P = function _placeSiblings(e, t) {
            var o,
                n,
                i,
                r,
                a,
                s = S(e),
                l = e === s,
                c = s ? M : k;
            if (e === d) return e;
            if ((c.length || c.push(v(e, 1), v(e, 2), v(e, 3)), (o = s ? g : p), s))
                (i = l ? { x: 0, y: 0 } : e.getBBox()),
                    (a = (n = e.transform ? e.transform.baseVal : {}).numberOfItems
                        ? ((r =
                              (n =
                                  1 < n.numberOfItems
                                      ? (function _consolidate(e) {
                                            for (var t = new he(), o = 0; o < e.numberOfItems; o++) t.multiply(e.getItem(o).matrix);
                                            return t;
                                        })(n)
                                      : n.getItem(0).matrix).a *
                                  i.x +
                              n.c * i.y),
                          n.b * i.x + n.d * i.y)
                        : ((n = h), (r = i.x), i.y)),
                    t && "g" === e.tagName.toLowerCase() && (r = a = 0),
                    o.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + r) + "," + (n.f + a) + ")"),
                    (l ? s : e.parentNode).appendChild(o);
            else {
                if (((r = a = 0), f)) for (n = e.offsetParent, i = e; (i = i && i.parentNode) && i !== n && i.parentNode; ) 4 < (d.getComputedStyle(i)[m] + "").length && ((r = i.offsetLeft), (a = i.offsetTop), (i = 0));
                ((i = o.style).top = e.offsetTop - a + "px"),
                    (i.left = e.offsetLeft - r + "px"),
                    (n = d.getComputedStyle(e)),
                    (i[m] = n[m]),
                    (i[x] = n[x]),
                    (i.border = n.border),
                    (i.borderLeftStyle = n.borderLeftStyle),
                    (i.borderTopStyle = n.borderTopStyle),
                    (i.borderLeftWidth = n.borderLeftWidth),
                    (i.borderTopWidth = n.borderTopWidth),
                    (i.position = "fixed" === n.position ? "fixed" : "absolute"),
                    e.parentNode.appendChild(o);
            }
            return o;
        },
        he =
            (((t = Matrix2D.prototype).inverse = function inverse() {
                var e = this.a,
                    t = this.b,
                    o = this.c,
                    n = this.d,
                    i = this.e,
                    r = this.f,
                    a = e * n - t * o || 1e-10;
                return y(this, n / a, -t / a, -o / a, e / a, (o * r - n * i) / a, -(e * r - t * i) / a);
            }),
            (t.multiply = function multiply(e) {
                var t = this.a,
                    o = this.b,
                    n = this.c,
                    i = this.d,
                    r = this.e,
                    a = this.f,
                    s = e.a,
                    l = e.c,
                    c = e.b,
                    d = e.d,
                    p = e.e,
                    u = e.f;
                return y(this, s * t + c * n, s * o + c * i, l * t + d * n, l * o + d * i, r + p * t + u * n, a + p * o + u * i);
            }),
            (t.clone = function clone() {
                return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.equals = function equals(e) {
                var t = this.a,
                    o = this.b,
                    n = this.c,
                    i = this.d,
                    r = this.e,
                    a = this.f;
                return t === e.a && o === e.b && n === e.c && i === e.d && r === e.e && a === e.f;
            }),
            (t.apply = function apply(e, t) {
                void 0 === t && (t = {});
                var o = e.x,
                    n = e.y,
                    i = this.a,
                    r = this.b,
                    a = this.c,
                    s = this.d,
                    l = this.e,
                    c = this.f;
                return (t.x = o * i + n * a + l || 0), (t.y = o * r + n * s + c || 0), t;
            }),
            Matrix2D);
    function Matrix2D(e, t, o, n, i, r) {
        void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === o && (o = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === r && (r = 0), y(this, e, t, o, n, i, r);
    }
    function getGlobalMatrix(e, t, o) {
        if (!e || !e.parentNode || (u || b(e)).documentElement === e) return new he();
        var n = w(e.parentNode),
            i = S(e) ? M : k,
            r = P(e, o),
            a = i[0].getBoundingClientRect(),
            s = i[1].getBoundingClientRect(),
            l = i[2].getBoundingClientRect(),
            c = r.parentNode,
            d = E(e),
            p = new he((s.left - a.left) / 100, (s.top - a.top) / 100, (l.left - a.left) / 100, (l.top - a.top) / 100, a.left + (d ? 0 : L()), a.top + (d ? 0 : D()));
        if ((c.removeChild(r), n)) for (a = n.length; a--; ) ((s = n[a]).scaleX = s.scaleY = 0), s.renderTransform(1, s);
        return t ? p.inverse() : p;
    }
    function T() {
        return "undefined" != typeof window;
    }
    function U() {
        return fe || (T() && (fe = window.gsap) && fe.registerPlugin && fe);
    }
    function V(e) {
        return "function" == typeof e;
    }
    function W(e) {
        return "object" == typeof e;
    }
    function X(e) {
        return void 0 === e;
    }
    function Y() {
        return !1;
    }
    function _(e) {
        return Math.round(1e4 * e) / 1e4;
    }
    function ba(e, t) {
        var o = ve.createElementNS ? ve.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ve.createElement(e);
        return o.style ? o : ve.createElement(e);
    }
    function na(e, t) {
        var o,
            n = {};
        for (o in e) n[o] = t ? e[o] * t : e[o];
        return n;
    }
    function pa() {
        return Re.forEach(function (e) {
            return e();
        });
    }
    function ra() {
        return !Re.length && fe.ticker.remove(pa);
    }
    function sa(e) {
        for (var t = Re.length; t--; ) Re[t] === e && Re.splice(t, 1);
        fe.to(ra, { overwrite: !0, delay: 15, duration: 0, onComplete: ra, data: "_draggable" });
    }
    function ua(e, t, o, n) {
        if (e.addEventListener) {
            var i = Te[t];
            (n = n || (N ? { passive: !1 } : null)), e.addEventListener(i || t, o, n), i && t !== i && e.addEventListener(t, o, n);
        }
    }
    function va(e, t, o) {
        if (e.removeEventListener) {
            var n = Te[t];
            e.removeEventListener(n || t, o), n && t !== n && e.removeEventListener(t, o);
        }
    }
    function wa(e) {
        e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation();
    }
    function ya(e) {
        (Me = e.touches && _e < e.touches.length), va(e.target, "touchend", ya);
    }
    function za(e) {
        (Me = e.touches && _e < e.touches.length), ua(e.target, "touchend", ya);
    }
    function Aa(e) {
        return me.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0;
    }
    function Ba(e) {
        return me.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0;
    }
    function Ca(e, t) {
        ua(e, "scroll", t), Be(e.parentNode) || Ca(e.parentNode, t);
    }
    function Da(e, t) {
        va(e, "scroll", t), Be(e.parentNode) || Da(e.parentNode, t);
    }
    function Fa(e, t) {
        var o = "x" === t ? "Width" : "Height",
            n = "scroll" + o,
            i = "client" + o;
        return Math.max(0, Be(e) ? Math.max(xe[n], s[n]) - (me["inner" + o] || xe[i] || s[i]) : e[n] - e[i]);
    }
    function Ga(e, t) {
        var o = Fa(e, "x"),
            n = Fa(e, "y");
        Be(e) ? (e = Oe) : Ga(e.parentNode, t), (e._gsMaxScrollX = o), (e._gsMaxScrollY = n), t || ((e._gsScrollX = e.scrollLeft || 0), (e._gsScrollY = e.scrollTop || 0));
    }
    function Ha(e, t, o) {
        var n = e.style;
        n && (X(n[t]) && (t = C(t, e) || t), null == o ? n.removeProperty && n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : (n[t] = o));
    }
    function Ia(e) {
        return me.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e);
    }
    function Ka(e) {
        if (e === me)
            return (
                (I.left = I.top = 0),
                (I.width = I.right = xe.clientWidth || e.innerWidth || s.clientWidth || 0),
                (I.height = I.bottom = (e.innerHeight || 0) - 20 < xe.clientHeight ? xe.clientHeight : e.innerHeight || s.clientHeight || 0),
                I
            );
        var t = e.ownerDocument || ve,
            o = X(e.pageX) ? (e.nodeType || X(e.left) || X(e.top) ? ye(e)[0].getBoundingClientRect() : e) : { left: e.pageX - Ba(t), top: e.pageY - Aa(t), right: e.pageX - Ba(t) + 1, bottom: e.pageY - Aa(t) + 1 };
        return (
            X(o.right) && !X(o.width) ? ((o.right = o.left + o.width), (o.bottom = o.top + o.height)) : X(o.width) && (o = { width: o.right - o.left, height: o.bottom - o.top, right: o.right, left: o.left, bottom: o.bottom, top: o.top }), o
        );
    }
    function La(e, t, o) {
        var n,
            i = e.vars,
            r = i[o],
            a = e._listeners[t];
        return V(r) && (n = r.apply(i.callbackScope || e, i[o + "Params"] || [e.pointerEvent])), a && !1 === e.dispatchEvent(t) && (n = !1), n;
    }
    function Ma(e, t) {
        var o,
            n,
            i,
            r = ye(e)[0];
        return r.nodeType || r === me
            ? O(r, t)
            : X(e.left)
            ? { left: (n = e.min || e.minX || e.minRotation || 0), top: (o = e.min || e.minY || 0), width: (e.max || e.maxX || e.maxRotation || 0) - n, height: (e.max || e.maxY || 0) - o }
            : ((i = { x: 0, y: 0 }), { left: e.left - i.x, top: e.top - i.y, width: e.width, height: e.height });
    }
    function Pa(i, r, e, t, a, o) {
        var n,
            s,
            l,
            c = {};
        if (r)
            if (1 !== a && r instanceof Array) {
                if (((c.end = n = []), (l = r.length), W(r[0]))) for (s = 0; s < l; s++) n[s] = na(r[s], a);
                else for (s = 0; s < l; s++) n[s] = r[s] * a;
                (e += 1.1), (t -= 1.1);
            } else
                V(r)
                    ? (c.end = function (e) {
                          var t,
                              o,
                              n = r.call(i, e);
                          if (1 !== a)
                              if (W(n)) {
                                  for (o in ((t = {}), n)) t[o] = n[o] * a;
                                  n = t;
                              } else n *= a;
                          return n;
                      })
                    : (c.end = r);
        return (!e && 0 !== e) || (c.max = e), (!t && 0 !== t) || (c.min = t), o && (c.velocity = 0), c;
    }
    function Qa(e) {
        var t;
        return !(!e || !e.getAttribute || e === s) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || (!e.onclick && !n.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable")))) || Qa(e.parentNode));
    }
    function Ra(e, t) {
        for (var o, n = e.length; n--; ) ((o = e[n]).ondragstart = o.onselectstart = t ? null : Y), fe.set(o, { lazy: !0, userSelect: t ? "text" : "none" });
    }
    function Va(r, i) {
        (r = fe.utils.toArray(r)[0]), (i = i || {});
        var a,
            s,
            l,
            e,
            c,
            d,
            p = document.createElement("div"),
            u = p.style,
            t = r.firstChild,
            g = 0,
            h = 0,
            f = r.scrollTop,
            m = r.scrollLeft,
            v = r.scrollWidth,
            x = r.scrollHeight,
            b = 0,
            y = 0,
            w = 0;
        R && !1 !== i.force3D ? ((c = "translate3d("), (d = "px,0px)")) : H && ((c = "translate("), (d = "px)")),
            (this.scrollTop = function (e, t) {
                if (!arguments.length) return -this.top();
                this.top(-e, t);
            }),
            (this.scrollLeft = function (e, t) {
                if (!arguments.length) return -this.left();
                this.left(-e, t);
            }),
            (this.left = function (e, t) {
                if (!arguments.length) return -(r.scrollLeft + h);
                var o = r.scrollLeft - m,
                    n = h;
                if ((2 < o || o < -2) && !t) return (m = r.scrollLeft), fe.killTweensOf(this, { left: 1, scrollLeft: 1 }), this.left(-m), void (i.onKill && i.onKill());
                (e = -e) < 0 ? ((h = (e - 0.5) | 0), (e = 0)) : y < e ? ((h = (e - y) | 0), (e = y)) : (h = 0),
                    (h || n) && (this._skip || (u[H] = c + -h + "px," + -g + d), 0 <= h + b && (u.paddingRight = h + b + "px")),
                    (r.scrollLeft = 0 | e),
                    (m = r.scrollLeft);
            }),
            (this.top = function (e, t) {
                if (!arguments.length) return -(r.scrollTop + g);
                var o = r.scrollTop - f,
                    n = g;
                if ((2 < o || o < -2) && !t) return (f = r.scrollTop), fe.killTweensOf(this, { top: 1, scrollTop: 1 }), this.top(-f), void (i.onKill && i.onKill());
                (e = -e) < 0 ? ((g = (e - 0.5) | 0), (e = 0)) : w < e ? ((g = (e - w) | 0), (e = w)) : (g = 0), (g || n) && (this._skip || (u[H] = c + -h + "px," + -g + d)), (r.scrollTop = 0 | e), (f = r.scrollTop);
            }),
            (this.maxScrollTop = function () {
                return w;
            }),
            (this.maxScrollLeft = function () {
                return y;
            }),
            (this.disable = function () {
                for (t = p.firstChild; t; ) (e = t.nextSibling), r.appendChild(t), (t = e);
                r === p.parentNode && r.removeChild(p);
            }),
            (this.enable = function () {
                if ((t = r.firstChild) !== p) {
                    for (; t; ) (e = t.nextSibling), p.appendChild(t), (t = e);
                    r.appendChild(p), this.calibrate();
                }
            }),
            (this.calibrate = function (e) {
                var t,
                    o,
                    n,
                    i = r.clientWidth === a;
                (f = r.scrollTop),
                    (m = r.scrollLeft),
                    (i && r.clientHeight === s && p.offsetHeight === l && v === r.scrollWidth && x === r.scrollHeight && !e) ||
                        ((g || h) && ((o = this.left()), (n = this.top()), this.left(-r.scrollLeft), this.top(-r.scrollTop)),
                        (t = Ia(r)),
                        (i && !e) || ((u.display = "block"), (u.width = "auto"), (u.paddingRight = "0px"), (b = Math.max(0, r.scrollWidth - r.clientWidth)) && (b += parseFloat(t.paddingLeft) + (z ? parseFloat(t.paddingRight) : 0))),
                        (u.display = "inline-block"),
                        (u.position = "relative"),
                        (u.overflow = "visible"),
                        (u.verticalAlign = "top"),
                        (u.boxSizing = "content-box"),
                        (u.width = "100%"),
                        (u.paddingRight = b + "px"),
                        z && (u.paddingBottom = t.paddingBottom),
                        (a = r.clientWidth),
                        (s = r.clientHeight),
                        (v = r.scrollWidth),
                        (x = r.scrollHeight),
                        (y = r.scrollWidth - a),
                        (w = r.scrollHeight - s),
                        (l = p.offsetHeight),
                        (u.display = "block"),
                        (o || n) && (this.left(o), this.top(n)));
            }),
            (this.content = p),
            (this.element = r),
            (this._skip = !1),
            this.enable();
    }
    function Wa(e) {
        if (T() && document.body) {
            var t = window && window.navigator;
            (me = window),
                (ve = document),
                (xe = ve.documentElement),
                (s = ve.body),
                (l = ba("div")),
                (Se = !!window.PointerEvent),
                ((be = ba("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
                (Le = "grab" === be.style.cursor ? "grab" : "move"),
                (ke = t && -1 !== t.userAgent.toLowerCase().indexOf("android")),
                (we = ("ontouchstart" in xe && "orientation" in me) || (t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints))),
                (n = ba("div")),
                (i = ba("div")),
                (r = i.style),
                (a = s),
                (r.display = "inline-block"),
                (r.position = "relative"),
                (n.style.cssText = i.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
                n.appendChild(i),
                a.appendChild(n),
                (o = i.offsetHeight + 18 > n.scrollHeight),
                a.removeChild(n),
                (z = o),
                (Te = (function (e) {
                    for (
                        var t = e.split(","),
                            o = (("onpointerdown" in l) ? "pointerdown,pointermove,pointerup,pointercancel" : ("onmspointerdown" in l) ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","),
                            n = {},
                            i = 4;
                        -1 < --i;

                    )
                        (n[t[i]] = o[i]), (n[o[i]] = t[i]);
                    try {
                        xe.addEventListener(
                            "test",
                            null,
                            Object.defineProperty({}, "passive", {
                                get: function get() {
                                    N = 1;
                                },
                            })
                        );
                    } catch (e) {}
                    return n;
                })("touchstart,touchmove,touchend,touchcancel")),
                ua(ve, "touchcancel", Y),
                ua(me, "touchmove", Y),
                s && s.addEventListener("touchstart", Y),
                ua(ve, "contextmenu", function () {
                    for (var e in ze) ze[e].isPressed && ze[e].endDrag();
                }),
                (fe = c = U());
        }
        var o, n, i, r, a;
        fe ? ((De = fe.plugins.inertia), (C = fe.utils.checkPrefix), (H = C(H)), (Ee = C(Ee)), (ye = fe.utils.toArray), (R = !!C("perspective"))) : e && console.warn("Please gsap.registerPlugin(Draggable)");
    }
    var fe,
        me,
        ve,
        xe,
        s,
        l,
        be,
        c,
        C,
        ye,
        N,
        we,
        Te,
        _e,
        Me,
        ke,
        De,
        Le,
        Se,
        R,
        z,
        o,
        H = "transform",
        Ee = "transformOrigin",
        Pe = Array.isArray,
        Ce = 180 / Math.PI,
        Ne = 1e20,
        a = new he(),
        Xe =
            Date.now ||
            function () {
                return new Date().getTime();
            },
        Re = [],
        ze = {},
        He = 0,
        n = /^(?:a|input|textarea|button|select)$/i,
        Ye = 0,
        Ie = {},
        Oe = {},
        Be = function _isRoot(e) {
            return !(e && e !== xe && 9 !== e.nodeType && e !== ve.body && e !== me && e.nodeType && e.parentNode);
        },
        I = {},
        Ae = {},
        O = function _getElementBounds(e, t) {
            t = ye(t)[0];
            var o,
                n,
                i,
                r,
                a,
                s,
                l,
                c,
                d,
                p,
                u,
                g,
                h,
                f,
                m = e.getBBox && e.ownerSVGElement,
                v = e.ownerDocument || ve;
            if (e === me)
                (i = Aa(v)),
                    (n = (o = Ba(v)) + (v.documentElement.clientWidth || e.innerWidth || v.body.clientWidth || 0)),
                    (r = i + ((e.innerHeight || 0) - 20 < v.documentElement.clientHeight ? v.documentElement.clientHeight : e.innerHeight || v.body.clientHeight || 0));
            else {
                if (t === me || X(t)) return e.getBoundingClientRect();
                (o = i = 0),
                    m
                        ? ((u = (p = e.getBBox()).width), (g = p.height))
                        : (e.viewBox && (p = e.viewBox.baseVal) && ((o = p.x || 0), (i = p.y || 0), (u = p.width), (g = p.height)),
                          u ||
                              ((p = "border-box" === (h = Ia(e)).boxSizing),
                              (u = (parseFloat(h.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(h.borderLeftWidth) + parseFloat(h.borderRightWidth))),
                              (g = (parseFloat(h.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(h.borderTopWidth) + parseFloat(h.borderBottomWidth))))),
                    (n = u),
                    (r = g);
            }
            return e === t
                ? { left: o, top: i, width: n - o, height: r - i }
                : ((s = (a = getGlobalMatrix(t, !0).multiply(getGlobalMatrix(e))).apply({ x: o, y: i })),
                  (l = a.apply({ x: n, y: i })),
                  (c = a.apply({ x: n, y: r })),
                  (d = a.apply({ x: o, y: r })),
                  (o = Math.min(s.x, l.x, c.x, d.x)),
                  (i = Math.min(s.y, l.y, c.y, d.y)),
                  { left: o + ((f = t.parentNode || {}).scrollLeft || 0), top: i + (f.scrollTop || 0), width: Math.max(s.x, l.x, c.x, d.x) - o, height: Math.max(s.y, l.y, c.y, d.y) - i });
        },
        B =
            (((o = EventDispatcher.prototype).addEventListener = function addEventListener(e, t) {
                var o = this._listeners[e] || (this._listeners[e] = []);
                ~o.indexOf(t) || o.push(t);
            }),
            (o.removeEventListener = function removeEventListener(e, t) {
                var o = this._listeners[e],
                    n = (o && o.indexOf(t)) || -1;
                -1 < n && o.splice(n, 1);
            }),
            (o.dispatchEvent = function dispatchEvent(t) {
                var o,
                    n = this;
                return (
                    (this._listeners[t] || []).forEach(function (e) {
                        return !1 === e.call(n, { type: t, target: n.target }) && (o = !1);
                    }),
                    o
                );
            }),
            EventDispatcher);
    function EventDispatcher(e) {
        (this._listeners = {}), (this.target = e || this);
    }
    var Fe,
        K =
            ((function _inheritsLoose(e, t) {
                (e.prototype = Object.create(t.prototype)), ((e.prototype.constructor = e).__proto__ = t);
            })(Draggable, (Fe = B)),
            (Draggable.register = function register(e) {
                (fe = e), Wa();
            }),
            (Draggable.create = function create(e, t) {
                return (
                    c || Wa(!0),
                    ye(e).map(function (e) {
                        return new Draggable(e, t);
                    })
                );
            }),
            (Draggable.get = function get(e) {
                return ze[(ye(e)[0] || {})._gsDragID];
            }),
            (Draggable.timeSinceDrag = function timeSinceDrag() {
                return (Xe() - Ye) / 1e3;
            }),
            (Draggable.hitTest = function hitTest(e, t, o) {
                if (e === t) return !1;
                var n,
                    i,
                    r,
                    a = Ka(e),
                    s = Ka(t),
                    l = a.top,
                    c = a.left,
                    d = a.right,
                    p = a.bottom,
                    u = a.width,
                    g = a.height,
                    h = s.left > d || s.right < c || s.top > p || s.bottom < l;
                return h || !o
                    ? !h
                    : ((r = -1 !== (o + "").indexOf("%")),
                      (o = parseFloat(o) || 0),
                      ((n = { left: Math.max(c, s.left), top: Math.max(l, s.top) }).width = Math.min(d, s.right) - n.left),
                      (n.height = Math.min(p, s.bottom) - n.top),
                      !(n.width < 0 || n.height < 0) && (r ? u * g * (o *= 0.01) <= (i = n.width * n.height) || i >= s.width * s.height * o : n.width > o && n.height > o));
            }),
            Draggable);
    function Draggable(g, p) {
        var e;
        (e = Fe.call(this) || this),
            fe || Wa(1),
            (g = ye(g)[0]),
            (De = De || fe.plugins.inertia),
            (e.vars = p = na(p || {})),
            (e.target = g),
            (e.x = e.y = e.rotation = 0),
            (e.dragResistance = parseFloat(p.dragResistance) || 0),
            (e.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0),
            (e.lockAxis = p.lockAxis),
            (e.autoScroll = p.autoScroll || 0),
            (e.lockedAxis = null),
            (e.allowEventDefault = !!p.allowEventDefault),
            fe.getProperty(g, "x");
        function zh(e, t) {
            return parseFloat(se.get(g, e, t));
        }
        function ei(e) {
            return wa(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1;
        }
        function fi(e) {
            if (Z.autoScroll && Z.isDragging && (ee || C)) {
                var t,
                    o,
                    n,
                    i,
                    r,
                    a,
                    s,
                    l,
                    c = g,
                    d = 15 * Z.autoScroll;
                for (
                    ee = !1,
                        Oe.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != ce.documentElement.scrollTop ? ce.documentElement.scrollTop : ce.body.scrollTop,
                        Oe.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != ce.documentElement.scrollLeft ? ce.documentElement.scrollLeft : ce.body.scrollLeft,
                        i = Z.pointerX - Oe.scrollLeft,
                        r = Z.pointerY - Oe.scrollTop;
                    c && !o;

                )
                    (t = (o = Be(c.parentNode)) ? Oe : c.parentNode),
                        (n = o ? { bottom: Math.max(xe.clientHeight, me.innerHeight || 0), right: Math.max(xe.clientWidth, me.innerWidth || 0), left: 0, top: 0 } : t.getBoundingClientRect()),
                        (a = s = 0),
                        U &&
                            ((l = t._gsMaxScrollY - t.scrollTop) < 0
                                ? (s = l)
                                : r > n.bottom - ne && l
                                ? ((ee = !0), (s = Math.min(l, (d * (1 - Math.max(0, n.bottom - r) / ne)) | 0)))
                                : r < n.top + te && t.scrollTop && ((ee = !0), (s = -Math.min(t.scrollTop, (d * (1 - Math.max(0, r - n.top) / te)) | 0))),
                            s && (t.scrollTop += s)),
                        q &&
                            ((l = t._gsMaxScrollX - t.scrollLeft) < 0
                                ? (a = l)
                                : i > n.right - oe && l
                                ? ((ee = !0), (a = Math.min(l, (d * (1 - Math.max(0, n.right - i) / oe)) | 0)))
                                : i < n.left + ie && t.scrollLeft && ((ee = !0), (a = -Math.min(t.scrollLeft, (d * (1 - Math.max(0, i - n.left) / ie)) | 0))),
                            a && (t.scrollLeft += a)),
                        o && (a || s) && (me.scrollTo(t.scrollLeft, t.scrollTop), ue(Z.pointerX + a, Z.pointerY + s)),
                        (c = t);
            }
            if (C) {
                var p = Z.x,
                    u = Z.y;
                K
                    ? ((Z.deltaX = p - parseFloat(se.rotation)), (Z.rotation = p), (se.rotation = p + "deg"), se.renderTransform(1, se))
                    : h
                    ? (U && ((Z.deltaY = u - h.top()), h.top(u)), q && ((Z.deltaX = p - h.left()), h.left(p)))
                    : G
                    ? (U && ((Z.deltaY = u - parseFloat(se.y)), (se.y = u + "px")), q && ((Z.deltaX = p - parseFloat(se.x)), (se.x = p + "px")), se.renderTransform(1, se))
                    : (U && ((Z.deltaY = u - parseFloat(g.style.top || 0)), (g.style.top = u + "px")), q && ((Z.deltaY = p - parseFloat(g.style.left || 0)), (g.style.left = p + "px"))),
                    !f || e || B || (!(B = !0) === La(Z, "drag", "onDrag") && (q && (Z.x -= Z.deltaX), U && (Z.y -= Z.deltaY), fi(!0)), (B = !1));
            }
            C = !1;
        }
        function gi(e, t) {
            var o,
                n,
                i = Z.x,
                r = Z.y;
            g._gsap || (se = fe.core.getCache(g)),
                G
                    ? ((Z.x = parseFloat(se.x)), (Z.y = parseFloat(se.y)))
                    : K
                    ? (Z.x = Z.rotation = parseFloat(se.rotation))
                    : h
                    ? ((Z.y = h.top()), (Z.x = h.left()))
                    : ((Z.y = parseInt(g.style.top || ((n = Ia(g)) && n.top), 10) || 0), (Z.x = parseInt(g.style.left || (n || {}).left, 10) || 0)),
                (N || R || z) &&
                    !t &&
                    (Z.isDragging || Z.isThrowing) &&
                    (z && ((Ie.x = Z.x), (Ie.y = Z.y), (o = z(Ie)).x !== Z.x && ((Z.x = o.x), (C = !0)), o.y !== Z.y && ((Z.y = o.y), (C = !0))),
                    N && (o = N(Z.x)) !== Z.x && ((Z.x = o), K && (Z.rotation = o), (C = !0)),
                    R && ((o = R(Z.y)) !== Z.y && (Z.y = o), (C = !0))),
                C && fi(!0),
                e || ((Z.deltaX = Z.x - i), (Z.deltaY = Z.y - r), La(Z, "throwupdate", "onThrowUpdate"));
        }
        function hi(a, s, l, o) {
            return (
                null == s && (s = -Ne),
                null == l && (l = Ne),
                V(a)
                    ? function (e) {
                          var t = Z.isPressed ? 1 - Z.edgeResistance : 1;
                          return a.call(Z, l < e ? l + (e - l) * t : e < s ? s + (e - s) * t : e) * o;
                      }
                    : Pe(a)
                    ? function (e) {
                          for (var t, o, n = a.length, i = 0, r = Ne; -1 < --n; ) (o = (t = a[n]) - e) < 0 && (o = -o), o < r && s <= t && t <= l && ((i = n), (r = o));
                          return a[i];
                      }
                    : isNaN(a)
                    ? function (e) {
                          return e;
                      }
                    : function () {
                          return a * o;
                      }
            );
        }
        function ji() {
            var e, t, o, n;
            (k = !1),
                h
                    ? (h.calibrate(), (Z.minX = L = -h.maxScrollLeft()), (Z.minY = E = -h.maxScrollTop()), (Z.maxX = D = Z.maxY = S = 0), (k = !0))
                    : p.bounds &&
                      ((e = Ma(p.bounds, g.parentNode)),
                      K
                          ? ((Z.minX = L = e.left), (Z.maxX = D = e.left + e.width), (Z.minY = E = Z.maxY = S = 0))
                          : X(p.bounds.maxX) && X(p.bounds.maxY)
                          ? ((t = Ma(g, g.parentNode)),
                            (Z.minX = L = Math.round(zh(d, "px") + e.left - t.left - 0.5)),
                            (Z.minY = E = Math.round(zh(j, "px") + e.top - t.top - 0.5)),
                            (Z.maxX = D = Math.round(L + (e.width - t.width))),
                            (Z.maxY = S = Math.round(E + (e.height - t.height))))
                          : ((e = p.bounds), (Z.minX = L = e.minX), (Z.minY = E = e.minY), (Z.maxX = D = e.maxX), (Z.maxY = S = e.maxY)),
                      D < L && ((Z.minX = D), (Z.maxX = D = L), (L = Z.minX)),
                      S < E && ((Z.minY = S), (Z.maxY = S = E), (E = Z.minY)),
                      K && ((Z.minRotation = L), (Z.maxRotation = D)),
                      (k = !0)),
                p.liveSnap &&
                    ((o = !0 === p.liveSnap ? p.snap || {} : p.liveSnap),
                    (n = Pe(o) || V(o)),
                    K
                        ? ((N = hi(n ? o : o.rotation, L, D, 1)), (R = null))
                        : o.points
                        ? (z = (function buildPointSnapFunc(l, s, c, d, p, u, g) {
                              return (
                                  (u = u && u < Ne ? u * u : Ne),
                                  V(l)
                                      ? function (e) {
                                            var t,
                                                o,
                                                n,
                                                i = Z.isPressed ? 1 - Z.edgeResistance : 1,
                                                r = e.x,
                                                a = e.y;
                                            return (
                                                (e.x = r = c < r ? c + (r - c) * i : r < s ? s + (r - s) * i : r),
                                                (e.y = a = p < a ? p + (a - p) * i : a < d ? d + (a - d) * i : a),
                                                (t = l.call(Z, e)) !== e && ((e.x = t.x), (e.y = t.y)),
                                                1 !== g && ((e.x *= g), (e.y *= g)),
                                                u < Ne && ((o = e.x - r), (n = e.y - a), u < o * o + n * n && ((e.x = r), (e.y = a))),
                                                e
                                            );
                                        }
                                      : Pe(l)
                                      ? function (e) {
                                            for (var t, o, n, i, r = l.length, a = 0, s = Ne; -1 < --r; ) (i = (t = (n = l[r]).x - e.x) * t + (o = n.y - e.y) * o) < s && ((a = r), (s = i));
                                            return s <= u ? l[a] : e;
                                        }
                                      : function (e) {
                                            return e;
                                        }
                              );
                          })(n ? o : o.points, L, D, E, S, o.radius, h ? -1 : 1))
                        : (q && (N = hi(n ? o : o.x || o.left || o.scrollLeft, L, D, h ? -1 : 1)), U && (R = hi(n ? o : o.y || o.top || o.scrollTop, E, S, h ? -1 : 1))));
        }
        function ki() {
            (Z.isThrowing = !1), La(Z, "throwcomplete", "onThrowComplete");
        }
        function li() {
            Z.isThrowing = !1;
        }
        function mi(e, t) {
            var o, n, i, r;
            e && De
                ? (!0 === e &&
                      ((o = p.snap || p.liveSnap || {}),
                      (n = Pe(o) || V(o)),
                      (e = { resistance: (p.throwResistance || p.resistance || 1e3) / (K ? 10 : 1) }),
                      K
                          ? (e.rotation = Pa(Z, n ? o : o.rotation, D, L, 1, t))
                          : (q && (e[d] = Pa(Z, n ? o : o.points || o.x || o.left, D, L, h ? -1 : 1, t || "x" === Z.lockedAxis)),
                            U && (e[j] = Pa(Z, n ? o : o.points || o.y || o.top, S, E, h ? -1 : 1, t || "y" === Z.lockedAxis)),
                            (o.points || (Pe(o) && W(o[0]))) && ((e.linkedProps = d + "," + j), (e.radius = o.radius)))),
                  (Z.isThrowing = !0),
                  (r = isNaN(p.overshootTolerance) ? (1 === p.edgeResistance ? 0 : 1 - Z.edgeResistance + 0.2) : p.overshootTolerance),
                  e.duration || (e.duration = { max: Math.max(p.minDuration || 0, "maxDuration" in p ? p.maxDuration : 2), min: isNaN(p.minDuration) ? (0 === r || (W(e) && 1e3 < e.resistance) ? 0 : 0.5) : p.minDuration, overshoot: r }),
                  (Z.tween = i = fe.to(h || g, {
                      inertia: e,
                      data: "_draggable",
                      onComplete: ki,
                      onInterrupt: li,
                      onUpdate: p.fastMode ? La : gi,
                      onUpdateParams: p.fastMode ? [Z, "onthrowupdate", "onThrowUpdate"] : o && o.radius ? [!1, !0] : [],
                  })),
                  p.fastMode || (h && (h._skip = !0), i.render(1e9, !0, !0), gi(!0, !0), (Z.endX = Z.x), (Z.endY = Z.y), K && (Z.endRotation = Z.x), i.play(0), gi(!0, !0), h && (h._skip = !1)))
                : k && Z.applyBounds();
        }
        function ni(e) {
            var t,
                o = H;
            (H = getGlobalMatrix(g.parentNode, !0)), e && Z.isPressed && !H.equals(o || new he()) && ((t = o.inverse().apply({ x: y, y: w })), H.apply(t, t), (y = t.x), (w = t.y)), H.equals(a) && (H = null);
        }
        function oi() {
            var e,
                t,
                o,
                n = 1 - Z.edgeResistance,
                i = le ? Ba(ce) : 0,
                r = le ? Aa(ce) : 0;
            ni(!1),
                H && ((Ae.x = Z.pointerX - i), (Ae.y = Z.pointerY - r), H.apply(Ae, Ae), (y = Ae.x), (w = Ae.y)),
                C && (ue(Z.pointerX, Z.pointerY), fi(!0)),
                h
                    ? (ji(), (M = h.top()), (T = h.left()))
                    : (de() ? (gi(!0, !0), ji()) : Z.applyBounds(),
                      K
                          ? ((e = g.ownerSVGElement ? [se.xOrigin - g.getBBox().x, se.yOrigin - g.getBBox().y] : (Ia(g)[Ee] || "0 0").split(" ")),
                            (P = Z.rotationOrigin = getGlobalMatrix(g).apply({ x: parseFloat(e[0]) || 0, y: parseFloat(e[1]) || 0 })),
                            gi(!0, !0),
                            (t = Z.pointerX - P.x - i),
                            (o = P.y - Z.pointerY + r),
                            (T = Z.x),
                            (M = Z.y = Math.atan2(o, t) * Ce))
                          : ((M = zh(j, "px")), (T = zh(d, "px")))),
                k && n && (D < T ? (T = D + (T - D) / n) : T < L && (T = L - (L - T) / n), K || (S < M ? (M = S + (M - S) / n) : M < E && (M = E - (E - M) / n))),
                (Z.startX = T),
                (Z.startY = M);
        }
        function qi() {
            !be.parentNode || de() || Z.isDragging || be.parentNode.removeChild(be);
        }
        function ri(e, t) {
            var o;
            if (!u || Z.isPressed || !e || (!(("mousedown" !== e.type && "pointerdown" !== e.type) || t) && Xe() - ae < 30 && Te[Z.pointerEvent.type])) F && e && u && wa(e);
            else {
                if (
                    ((Y = de()),
                    (Z.pointerEvent = e),
                    Te[e.type] ? ((b = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ce), ua(b, "touchend", ge), ua(b, "touchmove", pe), ua(b, "touchcancel", ge), ua(ce, "touchstart", za)) : ((b = null), ua(ce, "mousemove", pe)),
                    (O = null),
                    (Se && b) || (ua(ce, "mouseup", ge), e && e.target && ua(e.target, "mouseup", ge)),
                    (x = re.call(Z, e.target) && !1 === p.dragClickables && !t))
                )
                    return ua(e.target, "change", ge), La(Z, "pressInit", "onPressInit"), La(Z, "press", "onPress"), void Ra(J, !0);
                if (
                    ((I = !(!b || q == U || !1 === Z.vars.allowNativeTouchScrolling || (Z.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which))) && (q ? "y" : "x")),
                    (F = !I && !Z.allowEventDefault) && (wa(e), ua(me, "touchforcechange", wa)),
                    e.changedTouches ? ((e = m = e.changedTouches[0]), (v = e.identifier)) : e.pointerId ? (v = e.pointerId) : (m = v = null),
                    _e++,
                    (function _addToRenderQueue(e) {
                        Re.push(e), 1 === Re.length && fe.ticker.add(pa);
                    })(fi),
                    (w = Z.pointerY = e.pageY),
                    (y = Z.pointerX = e.pageX),
                    La(Z, "pressInit", "onPressInit"),
                    (I || Z.autoScroll) && Ga(g.parentNode),
                    !g.parentNode || !Z.autoScroll || h || K || !g.parentNode._gsMaxScrollX || be.parentNode || g.getBBox || ((be.style.width = g.parentNode.scrollWidth + "px"), g.parentNode.appendChild(be)),
                    oi(),
                    Z.tween && Z.tween.kill(),
                    (Z.isThrowing = !1),
                    fe.killTweensOf(h || g, n, !0),
                    h && fe.killTweensOf(g, { scrollTo: 1 }, !0),
                    (Z.tween = Z.lockedAxis = null),
                    (!p.zIndexBoost && (K || h || !1 === p.zIndexBoost)) || (g.style.zIndex = Draggable.zIndex++),
                    (Z.isPressed = !0),
                    (f = !(!p.onDrag && !Z._listeners.drag)),
                    (l = !(!p.onMove && !Z._listeners.move)),
                    !K && (!1 !== p.cursor || p.activeCursor))
                )
                    for (o = J.length; -1 < --o; ) fe.set(J[o], { cursor: p.activeCursor || p.cursor || ("grab" === Le ? "grabbing" : Le) });
                La(Z, "press", "onPress");
            }
        }
        function vi(e) {
            if (e && Z.isDragging && !h) {
                var t = e.target || g.parentNode,
                    o = t.scrollLeft - t._gsScrollX,
                    n = t.scrollTop - t._gsScrollY;
                (o || n) && (H ? ((y -= o * H.a + n * H.c), (w -= n * H.d + o * H.b)) : ((y -= o), (w -= n)), (t._gsScrollX += o), (t._gsScrollY += n), ue(Z.pointerX, Z.pointerY));
            }
        }
        function wi(e) {
            var t = Xe(),
                o = t - ae < 40,
                n = t - $ < 40,
                i = o && A === ae,
                r = Z.pointerEvent && Z.pointerEvent.defaultPrevented,
                a = o && c === ae,
                s = e.isTrusted || (null == e.isTrusted && o && i);
            if (((i || (n && !1 !== Z.vars.suppressClickOnDrag)) && e.stopImmediatePropagation && e.stopImmediatePropagation(), o && (!Z.pointerEvent || !Z.pointerEvent.defaultPrevented) && (!i || (s && !a))))
                return s && i && (c = ae), void (A = ae);
            (Z.isPressed || n || o) && ((s && e.detail && o && !r) || wa(e));
        }
        function xi(e) {
            return H ? { x: e.x * H.a + e.y * H.c + H.e, y: e.x * H.b + e.y * H.d + H.f } : { x: e.x, y: e.y };
        }
        var u,
            h,
            y,
            w,
            T,
            M,
            k,
            f,
            l,
            D,
            L,
            S,
            E,
            m,
            v,
            P,
            C,
            t,
            N,
            R,
            z,
            x,
            b,
            H,
            Y,
            I,
            O,
            B,
            A,
            c,
            F,
            o = (p.type || "x,y").toLowerCase(),
            G = ~o.indexOf("x") || ~o.indexOf("y"),
            K = -1 !== o.indexOf("rotation"),
            d = K ? "rotation" : G ? "x" : "left",
            j = G ? "y" : "top",
            q = !(!~o.indexOf("x") && !~o.indexOf("left") && "scroll" !== o),
            U = !(!~o.indexOf("y") && !~o.indexOf("top") && "scroll" !== o),
            Q = p.minimumMovement || 2,
            Z = (function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            })(e),
            J = ye(p.trigger || p.handle || g),
            n = {},
            $ = 0,
            ee = !1,
            te = p.autoScrollMarginTop || 40,
            oe = p.autoScrollMarginRight || 40,
            ne = p.autoScrollMarginBottom || 40,
            ie = p.autoScrollMarginLeft || 40,
            re = p.clickableTest || Qa,
            ae = 0,
            se = g._gsap || fe.core.getCache(g),
            le = (function _isFixed(e) {
                return "fixed" === Ia(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0);
            })(g),
            ce = g.ownerDocument || ve,
            de = function isTweening() {
                return Z.tween && Z.tween.isActive();
            },
            pe = function onMove(e) {
                var t,
                    o,
                    n,
                    i,
                    r,
                    a,
                    s = e;
                if (u && !Me && Z.isPressed && e) {
                    if ((t = (Z.pointerEvent = e).changedTouches)) {
                        if ((e = t[0]) !== m && e.identifier !== v) {
                            for (i = t.length; -1 < --i && (e = t[i]).identifier !== v; );
                            if (i < 0) return;
                        }
                    } else if (e.pointerId && v && e.pointerId !== v) return;
                    b &&
                    I &&
                    !O &&
                    ((Ae.x = e.pageX),
                    (Ae.y = e.pageY),
                    H && H.apply(Ae, Ae),
                    (o = Ae.x),
                    (n = Ae.y),
                    (((r = Math.abs(o - y)) !== (a = Math.abs(n - w)) && (Q < r || Q < a)) || (ke && I === O)) &&
                        ((O = a < r && q ? "x" : "y"),
                        I && O !== I && ua(me, "touchforcechange", wa),
                        !1 !== Z.vars.lockAxisOnTouchScroll && q && U && ((Z.lockedAxis = "x" === O ? "y" : "x"), V(Z.vars.onLockAxis) && Z.vars.onLockAxis.call(Z, s)),
                        ke && I === O))
                        ? ge(s)
                        : ((F = Z.allowEventDefault || (I && (!O || I === O)) || !1 === s.cancelable ? F && !1 : (wa(s), !0)), Z.autoScroll && (ee = !0), ue(e.pageX, e.pageY, l));
                } else F && e && u && wa(e);
            },
            ue = function setPointerPosition(e, t, o) {
                var n,
                    i,
                    r,
                    a,
                    s,
                    l,
                    c = 1 - Z.dragResistance,
                    d = 1 - Z.edgeResistance,
                    p = Z.pointerX,
                    u = Z.pointerY,
                    g = M,
                    h = Z.x,
                    f = Z.y,
                    m = Z.endX,
                    v = Z.endY,
                    x = Z.endRotation,
                    b = C;
                (Z.pointerX = e),
                    (Z.pointerY = t),
                    le && ((e -= Ba(ce)), (t -= Aa(ce))),
                    K
                        ? ((a = Math.atan2(P.y - t, e - P.x) * Ce), 180 < (s = Z.y - a) ? ((M -= 360), (Z.y = a)) : s < -180 && ((M += 360), (Z.y = a)), (r = Z.x !== T || Math.abs(M - a) > Q ? ((Z.y = a), T + (M - a) * c) : T))
                        : (H && ((l = e * H.a + t * H.c + H.e), (t = e * H.b + t * H.d + H.f), (e = l)),
                          (i = t - w) < Q && -Q < i && (i = 0),
                          (n = e - y) < Q && -Q < n && (n = 0),
                          (Z.lockAxis || Z.lockedAxis) &&
                              (n || i) &&
                              ((l = Z.lockedAxis) || ((Z.lockedAxis = l = q && Math.abs(n) > Math.abs(i) ? "y" : U ? "x" : null), l && V(Z.vars.onLockAxis) && Z.vars.onLockAxis.call(Z, Z.pointerEvent)),
                              "y" === l ? (i = 0) : "x" === l && (n = 0)),
                          (r = _(T + n * c)),
                          (a = _(M + i * c))),
                    (N || R || z) && (Z.x !== r || (Z.y !== a && !K))
                        ? (z && ((Ie.x = r), (Ie.y = a), (l = z(Ie)), (r = _(l.x)), (a = _(l.y))), N && (r = _(N(r))), R && (a = _(R(a))))
                        : k && (D < r ? (r = D + Math.round((r - D) * d)) : r < L && (r = L + Math.round((r - L) * d)), K || (S < a ? (a = Math.round(S + (a - S) * d)) : a < E && (a = Math.round(E + (a - E) * d)))),
                    (Z.x === r && (Z.y === a || K)) ||
                        (K ? ((Z.endRotation = Z.x = Z.endX = r), (C = !0)) : (U && ((Z.y = Z.endY = a), (C = !0)), q && ((Z.x = Z.endX = r), (C = !0))),
                        o && !1 === La(Z, "move", "onMove")
                            ? ((Z.pointerX = p), (Z.pointerY = u), (M = g), (Z.x = h), (Z.y = f), (Z.endX = m), (Z.endY = v), (Z.endRotation = x), (C = b))
                            : !Z.isDragging && Z.isPressed && ((Z.isDragging = !0), La(Z, "dragstart", "onDragStart")));
            },
            ge = function onRelease(e, t) {
                if (
                    u &&
                    Z.isPressed &&
                    (!e ||
                        null == v ||
                        t ||
                        !(
                            (e.pointerId && e.pointerId !== v) ||
                            (e.changedTouches &&
                                !(function _hasTouchID(e, t) {
                                    for (var o = e.length; o--; ) if (e[o].identifier === t) return !0;
                                })(e.changedTouches, v))
                        ))
                ) {
                    Z.isPressed = !1;
                    var o,
                        n,
                        i,
                        r,
                        a,
                        s = e,
                        l = Z.isDragging,
                        c = Z.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which),
                        d = fe.delayedCall(0.001, qi);
                    if (
                        (b ? (va(b, "touchend", onRelease), va(b, "touchmove", pe), va(b, "touchcancel", onRelease), va(ce, "touchstart", za)) : va(ce, "mousemove", pe),
                        va(me, "touchforcechange", wa),
                        (Se && b) || (va(ce, "mouseup", onRelease), e && e.target && va(e.target, "mouseup", onRelease)),
                        (C = !1),
                        x && !c)
                    )
                        return e && (va(e.target, "change", onRelease), (Z.pointerEvent = s)), Ra(J, !1), La(Z, "release", "onRelease"), La(Z, "click", "onClick"), void (x = !1);
                    if ((sa(fi), !K)) for (n = J.length; -1 < --n; ) Ha(J[n], "cursor", p.cursor || (!1 !== p.cursor ? Le : null));
                    if ((l && (($ = Ye = Xe()), (Z.isDragging = !1)), _e--, e)) {
                        if ((o = e.changedTouches) && (e = o[0]) !== m && e.identifier !== v) {
                            for (n = o.length; -1 < --n && (e = o[n]).identifier !== v; );
                            if (n < 0) return;
                        }
                        (Z.pointerEvent = s), (Z.pointerX = e.pageX), (Z.pointerY = e.pageY);
                    }
                    return (
                        c && s
                            ? (wa(s), (F = !0), La(Z, "release", "onRelease"))
                            : s && !l
                            ? ((F = !1),
                              Y && (p.snap || p.bounds) && mi(p.inertia || p.throwProps),
                              La(Z, "release", "onRelease"),
                              (ke && "touchmove" === s.type) ||
                                  -1 !== s.type.indexOf("cancel") ||
                                  (La(Z, "click", "onClick"),
                                  Xe() - ae < 300 && La(Z, "doubleclick", "onDoubleClick"),
                                  (r = s.target || g),
                                  (ae = Xe()),
                                  (a = function syntheticClick() {
                                      ae === A ||
                                          !Z.enabled() ||
                                          Z.isPressed ||
                                          s.defaultPrevented ||
                                          (r.click
                                              ? r.click()
                                              : ce.createEvent &&
                                                ((i = ce.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, me, 1, Z.pointerEvent.screenX, Z.pointerEvent.screenY, Z.pointerX, Z.pointerY, !1, !1, !1, !1, 0, null),
                                                r.dispatchEvent(i)));
                                  }),
                                  ke || s.defaultPrevented || fe.delayedCall(0.05, a)))
                            : (mi(p.inertia || p.throwProps),
                              Z.allowEventDefault || !s || (!1 === p.dragClickables && re.call(Z, s.target)) || !l || (I && (!O || I !== O)) || !1 === s.cancelable ? (F = !1) : ((F = !0), wa(s)),
                              La(Z, "release", "onRelease")),
                        de() && d.duration(Z.tween.duration()),
                        l && La(Z, "dragend", "onDragEnd"),
                        !0
                    );
                }
                F && e && u && wa(e);
            };
        return (
            (t = Draggable.get(g)) && t.kill(),
            (e.startDrag = function (e, t) {
                var o, n, i, r;
                ri(e || Z.pointerEvent, !0),
                    t &&
                        !Z.hitTest(e || Z.pointerEvent) &&
                        ((o = Ka(e || Z.pointerEvent)), (n = Ka(g)), (i = xi({ x: o.left + o.width / 2, y: o.top + o.height / 2 })), (r = xi({ x: n.left + n.width / 2, y: n.top + n.height / 2 })), (y -= i.x - r.x), (w -= i.y - r.y)),
                    Z.isDragging || ((Z.isDragging = !0), La(Z, "dragstart", "onDragStart"));
            }),
            (e.drag = pe),
            (e.endDrag = function (e) {
                return ge(e || Z.pointerEvent, !0);
            }),
            (e.timeSinceDrag = function () {
                return Z.isDragging ? 0 : (Xe() - $) / 1e3;
            }),
            (e.timeSinceClick = function () {
                return (Xe() - ae) / 1e3;
            }),
            (e.hitTest = function (e, t) {
                return Draggable.hitTest(Z.target, e, t);
            }),
            (e.getDirection = function (e, t) {
                var o,
                    n,
                    i,
                    r,
                    a,
                    s,
                    l = "velocity" === e && De ? e : W(e) && !K ? "element" : "start";
                return (
                    "element" === l && ((a = Ka(Z.target)), (s = Ka(e))),
                    (o = "start" === l ? Z.x - T : "velocity" === l ? De.getVelocity(g, d) : a.left + a.width / 2 - (s.left + s.width / 2)),
                    K
                        ? o < 0
                            ? "counter-clockwise"
                            : "clockwise"
                        : ((t = t || 2),
                          (n = "start" === l ? Z.y - M : "velocity" === l ? De.getVelocity(g, j) : a.top + a.height / 2 - (s.top + s.height / 2)),
                          (r = (i = Math.abs(o / n)) < 1 / t ? "" : o < 0 ? "left" : "right"),
                          i < t && ("" !== r && (r += "-"), (r += n < 0 ? "up" : "down")),
                          r)
                );
            }),
            (e.applyBounds = function (e, t) {
                var o, n, i, r, a, s;
                if (e && p.bounds !== e) return (p.bounds = e), Z.update(!0, t);
                if ((gi(!0), ji(), k && !de())) {
                    if (
                        ((o = Z.x),
                        (n = Z.y),
                        D < o ? (o = D) : o < L && (o = L),
                        S < n ? (n = S) : n < E && (n = E),
                        (Z.x !== o || Z.y !== n) && ((i = !0), (Z.x = Z.endX = o), K ? (Z.endRotation = o) : (Z.y = Z.endY = n), fi((C = !0)), Z.autoScroll && !Z.isDragging))
                    )
                        for (
                            Ga(g.parentNode),
                                r = g,
                                Oe.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != ce.documentElement.scrollTop ? ce.documentElement.scrollTop : ce.body.scrollTop,
                                Oe.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != ce.documentElement.scrollLeft ? ce.documentElement.scrollLeft : ce.body.scrollLeft;
                            r && !s;

                        )
                            (a = (s = Be(r.parentNode)) ? Oe : r.parentNode), U && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY), q && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX), (r = a);
                    Z.isThrowing && (i || Z.endX > D || Z.endX < L || Z.endY > S || Z.endY < E) && mi(p.inertia || p.throwProps, i);
                }
                return Z;
            }),
            (e.update = function (e, t, o) {
                var n = Z.x,
                    i = Z.y;
                return (
                    ni(!t),
                    e ? Z.applyBounds() : (C && o && fi(!0), gi(!0)),
                    t && (ue(Z.pointerX, Z.pointerY), C && fi(!0)),
                    Z.isPressed && !t && ((q && 0.01 < Math.abs(n - Z.x)) || (U && 0.01 < Math.abs(i - Z.y) && !K)) && oi(),
                    Z.autoScroll && (Ga(g.parentNode, Z.isDragging), (ee = Z.isDragging), fi(!0), Da(g, vi), Ca(g, vi)),
                    Z
                );
            }),
            (e.enable = function (e) {
                var t,
                    o,
                    n,
                    i = { lazy: !0 };
                if (
                    (K || !1 === p.cursor || (i.cursor = p.cursor || Le),
                    fe.utils.checkPrefix("touchCallout") && (i.touchCallout = "none"),
                    (i.touchAction = q == U ? "none" : p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : q ? "pan-y" : "pan-x"),
                    "soft" !== e)
                ) {
                    for (o = J.length; -1 < --o; )
                        (n = J[o]),
                            Se || ua(n, "mousedown", ri),
                            ua(n, "touchstart", ri),
                            ua(n, "click", wi, !0),
                            fe.set(n, i),
                            n.getBBox && n.ownerSVGElement && fe.set(n.ownerSVGElement, { touchAction: q == U ? "none" : p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : q ? "pan-y" : "pan-x" }),
                            p.allowContextMenu || ua(n, "contextmenu", ei);
                    Ra(J, !1);
                }
                return (
                    Ca(g, vi),
                    (u = !0),
                    De && "soft" !== e && De.track(h || g, G ? "x,y" : K ? "rotation" : "top,left"),
                    (g._gsDragID = t = "d" + He++),
                    (ze[t] = Z),
                    h && (h.enable(), (h.element._gsDragID = t)),
                    (p.bounds || K) && oi(),
                    p.bounds && Z.applyBounds(),
                    Z
                );
            }),
            (e.disable = function (e) {
                var t,
                    o,
                    n = Z.isDragging;
                if (!K) for (t = J.length; -1 < --t; ) Ha(J[t], "cursor", null);
                if ("soft" !== e) {
                    for (t = J.length; -1 < --t; ) (o = J[t]), Ha(o, "touchCallout", null), Ha(o, "touchAction", null), va(o, "mousedown", ri), va(o, "touchstart", ri), va(o, "click", wi), va(o, "contextmenu", ei);
                    Ra(J, !0), b && (va(b, "touchcancel", ge), va(b, "touchend", ge), va(b, "touchmove", pe)), va(ce, "mouseup", ge), va(ce, "mousemove", pe);
                }
                return Da(g, vi), (u = !1), De && "soft" !== e && De.untrack(h || g, G ? "x,y" : K ? "rotation" : "top,left"), h && h.disable(), sa(fi), (Z.isDragging = Z.isPressed = x = !1), n && La(Z, "dragend", "onDragEnd"), Z;
            }),
            (e.enabled = function (e, t) {
                return arguments.length ? (e ? Z.enable(t) : Z.disable(t)) : u;
            }),
            (e.kill = function () {
                return (Z.isThrowing = !1), Z.tween && Z.tween.kill(), Z.disable(), fe.set(J, { clearProps: "userSelect" }), delete ze[g._gsDragID], Z;
            }),
            ~o.indexOf("scroll") &&
                ((h = e.scrollProxy = new Va(
                    g,
                    (function _extend(e, t) {
                        for (var o in t) o in e || (e[o] = t[o]);
                        return e;
                    })(
                        {
                            onKill: function onKill() {
                                Z.isPressed && ge(null);
                            },
                        },
                        p
                    )
                )),
                (g.style.overflowY = U && !we ? "auto" : "hidden"),
                (g.style.overflowX = q && !we ? "auto" : "hidden"),
                (g = h.content)),
            K ? (n.rotation = 1) : (q && (n[d] = 1), U && (n[j] = 1)),
            (se.force3D = !("force3D" in p) || p.force3D),
            e.enable(),
            e
        );
    }
    !(function _setDefaults(e, t) {
        for (var o in t) o in e || (e[o] = t[o]);
    })(K.prototype, { pointerX: 0, pointerY: 0, startX: 0, startY: 0, deltaX: 0, deltaY: 0, isDragging: !1, isPressed: !1 }),
        (K.zIndex = 1e3),
        (K.version = "3.5.2"),
        U() && fe.registerPlugin(K);
    function mb() {
        return "undefined" != typeof window;
    }
    function nb() {
        return j || (mb() && (j = window.gsap) && j.registerPlugin && j);
    }
    function ob(e) {
        return "string" == typeof e;
    }
    function pb(e) {
        return "function" == typeof e;
    }
    function rb(e) {
        return void 0 === e;
    }
    function ub() {
        return String.fromCharCode.apply(null, arguments);
    }
    function Db(e, t, o) {
        var n = Q.createElementNS ? Q.createElementNS("svg" === e ? ce : de, e) : Q.createElement(e);
        return t && (ob(t) && (t = Q.querySelector(t)), t.appendChild(n)), "svg" === e && (n.setAttribute("xmlns", ce), n.setAttribute("xmlns:xlink", de)), o && (n.style.cssText = o), n;
    }
    function Eb() {
        Q.selection ? Q.selection.empty() : A.getSelection && A.getSelection().removeAllRanges();
    }
    function Gb(e, t) {
        var o = 0,
            n = Math.max(0, e._repeat),
            i = e._first;
        for (i || (o = e.duration()); i; ) (o = Math.max(o, 999 < i.totalDuration() ? i.endTime(!1) : i._start + i._tDur / i._ts)), (i = i._next);
        return !t && n ? o * (n + 1) + e._rDelay * n : o;
    }
    function Ib(e, t, o, n) {
        var i, r, a;
        return (
            ob(e) &&
                ("=" === e.charAt(1)
                    ? ((i = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === n && (n = 100), (e = (n / 100) * t.duration() + i))
                    : isNaN(e) && t.labels && -1 !== t.labels[e]
                    ? (e = t.labels[e])
                    : t === J &&
                      (0 < (r = e.indexOf("=")) ? ((i = parseInt(e.charAt(r - 1) + "1", 10) * parseFloat(e.substr(r + 1))), (e = e.substr(0, r - 1))) : (i = 0),
                      (a = j.getById(e)) &&
                          (e =
                              (function _globalizeTime(e, t) {
                                  for (var o = e, n = 1 < arguments.length ? +t : o.rawTime(); o; ) (n = o._start + n / (o._ts || 1)), (o = o.parent);
                                  return n;
                              })(a, (o / 100) * a.duration()) + i))),
            (e = isNaN(e) ? o : parseFloat(e)),
            Math.min(100, Math.max(0, (e / t.duration()) * 100))
        );
    }
    function Mb(t, e, o, n) {
        var i, r;
        if ((("mousedown" !== e && "mouseup" !== e) || (t.style.cursor = "pointer"), "mousedown" === e && (r = rb(t.onpointerdown) ? (rb(t.ontouchstart) ? null : "touchstart") : "pointerdown")))
            return (
                (i = function handler(e) {
                    "select" !== e.target.nodeName.toLowerCase() && e.type === r ? (e.stopPropagation(), We && (e.preventDefault(), o.call(t, e))) : e.type !== r && o.call(t, e), (We = !0);
                }),
                t.addEventListener(r, i, n),
                void ("pointerdown" !== r && t.addEventListener(e, i, n))
            );
        t.addEventListener(e, o, n);
    }
    function Nb(e, t, o) {
        e.removeEventListener(t, o), (t = "mousedown" !== t ? null : rb(e.onpointerdown) ? (rb(e.ontouchstart) ? null : "touchstart") : "pointerdown") && e.removeEventListener(t, o);
    }
    function Ob(e, t, o, n) {
        var i,
            r = e.options,
            a = r.length;
        for (t += ""; -1 < --a; ) if (r[a].innerHTML === t || r[a].value === t) return (e.selectedIndex = a), (o.innerHTML = r[a].innerHTML), r[a];
        n && ((i = Db("option", e)).setAttribute("value", t), (i.innerHTML = o.innerHTML = ob(n) ? n : t), (e.selectedIndex = r.length - 1));
    }
    function Pb(e, t, o) {
        var n = e.options,
            i = Math.min(n.length - 1, Math.max(0, e.selectedIndex + t));
        return (e.selectedIndex = i), o && (o.innerHTML = n[i].innerHTML), n[i].value;
    }
    function Qb() {
        var e,
            t,
            o,
            n = F._first;
        if (te) {
            for (e = J._dur; n; ) (t = n._next), (o = n._targets && n._targets[0]), (pb(o) && o === n.vars.onComplete && !n._dur) || (o && o._gsIgnore) || J.add(n, n._start - n._delay), (n = t);
            return e !== J.duration();
        }
    }
    function Tb(e) {
        return j.getById(e) || ne.getById(e) || (e === J.vars.id && J);
    }
    function Ub(e) {
        (j = e || nb()),
            q ||
                (j &&
                    mb() &&
                    ((Q = document),
                    (Z = Q.documentElement),
                    (A = window),
                    j.registerPlugin(K),
                    ((F = j.globalTimeline)._sort = !0),
                    (F.autoRemoveChildren = !1),
                    ($ = j.core.Animation),
                    (ne = j.timeline({ data: "indy", autoRemoveChildren: !0, smoothChildTiming: !0 })).kill(),
                    (ne._dp = 0),
                    ne.to({}, { duration: 1e12 }),
                    (J = j.timeline({ data: "root", id: "Global Timeline", autoRemoveChildren: !1, smoothChildTiming: !0, parent: ne })),
                    (ee = j.to(J, { duration: 1, time: 1, ease: "none", data: "root", id: "_rootTween", paused: !0, immediateRender: !1, parent: ne })),
                    (F.killTweensOf = function (e, t, o) {
                        J.killTweensOf(e, t, o), J.killTweensOf.call(F, e, t, o);
                    }),
                    (ne._start = j.ticker.time),
                    j.ticker.add(function (e) {
                        return ne.render(e - ne._start);
                    }),
                    (F._start += F._time),
                    (J._start = F._time = F._tTime = 0),
                    (ie = function _delayedCall(e, t, o, n) {
                        return j.to(t, { delay: e, duration: 0, onComplete: t, onReverseComplete: t, onCompleteParams: o, onReverseCompleteParams: o, callbackScope: n, parent: ne });
                    })(0.01, function () {
                        return te ? te.update() : Qb();
                    }),
                    ie(2, function () {
                        var e, t, o;
                        if (!te) for (Qb(), e = J._first, o = J._start; e; ) (t = e._next), e._tDur !== e._tTime || (!e._dur && 1 !== e.progress()) ? F.add(e, e._start - e._delay + o) : e.kill(), (e = t);
                        2 < Ge.globalRecordingTime
                            ? ie(Ge.globalRecordingTime - 2, function () {
                                  te && te.update(), (F.autoRemoveChildren = !0);
                              })
                            : (F.autoRemoveChildren = !0),
                            (ae = !1);
                    }),
                    (q = 1)));
    }
    function Vb(e, t) {
        t.globalSync || e.parent === F || F.add(e, F.time());
    }
    var j,
        q,
        Q,
        Z,
        A,
        J,
        $,
        ee,
        te,
        oe,
        F,
        ne,
        ie,
        re,
        ae = !0,
        se = 0,
        G = "GSDevTools",
        le = ub(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        ce =
            ((function (e) {return true})(window ? window.location.host : ""),
            "http://www.w3.org/2000/svg"),
        de = "http://www.w3.org/1999/xhtml",
        pe = 0,
        ue = {},
        ge = (function () {
            try {
                return sessionStorage.setItem("gsTest", "1"), sessionStorage.removeItem("gsTest"), !0;
            } catch (e) {
                return !1;
            }
        })(),
        We = !0,
        Ge = function GSDevTools(r) {
            q || (Ub(), j || console.warn("Please gsap.registerPlugin(GSDevTools)")),
                (this.vars = r = r || {}),
                r.animation &&
                    (
                        GSDevTools.getByAnimation(r.animation) || {
                            kill: function kill() {
                                return 0;
                            },
                        }
                    ).kill(),
                (r.id = r.id || (ob(r.animation) ? r.animation : pe++)),
                (ue[r.id + ""] = this),
                "globalSync" in r || (r.globalSync = !r.animation);
            function Ln(e) {
                return n.querySelector(e);
            }
            function Mn(e, t) {
                return !1 !== r.persist && ge && sessionStorage.setItem("gs-dev-" + e + r.id, t), t;
            }
            function Nn(e) {
                var t;
                if (!1 !== r.persist && ge) return (t = sessionStorage.getItem("gs-dev-" + e + r.id)), "animation" === e ? t : "loop" === e ? "true" === t : parseFloat(t);
            }
            function to(c, d, p) {
                return function (e) {
                    var t,
                        o = b.getBoundingClientRect(),
                        n = c.getBoundingClientRect(),
                        i = n.width * d,
                        r = j.getProperty(c, "x"),
                        a = o.left - n.left - i + r,
                        s = o.right - n.right + (n.width - i) + r,
                        l = a;
                    p && (c !== M && (t = M.getBoundingClientRect()).left && (a += t.left + t.width - o.left), c !== k && (t = k.getBoundingClientRect()).left && (s -= o.left + o.width - t.left)),
                        (m = P),
                        this.applyBounds({ minX: a, maxX: s }),
                        (u = v.duration() / o.width),
                        (g = -l * u),
                        f ? v.pause() : v.pause(g + u * this.x),
                        this.target === x && (this.activated && (this.allowEventDefault = !1), (this.activated = !0)),
                        (h = !0);
                };
            }
            function vo() {
                (D = 0), (L = 100), (M.style.left = "0%"), (k.style.left = "100%"), Mn("in", D), Mn("out", L), I(!0);
            }
            function zo(e) {
                if (!z.isPressed) {
                    var t = e.target.getBoundingClientRect(),
                        o = (((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width) * 100;
                    if (o < D) return (D = o = Math.max(0, o)), (M.style.left = D + "%"), void H.startDrag(e);
                    if (L < o) return (L = o = Math.min(100, o)), (k.style.left = L + "%"), void Y.startDrag(e);
                    v.progress(o / 100).pause(), I(!0), z.startDrag(e);
                }
            }
            function Do() {
                if (!z.isPressed) {
                    Vb(v, r);
                    var e = v._targets && v._targets[0];
                    e === i && e.seek(s + ((l - s) * D) / 100), v.progress(D / 100, !0), P || v.resume();
                }
            }
            function Eo(e) {
                if ((Mn("loop", (d = e)), d)) {
                    if ((N.play(), v.progress() >= L / 100)) {
                        var t = v._targets && v._targets[0];
                        t === i && t.seek(s + ((l - s) * D) / 100), i._repeat && !D && 100 === L ? v.totalProgress(0, !0) : v.progress(D / 100, !0), O();
                    }
                } else N.reverse();
            }
            function Fo() {
                return Eo(!d);
            }
            function Go() {
                var e,
                    t,
                    o = (function _getChildrenOf(e, t) {
                        for (var o = [], n = 0, i = j.core.Tween, r = e._first; r; ) r instanceof i ? r.vars.id && (o[n++] = r) : (t && r.vars.id && (o[n++] = r), (n = (o = o.concat(_getChildrenOf(r, t))).length)), (r = r._next);
                        return o;
                    })(a && !r.globalSync ? a : J, !0),
                    n = S.children,
                    i = 0;
                for (a && !r.globalSync ? o.unshift(a) : r.hideGlobalTimeline || o.unshift(J), t = 0; t < o.length; t++)
                    ((e = n[t] || Db("option", S)).animation = o[t]),
                        (i = t && o[t].vars.id === o[t - 1].vars.id ? i + 1 : 0),
                        e.setAttribute("value", (e.innerHTML = o[t].vars.id + (i ? " [" + i + "]" : o[t + 1] && o[t + 1].vars.id === o[t].vars.id ? " [0]" : "")));
                for (; t < n.length; t++) S.removeChild(n[t]);
            }
            function Ho(e) {
                var t,
                    o,
                    n = parseFloat(X.options[X.selectedIndex].value) || 1;
                if (!arguments.length) return i;
                if ((ob(e) && (e = Tb(e)), e instanceof $ || console.warn("GSDevTools error: invalid animation."), e !== i)) {
                    if (
                        (i && ((i._inProgress = D), (i._outProgress = L)),
                        (i = e),
                        v && ((n = v.timeScale()), v._targets && v._targets[0] === a && (a.resume(), v.kill())),
                        (D = i._inProgress || 0),
                        (L = i._outProgress || 100),
                        (M.style.left = D + "%"),
                        (k.style.left = L + "%"),
                        c && (Mn("animation", i.vars.id), Mn("in", D), Mn("out", L)),
                        (s = 0),
                        (o = r.maxDuration || Math.min(1e3, Gb(i))),
                        i === J || r.globalSync)
                    ) {
                        if ((Qb(), (v = ee), te && te !== p && console.warn("Error: GSDevTools can only have one instance that's globally synchronized."), (te = p), i !== J))
                            for (99999999 < (l = (t = i).totalDuration()) && (l = t.duration()); t.parent.parent; ) (s = s / t._ts + t._start), (l = l / t._ts + t._start), (t = t.parent);
                        else l = J.duration();
                        o < l - s && (l = s + o),
                            J.pause(s),
                            (ee.vars.time = l),
                            ee.invalidate(),
                            ee.duration(l - s).timeScale(n),
                            P
                                ? ee.progress(1).pause(0)
                                : ie(0.01, function () {
                                      ee.resume().progress(D / 100), P && O();
                                  });
                    } else {
                        if ((te === p && (te = null), i !== a && a)) {
                            for (99999999 < (l = (t = i).totalDuration()) && (l = t.duration()); t.parent.parent && t !== a; ) (s = s / (t._ts || t._pauseTS) + t._start), (l = l / (t._ts || t._pauseTS) + t._start), (t = t.parent);
                            o < l - s && (l = s + o), a.pause(s), (v = j.to(a, { duration: l - s, time: l, ease: "none", data: "root", parent: ne }));
                        } else (v = i), !d && v._repeat && Eo(!0);
                        v.timeScale(n), ee.pause(), J.resume(), v.seek(0);
                    }
                    (T.innerHTML = v.duration().toFixed(2)), Ob(S, i.vars.id, E);
                }
            }
            function Jo(e) {
                Ho(S.options[S.selectedIndex].animation), e.target && e.target.blur && e.target.blur(), P && O();
            }
            function Ko() {
                var e,
                    t = parseFloat(X.options[X.selectedIndex].value) || 1;
                v.timeScale(t),
                    Mn("timeScale", t),
                    P ||
                        (v.progress() >= L / 100 ? ((e = v._targets && v._targets[0]) === i && e.seek(s + ((l - s) * D) / 100), v.progress(D / 100, !0).pause()) : v.pause(),
                        ie(0.01, function () {
                            return v.resume();
                        })),
                    (R.innerHTML = t + "x"),
                    X.blur && X.blur();
            }
            function No(e) {
                K.hitTest(e, n) || z.isDragging || H.isDragging || Y.isDragging || G.restart(!0);
            }
            function Oo() {
                W || (F.play(), G.pause(), (W = !0));
            }
            function Po() {
                G.pause(), W && (F.reverse(), (W = !1));
            }
            function So(e) {
                ae && !se && (se = J._start),
                    (c = !e),
                    (a = (function _parseAnimation(e) {
                        return e instanceof $ ? e : e ? j.getById(e) : null;
                    })(r.animation)) &&
                        !a.vars.id &&
                        (a.vars.id = "[no id]"),
                    Qb(),
                    Go();
                var t = Tb(Nn("animation"));
                t && ((t._inProgress = Nn("in") || 0), (t._outProgress = Nn("out") || 100)), r.paused && B(), (i = null), Ho(a || t || J);
                var o = r.timeScale || Nn("timeScale"),
                    n = t === i;
                o && (Ob(X, o, R, o + "x"), v.timeScale(o)),
                    100 === (D = ("inTime" in r ? Ib(r.inTime, i, 0, 0) : n ? t._inProgress : 0) || 0) && !r.animation && t && (Ho(J), (D = Ib(r.inTime, i, 0, 0) || 0)),
                    D && ((M.style.left = D + "%"), (M.style.display = k.style.display = "block")),
                    (L = ("outTime" in r ? Ib(r.outTime, i, 100, D) : n ? t._outProgress : 0) || 100) < D && (L = 100),
                    100 !== L && ((k.style.left = L + "%"), (M.style.display = k.style.display = "block")),
                    (d = "loop" in r ? r.loop : Nn("loop")) && Eo(!0),
                    r.paused && v.progress(D / 100, !0).pause(),
                    ae && i === J && se && r.globalSync && !P && v.time(-se, !0),
                    I(!0);
            }
            var u,
                g,
                h,
                f,
                m,
                i,
                v,
                a,
                s,
                l,
                c,
                e,
                d,
                p = this,
                n = (function _createRootElement(e, t, o) {
                    re ||
                        ((Db("style", Z).innerHTML =
                            ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}"),
                        (re = !0)),
                        ob(e) && (e = Q.querySelector(e));
                    var n = Db("div", e || Z.getElementsByTagName("body")[0] || Z);
                    return (
                        n.setAttribute("class", "gs-dev-tools" + (t ? " minimal" : "")),
                        (n.innerHTML =
                            '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg> <svg class=out-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span> <svg class=select-arrow viewBox="0 0 12.05 6.73"xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38"xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg> <svg class=play-pause viewBox="0 0 20.97 25.67"xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88"class="gs-btn-white play-1"style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85"class="gs-btn-white play-2"style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38"xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67"xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/v3/Plugins/GSDevTools?source=GSDevTools"target=_blank title=Docs><svg class=logo viewBox="0 0 100 100"xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z"style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z"style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z"style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>'),
                        e && ((n.style.position = "absolute"), (n.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)")),
                        o &&
                            (ob(o)
                                ? (n.style.cssText = o)
                                : (function _isObject(e) {
                                      return "object" == typeof e;
                                  })(o) && ((o.data = "root"), j.set(n, o).kill()),
                            n.style.top && (n.style.bottom = "auto"),
                            n.style.width && j.set(n, { xPercent: -50, left: "50%", right: "auto", data: "root" }).kill()),
                        !t && n.offsetWidth < 600 && (n.setAttribute("class", "gs-dev-tools minimal"), e && (n.style.top = "calc(100% - 42px)")),
                        n
                    );
                })(r.container, r.minimal, r.css),
                x = Ln(".playhead"),
                b = Ln(".timeline-track"),
                y = Ln(".progress-bar"),
                w = Ln(".time"),
                T = Ln(".duration"),
                _ = 0,
                M = Ln(".in-point"),
                k = Ln(".out-point"),
                D = 0,
                L = 100,
                S = Ln(".animation-list"),
                E = Ln(".animation-label"),
                t = Ln(".play-pause"),
                o = (function _buildPlayPauseMorph(e) {
                    var t = j.timeline({
                        data: "root",
                        parent: ne,
                        onComplete: function onComplete() {
                            return t.kill();
                        },
                    });
                    return (
                        t
                            .to(e.querySelector(".play-1"), {
                                duration: 0.4,
                                attr: { d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12" },
                                ease: "power2.inOut",
                                rotation: 360,
                                transformOrigin: "50% 50%",
                            })
                            .to(
                                e.querySelector(".play-2"),
                                {
                                    duration: 0.4,
                                    attr: { d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12" },
                                    ease: "power2.inOut",
                                    rotation: 360,
                                    transformOrigin: "50% 50%",
                                },
                                0.05
                            ),
                        t
                    );
                })(t),
                P = !1,
                C = Ln(".loop"),
                N = (function _buildLoopAnimation(e) {
                    var t = j.timeline({
                        data: "root",
                        id: "loop",
                        parent: ne,
                        paused: !0,
                        onComplete: function onComplete() {
                            return t.kill();
                        },
                    });
                    return t.to(e, { duration: 0.5, rotation: 360, ease: "power3.inOut", transformOrigin: "50% 50%" }).to(e.querySelectorAll(".loop-path"), { duration: 0.5, fill: "#91e600", ease: "none" }, 0), t;
                })(C),
                X = Ln(".time-scale select"),
                R = Ln(".time-scale-label"),
                z = K.create(x, {
                    type: "x",
                    cursor: "ew-resize",
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    onPress: to(x, 0.5, !0),
                    onDrag: function onDrag() {
                        var e = g + u * this.x;
                        e < 0 ? (e = 0) : e > v._dur && (e = v._dur), f || v.time(e), (y.style.width = Math.min(L - D, Math.max(0, (e / v._dur) * 100 - D)) + "%"), (w.innerHTML = e.toFixed(2));
                    },
                    onRelease: function onRelease() {
                        P || v.resume();
                    },
                })[0],
                H = K.create(M, {
                    type: "x",
                    cursor: "ew-resize",
                    zIndexBoost: !1,
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    onPress: to(M, 1, !0),
                    onDoubleClick: vo,
                    onDrag: function onDrag() {
                        (D = ((g + u * this.x) / v.duration()) * 100), v.progress(D / 100), I(!0);
                    },
                    onRelease: function onRelease() {
                        D < 0 && (D = 0), Eb(), (M.style.left = D + "%"), Mn("in", D), j.set(M, { x: 0, data: "root", display: "block" }), P || v.resume();
                    },
                })[0],
                Y = K.create(k, {
                    type: "x",
                    cursor: "ew-resize",
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    zIndexBoost: !1,
                    onPress: to(k, 0, !0),
                    onDoubleClick: vo,
                    onDrag: function onDrag() {
                        (L = ((g + u * this.x) / v.duration()) * 100), v.progress(L / 100), I(!0);
                    },
                    onRelease: function onRelease() {
                        100 < L && (L = 100), Eb(), (k.style.left = L + "%"), Mn("out", L), j.set(k, { x: 0, data: "root", display: "block" }), m || (O(), v.resume());
                    },
                })[0],
                I = function updateProgress(e) {
                    if (!z.isPressed || !0 === e) {
                        var t,
                            o = d || -1 !== i._repeat ? 100 * v.progress() || 0 : (i.totalTime() / i.duration()) * 100,
                            n = i._repeat && i._rDelay && i.totalTime() % (i.duration() + i._rDelay) > i.duration();
                        100 < o && (o = 100),
                            L <= o
                                ? !d || v.paused() || z.isDragging
                                    ? ((o === L && -1 !== i._repeat) || ((o = L), v.progress(o / 100)), !P && (L < 100 || 1 === i.totalProgress() || -1 === i._repeat) && B())
                                    : n ||
                                      ((o = D),
                                      (t = v._targets && v._targets[0]) === i && t.seek(s + ((l - s) * D) / 100),
                                      0 < i._repeat && !D && 100 === L ? 1 === i.totalProgress() && v.totalProgress(0, !0).resume() : v.progress(o / 100, !0).resume())
                                : o < D && ((o = D), v.progress(o / 100, !0)),
                            (o === _ && !0 !== e) ||
                                ((y.style.left = D + "%"),
                                (y.style.width = Math.max(0, o - D) + "%"),
                                (x.style.left = o + "%"),
                                (w.innerHTML = v._time.toFixed(2)),
                                (T.innerHTML = v._dur.toFixed(2)),
                                h && ((x.style.transform = "translate(-50%,0)"), (x._gsap.x = "0px"), (x._gsap.xPercent = -50), (h = !1)),
                                (_ = o)),
                            v.paused() !== P && A();
                    }
                },
                O = function play() {
                    if (v.progress() >= L / 100) {
                        Vb(v, r);
                        var e = v._targets && v._targets[0];
                        e === i && e.seek(s + ((l - s) * D) / 100), v._repeat && !D ? v.totalProgress(0, !0) : v.reversed() || v.progress(D / 100, !0);
                    }
                    o.play(), v.resume(), P && p.update(), (P = !1);
                },
                B = function pause() {
                    o.reverse(), v && v.pause(), (P = !0);
                },
                A = function togglePlayPause() {
                    (P ? O : B)();
                },
                F = j.to([Ln(".gs-bottom"), Ln(".gs-top")], { duration: 0.3, autoAlpha: 0, y: 50, ease: "power2.in", data: "root", paused: !0, parent: ne }),
                W = !1,
                G = ie(1.3, Oo).pause();
            Mb(S, "change", Jo),
                Mb(S, "mousedown", Go),
                Mb(t, "mousedown", A),
                Mb(Ln(".seek-bar"), "mousedown", zo),
                Mb(Ln(".rewind"), "mousedown", Do),
                Mb(C, "mousedown", Fo),
                Mb(X, "change", Ko),
                "auto" === r.visibility ? (Mb(n, "mouseout", No), Mb(n, "mouseover", Po)) : "hidden" === r.visibility && ((W = !0), F.progress(1)),
                !1 !== r.keyboard &&
                    (oe && r.keyboard
                        ? console.warn("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.")
                        : ((oe = p),
                          Mb(
                              Z,
                              "keydown",
                              (e = function keyboardHandler(e) {
                                  var t,
                                      o = e.keyCode ? e.keyCode : e.which;
                                  32 === o
                                      ? A()
                                      : 38 === o
                                      ? ((t = parseFloat(Pb(X, -1, R))), v.timeScale(t), Mn("timeScale", t))
                                      : 40 === o
                                      ? ((t = parseFloat(Pb(X, 1, R))), v.timeScale(t), Mn("timeScale", t))
                                      : 37 === o
                                      ? Do()
                                      : 39 === o
                                      ? v.progress(L / 100)
                                      : 76 === o
                                      ? Fo()
                                      : 72 === o
                                      ? (function toggleHide() {
                                            (W ? Po : Oo)();
                                        })()
                                      : 73 === o
                                      ? ((D = 100 * v.progress()), Mn("in", D), (M.style.left = D + "%"), I(!0))
                                      : 79 === o && ((L = 100 * v.progress()), Mn("out", L), (k.style.left = L + "%"), I(!0));
                              })
                          ))),
                j.set(x, { xPercent: -50, x: 0, data: "root" }),
                j.set(M, { xPercent: -100, x: 0, data: "root" }),
                (M._gsIgnore = k._gsIgnore = x._gsIgnore = t._gsIgnore = C._gsIgnore = !0),
                j.killTweensOf([M, k, x]),
                So(ae),
                ae && ie(1e-4, So, [!1], this),
                j.ticker.add(I),
                (this.update = function (e) {
                    te === p &&
                        ((ee.paused() && !e) || Qb(),
                        (function updateRootDuration() {
                            var e, t, o;
                            i === J &&
                                ((e = J._time),
                                J.progress(1, !0).time(e, !0),
                                (e = (ee._dp._time - ee._start) * ee._ts),
                                1e3 === (o = Math.min(1e3, J.duration())) && (o = Math.min(1e3, Gb(J))),
                                1 != (t = ee.duration() / o) &&
                                    o &&
                                    ((D *= t), L < 100 && (L *= t), ee.seek(0), (ee.vars.time = o), ee.invalidate(), ee.duration(o), ee.time(e), (T.innerHTML = o.toFixed(2)), (M.style.left = D + "%"), (k.style.left = L + "%"), I(!0)));
                        })());
                }),
                (this.kill = function () {
                    Nb(S, "change", Jo),
                        Nb(S, "mousedown", Go),
                        Nb(t, "mousedown", A),
                        Nb(Ln(".seek-bar"), "mousedown", zo),
                        Nb(Ln(".rewind"), "mousedown", Do),
                        Nb(C, "mousedown", Fo),
                        Nb(X, "change", Ko),
                        z.disable(),
                        H.disable(),
                        Y.disable(),
                        j.ticker.remove(I),
                        Nb(n, "mouseout", No),
                        Nb(n, "mouseover", Po),
                        Nb(Z, "keydown", e),
                        n.parentNode.removeChild(n),
                        te === p && (te = null),
                        delete ue[r.id + ""];
                }),
                (this.minimal = function (e) {
                    var t,
                        o = n.classList.contains("minimal");
                    if (!arguments.length || o === e) return o;
                    e ? n.classList.add("minimal") : n.classList.remove("minimal"),
                        r.container && (n.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"),
                        z.isPressed &&
                            ((f = !0),
                            z.endDrag(z.pointerEvent),
                            (f = !1),
                            (t = 100 * v.progress()),
                            (y.style.width = Math.max(0, t - D) + "%"),
                            (x.style.left = t + "%"),
                            (x.style.transform = "translate(-50%,0)"),
                            (x._gsap.x = "0px"),
                            (x._gsap.xPercent = -50),
                            z.startDrag(z.pointerEvent, !0));
                }),
                (this.animation = Ho),
                (this.updateList = Go);
        };
    (Ge.version = "3.5.2"),
        (Ge.globalRecordingTime = 2),
        (Ge.getById = function (e) {
            return e ? ue[e] : te;
        }),
        (Ge.getByAnimation = function (e) {
            for (var t in (ob(e) && (e = j.getById(e)), ue)) if (ue[t].animation() === e) return ue[t];
        }),
        (Ge.create = function (e) {
            return new Ge(e);
        }),
        (Ge.register = Ub),
        nb() && j.registerPlugin(Ge),
        (e.GSDevTools = Ge),
        (e.default = Ge);
    if (typeof window === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
    } else {
        delete e.default;
    }
});
