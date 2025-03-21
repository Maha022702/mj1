(() => {
    "use strict";
    var s, d, l, n = {
            853: (e, t, n) => {
                function x(e) {
                    return function(e) {
                        if (Array.isArray(e)) return r(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || c(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function j(e, t) {
                    var n, r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!r) {
                        if (Array.isArray(e) || (r = c(e)) || t && e && "number" == typeof e.length) return r && (e = r), n = 0, {
                            s: t = function() {},
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: t
                        };
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, o = !0,
                        i = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            i = !0, a = e
                        },
                        f: function() {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                    }
                }

                function c(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }

                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                n.d(t, {
                    pn: () => function(e) {
                        if (!a(e)) return !1;
                        var t = "0" === o(e, "opacity"),
                            n = "none" === o(e, "display"),
                            r = "hidden" === o(e, "visibility");
                        return !(t || n || r) && i(e)
                    },
                    tb: () => function(e) {
                        for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = 2 < arguments.length ? arguments[2] : void 0, r = e.cloneNode(!0), a = e.querySelectorAll("*"), o = r.querySelectorAll("*"), i = 0; i < a.length; i++) o[i].setAttribute("style", n.getComputedStyle(a[i]).cssText);
                        var c, l = j(r.querySelectorAll("script, style, noscript, code"));
                        try {
                            for (l.s(); !(c = l.n()).done;) c.value.remove()
                        } catch (e) {
                            l.e(e)
                        } finally {
                            l.f()
                        }
                        var u, s = j(r.querySelectorAll("br"));
                        try {
                            for (s.s(); !(u = s.n()).done;) {
                                var d = u.value;
                                d.outerHTML = d.nextSibling && d.nextSibling.nodeValue && d.nextSibling.nodeValue.trim().length ? " " : "\n"
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        var f, p = j(r.querySelectorAll('img[alt]:not([alt=""])'));
                        try {
                            for (p.s(); !(f = p.n()).done;) {
                                var h = f.value;
                                h.outerHTML = "\n" + h.alt + "\n"
                            }
                        } catch (e) {
                            p.e(e)
                        } finally {
                            p.f()
                        }
                        var v, g = j(r.querySelectorAll("a"));
                        try {
                            for (g.s(); !(v = g.n()).done;) {
                                var y = v.value,
                                    m = y.style.display.toLowerCase();
                                "block" != m && -1 == m.indexOf("flex") && -1 == m.indexOf("grid") || x(y.childNodes).filter(function(e) {
                                    return "#text" != e.nodeName
                                }).length || (y.innerHTML = "\n\n" + y.innerHTML)
                            }
                        } catch (e) {
                            g.e(e)
                        } finally {
                            g.f()
                        }
                        var b, T = j(r.querySelectorAll("*"));
                        try {
                            for (T.s(); !(b = T.n()).done;) {
                                var w = b.value;
                                if (-1 != w.style.display.toLowerCase().indexOf("flex")) {
                                    var S, O = j(w.children);
                                    try {
                                        for (O.s(); !(S = O.n()).done;) {
                                            var L = S.value;
                                            L.innerHTML = "\n\n" + L.innerHTML
                                        }
                                    } catch (e) {
                                        O.e(e)
                                    } finally {
                                        O.f()
                                    }
                                }
                            }
                        } catch (e) {
                            T.e(e)
                        } finally {
                            T.f()
                        }
                        r.innerHTML = r.innerHTML.replace(/></g, "> <"), r.innerHTML = r.innerHTML.replace(/<h([1-6])(.+?)<\/h\1>/g, "\n<h$1$2</h1>\n");
                        e = (r.innerText || r.textContent || "").replace(/(\s{2,})([A-Z0-9])/g, "$1\n$2").replace(/\s{3,}/g, "\n").replace(/\n.{1,3}\n/g, "\n").replace(/ {2,}/g, " ").replace(/^\s(.+)$/gm, "$1"); {
                            if (t.removeDuplicates) return r = x(new Set(e.split("\n"))), t.returnAsArray ? r : r.join("\n");
                            if (t.returnAsArray) return e.split("\n")
                        }
                        return e.trim()
                    }
                });
                var o = function(e, t) {
                        e = window.getComputedStyle ? document.defaultView.getComputedStyle(e, null) : e.currentStyle;
                        return t ? e[t] : e
                    },
                    a = function(e) {
                        for (; e = e.parentNode;)
                            if (e == document) return !0;
                        return !1
                    },
                    i = function(e, t) {
                        for (var n = l(e.getBoundingClientRect()); e = e.parentNode;)
                            if (9 !== e.nodeType && "hidden" === o(e, "overflow")) {
                                var r = l(e.getBoundingClientRect()),
                                    a = n.startX >= r.startX && n.endX <= r.endX,
                                    r = n.startY >= r.startY && n.endY <= r.endY;
                                if (!a || !r) return !1
                            }
                        return !0
                    },
                    l = function(e) {
                        var t = e.x,
                            n = e.width,
                            r = e.y,
                            e = e.height;
                        return {
                            startX: parseInt(t),
                            endX: parseInt(t) + parseInt(n),
                            startY: parseInt(r),
                            endY: parseInt(r) + parseInt(e)
                        }
                    }
            }
        },
        r = {};

    function g(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            id: e,
            exports: {}
        };
        return n[e](t, t.exports, g), t.exports
    }
    g.m = n, g.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return g.d(t, {
            a: t
        }), t
    }, g.d = (e, t) => {
        for (var n in t) g.o(t, n) && !g.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, g.f = {}, g.e = n => Promise.all(Object.keys(g.f).reduce((e, t) => (g.f[t](n, e), e), [])), g.u = e => e + ".js", g.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), g.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s = {}, d = "sc-pixel:", g.l = (r, e, t, n) => {
        if (s[r]) s[r].push(e);
        else {
            var a, o;
            if (void 0 !== t)
                for (var i = document.getElementsByTagName("script"), c = 0; c < i.length; c++) {
                    var l = i[c];
                    if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == d + t) {
                        a = l;
                        break
                    }
                }
            a || (o = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, g.nc && a.setAttribute("nonce", g.nc), a.setAttribute("data-webpack", d + t), a.src = r), s[r] = [e];
            var e = (e, t) => {
                    a.onerror = a.onload = null, clearTimeout(u);
                    var n = s[r];
                    if (delete s[r], a.parentNode && a.parentNode.removeChild(a), n && n.forEach(e => e(t)), e) return e(t)
                },
                u = setTimeout(e.bind(null, void 0, {
                    type: "timeout",
                    target: a
                }), 12e4);
            a.onerror = e.bind(null, a.onerror), a.onload = e.bind(null, a.onload), o && document.head.appendChild(a)
        }
    }, g.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, g.g.importScripts && (e = g.g.location + "");
    var e, t = g.g.document;
    if (e || !t || (e = t.currentScript ? t.currentScript.src : e) || (t = t.getElementsByTagName("script")).length && (e = t[t.length - 1].src), !e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), g.p = e, l = {
        main: 0
    }, g.f.j = (n, e) => {
        var t, r, a = g.o(l, n) ? l[n] : void 0;
        0 !== a && (a ? e.push(a[2]) : (t = new Promise((e, t) => a = l[n] = [e, t]), e.push(a[2] = t), e = g.p + g.u(n), r = new Error, g.l(e, e => {
            var t;
            g.o(l, n) && (0 !== (a = l[n]) && (l[n] = void 0), a && (t = e && ("load" === e.type ? "missing" : e.type), e = e && e.target && e.target.src, r.message = "Loading chunk " + n + " failed.\n(" + t + ": " + e + ")", r.name = "ChunkLoadError", r.type = t, r.request = e, a[1](r)))
        }, "chunk-" + n, n)))
    }, t = (e, t) => {
        var n, r, [a, o, i] = t,
            c = 0;
        if (a.some(e => 0 !== l[e])) {
            for (n in o) g.o(o, n) && (g.m[n] = o[n]);
            i && i(g)
        }
        for (e && e(t); c < a.length; c++) r = a[c], g.o(l, r) && l[r] && l[r][0](), l[r] = 0
    }, (e = self.webpackChunksc_pixel = self.webpackChunksc_pixel || []).forEach(t.bind(null, 0)), e.push = t.bind(null, e.push.bind(e));
    var y;

    function o(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function m(r) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(a), !0).forEach(function(e) {
                var t, n;
                t = r, n = a[e = e], e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return r
    }
    y = g(853),
        function(s, i) {
            var e, d = 1,
                a = [],
                r = {
                    write: function(e, t, n, r, a) {
                        var o = new Date;
                        n = n || 732, a = a || "/", o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                        n = e + "=" + t + ("; expires=" + o.toGMTString()) + "; path=" + a;
                        n += r ? "; domain=" + r : "; domain=" + (e = s.location.hostname.split(".")).slice(e.length - 2, e.length).join("."), i.cookie = n
                    },
                    read: function(e) {
                        var t = "" + i.cookie,
                            n = t.indexOf(e);
                        if (void 0 === e || "" === e || -1 === n) return "";
                        var r = t.indexOf(";", n);
                        return -1 === r && (r = t.length), decodeURI(t.substring(n + e.length + 1, r))
                    },
                    remove: function(e) {
                        this.read(e) && this.write(e, "", -1, "/")
                    }
                };

            function t() {
                return !!new URLSearchParams(s.location.search).get("verify")
            }

            function f(e) {
                var t = new URLSearchParams(s.location.search).get(e),
                    n = (s.scParamObject = s.scParamObject || [], 30);
                return "verify" === e && (n = .01), t && (s.scParamObject[e] = t, r.write("sc_".concat(e), t, n)), t || s.scParamObject[e] || r.read("sc_".concat(e))
            }

            function c(e, t) {
                try {
                    var r = {
                            eventDataList: []
                        },
                        n = s.scSdkId;
                    if (!n) return;
                    var a = f("campaignId"),
                        o = f("creativeId"),
                        i = f("adsUuid"),
                        c = f("advertiserId"),
                        l = f("verify");
                    if (!(d || a && o && i && c || l)) return;
                    var u = m(m(m(m(m(m({}, a ? {
                        d: a
                    } : {}), o ? {
                        e: o
                    } : {}), c ? {
                        j: c
                    } : {}), i ? {
                        h: i
                    } : {}), n ? {
                        i: n
                    } : {}), {}, {
                        g: s.origin
                    });
                    e.forEach(function(e) {
                        var t = new DOMParser,
                            n = m({}, e),
                            t = t.parseFromString(e.meta.innerHTML, "text/html");
                        null === t.body.lastChild ? n.meta.innerHTML = t.body : t.body.lastChild.innerHTML && (n.meta.innerHTML = t.body.lastChild.innerHTML), r.eventDataList.push(m(m({}, u), {}, {
                            c: e.eventName,
                            b: e.eventType,
                            f: e.eventFireTs.toString(),
                            k: JSON.stringify(e.meta),
                            l: e.textContent
                        }))
                    }), fetch("https://apis.sharechat.com/a1s-s2s-service/v1/selfServe/sdkEvents/batch/post", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(r)
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        t && t()
                    }).catch(function(e) {})
                } catch (e) {}
            }

            function l() {
                try {
                    for (var e, t = {}, n = i.getElementsByTagName("meta"), r = 0; r < n.length; r++) !n[r].name && !n[r].property || (-1 < (e = n[r].name || n[r].property).indexOf("title") || -1 < e.indexOf("description") || -1 < e.indexOf("site_name") || -1 < e.indexOf("type")) && (t[e] = n[r].content);
                    return t.pageUrl = s.location.href, t
                } catch (e) {}
            }

            function u(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    r = 3 < arguments.length ? arguments[3] : void 0,
                    a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
                try {
                    var o = l();
                    c([{
                        eventName: e,
                        eventType: t,
                        meta: m(m({}, n), o),
                        eventFireTs: Date.now(),
                        textContent: a.textContent || null
                    }], r)
                } catch (e) {}
            }

            function o(e) {
                for (var t = e, e = t.target.href, n = t.target.id, r = t.target.tagName, a = [], o = 0; o < t.target.classList.length; o += 1) a.push(t.target.classList.item(o));
                var i = (0, y.tb)(t.target, {}, s) || "";
                u("subscribeToClick", "AUTO", {
                    innerHTML: t.target.innerHTML,
                    href: e,
                    id: n,
                    classList: a,
                    tagName: r
                }, null, {
                    textContent: i
                })
            }

            function n() {
                var t, n, e, r, a = s.scLayer || [];
                0 < a.length && (t = l(), a.forEach(function(e) {
                    e.meta = m(m({}, e.meta), t)
                }), c(a, function() {
                    s.scLayer = []
                })), s.scq = u.bind(this), n = "", new MutationObserver(function(e) {
                    location.href !== n && ("" !== n && u("PAGE_VIEW", "AUTO", {
                        pageUrl: s.location.href
                    }), n = location.href)
                }).observe(i.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    characterData: !0
                }), i.body.addEventListener("click", o, !0), e = 0, r = setInterval(function() {
                    e += 1, -1 < [2, 5, 10, 20].indexOf(e) && u("DWELL_TIME", "AUTO", {
                        time: e
                    }), 20 === e && clearInterval(r)
                }, 1e3)
            }

            function p() {
                var e = s.scSdkId;
                fetch("https://apis.sharechat.com/self-serve-service/v1/external/selfServe/sdk/".concat(e, "/get")).then(function(e) {
                    return e.json()
                }).then(function(e) {
                    var t;
                    d = e && e.scTracking || 0, e.eventData && (a = e.eventData, t = new URLSearchParams(s.location.search).get("verify"), 0 < (a = null === t ? e.eventData.filter(function(e) {
                        return "enabled" === e.state
                    }) : a).length && i.body.addEventListener("click", h, !0)), n()
                }).catch(function(e) {})
            }

            function h(e) {
                var t, n = (0, y.tb)(e.target, {}, s),
                    r = function(e, t) {
                        if (t.includes(e.tagName.toLowerCase())) return e;
                        for (; e && e.parentNode;)
                            if ((e = e.parentNode).tagName && t.includes(e.tagName.toLowerCase())) return e;
                        return null
                    }(e.target, ["button", "a", "input"]);
                null !== r && (n ? (t = null == (t = a) ? void 0 : t.filter(function(e) {
                    return e.componentUI.textContent === n
                })[0]) && u(t.name, "PREDEFINED", {
                    innerHTML: e.target.innerHTML,
                    href: e.target.href,
                    id: e.target.id,
                    tagName: e.target.tagName
                }, null, {
                    textContent: n
                }) : (e = null == (t = a) ? void 0 : t.filter(function(e) {
                    return i.querySelector(e.componentUI.selector) === r
                })[0]) && u(e.name, "PREDEFINED", {
                    innerHTML: r.innerHTML,
                    href: r.href,
                    id: r.id,
                    tagName: r.tagName
                }, null, {
                    documentButtonText: n
                }))
            }

            function v() {
                s.opener && g.e("src_sc-signal_js").then(g.bind(g, 519)), t() && u("VERIFICATION", "PREDEFINED", {}, function() {}), p()
            }
            s.scSDKEnabled ? s.scq = u.bind(this) : (s.scSDKEnabled = !0, e = v, "loading" !== i.readyState ? e() : s.addEventListener ? s.addEventListener("DOMContentLoaded", e) : s.attachEvent("onreadystatechange", function() {
                "loading" !== i.readyState && e()
            }))
        }(window, document)
})();