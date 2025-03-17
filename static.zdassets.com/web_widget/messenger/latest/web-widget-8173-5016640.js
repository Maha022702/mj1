"use strict";
(globalThis.webpackChunk_zendesk_web_widget_messenger = globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
    [8173], {
        82665: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n(88910);
            const o = () => {
                const [e, t] = (0, r.useState)(Math.round(100 * window.devicePixelRatio)), n = () => {
                    t(Math.round(100 * window.devicePixelRatio))
                };
                return (0, r.useEffect)((() => (window.addEventListener("resize", n), () => {
                    window.removeEventListener("resize", n)
                })), []), {
                    scale: e >= 400 ? .5 : 1,
                    isZoomedIn: e >= 400
                }
            }
        },
        99317: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var r = n(20912),
                o = n(70069),
                i = n(26436),
                s = n(82665),
                a = n(7533),
                c = n(32731),
                d = n(7087),
                l = n(52295),
                m = n(86222);
            const h = ({
                children: e,
                ariaLabel: t
            }) => {
                const n = (0, r.d4)(l.E9),
                    h = (0, r.d4)(l.fl),
                    u = (0, r.d4)(c.iG),
                    {
                        vertical: g,
                        horizontal: f
                    } = (0, r.d4)(l.XI),
                    p = g > i.G1,
                    x = a.A.isRTL() ? "rtl" : "ltr",
                    {
                        isZoomedIn: y
                    } = (0, s.A)();
                return (0, m.jsx)("div", {
                    "aria-label": t,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        zIndex: h,
                        bottom: u === o.Fe.none ? g : (0, d.Uc)(Number(g)),
                        position: "fixed",
                        [n]: f,
                        direction: x,
                        alignItems: "end",
                        gap: i.x5,
                        ...y && p && {
                            bottom: (0, d.Uc)(Number(i.G1))
                        }
                    },
                    children: e
                })
            }
        },
        39453: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(26436),
                o = n(86222);
            const i = ({
                children: e
            }) => (0, o.jsx)("div", {
                style: {
                    display: "flex",
                    gap: r.x5
                },
                children: e
            })
        },
        31650: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var r = n(88910),
                o = n(20912),
                i = n(99028),
                s = n(26436),
                a = n(7087),
                c = n(87944),
                d = n(43190),
                l = n(23112),
                m = n(6917),
                h = n(86222);
            const u = (0, r.forwardRef)((({
                children: e,
                title: t
            }, n) => {
                const u = (0, o.d4)(c._) ? s.xm : s.Ez,
                    {
                        height: g,
                        width: f
                    } = (0, r.useMemo)((() => ({
                        height: (0, l.A)(a.CH, u),
                        width: (0, l.A)(a.CH, u)
                    })), [u]);
                return (0, h.jsx)(i.Ay, {
                    title: t,
                    style: {
                        height: g,
                        width: f,
                        border: 0,
                        backgroundColor: "transparent",
                        boxShadow: a.og,
                        borderRadius: "100%",
                        verticalAlign: "unset",
                        opacity: 0,
                        alignSelf: "end"
                    },
                    ref: n,
                    children: (0, h.jsxs)(d.A, {
                        children: [(0, h.jsx)(m.k, {}), e]
                    })
                })
            }))
        },
        44025: (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var r = n(88910),
                o = n(20912),
                i = n(99028),
                s = n(26436),
                a = n(7087),
                c = n(87944),
                d = n(43190),
                l = n(52295),
                m = n(23112),
                h = n(6917),
                u = n(86222);
            const g = (0, r.forwardRef)((({
                children: e,
                title: t,
                messageFrameWidth: n,
                maxWidth: g,
                messageFrameHeight: f
            }, p) => {
                const x = (0, o.d4)(c._) ? s.xm : s.Ez,
                    y = (0, o.d4)(l.E9),
                    {
                        borderRadius: b
                    } = (0, r.useMemo)((() => ({
                        borderRadius: (0, m.A)(a.xY, x)
                    })), [x]);
                return (0, u.jsx)(i.Ay, {
                    ref: p,
                    title: t,
                    style: {
                        width: n,
                        height: f,
                        maxWidth: g,
                        overflow: "auto",
                        border: 0,
                        backgroundColor: "transparent",
                        boxShadow: a.og,
                        borderRadius: b,
                        display: "inline-block",
                        verticalAlign: "unset",
                        transformOrigin: `bottom ${String(y)}`
                    },
                    children: (0, u.jsxs)(d.A, {
                        children: [(0, u.jsx)(h.k, {}), (0, u.jsx)(h.T, {}), e]
                    })
                })
            }))
        },
        6917: (e, t, n) => {
            n.d(t, {
                T: () => i,
                k: () => o
            });
            var r = n(10948);
            const o = (0, r.DU)(["html{background-color:transparent;}"]),
                i = (0, r.DU)(["body{opacity:0;}"])
        },
        83268: (e, t, n) => {
            n.d(t, {
                N: () => r
            });
            const r = n(10948).Ay.div.withConfig({
                componentId: "sc-9qme4p-0"
            })(["text-align:center;overflow:auto;max-height:", "px;"], (e => e.maxMessageContainerHeight))
        },
        47386: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var r = n(88910),
                o = n(20912),
                i = n(7087),
                s = n(18333),
                a = n(84234);
            const c = 1e3 * s.X + 50,
                d = ({
                    isLabelVisible: e,
                    refs: t
                }) => {
                    const n = (0, o.d4)(a.xD),
                        s = (0, r.useRef)(0);
                    (0, r.useLayoutEffect)((() => {
                        s.current = Date.now()
                    }), [n]);
                    const d = (0, r.useCallback)((e => {
                        const {
                            closeFrame: n,
                            messageFrame: r,
                            avatarFrame: o
                        } = t.current;
                        if (!r ? .animate) return;
                        r.style.opacity = "0", r.style.transform = "scale(0)", n && (n.style.opacity = "0"), o && (o.style.opacity = "0");
                        r.animate([{
                            transform: "scale(0)",
                            opacity: 0
                        }, {
                            transform: "scale(1)",
                            opacity: 1
                        }], { ...i.G1,
                            delay: e ? 750 : 0
                        }).onfinish = () => {
                            r && r.contentDocument && (r.contentDocument.body.animate(i.vV, i.G1), t.current.avatarFrame && (t.current.avatarFrame.style.opacity = "1", t.current.avatarFrame.animate(i.vV, i.G1)), t.current.closeFrame && (t.current.closeFrame.style.opacity = "1", t.current.closeFrame.animate(i.vV, i.G1)), r.contentDocument.body.style.opacity = "1")
                        }
                    }), [t]);
                    (0, r.useLayoutEffect)((() => {
                        const {
                            messageFrame: n
                        } = t.current;
                        if (e) {
                            if (e) {
                                const e = Date.now() - s.current < c;
                                d(e)
                            }
                        } else n ? .contentDocument && (n.contentDocument.body.style.opacity = "0")
                    }), [e]);
                    return {
                        onClickAnimate: e => {
                            const {
                                messageFrame: n,
                                avatarFrame: r
                            } = t.current;
                            if (!n ? .animate) return void e();
                            r ? .animate([{
                                opacity: 0
                            }], {
                                delay: 100,
                                fill: "forwards"
                            });
                            n.animate([{
                                transform: "scale(1)"
                            }, {
                                transform: "scale(0.95)",
                                opacity: 1
                            }, {
                                transform: "scale(1)",
                                opacity: 0
                            }], 200).onfinish = e
                        },
                        animateHide: e => {
                            const {
                                closeFrame: n,
                                messageFrame: r,
                                avatarFrame: o
                            } = t.current;
                            if (!r ? .animate) return void e();
                            n ? .animate([{
                                opacity: 0
                            }], 200), o ? .animate([{
                                opacity: 0
                            }], 200);
                            r.animate([{
                                opacity: 0
                            }], 200).onfinish = e
                        }
                    }
                }
        },
        79390: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var r = n(88910),
                o = n(20912),
                i = n(26436),
                s = n(7087),
                a = n(52295),
                c = n(6223);
            const d = () => {
                    const {
                        innerWidth: e,
                        innerHeight: t
                    } = c.Jc;
                    return {
                        width: e,
                        height: t
                    }
                },
                l = () => {
                    const [e, t] = (0, r.useState)(d());
                    return (0, r.useEffect)((() => {
                        const e = function(e, t) {
                            let n = 0;
                            return (...r) => {
                                const o = new Date;
                                o.getTime() - n >= t && (e(...r), n = o.getTime())
                            }
                        }((() => {
                            t(d())
                        }), 200);
                        return c.Jc.addEventListener("resize", e), () => c.Jc.removeEventListener("resize", e)
                    }), []), e
                };
            var m = n(82665);
            const h = ({
                refs: e,
                isIconNextToMessage: t
            }) => {
                const [n, c] = (0, r.useState)(0), [d, h] = (0, r.useState)(0), u = (0, m.A)(), {
                    vertical: g,
                    horizontal: f
                } = (0, o.d4)(a.XI), p = g > i.G1, x = l(), y = x.width - (t ? s.yT + i.x5 : 0) - i.pJ - (u.isZoomedIn && p ? i.G1 : f), b = Math.min(s.T7, y), w = x.height - (0, s.Uc)(u.isZoomedIn ? 0 : g) - i.x5 - (e.current ? .closeFrame ? .clientHeight ? i.x5 + e.current ? .closeFrame ? .clientHeight : 0);
                return {
                    maxWidth: b,
                    messageFrameWidth: Math.min(n, y),
                    messageFrameHeight: Math.min(d, w),
                    messageContainerHeight: x.height - (e.current ? .closeFrame ? s.CH + i.x5 : 0) - (0, s.Uc)(u.isZoomedIn ? 0 : g) - i.x5,
                    setFrameDimensions: e => {
                        if (e.current) {
                            const t = e.current.getBoundingClientRect();
                            c(t.width), h(t.height)
                        }
                    }
                }
            }
        },
        54899: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(88910),
                o = n(10948);
            const i = () => (0, r.useContext)(o.Dx).messenger.labels
        },
        91857: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var r = n(24726),
                o = n.n(r),
                i = n(88910),
                s = n(10948);
            const a = s.Ay.button.withConfig({
                    componentId: "sc-1ee9gtf-0"
                })(["padding:", ";border:0;width:max-content;max-width:", ";overflow-wrap:break-word;word-break:break-word;background:", ";color:", ";border-radius:", ";text-align:initial;&:focus,&:active{outline:0;}&:focus{outline:none;}&[data-garden-focus-visible]{box-shadow:inset ", ";}"], (e => e.isTitleVisible ? `${e.theme.messenger.space.sixteen} ${e.theme.messenger.space.sm} ${e.theme.messenger.space.sm}` : e.theme.messenger.space.sm), (e => "" + ("number" == typeof e.maxWidth ? `${e.maxWidth}px` : "auto")), (e => e.theme.palette.white), (e => e.theme.messenger.colors.otherParticipantMessageText), (e => e.theme.messenger.borderRadii.textMessage), (e => e.theme.shadows.md(e.theme.messenger.colors.action))),
                c = s.Ay.h1.withConfig({
                    componentId: "sc-1ee9gtf-1"
                })(["margin-bottom:", ";color:", ";font-size:", ";line-height:", ";opacity:0.65;"], (e => e.theme.messenger.space.xs), (e => e.theme.palette.black), (e => e.theme.messenger.fontSizes.sm), (e => e.theme.messenger.lineHeights.sm)),
                d = s.Ay.span.withConfig({
                    componentId: "sc-1ee9gtf-2"
                })(["font-size:", ";line-height:", ";"], (e => e.theme.messenger.fontSizes.md), (e => e.theme.messenger.lineHeights.md));
            var l = n(86222);
            const m = ({
                title: e,
                message: t,
                ariaLabel: n,
                maxWidth: r,
                onClick: o,
                onRender: s
            }) => {
                const m = (0, i.useRef)();
                return (0, i.useLayoutEffect)((() => {
                    s ? .(m)
                })), (0, l.jsxs)(a, {
                    maxWidth: r,
                    onClick: o,
                    ref: m,
                    "aria-label": n,
                    isTitleVisible: Boolean(e),
                    children: [e && (0, l.jsx)(c, {
                        children: e
                    }), (0, l.jsx)(d, {
                        children: t
                    })]
                })
            };
            m.propTypes = {
                title: o().node,
                ariaLabel: o().string,
                message: o().node.isRequired,
                maxWidth: o().number,
                onClick: o().func.isRequired,
                onRender: o().func
            };
            const h = (0, s.Ay)(m).withConfig({
                componentId: "sc-15hwucc-0"
            })([""])
        },
        32583: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var r = n(24726),
                o = n.n(r),
                i = n(10948),
                s = (n(88910), n(40577)),
                a = n(86222),
                c = function(e) {
                    return (0, a.jsx)("svg", { ...e,
                        children: (0, a.jsx)("path", {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            d: "M3 13L13 3m0 10L3 3"
                        })
                    })
                };
            c.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                focusable: "false",
                viewBox: "0 0 16 16"
            };
            const d = i.Ay.button.withConfig({
                    componentId: "sc-1uf0igr-0"
                })(["border:0;background:", ";color:", ";border-radius:", ";display:flex;align-items:center;justify-content:center;opacity:0.8;width:", ";height:", ";transform-origin:bottom;&:focus,&:active,&:hover{opacity:1;}&[data-garden-focus-visible]{box-shadow:inset ", ";outline:none;}"], (e => e.theme.palette.white), (e => e.theme.messenger.colors.iconColor), (e => e.theme.messenger.borderRadii.textMessage), (e => e.theme.messenger.iconSizes.xxl), (e => e.theme.messenger.iconSizes.xxl), (e => e.theme.shadows.md(e.theme.messenger.colors.action))),
                l = (0, i.Ay)(c).withConfig({
                    componentId: "sc-1uf0igr-1"
                })(["width:", ";height:", ";"], (e => (0, s.D0)(16, e.theme.messenger.baseFontSize)), (e => (0, s.D0)(16, e.theme.messenger.baseFontSize))),
                m = ({
                    onClick: e,
                    ariaLabel: t
                }) => (0, a.jsx)(d, {
                    onClick: e,
                    "aria-label": t,
                    children: (0, a.jsx)(l, {})
                });
            m.propTypes = {
                onClick: o().func,
                ariaLabel: o().string
            };
            const h = (0, i.Ay)(m).withConfig({
                componentId: "sc-1xsbl6q-0"
            })([""])
        },
        99028: (e, t, n) => {
            n.d(t, {
                Ay: () => m
            });
            var r = n(24726),
                o = n.n(r),
                i = n(88910),
                s = n(48559),
                a = n(10948),
                c = n(70513),
                d = n(86222);
            const l = i.forwardRef((({
                children: e,
                rootElement: t,
                title: n,
                hidden: r,
                ...o
            }, l) => {
                const [m, h] = (e => {
                    const t = (0, i.useRef)(null),
                        n = (0, i.useCallback)((n => {
                            t.current = n, e && ("function" == typeof e ? e(t.current) : e.current = t.current)
                        }), [t, e]);
                    return [t, n]
                })(l), u = (0, i.useRef)(t), [g, f] = (0, i.useState)(!1), [p, x] = (0, i.useState)(!1);
                (0, i.useEffect)((() => {
                    const e = () => {
                        f(!0)
                    };
                    if ("complete" === m.current.contentDocument.readyState) return void e();
                    const t = m.current;
                    return t.addEventListener("load", e), () => t.removeEventListener("load", e)
                }), [m]), (0, i.useEffect)((() => {
                    if (!g) return;
                    u.current || (u.current = document.createElement("div"));
                    const e = u.current,
                        t = m.current.contentDocument.body;
                    return t.appendChild(e), x(!0), () => {
                        t.contains(e) && t.removeChild(e)
                    }
                }), [m, t, g]), (0, i.useEffect)((() => {
                    if (!p) return;
                    const e = m.current.contentDocument;
                    let t = e.querySelector("title");
                    t || (t = e.createElement("title")), t.innerHTML = "", t.appendChild(e.createTextNode(n)), e.querySelector("head").appendChild(t)
                }), [n, p, m]);
                const y = {
                    colorScheme: "light",
                    ...o.style
                };
                return g && p && !r || (y.display = "none"), (0, d.jsx)("iframe", {
                    ref: h,
                    title: n,
                    ...o,
                    style: y,
                    children: g && p && (0, d.jsx)(a.ID, {
                        target: m.current.contentDocument.querySelector("head"),
                        children: (0, d.jsx)(c.Ay, {
                            value: {
                                document: m.current.contentDocument,
                                window: m.current.contentWindow
                            },
                            children: !r && s.createPortal(e, u.current)
                        })
                    })
                })
            }));
            l.propTypes = {
                children: o().node,
                rootElement: o().instanceOf(Element),
                title: o().string.isRequired,
                hidden: o().bool,
                style: o().object
            };
            const m = l
        }
    }
]);