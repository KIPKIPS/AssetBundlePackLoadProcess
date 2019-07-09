$(function() { (new MainManager).init()
});
var MainManager = function() {
        aidn.util.useDummyDiv();
        function e() {
            G = aidn.window.width(),
                E = aidn.window.height(),
            m && (m.resize(G, E), C && C.resize())
        }
        function a(n, e) {
            e = R.length + x.length,
            1 == I && (n += x.length);
            var a = Math.round(n / e * 100) + "%";
            e <= 0 && (a = "0%"),
                $("#scene_loading hr").css("width", a)
        }
        function t() {
            1 == ++I ? R.init(t, a) : 2 == I && i()
        }
        function i() {
            b = 1,
                $("#scene_loading hr").css("display", "none"),
                $("#scene_loading hr").css("width", 0),
                $("#scene_loading").stop().fadeOut(200, "linear"),
                p ? ($("#scene_loading").stop().css("display", "none"), $("#bt_back").stop().css("display", "none"), B && $("#bt_fs").stop().css("display", "none"), $("#scene_main .set").stop().css("display", "none")) : $("#scene_main").stop().fadeIn(200, "linear"),
                w = aidn.___waContext.currentTime,
                C.start(),
                x.start()
        }
        function n(n) { (U = !U) ? ($("#bt_feedback a").text("FEEDBACK: ON"), aidn.util.setCookie("fb", "on", 2592e3)) : ($("#bt_feedback a").text("FEEDBACK: OFF"), aidn.util.setCookie("fb", "off", 2592e3)),
        n && n.preventDefault()
        }
        function o(n) { (g = !g) ? ($("#bt_backtrack a").text("BACKTRACK: ON"), aidn.util.setCookie("bt", "on", 2592e3)) : ($("#bt_backtrack a").text("BACKTRACK: OFF"), aidn.util.setCookie("bt", "off", 2592e3)),
        n && n.preventDefault()
        }
        function r() {
            x.update(),
            1 == b && --D < 0 && v(),
                function() {
                    if (!p) return;
                    if (1 != b) return;
                    var n = 1e3 * (aidn.___waContext.currentTime - w);
                    if (l * s < n) {
                        var e = Math.floor(n / s) + 1;
                        h += e - l;
                        var a = (l = e) * s - n;
                        if (0 <= a) {
                            var t = Math.random(),
                                i = 1;
                            192 <= h ? h = 0 : 128 <= h ? (t < .7 && (i = 2), t < .5 && (i = 3)) : 64 <= h ? (t < .35 && (i = 2), t < .2 && (i = 3), t < .02 && (i = 0)) : 32 <= h ? (t < .35 && (i = 2), t < .24 && (i = 0)) : 0 <= h && t < .4 && (i = 0);
                            for (var o = 0; o < i; o++) d = c[f],
                            32 <= ++f && (f = 0, aidn.util.shuffleArray(c)),
                                C.changeId(d, 0, !0)
                        }
                    }
                } (),
                m.render(A),
                window.requestAnimFrame(r)
        }
        this.init = function() { !
            function() {
                aidn.window.addDummyDiv();
                try {
                    aidn.adv.show()
                } catch(n) {}
                var n = 1;
                2 <= window.devicePixelRatio && (n = 2); (m = PIXI.autoDetectRenderer(G, E, {
                    backgroundColor: 16756655,
                    antialias: !1,
                    resolution: n
                })).autoResize = !0,
                    document.getElementById("view").appendChild(m.view),
                    A = new PIXI.Container,
                    C.init(),
                    e(),
                    $("#scene_top").fadeIn(300),
                    r()
            } ()
        };
        for (var l = 0,
                 s = 250,
                 d = Math.floor(32 * Math.random()), h = 0, c = [], f = 0, u = 0; u < 32; u++) c[u] = u;
        function v() {
            p || S || (S = !0, $("#bt_back").stop().fadeIn(200, "linear"), B && $("#bt_fs").stop().fadeIn(200, "linear"), $("#scene_main .set").stop().fadeIn(200, "linear"))
        }
        var p = !1;
        1 == aidn.util.getQuery().auto && (p = !0),
            aidn.util.needExpandArea(!0);
        var B = aidn.util.enabledFullscreen();
        B && ($("#bt_fs").css("display", "block"), $("#bt_fs").click(function(n) {
            aidn.util.fullscreen()
        })),
            $("#bt_start a").click(function(n) {
                $("#scene_top").stop().fadeOut(200, "linear"),
                    $("#scene_loading").stop().fadeIn(200, "linear"),
                    2 == I ? i() : ((new aidn.WebAudio).load(""), x.init(t, a));
                try {
                    aidn.adv.show()
                } catch(n) {}
                n.preventDefault()
            }),
            $("#bt_about a").click(function(n) {
                $("#about").stop().fadeIn(200, "linear"),
                    $("#about_cover").stop().fadeIn(200, "linear"),
                    n.preventDefault()
            }),
            $("#bt_close,#about_cover").click(function() {
                $("#about").stop().fadeOut(200, "linear"),
                    $("#about_cover").stop().fadeOut(200, "linear")
            }),
            $("#bt_back").click(function() {
                switch (b) {
                    case 1:
                        b = 0;
                        try {
                            aidn.adv.show()
                        } catch(n) {}
                        C.end(),
                            x.end(),
                            $("#scene_top").stop().fadeIn(100, "linear"),
                            $("#scene_loading").stop().fadeOut(100, "linear"),
                            $("#scene_main").stop().fadeOut(100, "linear"),
                            v();
                        break;
                    default:
                        location.href = "../contents/"
                }
            }),
            $("#bt_feedback a").click(n),
            $("#bt_backtrack a").click(o);
        var G, E, y = "https://aidn.jp/momotap/";
        $("#bt_tw").click(function(n) {
            var e = document.title;
            aidn.social.shareTw(y, !0, e, "daniwell_aidn", "Momotap")
        }),
            $("#bt_fb").click(function(n) {
                aidn.social.shareFb(y, !0)
            }),
            $("#bt_gp").click(function(n) {
                aidn.social.shareGp(y, !0)
            });
        var w, m, A, M = aidn.util.checkJapanese(),
            z = aidn.util.checkMobile(),
            I = 0,
            b = 0,
            x = new
            function() {
                function t() {
                    d && d()
                }
                function i(n, e) {
                    a && a(n, e)
                }
                var r;
                this.init = function(n, e) {
                    a = e,
                        function(n) {
                            d = n;
                            for (var e = [], a = 0; a < o; a++) e[a] = [a + ".mp3"]; (r = new WebAudioManager).load("data/track/track.json", e, t, i)
                        } (n)
                },
                    this.update = function() { !
                        function() {
                            if (l) {
                                var n = 1e3 * (aidn.___waContext.currentTime - w);
                                if (f * u < n) {
                                    var e = (f = Math.floor(n / u) + 1) * u - n;
                                    if (0 <= e) {
                                        if (!g) return;
                                        for (var a = (f - 1) % c, t = h.length, i = 0; i < t; i++) {
                                            var o = h[i][a];
                                            0 <= o && r.play(o, e / 1e3, s[o])
                                        }
                                    }
                                }
                            }
                        } ()
                    },
                    this.start = function() {
                        l = !0,
                            f = 0
                    };
                this.end = function() {
                    l = !1,
                        f = 0
                };
                var l = !1,
                    o = 5;
                this.length = o;
                for (var s = [], n = 0; n < o; n++) s[n] = 1.15;
                var d, a, h = [[0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1], [3, -1, 3, -1, 3, -1, 3, -1, 3, -1, 3, -1, 3, -1, 3, -1, 4, -1, 4, -1, 4, -1, 4, -1, 4, -1, 4, -1, 4, -1, 4, -1]],
                    c = h[0].length,
                    f = 0,
                    u = 250
            },
            R = new
            function() {
                function t() {
                    s && s()
                }
                function i(n, e) {
                    a && a(n, e)
                }
                var o;
                this.init = function(n, e) {
                    a = e,
                        function(n) {
                            s = n;
                            for (var e = [], a = 0; a < r; a++) e[a] = [a + ".mp3"]; (o = new WebAudioManager).load("data/main/main.json", e, t, i)
                        } (n)
                };
                this.play = function(n, e) {
                    if (e) {
                        var a = 1e3 * (aidn.___waContext.currentTime - w),
                            t = d - a % d;
                        o.play(n, t / 1e3, l[n])
                    } else o.play(n, 0, l[n])
                };
                var r = 32;
                this.length = r;
                for (var l = [], n = 0; n < r; n++) l[n] = 1;
                l[1] = .8,
                    l[7] = .8,
                    l[9] = 1.4,
                    l[16] = .9,
                    l[29] = .65,
                    l[30] = 1.1;
                var s, a, d = 250
            },
            C = new
            function() {
                var s = function(n, e) {
                        this.id = n,
                            this.setPosition = function(n, e) {
                                r.position.x = a = n,
                                    r.position.y = t = e
                            },
                            this.setSize = function(n, e) {
                                i = n,
                                    o = e,
                                    r.clear(),
                                    r.beginFill(16777215),
                                    r.alpha = 0,
                                    r.drawRect(0, 0, i, o)
                            },
                            this.play = function() {
                                U && TweenLite.fromTo(r, .5, {
                                        alpha: .7
                                    },
                                    {
                                        alpha: 0,
                                        ease: Power0.easeNon
                                    })
                            },
                            this.hitcheck = function(n, e) {
                                return a <= n && n < a + i && t <= e && e < t + o
                            };
                        var a = 0,
                            t = 0,
                            i = 0,
                            o = 0,
                            r = new PIXI.Graphics;
                        r.interactive = !0,
                            e.addChild(r)
                    },
                    n = function(n) {
                        function e() {
                            o.clear(),
                                o.beginFill(16777215),
                                o.drawRect(0, 0, G, E)
                        }
                        function a() {
                            t.resize()
                        }
                        this.resize = function() {
                            o.clear(),
                                o.beginFill(i),
                                o.drawRect(0, 0, G, E)
                        },
                            this.flash = function() {
                                r.setChildIndex(o, r.children.length - 1);
                                for (var n = 0; n < 3; n += 2) TweenLite.delayedCall(.07 * n, e),
                                    TweenLite.delayedCall(.07 * (n + 1), a)
                            },
                            this.setColor = function(n, e) {
                                i = n,
                                    e = 0 <= e ? e: 0,
                                    r.setChildIndex(o, e),
                                    t.resize()
                            };
                        var t = this,
                            i = 16777215,
                            o = new PIXI.Graphics,
                            r = n;
                        r.addChild(o)
                    },
                    d = function(n, e) {
                        function a() {
                            var n, e, a, t = 1.3 * d;
                            if (f.clear(), f.beginFill(0), f.moveTo(0, 0), 0 == o) for (var i = 0; i < c.rotation; i += 30) n = (s * i + l) * Math.PI / 180,
                                e = Math.cos(n) * t,
                                a = Math.sin(n) * t,
                                f.lineTo(e, a);
                            else for (i = 360; c.rotation < i; i -= 30) n = (s * i + l) * Math.PI / 180,
                                e = Math.cos(n) * t,
                                a = Math.sin(n) * t,
                                f.lineTo(e, a);
                            n = (s * c.rotation + l) * Math.PI / 180,
                                e = Math.cos(n) * t,
                                a = Math.sin(n) * t,
                                f.lineTo(e, a),
                                f.lineTo(0, 0),
                                f.endFill()
                        }
                        function t() {
                            o = 1,
                                TweenLite.fromTo(c, .9, {
                                        rotation: 0
                                    },
                                    {
                                        rotation: 360,
                                        ease: Power1.easeOut,
                                        onUpdate: a,
                                        onComplete: i
                                    })
                        }
                        function i() {
                            r && r()
                        }
                        this.play = function(n, e) {
                            o = 0,
                                d = n,
                                r = e,
                                l = 360 * Math.random(),
                                s = 1,
                            Math.random() < .5 && (s = -1),
                                f.clear(),
                                f.beginFill(0),
                                f.moveTo(0, 0),
                                f.lineTo(1, 1),
                                f.endFill(),
                                TweenLite.fromTo(c, .6, {
                                        rotation: 0
                                    },
                                    {
                                        rotation: 360,
                                        ease: Power1.easeOut,
                                        onUpdate: a,
                                        onComplete: t
                                    })
                        };
                        var o, r, l, s, d, h = n,
                            c = {
                                rotation: 0
                            },
                            f = new PIXI.Graphics;
                        h.addChild(f),
                            e.mask = f
                    },
                    r = function(n) {
                        function h() {
                            w.clear(),
                                0 == f ? w.lineStyle(v, u) : w.beginFill(u);
                            for (var n = 0; n < p; n++) {
                                var e = m["p" + n].x,
                                    a = m["p" + n].y;
                                0 == n ? w.moveTo(e, a) : w.lineTo(e, a)
                            }
                            e = m.p0.x,
                                a = m.p0.y,
                                w.lineTo(e, a)
                        }
                        function c() {
                            w.visible = !1,
                            a && a()
                        }
                        this.play = function(n, e) {
                            f = n,
                                a = e,
                                function() {
                                    y.setChildIndex(w, y.children.length - 1),
                                        w.visible = !0,
                                        w.x = G / 2,
                                        w.y = E / 2,
                                        u = L();
                                    var n, e = Math.min(G, E) * (.32 * Math.random() + .16),
                                        a = Math.floor(5 * Math.random()) + 3;
                                    p = a,
                                        v = 4 * Math.random() + 2,
                                        w.clear(),
                                        w.rotation = 30 * Math.floor(6 * Math.random()),
                                        m = {},
                                        n = 0 == f ? 3 : 2.5;
                                    for (var t = 360 / p,
                                             i = 0; i < p; i++) {
                                        var o = i * t * Math.PI / 180,
                                            r = e * Math.cos(o),
                                            l = e * Math.sin(o),
                                            s = r + e * (Math.random() - .5) * n,
                                            d = l + e * (Math.random() - .5) * n;
                                        m["p" + i] = {
                                            x: r,
                                            y: l
                                        },
                                            TweenLite.to(m["p" + i], .6, {
                                                x: s,
                                                y: d
                                            })
                                    }
                                    m.progress = 0,
                                        TweenLite.to(m, .8, {
                                            progress: 1,
                                            onUpdate: h,
                                            onComplete: c
                                        })
                                } ()
                        };
                        var a, f, u, v, p, y = n,
                            w = new PIXI.Graphics;
                        y.addChild(w);
                        var m = {}
                    },
                    t = function(n, e) {
                        var f = function(n) {
                            function i() {
                                v.clear(),
                                    v.lineStyle(d, h),
                                    v.moveTo(s.x, s.y),
                                    0 == u ? v.lineTo(r.x, r.y) : v.lineTo(l.x, l.y)
                            }
                            function o() {
                                0 == u ? (u = 1, s = {
                                    x: r.x,
                                    y: r.y
                                },
                                    TweenLite.to(s, f, {
                                        x: l.x,
                                        y: l.y,
                                        ease: Power1.easeOut,
                                        onUpdate: i,
                                        onComplete: o
                                    })) : (v.clear(), v.visible = !1)
                            }
                            this.play = function(n, e, a, t) {
                                return v.visible = !0,
                                    u = 0,
                                    r = n,
                                    l = e,
                                    d = a,
                                    h = t,
                                    c = .2 * Math.random() + .2,
                                    f = .2 * Math.random() + .2,
                                    s = {
                                        x: r.x,
                                        y: r.y
                                    },
                                    TweenLite.to(s, c, {
                                        x: l.x,
                                        y: l.y,
                                        ease: Power1.easeOut,
                                        onUpdate: i,
                                        onComplete: o
                                    }),
                                c + f
                            };
                            var r, l, s, d, h, c, f, u, e = n,
                                v = new PIXI.Graphics;
                            e.addChild(v)
                        };
                        function u() {
                            y.visible = !1,
                            0 <= v.id && C[v.id].push(v),
                            a && a()
                        }
                        this.play = function(n) {
                            a = n,
                                function() {
                                    p.setChildIndex(y, p.children.length - 1),
                                        y.visible = !0,
                                        y.x = G / 2,
                                        y.y = E / 2,
                                        y.rotation = .5 * Math.PI * Math.floor(4 * Math.random());
                                    for (var n, e = Math.floor(7 * Math.random() + 2), a = .8 * Math.min(G, E), t = (v.size = a) / e * (.4 * Math.random() + .7), i = a / e * (.4 * Math.random() + .1), o = L(), r = 0, l = 0; l <= e; l++) {
                                        var s = (l - .5 * e) * t,
                                            d = {
                                                x: -a / 2,
                                                y: s
                                            },
                                            h = {
                                                x: a / 2,
                                                y: s
                                            },
                                            c = (n = w[l] ? w[l] : new f(y)).play(d, h, i, o);
                                        r < c && (r = c),
                                            w[l] = n
                                    }
                                    TweenLite.delayedCall(r, u)
                                } ()
                        };
                        var v = this,
                            p = n;
                        this.id = e;
                        var a, y = new PIXI.Container,
                            w = [];
                        this.size = 0,
                            this.container = y,
                            p.addChild(y)
                    };
                function l(n, e) {
                    for (var a = m.length,
                             t = 0; t < a; t++) {
                        var i = m[t];
                        if (i.hitcheck(n, e)) return u != i.id && i.play(),
                            i.id
                    }
                    return ! 1
                }
                function e(n) {
                    c(65 <= n.keyCode ? n.keyCode - 55 : 48 <= n.keyCode ? n.keyCode - 48 : n.keyCode)
                }
                function a(n) {
                    c( - 1)
                }
                function i(n) {
                    y = !0;
                    var e = aidn.event.getPos(n),
                        a = l(e.x, e.y);
                    if (c(a), n.originalEvent && n.originalEvent.touches) for (var t = n.originalEvent.touches.length,
                                                                                   i = 1; i < t; i++) {
                        var o = n.originalEvent.touches[i];
                        c(a = l(o.pageX, o.pageY), 1)
                    }
                }
                function o(n) {
                    if (y) {
                        var e = aidn.event.getPos(n);
                        c(l(e.x, e.y), 0, !0)
                    }
                    n.preventDefault()
                }
                function h(n) {
                    y && (c( - 1), y = !1)
                }
                function c(n, e, a) {
                    var t, i;
                    u != n && (1 != e && (u = n), u < 0 || (R.play(n % R.length, a), D = 90, S && (S = !1, $("#bt_back").stop().fadeOut(200, "linear"), B && $("#bt_fs").stop().fadeOut(200, "linear"), $("#scene_main .set").stop().fadeOut(200, "linear")), --x <= 0 && (i = (t = Math.floor(I.length * Math.random())) + M.length, (C[i].length ? C[i].pop() : new I[t](b, i)).play(), x = 12 * Math.random() + 6), t = n % M.length, (0 < C[t].length ? C[t].pop() : new M[t](b, t)).play()))
                }
                this.resize = function() {
                    if (w) {
                        var n = 0,
                            e = v,
                            a = p;
                        E < G && (e = p, a = v);
                        for (var t = G / e,
                                 i = E / a,
                                 o = 0; o < a; o++) for (var r = 0; r < e; r++) {
                            var l;
                            m[n] ? l = m[n] : (l = new s(n, f), m[n] = l),
                                l.setPosition(t * r, i * o),
                                l.setSize(t, i),
                                n++
                        }
                        T.resize()
                    }
                },
                    this.init = function() {
                        w = !0,
                            b = new PIXI.Container,
                            A.addChild(b),
                            f = new PIXI.Container,
                            A.addChild(f),
                            (T = new n(b)).setColor(16756655, 0)
                    },
                    this.start = function() {
                        z || ($("#view").on("mousedown", i), $(window).on("mousemove", o), $(window).on("mouseup", h), $(window).on("keydown", e), $(window).on("keyup", a)),
                        (z || window.TouchEvent) && ($("#view").on("touchstart", i), $(window).on("touchmove", o), $(window).on("touchend", h)),
                            $("#view").css("cursor", "pointer")
                    },
                    this.end = function() {
                        z || ($("#view").off("mousedown", i), $(window).off("mousemove", o), $(window).off("mouseup", h), $(window).off("keydown", e), $(window).off("keyup", a)),
                        (z || window.TouchEvent) && ($("#view").off("touchstart", i), $(window).off("touchmove", o), $(window).off("touchend", h)),
                            $("#view").css("cursor", "auto")
                    },
                    this.changeId = function(n, e, a) {
                        c(n, e, a)
                    };
                var f, u = -1,
                    v = 4,
                    p = 8,
                    y = !1,
                    w = !1,
                    m = [],
                    M = [function(n, e) {
                        var l = function(n) {
                            function l() {
                                s.visible = !1
                            }
                            this.play = function(n, e, a) {
                                s.visible = !0,
                                    s.clear();
                                var t = G * Math.random(),
                                    i = E * Math.random(),
                                    o = Math.min(G, E) * (.03 * Math.random() + .02);
                                s.lineStyle(2 * Math.random() + 2.5, a),
                                    s.drawCircle(0, 0, o),
                                    s.x = n,
                                    s.y = e,
                                    s.scale.x = 0,
                                    s.scale.y = 0,
                                    s.rotation = Math.random() * Math.PI;
                                var r = .2 * Math.random() + .4;
                                return TweenLite.to(s, r, {
                                    x: t,
                                    y: i,
                                    rotation: Math.random() * Math.PI,
                                    ease: Power3.easeOut,
                                    onComplete: l
                                }),
                                    TweenLite.to(s.scale, r, {
                                        x: 1,
                                        y: 1,
                                        ease: Back.easeOut.config(1.7)
                                    }),
                                    r
                            };
                            var e = n,
                                s = new PIXI.Graphics;
                            e.addChild(s)
                        };
                        function s() {
                            c.visible = !1,
                                C[a.id].push(a)
                        }
                        this.play = function() { !
                            function() {
                                d.setChildIndex(c, d.children.length - 1),
                                    c.visible = !0;
                                for (var n = 5 * Math.random() + 7, e = 0, a = G / 2, t = E / 2, i = L(), o = 0; o < n; o++) {
                                    var r = (h[o] ? h[o] : new l(c)).play(a, t, i);
                                    e < r && (e = r)
                                }
                                TweenLite.delayedCall(e, s)
                            } ()
                        };
                        var a = this,
                            d = n;
                        this.id = e;
                        var h = [],
                            c = new PIXI.Container;
                        d.addChild(c)
                    },
                        function(n, e) {
                            var l = function(n) {
                                function l() {
                                    s.visible = !1
                                }
                                this.play = function(n, e, a) {
                                    s.visible = !0,
                                        s.clear();
                                    var t = G * Math.random(),
                                        i = E * Math.random(),
                                        o = Math.min(G, E) * (.04 * Math.random() + .02);
                                    s.beginFill(a),
                                        s.drawRect( - o / 2, -o / 2, o, o),
                                        s.x = n,
                                        s.y = e,
                                        s.scale.x = 0,
                                        s.scale.y = 0,
                                        s.rotation = Math.random() * Math.PI;
                                    var r = .2 * Math.random() + .4;
                                    return TweenLite.to(s, r, {
                                        x: t,
                                        y: i,
                                        rotation: Math.random() * Math.PI,
                                        ease: Power3.easeOut,
                                        onComplete: l
                                    }),
                                        TweenLite.to(s.scale, r, {
                                            x: 1,
                                            y: 1,
                                            ease: Back.easeOut.config(1.7)
                                        }),
                                        r
                                };
                                var e = n,
                                    s = new PIXI.Graphics;
                                e.addChild(s)
                            };
                            function s() {
                                c.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    d.setChildIndex(c, d.children.length - 1),
                                        c.visible = !0;
                                    for (var n = 5 * Math.random() + 7, e = 0, a = G / 2, t = E / 2, i = L(), o = 0; o < n; o++) {
                                        var r = (h[o] ? h[o] : new l(c)).play(a, t, i);
                                        e < r && (e = r)
                                    }
                                    TweenLite.delayedCall(e, s)
                                } ()
                            };
                            var a = this,
                                d = n;
                            this.id = e;
                            var h = [],
                                c = new PIXI.Container;
                            d.addChild(c)
                        },
                        function(n, e) {
                            var h = function(n) {
                                function r() {
                                    h.beginFill(l),
                                        h.drawCircle(0, 0, s),
                                        h.scale.x = 0,
                                        h.scale.y = 0,
                                        TweenLite.to(h.scale, .7, {
                                            x: 1,
                                            y: 1,
                                            ease: Elastic.easeOut.config(1, .3),
                                            onComplete: e
                                        })
                                }
                                function e() {
                                    TweenLite.to(h.scale, .4, {
                                        x: 0,
                                        y: 0,
                                        ease: Power2.easeOut,
                                        onComplete: a,
                                        delay: .1
                                    })
                                }
                                function a() {
                                    h.visible = !1,
                                    d && d()
                                }
                                this.play = function(n, e, a, t, i, o) {
                                    h.visible = !0,
                                        h.clear(),
                                        h.x = t,
                                        h.y = i,
                                        l = e,
                                        s = a,
                                        d = o,
                                        TweenLite.delayedCall(n, r)
                                };
                                var l, s, d, t = n,
                                    h = new PIXI.Graphics;
                                t.addChild(h)
                            };
                            function c() {
                                v.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    f.setChildIndex(v, f.children.length - 1),
                                        v.visible = !0,
                                        v.x = G / 2,
                                        v.y = E / 2,
                                        v.rotation = Math.random() * Math.PI * 2;
                                    for (var n = 10,
                                             e = L(), a = Math.min(G, E) / 64 * (.6 * Math.random() + .7), t = 2, i = 0; i < 40; i++) {
                                        var o, r = 25 * i * Math.PI / 180,
                                            l = n * Math.cos(r),
                                            s = n * Math.sin(r);
                                        n += a,
                                            t += .22,
                                            o = u[i] ? u[i] : new h(v);
                                        var d = null;
                                        39 == i && (d = c),
                                            o.play(.03 * i, e, t, l, s, d)
                                    }
                                } ()
                            };
                            var a = this,
                                f = n;
                            this.id = e;
                            var u = [],
                                v = new PIXI.Container;
                            f.addChild(v)
                        },
                        function(n, e) {
                            function a() {
                                C[t.id].push(t)
                            }
                            this.play = function() {
                                o.play(0, a)
                            };
                            var t = this,
                                i = n;
                            this.id = e;
                            var o = new r(i)
                        },
                        function(n, e) {
                            function a() {
                                C[t.id].push(t)
                            }
                            this.play = function() {
                                o.play(1, a)
                            };
                            var t = this,
                                i = n;
                            this.id = e;
                            var o = new r(i)
                        },
                        function(n, e) {
                            function h() {
                                f.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    c.setChildIndex(f, c.children.length - 1),
                                        f.visible = !0,
                                        f.x = G / 2,
                                        f.y = E / 2;
                                    var n = L(),
                                        e = Math.min(G, E) * (.28 * Math.random() + .2),
                                        a = Math.floor(5 * Math.random()) + 3;
                                    u.clear(),
                                        u.lineStyle(7 * Math.random() + 3, n, 1),
                                        u.rotation = 30 * Math.floor(6 * Math.random());
                                    for (var t = 360 / a,
                                             i = 0; i <= a; i++) {
                                        var o = i * t * Math.PI / 180,
                                            r = e * Math.cos(o),
                                            l = e * Math.sin(o);
                                        0 == i ? u.moveTo(r, l) : u.lineTo(r, l)
                                    }
                                    var s = .8 * Math.random() + .4,
                                        d = .8 * Math.random() + .4;
                                    TweenLite.fromTo(u.scale, .9, {
                                            x: s,
                                            y: s
                                        },
                                        {
                                            x: d,
                                            y: d,
                                            ease: Bounce.easeOut
                                        }),
                                        v.play(e, h)
                                } ()
                            };
                            var a = this,
                                c = n;
                            this.id = e;
                            var f = new PIXI.Container,
                                u = new PIXI.Graphics;
                            c.addChild(f),
                                f.addChild(u);
                            var v = new d(f, u)
                        },
                        function(n, e) {
                            var i = function(n) {
                                function a() {
                                    var n = Math.min(G, E),
                                        e = n * (.08 * Math.random() + .05);
                                    l.lineStyle(3 * Math.random() + 3, L()),
                                        l.drawRect( - e / 2, -e / 2, e, e),
                                        l.x = o + n / 2 * (Math.random() - .5),
                                        l.y = r + n / 2 * (Math.random() - .5),
                                        l.scale.x = 0,
                                        l.scale.y = 0,
                                        l.rotation = Math.random() * Math.PI,
                                        TweenLite.to(l, .5, {
                                            x: o,
                                            y: r,
                                            rotation: 0,
                                            ease: Back.easeOut.config(1.7),
                                            onComplete: t
                                        }),
                                        TweenLite.to(l.scale, .5, {
                                            x: 1,
                                            y: 1,
                                            ease: Back.easeOut.config(1.7)
                                        })
                                }
                                function t() {
                                    var n = Math.min(G, E),
                                        e = o + n / 2 * (Math.random() - .5),
                                        a = r + n / 2 * (Math.random() - .5);
                                    TweenLite.to(l, .5, {
                                        x: e,
                                        y: a,
                                        rotation: -Math.random() * Math.PI,
                                        ease: Back.easeIn.config(1.7),
                                        onComplete: i,
                                        delay: .2
                                    }),
                                        TweenLite.to(l.scale, .5, {
                                            x: 0,
                                            y: 0,
                                            ease: Back.easeIn.config(1.7),
                                            delay: .2
                                        })
                                }
                                function i() {
                                    l.visible = !1
                                }
                                this.play = function(n, e) {
                                    l.visible = !0,
                                        l.clear(),
                                        o = G * Math.random(),
                                        r = E * Math.random(),
                                        TweenLite.delayedCall(n, a)
                                };
                                var o, r, e = n,
                                    l = new PIXI.Graphics;
                                e.addChild(l)
                            };
                            function o() {
                                l.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    r.setChildIndex(l, r.children.length - 1),
                                        l.visible = !0;
                                    for (var n = Math.floor(5 * Math.random() + 5), e = 0; e < n; e++) {
                                        var a;
                                        a = s[e] ? s[e] : new i(l);
                                        var t = null;
                                        e == n - 1 && (t = o),
                                            a.play(.06 * e, t)
                                    }
                                } ()
                            };
                            var a = this,
                                r = n;
                            this.id = e;
                            var l = new PIXI.Container;
                            r.addChild(l);
                            var s = []
                        },
                        function(n, e) {
                            var i = function(n) {
                                function a() {
                                    var n = Math.min(G, E) * (.05 * Math.random() + .014);
                                    l.beginFill(L()),
                                        l.drawCircle(0, 0, n),
                                        l.x = i,
                                        l.y = o,
                                        l.scale.x = 0,
                                        l.scale.y = 0,
                                        TweenLite.to(l.scale, .5, {
                                            x: 1,
                                            y: 1,
                                            ease: Elastic.easeOut.config(1, .3),
                                            onComplete: e
                                        })
                                }
                                function e() {
                                    TweenLite.to(l.scale, .5, {
                                        x: 0,
                                        y: 0,
                                        ease: Back.easeIn.config(1.7),
                                        onComplete: t,
                                        delay: .2
                                    })
                                }
                                function t() {
                                    l.visible = !1
                                }
                                this.play = function(n, e) {
                                    l.visible = !0,
                                        l.clear(),
                                        i = G * Math.random(),
                                        o = E * Math.random(),
                                        TweenLite.delayedCall(n, a)
                                };
                                var i, o, r = n,
                                    l = new PIXI.Graphics;
                                r.addChild(l)
                            };
                            function o() {
                                l.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    r.setChildIndex(l, r.children.length - 1),
                                        l.visible = !0;
                                    for (var n = Math.floor(5 * Math.random() + 5), e = 0; e < n; e++) {
                                        var a;
                                        a = s[e] ? s[e] : new i(l);
                                        var t = null;
                                        e == n - 1 && (t = o),
                                            a.play(.06 * e, t)
                                    }
                                } ()
                            };
                            var a = this,
                                r = n;
                            this.id = e;
                            var l = new PIXI.Container;
                            r.addChild(l);
                            var s = []
                        },
                        function(n, e) {
                            function o() {
                                l.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    l.visible = !0,
                                        r.setChildIndex(l, r.children.length - 1),
                                        d.container.mask = s,
                                        d.play(o);
                                    var n = d.size / 2;
                                    s.x = G / 2,
                                        s.y = E / 2,
                                        s.clear(),
                                        s.beginFill(0),
                                        s.drawCircle(0, 0, n);
                                    var e = 45 * Math.PI / 180 * Math.floor(2 * Math.random()),
                                        a = e + 45 * Math.PI / 180 * Math.floor(4 * Math.random() - 2),
                                        t = .3 * Math.random() + 1,
                                        i = .3 * -Math.random() + 1;
                                    TweenLite.fromTo(d.container, .6, {
                                            rotation: e
                                        },
                                        {
                                            rotation: a,
                                            ease: Power2.easeOut
                                        }),
                                        TweenLite.fromTo(d.container.scale, .6, {
                                                x: t,
                                                y: t
                                            },
                                            {
                                                x: i,
                                                y: i,
                                                ease: Back.easeOut.config(1.7)
                                            }),
                                        TweenLite.fromTo(s.scale, .6, {
                                                x: t,
                                                y: t
                                            },
                                            {
                                                x: i,
                                                y: i,
                                                ease: Back.easeOut.config(1.7)
                                            })
                                } ()
                            };
                            var a = this,
                                r = n;
                            this.id = e;
                            var l = new PIXI.Container;
                            r.addChild(l);
                            var s = new PIXI.Graphics;
                            l.addChild(s);
                            var d = new t(l, -1)
                        },
                        function(n, e) {
                            function d() {
                                c.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    h.setChildIndex(c, h.children.length - 1),
                                        c.clear(),
                                        c.visible = !0,
                                        c.lineStyle(4 * Math.random() + 2, L(), 1),
                                        c.x = G / 2,
                                        c.y = E / 2;
                                    for (var n = .6 * Math.min(G, E), e = Math.floor(5 * Math.random()) + 3, a = 360 / e, t = .5 * Math.max(G, E) / n * (1.6 + .6 / e), i = 0; i <= e; i++) {
                                        var o = i * a * Math.PI / 180,
                                            r = n * Math.cos(o),
                                            l = n * Math.sin(o);
                                        0 == i ? c.moveTo(r, l) : c.lineTo(r, l)
                                    }
                                    var s = .3 * Math.random() + .6;
                                    TweenLite.fromTo(c.scale, s, {
                                            x: 0,
                                            y: 0
                                        },
                                        {
                                            x: t,
                                            y: t,
                                            onComplete: d,
                                            ease: Power2.easeOut
                                        }),
                                        TweenLite.fromTo(c, s, {
                                                rotation: Math.random() * Math.PI
                                            },
                                            {
                                                rotation: Math.random() * Math.PI,
                                                ease: Power1.easeOut
                                            })
                                } ()
                            };
                            var a = this,
                                h = n;
                            this.id = e;
                            var c = new PIXI.Graphics;
                            h.addChild(c)
                        },
                        function(n, e) {
                            function a() {
                                o.visible = !1,
                                    C[t.id].push(t)
                            }
                            this.play = function() { !
                                function() {
                                    i.setChildIndex(o, i.children.length - 1),
                                        o.visible = !0,
                                        o.x = G / 2,
                                        o.y = E / 2;
                                    var n = L(),
                                        e = Math.min(G, E) * (.25 * Math.random() + .1);
                                    r.clear(),
                                        r.beginFill(n),
                                        r.drawCircle(0, 0, e),
                                        l.play(e, a)
                                } ()
                            };
                            var t = this,
                                i = n;
                            this.id = e;
                            var o = new PIXI.Container,
                                r = new PIXI.Graphics;
                            i.addChild(o),
                                o.addChild(r);
                            var l = new d(o, r)
                        },
                        function(n, e) {
                            var u = function(n) {
                                function t() {
                                    TweenLite.to(l.scale, .4, {
                                        x: 0,
                                        y: 0,
                                        ease: Back.easeIn.config(2),
                                        onComplete: e,
                                        delay: .7
                                    }),
                                        TweenLite.to(l, .4, {
                                            rotation: Math.random() * Math.PI * 2,
                                            ease: Back.easeIn.config(2),
                                            delay: .7
                                        })
                                }
                                function e() {
                                    l.visibloe = !1,
                                    i && i()
                                }
                                this.init = function(n, e, a, t) {
                                    _state = 0,
                                        o = a,
                                        r = t,
                                        l.x = n,
                                        l.y = e
                                },
                                    this.play = function(n, e) {
                                        i = e,
                                            l.clear(),
                                            l.visibloe = !0,
                                            l.beginFill(r),
                                            l.drawRect(.5 * -o, .5 * -o, o, o),
                                            TweenLite.fromTo(l.scale, .3, {
                                                    x: 0,
                                                    y: 0
                                                },
                                                {
                                                    x: 1,
                                                    y: 1,
                                                    ease: Back.easeOut.config(1.7),
                                                    onComplete: t,
                                                    delay: n
                                                }),
                                            TweenLite.fromTo(l, .7, {
                                                    rotation: Math.random() * Math.PI * 2
                                                },
                                                {
                                                    rotation: 0,
                                                    ease: Elastic.easeOut.config(1, .3),
                                                    delay: n
                                                });
                                        var a = Math.random() * Math.PI;
                                        TweenLite.fromTo(y, 1, {
                                                rotation: 0
                                            },
                                            {
                                                rotation: a,
                                                ease: Bounce.easeOut,
                                                delay: n
                                            })
                                    };
                                var i, o, r, a = n,
                                    l = new PIXI.Graphics;
                                a.addChild(l)
                            };
                            function v() {
                                y.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    p.setChildIndex(y, p.children.length - 1),
                                        y.visible = !0,
                                        y.x = G / 2,
                                        y.y = E / 2;
                                    var n = Math.floor(8 * Math.random() + 6),
                                        e = Math.min(G, E) * (.25 * Math.random() + .25),
                                        a = 360 / n,
                                        t = e * (.15 * Math.random() + .05),
                                        i = L(),
                                        o = Math.PI / 2 * Math.floor(4 * Math.random()),
                                        r = 1;
                                    Math.random() < .5 && (r = -1);
                                    for (var l = 0; l < n; l++) {
                                        var s, d = (r * a * l + o) * Math.PI / 180,
                                            h = e * Math.cos(d),
                                            c = e * Math.sin(d);
                                        s = w[l] ? w[l] : new u(y);
                                        var f = null;
                                        l == n - 1 && (f = v),
                                            s.init(h, c, t, i),
                                            s.play(.05 * l, f)
                                    }
                                } ()
                            };
                            var a = this,
                                p = n;
                            this.id = e;
                            var y = new PIXI.Container,
                                w = [];
                            p.addChild(y)
                        },
                        function(n, e) {
                            var u = function(n) {
                                function a() {
                                    var n = .5 * G,
                                        e = l.x + Math.random() * n - n / 2,
                                        a = l.y + Math.random() * n - n / 2;
                                    TweenLite.to(l.scale, .3, {
                                        x: 0,
                                        y: 0,
                                        ease: Power1.easeOut,
                                        onComplete: t,
                                        delay: .5
                                    }),
                                        TweenLite.to(l, .3, {
                                            x: e,
                                            y: a,
                                            ease: Power2.easeOut,
                                            delay: .5
                                        })
                                }
                                function t() {
                                    l.visibloe = !1,
                                    i && i()
                                }
                                this.init = function(n, e, a, t) {
                                    _state = 0,
                                        o = a,
                                        r = t,
                                        l.x = n,
                                        l.y = e
                                },
                                    this.play = function(n, e) {
                                        i = e,
                                            l.clear(),
                                            l.visibloe = !0,
                                            l.beginFill(r),
                                            l.drawCircle(0, 0, .5 * o),
                                            TweenLite.fromTo(l.scale, .3, {
                                                    x: 0,
                                                    y: 0
                                                },
                                                {
                                                    x: 1,
                                                    y: 1,
                                                    ease: Back.easeOut.config(1.7),
                                                    onComplete: a,
                                                    delay: n
                                                })
                                    };
                                var i, o, r, e = n,
                                    l = new PIXI.Graphics;
                                e.addChild(l)
                            };
                            function v() {
                                y.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    p.setChildIndex(y, p.children.length - 1),
                                        y.visible = !0,
                                        y.x = G / 2,
                                        y.y = E / 2;
                                    var n = Math.floor(8 * Math.random() + 6),
                                        e = Math.min(G, E) * (.2 * Math.random() + .25),
                                        a = 360 / n,
                                        t = e * (.2 * Math.random() + .05),
                                        i = L(),
                                        o = Math.PI / 2 * Math.floor(4 * Math.random()),
                                        r = 1;
                                    Math.random() < .5 && (r = -1);
                                    for (var l = 0; l < n; l++) {
                                        var s, d = (r * a * l + o) * Math.PI / 180,
                                            h = e * Math.cos(d),
                                            c = e * Math.sin(d);
                                        s = w[l] ? w[l] : new u(y);
                                        var f = null;
                                        l == n - 1 && (f = v),
                                            s.init(h, c, t, i),
                                            s.play(.05 * l, f)
                                    }
                                } ()
                            };
                            var a = this,
                                p = n;
                            this.id = e;
                            var y = new PIXI.Container,
                                w = [];
                            p.addChild(y)
                        },
                        function(n, e) {
                            function i() {
                                r.visible = !1,
                                    C[a.id].push(a)
                            }
                            this.play = function() { !
                                function() {
                                    r.visible = !0,
                                        o.setChildIndex(r, o.children.length - 1),
                                        r.x = .2 * G + .6 * G * Math.random(),
                                        r.y = .2 * E + .6 * E * Math.random();
                                    var n, e = Math.min(G, E) * (.7 + .2 * Math.random()),
                                        a = e / 10 * (.5 + .8 * Math.random()),
                                        t = L();
                                    l.clear(),
                                        l.beginFill(t),
                                        l.drawRect(0, -a / 2, e, a),
                                        s.clear(),
                                        s.beginFill(t),
                                        s.drawRect( - a / 2, 0, a, e),
                                        l.y = 0,
                                        l.x = -e / 2,
                                        s.x = 0,
                                        s.y = -e / 2,
                                        r.rotation = 45 * Math.PI / 180,
                                        l.scale.x = 0,
                                        s.scale.y = 0,
                                        n = Math.random() < .5 ? -135 * Math.PI / 180 : 215 * Math.PI / 180,
                                        (new TimelineLite).to(l.scale, .4, {
                                            x: 1,
                                            ease: Power2.easeOut
                                        }).to(s.scale, .4, {
                                                y: 1,
                                                ease: Power2.easeOut
                                            },
                                            .1).to(r, .6, {
                                                rotation: n,
                                                ease: Back.easeOut.config(1.7)
                                            },
                                            0).to(l.scale, .3, {
                                            x: 0,
                                            ease: Power2.easeOut
                                        }).to(s.scale, .3, {
                                                y: 0,
                                                ease: Power2.easeOut,
                                                onComplete: i
                                            },
                                            .6)
                                } ()
                            };
                            var a = this,
                                o = n;
                            this.id = e;
                            var r = new PIXI.Container,
                                l = new PIXI.Graphics,
                                s = new PIXI.Graphics;
                            o.addChild(r),
                                r.addChild(l),
                                r.addChild(s)
                        },
                        function(n, e) {
                            function o() {
                                if (r < ++c) switch (l) {
                                    case 0:
                                        l = 1;
                                        var n = h[0];
                                        f.x = n.x,
                                            f.y = n.y,
                                            c = 0,
                                            o();
                                        break;
                                    case 1:
                                        l = 2
                                } else TweenLite.to(f, .1, {
                                    x: h[c].x,
                                    y: h[c].y,
                                    onComplete: o,
                                    onUpdate: a,
                                    ease: Power1.easeOut
                                })
                            }
                            function a() {
                                switch (u.clear(), u.lineStyle(s, d, 1), l) {
                                    case 0:
                                        u.moveTo(h[0].x, h[0].y);
                                        for (var n = 1; n < c; n++) u.lineTo(h[n].x, h[n].y);
                                        u.lineTo(f.x, f.y);
                                        break;
                                    case 1:
                                        for (u.moveTo(f.x, f.y), n = c; n <= r; n++) u.lineTo(h[n].x, h[n].y)
                                }
                            }
                            this.play = function() { !
                                function() {
                                    u.clear(),
                                        u.visible = !0,
                                        Math.random() < .5 ? (u.x = 0, u.y = 0, u.rotation = 0) : (u.x = G, u.y = E, u.rotation = Math.PI),
                                        c = l = 0,
                                        r = Math.floor(3 * Math.random()) + 3,
                                        s = 20 * Math.random() + 1,
                                        d = L();
                                    var n, e = Math.random() < .5;
                                    n = e ? G / r: E / r;
                                    for (var a = 0; a <= r; a++) {
                                        var t;
                                        e ? (t = {
                                            x: a * n,
                                            y: E * Math.random()
                                        },
                                        0 == a && (t.x -= 10), a == r && (t.x += 10)) : (t = {
                                            y: a * n,
                                            x: G * Math.random()
                                        },
                                        0 == a && (t.y -= 10), a == r && (t.y += 10)),
                                            h[a] = t
                                    }
                                    var i = h[0];
                                    f.x = i.x,
                                        f.y = i.y,
                                        o()
                                } ()
                            };
                            var t = n;
                            this.id = e;
                            var r, l, s, d, h = [],
                                c = 0,
                                f = {
                                    x: 0,
                                    y: 0
                                },
                                u = new PIXI.Graphics;
                            t.addChild(u)
                        },
                        t],
                    I = [function(n, e) {
                        function d() {
                            y.clear(),
                                y.beginFill(c),
                                y.moveTo(u.pos.b1.x, u.pos.b1.y),
                                y.lineTo(u.pos.b0.x, u.pos.b0.y);
                            for (var n = 0; u.pos["p" + n]; n++) {
                                var e = u.pos["p" + n];
                                y.lineTo(e.x, e.y)
                            }
                            y.endFill()
                        }
                        function h() {
                            F == w && T.setColor(c, p - 1),
                                y.visible = !1,
                                C[u.id].push(u)
                        }
                        this.play = function() { !
                            function() {
                                F = w;
                                var n = X();
                                c = P[n],
                                    $("#about").css("background-color", "#" + c.toString(16)),
                                Math.random() < .3 && T.flash(p),
                                    O = n,
                                    y.clear(),
                                    y.visible = !0,
                                    p = v.children.length - 1 - Math.floor(2 * Math.random()),
                                    v.setChildIndex(y, p);
                                var e = Math.random() < .5,
                                    a = Math.floor(4 * Math.random()) + 1;
                                u.pos = {};
                                var t = 0;
                                e ? (t = E / a, u.pos.b0 = {
                                    x: 0,
                                    y: 0
                                },
                                    u.pos.b1 = {
                                        x: 0,
                                        y: E
                                    }) : (t = G / a, u.pos.b0 = {
                                    x: 0,
                                    y: 0
                                },
                                    u.pos.b1 = {
                                        x: G,
                                        y: 0
                                    }),
                                    Math.random() < .5 ? (y.rotation = 0, y.x = 0, y.y = 0) : (y.rotation = Math.PI, y.x = G, y.y = E);
                                for (var i = f = 0; i <= a; i++) {
                                    var o = {
                                            x: 0,
                                            y: 0
                                        },
                                        r = 0;
                                    0 != i && i != a && (r = t / 4 * Math.random() - t / 8),
                                        e ? o.y = t * i + r: o.x = t * i + r,
                                        u.pos["p" + i] = o;
                                    var l, s = .4 * Math.random() + .3;
                                    f = 2,
                                        l = e ? {
                                            x: G
                                        }: {
                                            y: E
                                        },
                                        TweenLite.to(u.pos["p" + i], s, l)
                                }
                                u.progress = 0,
                                    TweenLite.to(u, f, {
                                        progress: 1,
                                        ease: Power0.easeNone,
                                        onUpdate: d,
                                        onComplete: h
                                    })
                            } ()
                        };
                        var c, f, u = this,
                            v = n;
                        this.id = e,
                            this.progress = 0,
                            this.pos = {};
                        var p = 0,
                            y = new PIXI.Graphics;
                        v.addChild(y);
                        var w = Math.floor(aidn.util.getTime())
                    }];
                aidn.util.shuffleArray(M);
                for (var b, x = 16 * Math.random(), C = [], g = 0; g < M.length + I.length; g++) C[g] = [];
                var T, P = [16754856, 16428432, 13800823, 16758107, 14868848, 11719225, 10674274, 8236373, 11784894, 5950897, 5949143, 4367805, 5476024, 8559572, 6513268, 9340024, 15041763, 16551924],
                    k = [16754856, 16428432, 14856343, 16758107, 14737275, 14738896, 13223089, 15198183, 13824232, 8821394, 6067100, 9099756, 16119285, 11974326, 7232891, 10389674, 14266328, 14394839],
                    _ = P.length,
                    O = 0;
                function L() {
                    var n = Math.random();
                    return n < .04 ? 4473924 : n < .16 ? 16777215 : k[X()]
                }
                function X() {
                    for (var n = 0; n < 10; n++) {
                        var e = Math.floor(_ * Math.random());
                        if (2 < Math.abs(O - e)) break
                    }
                    return e
                }
                var F = 0
            },
            S = !1,
            D = 0,
            U = "off" == aidn.util.getCookie("fb"),
            g = "off" == aidn.util.getCookie("bt");
        n(),
            o(),
            aidn.util.webaudio ? ($("#ng").css("display", "none"), $(".ok").css("display", "block"), z && $("#scene_main .attention").html("TOUCH &amp; SWIPE!"), M || $("#scene_top .attention").text("* Raise the volume and enjoy!")) : ($("#ng").css("display", "block"), $(".ok").css("display", "none"), M || $("#ng .atten").html("Sorry,<br>your device or browser doesn't support this site.")),
            PIXI.utils._saidHello = !0,
            aidn.window.resize(e)
    },
    WebAudioManager = function() {
        function i() {
            if (e++, h.now = e, s && s(e, o), o <= e) l && l();
            else {
                var n = new aidn.WebAudio;
                n.load(d[r[e]], i),
                    t[e] = n
            }
        }
        this.load = function(n, e, a, t) {
            l = a,
                s = t,
                o = (r = e).length,
                h.length = o,
                $.getJSON(n,
                    function(n) {
                        d = n,
                            i()
                    })
        },
            this.play = function(n, e, a) {
                0 <= a || (a = 1),
                n < o && t[n].play(0, !1, null, 0, a, e)
            };
        var o, r, l, s, d, h = this,
            e = -1,
            t = [];
        this.length = 0,
            this.now = 0
    };