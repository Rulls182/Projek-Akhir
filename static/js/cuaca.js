! function () {
    "use strict";
    var e = {},
        t = {};

    function n(i) {
        var o = t[i];
        if (void 0 !== o) return o.exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i](r, r.exports, n), r.exports
    }
    n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();

    function i(e, t, n, i) {
        return new(n || (n = Promise))((function (o, r) {
            function s(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function a(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }
            c((i = i.apply(e, t || [])).next())
        }))
    }
    Object.create;
    Object.create;
    class o {
        constructor(e) {
            this.searchParams = Object.create(null), this.parseQueryString(e)
        }
        set(e, t) {
            return null != t && (this.searchParams[e] = t), this
        }
        get(e) {
            return this.searchParams[e]
        }
        delete(e) {
            delete this.searchParams[e]
        }
        toString() {
            const e = Object.keys(this.searchParams);
            return e.length ? e.sort().map((e => `${e}=${this.searchParams[e]}`)).join("&") : ""
        }
        parseQueryString(e) {
            e && ("?" === e.charAt(0) && (e = e.substring(1)), e.split("&").forEach((e => {
                const t = e.split("="),
                    n = t[0];
                this.get(n) || (this.searchParams[n] = t[1])
            })))
        }
    }

    function r(e) {
        try {
            if (e) return JSON.parse(e)
        } catch (e) {}
        return null
    }

    function s(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {}
    }

    function a() {
        return !("undefined" == typeof window || !window.document || !window.document.createElement || window.isRenderServiceEnv)
    }
    const c = "Authorization",
        d = "UserAuthToken";
    var u, l;
    ! function (e) {
        e.Presentation = "presentation"
    }(u || (u = {})),
    function (e) {
        e.Unknown = "Unknown", e.Portrait = "Portrait", e.Landscape = "Landscape"
    }(l || (l = {}));
    var h, g, p, f, m;

    function w() {
        var e;
        return a() ? r(document.head.dataset.clientSettings || (null === (e = document.getElementsByClassName("peregrine-widget-settings")[0]) || void 0 === e ? void 0 : e.getAttribute("data-client-settings"))) : null
    }
    let S;

    function y(e, t) {
        if (!e) return null;
        if (t) return function (e) {
            const t = document.cookie.match(`\\b${e}=([^;]*)`);
            return t ? s(t[1]) : null
        }(e);
        if (!S) {
            const e = "undefined" != typeof document && document.cookie.split("; ");
            S = {};
            const t = e && e.length;
            for (let n = 0; n < t; n++) {
                const t = e[n].indexOf("=");
                S[e[n].slice(0, t).toLocaleLowerCase()] = s(e[n].slice(t + 1))
            }
        }
        const n = e.toLocaleLowerCase();
        return S[n] || null
    }

    function v(e) {
        const t = y(e);
        return t && encodeURIComponent(t) || null
    }

    function b(e) {
        let t, n = !1;
        const i = function () {
            return n || (n = !0, t = e()), t
        };
        return i.cache = {
            clear: () => {
                n = !1, t = void 0
            }
        }, i
    }! function (e) {
        e[e.Undefined = 0] = "Undefined", e[e.Basic = 1] = "Basic", e[e.Advanced = 2] = "Advanced", e[e.Premium = 3] = "Premium"
    }(h || (h = {})),
    function (e) {
        e.Init = "init", e.Config = "config", e.Targeted = "targeted", e.Sticky = "sticky", e.NoSticky = "no_sticky", e.Admin = "admin", e.Forced = "forced", e.Manual = "manual"
    }(g || (g = {})),
    function (e) {
        e[e.Unknown = 0] = "Unknown", e[e.NotSignedIn = 1] = "NotSignedIn", e[e.SignedIn = 2] = "SignedIn"
    }(p || (p = {})),
    function (e) {
        e.MSA = "MSA", e.AAD = "AAD", e.UNSUPPORTED_SOVEREIGNTY = "UNSUPPORTED_SOVEREIGNTY"
    }(f || (f = {})),
    function (e) {
        e[e.NonAadAccount = 0] = "NonAadAccount", e[e.AadAccount = 1] = "AadAccount", e[e.Unknown = 2] = "Unknown"
    }(m || (m = {}));
    const R = "currentaccount",
        k = b((() => {
            const e = y(R, !0),
                t = e && r(e),
                {
                    login_hint: n
                } = t || {};
            return n && t
        })),
        T = b((() => !!y(R)));
    let E = new class {
        constructor() {
            a() ? (this.isDebugEnabled = (function (e, t) {
                const n = t.replace(/[[\]]/g, "\\$&"),
                    i = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(e);
                if (!i) return null;
                const o = i[2];
                return decodeURIComponent(o.replace(/\+/g, " ")) || ""
            }(window.location.href, "debug") || "").toLowerCase() in {
                1: 1,
                true: 1
            }, this.isDebugEnabled && !n.g.TEST_ENV && (window.webpackRequire = n)) : this.isDebugEnabled = !1
        }
        getLoggingService() {
            return null
        }
        isDebug() {
            return this.isDebugEnabled
        }
        setDebug(e) {
            this.isDebugEnabled = e
        }
        setTags(e) {}
        log(e, t) {
            this.isDebug() && console.info(e)
        }
        logError(e) {
            console.error(e)
        }
        logCallback(e) {
            this.isDebug() && console.info(e())
        }
        logObjects(...e) {
            this.isDebug() && console.log(...e)
        }
        logSingleObject(e, t) {
            this.isDebug() && console.log(e)
        }
    };
    let C, P = new class extends class {
        constructor(e) {
            this.storage = e
        }
        get supported() {
            return !!this.storage
        }
        getItem(e) {
            if (this.supported) return this.storage.getItem(e)
        }
        getObject(e, t) {
            const n = this.getItem(e);
            if (null != n) {
                const e = r(n);
                if (null != e) return e
            }
            return t
        }
        key(e) {
            if (this.supported && e >= 0) return this.storage.key(e)
        }
        keys() {
            return this.supported ? Object.keys(this.storage) : []
        }
        setObject(e, t) {
            void 0 !== t ? this.setItem(e, JSON.stringify(t)) : this.removeItem(e)
        }
        removeObject(e) {
            const t = this.removeItem(e);
            if (null != t) return r(t)
        }
        setItem(e, t, n = !0) {
            if (this.supported) try {
                if (!t) throw "Attempted to store null/undefined value: " + t;
                this.storage.setItem(e, t)
            } catch (e) {
                if (!n) throw e;
                E.logError(e)
            } else if (!n) throw new Error("WebStorage not supported")
        }
        get length() {
            if (this.supported) return this.storage.length
        }
        removeItem(e) {
            if (this.supported) {
                const t = this.getItem(e);
                return this.storage.removeItem(e), t
            }
        }
        removeSubstringKeys(e) {
            if (!this.supported || !e) return;
            const t = [];
            for (let n = 0; n < this.storage.length; n++) {
                const i = this.key(n);
                i && i.includes(e) && t.push(i)
            }
            for (let e = 0; e < t.length; e++) this.removeItem(t[e])
        }
    } {
        constructor() {
            let e = null;
            if (a()) try {
                e = localStorage
            } catch (e) {}
            super(e)
        }
    };

    function I(e) {
        return !C && a() && (C = A(document.head.dataset.info || "")), C && C.has(e)
    }

    function A(e) {
        const t = (e || "").replace(/(^f:|;.*$)/g, "").split(",");
        return new Set(t)
    }
    const O = "1s-tokens",
        q = 12096e5;
    var H;
    let D, x;

    function N() {
        return D = _(), D && D.accessToken ? D : void 0
    }

    function F() {
        if (D = _(), !D) return "notAvailable";
        const e = D.expiresOn,
            t = new Date(e),
            n = "expired";
        if (!t.getTime()) return n;
        const i = new Date,
            o = "valid";
        if (t > i) return o;
        if (I("prg-noext")) return n; {
            const e = k();
            if (e && e.account_type === f.MSA) {
                if (new Date(t.getTime() + q) > i) return o
            }
        }
        return n
    }

    function _() {
        return D = D || void 0 === D && P.getObject(O) || null, D
    }! function (e) {
        e.NotAvailable = "notAvailable", e.Expired = "expired", e.Valid = "valid"
    }(H || (H = {}));
    const W = [0, 656, 980, 1304],
        M = [0, 540, 768, 1084, 1400, 1779];

    function L(e, t = M) {
        for (let n = t.length - 1; n >= 0; n--)
            if (e >= t[n]) return n
    }
    const j = {
        ver: "0.1.0",
        spec: {
            innerWidth: {
                clientValue: () => window.innerWidth
            },
            innerHeight: {
                clientValue: () => window.innerHeight
            },
            outerWidth: {
                clientValue: () => window.outerWidth
            },
            breakpoint: {
                clientValue: () => L(window.innerWidth, W)
            },
            locationHash: {
                clientValue: () => window.location.hash
            },
            locationHref: {
                clientValue: () => window.location.href
            },
            locationHost: {
                clientValue: () => window.location.host
            },
            locationHostName: {
                clientValue: () => window.location.hostname
            },
            locationOrigin: {
                clientValue: () => window.location.origin
            },
            locationPathName: {
                clientValue: () => window.location.pathname
            },
            locationProtocol: {
                clientValue: () => window.location.protocol
            },
            locationSearch: {
                clientValue: () => window.location.search
            },
            screenTop: {
                clientValue: () => window.screenTop
            },
            screenY: {
                clientValue: () => window.screenY
            },
            canUseCssGrid: {
                clientValue: () => window.CSS && window.CSS.supports && CSS.supports("display", "grid") || !1
            },
            devicePixelRatio: {
                clientValue: () => window.devicePixelRatio
            },
            language: {
                clientValue: () => document.documentElement.lang
            },
            direction: {
                clientValue: () => document.documentElement.dir
            }
        }
    };
    class U {
        constructor(e, t) {
            if (this.url = new URL(e.href), this.innerHeight = e.innerHeight, this.devicePixelRatio = e.devicePixelRatio, this.canUseCssGrid = e.canUseCssGrid, this.requestId = e.requestId, this.cookie = e.cookie, this.referer = e.referer, this.userAgent = e.userAgent, this.oneServiceHeaders = function (e) {
                    try {
                        if (e) return JSON.parse(e)
                    } catch (e) {}
                }(e.oneServiceHeaders) || {}, this.isPssrMode = t, t) {
                const e = $("OSATE", this.cookie),
                    t = !!e && "1" === e,
                    n = $("OSAT", this.cookie);
                if (t && n || !e && !n) return this.msalAuthReady = !0, void(n && (this.oneServiceHeaders.Authorization = `Bearer ${n}`));
                this.msalAuthReady = !1, this.pssrRejectedReason = e && !t ? "interactiveLogin" : e && !n ? "missOSAT" : "missOSATE"
            }
        }
        static getInstance() {
            return n.g.TEST_ENV && !U._instance && V({
                href: "http://localhost:8080/",
                innerHeight: 768,
                devicePixelRatio: 1,
                canUseCssGrid: !1,
                requestId: "0",
                cookie: "",
                userAgent: "",
                referer: "",
                oneServiceHeaders: ""
            }), U._instance || V({
                href: "http://localhost:8080/",
                innerHeight: 0,
                devicePixelRatio: 0,
                canUseCssGrid: !1,
                requestId: "0",
                cookie: "",
                userAgent: "",
                referer: "",
                oneServiceHeaders: ""
            }), U._instance
        }
        static resetInstance(e, t = !1) {
            return U._instance = new U(e, t), U._instance
        }
    }

    function $(e, t) {
        if (t && e) {
            const n = new RegExp("\\b" + e + "\\s*=\\s*([^;]*)", "i").exec(t);
            return n && n.length > 1 ? n[1] : null
        }
        return null
    }
    U._instance = null;
    const V = U.resetInstance,
        B = () => U.getInstance();

    function G() {
        try {
            return localStorage
        } catch (e) {
            return null
        }
    }
    const J = "uxlogin",
        z = "uxlogout",
        X = "uxedit",
        K = b((() => {
            const e = G();
            return e && "1" === e.getItem(J) || a() && location.search && location.search.includes("uxlogin=1")
        }));
    const Y = b((() => {
        const e = function () {
            try {
                return sessionStorage
            } catch (e) {
                return null
            }
        }();
        return e && !!e.getItem(z)
    }));
    const Q = b((() => {
        const e = G();
        return e && "1" === e.getItem(X)
    }));
    const Z = b((() => {
        const e = G(),
            t = !I("prg-noredirect") && (e && "1" === e.getItem("useRedirect") || function () {
                const e = document.head.dataset.clientSettings || "",
                    {
                        browser: t
                    } = r(e) || {},
                    {
                        browserType: n = ""
                    } = t || {};
                return !!/safari/i.test(n)
            }());
        return t
    }));
    var ee;
    ! function (e) {
        e.Adult = "adult", e.Enterprise = "enterprise", e.Kids = "kids"
    }(ee || (ee = {}));
    const te = {
            newsAndInterests: 1,
            windowsNewsbar: 1,
            windowsNewsPlus: 1,
            winWidgets: 1,
            windowsShell: 1,
            windowsShellV2: 1,
            distribution: 1,
            superApp: 1
        },
        ne = {
            edgeChromium: 1
        },
        ie = b((() => (a() && w() || {}).apptype)),
        oe = b((() => se() && (k() || !y("ace")))),
        re = b((() => a() && !(ie() in te) && !I("prg-nodualauth"))),
        se = b((() => re() && !(ie() in ne)));
    b((() => re() && (!(ie() in ne) || !T()))), b((() => re() && !ge()));

    function ae() {
        return ge()
    }

    function ce(e) {
        return de(e) && (I("prg-ntp-uat") || I("prg-ntp-uat-nf"))
    }

    function de(e) {
        return !("edgeChromium" != ie() || e != ee.Adult && e != ee.Kids || !y("at") && !y("lt"))
    }
    b((() => {
        const e = (a() ? window.location.host : B().url.host).toLowerCase().endsWith(".cn");
        return re() && (!e || e && I("prg-enable-zhcn"))
    }));

    function ue() {
        const e = x;
        if (e) return E.log("dual-auth: tryGet1SAuthToken returned live tokens"), e;
        const t = N();
        if (t) return E.log(`dual-auth: tryGet1SAuthToken returned cached tokens that are ${F()}`), t;
        E.log("dual-auth: tryGet1SAuthToken returned empty tokens")
    }

    function le(e) {
        const t = {};
        if (e) {
            const n = ie();
            "windowsShell" === n || "windowsShellV2" === n ? t[d] = e : t[c] = `Bearer ${e}`
        }
        return t
    }

    function he(e) {
        const t = {};
        return e && (t[d] = e), t
    }

    function ge() {
        return se() && K() || oe() && (oe() && !K() && k() && ("expired" == F() || Q()) || Y() || Z())
    }
    var pe, fe, me;
    ! function (e) {
        let t, n, i;
        e.AIDRequestHeaderName = "pcs-aid",
            function (e) {
                e.inlineStart = "page.inlineStart", e.fragmentFetchStart = "ssr.fragmentFetching", e.fragmentFetchEnd = "ssr.fragmentFetched", e.fragmentFetchStatusCode = "ssr.fragmentFetchStatusCode", e.fragmentBrowserCached = "ssr.fragmentBrowserCached", e.fragmentCDNCached = "ssr.fragmentCDNCached", e.injectingDOM = "ssr.injectingDOM", e.awaitingRAF = "ssr.awaitingRAF", e.markersSet = "ssr.markersSet", e.completed = "ssr.completed", e.CSRTimeout = "ssr.CSRTimeout", e.CSROnly = "ssr.csrOnly", e.didSSR = "ssr.isSSRPagePresent", e.riverEnabled = "ssr.riverEnabled", e.ssrState = "ssr.state", e.pageTTVR = "TTVR", e.fetchDelayReason = "ssr.fetchDelayReason", e.awaitingInnerWidthTime = "ssr.awaitingInnerWidthTime", e.skipDueToHiddenReason = "ssr.skipDueToHiddenReason", e.pssrRejectedReason = "ssr.pssrRejected", e.ssrResponseSize = "ssr.responseSize", e.inlineBodyStart = "ssr.inlineBodyStart", e.pcsEnv = "pcsEnv"
            }(t = e.PageTimings || (e.PageTimings = {})), e.Product = {
                mmx: "emmx",
                edge: "spartan",
                edgeChromium: "anaheim",
                hybrid: "spartan",
                hub: "prime",
                microsoftNews: "msnews",
                office: "entnews",
                weather: "prime"
            },
            function (e) {
                e[e.Mmx = 0] = "Mmx", e[e.Hub = 1] = "Hub", e[e.Edge = 2] = "Edge", e[e.Weather = 3] = "Weather", e[e.Finance = 4] = "Finance", e[e.Community = 5] = "Community", e[e.Views = 6] = "Views", e[e.Gaming = 7] = "Gaming"
            }(n = e.AppType || (e.AppType = {})),
            function (e) {
                e[e.documentHidden = 0] = "documentHidden", e[e.hasPaused = 1] = "hasPaused", e[e.invalidInnerWidth = 2] = "invalidInnerWidth", e[e.slowFetchStart = 3] = "slowFetchStart"
            }(i = e.SkipDueToHiddenReason || (e.SkipDueToHiddenReason = {})), e.pauseThresholdMS = 1200, e.oneServiceHeaders = "1s-headers", e.edgeNTPHeaders = "X-Edge-NTP"
    }(pe || (pe = {})),
    function (e) {
        e.NotStarted = "NotStarted", e.Fetching = "Fetching", e.InsertingDOM = "InsertingDOM", e.Completed = "Completed", e.HasFetchError = "HasFetchError", e.HasError = "HasError", e.SkipDueToCSROnly = "SkipDueToCSROnly", e.SkipDueToHidden = "SkipDueToHidden", e.SkipForEarlyAuth = "SkipForEarlyAuth", e.PssrRejected = "PssrRejected"
    }(fe || (fe = {})),
    function (e) {
        e.PureSSR = "pssr", e.DSSR = "dssr"
    }(me || (me = {}));

    function we(e) {
        const t = e;
        return void 0 !== t.clientValue ? t.clientValue : Object.keys(e).reduce(((t, n) => Object.assign(Object.assign({}, t), {
            [n]: we(e[n])
        })), {})
    }
    class Se {
        constructor(e, t) {
            this.spec = e, this.qspPrefix = t || "rd"
        }
        get verParam() {
            return `${this.qspPrefix}.ver`
        }
        get data() {
            return void 0 === this.memo && (this.memo = we(this.spec.spec)), this.memo
        }
        loadQueryParams(e) {
            if (void 0 !== this.memo) throw "overwriting existing query string parameters.";
            const t = e.get([this.qspPrefix, "ver"].join("."));
            if (t !== this.spec.ver) throw `unmatched spec version: expected "${this.spec.ver}" but got ${t}.`;
            this.memo = {}, e.forEach(((e, t) => {
                if (!t.startsWith(this.qspPrefix)) return;
                if (t === this.verParam) return;
                const n = t.split(".").slice(1);
                let i = this.memo;
                n.forEach(((t, o) => {
                    let r = {};
                    if (o === n.length - 1) try {
                        r = () => JSON.parse(e)
                    } catch (e) {
                        throw this.memo = void 0, e
                    }
                    Object.prototype.hasOwnProperty.call(i, t) || (i[t] = r), "object" != typeof r || (i = i[t])
                }))
            }))
        }
        getURLSearchParams() {
            const e = new URLSearchParams,
                t = (n, i) => {
                    Object.keys(n).forEach((o => {
                        const r = n[o],
                            s = [...i, o];
                        "object" != typeof r ? e.append(s.join("."), JSON.stringify(r())) : t(r, s)
                    }))
                };
            return t(this.data, [this.qspPrefix]), e.sort(), e.append(this.verParam, this.spec.ver), e
        }
        getSerializedData() {
            return this.getURLSearchParams().toString()
        }
    }
    var ye;
    let ve, be, Re;

    function ke() {
        if (!ve) {
            const e = document.head.getAttribute("data-client-settings");
            e && (ve = JSON.parse(e))
        }
        return ve
    }! function (e) {
        e.JSON = "application/json;charset=UTF-8", e.HTML = "text/html;charset=UTF-8"
    }(ye = ye || (ye = {}));
    var Te;
    ! function (e) {
        e[e.Alert = 0] = "Alert", e[e.NoAlert = 1] = "NoAlert", e[e.HighImpact = 2] = "HighImpact", e[e.Critical = 3] = "Critical"
    }(Te || (Te = {}));
    const Ee = new class {
        constructor(e = 20) {
            this.maxLength = 20, this.list = [], this.maxLength = e
        }
        push(e) {
            this.list.push(e), this.list.length > this.maxLength && this.list.shift()
        }
        get data() {
            return this.list
        }
    };

    function Ce(e, t, n, i = Te.Alert) {
        try {
            const o = ke(),
                r = function () {
                    if (be) return be;
                    const e = document.head.getAttribute("data-info");
                    return ke(), be = ((/f:\s*([^;]+)/i.exec(e) || {})[1] || "").toLowerCase(), be
                }(),
                s = function (e) {
                    if (e) {
                        const {
                            pcsInfo: t,
                            pageGenTime: n
                        } = e, i = new Date(n).getTime(), o = !t || "prod" === t.env;
                        Re = o ? "browser.events.data.msn.com" : "events-sandbox.data.msn.com";
                        return {
                            cors: "true",
                            "content-type": "application/x-json-stream",
                            "client-id": "NO_AUTH",
                            "client-version": "1DS-Web-JS-2.2.2",
                            apikey: o ? "0ded60c75e44443aa3484c42c1c43fe8-9fc57d3f-fdac-4bcf-b927-75eafe60192e-7279" : "f8857dedc6f54ca8962cfb713e01e7d7-e9250191-fe0b-446f-95ae-07516262f98c-7028",
                            "upload-time": i,
                            w: "0",
                            anoncknm: "app_anon"
                        }
                    }
                    return null
                }(o);
            let a = "";
            s && s.apikey && "" !== s.apikey && (a = function (e) {
                if (e) {
                    const t = e.indexOf("-");
                    if (t > 0) return e.substring(0, t)
                }
                return ""
            }(s.apikey));
            const c = function (e, t, n, i, o, r, s = Te.Alert) {
                if (n) {
                    o = o || {};
                    const {
                        apptype: a,
                        audienceMode: c,
                        pagetype: d,
                        pageGenTime: u,
                        bundleInfo: l,
                        deviceFormFactor: h = "",
                        fd_muid: g
                    } = n;
                    o.pageGenTime = u, o.build = l && l.v, o.appType = a;
                    const p = function (e, t, n) {
                            const i = n && "phone" === n.toLowerCase();
                            return {
                                bingHomepage: "binghomepage",
                                mmx: "emmx",
                                edge: "spartan",
                                edgeChromium: t && "enterprise" === t ? "entnews" : "anaheim",
                                hybrid: "spartan",
                                hub: i ? "prime_mobile" : "prime",
                                microsoftNews: "msnews",
                                office: "entnews",
                                views: i ? "prime_mobile" : "prime",
                                windowsShell: "windowsshell"
                            } [e]
                        }(a, c, h),
                        f = p || a,
                        m = document.getElementsByTagName("html")[0].getAttribute("lang");
                    let w = "",
                        S = "muid";
                    try {
                        window && window.getCookieConsentRequired && "function" == typeof window.getCookieConsentRequired && window.getCookieConsentRequired() || (w = y("muid"))
                    } catch (e) {
                        console.log("error fetching muid.")
                    }
                    w || (w = n.aid, S = "aid");
                    const v = {
                        name: "MS.News.Web.AppError",
                        time: u,
                        ver: "4.0",
                        iKey: `o:${i}`,
                        data: {
                            baseData: {},
                            baseType: "MS.News.Web.Base",
                            page: {
                                name: "default",
                                product: f,
                                type: Pe(d),
                                content: {
                                    category: "standaloneError"
                                }
                            },
                            browser: {
                                clientId: w,
                                clientIdType: S
                            },
                            flight: {
                                id: r
                            },
                            request: {
                                activityId: n.aid,
                                requestId: n.aid,
                                afdMuid: g
                            },
                            locale: {
                                mkt: m
                            },
                            extSchema: {
                                id: e,
                                severity: s,
                                pb: o,
                                message: t
                            }
                        }
                    };
                    return v ? JSON.stringify(v) : null
                }
                return null
            }(t, e, o, a, n, r, i);
            if (s && c) {
                console.error(c), Ee.push(c);
                const e = "https://" + Re + "/OneCollector/1.0" + function (e) {
                    return "?" + Object.keys(e).map((function (t) {
                        return t + "=" + encodeURIComponent(e[t])
                    })).join("&")
                }(s);
                navigator.sendBeacon(e, c)
            } else console.log("missing parameters in data-client-settings. " + e)
        } catch (t) {
            console.log("error logging the app error. " + e)
        }
    }

    function Pe(e) {
        let t = e;
        switch (e) {
            case "windowsshellhp":
                t = "dhp";
                break;
            case "video":
                t = "watch"
        }
        return t
    }

    function Ie(e) {
        Ce("Click event occurred before hydration", 35800, {})
    }
    const Ae = a() ? window._pageTimings || (window._pageTimings = {}) : {};
    a() && (window._secondaryPageTimings || (window._secondaryPageTimings = {})), a() && (window._webVitalsPageTimings || (window._webVitalsPageTimings = {}));

    function Oe() {
        return Ae
    }
    const qe = "undefined",
        He = "ssrOnly",
        De = "rsorigin";

    function xe() {
        return "hidden" === document.visibilityState
    }

    function Ne(e, t, n) {
        return e ? t + "=" + (n || e) + "&" : ""
    }

    function Fe(e, t, n, i, o, r, s = "") {
        return t + function (e) {
            return typeof e !== qe ? Ne(encodeURIComponent(e), "entry") : ""
        }(o) + (0 === (a = i).length ? "" : Ne(encodeURIComponent("f:" + a.join(",") + ";"), "dataInfo")) + (Ne(window.CSS && window.CSS.supports && CSS.supports("display", "grid") || "false", "grid") + Ne(document.documentElement.dir, "dir") + Ne(document.documentElement.lang, "lang") + Ne(window.innerHeight, "innerHeight") + Ne(window.devicePixelRatio, "devicePixelRatio") + Ne(encodeURIComponent(window.location.href), "href")) + function (e) {
            let t = "";
            if (e)
                for (const n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n) && "aid" !== n && "pageGenTime" !== n) {
                        let i = e[n];
                        "object" == typeof i && (i = JSON.stringify(i)), t += Ne(encodeURIComponent(i), n)
                    } return t
        }(n) + function (e) {
            const t = "true" === $e(He, e),
                n = $e("csrDelay", e);
            let i = "";
            return t && (i += Ne("true", He)), n && (i += Ne(n, "csrDelay")), i
        }(e) + r() + s;
        var a
    }

    function _e(e, t = performance.now(), n = !0) {
        const i = Oe();
        e in i || (i[e] = n ? Math.round(t) : t)
    }

    function We(e, t = !0) {
        if (null !== (n = e) && "object" == typeof n && !1 === Array.isArray(n))
            for (const [n, i] of Object.entries(e || {})) "number" == typeof i && _e(n, i, t);
        var n
    }

    function Me(e, t = !1) {
        window.performance.mark(e), t && _e(e)
    }

    function Le(e) {
        for (let t = 0; t < e.ttvrFlags.length; t++) e.ttvrFlags[t] === pe.PageTimings.pageTTVR ? Me(e.ttvrFlags[t], !0) : Me(e.ttvrFlags[t]);
        Me(pe.PageTimings.markersSet, !0)
    }

    function je(e) {
        Me(pe.PageTimings.awaitingRAF, !0), e.ttvrFlags && (typeof document.hidden !== qe == !1 || xe() ? Le(e) : (window.requestAnimationFrame((function () {
            setTimeout((function () {
                Le(e)
            }), 0)
        })), document.addEventListener("visibilitychange", (function () {
            Le(e)
        }), {
            once: !0
        })))
    }

    function Ue(e) {
        return i(this, void 0, void 0, (function* () {
            const t = yield(n = "#root", new Promise((e => {
                const t = document.querySelector(n);
                if (t) return e(t);
                const i = new MutationObserver((t => {
                    const i = document.querySelector(n);
                    if (i) return e(i)
                }));
                i.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            })));
            var n;
            if (t.innerHTML = "", !window.RENDER) {
                e.headInjectionString && document.head.insertAdjacentHTML("beforeend", e.headInjectionString), t.insertAdjacentHTML("afterbegin", e.html), document.head.insertAdjacentHTML("beforeend", '<style id="ssr-style">' + e.css + "</style>"), e.pageTitle && (document.title = e.pageTitle), je(e), window.REDUX_DATA = e.state, window.SSR = fe.Completed, Me(pe.PageTimings.completed, !0), "undefined" != typeof globalThis ? document.addEventListener("click", globalThis.untrackedClickHandler) : document.addEventListener("click", window.untrackedClickHandler);
                const n = e.ssrTimings || {};
                We(n), We(n.configTimings), We(n.pageTimings)
            }
        }))
    }

    function $e(e, t) {
        return t.get(e) || t.get(e.toLowerCase())
    }

    function Ve(e) {
        window.SSR = e, window.RENDER = !0
    }

    function Be(e) {
        Ve(fe.HasError), window.SSR_ERROR = e
    }

    function Ge(e, t, n, i, o, r) {
        if (void 0 === window.SSR) {
            let s = !1;
            const {
                hasSsr: a,
                isSSRRiver: c
            } = e.shouldEnableSSR(t, n, i, o, r);
            if (a) {
                s = "true" === $e(He, t);
                const o = function () {
                        let e = !1;
                        const t = Oe()[pe.PageTimings.inlineStart];
                        performance && performance.timing && performance.timing.responseStart && performance.timing.navigationStart && t && (e = t - (performance.timing.responseStart - performance.timing.navigationStart) > pe.pauseThresholdMS);
                        return e
                    }(),
                    r = xe();
                if (!r && !o || s) Je(s, c);
                else {
                    const t = r ? pe.SkipDueToHiddenReason.documentHidden : pe.SkipDueToHiddenReason.hasPaused;
                    _e(pe.PageTimings.skipDueToHiddenReason, t);
                    !!e.shouldInsistSSRWhenHidden && e.shouldInsistSSRWhenHidden(n, i, t) ? Je(s, c) : (window.SSR = fe.SkipDueToHidden, window.RENDER = !0)
                }
            } else Ve(fe.SkipDueToCSROnly)
        }
        return !window.RENDER
    }

    function Je(e, t) {
        window.SSR = fe.NotStarted, window.RENDER = !1, window.SSRONLY = e, window.RIVER = t
    }

    function ze(e) {
        let t = window.location.origin;
        return function (e, t) {
            const n = e.indexOf("item=spalink") >= 0 && -1 === e.indexOf("item=spalink:latest") && -1 === e.indexOf("item=spalink%3Alatest");
            return !(t.get(De) && "true" === t.get(De)) && n
        }(window.location.search, e) && (t = "https://int.msn.com"), t
    }

    function Xe(e, t, n, i, o, r = j, s, a) {
        var c;
        if (window.RENDER || window.SSR !== fe.NotStarted) return;
        const d = null === (c = null == a ? void 0 : a.skipAuth) || void 0 === c ? void 0 : c.call(a);
        if (!d && ae()) return void Ve(fe.SkipForEarlyAuth);
        const u = new Se(r, "rd"),
            l = function (e, t) {
                const n = "true" === $e("ssrCdn", e);
                return (t || (n ? "https://assets.msn.com" : window.location.origin)) + "/render/?fragment=true&"
            }(e, s),
            h = Fe(e, l, t, n, i, o, u.getSerializedData()),
            g = new XMLHttpRequest,
            p = e => {
                const t = `Fragment fetch for ${h} failed. Status code: ${g.status}. ${e}`;
                Ce(t, 34002, {}), window.SSR = fe.HasFetchError, window.SSR_ERROR = new Error(t)
            };
        g.onabort = function () {
            p("XMLHttpRequest.onabort called.")
        }, g.onerror = function () {
            p("XMLHttpRequest.onerror called.")
        }, g.onreadystatechange = function () {
            try {
                if (4 !== g.readyState) return;
                if (Me(pe.PageTimings.fragmentFetchEnd, !0), _e(pe.PageTimings.fragmentFetchStatusCode, g.status, !1), g.status >= 200 && g.status < 300) {
                    if (!window.RENDER) {
                        window.SSR = fe.InsertingDOM;
                        const e = JSON.parse(g.responseText);
                        if (e.html) Me(pe.PageTimings.injectingDOM, !0), Ue(e);
                        else {
                            const e = `Fragment fetch for ${h} succeeded but returned empty html.`;
                            Ce(e, 34002, {}), window.SSR = fe.HasFetchError, window.SSR_ERROR = new Error(e)
                        }
                    }
                    const e = g.getResponseHeader("Date"),
                        t = g.getResponseHeader("x-cache");
                    ! function (e, t, n) {
                        const i = function (e) {
                            const t = performance.getEntriesByType("resource").filter((t => "xmlhttprequest" === t.initiatorType && t.name === e));
                            return t.length > 0 ? t[0] : null
                        }(e);
                        let o = !1;
                        r = i, o = r && ("transferSize" in r || "nextHopProtocol" in r) ? function (e) {
                            return void 0 !== e.transferSize ? 0 === e.transferSize : void 0 !== e.nextHopProtocol ? "" === e.nextHopProtocol : (Ce("didUseBrowserCache was called without supporting transferSize or nextHopProtocol", 34003, {
                                perfResourceTimingKeys: Object.keys(e || {})
                            }), !1)
                        }(i) : function (e) {
                            const t = G();
                            if (!e || !t) return Ce("dateResponseHeader was empty or localStorage is not supported", 34004, {
                                dateResponseHeader: e
                            }), !1;
                            const n = "SSRDateResponseHeader";
                            let i = !1;
                            const o = t.getItem(n);
                            o && (i = o === e);
                            i || t.setItem(n, e);
                            return i
                        }(t);
                        var r;
                        const s = function (e, t) {
                            return !e && "TCP_HIT" === t
                        }(o, n);
                        _e(pe.PageTimings.fragmentBrowserCached, o ? 1 : 0, !1), _e(pe.PageTimings.fragmentCDNCached, s ? 1 : 0, !1)
                    }(h, e, t)
                } else {
                    const e = "x-msedge-ref",
                        t = g.getResponseHeader(e) || "";
                    p(`Response is not OK. Header: ${e}: ${t}`)
                }
            } catch (e) {
                p(`Exception occured on XMLHttpRequest.onreadystatechange.\n${e.stack||e}`)
            }
        }, g.open("GET", h), g.withCredentials = !d;
        const f = t.aid;
        if (g.setRequestHeader(pe.AIDRequestHeaderName, f), !d && oe()) {
            const {
                accessToken: e
            } = ue() || {}, t = le(e);
            g.setRequestHeader(pe.oneServiceHeaders, JSON.stringify(t))
        }
        window.SSR = fe.Fetching, Me(pe.PageTimings.fragmentFetchStart, !0), g.send()
    }
    var Ke;
    ! function (e) {
        e.GLOBAL = "GLOBAL", e.GCC_MODERATE = "GCC_MODERATE"
    }(Ke || (Ke = {}));
    let Ye, Qe;
    var Ze, et, tt;
    Qe = Ze || (a() ? window : {}), tt = () => {
        let e;
        return {
            promise: new Promise((t => e = t)),
            resolver: e
        }
    }, Ye = Qe[et = "authHeaderPromiseParts"] || (Qe[et] = tt());
    const nt = {
        shouldEnableSSR: (e, t, n, i, o) => {
            const r = {
                hasSsr: !1,
                isSSRRiver: !1
            };
            if ("weather" !== n && "weather::weathertoday" !== n && "weather::weathermonthlyforecast" !== n && "weather::weatherpollen" !== n && "weather::weatherlife" !== n) return r;
            if (!o || [].indexOf(o) >= 0) return r;
            if ([].indexOf(o) >= 0) {
                if (0 == i.filter((e => e.startsWith("prg-weather-ssr") || e.startsWith("prg-wea-ssr"))).length) return r
            } else if (i.filter((e => e.startsWith("prg-wea-csr") || e.startsWith("prg-wea-csrrf"))).length > 0 || "true" === e.get("csronly")) return r;
            return {
                hasSsr: !0,
                isSSRRiver: !1
            }
        },
        shouldInsistSSRWhenHidden: (e, t, n) => n === pe.SkipDueToHiddenReason.documentHidden
    };

    function it(e) {
        Ce("Error when loading bundle: " + e, 20202, {})
    }

    function ot(e, t, n, i, o) {
        Ce("JS Exception", 20203, {
            source: t,
            customMessage: e,
            line: n,
            column: i,
            stack: o && o.stack
        })
    }
    const rt = {
        ver: `weather.${j.ver}.1`,
        spec: Object.assign(Object.assign({}, j.spec), {
            isDarkModeEnabled: {
                clientValue: () => !0 === window.matchMedia("(prefers-color-scheme:dark)").matches
            }
        })
    };
    let st = !1,
        at = [],
        ct = [];
    var dt;

    function ut(e, t) {
        const n = window.setTimeout(e, t);
        ct.push(n)
    }

    function lt() {
        ct.forEach((e => {
            clearTimeout(e)
        })), ct = []
    }

    function ht() {
        for (const e of at) window.removeEventListener(e.type, e.listener);
        at = []
    }

    function gt(e, t) {
        st = !1;
        const n = performance.now();
        if (pt(n, dt.none, e), st) return;

        function i() {
            ut((() => pt(n, dt.resize, e)), 5)
        }

        function o() {
            ut((() => pt(n, dt.pageLoad, e)), 5)
        }
        window.addEventListener("resize", i), at.push({
            type: "resize",
            listener: i
        }), window.addEventListener("load", o), at.push({
            type: "load",
            listener: o
        });
        ut((() => {
            try {
                pt(n, dt.waitForTimeout, e), st || window.RENDER || (Ve(fe.SkipDueToHidden), _e(pe.PageTimings.skipDueToHiddenReason, pe.SkipDueToHiddenReason.invalidInnerWidth), Ce(`Failed to make ssr fetch call, window.innerWidth was never valid. window.innerWidth: ${window.innerWidth}`, 34008, {}))
            } catch (e) {
                Ce(`Unexpected error during finalInnerWidthCallback. window.innerWidth: ${window.innerWidth}\n${e.stack||e}`, 34007, {})
            } finally {
                ht(), lt()
            }
        }), t)
    }

    function pt(e, t, n) {
        try {
            if (!st && window.innerWidth > 0) {
                st = !0;
                const i = performance.now();
                lt(), ht(), _e(pe.PageTimings.awaitingInnerWidthTime, i - e), _e(pe.PageTimings.fetchDelayReason, t), n()
            }
        } catch (e) {
            Ce(`Unexpected error during checkForInnerWidth. window.innerWidth: ${window.innerWidth}\n${e.stack||e}`, 34007, {})
        }
    }! function (e) {
        e[e.none = 0] = "none", e[e.resize = 1] = "resize", e[e.pageLoad = 2] = "pageLoad", e[e.waitForTimeout = 3] = "waitForTimeout"
    }(dt || (dt = {}));
    const ft = "Failed SSR inline script due to missing client settings or SSR service entry.";
    window.onErrorHandler = it, window.onerror = ot;
    const mt = 34007;
    "undefined" != typeof globalThis ? globalThis.untrackedClickHandler = Ie : window.untrackedClickHandler = Ie;
    const wt = w(),
        St = function (e) {
            return t = e && e.queryparams, n = window.location.search, t = (t || "").substring(1), n = (n || "").substring(1), new o(t + "&" + n);
            var t, n
        }(wt),
        yt = function (e, t) {
            const n = document.head.dataset.info;
            let i = ((/f:\s*([^;]+)/i.exec(n) || {})[1] || "").toLowerCase().split(",");
            return i = function (e) {
                if (!e || 0 === e.length) return e;
                const t = [];
                return e.forEach((e => {
                    const n = e.toLocaleLowerCase().trim();
                    n.startsWith("prg-") && t.push(n)
                })), t.sort()
            }(i), i
        }();
    window._clientSettings = wt, window.flights = yt;
    const vt = window.pcsEnv = wt.pcsInfo && wt.pcsInfo.env;
    ! function () {
        i(this, void 0, void 0, (function* () {
            try {
                if (Me(pe.PageTimings.inlineStart, !0), !window.RENDER)
                    if (wt && window._ssrServiceEntryUrl) {
                        const e = function (e) {
                            return e.locale && e.locale.language && e.locale.market ? `${e.locale.language}-${e.locale.market}`.toLowerCase() : void 0
                        }(wt);
                        window.SSR_Mode = function (e, t) {
                            return "prod" !== t && "staging" !== t && !e.some((e => e.startsWith("prg-wea-pctrl")))
                        }(yt, vt) ? me.PureSSR : me.DSSR, window.SSR_Mode === me.DSSR && Ge(nt, St, pe.AppType.Weather, wt.pagetype, yt, e) && gt((() => {
                            ! function (e, t, n) {
                                const i = () => "",
                                    o = () => ((e, t) => {
                                        let n = !1;
                                        const i = [
                                            ["loc", "weadegreetype"]
                                        ];
                                        return n || (n = i && i.some((t => t.every((t => e.get(t)))))), n
                                    })(t);
                                try {
                                    const r = ze(t);
                                    Xe(t, e, n, window._ssrServiceEntryUrl, i, rt, r, {
                                        skipAuth: o
                                    })
                                } catch (e) {
                                    Be(e), Ce(`Exception occured on fetchSSRPage.\n${e.stack||e}`, mt, {})
                                }
                            }(wt, St, yt)
                        }), 200)
                    } else Ce(ft, mt, {}), Be(new Error(ft))
            } catch (e) {
                Ce(`Exception occured on SSR inline script.\n${e.stack||e}`, mt, {}), Be(e)
            }
        }))
    }(), (new class {
        constructor() {
            this.childCookieName = "child", this.domInfo = document.head.dataset.info
        }
        init(e = null) {
            this.clientSettings = e || w(), this.authCookieName = window._authCookieName || "", this.bundle = window._webWorkerBundle || "";
            const t = this.buildWebWorkerUrl(),
                n = window.webWorker = new Worker(t, {
                    name: "web-worker"
                }),
                i = window.webWorkerMessages = [];
            n.onmessage = e => {
                i.push(e.data)
            };
            const o = window.webWorkerErrors = [];
            if (n.onerror = e => {
                    o.push(e)
                }, window.chrome) {
                const e = this.getAudienceMode(this.clientSettings),
                    t = window.webWorker && window.chrome && window.chrome.ntpSettingsPrivate;
                if (t && "function" == typeof t.getPref && (t.getPref("ntp.news_feed_display", (e => {
                        e && e.value && n.postMessage({
                            id: "FeedDisplaySetting",
                            type: "command",
                            payload: e.value
                        })
                    })), t.getPref("ntp.layout_mode", (e => {
                        e && e.value && n.postMessage({
                            id: "LayoutModeSetting",
                            type: "command",
                            payload: e.value
                        })
                    })), t.getPref("ntp.user_nurturing", (e => {
                        let t = !1;
                        e && e.value && e.value.length && (t = this.getSingleColRequest(e.value)), n.postMessage({
                            id: "RenderSingleColumn",
                            type: "command",
                            payload: t
                        })
                    })), t.getPref("new_device_fre.has_user_seen_new_fre", (e => {
                        e && n.postMessage({
                            id: "NewUserFre",
                            type: "command",
                            payload: e.value
                        })
                    }))), e === ee.Enterprise && this.clientSettings.browser && "edgeChromium" === this.clientSettings.browser.browserType && parseInt(this.clientSettings.browser.version) >= 87 && this.getEnterpriseAccessToken().then((e => {
                        e && n.postMessage({
                            id: "AuthTokenEnterprise",
                            type: "command",
                            payload: le(e)
                        })
                    })), e !== ee.Adult && e !== ee.Enterprise || this.sendPageConfiguration(), ce(e)) {
                    const e = y("lt") || y("at");
                    n.postMessage({
                        id: "AuthHeaders",
                        type: "command",
                        payload: he(e)
                    })
                }
            }
            ae() && Ye.promise.then((e => n.postMessage({
                id: "AuthHeaders",
                type: "command",
                payload: e || {}
            })))
        }
        buildWebWorkerUrl(e = null) {
            return (this.bundle || "") + "#" + this.qsFromDocument() + this.qsFromCookies() + this.qsFromDataAttribute(e || this.clientSettings) + this.qsMisc() + this.qsAuth(e || this.clientSettings) + this.qsFromUrl() + this.qsFromServiceWorker() + this.qsSelectedPivot() + this.qsXboxXToken()
        }
        qs(e, t, n) {
            return e ? t + "=" + (n || e) + "&" : ""
        }
        qsFromDocument() {
            var e;
            return this.qs(document.getElementsByTagName("html")[0].getAttribute("lang"), "lang") + this.qs(encodeURIComponent(window.location.href), "adsReferer") + this.qs(null === (e = a() ? window.devicePixelRatio : B().devicePixelRatio) || void 0 === e ? void 0 : e.toString(), "devicePixelRatio")
        }
        qsFromServiceWorker() {
            if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return "";
            const e = navigator.serviceWorker.controller;
            if ("activated" !== e.state || !e.scriptURL) return "";
            if (e.scriptURL) {
                const t = new URL(e.scriptURL).searchParams.toString();
                return t ? "&" + t + "&" : ""
            }
            return ""
        }
        qsFromCookies() {
            return this.qs(v(this.authCookieName), "aace", "1") + this.qs(v("muid"), "muid") + this.qs(v(this.childCookieName), "child") + this.qs(v("cbypass"), "cbypass") + this.qs(this.cookieBannerConsentRequired().toString(), "ccRequired") + this.qs(v("ecasession"), "ecasession") + this.qs(v("TOptOut"), "browserOptOut")
        }
        qsFromDataAttributeHelper(e, t) {
            return e && e.featureFlags && e.featureFlags.wpoEnabled && (t = this.appendWpoFlightsToInfo(e, t)), this.qs(e.pcsInfo && e.pcsInfo.env || e.env, "env") + this.qs(e.aid, "aid") + this.qs(e.apptype, "apptype") + this.qs(e.pagetype, "pagetype") + this.qs(e.audienceMode, "audienceMode") + this.qs(e.configIndexDocId, "configIndexDocId") + this.qs(e.deviceFormFactor, "deviceFormFactor") + this.qs(e.domain, "domain") + this.qs(e.configRootUrl, "configRootUrl") + this.qs(this.getHighestCbid(e.cbid, e.apptype), "cbid") + this.qs(e.ocid, "ocid") + this.qs(e.os, "os") + this.qs(JSON.stringify(e.locale), "locale") + this.qs(e.geo_lat, "lat") + this.qs(e.geo_long, "long") + this.qs(JSON.stringify(e.featureFlags), "featureFlags") + this.qs(JSON.stringify(e.browser), "browser") + this.qs(JSON.stringify(e.servicesEndpoints), "servicesEndpoints") + this.qs(e.bundleInfo && e.bundleInfo.v || "", "buildVersion") + this.qs(t, "dataInfo")
        }
        qsSelectedPivot() {
            const e = "selectedPivot";
            let t;
            try {
                const n = G();
                n && (t = n.getItem(e))
            } catch (e) {
                console.log("Error getting pivot id from local storage. " + e)
            }
            return this.qs(t, e)
        }
        qsXboxXToken() {
            const e = "xboxXTokenId";
            let t;
            try {
                const n = G();
                n && (t = n.getItem(e))
            } catch (e) {
                console.log("Error getting xbox XToken from local storage. " + e)
            }
            return this.qs(t, e)
        }
        appendWpoFlightsToInfo(e, t) {
            const n = this.getWpoFlightsFromLocalStorage(e);
            if (n && n.length) {
                const e = ";",
                    i = t.split(e);
                for (let e = 0; e < i.length; e++) {
                    const t = i[e];
                    if (t && t.startsWith("f:")) {
                        i[e] = t + "," + n.join();
                        break
                    }
                }
                return i.join(e)
            }
            return t
        }
        getWpoFlightsFromLocalStorage(e) {
            const t = G(),
                n = e.locale,
                i = `wpo_data_ ${e.audienceMode}_${n.language}_${n.market}_${e.pagetype}_${e.apptype}`;
            try {
                const e = t.getItem(i);
                if (e) {
                    return JSON.parse(e).treatments.map((e => e.id))
                }
            } catch (e) {
                console.warn(`Error getting wpo flights from ls for ${i} Error:${e}`)
            }
            return null
        }
        getHighestCbid(e, t) {
            try {
                const n = G(),
                    i = parseInt(e),
                    o = parseInt(JSON.parse(n.getItem(`cbid_${t||""}`)));
                let r;
                if (i && !isNaN(i) && o && !isNaN(o) && (r = i > o ? i : o), r = r || i || o, r) return window._cbid = r.toString()
            } catch (e) {
                console.log("Error getting highest CBID" + e)
            }
        }
        getAudienceMode(e) {
            G();
            const t = y(this.authCookieName),
                n = y(this.childCookieName),
                {
                    child: i
                } = t && JSON.parse(t) || {};
            return t && (1 === i || n) ? "kids" : e.audienceMode || ee.Adult
        }
        sendPageConfiguration() {
            const e = this.clientSettings.pagetype;
            if (e) {
                const t = y && y("pglt-edgeChromium-" + e);
                if (t) return void window.webWorker.postMessage({
                    id: "PageConfiguration",
                    type: "command",
                    payload: t
                })
            }
            window.webWorker.postMessage({
                id: "PageConfiguration",
                type: "command",
                payload: !1
            })
        }
        qsFromDataAttribute(e) {
            let t, n;
            const i = G();
            if (i) {
                const o = JSON.parse(i.getItem("shd_" + e.pagetype) || null);
                o && o.clientSettings && o.info && (t = Object.assign(Object.assign({}, o.clientSettings), {
                    bundleInfo: e.bundleInfo
                }), n = o.info)
            }
            return (!t || !n || e.pageGenTime >= t.pageGenTime) && (t = e, n = this.domInfo), t.audienceMode = this.getAudienceMode(t), this.qsFromDataAttributeHelper(t, n)
        }
        qsFromUrl() {
            const e = location.search;
            return e && e.length ? e.substring(1, e.length) : ""
        }
        getEnterpriseAccessToken() {
            return new Promise((e => {
                window.chrome && window.chrome.authPrivate ? window.chrome.authPrivate.getPrimaryAccountInfo((t => {
                    t && "GCC_MODERATE" !== t.region_scope || e("");
                    const n = {
                        account_id: t.account_id,
                        account_type: t.account_type,
                        client_id: "d7b530a4-7680-4c23-a8bf-c52c121d2e87",
                        scope_or_resource: "https://enterprisenews.microsoft.com"
                    };
                    window.chrome.authPrivate.acquireAccessTokenSilently(n, (t => {
                        t.is_success ? e(t.access_token) : e("")
                    }))
                })) : e("")
            }))
        }
        qsMisc() {
            return this.qs(performance.timeOrigin && performance.timeOrigin.toString(), "mainTimeOrigin")
        }
        qsAuth(e) {
            let t = this.qs(oe() && "1", "disableWWAuth");
            if (!ce(e && e.audienceMode) && !ae()) {
                const e = se() && ue() || {};
                t += this.qs(encodeURIComponent(JSON.stringify(le(e.accessToken))), "authHeaders")
            }
            return "edgeChromium" == ie() && I("prg-ntp-uat-nf") && (t += this.qs("1", "acf")), t
        }
        getSingleColRequest(e) {
            const t = "render_single_column",
                n = "feed_layout";
            let i, o;
            for (const r of e) {
                const {
                    key: e,
                    value: s
                } = r;
                e === t ? i = s : e === n && (o = s)
            }
            return "boolean" == typeof i ? i : !!o && (o && "single" === o.type)
        }
        cookieBannerConsentRequired() {
            const e = null != document.getElementById("consent-banner-container") && null === y("MSCC"),
                t = null != document.getElementById("onetrust-sdk") && null === y("eupubconsent-v2");
            return e || t
        }
    }).init(wt)
}();