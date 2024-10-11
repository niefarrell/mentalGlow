(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const l of i)
            if (l.type === "childList")
                for (const o of l.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const l = {};
        return i.integrity && (l.integrity = i.integrity),
        i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l)
    }
}
)();
function o_(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var l0 = {
    exports: {}
}
  , ga = {}
  , o0 = {
    exports: {}
}
  , J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss = Symbol.for("react.element")
  , s_ = Symbol.for("react.portal")
  , u_ = Symbol.for("react.fragment")
  , a_ = Symbol.for("react.strict_mode")
  , c_ = Symbol.for("react.profiler")
  , f_ = Symbol.for("react.provider")
  , d_ = Symbol.for("react.context")
  , p_ = Symbol.for("react.forward_ref")
  , h_ = Symbol.for("react.suspense")
  , m_ = Symbol.for("react.memo")
  , g_ = Symbol.for("react.lazy")
  , fp = Symbol.iterator;
function __(t) {
    return t === null || typeof t != "object" ? null : (t = fp && t[fp] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var s0 = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , u0 = Object.assign
  , a0 = {};
function Zl(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = a0,
    this.updater = n || s0
}
Zl.prototype.isReactComponent = {};
Zl.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
Zl.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function c0() {}
c0.prototype = Zl.prototype;
function Wf(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = a0,
    this.updater = n || s0
}
var Yf = Wf.prototype = new c0;
Yf.constructor = Wf;
u0(Yf, Zl.prototype);
Yf.isPureReactComponent = !0;
var dp = Array.isArray
  , f0 = Object.prototype.hasOwnProperty
  , Xf = {
    current: null
}
  , d0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function p0(t, e, n) {
    var r, i = {}, l = null, o = null;
    if (e != null)
        for (r in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (l = "" + e.key),
        e)
            f0.call(e, r) && !d0.hasOwnProperty(r) && (i[r] = e[r]);
    var s = arguments.length - 2;
    if (s === 1)
        i.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++)
            u[a] = arguments[a + 2];
        i.children = u
    }
    if (t && t.defaultProps)
        for (r in s = t.defaultProps,
        s)
            i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: Ss,
        type: t,
        key: l,
        ref: o,
        props: i,
        _owner: Xf.current
    }
}
function v_(t, e) {
    return {
        $$typeof: Ss,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function Qf(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Ss
}
function y_(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var pp = /\/+/g;
function Ia(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? y_("" + t.key) : e.toString(36)
}
function pu(t, e, n, r, i) {
    var l = typeof t;
    (l === "undefined" || l === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (l) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Ss:
            case s_:
                o = !0
            }
        }
    if (o)
        return o = t,
        i = i(o),
        t = r === "" ? "." + Ia(o, 0) : r,
        dp(i) ? (n = "",
        t != null && (n = t.replace(pp, "$&/") + "/"),
        pu(i, e, n, "", function(a) {
            return a
        })) : i != null && (Qf(i) && (i = v_(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(pp, "$&/") + "/") + t)),
        e.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    dp(t))
        for (var s = 0; s < t.length; s++) {
            l = t[s];
            var u = r + Ia(l, s);
            o += pu(l, e, n, u, i)
        }
    else if (u = __(t),
    typeof u == "function")
        for (t = u.call(t),
        s = 0; !(l = t.next()).done; )
            l = l.value,
            u = r + Ia(l, s++),
            o += pu(l, e, n, u, i);
    else if (l === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Ds(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , i = 0;
    return pu(t, r, "", "", function(l) {
        return e.call(n, l, i++)
    }),
    r
}
function x_(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Ft = {
    current: null
}
  , hu = {
    transition: null
}
  , w_ = {
    ReactCurrentDispatcher: Ft,
    ReactCurrentBatchConfig: hu,
    ReactCurrentOwner: Xf
};
function h0() {
    throw Error("act(...) is not supported in production builds of React.")
}
J.Children = {
    map: Ds,
    forEach: function(t, e, n) {
        Ds(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Ds(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Ds(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!Qf(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
J.Component = Zl;
J.Fragment = u_;
J.Profiler = c_;
J.PureComponent = Wf;
J.StrictMode = a_;
J.Suspense = h_;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w_;
J.act = h0;
J.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = u0({}, t.props)
      , i = t.key
      , l = t.ref
      , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (l = e.ref,
        o = Xf.current),
        e.key !== void 0 && (i = "" + e.key),
        t.type && t.type.defaultProps)
            var s = t.type.defaultProps;
        for (u in e)
            f0.call(e, u) && !d0.hasOwnProperty(u) && (r[u] = e[u] === void 0 && s !== void 0 ? s[u] : e[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++)
            s[a] = arguments[a + 2];
        r.children = s
    }
    return {
        $$typeof: Ss,
        type: t.type,
        key: i,
        ref: l,
        props: r,
        _owner: o
    }
}
;
J.createContext = function(t) {
    return t = {
        $$typeof: d_,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: f_,
        _context: t
    },
    t.Consumer = t
}
;
J.createElement = p0;
J.createFactory = function(t) {
    var e = p0.bind(null, t);
    return e.type = t,
    e
}
;
J.createRef = function() {
    return {
        current: null
    }
}
;
J.forwardRef = function(t) {
    return {
        $$typeof: p_,
        render: t
    }
}
;
J.isValidElement = Qf;
J.lazy = function(t) {
    return {
        $$typeof: g_,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: x_
    }
}
;
J.memo = function(t, e) {
    return {
        $$typeof: m_,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
J.startTransition = function(t) {
    var e = hu.transition;
    hu.transition = {};
    try {
        t()
    } finally {
        hu.transition = e
    }
}
;
J.unstable_act = h0;
J.useCallback = function(t, e) {
    return Ft.current.useCallback(t, e)
}
;
J.useContext = function(t) {
    return Ft.current.useContext(t)
}
;
J.useDebugValue = function() {}
;
J.useDeferredValue = function(t) {
    return Ft.current.useDeferredValue(t)
}
;
J.useEffect = function(t, e) {
    return Ft.current.useEffect(t, e)
}
;
J.useId = function() {
    return Ft.current.useId()
}
;
J.useImperativeHandle = function(t, e, n) {
    return Ft.current.useImperativeHandle(t, e, n)
}
;
J.useInsertionEffect = function(t, e) {
    return Ft.current.useInsertionEffect(t, e)
}
;
J.useLayoutEffect = function(t, e) {
    return Ft.current.useLayoutEffect(t, e)
}
;
J.useMemo = function(t, e) {
    return Ft.current.useMemo(t, e)
}
;
J.useReducer = function(t, e, n) {
    return Ft.current.useReducer(t, e, n)
}
;
J.useRef = function(t) {
    return Ft.current.useRef(t)
}
;
J.useState = function(t) {
    return Ft.current.useState(t)
}
;
J.useSyncExternalStore = function(t, e, n) {
    return Ft.current.useSyncExternalStore(t, e, n)
}
;
J.useTransition = function() {
    return Ft.current.useTransition()
}
;
J.version = "18.3.1";
o0.exports = J;
var Qe = o0.exports;
const k_ = o_(Qe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S_ = Qe
  , T_ = Symbol.for("react.element")
  , C_ = Symbol.for("react.fragment")
  , E_ = Object.prototype.hasOwnProperty
  , N_ = S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , P_ = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function m0(t, e, n) {
    var r, i = {}, l = null, o = null;
    n !== void 0 && (l = "" + n),
    e.key !== void 0 && (l = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (r in e)
        E_.call(e, r) && !P_.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
        e)
            i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: T_,
        type: t,
        key: l,
        ref: o,
        props: i,
        _owner: N_.current
    }
}
ga.Fragment = C_;
ga.jsx = m0;
ga.jsxs = m0;
l0.exports = ga;
var v = l0.exports
  , Cc = {}
  , g0 = {
    exports: {}
}
  , hn = {}
  , _0 = {
    exports: {}
}
  , v0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(M, D) {
        var w = M.length;
        M.push(D);
        e: for (; 0 < w; ) {
            var $ = w - 1 >>> 1
              , ie = M[$];
            if (0 < i(ie, D))
                M[$] = D,
                M[w] = ie,
                w = $;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function r(M) {
        if (M.length === 0)
            return null;
        var D = M[0]
          , w = M.pop();
        if (w !== D) {
            M[0] = w;
            e: for (var $ = 0, ie = M.length, ft = ie >>> 1; $ < ft; ) {
                var ue = 2 * ($ + 1) - 1
                  , Le = M[ue]
                  , we = ue + 1
                  , he = M[we];
                if (0 > i(Le, w))
                    we < ie && 0 > i(he, Le) ? (M[$] = he,
                    M[we] = w,
                    $ = we) : (M[$] = Le,
                    M[ue] = w,
                    $ = ue);
                else if (we < ie && 0 > i(he, w))
                    M[$] = he,
                    M[we] = w,
                    $ = we;
                else
                    break e
            }
        }
        return D
    }
    function i(M, D) {
        var w = M.sortIndex - D.sortIndex;
        return w !== 0 ? w : M.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        t.unstable_now = function() {
            return l.now()
        }
    } else {
        var o = Date
          , s = o.now();
        t.unstable_now = function() {
            return o.now() - s
        }
    }
    var u = []
      , a = []
      , c = 1
      , p = null
      , f = 3
      , d = !1
      , y = !1
      , m = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(M) {
        for (var D = n(a); D !== null; ) {
            if (D.callback === null)
                r(a);
            else if (D.startTime <= M)
                r(a),
                D.sortIndex = D.expirationTime,
                e(u, D);
            else
                break;
            D = n(a)
        }
    }
    function x(M) {
        if (m = !1,
        _(M),
        !y)
            if (n(u) !== null)
                y = !0,
                Q(T);
            else {
                var D = n(a);
                D !== null && B(x, D.startTime - M)
            }
    }
    function T(M, D) {
        y = !1,
        m && (m = !1,
        g(E),
        E = -1),
        d = !0;
        var w = f;
        try {
            for (_(D),
            p = n(u); p !== null && (!(p.expirationTime > D) || M && !I()); ) {
                var $ = p.callback;
                if (typeof $ == "function") {
                    p.callback = null,
                    f = p.priorityLevel;
                    var ie = $(p.expirationTime <= D);
                    D = t.unstable_now(),
                    typeof ie == "function" ? p.callback = ie : p === n(u) && r(u),
                    _(D)
                } else
                    r(u);
                p = n(u)
            }
            if (p !== null)
                var ft = !0;
            else {
                var ue = n(a);
                ue !== null && B(x, ue.startTime - D),
                ft = !1
            }
            return ft
        } finally {
            p = null,
            f = w,
            d = !1
        }
    }
    var C = !1
      , S = null
      , E = -1
      , j = 5
      , P = -1;
    function I() {
        return !(t.unstable_now() - P < j)
    }
    function L() {
        if (S !== null) {
            var M = t.unstable_now();
            P = M;
            var D = !0;
            try {
                D = S(!0, M)
            } finally {
                D ? V() : (C = !1,
                S = null)
            }
        } else
            C = !1
    }
    var V;
    if (typeof h == "function")
        V = function() {
            h(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var X = new MessageChannel
          , ee = X.port2;
        X.port1.onmessage = L,
        V = function() {
            ee.postMessage(null)
        }
    } else
        V = function() {
            k(L, 0)
        }
        ;
    function Q(M) {
        S = M,
        C || (C = !0,
        V())
    }
    function B(M, D) {
        E = k(function() {
            M(t.unstable_now())
        }, D)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        y || d || (y = !0,
        Q(T))
    }
    ,
    t.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    t.unstable_next = function(M) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var D = 3;
            break;
        default:
            D = f
        }
        var w = f;
        f = D;
        try {
            return M()
        } finally {
            f = w
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(M, D) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var w = f;
        f = M;
        try {
            return D()
        } finally {
            f = w
        }
    }
    ,
    t.unstable_scheduleCallback = function(M, D, w) {
        var $ = t.unstable_now();
        switch (typeof w == "object" && w !== null ? (w = w.delay,
        w = typeof w == "number" && 0 < w ? $ + w : $) : w = $,
        M) {
        case 1:
            var ie = -1;
            break;
        case 2:
            ie = 250;
            break;
        case 5:
            ie = 1073741823;
            break;
        case 4:
            ie = 1e4;
            break;
        default:
            ie = 5e3
        }
        return ie = w + ie,
        M = {
            id: c++,
            callback: D,
            priorityLevel: M,
            startTime: w,
            expirationTime: ie,
            sortIndex: -1
        },
        w > $ ? (M.sortIndex = w,
        e(a, M),
        n(u) === null && M === n(a) && (m ? (g(E),
        E = -1) : m = !0,
        B(x, w - $))) : (M.sortIndex = ie,
        e(u, M),
        y || d || (y = !0,
        Q(T))),
        M
    }
    ,
    t.unstable_shouldYield = I,
    t.unstable_wrapCallback = function(M) {
        var D = f;
        return function() {
            var w = f;
            f = D;
            try {
                return M.apply(this, arguments)
            } finally {
                f = w
            }
        }
    }
}
)(v0);
_0.exports = v0;
var j_ = _0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M_ = Qe
  , dn = j_;
function O(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var y0 = new Set
  , Go = {};
function qi(t, e) {
    Fl(t, e),
    Fl(t + "Capture", e)
}
function Fl(t, e) {
    for (Go[t] = e,
    t = 0; t < e.length; t++)
        y0.add(e[t])
}
var Sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ec = Object.prototype.hasOwnProperty
  , O_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , hp = {}
  , mp = {};
function L_(t) {
    return Ec.call(mp, t) ? !0 : Ec.call(hp, t) ? !1 : O_.test(t) ? mp[t] = !0 : (hp[t] = !0,
    !1)
}
function z_(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function D_(t, e, n, r) {
    if (e === null || typeof e > "u" || z_(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Bt(t, e, n, r, i, l, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = l,
    this.removeEmptyString = o
}
var ct = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    ct[t] = new Bt(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    ct[e] = new Bt(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    ct[t] = new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    ct[t] = new Bt(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    ct[t] = new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    ct[t] = new Bt(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    ct[t] = new Bt(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    ct[t] = new Bt(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    ct[t] = new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var Gf = /[\-:]([a-z])/g;
function Kf(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(Gf, Kf);
    ct[e] = new Bt(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(Gf, Kf);
    ct[e] = new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(Gf, Kf);
    ct[e] = new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    ct[t] = new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)
});
ct.xlinkHref = new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    ct[t] = new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function Zf(t, e, n, r) {
    var i = ct.hasOwnProperty(e) ? ct[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (D_(e, n, i, r) && (n = null),
    r || i === null ? L_(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName,
    r = i.attributeNamespace,
    n === null ? t.removeAttribute(e) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var jr = M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Rs = Symbol.for("react.element")
  , fl = Symbol.for("react.portal")
  , dl = Symbol.for("react.fragment")
  , qf = Symbol.for("react.strict_mode")
  , Nc = Symbol.for("react.profiler")
  , x0 = Symbol.for("react.provider")
  , w0 = Symbol.for("react.context")
  , Jf = Symbol.for("react.forward_ref")
  , Pc = Symbol.for("react.suspense")
  , jc = Symbol.for("react.suspense_list")
  , ed = Symbol.for("react.memo")
  , Fr = Symbol.for("react.lazy")
  , k0 = Symbol.for("react.offscreen")
  , gp = Symbol.iterator;
function lo(t) {
    return t === null || typeof t != "object" ? null : (t = gp && t[gp] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Pe = Object.assign, Fa;
function _o(t) {
    if (Fa === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Fa = e && e[1] || ""
        }
    return `
` + Fa + t
}
var Ba = !1;
function Ua(t, e) {
    if (!t || Ba)
        return "";
    Ba = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (a) {
                    r = a
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            t()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var i = a.stack.split(`
`), l = r.stack.split(`
`), o = i.length - 1, s = l.length - 1; 1 <= o && 0 <= s && i[o] !== l[s]; )
                s--;
            for (; 1 <= o && 0 <= s; o--,
            s--)
                if (i[o] !== l[s]) {
                    if (o !== 1 || s !== 1)
                        do
                            if (o--,
                            s--,
                            0 > s || i[o] !== l[s]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return t.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", t.displayName)),
                                u
                            }
                        while (1 <= o && 0 <= s);
                    break
                }
        }
    } finally {
        Ba = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? _o(t) : ""
}
function R_(t) {
    switch (t.tag) {
    case 5:
        return _o(t.type);
    case 16:
        return _o("Lazy");
    case 13:
        return _o("Suspense");
    case 19:
        return _o("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = Ua(t.type, !1),
        t;
    case 11:
        return t = Ua(t.type.render, !1),
        t;
    case 1:
        return t = Ua(t.type, !0),
        t;
    default:
        return ""
    }
}
function Mc(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case dl:
        return "Fragment";
    case fl:
        return "Portal";
    case Nc:
        return "Profiler";
    case qf:
        return "StrictMode";
    case Pc:
        return "Suspense";
    case jc:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case w0:
            return (t.displayName || "Context") + ".Consumer";
        case x0:
            return (t._context.displayName || "Context") + ".Provider";
        case Jf:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case ed:
            return e = t.displayName || null,
            e !== null ? e : Mc(t.type) || "Memo";
        case Fr:
            e = t._payload,
            t = t._init;
            try {
                return Mc(t(e))
            } catch {}
        }
    return null
}
function A_(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Mc(e);
    case 8:
        return e === qf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function si(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function S0(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function I_(t) {
    var e = S0(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , l = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                l.call(this, o)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function As(t) {
    t._valueTracker || (t._valueTracker = I_(t))
}
function T0(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = S0(t) ? t.checked ? "true" : "false" : t.value),
    t = r,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function Du(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function Oc(t, e) {
    var n = e.checked;
    return Pe({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function _p(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    n = si(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function C0(t, e) {
    e = e.checked,
    e != null && Zf(t, "checked", e, !1)
}
function Lc(t, e) {
    C0(t, e);
    var n = si(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? zc(t, e.type, n) : e.hasOwnProperty("defaultValue") && zc(t, e.type, si(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function vp(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function zc(t, e, n) {
    (e !== "number" || Du(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var vo = Array.isArray;
function El(t, e, n, r) {
    if (t = t.options,
    e) {
        e = {};
        for (var i = 0; i < n.length; i++)
            e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++)
            i = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== i && (t[n].selected = i),
            i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + si(n),
        e = null,
        i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0,
                r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}
function Dc(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(O(91));
    return Pe({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function yp(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(O(92));
            if (vo(n)) {
                if (1 < n.length)
                    throw Error(O(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: si(n)
    }
}
function E0(t, e) {
    var n = si(e.value)
      , r = si(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r)
}
function xp(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function N0(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Rc(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? N0(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Is, P0 = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, i)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (Is = Is || document.createElement("div"),
        Is.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Is.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function Ko(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Po = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , F_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Po).forEach(function(t) {
    F_.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        Po[e] = Po[t]
    })
});
function j0(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Po.hasOwnProperty(t) && Po[t] ? ("" + e).trim() : e + "px"
}
function M0(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = j0(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, i) : t[n] = i
        }
}
var B_ = Pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ac(t, e) {
    if (e) {
        if (B_[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(O(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(O(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(O(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(O(62))
    }
}
function Ic(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Fc = null;
function td(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var Bc = null
  , Nl = null
  , Pl = null;
function wp(t) {
    if (t = Es(t)) {
        if (typeof Bc != "function")
            throw Error(O(280));
        var e = t.stateNode;
        e && (e = wa(e),
        Bc(t.stateNode, t.type, e))
    }
}
function O0(t) {
    Nl ? Pl ? Pl.push(t) : Pl = [t] : Nl = t
}
function L0() {
    if (Nl) {
        var t = Nl
          , e = Pl;
        if (Pl = Nl = null,
        wp(t),
        e)
            for (t = 0; t < e.length; t++)
                wp(e[t])
    }
}
function z0(t, e) {
    return t(e)
}
function D0() {}
var $a = !1;
function R0(t, e, n) {
    if ($a)
        return t(e, n);
    $a = !0;
    try {
        return z0(t, e, n)
    } finally {
        $a = !1,
        (Nl !== null || Pl !== null) && (D0(),
        L0())
    }
}
function Zo(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = wa(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (t = t.type,
        r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !r;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(O(231, e, typeof n));
    return n
}
var Uc = !1;
if (Sr)
    try {
        var oo = {};
        Object.defineProperty(oo, "passive", {
            get: function() {
                Uc = !0
            }
        }),
        window.addEventListener("test", oo, oo),
        window.removeEventListener("test", oo, oo)
    } catch {
        Uc = !1
    }
function U_(t, e, n, r, i, l, o, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, a)
    } catch (c) {
        this.onError(c)
    }
}
var jo = !1
  , Ru = null
  , Au = !1
  , $c = null
  , $_ = {
    onError: function(t) {
        jo = !0,
        Ru = t
    }
};
function b_(t, e, n, r, i, l, o, s, u) {
    jo = !1,
    Ru = null,
    U_.apply($_, arguments)
}
function V_(t, e, n, r, i, l, o, s, u) {
    if (b_.apply(this, arguments),
    jo) {
        if (jo) {
            var a = Ru;
            jo = !1,
            Ru = null
        } else
            throw Error(O(198));
        Au || (Au = !0,
        $c = a)
    }
}
function Ji(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function A0(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function kp(t) {
    if (Ji(t) !== t)
        throw Error(O(188))
}
function H_(t) {
    var e = t.alternate;
    if (!e) {
        if (e = Ji(t),
        e === null)
            throw Error(O(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var l = i.alternate;
        if (l === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === l.child) {
            for (l = i.child; l; ) {
                if (l === n)
                    return kp(i),
                    t;
                if (l === r)
                    return kp(i),
                    e;
                l = l.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return)
            n = i,
            r = l;
        else {
            for (var o = !1, s = i.child; s; ) {
                if (s === n) {
                    o = !0,
                    n = i,
                    r = l;
                    break
                }
                if (s === r) {
                    o = !0,
                    r = i,
                    n = l;
                    break
                }
                s = s.sibling
            }
            if (!o) {
                for (s = l.child; s; ) {
                    if (s === n) {
                        o = !0,
                        n = l,
                        r = i;
                        break
                    }
                    if (s === r) {
                        o = !0,
                        r = l,
                        n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!o)
                    throw Error(O(189))
            }
        }
        if (n.alternate !== r)
            throw Error(O(190))
    }
    if (n.tag !== 3)
        throw Error(O(188));
    return n.stateNode.current === n ? t : e
}
function I0(t) {
    return t = H_(t),
    t !== null ? F0(t) : null
}
function F0(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = F0(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var B0 = dn.unstable_scheduleCallback
  , Sp = dn.unstable_cancelCallback
  , W_ = dn.unstable_shouldYield
  , Y_ = dn.unstable_requestPaint
  , Ie = dn.unstable_now
  , X_ = dn.unstable_getCurrentPriorityLevel
  , nd = dn.unstable_ImmediatePriority
  , U0 = dn.unstable_UserBlockingPriority
  , Iu = dn.unstable_NormalPriority
  , Q_ = dn.unstable_LowPriority
  , $0 = dn.unstable_IdlePriority
  , _a = null
  , ir = null;
function G_(t) {
    if (ir && typeof ir.onCommitFiberRoot == "function")
        try {
            ir.onCommitFiberRoot(_a, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var Vn = Math.clz32 ? Math.clz32 : q_
  , K_ = Math.log
  , Z_ = Math.LN2;
function q_(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (K_(t) / Z_ | 0) | 0
}
var Fs = 64
  , Bs = 4194304;
function yo(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function Fu(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = t.suspendedLanes
      , l = t.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var s = o & ~i;
        s !== 0 ? r = yo(s) : (l &= o,
        l !== 0 && (r = yo(l)))
    } else
        o = n & ~i,
        o !== 0 ? r = yo(o) : l !== 0 && (r = yo(l));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r,
    l = e & -e,
    i >= l || i === 16 && (l & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= r; 0 < e; )
            n = 31 - Vn(e),
            i = 1 << n,
            r |= t[n],
            e &= ~i;
    return r
}
function J_(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function ev(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, l = t.pendingLanes; 0 < l; ) {
        var o = 31 - Vn(l)
          , s = 1 << o
          , u = i[o];
        u === -1 ? (!(s & n) || s & r) && (i[o] = J_(s, e)) : u <= e && (t.expiredLanes |= s),
        l &= ~s
    }
}
function bc(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function b0() {
    var t = Fs;
    return Fs <<= 1,
    !(Fs & 4194240) && (Fs = 64),
    t
}
function ba(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function Ts(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - Vn(e),
    t[e] = n
}
function tv(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var i = 31 - Vn(n)
          , l = 1 << i;
        e[i] = 0,
        r[i] = -1,
        t[i] = -1,
        n &= ~l
    }
}
function rd(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var r = 31 - Vn(n)
          , i = 1 << r;
        i & e | t[r] & e && (t[r] |= e),
        n &= ~i
    }
}
var ae = 0;
function V0(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var H0, id, W0, Y0, X0, Vc = !1, Us = [], Gr = null, Kr = null, Zr = null, qo = new Map, Jo = new Map, Ur = [], nv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tp(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Gr = null;
        break;
    case "dragenter":
    case "dragleave":
        Kr = null;
        break;
    case "mouseover":
    case "mouseout":
        Zr = null;
        break;
    case "pointerover":
    case "pointerout":
        qo.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Jo.delete(e.pointerId)
    }
}
function so(t, e, n, r, i, l) {
    return t === null || t.nativeEvent !== l ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i]
    },
    e !== null && (e = Es(e),
    e !== null && id(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    i !== null && e.indexOf(i) === -1 && e.push(i),
    t)
}
function rv(t, e, n, r, i) {
    switch (e) {
    case "focusin":
        return Gr = so(Gr, t, e, n, r, i),
        !0;
    case "dragenter":
        return Kr = so(Kr, t, e, n, r, i),
        !0;
    case "mouseover":
        return Zr = so(Zr, t, e, n, r, i),
        !0;
    case "pointerover":
        var l = i.pointerId;
        return qo.set(l, so(qo.get(l) || null, t, e, n, r, i)),
        !0;
    case "gotpointercapture":
        return l = i.pointerId,
        Jo.set(l, so(Jo.get(l) || null, t, e, n, r, i)),
        !0
    }
    return !1
}
function Q0(t) {
    var e = Pi(t.target);
    if (e !== null) {
        var n = Ji(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = A0(n),
                e !== null) {
                    t.blockedOn = e,
                    X0(t.priority, function() {
                        W0(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function mu(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Hc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            Fc = r,
            n.target.dispatchEvent(r),
            Fc = null
        } else
            return e = Es(n),
            e !== null && id(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Cp(t, e, n) {
    mu(t) && n.delete(e)
}
function iv() {
    Vc = !1,
    Gr !== null && mu(Gr) && (Gr = null),
    Kr !== null && mu(Kr) && (Kr = null),
    Zr !== null && mu(Zr) && (Zr = null),
    qo.forEach(Cp),
    Jo.forEach(Cp)
}
function uo(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    Vc || (Vc = !0,
    dn.unstable_scheduleCallback(dn.unstable_NormalPriority, iv)))
}
function es(t) {
    function e(i) {
        return uo(i, t)
    }
    if (0 < Us.length) {
        uo(Us[0], t);
        for (var n = 1; n < Us.length; n++) {
            var r = Us[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Gr !== null && uo(Gr, t),
    Kr !== null && uo(Kr, t),
    Zr !== null && uo(Zr, t),
    qo.forEach(e),
    Jo.forEach(e),
    n = 0; n < Ur.length; n++)
        r = Ur[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < Ur.length && (n = Ur[0],
    n.blockedOn === null); )
        Q0(n),
        n.blockedOn === null && Ur.shift()
}
var jl = jr.ReactCurrentBatchConfig
  , Bu = !0;
function lv(t, e, n, r) {
    var i = ae
      , l = jl.transition;
    jl.transition = null;
    try {
        ae = 1,
        ld(t, e, n, r)
    } finally {
        ae = i,
        jl.transition = l
    }
}
function ov(t, e, n, r) {
    var i = ae
      , l = jl.transition;
    jl.transition = null;
    try {
        ae = 4,
        ld(t, e, n, r)
    } finally {
        ae = i,
        jl.transition = l
    }
}
function ld(t, e, n, r) {
    if (Bu) {
        var i = Hc(t, e, n, r);
        if (i === null)
            qa(t, e, r, Uu, n),
            Tp(t, r);
        else if (rv(i, t, e, n, r))
            r.stopPropagation();
        else if (Tp(t, r),
        e & 4 && -1 < nv.indexOf(t)) {
            for (; i !== null; ) {
                var l = Es(i);
                if (l !== null && H0(l),
                l = Hc(t, e, n, r),
                l === null && qa(t, e, r, Uu, n),
                l === i)
                    break;
                i = l
            }
            i !== null && r.stopPropagation()
        } else
            qa(t, e, r, null, n)
    }
}
var Uu = null;
function Hc(t, e, n, r) {
    if (Uu = null,
    t = td(r),
    t = Pi(t),
    t !== null)
        if (e = Ji(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = A0(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return Uu = t,
    null
}
function G0(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (X_()) {
        case nd:
            return 1;
        case U0:
            return 4;
        case Iu:
        case Q_:
            return 16;
        case $0:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var br = null
  , od = null
  , gu = null;
function K0() {
    if (gu)
        return gu;
    var t, e = od, n = e.length, r, i = "value"in br ? br.value : br.textContent, l = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++)
        ;
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === i[l - r]; r++)
        ;
    return gu = i.slice(t, 1 < r ? 1 - r : void 0)
}
function _u(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function $s() {
    return !0
}
function Ep() {
    return !1
}
function mn(t) {
    function e(n, r, i, l, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = l,
        this.target = o,
        this.currentTarget = null;
        for (var s in t)
            t.hasOwnProperty(s) && (n = t[s],
            this[s] = n ? n(l) : l[s]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? $s : Ep,
        this.isPropagationStopped = Ep,
        this
    }
    return Pe(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = $s)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = $s)
        },
        persist: function() {},
        isPersistent: $s
    }),
    e
}
var ql = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, sd = mn(ql), Cs = Pe({}, ql, {
    view: 0,
    detail: 0
}), sv = mn(Cs), Va, Ha, ao, va = Pe({}, Cs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ud,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== ao && (ao && t.type === "mousemove" ? (Va = t.screenX - ao.screenX,
        Ha = t.screenY - ao.screenY) : Ha = Va = 0,
        ao = t),
        Va)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : Ha
    }
}), Np = mn(va), uv = Pe({}, va, {
    dataTransfer: 0
}), av = mn(uv), cv = Pe({}, Cs, {
    relatedTarget: 0
}), Wa = mn(cv), fv = Pe({}, ql, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), dv = mn(fv), pv = Pe({}, ql, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), hv = mn(pv), mv = Pe({}, ql, {
    data: 0
}), Pp = mn(mv), gv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, _v = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, vv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function yv(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = vv[t]) ? !!e[t] : !1
}
function ud() {
    return yv
}
var xv = Pe({}, Cs, {
    key: function(t) {
        if (t.key) {
            var e = gv[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = _u(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? _v[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ud,
    charCode: function(t) {
        return t.type === "keypress" ? _u(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? _u(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , wv = mn(xv)
  , kv = Pe({}, va, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , jp = mn(kv)
  , Sv = Pe({}, Cs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ud
})
  , Tv = mn(Sv)
  , Cv = Pe({}, ql, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Ev = mn(Cv)
  , Nv = Pe({}, va, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Pv = mn(Nv)
  , jv = [9, 13, 27, 32]
  , ad = Sr && "CompositionEvent"in window
  , Mo = null;
Sr && "documentMode"in document && (Mo = document.documentMode);
var Mv = Sr && "TextEvent"in window && !Mo
  , Z0 = Sr && (!ad || Mo && 8 < Mo && 11 >= Mo)
  , Mp = " "
  , Op = !1;
function q0(t, e) {
    switch (t) {
    case "keyup":
        return jv.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function J0(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var pl = !1;
function Ov(t, e) {
    switch (t) {
    case "compositionend":
        return J0(e);
    case "keypress":
        return e.which !== 32 ? null : (Op = !0,
        Mp);
    case "textInput":
        return t = e.data,
        t === Mp && Op ? null : t;
    default:
        return null
    }
}
function Lv(t, e) {
    if (pl)
        return t === "compositionend" || !ad && q0(t, e) ? (t = K0(),
        gu = od = br = null,
        pl = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Z0 && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var zv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Lp(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!zv[t.type] : e === "textarea"
}
function em(t, e, n, r) {
    O0(r),
    e = $u(e, "onChange"),
    0 < e.length && (n = new sd("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var Oo = null
  , ts = null;
function Dv(t) {
    fm(t, 0)
}
function ya(t) {
    var e = gl(t);
    if (T0(e))
        return t
}
function Rv(t, e) {
    if (t === "change")
        return e
}
var tm = !1;
if (Sr) {
    var Ya;
    if (Sr) {
        var Xa = "oninput"in document;
        if (!Xa) {
            var zp = document.createElement("div");
            zp.setAttribute("oninput", "return;"),
            Xa = typeof zp.oninput == "function"
        }
        Ya = Xa
    } else
        Ya = !1;
    tm = Ya && (!document.documentMode || 9 < document.documentMode)
}
function Dp() {
    Oo && (Oo.detachEvent("onpropertychange", nm),
    ts = Oo = null)
}
function nm(t) {
    if (t.propertyName === "value" && ya(ts)) {
        var e = [];
        em(e, ts, t, td(t)),
        R0(Dv, e)
    }
}
function Av(t, e, n) {
    t === "focusin" ? (Dp(),
    Oo = e,
    ts = n,
    Oo.attachEvent("onpropertychange", nm)) : t === "focusout" && Dp()
}
function Iv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return ya(ts)
}
function Fv(t, e) {
    if (t === "click")
        return ya(e)
}
function Bv(t, e) {
    if (t === "input" || t === "change")
        return ya(e)
}
function Uv(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Wn = typeof Object.is == "function" ? Object.is : Uv;
function ns(t, e) {
    if (Wn(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ec.call(e, i) || !Wn(t[i], e[i]))
            return !1
    }
    return !0
}
function Rp(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Ap(t, e) {
    var n = Rp(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
            t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Rp(n)
    }
}
function rm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? rm(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function im() {
    for (var t = window, e = Du(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = Du(t.document)
    }
    return e
}
function cd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function $v(t) {
    var e = im()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && rm(n.ownerDocument.documentElement, n)) {
        if (r !== null && cd(n)) {
            if (e = r.start,
            t = r.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length
                  , l = Math.min(r.start, i);
                r = r.end === void 0 ? l : Math.min(r.end, i),
                !t.extend && l > r && (i = r,
                r = l,
                l = i),
                i = Ap(n, l);
                var o = Ap(n, r);
                i && o && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(i.node, i.offset),
                t.removeAllRanges(),
                l > r ? (t.addRange(e),
                t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var bv = Sr && "documentMode"in document && 11 >= document.documentMode
  , hl = null
  , Wc = null
  , Lo = null
  , Yc = !1;
function Ip(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yc || hl == null || hl !== Du(r) || (r = hl,
    "selectionStart"in r && cd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Lo && ns(Lo, r) || (Lo = r,
    r = $u(Wc, "onSelect"),
    0 < r.length && (e = new sd("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = hl)))
}
function bs(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var ml = {
    animationend: bs("Animation", "AnimationEnd"),
    animationiteration: bs("Animation", "AnimationIteration"),
    animationstart: bs("Animation", "AnimationStart"),
    transitionend: bs("Transition", "TransitionEnd")
}
  , Qa = {}
  , lm = {};
Sr && (lm = document.createElement("div").style,
"AnimationEvent"in window || (delete ml.animationend.animation,
delete ml.animationiteration.animation,
delete ml.animationstart.animation),
"TransitionEvent"in window || delete ml.transitionend.transition);
function xa(t) {
    if (Qa[t])
        return Qa[t];
    if (!ml[t])
        return t;
    var e = ml[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in lm)
            return Qa[t] = e[n];
    return t
}
var om = xa("animationend")
  , sm = xa("animationiteration")
  , um = xa("animationstart")
  , am = xa("transitionend")
  , cm = new Map
  , Fp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function di(t, e) {
    cm.set(t, e),
    qi(e, [t])
}
for (var Ga = 0; Ga < Fp.length; Ga++) {
    var Ka = Fp[Ga]
      , Vv = Ka.toLowerCase()
      , Hv = Ka[0].toUpperCase() + Ka.slice(1);
    di(Vv, "on" + Hv)
}
di(om, "onAnimationEnd");
di(sm, "onAnimationIteration");
di(um, "onAnimationStart");
di("dblclick", "onDoubleClick");
di("focusin", "onFocus");
di("focusout", "onBlur");
di(am, "onTransitionEnd");
Fl("onMouseEnter", ["mouseout", "mouseover"]);
Fl("onMouseLeave", ["mouseout", "mouseover"]);
Fl("onPointerEnter", ["pointerout", "pointerover"]);
Fl("onPointerLeave", ["pointerout", "pointerover"]);
qi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Wv = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
function Bp(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    V_(r, e, void 0, t),
    t.currentTarget = null
}
function fm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o]
                      , u = s.instance
                      , a = s.currentTarget;
                    if (s = s.listener,
                    u !== l && i.isPropagationStopped())
                        break e;
                    Bp(i, s, a),
                    l = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (s = r[o],
                    u = s.instance,
                    a = s.currentTarget,
                    s = s.listener,
                    u !== l && i.isPropagationStopped())
                        break e;
                    Bp(i, s, a),
                    l = u
                }
        }
    }
    if (Au)
        throw t = $c,
        Au = !1,
        $c = null,
        t
}
function me(t, e) {
    var n = e[Zc];
    n === void 0 && (n = e[Zc] = new Set);
    var r = t + "__bubble";
    n.has(r) || (dm(e, t, 2, !1),
    n.add(r))
}
function Za(t, e, n) {
    var r = 0;
    e && (r |= 4),
    dm(n, t, r, e)
}
var Vs = "_reactListening" + Math.random().toString(36).slice(2);
function rs(t) {
    if (!t[Vs]) {
        t[Vs] = !0,
        y0.forEach(function(n) {
            n !== "selectionchange" && (Wv.has(n) || Za(n, !1, t),
            Za(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Vs] || (e[Vs] = !0,
        Za("selectionchange", !1, e))
    }
}
function dm(t, e, n, r) {
    switch (G0(e)) {
    case 1:
        var i = lv;
        break;
    case 4:
        i = ov;
        break;
    default:
        i = ld
    }
    n = i.bind(null, e, n, t),
    i = void 0,
    !Uc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0),
    r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}
function qa(t, e, n, r, i) {
    var l = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var s = r.stateNode.containerInfo;
                if (s === i || s.nodeType === 8 && s.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                        u === i || u.nodeType === 8 && u.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; s !== null; ) {
                    if (o = Pi(s),
                    o === null)
                        return;
                    if (u = o.tag,
                    u === 5 || u === 6) {
                        r = l = o;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    R0(function() {
        var a = l
          , c = td(n)
          , p = [];
        e: {
            var f = cm.get(t);
            if (f !== void 0) {
                var d = sd
                  , y = t;
                switch (t) {
                case "keypress":
                    if (_u(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    d = wv;
                    break;
                case "focusin":
                    y = "focus",
                    d = Wa;
                    break;
                case "focusout":
                    y = "blur",
                    d = Wa;
                    break;
                case "beforeblur":
                case "afterblur":
                    d = Wa;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    d = Np;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    d = av;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    d = Tv;
                    break;
                case om:
                case sm:
                case um:
                    d = dv;
                    break;
                case am:
                    d = Ev;
                    break;
                case "scroll":
                    d = sv;
                    break;
                case "wheel":
                    d = Pv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    d = hv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    d = jp
                }
                var m = (e & 4) !== 0
                  , k = !m && t === "scroll"
                  , g = m ? f !== null ? f + "Capture" : null : f;
                m = [];
                for (var h = a, _; h !== null; ) {
                    _ = h;
                    var x = _.stateNode;
                    if (_.tag === 5 && x !== null && (_ = x,
                    g !== null && (x = Zo(h, g),
                    x != null && m.push(is(h, x, _)))),
                    k)
                        break;
                    h = h.return
                }
                0 < m.length && (f = new d(f,y,null,n,c),
                p.push({
                    event: f,
                    listeners: m
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (f = t === "mouseover" || t === "pointerover",
                d = t === "mouseout" || t === "pointerout",
                f && n !== Fc && (y = n.relatedTarget || n.fromElement) && (Pi(y) || y[Tr]))
                    break e;
                if ((d || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                d ? (y = n.relatedTarget || n.toElement,
                d = a,
                y = y ? Pi(y) : null,
                y !== null && (k = Ji(y),
                y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (d = null,
                y = a),
                d !== y)) {
                    if (m = Np,
                    x = "onMouseLeave",
                    g = "onMouseEnter",
                    h = "mouse",
                    (t === "pointerout" || t === "pointerover") && (m = jp,
                    x = "onPointerLeave",
                    g = "onPointerEnter",
                    h = "pointer"),
                    k = d == null ? f : gl(d),
                    _ = y == null ? f : gl(y),
                    f = new m(x,h + "leave",d,n,c),
                    f.target = k,
                    f.relatedTarget = _,
                    x = null,
                    Pi(c) === a && (m = new m(g,h + "enter",y,n,c),
                    m.target = _,
                    m.relatedTarget = k,
                    x = m),
                    k = x,
                    d && y)
                        t: {
                            for (m = d,
                            g = y,
                            h = 0,
                            _ = m; _; _ = ll(_))
                                h++;
                            for (_ = 0,
                            x = g; x; x = ll(x))
                                _++;
                            for (; 0 < h - _; )
                                m = ll(m),
                                h--;
                            for (; 0 < _ - h; )
                                g = ll(g),
                                _--;
                            for (; h--; ) {
                                if (m === g || g !== null && m === g.alternate)
                                    break t;
                                m = ll(m),
                                g = ll(g)
                            }
                            m = null
                        }
                    else
                        m = null;
                    d !== null && Up(p, f, d, m, !1),
                    y !== null && k !== null && Up(p, k, y, m, !0)
                }
            }
            e: {
                if (f = a ? gl(a) : window,
                d = f.nodeName && f.nodeName.toLowerCase(),
                d === "select" || d === "input" && f.type === "file")
                    var T = Rv;
                else if (Lp(f))
                    if (tm)
                        T = Bv;
                    else {
                        T = Iv;
                        var C = Av
                    }
                else
                    (d = f.nodeName) && d.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (T = Fv);
                if (T && (T = T(t, a))) {
                    em(p, T, n, c);
                    break e
                }
                C && C(t, f, a),
                t === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && zc(f, "number", f.value)
            }
            switch (C = a ? gl(a) : window,
            t) {
            case "focusin":
                (Lp(C) || C.contentEditable === "true") && (hl = C,
                Wc = a,
                Lo = null);
                break;
            case "focusout":
                Lo = Wc = hl = null;
                break;
            case "mousedown":
                Yc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Yc = !1,
                Ip(p, n, c);
                break;
            case "selectionchange":
                if (bv)
                    break;
            case "keydown":
            case "keyup":
                Ip(p, n, c)
            }
            var S;
            if (ad)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                    }
                    E = void 0
                }
            else
                pl ? q0(t, n) && (E = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (Z0 && n.locale !== "ko" && (pl || E !== "onCompositionStart" ? E === "onCompositionEnd" && pl && (S = K0()) : (br = c,
            od = "value"in br ? br.value : br.textContent,
            pl = !0)),
            C = $u(a, E),
            0 < C.length && (E = new Pp(E,t,null,n,c),
            p.push({
                event: E,
                listeners: C
            }),
            S ? E.data = S : (S = J0(n),
            S !== null && (E.data = S)))),
            (S = Mv ? Ov(t, n) : Lv(t, n)) && (a = $u(a, "onBeforeInput"),
            0 < a.length && (c = new Pp("onBeforeInput","beforeinput",null,n,c),
            p.push({
                event: c,
                listeners: a
            }),
            c.data = S))
        }
        fm(p, e)
    })
}
function is(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function $u(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var i = t
          , l = i.stateNode;
        i.tag === 5 && l !== null && (i = l,
        l = Zo(t, n),
        l != null && r.unshift(is(t, l, i)),
        l = Zo(t, e),
        l != null && r.push(is(t, l, i))),
        t = t.return
    }
    return r
}
function ll(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Up(t, e, n, r, i) {
    for (var l = e._reactName, o = []; n !== null && n !== r; ) {
        var s = n
          , u = s.alternate
          , a = s.stateNode;
        if (u !== null && u === r)
            break;
        s.tag === 5 && a !== null && (s = a,
        i ? (u = Zo(n, l),
        u != null && o.unshift(is(n, u, s))) : i || (u = Zo(n, l),
        u != null && o.push(is(n, u, s)))),
        n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var Yv = /\r\n?/g
  , Xv = /\u0000|\uFFFD/g;
function $p(t) {
    return (typeof t == "string" ? t : "" + t).replace(Yv, `
`).replace(Xv, "")
}
function Hs(t, e, n) {
    if (e = $p(e),
    $p(t) !== e && n)
        throw Error(O(425))
}
function bu() {}
var Xc = null
  , Qc = null;
function Gc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Kc = typeof setTimeout == "function" ? setTimeout : void 0
  , Qv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , bp = typeof Promise == "function" ? Promise : void 0
  , Gv = typeof queueMicrotask == "function" ? queueMicrotask : typeof bp < "u" ? function(t) {
    return bp.resolve(null).then(t).catch(Kv)
}
: Kc;
function Kv(t) {
    setTimeout(function() {
        throw t
    })
}
function Ja(t, e) {
    var n = e
      , r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    t.removeChild(i),
                    es(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    es(e)
}
function qr(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Vp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Jl = Math.random().toString(36).slice(2)
  , Jn = "__reactFiber$" + Jl
  , ls = "__reactProps$" + Jl
  , Tr = "__reactContainer$" + Jl
  , Zc = "__reactEvents$" + Jl
  , Zv = "__reactListeners$" + Jl
  , qv = "__reactHandles$" + Jl;
function Pi(t) {
    var e = t[Jn];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[Tr] || n[Jn]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = Vp(t); t !== null; ) {
                    if (n = t[Jn])
                        return n;
                    t = Vp(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function Es(t) {
    return t = t[Jn] || t[Tr],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function gl(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(O(33))
}
function wa(t) {
    return t[ls] || null
}
var qc = []
  , _l = -1;
function pi(t) {
    return {
        current: t
    }
}
function _e(t) {
    0 > _l || (t.current = qc[_l],
    qc[_l] = null,
    _l--)
}
function pe(t, e) {
    _l++,
    qc[_l] = t.current,
    t.current = e
}
var ui = {}
  , Tt = pi(ui)
  , Ht = pi(!1)
  , bi = ui;
function Bl(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return ui;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n)
        i[l] = e[l];
    return r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Wt(t) {
    return t = t.childContextTypes,
    t != null
}
function Vu() {
    _e(Ht),
    _e(Tt)
}
function Hp(t, e, n) {
    if (Tt.current !== ui)
        throw Error(O(168));
    pe(Tt, e),
    pe(Ht, n)
}
function pm(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e))
            throw Error(O(108, A_(t) || "Unknown", i));
    return Pe({}, n, r)
}
function Hu(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || ui,
    bi = Tt.current,
    pe(Tt, t),
    pe(Ht, Ht.current),
    !0
}
function Wp(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(O(169));
    n ? (t = pm(t, e, bi),
    r.__reactInternalMemoizedMergedChildContext = t,
    _e(Ht),
    _e(Tt),
    pe(Tt, t)) : _e(Ht),
    pe(Ht, n)
}
var hr = null
  , ka = !1
  , ec = !1;
function hm(t) {
    hr === null ? hr = [t] : hr.push(t)
}
function Jv(t) {
    ka = !0,
    hm(t)
}
function hi() {
    if (!ec && hr !== null) {
        ec = !0;
        var t = 0
          , e = ae;
        try {
            var n = hr;
            for (ae = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            hr = null,
            ka = !1
        } catch (i) {
            throw hr !== null && (hr = hr.slice(t + 1)),
            B0(nd, hi),
            i
        } finally {
            ae = e,
            ec = !1
        }
    }
    return null
}
var vl = []
  , yl = 0
  , Wu = null
  , Yu = 0
  , vn = []
  , yn = 0
  , Vi = null
  , _r = 1
  , vr = "";
function Si(t, e) {
    vl[yl++] = Yu,
    vl[yl++] = Wu,
    Wu = t,
    Yu = e
}
function mm(t, e, n) {
    vn[yn++] = _r,
    vn[yn++] = vr,
    vn[yn++] = Vi,
    Vi = t;
    var r = _r;
    t = vr;
    var i = 32 - Vn(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var l = 32 - Vn(e) + i;
    if (30 < l) {
        var o = i - i % 5;
        l = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        _r = 1 << 32 - Vn(e) + i | n << i | r,
        vr = l + t
    } else
        _r = 1 << l | n << i | r,
        vr = t
}
function fd(t) {
    t.return !== null && (Si(t, 1),
    mm(t, 1, 0))
}
function dd(t) {
    for (; t === Wu; )
        Wu = vl[--yl],
        vl[yl] = null,
        Yu = vl[--yl],
        vl[yl] = null;
    for (; t === Vi; )
        Vi = vn[--yn],
        vn[yn] = null,
        vr = vn[--yn],
        vn[yn] = null,
        _r = vn[--yn],
        vn[yn] = null
}
var cn = null
  , un = null
  , ye = !1
  , $n = null;
function gm(t, e) {
    var n = kn(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function Yp(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        cn = t,
        un = qr(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        cn = t,
        un = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = Vi !== null ? {
            id: _r,
            overflow: vr
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = kn(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        cn = t,
        un = null,
        !0) : !1;
    default:
        return !1
    }
}
function Jc(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function ef(t) {
    if (ye) {
        var e = un;
        if (e) {
            var n = e;
            if (!Yp(t, e)) {
                if (Jc(t))
                    throw Error(O(418));
                e = qr(n.nextSibling);
                var r = cn;
                e && Yp(t, e) ? gm(r, n) : (t.flags = t.flags & -4097 | 2,
                ye = !1,
                cn = t)
            }
        } else {
            if (Jc(t))
                throw Error(O(418));
            t.flags = t.flags & -4097 | 2,
            ye = !1,
            cn = t
        }
    }
}
function Xp(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    cn = t
}
function Ws(t) {
    if (t !== cn)
        return !1;
    if (!ye)
        return Xp(t),
        ye = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Gc(t.type, t.memoizedProps)),
    e && (e = un)) {
        if (Jc(t))
            throw _m(),
            Error(O(418));
        for (; e; )
            gm(t, e),
            e = qr(e.nextSibling)
    }
    if (Xp(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(O(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            un = qr(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            un = null
        }
    } else
        un = cn ? qr(t.stateNode.nextSibling) : null;
    return !0
}
function _m() {
    for (var t = un; t; )
        t = qr(t.nextSibling)
}
function Ul() {
    un = cn = null,
    ye = !1
}
function pd(t) {
    $n === null ? $n = [t] : $n.push(t)
}
var ey = jr.ReactCurrentBatchConfig;
function co(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(O(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(O(147, t));
            var i = r
              , l = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === l ? e.ref : (e = function(o) {
                var s = i.refs;
                o === null ? delete s[l] : s[l] = o
            }
            ,
            e._stringRef = l,
            e)
        }
        if (typeof t != "string")
            throw Error(O(284));
        if (!n._owner)
            throw Error(O(290, t))
    }
    return t
}
function Ys(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(O(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function Qp(t) {
    var e = t._init;
    return e(t._payload)
}
function vm(t) {
    function e(g, h) {
        if (t) {
            var _ = g.deletions;
            _ === null ? (g.deletions = [h],
            g.flags |= 16) : _.push(h)
        }
    }
    function n(g, h) {
        if (!t)
            return null;
        for (; h !== null; )
            e(g, h),
            h = h.sibling;
        return null
    }
    function r(g, h) {
        for (g = new Map; h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
            h = h.sibling;
        return g
    }
    function i(g, h) {
        return g = ni(g, h),
        g.index = 0,
        g.sibling = null,
        g
    }
    function l(g, h, _) {
        return g.index = _,
        t ? (_ = g.alternate,
        _ !== null ? (_ = _.index,
        _ < h ? (g.flags |= 2,
        h) : _) : (g.flags |= 2,
        h)) : (g.flags |= 1048576,
        h)
    }
    function o(g) {
        return t && g.alternate === null && (g.flags |= 2),
        g
    }
    function s(g, h, _, x) {
        return h === null || h.tag !== 6 ? (h = sc(_, g.mode, x),
        h.return = g,
        h) : (h = i(h, _),
        h.return = g,
        h)
    }
    function u(g, h, _, x) {
        var T = _.type;
        return T === dl ? c(g, h, _.props.children, x, _.key) : h !== null && (h.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Fr && Qp(T) === h.type) ? (x = i(h, _.props),
        x.ref = co(g, h, _),
        x.return = g,
        x) : (x = Tu(_.type, _.key, _.props, null, g.mode, x),
        x.ref = co(g, h, _),
        x.return = g,
        x)
    }
    function a(g, h, _, x) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== _.containerInfo || h.stateNode.implementation !== _.implementation ? (h = uc(_, g.mode, x),
        h.return = g,
        h) : (h = i(h, _.children || []),
        h.return = g,
        h)
    }
    function c(g, h, _, x, T) {
        return h === null || h.tag !== 7 ? (h = Di(_, g.mode, x, T),
        h.return = g,
        h) : (h = i(h, _),
        h.return = g,
        h)
    }
    function p(g, h, _) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = sc("" + h, g.mode, _),
            h.return = g,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Rs:
                return _ = Tu(h.type, h.key, h.props, null, g.mode, _),
                _.ref = co(g, null, h),
                _.return = g,
                _;
            case fl:
                return h = uc(h, g.mode, _),
                h.return = g,
                h;
            case Fr:
                var x = h._init;
                return p(g, x(h._payload), _)
            }
            if (vo(h) || lo(h))
                return h = Di(h, g.mode, _, null),
                h.return = g,
                h;
            Ys(g, h)
        }
        return null
    }
    function f(g, h, _, x) {
        var T = h !== null ? h.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return T !== null ? null : s(g, h, "" + _, x);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case Rs:
                return _.key === T ? u(g, h, _, x) : null;
            case fl:
                return _.key === T ? a(g, h, _, x) : null;
            case Fr:
                return T = _._init,
                f(g, h, T(_._payload), x)
            }
            if (vo(_) || lo(_))
                return T !== null ? null : c(g, h, _, x, null);
            Ys(g, _)
        }
        return null
    }
    function d(g, h, _, x, T) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return g = g.get(_) || null,
            s(h, g, "" + x, T);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Rs:
                return g = g.get(x.key === null ? _ : x.key) || null,
                u(h, g, x, T);
            case fl:
                return g = g.get(x.key === null ? _ : x.key) || null,
                a(h, g, x, T);
            case Fr:
                var C = x._init;
                return d(g, h, _, C(x._payload), T)
            }
            if (vo(x) || lo(x))
                return g = g.get(_) || null,
                c(h, g, x, T, null);
            Ys(h, x)
        }
        return null
    }
    function y(g, h, _, x) {
        for (var T = null, C = null, S = h, E = h = 0, j = null; S !== null && E < _.length; E++) {
            S.index > E ? (j = S,
            S = null) : j = S.sibling;
            var P = f(g, S, _[E], x);
            if (P === null) {
                S === null && (S = j);
                break
            }
            t && S && P.alternate === null && e(g, S),
            h = l(P, h, E),
            C === null ? T = P : C.sibling = P,
            C = P,
            S = j
        }
        if (E === _.length)
            return n(g, S),
            ye && Si(g, E),
            T;
        if (S === null) {
            for (; E < _.length; E++)
                S = p(g, _[E], x),
                S !== null && (h = l(S, h, E),
                C === null ? T = S : C.sibling = S,
                C = S);
            return ye && Si(g, E),
            T
        }
        for (S = r(g, S); E < _.length; E++)
            j = d(S, g, E, _[E], x),
            j !== null && (t && j.alternate !== null && S.delete(j.key === null ? E : j.key),
            h = l(j, h, E),
            C === null ? T = j : C.sibling = j,
            C = j);
        return t && S.forEach(function(I) {
            return e(g, I)
        }),
        ye && Si(g, E),
        T
    }
    function m(g, h, _, x) {
        var T = lo(_);
        if (typeof T != "function")
            throw Error(O(150));
        if (_ = T.call(_),
        _ == null)
            throw Error(O(151));
        for (var C = T = null, S = h, E = h = 0, j = null, P = _.next(); S !== null && !P.done; E++,
        P = _.next()) {
            S.index > E ? (j = S,
            S = null) : j = S.sibling;
            var I = f(g, S, P.value, x);
            if (I === null) {
                S === null && (S = j);
                break
            }
            t && S && I.alternate === null && e(g, S),
            h = l(I, h, E),
            C === null ? T = I : C.sibling = I,
            C = I,
            S = j
        }
        if (P.done)
            return n(g, S),
            ye && Si(g, E),
            T;
        if (S === null) {
            for (; !P.done; E++,
            P = _.next())
                P = p(g, P.value, x),
                P !== null && (h = l(P, h, E),
                C === null ? T = P : C.sibling = P,
                C = P);
            return ye && Si(g, E),
            T
        }
        for (S = r(g, S); !P.done; E++,
        P = _.next())
            P = d(S, g, E, P.value, x),
            P !== null && (t && P.alternate !== null && S.delete(P.key === null ? E : P.key),
            h = l(P, h, E),
            C === null ? T = P : C.sibling = P,
            C = P);
        return t && S.forEach(function(L) {
            return e(g, L)
        }),
        ye && Si(g, E),
        T
    }
    function k(g, h, _, x) {
        if (typeof _ == "object" && _ !== null && _.type === dl && _.key === null && (_ = _.props.children),
        typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case Rs:
                e: {
                    for (var T = _.key, C = h; C !== null; ) {
                        if (C.key === T) {
                            if (T = _.type,
                            T === dl) {
                                if (C.tag === 7) {
                                    n(g, C.sibling),
                                    h = i(C, _.props.children),
                                    h.return = g,
                                    g = h;
                                    break e
                                }
                            } else if (C.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Fr && Qp(T) === C.type) {
                                n(g, C.sibling),
                                h = i(C, _.props),
                                h.ref = co(g, C, _),
                                h.return = g,
                                g = h;
                                break e
                            }
                            n(g, C);
                            break
                        } else
                            e(g, C);
                        C = C.sibling
                    }
                    _.type === dl ? (h = Di(_.props.children, g.mode, x, _.key),
                    h.return = g,
                    g = h) : (x = Tu(_.type, _.key, _.props, null, g.mode, x),
                    x.ref = co(g, h, _),
                    x.return = g,
                    g = x)
                }
                return o(g);
            case fl:
                e: {
                    for (C = _.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === _.containerInfo && h.stateNode.implementation === _.implementation) {
                                n(g, h.sibling),
                                h = i(h, _.children || []),
                                h.return = g,
                                g = h;
                                break e
                            } else {
                                n(g, h);
                                break
                            }
                        else
                            e(g, h);
                        h = h.sibling
                    }
                    h = uc(_, g.mode, x),
                    h.return = g,
                    g = h
                }
                return o(g);
            case Fr:
                return C = _._init,
                k(g, h, C(_._payload), x)
            }
            if (vo(_))
                return y(g, h, _, x);
            if (lo(_))
                return m(g, h, _, x);
            Ys(g, _)
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _,
        h !== null && h.tag === 6 ? (n(g, h.sibling),
        h = i(h, _),
        h.return = g,
        g = h) : (n(g, h),
        h = sc(_, g.mode, x),
        h.return = g,
        g = h),
        o(g)) : n(g, h)
    }
    return k
}
var $l = vm(!0)
  , ym = vm(!1)
  , Xu = pi(null)
  , Qu = null
  , xl = null
  , hd = null;
function md() {
    hd = xl = Qu = null
}
function gd(t) {
    var e = Xu.current;
    _e(Xu),
    t._currentValue = e
}
function tf(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function Ml(t, e) {
    Qu = t,
    hd = xl = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Vt = !0),
    t.firstContext = null)
}
function Nn(t) {
    var e = t._currentValue;
    if (hd !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        xl === null) {
            if (Qu === null)
                throw Error(O(308));
            xl = t,
            Qu.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            xl = xl.next = t;
    return e
}
var ji = null;
function _d(t) {
    ji === null ? ji = [t] : ji.push(t)
}
function xm(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n,
    _d(e)) : (n.next = i.next,
    i.next = n),
    e.interleaved = n,
    Cr(t, r)
}
function Cr(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Br = !1;
function vd(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function wm(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function xr(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Jr(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    le & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next,
        i.next = e),
        r.pending = e,
        Cr(t, n)
    }
    return i = r.interleaved,
    i === null ? (e.next = e,
    _d(r)) : (e.next = i.next,
    i.next = e),
    r.interleaved = e,
    Cr(t, n)
}
function vu(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        rd(t, n)
    }
}
function Gp(t, e) {
    var n = t.updateQueue
      , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , l = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? i = l = o : l = l.next = o,
                n = n.next
            } while (n !== null);
            l === null ? i = l = e : l = l.next = e
        } else
            i = l = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function Gu(t, e, n, r) {
    var i = t.updateQueue;
    Br = !1;
    var l = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var u = s
          , a = u.next;
        u.next = null,
        o === null ? l = a : o.next = a,
        o = u;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        s = c.lastBaseUpdate,
        s !== o && (s === null ? c.firstBaseUpdate = a : s.next = a,
        c.lastBaseUpdate = u))
    }
    if (l !== null) {
        var p = i.baseState;
        o = 0,
        c = a = u = null,
        s = l;
        do {
            var f = s.lane
              , d = s.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var y = t
                      , m = s;
                    switch (f = e,
                    d = n,
                    m.tag) {
                    case 1:
                        if (y = m.payload,
                        typeof y == "function") {
                            p = y.call(d, p, f);
                            break e
                        }
                        p = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = m.payload,
                        f = typeof y == "function" ? y.call(d, p, f) : y,
                        f == null)
                            break e;
                        p = Pe({}, p, f);
                        break e;
                    case 2:
                        Br = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (t.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [s] : f.push(s))
            } else
                d = {
                    eventTime: d,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                c === null ? (a = c = d,
                u = p) : c = c.next = d,
                o |= f;
            if (s = s.next,
            s === null) {
                if (s = i.shared.pending,
                s === null)
                    break;
                f = s,
                s = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (u = p),
        i.baseState = u,
        i.firstBaseUpdate = a,
        i.lastBaseUpdate = c,
        e = i.shared.interleaved,
        e !== null) {
            i = e;
            do
                o |= i.lane,
                i = i.next;
            while (i !== e)
        } else
            l === null && (i.shared.lanes = 0);
        Wi |= o,
        t.lanes = o,
        t.memoizedState = p
    }
}
function Kp(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(O(191, i));
                i.call(r)
            }
        }
}
var Ns = {}
  , lr = pi(Ns)
  , os = pi(Ns)
  , ss = pi(Ns);
function Mi(t) {
    if (t === Ns)
        throw Error(O(174));
    return t
}
function yd(t, e) {
    switch (pe(ss, e),
    pe(os, t),
    pe(lr, Ns),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : Rc(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = Rc(e, t)
    }
    _e(lr),
    pe(lr, e)
}
function bl() {
    _e(lr),
    _e(os),
    _e(ss)
}
function km(t) {
    Mi(ss.current);
    var e = Mi(lr.current)
      , n = Rc(e, t.type);
    e !== n && (pe(os, t),
    pe(lr, n))
}
function xd(t) {
    os.current === t && (_e(lr),
    _e(os))
}
var Te = pi(0);
function Ku(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var tc = [];
function wd() {
    for (var t = 0; t < tc.length; t++)
        tc[t]._workInProgressVersionPrimary = null;
    tc.length = 0
}
var yu = jr.ReactCurrentDispatcher
  , nc = jr.ReactCurrentBatchConfig
  , Hi = 0
  , Ne = null
  , Ye = null
  , et = null
  , Zu = !1
  , zo = !1
  , us = 0
  , ty = 0;
function gt() {
    throw Error(O(321))
}
function kd(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!Wn(t[n], e[n]))
            return !1;
    return !0
}
function Sd(t, e, n, r, i, l) {
    if (Hi = l,
    Ne = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    yu.current = t === null || t.memoizedState === null ? ly : oy,
    t = n(r, i),
    zo) {
        l = 0;
        do {
            if (zo = !1,
            us = 0,
            25 <= l)
                throw Error(O(301));
            l += 1,
            et = Ye = null,
            e.updateQueue = null,
            yu.current = sy,
            t = n(r, i)
        } while (zo)
    }
    if (yu.current = qu,
    e = Ye !== null && Ye.next !== null,
    Hi = 0,
    et = Ye = Ne = null,
    Zu = !1,
    e)
        throw Error(O(300));
    return t
}
function Td() {
    var t = us !== 0;
    return us = 0,
    t
}
function Kn() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return et === null ? Ne.memoizedState = et = t : et = et.next = t,
    et
}
function Pn() {
    if (Ye === null) {
        var t = Ne.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = Ye.next;
    var e = et === null ? Ne.memoizedState : et.next;
    if (e !== null)
        et = e,
        Ye = t;
    else {
        if (t === null)
            throw Error(O(310));
        Ye = t,
        t = {
            memoizedState: Ye.memoizedState,
            baseState: Ye.baseState,
            baseQueue: Ye.baseQueue,
            queue: Ye.queue,
            next: null
        },
        et === null ? Ne.memoizedState = et = t : et = et.next = t
    }
    return et
}
function as(t, e) {
    return typeof e == "function" ? e(t) : e
}
function rc(t) {
    var e = Pn()
      , n = e.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = t;
    var r = Ye
      , i = r.baseQueue
      , l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = l.next,
            l.next = o
        }
        r.baseQueue = i = l,
        n.pending = null
    }
    if (i !== null) {
        l = i.next,
        r = r.baseState;
        var s = o = null
          , u = null
          , a = l;
        do {
            var c = a.lane;
            if ((Hi & c) === c)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }),
                r = a.hasEagerState ? a.eagerState : t(r, a.action);
            else {
                var p = {
                    lane: c,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                u === null ? (s = u = p,
                o = r) : u = u.next = p,
                Ne.lanes |= c,
                Wi |= c
            }
            a = a.next
        } while (a !== null && a !== l);
        u === null ? o = r : u.next = s,
        Wn(r, e.memoizedState) || (Vt = !0),
        e.memoizedState = r,
        e.baseState = o,
        e.baseQueue = u,
        n.lastRenderedState = r
    }
    if (t = n.interleaved,
    t !== null) {
        i = t;
        do
            l = i.lane,
            Ne.lanes |= l,
            Wi |= l,
            i = i.next;
        while (i !== t)
    } else
        i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function ic(t) {
    var e = Pn()
      , n = e.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
      , i = n.pending
      , l = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            l = t(l, o.action),
            o = o.next;
        while (o !== i);
        Wn(l, e.memoizedState) || (Vt = !0),
        e.memoizedState = l,
        e.baseQueue === null && (e.baseState = l),
        n.lastRenderedState = l
    }
    return [l, r]
}
function Sm() {}
function Tm(t, e) {
    var n = Ne
      , r = Pn()
      , i = e()
      , l = !Wn(r.memoizedState, i);
    if (l && (r.memoizedState = i,
    Vt = !0),
    r = r.queue,
    Cd(Nm.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || l || et !== null && et.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        cs(9, Em.bind(null, n, r, i, e), void 0, null),
        nt === null)
            throw Error(O(349));
        Hi & 30 || Cm(n, e, i)
    }
    return i
}
function Cm(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = Ne.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    Ne.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function Em(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    Pm(e) && jm(t)
}
function Nm(t, e, n) {
    return n(function() {
        Pm(e) && jm(t)
    })
}
function Pm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Wn(t, n)
    } catch {
        return !0
    }
}
function jm(t) {
    var e = Cr(t, 1);
    e !== null && Hn(e, t, 1, -1)
}
function Zp(t) {
    var e = Kn();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: as,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = iy.bind(null, Ne, t),
    [e.memoizedState, t]
}
function cs(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = Ne.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    Ne.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function Mm() {
    return Pn().memoizedState
}
function xu(t, e, n, r) {
    var i = Kn();
    Ne.flags |= t,
    i.memoizedState = cs(1 | e, n, void 0, r === void 0 ? null : r)
}
function Sa(t, e, n, r) {
    var i = Pn();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (Ye !== null) {
        var o = Ye.memoizedState;
        if (l = o.destroy,
        r !== null && kd(r, o.deps)) {
            i.memoizedState = cs(e, n, l, r);
            return
        }
    }
    Ne.flags |= t,
    i.memoizedState = cs(1 | e, n, l, r)
}
function qp(t, e) {
    return xu(8390656, 8, t, e)
}
function Cd(t, e) {
    return Sa(2048, 8, t, e)
}
function Om(t, e) {
    return Sa(4, 2, t, e)
}
function Lm(t, e) {
    return Sa(4, 4, t, e)
}
function zm(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function Dm(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    Sa(4, 4, zm.bind(null, e, t), n)
}
function Ed() {}
function Rm(t, e) {
    var n = Pn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && kd(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function Am(t, e) {
    var n = Pn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && kd(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Im(t, e, n) {
    return Hi & 21 ? (Wn(n, e) || (n = b0(),
    Ne.lanes |= n,
    Wi |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Vt = !0),
    t.memoizedState = n)
}
function ny(t, e) {
    var n = ae;
    ae = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = nc.transition;
    nc.transition = {};
    try {
        t(!1),
        e()
    } finally {
        ae = n,
        nc.transition = r
    }
}
function Fm() {
    return Pn().memoizedState
}
function ry(t, e, n) {
    var r = ti(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Bm(t))
        Um(e, n);
    else if (n = xm(t, e, n, r),
    n !== null) {
        var i = It();
        Hn(n, t, r, i),
        $m(n, e, r)
    }
}
function iy(t, e, n) {
    var r = ti(t)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Bm(t))
        Um(e, i);
    else {
        var l = t.alternate;
        if (t.lanes === 0 && (l === null || l.lanes === 0) && (l = e.lastRenderedReducer,
        l !== null))
            try {
                var o = e.lastRenderedState
                  , s = l(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = s,
                Wn(s, o)) {
                    var u = e.interleaved;
                    u === null ? (i.next = i,
                    _d(e)) : (i.next = u.next,
                    u.next = i),
                    e.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = xm(t, e, i, r),
        n !== null && (i = It(),
        Hn(n, t, r, i),
        $m(n, e, r))
    }
}
function Bm(t) {
    var e = t.alternate;
    return t === Ne || e !== null && e === Ne
}
function Um(t, e) {
    zo = Zu = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function $m(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        rd(t, n)
    }
}
var qu = {
    readContext: Nn,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useInsertionEffect: gt,
    useLayoutEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useMutableSource: gt,
    useSyncExternalStore: gt,
    useId: gt,
    unstable_isNewReconciler: !1
}
  , ly = {
    readContext: Nn,
    useCallback: function(t, e) {
        return Kn().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: Nn,
    useEffect: qp,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        xu(4194308, 4, zm.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return xu(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return xu(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = Kn();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = Kn();
        return e = n !== void 0 ? n(e) : e,
        r.memoizedState = r.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        r.queue = t,
        t = t.dispatch = ry.bind(null, Ne, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = Kn();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: Zp,
    useDebugValue: Ed,
    useDeferredValue: function(t) {
        return Kn().memoizedState = t
    },
    useTransition: function() {
        var t = Zp(!1)
          , e = t[0];
        return t = ny.bind(null, t[1]),
        Kn().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = Ne
          , i = Kn();
        if (ye) {
            if (n === void 0)
                throw Error(O(407));
            n = n()
        } else {
            if (n = e(),
            nt === null)
                throw Error(O(349));
            Hi & 30 || Cm(r, e, n)
        }
        i.memoizedState = n;
        var l = {
            value: n,
            getSnapshot: e
        };
        return i.queue = l,
        qp(Nm.bind(null, r, l, t), [t]),
        r.flags |= 2048,
        cs(9, Em.bind(null, r, l, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = Kn()
          , e = nt.identifierPrefix;
        if (ye) {
            var n = vr
              , r = _r;
            n = (r & ~(1 << 32 - Vn(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = us++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = ty++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , oy = {
    readContext: Nn,
    useCallback: Rm,
    useContext: Nn,
    useEffect: Cd,
    useImperativeHandle: Dm,
    useInsertionEffect: Om,
    useLayoutEffect: Lm,
    useMemo: Am,
    useReducer: rc,
    useRef: Mm,
    useState: function() {
        return rc(as)
    },
    useDebugValue: Ed,
    useDeferredValue: function(t) {
        var e = Pn();
        return Im(e, Ye.memoizedState, t)
    },
    useTransition: function() {
        var t = rc(as)[0]
          , e = Pn().memoizedState;
        return [t, e]
    },
    useMutableSource: Sm,
    useSyncExternalStore: Tm,
    useId: Fm,
    unstable_isNewReconciler: !1
}
  , sy = {
    readContext: Nn,
    useCallback: Rm,
    useContext: Nn,
    useEffect: Cd,
    useImperativeHandle: Dm,
    useInsertionEffect: Om,
    useLayoutEffect: Lm,
    useMemo: Am,
    useReducer: ic,
    useRef: Mm,
    useState: function() {
        return ic(as)
    },
    useDebugValue: Ed,
    useDeferredValue: function(t) {
        var e = Pn();
        return Ye === null ? e.memoizedState = t : Im(e, Ye.memoizedState, t)
    },
    useTransition: function() {
        var t = ic(as)[0]
          , e = Pn().memoizedState;
        return [t, e]
    },
    useMutableSource: Sm,
    useSyncExternalStore: Tm,
    useId: Fm,
    unstable_isNewReconciler: !1
};
function Bn(t, e) {
    if (t && t.defaultProps) {
        e = Pe({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function nf(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : Pe({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Ta = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? Ji(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = It()
          , i = ti(t)
          , l = xr(r, i);
        l.payload = e,
        n != null && (l.callback = n),
        e = Jr(t, l, i),
        e !== null && (Hn(e, t, i, r),
        vu(e, t, i))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = It()
          , i = ti(t)
          , l = xr(r, i);
        l.tag = 1,
        l.payload = e,
        n != null && (l.callback = n),
        e = Jr(t, l, i),
        e !== null && (Hn(e, t, i, r),
        vu(e, t, i))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = It()
          , r = ti(t)
          , i = xr(n, r);
        i.tag = 2,
        e != null && (i.callback = e),
        e = Jr(t, i, r),
        e !== null && (Hn(e, t, r, n),
        vu(e, t, r))
    }
};
function Jp(t, e, n, r, i, l, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, l, o) : e.prototype && e.prototype.isPureReactComponent ? !ns(n, r) || !ns(i, l) : !0
}
function bm(t, e, n) {
    var r = !1
      , i = ui
      , l = e.contextType;
    return typeof l == "object" && l !== null ? l = Nn(l) : (i = Wt(e) ? bi : Tt.current,
    r = e.contextTypes,
    l = (r = r != null) ? Bl(t, i) : ui),
    e = new e(n,l),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = Ta,
    t.stateNode = e,
    e._reactInternals = t,
    r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = i,
    t.__reactInternalMemoizedMaskedChildContext = l),
    e
}
function eh(t, e, n, r) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Ta.enqueueReplaceState(e, e.state, null)
}
function rf(t, e, n, r) {
    var i = t.stateNode;
    i.props = n,
    i.state = t.memoizedState,
    i.refs = {},
    vd(t);
    var l = e.contextType;
    typeof l == "object" && l !== null ? i.context = Nn(l) : (l = Wt(e) ? bi : Tt.current,
    i.context = Bl(t, l)),
    i.state = t.memoizedState,
    l = e.getDerivedStateFromProps,
    typeof l == "function" && (nf(t, e, l, n),
    i.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    e !== i.state && Ta.enqueueReplaceState(i, i.state, null),
    Gu(t, n, i, r),
    i.state = t.memoizedState),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}
function Vl(t, e) {
    try {
        var n = ""
          , r = e;
        do
            n += R_(r),
            r = r.return;
        while (r);
        var i = n
    } catch (l) {
        i = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}
function lc(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function lf(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var uy = typeof WeakMap == "function" ? WeakMap : Map;
function Vm(t, e, n) {
    n = xr(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        ea || (ea = !0,
        mf = r),
        lf(t, e)
    }
    ,
    n
}
function Hm(t, e, n) {
    n = xr(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            lf(t, e)
        }
    }
    var l = t.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
        lf(t, e),
        typeof r != "function" && (ei === null ? ei = new Set([this]) : ei.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function th(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new uy;
        var i = new Set;
        r.set(e, i)
    } else
        i = r.get(e),
        i === void 0 && (i = new Set,
        r.set(e, i));
    i.has(n) || (i.add(n),
    t = ky.bind(null, t, e, n),
    e.then(t, t))
}
function nh(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function rh(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = i,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = xr(-1, 1),
    e.tag = 2,
    Jr(n, e, 1))),
    n.lanes |= 1),
    t)
}
var ay = jr.ReactCurrentOwner
  , Vt = !1;
function Mt(t, e, n, r) {
    e.child = t === null ? ym(e, null, n, r) : $l(e, t.child, n, r)
}
function ih(t, e, n, r, i) {
    n = n.render;
    var l = e.ref;
    return Ml(e, i),
    r = Sd(t, e, n, r, l, i),
    n = Td(),
    t !== null && !Vt ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    Er(t, e, i)) : (ye && n && fd(e),
    e.flags |= 1,
    Mt(t, e, r, i),
    e.child)
}
function lh(t, e, n, r, i) {
    if (t === null) {
        var l = n.type;
        return typeof l == "function" && !Dd(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = l,
        Wm(t, e, l, r, i)) : (t = Tu(n.type, null, r, e, e.mode, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (l = t.child,
    !(t.lanes & i)) {
        var o = l.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ns,
        n(o, r) && t.ref === e.ref)
            return Er(t, e, i)
    }
    return e.flags |= 1,
    t = ni(l, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Wm(t, e, n, r, i) {
    if (t !== null) {
        var l = t.memoizedProps;
        if (ns(l, r) && t.ref === e.ref)
            if (Vt = !1,
            e.pendingProps = r = l,
            (t.lanes & i) !== 0)
                t.flags & 131072 && (Vt = !0);
            else
                return e.lanes = t.lanes,
                Er(t, e, i)
    }
    return of(t, e, n, r, i)
}
function Ym(t, e, n) {
    var r = e.pendingProps
      , i = r.children
      , l = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            pe(kl, nn),
            nn |= n;
        else {
            if (!(n & 1073741824))
                return t = l !== null ? l.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                pe(kl, nn),
                nn |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = l !== null ? l.baseLanes : n,
            pe(kl, nn),
            nn |= r
        }
    else
        l !== null ? (r = l.baseLanes | n,
        e.memoizedState = null) : r = n,
        pe(kl, nn),
        nn |= r;
    return Mt(t, e, i, n),
    e.child
}
function Xm(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function of(t, e, n, r, i) {
    var l = Wt(n) ? bi : Tt.current;
    return l = Bl(e, l),
    Ml(e, i),
    n = Sd(t, e, n, r, l, i),
    r = Td(),
    t !== null && !Vt ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    Er(t, e, i)) : (ye && r && fd(e),
    e.flags |= 1,
    Mt(t, e, n, i),
    e.child)
}
function oh(t, e, n, r, i) {
    if (Wt(n)) {
        var l = !0;
        Hu(e)
    } else
        l = !1;
    if (Ml(e, i),
    e.stateNode === null)
        wu(t, e),
        bm(e, n, r),
        rf(e, n, r, i),
        r = !0;
    else if (t === null) {
        var o = e.stateNode
          , s = e.memoizedProps;
        o.props = s;
        var u = o.context
          , a = n.contextType;
        typeof a == "object" && a !== null ? a = Nn(a) : (a = Wt(n) ? bi : Tt.current,
        a = Bl(e, a));
        var c = n.getDerivedStateFromProps
          , p = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || u !== a) && eh(e, o, r, a),
        Br = !1;
        var f = e.memoizedState;
        o.state = f,
        Gu(e, r, o, i),
        u = e.memoizedState,
        s !== r || f !== u || Ht.current || Br ? (typeof c == "function" && (nf(e, n, c, r),
        u = e.memoizedState),
        (s = Br || Jp(e, n, s, r, f, u, a)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = u),
        o.props = r,
        o.state = u,
        o.context = a,
        r = s) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        o = e.stateNode,
        wm(t, e),
        s = e.memoizedProps,
        a = e.type === e.elementType ? s : Bn(e.type, s),
        o.props = a,
        p = e.pendingProps,
        f = o.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Nn(u) : (u = Wt(n) ? bi : Tt.current,
        u = Bl(e, u));
        var d = n.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== p || f !== u) && eh(e, o, r, u),
        Br = !1,
        f = e.memoizedState,
        o.state = f,
        Gu(e, r, o, i);
        var y = e.memoizedState;
        s !== p || f !== y || Ht.current || Br ? (typeof d == "function" && (nf(e, n, d, r),
        y = e.memoizedState),
        (a = Br || Jp(e, n, a, r, f, y, u) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, u),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, u)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = y),
        o.props = r,
        o.state = y,
        o.context = u,
        r = a) : (typeof o.componentDidUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return sf(t, e, n, r, l, i)
}
function sf(t, e, n, r, i, l) {
    Xm(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o)
        return i && Wp(e, n, !1),
        Er(t, e, l);
    r = e.stateNode,
    ay.current = e;
    var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = $l(e, t.child, null, l),
    e.child = $l(e, null, s, l)) : Mt(t, e, s, l),
    e.memoizedState = r.state,
    i && Wp(e, n, !0),
    e.child
}
function Qm(t) {
    var e = t.stateNode;
    e.pendingContext ? Hp(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Hp(t, e.context, !1),
    yd(t, e.containerInfo)
}
function sh(t, e, n, r, i) {
    return Ul(),
    pd(i),
    e.flags |= 256,
    Mt(t, e, n, r),
    e.child
}
var uf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function af(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Gm(t, e, n) {
    var r = e.pendingProps, i = Te.current, l = !1, o = (e.flags & 128) !== 0, s;
    if ((s = o) || (s = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    s ? (l = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1),
    pe(Te, i & 1),
    t === null)
        return ef(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = r.children,
        t = r.fallback,
        l ? (r = e.mode,
        l = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && l !== null ? (l.childLanes = 0,
        l.pendingProps = o) : l = Na(o, r, 0, null),
        t = Di(t, r, n, null),
        l.return = e,
        t.return = e,
        l.sibling = t,
        e.child = l,
        e.child.memoizedState = af(n),
        e.memoizedState = uf,
        t) : Nd(e, o));
    if (i = t.memoizedState,
    i !== null && (s = i.dehydrated,
    s !== null))
        return cy(t, e, o, r, s, i, n);
    if (l) {
        l = r.fallback,
        o = e.mode,
        i = t.child,
        s = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && e.child !== i ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = u,
        e.deletions = null) : (r = ni(i, u),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        s !== null ? l = ni(s, l) : (l = Di(l, o, n, null),
        l.flags |= 2),
        l.return = e,
        r.return = e,
        r.sibling = l,
        e.child = r,
        r = l,
        l = e.child,
        o = t.child.memoizedState,
        o = o === null ? af(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        l.memoizedState = o,
        l.childLanes = t.childLanes & ~n,
        e.memoizedState = uf,
        r
    }
    return l = t.child,
    t = l.sibling,
    r = ni(l, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = n),
    r.return = e,
    r.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = r,
    e.memoizedState = null,
    r
}
function Nd(t, e) {
    return e = Na({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function Xs(t, e, n, r) {
    return r !== null && pd(r),
    $l(e, t.child, null, n),
    t = Nd(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function cy(t, e, n, r, i, l, o) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = lc(Error(O(422))),
        Xs(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (l = r.fallback,
        i = e.mode,
        r = Na({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        l = Di(l, i, o, null),
        l.flags |= 2,
        r.return = e,
        l.return = e,
        r.sibling = l,
        e.child = r,
        e.mode & 1 && $l(e, t.child, null, o),
        e.child.memoizedState = af(o),
        e.memoizedState = uf,
        l);
    if (!(e.mode & 1))
        return Xs(t, e, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        l = Error(O(419)),
        r = lc(l, r, void 0),
        Xs(t, e, o, r)
    }
    if (s = (o & t.childLanes) !== 0,
    Vt || s) {
        if (r = nt,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== l.retryLane && (l.retryLane = i,
            Cr(t, i),
            Hn(r, t, i, -1))
        }
        return zd(),
        r = lc(Error(O(421))),
        Xs(t, e, o, r)
    }
    return i.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = Sy.bind(null, t),
    i._reactRetry = e,
    null) : (t = l.treeContext,
    un = qr(i.nextSibling),
    cn = e,
    ye = !0,
    $n = null,
    t !== null && (vn[yn++] = _r,
    vn[yn++] = vr,
    vn[yn++] = Vi,
    _r = t.id,
    vr = t.overflow,
    Vi = e),
    e = Nd(e, r.children),
    e.flags |= 4096,
    e)
}
function uh(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    tf(t.return, e, n)
}
function oc(t, e, n, r, i) {
    var l = t.memoizedState;
    l === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (l.isBackwards = e,
    l.rendering = null,
    l.renderingStartTime = 0,
    l.last = r,
    l.tail = n,
    l.tailMode = i)
}
function Km(t, e, n) {
    var r = e.pendingProps
      , i = r.revealOrder
      , l = r.tail;
    if (Mt(t, e, r.children, n),
    r = Te.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && uh(t, n, e);
                else if (t.tag === 19)
                    uh(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        r &= 1
    }
    if (pe(Te, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = e.child,
            i = null; n !== null; )
                t = n.alternate,
                t !== null && Ku(t) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = e.child,
            e.child = null) : (i = n.sibling,
            n.sibling = null),
            oc(e, !1, i, n, l);
            break;
        case "backwards":
            for (n = null,
            i = e.child,
            e.child = null; i !== null; ) {
                if (t = i.alternate,
                t !== null && Ku(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling,
                i.sibling = n,
                n = i,
                i = t
            }
            oc(e, !0, n, null, l);
            break;
        case "together":
            oc(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function wu(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function Er(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    Wi |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(O(153));
    if (e.child !== null) {
        for (t = e.child,
        n = ni(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = ni(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function fy(t, e, n) {
    switch (e.tag) {
    case 3:
        Qm(e),
        Ul();
        break;
    case 5:
        km(e);
        break;
    case 1:
        Wt(e.type) && Hu(e);
        break;
    case 4:
        yd(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , i = e.memoizedProps.value;
        pe(Xu, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (pe(Te, Te.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? Gm(t, e, n) : (pe(Te, Te.current & 1),
            t = Er(t, e, n),
            t !== null ? t.sibling : null);
        pe(Te, Te.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return Km(t, e, n);
            e.flags |= 128
        }
        if (i = e.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        pe(Te, Te.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Ym(t, e, n)
    }
    return Er(t, e, n)
}
var Zm, cf, qm, Jm;
Zm = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
cf = function() {}
;
qm = function(t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode,
        Mi(lr.current);
        var l = null;
        switch (n) {
        case "input":
            i = Oc(t, i),
            r = Oc(t, r),
            l = [];
            break;
        case "select":
            i = Pe({}, i, {
                value: void 0
            }),
            r = Pe({}, r, {
                value: void 0
            }),
            l = [];
            break;
        case "textarea":
            i = Dc(t, i),
            r = Dc(t, r),
            l = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = bu)
        }
        Ac(n, r);
        var o;
        n = null;
        for (a in i)
            if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
                if (a === "style") {
                    var s = i[a];
                    for (o in s)
                        s.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Go.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (s = i != null ? i[a] : void 0,
            r.hasOwnProperty(a) && u !== s && (u != null || s != null))
                if (a === "style")
                    if (s) {
                        for (o in s)
                            !s.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}),
                            n[o] = u[o])
                    } else
                        n || (l || (l = []),
                        l.push(a, n)),
                        n = u;
                else
                    a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    s = s ? s.__html : void 0,
                    u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Go.hasOwnProperty(a) ? (u != null && a === "onScroll" && me("scroll", t),
                    l || s === u || (l = [])) : (l = l || []).push(a, u))
        }
        n && (l = l || []).push("style", n);
        var a = l;
        (e.updateQueue = a) && (e.flags |= 4)
    }
}
;
Jm = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function fo(t, e) {
    if (!ye)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , r = 0;
    if (e)
        for (var i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = t,
            i = i.sibling;
    else
        for (i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = t,
            i = i.sibling;
    return t.subtreeFlags |= r,
    t.childLanes = n,
    e
}
function dy(t, e, n) {
    var r = e.pendingProps;
    switch (dd(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return _t(e),
        null;
    case 1:
        return Wt(e.type) && Vu(),
        _t(e),
        null;
    case 3:
        return r = e.stateNode,
        bl(),
        _e(Ht),
        _e(Tt),
        wd(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (Ws(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        $n !== null && (vf($n),
        $n = null))),
        cf(t, e),
        _t(e),
        null;
    case 5:
        xd(e);
        var i = Mi(ss.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            qm(t, e, n, r, i),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(O(166));
                return _t(e),
                null
            }
            if (t = Mi(lr.current),
            Ws(e)) {
                r = e.stateNode,
                n = e.type;
                var l = e.memoizedProps;
                switch (r[Jn] = e,
                r[ls] = l,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    me("cancel", r),
                    me("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    me("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < xo.length; i++)
                        me(xo[i], r);
                    break;
                case "source":
                    me("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    me("error", r),
                    me("load", r);
                    break;
                case "details":
                    me("toggle", r);
                    break;
                case "input":
                    _p(r, l),
                    me("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!l.multiple
                    },
                    me("invalid", r);
                    break;
                case "textarea":
                    yp(r, l),
                    me("invalid", r)
                }
                Ac(n, l),
                i = null;
                for (var o in l)
                    if (l.hasOwnProperty(o)) {
                        var s = l[o];
                        o === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Hs(r.textContent, s, t),
                        i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Hs(r.textContent, s, t),
                        i = ["children", "" + s]) : Go.hasOwnProperty(o) && s != null && o === "onScroll" && me("scroll", r)
                    }
                switch (n) {
                case "input":
                    As(r),
                    vp(r, l, !0);
                    break;
                case "textarea":
                    As(r),
                    xp(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof l.onClick == "function" && (r.onclick = bu)
                }
                r = i,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = N0(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                    is: r.is
                }) : (t = o.createElement(n),
                n === "select" && (o = t,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n),
                t[Jn] = e,
                t[ls] = r,
                Zm(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = Ic(n, r),
                    n) {
                    case "dialog":
                        me("cancel", t),
                        me("close", t),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        me("load", t),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < xo.length; i++)
                            me(xo[i], t);
                        i = r;
                        break;
                    case "source":
                        me("error", t),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        me("error", t),
                        me("load", t),
                        i = r;
                        break;
                    case "details":
                        me("toggle", t),
                        i = r;
                        break;
                    case "input":
                        _p(t, r),
                        i = Oc(t, r),
                        me("invalid", t);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Pe({}, r, {
                            value: void 0
                        }),
                        me("invalid", t);
                        break;
                    case "textarea":
                        yp(t, r),
                        i = Dc(t, r),
                        me("invalid", t);
                        break;
                    default:
                        i = r
                    }
                    Ac(n, i),
                    s = i;
                    for (l in s)
                        if (s.hasOwnProperty(l)) {
                            var u = s[l];
                            l === "style" ? M0(t, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && P0(t, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ko(t, u) : typeof u == "number" && Ko(t, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Go.hasOwnProperty(l) ? u != null && l === "onScroll" && me("scroll", t) : u != null && Zf(t, l, u, o))
                        }
                    switch (n) {
                    case "input":
                        As(t),
                        vp(t, r, !1);
                        break;
                    case "textarea":
                        As(t),
                        xp(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + si(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        l = r.value,
                        l != null ? El(t, !!r.multiple, l, !1) : r.defaultValue != null && El(t, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (t.onclick = bu)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return _t(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            Jm(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(O(166));
            if (n = Mi(ss.current),
            Mi(lr.current),
            Ws(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[Jn] = e,
                (l = r.nodeValue !== n) && (t = cn,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        Hs(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && Hs(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                l && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Jn] = e,
                e.stateNode = r
        }
        return _t(e),
        null;
    case 13:
        if (_e(Te),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (ye && un !== null && e.mode & 1 && !(e.flags & 128))
                _m(),
                Ul(),
                e.flags |= 98560,
                l = !1;
            else if (l = Ws(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!l)
                        throw Error(O(318));
                    if (l = e.memoizedState,
                    l = l !== null ? l.dehydrated : null,
                    !l)
                        throw Error(O(317));
                    l[Jn] = e
                } else
                    Ul(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                _t(e),
                l = !1
            } else
                $n !== null && (vf($n),
                $n = null),
                l = !0;
            if (!l)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || Te.current & 1 ? Ge === 0 && (Ge = 3) : zd())),
        e.updateQueue !== null && (e.flags |= 4),
        _t(e),
        null);
    case 4:
        return bl(),
        cf(t, e),
        t === null && rs(e.stateNode.containerInfo),
        _t(e),
        null;
    case 10:
        return gd(e.type._context),
        _t(e),
        null;
    case 17:
        return Wt(e.type) && Vu(),
        _t(e),
        null;
    case 19:
        if (_e(Te),
        l = e.memoizedState,
        l === null)
            return _t(e),
            null;
        if (r = (e.flags & 128) !== 0,
        o = l.rendering,
        o === null)
            if (r)
                fo(l, !1);
            else {
                if (Ge !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = Ku(t),
                        o !== null) {
                            for (e.flags |= 128,
                            fo(l, !1),
                            r = o.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child; n !== null; )
                                l = n,
                                t = r,
                                l.flags &= 14680066,
                                o = l.alternate,
                                o === null ? (l.childLanes = 0,
                                l.lanes = t,
                                l.child = null,
                                l.subtreeFlags = 0,
                                l.memoizedProps = null,
                                l.memoizedState = null,
                                l.updateQueue = null,
                                l.dependencies = null,
                                l.stateNode = null) : (l.childLanes = o.childLanes,
                                l.lanes = o.lanes,
                                l.child = o.child,
                                l.subtreeFlags = 0,
                                l.deletions = null,
                                l.memoizedProps = o.memoizedProps,
                                l.memoizedState = o.memoizedState,
                                l.updateQueue = o.updateQueue,
                                l.type = o.type,
                                t = o.dependencies,
                                l.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return pe(Te, Te.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                l.tail !== null && Ie() > Hl && (e.flags |= 128,
                r = !0,
                fo(l, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (t = Ku(o),
                t !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    fo(l, !0),
                    l.tail === null && l.tailMode === "hidden" && !o.alternate && !ye)
                        return _t(e),
                        null
                } else
                    2 * Ie() - l.renderingStartTime > Hl && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    fo(l, !1),
                    e.lanes = 4194304);
            l.isBackwards ? (o.sibling = e.child,
            e.child = o) : (n = l.last,
            n !== null ? n.sibling = o : e.child = o,
            l.last = o)
        }
        return l.tail !== null ? (e = l.tail,
        l.rendering = e,
        l.tail = e.sibling,
        l.renderingStartTime = Ie(),
        e.sibling = null,
        n = Te.current,
        pe(Te, r ? n & 1 | 2 : n & 1),
        e) : (_t(e),
        null);
    case 22:
    case 23:
        return Ld(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? nn & 1073741824 && (_t(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : _t(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(O(156, e.tag))
}
function py(t, e) {
    switch (dd(e),
    e.tag) {
    case 1:
        return Wt(e.type) && Vu(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return bl(),
        _e(Ht),
        _e(Tt),
        wd(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return xd(e),
        null;
    case 13:
        if (_e(Te),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(O(340));
            Ul()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return _e(Te),
        null;
    case 4:
        return bl(),
        null;
    case 10:
        return gd(e.type._context),
        null;
    case 22:
    case 23:
        return Ld(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Qs = !1
  , xt = !1
  , hy = typeof WeakSet == "function" ? WeakSet : Set
  , R = null;
function wl(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Me(t, e, r)
            }
        else
            n.current = null
}
function ff(t, e, n) {
    try {
        n()
    } catch (r) {
        Me(t, e, r)
    }
}
var ah = !1;
function my(t, e) {
    if (Xc = Bu,
    t = im(),
    cd(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        l.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , s = -1
                      , u = -1
                      , a = 0
                      , c = 0
                      , p = t
                      , f = null;
                    t: for (; ; ) {
                        for (var d; p !== n || i !== 0 && p.nodeType !== 3 || (s = o + i),
                        p !== l || r !== 0 && p.nodeType !== 3 || (u = o + r),
                        p.nodeType === 3 && (o += p.nodeValue.length),
                        (d = p.firstChild) !== null; )
                            f = p,
                            p = d;
                        for (; ; ) {
                            if (p === t)
                                break t;
                            if (f === n && ++a === i && (s = o),
                            f === l && ++c === r && (u = o),
                            (d = p.nextSibling) !== null)
                                break;
                            p = f,
                            f = p.parentNode
                        }
                        p = d
                    }
                    n = s === -1 || u === -1 ? null : {
                        start: s,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Qc = {
        focusedElem: t,
        selectionRange: n
    },
    Bu = !1,
    R = e; R !== null; )
        if (e = R,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            R = t;
        else
            for (; R !== null; ) {
                e = R;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var m = y.memoizedProps
                                  , k = y.memoizedState
                                  , g = e.stateNode
                                  , h = g.getSnapshotBeforeUpdate(e.elementType === e.type ? m : Bn(e.type, m), k);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var _ = e.stateNode.containerInfo;
                            _.nodeType === 1 ? _.textContent = "" : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                        }
                } catch (x) {
                    Me(e, e.return, x)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    R = t;
                    break
                }
                R = e.return
            }
    return y = ah,
    ah = !1,
    y
}
function Do(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var l = i.destroy;
                i.destroy = void 0,
                l !== void 0 && ff(e, n, l)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ca(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function df(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function eg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    eg(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[Jn],
    delete e[ls],
    delete e[Zc],
    delete e[Zv],
    delete e[qv])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function tg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function ch(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || tg(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function pf(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = bu));
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (pf(t, e, n),
        t = t.sibling; t !== null; )
            pf(t, e, n),
            t = t.sibling
}
function hf(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (hf(t, e, n),
        t = t.sibling; t !== null; )
            hf(t, e, n),
            t = t.sibling
}
var ot = null
  , Un = !1;
function Ar(t, e, n) {
    for (n = n.child; n !== null; )
        ng(t, e, n),
        n = n.sibling
}
function ng(t, e, n) {
    if (ir && typeof ir.onCommitFiberUnmount == "function")
        try {
            ir.onCommitFiberUnmount(_a, n)
        } catch {}
    switch (n.tag) {
    case 5:
        xt || wl(n, e);
    case 6:
        var r = ot
          , i = Un;
        ot = null,
        Ar(t, e, n),
        ot = r,
        Un = i,
        ot !== null && (Un ? (t = ot,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ot.removeChild(n.stateNode));
        break;
    case 18:
        ot !== null && (Un ? (t = ot,
        n = n.stateNode,
        t.nodeType === 8 ? Ja(t.parentNode, n) : t.nodeType === 1 && Ja(t, n),
        es(t)) : Ja(ot, n.stateNode));
        break;
    case 4:
        r = ot,
        i = Un,
        ot = n.stateNode.containerInfo,
        Un = !0,
        Ar(t, e, n),
        ot = r,
        Un = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!xt && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var l = i
                  , o = l.destroy;
                l = l.tag,
                o !== void 0 && (l & 2 || l & 4) && ff(n, e, o),
                i = i.next
            } while (i !== r)
        }
        Ar(t, e, n);
        break;
    case 1:
        if (!xt && (wl(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                Me(n, e, s)
            }
        Ar(t, e, n);
        break;
    case 21:
        Ar(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (xt = (r = xt) || n.memoizedState !== null,
        Ar(t, e, n),
        xt = r) : Ar(t, e, n);
        break;
    default:
        Ar(t, e, n)
    }
}
function fh(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new hy),
        e.forEach(function(r) {
            var i = Ty.bind(null, t, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function In(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = t
                  , o = e
                  , s = o;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        ot = s.stateNode,
                        Un = !1;
                        break e;
                    case 3:
                        ot = s.stateNode.containerInfo,
                        Un = !0;
                        break e;
                    case 4:
                        ot = s.stateNode.containerInfo,
                        Un = !0;
                        break e
                    }
                    s = s.return
                }
                if (ot === null)
                    throw Error(O(160));
                ng(l, o, i),
                ot = null,
                Un = !1;
                var u = i.alternate;
                u !== null && (u.return = null),
                i.return = null
            } catch (a) {
                Me(i, e, a)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            rg(e, t),
            e = e.sibling
}
function rg(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (In(e, t),
        Gn(t),
        r & 4) {
            try {
                Do(3, t, t.return),
                Ca(3, t)
            } catch (m) {
                Me(t, t.return, m)
            }
            try {
                Do(5, t, t.return)
            } catch (m) {
                Me(t, t.return, m)
            }
        }
        break;
    case 1:
        In(e, t),
        Gn(t),
        r & 512 && n !== null && wl(n, n.return);
        break;
    case 5:
        if (In(e, t),
        Gn(t),
        r & 512 && n !== null && wl(n, n.return),
        t.flags & 32) {
            var i = t.stateNode;
            try {
                Ko(i, "")
            } catch (m) {
                Me(t, t.return, m)
            }
        }
        if (r & 4 && (i = t.stateNode,
        i != null)) {
            var l = t.memoizedProps
              , o = n !== null ? n.memoizedProps : l
              , s = t.type
              , u = t.updateQueue;
            if (t.updateQueue = null,
            u !== null)
                try {
                    s === "input" && l.type === "radio" && l.name != null && C0(i, l),
                    Ic(s, o);
                    var a = Ic(s, l);
                    for (o = 0; o < u.length; o += 2) {
                        var c = u[o]
                          , p = u[o + 1];
                        c === "style" ? M0(i, p) : c === "dangerouslySetInnerHTML" ? P0(i, p) : c === "children" ? Ko(i, p) : Zf(i, c, p, a)
                    }
                    switch (s) {
                    case "input":
                        Lc(i, l);
                        break;
                    case "textarea":
                        E0(i, l);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!l.multiple;
                        var d = l.value;
                        d != null ? El(i, !!l.multiple, d, !1) : f !== !!l.multiple && (l.defaultValue != null ? El(i, !!l.multiple, l.defaultValue, !0) : El(i, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    i[ls] = l
                } catch (m) {
                    Me(t, t.return, m)
                }
        }
        break;
    case 6:
        if (In(e, t),
        Gn(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(O(162));
            i = t.stateNode,
            l = t.memoizedProps;
            try {
                i.nodeValue = l
            } catch (m) {
                Me(t, t.return, m)
            }
        }
        break;
    case 3:
        if (In(e, t),
        Gn(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                es(e.containerInfo)
            } catch (m) {
                Me(t, t.return, m)
            }
        break;
    case 4:
        In(e, t),
        Gn(t);
        break;
    case 13:
        In(e, t),
        Gn(t),
        i = t.child,
        i.flags & 8192 && (l = i.memoizedState !== null,
        i.stateNode.isHidden = l,
        !l || i.alternate !== null && i.alternate.memoizedState !== null || (Md = Ie())),
        r & 4 && fh(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (xt = (a = xt) || c,
        In(e, t),
        xt = a) : In(e, t),
        Gn(t),
        r & 8192) {
            if (a = t.memoizedState !== null,
            (t.stateNode.isHidden = a) && !c && t.mode & 1)
                for (R = t,
                c = t.child; c !== null; ) {
                    for (p = R = c; R !== null; ) {
                        switch (f = R,
                        d = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Do(4, f, f.return);
                            break;
                        case 1:
                            wl(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    e = r,
                                    y.props = e.memoizedProps,
                                    y.state = e.memoizedState,
                                    y.componentWillUnmount()
                                } catch (m) {
                                    Me(r, n, m)
                                }
                            }
                            break;
                        case 5:
                            wl(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                ph(p);
                                continue
                            }
                        }
                        d !== null ? (d.return = f,
                        R = d) : ph(p)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            p = t; ; ) {
                if (p.tag === 5) {
                    if (c === null) {
                        c = p;
                        try {
                            i = p.stateNode,
                            a ? (l = i.style,
                            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = p.stateNode,
                            u = p.memoizedProps.style,
                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                            s.style.display = j0("display", o))
                        } catch (m) {
                            Me(t, t.return, m)
                        }
                    }
                } else if (p.tag === 6) {
                    if (c === null)
                        try {
                            p.stateNode.nodeValue = a ? "" : p.memoizedProps
                        } catch (m) {
                            Me(t, t.return, m)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === t) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === t)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === t)
                        break e;
                    c === p && (c = null),
                    p = p.return
                }
                c === p && (c = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        In(e, t),
        Gn(t),
        r & 4 && fh(t);
        break;
    case 21:
        break;
    default:
        In(e, t),
        Gn(t)
    }
}
function Gn(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (tg(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ko(i, ""),
                r.flags &= -33);
                var l = ch(t);
                hf(t, l, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , s = ch(t);
                pf(t, s, o);
                break;
            default:
                throw Error(O(161))
            }
        } catch (u) {
            Me(t, t.return, u)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function gy(t, e, n) {
    R = t,
    ig(t)
}
function ig(t, e, n) {
    for (var r = (t.mode & 1) !== 0; R !== null; ) {
        var i = R
          , l = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Qs;
            if (!o) {
                var s = i.alternate
                  , u = s !== null && s.memoizedState !== null || xt;
                s = Qs;
                var a = xt;
                if (Qs = o,
                (xt = u) && !a)
                    for (R = i; R !== null; )
                        o = R,
                        u = o.child,
                        o.tag === 22 && o.memoizedState !== null ? hh(i) : u !== null ? (u.return = o,
                        R = u) : hh(i);
                for (; l !== null; )
                    R = l,
                    ig(l),
                    l = l.sibling;
                R = i,
                Qs = s,
                xt = a
            }
            dh(t)
        } else
            i.subtreeFlags & 8772 && l !== null ? (l.return = i,
            R = l) : dh(t)
    }
}
function dh(t) {
    for (; R !== null; ) {
        var e = R;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        xt || Ca(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !xt)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : Bn(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var l = e.updateQueue;
                        l !== null && Kp(e, l, r);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            Kp(e, o, n)
                        }
                        break;
                    case 5:
                        var s = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = s;
                            var u = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var a = e.alternate;
                            if (a !== null) {
                                var c = a.memoizedState;
                                if (c !== null) {
                                    var p = c.dehydrated;
                                    p !== null && es(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                    }
                xt || e.flags & 512 && df(e)
            } catch (f) {
                Me(e, e.return, f)
            }
        }
        if (e === t) {
            R = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            R = n;
            break
        }
        R = e.return
    }
}
function ph(t) {
    for (; R !== null; ) {
        var e = R;
        if (e === t) {
            R = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            R = n;
            break
        }
        R = e.return
    }
}
function hh(t) {
    for (; R !== null; ) {
        var e = R;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    Ca(4, e)
                } catch (u) {
                    Me(e, n, u)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = e.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        Me(e, i, u)
                    }
                }
                var l = e.return;
                try {
                    df(e)
                } catch (u) {
                    Me(e, l, u)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    df(e)
                } catch (u) {
                    Me(e, o, u)
                }
            }
        } catch (u) {
            Me(e, e.return, u)
        }
        if (e === t) {
            R = null;
            break
        }
        var s = e.sibling;
        if (s !== null) {
            s.return = e.return,
            R = s;
            break
        }
        R = e.return
    }
}
var _y = Math.ceil
  , Ju = jr.ReactCurrentDispatcher
  , Pd = jr.ReactCurrentOwner
  , Cn = jr.ReactCurrentBatchConfig
  , le = 0
  , nt = null
  , Ve = null
  , at = 0
  , nn = 0
  , kl = pi(0)
  , Ge = 0
  , fs = null
  , Wi = 0
  , Ea = 0
  , jd = 0
  , Ro = null
  , bt = null
  , Md = 0
  , Hl = 1 / 0
  , dr = null
  , ea = !1
  , mf = null
  , ei = null
  , Gs = !1
  , Vr = null
  , ta = 0
  , Ao = 0
  , gf = null
  , ku = -1
  , Su = 0;
function It() {
    return le & 6 ? Ie() : ku !== -1 ? ku : ku = Ie()
}
function ti(t) {
    return t.mode & 1 ? le & 2 && at !== 0 ? at & -at : ey.transition !== null ? (Su === 0 && (Su = b0()),
    Su) : (t = ae,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : G0(t.type)),
    t) : 1
}
function Hn(t, e, n, r) {
    if (50 < Ao)
        throw Ao = 0,
        gf = null,
        Error(O(185));
    Ts(t, n, r),
    (!(le & 2) || t !== nt) && (t === nt && (!(le & 2) && (Ea |= n),
    Ge === 4 && $r(t, at)),
    Yt(t, r),
    n === 1 && le === 0 && !(e.mode & 1) && (Hl = Ie() + 500,
    ka && hi()))
}
function Yt(t, e) {
    var n = t.callbackNode;
    ev(t, e);
    var r = Fu(t, t === nt ? at : 0);
    if (r === 0)
        n !== null && Sp(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && Sp(n),
        e === 1)
            t.tag === 0 ? Jv(mh.bind(null, t)) : hm(mh.bind(null, t)),
            Gv(function() {
                !(le & 6) && hi()
            }),
            n = null;
        else {
            switch (V0(r)) {
            case 1:
                n = nd;
                break;
            case 4:
                n = U0;
                break;
            case 16:
                n = Iu;
                break;
            case 536870912:
                n = $0;
                break;
            default:
                n = Iu
            }
            n = dg(n, lg.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function lg(t, e) {
    if (ku = -1,
    Su = 0,
    le & 6)
        throw Error(O(327));
    var n = t.callbackNode;
    if (Ol() && t.callbackNode !== n)
        return null;
    var r = Fu(t, t === nt ? at : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = na(t, r);
    else {
        e = r;
        var i = le;
        le |= 2;
        var l = sg();
        (nt !== t || at !== e) && (dr = null,
        Hl = Ie() + 500,
        zi(t, e));
        do
            try {
                xy();
                break
            } catch (s) {
                og(t, s)
            }
        while (!0);
        md(),
        Ju.current = l,
        le = i,
        Ve !== null ? e = 0 : (nt = null,
        at = 0,
        e = Ge)
    }
    if (e !== 0) {
        if (e === 2 && (i = bc(t),
        i !== 0 && (r = i,
        e = _f(t, i))),
        e === 1)
            throw n = fs,
            zi(t, 0),
            $r(t, r),
            Yt(t, Ie()),
            n;
        if (e === 6)
            $r(t, r);
        else {
            if (i = t.current.alternate,
            !(r & 30) && !vy(i) && (e = na(t, r),
            e === 2 && (l = bc(t),
            l !== 0 && (r = l,
            e = _f(t, l))),
            e === 1))
                throw n = fs,
                zi(t, 0),
                $r(t, r),
                Yt(t, Ie()),
                n;
            switch (t.finishedWork = i,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(O(345));
            case 2:
                Ti(t, bt, dr);
                break;
            case 3:
                if ($r(t, r),
                (r & 130023424) === r && (e = Md + 500 - Ie(),
                10 < e)) {
                    if (Fu(t, 0) !== 0)
                        break;
                    if (i = t.suspendedLanes,
                    (i & r) !== r) {
                        It(),
                        t.pingedLanes |= t.suspendedLanes & i;
                        break
                    }
                    t.timeoutHandle = Kc(Ti.bind(null, t, bt, dr), e);
                    break
                }
                Ti(t, bt, dr);
                break;
            case 4:
                if ($r(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Vn(r);
                    l = 1 << o,
                    o = e[o],
                    o > i && (i = o),
                    r &= ~l
                }
                if (r = i,
                r = Ie() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _y(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = Kc(Ti.bind(null, t, bt, dr), r);
                    break
                }
                Ti(t, bt, dr);
                break;
            case 5:
                Ti(t, bt, dr);
                break;
            default:
                throw Error(O(329))
            }
        }
    }
    return Yt(t, Ie()),
    t.callbackNode === n ? lg.bind(null, t) : null
}
function _f(t, e) {
    var n = Ro;
    return t.current.memoizedState.isDehydrated && (zi(t, e).flags |= 256),
    t = na(t, e),
    t !== 2 && (e = bt,
    bt = n,
    e !== null && vf(e)),
    t
}
function vf(t) {
    bt === null ? bt = t : bt.push.apply(bt, t)
}
function vy(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Wn(l(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function $r(t, e) {
    for (e &= ~jd,
    e &= ~Ea,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - Vn(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function mh(t) {
    if (le & 6)
        throw Error(O(327));
    Ol();
    var e = Fu(t, 0);
    if (!(e & 1))
        return Yt(t, Ie()),
        null;
    var n = na(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = bc(t);
        r !== 0 && (e = r,
        n = _f(t, r))
    }
    if (n === 1)
        throw n = fs,
        zi(t, 0),
        $r(t, e),
        Yt(t, Ie()),
        n;
    if (n === 6)
        throw Error(O(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    Ti(t, bt, dr),
    Yt(t, Ie()),
    null
}
function Od(t, e) {
    var n = le;
    le |= 1;
    try {
        return t(e)
    } finally {
        le = n,
        le === 0 && (Hl = Ie() + 500,
        ka && hi())
    }
}
function Yi(t) {
    Vr !== null && Vr.tag === 0 && !(le & 6) && Ol();
    var e = le;
    le |= 1;
    var n = Cn.transition
      , r = ae;
    try {
        if (Cn.transition = null,
        ae = 1,
        t)
            return t()
    } finally {
        ae = r,
        Cn.transition = n,
        le = e,
        !(le & 6) && hi()
    }
}
function Ld() {
    nn = kl.current,
    _e(kl)
}
function zi(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    Qv(n)),
    Ve !== null)
        for (n = Ve.return; n !== null; ) {
            var r = n;
            switch (dd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Vu();
                break;
            case 3:
                bl(),
                _e(Ht),
                _e(Tt),
                wd();
                break;
            case 5:
                xd(r);
                break;
            case 4:
                bl();
                break;
            case 13:
                _e(Te);
                break;
            case 19:
                _e(Te);
                break;
            case 10:
                gd(r.type._context);
                break;
            case 22:
            case 23:
                Ld()
            }
            n = n.return
        }
    if (nt = t,
    Ve = t = ni(t.current, null),
    at = nn = e,
    Ge = 0,
    fs = null,
    jd = Ea = Wi = 0,
    bt = Ro = null,
    ji !== null) {
        for (e = 0; e < ji.length; e++)
            if (n = ji[e],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , l = n.pending;
                if (l !== null) {
                    var o = l.next;
                    l.next = i,
                    r.next = o
                }
                n.pending = r
            }
        ji = null
    }
    return t
}
function og(t, e) {
    do {
        var n = Ve;
        try {
            if (md(),
            yu.current = qu,
            Zu) {
                for (var r = Ne.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Zu = !1
            }
            if (Hi = 0,
            et = Ye = Ne = null,
            zo = !1,
            us = 0,
            Pd.current = null,
            n === null || n.return === null) {
                Ge = 1,
                fs = e,
                Ve = null;
                break
            }
            e: {
                var l = t
                  , o = n.return
                  , s = n
                  , u = e;
                if (e = at,
                s.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var a = u
                      , c = s
                      , p = c.tag;
                    if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var d = nh(o);
                    if (d !== null) {
                        d.flags &= -257,
                        rh(d, o, s, l, e),
                        d.mode & 1 && th(l, a, e),
                        e = d,
                        u = a;
                        var y = e.updateQueue;
                        if (y === null) {
                            var m = new Set;
                            m.add(u),
                            e.updateQueue = m
                        } else
                            y.add(u);
                        break e
                    } else {
                        if (!(e & 1)) {
                            th(l, a, e),
                            zd();
                            break e
                        }
                        u = Error(O(426))
                    }
                } else if (ye && s.mode & 1) {
                    var k = nh(o);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        rh(k, o, s, l, e),
                        pd(Vl(u, s));
                        break e
                    }
                }
                l = u = Vl(u, s),
                Ge !== 4 && (Ge = 2),
                Ro === null ? Ro = [l] : Ro.push(l),
                l = o;
                do {
                    switch (l.tag) {
                    case 3:
                        l.flags |= 65536,
                        e &= -e,
                        l.lanes |= e;
                        var g = Vm(l, u, e);
                        Gp(l, g);
                        break e;
                    case 1:
                        s = u;
                        var h = l.type
                          , _ = l.stateNode;
                        if (!(l.flags & 128) && (typeof h.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (ei === null || !ei.has(_)))) {
                            l.flags |= 65536,
                            e &= -e,
                            l.lanes |= e;
                            var x = Hm(l, s, e);
                            Gp(l, x);
                            break e
                        }
                    }
                    l = l.return
                } while (l !== null)
            }
            ag(n)
        } catch (T) {
            e = T,
            Ve === n && n !== null && (Ve = n = n.return);
            continue
        }
        break
    } while (!0)
}
function sg() {
    var t = Ju.current;
    return Ju.current = qu,
    t === null ? qu : t
}
function zd() {
    (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
    nt === null || !(Wi & 268435455) && !(Ea & 268435455) || $r(nt, at)
}
function na(t, e) {
    var n = le;
    le |= 2;
    var r = sg();
    (nt !== t || at !== e) && (dr = null,
    zi(t, e));
    do
        try {
            yy();
            break
        } catch (i) {
            og(t, i)
        }
    while (!0);
    if (md(),
    le = n,
    Ju.current = r,
    Ve !== null)
        throw Error(O(261));
    return nt = null,
    at = 0,
    Ge
}
function yy() {
    for (; Ve !== null; )
        ug(Ve)
}
function xy() {
    for (; Ve !== null && !W_(); )
        ug(Ve)
}
function ug(t) {
    var e = fg(t.alternate, t, nn);
    t.memoizedProps = t.pendingProps,
    e === null ? ag(t) : Ve = e,
    Pd.current = null
}
function ag(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = py(n, e),
            n !== null) {
                n.flags &= 32767,
                Ve = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                Ge = 6,
                Ve = null;
                return
            }
        } else if (n = dy(n, e, nn),
        n !== null) {
            Ve = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            Ve = e;
            return
        }
        Ve = e = t
    } while (e !== null);
    Ge === 0 && (Ge = 5)
}
function Ti(t, e, n) {
    var r = ae
      , i = Cn.transition;
    try {
        Cn.transition = null,
        ae = 1,
        wy(t, e, n, r)
    } finally {
        Cn.transition = i,
        ae = r
    }
    return null
}
function wy(t, e, n, r) {
    do
        Ol();
    while (Vr !== null);
    if (le & 6)
        throw Error(O(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(O(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (tv(t, l),
    t === nt && (Ve = nt = null,
    at = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gs || (Gs = !0,
    dg(Iu, function() {
        return Ol(),
        null
    })),
    l = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || l) {
        l = Cn.transition,
        Cn.transition = null;
        var o = ae;
        ae = 1;
        var s = le;
        le |= 4,
        Pd.current = null,
        my(t, n),
        rg(n, t),
        $v(Qc),
        Bu = !!Xc,
        Qc = Xc = null,
        t.current = n,
        gy(n),
        Y_(),
        le = s,
        ae = o,
        Cn.transition = l
    } else
        t.current = n;
    if (Gs && (Gs = !1,
    Vr = t,
    ta = i),
    l = t.pendingLanes,
    l === 0 && (ei = null),
    G_(n.stateNode),
    Yt(t, Ie()),
    e !== null)
        for (r = t.onRecoverableError,
        n = 0; n < e.length; n++)
            i = e[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (ea)
        throw ea = !1,
        t = mf,
        mf = null,
        t;
    return ta & 1 && t.tag !== 0 && Ol(),
    l = t.pendingLanes,
    l & 1 ? t === gf ? Ao++ : (Ao = 0,
    gf = t) : Ao = 0,
    hi(),
    null
}
function Ol() {
    if (Vr !== null) {
        var t = V0(ta)
          , e = Cn.transition
          , n = ae;
        try {
            if (Cn.transition = null,
            ae = 16 > t ? 16 : t,
            Vr === null)
                var r = !1;
            else {
                if (t = Vr,
                Vr = null,
                ta = 0,
                le & 6)
                    throw Error(O(331));
                var i = le;
                for (le |= 4,
                R = t.current; R !== null; ) {
                    var l = R
                      , o = l.child;
                    if (R.flags & 16) {
                        var s = l.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (R = a; R !== null; ) {
                                    var c = R;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Do(8, c, l)
                                    }
                                    var p = c.child;
                                    if (p !== null)
                                        p.return = c,
                                        R = p;
                                    else
                                        for (; R !== null; ) {
                                            c = R;
                                            var f = c.sibling
                                              , d = c.return;
                                            if (eg(c),
                                            c === a) {
                                                R = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = d,
                                                R = f;
                                                break
                                            }
                                            R = d
                                        }
                                }
                            }
                            var y = l.alternate;
                            if (y !== null) {
                                var m = y.child;
                                if (m !== null) {
                                    y.child = null;
                                    do {
                                        var k = m.sibling;
                                        m.sibling = null,
                                        m = k
                                    } while (m !== null)
                                }
                            }
                            R = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null)
                        o.return = l,
                        R = o;
                    else
                        e: for (; R !== null; ) {
                            if (l = R,
                            l.flags & 2048)
                                switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Do(9, l, l.return)
                                }
                            var g = l.sibling;
                            if (g !== null) {
                                g.return = l.return,
                                R = g;
                                break e
                            }
                            R = l.return
                        }
                }
                var h = t.current;
                for (R = h; R !== null; ) {
                    o = R;
                    var _ = o.child;
                    if (o.subtreeFlags & 2064 && _ !== null)
                        _.return = o,
                        R = _;
                    else
                        e: for (o = h; R !== null; ) {
                            if (s = R,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ca(9, s)
                                    }
                                } catch (T) {
                                    Me(s, s.return, T)
                                }
                            if (s === o) {
                                R = null;
                                break e
                            }
                            var x = s.sibling;
                            if (x !== null) {
                                x.return = s.return,
                                R = x;
                                break e
                            }
                            R = s.return
                        }
                }
                if (le = i,
                hi(),
                ir && typeof ir.onPostCommitFiberRoot == "function")
                    try {
                        ir.onPostCommitFiberRoot(_a, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ae = n,
            Cn.transition = e
        }
    }
    return !1
}
function gh(t, e, n) {
    e = Vl(n, e),
    e = Vm(t, e, 1),
    t = Jr(t, e, 1),
    e = It(),
    t !== null && (Ts(t, 1, e),
    Yt(t, e))
}
function Me(t, e, n) {
    if (t.tag === 3)
        gh(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                gh(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ei === null || !ei.has(r))) {
                    t = Vl(n, t),
                    t = Hm(e, t, 1),
                    e = Jr(e, t, 1),
                    t = It(),
                    e !== null && (Ts(e, 1, t),
                    Yt(e, t));
                    break
                }
            }
            e = e.return
        }
}
function ky(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = It(),
    t.pingedLanes |= t.suspendedLanes & n,
    nt === t && (at & n) === n && (Ge === 4 || Ge === 3 && (at & 130023424) === at && 500 > Ie() - Md ? zi(t, 0) : jd |= n),
    Yt(t, e)
}
function cg(t, e) {
    e === 0 && (t.mode & 1 ? (e = Bs,
    Bs <<= 1,
    !(Bs & 130023424) && (Bs = 4194304)) : e = 1);
    var n = It();
    t = Cr(t, e),
    t !== null && (Ts(t, e, n),
    Yt(t, n))
}
function Sy(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    cg(t, n)
}
function Ty(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var r = t.stateNode
          , i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = t.stateNode;
        break;
    default:
        throw Error(O(314))
    }
    r !== null && r.delete(e),
    cg(t, n)
}
var fg;
fg = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Ht.current)
            Vt = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Vt = !1,
                fy(t, e, n);
            Vt = !!(t.flags & 131072)
        }
    else
        Vt = !1,
        ye && e.flags & 1048576 && mm(e, Yu, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        wu(t, e),
        t = e.pendingProps;
        var i = Bl(e, Tt.current);
        Ml(e, n),
        i = Sd(null, e, r, t, i, n);
        var l = Td();
        return e.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Wt(r) ? (l = !0,
        Hu(e)) : l = !1,
        e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        vd(e),
        i.updater = Ta,
        e.stateNode = i,
        i._reactInternals = e,
        rf(e, r, t, n),
        e = sf(null, e, r, !0, l, n)) : (e.tag = 0,
        ye && l && fd(e),
        Mt(null, e, i, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (wu(t, e),
            t = e.pendingProps,
            i = r._init,
            r = i(r._payload),
            e.type = r,
            i = e.tag = Ey(r),
            t = Bn(r, t),
            i) {
            case 0:
                e = of(null, e, r, t, n);
                break e;
            case 1:
                e = oh(null, e, r, t, n);
                break e;
            case 11:
                e = ih(null, e, r, t, n);
                break e;
            case 14:
                e = lh(null, e, r, Bn(r.type, t), n);
                break e
            }
            throw Error(O(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : Bn(r, i),
        of(t, e, r, i, n);
    case 1:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : Bn(r, i),
        oh(t, e, r, i, n);
    case 3:
        e: {
            if (Qm(e),
            t === null)
                throw Error(O(387));
            r = e.pendingProps,
            l = e.memoizedState,
            i = l.element,
            wm(t, e),
            Gu(e, r, null, n);
            var o = e.memoizedState;
            if (r = o.element,
            l.isDehydrated)
                if (l = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = l,
                e.memoizedState = l,
                e.flags & 256) {
                    i = Vl(Error(O(423)), e),
                    e = sh(t, e, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Vl(Error(O(424)), e),
                    e = sh(t, e, r, n, i);
                    break e
                } else
                    for (un = qr(e.stateNode.containerInfo.firstChild),
                    cn = e,
                    ye = !0,
                    $n = null,
                    n = ym(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ul(),
                r === i) {
                    e = Er(t, e, n);
                    break e
                }
                Mt(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return km(e),
        t === null && ef(e),
        r = e.type,
        i = e.pendingProps,
        l = t !== null ? t.memoizedProps : null,
        o = i.children,
        Gc(r, i) ? o = null : l !== null && Gc(r, l) && (e.flags |= 32),
        Xm(t, e),
        Mt(t, e, o, n),
        e.child;
    case 6:
        return t === null && ef(e),
        null;
    case 13:
        return Gm(t, e, n);
    case 4:
        return yd(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = $l(e, null, r, n) : Mt(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : Bn(r, i),
        ih(t, e, r, i, n);
    case 7:
        return Mt(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return Mt(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return Mt(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            i = e.pendingProps,
            l = e.memoizedProps,
            o = i.value,
            pe(Xu, r._currentValue),
            r._currentValue = o,
            l !== null)
                if (Wn(l.value, o)) {
                    if (l.children === i.children && !Ht.current) {
                        e = Er(t, e, n);
                        break e
                    }
                } else
                    for (l = e.child,
                    l !== null && (l.return = e); l !== null; ) {
                        var s = l.dependencies;
                        if (s !== null) {
                            o = l.child;
                            for (var u = s.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (l.tag === 1) {
                                        u = xr(-1, n & -n),
                                        u.tag = 2;
                                        var a = l.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var c = a.pending;
                                            c === null ? u.next = u : (u.next = c.next,
                                            c.next = u),
                                            a.pending = u
                                        }
                                    }
                                    l.lanes |= n,
                                    u = l.alternate,
                                    u !== null && (u.lanes |= n),
                                    tf(l.return, n, e),
                                    s.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (l.tag === 10)
                            o = l.type === e.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (o = l.return,
                            o === null)
                                throw Error(O(341));
                            o.lanes |= n,
                            s = o.alternate,
                            s !== null && (s.lanes |= n),
                            tf(o, n, e),
                            o = l.sibling
                        } else
                            o = l.child;
                        if (o !== null)
                            o.return = l;
                        else
                            for (o = l; o !== null; ) {
                                if (o === e) {
                                    o = null;
                                    break
                                }
                                if (l = o.sibling,
                                l !== null) {
                                    l.return = o.return,
                                    o = l;
                                    break
                                }
                                o = o.return
                            }
                        l = o
                    }
            Mt(t, e, i.children, n),
            e = e.child
        }
        return e;
    case 9:
        return i = e.type,
        r = e.pendingProps.children,
        Ml(e, n),
        i = Nn(i),
        r = r(i),
        e.flags |= 1,
        Mt(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        i = Bn(r, e.pendingProps),
        i = Bn(r.type, i),
        lh(t, e, r, i, n);
    case 15:
        return Wm(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : Bn(r, i),
        wu(t, e),
        e.tag = 1,
        Wt(r) ? (t = !0,
        Hu(e)) : t = !1,
        Ml(e, n),
        bm(e, r, i),
        rf(e, r, i, n),
        sf(null, e, r, !0, t, n);
    case 19:
        return Km(t, e, n);
    case 22:
        return Ym(t, e, n)
    }
    throw Error(O(156, e.tag))
}
;
function dg(t, e) {
    return B0(t, e)
}
function Cy(t, e, n, r) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function kn(t, e, n, r) {
    return new Cy(t,e,n,r)
}
function Dd(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function Ey(t) {
    if (typeof t == "function")
        return Dd(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Jf)
            return 11;
        if (t === ed)
            return 14
    }
    return 2
}
function ni(t, e) {
    var n = t.alternate;
    return n === null ? (n = kn(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function Tu(t, e, n, r, i, l) {
    var o = 2;
    if (r = t,
    typeof t == "function")
        Dd(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
        case dl:
            return Di(n.children, i, l, e);
        case qf:
            o = 8,
            i |= 8;
            break;
        case Nc:
            return t = kn(12, n, e, i | 2),
            t.elementType = Nc,
            t.lanes = l,
            t;
        case Pc:
            return t = kn(13, n, e, i),
            t.elementType = Pc,
            t.lanes = l,
            t;
        case jc:
            return t = kn(19, n, e, i),
            t.elementType = jc,
            t.lanes = l,
            t;
        case k0:
            return Na(n, i, l, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case x0:
                    o = 10;
                    break e;
                case w0:
                    o = 9;
                    break e;
                case Jf:
                    o = 11;
                    break e;
                case ed:
                    o = 14;
                    break e;
                case Fr:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(O(130, t == null ? t : typeof t, ""))
        }
    return e = kn(o, n, e, i),
    e.elementType = t,
    e.type = r,
    e.lanes = l,
    e
}
function Di(t, e, n, r) {
    return t = kn(7, t, r, e),
    t.lanes = n,
    t
}
function Na(t, e, n, r) {
    return t = kn(22, t, r, e),
    t.elementType = k0,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function sc(t, e, n) {
    return t = kn(6, t, null, e),
    t.lanes = n,
    t
}
function uc(t, e, n) {
    return e = kn(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function Ny(t, e, n, r, i) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ba(0),
    this.expirationTimes = ba(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ba(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Rd(t, e, n, r, i, l, o, s, u) {
    return t = new Ny(t,e,n,s,u),
    e === 1 ? (e = 1,
    l === !0 && (e |= 8)) : e = 0,
    l = kn(3, null, null, e),
    t.current = l,
    l.stateNode = t,
    l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    vd(l),
    t
}
function Py(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: fl,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function pg(t) {
    if (!t)
        return ui;
    t = t._reactInternals;
    e: {
        if (Ji(t) !== t || t.tag !== 1)
            throw Error(O(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Wt(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(O(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Wt(n))
            return pm(t, n, e)
    }
    return e
}
function hg(t, e, n, r, i, l, o, s, u) {
    return t = Rd(n, r, !0, t, i, l, o, s, u),
    t.context = pg(null),
    n = t.current,
    r = It(),
    i = ti(n),
    l = xr(r, i),
    l.callback = e ?? null,
    Jr(n, l, i),
    t.current.lanes = i,
    Ts(t, i, r),
    Yt(t, r),
    t
}
function Pa(t, e, n, r) {
    var i = e.current
      , l = It()
      , o = ti(i);
    return n = pg(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = xr(l, o),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = Jr(i, e, o),
    t !== null && (Hn(t, i, o, l),
    vu(t, i, o)),
    o
}
function ra(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function _h(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function Ad(t, e) {
    _h(t, e),
    (t = t.alternate) && _h(t, e)
}
function jy() {
    return null
}
var mg = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function Id(t) {
    this._internalRoot = t
}
ja.prototype.render = Id.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(O(409));
    Pa(t, e, null, null)
}
;
ja.prototype.unmount = Id.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Yi(function() {
            Pa(null, t, null, null)
        }),
        e[Tr] = null
    }
}
;
function ja(t) {
    this._internalRoot = t
}
ja.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Y0();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < Ur.length && e !== 0 && e < Ur[n].priority; n++)
            ;
        Ur.splice(n, 0, t),
        n === 0 && Q0(t)
    }
}
;
function Fd(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function Ma(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function vh() {}
function My(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var a = ra(o);
                l.call(a)
            }
        }
        var o = hg(e, r, t, 0, null, !1, !1, "", vh);
        return t._reactRootContainer = o,
        t[Tr] = o.current,
        rs(t.nodeType === 8 ? t.parentNode : t),
        Yi(),
        o
    }
    for (; i = t.lastChild; )
        t.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var a = ra(u);
            s.call(a)
        }
    }
    var u = Rd(t, 0, !1, null, null, !1, !1, "", vh);
    return t._reactRootContainer = u,
    t[Tr] = u.current,
    rs(t.nodeType === 8 ? t.parentNode : t),
    Yi(function() {
        Pa(e, u, n, r)
    }),
    u
}
function Oa(t, e, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var u = ra(o);
                s.call(u)
            }
        }
        Pa(e, o, t, i)
    } else
        o = My(n, e, t, i, r);
    return ra(o)
}
H0 = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = yo(e.pendingLanes);
            n !== 0 && (rd(e, n | 1),
            Yt(e, Ie()),
            !(le & 6) && (Hl = Ie() + 500,
            hi()))
        }
        break;
    case 13:
        Yi(function() {
            var r = Cr(t, 1);
            if (r !== null) {
                var i = It();
                Hn(r, t, 1, i)
            }
        }),
        Ad(t, 1)
    }
}
;
id = function(t) {
    if (t.tag === 13) {
        var e = Cr(t, 134217728);
        if (e !== null) {
            var n = It();
            Hn(e, t, 134217728, n)
        }
        Ad(t, 134217728)
    }
}
;
W0 = function(t) {
    if (t.tag === 13) {
        var e = ti(t)
          , n = Cr(t, e);
        if (n !== null) {
            var r = It();
            Hn(n, t, e, r)
        }
        Ad(t, e)
    }
}
;
Y0 = function() {
    return ae
}
;
X0 = function(t, e) {
    var n = ae;
    try {
        return ae = t,
        e()
    } finally {
        ae = n
    }
}
;
Bc = function(t, e, n) {
    switch (e) {
    case "input":
        if (Lc(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var r = n[e];
                if (r !== t && r.form === t.form) {
                    var i = wa(r);
                    if (!i)
                        throw Error(O(90));
                    T0(r),
                    Lc(r, i)
                }
            }
        }
        break;
    case "textarea":
        E0(t, n);
        break;
    case "select":
        e = n.value,
        e != null && El(t, !!n.multiple, e, !1)
    }
}
;
z0 = Od;
D0 = Yi;
var Oy = {
    usingClientEntryPoint: !1,
    Events: [Es, gl, wa, O0, L0, Od]
}
  , po = {
    findFiberByHostInstance: Pi,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Ly = {
    bundleType: po.bundleType,
    version: po.version,
    rendererPackageName: po.rendererPackageName,
    rendererConfig: po.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = I0(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: po.findFiberByHostInstance || jy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber)
        try {
            _a = Ks.inject(Ly),
            ir = Ks
        } catch {}
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
hn.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fd(e))
        throw Error(O(200));
    return Py(t, e, null, n)
}
;
hn.createRoot = function(t, e) {
    if (!Fd(t))
        throw Error(O(299));
    var n = !1
      , r = ""
      , i = mg;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    e = Rd(t, 1, !1, null, null, n, !1, r, i),
    t[Tr] = e.current,
    rs(t.nodeType === 8 ? t.parentNode : t),
    new Id(e)
}
;
hn.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(O(188)) : (t = Object.keys(t).join(","),
        Error(O(268, t)));
    return t = I0(e),
    t = t === null ? null : t.stateNode,
    t
}
;
hn.flushSync = function(t) {
    return Yi(t)
}
;
hn.hydrate = function(t, e, n) {
    if (!Ma(e))
        throw Error(O(200));
    return Oa(null, t, e, !0, n)
}
;
hn.hydrateRoot = function(t, e, n) {
    if (!Fd(t))
        throw Error(O(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , l = ""
      , o = mg;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    e = hg(e, null, t, 1, n ?? null, i, !1, l, o),
    t[Tr] = e.current,
    rs(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            i = n._getVersion,
            i = i(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new ja(e)
}
;
hn.render = function(t, e, n) {
    if (!Ma(e))
        throw Error(O(200));
    return Oa(null, t, e, !1, n)
}
;
hn.unmountComponentAtNode = function(t) {
    if (!Ma(t))
        throw Error(O(40));
    return t._reactRootContainer ? (Yi(function() {
        Oa(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[Tr] = null
        })
    }),
    !0) : !1
}
;
hn.unstable_batchedUpdates = Od;
hn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!Ma(n))
        throw Error(O(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(O(38));
    return Oa(t, e, n, !1, r)
}
;
hn.version = "18.3.1-next-f1338f8080-20240426";
function gg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg)
        } catch (t) {
            console.error(t)
        }
}
gg(),
g0.exports = hn;
var zy = g0.exports
  , yh = zy;
Cc.createRoot = yh.createRoot,
Cc.hydrateRoot = yh.hydrateRoot;
function pr(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function _g(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var fn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Wl = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Bd, kt, xe, Sn = 1e8, de = 1 / Sn, yf = Math.PI * 2, Dy = yf / 4, Ry = 0, vg = Math.sqrt, Ay = Math.cos, Iy = Math.sin, rt = function(e) {
    return typeof e == "string"
}, Oe = function(e) {
    return typeof e == "function"
}, Nr = function(e) {
    return typeof e == "number"
}, Ud = function(e) {
    return typeof e > "u"
}, ur = function(e) {
    return typeof e == "object"
}, Xt = function(e) {
    return e !== !1
}, $d = function() {
    return typeof window < "u"
}, Zs = function(e) {
    return Oe(e) || rt(e)
}, yg = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, St = Array.isArray, xf = /(?:-?\.?\d|\.)+/gi, xg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Sl = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ac = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, wg = /[+-]=-?[.\d]+/, kg = /[^,'"\[\]\s]+/gi, Fy = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ce, Zn, wf, bd, pn = {}, ia = {}, Sg, Tg = function(e) {
    return (ia = Xi(e, pn)) && Zt
}, Vd = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, ds = function(e, n) {
    return !n && console.warn(e)
}, Cg = function(e, n) {
    return e && (pn[e] = n) && ia && (ia[e] = n) || pn
}, ps = function() {
    return 0
}, By = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Cu = {
    suppressEvents: !0,
    kill: !1
}, Uy = {
    suppressEvents: !0
}, Hd = {}, ri = [], kf = {}, Eg, ln = {}, cc = {}, xh = 30, Eu = [], Wd = "", Yd = function(e) {
    var n = e[0], r, i;
    if (ur(n) || Oe(n) || (e = [e]),
    !(r = (n._gsap || {}).harness)) {
        for (i = Eu.length; i-- && !Eu[i].targetTest(n); )
            ;
        r = Eu[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new Kg(e[i],r))) || e.splice(i, 1);
    return e
}, Ri = function(e) {
    return e._gsap || Yd(Tn(e))[0]._gsap
}, Ng = function(e, n, r) {
    return (r = e[n]) && Oe(r) ? e[n]() : Ud(r) && e.getAttribute && e.getAttribute(n) || r
}, Qt = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
}, Ae = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, tt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Ll = function(e, n) {
    var r = n.charAt(0)
      , i = parseFloat(n.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, $y = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
        ;
    return i < r
}, la = function() {
    var e = ri.length, n = ri.slice(0), r, i;
    for (kf = {},
    ri.length = 0,
    r = 0; r < e; r++)
        i = n[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, Pg = function(e, n, r, i) {
    ri.length && !kt && la(),
    e.render(n, r, kt && n < 0 && (e._initted || e._startAt)),
    ri.length && !kt && la()
}, jg = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(kg).length < 2 ? n : rt(e) ? e.trim() : e
}, Mg = function(e) {
    return e
}, jn = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, by = function(e) {
    return function(n, r) {
        for (var i in r)
            i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
}, Xi = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, wh = function t(e, n) {
    for (var r in n)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = ur(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
}, oa = function(e, n) {
    var r = {}, i;
    for (i in e)
        i in n || (r[i] = e[i]);
    return r
}, Io = function(e) {
    var n = e.parent || Ce
      , r = e.keyframes ? by(St(e.keyframes)) : jn;
    if (Xt(e.inherit))
        for (; n; )
            r(e, n.vars.defaults),
            n = n.parent || n._dp;
    return e
}, Vy = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
        ;
    return r < 0
}, Og = function(e, n, r, i, l) {
    var o = e[i], s;
    if (l)
        for (s = n[l]; o && o[l] > s; )
            o = o._prev;
    return o ? (n._next = o._next,
    o._next = n) : (n._next = e[r],
    e[r] = n),
    n._next ? n._next._prev = n : e[i] = n,
    n._prev = o,
    n.parent = n._dp = e,
    n
}, La = function(e, n, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var l = n._prev
      , o = n._next;
    l ? l._next = o : e[r] === n && (e[r] = o),
    o ? o._prev = l : e[i] === n && (e[i] = l),
    n._next = n._prev = n.parent = null
}, ai = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Ai = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, Hy = function(e) {
    for (var n = e.parent; n && n.parent; )
        n._dirty = 1,
        n.totalDuration(),
        n = n.parent;
    return e
}, Sf = function(e, n, r, i) {
    return e._startAt && (kt ? e._startAt.revert(Cu) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
}, Wy = function t(e) {
    return !e || e._ts && t(e.parent)
}, kh = function(e) {
    return e._repeat ? Yl(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Yl = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
}, sa = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, za = function(e) {
    return e._end = tt(e._start + (e._tDur / Math.abs(e._ts || e._rts || de) || 0))
}, Da = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = tt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
    za(e),
    r._dirty || Ai(r, e)),
    e
}, Lg = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = sa(e.rawTime(), n),
    (!n._dur || Ps(0, n.totalDuration(), r) - n._tTime > de) && n.render(r, !0)),
    Ai(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -de
    }
}, er = function(e, n, r, i) {
    return n.parent && ai(n),
    n._start = tt((Nr(r) ? r : r || e !== Ce ? _n(e, r, n) : e._time) + n._delay),
    n._end = tt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
    Og(e, n, "_first", "_last", e._sort ? "_start" : 0),
    Tf(n) || (e._recent = n),
    i || Lg(e, n),
    e._ts < 0 && Da(e, e._tTime),
    e
}, zg = function(e, n) {
    return (pn.ScrollTrigger || Vd("scrollTrigger", n)) && pn.ScrollTrigger.create(n, e)
}, Dg = function(e, n, r, i, l) {
    if (Qd(e, n, l),
    !e._initted)
        return 1;
    if (!r && e._pt && !kt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Eg !== on.frame)
        return ri.push(e),
        e._lazy = [l, i],
        1
}, Yy = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, Tf = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
}, Xy = function(e, n, r, i) {
    var l = e.ratio, o = n < 0 || !n && (!e._start && Yy(e) && !(!e._initted && Tf(e)) || (e._ts < 0 || e._dp._ts < 0) && !Tf(e)) ? 0 : 1, s = e._rDelay, u = 0, a, c, p;
    if (s && e._repeat && (u = Ps(0, e._tDur, n),
    c = Yl(u, s),
    e._yoyo && c & 1 && (o = 1 - o),
    c !== Yl(e._tTime, s) && (l = 1 - o,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    o !== l || kt || i || e._zTime === de || !n && e._zTime) {
        if (!e._initted && Dg(e, n, i, r, u))
            return;
        for (p = e._zTime,
        e._zTime = n || (r ? de : 0),
        r || (r = n && !p),
        e.ratio = o,
        e._from && (o = 1 - o),
        e._time = 0,
        e._tTime = u,
        a = e._pt; a; )
            a.r(o, a.d),
            a = a._next;
        n < 0 && Sf(e, n, r, !0),
        e._onUpdate && !r && an(e, "onUpdate"),
        u && e._repeat && !r && e.parent && an(e, "onRepeat"),
        (n >= e._tDur || n < 0) && e.ratio === o && (o && ai(e, 1),
        !r && !kt && (an(e, o ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = n)
}, Qy = function(e, n, r) {
    var i;
    if (r > n)
        for (i = e._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > n)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < n)
                return i;
            i = i._prev
        }
}, Xl = function(e, n, r, i) {
    var l = e._repeat
      , o = tt(n) || 0
      , s = e._tTime / e._tDur;
    return s && !i && (e._time *= o / e._dur),
    e._dur = o,
    e._tDur = l ? l < 0 ? 1e10 : tt(o * (l + 1) + e._rDelay * l) : o,
    s > 0 && !i && Da(e, e._tTime = e._tDur * s),
    e.parent && za(e),
    r || Ai(e.parent, e),
    e
}, Sh = function(e) {
    return e instanceof zt ? Ai(e) : Xl(e, e._dur)
}, Gy = {
    _start: 0,
    endTime: ps,
    totalDuration: ps
}, _n = function t(e, n, r) {
    var i = e.labels, l = e._recent || Gy, o = e.duration() >= Sn ? l.endTime(!1) : e._dur, s, u, a;
    return rt(n) && (isNaN(n) || n in i) ? (u = n.charAt(0),
    a = n.substr(-1) === "%",
    s = n.indexOf("="),
    u === "<" || u === ">" ? (s >= 0 && (n = n.replace(/=/, "")),
    (u === "<" ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (a ? (s < 0 ? l : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = o),
    i[n]) : (u = parseFloat(n.charAt(s - 1) + n.substr(s + 1)),
    a && r && (u = u / 100 * (St(r) ? r[0] : r).totalDuration()),
    s > 1 ? t(e, n.substr(0, s - 1), r) + u : o + u)) : n == null ? o : +n
}, Fo = function(e, n, r) {
    var i = Nr(n[1]), l = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = n[l], s, u;
    if (i && (o.duration = n[1]),
    o.parent = r,
    e) {
        for (s = o,
        u = r; u && !("immediateRender"in s); )
            s = u.vars.defaults || {},
            u = Xt(u.vars.inherit) && u.parent;
        o.immediateRender = Xt(s.immediateRender),
        e < 2 ? o.runBackwards = 1 : o.startAt = n[l - 1]
    }
    return new be(n[0],o,n[l + 1])
}, mi = function(e, n) {
    return e || e === 0 ? n(e) : n
}, Ps = function(e, n, r) {
    return r < e ? e : r > n ? n : r
}, wt = function(e, n) {
    return !rt(e) || !(n = Fy.exec(e)) ? "" : n[1]
}, Ky = function(e, n, r) {
    return mi(r, function(i) {
        return Ps(e, n, i)
    })
}, Cf = [].slice, Rg = function(e, n) {
    return e && ur(e) && "length"in e && (!n && !e.length || e.length - 1 in e && ur(e[0])) && !e.nodeType && e !== Zn
}, Zy = function(e, n, r) {
    return r === void 0 && (r = []),
    e.forEach(function(i) {
        var l;
        return rt(i) && !n || Rg(i, 1) ? (l = r).push.apply(l, Tn(i)) : r.push(i)
    }) || r
}, Tn = function(e, n, r) {
    return xe && !n && xe.selector ? xe.selector(e) : rt(e) && !r && (wf || !Ql()) ? Cf.call((n || bd).querySelectorAll(e), 0) : St(e) ? Zy(e, r) : Rg(e) ? Cf.call(e, 0) : e ? [e] : []
}, Ef = function(e) {
    return e = Tn(e)[0] || ds("Invalid scope") || {},
    function(n) {
        var r = e.current || e.nativeElement || e;
        return Tn(n, r.querySelectorAll ? r : r === e ? ds("Invalid scope") || bd.createElement("div") : e)
    }
}, Ag = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Ig = function(e) {
    if (Oe(e))
        return e;
    var n = ur(e) ? e : {
        each: e
    }
      , r = Ii(n.ease)
      , i = n.from || 0
      , l = parseFloat(n.base) || 0
      , o = {}
      , s = i > 0 && i < 1
      , u = isNaN(i) || s
      , a = n.axis
      , c = i
      , p = i;
    return rt(i) ? c = p = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !s && u && (c = i[0],
    p = i[1]),
    function(f, d, y) {
        var m = (y || n).length, k = o[m], g, h, _, x, T, C, S, E, j;
        if (!k) {
            if (j = n.grid === "auto" ? 0 : (n.grid || [1, Sn])[1],
            !j) {
                for (S = -Sn; S < (S = y[j++].getBoundingClientRect().left) && j < m; )
                    ;
                j < m && j--
            }
            for (k = o[m] = [],
            g = u ? Math.min(j, m) * c - .5 : i % j,
            h = j === Sn ? 0 : u ? m * p / j - .5 : i / j | 0,
            S = 0,
            E = Sn,
            C = 0; C < m; C++)
                _ = C % j - g,
                x = h - (C / j | 0),
                k[C] = T = a ? Math.abs(a === "y" ? x : _) : vg(_ * _ + x * x),
                T > S && (S = T),
                T < E && (E = T);
            i === "random" && Ag(k),
            k.max = S - E,
            k.min = E,
            k.v = m = (parseFloat(n.amount) || parseFloat(n.each) * (j > m ? m - 1 : a ? a === "y" ? m / j : j : Math.max(j, m / j)) || 0) * (i === "edges" ? -1 : 1),
            k.b = m < 0 ? l - m : l,
            k.u = wt(n.amount || n.each) || 0,
            r = r && m < 0 ? Xg(r) : r
        }
        return m = (k[f] - k.min) / k.max || 0,
        tt(k.b + (r ? r(m) : m) * k.v) + k.u
    }
}, Nf = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var i = tt(Math.round(parseFloat(r) / e) * e * n);
        return (i - i % 1) / n + (Nr(r) ? 0 : wt(r))
    }
}, Fg = function(e, n) {
    var r = St(e), i, l;
    return !r && ur(e) && (i = r = e.radius || Sn,
    e.values ? (e = Tn(e.values),
    (l = !Nr(e[0])) && (i *= i)) : e = Nf(e.increment)),
    mi(n, r ? Oe(e) ? function(o) {
        return l = e(o),
        Math.abs(l - o) <= i ? l : o
    }
    : function(o) {
        for (var s = parseFloat(l ? o.x : o), u = parseFloat(l ? o.y : 0), a = Sn, c = 0, p = e.length, f, d; p--; )
            l ? (f = e[p].x - s,
            d = e[p].y - u,
            f = f * f + d * d) : f = Math.abs(e[p] - s),
            f < a && (a = f,
            c = p);
        return c = !i || a <= i ? e[c] : o,
        l || c === o || Nr(o) ? c : c + wt(o)
    }
    : Nf(e))
}, Bg = function(e, n, r, i) {
    return mi(St(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
        return St(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
}, qy = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
    return function(i) {
        return n.reduce(function(l, o) {
            return o(l)
        }, i)
    }
}, Jy = function(e, n) {
    return function(r) {
        return e(parseFloat(r)) + (n || wt(r))
    }
}, ex = function(e, n, r) {
    return $g(e, n, 0, 1, r)
}, Ug = function(e, n, r) {
    return mi(r, function(i) {
        return e[~~n(i)]
    })
}, tx = function t(e, n, r) {
    var i = n - e;
    return St(e) ? Ug(e, t(0, e.length), n) : mi(r, function(l) {
        return (i + (l - e) % i) % i + e
    })
}, nx = function t(e, n, r) {
    var i = n - e
      , l = i * 2;
    return St(e) ? Ug(e, t(0, e.length - 1), n) : mi(r, function(o) {
        return o = (l + (o - e) % l) % l || 0,
        e + (o > i ? l - o : o)
    })
}, hs = function(e) {
    for (var n = 0, r = "", i, l, o, s; ~(i = e.indexOf("random(", n)); )
        o = e.indexOf(")", i),
        s = e.charAt(i + 7) === "[",
        l = e.substr(i + 7, o - i - 7).match(s ? kg : xf),
        r += e.substr(n, i - n) + Bg(s ? l : +l[0], s ? 0 : +l[1], +l[2] || 1e-5),
        n = o + 1;
    return r + e.substr(n, e.length - n)
}, $g = function(e, n, r, i, l) {
    var o = n - e
      , s = i - r;
    return mi(l, function(u) {
        return r + ((u - e) / o * s || 0)
    })
}, rx = function t(e, n, r, i) {
    var l = isNaN(e + n) ? 0 : function(d) {
        return (1 - d) * e + d * n
    }
    ;
    if (!l) {
        var o = rt(e), s = {}, u, a, c, p, f;
        if (r === !0 && (i = 1) && (r = null),
        o)
            e = {
                p: e
            },
            n = {
                p: n
            };
        else if (St(e) && !St(n)) {
            for (c = [],
            p = e.length,
            f = p - 2,
            a = 1; a < p; a++)
                c.push(t(e[a - 1], e[a]));
            p--,
            l = function(y) {
                y *= p;
                var m = Math.min(f, ~~y);
                return c[m](y - m)
            }
            ,
            r = n
        } else
            i || (e = Xi(St(e) ? [] : {}, e));
        if (!c) {
            for (u in n)
                Xd.call(s, e, u, "get", n[u]);
            l = function(y) {
                return Zd(y, s) || (o ? e.p : e)
            }
        }
    }
    return mi(r, l)
}, Th = function(e, n, r) {
    var i = e.labels, l = Sn, o, s, u;
    for (o in i)
        s = i[o] - n,
        s < 0 == !!r && s && l > (s = Math.abs(s)) && (u = o,
        l = s);
    return u
}, an = function(e, n, r) {
    var i = e.vars, l = i[n], o = xe, s = e._ctx, u, a, c;
    if (l)
        return u = i[n + "Params"],
        a = i.callbackScope || e,
        r && ri.length && la(),
        s && (xe = s),
        c = u ? l.apply(a, u) : l.call(a),
        xe = o,
        c
}, wo = function(e) {
    return ai(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!kt),
    e.progress() < 1 && an(e, "onInterrupt"),
    e
}, Tl, bg = [], Vg = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        $d() || e.headless) {
            var n = e.name
              , r = Oe(e)
              , i = n && !r && e.init ? function() {
                this._props = []
            }
            : e
              , l = {
                init: ps,
                render: Zd,
                add: Xd,
                kill: yx,
                modifier: vx,
                rawVars: 0
            }
              , o = {
                targetTest: 0,
                get: 0,
                getSetter: Kd,
                aliases: {},
                register: 0
            };
            if (Ql(),
            e !== i) {
                if (ln[n])
                    return;
                jn(i, jn(oa(e, l), o)),
                Xi(i.prototype, Xi(l, oa(e, o))),
                ln[i.prop = n] = i,
                e.targetTest && (Eu.push(i),
                Hd[n] = 1),
                n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
            }
            Cg(n, i),
            e.register && e.register(Zt, i, Gt)
        } else
            bg.push(e)
}, fe = 255, ko = {
    aqua: [0, fe, fe],
    lime: [0, fe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, fe],
    navy: [0, 0, 128],
    white: [fe, fe, fe],
    olive: [128, 128, 0],
    yellow: [fe, fe, 0],
    orange: [fe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [fe, 0, 0],
    pink: [fe, 192, 203],
    cyan: [0, fe, fe],
    transparent: [fe, fe, fe, 0]
}, fc = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * fe + .5 | 0
}, Hg = function(e, n, r) {
    var i = e ? Nr(e) ? [e >> 16, e >> 8 & fe, e & fe] : 0 : ko.black, l, o, s, u, a, c, p, f, d, y;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        ko[e])
            i = ko[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (l = e.charAt(1),
            o = e.charAt(2),
            s = e.charAt(3),
            e = "#" + l + l + o + o + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & fe, i & fe, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & fe, e & fe]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = y = e.match(xf),
            !n)
                u = +i[0] % 360 / 360,
                a = +i[1] / 100,
                c = +i[2] / 100,
                o = c <= .5 ? c * (a + 1) : c + a - c * a,
                l = c * 2 - o,
                i.length > 3 && (i[3] *= 1),
                i[0] = fc(u + 1 / 3, l, o),
                i[1] = fc(u, l, o),
                i[2] = fc(u - 1 / 3, l, o);
            else if (~e.indexOf("="))
                return i = e.match(xg),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match(xf) || ko.transparent;
        i = i.map(Number)
    }
    return n && !y && (l = i[0] / fe,
    o = i[1] / fe,
    s = i[2] / fe,
    p = Math.max(l, o, s),
    f = Math.min(l, o, s),
    c = (p + f) / 2,
    p === f ? u = a = 0 : (d = p - f,
    a = c > .5 ? d / (2 - p - f) : d / (p + f),
    u = p === l ? (o - s) / d + (o < s ? 6 : 0) : p === o ? (s - l) / d + 2 : (l - o) / d + 4,
    u *= 60),
    i[0] = ~~(u + .5),
    i[1] = ~~(a * 100 + .5),
    i[2] = ~~(c * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, Wg = function(e) {
    var n = []
      , r = []
      , i = -1;
    return e.split(ii).forEach(function(l) {
        var o = l.match(Sl) || [];
        n.push.apply(n, o),
        r.push(i += o.length + 1)
    }),
    n.c = r,
    n
}, Ch = function(e, n, r) {
    var i = "", l = (e + i).match(ii), o = n ? "hsla(" : "rgba(", s = 0, u, a, c, p;
    if (!l)
        return e;
    if (l = l.map(function(f) {
        return (f = Hg(f, n, 1)) && o + (n ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
    }),
    r && (c = Wg(e),
    u = r.c,
    u.join(i) !== c.c.join(i)))
        for (a = e.replace(ii, "1").split(Sl),
        p = a.length - 1; s < p; s++)
            i += a[s] + (~u.indexOf(s) ? l.shift() || o + "0,0,0,0)" : (c.length ? c : l.length ? l : r).shift());
    if (!a)
        for (a = e.split(ii),
        p = a.length - 1; s < p; s++)
            i += a[s] + l[s];
    return i + a[p]
}, ii = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in ko)
        t += "|" + e + "\\b";
    return new RegExp(t + ")","gi")
}(), ix = /hsl[a]?\(/, Yg = function(e) {
    var n = e.join(" "), r;
    if (ii.lastIndex = 0,
    ii.test(n))
        return r = ix.test(n),
        e[1] = Ch(e[1], r),
        e[0] = Ch(e[0], r, Wg(e[1])),
        !0
}, ms, on = function() {
    var t = Date.now, e = 500, n = 33, r = t(), i = r, l = 1e3 / 240, o = l, s = [], u, a, c, p, f, d, y = function m(k) {
        var g = t() - i, h = k === !0, _, x, T, C;
        if ((g > e || g < 0) && (r += g - n),
        i += g,
        T = i - r,
        _ = T - o,
        (_ > 0 || h) && (C = ++p.frame,
        f = T - p.time * 1e3,
        p.time = T = T / 1e3,
        o += _ + (_ >= l ? 4 : l - _),
        x = 1),
        h || (u = a(m)),
        x)
            for (d = 0; d < s.length; d++)
                s[d](T, f, C, k)
    };
    return p = {
        time: 0,
        frame: 0,
        tick: function() {
            y(!0)
        },
        deltaRatio: function(k) {
            return f / (1e3 / (k || 60))
        },
        wake: function() {
            Sg && (!wf && $d() && (Zn = wf = window,
            bd = Zn.document || {},
            pn.gsap = Zt,
            (Zn.gsapVersions || (Zn.gsapVersions = [])).push(Zt.version),
            Tg(ia || Zn.GreenSockGlobals || !Zn.gsap && Zn || {}),
            bg.forEach(Vg)),
            c = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            u && p.sleep(),
            a = c || function(k) {
                return setTimeout(k, o - p.time * 1e3 + 1 | 0)
            }
            ,
            ms = 1,
            y(2))
        },
        sleep: function() {
            (c ? cancelAnimationFrame : clearTimeout)(u),
            ms = 0,
            a = ps
        },
        lagSmoothing: function(k, g) {
            e = k || 1 / 0,
            n = Math.min(g || 33, e)
        },
        fps: function(k) {
            l = 1e3 / (k || 240),
            o = p.time * 1e3 + l
        },
        add: function(k, g, h) {
            var _ = g ? function(x, T, C, S) {
                k(x, T, C, S),
                p.remove(_)
            }
            : k;
            return p.remove(k),
            s[h ? "unshift" : "push"](_),
            Ql(),
            _
        },
        remove: function(k, g) {
            ~(g = s.indexOf(k)) && s.splice(g, 1) && d >= g && d--
        },
        _listeners: s
    },
    p
}(), Ql = function() {
    return !ms && on.wake()
}, re = {}, lx = /^[\d.\-M][\d.\-,\s]/, ox = /["']/g, sx = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], l = 1, o = r.length, s, u, a; l < o; l++)
        u = r[l],
        s = l !== o - 1 ? u.lastIndexOf(",") : u.length,
        a = u.substr(0, s),
        n[i] = isNaN(a) ? a.replace(ox, "").trim() : +a,
        i = u.substr(s + 1).trim();
    return n
}, ux = function(e) {
    var n = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, ax = function(e) {
    var n = (e + "").split("(")
      , r = re[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [sx(n[1])] : ux(e).split(",").map(jg)) : re._CE && lx.test(e) ? re._CE("", e) : r
}, Xg = function(e) {
    return function(n) {
        return 1 - e(1 - n)
    }
}, Qg = function t(e, n) {
    for (var r = e._first, i; r; )
        r instanceof zt ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = n)),
        r = r._next
}, Ii = function(e, n) {
    return e && (Oe(e) ? e : re[e] || ax(e)) || n
}, el = function(e, n, r, i) {
    r === void 0 && (r = function(u) {
        return 1 - n(1 - u)
    }
    ),
    i === void 0 && (i = function(u) {
        return u < .5 ? n(u * 2) / 2 : 1 - n((1 - u) * 2) / 2
    }
    );
    var l = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
    }, o;
    return Qt(e, function(s) {
        re[s] = pn[s] = l,
        re[o = s.toLowerCase()] = r;
        for (var u in l)
            re[o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = re[s + "." + u] = l[u]
    }),
    l
}, Gg = function(e) {
    return function(n) {
        return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
}, dc = function t(e, n, r) {
    var i = n >= 1 ? n : 1
      , l = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
      , o = l / yf * (Math.asin(1 / i) || 0)
      , s = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Iy((c - o) * l) + 1
    }
      , u = e === "out" ? s : e === "in" ? function(a) {
        return 1 - s(1 - a)
    }
    : Gg(s);
    return l = yf / l,
    u.config = function(a, c) {
        return t(e, a, c)
    }
    ,
    u
}, pc = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
    }
      , i = e === "out" ? r : e === "in" ? function(l) {
        return 1 - r(1 - l)
    }
    : Gg(r);
    return i.config = function(l) {
        return t(e, l)
    }
    ,
    i
};
Qt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    el(t + ",Power" + (n - 1), e ? function(r) {
        return Math.pow(r, n)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
re.Linear.easeNone = re.none = re.Linear.easeIn;
el("Elastic", dc("in"), dc("out"), dc());
(function(t, e) {
    var n = 1 / e
      , r = 2 * n
      , i = 2.5 * n
      , l = function(s) {
        return s < n ? t * s * s : s < r ? t * Math.pow(s - 1.5 / e, 2) + .75 : s < i ? t * (s -= 2.25 / e) * s + .9375 : t * Math.pow(s - 2.625 / e, 2) + .984375
    };
    el("Bounce", function(o) {
        return 1 - l(1 - o)
    }, l)
}
)(7.5625, 2.75);
el("Expo", function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
});
el("Circ", function(t) {
    return -(vg(1 - t * t) - 1)
});
el("Sine", function(t) {
    return t === 1 ? 1 : -Ay(t * Dy) + 1
});
el("Back", pc("in"), pc("out"), pc());
re.SteppedEase = re.steps = pn.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , i = e + (n ? 0 : 1)
          , l = n ? 1 : 0
          , o = 1 - de;
        return function(s) {
            return ((i * Ps(0, o, s) | 0) + l) * r
        }
    }
};
Wl.ease = re["quad.out"];
Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return Wd += t + "," + t + "Params,"
});
var Kg = function(e, n) {
    this.id = Ry++,
    e._gsap = this,
    this.target = e,
    this.harness = n,
    this.get = n ? n.get : Ng,
    this.set = n ? n.getSetter : Kd
}
  , gs = function() {
    function t(n) {
        this.vars = n,
        this._delay = +n.delay || 0,
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
        this._yoyo = !!n.yoyo || !!n.yoyoEase),
        this._ts = 1,
        Xl(this, +n.duration, 1, 1),
        this.data = n.data,
        xe && (this._ctx = xe,
        xe.data.push(this)),
        ms || on.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        Xl(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, i) {
        if (Ql(),
        !arguments.length)
            return this._tTime;
        var l = this._dp;
        if (l && l.smoothChildTiming && this._ts) {
            for (Da(this, r),
            !l._dp || l.parent || Lg(l, this); l && l.parent; )
                l.parent._time !== l._start + (l._ts >= 0 ? l._tTime / l._ts : (l.totalDuration() - l._tTime) / -l._ts) && l.totalTime(l._tTime, !0),
                l = l.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && er(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === de || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        Pg(this, r, i)),
        this
    }
    ,
    e.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + kh(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + kh(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(r, i) {
        var l = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * l, i) : this._repeat ? Yl(this._tTime, l) + 1 : 1
    }
    ,
    e.timeScale = function(r, i) {
        if (!arguments.length)
            return this._rts === -de ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var l = this.parent && this._ts ? sa(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -de ? 0 : this._rts,
        this.totalTime(Ps(-Math.abs(this._delay), this._tDur, l), i !== !1),
        za(this),
        Hy(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ql(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== de && (this._tTime -= de)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && er(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (Xt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? sa(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = Uy);
        var i = kt;
        return kt = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        kt = i,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var i = this, l = arguments.length ? r : i.rawTime(); i; )
            l = i._start + l / (Math.abs(i._ts) || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : l
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        Sh(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            Sh(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, i) {
        return this.totalTime(_n(this, r), Xt(i))
    }
    ,
    e.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Xt(i))
    }
    ,
    e.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -de : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -de,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, i = this._start, l;
        return !!(!r || this._ts && this._initted && r.isActive() && (l = r.rawTime(!0)) >= i && l < this.endTime(!0) - de)
    }
    ,
    e.eventCallback = function(r, i, l) {
        var o = this.vars;
        return arguments.length > 1 ? (i ? (o[r] = i,
        l && (o[r + "Params"] = l),
        r === "onUpdate" && (this._onUpdate = i)) : delete o[r],
        this) : o[r]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(l) {
            var o = Oe(r) ? r : Mg
              , s = function() {
                var a = i.then;
                i.then = null,
                Oe(o) && (o = o(i)) && (o.then || o === i) && (i.then = a),
                l(o),
                i.then = a
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s
        }
        )
    }
    ,
    e.kill = function() {
        wo(this)
    }
    ,
    t
}();
jn(gs.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -de,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var zt = function(t) {
    _g(e, t);
    function e(r, i) {
        var l;
        return r === void 0 && (r = {}),
        l = t.call(this, r) || this,
        l.labels = {},
        l.smoothChildTiming = !!r.smoothChildTiming,
        l.autoRemoveChildren = !!r.autoRemoveChildren,
        l._sort = Xt(r.sortChildren),
        Ce && er(r.parent || Ce, pr(l), i),
        r.reversed && l.reverse(),
        r.paused && l.paused(!0),
        r.scrollTrigger && zg(pr(l), r.scrollTrigger),
        l
    }
    var n = e.prototype;
    return n.to = function(i, l, o) {
        return Fo(0, arguments, this),
        this
    }
    ,
    n.from = function(i, l, o) {
        return Fo(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(i, l, o, s) {
        return Fo(2, arguments, this),
        this
    }
    ,
    n.set = function(i, l, o) {
        return l.duration = 0,
        l.parent = this,
        Io(l).repeatDelay || (l.repeat = 0),
        l.immediateRender = !!l.immediateRender,
        new be(i,l,_n(this, o),1),
        this
    }
    ,
    n.call = function(i, l, o) {
        return er(this, be.delayedCall(0, i, l), o)
    }
    ,
    n.staggerTo = function(i, l, o, s, u, a, c) {
        return o.duration = l,
        o.stagger = o.stagger || s,
        o.onComplete = a,
        o.onCompleteParams = c,
        o.parent = this,
        new be(i,o,_n(this, u)),
        this
    }
    ,
    n.staggerFrom = function(i, l, o, s, u, a, c) {
        return o.runBackwards = 1,
        Io(o).immediateRender = Xt(o.immediateRender),
        this.staggerTo(i, l, o, s, u, a, c)
    }
    ,
    n.staggerFromTo = function(i, l, o, s, u, a, c, p) {
        return s.startAt = o,
        Io(s).immediateRender = Xt(s.immediateRender),
        this.staggerTo(i, l, s, u, a, c, p)
    }
    ,
    n.render = function(i, l, o) {
        var s = this._time, u = this._dirty ? this.totalDuration() : this._tDur, a = this._dur, c = i <= 0 ? 0 : tt(i), p = this._zTime < 0 != i < 0 && (this._initted || !a), f, d, y, m, k, g, h, _, x, T, C, S;
        if (this !== Ce && c > u && i >= 0 && (c = u),
        c !== this._tTime || o || p) {
            if (s !== this._time && a && (c += this._time - s,
            i += this._time - s),
            f = c,
            x = this._start,
            _ = this._ts,
            g = !_,
            p && (a || (s = this._zTime),
            (i || !l) && (this._zTime = i)),
            this._repeat) {
                if (C = this._yoyo,
                k = a + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(k * 100 + i, l, o);
                if (f = tt(c % k),
                c === u ? (m = this._repeat,
                f = a) : (m = ~~(c / k),
                m && m === c / k && (f = a,
                m--),
                f > a && (f = a)),
                T = Yl(this._tTime, k),
                !s && this._tTime && T !== m && this._tTime - T * k - this._dur <= 0 && (T = m),
                C && m & 1 && (f = a - f,
                S = 1),
                m !== T && !this._lock) {
                    var E = C && T & 1
                      , j = E === (C && m & 1);
                    if (m < T && (E = !E),
                    s = E ? 0 : c % a ? a : c,
                    this._lock = 1,
                    this.render(s || (S ? 0 : tt(m * k)), l, !a)._lock = 0,
                    this._tTime = c,
                    !l && this.parent && an(this, "onRepeat"),
                    this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                    s && s !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (a = this._dur,
                    u = this._tDur,
                    j && (this._lock = 2,
                    s = E ? a : -1e-4,
                    this.render(s, !0),
                    this.vars.repeatRefresh && !S && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !g)
                        return this;
                    Qg(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (h = Qy(this, tt(s), tt(f)),
            h && (c -= f - (f = h._start))),
            this._tTime = c,
            this._time = f,
            this._act = !_,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            s = 0),
            !s && f && !l && !m && (an(this, "onStart"),
            this._tTime !== c))
                return this;
            if (f >= s && i >= 0)
                for (d = this._first; d; ) {
                    if (y = d._next,
                    (d._act || f >= d._start) && d._ts && h !== d) {
                        if (d.parent !== this)
                            return this.render(i, l, o);
                        if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, l, o),
                        f !== this._time || !this._ts && !g) {
                            h = 0,
                            y && (c += this._zTime = -de);
                            break
                        }
                    }
                    d = y
                }
            else {
                d = this._last;
                for (var P = i < 0 ? i : f; d; ) {
                    if (y = d._prev,
                    (d._act || P <= d._end) && d._ts && h !== d) {
                        if (d.parent !== this)
                            return this.render(i, l, o);
                        if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, l, o || kt && (d._initted || d._startAt)),
                        f !== this._time || !this._ts && !g) {
                            h = 0,
                            y && (c += this._zTime = P ? -de : de);
                            break
                        }
                    }
                    d = y
                }
            }
            if (h && !l && (this.pause(),
            h.render(f >= s ? 0 : -de)._zTime = f >= s ? 1 : -1,
            this._ts))
                return this._start = x,
                za(this),
                this.render(i, l, o);
            this._onUpdate && !l && an(this, "onUpdate", !0),
            (c === u && this._tTime >= this.totalDuration() || !c && s) && (x === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !a) && (c === u && this._ts > 0 || !c && this._ts < 0) && ai(this, 1),
            !l && !(i < 0 && !s) && (c || s || !u) && (an(this, c === u && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < u && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(i, l) {
        var o = this;
        if (Nr(l) || (l = _n(this, l, i)),
        !(i instanceof gs)) {
            if (St(i))
                return i.forEach(function(s) {
                    return o.add(s, l)
                }),
                this;
            if (rt(i))
                return this.addLabel(i, l);
            if (Oe(i))
                i = be.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? er(this, i, l) : this
    }
    ,
    n.getChildren = function(i, l, o, s) {
        i === void 0 && (i = !0),
        l === void 0 && (l = !0),
        o === void 0 && (o = !0),
        s === void 0 && (s = -Sn);
        for (var u = [], a = this._first; a; )
            a._start >= s && (a instanceof be ? l && u.push(a) : (o && u.push(a),
            i && u.push.apply(u, a.getChildren(!0, l, o)))),
            a = a._next;
        return u
    }
    ,
    n.getById = function(i) {
        for (var l = this.getChildren(1, 1, 1), o = l.length; o--; )
            if (l[o].vars.id === i)
                return l[o]
    }
    ,
    n.remove = function(i) {
        return rt(i) ? this.removeLabel(i) : Oe(i) ? this.killTweensOf(i) : (La(this, i),
        i === this._recent && (this._recent = this._last),
        Ai(this))
    }
    ,
    n.totalTime = function(i, l) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = tt(on.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        t.prototype.totalTime.call(this, i, l),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(i, l) {
        return this.labels[i] = _n(this, l),
        this
    }
    ,
    n.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    n.addPause = function(i, l, o) {
        var s = be.delayedCall(0, l || ps, o);
        return s.data = "isPause",
        this._hasPause = 1,
        er(this, s, _n(this, i))
    }
    ,
    n.removePause = function(i) {
        var l = this._first;
        for (i = _n(this, i); l; )
            l._start === i && l.data === "isPause" && ai(l),
            l = l._next
    }
    ,
    n.killTweensOf = function(i, l, o) {
        for (var s = this.getTweensOf(i, o), u = s.length; u--; )
            Hr !== s[u] && s[u].kill(i, l);
        return this
    }
    ,
    n.getTweensOf = function(i, l) {
        for (var o = [], s = Tn(i), u = this._first, a = Nr(l), c; u; )
            u instanceof be ? $y(u._targets, s) && (a ? (!Hr || u._initted && u._ts) && u.globalTime(0) <= l && u.globalTime(u.totalDuration()) > l : !l || u.isActive()) && o.push(u) : (c = u.getTweensOf(s, l)).length && o.push.apply(o, c),
            u = u._next;
        return o
    }
    ,
    n.tweenTo = function(i, l) {
        l = l || {};
        var o = this, s = _n(o, i), u = l, a = u.startAt, c = u.onStart, p = u.onStartParams, f = u.immediateRender, d, y = be.to(o, jn({
            ease: l.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: s,
            overwrite: "auto",
            duration: l.duration || Math.abs((s - (a && "time"in a ? a.time : o._time)) / o.timeScale()) || de,
            onStart: function() {
                if (o.pause(),
                !d) {
                    var k = l.duration || Math.abs((s - (a && "time"in a ? a.time : o._time)) / o.timeScale());
                    y._dur !== k && Xl(y, k, 0, 1).render(y._time, !0, !0),
                    d = 1
                }
                c && c.apply(y, p || [])
            }
        }, l));
        return f ? y.render(0) : y
    }
    ,
    n.tweenFromTo = function(i, l, o) {
        return this.tweenTo(l, jn({
            startAt: {
                time: _n(this, i)
            }
        }, o))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        Th(this, _n(this, i))
    }
    ,
    n.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        Th(this, _n(this, i), 1)
    }
    ,
    n.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + de)
    }
    ,
    n.shiftChildren = function(i, l, o) {
        o === void 0 && (o = 0);
        for (var s = this._first, u = this.labels, a; s; )
            s._start >= o && (s._start += i,
            s._end += i),
            s = s._next;
        if (l)
            for (a in u)
                u[a] >= o && (u[a] += i);
        return Ai(this)
    }
    ,
    n.invalidate = function(i) {
        var l = this._first;
        for (this._lock = 0; l; )
            l.invalidate(i),
            l = l._next;
        return t.prototype.invalidate.call(this, i)
    }
    ,
    n.clear = function(i) {
        i === void 0 && (i = !0);
        for (var l = this._first, o; l; )
            o = l._next,
            this.remove(l),
            l = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Ai(this)
    }
    ,
    n.totalDuration = function(i) {
        var l = 0, o = this, s = o._last, u = Sn, a, c, p;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
        if (o._dirty) {
            for (p = o.parent; s; )
                a = s._prev,
                s._dirty && s.totalDuration(),
                c = s._start,
                c > u && o._sort && s._ts && !o._lock ? (o._lock = 1,
                er(o, s, c - s._delay, 1)._lock = 0) : u = c,
                c < 0 && s._ts && (l -= c,
                (!p && !o._dp || p && p.smoothChildTiming) && (o._start += c / o._ts,
                o._time -= c,
                o._tTime -= c),
                o.shiftChildren(-c, !1, -1 / 0),
                u = 0),
                s._end > l && s._ts && (l = s._end),
                s = a;
            Xl(o, o === Ce && o._time > l ? o._time : l, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (Ce._ts && (Pg(Ce, sa(i, Ce)),
        Eg = on.frame),
        on.frame >= xh) {
            xh += fn.autoSleep || 120;
            var l = Ce._first;
            if ((!l || !l._ts) && fn.autoSleep && on._listeners.length < 2) {
                for (; l && !l._ts; )
                    l = l._next;
                l || on.sleep()
            }
        }
    }
    ,
    e
}(gs);
jn(zt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var cx = function(e, n, r, i, l, o, s) {
    var u = new Gt(this._pt,e,n,0,1,n1,null,l), a = 0, c = 0, p, f, d, y, m, k, g, h;
    for (u.b = r,
    u.e = i,
    r += "",
    i += "",
    (g = ~i.indexOf("random(")) && (i = hs(i)),
    o && (h = [r, i],
    o(h, e, n),
    r = h[0],
    i = h[1]),
    f = r.match(ac) || []; p = ac.exec(i); )
        y = p[0],
        m = i.substring(a, p.index),
        d ? d = (d + 1) % 5 : m.substr(-5) === "rgba(" && (d = 1),
        y !== f[c++] && (k = parseFloat(f[c - 1]) || 0,
        u._pt = {
            _next: u._pt,
            p: m || c === 1 ? m : ",",
            s: k,
            c: y.charAt(1) === "=" ? Ll(k, y) - k : parseFloat(y) - k,
            m: d && d < 4 ? Math.round : 0
        },
        a = ac.lastIndex);
    return u.c = a < i.length ? i.substring(a, i.length) : "",
    u.fp = s,
    (wg.test(i) || g) && (u.e = 0),
    this._pt = u,
    u
}, Xd = function(e, n, r, i, l, o, s, u, a, c) {
    Oe(i) && (i = i(l || 0, e, o));
    var p = e[n], f = r !== "get" ? r : Oe(p) ? a ? e[n.indexOf("set") || !Oe(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](a) : e[n]() : p, d = Oe(p) ? a ? mx : e1 : Gd, y;
    if (rt(i) && (~i.indexOf("random(") && (i = hs(i)),
    i.charAt(1) === "=" && (y = Ll(f, i) + (wt(f) || 0),
    (y || y === 0) && (i = y))),
    !c || f !== i || Pf)
        return !isNaN(f * i) && i !== "" ? (y = new Gt(this._pt,e,n,+f || 0,i - (f || 0),typeof p == "boolean" ? _x : t1,0,d),
        a && (y.fp = a),
        s && y.modifier(s, this, e),
        this._pt = y) : (!p && !(n in e) && Vd(n, i),
        cx.call(this, e, n, f, i, d, u || fn.stringFilter, a))
}, fx = function(e, n, r, i, l) {
    if (Oe(e) && (e = Bo(e, l, n, r, i)),
    !ur(e) || e.style && e.nodeType || St(e) || yg(e))
        return rt(e) ? Bo(e, l, n, r, i) : e;
    var o = {}, s;
    for (s in e)
        o[s] = Bo(e[s], l, n, r, i);
    return o
}, Zg = function(e, n, r, i, l, o) {
    var s, u, a, c;
    if (ln[e] && (s = new ln[e]).init(l, s.rawVars ? n[e] : fx(n[e], i, l, o, r), r, i, o) !== !1 && (r._pt = u = new Gt(r._pt,l,e,0,1,s.render,s,0,s.priority),
    r !== Tl))
        for (a = r._ptLookup[r._targets.indexOf(l)],
        c = s._props.length; c--; )
            a[s._props[c]] = u;
    return s
}, Hr, Pf, Qd = function t(e, n, r) {
    var i = e.vars, l = i.ease, o = i.startAt, s = i.immediateRender, u = i.lazy, a = i.onUpdate, c = i.runBackwards, p = i.yoyoEase, f = i.keyframes, d = i.autoRevert, y = e._dur, m = e._startAt, k = e._targets, g = e.parent, h = g && g.data === "nested" ? g.vars.targets : k, _ = e._overwrite === "auto" && !Bd, x = e.timeline, T, C, S, E, j, P, I, L, V, X, ee, Q, B;
    if (x && (!f || !l) && (l = "none"),
    e._ease = Ii(l, Wl.ease),
    e._yEase = p ? Xg(Ii(p === !0 ? l : p, Wl.ease)) : 0,
    p && e._yoyo && !e._repeat && (p = e._yEase,
    e._yEase = e._ease,
    e._ease = p),
    e._from = !x && !!i.runBackwards,
    !x || f && !i.stagger) {
        if (L = k[0] ? Ri(k[0]).harness : 0,
        Q = L && i[L.prop],
        T = oa(i, Hd),
        m && (m._zTime < 0 && m.progress(1),
        n < 0 && c && s && !d ? m.render(-1, !0) : m.revert(c && y ? Cu : By),
        m._lazy = 0),
        o) {
            if (ai(e._startAt = be.set(k, jn({
                data: "isStart",
                overwrite: !1,
                parent: g,
                immediateRender: !0,
                lazy: !m && Xt(u),
                startAt: null,
                delay: 0,
                onUpdate: a && function() {
                    return an(e, "onUpdate")
                }
                ,
                stagger: 0
            }, o))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (kt || !s && !d) && e._startAt.revert(Cu),
            s && y && n <= 0 && r <= 0) {
                n && (e._zTime = n);
                return
            }
        } else if (c && y && !m) {
            if (n && (s = !1),
            S = jn({
                overwrite: !1,
                data: "isFromStart",
                lazy: s && !m && Xt(u),
                immediateRender: s,
                stagger: 0,
                parent: g
            }, T),
            Q && (S[L.prop] = Q),
            ai(e._startAt = be.set(k, S)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (kt ? e._startAt.revert(Cu) : e._startAt.render(-1, !0)),
            e._zTime = n,
            !s)
                t(e._startAt, de, de);
            else if (!n)
                return
        }
        for (e._pt = e._ptCache = 0,
        u = y && Xt(u) || u && !y,
        C = 0; C < k.length; C++) {
            if (j = k[C],
            I = j._gsap || Yd(k)[C]._gsap,
            e._ptLookup[C] = X = {},
            kf[I.id] && ri.length && la(),
            ee = h === k ? C : h.indexOf(j),
            L && (V = new L).init(j, Q || T, e, ee, h) !== !1 && (e._pt = E = new Gt(e._pt,j,V.name,0,1,V.render,V,0,V.priority),
            V._props.forEach(function(M) {
                X[M] = E
            }),
            V.priority && (P = 1)),
            !L || Q)
                for (S in T)
                    ln[S] && (V = Zg(S, T, e, ee, j, h)) ? V.priority && (P = 1) : X[S] = E = Xd.call(e, j, S, "get", T[S], ee, h, 0, i.stringFilter);
            e._op && e._op[C] && e.kill(j, e._op[C]),
            _ && e._pt && (Hr = e,
            Ce.killTweensOf(j, X, e.globalTime(n)),
            B = !e.parent,
            Hr = 0),
            e._pt && u && (kf[I.id] = 1)
        }
        P && r1(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = a,
    e._initted = (!e._op || e._pt) && !B,
    f && n <= 0 && x.render(Sn, !0, !0)
}, dx = function(e, n, r, i, l, o, s, u) {
    var a = (e._pt && e._ptCache || (e._ptCache = {}))[n], c, p, f, d;
    if (!a)
        for (a = e._ptCache[n] = [],
        f = e._ptLookup,
        d = e._targets.length; d--; ) {
            if (c = f[d][n],
            c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== n && c.fp !== n; )
                    c = c._next;
            if (!c)
                return Pf = 1,
                e.vars[n] = "+=0",
                Qd(e, s),
                Pf = 0,
                u ? ds(n + " not eligible for reset") : 1;
            a.push(c)
        }
    for (d = a.length; d--; )
        p = a[d],
        c = p._pt || p,
        c.s = (i || i === 0) && !l ? i : c.s + (i || 0) + o * c.c,
        c.c = r - c.s,
        p.e && (p.e = Ae(r) + wt(p.e)),
        p.b && (p.b = c.s + wt(p.b))
}, px = function(e, n) {
    var r = e[0] ? Ri(e[0]).harness : 0, i = r && r.aliases, l, o, s, u;
    if (!i)
        return n;
    l = Xi({}, n);
    for (o in i)
        if (o in l)
            for (u = i[o].split(","),
            s = u.length; s--; )
                l[u[s]] = l[o];
    return l
}, hx = function(e, n, r, i) {
    var l = n.ease || i || "power1.inOut", o, s;
    if (St(n))
        s = r[e] || (r[e] = []),
        n.forEach(function(u, a) {
            return s.push({
                t: a / (n.length - 1) * 100,
                v: u,
                e: l
            })
        });
    else
        for (o in n)
            s = r[o] || (r[o] = []),
            o === "ease" || s.push({
                t: parseFloat(e),
                v: n[o],
                e: l
            })
}, Bo = function(e, n, r, i, l) {
    return Oe(e) ? e.call(n, r, i, l) : rt(e) && ~e.indexOf("random(") ? hs(e) : e
}, qg = Wd + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Jg = {};
Qt(qg + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return Jg[t] = 1
});
var be = function(t) {
    _g(e, t);
    function e(r, i, l, o) {
        var s;
        typeof i == "number" && (l.duration = i,
        i = l,
        l = null),
        s = t.call(this, o ? i : Io(i)) || this;
        var u = s.vars, a = u.duration, c = u.delay, p = u.immediateRender, f = u.stagger, d = u.overwrite, y = u.keyframes, m = u.defaults, k = u.scrollTrigger, g = u.yoyoEase, h = i.parent || Ce, _ = (St(r) || yg(r) ? Nr(r[0]) : "length"in i) ? [r] : Tn(r), x, T, C, S, E, j, P, I;
        if (s._targets = _.length ? Yd(_) : ds("GSAP target " + r + " not found. https://gsap.com", !fn.nullTargetWarn) || [],
        s._ptLookup = [],
        s._overwrite = d,
        y || f || Zs(a) || Zs(c)) {
            if (i = s.vars,
            x = s.timeline = new zt({
                data: "nested",
                defaults: m || {},
                targets: h && h.data === "nested" ? h.vars.targets : _
            }),
            x.kill(),
            x.parent = x._dp = pr(s),
            x._start = 0,
            f || Zs(a) || Zs(c)) {
                if (S = _.length,
                P = f && Ig(f),
                ur(f))
                    for (E in f)
                        ~qg.indexOf(E) && (I || (I = {}),
                        I[E] = f[E]);
                for (T = 0; T < S; T++)
                    C = oa(i, Jg),
                    C.stagger = 0,
                    g && (C.yoyoEase = g),
                    I && Xi(C, I),
                    j = _[T],
                    C.duration = +Bo(a, pr(s), T, j, _),
                    C.delay = (+Bo(c, pr(s), T, j, _) || 0) - s._delay,
                    !f && S === 1 && C.delay && (s._delay = c = C.delay,
                    s._start += c,
                    C.delay = 0),
                    x.to(j, C, P ? P(T, j, _) : 0),
                    x._ease = re.none;
                x.duration() ? a = c = 0 : s.timeline = 0
            } else if (y) {
                Io(jn(x.vars.defaults, {
                    ease: "none"
                })),
                x._ease = Ii(y.ease || i.ease || "none");
                var L = 0, V, X, ee;
                if (St(y))
                    y.forEach(function(Q) {
                        return x.to(_, Q, ">")
                    }),
                    x.duration();
                else {
                    C = {};
                    for (E in y)
                        E === "ease" || E === "easeEach" || hx(E, y[E], C, y.easeEach);
                    for (E in C)
                        for (V = C[E].sort(function(Q, B) {
                            return Q.t - B.t
                        }),
                        L = 0,
                        T = 0; T < V.length; T++)
                            X = V[T],
                            ee = {
                                ease: X.e,
                                duration: (X.t - (T ? V[T - 1].t : 0)) / 100 * a
                            },
                            ee[E] = X.v,
                            x.to(_, ee, L),
                            L += ee.duration;
                    x.duration() < a && x.to({}, {
                        duration: a - x.duration()
                    })
                }
            }
            a || s.duration(a = x.duration())
        } else
            s.timeline = 0;
        return d === !0 && !Bd && (Hr = pr(s),
        Ce.killTweensOf(_),
        Hr = 0),
        er(h, pr(s), l),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        (p || !a && !y && s._start === tt(h._time) && Xt(p) && Wy(pr(s)) && h.data !== "nested") && (s._tTime = -de,
        s.render(Math.max(0, -c) || 0)),
        k && zg(pr(s), k),
        s
    }
    var n = e.prototype;
    return n.render = function(i, l, o) {
        var s = this._time, u = this._tDur, a = this._dur, c = i < 0, p = i > u - de && !c ? u : i < de ? 0 : i, f, d, y, m, k, g, h, _, x;
        if (!a)
            Xy(this, i, l, o);
        else if (p !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (f = p,
            _ = this.timeline,
            this._repeat) {
                if (m = a + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(m * 100 + i, l, o);
                if (f = tt(p % m),
                p === u ? (y = this._repeat,
                f = a) : (y = ~~(p / m),
                y && y === tt(p / m) && (f = a,
                y--),
                f > a && (f = a)),
                g = this._yoyo && y & 1,
                g && (x = this._yEase,
                f = a - f),
                k = Yl(this._tTime, m),
                f === s && !o && this._initted && y === k)
                    return this._tTime = p,
                    this;
                y !== k && (_ && this._yEase && Qg(_, g),
                this.vars.repeatRefresh && !g && !this._lock && this._time !== m && this._initted && (this._lock = o = 1,
                this.render(tt(m * y), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Dg(this, c ? i : f, o, l, p))
                    return this._tTime = 0,
                    this;
                if (s !== this._time && !(o && this.vars.repeatRefresh && y !== k))
                    return this;
                if (a !== this._dur)
                    return this.render(i, l, o)
            }
            if (this._tTime = p,
            this._time = f,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = h = (x || this._ease)(f / a),
            this._from && (this.ratio = h = 1 - h),
            f && !s && !l && !y && (an(this, "onStart"),
            this._tTime !== p))
                return this;
            for (d = this._pt; d; )
                d.r(h, d.d),
                d = d._next;
            _ && _.render(i < 0 ? i : _._dur * _._ease(f / this._dur), l, o) || this._startAt && (this._zTime = i),
            this._onUpdate && !l && (c && Sf(this, i, l, o),
            an(this, "onUpdate")),
            this._repeat && y !== k && this.vars.onRepeat && !l && this.parent && an(this, "onRepeat"),
            (p === this._tDur || !p) && this._tTime === p && (c && !this._onUpdate && Sf(this, i, !0, !0),
            (i || !a) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && ai(this, 1),
            !l && !(c && !s) && (p || s || g) && (an(this, p === u ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(p < u && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
    }
    ,
    n.resetTo = function(i, l, o, s, u) {
        ms || on.wake(),
        this._ts || this.play();
        var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || Qd(this, a),
        c = this._ease(a / this._dur),
        dx(this, i, l, o, s, c, a, u) ? this.resetTo(i, l, o, s, 1) : (Da(this, 0),
        this.parent || Og(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(i, l) {
        if (l === void 0 && (l = "all"),
        !i && (!l || l === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? wo(this) : this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, l, Hr && Hr.vars.overwrite !== !0)._first || wo(this),
            this.parent && o !== this.timeline.totalDuration() && Xl(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var s = this._targets, u = i ? Tn(i) : s, a = this._ptLookup, c = this._pt, p, f, d, y, m, k, g;
        if ((!l || l === "all") && Vy(s, u))
            return l === "all" && (this._pt = 0),
            wo(this);
        for (p = this._op = this._op || [],
        l !== "all" && (rt(l) && (m = {},
        Qt(l, function(h) {
            return m[h] = 1
        }),
        l = m),
        l = px(s, l)),
        g = s.length; g--; )
            if (~u.indexOf(s[g])) {
                f = a[g],
                l === "all" ? (p[g] = l,
                y = f,
                d = {}) : (d = p[g] = p[g] || {},
                y = l);
                for (m in y)
                    k = f && f[m],
                    k && ((!("kill"in k.d) || k.d.kill(m) === !0) && La(this, k, "_pt"),
                    delete f[m]),
                    d !== "all" && (d[m] = 1)
            }
        return this._initted && !this._pt && c && wo(this),
        this
    }
    ,
    e.to = function(i, l) {
        return new e(i,l,arguments[2])
    }
    ,
    e.from = function(i, l) {
        return Fo(1, arguments)
    }
    ,
    e.delayedCall = function(i, l, o, s) {
        return new e(l,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: l,
            onReverseComplete: l,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: s
        })
    }
    ,
    e.fromTo = function(i, l, o) {
        return Fo(2, arguments)
    }
    ,
    e.set = function(i, l) {
        return l.duration = 0,
        l.repeatDelay || (l.repeat = 0),
        new e(i,l)
    }
    ,
    e.killTweensOf = function(i, l, o) {
        return Ce.killTweensOf(i, l, o)
    }
    ,
    e
}(gs);
jn(be.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Qt("staggerTo,staggerFrom,staggerFromTo", function(t) {
    be[t] = function() {
        var e = new zt
          , n = Cf.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
        e[t].apply(e, n)
    }
});
var Gd = function(e, n, r) {
    return e[n] = r
}
  , e1 = function(e, n, r) {
    return e[n](r)
}
  , mx = function(e, n, r, i) {
    return e[n](i.fp, r)
}
  , gx = function(e, n, r) {
    return e.setAttribute(n, r)
}
  , Kd = function(e, n) {
    return Oe(e[n]) ? e1 : Ud(e[n]) && e.setAttribute ? gx : Gd
}
  , t1 = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
  , _x = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
  , n1 = function(e, n) {
    var r = n._pt
      , i = "";
    if (!e && n.b)
        i = n.b;
    else if (e === 1 && n.e)
        i = n.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
            r = r._next;
        i += n.c
    }
    n.set(n.t, n.p, i, n)
}
  , Zd = function(e, n) {
    for (var r = n._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , vx = function(e, n, r, i) {
    for (var l = this._pt, o; l; )
        o = l._next,
        l.p === i && l.modifier(e, n, r),
        l = o
}
  , yx = function(e) {
    for (var n = this._pt, r, i; n; )
        i = n._next,
        n.p === e && !n.op || n.op === e ? La(this, n, "_pt") : n.dep || (r = 1),
        n = i;
    return !r
}
  , xx = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
}
  , r1 = function(e) {
    for (var n = e._pt, r, i, l, o; n; ) {
        for (r = n._next,
        i = l; i && i.pr > n.pr; )
            i = i._next;
        (n._prev = i ? i._prev : o) ? n._prev._next = n : l = n,
        (n._next = i) ? i._prev = n : o = n,
        n = r
    }
    e._pt = l
}
  , Gt = function() {
    function t(n, r, i, l, o, s, u, a, c) {
        this.t = r,
        this.s = l,
        this.c = o,
        this.p = i,
        this.r = s || t1,
        this.d = u || this,
        this.set = a || Gd,
        this.pr = c || 0,
        this._next = n,
        n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, l) {
        this.mSet = this.mSet || this.set,
        this.set = xx,
        this.m = r,
        this.mt = l,
        this.tween = i
    }
    ,
    t
}();
Qt(Wd + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return Hd[t] = 1
});
pn.TweenMax = pn.TweenLite = be;
pn.TimelineLite = pn.TimelineMax = zt;
Ce = new zt({
    sortChildren: !1,
    defaults: Wl,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
fn.stringFilter = Yg;
var Fi = []
  , Nu = {}
  , wx = []
  , Eh = 0
  , kx = 0
  , hc = function(e) {
    return (Nu[e] || wx).map(function(n) {
        return n()
    })
}
  , jf = function() {
    var e = Date.now()
      , n = [];
    e - Eh > 2 && (hc("matchMediaInit"),
    Fi.forEach(function(r) {
        var i = r.queries, l = r.conditions, o, s, u, a;
        for (s in i)
            o = Zn.matchMedia(i[s]).matches,
            o && (u = 1),
            o !== l[s] && (l[s] = o,
            a = 1);
        a && (r.revert(),
        u && n.push(r))
    }),
    hc("matchMediaRevert"),
    n.forEach(function(r) {
        return r.onMatch(r, function(i) {
            return r.add(null, i)
        })
    }),
    Eh = e,
    hc("matchMedia"))
}
  , i1 = function() {
    function t(n, r) {
        this.selector = r && Ef(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = kx++,
        n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, l) {
        Oe(r) && (l = i,
        i = r,
        r = Oe);
        var o = this
          , s = function() {
            var a = xe, c = o.selector, p;
            return a && a !== o && a.data.push(o),
            l && (o.selector = Ef(l)),
            xe = o,
            p = i.apply(o, arguments),
            Oe(p) && o._r.push(p),
            xe = a,
            o.selector = c,
            o.isReverted = !1,
            p
        };
        return o.last = s,
        r === Oe ? s(o, function(u) {
            return o.add(null, u)
        }) : r ? o[r] = s : s
    }
    ,
    e.ignore = function(r) {
        var i = xe;
        xe = null,
        r(this),
        xe = i
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof be && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, i) {
        var l = this;
        if (r ? function() {
            for (var s = l.getTweens(), u = l.data.length, a; u--; )
                a = l.data[u],
                a.data === "isFlip" && (a.revert(),
                a.getChildren(!0, !0, !1).forEach(function(c) {
                    return s.splice(s.indexOf(c), 1)
                }));
            for (s.map(function(c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function(c, p) {
                return p.g - c.g || -1 / 0
            }).forEach(function(c) {
                return c.t.revert(r)
            }),
            u = l.data.length; u--; )
                a = l.data[u],
                a instanceof zt ? a.data !== "nested" && (a.scrollTrigger && a.scrollTrigger.revert(),
                a.kill()) : !(a instanceof be) && a.revert && a.revert(r);
            l._r.forEach(function(c) {
                return c(r, l)
            }),
            l.isReverted = !0
        }() : this.data.forEach(function(s) {
            return s.kill && s.kill()
        }),
        this.clear(),
        i)
            for (var o = Fi.length; o--; )
                Fi[o].id === this.id && Fi.splice(o, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t
}()
  , Sx = function() {
    function t(n) {
        this.contexts = [],
        this.scope = n,
        xe && xe.data.push(this)
    }
    var e = t.prototype;
    return e.add = function(r, i, l) {
        ur(r) || (r = {
            matches: r
        });
        var o = new i1(0,l || this.scope), s = o.conditions = {}, u, a, c;
        xe && !o.selector && (o.selector = xe.selector),
        this.contexts.push(o),
        i = o.add("onMatch", i),
        o.queries = r;
        for (a in r)
            a === "all" ? c = 1 : (u = Zn.matchMedia(r[a]),
            u && (Fi.indexOf(o) < 0 && Fi.push(o),
            (s[a] = u.matches) && (c = 1),
            u.addListener ? u.addListener(jf) : u.addEventListener("change", jf)));
        return c && i(o, function(p) {
            return o.add(null, p)
        }),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    t
}()
  , ua = {
    registerPlugin: function() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
        n.forEach(function(i) {
            return Vg(i)
        })
    },
    timeline: function(e) {
        return new zt(e)
    },
    getTweensOf: function(e, n) {
        return Ce.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
        rt(e) && (e = Tn(e)[0]);
        var l = Ri(e || {}).get
          , o = r ? Mg : jg;
        return r === "native" && (r = ""),
        e && (n ? o((ln[n] && ln[n].get || l)(e, n, r, i)) : function(s, u, a) {
            return o((ln[s] && ln[s].get || l)(e, s, u, a))
        }
        )
    },
    quickSetter: function(e, n, r) {
        if (e = Tn(e),
        e.length > 1) {
            var i = e.map(function(c) {
                return Zt.quickSetter(c, n, r)
            })
              , l = i.length;
            return function(c) {
                for (var p = l; p--; )
                    i[p](c)
            }
        }
        e = e[0] || {};
        var o = ln[n]
          , s = Ri(e)
          , u = s.harness && (s.harness.aliases || {})[n] || n
          , a = o ? function(c) {
            var p = new o;
            Tl._pt = 0,
            p.init(e, r ? c + r : c, Tl, 0, [e]),
            p.render(1, p),
            Tl._pt && Zd(1, Tl)
        }
        : s.set(e, u);
        return o ? a : function(c) {
            return a(e, u, r ? c + r : c, s, 1)
        }
    },
    quickTo: function(e, n, r) {
        var i, l = Zt.to(e, Xi((i = {},
        i[n] = "+=0.1",
        i.paused = !0,
        i), r || {})), o = function(u, a, c) {
            return l.resetTo(n, u, a, c)
        };
        return o.tween = l,
        o
    },
    isTweening: function(e) {
        return Ce.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = Ii(e.ease, Wl.ease)),
        wh(Wl, e || {})
    },
    config: function(e) {
        return wh(fn, e || {})
    },
    registerEffect: function(e) {
        var n = e.name
          , r = e.effect
          , i = e.plugins
          , l = e.defaults
          , o = e.extendTimeline;
        (i || "").split(",").forEach(function(s) {
            return s && !ln[s] && !pn[s] && ds(n + " effect requires " + s + " plugin.")
        }),
        cc[n] = function(s, u, a) {
            return r(Tn(s), jn(u || {}, l), a)
        }
        ,
        o && (zt.prototype[n] = function(s, u, a) {
            return this.add(cc[n](s, ur(u) ? u : (a = u) && {}, this), a)
        }
        )
    },
    registerEase: function(e, n) {
        re[e] = Ii(n)
    },
    parseEase: function(e, n) {
        return arguments.length ? Ii(e, n) : re
    },
    getById: function(e) {
        return Ce.getById(e)
    },
    exportRoot: function(e, n) {
        e === void 0 && (e = {});
        var r = new zt(e), i, l;
        for (r.smoothChildTiming = Xt(e.smoothChildTiming),
        Ce.remove(r),
        r._dp = 0,
        r._time = r._tTime = Ce._time,
        i = Ce._first; i; )
            l = i._next,
            (n || !(!i._dur && i instanceof be && i.vars.onComplete === i._targets[0])) && er(r, i, i._start - i._delay),
            i = l;
        return er(Ce, r, 0),
        r
    },
    context: function(e, n) {
        return e ? new i1(e,n) : xe
    },
    matchMedia: function(e) {
        return new Sx(e)
    },
    matchMediaRefresh: function() {
        return Fi.forEach(function(e) {
            var n = e.conditions, r, i;
            for (i in n)
                n[i] && (n[i] = !1,
                r = 1);
            r && e.revert()
        }) || jf()
    },
    addEventListener: function(e, n) {
        var r = Nu[e] || (Nu[e] = []);
        ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
        var r = Nu[e]
          , i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: tx,
        wrapYoyo: nx,
        distribute: Ig,
        random: Bg,
        snap: Fg,
        normalize: ex,
        getUnit: wt,
        clamp: Ky,
        splitColor: Hg,
        toArray: Tn,
        selector: Ef,
        mapRange: $g,
        pipe: qy,
        unitize: Jy,
        interpolate: rx,
        shuffle: Ag
    },
    install: Tg,
    effects: cc,
    ticker: on,
    updateRoot: zt.updateRoot,
    plugins: ln,
    globalTimeline: Ce,
    core: {
        PropTween: Gt,
        globals: Cg,
        Tween: be,
        Timeline: zt,
        Animation: gs,
        getCache: Ri,
        _removeLinkedListItem: La,
        reverting: function() {
            return kt
        },
        context: function(e) {
            return e && xe && (xe.data.push(e),
            e._ctx = xe),
            xe
        },
        suppressOverwrites: function(e) {
            return Bd = e
        }
    }
};
Qt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return ua[t] = be[t]
});
on.add(zt.updateRoot);
Tl = ua.to({}, {
    duration: 0
});
var Tx = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
    return r
}
  , Cx = function(e, n) {
    var r = e._targets, i, l, o;
    for (i in n)
        for (l = r.length; l--; )
            o = e._ptLookup[l][i],
            o && (o = o.d) && (o._pt && (o = Tx(o, i)),
            o && o.modifier && o.modifier(n[i], e, r[l], i))
}
  , mc = function(e, n) {
    return {
        name: e,
        rawVars: 1,
        init: function(i, l, o) {
            o._onInit = function(s) {
                var u, a;
                if (rt(l) && (u = {},
                Qt(l, function(c) {
                    return u[c] = 1
                }),
                l = u),
                n) {
                    u = {};
                    for (a in l)
                        u[a] = n(l[a]);
                    l = u
                }
                Cx(s, l)
            }
        }
    }
}
  , Zt = ua.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, l) {
        var o, s, u;
        this.tween = r;
        for (o in n)
            u = e.getAttribute(o) || "",
            s = this.add(e, "setAttribute", (u || 0) + "", n[o], i, l, 0, 0, o),
            s.op = o,
            s.b = u,
            this._props.push(o)
    },
    render: function(e, n) {
        for (var r = n._pt; r; )
            kt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, n) {
        for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
}, mc("roundProps", Nf), mc("modifiers"), mc("snap", Fg)) || ua;
be.version = zt.version = Zt.version = "3.12.5";
Sg = 1;
$d() && Ql();
re.Power0;
re.Power1;
re.Power2;
re.Power3;
re.Power4;
re.Linear;
re.Quad;
re.Cubic;
re.Quart;
re.Quint;
re.Strong;
re.Elastic;
re.Back;
re.SteppedEase;
re.Bounce;
re.Sine;
re.Expo;
re.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Nh, Wr, zl, qd, Oi, Ph, Jd, Ex = function() {
    return typeof window < "u"
}, Pr = {}, Ci = 180 / Math.PI, Dl = Math.PI / 180, ol = Math.atan2, jh = 1e8, ep = /([A-Z])/g, Nx = /(left|right|width|margin|padding|x)/i, Px = /[\s,\(]\S/, tr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Mf = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, jx = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, Mx = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, Ox = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, l1 = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
}, o1 = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, Lx = function(e, n, r) {
    return e.style[n] = r
}, zx = function(e, n, r) {
    return e.style.setProperty(n, r)
}, Dx = function(e, n, r) {
    return e._gsap[n] = r
}, Rx = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, Ax = function(e, n, r, i, l) {
    var o = e._gsap;
    o.scaleX = o.scaleY = r,
    o.renderTransform(l, o)
}, Ix = function(e, n, r, i, l) {
    var o = e._gsap;
    o[n] = r,
    o.renderTransform(l, o)
}, Ee = "transform", Kt = Ee + "Origin", Fx = function t(e, n) {
    var r = this
      , i = this.target
      , l = i.style
      , o = i._gsap;
    if (e in Pr && l) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = tr[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                return r.tfm[s] = mr(i, s)
            }) : this.tfm[e] = o.x ? o[e] : mr(i, e),
            e === Kt && (this.tfm.zOrigin = o.zOrigin);
        else
            return tr.transform.split(",").forEach(function(s) {
                return t.call(r, s, n)
            });
        if (this.props.indexOf(Ee) >= 0)
            return;
        o.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(Kt, n, "")),
        e = Ee
    }
    (l || n) && this.props.push(e, n, l[e])
}, s1 = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, Bx = function() {
    var e = this.props, n = this.target, r = n.style, i = n._gsap, l, o;
    for (l = 0; l < e.length; l += 3)
        e[l + 1] ? n[e[l]] = e[l + 2] : e[l + 2] ? r[e[l]] = e[l + 2] : r.removeProperty(e[l].substr(0, 2) === "--" ? e[l] : e[l].replace(ep, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            i[o] = this.tfm[o];
        i.svg && (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        l = Jd(),
        (!l || !l.isStart) && !r[Ee] && (s1(r),
        i.zOrigin && r[Kt] && (r[Kt] += " " + i.zOrigin + "px",
        i.zOrigin = 0,
        i.renderTransform()),
        i.uncache = 1)
    }
}, u1 = function(e, n) {
    var r = {
        target: e,
        props: [],
        revert: Bx,
        save: Fx
    };
    return e._gsap || Zt.core.getCache(e),
    n && n.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, a1, Of = function(e, n) {
    var r = Wr.createElementNS ? Wr.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Wr.createElement(e);
    return r && r.style ? r : Wr.createElement(e)
}, or = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(ep, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Gl(n) || n, 1) || ""
}, Mh = "O,Moz,ms,Ms,Webkit".split(","), Gl = function(e, n, r) {
    var i = n || Oi
      , l = i.style
      , o = 5;
    if (e in l && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Mh[o] + e in l); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Mh[o] : "") + e
}, Lf = function() {
    Ex() && window.document && (Nh = window,
    Wr = Nh.document,
    zl = Wr.documentElement,
    Oi = Of("div") || {
        style: {}
    },
    Of("div"),
    Ee = Gl(Ee),
    Kt = Ee + "Origin",
    Oi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    a1 = !!Gl("perspective"),
    Jd = Zt.core.reverting,
    qd = 1)
}, gc = function t(e) {
    var n = Of("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, l = this.style.cssText, o;
    if (zl.appendChild(n),
    n.appendChild(this),
    this.style.display = "block",
    e)
        try {
            o = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = t
        } catch {}
    else
        this._gsapBBox && (o = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    zl.removeChild(n),
    this.style.cssText = l,
    o
}, Oh = function(e, n) {
    for (var r = n.length; r--; )
        if (e.hasAttribute(n[r]))
            return e.getAttribute(n[r])
}, c1 = function(e) {
    var n;
    try {
        n = e.getBBox()
    } catch {
        n = gc.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === gc || (n = gc.call(e, !0)),
    n && !n.width && !n.x && !n.y ? {
        x: +Oh(e, ["x", "cx", "x1"]) || 0,
        y: +Oh(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : n
}, f1 = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && c1(e))
}, Qi = function(e, n) {
    if (n) {
        var r = e.style, i;
        n in Pr && n !== Kt && (n = Ee),
        r.removeProperty ? (i = n.substr(0, 2),
        (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
        r.removeProperty(i === "--" ? n : n.replace(ep, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
}, Yr = function(e, n, r, i, l, o) {
    var s = new Gt(e._pt,n,r,0,1,o ? o1 : l1);
    return e._pt = s,
    s.b = i,
    s.e = l,
    e._props.push(r),
    s
}, Lh = {
    deg: 1,
    rad: 1,
    turn: 1
}, Ux = {
    grid: 1,
    flex: 1
}, ci = function t(e, n, r, i) {
    var l = parseFloat(r) || 0, o = (r + "").trim().substr((l + "").length) || "px", s = Oi.style, u = Nx.test(n), a = e.tagName.toLowerCase() === "svg", c = (a ? "client" : "offset") + (u ? "Width" : "Height"), p = 100, f = i === "px", d = i === "%", y, m, k, g;
    if (i === o || !l || Lh[i] || Lh[o])
        return l;
    if (o !== "px" && !f && (l = t(e, n, r, "px")),
    g = e.getCTM && f1(e),
    (d || o === "%") && (Pr[n] || ~n.indexOf("adius")))
        return y = g ? e.getBBox()[u ? "width" : "height"] : e[c],
        Ae(d ? l / y * p : l / 100 * y);
    if (s[u ? "width" : "height"] = p + (f ? o : i),
    m = ~n.indexOf("adius") || i === "em" && e.appendChild && !a ? e : e.parentNode,
    g && (m = (e.ownerSVGElement || {}).parentNode),
    (!m || m === Wr || !m.appendChild) && (m = Wr.body),
    k = m._gsap,
    k && d && k.width && u && k.time === on.time && !k.uncache)
        return Ae(l / k.width * p);
    if (d && (n === "height" || n === "width")) {
        var h = e.style[n];
        e.style[n] = p + i,
        y = e[c],
        h ? e.style[n] = h : Qi(e, n)
    } else
        (d || o === "%") && !Ux[or(m, "display")] && (s.position = or(e, "position")),
        m === e && (s.position = "static"),
        m.appendChild(Oi),
        y = Oi[c],
        m.removeChild(Oi),
        s.position = "absolute";
    return u && d && (k = Ri(m),
    k.time = on.time,
    k.width = m[c]),
    Ae(f ? y * l / p : y && l ? p / y * l : 0)
}, mr = function(e, n, r, i) {
    var l;
    return qd || Lf(),
    n in tr && n !== "transform" && (n = tr[n],
    ~n.indexOf(",") && (n = n.split(",")[0])),
    Pr[n] && n !== "transform" ? (l = vs(e, i),
    l = n !== "transformOrigin" ? l[n] : l.svg ? l.origin : ca(or(e, Kt)) + " " + l.zOrigin + "px") : (l = e.style[n],
    (!l || l === "auto" || i || ~(l + "").indexOf("calc(")) && (l = aa[n] && aa[n](e, n, r) || or(e, n) || Ng(e, n) || (n === "opacity" ? 1 : 0))),
    r && !~(l + "").trim().indexOf(" ") ? ci(e, n, l, r) + r : l
}, $x = function(e, n, r, i) {
    if (!r || r === "none") {
        var l = Gl(n, e, 1)
          , o = l && or(e, l, 1);
        o && o !== r ? (n = l,
        r = o) : n === "borderColor" && (r = or(e, "borderTopColor"))
    }
    var s = new Gt(this._pt,e.style,n,0,1,n1), u = 0, a = 0, c, p, f, d, y, m, k, g, h, _, x, T;
    if (s.b = r,
    s.e = i,
    r += "",
    i += "",
    i === "auto" && (m = e.style[n],
    e.style[n] = i,
    i = or(e, n) || i,
    m ? e.style[n] = m : Qi(e, n)),
    c = [r, i],
    Yg(c),
    r = c[0],
    i = c[1],
    f = r.match(Sl) || [],
    T = i.match(Sl) || [],
    T.length) {
        for (; p = Sl.exec(i); )
            k = p[0],
            h = i.substring(u, p.index),
            y ? y = (y + 1) % 5 : (h.substr(-5) === "rgba(" || h.substr(-5) === "hsla(") && (y = 1),
            k !== (m = f[a++] || "") && (d = parseFloat(m) || 0,
            x = m.substr((d + "").length),
            k.charAt(1) === "=" && (k = Ll(d, k) + x),
            g = parseFloat(k),
            _ = k.substr((g + "").length),
            u = Sl.lastIndex - _.length,
            _ || (_ = _ || fn.units[n] || x,
            u === i.length && (i += _,
            s.e += _)),
            x !== _ && (d = ci(e, n, m, _) || 0),
            s._pt = {
                _next: s._pt,
                p: h || a === 1 ? h : ",",
                s: d,
                c: g - d,
                m: y && y < 4 || n === "zIndex" ? Math.round : 0
            });
        s.c = u < i.length ? i.substring(u, i.length) : ""
    } else
        s.r = n === "display" && i === "none" ? o1 : l1;
    return wg.test(i) && (s.e = 0),
    this._pt = s,
    s
}, zh = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, bx = function(e) {
    var n = e.split(" ")
      , r = n[0]
      , i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
    r = i,
    i = e),
    n[0] = zh[r] || r,
    n[1] = zh[i] || i,
    n.join(" ")
}, Vx = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t, i = r.style, l = n.u, o = r._gsap, s, u, a;
        if (l === "all" || l === !0)
            i.cssText = "",
            u = 1;
        else
            for (l = l.split(","),
            a = l.length; --a > -1; )
                s = l[a],
                Pr[s] && (u = 1,
                s = s === "transformOrigin" ? Kt : Ee),
                Qi(r, s);
        u && (Qi(r, Ee),
        o && (o.svg && r.removeAttribute("transform"),
        vs(r, 1),
        o.uncache = 1,
        s1(i)))
    }
}, aa = {
    clearProps: function(e, n, r, i, l) {
        if (l.data !== "isFromStart") {
            var o = e._pt = new Gt(e._pt,n,r,0,0,Vx);
            return o.u = i,
            o.pr = -10,
            o.tween = l,
            e._props.push(r),
            1
        }
    }
}, _s = [1, 0, 0, 1, 0, 0], d1 = {}, p1 = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Dh = function(e) {
    var n = or(e, Ee);
    return p1(n) ? _s : n.substr(7).match(xg).map(Ae)
}, tp = function(e, n) {
    var r = e._gsap || Ri(e), i = e.style, l = Dh(e), o, s, u, a;
    return r.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix,
    l = [u.a, u.b, u.c, u.d, u.e, u.f],
    l.join(",") === "1,0,0,1,0,0" ? _s : l) : (l === _s && !e.offsetParent && e !== zl && !r.svg && (u = i.display,
    i.display = "block",
    o = e.parentNode,
    (!o || !e.offsetParent) && (a = 1,
    s = e.nextElementSibling,
    zl.appendChild(e)),
    l = Dh(e),
    u ? i.display = u : Qi(e, "display"),
    a && (s ? o.insertBefore(e, s) : o ? o.appendChild(e) : zl.removeChild(e))),
    n && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
}, zf = function(e, n, r, i, l, o) {
    var s = e._gsap, u = l || tp(e, !0), a = s.xOrigin || 0, c = s.yOrigin || 0, p = s.xOffset || 0, f = s.yOffset || 0, d = u[0], y = u[1], m = u[2], k = u[3], g = u[4], h = u[5], _ = n.split(" "), x = parseFloat(_[0]) || 0, T = parseFloat(_[1]) || 0, C, S, E, j;
    r ? u !== _s && (S = d * k - y * m) && (E = x * (k / S) + T * (-m / S) + (m * h - k * g) / S,
    j = x * (-y / S) + T * (d / S) - (d * h - y * g) / S,
    x = E,
    T = j) : (C = c1(e),
    x = C.x + (~_[0].indexOf("%") ? x / 100 * C.width : x),
    T = C.y + (~(_[1] || _[0]).indexOf("%") ? T / 100 * C.height : T)),
    i || i !== !1 && s.smooth ? (g = x - a,
    h = T - c,
    s.xOffset = p + (g * d + h * m) - g,
    s.yOffset = f + (g * y + h * k) - h) : s.xOffset = s.yOffset = 0,
    s.xOrigin = x,
    s.yOrigin = T,
    s.smooth = !!i,
    s.origin = n,
    s.originIsAbsolute = !!r,
    e.style[Kt] = "0px 0px",
    o && (Yr(o, s, "xOrigin", a, x),
    Yr(o, s, "yOrigin", c, T),
    Yr(o, s, "xOffset", p, s.xOffset),
    Yr(o, s, "yOffset", f, s.yOffset)),
    e.setAttribute("data-svg-origin", x + " " + T)
}, vs = function(e, n) {
    var r = e._gsap || new Kg(e);
    if ("x"in r && !n && !r.uncache)
        return r;
    var i = e.style, l = r.scaleX < 0, o = "px", s = "deg", u = getComputedStyle(e), a = or(e, Kt) || "0", c, p, f, d, y, m, k, g, h, _, x, T, C, S, E, j, P, I, L, V, X, ee, Q, B, M, D, w, $, ie, ft, ue, Le;
    return c = p = f = m = k = g = h = _ = x = 0,
    d = y = 1,
    r.svg = !!(e.getCTM && f1(e)),
    u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[Ee] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[Ee] !== "none" ? u[Ee] : "")),
    i.scale = i.rotate = i.translate = "none"),
    S = tp(e, r.svg),
    r.svg && (r.uncache ? (M = e.getBBox(),
    a = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px",
    B = "") : B = !n && e.getAttribute("data-svg-origin"),
    zf(e, B || a, !!B || r.originIsAbsolute, r.smooth !== !1, S)),
    T = r.xOrigin || 0,
    C = r.yOrigin || 0,
    S !== _s && (I = S[0],
    L = S[1],
    V = S[2],
    X = S[3],
    c = ee = S[4],
    p = Q = S[5],
    S.length === 6 ? (d = Math.sqrt(I * I + L * L),
    y = Math.sqrt(X * X + V * V),
    m = I || L ? ol(L, I) * Ci : 0,
    h = V || X ? ol(V, X) * Ci + m : 0,
    h && (y *= Math.abs(Math.cos(h * Dl))),
    r.svg && (c -= T - (T * I + C * V),
    p -= C - (T * L + C * X))) : (Le = S[6],
    ft = S[7],
    w = S[8],
    $ = S[9],
    ie = S[10],
    ue = S[11],
    c = S[12],
    p = S[13],
    f = S[14],
    E = ol(Le, ie),
    k = E * Ci,
    E && (j = Math.cos(-E),
    P = Math.sin(-E),
    B = ee * j + w * P,
    M = Q * j + $ * P,
    D = Le * j + ie * P,
    w = ee * -P + w * j,
    $ = Q * -P + $ * j,
    ie = Le * -P + ie * j,
    ue = ft * -P + ue * j,
    ee = B,
    Q = M,
    Le = D),
    E = ol(-V, ie),
    g = E * Ci,
    E && (j = Math.cos(-E),
    P = Math.sin(-E),
    B = I * j - w * P,
    M = L * j - $ * P,
    D = V * j - ie * P,
    ue = X * P + ue * j,
    I = B,
    L = M,
    V = D),
    E = ol(L, I),
    m = E * Ci,
    E && (j = Math.cos(E),
    P = Math.sin(E),
    B = I * j + L * P,
    M = ee * j + Q * P,
    L = L * j - I * P,
    Q = Q * j - ee * P,
    I = B,
    ee = M),
    k && Math.abs(k) + Math.abs(m) > 359.9 && (k = m = 0,
    g = 180 - g),
    d = Ae(Math.sqrt(I * I + L * L + V * V)),
    y = Ae(Math.sqrt(Q * Q + Le * Le)),
    E = ol(ee, Q),
    h = Math.abs(E) > 2e-4 ? E * Ci : 0,
    x = ue ? 1 / (ue < 0 ? -ue : ue) : 0),
    r.svg && (B = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !p1(or(e, Ee)),
    B && e.setAttribute("transform", B))),
    Math.abs(h) > 90 && Math.abs(h) < 270 && (l ? (d *= -1,
    h += m <= 0 ? 180 : -180,
    m += m <= 0 ? 180 : -180) : (y *= -1,
    h += h <= 0 ? 180 : -180)),
    n = n || r.uncache,
    r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o,
    r.y = p - ((r.yPercent = p && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o,
    r.z = f + o,
    r.scaleX = Ae(d),
    r.scaleY = Ae(y),
    r.rotation = Ae(m) + s,
    r.rotationX = Ae(k) + s,
    r.rotationY = Ae(g) + s,
    r.skewX = h + s,
    r.skewY = _ + s,
    r.transformPerspective = x + o,
    (r.zOrigin = parseFloat(a.split(" ")[2]) || !n && r.zOrigin || 0) && (i[Kt] = ca(a)),
    r.xOffset = r.yOffset = 0,
    r.force3D = fn.force3D,
    r.renderTransform = r.svg ? Wx : a1 ? h1 : Hx,
    r.uncache = 0,
    r
}, ca = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, _c = function(e, n, r) {
    var i = wt(n);
    return Ae(parseFloat(n) + parseFloat(ci(e, "x", r + "px", i))) + i
}, Hx = function(e, n) {
    n.z = "0px",
    n.rotationY = n.rotationX = "0deg",
    n.force3D = 0,
    h1(e, n)
}, wi = "0deg", ho = "0px", ki = ") ", h1 = function(e, n) {
    var r = n || this
      , i = r.xPercent
      , l = r.yPercent
      , o = r.x
      , s = r.y
      , u = r.z
      , a = r.rotation
      , c = r.rotationY
      , p = r.rotationX
      , f = r.skewX
      , d = r.skewY
      , y = r.scaleX
      , m = r.scaleY
      , k = r.transformPerspective
      , g = r.force3D
      , h = r.target
      , _ = r.zOrigin
      , x = ""
      , T = g === "auto" && e && e !== 1 || g === !0;
    if (_ && (p !== wi || c !== wi)) {
        var C = parseFloat(c) * Dl, S = Math.sin(C), E = Math.cos(C), j;
        C = parseFloat(p) * Dl,
        j = Math.cos(C),
        o = _c(h, o, S * j * -_),
        s = _c(h, s, -Math.sin(C) * -_),
        u = _c(h, u, E * j * -_ + _)
    }
    k !== ho && (x += "perspective(" + k + ki),
    (i || l) && (x += "translate(" + i + "%, " + l + "%) "),
    (T || o !== ho || s !== ho || u !== ho) && (x += u !== ho || T ? "translate3d(" + o + ", " + s + ", " + u + ") " : "translate(" + o + ", " + s + ki),
    a !== wi && (x += "rotate(" + a + ki),
    c !== wi && (x += "rotateY(" + c + ki),
    p !== wi && (x += "rotateX(" + p + ki),
    (f !== wi || d !== wi) && (x += "skew(" + f + ", " + d + ki),
    (y !== 1 || m !== 1) && (x += "scale(" + y + ", " + m + ki),
    h.style[Ee] = x || "translate(0, 0)"
}, Wx = function(e, n) {
    var r = n || this, i = r.xPercent, l = r.yPercent, o = r.x, s = r.y, u = r.rotation, a = r.skewX, c = r.skewY, p = r.scaleX, f = r.scaleY, d = r.target, y = r.xOrigin, m = r.yOrigin, k = r.xOffset, g = r.yOffset, h = r.forceCSS, _ = parseFloat(o), x = parseFloat(s), T, C, S, E, j;
    u = parseFloat(u),
    a = parseFloat(a),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    a += c,
    u += c),
    u || a ? (u *= Dl,
    a *= Dl,
    T = Math.cos(u) * p,
    C = Math.sin(u) * p,
    S = Math.sin(u - a) * -f,
    E = Math.cos(u - a) * f,
    a && (c *= Dl,
    j = Math.tan(a - c),
    j = Math.sqrt(1 + j * j),
    S *= j,
    E *= j,
    c && (j = Math.tan(c),
    j = Math.sqrt(1 + j * j),
    T *= j,
    C *= j)),
    T = Ae(T),
    C = Ae(C),
    S = Ae(S),
    E = Ae(E)) : (T = p,
    E = f,
    C = S = 0),
    (_ && !~(o + "").indexOf("px") || x && !~(s + "").indexOf("px")) && (_ = ci(d, "x", o, "px"),
    x = ci(d, "y", s, "px")),
    (y || m || k || g) && (_ = Ae(_ + y - (y * T + m * S) + k),
    x = Ae(x + m - (y * C + m * E) + g)),
    (i || l) && (j = d.getBBox(),
    _ = Ae(_ + i / 100 * j.width),
    x = Ae(x + l / 100 * j.height)),
    j = "matrix(" + T + "," + C + "," + S + "," + E + "," + _ + "," + x + ")",
    d.setAttribute("transform", j),
    h && (d.style[Ee] = j)
}, Yx = function(e, n, r, i, l) {
    var o = 360, s = rt(l), u = parseFloat(l) * (s && ~l.indexOf("rad") ? Ci : 1), a = u - i, c = i + a + "deg", p, f;
    return s && (p = l.split("_")[1],
    p === "short" && (a %= o,
    a !== a % (o / 2) && (a += a < 0 ? o : -o)),
    p === "cw" && a < 0 ? a = (a + o * jh) % o - ~~(a / o) * o : p === "ccw" && a > 0 && (a = (a - o * jh) % o - ~~(a / o) * o)),
    e._pt = f = new Gt(e._pt,n,r,i,a,jx),
    f.e = c,
    f.u = "deg",
    e._props.push(r),
    f
}, Rh = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, Xx = function(e, n, r) {
    var i = Rh({}, r._gsap), l = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, s, u, a, c, p, f, d, y;
    i.svg ? (a = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    o[Ee] = n,
    s = vs(r, 1),
    Qi(r, Ee),
    r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Ee],
    o[Ee] = n,
    s = vs(r, 1),
    o[Ee] = a);
    for (u in Pr)
        a = i[u],
        c = s[u],
        a !== c && l.indexOf(u) < 0 && (d = wt(a),
        y = wt(c),
        p = d !== y ? ci(r, u, a, y) : parseFloat(a),
        f = parseFloat(c),
        e._pt = new Gt(e._pt,s,u,p,f - p,Mf),
        e._pt.u = y || 0,
        e._props.push(u));
    Rh(s, i)
};
Qt("padding,margin,Width,Radius", function(t, e) {
    var n = "Top"
      , r = "Right"
      , i = "Bottom"
      , l = "Left"
      , o = (e < 3 ? [n, r, i, l] : [n + l, n + r, i + r, i + l]).map(function(s) {
        return e < 2 ? t + s : "border" + s + t
    });
    aa[e > 1 ? "border" + t : t] = function(s, u, a, c, p) {
        var f, d;
        if (arguments.length < 4)
            return f = o.map(function(y) {
                return mr(s, y, a)
            }),
            d = f.join(" "),
            d.split(f[0]).length === 5 ? f[0] : d;
        f = (c + "").split(" "),
        d = {},
        o.forEach(function(y, m) {
            return d[y] = f[m] = f[m] || f[(m - 1) / 2 | 0]
        }),
        s.init(u, d, p)
    }
});
var m1 = {
    name: "css",
    register: Lf,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, r, i, l) {
        var o = this._props, s = e.style, u = r.vars.startAt, a, c, p, f, d, y, m, k, g, h, _, x, T, C, S, E;
        qd || Lf(),
        this.styles = this.styles || u1(e),
        E = this.styles.props,
        this.tween = r;
        for (m in n)
            if (m !== "autoRound" && (c = n[m],
            !(ln[m] && Zg(m, n, r, i, e, l)))) {
                if (d = typeof c,
                y = aa[m],
                d === "function" && (c = c.call(r, i, e, l),
                d = typeof c),
                d === "string" && ~c.indexOf("random(") && (c = hs(c)),
                y)
                    y(this, e, m, c, r) && (S = 1);
                else if (m.substr(0, 2) === "--")
                    a = (getComputedStyle(e).getPropertyValue(m) + "").trim(),
                    c += "",
                    ii.lastIndex = 0,
                    ii.test(a) || (k = wt(a),
                    g = wt(c)),
                    g ? k !== g && (a = ci(e, m, a, g) + g) : k && (c += k),
                    this.add(s, "setProperty", a, c, i, l, 0, 0, m),
                    o.push(m),
                    E.push(m, 0, s[m]);
                else if (d !== "undefined") {
                    if (u && m in u ? (a = typeof u[m] == "function" ? u[m].call(r, i, e, l) : u[m],
                    rt(a) && ~a.indexOf("random(") && (a = hs(a)),
                    wt(a + "") || a === "auto" || (a += fn.units[m] || wt(mr(e, m)) || ""),
                    (a + "").charAt(1) === "=" && (a = mr(e, m))) : a = mr(e, m),
                    f = parseFloat(a),
                    h = d === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    h && (c = c.substr(2)),
                    p = parseFloat(c),
                    m in tr && (m === "autoAlpha" && (f === 1 && mr(e, "visibility") === "hidden" && p && (f = 0),
                    E.push("visibility", 0, s.visibility),
                    Yr(this, s, "visibility", f ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)),
                    m !== "scale" && m !== "transform" && (m = tr[m],
                    ~m.indexOf(",") && (m = m.split(",")[0]))),
                    _ = m in Pr,
                    _) {
                        if (this.styles.save(m),
                        x || (T = e._gsap,
                        T.renderTransform && !n.parseTransform || vs(e, n.parseTransform),
                        C = n.smoothOrigin !== !1 && T.smooth,
                        x = this._pt = new Gt(this._pt,s,Ee,0,1,T.renderTransform,T,0,-1),
                        x.dep = 1),
                        m === "scale")
                            this._pt = new Gt(this._pt,T,"scaleY",T.scaleY,(h ? Ll(T.scaleY, h + p) : p) - T.scaleY || 0,Mf),
                            this._pt.u = 0,
                            o.push("scaleY", m),
                            m += "X";
                        else if (m === "transformOrigin") {
                            E.push(Kt, 0, s[Kt]),
                            c = bx(c),
                            T.svg ? zf(e, c, 0, C, 0, this) : (g = parseFloat(c.split(" ")[2]) || 0,
                            g !== T.zOrigin && Yr(this, T, "zOrigin", T.zOrigin, g),
                            Yr(this, s, m, ca(a), ca(c)));
                            continue
                        } else if (m === "svgOrigin") {
                            zf(e, c, 1, C, 0, this);
                            continue
                        } else if (m in d1) {
                            Yx(this, T, m, f, h ? Ll(f, h + c) : c);
                            continue
                        } else if (m === "smoothOrigin") {
                            Yr(this, T, "smooth", T.smooth, c);
                            continue
                        } else if (m === "force3D") {
                            T[m] = c;
                            continue
                        } else if (m === "transform") {
                            Xx(this, c, e);
                            continue
                        }
                    } else
                        m in s || (m = Gl(m) || m);
                    if (_ || (p || p === 0) && (f || f === 0) && !Px.test(c) && m in s)
                        k = (a + "").substr((f + "").length),
                        p || (p = 0),
                        g = wt(c) || (m in fn.units ? fn.units[m] : k),
                        k !== g && (f = ci(e, m, a, g)),
                        this._pt = new Gt(this._pt,_ ? T : s,m,f,(h ? Ll(f, h + p) : p) - f,!_ && (g === "px" || m === "zIndex") && n.autoRound !== !1 ? Ox : Mf),
                        this._pt.u = g || 0,
                        k !== g && g !== "%" && (this._pt.b = a,
                        this._pt.r = Mx);
                    else if (m in s)
                        $x.call(this, e, m, a, h ? h + c : c);
                    else if (m in e)
                        this.add(e, m, a || e[m], h ? h + c : c, i, l);
                    else if (m !== "parseTransform") {
                        Vd(m, c);
                        continue
                    }
                    _ || (m in s ? E.push(m, 0, s[m]) : E.push(m, 1, a || e[m])),
                    o.push(m)
                }
            }
        S && r1(this)
    },
    render: function(e, n) {
        if (n.tween._time || !Jd())
            for (var r = n._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            n.styles.revert()
    },
    get: mr,
    aliases: tr,
    getSetter: function(e, n, r) {
        var i = tr[n];
        return i && i.indexOf(",") < 0 && (n = i),
        n in Pr && n !== Kt && (e._gsap.x || mr(e, "x")) ? r && Ph === r ? n === "scale" ? Rx : Dx : (Ph = r || {}) && (n === "scale" ? Ax : Ix) : e.style && !Ud(e.style[n]) ? Lx : ~n.indexOf("-") ? zx : Kd(e, n)
    },
    core: {
        _removeProperty: Qi,
        _getMatrix: tp
    }
};
Zt.utils.checkPrefix = Gl;
Zt.core.getStyleSaver = u1;
(function(t, e, n, r) {
    var i = Qt(t + "," + e + "," + n, function(l) {
        Pr[l] = 1
    });
    Qt(e, function(l) {
        fn.units[l] = "deg",
        d1[l] = 1
    }),
    tr[i[13]] = t + "," + e,
    Qt(r, function(l) {
        var o = l.split(":");
        tr[o[1]] = i[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    fn.units[t] = "px"
});
Zt.registerPlugin(m1);
var G = Zt.registerPlugin(m1) || Zt;
G.core.Tween;
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let Ah = typeof window < "u" ? Qe.useLayoutEffect : Qe.useEffect
  , Ih = t => t && !Array.isArray(t) && typeof t == "object"
  , qs = []
  , Qx = {}
  , g1 = G;
const Mn = (t, e=qs) => {
    let n = Qx;
    Ih(t) ? (n = t,
    t = null,
    e = "dependencies"in n ? n.dependencies : qs) : Ih(e) && (n = e,
    e = "dependencies"in n ? n.dependencies : qs),
    t && typeof t != "function" && console.warn("First parameter must be a function or config object");
    const {scope: r, revertOnUpdate: i} = n
      , l = Qe.useRef(!1)
      , o = Qe.useRef(g1.context( () => {}
    , r))
      , s = Qe.useRef(a => o.current.add(null, a))
      , u = e && e.length && !i;
    return Ah( () => {
        if (t && o.current.add(t, r),
        !u || !l.current)
            return () => o.current.revert()
    }
    , e),
    u && Ah( () => (l.current = !0,
    () => o.current.revert()), qs),
    {
        context: o.current,
        contextSafe: s.current
    }
}
;
Mn.register = t => {
    g1 = t
}
;
Mn.headless = !0;
const Gx = ({time: t}) => (Mn( () => {
    t.from("#textup", {
        duration: .83,
        y: 100,
        stagger: .12,
        opacity: 1,
        ease: "power3.inOut"
    }),
    t.set("#containertext", {
        overflow: "visible"
    }),
    t.to("#textup", {
        delay: .8,
        y: -200,
        duration: .7,
        opacity: 0,
        stagger: .04,
        ease: "power4.inOut"
    }),
    t.to("#overlay", {
        opacity: 1,
        yPercent: -100,
        duration: .6
    }, "-=0.3")
}
),
v.jsx("div", {
    id: "overlay",
    className: "overlay fixed left-0 top-0 z-[999] flex h-svh w-screen items-center justify-center text-2xl font-bold lg:text-3xl xl:text-4xl",
    children: v.jsxs("div", {
        id: "container",
        className: "z-50 flex h-[300px] flex-col items-center justify-center overflow-hidden ",
        children: [v.jsx("span", {
            id: "containertext",
            className: "overflow-hidden text-white",
            children: v.jsx("span", {
                id: "textup",
                className: "opacity-1 flex font-neue font-bold",
                children: "Mental Glow"
            })
        }), v.jsx("span", {
            id: "containertext",
            className: "overflow-hidden text-white",
            children: v.jsx("span", {
                id: "textup",
                className: "opacity-1 flex font-neue font-semibold",
                // children: "© Portfolio 2024" // 12711 ngatur loading page
            })
        })]
    })
}))
  , Kx = "/assets/mouse-BIrgFNN2.png"
  , Df = ({text: t, parclass: e}) => t.split("").map( (n, r) => n === " " ? v.jsx("div", {
    className: e,
    children: " "
}, r) : v.jsx("div", {
    className: e,
    children: n
}, r))
  , Zx = ({time: t}) => (Mn( () => {
    t.from(".photocover", {
        duration: 1,
        scale: -1,
        opacity: 0,
        ease: "power4.inOut"
    }, "-=1.6"),
    t.from(".word", {
        y: 150,
        duration: .45,
        stagger: {
            each: .03
        },
        ease: "power3.inOut"
    }, "-=0.8"),
    t.from(".text", {
        y: 200,
        duration: .6,
        stagger: .14,
        ease: "power3.inOut"
    }, "<=0.5"),
    t.from(".scrolldown", {
        scale: -1,
        opacity: 0,
        duration: .5,
        ease: "power4.inOut"
    }, "<"),
    G.to("#scrolldown", {
        keyframes: {
            "0%": {
                rotation: 360,
                ease: "power3.inOut"
            },
            "100%": {
                rotation: 0,
                ease: "none"
            }
        },
        duration: 8,
        repeat: -1
    })
}
),
v.jsxs("div", {
    className: "relative m-auto flex w-full flex-col items-center p-2 text-[40px] font-bold sm:text-[70px] xl:text-[120px]",
    children: [v.jsxs("div", {
        className: "relative",
        children: [v.jsx("div", {
            className: "relative z-[-9] flex overflow-hidden font-hkgro",
            children: v.jsx(Df, {
                text: "Hey There",
                parclass: "word"
            })
        }), v.jsx("div", {
            className: "relative z-[-9] flex overflow-hidden font-hkgro",
            children: v.jsx(Df, {
                text: "We're Specialist",
                parclass: "word"
            })
        }), v.jsx("div", {
            className: "relative z-[-9] overflow-hidden text-center font-neue text-[12px] tracking-widest text-gray-500 sm:text-[14px] lg:text-[18px] xl:text-[21px]",
            children: v.jsx("div", {
                className: "text",
                children: "Talk About Mentality"
            })
        }), v.jsx("div", {
            className: "relative z-[-9] hidden overflow-hidden text-center font-neue text-[12px] tracking-widest text-gray-500 sm:block sm:text-[14px] lg:text-[18px] xl:text-[21px]",
            children: v.jsx("div", {
                className: "text",
                children: "Mental Glow"
            })
        }), v.jsxs("div", {
            className: " absolute bottom-[-100%] flex w-full items-center justify-between sm:bottom-[-45px] sm:right-[-130px] sm:block sm:w-max lg:bottom-[10px] lg:right-[-180px]",
            children: [v.jsxs("div", {
                className: "block overflow-hidden text-[18px] font-medium sm:hidden",
                children: [v.jsx("div", {
                    className: "text uppercase text-gray-950",
                    children: "open to work"
                }), v.jsx("div", {
                    className: "text text-[12px] text-gray-500",
                    // children: "based in indonesia"
                })]
            }), v.jsxs("div", {
                className: "scrolldown relative z-[-99] block items-end",
                children: [v.jsxs("svg", {
                    width: 100,
                    height: 100,
                    id: "scrolldown",
                    children: [v.jsx("path", {
                        id: "ellipse-id-r2-",
                        style: {
                            fill: "none"
                        },
                        d: "M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"
                    }), v.jsx("text", {
                        style: {
                            fontSize: "14px",
                            letterSpacing: "4.1px",
                            fill: "#000"
                        },
                        children: v.jsx("textPath", {
                            xlinkHref: "#ellipse-id-r2-",
                            startOffset: "0",
                            children: v.jsx("tspan", {
                                children: "SCROLL DOWN SCROLL DOWN" // 12828 bagian puter"
                            })
                        })
                    })]
                }), v.jsx("im", {
                    // src: Kx,
                    alt: "mouse",
                    width: 35,
                    className: "absolute bottom-0 left-0 right-0 top-0 m-auto"
                })]
            })]
        })]
    }), v.jsx("div", {
        className: "photocover absolute left-0 right-0 top-[-50%] z-[-999] m-auto h-[300px] w-[300px] rounded-full bg-cover bg-center bg-no-repeat sm:top-[-18%] lg:top-[-15%] lg:h-[400px] lg:w-[400px] xl:top-[-5%] xl:h-[550px] xl:w-[550px]"
    })]
}))
  , qx = "data:image/svg+xml,%3csvg%20width='20'%20height='14'%20viewBox='0%200%2020%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%207H19M1%201H19M1%2013H19'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Dt, _1, wr, nr, li, v1, y1, Js, x1 = function() {
    return typeof window < "u"
}, w1 = function() {
    return Dt || x1() && (Dt = window.gsap) && Dt.registerPlugin && Dt
}, k1 = function(e) {
    return typeof e == "string"
}, Fh = function(e) {
    return typeof e == "function"
}, ys = function(e, n) {
    var r = n === "x" ? "Width" : "Height"
      , i = "scroll" + r
      , l = "client" + r;
    return e === wr || e === nr || e === li ? Math.max(nr[i], li[i]) - (wr["inner" + r] || nr[l] || li[l]) : e[i] - e["offset" + r]
}, xs = function(e, n) {
    var r = "scroll" + (n === "x" ? "Left" : "Top");
    return e === wr && (e.pageXOffset != null ? r = "page" + n.toUpperCase() + "Offset" : e = nr[r] != null ? nr : li),
    function() {
        return e[r]
    }
}, Jx = function(e, n, r, i) {
    if (Fh(e) && (e = e(n, r, i)),
    typeof e != "object")
        return k1(e) && e !== "max" && e.charAt(1) !== "=" ? {
            x: e,
            y: e
        } : {
            y: e
        };
    if (e.nodeType)
        return {
            y: e,
            x: e
        };
    var l = {}, o;
    for (o in e)
        l[o] = o !== "onAutoKill" && Fh(e[o]) ? e[o](n, r, i) : e[o];
    return l
}, S1 = function(e, n) {
    if (e = v1(e)[0],
    !e || !e.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var r = e.getBoundingClientRect()
      , i = !n || n === wr || n === li
      , l = i ? {
        top: nr.clientTop - (wr.pageYOffset || nr.scrollTop || li.scrollTop || 0),
        left: nr.clientLeft - (wr.pageXOffset || nr.scrollLeft || li.scrollLeft || 0)
    } : n.getBoundingClientRect()
      , o = {
        x: r.left - l.left,
        y: r.top - l.top
    };
    return !i && n && (o.x += xs(n, "x")(),
    o.y += xs(n, "y")()),
    o
}, Bh = function(e, n, r, i, l) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - l : k1(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + i - l : e === "max" ? ys(n, r) - l : Math.min(ys(n, r), S1(e, n)[r] - l)
}, Uh = function() {
    Dt = w1(),
    x1() && Dt && typeof document < "u" && document.body && (wr = window,
    li = document.body,
    nr = document.documentElement,
    v1 = Dt.utils.toArray,
    Dt.config({
        autoKillThreshold: 7
    }),
    y1 = Dt.config(),
    _1 = 1)
}, js = {
    version: "3.12.5",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
        Dt = e,
        Uh()
    },
    init: function(e, n, r, i, l) {
        _1 || Uh();
        var o = this
          , s = Dt.getProperty(e, "scrollSnapType");
        o.isWin = e === wr,
        o.target = e,
        o.tween = r,
        n = Jx(n, i, e, l),
        o.vars = n,
        o.autoKill = !!n.autoKill,
        o.getX = xs(e, "x"),
        o.getY = xs(e, "y"),
        o.x = o.xPrev = o.getX(),
        o.y = o.yPrev = o.getY(),
        Js || (Js = Dt.core.globals().ScrollTrigger),
        Dt.getProperty(e, "scrollBehavior") === "smooth" && Dt.set(e, {
            scrollBehavior: "auto"
        }),
        s && s !== "none" && (o.snap = 1,
        o.snapInline = e.style.scrollSnapType,
        e.style.scrollSnapType = "none"),
        n.x != null ? (o.add(o, "x", o.x, Bh(n.x, e, "x", o.x, n.offsetX || 0), i, l),
        o._props.push("scrollTo_x")) : o.skipX = 1,
        n.y != null ? (o.add(o, "y", o.y, Bh(n.y, e, "y", o.y, n.offsetY || 0), i, l),
        o._props.push("scrollTo_y")) : o.skipY = 1
    },
    render: function(e, n) {
        for (var r = n._pt, i = n.target, l = n.tween, o = n.autoKill, s = n.xPrev, u = n.yPrev, a = n.isWin, c = n.snap, p = n.snapInline, f, d, y, m, k; r; )
            r.r(e, r.d),
            r = r._next;
        f = a || !n.skipX ? n.getX() : s,
        d = a || !n.skipY ? n.getY() : u,
        y = d - u,
        m = f - s,
        k = y1.autoKillThreshold,
        n.x < 0 && (n.x = 0),
        n.y < 0 && (n.y = 0),
        o && (!n.skipX && (m > k || m < -k) && f < ys(i, "x") && (n.skipX = 1),
        !n.skipY && (y > k || y < -k) && d < ys(i, "y") && (n.skipY = 1),
        n.skipX && n.skipY && (l.kill(),
        n.vars.onAutoKill && n.vars.onAutoKill.apply(l, n.vars.onAutoKillParams || []))),
        a ? wr.scrollTo(n.skipX ? f : n.x, n.skipY ? d : n.y) : (n.skipY || (i.scrollTop = n.y),
        n.skipX || (i.scrollLeft = n.x)),
        c && (e === 1 || e === 0) && (d = i.scrollTop,
        f = i.scrollLeft,
        p ? i.style.scrollSnapType = p : i.style.removeProperty("scroll-snap-type"),
        i.scrollTop = d + 1,
        i.scrollLeft = f + 1,
        i.scrollTop = d,
        i.scrollLeft = f),
        n.xPrev = n.x,
        n.yPrev = n.y,
        Js && Js.update()
    },
    kill: function(e) {
        var n = e === "scrollTo"
          , r = this._props.indexOf(e);
        return (n || e === "scrollTo_x") && (this.skipX = 1),
        (n || e === "scrollTo_y") && (this.skipY = 1),
        r > -1 && this._props.splice(r, 1),
        !this._props.length
    }
};
js.max = ys;
js.getOffset = S1;
js.buildGetter = xs;
w1() && Dt.registerPlugin(js);
function ew(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r)
    }
}
function tw(t, e, n) {
    return e && ew(t.prototype, e),
    t
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ut, Pu, sn, Xr, Qr, Rl, T1, Ei, Uo, C1, yr, Fn, E1, N1 = function() {
    return ut || typeof window < "u" && (ut = window.gsap) && ut.registerPlugin && ut
}, P1 = 1, Cl = [], q = [], sr = [], $o = Date.now, Rf = function(e, n) {
    return n
}, nw = function() {
    var e = Uo.core
      , n = e.bridge || {}
      , r = e._scrollers
      , i = e._proxies;
    r.push.apply(r, q),
    i.push.apply(i, sr),
    q = r,
    sr = i,
    Rf = function(o, s) {
        return n[o](s)
    }
}, oi = function(e, n) {
    return ~sr.indexOf(e) && sr[sr.indexOf(e) + 1][n]
}, bo = function(e) {
    return !!~C1.indexOf(e)
}, Pt = function(e, n, r, i, l) {
    return e.addEventListener(n, r, {
        passive: i !== !1,
        capture: !!l
    })
}, Nt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, eu = "scrollLeft", tu = "scrollTop", Af = function() {
    return yr && yr.isPressed || q.cache++
}, fa = function(e, n) {
    var r = function i(l) {
        if (l || l === 0) {
            P1 && (sn.history.scrollRestoration = "manual");
            var o = yr && yr.isPressed;
            l = i.v = Math.round(l) || (yr && yr.iOS ? 1 : 0),
            e(l),
            i.cacheID = q.cache,
            o && Rf("ss", l)
        } else
            (n || q.cache !== i.cacheID || Rf("ref")) && (i.cacheID = q.cache,
            i.v = e());
        return i.v + i.offset
    };
    return r.offset = 0,
    e && r
}, Rt = {
    s: eu,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: fa(function(t) {
        return arguments.length ? sn.scrollTo(t, Xe.sc()) : sn.pageXOffset || Xr[eu] || Qr[eu] || Rl[eu] || 0
    })
}, Xe = {
    s: tu,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Rt,
    sc: fa(function(t) {
        return arguments.length ? sn.scrollTo(Rt.sc(), t) : sn.pageYOffset || Xr[tu] || Qr[tu] || Rl[tu] || 0
    })
}, $t = function(e, n) {
    return (n && n._ctx && n._ctx.selector || ut.utils.toArray)(e)[0] || (typeof e == "string" && ut.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, fi = function(e, n) {
    var r = n.s
      , i = n.sc;
    bo(e) && (e = Xr.scrollingElement || Qr);
    var l = q.indexOf(e)
      , o = i === Xe.sc ? 1 : 2;
    !~l && (l = q.push(e) - 1),
    q[l + o] || Pt(e, "scroll", Af);
    var s = q[l + o]
      , u = s || (q[l + o] = fa(oi(e, r), !0) || (bo(e) ? i : fa(function(a) {
        return arguments.length ? e[r] = a : e[r]
    })));
    return u.target = e,
    s || (u.smooth = ut.getProperty(e, "scrollBehavior") === "smooth"),
    u
}, If = function(e, n, r) {
    var i = e
      , l = e
      , o = $o()
      , s = o
      , u = n || 50
      , a = Math.max(500, u * 3)
      , c = function(y, m) {
        var k = $o();
        m || k - o > u ? (l = i,
        i = y,
        s = o,
        o = k) : r ? i += y : i = l + (y - l) / (k - s) * (o - s)
    }
      , p = function() {
        l = i = r ? 0 : i,
        s = o = 0
    }
      , f = function(y) {
        var m = s
          , k = l
          , g = $o();
        return (y || y === 0) && y !== i && c(y),
        o === s || g - s > a ? 0 : (i + (r ? k : -k)) / ((r ? g : o) - m) * 1e3
    };
    return {
        update: c,
        reset: p,
        getVelocity: f
    }
}, mo = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, $h = function(e) {
    var n = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
}, j1 = function() {
    Uo = ut.core.globals().ScrollTrigger,
    Uo && Uo.core && nw()
}, M1 = function(e) {
    return ut = e || N1(),
    !Pu && ut && typeof document < "u" && document.body && (sn = window,
    Xr = document,
    Qr = Xr.documentElement,
    Rl = Xr.body,
    C1 = [sn, Xr, Qr, Rl],
    ut.utils.clamp,
    E1 = ut.core.context || function() {}
    ,
    Ei = "onpointerenter"in Rl ? "pointer" : "mouse",
    T1 = Fe.isTouch = sn.matchMedia && sn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in sn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Fn = Fe.eventTypes = ("ontouchstart"in Qr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Qr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return P1 = 0
    }, 500),
    j1(),
    Pu = 1),
    Pu
};
Rt.op = Xe;
q.cache = 0;
var Fe = function() {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype;
    return e.init = function(r) {
        Pu || M1(ut) || console.warn("Please gsap.registerPlugin(Observer)"),
        Uo || j1();
        var i = r.tolerance
          , l = r.dragMinimum
          , o = r.type
          , s = r.target
          , u = r.lineHeight
          , a = r.debounce
          , c = r.preventDefault
          , p = r.onStop
          , f = r.onStopDelay
          , d = r.ignore
          , y = r.wheelSpeed
          , m = r.event
          , k = r.onDragStart
          , g = r.onDragEnd
          , h = r.onDrag
          , _ = r.onPress
          , x = r.onRelease
          , T = r.onRight
          , C = r.onLeft
          , S = r.onUp
          , E = r.onDown
          , j = r.onChangeX
          , P = r.onChangeY
          , I = r.onChange
          , L = r.onToggleX
          , V = r.onToggleY
          , X = r.onHover
          , ee = r.onHoverEnd
          , Q = r.onMove
          , B = r.ignoreCheck
          , M = r.isNormalizer
          , D = r.onGestureStart
          , w = r.onGestureEnd
          , $ = r.onWheel
          , ie = r.onEnable
          , ft = r.onDisable
          , ue = r.onClick
          , Le = r.scrollSpeed
          , we = r.capture
          , he = r.allowClicks
          , Ct = r.lockAxis
          , dt = r.onLockAxis;
        this.target = s = $t(s) || Qr,
        this.vars = r,
        d && (d = ut.utils.toArray(d)),
        i = i || 1e-9,
        l = l || 0,
        y = y || 1,
        Le = Le || 1,
        o = o || "wheel,touch,pointer",
        a = a !== !1,
        u || (u = parseFloat(sn.getComputedStyle(Rl).lineHeight) || 22);
        var Mr, Et, On, oe, ze, Ut, qt, N = this, Jt = 0, ar = 0, Or = r.passive || !c, Be = fi(s, Rt), Lr = fi(s, Xe), gi = Be(), tl = Lr(), Ke = ~o.indexOf("touch") && !~o.indexOf("pointer") && Fn[0] === "pointerdown", zr = bo(s), De = s.ownerDocument || Xr, Ln = [0, 0, 0], gn = [0, 0, 0], cr = 0, eo = function() {
            return cr = $o()
        }, Ue = function(U, se) {
            return (N.event = U) && d && ~d.indexOf(U.target) || se && Ke && U.pointerType !== "touch" || B && B(U, se)
        }, Os = function() {
            N._vx.reset(),
            N._vy.reset(),
            Et.pause(),
            p && p(N)
        }, Dr = function() {
            var U = N.deltaX = $h(Ln)
              , se = N.deltaY = $h(gn)
              , z = Math.abs(U) >= i
              , W = Math.abs(se) >= i;
            I && (z || W) && I(N, U, se, Ln, gn),
            z && (T && N.deltaX > 0 && T(N),
            C && N.deltaX < 0 && C(N),
            j && j(N),
            L && N.deltaX < 0 != Jt < 0 && L(N),
            Jt = N.deltaX,
            Ln[0] = Ln[1] = Ln[2] = 0),
            W && (E && N.deltaY > 0 && E(N),
            S && N.deltaY < 0 && S(N),
            P && P(N),
            V && N.deltaY < 0 != ar < 0 && V(N),
            ar = N.deltaY,
            gn[0] = gn[1] = gn[2] = 0),
            (oe || On) && (Q && Q(N),
            On && (h(N),
            On = !1),
            oe = !1),
            Ut && !(Ut = !1) && dt && dt(N),
            ze && ($(N),
            ze = !1),
            Mr = 0
        }, nl = function(U, se, z) {
            Ln[z] += U,
            gn[z] += se,
            N._vx.update(U),
            N._vy.update(se),
            a ? Mr || (Mr = requestAnimationFrame(Dr)) : Dr()
        }, rl = function(U, se) {
            Ct && !qt && (N.axis = qt = Math.abs(U) > Math.abs(se) ? "x" : "y",
            Ut = !0),
            qt !== "y" && (Ln[2] += U,
            N._vx.update(U, !0)),
            qt !== "x" && (gn[2] += se,
            N._vy.update(se, !0)),
            a ? Mr || (Mr = requestAnimationFrame(Dr)) : Dr()
        }, Rr = function(U) {
            if (!Ue(U, 1)) {
                U = mo(U, c);
                var se = U.clientX
                  , z = U.clientY
                  , W = se - N.x
                  , F = z - N.y
                  , b = N.isDragging;
                N.x = se,
                N.y = z,
                (b || Math.abs(N.startX - se) >= l || Math.abs(N.startY - z) >= l) && (h && (On = !0),
                b || (N.isDragging = !0),
                rl(W, F),
                b || k && k(N))
            }
        }, _i = N.onPress = function(H) {
            Ue(H, 1) || H && H.button || (N.axis = qt = null,
            Et.pause(),
            N.isPressed = !0,
            H = mo(H),
            Jt = ar = 0,
            N.startX = N.x = H.clientX,
            N.startY = N.y = H.clientY,
            N._vx.reset(),
            N._vy.reset(),
            Pt(M ? s : De, Fn[1], Rr, Or, !0),
            N.deltaX = N.deltaY = 0,
            _ && _(N))
        }
        , Z = N.onRelease = function(H) {
            if (!Ue(H, 1)) {
                Nt(M ? s : De, Fn[1], Rr, !0);
                var U = !isNaN(N.y - N.startY)
                  , se = N.isDragging
                  , z = se && (Math.abs(N.x - N.startX) > 3 || Math.abs(N.y - N.startY) > 3)
                  , W = mo(H);
                !z && U && (N._vx.reset(),
                N._vy.reset(),
                c && he && ut.delayedCall(.08, function() {
                    if ($o() - cr > 300 && !H.defaultPrevented) {
                        if (H.target.click)
                            H.target.click();
                        else if (De.createEvent) {
                            var F = De.createEvent("MouseEvents");
                            F.initMouseEvent("click", !0, !0, sn, 1, W.screenX, W.screenY, W.clientX, W.clientY, !1, !1, !1, !1, 0, null),
                            H.target.dispatchEvent(F)
                        }
                    }
                })),
                N.isDragging = N.isGesturing = N.isPressed = !1,
                p && se && !M && Et.restart(!0),
                g && se && g(N),
                x && x(N, z)
            }
        }
        , vi = function(U) {
            return U.touches && U.touches.length > 1 && (N.isGesturing = !0) && D(U, N.isDragging)
        }, zn = function() {
            return (N.isGesturing = !1) || w(N)
        }, Dn = function(U) {
            if (!Ue(U)) {
                var se = Be()
                  , z = Lr();
                nl((se - gi) * Le, (z - tl) * Le, 1),
                gi = se,
                tl = z,
                p && Et.restart(!0)
            }
        }, Rn = function(U) {
            if (!Ue(U)) {
                U = mo(U, c),
                $ && (ze = !0);
                var se = (U.deltaMode === 1 ? u : U.deltaMode === 2 ? sn.innerHeight : 1) * y;
                nl(U.deltaX * se, U.deltaY * se, 0),
                p && !M && Et.restart(!0)
            }
        }, yi = function(U) {
            if (!Ue(U)) {
                var se = U.clientX
                  , z = U.clientY
                  , W = se - N.x
                  , F = z - N.y;
                N.x = se,
                N.y = z,
                oe = !0,
                p && Et.restart(!0),
                (W || F) && rl(W, F)
            }
        }, il = function(U) {
            N.event = U,
            X(N)
        }, fr = function(U) {
            N.event = U,
            ee(N)
        }, to = function(U) {
            return Ue(U) || mo(U, c) && ue(N)
        };
        Et = N._dc = ut.delayedCall(f || .25, Os).pause(),
        N.deltaX = N.deltaY = 0,
        N._vx = If(0, 50, !0),
        N._vy = If(0, 50, !0),
        N.scrollX = Be,
        N.scrollY = Lr,
        N.isDragging = N.isGesturing = N.isPressed = !1,
        E1(this),
        N.enable = function(H) {
            return N.isEnabled || (Pt(zr ? De : s, "scroll", Af),
            o.indexOf("scroll") >= 0 && Pt(zr ? De : s, "scroll", Dn, Or, we),
            o.indexOf("wheel") >= 0 && Pt(s, "wheel", Rn, Or, we),
            (o.indexOf("touch") >= 0 && T1 || o.indexOf("pointer") >= 0) && (Pt(s, Fn[0], _i, Or, we),
            Pt(De, Fn[2], Z),
            Pt(De, Fn[3], Z),
            he && Pt(s, "click", eo, !0, !0),
            ue && Pt(s, "click", to),
            D && Pt(De, "gesturestart", vi),
            w && Pt(De, "gestureend", zn),
            X && Pt(s, Ei + "enter", il),
            ee && Pt(s, Ei + "leave", fr),
            Q && Pt(s, Ei + "move", yi)),
            N.isEnabled = !0,
            H && H.type && _i(H),
            ie && ie(N)),
            N
        }
        ,
        N.disable = function() {
            N.isEnabled && (Cl.filter(function(H) {
                return H !== N && bo(H.target)
            }).length || Nt(zr ? De : s, "scroll", Af),
            N.isPressed && (N._vx.reset(),
            N._vy.reset(),
            Nt(M ? s : De, Fn[1], Rr, !0)),
            Nt(zr ? De : s, "scroll", Dn, we),
            Nt(s, "wheel", Rn, we),
            Nt(s, Fn[0], _i, we),
            Nt(De, Fn[2], Z),
            Nt(De, Fn[3], Z),
            Nt(s, "click", eo, !0),
            Nt(s, "click", to),
            Nt(De, "gesturestart", vi),
            Nt(De, "gestureend", zn),
            Nt(s, Ei + "enter", il),
            Nt(s, Ei + "leave", fr),
            Nt(s, Ei + "move", yi),
            N.isEnabled = N.isPressed = N.isDragging = !1,
            ft && ft(N))
        }
        ,
        N.kill = N.revert = function() {
            N.disable();
            var H = Cl.indexOf(N);
            H >= 0 && Cl.splice(H, 1),
            yr === N && (yr = 0)
        }
        ,
        Cl.push(N),
        M && bo(s) && (yr = N),
        N.enable(m)
    }
    ,
    tw(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    t
}();
Fe.version = "3.12.5";
Fe.create = function(t) {
    return new Fe(t)
}
;
Fe.register = M1;
Fe.getAll = function() {
    return Cl.slice()
}
;
Fe.getById = function(t) {
    return Cl.filter(function(e) {
        return e.vars.id === t
    })[0]
}
;
N1() && ut.registerPlugin(Fe);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var A, al, ne, Se, bn, ge, O1, da, ws, Vo, So, nu, vt, Ra, Ff, Ot, bh, Vh, cl, L1, vc, z1, jt, Bf, D1, R1, Ir, Uf, np, Al, rp, pa, $f, yc, ru = 1, yt = Date.now, xc = yt(), En = 0, To = 0, Hh = function(e, n, r) {
    var i = rn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i,
    i ? e.substr(6, e.length - 7) : e
}, Wh = function(e, n) {
    return n && (!rn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, rw = function t() {
    return To && requestAnimationFrame(t)
}, Yh = function() {
    return Ra = 1
}, Xh = function() {
    return Ra = 0
}, qn = function(e) {
    return e
}, Co = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, A1 = function() {
    return typeof window < "u"
}, I1 = function() {
    return A || A1() && (A = window.gsap) && A.registerPlugin && A
}, Gi = function(e) {
    return !!~O1.indexOf(e)
}, F1 = function(e) {
    return (e === "Height" ? rp : ne["inner" + e]) || bn["client" + e] || ge["client" + e]
}, B1 = function(e) {
    return oi(e, "getBoundingClientRect") || (Gi(e) ? function() {
        return zu.width = ne.innerWidth,
        zu.height = rp,
        zu
    }
    : function() {
        return gr(e)
    }
    )
}, iw = function(e, n, r) {
    var i = r.d
      , l = r.d2
      , o = r.a;
    return (o = oi(e, "getBoundingClientRect")) ? function() {
        return o()[i]
    }
    : function() {
        return (n ? F1(l) : e["client" + l]) || 0
    }
}, lw = function(e, n) {
    return !n || ~sr.indexOf(e) ? B1(e) : function() {
        return zu
    }
}, rr = function(e, n) {
    var r = n.s
      , i = n.d2
      , l = n.d
      , o = n.a;
    return Math.max(0, (r = "scroll" + i) && (o = oi(e, r)) ? o() - B1(e)()[l] : Gi(e) ? (bn[r] || ge[r]) - F1(i) : e[r] - e["offset" + i])
}, iu = function(e, n) {
    for (var r = 0; r < cl.length; r += 3)
        (!n || ~n.indexOf(cl[r + 1])) && e(cl[r], cl[r + 1], cl[r + 2])
}, rn = function(e) {
    return typeof e == "string"
}, At = function(e) {
    return typeof e == "function"
}, Eo = function(e) {
    return typeof e == "number"
}, Ni = function(e) {
    return typeof e == "object"
}, go = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
}, wc = function(e, n) {
    if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function() {
            return n(e)
        }) : n(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, sl = Math.abs, U1 = "left", $1 = "top", ip = "right", lp = "bottom", Bi = "width", Ui = "height", Ho = "Right", Wo = "Left", Yo = "Top", Xo = "Bottom", $e = "padding", xn = "margin", Kl = "Width", op = "Height", We = "px", wn = function(e) {
    return ne.getComputedStyle(e)
}, ow = function(e) {
    var n = wn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
}, Qh = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, gr = function(e, n) {
    var r = n && wn(e)[Ff] !== "matrix(1, 0, 0, 1, 0, 0)" && A.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = e.getBoundingClientRect();
    return r && r.progress(0).kill(),
    i
}, ha = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
}, b1 = function(e) {
    var n = [], r = e.labels, i = e.duration(), l;
    for (l in r)
        n.push(r[l] / i);
    return n
}, sw = function(e) {
    return function(n) {
        return A.utils.snap(b1(e), n)
    }
}, sp = function(e) {
    var n = A.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(i, l) {
        return i - l
    });
    return r ? function(i, l, o) {
        o === void 0 && (o = .001);
        var s;
        if (!l)
            return n(i);
        if (l > 0) {
            for (i -= o,
            s = 0; s < r.length; s++)
                if (r[s] >= i)
                    return r[s];
            return r[s - 1]
        } else
            for (s = r.length,
            i += o; s--; )
                if (r[s] <= i)
                    return r[s];
        return r[0]
    }
    : function(i, l, o) {
        o === void 0 && (o = .001);
        var s = n(i);
        return !l || Math.abs(s - i) < o || s - i < 0 == l < 0 ? s : n(l < 0 ? i - e : i + e)
    }
}, uw = function(e) {
    return function(n, r) {
        return sp(b1(e))(n, r.direction)
    }
}, lu = function(e, n, r, i) {
    return r.split(",").forEach(function(l) {
        return e(n, l, i)
    })
}, Je = function(e, n, r, i, l) {
    return e.addEventListener(n, r, {
        passive: !i,
        capture: !!l
    })
}, qe = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, ou = function(e, n, r) {
    r = r && r.wheelHandler,
    r && (e(n, "wheel", r),
    e(n, "touchmove", r))
}, Gh = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, su = {
    toggleActions: "play",
    anticipatePin: 0
}, ma = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, ju = function(e, n) {
    if (rn(e)) {
        var r = e.indexOf("=")
          , i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= n / 100),
        e = e.substr(0, r - 1)),
        e = i + (e in ma ? ma[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
}, uu = function(e, n, r, i, l, o, s, u) {
    var a = l.startColor
      , c = l.endColor
      , p = l.fontSize
      , f = l.indent
      , d = l.fontWeight
      , y = Se.createElement("div")
      , m = Gi(r) || oi(r, "pinType") === "fixed"
      , k = e.indexOf("scroller") !== -1
      , g = m ? ge : r
      , h = e.indexOf("start") !== -1
      , _ = h ? a : c
      , x = "border-color:" + _ + ";font-size:" + p + ";color:" + _ + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return x += "position:" + ((k || u) && m ? "fixed;" : "absolute;"),
    (k || u || !m) && (x += (i === Xe ? ip : lp) + ":" + (o + parseFloat(f)) + "px;"),
    s && (x += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
    y._isStart = h,
    y.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
    y.style.cssText = x,
    y.innerText = n || n === 0 ? e + "-" + n : e,
    g.children[0] ? g.insertBefore(y, g.children[0]) : g.appendChild(y),
    y._offset = y["offset" + i.op.d2],
    Mu(y, 0, i, h),
    y
}, Mu = function(e, n, r, i) {
    var l = {
        display: "block"
    }
      , o = r[i ? "os2" : "p2"]
      , s = r[i ? "p2" : "os2"];
    e._isFlipped = i,
    l[r.a + "Percent"] = i ? -100 : 0,
    l[r.a] = i ? "1px" : 0,
    l["border" + o + Kl] = 1,
    l["border" + s + Kl] = 0,
    l[r.p] = n + "px",
    A.set(e, l)
}, K = [], bf = {}, ks, Kh = function() {
    return yt() - En > 34 && (ks || (ks = requestAnimationFrame(kr)))
}, ul = function() {
    (!jt || !jt.isPressed || jt.startX > ge.clientWidth) && (q.cache++,
    jt ? ks || (ks = requestAnimationFrame(kr)) : kr(),
    En || Zi("scrollStart"),
    En = yt())
}, kc = function() {
    R1 = ne.innerWidth,
    D1 = ne.innerHeight
}, No = function() {
    q.cache++,
    !vt && !z1 && !Se.fullscreenElement && !Se.webkitFullscreenElement && (!Bf || R1 !== ne.innerWidth || Math.abs(ne.innerHeight - D1) > ne.innerHeight * .25) && da.restart(!0)
}, Ki = {}, aw = [], V1 = function t() {
    return qe(Y, "scrollEnd", t) || Li(!0)
}, Zi = function(e) {
    return Ki[e] && Ki[e].map(function(n) {
        return n()
    }) || aw
}, tn = [], H1 = function(e) {
    for (var n = 0; n < tn.length; n += 5)
        (!e || tn[n + 4] && tn[n + 4].query === e) && (tn[n].style.cssText = tn[n + 1],
        tn[n].getBBox && tn[n].setAttribute("transform", tn[n + 2] || ""),
        tn[n + 3].uncache = 1)
}, up = function(e, n) {
    var r;
    for (Ot = 0; Ot < K.length; Ot++)
        r = K[Ot],
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    pa = !0,
    n && H1(n),
    n || Zi("revert")
}, W1 = function(e, n) {
    q.cache++,
    (n || !Lt) && q.forEach(function(r) {
        return At(r) && r.cacheID++ && (r.rec = 0)
    }),
    rn(e) && (ne.history.scrollRestoration = np = e)
}, Lt, $i = 0, Zh, cw = function() {
    if (Zh !== $i) {
        var e = Zh = $i;
        requestAnimationFrame(function() {
            return e === $i && Li(!0)
        })
    }
}, Y1 = function() {
    ge.appendChild(Al),
    rp = !jt && Al.offsetHeight || ne.innerHeight,
    ge.removeChild(Al)
}, qh = function(e) {
    return ws(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
        return n.style.display = e ? "none" : "block"
    })
}, Li = function(e, n) {
    if (En && !e && !pa) {
        Je(Y, "scrollEnd", V1);
        return
    }
    Y1(),
    Lt = Y.isRefreshing = !0,
    q.forEach(function(i) {
        return At(i) && ++i.cacheID && (i.rec = i())
    });
    var r = Zi("refreshInit");
    L1 && Y.sort(),
    n || up(),
    q.forEach(function(i) {
        At(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    K.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    pa = !1,
    K.forEach(function(i) {
        if (i._subPinOffset && i.pin) {
            var l = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , o = i.pin[l];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[l] - o),
            i.refresh()
        }
    }),
    $f = 1,
    qh(!0),
    K.forEach(function(i) {
        var l = rr(i.scroller, i._dir)
          , o = i.vars.end === "max" || i._endClamp && i.end > l
          , s = i._startClamp && i.start >= l;
        (o || s) && i.setPositions(s ? l - 1 : i.start, o ? Math.max(s ? l : i.start + 1, l) : i.end, !0)
    }),
    qh(!1),
    $f = 0,
    r.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    q.forEach(function(i) {
        At(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    W1(np, 1),
    da.pause(),
    $i++,
    Lt = 2,
    kr(2),
    K.forEach(function(i) {
        return At(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    Lt = Y.isRefreshing = !1,
    Zi("refresh")
}, Vf = 0, Ou = 1, Qo, kr = function(e) {
    if (e === 2 || !Lt && !pa) {
        Y.isUpdating = !0,
        Qo && Qo.update(0);
        var n = K.length
          , r = yt()
          , i = r - xc >= 50
          , l = n && K[0].scroll();
        if (Ou = Vf > l ? -1 : 1,
        Lt || (Vf = l),
        i && (En && !Ra && r - En > 200 && (En = 0,
        Zi("scrollEnd")),
        So = xc,
        xc = r),
        Ou < 0) {
            for (Ot = n; Ot-- > 0; )
                K[Ot] && K[Ot].update(0, i);
            Ou = 1
        } else
            for (Ot = 0; Ot < n; Ot++)
                K[Ot] && K[Ot].update(0, i);
        Y.isUpdating = !1
    }
    ks = 0
}, Hf = [U1, $1, lp, ip, xn + Xo, xn + Ho, xn + Yo, xn + Wo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Lu = Hf.concat([Bi, Ui, "boxSizing", "max" + Kl, "max" + op, "position", xn, $e, $e + Yo, $e + Ho, $e + Xo, $e + Wo]), fw = function(e, n, r) {
    Il(r);
    var i = e._gsap;
    if (i.spacerIsNative)
        Il(i.spacerState);
    else if (e._gsap.swappedIn) {
        var l = n.parentNode;
        l && (l.insertBefore(e, n),
        l.removeChild(n))
    }
    e._gsap.swappedIn = !1
}, Sc = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
        for (var l = Hf.length, o = n.style, s = e.style, u; l--; )
            u = Hf[l],
            o[u] = r[u];
        o.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (o.display = "inline-block"),
        s[lp] = s[ip] = "auto",
        o.flexBasis = r.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[Bi] = ha(e, Rt) + We,
        o[Ui] = ha(e, Xe) + We,
        o[$e] = s[xn] = s[$1] = s[U1] = "0",
        Il(i),
        s[Bi] = s["max" + Kl] = r[Bi],
        s[Ui] = s["max" + op] = r[Ui],
        s[$e] = r[$e],
        e.parentNode !== n && (e.parentNode.insertBefore(n, e),
        n.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, dw = /([A-Z])/g, Il = function(e) {
    if (e) {
        var n = e.t.style, r = e.length, i = 0, l, o;
        for ((e.t._gsap || A.core.getCache(e.t)).uncache = 1; i < r; i += 2)
            o = e[i + 1],
            l = e[i],
            o ? n[l] = o : n[l] && n.removeProperty(l.replace(dw, "-$1").toLowerCase())
    }
}, au = function(e) {
    for (var n = Lu.length, r = e.style, i = [], l = 0; l < n; l++)
        i.push(Lu[l], r[Lu[l]]);
    return i.t = e,
    i
}, pw = function(e, n, r) {
    for (var i = [], l = e.length, o = r ? 8 : 0, s; o < l; o += 2)
        s = e[o],
        i.push(s, s in n ? n[s] : e[o + 1]);
    return i.t = e.t,
    i
}, zu = {
    left: 0,
    top: 0
}, Jh = function(e, n, r, i, l, o, s, u, a, c, p, f, d, y) {
    At(e) && (e = e(u)),
    rn(e) && e.substr(0, 3) === "max" && (e = f + (e.charAt(4) === "=" ? ju("0" + e.substr(3), r) : 0));
    var m = d ? d.time() : 0, k, g, h;
    if (d && d.seek(0),
    isNaN(e) || (e = +e),
    Eo(e))
        d && (e = A.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)),
        s && Mu(s, r, i, !0);
    else {
        At(n) && (n = n(u));
        var _ = (e || "0").split(" "), x, T, C, S;
        h = $t(n, u) || ge,
        x = gr(h) || {},
        (!x || !x.left && !x.top) && wn(h).display === "none" && (S = h.style.display,
        h.style.display = "block",
        x = gr(h),
        S ? h.style.display = S : h.style.removeProperty("display")),
        T = ju(_[0], x[i.d]),
        C = ju(_[1] || "0", r),
        e = x[i.p] - a[i.p] - c + T + l - C,
        s && Mu(s, C, i, r - C < 20 || s._isStart && C > 20),
        r -= r - C
    }
    if (y && (u[y] = e || -.001,
    e < 0 && (e = 0)),
    o) {
        var E = e + r
          , j = o._isStart;
        k = "scroll" + i.d2,
        Mu(o, E, i, j && E > 20 || !j && (p ? Math.max(ge[k], bn[k]) : o.parentNode[k]) <= E + 1),
        p && (a = gr(s),
        p && (o.style[i.op.p] = a[i.op.p] - i.op.m - o._offset + We))
    }
    return d && h && (k = gr(h),
    d.seek(f),
    g = gr(h),
    d._caScrollDist = k[i.p] - g[i.p],
    e = e / d._caScrollDist * f),
    d && d.seek(m),
    d ? e : Math.round(e)
}, hw = /(webkit|moz|length|cssText|inset)/i, e0 = function(e, n, r, i) {
    if (e.parentNode !== n) {
        var l = e.style, o, s;
        if (n === ge) {
            e._stOrig = l.cssText,
            s = wn(e);
            for (o in s)
                !+o && !hw.test(o) && s[o] && typeof l[o] == "string" && o !== "0" && (l[o] = s[o]);
            l.top = r,
            l.left = i
        } else
            l.cssText = e._stOrig;
        A.core.getCache(e).uncache = 1,
        n.appendChild(e)
    }
}, X1 = function(e, n, r) {
    var i = n
      , l = i;
    return function(o) {
        var s = Math.round(e());
        return s !== i && s !== l && Math.abs(s - i) > 3 && Math.abs(s - l) > 3 && (o = s,
        r && r()),
        l = i,
        i = o,
        o
    }
}, cu = function(e, n, r) {
    var i = {};
    i[n.p] = "+=" + r,
    A.set(e, i)
}, t0 = function(e, n) {
    var r = fi(e, n)
      , i = "_scroll" + n.p2
      , l = function o(s, u, a, c, p) {
        var f = o.tween
          , d = u.onComplete
          , y = {};
        a = a || r();
        var m = X1(r, a, function() {
            f.kill(),
            o.tween = 0
        });
        return p = c && p || 0,
        c = c || s - a,
        f && f.kill(),
        u[i] = s,
        u.inherit = !1,
        u.modifiers = y,
        y[i] = function() {
            return m(a + c * f.ratio + p * f.ratio * f.ratio)
        }
        ,
        u.onUpdate = function() {
            q.cache++,
            o.tween && kr()
        }
        ,
        u.onComplete = function() {
            o.tween = 0,
            d && d.call(f)
        }
        ,
        f = o.tween = A.to(e, u),
        f
    };
    return e[i] = r,
    r.wheelHandler = function() {
        return l.tween && l.tween.kill() && (l.tween = 0)
    }
    ,
    Je(e, "wheel", r.wheelHandler),
    Y.isTouch && Je(e, "touchmove", r.wheelHandler),
    l
}, Y = function() {
    function t(n, r) {
        al || t.register(A) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Uf(this),
        this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !To) {
            this.update = this.refresh = this.kill = qn;
            return
        }
        r = Qh(rn(r) || Eo(r) || r.nodeType ? {
            trigger: r
        } : r, su);
        var l = r, o = l.onUpdate, s = l.toggleClass, u = l.id, a = l.onToggle, c = l.onRefresh, p = l.scrub, f = l.trigger, d = l.pin, y = l.pinSpacing, m = l.invalidateOnRefresh, k = l.anticipatePin, g = l.onScrubComplete, h = l.onSnapComplete, _ = l.once, x = l.snap, T = l.pinReparent, C = l.pinSpacer, S = l.containerAnimation, E = l.fastScrollEnd, j = l.preventOverlaps, P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Rt : Xe, I = !p && p !== 0, L = $t(r.scroller || ne), V = A.core.getCache(L), X = Gi(L), ee = ("pinType"in r ? r.pinType : oi(L, "pinType") || X && "fixed") === "fixed", Q = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], B = I && r.toggleActions.split(" "), M = "markers"in r ? r.markers : su.markers, D = X ? 0 : parseFloat(wn(L)["border" + P.p2 + Kl]) || 0, w = this, $ = r.onRefreshInit && function() {
            return r.onRefreshInit(w)
        }
        , ie = iw(L, X, P), ft = lw(L, X), ue = 0, Le = 0, we = 0, he = fi(L, P), Ct, dt, Mr, Et, On, oe, ze, Ut, qt, N, Jt, ar, Or, Be, Lr, gi, tl, Ke, zr, De, Ln, gn, cr, eo, Ue, Os, Dr, nl, rl, Rr, _i, Z, vi, zn, Dn, Rn, yi, il, fr;
        if (w._startClamp = w._endClamp = !1,
        w._dir = P,
        k *= 45,
        w.scroller = L,
        w.scroll = S ? S.time.bind(S) : he,
        Et = he(),
        w.vars = r,
        i = i || r.animation,
        "refreshPriority"in r && (L1 = 1,
        r.refreshPriority === -9999 && (Qo = w)),
        V.tweenScroll = V.tweenScroll || {
            top: t0(L, Xe),
            left: t0(L, Rt)
        },
        w.tweenTo = Ct = V.tweenScroll[P.p],
        w.scrubDuration = function(z) {
            vi = Eo(z) && z,
            vi ? Z ? Z.duration(z) : Z = A.to(i, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: vi,
                paused: !0,
                onComplete: function() {
                    return g && g(w)
                }
            }) : (Z && Z.progress(1).kill(),
            Z = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted && !w.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        w.animation = i.pause(),
        i.scrollTrigger = w,
        w.scrubDuration(p),
        Rr = 0,
        u || (u = i.vars.id)),
        x && ((!Ni(x) || x.push) && (x = {
            snapTo: x
        }),
        "scrollBehavior"in ge.style && A.set(X ? [ge, bn] : L, {
            scrollBehavior: "auto"
        }),
        q.forEach(function(z) {
            return At(z) && z.target === (X ? Se.scrollingElement || bn : L) && (z.smooth = !1)
        }),
        Mr = At(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? sw(i) : x.snapTo === "labelsDirectional" ? uw(i) : x.directional !== !1 ? function(z, W) {
            return sp(x.snapTo)(z, yt() - Le < 500 ? 0 : W.direction)
        }
        : A.utils.snap(x.snapTo),
        zn = x.duration || {
            min: .1,
            max: 2
        },
        zn = Ni(zn) ? Vo(zn.min, zn.max) : Vo(zn, zn),
        Dn = A.delayedCall(x.delay || vi / 2 || .1, function() {
            var z = he()
              , W = yt() - Le < 500
              , F = Ct.tween;
            if ((W || Math.abs(w.getVelocity()) < 10) && !F && !Ra && ue !== z) {
                var b = (z - oe) / Be, Ze = i && !I ? i.totalProgress() : b, te = W ? 0 : (Ze - _i) / (yt() - So) * 1e3 || 0, Re = A.utils.clamp(-b, 1 - b, sl(te / 2) * te / .185), pt = b + (x.inertia === !1 ? 0 : Re), je, ve, ce = x, An = ce.onStart, ke = ce.onInterrupt, en = ce.onComplete;
                if (je = Mr(pt, w),
                Eo(je) || (je = pt),
                ve = Math.round(oe + je * Be),
                z <= ze && z >= oe && ve !== z) {
                    if (F && !F._initted && F.data <= sl(ve - z))
                        return;
                    x.inertia === !1 && (Re = je - b),
                    Ct(ve, {
                        duration: zn(sl(Math.max(sl(pt - Ze), sl(je - Ze)) * .185 / te / .05 || 0)),
                        ease: x.ease || "power3",
                        data: sl(ve - z),
                        onInterrupt: function() {
                            return Dn.restart(!0) && ke && ke(w)
                        },
                        onComplete: function() {
                            w.update(),
                            ue = he(),
                            i && (Z ? Z.resetTo("totalProgress", je, i._tTime / i._tDur) : i.progress(je)),
                            Rr = _i = i && !I ? i.totalProgress() : w.progress,
                            h && h(w),
                            en && en(w)
                        }
                    }, z, Re * Be, ve - z - Re * Be),
                    An && An(w, Ct.tween)
                }
            } else
                w.isActive && ue !== z && Dn.restart(!0)
        }).pause()),
        u && (bf[u] = w),
        f = w.trigger = $t(f || d !== !0 && d),
        fr = f && f._gsap && f._gsap.stRevert,
        fr && (fr = fr(w)),
        d = d === !0 ? f : $t(d),
        rn(s) && (s = {
            targets: f,
            className: s
        }),
        d && (y === !1 || y === xn || (y = !y && d.parentNode && d.parentNode.style && wn(d.parentNode).display === "flex" ? !1 : $e),
        w.pin = d,
        dt = A.core.getCache(d),
        dt.spacer ? Lr = dt.pinState : (C && (C = $t(C),
        C && !C.nodeType && (C = C.current || C.nativeElement),
        dt.spacerIsNative = !!C,
        C && (dt.spacerState = au(C))),
        dt.spacer = Ke = C || Se.createElement("div"),
        Ke.classList.add("pin-spacer"),
        u && Ke.classList.add("pin-spacer-" + u),
        dt.pinState = Lr = au(d)),
        r.force3D !== !1 && A.set(d, {
            force3D: !0
        }),
        w.spacer = Ke = dt.spacer,
        rl = wn(d),
        eo = rl[y + P.os2],
        De = A.getProperty(d),
        Ln = A.quickSetter(d, P.a, We),
        Sc(d, Ke, rl),
        tl = au(d)),
        M) {
            ar = Ni(M) ? Qh(M, Gh) : Gh,
            N = uu("scroller-start", u, L, P, ar, 0),
            Jt = uu("scroller-end", u, L, P, ar, 0, N),
            zr = N["offset" + P.op.d2];
            var to = $t(oi(L, "content") || L);
            Ut = this.markerStart = uu("start", u, to, P, ar, zr, 0, S),
            qt = this.markerEnd = uu("end", u, to, P, ar, zr, 0, S),
            S && (il = A.quickSetter([Ut, qt], P.a, We)),
            !ee && !(sr.length && oi(L, "fixedMarkers") === !0) && (ow(X ? ge : L),
            A.set([N, Jt], {
                force3D: !0
            }),
            Os = A.quickSetter(N, P.a, We),
            nl = A.quickSetter(Jt, P.a, We))
        }
        if (S) {
            var H = S.vars.onUpdate
              , U = S.vars.onUpdateParams;
            S.eventCallback("onUpdate", function() {
                w.update(0, 0, 1),
                H && H.apply(S, U || [])
            })
        }
        if (w.previous = function() {
            return K[K.indexOf(w) - 1]
        }
        ,
        w.next = function() {
            return K[K.indexOf(w) + 1]
        }
        ,
        w.revert = function(z, W) {
            if (!W)
                return w.kill(!0);
            var F = z !== !1 || !w.enabled
              , b = vt;
            F !== w.isReverted && (F && (Rn = Math.max(he(), w.scroll.rec || 0),
            we = w.progress,
            yi = i && i.progress()),
            Ut && [Ut, qt, N, Jt].forEach(function(Ze) {
                return Ze.style.display = F ? "none" : "block"
            }),
            F && (vt = w,
            w.update(F)),
            d && (!T || !w.isActive) && (F ? fw(d, Ke, Lr) : Sc(d, Ke, wn(d), Ue)),
            F || w.update(F),
            vt = b,
            w.isReverted = F)
        }
        ,
        w.refresh = function(z, W, F, b) {
            if (!((vt || !w.enabled) && !W)) {
                if (d && z && En) {
                    Je(t, "scrollEnd", V1);
                    return
                }
                !Lt && $ && $(w),
                vt = w,
                Ct.tween && !F && (Ct.tween.kill(),
                Ct.tween = 0),
                Z && Z.pause(),
                m && i && i.revert({
                    kill: !1
                }).invalidate(),
                w.isReverted || w.revert(!0, !0),
                w._subPinOffset = !1;
                var Ze = ie(), te = ft(), Re = S ? S.duration() : rr(L, P), pt = Be <= .01, je = 0, ve = b || 0, ce = Ni(F) ? F.end : r.end, An = r.endTrigger || f, ke = Ni(F) ? F.start : r.start || (r.start === 0 || !f ? 0 : d ? "0 0" : "0 100%"), en = w.pinnedContainer = r.pinnedContainer && $t(r.pinnedContainer, w), Yn = f && Math.max(0, K.indexOf(w)) || 0, it = Yn, lt, ht, xi, Ls, mt, He, Xn, Aa, cp, no, Qn, ro, zs;
                for (M && Ni(F) && (ro = A.getProperty(N, P.p),
                zs = A.getProperty(Jt, P.p)); it--; )
                    He = K[it],
                    He.end || He.refresh(0, 1) || (vt = w),
                    Xn = He.pin,
                    Xn && (Xn === f || Xn === d || Xn === en) && !He.isReverted && (no || (no = []),
                    no.unshift(He),
                    He.revert(!0, !0)),
                    He !== K[it] && (Yn--,
                    it--);
                for (At(ke) && (ke = ke(w)),
                ke = Hh(ke, "start", w),
                oe = Jh(ke, f, Ze, P, he(), Ut, N, w, te, D, ee, Re, S, w._startClamp && "_startClamp") || (d ? -.001 : 0),
                At(ce) && (ce = ce(w)),
                rn(ce) && !ce.indexOf("+=") && (~ce.indexOf(" ") ? ce = (rn(ke) ? ke.split(" ")[0] : "") + ce : (je = ju(ce.substr(2), Ze),
                ce = rn(ke) ? ke : (S ? A.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, oe) : oe) + je,
                An = f)),
                ce = Hh(ce, "end", w),
                ze = Math.max(oe, Jh(ce || (An ? "100% 0" : Re), An, Ze, P, he() + je, qt, Jt, w, te, D, ee, Re, S, w._endClamp && "_endClamp")) || -.001,
                je = 0,
                it = Yn; it--; )
                    He = K[it],
                    Xn = He.pin,
                    Xn && He.start - He._pinPush <= oe && !S && He.end > 0 && (lt = He.end - (w._startClamp ? Math.max(0, He.start) : He.start),
                    (Xn === f && He.start - He._pinPush < oe || Xn === en) && isNaN(ke) && (je += lt * (1 - He.progress)),
                    Xn === d && (ve += lt));
                if (oe += je,
                ze += je,
                w._startClamp && (w._startClamp += je),
                w._endClamp && !Lt && (w._endClamp = ze || -.001,
                ze = Math.min(ze, rr(L, P))),
                Be = ze - oe || (oe -= .01) && .001,
                pt && (we = A.utils.clamp(0, 1, A.utils.normalize(oe, ze, Rn))),
                w._pinPush = ve,
                Ut && je && (lt = {},
                lt[P.a] = "+=" + je,
                en && (lt[P.p] = "-=" + he()),
                A.set([Ut, qt], lt)),
                d && !($f && w.end >= rr(L, P)))
                    lt = wn(d),
                    Ls = P === Xe,
                    xi = he(),
                    gn = parseFloat(De(P.a)) + ve,
                    !Re && ze > 1 && (Qn = (X ? Se.scrollingElement || bn : L).style,
                    Qn = {
                        style: Qn,
                        value: Qn["overflow" + P.a.toUpperCase()]
                    },
                    X && wn(ge)["overflow" + P.a.toUpperCase()] !== "scroll" && (Qn.style["overflow" + P.a.toUpperCase()] = "scroll")),
                    Sc(d, Ke, lt),
                    tl = au(d),
                    ht = gr(d, !0),
                    Aa = ee && fi(L, Ls ? Rt : Xe)(),
                    y ? (Ue = [y + P.os2, Be + ve + We],
                    Ue.t = Ke,
                    it = y === $e ? ha(d, P) + Be + ve : 0,
                    it && (Ue.push(P.d, it + We),
                    Ke.style.flexBasis !== "auto" && (Ke.style.flexBasis = it + We)),
                    Il(Ue),
                    en && K.forEach(function(io) {
                        io.pin === en && io.vars.pinSpacing !== !1 && (io._subPinOffset = !0)
                    }),
                    ee && he(Rn)) : (it = ha(d, P),
                    it && Ke.style.flexBasis !== "auto" && (Ke.style.flexBasis = it + We)),
                    ee && (mt = {
                        top: ht.top + (Ls ? xi - oe : Aa) + We,
                        left: ht.left + (Ls ? Aa : xi - oe) + We,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    mt[Bi] = mt["max" + Kl] = Math.ceil(ht.width) + We,
                    mt[Ui] = mt["max" + op] = Math.ceil(ht.height) + We,
                    mt[xn] = mt[xn + Yo] = mt[xn + Ho] = mt[xn + Xo] = mt[xn + Wo] = "0",
                    mt[$e] = lt[$e],
                    mt[$e + Yo] = lt[$e + Yo],
                    mt[$e + Ho] = lt[$e + Ho],
                    mt[$e + Xo] = lt[$e + Xo],
                    mt[$e + Wo] = lt[$e + Wo],
                    gi = pw(Lr, mt, T),
                    Lt && he(0)),
                    i ? (cp = i._initted,
                    vc(1),
                    i.render(i.duration(), !0, !0),
                    cr = De(P.a) - gn + Be + ve,
                    Dr = Math.abs(Be - cr) > 1,
                    ee && Dr && gi.splice(gi.length - 2, 2),
                    i.render(0, !0, !0),
                    cp || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    vc(0)) : cr = Be,
                    Qn && (Qn.value ? Qn.style["overflow" + P.a.toUpperCase()] = Qn.value : Qn.style.removeProperty("overflow-" + P.a));
                else if (f && he() && !S)
                    for (ht = f.parentNode; ht && ht !== ge; )
                        ht._pinOffset && (oe -= ht._pinOffset,
                        ze -= ht._pinOffset),
                        ht = ht.parentNode;
                no && no.forEach(function(io) {
                    return io.revert(!1, !0)
                }),
                w.start = oe,
                w.end = ze,
                Et = On = Lt ? Rn : he(),
                !S && !Lt && (Et < Rn && he(Rn),
                w.scroll.rec = 0),
                w.revert(!1, !0),
                Le = yt(),
                Dn && (ue = -1,
                Dn.restart(!0)),
                vt = 0,
                i && I && (i._initted || yi) && i.progress() !== yi && i.progress(yi || 0, !0).render(i.time(), !0, !0),
                (pt || we !== w.progress || S || m) && (i && !I && i.totalProgress(S && oe < -.001 && !we ? A.utils.normalize(oe, ze, 0) : we, !0),
                w.progress = pt || (Et - oe) / Be === we ? 0 : we),
                d && y && (Ke._pinOffset = Math.round(w.progress * cr)),
                Z && Z.invalidate(),
                isNaN(ro) || (ro -= A.getProperty(N, P.p),
                zs -= A.getProperty(Jt, P.p),
                cu(N, P, ro),
                cu(Ut, P, ro - (b || 0)),
                cu(Jt, P, zs),
                cu(qt, P, zs - (b || 0))),
                pt && !Lt && w.update(),
                c && !Lt && !Or && (Or = !0,
                c(w),
                Or = !1)
            }
        }
        ,
        w.getVelocity = function() {
            return (he() - On) / (yt() - So) * 1e3 || 0
        }
        ,
        w.endAnimation = function() {
            go(w.callbackAnimation),
            i && (Z ? Z.progress(1) : i.paused() ? I || go(i, w.direction < 0, 1) : go(i, i.reversed()))
        }
        ,
        w.labelToScroll = function(z) {
            return i && i.labels && (oe || w.refresh() || oe) + i.labels[z] / i.duration() * Be || 0
        }
        ,
        w.getTrailing = function(z) {
            var W = K.indexOf(w)
              , F = w.direction > 0 ? K.slice(0, W).reverse() : K.slice(W + 1);
            return (rn(z) ? F.filter(function(b) {
                return b.vars.preventOverlaps === z
            }) : F).filter(function(b) {
                return w.direction > 0 ? b.end <= oe : b.start >= ze
            })
        }
        ,
        w.update = function(z, W, F) {
            if (!(S && !F && !z)) {
                var b = Lt === !0 ? Rn : w.scroll(), Ze = z ? 0 : (b - oe) / Be, te = Ze < 0 ? 0 : Ze > 1 ? 1 : Ze || 0, Re = w.progress, pt, je, ve, ce, An, ke, en, Yn;
                if (W && (On = Et,
                Et = S ? he() : b,
                x && (_i = Rr,
                Rr = i && !I ? i.totalProgress() : te)),
                k && d && !vt && !ru && En && (!te && oe < b + (b - On) / (yt() - So) * k ? te = 1e-4 : te === 1 && ze > b + (b - On) / (yt() - So) * k && (te = .9999)),
                te !== Re && w.enabled) {
                    if (pt = w.isActive = !!te && te < 1,
                    je = !!Re && Re < 1,
                    ke = pt !== je,
                    An = ke || !!te != !!Re,
                    w.direction = te > Re ? 1 : -1,
                    w.progress = te,
                    An && !vt && (ve = te && !Re ? 0 : te === 1 ? 1 : Re === 1 ? 2 : 3,
                    I && (ce = !ke && B[ve + 1] !== "none" && B[ve + 1] || B[ve],
                    Yn = i && (ce === "complete" || ce === "reset" || ce in i))),
                    j && (ke || Yn) && (Yn || p || !i) && (At(j) ? j(w) : w.getTrailing(j).forEach(function(xi) {
                        return xi.endAnimation()
                    })),
                    I || (Z && !vt && !ru ? (Z._dp._time - Z._start !== Z._time && Z.render(Z._dp._time - Z._start),
                    Z.resetTo ? Z.resetTo("totalProgress", te, i._tTime / i._tDur) : (Z.vars.totalProgress = te,
                    Z.invalidate().restart())) : i && i.totalProgress(te, !!(vt && (Le || z)))),
                    d) {
                        if (z && y && (Ke.style[y + P.os2] = eo),
                        !ee)
                            Ln(Co(gn + cr * te));
                        else if (An) {
                            if (en = !z && te > Re && ze + 1 > b && b + 1 >= rr(L, P),
                            T)
                                if (!z && (pt || en)) {
                                    var it = gr(d, !0)
                                      , lt = b - oe;
                                    e0(d, ge, it.top + (P === Xe ? lt : 0) + We, it.left + (P === Xe ? 0 : lt) + We)
                                } else
                                    e0(d, Ke);
                            Il(pt || en ? gi : tl),
                            Dr && te < 1 && pt || Ln(gn + (te === 1 && !en ? cr : 0))
                        }
                    }
                    x && !Ct.tween && !vt && !ru && Dn.restart(!0),
                    s && (ke || _ && te && (te < 1 || !yc)) && ws(s.targets).forEach(function(xi) {
                        return xi.classList[pt || _ ? "add" : "remove"](s.className)
                    }),
                    o && !I && !z && o(w),
                    An && !vt ? (I && (Yn && (ce === "complete" ? i.pause().totalProgress(1) : ce === "reset" ? i.restart(!0).pause() : ce === "restart" ? i.restart(!0) : i[ce]()),
                    o && o(w)),
                    (ke || !yc) && (a && ke && wc(w, a),
                    Q[ve] && wc(w, Q[ve]),
                    _ && (te === 1 ? w.kill(!1, 1) : Q[ve] = 0),
                    ke || (ve = te === 1 ? 1 : 3,
                    Q[ve] && wc(w, Q[ve]))),
                    E && !pt && Math.abs(w.getVelocity()) > (Eo(E) ? E : 2500) && (go(w.callbackAnimation),
                    Z ? Z.progress(1) : go(i, ce === "reverse" ? 1 : !te, 1))) : I && o && !vt && o(w)
                }
                if (nl) {
                    var ht = S ? b / S.duration() * (S._caScrollDist || 0) : b;
                    Os(ht + (N._isFlipped ? 1 : 0)),
                    nl(ht)
                }
                il && il(-b / S.duration() * (S._caScrollDist || 0))
            }
        }
        ,
        w.enable = function(z, W) {
            w.enabled || (w.enabled = !0,
            Je(L, "resize", No),
            X || Je(L, "scroll", ul),
            $ && Je(t, "refreshInit", $),
            z !== !1 && (w.progress = we = 0,
            Et = On = ue = he()),
            W !== !1 && w.refresh())
        }
        ,
        w.getTween = function(z) {
            return z && Ct ? Ct.tween : Z
        }
        ,
        w.setPositions = function(z, W, F, b) {
            if (S) {
                var Ze = S.scrollTrigger
                  , te = S.duration()
                  , Re = Ze.end - Ze.start;
                z = Ze.start + Re * z / te,
                W = Ze.start + Re * W / te
            }
            w.refresh(!1, !1, {
                start: Wh(z, F && !!w._startClamp),
                end: Wh(W, F && !!w._endClamp)
            }, b),
            w.update()
        }
        ,
        w.adjustPinSpacing = function(z) {
            if (Ue && z) {
                var W = Ue.indexOf(P.d) + 1;
                Ue[W] = parseFloat(Ue[W]) + z + We,
                Ue[1] = parseFloat(Ue[1]) + z + We,
                Il(Ue)
            }
        }
        ,
        w.disable = function(z, W) {
            if (w.enabled && (z !== !1 && w.revert(!0, !0),
            w.enabled = w.isActive = !1,
            W || Z && Z.pause(),
            Rn = 0,
            dt && (dt.uncache = 1),
            $ && qe(t, "refreshInit", $),
            Dn && (Dn.pause(),
            Ct.tween && Ct.tween.kill() && (Ct.tween = 0)),
            !X)) {
                for (var F = K.length; F--; )
                    if (K[F].scroller === L && K[F] !== w)
                        return;
                qe(L, "resize", No),
                X || qe(L, "scroll", ul)
            }
        }
        ,
        w.kill = function(z, W) {
            w.disable(z, W),
            Z && !W && Z.kill(),
            u && delete bf[u];
            var F = K.indexOf(w);
            F >= 0 && K.splice(F, 1),
            F === Ot && Ou > 0 && Ot--,
            F = 0,
            K.forEach(function(b) {
                return b.scroller === w.scroller && (F = 1)
            }),
            F || Lt || (w.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            z && i.revert({
                kill: !1
            }),
            W || i.kill()),
            Ut && [Ut, qt, N, Jt].forEach(function(b) {
                return b.parentNode && b.parentNode.removeChild(b)
            }),
            Qo === w && (Qo = 0),
            d && (dt && (dt.uncache = 1),
            F = 0,
            K.forEach(function(b) {
                return b.pin === d && F++
            }),
            F || (dt.spacer = 0)),
            r.onKill && r.onKill(w)
        }
        ,
        K.push(w),
        w.enable(!1, !1),
        fr && fr(w),
        i && i.add && !Be) {
            var se = w.update;
            w.update = function() {
                w.update = se,
                oe || ze || w.refresh()
            }
            ,
            A.delayedCall(.01, w.update),
            Be = .01,
            oe = ze = 0
        } else
            w.refresh();
        d && cw()
    }
    ,
    t.register = function(r) {
        return al || (A = r || I1(),
        A1() && window.document && t.enable(),
        al = To),
        al
    }
    ,
    t.defaults = function(r) {
        if (r)
            for (var i in r)
                su[i] = r[i];
        return su
    }
    ,
    t.disable = function(r, i) {
        To = 0,
        K.forEach(function(o) {
            return o[i ? "kill" : "disable"](r)
        }),
        qe(ne, "wheel", ul),
        qe(Se, "scroll", ul),
        clearInterval(nu),
        qe(Se, "touchcancel", qn),
        qe(ge, "touchstart", qn),
        lu(qe, Se, "pointerdown,touchstart,mousedown", Yh),
        lu(qe, Se, "pointerup,touchend,mouseup", Xh),
        da.kill(),
        iu(qe);
        for (var l = 0; l < q.length; l += 3)
            ou(qe, q[l], q[l + 1]),
            ou(qe, q[l], q[l + 2])
    }
    ,
    t.enable = function() {
        if (ne = window,
        Se = document,
        bn = Se.documentElement,
        ge = Se.body,
        A && (ws = A.utils.toArray,
        Vo = A.utils.clamp,
        Uf = A.core.context || qn,
        vc = A.core.suppressOverwrites || qn,
        np = ne.history.scrollRestoration || "auto",
        Vf = ne.pageYOffset,
        A.core.globals("ScrollTrigger", t),
        ge)) {
            To = 1,
            Al = document.createElement("div"),
            Al.style.height = "100vh",
            Al.style.position = "absolute",
            Y1(),
            rw(),
            Fe.register(A),
            t.isTouch = Fe.isTouch,
            Ir = Fe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Bf = Fe.isTouch === 1,
            Je(ne, "wheel", ul),
            O1 = [ne, Se, bn, ge],
            A.matchMedia ? (t.matchMedia = function(u) {
                var a = A.matchMedia(), c;
                for (c in u)
                    a.add(c, u[c]);
                return a
            }
            ,
            A.addEventListener("matchMediaInit", function() {
                return up()
            }),
            A.addEventListener("matchMediaRevert", function() {
                return H1()
            }),
            A.addEventListener("matchMedia", function() {
                Li(0, 1),
                Zi("matchMedia")
            }),
            A.matchMedia("(orientation: portrait)", function() {
                return kc(),
                kc
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            kc(),
            Je(Se, "scroll", ul);
            var r = ge.style, i = r.borderTopStyle, l = A.core.Animation.prototype, o, s;
            for (l.revert || Object.defineProperty(l, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            o = gr(ge),
            Xe.m = Math.round(o.top + Xe.sc()) || 0,
            Rt.m = Math.round(o.left + Rt.sc()) || 0,
            i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
            nu = setInterval(Kh, 250),
            A.delayedCall(.5, function() {
                return ru = 0
            }),
            Je(Se, "touchcancel", qn),
            Je(ge, "touchstart", qn),
            lu(Je, Se, "pointerdown,touchstart,mousedown", Yh),
            lu(Je, Se, "pointerup,touchend,mouseup", Xh),
            Ff = A.utils.checkPrefix("transform"),
            Lu.push(Ff),
            al = yt(),
            da = A.delayedCall(.2, Li).pause(),
            cl = [Se, "visibilitychange", function() {
                var u = ne.innerWidth
                  , a = ne.innerHeight;
                Se.hidden ? (bh = u,
                Vh = a) : (bh !== u || Vh !== a) && No()
            }
            , Se, "DOMContentLoaded", Li, ne, "load", Li, ne, "resize", No],
            iu(Je),
            K.forEach(function(u) {
                return u.enable(0, 1)
            }),
            s = 0; s < q.length; s += 3)
                ou(qe, q[s], q[s + 1]),
                ou(qe, q[s], q[s + 2])
        }
    }
    ,
    t.config = function(r) {
        "limitCallbacks"in r && (yc = !!r.limitCallbacks);
        var i = r.syncInterval;
        i && clearInterval(nu) || (nu = i) && setInterval(Kh, i),
        "ignoreMobileResize"in r && (Bf = t.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (iu(qe) || iu(Je, r.autoRefreshEvents || "none"),
        z1 = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    t.scrollerProxy = function(r, i) {
        var l = $t(r)
          , o = q.indexOf(l)
          , s = Gi(l);
        ~o && q.splice(o, s ? 6 : 2),
        i && (s ? sr.unshift(ne, i, ge, i, bn, i) : sr.unshift(l, i))
    }
    ,
    t.clearMatchMedia = function(r) {
        K.forEach(function(i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
        })
    }
    ,
    t.isInViewport = function(r, i, l) {
        var o = (rn(r) ? $t(r) : r).getBoundingClientRect()
          , s = o[l ? Bi : Ui] * i || 0;
        return l ? o.right - s > 0 && o.left + s < ne.innerWidth : o.bottom - s > 0 && o.top + s < ne.innerHeight
    }
    ,
    t.positionInViewport = function(r, i, l) {
        rn(r) && (r = $t(r));
        var o = r.getBoundingClientRect()
          , s = o[l ? Bi : Ui]
          , u = i == null ? s / 2 : i in ma ? ma[i] * s : ~i.indexOf("%") ? parseFloat(i) * s / 100 : parseFloat(i) || 0;
        return l ? (o.left + u) / ne.innerWidth : (o.top + u) / ne.innerHeight
    }
    ,
    t.killAll = function(r) {
        if (K.slice(0).forEach(function(l) {
            return l.vars.id !== "ScrollSmoother" && l.kill()
        }),
        r !== !0) {
            var i = Ki.killAll || [];
            Ki = {},
            i.forEach(function(l) {
                return l()
            })
        }
    }
    ,
    t
}();
Y.version = "3.12.5";
Y.saveStyles = function(t) {
    return t ? ws(t).forEach(function(e) {
        if (e && e.style) {
            var n = tn.indexOf(e);
            n >= 0 && tn.splice(n, 5),
            tn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), A.core.getCache(e), Uf())
        }
    }) : tn
}
;
Y.revert = function(t, e) {
    return up(!t, e)
}
;
Y.create = function(t, e) {
    return new Y(t,e)
}
;
Y.refresh = function(t) {
    return t ? No() : (al || Y.register()) && Li(!0)
}
;
Y.update = function(t) {
    return ++q.cache && kr(t === !0 ? 2 : 0)
}
;
Y.clearScrollMemory = W1;
Y.maxScroll = function(t, e) {
    return rr(t, e ? Rt : Xe)
}
;
Y.getScrollFunc = function(t, e) {
    return fi($t(t), e ? Rt : Xe)
}
;
Y.getById = function(t) {
    return bf[t]
}
;
Y.getAll = function() {
    return K.filter(function(t) {
        return t.vars.id !== "ScrollSmoother"
    })
}
;
Y.isScrolling = function() {
    return !!En
}
;
Y.snapDirectional = sp;
Y.addEventListener = function(t, e) {
    var n = Ki[t] || (Ki[t] = []);
    ~n.indexOf(e) || n.push(e)
}
;
Y.removeEventListener = function(t, e) {
    var n = Ki[t]
      , r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1)
}
;
Y.batch = function(t, e) {
    var n = [], r = {}, i = e.interval || .016, l = e.batchMax || 1e9, o = function(a, c) {
        var p = []
          , f = []
          , d = A.delayedCall(i, function() {
            c(p, f),
            p = [],
            f = []
        }).pause();
        return function(y) {
            p.length || d.restart(!0),
            p.push(y.trigger),
            f.push(y),
            l <= p.length && d.progress(1)
        }
    }, s;
    for (s in e)
        r[s] = s.substr(0, 2) === "on" && At(e[s]) && s !== "onRefreshInit" ? o(s, e[s]) : e[s];
    return At(l) && (l = l(),
    Je(Y, "refresh", function() {
        return l = e.batchMax()
    })),
    ws(t).forEach(function(u) {
        var a = {};
        for (s in r)
            a[s] = r[s];
        a.trigger = u,
        n.push(Y.create(a))
    }),
    n
}
;
var n0 = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0),
    r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
}, Tc = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Fe.isTouch ? " pinch-zoom" : "") : "none",
    e === bn && t(ge, n)
}, fu = {
    auto: 1,
    scroll: 1
}, mw = function(e) {
    var n = e.event, r = e.target, i = e.axis, l = (n.changedTouches ? n.changedTouches[0] : n).target, o = l._gsap || A.core.getCache(l), s = yt(), u;
    if (!o._isScrollT || s - o._isScrollT > 2e3) {
        for (; l && l !== ge && (l.scrollHeight <= l.clientHeight && l.scrollWidth <= l.clientWidth || !(fu[(u = wn(l)).overflowY] || fu[u.overflowX])); )
            l = l.parentNode;
        o._isScroll = l && l !== r && !Gi(l) && (fu[(u = wn(l)).overflowY] || fu[u.overflowX]),
        o._isScrollT = s
    }
    (o._isScroll || i === "x") && (n.stopPropagation(),
    n._gsapAllow = !0)
}, Q1 = function(e, n, r, i) {
    return Fe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: i = i && mw,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return r && Je(Se, Fe.eventTypes[0], i0, !1, !0)
        },
        onDisable: function() {
            return qe(Se, Fe.eventTypes[0], i0, !0)
        }
    })
}, gw = /(input|label|select|textarea)/i, r0, i0 = function(e) {
    var n = gw.test(e.target.tagName);
    (n || r0) && (e._gsapAllow = !0,
    r0 = n)
}, _w = function(e) {
    Ni(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var n = e, r = n.normalizeScrollX, i = n.momentum, l = n.allowNestedScroll, o = n.onRelease, s, u, a = $t(e.target) || bn, c = A.core.globals().ScrollSmoother, p = c && c.get(), f = Ir && (e.content && $t(e.content) || p && e.content !== !1 && !p.smooth() && p.content()), d = fi(a, Xe), y = fi(a, Rt), m = 1, k = (Fe.isTouch && ne.visualViewport ? ne.visualViewport.scale * ne.visualViewport.width : ne.outerWidth) / ne.innerWidth, g = 0, h = At(i) ? function() {
        return i(s)
    }
    : function() {
        return i || 2.8
    }
    , _, x, T = Q1(a, e.type, !0, l), C = function() {
        return x = !1
    }, S = qn, E = qn, j = function() {
        u = rr(a, Xe),
        E = Vo(Ir ? 1 : 0, u),
        r && (S = Vo(0, rr(a, Rt))),
        _ = $i
    }, P = function() {
        f._gsap.y = Co(parseFloat(f._gsap.y) + d.offset) + "px",
        f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)",
        d.offset = d.cacheID = 0
    }, I = function() {
        if (x) {
            requestAnimationFrame(C);
            var M = Co(s.deltaY / 2)
              , D = E(d.v - M);
            if (f && D !== d.v + d.offset) {
                d.offset = D - d.v;
                var w = Co((parseFloat(f && f._gsap.y) || 0) - d.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + w + ", 0, 1)",
                f._gsap.y = w + "px",
                d.cacheID = q.cache,
                kr()
            }
            return !0
        }
        d.offset && P(),
        x = !0
    }, L, V, X, ee, Q = function() {
        j(),
        L.isActive() && L.vars.scrollY > u && (d() > u ? L.progress(1) && d(u) : L.resetTo("scrollY", u))
    };
    return f && A.set(f, {
        y: "+=0"
    }),
    e.ignoreCheck = function(B) {
        return Ir && B.type === "touchmove" && I() || m > 1.05 && B.type !== "touchstart" || s.isGesturing || B.touches && B.touches.length > 1
    }
    ,
    e.onPress = function() {
        x = !1;
        var B = m;
        m = Co((ne.visualViewport && ne.visualViewport.scale || 1) / k),
        L.pause(),
        B !== m && Tc(a, m > 1.01 ? !0 : r ? !1 : "x"),
        V = y(),
        X = d(),
        j(),
        _ = $i
    }
    ,
    e.onRelease = e.onGestureStart = function(B, M) {
        if (d.offset && P(),
        !M)
            ee.restart(!0);
        else {
            q.cache++;
            var D = h(), w, $;
            r && (w = y(),
            $ = w + D * .05 * -B.velocityX / .227,
            D *= n0(y, w, $, rr(a, Rt)),
            L.vars.scrollX = S($)),
            w = d(),
            $ = w + D * .05 * -B.velocityY / .227,
            D *= n0(d, w, $, rr(a, Xe)),
            L.vars.scrollY = E($),
            L.invalidate().duration(D).play(.01),
            (Ir && L.vars.scrollY >= u || w >= u - 1) && A.to({}, {
                onUpdate: Q,
                duration: D
            })
        }
        o && o(B)
    }
    ,
    e.onWheel = function() {
        L._ts && L.pause(),
        yt() - g > 1e3 && (_ = 0,
        g = yt())
    }
    ,
    e.onChange = function(B, M, D, w, $) {
        if ($i !== _ && j(),
        M && r && y(S(w[2] === M ? V + (B.startX - B.x) : y() + M - w[1])),
        D) {
            d.offset && P();
            var ie = $[2] === D
              , ft = ie ? X + B.startY - B.y : d() + D - $[1]
              , ue = E(ft);
            ie && ft !== ue && (X += ue - ft),
            d(ue)
        }
        (D || M) && kr()
    }
    ,
    e.onEnable = function() {
        Tc(a, r ? !1 : "x"),
        Y.addEventListener("refresh", Q),
        Je(ne, "resize", Q),
        d.smooth && (d.target.style.scrollBehavior = "auto",
        d.smooth = y.smooth = !1),
        T.enable()
    }
    ,
    e.onDisable = function() {
        Tc(a, !0),
        qe(ne, "resize", Q),
        Y.removeEventListener("refresh", Q),
        T.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    s = new Fe(e),
    s.iOS = Ir,
    Ir && !d() && d(1),
    Ir && A.ticker.add(qn),
    ee = s._dc,
    L = A.to(s, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: X1(d, d(), function() {
                return L.pause()
            })
        },
        onUpdate: kr,
        onComplete: ee.vars.onComplete
    }),
    s
};
Y.sort = function(t) {
    return K.sort(t || function(e, n) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
Y.observe = function(t) {
    return new Fe(t)
}
;
Y.normalizeScroll = function(t) {
    if (typeof t > "u")
        return jt;
    if (t === !0 && jt)
        return jt.enable();
    if (t === !1) {
        jt && jt.kill(),
        jt = t;
        return
    }
    var e = t instanceof Fe ? t : _w(t);
    return jt && jt.target === e.target && jt.kill(),
    Gi(e.target) && (jt = e),
    e
}
;
Y.core = {
    _getVelocityProp: If,
    _inputObserver: Q1,
    _scrollers: q,
    _proxies: sr,
    bridge: {
        ss: function() {
            En || Zi("scrollStart"),
            En = yt()
        },
        ref: function() {
            return vt
        }
    }
};
I1() && A.registerPlugin(Y);
const vw = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4="
  , G1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M19%200h-14c-2.761%200-5%202.239-5%205v14c0%202.761%202.239%205%205%205h14c2.762%200%205-2.239%205-5v-14c0-2.761-2.238-5-5-5zm-11%2019h-3v-11h3v11zm-1.5-12.268c-.966%200-1.75-.79-1.75-1.764s.784-1.764%201.75-1.764%201.75.79%201.75%201.764-.783%201.764-1.75%201.764zm13.5%2012.268h-3v-5.604c0-3.368-4-3.113-4%200v5.604h-3v-11h3v1.765c1.396-2.586%207-2.777%207%202.476v6.759z'/%3e%3c/svg%3e"
  , K1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M15.233%205.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181%201.127-3.279%203.279-.039.844-.048%201.097-.048%203.233s.009%202.389.047%203.233c.099%202.148%201.106%203.18%203.279%203.279.843.038%201.097.047%203.233.047%202.137%200%202.39-.008%203.233-.046%202.17-.099%203.18-1.129%203.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233%2010.62c-2.269%200-4.108-1.839-4.108-4.108%200-2.269%201.84-4.108%204.108-4.108s4.108%201.839%204.108%204.108c0%202.269-1.839%204.108-4.108%204.108zm4.271-7.418c-.53%200-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604%203.31c0%201.473-1.194%202.667-2.667%202.667s-2.667-1.194-2.667-2.667c0-1.473%201.194-2.667%202.667-2.667s2.667%201.194%202.667%202.667zm4.333-12h-14c-2.761%200-5%202.239-5%205v14c0%202.761%202.239%205%205%205h14c2.762%200%205-2.239%205-5v-14c0-2.761-2.238-5-5-5zm.952%2015.298c-.132%202.909-1.751%204.521-4.653%204.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298%200-2.172.009-2.445.048-3.298.134-2.908%201.748-4.521%204.654-4.653.854-.04%201.125-.049%203.298-.049s2.445.009%203.299.048c2.908.133%204.523%201.751%204.653%204.653.039.854.048%201.127.048%203.299%200%202.173-.009%202.445-.048%203.298z'/%3e%3c/svg%3e"
  , Z1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M12%200c-6.626%200-12%205.373-12%2012%200%205.302%203.438%209.8%208.207%2011.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729%201.205.084%201.839%201.237%201.839%201.237%201.07%201.834%202.807%201.304%203.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931%200-1.311.469-2.381%201.236-3.221-.124-.303-.535-1.524.117-3.176%200%200%201.008-.322%203.301%201.23.957-.266%201.983-.399%203.003-.404%201.02.005%202.047.138%203.006.404%202.291-1.552%203.297-1.23%203.297-1.23.653%201.653.242%202.874.118%203.176.77.84%201.235%201.911%201.235%203.221%200%204.609-2.807%205.624-5.479%205.921.43.372.823%201.102.823%202.222v3.293c0%20.319.192.694.801.576%204.765-1.589%208.199-6.086%208.199-11.386%200-6.627-5.373-12-12-12z'/%3e%3c/svg%3e"
  , yw = ({time: t}) => {
    G.registerPlugin(js, Y);
    const [e,n] = Qe.useState("hidden")
      , [r,i] = Qe.useState(!1)
      , l = Qe.useRef()
      , o = a => {
        G.to(window, {
            duration: 1,
            scrollTo: {
                y: `${a}`,
                offset: 70
            }
        })
    }
      , s = () => {
        const a = G.timeline();
        a.fromTo("#containernav", {
            width: "0",
            duration: .3,
            display: "none"
        }, {
            width: "95%",
            display: "flex",
            duration: .5
        }),
        a.fromTo("li", {
            duration: .6,
            opacity: 0,
            y: 300,
            stagger: .08,
            ease: "power4.inOut"
        }, {
            duration: .6,
            opacity: 1,
            y: 0,
            stagger: .08,
            ease: "power4.inOut"
        }),
        a.fromTo(".iconnav", {
            duration: .4,
            opacity: 0,
            y: 0,
            ease: "power4.out"
        }, {
            duration: .4,
            opacity: 1,
            y: -20,
            ease: "power4.out"
        }),
        a.fromTo(".iconsosmed", {
            duration: .4,
            opacity: 0,
            y: 0,
            ease: "power3.out"
        }, {
            duration: .4,
            opacity: 1,
            y: 20,
            ease: "power3.out"
        }, "<")
    }
      , u = () => {
        const a = G.timeline();
        a.fromTo("li", {
            duration: .6,
            opacity: 1,
            y: 0,
            stagger: .08,
            ease: "power4.inOut"
        }, {
            duration: .6,
            opacity: 0,
            y: -300,
            stagger: .08,
            ease: "power4.inOut"
        }),
        a.fromTo(".iconnav", {
            duration: .4,
            opacity: 1,
            y: -20,
            ease: "power4.out"
        }, {
            duration: .4,
            opacity: 0,
            y: 0,
            ease: "power4.out"
        }),
        a.fromTo(".iconsosmed", {
            duration: .4,
            opacity: 1,
            y: 20,
            ease: "power3.out"
        }, {
            duration: .4,
            opacity: 0,
            y: 0,
            ease: "power3.out"
        }, "<"),
        a.to("#containernav", {
            width: "0",
            duration: .3,
            display: "none"
        })
    }
    ;
    return Qe.useEffect( () => {
        function a() {
            i(window.innerWidth > 640)
        }
        return window.addEventListener("resize", a),
        a(),
        () => {
            window.removeEventListener("resize", a)
        }
    }
    , []),
    Qe.useEffect( () => {
        r ? (G.to("#containernav", {
            width: "95%",
            duration: .3,
            display: "flex"
        }),
        G.to("li", {
            opacity: 1,
            y: 0,
            stagger: .08,
            ease: "power4.inOut"
        })) : (G.set("#containernav", {
            width: "0",
            duration: .3,
            display: "none"
        }),
        G.set("li", {
            opacity: 0,
            y: -300,
            stagger: .08,
            ease: "power4.inOut"
        }))
    }
    , [r]),
    Mn( () => {
        t.from(".nav", {
            y: -200,
            duration: .4,
            ease: "power2.out"
        }, "+=0.8")
    }
    ),
    v.jsxs("div", {
        className: "z-[999] flex w-full items-center justify-between px-8 pt-[8px] sm:px-4",
        children: [v.jsx("div", {
            className: "logonama nav font-neue text-[32px] font-semibold sm:text-[28px]",
            children: "MentalGlow" // 15181 buat ngatur nama web
        }), v.jsx("img", {
            src: qx,
            alt: "",
            onClick: s,
            className: "nav rounded-[20px] bg-black p-[10px] brightness-200 sm:hidden"
        }), v.jsxs("ul", {
            ref: l,
            id: "containernav",
            className: `nav ${e} font-neue fixed right-0 top-0 z-[999999] me-3 mt-3 h-[90vh] w-[0] flex-col rounded-[14px] 
        p-[5px] text-[35px] font-medium 
        text-black sm:static sm:mt-0 sm:flex sm:h-max sm:w-full sm:max-w-max 
        sm:flex-row sm:space-x-[10px] sm:bg-transparent sm:text-xl lg:space-x-2`,
            children: [v.jsxs("div", {
                className: "flex w-full justify-between overflow-hidden p-8 sm:hidden",
                children: [v.jsx("div", {
                    className: "iconnav text-[32px] font-bold text-black",
                    children: ""
                }), v.jsx("img", {
                    onClick: u,
                    src: vw,
                    width: 50,
                    height: 50,
                    className: "iconnav relative flex  items-start rounded-full p-2 text-left "
                })]
            }), v.jsxs("div", {
                className: "font-neue m-auto flex flex-col items-center justify-center gap-2 overflow-hidden sm:flex-row sm:gap-5",
                children: [v.jsx("li", {
                    className: " text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer",
                    onClick: () => o("#section1"),
                    children: "Home"
                }), v.jsx("li", {
                    onClick: () => o("#section2"),
                    className: " text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer ",
                    children: "About"
                }), v.jsx("li", {
                    onClick: () => o("#section3"),
                    className: " text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer",
                    children: "Treatment"
                }), v.jsx("li", {
                    onClick: () => o("#section4"),
                    className: " text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer",
                    children: "Contact"
                })]
            }), v.jsxs("div", {
                className: "flex h-[200px] items-center justify-center gap-4 gap-x-4 overflow-hidden sm:hidden",
                children: [v.jsx("div", {
                    className: "iconsosmed w-[90px] opacity-100",
                    children: v.jsxs("a", {
                        href: "",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex flex-col items-center text-center",
                        children: [v.jsx("img", {
                            src: G1,
                            className: "w-[30px]"
                        }), v.jsx("div", {
                            className: "text-[18px]",
                            children: "Linkedin"
                        })]
                    })
                }), v.jsx("div", {
                    className: "iconsosmed w-[90px] opacity-100",
                    children: v.jsxs("a", {
                        href: "",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex flex-col items-center text-center",
                        children: [v.jsx("img", {
                            src: K1,
                            className: "w-[30px]"
                        }), v.jsx("div", {
                            className: "text-[18px]",
                            children: "Instagram"
                        })]
                    })
                }), v.jsx("div", {
                    className: "iconsosmed w-[90px] opacity-100",
                    children: v.jsxs("a", {
                        href: "",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex flex-col items-center text-center",
                        children: [v.jsx("img", {
                            src: Z1,
                            className: "w-[30px]"
                        }), v.jsx("div", {
                            className: "text-[18px]",
                            children: "Github"
                        })]
                    })
                })]
            })]
        })]
    })
}
  , xw = () => {
    G.registerPlugin(Y);
    const t = Qe.useRef();
    return Mn( () => {
        const e = G.timeline({
            scrollTrigger: {
                trigger: t.current,
                start: "top top",
                end: "+=1000",
                toggleActions: "play none none reverse",
                scrub: .5,
                pin: !0
            }
        })
          , n = G.timeline({
            scrollTrigger: {
                trigger: t.current,
                start: "-=200",
                end: "+=700",
                toggleActions: "play none none reverse"
            }
        })
          , r = G.timeline({
            scrollTrigger: {
                trigger: t.current,
                start: "bottom center",
                end: "bottom",
                toggleActions: "play none none reverse"
            }
        });
        n.to("#body", {
            backgroundColor: "black",
            ease: "power3.inOut",
            duration: .25
        }),
        r.to("#body", {
            backgroundColor: "white",
            ease: "power4.inOut",
            duration: .25
        }),
        e.set(".lol", {
            opacity: 1,
            stagger: 1
        }, .1)
    }
    ),
    v.jsx("div", {
        id: "nono",
        ref: t,
        className: "flex h-screen items-center justify-center text-black sm:px-8 ",
        children: v.jsx("div", {
            className: "flex flex-col font-bold",
            children: v.jsx("div", {
                id: "textabout",
                className: "m-auto px-[12px] sm:m-0",
                children: v.jsx("div", {
                    className: "flex flex-wrap font-neue text-[43px] text-white sm:leading-[60px] md:text-[80px] md:leading-[145px] lg:text-[86px] lg:leading-[170px] xl:text-[103px]",
                    children: v.jsx(Df, {
                        text: "Campaign About Mental Health.", // 15335 teks scroll gerak 
                        parclass: "lol opacity-30"
                    })
                })
            })
        })
    })
}
  , ww = "/img/mentalHealth.jpeg"
  , kw = () => (Mn( () => {
    window.innerWidth > 640 && G.to("#descriptionme", {
        y: 80,
        duration: 1,
        scrollTrigger: {
            trigger: "#section2",
            start: "top =-200",
            end: "bottom",
            scrub: .5
        }
    }),
    G.from("#title-about", {
        scrollTrigger: {
            trigger: "#section2",
            start: "top +=180",
            end: "top +=180",
            once: !0
        },
        opacity: 0,
        duration: .6,
        ease: "power3.inOut",
        y: 80
    }),
    G.from(".skills", {
        scrollTrigger: {
            trigger: "#section2",
            start: "top",
            end: "top",
            once: !0
        },
        y: 100,
        stagger: .08,
        duration: .32,
        ease: "power3.inOut"
    })
}
),
v.jsxs("div", {
    className: "flex min-h-max w-full flex-col items-center justify-center",
    children: [v.jsx("div", {
        className: "overflow-hidden",
        children: v.jsx("div", {
            className: " text-center overflow-hidden font-neue text-[28px] font-semibold sm:mb-4 sm:text-[50px] sm:capitalize md:text-[60px] md:font-medium lg:mb-7 lg:text-[90px]",
            children: v.jsx("div", {
                id: "title-about",
                children: "About Me"
            })
        })
    }), v.jsxs("div", {
        className: "flex w-full flex-[0_0_100%] flex-col justify-center px-2 py-4 sm:flex-row sm:px-4 sm:py-0 lg:px-2",
        children: [v.jsx("div", {
            className: " flex flex-[0_0_100%] justify-center sm:h-[350px] sm:w-[350px] sm:flex-[0_0_45%] lg:h-[500px] lg:w-[450px] lg:justify-end",
            children: v.jsx("img", {
                src: ww,
                className: "rounded-lg bg-cover bg-center sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[450px]"
            })
        }), v.jsxs("div", {
            id: "descriptionme",
            className: "flex flex-[0_0_100%] flex-col px-[18px] font-neue text-[16px] font-thin text-gray-800 sm:flex-[0_0_55%] sm:text-[18px] lg:text-[24px]",
            children: [v.jsx("div", {
                className: "mt-2 font-neue text-[24px] font-semibold sm:mt-0 md:text-2xl lg:text-4xl",
                children: "intoroduction who i am ?" // 15405 bagian about me
            }), v.jsxs("div", {
                children: [v.jsx("div", {
                    className: "mt-2 sm:mt-[14px] md:w-[400px] lg:mt-[24px] lg:w-[500px] xl:w-[620px]",
                    children: "This website is dedicated to raising awareness about mental health in the digital age. Through various information and practical solutions, the platform helps individuals understand the impact of technology, especially social media, on emotional well-being. We provide guidance on addressing issues such as social isolation, anxiety, and sleep disturbances, and offer actionable steps that families, schools, and communities can take to support better mental health in a digital environment."
                }), v.jsx("div", {
                    className: "mt-[12px]",
                    children: ""
                })], 
            })]
        })]
    })]
}));
class Ms {
    constructor(e=0, n="Network Error") {
        this.status = e,
        this.text = n
    }
}
const Sw = () => {
    if (!(typeof localStorage > "u"))
        return {
            get: t => Promise.resolve(localStorage.getItem(t)),
            set: (t, e) => Promise.resolve(localStorage.setItem(t, e)),
            remove: t => Promise.resolve(localStorage.removeItem(t))
        }
}
  , st = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: Sw()
}
  , ap = t => t ? typeof t == "string" ? {
    publicKey: t
} : t.toString() === "[object Object]" ? t : {} : {}
  , Tw = (t, e="https://api.emailjs.com") => {
    if (!t)
        return;
    const n = ap(t);
    st.publicKey = n.publicKey,
    st.blockHeadless = n.blockHeadless,
    st.storageProvider = n.storageProvider,
    st.blockList = n.blockList,
    st.limitRate = n.limitRate,
    st.origin = n.origin || e
}
  , q1 = async (t, e, n={}) => {
    const r = await fetch(st.origin + t, {
        method: "POST",
        headers: n,
        body: e
    })
      , i = await r.text()
      , l = new Ms(r.status,i);
    if (r.ok)
        return l;
    throw l
}
  , J1 = (t, e, n) => {
    if (!t || typeof t != "string")
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!e || typeof e != "string")
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
}
  , Cw = t => {
    if (t && t.toString() !== "[object Object]")
        throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
}
  , e_ = t => t.webdriver || !t.languages || t.languages.length === 0
  , t_ = () => new Ms(451,"Unavailable For Headless Browser")
  , Ew = (t, e) => {
    if (!Array.isArray(t))
        throw "The BlockList list has to be an array";
    if (typeof e != "string")
        throw "The BlockList watchVariable has to be a string"
}
  , Nw = t => {
    var e;
    return !((e = t.list) != null && e.length) || !t.watchVariable
}
  , Pw = (t, e) => t instanceof FormData ? t.get(e) : t[e]
  , n_ = (t, e) => {
    if (Nw(t))
        return !1;
    Ew(t.list, t.watchVariable);
    const n = Pw(e, t.watchVariable);
    return typeof n != "string" ? !1 : t.list.includes(n)
}
  , r_ = () => new Ms(403,"Forbidden")
  , jw = (t, e) => {
    if (typeof t != "number" || t < 0)
        throw "The LimitRate throttle has to be a positive number";
    if (e && typeof e != "string")
        throw "The LimitRate ID has to be a string"
}
  , Mw = async (t, e, n) => {
    const r = Number(await n.get(t) || 0);
    return e - Date.now() + r
}
  , i_ = async (t, e, n) => {
    if (!e.throttle || !n)
        return !1;
    jw(e.throttle, e.id);
    const r = e.id || t;
    return await Mw(r, e.throttle, n) > 0 ? !0 : (await n.set(r, Date.now().toString()),
    !1)
}
  , l_ = () => new Ms(429,"Too Many Requests")
  , Ow = async (t, e, n, r) => {
    const i = ap(r)
      , l = i.publicKey || st.publicKey
      , o = i.blockHeadless || st.blockHeadless
      , s = st.storageProvider || i.storageProvider
      , u = {
        ...st.blockList,
        ...i.blockList
    }
      , a = {
        ...st.limitRate,
        ...i.limitRate
    };
    return o && e_(navigator) ? Promise.reject(t_()) : (J1(l, t, e),
    Cw(n),
    n && n_(u, n) ? Promise.reject(r_()) : await i_(location.pathname, a, s) ? Promise.reject(l_()) : q1("/api/v1.0/email/send", JSON.stringify({
        lib_version: "4.3.3",
        user_id: l,
        service_id: t,
        template_id: e,
        template_params: n
    }), {
        "Content-type": "application/json"
    }))
}
  , Lw = t => {
    if (!t || t.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
}
  , zw = t => typeof t == "string" ? document.querySelector(t) : t
  , Dw = async (t, e, n, r) => {
    const i = ap(r)
      , l = i.publicKey || st.publicKey
      , o = i.blockHeadless || st.blockHeadless
      , s = st.storageProvider || i.storageProvider
      , u = {
        ...st.blockList,
        ...i.blockList
    }
      , a = {
        ...st.limitRate,
        ...i.limitRate
    };
    if (o && e_(navigator))
        return Promise.reject(t_());
    const c = zw(n);
    J1(l, t, e),
    Lw(c);
    const p = new FormData(c);
    return n_(u, p) ? Promise.reject(r_()) : await i_(location.pathname, a, s) ? Promise.reject(l_()) : (p.append("lib_version", "4.3.3"),
    p.append("service_id", t),
    p.append("template_id", e),
    p.append("user_id", l),
    q1("/api/v1.0/email/send-form", p))
}
  , Rw = {
    init: Tw,
    send: Ow,
    sendForm: Dw,
    EmailJSResponseStatus: Ms
}
  , Aw = () => {
    const t = Qe.useRef()
      , [e,n] = Qe.useState({
        success: "",
        error: ""
    })
      , [r,i] = Qe.useState(!1)
      , [l,o] = Qe.useState(new Date);
    Qe.useEffect( () => {
        const c = setInterval( () => {
            o(new Date)
        }
        , 1e3);
        return () => clearInterval(c)
    }
    , []);
    const s = `${l.getDate()}/${l.getMonth() + 1}/${l.getFullYear()}`
      , u = `${l.getHours()}:${l.getMinutes()}:${l.getSeconds()}`;
    Mn( () => {
        G.from("#contact", {
            scrollTrigger: {
                trigger: "#section4",
                start: "top +=250",
                end: "top +=250",
                once: !0
            },
            opacity: 0,
            duration: 1,
            ease: "power3.inOut",
            y: 80
        }),
        G.from("#title-about-wrapper", {
            scrollTrigger: {
                trigger: "#section4",
                start: "-=600",
                end: "+=1000",
                scrub: !0
            },
            translateX: -200,
            duration: 1,
            ease: "power3.inOut"
        })
    }
    );
    const a = c => {
        c.preventDefault(),
        Rw.sendForm("aselolejos", "template_a5jg57b", t.current, {
            publicKey: "qByr7pGR89bJ6qKww"
        }).then( () => {
            console.log("SUCCESS!"),
            n({
                ...e,
                success: "success",
                error: ""
            }),
            i(!0)
        }
        , p => {
            console.log("FAILED...", p.text),
            n({
                ...e,
                error: "error",
                success: ""
            })
        }
        )
    }
    ;
    return v.jsxs(v.Fragment, {
        children: [r ? v.jsx("div", {
            className: "fixed left-0 top-0 z-[9999999999999] flex h-screen w-full items-center justify-center bg-black bg-opacity-50",
            children: v.jsxs("div", {
                className: "relative w-[80%] max-w-xl rounded-xl bg-white font-neue sm:rounded-2xl",
                children: [v.jsx("div", {
                    className: "w-full",
                    children: v.jsx("div", {
                        className: "m-8 mx-auto my-10 max-w-[400px]",
                        children: v.jsx("h1", {
                            className: "text-center text-3xl font-extrabold",
                            children: "message sent successfully"
                        })
                    })
                }), v.jsx("div", {
                    onClick: () => i(!1),
                    className: "absolute right-[-10px] top-[-12px] flex cursor-pointer items-center justify-center rounded-full bg-slate-200 px-4 py-1 text-2xl leading-normal",
                    children: "x"
                })]
            })
        }) : null, v.jsxs("div", {
            className: "flex h-full w-full flex-col items-center px-4 py-2 sm:justify-center md:px-[52px] md:py-[20px]",
            children: [v.jsxs("div", {
                className: "w-full text-center relative overflow-hidden font-neue text-[28px] font-semibold sm:mb-4 sm:text-[50px] sm:capitalize md:text-[60px] md:font-medium lg:mb-7 lg:text-[90px]",
                children: [v.jsx("div", {
                    id: "contact",
                    className: "z-50 relative",
                    children: "Contact me"
                }), v.jsx("div", {
                    id: "title-about-wrapper",
                    className: "title-section font-bold font-neue text-4xl md:text-[70px] lg:text-[150px] absolute top-[-10%] lg:leading-[140px] right-0 left-0",
                    children: "CONTACT ME"
                })]
            }), v.jsxs("div", {
                className: "flex w-full flex-col md:flex-row md:items-center",
                children: [v.jsxs("div", {
                    className: "flex flex-col md:w-2/3 md:pe-[48px]",
                    children: [v.jsxs("div", {
                        className: "",
                        children: [v.jsxs("div", {
                            className: "gap-2 font-neue text-2xl font-semibold md:leading-3",
                            children: [v.jsx("div", {
                                className: "sm:text-4xl lg:text-[36px]",
                                children: "Let's connect with me ?"
                            }), v.jsx("div", {
                                className: "sm:mt-[18px] lg:text-[36px]",
                                children: "Contact me"
                            })]
                        }), v.jsxs("div", {
                            className: "my-[8px] font-neue text-[12px] text-gray-400 sm:text-[18px] md:my-[23px] lg:text-[18px]",
                            // children: ["I am looking for freelance opportunities or internship ", v.jsx("br", {}), " in startup,agencies or companies."]
                        })]
                    }), v.jsx("div", {
                        className: "w-full",
                        children: v.jsxs("form", {
                            ref: t,
                            onSubmit: a,
                            children: [v.jsxs("div", {
                                className: "flex gap-8",
                                children: [v.jsx("div", {
                                    className: "w-full sm:w-1/2",
                                    children: v.jsx("div", {
                                        className: "mb-5",
                                        children: v.jsx("input", {
                                            type: "text",
                                            name: "fname",
                                            id: "fName",
                                            placeholder: "Your Name",
                                            className: "w-full "
                                        })
                                    })
                                }), v.jsx("div", {
                                    className: "w-full sm:w-1/2",
                                    children: v.jsx("div", {
                                        className: "mb-5",
                                        children: v.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            id: "email",
                                            placeholder: "Your Email",
                                            className: "w-full "
                                        })
                                    })
                                })]
                            }), v.jsx("div", {
                                className: "mt-[8px] flex w-full md:mt-[20px]",
                                children: v.jsx("div", {
                                    className: "w-full",
                                    children: v.jsx("div", {
                                        className: "mb-3 md:mb-5 ",
                                        children: v.jsx("textarea", {
                                            rows: "4",
                                            name: "message",
                                            placeholder: "Your Message",
                                            className: "h-[100px] w-full resize-none md:h-[150px]"
                                        })
                                    })
                                })
                            }), v.jsx("div", {
                                className: "w-full",
                                children: v.jsx("button", {
                                    className: "hover:shadow-form border-1 rounded-[48px] border border-[#e0e0e0] bg-black px-4 py-2 text-center text-base font-semibold text-white duration-200 hover:bg-[#969689] hover:text-black md:px-8 md:py-3 ",
                                    children: "Send Message"
                                })
                            })]
                        })
                    })]
                }), v.jsxs("div", {
                    className: "mt-[20px] space-y-6 font-neue text-[18px] sm:mt-1 sm:space-y-0 md:w-1/3 md:space-y-12",
                    children: [v.jsxs("div", {
                        className: "space-y-1",
                        children: [v.jsx("div", {
                            className: "text-[18px] font-semibold md:text-[22px]",
                            children: "Contact Details"
                        }), v.jsx("div", {
                            className: "text-[14px] md:text-[18px]",
                            children: "2324097@smatalenta.sch.id" // 15796 ngatur bagian contact me bawah
                        }), v.jsx("div", {
                            className: "text-[14px] md:text-[18px]",
                            children: "+62 8121 6359 057"
                        })]
                    }), v.jsxs("div", {
                        className: "space-y-3",
                        children: [v.jsx("div", {
                            className: "text-[18px] font-semibold md:text-[22px]",
                            children: "My Digital Social"
                        }), v.jsxs("a", {
                            target: "_blank",
                            href: "",
                            className: "flex gap-x-2",
                            children: [v.jsx("img", {
                                src: Z1,
                                alt: "",
                                className: "w-[15px] md:w-[24px]"
                            }), v.jsx("div", {
                                className: "text-[14px] md:text-[18px]",
                                children: "Github"
                            })]
                        }), v.jsxs("a", {
                            target: "_blank",
                            href: "https://www.instagram.com/niefarrell08/",
                            className: "flex gap-x-2",
                            children: [v.jsx("img", {
                                src: K1,
                                alt: "",
                                className: "w-[15px] md:w-[24px]"
                            }), v.jsx("div", {
                                className: "text-[14px] md:text-[18px]",
                                children: "Instagram"
                            })]
                        }), v.jsxs("a", {
                            target: "_blank",
                            href: "",
                            className: "flex gap-x-2",
                            children: [v.jsx("img", {
                                src: G1,
                                alt: "",
                                className: "w-[15px] md:w-[24px]"
                            }), v.jsx("div", {
                                className: "text-[14px] md:text-[18px]",
                                children: "Linkedin"
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "space-y-1",
                        children: [v.jsx("div", {
                            className: "text-[18px] font-semibold md:text-[22px]",
                            children: "Location"
                        }), v.jsx("div", {
                            className: "text-[14px] md:text-[18px]",
                            children: "Jawa Barat, Bandung Indonesian" // 15850 ngatur jabar, bdg indo
                        }), v.jsx("div", {
                            className: "text-[14px] md:text-[18px]",
                            children: v.jsx("div", {
                                children: v.jsxs("p", {
                                    children: [s, " | ", u]
                                })
                            })
                        })]
                    })]
                })]
            })]
        })]
    })
}
;
function Iw() {
    Mn( () => {
        G.from("#sayhi", {
            scrollTrigger: {
                trigger: "#section5",
                start: "top +=550",
                end: "top +=550",
                once: !0
            },
            opacity: 0,
            duration: .6,
            ease: "power3.inOut",
            y: 80
        })
    }
    );
    const t = e => {
        G.to(window, {
            duration: 1,
            scrollTo: {
                y: `${e}`,
                offset: 70
            }
        })
    }
    ;
    return v.jsxs("div", {
        className: "relative mt-[7%]",
        children: [v.jsx("div", {
            className: "relative z-10 overflow-hidden text-center font-hkgro text-6xl font-black sm:text-5xl md:text-7xl lg:text-9xl",
            children: v.jsx("div", {
                id: "sayhi",
                children: "SAY HI!"
            })
        }), v.jsxs("div", {
            className: "3xl:px-[10%] 3xl:pb-16 relative z-[3] px-6 pb-8 pt-6 font-neue sm:px-[4%] sm:pt-[5%]",
            children: [v.jsxs("div", {
                className: "grid grid-cols-2 gap-x-[1.5rem] gap-y-7 md:grid-cols-12 lg:gap-x-[2.5rem] lg:gap-y-10",
                children: [v.jsxs("div", {
                    className: " flex flex-col md:col-span-6 lg:col-span-6",
                    children: [v.jsx("span", {
                        className: "link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1 font-bold uppercase",
                        children: "Navigation"
                    }), v.jsxs("div", {
                        className: "flex flex-col gap-y-2 md:gap-y-1",
                        children: [v.jsx("a", {
                            className: " link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            children: v.jsx("div", {
                                className: "navfooter cursor-pointer",
                                onClick: () => t("#section1"),
                                children: "Home"
                            })
                        }), v.jsx("a", {
                            className: "link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            children: v.jsx("div", {
                                onClick: () => t("#section2"),
                                className: "navfooter cursor-pointer",
                                children: "About"
                            })
                        }), v.jsx("a", {
                            className: " link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            children: v.jsx("div", {
                                onClick: () => t("#section3"),
                                className: "navfooter cursor-pointer",
                                children: "Treatment"
                            })
                        }), v.jsx("a", {
                            className: " link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            children: v.jsx("div", {
                                onClick: () => t("#section4"),
                                className: "navfooter cursor-pointer",
                                children: "Contact"
                            })
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "flex flex-col md:col-span-3 lg:col-span-3",
                    children: [v.jsx("span", {
                        className: "link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1  font-bold uppercase",
                        children: "Socials"
                    }), v.jsxs("div", {
                        className: "flex flex-col gap-y-2 md:gap-y-1",
                        children: [v.jsx("a", {
                            target: "_blank",
                            className: "link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            href: "",
                            children: v.jsx("div", {
                                className: "link1 navfooter",
                                children: "Linkedin"
                            })
                        }), v.jsx("a", {
                            target: "_blank",
                            className: "link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            href: "https://www.instagram.com/niefarrell08/",
                            children: v.jsx("div", {
                                className: "link1 navfooter",
                                children: "Instagram"
                            })
                        }), v.jsx("a", {
                            target: "_blank",
                            className: "link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            href: "",
                            children: v.jsx("div", {
                                className: "link1 navfooter",
                                children: "Github"
                            })
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "col-span-2 flex flex-col md:col-span-3 lg:col-span-3",
                    children: [v.jsx("span", {
                        className: "link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1  font-bold uppercase",
                        children: "Location"
                    }), v.jsxs("div", {
                        className: "flex flex-col gap-y-2 md:gap-y-1",
                        children: [v.jsx("div", {
                            className: "link-text ledivding-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            children: v.jsx("span", {
                                className: "link1",
                                children: "Bandung"
                            })
                        }), v.jsx("div", {
                            className: "link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium",
                            children: v.jsx("span", {
                                className: "link1",
                                children: "Indonesia"
                            })
                        })]
                    })]
                })]
            }), v.jsxs("div", {
                className: "grid-gap mt-7 grid grid-cols-1 items-end font-hkgro sm:mt-12 sm:grid-cols-12",
                children: [v.jsxs("span", {
                    className: "tracking-heading text-secondary-300 order-last col-span-8 text-[2.5rem] font-bold leading-[85%] sm:order-first sm:text-[3.5rem] md:col-span-6 lg:col-span-6 lg:text-[5rem]",
                    children: ["© 2024", v.jsx("br", {
                        className: "block"
                    }), "MENTAL HEALT"]
                }), v.jsx("div", {
                    className: "link-text col-span-4 flex flex-col text-[1.2rem] sm:text-[1.6rem] lg:text-[2.3rem]",
                    children: v.jsx("span", {
                        className: "text-secondary-300 font-bold uppercase",
                        children: "ALL RIGHT RESERVED"
                    })
                })]
            })]
        }), v.jsx("div", {
            className: "photocover absolute bottom-[-80px] left-0 right-0 z-[1] mx-auto h-[300px] w-[300px] rounded-full bg-cover bg-center bg-no-repeat sm:-bottom-2/3 md:-bottom-1/4 lg:-bottom-1/3 lg:h-[400px] lg:w-[400px] xl:h-[550px] xl:w-[550px]"
        })]
    })
}
const du = ({img: t, link: e, name: n, brand: r, children: i, stylecustom: l, id: o, layouttext: s, text: u, tools: a}) => (G.registerPlugin(Y),
Mn( () => {
    G.set(`#${u}`, {
        visibility: "hidden"
    }),
    G.from(`.${s}`, {
        scrollTrigger: {
            trigger: `#${o}`,
            start: "-=370"
        },
        duration: .3,
        right: "100%",
        ease: "power3.in"
    }),
    G.set(`#${u}`, {
        scrollTrigger: {
            trigger: `#${o}`,
            start: "-=370"
        },
        visibility: "visible",
        delay: .3
    }),
    G.to(`.${s}`, {
        scrollTrigger: {
            trigger: `#${o}`,
            start: "-=370"
        },
        duration: .4,
        left: "100%",
        ease: "power3.easeOut",
        delay: .6
    }),
    G.set(`.${s}`, {
        scrollTrigger: {
            trigger: `#${o}`,
            start: "-=370"
        },
        visibility: "hidden",
        delay: 1.8
    })
}
),
v.jsxs("div", {
    id: o,
    className: " grid grid-cols-12 items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]",
    children: [v.jsxs("div", {
        className: "col-span-12 lg:col-span-5",
        children: [v.jsxs("div", {
            className: "relative w-fit overflow-hidden text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]",
            children: [v.jsx("p", {
                id: u,
                children: n
            }), v.jsx("div", {
                className: s
            })]
        }), v.jsxs("div", {
            className: "relative mb-[20px] mt-[5px] flex w-fit flex-wrap gap-2 overflow-hidden text-lg font-normal text-slate-950",
            children: [a.map(c => v.jsx("div", {
                id: u,
                className: "rounded-full bg-gray-100 px-2",
                // children: c
            }, c)), v.jsx("div", {
                className: s
            })]
        }), v.jsx("div", {
            className: "relative w-fit overflow-hidden text-[18px] text-gray-500 sm:text-[18px]",
            children: v.jsxs("a", {
                href: e,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [v.jsx("p", {
                    id: u,
                    // children: e
                }), v.jsx("div", {
                    // className: s
                })]
            })
        }), v.jsxs("div", {
            className: "relative flex w-fit gap-x-1 overflow-hidden text-[20px] font-medium sm:my-[12px] sm:text-[28px] lg:text-[24px] xl:gap-x-[12px] xl:text-[32px]",
            children: [v.jsx("div", {
                id: u,
                // children: r
            }), v.jsx("div", {
                id: u,
                
            }), v.jsx("div", {
                id: u,
                children: "Digitalization depression, a relatively new phenomenon, refers to the negative psychological impact of excessive internet and social media use on young people. It can manifest in various ways, including" // 16103 ngatur bagian setelah about me
            }), v.jsx("div", {
                className: s
            })]
        }), v.jsx("div", {
            children: v.jsxs("div", {
                className: "relative w-fit overflow-hidden text-[18px] sm:text-xl lg:text-[20px] xl:text-2xl",
                children: [v.jsx("p", {
                    id: u,
                    children: i
                }), v.jsx("div", {
                    className: s
                })]
            })
        })]
    }), v.jsx("div", {
        // className: "col-span-12 me-[-50%] overflow-hidden rounded-2xl border-2 border-white lg:col-span-7 lg:me-[-35%] xl:me-[-50%]",
        children: v.jsx("div", {
            // className: "h-[249px] w-[404px] sm:h-[531px] sm:w-[861px] lg:h-[448px] lg:w-[726] xl:h-[531px] xl:w-[861px]",
            children: v.jsx("a", {
                href: e,
                target: "_blank",
                // rel: "noopener noreferrer",
                children: v.jsx("img", {
                    src: t,
                    // className: "h-[249px] w-[404px] sm:h-[531px] sm:w-[861px] lg:h-[448px] lg:w-[726] xl:h-[531px] xl:w-[861px]"
                })
            })
        })
    })]
}))
    // 16134 asset foto"
  , Fw = "/assets/project1-BoI5klZc.png"
  , Bw = "/assets/project2-DZd0SroM.png"
  , Uw = "/assets/project32-Bg6-TAkd.png"
  , $w = "/assets/project4-DK67Hul7.png"
  , bw = "/assets/project5-CPGOJksS.png"
  , Vw = () => (G.registerPlugin(Y),
Mn( () => {
    G.from("#section_1", {
        scrollTrigger: {
            trigger: "#section2",
            start: "+=100",
            scrub: 1
        },
        y: 200
    }),
    G.from(".text-project", {
        scrollTrigger: {
            trigger: "#section_1",
            start: "-=500"
        },
        y: 300,
        duration: 1,
        ease: "power3.inOut"
    }, "+=1.5"),
    G.to("#section_1", {
        scrollTrigger: {
            trigger: "#lastProject",
            start: "center center",
            end: "bottom",
            scrub: 1
        },
        scale: .95
    }),
    G.set("#textfive", {
        visibility: "hidden"
    }),
    G.from(".layoutlast", {
        scrollTrigger: {
            trigger: "#lastProject",
            start: "-=370"
        },
        duration: .3,
        right: "100%",
        ease: "power3.in"
    }),
    G.set("#textfive", {
        scrollTrigger: {
            trigger: "#lastProject",
            start: "-=370"
        },
        visibility: "visible",
        delay: .3
    }),
    G.to(".layoutlast", {
        scrollTrigger: {
            trigger: "#lastProject",
            start: "-=370"
        },
        duration: .4,
        left: "100%",
        ease: "power3.easeOut",
        delay: .6
    }),
    G.set(".layoutlast", {
        scrollTrigger: {
            trigger: "#lastProject",
            start: "-=370"
        },
        visibility: "hidden",
        delay: 1.8
    })
}
),
v.jsx("div", {
    id: "section_1",
    className: "relative z-[99] flex rounded-3xl bg-black px-[1.5rem] py-[3.5rem] sm:px-[4%] sm:py-[5%]",
    children: v.jsxs("div", {
        className: "w-full text-[#d1d1c7]",
        children: [v.jsx("div", {
            className: "font-neue text-[38px] font-bold leading-[1.2] sm:text-[84px] lg:text-[96px]",
            children: v.jsx("div", {
                // className: "text-project border-b-2 border-red pb-2 sm:pb-3 lg:pb-6",
                children: "About Mental Health"
            })
        }), v.jsxs("div", {
            id: "lastProject",
            className: "items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]",
            children: [v.jsxs("div", {
                className: "col-span-12 lg:col-span-5",
                children: [v.jsxs("div", {
                    className: "relative w-fit overflow-hidden text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]",
                    children: [v.jsx("p", {
                        id: "textfive",
                        children: "Explanation"
                    }), v.jsx("div", {
                        className: "layoutlast"
                    })]
                }), v.jsx("div", {
                    children: v.jsxs("div", {
                        className: "relative w-fit overflow-hidden text-[12px] sm:text-xl lg:text-[20px] xl:text-2xl",
                        children: [v.jsx("p", {
                            id: "textfive",
                            children: "Digitalization depression, a relatively new phenomenon, refers to the negative psychological impact of excessive internet and social media use on young people. It can manifest in various ways, including: "
                        }), v.jsx("div", {
                            children: "Anxiety and depression: Excessive social media use can trigger anxiety and depression, particularly if teens experience cyberbullying or negative online comments. "
                            
                        }), v.jsx("div", {
                            children: "Sleep disturbances: The blue light emitted from screens can disrupt sleep patterns, contributing to mood disorders."
                        })], 
                    })
                })], 
            }), 
            
            v.jsx("div", {

            })]
        }),
        
        v.jsxs("div", {
            id: "lastProject",
            className: "items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]",
            children: [v.jsxs("div", {
                className: "col-span-12 lg:col-span-5",
                children: [v.jsxs("div", {
                    className: "relative w-fit overflow-hidden text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]",
                    children: [v.jsx("p", {
                        id: "textfive",
                        children: "Solution"
                    }), v.jsx("div", {
                        className: "layoutlast"
                    })]
                }), v.jsx("div", {
                    children: v.jsxs("div", {
                        className: "relative w-fit overflow-hidden text-[12px] sm:text-xl lg:text-[20px] xl:text-2xl",
                        children: [v.jsx("p", {
                            id: "textfive",
                            children: "Addressing digitalization depression requires a multifaceted approach involving individuals, families, schools, and technology companies. Here are some key strategies: "
                        }), v.jsx("div", {
                            children: "Digital Detox: Encourage teens to take regular breaks from screens, engaging in activities that promote physical and mental well-being, such as outdoor pursuits, hobbies, and face-to-face interactions. "
                        })]
                    })
                })]
            }), 
            
            v.jsx("div", {

            })]
        })]
    })
}));
function Hw() {
    const t = G.timeline();
    return G.registerPlugin(Y),
    Mn( () => {
        Y.create({
            trigger: "#section2",
            start: "center",
            pin: !0,
            pinSpacing: !1
        })
    }
    ),
    v.jsx("div", {
        id: "body",
        children: v.jsxs("div", {
            className: "m-auto w-full max-w-[1440px] overflow-hidden",
            children: [v.jsx(Gx, {
                time: t
            }), v.jsxs("section", {
                id: "section1",
                className: "flex flex-col",
                children: [v.jsx(yw, {
                    time: t
                }), v.jsx(Zx, {
                    time: t
                })]
            }), v.jsx(xw, {}), v.jsx("section", {
                id: "section2",
                className: "h-[820px] sm:h-max",
                children: v.jsx(kw, {})
            }), v.jsx("div", {
                id: "section3",
                children: v.jsx(Vw, {})
            }), v.jsx("section", {
                id: "section4",
                children: v.jsx(Aw, {})
            }), v.jsx("div", {
                id: "section5",
                children: v.jsx(Iw, {})
            })]
        })
    })
}
Cc.createRoot(document.getElementById("root")).render(v.jsx(k_.StrictMode, {
    children: v.jsx(Hw, {})
}));
