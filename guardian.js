(function() {
    /*
     MIT License (c) copyright 2010-2013 B Cavalier & J Hann */
    (function(l) {
        function p() {}

        function v(a, b) {
            return 0 == T.call(a).indexOf("[object " + b)
        }

        function x(a) {
            return a && "/" == a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a
        }

        function D(a, b) {
            var d, c, f, g;
            d = 1;
            c = a;
            "." == c.charAt(0) && (f = !0, c = c.replace(U, function(a, b, c, f) {
                c && d++;
                return f || ""
            }));
            if (f) {
                f = b.split("/");
                g = f.length - d;
                if (0 > g) return a;
                f.splice(g, d);
                return f.concat(c || []).join("/")
            }
            return c
        }

        function C(a) {
            var b = a.indexOf("!");
            return {
                g: a.substr(b + 1),
                d: 0 <= b && a.substr(0, b)
            }
        }

        function A() {}

        function y(a, b) {
            A.prototype =
                a || N;
            var d = new A;
            A.prototype = N;
            for (var c in b) d[c] = b[c];
            return d
        }

        function E() {
            function a(a, b, d) {
                c.push([a, b, d])
            }

            function b(a, b) {
                for (var d, f = 0; d = c[f++];)(d = d[a]) && d(b)
            }
            var d, c, f;
            d = this;
            c = [];
            f = function(d, n) {
                a = d ? function(a) {
                    a && a(n)
                } : function(a, b) {
                    b && b(n)
                };
                f = p;
                b(d ? 0 : 1, n);
                b = p;
                c = s
            };
            this.then = function(b, c, f) {
                a(b, c, f);
                return d
            };
            this.h = function(a) {
                d.B = a;
                f(!0, a)
            };
            this.f = function(a) {
                d.pa = a;
                f(!1, a)
            };
            this.v = function(a) {
                b(2, a)
            }
        }

        function z(a) {
            return a instanceof E || a instanceof h
        }

        function t(a, b, d, c) {
            z(a) ? a.then(b,
                d, c) : b(a)
        }

        function B(a, b, d) {
            var c;
            return function() {
                0 <= --a && b && (c = b.apply(s, arguments));
                0 == a && d && d(c);
                return c
            }
        }

        function e() {
            var a, b;
            r = "";
            a = [].slice.call(arguments);
            v(a[0], "Object") && (b = a.shift(), b = w(b));
            return new h(a[0], a[1], a[2], b)
        }

        function w(a, b, d) {
            var c;
            r = "";
            if (a && (k.Q(a), q = k.b(a), "preloads" in a && (c = new h(a.preloads, s, d, I, !0), k.l(function() {
                    I = c
                })), a = a.main)) return new h(a, b, d)
        }

        function h(a, b, d, c, f) {
            var g;
            g = k.k(q, s, [].concat(a), f);
            this.then = this.then = a = function(a, b) {
                t(g, function(b) {
                    a && a.apply(s,
                        b)
                }, function(a) {
                    if (b) b(a);
                    else throw a;
                });
                return this
            };
            this.next = function(a, b, c) {
                return new h(a, b, c, g)
            };
            this.config = w;
            (b || d) && a(b, d);
            k.l(function() {
                t(f || I, function() {
                    t(c, function() {
                        k.q(g)
                    }, d)
                })
            })
        }

        function K(a) {
            var b, d;
            b = a.id;
            b == s && (J !== s ? J = {
                H: "Multiple anonymous defines encountered"
            } : (b = k.ca()) || (J = a));
            if (b != s) {
                d = u[b];
                b in u || (d = k.j(b, q), d = k.D(d.b, b), u[b] = d);
                if (!z(d)) throw Error("duplicate define: " + b);
                d.ga = !1;
                k.F(d, a)
            }
        }

        function F() {
            var a = k.$(arguments);
            K(a)
        }
        var r, q, G, H, m = l.document,
            O = m && (m.head ||
                m.getElementsByTagName("head")[0]),
            V = O && O.getElementsByTagName("base")[0] || null,
            Q = {},
            R = {},
            L = {},
            W = "addEventListener" in l ? {} : {
                loaded: 1,
                complete: 1
            },
            N = {},
            T = N.toString,
            s, u = {},
            M = {},
            I = !1,
            J, S = /^\/|^[^:]+:\/\//,
            U = /(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,
            X = /\/\*[\s\S]*?\*\/|\/\/.*?[\n\r]/g,
            Y = /require\s*\(\s*(["'])(.*?[^\\])\1\s*\)|[^\\]?(["'])/g,
            Z = /\s*,\s*/,
            P, k;
        k = {
            m: function(a, b, d) {
                var c;
                a = D(a, b);
                if ("." == a.charAt(0)) return a;
                c = C(a);
                a = (b = c.d) || c.g;
                a in d.c && (a = d.c[a].L || a);
                b && (0 > b.indexOf("/") && !(b in d.c) && (a = x(d.O) +
                    "/" + b), a = a + "!" + c.g);
                return a
            },
            k: function(a, b, d, c) {
                function f(b, c) {
                    var d, g;
                    d = k.m(b, n.id, a);
                    if (!c) return d;
                    g = C(d);
                    if (!g.d) return d;
                    d = u[g.d];
                    g.g = "normalize" in d ? d.normalize(g.g, f, n.b) || "" : f(g.g);
                    return g.d + "!" + g.g
                }

                function g(b, d, g) {
                    var e;
                    e = d && function(a) {
                        d.apply(s, a)
                    };
                    if (v(b, "String")) {
                        if (e) throw Error("require(id, callback) not allowed");
                        g = f(b, !0);
                        b = u[g];
                        if (!(g in u)) throw Error("Module not resolved: " + g);
                        return (g = z(b) && b.a) || b
                    }
                    t(k.q(k.k(a, n.id, b, c)), e, g)
                }
                var n;
                n = new E;
                n.id = b || "";
                n.da = c;
                n.G = d;
                n.b = a;
                n.w = g;
                g.toUrl = function(b) {
                    return k.j(f(b, !0), a).url
                };
                n.m = f;
                return n
            },
            D: function(a, b, d) {
                var c, f, g;
                c = k.k(a, b, s, d);
                f = c.h;
                g = B(1, function(a) {
                    c.p = a;
                    try {
                        return k.U(c)
                    } catch (b) {
                        c.f(b)
                    }
                });
                c.h = function(a) {
                    t(d || I, function() {
                        f(u[c.id] = M[c.url] = g(a))
                    })
                };
                c.I = function(a) {
                    t(d || I, function() {
                        c.a && (g(a), c.v(R))
                    })
                };
                return c
            },
            T: function(a, b, d, c) {
                return k.k(a, d, s, c)
            },
            ba: function(a) {
                return a.w
            },
            J: function(a) {
                return a.a || (a.a = {})
            },
            aa: function(a) {
                var b = a.s;
                b || (b = a.s = {
                        id: a.id,
                        uri: k.K(a),
                        exports: k.J(a),
                        config: function() {
                            return a.b
                        }
                    },
                    b.a = b.exports);
                return b
            },
            K: function(a) {
                return a.url || (a.url = k.C(a.w.toUrl(a.id), a.b))
            },
            Q: function(a) {
                var b, d, c, f, g;
                b = "curl";
                d = "define";
                c = f = l;
                if (a && (g = a.overwriteApi || a.na, b = a.apiName || a.ia || b, c = a.apiContext || a.ha || c, d = a.defineName || a.ka || d, f = a.defineContext || a.ja || f, G && v(G, "Function") && (l.curl = G), G = null, H && v(H, "Function") && (l.define = H), H = null, !g)) {
                    if (c[b] && c[b] != e) throw Error(b + " already exists");
                    if (f[d] && f[d] != F) throw Error(d + " already exists");
                }
                c[b] = e;
                f[d] = F
            },
            b: function(a) {
                function b(a, b) {
                    var d,
                        c, n, e, q;
                    for (q in a) {
                        n = a[q];
                        v(n, "String") && (n = {
                            path: a[q]
                        });
                        n.name = n.name || q;
                        e = f;
                        c = C(x(n.name));
                        d = c.g;
                        if (c = c.d) e = g[c], e || (e = g[c] = y(f), e.c = y(f.c), e.e = []), delete a[q];
                        c = n;
                        var r = b,
                            h = void 0;
                        c.path = x(c.path || c.location || "");
                        r && (h = c.main || "./main", "." == h.charAt(0) || (h = "./" + h), c.L = D(h, c.name + "/"));
                        c.b = c.config;
                        c.b && (c.b = y(f, c.b));
                        c.R = d.split("/").length;
                        d ? (e.c[d] = c, e.e.push(d)) : e.n = k.P(n.path, f)
                    }
                }

                function d(a) {
                    var b = a.c;
                    a.N = RegExp("^(" + a.e.sort(function(a, c) {
                        return b[c].R - b[a].R
                    }).join("|").replace(/\/|\./g,
                        "\\$&") + ")(?=\\/|$)");
                    delete a.e
                }
                var c, f, g, n;
                "baseUrl" in a && (a.n = a.baseUrl);
                "main" in a && (a.L = a.main);
                "preloads" in a && (a.oa = a.preloads);
                "pluginPath" in a && (a.O = a.pluginPath);
                if ("dontAddFileExt" in a || a.i) a.i = RegExp(a.dontAddFileExt || a.i);
                c = q;
                f = y(c, a);
                f.c = y(c.c);
                g = a.plugins || {};
                f.plugins = y(c.plugins);
                f.u = y(c.u, a.u);
                f.t = y(c.t, a.t);
                f.e = [];
                b(a.packages, !0);
                b(a.paths, !1);
                for (n in g) a = k.m(n + "!", "", f), f.plugins[a.substr(0, a.length - 1)] = g[n];
                g = f.plugins;
                for (n in g)
                    if (g[n] = y(f, g[n]), a = g[n].e) g[n].e = a.concat(f.e),
                        d(g[n]);
                for (n in c.c) f.c.hasOwnProperty(n) || f.e.push(n);
                d(f);
                return f
            },
            j: function(a, b) {
                var d, c, f, g;
                d = b.c;
                f = S.test(a) ? a : a.replace(b.N, function(a) {
                    c = d[a] || {};
                    g = c.b;
                    return c.path || ""
                });
                return {
                    b: g || q,
                    url: k.P(f, b)
                }
            },
            P: function(a, b) {
                var d = b.n;
                return d && !S.test(a) ? x(d) + "/" + a : a
            },
            C: function(a, b) {
                return a + ((b || q).i.test(a) ? "" : ".js")
            },
            r: function(a, b, d) {
                var c = m.createElement("script");
                c.onload = c.onreadystatechange = function(d) {
                    d = d || l.event;
                    if ("load" == d.type || W[c.readyState]) delete L[a.id], c.onload = c.onreadystatechange =
                        c.onerror = "", b()
                };
                c.onerror = function() {
                    d(Error("Syntax or http error: " + a.url))
                };
                c.type = a.M || "text/javascript";
                c.charset = "utf-8";
                c.async = !a.ea;
                c.src = a.url;
                L[a.id] = c;
                O.insertBefore(c, V);
                return c
            },
            V: function(a) {
                var b = [],
                    d;
                ("string" == typeof a ? a : a.toSource ? a.toSource() : a.toString()).replace(X, "").replace(Y, function(a, f, g, e) {
                    e ? d = d == e ? s : d : d || b.push(g);
                    return ""
                });
                return b
            },
            $: function(a) {
                var b, d, c, f, g, e;
                g = a.length;
                c = a[g - 1];
                f = v(c, "Function") ? c.length : -1;
                2 == g ? v(a[0], "Array") ? d = a[0] : b = a[0] : 3 == g && (b = a[0], d = a[1]);
                !d && 0 < f && (e = !0, d = ["require", "exports", "module"].slice(0, f).concat(k.V(c)));
                return {
                    id: b,
                    p: d || [],
                    A: 0 <= f ? c : function() {
                        return c
                    },
                    o: e
                }
            },
            U: function(a) {
                var b;
                b = a.A.apply(a.o ? a.a : s, a.p);
                b === s && a.a && (b = a.s ? a.a = a.s.exports : a.a);
                return b
            },
            F: function(a, b) {
                a.A = b.A;
                a.o = b.o;
                a.G = b.p;
                k.q(a)
            },
            q: function(a) {
                function b(a, b, c) {
                    e[b] = a;
                    c && r(a, b)
                }

                function d(b, c) {
                    var d, f, g, e;
                    d = B(1, function(a) {
                        f(a);
                        m(a, c)
                    });
                    f = B(1, function(a) {
                        r(a, c)
                    });
                    g = k.X(b, a);
                    (e = z(g) && g.a) && f(e);
                    t(g, d, a.f, a.a && function(a) {
                        g.a && (a == Q ? f(g.a) : a == R && d(g.a))
                    })
                }

                function c() {
                    a.h(e)
                }
                var f, g, e, q, h, r, m;
                e = [];
                g = a.G;
                q = g.length;
                0 == g.length && c();
                r = B(q, b, function() {
                    a.I && a.I(e)
                });
                m = B(q, b, c);
                for (f = 0; f < q; f++) h = g[f], h in P ? (m(P[h](a), f, !0), a.a && a.v(Q)) : h ? d(h, f) : m(s, f, !0);
                return a
            },
            Y: function(a) {
                k.K(a);
                k.r(a, function() {
                    var b = J;
                    J = s;
                    !1 !== a.ga && (!b || b.H ? a.f(Error(b && b.H || "define() missing or duplicated: " + a.url)) : k.F(a, b))
                }, a.f);
                return a
            },
            X: function(a, b) {
                var d, c, f, g, e, h, r, m, w, l, p, s;
                d = b.m;
                c = b.da;
                f = b.b || q;
                e = d(a);
                e in u ? h = e : (g = C(e), m = g.g, h = g.d || m, w = k.j(h, f));
                if (!(e in u))
                    if (s =
                        k.j(m, f).b, g.d) r = h;
                    else if (r = s.moduleLoader || s.ma || s.loader || s.la) m = h, h = r, w = k.j(r, f);
                h in u ? l = u[h] : w.url in M ? l = u[h] = M[w.url] : (l = k.D(s, h, c), l.url = k.C(w.url, w.b), u[h] = M[w.url] = l, k.Y(l));
                h == r && (g.d && f.plugins[g.d] && (s = f.plugins[g.d]), p = new E, t(l, function(a) {
                    var b, f, g;
                    g = a.dynamic;
                    m = "normalize" in a ? a.normalize(m, d, l.b) || "" : d(m);
                    f = r + "!" + m;
                    b = u[f];
                    if (!(f in u)) {
                        b = k.T(s, f, m, c);
                        g || (u[f] = b);
                        var e = function(a) {
                            g || (u[f] = a);
                            b.h(a)
                        };
                        e.resolve = e;
                        e.reject = e.error = b.f;
                        a.load(m, b.w, e, s)
                    }
                    p != b && t(b, p.h, p.f, p.v)
                }, p.f));
                return p || l
            },
            ca: function() {
                var a;
                if (!v(l.opera, "Opera"))
                    for (var b in L)
                        if ("interactive" == L[b].readyState) {
                            a = b;
                            break
                        }
                return a
            },
            Z: function(a) {
                var b = 0,
                    d, c;
                for (d = m && (m.scripts || m.getElementsByTagName("script")); d && (c = d[b++]);)
                    if (a(c)) return c
            },
            W: function() {
                var a, b = "";
                (a = k.Z(function(a) {
                    (a = a.getAttribute("data-curl-run")) && (b = a);
                    return a
                })) && a.setAttribute("data-curl-run", "");
                return b
            },
            S: function() {
                function a() {
                    k.r({
                        url: c.shift()
                    }, b, b)
                }

                function b() {
                    r && (c.length ? (k.l(d), a()) : d("run.js script did not run."))
                }

                function d(a) {
                    throw Error(a || "Primary run.js failed. Trying fallback.");
                }
                var c = r.split(Z);
                c.length && a()
            },
            l: function(a) {
                setTimeout(a, 0)
            }
        };
        P = {
            require: k.ba,
            exports: k.J,
            module: k.aa
        };
        e.version = "0.8.10";
        e.config = w;
        F.amd = {
            plugins: !0,
            jQuery: !0,
            curl: "0.8.10"
        };
        q = {
            n: "",
            O: "curl/plugin",
            i: /\?|\.js\b/,
            u: {},
            t: {},
            plugins: {},
            c: {},
            N: /$^/
        };
        G = l.curl;
        H = l.define;
        G && v(G, "Object") ? (l.curl = s, w(G)) : k.Q();
        (r = k.W()) && k.l(k.S);
        u.curl = e;
        u["curl/_privileged"] = {
            core: k,
            cache: u,
            config: function() {
                return q
            },
            _define: K,
            _curl: e,
            Promise: E
        }
    })(this.window ||
        "undefined" != typeof global && global || this);
    (function(l, p) {
        function v() {
            if (!p.body) return !1;
            F || (F = p.createTextNode(""));
            try {
                return p.body.removeChild(p.body.appendChild(F)), F = K, !0
            } catch (e) {
                return !1
            }
        }

        function x() {
            var r;
            r = A[p[C]] && v();
            if (!z && r) {
                z = !0;
                for (clearTimeout(h); e = w.pop();) e();
                E && (p[C] = "complete");
                for (var q; q = y.shift();) q()
            }
            return r
        }

        function D() {
            x();
            z || (h = setTimeout(D, t))
        }
        var C = "readyState",
            A = {
                loaded: 1,
                interactive: 1,
                complete: 1
            },
            y = [],
            E = p && "string" != typeof p[C],
            z = !1,
            t = 10,
            B, e, w = [],
            h, K, F;
        B = "addEventListener" in l ? function(e, h) {
            e.addEventListener(h,
                x, !1);
            return function() {
                e.removeEventListener(h, x, !1)
            }
        } : function(e, h) {
            e.attachEvent("on" + h, x);
            return function() {
                e.detachEvent(h, x)
            }
        };
        p && !x() && (w = [B(l, "load"), B(p, "readystatechange"), B(l, "DOMContentLoaded")], h = setTimeout(D, t));
        define("curl/domReady", function() {
            function e(h) {
                z ? h() : y.push(h)
            }
            e.then = e;
            e.amd = !0;
            return e
        })
    })(this, this.document);
    (function(l, p, v) {
        define("curl/plugin/js", ["curl/_privileged"], function(l) {
            function D(e, w, h) {
                function p() {
                    r || (t < new Date ? h() : setTimeout(p, 10))
                }
                var t, r, q;
                t = (new Date).valueOf() + (e.fa || 3E5);
                h && e.a && setTimeout(p, 10);
                q = l.core.r(e, function() {
                    r = !0;
                    e.a && (e.B = v(e.a));
                    !e.a || e.B ? w(q) : h()
                }, function(e) {
                    r = !0;
                    h(e)
                })
            }

            function C(e, l) {
                D(e, function() {
                    var h = y.shift();
                    t = 0 < y.length;
                    h && C.apply(null, h);
                    l.h(e.B || !0)
                }, function(e) {
                    l.f(e)
                })
            }
            var A = {},
                y = [],
                E = p && !0 == p.createElement("script").async,
                z, t, B = /\?|\.js\b/;
            z = l.Promise;
            return {
                dynamic: !0,
                normalize: function(e, l) {
                    var h = e.indexOf("!");
                    return 0 <= h ? l(e.substr(0, h)) + e.substr(h) : l(e)
                },
                load: function(e, l, h, p) {
                    function v(e) {
                        (h.error || function(e) {
                            throw e;
                        })(e)
                    }
                    var r, q, x, H, m;
                    r = 0 < e.indexOf("!order");
                    q = e.indexOf("!exports=");
                    x = 0 < q ? e.substr(q + 9) : p.a;
                    H = "prefetch" in p ? p.prefetch : !0;
                    e = r || 0 < q ? e.substr(0, e.indexOf("!")) : e;
                    q = (q = p.dontAddFileExt || p.i) ? RegExp(q) : B;
                    m = l.toUrl(e);
                    q.test(m) || (m = m.lastIndexOf(".") <= m.lastIndexOf("/") ? m + ".js" : m);
                    m in A ? A[m] instanceof z ? A[m].then(h, v) : h(A[m]) :
                        (e = {
                            name: e,
                            url: m,
                            ea: r,
                            a: x,
                            fa: p.timeout
                        }, A[m] = l = new z, l.then(function(e) {
                            A[m] = e;
                            h(e)
                        }, v), r && !E && t ? (y.push([e, l]), H && (e.M = "text/cache", D(e, function(e) {
                            e && e.parentNode.removeChild(e)
                        }, function() {}), e.M = "")) : (t = t || r, C(e, l)))
                },
                cramPlugin: "../cram/js"
            }
        })
    })(this, this.document, function(l) {
        try {
            return eval(l)
        } catch (p) {}
    });
    define("curl/plugin/domReady", ["../domReady"], function(l) {
        return {
            load: function(p, v, x) {
                l(x)
            }
        }
    });
}).call(this);

! function(e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define("Promise", e) : "undefined" != typeof window ? window.Promise = e() : "undefined" != typeof global ? global.Promise = e() : "undefined" != typeof self && (self.Promise = e())
}(function() {
    var e;
    return function t(e, n, r) {
        function i(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                var c = n[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    var n = e[s][1][t];
                    return i(n ? n : t)
                }, c, c.exports, t, e, n, r)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
        return i
    }({
        1: [function(e, t, n) {
            var r = e("../lib/decorators/unhandledRejection"),
                i = r(e("../lib/Promise"));
            t.exports = "undefined" != typeof global ? global.Promise = i : "undefined" != typeof self ? self.Promise = i : i
        }, {
            "../lib/Promise": 2,
            "../lib/decorators/unhandledRejection": 4
        }],
        2: [function(t, n, r) {
            ! function(e) {
                "use strict";
                e(function(e) {
                    var t = e("./makePromise"),
                        n = e("./Scheduler"),
                        r = e("./env").asap;
                    return t({
                        scheduler: new n(r)
                    })
                })
            }("function" == typeof e && e.amd ? e : function(e) {
                n.exports = e(t)
            })
        }, {
            "./Scheduler": 3,
            "./env": 5,
            "./makePromise": 7
        }],
        3: [function(t, n, r) {
            ! function(e) {
                "use strict";
                e(function() {
                    function e(e) {
                        this._async = e, this._running = !1, this._queue = this, this._queueLen = 0, this._afterQueue = {}, this._afterQueueLen = 0;
                        var t = this;
                        this.drain = function() {
                            t._drain()
                        }
                    }
                    return e.prototype.enqueue = function(e) {
                        this._queue[this._queueLen++] = e, this.run()
                    }, e.prototype.afterQueue = function(e) {
                        this._afterQueue[this._afterQueueLen++] = e, this.run()
                    }, e.prototype.run = function() {
                        this._running || (this._running = !0, this._async(this.drain))
                    }, e.prototype._drain = function() {
                        for (var e = 0; e < this._queueLen; ++e) this._queue[e].run(), this._queue[e] = void 0;
                        for (this._queueLen = 0, this._running = !1, e = 0; e < this._afterQueueLen; ++e) this._afterQueue[e].run(), this._afterQueue[e] = void 0;
                        this._afterQueueLen = 0
                    }, e
                })
            }("function" == typeof e && e.amd ? e : function(e) {
                n.exports = e()
            })
        }, {}],
        4: [function(t, n, r) {
            ! function(e) {
                "use strict";
                e(function(e) {
                    function t(e) {
                        throw e
                    }

                    function n() {}
                    var r = e("../env").setTimer,
                        i = e("../format");
                    return function(e) {
                        function o(e) {
                            e.handled || (p.push(e), l("Potentially unhandled rejection [" + e.id + "] " + i.formatError(e.value)))
                        }

                        function s(e) {
                            var t = p.indexOf(e);
                            t >= 0 && (p.splice(t, 1), f("Handled previous rejection [" + e.id + "] " + i.formatObject(e.value)))
                        }

                        function a(e, t) {
                            d.push(e, t), null === h && (h = r(u, 0))
                        }

                        function u() {
                            for (h = null; d.length > 0;) d.shift()(d.shift())
                        }
                        var c, l = n,
                            f = n;
                        "undefined" != typeof console && (c = console, l = "undefined" != typeof c.error ? function(e) {
                            c.error(e)
                        } : function(e) {
                            c.log(e)
                        }, f = "undefined" != typeof c.info ? function(e) {
                            c.info(e)
                        } : function(e) {
                            c.log(e)
                        }), e.onPotentiallyUnhandledRejection = function(e) {
                            a(o, e)
                        }, e.onPotentiallyUnhandledRejectionHandled = function(e) {
                            a(s, e)
                        }, e.onFatalRejection = function(e) {
                            a(t, e.value)
                        };
                        var d = [],
                            p = [],
                            h = null;
                        return e
                    }
                })
            }("function" == typeof e && e.amd ? e : function(e) {
                n.exports = e(t)
            })
        }, {
            "../env": 5,
            "../format": 6
        }],
        5: [function(t, n, r) {
            ! function(e) {
                "use strict";
                e(function(e) {
                    function t() {
                        return "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)
                    }

                    function n() {
                        return "function" == typeof MutationObserver && MutationObserver || "function" == typeof WebKitMutationObserver && WebKitMutationObserver
                    }

                    function r(e) {
                        function t() {
                            var e = n;
                            n = void 0, e()
                        }
                        var n, r = document.createTextNode(""),
                            i = new e(t);
                        i.observe(r, {
                            characterData: !0
                        });
                        var o = 0;
                        return function(e) {
                            n = e, r.data = o ^= 1
                        }
                    }
                    var i, o = "undefined" != typeof setTimeout && setTimeout,
                        s = function(e, t) {
                            return setTimeout(e, t)
                        },
                        a = function(e) {
                            return clearTimeout(e)
                        },
                        u = function(e) {
                            return o(e, 0)
                        };
                    if (t()) u = function(e) {
                        return process.nextTick(e)
                    };
                    else if (i = n()) u = r(i);
                    else if (!o) {
                        var c = e,
                            l = c("vertx");
                        s = function(e, t) {
                            return l.setTimer(t, e)
                        }, a = l.cancelTimer, u = l.runOnLoop || l.runOnContext
                    }
                    return {
                        setTimer: s,
                        clearTimer: a,
                        asap: u
                    }
                })
            }("function" == typeof e && e.amd ? e : function(e) {
                n.exports = e(t)
            })
        }, {}],
        6: [function(t, n, r) {
            ! function(e) {
                "use strict";
                e(function() {
                    function e(e) {
                        var n = "object" == typeof e && null !== e && e.stack ? e.stack : t(e);
                        return e instanceof Error ? n : n + " (WARNING: non-Error used)"
                    }

                    function t(e) {
                        var t = String(e);
                        return "[object Object]" === t && "undefined" != typeof JSON && (t = n(e, t)), t
                    }

                    function n(e, t) {
                        try {
                            return JSON.stringify(e)
                        } catch (n) {
                            return t
                        }
                    }
                    return {
                        formatError: e,
                        formatObject: t,
                        tryStringify: n
                    }
                })
            }("function" == typeof e && e.amd ? e : function(e) {
                n.exports = e()
            })
        }, {}],
        7: [function(t, n, r) {
            ! function(e) {
                "use strict";
                e(function() {
                    return function(e) {
                        function t(e, t) {
                            this._handler = e === b ? t : n(e)
                        }

                        function n(e) {
                            function t(e) {
                                i.resolve(e)
                            }

                            function n(e) {
                                i.reject(e)
                            }

                            function r(e) {
                                i.notify(e)
                            }
                            var i = new x;
                            try {
                                e(t, n, r)
                            } catch (o) {
                                n(o)
                            }
                            return i
                        }

                        function r(e) {
                            return L(e) ? e : new t(b, new j(g(e)))
                        }

                        function i(e) {
                            return new t(b, new j(new S(e)))
                        }

                        function o() {
                            return Z
                        }

                        function s() {
                            return new t(b, new x)
                        }

                        function a(e, t) {
                            var n = new x(e.receiver, e.join().context);
                            return new t(b, n)
                        }

                        function u(e) {
                            return l(W, null, e)
                        }

                        function c(e, t) {
                            return l(M, e, t)
                        }

                        function l(e, n, r) {
                            function i(t, i, s) {
                                s.resolved || f(r, o, t, e(n, i, t), s)
                            }

                            function o(e, t, n) {
                                l[e] = t, 0 === --c && n.become(new k(l))
                            }
                            for (var s, a = "function" == typeof n ? i : o, u = new x, c = r.length >>> 0, l = new Array(c), d = 0; d < r.length && !u.resolved; ++d) s = r[d], void 0 !== s || d in r ? f(r, a, d, s, u) : --c;
                            return 0 === c && u.become(new k(l)), new t(b, u)
                        }

                        function f(e, t, n, r, i) {
                            if (q(r)) {
                                var o = v(r),
                                    s = o.state();
                                0 === s ? o.fold(t, n, void 0, i) : s > 0 ? t(n, o.value, i) : (i.become(o), d(e, n + 1, o))
                            } else t(n, r, i)
                        }

                        function d(e, t, n) {
                            for (var r = t; r < e.length; ++r) p(g(e[r]), n)
                        }

                        function p(e, t) {
                            if (e !== t) {
                                var n = e.state();
                                0 === n ? e.visit(e, void 0, e._unreport) : 0 > n && e._unreport()
                            }
                        }

                        function h(e) {
                            return "object" != typeof e || null === e ? i(new TypeError("non-iterable passed to race()")) : 0 === e.length ? o() : 1 === e.length ? r(e[0]) : m(e)
                        }

                        function m(e) {
                            var n, r, i, o = new x;
                            for (n = 0; n < e.length; ++n)
                                if (r = e[n], void 0 !== r || n in e) {
                                    if (i = g(r), 0 !== i.state()) {
                                        o.become(i), d(e, n + 1, i);
                                        break
                                    }
                                    i.visit(o, o.resolve, o.reject)
                                }
                            return new t(b, o)
                        }

                        function g(e) {
                            return L(e) ? e._handler.join() : q(e) ? y(e) : new k(e)
                        }

                        function v(e) {
                            return L(e) ? e._handler.join() : y(e)
                        }

                        function y(e) {
                            try {
                                var t = e.then;
                                return "function" == typeof t ? new E(t, e) : new k(e)
                            } catch (n) {
                                return new S(n)
                            }
                        }

                        function b() {}

                        function w() {}

                        function x(e, n) {
                            t.createContext(this, n), this.consumers = void 0, this.receiver = e, this.handler = void 0, this.resolved = !1
                        }

                        function j(e) {
                            this.handler = e
                        }

                        function E(e, t) {
                            x.call(this), X.enqueue(new P(e, t, this))
                        }

                        function k(e) {
                            t.createContext(this), this.value = e
                        }

                        function S(e) {
                            t.createContext(this), this.id = ++K, this.value = e, this.handled = !1, this.reported = !1, this._report()
                        }

                        function C(e, t) {
                            this.rejection = e, this.context = t
                        }

                        function _(e) {
                            this.rejection = e
                        }

                        function O() {
                            return new S(new TypeError("Promise cycle"))
                        }

                        function A(e, t) {
                            this.continuation = e, this.handler = t
                        }

                        function T(e, t) {
                            this.handler = t, this.value = e
                        }

                        function P(e, t, n) {
                            this._then = e, this.thenable = t, this.resolver = n
                        }

                        function N(e, t, n, r, i) {
                            try {
                                e.call(t, n, r, i)
                            } catch (o) {
                                r(o)
                            }
                        }

                        function R(e, t, n, r) {
                            this.f = e, this.z = t, this.c = n, this.to = r, this.resolver = J, this.receiver = this
                        }

                        function L(e) {
                            return e instanceof t
                        }

                        function q(e) {
                            return ("object" == typeof e || "function" == typeof e) && null !== e
                        }

                        function I(e, n, r, i) {
                            return "function" != typeof e ? i.become(n) : (t.enterContext(n), D(e, n.value, r, i), void t.exitContext())
                        }

                        function U(e, n, r, i, o) {
                            return "function" != typeof e ? o.become(r) : (t.enterContext(r), $(e, n, r.value, i, o), void t.exitContext())
                        }

                        function H(e, n, r, i, o) {
                            return "function" != typeof e ? o.notify(n) : (t.enterContext(r), F(e, n, i, o), void t.exitContext())
                        }

                        function M(e, t, n) {
                            try {
                                return e(t, n)
                            } catch (r) {
                                return i(r)
                            }
                        }

                        function D(e, t, n, r) {
                            try {
                                r.become(g(e.call(n, t)))
                            } catch (i) {
                                r.become(new S(i))
                            }
                        }

                        function $(e, t, n, r, i) {
                            try {
                                e.call(r, t, n, i)
                            } catch (o) {
                                i.become(new S(o))
                            }
                        }

                        function F(e, t, n, r) {
                            try {
                                r.notify(e.call(n, t))
                            } catch (i) {
                                r.notify(i)
                            }
                        }

                        function B(e, t) {
                            t.prototype = G(e.prototype), t.prototype.constructor = t
                        }

                        function W(e, t) {
                            return t
                        }

                        function z() {}

                        function V() {
                            return "undefined" != typeof process && null !== process && "function" == typeof process.emit ? function(e, t) {
                                return "unhandledRejection" === e ? process.emit(e, t.value, t) : process.emit(e, t)
                            } : "undefined" != typeof self && "function" == typeof CustomEvent ? function(e, t, n) {
                                var r = !1;
                                try {
                                    var i = new n("unhandledRejection");
                                    r = i instanceof n
                                } catch (o) {}
                                return r ? function(e, r) {
                                    var i = new n(e, {
                                        detail: {
                                            reason: r.value,
                                            key: r
                                        },
                                        bubbles: !1,
                                        cancelable: !0
                                    });
                                    return !t.dispatchEvent(i)
                                } : e
                            }(z, self, CustomEvent) : z
                        }
                        var X = e.scheduler,
                            Q = V(),
                            G = Object.create || function(e) {
                                function t() {}
                                return t.prototype = e, new t
                            };
                        t.resolve = r, t.reject = i, t.never = o, t._defer = s, t._handler = g, t.prototype.then = function(e, t, n) {
                            var r = this._handler,
                                i = r.join().state();
                            if ("function" != typeof e && i > 0 || "function" != typeof t && 0 > i) return new this.constructor(b, r);
                            var o = this._beget(),
                                s = o._handler;
                            return r.chain(s, r.receiver, e, t, n), o
                        }, t.prototype["catch"] = function(e) {
                            return this.then(void 0, e)
                        }, t.prototype._beget = function() {
                            return a(this._handler, this.constructor)
                        }, t.all = u, t.race = h, t._traverse = c, t._visitRemaining = d, b.prototype.when = b.prototype.become = b.prototype.notify = b.prototype.fail = b.prototype._unreport = b.prototype._report = z, b.prototype._state = 0, b.prototype.state = function() {
                            return this._state
                        }, b.prototype.join = function() {
                            for (var e = this; void 0 !== e.handler;) e = e.handler;
                            return e
                        }, b.prototype.chain = function(e, t, n, r, i) {
                            this.when({
                                resolver: e,
                                receiver: t,
                                fulfilled: n,
                                rejected: r,
                                progress: i
                            })
                        }, b.prototype.visit = function(e, t, n, r) {
                            this.chain(J, e, t, n, r)
                        }, b.prototype.fold = function(e, t, n, r) {
                            this.when(new R(e, t, n, r))
                        }, B(b, w), w.prototype.become = function(e) {
                            e.fail()
                        };
                        var J = new w;
                        B(b, x), x.prototype._state = 0, x.prototype.resolve = function(e) {
                            this.become(g(e))
                        }, x.prototype.reject = function(e) {
                            this.resolved || this.become(new S(e))
                        }, x.prototype.join = function() {
                            if (!this.resolved) return this;
                            for (var e = this; void 0 !== e.handler;)
                                if (e = e.handler, e === this) return this.handler = O();
                            return e
                        }, x.prototype.run = function() {
                            var e = this.consumers,
                                t = this.handler;
                            this.handler = this.handler.join(), this.consumers = void 0;
                            for (var n = 0; n < e.length; ++n) t.when(e[n])
                        }, x.prototype.become = function(e) {
                            this.resolved || (this.resolved = !0, this.handler = e, void 0 !== this.consumers && X.enqueue(this), void 0 !== this.context && e._report(this.context))
                        }, x.prototype.when = function(e) {
                            this.resolved ? X.enqueue(new A(e, this.handler)) : void 0 === this.consumers ? this.consumers = [e] : this.consumers.push(e)
                        }, x.prototype.notify = function(e) {
                            this.resolved || X.enqueue(new T(e, this))
                        }, x.prototype.fail = function(e) {
                            var t = "undefined" == typeof e ? this.context : e;
                            this.resolved && this.handler.join().fail(t)
                        }, x.prototype._report = function(e) {
                            this.resolved && this.handler.join()._report(e)
                        }, x.prototype._unreport = function() {
                            this.resolved && this.handler.join()._unreport()
                        }, B(b, j), j.prototype.when = function(e) {
                            X.enqueue(new A(e, this))
                        }, j.prototype._report = function(e) {
                            this.join()._report(e)
                        }, j.prototype._unreport = function() {
                            this.join()._unreport()
                        }, B(x, E), B(b, k), k.prototype._state = 1, k.prototype.fold = function(e, t, n, r) {
                            U(e, t, this, n, r)
                        }, k.prototype.when = function(e) {
                            I(e.fulfilled, this, e.receiver, e.resolver)
                        };
                        var K = 0;
                        B(b, S), S.prototype._state = -1, S.prototype.fold = function(e, t, n, r) {
                            r.become(this)
                        }, S.prototype.when = function(e) {
                            "function" == typeof e.rejected && this._unreport(), I(e.rejected, this, e.receiver, e.resolver)
                        }, S.prototype._report = function(e) {
                            X.afterQueue(new C(this, e))
                        }, S.prototype._unreport = function() {
                            this.handled || (this.handled = !0, X.afterQueue(new _(this)))
                        }, S.prototype.fail = function(e) {
                            this.reported = !0, Q("unhandledRejection", this), t.onFatalRejection(this, void 0 === e ? this.context : e)
                        }, C.prototype.run = function() {
                            this.rejection.handled || this.rejection.reported || (this.rejection.reported = !0, Q("unhandledRejection", this.rejection) || t.onPotentiallyUnhandledRejection(this.rejection, this.context))
                        }, _.prototype.run = function() {
                            this.rejection.reported && (Q("rejectionHandled", this.rejection) || t.onPotentiallyUnhandledRejectionHandled(this.rejection))
                        }, t.createContext = t.enterContext = t.exitContext = t.onPotentiallyUnhandledRejection = t.onPotentiallyUnhandledRejectionHandled = t.onFatalRejection = z;
                        var Y = new b,
                            Z = new t(b, Y);
                        return A.prototype.run = function() {
                            this.handler.join().when(this.continuation)
                        }, T.prototype.run = function() {
                            var e = this.handler.consumers;
                            if (void 0 !== e)
                                for (var t, n = 0; n < e.length; ++n) t = e[n], H(t.progress, this.value, this.handler, t.receiver, t.resolver)
                        }, P.prototype.run = function() {
                            function e(e) {
                                r.resolve(e)
                            }

                            function t(e) {
                                r.reject(e)
                            }

                            function n(e) {
                                r.notify(e)
                            }
                            var r = this.resolver;
                            N(this._then, this.thenable, e, t, n)
                        }, R.prototype.fulfilled = function(e) {
                            this.f.call(this.c, this.z, e, this.to)
                        }, R.prototype.rejected = function(e) {
                            this.to.reject(e)
                        }, R.prototype.progress = function(e) {
                            this.to.notify(e)
                        }, t
                    }
                })
            }("function" == typeof e && e.amd ? e : function(e) {
                n.exports = e()
            })
        }, {}]
    }, {}, [1])(1)
}), ! function(e, t) {
    "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define("domReady", t) : this[e] = t()
}("domready", function(e) {
    function t(e) {
        for (p = 1; e = r.shift();) e()
    }
    var n, r = [],
        i = !1,
        o = document,
        s = o.documentElement,
        a = s.doScroll,
        u = "DOMContentLoaded",
        c = "addEventListener",
        l = "onreadystatechange",
        f = "readyState",
        d = a ? /^loaded|^c/ : /^loaded|c/,
        p = d.test(o[f]);
    return o[c] && o[c](u, n = function() {
        o.removeEventListener(u, n, i), t()
    }, i), a && o.attachEvent(l, n = function() {
        /^c/.test(o[f]) && (o.detachEvent(l, n), t())
    }), e = a ? function(t) {
        self != top ? p ? t() : r.push(t) : function() {
            try {
                s.doScroll("left")
            } catch (n) {
                return setTimeout(function() {
                    e(t)
                }, 50)
            }
            t()
        }()
    } : function(e) {
        p ? e() : r.push(e)
    }
}), define("boot", ["Promise", "domReady"], function(e, t) {
        var n = function(t) {
                return e.resolve(require(t))
            },
            r = window.guardian,
            i = r.config,
            o = new e(function(e) {
                t(e)
            }),
            s = function() {
                return n(["bootstraps/standard/main"]).then(function(e) {
                    e()
                })
            },
            a = function() {
                return i.page.isDev && r.adBlockers.onDetect.push(function(e) {
                    var t = e && window.console && window.console.warn,
                        n = "Do you have an adblocker enabled? Commercial features might fail to run, or throw exceptions.";
                    t && window.console.warn(n)
                }), n(["raven"]).then(function(e) {
                    return i.switches.commercial && !i.page.isPreferencesPage ? n(["bootstraps/commercial"]).then(e.wrap({
                        tags: {
                            feature: "commercial"
                        }
                    }, function(e) {
                        e.init()
                    })) : void 0
                })
            },
            u = function() {
                return r.isEnhanced ? n(["bootstraps/enhanced/main"]).then(function(e) {
                    e()
                }) : void e.resolve()
            };
        o.then(s).then(a).then(u)
    }),
    function(e, t) {
        "use strict";

        function n(e, t) {
            var n, r;
            t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = document.createEventObject(), n.eventType = e);
            for (r in t) c(t, r) && (n[r] = t[r]);
            if (document.createEvent) document.dispatchEvent(n);
            else try {
                document.fireEvent("on" + n.eventType.toLowerCase(), n)
            } catch (i) {}
        }

        function r(e) {
            this.name = "RavenConfigError", this.message = e
        }

        function i(e) {
            var t = F.exec(e),
                n = {},
                i = 7;
            try {
                for (; i--;) n[$[i]] = t[i] || ""
            } catch (o) {
                throw new r("Invalid DSN: " + e)
            }
            if (n.pass) throw new r("Do not specify your private key in the DSN!");
            return n
        }

        function o(e) {
            return "undefined" == typeof e
        }

        function s(e) {
            return "function" == typeof e
        }

        function a(e) {
            return "string" == typeof e
        }

        function u(e) {
            for (var t in e) return !1;
            return !0
        }

        function c(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function l(e, t) {
            var n, r;
            if (o(e.length))
                for (n in e) c(e, n) && t.call(null, n, e[n]);
            else if (r = e.length)
                for (n = 0; r > n; n++) t.call(null, n, e[n])
        }

        function f() {
            q = "?sentry_version=4&sentry_client=raven-js/" + D.VERSION + "&sentry_key=" + R
        }

        function d(e, t) {
            var r = [];
            e.stack && e.stack.length && l(e.stack, function(e, t) {
                var n = p(t);
                n && r.push(n)
            }), n("handle", {
                stackInfo: e,
                options: t
            }), m(e.name, e.message, e.url, e.lineno, r, t)
        }

        function p(e) {
            if (e.url) {
                var t, n = {
                        filename: e.url,
                        lineno: e.line,
                        colno: e.column,
                        "function": e.func || "?"
                    },
                    r = h(e);
                if (r) {
                    var i = ["pre_context", "context_line", "post_context"];
                    for (t = 3; t--;) n[i[t]] = r[t]
                }
                return n.in_app = !(!H.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n["function"]) || /raven\.(min\.)?js$/.test(n.filename)), n
            }
        }

        function h(e) {
            if (e.context && H.fetchContext) {
                for (var t = e.context, n = ~~(t.length / 2), r = t.length, i = !1; r--;)
                    if (t[r].length > 300) {
                        i = !0;
                        break
                    }
                if (i) {
                    if (o(e.column)) return;
                    return [
                        [], t[n].substr(e.column, 50), []
                    ]
                }
                return [t.slice(0, n), t[n], t.slice(n + 1)]
            }
        }

        function m(e, t, n, r, i, o) {
            var s, a;
            t += "", ("Error" !== e || t) && (H.ignoreErrors.test(t) || (i && i.length ? (n = i[0].filename || n, i.reverse(), s = {
                frames: i
            }) : n && (s = {
                frames: [{
                    filename: n,
                    lineno: r,
                    in_app: !0
                }]
            }), t = v(t, 100), H.ignoreUrls && H.ignoreUrls.test(n) || (!H.whitelistUrls || H.whitelistUrls.test(n)) && (a = r ? t + " at " + r : t, b(g({
                exception: {
                    type: e,
                    value: t
                },
                stacktrace: s,
                culprit: n,
                message: a
            }, o)))))
        }

        function g(e, t) {
            return t ? (l(t, function(t, n) {
                e[t] = n
            }), e) : e
        }

        function v(e, t) {
            return e.length <= t ? e : e.substr(0, t) + "…"
        }

        function y() {
            var e = {
                url: document.location.href,
                headers: {
                    "User-Agent": navigator.userAgent
                }
            };
            return document.referrer && (e.headers.Referer = document.referrer), e
        }

        function b(e) {
            x() && (e = g({
                project: L,
                logger: H.logger,
                site: H.site,
                platform: "javascript",
                request: y()
            }, e), e.tags = g(H.tags, e.tags), e.extra = g(H.extra, e.extra), u(e.tags) && delete e.tags, u(e.extra) && delete e.extra, N && (e.user = N), s(H.dataCallback) && (e = H.dataCallback(e)), (!s(H.shouldSendCallback) || H.shouldSendCallback(e)) && (T = e.event_id || (e.event_id = E()), w(e)))
        }

        function w(e) {
            var t = new Image,
                r = P + q + "&sentry_data=" + encodeURIComponent(JSON.stringify(e));
            t.onload = function() {
                n("success", {
                    data: e,
                    src: r
                })
            }, t.onerror = t.onabort = function() {
                n("failure", {
                    data: e,
                    src: r
                })
            }, t.src = r
        }

        function x() {
            return U ? P ? !0 : (k("error", "Error: Raven has not been configured."), !1) : !1
        }

        function j(e) {
            for (var t, n = [], r = 0, i = e.length; i > r; r++) t = e[r], a(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
            return new RegExp(n.join("|"), "i")
        }

        function E() {
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0,
                    n = "x" == e ? t : 3 & t | 8;
                return n.toString(16)
            })
        }

        function k(t, n) {
            e.console && console[t] && D.debug && console[t](n)
        }

        function S() {
            var t = e.RavenConfig;
            t && D.config(t.dsn, t.config).install()
        }
        var C = {
                remoteFetching: !1,
                collectWindowErrors: !0,
                linesOfContext: 7
            },
            _ = [].slice,
            O = "?";
        C.wrap = function(e) {
            function t() {
                try {
                    return e.apply(this, arguments)
                } catch (t) {
                    throw C.report(t), t
                }
            }
            return t
        }, C.report = function() {
            function n(e) {
                a(), h.push(e)
            }

            function r(e) {
                for (var t = h.length - 1; t >= 0; --t) h[t] === e && h.splice(t, 1)
            }

            function i() {
                u(), h = []
            }

            function o(e, t) {
                var n = null;
                if (!t || C.collectWindowErrors) {
                    for (var r in h)
                        if (c(h, r)) try {
                            h[r].apply(null, [e].concat(_.call(arguments, 2)))
                        } catch (i) {
                            n = i
                        }
                        if (n) throw n
                }
            }

            function s(e, t, n, r, i) {
                var s = null;
                if (v) C.computeStackTrace.augmentStackTraceWithInitialElement(v, t, n, e), l();
                else if (i) s = C.computeStackTrace(i), o(s, !0);
                else {
                    var a = {
                        url: t,
                        line: n,
                        column: r
                    };
                    a.func = C.computeStackTrace.guessFunctionName(a.url, a.line), a.context = C.computeStackTrace.gatherContext(a.url, a.line), s = {
                        message: e,
                        url: document.location.href,
                        stack: [a]
                    }, o(s, !0)
                }
                return d ? d.apply(this, arguments) : !1
            }

            function a() {
                p || (d = e.onerror, e.onerror = s, p = !0)
            }

            function u() {
                p && (e.onerror = d, p = !1, d = t)
            }

            function l() {
                var e = v,
                    t = m;
                m = null, v = null, g = null, o.apply(null, [e, !1].concat(t))
            }

            function f(t, n) {
                var r = _.call(arguments, 1);
                if (v) {
                    if (g === t) return;
                    l()
                }
                var i = C.computeStackTrace(t);
                if (v = i, g = t, m = r, e.setTimeout(function() {
                        g === t && l()
                    }, i.incomplete ? 2e3 : 0), n !== !1) throw t
            }
            var d, p, h = [],
                m = null,
                g = null,
                v = null;
            return f.subscribe = n, f.unsubscribe = r, f.uninstall = i, f
        }(), C.computeStackTrace = function() {
            function t(t) {
                if (!C.remoteFetching) return "";
                try {
                    var n = function() {
                            try {
                                return new e.XMLHttpRequest
                            } catch (t) {
                                return new e.ActiveXObject("Microsoft.XMLHTTP")
                            }
                        },
                        r = n();
                    return r.open("GET", t, !1), r.send(""), r.responseText
                } catch (i) {
                    return ""
                }
            }

            function n(e) {
                if (!a(e)) return [];
                if (!c(x, e)) {
                    var n = ""; - 1 !== e.indexOf(document.domain) && (n = t(e)), x[e] = n ? n.split("\n") : []
                }
                return x[e]
            }

            function r(e, t) {
                var r, i = /function ([^(]*)\(([^)]*)\)/,
                    s = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                    a = "",
                    u = 10,
                    c = n(e);
                if (!c.length) return O;
                for (var l = 0; u > l; ++l)
                    if (a = c[t - l] + a, !o(a)) {
                        if (r = s.exec(a)) return r[1];
                        if (r = i.exec(a)) return r[1]
                    }
                return O
            }

            function i(e, t) {
                var r = n(e);
                if (!r.length) return null;
                var i = [],
                    s = Math.floor(C.linesOfContext / 2),
                    a = s + C.linesOfContext % 2,
                    u = Math.max(0, t - s - 1),
                    c = Math.min(r.length, t + a - 1);
                t -= 1;
                for (var l = u; c > l; ++l) o(r[l]) || i.push(r[l]);
                return i.length > 0 ? i : null
            }

            function s(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
            }

            function u(e) {
                return s(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
            }

            function l(e, t) {
                for (var r, i, o = 0, s = t.length; s > o; ++o)
                    if ((r = n(t[o])).length && (r = r.join("\n"), i = e.exec(r))) return {
                        url: t[o],
                        line: r.substring(0, i.index).split("\n").length,
                        column: i.index - r.lastIndexOf("\n", i.index) - 1
                    };
                return null
            }

            function f(e, t, r) {
                var i, o = n(t),
                    a = new RegExp("\\b" + s(e) + "\\b");
                return r -= 1, o && o.length > r && (i = a.exec(o[r])) ? i.index : null
            }

            function d(t) {
                for (var n, r, i, o, a = [e.location.href], c = document.getElementsByTagName("script"), f = "" + t, d = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, p = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, h = 0; h < c.length; ++h) {
                    var m = c[h];
                    m.src && a.push(m.src)
                }
                if (i = d.exec(f)) {
                    var g = i[1] ? "\\s+" + i[1] : "",
                        v = i[2].split(",").join("\\s*,\\s*");
                    n = s(i[3]).replace(/;$/, ";?"), r = new RegExp("function" + g + "\\s*\\(\\s*" + v + "\\s*\\)\\s*{\\s*" + n + "\\s*}")
                } else r = new RegExp(s(f).replace(/\s+/g, "\\s+"));
                if (o = l(r, a)) return o;
                if (i = p.exec(f)) {
                    var y = i[1];
                    if (n = u(i[2]), r = new RegExp("on" + y + "=[\\'\"]\\s*" + n + "\\s*[\\'\"]", "i"), o = l(r, a[0])) return o;
                    if (r = new RegExp(n), o = l(r, a)) return o
                }
                return null
            }

            function p(e) {
                if (!e.stack) return null;
                for (var t, n, s = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = /^\s*(\S*)(?:\((.*?)\))?@((?:file|https?|chrome).*?):(\d+)(?::(\d+))?\s*$/i, u = e.stack.split("\n"), c = [], l = /^(.*) is undefined$/.exec(e.message), d = 0, p = u.length; p > d; ++d) {
                    if (t = a.exec(u[d])) n = {
                        url: t[3],
                        func: t[1] || O,
                        args: t[2] ? t[2].split(",") : "",
                        line: +t[4],
                        column: t[5] ? +t[5] : null
                    };
                    else {
                        if (!(t = s.exec(u[d]))) continue;
                        n = {
                            url: t[2],
                            func: t[1] || O,
                            line: +t[3],
                            column: t[4] ? +t[4] : null
                        }
                    }!n.func && n.line && (n.func = r(n.url, n.line)), n.line && (n.context = i(n.url, n.line)), c.push(n)
                }
                return c.length ? (c[0].line && !c[0].column && l ? c[0].column = f(l[1], c[0].url, c[0].line) : c[0].column || o(e.columnNumber) || (c[0].column = e.columnNumber + 1), {
                    name: e.name,
                    message: e.message,
                    url: document.location.href,
                    stack: c
                }) : null
            }

            function h(e) {
                for (var t, n = e.stacktrace, o = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i, s = n.split("\n"), a = [], u = 0, c = s.length; c > u; u += 2)
                    if (t = o.exec(s[u])) {
                        var l = {
                            line: +t[1],
                            column: +t[2],
                            func: t[3] || t[4],
                            args: t[5] ? t[5].split(",") : [],
                            url: t[6]
                        };
                        if (!l.func && l.line && (l.func = r(l.url, l.line)), l.line) try {
                            l.context = i(l.url, l.line)
                        } catch (f) {}
                        l.context || (l.context = [s[u + 1]]), a.push(l)
                    }
                return a.length ? {
                    name: e.name,
                    message: e.message,
                    url: document.location.href,
                    stack: a
                } : null
            }

            function m(t) {
                var o = t.message.split("\n");
                if (o.length < 4) return null;
                var s, a, f, d, p = /^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,
                    h = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,
                    m = /^\s*Line (\d+) of function script\s*$/i,
                    g = [],
                    v = document.getElementsByTagName("script"),
                    y = [];
                for (a in v) c(v, a) && !v[a].src && y.push(v[a]);
                for (a = 2, f = o.length; f > a; a += 2) {
                    var b = null;
                    if (s = p.exec(o[a])) b = {
                        url: s[2],
                        func: s[3],
                        line: +s[1]
                    };
                    else if (s = h.exec(o[a])) {
                        b = {
                            url: s[3],
                            func: s[4]
                        };
                        var w = +s[1],
                            x = y[s[2] - 1];
                        if (x && (d = n(b.url))) {
                            d = d.join("\n");
                            var j = d.indexOf(x.innerText);
                            j >= 0 && (b.line = w + d.substring(0, j).split("\n").length)
                        }
                    } else if (s = m.exec(o[a])) {
                        var E = e.location.href.replace(/#.*$/, ""),
                            k = s[1],
                            S = new RegExp(u(o[a + 1]));
                        d = l(S, [E]), b = {
                            url: E,
                            line: d ? d.line : k,
                            func: ""
                        }
                    }
                    if (b) {
                        b.func || (b.func = r(b.url, b.line));
                        var C = i(b.url, b.line),
                            _ = C ? C[Math.floor(C.length / 2)] : null;
                        C && _.replace(/^\s*/, "") === o[a + 1].replace(/^\s*/, "") ? b.context = C : b.context = [o[a + 1]], g.push(b)
                    }
                }
                return g.length ? {
                    name: t.name,
                    message: o[0],
                    url: document.location.href,
                    stack: g
                } : null
            }

            function g(e, t, n, o) {
                var s = {
                    url: t,
                    line: n
                };
                if (s.url && s.line) {
                    e.incomplete = !1, s.func || (s.func = r(s.url, s.line)), s.context || (s.context = i(s.url, s.line));
                    var a = / '([^']+)' /.exec(o);
                    if (a && (s.column = f(a[1], s.url, s.line)), e.stack.length > 0 && e.stack[0].url === s.url) {
                        if (e.stack[0].line === s.line) return !1;
                        if (!e.stack[0].line && e.stack[0].func === s.func) return e.stack[0].line = s.line, e.stack[0].context = s.context, !1
                    }
                    return e.stack.unshift(s), e.partial = !0, !0
                }
                return e.incomplete = !0, !1
            }

            function v(e, t) {
                for (var n, i, o, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, a = [], u = {}, c = !1, l = v.caller; l && !c; l = l.caller)
                    if (l !== y && l !== C.report) {
                        if (i = {
                                url: null,
                                func: O,
                                line: null,
                                column: null
                            }, l.name ? i.func = l.name : (n = s.exec(l.toString())) && (i.func = n[1]), o = d(l)) {
                            i.url = o.url, i.line = o.line, i.func === O && (i.func = r(i.url, i.line));
                            var p = / '([^']+)' /.exec(e.message || e.description);
                            p && (i.column = f(p[1], o.url, o.line))
                        }
                        u["" + l] ? c = !0 : u["" + l] = !0, a.push(i)
                    }
                t && a.splice(0, t);
                var h = {
                    name: e.name,
                    message: e.message,
                    url: document.location.href,
                    stack: a
                };
                return g(h, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), h
            }

            function y(e, t) {
                var n = null;
                t = null == t ? 0 : +t;
                try {
                    if (n = h(e)) return n
                } catch (r) {
                    if (w) throw r
                }
                try {
                    if (n = p(e)) return n
                } catch (r) {
                    if (w) throw r
                }
                try {
                    if (n = m(e)) return n
                } catch (r) {
                    if (w) throw r
                }
                try {
                    if (n = v(e, t + 1)) return n
                } catch (r) {
                    if (w) throw r
                }
                return {}
            }

            function b(e) {
                e = (null == e ? 0 : +e) + 1;
                try {
                    throw new Error
                } catch (t) {
                    return y(t, e + 1)
                }
            }
            var w = !1,
                x = {};
            return y.augmentStackTraceWithInitialElement = g, y.guessFunctionName = r, y.gatherContext = i, y.ofCaller = b, y
        }();
        var A, T, P, N, R, L, q, I = e.Raven,
            U = !(!e.JSON || !e.JSON.stringify),
            H = {
                logger: "javascript",
                ignoreErrors: [],
                ignoreUrls: [],
                whitelistUrls: [],
                includePaths: [],
                collectWindowErrors: !0,
                tags: {},
                extra: {}
            },
            M = !1,
            D = {
                VERSION: "1.1.16",
                debug: !0,
                noConflict: function() {
                    return e.Raven = I, D
                },
                config: function(e, t) {
                    if (P) return k("error", "Error: Raven has already been configured"), D;
                    if (!e) return D;
                    var n = i(e),
                        r = n.path.lastIndexOf("/"),
                        o = n.path.substr(1, r);
                    return t && l(t, function(e, t) {
                        H[e] = t
                    }), H.ignoreErrors.push("Script error."), H.ignoreErrors.push("Script error"), H.ignoreErrors.push("Javascript error: Script error on line 0"), H.ignoreErrors.push("Javascript error: Script error. on line 0"), H.ignoreErrors = j(H.ignoreErrors), H.ignoreUrls = H.ignoreUrls.length ? j(H.ignoreUrls) : !1, H.whitelistUrls = H.whitelistUrls.length ? j(H.whitelistUrls) : !1, H.includePaths = j(H.includePaths), R = n.user, L = n.path.substr(r + 1), P = "//" + n.host + (n.port ? ":" + n.port : "") + "/" + o + "api/" + L + "/store/", n.protocol && (P = n.protocol + ":" + P), H.fetchContext && (C.remoteFetching = !0), H.linesOfContext && (C.linesOfContext = H.linesOfContext), C.collectWindowErrors = !!H.collectWindowErrors, f(), D
                },
                install: function() {
                    return x() && !M && (C.report.subscribe(d), M = !0), D
                },
                context: function(e, n, r) {
                    return s(e) && (r = n || [], n = e, e = t), D.wrap(e, n).apply(this, r)
                },
                wrap: function(e, n) {
                    function r() {
                        for (var t = [], r = arguments.length, i = !e || e && e.deep !== !1; r--;) t[r] = i ? D.wrap(e, arguments[r]) : arguments[r];
                        try {
                            return n.apply(this, t)
                        } catch (o) {
                            throw D.captureException(o, e), o
                        }
                    }
                    if (o(n) && !s(e)) return e;
                    if (s(e) && (n = e, e = t), !s(n)) return n;
                    if (n.__raven__) return n;
                    for (var i in n) c(n, i) && (r[i] = n[i]);
                    return r.__raven__ = !0, r.__inner__ = n, r
                },
                uninstall: function() {
                    return C.report.uninstall(), M = !1, D
                },
                captureException: function(e, t) {
                    if (!(e instanceof Error)) return D.captureMessage(e, t);
                    A = e;
                    try {
                        C.report(e, t)
                    } catch (n) {
                        if (e !== n) throw n
                    }
                    return D
                },
                captureMessage: function(e, t) {
                    return b(g({
                        message: e + ""
                    }, t)), D
                },
                setUserContext: function(e) {
                    return N = e, D
                },
                setExtraContext: function(e) {
                    return H.extra = e || {}, D
                },
                setTagsContext: function(e) {
                    return H.tags = e || {}, D
                },
                lastException: function() {
                    return A
                },
                lastEventId: function() {
                    return T
                }
            };
        D.setUser = D.setUserContext;
        var $ = "source protocol user pass host port path".split(" "),
            F = /^(?:(\w+):)?\/\/(\w+)(:\w+)?@([\w\.-]+)(?::(\d+))?(\/.*)/;
        r.prototype = new Error, r.prototype.constructor = r, S(), e.Raven = D, "function" == typeof define && define.amd && define("raven", [], function() {
            return D
        })
    }(this),
    function(e, t, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("qwery", n) : t[e] = n()
    }("qwery", this, function() {
        function e() {
            this.c = {}
        }

        function t(e) {
            return Q.g(e) || Q.s(e, "(^|\\s+)" + e + "(\\s+|$)", 1)
        }

        function n(e, t) {
            for (var n = 0, r = e.length; r > n; n++) t(e[n])
        }

        function r(e) {
            for (var t = [], n = 0, r = e.length; r > n; ++n) m(e[n]) ? t = t.concat(e[n]) : t[t.length] = e[n];
            return t
        }

        function i(e) {
            for (var t = 0, n = e.length, r = []; n > t; t++) r[t] = e[t];
            return r
        }

        function o(e) {
            for (;
                (e = e.previousSibling) && 1 != e[O];);
            return e
        }

        function s(e) {
            return e.match(V)
        }

        function a(e, n, r, i, o, s, a, u, l, f, d) {
            var p, h, m, g, v;
            if (1 !== this[O]) return !1;
            if (n && "*" !== n && this[_] && this[_].toLowerCase() !== n) return !1;
            if (r && (h = r.match(A)) && h[1] !== this.id) return !1;
            if (r && (v = r.match(T)))
                for (p = v.length; p--;)
                    if (!t(v[p].slice(1)).test(this.className)) return !1;
            if (l && y.pseudos[l] && !y.pseudos[l](this, d)) return !1;
            if (i && !a) {
                g = this.attributes;
                for (m in g)
                    if (Object.prototype.hasOwnProperty.call(g, m) && (g[m].name || m) == o) return this
            }
            return i && !c(s, Z(this, o) || "", a) ? !1 : this
        }

        function u(e) {
            return G.g(e) || G.s(e, e.replace(M, "\\$1"))
        }

        function c(e, t, n) {
            switch (e) {
                case "=":
                    return t == n;
                case "^=":
                    return t.match(J.g("^=" + n) || J.s("^=" + n, "^" + u(n), 1));
                case "$=":
                    return t.match(J.g("$=" + n) || J.s("$=" + n, u(n) + "$", 1));
                case "*=":
                    return t.match(J.g(n) || J.s(n, u(n), 1));
                case "~=":
                    return t.match(J.g("~=" + n) || J.s("~=" + n, "(?:^|\\s+)" + u(n) + "(?:\\s+|$)", 1));
                case "|=":
                    return t.match(J.g("|=" + n) || J.s("|=" + n, "^" + u(n) + "(-|$)", 1))
            }
            return 0
        }

        function l(e, t) {
            var r, i, o, u, c, l, f, p = [],
                h = [],
                m = t,
                g = K.g(e) || K.s(e, e.split(z)),
                y = e.match(W);
            if (!g.length) return p;
            if (u = (g = g.slice(0)).pop(), g.length && (o = g[g.length - 1].match(P)) && (m = v(t, o[1])), !m) return p;
            for (l = s(u), c = m !== t && 9 !== m[O] && y && /^[+~]$/.test(y[y.length - 1]) ? function(e) {
                    for (; m = m.nextSibling;) 1 == m[O] && (l[1] ? l[1] == m[_].toLowerCase() : 1) && (e[e.length] = m);
                    return e
                }([]) : m[k](l[1] || "*"), r = 0, i = c.length; i > r; r++)(f = a.apply(c[r], l)) && (p[p.length] = f);
            return g.length ? (n(p, function(e) {
                d(e, g, y) && (h[h.length] = e)
            }), h) : p
        }

        function f(e, t, n) {
            if (p(t)) return e == t;
            if (m(t)) return !!~r(t).indexOf(e);
            for (var i, o, u = t.split(","); t = u.pop();)
                if (i = K.g(t) || K.s(t, t.split(z)), o = t.match(W), i = i.slice(0), a.apply(e, s(i.pop())) && (!i.length || d(e, i, o, n))) return !0;
            return !1
        }

        function d(e, t, n, r) {
            function i(e, r, u) {
                for (; u = X[n[r]](u, e);)
                    if (p(u) && a.apply(u, s(t[r]))) {
                        if (!r) return u;
                        if (o = i(u, r - 1, u)) return o
                    }
            }
            var o;
            return (o = i(e, t.length - 1, e)) && (!r || Y(o, r))
        }

        function p(e, t) {
            return e && "object" == typeof e && (t = e[O]) && (1 == t || 9 == t)
        }

        function h(e) {
            var t, n, r = [];
            e: for (t = 0; t < e.length; ++t) {
                for (n = 0; n < r.length; ++n)
                    if (r[n] == e[t]) continue e;
                r[r.length] = e[t]
            }
            return r
        }

        function m(e) {
            return "object" == typeof e && isFinite(e.length)
        }

        function g(e) {
            return e ? "string" == typeof e ? y(e)[0] : !e[O] && m(e) ? e[0] : e : x
        }

        function v(e, t, n) {
            return 9 === e[O] ? e.getElementById(t) : e.ownerDocument && ((n = e.ownerDocument.getElementById(t)) && Y(n, e) && n || !Y(e, e.ownerDocument) && w('[id="' + t + '"]', e)[0])
        }

        function y(e, t) {
            var n, o, s = g(t);
            if (!s || !e) return [];
            if (e === window || p(e)) return !t || e !== window && p(s) && Y(e, s) ? [e] : [];
            if (e && m(e)) return r(e);
            if (n = e.match(B)) {
                if (n[1]) return (o = v(s, n[1])) ? [o] : [];
                if (n[2]) return i(s[k](n[2]));
                if (ee && n[3]) return i(s[E](n[3]))
            }
            return w(e, s)
        }

        function b(e, t) {
            return function(n) {
                var r, i;
                return q.test(n) ? void(9 !== e[O] && ((i = r = e.getAttribute("id")) || e.setAttribute("id", i = "__qwerymeupscotty"), n = '[id="' + i + '"]' + n, t(e.parentNode || e, n, !0), r || e.removeAttribute("id"))) : void(n.length && t(e, n, !1))
            }
        }
        var w, x = document,
            j = x.documentElement,
            E = "getElementsByClassName",
            k = "getElementsByTagName",
            S = "querySelectorAll",
            C = "useNativeQSA",
            _ = "tagName",
            O = "nodeType",
            A = /#([\w\-]+)/,
            T = /\.[\w\-]+/g,
            P = /^#([\w\-]+)$/,
            N = /^\.([\w\-]+)$/,
            R = /^([\w\-]+)$/,
            L = /^([\w]+)?\.([\w\-]+)$/,
            q = /(^|,)\s*[>~+]/,
            I = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
            U = /[\s\>\+\~]/,
            H = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
            M = /([.*+?\^=!:${}()|\[\]\/\\])/g,
            D = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
            $ = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
            F = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
            B = new RegExp(P.source + "|" + R.source + "|" + N.source),
            W = new RegExp("(" + U.source + ")" + H.source, "g"),
            z = new RegExp(U.source + H.source),
            V = new RegExp(D.source + "(" + $.source + ")?(" + F.source + ")?"),
            X = {
                " ": function(e) {
                    return e && e !== j && e.parentNode
                },
                ">": function(e, t) {
                    return e && e.parentNode == t.parentNode && e.parentNode
                },
                "~": function(e) {
                    return e && e.previousSibling
                },
                "+": function(e, t, n, r) {
                    return e ? (n = o(e)) && (r = o(t)) && n == r && n : !1
                }
            };
        e.prototype = {
            g: function(e) {
                return this.c[e] || void 0
            },
            s: function(e, t, n) {
                return t = n ? new RegExp(t) : t, this.c[e] = t
            }
        };
        var Q = new e,
            G = new e,
            J = new e,
            K = new e,
            Y = "compareDocumentPosition" in j ? function(e, t) {
                return 16 == (16 & t.compareDocumentPosition(e))
            } : "contains" in j ? function(e, t) {
                return t = 9 === t[O] || t == window ? j : t, t !== e && t.contains(e)
            } : function(e, t) {
                for (; e = e.parentNode;)
                    if (e === t) return 1;
                return 0
            },
            Z = function() {
                var e = x.createElement("p");
                return (e.innerHTML = '<a href="#x">x</a>') && "#x" != e.firstChild.getAttribute("href") ? function(e, t) {
                    return "class" === t ? e.className : "href" === t || "src" === t ? e.getAttribute(t, 2) : e.getAttribute(t)
                } : function(e, t) {
                    return e.getAttribute(t)
                }
            }(),
            ee = !!x[E],
            te = x.querySelector && x[S],
            ne = function(e, t) {
                var r, o, s = [];
                try {
                    return 9 !== t[O] && q.test(e) ? (n(r = e.split(","), b(t, function(e, t) {
                        o = e[S](t), 1 == o.length ? s[s.length] = o.item(0) : o.length && (s = s.concat(i(o)))
                    })), r.length > 1 && s.length > 1 ? h(s) : s) : i(t[S](e))
                } catch (a) {}
                return re(e, t)
            },
            re = function(e, r) {
                var i, o, s, a, u, c, f = [];
                if (e = e.replace(I, "$1"), o = e.match(L)) {
                    for (u = t(o[2]), i = r[k](o[1] || "*"), s = 0, a = i.length; a > s; s++) u.test(i[s].className) && (f[f.length] = i[s]);
                    return f
                }
                return n(c = e.split(","), b(r, function(e, t, n) {
                    for (u = l(t, e), s = 0, a = u.length; a > s; s++)(9 === e[O] || n || Y(u[s], r)) && (f[f.length] = u[s])
                })), c.length > 1 && f.length > 1 ? h(f) : f
            },
            ie = function(e) {
                "undefined" != typeof e[C] && (w = e[C] && te ? ne : re)
            };
        return ie({
            useNativeQSA: !0
        }), y.configure = ie, y.uniq = h, y.is = f, y.pseudos = {}, y
    }),
    function(e) {
        "use strict";

        function t() {
            this.frames = [], this.lastId = 0, this.raf = n, this.batch = {
                hash: {},
                read: [],
                write: [],
                mode: null
            }
        }
        var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            return window.setTimeout(e, 1e3 / 60)
        };
        t.prototype.read = function(e, t) {
            var n = this.add("read", e, t),
                r = n.id;
            this.batch.read.push(n.id);
            var i = "reading" === this.batch.mode || this.batch.scheduled;
            return i ? r : (this.scheduleBatch(), r)
        }, t.prototype.write = function(e, t) {
            var n = this.add("write", e, t),
                r = this.batch.mode,
                i = n.id;
            this.batch.write.push(n.id);
            var o = "writing" === r || "reading" === r || this.batch.scheduled;
            return o ? i : (this.scheduleBatch(), i)
        }, t.prototype.defer = function(e, t, n) {
            "function" == typeof e && (n = t, t = e, e = 1);
            var r = this,
                i = e - 1;
            return this.schedule(i, function() {
                r.run({
                    fn: t,
                    ctx: n
                })
            })
        }, t.prototype.clear = function(e) {
            if ("function" == typeof e) return this.clearFrame(e);
            var t = this.batch.hash[e];
            if (t) {
                var n = this.batch[t.type],
                    r = n.indexOf(e);
                delete this.batch.hash[e], ~r && n.splice(r, 1)
            }
        }, t.prototype.clearFrame = function(e) {
            var t = this.frames.indexOf(e);
            ~t && this.frames.splice(t, 1)
        }, t.prototype.scheduleBatch = function() {
            var e = this;
            this.schedule(0, function() {
                e.batch.scheduled = !1, e.runBatch()
            }), this.batch.scheduled = !0
        }, t.prototype.uniqueId = function() {
            return ++this.lastId
        }, t.prototype.flush = function(e) {
            for (var t; t = e.shift();) this.run(this.batch.hash[t])
        }, t.prototype.runBatch = function() {
            try {
                this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null
            } catch (e) {
                throw this.runBatch(), e
            }
        }, t.prototype.add = function(e, t, n) {
            var r = this.uniqueId();
            return this.batch.hash[r] = {
                id: r,
                fn: t,
                ctx: n,
                type: e
            }
        }, t.prototype.run = function(e) {
            var t = e.ctx || this,
                n = e.fn;
            if (delete this.batch.hash[e.id], !this.onError) return n.call(t);
            try {
                n.call(t)
            } catch (r) {
                this.onError(r)
            }
        }, t.prototype.loop = function() {
            var e = this,
                t = this.raf;
            this.looping || (t(function n() {
                var r = e.frames.shift();
                e.frames.length ? t(n) : e.looping = !1, r && r()
            }), this.looping = !0)
        }, t.prototype.schedule = function(e, t) {
            return this.frames[e] ? this.schedule(e + 1, t) : (this.loop(), this.frames[e] = t)
        }, e = e || new t, "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define("fastdom", [], function() {
            return e
        }) : window.fastdom = e
    }(window.fastdom), define("common/utils/storage", [], function() {
        var e, t = window,
            n = function(e) {
                this.type = e
            };
        return n.prototype.setWindow = function(e) {
            t = e
        }, n.prototype.isStorageAvailable = function(t) {
            return (void 0 === e || t) && (e = this.isAvailable()), e
        }, n.prototype.isAvailable = function(e) {
            var n = "local-storage-module-test",
                r = e || "test";
            try {
                return t[this.type].setItem(n, r), t[this.type].removeItem(n), !0
            } catch (i) {
                return !1
            }
        }, n.prototype.set = function(e, n, r) {
            if (this.isStorageAvailable()) {
                if (!t[this.type]) return;
                var i = r || {},
                    o = JSON.stringify({
                        value: n,
                        expires: i.expires
                    });
                return this.isAvailable(o) ? t[this.type].setItem(e, o) : !1
            }
        }, n.prototype.get = function(e) {
            if (this.isStorageAvailable()) {
                var n, r;
                if (!t[this.type]) return;
                if (n = t[this.type].getItem(e), null === n) return null;
                try {
                    r = JSON.parse(n)
                } catch (i) {
                    return this.remove(e), null
                }
                return r.expires && new Date > new Date(r.expires) ? (this.remove(e), null) : r.value
            }
        }, n.prototype.getRaw = function(e) {
            return this.isStorageAvailable() ? t[this.type].getItem(e) : void 0
        }, n.prototype.remove = function(e) {
            return this.isStorageAvailable() ? t[this.type].removeItem(e) : void 0
        }, n.prototype.removeAll = function() {
            return this.isStorageAvailable() ? t[this.type].clear() : void 0
        }, n.prototype.length = function() {
            return this.isStorageAvailable() ? t[this.type].length : void 0
        }, n.prototype.getKey = function(e) {
            return this.isStorageAvailable() ? t[this.type].key(e) : void 0
        }, n.prototype.clearByPrefix = function(e) {
            if (this.isStorageAvailable()) {
                var t, n;
                for (t = this.length() - 1; t > -1; --t) n = this.getKey(t), 0 === n.indexOf(e) && this.remove(n)
            }
        }, {
            local: new n("localStorage"),
            session: new n("sessionStorage")
        }
    }), define("common/modules/user-prefs", ["common/utils/storage"], function(e) {
        function t(t, n, r) {
            r = r || {}, e[r.type || p.type].set(d + t, n)
        }

        function n(t, n) {
            return n = n || {}, e[n.type || p.type].get(d + t)
        }

        function r(t, n) {
            n = n || {}, e[n.type || p.type].remove(d + t)
        }

        function i(t, n) {
            n = n || {}, e[n.type || p.type].set(d + "switch." + t, !0)
        }

        function o(t, n) {
            n = n || {}, e[n.type || p.type].set(d + "switch." + t, !1)
        }

        function s(t, n) {
            n = n || {}, e[n.type || p.type].remove(d + "switch." + t)
        }

        function a(t, n) {
            return n = n || {}, e[n.type || p.type].get(d + "switch." + t) === !0
        }

        function u(t, n) {
            return n = n || {}, e[n.type || p.type].get(d + "switch." + t) === !1
        }

        function c(e) {
            return !isNaN(e)
        }

        function l(e) {
            return "true" === e || "false" === e
        }

        function f(e) {
            var n, r, s, a, u, f, d = e.hash.substr(1).split("&");
            for (u = 0, f = d.length; f > u; ++u)
                if (n = d[u].match(/^gu\.prefs\.(.*)=(.*)$/)) switch (r = n[1], s = n[2], r) {
                    case "switchOn":
                        i(s);
                        break;
                    case "switchOff":
                        o(s);
                        break;
                    default:
                        a = c(s) ? +s : l(s) ? "true" === String(s).toLowerCase() : s, t(r, a)
                }
        }
        var d = "gu.prefs.",
            p = {
                type: "local"
            };
        return f(window.location), {
            set: t,
            get: n,
            remove: r,
            switchOn: i,
            switchOff: o,
            removeSwitch: s,
            isOn: a,
            isOff: u,
            setPrefs: f
        }
    }), define("common/utils/report-error", ["raven"], function(e) {
        return function(t, n, r) {
            if (void 0 === r && (r = !0), e.captureException(t, {
                    tags: n
                }), r) throw t.reported = !0, t
        }
    }), define("common/utils/pad", [], function() {
        return function(e, t) {
            for (var n = "" + e; n.length < t;) n = "0" + n;
            return n
        }
    }),
    function() {
        "use strict";

        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var r = e.prototype,
            i = this,
            o = i.EventEmitter;
        r.getListeners = function(e) {
            var t, n, r = this._getEvents();
            if (e instanceof RegExp) {
                t = {};
                for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
            } else t = r[e] || (r[e] = []);
            return t
        }, r.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n
        }, r.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, r.addListener = function(e, n) {
            var r, i = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (r in i) i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, r.on = n("addListener"), r.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, r.once = n("addOnceListener"), r.defineEvent = function(e) {
            return this.getListeners(e), this
        }, r.defineEvents = function(e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this
        }, r.removeListener = function(e, n) {
            var r, i, o = this.getListenersAsObject(e);
            for (i in o) o.hasOwnProperty(i) && (r = t(o[i], n), -1 !== r && o[i].splice(r, 1));
            return this
        }, r.off = n("removeListener"), r.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, r.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, r.manipulateListeners = function(e, t, n) {
            var r, i, o = e ? this.removeListener : this.addListener,
                s = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (r = n.length; r--;) o.call(this, t, n[r]);
            else
                for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : s.call(this, r, i));
            return this
        }, r.removeEvent = function(e) {
            var t, n = typeof e,
                r = this._getEvents();
            if ("string" === n) delete r[e];
            else if (e instanceof RegExp)
                for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
            else delete this._events;
            return this
        }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function(e, t) {
            var n, r, i, o, s = this.getListenersAsObject(e);
            for (i in s)
                if (s.hasOwnProperty(i))
                    for (r = s[i].length; r--;) n = s[i][r], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }, r.trigger = n("emitEvent"), r.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, r.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, r._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, r._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return i.EventEmitter = o, e
        }, "function" == typeof define && define.amd ? define("EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : i.EventEmitter = e
    }.call(this), define("common/utils/mediator", ["EventEmitter"], function(e) {
        return new e
    }), define("common/utils/take-while", [], function() {
        function e(e, t) {
            var n, r = -1,
                i = t.length;
            do r += 1, n = i > r && e(t[r], r, t); while (n);
            return t.slice(0, r)
        }
        return e
    }), define("common/utils/drop-while", [], function() {
        function e(e, t) {
            var n, r = -1,
                i = t.length;
            do r += 1, n = i > r && e(t[r], r, t); while (n);
            return t.slice(r)
        }
        return e
    }), define("lodash/objects/isFunction", [], function() {
        function e(e) {
            return "function" == typeof e
        }
        var t = "[object Function]",
            n = Object.prototype,
            r = n.toString;
        return e(/x/) && (e = function(e) {
            return "function" == typeof e && r.call(e) == t
        }), e
    }), define("lodash/internals/keyPrefix", [], function() {
        var e = +new Date + "";
        return e
    }), define("lodash/functions/memoize", ["../objects/isFunction", "../internals/keyPrefix"], function(e, t) {
        function n(n, r) {
            if (!e(n)) throw new TypeError;
            var o = function() {
                var e = o.cache,
                    s = r ? r.apply(this, arguments) : t + arguments[0];
                return i.call(e, s) ? e[s] : e[s] = n.apply(this, arguments)
            };
            return o.cache = {}, o
        }
        var r = Object.prototype,
            i = r.hasOwnProperty;
        return n
    }), define("lodash/functions/compose", ["../objects/isFunction"], function(e) {
        function t() {
            for (var t = arguments, n = t.length; n--;)
                if (!e(t[n])) throw new TypeError;
            return function() {
                for (var e = arguments, n = t.length; n--;) e = [t[n].apply(this, e)];
                return e[0]
            }
        }
        return t
    }), define("common/utils/detect", ["common/utils/mediator", "common/utils/take-while", "common/utils/drop-while", "lodash/functions/memoize", "lodash/functions/compose", "Promise"], function(e, t, n, r, i, o) {
        function s(e) {
            var t = k(e);
            return function(n) {
                var r = k(e);
                r !== t && (n(r, t), t = r)
            }
        }

        function a() {
            var e = window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance;
            return e && e.navigation ? e.navigation.type === e.navigation.TYPE_RELOAD : !1
        }

        function u() {
            return /(iPad|iPhone|iPod touch)/i.test(navigator.userAgent)
        }

        function c() {
            return /Android/i.test(navigator.userAgent)
        }

        function l() {
            return navigator.mozApps && !window.locationbar.visible
        }

        function f() {
            return navigator.userAgent.indexOf("FBAN/") > -1
        }

        function d() {
            return navigator.userAgent.indexOf("Twitter for iPhone") > -1
        }

        function p() {
            return /\.t\.co/.test(document.referrer)
        }

        function h() {
            return /\.facebook\.com/.test(document.referrer)
        }

        function m() {
            return /\.theguardian\.com/.test(document.referrer)
        }

        function g() {
            var e = /socialContext=(facebook|twitter)/.exec(window.location.hash);
            return null !== e ? e[1] : f() || h() ? "facebook" : d() || p() ? "twitter" : null
        }

        function v() {
            return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
        }

        function y() {
            return void 0 !== P ? P : (window.history && history.pushState && (P = !0, window.navigator.userAgent.match(/Android/i) && (P = !!window.navigator.userAgent.match(/(Chrome|Firefox)/i))), P)
        }

        function b() {
            var e = document.createElement("video"),
                t = {};
            try {
                e.canPlayType && (t.mp4 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (n) {}
            return t
        }

        function w() {
            return window.innerHeight > window.innerWidth ? "portrait" : "landscape"
        }

        function x() {
            var e = window,
                t = document,
                n = t.documentElement,
                r = t.getElementsByTagName("body")[0];
            return {
                width: e.innerWidth || n.clientWidth || r.clientWidth,
                height: e.innerHeight || n.clientHeight || r.clientHeight
            }
        }

        function j(e) {
            return e.name
        }

        function E(e) {
            return e.reverse()
        }

        function k(e) {
            function r(e) {
                return e.width <= a
            }

            function o(e) {
                return e.isTweakpoint
            }
            var s, a = R.getViewport().width;
            if (e) s = t(r, q).slice(-1)[0].name;
            else {
                var u = i(n.bind(void 0, o), E, t.bind(void 0, r));
                s = u(q)[0].name
            }
            return s
        }

        function S(e) {
            e.min = e.min || q[0].name, e.max = e.max || q[q.length - 1].name;
            var t = k(!0),
                r = i(n.bind(void 0, function(t) {
                    return t !== e.max
                }), E, n.bind(void 0, function(t) {
                    return t !== e.min
                }));
            return -1 !== r(q.map(j)).indexOf(t)
        }

        function C() {
            function t(t) {
                var r = "visible",
                    i = "hidden",
                    o = {
                        focus: r,
                        focusin: r,
                        pageshow: r,
                        blur: i,
                        focusout: i,
                        pagehide: i
                    };
                t = t || window.event, L = t.type in o ? o[t.type] : this[n] ? "hidden" : "visible", e.emit("modules:detect:pagevisibility:" + L)
            }
            var n = "hidden";
            n in document ? document.addEventListener("visibilitychange", t) : (n = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", t) : (n = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", t) : (n = "msHidden") in document ? document.addEventListener("msvisibilitychange", t) : "onfocusin" in document ? document.onfocusin = document.onfocusout = t : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = t
        }

        function _() {
            return "visible" === L
        }

        function O() {
            return "WebSocket" in window
        }

        function A() {
            return window.guardian.isEnhanced
        }

        function T() {
            return document.referrer || ""
        }
        var P, N, R, L = document.visibilityState || document.webkitVisibilityState || document.mozVisibilityState || document.msVisibilityState || "visible",
            q = [{
                name: "mobile",
                isTweakpoint: !1,
                width: 0
            }, {
                name: "mobileLandscape",
                isTweakpoint: !0,
                width: 480
            }, {
                name: "phablet",
                isTweakpoint: !0,
                width: 660
            }, {
                name: "tablet",
                isTweakpoint: !1,
                width: 740
            }, {
                name: "desktop",
                isTweakpoint: !1,
                width: 980
            }, {
                name: "leftCol",
                isTweakpoint: !0,
                width: 1140
            }, {
                name: "wide",
                isTweakpoint: !1,
                width: 1300
            }];
        N = function() {
            var e, t = navigator.userAgent,
                n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(n[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE " + (e[1] || "")) : "Chrome" === n[1] && (e = t.match(/\bOPR\/(\d+)/), null !== e) ? "Opera " + e[1] : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), {
                browser: n[0],
                version: n[1]
            })
        }();
        var I = r(function() {
                var e = '<div class="ad_unit" style="position: absolute; height: 10px; top: 0; left: 0; z-index: -1;">&nbsp;</div>';
                return document.body.insertAdjacentHTML("beforeend", e), document.body.lastChild
            }),
            U = r(function() {
                return "none" === window.getComputedStyle(I()).display
            }),
            H = new o(function(e) {
                window.guardian.adBlockers.hasOwnProperty("active") ? e(window.guardian.adBlockers.active) : window.guardian.adBlockers.onDetect.push(e)
            });
        return R = {
            hasCrossedBreakpoint: s,
            getVideoFormatSupport: b,
            hasTouchScreen: v,
            hasPushStateSupport: y,
            getOrientation: w,
            getBreakpoint: k,
            getViewport: x,
            getUserAgent: N,
            isIOS: u,
            isAndroid: c,
            isFireFoxOSApp: l,
            isFacebookApp: f,
            isTwitterApp: d,
            isFacebookReferral: h,
            isTwitterReferral: p,
            isGuardianReferral: m,
            socialContext: g,
            isBreakpoint: S,
            isReload: a,
            initPageVisibility: C,
            pageVisible: _,
            hasWebSocket: O,
            breakpoints: q,
            isEnhanced: A,
            adblockInUseSync: U,
            adblockInUse: H,
            getReferrer: T
        }
    }), define("common/utils/url", ["common/utils/detect"], function(e) {
        var t = e.hasPushStateSupport(),
            n = {
                getUrlVars: function(e) {
                    var t = e || {};
                    return (t.query || n.getCurrentQueryString()).split("&").filter(Boolean).map(function(e) {
                        return e.indexOf("=") > -1 ? e.split("=") : [e, !0]
                    }).reduce(function(e, t) {
                        return e[t[0]] = t[1], e
                    }, {})
                },
                getCurrentQueryString: function() {
                    return window.location.search.replace(/^\?/, "")
                },
                pushQueryString: function(e) {
                    e.querystring && t && n.getCurrentQueryString() !== e.querystring && history.pushState(e.state || {}, e.title || window.title, e.querystring + window.location.hash)
                },
                constructQuery: function(e) {
                    return Object.keys(e).map(function(t) {
                        var n = e[t];
                        return t + "=" + (Array.isArray(n) ? n.join(",") : n)
                    }).join("&")
                },
                getPath: function(e) {
                    var t = document.createElement("a");
                    return t.href = e, t.pathname
                },
                pushUrl: function(e, n, r, i) {
                    t && window.history[i ? "replaceState" : "pushState"](e, n, r)
                },
                back: function() {
                    t && window.history.back()
                }
            };
        return {
            getUrlVars: n.getUrlVars,
            getPath: n.getPath,
            pushUrl: n.pushUrl,
            constructQuery: n.constructQuery,
            back: n.back,
            hasHistorySupport: t,
            pushQueryString: n.pushQueryString
        }
    }), define("common/utils/assign", [], function() {
        function e() {
            return Object.assign.apply(void 0, arguments)
        }

        function t(e) {
            for (var t = 1, n = arguments.length; n > t; t++) {
                var r = arguments[t];
                Object.keys(r).forEach(function(t) {
                    e[t] = r[t]
                })
            }
            return e
        }
        var n = "assign" in Object ? e : t;
        return n
    }), define("common/utils/config", ["common/utils/pad", "common/utils/url", "common/utils/assign"], function(e, t, n) {
        var r = guardian.config,
            i = t.getUrlVars()["ad-unit"];
        return i && (r.page.adUnit = ["/", r.page.dfpAccountId, "/", i].join("")), n({
            hasTone: function(e) {
                return (this.page.tones || "").indexOf(e) > -1
            },
            hasSeries: function(e) {
                return (this.page.series || "").indexOf(e) > -1
            },
            referencesOfType: function(e) {
                return (this.page.references || []).filter(function(t) {
                    return "undefined" != typeof t[e]
                }).map(function(t) {
                    return t[e]
                })
            },
            referenceOfType: function(e) {
                return this.referencesOfType(e)[0]
            },
            webPublicationDateAsUrlPart: function() {
                if (this.page.webPublicationDate) {
                    var t = new Date(this.page.webPublicationDate);
                    return t.getFullYear() + "/" + e(t.getMonth() + 1, 2) + "/" + e(t.getDate(), 2)
                }
            },
            dateFromSlug: function() {
                var e = this.page.pageId.match(/\d{4}\/\w{3}\/\d{2}/);
                return e ? e[0] : null
            },
            isMedia: ["Video", "Audio"].indexOf(r.page.contentType) > -1
        }, r)
    }), define("common/utils/cookies", [], function() {
        function e() {
            return l().domain.replace(/^(www|m\.code|dev|m)\./, ".")
        }

        function t(e) {
            e.forEach(function(e) {
                n(e)
            })
        }

        function n(t, n) {
            l().cookie = t + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;", n || (l().cookie = t + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + e() + ";")
        }

        function r(e, t, n) {
            var r = new Date;
            n ? r.setDate(r.getDate() + n) : (r.setMonth(r.getMonth() + 5), r.setDate(1)), l().cookie = e + "=" + t + "; path=/; expires=" + r.toUTCString() + ";" + i()
        }

        function i() {
            var t = e();
            return "localhost" === t ? "" : " domain=" + t + ";"
        }

        function o(e, t, n) {
            if (n) {
                var o = new Date;
                o.setMinutes(o.getMinutes() + n), l().cookie = e + "=" + t + "; path=/; expires=" + o.toUTCString() + ";" + i()
            } else r(e, t)
        }

        function s(e, t) {
            l().cookie = e + "=" + t + "; path=/;" + i()
        }

        function a(e) {
            var t = [],
                n = e + "=",
                r = l().cookie.split(";");
            return r.forEach(function(e) {
                for (;
                    " " === e.charAt(0);) e = e.substring(1, e.length);
                0 === e.indexOf(n) && t.push(e.substring(n.length, e.length))
            }), t
        }

        function u(e) {
            var t = a(e);
            return t.length > 0 ? t[0] : null
        }

        function c(e) {
            f = e
        }

        function l() {
            return f || document
        }
        var f;
        return {
            cleanUp: t,
            add: r,
            addSessionCookie: s,
            addForMinutes: o,
            remove: n,
            get: u,
            test: {
                setDocument: c
            }
        }
    }), define("common/modules/analytics/mvt-cookie", ["common/utils/cookies"], function(e) {
        function t(t) {
            e.add(o, t, 365)
        }

        function n() {
            var t = e.get(a),
                n = r(),
                i = e.get(s);
            return i || (i = "unknown-visitor-id"), t || (t = "unknown-browser-id"), n || (n = "unknown-mvt-id"), i + " " + t + " " + n
        }

        function r() {
            return e.get(o)
        }

        function i() {
            return u
        }
        var o = "GU_mvt_id",
            s = "s_vi",
            a = "bwid",
            u = 1e6;
        return {
            getMvtFullId: n,
            getMvtValue: r,
            getMvtNumValues: i,
            overwriteMvtCookie: t,
            MAX_CLIENT_MVT_ID: u
        }
    }), define("lodash/utilities/noop", [], function() {
        function e() {}
        return e
    }), define("common/modules/experiments/tests/live-blog-chrome-notifications-internal", ["common/utils/config", "common/utils/detect"], function(e, t) {
        return function() {
            this.id = "LiveBlogChromeNotificationsInternal", this.start = "2016-03-03", this.expiry = "2016-08-31", this.author = "Nathaniel Bennett", this.description = "Allows users to to subscribe to live blogs on chrome - internal users only", this.audience = 0, this.audienceOffset = 0, this.successMeasure = "", this.showForSensitive = !0, this.audienceCriteria = "Internal use only ap", this.dataLinkNames = "", this.idealOutcome = "", this.canRun = function() {
                return "Chrome" === t.getUserAgent.browser && "LiveBlog" === e.page.contentType
            }, this.variants = [{
                id: "control",
                test: function() {}
            }]
        }
    }), define("common/modules/experiments/tests/live-blog-chrome-notifications-prod", ["common/utils/config", "common/utils/detect"], function(e, t) {
        return function() {
            this.id = "LiveBlogChromeNotificationsProd", this.start = "2016-06-08", this.expiry = "2016-08-31", this.author = "Nathaniel Bennett", this.description = "Allows users to to subscribe to live blogs on chrome - separately to internal test so we can run the internal one on prod if need be", this.audience = .1, this.audienceOffset = 0, this.successMeasure = "", this.showForSensitive = !0, this.audienceCriteria = "Chrome users on desktop and androd", this.dataLinkNames = "", this.idealOutcome = "", this.canRun = function() {
                return "Chrome" === t.getUserAgent.browser && "LiveBlog" === e.page.contentType && !t.isIOS()
            }, this.variants = [{
                id: "control",
                test: function() {}
            }, {
                id: "show-notifications",
                test: function() {}
            }]
        }
    }), define("common/modules/experiments/tests/clever-friend-brexit", [], function() {
        return function() {
            this.id = "CleverFriendBrexit", this.start = "2016-05-09", this.expiry = "2016-07-31", this.author = "Anne Byrne", this.description = "Only expose the clever friend embed to 10% of people, by removing it for 90%", this.audience = .9, this.audienceOffset = 0, this.successMeasure = "Not really an a/b test, just using the audience segmentation for a soft launch", this.audienceCriteria = "All users", this.dataLinkNames = "", this.idealOutcome = "", this.canRun = function() {
                return !0
            }, this.variants = [{
                id: "remove-embed",
                test: function() {
                    for (var e = document.querySelectorAll('figure[data-canonical-url^="https://interactive.guim.co.uk/2016/05/brexit-companion/"]'), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
                }
            }]
        }
    }), define("common/modules/experiments/tests/utils/comment-blocker", [], function() {
        var e = {};
        return e.hideComments = function(e) {
            var t = e ? e.split("").reduce(function(e, t) {
                return e + t.charCodeAt(0)
            }, 0) : 2;
            return t % 2 == 0
        }, e
    }), ! function(e, t, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("reqwest", n) : t[e] = n()
    }("reqwest", this, function() {
        function succeed(e) {
            var t = protocolRe.exec(e.url);
            return t = t && t[1] || context.location.protocol, httpsRe.test(t) ? twoHundo.test(e.request.status) : !!e.request.response
        }

        function handleReadyState(e, t, n) {
            return function() {
                return e._aborted ? n(e.request) : e._timedOut ? n(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : n(e.request)))
            }
        }

        function setHeaders(e, t) {
            var n, r = t.headers || {};
            r.Accept = r.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
            var i = "undefined" != typeof FormData && t.data instanceof FormData;
            t.crossOrigin || r[requestedWith] || (r[requestedWith] = defaultHeaders.requestedWith), r[contentType] || i || (r[contentType] = t.contentType || defaultHeaders.contentType);
            for (n in r) r.hasOwnProperty(n) && "setRequestHeader" in e && e.setRequestHeader(n, r[n])
        }

        function setCredentials(e, t) {
            "undefined" != typeof t.withCredentials && "undefined" != typeof e.withCredentials && (e.withCredentials = !!t.withCredentials)
        }

        function generalCallback(e) {
            lastValue = e
        }

        function urlappend(e, t) {
            return e + (/\?/.test(e) ? "&" : "?") + t
        }

        function handleJsonp(e, t, n, r) {
            var i = uniqid++,
                o = e.jsonpCallback || "callback",
                s = e.jsonpCallbackName || reqwest.getcallbackPrefix(i),
                a = new RegExp("((^|\\?|&)" + o + ")=([^&]+)"),
                u = r.match(a),
                c = doc.createElement("script"),
                l = 0,
                f = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
            return u ? "?" === u[3] ? r = r.replace(a, "$1=" + s) : s = u[3] : r = urlappend(r, o + "=" + s), context[s] = generalCallback, c.type = "text/javascript", c.src = r, c.async = !0, "undefined" == typeof c.onreadystatechange || f || (c.htmlFor = c.id = "_reqwest_" + i), c.onload = c.onreadystatechange = function() {
                return c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || l ? !1 : (c.onload = c.onreadystatechange = null, c.onclick && c.onclick(), t(lastValue), lastValue = void 0, head.removeChild(c), void(l = 1))
            }, head.appendChild(c), {
                abort: function() {
                    c.onload = c.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(c), l = 1
                }
            }
        }

        function getRequest(e, t) {
            var n, r = this.o,
                i = (r.method || "GET").toUpperCase(),
                o = "string" == typeof r ? r : r.url,
                s = r.processData !== !1 && r.data && "string" != typeof r.data ? reqwest.toQueryString(r.data) : r.data || null,
                a = !1;
            return "jsonp" != r.type && "GET" != i || !s || (o = urlappend(o, s), s = null), "jsonp" == r.type ? handleJsonp(r, e, t, o) : (n = r.xhr && r.xhr(r) || xhr(r), n.open(i, o, r.async === !1 ? !1 : !0), setHeaders(n, r), setCredentials(n, r), context[xDomainRequest] && n instanceof context[xDomainRequest] ? (n.onload = e, n.onerror = t, n.onprogress = function() {}, a = !0) : n.onreadystatechange = handleReadyState(this, e, t), r.before && r.before(n), a ? setTimeout(function() {
                n.send(s)
            }, 200) : n.send(s), n)
        }

        function Reqwest(e, t) {
            this.o = e, this.fn = t, init.apply(this, arguments)
        }

        function setType(e) {
            return null !== e ? e.match("json") ? "json" : e.match("javascript") ? "js" : e.match("text") ? "html" : e.match("xml") ? "xml" : void 0 : void 0
        }

        function init(o, fn) {
            function complete(e) {
                for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
            }

            function success(resp) {
                var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                resp = "jsonp" !== type ? self.request : resp;
                var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                    r = filteredResponse;
                try {
                    resp.responseText = r
                } catch (e) {}
                if (r) switch (type) {
                    case "json":
                        try {
                            resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                        } catch (err) {
                            return error(resp, "Could not parse JSON in response", err)
                        }
                        break;
                    case "js":
                        resp = eval(r);
                        break;
                    case "html":
                        resp = r;
                        break;
                    case "xml":
                        resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                }
                for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                complete(resp)
            }

            function timedOut() {
                self._timedOut = !0, self.request.abort()
            }

            function error(e, t, n) {
                for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = n, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, n);
                complete(e)
            }
            this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
            var self = this;
            fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
                timedOut()
            }, o.timeout)), o.success && (this._successHandler = function() {
                o.success.apply(o, arguments)
            }), o.error && this._errorHandlers.push(function() {
                o.error.apply(o, arguments)
            }), o.complete && this._completeHandlers.push(function() {
                o.complete.apply(o, arguments)
            }), this.request = getRequest.call(this, success, error)
        }

        function reqwest(e, t) {
            return new Reqwest(e, t)
        }

        function normalize(e) {
            return e ? e.replace(/\r?\n/g, "\r\n") : ""
        }

        function serial(e, t) {
            var n, r, i, o, s = e.name,
                a = e.tagName.toLowerCase(),
                u = function(e) {
                    e && !e.disabled && t(s, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
                };
            if (!e.disabled && s) switch (a) {
                case "input":
                    /reset|button|image|file/i.test(e.type) || (n = /checkbox/i.test(e.type), r = /radio/i.test(e.type), i = e.value, (!(n || r) || e.checked) && t(s, normalize(n && "" === i ? "on" : i)));
                    break;
                case "textarea":
                    t(s, normalize(e.value));
                    break;
                case "select":
                    if ("select-one" === e.type.toLowerCase()) u(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                    else
                        for (o = 0; e.length && o < e.length; o++) e.options[o].selected && u(e.options[o])
            }
        }

        function eachFormElement() {
            var e, t, n = this,
                r = function(e, t) {
                    var r, i, o;
                    for (r = 0; r < t.length; r++)
                        for (o = e[byTag](t[r]), i = 0; i < o.length; i++) serial(o[i], n)
                };
            for (t = 0; t < arguments.length; t++) e = arguments[t], /input|select|textarea/i.test(e.tagName) && serial(e, n), r(e, ["input", "select", "textarea"])
        }

        function serializeQueryString() {
            return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
        }

        function serializeHash() {
            var e = {};
            return eachFormElement.apply(function(t, n) {
                t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(n)) : e[t] = n
            }, arguments), e
        }

        function buildParams(e, t, n, r) {
            var i, o, s, a = /\[\]$/;
            if (isArray(t))
                for (o = 0; t && o < t.length; o++) s = t[o], n || a.test(e) ? r(e, s) : buildParams(e + "[" + ("object" == typeof s ? o : "") + "]", s, n, r);
            else if (t && "[object Object]" === t.toString())
                for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
            else r(e, t)
        }
        var context = this;
        if ("window" in context) var doc = document,
            byTag = "getElementsByTagName",
            head = doc[byTag]("head")[0];
        else {
            var XHR2;
            try {
                XHR2 = require("xhr2")
            } catch (ex) {
                throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
            }
        }
        var httpsRe = /^http/,
            protocolRe = /(^\w+):\/\//,
            twoHundo = /^(20\d|1223)$/,
            readyState = "readyState",
            contentType = "Content-Type",
            requestedWith = "X-Requested-With",
            uniqid = 0,
            callbackPrefix = "reqwest_" + +new Date,
            lastValue, xmlHttpRequest = "XMLHttpRequest",
            xDomainRequest = "XDomainRequest",
            noop = function() {},
            isArray = "function" == typeof Array.isArray ? Array.isArray : function(e) {
                return e instanceof Array
            },
            defaultHeaders = {
                contentType: "application/x-www-form-urlencoded",
                requestedWith: xmlHttpRequest,
                accept: {
                    "*": "text/javascript, text/html, application/xml, text/xml, */*",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    js: "application/javascript, text/javascript"
                }
            },
            xhr = function(e) {
                if (e.crossOrigin === !0) {
                    var t = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                    if (t && "withCredentials" in t) return t;
                    if (context[xDomainRequest]) return new XDomainRequest;
                    throw new Error("Browser does not support cross-origin requests")
                }
                return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
            },
            globalSetupOptions = {
                dataFilter: function(e) {
                    return e
                }
            };
        return Reqwest.prototype = {
            abort: function() {
                this._aborted = !0, this.request.abort()
            },
            retry: function() {
                init.call(this, this.o, this.fn)
            },
            then: function(e, t) {
                return e = e || function() {}, t = t || function() {}, this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)), this
            },
            always: function(e) {
                return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e), this
            },
            fail: function(e) {
                return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e), this
            },
            "catch": function(e) {
                return this.fail(e)
            }
        }, reqwest.serializeArray = function() {
            var e = [];
            return eachFormElement.apply(function(t, n) {
                e.push({
                    name: t,
                    value: n
                })
            }, arguments), e
        }, reqwest.serialize = function() {
            if (0 === arguments.length) return "";
            var e, t, n = Array.prototype.slice.call(arguments, 0);
            return e = n.pop(), e && e.nodeType && n.push(e) && (e = null), e && (e = e.type), t = "map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString, t.apply(null, n)
        }, reqwest.toQueryString = function(e, t) {
            var n, r, i = t || !1,
                o = [],
                s = encodeURIComponent,
                a = function(e, t) {
                    t = "function" == typeof t ? t() : null == t ? "" : t, o[o.length] = s(e) + "=" + s(t)
                };
            if (isArray(e))
                for (r = 0; e && r < e.length; r++) a(e[r].name, e[r].value);
            else
                for (n in e) e.hasOwnProperty(n) && buildParams(n, e[n], i, a);
            return o.join("&").replace(/%20/g, "+")
        }, reqwest.getcallbackPrefix = function() {
            return callbackPrefix
        }, reqwest.compat = function(e, t) {
            return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)), new Reqwest(e, t)
        }, reqwest.ajaxSetup = function(e) {
            e = e || {};
            for (var t in e) globalSetupOptions[t] = e[t]
        }, reqwest
    }), define("common/utils/get-property", [], function() {
        return function(e, t, n) {
            var r = t.split(".").reduce(function(e, t) {
                return e && e.hasOwnProperty(t) ? e[t] : void 0
            }, e);
            return void 0 !== r ? r : void 0 !== n ? n : !1
        }
    }), define("common/utils/ajax", ["raven", "reqwest", "common/utils/config", "common/utils/get-property"], function(e, t, n, r) {
        function i(r) {
            var i;
            return r.url.match("^(https?:)?//") || (r.url = o + r.url, r.crossOrigin = !0), n && "money" === n.page.section && n.switches.imgix && (r.data ? r.data.inImgixTest = !0 : r.data = {
                inImgixTest: !0
            }), i = t(r), e.wrap({
                deep: !0
            }, i.then), i
        }
        var o = r(n, "page.ajaxUrl", "");
        return i.setHost = function(e) {
            o = e
        }, i
    }), define("common/utils/atob", [], function() {
        return window.atob ? function(e) {
            return window.atob(e)
        } : function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                t = function() {
                    try {
                        document.createElement("$")
                    } catch (e) {
                        return e
                    }
                }();
            return function(n) {
                if (n = n.replace(/[=]+$/, ""), n.length % 4 === 1) throw t;
                for (var r, i, o = 0, s = 0, a = ""; i = n.charAt(s++); ~i && (r = o % 4 ? 64 * r + i : i, o++ % 4) ? a += String.fromCharCode(255 & r >> (-2 * o & 6)) : 0) i = e.indexOf(i);
                return a
            }
        }()
    }), define("common/modules/asyncCallMerger", [], function() {
        function e(e) {
            function t() {
                s = arguments, o = "complete";
                for (var e = 0; e < i.length; e++) i[e].apply(null, s)
            }

            function n(n) {
                "init" === o ? (o = "waiting", i.push(n), e(t)) : "waiting" === o ? i.push(n) : n.apply(null, s)
            }

            function r() {
                i = [], o = "init", s = null
            }
            var i, o, s;
            return r(), n.reset = r, n
        }
        return {
            mergeCalls: e
        }
    }), define("common/modules/identity/api", ["common/utils/ajax", "common/utils/atob", "common/utils/config", "common/utils/cookies", "common/utils/mediator", "common/utils/storage", "common/modules/asyncCallMerger", "Promise"], function(e, t, n, r, i, o, s, a) {
        var u = {},
            c = null;
        return u.cookieName = "GU_U", u.signOutCookieName = "GU_SO", u.fbCheckKey = "gu.id.nextFbCheck", u.lastRefreshKey = "identity.lastRefresh", u.idApiRoot = null, u.idUrl = null, u.init = function() {
            u.idApiRoot = n.page.idApiUrl, u.idUrl = n.page.idUrl, i.emit("module:identity:api:loaded")
        }, u.reset = function() {
            u.getUserFromApi.reset(), c = null
        }, u.getUserFromCookie = function() {
            if (null === c) {
                var e = r.get(u.cookieName),
                    t = e ? JSON.parse(u.decodeBase64(e.split(".")[0])) : null;
                if (t) {
                    var n = decodeURIComponent(t[2]);
                    c = {
                        id: t[0],
                        primaryEmailAddress: t[1],
                        displayName: n,
                        accountCreatedDate: t[6],
                        emailVerified: t[7],
                        rawResponse: e
                    }
                }
            }
            return c
        }, u.getCookie = function() {
            return r.get(u.cookieName)
        }, u.isUserLoggedIn = function() {
            return null !== u.getUserFromCookie()
        }, u.getUrl = function() {
            return u.idUrl
        }, u.getUserFromApi = s.mergeCalls(function(t) {
            u.isUserLoggedIn() ? e({
                url: u.idApiRoot + "/user/me",
                type: "jsonp",
                crossOrigin: !0
            }).then(function(e) {
                t("ok" === e.status ? e.user : null)
            }) : t(null)
        }), u.getUserFromApiWithRefreshedCookie = function() {
            var t = "/user/me",
                n = e({
                    url: u.idApiRoot + t,
                    type: "jsonp",
                    data: {
                        refreshCookie: !0
                    }
                });
            return n
        }, u.getUserOrSignIn = function(e) {
            if (u.isUserLoggedIn()) return u.getUserFromCookie();
            e = encodeURIComponent(e || document.location.href);
            var t = u.getUrl() + "/signin?returnUrl=" + e;
            u.redirectTo(t)
        }, u.redirectTo = function(e) {
            window.location.href = e
        }, u.decodeBase64 = function(e) {
            return decodeURIComponent(escape(t(e.replace(/-/g, "+").replace(/_/g, "/").replace(/,/g, "="))))
        }, u.hasUserSignedOutInTheLast24Hours = function() {
            var e = r.get(u.signOutCookieName);
            return e ? Math.round((new Date).getTime() / 1e3) < parseInt(e, 10) + 86400 : !1
        }, u.shouldAutoSigninInUser = function() {
            var e = !!r.get(u.cookieName),
                t = !!o.local.get(u.fbCheckKey);
            return !e && !t && !this.hasUserSignedOutInTheLast24Hours()
        }, u.setNextFbCheckTime = function(e) {
            o.local.set(u.fbCheckKey, {}, {
                expires: e
            })
        }, u.emailSignup = function(t) {
            var n = "/useremails/" + u.getUserFromCookie().id + "/subscriptions",
                r = {
                    listId: t
                },
                i = e({
                    url: u.idApiRoot + n,
                    type: "jsonp",
                    crossOrigin: !0,
                    data: {
                        body: JSON.stringify(r),
                        method: "post"
                    }
                });
            return i
        }, u.getUserEmailSignUps = function() {
            if (u.getUserFromCookie()) {
                var t = "/useremails/" + u.getUserFromCookie().id,
                    n = e({
                        url: u.idApiRoot + t,
                        type: "jsonp",
                        crossOrigin: !0
                    });
                return n
            }
            return a.resolve(null)
        }, u.sendValidationEmail = function() {
            var t = "/user/send-validation-email",
                n = e({
                    url: u.idApiRoot + t,
                    type: "jsonp",
                    crossOrigin: !0,
                    data: {
                        method: "post"
                    }
                });
            return n
        }, u.getSavedArticles = function() {
            var t = "/syncedPrefs/me/savedArticles",
                n = e({
                    url: u.idApiRoot + t,
                    type: "jsonp",
                    crossOrigin: !0
                });
            return n
        }, u.saveToArticles = function(t) {
            var r = "/syncedPrefs/cors/me/savedArticles",
                i = e({
                    url: u.idApiRoot + r,
                    type: "json",
                    crossOrigin: !0,
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(t),
                    withCredentials: !0,
                    headers: {
                        "X-GU-ID-Client-Access-Token": "Bearer " + n.page.idApiJsClientToken
                    }
                });
            return i
        }, u
    }), define("common/modules/experiments/tests/participation-discussion-test", ["qwery", "common/utils/config", "common/modules/experiments/tests/utils/comment-blocker", "common/modules/identity/api"], function(e, t, n, r) {
        function i(e, t) {
            return -1 === e.indexOf(t)
        }
        var o = ["fashion/series/sali-hughes-beauty", "politics/series/politics-live-with-andrew-sparrow", "books/series/tips-links-and-suggestions-books", "music/series/readersrecommend", "technology/series/chatterbox", "sport/series/county-cricket-live-blog", "sport/series/talking-horses", "books/series/poemoftheweek", "football/series/you-are-the-ref", "lifeandstyle/series/how-to-eat", "commentisfree/series/you-tell-us", "football/series/footballweekly", "australia-news/series/politics-live-with-katharine-murphy", "crosswords/series/quick", "crosswords/series/quiptic", "crosswords/series/cryptic,", "crosswords/series/speedy"],
            s = ["lifeandstyle/the-running-blog", "crosswords/crossword-blog", "politics/blog", "environment/bike-blog", "technology/askjack", "commentisfree/series/guardian-comment-cartoon"],
            a = "First Dog on the Moon";
        return function() {
            this.id = "ParticipationDiscussionTest", this.start = "2016-05-26", this.expiry = "2016-07-25", this.author = "Nathaniel Bennett", this.description = "Hide comments for a percentage of users to determine what effect it has on their dwell time and loyalty ", this.audience = .1, this.audienceOffset = .5, this.successMeasure = "We want to guage how valuable comments actually are to us", this.audienceCriteria = "All users", this.dataLinkNames = "", this.idealOutcome = "DO we want to turn comments up or down", this.canRun = function() {
                var e = t.page.author || "",
                    n = i(s, t.page.blogIds || ""),
                    u = i(o, t.page.seriesId || ""),
                    c = !r.isUserLoggedIn();
                return e !== a && n && u && c
            }, this.variants = [{
                id: "variant-1",
                test: function() {
                    var r = (t.page.shortUrl || "").replace("http://gu.com/p/", ""),
                        i = n.hideComments(r);
                    t.page.isContent && i && (e(".js-comments").forEach(function(e) {
                        e.classList.add("discussion--hidden")
                    }), e(".js-commentcount").forEach(function(e) {
                        e.classList.add("commentcount2--hidden")
                    }))
                }
            }, {
                id: "control",
                test: function() {}
            }]
        }
    }),
    function(e, t, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("bonzo", n) : t[e] = n()
    }("bonzo", this, function() {
        function e(e, t) {
            var n = null,
                r = _.defaultView.getComputedStyle(e, "");
            return r && (n = r[t]), e.style[t] || n
        }

        function t(e) {
            return e && e.nodeName && (1 == e.nodeType || 11 == e.nodeType)
        }

        function n(e, n, r) {
            var i, o, s;
            if ("string" == typeof e) return j.create(e);
            if (t(e) && (e = [e]), r) {
                for (s = [], i = 0, o = e.length; o > i; i++) s[i] = y(n, e[i]);
                return s
            }
            return e
        }

        function r(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }

        function i(e, t, n, r) {
            for (var i, o = 0, s = e.length; s > o; o++) i = r ? e.length - o - 1 : o, t.call(n || e[i], e[i], i, e);
            return e
        }

        function o(e, n, r) {
            for (var i = 0, s = e.length; s > i; i++) t(e[i]) && (o(e[i].childNodes, n, r), n.call(r || e[i], e[i], i, e));
            return e
        }

        function s(e) {
            return e.replace(/-(.)/g, function(e, t) {
                return t.toUpperCase()
            })
        }

        function a(e) {
            return e ? e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e
        }

        function u(e) {
            e[z]("data-node-uid") || e[W]("data-node-uid", ++D);
            var t = e[z]("data-node-uid");
            return M[t] || (M[t] = {})
        }

        function c(e) {
            var t = e[z]("data-node-uid");
            t && delete M[t]
        }

        function l(e) {
            var t;
            try {
                return null === e || void 0 === e ? void 0 : "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : (t = parseFloat(e)) == e ? t : e
            } catch (n) {}
        }

        function f(e, t, n) {
            for (var r = 0, i = e.length; i > r; ++r)
                if (t.call(n || null, e[r], r, e)) return !0;
            return !1
        }

        function d(e) {
            return "transform" == e && (e = V.transform) || /^transform-?[Oo]rigin$/.test(e) && (e = V.transform + "Origin"), e ? s(e) : null
        }

        function p(e, t, r, o) {
            var s = 0,
                a = t || this,
                u = [],
                c = J && "string" == typeof e && "<" != e.charAt(0) ? J(e) : e;
            return i(n(c), function(e, t) {
                i(a, function(n) {
                    r(e, u[s++] = t > 0 ? y(a, n) : n)
                }, null, o)
            }, this, o), a.length = s, i(u, function(e) {
                a[--s] = e
            }, null, !o), a
        }

        function h(e, t, n) {
            var r = j(e),
                i = r.css("position"),
                o = r.offset(),
                s = "relative",
                a = i == s,
                u = [parseInt(r.css("left"), 10), parseInt(r.css("top"), 10)];
            "static" == i && (r.css("position", s), i = s), isNaN(u[0]) && (u[0] = a ? 0 : e.offsetLeft), isNaN(u[1]) && (u[1] = a ? 0 : e.offsetTop), null != t && (e.style.left = t - o.left + u[0] + B), null != n && (e.style.top = n - o.top + u[1] + B)
        }

        function m(e, t) {
            return "function" == typeof t ? t.call(e, e) : t
        }

        function g(e, t, n) {
            var r = this[0];
            return r ? null == e && null == t ? (b(r) ? w() : {
                x: r.scrollLeft,
                y: r.scrollTop
            })[n] : (b(r) ? C.scrollTo(e, t) : (null != e && (r.scrollLeft = e), null != t && (r.scrollTop = t)), this) : this
        }

        function v(e) {
            if (this.length = 0, e) {
                e = "string" == typeof e || e.nodeType || "undefined" == typeof e.length ? [e] : e, this.length = e.length;
                for (var t = 0; t < e.length; t++) this[t] = e[t]
            }
        }

        function y(e, t) {
            var n, r, i, o = t.cloneNode(!0);
            if (e.$ && "function" == typeof e.cloneEvents)
                for (e.$(o).cloneEvents(t), n = e.$(o).find("*"), r = e.$(t).find("*"), i = 0; i < r.length; i++) e.$(n[i]).cloneEvents(r[i]);
            return o
        }

        function b(e) {
            return e === C || /^(?:body|html)$/i.test(e.tagName)
        }

        function w() {
            return {
                x: C.pageXOffset || O.scrollLeft,
                y: C.pageYOffset || O.scrollTop
            }
        }

        function x(e) {
            var t = document.createElement("script"),
                n = e.match(N);
            return t.src = n[1], t
        }

        function j(e) {
            return new v(e)
        }
        var E, k, S, C = window,
            _ = C.document,
            O = _.documentElement,
            A = "parentNode",
            T = /^(checked|value|selected|disabled)$/i,
            P = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,
            N = /\s*<script +src=['"]([^'"]+)['"]>/,
            R = ["<table>", "</table>", 1],
            L = ["<table><tbody><tr>", "</tr></tbody></table>", 3],
            q = ["<select>", "</select>", 1],
            I = ["_", "", 0, 1],
            U = {
                thead: R,
                tbody: R,
                tfoot: R,
                colgroup: R,
                caption: R,
                tr: ["<table><tbody>", "</tbody></table>", 2],
                th: L,
                td: L,
                col: ["<table><colgroup>", "</colgroup></table>", 2],
                fieldset: ["<form>", "</form>", 1],
                legend: ["<form><fieldset>", "</fieldset></form>", 2],
                option: q,
                optgroup: q,
                script: I,
                style: I,
                link: I,
                param: I,
                base: I
            },
            H = /^(checked|selected|disabled)$/,
            M = {},
            D = 0,
            $ = /^-?[\d\.]+$/,
            F = /^data-(.+)$/,
            B = "px",
            W = "setAttribute",
            z = "getAttribute",
            V = function() {
                var e = _.createElement("p");
                return {
                    transform: function() {
                        var t, n = ["transform", "webkitTransform", "MozTransform", "OTransform", "msTransform"];
                        for (t = 0; t < n.length; t++)
                            if (n[t] in e.style) return n[t]
                    }(),
                    classList: "classList" in e
                }
            }(),
            X = /\s+/,
            Q = String.prototype.toString,
            G = {
                lineHeight: 1,
                zoom: 1,
                zIndex: 1,
                opacity: 1,
                boxFlex: 1,
                WebkitBoxFlex: 1,
                MozBoxFlex: 1
            },
            J = _.querySelectorAll && function(e) {
                return _.querySelectorAll(e)
            };
        return V.classList ? (E = function(e, t) {
            return e.classList.contains(t)
        }, k = function(e, t) {
            e.classList.add(t)
        }, S = function(e, t) {
            e.classList.remove(t)
        }) : (E = function(e, t) {
            return r(t).test(e.className)
        }, k = function(e, t) {
            e.className = (e.className + " " + t).trim()
        }, S = function(e, t) {
            e.className = e.className.replace(r(t), " ").trim()
        }), v.prototype = {
            get: function(e) {
                return this[e] || null
            },
            each: function(e, t) {
                return i(this, e, t)
            },
            deepEach: function(e, t) {
                return o(this, e, t)
            },
            map: function(e, t) {
                var n, r, i = [];
                for (r = 0; r < this.length; r++) n = e.call(this, this[r], r), t ? t(n) && i.push(n) : i.push(n);
                return i
            },
            html: function(e, t) {
                var r = t ? "textContent" : "innerHTML",
                    o = this,
                    s = function(t, r) {
                        i(n(e, o, r), function(e) {
                            t.appendChild(e)
                        })
                    },
                    a = function(n, i) {
                        try {
                            if (t || "string" == typeof e && !P.test(n.tagName)) return n[r] = e
                        } catch (o) {}
                        s(n, i)
                    };
                return "undefined" != typeof e ? this.empty().each(a) : this[0] ? this[0][r] : ""
            },
            text: function(e) {
                return this.html(e, !0)
            },
            append: function(e) {
                var t = this;
                return this.each(function(r, o) {
                    i(n(e, t, o), function(e) {
                        r.appendChild(e)
                    })
                })
            },
            prepend: function(e) {
                var t = this;
                return this.each(function(r, o) {
                    var s = r.firstChild;
                    i(n(e, t, o), function(e) {
                        r.insertBefore(e, s)
                    })
                })
            },
            appendTo: function(e, t) {
                return p.call(this, e, t, function(e, t) {
                    e.appendChild(t)
                })
            },
            prependTo: function(e, t) {
                return p.call(this, e, t, function(e, t) {
                    e.insertBefore(t, e.firstChild)
                }, 1)
            },
            before: function(e) {
                var t = this;
                return this.each(function(r, o) {
                    i(n(e, t, o), function(e) {
                        r[A].insertBefore(e, r)
                    })
                })
            },
            after: function(e) {
                var t = this;
                return this.each(function(r, o) {
                    i(n(e, t, o), function(e) {
                        r[A].insertBefore(e, r.nextSibling)
                    }, null, 1)
                })
            },
            insertBefore: function(e, t) {
                return p.call(this, e, t, function(e, t) {
                    e[A].insertBefore(t, e)
                })
            },
            insertAfter: function(e, t) {
                return p.call(this, e, t, function(e, t) {
                    var n = e.nextSibling;
                    n ? e[A].insertBefore(t, n) : e[A].appendChild(t)
                }, 1)
            },
            replaceWith: function(e) {
                var t = this;
                return this.each(function(r, o) {
                    i(n(e, t, o), function(e) {
                        r[A] && r[A].replaceChild(e, r)
                    })
                })
            },
            clone: function(e) {
                var t, n, r = [];
                for (n = 0, t = this.length; t > n; n++) r[n] = y(e || this, this[n]);
                return j(r)
            },
            addClass: function(e) {
                return e = Q.call(e).split(X), this.each(function(t) {
                    i(e, function(e) {
                        e && !E(t, m(t, e)) && k(t, m(t, e))
                    })
                })
            },
            removeClass: function(e) {
                return e = Q.call(e).split(X), this.each(function(t) {
                    i(e, function(e) {
                        e && E(t, m(t, e)) && S(t, m(t, e))
                    })
                })
            },
            hasClass: function(e) {
                return e = Q.call(e).split(X), f(this, function(t) {
                    return f(e, function(e) {
                        return e && E(t, e)
                    })
                })
            },
            toggleClass: function(e, t) {
                return e = Q.call(e).split(X), this.each(function(n) {
                    i(e, function(e) {
                        e && ("undefined" != typeof t ? t ? !E(n, e) && k(n, e) : S(n, e) : E(n, e) ? S(n, e) : k(n, e))
                    })
                })
            },
            show: function(e) {
                return e = "string" == typeof e ? e : "", this.each(function(t) {
                    t.style.display = e
                })
            },
            hide: function() {
                return this.each(function(e) {
                    e.style.display = "none"
                })
            },
            toggle: function(e, t) {
                return t = "string" == typeof t ? t : "", "function" != typeof e && (e = null), this.each(function(n) {
                    n.style.display = n.offsetWidth || n.offsetHeight ? "none" : t, e && e.call(n)
                })
            },
            first: function() {
                return j(this.length ? this[0] : [])
            },
            last: function() {
                return j(this.length ? this[this.length - 1] : [])
            },
            next: function() {
                return this.related("nextSibling")
            },
            previous: function() {
                return this.related("previousSibling")
            },
            parent: function() {
                return this.related(A)
            },
            related: function(e) {
                return j(this.map(function(t) {
                    for (t = t[e]; t && 1 !== t.nodeType;) t = t[e];
                    return t || 0
                }, function(e) {
                    return e
                }))
            },
            focus: function() {
                return this.length && this[0].focus(), this
            },
            blur: function() {
                return this.length && this[0].blur(), this
            },
            css: function(t, n) {
                function r(e, t, n) {
                    for (var r in o)
                        if (o.hasOwnProperty(r)) {
                            n = o[r], (t = d(r)) && $.test(n) && !(t in G) && (n += B);
                            try {
                                e.style[t] = m(e, n)
                            } catch (i) {}
                        }
                }
                var i, o = t;
                return void 0 === n && "string" == typeof t ? (n = this[0], n ? n === _ || n === C ? (i = n === _ ? j.doc() : j.viewport(), "width" == t ? i.width : "height" == t ? i.height : "") : (t = d(t)) ? e(n, t) : null : null) : ("string" == typeof t && (o = {}, o[t] = n), this.each(r))
            },
            offset: function(e, t) {
                if (e && "object" == typeof e && ("number" == typeof e.top || "number" == typeof e.left)) return this.each(function(t) {
                    h(t, e.left, e.top)
                });
                if ("number" == typeof e || "number" == typeof t) return this.each(function(n) {
                    h(n, e, t)
                });
                if (!this[0]) return {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                };
                var n = this[0],
                    r = n.ownerDocument.documentElement,
                    i = n.getBoundingClientRect(),
                    o = w(),
                    s = n.offsetWidth,
                    a = n.offsetHeight,
                    u = i.top + o.y - Math.max(0, r && r.clientTop, _.body.clientTop),
                    c = i.left + o.x - Math.max(0, r && r.clientLeft, _.body.clientLeft);
                return {
                    top: u,
                    left: c,
                    height: a,
                    width: s
                }
            },
            dim: function() {
                if (!this.length) return {
                    height: 0,
                    width: 0
                };
                var e = this[0],
                    t = 9 == e.nodeType && e.documentElement,
                    n = t || !e.style || e.offsetWidth || e.offsetHeight ? null : function(t) {
                        var n = {
                            position: e.style.position || "",
                            visibility: e.style.visibility || "",
                            display: e.style.display || ""
                        };
                        return t.first().css({
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        }), n
                    }(this),
                    r = t ? Math.max(e.body.scrollWidth, e.body.offsetWidth, t.scrollWidth, t.offsetWidth, t.clientWidth) : e.offsetWidth,
                    i = t ? Math.max(e.body.scrollHeight, e.body.offsetHeight, t.scrollHeight, t.offsetHeight, t.clientHeight) : e.offsetHeight;
                return n && this.first().css(n), {
                    height: i,
                    width: r
                }
            },
            attr: function(e, t) {
                var n, r = this[0];
                if ("string" != typeof e && !(e instanceof String)) {
                    for (n in e) e.hasOwnProperty(n) && this.attr(n, e[n]);
                    return this
                }
                return "undefined" == typeof t ? r ? T.test(e) ? H.test(e) && "string" == typeof r[e] ? !0 : r[e] : r[z](e) : null : this.each(function(n) {
                    T.test(e) ? n[e] = m(n, t) : n[W](e, m(n, t))
                })
            },
            removeAttr: function(e) {
                return this.each(function(t) {
                    H.test(e) ? t[e] = !1 : t.removeAttribute(e)
                })
            },
            val: function(e) {
                return "string" == typeof e || "number" == typeof e ? this.attr("value", e) : this.length ? this[0].value : null
            },
            data: function(e, t) {
                var n, r, o = this[0];
                return "undefined" == typeof t ? o ? (n = u(o), "undefined" == typeof e ? (i(o.attributes, function(e) {
                    (r = ("" + e.name).match(F)) && (n[s(r[1])] = l(e.value))
                }), n) : ("undefined" == typeof n[e] && (n[e] = l(this.attr("data-" + a(e)))), n[e])) : null : this.each(function(n) {
                    u(n)[e] = t
                })
            },
            remove: function() {
                return this.deepEach(c), this.detach()
            },
            empty: function() {
                return this.each(function(e) {
                    for (o(e.childNodes, c); e.firstChild;) e.removeChild(e.firstChild)
                })
            },
            detach: function() {
                return this.each(function(e) {
                    e[A] && e[A].removeChild(e)
                })
            },
            scrollTop: function(e) {
                return g.call(this, null, e, "y")
            },
            scrollLeft: function(e) {
                return g.call(this, e, null, "x")
            }
        }, j.setQueryEngine = function(e) {
            J = e, delete j.setQueryEngine
        }, j.aug = function(e, t) {
            for (var n in e) e.hasOwnProperty(n) && ((t || v.prototype)[n] = e[n])
        }, j.create = function(e) {
            return "string" == typeof e && "" !== e ? function() {
                if (N.test(e)) return [x(e)];
                var t = e.match(/^\s*<([^\s>]+)/),
                    n = _.createElement("div"),
                    r = [],
                    o = t ? U[t[1].toLowerCase()] : null,
                    s = o ? o[2] + 1 : 1,
                    a = o && o[3],
                    u = A;
                for (n.innerHTML = o ? o[0] + e + o[1] : e; s--;) n = n.firstChild;
                a && n && 1 !== n.nodeType && (n = n.nextSibling);
                do t && 1 != n.nodeType || r.push(n); while (n = n.nextSibling);
                return i(r, function(e) {
                    e[u] && e[u].removeChild(e)
                }), r
            }() : t(e) ? [e.cloneNode(!0)] : []
        }, j.doc = function() {
            var e = j.viewport();
            return {
                width: Math.max(_.body.scrollWidth, O.scrollWidth, e.width),
                height: Math.max(_.body.scrollHeight, O.scrollHeight, e.height)
            }
        }, j.firstChild = function(e) {
            for (var t, n = e.childNodes, r = 0, i = n && n.length || 0; i > r; r++) 1 === n[r].nodeType && (t = n[i = r]);
            return t
        }, j.viewport = function() {
            return {
                width: C.innerWidth,
                height: C.innerHeight
            }
        }, j.isAncestor = "compareDocumentPosition" in O ? function(e, t) {
            return 16 == (16 & e.compareDocumentPosition(t))
        } : function(e, t) {
            return e !== t && e.contains(t)
        }, j
    }), define("lodash/internals/isNative", [], function() {
        function e(e) {
            return "function" == typeof e && r.test(e)
        }
        var t = Object.prototype,
            n = t.toString,
            r = RegExp("^" + String(n).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$");
        return e
    }), define("lodash/internals/objectTypes", [], function() {
        var e = {
            "boolean": !1,
            "function": !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        };
        return e
    }), define("lodash/objects/isObject", ["../internals/objectTypes"], function(e) {
        function t(t) {
            return !(!t || !e[typeof t])
        }
        return t
    }), define("lodash/internals/baseCreate", ["./isNative", "../objects/isObject", "../utilities/noop"], function(e, t, n) {
        function r(e, n) {
            return t(e) ? i(e) : {}
        }
        var i = e(i = Object.create) && i;
        return i || (r = function() {
            function e() {}
            return function(n) {
                if (t(n)) {
                    e.prototype = n;
                    var r = new e;
                    e.prototype = null
                }
                return r || window.Object()
            }
        }()), r
    }), define("lodash/internals/setBindData", ["./isNative", "../utilities/noop"], function(e, t) {
        var n = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            r = function() {
                try {
                    var t = {},
                        n = e(n = Object.defineProperty) && n,
                        r = n(t, t, t) && n
                } catch (i) {}
                return r
            }(),
            i = r ? function(e, t) {
                n.value = t, r(e, "__bindData__", n)
            } : t;
        return i
    }), define("lodash/internals/slice", [], function() {
        function e(e, t, n) {
            t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
            for (var r = -1, i = n - t || 0, o = Array(0 > i ? 0 : i); ++r < i;) o[r] = e[t + r];
            return o
        }
        return e
    }), define("lodash/internals/baseBind", ["./baseCreate", "../objects/isObject", "./setBindData", "./slice"], function(e, t, n, r) {
        function i(i) {
            function o() {
                if (u) {
                    var n = r(u);
                    s.apply(n, arguments)
                }
                if (this instanceof o) {
                    var i = e(a.prototype),
                        l = a.apply(i, n || arguments);
                    return t(l) ? l : i
                }
                return a.apply(c, n || arguments)
            }
            var a = i[0],
                u = i[2],
                c = i[4];
            return n(o, i), o
        }
        var o = [],
            s = o.push;
        return i
    }), define("lodash/internals/baseCreateWrapper", ["./baseCreate", "../objects/isObject", "./setBindData", "./slice"], function(e, t, n, r) {
        function i(o) {
            function a() {
                var n = h ? d : this;
                if (l) {
                    var o = r(l);
                    s.apply(o, arguments)
                }
                if ((f || g) && (o || (o = r(arguments)), f && s.apply(o, f), g && o.length < p)) return c |= 16, i([u, v ? c : -4 & c, o, null, d, p]);
                if (o || (o = arguments), m && (u = n[y]), this instanceof a) {
                    n = e(u.prototype);
                    var b = u.apply(n, o);
                    return t(b) ? b : n
                }
                return u.apply(n, o)
            }
            var u = o[0],
                c = o[1],
                l = o[2],
                f = o[3],
                d = o[4],
                p = o[5],
                h = 1 & c,
                m = 2 & c,
                g = 4 & c,
                v = 8 & c,
                y = u;
            return n(a, o), a
        }
        var o = [],
            s = o.push;
        return i
    }), define("lodash/internals/createWrapper", ["./baseBind", "./baseCreateWrapper", "../objects/isFunction", "./slice"], function(e, t, n, r) {
        function i(o, u, c, l, f, d) {
            var p = 1 & u,
                h = 2 & u,
                m = 4 & u,
                g = 16 & u,
                v = 32 & u;
            if (!h && !n(o)) throw new TypeError;
            g && !c.length && (u &= -17, g = c = !1), v && !l.length && (u &= -33, v = l = !1);
            var y = o && o.__bindData__;
            if (y && y !== !0) return y = r(y), y[2] && (y[2] = r(y[2])), y[3] && (y[3] = r(y[3])), !p || 1 & y[1] || (y[4] = f), !p && 1 & y[1] && (u |= 8), !m || 4 & y[1] || (y[5] = d), g && s.apply(y[2] || (y[2] = []), c), v && a.apply(y[3] || (y[3] = []), l), y[1] |= u, i.apply(null, y);
            var b = 1 == u || 17 === u ? e : t;
            return b([o, u, c, l, f, d])
        }
        var o = [],
            s = o.push,
            a = o.unshift;
        return i
    }), define("lodash/support", ["./internals/isNative"], function(e) {
        var t = /\bthis\b/,
            n = "[object Arguments]",
            r = "[object Object]",
            i = [],
            o = Error.prototype,
            s = Object.prototype,
            a = s.toString,
            u = s.propertyIsEnumerable,
            c = {};
        return function() {
            var s = function() {
                    this.x = 1
                },
                l = {
                    0: 1,
                    length: 1
                },
                f = [];
            s.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var d in new s) f.push(d);
            for (d in arguments);
            c.argsClass = a.call(arguments) == n, c.argsObject = arguments.constructor == Object && !(arguments instanceof Array), c.enumErrorProps = u.call(o, "message") || u.call(o, "name"), c.enumPrototypes = u.call(s, "prototype"), c.funcDecomp = !e(window.WinRTError) && t.test(function() {
                return this
            }), c.funcNames = "string" == typeof Function.name, c.nonEnumArgs = 0 != d, c.nonEnumShadows = !/valueOf/.test(f), c.ownLast = "x" != f[0], c.spliceObjects = (i.splice.call(l, 0, 1), !l[0]), c.unindexedChars = "x" [0] + Object("x")[0] != "xx";
            try {
                c.nodeClass = !(a.call(document) == r && !({
                    toString: 0
                } + ""))
            } catch (p) {
                c.nodeClass = !0
            }
        }(1), c
    }), define("lodash/functions/bind", ["../internals/createWrapper", "../internals/slice", "../support"], function(e, t, n) {
        function r(n, r) {
            return arguments.length > 2 ? e(n, 17, t(arguments, 2), null, r) : e(n, 1, null, null, r)
        }
        return r
    }), define("lodash/utilities/identity", [], function() {
        function e(e) {
            return e
        }
        return e
    }), define("lodash/internals/baseCreateCallback", ["../functions/bind", "../utilities/identity", "./setBindData", "../support"], function(e, t, n, r) {
        function i(i, u, c) {
            if ("function" != typeof i) return t;
            if ("undefined" == typeof u || !("prototype" in i)) return i;
            var l = i.__bindData__;
            if ("undefined" == typeof l && (r.funcNames && (l = !i.name), l = l || !r.funcDecomp, !l)) {
                var f = a.call(i);
                r.funcNames || (l = !o.test(f)), l || (l = s.test(f), n(i, l))
            }
            if (l === !1 || l !== !0 && 1 & l[1]) return i;
            switch (c) {
                case 1:
                    return function(e) {
                        return i.call(u, e)
                    };
                case 2:
                    return function(e, t) {
                        return i.call(u, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return i.call(u, e, t, n)
                    };
                case 4:
                    return function(e, t, n, r) {
                        return i.call(u, e, t, n, r)
                    }
            }
            return e(i, u)
        }
        var o = /^\s*function[ \n\r\t]+\w/,
            s = /\bthis\b/,
            a = Function.prototype.toString;
        return i
    }), define("lodash/internals/indicatorObject", [], function() {
        var e = {};
        return e
    }), define("lodash/objects/isArguments", ["../support"], function(e) {
        function t(e) {
            return e && "object" == typeof e && "number" == typeof e.length && i.call(e) == n || !1
        }
        var n = "[object Arguments]",
            r = Object.prototype,
            i = r.toString,
            o = r.hasOwnProperty,
            s = r.propertyIsEnumerable;
        return e.argsClass || (t = function(e) {
            return e && "object" == typeof e && "number" == typeof e.length && o.call(e, "callee") && !s.call(e, "callee") || !1
        }), t
    }), define("lodash/objects/isArray", ["../internals/isNative"], function(e) {
        var t = "[object Array]",
            n = Object.prototype,
            r = n.toString,
            i = e(i = Array.isArray) && i,
            o = i || function(e) {
                return e && "object" == typeof e && "number" == typeof e.length && r.call(e) == t || !1
            };
        return o
    }), define("lodash/objects/isString", [], function() {
        function e(e) {
            return "string" == typeof e || e && "object" == typeof e && r.call(e) == t || !1
        }
        var t = "[object String]",
            n = Object.prototype,
            r = n.toString;
        return e
    }), define("lodash/internals/iteratorTemplate", ["../support"], function(e) {
        var t = function(t) {
            var n = "var index, iterable = " + t.firstArg + ", result = " + t.init + ";\nif (!iterable) return result;\n" + t.top + ";";
            t.array ? (n += "\nvar length = iterable.length; index = -1;\nif (" + t.array + ") {  ", e.unindexedChars && (n += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), n += "\n  while (++index < length) {\n    " + t.loop + ";\n  }\n}\nelse {  ") : e.nonEnumArgs && (n += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + t.loop + ";\n    }\n  } else {  "), e.enumPrototypes && (n += "\n  var skipProto = typeof iterable == 'function';\n  "), e.enumErrorProps && (n += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
            var r = [];
            if (e.enumPrototypes && r.push('!(skipProto && index == "prototype")'), e.enumErrorProps && r.push('!(skipErrorProps && (index == "message" || index == "name"))'), t.useHas && t.keys) n += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", r.length && (n += "    if (" + r.join(" && ") + ") {\n  "), n += t.loop + ";    ", r.length && (n += "\n    }"), n += "\n  }  ";
            else if (n += "\n  for (index in iterable) {\n", t.useHas && r.push("hasOwnProperty.call(iterable, index)"), r.length && (n += "    if (" + r.join(" && ") + ") {\n  "), n += t.loop + ";    ", r.length && (n += "\n    }"), n += "\n  }    ", e.nonEnumShadows) {
                for (n += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++) n += "\n    index = '" + t.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", t.useHas || (n += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), n += ") {\n      " + t.loop + ";\n    }      ";
                n += "\n  }    "
            }
            return (t.array || e.nonEnumArgs) && (n += "\n}"), n += t.bottom + ";\nreturn result"
        };
        return t
    }), define("lodash/internals/createIterator", ["./baseCreateCallback", "./indicatorObject", "../objects/isArguments", "../objects/isArray", "../objects/isString", "./iteratorTemplate", "./objectTypes"], function(e, t, n, r, i, o, s) {
        function a() {
            y.shadowedProps = u, y.array = y.bottom = y.loop = y.top = "", y.init = "iterable", y.useHas = !0;
            for (var a, c = 0; a = arguments[c]; c++)
                for (var l in a) y[l] = a[l];
            var f = y.args;
            y.firstArg = /^[^,]+/.exec(f)[0];
            var p = Function("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + f + ") {\n" + o(y) + "\n}");
            return p(e, d, b, E, t, n, r, i, y.keys, w, s, k, v, x, j)
        }
        var u = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            c = "[object Array]",
            l = "[object Boolean]",
            f = "[object Date]",
            d = "[object Error]",
            p = "[object Function]",
            h = "[object Number]",
            m = "[object Object]",
            g = "[object RegExp]",
            v = "[object String]",
            y = {
                args: "",
                array: null,
                bottom: "",
                firstArg: "",
                init: "",
                keys: null,
                loop: "",
                shadowedProps: null,
                support: null,
                top: "",
                useHas: !1
            },
            b = Error.prototype,
            w = Object.prototype,
            x = String.prototype,
            j = w.toString,
            E = w.hasOwnProperty,
            k = {};
        return k[c] = k[f] = k[h] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, k[l] = k[v] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            }, k[d] = k[p] = k[g] = {
                constructor: !0,
                toString: !0
            }, k[m] = {
                constructor: !0
            },
            function() {
                for (var e = u.length; e--;) {
                    var t = u[e];
                    for (var n in k) E.call(k, n) && !E.call(k[n], t) && (k[n][t] = !1)
                }
            }(), a
    }), define("lodash/internals/shimKeys", ["./createIterator"], function(e) {
        var t = e({
            args: "object",
            init: "[]",
            top: "if (!(objectTypes[typeof object])) return result",
            loop: "result.push(index)"
        });
        return t
    }), define("lodash/objects/keys", ["./isArguments", "../internals/isNative", "./isObject", "../internals/shimKeys", "../support"], function(e, t, n, r, i) {
        var o = t(o = Object.keys) && o,
            s = o ? function(t) {
                return n(t) ? i.enumPrototypes && "function" == typeof t || i.nonEnumArgs && t.length && e(t) ? r(t) : o(t) : []
            } : r;
        return s
    }), define("lodash/internals/eachIteratorOptions", ["../objects/keys"], function(e) {
        var t = {
            args: "collection, callback, thisArg",
            top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
            array: "typeof length == 'number'",
            keys: e,
            loop: "if (callback(iterable[index], index, collection) === false) return result"
        };
        return t
    }), define("lodash/internals/baseEach", ["./createIterator", "./eachIteratorOptions"], function(e, t) {
        var n = e(t);
        return n
    }), define("lodash/collections/forEach", ["../internals/baseCreateCallback", "../internals/baseEach", "../objects/isArray"], function(e, t, n) {
        function r(e, r, i) {
            if (r && "undefined" == typeof i && n(e))
                for (var o = -1, s = e.length; ++o < s && r(e[o], o, e) !== !1;);
            else t(e, r, i);
            return e
        }
        return r
    }), define("common/utils/$", ["bonzo", "qwery", "lodash/collections/forEach"], function(e, t, n) {
        function r(n, r) {
            return e(t(n, r))
        }
        return e.aug({
            height: function() {
                return this.dim().height
            }
        }), r.create = function(t) {
            return e(e.create(t))
        }, r.ancestor = function(t, n) {
            return "html" === t.nodeName.toLowerCase() ? !1 : !t.parentNode || e(t.parentNode).hasClass(n) ? t.parentNode : r.ancestor(t.parentNode, n)
        }, r.forEachElement = function(e, r) {
            var i = t(e);
            return n(i, r), i
        }, r
    }), define("lodash/internals/forOwnIteratorOptions", ["./eachIteratorOptions"], function(e) {
        var t = {
            top: "if (!objectTypes[typeof iterable]) return result;\n" + e.top,
            array: !1
        };
        return t
    }), define("lodash/objects/forIn", ["../internals/createIterator", "../internals/eachIteratorOptions", "../internals/forOwnIteratorOptions"], function(e, t, n) {
        var r = e(t, n, {
            useHas: !1
        });
        return r
    }), define("lodash/internals/arrayPool", [], function() {
        var e = [];
        return e
    }), define("lodash/internals/getArray", ["./arrayPool"], function(e) {
        function t() {
            return e.pop() || []
        }
        return t
    }), define("lodash/internals/isNode", [], function() {
        function e(e) {
            return "function" != typeof e.toString && "string" == typeof(e + "")
        }
        return e
    }), define("lodash/internals/maxPoolSize", [], function() {
        var e = 40;
        return e
    }), define("lodash/internals/releaseArray", ["./arrayPool", "./maxPoolSize"], function(e, t) {
        function n(n) {
            n.length = 0, e.length < t && e.push(n)
        }
        return n
    }), define("lodash/internals/baseIsEqual", ["../objects/forIn", "./getArray", "../objects/isArguments", "../objects/isFunction", "./isNode", "./objectTypes", "./releaseArray", "../support"], function(e, t, n, r, i, o, s, a) {
        function u(v, w, x, j, E, k) {
            if (x) {
                var S = x(v, w);
                if ("undefined" != typeof S) return !!S
            }
            if (v === w) return 0 !== v || 1 / v == 1 / w;
            var C = typeof v,
                _ = typeof w;
            if (!(v !== v || v && o[C] || w && o[_])) return !1;
            if (null == v || null == w) return v === w;
            var O = y.call(v),
                A = y.call(w);
            if (O == c && (O = h), A == c && (A = h), O != A) return !1;
            switch (O) {
                case f:
                case d:
                    return +v == +w;
                case p:
                    return v != +v ? w != +w : 0 == v ? 1 / v == 1 / w : v == +w;
                case m:
                case g:
                    return v == String(w)
            }
            var T = O == l;
            if (!T) {
                var P = b.call(v, "__wrapped__"),
                    N = b.call(w, "__wrapped__");
                if (P || N) return u(P ? v.__wrapped__ : v, N ? w.__wrapped__ : w, x, j, E, k);
                if (O != h || !a.nodeClass && (i(v) || i(w))) return !1;
                var R = !a.argsObject && n(v) ? Object : v.constructor,
                    L = !a.argsObject && n(w) ? Object : w.constructor;
                if (R != L && !(r(R) && R instanceof R && r(L) && L instanceof L) && "constructor" in v && "constructor" in w) return !1
            }
            var q = !E;
            E || (E = t()), k || (k = t());
            for (var I = E.length; I--;)
                if (E[I] == v) return k[I] == w;
            var U = 0;
            if (S = !0, E.push(v), k.push(w), T) {
                if (I = v.length, U = w.length, S = U == I, S || j)
                    for (; U--;) {
                        var H = I,
                            M = w[U];
                        if (j)
                            for (; H-- && !(S = u(v[H], M, x, j, E, k)););
                        else if (!(S = u(v[U], M, x, j, E, k))) break
                    }
            } else e(w, function(e, t, n) {
                return b.call(n, t) ? (U++, S = b.call(v, t) && u(v[t], e, x, j, E, k)) : void 0
            }), S && !j && e(v, function(e, t, n) {
                return b.call(n, t) ? S = --U > -1 : void 0
            });
            return E.pop(), k.pop(), q && (s(E), s(k)), S
        }
        var c = "[object Arguments]",
            l = "[object Array]",
            f = "[object Boolean]",
            d = "[object Date]",
            p = "[object Number]",
            h = "[object Object]",
            m = "[object RegExp]",
            g = "[object String]",
            v = Object.prototype,
            y = v.toString,
            b = v.hasOwnProperty;
        return u
    }), define("lodash/utilities/property", [], function() {
        function e(e) {
            return function(t) {
                return t[e]
            }
        }
        return e
    }), define("lodash/functions/createCallback", ["../internals/baseCreateCallback", "../internals/baseIsEqual", "../objects/isObject", "../objects/keys", "../utilities/property"], function(e, t, n, r, i) {
        function o(o, s, a) {
            var u = typeof o;
            if (null == o || "function" == u) return e(o, s, a);
            if ("object" != u) return i(o);
            var c = r(o),
                l = c[0],
                f = o[l];
            return 1 != c.length || f !== f || n(f) ? function(e) {
                for (var n = c.length, r = !1; n-- && (r = t(e[c[n]], o[c[n]], null, !0)););
                return r
            } : function(e) {
                var t = e[l];
                return f === t && (0 !== f || 1 / f == 1 / t)
            }
        }
        return o
    }), define("lodash/collections/find", ["../internals/baseEach", "../functions/createCallback", "../objects/isArray"], function(e, t, n) {
        function r(r, i, o) {
            if (i = t(i, o, 3), !n(r)) {
                var s;
                return e(r, function(e, t, n) {
                    return i(e, t, n) ? (s = e, !1) : void 0
                }), s
            }
            for (var a = -1, u = r.length; ++a < u;) {
                var c = r[a];
                if (i(c, a, r)) return c
            }
        }
        return r
    }), define("common/modules/experiments/join-discussion-after-poll", ["lodash/collections/find", "common/utils/$"], function(e, t) {
        function n(e) {
            e || (l = !0), u = t('figure.element-interactive[data-canonical-url*="interactive.guim.co.uk/participation/poll"]'), window.addEventListener("message", r, !1)
        }

        function r(t) {
            var n, r; - 1 !== t.origin.indexOf("interactive.guim.co.uk") && (r = JSON.parse(t.data), r.type && "pollPost" === r.type && (n = e(u, i.bind(null, t.source)), n && (c = !0, l && o(n))))
        }

        function i(e, n) {
            var r = t("iframe", n)[0];
            return r.contentWindow === e
        }

        function o(e) {
            var t = e.nextSibling,
                n = document.createElement("div");
            n.classList.add("join-discussion-after-poll"), n.innerHTML = '<p>Thanks for taking part! Why not <a href="#comments">join the discussion</a>?</p>', t ? t.parentNode.insertBefore(n, t) : e.parentNode.appendChild(n), setTimeout(s.bind(null, n), 50)
        }

        function s(e) {
            e.classList.add("join-discussion-after-poll--open")
        }

        function a() {
            return c
        }
        var u, c = !1,
            l = !1;
        return {
            init: n,
            isComplete: a
        }
    }), define("common/modules/experiments/tests/join-discussion-after-poll", ["common/utils/config", "common/utils/mediator", "common/utils/detect", "common/utils/$", "common/modules/experiments/join-discussion-after-poll"], function(e, t, n, r, i) {
        function o(e) {
            this.canRun() && t.on("discussion:commentbox:post:success", function() {
                i.isComplete() && e()
            })
        }

        function s(e) {
            i.init(e)
        }
        return function() {
            this.id = "JoinDiscussionAfterPoll", this.start = "2016-06-15", this.expiry = "2016-07-13", this.author = "George Haberis - Participation", this.description = 'Participation - Does "join discussion" message after poll participation increase comments', this.audience = .1, this.audienceOffset = .4, this.successMeasure = "Control - User does not see message, Variant 1 - User sees message", this.audienceCriteria = "Articles which have embeded poll", this.dataLinkNames = "", this.idealOutcome = "We can see at least 50% more participation if message shown", this.canRun = function() {
                return n.isEnhanced() && e.page.commentable && r('figure.element-interactive[data-canonical-url*="interactive.guim.co.uk/participation/poll"]').length > 0
            }, this.variants = [{
                id: "control",
                test: s.bind(this, !0),
                success: o.bind(this)
            }, {
                id: "variant-1",
                test: s.bind(this, !1),
                success: o.bind(this)
            }]
        }
    }), define("common/modules/experiments/tests/hosted-autoplay", [], function() {
        return function() {
            this.id = "HostedAutoplay", this.start = "2016-30-06", this.expiry = "2016-14-07", this.author = "Zofia Korcz", this.description = "An autoplay overlay with the next video on a hosted page.", this.audience = 0, this.audienceOffset = 0, this.successMeasure = "People will either more often click on the next hosted video or wait until end of the current video to be redirected into the next video page url.", this.audienceCriteria = "All users", this.dataLinkNames = "Next video autoplay: Cancel autoplay of the next video, Discover Zoe from Renault, Next Hosted Video Autoplay, Immediately play the next video, Next Hosted Video", this.idealOutcome = "People will either more often click on the next hosted video or wait until end of the current video to be redirected into the next video page url.", this.canRun = function() {
                return !0
            }, this.variants = [{
                id: "control",
                test: function() {}
            }, {
                id: "variant1",
                test: function() {}
            }, {
                id: "variant2",
                test: function() {}
            }]
        }
    }),
    function(e, t, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("bean", n) : t[e] = n()
    }("bean", this, function(e, t) {
        e = e || "bean", t = t || this;
        var n, r = window,
            i = t[e],
            o = /[^\.]*(?=\..*)\.|.*/,
            s = /\..*/,
            a = "addEventListener",
            u = "removeEventListener",
            c = document || {},
            l = c.documentElement || {},
            f = l[a],
            d = f ? a : "attachEvent",
            p = {},
            h = Array.prototype.slice,
            m = function(e, t) {
                return e.split(t || " ")
            },
            g = function(e) {
                return "string" == typeof e
            },
            v = function(e) {
                return "function" == typeof e
            },
            y = "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",
            b = "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",
            w = function(e, t, n) {
                for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                return e
            }({}, m(y + (f ? b : ""))),
            x = function() {
                var e = "compareDocumentPosition" in l ? function(e, t) {
                        return t.compareDocumentPosition && 16 === (16 & t.compareDocumentPosition(e))
                    } : "contains" in l ? function(e, t) {
                        return t = 9 === t.nodeType || t === window ? l : t, t !== e && t.contains(e)
                    } : function(e, t) {
                        for (; e = e.parentNode;)
                            if (e === t) return 1;
                        return 0
                    },
                    t = function(t) {
                        var n = t.relatedTarget;
                        return n ? n !== this && "xul" !== n.prefix && !/document/.test(this.toString()) && !e(n, this) : null == n
                    };
                return {
                    mouseenter: {
                        base: "mouseover",
                        condition: t
                    },
                    mouseleave: {
                        base: "mouseout",
                        condition: t
                    },
                    mousewheel: {
                        base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
                    }
                }
            }(),
            j = function() {
                var e = m("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),
                    t = e.concat(m("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
                    n = t.concat(m("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),
                    i = e.concat(m("char charCode key keyCode keyIdentifier keyLocation location")),
                    o = e.concat(m("data")),
                    s = e.concat(m("touches targetTouches changedTouches scale rotation")),
                    a = e.concat(m("data origin source")),
                    u = e.concat(m("state")),
                    f = /over|out/,
                    d = [{
                        reg: /key/i,
                        fix: function(e, t) {
                            return t.keyCode = e.keyCode || e.which, i
                        }
                    }, {
                        reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                        fix: function(e, n, r) {
                            return n.rightClick = 3 === e.which || 2 === e.button, n.pos = {
                                x: 0,
                                y: 0
                            }, e.pageX || e.pageY ? (n.clientX = e.pageX, n.clientY = e.pageY) : (e.clientX || e.clientY) && (n.clientX = e.clientX + c.body.scrollLeft + l.scrollLeft, n.clientY = e.clientY + c.body.scrollTop + l.scrollTop), f.test(r) && (n.relatedTarget = e.relatedTarget || e[("mouseover" == r ? "from" : "to") + "Element"]), t
                        }
                    }, {
                        reg: /mouse.*(wheel|scroll)/i,
                        fix: function() {
                            return n
                        }
                    }, {
                        reg: /^text/i,
                        fix: function() {
                            return o
                        }
                    }, {
                        reg: /^touch|^gesture/i,
                        fix: function() {
                            return s
                        }
                    }, {
                        reg: /^message$/i,
                        fix: function() {
                            return a
                        }
                    }, {
                        reg: /^popstate$/i,
                        fix: function() {
                            return u
                        }
                    }, {
                        reg: /.*/,
                        fix: function() {
                            return e
                        }
                    }],
                    p = {},
                    h = function(e, t, n) {
                        if (arguments.length && (e = e || ((t.ownerDocument || t.document || t).parentWindow || r).event, this.originalEvent = e, this.isNative = n, this.isBean = !0, e)) {
                            var i, o, s, a, u, c = e.type,
                                l = e.target || e.srcElement;
                            if (this.target = l && 3 === l.nodeType ? l.parentNode : l, n) {
                                if (u = p[c], !u)
                                    for (i = 0, o = d.length; o > i; i++)
                                        if (d[i].reg.test(c)) {
                                            p[c] = u = d[i].fix;
                                            break
                                        }
                                for (a = u(e, this, c), i = a.length; i--;) !((s = a[i]) in this) && s in e && (this[s] = e[s])
                            }
                        }
                    };
                return h.prototype.preventDefault = function() {
                    this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1
                }, h.prototype.stopPropagation = function() {
                    this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0
                }, h.prototype.stop = function() {
                    this.preventDefault(), this.stopPropagation(), this.stopped = !0
                }, h.prototype.stopImmediatePropagation = function() {
                    this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function() {
                        return !0
                    }
                }, h.prototype.isImmediatePropagationStopped = function() {
                    return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
                }, h.prototype.clone = function(e) {
                    var t = new h(this, this.element, this.isNative);
                    return t.currentTarget = e, t
                }, h
            }(),
            E = function(e, t) {
                return f || t || e !== c && e !== r ? e : l
            },
            k = function() {
                var e = function(e, t, n, r) {
                        var i = function(n, i) {
                                return t.apply(e, r ? h.call(i, n ? 0 : 1).concat(r) : i)
                            },
                            o = function(n, r) {
                                return t.__beanDel ? t.__beanDel.ft(n.target, e) : r
                            },
                            s = n ? function(e) {
                                var t = o(e, this);
                                return n.apply(t, arguments) ? (e && (e.currentTarget = t), i(e, arguments)) : void 0
                            } : function(e) {
                                return t.__beanDel && (e = e.clone(o(e))), i(e, arguments)
                            };
                        return s.__beanDel = t.__beanDel, s
                    },
                    t = function(t, n, r, i, o, s, a) {
                        var u, c = x[n];
                        "unload" == n && (r = A(T, t, n, r, i)), c && (c.condition && (r = e(t, r, c.condition, s)), n = c.base || n), this.isNative = u = w[n] && !!t[d], this.customType = !f && !u && n, this.element = t, this.type = n, this.original = i, this.namespaces = o, this.eventType = f || u ? n : "propertychange", this.target = E(t, u), this[d] = !!this.target[d], this.root = a, this.handler = e(t, r, null, s)
                    };
                return t.prototype.inNamespaces = function(e) {
                    var t, n, r = 0;
                    if (!e) return !0;
                    if (!this.namespaces) return !1;
                    for (t = e.length; t--;)
                        for (n = this.namespaces.length; n--;) e[t] == this.namespaces[n] && r++;
                    return e.length === r
                }, t.prototype.matches = function(e, t, n) {
                    return !(this.element !== e || t && this.original !== t || n && this.handler !== n)
                }, t
            }(),
            S = function() {
                var e = {},
                    t = function(n, r, i, o, s, a) {
                        var u = s ? "r" : "$";
                        if (r && "*" != r) {
                            var c, l = 0,
                                f = e[u + r],
                                d = "*" == n;
                            if (!f) return;
                            for (c = f.length; c > l; l++)
                                if ((d || f[l].matches(n, i, o)) && !a(f[l], f, l, r)) return
                        } else
                            for (var p in e) p.charAt(0) == u && t(n, p.substr(1), i, o, s, a)
                    },
                    n = function(t, n, r, i) {
                        var o, s = e[(i ? "r" : "$") + n];
                        if (s)
                            for (o = s.length; o--;)
                                if (!s[o].root && s[o].matches(t, r, null)) return !0;
                        return !1
                    },
                    r = function(e, n, r, i) {
                        var o = [];
                        return t(e, n, r, null, i, function(e) {
                            return o.push(e)
                        }), o
                    },
                    i = function(t) {
                        var n = !t.root && !this.has(t.element, t.type, null, !1),
                            r = (t.root ? "r" : "$") + t.type;
                        return (e[r] || (e[r] = [])).push(t), n
                    },
                    o = function(n) {
                        t(n.element, n.type, null, n.handler, n.root, function(t, n, r) {
                            return n.splice(r, 1), t.removed = !0, 0 === n.length && delete e[(t.root ? "r" : "$") + t.type], !1
                        })
                    },
                    s = function() {
                        var t, n = [];
                        for (t in e) "$" == t.charAt(0) && (n = n.concat(e[t]));
                        return n
                    };
                return {
                    has: n,
                    get: r,
                    put: i,
                    del: o,
                    entries: s
                }
            }(),
            C = function(e) {
                n = arguments.length ? e : c.querySelectorAll ? function(e, t) {
                    return t.querySelectorAll(e)
                } : function() {
                    throw new Error("Bean: No selector engine installed")
                }
            },
            _ = function(e, t) {
                if (f || !t || !e || e.propertyName == "_on" + t) {
                    var n = S.get(this, t || e.type, null, !1),
                        r = n.length,
                        i = 0;
                    for (e = new j(e, this, !0), t && (e.type = t); r > i && !e.isImmediatePropagationStopped(); i++) n[i].removed || n[i].handler.call(this, e)
                }
            },
            O = f ? function(e, t, n) {
                e[n ? a : u](t, _, !1)
            } : function(e, t, n, r) {
                var i;
                n ? (S.put(i = new k(e, r || t, function(t) {
                    _.call(e, t, r)
                }, _, null, null, !0)), r && null == e["_on" + r] && (e["_on" + r] = 0), i.target.attachEvent("on" + i.eventType, i.handler)) : (i = S.get(e, r || t, _, !0)[0], i && (i.target.detachEvent("on" + i.eventType, i.handler), S.del(i)))
            },
            A = function(e, t, n, r, i) {
                return function() {
                    r.apply(this, arguments), e(t, n, i)
                }
            },
            T = function(e, t, n, r) {
                var i, o, a = t && t.replace(s, ""),
                    u = S.get(e, a, null, !1),
                    c = {};
                for (i = 0, o = u.length; o > i; i++) n && u[i].original !== n || !u[i].inNamespaces(r) || (S.del(u[i]), !c[u[i].eventType] && u[i][d] && (c[u[i].eventType] = {
                    t: u[i].eventType,
                    c: u[i].type
                }));
                for (i in c) S.has(e, c[i].t, null, !1) || O(e, c[i].t, !1, c[i].c)
            },
            P = function(e, t) {
                var r = function(t, r) {
                        for (var i, o = g(e) ? n(e, r) : e; t && t !== r; t = t.parentNode)
                            for (i = o.length; i--;)
                                if (o[i] === t) return t
                    },
                    i = function(e) {
                        var n = r(e.target, this);
                        n && t.apply(n, arguments)
                    };
                return i.__beanDel = {
                    ft: r,
                    selector: e
                }, i
            },
            N = f ? function(e, t, n) {
                var i = c.createEvent(e ? "HTMLEvents" : "UIEvents");
                i[e ? "initEvent" : "initUIEvent"](t, !0, !0, r, 1), n.dispatchEvent(i)
            } : function(e, t, n) {
                n = E(n, e), e ? n.fireEvent("on" + t, c.createEventObject()) : n["_on" + t]++
            },
            R = function(e, t, n) {
                var r, i, a, u, c = g(t);
                if (c && t.indexOf(" ") > 0) {
                    for (t = m(t), u = t.length; u--;) R(e, t[u], n);
                    return e
                }
                if (i = c && t.replace(s, ""), i && x[i] && (i = x[i].base), !t || c)(a = c && t.replace(o, "")) && (a = m(a, ".")), T(e, i, n, a);
                else if (v(t)) T(e, null, t);
                else
                    for (r in t) t.hasOwnProperty(r) && R(e, r, t[r]);
                return e
            },
            L = function(e, t, r, i) {
                var a, u, c, l, f, g, y; {
                    if (void 0 !== r || "object" != typeof t) {
                        for (v(r) ? (f = h.call(arguments, 3), i = a = r) : (a = i, f = h.call(arguments, 4), i = P(r, a, n)), c = m(t), this === p && (i = A(R, e, t, i, a)), l = c.length; l--;) y = S.put(g = new k(e, c[l].replace(s, ""), i, a, m(c[l].replace(o, ""), "."), f, !1)), g[d] && y && O(e, g.eventType, !0, g.customType);
                        return e
                    }
                    for (u in t) t.hasOwnProperty(u) && L.call(this, e, u, t[u])
                }
            },
            q = function(e, t, n, r) {
                return L.apply(null, g(n) ? [e, n, t, r].concat(arguments.length > 3 ? h.call(arguments, 5) : []) : h.call(arguments))
            },
            I = function() {
                return L.apply(p, arguments)
            },
            U = function(e, t, n) {
                var r, i, a, u, c, l = m(t);
                for (r = l.length; r--;)
                    if (t = l[r].replace(s, ""), (u = l[r].replace(o, "")) && (u = m(u, ".")), u || n || !e[d])
                        for (c = S.get(e, t, null, !1), n = [!1].concat(n), i = 0, a = c.length; a > i; i++) c[i].inNamespaces(u) && c[i].handler.apply(e, n);
                    else N(w[t], t, e);
                return e
            },
            H = function(e, t, n) {
                for (var r, i, o = S.get(t, n, null, !1), s = o.length, a = 0; s > a; a++) o[a].original && (r = [e, o[a].type], (i = o[a].handler.__beanDel) && r.push(i.selector), r.push(o[a].original), L.apply(null, r));
                return e
            },
            M = {
                on: L,
                add: q,
                one: I,
                off: R,
                remove: R,
                clone: H,
                fire: U,
                Event: j,
                setSelectorEngine: C,
                noConflict: function() {
                    return t[e] = i, this
                }
            };
        if (r.attachEvent) {
            var D = function() {
                var e, t = S.entries();
                for (e in t) t[e].type && "unload" !== t[e].type && R(t[e].element, t[e].type);
                r.detachEvent("onunload", D), r.CollectGarbage && r.CollectGarbage()
            };
            r.attachEvent("onunload", D)
        }
        return C(), M
    }), define("lodash/internals/defaultsIteratorOptions", ["../objects/keys"], function(e) {
        var t = {
            args: "object, source, guard",
            top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
            keys: e,
            loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
            bottom: "  }\n}"
        };
        return t
    }), define("lodash/objects/defaults", ["../internals/createIterator", "../internals/defaultsIteratorOptions"], function(e, t) {
        var n = e(t);
        return n
    }), define("lodash/internals/htmlEscapes", [], function() {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return e
    }), define("lodash/internals/escapeHtmlChar", ["./htmlEscapes"], function(e) {
        function t(t) {
            return e[t]
        }
        return t
    }), define("lodash/internals/reUnescapedHtml", ["./htmlEscapes", "../objects/keys"], function(e, t) {
        var n = RegExp("[" + t(e).join("") + "]", "g");
        return n
    }), define("lodash/utilities/escape", ["../internals/escapeHtmlChar", "../objects/keys", "../internals/reUnescapedHtml"], function(e, t, n) {
        function r(t) {
            return null == t ? "" : String(t).replace(n, e)
        }
        return r
    }), define("lodash/internals/escapeStringChar", [], function() {
        function e(e) {
            return "\\" + t[e]
        }
        var t = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
        return e
    }), define("lodash/internals/reInterpolate", [], function() {
        var e = /<%=([\s\S]+?)%>/g;
        return e
    }), define("lodash/utilities/templateSettings", ["./escape", "../internals/reInterpolate"], function(e, t) {
        var n = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: t,
            variable: "",
            imports: {
                _: {
                    escape: e
                }
            }
        };
        return n
    }), define("lodash/objects/values", ["./keys"], function(e) {
        function t(t) {
            for (var n = -1, r = e(t), i = r.length, o = Array(i); ++n < i;) o[n] = t[r[n]];
            return o
        }
        return t
    }), define("lodash/utilities/template", ["../objects/defaults", "./escape", "../internals/escapeStringChar", "../objects/keys", "../internals/reInterpolate", "./templateSettings", "../objects/values"], function(e, t, n, r, i, o, s) {
        function a(t, a, m) {
            var g = o.imports._.templateSettings || o;
            t = String(t || ""), m = e({}, m, g);
            var v, y = e({}, m.imports, g.imports),
                b = r(y),
                w = s(y),
                x = 0,
                j = m.interpolate || p,
                E = "__p += '",
                k = RegExp((m.escape || p).source + "|" + j.source + "|" + (j === i ? d : p).source + "|" + (m.evaluate || p).source + "|$", "g");
            t.replace(k, function(e, r, i, o, s, a) {
                return i || (i = o), E += t.slice(x, a).replace(h, n), r && (E += "' +\n__e(" + r + ") +\n'"), s && (v = !0, E += "';\n" + s + ";\n__p += '"), i && (E += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), x = a + e.length, e
            }), E += "';\n";
            var S = m.variable,
                C = S;
            C || (S = "obj", E = "with (" + S + ") {\n" + E + "\n}\n"), E = (v ? E.replace(c, "") : E).replace(l, "$1").replace(f, "$1;"), E = "function(" + S + ") {\n" + (C ? "" : S + " || (" + S + " = {});\n") + "var __t, __p = '', __e = _.escape" + (v ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + E + "return __p\n}";
            try {
                var _ = Function(b, "return " + E).apply(u, w)
            } catch (O) {
                throw O.source = E, O
            }
            return a ? _(a) : (_.source = E, _)
        }
        var u, c = /\b__p \+= '';/g,
            l = /\b(__p \+=) '' \+/g,
            f = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            d = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            p = /($^)/,
            h = /['\n\r\t\u2028\u2029\\]/g;
        return a
    }), define("common/utils/template", ["lodash/utilities/template"], function(e) {
        return e
    }), define("common/views/svg", [], function() {
        function e(e, t, n) {
            return t && (Array.isArray(t) ? e = e.replace(/class="/, "$&" + t.join(" ") + " ") : window.console && window.console.error && window.console.error("Classes for inlineSvg must be an array: ", t)), n && (e = e.replace(/<span /, '<span title="' + n + '" ')), e
        }
        return e
    }), define("common/utils/fastdom-promise", ["fastdom", "Promise"], function(e, t) {
        function n(e) {
            return function(n, r) {
                return new t(function(t, i) {
                    e(function() {
                        try {
                            t(n.call(this))
                        } catch (e) {
                            i(e)
                        }
                    }, r)
                })
            }
        }
        return {
            read: n(e.read.bind(e)),
            write: n(e.write.bind(e))
        }
    }), define("text!common/views/giraffe-message.html", [], function() {
        return '<div class="giraffe">\n    <h2 class="giraffe--heading"><%=linkText%></h2>\n    <p class="giraffe--copy">\n    <%= copy %>\n    </p>\n    <a id="giraffe-contribute" href="<%=linkHref%>" class="button button--primary button--large button--giraffe" data-link-name="<%=linkName%>">Contribute <%= svg %></a>\n</div>\n'
    }), define("inlineSvg!svgs/icon/arrow-right", function() {
        return '<span class="inline-arrow-right inline-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M22.8 14.6L15.2 7l-.7.7 5.5 6.6H6v1.5h14l-5.5 6.6.7.7 7.6-7.6v-.9"/></svg></span>'
    }), define("common/modules/experiments/tests/giraffe", ["bean", "qwery", "common/utils/$", "common/utils/template", "common/views/svg", "common/utils/fastdom-promise", "common/utils/mediator", "text!common/views/giraffe-message.html", "inlineSvg!svgs/icon/arrow-right"], function(e, t, n, r, i, o, s, a, u) {
        return function() {
            this.id = "Giraffe", this.start = "2016-07-03", this.expiry = "2016-08-01", this.author = "Alex Ware", this.description = "Add a button allowing readers to contribute money.", this.showForSensitive = !1, this.audience = 0, this.audienceOffset = 0, this.successMeasure = "Determine the best message for driving contributions.", this.audienceCriteria = "All users", this.dataLinkNames = "", this.idealOutcome = "", this.canRun = function() {
                return "UK" == window.guardian.config.page.edition
            };
            var c = function(e, t, c) {
                    var l = n.create(r(a, {
                        linkText: e,
                        linkName: "contribute",
                        linkHref: t,
                        copy: c,
                        svg: i(u, ["button--giraffe__icon"])
                    }));
                    return o.write(function() {
                        var e = n(".submeta");
                        l.insertBefore(e), s.emit("giraffe:insert")
                    })
                },
                l = function(n) {
                    s.on("giraffe:insert", function() {
                        e.on(t("#giraffe-contribute")[0], "click", function() {
                            n()
                        })
                    })
                };
            this.variants = [{
                id: "everyone",
                test: function() {
                    c("If everyone were to chip in, the Guardian's future would be more secure.", "https://membership.theguardian.com/contribute?INTCMP=article-1-everyone", "Please support the Guardian and independent journalism")
                },
                success: function(e) {
                    l(e)
                }
            }, {
                id: "coffee",
                test: function() {
                    c("Do you want the news with your coffee? Or do you just want coffee? Quality journalism costs. Please contribute", "https://membership.theguardian.com/contribute?INTCMP=article-1-coffee", "Please support the Guardian and independent journalism")
                },
                success: function(e) {
                    l(e)
                }
            }, {
                id: "heritage",
                test: function() {
                    c("From the Peterloo massacre to the Panama Papers, we've been on your side for almost 200 years. Contribute to the Guardian's future today", "https://membership.theguardian.com/contribute?INTCMP=article-1-heritage", "Please support the Guardian and independent journalism")
                },
                success: function(e) {
                    l(e)
                }
            }, {
                id: "global",
                test: function() {
                    c("By the time you've had your morning tea, reporters in Rio, Beijing, Dakar and Paris, have already filed their stories. Covering the world's news isn't cheap. Please chip in a few pounds", "https://membership.theguardian.com/contribute?INTCMP=article-1-global", "Please support the Guardian and independent journalism")
                },
                success: function(e) {
                    l(e)
                }
            }]
        }
    }), define("common/modules/experiments/ab", ["common/utils/report-error", "common/utils/config", "common/utils/cookies", "common/utils/mediator", "common/utils/storage", "common/modules/analytics/mvt-cookie", "lodash/functions/memoize", "lodash/utilities/noop", "common/modules/experiments/tests/live-blog-chrome-notifications-internal", "common/modules/experiments/tests/live-blog-chrome-notifications-prod", "common/modules/experiments/tests/clever-friend-brexit", "common/modules/experiments/tests/participation-discussion-test", "common/modules/experiments/tests/join-discussion-after-poll", "common/modules/experiments/tests/hosted-autoplay", "common/modules/experiments/tests/giraffe"], function(e, t, n, r, i, o, s, a, u, c, l, f, d, p, h) {
        function m() {
            return i.local.get($) || {}
        }

        function g(e) {
            var t = m();
            return t[e.id]
        }

        function v(e, t) {
            var n = m();
            n[e.id] = {
                variant: t
            }, i.local.set($, n)
        }

        function y(e) {
            var t = m(),
                n = Object.keys(t).filter(function(t) {
                    return t !== e.id
                }).reduce(function(e, n) {
                    return e[n] = t[n], e
                }, {});
            i.local.set($, n)
        }

        function b() {
            Object.keys(m()).forEach(function(e) {
                if ("undefined" == typeof t.switches["ab" + e]) y({
                    id: e
                });
                else {
                    var n = D.some(function(t) {
                        return t.id === e
                    });
                    n || y({
                        id: e
                    })
                }
            })
        }

        function w() {
            var e = new Date;
            return D.filter(function(t) {
                var n = e - new Date(t.expiry) > 0;
                return n ? (y(t), !1) : !0
            })
        }

        function x() {
            var e = new Date;
            return D.filter(function(t) {
                return e - new Date(t.expiry) > 0
            })
        }

        function j(e) {
            var n = new Date - new Date(e.expiry) > 0,
                r = t.page.shouldHideAdverts;
            return (r ? e.showForSensitive : !0) && e.canRun() && !n && L(e)
        }

        function E(e) {
            return e.id
        }

        function k(e) {
            var t = D.map(E).indexOf(e);
            return -1 !== t ? D[t] : ""
        }

        function S() {
            var e = m(),
                n = [];
            return Object.keys(e).map(k).filter(j).forEach(function(t) {
                n.push("AB | " + t.id + " | " + e[t.id].variant)
            }), Object.keys(t.tests).filter(function(e) {
                return 0 === e.toLowerCase().indexOf("cm")
            }).forEach(function(e) {
                n.push("AB | " + e + " | variant")
            }), M().forEach(function(e) {
                n.push("AB | " + e + " | inTest")
            }), n.join(",")
        }

        function C(e, t) {
            return {
                variantName: e,
                complete: t
            }
        }

        function _() {
            try {
                var t = {};
                return w().filter(g).filter(j).forEach(function(e) {
                    var n = q(e.id);
                    n && "notintest" !== n && (t[e.id] = C(n, "false"))
                }), M().forEach(function(e) {
                    t["ab" + e] = C("inTest", "false")
                }), t
            } catch (n) {
                return e(n, !1), {}
            }
        }

        function O() {
            A(_())
        }

        function A(e) {
            require(["ophan/ng"], function(t) {
                t.record({
                    abTestRegister: e
                })
            })
        }

        function T(e, t) {
            var n = {};
            return n[e.id] = C(t, "true"),
                function() {
                    A(n)
                }
        }

        function P(e) {
            if (g(e) && j(e)) {
                var t = m(),
                    n = t[e.id].variant,
                    r = H(e, n);
                r ? r.test() : "notintest" === n && e.notInTest && e.notInTest()
            }
        }

        function N(e) {
            j(e) && !g(e) && v(e, F(e))
        }

        function R(e) {
            var t = F(e);
            if ("notintest" !== t) {
                var n = H(e, t),
                    r = n.success || a;
                r(T(e, t))
            }
        }

        function L(e) {
            return t.switches["ab" + e.id]
        }

        function q(e) {
            var t = m()[e];
            return t && t.variant
        }

        function I(e, t) {
            var n = m();
            n[e] && (n[e].variant = t, i.local.set($, n))
        }

        function U(e, t) {
            var n = k(e);
            return n && g(n) && q(e) === t && j(n)
        }

        function H(e, t) {
            var n = e.variants.map(E).indexOf(t);
            return -1 === n ? null : e.variants[n]
        }

        function M() {
            return Object.keys(t.tests).filter(function(e) {
                return !!t.tests[e]
            })
        }
        var D = [new u, new c, new l, new f, new d, new p, new h],
            $ = "gu.ab.participations",
            F = s(function(e) {
                var t = o.getMvtNumValues() * e.audienceOffset,
                    n = t + o.getMvtNumValues() * e.audience,
                    r = o.getMvtValue();
                if (r && r > t && n >= r) {
                    var i = e.variants.map(E);
                    return i[r % i.length]
                }
                return "notintest"
            }, E),
            B = {
                addTest: function(e) {
                    D.push(e)
                },
                clearTests: function() {
                    D = []
                },
                segment: function() {
                    w().forEach(function(e) {
                        N(e)
                    })
                },
                forceSegment: function(e, t) {
                    w().filter(function(t) {
                        return t.id === e
                    }).forEach(function(e) {
                        v(e, t)
                    })
                },
                forceRegisterCompleteEvent: function(e, t) {
                    var n = k(e),
                        r = n && n.variants.filter(function(e) {
                            return e.id.toLowerCase() === t.toLowerCase()
                        })[0],
                        i = r && r.success || a;
                    i(T(n, t))
                },
                segmentUser: function() {
                    var e, t = /^#ab/.test(window.location.hash);
                    t ? (e = window.location.hash.replace("#ab-", "").split(","), e.forEach(function(e) {
                        var t, n, r;
                        t = e.split("="), n = t[0], r = t[1], B.forceSegment(n, r), B.forceRegisterCompleteEvent(n, r)
                    })) : B.segment(), b()
                },
                run: function() {
                    w().forEach(P)
                },
                registerCompleteEvents: function() {
                    w().forEach(R)
                },
                isEventApplicableToAnActiveTest: function(e) {
                    return Object.keys(m()).some(function(t) {
                        var n = k(t).events;
                        return n.some(function(t) {
                            return 0 === e.indexOf(t)
                        })
                    })
                },
                getActiveTestsEventIsApplicableTo: function(e) {
                    var t = e.tag;
                    return t && w().filter(function(e) {
                        var n = e.events;
                        return n && n.some(function(e) {
                            return 0 === t.indexOf(e)
                        })
                    }).map(E)
                },
                getAbLoggableObject: _,
                getParticipations: m,
                isParticipating: g,
                getTest: k,
                makeOmnitureTag: S,
                trackEvent: O,
                getExpiredTests: x,
                getActiveTests: w,
                getTestVariantId: q,
                setTestVariant: I,
                getVariant: H,
                testCanBeRun: function(e) {
                    return "string" == typeof e ? (e = k(e), e && j(e)) : e.id && e.expiry && j(e)
                },
                isInVariant: function(e, t) {
                    return B.getParticipations()[e] && B.getParticipations()[e].variant === t && B.testCanBeRun(e)
                },
                shouldRunTest: U,
                reset: function() {
                    D = [], F.cache = {}
                }
            };
        return B
    }), window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var e, t, n, r = window.styleMedia || window.media;
        return r || (e = document.createElement("style"), t = document.getElementsByTagName("script")[0], n = null, e.type = "text/css", e.id = "matchmediajs-test", t.parentNode.insertBefore(e, t), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, r = {
                matchMedium: function(t) {
                    var r = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return e.styleSheet ? e.styleSheet.cssText = r : e.textContent = r, "1px" === n.width
                }
            }),
            function(e) {
                return {
                    matches: r.matchMedium(e || "all"),
                    media: e || "all"
                }
            }
    }()), define("picturefill", ["fastdom"], function(e) {
        return function(t, n, r) {
            "use strict";

            function i(r) {
                var i, a, u, c, l, f = r || {};
                i = f.elements || o.getAllElements, e.read(function() {
                    o.viewportWidth = Math.max(t.innerWidth || 0, n.documentElement.clientWidth);
                    for (var e = 0, r = i.length; r > e; e++)
                        if (a = i[e], u = a.parentNode, c = void 0, l = void 0, "IMG" === a.nodeName.toUpperCase() && (a[o.ns] || (a[o.ns] = {}), f.reevaluate || !a[o.ns].evaluated)) {
                            if (u && "PICTURE" === u.nodeName.toUpperCase()) {
                                if (o.removeVideoShim(u), c = o.getMatch(a, u), c === !1) continue
                            } else c = void 0;
                            (u && "PICTURE" === u.nodeName.toUpperCase() || !o.sizesSupported && a.srcset && s.test(a.srcset)) && o.dodgeSrcset(a), c ? (l = o.processSourceSet(c), o.applyBestCandidate(l, a)) : (l = o.processSourceSet(a), (void 0 === a.srcset || a[o.ns].srcset) && o.applyBestCandidate(l, a)), a[o.ns].evaluated = !0
                        }
                })
            }
            if (t.HTMLPictureElement) return function() {};
            n.createElement("picture");
            var o = t.picturefill || {},
                s = /\s+\+?\d+(e\d+)?w/;
            return o.ns = "picturefill",
                function() {
                    o.srcsetSupported = "srcset" in r, o.sizesSupported = "sizes" in r, o.curSrcSupported = "currentSrc" in r
                }(), o.trim = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }, o.makeUrl = function() {
                    var e = n.createElement("a");
                    return function(t) {
                        return e.href = t, e.href
                    }
                }(), o.canMatchMedia = t.matchMedia && t.matchMedia("(min-width: 0px)").matches, o.matchesMedia = function(e) {
                    return o.canMatchMedia ? t.matchMedia && t.matchMedia(e).matches : !0
                }, o.getDpr = function() {
                    return t.devicePixelRatio || 1
                }, o.getWidthFromLength = function(e) {
                    return e = e.replace("vw", "%"), e = e.indexOf("%") > -1 ? o.viewportWidth * parseInt(e, 10) * .01 : parseInt(e, 10)
                }, o.parseSize = function(e) {
                    var t = /(\([^)]+\))?\s*(.+)/g.exec(e);
                    return {
                        media: t && t[1],
                        length: t && t[2]
                    }
                }, o.findWidthFromSourceSize = function(e) {
                    var t, n, r, i, s, a, u, c = o.trim(e).split(/\s*,\s*/);
                    for (n = 0, r = c.length; r > n && (i = c[n], s = o.parseSize(i), a = s.length, u = s.media, !a || u && !o.matchesMedia(u) || !(t = o.getWidthFromLength(a))); n++);
                    return t || o.viewportWidth
                }, o.parseSrcset = function(e) {
                    for (var t, n, r, i, o, s = [];
                        "" !== e;) e = e.replace(/^\s+/g, ""), t = e.search(/\s/g), r = null, -1 !== t ? (n = e.slice(0, t), i = n.slice(-1), ("," === i || "" === n) && (n = n.replace(/,+$/, ""), r = ""), e = e.slice(t + 1), null === r && (o = e.indexOf(","), -1 !== o ? (r = e.slice(0, o), e = e.slice(o + 1)) : (r = e, e = ""))) : (n = e, e = ""), (n || r) && s.push({
                        url: n,
                        descriptor: r
                    });
                    return s
                }, o.parseDescriptor = function(e, t) {
                    var n, r, i, s, a, u, c = t || "100vw",
                        l = e && e.replace(/(^\s+|\s+$)/g, ""),
                        f = o.findWidthFromSourceSize(c);
                    if (l)
                        for (r = l.split(" "), i = r.length - 1; i >= 0; i--) s = r[i], u = s && s.slice(s.length - 1), "h" !== u && "w" !== u || o.sizesSupported ? "x" === u && (a = s && parseFloat(s, 10), n = a && !isNaN(a) ? a : 1) : n = parseFloat(parseInt(s, 10) / f);
                    return n || 1
                }, o.getCandidatesFromSourceSet = function(e, t) {
                    var n, r, i, s = o.parseSrcset(e),
                        a = [];
                    for (r = 0, i = s.length; i > r; r++) n = s[r], a.push({
                        url: n.url,
                        resolution: o.parseDescriptor(n.descriptor, t)
                    });
                    return a
                }, o.dodgeSrcset = function(e) {
                    e.srcset && (e[o.ns].srcset = e.srcset, e.srcset = "", e.setAttribute("data-pfsrcset", e[o.ns].srcset))
                }, o.processSourceSet = function(e) {
                    var t = e.getAttribute("srcset"),
                        n = e.getAttribute("sizes"),
                        r = [];
                    return "IMG" === e.nodeName.toUpperCase() && e[o.ns] && e[o.ns].srcset && (t = e[o.ns].srcset), t && (r = o.getCandidatesFromSourceSet(t, n)), r
                }, o.applyBestCandidate = function(t, n) {
                    var r, i, s, a;
                    for (t.sort(o.ascendingSort), i = t.length, s = t[i - 1], a = 0; i > a; a++)
                        if (r = t[a], r.resolution >= o.getDpr()) {
                            s = r;
                            break
                        }
                    s && (s.url = o.makeUrl(s.url), n.src !== s.url && e.write(function() {
                        n.src = s.url, o.curSrcSupported || (n.currentSrc = n.src)
                    }))
                }, o.ascendingSort = function(e, t) {
                    return e.resolution - t.resolution
                }, o.removeVideoShim = function(e) {
                    var t = e.getElementsByTagName("video");
                    if (t.length) {
                        for (var n = t[0], r = n.getElementsByTagName("source"); r.length;) e.insertBefore(r[0], n);
                        n.parentNode.removeChild(n)
                    }
                }, o.getAllElements = function() {
                    var e, t, r, i = [],
                        s = n.getElementsByTagName("img");
                    for (t = 0, r = s.length; r > t; t++) e = s[t], ("PICTURE" === e.parentNode.nodeName.toUpperCase() || null !== e.getAttribute("srcset") || e[o.ns] && null !== e[o.ns].srcset) && i.push(e);
                    return i
                }, o.getMatch = function(e, t) {
                    for (var n, r = t.childNodes, i = 0, s = r.length; s > i; i++) {
                        var a = r[i];
                        if (1 === a.nodeType) {
                            if (a === e) return n;
                            if ("SOURCE" === a.nodeName.toUpperCase()) {
                                null !== a.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                                var u = a.getAttribute("media");
                                if (a.getAttribute("srcset") && (!u || o.matchesMedia(u))) {
                                    n = a;
                                    break
                                }
                            }
                        }
                    }
                    return n
                }, i._ = o, i
        }(window, window.document, new window.Image)
    }), define("common/modules/ui/images", ["qwery", "picturefill", "common/utils/mediator"], function(e, t, n) {
        var r = {
            upgradePictures: function(n) {
                t({
                    elements: e("img[srcset], picture img", n || document)
                })
            },
            listen: function() {
                n.addListeners({
                    "ui:images:upgradePictures": r.upgradePictures
                })
            }
        };
        return r
    }), define("common/utils/robust", ["common/utils/report-error"], function(e) {
        function t(e) {
            return e.map(function(e) {
                return i.bind(this, e[0], e[1])
            })
        }
        var n = function(e) {
                var t;
                try {
                    e()
                } catch (n) {
                    t = n
                }
                return t
            },
            r = function(t, n, r) {
                window.console && window.console.warn && window.console.warn("Caught error.", n.stack), r || (r = e), r(n, {
                    module: t
                }, !1)
            },
            i = function(e, t, i) {
                var o = n(t);
                o && r(e, o, i)
            },
            o = function(e) {
                e.forEach(function(e) {
                    var t = e[0],
                        n = e[1];
                    i(t, n)
                })
            };
        return {
            catchErrorsAndLog: i,
            catchErrorsAndLogAll: o,
            makeBlocks: t,
            log: r
        }
    }), define("common/utils/user-timing", [], function() {
        function e(e) {
            t && "mark" in t && t.mark("gu." + e)
        }
        var t = window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance;
        return {
            mark: e
        }
    }), define("bootstraps/standard/main", ["raven", "qwery", "fastdom", "common/modules/user-prefs", "common/modules/experiments/ab", "common/modules/ui/images", "common/utils/storage", "common/utils/ajax", "common/utils/mediator", "common/modules/identity/api", "common/utils/url", "common/utils/cookies", "common/utils/robust", "common/utils/user-timing"], function(e, t, n, r, i, o, s, a, u, c, l, f, d, p) {
        return function() {
            function h() {
                w || (w = !0, n.read(function() {
                    u.emitEvent("window:throttledScroll"), w = !1
                }))
            }
            var m = window.guardian,
                g = m.config;
            p.mark("standard start"), e.config("https://" + g.page.sentryPublicApiKey + "@" + g.page.sentryHost, {
                whitelistUrls: [/localhost/, /assets\.guim\.co\.uk/, /ophan\.co\.uk/],
                tags: {
                    edition: g.page.edition,
                    contentType: g.page.contentType,
                    revisionNumber: g.page.revisionNumber,
                    loaderType: "Curl"
                },
                dataCallback: function(e) {
                    return e.culprit && (e.culprit = e.culprit.replace(/\/[a-z\d]{32}(\/[^\/]+)$/, "$1")), e.tags.origin = /j.ophan.co.uk/.test(e.culprit) ? "ophan" : "app", e
                },
                shouldSendCallback: function(e) {
                    var t = g.page.isDev;
                    return t && window.console && window.console.warn && window.console.warn("Raven captured error.", e), g.switches.enableSentryReporting && Math.random() < .1 && !t
                }
            }), e.install();
            var v = window.onerror;
            window.onerror = function(e, t, n, r, i) {
                i && i.reported || v.apply(window, arguments)
            }, window.addEventListener || (window.addEventListener = window.attachEvent), window.addEventListener("unhandledRejection", function(t) {
                var n = t.detail.reason;
                n && !n.reported && e.captureException(n)
            }), /Article|Interactive|LiveBlog/.test(g.page.contentType) && t("figure.interactive").forEach(function(e) {
                require([e.getAttribute("data-interactive")], function(t) {
                    n.defer(function() {
                        d.catchErrorsAndLog("interactive-bootstrap", function() {
                            t.boot(e, document, g, u)
                        })
                    })
                }), require(["ophan/ng"], function(t) {
                    var n = e.querySelector("a"),
                        r = n && n.href;
                    r && t.trackComponentAttention(r, e)
                })
            }), d.catchErrorsAndLog("ab-tests", function() {
                m.isEnhanced && (i.segmentUser(), d.catchErrorsAndLog("ab-tests-run", i.run), d.catchErrorsAndLog("ab-tests-registerCompleteEvents", i.registerCompleteEvents), i.trackEvent())
            });
            var y = function() {
                var e = l.getUrlVars();
                "clear" === e.adtest ? f.remove("adtest") : e.adtest && f.add("adtest", encodeURIComponent(e.adtest), 10)
            };
            y(), g.page.isFront && (document.addEventListener || (window.onload = o.upgradePictures)), o.upgradePictures(), o.listen();
            var b;
            m.isEnhanced && (b = s.local.get("gu.alreadyVisited") || 0, s.local.set("gu.alreadyVisited", b + 1));
            var w = !1;
            if (window.addEventListener("scroll", r.get("use-idle-callback") && "requestIdleCallback" in window ? function() {
                    window.requestIdleCallback(h)
                } : h), require(["ophan/ng"], function(e) {
                    e.setEventEmitter(u)
                }), g.page.requiresMembershipAccess) {
                var x = g.page.membershipUrl,
                    j = g.page.membershipAccess,
                    E = -1 !== j.indexOf("paid-members-only"),
                    k = x + "/choose-tier?membershipAccess=" + j,
                    S = function() {
                        window.location.href = k
                    };
                c.isUserLoggedIn() ? a({
                    url: x + "/user/me",
                    type: "json",
                    crossOrigin: !0,
                    withCredentials: !0
                }).then(function(e) {
                    var t = E ? !!e.tier && e.isPaidTier : !!e.tier;
                    t ? n.write(function() {
                        document.body.classList.remove("has-membership-access-requirement")
                    }) : S()
                }).fail(function() {
                    S()
                }) : S()
            }
            c.init();
            try {
                "repeat" in String.prototype && !g.page.isDev && window.console.log("\n%cHello.\n\n%cWe are hiring – ever thought about joining us? \n%chttp://developers.theguardian.com/join-the-team.html%c \n\n", "font-family: Georgia, serif; font-size: 32px; color: #005689", "font-family: Georgia, serif; font-size: 16px; color: #767676", "font-family: Helvetica Neue, sans-serif; font-size: 11px; text-decoration: underline; line-height: 1.2rem; color: #767676", "")
            } catch (C) {}
            p.mark("standard end")
        }
    }), require(["boot"]);
//# sourceMappingURL=boot.js.map