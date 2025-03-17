"use strict";
(globalThis.webpackChunk_zendesk_web_widget_messenger = globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
    [2229], {
        50915: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => Ye
            });
            var r = t(48559),
                s = t(20912),
                i = t(88910),
                a = t(24726),
                o = t.n(a),
                d = t(70069),
                l = t(54899),
                c = t(43229),
                p = t(10948),
                h = t(94998);
            const m = p.Ay.div.withConfig({
                componentId: "sc-1q9fwvy-0"
            })(["position:absolute;left:0px;display:flex;align-items:center;justify-content:center;height:100%;width:100%;transition:top ", "s ", ";", ""], .5, h.rN, (e => "entering" === e.state || "entered" === e.state ? (0, p.AH)(["top:0;"]) : (0, p.AH)(["top:", ";"], e.hiddenPosition)));
            var u = t(86222);
            const g = ({
                isVisible: e,
                hiddenPosition: n,
                children: t
            }) => (0, u.jsx)(c.Ay, { in: e,
                timeout: 500,
                children: e => (0, u.jsx)(m, {
                    state: e,
                    hiddenPosition: n,
                    "aria-hidden": "exited" === e,
                    children: t
                })
            });
            g.propTypes = {
                isVisible: o().bool,
                hiddenPosition: o().string,
                children: o().node
            };
            const x = g;
            var f = function(e) {
                return (0, u.jsx)("svg", { ...e,
                    children: (0, u.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: "currentColor",
                        d: "M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z"
                    })
                })
            };
            f.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "21",
                height: "13",
                viewBox: "0 0 21 13",
                focusable: "false",
                role: "presentation"
            };
            var b = function(e) {
                return (0, u.jsx)("svg", { ...e,
                    children: (0, u.jsx)("path", {
                        d: "M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z",
                        transform: "translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000) "
                    })
                })
            };
            b.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            };
            const w = (0, p.Ay)(f).withConfig({
                    componentId: "sc-1k07fow-0"
                })(["path{fill:", ";}"], (e => e.theme.messenger.colors.primaryText)),
                y = (0, p.Ay)(b).withConfig({
                    componentId: "sc-1k07fow-1"
                })(["width:60% !important;height:60% !important;path{fill:", ";}", ""], (e => e.theme.messenger.colors.primaryText), (e => "left" === e.position && "\n    transform: scaleX(-1);\n  ")),
                k = ({
                    isOpen: e,
                    position: n
                }) => (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(x, {
                        isVisible: !e,
                        hiddenPosition: "-100%",
                        children: (0, u.jsx)(y, {
                            position: n
                        })
                    }), (0, u.jsx)(x, {
                        isVisible: e,
                        hiddenPosition: "100%",
                        children: (0, u.jsx)(w, {})
                    })]
                });
            k.propTypes = {
                isOpen: o().bool,
                position: o().oneOf(["left", "right"])
            };
            const j = k;
            var v = t(36913);
            const A = p.Ay.div.withConfig({
                    componentId: "sc-1w3tvxe-0"
                })(["width:", ";height:", ";border-radius:", ";box-shadow:rgb(36,36,36,0.15) 0px 20px 30px 0px;display:flex;align-items:center;justify-content:center;background-color:", " !important;"], (e => e.size ? ? "100%"), (e => e.size ? ? "100%"), (e => C(e.shape, e.shapeSettings)), (e => e.theme.messenger.colors.primary)),
                _ = (0, p.Ay)(v.K).withConfig({
                    componentId: "sc-1w3tvxe-1"
                })(["&&&{position:relative;overflow:hidden;border-radius:", ";width:100%;height:100%;background-color:", ";&:active{box-shadow:none;}&:focus{box-shadow:none;}&[data-garden-focus-visible]{box-shadow:inset ", ";}}"], (e => C(e.shape, e.shapeSettings)), (e => e.theme.messenger.colors.primary), (e => e.theme.shadows.md(e.theme.messenger.colors.primaryText))),
                C = (e, n) => {
                    switch (e) {
                        case d.Fe.circle:
                            return d.mi.circle;
                        case d.Fe.square:
                            return n ? .borderRadius ? `${n.borderRadius}px` : d.mi.square;
                        default:
                            return "0"
                    }
                },
                L = (0, i.forwardRef)((({
                    shape: e,
                    shapeSettings: n,
                    isOpen: t,
                    onClick: r,
                    position: s,
                    size: i,
                    unreadCount: a
                }, o) => {
                    const {
                        launcher: {
                            openWindowAriaLabel: d,
                            closeWindowAriaLabel: c
                        },
                        ariaLabels: {
                            unreadMessagesCount: {
                                oneUnreadMessage: p,
                                moreThanOneUnreadMessage: h
                            }
                        }
                    } = (0, l.A)();
                    let m;
                    m = 1 === a ? `, ${p}` : a > 1 ? `, ${h(a)}` : "";
                    const g = t ? c : `${d}${m}`;
                    return (0, u.jsx)(A, {
                        ref: o,
                        size: i,
                        shape: e,
                        shapeSettings: n,
                        children: (0, u.jsx)(_, {
                            shape: e,
                            shapeSettings: n,
                            onClick: r,
                            "aria-label": g,
                            isPill: !1,
                            onKeyDown: () => {},
                            children: (0, u.jsx)(j, {
                                isOpen: t,
                                position: s
                            })
                        })
                    })
                }));
            L.propTypes = {
                shape: o().oneOf(Object.keys(d.Fe)),
                shapeSettings: o().shape({
                    borderRadius: o().string
                }),
                isOpen: o().bool,
                onClick: o().func,
                position: o().oneOf(Object.keys(d.x8)),
                size: o().string,
                unreadCount: o().number
            }, L.defaultProps = {
                size: "64px"
            };
            const Y = L;
            var E = t(26436),
                T = t(32731),
                $ = t(88083),
                O = t(84234),
                z = t(874),
                I = t(52295),
                S = t(97813),
                R = t(21521);
            const F = () => {
                const e = (0, s.d4)(R.l$),
                    n = (0, s.d4)(S.a7),
                    t = (0, s.d4)(S.zS),
                    [r, a] = (0, i.useState)(0);
                return (0, i.useEffect)((() => {
                    "number" == typeof t && "number" == typeof n && (e === R.h_.SingleConversation ? a(n) : a(t))
                }), [e, n, t]), r
            };
            var H = t(45812),
                W = t(98597),
                P = t(52859),
                D = t(99028),
                M = t(82665),
                Z = t(30339),
                G = t(87944),
                B = t(18333),
                K = t(70609),
                V = t(43190),
                U = t(33402);
            const X = `ww-${(0,t(84858).A)()}`,
                N = `${X}-launcherOnOpen`,
                q = `${X}-widgetOnLoad`,
                J = `\n        @-webkit-keyframes ${N} {\n          0% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n          30% {\n            -webkit-transform: translateY(-5px) rotate(2deg);\n                    transform: translateY(-5px) rotate(2deg);\n          }\n\n          60% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n\n          90% {\n            -webkit-transform: translateY(-1px) rotate(0deg);\n                    transform: translateY(-1px) rotate(0deg);\n\n          }\n\n          100% {\n            -webkit-transform: translateY(-0px) rotate(0deg);\n                    transform: translateY(-0px) rotate(0deg);\n          }\n        }\n        @keyframes ${N} {\n          0% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n          30% {\n            -webkit-transform: translateY(-5px) rotate(2deg);\n                    transform: translateY(-5px) rotate(2deg);\n          }\n\n          60% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n\n          90% {\n            -webkit-transform: translateY(-1px) rotate(0deg);\n                    transform: translateY(-1px) rotate(0deg);\n\n          }\n\n          100% {\n            -webkit-transform: translateY(-0px) rotate(0deg);\n                    transform: translateY(-0px) rotate(0deg);\n          }\n        }\n\n        @keyframes ${q} {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n\n        @-webkit-keyframes ${q} {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n      `,
                Q = ({
                    children: e
                }) => {
                    const n = (0, s.d4)(O.xD),
                        t = (0, s.d4)(G._),
                        r = (0, s.d4)(G.d),
                        a = (0, s.d4)(I.E9),
                        o = (0, s.d4)(T.rU),
                        l = (0, s.d4)(I.fl),
                        c = (0, s.d4)(T.iG),
                        p = (0, s.d4)(T.dA),
                        {
                            horizontal: h,
                            vertical: m
                        } = (0, s.d4)(I.XI),
                        g = m > E.G1,
                        x = F(),
                        f = (0, s.d4)(K.rX),
                        b = (0, Z.A)(),
                        {
                            isZoomedIn: w
                        } = (0, M.A)(),
                        y = !t && !r,
                        k = C(c, p),
                        j = (0, s.Pj)(),
                        v = (0, i.useCallback)((() => {
                            let e = b("embeddable_framework.messenger.launcher.frame.title");
                            return f === U.v.Successful && (e = 0 === x ? b("embeddable_framework.messenger.launcher.frame.no_new_messages_title") : 1 === x ? b("embeddable_framework.messenger.launcher.frame.one_new_message_title") : b("embeddable_framework.messenger.launcher.frame.new_messages_title", {
                                count: x
                            })), e
                        }), [f, x]);
                    let A = [];
                    return o && A.push(`${q} 0.2s ease-in ${B.X}s forwards`), n && y && A.push(`${N} ${d.tV}s ${E.rN}`), (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                __html: J
                            }
                        }), (0, u.jsx)(D.Ay, {
                            title: v(),
                            hidden: !o,
                            id: "launcher",
                            style: {
                                height: E._k,
                                width: E._k,
                                position: "fixed",
                                bottom: w && g ? E.G1 : m,
                                [a]: h,
                                border: 0,
                                marginTop: 0,
                                opacity: 0,
                                boxShadow: E.RD,
                                animation: A.join(", "),
                                zIndex: l,
                                borderRadius: k
                            },
                            onKeyDown: e => {
                                (0, W.tE)(e, j)
                            },
                            children: (0, u.jsx)(V.A, {
                                setBackgroundColor: !0,
                                children: e
                            })
                        })]
                    })
                };
            Q.propTypes = {
                children: o().node
            };
            const ee = Q,
                ne = () => {
                    const e = (0, s.wA)(),
                        n = (0, s.d4)(O.xD),
                        t = (0, s.d4)(I.E9),
                        r = (0, s.d4)(T.iG),
                        a = (0, s.d4)(T.dA),
                        o = (0, s.d4)(H.B1),
                        d = (0, i.useRef)(null),
                        l = F();
                    return (0, i.useEffect)((() => {
                        P.A.markOnce("launcher_rendered")
                    }), []), (0, i.useEffect)((() => ((0, W.kT)("refLauncher", d), $.W(d.current), () => {
                        $.T(d.current)
                    })), [d]), o ? (0, u.jsx)(ee, {
                        children: (0, u.jsx)(Y, {
                            ref: d,
                            isOpen: n,
                            onClick: () => {
                                P.A.markOnce("launcher_clicked"), e((0, z.fH)())
                            },
                            position: t,
                            shape: r,
                            shapeSettings: a,
                            size: `${E._k}px`,
                            unreadCount: l
                        })
                    }) : null
                };
            var te = t(32583),
                re = t(91857),
                se = t(17398),
                ie = t(80096),
                ae = t(99317),
                oe = t(39453),
                de = t(31650),
                le = t(44025),
                ce = t(83268),
                pe = t(47386),
                he = t(79390),
                me = t(93901);
            const ue = () => {
                const e = (0, s.wA)(),
                    n = (0, s.d4)(O.xD),
                    t = (0, s.d4)(ie.HA),
                    r = (0, s.d4)(se._6),
                    a = (0, s.d4)(H.B1),
                    o = (0, i.useRef)(t),
                    d = (0, s.d4)(me.WP),
                    [l, c] = (0, i.useState)(!1);
                t && (o.current = !0), (0, i.useLayoutEffect)((() => {
                    n && o.current && e((0, ie.LT)())
                }), [n]), (0, i.useEffect)((() => {
                    d && !l && c(!0)
                }), [d]);
                const p = (0, Z.A)(),
                    h = p("embeddable_framework.messenger.launcher_label.close_v2"),
                    m = p("embeddable_framework.messenger.launcher_label.close_v3"),
                    g = p("embeddable_framework.messenger.launcher_label.frame.title"),
                    x = t && a && !l,
                    f = (0, i.useRef)({}),
                    {
                        onClickAnimate: b,
                        animateHide: w
                    } = (0, pe.A)({
                        isLabelVisible: x,
                        refs: f
                    }),
                    {
                        maxWidth: y,
                        messageContainerHeight: k,
                        messageFrameHeight: j,
                        messageFrameWidth: v,
                        setFrameDimensions: A
                    } = (0, he.A)({
                        refs: f,
                        isIconNextToMessage: !0
                    });
                return x ? (0, u.jsx)(ae.A, {
                    children: (0, u.jsxs)(oe.A, {
                        children: [(0, u.jsx)(de.A, {
                            title: h,
                            ref: e => f.current.closeFrame = e,
                            children: (0, u.jsx)(te.A, {
                                ariaLabel: m,
                                onClick: () => {
                                    w((() => {
                                        e((0, ie.LT)())
                                    }))
                                }
                            })
                        }), (0, u.jsx)(le.A, {
                            ref: e => f.current.messageFrame = e,
                            title: g,
                            maxWidth: y,
                            messageFrameWidth: v,
                            messageFrameHeight: j,
                            children: (0, u.jsx)(ce.N, {
                                maxMessageContainerHeight: k,
                                children: (0, u.jsx)(re.A, {
                                    message: r,
                                    maxWidth: y,
                                    onClick: () => {
                                        b((() => {
                                            e((0, z.Gi)())
                                        }))
                                    },
                                    onRender: A
                                })
                            })
                        })]
                    })
                }) : null
            };
            var ge = t(26277);
            const xe = (0, i.lazy)((() => t.e(6209).then(t.bind(t, 66209)))),
                fe = () => {
                    const [e, n] = (0, i.useState)(!1), t = (0, s.d4)(ge.BH);
                    return (0, i.useEffect)((() => {
                        t && n(!0)
                    }), [t]), (0, u.jsx)(i.Suspense, {
                        fallback: null,
                        children: e && (0, u.jsx)(xe, {})
                    })
                },
                be = p.Ay.div.withConfig({
                    componentId: "sc-1o8glcn-0"
                })(["height:", "px;min-width:", "px;color:", ";background-color:", ";border-radius:", "px;display:flex;justify-content:center;align-items:center;font-size:14px;padding:0 6px;", ""], 20, 20, (e => e.theme.palette.white), (e => e.theme.palette.red[500]), 20, (({
                    position: e
                }) => `margin-${"right"===e?"left":"right"}: auto`)),
                we = p.Ay.div.withConfig({
                    componentId: "sc-1o8glcn-1"
                })(["font-size:12px;"]),
                ye = ({
                    unreadCount: e = 0
                }) => {
                    const n = (0, s.wA)(),
                        t = Math.min(e, 99),
                        r = (0, s.d4)(I.E9);
                    return (0, u.jsx)("div", {
                        onClick: () => {
                            n((0, z.fH)())
                        },
                        "aria-hidden": "true",
                        style: {
                            cursor: "pointer",
                            width: E.Kr + 20,
                            display: "flex"
                        },
                        children: (0, u.jsxs)(be, {
                            position: r,
                            "data-testid": "unread-indicator-container",
                            children: [t, e > 99 && (0, u.jsx)(we, {
                                children: "+"
                            })]
                        })
                    })
                };
            ye.propTypes = {
                unreadCount: o().number
            };
            const ke = ye,
                je = (0, p.DU)(["html{background-color:transparent;}"]),
                ve = ({
                    children: e
                }) => {
                    const n = (0, s.d4)(T.rU),
                        t = (0, s.d4)(I.E9),
                        r = (0, s.d4)(I.fl),
                        i = (0, Z.A)(),
                        {
                            vertical: a,
                            horizontal: o
                        } = (0, s.d4)(I.XI),
                        d = a > E.G1,
                        {
                            isZoomedIn: l
                        } = (0, M.A)();
                    return (0, u.jsx)(D.Ay, {
                        tabIndex: "-1",
                        title: i("embeddable_framework.messenger.unread_indicator.frame.title"),
                        hidden: !n,
                        style: {
                            zIndex: r,
                            height: E.Kr,
                            width: E.Kr + 20,
                            position: "fixed",
                            bottom: l && d ? E.ZY.bottom(E.G1) : E.ZY.bottom(a),
                            [t]: "right" === t ? E.ZY.right(o) : E.ZY.left(o),
                            border: 0,
                            marginTop: 0
                        },
                        children: (0, u.jsx)(V.A, {
                            children: (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(je, {}), e]
                            })
                        })
                    })
                };
            ve.propTypes = {
                children: o().node
            };
            const Ae = ve,
                _e = ({
                    unreadCount: e,
                    isWidgetOpen: n
                }) => n || 0 === e ? null : (0, u.jsx)(Ae, {
                    children: (0, u.jsx)(ke, {
                        unreadCount: e
                    })
                });
            _e.propTypes = {
                unreadCount: o().number,
                isWidgetOpen: o().bool
            };
            const Ce = _e,
                Le = () => {
                    const e = F(),
                        n = (0, s.d4)(O.xD);
                    return (0, u.jsx)(Ce, {
                        unreadCount: e,
                        isWidgetOpen: n
                    })
                },
                Ye = ({
                    store: e,
                    container: n,
                    callback: t = null
                }) => {
                    r.render((0, u.jsxs)(s.Kq, {
                        store: e,
                        children: [(0, u.jsx)(fe, {}), (0, u.jsx)(ue, {}), (0, u.jsx)(ne, {}), (0, u.jsx)(Le, {})]
                    }), n, t)
                }
        },
        7087: (e, n, t) => {
            t.d(n, {
                vV: () => c,
                G1: () => p,
                yT: () => o,
                fb: () => i,
                CH: () => d,
                T7: () => a,
                xY: () => l,
                og: () => s,
                Uc: () => h
            });
            var r = t(26436);
            const s = "0px 20px 30px rgba(23, 73, 77, 0.15)",
                i = "ZD-campaigns",
                a = 280,
                o = 40,
                d = 40,
                l = "20px",
                c = [{
                    opacity: 0
                }, {
                    opacity: 1
                }],
                p = {
                    duration: 300,
                    fill: "forwards",
                    easing: "ease-in-out"
                },
                h = e => r.x5 + r._k + e
        },
        88083: (e, n, t) => {
            t.d(n, {
                T: () => i,
                W: () => s
            });
            var r = t(35423);
            const s = e => {
                    try {
                        e.addEventListener("click", (() => {
                            (0, r.gb)()
                        }), {
                            once: !0
                        }), e.addEventListener("input", (() => {
                            (0, r.gb)()
                        }), {
                            once: !0
                        })
                    } catch {}
                },
                i = e => {
                    try {
                        e.removeEventListener("click", (() => {
                            (0, r.gb)()
                        })), e.removeEventListener("input", (() => {
                            (0, r.gb)()
                        }))
                    } catch {}
                }
        },
        94998: (e, n, t) => {
            t.d(n, {
                Ay: () => A,
                kY: () => j,
                lY: () => v,
                rN: () => s
            });
            var r = t(10948);
            const s = "cubic-bezier(0.66, 0, 0.12, 1)",
                i = (e = {}) => ({
                    duration: .3,
                    delay: 0,
                    timing: "linear",
                    ...e
                });
            let a = 0;
            const o = i({
                    delay: a,
                    timing: s,
                    duration: .15
                }),
                d = i({
                    delay: a,
                    timing: "ease"
                }),
                l = i({
                    delay: a,
                    duration: 0
                }),
                c = i({
                    delay: a,
                    duration: 0
                }),
                p = i({
                    delay: a,
                    duration: 0
                }),
                h = i({
                    delay: a
                }),
                m = i({
                    delay: a,
                    duration: .2,
                    timing: "linear"
                });
            a = .15;
            const u = i({
                delay: a,
                duration: .15
            });
            a = .3;
            const g = i({
                    delay: a,
                    duration: .5,
                    fill: "both"
                }),
                x = i({
                    delay: a,
                    duration: .3
                }),
                f = i({
                    delay: a,
                    duration: .3
                }),
                b = i({
                    delay: a,
                    duration: 0
                });
            a = .6;
            const w = i({
                delay: a,
                timing: s
            });
            a = .7;
            const y = i({
                delay: a,
                duration: 0
            });
            a = .9;
            const k = i({
                    delay: a,
                    timing: "ease"
                }),
                j = (e, ...n) => n.map((n => `${n} ${e.duration}s ${e.timing} ${e.delay}s`)).join(", "),
                v = (e, n) => (0, r.AH)(["", " ", "s ", " ", "s ", ""], n, e.duration, e.timing, e.delay, e.fill),
                A = {
                    tailEnter: w,
                    tailExit: o,
                    textEnter: k,
                    textExit: d,
                    messageBorder: u,
                    messageEnter: g,
                    messageStatusOpacity: h,
                    messageColor: m,
                    existingRepliesEnter: l,
                    freshRepliesEnter: y,
                    repliesExit: c,
                    repliesFadeIn: x,
                    receiptEnter: p,
                    receiptReenter: f,
                    receiptExit: b
                }
        }
    }
]);