"use strict";
(globalThis.webpackChunk_zendesk_web_widget_messenger = globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
    [3190], {
        30339: (e, r, a) => {
            a.d(r, {
                A: () => t
            });
            var n = a(20912),
                s = a(7533),
                o = a(26983);
            const t = () => ((0, n.d4)(o.JK), s.A.translate)
        },
        43190: (e, r, a) => {
            a.d(r, {
                A: () => v
            });
            var n = a(24726),
                s = a.n(n),
                o = a(88910),
                t = a(20912),
                i = a(10948),
                m = a(3261),
                l = a.n(m),
                d = a(64043),
                b = a(70069),
                g = a(70513),
                _ = a(26436),
                c = a(7533),
                k = a(30339),
                f = a(87944),
                u = a(52295),
                p = a(86222);
            const w = (0, i.DU)(["", " html{overflow-y:hidden;font-size:initial;", ";}"], l(), (e => e.backgroundColor && `background: ${e.backgroundColor}`)),
                h = ({
                    children: e,
                    setBackgroundColor: r
                }) => {
                    const a = (0, t.d4)(u.iB),
                        n = (0, t.d4)(f._),
                        s = n ? _.xm : _.Ez,
                        i = (0, g.UC)(),
                        m = (0, k.A)();
                    (0, o.useEffect)((() => {
                        i.document.documentElement.setAttribute("dir", c.A.isRTL() ? "rtl" : "ltr"), i.document.documentElement.setAttribute("lang", c.A.getLocale())
                    }), [c.A.getLocale()]);
                    return (0, p.jsx)(d.A, {
                        currentFrame: i,
                        primaryColor: a.primary,
                        messageColor: a.message,
                        actionColor: a.action,
                        baseFontSize: s,
                        isFullScreen: n,
                        rtl: c.A.isRTL(),
                        locale: c.A.getLocale(),
                        labels: {
                            receipts: {
                                receivedRecently: m("embeddable_framework.messenger.message.receipt.received_recently"),
                                status: {
                                    [b.x7.sending]: m("embeddable_framework.messenger.receipt.sending"),
                                    [b.x7.sent]: m("embeddable_framework.messenger.receipt.sent"),
                                    [b.x7.failed]: m("embeddable_framework.messenger.receipt.retry")
                                },
                                errors: {
                                    tooMany: m("embeddable_framework.messenger.file_upload.error.file_count_limit", {
                                        fileUploadCountLimit: _.Ci
                                    }),
                                    fileSize: m("embeddable_framework.messenger.file_upload.error.file_size_limit", {
                                        fileUploadSizeLimitInMb: 50
                                    }),
                                    characterLimit: m("embeddable_framework.messenger.receipt.exceed_limit"),
                                    fileType: m("embeddable_framework.messenger.file_upload.error.file_type_limit"),
                                    unknown: m("embeddable_framework.messenger.file_upload.tap_to_retry"),
                                    failedToSendAriaLabel: m("embeddable_framework.messenger.file_upload.error.failed_to_send.aria_label")
                                }
                            },
                            footer: {
                                referrerLink: {
                                    label: m("embeddable_framework.messenger.footer.referrer_link.label"),
                                    text: m("embeddable_framework.messenger.footer.referrer_link.text")
                                }
                            },
                            carouselMessage: {
                                previousButtonAriaLabel: m("embeddable_framework.messenger.carousel_message.button.previous"),
                                nextButtonAriaLabel: m("embeddable_framework.messenger.carousel_message.button.next"),
                                actionButtonFormat: (e, r) => m("embeddable_framework.messenger.carousel_message.action.accessible_text", {
                                    action: e,
                                    title: r
                                })
                            },
                            composer: {
                                placeholder: m("embeddable_framework.messenger.composer.placeholder"),
                                inputAriaLabel: m("embeddable_framework.messenger.composer.label"),
                                sendButtonTooltip: m("embeddable_framework.messenger.composer.send_button_tooltip"),
                                sendButtonAriaLabel: m("embeddable_framework.messenger.composer.send_button_label")
                            },
                            fileUpload: {
                                uploadButtonAriaLabel: m("embeddable_framework.messenger.file_upload.upload_button"),
                                dragDropOverlayText: m("embeddable_framework.messenger.file_upload.drag_drop_overlay_text")
                            },
                            imageMessage: {
                                openImage: m("embeddable_framework.messenger.file_upload.open_image_in_new_tab_v2"),
                                primaryParticipantAltText: m("embeddable_framework.messenger.image_message.alt_text.end_user_v2"),
                                otherParticipantAltText: m("embeddable_framework.messenger.image_message.alt_text.agent_v2"),
                                imageFetchError: m("embeddable_framework.messenger.image_message.alt_text.broken_image_error")
                            },
                            fileMessage: {
                                sizeInKB: e => m("embeddable_framework.messenger.message.file.size_in_kb", {
                                    size: e
                                }),
                                sizeInMB: e => m("embeddable_framework.messenger.message.file.size_in_mb", {
                                    size: e
                                }),
                                downloadAriaLabel: m("embeddable_framework.messenger.message.file.download"),
                                titleFormat: e => m("embeddable_framework.messenger.file_message.alt_text", {
                                    filename: e
                                })
                            },
                            htmlTextMessage: {
                                tooltipCopyCode: m("embeddable_framework.messenger.rich_text_tooltip_copy_code"),
                                tooltipCodeCopied: m("embeddable_framework.messenger.rich_text_tooltip_copied")
                            },
                            messengerHeader: {
                                avatarAltTag: m("embeddable_framework.messenger.header.company_logo"),
                                closeButtonAriaLabel: m("embeddable_framework.messenger.header.close"),
                                optionsMenuAriaLabel: m("embeddable_framework.messenger.options_menu"),
                                continueOnChannel: e => m(`embeddable_framework.messenger.header.menu.continue_on_${e.toLowerCase()}`)
                            },
                            otherParticipantLayout: {
                                avatarAltTag: ""
                            },
                            formMessage: {
                                nextStep: m("embeddable_framework.messenger.message.form.next_step"),
                                send: m("embeddable_framework.messenger.message.form.submit"),
                                submitting: m("embeddable_framework.messenger.message.form.submitting"),
                                submissionError: m("embeddable_framework.messenger.message.form.failed_to_submit"),
                                stepStatus: (e, r) => m("embeddable_framework.messenger.message.form.step_status", {
                                    step: e,
                                    totalSteps: r
                                }),
                                errors: {
                                    requiredField: e => m("embeddable_framework.messenger.message.form.field_is_required_v3", {
                                        fieldLabel: e
                                    }),
                                    requiredName: m("embeddable_framework.messenger.message.form.incomplete_name"),
                                    invalidEmail: m("embeddable_framework.messenger.message.form.invalid_email"),
                                    requiredEmail: m("embeddable_framework.messenger.message.form.incomplete_email"),
                                    errorIcon: m("embeddable_framework.messenger.message.form.error_icon"),
                                    fieldMinSize: (e, r) => m("embeddable_framework.messenger.message.form.invalid_min_characters_v3", {
                                        count: r,
                                        fieldLabel: e
                                    }),
                                    fieldMaxSize: (e, r) => m(1 === r ? "embeddable_framework.messenger.message.form.invalid_max_characters.one_v3" : "embeddable_framework.messenger.message.form.invalid_max_characters.other_v3", {
                                        count: r,
                                        fieldLabel: e
                                    })
                                },
                                selectSearchEmpty: m("embeddable_framework.messenger.message.form.select_search_empty")
                            },
                            launcher: {
                                openWindowAriaLabel: m("embeddable_framework.messenger.launcher.button"),
                                closeWindowAriaLabel: m("embeddable_framework.messenger.launcher.button_close_messaging_window")
                            },
                            launcherLabel: {
                                ariaLabel: m("embeddable_framework.messenger.launcher_label.close_v2")
                            },
                            formatTimestamp: e => {
                                const r = new Date,
                                    a = new Date(e),
                                    n = a.getDate() === r.getDate() && a.getMonth() === r.getMonth() && a.getFullYear() === r.getFullYear();
                                return `${a.toLocaleString(c.A.getLocale(),{...n?{}:{month:"long",day:"numeric"},hour:"numeric",minute:"numeric"})}`
                            },
                            messageLog: {
                                initialConversationRequestFailed: m("embeddable_framework.messenger.initial_conversation_request_failed"),
                                initialConversationRetry: m("embeddable_framework.messenger.initial_conversation_retry"),
                                initialConversationSpinner: m("embeddable_framework.messenger.initial_conversation_spinner"),
                                messageHistoryRetry: m("embeddable_framework.messenger.previous_messages_retry"),
                                messageHistorySpinner: m("embeddable_framework.messenger.previous_messages_spinner"),
                                dividers: {
                                    unreadMessagesDivider: m("embeddable_framework.messenger.unread_message_divider.new")
                                }
                            },
                            notification: {
                                connectError: m("embeddable_framework.messenger.notification.channel_linking.link.failed"),
                                disconnectError: m("embeddable_framework.messenger.notification.channel_linking.unlink.fail"),
                                aiDisclaimer: m("embeddable_framework.messenger.message_bubble.ai_disclaimer")
                            },
                            channelLink: {
                                linkError: {
                                    qrError: m("embeddable_framework.messenger.channel_link.link_error.qr_code_error"),
                                    buttonError: m("embeddable_framework.messenger.channel_link.link_error.button_error"),
                                    retry: m("embeddable_framework.messenger.file_upload.tap_to_retry")
                                },
                                generateNewQrCode: m("embeddable_framework.messenger.channel_linking.generate_new_qr_code"),
                                generateNewLink: m("embeddable_framework.messenger.channel_linking.generate_new_link"),
                                whatsapp: {
                                    title: m("embeddable_framework.messenger.channel_linking.page.title.whatsapp"),
                                    subtitle: m("embeddable_framework.messenger.channel_linking.page.subtitle.whatsapp"),
                                    instructions: {
                                        desktop: () => m("embeddable_framework.messenger.channel_linking.page.instructions_desktop.whatsapp"),
                                        mobile: () => m("embeddable_framework.messenger.channel_linking.page.instructions_mobile.whatsapp")
                                    },
                                    qrCodeAlt: m("embeddable_framework.messenger.channel_linking.page.qr_code.whatsapp"),
                                    button: {
                                        desktop: m("embeddable_framework.messenger.channel_linking.page.button_desktop.whatsapp"),
                                        mobile: m("embeddable_framework.messenger.channel_linking.page.button_mobile.whatsapp")
                                    },
                                    disconnectButtonText: m("embeddable_framework.messenger.channel_link.whatsapp.disconnect_button_text"),
                                    disconnectLinkText: m("embeddable_framework.messenger.channel_link.whatsapp.disconnect_link_text")
                                },
                                messenger: {
                                    title: m("embeddable_framework.messenger.channel_linking.page.title.fb_messenger"),
                                    subtitle: m("embeddable_framework.messenger.channel_linking.page.subtitle.fb_messenger"),
                                    instructions: {
                                        desktop: () => m("embeddable_framework.messenger.channel_linking.page.instructions_desktop.fb_messenger"),
                                        mobile: () => m("embeddable_framework.messenger.channel_linking.page.instructions_mobile.fb_messenger")
                                    },
                                    qrCodeAlt: m("embeddable_framework.messenger.channel_linking.page.qr_code.fb_messenger"),
                                    button: {
                                        desktop: m("embeddable_framework.messenger.channel_linking.page.button_desktop.fb_messenger"),
                                        mobile: m("embeddable_framework.messenger.channel_linking.page.button_mobile.fb_messenger")
                                    },
                                    disconnectButtonText: m("embeddable_framework.messenger.channel_link.messenger.disconnect_button_text"),
                                    disconnectLinkText: m("embeddable_framework.messenger.channel_link.messenger.disconnect_link_text")
                                },
                                instagram: {
                                    title: m("embeddable_framework.messenger.channel_linking.page.title.instagram"),
                                    subtitle: m("embeddable_framework.messenger.channel_linking.page.subtitle.instagram"),
                                    instructions: {
                                        desktop: e => m("embeddable_framework.messenger.channel_linking.page.instructions_desktop.instagram", {
                                            instagramHandle: e
                                        }),
                                        mobile: e => m("embeddable_framework.messenger.channel_linking.page.instructions_mobile.fb_messenger", {
                                            instagramHandle: e
                                        })
                                    },
                                    qrCodeAlt: m("embeddable_framework.messenger.channel_linking.page.qr_code.instagram"),
                                    button: {
                                        desktop: m("embeddable_framework.messenger.channel_linking.page.button_desktop.instagram"),
                                        mobile: m("embeddable_framework.messenger.channel_linking.page.button_mobile.instagram")
                                    },
                                    disconnectButtonText: m("embeddable_framework.messenger.channel_link.instagram.disconnect_button_text"),
                                    disconnectLinkText: m("embeddable_framework.messenger.channel_link.instagram.disconnect_link_text")
                                }
                            },
                            proactiveMessaging: {
                                proactiveMessage: {
                                    avatarAlt: ({
                                        name: e
                                    }) => m("embeddable_framework.messenger.proactive_message.avatar_alt", {
                                        name: e
                                    })
                                }
                            },
                            soundNotifications: {
                                toggleEnabled: m("embeddable_framework.messenger.sound_notification.toggle.enabled"),
                                toggleDisabled: m("embeddable_framework.messenger.sound_notification.toggle.disabled"),
                                hiddenField: m("embeddable_framework.messenger.sound_notification.toggle.hidden_label")
                            },
                            postbackAction: {
                                fieldError: ({
                                    errorSource: e
                                }) => m("embeddable_framework.messenger.postback_button.error.global_error_message", {
                                    errorSource: e
                                })
                            },
                            emojiPicker: {
                                people: m("embeddable_framework.messenger.emoji.people"),
                                nature: m("embeddable_framework.messenger.emoji.nature"),
                                food: m("embeddable_framework.messenger.emoji.food"),
                                activities: m("embeddable_framework.messenger.emoji.activities"),
                                places: m("embeddable_framework.messenger.emoji.places"),
                                objects: m("embeddable_framework.messenger.emoji.objects"),
                                symbols: m("embeddable_framework.messenger.emoji.symbols"),
                                flags: m("embeddable_framework.messenger.emoji.flags"),
                                tonePickerTooltipSelectTone: m("embeddable_framework.messenger.emoji.tone_picker.tooltip.select_tone"),
                                tonePickerLabelDefaultTone: m("embeddable_framework.messenger.emoji.tone_picker.label.default_tone"),
                                tonePickerLabelLightTone: m("embeddable_framework.messenger.emoji.tone_picker.label.light_tone"),
                                tonePickerLabelMediumLightTone: m("embeddable_framework.messenger.emoji.tone_picker.label.medium_light_tone"),
                                tonePickerLabelMediumTone: m("embeddable_framework.messenger.emoji.tone_picker.label.medium_tone"),
                                tonePickerLabelMediumDarkTone: m("embeddable_framework.messenger.emoji.tone_picker.label.medium_dark_tone"),
                                tonePickerLabelDarkTone: m("embeddable_framework.messenger.emoji.tone_picker.label.dark_tone"),
                                searchLabel: m("embeddable_framework.messenger.emoji.search_label"),
                                tooltipEmojiButton: m("embeddable_framework.messenger.emoji.tooltip.emoji_button")
                            },
                            conversationsList: {
                                conversationsFailedToLoad: m("embeddable_framework.messenger.multiconversation.conversations_load_failed"),
                                messageHistorySpinner: "Loading previous conversations"
                            },
                            ariaLabels: {
                                unreadMessagesCount: {
                                    oneUnreadMessage: m("embeddable_framework.messenger.multiconversation.preview_one_unread_message"),
                                    moreThanOneUnreadMessage: e => m("embeddable_framework.messenger.multiconversation.preview_less_than_99_unread_message", {
                                        count: e
                                    }),
                                    moreThan99UnreadMessages: m("embeddable_framework.messenger.multiconversation.preview_more_than_99_unread_message")
                                },
                                linkExternalAncor: m("embeddable_framework.messenger.rich_text_external_anchor.aria_label")
                            }
                        },
                        children: (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(w, {
                                backgroundColor: r ? a.primary : void 0
                            }), e]
                        })
                    })
                };
            h.propTypes = {
                children: s().node,
                setBackgroundColor: s().bool
            };
            const v = h
        },
        64043: (e, r, a) => {
            a.d(r, {
                A: () => _,
                z: () => d
            });
            var n = a(24726),
                s = a.n(n),
                o = a(10948),
                t = a(80002),
                i = a(70069),
                m = a(97313),
                l = a(86222);
            const d = (0, m.A)(),
                b = (0, o.DU)(["html{color:", ";}"], (e => e.theme.messenger.colors.frameText)),
                g = ({
                    primaryColor: e,
                    messageColor: r,
                    actionColor: a,
                    rtl: n,
                    baseFontSize: s,
                    currentFrame: o,
                    labels: i,
                    isFullScreen: d,
                    children: g,
                    locale: _
                }) => {
                    const c = (0, m.A)({
                        rtl: n,
                        currentFrame: o,
                        baseFontSize: s,
                        primaryColor: e,
                        messageColor: r,
                        actionColor: a,
                        labels: i,
                        isFullScreen: d,
                        locale: _
                    });
                    return (0, l.jsx)(t.N, {
                        theme: c,
                        children: (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(b, {}), g]
                        })
                    })
                };
            g.propTypes = {
                children: s().node,
                primaryColor: s().string,
                messageColor: s().string,
                actionColor: s().string,
                rtl: s().bool,
                locale: s().string,
                baseFontSize: s().string,
                currentFrame: s().object,
                labels: s().shape({
                    composer: s().shape({
                        placeholder: s().string,
                        inputAriaLabel: s().string,
                        sendButtonTooltip: s().string,
                        sendButtonAriaLabel: s().string
                    }),
                    fileUpload: s().shape({
                        uploadButtonAriaLabel: s().string,
                        dragDropOverlayText: s().string,
                        messageBubbleHover: s().string
                    }),
                    fileMessage: s().shape({
                        sizeInMB: s().func,
                        sizeInKB: s().func,
                        downloadAriaLabel: s().string
                    }),
                    formMessage: s().shape({
                        nextStep: s().string,
                        send: s().string,
                        submitting: s().string,
                        submissionError: s().string,
                        stepStatus: s().func,
                        errors: s().shape({
                            fieldMaxSize: s().func,
                            fieldMinSize: s().func,
                            invalidEmail: s().string,
                            requiredEmail: s().string,
                            requiredField: s().func,
                            requiredName: s().string,
                            errorIcon: s().string
                        })
                    }),
                    messengerHeader: s().shape({
                        avatarAltTag: s().string,
                        closeButtonAriaLabel: s().string
                    }),
                    receipts: s().shape({
                        status: s().shape({
                            [i.x7.sending]: s().string,
                            [i.x7.sent]: s().string,
                            [i.x7.failed]: s().string
                        }),
                        errors: s().shape({
                            tooMany: s().string,
                            fileSize: s().string,
                            unknown: s().string
                        }),
                        receivedRecently: s().string
                    }),
                    postbackAction: s().shape({
                        fieldError: s().func
                    })
                }),
                launcher: s().shape({
                    ariaLabel: s().string
                }),
                isFullScreen: s().bool,
                emojiPicker: s().shape({
                    people: s().string,
                    nature: s().string,
                    food: s().string,
                    activities: s().string,
                    places: s().string,
                    objects: s().string,
                    symbols: s().string,
                    flags: s().string,
                    tonePickerTooltipSelectTone: s().string,
                    tonePickerLabelDefaultTone: s().string,
                    tonePickerLabelLightTone: s().string,
                    tonePickerLabelMediumLightTone: s().string,
                    tonePickerLabelMediumTone: s().string,
                    tonePickerLabelMediumDarkTone: s().string,
                    tonePickerLabelDarkTone: s().string,
                    searchLabel: s().string,
                    tooltipEmojiButton: s().string
                })
            };
            const _ = g
        },
        70513: (e, r, a) => {
            a.d(r, {
                Ay: () => t,
                UC: () => o
            });
            var n = a(88910);
            const s = (0, n.createContext)({
                    document,
                    window
                }),
                o = () => (0, n.useContext)(s),
                t = (s.Consumer, s.Provider)
        }
    }
]);