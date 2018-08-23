var oneweb_extension_requirejs_configs = {
    paths: {
        core: "extensions/com.allianz.cms.oneweb_oneweb-base-components/ajax_solr/core",
        widgets: "extensions/com.allianz.cms.oneweb_oneweb-base-components/ajax_solr/widgets",
        managers: "extensions/com.allianz.cms.oneweb_oneweb-base-components/ajax_solr/managers",
        oneweb: "extensions/com.allianz.cms.oneweb_oneweb-base-components/oneweb/widgets",
        search: "extensions/com.allianz.cms.oneweb_oneweb-base-components/oneweb/search",
        utils: "extensions/com.allianz.cms.oneweb_oneweb-base-components/oneweb/utils",
        ext: "extensions/com.allianz.cms.oneweb_oneweb-base-components/ext",
        "[jquery]": "extensions/com.allianz.cms.oneweb_oneweb-base-components/[jquery]"
    }
},
requirejs, require, define;
! function(global) {
function isFunction(l) {
    return "[object Function]" === ostring.call(l)
}

function isArray(l) {
    return "[object Array]" === ostring.call(l)
}

function each(l, e) {
    if (l) {
        var t;
        for (t = 0; t < l.length && (!l[t] || !e(l[t], t, l)); t += 1);
    }
}

function eachReverse(l, e) {
    if (l) {
        var t;
        for (t = l.length - 1; t > -1 && (!l[t] || !e(l[t], t, l)); t -= 1);
    }
}

function hasProp(l, e) {
    return hasOwn.call(l, e)
}

function getOwn(l, e) {
    return hasProp(l, e) && l[e]
}

function eachProp(l, e) {
    var t;
    for (t in l)
        if (hasProp(l, t) && e(l[t], t)) break
}

function mixin(l, e, t, n) {
    return e && eachProp(e, function(e, i) {
        (t || !hasProp(l, i)) && (n && "string" != typeof e ? (l[i] || (l[i] = {}), mixin(l[i], e, t, n)) : l[i] = e)
    }), l
}

function bind(l, e) {
    return function() {
        return e.apply(l, arguments)
    }
}

function scripts() {
    return document.getElementsByTagName("script")
}

function defaultOnError(l) {
    throw l
}

function getGlobal(l) {
    if (!l) return l;
    var e = global;
    return each(l.split("."), function(l) {
        e = e[l]
    }), e
}

function makeError(l, e, t, n) {
    console.log(arguments);
    var i = new Error(e + "\nhttp://requirejs.org/docs/errors.html#" + l);
    return i.requireType = l, i.requireModules = n, t && (i.originalError = t), i
}

function newContext(l) {
    function e(l) {
        var e, t;
        for (e = 0; l[e]; e += 1)
            if (t = l[e], "." === t) l.splice(e, 1), e -= 1;
            else if (".." === t) {
            if (1 === e && (".." === l[2] || ".." === l[0])) break;
            e > 0 && (l.splice(e - 1, 2), e -= 2)
        }
    }

    function t(l, t, n) {
        var i, a, r, o, s, c, u, d, f, h, p, m = t && t.split("/"),
            g = m,
            v = k.map,
            y = v && v["*"];
        if (l && "." === l.charAt(0) && (t ? (g = getOwn(k.pkgs, t) ? m = [t] : m.slice(0, m.length - 1), l = g.concat(l.split("/")), e(l), a = getOwn(k.pkgs, i = l[0]), l = l.join("/"), a && l === i + "/" + a.main && (l = i)) : 0 === l.indexOf("./") && (l = l.substring(2))), n && v && (m || y)) {
            for (o = l.split("/"), s = o.length; s > 0; s -= 1) {
                if (u = o.slice(0, s).join("/"), m)
                    for (c = m.length; c > 0; c -= 1)
                        if (r = getOwn(v, m.slice(0, c).join("/")), r && (r = getOwn(r, u))) {
                            d = r, f = s;
                            break
                        }
                if (d) break;
                !h && y && getOwn(y, u) && (h = getOwn(y, u), p = s)
            }!d && h && (d = h, f = p), d && (o.splice(0, f, d), l = o.join("/"))
        }
        return l
    }

    function n(l) {
        isBrowser && each(scripts(), function(e) {
            return e.getAttribute("data-requiremodule") === l && e.getAttribute("data-requirecontext") === M.contextName ? (e.parentNode.removeChild(e), !0) : void 0
        })
    }

    function i(l) {
        var e = getOwn(k.paths, l);
        if (!(e && isArray(e) && e.length > 1)) {
            var t = l.split("/"),
                i = t.shift();
            k.paths[i] && (k.paths[l] = k.paths[i] + "/" + t[0] + "/" + t[0]), e = [getOwn(k.paths, l)]
        }
        return e && isArray(e) && e.length > 1 ? (n(l), e.shift(), M.require.undef(l), M.require([l]), !0) : void 0
    }

    function a(l) {
        var e, t = l ? l.indexOf("!") : -1;
        return t > -1 && (e = l.substring(0, t), l = l.substring(t + 1, l.length)), [e, l]
    }

    function r(l, e, n, i) {
        var r, o, s, c, u = null,
            d = e ? e.name : null,
            f = l,
            h = !0,
            p = "";
        return l || (h = !1, l = "_@r" + (T += 1)), c = a(l), u = c[0], l = c[1], u && (u = t(u, d, i), o = getOwn(_, u)), l && (u ? p = o && o.normalize ? o.normalize(l, function(l) {
            return t(l, d, i)
        }) : t(l, d, i) : (p = t(l, d, i), c = a(p), u = c[0], p = c[1], n = !0, r = M.nameToUrl(p))), s = !u || o || n ? "" : "_unnormalized" + (A += 1), {
            prefix: u,
            name: p,
            parentMap: e,
            unnormalized: !!s,
            url: r,
            originalName: f,
            isDefine: h,
            id: (u ? u + "!" + p : p) + s
        }
    }

    function o(l) {
        var e = l.id,
            t = getOwn(Z, e);
        return t || (t = Z[e] = new M.Module(l)), t
    }

    function s(l, e, t) {
        var n = l.id,
            i = getOwn(Z, n);
        !hasProp(_, n) || i && !i.defineEmitComplete ? (i = o(l), i.error && "error" === e ? t(i.error) : i.on(e, t)) : "defined" === e && t(_[n])
    }

    function c(l, e) {
        var t = l.requireModules,
            n = !1;
        e ? e(l) : (each(t, function(e) {
            var t = getOwn(Z, e);
            t && (t.error = l, t.events.error && (n = !0, t.emit("error", l)))
        }), n || req.onError(l))
    }

    function u() {
        globalDefQueue.length && (apsp.apply(j, [j.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
    }

    function d(l) {
        delete Z[l], delete C[l]
    }

    function f(l, e, t) {
        var n = l.map.id;
        l.error ? l.emit("error", l.error) : (e[n] = !0, each(l.depMaps, function(n, i) {
            var a = n.id,
                r = getOwn(Z, a);
            !r || l.depMatched[i] || t[a] || (getOwn(e, a) ? (l.defineDep(i, _[a]), l.check()) : f(r, e, t))
        }), t[n] = !0)
    }

    function h() {
        var l, e, t, a, r = 1e3 * k.waitSeconds,
            o = r && M.startTime + r < (new Date).getTime(),
            s = [],
            u = [],
            d = !1,
            p = !0;
        if (!y) {
            if (y = !0, eachProp(C, function(t) {
                    if (l = t.map, e = l.id, t.enabled && (l.isDefine || u.push(t), !t.error))
                        if (!t.inited && o) i(e) ? (a = !0, d = !0) : (s.push(e), n(e));
                        else if (!t.inited && t.fetched && l.isDefine && (d = !0, !l.prefix)) return p = !1
                }), o && s.length) return t = makeError("timeout", "Load timeout for modules: " + s, null, s), t.contextName = M.contextName, c(t);
            p && each(u, function(l) {
                f(l, {}, {})
            }), o && !a || !d || !isBrowser && !isWebWorker || x || (x = setTimeout(function() {
                x = 0, h()
            }, 50)), y = !1
        }
    }

    function p(l) {
        hasProp(_, l[0]) || o(r(l[0], null, !0)).init(l[1], l[2])
    }

    function m(l, e, t, n) {
        l.detachEvent && !isOpera ? n && l.detachEvent(n, e) : l.removeEventListener(t, e, !1)
    }

    function g(l) {
        var e = l.currentTarget || l.srcElement;
        return m(e, M.onScriptLoad, "load", "onreadystatechange"), m(e, M.onScriptError, "error"), {
            node: e,
            id: e && e.getAttribute("data-requiremodule")
        }
    }

    function v() {
        var l;
        for (u(); j.length;) {
            if (l = j.shift(), null === l[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + l[l.length - 1]));
            p(l)
        }
    }
    var y, b, M, w, x, k = {
            waitSeconds: 30,
            baseUrl: "./",
            paths: {},
            pkgs: {},
            shim: {},
            config: {}
        },
        Z = {},
        C = {},
        S = {},
        j = [],
        _ = {},
        E = {},
        T = 1,
        A = 1;
    return w = {
        require: function(l) {
            return l.require ? l.require : l.require = M.makeRequire(l.map)
        },
        exports: function(l) {
            return l.usingExports = !0, l.map.isDefine ? l.exports ? l.exports : l.exports = _[l.map.id] = {} : void 0
        },
        module: function(l) {
            return l.module ? l.module : l.module = {
                id: l.map.id,
                uri: l.map.url,
                config: function() {
                    var e, t = getOwn(k.pkgs, l.map.id);
                    return e = t ? getOwn(k.config, l.map.id + "/" + t.main) : getOwn(k.config, l.map.id), e || {}
                },
                exports: _[l.map.id]
            }
        }
    }, b = function(l) {
        this.events = getOwn(S, l.id) || {}, this.map = l, this.shim = getOwn(k.shim, l.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
    }, b.prototype = {
        init: function(l, e, t, n) {
            n = n || {}, this.inited || (this.factory = e, t ? this.on("error", t) : this.events.error && (t = bind(this, function(l) {
                this.emit("error", l)
            })), this.depMaps = l && l.slice(0), this.errback = t, this.inited = !0, this.ignore = n.ignore, n.enabled || this.enabled ? this.enable() : this.check())
        },
        defineDep: function(l, e) {
            this.depMatched[l] || (this.depMatched[l] = !0, this.depCount -= 1, this.depExports[l] = e)
        },
        fetch: function() {
            if (!this.fetched) {
                this.fetched = !0, M.startTime = (new Date).getTime();
                var l = this.map;
                return this.shim ? void M.makeRequire(this.map, {
                    enableBuildCallback: !0
                })(this.shim.deps || [], bind(this, function() {
                    return l.prefix ? this.callPlugin() : this.load()
                })) : l.prefix ? this.callPlugin() : this.load()
            }
        },
        load: function() {
            var l = this.map.url;
            E[l] || (E[l] = !0, M.load(this.map.id, l))
        },
        check: function() {
            if (this.enabled && !this.enabling) {
                var l, e, t = this.map.id,
                    n = this.depExports,
                    i = this.exports,
                    a = this.factory;
                if (this.inited) {
                    if (this.error) this.emit("error", this.error);
                    else if (!this.defining) {
                        if (this.defining = !0, this.depCount < 1 && !this.defined) {
                            if (isFunction(a)) {
                                if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                    i = M.execCb(t, a, n, i)
                                } catch (r) {
                                    l = r
                                } else i = M.execCb(t, a, n, i);
                                if (this.map.isDefine && (e = this.module, e && void 0 !== e.exports && e.exports !== this.exports ? i = e.exports : void 0 === i && this.usingExports && (i = this.exports)), l) return l.requireMap = this.map, l.requireModules = this.map.isDefine ? [this.map.id] : null, l.requireType = this.map.isDefine ? "define" : "require", c(this.error = l)
                            } else i = a;
                            this.exports = i, this.map.isDefine && !this.ignore && (_[t] = i, req.onResourceLoad && req.onResourceLoad(M, this.map, this.depMaps)), d(t), this.defined = !0
                        }
                        this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                    }
                } else this.fetch()
            }
        },
        callPlugin: function() {
            var l = this.map,
                e = l.id,
                n = r(l.prefix);
            this.depMaps.push(n), s(n, "defined", bind(this, function(n) {
                var i, a, u, f = this.map.name,
                    h = this.map.parentMap ? this.map.parentMap.name : null,
                    p = M.makeRequire(l.parentMap, {
                        enableBuildCallback: !0
                    });
                return this.map.unnormalized ? (n.normalize && (f = n.normalize(f, function(l) {
                    return t(l, h, !0)
                }) || ""), a = r(l.prefix + "!" + f, this.map.parentMap), s(a, "defined", bind(this, function(l) {
                    this.init([], function() {
                        return l
                    }, null, {
                        enabled: !0,
                        ignore: !0
                    })
                })), u = getOwn(Z, a.id), void(u && (this.depMaps.push(a), this.events.error && u.on("error", bind(this, function(l) {
                    this.emit("error", l)
                })), u.enable()))) : (i = bind(this, function(l) {
                    this.init([], function() {
                        return l
                    }, null, {
                        enabled: !0
                    })
                }), i.error = bind(this, function(l) {
                    this.inited = !0, this.error = l, l.requireModules = [e], eachProp(Z, function(l) {
                        0 === l.map.id.indexOf(e + "_unnormalized") && d(l.map.id)
                    }), c(l)
                }), i.fromText = bind(this, function(t, n) {
                    var a = l.name,
                        s = r(a),
                        u = useInteractive;
                    n && (t = n), u && (useInteractive = !1), o(s), hasProp(k.config, e) && (k.config[a] = k.config[e]);
                    try {
                        req.exec(t)
                    } catch (d) {
                        return c(makeError("fromtexteval", "fromText eval for " + e + " failed: " + d, d, [e]))
                    }
                    u && (useInteractive = !0), this.depMaps.push(s), M.completeLoad(a), p([a], i)
                }), void n.load(l.name, p, i, k))
            })), M.enable(n, this), this.pluginMaps[n.id] = n
        },
        enable: function() {
            C[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(l, e) {
                var t, n, i;
                if ("string" == typeof l) {
                    if (l = r(l, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[e] = l, i = getOwn(w, l.id)) return void(this.depExports[e] = i(this));
                    this.depCount += 1, s(l, "defined", bind(this, function(l) {
                        this.defineDep(e, l), this.check()
                    })), this.errback && s(l, "error", bind(this, this.errback))
                }
                t = l.id, n = Z[t], hasProp(w, t) || !n || n.enabled || M.enable(l, this)
            })), eachProp(this.pluginMaps, bind(this, function(l) {
                var e = getOwn(Z, l.id);
                e && !e.enabled && M.enable(l, this)
            })), this.enabling = !1, this.check()
        },
        on: function(l, e) {
            var t = this.events[l];
            t || (t = this.events[l] = []), t.push(e)
        },
        emit: function(l, e) {
            each(this.events[l], function(l) {
                l(e)
            }), "error" === l && delete this.events[l]
        }
    }, M = {
        config: k,
        contextName: l,
        registry: Z,
        defined: _,
        urlFetched: E,
        defQueue: j,
        Module: b,
        makeModuleMap: r,
        nextTick: req.nextTick,
        onError: c,
        configure: function(l) {
            l.baseUrl && "/" !== l.baseUrl.charAt(l.baseUrl.length - 1) && (l.baseUrl += "/");
            var e = k.pkgs,
                t = k.shim,
                n = {
                    paths: !0,
                    config: !0,
                    map: !0
                };
            eachProp(l, function(l, e) {
                n[e] ? "map" === e ? (k.map || (k.map = {}), mixin(k[e], l, !0, !0)) : mixin(k[e], l, !0) : k[e] = l
            }), l.shim && (eachProp(l.shim, function(l, e) {
                isArray(l) && (l = {
                    deps: l
                }), !l.exports && !l.init || l.exportsFn || (l.exportsFn = M.makeShimExports(l)), t[e] = l
            }), k.shim = t), l.packages && (each(l.packages, function(l) {
                var t;
                l = "string" == typeof l ? {
                    name: l
                } : l, t = l.location, e[l.name] = {
                    name: l.name,
                    location: t || l.name,
                    main: (l.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }
            }), k.pkgs = e), eachProp(Z, function(l, e) {
                l.inited || l.map.unnormalized || (l.map = r(e))
            }), (l.deps || l.callback) && M.require(l.deps || [], l.callback)
        },
        makeShimExports: function(l) {
            function e() {
                var e;
                return l.init && (e = l.init.apply(global, arguments)), e || l.exports && getGlobal(l.exports)
            }
            return e
        },
        makeRequire: function(e, n) {
            function i(t, a, s) {
                var u, d, f;
                return n.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0), "string" == typeof t ? isFunction(a) ? c(makeError("requireargs", "Invalid require call"), s) : e && hasProp(w, t) ? w[t](Z[e.id]) : req.get ? req.get(M, t, e, i) : (d = r(t, e, !1, !0), u = d.id, hasProp(_, u) ? _[u] : c(makeError("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + l + (e ? "" : ". Use require([])")))) : (v(), M.nextTick(function() {
                    v(), f = o(r(null, e)), f.skipMap = n.skipMap, f.init(t, a, s, {
                        enabled: !0
                    }), h()
                }), i)
            }
            return n = n || {}, mixin(i, {
                isBrowser: isBrowser,
                toUrl: function(l) {
                    var n, i = l.lastIndexOf("."),
                        a = l.split("/")[0],
                        r = "." === a || ".." === a;
                    return -1 !== i && (!r || i > 1) && (n = l.substring(i, l.length), l = l.substring(0, i)), M.nameToUrl(t(l, e && e.id, !0), n, !0)
                },
                defined: function(l) {
                    return hasProp(_, r(l, e, !1, !0).id)
                },
                specified: function(l) {
                    return l = r(l, e, !1, !0).id, hasProp(_, l) || hasProp(Z, l)
                }
            }), e || (i.undef = function(l) {
                u();
                var t = r(l, e, !0),
                    n = getOwn(Z, l);
                delete _[l], delete E[t.url], delete S[l], n && (n.events.defined && (S[l] = n.events), d(l))
            }), i
        },
        enable: function(l) {
            var e = getOwn(Z, l.id);
            e && o(l).enable()
        },
        completeLoad: function(l) {
            var e, t, n, a = getOwn(k.shim, l) || {},
                r = a.exports;
            for (u(); j.length;) {
                if (t = j.shift(), null === t[0]) {
                    if (t[0] = l, e) break;
                    e = !0
                } else t[0] === l && (e = !0);
                p(t)
            }
            if (n = getOwn(Z, l), !e && !hasProp(_, l) && n && !n.inited) {
                if (!(!k.enforceDefine || r && getGlobal(r))) return i(l) ? void 0 : c(makeError("nodefine", "No define call for " + l, null, [l]));
                p([l, a.deps || [], a.exportsFn])
            }
            h()
        },
        nameToUrl: function(l, e, t) {
            var n, i, a, r, o, s, c, u, d;
            if (req.jsExtRegExp.test(l)) u = l + (e || "");
            else {
                for (n = k.paths, i = k.pkgs, o = l.split("/"), s = o.length; s > 0; s -= 1) {
                    if (c = o.slice(0, s).join("/"), a = getOwn(i, c), d = getOwn(n, c)) {
                        isArray(d) && (d = d[0]), o.splice(0, s, d);
                        break
                    }
                    if (a) {
                        r = l === a.name ? a.location + "/" + a.main : a.location, o.splice(0, s, r);
                        break
                    }
                }
                o.length > 1 && -1 != o[0].indexOf("presentation") && o.push(o[1]), u = o.join("/"), u += e || (/\?/.test(u) || t ? "" : ".js"), u = ("/" === u.charAt(0) || u.match(/^[\w\+\.\-]+:/) ? "" : k.baseUrl) + u
            }
            return k.urlArgs ? u + ((-1 === u.indexOf("?") ? "?" : "&") + k.urlArgs) : u
        },
        load: function(l, e) {
            req.load(M, l, e)
        },
        execCb: function(l, e, t, n) {
            return e.apply(n, t)
        },
        onScriptLoad: function(l) {
            if ("load" === l.type || readyRegExp.test((l.currentTarget || l.srcElement).readyState)) {
                interactiveScript = null;
                var e = g(l);
                M.completeLoad(e.id)
            }
        },
        onScriptError: function(l) {
            var e = g(l);
            return i(e.id) ? void 0 : c(makeError("scripterror", "Script error for: " + e.id, l, [e.id]))
        }
    }, M.require = M.makeRequire(), M
}

function getInteractiveScript() {
    return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(l) {
        return "interactive" === l.readyState ? interactiveScript = l : void 0
    }), interactiveScript)
}
var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.8",
    commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    ap = Array.prototype,
    apsp = ap.splice,
    isBrowser = !("undefined" == typeof window || !navigator || !window.document),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
    defContextName = "_",
    isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;
if ("undefined" == typeof define) {
    if ("undefined" != typeof requirejs) {
        if (isFunction(requirejs)) return;
        cfg = requirejs, requirejs = void 0
    }
    "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(l, e, t, n) {
        var i, a, r = defContextName;
        return isArray(l) || "string" == typeof l || (a = l, isArray(e) ? (l = e, e = t, t = n) : l = []), a && a.context && (r = a.context), i = getOwn(contexts, r), i || (i = contexts[r] = req.s.newContext(r)), a && i.configure(a), i.require(l, e, t)
    }, req.config = function(l) {
        return req(l)
    }, req.nextTick = "undefined" != typeof setTimeout ? function(l) {
        setTimeout(l, 4)
    } : function(l) {
        l()
    }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
        contexts: contexts,
        newContext: newContext
    }, req({}), each(["toUrl", "undef", "defined", "specified"], function(l) {
        req[l] = function() {
            var e = contexts[defContextName];
            return e.require[l].apply(e, arguments)
        }
    }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(l) {
        var e = l.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
        return e.type = l.scriptType || "text/javascript", e.charset = "utf-8", e.async = !0, e
    }, req.load = function(l, e, t) {
        var n, i = l && l.config || {};
        if (isBrowser) return n = req.createNode(i, e, t), n.setAttribute("data-requirecontext", l.contextName), n.setAttribute("data-requiremodule", e), !n.attachEvent || n.attachEvent.toString && n.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (n.addEventListener("load", l.onScriptLoad, !1), n.addEventListener("error", l.onScriptError, !1)) : (useInteractive = !0, n.attachEvent("onreadystatechange", l.onScriptLoad)), n.src = t, currentlyAddingScript = n, baseElement ? head.insertBefore(n, baseElement) : head.appendChild(n), currentlyAddingScript = null, n;
        if (isWebWorker) try {
            importScripts(t), l.completeLoad(e)
        } catch (a) {
            l.onError(makeError("importscripts", "importScripts failed for " + e + " at " + t, a, [e]))
        }
    }, isBrowser && eachReverse(scripts(), function(l) {
        return head || (head = l.parentNode), dataMain = l.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
    }), define = function(l, e, t) {
        var n, i;
        "string" != typeof l && (t = e, e = l, l = null), isArray(e) || (t = e, e = null), !e && isFunction(t) && (e = [], t.length && (t.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(l, t) {
            e.push(t)
        }), e = (1 === t.length ? ["require"] : ["require", "exports", "module"]).concat(e))), useInteractive && (n = currentlyAddingScript || getInteractiveScript(), n && (l || (l = n.getAttribute("data-requiremodule")), i = contexts[n.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([l, e, t])
    }, define.amd = {
        jQuery: !0
    }, req.exec = function(text) {
        return eval(text)
    }, req(cfg)
}
}(this),
function(l, e) {
"object" == typeof module && "object" == typeof module.exports ? module.exports = l.document ? e(l, !0) : function(l) {
    if (!l.document) throw new Error("jQuery requires a window with a document");
    return e(l)
} : e(l)
}("undefined" != typeof window ? window : this, function(l, e) {
function t(l) {
    var e = l.length,
        t = ie.type(l);
    return "function" === t || ie.isWindow(l) ? !1 : 1 === l.nodeType && e ? !0 : "array" === t || 0 === e || "number" == typeof e && e > 0 && e - 1 in l
}

function n(l, e, t) {
    if (ie.isFunction(e)) return ie.grep(l, function(l, n) {
        return !!e.call(l, n, l) !== t
    });
    if (e.nodeType) return ie.grep(l, function(l) {
        return l === e !== t
    });
    if ("string" == typeof e) {
        if (fe.test(e)) return ie.filter(e, l, t);
        e = ie.filter(e, l)
    }
    return ie.grep(l, function(l) {
        return ie.inArray(l, e) >= 0 !== t
    })
}

function i(l, e) {
    do l = l[e]; while (l && 1 !== l.nodeType);
    return l
}

function a(l) {
    var e = Me[l] = {};
    return ie.each(l.match(be) || [], function(l, t) {
        e[t] = !0
    }), e
}

function r() {
    pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", o, !1), l.removeEventListener("load", o, !1)) : (pe.detachEvent("onreadystatechange", o), l.detachEvent("onload", o))
}

function o() {
    (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (r(), ie.ready())
}

function s(l, e, t) {
    if (void 0 === t && 1 === l.nodeType) {
        var n = "data-" + e.replace(Ce, "-$1").toLowerCase();
        if (t = l.getAttribute(n), "string" == typeof t) {
            try {
                t = "true" === t ? !0 : "false" === t ? !1 : "null" === t ? null : +t + "" === t ? +t : Ze.test(t) ? ie.parseJSON(t) : t
            } catch (i) {}
            ie.data(l, e, t)
        } else t = void 0
    }
    return t
}

function c(l) {
    var e;
    for (e in l)
        if (("data" !== e || !ie.isEmptyObject(l[e])) && "toJSON" !== e) return !1;
    return !0
}

function u(l, e, t, n) {
    if (ie.acceptData(l)) {
        var i, a, r = ie.expando,
            o = l.nodeType,
            s = o ? ie.cache : l,
            c = o ? l[r] : l[r] && r;
        if (c && s[c] && (n || s[c].data) || void 0 !== t || "string" != typeof e) return c || (c = o ? l[r] = G.pop() || ie.guid++ : r), s[c] || (s[c] = o ? {} : {
            toJSON: ie.noop
        }), ("object" == typeof e || "function" == typeof e) && (n ? s[c] = ie.extend(s[c], e) : s[c].data = ie.extend(s[c].data, e)), a = s[c], n || (a.data || (a.data = {}), a = a.data), void 0 !== t && (a[ie.camelCase(e)] = t), "string" == typeof e ? (i = a[e], null == i && (i = a[ie.camelCase(e)])) : i = a, i
    }
}

function d(l, e, t) {
    if (ie.acceptData(l)) {
        var n, i, a = l.nodeType,
            r = a ? ie.cache : l,
            o = a ? l[ie.expando] : ie.expando;
        if (r[o]) {
            if (e && (n = t ? r[o] : r[o].data)) {
                ie.isArray(e) ? e = e.concat(ie.map(e, ie.camelCase)) : e in n ? e = [e] : (e = ie.camelCase(e), e = e in n ? [e] : e.split(" ")), i = e.length;
                for (; i--;) delete n[e[i]];
                if (t ? !c(n) : !ie.isEmptyObject(n)) return
            }(t || (delete r[o].data, c(r[o]))) && (a ? ie.cleanData([l], !0) : te.deleteExpando || r != r.window ? delete r[o] : r[o] = null)
        }
    }
}

function f() {
    return !0
}

function h() {
    return !1
}

function p() {
    try {
        return pe.activeElement
    } catch (l) {}
}

function m(l) {
    var e = De.split("|"),
        t = l.createDocumentFragment();
    if (t.createElement)
        for (; e.length;) t.createElement(e.pop());
    return t
}

function g(l, e) {
    var t, n, i = 0,
        a = typeof l.getElementsByTagName !== ke ? l.getElementsByTagName(e || "*") : typeof l.querySelectorAll !== ke ? l.querySelectorAll(e || "*") : void 0;
    if (!a)
        for (a = [], t = l.childNodes || l; null != (n = t[i]); i++) !e || ie.nodeName(n, e) ? a.push(n) : ie.merge(a, g(n, e));
    return void 0 === e || e && ie.nodeName(l, e) ? ie.merge([l], a) : a
}

function v(l) {
    Te.test(l.type) && (l.defaultChecked = l.checked)
}

function y(l, e) {
    return ie.nodeName(l, "table") && ie.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? l.getElementsByTagName("tbody")[0] || l.appendChild(l.ownerDocument.createElement("tbody")) : l
}

function b(l) {
    return l.type = (null !== ie.find.attr(l, "type")) + "/" + l.type, l
}

function M(l) {
    var e = $e.exec(l.type);
    return e ? l.type = e[1] : l.removeAttribute("type"), l
}

function w(l, e) {
    for (var t, n = 0; null != (t = l[n]); n++) ie._data(t, "globalEval", !e || ie._data(e[n], "globalEval"))
}

function x(l, e) {
    if (1 === e.nodeType && ie.hasData(l)) {
        var t, n, i, a = ie._data(l),
            r = ie._data(e, a),
            o = a.events;
        if (o) {
            delete r.handle, r.events = {};
            for (t in o)
                for (n = 0, i = o[t].length; i > n; n++) ie.event.add(e, t, o[t][n])
        }
        r.data && (r.data = ie.extend({}, r.data))
    }
}

function k(l, e) {
    var t, n, i;
    if (1 === e.nodeType) {
        if (t = e.nodeName.toLowerCase(), !te.noCloneEvent && e[ie.expando]) {
            i = ie._data(e);
            for (n in i.events) ie.removeEvent(e, n, i.handle);
            e.removeAttribute(ie.expando)
        }
        "script" === t && e.text !== l.text ? (b(e).text = l.text, M(e)) : "object" === t ? (e.parentNode && (e.outerHTML = l.outerHTML), te.html5Clone && l.innerHTML && !ie.trim(e.innerHTML) && (e.innerHTML = l.innerHTML)) : "input" === t && Te.test(l.type) ? (e.defaultChecked = e.checked = l.checked, e.value !== l.value && (e.value = l.value)) : "option" === t ? e.defaultSelected = e.selected = l.defaultSelected : ("input" === t || "textarea" === t) && (e.defaultValue = l.defaultValue)
    }
}

function Z(e, t) {
    var n, i = ie(t.createElement(e)).appendTo(t.body),
        a = l.getDefaultComputedStyle && (n = l.getDefaultComputedStyle(i[0])) ? n.display : ie.css(i[0], "display");
    return i.detach(), a
}

function C(l) {
    var e = pe,
        t = Je[l];
    return t || (t = Z(l, e), "none" !== t && t || (Qe = (Qe || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qe[0].contentWindow || Qe[0].contentDocument).document, e.write(), e.close(), t = Z(l, e), Qe.detach()), Je[l] = t), t
}

function S(l, e) {
    return {
        get: function() {
            var t = l();
            if (null != t) return t ? void delete this.get : (this.get = e).apply(this, arguments)
        }
    }
}

function j(l, e) {
    if (e in l) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = e, i = ft.length; i--;)
        if (e = ft[i] + t, e in l) return e;
    return n
}

function _(l, e) {
    for (var t, n, i, a = [], r = 0, o = l.length; o > r; r++) n = l[r], n.style && (a[r] = ie._data(n, "olddisplay"), t = n.style.display, e ? (a[r] || "none" !== t || (n.style.display = ""), "" === n.style.display && _e(n) && (a[r] = ie._data(n, "olddisplay", C(n.nodeName)))) : (i = _e(n), (t && "none" !== t || !i) && ie._data(n, "olddisplay", i ? t : ie.css(n, "display"))));
    for (r = 0; o > r; r++) n = l[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? a[r] || "" : "none"));
    return l
}

function E(l, e, t) {
    var n = st.exec(e);
    return n ? Math.max(0, n[1] - (t || 0)) + (n[2] || "px") : e
}

function T(l, e, t, n, i) {
    for (var a = t === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > a; a += 2) "margin" === t && (r += ie.css(l, t + je[a], !0, i)), n ? ("content" === t && (r -= ie.css(l, "padding" + je[a], !0, i)), "margin" !== t && (r -= ie.css(l, "border" + je[a] + "Width", !0, i))) : (r += ie.css(l, "padding" + je[a], !0, i), "padding" !== t && (r += ie.css(l, "border" + je[a] + "Width", !0, i)));
    return r
}

function A(l, e, t) {
    var n = !0,
        i = "width" === e ? l.offsetWidth : l.offsetHeight,
        a = lt(l),
        r = te.boxSizing && "border-box" === ie.css(l, "boxSizing", !1, a);
    if (0 >= i || null == i) {
        if (i = et(l, e, a), (0 > i || null == i) && (i = l.style[e]), nt.test(i)) return i;
        n = r && (te.boxSizingReliable() || i === l.style[e]), i = parseFloat(i) || 0
    }
    return i + T(l, e, t || (r ? "border" : "content"), n, a) + "px"
}

function N(l, e, t, n, i) {
    return new N.prototype.init(l, e, t, n, i)
}

function L() {
    return setTimeout(function() {
        ht = void 0
    }), ht = ie.now()
}

function q(l, e) {
    var t, n = {
            height: l
        },
        i = 0;
    for (e = e ? 1 : 0; 4 > i; i += 2 - e) t = je[i], n["margin" + t] = n["padding" + t] = l;
    return e && (n.opacity = n.width = l), n
}

function I(l, e, t) {
    for (var n, i = (bt[e] || []).concat(bt["*"]), a = 0, r = i.length; r > a; a++)
        if (n = i[a].call(t, e, l)) return n
}

function D(l, e, t) {
    var n, i, a, r, o, s, c, u, d = this,
        f = {},
        h = l.style,
        p = l.nodeType && _e(l),
        m = ie._data(l, "fxshow");
    t.queue || (o = ie._queueHooks(l, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
        o.unqueued || s()
    }), o.unqueued++, d.always(function() {
        d.always(function() {
            o.unqueued--, ie.queue(l, "fx").length || o.empty.fire()
        })
    })), 1 === l.nodeType && ("height" in e || "width" in e) && (t.overflow = [h.overflow, h.overflowX, h.overflowY], c = ie.css(l, "display"), u = "none" === c ? ie._data(l, "olddisplay") || C(l.nodeName) : c, "inline" === u && "none" === ie.css(l, "float") && (te.inlineBlockNeedsLayout && "inline" !== C(l.nodeName) ? h.zoom = 1 : h.display = "inline-block")), t.overflow && (h.overflow = "hidden", te.shrinkWrapBlocks() || d.always(function() {
        h.overflow = t.overflow[0], h.overflowX = t.overflow[1], h.overflowY = t.overflow[2]
    }));
    for (n in e)
        if (i = e[n], mt.exec(i)) {
            if (delete e[n], a = a || "toggle" === i, i === (p ? "hide" : "show")) {
                if ("show" !== i || !m || void 0 === m[n]) continue;
                p = !0
            }
            f[n] = m && m[n] || ie.style(l, n)
        } else c = void 0;
    if (ie.isEmptyObject(f)) "inline" === ("none" === c ? C(l.nodeName) : c) && (h.display = c);
    else {
        m ? "hidden" in m && (p = m.hidden) : m = ie._data(l, "fxshow", {}), a && (m.hidden = !p), p ? ie(l).show() : d.done(function() {
            ie(l).hide()
        }), d.done(function() {
            var e;
            ie._removeData(l, "fxshow");
            for (e in f) ie.style(l, e, f[e])
        });
        for (n in f) r = I(p ? m[n] : 0, n, d), n in m || (m[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
    }
}

function R(l, e) {
    var t, n, i, a, r;
    for (t in l)
        if (n = ie.camelCase(t), i = e[n], a = l[t], ie.isArray(a) && (i = a[1], a = l[t] = a[0]), t !== n && (l[n] = a, delete l[t]), r = ie.cssHooks[n], r && "expand" in r) {
            a = r.expand(a), delete l[n];
            for (t in a) t in l || (l[t] = a[t], e[t] = i)
        } else e[n] = i
}

function z(l, e, t) {
    var n, i, a = 0,
        r = yt.length,
        o = ie.Deferred().always(function() {
            delete s.elem
        }),
        s = function() {
            if (i) return !1;
            for (var e = ht || L(), t = Math.max(0, c.startTime + c.duration - e), n = t / c.duration || 0, a = 1 - n, r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(a);
            return o.notifyWith(l, [c, a, t]), 1 > a && s ? t : (o.resolveWith(l, [c]), !1)
        },
        c = o.promise({
            elem: l,
            props: ie.extend({}, e),
            opts: ie.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ht || L(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = ie.Tween(l, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function(e) {
                var t = 0,
                    n = e ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n > t; t++) c.tweens[t].run(1);
                return e ? o.resolveWith(l, [c, e]) : o.rejectWith(l, [c, e]), this
            }
        }),
        u = c.props;
    for (R(u, c.opts.specialEasing); r > a; a++)
        if (n = yt[a].call(c, l, u, c.opts)) return n;
    return ie.map(u, I, c), ie.isFunction(c.opts.start) && c.opts.start.call(l, c), ie.fx.timer(ie.extend(s, {
        elem: l,
        anim: c,
        queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
}

function F(l) {
    return function(e, t) {
        "string" != typeof e && (t = e, e = "*");
        var n, i = 0,
            a = e.toLowerCase().match(be) || [];
        if (ie.isFunction(t))
            for (; n = a[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (l[n] = l[n] || []).unshift(t)) : (l[n] = l[n] || []).push(t)
    }
}

function P(l, e, t, n) {
    function i(o) {
        var s;
        return a[o] = !0, ie.each(l[o] || [], function(l, o) {
            var c = o(e, t, n);
            return "string" != typeof c || r || a[c] ? r ? !(s = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1)
        }), s
    }
    var a = {},
        r = l === Ht;
    return i(e.dataTypes[0]) || !a["*"] && i("*")
}

function B(l, e) {
    var t, n, i = ie.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((i[n] ? l : t || (t = {}))[n] = e[n]);
    return t && ie.extend(!0, l, t), l
}

function O(l, e, t) {
    for (var n, i, a, r, o = l.contents, s = l.dataTypes;
        "*" === s[0];) s.shift(), void 0 === i && (i = l.mimeType || e.getResponseHeader("Content-Type"));
    if (i)
        for (r in o)
            if (o[r] && o[r].test(i)) {
                s.unshift(r);
                break
            }
    if (s[0] in t) a = s[0];
    else {
        for (r in t) {
            if (!s[0] || l.converters[r + " " + s[0]]) {
                a = r;
                break
            }
            n || (n = r)
        }
        a = a || n
    }
    return a ? (a !== s[0] && s.unshift(a), t[a]) : void 0
}

function H(l, e, t, n) {
    var i, a, r, o, s, c = {},
        u = l.dataTypes.slice();
    if (u[1])
        for (r in l.converters) c[r.toLowerCase()] = l.converters[r];
    for (a = u.shift(); a;)
        if (l.responseFields[a] && (t[l.responseFields[a]] = e), !s && n && l.dataFilter && (e = l.dataFilter(e, l.dataType)), s = a, a = u.shift())
            if ("*" === a) a = s;
            else if ("*" !== s && s !== a) {
        if (r = c[s + " " + a] || c["* " + a], !r)
            for (i in c)
                if (o = i.split(" "), o[1] === a && (r = c[s + " " + o[0]] || c["* " + o[0]])) {
                    r === !0 ? r = c[i] : c[i] !== !0 && (a = o[0], u.unshift(o[1]));
                    break
                }
        if (r !== !0)
            if (r && l["throws"]) e = r(e);
            else try {
                e = r(e)
            } catch (d) {
                return {
                    state: "parsererror",
                    error: r ? d : "No conversion from " + s + " to " + a
                }
            }
    }
    return {
        state: "success",
        data: e
    }
}

function W(l, e, t, n) {
    var i;
    if (ie.isArray(e)) ie.each(e, function(e, i) {
        t || $t.test(l) ? n(l, i) : W(l + "[" + ("object" == typeof i ? e : "") + "]", i, t, n)
    });
    else if (t || "object" !== ie.type(e)) n(l, e);
    else
        for (i in e) W(l + "[" + i + "]", e[i], t, n)
}

function V() {
    try {
        return new l.XMLHttpRequest
    } catch (e) {}
}

function U() {
    try {
        return new l.ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {}
}

function $(l) {
    return ie.isWindow(l) ? l : 9 === l.nodeType ? l.defaultView || l.parentWindow : !1
}
var G = [],
    K = G.slice,
    X = G.concat,
    Y = G.push,
    Q = G.indexOf,
    J = {},
    le = J.toString,
    ee = J.hasOwnProperty,
    te = {},
    ne = "1.11.1",
    ie = function(l, e) {
        return new ie.fn.init(l, e)
    },
    ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    re = /^-ms-/,
    oe = /-([\da-z])/gi,
    se = function(l, e) {
        return e.toUpperCase()
    };
ie.fn = ie.prototype = {
    jquery: ne,
    constructor: ie,
    selector: "",
    length: 0,
    toArray: function() {
        return K.call(this)
    },
    get: function(l) {
        return null != l ? 0 > l ? this[l + this.length] : this[l] : K.call(this)
    },
    pushStack: function(l) {
        var e = ie.merge(this.constructor(), l);
        return e.prevObject = this, e.context = this.context, e
    },
    each: function(l, e) {
        return ie.each(this, l, e)
    },
    map: function(l) {
        return this.pushStack(ie.map(this, function(e, t) {
            return l.call(e, t, e)
        }))
    },
    slice: function() {
        return this.pushStack(K.apply(this, arguments))
    },
    first: function() {
        return this.eq(0)
    },
    last: function() {
        return this.eq(-1)
    },
    eq: function(l) {
        var e = this.length,
            t = +l + (0 > l ? e : 0);
        return this.pushStack(t >= 0 && e > t ? [this[t]] : [])
    },
    end: function() {
        return this.prevObject || this.constructor(null)
    },
    push: Y,
    sort: G.sort,
    splice: G.splice
}, ie.extend = ie.fn.extend = function() {
    var l, e, t, n, i, a, r = arguments[0] || {},
        o = 1,
        s = arguments.length,
        c = !1;
    for ("boolean" == typeof r && (c = r, r = arguments[o] || {}, o++), "object" == typeof r || ie.isFunction(r) || (r = {}), o === s && (r = this, o--); s > o; o++)
        if (null != (i = arguments[o]))
            for (n in i) l = r[n], t = i[n], r !== t && (c && t && (ie.isPlainObject(t) || (e = ie.isArray(t))) ? (e ? (e = !1, a = l && ie.isArray(l) ? l : []) : a = l && ie.isPlainObject(l) ? l : {}, r[n] = ie.extend(c, a, t)) : void 0 !== t && (r[n] = t));
    return r
}, ie.extend({
    expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(l) {
        throw new Error(l)
    },
    noop: function() {},
    isFunction: function(l) {
        return "function" === ie.type(l)
    },
    isArray: Array.isArray || function(l) {
        return "array" === ie.type(l)
    },
    isWindow: function(l) {
        return null != l && l == l.window
    },
    isNumeric: function(l) {
        return !ie.isArray(l) && l - parseFloat(l) >= 0
    },
    isEmptyObject: function(l) {
        var e;
        for (e in l) return !1;
        return !0
    },
    isPlainObject: function(l) {
        var e;
        if (!l || "object" !== ie.type(l) || l.nodeType || ie.isWindow(l)) return !1;
        try {
            if (l.constructor && !ee.call(l, "constructor") && !ee.call(l.constructor.prototype, "isPrototypeOf")) return !1
        } catch (t) {
            return !1
        }
        if (te.ownLast)
            for (e in l) return ee.call(l, e);
        for (e in l);
        return void 0 === e || ee.call(l, e)
    },
    type: function(l) {
        return null == l ? l + "" : "object" == typeof l || "function" == typeof l ? J[le.call(l)] || "object" : typeof l
    },
    globalEval: function(e) {
        e && ie.trim(e) && (l.execScript || function(e) {
            l.eval.call(l, e)
        })(e)
    },
    camelCase: function(l) {
        return l.replace(re, "ms-").replace(oe, se)
    },
    nodeName: function(l, e) {
        return l.nodeName && l.nodeName.toLowerCase() === e.toLowerCase()
    },
    each: function(l, e, n) {
        var i, a = 0,
            r = l.length,
            o = t(l);
        if (n) {
            if (o)
                for (; r > a && (i = e.apply(l[a], n), i !== !1); a++);
            else
                for (a in l)
                    if (i = e.apply(l[a], n), i === !1) break
        } else if (o)
            for (; r > a && (i = e.call(l[a], a, l[a]), i !== !1); a++);
        else
            for (a in l)
                if (i = e.call(l[a], a, l[a]), i === !1) break;
        return l
    },
    trim: function(l) {
        return null == l ? "" : (l + "").replace(ae, "")
    },
    makeArray: function(l, e) {
        var n = e || [];
        return null != l && (t(Object(l)) ? ie.merge(n, "string" == typeof l ? [l] : l) : Y.call(n, l)), n
    },
    inArray: function(l, e, t) {
        var n;
        if (e) {
            if (Q) return Q.call(e, l, t);
            for (n = e.length, t = t ? 0 > t ? Math.max(0, n + t) : t : 0; n > t; t++)
                if (t in e && e[t] === l) return t
        }
        return -1
    },
    merge: function(l, e) {
        for (var t = +e.length, n = 0, i = l.length; t > n;) l[i++] = e[n++];
        if (t !== t)
            for (; void 0 !== e[n];) l[i++] = e[n++];
        return l.length = i, l
    },
    grep: function(l, e, t) {
        for (var n, i = [], a = 0, r = l.length, o = !t; r > a; a++) n = !e(l[a], a), n !== o && i.push(l[a]);
        return i
    },
    map: function(l, e, n) {
        var i, a = 0,
            r = l.length,
            o = t(l),
            s = [];
        if (o)
            for (; r > a; a++) i = e(l[a], a, n), null != i && s.push(i);
        else
            for (a in l) i = e(l[a], a, n), null != i && s.push(i);
        return X.apply([], s)
    },
    guid: 1,
    proxy: function(l, e) {
        var t, n, i;
        return "string" == typeof e && (i = l[e], e = l, l = i), ie.isFunction(l) ? (t = K.call(arguments, 2), n = function() {
            return l.apply(e || this, t.concat(K.call(arguments)))
        }, n.guid = l.guid = l.guid || ie.guid++, n) : void 0
    },
    now: function() {
        return +new Date
    },
    support: te
}), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(l, e) {
    J["[object " + e + "]"] = e.toLowerCase()
});
var ce = function(l) {
    function e(l, e, t, n) {
        var i, a, r, o, s, c, d, h, p, m;
        if ((e ? e.ownerDocument || e : P) !== N && A(e), e = e || N, t = t || [], !l || "string" != typeof l) return t;
        if (1 !== (o = e.nodeType) && 9 !== o) return [];
        if (q && !n) {
            if (i = ye.exec(l))
                if (r = i[1]) {
                    if (9 === o) {
                        if (a = e.getElementById(r), !a || !a.parentNode) return t;
                        if (a.id === r) return t.push(a), t
                    } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(r)) && z(e, a) && a.id === r) return t.push(a), t
                } else {
                    if (i[2]) return J.apply(t, e.getElementsByTagName(l)), t;
                    if ((r = i[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(t, e.getElementsByClassName(r)), t
                }
            if (w.qsa && (!I || !I.test(l))) {
                if (h = d = F, p = e, m = 9 === o && l, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                    for (c = C(l), (d = e.getAttribute("id")) ? h = d.replace(Me, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", s = c.length; s--;) c[s] = h + f(c[s]);
                    p = be.test(l) && u(e.parentNode) || e, m = c.join(",")
                }
                if (m) try {
                    return J.apply(t, p.querySelectorAll(m)), t
                } catch (g) {} finally {
                    d || e.removeAttribute("id")
                }
            }
        }
        return j(l.replace(se, "$1"), e, t, n)
    }

    function t() {
        function l(t, n) {
            return e.push(t + " ") > x.cacheLength && delete l[e.shift()], l[t + " "] = n
        }
        var e = [];
        return l
    }

    function n(l) {
        return l[F] = !0, l
    }

    function i(l) {
        var e = N.createElement("div");
        try {
            return !!l(e)
        } catch (t) {
            return !1
        } finally {
            e.parentNode && e.parentNode.removeChild(e), e = null
        }
    }

    function a(l, e) {
        for (var t = l.split("|"), n = l.length; n--;) x.attrHandle[t[n]] = e
    }

    function r(l, e) {
        var t = e && l,
            n = t && 1 === l.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~l.sourceIndex || G);
        if (n) return n;
        if (t)
            for (; t = t.nextSibling;)
                if (t === e) return -1;
        return l ? 1 : -1
    }

    function o(l) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && e.type === l
        }
    }

    function s(l) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === l
        }
    }

    function c(l) {
        return n(function(e) {
            return e = +e, n(function(t, n) {
                for (var i, a = l([], t.length, e), r = a.length; r--;) t[i = a[r]] && (t[i] = !(n[i] = t[i]))
            })
        })
    }

    function u(l) {
        return l && typeof l.getElementsByTagName !== $ && l
    }

    function d() {}

    function f(l) {
        for (var e = 0, t = l.length, n = ""; t > e; e++) n += l[e].value;
        return n
    }

    function h(l, e, t) {
        var n = e.dir,
            i = t && "parentNode" === n,
            a = O++;
        return e.first ? function(e, t, a) {
            for (; e = e[n];)
                if (1 === e.nodeType || i) return l(e, t, a)
        } : function(e, t, r) {
            var o, s, c = [B, a];
            if (r) {
                for (; e = e[n];)
                    if ((1 === e.nodeType || i) && l(e, t, r)) return !0
            } else
                for (; e = e[n];)
                    if (1 === e.nodeType || i) {
                        if (s = e[F] || (e[F] = {}), (o = s[n]) && o[0] === B && o[1] === a) return c[2] = o[2];
                        if (s[n] = c, c[2] = l(e, t, r)) return !0
                    }
        }
    }

    function p(l) {
        return l.length > 1 ? function(e, t, n) {
            for (var i = l.length; i--;)
                if (!l[i](e, t, n)) return !1;
            return !0
        } : l[0]
    }

    function m(l, t, n) {
        for (var i = 0, a = t.length; a > i; i++) e(l, t[i], n);
        return n
    }

    function g(l, e, t, n, i) {
        for (var a, r = [], o = 0, s = l.length, c = null != e; s > o; o++)(a = l[o]) && (!t || t(a, n, i)) && (r.push(a), c && e.push(o));
        return r
    }

    function v(l, e, t, i, a, r) {
        return i && !i[F] && (i = v(i)), a && !a[F] && (a = v(a, r)), n(function(n, r, o, s) {
            var c, u, d, f = [],
                h = [],
                p = r.length,
                v = n || m(e || "*", o.nodeType ? [o] : o, []),
                y = !l || !n && e ? v : g(v, f, l, o, s),
                b = t ? a || (n ? l : p || i) ? [] : r : y;
            if (t && t(y, b, o, s), i)
                for (c = g(b, h), i(c, [], o, s), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
            if (n) {
                if (a || l) {
                    if (a) {
                        for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                        a(null, b = [], c, s)
                    }
                    for (u = b.length; u--;)(d = b[u]) && (c = a ? ee.call(n, d) : f[u]) > -1 && (n[c] = !(r[c] = d))
                }
            } else b = g(b === r ? b.splice(p, b.length) : b), a ? a(null, r, b, s) : J.apply(r, b)
        })
    }

    function y(l) {
        for (var e, t, n, i = l.length, a = x.relative[l[0].type], r = a || x.relative[" "], o = a ? 1 : 0, s = h(function(l) {
                return l === e
            }, r, !0), c = h(function(l) {
                return ee.call(e, l) > -1
            }, r, !0), u = [function(l, t, n) {
                return !a && (n || t !== _) || ((e = t).nodeType ? s(l, t, n) : c(l, t, n))
            }]; i > o; o++)
            if (t = x.relative[l[o].type]) u = [h(p(u), t)];
            else {
                if (t = x.filter[l[o].type].apply(null, l[o].matches), t[F]) {
                    for (n = ++o; i > n && !x.relative[l[n].type]; n++);
                    return v(o > 1 && p(u), o > 1 && f(l.slice(0, o - 1).concat({
                        value: " " === l[o - 2].type ? "*" : ""
                    })).replace(se, "$1"), t, n > o && y(l.slice(o, n)), i > n && y(l = l.slice(n)), i > n && f(l))
                }
                u.push(t)
            }
        return p(u)
    }

    function b(l, t) {
        var i = t.length > 0,
            a = l.length > 0,
            r = function(n, r, o, s, c) {
                var u, d, f, h = 0,
                    p = "0",
                    m = n && [],
                    v = [],
                    y = _,
                    b = n || a && x.find.TAG("*", c),
                    M = B += null == y ? 1 : Math.random() || .1,
                    w = b.length;
                for (c && (_ = r !== N && r); p !== w && null != (u = b[p]); p++) {
                    if (a && u) {
                        for (d = 0; f = l[d++];)
                            if (f(u, r, o)) {
                                s.push(u);
                                break
                            }
                        c && (B = M)
                    }
                    i && ((u = !f && u) && h--, n && m.push(u))
                }
                if (h += p, i && p !== h) {
                    for (d = 0; f = t[d++];) f(m, v, r, o);
                    if (n) {
                        if (h > 0)
                            for (; p--;) m[p] || v[p] || (v[p] = Y.call(s));
                        v = g(v)
                    }
                    J.apply(s, v), c && !n && v.length > 0 && h + t.length > 1 && e.uniqueSort(s)
                }
                return c && (B = M, _ = y), m
            };
        return i ? n(r) : r
    }
    var M, w, x, k, Z, C, S, j, _, E, T, A, N, L, q, I, D, R, z, F = "sizzle" + -new Date,
        P = l.document,
        B = 0,
        O = 0,
        H = t(),
        W = t(),
        V = t(),
        U = function(l, e) {
            return l === e && (T = !0), 0
        },
        $ = "undefined",
        G = 1 << 31,
        K = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Q = X.push,
        J = X.push,
        le = X.slice,
        ee = X.indexOf || function(l) {
            for (var e = 0, t = this.length; t > e; e++)
                if (this[e] === l) return e;
            return -1
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ae = ie.replace("w", "w#"),
        re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]",
        oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
        se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        ce = new RegExp("^" + ne + "*," + ne + "*"),
        ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        fe = new RegExp(oe),
        he = new RegExp("^" + ae + "$"),
        pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        },
        me = /^(?:input|select|textarea|button)$/i,
        ge = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        Me = /'|\\/g,
        we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        xe = function(l, e, t) {
            var n = "0x" + e - 65536;
            return n !== n || t ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
    try {
        J.apply(X = le.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
    } catch (ke) {
        J = {
            apply: X.length ? function(l, e) {
                Q.apply(l, le.call(e))
            } : function(l, e) {
                for (var t = l.length, n = 0; l[t++] = e[n++];);
                l.length = t - 1
            }
        }
    }
    w = e.support = {}, Z = e.isXML = function(l) {
        var e = l && (l.ownerDocument || l).documentElement;
        return e ? "HTML" !== e.nodeName : !1
    }, A = e.setDocument = function(l) {
        var e, t = l ? l.ownerDocument || l : P,
            n = t.defaultView;
        return t !== N && 9 === t.nodeType && t.documentElement ? (N = t, L = t.documentElement, q = !Z(t), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
            A()
        }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
            A()
        })), w.attributes = i(function(l) {
            return l.className = "i", !l.getAttribute("className")
        }), w.getElementsByTagName = i(function(l) {
            return l.appendChild(t.createComment("")), !l.getElementsByTagName("*").length
        }), w.getElementsByClassName = ve.test(t.getElementsByClassName) && i(function(l) {
            return l.innerHTML = "<div class='a'></div><div class='a i'></div>", l.firstChild.className = "i", 2 === l.getElementsByClassName("i").length
        }), w.getById = i(function(l) {
            return L.appendChild(l).id = F, !t.getElementsByName || !t.getElementsByName(F).length
        }), w.getById ? (x.find.ID = function(l, e) {
            if (typeof e.getElementById !== $ && q) {
                var t = e.getElementById(l);
                return t && t.parentNode ? [t] : []
            }
        }, x.filter.ID = function(l) {
            var e = l.replace(we, xe);
            return function(l) {
                return l.getAttribute("id") === e
            }
        }) : (delete x.find.ID, x.filter.ID = function(l) {
            var e = l.replace(we, xe);
            return function(l) {
                var t = typeof l.getAttributeNode !== $ && l.getAttributeNode("id");
                return t && t.value === e
            }
        }), x.find.TAG = w.getElementsByTagName ? function(l, e) {
            return typeof e.getElementsByTagName !== $ ? e.getElementsByTagName(l) : void 0
        } : function(l, e) {
            var t, n = [],
                i = 0,
                a = e.getElementsByTagName(l);
            if ("*" === l) {
                for (; t = a[i++];) 1 === t.nodeType && n.push(t);
                return n
            }
            return a
        }, x.find.CLASS = w.getElementsByClassName && function(l, e) {
            return typeof e.getElementsByClassName !== $ && q ? e.getElementsByClassName(l) : void 0
        }, D = [], I = [], (w.qsa = ve.test(t.querySelectorAll)) && (i(function(l) {
            l.innerHTML = "<select msallowclip=''><option selected=''></option></select>", l.querySelectorAll("[msallowclip^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), l.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), l.querySelectorAll(":checked").length || I.push(":checked")
        }), i(function(l) {
            var e = t.createElement("input");
            e.setAttribute("type", "hidden"), l.appendChild(e).setAttribute("name", "D"), l.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), l.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), l.querySelectorAll("*,:x"), I.push(",.*:")
        })), (w.matchesSelector = ve.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(l) {
            w.disconnectedMatch = R.call(l, "div"), R.call(l, "[s!='']:x"), D.push("!=", oe)
        }), I = I.length && new RegExp(I.join("|")), D = D.length && new RegExp(D.join("|")), e = ve.test(L.compareDocumentPosition), z = e || ve.test(L.contains) ? function(l, e) {
            var t = 9 === l.nodeType ? l.documentElement : l,
                n = e && e.parentNode;
            return l === n || !(!n || 1 !== n.nodeType || !(t.contains ? t.contains(n) : l.compareDocumentPosition && 16 & l.compareDocumentPosition(n)))
        } : function(l, e) {
            if (e)
                for (; e = e.parentNode;)
                    if (e === l) return !0;
            return !1
        }, U = e ? function(l, e) {
            if (l === e) return T = !0, 0;
            var n = !l.compareDocumentPosition - !e.compareDocumentPosition;
            return n ? n : (n = (l.ownerDocument || l) === (e.ownerDocument || e) ? l.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(l) === n ? l === t || l.ownerDocument === P && z(P, l) ? -1 : e === t || e.ownerDocument === P && z(P, e) ? 1 : E ? ee.call(E, l) - ee.call(E, e) : 0 : 4 & n ? -1 : 1)
        } : function(l, e) {
            if (l === e) return T = !0, 0;
            var n, i = 0,
                a = l.parentNode,
                o = e.parentNode,
                s = [l],
                c = [e];
            if (!a || !o) return l === t ? -1 : e === t ? 1 : a ? -1 : o ? 1 : E ? ee.call(E, l) - ee.call(E, e) : 0;
            if (a === o) return r(l, e);
            for (n = l; n = n.parentNode;) s.unshift(n);
            for (n = e; n = n.parentNode;) c.unshift(n);
            for (; s[i] === c[i];) i++;
            return i ? r(s[i], c[i]) : s[i] === P ? -1 : c[i] === P ? 1 : 0
        }, t) : N
    }, e.matches = function(l, t) {
        return e(l, null, null, t)
    }, e.matchesSelector = function(l, t) {
        if ((l.ownerDocument || l) !== N && A(l), t = t.replace(de, "='$1']"), !(!w.matchesSelector || !q || D && D.test(t) || I && I.test(t))) try {
            var n = R.call(l, t);
            if (n || w.disconnectedMatch || l.document && 11 !== l.document.nodeType) return n
        } catch (i) {}
        return e(t, N, null, [l]).length > 0
    }, e.contains = function(l, e) {
        return (l.ownerDocument || l) !== N && A(l), z(l, e)
    }, e.attr = function(l, e) {
        (l.ownerDocument || l) !== N && A(l);
        var t = x.attrHandle[e.toLowerCase()],
            n = t && K.call(x.attrHandle, e.toLowerCase()) ? t(l, e, !q) : void 0;
        return void 0 !== n ? n : w.attributes || !q ? l.getAttribute(e) : (n = l.getAttributeNode(e)) && n.specified ? n.value : null
    }, e.error = function(l) {
        throw new Error("Syntax error, unrecognized expression: " + l)
    }, e.uniqueSort = function(l) {
        var e, t = [],
            n = 0,
            i = 0;
        if (T = !w.detectDuplicates, E = !w.sortStable && l.slice(0), l.sort(U), T) {
            for (; e = l[i++];) e === l[i] && (n = t.push(i));
            for (; n--;) l.splice(t[n], 1)
        }
        return E = null, l
    }, k = e.getText = function(l) {
        var e, t = "",
            n = 0,
            i = l.nodeType;
        if (i) {
            if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof l.textContent) return l.textContent;
                for (l = l.firstChild; l; l = l.nextSibling) t += k(l)
            } else if (3 === i || 4 === i) return l.nodeValue
        } else
            for (; e = l[n++];) t += k(e);
        return t
    }, x = e.selectors = {
        cacheLength: 50,
        createPseudo: n,
        match: pe,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(l) {
                return l[1] = l[1].replace(we, xe), l[3] = (l[3] || l[4] || l[5] || "").replace(we, xe), "~=" === l[2] && (l[3] = " " + l[3] + " "), l.slice(0, 4)
            },
            CHILD: function(l) {
                return l[1] = l[1].toLowerCase(), "nth" === l[1].slice(0, 3) ? (l[3] || e.error(l[0]), l[4] = +(l[4] ? l[5] + (l[6] || 1) : 2 * ("even" === l[3] || "odd" === l[3])), l[5] = +(l[7] + l[8] || "odd" === l[3])) : l[3] && e.error(l[0]), l
            },
            PSEUDO: function(l) {
                var e, t = !l[6] && l[2];
                return pe.CHILD.test(l[0]) ? null : (l[3] ? l[2] = l[4] || l[5] || "" : t && fe.test(t) && (e = C(t, !0)) && (e = t.indexOf(")", t.length - e) - t.length) && (l[0] = l[0].slice(0, e), l[2] = t.slice(0, e)), l.slice(0, 3))
            }
        },
        filter: {
            TAG: function(l) {
                var e = l.replace(we, xe).toLowerCase();
                return "*" === l ? function() {
                    return !0
                } : function(l) {
                    return l.nodeName && l.nodeName.toLowerCase() === e
                }
            },
            CLASS: function(l) {
                var e = H[l + " "];
                return e || (e = new RegExp("(^|" + ne + ")" + l + "(" + ne + "|$)")) && H(l, function(l) {
                    return e.test("string" == typeof l.className && l.className || typeof l.getAttribute !== $ && l.getAttribute("class") || "")
                })
            },
            ATTR: function(l, t, n) {
                return function(i) {
                    var a = e.attr(i, l);
                    return null == a ? "!=" === t : t ? (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a + " ").indexOf(n) > -1 : "|=" === t ? a === n || a.slice(0, n.length + 1) === n + "-" : !1) : !0
                }
            },
            CHILD: function(l, e, t, n, i) {
                var a = "nth" !== l.slice(0, 3),
                    r = "last" !== l.slice(-4),
                    o = "of-type" === e;
                return 1 === n && 0 === i ? function(l) {
                    return !!l.parentNode
                } : function(e, t, s) {
                    var c, u, d, f, h, p, m = a !== r ? "nextSibling" : "previousSibling",
                        g = e.parentNode,
                        v = o && e.nodeName.toLowerCase(),
                        y = !s && !o;
                    if (g) {
                        if (a) {
                            for (; m;) {
                                for (d = e; d = d[m];)
                                    if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                p = m = "only" === l && !p && "nextSibling"
                            }
                            return !0
                        }
                        if (p = [r ? g.firstChild : g.lastChild], r && y) {
                            for (u = g[F] || (g[F] = {}), c = u[l] || [], h = c[0] === B && c[1], f = c[0] === B && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                                if (1 === d.nodeType && ++f && d === e) {
                                    u[l] = [B, h, f];
                                    break
                                }
                        } else if (y && (c = (e[F] || (e[F] = {}))[l]) && c[0] === B) f = c[1];
                        else
                            for (;
                                (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[F] || (d[F] = {}))[l] = [B, f]), d !== e)););
                        return f -= i, f === n || f % n === 0 && f / n >= 0
                    }
                }
            },
            PSEUDO: function(l, t) {
                var i, a = x.pseudos[l] || x.setFilters[l.toLowerCase()] || e.error("unsupported pseudo: " + l);
                return a[F] ? a(t) : a.length > 1 ? (i = [l, l, "", t], x.setFilters.hasOwnProperty(l.toLowerCase()) ? n(function(l, e) {
                    for (var n, i = a(l, t), r = i.length; r--;) n = ee.call(l, i[r]), l[n] = !(e[n] = i[r])
                }) : function(l) {
                    return a(l, 0, i)
                }) : a
            }
        },
        pseudos: {
            not: n(function(l) {
                var e = [],
                    t = [],
                    i = S(l.replace(se, "$1"));
                return i[F] ? n(function(l, e, t, n) {
                    for (var a, r = i(l, null, n, []), o = l.length; o--;)(a = r[o]) && (l[o] = !(e[o] = a))
                }) : function(l, n, a) {
                    return e[0] = l, i(e, null, a, t), !t.pop()
                }
            }),
            has: n(function(l) {
                return function(t) {
                    return e(l, t).length > 0
                }
            }),
            contains: n(function(l) {
                return function(e) {
                    return (e.textContent || e.innerText || k(e)).indexOf(l) > -1
                }
            }),
            lang: n(function(l) {
                return he.test(l || "") || e.error("unsupported lang: " + l), l = l.replace(we, xe).toLowerCase(),
                    function(e) {
                        var t;
                        do
                            if (t = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return t = t.toLowerCase(), t === l || 0 === t.indexOf(l + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
            }),
            target: function(e) {
                var t = l.location && l.location.hash;
                return t && t.slice(1) === e.id
            },
            root: function(l) {
                return l === L
            },
            focus: function(l) {
                return l === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(l.type || l.href || ~l.tabIndex)
            },
            enabled: function(l) {
                return l.disabled === !1
            },
            disabled: function(l) {
                return l.disabled === !0
            },
            checked: function(l) {
                var e = l.nodeName.toLowerCase();
                return "input" === e && !!l.checked || "option" === e && !!l.selected
            },
            selected: function(l) {
                return l.parentNode && l.parentNode.selectedIndex, l.selected === !0
            },
            empty: function(l) {
                for (l = l.firstChild; l; l = l.nextSibling)
                    if (l.nodeType < 6) return !1;
                return !0
            },
            parent: function(l) {
                return !x.pseudos.empty(l)
            },
            header: function(l) {
                return ge.test(l.nodeName)
            },
            input: function(l) {
                return me.test(l.nodeName)
            },
            button: function(l) {
                var e = l.nodeName.toLowerCase();
                return "input" === e && "button" === l.type || "button" === e
            },
            text: function(l) {
                var e;
                return "input" === l.nodeName.toLowerCase() && "text" === l.type && (null == (e = l.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: c(function() {
                return [0]
            }),
            last: c(function(l, e) {
                return [e - 1]
            }),
            eq: c(function(l, e, t) {
                return [0 > t ? t + e : t]
            }),
            even: c(function(l, e) {
                for (var t = 0; e > t; t += 2) l.push(t);
                return l
            }),
            odd: c(function(l, e) {
                for (var t = 1; e > t; t += 2) l.push(t);
                return l
            }),
            lt: c(function(l, e, t) {
                for (var n = 0 > t ? t + e : t; --n >= 0;) l.push(n);
                return l
            }),
            gt: c(function(l, e, t) {
                for (var n = 0 > t ? t + e : t; ++n < e;) l.push(n);
                return l
            })
        }
    }, x.pseudos.nth = x.pseudos.eq;
    for (M in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[M] = o(M);
    for (M in {
            submit: !0,
            reset: !0
        }) x.pseudos[M] = s(M);
    return d.prototype = x.filters = x.pseudos, x.setFilters = new d, C = e.tokenize = function(l, t) {
        var n, i, a, r, o, s, c, u = W[l + " "];
        if (u) return t ? 0 : u.slice(0);
        for (o = l, s = [], c = x.preFilter; o;) {
            (!n || (i = ce.exec(o))) && (i && (o = o.slice(i[0].length) || o), s.push(a = [])), n = !1, (i = ue.exec(o)) && (n = i.shift(), a.push({
                value: n,
                type: i[0].replace(se, " ")
            }), o = o.slice(n.length));
            for (r in x.filter) !(i = pe[r].exec(o)) || c[r] && !(i = c[r](i)) || (n = i.shift(), a.push({
                value: n,
                type: r,
                matches: i
            }), o = o.slice(n.length));
            if (!n) break
        }
        return t ? o.length : o ? e.error(l) : W(l, s).slice(0)
    }, S = e.compile = function(l, e) {
        var t, n = [],
            i = [],
            a = V[l + " "];
        if (!a) {
            for (e || (e = C(l)), t = e.length; t--;) a = y(e[t]), a[F] ? n.push(a) : i.push(a);
            a = V(l, b(i, n)), a.selector = l
        }
        return a
    }, j = e.select = function(l, e, t, n) {
        var i, a, r, o, s, c = "function" == typeof l && l,
            d = !n && C(l = c.selector || l);
        if (t = t || [], 1 === d.length) {
            if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && w.getById && 9 === e.nodeType && q && x.relative[a[1].type]) {
                if (e = (x.find.ID(r.matches[0].replace(we, xe), e) || [])[0], !e) return t;
                c && (e = e.parentNode), l = l.slice(a.shift().value.length)
            }
            for (i = pe.needsContext.test(l) ? 0 : a.length; i-- && (r = a[i], !x.relative[o = r.type]);)
                if ((s = x.find[o]) && (n = s(r.matches[0].replace(we, xe), be.test(a[0].type) && u(e.parentNode) || e))) {
                    if (a.splice(i, 1), l = n.length && f(a), !l) return J.apply(t, n), t;
                    break
                }
        }
        return (c || S(l, d))(n, e, !q, t, be.test(l) && u(e.parentNode) || e), t
    }, w.sortStable = F.split("").sort(U).join("") === F, w.detectDuplicates = !!T, A(), w.sortDetached = i(function(l) {
        return 1 & l.compareDocumentPosition(N.createElement("div"))
    }), i(function(l) {
        return l.innerHTML = "<a href='#'></a>", "#" === l.firstChild.getAttribute("href")
    }) || a("type|href|height|width", function(l, e, t) {
        return t ? void 0 : l.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
    }), w.attributes && i(function(l) {
        return l.innerHTML = "<input/>", l.firstChild.setAttribute("value", ""), "" === l.firstChild.getAttribute("value")
    }) || a("value", function(l, e, t) {
        return t || "input" !== l.nodeName.toLowerCase() ? void 0 : l.defaultValue
    }), i(function(l) {
        return null == l.getAttribute("disabled")
    }) || a(te, function(l, e, t) {
        var n;
        return t ? void 0 : l[e] === !0 ? e.toLowerCase() : (n = l.getAttributeNode(e)) && n.specified ? n.value : null
    }), e
}(l);
ie.find = ce, ie.expr = ce.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = ce.uniqueSort, ie.text = ce.getText, ie.isXMLDoc = ce.isXML, ie.contains = ce.contains;
var ue = ie.expr.match.needsContext,
    de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    fe = /^.[^:#\[\.,]*$/;
ie.filter = function(l, e, t) {
    var n = e[0];
    return t && (l = ":not(" + l + ")"), 1 === e.length && 1 === n.nodeType ? ie.find.matchesSelector(n, l) ? [n] : [] : ie.find.matches(l, ie.grep(e, function(l) {
        return 1 === l.nodeType
    }))
}, ie.fn.extend({
    find: function(l) {
        var e, t = [],
            n = this,
            i = n.length;
        if ("string" != typeof l) return this.pushStack(ie(l).filter(function() {
            for (e = 0; i > e; e++)
                if (ie.contains(n[e], this)) return !0
        }));
        for (e = 0; i > e; e++) ie.find(l, n[e], t);
        return t = this.pushStack(i > 1 ? ie.unique(t) : t), t.selector = this.selector ? this.selector + " " + l : l, t
    },
    filter: function(l) {
        return this.pushStack(n(this, l || [], !1))
    },
    not: function(l) {
        return this.pushStack(n(this, l || [], !0))
    },
    is: function(l) {
        return !!n(this, "string" == typeof l && ue.test(l) ? ie(l) : l || [], !1).length
    }
});
var he, pe = l.document,
    me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ge = ie.fn.init = function(l, e) {
        var t, n;
        if (!l) return this;
        if ("string" == typeof l) {
            if (t = "<" === l.charAt(0) && ">" === l.charAt(l.length - 1) && l.length >= 3 ? [null, l, null] : me.exec(l), !t || !t[1] && e) return !e || e.jquery ? (e || he).find(l) : this.constructor(e).find(l);
            if (t[1]) {
                if (e = e instanceof ie ? e[0] : e, ie.merge(this, ie.parseHTML(t[1], e && e.nodeType ? e.ownerDocument || e : pe, !0)), de.test(t[1]) && ie.isPlainObject(e))
                    for (t in e) ie.isFunction(this[t]) ? this[t](e[t]) : this.attr(t, e[t]);
                return this
            }
            if (n = pe.getElementById(t[2]), n && n.parentNode) {
                if (n.id !== t[2]) return he.find(l);
                this.length = 1, this[0] = n
            }
            return this.context = pe, this.selector = l, this
        }
        return l.nodeType ? (this.context = this[0] = l, this.length = 1, this) : ie.isFunction(l) ? "undefined" != typeof he.ready ? he.ready(l) : l(ie) : (void 0 !== l.selector && (this.selector = l.selector, this.context = l.context), ie.makeArray(l, this))
    };
ge.prototype = ie.fn, he = ie(pe);
var ve = /^(?:parents|prev(?:Until|All))/,
    ye = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
ie.extend({
    dir: function(l, e, t) {
        for (var n = [], i = l[e]; i && 9 !== i.nodeType && (void 0 === t || 1 !== i.nodeType || !ie(i).is(t));) 1 === i.nodeType && n.push(i), i = i[e];
        return n
    },
    sibling: function(l, e) {
        for (var t = []; l; l = l.nextSibling) 1 === l.nodeType && l !== e && t.push(l);
        return t
    }
}), ie.fn.extend({
    has: function(l) {
        var e, t = ie(l, this),
            n = t.length;
        return this.filter(function() {
            for (e = 0; n > e; e++)
                if (ie.contains(this, t[e])) return !0
        })
    },
    closest: function(l, e) {
        for (var t, n = 0, i = this.length, a = [], r = ue.test(l) || "string" != typeof l ? ie(l, e || this.context) : 0; i > n; n++)
            for (t = this[n]; t && t !== e; t = t.parentNode)
                if (t.nodeType < 11 && (r ? r.index(t) > -1 : 1 === t.nodeType && ie.find.matchesSelector(t, l))) {
                    a.push(t);
                    break
                }
        return this.pushStack(a.length > 1 ? ie.unique(a) : a)
    },
    index: function(l) {
        return l ? "string" == typeof l ? ie.inArray(this[0], ie(l)) : ie.inArray(l.jquery ? l[0] : l, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(l, e) {
        return this.pushStack(ie.unique(ie.merge(this.get(), ie(l, e))))
    },
    addBack: function(l) {
        return this.add(null == l ? this.prevObject : this.prevObject.filter(l))
    }
}), ie.each({
    parent: function(l) {
        var e = l.parentNode;
        return e && 11 !== e.nodeType ? e : null
    },
    parents: function(l) {
        return ie.dir(l, "parentNode")
    },
    parentsUntil: function(l, e, t) {
        return ie.dir(l, "parentNode", t)
    },
    next: function(l) {
        return i(l, "nextSibling")
    },
    prev: function(l) {
        return i(l, "previousSibling")
    },
    nextAll: function(l) {
        return ie.dir(l, "nextSibling")
    },
    prevAll: function(l) {
        return ie.dir(l, "previousSibling")
    },
    nextUntil: function(l, e, t) {
        return ie.dir(l, "nextSibling", t)
    },
    prevUntil: function(l, e, t) {
        return ie.dir(l, "previousSibling", t)
    },
    siblings: function(l) {
        return ie.sibling((l.parentNode || {}).firstChild, l)
    },
    children: function(l) {
        return ie.sibling(l.firstChild)
    },
    contents: function(l) {
        return ie.nodeName(l, "iframe") ? l.contentDocument || l.contentWindow.document : ie.merge([], l.childNodes)
    }
}, function(l, e) {
    ie.fn[l] = function(t, n) {
        var i = ie.map(this, e, t);
        return "Until" !== l.slice(-5) && (n = t), n && "string" == typeof n && (i = ie.filter(n, i)), this.length > 1 && (ye[l] || (i = ie.unique(i)), ve.test(l) && (i = i.reverse())), this.pushStack(i)
    }
});
var be = /\S+/g,
    Me = {};
ie.Callbacks = function(l) {
    l = "string" == typeof l ? Me[l] || a(l) : ie.extend({}, l);
    var e, t, n, i, r, o, s = [],
        c = !l.once && [],
        u = function(a) {
            for (t = l.memory && a, n = !0, r = o || 0, o = 0, i = s.length, e = !0; s && i > r; r++)
                if (s[r].apply(a[0], a[1]) === !1 && l.stopOnFalse) {
                    t = !1;
                    break
                }
            e = !1, s && (c ? c.length && u(c.shift()) : t ? s = [] : d.disable())
        },
        d = {
            add: function() {
                if (s) {
                    var n = s.length;
                    ! function a(e) {
                        ie.each(e, function(e, t) {
                            var n = ie.type(t);
                            "function" === n ? l.unique && d.has(t) || s.push(t) : t && t.length && "string" !== n && a(t)
                        })
                    }(arguments), e ? i = s.length : t && (o = n, u(t))
                }
                return this
            },
            remove: function() {
                return s && ie.each(arguments, function(l, t) {
                    for (var n;
                        (n = ie.inArray(t, s, n)) > -1;) s.splice(n, 1), e && (i >= n && i--, r >= n && r--)
                }), this
            },
            has: function(l) {
                return l ? ie.inArray(l, s) > -1 : !(!s || !s.length)
            },
            empty: function() {
                return s = [], i = 0, this
            },
            disable: function() {
                return s = c = t = void 0, this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return c = void 0, t || d.disable(), this
            },
            locked: function() {
                return !c
            },
            fireWith: function(l, t) {
                return !s || n && !c || (t = t || [], t = [l, t.slice ? t.slice() : t], e ? c.push(t) : u(t)), this
            },
            fire: function() {
                return d.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
    return d
}, ie.extend({
    Deferred: function(l) {
        var e = [
                ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ie.Callbacks("memory")]
            ],
            t = "pending",
            n = {
                state: function() {
                    return t
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this
                },
                then: function() {
                    var l = arguments;
                    return ie.Deferred(function(t) {
                        ie.each(e, function(e, a) {
                            var r = ie.isFunction(l[e]) && l[e];
                            i[a[1]](function() {
                                var l = r && r.apply(this, arguments);
                                l && ie.isFunction(l.promise) ? l.promise().done(t.resolve).fail(t.reject).progress(t.notify) : t[a[0] + "With"](this === n ? t.promise() : this, r ? [l] : arguments)
                            })
                        }), l = null
                    }).promise()
                },
                promise: function(l) {
                    return null != l ? ie.extend(l, n) : n
                }
            },
            i = {};
        return n.pipe = n.then, ie.each(e, function(l, a) {
            var r = a[2],
                o = a[3];
            n[a[1]] = r.add, o && r.add(function() {
                t = o
            }, e[1 ^ l][2].disable, e[2][2].lock), i[a[0]] = function() {
                return i[a[0] + "With"](this === i ? n : this, arguments), this
            }, i[a[0] + "With"] = r.fireWith
        }), n.promise(i), l && l.call(i, i), i
    },
    when: function(l) {
        var e, t, n, i = 0,
            a = K.call(arguments),
            r = a.length,
            o = 1 !== r || l && ie.isFunction(l.promise) ? r : 0,
            s = 1 === o ? l : ie.Deferred(),
            c = function(l, t, n) {
                return function(i) {
                    t[l] = this, n[l] = arguments.length > 1 ? K.call(arguments) : i, n === e ? s.notifyWith(t, n) : --o || s.resolveWith(t, n)
                }
            };
        if (r > 1)
            for (e = new Array(r), t = new Array(r), n = new Array(r); r > i; i++) a[i] && ie.isFunction(a[i].promise) ? a[i].promise().done(c(i, n, a)).fail(s.reject).progress(c(i, t, e)) : --o;
        return o || s.resolveWith(n, a), s.promise()
    }
});
var we;
ie.fn.ready = function(l) {
    return ie.ready.promise().done(l), this
}, ie.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(l) {
        l ? ie.readyWait++ : ie.ready(!0)
    },
    ready: function(l) {
        if (l === !0 ? !--ie.readyWait : !ie.isReady) {
            if (!pe.body) return setTimeout(ie.ready);
            ie.isReady = !0, l !== !0 && --ie.readyWait > 0 || (we.resolveWith(pe, [ie]), ie.fn.triggerHandler && (ie(pe).triggerHandler("ready"), ie(pe).off("ready")))
        }
    }
}), ie.ready.promise = function(e) {
    if (!we)
        if (we = ie.Deferred(), "complete" === pe.readyState) setTimeout(ie.ready);
        else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", o, !1), l.addEventListener("load", o, !1);
    else {
        pe.attachEvent("onreadystatechange", o), l.attachEvent("onload", o);
        var t = !1;
        try {
            t = null == l.frameElement && pe.documentElement
        } catch (n) {}
        t && t.doScroll && ! function i() {
            if (!ie.isReady) {
                try {
                    t.doScroll("left")
                } catch (l) {
                    return setTimeout(i, 50)
                }
                r(), ie.ready()
            }
        }()
    }
    return we.promise(e)
};
var xe, ke = "undefined";
for (xe in ie(te)) break;
te.ownLast = "0" !== xe, te.inlineBlockNeedsLayout = !1, ie(function() {
        var l, e, t, n;
        t = pe.getElementsByTagName("body")[0], t && t.style && (e = pe.createElement("div"), n = pe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", te.inlineBlockNeedsLayout = l = 3 === e.offsetWidth, l && (t.style.zoom = 1)), t.removeChild(n))
    }),
    function() {
        var l = pe.createElement("div");
        if (null == te.deleteExpando) {
            te.deleteExpando = !0;
            try {
                delete l.test
            } catch (e) {
                te.deleteExpando = !1
            }
        }
        l = null
    }(), ie.acceptData = function(l) {
        var e = ie.noData[(l.nodeName + " ").toLowerCase()],
            t = +l.nodeType || 1;
        return 1 !== t && 9 !== t ? !1 : !e || e !== !0 && l.getAttribute("classid") === e
    };
var Ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ce = /([A-Z])/g;
ie.extend({
    cache: {},
    noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(l) {
        return l = l.nodeType ? ie.cache[l[ie.expando]] : l[ie.expando], !!l && !c(l)
    },
    data: function(l, e, t) {
        return u(l, e, t)
    },
    removeData: function(l, e) {
        return d(l, e)
    },
    _data: function(l, e, t) {
        return u(l, e, t, !0)
    },
    _removeData: function(l, e) {
        return d(l, e, !0)
    }
}), ie.fn.extend({
    data: function(l, e) {
        var t, n, i, a = this[0],
            r = a && a.attributes;
        if (void 0 === l) {
            if (this.length && (i = ie.data(a), 1 === a.nodeType && !ie._data(a, "parsedAttrs"))) {
                for (t = r.length; t--;) r[t] && (n = r[t].name, 0 === n.indexOf("data-") && (n = ie.camelCase(n.slice(5)), s(a, n, i[n])));
                ie._data(a, "parsedAttrs", !0)
            }
            return i
        }
        return "object" == typeof l ? this.each(function() {
            ie.data(this, l)
        }) : arguments.length > 1 ? this.each(function() {
            ie.data(this, l, e)
        }) : a ? s(a, l, ie.data(a, l)) : void 0
    },
    removeData: function(l) {
        return this.each(function() {
            ie.removeData(this, l)
        })
    }
}), ie.extend({
    queue: function(l, e, t) {
        var n;
        return l ? (e = (e || "fx") + "queue", n = ie._data(l, e), t && (!n || ie.isArray(t) ? n = ie._data(l, e, ie.makeArray(t)) : n.push(t)), n || []) : void 0
    },
    dequeue: function(l, e) {
        e = e || "fx";
        var t = ie.queue(l, e),
            n = t.length,
            i = t.shift(),
            a = ie._queueHooks(l, e),
            r = function() {
                ie.dequeue(l, e)
            };
        "inprogress" === i && (i = t.shift(), n--), i && ("fx" === e && t.unshift("inprogress"), delete a.stop, i.call(l, r, a)), !n && a && a.empty.fire()
    },
    _queueHooks: function(l, e) {
        var t = e + "queueHooks";
        return ie._data(l, t) || ie._data(l, t, {
            empty: ie.Callbacks("once memory").add(function() {
                ie._removeData(l, e + "queue"), ie._removeData(l, t)
            })
        })
    }
}), ie.fn.extend({
    queue: function(l, e) {
        var t = 2;
        return "string" != typeof l && (e = l, l = "fx", t--), arguments.length < t ? ie.queue(this[0], l) : void 0 === e ? this : this.each(function() {
            var t = ie.queue(this, l, e);
            ie._queueHooks(this, l), "fx" === l && "inprogress" !== t[0] && ie.dequeue(this, l)
        })
    },
    dequeue: function(l) {
        return this.each(function() {
            ie.dequeue(this, l)
        })
    },
    clearQueue: function(l) {
        return this.queue(l || "fx", [])
    },
    promise: function(l, e) {
        var t, n = 1,
            i = ie.Deferred(),
            a = this,
            r = this.length,
            o = function() {
                --n || i.resolveWith(a, [a])
            };
        for ("string" != typeof l && (e = l, l = void 0), l = l || "fx"; r--;) t = ie._data(a[r], l + "queueHooks"), t && t.empty && (n++, t.empty.add(o));
        return o(), i.promise(e)
    }
});
var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    je = ["Top", "Right", "Bottom", "Left"],
    _e = function(l, e) {
        return l = e || l, "none" === ie.css(l, "display") || !ie.contains(l.ownerDocument, l)
    },
    Ee = ie.access = function(l, e, t, n, i, a, r) {
        var o = 0,
            s = l.length,
            c = null == t;
        if ("object" === ie.type(t)) {
            i = !0;
            for (o in t) ie.access(l, e, o, t[o], !0, a, r)
        } else if (void 0 !== n && (i = !0, ie.isFunction(n) || (r = !0), c && (r ? (e.call(l, n), e = null) : (c = e, e = function(l, e, t) {
                return c.call(ie(l), t)
            })), e))
            for (; s > o; o++) e(l[o], t, r ? n : n.call(l[o], o, e(l[o], t)));
        return i ? l : c ? e.call(l) : s ? e(l[0], t) : a
    },
    Te = /^(?:checkbox|radio)$/i;
! function() {
    var l = pe.createElement("input"),
        e = pe.createElement("div"),
        t = pe.createDocumentFragment();
    if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", te.leadingWhitespace = 3 === e.firstChild.nodeType, te.tbody = !e.getElementsByTagName("tbody").length, te.htmlSerialize = !!e.getElementsByTagName("link").length, te.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, l.type = "checkbox", l.checked = !0, t.appendChild(l), te.appendChecked = l.checked, e.innerHTML = "<textarea>x</textarea>", te.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", te.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, te.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
            te.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == te.deleteExpando) {
        te.deleteExpando = !0;
        try {
            delete e.test
        } catch (n) {
            te.deleteExpando = !1
        }
    }
}(),
function() {
    var e, t, n = pe.createElement("div");
    for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (te[e + "Bubbles"] = t in l) || (n.setAttribute(t, "t"), te[e + "Bubbles"] = n.attributes[t].expando === !1);
    n = null
}();
var Ae = /^(?:input|select|textarea)$/i,
    Ne = /^key/,
    Le = /^(?:mouse|pointer|contextmenu)|click/,
    qe = /^(?:focusinfocus|focusoutblur)$/,
    Ie = /^([^.]*)(?:\.(.+)|)$/;
ie.event = {
    global: {},
    add: function(l, e, t, n, i) {
        var a, r, o, s, c, u, d, f, h, p, m, g = ie._data(l);
        if (g) {
            for (t.handler && (s = t, t = s.handler, i = s.selector), t.guid || (t.guid = ie.guid++), (r = g.events) || (r = g.events = {}), (u = g.handle) || (u = g.handle = function(l) {
                    return typeof ie === ke || l && ie.event.triggered === l.type ? void 0 : ie.event.dispatch.apply(u.elem, arguments)
                }, u.elem = l), e = (e || "").match(be) || [""], o = e.length; o--;) a = Ie.exec(e[o]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h && (c = ie.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) || h, c = ie.event.special[h] || {}, d = ie.extend({
                type: h,
                origType: m,
                data: n,
                handler: t,
                guid: t.guid,
                selector: i,
                needsContext: i && ie.expr.match.needsContext.test(i),
                namespace: p.join(".")
            }, s), (f = r[h]) || (f = r[h] = [], f.delegateCount = 0, c.setup && c.setup.call(l, n, p, u) !== !1 || (l.addEventListener ? l.addEventListener(h, u, !1) : l.attachEvent && l.attachEvent("on" + h, u))), c.add && (c.add.call(l, d), d.handler.guid || (d.handler.guid = t.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[h] = !0);
            l = null
        }
    },
    remove: function(l, e, t, n, i) {
        var a, r, o, s, c, u, d, f, h, p, m, g = ie.hasData(l) && ie._data(l);
        if (g && (u = g.events)) {
            for (e = (e || "").match(be) || [""], c = e.length; c--;)
                if (o = Ie.exec(e[c]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h) {
                    for (d = ie.event.special[h] || {}, h = (n ? d.delegateType : d.bindType) || h, f = u[h] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = f.length; a--;) r = f[a], !i && m !== r.origType || t && t.guid !== r.guid || o && !o.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (f.splice(a, 1), r.selector && f.delegateCount--, d.remove && d.remove.call(l, r));
                    s && !f.length && (d.teardown && d.teardown.call(l, p, g.handle) !== !1 || ie.removeEvent(l, h, g.handle), delete u[h])
                } else
                    for (h in u) ie.event.remove(l, h + e[c], t, n, !0);
            ie.isEmptyObject(u) && (delete g.handle, ie._removeData(l, "events"))
        }
    },
    trigger: function(e, t, n, i) {
        var a, r, o, s, c, u, d, f = [n || pe],
            h = ee.call(e, "type") ? e.type : e,
            p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = u = n = n || pe, 3 !== n.nodeType && 8 !== n.nodeType && !qe.test(h + ie.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), r = h.indexOf(":") < 0 && "on" + h, e = e[ie.expando] ? e : new ie.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ie.makeArray(t, [e]), c = ie.event.special[h] || {}, i || !c.trigger || c.trigger.apply(n, t) !== !1)) {
            if (!i && !c.noBubble && !ie.isWindow(n)) {
                for (s = c.delegateType || h, qe.test(s + h) || (o = o.parentNode); o; o = o.parentNode) f.push(o), u = o;
                u === (n.ownerDocument || pe) && f.push(u.defaultView || u.parentWindow || l)
            }
            for (d = 0;
                (o = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? s : c.bindType || h, a = (ie._data(o, "events") || {})[e.type] && ie._data(o, "handle"), a && a.apply(o, t), a = r && o[r], a && a.apply && ie.acceptData(o) && (e.result = a.apply(o, t), e.result === !1 && e.preventDefault());
            if (e.type = h, !i && !e.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), t) === !1) && ie.acceptData(n) && r && n[h] && !ie.isWindow(n)) {
                u = n[r], u && (n[r] = null), ie.event.triggered = h;
                try {
                    n[h]()
                } catch (m) {}
                ie.event.triggered = void 0, u && (n[r] = u)
            }
            return e.result
        }
    },
    dispatch: function(l) {
        l = ie.event.fix(l);
        var e, t, n, i, a, r = [],
            o = K.call(arguments),
            s = (ie._data(this, "events") || {})[l.type] || [],
            c = ie.event.special[l.type] || {};
        if (o[0] = l, l.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, l) !== !1) {
            for (r = ie.event.handlers.call(this, l, s), e = 0;
                (i = r[e++]) && !l.isPropagationStopped();)
                for (l.currentTarget = i.elem, a = 0;
                    (n = i.handlers[a++]) && !l.isImmediatePropagationStopped();)(!l.namespace_re || l.namespace_re.test(n.namespace)) && (l.handleObj = n, l.data = n.data, t = ((ie.event.special[n.origType] || {}).handle || n.handler).apply(i.elem, o), void 0 !== t && (l.result = t) === !1 && (l.preventDefault(), l.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, l), l.result
        }
    },
    handlers: function(l, e) {
        var t, n, i, a, r = [],
            o = e.delegateCount,
            s = l.target;
        if (o && s.nodeType && (!l.button || "click" !== l.type))
            for (; s != this; s = s.parentNode || this)
                if (1 === s.nodeType && (s.disabled !== !0 || "click" !== l.type)) {
                    for (i = [], a = 0; o > a; a++) n = e[a], t = n.selector + " ", void 0 === i[t] && (i[t] = n.needsContext ? ie(t, this).index(s) >= 0 : ie.find(t, this, null, [s]).length), i[t] && i.push(n);
                    i.length && r.push({
                        elem: s,
                        handlers: i
                    })
                }
        return o < e.length && r.push({
            elem: this,
            handlers: e.slice(o)
        }), r
    },
    fix: function(l) {
        if (l[ie.expando]) return l;
        var e, t, n, i = l.type,
            a = l,
            r = this.fixHooks[i];
        for (r || (this.fixHooks[i] = r = Le.test(i) ? this.mouseHooks : Ne.test(i) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, l = new ie.Event(a), e = n.length; e--;) t = n[e], l[t] = a[t];
        return l.target || (l.target = a.srcElement || pe), 3 === l.target.nodeType && (l.target = l.target.parentNode), l.metaKey = !!l.metaKey, r.filter ? r.filter(l, a) : l
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(l, e) {
            return null == l.which && (l.which = null != e.charCode ? e.charCode : e.keyCode), l
        }
    },
    mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(l, e) {
            var t, n, i, a = e.button,
                r = e.fromElement;
            return null == l.pageX && null != e.clientX && (n = l.target.ownerDocument || pe, i = n.documentElement, t = n.body, l.pageX = e.clientX + (i && i.scrollLeft || t && t.scrollLeft || 0) - (i && i.clientLeft || t && t.clientLeft || 0), l.pageY = e.clientY + (i && i.scrollTop || t && t.scrollTop || 0) - (i && i.clientTop || t && t.clientTop || 0)), !l.relatedTarget && r && (l.relatedTarget = r === l.target ? e.toElement : r), l.which || void 0 === a || (l.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), l
        }
    },
    special: {
        load: {
            noBubble: !0
        },
        focus: {
            trigger: function() {
                if (this !== p() && this.focus) try {
                    return this.focus(), !1
                } catch (l) {}
            },
            delegateType: "focusin"
        },
        blur: {
            trigger: function() {
                return this === p() && this.blur ? (this.blur(), !1) : void 0
            },
            delegateType: "focusout"
        },
        click: {
            trigger: function() {
                return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
            },
            _default: function(l) {
                return ie.nodeName(l.target, "a")
            }
        },
        beforeunload: {
            postDispatch: function(l) {
                void 0 !== l.result && l.originalEvent && (l.originalEvent.returnValue = l.result)
            }
        }
    },
    simulate: function(l, e, t, n) {
        var i = ie.extend(new ie.Event, t, {
            type: l,
            isSimulated: !0,
            originalEvent: {}
        });
        n ? ie.event.trigger(i, null, e) : ie.event.dispatch.call(e, i), i.isDefaultPrevented() && t.preventDefault()
    }
}, ie.removeEvent = pe.removeEventListener ? function(l, e, t) {
    l.removeEventListener && l.removeEventListener(e, t, !1)
} : function(l, e, t) {
    var n = "on" + e;
    l.detachEvent && (typeof l[n] === ke && (l[n] = null), l.detachEvent(n, t))
}, ie.Event = function(l, e) {
    return this instanceof ie.Event ? (l && l.type ? (this.originalEvent = l, this.type = l.type, this.isDefaultPrevented = l.defaultPrevented || void 0 === l.defaultPrevented && l.returnValue === !1 ? f : h) : this.type = l, e && ie.extend(this, e), this.timeStamp = l && l.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(l, e)
}, ie.Event.prototype = {
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function() {
        var l = this.originalEvent;
        this.isDefaultPrevented = f, l && (l.preventDefault ? l.preventDefault() : l.returnValue = !1)
    },
    stopPropagation: function() {
        var l = this.originalEvent;
        this.isPropagationStopped = f, l && (l.stopPropagation && l.stopPropagation(), l.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
        var l = this.originalEvent;
        this.isImmediatePropagationStopped = f, l && l.stopImmediatePropagation && l.stopImmediatePropagation(), this.stopPropagation()
    }
}, ie.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function(l, e) {
    ie.event.special[l] = {
        delegateType: e,
        bindType: e,
        handle: function(l) {
            var t, n = this,
                i = l.relatedTarget,
                a = l.handleObj;
            return (!i || i !== n && !ie.contains(n, i)) && (l.type = a.origType, t = a.handler.apply(this, arguments), l.type = e), t
        }
    }
}), te.submitBubbles || (ie.event.special.submit = {
    setup: function() {
        return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(l) {
            var e = l.target,
                t = ie.nodeName(e, "input") || ie.nodeName(e, "button") ? e.form : void 0;
            t && !ie._data(t, "submitBubbles") && (ie.event.add(t, "submit._submit", function(l) {
                l._submit_bubble = !0
            }), ie._data(t, "submitBubbles", !0))
        })
    },
    postDispatch: function(l) {
        l._submit_bubble && (delete l._submit_bubble, this.parentNode && !l.isTrigger && ie.event.simulate("submit", this.parentNode, l, !0))
    },
    teardown: function() {
        return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
    }
}), te.changeBubbles || (ie.event.special.change = {
    setup: function() {
        return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(l) {
            "checked" === l.originalEvent.propertyName && (this._just_changed = !0)
        }), ie.event.add(this, "click._change", function(l) {
            this._just_changed && !l.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, l, !0)
        })), !1) : void ie.event.add(this, "beforeactivate._change", function(l) {
            var e = l.target;
            Ae.test(e.nodeName) && !ie._data(e, "changeBubbles") && (ie.event.add(e, "change._change", function(l) {
                !this.parentNode || l.isSimulated || l.isTrigger || ie.event.simulate("change", this.parentNode, l, !0)
            }), ie._data(e, "changeBubbles", !0))
        })
    },
    handle: function(l) {
        var e = l.target;
        return this !== e || l.isSimulated || l.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? l.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
        return ie.event.remove(this, "._change"), !Ae.test(this.nodeName)
    }
}), te.focusinBubbles || ie.each({
    focus: "focusin",
    blur: "focusout"
}, function(l, e) {
    var t = function(l) {
        ie.event.simulate(e, l.target, ie.event.fix(l), !0)
    };
    ie.event.special[e] = {
        setup: function() {
            var n = this.ownerDocument || this,
                i = ie._data(n, e);
            i || n.addEventListener(l, t, !0), ie._data(n, e, (i || 0) + 1)
        },
        teardown: function() {
            var n = this.ownerDocument || this,
                i = ie._data(n, e) - 1;
            i ? ie._data(n, e, i) : (n.removeEventListener(l, t, !0), ie._removeData(n, e))
        }
    }
}), ie.fn.extend({
    on: function(l, e, t, n, i) {
        var a, r;
        if ("object" == typeof l) {
            "string" != typeof e && (t = t || e, e = void 0);
            for (a in l) this.on(a, e, t, l[a], i);
            return this
        }
        if (null == t && null == n ? (n = e, t = e = void 0) : null == n && ("string" == typeof e ? (n = t, t = void 0) : (n = t, t = e, e = void 0)), n === !1) n = h;
        else if (!n) return this;
        return 1 === i && (r = n, n = function(l) {
            return ie().off(l), r.apply(this, arguments)
        }, n.guid = r.guid || (r.guid = ie.guid++)), this.each(function() {
            ie.event.add(this, l, n, t, e)
        })
    },
    one: function(l, e, t, n) {
        return this.on(l, e, t, n, 1)
    },
    off: function(l, e, t) {
        var n, i;
        if (l && l.preventDefault && l.handleObj) return n = l.handleObj, ie(l.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof l) {
            for (i in l) this.off(i, e, l[i]);
            return this
        }
        return (e === !1 || "function" == typeof e) && (t = e, e = void 0), t === !1 && (t = h), this.each(function() {
            ie.event.remove(this, l, t, e)
        })
    },
    trigger: function(l, e) {
        return this.each(function() {
            ie.event.trigger(l, e, this)
        })
    },
    triggerHandler: function(l, e) {
        var t = this[0];
        return t ? ie.event.trigger(l, e, t, !0) : void 0
    }
});
var De = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Re = / jQuery\d+="(?:null|\d+)"/g,
    ze = new RegExp("<(?:" + De + ")[\\s/>]", "i"),
    Fe = /^\s+/,
    Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Be = /<([\w:]+)/,
    Oe = /<tbody/i,
    He = /<|&#?\w+;/,
    We = /<(?:script|style|link)/i,
    Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ue = /^$|\/(?:java|ecma)script/i,
    $e = /^true\/(.*)/,
    Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ke = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: te.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Xe = m(pe),
    Ye = Xe.appendChild(pe.createElement("div"));
Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td, ie.extend({
    clone: function(l, e, t) {
        var n, i, a, r, o, s = ie.contains(l.ownerDocument, l);
        if (te.html5Clone || ie.isXMLDoc(l) || !ze.test("<" + l.nodeName + ">") ? a = l.cloneNode(!0) : (Ye.innerHTML = l.outerHTML, Ye.removeChild(a = Ye.firstChild)), !(te.noCloneEvent && te.noCloneChecked || 1 !== l.nodeType && 11 !== l.nodeType || ie.isXMLDoc(l)))
            for (n = g(a), o = g(l), r = 0; null != (i = o[r]); ++r) n[r] && k(i, n[r]);
        if (e)
            if (t)
                for (o = o || g(l), n = n || g(a), r = 0; null != (i = o[r]); r++) x(i, n[r]);
            else x(l, a);
        return n = g(a, "script"), n.length > 0 && w(n, !s && g(l, "script")), n = o = i = null, a
    },
    buildFragment: function(l, e, t, n) {
        for (var i, a, r, o, s, c, u, d = l.length, f = m(e), h = [], p = 0; d > p; p++)
            if (a = l[p], a || 0 === a)
                if ("object" === ie.type(a)) ie.merge(h, a.nodeType ? [a] : a);
                else if (He.test(a)) {
            for (o = o || f.appendChild(e.createElement("div")), s = (Be.exec(a) || ["", ""])[1].toLowerCase(), u = Ke[s] || Ke._default, o.innerHTML = u[1] + a.replace(Pe, "<$1></$2>") + u[2], i = u[0]; i--;) o = o.lastChild;
            if (!te.leadingWhitespace && Fe.test(a) && h.push(e.createTextNode(Fe.exec(a)[0])), !te.tbody)
                for (a = "table" !== s || Oe.test(a) ? "<table>" !== u[1] || Oe.test(a) ? 0 : o : o.firstChild, i = a && a.childNodes.length; i--;) ie.nodeName(c = a.childNodes[i], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (ie.merge(h, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
            o = f.lastChild
        } else h.push(e.createTextNode(a));
        for (o && f.removeChild(o), te.appendChecked || ie.grep(g(h, "input"), v), p = 0; a = h[p++];)
            if ((!n || -1 === ie.inArray(a, n)) && (r = ie.contains(a.ownerDocument, a), o = g(f.appendChild(a), "script"), r && w(o), t))
                for (i = 0; a = o[i++];) Ue.test(a.type || "") && t.push(a);
        return o = null, f
    },
    cleanData: function(l, e) {
        for (var t, n, i, a, r = 0, o = ie.expando, s = ie.cache, c = te.deleteExpando, u = ie.event.special; null != (t = l[r]); r++)
            if ((e || ie.acceptData(t)) && (i = t[o], a = i && s[i])) {
                if (a.events)
                    for (n in a.events) u[n] ? ie.event.remove(t, n) : ie.removeEvent(t, n, a.handle);
                s[i] && (delete s[i], c ? delete t[o] : typeof t.removeAttribute !== ke ? t.removeAttribute(o) : t[o] = null, G.push(i))
            }
    }
}), ie.fn.extend({
    text: function(l) {
        return Ee(this, function(l) {
            return void 0 === l ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(l))
        }, null, l, arguments.length)
    },
    append: function() {
        return this.domManip(arguments, function(l) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = y(this, l);
                e.appendChild(l)
            }
        })
    },
    prepend: function() {
        return this.domManip(arguments, function(l) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = y(this, l);
                e.insertBefore(l, e.firstChild)
            }
        })
    },
    before: function() {
        return this.domManip(arguments, function(l) {
            this.parentNode && this.parentNode.insertBefore(l, this)
        })
    },
    after: function() {
        return this.domManip(arguments, function(l) {
            this.parentNode && this.parentNode.insertBefore(l, this.nextSibling)
        })
    },
    remove: function(l, e) {
        for (var t, n = l ? ie.filter(l, this) : this, i = 0; null != (t = n[i]); i++) e || 1 !== t.nodeType || ie.cleanData(g(t)), t.parentNode && (e && ie.contains(t.ownerDocument, t) && w(g(t, "script")), t.parentNode.removeChild(t));
        return this
    },
    empty: function() {
        for (var l, e = 0; null != (l = this[e]); e++) {
            for (1 === l.nodeType && ie.cleanData(g(l, !1)); l.firstChild;) l.removeChild(l.firstChild);
            l.options && ie.nodeName(l, "select") && (l.options.length = 0)
        }
        return this
    },
    clone: function(l, e) {
        return l = null == l ? !1 : l, e = null == e ? l : e, this.map(function() {
            return ie.clone(this, l, e)
        })
    },
    html: function(l) {
        return Ee(this, function(l) {
            var e = this[0] || {},
                t = 0,
                n = this.length;
            if (void 0 === l) return 1 === e.nodeType ? e.innerHTML.replace(Re, "") : void 0;
            if (!("string" != typeof l || We.test(l) || !te.htmlSerialize && ze.test(l) || !te.leadingWhitespace && Fe.test(l) || Ke[(Be.exec(l) || ["", ""])[1].toLowerCase()])) {
                l = l.replace(Pe, "<$1></$2>");
                try {
                    for (; n > t; t++) e = this[t] || {}, 1 === e.nodeType && (ie.cleanData(g(e, !1)), e.innerHTML = l);
                    e = 0
                } catch (i) {}
            }
            e && this.empty().append(l)
        }, null, l, arguments.length)
    },
    replaceWith: function() {
        var l = arguments[0];
        return this.domManip(arguments, function(e) {
            l = this.parentNode, ie.cleanData(g(this)), l && l.replaceChild(e, this)
        }), l && (l.length || l.nodeType) ? this : this.remove()
    },
    detach: function(l) {
        return this.remove(l, !0)
    },
    domManip: function(l, e) {
        l = X.apply([], l);
        var t, n, i, a, r, o, s = 0,
            c = this.length,
            u = this,
            d = c - 1,
            f = l[0],
            h = ie.isFunction(f);
        if (h || c > 1 && "string" == typeof f && !te.checkClone && Ve.test(f)) return this.each(function(t) {
            var n = u.eq(t);
            h && (l[0] = f.call(this, t, n.html())), n.domManip(l, e)
        });
        if (c && (o = ie.buildFragment(l, this[0].ownerDocument, !1, this), t = o.firstChild, 1 === o.childNodes.length && (o = t), t)) {
            for (a = ie.map(g(o, "script"), b), i = a.length; c > s; s++) n = o, s !== d && (n = ie.clone(n, !0, !0), i && ie.merge(a, g(n, "script"))), e.call(this[s], n, s);
            if (i)
                for (r = a[a.length - 1].ownerDocument, ie.map(a, M), s = 0; i > s; s++) n = a[s], Ue.test(n.type || "") && !ie._data(n, "globalEval") && ie.contains(r, n) && (n.src ? ie._evalUrl && ie._evalUrl(n.src) : ie.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ge, "")));
            o = t = null
        }
        return this
    }
}), ie.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(l, e) {
    ie.fn[l] = function(l) {
        for (var t, n = 0, i = [], a = ie(l), r = a.length - 1; r >= n; n++) t = n === r ? this : this.clone(!0), ie(a[n])[e](t), Y.apply(i, t.get());
        return this.pushStack(i)
    }
});
var Qe, Je = {};
! function() {
    var l;
    te.shrinkWrapBlocks = function() {
        if (null != l) return l;
        l = !1;
        var e, t, n;
        return t = pe.getElementsByTagName("body")[0], t && t.style ? (e = pe.createElement("div"), n = pe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", l = 3 !== e.offsetWidth), t.removeChild(n), l) : void 0
    }
}();
var lt, et, tt = /^margin/,
    nt = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
    it = /^(top|right|bottom|left)$/;
l.getComputedStyle ? (lt = function(l) {
        return l.ownerDocument.defaultView.getComputedStyle(l, null)
    }, et = function(l, e, t) {
        var n, i, a, r, o = l.style;
        return t = t || lt(l), r = t ? t.getPropertyValue(e) || t[e] : void 0, t && ("" !== r || ie.contains(l.ownerDocument, l) || (r = ie.style(l, e)), nt.test(r) && tt.test(e) && (n = o.width, i = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = t.width, o.width = n, o.minWidth = i, o.maxWidth = a)), void 0 === r ? r : r + ""
    }) : pe.documentElement.currentStyle && (lt = function(l) {
        return l.currentStyle
    }, et = function(l, e, t) {
        var n, i, a, r, o = l.style;
        return t = t || lt(l), r = t ? t[e] : void 0, null == r && o && o[e] && (r = o[e]), nt.test(r) && !it.test(e) && (n = o.left, i = l.runtimeStyle, a = i && i.left, a && (i.left = l.currentStyle.left), o.left = "fontSize" === e ? "1em" : r, r = o.pixelLeft + "px", o.left = n, a && (i.left = a)), void 0 === r ? r : r + "" || "auto"
    }),
    function() {
        function e() {
            var e, t, n, i;
            t = pe.getElementsByTagName("body")[0], t && t.style && (e = pe.createElement("div"), n = pe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = r = !1, s = !0, l.getComputedStyle && (a = "1%" !== (l.getComputedStyle(e, null) || {}).top, r = "4px" === (l.getComputedStyle(e, null) || {
                width: "4px"
            }).width, i = e.appendChild(pe.createElement("div")), i.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", s = !parseFloat((l.getComputedStyle(i, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = e.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === i[0].offsetHeight, o && (i[0].style.display = "", i[1].style.display = "none", o = 0 === i[0].offsetHeight), t.removeChild(n))
        }
        var t, n, i, a, r, o, s;
        t = pe.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = i && i.style, n && (n.cssText = "float:left;opacity:.5", te.opacity = "0.5" === n.opacity, te.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", te.clearCloneStyle = "content-box" === t.style.backgroundClip, te.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, ie.extend(te, {
            reliableHiddenOffsets: function() {
                return null == o && e(), o
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            pixelPosition: function() {
                return null == a && e(), a
            },
            reliableMarginRight: function() {
                return null == s && e(), s
            }
        }))
    }(), ie.swap = function(l, e, t, n) {
        var i, a, r = {};
        for (a in e) r[a] = l.style[a], l.style[a] = e[a];
        i = t.apply(l, n || []);
        for (a in e) l.style[a] = r[a];
        return i
    };
var at = /alpha\([^)]*\)/i,
    rt = /opacity\s*=\s*([^)]*)/,
    ot = /^(none|table(?!-c[ea]).+)/,
    st = new RegExp("^(" + Se + ")(.*)$", "i"),
    ct = new RegExp("^([+-])=(" + Se + ")", "i"),
    ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    dt = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    ft = ["Webkit", "O", "Moz", "ms"];
ie.extend({
    cssHooks: {
        opacity: {
            get: function(l, e) {
                if (e) {
                    var t = et(l, "opacity");
                    return "" === t ? "1" : t
                }
            }
        }
    },
    cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    cssProps: {
        "float": te.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(l, e, t, n) {
        if (l && 3 !== l.nodeType && 8 !== l.nodeType && l.style) {
            var i, a, r, o = ie.camelCase(e),
                s = l.style;
            if (e = ie.cssProps[o] || (ie.cssProps[o] = j(s, o)), r = ie.cssHooks[e] || ie.cssHooks[o], void 0 === t) return r && "get" in r && void 0 !== (i = r.get(l, !1, n)) ? i : s[e];
            if (a = typeof t, "string" === a && (i = ct.exec(t)) && (t = (i[1] + 1) * i[2] + parseFloat(ie.css(l, e)), a = "number"), null != t && t === t && ("number" !== a || ie.cssNumber[o] || (t += "px"), te.clearCloneStyle || "" !== t || 0 !== e.indexOf("background") || (s[e] = "inherit"), !(r && "set" in r && void 0 === (t = r.set(l, t, n))))) try {
                s[e] = t
            } catch (c) {}
        }
    },
    css: function(l, e, t, n) {
        var i, a, r, o = ie.camelCase(e);
        return e = ie.cssProps[o] || (ie.cssProps[o] = j(l.style, o)), r = ie.cssHooks[e] || ie.cssHooks[o], r && "get" in r && (a = r.get(l, !0, t)), void 0 === a && (a = et(l, e, n)), "normal" === a && e in dt && (a = dt[e]), "" === t || t ? (i = parseFloat(a), t === !0 || ie.isNumeric(i) ? i || 0 : a) : a
    }
}), ie.each(["height", "width"], function(l, e) {
    ie.cssHooks[e] = {
        get: function(l, t, n) {
            return t ? ot.test(ie.css(l, "display")) && 0 === l.offsetWidth ? ie.swap(l, ut, function() {
                return A(l, e, n)
            }) : A(l, e, n) : void 0
        },
        set: function(l, t, n) {
            var i = n && lt(l);
            return E(l, t, n ? T(l, e, n, te.boxSizing && "border-box" === ie.css(l, "boxSizing", !1, i), i) : 0)
        }
    }
}), te.opacity || (ie.cssHooks.opacity = {
    get: function(l, e) {
        return rt.test((e && l.currentStyle ? l.currentStyle.filter : l.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    },
    set: function(l, e) {
        var t = l.style,
            n = l.currentStyle,
            i = ie.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            a = n && n.filter || t.filter || "";
        t.zoom = 1, (e >= 1 || "" === e) && "" === ie.trim(a.replace(at, "")) && t.removeAttribute && (t.removeAttribute("filter"), "" === e || n && !n.filter) || (t.filter = at.test(a) ? a.replace(at, i) : a + " " + i)
    }
}), ie.cssHooks.marginRight = S(te.reliableMarginRight, function(l, e) {
    return e ? ie.swap(l, {
        display: "inline-block"
    }, et, [l, "marginRight"]) : void 0
}), ie.each({
    margin: "",
    padding: "",
    border: "Width"
}, function(l, e) {
    ie.cssHooks[l + e] = {
        expand: function(t) {
            for (var n = 0, i = {}, a = "string" == typeof t ? t.split(" ") : [t]; 4 > n; n++) i[l + je[n] + e] = a[n] || a[n - 2] || a[0];
            return i
        }
    }, tt.test(l) || (ie.cssHooks[l + e].set = E)
}), ie.fn.extend({
    css: function(l, e) {
        return Ee(this, function(l, e, t) {
            var n, i, a = {},
                r = 0;
            if (ie.isArray(e)) {
                for (n = lt(l), i = e.length; i > r; r++) a[e[r]] = ie.css(l, e[r], !1, n);
                return a
            }
            return void 0 !== t ? ie.style(l, e, t) : ie.css(l, e)
        }, l, e, arguments.length > 1)
    },
    show: function() {
        return _(this, !0)
    },
    hide: function() {
        return _(this)
    },
    toggle: function(l) {
        return "boolean" == typeof l ? l ? this.show() : this.hide() : this.each(function() {
            _e(this) ? ie(this).show() : ie(this).hide()
        })
    }
}), ie.Tween = N, N.prototype = {
    constructor: N,
    init: function(l, e, t, n, i, a) {
        this.elem = l, this.prop = t, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = a || (ie.cssNumber[t] ? "" : "px")
    },
    cur: function() {
        var l = N.propHooks[this.prop];
        return l && l.get ? l.get(this) : N.propHooks._default.get(this)
    },
    run: function(l) {
        var e, t = N.propHooks[this.prop];
        return this.pos = e = this.options.duration ? ie.easing[this.easing](l, this.options.duration * l, 0, 1, this.options.duration) : l, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : N.propHooks._default.set(this), this
    }
}, N.prototype.init.prototype = N.prototype, N.propHooks = {
    _default: {
        get: function(l) {
            var e;
            return null == l.elem[l.prop] || l.elem.style && null != l.elem.style[l.prop] ? (e = ie.css(l.elem, l.prop, ""), e && "auto" !== e ? e : 0) : l.elem[l.prop]
        },
        set: function(l) {
            ie.fx.step[l.prop] ? ie.fx.step[l.prop](l) : l.elem.style && (null != l.elem.style[ie.cssProps[l.prop]] || ie.cssHooks[l.prop]) ? ie.style(l.elem, l.prop, l.now + l.unit) : l.elem[l.prop] = l.now
        }
    }
}, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
    set: function(l) {
        l.elem.nodeType && l.elem.parentNode && (l.elem[l.prop] = l.now)
    }
}, ie.easing = {
    linear: function(l) {
        return l
    },
    swing: function(l) {
        return .5 - Math.cos(l * Math.PI) / 2
    }
}, ie.fx = N.prototype.init, ie.fx.step = {};
var ht, pt, mt = /^(?:toggle|show|hide)$/,
    gt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
    vt = /queueHooks$/,
    yt = [D],
    bt = {
        "*": [function(l, e) {
            var t = this.createTween(l, e),
                n = t.cur(),
                i = gt.exec(e),
                a = i && i[3] || (ie.cssNumber[l] ? "" : "px"),
                r = (ie.cssNumber[l] || "px" !== a && +n) && gt.exec(ie.css(t.elem, l)),
                o = 1,
                s = 20;
            if (r && r[3] !== a) {
                a = a || r[3], i = i || [], r = +n || 1;
                do o = o || ".5", r /= o, ie.style(t.elem, l, r + a); while (o !== (o = t.cur() / n) && 1 !== o && --s)
            }
            return i && (r = t.start = +r || +n || 0, t.unit = a, t.end = i[1] ? r + (i[1] + 1) * i[2] : +i[2]), t
        }]
    };
ie.Animation = ie.extend(z, {
        tweener: function(l, e) {
            ie.isFunction(l) ? (e = l, l = ["*"]) : l = l.split(" ");
            for (var t, n = 0, i = l.length; i > n; n++) t = l[n], bt[t] = bt[t] || [], bt[t].unshift(e)
        },
        prefilter: function(l, e) {
            e ? yt.unshift(l) : yt.push(l)
        }
    }), ie.speed = function(l, e, t) {
        var n = l && "object" == typeof l ? ie.extend({}, l) : {
            complete: t || !t && e || ie.isFunction(l) && l,
            duration: l,
            easing: t && e || e && !ie.isFunction(e) && e
        };
        return n.duration = ie.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ie.fx.speeds ? ie.fx.speeds[n.duration] : ie.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ie.isFunction(n.old) && n.old.call(this), n.queue && ie.dequeue(this, n.queue)
        }, n
    }, ie.fn.extend({
        fadeTo: function(l, e, t, n) {
            return this.filter(_e).css("opacity", 0).show().end().animate({
                opacity: e
            }, l, t, n)
        },
        animate: function(l, e, t, n) {
            var i = ie.isEmptyObject(l),
                a = ie.speed(e, t, n),
                r = function() {
                    var e = z(this, ie.extend({}, l), a);
                    (i || ie._data(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, i || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
        },
        stop: function(l, e, t) {
            var n = function(l) {
                var e = l.stop;
                delete l.stop, e(t)
            };
            return "string" != typeof l && (t = e, e = l, l = void 0), e && l !== !1 && this.queue(l || "fx", []), this.each(function() {
                var e = !0,
                    i = null != l && l + "queueHooks",
                    a = ie.timers,
                    r = ie._data(this);
                if (i) r[i] && r[i].stop && n(r[i]);
                else
                    for (i in r) r[i] && r[i].stop && vt.test(i) && n(r[i]);
                for (i = a.length; i--;) a[i].elem !== this || null != l && a[i].queue !== l || (a[i].anim.stop(t), e = !1, a.splice(i, 1));
                (e || !t) && ie.dequeue(this, l)
            })
        },
        finish: function(l) {
            return l !== !1 && (l = l || "fx"), this.each(function() {
                var e, t = ie._data(this),
                    n = t[l + "queue"],
                    i = t[l + "queueHooks"],
                    a = ie.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, ie.queue(this, l, []), i && i.stop && i.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === l && (a[e].anim.stop(!0), a.splice(e, 1));
                for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), ie.each(["toggle", "show", "hide"], function(l, e) {
        var t = ie.fn[e];
        ie.fn[e] = function(l, n, i) {
            return null == l || "boolean" == typeof l ? t.apply(this, arguments) : this.animate(q(e, !0), l, n, i)
        }
    }), ie.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(l, e) {
        ie.fn[l] = function(l, t, n) {
            return this.animate(e, l, t, n)
        }
    }), ie.timers = [], ie.fx.tick = function() {
        var l, e = ie.timers,
            t = 0;
        for (ht = ie.now(); t < e.length; t++) l = e[t], l() || e[t] !== l || e.splice(t--, 1);
        e.length || ie.fx.stop(), ht = void 0
    }, ie.fx.timer = function(l) {
        ie.timers.push(l), l() ? ie.fx.start() : ie.timers.pop()
    }, ie.fx.interval = 13, ie.fx.start = function() {
        pt || (pt = setInterval(ie.fx.tick, ie.fx.interval))
    }, ie.fx.stop = function() {
        clearInterval(pt), pt = null
    }, ie.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ie.fn.delay = function(l, e) {
        return l = ie.fx ? ie.fx.speeds[l] || l : l, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, l);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    },
    function() {
        var l, e, t, n, i;
        e = pe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], t = pe.createElement("select"), i = t.appendChild(pe.createElement("option")), l = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", te.getSetAttribute = "t" !== e.className, te.style = /top/.test(n.getAttribute("style")), te.hrefNormalized = "/a" === n.getAttribute("href"), te.checkOn = !!l.value, te.optSelected = i.selected, te.enctype = !!pe.createElement("form").enctype, t.disabled = !0, te.optDisabled = !i.disabled, l = pe.createElement("input"), l.setAttribute("value", ""), te.input = "" === l.getAttribute("value"), l.value = "t", l.setAttribute("type", "radio"), te.radioValue = "t" === l.value
    }();
var Mt = /\r/g;
ie.fn.extend({
    val: function(l) {
        var e, t, n, i = this[0]; {
            if (arguments.length) return n = ie.isFunction(l), this.each(function(t) {
                var i;
                1 === this.nodeType && (i = n ? l.call(this, t, ie(this).val()) : l, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(l) {
                    return null == l ? "" : l + ""
                })), e = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
            });
            if (i) return e = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (t = e.get(i, "value")) ? t : (t = i.value, "string" == typeof t ? t.replace(Mt, "") : null == t ? "" : t)
        }
    }
}), ie.extend({
    valHooks: {
        option: {
            get: function(l) {
                var e = ie.find.attr(l, "value");
                return null != e ? e : ie.trim(ie.text(l))
            }
        },
        select: {
            get: function(l) {
                for (var e, t, n = l.options, i = l.selectedIndex, a = "select-one" === l.type || 0 > i, r = a ? null : [], o = a ? i + 1 : n.length, s = 0 > i ? o : a ? i : 0; o > s; s++)
                    if (t = n[s], !(!t.selected && s !== i || (te.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && ie.nodeName(t.parentNode, "optgroup"))) {
                        if (e = ie(t).val(), a) return e;
                        r.push(e)
                    }
                return r
            },
            set: function(l, e) {
                for (var t, n, i = l.options, a = ie.makeArray(e), r = i.length; r--;)
                    if (n = i[r], ie.inArray(ie.valHooks.option.get(n), a) >= 0) try {
                        n.selected = t = !0
                    } catch (o) {
                        n.scrollHeight
                    } else n.selected = !1;
                return t || (l.selectedIndex = -1), i
            }
        }
    }
}), ie.each(["radio", "checkbox"], function() {
    ie.valHooks[this] = {
        set: function(l, e) {
            return ie.isArray(e) ? l.checked = ie.inArray(ie(l).val(), e) >= 0 : void 0
        }
    }, te.checkOn || (ie.valHooks[this].get = function(l) {
        return null === l.getAttribute("value") ? "on" : l.value
    })
});
var wt, xt, kt = ie.expr.attrHandle,
    Zt = /^(?:checked|selected)$/i,
    Ct = te.getSetAttribute,
    St = te.input;
ie.fn.extend({
    attr: function(l, e) {
        return Ee(this, ie.attr, l, e, arguments.length > 1)
    },
    removeAttr: function(l) {
        return this.each(function() {
            ie.removeAttr(this, l)
        })
    }
}), ie.extend({
    attr: function(l, e, t) {
        var n, i, a = l.nodeType;
        if (l && 3 !== a && 8 !== a && 2 !== a) return typeof l.getAttribute === ke ? ie.prop(l, e, t) : (1 === a && ie.isXMLDoc(l) || (e = e.toLowerCase(), n = ie.attrHooks[e] || (ie.expr.match.bool.test(e) ? xt : wt)), void 0 === t ? n && "get" in n && null !== (i = n.get(l, e)) ? i : (i = ie.find.attr(l, e), null == i ? void 0 : i) : null !== t ? n && "set" in n && void 0 !== (i = n.set(l, t, e)) ? i : (l.setAttribute(e, t + ""), t) : void ie.removeAttr(l, e))
    },
    removeAttr: function(l, e) {
        var t, n, i = 0,
            a = e && e.match(be);
        if (a && 1 === l.nodeType)
            for (; t = a[i++];) n = ie.propFix[t] || t, ie.expr.match.bool.test(t) ? St && Ct || !Zt.test(t) ? l[n] = !1 : l[ie.camelCase("default-" + t)] = l[n] = !1 : ie.attr(l, t, ""), l.removeAttribute(Ct ? t : n)
    },
    attrHooks: {
        type: {
            set: function(l, e) {
                if (!te.radioValue && "radio" === e && ie.nodeName(l, "input")) {
                    var t = l.value;
                    return l.setAttribute("type", e), t && (l.value = t), e
                }
            }
        }
    }
}), xt = {
    set: function(l, e, t) {
        return e === !1 ? ie.removeAttr(l, t) : St && Ct || !Zt.test(t) ? l.setAttribute(!Ct && ie.propFix[t] || t, t) : l[ie.camelCase("default-" + t)] = l[t] = !0, t
    }
}, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(l, e) {
    var t = kt[e] || ie.find.attr;
    kt[e] = St && Ct || !Zt.test(e) ? function(l, e, n) {
        var i, a;
        return n || (a = kt[e], kt[e] = i, i = null != t(l, e, n) ? e.toLowerCase() : null, kt[e] = a), i
    } : function(l, e, t) {
        return t ? void 0 : l[ie.camelCase("default-" + e)] ? e.toLowerCase() : null
    }
}), St && Ct || (ie.attrHooks.value = {
    set: function(l, e, t) {
        return ie.nodeName(l, "input") ? void(l.defaultValue = e) : wt && wt.set(l, e, t)
    }
}), Ct || (wt = {
    set: function(l, e, t) {
        var n = l.getAttributeNode(t);
        return n || l.setAttributeNode(n = l.ownerDocument.createAttribute(t)), n.value = e += "", "value" === t || e === l.getAttribute(t) ? e : void 0
    }
}, kt.id = kt.name = kt.coords = function(l, e, t) {
    var n;
    return t ? void 0 : (n = l.getAttributeNode(e)) && "" !== n.value ? n.value : null
}, ie.valHooks.button = {
    get: function(l, e) {
        var t = l.getAttributeNode(e);
        return t && t.specified ? t.value : void 0
    },
    set: wt.set
}, ie.attrHooks.contenteditable = {
    set: function(l, e, t) {
        wt.set(l, "" === e ? !1 : e, t)
    }
}, ie.each(["width", "height"], function(l, e) {
    ie.attrHooks[e] = {
        set: function(l, t) {
            return "" === t ? (l.setAttribute(e, "auto"), t) : void 0
        }
    }
})), te.style || (ie.attrHooks.style = {
    get: function(l) {
        return l.style.cssText || void 0
    },
    set: function(l, e) {
        return l.style.cssText = e + ""
    }
});
var jt = /^(?:input|select|textarea|button|object)$/i,
    _t = /^(?:a|area)$/i;
ie.fn.extend({
    prop: function(l, e) {
        return Ee(this, ie.prop, l, e, arguments.length > 1)
    },
    removeProp: function(l) {
        return l = ie.propFix[l] || l, this.each(function() {
            try {
                this[l] = void 0, delete this[l]
            } catch (e) {}
        })
    }
}), ie.extend({
    propFix: {
        "for": "htmlFor",
        "class": "className"
    },
    prop: function(l, e, t) {
        var n, i, a, r = l.nodeType;
        if (l && 3 !== r && 8 !== r && 2 !== r) return a = 1 !== r || !ie.isXMLDoc(l), a && (e = ie.propFix[e] || e, i = ie.propHooks[e]), void 0 !== t ? i && "set" in i && void 0 !== (n = i.set(l, t, e)) ? n : l[e] = t : i && "get" in i && null !== (n = i.get(l, e)) ? n : l[e]
    },
    propHooks: {
        tabIndex: {
            get: function(l) {
                var e = ie.find.attr(l, "tabindex");
                return e ? parseInt(e, 10) : jt.test(l.nodeName) || _t.test(l.nodeName) && l.href ? 0 : -1
            }
        }
    }
}), te.hrefNormalized || ie.each(["href", "src"], function(l, e) {
    ie.propHooks[e] = {
        get: function(l) {
            return l.getAttribute(e, 4)
        }
    }
}), te.optSelected || (ie.propHooks.selected = {
    get: function(l) {
        var e = l.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }
}), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ie.propFix[this.toLowerCase()] = this
}), te.enctype || (ie.propFix.enctype = "encoding");
var Et = /[\t\r\n\f]/g;
ie.fn.extend({
    addClass: function(l) {
        var e, t, n, i, a, r, o = 0,
            s = this.length,
            c = "string" == typeof l && l;
        if (ie.isFunction(l)) return this.each(function(e) {
            ie(this).addClass(l.call(this, e, this.className))
        });
        if (c)
            for (e = (l || "").match(be) || []; s > o; o++)
                if (t = this[o], n = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(Et, " ") : " ")) {
                    for (a = 0; i = e[a++];) n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    r = ie.trim(n), t.className !== r && (t.className = r)
                }
        return this
    },
    removeClass: function(l) {
        var e, t, n, i, a, r, o = 0,
            s = this.length,
            c = 0 === arguments.length || "string" == typeof l && l;
        if (ie.isFunction(l)) return this.each(function(e) {
            ie(this).removeClass(l.call(this, e, this.className))
        });
        if (c)
            for (e = (l || "").match(be) || []; s > o; o++)
                if (t = this[o], n = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(Et, " ") : "")) {
                    for (a = 0; i = e[a++];)
                        for (; n.indexOf(" " + i + " ") >= 0;) n = n.replace(" " + i + " ", " ");
                    r = l ? ie.trim(n) : "", t.className !== r && (t.className = r)
                }
        return this
    },
    toggleClass: function(l, e) {
        var t = typeof l;
        return "boolean" == typeof e && "string" === t ? e ? this.addClass(l) : this.removeClass(l) : this.each(ie.isFunction(l) ? function(t) {
            ie(this).toggleClass(l.call(this, t, this.className, e), e)
        } : function() {
            if ("string" === t)
                for (var e, n = 0, i = ie(this), a = l.match(be) || []; e = a[n++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
            else(t === ke || "boolean" === t) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || l === !1 ? "" : ie._data(this, "__className__") || "")
        })
    },
    hasClass: function(l) {
        for (var e = " " + l + " ", t = 0, n = this.length; n > t; t++)
            if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(Et, " ").indexOf(e) >= 0) return !0;
        return !1
    }
}), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(l, e) {
    ie.fn[e] = function(l, t) {
        return arguments.length > 0 ? this.on(e, null, l, t) : this.trigger(e)
    }
}), ie.fn.extend({
    hover: function(l, e) {
        return this.mouseenter(l).mouseleave(e || l)
    },
    bind: function(l, e, t) {
        return this.on(l, null, e, t)
    },
    unbind: function(l, e) {
        return this.off(l, null, e)
    },
    delegate: function(l, e, t, n) {
        return this.on(e, l, t, n)
    },
    undelegate: function(l, e, t) {
        return 1 === arguments.length ? this.off(l, "**") : this.off(e, l || "**", t)
    }
});
var Tt = ie.now(),
    At = /\?/,
    Nt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
ie.parseJSON = function(e) {
    if (l.JSON && l.JSON.parse) return l.JSON.parse(e + "");
    var t, n = null,
        i = ie.trim(e + "");
    return i && !ie.trim(i.replace(Nt, function(l, e, i, a) {
        return t && e && (n = 0), 0 === n ? l : (t = i || e, n += !a - !i, "")
    })) ? Function("return " + i)() : ie.error("Invalid JSON: " + e)
}, ie.parseXML = function(e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
        l.DOMParser ? (n = new DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
    } catch (i) {
        t = void 0
    }
    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + e), t
};
var Lt, qt, It = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ft = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ot = {},
    Ht = {},
    Wt = "*/".concat("*");
try {
    qt = location.href
} catch (Vt) {
    qt = pe.createElement("a"), qt.href = "", qt = qt.href
}
Lt = Bt.exec(qt.toLowerCase()) || [], ie.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: qt,
        type: "GET",
        isLocal: zt.test(Lt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": Wt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /xml/,
            html: /html/,
            json: /json/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },
        converters: {
            "* text": String,
            "text html": !0,
            "text json": ie.parseJSON,
            "text xml": ie.parseXML
        },
        flatOptions: {
            url: !0,
            context: !0
        }
    },
    ajaxSetup: function(l, e) {
        return e ? B(B(l, ie.ajaxSettings), e) : B(ie.ajaxSettings, l)
    },
    ajaxPrefilter: F(Ot),
    ajaxTransport: F(Ht),
    ajax: function(l, e) {
        function t(l, e, t, n) {
            var i, u, v, y, M, x = e;
            2 !== b && (b = 2, o && clearTimeout(o), c = void 0, r = n || "", w.readyState = l > 0 ? 4 : 0, i = l >= 200 && 300 > l || 304 === l, t && (y = O(d, w, t)), y = H(d, y, w, i), i ? (d.ifModified && (M = w.getResponseHeader("Last-Modified"), M && (ie.lastModified[a] = M), M = w.getResponseHeader("etag"), M && (ie.etag[a] = M)), 204 === l || "HEAD" === d.type ? x = "nocontent" : 304 === l ? x = "notmodified" : (x = y.state, u = y.data, v = y.error, i = !v)) : (v = x, (l || !x) && (x = "error", 0 > l && (l = 0))), w.status = l, w.statusText = (e || x) + "", i ? p.resolveWith(f, [u, x, w]) : p.rejectWith(f, [w, x, v]), w.statusCode(g), g = void 0, s && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? u : v]), m.fireWith(f, [w, x]), s && (h.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop")))
        }
        "object" == typeof l && (e = l, l = void 0), e = e || {};
        var n, i, a, r, o, s, c, u, d = ie.ajaxSetup({}, e),
            f = d.context || d,
            h = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
            p = ie.Deferred(),
            m = ie.Callbacks("once memory"),
            g = d.statusCode || {},
            v = {},
            y = {},
            b = 0,
            M = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(l) {
                    var e;
                    if (2 === b) {
                        if (!u)
                            for (u = {}; e = Rt.exec(r);) u[e[1].toLowerCase()] = e[2];
                        e = u[l.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? r : null
                },
                setRequestHeader: function(l, e) {
                    var t = l.toLowerCase();
                    return b || (l = y[t] = y[t] || l, v[l] = e), this
                },
                overrideMimeType: function(l) {
                    return b || (d.mimeType = l), this
                },
                statusCode: function(l) {
                    var e;
                    if (l)
                        if (2 > b)
                            for (e in l) g[e] = [g[e], l[e]];
                        else w.always(l[w.status]);
                    return this
                },
                abort: function(l) {
                    var e = l || M;
                    return c && c.abort(e), t(0, e), this
                }
            };
        if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((l || d.url || qt) + "").replace(It, "").replace(Pt, Lt[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (n = Bt.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Lt[1] && n[2] === Lt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), P(Ot, d, e, w), 2 === b) return w;
        s = d.global, s && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ft.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (At.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Dt.test(a) ? a.replace(Dt, "$1_=" + Tt++) : a + (At.test(a) ? "&" : "?") + "_=" + Tt++)), d.ifModified && (ie.lastModified[a] && w.setRequestHeader("If-Modified-Since", ie.lastModified[a]), ie.etag[a] && w.setRequestHeader("If-None-Match", ie.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : d.accepts["*"]);
        for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
        if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
        M = "abort";
        for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) w[i](d[i]);
        if (c = P(Ht, d, e, w)) {
            w.readyState = 1, s && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (o = setTimeout(function() {
                w.abort("timeout")
            }, d.timeout));
            try {
                b = 1, c.send(v, t)
            } catch (x) {
                if (!(2 > b)) throw x;
                t(-1, x)
            }
        } else t(-1, "No Transport");
        return w
    },
    getJSON: function(l, e, t) {
        return ie.get(l, e, t, "json")
    },
    getScript: function(l, e) {
        return ie.get(l, void 0, e, "script")
    }
}), ie.each(["get", "post"], function(l, e) {
    ie[e] = function(l, t, n, i) {
        return ie.isFunction(t) && (i = i || n, n = t, t = void 0), ie.ajax({
            url: l,
            type: e,
            dataType: i,
            data: t,
            success: n
        })
    }
}), ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(l, e) {
    ie.fn[e] = function(l) {
        return this.on(e, l)
    }
}), ie._evalUrl = function(l) {
    return ie.ajax({
        url: l,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
    })
}, ie.fn.extend({
    wrapAll: function(l) {
        if (ie.isFunction(l)) return this.each(function(e) {
            ie(this).wrapAll(l.call(this, e))
        });
        if (this[0]) {
            var e = ie(l, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var l = this; l.firstChild && 1 === l.firstChild.nodeType;) l = l.firstChild;
                return l
            }).append(this)
        }
        return this
    },
    wrapInner: function(l) {
        return this.each(ie.isFunction(l) ? function(e) {
            ie(this).wrapInner(l.call(this, e))
        } : function() {
            var e = ie(this),
                t = e.contents();
            t.length ? t.wrapAll(l) : e.append(l)
        })
    },
    wrap: function(l) {
        var e = ie.isFunction(l);
        return this.each(function(t) {
            ie(this).wrapAll(e ? l.call(this, t) : l)
        })
    },
    unwrap: function() {
        return this.parent().each(function() {
            ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
        }).end()
    }
}), ie.expr.filters.hidden = function(l) {
    return l.offsetWidth <= 0 && l.offsetHeight <= 0 || !te.reliableHiddenOffsets() && "none" === (l.style && l.style.display || ie.css(l, "display"))
}, ie.expr.filters.visible = function(l) {
    return !ie.expr.filters.hidden(l)
};
var Ut = /%20/g,
    $t = /\[\]$/,
    Gt = /\r?\n/g,
    Kt = /^(?:submit|button|image|reset|file)$/i,
    Xt = /^(?:input|select|textarea|keygen)/i;
ie.param = function(l, e) {
    var t, n = [],
        i = function(l, e) {
            e = ie.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(l) + "=" + encodeURIComponent(e)
        };
    if (void 0 === e && (e = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(l) || l.jquery && !ie.isPlainObject(l)) ie.each(l, function() {
        i(this.name, this.value)
    });
    else
        for (t in l) W(t, l[t], e, i);
    return n.join("&").replace(Ut, "+")
}, ie.fn.extend({
    serialize: function() {
        return ie.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            var l = ie.prop(this, "elements");
            return l ? ie.makeArray(l) : this
        }).filter(function() {
            var l = this.type;
            return this.name && !ie(this).is(":disabled") && Xt.test(this.nodeName) && !Kt.test(l) && (this.checked || !Te.test(l))
        }).map(function(l, e) {
            var t = ie(this).val();
            return null == t ? null : ie.isArray(t) ? ie.map(t, function(l) {
                return {
                    name: e.name,
                    value: l.replace(Gt, "\r\n")
                }
            }) : {
                name: e.name,
                value: t.replace(Gt, "\r\n")
            }
        }).get()
    }
}), ie.ajaxSettings.xhr = void 0 !== l.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || U()
} : V;
var Yt = 0,
    Qt = {},
    Jt = ie.ajaxSettings.xhr();
l.ActiveXObject && ie(l).on("unload", function() {
    for (var l in Qt) Qt[l](void 0, !0)
}), te.cors = !!Jt && "withCredentials" in Jt, Jt = te.ajax = !!Jt, Jt && ie.ajaxTransport(function(l) {
    if (!l.crossDomain || te.cors) {
        var e;
        return {
            send: function(t, n) {
                var i, a = l.xhr(),
                    r = ++Yt;
                if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                    for (i in l.xhrFields) a[i] = l.xhrFields[i];
                l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest");
                for (i in t) void 0 !== t[i] && a.setRequestHeader(i, t[i] + "");
                a.send(l.hasContent && l.data || null), e = function(t, i) {
                    var o, s, c;
                    if (e && (i || 4 === a.readyState))
                        if (delete Qt[r], e = void 0, a.onreadystatechange = ie.noop, i) 4 !== a.readyState && a.abort();
                        else {
                            c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                            try {
                                s = a.statusText
                            } catch (u) {
                                s = ""
                            }
                            o || !l.isLocal || l.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                        }
                    c && n(o, s, c, a.getAllResponseHeaders())
                }, l.async ? 4 === a.readyState ? setTimeout(e) : a.onreadystatechange = Qt[r] = e : e()
            },
            abort: function() {
                e && e(void 0, !0)
            }
        }
    }
}), ie.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /(?:java|ecma)script/
    },
    converters: {
        "text script": function(l) {
            return ie.globalEval(l), l
        }
    }
}), ie.ajaxPrefilter("script", function(l) {
    void 0 === l.cache && (l.cache = !1), l.crossDomain && (l.type = "GET", l.global = !1)
}), ie.ajaxTransport("script", function(l) {
    if (l.crossDomain) {
        var e, t = pe.head || ie("head")[0] || pe.documentElement;
        return {
            send: function(n, i) {
                e = pe.createElement("script"), e.async = !0, l.scriptCharset && (e.charset = l.scriptCharset), e.src = l.url, e.onload = e.onreadystatechange = function(l, t) {
                    (t || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, t || i(200, "success"))
                }, t.insertBefore(e, t.firstChild)
            },
            abort: function() {
                e && e.onload(void 0, !0)
            }
        }
    }
});
var ln = [],
    en = /(=)\?(?=&|$)|\?\?/;
ie.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var l = ln.pop() || ie.expando + "_" + Tt++;
        return this[l] = !0, l
    }
}), ie.ajaxPrefilter("json jsonp", function(e, t, n) {
    var i, a, r, o = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
    return o || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(en, "$1" + i) : e.jsonp !== !1 && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
        return r || ie.error(i + " was not called"), r[0]
    }, e.dataTypes[0] = "json", a = l[i], l[i] = function() {
        r = arguments
    }, n.always(function() {
        l[i] = a, e[i] && (e.jsonpCallback = t.jsonpCallback, ln.push(i)), r && ie.isFunction(a) && a(r[0]), r = a = void 0
    }), "script") : void 0
}), ie.parseHTML = function(l, e, t) {
    if (!l || "string" != typeof l) return null;
    "boolean" == typeof e && (t = e, e = !1), e = e || pe;
    var n = de.exec(l),
        i = !t && [];
    return n ? [e.createElement(n[1])] : (n = ie.buildFragment([l], e, i), i && i.length && ie(i).remove(), ie.merge([], n.childNodes))
};
var tn = ie.fn.load;
ie.fn.load = function(l, e, t) {
    if ("string" != typeof l && tn) return tn.apply(this, arguments);
    var n, i, a, r = this,
        o = l.indexOf(" ");
    return o >= 0 && (n = ie.trim(l.slice(o, l.length)), l = l.slice(0, o)), ie.isFunction(e) ? (t = e, e = void 0) : e && "object" == typeof e && (a = "POST"), r.length > 0 && ie.ajax({
        url: l,
        type: a,
        dataType: "html",
        data: e
    }).done(function(l) {
        i = arguments, r.html(n ? ie("<div>").append(ie.parseHTML(l)).find(n) : l)
    }).complete(t && function(l, e) {
        r.each(t, i || [l.responseText, e, l])
    }), this
}, ie.expr.filters.animated = function(l) {
    return ie.grep(ie.timers, function(e) {
        return l === e.elem
    }).length
};
var nn = l.document.documentElement;
ie.offset = {
    setOffset: function(l, e, t) {
        var n, i, a, r, o, s, c, u = ie.css(l, "position"),
            d = ie(l),
            f = {};
        "static" === u && (l.style.position = "relative"), o = d.offset(), a = ie.css(l, "top"), s = ie.css(l, "left"), c = ("absolute" === u || "fixed" === u) && ie.inArray("auto", [a, s]) > -1, c ? (n = d.position(), r = n.top, i = n.left) : (r = parseFloat(a) || 0, i = parseFloat(s) || 0), ie.isFunction(e) && (e = e.call(l, t, o)), null != e.top && (f.top = e.top - o.top + r), null != e.left && (f.left = e.left - o.left + i), "using" in e ? e.using.call(l, f) : d.css(f)
    }
}, ie.fn.extend({
    offset: function(l) {
        if (arguments.length) return void 0 === l ? this : this.each(function(e) {
            ie.offset.setOffset(this, l, e)
        });
        var e, t, n = {
                top: 0,
                left: 0
            },
            i = this[0],
            a = i && i.ownerDocument;
        if (a) return e = a.documentElement, ie.contains(e, i) ? (typeof i.getBoundingClientRect !== ke && (n = i.getBoundingClientRect()), t = $(a), {
            top: n.top + (t.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: n.left + (t.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : n
    },
    position: function() {
        if (this[0]) {
            var l, e, t = {
                    top: 0,
                    left: 0
                },
                n = this[0];
            return "fixed" === ie.css(n, "position") ? e = n.getBoundingClientRect() : (l = this.offsetParent(), e = this.offset(), ie.nodeName(l[0], "html") || (t = l.offset()), t.top += ie.css(l[0], "borderTopWidth", !0), t.left += ie.css(l[0], "borderLeftWidth", !0)), {
                top: e.top - t.top - ie.css(n, "marginTop", !0),
                left: e.left - t.left - ie.css(n, "marginLeft", !0)
            }
        }
    },
    offsetParent: function() {
        return this.map(function() {
            for (var l = this.offsetParent || nn; l && !ie.nodeName(l, "html") && "static" === ie.css(l, "position");) l = l.offsetParent;
            return l || nn
        })
    }
}), ie.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function(l, e) {
    var t = /Y/.test(e);
    ie.fn[l] = function(n) {
        return Ee(this, function(l, n, i) {
            var a = $(l);
            return void 0 === i ? a ? e in a ? a[e] : a.document.documentElement[n] : l[n] : void(a ? a.scrollTo(t ? ie(a).scrollLeft() : i, t ? i : ie(a).scrollTop()) : l[n] = i)
        }, l, n, arguments.length, null)
    }
}), ie.each(["top", "left"], function(l, e) {
    ie.cssHooks[e] = S(te.pixelPosition, function(l, t) {
        return t ? (t = et(l, e), nt.test(t) ? ie(l).position()[e] + "px" : t) : void 0
    })
}), ie.each({
    Height: "height",
    Width: "width"
}, function(l, e) {
    ie.each({
        padding: "inner" + l,
        content: e,
        "": "outer" + l
    }, function(t, n) {
        ie.fn[n] = function(n, i) {
            var a = arguments.length && (t || "boolean" != typeof n),
                r = t || (n === !0 || i === !0 ? "margin" : "border");
            return Ee(this, function(e, t, n) {
                var i;
                return ie.isWindow(e) ? e.document.documentElement["client" + l] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + l], i["scroll" + l], e.body["offset" + l], i["offset" + l], i["client" + l])) : void 0 === n ? ie.css(e, t, r) : ie.style(e, t, n, r)
            }, e, a ? n : void 0, a, null)
        }
    })
}), ie.fn.size = function() {
    return this.length
}, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ie
});
var an = l.jQuery,
    rn = l.$;
return ie.noConflict = function(e) {
    return l.$ === ie && (l.$ = rn), e && l.jQuery === ie && (l.jQuery = an), ie
}, typeof e === ke && (l.jQuery = l.$ = ie), ie
}),
function(l) {
"use strict";
l(jQuery)
}(function(l) {
"use strict";

function e(t, n) {
    var i = function() {},
        a = this,
        r = {
            autoSelectFirst: !1,
            appendTo: "body",
            serviceUrl: null,
            lookup: null,
            onSelect: null,
            width: "auto",
            minChars: 1,
            maxHeight: 300,
            deferRequestBy: 0,
            params: {},
            formatResult: e.formatResult,
            delimiter: null,
            zIndex: 9999,
            type: "GET",
            noCache: !1,
            onSearchStart: i,
            onSearchComplete: i,
            onSearchError: i,
            containerClass: "autocomplete-suggestions",
            tabDisabled: !1,
            dataType: "text",
            currentRequest: null,
            triggerSelectOnValidInput: !0,
            preventBadQueries: !0,
            lookupFilter: function(l, e, t) {
                return -1 !== l.value.toLowerCase().indexOf(t)
            },
            paramName: "query",
            transformResult: function(e) {
                return "string" == typeof e ? l.parseJSON(e) : e
            }
        };
    a.element = t, a.el = l(t), a.suggestions = [], a.badQueries = [], a.selectedIndex = -1, a.currentValue = a.element.value, a.intervalId = 0, a.cachedResponse = {}, a.onChangeInterval = null, a.onChange = null, a.isLocal = !1, a.suggestionsContainer = null, a.options = l.extend({}, r, n), a.classes = {
        selected: "autocomplete-selected",
        suggestion: "autocomplete-suggestion"
    }, a.hint = null, a.hintValue = "", a.selection = null, a.initialize(), a.setOptions(n)
}
var t = function() {
        return {
            escapeRegExChars: function(l) {
                return l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            createNode: function(l) {
                var e = document.createElement("div");
                return e.className = l, e.style.position = "absolute", e.style.display = "none", e
            }
        }
    }(),
    n = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
e.utils = t, l.Autocomplete = e, e.formatResult = function(l, e) {
    var n = "(" + t.escapeRegExChars(e) + ")";
    return l.value.replace(new RegExp(n, "gi"), "<strong>$1</strong>")
}, e.prototype = {
    killerFn: null,
    initialize: function() {
        var t, n = this,
            i = "." + n.classes.suggestion,
            a = n.classes.selected,
            r = n.options;
        n.element.setAttribute("autocomplete", "off"), n.killerFn = function(e) {
            0 === l(e.target).closest("." + n.options.containerClass).length && (n.killSuggestions(), n.disableKillerFn())
        }, n.suggestionsContainer = e.utils.createNode(r.containerClass), t = l(n.suggestionsContainer), t.appendTo(r.appendTo), "auto" !== r.width && t.width(r.width), t.on("mouseover.autocomplete", i, function() {
            n.activate(l(this).data("index"))
        }), t.on("mouseout.autocomplete", function() {
            n.selectedIndex = -1, t.children("." + a).removeClass(a)
        }), t.on("click.autocomplete", i, function() {
            n.select(l(this).data("index"))
        }), n.fixPosition(), n.fixPositionCapture = function() {
            n.visible && n.fixPosition()
        }, l(window).on("resize.autocomplete", n.fixPositionCapture), n.el.on("keydown.autocomplete", function(l) {
            n.onKeyPress(l)
        }), n.el.on("keyup.autocomplete", function(l) {
            n.onKeyUp(l)
        }), n.el.on("blur.autocomplete", function() {
            n.onBlur()
        }), n.el.on("focus.autocomplete", function() {
            n.onFocus()
        }), n.el.on("change.autocomplete", function(l) {
            n.onKeyUp(l)
        })
    },
    onFocus: function() {
        var l = this;
        l.fixPosition(), l.options.minChars <= l.el.val().length && l.onValueChange()
    },
    onBlur: function() {
        this.enableKillerFn()
    },
    setOptions: function(e) {
        var t = this,
            n = t.options;
        l.extend(n, e), t.isLocal = l.isArray(n.lookup), t.isLocal && (n.lookup = t.verifySuggestionsFormat(n.lookup)), l(t.suggestionsContainer).css({
            "max-height": n.maxHeight + "px",
            width: n.width + "px",
            "z-index": n.zIndex
        })
    },
    clearCache: function() {
        this.cachedResponse = {}, this.badQueries = []
    },
    clear: function() {
        this.clearCache(), this.currentValue = "", this.suggestions = []
    },
    disable: function() {
        var l = this;
        l.disabled = !0, l.currentRequest && l.currentRequest.abort()
    },
    enable: function() {
        this.disabled = !1
    },
    fixPosition: function() {
        var e, t, n, i = this;
        "body" !== i.options.appendTo, e = i.el.offset(), t = i.el.offsetParent().offset(), n = {
            left: e.left - t.left + "px"
        }, "auto" === i.options.width && (n.width = i.el.outerWidth() - 2 + "px"), l(i.suggestionsContainer).css(n)
    },
    enableKillerFn: function() {
        var e = this;
        l(document).on("click.autocomplete", e.killerFn)
    },
    disableKillerFn: function() {
        var e = this;
        l(document).off("click.autocomplete", e.killerFn)
    },
    killSuggestions: function() {
        var l = this;
        l.stopKillSuggestions(), l.intervalId = window.setInterval(function() {
            l.hide(), l.stopKillSuggestions()
        }, 50)
    },
    stopKillSuggestions: function() {
        window.clearInterval(this.intervalId)
    },
    isCursorAtEnd: function() {
        var l, e = this,
            t = e.el.val().length,
            n = e.element.selectionStart;
        return "number" == typeof n ? n === t : document.selection ? (l = document.selection.createRange(), l.moveStart("character", -t), t === l.text.length) : !0
    },
    onKeyPress: function(l) {
        var e = this;
        if (!e.disabled && !e.visible && l.which === n.DOWN && e.currentValue) return void e.suggest();
        if (!e.disabled && e.visible) {
            switch (l.which) {
                case n.ESC:
                    e.el.val(e.currentValue), e.hide();
                    break;
                case n.RIGHT:
                    if (e.hint && e.options.onHint && e.isCursorAtEnd()) {
                        e.selectHint();
                        break
                    }
                    return;
                case n.TAB:
                    if (e.hint && e.options.onHint) return void e.selectHint();
                case n.RETURN:
                    if (-1 === e.selectedIndex) return void e.hide();
                    if (e.select(e.selectedIndex), l.which === n.TAB && e.options.tabDisabled === !1) return;
                    break;
                case n.UP:
                    e.moveUp();
                    break;
                case n.DOWN:
                    e.moveDown();
                    break;
                default:
                    return
            }
            l.stopImmediatePropagation(), l.preventDefault()
        }
    },
    onKeyUp: function(l) {
        var e = this;
        if (!e.disabled) {
            switch (l.which) {
                case n.UP:
                case n.DOWN:
                    return
            }
            clearInterval(e.onChangeInterval), e.currentValue !== e.el.val() && (e.findBestHint(), e.options.deferRequestBy > 0 ? e.onChangeInterval = setInterval(function() {
                e.onValueChange()
            }, e.options.deferRequestBy) : e.onValueChange())
        }
    },
    onValueChange: function() {
        var e, t = this,
            n = t.options,
            i = t.el.val(),
            a = t.getQuery(i);
        return t.selection && (t.selection = null, (n.onInvalidateSelection || l.noop).call(t.element)), clearInterval(t.onChangeInterval), t.currentValue = i, t.selectedIndex = -1, n.triggerSelectOnValidInput && (e = t.findSuggestionIndex(a), -1 !== e) ? void t.select(e) : void(a.length < n.minChars ? t.hide() : t.getSuggestions(a))
    },
    findSuggestionIndex: function(e) {
        var t = this,
            n = -1,
            i = e.toLowerCase();
        return l.each(t.suggestions, function(l, e) {
            return e.value.toLowerCase() === i ? (n = l, !1) : void 0
        }), n
    },
    getQuery: function(e) {
        var t, n = this.options.delimiter;
        return n ? (t = e.split(n), l.trim(t[t.length - 1])) : e
    },
    getSuggestionsLocal: function(e) {
        var t, n = this,
            i = n.options,
            a = e.toLowerCase(),
            r = i.lookupFilter,
            o = parseInt(i.lookupLimit, 10);
        return t = {
            suggestions: l.grep(i.lookup, function(l) {
                return r(l, e, a)
            })
        }, o && t.suggestions.length > o && (t.suggestions = t.suggestions.slice(0, o)), t
    },
    getSuggestions: function(e) {
        var t, n, i, a = this,
            r = a.options,
            o = r.serviceUrl;
        if (r.params[r.paramName] = e, n = r.ignoreParams ? null : r.params, a.isLocal ? t = a.getSuggestionsLocal(e) : (l.isFunction(o) && (o = o.call(a.element, e)), i = o + "?" + l.param(n || {}), t = a.cachedResponse[i]), t && l.isArray(t.suggestions)) a.suggestions = t.suggestions, a.suggest();
        else if (!a.isBadQuery(e)) {
            if (r.onSearchStart.call(a.element, r.params) === !1) return;
            a.currentRequest && a.currentRequest.abort(), a.currentRequest = l.ajax({
                url: o,
                data: n,
                type: r.type,
                dataType: r.dataType
            }).done(function(l) {
                var t;
                a.currentRequest = null, t = r.transformResult(l), a.processResponse(t, e, i), r.onSearchComplete.call(a.element, e, t.suggestions)
            }).fail(function(l, t, n) {
                r.onSearchError.call(a.element, e, l, t, n)
            })
        }
    },
    isBadQuery: function(l) {
        if (!this.options.preventBadQueries) return !1;
        for (var e = this.badQueries, t = e.length; t--;)
            if (0 === l.indexOf(e[t])) return !0;
        return !1
    },
    hide: function() {
        var e = this;
        e.visible = !1, e.selectedIndex = -1, l(e.suggestionsContainer).hide(), e.signalHint(null)
    },
    suggest: function() {
        if (0 === this.suggestions.length) return void this.hide();
        var e, t, n = this,
            i = n.options,
            a = i.formatResult,
            r = n.getQuery(n.currentValue),
            o = n.classes.suggestion,
            s = n.classes.selected,
            c = l(n.suggestionsContainer),
            u = i.beforeRender,
            d = "";
        return i.triggerSelectOnValidInput && (e = n.findSuggestionIndex(r), -1 !== e) ? void n.select(e) : (l.each(n.suggestions, function(l, e) {
            d += '<div class="' + o + '" data-index="' + l + '">' + a(e, r) + "</div>"
        }), "auto" === i.width && (t = n.el.outerWidth() - 2, c.width(t > 0 ? t : 300)), c.html(d), i.autoSelectFirst && (n.selectedIndex = 0, c.children().first().addClass(s)), l.isFunction(u) && u.call(n.element, c), c.show(), n.visible = !0, void n.findBestHint())
    },
    findBestHint: function() {
        var e = this,
            t = e.el.val().toLowerCase(),
            n = null;
        t && (l.each(e.suggestions, function(l, e) {
            var i = 0 === e.value.toLowerCase().indexOf(t);
            return i && (n = e), !i
        }), e.signalHint(n))
    },
    signalHint: function(e) {
        var t = "",
            n = this;
        e && (t = n.currentValue + e.value.substr(n.currentValue.length)), n.hintValue !== t && (n.hintValue = t, n.hint = e, (this.options.onHint || l.noop)(t))
    },
    verifySuggestionsFormat: function(e) {
        return e.length && "string" == typeof e[0] ? l.map(e, function(l) {
            return {
                value: l,
                data: null
            }
        }) : e
    },
    processResponse: function(l, e, t) {
        var n = this,
            i = n.options;
        l.suggestions = n.verifySuggestionsFormat(l.suggestions), i.noCache || (n.cachedResponse[t] = l, i.preventBadQueries && 0 === l.suggestions.length && n.badQueries.push(e)), e === n.getQuery(n.currentValue) && (n.suggestions = l.suggestions, n.suggest())
    },
    activate: function(e) {
        var t, n = this,
            i = n.classes.selected,
            a = l(n.suggestionsContainer),
            r = a.children();
        return a.children("." + i).removeClass(i), n.selectedIndex = e, -1 !== n.selectedIndex && r.length > n.selectedIndex ? (t = r.get(n.selectedIndex), l(t).addClass(i), t) : null
    },
    selectHint: function() {
        var e = this,
            t = l.inArray(e.hint, e.suggestions);
        e.select(t)
    },
    select: function(l) {
        var e = this;
        e.hide(), e.onSelect(l)
    },
    moveUp: function() {
        var e = this;
        if (-1 !== e.selectedIndex) return 0 === e.selectedIndex ? (l(e.suggestionsContainer).children().first().removeClass(e.classes.selected), e.selectedIndex = -1, e.el.val(e.currentValue), void e.findBestHint()) : void e.adjustScroll(e.selectedIndex - 1)
    },
    moveDown: function() {
        var l = this;
        l.selectedIndex !== l.suggestions.length - 1 && l.adjustScroll(l.selectedIndex + 1)
    },
    adjustScroll: function(e) {
        var t, n, i, a = this,
            r = a.activate(e),
            o = 25;
        r && (t = r.offsetTop, n = l(a.suggestionsContainer).scrollTop(), i = n + a.options.maxHeight - o, n > t ? l(a.suggestionsContainer).scrollTop(t) : t > i && l(a.suggestionsContainer).scrollTop(t - a.options.maxHeight + o), a.el.val(a.getValue(a.suggestions[e].value)), a.signalHint(null))
    },
    onSelect: function(e) {
        var t = this,
            n = t.options.onSelect,
            i = t.suggestions[e];
        t.currentValue = t.getValue(i.value), t.currentValue !== t.el.val() && t.el.val(t.currentValue), t.signalHint(null), t.suggestions = [], t.selection = i, l.isFunction(n) && n.call(t.element, i)
    },
    getValue: function(l) {
        var e, t, n = this,
            i = n.options.delimiter;
        return i ? (e = n.currentValue, t = e.split(i), 1 === t.length ? l : e.substr(0, e.length - t[t.length - 1].length) + l) : l
    },
    dispose: function() {
        var e = this;
        e.el.off(".autocomplete").removeData("autocomplete"), e.disableKillerFn(), l(window).off("resize.autocomplete", e.fixPositionCapture), l(e.suggestionsContainer).remove()
    }
}, l.fn.autocomplete = function(t, n) {
    var i = "autocomplete";
    return 0 === arguments.length ? this.first().data(i) : this.each(function() {
        var a = l(this),
            r = a.data(i);
        "string" == typeof t ? r && "function" == typeof r[t] && r[t](n) : (r && r.dispose && r.dispose(), r = new e(this, t), a.data(i, r))
    })
}
}),
function(l) {
var e = document.body.getAttribute("data-master-base-path"),
    t = e + "/core_js/",
    n = e + "/presentation/",
    i = {
        baseUrl: n,
        paths: {
            jquery: t + "lib/jquery",
            jasmine: t + "lib/jasmine-1.3.1/jasmine",
            "jasmine-html": t + "lib/jasmine-1.3.1/jasmine-html",
            testing: t + "testing",
            "dev-tools": t + "dev-tools"
        },
        shim: {
            jquery: {
                exports: "jQuery"
            },
            jasmine: {
                exports: "jasmine"
            },
            "jasmine-html": {
                deps: ["jasmine"],
                exports: "jasmine"
            },
            picturefill: {
                exports: "picturefill"
            }
        }
    },
    a = [];
if (l.oneweb_extension_requirejs_configs)
    for (var r in oneweb_extension_requirejs_configs)
        if ("initialize" != r)
            if (i[r]) {
                if ("object" == typeof i[r])
                    for (var o in oneweb_extension_requirejs_configs[r]) i[r][o] || (i[r][o] = "paths" == r ? t + oneweb_extension_requirejs_configs[r][o] : oneweb_extension_requirejs_configs[r][o])
            } else i[r] = oneweb_extension_requirejs_configs[r];
else a = a.concat(oneweb_extension_requirejs_configs[r]);
require.config(i), define("Modernizr", function() {
    return Modernizr
}), define("core", ["jquery"], function(e) {
    return function() {
        var t = e("html");
        e(document).ready(function() {
            t.removeClass("not-ready").addClass("ready")
        }), e(l).load(function() {
            t.removeClass("not-loaded").addClass("loaded")
        }), l.requestAnimationFrame = function() {
            return l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || l.msRequestAnimationFrame || function(l) {
                return setTimeout(l, 60)
            }
        }(), l.cancelRequestAnimationFrame = function() {
            return l.cancelRequestAnimationFrame || l.webkitCancelAnimationFrame || l.webkitCancelRequestAnimationFrame || l.mozCancelRequestAnimationFrame || l.oCancelRequestAnimationFrame || l.msCancelRequestAnimationFrame || clearTimeout
        }(), e(".component").each(function() {
            var l = e(this),
                t = l.attr("class"),
                n = /(document|region|container|module|block)\-([\w\-\_]+)\-component/gi,
                i = n.exec(t);
            if (i) {
                var a = i[1] + "/" + i[2];
                require([a], function(e) {
                    new e(l, {})
                }, function() {})
            }
        }), e(".no-placeholder input[placeholder]").each(function() {
            var l = e(this);
            "" === l.val() && l.val(l.attr("placeholder")).focus(function() {
                l.val() === l.attr("placeholder") && l.val("")
            }).blur(function() {
                "" === l.val() && l.val(l.attr("placeholder"))
            })
        }), e("body").hasClass("dev-mode") && require(["dev-tools"], function(l) {
            l()
        });
        for (var n = 0; n < a.length; n++) ! function(l) {
            require([l], function(l) {
                l && l()
            })
        }(a[n])
    }
}), require(["core"], function(l) {
    l()
})
}(window),
function() {
Mark = {
    includes: {},
    globals: {},
    delimiter: ">",
    compact: !1,
    _copy: function(l, e) {
        e = e || [];
        for (var t in l) e[t] = l[t];
        return e
    },
    _size: function(l) {
        return l instanceof Array ? l.length : l || 0
    },
    _iter: function(l, e) {
        this.idx = l, this.size = e, this.length = e, this.sign = "#", this.toString = function() {
            return this.idx + this.sign.length - 1
        }
    },
    _pipe: function(l, e) {
        var t, n, i, a = e.shift();
        if (a) {
            t = a.split(this.delimiter), n = t[0].trim(), i = t.splice(1);
            try {
                l = this._pipe(Mark.pipes[n].apply(null, [l].concat(i)), e)
            } catch (r) {}
        }
        return l
    },
    _eval: function(l, e, t) {
        var n, i, a = this._pipe(l, e),
            r = a,
            o = -1;
        if (a instanceof Array)
            for (a = "", n = r.length; ++o < n;) i = {
                iter: new this._iter(o, n)
            }, a += t ? Mark.up(t, r[o], i) : r[o];
        return a
    },
    _test: function(l, e, t, n) {
        var i = Mark.up(e, t, n).split(/\{\{\s*else\s*\}\}/),
            a = l === !1 ? i[1] : i[0];
        return Mark.up(a || "", t, n)
    },
    _bridge: function(l, e) {
        var t, n = "{{\\s*" + e + "([^/}]+\\w*)?}}|{{/" + e + "\\s*}}",
            i = new RegExp(n, "g"),
            a = l.match(i),
            r = 0,
            o = 0,
            s = -1,
            c = 0;
        for (t in a)
            if (s = l.indexOf(a[t], s + 1), a[t].match("{{/") ? o++ : r++, r === o) break;
        return r = l.indexOf(a[0]), o = r + a[0].length, c = s + a[t].length, [l.substring(r, c), l.substring(o, s)]
    }
}, Mark.up = function(l, e, t) {
    e = e || {}, t = t || {};
    var n, i, a, r, o, s, c, u, d, f, h = /\{\{\w*[^}]+\w*\}\}/g,
        p = l.match(h) || [],
        m = [],
        g = 0,
        v = 0;
    for (t.pipes && this._copy(t.pipes, this.pipes), t.includes && this._copy(t.includes, this.includes), t.globals && this._copy(t.globals, this.globals), t.delimiter && (this.delimiter = t.delimiter), void 0 !== t.compact && (this.compact = t.compact); n = p[g++];)
        if (u = void 0, s = "", r = n.indexOf("/}}") > -1, i = n.substr(2, n.length - (r ? 5 : 4)), i = i.replace(/`([^`]+)`/g, function(l, t) {
                return Mark.up("{{" + t + "}}", e)
            }), o = 0 === i.trim().indexOf("if "), m = i.split("|").splice(1), i = i.replace(/^\s*if/, "").split("|").shift().trim(), a = o ? "if" : i.split("|")[0], c = e[i], o && !m.length && (m = ["notempty"]), !r && l.indexOf("{{/" + a) > -1 && (u = this._bridge(l, a), n = u[0], s = u[1], g += n.match(h).length - 1), !/^\{\{\s*else\s*\}\}$/.test(n)) {
            if (void 0 !== (d = this.globals[i])) u = this._eval(d, m, s);
            else if (f = this.includes[i]) f instanceof Function && (f = f()), u = this._pipe(Mark.up(f, e), m);
            else if (i.match(/#{1,2}/)) t.iter.sign = i, u = this._pipe(t.iter, m);
            else if ("." === i) u = this._pipe(e, m);
            else if (i.match(/\./)) {
                for (i = i.split("."), c = Mark.globals[i[0]], c ? v = 1 : (v = 0, c = e); v < i.length;) c = c[i[v++]];
                u = this._eval(c, m, s)
            } else o ? u = this._pipe(c, m) : c instanceof Array ? u = this._eval(c, m, s) : s ? u = c ? Mark.up(s, c) : void 0 : e.hasOwnProperty(i) && (u = this._pipe(c, m));
            o && (u = this._test(u, s, e, t)), l = l.replace(n, void 0 === u ? "???" : u)
        }
    return this.compact ? l.replace(/>\s+</g, "><") : l
}, Mark.pipes = {
    empty: function(l) {
        return l && 0 !== (l + "").trim().length ? !1 : l
    },
    notempty: function(l) {
        return l && (l + "").trim().length ? l : !1
    },
    blank: function(l, e) {
        return l || 0 === l ? l : e
    },
    more: function(l, e) {
        return Mark._size(l) > e ? l : !1
    },
    less: function(l, e) {
        return Mark._size(l) < e ? l : !1
    },
    ormore: function(l, e) {
        return Mark._size(l) >= e ? l : !1
    },
    orless: function(l, e) {
        return Mark._size(l) <= e ? l : !1
    },
    between: function(l, e, t) {
        return l = Mark._size(l), l >= e && t >= l ? l : !1
    },
    equals: function(l, e) {
        return l == e ? l : !1
    },
    notequals: function(l, e) {
        return l != e ? l : !1
    },
    like: function(l, e) {
        return new RegExp(e, "i").test(l) ? l : !1
    },
    notlike: function(l, e) {
        return Mark.pipes.like(l, e) ? !1 : l
    },
    upcase: function(l) {
        return String(l).toUpperCase()
    },
    downcase: function(l) {
        return String(l).toLowerCase()
    },
    capcase: function(l) {
        return l.replace(/\b\w/g, function(l) {
            return l.toUpperCase()
        })
    },
    chop: function(l, e) {
        return l.length > e ? l.substr(0, e) + "..." : l
    },
    tease: function(l, e) {
        var t = l.split(/\s+/);
        return t.slice(0, e).join(" ") + (t.length > e ? "..." : "")
    },
    trim: function(l) {
        return l.trim()
    },
    pack: function(l) {
        return l.trim().replace(/\s{2,}/g, " ")
    },
    round: function(l) {
        return Math.round(+l)
    },
    clean: function(l) {
        return String(l).replace(/<\/?[^>]+>/gi, "")
    },
    size: function(l) {
        return l.length
    },
    length: function(l) {
        return l.length
    },
    reverse: function(l) {
        return Mark._copy(l).reverse()
    },
    join: function(l, e) {
        return l.join(e)
    },
    limit: function(l, e, t) {
        return l.slice(+t || 0, +e + (+t || 0))
    },
    split: function(l, e) {
        return l.split(e || ",")
    },
    choose: function(l, e, t) {
        return l ? e : t || ""
    },
    toggle: function(l, e, t, n) {
        return t.split(",")[e.match(/\w+/g).indexOf(l + "")] || n
    },
    sort: function(l, e) {
        var t = function(l, t) {
            return l[e] > t[e] ? 1 : -1
        };
        return Mark._copy(l).sort(e ? t : void 0)
    },
    fix: function(l, e) {
        return (+l).toFixed(e)
    },
    mod: function(l, e) {
        return +l % +e
    },
    divisible: function(l, e) {
        return l !== !1 && l % e === 0 ? l : !1
    },
    even: function(l) {
        return l !== !1 && l % 2 === 0 ? l : !1
    },
    odd: function(l) {
        return l !== !1 && l % 2 === 1 ? l : !1
    },
    number: function(l) {
        return parseFloat(l.replace(/[^\-\d\.]/g, ""))
    },
    url: function(l) {
        return encodeURI(l)
    },
    bool: function(l) {
        return !!l
    },
    falsy: function(l) {
        return !l
    },
    first: function(l) {
        return 0 === l.idx
    },
    last: function(l) {
        return l.idx === l.size - 1
    },
    call: function(l, e) {
        return l[e].apply(l, [].slice.call(arguments, 2))
    },
    set: function(l, e) {
        return Mark.globals[e] = l, ""
    }
}, "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
})
}(),
function(l) {
var e = {
    set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1
    },
    get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1
    }
};
l.fn.vectorMap = function(l) {
    var t, n, t = this.children(".jvectormap-container").data("mapObject");
    if ("addMap" === l) jvm.WorldMap.maps[arguments[1]] = arguments[2];
    else {
        if (("set" === l || "get" === l) && e[l][arguments[1]]) return n = arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1), t[l + n].apply(t, Array.prototype.slice.call(arguments, 2));
        l = l || {}, l.container = this, t = new jvm.WorldMap(l)
    }
    return this
}
}(jQuery),
function(l) {
function e(e) {
    var t = e || window.event,
        n = [].slice.call(arguments, 1),
        i = 0,
        a = 0,
        r = 0;
    return e = l.event.fix(t), e.type = "mousewheel", t.wheelDelta && (i = t.wheelDelta / 120), t.detail && (i = -t.detail / 3), r = i, void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS && (r = 0, a = -1 * i), void 0 !== t.wheelDeltaY && (r = t.wheelDeltaY / 120), void 0 !== t.wheelDeltaX && (a = -1 * t.wheelDeltaX / 120), n.unshift(e, i, a, r), (l.event.dispatch || l.event.handle).apply(this, n)
}
var t = ["DOMMouseScroll", "mousewheel"];
if (l.event.fixHooks)
    for (var n = t.length; n;) l.event.fixHooks[t[--n]] = l.event.mouseHooks;
l.event.special.mousewheel = {
    setup: function() {
        if (this.addEventListener)
            for (var l = t.length; l;) this.addEventListener(t[--l], e, !1);
        else this.onmousewheel = e
    },
    teardown: function() {
        if (this.removeEventListener)
            for (var l = t.length; l;) this.removeEventListener(t[--l], e, !1);
        else this.onmousewheel = null
    }
}, l.fn.extend({
    mousewheel: function(l) {
        return l ? this.bind("mousewheel", l) : this.trigger("mousewheel")
    },
    unmousewheel: function(l) {
        return this.unbind("mousewheel", l)
    }
})
}(jQuery);
var jvm = {
inherits: function(l, e) {
    function t() {}
    t.prototype = e.prototype, l.prototype = new t, l.prototype.constructor = l, l.parentClass = e
},
mixin: function(l, e) {
    var t;
    for (t in e.prototype) e.prototype.hasOwnProperty(t) && (l.prototype[t] = e.prototype[t])
},
min: function(l) {
    var e, t = Number.MAX_VALUE;
    if (l instanceof Array)
        for (e = 0; e < l.length; e++) l[e] < t && (t = l[e]);
    else
        for (e in l) l[e] < t && (t = l[e]);
    return t
},
max: function(l) {
    var e, t = Number.MIN_VALUE;
    if (l instanceof Array)
        for (e = 0; e < l.length; e++) l[e] > t && (t = l[e]);
    else
        for (e in l) l[e] > t && (t = l[e]);
    return t
},
keys: function(l) {
    var e, t = [];
    for (e in l) t.push(e);
    return t
},
values: function(l) {
    var e, t, n = [];
    for (t = 0; t < arguments.length; t++) {
        l = arguments[t];
        for (e in l) n.push(l[e])
    }
    return n
}
};
jvm.$ = jQuery, jvm.AbstractElement = function(l, e) {
this.node = this.createElement(l), this.name = l, this.properties = {}, e && this.set(e)
}, jvm.AbstractElement.prototype.set = function(l, e) {
var t;
if ("object" == typeof l)
    for (t in l) this.properties[t] = l[t], this.applyAttr(t, l[t]);
else this.properties[l] = e, this.applyAttr(l, e)
}, jvm.AbstractElement.prototype.get = function(l) {
return this.properties[l]
}, jvm.AbstractElement.prototype.applyAttr = function(l, e) {
this.node.setAttribute(l, e)
}, jvm.AbstractElement.prototype.remove = function() {
jvm.$(this.node).remove()
}, jvm.AbstractCanvasElement = function(l, e, t) {
this.container = l, this.setSize(e, t), this.rootElement = new jvm[this.classPrefix + "GroupElement"], this.node.appendChild(this.rootElement.node), this.container.appendChild(this.node)
}, jvm.AbstractCanvasElement.prototype.add = function(l, e) {
e = e || this.rootElement, e.add(l), l.canvas = this
}, jvm.AbstractCanvasElement.prototype.addPath = function(l, e, t) {
var n = new jvm[this.classPrefix + "PathElement"](l, e);
return this.add(n, t), n
}, jvm.AbstractCanvasElement.prototype.addCircle = function(l, e, t) {
var n = new jvm[this.classPrefix + "CircleElement"](l, e);
return this.add(n, t), n
}, jvm.AbstractCanvasElement.prototype.addGroup = function(l) {
var e = new jvm[this.classPrefix + "GroupElement"];
return l ? l.node.appendChild(e.node) : this.node.appendChild(e.node), e.canvas = this, e
}, jvm.AbstractShapeElement = function(l, e, t) {
this.style = t || {}, this.style.current = {}, this.isHovered = !1, this.isSelected = !1, this.updateStyle()
}, jvm.AbstractShapeElement.prototype.setHovered = function(l) {
this.isHovered !== l && (this.isHovered = l, this.updateStyle())
}, jvm.AbstractShapeElement.prototype.setSelected = function(l) {
this.isSelected !== l && (this.isSelected = l, this.updateStyle(), jvm.$(this.node).trigger("selected", [l]))
}, jvm.AbstractShapeElement.prototype.setStyle = function(l, e) {
var t = {};
"object" == typeof l ? t = l : t[l] = e, jvm.$.extend(this.style.current, t), this.updateStyle()
}, jvm.AbstractShapeElement.prototype.updateStyle = function() {
var l = {};
jvm.$.extend(l, this.style.initial || {}), jvm.$.extend(l, this.style.current || {}), this.isHovered && jvm.$.extend(l, this.style.hover || {}), this.isSelected && (jvm.$.extend(l, this.style.selected || {}), this.isHovered && jvm.$.extend(l, this.style.selectedHover || {})), this.set(l)
}, jvm.SVGElement = function() {
jvm.SVGElement.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.SVGElement, jvm.AbstractElement), jvm.SVGElement.svgns = "http://www.w3.org/2000/svg", jvm.SVGElement.prototype.createElement = function(l) {
return document.createElementNS(jvm.SVGElement.svgns, l)
}, jvm.SVGElement.prototype.addClass = function(l) {
this.node.setAttribute("class", l)
}, jvm.SVGElement.prototype.getElementCtr = function(l) {
return jvm["SVG" + l]
}, jvm.SVGElement.prototype.getBBox = function() {
return this.node.getBBox()
}, jvm.SVGGroupElement = function() {
jvm.SVGGroupElement.parentClass.call(this, "g")
}, jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement), jvm.SVGGroupElement.prototype.add = function(l) {
this.node.appendChild(l.node)
}, jvm.SVGCanvasElement = function() {
this.classPrefix = "SVG", jvm.SVGCanvasElement.parentClass.call(this, "svg"), jvm.AbstractCanvasElement.apply(this, arguments)
}, jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement), jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement), jvm.SVGCanvasElement.prototype.setSize = function(l, e) {
this.width = l, this.height = e, this.node.setAttribute("width", l), this.node.setAttribute("height", e)
}, jvm.SVGCanvasElement.prototype.applyTransformParams = function(l, e, t) {
this.scale = l, this.transX = e, this.transY = t, this.rootElement.node.setAttribute("transform", "scale(" + l + ") translate(" + e + ", " + t + ")")
}, jvm.SVGShapeElement = function(l, e) {
jvm.SVGShapeElement.parentClass.call(this, l, e), jvm.AbstractShapeElement.apply(this, arguments)
}, jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement), jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement), jvm.SVGPathElement = function(l, e) {
jvm.SVGPathElement.parentClass.call(this, "path", l, e), this.node.setAttribute("fill-rule", "evenodd")
}, jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement), jvm.SVGCircleElement = function(l, e) {
jvm.SVGCircleElement.parentClass.call(this, "circle", l, e)
}, jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement), jvm.VMLElement = function() {
jvm.VMLElement.VMLInitialized || jvm.VMLElement.initializeVML(), jvm.VMLElement.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.VMLElement, jvm.AbstractElement), jvm.VMLElement.VMLInitialized = !1, jvm.VMLElement.initializeVML = function() {
try {
    document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), jvm.VMLElement.prototype.createElement = function(l) {
        return document.createElement("<rvml:" + l + ' class="rvml">')
    }
} catch (l) {
    jvm.VMLElement.prototype.createElement = function(l) {
        return document.createElement("<" + l + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
    }
}
document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"), jvm.VMLElement.VMLInitialized = !0
}, jvm.VMLElement.prototype.getElementCtr = function(l) {
return jvm["VML" + l]
}, jvm.VMLElement.prototype.addClass = function(l) {
jvm.$(this.node).addClass(l)
}, jvm.VMLElement.prototype.applyAttr = function(l, e) {
this.node[l] = e
}, jvm.VMLElement.prototype.getBBox = function() {
var l = jvm.$(this.node);
return {
    x: l.position().left / this.canvas.scale,
    y: l.position().top / this.canvas.scale,
    width: l.width() / this.canvas.scale,
    height: l.height() / this.canvas.scale
}
}, jvm.VMLGroupElement = function() {
jvm.VMLGroupElement.parentClass.call(this, "group"), this.node.style.left = "0px", this.node.style.top = "0px", this.node.coordorigin = "0 0"
}, jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement), jvm.VMLGroupElement.prototype.add = function(l) {
this.node.appendChild(l.node)
}, jvm.VMLCanvasElement = function() {
this.classPrefix = "VML", jvm.VMLCanvasElement.parentClass.call(this, "group"), jvm.AbstractCanvasElement.apply(this, arguments), this.node.style.position = "absolute"
}, jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement), jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement), jvm.VMLCanvasElement.prototype.setSize = function(l, e) {
var t, n, i, a;
if (this.width = l, this.height = e, this.node.style.width = l + "px", this.node.style.height = e + "px", this.node.coordsize = l + " " + e, this.node.coordorigin = "0 0", this.rootElement) {
    for (t = this.rootElement.node.getElementsByTagName("shape"), i = 0, a = t.length; a > i; i++) t[i].coordsize = l + " " + e, t[i].style.width = l + "px", t[i].style.height = e + "px";
    for (n = this.node.getElementsByTagName("group"), i = 0, a = n.length; a > i; i++) n[i].coordsize = l + " " + e, n[i].style.width = l + "px", n[i].style.height = e + "px"
}
}, jvm.VMLCanvasElement.prototype.applyTransformParams = function(l, e, t) {
this.scale = l, this.transX = e, this.transY = t, this.rootElement.node.coordorigin = this.width - e - this.width / 100 + "," + (this.height - t - this.height / 100), this.rootElement.node.coordsize = this.width / l + "," + this.height / l
}, jvm.VMLShapeElement = function(l, e) {
jvm.VMLShapeElement.parentClass.call(this, l, e), this.fillElement = new jvm.VMLElement("fill"), this.strokeElement = new jvm.VMLElement("stroke"), this.node.appendChild(this.fillElement.node), this.node.appendChild(this.strokeElement.node), this.node.stroked = !1, jvm.AbstractShapeElement.apply(this, arguments)
}, jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement), jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement), jvm.VMLShapeElement.prototype.applyAttr = function(l, e) {
switch (l) {
    case "fill":
        this.node.fillcolor = e;
        break;
    case "fill-opacity":
        this.fillElement.node.opacity = Math.round(100 * e) + "%";
        break;
    case "stroke":
        this.node.stroked = "none" === e ? !1 : !0, this.node.strokecolor = e;
        break;
    case "stroke-opacity":
        this.strokeElement.node.opacity = Math.round(100 * e) + "%";
        break;
    case "stroke-width":
        this.node.stroked = 0 === parseInt(e, 10) ? !1 : !0, this.node.strokeweight = e;
        break;
    case "d":
        this.node.path = jvm.VMLPathElement.pathSvgToVml(e);
        break;
    default:
        jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments)
}
}, jvm.VMLPathElement = function(l, e) {
var t = new jvm.VMLElement("skew");
jvm.VMLPathElement.parentClass.call(this, "shape", l, e), this.node.coordorigin = "0 0", t.node.on = !0, t.node.matrix = "0.01,0,0,0.01,0,0", t.node.offset = "0,0", this.node.appendChild(t.node)
}, jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement), jvm.VMLPathElement.prototype.applyAttr = function(l, e) {
"d" === l ? this.node.path = jvm.VMLPathElement.pathSvgToVml(e) : jvm.VMLShapeElement.prototype.applyAttr.call(this, l, e)
}, jvm.VMLPathElement.pathSvgToVml = function(l) {
var e, t, n = 0,
    i = 0;
return l = l.replace(/(-?\d+)e(-?\d+)/g, "0"), l.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function(l, a, r) {
    r = r.replace(/(\d)-/g, "$1,-").replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, ",").split(","), r[0] || r.shift();
    for (var o = 0, s = r.length; s > o; o++) r[o] = Math.round(100 * r[o]);
    switch (a) {
        case "m":
            return n += r[0], i += r[1], "t" + r.join(",");
        case "M":
            return n = r[0], i = r[1], "m" + r.join(",");
        case "l":
            return n += r[0], i += r[1], "r" + r.join(",");
        case "L":
            return n = r[0], i = r[1], "l" + r.join(",");
        case "h":
            return n += r[0], "r" + r[0] + ",0";
        case "H":
            return n = r[0], "l" + n + "," + i;
        case "v":
            return i += r[0], "r0," + r[0];
        case "V":
            return i = r[0], "l" + n + "," + i;
        case "c":
            return e = n + r[r.length - 4], t = i + r[r.length - 3], n += r[r.length - 2], i += r[r.length - 1], "v" + r.join(",");
        case "C":
            return e = r[r.length - 4], t = r[r.length - 3], n = r[r.length - 2], i = r[r.length - 1], "c" + r.join(",");
        case "s":
            return r.unshift(i - t), r.unshift(n - e), e = n + r[r.length - 4], t = i + r[r.length - 3], n += r[r.length - 2], i += r[r.length - 1], "v" + r.join(",");
        case "S":
            return r.unshift(i + i - t), r.unshift(n + n - e), e = r[r.length - 4], t = r[r.length - 3], n = r[r.length - 2], i = r[r.length - 1], "c" + r.join(",")
    }
    return ""
}).replace(/z/g, "e")
}, jvm.VMLCircleElement = function(l, e) {
jvm.VMLCircleElement.parentClass.call(this, "oval", l, e)
}, jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement), jvm.VMLCircleElement.prototype.applyAttr = function(l, e) {
switch (l) {
    case "r":
        this.node.style.width = 2 * e + "px", this.node.style.height = 2 * e + "px", this.applyAttr("cx", this.get("cx") || 0), this.applyAttr("cy", this.get("cy") || 0);
        break;
    case "cx":
        if (!e) return;
        this.node.style.left = e - (this.get("r") || 0) + "px";
        break;
    case "cy":
        if (!e) return;
        this.node.style.top = e - (this.get("r") || 0) + "px";
        break;
    default:
        jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, l, e)
}
}, jvm.VectorCanvas = function(l, e, t) {
return this.mode = window.SVGAngle ? "svg" : "vml", this.impl = "svg" == this.mode ? new jvm.SVGCanvasElement(l, e, t) : new jvm.VMLCanvasElement(l, e, t), this.impl
}, jvm.SimpleScale = function(l) {
this.scale = l
}, jvm.SimpleScale.prototype.getValue = function(l) {
return l
}, jvm.OrdinalScale = function(l) {
this.scale = l
}, jvm.OrdinalScale.prototype.getValue = function(l) {
return this.scale[l]
}, jvm.NumericScale = function(l, e, t, n) {
this.scale = [], e = e || "linear", l && this.setScale(l), e && this.setNormalizeFunction(e), t && this.setMin(t), n && this.setMax(n)
}, jvm.NumericScale.prototype = {
setMin: function(l) {
    this.clearMinValue = l, this.minValue = "function" == typeof this.normalize ? this.normalize(l) : l
},
setMax: function(l) {
    this.clearMaxValue = l, this.maxValue = "function" == typeof this.normalize ? this.normalize(l) : l
},
setScale: function(l) {
    var e;
    for (e = 0; e < l.length; e++) this.scale[e] = [l[e]]
},
setNormalizeFunction: function(l) {
    "polynomial" === l ? this.normalize = function(l) {
        return Math.pow(l, .2)
    } : "linear" === l ? delete this.normalize : this.normalize = l, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue)
},
getValue: function(l) {
    var e, t, n = [],
        i = 0,
        a = 0;
    for ("function" == typeof this.normalize && (l = this.normalize(l)), a = 0; a < this.scale.length - 1; a++) e = this.vectorLength(this.vectorSubtract(this.scale[a + 1], this.scale[a])), n.push(e), i += e;
    for (t = (this.maxValue - this.minValue) / i, a = 0; a < n.length; a++) n[a] *= t;
    for (a = 0, l -= this.minValue; l - n[a] >= 0;) l -= n[a], a++;
    return l = this.vectorToNum(a == this.scale.length - 1 ? this.scale[a] : this.vectorAdd(this.scale[a], this.vectorMult(this.vectorSubtract(this.scale[a + 1], this.scale[a]), l / n[a])))
},
vectorToNum: function(l) {
    var e, t = 0;
    for (e = 0; e < l.length; e++) t += Math.round(l[e]) * Math.pow(256, l.length - e - 1);
    return t
},
vectorSubtract: function(l, e) {
    var t, n = [];
    for (t = 0; t < l.length; t++) n[t] = l[t] - e[t];
    return n
},
vectorAdd: function(l, e) {
    var t, n = [];
    for (t = 0; t < l.length; t++) n[t] = l[t] + e[t];
    return n
},
vectorMult: function(l, e) {
    var t, n = [];
    for (t = 0; t < l.length; t++) n[t] = l[t] * e;
    return n
},
vectorLength: function(l) {
    var e, t = 0;
    for (e = 0; e < l.length; e++) t += l[e] * l[e];
    return Math.sqrt(t)
}
}, jvm.ColorScale = function() {
jvm.ColorScale.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.ColorScale, jvm.NumericScale), jvm.ColorScale.prototype.setScale = function(l) {
var e;
for (e = 0; e < l.length; e++) this.scale[e] = jvm.ColorScale.rgbToArray(l[e])
}, jvm.ColorScale.prototype.getValue = function(l) {
return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, l))
}, jvm.ColorScale.arrayToRgb = function(l) {
var e, t, n = "#";
for (t = 0; t < l.length; t++) e = l[t].toString(16), n += 1 == e.length ? "0" + e : e;
return n
}, jvm.ColorScale.numToRgb = function(l) {
for (l = l.toString(16); l.length < 6;) l = "0" + l;
return "#" + l
}, jvm.ColorScale.rgbToArray = function(l) {
return l = l.substr(1), [parseInt(l.substr(0, 2), 16), parseInt(l.substr(2, 2), 16), parseInt(l.substr(4, 2), 16)]
}, jvm.DataSeries = function(l, e) {
var t;
l = l || {}, l.attribute = l.attribute || "fill", this.elements = e, this.params = l, l.attributes && this.setAttributes(l.attributes), jvm.$.isArray(l.scale) ? (t = "fill" === l.attribute || "stroke" === l.attribute ? jvm.ColorScale : jvm.NumericScale, this.scale = new t(l.scale, l.normalizeFunction, l.min, l.max)) : this.scale = l.scale ? new jvm.OrdinalScale(l.scale) : new jvm.SimpleScale(l.scale), l.values && (this.values = l.values || {}, this.setValues(l.values))
}, jvm.DataSeries.prototype = {
setAttributes: function(l, e) {
    var t, n = l;
    if ("string" == typeof l) this.elements[l] && this.elements[l].setStyle(this.params.attribute, e);
    else
        for (t in n) this.elements[t] && this.elements[t].element.setStyle(this.params.attribute, n[t])
},
setValues: function(l) {
    var e, t, n = Number.MIN_VALUE,
        i = Number.MAX_VALUE,
        a = {};
    if (this.scale instanceof jvm.OrdinalScale || this.scale instanceof jvm.SimpleScale)
        for (t in l) a[t] = l[t] ? this.scale.getValue(l[t]) : this.elements[t].element.style.initial[this.params.attribute];
    else {
        if (!this.params.min || !this.params.max) {
            for (t in l) e = parseFloat(l[t]), e > n && (n = l[t]), i > e && (i = e);
            this.params.min || this.scale.setMin(i), this.params.max || this.scale.setMax(n), this.params.min = i, this.params.max = n
        }
        for (t in l) e = parseFloat(l[t]), a[t] = isNaN(e) ? this.elements[t].element.style.initial[this.params.attribute] : this.scale.getValue(e)
    }
    this.setAttributes(a), $.extend(this.values, l)
},
clear: function() {
    var l, e = {};
    for (l in this.values) e[l] = this.elements[l].element.style.initial[this.params.attribute];
    this.setAttributes(e), this.values = {}
},
setScale: function(l) {
    this.scale.setScale(l), this.values && this.setValues(this.values)
},
setNormalizeFunction: function(l) {
    this.scale.setNormalizeFunction(l), this.values && this.setValues(this.values)
}
}, jvm.Proj = {
mill: function(l, e, t) {
    return {
        x: (e - t) / 360 * jvm.WorldMap.circumference,
        y: -(180 / Math.PI * (5 / 4) * Math.log(Math.tan(Math.PI / 4 + .8 * l * Math.PI / 360))) / 360 * jvm.WorldMap.circumference
    }
},
merc: function(l, e, t) {
    return {
        x: (e - t) / 360 * jvm.WorldMap.circumference,
        y: -(180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + l * Math.PI / 360))) / 360 * jvm.WorldMap.circumference
    }
},
aea: function(l, e, t) {
    var n = 0,
        i = t / 180 * Math.PI,
        a = 29.5 / 180 * Math.PI,
        r = 45.5 / 180 * Math.PI,
        o = l / 180 * Math.PI,
        s = e / 180 * Math.PI,
        c = (Math.sin(a) + Math.sin(r)) / 2,
        u = Math.cos(a) * Math.cos(a) + 2 * c * Math.sin(a),
        d = c * (s - i),
        f = Math.sqrt(u - 2 * c * Math.sin(o)) / c,
        h = Math.sqrt(u - 2 * c * Math.sin(n)) / c;
    return {
        x: f * Math.sin(d) / (2 * Math.PI) * jvm.WorldMap.circumference,
        y: -(h - f * Math.cos(d)) / (2 * Math.PI) * jvm.WorldMap.circumference
    }
},
lcc: function(l, e, t) {
    var i = 0,
        a = t / 180 * Math.PI,
        r = e / 180 * Math.PI,
        o = 33 / 180 * Math.PI,
        s = .25 * Math.PI,
        c = l / 180 * Math.PI;
    return n = Math.log(Math.cos(o) * (1 / Math.cos(s))) / Math.log(Math.tan(Math.PI / 4 + s / 2) * (1 / Math.tan(Math.PI / 4 + o / 2))), F = Math.cos(o) * Math.pow(Math.tan(Math.PI / 4 + o / 2), n) / n, ro = F * Math.pow(1 / Math.tan(Math.PI / 4 + c / 2), n), ro0 = F * Math.pow(1 / Math.tan(Math.PI / 4 + i / 2), n), {
        x: ro * Math.sin(n * (r - a)) / (2 * Math.PI) * jvm.WorldMap.circumference,
        y: -(ro0 - ro * Math.cos(n * (r - a))) / (2 * Math.PI) * jvm.WorldMap.circumference
    }
}
}, jvm.WorldMap = function(l) {
var e, t = this;
this.params = jvm.$.extend(!0, {}, jvm.WorldMap.defaultParams, l), this.mapData = jvm.WorldMap.maps[this.params.map], this.markers = {}, this.regions = {}, this.regionsColors = {}, this.regionsData = {}, this.container = jvm.$("<div>").css({
    width: "100%",
    height: "100%"
}).addClass("jvectormap-container"), this.params.container.append(this.container), this.container.data("mapObject", this), this.container.css({
    position: "relative",
    overflow: "hidden"
}), this.defaultWidth = this.mapData.width, this.defaultHeight = this.mapData.height, this.setBackgroundColor(this.params.backgroundColor), this.onResize = function() {
    t.setSize()
}, jvm.$(window).resize(this.onResize);
for (e in jvm.WorldMap.apiEvents) this.params[e] && this.container.bind(jvm.WorldMap.apiEvents[e] + ".jvectormap", this.params[e]);
this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height), "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? this.params.bindTouchEvents && this.bindContainerTouchEvents() : this.bindContainerEvents(), this.bindElementEvents(), this.createLabel(), this.bindZoomButtons(), this.createRegions(), this.createMarkers(this.params.markers || {}), this.setSize(), this.params.focusOn && ("object" == typeof this.params.focusOn ? this.setFocus.call(this, this.params.focusOn.scale, this.params.focusOn.x, this.params.focusOn.y) : this.setFocus.call(this, this.params.focusOn)), this.params.selectedRegions && this.setSelectedRegions(this.params.selectedRegions), this.params.selectedMarkers && this.setSelectedMarkers(this.params.selectedMarkers), this.params.series && this.createSeries()
}, jvm.WorldMap.prototype = {
transX: 0,
transY: 0,
scale: 1,
baseTransX: 0,
baseTransY: 0,
baseScale: 1,
width: 0,
height: 0,
setBackgroundColor: function(l) {
    this.container.css("background-color", l)
},
resize: function() {
    var l = this.baseScale;
    this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / l, this.transX *= this.baseScale / l, this.transY *= this.baseScale / l
},
setSize: function() {
    this.width = this.container.width(), this.height = this.container.height(), this.resize(), this.canvas.setSize(this.width, this.height), this.applyTransform()
},
reset: function() {
    var l, e;
    for (l in this.series)
        for (e = 0; e < this.series[l].length; e++) this.series[l][e].clear();
    this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform()
},
applyTransform: function() {
    var l, e, t, n;
    this.defaultWidth * this.scale <= this.width ? (l = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), t = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (l = 0, t = (this.width - this.defaultWidth * this.scale) / this.scale), this.defaultHeight * this.scale <= this.height ? (e = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), n = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (e = 0, n = (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > e ? this.transY = e : this.transY < n && (this.transY = n), this.transX > l ? this.transX = l : this.transX < t && (this.transX = t), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this.markers && this.repositionMarkers()
},
bindContainerEvents: function() {
    var l, e, t = !1,
        n = this;
    this.container.mousemove(function(i) {
        return t && (n.transX -= (l - i.pageX) / n.scale, n.transY -= (e - i.pageY) / n.scale, n.applyTransform(), l = i.pageX, e = i.pageY), !1
    }).mousedown(function(n) {
        return t = !0, l = n.pageX, e = n.pageY, !1
    }), jvm.$("body").mouseup(function() {
        t = !1
    }), this.params.zoomOnScroll && this.container.mousewheel(function(l, e, t, i) {
        var a = jvm.$(n.container).offset(),
            r = l.pageX - a.left,
            o = l.pageY - a.top,
            s = Math.pow(1.3, i);
        n.label.hide(), n.setScale(n.scale * s, r, o), l.preventDefault()
    })
},
bindContainerTouchEvents: function() {
    var l, e, t, n, i, a, r, o = this;
    jvm.$(this.container).bind("gesturestart", function() {
        return l = o.scale, e = o.transX, t = o.transY, !1
    }), jvm.$(this.container).bind("gesturechange", function(e) {
        var t = e.originalEvent.scale;
        return o.setScale(l * t, a, r), o.label.hide(), !1
    }), jvm.$(this.container).bind("touchstart", function(l) {
        var e = l.originalEvent.touches;
        2 == e.length && (a = e[0].pageX > e[1].pageX ? e[1].pageX + (e[0].pageX - e[1].pageX) / 2 : e[0].pageX + (e[1].pageX - e[0].pageX) / 2, r = e[0].pageY > e[1].pageY ? e[1].pageY + (e[0].pageY - e[1].pageY) / 2 : e[0].pageY + (e[1].pageY - e[0].pageY) / 2), n = l.originalEvent.touches[0].pageX, i = l.originalEvent.touches[0].pageY
    }), jvm.$(this.container).bind("touchmove", function(l) {
        var e;
        return o.scale != o.baseScale ? (1 == l.originalEvent.touches.length && n && i ? (e = l.originalEvent.touches[0], o.transX -= (n - e.pageX) / o.scale, o.transY -= (i - e.pageY) / o.scale, o.applyTransform(), o.label.hide(), n = e.pageX, i = e.pageY) : (n = !1, i = !1), !1) : void 0
    })
},
bindElementEvents: function() {
    var l, e = this;
    this.container.mousemove(function() {
        l = !0
    }), this.container.delegate("[class~='jvectormap-element']", "mouseover mouseout", function(l) {
        var t = -1 === jvm.$(this).attr("class").indexOf("jvectormap-region") ? "marker" : "region",
            n = jvm.$(this).attr("region" == t ? "data-code" : "data-index"),
            i = "region" == t ? e.regions[n].element : e.markers[n].element,
            a = "region" == t ? e.mapData.paths[n].name : e.markers[n].config.name || "",
            r = jvm.$.Event(t + "LabelShow.jvectormap"),
            o = jvm.$.Event(t + "Over.jvectormap");
        "mouseover" == l.type ? (e.container.trigger(o, [n]), o.isDefaultPrevented() || i.setHovered(!0), e.label.text(a), e.container.trigger(r, [e.label, n]), r.isDefaultPrevented() || (e.label.show(), e.labelWidth = e.label.width(), e.labelHeight = e.label.height())) : (i.setHovered(!1), e.label.hide(), e.container.trigger(t + "Out.jvectormap", [n]))
    }), this.container.delegate("[class~='jvectormap-element']", "mousedown", function() {
        l = !1
    }), this.container.delegate("[class~='jvectormap-element']", "mouseup", function() {
        var t = -1 === jvm.$(this).attr("class").indexOf("jvectormap-region") ? "marker" : "region",
            n = jvm.$(this).attr("region" == t ? "data-code" : "data-index"),
            i = jvm.$.Event(t + "Click.jvectormap"),
            a = "region" == t ? e.regions[n].element : e.markers[n].element;
        l || (e.container.trigger(i, [n]), ("region" === t && e.params.regionsSelectable || "marker" === t && e.params.markersSelectable) && (i.isDefaultPrevented() || (e.params[t + "sSelectableOne"] && e.clearSelected(t + "s"), a.setSelected(!a.isSelected))))
    })
},
bindZoomButtons: function() {
    var l = this;
    jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container), jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container), this.container.find(".jvectormap-zoomin").click(function() {
        l.setScale(l.scale * l.params.zoomStep, l.width / 2, l.height / 2)
    }), this.container.find(".jvectormap-zoomout").click(function() {
        l.setScale(l.scale / l.params.zoomStep, l.width / 2, l.height / 2)
    })
},
createLabel: function() {
    var l = this;
    this.label = jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")), this.container.mousemove(function(e) {
        var t = e.pageX - 15 - l.labelWidth,
            n = e.pageY - 15 - l.labelHeight;
        5 > t && (t = e.pageX + 15), 5 > n && (n = e.pageY + 15), l.label.is(":visible") && l.label.css({
            left: t,
            top: n
        })
    })
},
setScale: function(l, e, t, n) {
    var i, a = jvm.$.Event("zoom.jvectormap");
    l > this.params.zoomMax * this.baseScale ? l = this.params.zoomMax * this.baseScale : l < this.params.zoomMin * this.baseScale && (l = this.params.zoomMin * this.baseScale), "undefined" != typeof e && "undefined" != typeof t && (i = l / this.scale, n ? (this.transX = e + this.defaultWidth * (this.width / (this.defaultWidth * l)) / 2, this.transY = t + this.defaultHeight * (this.height / (this.defaultHeight * l)) / 2) : (this.transX -= (i - 1) / l * e, this.transY -= (i - 1) / l * t)), this.scale = l, this.applyTransform(), this.container.trigger(a, [l / this.baseScale])
},
setFocus: function(l, e, t) {
    var n;
    "string" == typeof l && this.regions[l] ? (n = this.regions[l].element.getBBox(), this.setScale(Math.min(this.width / n.width, this.height / n.height), -(n.x + n.width / 2), -(n.y + n.height / 2), !0)) : this.setScale(l, -e * this.defaultWidth, -t * this.defaultHeight, !0)
},
getSelected: function(l) {
    var e, t = [];
    for (e in this[l]) this[l][e].element.isSelected && t.push(e);
    return t
},
getSelectedRegions: function() {
    return this.getSelected("regions")
},
getSelectedMarkers: function() {
    return this.getSelected("markers")
},
setSelected: function(l, e) {
    var t;
    if ("object" != typeof e && (e = [e]), jvm.$.isArray(e))
        for (t = 0; t < e.length; t++) this[l][e[t]].element.setSelected(!0);
    else
        for (t in e) this[l][t].element.setSelected(!!e[t])
},
setSelectedRegions: function(l) {
    this.setSelected("regions", l)
},
setSelectedMarkers: function(l) {
    this.setSelected("markers", l)
},
clearSelected: function(l) {
    var e, t = {},
        n = this.getSelected(l);
    for (e = 0; e < n.length; e++) t[n[e]] = !1;
    this.setSelected(l, t)
},
clearSelectedRegions: function() {
    this.clearSelected("regions")
},
clearSelectedMarkers: function() {
    this.clearSelected("markers")
},
getMapObject: function() {
    return this
},
getRegionName: function(l) {
    return this.mapData.paths[l].name
},
createRegions: function() {
    var l, e, t = this;
    for (l in this.mapData.paths) e = this.canvas.addPath({
        d: this.mapData.paths[l].path,
        "data-code": l
    }, jvm.$.extend(!0, {}, this.params.regionStyle)), jvm.$(e.node).bind("selected", function(l, e) {
        t.container.trigger("regionSelected.jvectormap", [jvm.$(this).attr("data-code"), e, t.getSelectedRegions()])
    }), e.addClass("jvectormap-region jvectormap-element"), this.regions[l] = {
        element: e,
        config: this.mapData.paths[l]
    }
},
createMarkers: function(l) {
    var e, t, n, i, a, r = this;
    if (this.markersGroup = this.markersGroup || this.canvas.addGroup(), jvm.$.isArray(l))
        for (a = l.slice(), l = {}, e = 0; e < a.length; e++) l[e] = a[e];
    for (e in l) i = l[e] instanceof Array ? {
        latLng: l[e]
    } : l[e], n = this.latLngToPoint.apply(this, i.latLng || [0, 0]), t = this.canvas.addCircle({
        "data-index": e,
        cx: n.x,
        cy: n.y
    }, jvm.$.extend(!0, {}, this.params.markerStyle, {
        initial: i.style || {}
    }), this.markersGroup), t.addClass("jvectormap-marker jvectormap-element"), jvm.$(t.node).bind("selected", function(l, e) {
        r.container.trigger("markerSelected.jvectormap", [jvm.$(this).attr("data-index"), e, r.getSelectedMarkers()])
    }), this.markers[e] && this.removeMarkers([e]), this.markers[e] = {
        element: t,
        config: i
    }
},
repositionMarkers: function() {
    var l, e;
    for (l in this.markers) e = this.latLngToPoint.apply(this, this.markers[l].config.latLng), this.markers[l].element.setStyle({
        cx: e.x,
        cy: e.y
    })
},
addMarker: function(l, e, t) {
    var n, i, a = {},
        r = [];
    for (a[l] = e, i = 0; i < t.length; i++) n = {}, n[l] = t[i], r.push(n);
    this.addMarkers(a, r)
},
addMarkers: function(l, e) {
    var t;
    for (e = e || [], this.createMarkers(l), t = 0; t < e.length; t++) this.series.markers[t].setValues(e[t] || {})
},
removeMarkers: function(l) {
    var e;
    for (e = 0; e < l.length; e++) this.markers[l[e]].element.remove(), delete this.markers[l[e]]
},
removeAllMarkers: function() {
    var l, e = [];
    for (l in this.markers) e.push(l);
    this.removeMarkers(e)
},
latLngToPoint: function(l, e) {
    {
        var t, n, i, a = jvm.WorldMap.maps[this.params.map].projection,
            r = a.centralMeridian;
        this.width - 2 * this.baseTransX * this.baseScale, this.height - 2 * this.baseTransY * this.baseScale, this.scale / this.baseScale
    }
    return -180 + r > e && (e += 360), t = jvm.Proj[a.type](l, e, r), n = this.getInsetForPoint(t.x, t.y), n ? (i = n.bbox, t.x = (t.x - i[0].x) / (i[1].x - i[0].x) * n.width * this.scale, t.y = (t.y - i[0].y) / (i[1].y - i[0].y) * n.height * this.scale, {
        x: t.x + this.transX * this.scale + n.left * this.scale,
        y: t.y + this.transY * this.scale + n.top * this.scale
    }) : {
        x: 0,
        y: 0
    }
},
getInsetForPoint: function(l, e) {
    var t, n, i = jvm.WorldMap.maps[this.params.map].insets;
    for (t = 0; t < i.length; t++)
        if (n = i[t].bbox, l > n[0].x && l < n[1].x && e > n[0].y && e < n[1].y) return i[t]
},
createSeries: function() {
    var l, e;
    this.series = {
        markers: [],
        regions: []
    };
    for (e in this.params.series)
        for (l = 0; l < this.params.series[e].length; l++) this.series[e][l] = new jvm.DataSeries(this.params.series[e][l], this[e])
},
remove: function() {
    this.label.remove(), this.container.remove(), jvm.$(window).unbind("resize", this.onResize)
}
}, jvm.WorldMap.maps = {}, jvm.WorldMap.circumference = 6381372 * Math.PI * 2, jvm.WorldMap.defaultParams = {
map: "world_mill_en",
backgroundColor: "#505050",
zoomOnScroll: !0,
zoomMax: 8,
zoomMin: 1,
zoomStep: 1.6,
regionsSelectable: !1,
markersSelectable: !1,
bindTouchEvents: !0,
regionStyle: {
    initial: {
        fill: "white",
        "fill-opacity": 1,
        stroke: "none",
        "stroke-width": 0,
        "stroke-opacity": 1
    },
    hover: {
        "fill-opacity": .8
    },
    selected: {
        "fill-opacity": 1
    },
    selectedHover: {}
},
markerStyle: {
    initial: {
        fill: "grey",
        stroke: "#505050",
        "fill-opacity": 1,
        "stroke-width": 1,
        "stroke-opacity": 1,
        r: 5
    },
    hover: {
        stroke: "black",
        "stroke-width": 2
    },
    selected: {
        fill: "blue"
    },
    selectedHover: {}
}
}, jvm.WorldMap.apiEvents = {
onRegionLabelShow: "regionLabelShow",
onRegionOver: "regionOver",
onRegionOut: "regionOut",
onRegionClick: "regionClick",
onRegionSelected: "regionSelected",
onMarkerLabelShow: "markerLabelShow",
onMarkerOver: "markerOver",
onMarkerOut: "markerOut",
onMarkerClick: "markerClick",
onMarkerSelected: "markerSelected",
onZoom: "zoom"
}, $.fn.vectorMap("addMap", "world", {
insets: [{
    width: 900,
    top: 0,
    height: 440.7063107441331,
    bbox: [{
        y: -12671671.123330014,
        x: -20004297.151525836
    }, {
        y: 6930392.02513512,
        x: 20026572.394749384
    }],
    left: 0
}],
paths: {
    BD: {
        path: "M652.71,228.85l-0.04,1.38l-0.46,-0.21l-0.42,0.3l0.05,0.65l-0.17,-1.37l-0.48,-1.26l-1.08,-1.6l-0.23,-0.13l-2.31,-0.11l-0.31,0.36l0.21,0.98l-0.6,1.11l-0.8,-0.4l-0.37,0.09l-0.23,0.3l-0.54,-0.21l-0.78,-0.19l-0.38,-2.04l-0.83,-1.89l0.4,-1.5l-0.16,-0.35l-1.24,-0.57l0.36,-0.62l1.5,-0.95l0.02,-0.49l-1.62,-1.26l0.64,-1.31l1.7,1.0l0.12,0.04l0.96,0.11l0.19,1.62l0.25,0.26l2.38,0.37l2.32,-0.04l1.06,0.33l-0.92,1.79l-0.97,0.13l-0.23,0.16l-0.77,1.51l0.05,0.35l1.37,1.37l0.5,-0.14l0.35,-1.46l0.24,-0.0l1.24,3.92Z",
        name: "Bangladesh"
    },
    BE: {
        path: "M429.28,143.95l1.76,0.25l0.13,-0.01l2.16,-0.64l1.46,1.34l1.26,0.71l-0.23,1.8l-0.44,0.08l-0.24,0.25l-0.2,1.36l-1.8,-1.22l-0.23,-0.05l-1.14,0.23l-1.62,-1.43l-1.15,-1.31l-0.21,-0.1l-0.95,-0.04l-0.21,-0.68l1.66,-0.54Z",
        name: "Belgium"
    },
    BF: {
        path: "M413.48,260.21l-1.22,-0.46l-0.13,-0.02l-1.17,0.1l-0.15,0.06l-0.73,0.53l-0.87,-0.41l-0.39,-0.75l-0.13,-0.13l-0.98,-0.48l-0.14,-1.2l0.63,-0.99l0.05,-0.18l-0.05,-0.73l1.9,-2.01l0.08,-0.14l0.35,-1.65l0.49,-0.44l1.05,0.3l0.21,-0.02l1.05,-0.52l0.13,-0.13l0.3,-0.58l1.87,-1.1l0.11,-0.1l0.43,-0.72l2.23,-1.01l1.21,-0.32l0.51,0.4l0.19,0.06l1.25,-0.01l-0.14,0.89l0.01,0.13l0.34,1.16l0.06,0.11l1.35,1.59l0.07,1.13l0.24,0.28l2.64,0.53l-0.05,1.39l-0.42,0.59l-1.11,0.21l-0.22,0.17l-0.46,0.99l-0.69,0.23l-2.12,-0.05l-1.14,-0.2l-0.19,0.03l-0.72,0.36l-1.07,-0.17l-4.35,0.12l-0.29,0.29l-0.06,1.44l0.25,1.45Z",
        name: "Burkina Faso"
    },
    BG: {
        path: "M477.63,166.84l0.51,0.9l0.33,0.14l0.9,-0.21l1.91,0.47l3.68,0.16l0.17,-0.05l1.2,-0.75l2.78,-0.67l1.72,1.05l1.02,0.24l-0.97,0.97l-0.91,2.17l0.0,0.24l0.56,1.19l-1.58,-0.3l-0.16,0.01l-2.55,0.95l-0.2,0.28l-0.02,1.23l-1.92,0.24l-1.68,-0.99l-0.27,-0.02l-1.94,0.8l-1.52,-0.07l-0.15,-1.72l-0.12,-0.21l-0.99,-0.76l0.18,-0.18l0.02,-0.39l-0.17,-0.22l0.33,-0.75l0.91,-0.91l0.01,-0.42l-1.16,-1.25l-0.18,-0.89l0.24,-0.27Z",
        name: "Bulgaria"
    },
    BA: {
        path: "M468.39,164.66l0.16,0.04l0.43,-0.0l-0.43,0.93l0.06,0.34l1.08,1.06l-0.28,1.09l-0.5,0.13l-0.47,0.28l-0.86,0.74l-0.1,0.16l-0.28,1.29l-1.81,-0.94l-0.9,-1.22l-1.0,-0.73l-1.1,-1.1l-0.55,-0.96l-1.11,-1.3l0.3,-0.75l0.59,0.46l0.42,-0.04l0.46,-0.54l1.0,-0.06l2.11,0.5l1.72,-0.03l1.06,0.64Z",
        name: "Bosnia and Herzegovina"
    },
    BN: {
        path: "M707.34,273.57l0.76,-0.72l1.59,-1.03l-0.18,1.93l-0.9,-0.06l-0.28,0.14l-0.31,0.51l-0.68,-0.78Z",
        name: "Brunei"
    },
    BO: {
        path: "M263.83,340.79l-0.23,-0.12l-2.86,-0.11l-0.28,0.17l-0.77,1.67l-1.17,-1.51l-0.18,-0.11l-3.28,-0.64l-0.28,0.1l-2.02,2.3l-1.43,0.29l-0.91,-3.35l-1.31,-2.88l0.75,-2.41l-0.09,-0.32l-1.23,-1.03l-0.31,-1.76l-0.05,-0.12l-1.12,-1.6l1.49,-2.62l0.01,-0.28l-1.0,-2.0l0.48,-0.72l0.02,-0.29l-0.37,-0.78l0.87,-1.13l0.06,-0.18l0.05,-2.17l0.12,-1.71l0.5,-0.8l0.01,-0.3l-1.9,-3.58l1.3,0.15l1.34,-0.05l0.23,-0.12l0.51,-0.7l2.12,-0.99l1.31,-0.93l2.81,-0.37l-0.21,1.51l0.01,0.13l0.29,0.91l-0.19,1.64l0.11,0.27l2.72,2.27l0.15,0.07l2.71,0.41l0.92,0.88l0.12,0.07l1.64,0.49l1.0,0.71l0.18,0.06l1.5,-0.02l1.24,0.64l0.1,1.31l0.05,0.14l0.44,0.68l0.02,0.73l-0.44,0.03l-0.27,0.39l0.96,2.99l0.28,0.21l4.43,0.1l-0.28,1.12l0.0,0.15l0.27,1.02l0.15,0.19l1.27,0.67l0.52,1.42l-0.42,1.91l-0.66,1.1l-0.04,0.2l0.21,1.3l-0.19,0.13l-0.01,-0.27l-0.15,-0.24l-2.33,-1.33l-0.14,-0.04l-2.38,-0.03l-4.36,0.76l-0.21,0.16l-1.2,2.29l-0.03,0.13l-0.06,1.37l-0.79,2.53l-0.05,-0.08Z",
        name: "Bolivia"
    },
    JP: {
        path: "M781.17,166.78l1.8,0.67l0.28,-0.04l1.38,-1.01l0.43,2.67l-3.44,0.77l-0.18,0.12l-2.04,2.79l-3.71,-1.94l-0.42,0.15l-1.29,3.11l-2.32,0.04l-0.3,-2.63l1.12,-2.1l2.51,-0.16l0.28,-0.25l0.73,-4.22l0.58,-1.9l2.59,2.84l2.0,1.1ZM773.66,187.36l-0.92,2.24l-0.01,0.2l0.4,1.3l-1.18,1.81l-3.06,1.28l-4.35,0.17l-0.19,0.08l-3.4,3.06l-1.36,-0.87l-0.1,-1.95l-0.34,-0.28l-4.35,0.62l-2.99,1.33l-2.87,0.05l-0.28,0.2l0.09,0.33l2.37,1.93l-1.57,4.44l-1.35,0.97l-0.9,-0.79l0.57,-2.32l-0.15,-0.34l-1.5,-0.77l-0.81,-1.53l2.04,-0.75l0.14,-0.1l1.28,-1.72l2.47,-1.43l1.84,-1.92l4.83,-0.82l2.62,0.57l0.33,-0.16l2.45,-4.77l1.38,1.14l0.38,0.0l5.1,-4.02l0.09,-0.11l1.57,-3.57l0.02,-0.16l-0.42,-3.22l0.94,-1.67l2.27,-0.47l1.26,3.82l-0.07,2.23l-2.26,2.86l-0.06,0.19l0.04,2.93ZM757.85,196.18l0.22,0.66l-1.11,1.33l-0.8,-0.7l-0.33,-0.04l-1.28,0.65l-0.14,0.15l-0.54,1.34l-1.17,-0.57l0.02,-1.03l1.2,-1.45l1.24,0.28l0.29,-0.1l0.9,-1.03l1.51,0.5Z",
        name: "Japan"
    },
    BI: {
        path: "M494.7,295.83l-0.14,-2.71l-0.04,-0.13l-0.34,-0.62l0.93,0.12l0.3,-0.16l0.67,-1.25l0.9,0.11l0.11,0.76l0.08,0.16l0.46,0.48l0.02,0.56l-0.55,0.48l-0.96,1.29l-0.82,0.82l-0.61,0.07Z",
        name: "Burundi"
    },
    BJ: {
        path: "M427.4,268.94l-1.58,0.22l-0.52,-1.45l0.11,-5.73l-0.08,-0.21l-0.43,-0.44l-0.09,-1.13l-0.09,-0.19l-1.52,-1.52l0.24,-1.01l0.7,-0.23l0.18,-0.16l0.45,-0.97l1.07,-0.21l0.19,-0.12l0.53,-0.73l0.73,-0.65l0.68,-0.0l1.69,1.3l-0.08,0.67l0.02,0.14l0.52,1.38l-0.44,0.9l-0.01,0.24l0.2,0.52l-1.1,1.42l-0.76,0.76l-0.08,0.13l-0.47,1.59l0.05,1.69l-0.13,3.79Z",
        name: "Benin"
    },
    BT: {
        path: "M650.38,213.78l0.88,0.75l-0.13,1.24l-1.77,0.07l-2.1,-0.18l-1.57,0.4l-2.02,-0.91l-0.02,-0.24l1.54,-1.87l1.18,-0.6l1.67,0.59l1.32,0.08l1.01,0.67Z",
        name: "Bhutan"
    },
    JM: {
        path: "M226.67,238.37l1.64,0.23l1.2,0.56l0.11,0.19l-1.25,0.03l-0.14,0.04l-0.65,0.37l-1.24,-0.37l-1.17,-0.77l0.11,-0.22l0.86,-0.15l0.52,0.08Z",
        name: "Jamaica"
    },
    BW: {
        path: "M484.91,331.96l0.53,0.52l0.82,1.53l2.83,2.86l0.14,0.08l0.85,0.22l0.03,0.81l0.74,1.66l0.21,0.17l1.87,0.39l1.17,0.87l-3.13,1.71l-2.3,2.01l-0.07,0.1l-0.82,1.74l-0.66,0.88l-1.24,0.19l-0.24,0.2l-0.65,1.98l-1.4,0.55l-1.9,-0.12l-1.2,-0.74l-1.06,-0.32l-0.22,0.02l-1.22,0.62l-0.14,0.14l-0.58,1.21l-1.16,0.79l-1.18,1.13l-1.5,0.23l-0.4,-0.68l0.22,-1.53l-0.04,-0.19l-1.48,-2.54l-0.11,-0.11l-0.53,-0.31l-0.0,-7.25l2.18,-0.08l0.29,-0.3l0.07,-9.0l1.63,-0.08l3.69,-0.86l0.84,0.93l0.38,0.05l1.53,-0.97l0.79,-0.03l1.3,-0.53l0.23,0.1l0.92,1.96Z",
        name: "Botswana"
    },
    BR: {
        path: "M259.49,274.87l1.42,0.25l1.97,0.62l0.28,-0.05l0.67,-0.55l1.76,-0.38l2.8,-0.94l0.12,-0.08l0.92,-0.96l0.05,-0.33l-0.15,-0.32l0.73,-0.06l0.36,0.35l-0.27,0.93l0.17,0.36l0.76,0.34l0.44,0.9l-0.58,0.73l-0.06,0.13l-0.4,2.13l0.03,0.19l0.62,1.22l0.17,1.11l0.11,0.19l1.54,1.18l0.15,0.06l1.23,0.12l0.29,-0.15l0.2,-0.36l0.71,-0.11l1.13,-0.44l0.79,-0.63l1.25,0.19l0.65,-0.08l1.32,0.2l0.32,-0.18l0.23,-0.51l-0.05,-0.31l-0.31,-0.37l0.11,-0.31l0.75,0.17l0.13,0.0l1.1,-0.24l1.34,0.5l1.08,0.51l0.33,-0.05l0.67,-0.58l0.27,0.05l0.28,0.57l0.31,0.17l1.2,-0.18l0.17,-0.08l1.03,-1.05l0.76,-1.82l1.39,-2.16l0.49,-0.07l0.52,1.17l1.4,4.37l0.2,0.2l1.14,0.35l0.05,1.39l-1.8,1.97l0.01,0.42l0.78,0.75l0.18,0.08l4.16,0.37l0.08,2.25l0.5,0.22l1.78,-1.54l2.98,0.85l4.07,1.5l1.07,1.28l-0.37,1.23l0.36,0.38l2.83,-0.75l4.8,1.3l3.75,-0.09l3.6,2.02l3.27,2.84l1.93,0.72l2.13,0.11l0.76,0.66l1.22,4.56l-0.96,4.03l-1.22,1.58l-3.52,3.51l-1.63,2.91l-1.75,2.09l-0.5,0.04l-0.26,0.19l-0.72,1.99l0.18,4.76l-0.95,5.56l-0.74,0.96l-0.06,0.15l-0.43,3.39l-2.49,3.34l-0.06,0.13l-0.4,2.56l-1.9,1.07l-0.13,0.16l-0.51,1.38l-2.59,0.0l-3.94,1.01l-1.82,1.19l-2.85,0.81l-3.01,2.17l-2.12,2.65l-0.06,0.13l-0.36,2.0l0.01,0.13l0.4,1.42l-0.45,2.63l-0.53,1.23l-1.76,1.53l-2.76,4.79l-2.16,2.15l-1.69,1.29l-0.09,0.12l-1.12,2.6l-1.3,1.26l-0.45,-1.02l0.99,-1.18l0.01,-0.37l-1.5,-1.95l-1.98,-1.54l-2.58,-1.77l-0.2,-0.05l-0.81,0.07l-2.42,-2.05l-0.25,-0.07l-0.77,0.14l2.75,-3.07l2.8,-2.61l1.67,-1.09l2.11,-1.49l0.13,-0.24l0.05,-2.15l-0.07,-0.2l-1.26,-1.54l-0.35,-0.09l-0.64,0.27l0.3,-0.95l0.34,-1.57l0.01,-1.52l-0.16,-0.26l-0.9,-0.48l-0.27,-0.01l-0.86,0.39l-0.65,-0.08l-0.23,-0.8l-0.23,-2.39l-0.04,-0.12l-0.47,-0.79l-0.14,-0.12l-1.69,-0.71l-0.25,0.01l-0.93,0.47l-2.29,-0.44l0.15,-3.3l-0.03,-0.15l-0.62,-1.22l0.57,-0.39l0.13,-0.3l-0.22,-1.37l0.67,-1.13l0.44,-2.04l-0.01,-0.17l-0.59,-1.61l-0.14,-0.16l-1.25,-0.66l-0.22,-0.82l0.35,-1.41l-0.28,-0.37l-4.59,-0.1l-0.78,-2.41l0.34,-0.02l0.28,-0.31l-0.03,-1.1l-0.05,-0.16l-0.45,-0.68l-0.1,-1.4l-0.16,-0.24l-1.45,-0.76l-0.14,-0.03l-1.48,0.02l-1.04,-0.73l-1.62,-0.48l-0.93,-0.9l-0.16,-0.08l-2.72,-0.41l-2.53,-2.12l0.18,-1.54l-0.01,-0.13l-0.29,-0.91l0.26,-1.83l-0.34,-0.34l-3.28,0.43l-0.14,0.05l-1.3,0.93l-2.16,1.01l-0.12,0.09l-0.47,0.65l-1.12,0.05l-1.84,-0.21l-0.12,0.01l-1.33,0.41l-0.82,-0.21l0.16,-3.6l-0.48,-0.26l-1.97,1.43l-1.96,-0.06l-0.86,-1.23l-0.22,-0.13l-1.23,-0.11l0.34,-0.69l-0.05,-0.33l-1.36,-1.5l-0.92,-2.0l0.45,-0.32l0.13,-0.25l-0.0,-0.87l1.34,-0.64l0.17,-0.32l-0.23,-1.23l0.56,-0.77l0.05,-0.13l0.16,-1.03l2.7,-1.61l2.01,-0.47l0.16,-0.09l0.24,-0.27l2.11,0.11l0.31,-0.25l1.13,-6.87l0.06,-1.12l-0.4,-1.53l-0.1,-0.15l-1.0,-0.82l0.01,-1.45l1.08,-0.32l0.39,0.2l0.44,-0.24l0.08,-0.96l-0.25,-0.32l-1.22,-0.22l-0.02,-1.01l4.57,0.05l0.22,-0.09l0.6,-0.63l0.44,0.5l0.47,1.42l0.45,0.16l0.27,-0.18l1.21,1.16l0.23,0.08l1.95,-0.16l0.23,-0.14l0.43,-0.67l1.76,-0.55l1.05,-0.42l0.18,-0.2l0.25,-0.92l1.65,-0.66l0.18,-0.35l-0.14,-0.53l-0.26,-0.22l-1.91,-0.19l-0.29,-1.33l0.1,-1.64l-0.15,-0.28l-0.44,-0.25Z",
        name: "Brazil"
    },
    BS: {
        path: "M227.51,216.69l0.3,0.18l-0.24,1.07l0.03,-1.04l-0.09,-0.21ZM226.5,224.03l-0.13,0.03l-0.54,-1.3l-0.09,-0.12l-0.78,-0.64l0.4,-1.26l0.33,0.05l0.79,2.0l0.01,1.24ZM225.76,216.5l-2.16,0.34l-0.07,-0.41l0.85,-0.16l1.36,0.07l0.02,0.16Z",
        name: "The Bahamas"
    },
    BY: {
        path: "M480.08,135.28l2.09,0.02l0.13,-0.03l2.72,-1.3l0.16,-0.19l0.55,-1.83l1.94,-1.06l0.15,-0.31l-0.2,-1.33l1.33,-0.52l2.58,-1.3l2.39,0.8l0.3,0.75l0.37,0.17l1.22,-0.39l2.18,0.75l0.2,1.36l-0.48,0.85l0.01,0.32l1.57,2.26l0.92,0.6l-0.1,0.41l0.19,0.35l1.61,0.57l0.48,0.6l-0.64,0.49l-1.91,-0.11l-0.18,0.05l-0.48,0.32l-0.1,0.39l0.57,1.1l0.51,1.78l-1.79,0.17l-0.18,0.08l-0.77,0.73l-0.09,0.19l-0.13,1.31l-0.75,-0.22l-2.11,0.15l-0.56,-0.66l-0.39,-0.06l-0.8,0.49l-0.79,-0.4l-0.13,-0.03l-1.94,-0.07l-2.76,-0.79l-2.58,-0.27l-1.98,0.07l-0.15,0.05l-1.31,0.86l-0.8,0.09l-0.04,-1.16l-0.03,-0.12l-0.63,-1.28l1.22,-0.56l0.17,-0.27l0.01,-1.35l-0.04,-0.15l-0.66,-1.24l-0.08,-1.12Z",
        name: "Belarus"
    },
    BZ: {
        path: "M198.03,239.7l0.28,0.19l0.43,-0.1l0.82,-1.42l0.0,0.07l0.29,0.29l0.16,0.0l-0.02,0.35l-0.39,1.08l0.02,0.25l0.16,0.29l-0.23,0.8l0.04,0.24l0.09,0.14l-0.25,1.12l-0.38,0.53l-0.33,0.06l-0.21,0.15l-0.41,0.74l-0.25,0.0l0.17,-2.58l0.01,-2.2Z",
        name: "Belize"
    },
    RU: {
        path: "M688.57,38.85l0.63,2.39l0.44,0.19l2.22,-1.23l7.18,0.07l5.54,2.49l1.85,1.77l-0.55,2.34l-2.64,1.42l-6.57,2.76l-1.95,1.5l0.12,0.53l3.09,0.68l3.69,1.23l0.21,-0.01l1.98,-0.81l1.16,2.84l0.5,0.08l1.03,-1.18l3.86,-0.74l7.79,0.78l0.56,2.05l0.27,0.22l10.47,0.71l0.32,-0.29l0.13,-3.34l4.98,0.8l3.96,-0.02l3.88,2.43l1.06,2.79l-1.38,1.83l0.01,0.38l3.15,3.64l0.1,0.08l3.94,1.86l0.4,-0.14l2.28,-4.56l3.75,1.94l0.22,0.02l4.18,-1.22l4.76,1.4l0.26,-0.04l1.74,-1.23l3.98,0.63l0.32,-0.41l-1.71,-4.1l3.0,-1.86l22.39,3.04l2.06,2.67l0.1,0.08l6.55,3.51l0.17,0.03l10.08,-0.86l4.86,0.73l1.91,1.72l-0.29,3.13l0.18,0.31l3.08,1.26l0.19,0.01l3.32,-0.9l4.37,-0.11l4.78,0.87l4.61,-0.48l4.26,3.82l0.32,0.05l3.1,-1.4l0.12,-0.45l-1.91,-2.67l0.92,-1.64l7.78,1.22l5.22,-0.26l7.12,2.1l9.6,5.22l6.4,4.15l-0.2,2.44l0.14,0.28l1.69,1.04l0.45,-0.31l-0.51,-2.66l6.31,0.58l4.52,3.61l-2.1,1.52l-4.02,0.42l-0.27,0.29l-0.06,3.83l-0.81,0.67l-2.14,-0.11l-1.91,-1.39l-3.19,-1.13l-0.51,-1.63l-0.21,-0.2l-2.54,-0.67l-0.13,-0.0l-2.69,0.5l-1.12,-1.19l0.48,-1.36l-0.38,-0.39l-3.0,0.98l-0.17,0.44l1.02,1.76l-1.27,1.55l-3.09,1.71l-3.15,-0.29l-0.3,0.18l0.07,0.34l2.22,2.1l1.47,3.22l1.15,1.09l0.25,1.41l-0.48,0.76l-4.47,-0.81l-0.17,0.02l-6.97,2.9l-2.2,0.44l-0.11,0.05l-3.83,2.68l-3.63,2.32l-0.1,0.11l-0.76,1.4l-3.3,-2.4l-0.3,-0.03l-6.31,2.85l-0.99,-1.21l-0.4,-0.06l-2.32,1.54l-3.23,-0.49l-0.33,0.2l-0.79,2.39l-2.97,3.51l-0.07,0.21l0.09,1.47l0.22,0.27l2.62,0.74l-0.3,4.7l-2.06,0.12l-0.26,0.2l-1.07,2.94l0.04,0.27l0.83,1.19l-4.03,1.63l-0.18,0.21l-0.83,3.72l-3.55,0.79l-0.23,0.23l-0.73,3.32l-3.22,2.76l-0.76,-1.88l-1.07,-4.88l-1.39,-7.59l1.17,-4.76l2.05,-2.08l0.09,-0.19l0.11,-1.46l3.67,-0.77l0.15,-0.08l4.47,-4.61l4.29,-3.82l4.48,-3.01l0.11,-0.14l2.01,-5.43l-0.31,-0.4l-3.04,0.33l-0.24,0.17l-1.47,3.11l-5.98,3.94l-1.91,-4.36l-0.33,-0.17l-6.46,1.3l-0.15,0.08l-6.27,6.33l-0.01,0.41l1.7,1.87l-5.04,0.87l-3.51,0.34l0.16,-2.32l-0.26,-0.32l-3.89,-0.56l-0.19,0.04l-3.02,1.77l-7.63,-0.63l-8.24,1.1l-0.16,0.07l-8.11,7.09l-9.6,8.31l0.16,0.52l3.79,0.42l1.16,2.03l0.17,0.14l2.43,0.76l0.31,-0.08l1.5,-1.61l2.49,0.2l3.46,3.6l0.08,2.67l-1.91,3.26l-0.04,0.14l-0.21,3.91l-1.11,5.09l-3.73,4.55l-0.87,2.21l-6.73,7.14l-1.59,1.77l-3.23,1.72l-1.38,0.03l-1.48,-1.39l-0.37,-0.03l-3.36,2.22l-0.11,0.14l-0.16,0.42l-0.01,-1.09l1.0,-0.06l0.28,-0.27l0.36,-3.6l-0.61,-2.51l1.85,-0.94l2.94,0.53l0.32,-0.15l1.71,-3.1l0.84,-3.38l0.97,-1.18l1.32,-2.88l-0.34,-0.42l-4.14,0.95l-2.18,1.25l-3.51,-0.0l-0.95,-2.81l-0.1,-0.14l-2.97,-2.3l-0.11,-0.05l-4.19,-1.0l-0.89,-3.08l-0.87,-2.03l-0.95,-1.46l-1.54,-3.37l-0.12,-0.14l-2.27,-1.28l-3.83,-1.02l-3.37,0.1l-3.11,0.61l-0.13,0.06l-2.07,1.69l0.04,0.49l1.23,0.72l0.03,1.53l-1.34,1.05l-2.26,3.51l-0.05,0.17l0.02,1.27l-3.25,1.9l-2.87,-1.17l-0.14,-0.02l-2.86,0.26l-1.22,-1.02l-0.12,-0.06l-1.5,-0.35l-0.23,0.04l-3.62,2.27l-3.24,0.53l-2.28,0.79l-3.08,-0.51l-2.24,0.03l-1.49,-1.61l-2.45,-1.57l-0.11,-0.04l-2.6,-0.43l-3.17,0.43l-2.31,0.59l-3.31,-1.28l-0.45,-2.31l-0.21,-0.23l-2.94,-0.85l-2.26,-0.39l-2.77,-1.36l-0.37,0.09l-2.59,3.45l-0.03,0.32l0.91,1.74l-2.15,2.01l-3.47,-0.79l-2.44,-0.12l-1.59,-1.46l-0.2,-0.08l-2.55,-0.05l-2.12,-0.98l-0.24,-0.01l-3.85,1.57l-4.74,2.79l-2.59,0.55l-0.79,0.21l-1.21,-1.81l-0.29,-0.13l-3.05,0.41l-0.96,-1.25l-0.14,-0.1l-1.65,-0.6l-1.15,-1.82l-0.13,-0.12l-1.38,-0.6l-0.19,-0.02l-3.49,0.82l-3.35,-1.85l-0.38,0.08l-1.08,1.4l-5.36,-8.17l-3.02,-2.52l0.72,-0.85l0.01,-0.38l-0.37,-0.08l-6.22,3.21l-1.98,0.16l0.17,-1.51l-0.2,-0.31l-3.22,-1.17l-0.19,-0.0l-2.3,0.74l-0.72,-3.27l-0.24,-0.23l-4.5,-0.75l-0.21,0.04l-2.2,1.42l-6.21,1.27l-0.11,0.05l-1.16,0.81l-9.3,1.19l-0.18,0.09l-1.15,1.17l-0.02,0.39l1.56,2.01l-2.02,0.74l-0.16,0.42l0.35,0.68l-2.18,1.49l0.02,0.51l3.83,2.16l-0.45,1.13l-3.31,-0.13l-0.25,0.12l-0.57,0.77l-2.97,-1.59l-0.15,-0.04l-3.97,0.07l-0.13,0.03l-2.53,1.32l-2.84,-1.28l-5.52,-2.3l-0.12,-0.02l-3.91,0.09l-0.16,0.05l-5.17,3.6l-0.13,0.21l-0.25,1.89l-2.17,-1.6l-0.44,0.1l-2.0,3.59l0.06,0.37l0.55,0.5l-1.32,2.23l0.04,0.36l2.13,2.17l0.23,0.09l1.7,-0.08l1.42,1.89l-0.23,1.5l0.19,0.32l0.94,0.38l-0.89,1.44l-2.3,0.49l-0.17,0.11l-2.49,3.2l0.0,0.37l2.2,2.81l-0.23,1.93l0.06,0.22l2.56,3.32l-1.27,1.02l-0.4,0.66l-0.8,-0.15l-1.65,-1.75l-0.18,-0.09l-0.66,-0.09l-1.45,-0.64l-0.72,-1.16l-0.18,-0.13l-2.34,-0.63l-0.17,0.0l-1.32,0.41l-0.31,-0.4l-0.12,-0.09l-3.49,-1.48l-3.67,-0.49l-2.1,-0.52l-0.3,0.1l-0.12,0.14l-2.96,-2.4l-2.89,-1.19l-1.69,-1.42l1.27,-0.35l0.16,-0.1l2.08,-2.61l-0.04,-0.41l-1.02,-0.9l3.21,-1.12l0.2,-0.31l-0.07,-0.69l-0.37,-0.26l-1.86,0.42l0.05,-0.86l1.11,-0.76l2.35,-0.23l0.25,-0.19l0.39,-1.07l0.0,-0.19l-0.51,-1.64l0.95,-1.58l0.04,-0.16l-0.03,-0.95l-0.22,-0.28l-3.69,-1.06l-1.43,0.02l-1.45,-1.44l-0.29,-0.08l-1.83,0.49l-2.88,-1.04l0.04,-0.42l-0.04,-0.18l-0.89,-1.43l-0.23,-0.14l-1.77,-0.14l-0.13,-0.66l0.52,-0.56l0.01,-0.4l-1.6,-1.9l-0.27,-0.1l-2.55,0.32l-0.71,-0.16l-0.3,0.1l-0.53,0.63l-0.58,-0.08l-0.56,-1.97l-0.48,-0.94l0.17,-0.11l1.92,0.11l0.2,-0.06l0.97,-0.74l0.05,-0.42l-0.72,-0.91l-0.13,-0.1l-1.43,-0.51l0.09,-0.36l-0.13,-0.33l-0.97,-0.59l-1.43,-2.06l0.44,-0.77l0.04,-0.19l-0.25,-1.64l-0.2,-0.24l-2.45,-0.84l-0.19,-0.0l-1.05,0.34l-0.25,-0.62l-0.18,-0.17l-2.5,-0.84l-0.74,-1.93l-0.21,-1.7l-0.13,-0.21l-0.92,-0.63l0.83,-0.89l0.07,-0.27l-0.71,-3.26l1.69,-2.01l0.03,-0.34l-0.24,-0.41l2.63,-1.9l-0.01,-0.49l-2.31,-1.57l5.08,-4.61l2.33,-2.24l1.01,-2.08l-0.09,-0.37l-3.52,-2.56l0.94,-2.38l-0.04,-0.29l-2.14,-2.86l1.61,-3.35l-0.01,-0.29l-2.81,-4.58l2.19,-3.04l-0.06,-0.42l-3.7,-2.76l0.32,-2.67l1.87,-0.38l4.26,-1.77l2.46,-1.47l3.96,2.58l0.12,0.05l6.81,1.04l9.37,4.87l1.81,1.92l0.15,2.55l-2.61,2.06l-3.95,1.07l-11.1,-3.15l-0.17,0.0l-1.84,0.53l-0.1,0.53l3.97,2.97l0.15,1.77l0.16,4.14l0.19,0.27l3.21,1.22l1.94,1.03l0.44,-0.22l0.32,-1.94l-0.07,-0.25l-1.32,-1.52l1.25,-1.2l5.87,2.45l0.24,-0.01l2.11,-0.98l0.13,-0.42l-1.55,-2.75l5.52,-3.84l2.13,0.22l2.28,1.42l0.43,-0.12l1.46,-2.87l-0.04,-0.33l-1.97,-2.37l1.14,-2.38l-0.02,-0.3l-1.42,-2.07l6.15,1.22l1.14,1.92l-2.74,0.46l-0.25,0.3l0.02,2.36l0.12,0.24l1.97,1.44l0.25,0.05l3.87,-0.91l0.22,-0.23l0.58,-2.55l5.09,-1.98l8.67,-3.69l1.22,0.14l-2.06,2.2l0.18,0.5l3.11,0.45l0.23,-0.07l1.71,-1.41l4.59,-0.12l0.12,-0.03l3.53,-1.72l2.7,2.48l0.42,-0.01l2.85,-2.88l-0.0,-0.43l-2.42,-2.35l1.0,-1.13l7.2,1.31l3.42,1.36l9.06,4.97l0.39,-0.08l1.67,-2.27l-0.04,-0.4l-2.46,-2.23l-0.06,-0.82l-0.26,-0.27l-2.64,-0.38l0.69,-1.76l0.0,-0.22l-1.32,-3.47l-0.07,-1.27l4.52,-4.09l0.08,-0.11l1.6,-4.18l1.67,-0.84l6.33,1.2l0.46,2.31l-2.31,3.67l0.05,0.38l1.49,1.41l0.77,3.04l-0.56,6.05l0.09,0.24l2.62,2.54l-0.99,2.65l-4.87,5.96l0.17,0.48l2.86,0.61l0.31,-0.13l0.94,-1.42l2.67,-1.04l0.18,-0.19l0.64,-2.01l2.11,-1.98l0.05,-0.37l-1.38,-2.32l1.11,-2.74l-0.24,-0.41l-2.53,-0.33l-0.53,-2.16l1.96,-4.42l-0.05,-0.32l-3.03,-3.48l4.21,-2.94l0.12,-0.3l-0.52,-3.04l0.72,-0.06l1.18,2.35l-0.97,4.39l0.2,0.35l2.68,0.84l0.37,-0.38l-1.05,-3.07l3.89,-1.71l5.05,-0.24l4.55,2.62l0.36,-0.05l0.05,-0.36l-2.19,-3.84l-0.23,-4.78l4.07,-0.92l5.98,0.21l5.47,-0.64l0.2,-0.48l-1.88,-2.37l2.65,-2.99l2.75,-0.13l0.12,-0.03l4.82,-2.48l6.56,-0.67l0.23,-0.14l0.76,-1.27l6.33,-0.46l1.97,1.11l0.28,0.01l5.55,-2.71l4.53,0.08l0.29,-0.21l0.67,-2.18l2.29,-2.15l5.75,-2.13l3.48,1.4l-2.7,1.03l-0.19,0.31l0.26,0.26l5.47,0.78ZM871.83,65.73l0.25,-0.15l1.99,0.01l3.3,1.2l-0.08,0.22l-2.41,1.03l-5.73,0.49l-0.31,-1.0l2.99,-1.8ZM797.64,48.44l-2.22,1.51l-3.85,-0.43l-4.35,-1.85l0.42,-1.13l4.42,0.72l5.59,1.17ZM783.82,46.06l-1.71,3.25l-9.05,-0.14l-4.11,1.15l-4.64,-3.04l1.21,-3.13l3.11,-0.91l6.53,0.22l8.66,2.59ZM780.37,145.71l2.28,5.23l-3.09,-0.89l-0.37,0.19l-1.54,4.65l0.04,0.27l2.38,3.17l-0.05,1.4l-1.41,-1.41l-0.46,0.04l-1.23,1.81l-0.33,-1.86l0.28,-3.1l-0.28,-3.41l0.58,-2.46l0.11,-4.39l-0.03,-0.13l-1.44,-3.2l0.21,-4.39l2.19,-1.49l0.09,-0.41l-0.81,-1.3l0.48,-0.21l0.56,1.94l0.86,3.23l-0.05,3.36l1.03,3.35ZM780.16,57.18l-3.4,0.03l-5.06,-0.53l1.97,-1.59l2.95,-0.42l3.35,1.75l0.18,0.77ZM683.84,31.18l-13.29,1.97l4.16,-6.56l1.88,-0.58l1.77,0.34l6.08,3.02l-0.6,1.8ZM670.94,28.02l-5.18,0.65l-6.89,-1.58l-4.03,-2.07l-1.88,-3.98l-0.18,-0.16l-2.8,-0.93l5.91,-3.62l5.25,-1.29l4.73,2.88l5.63,5.44l-0.57,4.66ZM564.37,68.98l-0.85,0.23l-7.93,-0.57l-0.6,-1.84l-0.21,-0.2l-4.34,-1.18l-0.3,-2.08l2.34,-0.92l0.19,-0.29l-0.08,-2.43l4.85,-4.0l-0.12,-0.52l-1.68,-0.43l5.47,-3.94l0.11,-0.33l-0.6,-2.02l5.36,-2.55l8.22,-3.27l8.29,-0.96l4.34,-1.94l4.67,-0.65l1.45,1.72l-1.43,1.37l-8.8,2.52l-7.65,2.42l-7.92,4.84l-3.73,4.75l-3.92,4.58l-0.07,0.23l0.51,3.88l0.11,0.2l4.32,3.39ZM548.86,18.57l-3.28,0.75l-2.25,0.44l-0.22,0.19l-0.3,0.81l-2.67,0.86l-2.27,-1.14l1.2,-1.51l-0.23,-0.49l-3.14,-0.1l2.48,-0.54l3.55,-0.07l0.44,1.36l0.49,0.12l1.4,-1.35l2.2,-0.9l3.13,1.08l-0.54,0.49ZM477.5,133.25l-4.21,0.05l-2.69,-0.34l0.39,-1.03l3.24,-1.06l2.51,0.58l0.85,0.43l-0.2,0.71l-0.0,0.15l0.12,0.52Z",
        name: "Russia"
    },
    RW: {
        path: "M497.03,288.12l0.78,1.11l-0.12,1.19l-0.49,0.21l-1.25,-0.15l-0.3,0.16l-0.67,1.24l-1.01,-0.13l0.16,-0.92l0.22,-0.12l0.15,-0.24l0.09,-1.37l0.49,-0.48l0.42,0.18l0.25,-0.01l1.26,-0.65Z",
        name: "Rwanda"
    },
    RS: {
        path: "M469.75,168.65l0.21,-0.21l0.36,-1.44l-0.08,-0.29l-1.06,-1.03l0.54,-1.16l-0.28,-0.43l-0.26,0.0l0.55,-0.67l-0.01,-0.39l-0.77,-0.86l-0.45,-0.89l1.56,-0.67l1.39,0.12l1.22,1.1l0.26,0.91l0.16,0.19l1.38,0.66l0.17,1.12l0.14,0.21l1.46,0.9l0.35,-0.03l0.62,-0.54l0.09,0.06l-0.28,0.25l-0.03,0.42l0.29,0.34l-0.44,0.5l-0.07,0.26l0.22,1.12l0.07,0.14l1.02,1.1l-0.81,0.84l-0.42,0.96l0.04,0.3l0.12,0.15l-0.15,0.16l-1.04,0.04l-0.39,0.08l0.33,-0.81l-0.29,-0.41l-0.21,0.01l-0.39,-0.45l-0.13,-0.09l-0.32,-0.11l-0.27,-0.4l-0.14,-0.11l-0.4,-0.16l-0.31,-0.37l-0.34,-0.09l-0.45,0.17l-0.18,0.18l-0.29,0.84l-0.96,-0.65l-0.81,-0.33l-0.32,-0.37l-0.22,-0.18Z",
        name: "Republic of Serbia"
    },
    LT: {
        path: "M478.13,133.31l-0.14,-0.63l0.25,-0.88l-0.15,-0.35l-1.17,-0.58l-2.43,-0.57l-0.45,-2.51l2.58,-0.97l4.14,0.22l2.3,-0.32l0.26,0.54l0.22,0.17l1.26,0.22l2.25,1.6l0.19,1.23l-1.87,1.01l-0.14,0.18l-0.54,1.83l-2.54,1.21l-2.18,-0.02l-0.52,-0.91l-0.18,-0.14l-1.11,-0.32Z",
        name: "Lithuania"
    },
    LU: {
        path: "M435.95,147.99l0.33,0.49l-0.11,1.07l-0.39,0.04l-0.29,-0.15l0.21,-1.4l0.25,-0.05Z",
        name: "Luxembourg"
    },
    LR: {
        path: "M401.37,273.67l-0.32,0.01l-2.48,-1.15l-2.24,-1.89l-2.14,-1.38l-1.47,-1.42l0.44,-0.59l0.05,-0.13l0.12,-0.65l1.07,-1.3l1.08,-1.09l0.52,-0.07l0.43,-0.18l0.84,1.24l-0.15,0.89l0.07,0.25l0.49,0.54l0.22,0.1l0.71,0.01l0.27,-0.16l0.42,-0.83l0.19,0.02l-0.06,0.52l0.23,1.12l-0.5,1.03l0.06,0.35l0.73,0.69l0.14,0.08l0.71,0.15l0.92,0.91l0.06,0.76l-0.17,0.22l-0.06,0.15l-0.17,1.8Z",
        name: "Liberia"
    },
    RO: {
        path: "M477.94,155.19l1.02,-0.64l1.49,0.33l1.52,0.01l1.09,0.73l0.32,0.01l0.81,-0.46l1.8,-0.3l0.18,-0.1l0.54,-0.64l0.86,0.0l0.64,0.26l0.71,0.87l0.8,1.35l1.39,1.81l0.07,1.25l-0.26,1.3l0.01,0.15l0.45,1.42l0.15,0.18l1.12,0.57l0.25,0.01l1.05,-0.45l0.86,0.4l0.03,0.43l-0.92,0.51l-0.63,-0.24l-0.4,0.22l-0.64,3.41l-1.12,-0.24l-1.78,-1.09l-0.23,-0.04l-2.95,0.71l-1.25,0.77l-3.55,-0.16l-1.89,-0.47l-0.14,-0.0l-0.75,0.17l-0.61,-1.07l-0.3,-0.36l0.36,-0.32l-0.04,-0.48l-0.62,-0.38l-0.36,0.03l-0.62,0.54l-1.15,-0.71l-0.18,-1.14l-0.17,-0.22l-1.4,-0.67l-0.24,-0.86l-0.09,-0.14l-0.96,-0.87l1.49,-0.44l0.16,-0.11l1.51,-2.14l1.15,-2.09l1.44,-0.63Z",
        name: "Romania"
    },
    GW: {
        path: "M383.03,256.73l-1.12,-0.88l-0.14,-0.06l-0.94,-0.15l-0.43,-0.54l0.01,-0.27l-0.13,-0.26l-0.68,-0.48l-0.05,-0.16l0.99,-0.31l0.77,0.08l0.15,-0.02l0.61,-0.26l4.25,0.1l-0.02,0.44l-0.19,0.18l-0.08,0.29l0.17,0.66l-0.17,0.14l-0.44,0.0l-0.16,0.05l-0.57,0.37l-0.66,-0.04l-0.24,0.1l-0.92,1.03Z",
        name: "Guinea Bissau"
    },
    GT: {
        path: "M195.13,249.89l-1.05,-0.35l-1.5,-0.04l-1.06,-0.47l-1.19,-0.93l0.04,-0.53l0.27,-0.55l-0.03,-0.31l-0.24,-0.32l1.02,-1.77l3.04,-0.01l0.3,-0.28l0.06,-0.88l-0.19,-0.3l-0.3,-0.11l-0.23,-0.45l-0.11,-0.12l-0.9,-0.58l-0.35,-0.33l0.37,-0.0l0.3,-0.3l0.0,-1.15l4.05,0.02l-0.02,1.74l-0.2,2.89l0.3,0.32l0.67,-0.0l0.75,0.42l0.4,-0.11l-0.62,0.53l-1.17,0.7l-0.13,0.16l-0.18,0.49l0.0,0.21l0.14,0.34l-0.35,0.44l-0.49,0.13l-0.2,0.41l0.03,0.06l-0.27,0.16l-0.86,0.64l-0.12,0.22ZM199.35,245.38l0.07,-0.13l0.05,0.02l-0.13,0.11Z",
        name: "Guatemala"
    },
    GR: {
        path: "M487.2,174.55l-0.64,1.54l-0.43,0.24l-1.41,-0.08l-1.28,-0.28l-0.14,0.0l-3.03,0.77l-0.13,0.51l1.39,1.34l-0.78,0.29l-1.2,0.0l-1.23,-1.42l-0.47,0.02l-0.47,0.65l-0.04,0.27l0.56,1.76l0.06,0.11l1.02,1.12l-0.66,0.45l-0.04,0.46l1.39,1.35l1.15,0.79l0.02,1.06l-1.91,-0.63l-0.36,0.42l0.56,1.12l-1.2,0.23l-0.22,0.4l0.8,2.14l-1.15,0.02l-1.89,-1.15l-0.89,-2.19l-0.43,-1.91l-0.05,-0.11l-0.98,-1.35l-1.24,-1.62l-0.13,-0.63l1.07,-1.32l0.06,-0.14l0.13,-0.81l0.68,-0.36l0.16,-0.25l0.03,-0.54l1.4,-0.23l0.12,-0.05l0.87,-0.6l1.26,0.05l0.25,-0.11l0.34,-0.43l0.33,-0.07l1.81,0.08l0.13,-0.02l1.87,-0.77l1.64,0.97l0.19,0.04l2.28,-0.28l0.26,-0.29l0.02,-0.95l0.56,0.36ZM480.44,192.0l1.05,0.74l0.01,0.0l-1.26,-0.23l0.2,-0.51ZM481.76,192.79l1.86,-0.15l1.53,0.17l-0.02,0.19l0.34,0.3l-2.28,0.15l0.01,-0.13l-0.25,-0.31l-1.19,-0.22ZM485.65,193.28l0.65,-0.16l-0.05,0.12l-0.6,0.04Z",
        name: "Greece"
    },
    GQ: {
        path: "M444.81,282.04l-0.21,-0.17l0.74,-2.4l3.56,0.05l0.02,2.42l-3.34,-0.02l-0.76,0.13Z",
        name: "Equatorial Guinea"
    },
    GY: {
        path: "M271.34,264.25l1.43,0.81l1.44,1.53l0.06,1.19l0.28,0.28l0.84,0.05l2.13,1.92l-0.34,1.93l-1.37,0.59l-0.17,0.34l0.12,0.51l-0.43,1.21l0.03,0.26l1.11,1.82l0.26,0.14l0.56,0.0l0.32,1.29l1.25,1.78l-0.08,0.01l-1.34,-0.21l-0.24,0.06l-0.78,0.64l-1.06,0.41l-0.76,0.1l-0.22,0.15l-0.18,0.32l-0.95,-0.1l-1.38,-1.05l-0.19,-1.13l-0.6,-1.18l0.37,-1.96l0.65,-0.83l0.03,-0.32l-0.57,-1.17l-0.15,-0.14l-0.62,-0.27l0.25,-0.85l-0.08,-0.3l-0.58,-0.58l-0.24,-0.09l-1.15,0.1l-1.41,-1.58l0.48,-0.49l0.09,-0.22l-0.04,-0.92l1.31,-0.34l0.73,-0.52l0.04,-0.44l-0.75,-0.82l0.16,-0.66l1.74,-1.3Z",
        name: "Guyana"
    },
    GE: {
        path: "M525.41,174.19l0.26,-0.88l-0.0,-0.17l-0.63,-2.06l-0.1,-0.15l-1.45,-1.12l-0.11,-0.05l-1.31,-0.33l-0.66,-0.69l1.97,0.48l3.65,0.49l3.3,1.41l0.39,0.5l0.33,0.1l1.43,-0.45l2.14,0.58l0.7,1.14l0.13,0.12l1.06,0.47l-0.18,0.11l-0.08,0.43l1.08,1.41l-0.06,0.06l-1.16,-0.15l-1.82,-0.84l-0.31,0.04l-0.55,0.44l-3.29,0.44l-2.32,-1.41l-0.17,-0.04l-2.25,0.12Z",
        name: "Georgia"
    },
    GB: {
        path: "M412.82,118.6l-2.31,3.4l-0.0,0.33l0.31,0.13l2.52,-0.49l2.34,0.02l-0.56,2.51l-2.22,3.13l0.22,0.47l2.43,0.21l2.35,4.35l0.17,0.14l1.58,0.51l1.49,3.78l0.73,1.37l0.2,0.15l2.76,0.59l-0.25,1.75l-1.18,0.91l-0.08,0.39l0.87,1.49l-1.96,1.51l-3.31,-0.02l-4.15,0.88l-1.07,-0.59l-0.35,0.04l-1.55,1.44l-2.17,-0.35l-0.22,0.05l-1.61,1.15l-0.78,-0.38l3.31,-3.12l2.18,-0.7l0.21,-0.31l-0.26,-0.27l-3.78,-0.54l-0.48,-0.9l2.3,-0.92l0.13,-0.46l-1.29,-1.71l0.39,-1.83l3.46,0.29l0.32,-0.24l0.37,-1.99l-0.06,-0.24l-1.71,-2.17l-0.18,-0.11l-2.91,-0.58l-0.43,-0.68l0.82,-1.4l-0.03,-0.35l-0.82,-0.97l-0.46,0.01l-0.85,1.05l-0.11,-2.6l-0.05,-0.16l-1.19,-1.7l0.86,-3.53l1.81,-2.75l1.88,0.26l2.38,-0.24ZM406.39,132.84l-1.09,1.92l-1.65,-0.62l-1.26,0.02l0.41,-1.46l0.0,-0.16l-0.42,-1.51l1.62,-0.11l2.39,1.92Z",
        name: "United Kingdom"
    },
    GA: {
        path: "M448.76,294.47l-2.38,-2.34l-1.63,-2.04l-1.46,-2.48l0.06,-0.66l0.54,-0.81l0.61,-1.82l0.46,-1.69l0.63,-0.11l3.62,0.03l0.3,-0.3l-0.02,-2.75l0.88,-0.12l1.47,0.32l0.13,0.0l1.39,-0.3l-0.13,0.87l0.03,0.19l0.7,1.29l0.3,0.16l1.74,-0.19l0.36,0.29l-1.01,2.7l0.05,0.29l1.13,1.42l0.25,1.82l-0.3,1.56l-0.64,0.99l-1.93,-0.09l-1.26,-1.13l-0.5,0.17l-0.16,0.91l-1.48,0.27l-0.12,0.05l-0.86,0.63l-0.08,0.39l0.81,1.42l-1.48,1.08Z",
        name: "Gabon"
    },
    GN: {
        path: "M399.83,265.31l-0.69,-0.06l-0.3,0.16l-0.43,0.85l-0.39,-0.01l-0.3,-0.33l0.14,-0.87l-0.05,-0.22l-1.05,-1.54l-0.37,-0.11l-0.61,0.27l-0.84,0.12l0.02,-0.54l-0.04,-0.17l-0.35,-0.57l0.07,-0.63l-0.03,-0.17l-0.57,-1.11l-0.7,-0.9l-0.24,-0.12l-2.0,-0.0l-0.19,0.07l-0.51,0.42l-0.6,0.05l-0.21,0.11l-0.43,0.55l-0.3,0.7l-1.04,0.86l-0.91,-1.24l-1.0,-1.02l-0.69,-0.37l-0.52,-0.42l-0.3,-1.11l-0.37,-0.56l-0.1,-0.1l-0.4,-0.23l0.77,-0.85l0.62,0.04l0.18,-0.05l0.58,-0.38l0.46,-0.0l0.19,-0.07l0.39,-0.34l0.1,-0.3l-0.17,-0.67l0.15,-0.14l0.09,-0.2l0.03,-0.57l0.87,0.02l1.76,0.6l0.13,0.01l0.55,-0.06l0.22,-0.13l0.08,-0.12l1.18,0.17l0.17,-0.02l0.09,0.56l0.3,0.25l0.4,-0.0l0.14,-0.03l0.56,-0.29l0.23,0.05l0.63,0.59l0.15,0.07l1.07,0.2l0.24,-0.06l0.65,-0.52l0.77,-0.32l0.55,-0.32l0.3,0.04l0.44,0.45l0.34,0.74l0.84,0.87l-0.35,0.45l-0.06,0.15l-0.1,0.82l0.42,0.31l0.35,-0.16l0.05,0.04l-0.1,0.59l0.09,0.27l0.42,0.4l-0.06,0.02l-0.18,0.21l-0.2,0.86l0.03,0.21l0.56,1.02l0.52,1.71l-0.65,0.21l-0.15,0.12l-0.24,0.35l-0.03,0.28l0.16,0.41l-0.1,0.76l-0.12,0.0Z",
        name: "Guinea"
    },
    GM: {
        path: "M379.18,251.48l0.15,-0.55l2.51,-0.07l0.21,-0.09l0.48,-0.52l0.58,-0.03l0.91,0.58l0.16,0.05l0.78,0.01l0.14,-0.03l0.59,-0.31l0.16,0.24l-0.71,0.38l-0.94,-0.04l-1.02,-0.51l-0.3,0.01l-0.86,0.55l-0.37,0.02l-0.14,0.04l-0.53,0.31l-1.81,-0.04Z",
        name: "Gambia"
    },
    GL: {
        path: "M304.13,6.6l8.19,-3.63l8.72,0.28l0.19,-0.06l3.12,-2.28l8.75,-0.61l19.94,0.8l14.93,4.75l-3.92,2.01l-9.52,0.27l-13.48,0.6l-0.27,0.2l0.09,0.33l1.26,1.09l0.22,0.07l8.81,-0.67l7.49,2.07l0.19,-0.01l4.68,-1.78l1.76,1.84l-2.59,3.26l-0.01,0.36l0.34,0.11l6.35,-2.2l12.09,-2.32l7.31,1.14l1.17,2.13l-9.9,4.05l-1.43,1.32l-7.91,0.98l-0.26,0.31l0.29,0.29l5.25,0.25l-2.63,3.72l-2.02,3.61l-0.04,0.15l0.08,6.05l0.07,0.19l2.61,3.0l-3.4,0.2l-4.12,1.66l-0.04,0.54l4.5,2.67l0.53,3.9l-2.39,0.42l-0.19,0.48l2.91,3.83l-5.0,0.32l-0.27,0.22l0.12,0.33l2.69,1.84l-0.65,1.35l-3.36,0.71l-3.46,0.01l-0.21,0.51l3.05,3.15l0.02,1.53l-4.54,-1.79l-0.32,0.06l-1.29,1.26l0.11,0.5l3.33,1.15l3.17,2.74l0.85,3.29l-4.0,0.78l-1.83,-1.66l-3.1,-2.64l-0.36,-0.02l-0.13,0.33l0.8,2.92l-2.76,2.26l-0.09,0.33l0.28,0.2l6.59,0.19l2.47,0.18l-5.86,3.38l-6.76,3.43l-7.26,1.48l-2.73,0.02l-0.16,0.05l-2.67,1.72l-3.44,4.42l-5.28,2.86l-1.73,0.18l-3.33,1.01l-3.59,0.96l-0.15,0.1l-2.15,2.52l-0.07,0.19l-0.03,2.76l-1.21,2.49l-4.03,3.1l-0.1,0.33l0.98,2.94l-2.31,6.57l-3.21,0.21l-3.6,-3.0l-0.19,-0.07l-4.9,-0.02l-2.29,-1.97l-1.69,-3.78l-4.31,-4.86l-1.23,-2.52l-0.34,-3.58l-0.08,-0.17l-3.35,-3.67l0.85,-2.92l-0.09,-0.31l-1.5,-1.34l2.33,-4.7l3.67,-1.57l0.15,-0.13l1.02,-1.93l0.52,-3.47l-0.44,-0.31l-2.85,1.57l-1.33,0.64l-2.12,0.59l-2.81,-1.32l-0.15,-2.79l0.88,-2.17l2.09,-0.06l5.07,1.2l0.34,-0.17l-0.11,-0.37l-4.3,-2.9l-2.24,-1.58l-0.25,-0.05l-2.38,0.62l-1.7,-0.93l2.62,-4.1l-0.03,-0.36l-1.51,-1.75l-1.97,-3.3l-3.01,-5.21l-0.1,-0.11l-3.04,-1.85l0.03,-1.94l-0.18,-0.28l-6.82,-3.01l-5.35,-0.38l-6.69,0.21l-6.03,0.37l-2.81,-1.59l-3.84,-2.9l5.94,-1.5l5.01,-0.28l0.28,-0.29l-0.26,-0.31l-10.68,-1.38l-5.38,-2.1l0.27,-1.68l9.3,-2.6l9.18,-2.68l0.19,-0.16l0.97,-2.05l-0.18,-0.42l-6.29,-1.91l1.81,-1.9l8.58,-4.05l3.6,-0.63l0.23,-0.4l-0.92,-2.37l5.59,-1.5l7.66,-0.95l7.58,-0.05l2.65,1.84l0.31,0.02l6.52,-3.29l5.85,2.24l3.55,0.49l5.17,1.95l0.38,-0.16l-0.13,-0.39l-5.77,-3.16l0.29,-2.26Z",
        name: "Greenland"
    },
    KW: {
        path: "M540.87,207.81l0.41,0.94l-0.18,0.51l0.0,0.21l0.65,1.66l-1.15,0.05l-0.54,-1.12l-0.24,-0.17l-1.73,-0.2l1.44,-2.06l1.33,0.18Z",
        name: "Kuwait"
    },
    GH: {
        path: "M423.16,269.88l-3.58,1.34l-1.41,0.87l-2.13,0.69l-1.91,-0.61l0.09,-0.75l-0.03,-0.17l-1.04,-2.07l0.62,-2.7l1.04,-2.08l0.03,-0.19l-1.0,-5.46l0.05,-1.12l4.04,-0.11l1.08,0.18l0.18,-0.03l0.72,-0.36l0.75,0.13l-0.11,0.48l0.06,0.26l0.98,1.22l-0.0,1.77l0.24,1.99l0.05,0.13l0.55,0.81l-0.52,2.14l0.19,1.37l0.69,1.66l0.38,0.62Z",
        name: "Ghana"
    },
    OM: {
        path: "M568.16,231.0l-0.08,0.1l-0.84,1.61l-0.93,-0.11l-0.27,0.11l-0.58,0.73l-0.4,1.32l-0.01,0.14l0.29,1.61l-0.07,0.09l-1.0,-0.01l-0.16,0.04l-1.56,0.97l-0.14,0.2l-0.23,1.17l-0.41,0.4l-1.44,-0.02l-0.17,0.05l-0.98,0.65l-0.13,0.25l0.01,0.87l-0.97,0.57l-1.27,-0.22l-0.19,0.03l-1.63,0.84l-0.88,0.11l-2.55,-5.57l7.2,-2.49l0.19,-0.19l1.67,-5.23l-0.03,-0.25l-1.1,-1.78l0.05,-0.89l0.68,-1.03l0.05,-0.16l0.01,-0.89l0.96,-0.44l0.07,-0.5l-0.32,-0.26l0.16,-1.31l0.85,-0.01l1.03,1.67l0.09,0.09l1.4,0.96l0.11,0.05l1.82,0.34l1.37,0.45l1.75,2.32l0.13,0.1l0.7,0.26l-0.0,0.3l-1.25,2.19l-1.01,0.8ZM561.88,218.47l-0.01,0.02l-0.15,-0.29l0.3,-0.38l-0.14,0.65Z",
        name: "Oman"
    },
    _3: {
        path: "M543.2,261.06l-1.07,1.46l-1.65,1.99l-1.91,0.01l-8.08,-2.95l-0.89,-0.84l-0.9,-1.19l-0.81,-1.23l0.44,-0.73l0.76,-1.12l0.49,0.28l0.52,1.05l1.13,1.06l0.2,0.08l1.24,0.01l2.42,-0.65l2.77,-0.31l2.17,-0.78l1.31,-0.19l0.84,-0.43l1.03,-0.06l-0.01,4.54Z",
        name: "Somaliland"
    },
    _2: {
        path: "M384.23,230.37l0.07,-0.06l0.28,-0.89l0.99,-1.13l0.07,-0.13l0.8,-3.54l3.4,-2.8l0.09,-0.13l0.76,-2.17l0.07,5.5l-2.07,0.21l-0.24,0.17l-0.61,1.36l-0.02,0.16l0.43,3.46l-4.01,-0.01ZM391.82,218.2l0.07,-0.06l0.75,-1.93l1.86,-0.25l0.94,0.34l1.14,0.0l0.18,-0.06l0.73,-0.56l1.41,-0.08l-0.0,2.72l-7.08,-0.12Z",
        name: "Western Sahara"
    },
    _1: {
        path: "M472.71,172.84l-0.07,-0.43l-0.16,-0.22l-0.53,-0.27l-0.38,-0.58l0.3,-0.43l0.51,-0.19l0.18,-0.18l0.3,-0.87l0.12,-0.04l0.22,0.26l0.12,0.09l0.38,0.15l0.28,0.41l0.15,0.12l0.34,0.12l0.43,0.5l0.15,0.07l-0.12,0.3l-0.27,0.32l-0.03,0.18l-0.31,0.06l-1.48,0.47l-0.15,0.17Z",
        name: "Kosovo"
    },
    _0: {
        path: "M503.54,192.92l0.09,-0.17l0.41,0.01l-0.08,0.01l-0.42,0.15ZM504.23,192.76l1.02,0.02l0.4,-0.13l-0.09,0.29l0.03,0.08l-0.35,0.16l-0.24,-0.04l-0.06,-0.1l-0.18,-0.17l-0.19,-0.08l-0.33,-0.02Z",
        name: "Northern Cyprus"
    },
    JO: {
        path: "M510.26,200.93l0.28,-0.57l2.53,1.0l0.27,-0.02l4.57,-2.77l0.84,2.84l-0.28,0.25l-4.95,1.37l-0.14,0.49l2.24,2.48l-0.5,0.28l-0.13,0.14l-0.35,0.78l-1.76,0.35l-0.2,0.14l-0.57,0.94l-0.94,0.73l-2.45,-0.38l-0.03,-0.12l1.23,-4.32l-0.04,-1.1l0.34,-0.75l0.03,-0.12l0.0,-1.63Z",
        name: "Jordan"
    },
    HR: {
        path: "M455.49,162.73l1.53,0.09l0.24,-0.1l0.29,-0.34l0.64,0.38l0.14,0.04l0.98,0.06l0.32,-0.3l-0.01,-0.66l0.67,-0.25l0.19,-0.22l0.21,-1.11l1.72,-0.72l0.65,0.32l1.94,1.37l2.07,0.6l0.22,-0.02l0.67,-0.33l0.47,0.94l0.67,0.76l-0.63,0.77l-0.91,-0.55l-0.16,-0.04l-1.69,0.04l-2.2,-0.51l-1.17,0.07l-0.21,0.11l-0.36,0.42l-0.67,-0.53l-0.46,0.12l-0.52,1.29l0.05,0.31l1.21,1.42l0.58,0.99l1.15,1.14l0.95,0.68l0.92,1.23l0.1,0.09l1.75,0.91l-1.87,-0.89l-1.5,-1.11l-2.23,-0.88l-1.77,-1.9l0.12,-0.06l0.1,-0.47l-1.07,-1.22l-0.04,-0.94l-0.21,-0.27l-1.61,-0.49l-0.35,0.14l-0.53,0.93l-0.41,-0.57l0.04,-0.73Z",
        name: "Croatia"
    },
    HT: {
        path: "M237.82,234.68l1.35,0.1l1.95,0.37l0.18,1.15l-0.16,0.83l-0.51,0.37l-0.06,0.44l0.57,0.68l-0.02,0.22l-1.31,-0.35l-1.26,0.17l-1.49,-0.18l-0.15,0.02l-1.03,0.43l-1.02,-0.61l0.09,-0.36l2.04,0.32l1.9,0.21l0.19,-0.05l0.9,-0.58l0.05,-0.47l-1.05,-1.03l0.02,-0.86l-0.23,-0.3l-1.13,-0.29l0.18,-0.23Z",
        name: "Haiti"
    },
    HU: {
        path: "M461.96,157.92l0.68,-1.66l-0.03,-0.29l-0.15,-0.22l0.84,-0.0l0.3,-0.26l0.12,-0.84l0.88,0.57l0.98,0.38l0.16,0.01l2.1,-0.39l0.23,-0.21l0.14,-0.45l0.88,-0.1l1.06,-0.43l0.13,0.1l0.28,0.04l1.18,-0.4l0.14,-0.1l0.52,-0.67l0.63,-0.15l2.6,0.95l0.26,-0.03l0.38,-0.23l1.12,0.7l0.1,0.49l-1.31,0.57l-0.14,0.13l-1.18,2.14l-1.44,2.04l-1.85,0.55l-1.51,-0.13l-0.14,0.02l-1.92,0.82l-0.85,0.42l-1.91,-0.55l-1.83,-1.31l-0.74,-0.37l-0.44,-0.97l-0.26,-0.18Z",
        name: "Hungary"
    },
    HN: {
        path: "M202.48,251.87l-0.33,-0.62l-0.18,-0.14l-0.5,-0.15l0.13,-0.76l-0.11,-0.28l-0.34,-0.28l-0.6,-0.23l-0.18,-0.01l-0.81,0.22l-0.16,-0.24l-0.72,-0.39l-0.51,-0.48l-0.12,-0.07l-0.31,-0.09l0.24,-0.3l0.04,-0.3l-0.16,-0.4l0.1,-0.28l1.14,-0.69l1.0,-0.86l0.09,0.04l0.3,-0.05l0.47,-0.39l0.49,-0.03l0.14,0.13l0.29,0.06l0.31,-0.1l1.16,0.22l1.24,-0.08l0.81,-0.28l0.29,-0.25l0.63,0.1l0.69,0.18l0.65,-0.06l0.49,-0.2l1.04,0.32l0.38,0.06l0.7,0.44l0.71,0.56l0.92,0.41l0.1,0.11l-0.11,-0.01l-0.23,0.09l-0.3,0.3l-0.76,0.29l-0.58,0.0l-0.15,0.04l-0.45,0.26l-0.31,-0.07l-0.37,-0.34l-0.28,-0.07l-0.26,0.07l-0.18,0.15l-0.23,0.43l-0.04,-0.0l-0.33,0.28l-0.03,0.4l-0.76,0.61l-0.45,0.3l-0.15,0.16l-0.51,-0.36l-0.41,0.06l-0.45,0.56l-0.41,-0.01l-0.59,0.06l-0.27,0.31l0.04,0.96l-0.07,0.0l-0.25,0.16l-0.24,0.45l-0.42,0.06Z",
        name: "Honduras"
    },
    PR: {
        path: "M254.95,238.31l1.15,0.21l0.2,0.23l-0.36,0.36l-1.76,-0.01l-1.2,0.07l-0.09,-0.69l0.17,-0.18l1.89,0.01Z",
        name: "Puerto Rico"
    },
    PS: {
        path: "M509.66,201.06l-0.0,1.44l-0.29,0.63l-0.59,0.19l0.02,-0.11l0.52,-0.31l-0.02,-0.53l-0.41,-0.2l0.36,-1.28l0.41,0.17Z",
        name: "West Bank"
    },
    PT: {
        path: "M398.65,173.6l0.75,-0.63l0.7,-0.3l0.51,1.2l0.28,0.18l1.48,-0.0l0.2,-0.08l0.33,-0.3l1.16,0.08l0.52,1.11l-0.95,0.66l-0.13,0.24l-0.03,2.2l-0.33,0.35l-0.08,0.18l-0.08,1.17l-0.86,0.19l-0.2,0.44l0.93,1.64l-0.64,1.79l0.07,0.31l0.72,0.72l-0.24,0.56l-0.9,1.05l-0.07,0.26l0.17,0.77l-0.73,0.54l-1.18,-0.36l-0.16,-0.0l-0.85,0.21l0.31,-1.81l-0.23,-1.87l-0.23,-0.25l-0.99,-0.24l-0.49,-0.91l0.18,-1.72l0.93,-0.99l0.08,-0.16l0.17,-1.17l0.52,-1.76l-0.04,-1.36l-0.51,-1.14l-0.09,-0.8Z",
        name: "Portugal"
    },
    PY: {
        path: "M264.33,341.43l0.93,-2.96l0.07,-1.42l1.1,-2.1l4.19,-0.73l2.22,0.04l2.12,1.21l0.07,0.76l0.7,1.38l-0.16,3.48l0.24,0.31l2.64,0.5l0.19,-0.03l0.9,-0.45l1.47,0.62l0.38,0.64l0.23,2.35l0.3,1.07l0.25,0.21l0.93,0.12l0.16,-0.02l0.8,-0.37l0.61,0.33l-0.0,1.25l-0.33,1.53l-0.5,1.57l-0.39,2.26l-2.14,1.94l-1.85,0.4l-2.74,-0.4l-2.13,-0.62l2.26,-3.75l0.03,-0.24l-0.36,-1.18l-0.17,-0.19l-2.55,-1.03l-3.04,-1.95l-2.07,-0.43l-4.4,-4.12Z",
        name: "Paraguay"
    },
    PA: {
        path: "M213.65,263.79l0.18,-0.43l0.02,-0.18l-0.06,-0.28l0.23,-0.18l-0.01,-0.48l-0.4,-0.29l-0.01,-0.62l0.57,-0.13l0.68,0.69l-0.04,0.39l0.26,0.33l1.0,0.11l0.27,-0.1l0.49,0.44l0.24,0.07l1.34,-0.22l1.04,-0.62l1.49,-0.5l0.86,-0.73l0.99,0.11l0.18,0.28l1.35,0.08l1.02,0.4l0.78,0.72l0.71,0.53l-0.1,0.12l-0.05,0.3l0.53,1.34l-0.28,0.44l-0.6,-0.13l-0.36,0.22l-0.2,0.76l-0.41,-0.36l-0.44,-1.12l0.49,-0.53l-0.14,-0.49l-0.51,-0.14l-0.41,-0.72l-0.11,-0.11l-1.25,-0.7l-0.19,-0.04l-1.1,0.16l-0.22,0.15l-0.47,0.81l-0.9,0.56l-0.49,0.08l-0.22,0.17l-0.25,0.52l0.05,0.32l0.93,1.07l-0.41,0.21l-0.29,0.3l-0.81,0.09l-0.36,-1.26l-0.53,-0.1l-0.21,0.28l-0.5,-0.09l-0.44,-0.88l-0.22,-0.16l-0.99,-0.16l-0.61,-0.28l-0.13,-0.03l-1.0,0.0Z",
        name: "Panama"
    },
    PG: {
        path: "M808.4,298.6l0.62,0.46l1.19,1.56l1.04,0.77l-0.18,0.37l-0.42,0.15l-0.92,-0.82l-1.05,-1.53l-0.27,-0.96ZM804.09,296.06l-0.3,0.26l-0.36,-1.11l-0.66,-1.06l-2.55,-1.89l-1.42,-0.59l0.17,-0.15l1.16,0.6l0.85,0.55l1.01,0.58l0.97,1.02l0.9,0.76l0.24,1.03ZM796.71,297.99l0.15,0.82l0.34,0.24l1.43,-0.19l0.19,-0.11l0.68,-0.82l1.36,-0.87l0.13,-0.31l-0.21,-1.13l1.04,-0.03l0.3,0.25l-0.04,1.17l-0.74,1.34l-1.17,0.18l-0.22,0.15l-0.35,0.62l-2.51,1.13l-1.21,-0.0l-1.99,-0.71l-1.19,-0.58l0.07,-0.28l1.98,0.32l1.46,-0.2l0.24,-0.21l0.25,-0.79ZM789.24,303.52l0.11,0.15l2.19,1.62l1.6,2.62l0.27,0.14l1.09,-0.06l-0.07,0.77l0.23,0.32l1.23,0.27l-0.14,0.09l0.05,0.53l2.39,0.95l-0.11,0.28l-1.33,0.14l-0.51,-0.55l-0.18,-0.09l-4.59,-0.65l-1.87,-1.55l-1.38,-1.35l-1.28,-2.17l-0.16,-0.13l-3.27,-1.1l-0.19,0.0l-2.12,0.72l-1.58,0.85l-0.15,0.31l0.28,1.63l-1.65,0.73l-1.37,-0.4l-2.3,-0.09l-0.08,-15.65l3.95,1.57l4.58,1.42l1.67,1.25l1.32,1.19l0.36,1.39l0.19,0.21l4.06,1.51l0.39,0.85l-1.9,0.22l-0.25,0.39l0.55,1.68Z",
        name: "Papua New Guinea"
    },
    PE: {
        path: "M246.44,329.21l-0.63,1.25l-1.05,0.54l-2.25,-1.33l-0.19,-0.93l-0.16,-0.21l-4.95,-2.58l-4.46,-2.79l-1.87,-1.52l-0.94,-1.91l0.33,-0.6l-0.01,-0.31l-2.11,-3.33l-2.46,-4.66l-2.36,-5.02l-1.04,-1.18l-0.77,-1.81l-0.08,-0.11l-1.95,-1.64l-1.54,-0.88l0.61,-0.85l0.02,-0.31l-1.15,-2.27l0.69,-1.56l1.59,-1.26l0.12,0.42l-0.56,0.47l-0.11,0.25l0.07,0.92l0.36,0.27l0.97,-0.19l0.85,0.23l0.99,1.19l0.41,0.05l1.42,-1.03l0.11,-0.16l0.46,-1.64l1.45,-2.06l2.92,-0.96l0.11,-0.07l2.73,-2.62l0.84,-1.72l0.02,-0.18l-0.3,-1.65l0.28,-0.1l1.49,1.06l0.77,1.14l0.1,0.09l1.08,0.6l1.43,2.55l0.21,0.15l1.86,0.31l0.18,-0.03l1.25,-0.6l0.77,0.37l0.17,0.03l1.4,-0.2l1.57,0.96l-1.45,2.29l0.23,0.46l0.63,0.05l0.66,0.7l-1.51,-0.08l-0.24,0.1l-0.27,0.31l-1.96,0.46l-2.95,1.74l-0.14,0.21l-0.17,1.1l-0.6,0.82l-0.05,0.23l0.21,1.13l-1.31,0.63l-0.17,0.27l0.0,0.91l-0.53,0.37l-0.1,0.37l1.04,2.27l1.31,1.46l-0.44,0.9l0.24,0.43l1.52,0.13l0.87,1.23l0.24,0.13l2.21,0.07l0.18,-0.06l1.55,-1.13l-0.14,3.22l0.23,0.3l1.14,0.29l0.16,-0.0l1.18,-0.36l1.97,3.71l-0.45,0.71l-0.04,0.14l-0.12,1.8l-0.05,2.07l-0.92,1.2l-0.03,0.31l0.38,0.8l-0.48,0.72l-0.02,0.3l1.01,2.02l-1.5,2.64Z",
        name: "Peru"
    },
    PK: {
        path: "M609.08,187.76l1.66,1.21l0.71,2.11l0.2,0.19l3.62,1.01l-1.98,1.95l-2.65,0.4l-3.75,-0.68l-0.26,0.08l-1.23,1.22l-0.07,0.31l0.89,2.46l0.88,1.92l0.1,0.12l1.67,1.14l-1.8,1.35l-0.12,0.25l0.04,1.85l-2.35,2.67l-1.59,2.79l-2.5,2.72l-2.76,-0.2l-0.24,0.09l-2.76,2.83l0.04,0.45l1.54,1.13l0.27,1.94l0.09,0.17l1.34,1.29l0.4,1.83l-5.14,-0.01l-0.22,0.09l-1.53,1.63l-1.52,-0.56l-0.76,-1.88l-1.93,-2.03l-0.25,-0.09l-4.6,0.5l-4.05,0.05l-3.1,0.33l0.77,-2.53l3.48,-1.33l0.19,-0.33l-0.21,-1.24l-0.19,-0.23l-1.01,-0.37l-0.06,-2.18l-0.17,-0.26l-2.32,-1.16l-0.96,-1.57l-0.56,-0.65l3.16,1.05l0.14,0.01l2.45,-0.4l1.44,0.33l0.3,-0.1l0.4,-0.47l1.58,0.22l0.14,-0.01l3.25,-1.14l0.2,-0.27l0.08,-2.23l1.23,-1.38l1.73,0.0l0.28,-0.2l0.22,-0.61l1.68,-0.32l0.86,0.24l0.27,-0.05l0.98,-0.78l0.11,-0.26l-0.13,-1.57l0.96,-1.52l1.51,-0.67l0.14,-0.41l-0.74,-1.4l1.86,0.07l0.26,-0.13l0.69,-1.01l0.05,-0.2l-0.09,-0.94l1.14,-1.09l0.09,-0.28l-0.29,-1.41l-0.51,-1.07l1.23,-1.05l2.6,-0.58l2.86,-0.33l1.33,-0.54l1.3,-0.29Z",
        name: "Pakistan"
    },
    PH: {
        path: "M737.11,263.82l0.25,1.66l0.14,1.34l-0.54,1.46l-0.64,-1.79l-0.5,-0.1l-1.17,1.28l-0.05,0.32l0.74,1.71l-0.49,0.81l-2.6,-1.28l-0.61,-1.57l0.68,-1.07l-0.07,-0.4l-1.59,-1.19l-0.42,0.06l-0.69,0.91l-1.01,-0.08l-0.21,0.06l-1.58,1.2l-0.17,-0.3l0.87,-1.88l1.48,-0.66l1.18,-0.81l0.71,0.92l0.34,0.1l1.9,-0.69l0.18,-0.18l0.34,-0.94l1.57,-0.06l0.29,-0.32l-0.1,-1.38l1.41,0.83l0.36,2.06ZM734.94,254.42l0.56,2.24l-1.41,-0.49l-0.4,0.3l0.07,0.94l0.51,1.3l-0.54,0.26l-0.08,-1.34l-0.25,-0.28l-0.56,-0.1l-0.23,-0.91l1.03,0.14l0.34,-0.31l-0.03,-0.96l-0.06,-0.18l-1.14,-1.44l1.62,0.04l0.57,0.78ZM724.68,238.33l1.48,0.71l0.33,-0.04l0.44,-0.38l0.05,0.13l-0.37,0.97l0.01,0.23l0.81,1.75l-0.59,1.92l-1.37,0.79l-0.14,0.2l-0.39,2.07l0.01,0.14l0.56,2.04l0.23,0.21l1.33,0.28l0.14,-0.0l1.0,-0.27l2.82,1.28l-0.2,1.16l0.12,0.29l0.66,0.5l-0.13,0.56l-1.54,-0.99l-0.89,-1.29l-0.49,0.0l-0.44,0.65l-1.34,-1.28l-0.26,-0.08l-2.18,0.36l-0.96,-0.44l0.09,-0.72l0.69,-0.57l-0.01,-0.47l-0.75,-0.59l-0.47,0.14l-0.15,0.43l-0.86,-1.02l-0.34,-1.02l-0.07,-1.74l0.49,0.41l0.49,-0.21l0.26,-3.99l0.73,-2.1l1.23,0.0ZM731.12,258.92l-0.82,0.75l-0.83,1.64l-0.52,0.5l-1.17,-1.33l0.36,-0.47l0.62,-0.7l0.07,-0.15l0.24,-1.35l0.73,-0.08l-0.31,1.29l0.16,0.34l0.37,-0.09l1.21,-1.6l-0.12,1.24ZM726.66,255.58l0.85,0.45l0.14,0.03l1.28,-0.0l-0.03,0.62l-1.04,0.96l-1.15,0.55l-0.05,-0.71l0.17,-1.26l-0.01,-0.13l-0.16,-0.51ZM724.92,252.06l-0.45,1.5l-0.7,-0.83l-0.95,-1.43l1.44,0.06l0.67,0.7ZM717.48,261.28l-1.87,1.35l0.21,-0.3l1.81,-1.57l1.5,-1.75l0.97,-1.84l0.23,1.08l-1.56,1.33l-1.29,1.7Z",
        name: "Philippines"
    },
    PL: {
        path: "M458.8,144.25l-0.96,-1.98l0.18,-1.06l-0.01,-0.15l-0.62,-1.8l-0.82,-1.11l0.56,-0.73l0.05,-0.28l-0.51,-1.51l1.48,-0.87l3.88,-1.58l3.06,-1.14l2.23,0.52l0.15,0.66l0.29,0.23l2.4,0.04l3.11,0.39l4.56,-0.05l1.12,0.32l0.51,0.89l0.1,1.45l0.03,0.12l0.66,1.23l-0.01,1.08l-1.33,0.61l-0.14,0.41l0.74,1.5l0.07,1.53l1.22,2.79l-0.19,0.66l-1.09,0.33l-0.14,0.09l-2.27,2.72l-0.04,0.31l0.35,0.8l-2.22,-1.16l-0.21,-0.02l-1.72,0.44l-1.1,-0.31l-0.21,0.02l-1.3,0.61l-1.11,-1.02l-0.32,-0.05l-0.81,0.35l-1.15,-1.61l-0.21,-0.12l-1.65,-0.17l-0.19,-0.82l-0.23,-0.23l-1.72,-0.37l-0.34,0.17l-0.25,0.56l-0.88,-0.44l0.12,-0.69l-0.25,-0.35l-1.78,-0.27l-1.08,-0.97Z",
        name: "Poland"
    },
    ZM: {
        path: "M502.81,308.32l1.09,1.04l0.58,1.94l-0.39,0.66l-0.5,2.05l-0.0,0.14l0.45,1.95l-0.69,0.77l-0.06,0.11l-0.76,2.37l0.15,0.36l0.62,0.31l-6.85,1.9l-0.22,0.33l0.2,1.54l-1.62,0.3l-0.12,0.05l-1.43,1.02l-0.11,0.15l-0.25,0.73l-0.73,0.17l-0.14,0.08l-2.18,2.12l-1.33,1.6l-0.65,0.05l-0.83,-0.29l-2.75,-0.28l-0.24,-0.1l-0.15,-0.27l-0.99,-0.58l-0.12,-0.04l-1.73,-0.14l-1.88,0.54l-1.5,-1.48l-1.61,-2.01l0.11,-7.73l4.92,0.03l0.29,-0.37l-0.19,-0.79l0.34,-0.86l0.0,-0.21l-0.41,-1.11l0.26,-1.14l-0.01,-0.16l-0.12,-0.36l0.18,0.01l0.1,0.56l0.31,0.25l1.14,-0.06l1.44,0.21l0.76,1.05l0.19,0.12l2.01,0.35l0.19,-0.03l1.24,-0.65l0.44,1.03l0.22,0.18l1.81,0.34l0.85,0.99l1.02,1.39l0.24,0.12l1.92,0.02l0.3,-0.32l-0.21,-2.74l-0.47,-0.23l-0.53,0.36l-1.58,-0.89l-0.51,-0.34l0.29,-2.36l0.44,-2.99l-0.03,-0.18l-0.5,-0.99l0.61,-1.38l0.53,-0.24l3.26,-0.41l0.89,0.23l1.01,0.62l1.04,0.44l1.6,0.43l1.35,0.72Z",
        name: "Zambia"
    },
    EE: {
        path: "M482.19,120.88l0.23,-1.68l-0.43,-0.31l-0.75,0.37l-1.34,-1.1l-0.18,-1.75l2.92,-0.95l3.07,-0.53l2.66,0.6l2.48,-0.1l0.18,0.31l-1.65,1.96l-0.06,0.26l0.71,3.25l-0.88,0.94l-1.85,-0.01l-2.08,-1.3l-1.14,-0.47l-0.2,-0.01l-1.69,0.51Z",
        name: "Estonia"
    },
    EG: {
        path: "M508.07,208.8l-0.66,1.06l-0.53,2.03l-0.64,1.32l-0.32,0.26l-1.74,-1.85l-1.77,-3.86l-0.48,-0.09l-0.26,0.25l-0.07,0.32l1.04,2.88l1.55,2.76l1.89,4.18l0.94,1.48l0.83,1.54l2.08,2.73l-0.3,0.28l-0.1,0.23l0.08,1.72l0.11,0.22l2.91,2.37l-28.78,0.0l0.0,-19.06l-0.73,-2.2l0.61,-1.59l0.0,-0.2l-0.34,-1.04l0.73,-1.08l3.13,-0.04l2.36,0.72l2.48,0.81l1.15,0.43l0.23,-0.01l1.93,-0.87l1.02,-0.78l2.08,-0.21l1.59,0.31l0.62,1.24l0.52,0.03l0.46,-0.71l1.86,0.59l1.95,0.16l0.17,-0.04l0.92,-0.52l1.48,4.24Z",
        name: "Egypt"
    },
    ZA: {
        path: "M467.06,373.27l-0.13,-0.29l0.01,-1.58l-0.02,-0.12l-0.71,-1.64l0.59,-0.37l0.14,-0.26l-0.07,-2.13l-0.05,-0.15l-1.63,-2.58l-1.25,-2.31l-1.71,-3.37l0.88,-0.98l0.7,0.52l0.39,1.08l0.23,0.19l1.1,0.19l1.55,0.51l0.14,0.01l1.35,-0.2l0.11,-0.04l2.24,-1.39l0.14,-0.25l0.0,-9.4l0.16,0.09l1.39,2.38l-0.22,1.53l0.04,0.19l0.56,0.94l0.3,0.14l1.79,-0.27l0.16,-0.08l1.23,-1.18l1.17,-0.79l0.1,-0.12l0.57,-1.19l1.02,-0.52l0.9,0.28l1.16,0.73l0.14,0.05l2.04,0.13l0.13,-0.02l1.6,-0.62l0.18,-0.19l0.63,-1.93l1.18,-0.19l0.19,-0.12l0.78,-1.05l0.81,-1.71l2.18,-1.91l3.44,-1.88l0.89,0.02l1.17,0.43l0.21,-0.0l0.76,-0.29l1.07,0.21l1.15,3.55l0.63,1.82l-0.44,2.9l0.1,0.52l-0.74,-0.29l-0.18,-0.01l-0.72,0.19l-0.21,0.2l-0.22,0.74l-0.66,0.97l-0.05,0.18l0.02,0.93l0.09,0.21l1.49,1.46l0.27,0.08l1.47,-0.29l0.22,-0.18l0.43,-1.01l1.29,0.02l-0.51,1.63l-0.29,2.2l-0.59,1.12l-2.2,1.78l-1.06,1.39l-0.72,1.44l-1.39,1.93l-2.81,2.84l-1.75,1.65l-1.85,1.24l-2.55,1.06l-1.23,0.14l-0.24,0.18l-0.22,0.54l-1.27,-0.35l-0.2,0.01l-1.15,0.5l-2.62,-0.52l-0.12,0.0l-1.46,0.33l-0.98,-0.14l-0.16,0.02l-2.55,1.1l-2.11,0.44l-1.59,1.07l-0.93,0.06l-0.97,-0.92l-0.19,-0.08l-0.72,-0.04l-1.0,-1.16l-0.25,0.05ZM493.72,359.24l-1.12,-0.86l-0.31,-0.03l-1.23,0.59l-1.36,1.07l-1.39,1.78l0.01,0.38l1.88,2.11l0.31,0.09l0.9,-0.27l0.18,-0.15l0.4,-0.77l1.28,-0.39l0.18,-0.16l0.42,-0.88l0.76,-1.32l-0.05,-0.37l-0.87,-0.82Z",
        name: "South Africa"
    },
    EC: {
        path: "M220.2,293.48l1.25,-1.76l0.02,-0.31l-0.54,-1.09l-0.5,-0.06l-0.78,0.94l-1.03,-0.75l0.33,-0.46l0.05,-0.23l-0.38,-2.04l0.66,-0.28l0.17,-0.19l0.45,-1.52l0.93,-1.58l0.04,-0.2l-0.13,-0.78l1.19,-0.47l1.57,-0.91l2.35,1.34l0.17,0.04l0.28,-0.02l0.52,0.91l0.21,0.15l2.12,0.35l0.2,-0.03l0.55,-0.31l1.08,0.73l0.97,0.54l0.31,1.67l-0.71,1.49l-2.64,2.54l-2.95,0.97l-0.15,0.11l-1.53,2.18l-0.49,1.68l-1.1,0.8l-0.87,-1.05l-0.15,-0.1l-1.01,-0.27l-0.13,-0.0l-0.7,0.14l-0.03,-0.43l0.6,-0.5l0.1,-0.31l-0.26,-0.91Z",
        name: "Ecuador"
    },
    AL: {
        path: "M470.27,171.7l0.38,0.19l0.45,-0.18l0.4,0.61l0.11,0.1l0.46,0.24l0.13,0.87l-0.3,0.95l-0.0,0.17l0.36,1.28l0.12,0.17l0.9,0.63l-0.03,0.44l-0.67,0.35l-0.16,0.22l-0.14,0.88l-0.96,1.18l-0.06,-0.03l-0.04,-0.48l-0.12,-0.22l-1.28,-0.92l-0.19,-1.25l0.2,-1.96l0.33,-0.89l-0.06,-0.3l-0.36,-0.41l-0.13,-0.75l0.66,-0.9Z",
        name: "Albania"
    },
    AO: {
        path: "M461.62,299.93l0.55,1.67l0.73,1.54l1.56,2.18l0.28,0.12l1.66,-0.2l0.81,-0.34l1.28,0.33l0.33,-0.14l0.39,-0.67l0.56,-1.3l1.37,-0.09l0.27,-0.21l0.07,-0.23l0.67,-0.01l-0.13,0.53l0.29,0.37l2.74,-0.02l0.04,1.29l0.03,0.13l0.46,0.87l-0.35,1.52l0.18,1.55l0.07,0.16l0.75,0.85l-0.13,2.89l0.41,0.29l0.56,-0.21l1.11,0.05l1.5,-0.37l0.9,0.12l0.18,0.53l-0.27,1.15l0.01,0.17l0.4,1.08l-0.33,0.85l-0.01,0.18l0.12,0.51l-4.83,-0.03l-0.3,0.3l-0.12,8.13l0.07,0.19l1.69,2.1l1.27,1.25l-4.03,0.92l-5.93,-0.36l-1.66,-1.19l-0.18,-0.06l-10.15,0.11l-0.34,0.13l-1.35,-1.05l-0.17,-0.06l-1.62,-0.08l-1.6,0.45l-0.88,0.36l-0.17,-1.2l0.34,-2.19l0.85,-2.32l0.14,-1.13l0.79,-2.24l0.57,-1.0l1.42,-1.64l0.82,-1.15l0.05,-0.13l0.26,-1.88l-0.13,-1.51l-0.07,-0.16l-0.72,-0.87l-1.23,-2.91l0.09,-0.37l0.73,-0.95l0.05,-0.27l-1.27,-4.12l-1.19,-1.54l0.1,-0.2l0.86,-0.28l0.78,0.03l0.83,-0.29l7.12,0.03ZM451.81,298.94l-0.17,0.07l-0.5,-1.42l0.85,-0.92l0.53,-0.29l0.48,0.44l-0.56,0.32l-0.1,0.1l-0.41,0.65l-0.05,0.14l-0.07,0.91Z",
        name: "Angola"
    },
    KZ: {
        path: "M598.42,172.08l-1.37,0.54l-3.3,2.09l-0.11,0.12l-1.01,1.97l-0.56,0.01l-0.6,-1.24l-0.26,-0.17l-2.95,-0.09l-0.46,-2.22l-0.29,-0.24l-0.91,-0.02l0.17,-2.72l-0.12,-0.26l-3.0,-2.22l-0.2,-0.06l-4.29,0.24l-2.8,0.42l-2.36,-2.7l-6.4,-3.65l-0.23,-0.03l-6.45,1.83l-0.22,0.29l0.1,10.94l-0.84,0.1l-1.65,-2.21l-0.11,-0.09l-1.69,-0.84l-0.2,-0.02l-2.84,0.63l-0.14,0.07l-0.71,0.64l-0.02,-0.11l0.57,-1.17l0.0,-0.26l-0.48,-1.05l-0.17,-0.16l-2.78,-0.99l-1.08,-2.62l-0.13,-0.15l-1.24,-0.7l-0.04,-0.48l2.07,0.25l0.34,-0.29l0.09,-2.03l1.84,-0.44l2.12,0.45l0.36,-0.25l0.45,-3.04l-0.45,-2.06l-0.31,-0.23l-2.44,0.15l-2.07,-0.75l-0.23,0.01l-2.88,1.38l-2.21,0.62l-0.96,-0.38l0.22,-1.39l-0.06,-0.23l-1.6,-2.12l-0.25,-0.12l-1.72,0.08l-1.87,-1.91l1.33,-2.24l-0.06,-0.38l-0.55,-0.5l1.72,-3.08l2.3,1.7l0.48,-0.2l0.29,-2.26l4.99,-3.48l3.76,-0.08l5.46,2.27l2.96,1.33l0.26,-0.01l2.59,-1.36l3.82,-0.06l3.13,1.67l0.38,-0.09l0.63,-0.85l3.36,0.14l0.29,-0.19l0.63,-1.57l-0.13,-0.37l-3.64,-2.05l2.0,-1.36l0.1,-0.38l-0.32,-0.62l2.09,-0.76l0.13,-0.47l-1.65,-2.13l0.89,-0.91l9.27,-1.18l0.13,-0.05l1.17,-0.82l6.2,-1.27l2.26,-1.43l4.19,0.7l0.74,3.39l0.38,0.22l2.52,-0.81l2.9,1.06l-0.18,1.63l0.32,0.33l2.52,-0.23l5.0,-2.58l0.03,0.39l3.16,2.62l5.57,8.48l0.49,0.02l1.18,-1.53l3.22,1.78l0.21,0.03l3.5,-0.83l1.21,0.52l1.16,1.82l0.15,0.12l1.67,0.61l1.01,1.32l0.28,0.11l3.04,-0.41l1.1,1.64l-1.68,1.89l-1.97,0.28l-0.26,0.29l-0.12,3.09l-1.2,1.23l-4.81,-1.01l-0.35,0.2l-1.77,5.51l-1.14,0.62l-4.92,1.23l-0.2,0.41l2.14,5.06l-1.45,0.67l-0.17,0.31l0.15,1.28l-1.05,-0.3l-1.21,-1.04l-0.17,-0.07l-3.73,-0.32l-4.15,-0.08l-0.92,0.31l-3.46,-1.24l-0.22,0.01l-1.42,0.63l-0.17,0.21l-0.32,1.49l-3.82,-0.97l-0.15,0.0l-1.65,0.43l-0.2,0.17l-0.51,1.21Z",
        name: "Kazakhstan"
    },
    ET: {
        path: "M516.0,247.63l1.21,0.92l0.3,0.04l1.3,-0.53l0.46,0.41l0.19,0.08l1.65,0.03l2.05,0.96l0.67,0.88l1.07,0.79l1.0,1.45l0.7,0.68l-0.72,0.92l-0.85,1.19l-0.04,0.25l0.19,0.67l0.04,0.74l0.29,0.28l1.4,0.04l0.55,-0.15l0.23,0.19l-0.41,0.67l0.01,0.32l0.92,1.39l0.93,1.23l0.99,0.94l0.1,0.06l8.19,2.99l1.51,0.01l-6.51,6.95l-3.14,0.11l-0.18,0.06l-2.15,1.71l-1.51,0.04l-0.22,0.1l-0.6,0.69l-1.46,-0.0l-0.93,-0.78l-0.32,-0.04l-2.29,1.05l-0.12,0.1l-0.64,0.9l-1.44,-0.17l-0.51,-0.26l-0.17,-0.03l-0.56,0.07l-0.68,-0.02l-3.1,-2.08l-0.17,-0.05l-1.62,0.0l-0.68,-0.65l0.0,-1.28l-0.21,-0.29l-1.19,-0.38l-1.42,-2.63l-0.13,-0.12l-1.05,-0.53l-0.46,-1.0l-1.27,-1.23l-0.17,-0.08l-1.08,-0.13l0.53,-0.9l1.17,-0.05l0.26,-0.17l0.37,-0.77l0.03,-0.14l-0.03,-2.23l0.7,-2.49l1.08,-0.65l0.14,-0.19l0.24,-1.0l1.03,-1.85l1.47,-1.22l0.09,-0.12l1.02,-2.51l0.36,-1.96l2.62,0.48l0.33,-0.18l0.63,-1.55Z",
        name: "Ethiopia"
    },
    ZW: {
        path: "M498.95,341.2l-1.16,-0.23l-0.16,0.01l-0.74,0.28l-1.11,-0.41l-1.02,-0.04l-1.52,-1.13l-0.12,-0.05l-1.79,-0.37l-0.65,-1.46l-0.01,-0.86l-0.22,-0.29l-0.99,-0.26l-2.74,-2.77l-0.77,-1.46l-0.52,-0.5l-0.72,-1.54l2.24,0.23l0.78,0.28l0.12,0.02l0.85,-0.06l0.21,-0.11l1.38,-1.66l2.11,-2.05l0.81,-0.18l0.22,-0.2l0.27,-0.8l1.29,-0.93l1.53,-0.28l0.11,0.66l0.3,0.25l2.02,-0.05l1.04,0.48l0.5,0.59l0.18,0.1l1.13,0.18l1.11,0.7l0.01,3.06l-0.49,1.82l-0.11,1.94l0.03,0.16l0.35,0.68l-0.24,1.3l-0.27,0.17l-0.12,0.15l-0.64,1.83l-2.49,2.8Z",
        name: "Zimbabwe"
    },
    ES: {
        path: "M398.67,172.8l0.09,-1.45l-0.06,-0.2l-0.82,-1.05l3.16,-1.96l3.01,0.54l3.33,-0.02l2.64,0.52l2.14,-0.15l3.9,0.1l0.91,1.08l0.14,0.09l4.61,1.38l0.26,-0.04l0.77,-0.55l2.66,1.29l0.17,0.03l2.59,-0.35l0.1,1.28l-2.2,1.85l-3.13,0.62l-0.23,0.23l-0.21,0.92l-1.54,1.68l-0.97,2.4l0.02,0.26l0.85,1.46l-1.27,1.14l-0.09,0.14l-0.5,1.73l-1.73,0.53l-0.15,0.1l-1.68,2.1l-3.03,0.04l-2.38,-0.05l-0.17,0.05l-1.57,1.01l-0.9,1.01l-0.96,-0.19l-0.82,-0.86l-0.69,-1.6l-0.22,-0.18l-2.14,-0.41l-0.13,-0.62l0.83,-0.97l0.39,-0.86l-0.06,-0.33l-0.73,-0.73l0.63,-1.74l-0.02,-0.25l-0.8,-1.41l0.69,-0.15l0.23,-0.27l0.09,-1.29l0.33,-0.36l0.08,-0.2l0.03,-2.16l1.03,-0.72l0.1,-0.37l-0.7,-1.5l-0.25,-0.17l-1.46,-0.11l-0.22,0.07l-0.34,0.3l-1.17,0.0l-0.55,-1.29l-0.39,-0.16l-1.02,0.44l-0.45,0.36Z",
        name: "Spain"
    },
    ER: {
        path: "M527.15,253.05l-0.77,-0.74l-1.01,-1.47l-1.14,-0.86l-0.62,-0.84l-0.11,-0.09l-2.18,-1.02l-0.12,-0.03l-1.61,-0.03l-0.52,-0.46l-0.31,-0.05l-1.31,0.54l-1.38,-1.06l-0.46,0.12l-0.69,1.68l-2.49,-0.46l-0.2,-0.76l1.06,-3.69l0.24,-1.65l0.66,-0.66l1.76,-0.4l0.16,-0.1l0.97,-1.13l1.24,2.55l0.68,2.34l0.09,0.14l1.4,1.27l3.39,2.4l1.37,1.43l2.14,2.34l0.94,0.6l-0.32,0.26l-0.85,-0.17Z",
        name: "Eritrea"
    },
    ME: {
        path: "M469.05,172.9l-0.57,-0.8l-0.1,-0.09l-0.82,-0.46l0.16,-0.33l0.35,-1.57l0.72,-0.62l0.27,-0.16l0.48,0.38l0.35,0.4l0.12,0.08l0.79,0.32l0.66,0.43l-0.43,0.62l-0.28,0.11l-0.07,-0.25l-0.53,-0.1l-1.09,1.49l-0.05,0.23l0.06,0.32Z",
        name: "Montenegro"
    },
    MD: {
        path: "M488.2,153.75l0.14,-0.11l1.49,-0.28l1.75,0.95l1.06,0.14l0.92,0.7l-0.15,0.9l0.15,0.31l0.8,0.46l0.33,1.2l0.09,0.14l0.72,0.66l-0.11,0.28l0.1,0.33l-0.06,0.02l-1.25,-0.08l-0.17,-0.29l-0.39,-0.12l-0.52,0.25l-0.16,0.36l0.13,0.42l-0.6,0.88l-0.43,1.03l-0.22,0.12l-0.32,-1.0l0.25,-1.34l-0.08,-1.38l-0.06,-0.17l-1.43,-1.87l-0.81,-1.36l-0.78,-0.95l-0.12,-0.09l-0.29,-0.12Z",
        name: "Moldova"
    },
    MG: {
        path: "M544.77,316.45l0.64,1.04l0.6,1.62l0.4,3.04l0.63,1.21l-0.22,1.07l-0.15,0.26l-0.59,-1.05l-0.52,-0.01l-0.47,0.76l-0.04,0.23l0.46,1.84l-0.19,0.92l-0.61,0.53l-0.1,0.21l-0.16,2.15l-0.97,2.98l-1.24,3.59l-1.55,4.97l-0.96,3.67l-1.08,2.93l-1.94,0.61l-2.05,1.06l-3.2,-1.53l-0.62,-1.26l-0.18,-2.39l-0.87,-2.07l-0.22,-1.8l0.4,-1.69l1.01,-0.4l0.19,-0.28l0.01,-0.79l1.15,-1.91l0.04,-0.11l0.23,-1.66l-0.03,-0.17l-0.57,-1.21l-0.46,-1.58l-0.19,-2.25l0.82,-1.36l0.33,-1.51l1.11,-0.1l1.4,-0.53l0.9,-0.45l1.03,-0.03l0.21,-0.09l1.41,-1.45l2.12,-1.65l0.75,-1.29l0.03,-0.24l-0.17,-0.56l0.53,0.15l0.32,-0.1l1.38,-1.77l0.06,-0.18l0.04,-1.44l0.54,-0.74l0.62,0.77Z",
        name: "Madagascar"
    },
    MA: {
        path: "M378.66,230.13l0.07,-0.75l0.93,-0.72l0.82,-1.37l0.04,-0.21l-0.14,-0.8l0.8,-1.74l1.33,-1.61l0.79,-0.4l0.14,-0.15l0.66,-1.55l0.08,-1.46l0.83,-1.52l1.6,-0.94l0.11,-0.11l1.56,-2.71l1.2,-0.99l2.24,-0.29l0.17,-0.08l1.95,-1.83l1.3,-0.77l2.09,-2.28l0.07,-0.26l-0.61,-3.34l0.92,-2.3l0.33,-1.44l1.52,-1.79l2.48,-1.27l1.86,-1.16l0.1,-0.11l1.67,-2.93l0.72,-1.59l1.54,0.01l1.43,1.14l0.21,0.06l2.33,-0.19l2.55,0.62l0.97,0.03l0.83,1.6l0.15,1.71l0.86,2.96l0.09,0.14l0.5,0.45l-0.31,0.73l-3.11,0.44l-0.16,0.07l-1.07,0.97l-1.36,0.23l-0.25,0.28l-0.1,1.85l-2.74,1.02l-0.14,0.11l-0.9,1.3l-1.93,0.69l-2.56,0.44l-4.04,2.01l-0.17,0.27l0.02,2.91l-0.08,0.0l-0.3,0.31l0.05,1.15l-1.25,0.07l-0.16,0.06l-0.73,0.55l-0.98,0.0l-0.85,-0.33l-0.15,-0.02l-2.11,0.29l-0.24,0.19l-0.76,1.95l-0.63,0.16l-0.21,0.19l-1.15,3.29l-3.42,2.81l-0.1,0.17l-0.81,3.57l-0.98,1.12l-0.3,0.85l-5.13,0.19Z",
        name: "Morocco"
    },
    UZ: {
        path: "M587.83,186.48l0.06,-1.46l-0.19,-0.29l-3.31,-1.24l-2.57,-1.4l-1.63,-1.38l-2.79,-1.98l-1.2,-2.98l-0.12,-0.14l-0.84,-0.54l-0.18,-0.05l-2.61,0.13l-0.76,-0.48l-0.25,-2.25l-0.17,-0.24l-3.37,-1.6l-0.32,0.04l-2.08,1.73l-2.11,1.02l-0.16,0.35l0.31,1.14l-2.14,0.03l-0.09,-10.68l6.1,-1.74l6.25,3.57l2.36,2.72l0.27,0.1l2.92,-0.44l4.17,-0.23l2.78,2.06l-0.18,2.87l0.29,0.32l0.98,0.02l0.46,2.22l0.28,0.24l3.0,0.09l0.61,1.25l0.28,0.17l0.93,-0.02l0.26,-0.16l1.06,-2.06l3.21,-2.03l1.3,-0.5l0.19,0.08l-1.75,1.62l0.05,0.48l1.85,1.12l0.27,0.02l1.65,-0.69l2.4,1.27l-2.69,1.79l-1.79,-0.27l-0.89,0.06l-0.22,-0.52l0.48,-1.26l-0.34,-0.4l-3.35,0.69l-0.22,0.18l-0.78,1.87l-1.07,1.47l-1.93,-0.13l-0.29,0.16l-0.65,1.29l0.16,0.42l1.69,0.64l0.48,1.91l-1.25,2.6l-1.64,-0.53l-1.18,-0.03Z",
        name: "Uzbekistan"
    },
    MM: {
        path: "M670.1,233.39l-1.46,1.11l-1.68,0.11l-0.26,0.19l-1.1,2.7l-0.95,0.42l-0.14,0.42l1.21,2.27l1.61,1.92l0.94,1.55l-0.82,1.99l-0.77,0.42l-0.13,0.39l0.64,1.35l1.62,1.97l0.26,1.32l-0.04,1.15l0.02,0.13l0.92,2.18l-1.3,2.23l-0.79,1.69l-0.1,-0.77l0.74,-1.87l-0.02,-0.26l-0.8,-1.42l0.2,-2.68l-0.06,-0.2l-0.98,-1.27l-0.8,-2.98l-0.45,-3.22l-1.11,-2.22l-0.45,-0.1l-1.64,1.28l-2.74,1.76l-1.26,-0.2l-1.27,-0.49l0.79,-2.93l0.0,-0.14l-0.52,-2.42l-1.93,-2.97l0.26,-0.8l-0.22,-0.39l-1.37,-0.31l-1.65,-1.98l-0.12,-1.5l0.41,0.19l0.42,-0.26l0.05,-1.7l1.08,-0.54l0.16,-0.34l-0.24,-1.0l0.5,-0.79l0.05,-0.15l0.08,-2.35l1.58,0.49l0.36,-0.15l1.12,-2.19l0.15,-1.34l1.35,-2.18l0.04,-0.17l-0.07,-1.35l2.97,-1.71l1.67,0.45l0.38,-0.33l-0.18,-1.46l0.7,-0.4l0.15,-0.32l-0.13,-0.72l0.94,-0.13l0.74,1.41l0.11,0.12l0.95,0.56l0.07,1.89l-0.09,2.08l-2.28,2.15l-0.09,0.19l-0.3,3.15l0.35,0.32l2.37,-0.39l0.53,2.17l0.2,0.21l1.3,0.42l-0.63,1.9l0.14,0.36l1.86,0.99l1.1,0.49l0.24,0.0l1.45,-0.6l0.04,0.51l-2.01,1.6l-0.56,0.96l-1.34,0.56Z",
        name: "Myanmar"
    },
    ML: {
        path: "M390.79,248.2l0.67,-0.37l0.14,-0.18l0.36,-1.31l0.51,-0.04l1.68,0.69l0.21,0.0l1.34,-0.48l0.89,0.16l0.3,-0.13l0.29,-0.44l9.89,-0.04l0.29,-0.21l0.56,-1.8l-0.11,-0.33l-0.33,-0.24l-2.37,-22.1l3.41,-0.04l8.37,5.73l8.38,5.68l0.56,1.15l0.14,0.14l1.56,0.75l0.99,0.36l0.03,1.45l0.33,0.29l2.45,-0.22l0.01,5.52l-1.3,1.64l-0.06,0.15l-0.18,1.37l-1.99,0.36l-3.4,0.22l-0.19,0.09l-0.85,0.83l-1.48,0.09l-1.49,0.01l-0.54,-0.43l-0.26,-0.05l-1.38,0.36l-2.39,1.08l-0.13,0.12l-0.44,0.73l-1.88,1.11l-0.11,0.12l-0.3,0.57l-0.86,0.42l-1.1,-0.31l-0.28,0.07l-0.69,0.62l-0.09,0.16l-0.35,1.66l-1.93,2.04l-0.08,0.23l0.05,0.76l-0.63,0.99l-0.04,0.19l0.14,1.23l-0.81,0.29l-0.32,0.17l-0.27,-0.75l-0.39,-0.18l-0.65,0.26l-0.36,-0.04l-0.29,0.14l-0.37,0.6l-1.69,-0.02l-0.63,-0.34l-0.32,0.02l-0.12,0.09l-0.47,-0.45l0.1,-0.6l-0.09,-0.27l-0.31,-0.3l-0.33,-0.05l-0.05,0.02l0.02,-0.21l0.46,-0.59l-0.02,-0.39l-0.99,-1.02l-0.34,-0.74l-0.56,-0.56l-0.17,-0.09l-0.5,-0.07l-0.19,0.04l-0.58,0.35l-0.79,0.33l-0.65,0.51l-0.85,-0.16l-0.63,-0.59l-0.14,-0.07l-0.41,-0.08l-0.2,0.03l-0.59,0.31l-0.07,0.0l-0.1,-0.63l0.11,-0.85l-0.21,-0.98l-0.11,-0.17l-0.86,-0.66l-0.45,-1.34l-0.1,-1.36Z",
        name: "Mali"
    },
    MN: {
        path: "M641.06,150.59l2.41,-0.53l4.76,-2.8l3.67,-1.49l2.06,0.96l0.12,0.03l2.5,0.05l1.59,1.45l0.19,0.08l2.47,0.12l3.59,0.81l0.27,-0.07l2.43,-2.28l0.06,-0.36l-0.93,-1.77l2.33,-3.1l2.66,1.3l2.26,0.39l2.75,0.8l0.44,2.3l0.19,0.22l3.56,1.38l0.18,0.01l2.35,-0.6l3.1,-0.42l2.4,0.41l2.37,1.52l1.49,1.63l0.23,0.1l2.29,-0.03l3.13,0.52l0.15,-0.01l2.28,-0.79l3.27,-0.53l0.11,-0.04l3.56,-2.23l1.31,0.31l1.26,1.05l0.22,0.07l2.45,-0.22l-0.98,1.96l-1.77,3.21l-0.01,0.28l0.64,1.31l0.35,0.16l1.35,-0.38l2.4,0.48l0.22,-0.04l1.78,-1.09l1.82,0.92l2.11,2.07l-0.17,0.68l-1.79,-0.31l-3.74,0.45l-1.85,0.96l-1.78,2.01l-3.74,1.18l-2.46,1.61l-2.45,-0.6l-1.42,-0.28l-0.31,0.13l-1.31,1.99l0.0,0.33l0.78,1.15l0.3,0.74l-1.58,0.93l-1.75,1.59l-2.83,1.03l-3.77,0.12l-4.05,1.05l-2.81,1.54l-0.95,-0.8l-0.19,-0.07l-2.96,0.0l-3.64,-1.8l-2.55,-0.48l-3.38,0.41l-5.13,-0.67l-2.66,0.06l-1.35,-1.65l-1.12,-2.78l-0.21,-0.18l-1.5,-0.33l-2.98,-1.89l-0.12,-0.04l-3.37,-0.43l-2.84,-0.51l-0.75,-1.13l0.93,-3.54l-0.04,-0.24l-1.73,-2.55l-0.15,-0.12l-3.52,-1.18l-1.99,-1.61l-0.54,-1.85Z",
        name: "Mongolia"
    },
    MK: {
        path: "M472.73,173.87l0.08,0.01l0.32,-0.25l0.08,-0.44l1.29,-0.41l1.37,-0.28l1.03,-0.04l1.06,0.82l0.14,1.59l-0.22,0.04l-0.17,0.11l-0.32,0.4l-1.2,-0.05l-0.18,0.05l-0.9,0.61l-1.45,0.23l-0.85,-0.59l-0.3,-1.09l0.22,-0.71Z",
        name: "Macedonia"
    },
    MW: {
        path: "M507.18,313.84l-0.67,1.85l-0.01,0.16l0.7,3.31l0.31,0.24l0.75,-0.03l0.78,0.71l0.99,1.75l0.2,3.03l-0.91,0.45l-0.14,0.15l-0.59,1.38l-1.24,-1.21l-0.17,-1.62l0.49,-1.12l0.02,-0.16l-0.15,-1.03l-0.13,-0.21l-0.99,-0.65l-0.26,-0.03l-0.53,0.18l-1.31,-1.12l-1.15,-0.59l0.66,-2.06l0.75,-0.84l0.07,-0.27l-0.47,-2.04l0.48,-1.94l0.4,-0.65l0.03,-0.24l-0.64,-2.15l-0.08,-0.13l-0.44,-0.42l1.34,0.26l1.25,1.73l0.67,3.3Z",
        name: "Malawi"
    },
    MR: {
        path: "M390.54,247.66l-1.48,-1.58l-1.51,-1.88l-0.12,-0.09l-1.64,-0.67l-1.17,-0.74l-0.17,-0.05l-1.4,0.03l-0.12,0.03l-1.14,0.52l-1.15,-0.21l-0.26,0.08l-0.44,0.43l-0.11,-0.72l0.68,-1.29l0.31,-2.43l-0.28,-2.63l-0.29,-1.27l0.24,-1.24l-0.03,-0.2l-0.65,-1.24l-1.19,-1.05l0.32,-0.51l9.64,0.02l0.3,-0.34l-0.46,-3.71l0.51,-1.12l2.17,-0.22l0.27,-0.3l-0.08,-6.5l7.91,0.13l0.31,-0.3l0.01,-3.5l8.17,5.63l-2.89,0.04l-0.29,0.33l2.42,22.56l0.12,0.21l0.26,0.19l-0.43,1.38l-9.83,0.04l-0.25,0.13l-0.27,0.41l-0.77,-0.14l-0.15,0.01l-1.3,0.47l-1.64,-0.67l-0.14,-0.02l-0.79,0.06l-0.27,0.22l-0.39,1.39l-0.53,0.29Z",
        name: "Mauritania"
    },
    UG: {
        path: "M500.74,287.17l-2.84,-0.02l-0.92,0.32l-1.37,0.71l-0.29,-0.12l0.02,-1.6l0.54,-0.89l0.04,-0.13l0.14,-1.96l0.49,-1.09l0.91,-1.24l0.97,-0.68l0.8,-0.89l-0.13,-0.49l-0.79,-0.27l0.13,-2.55l0.78,-0.52l1.45,0.51l0.18,0.01l1.97,-0.57l1.72,0.01l0.18,-0.06l1.29,-0.97l0.98,1.44l0.29,1.24l1.05,2.75l-0.84,1.68l-1.94,2.66l-0.06,0.18l0.02,2.36l-4.8,0.18Z",
        name: "Uganda"
    },
    MY: {
        path: "M717.6,273.52l-1.51,0.7l-2.13,-0.41l-2.88,-0.0l-0.29,0.21l-0.84,2.77l-0.9,0.82l-0.08,0.12l-1.23,3.34l-1.81,0.47l-2.29,-0.68l-0.14,-0.01l-1.2,0.22l-0.14,0.07l-1.36,1.18l-1.47,-0.17l-0.12,0.01l-1.46,0.46l-1.51,-1.25l-0.24,-0.97l1.26,0.59l0.2,0.02l1.93,-0.47l0.22,-0.22l0.47,-1.98l0.9,-0.4l2.97,-0.54l0.17,-0.09l1.8,-1.98l1.02,-1.32l0.9,1.03l0.48,-0.04l0.43,-0.7l1.02,0.07l0.32,-0.27l0.25,-2.72l1.84,-1.67l1.23,-1.89l0.73,-0.01l1.12,1.11l0.1,0.99l0.18,0.24l1.66,0.71l1.85,0.67l-0.09,0.51l-1.45,0.11l-0.26,0.4l0.35,0.97ZM673.78,269.53l0.17,1.14l0.35,0.25l1.65,-0.3l0.18,-0.11l0.68,-0.86l0.31,0.13l1.41,1.45l0.99,1.59l0.13,1.57l-0.26,1.09l0.0,0.15l0.24,0.84l0.18,1.46l0.11,0.2l0.82,0.64l0.92,2.08l-0.03,0.52l-1.4,0.13l-2.29,-1.79l-2.86,-1.92l-0.27,-1.16l-0.07,-0.13l-1.39,-1.61l-0.33,-1.99l-0.05,-0.12l-0.84,-1.27l0.26,-1.72l-0.03,-0.18l-0.45,-0.87l0.13,-0.13l1.71,0.92Z",
        name: "Malaysia"
    },
    MX: {
        path: "M133.41,213.83l0.61,0.09l0.27,-0.09l0.93,-1.01l0.08,-0.18l0.09,-1.22l-0.09,-0.23l-1.93,-1.94l-1.46,-0.77l-2.96,-5.62l-0.86,-2.1l2.44,-0.18l2.68,-0.25l-0.03,0.08l0.17,0.4l3.79,1.35l5.81,1.97l6.96,-0.02l0.3,-0.3l0.0,-0.84l3.91,0.0l0.87,0.93l1.27,0.87l1.44,1.17l0.79,1.37l0.62,1.49l0.12,0.14l1.35,0.85l2.08,0.82l0.35,-0.1l1.49,-2.04l1.81,-0.05l1.63,1.01l1.21,1.8l0.86,1.58l1.47,1.55l0.53,1.82l0.73,1.32l0.14,0.13l1.98,0.84l1.78,0.59l0.61,-0.03l-0.78,1.89l-0.45,1.96l-0.19,3.58l-0.24,1.27l0.01,0.14l0.43,1.43l0.78,1.31l0.49,1.98l0.06,0.12l1.63,1.9l0.61,1.51l0.98,1.28l0.16,0.11l2.58,0.67l0.98,1.02l0.31,0.08l2.17,-0.71l1.91,-0.26l1.87,-0.47l1.67,-0.49l1.59,-1.06l0.11,-0.14l0.6,-1.52l0.22,-2.21l0.35,-0.62l1.58,-0.64l2.59,-0.59l2.18,0.09l1.43,-0.2l0.39,0.36l-0.07,1.02l-1.28,1.48l-0.65,1.68l0.07,0.32l0.33,0.32l-0.79,2.49l-0.28,-0.3l-0.24,-0.09l-1.0,0.08l-0.24,0.15l-0.74,1.28l-0.19,-0.13l-0.28,-0.03l-0.3,0.12l-0.19,0.29l0.0,0.06l-4.34,-0.02l-0.3,0.3l-0.0,1.16l-0.83,0.0l-0.28,0.19l0.08,0.33l0.93,0.86l0.9,0.58l0.24,0.48l0.16,0.15l0.2,0.08l-0.03,0.38l-2.94,0.01l-0.26,0.15l-1.21,2.09l0.02,0.33l0.25,0.33l-0.21,0.44l-0.04,0.22l-2.42,-2.35l-1.36,-0.87l-2.04,-0.67l-0.13,-0.01l-1.4,0.19l-2.07,0.98l-1.14,0.23l-1.72,-0.66l-1.85,-0.48l-2.31,-1.16l-1.92,-0.38l-2.79,-1.18l-2.04,-1.2l-0.6,-0.66l-0.19,-0.1l-1.37,-0.15l-2.45,-0.78l-1.07,-1.18l-2.63,-1.44l-1.2,-1.56l-0.44,-0.93l0.5,-0.15l0.2,-0.39l-0.2,-0.58l0.46,-0.55l0.07,-0.19l0.01,-0.91l-0.06,-0.18l-0.81,-1.13l-0.25,-1.08l-0.86,-1.36l-2.21,-2.63l-2.53,-2.09l-1.2,-1.63l-0.11,-0.09l-2.08,-1.06l-0.34,-0.48l0.35,-1.53l-0.16,-0.34l-1.24,-0.61l-1.39,-1.23l-0.6,-1.81l-0.24,-0.2l-1.25,-0.2l-1.38,-1.35l-1.11,-1.25l-0.1,-0.76l-0.05,-0.13l-1.33,-2.04l-0.85,-2.02l0.04,-0.99l-0.14,-0.27l-1.81,-1.1l-0.2,-0.04l-0.74,0.11l-1.34,-0.72l-0.42,0.16l-0.4,1.12l-0.0,0.19l0.41,1.3l0.24,2.04l0.06,0.15l0.88,1.16l1.84,1.86l0.4,0.61l0.12,0.1l0.27,0.14l0.29,0.82l0.31,0.2l0.2,-0.02l0.43,1.51l0.09,0.14l0.72,0.65l0.51,0.91l1.58,1.4l0.8,2.42l0.77,1.23l0.66,1.19l0.13,1.34l0.28,0.27l1.08,0.08l0.92,1.1l0.83,1.08l-0.03,0.24l-0.88,0.81l-0.13,-0.0l-0.59,-1.42l-0.07,-0.11l-1.67,-1.53l-1.81,-1.28l-1.15,-0.61l0.07,-1.85l-0.38,-1.45l-0.12,-0.17l-2.91,-2.03l-0.39,0.04l-0.11,0.11l-0.42,-0.46l-0.11,-0.08l-1.49,-0.63l-1.09,-1.16Z",
        name: "Mexico"
    },
    VU: {
        path: "M839.92,325.66l0.78,0.73l-0.18,0.07l-0.6,-0.8ZM839.13,322.74l0.27,1.36l-0.13,-0.06l-0.21,-0.02l-0.29,0.08l-0.22,-0.43l-0.03,-1.32l0.61,0.4Z",
        name: "Vanuatu"
    },
    FR: {
        path: "M444.58,172.63l-0.68,1.92l-0.72,-0.38l-0.51,-1.79l0.43,-0.95l1.15,-0.83l0.33,2.04ZM429.71,147.03l1.77,1.57l0.26,0.07l1.16,-0.23l2.12,1.44l0.56,0.28l0.16,0.03l0.61,-0.06l1.09,0.78l0.13,0.05l3.18,0.53l-1.09,1.94l-0.3,2.16l-0.48,0.38l-1.0,-0.26l-0.37,0.32l0.07,0.66l-1.73,1.68l-0.09,0.21l-0.04,1.42l0.41,0.29l0.96,-0.4l0.67,1.07l-0.09,0.78l0.04,0.19l0.61,0.97l-0.71,0.78l-0.07,0.28l0.65,2.39l0.21,0.21l1.09,0.31l-0.2,0.95l-2.08,1.58l-4.81,-0.8l-0.13,0.01l-3.65,0.99l-0.22,0.24l-0.25,1.6l-2.59,0.35l-2.74,-1.33l-0.31,0.03l-0.79,0.57l-4.38,-1.31l-0.79,-0.94l1.16,-1.64l0.05,-0.15l0.48,-6.17l-0.06,-0.21l-2.58,-3.3l-1.89,-1.65l-0.11,-0.06l-3.64,-1.17l-0.2,-1.88l2.92,-0.63l4.14,0.82l0.35,-0.36l-0.65,-3.0l1.77,1.05l0.27,0.02l5.83,-2.54l0.17,-0.19l0.71,-2.54l1.75,-0.53l0.27,0.88l0.27,0.21l1.04,0.05l1.08,1.23ZM289.1,278.45l-0.85,0.84l-0.88,0.13l-0.25,-0.51l-0.21,-0.16l-0.56,-0.1l-0.25,0.07l-0.63,0.55l-0.62,-0.29l0.5,-0.88l0.21,-1.11l0.42,-1.05l-0.03,-0.28l-0.93,-1.42l-0.18,-1.54l1.13,-1.87l2.42,0.78l2.55,2.04l0.33,0.81l-1.4,2.16l-0.77,1.84Z",
        name: "France"
    },
    FI: {
        path: "M492.26,76.42l-0.38,3.12l0.12,0.28l3.6,2.69l-2.14,2.96l-0.01,0.33l2.83,4.61l-1.61,3.36l0.03,0.31l2.15,2.87l-0.96,2.44l0.1,0.35l3.51,2.55l-0.81,1.72l-2.28,2.19l-5.28,4.79l-4.51,0.31l-4.39,1.37l-3.87,0.75l-1.34,-1.89l-0.11,-0.09l-2.23,-1.14l0.53,-3.54l-0.01,-0.14l-1.17,-3.37l1.12,-2.13l2.23,-2.44l5.69,-4.33l1.65,-0.84l0.16,-0.31l-0.26,-1.73l-0.15,-0.22l-3.4,-1.91l-0.77,-1.47l-0.07,-6.45l-0.12,-0.24l-3.91,-2.94l-3.0,-1.92l0.97,-0.76l2.6,2.17l0.21,0.07l3.2,-0.21l2.63,1.03l0.3,-0.05l2.39,-1.94l0.09,-0.13l1.18,-3.12l3.63,-1.42l2.87,1.59l-0.98,2.87Z",
        name: "Finland"
    },
    FJ: {
        path: "M869.98,327.07l-1.31,0.44l-0.14,-0.41l0.96,-0.41l0.85,-0.17l1.43,-0.78l-0.16,0.65l-1.64,0.67ZM867.58,329.12l0.54,0.47l-0.31,1.0l-1.32,0.3l-1.13,-0.26l-0.17,-0.78l0.72,-0.66l0.98,0.27l0.25,-0.04l0.43,-0.29Z",
        name: "Fiji"
    },
    FK: {
        path: "M268.15,427.89l2.6,-1.73l1.98,0.77l0.31,-0.05l1.32,-1.17l1.58,1.18l-0.54,0.84l-3.1,0.92l-1.0,-1.04l-0.39,-0.04l-1.9,1.35l-0.86,-1.04Z",
        name: "Falkland Islands"
    },
    NI: {
        path: "M202.1,252.6l0.23,-0.0l0.12,-0.11l0.68,-0.09l0.22,-0.15l0.23,-0.43l0.2,-0.01l0.28,-0.31l-0.04,-0.97l0.29,-0.03l0.5,0.02l0.25,-0.11l0.37,-0.46l0.51,0.35l0.4,-0.06l0.23,-0.28l0.45,-0.29l0.87,-0.7l0.11,-0.21l0.02,-0.26l0.23,-0.12l0.25,-0.48l0.29,0.27l0.14,0.07l0.5,0.12l0.22,-0.03l0.48,-0.28l0.66,-0.02l0.87,-0.33l0.36,-0.32l0.21,0.01l-0.11,0.48l0.0,0.14l0.22,0.8l-0.54,0.85l-0.27,1.03l-0.09,1.18l0.14,0.72l0.05,0.95l-0.24,0.15l-0.13,0.19l-0.23,1.09l0.0,0.14l0.14,0.53l-0.42,0.53l-0.06,0.24l0.12,0.69l0.08,0.15l0.18,0.19l-0.26,0.23l-0.49,-0.11l-0.35,-0.44l-0.16,-0.1l-0.79,-0.21l-0.23,0.03l-0.45,0.26l-1.51,-0.62l-0.31,0.05l-0.17,0.15l-1.81,-1.62l-0.6,-0.9l-1.04,-0.79l-0.77,-0.71Z",
        name: "Nicaragua"
    },
    NL: {
        path: "M436.22,136.65l1.82,0.08l0.36,0.89l-0.6,2.96l-0.53,1.06l-1.32,0.0l-0.3,0.34l0.35,2.89l-0.83,-0.47l-1.56,-1.43l-0.29,-0.07l-2.26,0.67l-1.02,-0.15l0.68,-0.48l0.1,-0.12l2.14,-4.84l3.25,-1.35Z",
        name: "Netherlands"
    },
    NO: {
        path: "M491.45,67.31l7.06,3.0l-2.52,0.94l-0.11,0.49l2.43,2.49l-3.82,1.59l-1.48,0.3l0.89,-2.61l-0.14,-0.36l-3.21,-1.78l-0.25,-0.02l-3.89,1.52l-0.17,0.17l-1.2,3.17l-2.19,1.78l-2.53,-0.99l-0.13,-0.02l-3.15,0.21l-2.69,-2.25l-0.38,-0.01l-1.43,1.11l-1.47,0.17l-0.26,0.26l-0.33,2.57l-4.42,-0.65l-0.33,0.22l-0.6,2.19l-2.17,-0.01l-0.27,0.16l-4.15,7.68l-3.88,5.76l-0.0,0.33l0.81,1.23l-0.7,1.27l-2.3,-0.06l-0.28,0.18l-1.63,3.72l-0.02,0.13l0.15,5.17l0.07,0.18l1.51,1.84l-0.79,4.24l-2.04,2.5l-0.92,1.75l-1.39,-1.88l-0.44,-0.05l-4.89,4.21l-3.16,0.81l-3.24,-1.74l-0.86,-3.82l-0.78,-8.6l2.18,-2.36l6.56,-3.28l5.0,-4.16l4.63,-5.74l5.99,-8.09l4.17,-3.23l6.84,-5.49l5.39,-1.92l4.06,0.24l0.23,-0.09l3.72,-3.67l4.51,0.19l4.4,-0.89ZM484.58,19.95l4.42,1.82l-3.25,2.68l-7.14,0.65l-7.16,-0.91l-0.39,-1.37l-0.28,-0.22l-3.48,-0.1l-2.25,-2.15l7.09,-1.48l3.55,1.36l0.28,-0.03l2.42,-1.66l6.18,1.41ZM481.99,33.92l-4.73,1.85l-3.76,-1.06l1.27,-1.02l0.04,-0.43l-1.18,-1.35l4.46,-0.94l0.89,1.83l0.17,0.15l2.83,0.96ZM466.5,23.95l7.64,3.87l-5.63,1.94l-0.19,0.19l-1.35,3.88l-2.08,0.96l-0.16,0.19l-1.14,4.18l-2.71,0.18l-4.94,-2.95l1.95,-1.63l-0.08,-0.51l-3.7,-1.54l-4.79,-4.54l-1.78,-4.01l6.29,-1.88l1.25,1.81l0.25,0.13l3.57,-0.08l0.26,-0.17l0.87,-1.79l3.41,-0.18l3.08,1.94Z",
        name: "Norway"
    },
    NA: {
        path: "M461.88,357.98l-1.61,-1.77l-0.94,-1.9l-0.54,-2.58l-0.62,-1.95l-0.83,-4.05l-0.06,-3.13l-0.33,-1.5l-0.07,-0.14l-0.95,-1.06l-1.27,-2.12l-1.3,-3.1l-0.59,-1.71l-1.98,-2.46l-0.13,-1.67l0.99,-0.4l1.44,-0.42l1.48,0.07l1.42,1.11l0.31,0.03l0.32,-0.15l9.99,-0.11l1.66,1.18l0.16,0.06l6.06,0.37l4.69,-1.06l2.01,-0.57l1.5,0.14l0.63,0.37l-1.0,0.41l-0.7,0.01l-0.16,0.05l-1.38,0.88l-0.79,-0.88l-0.29,-0.09l-3.83,0.9l-1.84,0.08l-0.29,0.3l-0.07,8.99l-2.18,0.08l-0.29,0.3l-0.0,17.47l-2.04,1.27l-1.21,0.18l-1.51,-0.49l-0.99,-0.18l-0.36,-1.0l-0.1,-0.14l-0.99,-0.74l-0.4,0.04l-0.98,1.09Z",
        name: "Namibia"
    },
    NC: {
        path: "M835.87,338.68l2.06,1.63l1.01,0.94l-0.49,0.32l-1.21,-0.62l-1.76,-1.16l-1.58,-1.36l-1.61,-1.79l-0.16,-0.41l0.54,0.02l1.32,0.83l1.08,0.87l0.79,0.73Z",
        name: "New Caledonia"
    },
    NE: {
        path: "M426.67,254.17l0.03,-1.04l-0.24,-0.3l-2.66,-0.53l-0.06,-1.0l-0.07,-0.17l-1.37,-1.62l-0.3,-1.04l0.15,-0.94l1.37,-0.09l0.19,-0.09l0.85,-0.83l3.34,-0.22l2.22,-0.41l0.24,-0.26l0.2,-1.5l1.32,-1.65l0.07,-0.19l-0.01,-5.74l3.4,-1.13l7.24,-5.12l8.46,-4.95l3.76,1.08l1.35,1.39l0.36,0.05l1.39,-0.77l0.55,3.66l0.12,0.2l0.82,0.6l0.03,0.69l0.1,0.21l0.87,0.74l-0.47,0.99l-0.96,5.26l-0.13,3.25l-3.08,2.34l-0.1,0.15l-1.08,3.37l0.08,0.31l0.94,0.86l-0.01,1.51l0.29,0.3l1.25,0.05l-0.14,0.66l-0.51,0.11l-0.24,0.26l-0.06,0.57l-0.04,0.0l-1.59,-2.62l-0.21,-0.14l-0.59,-0.1l-0.23,0.05l-1.83,1.33l-1.79,-0.68l-1.42,-0.17l-0.17,0.03l-0.65,0.32l-1.39,-0.07l-0.19,0.06l-1.4,1.03l-1.12,0.05l-2.97,-1.29l-0.26,0.01l-1.12,0.59l-1.08,-0.04l-0.85,-0.88l-0.11,-0.07l-2.51,-0.95l-0.14,-0.02l-2.69,0.3l-0.16,0.07l-0.65,0.55l-0.1,0.16l-0.34,1.41l-0.69,0.98l-0.05,0.15l-0.13,1.72l-1.47,-1.13l-0.18,-0.06l-0.9,0.01l-0.2,0.08l-0.32,0.28Z",
        name: "Niger"
    },
    NG: {
        path: "M442.0,272.7l-2.4,0.83l-0.88,-0.12l-0.19,0.04l-0.89,0.52l-1.78,-0.05l-1.23,-1.44l-0.88,-1.87l-1.77,-1.66l-0.21,-0.08l-3.78,0.03l0.13,-3.75l-0.06,-1.58l0.44,-1.47l0.74,-0.75l1.21,-1.56l0.04,-0.29l-0.22,-0.56l0.44,-0.9l0.01,-0.24l-0.54,-1.44l0.26,-2.97l0.72,-1.06l0.33,-1.37l0.51,-0.43l2.53,-0.28l2.38,0.9l0.89,0.91l0.2,0.09l1.28,0.04l0.15,-0.03l1.06,-0.56l2.9,1.26l0.13,0.02l1.28,-0.06l0.16,-0.06l1.39,-1.02l1.36,0.07l0.15,-0.03l0.64,-0.32l1.22,0.13l1.9,0.73l0.28,-0.04l1.86,-1.35l0.33,0.06l1.62,2.67l0.29,0.14l0.32,-0.04l0.73,0.74l-0.19,0.37l-0.12,0.74l-2.03,1.89l-0.07,0.11l-0.66,1.62l-0.35,1.28l-0.48,0.51l-0.07,0.12l-0.48,1.67l-1.26,0.98l-0.1,0.15l-0.38,1.24l-0.58,1.07l-0.2,0.91l-1.43,0.7l-1.26,-0.93l-0.19,-0.06l-0.95,0.04l-0.2,0.09l-1.41,1.39l-0.61,0.02l-0.26,0.17l-1.19,2.42l-0.61,1.67Z",
        name: "Nigeria"
    },
    NZ: {
        path: "M857.9,379.62l1.85,3.1l0.33,0.14l0.22,-0.28l0.04,-1.41l0.57,0.4l0.35,2.06l0.17,0.22l2.02,0.94l1.78,0.26l0.22,-0.06l1.31,-1.01l0.84,0.22l-0.53,2.27l-0.67,1.5l-1.71,-0.05l-0.25,0.12l-0.67,0.89l-0.05,0.23l0.21,1.15l-0.31,0.46l-2.15,3.57l-1.6,0.99l-0.28,-0.51l-0.15,-0.13l-0.72,-0.3l1.27,-2.15l0.01,-0.29l-0.82,-1.63l-0.15,-0.14l-2.5,-1.09l0.05,-0.69l1.67,-0.94l0.15,-0.21l0.42,-2.24l-0.11,-1.95l-0.03,-0.12l-0.97,-1.85l0.05,-0.41l-0.09,-0.25l-1.18,-1.17l-1.94,-2.49l-0.86,-1.64l0.38,-0.09l1.24,1.43l0.12,0.08l1.81,0.68l0.67,2.39ZM853.93,393.55l0.57,1.24l0.44,0.12l1.51,-1.03l0.52,0.91l0.0,1.09l-0.88,1.31l-1.62,2.2l-1.26,1.2l-0.05,0.38l0.64,1.02l-1.4,0.03l-0.14,0.04l-2.14,1.16l-0.14,0.17l-0.67,2.0l-1.38,3.06l-3.07,2.19l-2.12,-0.06l-1.55,-0.99l-0.14,-0.05l-2.53,-0.2l-0.31,-0.84l1.25,-2.15l3.07,-2.97l1.62,-0.59l1.81,-1.17l2.18,-1.63l1.55,-1.65l1.08,-2.18l0.9,-0.72l0.11,-0.17l0.35,-1.56l1.37,-1.07l0.4,0.91Z",
        name: "New Zealand"
    },
    NP: {
        path: "M641.26,213.53l-0.14,0.95l0.32,1.64l-0.21,0.78l-1.83,0.04l-2.98,-0.62l-1.86,-0.25l-1.37,-1.3l-0.18,-0.08l-3.38,-0.34l-3.21,-1.49l-2.38,-1.34l-2.16,-0.92l0.84,-2.2l1.51,-1.18l0.89,-0.57l1.83,0.77l2.5,1.76l1.39,0.41l0.78,1.21l0.17,0.13l1.91,0.53l2.0,1.17l2.92,0.66l2.63,0.24Z",
        name: "Nepal"
    },
    CI: {
        path: "M413.53,272.08l-0.83,0.02l-1.79,-0.49l-1.64,0.03l-3.04,0.46l-1.73,0.72l-2.4,0.89l-0.12,-0.02l0.16,-1.7l0.19,-0.25l0.06,-0.2l-0.08,-0.99l-0.09,-0.19l-1.06,-1.05l-0.15,-0.08l-0.71,-0.15l-0.51,-0.48l0.45,-0.92l0.02,-0.19l-0.24,-1.16l0.07,-0.43l0.14,-0.0l0.3,-0.26l0.15,-1.1l-0.02,-0.15l-0.13,-0.34l0.09,-0.13l0.83,-0.27l0.19,-0.37l-0.62,-2.02l-0.55,-1.0l0.14,-0.59l0.35,-0.14l0.24,-0.16l0.53,0.29l0.14,0.04l1.93,0.02l0.26,-0.14l0.36,-0.58l0.39,0.01l0.43,-0.17l0.28,0.79l0.43,0.16l0.56,-0.31l0.89,-0.32l0.92,0.45l0.39,0.75l0.14,0.13l1.13,0.53l0.3,-0.03l0.81,-0.59l1.02,-0.08l1.49,0.57l0.62,3.33l-1.03,2.09l-0.65,2.84l0.02,0.2l1.05,2.08l-0.07,0.64Z",
        name: "Ivory Coast"
    },
    CH: {
        path: "M444.71,156.27l0.05,0.3l-0.34,0.69l0.13,0.4l1.13,0.58l1.07,0.1l-0.12,0.81l-0.87,0.42l-1.75,-0.37l-0.34,0.18l-0.47,1.1l-0.86,0.07l-0.33,-0.38l-0.41,-0.04l-1.34,1.01l-1.02,0.13l-0.93,-0.58l-0.82,-1.32l-0.37,-0.12l-0.77,0.32l0.02,-0.84l1.74,-1.69l0.09,-0.25l-0.04,-0.38l0.73,0.19l0.26,-0.06l0.6,-0.48l2.02,0.02l0.24,-0.12l0.38,-0.51l2.31,0.84Z",
        name: "Switzerland"
    },
    CO: {
        path: "M232.24,284.95l-0.94,-0.52l-1.22,-0.82l-0.31,-0.01l-0.62,0.35l-1.88,-0.31l-0.54,-0.95l-0.29,-0.15l-0.37,0.03l-2.34,-1.33l-0.15,-0.35l0.57,-0.11l0.24,-0.32l-0.1,-1.15l0.46,-0.71l1.11,-0.15l0.21,-0.13l1.05,-1.57l0.95,-1.31l-0.08,-0.43l-0.73,-0.47l0.4,-1.24l0.01,-0.16l-0.53,-2.15l0.44,-0.54l0.06,-0.24l-0.4,-2.13l-0.06,-0.13l-0.93,-1.22l0.21,-0.8l0.52,0.12l0.32,-0.13l0.47,-0.75l0.03,-0.27l-0.52,-1.32l0.09,-0.11l1.14,0.07l0.22,-0.08l1.82,-1.71l0.96,-0.25l0.22,-0.28l0.02,-0.81l0.43,-2.01l1.28,-1.04l1.48,-0.05l0.27,-0.19l0.12,-0.31l1.73,0.19l0.2,-0.05l1.96,-1.28l0.97,-0.56l1.16,-1.16l0.64,0.11l0.43,0.44l-0.31,0.55l-1.49,0.39l-0.19,0.16l-0.6,1.2l-0.97,0.74l-0.73,0.94l-0.06,0.13l-0.3,1.76l-0.68,1.44l0.23,0.43l1.1,0.14l0.27,0.97l0.08,0.13l0.49,0.49l0.17,0.85l-0.27,0.86l-0.01,0.14l0.09,0.53l0.2,0.23l0.52,0.18l0.54,0.79l0.27,0.13l3.18,-0.24l1.31,0.29l1.7,2.08l0.31,0.1l0.96,-0.26l1.75,0.13l1.41,-0.27l0.56,0.27l-0.36,1.07l-0.54,0.81l-0.05,0.13l-0.2,1.8l0.51,1.79l0.07,0.12l0.65,0.68l0.05,0.32l-1.16,1.14l0.05,0.47l0.86,0.52l0.6,0.79l0.31,1.01l-0.7,-0.81l-0.44,-0.01l-0.74,0.77l-4.75,-0.05l-0.3,0.31l0.03,1.57l0.25,0.29l1.2,0.21l-0.02,0.24l-0.1,-0.05l-0.22,-0.02l-1.41,0.41l-0.22,0.29l-0.01,1.82l0.11,0.23l1.04,0.85l0.35,1.3l-0.06,1.02l-1.02,6.26l-0.84,-0.89l-0.19,-0.09l-0.25,-0.02l1.35,-2.13l-0.1,-0.42l-1.92,-1.17l-0.2,-0.04l-1.41,0.2l-0.82,-0.39l-0.26,0.0l-1.29,0.62l-1.63,-0.27l-1.4,-2.5l-0.12,-0.12l-1.1,-0.61l-0.83,-1.2l-1.67,-1.19l-0.27,-0.04l-0.54,0.19Z",
        name: "Colombia"
    },
    CN: {
        path: "M740.32,148.94l0.22,0.21l4.3,1.03l2.84,2.2l0.99,2.92l0.28,0.2l3.8,0.0l0.15,-0.04l2.13,-1.24l3.5,-0.8l-1.05,2.29l-0.95,1.13l-0.06,0.12l-0.85,3.41l-1.56,2.81l-2.83,-0.51l-0.19,0.03l-2.15,1.09l-0.15,0.34l0.65,2.59l-0.33,3.3l-1.03,0.07l-0.28,0.3l0.01,0.75l-1.09,-1.2l-0.48,0.05l-0.94,1.6l-3.76,1.26l-0.2,0.36l0.29,1.19l-1.67,-0.08l-1.11,-0.88l-0.42,0.05l-1.69,2.08l-2.71,1.57l-2.04,1.88l-3.42,0.84l-0.11,0.05l-1.8,1.34l-1.54,0.46l0.52,-0.53l0.06,-0.33l-0.44,-0.96l1.84,-1.84l0.02,-0.41l-1.32,-1.56l-0.36,-0.08l-2.23,1.08l-2.83,2.06l-1.52,1.85l-2.32,0.13l-0.2,0.09l-1.28,1.37l-0.03,0.37l1.32,1.97l0.18,0.13l1.83,0.43l0.07,1.08l0.18,0.26l1.98,0.84l0.3,-0.03l2.66,-1.96l2.06,1.04l0.12,0.03l1.4,0.07l0.27,1.0l-3.24,0.73l-0.17,0.11l-1.13,1.5l-2.38,1.4l-0.1,0.1l-1.29,1.99l0.1,0.42l2.6,1.5l0.97,2.72l1.52,2.56l1.66,2.08l-0.03,1.76l-1.4,0.67l-0.15,0.38l0.6,1.47l0.13,0.15l1.29,0.75l-0.35,2.0l-0.58,1.96l-1.22,0.21l-0.2,0.14l-1.83,2.93l-2.02,3.51l-2.29,3.13l-3.4,2.42l-3.42,2.18l-2.75,0.3l-0.15,0.06l-1.32,1.01l-0.68,-0.67l-0.41,-0.01l-1.37,1.27l-3.42,1.28l-2.62,0.4l-0.24,0.21l-0.8,2.57l-0.95,0.11l-0.53,-1.54l0.52,-0.89l-0.19,-0.44l-3.36,-0.84l-0.17,0.01l-1.09,0.4l-2.36,-0.64l-1.0,-0.9l0.35,-1.34l-0.23,-0.37l-2.22,-0.47l-1.15,-0.94l-0.36,-0.02l-2.08,1.37l-2.35,0.29l-1.98,-0.01l-0.13,0.03l-1.32,0.63l-1.28,0.38l-0.21,0.33l0.33,2.65l-0.78,-0.04l-0.14,-0.39l-0.07,-1.04l-0.41,-0.26l-1.72,0.71l-0.96,-0.43l-1.63,-0.86l0.65,-1.95l-0.19,-0.38l-1.43,-0.46l-0.56,-2.27l-0.34,-0.22l-2.26,0.38l0.25,-2.65l2.29,-2.15l0.09,-0.2l0.1,-2.21l-0.07,-2.09l-0.15,-0.25l-1.02,-0.6l-0.8,-1.52l-0.31,-0.16l-1.42,0.2l-2.16,-0.32l0.55,-0.74l0.01,-0.35l-1.17,-1.7l-0.41,-0.08l-1.67,1.07l-1.97,-0.63l-0.25,0.03l-2.89,1.73l-2.26,1.99l-1.82,0.3l-1.0,-0.66l-0.15,-0.05l-1.28,-0.06l-1.75,-0.61l-0.24,0.02l-1.35,0.69l-0.1,0.08l-1.2,1.45l-0.14,-1.41l-0.4,-0.25l-1.46,0.55l-2.83,-0.26l-2.77,-0.61l-1.99,-1.17l-1.91,-0.54l-0.78,-1.21l-0.17,-0.13l-1.36,-0.38l-2.54,-1.79l-2.01,-0.84l-0.28,0.02l-0.89,0.56l-3.31,-1.83l-2.35,-1.67l-0.57,-2.49l1.34,0.28l0.36,-0.28l0.08,-1.42l-0.05,-0.19l-0.93,-1.34l0.24,-2.18l-0.07,-0.22l-2.69,-3.32l-0.15,-0.1l-3.97,-1.11l-0.69,-2.05l-0.11,-0.15l-1.79,-1.3l-0.39,-0.73l-0.36,-1.57l0.08,-1.09l-0.18,-0.3l-1.52,-0.66l-0.22,-0.01l-0.51,0.18l-0.52,-2.21l0.59,-0.55l0.06,-0.35l-0.22,-0.44l2.12,-1.24l1.63,-0.55l2.58,0.39l0.31,-0.16l0.87,-1.75l3.05,-0.34l0.21,-0.12l0.84,-1.12l3.87,-1.59l0.15,-0.14l0.35,-0.68l0.03,-0.17l-0.17,-1.51l1.52,-0.7l0.15,-0.39l-2.12,-5.0l4.62,-1.15l1.35,-0.72l0.14,-0.17l1.72,-5.37l4.7,0.99l0.28,-0.08l1.39,-1.43l0.08,-0.2l0.11,-2.95l1.83,-0.26l0.18,-0.1l1.85,-2.08l0.61,-0.17l0.57,1.97l0.1,0.15l2.2,1.75l3.48,1.17l1.59,2.36l-0.93,3.53l0.04,0.24l0.9,1.35l0.2,0.13l2.98,0.53l3.32,0.43l2.97,1.89l1.49,0.35l1.08,2.67l1.52,1.88l0.24,0.11l2.74,-0.07l5.15,0.67l3.36,-0.41l2.39,0.43l3.67,1.81l0.13,0.03l2.92,-0.0l1.02,0.86l0.34,0.03l2.88,-1.59l3.98,-1.03l3.81,-0.13l3.02,-1.12l1.77,-1.61l1.73,-1.01l0.13,-0.37l-0.41,-1.01l-0.72,-1.07l1.09,-1.66l1.21,0.24l2.57,0.63l0.24,-0.04l2.46,-1.62l3.78,-1.19l0.13,-0.09l1.8,-2.03l1.66,-0.84l3.54,-0.41l1.93,0.35l0.34,-0.22l0.27,-1.12l-0.08,-0.29l-2.27,-2.22l-2.08,-1.07l-0.29,0.01l-1.82,1.12l-2.36,-0.47l-0.14,0.01l-1.18,0.34l-0.46,-0.94l1.69,-3.08l1.1,-2.21l2.75,1.12l0.26,-0.02l3.53,-2.06l0.15,-0.26l-0.02,-1.35l2.18,-3.39l1.35,-1.04l0.12,-0.24l-0.03,-1.85l-0.15,-0.25l-1.0,-0.58l1.68,-1.37l3.01,-0.59l3.25,-0.09l3.67,0.99l2.08,1.18l1.51,3.3l0.95,1.45l0.85,1.99l0.92,3.19ZM697.0,237.37l-1.95,1.12l-1.74,-0.68l-0.06,-1.9l1.08,-1.03l2.62,-0.7l1.23,0.05l0.37,0.65l-1.01,1.08l-0.54,1.4Z",
        name: "China"
    },
    CM: {
        path: "M453.76,278.92l-0.26,-0.11l-0.18,-0.02l-1.42,0.31l-1.56,-0.33l-1.17,0.16l-3.7,-0.05l0.3,-1.63l-0.04,-0.21l-0.98,-1.66l-0.15,-0.13l-1.03,-0.38l-0.46,-1.01l-0.13,-0.14l-0.48,-0.27l0.02,-0.46l0.62,-1.72l1.1,-2.25l0.54,-0.02l0.2,-0.09l1.41,-1.39l0.73,-0.03l1.32,0.97l0.31,0.03l1.72,-0.85l0.16,-0.2l0.22,-1.0l0.57,-1.03l0.36,-1.18l1.26,-0.98l0.1,-0.15l0.49,-1.7l0.48,-0.51l0.07,-0.13l0.35,-1.3l0.63,-1.54l2.06,-1.92l0.09,-0.17l0.12,-0.79l0.24,-0.41l-0.04,-0.36l-0.89,-0.91l0.04,-0.45l0.28,-0.06l0.85,1.39l0.16,1.59l-0.09,1.66l0.04,0.17l1.09,1.84l-0.86,-0.02l-0.72,0.17l-1.07,-0.24l-0.34,0.17l-0.54,1.19l0.06,0.34l1.48,1.47l1.06,0.44l0.32,0.94l0.73,1.6l-0.32,0.57l-1.23,2.49l-0.54,0.41l-0.12,0.21l-0.19,1.95l0.24,1.08l-0.18,0.67l0.07,0.28l1.13,1.25l0.24,0.93l0.92,1.29l1.1,0.8l0.1,1.01l0.26,0.73l-0.12,0.93l-1.65,-0.49l-2.02,-0.66l-3.19,-0.11Z",
        name: "Cameroon"
    },
    CL: {
        path: "M246.8,429.1l-1.14,0.78l-2.25,1.21l-0.16,0.23l-0.37,2.94l-0.75,0.06l-2.72,-1.07l-2.83,-2.34l-3.06,-1.9l-0.71,-1.92l0.67,-1.84l-0.02,-0.25l-1.22,-2.13l-0.31,-5.41l1.02,-2.95l2.59,-2.4l-0.13,-0.51l-3.32,-0.8l2.06,-2.4l0.07,-0.15l0.79,-4.77l2.44,0.95l0.4,-0.22l1.31,-6.31l-0.16,-0.33l-1.68,-0.8l-0.42,0.21l-0.72,3.47l-1.01,-0.27l0.74,-4.06l0.85,-5.46l1.12,-1.96l0.03,-0.22l-0.71,-2.82l-0.19,-2.94l0.76,-0.07l0.26,-0.2l1.53,-4.62l1.73,-4.52l1.07,-4.2l-0.56,-4.2l0.73,-2.2l0.01,-0.12l-0.29,-3.3l1.46,-3.34l0.45,-5.19l0.8,-5.52l0.78,-5.89l-0.18,-4.33l-0.49,-3.47l1.1,-0.56l0.13,-0.13l0.44,-0.88l0.9,1.29l0.32,1.8l0.1,0.18l1.16,0.97l-0.73,2.33l0.01,0.21l1.33,2.91l0.97,3.6l0.35,0.22l1.57,-0.31l0.16,0.34l-0.79,2.51l-2.61,1.25l-0.17,0.28l0.08,4.36l-0.48,0.79l0.01,0.33l0.6,0.84l-1.62,1.55l-1.67,2.6l-0.89,2.47l-0.02,0.13l0.23,2.56l-1.5,2.76l-0.03,0.21l1.15,4.8l0.11,0.17l0.54,0.42l-0.01,2.37l-1.4,2.7l-0.03,0.15l0.06,2.25l-1.8,1.78l-0.09,0.21l0.02,2.73l0.71,2.63l-1.33,0.94l-0.12,0.17l-0.67,2.64l-0.59,3.03l0.4,3.55l-0.84,0.51l-0.14,0.31l0.58,3.5l0.08,0.16l0.96,0.99l-0.7,1.08l0.11,0.43l1.04,0.55l0.19,0.8l-0.89,0.48l-0.16,0.31l0.26,1.77l-0.89,4.06l-1.31,2.67l-0.03,0.19l0.28,1.53l-0.73,1.88l-1.85,1.37l-0.12,0.26l0.22,3.46l0.06,0.16l0.88,1.19l0.28,0.12l1.32,-0.17l-0.04,2.13l0.04,0.15l1.04,1.95l0.24,0.16l5.94,0.44ZM248.79,430.71l0.0,7.41l0.3,0.3l2.67,0.0l1.01,0.06l-0.54,0.91l-1.99,1.01l-1.13,-0.1l-1.42,-0.27l-1.87,-1.06l-2.57,-0.49l-3.09,-1.9l-2.52,-1.83l-2.65,-2.93l0.93,0.32l3.54,2.29l3.32,1.23l0.34,-0.09l1.29,-1.57l0.83,-2.32l2.11,-1.28l1.43,0.32Z",
        name: "Chile"
    },
    CA: {
        path: "M280.14,145.66l-1.66,2.88l0.06,0.37l0.37,0.03l1.5,-1.01l1.17,0.49l-0.64,0.83l0.13,0.46l2.22,0.89l0.28,-0.03l1.02,-0.7l2.09,0.83l-0.69,2.1l0.37,0.38l1.43,-0.45l0.27,1.43l0.74,1.88l-0.95,2.5l-0.88,0.09l-1.34,-0.48l0.49,-2.34l-0.14,-0.32l-0.7,-0.4l-0.36,0.04l-2.81,2.66l-0.63,-0.05l1.2,-1.01l-0.1,-0.52l-2.4,-0.77l-2.79,0.18l-4.65,-0.09l-0.22,-0.54l1.37,-0.99l0.01,-0.48l-0.82,-0.65l1.91,-1.79l2.57,-5.17l1.49,-1.81l2.04,-1.07l0.63,0.08l-0.27,0.51l-1.33,2.07ZM193.92,74.85l-0.01,4.24l0.19,0.28l0.33,-0.07l3.14,-3.22l2.65,2.5l-0.71,3.04l0.06,0.26l2.42,2.88l0.46,0.0l2.66,-3.14l1.83,-3.74l0.03,-0.12l0.13,-4.53l3.23,0.31l3.63,0.64l3.18,2.08l0.13,1.91l-1.79,2.22l-0.0,0.37l1.69,2.2l-0.28,1.8l-4.74,2.84l-3.33,0.62l-2.5,-1.21l-0.41,0.17l-0.73,2.05l-2.39,3.44l-0.74,1.78l-2.78,2.61l-3.48,0.26l-0.17,0.07l-1.98,1.68l-0.1,0.21l-0.15,2.33l-2.68,0.45l-0.17,0.09l-3.1,3.2l-2.75,4.38l-0.99,3.06l-0.14,4.31l0.25,0.31l3.5,0.58l1.07,3.24l1.18,2.76l0.34,0.18l3.43,-0.69l4.55,1.52l2.45,1.32l1.76,1.65l0.12,0.07l3.11,0.96l2.63,1.46l0.13,0.04l4.12,0.2l2.41,0.3l-0.36,2.81l0.8,3.51l1.81,3.78l0.08,0.1l3.73,3.17l0.34,0.03l1.93,-1.08l0.13,-0.15l1.35,-3.44l0.01,-0.18l-1.31,-5.38l-0.08,-0.14l-1.46,-1.5l3.68,-1.51l2.84,-2.46l1.45,-2.55l0.04,-0.17l-0.2,-2.39l-0.04,-0.12l-1.7,-3.07l-2.9,-2.64l2.79,-3.66l0.05,-0.27l-1.08,-3.38l-0.8,-5.75l1.45,-0.75l4.18,1.03l2.6,0.38l0.18,-0.03l1.93,-0.95l2.18,1.23l3.01,2.18l0.73,1.42l0.25,0.16l4.18,0.27l-0.06,2.95l0.83,4.7l0.22,0.24l2.19,0.55l1.75,2.08l0.38,0.07l3.63,-2.03l0.11,-0.11l2.38,-4.06l1.36,-1.43l1.76,3.01l3.26,4.68l2.68,4.19l-0.94,2.09l0.12,0.38l3.31,1.98l2.23,1.98l0.13,0.07l3.94,0.89l1.48,1.02l0.96,2.82l0.22,0.2l1.85,0.43l0.88,1.13l0.17,3.53l-1.68,1.16l-1.76,1.14l-4.08,1.17l-0.11,0.06l-3.08,2.65l-4.11,0.52l-5.35,-0.69l-3.76,-0.02l-2.62,0.23l-0.2,0.1l-2.05,2.29l-3.13,1.41l-0.11,0.08l-3.6,4.24l-2.87,2.92l-0.05,0.36l0.33,0.14l2.13,-0.52l0.15,-0.08l3.98,-4.15l5.16,-2.63l3.58,-0.31l1.82,1.3l-2.09,1.91l-0.09,0.29l0.8,3.46l0.82,2.37l0.15,0.17l3.25,1.56l0.16,0.03l4.14,-0.45l0.21,-0.12l2.03,-2.86l0.11,1.46l0.13,0.22l1.26,0.88l-2.7,1.78l-5.51,1.83l-2.52,1.26l-2.75,2.16l-1.52,-0.18l-0.08,-2.16l4.19,-2.47l0.14,-0.34l-0.3,-0.22l-4.01,0.1l-2.66,0.36l-1.45,-1.56l0.0,-4.16l-0.11,-0.23l-1.11,-0.91l-0.28,-0.05l-1.5,0.48l-0.7,-0.7l-0.45,0.02l-1.91,2.39l-0.8,2.5l-0.82,1.31l-0.95,0.43l-0.77,0.15l-0.23,0.2l-0.18,0.56l-8.2,0.02l-0.13,0.03l-1.19,0.61l-2.95,2.45l-0.78,1.13l-4.6,0.01l-0.12,0.02l-1.13,0.48l-0.13,0.44l0.37,0.55l0.2,0.82l-0.01,0.09l-3.1,1.42l-2.63,0.5l-2.84,1.57l-0.47,0.0l-0.72,-0.4l-0.18,-0.27l0.03,-0.15l0.52,-1.0l1.2,-1.71l0.73,-1.8l0.02,-0.17l-1.03,-5.47l-0.15,-0.21l-2.35,-1.32l0.16,-0.29l-0.05,-0.35l-0.37,-0.38l-0.22,-0.09l-0.56,0.0l-0.35,-0.34l-0.11,-0.65l-0.46,-0.2l-0.39,0.26l-0.2,-0.03l-0.11,-0.33l-0.48,-0.25l-0.21,-0.71l-0.15,-0.18l-3.97,-2.07l-4.8,-2.39l-0.25,-0.01l-2.19,0.89l-0.72,0.03l-3.04,-0.82l-0.14,-0.0l-1.94,0.4l-2.4,-0.98l-2.56,-0.51l-1.7,-0.19l-0.62,-0.44l-0.42,-1.67l-0.3,-0.23l-0.85,0.02l-0.29,0.3l-0.01,0.95l-69.26,-0.01l-4.77,-3.14l-1.78,-1.41l-4.51,-1.38l-1.3,-2.73l0.34,-1.96l-0.17,-0.33l-3.06,-1.37l-0.41,-2.58l-0.11,-0.18l-2.92,-2.4l-0.05,-1.53l1.32,-1.59l0.07,-0.2l-0.07,-2.21l-0.16,-0.26l-4.19,-2.22l-2.52,-4.02l-1.56,-2.6l-0.08,-0.09l-2.28,-1.64l-1.65,-1.48l-1.31,-1.89l-0.38,-0.1l-2.51,1.21l-2.28,1.92l-2.03,-2.22l-1.85,-1.71l-2.44,-1.04l-2.28,-0.12l0.03,-37.72l4.27,0.98l4.0,2.13l2.61,0.4l0.24,-0.07l2.17,-1.81l2.92,-1.33l3.63,0.53l0.18,-0.03l3.72,-1.94l3.89,-1.06l1.6,1.72l0.37,0.06l1.87,-1.04l0.14,-0.19l0.48,-1.83l1.37,0.38l4.18,3.96l0.41,0.0l2.89,-2.62l0.28,2.79l0.37,0.26l3.08,-0.73l0.17,-0.12l0.85,-1.16l2.81,0.24l3.83,1.86l5.86,1.61l3.46,0.75l2.44,-0.26l2.89,1.89l-3.12,1.89l-0.14,0.31l0.24,0.24l4.53,0.92l6.84,-0.5l2.04,-0.71l2.54,2.44l0.39,0.02l2.72,-2.16l-0.01,-0.48l-2.26,-1.61l1.27,-1.16l2.94,-0.19l1.94,-0.42l1.89,0.97l2.49,2.32l0.24,0.08l2.71,-0.33l4.35,1.9l0.17,0.02l3.86,-0.67l3.62,0.1l0.31,-0.33l-0.26,-2.44l1.9,-0.65l3.58,1.36l-0.01,3.84l0.23,0.29l0.34,-0.17l1.51,-3.23l1.81,0.1l0.31,-0.22l1.13,-4.37l-0.08,-0.29l-2.68,-2.73l-2.83,-1.76l0.19,-4.73l2.77,-3.15l3.06,0.69l2.44,1.97l3.24,4.88l-2.05,2.02l0.15,0.51l4.41,0.85ZM265.85,150.7l-0.84,0.04l-3.15,-0.99l-1.77,-1.17l0.19,-0.06l3.17,0.79l2.39,1.27l0.01,0.12ZM249.41,3.71l6.68,0.49l5.34,0.79l4.34,1.6l-0.08,1.24l-5.91,2.56l-6.03,1.21l-2.36,1.38l-0.14,0.34l0.29,0.22l4.37,-0.02l-4.96,3.01l-4.06,1.64l-0.11,0.08l-4.21,4.62l-5.07,0.92l-0.12,0.05l-1.53,1.1l-7.5,0.59l-0.28,0.28l0.24,0.31l2.67,0.54l-1.04,0.6l-0.09,0.44l1.89,2.49l-2.11,1.66l-3.83,1.52l-0.15,0.13l-1.14,2.01l-3.41,1.55l-0.16,0.36l0.35,1.19l0.3,0.22l3.98,-0.19l0.03,0.78l-6.42,2.99l-6.44,-1.41l-7.41,0.79l-3.72,-0.62l-4.48,-0.26l-0.25,-2.0l4.37,-1.13l0.21,-0.38l-1.14,-3.55l1.13,-0.28l6.61,2.29l0.35,-0.12l-0.04,-0.37l-3.41,-3.45l-0.14,-0.08l-3.57,-0.92l1.62,-1.7l4.36,-1.3l0.2,-0.18l0.71,-1.94l-0.12,-0.36l-3.45,-2.15l-0.88,-2.43l6.36,0.23l1.94,0.61l0.23,-0.02l3.91,-2.1l0.15,-0.32l-0.26,-0.24l-5.69,-0.67l-8.69,0.37l-4.3,-1.92l-2.12,-2.39l-2.82,-1.68l-0.44,-1.65l3.41,-1.06l2.93,-0.2l4.91,-0.99l3.69,-2.28l2.93,0.31l2.64,1.68l0.42,-0.1l1.84,-3.23l3.17,-0.96l4.45,-0.69l7.56,-0.26l1.26,0.64l0.18,0.03l7.2,-1.06l10.81,0.8ZM203.94,57.59l0.01,0.32l1.97,2.97l0.51,-0.01l2.26,-3.75l6.05,-1.89l4.08,4.72l-0.36,2.95l0.38,0.33l4.95,-1.36l0.11,-0.05l2.23,-1.77l5.37,2.31l3.32,2.14l0.3,1.89l0.36,0.25l4.48,-1.01l2.49,2.8l0.14,0.09l5.99,1.78l2.09,1.74l2.18,3.83l-4.29,1.91l-0.01,0.54l5.9,2.83l3.95,0.94l3.54,3.84l0.2,0.1l3.58,0.25l-0.67,2.51l-4.18,4.54l-2.84,-1.61l-3.91,-3.95l-0.26,-0.09l-3.24,0.52l-0.25,0.26l-0.32,2.37l0.1,0.26l2.63,2.38l3.42,1.89l0.96,1.0l1.57,3.8l-0.74,2.43l-2.85,-0.96l-6.26,-3.15l-0.38,0.09l0.04,0.39l3.54,3.4l2.55,2.31l0.23,0.78l-6.26,-1.43l-5.33,-2.25l-2.73,-1.73l0.67,-0.86l-0.09,-0.45l-7.38,-4.01l-0.44,0.27l0.03,0.89l-6.85,0.61l-1.8,-1.17l1.43,-2.6l4.56,-0.07l5.15,-0.52l0.23,-0.45l-0.76,-1.34l0.8,-1.89l3.21,-4.06l0.05,-0.29l-0.72,-1.95l-0.97,-1.47l-0.11,-0.1l-3.84,-2.1l-4.53,-1.33l1.09,-0.75l0.05,-0.45l-2.65,-2.75l-0.18,-0.09l-2.12,-0.24l-1.91,-1.47l-0.39,0.02l-1.27,1.25l-4.4,0.56l-9.06,-0.99l-5.28,-1.31l-4.01,-0.67l-1.72,-1.31l2.32,-1.85l0.1,-0.33l-0.28,-0.2l-3.3,-0.02l-0.74,-4.36l1.86,-4.09l2.46,-1.88l5.74,-1.15l-1.5,2.55ZM261.28,159.28l0.19,0.14l1.82,0.42l1.66,-0.05l-0.66,0.68l-0.75,0.16l-3.0,-1.25l-0.46,-0.77l0.51,-0.52l0.68,1.19ZM230.87,84.48l-2.48,0.19l-0.52,-1.74l0.96,-2.17l2.03,-0.53l1.71,1.04l0.02,1.6l-0.22,0.46l-1.5,1.16ZM229.52,58.19l0.14,0.82l-4.99,-0.22l-2.73,0.63l-0.59,-0.23l-2.61,-2.4l0.08,-1.38l0.94,-0.25l5.61,0.51l4.14,2.54ZM222.12,105.0l-0.79,1.63l-0.75,-0.22l-0.52,-0.91l0.04,-0.09l0.84,-1.01l0.74,0.06l0.44,0.55ZM183.77,38.22l2.72,1.65l0.16,0.04l4.83,-0.01l1.92,1.52l-0.51,1.75l0.18,0.36l2.84,1.14l1.56,1.19l0.16,0.06l3.37,0.22l3.65,0.42l4.07,-1.1l5.05,-0.43l3.96,0.35l2.53,1.8l0.48,1.79l-1.37,1.16l-3.6,1.03l-3.22,-0.59l-7.17,0.76l-5.1,0.09l-4.0,-0.6l-6.48,-1.56l-0.81,-2.57l-0.3,-2.49l-0.1,-0.19l-2.51,-2.25l-0.16,-0.07l-5.12,-0.63l-2.61,-1.45l0.75,-1.71l4.88,0.32ZM207.46,91.26l0.42,1.62l0.42,0.19l1.12,-0.55l1.35,0.99l2.74,1.39l2.73,1.2l0.2,1.74l0.35,0.26l1.72,-0.29l1.31,0.97l-1.72,0.96l-3.68,-0.9l-1.34,-1.71l-0.43,-0.04l-2.46,2.1l-3.23,1.85l-0.74,-1.98l-0.31,-0.19l-2.47,0.28l1.49,-1.34l0.1,-0.19l0.32,-3.15l0.79,-3.45l1.34,0.25ZM215.59,102.66l-2.73,2.0l-1.49,-0.08l-0.37,-0.7l1.61,-1.56l3.0,0.03l-0.02,0.3ZM202.79,24.07l0.11,0.12l2.54,1.53l-3.01,1.47l-4.55,4.07l-4.3,0.38l-5.07,-0.68l-2.51,-2.09l0.03,-1.72l1.86,-1.4l0.1,-0.34l-0.29,-0.2l-4.49,0.04l-2.63,-1.79l-1.45,-2.36l1.61,-2.38l1.65,-1.69l2.47,-0.4l0.19,-0.48l-0.72,-0.89l5.1,-0.26l3.1,3.05l0.13,0.07l4.21,1.25l3.99,1.06l1.92,3.65ZM187.5,59.3l-0.15,0.1l-2.59,3.4l-2.5,-0.15l-1.47,-3.92l0.04,-2.24l1.22,-1.92l2.34,-1.26l5.11,0.17l4.28,1.06l-3.36,3.86l-2.9,0.9ZM186.19,48.8l-1.15,1.63l-3.42,-0.35l-2.68,-1.15l1.11,-1.88l3.34,-1.27l2.01,1.63l0.79,1.38ZM185.78,35.41l-0.95,0.13l-4.48,-0.33l-0.4,-0.91l4.5,0.07l1.45,0.82l-0.1,0.21ZM180.76,32.56l-3.43,1.03l-1.85,-1.14l-1.01,-1.92l-0.16,-1.87l2.87,0.2l1.39,0.35l2.75,1.75l-0.55,1.6ZM181.03,76.32l-1.21,1.2l-3.19,-1.26l-0.18,-0.01l-1.92,0.45l-2.88,-1.67l1.84,-1.16l1.6,-1.77l2.45,1.17l1.45,0.77l2.05,2.28ZM169.72,54.76l2.83,0.97l0.14,0.01l4.25,-0.58l0.47,1.01l-2.19,2.16l0.07,0.48l3.61,1.95l-0.41,3.84l-3.87,1.68l-2.23,-0.36l-1.73,-1.75l-6.07,-3.53l0.03,-1.01l4.79,0.55l0.3,-0.16l-0.04,-0.34l-2.55,-2.89l2.59,-2.05ZM174.44,40.56l1.49,1.87l0.07,2.48l-1.07,3.52l-3.87,0.48l-2.41,-0.72l0.05,-2.72l-0.33,-0.3l-3.79,0.36l-0.13,-3.31l2.36,0.14l0.15,-0.03l3.7,-1.74l3.44,0.29l0.31,-0.22l0.03,-0.12ZM170.14,31.5l0.75,1.74l-3.52,-0.52l-4.19,-1.77l-4.65,-0.17l1.65,-1.11l-0.05,-0.52l-2.86,-1.26l-0.13,-1.58l4.52,0.7l6.66,1.99l1.84,2.5ZM134.64,58.08l-1.08,1.93l0.34,0.44l5.44,-1.41l3.37,2.32l0.37,-0.02l2.66,-2.28l2.03,1.38l2.01,4.53l0.53,0.04l1.26,-1.93l0.03,-0.27l-1.67,-4.55l1.82,-0.58l2.36,0.73l2.69,1.84l1.53,4.46l0.77,3.24l0.15,0.19l4.22,2.26l4.32,2.04l-0.21,1.51l-3.87,0.34l-0.19,0.5l1.45,1.54l-0.65,1.23l-4.3,-0.65l-4.4,-1.19l-2.97,0.28l-4.67,1.48l-6.31,0.65l-4.27,0.39l-1.26,-1.91l-0.15,-0.12l-3.42,-1.2l-0.16,-0.01l-2.05,0.45l-2.66,-3.02l1.2,-0.34l3.82,-0.76l3.58,0.19l3.27,-0.78l0.23,-0.29l-0.24,-0.29l-4.84,-1.06l-5.42,0.35l-3.4,-0.09l-0.97,-1.22l5.39,-1.7l0.21,-0.33l-0.3,-0.25l-3.82,0.06l-3.95,-1.1l1.88,-3.13l1.68,-1.81l6.54,-2.84l2.11,0.77ZM158.85,56.58l-1.82,2.62l-3.38,-2.9l0.49,-0.39l3.17,-0.18l1.54,0.86ZM149.71,42.7l1.0,1.87l0.37,0.14l2.17,-0.83l2.33,0.2l0.38,2.16l-1.38,2.17l-8.33,0.76l-6.34,2.15l-3.51,0.1l-0.22,-1.13l4.98,-2.12l0.17,-0.34l-0.31,-0.23l-11.27,0.6l-3.04,-0.78l3.14,-4.57l2.2,-1.35l6.87,1.7l4.4,3.0l0.14,0.05l4.37,0.39l0.27,-0.48l-3.41,-4.68l1.96,-1.62l2.28,0.53l0.79,2.32ZM145.44,29.83l-2.18,0.77l-3.79,-0.0l0.02,-0.31l2.34,-1.5l1.2,0.23l2.42,0.83ZM144.83,34.5l-4.44,1.46l-3.18,-1.48l1.6,-1.36l3.51,-0.53l3.1,0.75l-0.6,1.16ZM119.02,65.87l-6.17,2.07l-1.19,-1.82l-0.13,-0.11l-5.48,-2.32l0.92,-1.7l1.73,-3.44l2.16,-3.15l-0.02,-0.36l-2.09,-2.56l7.84,-0.71l3.59,1.02l6.32,0.27l2.35,1.37l2.25,1.71l-2.68,1.04l-6.21,3.41l-3.1,3.28l-0.08,0.21l0.0,1.81ZM129.66,35.4l-0.3,3.55l-1.77,1.67l-2.34,0.27l-4.62,2.2l-3.89,0.76l-2.83,-0.93l3.85,-3.52l5.04,-3.36l3.75,0.07l3.11,-0.7ZM111.24,152.74l-0.82,0.29l-3.92,-1.39l-0.7,-1.06l-0.12,-0.1l-2.15,-1.09l-0.41,-0.84l-0.2,-0.16l-2.44,-0.56l-0.84,-1.56l0.1,-0.36l2.34,0.64l1.53,0.5l2.28,0.34l0.78,1.04l1.24,1.55l0.09,0.08l2.42,1.3l0.81,1.39ZM88.54,134.82l0.14,0.02l2.0,-0.23l-0.67,3.48l0.06,0.24l1.78,2.22l-0.24,-0.0l-1.4,-1.42l-0.91,-1.53l-1.26,-1.08l-0.42,-1.35l0.09,-0.66l0.82,0.31Z",
        name: "Canada"
    },
    CG: {
        path: "M453.66,296.61l-0.9,-0.82l-0.35,-0.04l-0.83,0.48l-0.77,0.83l-1.65,-2.13l1.66,-1.2l0.08,-0.39l-0.81,-1.43l0.59,-0.43l1.62,-0.29l0.24,-0.24l0.1,-0.58l0.94,0.84l0.19,0.08l2.21,0.11l0.27,-0.14l0.81,-1.29l0.32,-1.76l-0.27,-1.96l-0.06,-0.15l-1.08,-1.35l1.02,-2.74l-0.09,-0.34l-0.62,-0.5l-0.22,-0.06l-1.66,0.18l-0.55,-1.03l0.12,-0.73l2.85,0.09l1.98,0.65l2.0,0.59l0.38,-0.25l0.17,-1.3l1.26,-2.24l1.34,-1.19l1.54,0.38l1.35,0.12l-0.11,1.15l-0.74,1.34l-0.5,1.61l-0.31,2.22l0.12,1.41l-0.4,0.9l-0.06,0.88l-0.24,0.67l-1.57,1.15l-1.24,1.41l-1.09,2.43l-0.03,0.13l0.08,1.95l-0.55,0.69l-1.46,1.23l-1.32,1.41l-0.61,-0.29l-0.13,-0.57l-0.29,-0.23l-1.36,-0.02l-0.23,0.1l-0.72,0.81l-0.41,-0.16Z",
        name: "Republic of the Congo"
    },
    CF: {
        path: "M459.41,266.56l1.9,-0.17l0.22,-0.12l0.36,-0.5l0.14,0.02l0.55,0.51l0.29,0.07l3.15,-0.96l0.12,-0.07l1.05,-0.97l1.29,-0.87l0.12,-0.33l-0.17,-0.61l0.38,-0.12l2.36,0.15l0.15,-0.03l2.36,-1.17l0.12,-0.1l1.78,-2.72l1.18,-0.96l1.23,-0.34l0.21,0.79l0.07,0.13l1.37,1.5l0.01,0.86l-0.39,1.0l-0.01,0.17l0.16,0.78l0.1,0.17l0.91,0.76l1.89,1.09l1.24,0.92l0.02,0.67l0.12,0.23l1.67,1.3l0.99,1.03l0.61,1.46l0.14,0.15l1.79,0.95l0.2,0.4l-0.44,0.14l-1.54,-0.06l-1.98,-0.26l-0.93,0.22l-0.19,0.14l-0.3,0.48l-0.57,0.05l-0.91,-0.49l-0.26,-0.01l-2.7,1.21l-1.04,-0.23l-0.21,0.03l-0.34,0.19l-0.12,0.13l-0.64,1.3l-1.67,-0.43l-1.77,-0.24l-1.58,-0.91l-2.06,-0.85l-0.27,0.02l-1.42,0.88l-0.97,1.27l-0.06,0.14l-0.19,1.46l-1.3,-0.11l-1.67,-0.42l-0.27,0.07l-1.55,1.41l-0.99,1.76l-0.14,-1.18l-0.13,-0.22l-1.1,-0.78l-0.86,-1.2l-0.2,-0.84l-0.07,-0.13l-1.07,-1.19l0.16,-0.59l0.0,-0.15l-0.24,-1.01l0.18,-1.77l0.5,-0.38l0.09,-0.11l1.18,-2.4Z",
        name: "Central African Republic"
    },
    CD: {
        path: "M497.85,276.25l-0.14,2.77l0.2,0.3l0.57,0.19l-0.47,0.52l-1.0,0.71l-0.96,1.31l-0.56,1.22l-0.16,2.04l-0.54,0.89l-0.04,0.15l-0.02,1.76l-0.63,0.61l-0.09,0.2l-0.08,1.33l-0.2,0.11l-0.15,0.21l-0.23,1.37l0.03,0.2l0.6,1.08l0.16,2.96l0.44,2.29l-0.24,1.25l0.01,0.15l0.5,1.46l0.07,0.12l1.41,1.37l1.09,2.56l-0.51,-0.11l-3.45,0.45l-0.67,0.3l-0.15,0.15l-0.71,1.61l0.01,0.26l0.52,1.03l-0.43,2.9l-0.31,2.55l0.13,0.29l0.7,0.46l1.75,0.99l0.31,-0.01l0.26,-0.17l0.15,1.9l-1.44,-0.02l-0.94,-1.28l-0.94,-1.1l-0.17,-0.1l-1.76,-0.33l-0.5,-1.18l-0.42,-0.15l-1.44,0.75l-1.79,-0.32l-0.77,-1.05l-0.2,-0.12l-1.59,-0.23l-0.97,0.04l-0.1,-0.53l-0.27,-0.25l-0.86,-0.06l-1.13,-0.15l-1.62,0.37l-1.04,-0.06l-0.32,0.09l0.11,-2.56l-0.08,-0.21l-0.77,-0.87l-0.17,-1.41l0.36,-1.47l-0.03,-0.21l-0.48,-0.91l-0.04,-1.52l-0.3,-0.29l-2.65,0.02l0.13,-0.53l-0.29,-0.37l-1.28,0.01l-0.28,0.21l-0.07,0.24l-1.35,0.09l-0.26,0.18l-0.62,1.45l-0.25,0.42l-1.17,-0.3l-0.19,0.01l-0.79,0.34l-1.44,0.18l-1.41,-1.96l-0.7,-1.47l-0.61,-1.86l-0.28,-0.21l-7.39,-0.03l-0.92,0.3l-0.78,-0.03l-0.78,0.25l-0.11,-0.25l0.35,-0.15l0.18,-0.26l0.07,-1.02l0.33,-0.52l0.72,-0.42l0.52,0.2l0.33,-0.08l0.76,-0.86l0.99,0.02l0.11,0.48l0.16,0.2l0.94,0.44l0.35,-0.07l1.46,-1.56l1.44,-1.21l0.68,-0.85l0.06,-0.2l-0.08,-1.99l1.04,-2.33l1.1,-1.23l1.62,-1.19l0.11,-0.14l0.29,-0.8l0.08,-0.94l0.38,-0.82l0.03,-0.16l-0.13,-1.38l0.3,-2.16l0.47,-1.51l0.73,-1.31l0.04,-0.12l0.15,-1.51l0.21,-1.66l0.89,-1.16l1.16,-0.7l1.9,0.79l1.69,0.95l1.81,0.24l1.85,0.48l0.35,-0.16l0.71,-1.43l0.16,-0.09l1.03,0.23l0.19,-0.02l2.65,-1.19l0.86,0.46l0.17,0.03l0.81,-0.08l0.23,-0.14l0.31,-0.5l0.75,-0.17l1.83,0.26l1.64,0.06l0.72,-0.21l1.39,1.9l0.16,0.11l1.12,0.3l0.24,-0.04l0.58,-0.36l1.05,0.15l0.15,-0.02l1.15,-0.44l0.47,0.84l0.08,0.09l2.08,1.57Z",
        name: "Democratic Republic of the Congo"
    },
    CZ: {
        path: "M463.29,152.22l-0.88,-0.47l-0.18,-0.03l-1.08,0.15l-1.86,-0.94l-0.21,-0.02l-0.88,0.24l-0.13,0.07l-1.25,1.17l-1.63,-0.91l-1.38,-1.36l-1.22,-0.75l-0.24,-1.24l-0.33,-0.75l1.53,-0.6l0.98,-0.84l1.74,-0.62l0.11,-0.07l0.47,-0.47l0.46,0.27l0.24,0.03l0.96,-0.3l1.06,0.95l0.15,0.07l1.57,0.24l-0.1,0.6l0.16,0.32l1.36,0.68l0.41,-0.15l0.28,-0.62l1.29,0.28l0.19,0.84l0.26,0.23l1.73,0.18l0.74,1.02l-0.17,0.0l-0.25,0.13l-0.32,0.49l-0.46,0.11l-0.22,0.23l-0.13,0.57l-0.32,0.1l-0.2,0.22l-0.03,0.14l-0.65,0.25l-1.05,-0.05l-0.28,0.17l-0.22,0.43Z",
        name: "Czech Republic"
    },
    CY: {
        path: "M505.03,193.75l-1.51,0.68l-1.0,-0.3l-0.32,-0.63l0.69,-0.06l0.41,0.13l0.19,-0.0l0.62,-0.22l0.31,0.02l0.06,0.22l0.49,0.17l0.06,-0.01Z",
        name: "Cyprus"
    },
    CR: {
        path: "M213.0,263.84l-0.98,-0.4l-0.3,-0.31l0.16,-0.24l0.05,-0.21l-0.09,-0.56l-0.1,-0.18l-0.76,-0.65l-0.99,-0.5l-0.74,-0.28l-0.13,-0.58l-0.12,-0.18l-0.66,-0.45l-0.34,-0.0l-0.13,0.31l0.13,0.59l-0.17,0.21l-0.34,-0.42l-0.14,-0.1l-0.7,-0.22l-0.23,-0.34l0.01,-0.62l0.31,-0.74l-0.14,-0.38l-0.3,-0.15l0.47,-0.4l1.48,0.6l0.26,-0.02l0.47,-0.27l0.58,0.15l0.35,0.44l0.17,0.11l0.74,0.17l0.27,-0.07l0.3,-0.27l0.52,1.09l0.97,1.02l0.77,0.71l-0.41,0.1l-0.23,0.3l0.01,1.02l0.12,0.24l0.2,0.14l-0.07,0.05l-0.11,0.3l0.08,0.37l-0.23,0.63Z",
        name: "Costa Rica"
    },
    CU: {
        path: "M215.01,226.09l2.08,0.18l1.94,0.03l2.24,0.86l0.95,0.92l0.25,0.08l2.22,-0.28l0.79,0.55l3.68,2.81l0.19,0.06l0.77,-0.03l1.18,0.42l-0.12,0.47l0.27,0.37l1.78,0.1l1.59,0.9l-0.11,0.22l-1.5,0.3l-1.64,0.13l-1.75,-0.2l-2.69,0.19l1.0,-0.86l-0.03,-0.48l-1.02,-0.68l-0.13,-0.05l-1.52,-0.16l-0.74,-0.64l-0.57,-1.42l-0.3,-0.19l-1.36,0.1l-2.23,-0.67l-0.71,-0.52l-0.14,-0.06l-3.2,-0.4l-0.42,-0.25l0.56,-0.39l0.12,-0.33l-0.27,-0.22l-2.46,-0.13l-0.2,0.06l-1.72,1.31l-0.94,0.03l-0.25,0.15l-0.29,0.53l-1.04,0.24l-0.29,-0.07l0.7,-0.43l0.1,-0.11l0.5,-0.87l1.04,-0.54l1.23,-0.49l1.86,-0.25l0.62,-0.28Z",
        name: "Cuba"
    },
    SZ: {
        path: "M500.95,353.41l-0.41,0.97l-1.16,0.23l-1.29,-1.26l-0.02,-0.71l0.63,-0.93l0.23,-0.7l0.47,-0.12l1.04,0.4l0.32,1.05l0.2,1.08Z",
        name: "Swaziland"
    },
    SY: {
        path: "M510.84,199.83l0.09,-0.11l0.07,-0.2l-0.04,-1.08l0.56,-1.4l1.3,-1.01l0.1,-0.34l-0.41,-1.11l-0.24,-0.19l-0.89,-0.11l-0.2,-1.84l0.55,-1.05l1.3,-1.22l0.09,-0.19l0.09,-1.09l0.39,0.27l0.25,0.04l2.66,-0.77l1.35,0.52l2.06,-0.01l2.93,-1.08l1.35,0.04l2.14,-0.34l-0.83,1.16l-1.31,0.68l-0.16,0.3l0.23,2.03l-0.9,3.25l-5.43,2.87l-4.79,2.91l-2.32,-0.92Z",
        name: "Syria"
    },
    KG: {
        path: "M599.04,172.15l0.38,-0.9l1.43,-0.37l4.04,1.02l0.37,-0.23l0.36,-1.64l1.17,-0.52l3.45,1.24l0.2,-0.0l0.86,-0.31l4.09,0.08l3.61,0.31l1.18,1.02l0.11,0.06l1.19,0.34l-0.13,0.26l-3.84,1.58l-0.13,0.1l-0.81,1.08l-3.08,0.34l-0.24,0.16l-0.85,1.7l-2.43,-0.37l-0.14,0.01l-1.79,0.61l-2.39,1.4l-0.12,0.39l0.25,0.49l-0.48,0.45l-4.57,0.43l-3.04,-0.94l-2.45,0.18l0.14,-1.02l2.42,0.44l0.27,-0.08l0.81,-0.81l1.76,0.27l0.21,-0.05l3.21,-2.14l-0.03,-0.51l-2.97,-1.57l-0.26,-0.01l-1.64,0.69l-1.38,-0.84l1.81,-1.67l-0.09,-0.5l-0.46,-0.18Z",
        name: "Kyrgyzstan"
    },
    KE: {
        path: "M523.3,287.04l0.06,0.17l1.29,1.8l-1.46,0.84l-0.11,0.11l-0.55,0.93l-0.81,0.16l-0.24,0.24l-0.34,1.69l-0.81,1.06l-0.46,1.58l-0.76,0.63l-3.3,-2.3l-0.16,-1.32l-0.15,-0.23l-9.35,-5.28l-0.02,-2.4l1.92,-2.63l0.91,-1.83l0.01,-0.24l-1.09,-2.86l-0.29,-1.24l-1.09,-1.63l2.93,-2.85l0.92,0.3l0.0,1.19l0.09,0.22l0.86,0.83l0.21,0.08l1.65,0.0l3.09,2.08l0.16,0.05l0.79,0.03l0.54,-0.06l0.58,0.28l1.67,0.2l0.28,-0.12l0.69,-0.98l2.04,-0.94l0.86,0.73l0.19,0.07l1.1,0.0l-1.82,2.36l-0.06,0.18l0.03,9.12Z",
        name: "Kenya"
    },
    SS: {
        path: "M505.7,261.39l0.02,1.64l-0.27,0.55l-1.15,0.05l-0.24,0.15l-0.85,1.44l0.22,0.45l1.44,0.17l1.15,1.12l0.42,0.95l0.14,0.15l1.06,0.54l1.33,2.45l-3.06,2.98l-1.44,1.08l-1.75,0.01l-1.92,0.56l-1.5,-0.53l-0.27,0.03l-0.85,0.57l-1.98,-1.5l-0.56,-1.02l-0.37,-0.13l-1.32,0.5l-1.08,-0.15l-0.2,0.04l-0.56,0.35l-0.9,-0.24l-1.44,-1.97l-0.39,-0.77l-0.13,-0.13l-1.78,-0.94l-0.65,-1.5l-1.08,-1.12l-1.57,-1.22l-0.02,-0.68l-0.12,-0.23l-1.37,-1.02l-1.17,-0.68l0.2,-0.08l0.86,-0.48l0.14,-0.18l0.63,-2.22l0.6,-1.02l1.47,-0.28l0.35,0.56l1.29,1.48l0.14,0.09l0.69,0.22l0.22,-0.02l0.83,-0.4l1.58,0.08l0.26,0.39l0.25,0.13l2.49,0.0l0.3,-0.25l0.06,-0.35l1.13,-0.42l0.18,-0.18l0.22,-0.63l0.68,-0.38l1.95,1.37l0.23,0.05l1.29,-0.26l0.19,-0.12l1.23,-1.8l1.36,-1.37l0.08,-0.25l-0.21,-1.52l-0.06,-0.15l-0.25,-0.3l0.94,-0.08l0.26,-0.21l0.1,-0.32l0.6,0.09l-0.25,1.67l0.3,1.83l0.11,0.19l1.22,0.94l0.25,0.73l-0.04,1.2l0.26,0.31l0.09,0.01Z",
        name: "South Sudan"
    },
    SR: {
        path: "M278.1,270.26l2.71,0.45l0.31,-0.14l0.19,-0.32l1.82,-0.16l2.25,0.56l-1.09,1.81l-0.04,0.19l0.2,1.72l0.05,0.13l0.9,1.35l-0.39,0.99l-0.21,1.09l-0.48,0.8l-1.2,-0.44l-0.17,-0.01l-1.12,0.24l-0.95,-0.21l-0.35,0.2l-0.25,0.73l0.05,0.29l0.3,0.35l-0.06,0.13l-1.01,-0.15l-1.42,-2.03l-0.32,-1.36l-0.29,-0.23l-0.63,-0.0l-0.95,-1.56l0.41,-1.16l0.01,-0.17l-0.08,-0.35l1.29,-0.56l0.18,-0.22l0.35,-1.97Z",
        name: "Suriname"
    },
    KH: {
        path: "M680.28,257.89l-0.93,-1.2l-1.24,-2.56l-0.56,-2.9l1.45,-1.92l3.07,-0.46l2.26,0.35l2.03,0.98l0.38,-0.11l1.0,-1.55l1.86,0.79l0.52,1.51l-0.28,2.82l-4.05,1.88l-0.12,0.45l0.79,1.1l-2.2,0.17l-2.08,0.98l-1.89,-0.33Z",
        name: "Cambodia"
    },
    SV: {
        path: "M197.02,248.89l0.18,-0.05l0.59,0.17l0.55,0.51l0.64,0.35l0.06,0.22l0.37,0.21l1.01,-0.28l0.38,0.13l0.16,0.13l-0.14,0.81l-0.18,0.38l-1.22,-0.03l-0.84,-0.23l-1.11,-0.52l-1.31,-0.15l-0.49,-0.38l0.02,-0.08l0.76,-0.57l0.46,-0.27l0.11,-0.35Z",
        name: "El Salvador"
    },
    SK: {
        path: "M468.01,150.02l0.05,0.07l0.36,0.1l0.85,-0.37l1.12,1.02l0.33,0.05l1.38,-0.65l1.07,0.3l0.16,0.0l1.69,-0.43l1.95,1.02l-0.51,0.64l-0.45,1.2l-0.32,0.2l-2.55,-0.93l-0.17,-0.01l-0.82,0.2l-0.17,0.11l-0.53,0.68l-0.94,0.32l-0.14,-0.11l-0.29,-0.04l-1.18,0.48l-0.95,0.09l-0.26,0.21l-0.15,0.47l-1.84,0.34l-0.82,-0.31l-1.14,-0.73l-0.2,-0.89l0.42,-0.84l0.91,0.05l0.12,-0.02l0.86,-0.33l0.18,-0.21l0.03,-0.13l0.32,-0.1l0.2,-0.22l0.12,-0.55l0.39,-0.1l0.18,-0.13l0.3,-0.45l0.43,-0.0Z",
        name: "Slovakia"
    },
    KR: {
        path: "M737.31,185.72l0.84,0.08l0.27,-0.12l0.89,-1.2l1.63,-0.13l1.1,-0.2l0.21,-0.16l0.12,-0.24l1.86,2.95l0.59,1.79l0.02,3.17l-0.84,1.38l-2.23,0.55l-1.95,1.14l-1.91,0.21l-0.22,-1.21l0.45,-2.07l-0.01,-0.17l-0.99,-2.67l1.54,-0.4l0.17,-0.46l-1.55,-2.24Z",
        name: "South Korea"
    },
    SI: {
        path: "M455.77,159.59l1.79,0.21l0.18,-0.04l1.2,-0.68l2.12,-0.08l0.21,-0.1l0.38,-0.42l0.1,0.01l0.28,0.62l-1.71,0.71l-0.18,0.22l-0.21,1.1l-0.71,0.26l-0.2,0.28l0.01,0.55l-0.59,-0.04l-0.79,-0.47l-0.38,0.06l-0.36,0.41l-0.84,-0.05l0.05,-0.15l-0.56,-1.24l0.21,-1.17Z",
        name: "Slovenia"
    },
    KP: {
        path: "M747.76,172.02l-0.23,-0.04l-0.26,0.08l-1.09,1.02l-0.78,1.06l-0.06,0.19l0.09,1.95l-1.12,0.57l-0.53,0.58l-0.88,0.82l-1.69,0.51l-1.09,0.79l-0.12,0.22l-0.07,1.17l-0.22,0.25l0.09,0.47l0.96,0.46l1.22,1.1l-0.19,0.37l-0.91,0.16l-1.75,0.14l-0.22,0.12l-0.87,1.18l-0.95,-0.09l-0.3,0.18l-0.97,-0.44l-0.39,0.13l-0.25,0.44l-0.29,0.09l-0.03,-0.2l-0.18,-0.23l-0.62,-0.25l-0.43,-0.29l0.52,-0.97l0.52,-0.3l0.13,-0.38l-0.18,-0.42l0.59,-1.47l0.01,-0.21l-0.16,-0.48l-0.22,-0.2l-1.41,-0.31l-0.82,-0.55l1.74,-1.62l2.73,-1.58l1.62,-1.96l0.96,0.76l0.17,0.06l2.17,0.11l0.31,-0.37l-0.32,-1.31l3.61,-1.21l0.16,-0.13l0.79,-1.34l1.25,1.38Z",
        name: "North Korea"
    },
    SO: {
        path: "M543.8,256.48l0.61,-0.05l1.14,-0.37l1.31,-0.25l0.12,-0.05l1.11,-0.81l0.57,-0.0l0.03,0.39l-0.23,1.49l0.01,1.25l-0.52,0.92l-0.7,2.71l-1.19,2.79l-1.54,3.2l-2.13,3.66l-2.12,2.79l-2.92,3.39l-2.47,2.0l-3.76,2.5l-2.33,1.9l-2.77,3.06l-0.61,1.35l-0.28,0.29l-1.22,-1.69l-0.03,-8.92l2.12,-2.76l0.59,-0.68l1.47,-0.04l0.18,-0.06l2.15,-1.71l3.16,-0.11l0.21,-0.09l7.08,-7.55l1.76,-2.12l1.14,-1.57l0.06,-0.18l0.01,-4.67Z",
        name: "Somalia"
    },
    SN: {
        path: "M379.28,250.34l-0.95,-1.82l-0.09,-0.1l-0.83,-0.6l0.62,-0.28l0.13,-0.11l1.21,-1.8l0.6,-1.31l0.71,-0.68l1.09,0.2l0.18,-0.02l1.17,-0.53l1.25,-0.03l1.17,0.73l1.59,0.65l1.47,1.83l1.59,1.7l0.12,1.56l0.49,1.46l0.1,0.14l0.85,0.65l0.18,0.82l-0.08,0.57l-0.13,0.05l-1.29,-0.19l-0.29,0.13l-0.11,0.16l-0.35,0.04l-1.83,-0.61l-5.84,-0.13l-0.12,0.02l-0.6,0.26l-0.87,-0.06l-1.01,0.32l-0.26,-1.26l1.9,0.04l0.16,-0.04l0.54,-0.32l0.37,-0.02l0.15,-0.05l0.78,-0.5l0.92,0.46l0.12,0.03l1.09,0.04l0.15,-0.03l1.08,-0.57l0.11,-0.44l-0.51,-0.74l-0.39,-0.1l-0.76,0.39l-0.62,-0.01l-0.92,-0.58l-0.18,-0.05l-0.79,0.04l-0.2,0.09l-0.48,0.51l-2.41,0.06Z",
        name: "Senegal"
    },
    SL: {
        path: "M392.19,267.53l-0.44,-0.12l-1.73,-0.97l-1.24,-1.28l-0.4,-0.84l-0.27,-1.65l1.21,-1.0l0.09,-0.12l0.27,-0.66l0.32,-0.41l0.56,-0.05l0.16,-0.07l0.5,-0.41l1.75,0.0l0.59,0.77l0.49,0.96l-0.07,0.64l0.04,0.19l0.36,0.58l-0.03,0.84l0.24,0.2l-0.64,0.65l-1.13,1.37l-0.06,0.14l-0.12,0.66l-0.43,0.58Z",
        name: "Sierra Leone"
    },
    SB: {
        path: "M826.74,311.51l0.23,0.29l-0.95,-0.01l-0.39,-0.63l0.65,0.27l0.45,0.09ZM825.01,308.52l-1.18,-1.39l-0.37,-1.06l0.24,0.0l0.82,1.84l0.49,0.6ZM823.21,309.42l-0.44,0.03l-1.43,-0.24l-0.32,-0.24l0.08,-0.5l1.29,0.31l0.72,0.47l0.11,0.18ZM817.9,303.81l2.59,1.44l0.3,0.41l-1.21,-0.66l-1.34,-0.89l-0.34,-0.3ZM813.77,302.4l0.48,0.34l0.1,0.08l-0.33,-0.17l-0.25,-0.25Z",
        name: "Solomon Islands"
    },
    SA: {
        path: "M528.24,243.1l-0.2,-0.69l-0.07,-0.12l-0.69,-0.71l-0.18,-0.94l-0.12,-0.19l-1.24,-0.89l-1.28,-2.09l-0.7,-2.08l-0.07,-0.11l-1.73,-1.79l-0.11,-0.07l-1.03,-0.39l-1.57,-2.36l-0.27,-1.72l0.1,-1.53l-0.03,-0.15l-1.44,-2.93l-1.25,-1.13l-1.34,-0.56l-0.72,-1.33l0.11,-0.49l-0.02,-0.2l-0.7,-1.38l-0.08,-0.1l-0.68,-0.56l-0.97,-1.98l-2.8,-4.03l-0.25,-0.13l-0.85,0.01l0.29,-1.11l0.12,-0.97l0.23,-0.81l2.52,0.39l0.23,-0.06l1.08,-0.84l0.6,-0.95l1.78,-0.35l0.22,-0.17l0.37,-0.83l0.74,-0.42l0.08,-0.46l-2.17,-2.4l4.55,-1.26l0.12,-0.06l0.36,-0.32l2.83,0.71l3.67,1.91l7.04,5.5l0.17,0.06l4.64,0.22l2.06,0.24l0.55,1.15l0.28,0.17l1.56,-0.06l0.9,2.15l0.14,0.15l1.14,0.57l0.39,0.85l0.11,0.13l1.59,1.06l0.12,0.91l-0.23,0.83l0.01,0.18l0.32,0.9l0.07,0.11l0.68,0.7l0.33,0.86l0.37,0.65l0.09,0.1l0.76,0.53l0.25,0.04l0.45,-0.12l0.35,0.75l0.1,0.63l0.96,2.68l0.23,0.19l7.53,1.33l0.27,-0.09l0.24,-0.26l0.87,1.41l-1.58,4.96l-7.34,2.54l-7.28,1.02l-2.34,1.17l-0.12,0.1l-1.74,2.63l-0.86,0.32l-0.49,-0.68l-0.28,-0.12l-0.92,0.12l-2.32,-0.25l-0.41,-0.23l-0.15,-0.04l-2.89,0.06l-0.63,0.2l-0.91,-0.59l-0.43,0.11l-0.66,1.27l-0.03,0.21l0.21,0.89l-0.6,0.45Z",
        name: "Saudi Arabia"
    },
    SE: {
        path: "M476.42,90.44l-0.15,0.1l-2.43,2.86l-0.07,0.24l0.36,2.31l-3.84,3.1l-4.83,3.38l-0.11,0.15l-1.82,5.45l0.03,0.26l1.78,2.68l2.27,1.99l-2.13,3.88l-2.49,0.82l-0.2,0.24l-0.95,6.05l-1.32,3.09l-2.82,-0.32l-0.3,0.16l-1.34,2.64l-2.48,0.14l-0.76,-3.15l-2.09,-4.04l-1.85,-5.01l1.03,-1.98l2.06,-2.53l0.06,-0.13l0.83,-4.45l-0.06,-0.25l-1.54,-1.86l-0.15,-5.0l1.52,-3.48l2.28,0.06l0.27,-0.16l0.87,-1.59l-0.01,-0.31l-0.8,-1.21l3.79,-5.63l4.07,-7.54l2.23,0.01l0.29,-0.22l0.59,-2.15l4.46,0.66l0.34,-0.26l0.34,-2.64l1.21,-0.14l3.24,2.08l3.78,2.85l0.06,6.37l0.03,0.14l0.67,1.29l-3.95,1.07Z",
        name: "Sweden"
    },
    SD: {
        path: "M505.98,259.75l-0.31,-0.9l-0.1,-0.14l-1.2,-0.93l-0.27,-1.66l0.29,-1.83l-0.25,-0.34l-1.16,-0.17l-0.33,0.21l-0.11,0.37l-1.3,0.11l-0.21,0.49l0.55,0.68l0.18,1.29l-1.31,1.33l-1.18,1.72l-1.04,0.21l-2.0,-1.4l-0.32,-0.02l-0.95,0.52l-0.14,0.16l-0.21,0.6l-1.16,0.43l-0.19,0.23l-0.04,0.27l-2.08,0.0l-0.25,-0.39l-0.24,-0.13l-1.81,-0.09l-0.14,0.03l-0.8,0.38l-0.49,-0.16l-1.22,-1.39l-0.42,-0.67l-0.31,-0.14l-1.81,0.35l-0.2,0.14l-0.72,1.24l-0.61,2.14l-0.73,0.4l-0.62,0.22l-0.83,-0.68l-0.12,-0.6l0.38,-0.97l0.01,-1.14l-0.08,-0.2l-1.39,-1.53l-0.25,-0.97l0.03,-0.57l-0.11,-0.25l-0.81,-0.66l-0.03,-1.34l-0.04,-0.14l-0.52,-0.98l-0.31,-0.15l-0.42,0.07l0.12,-0.44l0.63,-1.03l0.03,-0.23l-0.24,-0.88l0.69,-0.66l0.02,-0.41l-0.4,-0.46l0.58,-1.39l1.04,-1.71l1.97,0.16l0.32,-0.3l-0.12,-10.24l0.02,-0.8l2.59,-0.01l0.3,-0.3l0.0,-4.92l29.19,0.0l0.68,2.17l-0.4,0.35l-0.1,0.27l0.36,2.69l0.93,3.15l0.12,0.16l2.05,1.4l-0.99,1.15l-1.75,0.4l-0.15,0.08l-0.79,0.79l-0.08,0.17l-0.24,1.69l-1.07,3.75l-0.0,0.16l0.25,0.96l-0.38,2.1l-0.98,2.41l-1.52,1.3l-1.07,1.94l-0.25,0.99l-1.08,0.64l-0.13,0.18l-0.46,1.65Z",
        name: "Sudan"
    },
    DO: {
        path: "M241.7,234.97l0.15,-0.22l1.73,0.01l1.43,0.64l0.15,0.03l0.45,-0.04l0.36,0.74l0.28,0.17l1.02,-0.04l-0.04,0.43l0.27,0.33l1.03,0.09l0.91,0.7l-0.57,0.64l-0.99,-0.47l-0.16,-0.03l-1.11,0.11l-0.79,-0.12l-0.26,0.09l-0.38,0.4l-0.66,0.11l-0.28,-0.45l-0.38,-0.12l-0.83,0.37l-0.14,0.13l-0.85,1.49l-0.27,-0.17l-0.1,-0.58l0.05,-0.67l-0.07,-0.21l-0.44,-0.53l0.35,-0.25l0.12,-0.19l0.19,-1.0l-0.2,-1.4Z",
        name: "Dominican Republic"
    },
    DJ: {
        path: "M528.78,253.36l0.34,0.45l-0.06,0.76l-1.26,0.54l-0.05,0.53l0.82,0.53l-0.57,0.83l-0.3,-0.25l-0.27,-0.05l-0.56,0.17l-1.07,-0.03l-0.04,-0.56l-0.16,-0.56l0.76,-1.07l0.76,-0.97l0.89,0.18l0.25,-0.06l0.51,-0.42Z",
        name: "Djibouti"
    },
    DK: {
        path: "M452.4,129.07l-1.27,2.39l-2.25,-1.69l-0.26,-1.08l3.15,-1.0l0.63,1.39ZM447.87,126.25l-0.35,0.76l-0.47,-0.24l-0.38,0.09l-1.8,2.53l-0.03,0.29l0.56,1.4l-1.22,0.4l-1.68,-0.41l-0.92,-1.76l-0.07,-3.47l0.38,-0.88l0.62,-0.93l2.07,-0.21l0.19,-0.1l0.84,-0.95l1.5,-0.76l-0.06,1.26l-0.7,1.1l-0.03,0.25l0.3,1.0l0.18,0.19l1.06,0.42Z",
        name: "Denmark"
    },
    DE: {
        path: "M445.51,131.69l0.03,0.94l0.21,0.28l2.32,0.74l-0.02,1.0l0.37,0.3l2.55,-0.65l1.36,-0.89l2.63,1.27l1.09,1.01l0.51,1.51l-0.6,0.78l-0.0,0.36l0.88,1.17l0.58,1.68l-0.18,1.08l0.03,0.18l0.87,1.81l-0.66,0.2l-0.55,-0.32l-0.36,0.05l-0.58,0.58l-1.73,0.62l-0.99,0.84l-1.77,0.7l-0.16,0.4l0.42,0.94l0.26,1.34l0.14,0.2l1.25,0.76l1.22,1.2l-0.71,1.2l-0.81,0.37l-0.17,0.32l0.34,1.99l-0.04,0.09l-0.47,-0.39l-0.17,-0.07l-1.2,-0.1l-1.85,0.57l-2.15,-0.13l-0.29,0.18l-0.21,0.5l-0.96,-0.67l-0.24,-0.05l-0.67,0.16l-2.6,-0.94l-0.34,0.1l-0.42,0.57l-1.64,-0.02l0.26,-1.88l1.24,-2.15l-0.21,-0.45l-3.54,-0.58l-0.98,-0.71l0.12,-1.26l-0.05,-0.2l-0.44,-0.64l0.27,-2.18l-0.38,-3.14l1.17,-0.0l0.27,-0.17l0.63,-1.26l0.65,-3.17l-0.02,-0.17l-0.41,-1.0l0.32,-0.47l1.77,-0.16l0.37,0.6l0.47,0.06l1.7,-1.69l0.06,-0.33l-0.55,-1.24l-0.09,-1.51l1.5,0.36l0.16,-0.01l1.22,-0.4Z",
        name: "Germany"
    },
    YE: {
        path: "M553.53,242.65l-1.51,0.58l-0.17,0.16l-0.48,1.14l-0.07,0.79l-2.31,1.0l-3.98,1.19l-2.28,1.8l-0.97,0.12l-0.7,-0.14l-0.23,0.05l-1.42,1.03l-1.51,0.47l-2.07,0.13l-0.68,0.15l-0.17,0.1l-0.49,0.6l-0.57,0.16l-0.18,0.13l-0.3,0.49l-1.06,-0.05l-0.13,0.02l-0.73,0.32l-1.48,-0.11l-0.55,-1.26l0.07,-1.32l-0.04,-0.16l-0.39,-0.72l-0.48,-1.85l-0.52,-0.79l0.08,-0.02l0.22,-0.36l-0.23,-1.05l0.24,-0.39l0.04,-0.19l-0.09,-0.95l0.96,-0.72l0.11,-0.31l-0.23,-0.98l0.46,-0.88l0.75,0.49l0.26,0.03l0.63,-0.22l2.76,-0.06l0.5,0.25l2.42,0.26l0.85,-0.11l0.52,0.71l0.35,0.1l1.17,-0.43l0.15,-0.12l1.75,-2.64l2.22,-1.11l6.95,-0.96l2.55,5.58Z",
        name: "Yemen"
    },
    AT: {
        path: "M463.17,154.15l-0.14,0.99l-1.15,0.01l-0.24,0.47l0.39,0.56l-0.75,1.84l-0.36,0.4l-2.06,0.07l-0.14,0.04l-1.18,0.67l-1.96,-0.23l-3.43,-0.78l-0.5,-0.97l-0.33,-0.16l-2.47,0.55l-0.2,0.16l-0.18,0.37l-1.27,-0.38l-1.28,-0.09l-0.81,-0.41l0.25,-0.51l0.03,-0.18l-0.05,-0.28l0.35,-0.08l1.16,0.81l0.45,-0.13l0.27,-0.64l2.0,0.12l1.84,-0.57l1.05,0.09l0.71,0.59l0.47,-0.11l0.23,-0.54l0.02,-0.17l-0.32,-1.85l0.69,-0.31l0.13,-0.12l0.73,-1.23l1.61,0.89l0.35,-0.04l1.35,-1.27l0.7,-0.19l1.84,0.93l0.18,0.03l1.08,-0.15l0.81,0.43l-0.07,0.15l-0.02,0.2l0.24,1.06Z",
        name: "Austria"
    },
    DZ: {
        path: "M450.58,224.94l-8.31,4.86l-7.23,5.12l-3.46,1.13l-2.42,0.22l-0.02,-1.33l-0.2,-0.28l-1.15,-0.42l-1.45,-0.69l-0.55,-1.13l-0.1,-0.12l-8.45,-5.72l-17.72,-12.17l0.03,-0.38l-0.02,-3.21l3.84,-1.91l2.46,-0.41l2.1,-0.75l0.14,-0.11l0.9,-1.3l2.84,-1.06l0.19,-0.27l0.09,-1.81l1.21,-0.2l0.15,-0.07l1.06,-0.96l3.19,-0.46l0.23,-0.18l0.46,-1.08l-0.08,-0.34l-0.6,-0.54l-0.83,-2.85l-0.18,-1.8l-0.82,-1.57l2.13,-1.37l2.65,-0.49l0.13,-0.05l1.55,-1.15l2.34,-0.85l4.2,-0.51l4.07,-0.23l1.21,0.41l0.23,-0.01l2.3,-1.11l2.52,-0.02l0.94,0.62l0.2,0.05l1.25,-0.13l-0.36,1.03l-0.01,0.14l0.39,2.66l-0.56,2.2l-1.49,1.52l-0.08,0.24l0.22,2.12l0.11,0.2l1.94,1.58l0.02,0.54l0.12,0.23l1.45,1.06l1.04,4.85l0.81,2.42l0.13,1.19l-0.43,2.17l0.17,1.28l-0.31,1.53l0.2,1.56l-0.9,1.02l-0.01,0.38l1.43,1.88l0.09,1.06l0.04,0.13l0.89,1.48l0.37,0.12l1.03,-0.43l1.79,1.12l0.89,1.34Z",
        name: "Algeria"
    },
    US: {
        path: "M892.64,99.05l1.16,0.57l0.21,0.02l1.45,-0.38l1.92,0.99l2.17,0.47l-1.65,0.72l-1.75,-0.79l-0.93,-0.7l-0.21,-0.06l-2.11,0.22l-0.35,-0.2l0.09,-0.87ZM183.29,150.37l0.39,1.54l0.12,0.17l0.78,0.55l0.14,0.05l1.74,0.2l2.52,0.5l2.4,0.98l0.17,0.02l1.96,-0.4l3.01,0.81l0.91,-0.02l2.22,-0.88l4.67,2.33l3.86,2.01l0.21,0.71l0.15,0.18l0.33,0.17l-0.02,0.05l0.23,0.43l0.67,0.1l0.21,-0.05l0.1,-0.07l0.05,0.29l0.09,0.16l0.5,0.5l0.21,0.09l0.56,0.0l0.13,0.13l-0.2,0.36l0.12,0.41l2.49,1.39l0.99,5.24l-0.69,1.68l-1.16,1.64l-0.6,1.18l-0.06,0.31l0.04,0.22l0.28,0.43l0.11,0.1l0.85,0.47l0.15,0.04l0.63,0.0l0.14,-0.04l2.87,-1.58l2.6,-0.49l3.28,-1.5l0.17,-0.23l0.04,-0.43l-0.23,-0.93l-0.24,-0.39l0.74,-0.32l4.7,-0.01l0.25,-0.13l0.77,-1.15l2.9,-2.41l1.04,-0.52l8.35,-0.02l0.28,-0.21l0.2,-0.6l0.7,-0.14l1.06,-0.48l0.13,-0.11l0.92,-1.49l0.75,-2.39l1.67,-2.08l0.59,0.6l0.3,0.07l1.52,-0.49l0.88,0.72l-0.0,4.14l0.08,0.2l1.6,1.72l0.31,0.72l-2.42,1.35l-2.55,1.05l-2.64,0.9l-0.14,0.11l-1.33,1.81l-0.44,0.7l-0.05,0.15l-0.03,1.6l0.03,0.14l0.83,1.59l0.24,0.16l0.78,0.06l-1.15,0.33l-1.25,-0.04l-1.83,0.52l-2.51,0.29l-2.17,0.88l-0.17,0.36l0.33,0.22l3.55,-0.54l0.15,0.11l-2.87,0.73l-1.19,0.0l-0.16,-0.33l-0.36,0.06l-0.76,0.82l0.17,0.5l0.42,0.08l-0.45,1.75l-1.4,1.74l-0.04,-0.17l-0.21,-0.22l-0.48,-0.13l-0.77,-0.69l-0.36,-0.03l-0.12,0.34l0.52,1.58l0.09,0.14l0.52,0.43l0.03,0.87l-0.74,1.05l-0.39,0.63l0.05,-0.12l-0.08,-0.34l-1.19,-1.03l-0.28,-2.31l-0.26,-0.26l-0.32,0.19l-0.48,1.27l-0.01,0.19l0.39,1.33l-1.14,-0.31l-0.36,0.18l0.14,0.38l1.57,0.85l0.1,2.58l0.22,0.28l0.55,0.15l0.21,0.81l0.33,2.72l-1.46,1.94l-2.5,0.81l-0.12,0.07l-1.58,1.58l-1.15,0.17l-0.15,0.06l-1.27,1.03l-0.09,0.13l-0.32,0.85l-2.71,1.79l-1.45,1.37l-1.18,1.64l-0.05,0.12l-0.39,1.96l0.0,0.13l0.44,1.91l0.85,2.37l1.1,1.91l0.03,1.2l1.16,3.07l-0.08,1.74l-0.1,0.99l-0.57,1.48l-0.54,0.24l-0.97,-0.26l-0.34,-1.02l-0.12,-0.16l-0.89,-0.58l-2.44,-4.28l-0.34,-0.94l0.49,-1.71l-0.02,-0.21l-0.7,-1.5l-2.0,-2.35l-0.11,-0.08l-0.98,-0.42l-0.25,0.01l-2.42,1.19l-0.26,-0.08l-1.26,-1.29l-1.57,-0.68l-0.16,-0.02l-2.79,0.34l-2.18,-0.3l-1.98,0.19l-1.12,0.45l-0.14,0.44l0.4,0.65l-0.04,1.02l0.09,0.22l0.29,0.3l-0.06,0.05l-0.77,-0.33l-0.26,0.01l-0.87,0.48l-1.64,-0.08l-1.79,-1.39l-0.23,-0.06l-2.11,0.33l-1.75,-0.61l-0.14,-0.01l-1.61,0.2l-2.11,0.64l-0.11,0.06l-2.25,1.99l-2.53,1.21l-1.43,1.38l-0.58,1.22l-0.03,0.12l-0.03,1.86l0.13,1.32l0.3,0.62l-0.46,0.04l-1.71,-0.57l-1.85,-0.79l-0.63,-1.14l-0.54,-1.85l-0.07,-0.12l-1.45,-1.51l-0.86,-1.58l-1.26,-1.87l-0.09,-0.09l-1.76,-1.09l-0.17,-0.04l-2.05,0.05l-0.23,0.12l-1.44,1.97l-1.84,-0.72l-1.19,-0.76l-0.6,-1.45l-0.9,-1.52l-1.49,-1.21l-1.27,-0.87l-0.89,-0.96l-0.22,-0.1l-4.34,-0.0l-0.3,0.3l-0.0,0.84l-6.62,0.02l-5.66,-1.93l-3.48,-1.24l0.11,-0.25l-0.3,-0.42l-3.18,0.3l-2.6,0.2l-0.35,-1.19l-0.08,-0.13l-1.62,-1.61l-0.13,-0.08l-1.02,-0.29l-0.22,-0.66l-0.25,-0.2l-1.31,-0.13l-0.82,-0.7l-0.16,-0.07l-2.25,-0.27l-0.48,-0.34l-0.28,-1.44l-0.07,-0.14l-2.41,-2.84l-2.03,-3.89l0.08,-0.58l-0.1,-0.27l-1.08,-0.94l-1.87,-2.36l-0.33,-2.31l-0.07,-0.15l-1.24,-1.5l0.52,-2.4l-0.09,-2.57l-0.78,-2.3l0.96,-2.83l0.61,-5.66l-0.46,-4.26l-0.79,-2.71l-0.68,-1.4l0.13,-0.26l3.24,0.97l1.28,2.88l0.52,0.06l0.62,-0.84l0.06,-0.22l-0.4,-2.61l-0.74,-2.29l68.9,-0.0l0.3,-0.3l0.01,-0.95l0.32,-0.01ZM32.5,67.43l1.75,1.99l0.41,0.04l1.02,-0.81l3.79,0.25l-0.1,0.72l0.24,0.34l3.83,0.77l2.6,-0.44l5.21,1.41l4.84,0.43l1.9,0.57l0.15,0.01l3.25,-0.71l3.72,1.32l2.52,0.58l-0.03,38.14l0.29,0.3l2.41,0.11l2.34,1.0l1.7,1.59l2.22,2.42l0.42,0.03l2.41,-2.04l2.25,-1.08l1.23,1.76l1.71,1.53l2.24,1.62l1.54,2.56l2.56,4.09l0.11,0.11l4.1,2.17l0.06,1.93l-1.12,1.35l-1.22,-1.14l-2.08,-1.05l-0.68,-2.94l-0.09,-0.16l-3.18,-2.84l-1.32,-3.35l-0.25,-0.19l-2.43,-0.24l-3.93,-0.09l-2.85,-1.02l-5.24,-3.85l-6.77,-2.04l-3.52,0.3l-4.84,-1.7l-2.96,-1.6l-0.23,-0.02l-2.78,0.8l-0.21,0.35l0.46,2.31l-1.11,0.19l-2.9,0.78l-2.24,1.26l-2.42,0.68l-0.29,-1.79l1.07,-3.49l2.54,-1.11l0.12,-0.45l-0.69,-0.96l-0.41,-0.07l-3.19,2.12l-1.76,2.54l-3.57,2.62l-0.03,0.46l1.63,1.59l-2.14,2.38l-2.64,1.49l-2.49,1.09l-0.16,0.17l-0.58,1.48l-3.8,1.79l-0.14,0.14l-0.75,1.57l-2.75,1.41l-1.62,-0.25l-0.16,0.02l-2.35,0.98l-2.54,1.19l-2.06,1.15l-4.05,0.93l-0.1,-0.15l2.45,-1.45l2.49,-1.1l2.61,-1.88l3.03,-0.39l0.19,-0.1l1.2,-1.41l3.43,-2.11l0.61,-0.75l1.81,-1.24l0.13,-0.2l0.42,-2.7l1.24,-2.12l-0.03,-0.35l-0.34,-0.09l-2.73,1.05l-0.67,-0.53l-0.39,0.02l-1.13,1.11l-1.43,-1.62l-0.49,0.06l-0.41,0.8l-0.67,-1.31l-0.42,-0.12l-2.43,1.43l-1.18,-0.0l-0.18,-1.86l0.43,-1.3l-0.09,-0.33l-1.61,-1.33l-0.26,-0.06l-3.11,0.68l-2.0,-1.66l-1.61,-0.85l-0.01,-1.97l-0.11,-0.23l-1.76,-1.48l0.86,-1.96l2.01,-2.13l0.88,-1.94l1.79,-0.25l1.65,0.6l0.31,-0.06l1.91,-1.8l1.67,0.31l0.22,-0.04l1.91,-1.23l0.13,-0.33l-0.47,-1.82l-0.15,-0.19l-1.0,-0.52l1.51,-1.27l0.09,-0.34l-0.29,-0.19l-1.62,0.06l-2.66,0.88l-0.13,0.09l-0.62,0.72l-1.77,-0.8l-0.16,-0.02l-3.48,0.44l-3.5,-0.92l-1.06,-1.61l-2.78,-2.09l3.07,-1.51l5.52,-2.01l1.65,0.0l-0.28,1.73l0.31,0.35l5.29,-0.16l0.23,-0.49l-2.03,-2.59l-0.1,-0.08l-3.03,-1.58l-1.79,-2.12l-2.4,-1.83l-3.18,-1.27l1.13,-1.84l4.28,-0.14l0.15,-0.05l3.16,-2.0l0.13,-0.17l0.57,-2.07l2.43,-2.02l2.42,-0.52l4.67,-1.98l2.22,0.29l0.2,-0.04l3.74,-2.37l3.57,0.91ZM37.66,123.49l-2.31,1.26l-1.04,-0.75l-0.31,-1.35l2.06,-1.16l1.24,-0.51l1.48,0.22l0.76,0.81l-1.89,1.49ZM30.89,233.84l1.2,0.57l0.35,0.3l0.48,0.69l-1.6,0.86l-0.3,0.31l-0.24,-0.14l0.05,-0.54l-0.02,-0.15l-0.36,-0.83l0.05,-0.12l0.39,-0.38l0.07,-0.31l-0.09,-0.27ZM29.06,231.89l0.5,0.14l0.31,0.19l-0.46,0.1l-0.34,-0.43ZM25.02,230.13l0.2,-0.11l0.4,0.47l-0.43,-0.05l-0.17,-0.31ZM21.29,228.68l0.1,-0.07l0.22,0.02l0.02,0.21l-0.02,0.02l-0.32,-0.18ZM6.0,113.33l-1.19,0.45l-1.5,-0.64l-0.94,-0.63l1.76,-0.46l1.71,0.29l0.16,0.98Z",
        name: "United States of America"
    },
    LV: {
        path: "M473.99,127.16l0.07,-2.15l1.15,-2.11l2.05,-1.07l1.84,2.48l0.25,0.12l2.01,-0.07l0.29,-0.25l0.45,-2.58l1.85,-0.56l0.98,0.4l2.13,1.33l0.16,0.05l1.97,0.01l1.02,0.7l0.21,1.67l0.71,1.84l-2.44,1.23l-1.36,0.53l-2.28,-1.62l-0.12,-0.05l-1.18,-0.2l-0.28,-0.6l-0.31,-0.17l-2.43,0.35l-4.17,-0.23l-0.12,0.02l-2.45,0.93Z",
        name: "Latvia"
    },
    UY: {
        path: "M276.9,363.17l1.3,-0.23l2.4,2.04l0.22,0.07l0.82,-0.07l2.48,1.7l1.93,1.5l1.28,1.67l-0.95,1.14l-0.04,0.31l0.63,1.45l-0.96,1.57l-2.65,1.47l-1.73,-0.53l-0.15,-0.01l-1.25,0.28l-2.22,-1.16l-0.16,-0.03l-1.56,0.08l-1.33,-1.36l0.17,-1.58l0.48,-0.55l0.07,-0.2l-0.02,-2.74l0.66,-2.8l0.57,-2.02Z",
        name: "Uruguay"
    },
    LB: {
        path: "M510.44,198.11l-0.48,0.03l-0.26,0.17l-0.15,0.32l-0.21,-0.0l0.72,-1.85l1.19,-1.9l0.74,0.09l0.27,0.73l-1.19,0.93l-0.09,0.13l-0.54,1.36Z",
        name: "Lebanon"
    },
    LA: {
        path: "M684.87,248.8l0.61,-0.86l0.05,-0.16l0.11,-2.17l-0.08,-0.22l-1.96,-2.16l-0.15,-2.44l-0.08,-0.18l-1.9,-2.1l-0.19,-0.1l-1.89,-0.18l-0.29,0.15l-0.42,0.76l-1.21,0.06l-0.67,-0.41l-0.31,-0.0l-2.2,1.29l-0.05,-1.77l0.61,-2.7l-0.27,-0.37l-1.44,-0.1l-0.12,-1.31l-0.12,-0.21l-0.87,-0.65l0.38,-0.68l1.76,-1.41l0.08,0.22l0.27,0.2l1.33,0.07l0.31,-0.34l-0.35,-2.75l0.85,-0.25l1.32,1.88l1.11,2.36l0.27,0.17l2.89,0.02l0.78,1.82l-1.32,0.56l-0.12,0.09l-0.72,0.93l0.1,0.45l2.93,1.52l3.62,5.27l1.88,1.78l0.58,1.67l-0.38,2.11l-1.87,-0.79l-0.37,0.11l-0.99,1.54l-1.51,-0.73Z",
        name: "Laos"
    },
    TW: {
        path: "M725.6,222.5l-1.5,4.22l-0.82,1.65l-1.01,-1.7l-0.26,-1.8l1.4,-2.48l1.8,-1.81l0.76,0.53l-0.38,1.39Z",
        name: "Taiwan"
    },
    TT: {
        path: "M266.35,259.46l0.41,-0.39l0.09,-0.23l-0.04,-0.75l1.14,-0.26l0.2,0.03l-0.07,1.37l-1.73,0.23Z",
        name: "Trinidad and Tobago"
    },
    TR: {
        path: "M513.25,175.38l3.63,1.17l0.14,0.01l2.88,-0.45l2.11,0.26l0.18,-0.03l2.9,-1.53l2.51,-0.13l2.25,1.37l0.36,0.88l-0.23,1.36l0.19,0.33l1.81,0.72l0.61,0.53l-1.31,0.64l-0.16,0.34l0.76,3.24l-0.44,0.8l0.01,0.3l1.19,2.02l-0.71,0.29l-0.74,-0.62l-0.15,-0.07l-2.91,-0.37l-0.15,0.02l-1.04,0.43l-2.78,0.44l-1.44,-0.03l-2.83,1.06l-1.95,0.01l-1.28,-0.52l-0.2,-0.01l-2.62,0.76l-0.7,-0.48l-0.47,0.22l-0.13,1.49l-1.01,0.94l-0.58,-0.82l0.79,-0.9l0.04,-0.34l-0.31,-0.15l-1.46,0.23l-2.03,-0.64l-0.3,0.07l-1.65,1.58l-3.58,0.3l-1.94,-1.47l-0.17,-0.06l-2.7,-0.1l-0.28,0.17l-0.51,1.06l-1.47,0.29l-2.32,-1.46l-0.17,-0.05l-2.55,0.05l-1.4,-2.7l-1.72,-1.54l1.11,-2.06l-0.07,-0.37l-1.35,-1.19l2.47,-2.51l3.74,-0.11l0.26,-0.17l0.96,-2.07l4.56,0.38l0.19,-0.05l2.97,-1.92l2.84,-0.83l4.03,-0.06l4.31,2.08ZM488.85,176.8l-1.81,1.38l-0.57,-1.01l0.02,-0.36l0.45,-0.25l0.13,-0.15l0.78,-1.87l-0.11,-0.37l-0.72,-0.47l1.91,-0.71l1.89,0.35l0.25,0.97l0.17,0.2l1.87,0.83l-0.19,0.31l-2.82,0.16l-0.18,0.07l-1.06,0.91Z",
        name: "Turkey"
    },
    LK: {
        path: "M625.44,266.07l-0.35,2.4l-0.9,0.61l-1.91,0.5l-1.04,-1.75l-0.43,-3.5l1.0,-3.6l1.34,1.09l1.13,1.72l1.16,2.52Z",
        name: "Sri Lanka"
    },
    TN: {
        path: "M444.91,206.18l-0.99,-4.57l-0.12,-0.18l-1.43,-1.04l-0.02,-0.53l-0.11,-0.22l-1.95,-1.59l-0.19,-1.85l1.44,-1.47l0.08,-0.14l0.59,-2.34l-0.38,-2.77l0.44,-1.28l2.52,-1.08l1.41,0.28l-0.06,1.2l0.43,0.28l1.81,-0.9l0.02,0.06l-1.14,1.28l-0.08,0.2l-0.02,1.32l0.11,0.24l0.74,0.6l-0.29,2.18l-1.56,1.35l-0.09,0.32l0.48,1.54l0.28,0.21l1.11,0.04l0.55,1.17l0.15,0.14l0.76,0.35l-0.12,1.79l-1.1,0.72l-0.8,0.91l-1.68,1.04l-0.13,0.32l0.25,1.08l-0.18,0.96l-0.74,0.39Z",
        name: "Tunisia"
    },
    TL: {
        path: "M734.21,307.22l0.17,-0.34l1.99,-0.52l1.72,-0.08l0.78,-0.3l0.29,0.1l-0.43,0.32l-2.57,1.09l-1.71,0.59l-0.05,-0.49l-0.19,-0.36Z",
        name: "East Timor"
    },
    TM: {
        path: "M553.16,173.51l-0.12,1.0l-0.26,-0.65l0.38,-0.34ZM553.54,173.16l0.13,-0.12l0.43,-0.09l-0.56,0.21ZM555.68,172.6l0.65,-0.14l1.53,0.76l1.71,2.29l0.27,0.12l1.27,-0.14l2.81,-0.04l0.29,-0.38l-0.35,-1.27l1.98,-0.97l1.96,-1.63l3.05,1.44l0.25,2.23l0.14,0.22l0.96,0.61l0.18,0.05l2.61,-0.13l0.68,0.44l1.2,2.97l0.1,0.13l2.85,2.03l1.67,1.41l2.66,1.45l3.13,1.17l-0.05,1.23l-0.36,-0.04l-1.12,-0.73l-0.44,0.14l-0.34,0.89l-1.96,0.52l-0.22,0.23l-0.47,2.17l-1.26,0.78l-1.93,0.42l-0.21,0.18l-0.46,1.14l-1.64,0.33l-2.3,-0.97l-0.2,-2.23l-0.28,-0.27l-1.76,-0.1l-2.78,-2.48l-0.15,-0.07l-1.95,-0.31l-2.82,-1.48l-1.78,-0.27l-0.18,0.03l-1.03,0.51l-1.6,-0.08l-0.22,0.08l-1.72,1.6l-1.83,0.46l-0.39,-1.7l0.36,-3.0l-0.16,-0.3l-1.73,-0.88l0.57,-1.77l-0.25,-0.39l-1.33,-0.14l0.41,-1.85l2.05,0.63l0.21,-0.01l2.2,-0.95l0.09,-0.49l-1.78,-1.75l-0.69,-1.66l-0.07,-0.03Z",
        name: "Turkmenistan"
    },
    TJ: {
        path: "M597.99,178.71l-0.23,0.23l-2.57,-0.47l-0.35,0.25l-0.24,1.7l0.32,0.34l2.66,-0.22l3.15,0.95l4.47,-0.42l0.58,2.45l0.39,0.21l0.71,-0.25l1.22,0.53l-0.06,1.01l0.29,1.28l-2.19,-0.0l-1.71,-0.21l-0.23,0.07l-1.51,1.25l-1.05,0.27l-0.77,0.51l-0.71,-0.67l0.22,-2.28l-0.24,-0.32l-0.43,-0.08l0.17,-0.57l-0.16,-0.36l-1.36,-0.66l-0.34,0.05l-1.08,1.01l-0.09,0.15l-0.25,1.09l-0.24,0.26l-1.36,-0.05l-0.27,0.14l-0.65,1.06l-0.58,-0.39l-0.3,-0.02l-1.68,0.86l-0.36,-0.16l1.28,-2.65l0.02,-0.2l-0.54,-2.17l-0.18,-0.21l-1.53,-0.58l0.41,-0.82l1.89,0.13l0.26,-0.12l1.19,-1.63l0.77,-1.82l2.66,-0.55l-0.33,0.87l0.01,0.23l0.36,0.82l0.3,0.18l0.23,-0.02Z",
        name: "Tajikistan"
    },
    LS: {
        path: "M493.32,359.69l0.69,0.65l-0.65,1.12l-0.38,0.8l-1.27,0.39l-0.18,0.15l-0.4,0.77l-0.59,0.18l-1.59,-1.78l1.16,-1.5l1.3,-1.02l0.97,-0.46l0.94,0.72Z",
        name: "Lesotho"
    },
    TH: {
        path: "M677.42,253.68l-1.7,-0.88l-0.14,-0.03l-1.77,0.04l0.3,-1.64l-0.3,-0.35l-2.21,0.01l-0.3,0.28l-0.2,2.76l-2.15,5.9l-0.02,0.13l0.17,1.83l0.28,0.27l1.45,0.07l0.93,2.1l0.44,2.15l0.08,0.15l1.4,1.44l0.16,0.09l1.43,0.27l1.04,1.05l-0.58,0.73l-1.24,0.22l-0.15,-0.99l-0.15,-0.22l-2.04,-1.1l-0.36,0.06l-0.23,0.23l-0.72,-0.71l-0.41,-1.18l-0.06,-0.11l-1.33,-1.42l-1.22,-1.2l-0.5,0.13l-0.15,0.54l-0.14,-0.41l0.26,-1.48l0.73,-2.38l1.2,-2.57l1.37,-2.35l0.02,-0.27l-0.95,-2.26l0.03,-1.19l-0.29,-1.42l-0.06,-0.13l-1.65,-2.0l-0.46,-0.99l0.62,-0.34l0.13,-0.15l0.92,-2.23l-0.02,-0.27l-1.05,-1.74l-1.57,-1.86l-1.04,-1.96l0.76,-0.34l0.16,-0.16l1.07,-2.63l1.58,-0.1l0.16,-0.06l1.43,-1.11l1.24,-0.52l0.84,0.62l0.13,1.43l0.28,0.27l1.34,0.09l-0.54,2.39l0.05,2.39l0.45,0.25l2.48,-1.45l0.6,0.36l0.17,0.04l1.47,-0.07l0.25,-0.15l0.41,-0.73l1.58,0.15l1.76,1.93l0.15,2.44l0.08,0.18l1.94,2.15l-0.1,1.96l-0.66,0.93l-2.25,-0.34l-3.24,0.49l-0.19,0.12l-1.6,2.12l-0.06,0.24l0.48,2.46Z",
        name: "Thailand"
    },
    TF: {
        path: "M593.76,417.73l1.38,0.84l2.15,0.37l0.04,0.31l-0.59,1.24l-3.36,0.19l-0.05,-1.38l0.43,-1.56Z",
        name: "French Southern and Antarctic Lands"
    },
    TG: {
        path: "M425.23,269.29l-1.49,0.4l-0.43,-0.68l-0.64,-1.54l-0.18,-1.16l0.54,-2.21l-0.04,-0.24l-0.59,-0.86l-0.23,-1.9l0.0,-1.82l-0.07,-0.19l-0.95,-1.19l0.1,-0.41l1.58,0.04l-0.23,0.97l0.08,0.28l1.55,1.55l0.09,1.13l0.08,0.19l0.42,0.43l-0.11,5.66l0.52,1.53Z",
        name: "Togo"
    },
    TD: {
        path: "M457.57,252.46l0.23,-1.08l-0.28,-0.36l-1.32,-0.05l0.0,-1.35l-0.1,-0.22l-0.9,-0.82l0.99,-3.1l3.12,-2.37l0.12,-0.23l0.13,-3.33l0.95,-5.2l0.53,-1.09l-0.07,-0.36l-0.94,-0.81l-0.03,-0.7l-0.12,-0.23l-0.84,-0.61l-0.57,-3.76l2.21,-1.26l19.67,9.88l0.12,9.74l-1.83,-0.15l-0.28,0.14l-1.14,1.89l-0.68,1.62l0.05,0.31l0.33,0.38l-0.61,0.58l-0.08,0.3l0.25,0.93l-0.58,0.95l-0.29,1.01l0.34,0.37l0.67,-0.11l0.39,0.73l0.03,1.4l0.11,0.23l0.8,0.65l-0.01,0.24l-1.38,0.37l-0.11,0.06l-1.27,1.03l-1.83,2.76l-2.21,1.1l-2.34,-0.15l-0.82,0.25l-0.2,0.37l0.19,0.68l-1.16,0.79l-1.01,0.94l-2.92,0.89l-0.5,-0.46l-0.17,-0.08l-0.41,-0.05l-0.28,0.12l-0.38,0.54l-1.36,0.12l0.1,-0.18l0.01,-0.27l-0.78,-1.72l-0.35,-1.03l-0.17,-0.18l-1.03,-0.41l-1.29,-1.28l0.36,-0.78l0.9,0.2l0.14,-0.0l0.67,-0.17l1.36,0.02l0.26,-0.45l-1.32,-2.22l0.09,-1.64l-0.17,-1.68l-0.04,-0.13l-0.93,-1.53Z",
        name: "Chad"
    },
    LY: {
        path: "M457.99,226.38l-1.57,0.87l-1.25,-1.28l-0.13,-0.08l-3.85,-1.11l-1.04,-1.57l-0.09,-0.09l-1.98,-1.23l-0.27,-0.02l-0.93,0.39l-0.72,-1.2l-0.09,-1.07l-0.06,-0.16l-1.33,-1.75l0.83,-0.94l0.07,-0.24l-0.21,-1.64l0.31,-1.43l-0.17,-1.29l0.43,-2.26l-0.15,-1.33l-0.73,-2.18l0.99,-0.52l0.16,-0.21l0.22,-1.16l-0.22,-1.06l1.54,-0.95l0.81,-0.92l1.19,-0.78l0.14,-0.23l0.12,-1.76l2.57,0.84l0.16,0.01l0.99,-0.23l2.01,0.45l3.19,1.2l1.12,2.36l0.2,0.16l2.24,0.53l3.5,1.14l2.65,1.36l0.29,-0.01l1.22,-0.71l1.27,-1.32l0.07,-0.29l-0.55,-2.0l0.69,-1.19l1.7,-1.23l1.61,-0.35l3.2,0.54l0.78,1.14l0.24,0.13l0.85,0.01l0.84,0.47l2.35,0.31l0.42,0.63l-0.79,1.16l-0.04,0.26l0.35,1.08l-0.61,1.6l-0.0,0.2l0.73,2.16l0.0,24.24l-2.58,0.01l-0.3,0.29l-0.02,0.62l-19.55,-9.83l-0.28,0.01l-2.53,1.44Z",
        name: "Libya"
    },
    AE: {
        path: "M550.59,223.8l0.12,0.08l1.92,-0.41l3.54,0.15l0.23,-0.09l1.71,-1.79l1.86,-1.7l1.31,-1.36l0.26,0.5l0.28,1.72l-0.93,0.01l-0.3,0.26l-0.21,1.73l0.11,0.27l0.08,0.06l-0.7,0.32l-0.17,0.27l-0.01,0.99l-0.68,1.02l-0.05,0.15l-0.06,0.96l-0.32,0.36l-7.19,-1.27l-0.79,-2.22Z",
        name: "United Arab Emirates"
    },
    VE: {
        path: "M240.66,256.5l0.65,0.91l-0.03,1.13l-1.05,1.39l-0.03,0.31l0.95,2.0l0.32,0.17l1.08,-0.16l0.24,-0.21l0.56,-1.83l-0.06,-0.29l-0.71,-0.81l-0.1,-1.58l2.9,-0.96l0.19,-0.37l-0.29,-1.02l0.45,-0.41l0.72,1.43l0.26,0.16l1.65,0.04l1.46,1.27l0.08,0.72l0.3,0.27l2.28,0.02l2.55,-0.25l1.34,1.06l0.14,0.06l1.92,0.31l0.2,-0.03l1.4,-0.79l0.15,-0.25l0.02,-0.36l2.82,-0.14l1.17,-0.01l-0.41,0.14l-0.14,0.46l0.86,1.19l0.22,0.12l1.93,0.18l1.73,1.13l0.37,1.9l0.31,0.24l1.21,-0.05l0.52,0.32l-1.63,1.21l-0.11,0.17l-0.22,0.92l0.07,0.27l0.63,0.69l-0.31,0.24l-1.48,0.39l-0.22,0.3l0.04,1.03l-0.59,0.6l-0.01,0.41l1.67,1.87l0.23,0.48l-0.72,0.76l-2.71,0.91l-1.78,0.39l-0.13,0.06l-0.6,0.49l-1.84,-0.58l-1.89,-0.33l-0.18,0.03l-0.47,0.23l-0.02,0.53l0.96,0.56l-0.08,1.58l0.35,1.58l0.26,0.23l1.91,0.19l0.02,0.07l-1.54,0.62l-0.18,0.2l-0.25,0.92l-0.88,0.35l-1.85,0.58l-0.16,0.13l-0.4,0.64l-1.66,0.14l-1.22,-1.18l-0.79,-2.52l-0.67,-0.88l-0.66,-0.43l0.99,-0.98l0.09,-0.26l-0.09,-0.56l-0.08,-0.16l-0.66,-0.69l-0.47,-1.54l0.18,-1.67l0.55,-0.85l0.45,-1.35l-0.15,-0.36l-0.89,-0.43l-0.19,-0.02l-1.39,0.28l-1.76,-0.13l-0.92,0.23l-1.64,-2.01l-0.17,-0.1l-1.54,-0.33l-3.05,0.23l-0.5,-0.73l-0.15,-0.12l-0.45,-0.15l-0.05,-0.28l0.28,-0.86l0.01,-0.15l-0.2,-1.01l-0.08,-0.15l-0.5,-0.5l-0.3,-1.08l-0.25,-0.22l-0.89,-0.12l0.54,-1.18l0.29,-1.73l0.66,-0.85l0.94,-0.7l0.09,-0.11l0.3,-0.6Z",
        name: "Venezuela"
    },
    AF: {
        path: "M574.42,192.1l2.24,0.95l0.18,0.02l1.89,-0.38l0.22,-0.18l0.46,-1.14l1.82,-0.4l1.5,-0.91l0.14,-0.19l0.46,-2.12l1.93,-0.51l0.2,-0.18l0.26,-0.68l0.87,0.57l0.13,0.05l0.79,0.09l1.35,0.02l1.83,0.59l0.75,0.34l0.26,-0.01l1.66,-0.85l0.7,0.46l0.42,-0.09l0.72,-1.17l1.32,0.05l0.23,-0.1l0.39,-0.43l0.07,-0.14l0.24,-1.08l0.86,-0.81l0.94,0.46l-0.2,0.64l0.23,0.38l0.49,0.09l-0.21,2.15l0.09,0.25l0.99,0.94l0.38,0.03l0.83,-0.57l1.06,-0.27l0.12,-0.06l1.46,-1.21l1.63,0.2l2.4,0.0l0.17,0.32l-1.12,0.25l-1.23,0.52l-2.86,0.33l-2.69,0.6l-0.13,0.06l-1.46,1.25l-0.07,0.36l0.58,1.18l0.25,1.21l-1.13,1.08l-0.09,0.25l0.09,0.98l-0.53,0.79l-2.22,-0.08l-0.28,0.44l0.83,1.57l-1.3,0.58l-0.13,0.11l-1.06,1.69l-0.05,0.18l0.13,1.51l-0.73,0.58l-0.78,-0.22l-0.14,-0.01l-1.91,0.36l-0.23,0.19l-0.2,0.57l-1.65,-0.0l-0.22,0.1l-1.4,1.56l-0.08,0.19l-0.08,2.13l-2.99,1.05l-1.67,-0.23l-0.27,0.1l-0.39,0.46l-1.43,-0.31l-2.43,0.4l-3.69,-1.23l1.96,-2.15l0.08,-0.24l-0.21,-1.78l-0.23,-0.26l-1.69,-0.42l-0.19,-1.62l-0.77,-2.08l0.98,-1.41l-0.14,-0.45l-0.82,-0.31l0.6,-1.79l0.93,-3.21Z",
        name: "Afghanistan"
    },
    IQ: {
        path: "M534.42,190.89l0.13,0.14l1.5,0.78l0.15,1.34l-1.13,0.87l-0.11,0.16l-0.58,2.2l0.04,0.24l1.73,2.67l0.12,0.1l2.99,1.49l1.18,1.94l-0.39,1.89l0.29,0.36l0.5,-0.0l0.02,1.17l0.08,0.2l0.83,0.86l-2.36,-0.29l-0.29,0.13l-1.74,2.49l-4.4,-0.21l-7.03,-5.49l-3.73,-1.94l-2.92,-0.74l-0.89,-3.0l5.33,-2.81l0.15,-0.19l0.95,-3.43l-0.2,-2.0l1.19,-0.61l0.11,-0.09l1.23,-1.73l0.92,-0.38l2.75,0.35l0.81,0.68l0.31,0.05l0.94,-0.38l1.5,3.17Z",
        name: "Iraq"
    },
    IS: {
        path: "M384.26,87.96l-0.51,2.35l0.08,0.28l2.61,2.58l-2.99,2.83l-7.16,2.72l-2.08,0.7l-9.51,-1.71l1.89,-1.36l-0.07,-0.53l-4.4,-1.59l3.33,-0.59l0.25,-0.32l-0.11,-1.2l-0.25,-0.27l-4.82,-0.88l1.38,-2.2l3.54,-0.57l3.8,2.74l0.33,0.01l3.68,-2.18l3.02,1.12l0.25,-0.02l4.01,-2.18l3.72,0.27Z",
        name: "Iceland"
    },
    IR: {
        path: "M556.2,187.5l2.05,-0.52l0.13,-0.07l1.69,-1.57l1.55,0.08l0.15,-0.03l1.02,-0.5l1.64,0.25l2.82,1.48l1.91,0.3l2.8,2.49l0.18,0.08l1.61,0.09l0.19,2.09l-1.0,3.47l-0.69,2.04l0.18,0.38l0.73,0.28l-0.85,1.22l-0.04,0.28l0.81,2.19l0.19,1.72l0.23,0.26l1.69,0.42l0.17,1.43l-2.18,2.39l-0.01,0.4l1.22,1.42l1.0,1.62l0.12,0.11l2.23,1.11l0.06,2.2l0.2,0.27l1.03,0.38l0.14,0.83l-3.38,1.3l-0.18,0.19l-0.87,2.85l-4.44,-0.76l-2.75,-0.62l-2.64,-0.32l-1.01,-3.11l-0.17,-0.19l-1.2,-0.48l-0.18,-0.01l-1.99,0.51l-2.42,1.25l-2.89,-0.84l-2.48,-2.03l-2.41,-0.79l-1.61,-2.47l-1.84,-3.63l-0.36,-0.15l-1.22,0.4l-1.48,-0.84l-0.37,0.06l-0.72,0.82l-1.08,-1.12l-0.02,-1.35l-0.3,-0.29l-0.43,0.0l0.34,-1.64l-0.04,-0.22l-1.29,-2.11l-0.12,-0.11l-3.0,-1.49l-1.62,-2.49l0.52,-1.98l1.18,-0.92l0.11,-0.27l-0.19,-1.66l-0.16,-0.23l-1.55,-0.81l-1.58,-3.33l-1.3,-2.2l0.41,-0.75l0.03,-0.21l-0.73,-3.12l1.2,-0.59l0.35,0.9l1.26,1.35l0.15,0.09l1.81,0.39l0.91,-0.09l0.15,-0.06l2.9,-2.13l0.7,-0.16l0.48,0.56l-0.75,1.26l0.05,0.37l1.56,1.53l0.28,0.08l0.37,-0.09l0.7,1.89l0.21,0.19l2.31,0.59l1.69,1.4l0.15,0.07l3.66,0.49l3.91,-0.76l0.23,-0.19l0.19,-0.52Z",
        name: "Iran"
    },
    AM: {
        path: "M530.51,176.08l2.91,-0.39l0.41,0.63l0.11,0.1l0.66,0.36l-0.32,0.47l0.07,0.41l1.1,0.84l-0.53,0.7l0.06,0.42l1.06,0.8l1.01,0.44l0.04,1.56l-0.44,0.04l-0.88,-1.46l0.01,-0.37l-0.3,-0.31l-0.98,0.01l-0.65,-0.69l-0.26,-0.09l-0.38,0.06l-0.97,-0.82l-1.64,-0.65l0.2,-1.2l-0.02,-0.16l-0.28,-0.69Z",
        name: "Armenia"
    },
    IT: {
        path: "M451.68,158.58l0.2,0.16l3.3,0.75l-0.22,1.26l0.02,0.18l0.35,0.78l-1.4,-0.32l-0.21,0.03l-2.04,1.1l-0.16,0.29l0.13,1.47l-0.29,0.82l0.02,0.24l0.82,1.57l0.1,0.11l2.28,1.5l1.29,2.53l2.79,2.43l0.2,0.07l1.83,-0.02l0.31,0.34l-0.46,0.39l0.06,0.5l4.06,1.97l2.06,1.49l0.17,0.36l-0.24,0.53l-1.08,-1.07l-0.15,-0.08l-2.18,-0.49l-0.33,0.15l-1.05,1.91l0.11,0.4l1.63,0.98l-0.22,1.12l-0.84,0.14l-0.22,0.15l-1.27,2.38l-0.54,0.12l0.01,-0.47l0.48,-1.46l0.5,-0.58l0.03,-0.35l-0.97,-1.69l-0.76,-1.48l-0.17,-0.15l-0.94,-0.33l-0.68,-1.18l-0.16,-0.13l-1.53,-0.52l-1.03,-1.14l-0.19,-0.1l-1.78,-0.19l-1.88,-1.3l-2.27,-1.94l-1.64,-1.68l-0.76,-2.94l-0.21,-0.21l-1.22,-0.35l-2.01,-1.0l-0.24,-0.01l-1.15,0.42l-0.11,0.07l-1.38,1.36l-0.5,0.11l0.19,-0.87l-0.21,-0.35l-1.19,-0.34l-0.56,-2.06l0.76,-0.82l0.03,-0.36l-0.68,-1.08l0.04,-0.31l0.68,0.42l0.19,0.04l1.21,-0.15l0.14,-0.06l1.18,-0.89l0.25,0.29l0.25,0.1l1.19,-0.1l0.25,-0.18l0.45,-1.04l1.61,0.34l0.19,-0.02l1.1,-0.53l0.17,-0.22l0.15,-0.95l1.19,0.35l0.35,-0.16l0.23,-0.47l2.11,-0.47l0.45,0.89ZM459.35,184.63l-0.71,1.81l0.0,0.23l0.33,0.79l-0.37,1.03l-1.6,-0.91l-1.33,-0.34l-3.24,-1.36l0.23,-0.99l2.73,0.24l3.95,-0.5ZM443.95,175.91l1.26,1.77l-0.31,3.47l-0.82,-0.13l-0.26,0.08l-0.83,0.79l-0.64,-0.52l-0.1,-3.42l-0.44,-1.34l0.91,0.1l0.21,-0.06l1.01,-0.74Z",
        name: "Italy"
    },
    VN: {
        path: "M690.8,230.21l-2.86,1.93l-2.09,2.46l-0.06,0.11l-0.55,1.8l0.04,0.26l4.26,6.1l2.31,1.63l1.46,1.97l1.12,4.62l-0.32,4.3l-1.97,1.57l-2.85,1.62l-2.09,2.14l-2.83,2.13l-0.67,-1.19l0.65,-1.58l-0.09,-0.35l-1.47,-1.14l1.67,-0.79l2.57,-0.18l0.22,-0.47l-0.89,-1.24l3.88,-1.8l0.17,-0.24l0.31,-3.05l-0.01,-0.13l-0.56,-1.63l0.44,-2.48l-0.01,-0.15l-0.63,-1.81l-0.08,-0.12l-1.87,-1.77l-3.64,-5.3l-0.11,-0.1l-2.68,-1.39l0.45,-0.59l1.53,-0.65l0.16,-0.39l-0.97,-2.27l-0.27,-0.18l-2.89,-0.02l-1.04,-2.21l-1.28,-1.83l0.96,-0.46l1.97,0.01l2.43,-0.3l0.13,-0.05l1.95,-1.29l1.04,0.85l0.13,0.06l1.98,0.42l-0.32,1.21l0.09,0.3l1.19,1.07l0.12,0.07l1.88,0.51Z",
        name: "Vietnam"
    },
    AR: {
        path: "M258.11,341.34l1.4,1.81l0.51,-0.06l0.89,-1.94l2.51,0.1l0.36,0.49l4.6,4.31l0.15,0.08l1.99,0.39l3.01,1.93l2.5,1.01l0.28,0.91l-2.4,3.97l0.17,0.44l2.57,0.74l2.81,0.41l2.09,-0.44l0.14,-0.07l2.27,-2.06l0.09,-0.17l0.38,-2.2l0.88,-0.36l1.05,1.29l-0.04,1.88l-1.98,1.4l-1.72,1.13l-2.84,2.65l-3.34,3.73l-0.07,0.12l-0.63,2.22l-0.67,2.85l0.02,2.73l-0.47,0.54l-0.07,0.17l-0.36,3.28l0.12,0.27l3.03,2.32l-0.31,1.78l0.11,0.29l1.44,1.15l-0.11,1.17l-2.32,3.57l-3.59,1.51l-4.95,0.6l-2.72,-0.29l-0.32,0.38l0.5,1.67l-0.49,2.13l0.01,0.16l0.4,1.29l-1.27,0.88l-2.41,0.39l-2.33,-1.05l-0.31,0.04l-0.97,0.78l-0.11,0.27l0.35,2.98l0.16,0.23l1.69,0.91l0.31,-0.02l1.08,-0.75l0.46,0.96l-2.1,0.88l-2.01,1.89l-0.09,0.18l-0.36,3.05l-0.51,1.42l-2.16,0.01l-0.19,0.07l-1.96,1.59l-0.1,0.15l-0.72,2.34l0.08,0.31l2.46,2.31l0.13,0.07l2.09,0.56l-0.74,2.45l-2.86,1.75l-0.12,0.14l-1.59,3.71l-2.2,1.24l-0.1,0.09l-1.03,1.54l-0.04,0.23l0.81,3.45l0.06,0.13l1.13,1.32l-2.59,-0.57l-5.89,-0.44l-0.92,-1.73l0.05,-2.4l-0.34,-0.3l-1.49,0.19l-0.72,-0.98l-0.2,-3.21l1.79,-1.33l0.1,-0.13l0.79,-2.04l0.02,-0.16l-0.27,-1.52l1.31,-2.69l0.91,-4.15l-0.23,-1.72l0.91,-0.49l0.15,-0.33l-0.27,-1.16l-0.15,-0.2l-0.87,-0.46l0.65,-1.01l-0.04,-0.37l-1.06,-1.09l-0.54,-3.2l0.83,-0.51l0.14,-0.29l-0.42,-3.6l0.58,-2.98l0.64,-2.5l1.41,-1.0l0.12,-0.32l-0.75,-2.8l-0.01,-2.48l1.81,-1.78l0.09,-0.22l-0.06,-2.3l1.39,-2.69l0.03,-0.14l0.01,-2.58l-0.11,-0.24l-0.57,-0.45l-1.1,-4.59l1.49,-2.73l0.04,-0.17l-0.23,-2.59l0.86,-2.38l1.6,-2.48l1.74,-1.65l0.04,-0.39l-0.64,-0.89l0.42,-0.7l0.04,-0.16l-0.08,-4.26l2.55,-1.23l0.16,-0.18l0.86,-2.75l-0.01,-0.22l-0.22,-0.48l1.84,-2.1l3.0,0.59ZM256.77,438.98l-2.1,0.15l-1.18,-1.14l-0.19,-0.08l-1.53,-0.09l-2.38,-0.0l-0.0,-6.28l0.4,0.65l1.25,2.55l0.11,0.12l3.26,2.07l3.19,0.8l-0.82,1.26Z",
        name: "Argentina"
    },
    AU: {
        path: "M705.55,353.06l0.09,0.09l0.37,0.05l0.13,-0.35l-0.57,-1.69l0.48,0.3l0.71,0.99l0.34,0.11l0.2,-0.29l-0.04,-1.37l-0.04,-0.14l-1.22,-2.07l-0.28,-0.9l-0.51,-0.69l0.24,-1.33l0.52,-0.7l0.34,-1.32l0.01,-0.13l-0.25,-1.44l0.51,-0.94l0.1,1.03l0.23,0.26l0.32,-0.14l1.01,-1.72l1.94,-0.84l1.27,-1.14l1.84,-0.92l1.0,-0.18l0.6,0.28l0.26,-0.0l1.94,-0.96l1.48,-0.28l0.19,-0.13l0.32,-0.49l0.51,-0.18l1.42,0.05l2.63,-0.76l0.11,-0.06l1.36,-1.15l0.08,-0.1l0.61,-1.33l1.42,-1.27l0.1,-0.19l0.11,-1.03l0.06,-1.32l1.39,-1.74l0.85,1.79l0.4,0.14l1.07,-0.51l0.11,-0.45l-0.77,-1.05l0.53,-0.84l0.86,0.43l0.43,-0.22l0.29,-1.85l1.29,-1.19l0.6,-0.98l1.16,-0.4l0.2,-0.27l0.02,-0.34l0.74,0.2l0.38,-0.27l0.03,-0.44l1.98,-0.61l1.7,1.08l1.36,1.48l0.22,0.1l1.55,0.02l1.57,0.24l0.33,-0.4l-0.48,-1.27l1.09,-1.86l1.06,-0.63l0.1,-0.42l-0.28,-0.46l0.93,-1.24l1.36,-0.8l1.16,0.27l0.14,0.0l2.1,-0.48l0.23,-0.3l-0.05,-1.3l-0.18,-0.26l-1.08,-0.49l0.44,-0.12l1.52,0.58l1.39,1.06l2.11,0.65l0.19,-0.0l0.59,-0.21l1.44,0.72l0.27,0.0l1.37,-0.68l0.84,0.2l0.26,-0.06l0.37,-0.3l0.82,0.89l-0.56,1.14l-0.84,0.91l-0.75,0.07l-0.26,0.38l0.26,0.9l-0.67,1.15l-0.88,1.24l-0.05,0.25l0.18,0.72l0.12,0.17l1.99,1.42l1.96,0.84l1.25,0.86l1.8,1.51l0.19,0.07l0.63,-0.0l1.15,0.58l0.34,0.7l0.17,0.15l2.39,0.88l0.24,-0.02l1.65,-0.88l0.14,-0.16l0.49,-1.37l0.52,-1.19l0.31,-1.39l0.75,-2.02l0.01,-0.19l-0.33,-1.16l0.16,-0.67l0.0,-0.13l-0.28,-1.41l0.3,-1.78l0.42,-0.45l0.05,-0.33l-0.33,-0.73l0.56,-1.25l0.48,-1.39l0.07,-0.69l0.58,-0.59l0.48,0.84l0.17,1.53l0.17,0.24l0.47,0.23l0.09,0.9l0.05,0.14l0.87,1.23l0.17,1.33l-0.09,0.89l0.03,0.15l0.9,2.0l0.43,0.13l1.38,-0.83l0.71,0.92l1.06,0.88l-0.22,0.96l0.0,0.14l0.53,2.2l0.38,1.3l0.15,0.18l0.52,0.26l0.62,2.01l-0.23,1.27l0.02,0.18l0.81,1.76l0.14,0.14l2.69,1.35l3.21,2.21l-0.2,0.4l0.04,0.34l1.39,1.6l0.95,2.78l0.43,0.16l0.79,-0.46l0.85,0.96l0.39,0.05l0.22,-0.15l0.36,2.33l0.09,0.18l1.78,1.63l1.16,1.01l1.9,2.1l0.67,2.05l0.06,1.47l-0.17,1.64l0.03,0.17l1.16,2.22l-0.14,2.28l-0.43,1.24l-0.68,2.44l0.04,1.63l-0.48,1.92l-1.06,2.43l-1.79,1.32l-0.1,0.12l-0.91,2.15l-0.82,1.37l-0.76,2.47l-0.98,1.46l-0.63,2.14l-0.33,2.02l0.1,0.82l-1.21,0.85l-2.71,0.1l-0.13,0.03l-2.31,1.19l-1.21,1.17l-1.34,1.11l-1.89,-1.18l-1.33,-0.46l0.32,-1.24l-0.4,-0.35l-1.46,0.61l-2.06,1.98l-1.99,-0.73l-1.43,-0.46l-1.45,-0.22l-2.32,-0.81l-1.51,-1.67l-0.45,-2.11l-0.6,-1.5l-0.07,-0.11l-1.23,-1.16l-0.16,-0.08l-1.96,-0.28l0.59,-0.99l0.03,-0.24l-0.61,-2.1l-0.54,-0.08l-1.16,1.85l-1.23,0.29l0.73,-0.88l0.06,-0.12l0.37,-1.57l0.93,-1.33l0.05,-0.2l-0.2,-2.07l-0.53,-0.17l-2.01,2.35l-1.52,0.94l-0.12,0.14l-0.82,1.93l-1.5,-0.9l0.07,-1.32l-0.06,-0.2l-1.57,-2.04l-1.15,-0.92l0.3,-0.41l-0.1,-0.44l-3.21,-1.69l-0.13,-0.03l-1.69,-0.08l-2.35,-1.31l-0.16,-0.04l-4.55,0.27l-3.24,0.99l-2.8,0.91l-2.33,-0.18l-0.17,0.03l-2.63,1.41l-2.14,0.64l-0.2,0.19l-0.47,1.42l-0.8,0.99l-1.99,0.06l-1.55,0.24l-2.27,-0.5l-1.79,0.3l-1.71,0.13l-0.19,0.09l-1.38,1.39l-0.58,-0.1l-0.21,0.04l-1.26,0.8l-1.13,0.85l-1.72,-0.1l-1.6,-0.0l-2.58,-1.76l-1.21,-0.49l0.04,-1.19l1.04,-0.32l0.16,-0.12l0.42,-0.64l0.05,-0.19l-0.09,-0.97l0.3,-2.0l-0.28,-1.64l-1.34,-2.84l-0.39,-1.49l0.1,-1.51l-0.04,-0.17l-0.96,-1.72l-0.06,-0.73l-0.09,-0.19l-1.04,-1.01l-0.3,-2.02l-0.05,-0.12l-1.23,-1.83ZM784.95,393.35l2.39,1.01l0.2,0.01l3.26,-0.96l1.19,0.16l0.16,3.19l-0.78,0.95l-0.07,0.16l-0.19,1.83l-0.43,-0.41l-0.44,0.03l-1.61,1.96l-0.4,-0.12l-1.38,-0.09l-1.43,-2.42l-0.37,-2.03l-1.4,-2.53l0.04,-0.94l1.27,0.2Z",
        name: "Australia"
    },
    IL: {
        path: "M509.04,199.22l0.71,0.0l0.27,-0.17l0.15,-0.33l0.19,-0.01l0.02,0.73l-0.27,0.34l0.02,0.08l-0.32,0.62l-0.65,-0.27l-0.41,0.19l-0.52,1.85l0.16,0.35l0.14,0.07l-0.17,0.1l-0.14,0.21l-0.11,0.73l0.39,0.33l0.81,-0.26l0.03,0.64l-0.97,3.43l-1.28,-3.67l0.62,-0.78l-0.03,-0.41l0.58,-1.16l0.5,-2.07l0.27,-0.54Z",
        name: "Israel"
    },
    IN: {
        path: "M615.84,192.58l2.4,2.97l-0.24,2.17l0.05,0.2l0.94,1.35l-0.06,0.97l-1.46,-0.3l-0.35,0.36l0.7,3.06l0.12,0.18l2.46,1.75l3.11,1.72l-1.23,0.96l-0.1,0.13l-0.97,2.55l0.16,0.38l2.41,1.02l2.37,1.33l3.27,1.52l3.43,0.37l1.37,1.3l0.17,0.08l1.92,0.25l3.0,0.62l2.15,-0.04l0.28,-0.22l0.29,-1.06l0.0,-0.13l-0.32,-1.66l0.16,-0.94l1.0,-0.37l0.23,2.28l0.18,0.24l2.28,1.02l0.2,0.02l1.52,-0.41l2.06,0.18l2.08,-0.08l0.29,-0.27l0.18,-1.66l-0.1,-0.26l-0.53,-0.44l1.38,-0.23l0.15,-0.07l2.26,-2.0l2.75,-1.65l1.97,0.63l0.25,-0.03l1.54,-0.99l0.89,1.28l-0.72,0.97l0.2,0.48l2.49,0.37l0.11,0.61l-0.69,0.39l-0.15,0.3l0.15,1.22l-1.36,-0.37l-0.23,0.03l-3.24,1.86l-0.15,0.28l0.07,1.44l-1.33,2.16l-0.04,0.13l-0.12,1.24l-0.98,1.91l-1.72,-0.53l-0.39,0.28l-0.09,2.66l-0.52,0.83l-0.04,0.23l0.21,0.89l-0.71,0.36l-1.21,-3.85l-0.29,-0.21l-0.69,0.01l-0.29,0.23l-0.28,1.17l-0.84,-0.84l0.6,-1.17l0.97,-0.13l0.23,-0.16l1.15,-2.25l-0.18,-0.42l-1.54,-0.47l-2.3,0.04l-2.13,-0.33l-0.19,-1.63l-0.26,-0.26l-1.13,-0.13l-1.93,-1.13l-0.42,0.13l-0.88,1.82l0.08,0.37l1.47,1.15l-1.21,0.77l-0.1,0.1l-0.56,0.97l0.13,0.42l1.31,0.61l-0.36,1.35l0.01,0.2l0.85,1.95l0.37,2.05l-0.26,0.68l-1.55,-0.02l-3.09,0.54l-0.25,0.32l0.13,1.84l-1.21,1.4l-3.64,1.79l-2.79,3.04l-1.86,1.61l-2.48,1.68l-0.13,0.25l-0.0,1.0l-1.07,0.55l-2.21,0.9l-1.13,0.13l-0.25,0.19l-0.75,1.96l-0.02,0.15l0.52,3.31l0.13,2.03l-1.03,2.35l-0.03,0.12l-0.01,4.03l-1.02,0.1l-0.23,0.15l-1.14,1.93l0.04,0.36l0.44,0.48l-1.83,0.57l-0.18,0.15l-0.81,1.65l-0.74,0.53l-2.14,-2.12l-1.14,-3.47l-0.96,-2.57l-0.9,-1.26l-1.3,-2.38l-0.61,-3.14l-0.44,-1.62l-2.29,-3.56l-1.03,-4.94l-0.74,-3.29l0.01,-3.12l-0.49,-2.51l-0.41,-0.22l-3.56,1.53l-1.59,-0.28l-2.96,-2.87l0.94,-0.74l0.06,-0.41l-0.74,-1.03l-2.73,-2.1l1.35,-1.43l5.38,0.01l0.29,-0.36l-0.5,-2.29l-0.09,-0.15l-1.33,-1.28l-0.27,-1.96l-0.12,-0.2l-1.36,-1.0l2.42,-2.48l2.77,0.2l0.24,-0.1l2.62,-2.85l1.59,-2.8l2.41,-2.74l0.07,-0.2l-0.04,-1.82l2.01,-1.51l-0.01,-0.49l-1.95,-1.33l-0.83,-1.81l-0.82,-2.27l0.98,-0.97l3.64,0.66l2.89,-0.42l0.17,-0.08l2.18,-2.15Z",
        name: "India"
    },
    TZ: {
        path: "M505.77,287.58l0.36,0.23l8.95,5.03l0.15,1.3l0.13,0.21l3.4,2.37l-1.07,2.88l-0.02,0.14l0.15,1.42l0.15,0.23l1.47,0.84l0.05,0.42l-0.66,1.44l-0.02,0.18l0.13,0.72l-0.16,1.16l0.03,0.19l0.87,1.57l1.03,2.48l0.12,0.14l0.53,0.32l-1.59,1.18l-2.64,0.95l-1.45,-0.04l-0.2,0.07l-0.81,0.69l-1.64,0.06l-0.68,0.3l-2.9,-0.69l-1.71,0.17l-0.65,-3.18l-0.05,-0.12l-1.35,-1.88l-0.19,-0.12l-2.41,-0.46l-1.38,-0.74l-1.63,-0.44l-0.96,-0.41l-0.95,-0.58l-1.31,-3.09l-1.47,-1.46l-0.45,-1.31l0.24,-1.34l-0.39,-1.99l0.71,-0.08l0.18,-0.09l0.91,-0.91l0.98,-1.31l0.59,-0.5l0.11,-0.24l-0.02,-0.81l-0.08,-0.2l-0.47,-0.5l-0.1,-0.67l0.51,-0.23l0.18,-0.25l0.14,-1.47l-0.05,-0.2l-0.76,-1.09l0.45,-0.15l2.71,0.03l5.01,-0.19Z",
        name: "Tanzania"
    },
    AZ: {
        path: "M539.36,175.66l0.16,0.09l1.11,0.2l0.32,-0.15l0.4,-0.71l1.22,-0.99l1.11,1.33l1.26,2.09l0.22,0.14l1.06,0.13l0.28,0.29l-1.46,0.17l-0.26,0.24l-0.43,2.26l-0.39,0.92l-0.85,0.63l-0.12,0.25l0.06,1.2l-0.22,0.05l-1.28,-1.25l0.74,-1.25l-0.03,-0.35l-0.74,-0.86l-0.3,-0.1l-1.05,0.27l-2.49,1.82l-0.04,-1.46l-0.18,-0.27l-1.09,-0.47l-0.8,-0.6l0.53,-0.7l-0.06,-0.42l-1.11,-0.84l0.34,-0.51l-0.11,-0.43l-0.89,-0.48l-0.33,-0.49l0.25,-0.2l1.78,0.81l1.35,0.18l0.25,-0.09l0.34,-0.35l0.02,-0.39l-1.04,-1.36l0.28,-0.18l0.49,0.07l1.65,1.74ZM533.53,180.16l0.63,0.67l0.22,0.09l0.8,-0.0l0.04,0.31l0.66,1.09l-0.94,-0.21l-1.16,-1.24l-0.25,-0.71Z",
        name: "Azerbaijan"
    },
    IE: {
        path: "M405.17,135.35l0.36,2.16l-1.78,2.84l-4.28,1.91l-3.02,-0.43l1.81,-3.13l0.02,-0.26l-1.23,-3.26l3.24,-2.56l1.54,-1.32l0.37,1.33l-0.49,1.77l0.3,0.38l1.49,-0.05l1.68,0.63Z",
        name: "Ireland"
    },
    ID: {
        path: "M756.56,287.86l0.69,4.02l0.15,0.21l2.59,1.5l0.39,-0.07l2.05,-2.61l2.75,-1.45l2.09,-0.0l2.08,0.85l1.85,0.89l2.52,0.46l0.08,15.44l-1.72,-1.6l-0.15,-0.07l-2.54,-0.51l-0.29,0.1l-0.53,0.62l-2.53,0.06l0.78,-1.51l1.48,-0.66l0.17,-0.34l-0.65,-2.74l-1.23,-2.19l-0.14,-0.13l-4.85,-2.13l-2.09,-0.23l-3.7,-2.28l-0.41,0.1l-0.67,1.11l-0.63,0.14l-0.41,-0.67l-0.01,-1.01l-0.14,-0.25l-1.39,-0.89l2.05,-0.69l1.73,0.05l0.29,-0.39l-0.21,-0.66l-0.29,-0.21l-3.5,-0.0l-0.9,-1.36l-0.19,-0.13l-2.14,-0.44l-0.65,-0.76l2.86,-0.51l1.28,-0.79l3.75,0.96l0.32,0.76ZM758.01,300.37l-0.79,1.04l-0.14,-1.07l0.4,-0.81l0.29,-0.47l0.24,0.31l-0.0,1.0ZM747.45,292.9l0.48,1.02l-1.45,-0.69l-2.09,-0.21l-1.45,0.16l-1.28,-0.07l0.35,-0.81l2.86,-0.1l2.58,0.68ZM741.15,285.69l-0.16,-0.25l-0.72,-3.08l0.47,-1.86l0.35,-0.38l0.1,0.73l0.25,0.26l1.28,0.19l0.18,0.78l-0.11,1.8l-0.96,-0.18l-0.35,0.22l-0.38,1.52l0.05,0.24ZM741.19,285.75l0.76,0.97l-0.11,0.05l-0.65,-1.02ZM739.18,293.52l-0.61,0.54l-1.44,-0.38l-0.25,-0.55l1.93,-0.09l0.36,0.48ZM728.4,295.87l-0.27,-0.07l-2.26,0.89l-0.37,-0.41l0.27,-0.8l-0.09,-0.33l-1.68,-1.37l0.17,-2.29l-0.42,-0.3l-1.67,0.76l-0.17,0.29l0.21,2.92l0.09,3.34l-1.22,0.28l-0.78,-0.54l0.65,-2.1l0.01,-0.14l-0.39,-2.42l-0.29,-0.25l-0.86,-0.02l-0.63,-1.4l0.99,-1.61l0.35,-1.97l1.24,-3.73l0.49,-0.96l1.95,-1.7l1.86,0.69l3.16,0.35l2.92,-0.1l0.17,-0.06l2.24,-1.65l0.11,0.14l-1.8,2.22l-1.72,0.44l-2.41,-0.48l-4.21,0.13l-2.19,0.36l-0.25,0.24l-0.36,1.9l0.08,0.27l2.24,2.23l0.4,0.02l1.29,-1.08l3.19,-0.58l-0.19,0.06l-1.04,1.4l-2.13,0.94l-0.12,0.45l2.26,3.06l-0.37,0.69l0.03,0.32l1.51,1.95ZM728.48,295.97l0.59,0.76l-0.02,1.37l-1.0,0.55l-0.64,-0.58l1.09,-1.84l-0.02,-0.26ZM728.64,286.95l0.79,-0.14l-0.07,0.39l-0.72,-0.24ZM732.38,310.1l-1.89,0.49l-0.06,-0.06l0.17,-0.64l1.0,-1.42l2.14,-0.87l0.1,0.2l0.04,0.58l-1.49,1.72ZM728.26,305.71l-0.17,0.63l-3.53,0.67l-3.02,-0.28l-0.0,-0.42l1.66,-0.44l1.47,0.71l0.16,0.03l1.75,-0.21l1.69,-0.69ZM722.98,310.33l-0.74,0.03l-2.52,-1.35l1.42,-0.3l1.19,0.7l0.72,0.63l-0.06,0.28ZM716.24,305.63l0.66,0.49l0.22,0.06l1.35,-0.18l0.31,0.53l-4.18,0.77l-0.8,-0.01l0.51,-0.86l1.2,-0.02l0.24,-0.12l0.49,-0.65ZM715.84,280.21l0.09,0.34l2.25,1.86l-2.25,0.22l-0.24,0.17l-0.84,1.71l-0.03,0.15l0.1,2.11l-2.27,1.62l-0.13,0.24l-0.06,2.46l-0.74,2.92l-0.02,-0.05l-0.39,-0.16l-2.62,1.04l-0.86,-1.33l-0.23,-0.14l-1.71,-0.14l-1.19,-0.76l-0.25,-0.03l-2.78,0.84l-0.79,-1.05l-0.26,-0.12l-1.61,0.13l-1.8,-0.25l-0.36,-3.13l-0.15,-0.23l-1.18,-0.65l-1.13,-2.02l-0.33,-2.1l0.27,-2.19l1.05,-1.17l0.28,1.12l0.1,0.16l1.71,1.41l0.28,0.05l1.55,-0.49l1.54,0.17l0.23,-0.07l1.4,-1.21l1.05,-0.19l2.3,0.68l0.16,0.0l2.04,-0.53l0.21,-0.19l1.26,-3.41l0.91,-0.82l0.09,-0.14l0.8,-2.64l2.63,0.0l1.71,0.33l-1.19,1.89l0.02,0.34l1.74,2.24l-0.37,1.0ZM692.67,302.0l0.26,0.19l4.8,0.25l0.28,-0.16l0.44,-0.83l4.29,1.12l0.85,1.52l0.23,0.15l3.71,0.45l2.37,1.15l-2.06,0.69l-2.77,-1.0l-2.25,0.07l-2.57,-0.18l-2.31,-0.45l-2.94,-0.97l-1.84,-0.25l-0.13,0.01l-0.97,0.29l-4.34,-0.98l-0.38,-0.94l-0.25,-0.19l-1.76,-0.14l1.31,-1.84l2.81,0.14l1.97,0.96l0.95,0.19l0.28,0.74ZM685.63,299.27l-2.36,0.04l-2.07,-2.05l-3.17,-2.02l-1.06,-1.5l-1.88,-2.02l-1.22,-1.85l-1.9,-3.49l-2.2,-2.11l-0.71,-2.08l-0.94,-1.99l-0.1,-0.12l-2.21,-1.54l-1.35,-2.17l-1.86,-1.39l-2.53,-2.68l-0.14,-0.81l1.22,0.08l3.76,0.47l2.16,2.4l1.94,1.7l1.37,1.04l2.35,2.67l0.22,0.1l2.44,0.04l1.99,1.62l1.42,2.06l0.09,0.09l1.67,1.0l-0.88,1.8l0.11,0.39l1.44,0.87l0.13,0.04l0.68,0.05l0.41,1.62l0.87,1.4l0.22,0.14l1.71,0.21l1.06,1.38l-0.61,3.04l-0.09,3.6Z",
        name: "Indonesia"
    },
    UA: {
        path: "M500.54,141.42l0.9,0.13l0.27,-0.11l0.52,-0.62l0.68,0.13l2.43,-0.3l1.32,1.57l-0.45,0.48l-0.07,0.26l0.21,1.03l0.27,0.24l1.85,0.15l0.76,1.22l-0.05,0.55l0.2,0.31l3.18,1.15l0.18,0.01l1.75,-0.47l1.42,1.41l0.22,0.09l1.42,-0.03l3.44,0.99l0.02,0.65l-0.97,1.62l-0.03,0.24l0.52,1.67l-0.29,0.79l-2.24,0.22l-0.14,0.05l-1.29,0.89l-0.13,0.23l-0.07,1.16l-1.75,0.22l-0.12,0.04l-1.6,0.98l-2.27,0.16l-0.12,0.04l-2.16,1.17l-0.16,0.29l0.15,1.94l0.14,0.23l1.23,0.75l0.18,0.04l2.06,-0.15l-0.22,0.51l-2.67,0.54l-3.27,1.72l-1.0,-0.45l0.45,-1.19l-0.19,-0.39l-2.34,-0.78l0.15,-0.2l2.32,-1.0l0.09,-0.49l-0.73,-0.72l-0.15,-0.08l-3.69,-0.75l-0.14,-0.96l-0.35,-0.25l-2.32,0.39l-0.21,0.15l-0.91,1.7l-1.77,2.1l-0.93,-0.44l-0.24,-0.0l-1.05,0.45l-0.48,-0.25l0.13,-0.07l0.14,-0.15l0.43,-1.04l0.67,-0.97l0.04,-0.26l-0.1,-0.31l0.04,-0.02l0.11,0.19l0.24,0.15l1.48,0.09l0.78,-0.25l0.07,-0.53l-0.27,-0.19l0.09,-0.25l-0.08,-0.33l-0.81,-0.74l-0.34,-1.24l-0.14,-0.18l-0.73,-0.42l0.15,-0.87l-0.11,-0.29l-1.13,-0.86l-0.15,-0.06l-0.97,-0.11l-1.79,-0.97l-0.2,-0.03l-1.66,0.32l-0.13,0.06l-0.52,0.41l-0.95,-0.0l-0.23,0.11l-0.56,0.66l-1.74,0.29l-0.79,0.43l-1.01,-0.68l-0.16,-0.05l-1.57,-0.01l-1.52,-0.35l-0.23,0.04l-0.71,0.45l-0.09,-0.43l-0.13,-0.19l-1.18,-0.74l0.38,-1.02l0.53,-0.64l0.35,0.12l0.37,-0.41l-0.57,-1.29l2.1,-2.5l1.16,-0.36l0.2,-0.2l0.27,-0.92l-0.01,-0.2l-1.1,-2.52l0.79,-0.09l0.13,-0.05l1.3,-0.86l1.83,-0.07l2.48,0.26l2.84,0.8l1.91,0.06l0.88,0.45l0.29,-0.01l0.72,-0.44l0.49,0.58l0.25,0.11l2.2,-0.16l0.94,0.3l0.39,-0.26l0.15,-1.57l0.61,-0.59l2.01,-0.19Z",
        name: "Ukraine"
    },
    QA: {
        path: "M548.47,221.47l-0.15,-1.72l0.59,-1.23l0.38,-0.16l0.54,0.6l0.04,1.4l-0.47,1.37l-0.41,0.11l-0.53,-0.37Z",
        name: "Qatar"
    },
    MZ: {
        path: "M507.71,314.14l1.65,-0.18l2.96,0.7l0.2,-0.02l0.6,-0.29l1.68,-0.06l0.18,-0.07l0.8,-0.69l1.5,0.02l2.74,-0.98l1.74,-1.27l0.25,0.7l-0.1,2.47l0.31,2.27l0.1,3.97l0.42,1.24l-0.7,1.71l-0.94,1.73l-1.52,1.52l-5.06,2.21l-2.88,2.8l-1.01,0.51l-1.72,1.81l-0.99,0.58l-0.15,0.23l-0.21,1.86l0.04,0.19l1.17,1.95l0.47,1.47l0.03,0.74l0.39,0.28l0.05,-0.01l-0.06,2.13l-0.39,1.19l0.1,0.33l0.42,0.32l-0.28,0.83l-0.95,0.86l-2.03,0.88l-3.08,1.49l-1.1,0.99l-0.09,0.28l0.21,1.13l0.21,0.23l0.38,0.11l-0.14,0.89l-1.39,-0.02l-0.17,-0.94l-0.38,-1.23l-0.2,-0.89l0.44,-2.91l-0.01,-0.14l-0.65,-1.88l-1.15,-3.55l2.52,-2.85l0.68,-1.89l0.29,-0.18l0.14,-0.2l0.28,-1.53l-0.03,-0.19l-0.36,-0.7l0.1,-1.83l0.49,-1.84l-0.01,-3.26l-0.14,-0.25l-1.3,-0.83l-0.11,-0.04l-1.08,-0.17l-0.47,-0.55l-0.1,-0.08l-1.16,-0.54l-0.13,-0.03l-1.83,0.04l-0.32,-2.25l7.19,-1.99l1.32,1.12l0.29,0.06l0.55,-0.19l0.75,0.49l0.11,0.81l-0.49,1.11l-0.02,0.15l0.19,1.81l0.09,0.18l1.63,1.59l0.48,-0.1l0.72,-1.68l0.99,-0.49l0.17,-0.29l-0.21,-3.29l-0.04,-0.13l-1.11,-1.92l-0.9,-0.82l-0.21,-0.08l-0.62,0.03l-0.63,-2.98l0.61,-1.67Z",
        name: "Mozambique"
    }
},
height: 440.7063107441331,
projection: {
    type: "mill",
    centralMeridian: 11.5
},
width: 900
}), $.fn.vectorMap("addMap", "germany", {
insets: [{
    width: 900,
    top: 0,
    height: 1013.840551394365,
    bbox: [{
        y: -6845410.069009287,
        x: 651774.9220426602
    }, {
        y: -5694934.7264151545,
        x: 1673067.4782643116
    }],
    left: 0
}],
paths: {
    "DE-BE": {
        path: "M710.97,355.67l2.45,-3.28l-0.74,-2.05l0.47,-2.19l4.21,-3.83l-0.08,-0.98l-1.47,-2.18l0.73,-6.66l-0.34,-1.33l0.64,-1.38l4.96,1.6l1.09,-0.07l0.35,-0.78l-0.73,-1.75l1.04,-2.7l3.93,-0.89l1.18,-0.91l1.37,-2.19l0.63,0.01l0.3,2.64l0.85,0.92l1.79,0.65l3.7,0.21l1.86,-0.49l0.87,-1.38l2.02,-1.38l1.68,0.91l0.97,-0.04l0.86,-1.18l2.39,-1.71l2.47,2.42l-0.23,3.06l0.52,1.47l6.52,6.23l4.25,2.44l3.3,0.77l0.05,0.57l-2.28,4.44l-0.17,0.98l0.34,0.75l4.03,-0.16l1.11,0.49l1.94,1.99l3.86,1.43l1.24,1.07l-1.08,1.15l-0.45,2.45l-2.59,2.1l-0.44,1.05l-0.03,3.19l-3.09,1.21l-1.68,2.53l-0.48,-0.04l-0.58,-4.22l-1.2,-1.24l-1.76,0.03l-2.4,-0.66l-5.7,-2.14l-1.45,0.18l-1.06,0.71l-1.67,-0.06l-1.51,-1.94l-1.09,-0.45l-3.45,1.11l-0.39,0.91l0.23,2.67l-2.7,-0.01l-1.66,-0.65l-2.96,-2.75l-3.67,0.8l-1.65,-1.86l-4.07,1.35l-2.3,-1.43l-1.43,-0.19l-4.21,1.59l-1.43,1.07l-3.65,-0.65l-2.32,-1.38Z",
        name: "Berlin"
    },
    "DE-ST": {
        path: "M511.79,377.72l-0.19,-1.91l-0.72,-0.39l-1.04,0.12l-2.74,-3.18l1.67,-1.48l0.22,-0.86l-1.19,-2.29l-1.94,-0.96l-0.25,-1.3l6.19,-1.39l0.66,-0.85l0.34,-2.05l-0.72,-1.15l-2.88,-1.99l-2.59,-1.1l-6.9,-7.59l0.2,-1.63l0.97,-2.19l1.6,-0.58l2.71,0.33l0.63,-0.68l-0.8,-1.54l-3.95,-4.79l-0.65,-2.15l0.15,-3.19l2.52,-2.52l0.3,-1.36l-0.59,-0.69l-1.69,-0.45l-2.69,1.14l-4.12,-4.8l-4.69,-7.76l-1.68,-0.93l-1.1,-0.03l-0.74,-0.64l-0.72,-3.4l-1.93,-1.84l-1.63,-3.11l0.21,-6.3l3.24,-1.17l8.84,-0.11l5.6,-1.61l1.86,-0.81l2.94,-2.34l0.98,-3.21l1.3,-0.62l3.41,-0.05l5.48,1.55l5.8,-0.35l4.62,0.71l2.34,1.29l0.9,1.23l0.82,0.36l3.02,-1.2l2.95,0.16l5.95,-2.08l3.49,-0.77l6.06,-4.61l2.59,-0.21l0.65,-0.44l-0.46,-3.58l0.53,-2.9l0.67,-1.42l1.25,-0.47l2.82,0.28l1.14,-0.76l1.83,-4.18l4.01,-0.91l0.66,0.36l0.03,0.89l-1.23,1.73l0.1,0.67l1.49,0.6l3.15,0.11l0.93,0.56l0.82,2.89l0.78,0.98l1.88,0.24l4.75,-1.69l2.83,3.53l1.47,0.99l3.2,0.18l0.8,0.39l-1.59,2.68l0.04,1.04l6.37,3.52l2.86,0.5l3.91,1.7l1.79,0.32l1.6,-0.49l9.55,-0.59l1.23,1.43l-0.1,1.4l0.36,0.43l2.52,0.11l3.74,-0.88l2.6,0.83l0.88,1.31l1.94,5.74l-0.37,1.25l-3.41,2.66l0.12,1.74l1.16,1.92l-1.63,1.6l-0.18,0.67l2.03,4.6l1.7,1.56l-0.22,2.11l-1.94,3.95l-1.64,0.62l-2.67,0.24l-1.09,7.37l-2.72,3.84l0.93,0.74l2.86,-0.07l-1.54,2.01l0.35,1.76l0.9,0.76l1.4,0.29l2.26,-0.57l1.13,-1.04l0.86,-2.15l1.44,0.6l2.73,3.1l3.31,-0.37l-0.45,1.01l-0.12,2.75l-2.0,3.63l-1.86,1.68l0.95,2.4l-0.76,2.32l-1.74,3.01l-0.24,2.5l0.55,2.31l-1.32,2.13l-1.56,4.21l0.39,3.28l1.16,1.2l1.26,0.31l1.26,1.89l-2.46,2.36l-2.25,5.35l1.74,3.68l2.91,2.5l1.02,2.21l2.48,1.24l1.76,1.58l6.03,6.74l0.45,2.41l1.41,1.2l4.18,2.62l1.15,0.31l1.94,-0.2l1.12,-1.25l0.72,0.02l2.52,2.54l6.33,3.8l4.95,0.78l3.84,-2.27l0.81,-1.47l0.8,0.01l12.49,6.29l4.9,0.63l1.31,0.76l1.17,2.76l0.67,0.48l5.45,0.26l2.91,0.68l2.89,2.9l5.51,3.2l1.89,0.62l6.6,-0.62l2.67,1.69l2.1,-2.22l3.58,0.12l1.37,0.49l-0.61,1.17l-3.36,3.14l-3.61,5.02l0.11,5.5l2.2,4.24l-0.27,1.33l-2.63,2.98l-6.68,4.5l-1.95,2.91l-1.38,-0.29l-2.04,-1.77l-1.47,-0.69l-3.02,1.13l-1.33,-1.29l-5.96,-2.2l-1.4,-2.03l-2.85,0.23l-1.12,1.22l-5.05,3.48l-1.7,0.67l-2.83,-1.01l-3.84,-0.38l-1.6,0.82l-1.73,2.63l-1.87,1.34l-0.75,0.06l-1.2,-0.73l-9.31,1.35l-1.31,-0.74l-7.91,-0.26l-1.23,0.64l-0.39,2.49l-0.58,0.97l-7.21,0.61l-5.74,2.15l-2.88,-0.27l-3.12,-1.14l-0.61,0.23l-0.85,2.22l-2.97,2.3l0.0,6.04l-0.39,1.31l-3.24,2.75l-0.2,0.6l0.24,2.8l0.87,1.54l0.25,5.08l1.44,3.13l-0.02,2.43l-0.59,1.0l-1.79,0.18l-1.27,0.88l-1.48,3.18l0.78,2.41l0.13,2.63l1.93,2.3l0.33,1.19l0.33,3.69l-1.38,2.32l-0.06,1.28l2.98,1.07l-0.36,3.43l1.04,1.66l2.05,1.61l0.74,2.67l0.69,0.46l3.84,0.63l0.12,0.58l-1.66,2.49l-0.51,2.75l0.48,0.84l2.2,1.1l0.4,1.34l-2.24,3.48l-3.39,3.59l-0.3,1.27l0.3,1.03l-1.41,0.98l-4.51,-3.3l-2.78,1.17l-5.63,-1.52l-6.69,0.89l-0.46,-1.34l-3.15,-1.42l-1.39,-2.34l-1.48,-1.16l-4.85,-1.85l-2.26,-1.41l-10.04,0.46l-1.28,0.77l-0.49,-0.17l-1.14,-0.87l-0.49,-1.71l-2.27,-3.62l-0.38,-3.14l-2.79,-1.83l-4.08,0.63l-9.15,-0.59l-2.95,1.42l-5.76,-0.36l-1.48,-0.74l-0.67,-1.44l-0.29,-1.31l0.88,-0.48l0.21,-1.0l-0.82,-3.64l-3.17,-3.99l-4.35,-1.91l-0.92,-1.2l1.06,-1.26l4.82,-0.76l2.6,-1.21l1.3,-1.0l1.78,-2.78l-5.66,-7.4l-2.67,-4.19l-5.25,-3.49l-2.66,-0.77l-9.16,-1.13l-4.19,0.07l-15.09,-1.54l-2.43,-1.15l-0.67,-1.06l0.66,-5.07l-2.54,-4.24l0.09,-3.13l-2.01,-2.26l-1.36,-3.22l0.38,-0.91l2.32,0.5l1.1,-0.74l-0.05,-1.59l-0.9,-1.75l-5.12,-1.56l-1.44,-1.06l-2.81,-0.05l-4.44,-1.92l-8.84,0.18l-1.37,-0.72l-2.68,-4.06l-0.08,-3.65l-0.75,-1.81l-1.67,-1.39l-2.47,-4.87l-1.67,-1.02l-1.66,-1.53l-0.2,-0.68l-0.45,-2.63l0.23,-5.1l4.6,-3.25l1.26,-1.81l0.13,-1.21l-0.61,-2.73l-2.14,-1.55l0.46,-2.26l2.22,-1.17l0.47,-0.99l-0.41,-0.45l-1.4,0.06l-1.36,-1.31l-2.26,-0.93l-0.26,-1.14l-1.7,-2.38l0.64,-0.28l2.89,0.27l1.38,-0.38l2.94,-2.56l0.12,-1.6l0.65,-0.27l5.49,-0.71l13.01,-0.0l4.52,-1.09l5.82,0.07l0.95,-0.32l0.84,-1.41l0.02,-1.82l-2.12,-2.15l6.25,-2.38l2.45,-1.72l1.9,-2.44l0.15,-1.3l-0.45,-1.63l-0.96,-0.73l-1.5,-0.32l-0.88,-1.48l0.88,-1.92l0.69,-0.6l3.37,-0.95l1.23,-0.98l0.29,-2.18l-0.33,-1.2l-0.96,-0.68l-0.96,0.83Z",
        name: "Sachsen-Anhalt"
    },
    "DE-RP": {
        path: "M24.7,661.05l1.01,-4.91l1.86,-3.59l-0.36,-1.08l-0.89,-0.67l0.56,-2.05l3.4,-0.91l0.8,-1.54l0.04,-1.62l-0.56,-1.46l-1.11,-1.1l2.88,-2.07l1.01,-1.26l6.1,-1.75l1.95,-1.44l-0.1,-2.63l1.49,-2.04l1.16,-0.57l3.4,0.64l2.72,-0.4l1.43,-1.19l0.08,-0.82l2.19,-0.04l2.75,-1.22l0.12,-1.12l-3.3,-4.51l0.21,-0.78l0.67,0.02l1.45,1.74l2.25,1.19l0.81,1.92l0.82,0.49l2.38,-0.73l4.61,-2.84l5.51,-1.09l3.26,1.3l-0.47,1.61l0.97,0.56l1.22,-0.02l3.26,-1.52l2.79,2.27l1.85,0.39l7.79,-1.85l0.81,-1.43l-0.35,-1.34l-1.6,-2.52l-0.39,-4.03l-0.58,-0.71l-1.84,-0.88l0.81,-2.09l-0.08,-1.91l5.26,-1.85l1.3,2.03l1.31,0.92l1.52,0.34l1.44,-0.2l1.72,-2.22l0.23,-2.63l-0.46,-3.09l2.61,-0.83l2.52,-3.21l5.73,-1.48l6.08,-3.37l3.16,0.86l1.4,-0.54l1.08,-1.76l2.26,0.63l1.29,-0.27l3.31,-2.51l1.1,-2.19l1.41,0.53l1.09,1.57l5.6,0.33l5.78,-1.33l3.39,-2.17l0.2,-1.77l0.88,-1.5l0.09,-3.33l-0.32,-0.56l0.36,-0.33l2.21,-0.55l3.74,0.25l8.22,-1.92l3.88,-1.81l2.82,0.16l1.83,-2.44l4.31,-1.56l1.43,-1.83l1.04,0.55l1.03,-0.5l0.25,-2.32l-1.9,-2.05l3.19,-1.64l2.37,-2.16l2.49,0.71l0.86,-0.57l0.06,-2.37l-1.22,-2.58l-0.36,-3.12l0.28,-1.24l2.88,-2.32l1.1,-0.27l5.23,1.22l-1.35,4.44l0.11,1.04l1.47,1.02l2.59,0.75l5.58,4.5l2.66,-0.65l1.19,4.08l-0.21,3.99l1.05,1.68l4.13,4.5l1.6,2.36l0.67,2.23l1.11,0.27l2.96,-0.98l3.41,1.51l-1.35,4.3l2.01,4.18l0.37,1.99l0.67,1.17l1.16,0.89l-2.47,5.41l-2.08,1.52l-1.78,0.13l-2.49,-2.33l-1.61,-0.07l-1.86,0.64l-1.53,1.74l-1.72,1.16l-0.43,1.63l-0.09,5.6l0.44,0.71l1.39,0.79l-1.7,1.6l-1.22,3.55l-1.13,0.8l-0.32,0.85l0.96,1.07l4.36,0.93l0.5,1.36l1.78,0.8l2.91,5.16l2.07,1.46l0.59,0.97l1.41,3.87l-0.08,1.13l-2.1,0.73l-5.08,-0.12l-0.86,0.67l-0.57,1.56l0.96,1.56l-1.7,2.25l-3.01,-1.54l-1.31,1.16l-5.75,2.53l-1.27,1.54l-1.43,3.64l0.16,1.15l0.76,0.84l2.47,1.42l-0.8,3.06l-2.12,-1.58l-3.93,0.35l-1.32,1.69l-0.7,2.73l-6.56,3.92l-0.04,0.64l7.67,5.45l0.64,0.92l0.36,1.7l2.08,2.34l4.06,-0.13l4.26,-1.18l4.75,-2.1l3.81,-2.44l12.19,-3.48l3.65,0.15l1.38,0.75l10.44,9.97l1.84,4.14l-1.41,4.58l3.95,6.18l0.91,3.46l1.88,2.97l0.7,1.92l1.15,1.53l3.75,-0.47l0.94,0.31l-1.39,2.5l-2.02,2.09l-3.21,0.55l-2.81,1.66l-1.73,2.69l-0.17,3.38l3.92,7.1l1.58,3.79l-0.74,3.29l1.87,2.64l3.47,7.75l0.0,0.5l-1.82,0.77l-0.24,1.24l1.95,0.94l3.25,0.62l0.75,1.05l-1.25,2.64l0.73,4.29l-3.48,6.65l-0.23,1.19l0.28,0.45l1.96,0.59l-0.25,1.12l-6.64,6.64l-2.46,1.7l-2.95,15.48l-7.19,12.57l-2.03,2.67l-3.08,2.82l-2.6,0.81l-1.24,-0.92l-9.59,-1.69l-15.64,-7.06l-7.37,0.32l-8.11,-1.99l-4.7,1.56l-4.04,-0.9l-3.61,0.89l-1.19,-0.24l-2.59,-3.05l-2.28,-1.0l-4.22,-0.62l-2.03,-1.09l-4.66,-5.46l1.06,-1.12l-0.92,-2.09l-1.87,-0.57l-3.96,-0.23l-0.7,-1.43l-5.89,0.08l-5.12,-4.44l-0.62,-4.08l0.63,-1.08l2.04,-0.24l1.38,-1.65l0.75,-2.82l1.47,-1.42l0.58,-2.29l1.93,-1.43l0.92,-1.29l-0.3,-1.73l0.64,-1.69l-0.53,-1.14l-1.2,-0.68l-7.8,-1.74l0.23,-0.69l-0.31,-0.68l-3.97,-4.06l-0.52,-1.64l0.26,-0.34l2.81,-2.58l2.63,-1.5l0.44,-1.24l-0.36,-1.78l-1.18,-0.55l-0.24,-3.37l-1.16,-1.98l-0.56,-1.53l-0.01,-1.85l-0.47,-0.49l-0.69,-0.08l-2.81,1.53l-2.73,0.22l-6.87,-4.65l-7.08,-0.5l-6.52,-3.12l-2.78,1.32l-3.01,-1.15l-8.19,4.3l-14.41,5.61l-4.21,0.13l-6.27,2.41l-11.26,-0.46l-13.4,1.04l0.12,-4.79l0.51,-1.28l3.97,-4.55l2.07,-3.33l-0.2,-1.32l-1.19,-0.9l1.32,-1.55l7.15,-3.91l0.14,-0.58l-0.58,-1.02l1.36,-0.0l-1.32,-3.0l0.06,-0.91l0.95,-0.88l-0.21,-1.97l0.74,-4.43l-0.78,-0.59l-3.34,-0.76l-4.76,-0.01l-1.61,-0.37l-6.11,-4.02l-1.05,-0.06l-1.94,0.71l-1.69,-3.31l-4.74,-2.03l-1.42,-1.21l-3.23,-6.53l-1.67,-2.3l-0.67,0.03l-0.75,1.23l-1.87,-4.14l-1.71,-2.21l-0.73,-5.03l-0.68,-1.17l-0.84,-0.48l1.01,-1.49l-0.26,-0.66l-0.57,-0.0Z",
        name: "Rheinland-Pfalz"
    },
    "DE-BB": {
        path: "M615.95,337.45l2.65,-3.43l1.0,-7.16l2.12,0.06l2.08,-0.84l1.16,-1.73l1.24,-3.83l-0.06,-1.38l-1.77,-1.68l-0.61,-1.91l-1.27,-1.95l0.04,-0.55l1.77,-1.93l-1.21,-2.26l-0.14,-1.2l3.23,-2.38l0.6,-1.83l-2.0,-6.05l-1.11,-1.63l-3.11,-1.0l-3.81,0.88l-1.98,-0.07l0.04,-1.32l-0.51,-0.97l-1.67,-1.06l-9.42,0.64l-1.52,0.49l-1.52,-0.26l-4.0,-1.73l-2.72,-0.45l-6.05,-3.35l1.24,-1.7l0.53,-1.54l-0.2,-0.49l-1.36,-0.62l-2.96,-0.11l-1.23,-0.81l-2.94,-3.67l-1.9,0.13l-3.46,1.45l-1.45,-0.21l-1.37,-3.72l-1.32,-0.74l-3.86,-0.4l0.99,-1.68l-0.01,-1.39l-1.2,-0.88l-4.52,0.93l-4.71,-1.53l-4.01,-0.79l-2.86,-2.43l-2.42,-0.67l-2.24,0.39l-3.27,1.85l-1.69,0.38l-2.55,-0.5l-4.46,-3.94l-1.24,-1.95l6.88,0.27l4.15,1.03l0.44,-0.36l0.41,-3.06l1.26,-0.51l3.04,0.0l5.26,2.45l2.98,-0.23l1.98,-1.24l0.85,-2.35l-0.99,-4.37l-1.49,-2.26l0.51,-1.09l6.11,-4.19l5.26,-1.62l3.25,-0.16l4.01,2.3l1.17,2.19l0.54,0.17l3.99,-1.61l5.11,0.21l0.42,-0.46l-0.31,-1.87l-1.57,-1.18l0.96,-0.35l2.95,0.42l2.23,-2.22l5.28,-1.8l2.09,0.53l3.55,-2.62l1.44,-0.2l1.23,-2.31l0.17,-1.79l2.41,-1.35l1.44,-2.09l5.54,-1.46l2.68,1.65l4.14,-1.96l0.91,0.3l2.34,3.19l6.9,1.55l4.13,1.99l4.62,3.38l2.81,1.31l1.58,1.72l1.67,0.3l3.5,-0.21l2.97,-0.63l10.88,2.19l1.22,0.48l2.77,2.25l7.11,1.35l0.38,3.34l1.27,0.92l6.9,-0.58l2.69,1.35l1.62,0.34l3.88,-0.72l2.7,-0.03l1.77,-0.58l0.24,0.59l-1.32,1.13l0.25,1.02l3.0,1.28l2.7,-0.34l4.68,-4.1l5.1,-3.08l0.85,-0.96l0.63,-1.75l3.06,-2.12l1.79,0.1l2.25,2.71l1.35,0.48l2.75,-0.0l2.19,-5.25l1.51,-1.43l1.48,-0.61l2.46,-0.19l1.97,0.33l3.98,1.73l1.99,0.37l1.84,-0.55l5.11,-3.36l1.11,-0.34l2.54,-2.43l3.16,-6.27l1.25,-3.96l1.26,-0.97l1.71,-0.74l3.64,-0.2l2.31,-1.78l1.79,-2.64l5.81,-4.06l3.38,-0.4l3.32,0.21l3.06,-1.06l0.25,-0.48l-0.46,-1.66l-2.44,-3.76l0.14,-1.93l1.1,0.14l2.53,3.13l4.32,1.37l0.21,2.84l2.8,4.16l0.58,1.9l1.86,2.02l6.85,-0.41l5.77,0.34l4.55,1.1l2.26,-2.31l2.19,-0.37l3.58,1.44l4.08,-0.21l1.93,0.35l0.14,3.17l-0.44,2.39l-1.48,2.82l-3.44,4.48l-8.18,4.5l-0.3,2.96l0.35,0.39l7.84,1.28l6.71,0.45l1.55,-1.05l0.55,-1.69l2.56,-1.06l2.7,-2.85l6.13,-3.09l1.1,6.95l3.56,3.47l-2.35,3.78l-2.7,2.5l-0.76,1.72l-0.3,2.0l1.13,5.86l-3.19,8.56l-1.25,2.29l-2.95,2.51l-5.73,3.75l-5.94,2.54l-4.8,2.91l-0.19,1.17l2.01,7.7l-0.38,2.38l-0.93,1.47l-2.53,1.81l-0.11,0.53l1.12,1.86l1.83,1.23l6.21,1.38l3.26,3.13l2.65,1.16l10.37,6.26l1.45,1.39l3.42,5.5l2.91,1.55l2.94,3.21l5.8,1.89l6.19,5.71l2.78,1.89l-2.55,4.42l-0.8,3.16l1.87,1.72l0.36,1.13l-1.52,2.92l-2.32,3.02l-5.2,4.02l0.58,5.35l2.33,5.75l2.0,3.74l-0.43,2.64l2.32,2.11l3.32,1.42l5.44,1.48l1.39,2.1l-0.03,2.42l-1.92,2.25l0.08,1.06l1.32,1.68l-1.4,4.1l-0.56,3.66l1.13,2.04l5.96,3.68l-2.26,2.67l-0.93,3.67l-2.66,4.47l-0.38,8.1l-0.79,2.47l-3.23,4.24l-5.61,4.73l-1.43,2.61l0.37,2.98l1.62,2.04l1.82,1.09l1.23,1.36l0.39,3.4l1.12,3.5l2.26,2.2l4.69,3.23l1.2,2.14l0.94,3.22l0.15,3.29l-1.1,2.49l-1.93,2.58l-0.7,3.23l-3.66,-0.14l-6.57,-2.63l-2.34,-0.38l-2.13,0.08l-4.25,1.0l-12.98,5.4l-3.61,0.69l-3.27,-1.81l-3.59,-1.09l-4.83,-0.51l-6.19,1.26l-5.24,2.78l-3.89,4.23l-0.68,1.23l-0.17,1.94l-1.45,2.85l-7.14,8.87l-0.65,0.19l-2.27,-0.54l-16.84,1.74l-14.86,-0.95l-5.83,-1.43l-2.12,0.31l-0.98,-0.34l-1.65,-2.02l-4.65,-3.18l-4.82,-1.95l-2.41,0.23l-2.41,1.49l-10.59,2.94l-1.25,-1.65l-2.07,-0.6l-0.75,0.79l-1.16,0.02l-1.41,1.38l-0.81,-2.22l1.62,-1.55l0.77,-1.93l0.17,-3.34l-0.18,-1.13l-0.84,-1.12l1.62,-1.1l0.44,-0.88l-0.76,-3.69l-0.72,-1.45l-2.14,-1.14l-0.81,-0.96l0.6,-2.51l-0.62,-1.27l-2.96,-1.84l-2.21,0.2l-4.76,-3.78l1.7,-2.55l6.61,-4.44l2.82,-3.17l0.38,-2.0l-1.67,-2.83l-0.69,-2.27l0.05,-4.22l3.44,-4.71l3.42,-3.22l0.85,-1.63l-0.22,-0.56l-1.97,-0.69l-3.9,-0.1l-0.87,0.57l-0.99,1.56l-1.68,-1.39l-0.92,-0.24l-6.51,0.63l-1.69,-0.55l-5.44,-3.16l-2.98,-2.95l-3.16,-0.75l-5.2,-0.19l-1.54,-3.01l-1.62,-1.0l-4.91,-0.63l-12.52,-6.31l-1.37,-0.04l-1.02,1.63l-3.7,2.15l-4.29,-0.78l-6.15,-3.7l-2.65,-2.62l-1.25,-0.12l-1.2,1.32l-2.1,0.07l-5.24,-3.32l-0.43,-0.41l-0.45,-2.39l-6.14,-6.86l-1.83,-1.64l-2.35,-1.12l-1.04,-2.24l-2.82,-2.38l-1.63,-3.44l2.18,-4.78l2.18,-1.89l0.42,-0.85l-1.58,-2.49l-1.43,-0.44l-0.82,-0.87l-0.3,-2.82l1.49,-3.94l1.39,-2.35l-0.54,-2.49l0.23,-2.31l1.67,-2.79l0.84,-2.57l-0.98,-2.26l1.75,-1.48l2.03,-3.68l0.22,-3.03l0.62,-1.6l-0.69,-0.46l-3.33,0.54l-2.5,-2.97l-1.99,-0.76l-0.88,0.53l-0.57,1.95l-0.64,0.66l-2.14,0.61l-1.09,-0.25l-0.6,-0.7l-0.12,-0.96l1.52,-1.8l-0.03,-0.65l-1.0,-0.56l-2.71,0.1ZM712.54,352.19l-2.37,3.67l3.21,2.06l3.86,0.55l1.44,-1.1l3.96,-1.53l1.03,0.13l2.59,1.49l4.07,-1.29l0.78,1.4l0.65,0.35l3.66,-0.78l2.86,2.7l1.94,0.73l3.1,0.02l0.58,-1.33l-0.28,-2.36l2.87,-1.01l0.71,0.29l1.11,1.71l0.74,0.37l1.99,0.05l1.22,-0.76l1.06,-0.11l5.52,2.1l2.54,0.69l1.57,-0.07l0.77,0.85l0.5,3.96l0.6,0.76l1.26,-0.25l1.55,-2.46l2.57,-0.77l0.7,-0.63l0.4,-1.04l-0.21,-2.54l0.65,-1.13l2.22,-1.63l0.53,-2.58l0.96,-0.76l0.18,-0.9l-1.61,-1.58l-3.92,-1.47l-1.78,-1.88l-1.41,-0.65l-3.7,0.31l0.05,-0.91l2.27,-4.37l-0.05,-1.23l-3.73,-1.1l-4.13,-2.37l-6.4,-6.13l-0.3,-0.98l0.18,-3.28l-3.1,-2.94l-0.74,0.12l-2.3,1.8l-0.69,1.04l-2.54,-0.92l-2.28,1.57l-0.89,1.39l-1.32,0.29l-3.59,-0.21l-1.51,-0.55l-0.47,-0.46l-0.28,-3.06l-1.65,-0.12l-0.75,0.48l-1.01,1.99l-0.99,0.74l-4.17,1.12l-1.16,3.09l0.7,1.81l-5.25,-1.72l-0.67,0.17l-1.1,2.14l0.34,1.33l-0.73,6.75l1.54,2.94l-4.11,3.6l-0.55,2.59l0.67,1.81Z",
        name: "Brandenburg"
    },
    "DE-NI": {
        path: "M81.08,339.28l1.1,-0.1l5.45,-2.27l0.08,-0.7l-3.73,-2.9l0.61,-3.18l-0.67,-1.31l3.06,-1.82l3.18,-0.81l9.22,-0.11l5.15,1.28l4.9,-0.57l4.92,1.39l0.44,-0.17l1.84,-2.98l0.72,-4.7l0.91,-14.27l0.85,-4.38l1.7,-3.94l8.03,-10.34l2.21,-4.61l0.91,-4.31l0.15,-4.82l-0.91,-9.53l-1.21,-2.75l-0.07,-1.47l2.29,-6.27l0.31,-2.16l-0.31,-5.61l1.97,-1.41l1.77,-2.46l0.39,-1.71l-0.65,-1.51l2.25,-2.78l1.16,-0.48l2.16,-0.03l2.02,0.43l3.4,1.74l2.32,0.46l-2.39,-3.32l-4.09,-1.29l-22.37,-0.65l-3.4,-1.38l-1.35,-3.49l-0.02,-9.79l0.41,-2.16l1.87,-4.02l0.44,-2.01l0.65,-0.98l5.6,0.72l0.9,-1.16l0.99,-0.52l0.76,-1.53l-0.16,-1.69l-0.97,-1.19l-2.96,-1.26l-1.11,-0.92l-0.17,-1.41l1.23,-1.3l3.18,-1.82l3.52,-3.21l1.94,-1.09l3.59,-3.04l7.63,-2.42l14.94,-1.37l2.1,1.75l2.47,0.45l14.47,-2.45l29.36,-3.34l7.48,1.77l-0.59,4.64l2.74,4.86l4.11,4.31l3.18,1.83l-0.8,2.12l0.21,0.55l3.61,1.09l0.92,1.16l-0.27,2.14l-0.82,1.08l-2.03,1.24l-1.69,0.71l-3.8,0.28l-1.88,0.92l-0.19,0.51l2.71,6.18l1.83,1.35l2.29,-0.85l2.51,0.5l3.29,2.64l1.98,2.6l1.58,0.59l1.63,-0.04l2.49,-0.82l1.28,-1.04l2.08,-2.8l2.25,-4.8l0.53,-4.58l-2.97,-3.04l-4.15,0.72l-1.61,-0.22l1.7,-8.25l0.76,-1.77l1.17,-1.02l1.54,-0.49l3.96,-0.16l1.72,0.64l3.92,4.81l4.06,1.68l8.33,1.34l3.51,1.38l0.0,0.51l-4.39,3.7l-1.7,3.1l-0.62,3.95l0.11,7.57l0.62,3.42l1.76,2.67l0.61,-3.75l-1.05,-8.31l0.09,-3.82l1.4,-2.72l3.98,-2.66l1.39,2.01l1.49,0.27l0.87,1.2l0.92,0.09l2.15,-1.63l1.59,-2.0l0.43,-2.32l-0.75,-3.85l-1.45,-3.55l1.02,-1.68l0.0,-0.68l-0.94,-0.41l-6.07,-0.16l-4.61,-1.38l-2.47,-6.49l-0.09,-4.31l4.23,-9.33l2.63,-8.11l1.64,-3.53l3.18,-3.08l2.1,-1.02l2.11,-0.39l2.98,0.48l5.89,4.6l3.78,1.61l7.84,1.58l4.28,-0.11l7.08,-1.42l3.87,0.25l2.07,-1.78l7.65,-1.53l7.73,0.06l1.66,-0.91l1.28,0.74l1.61,0.24l3.3,-0.13l2.79,2.62l9.6,13.75l7.97,6.94l1.39,4.1l6.73,8.07l1.68,1.23l5.34,1.37l5.83,3.24l6.42,1.19l0.53,5.27l2.42,2.65l2.28,4.16l4.04,3.28l1.17,-0.02l1.34,-1.59l1.38,-0.43l0.72,0.77l0.36,2.98l0.47,0.57l1.03,0.08l2.4,-0.92l3.03,1.16l5.29,-1.83l0.46,-0.52l0.05,-1.32l4.58,-1.24l2.69,2.2l2.0,0.47l2.17,2.24l1.6,0.94l1.86,0.35l5.4,-0.3l2.63,-2.81l1.7,-0.67l6.27,0.08l3.44,1.07l13.9,6.86l4.11,1.16l3.3,-1.05l7.18,-0.24l3.19,0.68l1.97,2.0l0.29,3.96l0.69,2.03l3.5,1.11l3.11,3.24l3.13,2.07l8.94,4.23l10.75,8.24l4.89,2.99l1.4,-0.58l4.24,-3.18l1.04,-0.13l0.63,0.31l3.15,4.06l0.99,-0.04l1.99,-1.5l1.34,1.35l1.51,0.74l3.41,4.98l3.6,3.47l1.72,0.88l2.23,0.35l1.97,-0.42l3.25,-1.84l1.92,-0.36l2.08,0.54l2.99,2.5l8.47,2.24l-1.68,3.84l-0.77,0.46l-3.59,-0.14l-1.04,0.89l-1.12,4.47l0.53,3.24l-2.91,0.34l-5.93,4.56l-3.45,0.76l-5.91,2.07l-3.37,-0.06l-2.34,1.07l-1.33,-1.47l-2.57,-1.39l-4.82,-0.73l-5.72,0.35l-5.42,-1.54l-3.66,0.05l-1.84,0.95l-0.87,3.09l-2.8,2.23l-1.75,0.76l-5.41,1.56l-8.84,0.11l-3.37,1.07l-0.53,0.57l-0.24,6.8l1.73,3.36l1.89,1.78l0.78,3.5l1.12,0.95l1.14,0.05l1.28,0.66l4.69,7.75l4.3,4.98l0.94,0.24l2.18,-1.25l1.53,0.6l-2.8,3.3l-0.2,3.61l0.79,2.52l4.52,5.76l-2.52,-0.34l-2.02,0.75l-1.23,2.54l-0.26,2.01l7.18,8.09l2.72,1.2l2.76,1.91l0.46,0.76l-0.67,1.99l-5.37,0.98l-1.02,0.57l-0.16,0.6l0.42,1.71l1.99,1.01l0.97,1.86l-1.72,1.63l-0.06,1.01l2.97,3.43l1.55,0.07l0.12,1.84l0.44,0.57l0.57,-0.08l0.71,-0.9l0.46,2.25l-0.5,0.99l-4.02,1.27l-0.93,0.84l-0.85,1.67l-0.1,1.23l0.83,1.31l2.6,1.13l0.31,1.8l-0.86,1.53l-3.27,2.63l-5.45,1.84l-1.05,0.78l0.03,1.25l1.94,1.35l0.02,1.63l-0.49,0.91l-6.4,0.12l-4.52,1.08l-12.98,0.0l-5.61,0.73l-1.14,0.51l-0.11,1.63l-2.74,2.39l-4.02,0.0l-1.25,0.79l0.09,0.97l1.68,2.07l0.45,1.4l2.39,0.99l1.4,1.33l0.88,0.11l-2.06,1.21l-0.61,2.7l0.4,0.91l1.85,1.1l0.42,3.24l-1.01,1.48l-1.41,0.7l-0.96,1.26l-2.27,1.25l-0.47,5.79l0.76,3.7l3.42,2.67l2.37,4.74l1.95,1.85l0.47,1.72l0.05,3.22l2.55,3.87l-4.37,2.1l-1.93,1.89l-0.17,1.13l2.41,2.9l-0.28,1.58l-1.99,-1.35l-0.91,-0.14l-5.99,2.2l-4.05,0.05l-3.45,-2.38l-4.79,-2.12l-5.72,0.67l-0.33,0.78l0.52,1.1l-0.13,0.92l-1.26,3.01l-2.25,1.73l-0.56,0.95l-3.3,1.84l-0.96,2.03l-5.65,2.71l-1.08,-0.06l-1.01,-1.16l-2.25,0.27l-0.95,0.96l0.04,1.42l-0.88,1.42l-2.15,0.83l-0.44,0.51l0.07,0.79l-5.83,0.12l-1.43,1.41l-2.7,-1.57l-9.11,6.5l-3.87,-2.56l-0.25,-1.82l-1.11,-0.36l-1.26,1.02l-1.8,0.12l-0.56,0.44l0.01,1.23l1.21,2.13l-1.09,1.14l-0.79,-0.44l-1.69,-2.82l-2.48,-1.28l-1.37,-0.18l-0.39,0.67l0.45,1.17l-0.62,0.54l-2.41,0.65l-5.53,3.1l-0.02,0.88l0.65,1.14l3.25,2.63l0.78,0.04l1.49,-1.24l0.85,0.04l-1.09,1.29l-0.31,1.41l-4.09,3.01l-1.1,-0.09l-2.86,-3.04l-11.11,-3.57l-2.76,-2.13l2.84,0.41l0.41,-0.79l-0.87,-2.39l1.42,-1.62l1.48,0.17l3.54,-0.51l0.93,-1.27l-0.35,-3.43l0.22,-1.72l-0.67,-1.45l0.79,-1.62l-2.2,-1.92l-2.03,-4.2l1.68,-0.64l0.52,-3.49l1.48,0.51l1.18,-0.55l-0.94,-1.81l0.05,-0.77l3.23,1.7l0.81,-0.37l0.85,-1.46l-0.08,-0.5l-1.86,-1.65l-1.21,-3.05l-2.36,-1.25l-0.72,-1.56l-0.56,-0.31l-3.39,0.67l-1.85,-0.52l-0.82,-1.0l-0.88,-0.35l-2.24,1.51l-2.53,-0.16l-0.61,-0.59l-0.1,-1.76l-1.06,-0.89l-1.84,0.04l-1.55,1.24l-0.93,-0.53l-4.49,1.16l-1.27,-0.04l-0.33,-0.6l0.14,-2.05l1.1,-0.82l0.42,-0.92l-0.26,-1.61l0.62,-1.44l-0.26,-4.24l0.97,-1.1l0.45,-1.29l2.72,-1.91l1.83,-4.09l0.1,-3.07l0.87,-1.51l-2.09,-1.12l1.52,-1.85l0.4,-1.74l-0.96,-0.45l-2.14,0.73l-6.59,0.14l-3.68,0.78l1.44,-4.51l-0.82,-2.63l-0.65,-0.77l-2.46,-0.96l-3.71,0.26l1.38,-1.61l1.11,-3.64l-0.01,-1.25l-4.14,-1.68l-1.96,0.4l-0.87,1.33l-4.09,-1.65l0.35,-1.29l1.55,-1.13l0.61,-1.57l-2.17,-5.31l1.26,-2.23l-0.13,-1.54l-1.36,-1.61l-3.32,-1.52l0.56,-2.1l-0.42,-0.74l-0.99,-0.53l-7.02,-0.81l-6.17,0.62l0.93,-1.56l0.05,-1.05l-1.75,-3.98l2.55,-0.61l2.71,-0.03l0.42,-0.72l-0.88,-2.83l3.26,-2.53l-0.37,-0.75l-8.07,-2.53l-0.31,-0.92l1.2,-6.89l1.09,-1.98l3.88,-0.02l2.7,-1.32l5.36,-7.89l-1.8,-5.78l1.98,-1.61l0.46,-1.66l-0.36,-0.48l-1.9,-0.68l-1.64,-1.87l-1.76,-0.31l-5.64,2.47l-3.2,2.9l-3.03,6.33l-6.47,1.19l-3.46,1.17l-3.1,0.29l-11.05,-1.16l-0.34,-1.5l0.39,-2.62l-0.58,-1.49l0.25,-2.87l-0.36,-2.11l-2.87,-4.32l-1.71,-1.2l-1.77,-0.58l-1.21,0.05l-6.32,2.19l-7.1,0.19l-3.29,2.31l-1.15,4.18l-2.54,1.4l-5.46,0.59l-6.33,-1.26l-0.49,0.52l1.95,5.39l1.3,1.69l6.51,2.58l2.76,1.65l1.18,1.57l1.85,6.4l0.09,11.88l0.43,1.49l3.2,1.97l-0.55,1.26l-1.48,1.81l-4.92,2.75l-1.82,3.37l-0.51,0.29l-13.25,-2.73l-3.2,2.34l-2.29,2.56l-2.84,1.69l-6.78,2.13l-3.58,-1.05l-3.66,0.55l-1.61,0.66l-4.65,3.55l-5.61,-2.15l-1.86,-4.69l2.66,-2.0l2.38,-0.91l4.44,-0.76l2.75,-6.91l-0.6,-0.62l-2.42,-0.8l-4.16,0.25l-0.58,-0.37l-0.63,-1.57l-2.6,-0.46l-0.47,-0.59l2.4,-3.11l-0.88,-2.68l2.95,-3.24l-1.64,-3.64l3.35,-0.58l0.96,-0.86l-3.15,-4.84l-3.79,-4.04l-1.29,-0.17l-6.36,2.07l-1.01,-0.25l-1.46,-1.42l-6.64,-3.45l-2.67,-0.97l-1.03,-4.84l-1.02,-1.79l-8.22,-2.15l-1.38,1.23l-1.19,4.22l0.44,1.44l1.48,1.15l-1.05,0.79l-1.37,3.44l-1.33,1.45l-2.55,-0.26l-2.1,0.49l-4.64,3.18l-4.97,4.25l-1.66,0.81l-3.05,0.66l-6.57,4.03l-3.97,0.72l-13.48,0.46l-2.82,1.87l-3.94,1.38l-2.31,-0.08l-1.31,-3.4l0.07,-2.29l2.67,-5.76l0.8,-5.02l-1.43,-3.48l-5.97,-8.0l-1.09,0.11l-1.55,1.6l-4.85,0.69l-2.68,-0.35l-5.12,-1.6l-7.71,-0.89l-2.46,-1.0l-1.8,-1.72l-0.57,-1.83l-0.49,-4.66l-0.93,-1.67ZM267.36,254.67l3.74,0.32l1.31,2.15l0.72,4.02l1.59,1.98l4.61,4.16l0.05,4.06l0.58,0.68l1.55,0.22l5.01,-0.89l5.07,2.57l2.07,0.29l2.05,-0.57l0.52,-1.0l4.53,2.68l4.27,-2.41l1.66,-1.57l0.62,-3.85l1.06,-1.85l-0.49,-1.03l-2.61,-2.64l1.56,-1.38l0.07,-0.82l-3.71,-3.45l-0.75,-0.19l-0.77,0.38l-1.49,2.82l-1.38,0.03l-3.32,-1.36l-3.71,-2.54l-4.35,-0.27l-2.53,-1.4l-0.19,-0.99l-0.64,-0.48l-3.51,-0.02l-1.93,0.44l-6.98,-2.15l-2.86,-1.43l-2.49,0.47l-3.4,-1.71l-3.41,0.08l-0.3,0.59l1.66,3.23l4.26,1.53l2.28,1.29ZM227.57,180.95l-1.98,1.48l-1.87,-0.53l-0.68,0.28l1.08,-1.65l1.71,-0.61l2.78,0.7l-1.04,0.33ZM203.72,172.72l0.93,0.46l-4.32,-0.75l-1.75,0.07l-0.47,1.35l-1.03,-0.6l0.18,-0.36l1.54,-0.47l1.99,-0.18l2.93,0.47ZM191.08,174.12l-5.03,2.08l-2.66,0.13l-2.3,-1.24l-2.06,1.52l-0.87,-0.22l2.08,-2.12l3.95,-0.71l7.89,0.43l-1.0,0.14ZM173.83,177.67l-7.36,-0.07l-3.42,0.67l-0.54,2.36l-2.39,0.1l-0.64,-0.46l-0.28,-1.55l0.41,-1.28l0.98,-0.49l11.55,-0.16l1.69,0.9ZM150.26,180.57l2.01,-0.32l2.63,0.89l-0.86,0.38l-3.78,-0.95ZM146.23,181.41l-4.58,1.48l-11.89,1.28l-2.77,-0.63l3.39,-1.62l5.2,-0.71l10.64,0.19ZM118.72,186.32l-15.74,1.45l1.05,-0.42l13.24,-1.39l1.45,0.37ZM86.54,201.04l-1.79,-0.06l-1.95,0.74l-1.55,-0.63l-1.22,-1.42l-0.29,-1.2l0.84,-0.53l7.38,-1.84l3.39,-0.22l0.85,1.36l-6.83,1.76l-0.32,1.22l1.5,0.81ZM87.06,201.34l0.07,0.04l0.17,0.19l-0.23,-0.22Z",
        name: "Niedersachsen"
    },
    "DE-HE": {
        path: "M189.1,662.8l6.22,-3.72l0.83,-2.93l1.03,-1.35l3.31,-0.24l1.56,1.35l1.26,0.14l1.01,-4.1l-2.65,-1.68l-0.61,-0.67l-0.06,-0.76l1.32,-3.23l1.06,-1.29l5.64,-2.46l1.19,-1.1l1.97,1.5l1.1,0.01l2.15,-2.8l-0.95,-1.53l0.65,-1.58l5.18,0.04l1.71,-0.39l1.12,-1.08l0.01,-1.4l-1.48,-4.04l-0.77,-1.2l-1.95,-1.33l-2.99,-5.25l-1.77,-0.79l-0.76,-1.54l-4.82,-1.27l1.32,-1.24l1.23,-3.58l1.88,-1.97l-0.26,-0.58l-1.68,-1.09l0.44,-6.65l1.56,-1.0l1.46,-1.69l1.46,-0.49l1.42,0.13l2.34,2.22l1.53,0.16l0.9,-0.33l2.37,-1.77l2.65,-5.78l-0.4,-0.95l-0.99,-0.56l-0.54,-0.95l-0.35,-1.95l-1.97,-4.04l2.26,-5.93l2.32,-1.44l0.8,-4.78l-0.87,-1.26l-2.35,-1.53l-0.08,-0.85l-0.76,-0.93l5.11,-3.82l0.98,-2.01l1.94,-1.17l6.45,-5.56l1.55,-0.06l0.97,1.8l0.86,0.57l4.49,0.01l3.21,-1.88l0.3,-1.91l2.78,-2.36l1.56,-0.88l2.12,0.06l0.52,-1.07l0.13,-2.84l2.01,-3.69l1.85,-0.95l1.66,-3.08l1.9,-2.43l-0.97,-3.82l0.23,-1.74l-1.61,-2.78l0.25,-0.65l9.73,-0.04l3.41,0.7l4.7,-2.49l0.13,-1.34l-1.08,-1.92l5.23,-5.34l0.33,-0.95l-0.07,-1.74l-1.95,-7.73l-1.12,-0.81l0.21,-1.72l-1.44,-0.45l-2.71,1.53l-4.44,0.76l-1.35,1.51l-0.75,0.14l-1.38,-0.44l-0.54,-1.6l-1.74,-1.31l0.16,-0.72l1.5,-2.53l5.31,-4.98l0.6,-1.27l1.72,-0.95l1.16,-1.45l4.72,-1.37l3.75,-0.17l3.54,-0.82l4.62,0.89l3.74,-1.97l4.58,-0.45l1.25,-2.85l-1.05,-1.11l-2.21,-0.32l-0.38,-3.62l-1.42,-2.11l0.62,-1.45l5.0,-2.08l5.53,-1.52l5.88,2.55l0.67,1.67l-0.15,2.25l2.49,2.08l5.14,0.59l3.58,-2.32l1.97,-0.15l1.21,-3.96l7.03,-3.95l1.49,-2.4l2.0,-1.81l2.39,-5.84l-0.27,-0.71l-1.68,-1.12l7.81,-2.32l2.17,-2.67l0.99,0.39l1.68,-1.34l1.57,0.14l0.46,2.42l1.75,0.9l2.24,-0.07l1.99,-1.46l1.18,1.16l1.43,0.54l1.66,0.17l2.57,-0.67l0.82,1.66l2.26,1.14l1.16,2.98l1.77,1.61l-0.91,1.14l-2.57,-1.6l-0.99,0.03l-0.51,1.23l0.99,1.75l-2.34,-0.33l-0.7,3.74l-1.75,0.75l0.18,1.27l1.92,3.63l1.22,1.37l0.91,0.41l-0.82,1.44l0.67,1.4l-0.22,1.74l0.37,3.21l-0.37,0.67l-5.26,0.47l-1.71,1.99l0.8,2.75l-3.19,-0.74l-0.45,0.48l0.72,1.25l2.98,2.22l10.97,3.51l2.78,2.99l1.71,0.24l4.56,-3.27l0.46,-1.63l1.16,-1.75l-0.71,-0.75l-0.63,-0.06l-2.27,1.39l-2.96,-2.41l-0.52,-1.13l5.21,-2.78l2.45,-0.67l0.99,-0.94l-0.43,-1.37l2.91,1.36l1.54,2.67l0.81,0.67l1.3,-0.11l0.91,-0.89l0.29,-0.97l-1.31,-2.87l1.9,-0.18l1.4,-1.02l0.32,1.9l3.81,2.58l-1.46,1.07l-0.75,1.73l0.64,2.78l1.28,1.69l0.21,2.45l0.43,0.75l1.62,0.46l1.97,1.89l1.9,0.02l4.46,1.18l0.25,0.35l-0.45,1.93l2.08,1.92l0.38,1.85l0.52,0.68l7.05,2.36l2.41,0.13l5.55,2.85l-2.3,3.75l-0.64,4.09l-0.9,-1.05l-0.05,-1.06l-1.42,-1.4l-3.99,0.5l-1.07,0.82l1.54,2.44l2.61,0.65l-0.33,1.29l-1.77,2.83l-0.63,3.16l0.4,0.72l1.69,0.29l1.23,0.8l1.93,0.22l1.12,1.6l0.27,1.05l-1.58,2.94l-5.34,0.22l-0.77,-0.42l0.07,-1.0l-0.63,-0.47l-1.56,0.41l-1.13,-0.34l-4.22,0.2l-2.58,1.51l-0.45,2.05l0.29,0.98l1.64,1.88l0.26,1.48l-0.27,0.7l-2.54,0.46l-4.98,-0.78l-0.99,0.34l-0.44,0.87l0.21,1.67l0.93,0.27l0.72,-0.49l-0.07,1.56l0.45,1.2l0.86,0.09l1.69,-1.65l1.02,-0.15l2.22,1.43l1.99,3.1l-2.73,2.91l-0.21,3.16l-4.82,1.1l-2.45,1.3l-0.79,2.63l0.37,2.31l-1.66,0.35l-0.79,1.45l1.44,1.95l-0.21,2.08l-2.03,3.63l0.06,1.51l-1.9,1.56l-1.21,1.72l-0.4,3.33l0.79,1.54l2.3,-0.44l2.71,1.2l1.5,0.1l0.86,-0.45l0.74,-1.59l-1.3,-1.8l0.22,-0.79l4.97,-1.71l4.58,0.88l0.84,0.67l1.02,2.21l0.21,2.8l-1.57,0.46l-1.37,1.74l0.25,4.68l0.81,1.99l-1.2,4.17l0.85,1.01l-0.79,1.94l-4.23,6.19l-1.88,1.37l-6.08,3.01l-5.77,1.88l-2.71,-0.18l-2.75,-2.43l-2.62,0.79l-1.26,1.68l-2.34,7.08l0.55,5.34l-2.41,1.72l-4.04,1.39l-0.82,0.67l-0.87,1.02l-0.73,1.9l0.49,2.23l-5.99,1.29l-1.71,-0.66l-2.15,0.43l-1.62,-1.37l-1.32,0.45l-1.61,-0.4l-0.79,0.27l-0.3,1.28l0.31,2.57l-0.98,3.73l0.55,0.82l2.43,0.55l-1.67,3.05l0.45,3.43l-0.76,0.76l-5.86,2.1l-3.56,-0.11l-2.79,-3.89l-4.87,-2.13l-10.04,-0.61l-3.71,1.06l-0.56,2.17l-3.04,2.48l0.51,-0.78l-0.2,-0.69l-4.5,-1.94l-5.38,2.04l-3.79,0.85l-1.25,1.56l-0.26,3.37l-1.59,0.36l-1.25,1.35l0.13,0.59l1.66,0.94l2.74,-0.35l0.85,3.16l0.93,1.28l-0.09,1.47l1.05,1.97l-1.77,-0.58l-0.52,0.37l-0.2,9.52l3.53,9.26l0.81,1.24l0.73,0.23l1.47,-1.73l-0.18,3.35l0.87,2.03l1.2,0.94l2.28,-0.17l0.56,0.73l-2.08,3.19l0.53,1.39l2.33,1.07l-1.56,3.17l0.2,2.43l-0.96,0.79l-1.87,0.26l-0.65,0.5l0.08,1.81l1.07,4.11l-3.78,3.78l0.48,1.19l1.95,1.59l1.21,1.76l-0.66,0.9l-2.0,-1.11l-0.72,0.41l-0.06,0.94l2.49,2.72l2.67,4.35l-1.8,-1.32l-2.83,-0.14l-1.03,0.15l-3.04,2.08l-2.29,-0.37l-5.77,0.21l-2.88,3.09l1.56,2.62l0.21,0.73l-0.38,0.71l-2.29,1.12l-0.74,-1.11l-0.8,0.1l-1.03,2.77l-3.65,3.39l-3.34,-0.68l-0.01,-1.96l1.57,-0.92l0.38,-0.8l-0.2,-4.13l1.84,-1.85l1.51,1.25l1.11,-0.21l1.61,-2.44l-0.21,-1.89l-6.34,0.19l-1.96,-2.58l-4.29,-0.09l-4.48,-2.24l-1.09,-1.05l-1.37,-2.83l-0.42,-1.33l0.56,-1.04l-0.1,-1.22l-1.75,-2.83l-8.09,1.73l-0.14,0.84l1.89,7.33l-0.58,0.7l-3.94,1.43l-6.51,-5.73l-2.49,-1.66l-2.58,-0.34l-2.96,1.03l-1.5,-3.6l-3.84,-6.83l0.16,-3.16l1.55,-2.32l2.53,-1.45l3.36,-0.63l3.44,-3.99l0.34,-1.44l-0.27,-0.46l-1.38,-0.46l-3.7,0.45l-3.19,-5.89l-0.93,-3.51l-3.88,-6.03l1.41,-4.57l-1.93,-4.35l-10.62,-10.19l-2.89,-1.14l-2.83,0.07l-12.29,3.51l-3.89,2.47l-4.64,2.05l-4.18,1.16l-3.72,0.11l-1.57,-1.95l-0.28,-1.51l-0.88,-1.29l-7.22,-5.15Z",
        name: "Hessen"
    },
    "DE-TH": {
        path: "M402.23,500.98l-0.34,-2.77l-1.29,-1.75l-0.56,-2.07l0.55,-1.64l7.9,-5.83l2.04,-0.99l0.85,-0.94l2.62,1.57l1.65,-1.46l6.14,-0.06l0.38,-0.56l-0.28,-0.79l2.46,-1.12l0.98,-1.6l-0.07,-1.35l0.65,-0.63l1.64,-0.18l0.79,1.07l1.57,0.18l6.05,-2.87l1.05,-2.11l3.21,-1.76l0.66,-1.04l2.32,-1.8l1.55,-4.04l-0.52,-1.57l5.07,-0.57l4.61,2.05l3.63,2.45l4.38,-0.05l5.91,-2.19l2.76,1.58l0.96,-0.74l0.27,-1.47l-0.34,-0.93l-2.2,-2.53l1.75,-2.03l4.54,-2.19l1.57,0.77l8.78,-0.19l4.35,1.9l2.91,0.08l1.24,1.0l3.26,1.13l1.32,0.05l0.57,0.58l0.58,1.96l-0.87,0.4l-1.43,-0.5l-1.0,0.14l-0.62,0.69l0.01,0.96l1.46,3.53l1.96,2.16l-0.13,3.01l2.54,4.25l-0.69,4.97l1.02,1.61l2.73,1.27l15.19,1.55l4.18,-0.07l9.05,1.11l2.46,0.7l5.01,3.28l2.66,4.18l5.47,6.78l-1.54,2.38l-1.08,0.83l-2.39,1.13l-4.99,0.81l-1.55,2.14l1.3,1.73l4.31,1.89l2.95,3.75l0.68,3.68l-0.76,0.33l-0.32,0.76l0.72,2.5l1.11,1.21l1.82,0.66l5.38,0.23l3.04,-1.43l9.08,0.6l3.81,-0.66l2.3,1.43l0.38,3.14l2.26,3.58l0.55,1.81l1.51,1.17l1.05,0.21l1.16,-0.75l9.67,-0.47l2.15,1.36l4.75,1.79l1.31,1.02l1.12,2.12l3.5,1.74l0.3,1.17l0.5,0.32l6.8,-0.88l5.71,1.52l2.69,-1.18l2.88,2.04l0.67,1.03l1.11,0.24l2.04,-1.3l-0.04,-2.32l3.36,-3.56l2.39,-3.77l0.0,-1.02l-0.57,-1.06l-2.48,-1.48l0.46,-2.42l1.68,-2.53l-0.08,-0.8l5.81,-0.49l14.87,3.75l0.76,3.76l4.01,6.3l1.5,1.27l5.45,2.39l2.27,2.99l2.0,4.19l-1.47,0.71l-1.8,2.03l-1.16,-0.94l-6.89,0.12l-1.81,-0.61l-0.53,0.3l-0.51,1.26l-3.79,1.75l-3.72,4.11l-1.56,-0.62l-3.6,0.37l-3.95,2.55l-7.1,1.78l-0.3,2.0l3.02,2.09l-1.43,1.5l-1.21,0.18l-1.11,0.78l-1.02,2.57l0.45,0.77l1.65,-0.12l0.77,0.47l-0.39,2.08l1.49,3.0l1.25,0.51l2.56,0.08l-1.69,2.45l-4.54,3.11l-6.65,0.09l-2.8,2.95l0.04,2.82l-0.63,1.84l-0.58,0.56l-2.5,0.69l-1.98,-0.8l-1.73,0.25l-3.28,3.83l-1.37,-0.15l-2.09,-1.78l-1.1,-0.22l-1.39,0.41l-2.02,2.36l-2.37,1.54l-1.75,2.54l-0.15,1.46l2.04,2.12l0.04,0.98l-1.0,1.15l-0.21,1.27l-3.32,1.59l-0.38,1.07l0.56,0.9l-2.8,1.41l-4.3,1.44l-0.15,-1.2l-1.85,-0.74l-0.87,-0.92l-1.28,-0.1l-2.37,0.36l-0.59,0.74l-1.51,0.38l-11.5,2.03l-2.9,-0.97l-2.23,-0.02l-1.48,1.6l-2.68,0.4l-3.61,-2.17l-0.41,-3.07l-0.58,-0.88l-0.89,-0.36l-1.59,0.22l-2.97,-1.89l0.0,-4.98l1.39,-0.87l0.39,-0.74l-1.2,-2.34l-1.95,-0.62l-6.26,-0.29l-2.51,1.63l-0.75,1.83l-1.9,1.04l-4.64,1.47l-0.23,0.5l1.35,5.67l-0.32,3.29l0.64,2.2l1.12,1.57l0.29,1.85l-1.11,0.62l0.16,1.51l-1.11,2.58l0.66,2.07l-1.03,2.08l0.1,1.55l-2.89,-0.42l-1.66,-0.95l-1.43,1.52l-4.43,-3.51l-0.53,-0.72l1.74,-1.68l0.17,-1.07l-1.9,-2.81l-1.64,-0.49l-0.95,-1.52l-1.68,0.2l-1.36,1.17l-3.38,0.82l-2.23,-1.68l-2.91,-0.35l-0.56,0.27l-0.37,1.38l-4.23,-4.7l-1.66,-0.09l-3.02,0.73l-1.15,-1.23l-1.0,-0.32l-1.56,0.61l-2.29,-0.2l-2.55,1.14l-1.97,-0.51l-1.29,0.82l-2.04,2.91l-2.43,-0.51l-1.13,0.6l-0.51,0.98l-0.29,3.91l0.92,1.07l2.66,1.32l1.94,1.68l2.96,0.17l1.26,1.79l2.78,0.9l0.48,1.34l-0.13,1.2l-1.24,0.51l-2.93,-0.93l-4.01,0.63l-1.94,-0.58l-1.1,1.02l-0.69,4.16l-3.21,-1.63l-2.42,-0.56l-4.35,0.01l-1.01,-1.19l0.26,-1.78l-1.24,-2.29l0.56,-3.11l-0.96,-4.55l-2.51,-1.79l-1.67,-2.57l-1.63,0.19l-1.03,0.67l-2.44,-0.21l-0.35,-1.35l-2.71,-1.97l-1.63,-2.41l-2.71,0.46l-2.37,-0.49l-0.4,-0.87l0.92,-1.29l-0.27,-0.77l-5.8,-4.72l-0.29,-2.27l-1.14,-1.7l-9.35,-2.99l-1.01,-2.63l-1.92,-1.77l-1.6,-0.4l-5.19,0.34l-0.4,-1.73l-0.69,-0.32l-1.69,1.01l-5.23,4.9l-0.39,-0.03l1.12,-4.39l-0.84,-2.13l-0.24,-4.42l1.08,-1.22l1.45,-0.22l0.44,-0.82l-0.26,-3.13l-1.78,-3.08l-6.18,-1.15l-4.98,2.12l-0.22,1.34l1.26,1.57l-0.67,1.18l-1.42,0.01l-2.79,-1.22l-1.93,0.53l-0.34,-0.26l0.16,-3.53l1.07,-1.52l2.01,-1.69l0.03,-1.7l2.03,-3.64l0.22,-2.52l-1.38,-1.69l0.34,-0.79l0.93,-0.33l0.62,0.24l0.49,-0.5l-0.35,-2.72l0.73,-2.34l1.94,-0.9l5.05,-1.2l0.51,-0.82l-0.05,-2.64l2.87,-3.0l-0.0,-0.57l-1.93,-2.94l-1.5,-1.31l-1.4,-0.75l-0.98,-0.04l-2.3,1.86l-0.26,-2.69l-0.89,-0.28l-0.75,0.57l0.01,-1.24l0.99,-0.34l0.99,0.48l3.6,0.32l3.02,-0.64l0.54,-1.23l-0.29,-1.78l-1.9,-2.62l0.22,-1.48l2.22,-1.33l3.94,-0.18l1.16,0.34l1.46,-0.39l0.02,1.12l1.77,0.81l5.55,-0.48l1.88,-4.0l-1.85,-2.88l-2.06,-0.27l-1.26,-0.8l-1.48,-0.22l0.54,-2.9l1.76,-2.79l0.4,-1.79l-0.68,-0.65l-2.26,-0.47l-1.06,-1.66l3.88,-0.67l0.97,1.08l0.0,1.01l1.08,1.48l0.68,0.13l0.69,-0.82l1.06,-5.18l1.43,-1.46l0.47,-1.12l-0.53,-1.03l-5.58,-2.8l-2.48,-0.15l-1.5,-0.78l-5.33,-1.48l-0.67,-2.29l-2.01,-1.77l0.5,-1.75l-0.55,-0.88l-4.8,-1.34l-1.77,0.02l-1.79,-1.79l-1.64,-0.49Z",
        name: "Thüringen"
    },
    "DE-BW": {
        path: "M163.28,959.58l2.55,-3.12l0.03,-2.15l-1.2,-4.29l1.62,-5.55l1.91,-1.37l0.21,-1.54l-0.51,-3.81l1.96,-2.98l0.07,-2.66l0.49,-1.5l2.53,-2.3l1.06,-1.83l-0.28,-4.11l-4.18,-6.29l-0.29,-5.01l0.59,-2.37l0.65,-1.85l1.87,-2.86l0.83,-3.31l6.16,-7.39l1.08,-1.88l1.5,-7.27l3.36,-1.95l1.43,-2.06l0.11,-1.9l-1.14,-3.28l-0.19,-3.0l1.19,-4.65l1.82,-3.25l0.66,-3.45l3.71,-2.93l-0.03,-1.02l-1.12,-2.59l0.01,-4.27l0.8,-3.98l4.04,-5.38l2.73,-1.12l6.73,-5.63l1.56,-2.3l0.55,-3.36l4.59,-0.58l0.69,-0.62l0.42,-1.85l0.96,-1.12l0.81,-0.06l4.36,-2.22l1.26,-1.82l4.43,-10.39l3.03,-4.87l1.81,-1.77l3.18,-1.03l3.22,-2.96l2.09,-2.77l7.22,-12.62l2.96,-15.51l2.24,-1.43l6.88,-6.97l0.35,-1.6l-0.28,-0.47l-1.97,-0.59l3.62,-7.35l-0.68,-4.5l1.32,-2.87l-1.26,-1.62l-4.76,-1.12l0.0,-0.31l1.82,-0.77l0.24,-1.24l-3.55,-7.99l-1.84,-2.6l0.73,-2.7l2.97,-1.04l2.18,0.3l9.28,7.47l4.3,-1.55l0.92,-0.98l0.02,-1.21l-1.85,-6.88l7.12,-1.49l0.11,0.81l1.31,2.01l-0.6,1.53l0.48,1.6l1.45,2.99l1.28,1.26l4.79,2.38l4.13,0.04l1.16,1.97l0.98,0.67l5.86,-0.39l-0.1,1.47l-1.21,1.67l-2.17,-1.24l-2.19,1.89l-0.55,1.38l0.33,3.57l-1.88,1.43l-0.23,1.76l0.53,1.07l3.21,0.91l0.87,-0.12l4.03,-3.65l0.87,-2.61l0.41,0.93l0.75,0.22l2.83,-1.41l0.56,-1.31l-0.67,-1.77l-1.09,-1.36l2.51,-2.51l5.29,-0.11l2.5,0.35l1.07,-0.38l2.19,-1.78l0.64,-0.05l2.42,0.05l1.28,1.23l1.37,0.08l0.34,-0.7l-0.27,-0.91l-2.56,-3.92l-2.42,-2.72l2.15,1.02l1.16,-1.15l1.08,0.39l5.51,-1.02l7.98,-0.01l1.17,-1.17l0.67,-1.78l1.37,-1.24l-0.23,-2.22l0.53,-0.57l2.02,-0.87l3.16,-0.22l2.78,-1.04l1.67,1.25l1.06,0.06l2.01,-1.51l-0.58,-1.97l1.02,-5.97l-0.7,-0.62l-2.58,-0.69l-0.78,0.55l-0.77,1.84l-0.89,0.17l0.35,-1.91l-0.59,-0.97l-5.07,-1.24l0.65,-2.21l-0.71,-1.85l1.35,-1.35l2.12,-0.87l4.72,0.28l3.66,-1.1l5.15,-0.4l5.34,2.11l2.92,-0.41l2.78,1.41l4.56,-1.48l0.13,0.5l-0.7,1.2l0.32,1.94l-0.55,1.29l0.2,1.35l-0.81,0.71l0.07,1.15l-0.88,2.04l0.69,1.02l1.74,0.8l1.59,0.16l1.24,-0.5l0.55,-2.17l1.24,-0.56l0.76,-1.11l0.29,1.95l0.94,1.81l0.7,0.53l0.88,-0.26l3.12,-2.95l2.71,-1.0l3.42,3.79l0.28,5.06l4.55,4.76l-1.98,2.71l-0.2,2.6l-1.98,2.03l0.01,0.88l1.23,0.86l1.68,-0.33l1.06,-2.14l1.26,-0.44l1.21,-1.44l0.91,-0.32l0.4,0.54l-0.6,1.42l1.68,1.44l0.42,2.72l-0.21,2.83l0.43,3.16l0.42,0.43l8.17,0.08l0.97,-0.4l3.91,-3.5l0.15,-1.23l-0.84,-1.28l0.17,-0.27l2.11,-1.41l1.27,0.67l-0.52,2.0l1.04,0.84l2.06,0.64l-0.81,2.13l1.08,2.45l-0.68,1.9l-1.08,1.37l-0.03,0.82l2.74,1.19l2.9,5.97l-1.57,-0.51l-1.19,0.15l-2.06,2.16l-0.26,3.55l0.28,0.98l1.14,1.35l2.01,0.94l-0.71,2.21l1.22,3.64l-2.32,-0.74l-0.61,0.29l-0.25,0.8l0.37,1.08l1.37,1.29l0.09,2.58l1.52,2.04l-1.22,0.55l-0.06,0.68l3.36,2.42l3.74,3.91l0.78,0.12l1.66,-0.72l1.83,1.44l0.04,2.34l-0.95,1.98l-1.97,0.44l-0.4,0.9l0.69,0.69l2.45,0.87l-0.21,1.54l1.79,1.53l-0.25,2.15l2.69,1.1l1.9,0.12l1.91,0.96l1.45,0.05l1.11,2.72l4.69,3.56l2.4,2.9l0.61,1.39l1.23,1.13l0.83,2.66l-1.94,0.8l-0.27,0.67l1.04,0.98l-0.28,4.6l-0.48,1.5l1.08,2.33l-0.47,1.99l-1.45,1.8l0.02,3.22l-0.71,1.13l-0.08,1.39l0.26,1.1l0.77,0.88l2.91,0.99l2.16,4.0l-5.03,3.67l-0.19,-0.91l1.11,-2.86l-0.7,-0.76l-1.15,-0.1l-5.56,5.04l-1.96,-3.02l-3.03,-0.16l-2.05,-1.63l-0.93,0.08l-2.24,2.61l-0.28,1.89l1.85,3.16l4.41,2.87l-0.26,0.73l-1.5,0.64l-0.4,0.64l1.29,4.13l-1.27,4.11l0.19,0.81l-4.23,0.38l-1.51,1.42l-0.39,1.58l-9.25,4.8l-0.75,-0.36l-0.51,-1.82l-1.42,-0.61l-2.79,1.54l-3.46,0.66l-1.4,1.2l-1.01,1.61l0.17,1.69l-6.03,6.88l0.85,1.87l1.4,0.27l1.82,3.45l3.09,4.45l1.54,4.46l3.86,15.17l2.64,5.14l0.29,1.53l-0.17,4.59l-0.71,2.69l-2.83,6.77l-1.58,1.46l0.2,1.44l2.23,3.13l-0.36,4.33l-0.89,2.8l-1.1,1.48l0.45,0.71l1.34,0.14l2.31,5.02l-0.66,0.29l-0.88,1.27l-2.25,0.27l-0.98,1.58l0.2,0.76l1.86,2.13l1.65,0.72l0.54,6.42l0.83,2.5l-0.49,1.58l-3.29,-0.55l-0.57,1.1l-0.13,1.76l-0.51,0.56l-1.24,-2.81l-1.02,-0.68l-1.91,-0.04l-2.51,0.59l-5.44,1.98l-4.58,-0.45l-4.2,-1.44l-3.11,1.28l-7.24,5.55l-4.24,1.86l-3.56,-0.78l-1.54,0.64l-0.96,1.29l-4.01,0.93l-5.81,6.85l-27.31,-14.55l-3.92,-0.8l-3.55,-0.0l-1.53,-1.78l-5.4,0.0l-10.93,-1.07l-2.02,0.66l-1.65,1.48l-3.44,0.94l-3.75,0.31l-2.28,-0.51l-2.76,-1.78l-1.31,-1.47l1.48,-0.3l0.17,-0.7l-2.61,-2.1l-3.2,-1.61l-3.19,0.12l-0.89,2.45l0.19,0.52l-3.89,0.05l-0.36,-1.46l-1.15,-1.75l1.81,-2.79l-0.64,-1.63l-3.18,-0.35l-2.37,-3.55l-1.47,-0.5l-1.27,0.89l-0.6,2.76l-0.85,0.48l-0.62,-0.4l-0.81,-4.16l-1.93,-0.73l-2.46,-0.12l-1.75,0.81l-0.19,0.53l0.75,1.6l-1.07,0.47l-6.26,0.86l-1.1,0.54l-1.83,2.65l-0.73,2.45l-3.36,1.88l-1.07,1.02l-0.22,1.16l0.63,1.98l-0.57,1.23l0.24,0.55l2.0,0.56l4.69,2.65l1.9,-0.09l4.23,-2.1l4.65,-0.68l3.36,0.79l-0.35,1.86l-0.52,-0.92l-1.67,0.72l0.13,4.02l-0.61,1.57l-0.94,0.27l-2.12,-2.7l-1.81,-1.3l-3.1,0.31l-3.01,1.71l-1.4,2.71l-2.73,0.39l-6.2,-0.03l-4.45,-1.29l-1.14,-2.26l-0.84,-0.78l-5.5,-0.77l-5.48,0.82l-1.67,1.48l-1.78,0.46l-2.98,1.55l-2.54,2.51l-4.31,0.83l-12.48,0.0l-0.63,-2.57l-0.72,-0.73l-6.51,-0.42l-1.3,-0.57l-0.48,0.13l-3.28,3.91l-1.73,0.84l-8.06,1.44l-2.03,-0.24l-3.3,-1.5l0.95,-0.09l1.16,-1.02l1.29,-3.12l-0.41,-0.55l-6.59,1.33l0.43,-1.22l-0.3,-1.37l-1.73,-1.75l-3.55,-5.41l-1.79,-1.13l-0.55,-3.8Z",
        name: "Baden-Württemberg"
    },
    "DE-HH": {
        path: "M426.91,190.05l0.35,2.25l1.32,1.39l-0.72,2.55l-0.38,3.79l-3.08,0.95l-0.69,0.69l0.99,6.09l0.57,0.79l2.65,0.87l3.34,4.02l2.89,1.46l3.39,3.0l0.77,-0.01l0.52,2.29l-4.8,0.29l-1.09,0.58l-2.35,2.62l-5.14,0.28l-1.52,-0.28l-1.48,-0.87l-2.17,-2.25l-2.1,-0.52l-2.94,-2.3l-5.11,1.36l-0.52,0.74l0.02,1.1l-4.04,1.6l-1.45,0.08l-2.33,-1.12l-3.08,0.96l-0.5,-3.1l-0.71,-0.98l-1.08,-0.39l-0.95,0.26l-2.22,1.93l-3.85,-3.12l-2.24,-4.11l-2.4,-2.66l-0.36,-4.63l4.87,0.89l1.48,-0.45l0.2,-0.61l-1.37,-1.88l-3.68,-1.75l-3.71,-0.38l1.02,-4.23l1.01,-1.1l0.43,-1.53l1.53,0.25l1.9,1.12l-0.31,2.69l1.45,0.79l10.92,-7.03l2.35,-0.59l3.23,0.43l1.08,-0.69l1.02,-2.14l0.79,-0.68l1.76,-0.41l1.82,0.19l1.03,-0.46l0.68,-0.62l1.26,-4.23l0.66,-0.65l5.87,0.76l3.32,-1.89l0.78,0.16l-0.11,0.64l-2.23,3.17l-0.53,1.56l0.61,0.99l3.39,2.06Z",
        name: "Hamburg"
    },
    "DE-SH": {
        path: "M521.84,88.19l-5.31,-0.18l-0.88,-0.89l0.17,-2.58l-0.74,-1.47l-4.09,-0.5l-2.23,1.08l-0.93,-1.55l-1.4,0.36l-0.17,-1.2l2.65,-5.28l3.69,-2.9l4.54,-0.62l8.24,2.87l3.15,2.45l6.79,10.31l-11.48,-1.55l-2.01,0.86l0.01,0.81ZM275.96,23.51l3.11,0.77l3.61,0.12l6.79,-2.01l2.2,-0.27l7.76,1.07l7.72,2.54l20.73,3.92l1.46,1.04l1.43,4.8l2.09,0.8l8.7,-0.2l3.53,-1.9l1.51,-0.27l2.04,1.47l4.79,-0.26l5.84,-2.38l1.92,-1.88l2.5,-0.89l1.85,-2.14l0.55,4.58l4.85,1.43l5.97,0.26l3.99,1.41l6.46,3.18l1.03,2.34l1.49,1.4l2.63,-0.37l4.46,-1.38l0.28,-0.43l-0.32,-2.4l1.77,-0.1l3.04,1.51l2.13,2.18l1.97,5.72l2.41,2.37l-0.68,0.42l-3.26,-0.75l-2.57,1.84l-1.55,0.47l-0.38,1.78l0.38,0.41l1.44,0.07l4.97,-0.73l1.36,1.46l1.48,-0.61l0.78,-0.04l0.3,0.46l-0.63,1.72l0.54,4.69l-1.04,7.94l-1.56,3.35l-4.29,3.7l-3.86,1.74l-4.2,1.09l-4.08,0.38l-0.36,1.32l4.71,2.19l23.61,-4.55l1.67,0.49l5.45,3.83l-1.68,1.55l0.02,1.65l1.24,3.65l-0.51,1.63l-1.3,1.58l-1.66,1.15l-1.63,0.39l-0.21,0.65l0.54,0.58l-0.5,1.31l0.96,0.84l0.24,0.91l-1.26,2.33l-0.01,0.47l0.44,0.15l2.33,-0.75l1.69,-1.7l2.31,-4.21l1.94,-5.52l0.82,-0.43l3.76,-0.35l1.48,-0.74l1.95,-2.11l0.98,-0.26l4.05,0.28l2.07,0.83l5.99,3.86l15.42,5.52l8.7,6.62l4.21,0.89l4.75,-0.71l3.37,-1.69l5.58,-4.2l3.17,-1.66l3.31,-1.12l3.57,-0.37l0.19,0.5l1.7,0.62l1.79,-0.4l2.52,1.22l6.76,-3.34l2.25,0.69l-3.98,3.9l-2.29,-0.65l0.97,2.61l1.64,7.79l-0.71,1.74l0.73,6.16l-0.4,2.15l-1.78,1.95l-0.48,1.19l-11.25,5.92l-4.01,4.11l-1.62,0.85l-5.44,1.59l-1.3,-0.92l-1.88,0.38l-5.4,6.39l0.04,1.01l1.35,2.69l1.43,1.93l1.99,1.37l2.8,0.74l4.57,-0.06l0.59,1.19l0.48,2.84l1.69,0.61l0.02,3.95l1.71,1.55l3.23,0.85l-0.73,0.48l-2.99,0.39l-0.34,-0.34l0.07,-1.26l-2.7,-0.64l-2.4,1.29l-4.79,3.63l-4.49,2.09l-1.24,1.91l-0.47,1.93l1.96,6.43l-1.12,6.28l4.79,1.06l4.99,5.13l0.86,0.41l2.17,-0.23l2.65,0.66l2.8,2.39l0.1,1.61l0.97,1.86l-0.24,1.9l-1.39,1.01l0.1,2.43l1.27,4.35l-0.89,0.74l-0.14,0.63l0.84,0.33l-1.79,1.8l-0.86,-2.34l-1.15,-0.78l-5.04,0.52l-1.59,-0.49l-1.38,0.31l-0.31,0.71l0.5,2.57l-0.9,2.1l-0.2,2.0l-5.86,3.54l-5.51,1.41l-1.3,2.66l-2.8,-0.09l-2.21,1.08l-0.64,0.97l-1.25,7.12l-1.94,2.42l-2.9,0.99l-3.88,-1.09l-13.96,-6.88l-3.53,-1.09l-2.0,-0.09l-0.67,-2.82l-1.09,-0.23l-3.27,-2.89l-2.93,-1.5l-3.3,-3.99l-2.68,-0.89l-1.2,-5.99l3.64,-1.4l1.23,-6.74l-0.2,-0.87l-1.19,-0.93l-0.42,-2.39l-3.86,-2.71l2.72,-4.31l0.2,-0.88l-0.56,-0.81l-1.75,-0.07l-2.78,1.79l-5.89,-0.78l-1.24,1.16l-1.6,4.46l-4.55,0.66l-1.08,0.92l-0.97,2.08l-0.72,0.45l-3.1,-0.46l-2.63,0.69l-10.73,6.95l-0.54,-0.41l0.24,-2.78l-2.24,-1.36l-2.2,-0.25l-0.74,1.84l-1.08,1.24l-1.09,4.43l-4.37,-0.41l-3.52,-1.13l-7.0,-3.69l-3.1,-2.86l-1.11,-4.13l-0.67,-5.99l-1.21,-1.03l-6.06,-2.52l-2.27,-1.69l-2.23,-3.93l-1.52,-4.25l-0.43,-2.98l-3.51,-1.13l-6.15,-4.32l-3.86,-1.91l-3.74,-0.69l-12.4,-0.23l-6.22,-1.96l-1.41,0.63l-1.0,1.27l-1.96,-0.53l-3.36,-2.08l-3.2,-3.22l-7.85,-12.88l3.26,-1.22l1.74,-0.1l2.24,0.5l3.79,2.07l2.2,0.6l2.4,-0.85l0.96,-1.66l0.84,-2.78l0.54,-2.96l-0.11,-2.34l-4.18,-3.95l0.25,-2.24l-0.3,-0.39l-2.4,-0.6l-3.66,0.53l-3.21,1.25l-2.08,1.57l-4.47,-7.08l0.73,-2.52l2.53,-4.45l-0.67,-2.93l0.96,-0.59l5.74,-1.08l1.21,-0.75l3.17,-3.92l1.01,-2.1l-0.42,-0.57l-2.23,0.36l-3.82,2.63l-1.25,0.44l0.36,-1.01l-0.4,-0.57l-11.07,1.84l-3.65,-0.46l-1.64,0.55l-3.2,2.5l-0.97,0.26l-2.43,-0.72l-2.69,-1.97l-1.93,-2.83l-0.26,-3.23l1.19,-1.2l2.57,-0.94l5.2,-0.38l0.42,-0.4l-0.32,-1.32l-1.67,-0.33l-1.27,-0.97l-1.44,-0.4l-1.59,1.42l-0.49,-0.88l0.25,-1.3l1.63,-2.21l2.07,0.67l7.9,-1.75l10.74,0.0l2.68,-0.58l6.23,-4.0l5.45,-2.53l0.85,-2.54l0.01,-3.28l-2.63,-3.41l-7.99,-6.93l-1.68,-2.94l-1.15,-0.7l-2.02,0.06l-3.03,0.95l-0.23,-0.34l2.97,-1.64l0.17,-0.52l-3.41,-7.38l-1.31,-1.95l-2.94,-1.54l-5.29,-3.72l-3.15,-1.28l0.52,-3.28l-1.29,-2.77l-3.21,-5.04l-0.53,-3.45l0.43,-3.06l1.2,-3.58ZM505.28,92.96l1.46,-0.15l0.0,0.1l-1.46,0.06ZM297.9,80.79l-4.13,0.26l-1.83,-0.53l-0.71,-1.01l0.85,-0.55l0.13,-1.05l-0.95,-1.26l2.65,-2.06l3.35,-1.23l3.76,-0.17l3.42,0.72l-0.11,1.55l-1.69,1.33l-2.6,3.11l-2.14,0.89ZM276.3,76.35l-2.63,1.21l-1.98,-0.03l-1.07,-0.76l-0.89,-1.73l0.53,-1.88l3.01,-1.63l5.82,-2.0l-0.61,4.08l-2.16,2.75ZM248.72,23.66l4.98,1.03l5.58,-0.23l-3.32,1.96l-1.38,0.31l-6.64,0.0l-1.43,-1.42l-1.92,-0.32l-4.35,2.34l-0.86,4.56l0.33,7.4l-0.75,4.1l-0.46,-1.37l-0.09,-3.5l1.14,-14.71l0.91,-2.84l7.38,-16.61l1.52,-1.52l0.16,0.48l2.5,0.21l0.62,1.28l-0.73,1.58l-3.99,1.84l-1.93,2.33l-1.01,2.75l0.82,2.7l-0.57,4.75l3.48,2.89ZM250.36,1.86l1.38,-1.38l2.81,1.2l-4.19,0.18ZM264.84,24.24l8.76,-0.35l-1.1,0.7l-7.66,-0.34ZM266.84,50.31l-0.68,0.79l-1.15,0.3l-1.56,-0.14l-2.55,-1.03l-2.45,0.75l-3.04,-0.76l-5.26,-2.63l1.64,-2.42l2.12,-1.64l2.56,-0.81l3.21,-0.23l5.35,0.27l2.07,1.02l1.62,2.25l0.0,0.67l-1.88,3.62ZM245.14,48.48l-1.96,1.86l-0.04,0.49l4.9,7.42l1.38,0.7l-3.8,1.38l-2.09,-1.53l-3.58,-4.6l2.64,-4.0l1.66,-1.46l0.89,-0.27ZM200.09,118.66l0.62,0.32l0.13,0.52l-0.2,-0.05l-0.56,-0.79Z",
        name: "Schleswig-Holstein"
    },
    "DE-NW": {
        path: "M0.45,535.4l2.3,-1.01l3.59,2.78l2.32,-0.19l1.28,-1.2l1.87,-3.25l1.25,-1.2l9.02,-5.9l5.56,-2.51l1.59,-1.71l-0.05,-0.58l-1.62,-1.26l2.52,-1.57l-0.07,-0.74l-2.56,-0.61l-4.71,2.69l-1.96,-0.9l-0.63,-2.15l0.28,-2.79l0.82,-2.49l3.04,-3.49l4.99,-7.67l3.42,-2.21l1.07,-1.23l1.45,-5.69l-1.43,-1.81l1.22,-7.53l-1.17,-6.77l-10.52,-11.37l-0.38,-1.41l1.63,-4.65l-0.24,-0.52l-6.55,-2.39l-2.03,-2.13l1.25,-3.47l-1.11,-1.27l-3.41,-1.89l-3.56,-0.19l0.05,-0.92l2.2,-1.96l0.17,-2.65l-1.35,-2.74l-2.12,-1.41l0.21,-0.73l1.42,-0.84l4.01,-0.6l5.32,-2.53l3.88,-0.86l7.41,1.32l-1.4,-2.23l-4.29,-3.59l2.51,-1.12l2.96,1.16l3.21,2.14l3.32,1.12l3.84,-0.47l2.11,2.52l3.93,0.58l1.35,0.65l0.26,1.83l0.49,0.33l3.98,-1.12l0.4,-1.52l-0.62,-2.3l5.63,1.38l2.09,0.01l1.83,-0.68l4.78,-3.04l9.67,-2.73l8.64,-0.23l2.81,-1.23l2.46,-2.4l2.21,-3.32l2.01,-1.19l-0.02,-2.9l-3.27,-3.11l-9.92,-4.29l-0.17,-1.68l0.56,-1.13l3.1,-0.94l2.11,-3.25l1.59,-1.36l1.46,-0.67l6.48,-0.67l1.35,-1.04l2.14,-3.6l1.8,-1.56l4.23,-1.56l2.04,-1.51l3.27,-4.02l4.32,-2.16l0.46,-0.93l2.15,0.05l4.05,-1.42l2.66,-1.82l13.4,-0.46l4.12,-0.75l6.73,-4.09l2.95,-0.61l1.84,-0.9l5.03,-4.3l4.49,-3.08l1.76,-0.41l2.87,0.2l1.62,-1.66l1.44,-3.57l1.19,-0.82l-0.18,-0.83l-1.47,-1.15l-0.31,-0.85l1.14,-4.04l0.83,-0.74l7.55,2.02l0.72,1.36l1.23,5.19l9.48,4.54l1.49,1.44l1.55,0.32l6.37,-2.07l0.76,0.12l3.51,3.8l2.76,3.95l0.09,0.4l-3.29,0.46l-0.78,0.57l0.24,1.95l1.3,1.98l-2.86,2.97l-0.04,0.87l0.86,1.97l-2.35,2.81l-0.05,0.79l0.94,1.08l2.43,0.39l0.46,1.39l0.97,0.63l4.31,-0.22l2.3,1.06l-2.5,5.88l-4.06,0.57l-2.52,0.96l-2.97,2.23l-0.27,0.92l2.18,4.83l6.27,2.39l5.03,-3.69l1.41,-0.56l3.43,-0.5l3.67,1.05l6.98,-2.19l3.06,-1.83l2.3,-2.57l2.98,-2.17l12.26,2.9l0.96,-0.18l0.88,-0.59l1.67,-3.2l4.88,-2.72l1.7,-2.05l0.6,-2.0l-3.34,-2.18l-0.25,-1.08l-0.08,-11.85l-1.93,-6.66l-1.37,-1.81l-2.9,-1.75l-6.35,-2.47l-1.11,-1.42l-1.66,-4.59l5.82,1.06l5.68,-0.63l2.55,-1.25l0.65,-1.03l0.93,-3.65l3.06,-2.06l6.74,-0.07l7.35,-2.23l3.06,1.62l2.61,3.94l0.32,1.87l-0.24,2.96l0.57,1.39l-0.38,3.23l0.55,1.42l1.51,0.5l10.16,0.9l3.26,-0.31l3.47,-1.18l6.68,-1.27l0.88,-1.06l1.47,-3.79l1.4,-2.26l2.54,-2.16l5.36,-2.34l1.15,0.22l1.6,1.84l1.94,0.74l-0.7,1.42l-1.78,1.53l1.85,5.58l-3.1,4.14l-1.73,3.09l-2.63,1.5l-4.06,0.09l-1.5,2.5l-1.24,7.23l0.46,1.22l0.86,0.67l7.24,2.04l-2.58,1.61l-0.45,0.82l0.82,3.08l-2.42,-0.06l-3.08,0.73l-0.27,0.55l1.88,4.18l-1.07,2.72l0.64,0.61l6.37,-0.63l7.49,1.1l-0.4,1.83l0.2,0.95l0.95,0.8l2.63,0.93l1.05,1.78l-1.26,2.95l2.16,5.18l-0.45,1.13l-1.6,1.2l-0.52,2.01l1.43,0.94l3.48,1.21l0.64,-0.15l0.73,-1.32l1.1,-0.28l3.87,1.35l-1.17,4.15l-1.82,1.87l0.06,0.61l4.74,-0.05l2.16,0.87l1.07,2.65l-1.57,4.71l0.29,0.54l1.15,0.2l3.23,-0.87l4.42,0.14l4.48,-0.92l-2.0,3.15l0.49,0.92l1.58,0.46l-0.82,1.1l-0.09,3.0l-1.71,3.84l-2.65,1.82l-1.56,2.58l-0.21,1.53l0.39,3.02l-0.62,1.5l0.26,1.49l-1.42,1.45l-0.29,1.32l0.22,1.73l0.79,0.79l1.58,0.03l3.52,-0.91l-1.46,1.85l-6.96,1.91l-1.4,0.8l0.05,0.8l1.95,1.37l-1.82,4.83l-2.41,2.34l-1.37,2.28l-7.1,4.02l-1.12,3.88l-1.78,0.03l-3.78,2.33l-4.23,-0.58l-2.12,-1.66l-0.0,-3.26l-0.72,-0.95l-6.62,-2.76l-5.61,1.55l-5.1,2.13l-0.71,0.78l-0.31,1.55l1.44,2.17l0.43,3.76l3.17,1.15l-1.14,2.23l-4.08,0.18l-3.68,1.96l-4.52,-0.9l-3.64,0.83l-4.4,0.3l-4.62,1.48l-0.91,1.32l-1.85,1.04l-0.61,1.29l-5.38,5.07l-1.86,3.65l0.37,0.76l1.55,1.08l0.72,1.81l1.85,0.58l1.2,-0.27l1.16,-1.42l4.44,-0.76l2.24,-1.35l0.97,-0.06l-0.32,1.61l1.16,0.77l1.92,7.63l0.05,1.51l-5.48,5.99l-0.02,0.84l0.96,1.42l0.08,0.89l-4.12,2.16l-3.3,-0.7l-10.43,0.3l-0.38,1.43l1.62,2.74l-0.25,1.65l0.95,3.65l-1.63,1.87l-1.69,3.16l-1.23,0.36l-0.72,0.72l-2.1,3.88l-0.3,3.39l-1.85,-0.11l-1.89,1.03l-3.03,2.64l-0.16,1.73l-2.81,1.64l-4.11,-0.01l-1.64,-2.29l-2.24,0.01l-6.68,5.7l-1.94,1.17l-1.02,2.04l-5.33,4.17l0.01,0.86l0.82,0.66l0.15,0.95l2.49,1.68l0.6,0.89l-0.77,4.27l-1.87,0.89l-1.11,1.82l-3.68,-1.55l-3.45,0.99l-0.58,-2.08l-1.67,-2.47l-5.11,-6.05l0.28,-3.74l-1.39,-4.54l-0.97,-0.23l-2.0,0.68l-5.45,-4.44l-3.76,-1.45l1.06,-3.51l0.32,-1.85l-0.3,-0.46l-5.7,-1.33l-1.46,0.32l-3.2,2.53l-0.33,0.85l0.21,4.16l1.24,2.68l-0.11,1.93l-2.86,-0.64l-2.5,2.24l-3.62,1.85l-0.08,0.66l2.14,2.17l-0.19,1.53l-1.75,-0.34l-1.51,1.89l-4.36,1.59l-1.46,2.23l-2.87,-0.08l-3.94,1.83l-8.12,1.89l-3.63,-0.26l-2.5,0.6l-0.95,1.15l0.41,0.64l-0.09,3.01l-0.85,1.41l-0.16,1.67l-2.95,1.78l-5.57,1.28l-5.38,-0.32l-0.92,-1.54l-1.91,-0.55l-1.55,2.46l-2.98,2.28l-0.86,0.22l-2.56,-0.62l-1.49,1.99l-0.88,0.29l-1.85,-0.75l-1.42,-0.09l-6.19,3.41l-5.82,1.52l-2.63,3.28l-2.22,0.55l-0.62,0.52l0.38,3.52l-0.22,2.44l-1.21,1.62l-1.13,0.16l-1.73,-0.55l-2.1,-2.71l-6.15,2.02l-0.14,2.36l-0.83,2.32l0.33,0.6l2.15,1.22l0.36,3.93l1.67,2.69l0.04,1.61l-7.54,1.84l-1.41,-0.24l-1.2,-1.27l-2.0,-1.16l-0.97,0.09l-2.6,1.46l-0.91,0.0l0.3,-1.33l-0.35,-0.63l-3.81,-1.51l-5.82,1.16l-4.67,2.88l-2.0,0.62l-1.1,-2.2l-2.26,-1.19l-1.57,-1.82l-1.1,-0.2l-0.87,0.66l-0.08,1.25l3.4,4.77l-2.43,1.05l-2.05,0.01l-3.47,-5.58l-0.11,-1.33l1.35,-4.73l0.09,-2.22l-1.96,-1.92l-0.77,-2.27l0.2,-0.81l1.12,-1.26l-6.3,-1.16l-1.96,-0.84l-4.72,1.05l-1.99,-2.3l0.56,-0.8l-0.3,-0.63l-1.62,-0.25l0.59,-1.56l-1.41,-1.48l1.57,-2.05l5.18,-3.18l1.97,-2.91l-0.18,-1.09l-0.38,-0.29l-6.7,-0.14l-1.83,-0.81l-0.86,-1.39l0.93,-0.48l0.13,-0.6l-5.98,-7.64l-1.93,-1.64l-1.99,-0.21l-4.81,0.78l-0.26,-0.72l0.29,-2.6l-1.77,-1.06l0.34,-2.53l-1.64,-1.4l-0.9,-1.92l1.19,0.11l1.54,-1.3l0.53,-1.73l-0.29,-2.14l0.72,-1.09l1.17,-0.56l2.1,0.16l1.49,-1.33l0.63,-1.48l-0.78,-3.73l0.85,-1.93l-0.27,-0.52l-3.16,-0.92l-2.85,-1.74l-0.35,-2.63l0.95,-2.33l-0.63,-0.97l-3.43,0.35l-4.07,-0.85l-4.73,1.51l-0.12,-2.94l-1.5,-3.69l-0.5,-2.69Z",
        name: "Nordrhein-Westfalen"
    },
    "DE-SN": {
        path: "M649.0,625.16l-1.62,0.51l-5.18,3.15l-3.09,4.69l-3.02,2.64l-0.33,2.11l-1.85,1.99l-0.62,1.42l-0.31,2.42l0.86,3.81l-1.06,0.65l-1.37,-0.15l-0.84,-1.1l-1.85,-5.78l-2.44,-2.34l1.25,-1.24l-0.3,-1.5l-1.01,-0.48l-4.07,-0.4l-0.95,-0.7l-0.28,-2.95l-0.62,-1.37l-2.04,-1.29l-4.69,-0.33l-0.84,-1.06l-2.79,-0.68l-2.12,0.03l-5.21,-2.72l-0.68,-4.51l-2.13,-1.24l-2.07,-2.7l-1.04,-0.33l-2.37,0.21l-0.57,-0.77l1.09,-1.06l2.37,-0.89l0.4,-1.53l1.03,-1.22l-0.26,-2.05l-1.83,-1.59l0.74,-1.97l0.98,-1.16l2.32,-1.5l2.03,-2.37l1.71,-0.02l1.94,1.72l1.96,0.24l1.29,-0.93l2.1,-2.93l1.3,-0.22l2.18,0.8l2.82,-0.78l0.93,-0.93l0.69,-2.02l-0.13,-2.55l2.56,-2.72l6.43,0.02l4.95,-3.4l1.99,-2.9l-0.19,-0.6l-4.09,-0.66l-1.17,-2.45l0.48,-1.71l-0.19,-0.66l-0.87,-0.75l-1.89,0.03l0.77,-2.02l2.22,-0.86l1.72,-1.87l-0.37,-1.2l-1.73,-0.68l-1.0,-0.94l0.08,-0.84l6.95,-1.75l3.87,-2.52l3.34,-0.33l1.12,0.65l0.76,-0.09l3.91,-4.23l3.73,-1.71l0.76,-1.31l1.56,0.49l6.86,-0.13l1.39,0.97l2.17,-2.21l1.77,-1.04l-0.02,-1.2l-2.07,-3.72l-2.37,-3.13l-5.65,-2.53l-1.2,-1.0l-3.96,-6.22l-1.04,-4.12l-15.19,-3.83l-6.4,0.51l-3.97,-0.65l-0.55,-0.56l-0.44,-2.26l-2.18,-1.75l-0.81,-1.35l0.44,-3.4l-0.31,-0.44l-2.72,-0.67l-0.03,-0.55l1.42,-2.27l-0.27,-4.27l-0.46,-1.54l-1.79,-2.02l-0.13,-2.54l-0.78,-2.33l0.4,-1.27l1.39,-1.81l2.24,-0.4l0.73,-0.59l0.54,-2.67l-1.59,-4.22l-0.25,-5.06l-0.88,-1.57l-0.22,-2.52l3.36,-3.03l0.47,-1.66l0.0,-5.89l2.77,-1.98l0.82,-2.16l2.95,1.1l3.18,0.29l5.79,-2.16l7.22,-0.61l0.73,-0.41l0.85,-3.47l0.61,-0.21l7.64,0.27l1.43,0.76l9.37,-1.36l0.83,0.68l1.29,-0.04l2.24,-1.57l1.73,-2.62l1.25,-0.6l3.46,0.4l3.12,1.02l1.97,-0.78l5.13,-3.55l0.86,-1.06l2.42,-0.19l0.95,1.69l1.4,0.87l4.83,1.55l1.63,1.4l1.25,-0.19l1.72,-0.96l0.48,0.16l2.71,2.18l2.92,0.78l2.67,2.73l1.44,0.84l1.07,0.29l1.24,-0.44l2.87,1.9l-0.34,3.35l1.09,1.24l1.96,0.98l1.28,3.93l-0.21,1.01l-1.82,1.38l1.0,2.59l-0.17,3.23l-0.63,1.53l-1.75,1.92l0.24,1.5l0.99,1.5l0.84,0.06l1.39,-1.45l0.88,0.11l0.74,-0.78l1.46,0.43l1.64,1.83l10.91,-3.01l2.47,-1.5l2.02,-0.19l4.49,1.83l4.58,3.14l1.59,1.98l1.37,0.54l2.21,-0.3l5.81,1.42l14.92,0.95l16.88,-1.74l2.3,0.55l1.01,-0.3l7.38,-9.09l1.56,-3.03l0.22,-2.1l0.51,-0.86l3.79,-4.12l5.02,-2.65l6.0,-1.21l4.61,0.5l3.44,1.06l3.56,1.87l3.87,-0.75l12.93,-5.38l4.18,-0.98l4.02,0.25l6.67,2.66l4.05,0.17l0.37,1.24l2.32,1.96l6.36,1.78l4.3,2.29l6.82,2.02l3.21,2.47l0.87,1.56l-0.77,1.66l1.4,11.49l2.13,3.66l2.23,2.19l1.35,2.38l-0.48,3.64l0.64,0.89l-1.56,2.53l-1.34,3.52l-0.8,3.65l-0.3,4.88l-1.95,2.47l-0.47,5.19l-9.26,18.97l-3.44,3.19l-1.44,1.96l-0.09,2.56l-1.52,3.37l-1.72,2.24l-3.49,0.26l-3.53,-0.67l-5.13,-3.01l-3.3,-0.79l-0.34,-0.68l0.32,-2.13l2.23,-4.98l-0.53,-1.73l-1.69,-0.26l-5.25,1.82l-0.69,-0.46l2.38,-4.81l-0.13,-3.35l-2.04,-2.41l-1.28,-0.84l-2.72,-0.6l-1.1,-0.64l-0.83,-0.96l-1.12,-2.62l-0.72,0.01l-0.79,1.66l-0.89,0.39l-3.47,-0.16l-2.83,1.02l-1.85,-0.44l-2.03,-2.04l-3.65,-1.0l-3.28,0.4l-2.68,2.25l-1.36,3.67l-1.05,1.27l0.11,0.61l1.29,0.68l4.55,0.79l-0.61,0.56l0.05,1.69l2.5,2.07l3.76,0.96l2.29,1.11l-0.5,2.76l-2.62,1.87l-7.56,-0.49l-3.62,0.61l-4.18,4.12l-15.19,5.82l-5.35,-0.28l-2.18,0.4l-3.48,2.81l-3.18,0.05l-0.99,1.08l-0.41,1.25l0.29,2.66l-0.51,0.61l-1.12,0.17l-2.79,1.45l-1.65,0.28l-4.52,-0.42l-7.75,1.65l-8.78,-0.04l-4.63,0.75l-4.02,2.03l-0.17,0.56l1.06,1.85l-0.32,1.48l-2.79,2.31l0.32,1.97l-4.72,3.92l-1.62,0.34l-2.0,-0.82l-2.51,-3.07l-1.67,-0.42l-0.97,1.18l-3.78,2.29l-1.56,3.36l-1.77,0.75l-3.17,-1.51l-2.31,0.09l-3.24,7.28l-1.34,2.04l-2.24,1.4l-5.05,-0.24l-4.64,1.08l-3.42,-0.9l-1.76,0.68l-1.43,7.74l-4.1,3.6l-3.13,-0.15l-9.9,-4.83l-3.02,1.09l-3.31,-0.12l-1.7,0.5l-1.39,1.12l-3.18,3.63l-6.38,-0.69l-7.35,0.46l-4.02,0.99l-3.7,2.69l-0.83,1.89l0.17,1.31Z",
        name: "Sachsen"
    },
    "DE-HB": {
        path: "M265.66,250.31l2.99,-0.33l2.69,1.38l7.16,2.2l2.11,-0.44l3.26,0.01l0.47,1.29l2.72,1.52l4.48,0.32l3.54,2.47l4.4,1.6l1.36,-0.49l1.23,-2.55l0.76,-0.22l3.33,3.07l-1.4,1.14l-0.28,0.91l0.47,0.95l2.61,2.61l-1.01,1.53l-0.59,3.76l-1.36,1.22l-3.97,2.26l-4.58,-2.93l-0.59,0.2l-0.14,1.16l-1.67,0.47l-1.73,-0.22l-5.32,-2.63l-5.13,0.89l-1.22,-0.18l-0.19,-4.35l-4.74,-4.35l-1.5,-1.88l-0.64,-3.9l-1.4,-2.3l-0.98,-0.62l-3.09,0.05l-2.31,-1.3l-3.92,-1.3l-1.3,-2.58l2.51,-0.02l2.99,1.58ZM265.91,197.73l6.33,0.21l-0.95,1.95l2.13,6.48l-0.11,2.44l-1.57,2.18l-2.02,1.53l-0.99,-1.33l-1.38,-0.15l-1.44,-2.04l0.78,-3.93l-4.78,-8.53l3.99,1.19Z",
        name: "Bremen"
    },
    "DE-SL": {
        path: "M65.93,745.95l-0.23,-1.93l-0.65,-1.16l-1.77,-1.49l-9.12,-3.87l-1.36,-0.17l-2.68,1.34l-1.34,0.11l-0.3,-4.41l0.57,-3.7l13.57,-1.06l11.44,0.43l6.27,-2.41l4.26,-0.15l14.47,-5.63l7.96,-4.23l2.89,1.17l2.68,-1.32l7.05,3.24l6.38,0.31l2.11,1.74l4.91,2.95l3.1,-0.24l2.95,-1.49l0.05,1.82l1.71,3.48l0.25,3.41l0.57,0.68l0.74,0.13l0.16,1.73l-2.72,1.68l-2.86,2.6l-0.54,0.98l0.61,1.93l4.08,4.23l-0.04,1.37l1.09,0.55l4.87,0.7l2.32,0.74l0.81,0.39l0.38,0.81l-0.64,1.56l0.39,1.37l-2.82,2.66l-0.56,2.26l-1.52,1.52l-0.72,2.75l-1.14,1.4l-2.18,0.34l-0.95,1.98l0.91,4.25l5.38,4.66l1.06,0.06l-1.47,1.17l-1.14,2.45l-3.65,0.81l-2.06,2.79l-3.13,-1.11l-8.41,-0.07l-2.95,-1.08l-4.44,-2.42l-1.32,1.19l0.29,1.69l-2.65,1.42l-1.84,-1.23l-1.07,-3.29l0.05,-4.41l-0.38,-0.4l-2.04,-0.09l-6.05,-2.91l-1.21,-0.18l-2.89,0.24l-4.04,-0.78l-1.14,0.2l-0.86,2.28l1.06,3.92l-1.47,1.66l-1.01,0.2l-3.73,-1.17l-4.42,-0.05l-0.97,-0.35l-1.09,-1.54l0.73,-2.95l-0.61,-2.24l-0.8,-0.28l-1.54,0.75l-1.6,-4.5l-2.21,-1.08l-0.18,-2.39l-8.08,-6.95l-0.52,-1.23l0.36,-0.79l1.85,-0.3l0.42,-1.35l-0.43,-0.9l-5.19,-4.82Z",
        name: "Saarland"
    },
    "DE-BY": {
        path: "M307.28,662.76l0.86,-0.85l1.68,-0.47l0.41,-3.68l0.81,-1.04l3.72,-0.82l5.12,-2.0l3.87,1.7l-0.83,1.47l0.85,0.42l2.16,-1.19l1.78,-1.75l0.49,-2.09l3.29,-0.87l9.69,0.58l4.61,1.99l1.45,2.41l1.59,1.62l3.95,0.12l6.17,-2.23l1.12,-1.44l-0.49,-3.2l1.7,-3.26l-0.64,-0.92l-2.32,-0.46l0.95,-3.62l-0.18,-3.43l1.88,0.4l1.07,-0.46l1.62,1.38l2.27,-0.43l1.71,0.66l1.51,-0.04l4.99,-1.4l0.46,-0.63l-0.63,-2.15l1.38,-2.47l4.65,-1.9l2.77,-2.07l-0.48,-5.55l2.29,-6.91l1.08,-1.41l1.88,-0.6l2.59,2.37l1.15,0.36l2.03,-0.12l5.96,-1.94l6.14,-3.03l2.02,-1.47l1.25,-1.69l3.15,-4.7l1.02,-2.47l6.44,-5.63l0.08,1.25l0.81,0.65l5.41,-0.31l1.16,0.29l1.63,1.47l1.28,2.91l9.38,3.01l0.77,1.25l0.03,1.8l0.44,0.78l5.73,4.64l-0.8,1.6l1.03,1.73l2.6,0.42l2.27,-0.53l1.46,2.26l2.62,1.88l0.23,1.17l0.56,0.48l2.81,0.21l1.06,-0.67l1.25,-0.14l1.25,2.28l2.44,1.7l0.83,4.11l-0.62,2.8l1.31,2.75l-0.33,1.46l0.63,1.21l1.07,0.93l4.39,-0.02l2.31,0.54l3.38,1.67l1.04,-0.63l0.49,-4.06l0.51,-0.49l1.78,0.58l3.89,-0.64l3.02,0.94l1.19,-0.17l0.81,-0.86l0.12,-1.97l-0.74,-1.51l-2.78,-0.9l-1.4,-1.87l-2.94,-0.17l-1.83,-1.61l-3.26,-1.93l0.62,-4.17l0.53,-0.32l1.93,0.55l0.91,-0.15l2.96,-3.62l2.07,0.49l2.62,-1.16l2.08,0.23l1.63,-0.61l1.98,1.53l4.49,-0.68l3.26,4.0l1.12,0.8l0.76,-0.31l0.41,-1.39l2.52,0.3l1.61,1.47l0.94,0.27l3.67,-0.89l1.28,-1.14l1.14,-0.21l0.8,1.45l1.46,0.33l1.75,2.56l-1.95,2.16l-0.04,0.53l0.85,1.12l4.81,3.81l0.59,-0.1l1.09,-1.49l1.27,0.86l2.3,0.6l1.35,-0.24l0.41,-0.8l-0.17,-1.28l1.04,-2.16l-0.67,-2.01l1.11,-2.55l-0.17,-1.39l0.9,-0.32l0.25,-0.59l-0.33,-2.13l-1.14,-1.63l-0.61,-2.11l0.35,-3.12l-1.27,-5.51l4.32,-1.34l2.01,-1.11l0.94,-1.99l2.02,-1.33l7.47,0.66l0.99,1.7l-1.77,1.46l-0.24,4.31l0.32,1.33l3.44,2.23l2.21,0.0l0.89,3.85l3.94,2.39l3.26,-0.4l1.34,-1.56l1.94,0.02l3.06,0.99l11.65,-2.06l1.71,-0.43l0.59,-0.74l2.05,-0.29l0.95,0.07l0.72,0.83l1.73,0.68l0.04,1.1l0.84,0.31l7.65,-3.11l2.44,-0.21l0.65,0.23l2.01,2.64l1.96,1.08l0.37,4.11l0.46,0.54l5.42,2.83l2.27,0.01l2.57,0.63l0.17,0.26l-2.07,0.14l3.06,3.44l0.18,3.12l-1.6,1.1l-1.26,2.02l1.18,1.66l4.81,2.52l3.39,3.54l0.96,3.23l-0.67,2.84l0.08,2.18l0.99,2.1l4.32,2.83l0.79,1.13l0.54,3.29l15.17,6.93l1.4,1.16l3.72,0.4l1.43,1.15l0.22,1.61l-0.67,1.74l0.11,1.78l5.34,2.42l0.45,0.68l-0.29,2.29l-0.75,1.87l-2.25,3.49l-0.64,1.71l-1.62,-0.42l-0.48,0.26l-0.61,1.93l-0.34,4.57l-1.4,1.18l-3.99,1.43l-1.39,2.43l1.54,3.06l2.12,2.57l2.96,1.97l4.54,1.88l0.69,1.17l0.07,1.48l-0.78,1.47l0.13,0.52l0.72,0.37l-0.28,1.38l4.33,3.04l0.63,1.27l0.88,4.34l2.07,3.72l1.28,1.08l2.58,0.48l0.41,6.2l0.53,2.18l1.12,1.84l2.11,1.51l4.46,1.78l1.87,1.64l3.18,6.03l1.79,1.56l7.88,1.32l1.85,-0.21l0.34,-0.5l-0.33,-1.25l0.86,-0.23l5.22,1.57l4.11,3.4l1.69,0.63l1.12,3.4l3.16,3.18l1.25,0.62l9.1,10.48l3.01,4.76l2.78,1.38l6.04,0.27l2.98,1.41l2.98,3.4l4.11,3.55l1.02,2.05l0.06,3.47l1.49,2.17l6.03,4.23l2.35,0.96l0.51,-0.2l1.85,-3.44l1.14,-0.44l2.08,0.37l5.02,2.8l1.6,-0.1l0.24,2.13l1.04,2.3l1.58,2.05l1.74,1.48l1.96,0.81l3.69,0.51l1.24,0.59l2.19,2.92l4.74,8.01l1.76,1.57l-2.78,4.98l-0.27,1.32l0.72,0.39l0.98,1.59l1.19,0.69l-0.93,0.88l-0.25,1.5l0.51,4.16l-0.37,3.81l-2.65,5.19l-1.4,0.86l-2.62,0.4l-0.87,1.54l-0.73,2.83l-3.74,-1.44l-1.54,-1.97l-3.43,-1.85l-10.31,-2.42l-3.36,0.39l-3.33,1.1l-1.57,1.94l0.76,3.31l1.11,2.24l-2.06,4.71l-0.19,5.98l-0.88,1.51l-0.74,3.28l-1.29,1.84l-9.51,7.1l-3.21,1.54l-13.45,2.0l-10.25,3.48l-5.32,4.0l-3.17,1.52l-1.61,1.34l-5.06,0.84l-1.6,0.71l-4.04,4.56l-3.86,2.32l-1.84,2.31l-1.74,0.34l-0.82,1.07l-0.25,2.03l1.43,3.27l0.97,1.31l6.85,6.13l1.41,2.69l0.83,2.85l0.86,1.09l2.44,1.29l4.32,3.43l3.28,6.55l2.41,2.99l-6.14,8.46l-0.58,1.08l-0.39,2.35l-2.42,3.25l0.06,0.54l1.79,1.49l5.48,0.88l4.06,-1.15l1.33,0.19l2.26,1.91l1.87,2.76l1.01,3.24l-0.26,2.81l-1.46,3.08l-1.87,1.9l0.16,2.89l-1.15,2.39l0.08,2.98l0.82,2.91l-3.23,3.13l-0.81,0.03l-2.21,-1.25l-2.64,0.63l-5.64,-3.4l-5.35,-4.83l-2.51,-0.55l-2.2,-1.54l-0.47,-2.79l1.08,-2.64l2.53,-1.08l0.1,-0.68l-4.5,-3.07l-1.32,-1.39l0.9,-1.93l-0.41,-0.57l-1.61,0.18l-5.54,-1.22l-3.58,0.01l-5.45,1.56l-4.4,3.37l-1.44,0.55l-3.9,0.29l-4.86,-3.26l-2.27,-4.56l-1.8,-0.26l-5.39,1.47l-5.73,-1.02l-2.14,0.26l-3.1,1.1l-0.75,-0.57l-0.44,-1.13l0.91,-1.49l0.88,-2.83l-0.42,-0.58l-2.64,1.09l-4.12,2.64l0.6,1.91l2.0,1.8l0.35,3.74l-0.39,1.75l-2.66,2.94l-23.19,-0.73l-8.35,1.48l-1.29,0.76l-0.9,1.95l-0.76,0.22l-5.44,-0.96l-8.01,-0.04l-6.12,-0.78l-3.44,2.61l-1.92,5.31l-1.66,1.59l-2.01,0.69l-4.5,0.64l-4.61,-0.88l-2.36,0.46l-4.82,4.68l0.19,0.67l2.04,0.78l0.25,0.6l-0.65,0.95l-1.41,0.52l-4.19,0.09l-1.92,0.52l-4.71,4.35l-1.99,0.78l-1.87,-0.18l0.18,-3.0l-2.57,-1.15l-2.6,0.62l-6.36,3.79l-1.81,0.47l-10.1,-0.12l-1.17,-0.59l-0.71,-1.2l0.6,-1.65l-0.46,-1.68l-4.89,-4.55l-5.07,-2.04l-0.36,-0.53l3.71,-2.56l-0.07,-0.61l-3.34,-1.99l-1.63,-0.11l-5.34,1.9l-2.78,0.29l-0.65,-0.17l-1.31,-1.66l-12.95,-4.21l-2.49,-0.04l-1.67,0.95l-3.08,3.12l-5.08,-0.38l-2.58,-1.46l-0.13,-0.83l0.95,-1.82l-0.61,-1.61l-0.69,-0.28l-2.4,0.51l-1.74,0.93l0.2,1.23l1.42,2.63l-1.09,5.97l2.28,1.76l0.47,1.0l0.41,4.01l-0.86,2.69l-1.39,2.45l-1.56,1.79l-3.99,1.76l-2.78,4.57l-3.57,3.45l-6.4,2.98l-7.6,0.8l1.04,-1.69l2.26,-1.16l0.01,-2.48l1.76,-4.61l-0.16,-2.61l-2.04,-0.87l-4.31,0.67l-1.64,1.38l-1.85,-0.59l-2.61,1.03l-0.76,-0.64l-0.81,-3.66l-0.84,-0.93l1.83,-1.23l0.61,-1.51l-0.89,-1.79l-4.87,-6.13l-0.46,-0.12l-2.67,1.35l-0.76,-0.39l-0.18,-1.41l-0.89,-1.67l-2.22,-2.21l-0.25,-1.93l-0.62,-0.28l-1.13,0.77l-1.34,0.23l-2.82,-0.19l-3.12,-0.93l-2.34,0.81l-1.74,-0.77l-0.57,-4.31l-1.3,-1.17l-1.54,-0.44l-1.61,0.17l-1.53,0.73l-2.13,2.14l-2.62,4.13l-2.49,1.02l-6.18,0.09l-4.99,-1.18l5.34,-6.36l3.94,-0.89l1.04,-1.33l1.35,-0.56l3.53,0.8l4.5,-1.99l7.24,-5.55l2.8,-1.14l3.86,1.42l4.82,0.48l5.61,-2.01l4.04,-0.53l0.49,0.32l1.53,3.25l0.63,0.05l1.06,-1.28l0.32,-2.33l2.77,0.72l0.95,-0.65l0.45,-1.9l-0.84,-2.57l-0.57,-6.54l-0.51,-0.77l-1.25,-0.17l-1.92,-2.3l0.73,-1.09l2.32,-0.31l1.83,-2.1l-2.55,-5.48l-0.46,-0.42l-1.19,-0.07l0.99,-0.98l0.96,-2.93l0.41,-4.61l-2.45,-4.06l0.15,-0.59l1.32,-0.92l2.91,-6.98l0.74,-2.83l0.16,-4.81l-0.34,-1.72l-2.62,-5.07l-3.85,-15.14l-1.57,-4.54l-5.07,-8.16l-1.43,-0.32l-0.61,-0.97l5.91,-6.63l-0.11,-1.92l2.08,-2.43l3.32,-0.59l2.89,-1.46l0.52,0.41l0.5,1.82l1.53,0.49l9.54,-4.95l0.53,-1.77l1.16,-1.12l5.1,-0.59l-0.6,-1.19l1.09,-2.68l0.18,-1.6l-1.3,-3.93l1.66,-0.87l0.53,-1.27l-0.62,-0.92l-4.02,-2.53l-1.63,-2.66l0.12,-1.36l2.05,-2.42l2.29,1.65l2.94,0.13l1.54,2.66l0.82,0.44l5.8,-5.11l0.73,0.33l-0.54,0.39l-0.6,2.72l0.89,1.26l1.7,-0.72l4.25,-3.37l0.09,-0.53l-2.4,-4.39l-2.99,-1.08l-0.77,-1.48l0.06,-1.09l0.73,-1.24l-0.03,-3.13l1.39,-1.63l0.55,-2.26l-1.07,-2.44l0.47,-1.36l0.33,-4.38l-0.19,-0.8l-0.75,-0.6l1.86,-0.82l0.18,-1.17l-0.92,-2.48l-1.26,-1.18l-0.71,-1.52l-2.42,-2.9l-4.06,-2.83l-1.6,-3.33l-7.98,-2.23l0.39,-1.87l-1.89,-1.74l0.2,-1.55l-3.01,-1.34l1.83,-0.24l1.04,-1.59l0.6,-2.59l-0.35,-1.51l-2.28,-1.74l-2.18,0.71l-3.67,-3.85l-3.02,-1.98l0.92,-0.35l0.31,-0.87l-1.55,-2.1l-0.17,-2.79l-1.63,-1.96l2.25,0.62l0.87,-0.6l0.1,-1.15l-1.24,-2.85l0.7,-2.29l-0.29,-0.62l-2.05,-0.88l-0.86,-1.0l0.04,-4.05l1.56,-1.58l2.71,0.45l0.62,-0.68l-3.12,-6.63l-2.65,-1.08l1.1,-1.43l0.77,-2.15l-1.08,-2.6l0.77,-1.6l-0.13,-1.06l-2.93,-1.17l0.39,-2.18l-2.21,-1.02l-2.84,2.29l0.82,1.36l0.02,0.91l-3.59,3.2l-0.7,0.32l-7.69,0.0l-0.64,-8.57l-1.63,-1.57l0.57,-1.19l-0.7,-1.14l-1.22,-0.12l-1.73,1.79l-1.44,0.57l-0.95,2.06l-0.66,0.3l-1.11,-0.51l1.98,-2.18l0.04,-2.29l1.77,-2.05l0.43,-1.48l-0.83,-1.39l-3.8,-3.59l-0.24,-4.98l-3.88,-4.3l-0.65,-0.13l-2.79,1.25l-3.39,3.08l-1.09,-1.87l-0.26,-1.92l-1.05,-0.46l-0.95,1.22l-1.44,0.77l-0.45,2.03l-2.01,0.14l-1.86,-1.01l0.85,-1.87l-0.08,-1.09l0.84,-0.79l-0.2,-1.41l0.56,-1.34l-0.32,-1.95l0.7,-1.47l-0.84,-1.18l-4.66,1.55l-2.58,-1.4l-3.0,0.42l-5.23,-2.09l-1.95,-0.07l-3.63,0.46l-3.49,1.08l-4.71,-0.28l-1.32,0.34l-1.28,0.7l-1.63,1.68l0.67,2.26l-0.68,1.36l0.15,1.16l1.52,0.85l3.77,0.63l0.26,0.43l-0.4,1.79l0.49,0.74l1.82,-0.34l1.16,-2.18l2.28,0.8l-1.01,5.79l0.66,1.44l-1.49,1.17l-2.51,-1.34l-2.96,1.06l-3.2,0.23l-2.21,0.94l-0.91,1.03l0.29,2.08l-1.32,1.17l-0.69,1.82l-0.76,0.83l-7.78,-0.04l-5.51,1.02l-0.81,-0.43l-1.36,-1.97l-2.25,-2.16l3.74,-3.65l-1.14,-5.85l2.13,-0.38l1.38,-1.37l-0.23,-2.35l1.6,-3.44l-0.49,-0.75l-2.19,-0.91l-0.2,-0.63l1.53,-1.9l0.54,-1.57l-1.04,-1.29l-2.07,0.2l-1.03,-0.66l-0.76,-1.74l-0.03,-3.78l-1.03,-0.1l-1.19,1.58l-0.64,-0.99l-3.46,-8.98l0.19,-8.9l1.56,0.51l0.89,-0.69l-1.22,-2.34l0.03,-1.65l-0.89,-1.16l-0.52,-2.77l-0.62,-0.81l-1.3,-0.26l-1.47,0.54l-1.3,-0.69Z",
        name: "Bayern"
    },
    "DE-MV": {
        path: "M481.92,178.1l1.27,-5.8l-0.83,-3.75l-1.13,-2.45l1.12,-3.22l4.68,-2.26l4.85,-3.67l2.24,-1.2l1.72,0.43l-0.12,1.14l0.99,0.72l3.24,-0.41l1.7,-0.93l-0.16,-0.89l-4.71,-1.49l-0.52,-0.73l0.03,-3.3l1.61,-0.28l4.13,-3.22l3.43,-0.82l5.18,-2.25l11.78,-1.26l1.23,0.83l1.37,2.87l3.58,0.9l0.34,0.43l-0.43,2.9l0.45,1.81l1.38,0.63l3.84,-0.01l3.91,-2.68l2.12,2.62l3.95,0.08l3.88,4.15l2.14,0.52l2.28,-6.56l-0.4,-2.18l2.46,-1.97l-0.54,-2.49l3.15,-2.6l0.07,-1.39l2.36,0.48l2.19,-1.25l1.85,-3.63l2.09,-0.97l1.22,-1.54l0.54,-1.84l-0.72,-0.72l0.25,-0.94l3.13,-4.29l2.97,-1.67l3.71,-0.43l8.28,1.17l23.39,-4.07l3.29,-1.69l0.41,3.26l-0.37,3.71l0.22,3.25l2.4,2.44l0.52,0.03l-1.75,-6.72l0.85,-1.31l2.72,-1.25l1.04,-2.01l-0.33,-0.57l-1.11,-0.09l-1.94,0.39l3.28,-3.48l2.04,-1.52l2.27,-3.09l9.96,-4.23l3.83,-2.59l1.52,-1.46l3.53,-5.51l1.04,-1.21l-0.58,1.12l0.6,1.49l-0.41,1.37l-1.07,1.02l-1.5,0.28l-0.3,0.53l1.66,4.19l-0.96,0.92l0.08,0.64l4.29,2.41l2.76,0.51l2.1,-1.06l0.21,-0.46l-2.88,-0.66l-1.71,-1.22l0.5,-1.25l3.25,-2.97l2.22,-1.01l0.58,-2.84l1.52,-1.03l6.33,-2.46l0.06,-0.72l-1.75,-1.2l1.47,-0.44l1.2,0.48l0.61,-0.48l1.51,0.92l3.02,-0.64l5.35,-2.46l0.2,-0.53l-0.53,-1.61l2.88,-0.88l0.84,0.07l0.0,0.32l-1.37,0.36l-1.08,1.21l-0.6,1.63l0.01,2.12l0.47,-0.14l1.82,-3.02l1.45,1.82l1.26,0.53l1.27,-0.9l0.88,0.63l1.29,0.04l1.62,-1.2l1.22,2.29l2.15,2.07l3.54,-0.17l2.32,-1.17l2.72,-4.59l2.43,-1.94l3.84,-2.0l3.76,-1.13l1.57,0.37l-0.75,0.77l-0.02,1.78l0.76,1.72l1.22,1.42l5.18,2.5l-1.71,2.66l0.47,2.25l2.75,3.57l0.77,4.28l1.25,0.48l3.99,0.0l-2.46,1.09l-0.2,0.46l0.41,0.29l3.11,-0.23l5.03,2.31l3.46,0.68l2.35,1.04l3.18,5.26l2.25,1.66l-2.31,2.02l2.84,0.24l3.66,-1.48l1.35,0.42l-1.68,2.2l0.06,0.68l1.49,0.57l1.29,-0.7l0.58,0.13l3.09,5.62l1.6,1.75l1.99,1.02l2.31,0.03l0.4,-0.4l-0.16,-1.24l-2.58,-3.02l11.86,-1.89l2.95,-1.11l4.97,-2.74l2.47,-0.67l0.11,0.57l-1.67,0.89l0.25,1.21l2.95,1.23l7.59,5.14l-3.33,7.36l-2.54,1.27l-0.03,0.7l1.14,0.7l3.92,4.36l3.92,1.63l0.96,2.37l0.13,1.83l1.94,0.19l3.52,1.43l0.12,0.95l-1.57,2.52l-7.11,4.8l-1.02,2.12l1.08,1.83l3.66,1.08l0.65,0.4l0.64,1.45l1.44,1.69l1.65,1.21l1.19,-0.08l7.1,4.81l3.27,0.64l2.2,1.94l2.92,-0.02l3.76,1.61l7.9,0.48l2.89,-0.69l1.88,-2.24l1.33,0.21l1.22,0.95l0.24,1.84l-0.64,0.81l-4.51,2.62l0.03,0.71l2.73,1.01l2.01,0.16l-0.24,5.58l3.5,7.74l-0.02,9.1l0.72,2.85l2.41,3.1l1.06,2.83l2.0,2.75l1.02,6.87l1.99,7.53l-6.34,3.2l-2.8,2.92l-2.51,1.0l-0.8,1.97l-1.14,0.69l-6.32,-0.5l-7.49,-1.23l0.07,-1.99l8.07,-4.44l3.64,-4.68l1.56,-2.97l0.5,-2.61l-0.15,-3.62l-0.33,-0.38l-2.38,-0.42l-4.03,0.2l-3.65,-1.45l-2.68,0.55l-1.84,2.12l-4.36,-1.07l-5.89,-0.35l-6.67,0.4l-1.35,-1.65l-0.55,-1.85l-2.78,-4.12l-0.43,-3.16l-4.46,-1.42l-2.37,-3.03l-1.95,-0.36l-0.45,0.37l-0.11,2.73l2.43,3.71l0.34,1.25l-2.47,0.89l-3.35,-0.2l-3.69,0.49l-5.95,4.16l-1.9,2.75l-2.07,1.57l-3.36,0.12l-2.06,0.87l-1.49,1.2l-1.3,4.05l-3.14,6.23l-2.25,2.12l-1.08,0.32l-5.11,3.37l-1.58,0.46l-5.68,-2.09l-2.16,-0.35l-2.69,0.23l-1.67,0.7l-1.73,1.64l-1.31,2.48l-0.54,2.42l-2.37,0.0l-1.05,-0.39l-2.24,-2.7l-1.49,-0.38l-0.95,0.24l-3.38,2.33l-1.38,2.62l-5.62,3.47l-3.89,3.57l-2.31,0.33l-2.6,-1.06l1.35,-1.58l-0.23,-0.9l-0.71,-0.49l-8.54,1.32l-4.19,-1.69l-6.78,0.6l-0.84,-0.76l-0.44,-3.33l-1.02,-0.5l-2.4,-0.1l-3.98,-0.9l-2.57,-2.14l-1.45,-0.6l-11.0,-2.21l-3.17,0.63l-4.78,-0.04l-1.39,-1.6l-2.87,-1.35l-4.7,-3.43l-4.27,-2.04l-6.72,-1.48l-2.18,-3.07l-1.48,-0.52l-1.36,0.31l-2.9,1.65l-2.5,-1.65l-2.73,0.44l-3.4,1.19l-1.37,2.07l-2.51,1.41l-1.15,3.93l-1.46,0.23l-3.54,2.59l-1.86,-0.59l-5.53,1.92l-2.27,2.22l-2.68,-0.5l-1.8,0.75l-0.04,0.69l1.83,1.19l0.2,1.19l-4.83,-0.16l-3.84,1.5l-1.16,-2.07l-3.11,-2.09l-1.4,-0.41l-3.47,0.18l-5.42,1.68l-6.33,4.34l-0.73,1.46l0.23,1.27l1.3,1.5l0.92,3.96l-0.59,1.85l-1.78,1.11l-2.39,0.19l-5.25,-2.44l-3.37,-0.04l-1.92,0.94l-0.43,2.95l-3.76,-0.99l-7.44,-0.23l-1.73,-2.32l-1.63,-0.83l-1.49,-1.47l-2.99,1.55l-2.84,-3.85l-0.96,-0.51l-1.64,0.19l-5.08,3.67l-4.62,-2.83l-10.76,-8.25l-8.97,-4.25l-3.06,-2.02l-3.18,-3.29l-3.42,-1.07l-0.71,-5.58l-2.26,-2.41l-3.66,-0.83l-6.36,0.22l1.87,-2.81l0.96,-6.46l0.4,-0.57l2.56,-1.02l2.21,0.2l0.63,-0.57l0.84,-2.19l5.35,-1.32l6.28,-3.89l0.24,-2.17l0.93,-2.22l-0.43,-2.79l2.41,0.39l5.12,-0.46l0.7,0.9l0.38,1.6l0.94,0.58l2.71,-2.54l-0.45,-0.76l0.36,-0.4l-0.03,-1.53l-1.19,-3.64l-0.06,-1.97l1.42,-1.15l0.2,-2.07l-1.01,-2.08l-0.43,-2.18l-2.96,-2.31l-2.83,-0.7l-2.05,0.25l-0.63,-0.29l-5.03,-5.16l-4.54,-0.84ZM642.07,96.74l2.66,-3.11l-0.61,2.03l0.39,1.75l-2.44,-0.67ZM646.34,91.76l5.13,-7.48l1.57,-3.56l1.95,-1.45l-0.15,0.31l2.09,2.72l4.42,1.54l22.4,0.02l3.61,1.41l2.45,-1.0l2.55,0.51l0.9,1.08l-2.02,1.51l-2.37,0.42l-10.42,-0.72l-4.16,-1.26l-2.82,-0.28l-0.94,0.39l-1.42,1.43l-4.37,-0.39l-1.17,0.46l-0.55,1.23l-0.69,-0.42l-1.92,0.98l-0.3,0.45l0.64,1.82l-0.88,-0.33l-2.27,0.2l-1.77,0.95l-0.78,1.25l-1.36,-1.34l-2.06,-0.82l-3.56,-0.27l-1.75,0.64ZM798.23,135.23l2.91,1.47l17.21,15.3l1.44,0.87l-1.45,3.17l-1.55,0.57l-0.19,0.67l1.67,1.64l0.59,1.57l-10.54,0.98l-2.06,-0.24l-2.04,-0.86l-2.25,2.06l-2.77,1.3l-5.54,1.21l-6.12,0.08l-3.28,-0.8l-1.29,-1.43l2.74,-1.46l3.17,-0.58l3.4,-1.59l1.14,-1.08l0.66,-4.19l-3.57,-5.47l0.21,-2.94l4.5,0.23l1.2,0.4l-0.98,4.14l0.14,2.54l1.93,-2.27l1.08,-0.47l2.7,0.0l-0.54,1.45l0.3,0.47l3.35,0.83l0.46,-0.55l-0.72,-1.6l1.22,-3.31l-0.17,-3.59l-1.42,-2.43l-2.38,0.48l-1.77,-3.71l-1.45,-1.55l-1.7,-1.06l-1.94,-0.39l-2.1,0.34l-1.23,1.15l0.77,2.71l-1.61,1.18l-1.47,2.25l-2.82,0.87l0.12,-1.11l1.81,-2.81l-0.52,-1.88l-1.02,-0.45l-4.23,1.63l-2.76,2.59l-1.41,-0.44l0.67,-2.17l2.63,-4.4l0.6,-3.89l-0.98,-2.22l-5.0,-4.65l2.14,-2.43l1.62,-0.51l1.59,0.54l3.94,7.34l2.69,2.24l6.55,3.11l3.74,1.16ZM717.15,70.94l8.27,-1.21l1.39,0.25l0.64,0.83l2.09,0.95l0.92,2.64l0.59,0.17l0.91,-0.75l0.36,-1.54l-0.73,-2.12l2.96,-2.83l2.61,-1.34l-0.77,1.96l-1.61,2.28l1.38,0.3l0.57,0.55l-1.27,2.45l0.34,0.57l2.86,-0.36l0.97,-0.99l0.45,-1.78l2.04,2.68l-0.5,2.25l1.94,2.26l2.76,0.85l5.06,-0.11l0.32,-0.63l-0.58,-0.81l2.0,-2.74l0.0,-1.01l-2.07,-4.31l2.07,-1.24l0.0,-0.84l-0.42,-0.4l-1.45,0.14l-2.02,1.73l-4.15,-0.01l-1.71,-2.32l-2.38,-0.7l-2.79,-4.18l-0.6,-0.19l-3.69,3.31l-2.23,1.07l-3.32,2.47l-1.57,-0.4l-0.27,-1.27l0.65,-2.36l1.22,-2.18l1.44,-1.11l0.94,-3.49l-0.74,-0.79l-4.39,0.93l-1.57,0.73l0.51,-1.92l2.07,-1.48l13.36,-3.12l2.62,-0.02l2.26,0.99l0.0,0.36l-5.16,3.07l-0.91,2.1l0.3,2.71l0.9,2.03l1.36,1.57l1.78,1.18l4.26,1.12l12.66,-1.95l4.2,0.73l2.77,2.48l0.58,3.18l-2.4,3.07l-4.27,2.3l-2.22,1.72l-1.07,2.36l1.25,4.72l2.19,3.33l2.24,0.99l4.58,0.89l1.92,1.1l4.27,5.6l1.72,0.59l-1.89,1.65l-1.04,1.85l-0.61,4.97l-1.03,-0.15l0.57,-0.37l0.42,-1.17l-0.78,-1.75l-3.26,1.35l-2.31,-0.3l0.0,-0.36l3.37,-1.16l1.6,-1.01l0.96,-1.69l-0.37,-0.59l-4.86,0.27l3.21,-1.63l-0.37,-1.32l-2.63,-0.2l-1.61,0.16l-2.17,1.69l-2.64,-1.65l-9.78,0.93l-1.95,0.97l-5.27,3.78l-2.18,3.36l-2.3,0.4l-2.4,1.24l-0.39,3.61l0.62,0.37l1.34,-0.92l0.17,-1.07l4.01,-0.38l0.65,2.8l-0.16,1.12l-1.24,0.48l-5.71,-1.2l-2.94,-1.57l1.92,-4.57l-1.98,0.67l-1.29,1.29l0.11,0.63l-2.2,0.1l-1.51,0.81l-2.31,-1.61l-3.16,-0.9l-0.85,-0.93l0.49,-1.5l-0.28,-0.51l-1.67,-0.34l-3.64,1.23l-0.4,-0.62l0.37,-0.58l1.05,-0.32l1.38,0.46l0.53,-0.38l0.0,-0.84l-5.98,-3.93l1.18,-2.54l1.84,-2.27l2.21,-0.81l2.85,1.5l0.94,-0.71l1.12,0.72l1.49,-0.24l3.12,-2.05l-1.79,-0.45l-0.97,-0.76l-0.4,-1.09l0.43,-2.24l-0.37,-0.4l-1.2,-0.09l-1.22,-1.27l-1.17,-0.47l-3.67,0.72l1.8,-2.59l7.49,-2.07l0.34,-1.03l1.22,-0.93l-0.17,-0.66l-3.74,-1.41l-0.55,-0.84l0.67,-0.91l-0.06,-1.13l-0.52,-0.35l-4.4,1.04l-1.67,-1.28l-0.34,-2.17l-0.75,-0.98ZM739.78,70.66l-2.16,-0.9l0.0,-0.41l0.83,-0.62l1.33,1.93ZM708.25,76.69l0.03,-0.39l3.06,-8.86l0.65,-3.39l0.57,-0.76l3.61,-0.23l0.43,1.09l-0.55,0.2l0.0,-0.75l-0.62,-0.33l-2.57,1.83l-0.67,4.88l-0.91,2.68l-2.09,1.74l-0.94,2.3ZM558.01,136.38l-0.47,-2.08l0.43,-0.96l5.48,-2.13l-4.16,3.08l-1.28,2.1ZM553.63,141.61l-2.73,6.58l-0.89,1.07l-0.65,0.01l0.61,-2.98l-0.81,-1.86l-1.19,0.22l-0.56,1.4l0.38,1.59l-1.1,0.75l-1.35,-0.06l-2.68,-1.57l1.25,-2.66l3.41,-2.38l3.87,-1.03l2.43,0.91Z",
        name: "Mecklenburg-Vorpommern"
    }
},
height: 1013.840551394365,
projection: {
    type: "mill",
    centralMeridian: 0
},
width: 900
}), $.fn.vectorMap("addMap", "europe", {
insets: [{
    width: 900,
    top: 0,
    height: 790.3366477906968,
    bbox: [{
        y: -9690294.156947838,
        x: -4159649.2860909165
    }, {
        y: -3201145.6268246886,
        x: 3229902.613642692
    }],
    left: 0
}],
paths: {
    BE: {
        path: "M400.73,433.08l-0.52,-2.25l-0.56,-0.57l-1.77,-0.48l-2.13,-0.14l-0.38,-0.28l-0.52,-2.3l-0.72,-1.23l-1.11,-0.96l-1.47,0.14l-1.43,0.73l-0.9,0.22l-0.92,-0.59l-2.1,-2.12l-0.16,-0.43l0.22,-0.99l-0.84,-1.6l-0.09,-0.51l5.63,-2.88l3.56,-1.53l1.28,-0.35l0.35,1.28l0.4,0.6l0.61,0.41l0.8,0.0l1.32,-0.72l1.22,0.17l0.87,0.33l1.05,0.77l1.13,0.14l2.05,-0.73l1.86,-1.11l0.78,-1.23l1.7,0.4l0.63,-0.24l0.21,-0.45l-0.2,-0.84l1.02,-0.55l1.09,0.83l0.82,0.06l1.67,-1.16l0.35,0.38l0.35,0.92l0.55,0.19l1.3,-0.08l1.17,-1.0l0.54,1.83l1.68,1.4l1.62,0.43l2.18,-0.42l1.56,1.44l2.54,0.82l0.24,0.29l-0.08,0.46l-0.9,1.69l-0.1,0.88l-1.21,1.2l-0.17,0.9l0.73,1.23l0.43,0.19l1.64,-0.55l0.11,0.13l-0.41,-0.01l-0.41,0.39l0.39,0.41l2.43,0.07l1.66,1.17l0.54,0.79l0.69,0.45l-0.57,0.57l-0.1,0.41l0.2,0.53l0.57,0.56l1.13,0.22l0.42,0.41l0.27,2.03l-2.32,1.34l-0.73,1.47l-1.68,-0.36l-0.37,0.11l-1.48,1.5l-1.13,2.23l-0.65,0.89l-0.26,2.02l2.04,2.91l-0.89,1.46l-1.0,-0.01l-2.56,0.49l-3.15,-2.93l-1.99,-0.73l-1.61,-1.01l-1.76,-0.23l-0.27,-1.86l-0.65,-0.86l0.89,-2.91l-0.19,-0.47l-0.91,-0.33l-0.73,0.31l-1.0,0.88l-0.65,1.57l-1.29,0.64l-2.28,0.26l-2.49,-0.26l-0.25,-0.23l0.63,-0.96l0.11,-0.73l-0.73,-1.1l0.42,-1.16l-0.09,-0.82l-1.77,-1.33l-1.44,-0.33l-2.31,-0.2l-0.79,0.17l-0.45,0.42Z",
        name: "Belgium"
    },
    FR: {
        path: "M467.41,568.7l0.77,-0.77l0.95,-1.92l1.23,-0.85l3.09,-0.88l1.24,-1.13l0.62,0.05l1.09,0.51l0.48,-0.04l0.35,-0.3l0.45,-1.04l-0.18,-0.96l0.1,-2.01l0.33,-0.92l0.26,-0.03l0.39,0.4l0.24,2.71l-0.35,2.37l0.28,0.9l0.7,0.99l0.4,6.29l-0.06,0.38l-2.01,3.28l-0.12,3.28l-0.24,0.74l-0.6,0.88l-1.03,2.66l-0.66,0.88l-3.62,-1.94l-0.93,-0.91l0.77,-0.94l0.22,-0.73l-0.25,-0.45l-2.03,-0.85l0.51,-1.36l-0.22,-1.18l-0.41,-0.29l-1.25,-0.03l1.06,-1.23l0.08,-1.13l-0.23,-0.35l-0.75,-0.34l-0.61,-0.58l-0.2,-0.63l0.36,-0.41l0.84,-0.38l0.16,-0.59l-0.67,-0.97l-0.55,-0.18ZM313.21,482.01l0.65,-0.84l-0.12,-0.59l-0.73,-0.41l-2.57,0.36l-1.17,-0.3l-1.49,-1.3l-1.38,0.14l-0.87,-0.45l-1.52,-0.0l-0.86,-0.67l-5.41,-1.47l-2.3,-0.18l-2.17,0.65l-0.93,-0.18l-0.72,-0.8l-0.92,-1.74l-2.86,-1.03l0.2,-0.24l1.5,-0.19l1.83,-0.56l0.83,-0.83l-0.09,-0.62l-1.43,-0.83l-1.1,-0.24l-0.48,-0.52l1.77,0.19l2.26,-0.18l0.24,-0.69l-0.82,-0.75l-1.49,-0.46l-4.19,0.09l-0.42,-1.11l0.47,-1.3l2.39,-1.3l6.29,-1.5l2.69,0.22l2.0,-0.28l2.39,-0.99l1.02,-0.82l3.06,-0.46l2.9,0.82l2.77,3.22l1.41,1.17l0.45,0.04l3.24,-1.89l4.69,0.05l0.91,0.97l0.66,-0.11l0.39,-0.87l0.65,-0.76l1.04,1.03l5.25,-0.19l0.91,-0.2l0.3,-0.33l-0.2,-0.4l-1.32,-0.73l-1.04,-1.7l-0.24,-6.84l-1.52,-2.15l-1.65,-3.07l-0.74,-1.78l0.1,-1.05l3.43,0.27l2.91,-0.67l1.05,0.35l-0.06,1.26l0.44,1.82l1.34,2.03l0.33,0.16l2.38,-0.09l2.65,0.59l3.28,0.09l5.0,1.0l2.17,-0.63l1.94,-1.22l3.74,-0.81l0.55,-0.6l-0.36,-0.63l-2.1,0.17l-1.75,-0.69l-0.18,-0.57l0.94,-2.27l5.65,-2.74l4.18,-0.84l4.36,-1.56l2.29,-1.65l1.52,-2.13l0.98,-0.76l0.11,-0.58l-0.47,-0.63l0.37,-7.74l0.38,-1.32l0.77,-1.06l1.22,-0.85l1.89,-0.95l7.18,-1.35l0.7,-0.34l0.89,1.98l-0.23,0.88l0.24,0.64l1.05,1.27l1.31,1.16l1.4,0.75l1.2,-0.31l1.32,-0.69l0.9,-0.18l0.82,0.69l0.65,1.1l0.2,1.26l0.46,1.27l0.79,0.51l2.14,0.14l1.48,0.36l0.25,0.21l0.52,2.23l0.39,0.51l0.52,0.06l0.75,-0.61l0.36,-0.04l2.15,0.19l1.16,0.24l1.51,1.13l-0.49,1.57l0.74,1.06l-0.07,0.45l-0.63,0.95l-0.03,0.44l0.24,0.46l0.49,0.31l2.77,0.32l2.61,-0.31l1.51,-0.75l0.83,-1.78l1.17,-0.81l0.11,0.06l-0.86,2.81l0.08,0.38l0.61,0.7l0.35,2.16l0.4,0.31l1.75,0.15l1.55,0.99l2.02,0.76l3.1,2.91l0.72,0.08l1.01,-0.31l2.15,-0.17l0.56,0.58l1.0,0.26l0.85,0.63l0.7,0.16l1.01,-0.16l0.74,-0.57l0.67,-0.2l0.66,0.06l1.34,0.7l0.67,-0.05l0.86,0.22l0.9,0.74l0.57,1.33l2.4,2.92l0.83,0.07l1.01,-0.82l0.33,-0.06l1.18,0.37l0.34,0.99l0.66,0.25l0.87,-0.21l1.22,0.23l3.14,-0.67l0.9,1.02l1.32,0.54l5.32,0.9l1.54,0.57l0.05,1.07l-4.07,4.38l-0.61,1.63l-0.4,2.35l-0.78,2.19l-1.23,2.2l-0.44,1.6l0.31,1.21l-0.19,1.55l-0.73,2.24l-0.14,1.82l0.62,1.44l-1.04,0.58l-0.92,1.44l-0.88,0.32l-1.65,0.02l-0.4,-0.65l-0.67,-0.35l-1.31,0.06l-1.26,0.7l-0.92,1.02l-0.06,0.45l0.57,0.78l0.73,0.14l-0.57,0.84l-3.55,3.55l-0.31,0.55l-2.89,1.4l-0.3,0.56l-0.35,2.71l-3.37,2.5l-1.41,3.23l0.11,0.36l0.71,0.7l-0.3,1.32l-0.67,0.58l-0.84,0.37l-0.24,0.37l0.02,1.08l0.28,0.37l0.63,0.17l1.24,-0.12l1.53,-0.78l1.1,-1.08l0.06,-0.49l-0.55,-0.89l1.09,-0.96l1.33,-0.57l1.91,-0.11l2.25,0.34l0.17,1.45l0.39,0.63l-0.55,1.68l0.07,0.37l1.71,1.93l0.78,0.61l0.73,1.16l-0.84,0.75l-1.8,0.89l-0.41,0.81l0.03,0.94l0.36,0.71l0.96,0.63l1.82,2.88l1.7,1.48l-0.43,0.65l-0.47,1.66l-1.22,0.37l-1.74,1.24l-1.95,-0.12l-1.05,0.48l-0.22,0.4l0.1,0.84l0.84,0.96l0.72,1.77l0.97,0.7l2.2,0.58l0.6,1.76l-0.88,0.55l-1.6,2.79l0.02,0.38l0.6,1.15l-0.2,0.75l0.43,1.08l1.01,1.0l4.78,2.37l0.96,0.2l3.04,-0.67l0.22,0.03l0.38,0.96l-1.06,1.72l-1.48,1.7l0.06,1.58l-1.05,-0.07l-0.48,0.65l-2.48,1.14l-4.33,3.67l-1.97,1.05l-0.55,0.79l-0.41,1.18l-1.06,0.92l-0.94,0.45l-2.59,0.52l-2.42,1.03l-1.16,-0.44l-2.87,0.05l-1.9,-1.3l-3.43,-0.8l-1.08,-1.78l-0.31,-0.19l-2.66,-0.07l-0.38,-0.17l-0.12,-1.01l-0.5,-0.38l-2.08,0.32l-0.81,0.45l-0.79,-0.06l-0.3,0.4l-0.61,0.05l-4.45,-1.35l-2.06,-0.39l-0.69,-0.33l-0.61,-0.89l-0.94,-0.61l-2.23,0.45l-1.85,1.74l-7.11,4.41l-1.44,2.0l-1.51,2.72l-0.16,1.53l0.65,4.05l1.42,2.15l-2.56,-0.58l-1.25,0.17l-2.7,0.83l-0.6,0.45l-0.23,0.58l-5.69,-1.28l-2.44,1.08l-0.33,-0.04l-0.81,-1.08l-2.69,-1.15l0.28,-0.4l0.06,-0.56l-0.7,-0.84l-2.87,-0.64l-0.99,0.54l-0.97,-1.3l-0.9,-0.35l-1.09,-0.05l-2.66,-1.07l-3.39,-0.98l-1.12,-0.09l-0.58,0.37l-0.27,0.7l-0.12,1.46l-3.16,-0.18l-1.59,0.11l-0.9,-0.43l-3.18,0.48l-2.06,-1.5l-1.46,-0.72l-0.73,-0.03l-0.76,0.32l-1.03,0.13l-1.28,-0.01l-2.47,-2.29l-2.3,-0.16l-4.56,-1.73l-0.08,-0.34l-0.5,-0.41l-0.46,0.19l-0.66,0.89l-0.39,-0.03l-0.36,-0.23l0.64,-1.0l0.26,-0.92l-0.03,-0.84l-0.21,-0.32l-0.96,-0.5l-2.09,-0.24l-1.08,-0.38l-0.43,-0.23l-0.42,-0.74l2.08,-0.55l2.09,-2.26l1.89,-7.6l1.35,-8.91l0.9,-1.51l1.14,-0.42l0.17,-0.63l-1.03,-1.24l-0.59,-0.03l-0.43,0.42l0.62,-6.75l0.54,-3.01l0.77,-2.65l2.93,2.2l0.74,1.02l1.11,3.82l1.99,1.61l0.49,-0.04l0.08,-0.49l-0.46,-0.85l-0.79,-0.69l-1.22,-4.82l-0.82,-1.5l-1.35,-1.33l-3.86,-2.45l-0.26,-0.35l-0.07,-0.37l0.72,0.02l1.05,0.44l0.54,-0.47l-0.98,-3.09l-0.57,-6.56l-0.32,-0.32l-2.25,-0.27l-1.0,-0.36l-5.23,-2.74l-1.77,-2.81l-1.87,-2.15l-0.38,-0.8l0.02,-0.77l0.93,-1.93l-0.03,-0.4l-0.86,-1.27l-1.37,-0.73l0.46,-0.73l0.44,-0.53l0.88,-0.15l1.32,0.2l1.31,0.58l1.17,0.19l0.44,-0.27l-0.2,-0.48l-3.38,-1.67l-5.06,0.54l-1.01,-0.19l-0.72,-0.28l-0.23,-0.74l0.6,-0.47l0.66,-1.0l-0.06,-0.51l-0.75,-0.7l-1.24,-0.37l-2.76,0.2ZM332.31,508.21l0.62,0.36l1.26,1.45l-0.15,0.48l-1.62,-1.85l-0.11,-0.43Z",
        name: "France"
    },
    BG: {
        path: "M662.06,585.16l0.29,-3.94l0.71,-1.75l-0.05,-0.72l-0.34,-0.45l-0.52,-0.23l-1.48,-3.54l-0.69,-0.61l-1.51,-0.53l-1.29,-0.71l-1.09,-0.94l-1.64,-1.9l0.66,-0.27l1.35,-1.8l0.2,-0.83l-0.23,-0.74l-0.63,-0.58l-0.41,-1.19l0.35,-1.29l0.03,-0.68l-0.31,-0.71l0.24,-0.54l0.99,-0.47l1.96,-0.09l0.3,-0.16l1.23,-1.62l0.8,-0.57l1.21,-1.38l0.5,-1.61l-0.17,-0.4l-1.52,-1.02l-1.32,-1.73l-2.83,-1.63l-0.66,-0.92l-0.35,-1.39l-1.06,-1.73l-0.32,-1.13l-0.05,-1.22l0.63,-2.12l2.3,-1.11l0.53,-2.08l0.71,-0.5l3.99,2.37l-0.39,0.49l-1.07,0.56l-0.68,0.84l-0.16,0.81l0.16,0.75l1.15,0.79l4.1,-0.65l4.13,0.33l5.62,1.1l3.78,0.39l2.81,-0.5l9.82,1.78l4.63,0.26l2.69,-0.69l1.88,-0.94l1.63,-1.76l3.74,-2.22l3.65,-1.25l4.82,-1.02l3.06,-0.33l4.53,2.38l1.97,0.05l1.33,0.33l0.99,0.7l1.96,-0.44l2.27,2.66l2.33,0.82l2.12,0.48l2.5,0.06l-0.28,3.44l-1.08,1.52l-1.9,-0.54l-2.52,0.52l-1.56,2.22l-1.43,1.35l-0.55,2.99l-0.1,4.22l-1.73,0.67l-3.65,3.91l0.11,0.63l2.06,1.07l0.86,0.77l1.53,2.31l2.14,2.56l0.2,0.58l-1.3,-0.19l-0.64,0.09l-0.5,0.38l-1.76,-0.06l-1.68,0.63l-0.63,-0.33l-2.39,-2.11l-0.84,-0.32l-3.33,0.55l-1.81,1.11l-3.72,0.47l-0.65,0.45l-0.8,1.79l-2.11,0.49l-0.45,0.47l-0.23,0.66l-1.29,-0.3l-1.48,0.43l-0.64,1.22l0.24,0.7l0.41,0.45l0.4,1.29l0.14,1.28l-0.19,0.57l-0.77,0.47l-1.8,0.58l-1.96,-0.27l-0.78,0.24l-2.65,0.25l-3.6,0.88l-1.54,-1.11l-1.96,-0.82l-1.99,-0.47l-1.13,0.51l-2.12,-1.23l-0.94,-1.63l-0.73,-0.26l-1.48,0.51l-4.43,-0.06l-0.37,0.27l-0.37,0.84l-1.79,0.08l-1.58,0.68l-1.65,0.41l-2.63,-0.19l-2.7,0.22l-1.27,1.01l-2.52,-0.16Z",
        name: "Bulgaria"
    },
    DK: {
        path: "M554.98,347.03l-0.27,0.17l-2.04,-0.48l-2.42,-1.16l0.34,-2.19l0.45,-0.72l4.46,2.58l0.04,0.75l-0.57,1.04ZM521.14,336.77l-0.22,-0.59l0.73,-0.83l0.32,0.89l-0.83,0.53ZM520.72,332.89l0.03,1.74l-0.25,0.39l-3.02,1.28l-1.05,0.95l-0.5,1.54l0.08,0.36l0.82,0.99l1.45,0.59l0.29,1.42l-0.97,0.73l-3.08,0.9l-0.28,0.33l-0.33,2.23l0.1,1.82l-0.27,2.73l-2.01,0.63l-1.43,-2.33l-0.04,-1.11l-1.16,-4.03l-0.3,-0.26l-2.46,-0.47l-1.06,-0.05l-1.28,0.26l-1.42,-2.13l0.24,-2.45l-0.86,-1.5l-0.07,-1.09l-0.84,-0.87l-0.75,-0.28l-0.25,-0.91l0.53,-0.2l2.37,0.16l1.44,-0.44l2.06,-2.53l0.14,-1.11l1.62,-0.2l0.65,0.66l-0.16,1.38l0.12,1.92l0.25,0.35l1.84,0.62l0.44,-0.26l0.83,-1.98l0.58,-0.6l0.15,-1.49l-0.3,-0.79l-0.37,-0.4l1.92,-1.31l2.33,-1.22l1.27,-0.06l1.35,0.3l1.87,0.72l0.2,0.29l-0.75,1.19l-0.29,0.87l0.58,2.72ZM517.34,347.25l1.62,0.28l1.26,0.71l-1.94,-0.19l-2.4,1.26l-0.36,-0.17l0.32,-0.61l0.82,-0.4l0.68,-0.88ZM504.49,350.08l2.48,1.22l1.72,-0.02l0.86,0.38l0.26,1.85l-0.8,0.33l-1.36,-0.13l-1.59,0.57l-5.33,-2.52l0.22,-2.53l2.27,-0.18l1.27,1.03ZM500.25,304.31l-0.34,0.28l-1.08,-0.37l0.33,-0.36l1.93,-0.37l-0.83,0.82ZM495.95,352.06l-0.81,-1.41l0.87,-0.91l0.6,-1.06l1.48,-1.56l-2.13,4.94ZM468.6,349.15l-0.42,-2.39l-0.69,-1.33l0.85,-0.26l0.28,-0.41l-0.25,-3.27l-0.49,-1.78l-6.52,-3.55l0.92,-7.01l-1.09,-3.15l0.55,-8.59l1.14,-0.12l2.54,0.96l1.02,0.11l0.64,0.76l1.02,0.47l0.49,-0.15l0.69,-1.1l0.23,-1.47l1.93,-1.94l2.11,-1.0l1.52,1.58l0.43,0.13l0.28,-0.35l0.79,-5.97l-0.27,-0.44l-1.96,-0.62l-1.84,0.54l-1.79,2.66l-1.35,2.98l-2.07,0.26l-1.77,0.83l-2.33,-1.48l-0.02,-0.92l0.2,-0.59l1.88,-2.48l2.46,-2.33l2.46,0.02l2.01,-0.79l1.05,-0.09l3.53,0.17l2.07,-0.61l1.73,-1.22l3.52,-4.77l1.89,-1.89l4.04,-0.74l3.41,-2.12l-0.98,1.01l-0.52,1.77l1.22,2.37l-0.24,1.3l0.08,2.5l-1.14,1.36l-1.29,2.84l-0.65,0.68l-0.18,7.31l0.13,0.32l1.37,1.27l1.55,0.73l4.81,0.01l0.84,1.17l-0.84,2.52l-1.27,0.93l-1.68,0.72l-0.87,0.03l-1.4,-1.34l-0.5,-0.05l-0.79,0.52l-0.85,0.91l-1.25,3.97l-0.56,2.54l-0.66,-0.32l-1.22,-0.03l-1.7,0.66l-0.08,0.69l1.36,1.25l-1.45,0.7l-1.2,1.08l-0.53,0.82l-1.54,1.01l-0.95,1.22l-0.07,0.36l1.05,4.17l-0.31,0.95l-1.8,1.6l-0.79,1.57l0.37,0.57l1.54,-0.02l1.37,0.66l0.38,0.38l-0.27,0.76l0.33,1.37l-1.23,-0.49l-3.7,0.92l-0.99,-0.03l-0.97,-0.68l-3.84,-0.98l-2.88,-0.13ZM494.78,336.56l2.16,5.08l-0.38,0.82l0.26,1.43l-0.26,1.07l-1.97,1.37l-2.27,0.06l-2.47,-0.72l-3.42,-1.35l-0.23,-0.63l-0.55,-0.54l-0.9,-2.27l0.02,-2.6l1.55,-0.33l3.85,-1.39l0.72,0.18l1.12,0.77l1.1,0.04l1.67,-1.0ZM494.14,332.71l-0.34,-0.12l-0.07,-0.92l0.3,-1.04l-0.31,-1.07l1.07,1.5l-0.65,1.64ZM490.95,349.9l0.79,0.15l0.49,0.27l-0.27,0.06l-1.01,-0.48ZM483.63,346.94l2.33,1.33l0.69,1.28l-0.87,0.16l-0.75,-0.43l-1.03,-0.14l-0.36,-2.2Z",
        name: "Denmark"
    },
    HR: {
        path: "M540.52,517.06l1.22,0.46l4.0,-0.1l0.92,-0.53l1.59,-2.35l0.23,0.62l0.59,0.68l1.14,1.06l0.98,0.61l1.03,0.14l1.21,-0.48l2.01,0.79l1.9,0.18l1.48,-0.45l0.26,-0.49l-0.74,-1.79l0.05,-0.31l0.75,-0.46l0.19,-0.41l-0.17,-0.47l-0.81,-0.72l2.04,-0.93l2.28,-0.61l0.65,-0.75l0.33,-2.14l-0.13,-1.17l-0.95,-1.16l0.13,-0.69l0.25,-0.33l1.9,-0.54l3.0,-1.24l0.95,-1.14l2.19,-0.05l0.5,-0.65l-0.2,-1.45l0.85,-0.55l1.23,0.15l1.87,0.65l2.36,1.14l1.59,1.24l0.96,1.48l1.26,1.13l1.63,0.83l1.18,1.01l1.03,1.44l1.3,0.76l1.77,0.21l0.88,0.39l0.48,0.77l0.9,0.7l1.44,0.67l2.28,0.38l4.39,0.1l1.06,0.19l2.52,-0.79l1.72,-1.78l0.65,0.1l1.95,-0.35l-0.04,0.3l-0.59,0.4l-0.11,0.55l0.73,1.13l0.64,1.69l-0.34,0.78l0.04,0.38l0.68,0.87l0.9,0.34l-0.43,0.82l0.1,1.43l1.31,1.12l3.14,1.15l0.78,0.85l-2.14,0.07l-0.85,-0.43l-0.57,0.26l-0.1,0.53l-0.62,0.17l-0.29,0.46l0.49,2.66l-0.15,0.57l-0.99,0.12l-0.22,0.72l-0.35,0.03l-1.27,-0.27l-0.47,-0.38l-0.13,-1.02l-0.45,-0.83l-1.46,-1.06l-2.32,-0.14l-2.74,-0.81l-2.1,0.23l-1.83,-0.36l-1.83,1.07l-0.59,-0.01l-1.56,-1.26l-0.68,-0.17l-2.04,0.71l-2.45,-0.72l-0.89,-0.11l-0.73,0.22l-0.97,-0.22l-2.75,-1.73l-0.46,0.02l-1.61,1.24l-3.67,-0.22l-1.05,0.92l-1.24,1.77l-0.76,0.65l-0.57,-0.2l-0.92,-0.7l-1.72,-1.94l-1.03,-0.46l-1.26,-0.1l-0.89,0.22l-0.64,0.48l-0.82,5.66l-0.02,1.56l0.17,0.33l1.91,1.38l2.27,2.38l0.73,0.32l1.41,4.88l1.27,1.68l3.93,3.5l1.7,2.26l5.03,4.33l2.25,0.81l0.18,0.21l0.02,1.54l0.34,0.88l1.53,1.81l2.97,2.53l0.33,0.7l-0.53,0.3l-3.22,-2.75l-2.74,-1.61l-3.2,-3.05l-4.08,-1.17l-2.77,-1.3l-1.91,0.16l-1.87,0.41l-1.68,-0.17l-0.41,-0.57l0.07,-0.58l-0.25,-1.08l-1.64,-1.31l-2.27,-1.27l-2.07,-1.58l-4.2,-4.32l-0.57,-0.94l1.66,-0.36l1.04,-0.01l1.33,0.28l0.45,-0.22l-0.12,-0.48l-2.73,-1.86l-3.85,-3.6l-1.08,-1.61l-0.13,-1.72l0.28,-2.53l-0.73,-2.03l-3.12,-2.53l-1.26,-1.35l-2.23,-0.75l-1.15,0.05l-0.31,0.18l-0.65,1.06l-0.42,1.98l-3.53,5.22l-0.94,-0.0l-1.52,-2.44l-1.51,-1.92l-0.34,-2.0l-1.09,-3.94l0.28,-0.2l0.5,0.51l3.57,0.81l1.03,-0.39l0.69,-0.9ZM587.08,559.57l2.86,1.2l-0.65,-0.13l-2.21,-1.07ZM591.3,561.05l0.02,-0.53l-0.29,-0.29l0.24,-0.07l0.56,0.15l0.73,1.02l-1.27,-0.27ZM599.03,565.39l1.29,0.47l0.05,0.42l-0.83,-0.52l-0.5,-0.37ZM574.06,555.07l0.67,-0.09l1.62,0.23l0.72,0.66l0.71,0.07l-0.87,-0.02l-1.68,-0.33l-1.18,-0.53ZM577.18,558.94l1.74,0.32l1.9,-0.2l1.59,0.28l-1.61,-0.19l-1.63,0.5l-1.35,-0.25l-0.64,-0.46ZM578.24,553.5l-2.04,0.04l-1.75,-0.28l-0.61,-0.34l0.18,-0.53l1.76,0.07l3.03,0.49l0.29,0.22l-0.86,0.32ZM552.42,532.01l1.48,1.22l1.43,1.62l1.21,1.01l-0.28,0.25l-3.01,-2.61l-0.34,-0.88l-0.49,-0.61ZM551.01,528.89l-1.01,-0.23l0.11,-0.55l0.35,0.02l0.55,0.76ZM547.01,523.61l0.87,-0.6l0.52,-0.96l2.47,3.21l-0.92,0.2l-1.06,-1.14l-1.25,-0.15l-0.64,-0.56ZM545.04,522.83l0.07,0.67l-0.21,-0.6l0.14,-0.08ZM545.54,524.84l0.91,0.95l-0.18,1.58l0.2,2.41l0.24,0.81l-1.56,-3.9l-0.09,-0.44l0.42,-0.52l0.06,-0.9Z",
        name: "Croatia"
    },
    DE: {
        path: "M430.54,420.84l0.92,-0.06l2.69,-2.09l0.09,-0.31l-0.19,-0.46l-0.62,-0.26l-0.01,-0.35l1.21,-2.32l0.46,-1.8l-0.14,-0.96l-1.33,-1.91l-0.18,-0.88l-0.45,-0.34l-1.3,-1.73l0.0,-0.39l0.58,-0.41l1.97,-0.79l2.73,0.97l0.9,-0.57l1.27,0.05l3.04,-1.03l0.66,-0.66l0.43,-0.93l-0.14,-0.35l-1.06,-0.91l0.08,-0.38l1.63,-0.89l1.69,-1.29l0.69,-1.23l0.26,-2.25l-0.57,-1.0l-0.78,-0.57l-1.72,0.03l-0.99,-0.35l-0.56,-0.77l0.32,-0.81l-0.14,-0.63l0.26,-0.15l3.48,0.01l0.58,-0.47l0.32,-1.87l0.87,-2.53l0.87,-1.53l0.25,-5.88l-0.69,-1.09l-1.23,-0.85l0.66,-2.97l1.24,-1.67l0.91,-0.42l4.57,-0.29l4.95,0.12l1.86,2.37l-0.66,1.17l0.16,0.55l1.25,0.65l0.93,-0.22l0.23,-0.23l0.88,-2.61l1.28,0.81l0.43,0.53l0.03,2.08l0.36,0.39l0.43,-0.32l0.59,-3.01l-0.42,-2.2l0.28,-1.9l1.0,-1.44l3.67,0.69l4.06,-0.37l1.41,0.7l3.63,3.98l1.33,0.69l1.5,0.2l0.44,-0.29l-0.24,-0.47l-1.99,-0.81l-4.4,-4.83l-1.43,-0.63l-1.94,-0.18l-1.12,-0.42l-0.65,-0.61l-0.17,-0.49l-0.08,-5.08l-0.75,-0.72l-1.14,-0.35l-0.81,0.32l-0.82,0.0l-0.16,-0.68l0.19,-0.5l2.27,-0.51l1.72,-0.78l0.23,-0.34l0.07,-1.33l-3.74,-4.94l-0.12,-1.54l2.65,0.11l3.74,0.96l1.1,0.72l1.31,0.02l3.51,-0.89l0.63,0.37l0.82,0.16l0.3,0.35l1.88,0.47l1.57,1.79l0.07,1.44l-2.01,1.88l-0.12,0.46l0.4,0.25l3.46,-0.28l0.85,1.3l0.43,0.15l1.87,-0.51l4.9,2.22l3.72,-1.12l0.53,1.41l-0.66,1.61l-2.59,1.91l-0.12,0.5l0.59,1.22l1.1,0.48l2.61,-0.23l4.21,1.16l0.93,-0.43l3.21,-2.73l1.19,-0.54l4.21,-0.42l0.28,-0.16l0.73,-1.01l1.74,-1.1l1.1,-1.17l2.52,-2.12l5.8,1.01l1.62,2.36l4.08,2.65l3.73,-0.15l1.18,2.22l0.71,3.25l2.21,1.63l3.05,0.68l0.49,3.01l1.55,4.98l-0.04,1.42l-0.54,1.61l-0.94,1.33l-1.28,0.77l-0.85,1.0l-0.23,1.2l0.11,0.33l1.7,1.75l3.53,2.51l1.27,1.91l-0.62,1.66l-0.19,1.49l0.34,0.97l0.67,0.75l0.76,0.44l0.24,0.54l-0.16,0.92l0.17,0.88l0.57,0.56l-0.95,2.9l-0.95,1.25l-0.07,0.35l0.34,1.21l1.36,1.97l0.13,0.43l-0.35,1.38l0.22,0.65l2.57,1.24l0.28,0.36l1.05,3.13l-0.68,2.68l-0.61,1.5l-1.87,3.2l-0.35,0.04l-1.11,-0.52l0.11,-0.81l-0.9,-0.95l-0.36,-0.87l-0.65,-0.33l-2.72,-0.49l-0.7,0.29l-0.37,0.5l-0.03,0.43l0.63,0.95l0.68,0.47l-4.56,1.61l-1.4,0.72l-2.6,0.78l-2.07,0.25l-0.58,0.38l-0.68,1.25l-0.24,0.14l-0.94,-0.31l-0.99,0.65l-1.05,0.3l-0.67,1.03l-2.06,0.33l-0.98,1.46l-2.31,-0.41l-0.98,0.41l-2.21,0.32l-1.39,0.85l-1.28,1.36l-0.74,1.21l-0.42,-0.72l-1.35,-1.21l-0.72,-0.08l-0.44,0.32l-0.04,1.02l0.52,0.98l0.62,0.67l0.52,1.47l1.03,1.06l2.35,1.46l0.63,0.91l-1.57,2.39l-0.04,0.42l1.52,1.82l1.75,3.09l0.71,0.89l1.87,1.57l1.49,0.06l1.32,1.12l1.64,1.83l1.18,0.82l0.85,0.28l0.58,0.55l0.92,1.52l0.79,0.46l1.3,-0.06l1.73,1.35l1.56,1.65l-0.15,2.44l-0.13,0.43l-0.7,0.66l-0.5,0.23l-2.35,-0.94l-0.41,0.07l-0.49,0.51l-0.66,2.87l-0.38,0.46l-0.61,0.46l-3.2,0.95l-2.56,1.26l-1.17,0.77l-0.83,1.02l-0.01,1.03l2.54,3.11l0.01,1.17l-0.74,1.46l0.24,0.51l1.68,0.35l0.18,0.48l-0.4,2.61l-1.38,-0.46l-0.88,-0.57l-0.23,-0.24l0.13,-0.78l-0.34,-0.56l-1.34,-0.68l-2.77,0.52l-0.64,-0.47l-0.98,-0.38l-2.1,-0.53l-0.57,0.25l-0.13,1.46l-6.22,0.62l-1.94,0.58l-2.46,1.08l-0.43,0.56l-0.87,0.51l-0.93,0.15l-0.52,-0.15l-1.9,0.52l-0.6,-0.06l-1.07,-1.12l-0.58,-1.0l-1.72,-0.06l-1.22,-0.4l-2.32,0.09l-0.53,-0.15l-0.56,0.34l-0.41,2.23l-0.42,0.78l-0.69,0.81l-1.08,0.46l0.2,-0.9l-0.26,-0.48l-1.5,-0.34l0.01,-0.59l-0.68,-0.92l-2.74,-1.4l-1.22,-0.4l-1.53,0.83l-1.64,-0.01l-4.44,-2.42l-4.11,0.18l-0.69,-0.77l-0.81,-0.23l-0.59,0.27l-1.41,-1.07l-0.75,-0.23l-1.16,0.2l-1.14,0.75l-0.48,1.07l0.38,0.69l0.72,0.21l-0.22,0.19l-3.28,-0.22l-1.51,0.54l-2.18,0.2l-3.02,-0.1l-1.57,-0.55l-0.38,-0.91l0.11,-1.58l0.74,-2.31l0.21,-1.68l-0.31,-1.12l0.4,-1.44l1.21,-2.16l0.81,-2.26l0.41,-2.41l0.54,-1.43l4.05,-4.32l0.04,-1.82l-0.29,-0.36l-1.85,-0.66l-5.27,-0.89l-1.02,-0.38l-1.24,-1.21l-0.76,0.01l-2.64,0.66l-1.15,-0.23l-0.94,0.14l-0.44,-1.02l-1.73,-0.51l-0.56,0.1l-0.99,0.81l-0.26,-0.05l-2.04,-2.62l-0.66,-1.44l-1.19,-0.93l-1.22,-0.27l0.41,-1.96l0.35,-0.73l1.11,-1.26l0.04,-1.7l-0.32,-0.35l-2.1,-0.66l-0.85,-0.55l-1.51,-1.71l-0.34,-0.93l-0.02,-0.94l0.82,-2.22l2.46,-1.42l0.19,-0.42l-0.31,-2.35l-0.75,-0.87l-1.3,-0.32l-0.2,-0.25l0.7,-0.85l-0.06,-0.62l-1.03,-0.68l-0.56,-0.8l-1.49,-0.97l0.7,-2.62l-0.06,-0.33l-0.69,-0.92l-1.52,-0.63l-0.25,-0.31ZM538.5,364.74l4.43,2.81l-0.02,0.85l-1.71,0.2l-1.36,-0.24l-0.22,-0.77l0.24,-0.97l-0.09,-0.36l-1.21,-1.13l-0.06,-0.38ZM536.24,359.59l0.19,1.05l-1.4,-0.89l-1.53,0.01l-0.35,0.21l-0.81,1.46l-0.34,0.03l-2.16,-1.36l-0.36,-1.05l0.29,-2.61l0.72,-0.83l0.1,-0.89l1.09,-0.91l0.75,-0.03l0.34,0.79l0.56,0.64l2.04,0.8l0.23,0.34l-0.77,0.76l-0.35,0.83l0.47,0.93l1.31,0.71ZM503.18,358.27l-1.43,0.03l-0.68,-0.64l-0.5,-0.17l0.48,-0.55l1.69,0.5l0.45,0.83ZM463.5,350.42l0.05,-0.86l0.24,-0.46l0.12,0.59l0.37,0.32l0.99,0.04l-1.45,0.14l-0.32,0.22ZM466.66,353.0l-0.22,0.19l-1.03,-0.04l-0.32,-0.19l0.93,-0.31l0.57,0.14l0.06,0.21Z",
        name: "Germany"
    },
    BA: {
        path: "M580.15,520.99l2.69,1.66l1.16,0.26l0.79,-0.22l0.76,0.1l2.52,0.74l0.74,-0.07l1.34,-0.63l2.1,1.42l1.04,-0.04l1.56,-1.0l1.73,0.34l2.04,-0.24l2.68,0.79l2.34,0.15l0.97,0.73l0.36,0.66l0.27,1.25l0.82,0.61l1.42,0.3l1.48,-0.1l1.29,-0.48l1.3,-0.22l1.2,0.42l-0.24,1.29l-0.55,1.34l-1.93,2.88l-0.28,0.84l-0.18,2.19l0.51,1.08l1.24,0.5l1.38,0.86l3.17,2.88l-0.23,0.39l-1.2,0.13l-2.07,-0.23l-0.97,0.57l-0.08,0.45l0.23,0.46l1.43,1.62l1.61,2.23l0.08,0.83l-0.17,0.65l-0.21,0.29l-1.06,-0.49l-0.87,0.03l-0.84,0.24l-0.68,0.71l-1.4,0.25l-1.35,-0.37l-0.66,0.34l-0.25,0.99l1.25,2.21l-0.08,0.64l-0.78,-0.82l-0.66,-0.16l-0.82,0.11l-2.53,2.08l-0.73,1.8l0.01,1.34l-1.64,0.26l-0.54,0.41l-0.22,0.48l0.27,3.36l1.05,1.76l0.02,0.34l-1.02,0.97l-1.68,-0.57l-2.39,-1.46l-3.77,-2.49l-0.73,-1.04l-0.84,-0.22l-1.03,0.25l-0.31,-0.19l0.47,-0.54l-0.1,-0.84l-0.43,-0.7l-2.99,-2.55l-1.42,-1.68l-0.19,-0.5l-0.12,-1.87l-0.52,-0.52l-2.14,-0.74l-4.93,-4.25l-1.71,-2.26l-3.91,-3.48l-1.1,-1.42l-1.12,-4.23l-0.39,-0.85l-0.87,-0.45l-2.23,-2.34l-1.83,-1.33l0.67,-6.52l0.28,-0.24l0.73,-0.18l0.89,0.07l0.74,0.3l1.74,1.95l1.0,0.77l0.96,0.36l0.39,-0.07l0.97,-0.83l1.24,-1.78l0.88,-0.77l3.36,0.32l1.8,-1.25Z",
        name: "Bosnia and Herzegovina"
    },
    HU: {
        path: "M574.1,479.74l1.22,-0.94l0.33,-0.03l0.63,0.16l1.3,0.87l0.65,0.19l0.72,-0.26l3.25,-0.23l0.32,-0.51l-0.46,-2.16l0.08,-0.38l0.54,-0.63l0.13,-0.94l0.82,-0.63l1.72,0.33l2.14,1.72l2.13,1.37l1.92,0.75l5.23,0.12l7.85,-0.41l0.31,-0.18l0.73,-1.14l0.01,-0.42l-0.34,-0.59l0.02,-0.6l0.46,-0.86l1.48,-0.78l4.68,-0.38l2.8,-0.66l0.65,-1.04l0.77,-0.75l0.61,-0.13l2.4,1.14l1.47,0.41l5.93,-2.86l2.25,-4.04l1.81,-0.35l2.94,0.07l2.8,0.69l1.75,-0.08l2.56,-0.74l0.75,0.02l1.4,0.91l1.11,1.58l1.03,0.99l0.79,0.23l4.84,-0.96l0.35,-0.21l1.17,-0.1l0.81,1.93l0.52,0.64l2.34,0.93l0.97,1.3l1.37,0.54l1.12,-0.08l0.79,0.7l0.31,1.75l-2.4,2.19l-0.83,0.51l-0.46,0.09l-1.05,-0.21l-2.92,0.86l-2.41,2.67l-1.56,1.2l-0.17,1.98l-1.62,1.48l-1.18,2.9l-1.73,1.75l-0.13,1.34l-2.12,2.95l-0.24,0.62l0.18,0.84l-2.28,1.58l-0.95,2.12l0.13,1.13l-0.94,0.47l-0.53,1.42l-1.26,0.87l-2.62,-0.28l-1.17,0.24l-0.9,1.34l-0.99,0.54l-1.52,-0.54l-3.08,0.58l-0.47,0.31l-1.03,-0.47l-3.08,-0.33l-1.29,0.26l-3.03,-0.38l-1.28,0.24l-1.63,1.6l-1.88,1.0l-0.83,0.27l-0.67,-0.03l-1.07,-0.47l-0.49,0.29l-0.55,0.69l-1.05,0.42l-2.71,0.54l-0.7,-0.13l-0.37,0.13l-1.68,1.79l-2.19,0.68l-0.9,-0.18l-4.42,-0.1l-2.04,-0.33l-1.28,-0.58l-0.81,-0.62l-0.59,-0.87l-1.18,-0.5l-1.58,-0.16l-1.15,-0.67l-0.95,-1.37l-1.34,-1.13l-1.54,-0.77l-1.18,-1.05l-0.99,-1.51l-1.75,-1.36l-3.01,-1.38l-1.73,-2.2l-0.02,-0.77l-0.66,-0.74l-0.33,-1.64l-0.4,-0.66l-0.32,-0.18l-1.57,-0.06l1.35,-1.16l0.93,-0.45l1.33,0.05l0.62,-0.39l0.55,-2.06l-0.16,-0.54l-0.64,-0.29l-0.2,-0.9l0.58,-1.02l-0.33,-1.71l0.8,-0.09l1.52,-0.76l0.87,-1.68l-0.48,-1.59l-0.26,-0.24l-2.35,-0.68Z",
        name: "Hungary"
    },
    JO: {
        path: "M831.52,741.12l0.58,-3.53l0.44,-1.58l0.83,-1.6l-0.37,-3.27l0.04,-1.71l0.5,-2.13l-0.27,-2.34l0.23,-3.33l0.4,-0.65l1.56,-0.66l0.59,-0.08l1.29,0.28l0.72,0.61l1.37,1.97l2.34,0.73l2.13,1.65l1.5,0.4l4.87,0.61l26.07,-15.69l3.6,12.43l-0.66,0.2l-0.27,0.51l0.81,2.52l0.49,0.26l2.43,-0.61l0.4,1.04l-3.75,3.33l-0.39,0.16l-27.16,7.55l-0.18,0.66l7.05,7.23l6.45,7.19l-4.15,2.37l-2.33,4.88l-9.58,1.9l-0.86,0.58l-3.16,5.04l-5.4,4.25l-0.55,0.11l-13.95,-2.33l0.34,-1.53l-0.11,-1.11l1.27,-6.18l0.98,-2.39l0.03,-4.28l4.02,-10.51l-0.48,-1.65l0.27,-1.3Z",
        name: "Jordan"
    },
    DZ: {
        path: "M466.68,655.77l0.2,0.96l-1.89,1.01l-1.15,2.09l-1.8,1.3l-0.48,0.75l0.24,0.71l1.18,0.57l0.48,1.05l-1.38,7.63l0.01,1.14l0.98,2.38l0.14,1.02l-0.17,2.72l1.02,3.04l-1.02,1.68l-0.52,1.71l-0.43,3.76l-1.55,2.44l-3.79,2.29l-1.33,2.46l-2.56,1.92l-0.62,0.75l-0.33,1.78l0.06,2.27l0.5,1.91l2.35,5.34l0.37,1.56l0.53,0.63l4.21,2.17l0.43,0.43l1.29,1.88l1.24,3.4l0.55,2.52l9.25,6.57l0.26,0.37l6.35,27.2l-2.58,1.56l-0.13,0.55l3.2,4.74l1.25,2.33l1.41,3.9l1.0,3.71l0.29,2.12l-0.36,6.01l0.62,7.8l-250.75,0.0l0.0,-8.71l0.21,-1.15l1.33,-0.71l3.96,-3.12l3.6,-2.24l4.25,-3.2l0.73,-0.34l1.98,-0.3l3.41,-2.71l1.14,-0.61l3.73,0.27l2.99,0.49l0.68,-0.16l1.26,-1.34l0.32,-2.21l3.51,0.13l2.92,-0.31l3.15,-0.57l4.43,-1.3l2.22,-1.57l1.59,-1.64l2.87,-4.42l2.45,-1.23l6.17,-2.18l4.58,-3.19l3.74,-0.45l0.72,-0.41l0.66,-0.82l-0.08,-1.26l-0.77,-0.77l-1.93,-1.01l0.22,-1.48l0.36,-0.93l-0.1,-1.13l-0.72,-1.93l0.22,-1.11l1.41,-0.46l1.34,0.19l2.32,-0.29l5.73,-1.95l0.65,-0.87l0.73,-2.38l0.67,-0.35l5.55,-0.82l15.9,0.62l0.83,-0.3l0.25,-0.37l-0.02,-0.98l-0.46,-1.49l0.23,-0.78l2.27,-1.88l0.11,-0.49l-0.72,-1.4l-3.29,-2.3l-1.25,-1.16l-0.75,-1.29l-0.59,-3.03l-0.99,-1.63l-0.68,-1.92l0.63,-3.67l-0.98,-2.46l-0.14,-0.91l0.29,-3.17l-0.19,-2.84l-1.11,-2.88l0.75,-1.62l-0.21,-0.67l-1.0,-0.89l-0.33,-0.56l0.7,-1.54l-0.0,-0.67l-0.16,-0.28l-4.53,-3.34l-0.72,-0.81l-0.16,-0.47l2.11,0.23l1.5,-0.14l3.37,-1.4l2.62,-1.87l2.1,-1.03l1.75,-2.0l1.55,-1.24l2.27,-1.36l6.57,-2.94l0.88,-0.02l2.29,0.68l2.12,-0.3l1.4,-1.16l1.36,-2.44l2.09,-1.47l2.71,-1.52l3.72,-1.46l2.46,-1.36l3.79,-1.15l9.69,-0.74l4.98,-0.66l3.36,0.15l3.64,-2.19l1.61,-0.67l7.35,-0.16l3.58,-1.57l13.13,-0.0l1.53,0.5l1.54,0.82l2.81,2.08l1.57,0.45l1.83,-0.45l4.04,-1.91l4.64,-1.02l2.5,-1.15l1.16,-1.7l1.77,-0.51l1.23,1.22l4.77,1.3l3.08,-0.36l1.35,-0.41l0.27,-0.48l-0.32,-1.35l2.46,0.41l2.29,0.89l2.45,1.83l1.76,0.44l3.1,-0.83l5.75,-0.4Z",
        name: "Algeria"
    },
    _1: {
        path: "M795.55,683.21l1.17,-0.26l0.28,-0.24l0.63,-1.5l0.18,-1.41l4.61,0.68l2.05,0.09l2.09,-0.28l6.24,-1.86l1.81,-1.13l3.1,-1.32l-6.89,4.53l-0.62,1.84l0.66,1.4l-0.75,-0.24l-0.36,0.09l-0.89,0.63l-1.5,0.43l-1.88,-0.3l-0.56,0.28l-0.14,-1.09l-0.43,-0.61l-0.67,-0.45l-1.97,0.03l-0.73,-0.23l-1.8,0.42l-2.09,0.87l-1.53,-0.37Z",
        name: "Northern Cyprus"
    },
    JE: {
        path: "M322.87,452.86l-0.06,0.38l-0.56,-0.27l-1.49,0.09l0.08,-0.64l1.42,0.15l0.61,0.3Z",
        name: "Jersey"
    },
    FI: {
        path: "M642.77,218.25l0.76,-0.02l0.36,-0.26l0.17,-0.8l-0.71,-1.51l-0.11,-0.8l-2.19,-4.45l-1.66,-1.51l1.26,-4.66l-0.13,-1.29l-0.44,-1.65l-2.0,-1.41l-0.81,-4.2l0.5,-2.29l0.65,-0.99l3.52,-3.35l0.3,-1.68l2.07,-0.11l0.31,-0.63l-1.08,-1.53l-0.27,-1.43l3.0,-0.62l1.43,0.56l3.05,-0.72l2.8,-1.45l0.21,-0.38l-0.05,-0.75l-0.91,-1.85l0.81,0.19l0.43,-0.16l0.0,-0.46l-0.36,-0.6l0.63,0.17l0.4,-0.12l1.76,-1.91l0.16,-1.41l2.91,-0.77l3.47,-2.96l3.21,-1.64l3.23,-2.91l1.29,-0.13l0.34,-0.26l0.7,-1.93l2.7,-2.58l0.99,-0.5l1.28,-2.37l3.5,-2.87l2.18,-3.57l1.19,-1.25l0.4,-1.27l1.08,-0.09l1.37,-1.04l2.49,-0.66l2.47,0.18l1.24,0.48l1.0,-0.15l0.34,-0.43l-0.1,-1.23l-0.59,-0.75l0.3,-0.38l1.28,-0.52l0.25,-0.42l-0.14,-1.23l-0.33,-0.84l-1.07,-0.98l0.51,-1.97l0.15,-2.48l0.54,-2.78l-0.1,-0.35l-1.56,-1.58l-5.46,-2.54l-1.15,0.05l-1.0,-0.26l-1.07,-1.64l0.59,-2.18l-0.41,-0.44l-0.76,0.14l-0.76,0.77l-1.54,0.82l-2.1,-0.66l-0.96,0.1l-1.35,-3.86l-1.94,-3.6l-2.2,-1.08l-0.31,-0.41l-0.6,-3.55l0.1,-1.33l0.2,-0.66l0.88,-0.58l1.4,-1.77l0.4,-2.96l0.56,-1.45l0.63,-0.74l0.08,-0.36l-0.7,-1.67l-3.55,-4.29l-0.46,-1.32l-0.24,-1.18l0.04,-1.0l0.33,-0.61l1.33,-0.93l0.33,-0.58l-0.54,-2.44l-0.24,-0.27l-1.09,-0.42l-2.46,-0.23l0.14,-1.03l0.92,-1.59l0.12,-0.74l-0.56,-2.01l-0.16,-2.25l0.17,-1.62l1.64,-1.24l0.23,-0.75l-0.18,-0.4l-2.2,-1.44l-1.54,-1.59l-0.47,-0.92l-0.32,-0.22l-1.6,-0.13l-1.17,-2.76l-3.36,-2.61l-1.06,-0.59l-5.7,-1.72l-2.28,-0.33l-2.6,-0.97l-5.19,-3.08l-1.95,-0.89l-0.62,-0.81l-2.18,-1.47l-1.1,-1.02l-3.42,-1.76l-0.16,-1.37l-0.37,-0.48l-3.13,-1.15l0.2,-0.21l2.66,-0.04l2.65,0.65l0.68,-0.47l0.33,-0.96l-0.97,-2.39l0.11,-0.4l0.9,-0.68l1.55,-0.59l4.54,0.04l9.08,9.74l1.07,1.8l0.37,1.29l0.39,0.29l1.19,-0.01l7.61,1.06l1.17,0.77l2.44,-0.15l5.27,-1.54l2.05,-2.15l1.69,0.15l4.54,2.05l4.94,1.36l1.47,1.13l2.14,0.27l2.15,-1.3l1.15,-2.92l0.96,-1.23l1.35,-0.9l3.04,-0.64l1.03,-0.82l1.38,-1.69l0.36,-2.25l-0.26,-3.73l0.23,-1.11l1.13,-2.04l1.5,-5.3l0.64,-1.46l0.73,-0.83l1.14,-0.57l2.06,-1.62l2.93,-3.19l0.65,-0.22l2.04,-0.16l2.57,0.12l2.75,0.52l1.18,-0.33l5.21,-2.98l2.0,-0.52l1.71,0.07l2.06,2.1l3.01,2.43l1.98,1.21l5.33,2.23l4.51,1.41l2.41,4.42l-1.13,1.66l-2.89,2.52l-2.42,2.65l-0.24,1.85l0.8,1.39l0.57,0.55l-4.78,2.02l-2.03,0.56l-0.22,0.62l0.84,0.92l3.36,0.16l0.61,0.39l0.04,0.39l-0.3,0.87l-3.67,5.48l-0.16,1.52l2.92,7.03l0.24,0.22l8.82,2.95l2.4,3.04l4.03,4.07l2.07,1.48l0.06,0.23l-0.59,2.59l-4.94,5.07l-4.47,5.24l-2.13,2.89l-0.36,2.03l0.45,1.23l2.7,3.48l2.31,3.68l1.06,2.05l0.65,1.92l1.09,1.82l3.13,4.14l2.47,6.75l0.12,1.92l-2.63,0.33l-2.15,0.65l-0.35,0.42l0.09,0.48l1.16,1.03l-1.13,2.02l-0.17,2.9l-1.24,1.48l-0.21,0.7l0.17,0.51l0.45,0.36l2.25,0.39l0.09,0.91l-0.16,0.59l-1.12,0.56l-1.47,1.1l-0.29,0.83l0.02,0.9l0.51,1.43l0.87,1.45l1.19,1.01l3.95,0.91l0.37,0.52l0.12,1.59l-1.73,1.8l-0.07,1.16l0.76,1.8l1.08,1.86l3.8,1.8l1.2,0.91l0.47,1.84l-0.02,1.31l-0.27,1.1l-3.85,4.54l-2.72,1.17l-0.35,0.41l0.03,0.48l0.92,1.04l4.93,3.98l7.58,4.38l2.72,1.92l2.09,2.95l2.32,2.38l0.3,0.58l-0.02,0.57l-1.26,2.24l-2.05,4.4l-1.3,1.77l-3.37,3.29l-5.05,4.15l-3.52,3.41l-8.33,8.7l-2.68,2.11l-3.26,3.24l-6.92,4.7l-1.08,1.18l-3.43,2.16l-8.21,7.34l-1.68,0.75l-1.87,0.16l-0.84,0.47l-2.79,-1.41l-0.76,-0.13l-1.89,0.43l-1.61,1.04l-3.07,0.33l-2.14,0.65l-0.1,-0.57l0.38,-1.37l0.65,-0.96l0.13,-0.85l-0.45,-0.44l-0.5,0.07l-1.28,1.66l-0.55,1.73l-0.89,0.73l-2.1,0.32l-2.16,-1.32l-1.3,-0.04l-0.33,0.63l0.66,0.97l0.39,1.08l-1.03,-0.03l-1.36,0.65l-1.16,0.92l-0.21,0.0l-0.68,-1.14l-0.5,-0.16l-1.47,0.63l-1.24,0.82l-2.64,0.33l-1.46,1.06l-2.56,0.71l-1.53,-0.0l-3.37,0.9l-1.27,1.45l-0.76,0.39l-1.42,-0.39l-8.4,1.55l-3.69,-0.35l-1.89,1.25l-1.9,1.58l-1.98,0.53l0.12,-0.35l1.47,-0.93l0.99,-1.21l0.22,-1.21l-0.19,-0.4l-0.83,-0.45l-0.8,-0.11l-1.02,-0.91l-1.08,-2.19l-0.28,-0.21l-0.61,-0.12l-0.44,0.21l-0.34,0.7l-0.33,1.65l-0.77,0.71l-1.25,0.53l-2.16,-0.02l-0.21,-0.77l0.42,-1.08l-0.25,-0.53l0.12,-0.29l1.1,-0.12l0.67,-0.88l-0.03,-0.56l-0.34,-0.38l-0.65,-0.1l0.93,-1.95l-0.28,-0.49l-1.01,0.06l-3.41,-0.48l-4.34,-2.0l-0.96,-0.12l-0.58,-1.58l-0.46,-0.25l-1.2,0.29l-1.32,0.91l-2.1,-1.16l-0.25,-0.6l-0.09,-2.63l-0.59,-4.08l0.21,-1.74l0.94,-1.32l0.42,-0.97l0.49,-2.37l0.11,-2.75l-0.24,-1.14l0.43,0.0l0.38,-0.53l-0.17,-0.52l-0.59,-0.68ZM687.44,144.29l-1.79,0.65l-1.22,-0.34l-0.02,-0.9l0.76,-0.51l1.66,-0.25l1.7,0.47l-0.56,0.21l-0.52,0.68ZM651.46,242.91l1.58,0.43l0.67,-0.11l0.37,0.48l-0.95,0.46l-0.22,0.31l-0.1,0.84l0.63,0.93l-0.71,-0.0l-0.48,-0.46l-0.37,-0.89l-1.17,-0.85l0.4,-0.98l0.37,-0.17ZM646.99,242.06l0.34,-0.58l-0.11,-0.24l0.48,0.41l-0.15,0.7l0.64,0.51l-1.2,-0.79ZM646.46,246.89l-1.07,0.55l-0.05,-0.02l0.07,-0.67l0.56,-0.37l0.66,-0.03l-0.18,0.54ZM643.72,247.48l-0.79,0.13l-0.32,-0.25l0.67,-0.43l0.51,0.04l-0.07,0.51ZM641.16,239.43l-0.06,0.33l-1.37,0.07l-0.55,-0.69l-0.31,-1.48l0.11,-0.07l0.39,0.64l1.81,1.2ZM638.04,182.53l0.17,0.59l0.43,0.26l0.96,-0.17l0.89,-0.6l0.3,0.13l-0.03,0.32l-0.56,-0.04l-0.83,0.92l-0.38,0.11l-1.18,-0.84l-0.53,-1.0l0.8,-0.0l-0.05,0.32Z",
        name: "Finland"
    },
    BY: {
        path: "M670.47,410.28l-0.13,-0.27l0.06,-1.46l1.09,-1.98l-0.23,-1.17l0.56,-1.59l-0.0,-1.53l-0.91,-1.32l-1.27,-0.65l-0.66,-0.57l-3.4,-1.52l-0.13,-0.47l3.0,-3.66l0.86,-0.6l4.91,-2.04l0.89,-0.8l0.33,-2.4l-0.4,-3.89l-0.39,-1.6l-0.97,-2.99l-2.57,-6.03l-1.36,-5.56l2.79,0.28l1.97,-0.44l1.86,0.07l2.26,-0.33l0.59,0.52l1.39,0.52l4.06,-1.59l1.9,0.09l0.64,-0.62l0.52,-2.25l0.36,-0.3l2.44,0.18l1.03,-0.51l0.87,-1.04l1.25,-0.61l1.3,-0.06l0.98,-0.62l0.29,0.25l0.21,0.66l-0.32,0.59l0.01,0.4l0.36,0.45l1.01,0.4l1.46,-0.01l1.05,-0.33l0.49,-0.81l-0.02,-0.89l-0.33,-0.88l-0.8,-0.73l-1.79,-0.34l0.92,-2.21l1.46,-2.06l-0.02,-2.89l0.75,-2.06l0.97,-1.47l1.27,-0.47l1.71,-0.28l1.28,-0.84l0.66,-1.01l0.45,-1.32l0.33,-0.17l4.09,0.17l0.38,-0.23l0.88,-1.63l1.39,-0.94l0.08,-0.49l-0.47,-0.58l-3.51,-0.46l-0.23,-0.2l1.4,-3.61l0.38,-2.21l2.08,-0.33l0.79,-0.32l1.83,-1.99l1.15,-0.29l3.4,0.5l3.66,0.1l0.32,-0.14l0.92,-2.18l3.35,-3.06l1.75,-1.04l1.25,-0.18l1.76,1.58l0.64,0.16l1.24,-0.67l2.07,-0.07l0.81,0.47l1.37,1.98l0.92,0.38l3.4,-1.49l0.62,0.01l2.58,0.99l1.12,0.5l0.17,0.31l-0.57,2.22l0.06,0.34l0.81,1.13l1.01,0.84l0.47,0.03l2.62,-1.56l0.87,-0.04l1.08,-0.47l0.83,-0.72l0.59,-0.19l1.42,0.16l2.51,-0.16l2.83,1.04l2.24,2.21l1.47,0.96l1.07,0.4l0.96,0.01l0.22,0.33l-0.08,3.01l-1.07,1.29l-0.11,1.14l1.99,2.8l0.22,1.35l-1.98,2.56l-0.54,2.11l0.11,0.59l2.68,1.88l2.12,1.17l-0.92,1.65l-0.14,0.59l0.22,0.44l1.4,0.68l0.74,1.02l0.77,1.92l1.42,1.79l5.35,2.69l0.34,0.34l-0.04,1.47l-0.94,2.24l0.22,0.55l1.06,0.37l2.3,-0.09l2.73,0.28l3.1,1.5l-0.32,1.27l0.64,1.39l2.97,1.9l0.19,0.36l0.0,1.08l-1.48,0.41l-1.53,0.8l-0.7,1.17l-2.27,1.44l-1.38,0.64l-3.72,-0.26l-0.83,-0.63l-0.6,-0.8l-1.18,-0.32l-3.43,0.09l-0.75,0.46l-0.31,0.81l-1.39,2.18l0.04,0.52l3.71,3.98l0.32,0.56l-0.61,1.04l0.17,1.42l0.95,1.23l-0.22,0.34l-0.11,4.04l0.39,0.72l0.71,0.49l0.49,0.67l0.82,1.53l-5.16,-0.05l-1.77,0.96l-1.99,-0.42l-1.46,0.63l-3.05,2.73l-1.3,1.6l-1.83,3.95l0.37,1.45l0.56,1.08l0.34,1.84l-0.66,0.63l-0.32,0.69l-0.92,-0.12l-1.36,-0.79l-0.44,-1.39l-2.23,-1.49l-1.42,-0.07l-2.09,0.43l-4.78,0.42l-2.69,0.89l-0.44,-0.37l-1.68,-3.01l-0.52,-0.66l-0.8,-0.34l-0.77,0.12l-1.1,0.93l-1.76,0.6l-0.87,0.66l-0.7,1.15l-0.62,-0.26l-0.83,-1.64l-0.91,-0.36l-1.57,-0.05l-3.18,-0.78l-0.9,0.17l-0.78,0.59l-0.75,0.08l-1.99,-0.57l-0.33,0.05l-0.52,0.39l-1.07,1.55l-0.23,0.03l0.15,-1.24l-0.24,-0.41l-1.34,-0.56l-2.02,-0.08l-1.97,0.17l-2.18,-2.8l-1.02,-0.16l-1.61,0.12l-2.38,-0.3l-4.26,-0.76l-0.91,-0.58l-1.7,-0.19l-4.61,-1.05l-1.94,-0.19l-7.05,-0.25l-2.76,0.13l-2.74,0.57l-5.02,0.29l-1.84,0.28l-0.74,0.64l-0.63,1.19l-2.0,1.92l-1.94,1.27l-1.28,-0.61l-2.2,-0.32l-1.06,0.29l-0.52,0.33l-0.18,0.37Z",
        name: "Belarus"
    },
    FO: {
        path: "M263.24,203.54l-0.39,0.92l-0.69,-0.21l-0.02,-1.73l1.1,1.03ZM260.24,213.24l-2.12,-1.39l-0.34,-0.59l2.22,0.79l0.37,0.54l-0.11,0.65ZM259.07,209.25l-0.6,-0.28l-2.67,-2.36l-1.87,-3.49l2.24,-0.5l1.97,0.99l2.09,0.72l-0.25,2.13l-0.93,-0.7l-0.9,-0.24l-0.43,0.2l-0.23,0.42l-0.01,0.73l1.6,2.39ZM257.22,217.52l1.57,0.48l0.05,0.71l0.46,0.75l0.04,0.71l-1.8,-1.85l-0.31,-0.8ZM252.95,206.27l1.28,0.96l-0.31,0.25l-0.69,0.12l-0.92,-0.12l-1.48,-0.53l-0.27,-0.64l1.89,-0.23l0.51,0.19Z",
        name: "Faroe Islands"
    },
    PS: {
        path: "M825.41,733.18l0.24,-1.0l-0.44,-3.65l1.39,-4.27l1.49,-0.96l2.08,0.37l0.47,0.8l1.11,0.74l0.77,0.12l0.23,1.98l-0.5,2.05l-0.04,1.83l0.36,3.17l-0.78,1.38l-0.61,2.57l-0.41,0.02l-1.77,0.89l-2.31,0.82l-2.56,0.12l0.96,-3.05l1.02,-0.96l2.18,-1.1l0.26,-0.46l-0.26,-0.66l-1.05,-0.65l-1.0,-0.32l-0.82,0.19Z",
        name: "West Bank"
    },
    LB: {
        path: "M833.54,711.49l-0.47,-0.12l-0.63,0.32l-0.7,2.08l-0.87,0.52l-3.3,-0.17l0.95,-2.04l0.65,-2.01l1.15,-1.71l2.36,-5.7l1.36,-2.3l0.53,-3.34l2.01,-2.74l1.51,-0.81l0.87,-0.91l0.09,-1.12l3.51,-0.06l0.61,-0.64l0.8,0.21l0.33,0.34l-1.19,1.23l-0.06,0.59l0.35,0.31l1.54,0.46l0.53,0.41l1.0,2.95l-0.58,1.13l-0.93,1.05l-1.39,0.72l-0.91,0.95l-0.27,0.51l0.02,0.71l0.47,0.45l-2.72,0.06l-1.67,1.33l-0.32,0.45l-0.32,1.32l0.4,0.68l0.72,0.44l-0.7,0.41l-0.56,0.52l-0.23,0.59l-1.64,1.38l-2.27,1.56Z",
        name: "Lebanon"
    },
    PT: {
        path: "M226.07,631.38l0.09,-1.3l-0.52,-1.53l0.61,-0.3l1.28,-0.22l1.05,-0.88l0.66,-1.19l-0.29,-1.44l0.72,-1.29l1.9,-1.22l0.16,-0.48l-0.45,-0.25l-1.03,0.19l-1.33,0.85l-1.97,2.99l-0.57,1.34l-2.69,0.63l-1.22,-0.39l0.0,-1.58l0.59,-1.75l0.23,-2.35l0.81,-2.11l-0.23,-1.47l0.56,-0.63l0.99,-0.63l1.45,-1.94l4.21,-9.14l-0.16,-0.87l-0.43,-0.47l0.16,-1.05l1.34,-5.47l0.56,-0.76l0.66,-1.76l0.34,-5.43l-0.23,-1.23l-0.85,-2.07l-0.9,-4.39l-0.06,-1.28l0.63,-0.63l-0.25,-0.68l-1.03,-0.09l-0.39,-0.67l0.1,-0.85l1.28,-1.65l1.22,-1.05l1.86,-0.94l3.64,-1.08l0.35,0.03l0.97,1.44l-1.0,1.31l-0.22,0.63l0.7,1.49l0.68,0.39l0.93,-0.07l2.18,-1.03l0.39,0.15l2.67,-0.28l2.4,0.83l1.69,0.04l1.83,-0.5l0.91,-0.55l0.37,-1.15l0.26,-0.16l1.58,0.47l2.24,0.09l0.56,-0.29l1.51,0.44l1.18,-0.08l0.37,0.3l0.18,0.47l-0.02,2.66l0.26,0.7l0.3,0.23l2.05,0.12l1.01,0.33l0.74,0.55l0.28,0.69l-0.88,1.17l-1.46,1.22l-2.17,1.14l-1.76,1.49l-1.17,1.72l-1.44,0.74l-0.44,0.39l-0.28,0.62l0.95,2.37l0.29,1.56l0.23,1.9l-0.23,2.7l-0.22,0.76l0.52,1.45l-2.57,1.96l-0.37,0.82l0.17,0.84l1.45,1.32l0.19,0.38l-0.18,1.19l-0.84,2.14l-0.78,1.27l-0.86,0.37l-4.59,0.03l-1.11,0.3l-0.24,0.59l1.23,2.01l1.47,1.18l0.41,1.96l1.81,3.22l1.87,0.6l0.43,0.57l-0.09,0.91l-0.49,1.13l-1.01,1.18l-1.24,0.86l-0.9,0.94l-0.94,4.28l3.28,4.65l0.37,0.16l1.45,-0.17l-0.66,1.6l-2.21,0.66l-1.45,1.57l-1.2,1.91l-0.94,1.02l-0.83,2.42l1.24,5.98l-0.9,0.16l-4.53,2.49l-1.25,0.0l-2.72,-1.12l-4.69,-0.36l-1.51,-0.33l-2.07,0.72l-1.41,-0.02l-1.27,0.89l-0.2,-0.06l2.33,-5.99l-0.06,-2.49l0.35,-2.3l-0.42,-2.18l-0.73,-1.34l1.01,-3.52l-0.12,-1.83l-0.72,-1.81l2.21,0.27l0.41,-0.22l-0.07,-0.46l-0.89,-0.92l-1.23,-0.68l-1.65,0.12l-3.49,1.12ZM117.56,718.32l1.56,0.67l1.81,-0.33l2.3,1.05l-1.16,1.04l-2.21,-0.2l-1.95,-0.84l-0.62,-0.56l-0.11,-0.32l0.37,-0.5ZM10.64,654.82l-1.1,0.02l-0.19,-0.31l0.92,-0.12l0.37,0.41ZM2.49,641.55l1.09,0.16l4.29,-0.23l0.73,0.11l-0.06,0.57l-0.57,0.32l-2.41,0.29l-3.86,-0.72l-1.16,-0.85l-0.14,-0.53l0.41,-0.13l1.67,1.01Z",
        name: "Portugal"
    },
    NO: {
        path: "M728.73,12.13l0.23,0.63l1.37,0.34l2.91,-0.91l0.43,0.5l-0.87,2.15l-0.16,3.33l-0.34,2.0l0.03,1.92l0.37,0.95l0.39,0.26l0.37,-0.28l1.54,-4.63l1.79,-1.59l0.63,-2.84l1.64,-3.37l1.81,-1.92l0.96,-0.48l3.49,0.08l1.42,0.68l1.34,1.62l1.13,0.75l3.32,0.75l0.97,0.77l0.49,0.69l1.05,0.06l2.14,-1.24l1.18,-0.17l2.0,1.7l-0.39,1.45l0.14,0.47l0.4,0.29l2.78,-0.09l2.24,0.55l4.31,2.89l0.39,1.18l-0.18,1.35l-6.19,1.79l-2.83,1.78l-4.44,0.67l-15.48,-1.19l-0.42,0.49l0.31,1.29l0.29,0.29l10.68,2.78l0.42,0.55l-0.32,1.58l-0.01,1.35l0.21,1.01l1.07,1.15l1.47,0.42l2.61,-0.21l1.25,0.43l0.37,-0.06l1.06,-0.95l0.31,-2.12l0.45,-0.29l1.13,0.5l0.61,2.27l0.6,0.49l0.57,-0.18l0.65,-1.49l2.86,-0.04l1.79,0.25l0.66,2.86l-0.02,1.0l-0.31,0.94l-0.35,0.39l-0.8,0.19l-2.23,-0.09l-3.11,-1.22l-2.04,-1.17l-1.03,-0.06l-0.28,0.14l-0.18,0.51l0.46,1.08l-0.11,0.77l-0.69,1.76l-0.55,0.68l-1.18,0.9l-2.11,0.74l-6.01,1.49l-0.74,0.88l-1.92,4.09l-1.08,0.98l-1.79,0.57l-0.79,-0.72l-0.7,-1.22l0.15,-1.12l2.32,-2.54l2.91,-2.55l1.33,-1.95l0.02,-0.42l-2.6,-4.77l-4.84,-1.63l-5.23,-2.18l-1.89,-1.15l-2.97,-2.4l-2.12,-2.17l-2.31,-0.18l-2.22,0.59l-3.29,1.99l-1.88,0.98l-1.0,0.28l-2.52,-0.53l-2.63,-0.12l-2.16,0.16l-0.9,0.29l-3.09,3.3l-2.0,1.58l-1.22,0.63l-0.89,1.04l-0.68,1.54l-1.52,5.34l-1.15,2.08l-0.26,1.33l0.26,3.66l-0.25,1.89l-1.28,1.56l-0.85,0.66l-2.9,0.58l-1.59,1.03l-1.19,1.51l-1.11,2.84l-1.73,0.96l-1.64,-0.27l-1.4,-1.1l-5.01,-1.38l-4.52,-2.05l-2.06,-0.21l-0.32,0.12l-1.93,2.1l-5.05,1.49l-2.23,0.14l-1.05,-0.74l-8.72,-1.08l-0.34,-1.14l-1.17,-1.94l-9.21,-9.88l-2.44,-0.28l-2.67,0.09l-1.9,0.71l-1.2,1.0l-0.17,0.92l0.95,2.35l-0.45,0.52l-2.35,-0.67l-2.9,0.05l-0.9,0.78l-6.7,0.37l-0.25,0.69l2.88,2.76l0.13,1.02l-0.37,2.12l-1.03,1.82l-1.19,1.48l-2.37,1.5l0.06,0.71l3.06,1.26l-3.0,2.32l-1.17,-0.12l-8.25,-2.41l-2.82,-0.65l-3.88,-0.18l-5.25,-1.45l-1.26,0.17l-1.91,0.64l-0.27,0.32l-0.22,1.5l0.39,6.19l-0.64,1.44l-2.61,3.64l-7.75,-3.12l-0.4,0.06l-2.07,1.7l-5.22,3.13l-2.94,6.47l-1.5,1.49l-3.45,1.03l-0.27,0.21l-0.9,1.83l0.05,0.43l3.13,3.96l0.93,2.08l-0.36,2.0l-2.18,1.74l-4.8,4.73l-4.43,4.91l-1.79,1.39l-0.15,0.39l0.78,3.92l-1.25,1.03l-4.43,1.86l-6.68,0.85l-0.35,0.48l1.24,6.33l-0.01,1.03l-1.15,3.32l-0.93,7.54l-0.7,0.82l-0.99,2.05l-3.2,4.92l-6.29,7.99l0.14,0.61l3.03,1.49l2.63,1.03l0.5,1.45l0.37,2.7l-0.09,1.74l-1.0,1.6l-1.2,1.56l-8.77,-1.29l-1.36,-0.01l-3.0,0.54l-2.79,1.15l-1.83,1.34l-4.9,5.82l-1.7,1.6l-0.12,0.38l0.46,2.06l-2.78,4.15l-0.03,0.38l1.88,4.32l0.95,1.67l-1.39,1.81l0.42,4.16l-0.34,2.72l2.56,6.56l-0.15,2.34l-1.85,9.33l0.15,0.4l1.88,1.42l2.64,1.67l1.47,0.66l2.12,1.93l1.53,1.77l-0.65,2.4l-0.7,1.0l-0.95,2.3l-2.9,0.2l-1.62,0.39l-0.9,0.46l-0.21,0.4l0.31,2.38l3.23,7.09l0.44,1.8l-0.45,1.82l-0.52,1.14l-0.38,3.87l-2.51,2.69l-1.57,1.04l-2.34,0.41l-0.95,0.63l-1.44,3.47l-2.02,2.05l-0.04,1.14l1.51,5.23l-1.14,5.29l-0.86,1.68l-1.08,0.53l-0.66,-0.22l-1.02,-2.3l-0.32,-1.4l-0.28,-0.25l-7.05,-1.56l-1.16,-2.08l-1.3,-1.84l-0.16,-0.66l0.03,-3.56l-0.4,-1.53l-0.12,-1.67l-0.31,-0.36l-0.44,0.18l-0.83,1.39l0.39,2.25l-0.79,0.71l-1.22,0.42l-0.27,0.42l0.12,1.28l0.55,0.47l0.09,1.05l-0.3,1.84l-2.48,4.24l-0.73,0.84l-1.36,-0.24l-1.59,1.15l-1.18,0.14l-0.57,-1.25l-2.24,-1.81l-1.35,0.02l-0.24,0.69l1.66,1.78l-0.34,0.49l-0.42,0.4l-4.15,1.77l-0.09,0.66l0.87,0.76l-0.63,0.74l-1.2,0.24l-0.61,0.54l-0.29,0.77l-3.32,2.06l-5.48,5.29l-2.79,1.48l-1.93,1.51l-1.6,-0.04l-2.35,1.35l-5.42,1.13l-3.62,-0.52l-2.54,0.44l-1.12,-0.74l-0.11,-0.39l0.24,-0.59l-0.23,-0.57l-0.48,-0.15l-1.42,0.03l-0.43,0.44l-0.3,1.11l-1.65,-0.49l-0.19,-0.21l0.48,-0.73l1.13,-0.9l0.02,-0.61l-0.66,-0.86l-2.33,0.06l-1.29,-0.16l-4.41,-2.06l-1.12,-1.16l-3.58,-1.77l-1.55,-1.81l-0.87,-1.97l0.07,-1.8l0.43,-2.89l0.5,-0.49l3.02,0.98l3.54,1.8l0.77,-0.24l0.99,-1.33l1.95,-1.08l-0.0,-0.7l-0.92,-0.33l-2.81,1.2l-2.49,-1.9l0.0,-0.39l0.79,-0.82l0.27,-1.01l-0.4,-1.12l0.16,-1.06l1.23,-1.27l1.98,-1.38l1.46,-1.36l1.45,-0.81l0.15,-0.54l-0.16,-0.28l-0.47,-0.19l-1.78,0.56l-1.68,0.94l-1.89,1.49l-2.26,1.19l-3.78,1.24l-1.46,1.82l-1.27,0.66l-2.2,0.07l-0.41,-0.93l0.7,-4.41l0.75,-2.16l0.75,-1.38l1.39,-0.37l0.82,-1.01l0.45,0.0l0.74,0.53l2.61,0.52l0.38,-0.13l1.19,-1.36l1.65,-0.23l3.06,-1.49l0.15,-0.72l-0.45,-0.3l-5.05,0.73l-0.67,-0.19l-0.29,-0.73l0.56,-0.79l2.85,-2.37l1.03,-1.09l0.62,-1.06l-0.03,-0.83l0.41,-1.2l2.7,-2.33l1.96,-0.95l0.44,0.56l-0.61,2.9l0.01,1.23l0.32,0.39l0.45,-0.24l1.8,-4.31l0.74,-0.96l0.8,-0.64l2.32,-0.59l0.62,-0.69l0.06,-0.45l-0.39,-0.22l-2.64,0.24l-6.23,1.67l-2.72,1.52l-0.82,1.24l-1.78,1.68l-0.9,1.16l-0.42,1.66l-0.85,0.74l-1.49,0.42l-1.92,2.07l-0.87,1.66l-3.07,2.3l-1.18,1.31l-0.25,-0.31l-0.07,-1.13l0.18,-1.94l0.87,-1.4l0.48,-1.55l-0.55,-1.47l0.23,-0.46l2.09,0.41l1.6,-0.06l2.77,-1.1l0.18,-0.59l-0.72,-0.8l-3.19,-0.01l-1.6,-0.94l-1.29,-1.95l-0.58,-2.58l0.3,-0.57l5.03,-2.8l1.46,-1.36l-0.21,-0.69l-1.12,-0.04l-1.87,1.53l-2.49,0.88l-1.51,-1.18l-0.83,-1.34l-0.5,-2.97l0.18,-1.63l-0.19,-1.84l0.81,-0.47l2.52,0.47l3.01,-0.18l6.47,-1.26l4.11,0.74l1.79,-0.06l2.68,-1.09l2.11,-0.1l1.55,0.76l0.78,0.8l0.21,1.37l0.79,0.85l0.48,0.08l0.53,-0.28l0.18,-0.51l-0.4,-0.94l-0.07,-1.17l6.53,-1.69l0.97,-0.77l-0.22,-0.7l-2.49,-0.22l-0.59,-1.23l1.33,-2.27l0.02,-0.36l-0.13,-0.32l-0.63,-0.15l-1.62,1.45l-0.74,1.82l0.25,1.56l-0.17,0.37l-1.16,0.26l-3.03,0.11l-3.76,-0.93l-0.35,-0.26l0.16,-0.79l-0.18,-0.42l-0.35,-0.21l-0.52,0.09l-0.77,0.93l-0.68,1.78l-1.2,0.35l-4.09,-0.68l-5.91,0.41l-2.68,0.93l-1.55,-0.11l-2.82,-1.56l-1.03,-1.16l-0.4,-2.46l0.12,-0.82l1.98,-0.42l1.33,-0.02l1.09,-0.62l-0.04,-0.72l-2.18,-1.12l-0.87,-1.51l-1.48,-0.65l-0.81,-1.18l-0.22,-1.9l0.22,-1.2l0.47,-0.29l1.73,0.29l4.65,-0.24l7.55,2.28l6.23,-0.44l3.58,-1.3l0.06,-0.73l-0.93,-0.4l-3.85,0.75l-3.51,-0.03l-8.9,-1.94l-2.82,0.2l-1.23,-0.38l-0.7,-1.19l0.55,-2.45l0.89,-0.41l0.79,0.65l0.87,0.05l0.34,-0.16l0.85,-1.13l0.92,-0.79l0.61,-1.39l2.32,-1.33l1.09,-0.14l1.41,-0.61l0.72,0.14l1.38,1.17l2.02,-0.0l5.03,-1.15l1.71,-1.38l0.08,-0.46l-0.41,-0.22l-3.19,0.42l-2.67,0.67l-1.34,0.15l-0.09,-0.31l1.55,-1.5l0.43,-1.2l0.86,-0.45l3.55,-0.22l1.7,-0.35l2.87,0.23l4.31,0.51l2.77,1.23l1.27,-0.08l1.2,-0.35l0.66,-0.54l-0.17,-0.69l-1.96,-0.46l0.08,-0.64l3.4,-0.97l3.9,-0.23l0.29,-0.65l-0.68,-0.84l-0.37,-0.14l-8.54,1.25l-2.16,-0.82l-1.92,-0.02l-1.28,0.5l-3.12,0.56l-0.21,-0.14l0.48,-1.11l1.95,-2.36l0.2,-0.59l0.74,-0.46l5.1,-1.38l2.53,-1.63l3.76,-0.26l3.04,0.43l1.55,2.02l5.56,3.15l0.45,-0.02l0.15,-0.42l-0.3,-0.92l-3.67,-3.44l-1.39,-0.85l-0.91,-1.47l0.3,-1.32l0.99,-0.9l4.07,-0.56l0.95,-0.71l0.22,-1.35l-0.74,-1.02l-1.78,-0.1l-1.01,-0.36l-0.24,-0.78l0.35,-0.54l2.3,-1.35l3.43,-0.91l3.72,1.05l0.11,0.21l-0.96,1.21l0.03,1.1l0.36,0.34l0.98,0.09l0.33,-0.12l2.17,-2.28l2.53,-0.31l2.2,-0.78l1.72,2.01l1.34,0.96l0.53,1.63l0.31,0.27l0.57,0.1l0.36,-0.13l0.74,-0.82l1.33,-0.43l1.97,-0.3l3.34,0.47l1.63,-0.34l0.7,0.05l0.39,-0.56l-1.06,-1.99l0.54,-1.1l0.62,-0.47l2.27,-0.98l2.34,-0.5l1.44,-0.94l1.94,-0.87l0.2,-0.52l-0.89,-1.59l-0.32,-0.18l-1.15,-0.06l3.35,-1.94l0.12,-0.61l-0.57,-0.59l-1.9,-0.53l-3.19,1.34l-2.23,1.48l0.02,0.68l0.66,0.39l0.81,0.9l-1.23,1.3l-7.99,4.24l-3.74,1.22l-1.44,-0.16l-0.34,-0.94l-0.86,-0.96l-0.85,-1.73l-0.37,-0.22l-1.5,0.05l-0.69,0.28l-0.08,-0.13l0.56,-1.66l1.17,-1.4l2.19,-1.22l1.06,-1.46l0.91,-2.09l3.05,-2.1l4.41,-5.13l3.56,-1.63l1.42,-1.85l2.14,-0.82l1.74,-1.35l1.46,-0.17l2.61,-1.28l1.59,-1.61l-0.25,-0.68l-0.97,-0.09l-3.2,1.24l0.06,-1.0l0.57,-1.52l1.77,-1.44l8.82,-4.35l1.74,1.84l0.35,0.14l2.74,-0.3l3.33,-2.63l2.45,-2.81l0.03,-0.49l-0.47,-0.15l-1.3,0.48l-1.5,1.17l-2.68,1.52l-1.12,0.22l-0.44,-0.12l-0.57,-1.09l-0.96,-0.34l-0.9,0.17l-0.6,-0.5l-0.14,-1.58l1.98,-4.43l0.94,-1.33l3.82,-3.91l0.87,-2.16l1.51,-0.99l2.11,0.24l0.9,-0.37l0.18,-0.55l-0.77,-1.41l-2.49,-1.33l7.75,-1.75l3.85,0.06l1.35,-0.96l2.16,-0.63l1.61,-1.13l-0.02,-0.67l-1.14,-0.54l-6.37,1.52l-1.08,-0.02l-0.96,0.36l-2.74,0.12l-0.62,-4.09l0.41,-2.05l0.84,0.04l0.41,-0.35l0.25,-2.21l1.17,-1.2l1.9,-0.34l2.23,-1.72l2.18,0.26l2.33,-0.27l0.24,-0.68l-0.58,-0.57l-2.91,-0.8l-0.45,-0.8l1.71,-0.96l1.18,-0.24l1.91,-2.45l1.01,-0.91l1.39,0.11l1.69,-1.01l1.64,0.34l1.93,-0.72l2.3,-0.46l8.65,-0.18l0.38,-0.3l0.26,-1.02l-0.34,-0.5l-1.86,-0.24l-6.45,-0.26l-3.31,0.02l-1.29,0.24l-0.17,-0.12l0.03,-0.21l1.08,-0.87l0.65,-1.14l2.32,-2.53l2.62,-1.62l1.91,0.4l2.4,1.68l1.53,0.19l0.6,0.42l1.14,2.2l0.3,0.21l0.56,0.07l0.45,-0.44l-0.23,-2.02l1.45,-1.66l0.01,-0.52l-0.41,-0.49l-0.41,-0.13l-2.24,0.61l-1.61,-0.6l-1.3,-1.22l-0.31,-0.94l0.73,-1.0l0.79,-0.58l0.08,-0.57l-0.57,-0.72l-0.5,-0.1l-3.51,1.89l-2.37,0.42l-0.51,-0.14l0.42,-1.34l-0.25,-1.37l3.16,-3.18l0.99,-0.33l1.73,0.25l1.89,0.97l1.52,-0.17l1.56,-0.51l0.26,-0.47l-0.21,-0.92l-0.35,-0.31l-3.25,-0.35l-0.56,-0.49l0.13,-0.32l2.23,-0.78l2.23,-1.39l2.56,-0.4l2.05,-1.03l0.41,0.39l0.79,4.05l1.9,3.28l0.98,0.31l0.45,-0.5l-0.68,-2.59l1.33,-1.19l0.41,-0.88l-0.28,-0.53l-0.85,-0.2l-0.68,-0.84l-1.07,-2.98l0.28,-0.58l2.33,-1.59l2.94,-0.37l3.25,1.17l1.3,0.04l2.06,-0.34l3.26,-0.98l1.87,-0.36l0.97,0.0l0.36,-0.22l0.25,-0.5l-0.23,-0.56l-2.0,-0.82l-3.16,0.52l-8.22,-0.17l-0.57,-0.4l-0.1,-0.67l0.77,-1.23l0.88,-0.71l3.04,-1.36l3.48,-0.26l3.52,-2.5l1.5,-2.1l0.74,-2.81l2.0,-2.19l5.27,-1.31l0.28,-0.25l0.2,-0.9l-0.53,-1.14l0.04,-2.02l1.39,-2.44l0.86,-0.79l0.17,-0.04l0.97,0.7l1.52,1.87l2.21,1.03l3.04,0.21l1.01,-0.57l-0.05,-0.7l-2.21,-1.0l-1.53,-1.21l-0.1,-0.98l0.53,-0.47l2.73,-0.08l1.64,-0.97l0.77,-2.5l2.01,-1.97l6.3,-1.3l0.22,0.25l-0.34,3.86l-0.77,2.7l0.02,1.91l0.29,0.38l0.45,-0.16l1.34,-2.01l1.72,-5.22l1.26,-2.39l1.36,-1.31l0.96,-0.29l1.1,-0.76l1.04,-0.33l0.59,1.45l-0.72,4.51l0.07,1.44l-0.77,1.81l-3.14,4.28l0.08,0.89l0.5,0.28l0.81,-0.24l1.32,-0.78l3.78,-3.95l3.22,0.49l0.46,-0.35l-0.06,-0.66l-2.39,-2.32l-0.35,-1.26l0.17,-3.66l0.84,-1.24l2.74,0.15l1.67,-0.19l0.96,0.67l1.78,-0.05l0.35,-0.24l1.13,-2.54l2.03,-0.2l2.09,1.77l2.52,1.2l2.02,1.73l0.51,0.0l0.58,-0.48l0.13,-0.41l-1.11,-4.11l-1.29,-1.65l-2.78,-0.9l-2.72,-1.79l-0.53,-0.8l2.15,-0.51l3.46,0.62l2.73,-1.45l0.94,0.35l2.03,-0.74l1.22,0.95l0.39,0.06l1.09,-0.57l0.42,-1.26l3.24,-0.82l2.1,0.78l1.07,0.76l1.38,4.8l1.87,1.95l1.31,0.98l1.3,0.24l0.4,-0.16l0.63,-0.88l-0.06,-0.53l-1.14,-0.99l-0.26,-0.79l0.54,-2.31l0.62,-0.89l3.76,-3.66l3.08,-1.86l2.11,-0.31l3.33,-4.31l0.84,-0.7l0.78,-0.16l0.31,-0.47l-0.22,-1.07l-0.25,-0.29l-1.59,-0.58l-0.04,-0.83l2.28,-1.52l2.84,-2.62l1.15,-0.15l0.87,0.7l2.81,1.2l1.71,1.37l1.32,0.74l1.09,-0.1l0.9,-1.15l0.62,-0.37l1.59,0.24l1.01,0.63l0.94,0.14l0.53,0.28l0.09,0.44l-1.4,0.88l-2.7,2.61l-2.64,2.94l-0.92,1.62l-0.88,4.07l-2.09,2.72l-0.04,2.12l0.83,0.85l0.4,0.1l2.43,-0.75l2.81,-2.41l0.8,-2.66l6.95,-6.9l3.3,-3.87l3.66,-3.14l1.68,-0.53l0.78,1.67l-0.73,2.55l-1.53,1.7l0.07,0.6l0.98,0.68l-0.19,1.82l-0.61,2.47l0.02,1.07l0.5,0.38l1.18,-0.32l4.39,-2.2l2.31,-4.33l0.49,-1.52l1.51,-1.3l3.07,-0.01l0.39,-0.32l0.12,-0.58l-0.21,-0.44l-3.77,-1.98l-0.27,-0.54l1.07,-1.0l3.45,-2.24l1.64,0.23l1.19,0.54l4.36,0.4l3.1,1.53l-0.11,2.24l-0.67,0.96l-0.67,0.6l-4.3,1.95l-0.87,1.1ZM756.79,33.48l-2.19,0.6l-0.05,-0.09l1.06,-2.35l0.65,0.05l1.44,1.11l-0.91,0.68ZM694.5,3.24l1.2,-0.9l2.04,-1.03l3.48,0.91l1.18,-0.0l1.68,1.66l0.74,0.04l-0.05,0.28l-1.54,0.44l-2.79,0.31l-0.46,0.21l-2.15,-0.15l-1.48,-1.46l-1.84,-0.29ZM676.11,14.77l-2.25,0.85l-1.26,-0.71l-0.51,-0.7l-0.08,-1.73l0.28,-0.94l0.87,-0.43l0.91,0.75l1.34,0.34l1.34,0.98l-0.64,1.59ZM670.58,15.65l0.31,1.83l-1.1,1.19l-2.87,1.76l-0.12,0.61l-0.64,0.29l-1.35,0.3l-0.41,-0.17l0.09,-1.25l-0.29,-0.67l-0.54,-0.17l-0.94,0.5l-0.82,-0.53l0.24,-1.01l0.99,-0.93l1.66,-0.64l1.41,0.18l3.74,-2.54l0.64,1.25ZM668.13,9.06l-0.57,1.15l-1.09,0.79l-3.14,3.06l-1.79,0.48l-1.29,0.76l-2.24,-0.41l-1.54,1.06l-1.55,0.15l-0.89,-0.12l-2.48,-1.11l-1.76,-1.58l1.56,0.01l0.88,-0.25l1.51,0.21l0.36,-0.13l0.83,-0.96l1.94,0.11l3.8,-0.75l1.34,0.4l0.36,-0.07l3.15,-2.48l1.07,0.02l1.3,-0.61l0.25,0.27ZM632.13,26.52l-0.54,0.42l-0.88,0.18l-1.43,-0.54l-0.88,0.07l-0.57,-0.73l0.06,-0.58l0.93,-1.0l2.01,-0.61l1.59,0.25l0.17,0.13l-0.47,2.42ZM618.46,23.91l0.85,0.4l0.8,-0.12l0.36,0.16l1.08,1.22l1.16,0.66l-0.83,0.46l-1.35,0.17l-1.33,-0.18l-0.82,-1.91l-1.32,-1.37l-0.11,-0.62l0.52,-0.08l0.99,1.21ZM611.42,27.32l1.31,1.58l0.34,0.13l1.07,-0.13l0.53,-0.56l0.44,-0.15l1.05,0.5l-0.13,0.73l-2.0,1.5l-1.38,2.01l-1.62,0.43l-1.14,-0.16l-1.71,1.26l-2.75,2.92l-0.3,1.36l-4.83,0.6l-1.79,0.4l-1.74,-0.48l-0.67,-0.77l0.08,-0.15l1.74,-0.21l0.35,-0.37l0.05,-0.86l1.11,-0.95l0.4,-1.1l0.5,-0.21l1.32,0.28l0.36,-0.1l1.11,-0.91l0.51,0.57l0.68,-0.15l0.32,-1.04l-0.29,-1.09l0.11,-0.41l1.77,-1.6l0.83,-1.23l0.97,-0.66l0.97,0.11l0.43,-0.29l0.33,-1.16l-0.3,-1.32l0.1,-0.63l0.85,-1.63l0.54,-0.04l0.39,1.32l0.08,2.67ZM588.18,39.32l1.24,1.04l0.46,0.04l0.66,-0.38l1.25,-0.14l0.91,0.41l0.82,0.82l1.09,0.15l0.51,0.89l0.28,1.25l-0.6,0.87l-1.19,0.73l-0.29,1.47l0.32,1.44l-2.0,0.52l-2.59,0.26l-0.96,-0.77l-0.48,-0.01l-2.23,1.59l-2.19,2.45l-0.49,0.13l-0.3,-0.65l-1.59,-0.54l-1.71,-0.05l0.22,-0.25l1.65,-0.57l0.25,-0.27l0.35,-1.26l-0.3,-2.33l0.35,-1.67l0.84,-0.67l3.6,0.4l0.4,-0.21l0.46,-0.84l-0.29,-0.91l-1.77,-0.93l1.26,-0.6l1.27,-0.07l0.35,-0.24l0.44,-1.11ZM564.03,63.2l0.26,0.57l0.59,-0.03l1.78,-2.18l1.94,-0.67l0.26,-0.31l0.11,-0.66l0.82,-0.99l-0.08,-1.16l0.3,-0.74l1.55,-0.58l0.51,-0.13l1.1,0.7l0.66,0.82l0.85,1.88l-0.32,1.68l-2.27,1.42l-2.04,0.76l-1.97,1.76l-0.98,1.4l-0.62,0.23l-0.99,-0.45l-1.0,-0.0l-1.33,1.3l-3.11,0.95l-0.9,-0.2l-0.05,-0.94l-0.45,-0.38l-0.78,0.1l-1.44,1.55l-1.76,0.57l-1.4,-0.52l-0.35,0.04l-3.97,2.48l-3.63,0.45l-0.87,-0.2l-0.0,-1.04l4.21,-3.17l6.82,-0.95l4.52,-4.21l1.14,-4.61l0.98,-1.56l0.02,-0.4l-0.48,-0.92l-1.13,-0.33l-0.05,-0.99l0.54,-1.38l2.17,-2.04l1.31,-0.96l2.0,-2.51l0.83,-0.49l0.9,0.0l0.78,0.48l-0.15,1.02l-1.58,2.35l-2.41,2.07l-0.13,0.38l0.3,1.51l0.98,1.32l0.28,3.88l-1.79,2.64l-0.46,1.42ZM556.54,54.46l2.5,3.67l-0.58,2.34l-1.51,1.17l-2.5,0.22l-1.74,-0.1l-0.93,-0.5l-0.11,-0.53l-0.27,-0.3l-0.68,-0.21l-2.02,0.91l-1.06,0.11l-1.32,-0.6l-0.27,-0.72l1.46,-1.25l0.71,-1.0l1.51,0.08l0.53,0.34l1.05,0.22l0.44,-0.22l0.64,-1.34l-0.09,-1.0l0.22,-0.3l1.99,0.41l0.48,-0.39l0.0,-2.2l0.64,-0.04l0.51,0.42l0.39,0.83ZM538.67,70.65l0.96,0.42l1.95,-0.11l-0.84,0.76l-1.83,0.42l-1.04,1.19l-0.46,0.28l-1.55,0.0l-1.08,0.27l-1.11,0.86l-0.71,-0.54l-0.6,0.13l-0.45,1.35l-1.52,0.4l-0.29,-1.54l1.17,-1.47l1.83,-0.2l1.4,-1.9l1.85,-0.52l1.21,-0.06l1.1,0.23ZM526.33,79.08l-1.04,0.64l1.42,-3.36l1.2,-1.04l0.24,0.17l-0.27,0.93l0.01,0.96l-1.57,1.71ZM520.21,124.0l-0.58,0.03l0.0,-0.36l0.49,-0.66l0.84,-0.48l2.38,-0.19l-3.14,1.65ZM519.02,120.83l-0.67,0.08l0.07,-0.32l0.99,-0.94l0.6,-1.36l0.56,-0.36l0.86,0.5l0.02,0.92l-0.5,0.9l-1.93,0.59ZM512.64,130.29l-0.68,0.52l-1.25,-0.15l-0.06,-0.2l0.37,-0.91l0.78,-0.38l1.04,0.08l0.15,0.18l-0.35,0.85ZM502.61,147.16l-0.44,0.38l-1.54,-0.44l-3.0,0.37l-0.68,-0.32l0.6,-0.7l2.65,-1.15l1.27,0.05l1.27,1.24l-0.12,0.58ZM465.49,173.05l-1.51,-0.0l1.42,-0.61l3.46,-0.91l0.49,-0.61l0.39,0.44l0.05,0.69l-0.19,0.24l-4.1,0.75ZM460.35,180.13l-1.1,0.01l-1.46,-0.3l-0.84,-0.71l1.48,-0.62l1.58,-0.39l0.58,0.58l0.05,1.08l-0.3,0.36ZM418.13,241.28l0.63,1.0l0.45,1.55l0.03,1.89l-0.6,-0.09l-0.57,-1.19l0.09,-1.33l-0.26,-1.41l0.22,-0.42ZM417.53,227.52l-0.84,0.18l-0.51,-0.12l0.25,-1.42l0.69,-0.25l0.54,0.73l-0.13,0.88ZM229.04,8.0l-1.01,0.13l-0.19,-0.14l1.39,-1.15l5.97,-2.82l2.44,-2.71l4.12,-0.83l0.21,1.05l-0.26,1.57l-3.83,1.4l-4.49,1.0l-4.36,2.51Z",
        name: "Norway"
    },
    TR: {
        path: "M718.26,643.94l1.78,-0.53l0.28,-0.32l0.41,-2.61l-0.3,-1.51l-0.34,-0.32l-0.95,-0.12l-2.87,-1.18l-0.86,0.07l-0.95,-1.23l-1.69,-0.95l-0.35,-0.02l-1.3,0.7l-3.08,-1.38l-0.3,-0.28l0.47,-0.97l0.73,0.03l0.41,-0.34l0.15,-1.36l-0.74,-1.83l0.05,-0.62l0.51,-0.16l0.74,0.14l0.84,0.97l0.27,0.93l-0.14,1.27l0.63,1.04l0.59,0.4l0.59,-0.24l0.28,-0.94l0.56,0.4l1.4,0.24l3.22,-0.67l0.81,-0.67l0.1,-0.44l-0.38,-0.25l-2.24,0.06l-0.7,-0.43l-0.87,-1.11l-0.88,-2.11l1.82,-0.87l1.42,-1.76l-0.05,-0.55l-0.59,-0.51l-0.8,-0.31l-0.76,0.12l-0.42,-0.36l-0.06,-0.52l0.54,-0.78l-0.03,-1.21l-2.15,-2.63l2.92,-3.25l-0.08,-0.89l-0.3,-0.27l-1.12,-0.22l-4.65,0.67l-1.83,0.58l-2.85,0.24l-0.07,-1.08l0.73,-1.52l-0.07,-3.4l0.37,-1.6l1.76,-0.62l2.18,-2.73l3.42,-3.13l3.56,0.06l1.61,-0.9l1.87,-0.04l0.7,1.24l1.94,0.9l3.61,-0.11l1.83,-0.91l0.07,-0.62l-1.29,-1.3l1.32,-0.12l1.19,0.29l-0.77,1.25l0.21,0.57l0.46,0.17l4.57,-0.5l4.59,0.42l1.54,-0.23l3.61,0.02l0.91,-0.65l-0.05,-0.64l-1.1,-0.69l-1.16,-0.28l-0.86,-0.45l1.76,-1.18l7.34,-1.23l4.57,-0.48l0.35,-0.33l0.06,-0.35l-0.39,-0.47l-6.47,-0.78l-1.33,-0.57l-1.92,-1.42l-0.76,-0.91l0.59,-2.44l0.55,-0.53l2.17,-0.1l8.06,1.24l5.8,-0.73l6.36,1.8l6.03,-0.37l1.57,-1.01l1.45,-2.52l8.42,-4.31l3.0,-2.28l3.12,-1.22l5.51,-1.4l4.54,-1.82l1.22,-0.2l10.96,0.87l7.59,0.11l3.52,-1.71l1.47,0.43l-0.45,0.92l0.19,1.27l1.18,1.57l1.36,1.2l3.79,1.55l4.82,-1.27l1.47,0.41l1.74,4.11l1.44,1.54l1.87,1.05l1.41,0.2l2.03,-1.46l1.58,-0.16l2.71,1.33l1.19,1.55l4.95,1.14l4.49,0.57l2.02,1.25l6.39,1.25l2.59,-0.21l3.98,-1.3l7.65,-1.41l5.14,1.98l1.4,0.26l1.25,-0.16l1.65,0.52l2.13,-0.31l2.63,-1.08l0.0,62.86l-6.31,3.02l-4.43,1.35l-4.41,0.88l-7.91,-0.18l-0.93,-0.3l-3.39,-2.31l-1.91,-0.5l-1.6,-0.13l-10.36,4.02l-4.82,-0.15l-0.93,-0.66l-0.79,-0.98l-2.24,-0.53l-1.66,-0.16l-0.82,0.65l-0.44,1.24l-0.81,3.82l1.39,3.18l-1.94,0.18l-0.75,0.27l-0.74,0.56l-0.49,2.61l-1.11,0.4l-0.76,0.62l-0.67,1.53l-2.05,-1.15l-0.5,-0.08l0.49,-0.7l0.04,-0.37l-1.9,-4.65l0.83,-1.27l2.0,-1.79l2.24,-2.4l-0.21,-2.57l-1.83,-1.66l-0.43,-0.04l-1.96,0.98l-1.4,1.07l-0.95,0.25l-0.99,0.62l-0.59,1.19l-1.03,0.75l-1.77,0.31l-2.83,-0.89l-3.11,-1.39l-1.91,-1.19l-1.67,-0.26l-1.48,0.55l-4.09,2.81l-3.79,4.13l-0.87,0.66l-3.46,1.72l-2.22,0.56l-1.14,-0.13l-4.62,0.77l-2.28,0.11l-1.85,0.9l-3.34,-0.95l-2.03,-1.23l-1.22,-1.25l-2.06,-2.79l-1.53,-1.4l-3.42,-1.28l-5.75,-2.92l-1.66,-0.36l-8.11,-0.69l-0.34,0.15l-0.93,1.28l-0.31,4.13l-0.66,1.08l-0.34,2.23l-0.39,0.48l-0.53,0.28l-1.12,-0.61l-1.16,-0.29l-1.99,0.89l-3.93,1.24l-1.23,0.16l-4.49,-1.54l-1.61,-0.97l-0.97,-1.01l-0.35,-1.79l-0.69,-1.15l-0.37,-1.59l-1.18,-0.6l-0.36,0.04l-0.9,0.58l-0.89,-0.02l-1.26,-0.37l-3.14,-1.59l-2.6,-0.17l-0.34,0.16l-1.41,1.89l-1.0,0.55l-0.77,0.11l0.84,-1.12l-0.34,-0.64l-3.8,0.23l-2.06,0.95l-2.05,-0.37l1.88,-0.57l4.06,-0.35l1.07,-0.38l1.19,-1.45l1.86,-1.15l0.4,-0.68l-0.36,-0.57l-7.79,0.34l-4.31,-0.19l-0.83,0.62l-0.11,-1.02l0.43,-0.47l0.87,0.04l2.26,-0.65l0.29,-0.44l-0.2,-1.33l-0.2,-0.29l-1.53,-0.85l-0.57,-0.63l-1.08,-0.11l-0.72,-0.48l-0.21,-1.53l-0.76,-1.76l-0.99,-0.84ZM721.52,574.59l1.54,1.29l0.89,0.47l1.98,-0.61l1.79,0.08l0.63,-0.42l0.45,-0.06l1.36,0.21l-0.26,1.68l0.9,2.12l2.0,2.84l2.18,1.56l8.14,3.53l1.17,0.24l-0.71,2.23l-0.43,0.68l-2.13,0.49l-6.49,-1.55l-1.72,-0.16l-1.4,0.36l-2.06,1.08l-2.42,-0.34l-3.36,0.65l-0.29,0.23l-0.91,2.08l-2.24,2.36l-3.76,1.94l-2.85,1.13l-4.12,3.8l-1.86,2.19l-0.86,0.44l0.53,-1.22l-0.05,-1.79l2.43,-1.92l3.66,-1.58l1.14,-1.46l-0.33,-0.64l-2.94,0.03l-2.91,0.29l-1.81,-0.18l-1.4,0.09l-0.6,-1.28l0.72,-0.29l0.93,-1.22l2.12,-2.16l0.35,-0.85l-0.0,-0.64l-0.35,-1.0l0.02,-2.03l2.55,-1.54l0.83,-0.16l0.29,-0.25l0.3,-0.77l-0.18,-1.98l-0.4,-1.5l-1.3,-0.72l-1.17,-1.03l-1.08,-0.32l0.07,-0.4l0.29,-0.3l2.17,-0.53l0.91,-1.93l0.28,-0.16l2.46,-0.17l1.19,-0.28l1.22,-0.6l0.58,-0.49l2.99,-0.52l0.46,0.15l0.86,0.82ZM702.55,604.46l-2.7,0.43l-0.36,-0.18l0.51,-0.51l2.02,-0.6l0.54,0.66l-0.03,0.2Z",
        name: "Turkey"
    },
    GE: {
        path: "M899.6,555.54l-3.56,-2.65l-2.58,-1.59l1.15,-1.72l0.67,-0.21l4.32,0.81l0.0,5.36Z",
        name: "Georgia"
    },
    LI: {
        path: "M479.66,489.8l0.02,-1.42l0.15,-0.43l0.74,1.46l-0.19,0.45l-0.72,-0.06Z",
        name: "Liechtenstein"
    },
    LV: {
        path: "M693.81,289.47l3.55,1.99l1.99,0.57l1.08,0.9l2.53,0.56l0.49,0.96l3.62,3.6l2.41,1.22l1.17,0.26l4.94,-1.5l0.71,-0.01l0.89,0.57l2.08,0.79l3.86,0.3l0.33,0.18l0.5,1.6l3.78,2.51l0.01,1.64l-0.16,0.4l-0.74,0.71l-0.62,1.56l-0.11,1.55l-0.95,2.51l0.29,0.53l0.22,0.05l2.08,-0.43l0.37,0.17l0.31,0.4l0.24,1.72l1.27,1.73l0.34,1.03l1.18,0.95l0.88,2.95l0.42,2.29l-0.59,1.84l-1.52,0.28l-1.91,1.15l-3.42,3.12l-0.81,2.06l-3.43,-0.09l-3.6,-0.5l-1.55,0.46l-1.71,1.91l-2.96,0.71l-2.36,-0.64l-1.52,-0.83l-2.67,-2.8l-5.8,-4.02l-1.15,-0.52l-6.83,-1.31l-1.59,-2.24l-0.54,-1.35l-1.1,-0.49l-2.14,0.57l-2.38,1.65l-0.63,0.2l-4.67,0.37l-1.48,-0.58l-2.72,-0.66l-2.72,-0.09l-5.63,-0.64l-1.22,0.71l-0.75,0.09l-1.07,-1.05l-1.26,-0.31l-1.54,0.36l-2.45,0.04l-6.91,-0.6l-5.95,1.81l-4.6,2.42l-3.13,1.94l-0.35,-2.96l0.22,-7.21l0.52,-3.44l2.41,-2.01l1.33,-1.71l0.8,-2.32l0.24,-2.08l0.48,-1.58l3.52,-4.67l2.8,-0.51l3.91,-1.34l4.08,-1.05l1.23,2.38l5.26,3.95l1.27,1.26l2.21,4.68l4.89,2.3l4.09,-0.7l4.9,-3.24l1.55,-1.77l0.28,-1.57l-0.55,-6.25l-0.82,-2.71l0.2,-1.21l0.43,-0.03l1.27,-0.8l4.21,-1.49l1.88,-0.39l2.54,-1.08l1.64,1.26l0.73,-0.15l0.24,-0.81Z",
        name: "Latvia"
    },
    EE: {
        path: "M681.02,292.17l1.82,-4.13l0.34,-3.01l0.49,-0.32l0.34,-0.6l-0.26,-1.25l-0.26,-0.27l-1.86,-0.63l-0.93,0.07l-1.54,1.86l-1.37,0.39l-1.34,-0.75l-3.16,-1.02l-0.72,-1.23l-0.33,-1.62l-1.67,-1.33l-0.63,-1.43l0.21,-0.83l1.41,-0.67l0.61,-0.79l-0.35,-0.63l-2.02,0.06l-0.86,-2.23l0.67,-0.72l0.34,-0.77l-0.08,-0.44l-0.49,-0.5l0.62,-1.45l-0.25,-1.46l3.54,-1.43l4.03,-0.33l0.36,-0.5l-0.28,-1.14l1.37,-0.12l2.65,-1.86l2.78,0.31l3.93,-1.31l7.61,0.02l1.29,-0.85l0.15,-0.41l-0.16,-1.04l1.08,0.16l2.37,-0.14l9.0,1.62l2.2,0.01l2.99,1.6l1.75,0.46l4.98,0.02l7.53,0.73l1.76,-1.2l1.2,1.24l0.05,0.35l-0.81,0.25l-0.7,0.83l-0.89,0.08l-0.74,0.46l-2.01,4.63l-1.78,2.06l-1.52,1.22l-0.71,0.99l-0.41,1.08l-0.11,1.31l1.4,5.86l-0.02,0.96l-0.57,2.18l0.2,1.13l0.96,1.74l0.97,2.4l0.39,1.53l1.41,1.24l-3.15,1.13l-0.66,1.42l-1.29,1.24l-0.65,2.49l-1.76,-0.23l-2.0,-0.76l-1.1,-0.64l-1.03,0.03l-4.85,1.48l-0.81,-0.22l-2.13,-1.06l-3.53,-3.51l-0.22,-0.58l-0.57,-0.62l-2.57,-0.57l-0.91,-0.82l-2.12,-0.63l-3.1,-1.88l-0.9,-0.23l-0.43,0.19l-0.22,0.83l-1.53,-1.25l-0.39,-0.04l-2.69,1.15l-1.83,0.38l-4.3,1.52l-1.26,0.77ZM666.97,278.74l-0.76,0.14l-2.16,-1.14l0.32,-0.5l0.53,-0.26l1.89,0.49l0.18,1.27ZM647.68,284.33l0.65,-0.34l0.55,-0.65l0.33,-0.88l-0.06,-0.37l-1.34,-1.77l1.14,-0.04l1.0,0.59l0.42,-0.01l1.45,-0.78l0.72,0.23l0.47,-0.18l0.75,-1.3l1.82,-0.44l0.95,-0.42l0.77,0.1l1.15,0.49l1.76,-0.47l1.78,0.29l4.32,2.36l-2.29,0.37l-1.11,1.14l-0.83,0.23l-1.26,1.02l-1.71,0.98l-0.38,0.54l-2.91,-0.1l-1.98,0.46l-1.39,1.11l-0.69,2.3l-0.93,1.54l-0.87,0.51l-0.69,0.06l-0.04,-0.64l2.18,-2.28l0.52,-0.84l-0.22,-0.59l-1.05,-0.32l-0.98,-0.83l-2.01,-1.06ZM661.53,273.2l-1.11,0.89l-0.64,-0.61l-0.66,0.02l-1.35,2.09l-1.32,0.31l-0.56,-0.26l0.03,-0.74l-1.12,-2.39l-1.41,-0.64l-2.02,-0.09l-0.37,-0.23l4.37,-0.49l0.31,-0.21l0.54,-0.99l0.98,-0.96l0.62,-0.09l0.4,0.14l0.14,0.74l0.46,0.54l2.34,0.45l0.84,1.22l0.26,1.21l-0.72,0.09Z",
        name: "Estonia"
    },
    LT: {
        path: "M639.02,342.33l-0.39,-1.13l0.47,-2.2l-0.92,-3.13l-1.46,-3.66l-0.19,-4.61l3.42,-2.12l4.53,-2.39l5.74,-1.75l6.79,0.61l2.53,-0.04l1.39,-0.36l1.04,0.26l0.93,1.0l0.34,0.12l1.22,-0.19l0.91,-0.62l5.51,0.62l2.7,0.09l4.28,1.25l4.87,-0.4l0.86,-0.29l2.26,-1.59l1.75,-0.52l0.54,0.16l0.53,1.3l1.95,2.56l6.97,1.34l0.97,0.45l5.67,3.93l2.72,2.84l1.7,0.92l2.31,0.66l-0.34,1.84l-1.48,3.87l0.12,0.41l0.74,0.57l3.29,0.4l-1.48,1.08l-0.6,1.26l-4.13,-0.12l-0.74,0.49l-0.47,1.39l-0.48,0.77l-0.97,0.67l-1.73,0.29l-1.62,0.68l-1.11,1.7l-0.79,2.17l0.04,2.82l-1.39,1.93l-1.03,2.49l0.14,0.65l0.37,0.27l1.76,0.29l0.47,0.48l0.18,0.57l-0.1,0.81l-0.72,0.24l-1.31,0.01l-0.64,-0.28l0.32,-0.85l-0.3,-0.93l-0.72,-0.7l-0.47,-0.04l-1.13,0.71l-1.24,0.04l-1.41,0.69l-1.0,1.14l-0.71,0.32l-2.58,-0.13l-0.73,0.71l-0.6,2.36l-1.96,-0.05l-3.92,1.55l-1.77,-1.04l-2.45,0.34l-1.86,-0.07l-1.89,0.43l-2.25,-0.13l-0.76,-0.28l0.02,-2.29l-0.39,-1.31l-1.24,-1.24l-2.8,-1.58l-1.61,-0.43l-0.45,-0.8l-1.72,-0.82l-1.06,-0.12l-0.74,0.5l-0.85,-1.99l0.06,-1.19l0.32,-1.24l1.64,-3.84l-0.06,-0.83l-1.32,-1.32l-1.45,-0.78l-0.76,-1.55l-0.35,-0.22l-6.66,-0.08l-2.63,-0.68l-4.3,-1.77l-1.38,-0.7l-0.74,-0.73l-0.35,-0.11l-1.68,0.21Z",
        name: "Lithuania"
    },
    LU: {
        path: "M433.15,437.03l-0.05,1.41l0.48,1.32l1.68,1.88l1.01,0.65l1.98,0.66l-0.04,1.05l-1.0,1.07l-0.43,0.87l-0.47,2.14l-0.98,-0.51l-0.83,-0.08l-0.98,0.26l-0.69,0.55l-0.66,0.13l-2.45,-1.16l1.02,-1.75l-0.02,-0.42l-1.3,-2.07l-0.74,-0.75l0.23,-1.64l0.58,-0.74l1.03,-2.07l1.29,-1.3l1.16,0.19l0.17,0.33Z",
        name: "Luxembourg"
    },
    RO: {
        path: "M631.66,512.33l-0.58,-0.56l-1.04,-1.59l-2.98,-1.78l-1.3,-1.89l3.0,-0.64l1.59,0.53l0.76,-0.26l0.69,-0.51l0.67,-1.16l0.82,-0.18l2.69,0.29l1.42,-0.78l0.52,-0.55l0.46,-1.28l0.82,-0.3l0.26,-0.39l-0.15,-1.22l0.78,-1.78l1.18,-0.67l1.2,-0.98l0.13,-0.43l-0.23,-0.7l0.16,-0.43l2.13,-2.96l0.14,-1.37l1.69,-1.68l1.11,-2.8l1.64,-1.49l0.18,-2.0l1.41,-1.04l2.32,-2.6l2.53,-0.74l0.89,0.21l0.91,-0.16l0.99,-0.61l2.71,-2.55l2.29,-0.96l1.16,-1.36l0.58,0.03l2.92,1.64l3.47,-0.04l4.49,0.97l0.86,-0.12l1.63,0.64l1.41,-0.09l1.41,-0.47l1.29,-0.14l1.11,0.24l4.5,3.72l2.52,-0.5l1.41,-1.38l3.87,-1.47l9.43,-1.41l1.84,-2.27l0.38,-1.46l3.99,-0.91l1.2,-0.06l0.89,0.12l1.43,0.72l0.99,0.89l2.29,3.34l1.04,1.97l0.64,2.13l0.83,1.42l1.57,1.55l2.19,3.59l2.1,1.97l1.18,1.95l2.93,2.32l1.02,3.08l1.19,2.52l-0.22,2.16l0.27,1.0l-1.66,5.2l-0.28,2.9l0.21,2.54l0.55,1.94l0.04,0.88l-1.04,0.73l0.01,0.55l1.84,2.47l1.43,1.74l1.94,1.03l4.29,1.01l0.58,-0.12l0.27,-0.29l-0.23,-0.85l1.39,0.33l1.88,-0.54l2.6,-1.35l2.27,-0.26l2.07,0.76l1.65,1.62l-0.91,4.49l-0.93,2.04l-5.84,1.21l-0.37,-2.16l0.52,-0.66l-0.24,-0.64l-1.85,-0.24l-0.79,0.56l-0.53,0.79l0.37,1.96l-0.97,1.47l-0.07,1.37l-0.45,0.66l-0.09,0.63l0.45,0.45l0.39,-0.06l-0.18,0.42l-2.08,2.23l-0.78,1.52l0.18,5.12l-0.96,3.66l-2.42,-0.04l-2.03,-0.45l-2.21,-0.78l-2.16,-2.64l-0.42,-0.14l-1.86,0.48l-0.84,-0.66l-1.58,-0.38l-1.75,-0.01l-4.73,-2.44l-3.28,0.36l-4.86,1.03l-3.76,1.29l-3.9,2.3l-1.6,1.74l-1.7,0.86l-2.46,0.65l-4.49,-0.25l-9.87,-1.78l-2.85,0.5l-3.67,-0.38l-5.67,-1.11l-4.2,-0.34l-4.08,0.63l-0.45,-0.32l0.03,-0.96l0.46,-0.51l0.94,-0.46l0.63,-0.57l0.18,-0.76l-0.16,-0.37l-4.48,-2.72l-0.15,-0.7l-0.62,-0.59l-0.83,-0.34l-0.59,-0.56l-0.4,-0.79l0.08,-0.67l0.56,-0.68l0.71,-0.29l0.99,0.1l0.68,-0.28l0.2,-0.47l-0.33,-0.8l-1.13,-0.79l-2.23,-0.95l-1.99,0.5l-2.13,1.95l-1.09,0.23l-0.9,-1.21l-1.6,-0.77l-2.38,-0.28l-1.25,-0.44l-0.58,-0.76l-1.0,-0.58l-2.03,-0.57l1.83,-0.2l0.48,-0.55l0.05,-0.47l-0.23,-0.38l-2.12,-0.97l0.62,-0.23l0.36,-0.88l0.63,-0.63l0.18,-0.36l-0.11,-0.67l-0.98,-0.88l-2.71,-0.8l-1.0,-0.8l-0.8,-0.11l-0.93,-0.43l-3.06,-2.42l-0.13,-0.14l0.17,-0.72l-0.27,-1.04l0.17,-1.09l-0.06,-1.47l-0.37,-0.46l-0.49,0.03l-0.31,0.25Z",
        name: "Romania"
    },
    EG: {
        path: "M765.21,739.26l-0.4,0.48l0.36,0.35l1.86,0.2l4.19,-0.89l0.68,-0.86l0.41,-1.23l1.34,0.21l4.58,1.95l1.25,0.02l3.66,-1.23l0.28,0.16l-0.58,0.2l-0.2,0.94l-1.36,1.74l0.15,0.61l1.78,0.78l1.38,0.29l1.14,1.74l0.46,0.19l1.62,-0.52l1.02,-1.22l0.01,-0.5l-0.37,-0.48l3.21,2.54l1.24,0.57l1.18,-0.09l2.22,-0.63l0.72,0.08l2.8,-0.77l0.76,1.04l0.42,0.13l2.44,-0.68l3.95,-0.0l3.29,-0.79l3.67,-1.82l3.73,10.31l0.56,2.29l1.74,3.77l3.24,10.33l-0.62,0.57l-1.57,2.52l-1.61,7.53l-2.3,5.87l-0.29,3.76l-0.35,1.23l-7.32,0.0l-0.69,-0.58l-2.22,-3.01l-2.46,-2.02l-2.21,-2.53l-0.57,-1.74l0.0,-1.28l-1.02,-3.02l-0.79,-1.48l-2.75,-3.11l-0.77,-1.63l-1.21,-1.78l-1.01,-4.1l-1.1,-2.6l-0.57,-0.19l-1.26,0.72l-0.19,0.43l0.19,0.93l-1.04,1.47l-0.66,1.76l0.51,1.71l2.32,2.29l0.41,0.85l0.51,1.97l-0.08,2.75l0.46,1.22l1.67,2.05l1.59,3.32l1.67,1.79l2.46,3.47l2.38,2.38l-113.23,0.0l-0.01,-17.07l-1.55,-5.76l-0.86,-4.72l-1.23,-3.6l-0.1,-0.89l2.33,-3.72l1.16,-3.4l0.16,-1.61l-1.3,-4.24l-0.32,-3.88l3.52,-4.32l0.79,1.4l0.29,0.2l2.13,0.32l6.99,-1.61l18.22,3.61l4.0,2.48l1.2,0.33l2.7,-0.05l1.96,1.46l7.37,0.7l3.88,1.58l2.23,1.27l1.57,0.45l1.29,-0.08l1.61,-0.48l2.11,-0.94l2.25,-1.28l4.54,-3.2l1.48,-0.52l2.32,0.1l0.33,-0.19l2.2,-2.81l2.08,-0.2ZM783.73,738.59l0.24,0.14l0.29,0.3l-0.53,-0.44Z",
        name: "Egypt"
    },
    PL: {
        path: "M543.65,368.02l2.24,0.2l4.48,-1.73l7.75,-2.26l8.26,-2.12l3.9,-0.68l1.66,-1.47l1.11,-1.38l2.39,-2.09l4.31,-0.78l1.76,-1.08l3.39,-1.43l7.82,-1.63l3.25,-0.36l3.12,-0.04l2.21,1.0l-0.57,-0.04l-0.39,0.57l2.05,4.35l1.16,1.6l2.41,1.27l2.0,0.42l5.97,-0.69l2.69,-1.31l0.46,0.17l7.66,0.49l26.59,1.14l7.65,0.18l0.75,-0.23l0.65,-0.6l0.71,0.07l1.04,0.42l0.41,0.26l0.28,0.66l0.32,0.28l1.65,0.4l1.47,0.74l1.14,0.71l1.03,0.96l0.33,1.05l-0.04,2.27l1.64,6.67l2.6,6.11l1.31,4.41l0.39,3.77l-0.18,1.9l-0.61,0.58l-4.89,2.03l-1.01,0.69l-2.89,3.33l-0.47,1.1l0.51,0.99l3.51,1.58l0.61,0.54l1.24,0.64l0.6,0.91l-0.02,1.06l-0.57,1.63l0.2,1.32l-1.03,1.7l-0.08,2.01l1.61,3.05l0.23,0.8l-0.27,0.83l0.18,0.97l2.67,3.26l0.99,2.34l0.69,1.01l1.47,1.21l-0.27,0.34l-0.84,0.18l-0.48,0.6l0.04,0.47l0.87,1.06l0.61,1.75l-0.05,1.28l-0.44,0.36l-1.02,1.62l-3.57,0.67l-2.75,2.59l-1.34,1.01l-5.08,4.9l-4.48,5.17l-0.81,1.23l0.09,1.25l0.96,3.26l-0.36,2.22l1.95,1.75l-0.24,0.41l-2.87,-0.93l-1.5,-0.09l-5.93,-2.17l-0.67,-1.45l-1.17,-0.92l-2.5,-0.73l-1.1,-0.55l-3.95,-0.3l-3.67,0.18l-0.33,0.16l-1.01,1.31l-0.57,0.31l-0.92,0.04l-0.8,-0.21l-1.04,-0.75l-1.53,-0.38l-1.2,0.17l-1.5,-0.19l-0.82,0.12l-3.01,1.33l-0.84,0.92l-0.53,1.22l-1.56,-0.57l-1.82,0.42l0.34,-0.9l-0.2,-1.86l-0.81,-0.59l-1.18,-0.23l-2.06,-2.91l-0.63,-0.5l-0.48,0.01l-1.81,1.23l-0.87,0.37l-1.25,1.8l-1.91,0.05l-0.36,-1.5l-0.32,-0.28l-1.12,-0.17l-0.45,-1.77l-2.8,-2.47l-0.28,-0.84l0.08,-0.51l-0.37,-0.9l-0.76,-0.46l-2.28,-0.49l-0.66,0.22l-1.24,-0.83l-1.3,-0.45l-0.68,-0.67l-0.47,-0.14l-0.89,0.68l-1.27,0.41l-0.83,-0.47l-0.64,-0.91l-0.89,-0.78l-0.78,-0.32l-0.18,-0.17l1.22,-0.48l0.56,-0.84l-0.17,-1.46l-0.42,-0.42l-0.43,0.0l-0.59,0.37l-1.27,0.34l-1.7,0.16l-3.57,-2.18l-2.32,-0.67l-1.42,-0.21l-0.39,0.18l-0.17,0.62l1.62,2.71l-1.85,0.82l-1.61,1.27l-0.46,0.24l-0.33,-0.05l-0.43,-0.26l-1.49,-2.24l-2.01,-2.01l-1.46,-0.59l-0.1,-0.19l0.71,-0.74l1.08,-0.38l0.91,-1.37l-0.16,-0.72l-1.84,-1.31l-3.19,0.41l-0.65,0.25l-0.82,-0.97l-0.67,-0.11l-2.18,-1.1l-5.03,-1.25l-0.92,-1.11l-0.23,-1.26l-0.26,-0.31l-3.64,-1.01l-0.42,0.18l-0.19,0.43l0.01,1.78l-1.35,0.36l1.18,-2.06l0.65,-1.6l0.72,-3.12l-1.08,-3.23l-0.48,-0.66l-2.48,-1.15l0.28,-1.67l-0.27,-0.78l-1.3,-1.86l-0.24,-0.87l0.94,-1.3l1.05,-3.19l-0.13,-0.43l-0.54,-0.43l-0.12,-0.51l0.13,-1.2l-0.35,-0.77l-0.98,-0.65l-0.47,-0.55l-0.21,-0.66l0.18,-1.17l0.66,-1.74l-0.04,-0.36l-1.53,-2.24l-3.5,-2.48l-1.54,-1.59l0.1,-0.7l0.63,-0.77l1.41,-0.89l1.02,-1.45l0.65,-1.93l0.03,-1.7l-1.57,-5.02l-0.4,-2.51l3.71,1.43l0.56,-0.46l-0.4,-1.21l0.16,-0.84l-0.09,-1.29l-0.31,-0.36l-4.44,-0.86l-0.11,-0.47ZM603.72,353.39l0.65,0.34l-0.2,-0.07l-0.45,-0.27Z",
        name: "Poland"
    },
    LY: {
        path: "M507.02,713.68l1.65,0.75l2.05,0.37l6.38,3.57l2.05,0.45l4.43,0.42l5.33,-1.46l1.84,-0.24l3.38,1.34l1.59,0.4l2.5,0.1l4.28,1.22l1.03,0.4l2.49,1.94l1.38,0.67l8.88,1.79l1.1,1.07l1.17,2.15l0.07,2.86l1.82,4.75l1.39,1.96l1.62,1.68l1.77,1.01l3.95,1.45l4.54,0.58l4.47,0.19l7.64,1.98l6.46,2.28l1.67,1.15l3.2,1.09l6.52,5.39l3.62,1.86l2.67,0.4l2.5,-0.36l4.04,-1.87l1.73,-1.14l4.15,-4.73l1.38,-2.51l0.57,-1.79l-0.12,-1.9l-0.52,-1.66l-1.16,-1.71l-0.76,-2.09l-0.46,-3.81l0.61,-2.62l0.75,-1.56l1.18,-1.61l3.33,-3.15l3.35,-2.22l5.88,-2.9l3.39,-0.03l1.52,-0.33l2.92,-2.09l0.97,-0.07l1.66,0.51l4.66,-0.14l1.98,0.55l2.53,1.31l3.11,0.8l4.33,1.74l0.47,2.27l-0.25,0.77l-0.06,0.99l0.16,0.35l2.63,1.85l6.89,0.83l1.27,0.44l1.96,1.38l1.34,0.44l4.75,0.19l2.77,-0.29l2.53,0.46l0.86,0.41l0.91,0.96l1.52,3.1l-2.8,3.27l-1.13,1.65l0.34,4.12l1.3,4.24l-0.16,1.35l-1.1,3.18l-2.03,3.05l-0.38,1.0l0.13,1.12l1.23,3.6l0.85,4.69l1.54,5.69l0.0,16.96l-204.27,0.0l-0.63,-7.84l0.36,-6.05l-0.51,-3.13l-0.82,-2.88l-1.45,-3.99l-1.32,-2.44l-2.98,-4.38l2.47,-1.47l3.87,-1.66l1.34,-0.78l4.43,-6.01l0.54,-1.22l0.04,-1.35l-0.2,-1.42l-1.7,-6.3l0.52,-1.06l1.51,-2.02l2.74,-0.78l0.98,-1.07l0.88,-1.86l2.06,-1.28l0.81,-0.93l9.31,-5.16l0.42,-0.9l0.01,-0.96l-1.08,-1.87l0.07,-3.71l0.56,-3.74Z",
        name: "Libya"
    },
    CH: {
        path: "M479.62,482.62l1.14,0.8l-0.18,1.0l-1.08,2.02l-0.61,1.74l0.03,2.1l0.41,0.33l1.74,0.08l2.81,0.78l0.54,1.22l1.69,0.93l1.85,0.58l1.02,-0.27l2.12,-1.93l0.51,0.2l0.43,0.88l-0.64,2.62l-0.12,1.27l0.56,0.97l-0.02,0.65l-1.65,-0.23l-1.29,-0.99l-0.87,0.13l-0.92,0.48l-0.68,2.2l0.1,0.6l0.55,0.63l0.33,0.87l0.41,1.65l-0.69,0.02l-0.88,-1.43l-0.7,-0.74l-0.91,-0.09l-3.29,1.21l-1.21,-0.13l-0.52,-0.58l-0.68,-2.14l-0.42,-0.32l-1.84,-0.17l-0.6,0.35l-0.2,0.34l-0.12,3.09l-0.58,1.03l-2.45,2.84l-0.31,0.71l-0.07,0.81l0.58,1.67l-0.72,0.36l-0.41,-0.33l-0.34,-1.03l-1.21,-1.09l0.49,-0.82l-0.08,-0.63l-0.28,-0.24l-2.31,-0.55l-2.33,-2.15l-0.21,-0.48l-0.03,-2.52l-0.6,-0.57l-0.93,0.09l-1.05,0.77l-0.87,1.01l-1.9,1.26l-0.23,0.68l0.55,1.27l-1.71,2.33l-2.51,1.44l-3.29,-0.92l-3.01,1.12l-2.56,0.51l-0.83,-0.33l-0.34,-0.27l-0.91,-1.53l-2.35,-2.36l0.54,-1.67l-0.64,-1.73l0.1,-0.55l-0.18,-0.41l-0.4,-0.21l-2.44,-0.37l-2.11,0.11l-1.59,0.66l-1.5,1.42l-0.04,0.36l0.53,0.94l-0.73,0.74l-1.4,0.72l-1.06,0.03l-0.01,-0.52l0.75,-0.35l0.93,-0.9l0.38,-1.74l-0.82,-1.03l1.24,-2.71l3.31,-2.41l0.66,-3.3l2.81,-1.33l0.39,-0.64l3.54,-3.54l0.68,-0.97l0.09,-0.55l-0.34,-0.51l-0.94,-0.37l0.69,-0.76l1.01,-0.54l0.9,-0.01l0.3,0.54l0.48,0.36l1.14,0.2l1.14,-0.15l1.04,-0.38l1.17,-1.66l1.37,-0.65l1.08,0.36l3.11,0.1l2.31,-0.21l1.45,-0.53l1.63,0.0l1.13,0.29l0.71,-0.11l0.42,-0.3l1.0,-0.18l0.42,-0.42l0.01,-0.53l-0.38,-0.39l-1.52,0.06l-0.27,-0.16l0.3,-0.51l0.85,-0.52l0.69,-0.12l0.45,0.12l1.64,1.17l0.36,0.03l0.55,-0.29l0.28,0.12l0.63,0.75l0.33,0.13l3.96,-0.25l4.54,2.48Z",
        name: "Switzerland"
    },
    GR: {
        path: "M728.08,670.66l-0.79,0.26l-0.27,-0.4l0.51,-1.56l-0.52,-1.53l0.72,-0.63l0.51,-0.91l1.23,-0.97l3.7,-1.26l-0.01,0.43l-1.11,2.37l-1.0,1.2l0.08,0.93l-1.45,0.33l-1.6,1.75ZM727.96,660.69l0.31,-0.19l-0.05,0.46l-0.26,-0.27ZM717.45,657.54l2.45,-1.2l0.79,0.06l-1.35,0.58l-0.57,0.47l-1.31,0.09ZM718.65,675.52l0.9,2.17l-0.39,0.1l-0.45,0.53l0.1,-1.01l-0.52,-1.15l0.37,-0.64ZM711.88,642.87l0.32,-0.37l1.26,-0.4l0.98,-0.02l1.6,0.5l1.03,0.08l0.06,0.28l-0.73,0.12l-1.68,0.81l-0.54,-0.13l-1.08,-0.79l-1.23,-0.07ZM716.41,654.11l0.54,0.48l-0.03,0.04l-0.63,0.1l0.12,-0.63ZM708.43,617.81l-0.18,0.72l0.13,0.4l1.83,1.52l0.65,1.19l-0.81,-0.3l-0.49,0.49l0.43,0.99l-0.37,0.12l-0.95,-0.02l-2.94,-0.78l-0.36,-0.44l1.51,-1.07l0.47,-0.63l-0.34,-0.63l-1.6,0.18l-1.24,1.38l-1.92,-0.59l-0.59,-0.58l0.65,-1.02l1.36,0.04l0.99,-0.34l1.05,-0.45l0.25,-0.65l1.92,-0.12l0.56,0.56ZM623.87,612.82l0.81,0.1l0.84,-0.47l0.47,-0.56l0.3,-1.23l0.8,-0.02l0.42,-0.51l-0.08,-0.84l-0.89,-1.74l0.81,-0.52l0.37,-0.52l2.5,-0.46l0.86,-0.64l0.93,-2.94l1.11,-2.31l1.85,-0.75l0.87,-1.26l0.42,-1.01l0.03,-0.73l-1.01,-1.95l0.07,-0.75l4.52,-0.26l1.18,-0.64l2.45,0.55l2.71,-1.28l2.13,-2.58l0.71,-0.31l1.91,-0.15l0.66,-0.28l2.77,0.55l1.44,0.08l3.19,-0.98l0.25,-0.3l0.38,-2.03l0.18,-0.14l4.88,0.17l1.31,-1.02l2.47,-0.21l2.83,0.18l1.72,-0.42l1.59,-0.68l1.16,0.05l0.71,-0.17l0.49,-0.38l0.23,-0.68l4.19,0.07l1.53,-0.5l1.02,1.67l2.5,1.47l0.48,-0.04l0.77,-0.49l1.82,0.43l1.82,0.77l1.87,1.21l3.75,-0.91l2.61,-0.24l0.83,-0.24l1.97,0.27l1.94,-0.63l1.02,-0.61l0.46,-1.18l-0.17,-1.48l-0.44,-1.41l-0.57,-0.89l0.35,-0.54l1.04,-0.24l2.68,0.72l1.11,1.0l1.06,0.53l0.5,2.84l-0.19,0.48l-0.81,0.19l-2.79,1.69l-0.19,0.32l-0.07,1.58l0.1,1.3l0.29,0.52l0.0,0.43l-0.24,0.54l-2.03,2.03l-0.89,1.16l-0.56,0.18l-0.34,-0.5l-2.25,-1.26l-4.82,-0.7l-2.28,-0.88l-1.1,0.12l-2.16,-0.96l-1.44,0.48l-2.75,1.7l-1.32,-0.16l-1.58,-1.02l-1.46,-0.22l-1.39,0.65l-1.98,1.99l-1.88,0.91l-1.8,-0.37l-2.49,0.01l-0.39,0.31l-0.22,1.44l0.54,0.87l1.13,1.12l-0.47,0.74l-0.02,0.38l0.47,1.01l0.99,0.39l-1.39,-0.11l-1.3,0.61l-0.32,1.0l0.12,0.35l1.4,1.3l1.87,1.38l0.37,1.18l-0.35,0.48l-1.18,-0.71l-2.27,-3.16l-3.48,-0.8l-0.39,0.14l-0.54,0.67l-0.06,0.39l0.64,1.71l0.62,0.86l2.45,1.61l-2.93,-0.93l-0.8,-1.4l-0.21,-1.94l-0.22,-0.32l-5.5,-2.86l-0.45,-1.08l0.46,-0.5l0.4,-1.07l-0.43,-0.54l-1.68,0.27l-0.91,0.65l-1.49,0.64l-0.24,0.34l-0.06,1.08l0.22,1.0l-0.48,1.39l-0.49,2.52l0.31,1.49l3.35,3.9l1.1,2.68l0.86,1.13l1.73,1.2l1.71,2.07l0.7,1.04l0.44,1.49l-1.16,0.88l-0.56,0.03l-0.15,-0.15l0.57,-1.22l-0.31,-1.06l-2.29,-1.17l-1.37,0.42l-1.12,0.76l-0.14,0.5l0.64,1.41l0.72,0.95l0.34,1.2l0.45,0.29l-0.74,0.57l-1.61,0.68l-2.76,0.18l-0.61,0.48l0.16,0.67l1.6,0.3l1.19,0.76l3.27,0.91l1.74,1.2l1.38,0.09l1.7,2.15l2.57,0.54l1.7,2.19l2.02,0.42l1.63,0.73l0.41,0.6l0.24,1.26l0.11,2.87l0.38,2.18l-0.07,1.48l-0.27,0.28l-0.29,0.01l-1.21,-1.49l-4.01,-3.64l-0.66,-0.41l-0.66,-0.09l-1.28,0.69l-3.11,0.54l-1.92,0.86l-0.41,0.62l0.17,0.49l0.62,0.37l0.68,0.75l0.04,1.25l0.68,1.51l1.09,0.59l1.24,0.0l0.4,0.17l0.21,0.58l0.95,1.03l-2.89,0.89l-1.09,0.62l-0.47,-0.26l-0.04,-0.98l-0.2,-0.33l-2.13,-1.2l-1.23,-0.26l-0.95,-0.77l-0.53,0.03l-0.67,0.67l-0.11,0.37l0.54,2.33l1.21,1.72l1.93,4.24l0.87,2.48l0.16,1.11l-0.37,2.26l1.29,2.3l-1.48,-1.02l-1.97,-2.38l-0.69,-1.49l-0.31,-0.23l-0.85,-0.12l-1.59,0.22l-0.3,0.22l-1.62,3.29l-0.04,1.39l-0.21,-0.11l-0.53,-0.44l-0.06,-2.98l-1.96,-2.81l-0.93,-0.41l-1.11,-1.88l-0.41,-0.16l-1.04,0.23l-0.97,0.71l-0.29,2.85l-0.28,0.5l-1.68,-1.57l-2.02,-3.26l-0.05,-1.6l1.43,-1.58l0.1,-0.33l-0.24,-1.37l-1.56,-2.52l-2.1,-1.55l-1.1,-0.44l-0.63,-1.66l-1.13,-0.85l-0.83,-0.37l-0.07,-0.24l2.41,-2.02l1.21,-2.49l0.32,-0.06l1.42,0.61l1.49,-0.17l1.46,-1.68l0.88,-0.72l1.5,0.09l3.86,2.05l4.28,1.21l2.03,1.0l1.29,1.08l1.71,0.38l0.46,-0.42l-0.23,-1.23l0.38,-0.17l2.18,0.02l0.74,-0.53l0.42,-0.59l0.0,-0.46l-0.47,-0.67l-1.03,-0.49l-1.47,-0.29l-0.73,0.18l-1.18,-0.46l-1.13,-0.88l-2.27,-0.86l-2.15,-1.45l-0.57,0.13l-0.44,0.74l-0.71,0.36l-1.11,0.06l-3.72,-0.92l-2.15,0.71l-2.11,0.21l-2.13,0.47l-0.94,-1.15l-0.45,-1.01l-0.49,-0.38l-0.6,0.34l-0.02,0.91l-0.25,0.55l-1.28,0.35l-0.68,-0.45l-1.66,-4.25l-1.61,-1.93l-1.24,-0.53l-0.08,-0.77l0.07,-0.5l1.17,-0.16l2.36,0.85l0.88,-0.23l0.55,-0.41l0.16,-0.37l-0.11,-0.91l-0.39,-0.92l-0.34,-0.24l-2.63,-0.11l-1.94,0.42l-0.66,-0.31l-0.34,-0.52l-1.59,-1.25l-1.38,-1.68l-2.27,-1.18l-1.43,-3.35l-1.02,-1.26ZM675.17,600.88l1.34,-0.04l2.3,1.22l1.04,1.37l-1.41,-1.3l-1.36,-0.37l-1.91,-0.87ZM707.89,661.28l-0.16,0.18l-0.36,-0.26l0.41,0.1l0.11,-0.02ZM708.79,660.68l0.03,-0.08l0.05,0.06l-0.08,0.03ZM703.69,645.69l0.95,-0.85l2.02,-0.19l-0.73,0.47l-2.24,0.58ZM672.76,675.97l0.47,1.17l1.83,0.46l1.71,-0.13l0.86,-0.89l0.55,-0.01l0.13,0.28l-0.96,0.59l0.02,0.55l1.05,0.63l0.84,-0.04l0.28,0.97l0.84,0.59l1.91,-0.04l3.7,-0.9l3.66,0.22l1.49,0.98l2.58,0.12l2.39,0.5l3.4,-0.62l-0.19,2.06l0.14,0.77l0.84,0.58l0.89,-0.12l0.88,-0.75l1.68,-0.51l1.84,0.0l1.35,-1.09l-0.21,1.46l-0.45,1.56l-0.8,0.3l-4.51,-0.1l-8.47,1.01l-5.41,0.37l-0.4,-0.13l-0.14,-1.43l-0.43,-0.64l-3.49,-1.22l-7.93,-1.34l-2.54,0.18l-0.77,-0.02l-0.45,-0.25l-0.31,-0.42l-0.17,-1.69l0.27,-1.65l0.87,0.49l0.43,-0.08l0.58,-0.56l0.16,-1.18ZM702.17,634.63l0.83,-0.47l0.53,-0.8l0.03,-0.38l-0.51,-1.11l-1.37,-1.35l-0.04,-0.53l1.75,-0.34l1.57,0.89l-0.12,0.39l0.19,2.78l-0.62,0.53l-0.14,0.76l-0.95,0.65l-1.15,-1.03ZM698.48,599.9l-0.88,0.24l-0.94,-0.74l0.76,-0.25l1.05,0.74ZM696.85,654.58l-0.82,0.4l-0.56,-0.58l-0.35,-1.01l1.84,-1.64l0.35,0.34l-0.04,1.56l-0.43,0.92ZM695.75,663.45l0.09,0.3l-0.33,0.43l0.19,-0.35l0.05,-0.38ZM695.08,647.43l-0.75,0.06l0.03,-0.54l0.14,-0.09l0.93,0.36l-0.36,0.21ZM690.86,607.38l1.89,-0.07l0.57,0.64l0.49,0.09l1.51,-1.04l-0.52,0.64l-0.38,0.93l-0.18,1.09l-0.59,-0.12l-0.12,-0.88l-0.43,-0.38l-0.69,0.27l-0.36,0.77l-0.51,0.04l-0.54,-0.26l-0.14,-1.72ZM694.65,659.11l-0.68,-0.65l-0.17,-0.27l0.96,0.71l-0.11,0.21ZM693.06,653.23l-0.77,0.86l-0.51,-0.07l-0.15,-0.21l0.4,-0.81l0.94,-0.5l0.09,0.74ZM690.94,644.63l1.66,0.25l0.15,0.17l-0.25,0.51l-0.46,-0.08l-1.09,-0.84ZM689.21,642.46l-0.12,0.31l-0.69,-0.78l-1.09,-0.79l-0.39,-0.66l-0.69,-0.49l-0.1,-0.51l0.59,-0.25l0.74,1.01l1.24,0.26l-0.02,0.55l0.53,1.35ZM686.25,596.85l-1.26,0.42l-1.41,-0.87l0.01,-0.29l1.17,-1.42l0.98,0.08l0.69,0.96l-0.17,1.13ZM685.69,654.47l0.32,0.59l-0.13,0.1l-0.14,-0.27l-0.05,-0.42ZM682.97,623.8l0.51,0.29l0.25,0.93l-0.86,-0.54l0.1,-0.68ZM684.19,625.48l0.31,0.27l-0.27,0.07l-0.05,-0.35ZM661.66,625.04l3.1,-1.8l1.96,-0.47l1.2,1.04l0.73,1.64l0.92,0.78l1.51,0.69l0.76,0.11l2.51,1.21l3.0,0.27l1.17,1.85l0.09,0.35l-0.28,0.78l0.44,1.97l0.77,1.93l1.43,1.15l1.41,0.27l1.25,-0.03l-0.01,1.43l-0.63,0.53l-1.01,-0.67l-0.75,-0.06l-0.54,-0.6l-1.34,-0.84l-0.34,-1.37l-2.27,-3.04l-3.76,-0.18l-1.21,-0.55l-0.6,-1.8l-1.43,-0.89l-1.93,-1.94l-1.56,-1.08l-1.52,-0.72l-1.62,-0.47l-1.46,0.5ZM681.22,658.91l0.47,0.25l-0.55,0.09l0.08,-0.34ZM682.33,659.06l0.37,-0.41l0.36,-0.09l0.0,0.38l-0.73,0.12ZM682.94,652.14l-0.52,-0.06l0.1,-0.37l0.26,-0.16l0.24,0.11l-0.07,0.48ZM681.96,648.45l-0.28,-0.62l0.24,-0.28l0.32,0.46l-0.27,0.44ZM680.69,645.1l-0.29,0.25l-0.04,-0.3l0.43,-0.89l0.31,-0.03l-0.41,0.98ZM672.52,621.17l-0.6,-0.11l-0.2,-0.37l0.8,0.47ZM668.93,639.82l0.26,-0.51l0.33,0.09l0.1,0.32l-0.19,0.14l-0.5,-0.04ZM661.94,664.62l1.47,1.53l-0.51,0.98l-0.83,-0.28l-0.27,-0.48l-0.06,-1.34l0.2,-0.41ZM633.7,642.06l0.48,0.52l-1.17,0.88l-1.26,-1.0l-0.97,-1.4l0.5,-0.6l0.61,0.8l1.24,0.33l0.56,0.47ZM627.1,635.32l0.7,-1.67l0.38,0.34l0.43,0.08l0.52,-0.22l0.62,-1.27l0.25,1.95l0.26,0.34l0.85,0.3l1.1,1.42l-0.07,0.54l-1.85,-0.68l-0.97,0.24l-0.29,-1.09l-0.71,-0.88l-0.52,0.0l-0.69,0.6ZM630.95,631.66l0.08,0.09l-0.0,0.18l-0.08,-0.27ZM629.87,628.81l0.45,-1.93l0.49,-0.77l0.35,-0.18l0.06,2.57l-0.21,0.26l-1.14,0.06ZM620.81,615.41l-0.15,-0.1l-1.04,-1.97l-2.06,-2.14l-0.01,-0.26l0.56,-0.34l1.58,-0.31l0.9,0.56l-1.09,1.26l0.07,0.47l0.65,0.65l0.33,1.74l0.26,0.44Z",
        name: "Greece"
    },
    RU: {
        path: "M726.15,312.03l0.75,-1.97l0.11,-1.54l0.56,-1.41l0.63,-0.55l0.32,-0.69l0.13,-1.14l-0.13,-0.99l-0.62,-0.75l-3.35,-2.1l-0.53,-1.63l-0.74,-0.36l-1.19,-0.06l0.57,-2.1l1.17,-1.07l0.68,-1.42l2.7,-0.77l0.49,-0.4l0.15,-0.53l-0.31,-0.63l-1.16,-0.88l-0.38,-1.49l-0.99,-2.45l-0.92,-1.63l-0.17,-0.82l0.55,-2.09l0.03,-1.17l-1.41,-5.94l0.09,-0.96l0.37,-0.97l0.6,-0.81l1.49,-1.19l1.84,-2.14l1.93,-4.52l0.36,-0.26l1.24,-0.24l0.55,-0.74l0.77,-0.24l0.48,-0.45l0.07,-0.43l-0.32,-0.69l-1.43,-1.46l0.6,-1.35l-0.65,-3.35l0.43,-0.81l0.57,-0.06l1.12,1.2l1.66,0.65l0.37,-0.04l1.21,-0.84l0.54,-1.72l0.56,-0.46l1.07,0.55l1.95,0.23l1.69,-0.1l1.18,-0.36l0.64,-0.64l1.32,-2.14l0.76,-0.64l6.88,0.87l6.12,1.65l0.42,-0.15l0.47,-0.62l0.29,-1.23l-0.19,-0.42l-2.61,-1.39l-1.44,-1.91l-2.05,-1.51l-2.27,-0.21l-2.75,0.52l-3.91,-0.3l-3.38,-2.77l-2.3,-0.91l-1.57,-2.17l0.85,0.47l0.58,-0.26l0.39,-2.49l-0.14,-0.34l-0.99,-0.85l-0.94,-0.55l-0.37,-0.01l-4.47,2.15l-3.82,0.53l7.28,-6.51l3.44,-2.16l1.07,-1.18l6.97,-4.75l3.26,-3.23l2.7,-2.13l8.35,-8.72l3.51,-3.4l5.0,-4.11l3.43,-3.34l1.42,-1.93l2.06,-4.41l1.3,-2.3l0.09,-0.95l-0.47,-1.0l-2.34,-2.4l-2.18,-3.05l-2.83,-1.99l-7.52,-4.34l-4.87,-3.94l-0.6,-0.69l2.72,-1.22l4.0,-4.72l0.38,-1.46l-0.17,-2.73l-0.38,-0.9l-1.51,-1.2l-3.71,-1.77l-1.54,-3.23l-0.01,-0.49l1.82,-2.02l0.07,-1.07l-0.28,-1.12l-0.75,-0.87l-3.83,-0.84l-0.98,-0.81l-0.82,-1.36l-0.42,-1.16l-0.04,-0.6l0.22,-0.63l2.4,-1.41l0.44,-1.18l-0.01,-0.89l-0.25,-0.6l-0.29,-0.22l-2.33,-0.4l-0.08,-0.15l1.34,-1.73l0.27,-3.17l1.19,-2.04l-0.08,-0.5l-1.02,-0.91l1.69,-0.51l2.92,-0.41l0.29,-0.35l0.1,-1.0l-0.21,-1.45l-2.56,-6.99l-3.15,-4.16l-1.06,-1.77l-0.64,-1.89l-1.11,-2.13l-2.34,-3.73l-2.68,-3.45l-0.31,-0.84l0.25,-1.57l2.07,-2.8l4.43,-5.2l5.01,-5.15l0.73,-3.16l-0.28,-0.7l-2.11,-1.5l-3.99,-4.03l-2.62,-3.21l-8.77,-2.94l-2.79,-6.73l0.1,-0.97l3.69,-5.53l0.35,-1.0l-0.04,-0.79l-0.49,-0.63l-0.66,-0.31l-3.36,-0.18l-0.09,-0.13l1.57,-0.44l4.49,-1.92l2.96,-0.95l0.82,-0.57l0.66,-0.76l2.3,-4.62l5.89,-1.46l2.34,-0.84l1.33,-1.04l1.09,-1.73l0.48,-2.01l-0.34,-0.97l2.29,1.18l3.2,1.25l2.48,0.12l1.09,-0.25l0.77,-0.81l0.37,-1.19l0.01,-1.2l-0.61,-2.61l1.82,0.26l5.43,1.91l1.54,-0.18l1.81,-0.72l1.58,-2.18l0.98,-0.31l1.48,0.49l0.45,-0.15l0.44,-0.61l0.04,-0.39l-0.78,-1.78l0.08,-0.38l5.05,1.88l2.44,1.53l5.02,1.3l0.69,0.55l0.05,1.01l-0.19,0.84l-0.82,0.45l-2.04,-0.09l-7.8,-1.64l-0.34,0.09l-1.16,1.0l-0.01,0.6l1.05,0.93l2.14,0.95l0.58,1.64l0.41,0.27l3.46,-0.24l3.3,0.68l1.42,-0.18l-0.88,1.41l0.08,0.55l0.89,0.44l3.73,-1.44l1.6,-0.36l0.6,0.25l0.09,0.86l-0.58,1.41l-0.09,1.2l-1.07,2.55l-1.81,0.91l-0.75,1.15l0.01,0.45l0.43,0.15l2.61,-0.7l1.48,-0.8l2.69,-3.85l0.61,-0.4l7.25,-0.07l1.62,0.24l6.91,1.78l2.04,0.17l2.33,-0.23l0.96,-0.88l0.56,-0.17l7.57,1.96l10.28,4.47l15.04,7.36l8.43,6.46l1.18,1.5l3.08,0.79l0.85,-0.48l1.46,0.4l10.12,5.95l3.45,0.31l0.41,-0.54l-0.6,-1.55l0.93,0.68l1.94,2.34l2.29,1.69l2.34,2.53l1.51,0.78l0.0,30.64l-5.15,3.01l-10.98,3.76l-8.56,1.41l-3.42,0.1l-6.69,-0.7l-3.63,-0.75l-4.48,-2.13l-4.29,-1.1l-2.98,-0.49l-5.35,-0.2l-11.6,-2.1l-1.96,-0.72l-7.29,-4.12l-0.35,-0.02l-2.86,1.15l-1.46,0.18l-0.78,-0.94l0.53,-0.72l-0.24,-0.58l-4.14,-1.18l-3.43,-0.09l-1.8,-0.99l-2.23,-0.77l-1.59,0.44l-4.38,-1.76l-1.93,-1.41l-1.89,-2.33l0.92,-1.16l-0.19,-0.68l-7.27,-1.52l-6.84,-0.2l-0.4,0.29l0.18,0.46l1.19,0.72l3.05,0.43l3.73,2.29l-0.44,1.73l0.17,0.43l3.0,1.97l2.18,1.77l0.29,0.74l1.0,0.42l3.18,0.51l0.44,1.29l-0.42,0.51l-0.05,0.43l0.67,1.15l2.55,1.07l2.94,0.78l-0.52,0.8l-1.44,0.78l-1.53,0.38l-0.3,0.36l0.24,0.4l0.93,0.34l1.98,-0.12l7.3,2.13l3.81,2.13l3.89,3.9l1.2,1.84l0.08,0.92l-0.2,0.97l-2.15,5.68l-0.9,1.1l-1.83,1.32l-0.1,0.55l3.58,5.02l1.76,3.94l0.31,1.54l0.07,2.44l0.19,0.33l1.05,0.63l-0.89,1.1l0.25,3.45l2.37,2.71l3.37,1.69l2.28,0.38l2.79,-0.66l1.95,0.87l4.57,3.12l2.06,3.28l1.09,0.86l8.27,2.02l5.37,1.99l1.05,0.1l2.82,-1.76l4.45,-1.19l1.69,-2.08l-0.15,-1.55l-1.13,-2.46l-0.48,-2.68l-1.49,-1.01l-1.45,-0.7l-4.41,0.47l-1.79,-0.09l-1.31,-0.61l-1.88,-1.7l-3.66,-4.27l-1.98,-1.45l-0.57,-0.81l-0.62,-1.12l0.06,-1.49l1.44,-0.01l1.8,-1.14l1.41,-4.09l2.0,-0.46l1.11,0.03l5.14,1.86l6.58,5.08l1.56,0.56l3.82,-0.04l0.42,0.59l1.34,0.79l7.02,1.73l7.13,3.16l2.59,-0.14l0.32,-0.2l1.02,-1.74l0.21,-0.69l2.64,-1.63l1.82,-0.27l2.7,0.62l0.38,-0.11l0.56,-0.8l0.0,400.08l-4.46,-0.79l-1.09,0.42l-1.26,1.88l-1.04,-0.64l-4.8,-4.18l-2.57,-2.84l-8.3,-6.49l-1.27,-0.57l-4.36,-0.93l-1.66,-0.71l-4.42,-4.6l-0.41,-0.1l-1.91,0.6l-1.66,-0.15l-0.97,-0.38l-1.06,-0.62l-0.72,-0.8l-0.9,-1.9l-1.27,-1.31l-3.61,-1.66l-3.84,-0.92l-0.2,-0.37l3.1,-1.0l1.03,-0.69l-0.05,-0.69l-2.45,-1.01l1.22,-0.52l1.34,0.65l1.67,1.33l1.61,0.58l0.4,-0.09l0.61,-0.57l5.08,-1.09l0.29,-0.24l0.35,-0.88l0.01,-1.14l-0.43,-0.39l-0.41,0.0l0.02,-0.79l0.7,-1.38l2.37,-2.55l1.21,-3.3l0.78,-0.55l0.38,0.25l0.1,1.27l0.32,0.31l0.41,-0.18l1.33,-2.52l1.44,-0.01l1.3,0.26l1.25,-0.18l0.24,-0.67l-2.44,-2.61l-3.22,-2.59l-1.55,0.09l-0.65,-0.3l-1.32,-2.0l-0.39,-1.18l2.35,0.25l2.55,-1.22l0.82,-0.15l3.64,0.63l0.44,-0.46l-0.18,-1.17l-0.52,-1.11l2.18,-0.86l2.35,-0.58l4.37,-1.99l1.9,-0.35l0.28,-0.2l0.29,-0.61l0.03,-0.79l-0.68,-1.65l-0.66,-1.19l-0.34,-0.21l-2.33,-0.06l-0.33,0.15l-1.2,1.53l-3.33,0.51l-0.55,-0.04l0.44,-0.37l1.36,-0.51l0.35,-0.44l0.03,-0.45l-0.41,-0.19l-2.51,0.39l-1.4,1.14l-3.14,1.23l-0.09,-0.82l0.19,-0.44l0.63,-0.48l0.26,-0.87l-0.27,-0.38l-0.79,-0.35l0.71,-1.44l0.05,-1.27l0.34,-1.2l0.91,-0.72l1.93,-0.23l1.85,-0.8l1.15,-0.93l1.32,-2.0l0.85,-0.25l6.6,0.37l4.71,-0.19l0.87,-0.89l0.05,-1.5l1.42,-3.4l0.99,-1.16l0.05,-0.83l-0.24,-0.34l-1.24,-0.38l0.56,-0.88l-0.11,-1.1l-0.64,-2.15l-1.15,-0.75l-1.32,-0.29l0.66,-2.07l0.97,-0.98l1.32,0.21l1.24,-0.24l0.46,-0.36l0.09,-0.43l-0.46,-0.76l-3.06,-1.04l-0.67,-1.1l2.56,-0.9l2.44,-2.39l0.59,-0.98l0.31,-1.08l-0.01,-1.2l-0.93,-1.24l0.0,-0.89l0.48,-1.04l-0.19,-0.6l-1.1,-0.63l-1.07,0.13l-1.03,0.38l-1.12,-0.07l-4.23,-2.7l-2.19,-0.27l-1.68,-1.96l-0.37,-0.07l-1.93,0.64l-1.31,-0.1l-3.56,-2.2l-2.76,-0.26l-2.76,-1.58l-0.96,0.15l-0.52,0.67l-0.27,1.26l-1.02,0.25l-4.44,-3.21l-1.26,-1.76l-0.43,-1.51l-2.37,-2.21l-1.25,-0.09l-2.83,1.16l-1.96,0.22l-3.11,0.85l-1.8,1.39l-1.55,-1.19l-1.78,-0.29l-0.86,0.24l-0.63,-0.41l-0.78,-1.02l-1.17,-0.8l-3.28,-0.48l-1.33,0.59l-1.5,0.96l-0.78,-0.28l-0.55,-1.12l-0.87,-0.5l-0.93,-1.27l-0.22,-1.05l0.59,-1.13l0.05,-1.0l-0.34,-0.87l-0.47,-0.59l-0.48,-1.8l-0.42,-0.83l0.2,-1.4l-0.59,-0.57l-1.49,-0.01l-0.34,-0.19l-0.8,-1.97l-0.48,-0.57l-1.35,-0.09l-3.1,0.57l-0.52,-0.04l-2.96,-1.15l-3.32,-0.13l0.6,-0.53l0.05,-0.87l-0.67,-0.61l-0.25,-0.82l-0.08,-2.4l-1.12,-1.88l3.23,-0.64l0.55,-0.61l0.0,-0.97l-3.92,-3.8l-1.29,-3.12l-1.31,-1.82l-1.47,-1.24l-1.22,-0.59l-3.98,0.16l-2.32,-0.36l-1.88,0.24l-3.42,1.53l-1.13,0.06l-3.97,-1.0l-1.1,0.01l-0.73,0.25l-0.54,0.52l-1.12,2.88l-1.96,1.03l-1.84,0.07l-2.57,-0.94l-1.02,-2.05l-1.46,-1.55l0.1,-3.66l0.23,-0.14l0.11,-0.59l-1.15,-1.49l-0.07,-0.9l0.58,-0.74l-0.03,-0.72l-0.48,-0.81l-3.5,-3.76l1.74,-2.86l3.23,-0.09l0.87,0.25l0.43,0.66l1.18,0.83l2.79,0.31l1.39,-0.07l1.52,-0.71l2.38,-1.51l0.67,-1.14l1.34,-0.7l1.62,-0.42l0.33,-0.34l0.03,-1.61l-0.47,-0.85l-2.85,-1.78l-0.46,-0.98l0.32,-0.71l-0.01,-0.73l-0.23,-0.35l-3.52,-1.68l-2.83,-0.29l-2.3,0.09l-0.42,-0.16l0.81,-2.04l0.17,-1.22l-0.27,-0.89l-0.58,-0.55l-5.18,-2.56l-1.33,-1.67l-0.7,-1.81l-0.87,-1.24l-1.36,-0.72l0.98,-1.81l-0.1,-0.74l-0.53,-0.52l-1.84,-0.88l-2.36,-1.54l0.42,-2.01l2.06,-2.77l-0.01,-0.81l-0.31,-1.06l-1.9,-2.6l0.05,-0.61l1.13,-1.47l0.02,-3.52l-0.82,-0.83l-0.91,0.05l-0.92,-0.34l-1.26,-0.82l-2.4,-2.34l-3.02,-1.11l-2.72,0.14l-1.57,-0.15l-0.75,0.25l-0.88,0.75l-0.95,0.41l-0.89,0.05l-0.74,0.35l-1.8,1.14l-0.67,-0.55l-0.67,-0.93l0.54,-1.63l-0.05,-0.93l-0.47,-0.67l-1.25,-0.56l-2.67,-1.03l-0.89,-0.04l-1.34,0.43l-1.92,1.05l-0.45,-0.15l-1.32,-1.91l-1.12,-0.71l-2.42,0.01l-1.4,0.65l-1.56,-1.4l0.66,-2.19l-0.45,-2.46l-0.89,-3.03l-1.34,-1.21l-0.23,-0.86l-1.31,-1.81l-0.13,-1.47l-0.53,-0.78l-0.98,-0.41l-1.57,0.36ZM899.6,149.08l-0.91,-2.51l-1.31,-2.3l-1.94,-1.53l-3.3,-4.18l-1.3,-2.04l-0.62,-2.02l0.83,-3.03l6.79,-3.36l1.76,-1.43l0.0,22.4ZM836.19,140.74l0.33,0.65l0.12,1.25l-0.38,0.82l0.11,0.76l-0.3,0.19l-1.12,-1.49l-0.96,-0.18l-0.66,-0.6l-0.26,-0.83l0.79,0.0l1.49,-0.81l0.85,0.25ZM617.41,357.73l1.54,-1.2l1.4,-1.73l1.16,-2.18l0.41,-3.11l1.52,-0.56l4.03,0.06l1.68,-0.82l1.35,-1.25l-0.8,0.85l0.13,0.64l1.12,0.5l1.36,0.19l1.62,0.72l1.47,0.13l2.74,-0.62l0.31,-0.33l0.62,-5.87l1.57,-0.18l0.74,0.71l1.5,0.76l4.31,1.78l2.75,0.72l6.56,0.09l0.88,1.63l1.44,0.77l1.05,0.95l0.05,0.36l-1.6,3.77l-0.37,1.44l-0.04,1.47l0.9,2.13l-34.03,-1.32l-7.35,-0.47Z",
        name: "Russia"
    },
    IQ: {
        path: "M899.6,732.04l-1.3,-0.59l-15.78,-2.66l1.38,-1.24l0.11,-0.44l-0.61,-1.62l-0.45,-0.25l-2.45,0.58l-0.57,-1.76l0.64,-0.19l0.27,-0.49l-3.77,-13.0l22.55,-12.68l0.0,34.33Z",
        name: "Iraq"
    },
    IS: {
        path: "M31.07,119.93l0.41,-0.27l0.37,-0.88l0.71,-0.26l0.9,-0.01l0.94,0.31l3.13,1.76l0.35,0.38l0.11,0.48l-0.12,0.97l0.13,0.33l0.46,0.24l1.15,-0.26l0.9,0.31l0.71,-0.08l1.28,-1.18l0.53,0.18l0.52,0.85l-0.08,2.46l0.67,0.18l0.76,-0.74l1.34,-0.06l0.35,-0.24l0.23,-0.58l0.04,-1.63l-0.12,-1.34l-0.22,-0.45l-5.08,-2.02l-1.59,-1.09l0.78,-0.38l1.36,-0.15l3.31,0.02l0.54,-0.25l0.04,-0.67l-0.81,-0.55l-1.45,-0.29l-0.34,-0.57l-0.44,-0.27l-1.8,0.29l-1.98,0.01l-1.51,-0.25l2.03,-1.36l0.62,-0.21l2.25,0.17l2.17,-0.28l1.66,0.32l3.37,2.7l2.76,1.15l4.63,3.74l2.86,1.41l-1.29,0.66l-0.13,0.64l0.46,0.4l1.39,0.34l0.89,0.81l-0.88,3.03l-0.82,0.74l-2.59,-0.53l-0.41,0.17l0.0,0.45l0.8,1.09l1.88,0.98l0.23,0.3l-0.17,0.33l0.15,0.53l0.58,0.16l0.43,-0.18l-0.35,1.33l-0.45,0.57l0.1,0.7l0.4,0.21l1.27,0.05l0.95,0.72l1.35,3.36l0.72,-0.03l0.75,-2.67l0.28,-0.71l0.75,-0.57l0.78,-2.62l1.71,-1.48l0.77,-0.43l0.63,-0.08l1.72,1.83l1.05,0.29l0.7,-0.3l0.61,-1.18l0.77,-2.27l0.17,-2.52l-0.4,-2.63l0.22,-1.76l0.73,-0.96l0.91,-0.28l1.25,0.39l0.94,0.63l2.01,2.62l3.17,2.98l0.89,0.55l1.58,0.24l0.6,-0.25l0.32,-0.5l0.13,-0.71l-0.3,-3.74l0.35,-1.06l0.47,-0.67l2.45,-0.49l1.46,-0.57l1.32,-0.85l1.02,-0.43l0.74,-0.05l0.79,0.29l0.9,0.69l1.47,1.41l1.88,2.38l2.41,1.8l1.51,3.25l0.57,0.25l0.7,-0.5l0.27,-0.64l0.06,-1.56l-0.69,-1.71l-2.22,-4.14l0.12,-0.95l1.31,-0.06l3.59,0.38l1.06,0.59l2.5,2.56l1.27,0.86l2.2,-1.44l3.52,-3.91l0.88,0.12l1.88,1.21l1.36,0.43l1.36,-0.19l1.64,-0.88l1.85,-0.54l0.89,-1.48l0.16,-0.68l-1.46,-3.81l0.41,-0.5l3.14,-0.9l2.77,-0.07l0.53,0.2l3.52,3.35l0.29,1.8l0.83,0.66l1.57,0.72l1.69,0.07l2.54,-0.77l1.17,-0.56l2.56,-1.73l1.42,-0.45l1.92,0.1l-1.26,0.29l-1.68,1.06l-1.69,2.48l-1.27,1.44l0.2,0.85l1.53,0.97l1.58,0.53l1.58,-0.44l0.4,0.12l0.46,0.56l0.33,1.12l-0.24,1.28l-0.81,1.31l-1.14,1.15l-0.08,0.45l0.17,0.37l0.29,0.23l1.09,0.19l4.66,-0.73l0.41,1.5l0.38,0.52l-0.07,0.28l-1.88,1.77l-0.05,0.52l0.51,0.13l2.27,-1.14l1.71,-0.31l3.01,0.56l1.14,0.59l0.69,1.09l0.47,0.16l1.26,-0.35l0.48,0.46l0.02,0.45l-0.47,0.93l-0.19,0.89l-1.5,0.63l-0.29,0.32l-0.05,0.48l1.16,1.48l1.0,0.19l-0.24,0.7l-1.16,0.7l0.08,0.68l2.27,1.05l0.19,0.64l-0.48,1.12l-0.53,0.32l-1.6,0.07l-1.19,0.49l-0.2,0.53l0.32,0.68l-0.02,0.83l-0.28,1.02l-1.26,1.62l-1.18,0.86l-1.1,0.53l-2.03,-0.19l-1.14,-0.44l-0.54,0.41l0.11,1.26l-1.04,0.78l-0.14,0.44l0.23,0.76l0.37,0.41l-0.15,0.69l-0.53,0.88l-0.9,0.98l-1.02,0.6l-2.25,0.82l-1.83,1.28l-1.16,0.47l-3.2,-0.01l-3.29,0.86l-4.61,1.78l-3.14,1.45l-2.41,1.63l-3.11,2.58l-2.25,1.06l-3.96,0.53l-2.17,0.7l-7.28,1.32l-2.51,0.73l-1.63,1.96l-0.06,0.36l0.49,0.61l-0.73,0.94l-1.63,0.77l-0.64,-0.01l-0.93,-0.66l-0.7,-0.05l-0.55,0.49l0.36,0.92l-5.26,1.22l-8.0,-0.75l-7.17,-2.03l-2.4,-0.34l-3.23,-0.08l-2.63,-1.67l-1.15,-0.98l0.22,-0.77l1.09,-0.13l0.43,-0.31l-0.0,-0.49l-0.69,-0.87l-0.47,-0.12l-2.39,1.47l-0.55,-0.03l-0.77,-0.45l-0.03,-0.38l-0.35,-0.37l-1.96,-0.22l-1.67,-0.71l-1.64,-1.01l0.52,-0.39l0.0,-0.65l-0.33,-0.19l-0.75,-0.1l-1.27,0.2l-2.05,1.39l-0.72,0.27l-12.47,0.31l-3.6,0.27l-0.35,-0.56l-0.64,-3.09l0.36,-0.95l0.82,0.55l0.68,0.93l0.97,0.46l4.37,-1.03l1.83,-0.71l0.87,-0.73l0.9,-1.12l0.98,-0.63l1.93,-3.05l1.4,-0.87l1.88,-0.27l0.34,-0.36l-0.28,-0.41l-1.27,-0.41l-1.34,-0.02l-4.22,1.83l-0.51,0.0l1.48,-0.95l0.18,-0.44l-0.36,-0.3l-0.82,-0.06l-0.17,-0.18l-0.03,-0.6l0.62,-1.17l3.21,-1.73l1.31,-0.36l0.35,-0.36l-0.06,-0.61l-0.57,-0.35l-0.99,-0.14l-3.34,1.84l-2.33,0.61l-0.58,-0.1l-1.19,-0.67l-0.77,-0.91l1.13,-1.61l0.02,-0.47l-0.19,-0.28l-0.99,-0.3l-2.11,-1.31l-3.64,0.07l-8.59,-0.77l-1.83,0.35l-2.86,1.14l-1.62,0.35l-0.63,-0.2l-0.64,-0.54l-1.11,-1.62l0.13,-0.38l1.65,-0.51l2.39,0.23l2.79,-0.72l2.34,-0.27l1.5,-0.94l1.31,0.76l2.88,-0.83l0.97,-0.41l0.45,-0.48l1.23,0.38l1.26,0.03l1.48,-0.31l8.37,-0.29l0.85,-0.67l0.53,-0.78l0.5,-1.5l-0.28,-0.67l-0.47,-0.14l-3.45,1.35l-4.68,-0.73l-1.02,-0.58l2.26,-1.62l2.19,-1.13l3.34,-1.27l0.77,-0.48l0.26,-0.86l-0.23,-0.42l-2.19,-1.02l-4.15,0.23l-1.15,-1.19l-3.44,-0.72l-2.3,0.42l-1.42,-0.69l-2.96,1.01l-6.52,1.47l-3.87,1.32l-1.54,-0.79l-2.78,-0.94l-3.0,-0.29l1.48,-1.5l1.08,-0.27l1.12,0.14l2.43,1.18l1.66,0.37l0.45,-0.21l-0.1,-0.48l-1.92,-1.6l-0.12,-1.55l-0.74,-0.65l-0.44,-0.83l0.57,-0.09l1.55,0.35l4.18,1.93l1.95,-0.34l1.18,-0.74l1.42,-0.51l0.08,-0.71l-0.41,-0.27l-3.61,-0.1l-1.73,-0.37l-0.81,-0.49l-0.57,-0.68l0.81,-0.36l2.86,0.1l0.39,-0.25l-0.11,-0.45l-3.2,-2.57l-0.08,-0.24l0.21,-0.7l3.27,0.93l0.74,0.04l0.39,-0.24l-0.1,-0.45l-0.68,-0.63l-1.26,-0.8Z",
        name: "Iceland"
    },
    AL: {
        path: "M613.48,601.02l0.69,0.32l0.52,-0.17l0.25,-0.48l-0.24,-1.33l-1.29,-2.46l-0.07,-0.51l0.6,-1.93l1.08,-2.45l-0.07,-2.75l0.32,-2.07l-0.52,-3.06l0.7,-2.05l0.66,-0.59l0.41,-0.71l0.08,-2.58l-0.16,-0.32l-1.48,-1.12l-1.53,-0.24l0.21,-3.06l-0.41,-0.98l-0.56,-0.62l1.45,-2.47l1.94,-2.42l1.45,-2.18l0.37,-0.18l0.14,1.73l0.35,0.61l0.46,0.34l1.33,-0.11l2.5,-1.0l0.4,0.28l1.06,1.54l0.73,1.4l1.64,0.67l0.76,0.51l0.98,0.79l0.44,0.74l0.69,2.49l0.08,1.45l-1.02,3.38l0.14,2.01l-0.48,0.33l-0.42,0.87l0.57,2.03l-0.01,2.05l1.13,2.44l1.16,1.07l0.79,2.19l0.74,0.47l1.68,-0.2l0.64,0.18l0.26,0.54l-0.07,1.35l0.98,1.82l-0.0,0.39l-0.97,1.82l-2.03,0.9l-1.22,2.51l-0.81,2.73l-0.5,0.4l-1.88,0.25l-0.78,0.29l-0.48,0.6l-0.87,0.53l-0.22,0.36l0.04,0.62l0.92,1.95l-0.59,-0.06l-0.36,0.16l-0.49,1.55l-0.64,0.55l-0.79,-0.1l-1.52,-0.78l-0.08,-1.2l-0.42,-1.14l-1.56,-2.8l-5.09,-2.79l-1.09,-1.11l-0.61,-1.18Z",
        name: "Albania"
    },
    IT: {
        path: "M460.72,503.99l1.78,-1.15l0.96,-1.1l0.84,-0.61l0.38,-0.01l0.0,2.36l0.39,0.92l2.52,2.32l2.27,0.58l-0.51,0.84l0.07,0.5l1.37,1.23l0.36,1.05l1.03,0.61l0.95,-0.26l0.54,-0.68l0.03,-0.36l-0.61,-1.7l0.04,-0.4l0.84,-1.33l1.79,-1.97l0.7,-1.22l0.17,-3.17l0.27,-0.16l1.28,0.23l0.68,1.99l0.92,0.97l1.6,0.19l2.15,-0.87l1.21,-0.34l0.5,0.07l1.26,1.94l0.98,0.35l0.85,-0.3l0.3,-0.66l-0.49,-1.87l-0.93,-1.88l0.56,-1.7l1.03,-0.25l1.08,0.92l1.23,0.3l1.03,-0.04l0.36,-0.29l0.12,-1.32l-0.53,-0.86l0.59,-2.76l2.77,0.16l0.85,0.81l1.18,0.42l2.32,-0.03l0.73,-0.56l1.38,-2.23l1.33,-0.6l3.78,-0.37l3.34,0.19l5.15,-1.58l-0.68,0.99l0.28,1.2l3.4,4.2l1.31,0.54l9.36,1.7l4.39,0.3l2.39,0.51l-0.11,0.38l-1.47,0.78l-2.25,1.68l-0.42,1.14l0.31,0.91l0.41,0.37l1.07,-0.01l1.62,0.59l-1.85,1.75l-0.19,0.73l0.11,0.54l0.43,0.44l1.22,0.01l-0.54,1.93l0.36,0.78l-0.38,0.09l-1.1,0.89l-3.31,-0.98l-0.32,0.04l-0.67,0.42l-0.59,0.9l-1.1,0.92l-1.64,0.43l-2.0,1.15l-3.31,1.29l0.7,-0.64l0.1,-0.43l-0.36,-0.26l-0.79,0.02l-1.93,0.95l-1.23,1.0l-0.67,3.49l0.17,0.39l0.74,0.51l1.39,2.73l1.66,1.19l-0.66,1.62l-0.77,0.56l-0.89,-0.5l-0.55,0.02l-0.38,0.31l-0.41,1.84l0.76,5.04l1.32,3.62l1.28,1.54l2.77,2.32l2.99,1.26l5.23,3.87l2.91,1.25l0.66,0.58l1.71,2.92l1.49,3.41l1.62,5.38l1.23,2.79l2.39,3.05l4.89,4.31l4.41,3.13l4.29,2.0l3.27,0.34l7.54,-0.42l1.24,0.17l1.16,0.43l0.24,0.98l-0.38,0.67l-1.55,0.92l-1.63,1.3l-0.33,2.04l0.14,0.35l1.61,1.3l7.32,3.29l7.47,2.74l2.27,1.37l2.76,2.21l6.43,2.94l1.11,1.44l3.92,3.08l1.71,2.29l0.3,1.65l-1.72,4.11l-1.31,-0.39l-1.79,-1.26l-2.84,-5.41l-0.31,-0.21l-5.22,-0.55l-1.02,-0.38l-1.67,-0.84l-0.59,-1.34l-0.79,-0.46l-2.02,-0.17l-1.65,0.95l-1.77,2.24l-1.89,3.09l-1.89,4.44l-0.14,1.92l1.31,2.14l3.02,0.95l2.29,1.49l1.42,1.46l0.11,3.72l0.65,2.1l-0.75,0.9l-1.95,-0.28l-2.66,0.79l-2.01,1.48l-0.94,1.69l0.2,3.43l-0.33,1.13l-3.55,2.53l-1.88,2.57l-1.09,2.11l-4.07,0.04l-0.87,-1.22l-0.03,-1.99l0.65,-1.15l1.75,-0.82l1.12,-2.85l-0.3,-2.11l0.54,-0.76l0.52,-0.55l2.91,-0.7l0.32,-0.37l0.18,-2.88l-0.12,-0.32l-1.31,-1.23l-1.14,-5.21l-2.28,-4.31l-1.22,-3.85l-0.99,-1.98l-1.82,-1.22l-2.59,0.01l-1.2,-0.26l-4.54,-2.64l-0.19,-0.24l0.02,-0.45l0.7,-0.99l0.05,-0.36l-1.08,-2.88l-1.08,-1.38l-1.28,-0.67l-2.82,0.66l-1.23,-0.09l-0.59,0.23l0.89,-1.13l-0.02,-0.51l-0.44,-0.49l-1.89,-0.99l-2.76,-0.23l-0.43,0.22l-0.03,-0.73l-2.55,-4.19l-1.92,-1.88l-1.09,-0.32l-1.46,0.34l-2.52,-0.72l-1.63,-0.18l-2.16,0.68l-0.35,-0.2l-0.31,-0.6l-2.37,-1.75l-2.99,-1.02l-5.69,-5.49l-1.76,-2.07l-3.66,-2.33l-2.37,-3.39l-1.97,-1.27l-2.74,-0.99l-2.14,0.48l0.62,-0.27l0.26,-0.45l-0.33,-1.49l-3.12,-3.34l-1.85,-1.11l-1.41,-2.23l-0.87,-0.34l-1.5,-0.12l0.22,-2.46l-0.17,-1.25l-0.99,-2.76l-1.72,-2.37l-1.03,-5.63l-0.93,-1.74l-1.9,-1.2l-4.34,-1.38l-5.95,-3.6l-1.39,-0.12l-3.64,-1.41l-2.23,-0.24l-3.23,1.38l-3.52,3.49l-2.85,3.6l-0.94,0.63l-3.61,1.2l-2.78,0.5l-0.11,-1.05l2.2,-2.66l0.39,-0.9l-0.55,-1.68l-0.32,-0.23l-0.64,-0.05l-3.01,0.66l-0.58,-0.14l-4.66,-2.31l-0.81,-0.82l-0.26,-0.71l0.2,-0.75l-0.61,-1.26l1.42,-2.43l0.7,-0.31l0.31,-0.46l-0.46,-2.18l-0.92,-0.78l-1.88,-0.41l-0.68,-0.51l-0.19,-0.83l-0.45,-0.83l-0.74,-0.76l-0.05,-0.42l0.54,-0.27l2.17,0.07l1.81,-1.29l1.33,-0.43l1.23,-2.96l-0.1,-0.39l-1.86,-1.65l-0.69,-1.33l-1.1,-1.51l-1.02,-0.7l-0.15,-0.86l0.13,-0.36l1.7,-0.84l0.93,-0.81l1.53,0.64l2.74,-0.55l2.8,-1.08l3.49,0.9l2.81,-1.61l1.89,-2.55l0.07,-0.89l-0.5,-0.93ZM518.47,542.68l-0.02,0.45l0.4,0.67l0.4,0.19l0.8,-0.12l0.3,-0.23l0.42,-1.12l-0.15,-0.61l-0.45,-0.3l-1.11,0.28l-0.6,0.79ZM536.34,512.54l1.58,1.41l0.32,0.86l-0.4,0.08l0.05,-0.55l-1.56,-1.8ZM561.64,634.95l-1.42,2.54l-3.32,4.46l-0.94,3.04l-0.89,2.07l0.22,2.17l1.35,1.25l-0.42,0.3l-0.08,0.57l1.5,1.71l0.07,0.48l-0.01,0.44l-2.03,1.93l-0.54,1.75l0.13,1.17l-1.05,-0.07l-1.49,-0.45l-1.61,0.18l-3.5,-1.28l-1.85,-2.71l-1.47,-1.15l-1.62,-0.93l-3.36,-0.01l-1.3,-0.5l-2.86,-1.83l-3.08,-1.49l-2.59,-2.04l-1.81,-0.46l-1.7,-1.03l-2.3,0.05l-1.38,-0.37l-1.44,-1.1l-1.12,-2.08l1.41,-3.4l1.55,-0.85l0.7,-0.8l1.24,1.47l1.07,0.59l0.85,-0.14l1.27,-0.67l0.29,-0.86l1.15,-0.77l1.62,-0.02l0.59,0.12l0.56,0.87l1.47,0.38l2.51,1.57l1.64,0.37l2.13,-0.69l1.45,-0.24l3.17,0.37l1.84,-0.4l1.18,-0.04l1.89,-0.65l1.42,-1.06l0.61,-0.22l4.5,0.21l0.95,-0.35l0.59,-0.62l0.55,-0.22l0.99,0.14l2.07,-1.12l1.04,0.08l-0.37,0.35ZM539.33,595.34l-0.19,0.04l-0.15,-0.08l0.02,-0.06l0.31,0.09ZM512.96,657.33l0.48,0.16l0.18,0.38l-0.64,-0.31l-0.02,-0.23ZM491.6,561.34l0.11,0.25l-0.27,0.63l-0.71,-0.33l-1.66,0.38l-0.75,-0.06l-0.12,-0.3l2.0,-0.33l0.9,0.09l0.5,-0.33ZM462.39,592.89l0.87,0.72l2.19,0.38l1.61,-0.28l1.72,-0.73l1.8,-0.98l2.33,-2.52l1.52,-0.57l0.76,-0.68l0.32,-0.92l0.17,-0.07l0.83,0.82l0.84,0.09l1.28,0.67l1.05,1.45l0.73,0.55l-0.54,1.02l0.07,0.46l1.06,0.81l0.61,0.92l1.5,4.14l0.13,0.78l-0.26,0.8l-1.93,2.99l0.22,1.75l0.56,1.14l0.07,1.06l-1.21,10.52l-0.69,2.78l-0.7,0.28l-2.83,-1.16l-0.97,0.01l-0.75,0.24l-1.03,-0.57l-0.63,0.27l-0.45,3.03l-0.67,1.12l-0.99,0.69l-0.92,0.04l-1.97,-0.27l-0.55,-0.46l-2.33,-3.7l-0.25,-4.19l0.64,-1.31l0.19,-1.35l-0.1,-1.03l0.53,0.16l0.4,-0.16l0.25,-0.39l0.1,-1.66l-0.78,-1.22l-1.15,-0.39l0.02,-1.42l0.64,-0.73l0.21,-0.85l0.02,-2.69l-0.87,-1.15l-0.3,-1.35l-0.52,-1.1l-2.13,-2.32l-0.11,-1.75l0.39,-1.75ZM464.42,621.63l0.71,0.35l-0.34,0.68l-0.36,-0.48l-0.02,-0.54ZM462.96,589.81l0.1,-0.19l0.15,-0.08l-0.06,0.11l-0.19,0.16Z",
        name: "Italy"
    },
    GG: {
        path: "M315.47,448.51l0.52,-0.25l-0.15,0.36l-0.37,-0.12Z",
        name: "Guernsey"
    },
    CZ: {
        path: "M515.02,433.92l1.19,1.02l0.6,1.08l0.65,0.07l1.12,-1.65l1.21,-1.29l1.17,-0.7l2.1,-0.28l0.78,-0.37l2.52,0.38l0.49,-0.33l0.61,-1.16l2.02,-0.32l0.92,-1.17l0.85,-0.2l0.76,-0.56l0.75,0.3l0.81,-0.32l0.83,-1.4l0.23,-0.12l1.96,-0.22l2.67,-0.8l4.14,-1.8l2.24,-0.66l0.37,-0.51l-0.15,-0.48l-1.0,-0.66l-0.39,-0.55l0.14,-0.19l2.98,0.56l0.21,0.67l0.75,0.81l-0.09,0.68l0.17,0.38l0.69,0.46l1.07,0.34l0.83,-0.18l0.54,-0.62l1.07,-0.06l1.18,-0.45l0.25,-0.32l0.04,-1.87l2.95,0.83l0.28,1.28l1.19,1.4l0.71,0.32l0.89,0.04l2.39,0.79l1.19,0.17l2.13,1.08l0.68,0.13l0.78,0.97l0.42,0.08l0.76,-0.31l2.74,-0.43l0.9,0.52l0.57,0.52l-0.42,0.79l-1.24,0.53l-0.57,0.5l-0.47,0.61l-0.03,0.43l0.46,0.7l1.33,0.49l2.03,2.0l1.45,2.2l0.85,0.53l0.79,0.04l0.72,-0.4l0.69,-0.69l2.79,-1.37l0.22,-0.31l-0.02,-0.68l-1.44,-2.28l3.1,0.77l3.73,2.23l1.99,-0.18l1.8,-0.62l0.13,0.75l-0.22,0.41l-1.49,0.59l-0.24,0.49l0.62,0.9l0.8,0.34l2.0,2.05l0.71,0.26l1.73,-0.47l0.64,-0.55l0.67,0.66l1.38,0.48l1.35,0.89l0.83,-0.21l2.07,0.44l0.44,0.29l0.05,0.96l0.35,1.06l2.9,2.63l0.27,1.24l-0.78,0.26l-2.19,0.09l-2.55,1.84l-0.7,0.94l-2.65,1.33l-0.88,1.57l-0.32,1.96l-0.32,0.34l-1.86,0.68l-0.38,0.57l-1.71,1.36l-1.71,0.77l-1.83,0.23l-3.9,-0.57l-0.98,0.38l-1.15,1.21l-1.28,2.46l-0.71,-1.3l-2.27,-0.52l-2.33,-1.09l-1.21,-0.03l-1.45,1.01l-3.92,-0.26l-3.07,-1.87l-1.85,0.01l-3.92,-1.65l-1.33,-0.32l-1.92,0.46l-0.31,-0.35l-0.99,-0.5l-1.15,-0.1l-0.71,0.65l-0.56,3.35l-1.36,0.07l-1.6,1.82l-0.23,1.07l-2.5,-0.4l-0.95,0.24l-0.75,0.61l-2.23,-0.04l-1.69,-0.37l-0.86,-1.54l-2.34,-1.31l-0.59,-0.81l-3.04,-2.53l-1.58,-0.02l-0.34,-0.24l-0.83,-1.41l-0.74,-0.71l-0.92,-0.32l-1.09,-0.75l-1.55,-1.75l-1.49,-1.28l-1.53,-0.08l-1.63,-1.37l-0.62,-0.77l-1.79,-3.14l-1.35,-1.5l1.34,-1.87l0.24,-0.61l-0.08,-0.55l-0.82,-1.14l-2.46,-1.54l-0.83,-0.87l-0.4,-1.25l-0.7,-0.82l-0.44,-1.1Z",
        name: "Czech Republic"
    },
    CY: {
        path: "M794.04,683.04l0.24,0.41l0.92,0.48l1.16,0.41l0.8,0.05l3.69,-1.29l0.77,0.23l1.78,-0.07l0.67,0.66l0.1,1.37l0.4,0.41l0.42,-0.07l0.53,-0.46l2.08,0.26l1.62,-0.48l0.92,-0.61l1.06,0.48l0.57,-0.04l0.2,0.42l-2.51,0.25l-1.71,-0.06l-2.73,2.59l-1.27,0.8l-1.53,0.49l-2.52,0.36l-0.72,0.32l-0.65,0.68l-0.17,0.87l-0.38,-0.04l-0.44,-0.88l-0.64,-0.39l-2.5,0.12l-3.11,-1.14l-1.67,-3.23l-0.14,-1.25l0.94,0.23l1.22,-0.68l1.03,-0.95l1.12,-0.35l0.47,0.1Z",
        name: "Cyprus"
    },
    GB: {
        path: "M268.15,314.94l0.76,-0.51l2.22,-0.36l1.99,-1.42l-0.04,-0.68l-1.33,-0.72l1.39,-0.78l1.97,-2.75l0.47,-2.7l-1.51,-2.4l-1.71,-0.79l-0.23,-0.82l0.15,-0.42l0.5,-0.5l2.26,-0.88l0.28,-0.37l-0.26,-0.39l-1.22,-0.45l-0.39,-0.45l-0.34,-1.05l0.65,-2.06l1.01,-1.76l3.3,0.06l0.77,-0.52l1.74,0.44l0.45,-0.58l-0.35,-0.6l-3.02,-2.91l0.78,-1.43l0.07,-1.57l0.7,-0.19l2.79,0.02l0.84,-0.27l0.23,-0.54l-0.97,-1.62l-0.1,-0.61l0.29,-2.53l0.57,-0.77l0.99,-0.34l1.4,0.28l0.47,0.29l0.64,0.82l0.37,0.15l0.63,-0.11l2.18,-1.0l0.64,0.89l0.43,0.15l3.29,-0.87l4.43,-0.39l2.7,-0.58l2.8,-0.21l2.64,-0.65l2.45,0.26l-0.8,1.82l-0.05,2.13l-1.24,1.58l-2.68,1.6l-4.92,3.69l-3.05,1.99l-0.43,0.98l-0.22,1.22l0.34,0.47l1.91,0.38l-2.81,2.5l-0.76,1.94l0.39,0.55l1.98,-0.07l1.71,-0.38l6.29,-2.1l1.36,-0.04l3.54,0.74l1.29,-0.33l1.17,-0.06l8.29,0.22l2.29,-0.41l1.34,0.44l1.17,1.15l1.11,2.32l-0.65,0.94l-1.38,1.36l-1.17,1.82l-0.97,3.09l-2.28,4.57l-2.22,2.52l-1.04,1.85l-1.19,1.38l-1.13,0.86l-1.19,0.56l-3.73,0.67l-2.27,1.26l-1.24,0.38l-0.28,0.45l0.41,0.33l1.52,-0.05l1.56,-0.45l2.59,-0.15l2.77,1.34l-0.19,0.79l-1.06,0.82l-2.98,0.24l-2.66,2.16l-1.14,0.63l-1.17,0.3l-1.51,-0.09l-2.84,-0.57l-1.23,-0.59l-0.51,0.14l0.07,0.52l1.15,1.0l1.42,0.59l7.67,1.25l0.71,-0.17l2.33,-1.25l3.05,-0.02l5.98,2.32l4.24,4.35l2.33,1.89l0.57,1.27l2.55,8.93l1.78,4.76l0.84,1.39l1.25,1.09l5.33,2.11l1.12,0.66l4.06,4.18l1.87,1.66l1.58,1.06l-0.61,0.48l-0.71,1.43l0.53,1.56l3.18,5.0l-1.41,-0.05l-2.86,-1.74l-2.54,0.37l-2.7,-0.14l-0.39,0.36l0.31,0.43l2.37,0.55l2.55,0.05l5.58,4.04l1.86,2.36l1.07,3.0l-0.66,1.22l-2.32,1.99l-1.09,1.24l0.11,0.61l3.4,1.83l1.62,-0.4l2.3,-2.51l1.81,-0.17l3.23,0.43l1.5,-0.09l2.84,0.61l1.43,0.54l3.61,2.48l0.73,1.27l0.35,1.71l0.04,1.89l-1.31,3.37l-0.74,2.85l-2.29,2.13l-1.08,0.57l-0.58,-0.25l-0.59,0.04l-0.37,0.34l0.01,0.7l0.55,0.75l0.0,0.68l-0.93,0.61l-1.03,0.28l-2.15,-0.35l-2.75,1.41l0.04,0.73l1.83,0.67l0.25,0.48l-0.38,1.04l-1.05,0.51l-2.77,0.33l-1.17,0.33l-1.21,0.68l-0.17,0.49l0.47,0.24l1.3,-0.31l0.72,0.22l0.53,0.99l0.71,0.48l2.88,0.54l5.07,-0.27l1.73,0.09l-0.22,2.81l-0.29,0.32l-4.28,1.91l-1.06,1.5l-0.21,0.62l-2.49,-0.05l-1.14,0.82l-2.03,0.57l-3.14,1.37l-1.16,0.21l-5.55,-0.91l-3.41,0.08l-4.48,0.79l-1.05,-0.12l-3.54,-1.28l-2.08,-0.23l-1.73,-0.69l-0.47,0.14l0.01,0.49l0.8,0.98l-1.99,1.06l-4.61,0.55l-2.19,-0.18l-0.41,0.53l0.75,1.52l-0.44,0.12l-4.2,-0.6l-0.74,0.12l-0.59,0.52l-1.26,-0.25l-1.51,-0.95l-1.68,-0.66l-1.68,-0.3l-1.51,0.11l-5.71,1.65l-1.16,1.64l-0.54,2.11l-0.76,1.8l-1.15,1.29l-1.24,0.15l-1.4,-0.96l-2.7,-1.09l-0.89,-0.71l-0.49,-0.13l-1.51,0.61l-2.85,0.32l-3.11,0.94l-3.9,2.36l-0.62,0.57l-0.86,1.54l-1.08,0.22l-1.33,-1.05l-1.51,-0.38l-1.78,0.37l-0.8,0.46l-0.13,-0.77l0.97,-0.96l3.15,-0.92l2.75,-2.3l1.87,-2.16l0.53,-0.4l1.04,-0.38l0.41,-0.8l3.82,-3.57l0.34,-0.89l0.44,-2.54l3.09,-1.03l1.42,-2.79l4.41,-0.65l3.12,0.04l3.18,0.57l1.68,0.05l1.79,-0.25l1.38,-0.88l2.17,-2.81l3.94,-3.66l2.13,-2.39l0.01,-0.52l-0.51,-0.1l-1.44,0.82l-2.73,2.04l-3.23,0.78l-4.11,2.62l-3.45,-0.4l-2.63,-2.2l-1.94,-1.02l-0.92,-0.09l-2.22,0.53l-0.78,-0.02l0.28,-0.36l1.05,-0.55l0.21,-0.42l-0.33,-0.33l-2.46,-0.4l-1.59,-1.07l-1.97,-0.13l-1.04,0.2l-1.69,1.01l-2.31,0.96l-2.79,-1.33l-0.43,-0.46l-0.02,-1.23l-0.45,-0.97l-0.54,-0.33l0.67,-0.79l1.19,-0.78l2.84,-0.84l4.29,-1.97l2.4,-0.84l2.33,-1.5l1.06,-1.03l1.34,-2.7l0.92,-1.18l-0.2,-0.63l-0.75,-0.24l-0.29,-0.65l0.5,-1.84l-1.03,-2.09l0.21,-1.57l-0.4,-0.48l-3.51,0.34l-3.15,1.52l-0.81,0.1l0.49,-0.83l3.19,-2.29l1.04,-1.67l0.73,-0.65l2.07,-1.33l4.53,-1.59l1.66,0.17l1.58,-0.23l1.42,-0.56l1.2,-0.1l3.0,1.55l0.45,-0.06l0.11,-0.44l-0.79,-2.12l0.75,-0.33l1.97,2.14l0.94,0.25l1.56,-0.32l0.31,-0.32l-0.18,-0.41l-0.6,-0.38l-1.62,-0.37l-0.67,-0.62l-1.2,-2.13l0.06,-1.14l1.75,-2.6l-0.2,-0.62l-1.2,-0.59l-0.15,-1.07l0.2,-0.91l1.75,-1.15l0.53,-1.62l0.19,-1.89l-0.29,-0.78l-0.41,-0.26l-1.82,0.15l-1.55,0.79l-0.49,-0.02l-1.98,-1.77l-3.27,-4.34l-0.27,-1.6l1.65,-3.73l2.54,-2.39l3.05,-0.85l0.29,-0.39l-0.29,-0.39l-0.71,-0.18l-4.79,-0.03l-1.66,0.32l-1.58,1.06l-1.72,0.45l-2.24,1.6l-2.19,0.01l-1.01,-1.05l-0.84,-0.18l-3.47,1.62l-3.9,-1.59l-0.43,0.06l-0.55,0.51l-0.51,1.0l-0.21,1.0l-1.09,-0.89l-1.34,-1.73l-0.42,-1.02l-0.03,-0.98l0.37,-0.24l0.61,0.34l0.56,-0.2l1.22,-3.01l3.27,-5.08l0.68,-1.8l-0.1,-1.0l-0.6,-1.02l-2.21,-1.89l0.26,-3.02l0.63,-1.0l2.88,0.03l0.39,-0.31l-0.22,-0.45l-1.15,-0.53l-2.13,-1.45l0.55,-1.71l-0.12,-0.45l-0.46,-0.04l-0.88,0.94l-0.94,1.61l-0.45,0.3l-1.59,0.38l-0.28,0.25l-0.26,0.71l-1.04,0.34l-0.02,-1.11l0.3,-1.14l0.57,-0.88l2.4,-2.2l0.05,-0.53l-0.52,-0.11l-1.23,0.72l-2.72,2.09l-1.84,1.98l-0.11,1.04l0.6,2.29l-0.16,0.98l-2.29,7.16l-0.67,0.9l-1.14,-0.06l-0.3,-0.32l0.0,-0.41l1.15,-4.26l0.39,-0.89l1.93,-2.38l0.08,-0.39l-0.54,-0.36l-0.8,0.27l-0.24,-0.14l0.17,-4.38l0.74,-1.58l0.27,-2.18l1.9,-4.94l0.89,-0.94l0.21,-1.12l1.66,-2.66l-0.05,-0.45l-0.43,-0.12l-0.51,0.2l-4.68,3.56l-1.06,0.58l-1.47,-0.16l-1.13,-0.36l-0.82,-0.71l-0.4,-1.51l-0.37,-0.3l-1.52,-0.14ZM339.59,233.48l0.13,0.14l-0.7,2.04l-0.53,-0.03l-0.18,-0.83l0.12,-0.91l0.74,-0.02l0.42,-0.4ZM336.19,239.14l-0.93,-1.46l0.79,-1.93l0.63,0.04l0.08,0.26l-0.75,0.66l0.18,2.42ZM329.81,239.86l0.8,-0.37l1.06,-1.32l0.87,-0.15l-0.06,1.13l0.28,1.44l0.58,0.28l0.4,-0.21l0.85,1.11l0.32,0.16l0.92,-0.16l-1.6,5.89l-0.26,2.06l-0.62,0.77l-0.43,1.4l-0.23,-0.2l1.02,-3.91l-0.25,-1.08l-0.43,-0.71l-0.33,-0.19l-1.17,-0.02l-0.79,0.24l-0.04,-0.52l-0.39,-0.48l-1.48,-0.05l-0.32,-0.39l0.78,-0.21l1.26,0.07l1.63,-0.82l0.19,-0.49l-1.02,-2.77l-0.3,-0.25l-1.22,-0.24ZM330.39,426.85l1.55,-0.47l0.95,-0.66l2.03,0.61l0.51,0.38l-0.75,0.49l-0.48,0.83l-0.59,0.15l-0.6,0.0l-2.6,-1.33ZM315.95,265.12l-0.68,0.01l0.29,-0.44l0.72,-0.23l0.87,0.07l-1.2,0.59ZM309.8,263.74l0.37,-0.11l1.34,1.02l-1.51,-0.67l-0.2,-0.25ZM312.25,265.65l1.03,0.29l-0.03,0.18l-0.75,0.32l-0.18,-0.15l-0.06,-0.64ZM308.85,269.28l-0.26,0.62l0.38,0.54l0.97,-0.01l2.32,0.46l0.39,0.27l-0.24,0.56l-0.56,0.19l-1.93,-0.96l-2.24,0.39l-0.45,-0.22l-0.26,-1.2l-0.58,-0.1l-0.7,0.53l-0.1,-0.1l0.01,-1.32l0.41,-1.09l0.57,-0.18l1.09,0.13l1.3,0.68l0.27,0.34l-0.41,0.45ZM310.59,274.73l-0.03,-0.02l-0.47,-0.75l0.7,-0.11l-0.21,0.88ZM306.77,274.1l-0.45,-0.01l-1.04,-1.0l-0.33,-0.85l1.05,0.14l0.78,1.72ZM293.4,379.3l0.66,0.42l0.9,0.03l-3.55,2.22l-0.41,-0.54l-0.84,-0.13l-0.91,-1.28l-0.16,-1.93l1.09,-0.46l1.73,0.03l1.49,1.64ZM281.03,338.84l-1.32,0.01l-1.07,-0.49l-0.75,-2.35l0.24,-0.74l0.54,-0.62l0.65,-0.11l0.96,0.74l0.71,1.66l0.05,1.88ZM243.78,353.56l1.04,-0.15l1.03,0.12l2.55,-1.09l1.48,-2.17l0.71,-2.43l0.24,-0.34l1.78,-1.01l0.58,0.54l1.34,0.1l1.08,-0.74l1.04,-1.76l1.47,0.06l1.71,-0.24l3.04,-0.9l1.25,-0.01l1.86,0.46l1.35,0.0l1.09,1.18l0.71,2.2l1.58,2.14l2.0,1.81l0.06,0.77l-2.05,1.18l-0.22,0.36l0.01,0.81l0.55,0.37l1.78,-0.56l1.9,0.16l0.59,0.65l0.71,2.04l-0.07,0.41l-0.62,-0.99l-1.5,-0.75l-0.51,0.48l0.32,1.28l-0.13,1.73l0.21,0.38l0.95,0.23l-0.41,1.14l-3.01,0.79l-1.46,2.65l-0.91,0.58l-1.17,-0.12l-1.4,-0.56l-1.16,-0.11l-1.47,0.62l-2.99,0.05l0.16,-1.49l-0.39,-0.71l-1.48,-0.34l-0.36,-0.26l-0.68,-0.91l-0.33,-1.22l-0.88,-0.91l-1.16,-0.67l-0.85,0.07l-2.1,2.02l-0.04,0.49l0.49,0.85l-1.8,1.33l-0.45,0.53l-0.73,-0.26l-1.78,0.07l-0.7,-0.16l-1.07,-0.82l-2.16,-0.48l-0.53,-1.29l-3.04,-2.34l-0.21,-0.43l1.07,-0.79l3.35,-1.09l0.67,-0.52l0.24,-0.59l-0.22,-0.47l-1.93,-1.02ZM261.43,298.81l2.77,-0.68l0.29,-0.3l0.22,-0.97l0.3,-0.04l0.62,0.31l0.98,1.15l0.26,1.42l-0.24,1.95l0.37,1.77l0.24,0.33l1.02,0.63l2.54,0.4l2.31,-0.1l0.21,0.31l-3.17,2.99l-0.35,0.25l-0.38,-0.02l-0.24,-2.65l-0.48,-0.35l-1.69,0.36l-1.27,-0.04l-0.61,-0.28l-1.79,-2.5l-3.04,-0.66l-0.76,-0.83l-0.17,-0.38l0.46,-0.56l0.82,0.18l0.51,-0.16l0.48,-0.43l0.11,-0.55l-0.29,-0.54ZM269.34,332.0l-0.57,-0.07l-0.12,-1.03l0.29,-0.43l1.67,-0.89l-0.03,-0.72l-0.51,-0.21l0.28,-0.48l1.95,-1.22l-0.68,1.5l-2.29,3.56ZM271.87,321.81l-5.06,1.0l-1.54,-0.08l1.53,-0.44l0.3,-0.3l0.62,-2.57l-0.21,-0.45l-2.19,-1.11l0.09,-0.39l1.46,-0.69l0.8,-0.06l0.87,0.6l1.09,1.4l1.68,0.37l0.74,0.44l-0.19,2.27ZM263.06,333.89l0.29,-1.39l0.53,-0.68l0.58,-0.27l0.32,0.24l0.47,0.0l1.95,-1.18l0.87,3.48l0.02,0.34l-0.31,0.5l-2.16,0.88l0.34,-0.95l-0.39,-0.99l0.18,-0.72l-0.36,-0.57l-0.93,0.13l-1.39,1.16ZM255.41,289.78l0.69,-0.49l-0.15,-0.72l-1.04,-0.51l-0.13,-0.82l0.1,-0.64l0.69,-0.72l0.6,0.15l0.79,0.64l0.35,0.08l0.93,-0.25l1.09,0.12l0.46,-0.5l-0.77,-1.87l6.87,-3.75l0.3,0.92l-0.05,1.26l-1.59,3.18l-0.74,0.23l-0.54,0.78l-1.75,0.9l-0.21,0.45l0.38,0.31l1.48,0.02l0.19,0.46l-0.19,0.24l-1.99,1.51l-1.52,0.67l-1.42,1.52l-0.92,0.18l-0.73,0.99l-0.48,0.34l-0.38,-0.15l-0.57,-0.61l1.29,-0.75l0.3,-0.63l1.03,-0.51l0.17,-0.55l-0.29,-0.36l-2.26,-1.13ZM265.16,309.88l-0.49,0.1l-0.68,-0.67l0.84,-0.35l0.47,0.45l-0.13,0.47ZM261.42,316.68l0.29,-0.28l0.09,-0.02l-0.03,0.04l-0.35,0.26ZM249.11,297.53l0.35,-0.38l1.04,0.14l0.81,-0.31l0.88,0.05l0.67,-0.37l1.01,0.73l-0.88,1.33l-1.56,-0.01l-2.31,-1.17ZM251.9,306.91l-0.8,-0.04l-0.28,-0.18l-0.4,-1.03l0.09,-3.19l1.15,0.03l0.25,4.42ZM248.75,309.98l0.12,-0.28l0.57,-0.15l0.37,0.2l-1.06,0.23Z",
        name: "United Kingdom"
    },
    IM: {
        path: "M286.48,364.63l0.75,-2.12l1.13,-0.81l1.38,-1.97l0.93,-0.46l0.23,0.08l0.45,1.97l-0.6,0.66l-0.31,0.78l-2.48,2.14l-0.89,-0.34l-0.59,0.07Z",
        name: "Isle of Man"
    },
    AT: {
        path: "M481.0,482.58l0.71,0.01l1.26,-0.76l2.73,1.11l1.06,0.84l0.22,1.08l0.57,0.29l0.97,0.14l-0.16,1.17l0.45,0.42l0.92,-0.13l0.98,-0.5l0.89,-1.0l0.56,-1.07l0.32,-1.9l2.68,-0.0l1.17,0.4l1.39,0.05l0.35,0.68l1.21,1.28l1.22,0.23l1.88,-0.49l0.4,0.14l1.17,-0.19l1.17,-0.66l0.33,-0.47l2.34,-1.04l1.86,-0.56l6.32,-0.62l0.56,-0.68l-0.02,-0.91l1.71,0.39l1.72,0.89l0.75,-0.01l1.97,-0.53l0.93,0.41l0.14,0.23l-0.1,0.78l0.54,0.69l2.21,1.18l0.81,-0.01l0.34,-0.23l0.26,-0.61l0.29,-2.74l-0.54,-1.0l-1.45,-0.25l0.66,-1.25l-0.01,-1.43l-2.62,-3.34l0.0,-0.26l0.61,-0.78l3.51,-1.91l3.25,-0.97l0.81,-0.58l0.62,-0.8l0.74,-2.89l2.33,0.93l1.08,-0.42l0.94,-0.96l0.2,-0.72l0.05,-2.03l1.82,1.08l1.04,1.69l1.99,0.43l2.41,0.04l1.04,-0.73l0.6,-0.12l2.7,0.45l0.45,-0.33l0.19,-1.16l1.34,-1.55l1.2,0.04l0.39,-0.27l0.35,-1.06l0.39,-2.67l0.73,0.04l1.42,0.91l2.0,-0.47l1.12,0.26l4.05,1.69l1.7,-0.05l3.21,1.91l2.2,0.27l2.05,0.01l1.59,-1.06l1.42,0.28l1.56,0.85l2.14,0.49l0.79,1.59l-0.07,0.6l-1.06,1.86l0.03,1.3l1.48,3.33l1.26,1.95l0.23,0.71l0.58,0.5l-0.55,0.63l-0.13,0.95l-0.53,0.59l-0.13,0.62l0.38,2.0l-2.83,0.16l-0.51,0.24l-1.61,-0.95l-1.03,-0.27l-0.78,0.17l-1.67,1.19l-0.17,0.52l0.4,0.53l2.63,0.76l0.36,0.9l-0.61,1.28l-1.24,0.62l-0.91,0.08l-0.36,0.32l-0.11,0.73l0.34,1.42l-0.57,1.05l0.29,1.33l0.33,0.31l0.38,0.06l-0.38,1.52l-0.2,0.17l-1.36,-0.04l-1.08,0.52l-2.2,1.87l-0.81,0.36l-0.95,1.05l-0.06,1.65l-2.43,-0.52l-1.83,0.22l-1.3,0.78l-1.31,0.39l-3.01,-0.22l-2.94,0.29l-1.48,0.35l-0.86,0.49l-1.18,1.41l-2.07,1.02l-0.51,0.54l-1.7,-0.42l-4.3,-0.57l-3.66,-0.84l-1.21,-0.06l-3.4,-0.7l-4.38,-0.3l-9.29,-1.69l-1.1,-0.46l-1.58,-2.21l-1.49,-1.64l-0.22,-0.59l0.9,-1.44l-0.32,-0.53l-0.38,-0.12l-2.94,0.72l-2.6,0.91l-3.29,-0.2l-4.01,0.41l-1.66,0.81l-1.47,2.36l-0.28,0.22l-0.74,0.11l-1.24,-0.09l-0.81,-0.27l-1.13,-0.95l-2.83,-0.17l-0.03,-0.51l-0.54,-1.11l-1.1,-0.55l-0.42,0.08l-2.23,2.03l-0.42,0.12l-1.7,-0.53l-1.43,-0.79l-0.64,-1.3l-3.07,-0.87l0.13,-0.58l-0.74,-1.34l-0.33,-1.34l1.01,-1.91l0.27,-1.41l-0.15,-0.38l-0.45,-0.35Z",
        name: "Austria"
    },
    NL: {
        path: "M408.11,413.92l-1.22,-0.28l-1.76,-0.74l-2.63,0.56l-1.62,-0.68l-1.47,-0.1l-1.43,-1.16l0.86,-0.49l2.54,-0.12l1.81,0.37l3.4,2.1l1.09,0.04l1.03,-0.28l0.2,-0.64l-0.47,-0.58l-2.47,-1.12l1.44,-0.15l0.27,-0.65l-0.68,-1.17l-2.31,-2.26l1.63,-2.96l1.7,-1.22l2.27,-2.5l1.52,-2.15l1.1,-2.5l1.57,-6.68l1.04,-2.07l1.58,0.52l2.35,-0.96l4.09,-2.53l1.29,-2.25l1.06,-0.92l4.54,-1.93l2.49,-0.57l10.02,-0.62l2.06,2.07l1.3,0.52l1.54,0.27l-0.08,4.83l-0.97,1.98l-0.9,2.61l-0.24,1.67l-3.48,0.08l-0.91,0.62l0.09,0.93l-0.34,0.86l0.25,0.74l0.62,0.64l1.41,0.52l1.71,-0.01l0.65,0.86l-0.19,1.84l-0.5,0.96l-1.57,1.2l-1.5,0.72l-0.42,0.48l-0.14,0.98l1.13,1.12l-0.6,0.77l-2.87,0.97l-1.44,-0.0l-0.68,0.49l-0.71,-0.41l-2.0,-0.55l-2.28,0.91l-0.8,0.57l-0.17,0.32l0.08,0.97l1.84,2.22l0.1,0.74l1.31,1.88l0.06,0.56l-0.41,1.55l-1.26,2.5l0.11,0.92l0.53,0.33l-2.24,1.64l-0.78,-0.07l-0.53,0.48l0.1,0.74l0.47,0.55l1.53,0.64l0.41,0.58l-0.61,2.28l-2.95,-0.15l-0.55,-0.2l-0.58,-0.97l1.24,-1.33l0.21,-1.07l0.91,-1.71l0.16,-0.82l-0.5,-0.82l-0.8,-0.42l-1.87,-0.5l-0.81,-0.64l-0.39,-0.59l-0.61,-0.33l-2.38,0.42l-1.15,-0.3l-1.39,-1.09l-0.5,-1.77l-0.54,-0.52l-0.49,0.01l-1.11,1.02l-1.05,0.07l-0.27,-0.74l-0.84,-0.78l-0.46,0.02l-1.54,1.17l-0.36,-0.0l-0.96,-0.8l-0.43,-0.13l-0.97,0.33l-0.76,0.58l-0.15,0.41l0.17,0.79l-0.77,-0.08l-1.01,-0.43ZM416.5,383.47l-1.03,1.0l-0.51,-0.26l0.29,-0.71l1.25,-1.07l-0.0,1.04ZM407.31,414.89l-0.37,0.52l-1.7,1.02l-1.75,0.66l-0.79,-0.07l-1.0,-0.74l-1.0,-0.37l-1.46,-0.21l-1.62,0.77l-0.28,-0.03l-0.5,-0.59l-0.29,-1.12l2.71,-0.27l1.73,0.54l2.26,0.26l1.77,-0.71l1.2,0.56l1.09,-0.22ZM401.26,408.39l0.8,-0.2l1.99,0.12l1.27,0.97l-1.02,0.24l-1.65,-1.11l-1.25,0.17l-0.14,-0.18Z",
        name: "Netherlands"
    },
    AD: {
        path: "M373.44,566.17l-1.46,0.73l-1.49,0.29l-0.26,-1.45l0.13,-0.56l0.71,-0.55l2.52,0.57l0.23,0.31l-0.38,0.67Z",
        name: "Andorra"
    },
    IE: {
        path: "M245.03,355.16l-0.33,0.27l-3.42,1.12l-1.01,0.66l-0.44,0.52l-0.05,0.43l0.47,0.87l3.09,2.41l0.35,1.12l0.29,0.27l2.3,0.51l1.07,0.82l0.95,0.2l1.74,-0.07l1.0,0.25l2.79,-2.26l0.09,-0.46l-0.49,-0.95l1.71,-1.63l0.3,0.02l0.84,0.52l0.68,0.72l0.25,1.06l0.9,1.22l0.66,0.42l1.26,0.31l-0.18,1.51l0.2,0.49l0.36,0.25l3.32,-0.04l1.44,-0.63l0.91,0.09l0.42,0.48l0.07,0.19l-0.49,0.12l-1.28,-0.03l-0.65,0.73l-0.03,0.85l0.37,1.24l0.72,0.86l0.99,3.59l0.72,1.21l0.15,3.22l-0.29,0.63l1.44,5.06l0.23,2.86l-1.36,2.13l-0.52,1.27l-0.43,1.48l-0.23,2.1l-1.65,2.45l-0.66,0.57l-0.81,0.37l-0.11,0.65l1.47,1.41l-0.98,0.51l-1.53,0.23l-1.77,-0.43l-1.27,0.04l-1.49,0.84l-0.62,-1.32l-0.39,-0.23l-0.36,0.27l-0.45,1.35l-0.82,0.37l-1.8,-0.09l-3.05,0.4l-1.26,0.45l-1.41,1.96l-3.3,1.03l-1.16,1.3l-1.31,0.67l-0.96,0.18l-1.89,-1.34l-1.79,-0.0l-0.38,0.32l0.85,0.97l0.14,0.84l-0.14,0.73l-0.57,0.35l-1.04,0.15l-1.42,0.95l-1.89,0.26l-1.2,0.96l-6.42,1.53l-2.25,-0.55l-1.05,0.14l-2.66,0.85l-0.55,-0.07l1.21,-1.55l2.34,-1.17l0.24,-0.3l-0.24,-0.64l-0.89,-0.15l-4.33,0.76l-2.09,0.72l2.01,-1.51l1.75,-0.96l0.67,-0.74l1.97,-0.87l0.21,-0.5l-0.49,-0.25l-6.51,1.85l-1.48,-0.2l-0.69,-0.54l-1.03,0.19l-0.29,-0.71l1.78,-1.71l1.09,-0.77l2.7,-1.09l0.66,-0.93l-0.19,-0.58l-0.79,-0.28l-3.96,0.2l-1.45,-0.13l0.29,-0.66l1.81,-1.08l0.94,-0.17l0.86,0.1l1.81,0.7l2.24,-0.23l0.34,-0.28l-0.13,-0.43l-0.81,-0.65l-0.15,-1.37l-0.45,-0.48l1.55,-0.82l1.69,-1.42l3.96,-0.54l3.73,-0.77l3.73,-1.08l0.29,-0.38l-0.28,-0.39l-1.82,-0.57l-0.85,-0.74l-0.56,0.03l-1.42,1.55l-0.93,0.54l-2.83,0.31l-2.44,-0.63l-0.85,0.59l-2.09,0.75l3.98,-3.0l0.75,-0.85l0.97,-1.34l0.03,-0.41l-0.3,-0.6l-0.37,-0.28l1.87,-2.34l0.63,-0.41l1.31,-0.07l2.03,-0.63l1.03,-0.9l-0.13,-0.67l-1.4,-0.53l-1.52,-0.29l-5.04,0.23l-0.67,-0.44l-0.24,-0.84l-0.5,-0.44l-1.23,-0.06l-1.05,0.29l-0.66,-0.1l0.68,-0.6l-0.2,-0.69l-1.41,-0.23l-1.46,0.18l-0.83,-0.2l0.42,-0.63l-0.05,-0.58l-0.59,-0.48l-0.06,-0.28l0.36,-0.17l0.88,0.09l1.63,-0.53l2.1,-0.26l0.35,-0.37l-0.29,-0.42l-1.78,-0.51l-0.51,-0.31l0.06,-0.78l1.91,-0.9l2.21,-0.43l0.31,-0.49l-0.14,-0.57l0.14,-0.63l-0.35,-0.48l-2.29,-0.21l-1.8,0.38l0.68,-2.04l-0.0,-1.8l-0.53,-0.33l-0.58,0.2l-0.12,-0.88l-0.45,-0.85l-0.49,-0.19l-1.01,0.38l0.02,-0.42l0.33,-0.58l0.59,-0.24l2.28,0.12l1.55,-0.6l2.01,-0.14l3.21,0.18l2.21,1.59l0.41,0.03l0.59,-0.3l1.2,-1.12l3.36,0.44l2.13,0.6l0.81,-0.19l0.26,-0.48l-0.31,-1.17l-0.59,-0.71l0.66,-0.75l1.06,-0.67l2.41,-0.77l0.86,-0.46l0.67,-1.53l0.78,-1.1l-0.38,-0.63l-4.29,0.58l-3.57,-1.16l0.31,-0.44l0.76,-0.47l1.46,-0.4l0.38,-0.61l1.96,-1.47l0.12,-0.43l-0.43,-1.32l0.19,-0.79l0.94,-0.8l0.56,-1.44l1.75,-0.25l1.7,-0.64l2.64,-0.09l0.63,0.24l0.54,-0.43l-0.11,-0.78l0.78,-0.09l0.23,0.11l0.29,0.85l0.49,0.45l0.13,0.66l-0.29,0.52l-0.6,0.5l-0.02,0.6l0.31,0.29l-0.67,0.73l-0.03,0.5l0.48,0.14l1.08,-0.47l1.44,-1.0l0.17,-0.36l-0.08,-0.82l-0.63,-1.97l0.14,-0.76l0.61,-0.48l2.02,-0.31l0.26,-0.64l-0.46,-0.62l0.71,0.2l1.23,0.89l2.08,1.04l-0.77,0.67l-1.53,0.76l-0.72,0.9l-2.2,1.29l-0.39,0.57l-0.68,2.35l-1.25,1.91l-2.31,0.96l-1.79,-0.12l-0.73,0.44l-0.17,0.36l0.13,0.52l0.4,0.4l1.58,0.8ZM212.65,366.62l-0.13,-0.02l0.03,-0.02l0.09,0.04ZM213.87,366.77l1.05,0.02l0.27,0.15l0.07,0.94l-0.8,-0.9l-0.59,-0.21Z",
        name: "Ireland"
    },
    ES: {
        path: "M408.55,609.24l-3.95,-1.75l-1.35,-0.22l-0.04,-0.91l2.43,-0.17l2.05,0.62l1.1,1.67l-0.24,0.75ZM392.9,610.25l0.24,0.47l1.3,0.53l1.55,-0.44l0.59,0.12l0.47,0.17l0.11,0.64l-2.21,3.38l-0.63,1.38l-2.01,1.18l-2.18,-0.99l-1.33,-0.27l-0.23,-0.23l-0.3,-1.47l-0.91,-0.82l-1.18,-0.19l-1.55,1.01l-0.31,-0.47l-0.97,-0.3l-0.17,-0.26l0.01,-0.32l5.42,-3.73l1.57,-0.82l3.07,-0.89l-0.06,0.57l0.37,0.41l-0.48,0.58l-0.18,0.74ZM246.2,546.17l1.24,0.54l1.33,-0.16l1.25,0.65l2.0,1.73l2.73,0.67l2.32,-0.51l3.77,-0.11l1.99,0.22l3.37,-0.41l1.91,0.14l3.17,-0.81l2.44,1.01l4.71,0.48l2.86,0.85l7.97,1.43l2.93,0.01l4.03,-0.8l1.66,-0.58l1.66,0.32l2.22,-0.66l0.92,0.12l1.48,0.98l5.05,1.32l0.36,-0.08l1.26,-1.06l0.81,-0.2l3.51,0.67l3.75,1.41l1.98,0.1l2.79,-0.38l2.24,-0.92l0.61,1.08l0.69,0.42l1.22,0.43l2.11,0.25l0.57,0.31l-0.15,1.09l-0.77,1.27l0.05,0.44l0.81,0.66l1.09,0.03l0.6,-0.74l0.3,0.36l4.79,1.82l2.22,0.15l2.37,2.24l1.74,0.09l2.29,-0.44l1.21,0.62l2.26,1.59l3.37,-0.44l0.82,0.42l1.65,-0.12l1.86,0.22l1.61,-0.05l0.53,-0.55l0.13,-1.57l0.27,-0.42l4.06,1.05l2.69,1.08l1.2,0.07l0.59,0.24l0.9,1.31l-0.14,0.61l0.17,1.5l0.36,0.64l0.29,0.16l1.32,-0.09l2.19,-0.97l2.73,1.14l1.03,1.21l0.88,0.03l2.11,-1.03l4.84,1.2l1.21,0.1l0.43,-0.35l0.17,-0.63l0.24,-0.14l2.56,-0.78l0.93,-0.16l3.02,0.58l0.29,0.77l0.69,0.52l0.11,0.39l-1.45,0.37l-0.36,0.34l-0.22,1.53l0.42,0.73l0.66,0.43l0.11,0.29l0.12,2.0l-3.11,2.69l-9.38,4.87l-2.31,2.4l-0.75,0.47l-6.93,1.47l-7.25,2.16l-4.47,3.93l0.14,0.7l1.0,0.28l0.97,0.99l-1.94,1.07l-0.67,0.23l-0.56,-0.11l-0.64,0.29l-3.14,4.73l-2.76,3.37l-1.59,1.52l-1.6,2.21l-3.44,5.71l-0.07,1.96l1.73,5.74l1.03,1.55l1.35,1.24l2.56,1.08l0.41,0.67l-0.65,0.73l-2.51,1.72l-4.44,2.36l-1.99,1.94l-0.48,1.83l-1.34,0.98l-0.48,2.47l-0.93,2.19l-0.87,1.38l-0.11,0.92l0.13,0.34l1.03,0.95l-0.27,0.21l-2.08,0.34l-5.27,0.16l-4.46,2.79l-2.28,2.59l-1.9,4.42l-2.24,2.53l-0.75,0.35l-1.61,-1.09l-2.0,-0.18l-2.05,0.39l-1.14,0.96l-1.39,0.45l-1.51,-0.42l-3.39,-0.24l-1.6,0.06l-2.23,0.71l-1.96,-0.48l-3.38,-0.25l-7.46,0.61l-1.12,0.41l-0.89,1.08l-2.19,1.79l-3.54,0.09l-3.2,1.22l-1.0,0.94l-1.35,2.14l-0.35,1.21l-0.47,-0.2l-0.49,0.13l-0.29,0.3l-0.21,0.99l-1.83,0.61l-2.33,-0.91l-2.03,-1.42l-1.1,-0.16l-1.63,-2.09l-0.73,-1.38l-0.49,-1.43l0.08,-0.68l-0.15,-0.5l-0.23,-0.25l-1.38,-0.55l-0.29,-1.07l1.02,-1.66l1.35,-0.91l0.24,-0.46l-0.41,-0.31l-1.41,0.08l-0.96,0.94l-1.11,-1.59l-5.06,-3.56l0.23,-0.57l-0.03,-0.66l-0.7,-0.22l-0.83,0.93l-0.44,0.19l-2.71,-0.15l-2.76,0.4l-1.23,-5.85l0.75,-2.07l0.87,-0.92l1.16,-1.85l1.34,-1.45l1.45,-0.35l0.91,-0.44l0.91,-2.31l-0.46,-0.59l-1.76,0.15l-2.97,-4.04l0.48,-1.54l0.33,-2.25l0.71,-0.75l1.32,-0.94l1.08,-1.27l0.63,-1.46l0.03,-1.41l-0.83,-0.95l-1.59,-0.4l-1.69,-3.02l-0.39,-1.96l-1.57,-1.32l-0.92,-1.49l0.55,-0.15l4.66,-0.04l1.22,-0.59l0.9,-1.43l0.9,-2.28l0.23,-1.44l-0.4,-0.92l-1.43,-1.44l0.17,-0.44l2.07,-1.45l0.66,-0.68l0.1,-0.39l-0.54,-1.45l0.21,-0.67l0.23,-2.81l-0.24,-1.99l-0.33,-1.74l-0.89,-1.96l0.41,-0.51l1.56,-0.84l1.13,-1.68l1.61,-1.38l2.17,-1.14l1.61,-1.34l1.17,-1.66l-0.43,-1.19l-1.01,-0.82l-1.25,-0.43l-1.89,-0.09l-0.11,-3.06l-0.36,-0.8l-0.88,-0.56l-1.06,0.12l-1.76,-0.47l-0.61,0.3l-2.06,-0.08l-1.78,-0.47l-0.82,0.53l-0.24,0.98l-0.62,0.39l-1.72,0.47l-1.37,-0.04l-2.55,-0.85l-2.62,0.28l-0.62,-0.15l-2.26,1.08l-0.62,0.03l-0.62,-1.02l1.17,-1.69l0.06,-0.38l-1.12,-1.88l-0.35,-0.27l-0.72,-0.06l-4.57,1.41l-1.38,0.79l-1.2,1.03l-0.72,0.16l-0.18,-2.32l2.53,-2.61l-0.12,-0.66l-0.68,-0.24l-0.72,0.02l1.06,-1.45l-0.13,-0.55l-0.92,-0.75l0.15,-1.9l-0.16,-0.84l-0.53,-0.28l-2.47,0.81l-0.02,-0.67l1.24,-1.6l0.21,-0.67l-0.32,-0.5l-1.46,-0.24l-1.05,-0.76l-1.33,-1.66l-0.01,-0.78l0.71,-2.07l2.0,-1.02l1.92,-1.48l2.78,0.27l1.74,-0.34l1.62,-0.82l0.94,-0.2l1.45,-0.7l0.22,-0.38l-0.05,-0.95l-0.41,-0.69l0.23,-0.35l3.27,-1.81l2.1,-0.23l1.93,-0.88ZM370.1,623.83l-0.59,0.91l-1.82,-0.41l0.26,-0.64l0.39,-0.09l0.31,-0.37l0.03,-0.66l0.46,-0.58l2.6,-0.57l0.4,0.32l0.08,0.41l-1.53,1.47l-0.58,0.19ZM370.18,627.26l0.43,0.46l-0.55,0.0l0.12,-0.46ZM164.44,776.55l-0.91,0.89l-0.45,-0.15l0.39,-1.69l0.37,-0.49l1.75,-0.87l1.52,-0.36l0.83,-1.23l-0.52,2.63l-0.85,0.56l-2.14,0.71ZM155.44,788.95l0.69,-0.19l1.68,-1.26l1.2,-2.96l1.67,-3.08l0.34,-1.27l0.46,-0.35l0.91,0.01l0.27,0.45l-0.01,1.42l-0.47,2.52l-0.8,2.08l-3.47,1.18l-1.83,1.61l-0.64,-0.14ZM141.28,788.62l0.11,1.32l-4.04,0.0l0.39,-0.4l0.41,-1.04l3.13,0.12ZM128.81,784.44l-1.25,3.48l-0.98,1.21l-0.52,0.36l-1.26,0.29l-1.66,-1.86l-1.25,-2.48l0.36,-0.23l1.2,0.08l2.71,-0.47l0.66,-0.25l2.6,-2.07l2.13,-0.21l-2.74,2.13ZM117.34,789.64l-0.31,0.07l-0.43,-0.24l-0.52,-0.88l0.58,-0.83l1.31,0.57l0.26,0.48l-0.88,0.82ZM108.62,782.6l-0.21,-0.75l-1.48,-2.62l0.7,-0.91l1.39,-0.03l0.54,0.67l0.18,0.66l-0.31,0.63l0.09,1.0l-0.14,0.53l-0.76,0.82Z",
        name: "Spain"
    },
    ME: {
        path: "M601.12,565.85l1.19,-0.97l0.28,-0.68l-0.09,-0.72l-1.0,-1.62l-0.28,-2.93l0.34,-0.41l1.75,-0.24l0.34,-0.4l0.06,-1.92l0.56,-1.18l2.2,-1.75l0.74,0.07l0.51,0.77l0.4,0.17l0.65,-0.12l0.33,-0.34l0.08,-1.33l-1.22,-2.13l0.14,-0.28l1.2,0.35l1.26,-0.26l0.09,0.61l0.46,0.74l2.58,1.71l1.83,2.12l0.92,0.7l0.86,0.21l1.56,0.91l2.14,0.45l5.15,2.95l0.06,0.52l-1.49,0.41l-0.45,0.68l-1.62,-0.06l-0.33,0.16l-0.34,0.46l-0.01,0.45l0.73,1.46l-0.2,0.93l-1.58,0.72l-1.8,0.45l-0.38,-0.47l0.04,-1.24l-0.35,-0.8l-0.73,-0.25l-0.81,0.44l-1.5,2.24l-1.98,2.47l-1.63,2.79l0.07,0.46l0.63,0.65l0.34,0.8l-0.21,2.52l-1.44,-0.88l-0.9,-1.83l-3.09,-3.08l-3.53,-2.11l0.23,-0.58l-0.34,-0.59l-1.53,0.19l-0.92,-1.43Z",
        name: "Montenegro"
    },
    MD: {
        path: "M712.53,469.11l2.31,-1.33l0.67,0.22l4.47,0.01l1.53,-1.02l1.05,0.19l1.72,-0.95l2.18,0.42l1.32,0.53l0.98,0.89l0.99,0.55l1.04,0.24l0.37,0.29l0.35,0.83l1.09,0.35l1.68,-0.01l0.39,0.23l-0.18,0.59l0.23,0.62l0.51,0.15l0.45,-0.22l0.17,0.1l0.57,0.96l0.6,-0.0l0.78,-0.88l2.88,0.47l1.16,1.99l0.96,0.93l0.99,0.32l1.65,-0.6l0.82,1.24l0.21,1.74l-0.32,1.87l-0.84,2.17l0.18,1.06l0.34,0.59l2.44,1.48l0.73,0.86l0.98,0.61l1.0,0.26l-0.01,1.14l-0.39,0.93l0.02,0.82l0.67,0.88l0.19,1.52l0.46,0.52l1.66,0.96l2.08,0.9l0.74,1.53l-0.24,3.06l0.17,0.37l2.44,1.72l-0.33,0.32l-2.9,0.38l-1.0,-1.27l-0.81,-0.32l-1.41,0.82l-0.63,-0.12l-1.4,-0.8l-0.6,0.02l-0.41,0.25l-0.87,-0.4l-0.6,0.12l-0.62,1.15l-0.1,-1.82l-0.5,-0.51l-0.54,-0.05l-2.77,1.21l-0.63,0.95l0.04,1.05l0.21,1.4l0.77,1.72l-0.41,0.75l-0.3,1.2l-1.2,1.09l-1.45,0.68l-0.23,0.33l-0.12,1.31l-0.72,0.85l-1.47,1.03l-0.96,1.18l0.21,1.78l-0.17,0.7l-2.33,0.22l-1.08,0.59l-1.37,-1.89l0.81,-0.53l0.15,-0.33l-0.06,-1.18l-0.55,-1.9l-0.21,-2.41l0.26,-2.73l1.68,-5.26l-0.27,-1.14l0.22,-2.18l-1.24,-2.78l-1.05,-3.16l-3.05,-2.49l-1.16,-1.93l-2.06,-1.92l-2.23,-3.64l-1.53,-1.5l-0.75,-1.27l-0.65,-2.15l-1.07,-2.03l-2.41,-3.5l-1.17,-1.03l-1.54,-0.78l-1.64,-0.15Z",
        name: "Moldova"
    },
    SY: {
        path: "M844.08,692.68l1.05,-1.15l-0.02,-0.54l-0.85,-0.79l-1.19,-0.32l-0.44,0.17l-0.33,0.53l-3.37,0.05l-0.95,-3.1l-0.15,-1.42l0.03,-1.64l0.71,-2.46l-0.54,-3.21l-1.83,-2.36l0.96,-4.03l0.54,-0.79l0.7,0.07l2.09,1.17l0.59,0.01l0.33,-0.25l0.62,-1.51l0.51,-0.43l1.27,-0.45l0.26,-0.32l0.36,-2.44l1.08,-0.58l2.15,-0.21l0.34,-0.34l0.03,-0.68l-1.36,-2.9l0.78,-3.62l0.59,-1.27l3.45,0.63l0.6,0.85l1.34,0.85l5.0,0.15l6.53,-2.38l3.79,-1.63l1.43,0.12l1.76,0.45l3.25,2.24l1.18,0.4l8.13,0.2l4.56,-0.9l4.5,-1.37l6.04,-2.91l0.0,42.23l-23.22,13.06l-26.4,15.89l-4.44,-0.64l-1.34,-0.36l-2.04,-1.61l-2.15,-0.6l-1.38,-1.96l-0.84,-0.71l-1.22,-0.32l1.56,-2.75l-0.55,-2.19l0.5,-0.94l-0.93,-2.17l0.0,-0.61l0.39,-1.38l0.52,-0.43l0.26,-0.62l1.15,-0.82l0.33,-0.52l-0.11,-0.56l-0.81,-0.5l-0.24,-0.41l0.27,-0.75l1.48,-1.32l1.29,-0.1l1.98,0.19l0.54,-0.28l0.11,-0.6l-1.14,-0.94l0.89,-1.08l1.44,-0.74l1.05,-1.18l0.73,-1.41l-1.07,-3.54l-0.8,-0.7l-1.3,-0.53Z",
        name: "Syria"
    },
    TN: {
        path: "M462.37,661.98l2.02,-1.56l1.07,-2.02l2.03,-1.09l0.2,-0.37l-0.22,-1.31l3.08,-0.9l3.17,-2.45l1.06,-0.57l7.28,-2.24l1.49,0.34l-0.56,1.05l-0.02,0.4l0.63,1.19l0.6,0.12l0.9,-0.72l0.11,-0.48l-0.21,-0.58l2.34,0.05l1.17,0.56l-0.09,2.42l1.91,2.7l-0.46,1.1l0.2,0.52l1.62,0.77l0.39,-0.02l1.44,-0.93l0.78,-1.37l2.62,-0.82l2.43,-1.94l0.9,-0.13l0.24,1.27l0.54,1.19l-0.74,0.43l-1.21,1.53l-2.27,3.84l-2.01,1.09l-1.67,1.56l-0.6,1.18l-0.19,1.36l0.44,2.44l1.22,2.34l1.33,1.36l1.39,0.5l2.77,1.97l-0.03,1.17l0.41,1.47l0.16,1.79l0.95,1.43l-2.07,2.95l-1.23,2.31l-2.34,3.11l-2.07,2.0l-4.51,3.02l-1.16,1.04l-0.84,1.22l-0.35,1.24l0.16,1.42l1.49,3.14l2.07,1.98l2.34,1.11l3.02,-0.35l-0.07,0.82l0.25,1.45l0.41,0.33l2.46,-0.3l0.87,-1.25l1.23,0.69l0.85,2.79l1.37,0.98l-0.54,0.42l0.06,0.66l1.93,0.64l0.91,-0.2l1.03,0.47l-0.59,4.02l-0.07,3.89l1.09,1.9l0.02,0.58l-0.32,0.69l-9.1,4.96l-0.81,0.93l-2.17,1.36l-0.98,2.0l-0.8,0.87l-2.18,0.44l-0.67,0.46l-1.59,2.14l-0.64,1.5l1.74,6.45l0.17,2.33l-0.49,1.11l-4.26,5.78l-4.58,2.09l-6.38,-27.21l-0.45,-0.6l-9.16,-6.5l-0.39,-2.22l-1.27,-3.49l-1.38,-2.04l-0.66,-0.65l-2.67,-1.25l-1.47,-0.88l-0.32,-0.41l-0.3,-1.39l-1.11,-2.83l-1.26,-2.57l-0.44,-1.66l-0.06,-2.11l0.23,-1.44l0.45,-0.56l2.59,-1.95l1.28,-2.42l3.8,-2.32l1.06,-1.39l0.76,-1.5l0.42,-3.72l0.45,-1.54l1.09,-1.79l0.04,-0.33l-1.03,-3.01l0.17,-2.68l-0.15,-1.2l-0.96,-2.29l-0.02,-0.96l1.38,-7.84l-0.2,-0.78l-0.49,-0.72l-1.2,-0.63ZM502.62,689.18l0.61,-0.51l-0.01,0.2l-0.6,0.32ZM499.09,704.5l-1.13,0.49l-1.48,-0.57l0.19,-1.69l1.96,-0.06l1.28,1.1l-0.82,0.72Z",
        name: "Tunisia"
    },
    MA: {
        path: "M184.0,789.94l4.2,-1.13l5.88,-2.66l1.71,-1.08l1.85,-2.18l2.91,-2.72l5.49,-3.3l2.57,-1.88l3.97,-4.76l2.57,-3.84l2.13,-2.47l1.51,-2.25l1.1,-2.4l0.59,-3.62l-0.4,-1.58l-1.69,-2.44l-1.08,-0.65l-0.22,-0.82l0.57,-1.94l-0.01,-3.31l0.33,-5.23l1.77,-4.18l4.47,-5.71l0.85,-2.4l0.55,-4.88l5.44,-5.15l3.27,-4.05l1.08,-0.95l2.81,-1.81l10.02,-4.04l5.67,-2.89l3.44,-2.22l2.01,-2.55l5.46,-9.84l5.39,-13.98l0.39,-1.42l3.92,-0.64l1.43,-0.55l1.55,-0.96l0.73,0.19l-0.38,0.52l0.05,1.92l1.2,2.08l2.05,2.32l3.73,2.93l2.92,1.18l4.05,0.69l4.84,-1.26l2.59,-0.02l1.25,-0.49l1.38,0.75l2.66,0.25l2.66,-0.42l2.08,-1.26l0.83,-0.9l0.15,0.86l1.5,2.82l0.38,0.2l1.4,-0.11l1.34,0.34l2.86,-0.16l2.48,0.27l0.39,1.04l0.8,0.91l4.48,3.31l-0.73,1.88l0.04,0.32l0.45,0.77l1.06,1.12l-0.75,1.72l1.13,2.87l0.19,2.73l-0.28,3.25l0.18,1.09l0.93,2.17l-0.61,3.86l0.73,2.05l1.01,1.67l0.54,2.9l0.86,1.53l1.4,1.32l3.22,2.24l0.44,0.9l-2.25,1.97l-0.29,1.23l0.47,2.08l-0.34,0.14l-15.87,-0.61l-5.67,0.84l-1.23,0.75l-1.05,2.93l-5.56,1.89l-2.14,0.26l-1.37,-0.19l-0.92,0.16l-0.91,0.45l-0.45,0.83l-0.07,0.94l0.21,1.01l0.52,1.06l0.08,0.95l-0.34,0.82l-0.19,1.92l0.29,0.47l1.99,0.94l0.48,0.51l-0.02,0.65l-0.4,0.4l-0.36,0.22l-3.94,0.52l-4.54,3.18l-6.13,2.16l-2.62,1.31l-3.01,4.56l-1.49,1.55l-2.02,1.45l-4.34,1.28l-3.07,0.55l-2.84,0.3l-3.75,-0.09l-0.47,0.41l-0.26,2.16l-0.86,0.99l-0.35,0.1l-6.16,-0.82l-0.74,0.08l-1.45,0.74l-3.3,2.64l-1.8,0.24l-1.01,0.45l-4.25,3.21l-3.61,2.24l-3.96,3.12l-1.51,0.86l-0.3,0.61l-0.07,1.01l-0.0,8.75l-48.43,0.0Z",
        name: "Morocco"
    },
    RS: {
        path: "M607.42,509.85l1.42,-0.57l0.68,-0.8l0.8,0.44l0.99,0.02l0.95,-0.31l2.06,-1.11l1.45,-1.49l0.91,-0.19l3.1,0.39l1.26,-0.26l2.96,0.32l0.57,0.23l1.1,1.16l0.91,1.39l2.91,1.72l0.93,1.46l0.83,0.82l0.78,-0.01l-0.13,1.99l0.27,1.3l-0.19,0.44l0.4,0.79l3.18,2.52l1.09,0.5l0.67,0.06l1.1,0.84l2.71,0.8l0.59,0.54l-0.68,0.82l-0.21,0.68l-0.59,0.16l-0.38,0.59l0.16,0.51l0.36,0.36l1.89,0.81l-2.09,0.34l-0.26,0.39l0.03,0.59l0.29,0.37l2.16,0.6l0.88,0.51l0.67,0.83l1.5,0.52l2.22,0.24l1.44,0.7l0.84,1.21l0.41,0.16l1.66,-0.41l1.96,-1.86l1.75,-0.44l1.8,0.85l0.93,0.66l-0.01,0.18l-0.97,-0.1l-1.09,0.4l-0.95,1.17l-0.06,1.13l0.49,0.96l0.77,0.77l0.94,0.41l0.32,0.34l0.06,0.53l-0.82,0.68l-0.34,0.88l-0.07,1.0l-2.37,1.2l-0.78,2.48l0.05,1.46l0.35,1.3l1.09,1.79l0.39,1.47l0.75,1.06l2.94,1.73l1.3,1.71l1.38,0.92l-0.36,1.07l-1.1,1.24l-0.82,0.59l-1.16,1.52l-1.91,0.1l-1.5,0.81l-0.37,0.83l0.32,0.93l-0.37,2.03l0.49,1.41l0.79,0.91l-0.09,0.47l-1.25,1.65l-0.79,0.18l-0.83,-0.56l-0.77,-0.12l-2.39,0.83l-2.13,-0.25l-1.29,0.34l-0.98,0.55l-1.52,0.39l-0.47,-0.06l-0.42,-0.94l1.19,-0.89l0.11,-0.53l1.52,-2.84l0.31,-1.03l-0.21,-0.67l-0.58,-0.24l-0.77,0.01l-3.31,-1.03l0.13,-0.98l-0.18,-0.39l-2.13,-1.28l-0.24,-0.7l-2.28,-2.26l-1.31,-0.46l-1.52,-0.86l-0.29,-1.04l-0.31,-0.38l-0.34,-0.14l-0.68,0.1l-2.04,1.13l-0.19,0.7l0.58,1.17l-0.07,0.27l-0.26,0.47l-2.08,1.44l-0.22,0.83l0.25,0.57l-1.01,0.3l-0.25,-0.85l-0.97,-0.7l-1.42,-0.58l-3.01,-1.84l-2.27,-0.5l-1.44,-0.86l-0.8,-0.19l-0.75,-0.56l-1.89,-2.18l-2.6,-1.74l-0.26,-0.89l0.64,-0.67l1.1,-0.11l0.62,0.42l0.7,0.09l0.38,-0.16l0.39,-0.55l0.28,-1.06l-0.17,-1.2l-3.14,-4.01l0.35,-0.14l1.91,0.24l1.44,-0.15l0.68,-0.49l0.14,-0.84l-0.61,-0.78l-2.83,-2.54l-1.52,-0.96l-1.04,-0.36l-0.2,-0.3l0.08,-2.31l0.22,-0.62l1.92,-2.86l0.6,-1.47l0.3,-1.51l-0.3,-0.61l-1.61,-0.6l-1.79,0.3l0.22,-0.99l-0.44,-2.38l0.55,-0.15l0.3,-0.53l0.63,0.27l2.51,-0.09l0.48,-0.45l0.05,-0.63l-0.33,-0.54l-0.94,-0.77l-3.09,-1.11l-1.01,-0.88l0.03,-0.83l0.55,-0.59l0.16,-0.56l-0.33,-0.37l-1.26,-0.47l-0.29,-0.44l0.32,-1.03l-0.72,-1.88l-0.58,-0.91l0.59,-0.56l0.11,-0.78Z",
        name: "Republic of Serbia"
    },
    _2: {
        path: "M623.28,565.63l0.23,-1.37l-0.65,-1.57l1.63,0.09l0.41,-0.24l0.23,-0.55l3.48,-1.07l0.27,-0.76l-0.29,-0.57l0.09,-0.19l1.93,-1.27l0.5,-0.84l0.09,-0.76l-0.53,-1.12l1.95,-0.93l0.57,1.38l1.67,0.95l1.21,0.41l2.08,2.07l0.37,0.86l2.01,1.19l-0.14,1.07l0.28,0.43l3.69,1.15l0.93,0.05l-1.88,4.12l-1.1,0.71l-0.15,0.66l0.36,0.88l-1.97,0.42l-0.92,0.69l-0.55,1.2l-1.39,-1.12l-1.41,-0.04l-3.96,1.67l-0.58,1.07l-0.11,1.91l-0.39,0.51l-1.14,-0.15l0.02,-2.13l-0.71,-2.58l-0.55,-0.95l-1.98,-1.52l-1.41,-0.49l-0.69,-1.32l-1.49,-1.91Z",
        name: "Kosovo"
    },
    MK: {
        path: "M629.75,577.29l1.84,0.12l0.78,-0.95l0.13,-1.95l0.28,-0.64l3.61,-1.54l0.89,-0.05l1.45,1.15l0.66,0.06l0.37,-0.28l0.54,-1.26l0.63,-0.43l2.18,-0.43l0.86,0.07l1.64,-0.42l1.06,-0.58l1.14,-0.29l2.05,0.27l2.48,-0.84l1.15,0.64l2.02,2.35l1.19,1.03l1.42,0.79l1.52,0.54l0.42,0.4l1.43,3.5l0.73,0.43l0.06,0.28l-0.73,1.84l-0.29,3.95l-1.62,0.11l-0.61,0.4l-0.51,2.19l-2.82,0.86l-4.13,-0.64l-0.75,0.3l-1.9,0.15l-1.15,0.53l-1.97,2.46l-2.56,1.2l-1.39,-0.49l-0.86,-0.08l-1.24,0.65l-4.44,0.26l-0.63,-0.83l-1.01,-0.25l-1.58,0.18l-0.21,-0.18l-0.69,-2.05l-1.24,-1.16l-1.01,-2.21l0.03,-1.94l-0.54,-1.92l0.88,-0.94l-0.14,-2.11l0.57,-2.22Z",
        name: "Macedonia"
    },
    _0: {
        path: "M628.45,248.96l0.16,-0.05l0.84,0.08l0.31,0.32l-0.63,0.06l-0.68,-0.41ZM621.69,243.28l1.25,-0.06l0.94,0.68l0.42,0.54l0.66,0.27l-0.63,0.99l-0.8,-0.15l-1.25,0.46l-0.32,0.82l0.0,0.92l-2.69,0.2l-0.49,-0.23l-0.9,-2.45l0.11,-0.4l0.54,-0.21l0.06,1.05l0.47,0.37l0.85,-0.15l0.32,-0.29l0.34,-1.72l-0.3,-0.6l-0.75,-0.51l0.26,-0.39l0.49,-0.18l0.58,0.76l0.84,0.28ZM616.9,246.18l-0.55,0.17l-0.39,0.42l-0.14,-0.48l0.3,-0.83l0.49,-0.02l0.28,0.74Z",
        name: "Aland"
    },
    SK: {
        path: "M655.85,455.69l-1.87,2.97l-1.26,3.23l-2.02,2.0l-0.31,2.96l-4.5,0.92l-0.43,-0.1l-0.87,-0.84l-1.18,-1.67l-1.8,-1.11l-1.06,-0.01l-2.48,0.73l-1.65,0.08l-2.74,-0.69l-3.03,-0.07l-2.16,0.4l-0.3,0.25l-2.03,3.85l-5.08,2.53l-0.54,0.2l-2.43,-1.14l-1.36,-0.42l-1.02,0.28l-0.9,0.88l-0.42,0.83l-2.52,0.6l-4.73,0.38l-1.81,0.92l-0.78,1.39l-0.02,0.81l0.33,0.69l-0.48,0.75l-7.63,0.4l-5.12,-0.11l-1.61,-0.65l-2.05,-1.31l-2.2,-1.77l-0.76,-0.32l-1.73,-0.07l-0.57,-0.4l-0.25,-0.72l-1.27,-1.96l-1.41,-3.18l-0.03,-0.76l1.03,-1.78l0.6,-2.25l1.01,-1.74l0.9,-0.97l0.53,-0.25l3.99,0.56l2.05,-0.28l1.81,-0.81l1.92,-1.52l0.31,-0.5l1.68,-0.56l0.66,-0.61l0.43,-2.19l0.57,-1.15l2.67,-1.34l0.77,-1.01l2.29,-1.67l2.02,-0.05l1.07,-0.29l1.14,0.17l0.33,1.5l0.41,0.33l2.46,-0.07l0.32,-0.17l1.29,-1.85l0.66,-0.23l1.69,-1.12l2.4,3.23l1.74,0.5l0.15,1.45l-0.41,1.13l0.26,0.48l0.62,0.21l1.69,-0.45l1.76,0.65l0.5,-0.22l0.65,-1.5l0.65,-0.68l2.55,-1.15l0.83,-0.12l1.48,0.18l1.02,-0.17l1.37,0.34l1.03,0.74l1.05,0.26l1.07,-0.04l1.03,-0.56l0.94,-1.22l3.47,-0.19l3.82,0.29l0.99,0.52l2.34,0.66l0.92,0.68l0.88,1.68l6.68,2.35Z",
        name: "Slovakia"
    },
    MT: {
        path: "M547.69,672.17l-1.11,0.1l-0.87,-0.6l-0.01,-0.92l0.72,0.18l1.27,1.23ZM543.86,669.2l0.21,-0.04l0.18,0.07l-0.23,0.07l-0.16,-0.09Z",
        name: "Malta"
    },
    SI: {
        path: "M558.41,514.15l-0.58,0.36l-0.28,0.83l0.1,0.77l0.56,0.93l-0.87,0.29l-1.65,-0.15l-2.27,-0.83l-0.74,0.12l-0.72,0.39l-0.51,-0.13l-1.82,-1.48l-0.49,-0.57l-0.2,-0.62l-0.57,-0.36l-0.96,0.41l-1.36,2.21l-0.59,0.31l-3.71,0.06l-1.44,-0.5l-0.3,0.1l-0.59,0.96l-0.57,0.27l-3.3,-0.75l-0.11,-0.14l1.41,-0.95l0.72,0.07l1.13,-0.28l0.41,-0.37l0.08,-0.48l-0.67,-1.21l-1.49,-1.37l-0.84,-0.56l-1.03,-0.34l0.48,-2.4l-0.56,-0.5l-1.08,0.09l-0.11,-0.21l0.05,-0.3l1.73,-1.57l0.25,-0.42l0.02,-0.57l-0.29,-0.34l-1.94,-0.68l-1.0,-0.0l-0.2,-0.4l0.21,-0.69l2.08,-1.55l1.52,-0.79l0.41,-0.89l2.74,0.31l2.33,0.62l6.38,1.01l0.69,-0.64l2.11,-1.05l1.22,-1.44l0.57,-0.35l1.4,-0.33l2.86,-0.28l3.12,0.21l1.44,-0.43l1.21,-0.75l1.66,-0.2l2.53,0.56l0.43,-0.19l0.29,-0.45l0.04,-1.7l0.63,-0.57l0.61,-0.25l2.29,0.09l0.53,2.01l0.65,0.7l0.07,0.9l1.15,1.33l-1.93,-0.14l-0.74,0.39l-0.47,0.55l0.08,1.71l-1.48,-0.14l-0.71,0.2l-1.02,1.18l-0.8,0.41l-4.21,1.44l-0.67,1.32l0.16,0.75l0.85,0.93l0.11,0.93l-0.28,1.86l-0.24,0.31l-2.25,0.6l-2.4,1.1l-0.28,0.53l0.12,0.38l0.87,0.78Z",
        name: "Slovenia"
    },
    SM: {
        path: "M519.71,543.1l-0.32,0.05l-0.12,-0.21l0.34,-0.45l0.33,-0.05l-0.22,0.65Z",
        name: "San Marino"
    },
    SA: {
        path: "M828.42,789.94l-0.39,-0.46l-1.54,-0.81l-3.38,-0.31l-1.41,-0.32l-1.07,0.62l-0.04,-0.41l0.88,-1.65l1.31,-3.58l0.28,-3.22l1.97,-8.95l14.07,2.35l0.87,-0.15l5.7,-4.43l3.14,-5.02l0.56,-0.41l9.78,-1.99l0.4,-0.39l2.08,-4.63l4.38,-2.44l0.11,-0.62l-6.8,-7.58l-6.6,-6.77l26.53,-7.38l0.63,-0.27l1.87,-1.64l16.36,2.75l1.49,0.7l0.0,57.01l-71.18,0.0Z",
        name: "Saudi Arabia"
    },
    UA: {
        path: "M653.07,467.62l-0.19,-0.74l-0.28,-0.28l-1.33,-0.03l0.12,-2.22l2.03,-2.04l1.29,-3.29l1.79,-2.7l0.18,-0.58l3.27,0.94l0.74,-0.39l0.29,-0.58l-0.19,-0.78l-1.79,-1.47l0.38,-2.04l-1.1,-4.13l0.67,-1.03l4.45,-5.14l5.02,-4.84l1.33,-1.0l2.72,-2.55l3.41,-0.56l1.93,-2.52l0.04,-1.69l-0.66,-1.89l-0.81,-1.03l0.88,-0.25l0.6,-0.46l0.14,-0.42l-0.13,-0.5l-1.58,-1.38l-0.59,-0.85l-1.06,-2.46l-2.62,-3.21l-0.07,-0.55l0.27,-0.93l-0.32,-1.06l-0.61,-1.04l-0.01,-1.46l0.96,-0.37l1.05,0.07l0.89,0.22l1.45,0.71l2.54,-1.53l2.08,-1.99l1.03,-1.59l6.71,-0.55l2.72,-0.57l2.65,-0.13l8.86,0.43l4.61,1.05l1.67,0.19l0.89,0.57l4.32,0.77l2.46,0.31l2.38,0.0l2.07,2.74l0.92,0.15l1.48,-0.21l1.91,0.08l0.86,0.38l-0.14,1.19l0.17,0.38l0.6,0.28l0.82,-0.23l1.34,-1.79l2.04,0.55l0.94,-0.1l1.34,-0.76l1.41,0.45l1.8,0.33l1.45,0.03l0.68,0.27l0.77,1.59l1.26,0.46l0.41,-0.19l0.8,-1.31l0.65,-0.46l1.65,-0.54l1.17,-0.96l0.35,-0.02l0.7,0.66l1.69,3.01l0.73,0.65l0.37,0.08l2.78,-0.93l4.78,-0.42l2.08,-0.43l1.16,0.07l1.78,1.25l0.48,1.45l1.58,0.92l1.44,0.22l0.41,-0.23l0.4,-0.88l0.69,-0.61l0.12,-0.42l-0.44,-2.15l-0.87,-2.05l0.63,-1.52l1.11,-2.22l1.14,-1.4l2.99,-2.68l1.16,-0.48l2.04,0.41l1.65,-0.95l2.97,-0.05l2.74,0.15l2.68,0.97l2.06,-0.07l2.35,-1.21l1.22,-3.0l0.71,-0.46l0.85,-0.02l4.12,1.02l1.41,-0.1l3.32,-1.51l1.76,-0.22l2.24,0.36l2.19,0.02l1.59,-0.21l0.98,0.46l1.32,1.1l1.21,1.66l1.4,3.3l3.75,3.5l-0.11,0.61l-3.32,0.63l-0.34,0.35l-0.02,0.88l1.11,1.58l0.07,2.25l0.33,1.15l0.62,0.53l-0.82,1.11l0.12,0.5l0.5,0.29l3.42,0.12l3.05,1.17l0.78,0.04l1.45,-0.35l2.41,-0.24l1.25,2.5l0.76,0.36l1.36,0.04l-0.27,0.63l0.08,0.66l0.45,0.92l0.49,1.84l0.76,1.25l0.0,0.63l-0.65,1.46l0.27,1.27l1.11,1.57l0.8,0.42l0.78,1.34l1.12,0.41l0.35,-0.04l2.77,-1.54l2.87,0.48l0.86,0.63l0.8,1.04l0.85,0.56l1.11,-0.21l1.55,0.25l0.81,0.78l0.81,0.46l0.41,-0.01l1.88,-1.45l2.98,-0.81l1.98,-0.22l2.8,-1.15l0.83,0.08l0.96,1.14l1.05,0.84l0.34,1.37l1.43,1.96l3.34,2.57l1.35,0.81l1.16,-0.09l0.72,-0.35l0.3,-0.45l0.18,-1.14l0.23,-0.25l0.39,-0.01l2.67,1.56l2.59,0.2l1.69,1.17l2.08,1.1l1.64,0.09l1.78,-0.6l0.78,1.16l0.77,0.7l1.07,0.3l1.25,0.05l4.21,2.69l1.5,0.14l2.03,-0.5l0.42,0.22l0.09,0.27l-0.46,0.86l0.0,1.15l0.93,1.25l0.02,0.88l-0.71,1.68l-2.33,2.28l-1.74,0.48l-0.99,0.5l-0.2,0.47l0.33,0.98l0.8,0.9l3.08,1.14l-0.89,0.19l-1.76,-0.14l-1.31,1.36l-0.82,2.61l0.3,0.5l1.58,0.33l0.75,0.4l0.65,2.74l-0.39,0.36l-0.16,0.77l0.38,0.56l1.14,0.33l-0.98,1.32l-1.48,3.53l0.0,1.35l-0.38,0.48l-4.48,0.18l-6.63,-0.37l-1.19,0.33l-1.59,2.23l-0.97,0.76l-1.66,0.71l-2.07,0.29l-1.24,1.08l-0.39,1.37l-0.04,1.26l-0.72,1.43l0.07,0.65l0.26,0.29l0.68,0.23l-0.74,0.67l-0.27,0.64l0.1,1.34l-4.76,-0.22l-3.93,0.37l-2.89,2.7l-1.6,0.01l-2.4,0.74l-1.66,0.94l-1.64,1.67l-1.38,-0.75l-1.76,0.02l-1.92,0.57l-2.01,1.22l-1.01,0.2l-2.4,-0.34l-2.68,0.72l-5.92,4.2l-0.85,1.26l-0.06,-0.98l-0.84,-1.19l-0.64,-0.01l-2.18,2.85l-1.23,0.42l-1.63,0.89l-0.21,0.34l-0.08,2.04l0.21,1.55l0.69,1.89l1.61,3.06l3.22,4.28l1.58,1.61l1.23,0.7l1.53,0.14l2.77,-1.34l0.99,-0.18l2.36,0.49l0.37,-0.11l0.81,-0.82l1.12,-0.43l1.51,-0.06l3.32,0.89l-1.5,2.39l-0.7,2.57l-1.95,0.58l-2.39,-0.07l-2.35,0.4l-1.41,-1.04l-1.2,-0.55l-1.47,-0.29l-1.5,0.36l-1.72,2.08l-2.67,1.34l-0.94,1.5l-2.45,-0.32l-2.42,0.27l-3.46,1.46l-2.67,3.13l-2.71,1.84l-2.1,0.57l-1.96,-0.18l-1.26,-0.53l-2.53,-1.83l1.01,-1.84l1.11,-3.8l-0.15,-1.47l-0.78,-2.16l-2.21,-1.51l-1.96,0.2l-0.87,-0.35l-3.8,-2.62l-2.11,-0.17l-2.05,0.49l-0.58,-0.27l-0.32,-0.49l4.02,-2.95l4.18,-2.58l1.9,-0.29l2.58,-1.26l2.69,-1.85l0.16,-0.43l-0.38,-1.45l-0.61,-1.16l-0.44,-0.2l-2.12,0.61l-2.04,-1.04l-0.78,-0.8l-0.38,-0.11l-3.47,0.87l-2.0,-0.12l-4.23,0.79l-1.86,-0.74l-4.05,-2.24l-1.5,-0.45l-1.23,0.07l-0.17,-0.18l0.26,-0.11l1.0,-0.05l1.25,-0.41l0.37,-0.66l-0.06,-0.73l-0.3,-0.35l-2.07,-0.55l-1.91,-0.16l-1.14,-0.62l1.01,-0.01l2.22,0.57l3.41,0.21l3.09,0.58l2.9,-2.06l0.42,-0.47l0.03,-0.48l-0.45,-0.17l-2.95,0.84l-2.9,-0.52l-1.01,-0.69l-0.86,-1.03l-0.34,-1.11l0.24,-1.25l-0.37,-2.3l-1.35,-2.95l-1.18,-1.12l-0.51,-0.02l-0.12,0.49l1.04,2.12l0.38,1.4l0.62,1.3l-0.14,3.34l-0.31,0.96l-0.98,0.24l-2.85,-0.46l0.34,-1.53l-0.17,-0.42l-0.46,0.01l-1.0,0.76l-1.19,1.74l-0.91,0.23l-2.56,-0.19l-4.62,1.23l-0.29,0.29l-0.98,3.07l-0.88,1.69l-1.92,2.66l-3.91,3.98l-4.21,1.88l-0.96,0.3l-1.74,-0.36l-1.2,0.75l-0.41,0.86l-0.01,1.39l0.97,1.2l0.72,3.13l-0.1,0.48l-1.51,-1.33l-2.41,-0.84l-2.58,0.32l-2.62,1.37l-1.64,0.47l-0.83,-0.31l-0.73,-0.0l-0.55,0.61l0.02,0.59l-3.8,-0.88l-1.69,-0.86l-1.12,-1.36l0.85,-0.48l2.12,-0.14l0.52,-0.22l0.43,-1.31l-0.26,-1.46l0.79,-0.97l1.38,-0.95l0.92,-1.05l0.2,-1.44l1.39,-0.67l1.45,-1.41l0.77,-2.41l-0.83,-1.85l-0.2,-2.07l0.28,-0.4l1.14,-0.6l1.45,-0.44l0.09,2.09l0.34,0.39l0.54,-0.02l0.42,-0.27l0.59,-0.99l0.99,0.29l0.82,-0.29l1.27,0.75l0.93,0.19l0.91,-0.33l0.51,-0.46l0.27,0.08l1.09,1.38l0.43,0.14l3.15,-0.45l1.01,-0.9l-0.07,-0.59l-2.61,-1.84l0.21,-3.09l-0.33,-1.0l-0.6,-0.9l-2.29,-1.05l-1.8,-1.18l-0.11,-1.31l-0.67,-0.88l0.48,-2.47l-0.27,-0.76l-0.39,-0.34l-0.89,-0.13l-0.84,-0.52l-0.72,-0.85l-2.31,-1.37l-0.23,-0.4l-0.12,-0.51l0.82,-2.15l0.34,-1.26l0.02,-0.85l-0.29,-2.08l-1.12,-1.57l-0.78,-0.17l-1.42,0.65l-1.15,-0.9l-1.22,-2.1l-0.27,-0.19l-3.33,-0.54l-0.34,0.13l-0.59,0.67l-0.37,-0.7l-0.48,-0.26l-0.5,0.06l0.14,-0.47l-0.18,-0.46l-0.76,-0.44l-1.93,-0.04l-0.67,-0.23l-0.22,-0.69l-0.57,-0.44l-1.12,-0.28l-0.89,-0.5l-1.04,-0.93l-1.53,-0.6l-2.47,-0.45l-1.85,1.0l-1.08,-0.18l-1.37,0.99l-2.85,0.05l-2.39,-0.27l-2.8,1.62l-0.38,0.61l-4.06,0.91l-0.29,0.29l-0.37,1.5l-1.39,1.88l-9.4,1.42l-4.0,1.52l-1.37,1.36l-2.09,0.42l-4.14,-3.56l-1.48,-0.38l-1.53,0.15l-1.38,0.47l-1.27,0.08l-1.51,-0.63l-0.93,0.12l-4.48,-0.97l-3.48,0.03l-2.69,-1.58l-1.04,-0.1l-0.97,0.78l-0.47,0.69l-2.08,0.84l0.02,-1.1l-0.38,-0.65l-0.84,-0.78l-0.35,-0.17l-1.15,0.09l-1.1,-0.44l-0.93,-1.27l-1.31,-0.66l-0.96,-0.23l-0.94,-1.63Z",
        name: "Ukraine"
    },
    SE: {
        path: "M520.76,323.75l2.31,0.87l0.76,-0.19l0.66,-0.42l0.14,-0.52l-0.81,-1.59l-0.71,-0.77l-0.24,-0.55l1.04,-0.19l1.1,0.06l0.35,-0.17l0.9,-1.54l-0.49,-1.97l-1.44,-0.87l-0.95,-0.25l-1.88,-2.97l-2.08,-1.66l-3.6,-6.12l-1.32,-4.24l-0.51,-0.26l-0.86,0.28l-0.9,-3.2l-0.08,-1.27l-0.26,-0.35l-1.72,-0.66l-0.41,-4.77l-0.3,-0.35l-1.93,-0.51l-1.22,-2.08l-0.24,-4.28l-0.2,-0.32l-1.38,-0.8l-0.89,0.07l0.29,-1.68l-0.64,-4.03l-0.21,-3.69l-0.54,-1.23l-0.27,-1.18l0.49,-1.42l0.99,-0.13l1.05,0.84l1.08,2.44l1.23,0.55l1.65,-0.68l1.12,-2.03l1.2,-5.71l-1.57,-5.83l2.05,-2.13l1.28,-3.25l0.59,-0.43l2.52,-0.49l1.73,-1.15l2.66,-2.86l0.48,-2.89l0.02,-1.31l0.49,-1.01l0.49,-1.96l-0.5,-2.21l-3.21,-7.03l-0.24,-1.94l1.98,-0.63l2.88,-0.11l0.56,-0.36l1.04,-2.45l0.74,-1.06l0.73,-2.76l-0.09,-0.33l-1.67,-1.94l-2.22,-2.02l-1.56,-0.72l-4.24,-2.89l1.8,-9.09l0.16,-2.55l-2.56,-6.53l0.33,-2.73l-0.41,-4.04l1.37,-1.57l0.05,-0.47l-1.07,-1.87l-1.79,-4.1l2.76,-4.11l-0.39,-2.32l1.58,-1.5l4.88,-5.8l1.66,-1.2l2.57,-1.06l2.85,-0.52l1.24,0.01l8.94,1.31l0.91,-0.69l0.88,-1.26l1.06,-1.69l0.15,-2.08l-0.38,-2.85l-0.59,-1.74l-5.55,-2.58l6.02,-7.64l3.22,-4.96l1.0,-2.06l0.79,-1.0l0.94,-7.63l1.16,-3.36l0.0,-1.23l-1.16,-5.96l6.39,-0.83l4.58,-1.92l1.56,-1.27l0.14,-0.39l-0.78,-3.91l1.68,-1.31l4.43,-4.91l4.77,-4.71l2.37,-1.99l0.4,-2.56l-1.05,-2.31l-3.01,-3.8l0.7,-1.43l3.43,-1.05l1.77,-1.7l2.84,-6.36l5.14,-3.08l1.96,-1.6l7.81,3.15l0.47,-0.13l2.84,-3.95l0.73,-1.63l-0.37,-6.41l0.17,-1.15l1.64,-0.55l0.91,-0.15l5.22,1.44l3.88,0.18l2.76,0.64l8.28,2.42l1.69,0.08l3.69,-2.87l-0.1,-0.68l-2.97,-1.22l1.87,-1.21l1.29,-1.61l1.12,-2.04l0.39,-2.24l-0.15,-1.32l-0.84,-1.04l-1.57,-1.44l5.83,-0.32l3.49,1.28l0.2,1.48l0.21,0.29l3.54,1.83l1.05,0.98l2.15,1.45l0.7,0.87l2.01,0.92l5.16,3.06l2.76,1.04l2.32,0.34l5.63,1.69l0.91,0.52l3.19,2.48l1.11,2.74l0.34,0.25l1.62,0.13l0.47,0.87l1.61,1.66l2.08,1.38l-1.82,1.61l-0.19,1.9l0.17,2.33l0.55,1.9l-0.04,0.38l-0.97,1.73l-0.15,1.45l0.57,0.59l2.52,0.22l0.75,0.3l0.47,1.84l-1.41,1.11l-0.54,0.92l-0.09,1.32l0.26,1.35l0.56,1.56l3.57,4.33l0.53,1.22l-0.61,0.75l-0.61,1.57l-0.38,2.92l-1.22,1.48l-0.86,0.53l-0.43,1.07l-0.12,1.6l0.36,2.86l0.3,0.93l0.47,0.66l2.15,1.04l1.83,3.4l1.28,3.65l-3.01,0.43l-2.89,-1.0l-1.28,0.49l-2.34,0.03l-2.67,0.41l-1.55,1.09l-2.27,-1.04l-2.31,-1.86l-0.51,0.01l-1.64,1.38l-0.76,0.19l-1.06,-1.24l-0.87,-0.21l-0.37,0.1l-0.57,0.59l-0.39,1.1l-0.68,0.98l-0.35,3.09l-1.94,-0.26l-0.44,0.48l0.14,0.6l0.53,0.47l-0.38,0.23l-2.14,-0.05l-0.38,0.24l-0.23,0.53l0.05,0.4l0.47,0.62l-0.61,0.64l-2.57,0.44l-1.83,0.02l-0.55,0.67l-0.09,0.87l0.29,0.61l0.77,0.46l0.08,0.6l-1.88,-1.4l-0.5,0.08l-0.3,0.57l0.37,0.76l0.98,0.92l0.49,0.78l0.41,0.89l-0.06,0.55l-1.93,2.38l-3.11,2.99l-0.85,1.59l0.1,0.49l1.82,1.74l1.54,3.91l1.61,1.71l-0.59,1.44l-2.79,1.72l-3.32,2.76l-3.43,6.64l-1.04,0.81l-2.98,1.11l-1.22,1.15l-2.17,1.25l-4.05,1.19l-1.79,1.55l-0.81,1.54l-0.53,0.07l-0.85,-0.58l-1.19,-0.47l-0.54,0.31l-0.16,1.14l-1.25,-0.75l-0.51,0.08l-0.97,1.16l-0.66,1.65l-2.53,2.16l-2.77,-0.4l-0.7,0.56l0.17,0.62l0.24,0.09l-0.68,0.01l-1.18,0.44l-0.74,-0.03l-0.39,0.27l-0.94,2.25l-2.29,0.6l-0.72,0.96l0.32,0.59l2.05,0.13l-0.3,1.29l-2.74,0.93l-1.07,1.24l-0.71,-0.02l0.17,-0.42l-0.38,-0.55l-1.69,0.04l-0.49,-0.91l-0.6,-0.13l-0.37,0.29l-0.14,0.41l0.22,0.91l1.02,2.21l-0.33,0.64l-0.45,0.38l-0.03,0.58l0.55,0.51l0.92,0.28l-0.87,0.37l-1.41,1.48l-1.42,0.04l-1.13,1.05l-0.71,-0.0l-0.83,-0.64l-1.34,-0.55l-0.52,0.21l-0.43,0.96l-0.1,0.89l0.78,2.12l1.53,1.63l0.68,0.36l-1.12,1.3l-1.84,6.3l0.33,1.97l0.58,1.46l-0.97,-0.08l-1.82,-0.67l-0.53,0.45l0.23,1.26l-1.12,1.82l0.44,2.39l-0.34,1.5l0.12,0.38l0.46,0.43l0.2,0.66l-0.42,0.9l0.19,0.54l0.44,5.34l-0.11,0.85l0.99,2.76l-0.36,2.22l0.14,0.35l1.48,1.23l2.8,0.05l0.33,0.2l0.85,1.75l0.4,0.25l1.24,-0.12l1.71,-0.81l0.79,-0.14l0.7,1.43l2.09,2.15l1.35,1.02l1.94,0.48l1.89,1.5l-0.27,1.82l0.15,0.38l1.01,0.75l2.41,0.77l1.86,2.64l0.72,2.14l-0.21,1.13l-3.27,1.95l-1.93,1.86l-2.32,1.47l-0.98,0.35l-0.79,0.74l-0.61,0.26l-0.88,-0.13l-2.58,1.36l-1.58,-0.34l-0.53,-0.48l0.43,-2.78l-0.37,-1.02l-0.35,-0.45l-0.48,-0.12l-1.2,0.52l-0.23,0.45l0.12,0.6l-1.5,0.03l-1.87,-0.87l-0.56,0.31l-0.18,1.3l-3.74,-1.32l-1.27,0.33l-1.72,-0.69l-0.39,0.05l-1.05,0.78l-1.13,-0.25l-0.91,-0.97l-0.61,0.04l-1.28,1.73l-5.63,0.79l-0.35,0.33l0.23,0.43l1.53,0.65l6.27,-0.12l1.89,0.46l2.17,-0.28l1.93,1.37l1.52,0.39l1.68,1.6l0.46,0.07l0.8,-0.41l1.24,0.06l1.39,0.48l4.15,-0.06l1.52,-1.15l2.06,0.22l1.06,-0.31l0.88,-0.73l1.74,-0.07l1.3,-0.7l0.43,0.17l0.49,0.84l-1.13,0.49l-1.07,0.03l-0.38,0.3l-0.54,2.14l-1.03,1.23l-2.47,0.91l-1.74,1.22l-1.82,0.88l-1.06,-0.11l-1.26,0.94l-2.84,1.13l-1.56,1.59l-3.24,1.35l-1.66,1.1l-4.46,0.06l-4.37,-0.25l-1.55,0.56l-0.25,0.42l0.35,0.35l1.33,0.16l0.92,0.49l1.39,-0.17l4.0,0.51l1.35,1.35l-0.8,0.39l-2.29,0.49l-0.3,0.52l1.51,4.14l-0.88,1.13l-0.06,4.42l-0.96,0.07l-0.36,0.29l-0.56,1.98l0.4,1.19l-0.03,2.25l0.28,1.52l0.62,1.3l-0.25,1.17l-2.12,3.38l0.05,1.51l0.64,2.28l-2.37,6.77l-1.76,2.26l-0.93,1.78l-2.08,5.31l-0.95,0.97l-1.03,0.66l-1.28,-0.67l-1.43,-0.43l-1.67,0.06l-2.42,0.6l-3.73,-0.4l-3.83,0.25l-0.92,0.53l-0.19,0.46l0.43,1.51l-0.8,0.15l-1.2,-0.5l-0.35,0.02l-2.2,1.42l-1.9,1.7l-0.71,1.14l-0.17,2.38l1.76,3.55l-2.0,2.18l-1.06,0.07l-3.83,-0.68l-6.49,1.54l-5.29,-1.1l0.53,-1.06l-0.02,-0.93l0.53,-3.04l-0.08,-1.23l-0.52,-1.24l-1.43,-1.42l-3.24,-4.83l-1.03,-2.15ZM610.35,291.1l-0.27,0.3l-0.17,0.86l-0.16,-0.02l-0.35,-0.49l0.95,-1.01l0.99,0.04l-0.99,0.33ZM608.6,293.08l-0.69,0.4l-0.58,1.21l-1.69,0.68l-0.21,0.33l-0.31,4.36l1.23,1.47l-1.23,0.69l-0.63,0.84l-0.52,1.41l-2.03,0.82l-0.98,0.77l-1.3,1.61l-0.6,1.99l-1.05,0.77l-0.55,0.09l0.48,-1.02l1.04,-1.38l-0.04,-0.53l-0.96,-0.91l-0.59,-1.44l-0.71,-1.05l0.57,-1.33l-0.31,-2.11l0.09,-1.92l1.91,-1.83l1.63,-1.96l1.69,-1.37l2.27,-0.59l0.99,0.53l0.56,-0.21l0.42,-1.14l0.49,-0.18l1.6,1.03ZM602.8,260.19l0.1,-0.33l0.6,-0.21l-0.46,0.3l-0.23,0.24ZM600.15,269.23l0.11,-0.28l0.27,-0.3l-0.36,0.57l-0.02,0.01ZM574.47,322.99l-0.65,0.71l-0.31,-0.99l-0.09,-3.23l0.23,-1.55l2.86,-5.75l1.39,-0.63l1.86,-3.66l0.51,-1.66l1.27,-2.75l0.2,-0.26l0.38,0.11l-0.59,0.73l0.06,1.24l-2.27,4.27l-0.62,2.77l-0.83,0.77l-3.37,9.86Z",
        name: "Sweden"
    },
    IL: {
        path: "M818.82,737.12l2.59,-4.48l1.71,-4.57l1.6,-6.28l2.09,-5.29l0.38,-1.55l1.22,-0.1l2.77,0.19l1.29,-0.9l0.49,-1.81l0.95,0.09l0.28,-0.44l2.27,-1.55l-0.11,1.21l0.91,2.08l-0.48,0.82l0.2,1.43l0.36,0.65l-1.57,2.88l-2.23,0.79l-0.69,0.76l-0.34,3.5l-0.4,-0.04l-0.91,-0.61l-0.17,-0.51l-0.49,-0.42l-2.73,-0.41l-1.89,1.3l-0.74,1.84l-0.75,2.7l0.43,3.83l-0.38,0.84l0.02,0.67l0.55,0.34l1.08,-0.28l1.47,0.67l-1.93,1.04l-1.21,1.12l-1.16,3.23l0.09,0.66l0.79,0.56l2.62,-0.22l2.48,-0.87l1.76,-0.87l-0.6,3.28l0.49,1.55l-2.7,6.71l-1.31,3.79l-0.02,4.22l-0.98,2.42l-1.26,6.16l-0.43,0.53l-3.09,-9.92l-1.74,-3.78l-0.55,-2.25l-3.23,-8.89l1.2,-1.09l0.15,-1.18l2.27,-2.33l0.09,-0.55l-0.52,-0.66Z",
        name: "Israel"
    }
},
height: 790.3366477906968,
projection: {
    type: "mill",
    centralMeridian: 11.5
},
width: 900
}), $.fn.vectorMap("addMap", "france", {
insets: [{
    width: 100,
    top: 500,
    height: 123.98770871955762,
    bbox: [{
        y: -644849.5284701174,
        x: -6082899.139819591
    }, {
        y: -235132.34930523523,
        x: -5752449.304593098
    }],
    left: 10
}, {
    width: 900,
    top: 0,
    height: 746.694658821223,
    bbox: [{
        y: -6244651.762246057,
        x: -571651.210329419
    }, {
        y: -4887012.900574539,
        x: 1064727.1420124765
    }],
    left: 0
}],
paths: {
    "FR-C": {
        path: "M458.83,445.76l1.95,-0.35l3.03,1.58l1.95,0.27l1.37,-0.72l0.73,-1.76l1.22,-4.68l-1.19,-1.15l-0.26,-4.14l-1.81,-2.81l0.86,-2.7l1.65,-0.68l0.84,-1.02l0.29,-4.28l-0.66,-1.43l-1.92,-2.11l-0.96,-0.86l-1.79,-0.64l-0.67,-1.98l-1.73,-2.4l0.64,-0.91l3.13,-2.29l2.41,-0.16l2.48,-2.58l1.63,-3.33l1.7,-1.93l0.19,-3.74l-2.08,-4.16l0.17,-5.06l-2.17,-3.8l-1.06,-3.16l-3.18,-4.2l-1.27,-0.36l-1.13,0.66l-0.76,-1.76l-0.96,-0.91l-3.48,-0.95l-1.34,-3.23l-3.67,-3.94l2.1,-3.42l1.46,-0.64l1.48,-1.8l3.52,-1.57l7.94,-0.8l5.29,-1.4l0.39,-1.63l-1.98,-2.84l0.5,-2.05l-0.92,-1.92l2.46,-0.23l0.41,-0.79l-0.21,-1.13l1.75,-0.2l4.07,-3.3l0.82,0.8l2.07,0.75l0.92,-0.2l1.28,-1.11l1.91,0.36l2.07,-2.26l3.83,-2.18l2.59,-0.73l2.86,0.18l0.27,1.52l1.25,1.52l3.22,1.84l2.72,0.19l3.49,2.88l5.1,-1.14l4.58,1.36l1.41,-0.68l1.06,-1.27l1.82,0.28l1.29,2.19l0.03,1.49l1.1,0.66l1.71,-0.33l4.06,-2.15l0.58,-1.97l1.35,-0.87l0.39,-1.79l1.21,0.2l2.0,4.04l2.46,2.19l1.56,2.63l0.94,0.54l0.28,1.5l-0.41,3.05l0.32,0.66l4.03,2.05l1.74,0.08l2.67,2.22l3.67,0.71l2.06,1.0l0.85,2.72l-0.63,3.32l0.52,1.3l-0.02,1.46l0.82,1.68l-1.19,1.0l-5.54,2.72l-4.06,1.13l-3.55,2.89l0.1,0.81l1.06,1.16l0.45,3.18l-0.15,4.02l1.61,8.12l-0.99,0.98l-4.7,1.0l-2.48,1.16l-0.52,1.08l0.56,1.39l2.04,1.49l0.81,1.4l-1.18,2.86l-0.09,2.56l-0.9,1.88l0.2,0.76l1.8,2.84l1.55,1.42l3.2,6.42l7.55,6.03l2.43,5.41l0.06,0.97l-0.87,2.1l-2.77,2.89l-0.81,1.47l-0.62,3.19l0.73,0.99l0.85,0.2l1.6,-1.2l1.9,-0.6l2.13,1.82l2.81,-0.06l5.93,-1.02l0.73,-0.54l0.63,-1.51l2.08,-0.01l4.17,1.12l2.41,-1.52l1.05,0.73l1.46,2.66l-0.74,2.73l1.01,2.4l0.55,0.5l2.83,0.32l1.35,0.69l2.8,2.78l-0.57,2.1l-1.56,2.88l-0.39,2.24l-0.49,0.1l-2.27,-1.45l-1.35,0.56l-0.04,0.8l0.87,1.5l-1.86,1.79l-0.32,0.95l1.23,1.99l-3.97,1.24l-0.88,1.68l0.56,1.83l-2.45,0.94l-1.75,-0.24l-0.7,0.42l-1.47,3.48l-2.26,2.8l-5.01,0.84l-2.52,-0.04l-0.63,0.49l-0.58,1.76l-3.92,1.29l-3.33,4.57l-1.1,0.45l-4.47,-1.83l-4.13,-3.41l-4.32,-0.86l0.43,-2.0l-1.41,-1.21l-2.79,0.02l-0.88,0.82l-0.63,2.36l-3.66,0.55l-1.34,0.6l-1.68,-1.35l-3.45,-5.83l-1.02,-2.98l-0.61,-0.39l-1.62,0.07l-4.45,2.21l-2.54,0.32l-4.65,3.8l-0.58,0.1l-1.81,-1.9l-1.53,0.66l-1.11,3.92l-1.64,1.03l-0.58,0.99l-1.77,7.31l-1.83,2.78l-0.72,2.01l-1.6,-1.22l-1.15,-1.79l-1.09,-4.83l1.14,-0.77l-0.12,-1.16l-2.87,-1.38l-0.69,-1.95l-2.44,-3.26l-3.22,0.13l-0.3,-2.68l-1.91,-2.42l-1.02,-0.42l-8.44,7.7l-0.74,2.6l-2.44,3.55l-0.58,2.41l-3.68,3.99l-2.82,0.65l-3.45,-0.1l-1.45,0.62l-1.19,-1.14l-1.48,-0.11l-5.34,1.64l-0.88,1.77l-0.95,-1.01l-0.88,-3.39l-1.7,-1.05l1.55,-5.49l-0.1,-0.85l-4.4,-7.34l-0.85,-5.72l-0.6,-1.16l3.17,-0.64l1.11,-0.74l0.07,-1.24l-1.54,-3.19l3.2,-2.58l2.85,-5.59l0.22,-1.14l-1.07,-2.31l0.11,-1.37l2.59,-1.98l0.51,-1.87l3.08,-1.33l2.04,-2.9l1.09,-0.69l1.42,-3.08l-0.14,-1.07l-0.95,-0.99Z",
        name: "Auvergne"
    },
    "FR-B": {
        path: "M238.0,500.63l3.33,-33.35l2.55,-12.04l1.1,-15.98l2.41,-4.69l0.79,-1.06l0.72,-0.24l0.41,0.27l-0.34,2.59l1.43,2.01l4.23,2.89l3.5,1.53l7.32,7.13l1.65,2.15l3.07,14.52l2.13,4.49l2.12,2.43l4.79,3.49l0.52,1.41l0.17,4.42l0.54,1.31l0.96,0.73l0.62,-0.42l-0.81,-4.07l0.52,-2.17l-0.79,-1.78l-1.38,-1.23l1.65,0.3l2.68,1.57l0.51,-0.03l0.06,-0.51l-1.71,-2.53l-5.09,-1.82l-2.05,-1.4l-1.05,-1.86l-0.75,-2.34l-2.25,-14.03l4.56,0.18l1.0,-0.64l0.76,-1.27l0.56,-0.11l1.63,3.55l2.13,0.71l2.33,0.11l3.23,2.19l0.41,0.91l0.02,3.27l1.85,2.9l1.13,0.33l2.3,-0.3l3.66,1.72l2.4,1.97l4.08,1.26l5.28,-1.33l1.9,0.53l1.84,-0.78l1.74,-1.98l0.4,-1.04l-0.7,-1.52l0.58,-0.84l4.85,-2.23l2.42,0.63l1.33,-0.31l1.22,-1.11l0.8,-1.83l2.77,-1.19l1.9,-1.66l0.55,-1.77l-0.03,-3.99l1.42,-4.11l6.52,-4.29l1.99,-0.24l0.86,-0.54l4.41,-6.14l0.72,-4.95l2.82,-0.93l2.26,-3.05l1.88,-1.54l1.09,0.73l4.71,0.47l2.19,2.61l-0.64,3.29l1.7,1.06l3.23,0.38l2.07,-1.71l1.24,0.8l3.25,-0.49l4.3,0.25l3.95,4.87l4.52,1.29l-0.17,0.69l-1.67,1.44l0.28,1.47l4.23,2.02l1.93,-0.26l1.79,1.23l1.56,0.22l-1.06,2.44l0.11,1.19l0.83,0.73l2.19,-0.19l0.25,0.38l-0.48,0.88l-1.53,0.87l-2.43,2.37l-0.63,3.22l2.33,2.04l-2.37,2.35l-0.2,1.31l1.08,0.78l1.93,0.18l0.07,0.86l-0.73,1.62l0.87,1.3l2.81,1.17l3.77,-0.05l-0.37,2.52l0.26,0.87l1.61,2.88l1.96,2.11l-1.43,0.93l-0.48,1.47l1.31,4.0l-0.75,1.96l0.17,1.64l-2.71,2.63l-1.66,2.62l-2.23,0.65l-0.87,1.1l-0.21,1.48l0.64,0.9l-0.39,1.23l-1.54,1.69l-3.23,1.87l-2.82,0.78l-0.98,0.82l-3.33,5.17l-3.48,2.85l-2.93,1.29l-0.86,0.82l-0.26,0.78l1.31,2.09l0.06,1.84l0.83,2.15l2.02,2.25l-0.18,3.0l-0.59,0.58l-4.81,0.36l-2.9,-1.19l-1.49,0.65l-1.07,4.89l0.85,1.37l2.45,0.96l0.36,0.51l-2.45,5.11l-2.16,1.72l0.1,0.72l1.14,0.8l-0.03,0.97l-1.25,0.21l-2.22,-0.7l-1.4,0.32l-0.95,1.82l-2.26,1.33l-1.05,2.84l-3.57,1.87l-1.05,0.18l-2.71,-2.15l-1.51,-0.47l-5.15,1.53l-2.7,-0.26l-9.85,4.44l-4.83,-1.62l-0.8,0.09l-3.43,3.61l-1.92,-0.93l-2.4,0.81l-0.9,1.56l0.25,2.33l-0.72,0.77l-3.59,-0.43l-0.37,-0.73l0.78,-1.23l-0.06,-1.08l-0.91,-0.88l-1.22,-0.35l-2.92,1.49l-1.8,1.72l-4.15,-0.17l-3.48,2.53l-0.12,1.04l1.31,1.37l1.05,2.2l-1.49,3.87l-0.05,2.41l0.82,1.36l-1.48,3.09l-2.0,0.66l0.43,2.06l-1.07,1.59l-0.25,1.25l0.98,0.76l0.99,2.15l2.33,-0.0l5.59,1.04l1.06,0.66l0.67,1.47l1.56,1.16l2.16,4.89l-1.46,0.19l-0.56,0.49l0.03,2.28l0.52,0.69l0.76,0.17l1.43,-1.3l0.75,0.02l-0.11,3.16l1.06,3.23l-2.1,1.0l-0.96,1.06l-0.61,2.64l0.6,2.08l-2.37,2.65l-1.1,3.23l-1.55,0.13l-1.74,2.98l-2.27,1.29l-0.98,1.23l0.15,3.83l-3.38,0.61l-2.69,2.77l0.19,4.12l-1.67,2.3l-0.35,1.23l0.55,3.77l-0.9,-0.1l-0.78,1.18l-0.86,-0.36l-4.31,2.79l-1.69,0.12l-3.22,-1.34l-1.71,-0.07l-0.41,0.38l-0.09,1.48l-1.58,0.74l-0.62,-1.55l-1.55,-0.25l-0.08,-0.91l-2.45,-2.91l-3.23,-2.0l-1.85,-0.12l-0.47,-0.41l0.01,-1.84l-1.4,-2.86l-1.82,-0.52l-4.68,0.75l-4.79,-0.35l-2.25,-0.65l-2.95,-2.22l-3.08,-0.5l-2.03,-1.09l-2.31,0.15l-4.04,-2.43l-3.59,-0.59l-1.04,-0.56l-1.13,-1.69l1.59,-1.68l-0.15,-0.71l-1.6,-0.32l-1.53,0.56l-1.06,1.06l-1.08,4.39l-0.8,0.24l-3.0,-0.46l-2.28,-1.67l-0.63,-1.32l3.7,-3.88l1.61,-5.38l-0.35,-3.1l-2.02,-1.72l-2.04,0.3l-2.51,-1.16l-3.22,-0.56l-1.3,0.75l-0.75,1.77l-1.7,0.25l-0.81,-0.46l-0.51,-2.86l-2.49,-0.99l-3.76,1.0l-0.43,-1.87l-0.91,-1.03l-1.52,-0.66l0.27,-3.62l0.98,0.21l1.38,-0.84l5.45,-0.79l4.04,-1.9l2.27,-3.93l3.76,-2.84l1.47,-3.7l1.91,-6.65l2.51,-12.23l1.46,-4.3l2.15,-9.71l3.96,-21.27l2.1,-15.27l-0.62,-3.76l1.59,-2.05l1.49,-4.83l1.04,-1.13l5.03,0.76l2.3,-0.28l1.4,-0.84l0.2,-1.48l-1.01,-1.12l0.28,-0.48l-0.7,-1.2l-4.62,-3.82l-1.8,-0.89l-0.91,0.36l-3.56,5.22l-0.52,2.33Z",
        name: "Aquitaine"
    },
    "FR-A": {
        path: "M749.42,204.53l5.77,-0.36l1.36,-1.59l3.08,-1.87l2.36,-6.43l-0.53,-0.88l-1.5,-0.78l-0.14,-0.62l2.91,-4.3l0.33,-1.37l-0.57,-1.43l-3.83,-3.81l-1.83,-0.81l-0.15,-1.32l-0.77,-0.76l-1.28,0.65l-0.45,1.75l-2.17,0.87l-1.14,1.58l-1.05,0.07l-0.85,-1.8l-0.77,-0.61l1.21,-1.74l-0.06,-1.04l-5.04,-1.96l-1.91,-1.6l-0.2,-0.81l0.44,-1.33l3.5,-3.15l0.31,-1.9l2.13,-2.7l0.06,-2.17l1.52,0.49l0.81,2.78l0.94,1.02l8.51,2.56l1.02,1.76l2.6,0.97l9.15,-1.22l3.26,1.63l1.38,-0.12l1.81,-1.87l3.26,-5.75l2.23,-0.55l2.65,0.55l2.77,-0.96l5.01,1.23l4.58,-0.2l9.65,4.37l6.29,1.29l-2.94,4.09l-3.49,7.52l-3.2,1.38l-1.16,2.14l-3.07,0.56l-0.65,2.78l-3.8,3.44l-2.72,1.47l-2.66,3.6l-0.53,5.38l0.72,1.99l-2.24,1.73l-2.36,7.27l0.76,5.06l-0.72,0.98l-2.24,1.43l-0.92,4.51l-4.52,5.78l-2.51,6.65l0.18,3.35l2.65,4.1l0.12,2.2l-2.18,2.41l-0.36,2.64l-1.24,1.91l0.21,3.21l-1.18,0.91l-1.06,3.68l0.74,3.93l-1.6,2.08l0.43,2.7l1.99,1.77l2.51,3.91l-0.31,0.87l-3.5,1.32l-2.72,1.92l0.1,0.7l1.12,1.01l-1.73,0.61l0.53,1.53l-0.85,0.74l-2.3,-0.79l-0.93,0.18l-0.3,0.87l0.85,1.21l-0.08,0.79l-1.09,1.22l-1.53,0.53l-4.27,-0.15l-4.24,1.21l-0.94,-0.82l-3.03,-1.12l-0.26,-0.95l1.05,-2.06l-0.39,-0.58l-1.79,0.11l0.45,-2.08l-0.6,-1.89l-3.92,-4.0l-2.77,-0.5l-0.57,-0.53l0.01,-0.77l1.5,-2.01l0.6,-1.7l-0.55,-4.18l-1.75,-1.66l-8.58,-4.29l-0.61,-0.69l-0.05,-0.84l2.13,-0.87l1.13,-1.09l0.16,-1.12l-0.61,-1.66l1.6,-3.12l0.61,-3.06l3.45,-4.12l3.12,-5.81l1.69,-2.31l0.05,-1.09l-0.74,-2.01l8.2,-11.93l-0.06,-1.17l-1.33,-1.31l-3.46,-0.25l-1.4,-0.76l0.68,-3.0l0.59,-7.58l1.09,-1.01l0.02,-0.68l-3.11,-1.59Z",
        name: "Alsace"
    },
    "FR-G": {
        path: "M522.8,186.37l0.16,-1.02l1.68,-1.84l-1.11,-1.4l3.35,-0.37l2.43,-5.34l4.29,-3.8l1.07,-2.07l1.68,-1.1l3.26,-3.42l-0.02,-1.16l-0.99,-0.78l-3.39,0.05l-0.83,-0.47l0.05,-1.11l1.31,-0.86l1.17,-1.67l-0.05,-3.76l1.16,-0.73l3.12,0.34l1.45,-0.25l1.33,-1.0l0.36,-0.86l-0.5,-1.26l-2.28,-1.8l-1.6,-0.47l-0.56,-4.86l-0.9,-2.12l2.95,-1.52l9.41,-1.8l0.52,-0.78l-0.12,-1.35l0.85,-0.54l2.04,0.1l3.04,1.4l2.06,-0.68l2.32,0.84l1.14,-0.78l0.56,-3.35l-0.53,-1.32l-0.68,-0.44l2.22,-1.58l-1.82,-3.65l1.76,-1.97l-0.32,-2.31l0.45,-1.54l-1.6,-4.48l0.75,-0.67l1.86,-0.09l1.55,-0.83l1.47,-2.03l4.92,-3.7l0.94,-1.48l0.01,-1.35l-1.51,-2.11l0.44,-2.67l1.83,-3.2l0.19,-1.43l-2.03,-3.83l-0.03,-2.59l3.3,-0.4l9.73,2.22l1.91,-0.3l8.49,-3.54l2.63,-0.38l0.82,-0.51l1.03,-2.27l0.49,-2.73l-0.42,-1.4l0.42,-1.14l6.43,-5.47l1.16,-0.45l0.17,0.74l0.95,0.53l1.9,-0.28l0.31,0.34l-0.46,3.48l-1.07,0.11l-1.15,2.13l-0.07,2.33l-2.62,6.24l0.88,1.44l2.97,1.1l0.82,1.27l-0.04,1.46l-1.51,3.12l0.87,1.88l0.09,3.19l0.8,0.73l1.7,0.2l5.18,-1.03l3.3,2.38l3.4,1.12l3.27,3.72l2.06,1.48l1.73,0.4l3.85,-0.67l2.26,2.12l0.31,0.88l-0.7,0.59l-0.19,1.13l0.55,1.38l1.85,0.16l0.84,-1.01l2.93,1.14l-0.05,0.82l-6.21,3.82l-1.51,-1.42l-3.82,0.0l-3.29,-1.9l-1.96,0.73l-0.88,1.16l-0.41,3.41l-1.46,1.89l0.74,2.38l1.03,0.78l0.75,2.44l-0.11,1.25l-1.08,2.51l-3.38,4.47l0.74,3.43l-4.2,3.37l-0.07,2.26l-1.5,3.0l1.8,5.64l0.44,5.26l0.62,0.73l1.6,0.68l0.35,0.84l-0.84,1.15l-0.07,2.87l-0.56,1.42l-1.01,0.68l-2.69,0.71l-1.22,1.6l-0.51,2.57l0.64,2.23l-1.48,2.56l0.09,0.99l4.61,3.75l1.29,7.34l2.01,3.08l9.36,6.06l5.08,2.47l4.38,0.68l0.83,1.56l5.79,4.67l-1.89,2.9l0.6,3.51l0.45,0.64l0.99,0.2l1.86,-1.66l1.62,0.08l4.52,5.15l2.7,0.08l1.23,0.72l0.4,2.4l3.51,2.44l0.33,0.77l-1.35,1.24l-0.55,2.56l-1.17,1.96l-0.63,2.55l4.62,3.89l3.34,1.83l0.57,1.4l-0.05,2.95l0.47,0.64l1.01,0.19l1.89,-0.75l2.41,2.53l0.26,1.05l-2.1,0.92l-2.38,2.89l-6.41,3.93l-0.82,1.02l-0.32,1.1l0.57,2.0l-0.55,2.43l0.2,2.14l-0.58,1.27l-6.85,2.14l-4.58,-1.95l-4.29,0.62l-1.45,0.81l-2.83,5.28l-0.39,0.11l-0.67,-0.88l-0.77,-0.22l-2.89,1.56l-0.95,-2.2l-3.74,-2.21l-1.51,-2.37l-1.19,0.09l-1.76,1.89l-1.48,0.14l-2.23,-1.34l-2.42,-2.98l-1.06,-0.04l-1.62,1.4l-0.89,-0.42l-0.95,-4.25l-1.38,-1.79l0.33,-0.6l2.34,-0.37l0.83,-0.93l-0.18,-1.31l-1.18,-2.31l-4.52,-5.41l-1.18,-0.18l-1.09,1.23l-0.51,-0.21l-0.23,-0.95l0.85,-1.35l0.11,-1.07l-1.02,-0.92l-2.65,-0.91l0.44,-1.3l-0.31,-0.7l-4.52,-1.17l-1.99,-1.23l-2.67,0.98l-2.98,-0.51l-1.76,0.38l-1.47,1.25l-0.22,1.84l-0.81,0.45l-13.17,1.5l-2.39,1.7l-1.61,-0.7l-1.94,-2.64l-0.78,-0.38l-0.55,0.41l-0.26,2.11l-1.42,-0.99l-1.03,-0.14l-2.22,1.64l-3.68,-0.39l-1.85,1.2l-2.25,-0.63l-2.88,0.17l-1.97,-0.36l-0.57,-0.86l0.08,-2.22l-0.52,-0.94l-2.65,0.15l-1.41,-0.73l1.56,-0.67l0.12,-0.95l-4.65,-7.0l-1.91,-1.9l-0.72,-1.78l-1.84,-1.02l-0.78,0.28l-0.57,1.04l-1.57,0.12l-2.82,-1.93l-2.05,-0.84l1.9,-2.46l-0.39,-3.31l-0.49,-0.96l-5.62,-6.39l-3.0,-1.66l-2.3,-0.01l-0.47,-2.37l-1.27,-1.43l0.56,-2.26l-0.64,-1.75l1.81,-1.89l-0.93,-1.96l2.55,-0.54l0.75,-0.59l2.0,-3.79l2.66,-1.99l0.06,-0.58l-1.98,-2.34l-2.79,0.05l-0.2,-1.25l0.51,-1.93l-0.76,-3.12l-2.03,-2.25l-1.36,-0.04Z",
        name: "Champagne-Ardenne"
    },
    "FR-F": {
        path: "M412.4,186.99l-0.36,1.11l-1.35,1.63l0.06,1.69l1.48,0.98l1.08,2.19l0.96,0.91l3.83,2.4l0.73,2.38l2.89,2.26l0.32,3.85l0.73,1.46l1.72,1.46l3.1,1.43l1.56,0.49l2.43,-0.21l0.24,2.38l2.15,2.42l0.61,2.81l0.61,0.94l1.26,0.74l-1.59,2.0l0.15,1.43l1.27,0.64l8.96,-1.77l2.18,-0.89l1.74,-2.19l1.08,0.42l1.34,1.84l0.89,0.32l1.9,-0.44l1.82,-1.29l2.61,1.32l2.42,-0.25l1.05,1.47l1.06,3.38l3.56,2.09l1.09,1.21l-0.82,1.86l0.48,1.68l-2.36,-0.11l-1.14,1.09l0.09,1.33l1.07,0.83l2.02,0.26l3.17,-0.65l8.35,0.59l2.29,-0.94l1.66,-1.6l0.82,-0.26l2.03,0.05l-0.41,1.53l1.38,0.57l7.05,-1.97l1.76,0.12l2.27,0.58l1.52,1.02l1.38,4.33l3.86,3.46l0.52,2.18l-1.42,3.21l-4.3,3.48l-1.82,0.56l0.1,2.67l0.94,2.06l-0.78,1.4l0.13,1.67l-0.42,0.96l-4.41,2.06l-4.17,0.46l-1.13,0.96l-0.29,1.64l0.56,1.49l2.33,0.9l2.32,2.0l1.13,2.08l-0.53,2.4l2.52,3.57l-3.82,0.47l-2.79,1.57l-0.07,0.91l1.55,1.67l2.99,5.0l-0.51,2.81l-2.88,4.93l-0.1,0.83l0.94,1.66l1.73,0.94l3.6,3.47l0.87,3.66l2.57,6.96l-0.07,3.7l2.22,2.28l0.43,5.38l-1.31,4.71l1.16,3.29l-2.28,4.15l-0.31,1.64l-3.08,-0.17l-2.72,0.77l-4.06,2.3l-1.68,2.09l-2.02,-0.32l-1.56,1.24l-3.6,-1.48l-4.12,3.34l-2.02,0.37l-0.14,1.87l-2.46,0.24l-0.34,1.12l1.0,1.52l-0.59,1.68l2.01,3.0l0.04,1.05l-5.01,1.3l-7.99,0.81l-3.73,1.66l-1.58,1.88l-1.56,0.74l-2.19,3.55l-5.82,-0.29l-3.22,0.59l-2.11,-0.72l-3.45,0.0l-2.44,-0.84l-5.56,-0.15l-3.14,1.35l-1.02,-0.37l-1.84,-1.89l-0.89,-0.14l-1.27,0.89l-0.16,2.28l-0.72,0.98l-3.84,-0.24l-2.6,1.5l-1.18,-0.45l-0.57,-1.52l-4.66,-0.56l-1.04,0.29l-3.98,3.58l-1.69,0.94l-2.45,-1.47l-1.76,-1.94l-1.67,0.33l-1.03,1.35l-3.36,0.5l-1.43,-0.08l-2.37,-1.16l0.93,-3.22l-0.72,-1.01l-2.42,-1.74l0.45,-2.58l-0.5,-1.16l-2.13,-1.72l-5.0,-0.37l-0.78,-1.97l-3.41,-1.35l-2.08,-1.8l-0.96,-2.74l0.6,-4.32l-0.92,-2.42l-1.83,-2.14l-2.59,-1.8l-7.16,-9.22l-1.26,-3.31l-1.37,-1.88l-6.25,-3.03l-0.71,0.68l0.89,2.76l-0.4,0.35l-5.41,0.31l-2.99,1.37l-2.67,-0.46l-3.72,0.05l-0.92,-0.81l-0.25,-0.97l0.5,-5.05l-0.35,-1.03l-2.01,-0.4l-1.33,-1.41l-3.43,0.61l-0.26,-3.38l-0.99,-0.39l-1.98,0.41l-0.5,-1.99l-0.74,-0.2l-1.7,0.66l-1.69,-2.39l0.88,-5.76l1.43,-5.26l4.43,-6.2l-0.2,-2.83l2.94,-6.85l-0.45,-3.6l1.51,-3.81l8.59,1.6l0.62,-0.83l-0.48,-2.31l0.7,-0.71l2.9,0.89l2.04,-1.63l7.98,-2.4l0.53,-0.72l-0.61,-2.06l0.59,-1.42l1.29,-1.16l5.17,-2.45l1.55,-1.39l1.65,-4.48l0.07,-3.55l0.45,-1.34l3.58,-3.16l0.2,-0.94l-0.42,-1.72l0.6,-3.59l-0.6,-0.63l-1.31,-0.12l-0.88,-2.08l3.18,-0.9l0.07,-1.0l-1.15,-1.3l4.24,-2.28l0.73,-1.28l-1.12,-1.06l-3.14,-0.41l-2.36,-1.54l1.12,-0.96l0.26,-1.0l-1.86,-3.44l0.03,-2.94l-1.33,-1.67l0.61,-1.35l2.29,-0.4l5.6,-2.3l2.13,-1.96l1.89,-3.45l-0.16,-0.83l-1.74,-2.11l0.08,-3.7l-3.65,-3.73l-2.55,-1.62l-1.61,-2.81l-0.36,-3.23l3.16,-2.45l5.76,-1.41l2.04,-0.07l2.44,-2.38l3.48,-0.35l0.63,-0.53l0.22,-1.53l3.0,1.67l3.5,-0.02l1.92,0.63l4.71,-2.07l1.42,-1.16l1.64,-3.27l4.87,-3.2l0.26,-1.64l-0.4,-2.12l2.22,-1.39l4.53,7.07l0.26,1.59l-0.56,2.83l0.31,1.68l2.16,1.48Z",
        name: "Centre"
    },
    "FR-E": {
        path: "M25.63,242.24l0.98,-1.98l0.98,0.49l19.62,-3.77l3.66,0.88l0.91,-0.33l0.5,-0.76l0.62,-2.51l-1.18,-1.92l-0.58,-2.39l-1.01,-0.81l-2.92,-0.68l-1.17,-1.41l-1.37,0.43l-3.12,-1.7l-2.0,0.46l-2.96,4.7l-0.72,0.21l0.57,-1.39l-1.15,-2.33l0.91,-1.36l-0.38,-1.23l-4.3,-0.49l-0.03,-1.0l2.79,-0.08l0.41,-0.82l-0.22,-0.92l1.51,-2.64l0.47,0.19l-0.71,2.55l0.23,0.48l1.87,0.72l5.36,-0.32l2.4,1.02l5.69,-0.9l1.67,0.79l5.01,-0.91l0.33,-0.98l-0.42,-0.4l-1.82,0.11l-0.66,-0.93l-0.68,-0.16l-1.1,0.67l-1.21,-1.03l-2.07,0.18l2.82,-2.48l-0.28,-0.69l-1.24,0.07l-1.28,0.8l0.0,-0.47l-0.86,-0.4l-0.96,1.04l-0.96,-0.19l-1.87,1.1l-0.5,0.08l-0.43,-0.76l-0.56,-0.05l-2.12,0.88l3.25,-3.36l6.46,-3.39l0.19,-0.5l-0.47,-0.25l-4.22,1.6l-4.19,0.6l-5.77,2.77l-4.79,1.41l-1.07,0.12l-4.35,-1.11l-0.58,0.4l-0.42,1.25l-3.56,-0.23l-0.68,-1.74l1.04,-0.5l-0.1,-1.0l-1.05,-2.18l-0.09,-1.34l0.28,-1.34l0.6,-0.89l1.01,-0.27l0.3,-0.87l-1.5,-1.16l0.53,-1.93l2.34,-3.42l1.06,0.45l0.46,-0.14l-0.19,-0.71l0.54,-0.32l2.86,-0.47l3.08,1.22l1.04,-0.16l0.21,-0.65l-1.67,-2.32l4.26,0.34l0.38,-0.34l-0.26,-0.44l-1.23,-0.43l-0.28,-0.99l4.17,-0.0l4.78,-1.07l0.38,-0.31l-0.2,-0.44l-0.86,-0.45l4.61,-1.59l1.37,0.05l0.84,0.86l-0.39,1.52l0.43,0.5l1.58,-0.18l2.35,-1.07l2.95,0.58l0.39,-0.99l-1.04,-0.57l0.11,-0.29l1.92,-1.42l2.45,-0.6l2.3,0.59l0.71,-0.4l0.36,0.69l0.75,0.24l1.01,-1.06l-0.03,-1.18l4.45,-1.51l-0.31,1.22l0.62,0.8l-0.25,0.84l1.04,1.07l-0.07,1.9l0.48,-0.03l1.68,-1.43l0.9,-0.29l-0.18,1.14l3.35,2.74l1.06,-0.54l0.04,-1.53l-0.54,-1.41l0.8,0.35l0.21,-0.4l0.01,-2.72l0.24,-0.44l0.93,0.16l0.45,-0.85l1.48,0.59l2.89,-0.11l2.82,1.61l2.57,-0.38l0.28,1.21l3.57,0.37l1.08,-0.9l-0.71,-3.08l3.31,-0.78l-3.03,-3.0l-0.19,-0.97l2.29,-1.26l1.58,-2.51l2.54,0.49l2.17,1.06l-0.29,0.54l0.32,0.6l2.25,0.04l1.72,-1.23l5.84,-2.09l1.16,0.01l1.67,-1.78l0.55,0.1l0.26,2.26l-1.23,2.36l0.92,1.4l0.96,-1.9l1.79,-1.89l1.89,-1.52l0.82,0.06l1.57,-1.23l0.85,0.84l-0.4,1.97l0.67,0.68l-1.05,2.42l-1.65,2.02l-0.1,0.85l0.4,0.4l0.8,-0.2l3.03,-4.8l0.76,0.15l1.33,-0.57l0.67,0.25l-0.02,0.75l-1.71,1.0l-0.18,0.82l1.07,0.97l1.57,0.52l4.01,0.41l0.01,1.2l-0.81,0.72l0.21,0.84l7.18,5.85l0.88,3.1l-0.04,1.46l5.96,3.06l-1.16,1.99l1.46,0.52l1.88,1.65l0.62,-0.24l0.25,-2.13l2.16,0.1l1.16,-0.4l3.22,-3.61l5.89,-2.96l0.99,-1.11l0.0,-0.54l-0.85,-0.45l2.53,-0.26l0.93,1.09l3.52,-1.6l2.1,-2.09l0.66,0.83l1.03,0.23l-2.69,3.04l0.05,0.62l1.51,0.76l3.44,-2.21l0.41,1.95l0.99,0.84l0.63,2.14l0.57,0.3l1.25,-1.02l0.75,0.88l1.35,-0.4l0.22,-0.9l-0.64,-0.57l0.94,-0.86l1.71,0.64l-0.99,-2.18l4.87,-0.9l1.31,2.11l0.43,1.64l1.16,0.92l-0.26,1.06l1.54,2.0l0.32,0.9l-0.23,1.64l0.67,0.35l2.43,-1.55l0.01,-0.69l-1.38,-0.83l0.13,-0.69l-0.91,-1.66l0.9,0.63l0.48,-0.03l0.09,-0.48l-1.1,-1.52l-1.85,-0.63l-1.49,-3.51l0.99,-1.08l1.06,-0.34l0.66,-1.47l2.21,0.0l0.29,-0.7l4.99,-0.86l0.54,1.17l-1.35,1.87l-0.06,2.08l1.7,1.73l2.68,0.63l4.53,0.05l4.84,-0.64l3.01,-1.38l3.64,8.51l1.91,2.89l3.27,2.38l2.43,0.21l1.93,-0.61l2.78,-1.91l2.08,-0.77l2.22,-2.4l2.39,0.03l6.14,1.5l2.32,1.25l-0.2,5.67l0.77,8.15l-1.95,4.1l1.12,2.57l0.8,4.72l-0.73,1.74l0.74,4.88l1.75,2.24l0.09,4.44l-1.36,0.63l-4.18,0.61l-2.21,1.9l-5.08,13.85l-6.47,-1.09l-1.52,-1.67l-1.29,-0.55l-3.34,-0.0l-1.83,1.23l-6.34,2.57l-1.86,1.31l-1.2,1.56l-2.58,1.54l-7.31,2.01l-3.72,-0.8l-5.64,2.08l-4.45,0.38l-3.35,1.92l-0.46,1.34l0.13,2.04l-1.44,4.96l-0.54,0.87l-2.15,1.35l-1.11,2.03l-0.68,0.15l-0.2,-1.32l-0.56,-0.55l-3.14,0.88l-1.56,-0.86l-0.9,0.05l-0.9,0.52l-1.08,1.84l-1.37,1.25l-3.37,0.29l-1.9,-0.8l-1.35,0.35l-0.47,0.65l-0.65,-0.06l-0.41,-0.22l0.4,-1.16l-0.67,-1.08l0.25,-0.19l3.7,-0.17l3.89,-0.8l-1.3,-0.68l-2.79,0.23l-5.65,-1.72l-4.85,0.66l1.05,-1.04l0.34,-1.53l-1.36,0.75l-2.73,0.25l-0.32,0.4l1.1,0.66l-2.17,-0.48l-0.61,0.32l-0.08,1.62l-0.48,0.24l-3.05,-0.54l-4.35,1.05l-1.5,-0.37l-2.24,-2.86l-1.34,-0.5l-0.54,-0.67l1.52,-0.13l1.14,1.57l1.15,-0.56l0.68,0.47l0.65,-0.25l0.21,-0.94l0.66,0.6l1.69,0.45l1.67,-0.14l1.47,-0.79l-0.13,-0.88l2.17,-2.6l0.37,-1.63l-1.91,-1.99l-0.26,0.86l0.64,0.89l-1.1,0.64l0.6,0.74l-1.52,-0.8l0.37,-0.61l-0.84,-1.0l-2.76,-0.74l-0.44,0.26l0.31,0.55l-3.55,0.47l-1.41,1.55l-2.13,0.64l-0.46,-0.88l-1.32,0.49l-0.18,-1.21l0.69,-1.12l-1.61,-0.61l-0.47,-1.47l-0.85,-0.33l-0.4,0.45l0.47,4.04l1.57,2.61l-0.78,0.06l-1.84,-1.77l-0.48,-0.01l0.02,1.33l-0.45,-1.99l-0.51,-0.31l-0.67,0.41l-0.03,1.56l-1.22,-0.46l-2.65,0.94l0.1,-0.89l-1.36,-0.9l-0.9,-0.01l-0.6,0.64l-1.75,-2.35l-1.96,-1.14l0.78,-2.82l4.43,-1.77l-0.17,-2.55l-0.6,-0.35l-0.71,0.3l0.01,-1.53l-0.4,-0.43l-1.06,0.77l-1.35,-0.45l-0.97,0.17l-0.33,0.36l1.51,1.12l0.5,1.38l-0.92,0.03l-1.65,0.93l-0.19,0.67l0.52,0.61l-0.59,0.38l-0.66,1.45l-2.06,-1.94l-1.13,-0.34l-0.22,-0.8l-2.13,-0.87l-1.87,-0.17l0.46,-1.46l1.6,-0.22l1.27,-2.54l0.89,-0.82l-0.25,-0.95l-3.39,2.75l-3.0,1.15l-0.1,0.75l0.93,0.78l-4.61,0.99l-0.63,-0.17l-2.02,-2.33l-2.01,-3.11l-2.0,0.21l-4.18,-0.45l-1.4,-1.04l-3.4,-0.24l-0.43,-0.91l-0.74,-0.41l-3.29,1.44l-0.96,-0.68l-3.48,0.2l-2.11,-2.73l0.11,-0.99l-0.37,-0.51l-1.34,-0.45l-0.26,-0.87l-1.16,-1.14l-1.71,-1.0l-1.75,-0.32l-0.44,0.53l0.51,1.46l-0.36,0.96l-2.09,0.01l-0.8,0.62l-1.44,-1.01l-2.43,-0.67l-1.74,-3.48l-1.11,1.44l0.43,1.3l1.4,1.55l-1.97,0.89l-0.9,-1.34l-1.28,0.04l-0.48,1.28l0.73,0.75l-0.22,0.89l0.4,0.4l1.26,0.0l-1.8,1.5l-2.27,0.78l-8.52,-0.35l-0.07,-1.48l1.21,-0.17l0.51,-0.76l-0.21,-1.72l-1.54,-4.18l-3.95,-4.79l-6.1,-3.99l-2.48,1.49l-1.84,-1.46l-3.15,-0.07l-3.8,-0.92ZM122.84,278.41l0.11,0.08l-0.08,0.32l-0.03,-0.39ZM122.52,282.01l0.23,1.3l1.66,2.47l-1.55,0.06l-0.71,-2.5l0.37,-1.33ZM133.84,278.55l0.45,0.39l-0.04,0.13l-0.41,-0.51ZM123.36,297.99l1.01,0.42l1.66,-0.07l0.34,0.33l-0.18,0.98l-1.32,0.33l-4.68,-0.37l-3.08,-0.79l-0.79,-0.48l0.14,-1.16l-1.41,-3.37l0.56,-0.67l4.02,1.8l3.72,3.05ZM1.38,208.94l2.5,-0.91l1.47,0.95l-2.48,1.11l-0.61,-1.01l-0.87,-0.14Z",
        name: "Bretagne"
    },
    "FR-D": {
        path: "M572.77,248.31l2.08,2.76l1.34,0.84l0.91,0.04l2.45,-1.72l13.22,-1.52l1.29,-0.82l0.21,-1.86l1.83,-1.16l3.72,0.47l2.38,-0.98l2.0,1.2l3.68,0.69l0.55,0.46l-0.52,1.12l0.41,0.79l3.43,1.51l-1.02,1.96l0.48,1.65l1.15,0.43l1.68,-1.23l3.02,3.37l2.43,4.0l0.05,1.03l-2.6,0.55l-0.83,1.34l1.41,1.97l0.37,2.77l0.83,1.89l1.58,0.62l1.84,-1.46l0.41,0.07l2.15,2.8l2.67,1.55l2.02,-0.25l1.44,-1.65l0.75,-0.28l1.32,2.23l3.65,2.12l0.68,2.08l0.72,0.4l0.98,-0.16l2.09,-1.37l1.56,1.15l1.29,-0.99l2.12,0.66l2.3,-1.66l1.19,0.92l-0.01,1.95l1.12,1.97l-0.07,1.43l-1.89,2.28l-1.75,0.32l-1.04,0.83l-0.58,2.49l0.56,0.82l2.03,0.82l0.58,3.42l2.32,2.25l0.39,4.41l1.07,1.44l-1.64,6.5l-6.08,8.72l-5.33,2.53l-0.45,1.23l0.46,2.52l-2.28,1.17l-1.21,1.29l1.6,2.94l3.44,3.22l7.68,3.56l-1.05,1.51l-4.39,0.61l-1.2,1.17l0.34,1.39l1.85,1.61l-0.9,2.26l1.47,1.38l1.77,6.19l-1.03,3.43l-1.83,1.08l-0.81,1.06l-0.19,2.01l0.61,1.51l2.83,1.66l0.43,0.91l-1.02,0.93l-5.58,1.47l-4.14,-0.98l-1.53,-0.8l-2.16,-1.97l-1.58,-0.52l-7.04,1.55l-4.17,-1.37l-2.22,0.39l-1.85,4.3l-0.85,4.21l-1.47,2.55l-0.15,1.93l-3.53,6.7l-1.24,5.73l-2.89,-0.32l-0.98,-0.75l-0.98,-2.54l0.04,-1.8l-1.73,-1.28l-0.18,-1.86l-2.63,-1.14l-1.11,0.62l-0.53,1.93l-1.03,0.26l-2.35,-2.01l-3.37,1.04l-4.54,-1.43l-0.92,0.11l-0.68,0.9l-1.27,4.46l-1.74,2.06l-3.13,1.66l-1.65,0.02l-4.83,-1.24l-3.08,0.65l-4.17,-0.93l-4.25,1.28l-1.42,-0.08l-2.06,-1.47l-2.76,-1.06l0.11,-2.74l-0.6,-1.7l5.26,-2.58l1.52,-1.33l0.08,-0.97l-0.86,-1.28l0.04,-1.39l-0.52,-1.25l0.64,-3.0l-0.8,-3.17l-2.08,-1.35l-4.18,-0.89l-2.7,-2.24l-1.72,-0.07l-3.83,-1.94l0.37,-3.1l-0.38,-1.88l-1.07,-0.72l-1.57,-2.64l-2.41,-2.14l-0.51,-1.65l-1.52,-2.44l-2.0,-0.46l-0.44,0.26l-0.43,1.96l-1.36,0.87l-0.44,1.79l-3.8,2.0l-1.31,0.28l-0.45,-0.19l-0.06,-1.53l-1.67,-2.57l-2.41,-0.3l-2.3,1.91l-4.46,-1.36l-1.87,0.11l-3.04,1.06l-3.34,-2.82l-2.88,-0.25l-1.82,-0.88l-2.26,-2.3l0.24,-3.05l2.35,-4.46l-1.16,-3.32l1.31,-4.66l-0.44,-5.56l-2.26,-2.43l0.11,-3.59l-2.6,-7.06l-0.91,-3.74l-3.62,-3.57l-1.85,-1.04l-0.71,-1.21l2.92,-5.33l0.57,-3.19l-3.13,-5.39l-1.44,-1.56l2.35,-1.39l2.94,-0.21l1.27,-0.38l0.25,-0.54l-2.68,-3.94l0.57,-2.21l-1.26,-2.45l-2.54,-2.22l-2.26,-0.85l-0.27,-0.84l0.22,-1.32l0.76,-0.58l4.07,-0.42l4.77,-2.29l0.53,-0.86l-0.08,-2.09l0.82,-1.64l-0.97,-2.16l-0.15,-2.18l1.55,-0.25l1.46,-1.47l2.5,-1.52l2.08,-4.18l-0.63,-2.78l-3.84,-3.44l-1.46,-4.45l-1.91,-1.27l-3.81,-0.73l0.73,-2.78l3.72,-2.26l1.64,-2.66l0.15,-0.86l-0.86,-1.48l-0.18,-1.43l1.15,-3.5l0.41,-0.36l3.03,0.06l2.27,-0.89l4.61,0.48l6.23,-0.91l2.51,0.47l2.88,-3.02l0.68,0.48l0.64,2.62l2.58,0.19l2.82,1.56l5.42,6.18l0.76,3.66l-1.83,2.14l0.14,1.13l2.19,0.89l3.06,2.04l2.11,-0.17l0.78,-1.18l1.07,0.24l1.04,2.12l1.93,1.93l4.55,6.82l-1.58,0.68l-0.06,1.02l2.02,1.14l2.25,-0.31l0.18,2.78l0.83,1.24l2.41,0.53l2.82,-0.18l1.96,0.66l2.4,-1.23l3.75,0.36l2.04,-1.61l2.67,1.1l0.66,-0.82l0.03,-1.6Z",
        name: "Bourgogne"
    },
    "FR-K": {
        path: "M419.37,662.92l0.8,-2.94l0.96,-0.82l6.35,-1.21l1.62,-0.04l2.87,0.76l1.42,-0.31l1.24,-1.33l0.64,-2.99l1.5,-1.63l6.16,-0.76l3.36,0.54l0.95,-0.45l0.41,-0.96l-0.75,-1.81l-3.09,-1.57l-2.07,-2.41l-1.45,-0.09l-4.97,0.99l-3.19,-1.51l-0.42,-2.79l-2.59,-1.62l1.46,-2.0l2.2,-0.09l2.98,-1.12l0.67,-0.91l-0.7,-3.27l-1.97,-1.59l0.22,-0.47l2.52,-0.94l0.35,-0.87l-1.18,-4.24l-1.84,-1.68l1.01,-1.4l-0.13,-1.63l-0.81,-1.39l-1.37,-1.06l-2.79,-0.31l-7.47,-2.9l-2.51,-2.02l-1.03,-3.89l0.54,-2.7l1.15,-1.61l0.24,-1.25l3.81,-0.73l1.18,-0.91l-0.18,-2.79l1.5,-1.66l0.46,-1.21l1.39,0.39l0.18,1.21l0.84,0.58l4.13,-1.6l4.75,-0.59l1.8,1.66l1.22,0.49l5.35,-0.56l2.63,1.32l1.45,-0.69l0.36,-1.12l-0.32,-1.36l1.11,-1.2l7.12,1.27l5.76,-0.38l6.52,0.53l2.44,-0.6l3.24,-2.32l0.42,-0.75l-0.67,-1.83l0.6,-2.13l-0.19,-0.87l-2.2,-2.59l0.05,-2.31l1.08,-2.4l2.53,-0.35l4.36,1.68l1.08,-0.09l6.91,-2.67l2.96,-3.02l2.76,-0.52l2.56,0.79l1.34,-0.36l1.02,-1.93l-0.14,-1.78l0.44,-1.97l-0.73,-1.88l0.39,-1.59l1.59,-0.38l6.2,0.72l1.39,-0.44l1.56,-1.67l0.72,-2.42l1.64,-1.06l2.89,-0.27l1.39,-1.03l1.01,-2.68l5.43,-4.9l0.14,-1.05l-0.48,-0.79l-2.93,-2.22l-2.63,-0.53l-1.18,-1.1l-1.67,0.17l-0.93,-0.62l2.15,-1.34l0.28,-2.27l0.85,-1.14l2.09,-1.35l-0.42,-1.72l-1.99,-1.07l-6.03,0.28l-0.56,-1.65l-1.01,-1.16l-4.04,-2.16l-1.29,-0.2l1.45,-3.24l-1.04,-2.1l-0.29,-2.01l0.71,-2.49l0.15,-2.55l-3.33,-4.54l-0.1,-3.67l-1.11,-2.03l-5.17,-5.93l0.78,-2.2l1.89,-2.91l1.74,-7.24l2.23,-2.01l0.66,-3.31l0.73,-0.72l0.53,0.01l1.38,1.73l1.21,-0.04l4.8,-3.85l2.41,-0.28l3.67,-2.03l1.93,-0.24l1.15,2.95l3.5,5.9l1.31,1.29l1.23,0.42l1.33,-0.63l3.37,-0.36l1.07,-0.91l0.56,-2.31l2.58,-0.17l0.84,0.67l-0.48,1.5l0.3,0.89l4.51,0.95l4.08,3.38l4.46,1.87l-0.03,2.85l2.51,8.73l2.82,3.38l2.21,6.94l1.77,1.52l1.64,2.61l-0.83,2.07l0.49,3.26l0.66,0.8l4.86,-0.5l1.08,1.04l4.93,2.42l1.51,0.31l5.74,-3.92l2.44,-0.38l0.36,0.44l-0.02,2.16l1.8,1.05l1.89,-0.92l0.64,-2.28l3.63,-0.29l1.68,0.67l2.19,2.02l4.3,1.4l0.57,1.69l1.23,1.54l0.1,1.58l1.9,1.83l-0.15,4.87l0.45,2.79l0.63,0.47l1.22,-0.4l1.2,0.21l4.49,5.53l-0.08,0.33l-1.64,0.17l-0.07,2.45l-1.05,1.25l-4.47,2.35l-5.36,3.57l0.37,5.07l-1.95,4.8l-0.42,3.0l-4.47,-1.25l-2.03,0.57l-1.49,1.04l-1.68,2.12l-1.37,2.92l0.45,1.06l1.58,0.26l-0.52,1.33l-2.32,0.57l-0.61,1.38l-1.54,0.44l-3.46,2.46l-2.02,0.48l-2.61,1.37l-0.94,2.08l-2.31,-0.3l-1.56,-0.9l-1.72,-4.95l-1.78,-1.24l-2.61,-0.24l1.84,-1.29l0.58,-1.13l-0.41,-0.58l-5.31,1.01l-2.8,1.78l-3.83,1.05l-5.69,3.88l-1.42,2.72l-5.07,1.9l-0.26,0.84l0.42,0.4l2.32,-0.21l-7.34,3.64l-2.05,1.54l-4.98,5.43l-1.05,0.41l-2.29,-1.01l-1.8,0.24l-2.26,1.02l-8.45,5.73l-1.14,1.25l-1.41,2.73l-2.19,1.89l-2.0,3.14l-1.46,-0.95l1.62,-1.25l-0.27,-0.83l-1.98,-0.1l-1.08,0.42l-0.34,0.83l0.47,2.05l2.45,2.24l-1.38,1.86l-0.63,3.64l-1.16,1.88l-0.37,-0.37l0.95,-1.75l-0.39,-0.61l-1.63,0.36l-0.57,1.12l0.9,2.42l1.84,1.62l-0.86,0.6l-1.81,-0.32l-0.36,2.39l-3.13,2.64l-0.02,0.56l1.36,2.06l3.28,0.88l0.82,0.66l0.27,3.73l-0.71,3.64l-0.65,-0.87l-0.63,-0.01l-0.69,0.96l-0.04,0.85l0.89,1.33l1.37,0.37l0.69,6.48l0.66,1.57l4.34,3.99l1.88,2.31l-0.01,1.78l-3.87,0.6l-3.05,-0.09l-1.83,-0.7l-1.61,-2.13l-2.87,-0.28l-1.17,0.57l-2.16,-0.57l-1.94,1.35l-3.1,0.24l-3.76,2.65l-4.83,-0.08l-1.22,0.53l-3.23,2.57l1.02,2.38l-6.36,-1.01l-0.72,0.48l-0.58,1.26l-0.67,0.22l-4.02,-1.84l-1.67,-2.44l-2.78,-0.4l-6.17,-2.92l-5.7,1.23l-3.02,-0.29l-1.14,0.54l-1.01,1.86l-2.45,1.95l-3.06,0.72l-2.48,-1.35l-1.31,-3.75l-1.08,-1.5l-3.53,-0.73l-3.45,-2.1l-5.13,-0.96l-1.11,-0.9ZM436.05,668.06l0.96,-0.23l0.19,-0.59l-1.33,-2.32l-1.1,-0.91l-0.9,0.48l-0.67,1.32l0.07,1.16l0.97,0.83l1.79,0.25ZM550.33,588.78l3.56,-3.07l1.07,-0.32l-4.63,3.39Z",
        name: "Languedoc-Roussillon"
    },
    "FR-J": {
        path: "M527.0,179.34l-0.61,1.77l-2.55,0.08l-0.94,0.42l-0.16,0.75l1.09,1.07l-1.54,1.52l-0.27,1.55l0.54,0.66l1.24,-0.02l1.66,1.83l0.7,2.85l-0.5,1.9l0.28,1.65l0.9,0.56l2.22,-0.3l1.49,1.83l-2.45,1.85l-1.98,3.76l-3.46,1.33l-0.08,0.73l0.94,1.41l-1.79,1.84l0.61,2.03l-0.4,2.85l-2.29,2.74l-2.67,-0.36l-6.17,0.91l-4.68,-0.48l-2.32,0.9l-3.26,0.0l-0.8,0.79l-1.15,3.24l0.03,1.71l0.9,2.26l-1.5,2.46l-3.77,2.32l-0.95,3.37l-5.9,1.83l-1.36,-0.07l0.46,-1.24l-0.4,-0.63l-0.91,-0.28l-2.7,0.45l-1.78,1.66l-1.87,0.81l-8.32,-0.58l-4.04,0.66l-1.29,-0.48l-0.27,-0.92l0.53,-0.53l2.04,0.27l0.77,-0.42l0.21,-0.87l-0.51,-1.19l0.65,-0.99l0.11,-1.36l-1.39,-1.54l-3.36,-1.92l-0.96,-3.2l-1.32,-1.84l-2.63,0.17l-2.83,-1.36l-0.86,0.16l-1.36,1.23l-1.4,0.35l-0.76,-0.38l-1.15,-1.64l-1.68,-0.55l-2.04,2.33l-1.99,0.8l-8.7,1.71l-0.72,-0.42l1.65,-2.29l0.02,-0.75l-1.9,-1.76l-0.62,-2.84l-2.14,-2.4l-0.35,-2.59l-0.81,-0.45l-2.11,0.38l-5.29,-2.46l-1.17,-1.71l0.0,-2.65l-0.44,-1.51l-2.95,-2.33l-0.79,-2.45l-3.88,-2.43l-1.32,-1.5l-0.63,-1.5l-1.41,-0.91l0.0,-0.93l1.6,-2.06l0.18,-1.09l-2.38,-2.04l0.47,-3.82l-0.31,-1.9l-4.77,-7.49l-0.4,-2.82l-2.11,-0.85l0.25,-2.13l-0.69,-1.98l8.07,-1.87l2.46,-1.13l3.15,-8.76l1.58,-2.72l1.23,2.38l0.97,0.67l3.39,0.3l5.88,1.42l6.31,-0.79l5.01,-2.69l3.66,2.09l2.47,0.26l3.97,1.5l1.84,0.1l2.22,-1.17l1.82,0.0l10.64,5.04l2.03,-0.23l2.46,2.41l2.91,-0.96l1.27,0.25l1.79,1.42l2.15,-0.42l1.27,0.83l1.39,0.28l2.4,-1.49l4.01,0.91l5.72,-1.07l1.57,0.83l2.35,-1.11l1.82,-0.03l2.03,-1.05l3.48,0.96l1.85,2.73l-0.52,2.78l0.73,1.42l8.88,6.73l0.87,0.26l1.71,-0.36l0.61,2.97l0.7,1.03l3.28,1.81l2.3,-0.04Z",
        name: "Île-de-France"
    },
    "FR-I": {
        path: "M685.03,368.22l-5.31,5.38l-1.03,1.64l-4.74,3.82l-1.85,0.32l-7.03,-0.44l-1.33,-2.84l-3.6,-2.54l-2.8,2.33l-0.5,1.1l-1.35,0.29l-1.18,1.22l-2.28,1.32l-1.96,-0.54l-0.28,-0.96l0.31,-2.27l-0.38,-0.58l-1.87,-0.45l-0.9,-1.08l-2.54,-0.97l-1.18,-3.01l-1.25,-0.94l-1.43,-0.41l-0.41,-0.65l-0.02,-2.36l5.44,-1.4l1.12,-0.72l0.39,-0.89l-0.64,-1.5l-2.59,-1.42l-0.66,-1.39l0.39,-1.98l2.38,-1.68l1.1,-3.74l-1.49,-5.71l-0.52,-1.09l-1.27,-1.09l0.92,-2.13l-2.01,-1.95l-0.18,-0.73l1.26,-0.72l3.88,-0.5l1.03,-0.96l0.46,-1.58l-2.37,-1.02l-1.69,-1.38l-1.75,-0.35l-2.19,-1.16l-3.31,-3.1l-1.32,-2.47l3.3,-1.96l0.29,-0.73l-0.55,-1.73l0.2,-1.21l5.24,-2.45l5.77,-8.09l2.25,-7.72l-1.14,-1.69l-0.56,-4.91l-2.21,-1.91l-0.59,-3.43l-2.48,-1.31l0.44,-1.97l2.65,-0.99l2.03,-2.43l0.31,-1.4l-1.27,-2.76l-0.02,-1.99l-1.0,-1.07l-1.74,-0.18l-1.8,1.57l-1.46,-0.6l1.76,-3.55l1.35,-1.01l3.99,-0.6l3.21,1.65l1.53,0.3l6.69,-1.91l1.19,-1.03l0.3,-1.16l-0.19,-2.21l0.55,-2.48l-0.58,-2.14l0.82,-1.33l6.42,-3.94l2.41,-2.91l2.03,-0.75l0.4,-0.93l-0.24,-0.87l1.66,-0.91l1.56,-2.46l0.35,-0.15l0.17,0.44l-0.13,1.96l0.84,0.59l3.53,-2.14l2.66,-2.84l1.54,-0.3l2.78,0.53l1.12,0.68l0.83,1.01l-0.06,1.28l0.45,0.8l3.73,1.67l2.49,-0.22l2.39,-1.21l3.0,-0.19l2.26,0.8l5.34,2.95l2.51,0.39l2.65,-0.72l2.13,-2.5l1.1,0.4l2.95,3.1l3.4,1.52l6.19,4.28l1.5,0.2l0.14,1.19l0.91,0.99l9.53,5.07l0.84,1.51l0.15,2.71l-0.51,1.44l-1.54,2.09l0.01,1.47l0.98,0.9l2.57,0.38l3.26,3.13l0.81,1.25l0.14,1.33l-0.42,1.43l-2.05,-0.54l-3.13,0.45l-2.78,-0.68l-2.25,0.79l-0.14,1.32l0.88,1.86l-1.14,1.05l-2.47,0.75l-0.4,1.6l-2.4,1.81l-1.14,2.35l0.42,0.52l7.28,-0.62l1.04,-0.41l2.04,1.73l-0.29,0.51l-1.73,0.73l-3.01,2.29l-0.52,1.79l0.21,1.82l-4.0,2.53l-2.98,3.26l-3.91,3.12l-1.76,0.53l-0.22,1.45l-3.3,1.94l-0.9,1.31l0.6,1.61l-1.2,1.49l-3.98,2.62l-6.53,1.77l-3.25,1.74l-0.91,2.98l1.07,2.06l0.08,1.66l-1.81,4.31l0.94,1.51l-0.17,1.55l-3.3,2.03l-2.14,1.96l-4.43,2.12l-9.11,7.51l0.09,1.35l1.32,1.38l-4.8,6.0l-0.28,1.04l0.45,2.02l-0.62,1.22Z",
        name: "Franche-Comté"
    },
    "FR-H": {
        path: "M839.09,674.51l-0.56,-2.14l1.08,0.05l0.88,-0.66l0.96,0.13l1.09,-2.22l1.85,-0.26l0.75,-0.59l0.25,-1.8l0.9,-1.48l-0.38,-0.73l-0.69,-0.15l0.5,-1.83l0.66,-0.7l2.08,-0.67l0.26,-2.71l1.09,-0.31l1.76,0.99l1.22,-0.28l0.97,-0.92l0.83,-2.39l1.69,-0.11l3.85,-1.79l6.8,-1.3l2.03,-0.92l0.4,-1.61l3.74,-3.54l2.7,-0.22l4.3,0.91l1.55,0.91l1.18,2.4l1.13,0.07l3.12,-5.57l-0.52,-1.77l0.44,-1.29l-0.33,-1.53l-1.69,-2.25l1.55,-2.07l-0.42,-1.45l0.2,-1.05l1.76,-1.76l0.0,-2.1l-0.92,-1.57l0.14,-1.92l0.78,-0.45l3.39,-0.35l2.28,1.8l-0.61,1.65l0.96,1.77l-0.25,1.33l1.15,6.72l-0.1,2.14l-1.97,6.88l-0.02,4.13l-0.45,1.0l0.91,0.84l0.09,2.05l1.15,1.91l2.32,1.17l0.51,-0.67l0.26,0.56l0.3,7.84l0.73,1.54l-0.79,4.59l1.67,5.79l-0.44,9.13l0.43,1.76l-0.75,2.87l-1.68,1.43l-1.61,2.76l-5.49,7.01l-0.58,7.85l0.53,5.07l-0.08,5.26l-1.15,0.85l-0.93,1.46l0.75,0.56l-0.35,1.47l-1.74,0.45l-0.13,0.99l-2.1,-0.31l-1.06,0.57l-0.78,1.8l0.15,0.53l1.16,0.53l2.95,-0.89l0.12,1.12l-1.25,1.25l-1.71,0.61l-1.08,1.43l-0.92,0.16l-0.29,2.27l0.82,0.98l-0.71,0.83l0.01,0.67l-3.47,1.69l0.74,1.53l-0.74,1.47l0.54,0.37l1.71,-1.1l-1.36,2.96l-1.33,0.2l-1.56,-1.26l-4.09,-1.12l1.27,-2.36l-3.04,-1.77l0.64,-0.96l-0.51,-0.84l-2.14,1.21l-0.36,-0.76l-1.06,0.39l-0.91,-0.82l-1.69,-0.51l-2.48,-0.05l-1.62,-1.23l-1.4,-0.31l-0.77,-0.92l-1.36,-0.18l0.41,-0.47l-0.28,-0.83l-3.45,-1.04l0.22,-1.42l-0.94,-0.9l1.06,-2.73l1.05,0.33l3.28,-1.35l1.01,-1.59l2.2,-1.71l-0.28,-0.67l-8.03,-1.28l-0.49,-0.46l0.45,-1.22l-0.37,-0.54l-1.66,0.01l-3.15,0.91l-0.24,-0.91l-1.58,-0.18l1.37,-0.21l1.43,-1.12l0.37,-1.08l-0.65,-1.16l2.22,-0.4l2.07,-1.1l-0.12,-1.21l-0.72,-0.7l1.32,-0.69l-0.47,-1.49l1.44,-2.23l-1.64,-2.04l-1.3,-0.47l-1.37,0.15l-3.3,1.36l-2.54,0.15l-1.77,0.62l0.48,-1.71l-0.36,-1.17l-1.16,-1.24l3.49,-0.66l1.04,-1.45l-0.57,-0.83l0.26,-0.44l4.55,-2.07l0.48,-1.27l-1.41,-1.46l-1.71,-2.85l-2.34,0.23l-0.72,-1.13l-1.12,-0.6l-2.22,-0.31l0.1,-0.86l-0.66,-0.46l0.63,-0.39l0.19,-0.89l-1.24,-0.4l0.48,-1.21l-0.77,-1.1l0.18,-0.95l-1.46,-1.01l2.12,-0.06l1.47,-0.81l2.48,-0.44l2.27,-0.94l0.28,-0.91l-1.26,-1.16l-2.15,-0.95l-0.59,-1.02l-1.29,0.53l-0.01,-0.4l1.79,-0.96l0.05,-0.67l-1.35,-1.0l-3.15,0.59Z",
        name: "Corse"
    },
    "FR-O": {
        path: "M413.25,57.99l0.04,-1.01l-3.2,-2.12l1.12,-3.04l0.34,-6.83l1.74,-1.11l0.1,-0.58l-1.61,-2.07l-0.3,-1.01l-0.9,-7.19l0.26,-2.94l2.33,-5.95l-1.51,-6.24l1.26,-0.84l3.05,-0.71l4.62,-4.38l11.57,-4.22l1.24,0.14l2.03,-1.0l9.82,-1.04l11.15,-3.16l4.16,0.3l5.0,-1.1l3.15,-1.33l0.7,1.39l1.23,5.16l3.15,3.26l0.17,1.34l-1.61,1.47l-0.48,1.17l1.18,3.46l-0.52,1.99l1.22,0.87l0.85,1.46l4.43,0.71l0.92,1.61l2.23,1.78l1.56,2.72l1.22,0.84l6.21,2.17l1.21,-0.69l1.82,-2.64l2.36,-1.63l7.93,-2.08l1.41,0.36l0.93,0.73l2.64,4.35l0.72,0.59l1.48,0.27l0.38,0.58l0.62,1.69l-0.81,1.48l2.11,6.85l0.52,3.68l1.84,1.63l3.88,1.48l4.37,-0.98l2.07,-1.38l0.72,-0.05l0.89,0.38l-0.6,1.19l0.88,1.04l4.14,0.08l2.56,0.75l2.03,2.3l1.06,10.05l2.29,1.95l1.29,-0.74l1.51,-2.45l1.09,-0.6l5.04,0.08l3.52,1.61l1.52,-0.04l5.0,-1.46l5.54,3.81l1.84,3.13l1.53,0.38l0.92,-1.6l1.83,1.03l0.15,0.88l-2.7,2.36l-1.96,6.89l1.12,0.78l2.32,-0.37l1.74,4.81l-2.7,1.39l-1.65,1.41l-0.66,1.71l0.66,2.14l-2.01,0.53l-6.39,-1.96l-0.33,-3.19l-0.86,-0.63l-2.19,0.26l-2.72,1.45l-2.51,-1.85l-9.62,-1.36l-1.05,0.1l-3.92,1.77l-2.57,-0.97l-1.25,-0.05l-5.56,2.65l-6.21,-1.29l-2.8,1.13l-5.54,-0.85l-4.16,0.8l-7.56,-4.25l-2.77,-0.36l-1.29,0.85l-0.01,1.73l-0.42,0.53l-3.52,0.3l-2.63,1.27l-0.35,-0.48l-0.01,-2.43l-1.27,-1.3l-4.3,2.59l-0.75,-0.07l-0.01,-0.57l1.09,-1.47l-0.03,-1.29l-1.31,-2.12l-2.14,-1.68l-0.76,0.22l-0.47,0.72l-0.22,3.08l-3.59,-1.54l-3.28,-0.62l0.23,-1.55l-0.84,-0.78l-1.17,-0.0l-1.89,0.86l-2.21,-0.34l-2.47,0.23l-1.83,2.36l-0.72,-0.02l-1.12,-1.86l0.37,-1.76l1.95,-1.64l2.76,-1.45l0.65,-0.83l-0.86,-1.42l-2.96,-1.39l-1.81,-0.11l-1.14,0.92l-1.61,-1.74l-0.92,-0.29l-0.8,0.45l-0.34,0.97l-1.02,0.36l-6.98,0.99l-4.57,0.1l-1.52,-1.03l-0.68,-2.19l-0.83,-0.91l-6.58,-3.15l0.97,-1.81l-1.0,-0.9l-1.27,0.07l-1.98,1.1l-4.15,-3.27l-4.88,0.05l-4.46,1.3l-2.04,-0.71l-1.31,-1.35Z",
        name: "Nord-Pas-de-Calais"
    },
    "FR-N": {
        path: "M368.21,538.37l2.05,-1.55l2.53,-5.05l-0.24,-1.3l-2.82,-1.29l-0.59,-1.01l0.82,-2.02l0.18,-2.21l0.6,-0.27l3.1,1.2l5.01,-0.38l1.18,-1.19l0.12,-3.52l-1.84,-1.84l-0.96,-2.38l-0.09,-1.96l-1.19,-1.7l0.08,-0.49l3.55,-1.86l3.6,-2.94l4.19,-5.89l2.29,-0.5l4.57,-2.86l1.44,-2.18l-0.52,-2.65l0.64,-0.86l2.37,-0.76l1.69,-2.66l2.87,-2.91l-0.14,-1.73l0.75,-2.15l-1.31,-3.89l0.24,-0.96l5.6,-3.25l0.98,1.27l2.28,-0.55l2.62,0.91l4.01,2.82l1.31,1.87l4.08,2.12l1.52,0.03l3.21,-0.98l3.94,-1.84l2.17,0.72l1.98,-0.89l4.23,-0.19l0.61,1.12l0.9,5.87l4.35,7.18l-1.37,6.64l1.71,1.0l1.23,3.98l1.75,0.87l0.93,-1.98l5.01,-1.51l1.0,0.08l1.12,1.11l0.62,0.08l1.36,-0.63l3.34,0.11l3.23,-0.8l3.91,-4.25l0.61,-2.45l2.43,-3.52l0.63,-2.44l8.11,-7.4l1.98,2.43l0.35,2.78l0.85,0.31l2.55,-0.29l2.17,2.96l0.8,2.12l2.87,1.39l-1.03,0.82l-0.2,0.72l1.65,5.99l2.93,2.63l5.22,5.97l1.03,1.89l0.11,3.69l3.31,4.5l-0.9,4.81l0.32,2.23l1.01,1.78l-1.38,2.79l0.09,1.06l1.58,0.39l3.9,2.06l0.78,0.87l0.34,1.61l0.66,0.45l6.24,-0.23l1.47,0.82l0.29,0.68l-1.87,1.21l-1.04,1.36l-0.22,2.18l-2.12,1.24l-0.14,0.98l1.39,1.0l1.66,-0.16l1.15,1.08l2.11,0.24l2.74,1.92l0.74,1.08l-5.4,4.95l-1.0,2.67l-1.08,0.84l-2.91,0.28l-1.88,1.2l-0.58,0.8l-0.32,1.84l-1.23,1.35l-1.52,0.35l-5.75,-0.72l-2.03,0.54l-0.71,2.21l0.73,1.98l-0.44,1.8l0.13,1.84l-0.64,1.29l-1.29,0.19l-2.18,-0.74l-3.03,0.56l-3.08,3.08l-6.66,2.58l-1.23,-0.04l-3.97,-1.55l-3.14,0.51l-1.36,2.84l-0.07,2.58l0.55,1.19l1.7,1.63l-0.47,2.77l0.7,1.51l-3.19,2.57l-2.18,0.54l-6.45,-0.53l-5.8,0.38l-7.23,-1.26l-1.58,1.27l0.08,2.42l-1.0,0.67l-2.57,-1.32l-5.2,0.58l-3.13,-2.19l-5.04,0.64l-3.86,1.57l-0.46,-1.5l-1.84,-0.75l-0.78,0.36l-0.48,1.25l-1.61,1.87l0.3,2.38l-0.4,0.71l-3.58,0.55l-1.0,0.56l-0.38,1.49l-1.15,1.6l-0.59,2.9l1.11,4.34l3.39,2.69l4.59,1.38l2.5,1.25l2.66,0.27l1.08,0.84l0.81,2.19l-1.08,1.79l1.93,1.96l1.06,3.35l-0.06,0.82l-2.38,0.84l-0.62,1.28l2.08,1.84l0.56,2.94l-3.03,1.21l-2.78,0.43l-1.46,2.27l0.23,0.77l2.07,0.97l0.64,0.92l0.04,2.18l2.73,1.69l2.42,0.3l4.95,-0.94l1.87,2.27l2.44,1.1l1.14,1.33l-0.55,0.98l-3.39,-0.53l-6.47,0.84l-1.85,1.95l-0.71,3.13l-0.93,0.94l-0.95,0.18l-2.88,-0.75l-6.67,0.81l-0.6,-0.65l-2.03,-0.75l0.42,-1.18l-0.34,-0.53l-6.91,-0.61l-4.11,-2.31l-2.77,0.67l-1.86,-0.08l-1.28,3.01l-0.91,0.33l-3.96,-6.5l-1.3,-0.49l-0.09,-1.31l-1.52,-0.36l-7.55,-0.02l-2.58,0.53l-0.9,-0.59l-1.63,-3.14l-1.33,-1.06l-6.5,-0.68l-1.98,-1.15l-1.94,0.82l-1.93,-1.37l-4.49,-2.05l-2.41,-0.11l-4.25,-1.04l-1.84,0.13l-1.67,0.77l-0.18,2.69l-0.82,1.99l0.47,0.91l-0.83,1.28l1.61,1.49l0.36,0.97l-0.06,1.0l-0.98,0.78l-9.7,-0.06l-1.18,-0.37l-3.41,0.6l-1.07,-0.19l-0.39,-1.05l-2.06,-1.35l-1.26,0.44l-2.75,3.06l-0.54,0.07l-2.26,-3.03l-4.46,-1.22l-10.65,2.88l-1.99,0.17l-2.26,-0.8l-1.02,-1.0l-1.36,-0.45l-0.27,-0.97l-1.39,-1.16l-0.99,-2.13l0.13,-1.21l-0.54,-0.42l-2.75,0.82l-1.37,-0.14l-0.79,-1.36l-3.36,-1.82l-0.69,-3.94l0.23,-1.33l1.78,-2.58l-0.28,-3.88l2.39,-2.45l2.79,-0.25l0.84,-0.59l0.32,-0.83l-0.39,-3.13l0.72,-0.92l2.37,-1.37l1.67,-2.92l1.64,-0.21l1.2,-3.38l2.43,-2.79l-0.56,-2.37l0.51,-2.21l0.68,-0.76l2.02,-0.75l0.47,-0.88l-1.07,-3.38l-0.01,-3.5l-1.17,-0.56l-1.8,1.46l-0.38,-0.27l-0.07,-1.71l1.65,-0.19l0.44,-0.8l-2.35,-5.41l-1.59,-1.2l-0.74,-1.54l-1.23,-0.77l-5.85,-1.11l-1.94,0.12l-0.8,-1.93l-0.88,-0.6l1.33,-2.32l-0.5,-1.87l1.42,-0.23l0.84,-0.72l1.33,-3.17l-0.83,-1.53l0.05,-2.22l1.48,-4.06l-2.36,-4.06l3.02,-2.18l2.14,0.33l2.17,-0.22l1.91,-1.79l2.5,-1.32l1.3,0.7l-0.77,1.99l0.67,1.41l1.48,0.53l2.83,0.04l1.27,-1.32l-0.21,-2.54l0.68,-1.02l1.79,-0.56l0.96,0.87l1.31,-0.01l1.3,-0.95l2.0,-2.61l5.6,1.54l9.95,-4.47l2.5,0.3l5.09,-1.52l1.7,0.75l2.19,1.82l1.56,-0.16l3.92,-2.03l1.14,-2.97l2.17,-1.22l0.77,-1.7l1.0,-0.23l2.75,0.7l1.35,-0.49l0.35,-1.44l-1.36,-1.33Z",
        name: "Midi-Pyrénées"
    },
    "FR-M": {
        path: "M625.45,127.51l1.43,-1.72l0.37,-3.32l1.33,-1.31l1.39,0.12l2.52,1.66l3.7,-0.04l0.91,1.24l0.89,0.23l6.79,-4.05l0.23,-0.82l2.88,4.41l-0.06,2.8l0.43,0.93l1.59,0.49l4.37,-2.21l2.35,0.84l1.05,-0.09l1.26,-1.81l1.33,-0.57l3.92,0.99l2.33,-1.44l2.44,0.88l3.06,3.02l5.4,1.4l0.99,0.85l0.81,2.18l0.48,0.25l7.19,-0.85l1.6,-1.26l0.33,-1.2l1.94,-0.23l0.21,-0.78l2.87,-0.27l3.25,0.68l4.79,2.7l1.84,0.15l2.83,-0.85l5.53,2.33l0.94,0.78l0.43,1.78l3.49,3.44l-1.28,0.51l-0.34,1.05l0.39,0.92l5.12,4.47l0.0,1.31l1.48,0.84l1.03,2.86l1.42,-0.21l0.24,0.78l-0.46,1.91l1.04,1.55l6.83,0.9l1.37,-1.65l-0.66,-2.54l0.24,-0.74l4.64,0.28l4.34,1.88l1.1,0.08l-0.03,2.41l0.73,2.3l1.5,1.11l2.3,-0.99l0.34,-1.65l4.37,2.15l5.31,0.06l2.06,0.7l1.65,-1.87l2.38,-0.6l0.97,-1.9l3.08,-0.71l0.55,0.91l3.47,0.42l0.23,0.63l-0.5,0.47l0.0,0.71l3.02,3.51l1.58,0.84l3.86,0.93l1.84,1.98l-3.09,5.48l-1.37,1.52l-0.94,0.11l-3.4,-1.65l-9.1,1.22l-2.18,-0.77l-1.23,-1.9l-8.43,-2.52l-0.63,-0.69l-0.91,-2.92l-0.57,-0.54l-1.78,-0.23l-0.82,0.7l0.24,1.88l-2.13,2.71l-0.26,1.81l-2.5,1.95l-1.3,1.8l-0.19,1.8l1.06,1.59l1.44,0.92l4.74,1.76l-0.95,1.04l-0.38,1.39l1.93,2.87l1.42,0.25l1.72,-1.88l2.22,-0.91l0.99,-2.24l0.49,1.78l1.97,0.95l3.4,3.32l0.72,1.3l-0.22,0.99l-3.01,4.58l0.29,1.21l1.86,1.19l-2.18,5.93l-2.88,1.68l-1.19,1.51l-5.74,0.33l-0.8,0.54l0.08,0.68l3.1,1.47l-0.94,1.25l-0.59,7.58l-0.83,2.66l0.2,0.77l1.95,1.24l3.22,0.15l1.04,0.99l-0.01,0.67l-7.65,10.83l-0.6,1.6l0.78,1.75l-0.29,1.31l-1.35,1.61l-3.07,5.74l-3.51,4.22l-0.66,3.17l-1.52,2.73l0.5,2.48l-0.37,0.95l-2.1,1.11l-2.1,-0.03l-6.14,-4.25l-3.36,-1.49l-2.89,-3.05l-1.0,-0.52l-1.39,0.29l-1.82,2.29l-2.17,0.57l-2.22,-0.33l-5.28,-2.92l-2.42,-0.87l-3.37,0.19l-2.47,1.23l-2.15,0.18l-3.33,-1.51l-0.16,-1.78l-1.1,-1.33l-1.36,-0.79l-2.91,-0.55l-2.05,0.41l-2.72,2.89l-3.08,1.95l0.04,-2.28l-0.66,-0.67l-1.05,0.29l-1.69,2.58l-1.46,0.73l-2.76,-2.68l-2.5,0.75l-0.33,-0.86l0.11,-2.75l-0.67,-1.26l-3.49,-1.97l-4.37,-3.63l1.82,-3.84l0.51,-2.47l1.45,-1.47l-0.59,-1.48l-3.47,-2.4l-0.38,-2.37l-1.66,-0.99l-2.42,0.04l-3.01,-3.86l-1.79,-1.42l-2.05,-0.06l-2.07,1.61l-0.78,-3.46l1.95,-2.86l-0.09,-0.52l-6.02,-4.85l-0.81,-1.57l-1.66,-0.59l-3.06,-0.26l-4.93,-2.41l-4.26,-3.07l-2.86,-1.34l-2.73,-2.16l-1.13,-2.11l-1.37,-7.53l-4.34,-3.29l-0.25,-0.79l1.41,-2.15l-0.54,-2.87l0.44,-2.23l0.86,-1.22l2.6,-0.67l1.38,-0.95l0.61,-1.14l0.15,-3.39l0.86,-1.2l-0.6,-1.63l-2.02,-1.13l-0.4,-5.12l-1.78,-5.41l1.45,-2.76l-0.02,-2.07l4.21,-3.39l0.13,-1.1l-0.78,-2.54l3.33,-4.34l1.37,-3.47l-0.92,-3.48l-1.1,-0.9l-0.58,-1.83Z",
        name: "Lorraine"
    },
    "FR-L": {
        path: "M452.27,368.48l3.67,3.94l0.91,2.78l0.59,0.64l3.62,1.06l1.75,2.7l0.77,0.02l0.86,-0.62l0.63,0.2l3.01,4.0l1.01,3.07l2.12,3.67l-0.39,3.35l0.22,1.7l2.06,4.03l-0.15,3.39l-1.61,1.78l-1.56,3.24l-2.36,2.46l-1.64,-0.11l-1.29,0.59l-2.66,2.02l-0.92,1.43l0.25,0.94l1.58,1.96l0.73,2.07l2.81,1.58l2.36,3.13l-0.24,3.82l-2.34,1.48l-1.06,3.12l0.17,0.96l1.68,2.26l0.25,4.1l1.11,1.0l-1.72,5.84l-0.79,0.43l-1.66,-0.23l-3.58,-1.66l-2.38,0.8l-0.08,0.65l0.95,0.93l0.15,0.83l-1.24,2.6l-1.06,0.64l-1.96,2.84l-3.1,1.35l-0.66,2.04l-2.65,2.08l-0.16,1.81l0.96,1.75l-0.04,1.26l-2.76,5.43l-2.8,2.03l-0.55,0.87l0.17,1.26l1.47,2.59l-0.36,0.57l-3.95,0.96l-4.52,0.2l-1.94,0.88l-2.21,-0.71l-4.06,1.88l-3.12,0.95l-1.23,-0.04l-3.73,-1.98l-1.24,-1.82l-5.26,-3.44l-1.92,-0.51l-2.06,0.56l-0.77,-1.17l-0.7,-0.11l-3.75,2.17l-2.01,-2.2l-1.53,-2.72l0.29,-3.08l-0.39,-0.62l-5.55,-0.53l-1.62,-1.37l0.71,-1.38l-0.24,-1.53l-0.65,-0.48l-2.23,-0.25l0.37,-0.93l2.04,-1.69l0.24,-0.77l-2.41,-2.31l0.6,-2.56l3.8,-3.02l0.73,-1.34l-0.68,-1.22l-1.94,0.2l-0.72,-0.38l-0.06,-0.67l1.19,-2.28l-0.4,-0.95l-1.76,-0.35l-1.8,-1.23l-1.97,0.24l-3.97,-1.86l0.03,-0.66l1.79,-1.66l-0.12,-1.13l-0.97,-0.71l-3.78,-0.79l-4.02,-4.92l-4.66,-0.34l-3.12,0.5l-1.36,-0.83l-2.24,1.74l-2.87,-0.36l-1.21,-0.71l0.71,-2.38l-0.14,-1.2l-2.33,-2.53l-0.86,-0.39l-4.12,-0.22l-0.84,-0.59l1.24,-2.69l2.24,-1.82l1.25,-1.95l1.82,0.71l1.43,-0.0l1.03,-0.91l1.51,-9.1l3.93,-0.81l2.62,-1.86l0.48,-0.93l-0.03,-0.82l-2.06,-3.42l-0.65,-0.47l-2.08,0.22l-2.23,-2.92l-0.6,-4.91l1.19,-0.01l0.56,-1.09l-0.6,-2.96l-1.3,-2.02l-0.18,-1.29l2.22,-0.61l4.13,-3.21l3.91,-0.02l1.37,-0.47l0.86,-1.93l2.95,-3.54l1.62,-0.7l2.72,-0.12l2.77,-1.57l3.18,1.35l1.69,0.1l3.59,-0.55l1.16,-1.42l1.06,-0.24l1.47,1.8l3.13,1.64l2.0,-1.13l3.93,-3.54l0.68,-0.15l2.17,0.53l2.02,-0.06l0.36,1.35l1.71,0.71l1.02,-0.2l1.87,-1.33l3.9,0.22l1.03,-0.98l0.25,-2.59l0.71,-0.54l2.68,2.25l0.96,0.16l3.14,-1.36l5.41,0.14l2.45,0.84l3.51,0.01l2.22,0.72l3.19,-0.59l5.83,0.29Z",
        name: "Limousin"
    },
    "FR-S": {
        path: "M415.55,60.73l1.84,0.06l3.8,-1.23l3.67,-0.22l1.91,0.83l1.93,2.02l1.13,0.56l1.08,-0.04l1.34,-1.04l0.83,-0.09l0.45,0.32l-0.93,1.21l0.23,1.04l6.67,3.18l1.33,2.93l2.02,1.32l8.82,-0.48l3.92,-0.85l1.24,-1.53l1.52,1.73l0.76,0.31l1.5,-0.97l1.3,0.11l2.71,1.26l0.54,0.67l-4.33,2.61l-0.9,1.01l-0.46,2.33l1.43,2.35l0.98,0.26l0.75,-0.29l1.56,-2.2l4.53,0.14l2.79,-0.86l-0.14,1.58l0.52,0.66l3.45,0.68l3.92,1.58l0.86,-0.76l-0.13,-1.95l0.49,-1.31l1.66,1.4l1.15,1.83l0.06,0.74l-1.28,1.91l0.29,0.94l1.72,0.31l3.86,-2.53l0.65,0.79l0.2,2.96l0.68,0.44l3.07,-1.27l3.76,-0.4l0.75,-1.0l-0.04,-1.56l0.65,-0.42l2.34,0.28l7.91,4.34l4.18,-0.82l5.55,0.85l2.83,-1.13l5.14,1.35l1.1,-0.07l5.62,-2.65l3.69,1.03l4.88,-1.87l9.52,1.35l1.83,1.69l0.78,0.18l3.05,-1.51l1.71,-0.23l0.41,0.51l-0.04,2.45l0.93,0.94l5.29,1.74l1.22,0.15l1.85,-0.49l3.4,1.53l1.48,0.14l0.08,2.79l1.98,3.57l-0.12,1.06l-1.86,3.26l-0.49,2.91l0.31,0.92l0.9,0.74l0.32,1.65l-0.7,1.08l-4.95,3.72l-1.44,2.0l-1.21,0.65l-2.01,0.15l-1.16,1.07l1.55,4.87l-0.45,1.42l0.37,2.06l-1.82,2.23l1.73,3.51l-1.45,0.55l-0.74,1.27l1.28,1.76l-0.47,2.92l-0.57,0.36l-2.25,-0.85l-1.92,0.68l-2.88,-1.37l-2.38,-0.13l-1.45,0.91l-0.06,1.82l-9.27,1.76l-3.39,1.78l1.46,7.94l1.92,0.75l2.36,2.15l-1.15,1.28l-4.44,-0.12l-1.51,0.77l-0.45,1.51l0.2,2.73l-0.98,1.37l-1.47,1.05l-0.1,1.7l0.34,0.61l1.15,0.44l3.19,-0.1l0.58,0.88l-3.01,3.09l-1.76,1.18l-1.05,2.06l-3.84,3.24l-2.02,3.25l-1.48,0.21l-1.71,-0.43l-2.07,-1.34l-0.9,-3.38l-0.76,-0.9l-2.31,0.33l-8.72,-6.6l-0.51,-1.18l0.52,-2.64l-1.02,-1.99l-1.31,-1.31l-3.74,-1.03l-2.28,1.08l-1.85,0.04l-1.84,1.04l-1.74,-0.79l-5.88,1.07l-4.04,-0.91l-2.86,1.48l-2.03,-1.11l-1.93,0.48l-1.66,-1.34l-1.69,-0.39l-2.67,0.99l-2.33,-2.32l-0.8,-0.23l-1.37,0.39l-10.67,-5.04l-1.18,-0.26l-3.22,1.4l-1.55,-0.09l-3.94,-1.5l-2.4,-0.25l-3.87,-2.13l-5.33,2.74l-6.1,0.74l-5.65,-1.4l-3.29,-0.27l-0.95,-0.91l-1.65,-3.47l0.72,-0.98l0.92,-0.28l2.1,1.79l1.04,0.11l0.82,-0.6l-3.77,-10.64l-0.27,-3.2l1.24,-3.11l1.48,-1.09l0.51,-1.75l-0.83,-1.22l-2.26,0.41l-0.42,-0.32l-0.95,-5.27l-0.18,-3.85l-0.71,-1.38l2.2,-1.38l1.0,-2.08l-0.65,-0.89l-2.49,0.45l-0.22,-0.26l2.37,-3.64l2.12,-1.58l0.03,-1.31l-2.65,-4.66l-0.89,-3.09l-1.01,-1.33l-10.08,-8.97l-8.3,-4.93l5.18,-5.06l1.41,-4.28l1.93,-2.2l1.85,-0.21l5.97,2.46l1.52,-0.54l0.14,-0.85l-1.42,-0.65l0.97,-0.4l-0.39,-1.0l-2.25,-0.33l-0.81,-0.53l-1.15,-2.03l-2.95,-1.51l0.58,-5.43l1.08,-1.84l1.49,0.43l1.69,1.73l1.44,0.72Z",
        name: "Picardie"
    },
    "FR-R": {
        path: "M159.66,300.11l3.15,1.14l1.62,-0.32l1.05,-1.06l-0.5,-1.51l-2.2,-2.2l-1.29,0.33l-0.77,-1.6l-2.04,-1.2l4.11,-2.12l1.57,0.33l-0.09,0.56l1.03,0.49l2.59,-1.53l0.39,-0.73l-0.31,-0.53l-2.95,-0.38l0.2,-1.22l-0.78,-0.67l0.87,-0.21l2.37,0.81l3.21,-0.37l1.69,-1.5l1.09,-1.85l0.93,-0.29l1.83,0.89l2.88,-0.91l0.43,1.67l1.42,0.15l1.58,-2.42l2.05,-1.24l0.71,-1.09l1.52,-5.22l0.23,-3.07l2.91,-1.59l4.28,-0.33l5.67,-2.08l3.77,0.78l7.4,-2.04l2.87,-1.7l1.19,-1.55l1.73,-1.21l6.3,-2.55l1.6,-1.15l3.58,0.16l1.17,1.45l1.85,0.86l6.14,0.89l0.45,-0.31l0.47,-2.16l1.14,-1.77l3.42,-9.99l1.85,-1.63l4.09,-0.58l1.91,-1.15l-0.07,-4.84l-1.76,-2.27l-0.71,-4.7l0.64,-0.86l0.08,-0.99l-0.82,-4.82l-1.09,-2.36l1.95,-4.01l-0.77,-8.28l0.2,-5.45l4.76,0.37l3.56,-1.09l2.14,0.78l2.29,-0.33l0.82,0.61l1.89,3.04l0.78,0.28l1.22,-0.43l1.2,1.0l0.96,0.2l0.9,-0.36l0.74,-1.34l3.16,-0.79l1.92,1.45l5.49,-1.07l4.34,-2.98l8.9,0.99l1.34,-1.53l2.82,-0.41l1.45,-0.72l0.76,-2.61l3.98,1.51l-0.3,1.8l0.85,2.15l3.2,2.92l2.03,0.53l0.36,0.46l0.52,4.42l0.44,0.37l3.61,-0.38l3.37,0.46l0.6,-0.45l0.44,-1.41l2.46,-0.81l2.23,-2.53l2.43,-1.15l5.27,-1.07l1.66,0.18l3.55,1.66l0.35,1.07l-0.32,2.68l0.3,3.32l0.87,2.03l1.63,1.4l1.85,0.94l2.82,-0.07l0.41,2.48l1.13,0.63l5.3,1.27l3.26,-0.25l3.55,3.94l2.19,1.39l1.53,0.31l1.53,-0.36l2.97,1.92l3.09,0.38l0.63,0.45l-4.66,2.74l-0.26,1.28l1.21,1.18l-2.67,0.5l-0.56,0.47l-0.11,1.1l0.84,1.7l1.98,0.81l-0.65,3.22l0.27,2.42l-3.53,3.05l-0.56,1.67l-0.05,3.43l-1.51,4.18l-3.07,2.18l-3.44,1.47l-1.46,1.3l-0.79,1.81l0.5,2.21l-7.92,2.37l-1.94,1.58l-1.95,-0.85l-1.07,0.0l-1.13,1.23l0.4,2.57l-8.48,-1.68l-0.46,0.23l-1.7,4.29l0.45,3.58l-1.91,3.72l-1.03,3.13l0.2,2.82l-4.39,6.09l-1.47,5.38l-0.85,5.56l-2.84,-0.47l-1.46,0.44l-2.01,2.22l-0.96,2.4l-2.38,0.81l-1.53,2.05l-1.11,-0.31l-0.83,-2.02l-0.97,-0.76l-6.22,0.07l-6.53,0.7l-5.83,1.67l-2.05,-0.73l-2.08,0.46l-1.51,1.42l0.68,2.13l-4.92,2.46l-3.85,0.33l-5.2,-0.68l-4.23,0.56l-4.16,-1.9l-0.94,-0.18l-0.84,0.51l-0.12,1.48l2.2,1.37l2.18,3.03l2.36,1.73l0.32,2.18l1.04,2.25l4.16,2.61l1.73,1.57l-0.68,2.07l0.1,0.98l3.83,6.52l0.56,3.11l1.44,2.21l0.79,4.91l-1.46,2.45l0.97,4.27l-0.6,2.86l0.25,1.23l0.83,0.72l1.04,-0.23l1.97,1.38l0.71,1.02l-0.74,0.77l-2.49,0.24l-2.25,2.0l-2.76,0.16l-3.62,1.68l-4.06,-2.24l-1.7,-0.27l-6.67,1.09l-0.44,-0.27l1.05,-1.85l-0.48,-0.9l-0.77,-0.24l-6.96,1.54l-2.27,2.12l-0.75,-0.72l-2.95,-0.12l-2.27,1.19l-0.16,2.27l-1.02,-0.25l-2.4,-2.74l-1.57,-0.33l-4.08,-2.32l-4.68,0.82l-0.97,-3.42l-1.09,-1.52l-1.55,-0.9l-6.91,-0.76l0.18,-1.01l-0.99,-0.83l-3.36,-0.58l-1.97,-1.51l-2.48,-0.81l-1.08,-2.24l-1.03,-0.98l-0.28,0.39l0.27,2.62l-0.46,-0.56l-1.32,-5.47l0.25,-1.25l-1.1,-0.76l-1.14,-2.75l-2.53,-2.31l-0.74,-2.08l-0.93,-0.63l-1.99,-0.39l-2.24,-3.59l-3.47,-3.13l-4.07,-2.07l-0.39,-1.05l-0.29,-2.69l0.46,-2.19l1.48,-0.94l-0.1,-1.31l3.12,-1.98l2.48,-5.26l1.17,-1.01l-0.84,-2.82l-1.71,-1.84l-3.77,-1.83l-7.12,-1.11l-1.44,-0.69l1.47,-1.03l1.91,-0.23l0.8,-0.56l0.42,-2.94l-0.67,-1.36l-0.08,-1.84l0.58,-1.78l1.76,-1.03l5.59,-0.5l1.11,-0.5l1.0,0.86l3.14,0.72l1.04,-0.01l0.25,-0.52l0.66,0.2l-0.47,0.4l0.19,0.92l2.51,1.59l2.63,0.48l1.97,1.61l1.54,0.57l3.3,0.09l0.4,-0.29l-0.18,-0.46l-1.36,-0.76l-2.43,-0.43l-2.84,-2.59l-4.32,-2.68l-2.78,-0.52l-1.38,-0.93l-2.33,-0.58l-8.74,0.53l-2.06,1.13l-1.5,1.94l-1.74,0.44l-2.56,1.62l-2.06,-0.36l-3.53,-2.74l-2.17,0.0l-0.77,0.6l-0.33,0.98l-1.39,-0.04l-4.87,-2.21ZM161.53,297.56l0.02,0.15l-0.01,0.02l-0.01,-0.17ZM180.0,325.4l2.68,1.47l0.24,2.88l-2.75,-3.79l-1.55,-0.92l-1.74,0.59l-2.23,-4.48l2.62,-0.12l2.02,0.71l-0.04,2.78l0.75,0.89ZM174.34,345.91l-4.93,-0.12l-0.49,-0.99l0.25,-0.36l1.99,0.03l3.19,1.44Z",
        name: "Pays de la Loire"
    },
    "FR-Q": {
        path: "M332.91,132.89l6.77,-1.3l2.91,-1.25l1.33,-1.0l1.02,-1.7l-0.5,-0.1l-4.29,2.29l-4.94,0.6l-4.98,-0.58l-4.35,-1.26l-2.37,-0.09l-2.42,-0.92l-1.52,-1.7l-0.07,-1.2l3.27,-5.32l2.47,-7.01l0.83,-0.83l2.93,-1.99l9.31,-3.67l0.72,-0.8l12.1,-5.76l4.68,-1.45l5.32,0.04l25.22,-6.86l3.14,-1.54l2.42,-2.26l6.62,-4.49l8.53,5.06l10.02,8.92l0.82,1.05l0.91,3.13l2.61,4.54l0.05,0.66l-1.5,0.92l-2.7,3.56l-0.4,1.2l0.44,0.98l2.53,-0.43l0.4,0.34l-0.82,1.37l-1.94,1.09l-0.47,0.89l0.74,1.37l0.19,3.89l0.98,5.42l0.8,0.82l2.01,-0.46l0.65,0.53l-0.4,1.31l-1.48,1.1l-1.34,3.49l0.3,3.4l1.76,5.64l1.98,4.52l-0.91,-0.06l-2.02,-1.73l-1.73,0.51l-0.92,1.36l0.38,1.6l-1.78,3.08l-2.9,8.4l-2.17,1.01l-7.75,1.57l-0.75,0.55l-0.17,1.05l0.69,1.51l-0.24,2.26l0.57,0.74l1.67,0.42l0.21,2.28l-2.6,1.75l0.17,3.71l-4.77,3.07l-2.29,3.93l-4.82,2.29l-1.94,-0.6l-3.38,0.04l-2.24,-1.49l-1.25,-0.15l-0.84,2.07l-3.47,0.34l-2.42,2.37l-1.92,0.04l-5.9,1.45l-3.37,2.57l-2.56,-0.94l-1.25,-1.56l-1.01,-0.49l1.29,-1.62l0.54,-1.51l-1.16,-2.36l-5.08,-2.25l-2.76,-3.3l-0.98,-2.3l-1.65,-0.33l-2.15,0.77l-4.68,-1.11l-2.05,0.04l-1.25,-0.8l-0.53,-1.28l1.85,-3.58l0.26,-4.11l-0.86,-1.45l-2.12,-1.54l-0.49,-1.34l0.35,-0.36l1.57,0.06l0.59,-0.55l-0.39,-2.41l0.87,-2.03l-2.41,-5.3l-2.48,-2.25l-0.45,-0.94l0.06,-0.6l2.03,-0.96l0.42,-0.91l-0.82,-1.2l-2.45,-0.56l-1.1,-1.77l-0.07,-6.22l-0.51,-3.03Z",
        name: "Haute-Normandie"
    },
    "FR-P": {
        path: "M214.99,114.73l0.19,0.68l0.67,0.4l2.24,-1.1l2.84,0.51l1.15,-0.46l3.33,-3.1l2.73,-0.72l8.6,1.18l2.02,5.19l-1.49,1.01l-0.49,1.57l-1.27,0.04l-1.09,0.67l-0.38,2.34l2.81,5.26l4.63,4.95l0.53,1.09l0.2,1.62l-0.75,1.96l0.16,1.09l0.44,0.3l1.7,-0.49l1.7,1.31l1.47,-0.25l0.31,-0.93l-0.58,-0.86l0.33,-0.79l1.82,-1.2l7.94,0.35l7.3,2.35l10.46,0.54l4.16,0.79l2.32,-1.02l4.08,1.26l4.11,0.0l2.92,1.4l3.03,0.6l5.69,2.92l1.91,-1.18l9.72,-1.95l2.93,-1.17l1.7,-1.26l2.0,-0.74l1.51,-1.97l3.95,-2.42l7.63,-1.36l0.48,2.81l0.12,6.48l1.43,2.16l2.42,0.54l0.46,0.57l-2.25,1.3l-0.23,1.35l0.62,1.25l2.42,2.18l2.27,4.88l-0.85,1.84l0.42,2.29l-1.98,0.09l-0.58,1.01l0.65,1.85l2.18,1.62l0.66,1.06l-0.25,3.74l-1.86,3.57l0.32,1.58l2.02,1.5l2.14,-0.02l4.66,1.11l3.13,-0.81l1.14,2.35l2.9,3.45l4.97,2.14l0.98,1.74l-0.43,1.2l-1.34,1.44l0.1,1.13l1.12,0.58l1.33,1.63l2.71,1.01l0.4,3.39l1.71,2.99l2.69,1.76l3.44,3.47l-0.14,3.55l1.87,2.7l-1.75,3.04l-3.21,2.46l-6.44,1.9l-0.89,1.14l0.01,1.72l1.14,1.2l-0.05,2.88l1.63,2.67l0.1,1.08l-1.39,1.01l-1.56,0.37l-1.1,-0.24l-1.99,-1.26l-1.87,-2.49l-1.91,-1.6l-3.5,0.2l-5.14,-1.24l-0.71,-0.36l-0.06,-1.74l-0.56,-0.94l-3.09,-0.02l-1.57,-0.82l-1.44,-1.23l-0.72,-1.73l-0.28,-3.11l0.32,-2.72l-0.45,-1.45l-1.38,-1.0l-2.69,-1.04l-1.95,-0.2l-5.54,1.15l-3.07,1.61l-1.67,2.12l-2.54,0.86l-0.71,1.68l-2.54,-0.46l-3.9,0.33l-0.22,-3.58l-0.39,-0.79l-0.77,-0.81l-1.89,-0.44l-3.02,-2.76l-0.65,-1.6l0.49,-1.46l-0.32,-0.81l-0.74,-0.61l-3.82,-1.27l-0.99,0.47l-0.37,2.33l-4.18,1.06l-1.2,1.45l-4.78,-0.84l-3.98,-0.16l-1.2,0.44l-3.19,2.55l-5.18,1.05l-1.18,-1.31l-0.96,-0.14l-3.52,0.92l-0.5,1.08l-0.81,0.48l-1.94,-1.22l-1.6,0.3l-1.74,-2.89l-1.1,-0.85l-2.45,0.29l-2.37,-0.8l-3.57,1.1l-2.0,0.01l-3.01,-0.43l-2.56,-1.35l-7.85,-1.68l-1.41,0.23l-2.22,2.41l-6.42,3.16l-2.09,-0.17l-2.56,-1.81l-2.2,-3.13l-3.53,-8.24l5.0,0.51l6.48,-1.24l2.14,0.69l0.45,-0.61l-1.13,-1.5l-1.5,-0.64l-2.35,-0.18l-0.46,0.44l-0.71,-1.34l-2.87,-0.96l-0.87,-2.36l-2.17,-1.64l-0.81,-5.88l-0.74,-1.24l-1.41,-0.44l1.45,-1.15l0.93,-4.75l0.93,-0.11l0.34,-0.9l0.0,-1.07l-1.2,-0.92l0.97,-5.38l0.5,-0.23l1.33,0.54l0.55,-0.37l-0.25,-0.86l-2.7,-0.51l-1.33,0.61l-0.59,1.22l-0.57,-1.29l0.43,-3.36l-1.16,-0.96l0.72,-2.62l1.48,-1.07l0.02,-0.68l-1.31,-0.41l-1.01,-4.88l0.3,-0.48l0.85,-0.05l2.15,0.54l0.5,-0.88l-3.27,-1.38l-1.31,-0.03l-0.67,1.16l-2.13,-4.06l0.49,-0.94l-2.37,-1.94l-0.24,-0.63l0.68,0.0l0.4,-0.89l-0.84,-1.8l-0.81,-0.22l-0.72,1.2l-3.02,-2.14l0.32,-0.67l-0.42,-0.6l-2.15,0.53l-0.36,-0.34l-0.17,-5.35l-1.55,-3.41l-2.39,-2.79l0.28,-0.81l1.63,-1.27l0.51,-0.95l0.27,-4.14l-1.92,-3.48l-4.47,-1.26l0.3,-2.75l1.47,-0.45l2.45,1.07l1.76,-0.19l0.58,0.33l0.77,1.54l6.68,0.92l5.27,1.3Z",
        name: "Basse-Normandie"
    },
    "FR-V": {
        path: "M577.54,476.22l1.11,-1.41l2.95,-0.55l0.74,-0.72l-0.0,-0.72l-1.19,-1.6l2.16,-2.5l-0.86,-2.16l1.27,0.23l1.38,1.13l1.37,-0.44l0.63,-2.87l1.73,-3.35l0.12,-2.32l-3.03,-2.6l-1.46,-0.75l-3.04,-0.56l-0.84,-2.02l0.79,-1.98l-0.44,-1.83l-1.29,-2.03l-1.55,-0.99l-2.48,1.54l-4.06,-1.11l-2.36,0.02l-0.64,0.32l-0.87,1.78l-5.7,0.96l-2.47,0.09l-1.61,-1.66l-0.73,-0.21l-2.27,0.68l-1.46,1.13l-0.41,-0.24l0.39,-3.01l0.71,-1.31l2.82,-2.97l0.97,-2.32l-0.07,-1.42l-2.55,-5.63l-7.56,-6.05l-3.13,-6.33l-1.63,-1.54l-1.72,-2.72l0.87,-2.49l0.0,-2.12l1.19,-3.15l-0.58,-1.38l-2.48,-1.95l-0.15,-1.26l2.19,-1.04l4.84,-1.05l1.44,-1.51l-1.6,-8.44l0.16,-3.93l-0.45,-3.21l-1.16,-1.77l2.62,-2.04l4.12,-1.28l0.56,1.52l0.07,3.14l3.01,1.25l2.22,1.54l1.84,0.08l4.06,-1.25l4.13,0.93l2.99,-0.65l5.98,1.31l2.65,-0.78l1.66,-1.21l1.81,-2.14l1.71,-5.14l5.06,1.43l1.25,-0.12l1.95,-0.93l1.54,1.64l0.93,0.37l1.7,-0.55l0.57,-1.97l0.55,-0.28l1.79,0.68l0.27,1.99l1.62,1.08l0.05,2.15l1.07,2.48l1.36,0.98l3.59,0.4l0.43,-0.51l-0.22,-1.1l1.28,-4.71l3.52,-6.66l0.17,-1.98l1.46,-2.52l0.86,-4.24l1.47,-3.8l1.76,-0.36l4.28,1.38l6.92,-1.56l1.25,0.39l2.16,1.97l1.64,0.85l4.11,0.99l0.02,2.41l0.61,1.09l2.67,1.32l0.72,2.39l1.08,1.11l2.12,0.65l0.91,1.09l1.74,0.37l-0.08,3.17l0.9,0.94l1.79,0.47l2.93,-1.5l1.14,-1.19l1.49,-0.38l0.56,-1.17l2.38,-2.03l2.83,2.21l0.92,2.49l0.7,0.56l7.33,0.5l2.1,-0.36l5.08,-4.04l1.05,-1.67l5.29,-5.36l2.68,1.42l1.49,1.81l0.06,0.64l-2.16,4.4l-0.44,3.75l-1.27,0.57l-1.61,-0.08l-5.21,2.4l-0.37,1.48l1.62,2.13l-1.4,2.81l0.54,0.53l4.13,-1.3l2.68,-0.09l2.31,0.77l2.11,-0.97l3.09,-3.14l3.87,-2.22l1.66,-1.51l-0.2,-2.14l-0.69,-0.46l-1.55,0.17l-1.53,-3.66l0.27,-0.84l2.96,-3.43l1.9,-1.42l5.79,-1.02l5.27,-3.12l3.81,-0.65l4.01,0.11l9.06,2.03l1.22,0.93l-0.26,2.38l-1.55,1.58l-0.38,1.39l4.6,5.63l-2.07,3.5l-1.62,5.67l0.83,1.52l4.78,0.92l0.69,0.59l-1.18,1.69l0.26,3.28l1.29,0.49l1.46,-0.85l1.18,0.45l4.32,4.17l1.84,4.74l-1.27,1.06l-1.65,3.08l-1.15,0.85l-2.54,0.9l-3.08,-0.22l-0.83,0.98l-2.76,0.85l-1.19,2.6l0.82,5.98l1.31,1.78l1.75,1.17l2.44,0.57l2.19,1.73l2.64,0.84l0.28,0.86l-0.99,2.49l1.04,2.1l0.82,4.31l5.55,3.26l1.58,2.67l3.72,1.74l-1.77,3.64l-2.31,2.53l0.89,4.94l-1.6,1.21l-1.33,2.0l-1.58,-1.04l-4.51,1.47l-2.67,2.94l-2.44,0.32l-0.54,0.84l0.54,1.11l-1.68,0.71l-4.37,-1.72l-2.37,-0.29l-2.05,1.2l-2.08,0.12l-2.47,1.26l-1.9,0.22l-2.21,1.2l-3.09,0.33l-1.11,2.4l-1.35,1.11l-4.34,-1.2l-0.85,-1.84l-1.43,-1.01l-4.05,-0.41l-1.97,-0.8l-1.75,2.08l-1.04,6.49l0.51,1.03l1.24,0.41l3.69,-0.43l0.93,0.46l0.56,3.36l1.75,2.0l0.32,1.03l-0.59,3.68l-3.52,-0.79l-3.8,0.98l-3.56,0.2l-2.28,-0.4l-3.91,2.12l-2.7,-0.31l-2.3,0.93l-1.86,1.72l0.21,1.89l-0.69,0.66l-7.02,1.26l-2.07,2.9l1.02,2.23l-1.63,1.7l-4.53,1.21l-3.09,-0.29l-1.23,0.51l-0.43,1.87l-2.53,3.81l-0.14,0.94l0.84,1.52l2.0,1.4l0.28,0.97l-0.33,0.33l-3.19,1.81l-4.23,-1.27l-3.35,-0.13l-0.63,0.63l0.08,1.69l0.63,1.09l1.24,0.82l0.0,0.57l-3.28,-0.26l-1.08,0.62l-0.06,0.66l1.42,1.81l0.6,1.94l2.39,1.76l4.27,1.43l3.69,-0.02l-0.29,1.89l1.56,1.75l2.09,1.43l-0.14,4.66l-0.66,1.16l0.12,1.87l-0.76,-0.17l-0.63,-1.31l-0.81,-0.55l-1.74,-0.29l-0.98,0.29l-3.26,3.17l-1.73,0.96l-1.95,-0.21l-4.26,-2.77l-0.76,-2.13l-1.01,-1.15l-2.12,-0.25l-4.34,-1.4l-2.82,0.21l-2.6,-0.66l-0.67,-0.77l-0.1,-1.49l0.78,-2.2l-0.29,-0.88l-0.62,-0.28l-2.48,1.42l-4.49,-0.52l-4.27,1.08l-3.5,1.47l-2.77,0.41l-2.98,1.5l-1.0,-0.71l-1.77,-4.15l-2.56,-1.87l-5.39,-0.04l-0.35,0.4l0.02,2.88l-3.85,-1.27l-2.16,-2.01l-1.82,-0.73l-3.57,0.03l-1.2,0.93l-0.35,1.86l-1.3,0.63l-1.21,-0.99l0.27,-1.37l-0.32,-0.86l-1.61,-0.46l-2.47,0.7l-4.94,3.64l-6.05,-2.63l-1.24,-1.11l-4.78,0.52l-0.65,-3.42l0.81,-1.28l-0.0,-0.88l-1.75,-2.86l-1.71,-1.42l-2.22,-6.93l-2.8,-3.33l-2.47,-8.6l0.05,-2.72l1.27,-0.58l3.25,-4.5l3.93,-1.27l1.08,-2.19l2.26,0.12l4.33,-0.67l1.52,-0.63l2.02,-2.74l1.34,-3.3l2.04,0.03l2.96,-1.27l0.14,-1.25l-0.57,-1.03Z",
        name: "Rhône-Alpes"
    },
    "FR-U": {
        path: "M574.86,589.37l2.29,-1.21l2.17,-0.54l3.45,-2.45l1.64,-0.49l0.58,-1.35l2.47,-0.71l0.72,-1.53l-0.09,-0.84l-1.94,-0.6l1.3,-2.75l2.78,-2.82l2.03,-0.52l3.72,1.32l1.02,-0.3l0.65,-1.54l-0.04,-1.78l1.98,-4.92l-0.49,-4.74l9.63,-5.73l1.33,-1.63l0.03,-2.18l1.17,0.07l0.48,-0.43l-0.23,-1.83l-4.15,-4.77l-1.27,-0.56l-1.83,0.31l-0.37,-2.47l0.14,-4.95l-0.5,-0.93l-1.47,-1.11l-0.09,-1.56l-1.29,-1.64l-0.54,-1.66l-0.02,-2.97l3.17,-0.14l2.43,0.62l1.57,1.67l1.7,4.01l1.31,0.65l3.32,-1.54l2.77,-0.41l3.47,-1.46l4.07,-1.05l4.59,0.51l2.31,-1.4l-0.6,3.65l0.32,1.17l0.77,0.67l2.96,0.79l2.82,-0.21l4.22,1.37l1.95,0.19l1.61,3.17l4.52,2.92l2.5,0.22l1.96,-1.1l2.53,-2.56l1.32,-0.74l1.8,0.54l1.16,1.71l1.47,-0.2l0.31,-0.68l-0.24,-1.68l0.64,-1.04l0.14,-4.96l-0.53,-0.87l-1.46,-0.73l-1.74,-1.84l0.47,-1.33l-0.29,-0.71l-1.33,-0.38l-2.81,0.16l-3.98,-1.31l-2.2,-1.6l-0.54,-1.85l-1.31,-1.69l3.18,0.27l1.25,-0.83l-0.17,-1.21l-1.58,-1.26l-0.12,-1.75l2.95,0.15l4.34,1.28l3.74,-2.02l0.61,-0.81l-0.12,-1.02l-3.01,-3.02l2.18,-3.53l0.74,-2.54l1.28,-0.26l2.49,0.32l4.9,-1.34l1.9,-1.99l0.0,-1.34l-0.94,-1.02l1.78,-2.52l4.33,-0.43l2.59,-0.77l1.05,-1.17l-0.23,-1.81l1.51,-1.3l1.93,-0.81l1.61,0.45l1.3,-0.18l3.71,-2.08l2.21,0.4l3.61,-0.2l3.74,-0.98l2.72,0.76l1.33,-0.13l0.6,-0.99l0.28,-3.45l-0.47,-1.39l-1.68,-1.88l-0.61,-3.45l-1.52,-0.82l-3.62,0.45l-0.92,-0.29l-0.21,-0.57l1.03,-6.05l1.31,-1.51l1.5,0.78l3.89,0.36l1.08,0.74l1.0,1.99l4.33,1.4l1.59,-0.46l0.96,-1.07l0.85,-2.13l2.87,-0.24l2.75,-1.27l-0.61,1.2l2.03,2.18l0.16,1.69l0.8,1.25l0.95,0.66l2.04,0.17l1.38,0.88l0.35,1.95l-0.12,4.2l1.23,1.91l2.07,1.56l4.22,2.16l1.42,0.29l3.92,-0.45l2.94,1.06l1.2,1.26l-0.4,2.57l1.25,4.12l2.02,3.55l-3.87,-0.56l-1.69,0.81l-1.13,1.22l-0.53,1.69l0.57,1.56l-2.75,3.63l-3.05,2.07l-0.83,1.37l0.25,2.53l1.44,2.18l2.96,2.54l-1.46,0.71l-0.59,0.79l-0.73,3.01l0.24,1.21l1.66,1.86l1.59,2.88l2.27,1.8l1.49,2.73l1.15,0.41l2.87,-0.2l6.04,2.48l6.53,3.54l3.45,0.91l0.74,1.13l1.34,0.71l2.65,0.05l12.35,-2.82l2.57,-1.43l1.28,0.2l-0.66,2.31l3.01,4.31l-0.09,1.05l-2.23,2.08l-1.33,3.37l-4.53,3.72l-4.86,5.9l0.26,2.23l1.12,3.31l-1.49,0.68l0.04,1.27l-1.69,-0.09l-0.98,0.64l-1.4,-0.58l-1.19,0.42l-1.06,1.0l-0.23,0.94l-0.97,0.31l-0.58,0.74l-0.31,1.5l-0.51,-0.86l-2.93,0.33l-1.69,-0.33l-2.45,2.52l-3.23,0.98l-1.84,2.38l-0.21,4.9l-0.97,-1.05l-4.59,1.51l-1.65,-0.43l-1.99,1.22l-1.84,1.94l-0.12,1.5l-2.19,3.37l-1.0,0.4l-0.33,1.25l-1.53,-0.6l-0.76,1.09l-2.75,0.11l-1.42,-0.32l-1.12,-0.8l-1.31,0.81l-1.65,4.92l-2.53,1.46l-1.33,2.28l-1.34,0.22l-2.77,1.72l-0.14,0.63l0.65,0.59l5.71,-0.23l-1.34,2.7l0.72,1.33l-2.65,1.97l0.1,1.05l-1.72,0.44l-0.52,-1.36l-0.77,-0.63l-1.8,-0.21l-3.23,2.18l-2.8,-0.02l-2.59,1.02l-2.05,0.19l-1.25,1.63l-0.25,1.87l0.55,0.95l-1.87,-0.06l-0.67,-1.68l-2.36,-0.78l-5.47,-0.08l-1.49,0.81l-0.59,1.23l-0.77,2.83l0.98,0.97l-2.77,-0.03l0.84,-1.78l-0.01,-0.75l-0.74,-0.67l-4.52,-0.28l-1.59,-0.96l-1.79,-0.39l-2.87,0.32l0.2,-0.73l-0.36,-0.56l-2.08,0.22l-1.86,0.83l0.03,0.74l0.94,0.34l1.23,1.23l-1.61,-0.1l-1.02,1.73l-1.6,0.14l-2.88,-1.1l-0.69,-0.98l2.17,-1.26l0.08,-0.68l-2.32,-0.7l-0.35,-1.1l-3.12,-0.7l-1.96,-0.98l0.06,-1.45l-1.18,-0.57l-3.32,-0.15l-1.15,0.96l-1.41,-0.7l-2.55,-2.45l-2.63,1.2l-1.07,-0.76l-4.01,0.2l-3.14,-0.46l-0.3,-0.49l1.31,-3.67l-1.25,-1.16l0.0,-3.75l-1.92,-1.4l-8.39,1.6l-2.63,-0.34l-4.77,0.37l-1.36,-0.34l-1.45,-1.34l-0.27,-1.42l0.72,-1.27l1.7,-0.85l5.37,0.0l1.79,-0.48l2.62,-2.32l0.89,-2.0l-0.22,-1.77l-0.6,-0.3l-3.34,1.54l-1.34,-0.21l-1.16,-1.2l-0.83,-2.21l-1.52,-0.52l-1.81,-0.01l-1.46,-1.47l-0.99,0.68l-0.82,2.82l0.42,1.59l2.15,1.62l0.64,1.61l-0.57,1.4l-1.19,0.76l-1.38,-0.34l-1.24,0.33l-3.54,-1.66l-4.38,1.91l-0.58,1.58l1.02,1.26l-4.06,-1.66l-1.97,-1.65l-0.87,-1.8l0.15,-4.34l-0.55,-2.48l-1.55,-2.51l-1.19,-0.67l-0.59,0.35l2.09,3.88l0.0,5.28l0.87,2.64l4.64,3.86l-1.48,0.52l-8.89,-0.37l-3.73,-1.18l1.07,-3.02l-0.09,-1.46l-1.94,-1.5l-2.75,-0.5l-17.1,-0.5l0.58,-1.48ZM692.59,626.12l1.97,-0.05l1.81,-0.94l-0.57,1.19l-1.45,0.53l-1.76,-0.73Z",
        name: "Provence-Alpes-Côte-d'Azur"
    },
    "FR-T": {
        path: "M244.25,389.03l-0.31,-1.11l-2.86,-0.21l-0.42,-0.73l1.36,-1.47l-0.1,-1.73l0.52,-0.79l4.3,-2.4l0.48,-1.81l-0.87,-2.37l1.49,-1.81l7.43,-1.66l0.17,0.65l-1.0,1.63l0.99,0.9l6.85,-1.05l1.46,0.21l4.42,2.32l3.79,-1.72l2.86,-0.19l2.34,-2.04l2.77,-0.34l0.86,-1.23l-1.01,-1.78l-2.09,-1.47l-1.48,-0.05l-0.2,-0.92l0.59,-2.98l-0.97,-4.09l1.47,-2.55l-0.66,-4.53l-1.62,-2.86l-0.6,-3.2l-3.78,-6.41l0.74,-2.75l-2.18,-2.29l-4.01,-2.47l-0.88,-1.94l-0.43,-2.43l-0.91,-1.07l-1.53,-0.78l-2.22,-3.06l-2.05,-1.29l0.13,-0.56l1.47,0.22l3.73,1.74l4.31,-0.56l5.13,0.68l3.99,-0.34l5.39,-2.69l0.34,-1.13l-0.81,-1.37l1.0,-0.85l1.73,-0.42l2.13,0.74l5.97,-1.69l6.45,-0.7l5.88,-0.12l1.56,2.64l1.71,0.55l1.93,-2.26l2.51,-0.92l1.0,-2.45l1.89,-2.08l0.9,-0.26l2.97,0.49l1.47,2.34l0.64,0.37l2.12,-0.62l0.13,1.56l0.56,0.55l2.69,-0.26l-0.16,2.6l0.74,1.03l3.66,-0.55l1.03,1.31l1.83,0.26l-0.35,5.64l0.36,1.29l1.37,1.15l6.77,0.43l2.98,-1.38l5.49,-0.33l0.79,-0.45l0.19,-0.71l-0.87,-2.54l5.63,2.78l1.17,1.63l1.3,3.39l7.23,9.31l2.64,1.85l1.67,1.93l0.84,2.19l-0.6,4.28l1.11,3.12l2.33,2.03l3.29,1.27l0.85,2.04l4.68,0.33l1.5,0.67l1.08,1.6l-0.33,2.96l3.06,2.62l-0.93,2.7l-3.26,1.63l-2.6,0.09l-1.98,0.86l-3.1,3.7l-0.64,1.72l-5.14,0.42l-4.24,3.26l-2.51,0.88l-0.26,0.86l1.66,3.1l0.56,2.78l-0.2,0.35l-1.24,-0.17l-0.44,0.5l0.65,2.55l0.13,3.01l2.55,3.33l2.6,0.14l1.87,3.15l-0.27,0.89l-3.04,1.96l-3.5,0.68l-1.61,9.25l-0.5,0.55l-1.1,0.02l-1.68,-0.77l-1.19,0.49l-0.97,1.76l-2.34,1.96l-1.37,2.98l-2.13,1.76l-2.19,2.98l-2.91,1.02l-0.84,5.17l-4.25,5.89l-2.66,0.63l-6.76,4.5l-1.58,4.45l0.01,4.1l-0.37,1.29l-1.66,1.46l-2.94,1.32l-0.89,1.94l-0.92,0.86l-0.88,0.24l-2.68,-0.62l-5.18,2.36l-0.92,1.54l0.68,1.71l-1.85,2.2l-1.43,0.56l-1.76,-0.54l-5.11,1.35l-3.9,-1.19l-2.34,-1.94l-3.73,-1.76l-3.34,0.02l-1.52,-2.46l0.02,-3.07l-0.61,-1.38l-3.56,-2.42l-4.28,-0.72l-0.72,-2.44l-1.16,-1.24l-1.2,0.22l-1.55,1.82l-4.49,-0.2l-2.81,-7.55l-2.61,-4.07l-2.88,-2.89l-8.68,-5.52l-0.48,-1.77l-2.47,-1.03l-3.22,-2.81l-4.03,-1.44l-2.77,-2.39l-3.02,0.1l0.99,-5.73l3.71,-0.99l0.98,0.04l5.25,4.94l4.4,1.8l0.48,-0.15l-1.43,-1.86l-5.53,-3.9l-1.77,-2.15l-1.1,-3.66l2.03,-1.93l2.35,-0.64l0.48,-1.14l-0.1,-1.07l-0.94,-1.64l0.89,-0.78l-0.03,-0.67l-0.93,-0.53l-1.09,-2.34l1.83,0.24l0.92,-0.77l0.72,-1.95l-0.78,-1.02l-1.48,-0.65l-0.72,-3.24l-1.89,-1.16l0.55,-0.47l-0.04,-0.64l-1.96,-1.09ZM235.41,400.42l1.09,0.41l1.35,-0.28l0.64,0.57l0.15,2.37l0.68,0.73l-0.16,1.32l2.73,1.99l-0.4,3.63l-1.28,2.83l-0.62,-0.25l-2.09,-4.72l-4.91,-4.37l-2.15,-2.59l0.34,-1.58l-1.72,-3.79l3.09,1.03l3.27,2.71ZM219.59,381.28l3.07,-0.68l0.94,0.18l0.42,0.77l-1.95,-0.5l-0.35,0.62l1.41,1.8l1.75,-0.06l1.83,-0.69l0.24,0.77l1.02,0.43l6.19,0.88l1.32,0.74l1.5,1.93l-0.96,0.35l-3.3,-0.75l-5.86,-3.3l-3.59,0.51l-0.76,-0.27l-2.9,-2.73Z",
        name: "Poitou-Charentes"
    },
    "FR-GF": {
        path: "M10.97,616.39l0.03,-0.01l1.04,0.32l0.16,0.01l0.86,-0.15l0.51,-0.46l0.86,-2.17l2.19,-0.54l1.74,-1.7l0.64,-0.95l2.47,-5.67l2.47,-3.35l0.8,-2.07l0.46,-0.34l0.06,-0.66l-0.55,-0.48l-0.0,-0.31l0.65,-1.16l0.29,-1.23l-0.01,-0.47l-0.64,-0.76l0.44,-0.66l-0.5,-1.65l0.23,-0.35l-0.0,-1.56l-0.44,-0.68l-0.47,-0.14l0.86,-1.73l2.07,-2.81l1.19,-0.89l0.84,-2.29l1.16,-1.21l0.63,-1.48l-0.08,-2.67l0.58,-2.69l-0.24,-0.63l-0.99,-0.81l-0.94,0.15l-0.73,-1.11l-0.67,-2.34l-1.1,-1.52l-2.15,-0.95l-0.85,-1.38l-0.93,-0.69l-0.78,-1.45l-0.91,-0.91l-0.6,-1.53l-1.42,-1.5l-0.04,-0.68l0.68,-2.17l-0.13,-0.85l-0.5,-0.52l-1.21,-0.36l-0.61,-0.56l-0.08,-0.33l0.53,-1.13l-0.01,-1.08l-0.33,-1.55l-1.0,-2.09l-0.56,-3.53l0.08,-0.72l0.82,-1.83l0.01,-1.55l-0.48,-1.52l0.02,-2.19l-0.4,-0.62l-0.93,-0.5l-0.06,-0.26l0.0,-4.12l-0.26,-0.76l1.19,-1.15l-0.22,-1.91l0.25,-0.92l2.4,-2.97l0.33,-0.79l0.74,-0.61l0.47,-1.45l0.64,-0.92l1.37,-1.42l3.33,-2.64l1.1,-0.4l1.1,-0.76l1.58,-1.93l1.86,-4.21l0.22,-3.72l0.39,-1.24l0.71,-0.95l2.31,-1.41l1.79,0.34l0.48,0.18l0.59,0.84l1.69,0.74l1.43,1.2l5.31,2.09l2.31,1.82l3.75,0.96l3.15,-0.21l1.42,1.68l1.12,-0.16l0.56,-0.61l0.3,0.04l4.38,2.03l1.36,0.3l0.42,-0.63l1.85,0.29l0.74,0.42l1.3,1.07l2.72,4.11l3.75,2.79l5.06,4.61l0.02,0.49l0.31,0.28l0.66,-0.01l0.76,0.42l2.53,2.16l0.64,1.06l-0.27,1.23l0.6,0.42l0.73,-0.49l0.79,-1.1l0.49,-0.18l1.21,0.53l0.54,0.96l-2.76,4.28l0.03,1.47l0.4,0.37l0.6,-0.32l0.54,-0.93l0.57,-1.94l1.79,-1.31l0.32,-0.47l0.87,0.63l1.21,1.89l2.17,1.25l2.26,2.1l0.9,1.31l1.5,6.5l-0.33,1.34l-1.91,1.37l-0.89,1.13l-0.01,0.47l0.45,0.15l2.11,-0.67l1.15,-0.61l0.64,-0.84l0.53,-2.05l-0.28,-4.86l0.18,-1.1l0.47,-0.85l1.05,-0.2l1.97,1.64l-0.0,0.75l1.13,1.9l0.28,1.83l0.66,0.89l-0.25,0.37l0.26,0.94l0.51,0.65l1.03,0.2l-0.69,0.86l-0.09,1.41l1.58,2.65l0.57,1.61l-0.06,2.16l-0.64,2.0l-0.29,0.57l-2.42,1.18l-1.04,0.92l-0.79,2.17l-0.92,1.57l-2.1,2.32l-1.35,0.82l-0.13,1.42l-0.89,0.24l-0.67,0.68l-0.88,2.96l-1.99,3.34l-0.78,0.63l0.04,0.74l-4.48,7.35l-0.56,0.42l-1.12,0.12l-0.77,0.72l-0.64,1.51l-1.27,1.01l-0.24,0.8l0.31,2.33l-2.32,4.42l0.33,0.96l-0.82,0.4l-0.56,0.65l-2.67,5.98l-0.28,1.19l-1.09,0.6l-0.07,0.39l0.69,1.25l0.05,0.53l-2.13,3.57l-1.21,1.07l-0.79,1.45l-0.92,0.95l-3.72,2.24l-1.52,0.63l-0.69,0.59l-0.84,1.79l-0.27,0.23l-0.79,0.05l-0.55,0.6l-0.56,0.05l-2.57,-0.42l-0.95,-0.79l-0.97,-0.34l-5.09,0.79l1.4,-1.11l-0.13,-0.66l-2.09,-1.75l-0.88,-1.2l-0.87,-0.45l-0.43,0.08l-1.44,1.65l-1.23,0.47l-1.2,0.89l-2.14,0.34l-1.52,-0.76l-2.22,-0.27l-2.22,-0.96l-0.87,-0.06l0.28,-0.61l-0.05,-0.6l-0.6,-0.69l-0.75,-0.14l-1.33,0.55l-1.04,1.47l-1.27,0.26l-0.97,1.22l-1.24,-0.04l-0.48,1.63l-0.46,0.33l-1.37,0.49l-0.6,0.49l-0.71,-0.33l-1.15,0.23l-0.87,2.01l-0.28,0.3l-0.57,0.09l-0.5,-0.25l-1.22,-1.44l-0.92,-0.01l-1.74,0.44l-1.6,-0.21l-2.03,-1.4l-3.41,-0.59l-1.86,-1.51l0.34,-0.7l-0.6,-0.59l-1.7,-0.92Z",
        name: "French Guiana"
    }
},
height: 746.694658821223,
projection: {
    type: "mill",
    centralMeridian: 0
},
width: 900
}), $.fn.vectorMap("addMap", "span", {
insets: [{
    width: 900,
    top: 0,
    height: 671.3455904856035,
    bbox: [{
        y: -5438155.586258878,
        x: -1034892.2150401801
    }, {
        y: -4304663.079836929,
        x: 484657.87992932
    }],
    left: 0
}],
paths: {
    "ES-GA": {
        path: "M1.5,81.67l-0.52,-1.68l-0.58,-0.88l1.78,-4.6l0.91,-3.31l-0.47,-0.93l-0.95,-0.72l-0.4,-1.76l1.33,-0.48l0.5,-0.91l0.33,-1.54l1.41,-1.2l0.28,-0.67l1.52,0.77l1.1,-0.31l1.15,-0.94l1.29,-1.75l2.04,-0.5l0.35,-0.4l0.0,-0.67l-0.57,-0.36l-2.45,0.85l-0.61,-0.06l0.03,-0.4l-0.58,-0.39l-2.0,1.03l-0.57,-0.07l-0.43,-1.11l2.9,-2.8l1.9,-1.04l2.46,1.04l2.39,-0.26l1.03,-0.46l1.73,-1.84l1.02,-2.44l1.4,1.08l1.91,-0.09l1.84,-0.76l1.14,-0.88l0.13,-0.46l-0.4,-0.26l-1.25,0.08l-0.57,-0.39l-0.94,-1.93l-1.32,-0.68l3.28,-1.27l2.81,-1.89l2.0,-0.54l1.11,-1.12l0.5,-0.14l2.82,2.55l4.9,1.54l1.5,0.19l4.18,-2.04l2.29,-0.7l2.45,0.93l3.57,-1.74l1.31,-2.05l2.04,-0.87l0.7,-0.96l3.11,-0.83l0.22,0.92l0.66,0.95l1.46,1.3l0.57,-0.04l0.92,-1.17l0.25,-0.97l-0.16,-2.04l0.42,-0.81l0.96,0.17l2.73,1.5l1.01,2.66l2.2,2.44l0.44,1.31l0.38,0.27l0.38,-0.27l0.53,-1.59l-0.48,-5.48l0.26,-0.67l1.83,-1.41l-0.06,-0.69l-1.42,-0.66l-3.44,-0.0l-0.99,-0.33l-1.51,-1.64l-0.59,-0.28l0.61,-0.49l7.08,-1.04l1.0,-1.22l-0.07,-0.92l-0.31,-0.33l-0.56,-0.04l-1.48,0.67l-2.78,0.47l0.06,-0.38l-0.97,-0.67l-0.54,0.12l-0.71,1.09l-1.12,0.46l-2.24,0.1l0.78,-3.69l0.81,-0.0l0.86,-1.24l-0.06,-0.53l-0.97,-1.11l-0.27,-1.27l2.97,0.2l2.14,-1.05l9.17,-7.04l0.21,0.6l0.79,0.64l0.94,0.03l0.77,-0.37l0.21,-0.46l-0.84,-0.27l0.69,-0.55l0.03,-0.64l-1.16,-0.94l-0.14,-0.73l0.82,-2.5l3.03,-0.17l2.06,-0.6l1.92,-1.16l1.64,-1.52l1.2,-1.65l1.4,0.22l1.14,2.67l0.74,0.95l-0.59,-0.22l-0.51,0.16l-0.83,1.78l0.25,1.38l-0.2,0.16l-0.41,-0.36l-0.55,0.02l-1.01,0.96l0.0,0.62l0.38,0.4l3.63,0.04l0.6,-0.67l0.04,-0.47l-1.02,-1.68l0.97,-0.29l1.56,0.55l0.43,-0.11l-0.29,-1.48l0.74,-0.83l2.4,-1.69l2.56,-0.68l1.53,-1.03l1.2,-1.37l0.5,-1.41l0.58,1.31l-1.69,2.24l-0.04,1.81l0.72,0.53l0.57,-0.16l0.79,-0.48l0.14,-0.96l1.44,-0.52l0.16,0.83l1.56,3.06l-0.17,1.32l0.55,0.42l0.75,-0.37l1.26,-2.17l0.84,0.11l1.19,-1.16l0.77,-0.29l2.46,0.28l6.09,3.32l2.61,2.06l4.12,5.75l2.88,1.48l-0.78,1.02l0.23,1.05l1.22,0.4l1.73,-1.05l0.82,0.0l3.86,0.85l4.11,-0.15l1.09,-0.63l2.69,1.17l0.08,1.51l-1.13,2.04l-0.35,1.26l0.61,1.81l-0.29,1.46l-2.03,1.87l-0.96,1.49l-1.0,0.84l-2.22,-0.21l-1.13,0.37l-0.59,1.28l-0.09,2.52l0.42,0.7l0.88,0.44l1.42,0.16l0.51,3.69l0.95,1.72l0.89,0.94l1.47,0.9l0.54,3.75l0.83,1.73l2.05,1.79l0.99,0.23l0.76,0.96l1.79,0.85l-0.54,3.14l1.03,1.99l1.23,0.69l1.39,-0.5l2.42,-1.42l0.82,-1.64l0.45,-0.26l2.01,2.92l0.05,1.44l-2.34,2.12l-2.78,1.26l-1.3,-0.03l-0.94,0.44l-1.29,3.14l-1.07,0.57l-0.51,0.76l-0.15,0.98l0.88,2.16l0.77,0.51l0.65,-0.1l0.57,-0.53l0.22,-1.96l2.06,2.57l2.9,0.52l1.97,2.17l0.53,4.04l-0.5,0.71l-0.44,1.5l-1.17,1.49l-0.11,1.26l0.54,2.79l-0.57,1.72l-4.19,5.13l-0.51,0.24l-1.17,-0.2l-0.83,0.29l-1.44,1.47l-2.2,1.12l-1.18,1.92l-0.16,1.05l0.23,1.18l1.32,2.06l0.13,0.78l-1.59,1.32l-0.37,0.89l0.08,3.59l-1.14,2.6l-0.13,2.4l-0.57,1.59l0.36,0.54l2.92,0.13l2.94,0.64l0.94,-0.18l1.2,-1.05l1.89,-0.38l1.79,1.15l4.53,1.27l0.69,1.59l-0.26,2.13l-0.46,1.23l-1.03,1.05l-0.09,0.67l3.29,2.79l2.22,1.45l0.9,1.01l0.24,0.63l-0.29,3.67l-1.87,3.11l-1.94,2.1l-0.44,1.77l-1.3,-0.36l-2.48,0.36l-2.25,1.58l-2.87,3.2l-1.01,2.97l-1.98,1.51l-2.59,3.58l-0.24,0.9l0.65,1.24l0.68,0.47l1.81,0.1l0.96,1.31l-1.35,3.73l0.23,1.73l-0.48,-0.0l-1.51,1.11l-2.13,0.94l-1.86,-0.86l-1.96,-1.71l-2.18,-1.37l-1.36,0.14l-2.21,1.47l-0.64,0.79l0.14,5.42l-1.26,1.84l-2.06,1.29l-4.6,1.59l-4.71,0.36l-0.97,0.68l-1.9,2.1l-0.8,-2.34l-0.89,-1.26l-1.74,-0.54l-1.13,-0.72l-0.78,0.09l-0.49,0.43l-0.59,1.8l-0.88,0.63l-1.26,0.45l-2.35,0.09l-0.8,-0.45l-0.02,-0.53l0.99,-2.71l-0.36,-0.54l-3.47,-0.15l-2.85,-1.82l-1.17,-0.33l-2.09,0.97l-3.98,0.97l-1.88,-0.09l-0.91,0.4l-0.83,1.39l-1.58,-0.0l-0.56,-4.59l-0.54,-0.34l-1.53,0.76l-0.63,2.48l-0.48,0.9l-1.98,-0.14l-1.18,0.47l-3.66,4.19l-2.79,0.81l-5.19,-0.32l0.23,-1.96l-0.18,-1.37l-0.68,-0.84l-2.21,-0.87l-0.63,-1.35l0.09,-1.49l0.59,-1.5l2.5,-3.72l1.87,-1.84l3.05,-2.24l0.76,-1.29l0.15,-1.55l-0.66,-1.65l-1.01,-0.98l-1.39,-0.62l-1.56,0.1l-2.05,0.79l-0.55,-0.44l-0.19,-1.25l0.16,-3.97l-1.22,-2.27l-0.56,-0.1l-1.94,1.4l-1.1,0.45l-1.76,0.23l-3.3,2.47l-10.12,1.65l-1.41,0.54l-2.23,1.55l-1.11,0.45l-3.72,0.38l-1.22,0.95l-1.74,3.64l-1.22,0.82l-3.26,1.34l-0.81,0.7l-1.67,2.73l-1.1,0.93l-2.48,1.05l-1.99,2.11l-0.56,-0.2l0.12,-0.99l-1.31,-17.24l0.18,-1.35l0.5,-0.43l2.47,-0.04l1.55,-0.54l0.51,-1.18l-0.5,-0.9l-1.22,-0.73l1.93,-1.14l0.62,-1.93l0.93,-0.6l1.27,-1.6l3.37,-2.62l1.18,-0.57l2.11,-1.98l2.53,-1.43l0.59,-0.66l0.25,-0.86l-0.08,-3.38l-0.76,-0.41l-0.7,0.27l-1.0,0.97l-1.64,3.23l-2.86,0.97l-3.56,1.66l-0.77,0.79l-3.94,-0.12l-0.75,0.21l0.79,-3.02l0.6,0.91l0.68,-0.02l0.39,-0.67l-0.1,-4.08l0.7,-0.15l2.29,0.54l0.65,-0.28l0.6,-1.29l2.43,-2.88l4.24,-3.4l0.58,-1.44l-0.11,-0.44l-0.95,0.19l-1.85,-0.2l-3.53,2.49l-2.2,0.86l-2.02,0.18l-2.01,-0.25l-1.41,-0.88l-0.46,-0.86l-0.33,-1.76l-0.67,-1.11l-0.98,-0.52l-2.29,-0.46l0.27,-0.48l1.09,-0.69l2.14,-0.74l0.57,0.2l0.39,0.54l-0.01,0.5l-0.69,0.45l-0.0,0.67l1.58,0.8l1.04,0.19l1.14,-0.55l0.27,-1.12l-0.16,-1.77l0.79,-0.98l-0.8,-3.06l0.13,-2.67l0.53,-0.94l1.69,-0.98l0.9,-1.2l2.43,-5.5l0.53,-2.07l-0.39,-0.5l-0.79,0.28l-1.06,2.73l-0.78,0.93l-0.92,0.32l-1.0,-0.38l-2.28,-3.71l-0.7,0.07l-1.02,2.51l-0.16,1.11l0.55,0.85l-1.21,1.76l-0.47,0.31l-0.49,-0.39l0.14,-1.11l-0.45,-0.06l-3.16,2.21l-0.06,0.57l0.68,0.83l-2.95,1.21l-0.68,2.35l-1.7,1.52l-0.59,-0.66l-0.46,-3.05l-1.65,-0.91l-0.79,-0.77l0.3,-1.91l1.79,-3.78l0.55,-4.55l1.44,-2.17l2.81,-1.56l2.69,-3.29l1.71,-0.51l0.94,-2.16l-0.17,-1.62l-1.57,-1.05l-0.59,0.3l-0.26,1.94l-0.89,1.11l-1.37,0.61l-1.62,0.23l-3.29,-0.49l-1.51,0.28l-0.32,0.45l0.19,1.32l-1.34,1.45l-0.65,0.34l-1.01,-0.19l-0.72,-0.63l-1.17,-3.55l1.17,-0.49l0.89,-1.94l-0.66,-1.2l-2.02,-1.08l-0.39,-1.71l0.01,-0.59l0.81,-1.41l-0.12,-1.75l-2.15,-0.81l-0.98,-1.58l-0.99,-0.52l-0.56,0.37l0.33,1.47l-0.17,0.23l-0.37,0.1l-0.55,-1.27l-0.93,-0.05l-1.45,1.15l-1.31,2.88Z",
        name: "Galicia"
    },
    "ES-IB": {
        path: "M885.15,331.58l1.28,1.03l-0.14,1.44l0.63,0.6l0.94,-0.34l1.06,-1.43l0.4,0.56l1.78,1.15l1.37,1.72l1.81,0.66l0.6,0.84l0.51,1.29l-0.05,0.92l-0.94,0.39l-0.03,0.73l1.03,0.51l1.69,0.11l0.55,2.47l1.28,2.14l-0.99,-0.62l-0.58,0.34l-0.17,5.32l-2.98,0.39l-4.55,-2.24l-10.67,-7.07l-2.3,-0.92l-2.88,-0.08l-4.64,0.94l-2.1,-0.75l0.45,-2.95l0.65,-0.62l-0.01,-0.59l-0.67,-0.55l-1.27,-0.47l-1.04,-1.32l0.39,-1.63l0.66,-0.86l4.33,-0.97l1.66,0.63l6.33,-0.65l2.7,0.11l1.79,-0.55l1.35,-1.05l0.76,1.34ZM822.57,340.1l0.71,0.93l0.58,0.03l-3.9,1.69l-1.54,1.53l-1.17,-0.32l-0.4,0.38l-0.14,2.77l0.33,0.41l2.52,0.4l4.1,-1.16l-0.25,1.53l-0.47,0.84l-1.31,0.65l-2.05,0.53l-0.71,0.82l-0.14,2.16l0.86,2.05l1.81,1.75l2.12,1.21l2.12,0.51l4.67,-0.03l1.29,-0.56l1.95,-2.0l0.74,-0.37l1.69,0.5l3.69,2.2l1.89,0.2l-0.2,0.57l0.37,1.94l-0.81,1.26l0.35,1.21l-1.47,3.29l-1.84,0.83l-0.92,1.15l-0.28,1.5l0.42,1.29l-2.52,2.34l-2.83,3.43l-2.08,4.11l-0.57,4.28l-0.31,-0.26l-0.66,0.17l-1.05,3.44l-1.97,2.14l-6.06,3.77l-3.85,3.7l-0.37,0.01l-1.89,-2.78l-1.74,-1.03l-0.76,-2.61l-2.25,-1.41l-0.75,-0.21l-2.45,0.58l-5.64,-0.42l-2.4,-0.99l-1.51,-1.91l-0.68,-4.56l-0.93,-0.76l0.14,-1.06l0.99,-2.02l-0.74,-2.11l-1.98,-1.86l-2.28,-1.35l-2.06,-0.55l-1.51,0.5l-4.24,2.37l-1.07,1.21l-0.68,2.22l-1.47,1.55l-1.4,0.17l-1.36,-2.59l0.55,-0.58l0.07,-0.62l-1.76,-1.81l-0.61,0.04l-0.74,0.82l-0.41,-0.74l-0.57,-0.19l-1.96,1.08l-0.39,-0.29l-0.64,-1.59l-1.08,-0.9l-0.29,-1.33l0.4,-2.74l4.54,-2.86l1.45,-0.36l1.18,-0.77l3.29,-3.51l0.85,-0.47l2.59,-0.65l3.21,-3.17l0.87,-1.68l1.37,-0.07l3.78,-4.07l2.5,-1.17l2.39,-2.1l1.27,-0.46l0.54,-0.86l2.07,-0.05l1.98,-0.97l3.92,-2.63l1.94,-0.53l3.73,-0.37l3.65,-0.94l6.62,-2.71ZM823.91,341.04l0.24,-0.25l0.09,0.05l-0.16,0.12l-0.18,0.08ZM709.71,429.64l-0.58,-0.67l-0.66,-0.03l-1.07,1.4l-0.95,1.67l-1.12,3.54l-2.97,-2.38l-2.38,0.23l-0.6,-0.98l-1.11,-0.35l-1.34,0.36l-0.5,0.83l-1.65,-1.11l-0.65,-0.76l-0.25,-1.32l0.99,-3.26l-0.49,-1.02l0.85,-0.63l0.53,-0.07l0.66,0.39l1.37,-0.54l1.53,0.02l0.4,-0.46l-0.57,-3.54l0.04,-1.81l0.6,-0.69l1.88,-1.2l1.52,-1.64l0.58,0.43l0.51,0.02l1.08,-0.84l0.98,0.3l1.28,-1.07l1.73,-0.91l1.72,-0.47l1.29,0.22l1.66,-1.17l0.73,0.05l1.56,1.03l1.9,0.25l0.77,0.69l-0.26,0.78l1.29,4.06l-0.78,0.12l-0.87,0.68l-0.68,1.22l-0.49,1.73l-2.36,1.6l-2.04,3.14l-3.05,2.18ZM705.29,448.74l0.52,-1.86l-0.62,-0.65l0.43,-0.44l0.69,0.22l0.97,-0.84l0.85,-1.65l3.04,4.39l1.4,1.27l3.57,0.03l1.31,0.43l-0.05,1.33l-1.25,0.76l-2.04,-0.59l-3.75,-1.97l-1.25,-0.09l-3.54,1.79l-0.41,-1.27l0.31,-0.48l-0.19,-0.35Z",
        name: "Islas Baleares"
    },
    "ES-PV": {
        path: "M419.05,32.69l0.76,-0.45l1.52,-0.16l3.34,0.15l3.17,-0.32l2.52,-0.96l0.64,0.16l2.53,2.22l0.53,0.9l0.74,2.21l0.25,1.87l0.71,0.19l0.27,-0.35l0.59,-1.86l0.08,-1.37l0.7,-0.28l3.48,0.89l3.79,1.64l4.2,1.14l1.36,1.98l6.45,3.07l2.74,0.82l2.8,0.3l5.75,-1.01l1.43,1.54l1.14,0.26l0.87,-0.54l0.38,0.79l0.67,0.39l0.4,-0.06l1.85,-1.47l2.14,-0.47l4.68,-1.71l2.2,-1.31l0.75,0.03l1.14,1.43l0.52,0.45l0.5,0.02l0.93,-0.67l-0.0,-0.65l-0.88,-0.87l2.11,-0.95l2.55,-2.29l2.11,-1.14l0.92,0.67l-0.34,2.34l-0.03,3.03l0.22,0.35l1.8,0.88l0.7,0.96l0.24,1.78l-1.25,0.4l-1.21,1.14l-1.99,3.54l-0.76,0.75l-1.23,0.51l-1.35,-0.34l-0.5,0.49l-0.13,0.86l-1.29,-0.53l-0.58,0.21l-0.73,3.17l0.46,4.38l-0.88,1.76l-0.68,0.73l-5.13,3.59l-1.75,3.63l0.05,2.18l-0.53,1.21l-2.91,1.1l-1.86,2.33l-3.14,0.44l-1.87,-0.67l-1.08,0.29l-1.24,1.42l-1.43,3.42l0.9,3.7l-0.19,1.54l-1.35,2.23l-0.76,2.12l-0.33,3.58l-0.25,0.38l-1.86,0.73l-0.62,1.0l0.56,4.21l1.15,0.71l0.12,0.87l-2.73,1.87l-1.56,0.12l-1.22,-1.58l-1.89,-0.39l-2.03,1.38l-3.76,3.49l-0.04,1.38l0.41,0.66l2.7,1.39l1.0,-0.4l1.21,-1.6l0.81,0.48l0.4,2.14l-0.73,5.62l-3.2,-0.82l-1.8,-1.06l-0.6,-1.45l-0.51,-0.22l-1.28,0.73l-0.72,1.58l-1.63,0.07l-1.32,0.77l-0.2,-0.79l-0.93,-0.57l-0.95,0.15l-0.64,0.64l-0.61,-0.28l-2.3,-1.82l-1.03,-0.45l-0.02,-3.61l-0.34,-0.94l-3.02,-2.41l-1.0,-0.32l-1.21,0.39l-0.65,0.6l-0.68,1.92l-0.78,-0.03l-1.06,0.47l-0.31,-0.18l-0.25,-0.59l0.69,-0.77l0.23,-0.84l-0.24,-0.82l-0.6,-0.23l-0.55,0.35l-0.15,-0.25l-0.09,-2.01l-0.37,-1.2l-5.08,-4.54l-1.68,-0.79l-1.61,-2.03l-2.34,-1.45l-1.93,-1.8l-2.12,-1.13l-3.86,1.42l-0.53,-0.09l0.23,-1.26l-1.24,-1.58l-0.18,-0.96l2.51,-4.46l0.18,-1.15l-0.43,-1.05l-0.78,-0.36l-0.59,0.15l-1.91,2.14l-1.24,-0.04l-1.27,0.48l-0.94,1.22l-0.32,1.43l-0.61,-0.39l-3.08,-3.8l0.56,-1.54l2.88,-3.71l2.18,-0.25l1.33,0.32l0.78,0.6l0.29,1.08l0.56,0.72l1.19,0.5l2.66,0.49l3.8,-0.43l1.41,-1.16l1.51,-0.36l0.82,-1.36l-0.45,-1.37l-2.08,-0.84l-1.58,-1.53l0.01,-0.26l2.19,-0.22l0.51,-0.29l0.57,-1.05l0.01,-1.46l-0.76,-0.83l-1.14,-0.38l-0.29,-0.35l-0.13,-1.16l-1.02,-0.71l-1.73,0.8l-1.14,2.49l-0.48,0.19l-2.33,-0.23l-2.46,-0.86l1.02,-2.07l0.44,-4.83l-0.43,-0.87l-1.24,-0.6l-0.34,-0.97l0.77,-1.92l1.25,-1.19l-0.1,-1.11l-0.69,-0.68l-5.22,-0.56l-1.49,-1.19l-1.31,0.0l-6.31,3.83l-3.52,1.36l-1.08,-3.8l0.04,-1.91l-0.29,-1.3l0.17,-0.63l0.63,-0.81l6.92,-5.01l3.97,0.29l1.69,-0.2l2.08,0.6l3.09,-1.44l0.93,-1.88l-0.08,-4.33l2.1,0.41l1.58,-1.07l1.83,1.16l3.25,2.83l0.66,-0.3l-0.02,-0.81l-1.37,-4.06l1.12,-0.61l0.73,-0.87l2.76,-1.71l1.0,-0.29l0.29,-0.38l0.0,-0.68l-0.38,-0.38ZM425.78,92.02l-2.33,3.23l-0.2,1.02l0.4,0.88l1.62,1.66l1.87,1.42l4.07,1.89l4.54,1.06l3.29,1.38l5.18,0.15l1.36,0.89l0.94,-0.17l0.88,-0.6l0.08,-1.67l-0.83,-2.34l-0.98,-0.02l-1.0,0.98l-0.84,0.25l-2.04,-2.41l0.09,-0.43l1.08,-0.41l0.73,-0.75l0.93,-2.18l0.11,-0.73l-0.29,-0.57l-1.4,-0.23l-1.66,-1.43l-2.43,0.17l-5.8,-1.88l-1.82,-0.17l-4.21,0.27l-0.77,0.21l-0.57,0.52Z",
        name: "País Vasco"
    },
    "ES-RI": {
        path: "M442.94,162.21l-2.82,-0.2l-3.26,0.19l-1.96,-1.27l-1.88,-0.21l-0.77,-0.4l-0.15,-0.82l0.62,-1.89l1.41,-1.88l0.28,-1.39l-0.34,-2.01l-0.78,-0.56l-0.83,-0.23l-1.77,0.18l-1.05,0.65l-0.79,1.01l-0.68,1.58l-0.24,1.32l0.15,1.27l-0.29,0.64l-0.66,0.73l-3.6,1.95l-2.2,-0.66l-0.45,-2.75l-1.16,-2.44l-1.45,-0.38l-3.83,0.27l-0.85,-0.43l-1.85,-3.23l-1.48,-1.12l-0.62,-1.84l-2.15,-3.44l1.21,-1.52l0.75,-2.78l0.21,-1.94l-0.67,-3.43l-0.1,-2.24l-0.59,-1.13l1.67,-0.46l0.6,-0.43l1.2,-2.18l-0.15,-4.0l0.58,-2.56l-0.78,-1.83l-1.43,-1.56l0.8,-2.53l0.04,-0.94l-0.24,-0.7l-0.64,-0.54l-2.06,0.19l0.05,-0.39l1.91,-2.13l1.57,-2.41l-0.01,-0.97l-0.89,-1.63l0.1,-0.23l0.81,-0.38l2.71,-0.31l4.21,0.5l2.79,0.8l4.25,-1.43l0.09,1.5l0.46,0.86l0.56,0.14l0.45,-0.29l0.05,0.19l-0.91,1.35l0.07,0.76l0.5,0.64l0.85,0.35l1.24,-0.52l0.77,0.1l0.43,-0.28l0.64,-1.97l0.4,-0.39l0.75,-0.29l0.69,0.21l2.78,2.19l0.25,4.48l4.64,3.0l0.48,-0.12l0.61,-0.68l0.46,-0.04l0.39,0.3l0.1,1.19l0.68,0.25l1.53,-1.16l2.18,0.05l0.41,-0.59l-0.33,-0.49l0.2,-0.44l0.91,-0.82l0.67,1.41l2.04,1.19l2.3,0.71l2.83,0.43l2.88,1.05l4.18,-0.6l0.55,0.21l1.85,1.29l2.17,2.3l1.09,0.37l1.43,0.15l4.38,-0.33l1.71,0.21l1.04,0.94l-0.74,1.39l0.92,1.4l1.87,0.73l3.48,-0.01l4.85,5.89l2.46,1.81l0.05,1.62l0.59,0.96l1.82,0.0l2.16,1.84l3.19,1.83l1.37,0.42l1.74,1.23l-0.04,1.68l0.6,1.29l-0.23,1.26l0.4,1.54l-0.34,0.57l-0.94,0.15l-2.18,-0.93l-2.47,0.65l-1.4,-0.58l-1.39,0.03l-0.6,0.56l-0.84,1.66l-3.65,4.19l-0.43,2.07l0.35,1.87l0.54,1.04l2.43,2.06l0.43,1.4l-0.77,2.22l-4.72,2.75l-2.17,0.34l-1.88,-1.3l-1.66,-0.69l-1.2,-0.09l-4.08,-1.23l-0.66,-2.16l0.84,-1.35l-0.17,-0.96l-0.78,-1.31l-1.53,-1.28l-0.5,-1.05l0.01,-0.98l1.67,-1.66l0.09,-0.8l-0.4,-0.77l-0.9,-0.61l-2.38,-0.36l-1.27,0.15l-4.13,1.28l-0.83,-0.89l-0.67,-2.59l-1.23,-0.82l-3.46,-0.39l-4.16,0.32l-1.87,0.61l-2.84,2.07l-1.78,-0.17l-0.54,0.81l-0.26,3.15l-1.35,1.35l-2.32,4.48Z",
        name: "La Rioja"
    },
    "ES-AS": {
        path: "M186.77,19.88l2.76,1.17l3.53,-0.67l3.43,-0.01l4.28,-1.41l0.98,-0.95l0.61,-0.1l1.96,1.48l0.96,0.34l5.21,0.58l1.07,-0.51l1.2,0.43l2.93,-1.67l7.57,0.0l0.72,-1.07l-0.63,-1.47l0.66,-0.77l-0.17,-1.1l1.55,0.01l0.96,-0.48l0.78,-1.9l0.71,0.04l2.03,1.01l1.35,1.18l3.59,4.28l1.22,1.89l0.78,0.18l0.39,-0.3l0.18,-0.67l0.99,1.65l3.5,0.57l13.22,-0.56l1.69,0.45l0.14,0.87l-0.74,1.28l-1.1,1.06l-0.05,0.52l0.45,0.62l0.53,0.11l2.72,-1.23l1.07,-1.67l3.44,0.11l0.96,0.35l4.71,3.16l2.33,0.86l5.76,0.3l1.39,0.39l0.62,1.02l0.56,0.13l0.64,-0.41l4.43,1.36l2.35,-1.16l2.14,0.99l4.64,0.98l5.34,2.54l1.46,0.45l14.29,1.27l-0.05,2.87l-1.56,3.22l1.01,2.8l0.09,1.97l-0.52,1.12l-0.63,0.38l-0.48,-1.04l-0.58,-0.52l-1.41,-0.36l-1.46,0.05l-1.14,0.69l-0.84,1.1l-0.76,0.45l-3.21,0.02l-1.65,0.7l-0.72,1.41l0.15,1.32l-0.43,2.65l-0.74,1.14l-1.79,-0.25l-3.7,0.59l-1.72,-2.97l-1.38,-1.17l-1.48,-0.39l-0.92,0.16l-3.5,1.91l-1.08,0.99l-1.97,1.1l-2.43,0.68l-1.29,0.68l-0.69,0.68l-0.68,1.3l-0.87,2.7l-1.32,1.58l-0.55,0.09l-1.45,-0.62l-0.6,0.09l-3.52,1.74l-6.17,0.75l-3.48,-0.54l-0.99,0.17l-0.89,0.69l-0.44,1.85l-0.44,0.51l-1.14,0.35l-3.56,0.07l-0.65,0.59l-0.71,1.46l-1.68,-0.03l-2.07,0.69l-1.75,-0.9l-3.79,-0.61l-1.93,-0.94l-2.82,-0.03l-1.84,0.91l-1.68,2.76l-0.96,2.54l-1.02,0.66l-3.5,0.05l-4.71,-2.37l-2.33,-1.67l-0.56,-0.97l-0.47,-1.99l-0.49,-0.71l-0.75,-0.42l-2.14,0.4l-4.24,-0.66l-0.82,0.49l-0.82,2.29l-1.13,0.54l-0.75,0.06l-2.6,-0.96l-1.76,-0.29l-1.08,0.33l-0.5,0.68l-0.16,1.12l-0.45,0.26l-1.14,-0.3l-2.84,-1.42l-2.12,-0.35l-1.26,-0.95l-1.42,-0.28l-2.02,0.99l-1.38,2.32l-0.27,1.35l-1.66,0.61l-1.84,0.08l-0.6,0.5l-0.16,0.7l0.39,0.77l1.84,0.92l0.18,0.49l-0.19,0.42l-3.28,1.82l-3.88,1.16l-2.89,-0.25l-1.96,-0.71l-4.38,0.26l-2.04,0.89l-1.51,1.62l-0.7,0.28l-0.52,-0.91l-1.19,-0.61l-1.99,-0.34l-0.54,-4.06l-2.21,-2.53l-0.69,-0.32l-1.38,0.02l-0.95,-0.3l-2.25,-2.75l-0.7,0.04l-0.3,0.43l-0.17,2.05l-0.25,0.16l-0.36,-0.21l-0.42,-0.74l-0.3,-0.9l0.12,-0.79l1.47,-1.09l1.15,-2.99l0.56,-0.26l1.41,-0.0l3.03,-1.4l2.47,-2.25l0.25,-1.02l-0.17,-1.13l-1.73,-2.82l-0.96,-0.71l-1.12,0.52l-0.52,1.24l-0.63,0.65l-2.79,1.42l-0.75,-0.42l-0.83,-1.59l0.52,-2.1l-0.14,-1.42l-1.97,-0.99l-0.67,-0.92l-1.09,-0.29l-1.81,-1.56l-0.71,-1.46l-0.66,-4.05l-1.63,-1.07l-0.79,-0.83l-0.8,-1.48l-0.28,-3.17l-0.3,-0.68l-0.82,-0.54l-1.01,0.06l-0.79,-0.58l0.21,-2.65l0.89,-0.5l2.53,0.12l4.2,-4.36l0.49,-1.74l0.4,-0.3l0.92,-4.1l0.92,-0.8l0.53,-1.9l3.52,-0.79l6.36,-0.23l1.09,0.31l3.88,-0.31l2.64,0.78l1.78,0.21l3.76,-1.94l3.19,0.34l3.3,1.19l2.38,1.29l1.68,-0.65l1.62,0.02l0.39,-0.5l-0.25,-1.24Z",
        name: "Principado de Asturias"
    },
    "ES-CT": {
        path: "M647.31,291.34l-4.07,-1.73l-0.88,-1.03l-0.28,-1.32l-1.34,-1.27l-2.1,-1.15l-4.65,-1.63l-1.46,-0.78l-0.96,-1.67l0.63,-1.86l0.01,-0.92l-1.52,-1.28l-1.46,-0.47l-0.65,-0.64l-0.85,-1.64l-0.4,-0.15l-1.26,0.28l-1.4,-0.27l-0.21,-0.61l3.79,-2.32l2.97,-4.44l0.04,-1.0l-0.89,-2.2l-0.54,-2.84l0.69,-2.77l1.67,-3.32l0.28,-2.02l-1.17,-3.55l-2.96,-2.04l-1.43,-4.53l0.21,-1.78l0.75,-0.68l1.35,-0.26l1.0,-1.2l1.14,-0.31l1.2,-0.78l0.56,-0.78l0.86,-3.58l3.07,-2.23l-0.43,-4.25l1.6,-3.62l-0.18,-1.76l-0.63,-1.32l-0.96,-0.98l-1.53,-0.72l-0.15,-1.33l0.9,-1.38l0.67,-2.4l0.13,-3.79l0.53,-0.49l2.66,-1.12l2.79,-4.52l-0.7,-2.24l-0.08,-1.47l-0.38,-0.72l-0.84,-0.43l-3.27,-0.25l-0.66,-0.57l-0.54,-2.62l-0.89,-2.12l-0.06,-1.15l0.84,-1.28l1.6,-1.51l2.53,-3.7l2.99,-0.75l0.83,-0.5l2.46,-4.03l2.69,-1.24l1.1,-1.67l1.51,-0.96l0.9,-1.14l0.3,-0.79l-0.3,-3.56l-1.77,-2.07l1.01,-1.34l1.61,-0.77l1.11,-1.76l1.2,-0.69l0.68,-0.99l0.29,-0.97l-0.06,-1.29l0.88,-1.95l1.06,-3.98l0.6,-0.52l0.62,-1.83l0.39,-2.85l-0.34,-1.52l0.12,-0.83l0.91,-4.28l0.9,-1.62l0.69,-2.32l0.08,-3.22l0.44,-2.04l-0.32,-5.55l-0.91,-3.34l-1.2,-1.51l-0.85,-3.49l0.14,-0.53l1.27,-0.4l0.48,-0.51l0.03,-1.71l1.9,-3.94l0.61,-3.81l-0.42,-0.69l-2.15,-0.7l-0.99,-0.65l-2.63,-5.56l-0.69,-0.62l0.1,-1.55l-0.47,-1.51l-0.85,-1.12l-0.71,-0.32l0.84,-1.12l0.08,-0.55l-0.61,-0.84l0.85,-2.32l-0.11,-2.03l0.25,-1.03l1.27,-0.5l1.71,-0.13l1.07,0.11l3.44,1.16l2.36,0.06l2.79,1.65l1.96,0.78l1.54,1.42l0.84,0.39l2.07,-1.0l2.14,1.39l5.58,0.38l1.25,0.39l1.05,0.94l1.79,3.86l1.44,1.04l0.9,0.07l2.14,-0.69l8.02,0.02l1.12,0.31l-0.1,1.26l0.33,0.36l1.18,0.36l2.37,3.76l1.09,3.02l0.86,1.15l-0.67,2.22l0.55,0.64l-1.04,1.81l-0.27,1.13l0.44,0.48l1.3,-0.17l0.91,0.82l0.16,1.03l-2.52,1.36l-0.17,0.58l1.83,2.88l0.16,1.33l0.94,0.64l3.99,0.54l0.79,-0.12l0.88,-0.52l0.96,-1.32l4.0,-0.52l2.22,-0.92l0.98,-2.65l1.03,0.51l0.93,0.02l1.31,-0.82l0.23,0.51l1.22,0.5l4.14,0.59l1.29,0.54l3.81,2.59l2.78,0.43l0.84,0.37l0.81,1.35l0.84,3.28l0.65,1.45l2.41,1.89l1.0,0.14l2.98,-0.54l3.48,-2.91l1.15,-2.31l0.85,-0.4l3.17,0.36l4.05,-1.27l1.9,-0.2l2.55,1.64l3.84,1.82l2.98,0.53l0.45,1.29l1.11,1.46l1.28,1.01l3.55,1.42l0.69,-0.03l0.71,-0.54l0.94,-1.81l1.06,-0.03l4.47,1.31l1.86,-0.09l0.38,-0.43l-0.03,-0.39l-0.86,-1.1l-0.51,-1.45l3.09,-2.69l1.05,-0.54l1.23,-0.09l2.54,0.39l1.5,-0.22l4.17,-3.26l3.24,-0.25l2.17,-1.64l1.92,0.74l1.35,-0.7l2.7,0.24l1.58,2.45l2.32,1.04l3.55,0.13l3.98,-0.69l-0.26,2.59l0.35,1.32l1.58,2.91l0.66,0.63l3.09,-0.21l1.07,1.24l0.73,-0.11l0.56,-0.54l1.8,0.94l-1.43,2.88l-0.45,2.18l-1.38,1.69l-0.87,-0.39l-6.44,-0.26l-1.21,0.9l-0.76,1.99l-0.63,5.54l0.41,1.7l1.25,1.39l3.1,2.07l0.76,1.74l-0.32,3.82l0.85,4.3l1.83,2.21l-0.21,1.53l-1.59,2.78l-0.83,2.26l-0.99,1.05l-4.85,3.08l-3.51,3.72l-8.78,6.51l-2.44,1.05l-2.87,0.71l-1.3,1.53l-1.0,0.41l-1.08,0.99l-0.49,0.98l-2.0,0.26l-8.54,5.47l-13.33,6.16l-1.44,1.49l-3.74,2.57l-4.97,2.14l-2.03,1.55l-1.77,2.44l-3.21,5.66l-1.86,2.59l-2.09,1.96l-4.54,2.5l-2.61,0.74l-4.53,0.47l-4.43,1.15l-1.94,1.0l-2.31,-0.08l-12.47,3.42l-5.68,0.43l-16.54,6.22l-4.61,1.01l-0.77,0.61l-1.42,2.78l-0.65,0.57l-1.95,-1.06l-3.06,0.05l-2.83,0.53l-2.68,1.22l-2.23,1.62l-7.46,7.41l-3.62,4.84l-5.95,5.77l-1.36,2.65l0.16,0.53l3.7,1.81l1.29,-0.17l0.37,-0.81l-0.2,-0.52l0.47,0.25l2.31,2.69l2.63,2.41l1.29,0.68l-0.06,0.65l-0.9,0.72l-0.61,1.15l-0.92,0.58l-4.34,1.32l-1.83,1.63l-1.0,1.29l-1.66,-0.87l-1.99,0.17l-5.63,1.85l-1.37,0.93l-1.14,1.24l-1.01,1.61l-1.86,4.58ZM660.17,284.18l-1.82,2.0l-1.59,1.15l-1.28,0.05l-0.64,-1.18l1.78,0.24l2.15,-0.99l1.4,-1.29Z",
        name: "Cataluña"
    },
    "ES-CM": {
        path: "M388.04,228.2l1.28,0.51l3.29,0.18l3.31,-0.63l0.78,-0.46l1.91,-0.05l2.18,-2.4l1.18,-0.61l7.54,1.77l2.35,-0.02l4.4,-0.56l1.52,-0.38l1.17,-0.72l0.98,-1.53l1.11,-0.43l0.67,0.05l0.98,0.51l0.27,0.47l0.78,2.66l1.39,1.02l2.73,0.75l1.79,-0.14l1.86,-1.09l1.26,0.08l1.12,1.63l0.87,0.53l2.86,0.65l0.96,0.47l0.81,0.98l0.67,0.36l1.68,-0.15l0.17,0.25l-0.35,0.71l-0.92,0.65l-0.26,0.54l0.12,0.43l1.86,1.48l-0.55,1.24l0.13,0.8l0.72,0.5l0.88,0.12l2.3,-0.98l0.36,0.24l1.1,2.39l1.61,1.0l0.86,2.32l0.54,0.66l2.64,1.36l1.22,0.03l2.78,-1.31l2.42,1.33l1.03,0.12l1.65,-0.33l1.93,-0.78l1.51,-1.11l3.88,-0.15l2.63,-2.37l2.72,1.97l1.16,1.32l0.99,0.24l0.57,-0.46l0.14,-0.48l-0.28,-2.26l0.58,-2.17l-0.02,-1.11l4.97,-1.59l1.52,0.41l1.9,1.85l1.69,0.72l2.65,2.07l2.23,1.25l3.21,2.74l2.27,3.39l3.54,3.1l1.54,1.83l2.21,1.99l0.69,1.48l-0.25,3.5l0.38,1.48l1.06,1.93l0.99,1.14l1.68,1.14l0.69,1.12l0.16,2.74l-1.07,2.76l-0.13,1.77l1.32,3.62l-0.02,1.74l-1.11,3.27l0.18,2.62l-0.21,0.37l-0.83,0.84l-1.48,0.66l-2.56,-1.23l-2.31,-0.45l-0.79,0.42l-1.52,4.01l-0.08,4.18l-0.74,0.91l-1.92,1.2l-2.71,4.01l-0.9,0.57l-0.81,1.1l0.16,0.6l1.84,0.82l3.74,4.76l0.31,1.07l-0.34,1.64l0.32,1.41l0.36,0.18l1.15,-0.56l0.77,0.1l1.54,0.83l7.89,7.4l0.9,0.21l1.34,-0.46l1.87,0.61l2.43,-0.07l0.06,1.53l-0.69,1.9l-0.18,1.94l0.79,0.93l1.77,1.24l2.27,7.08l0.69,0.67l5.67,0.96l1.74,0.68l1.17,0.09l5.05,-1.15l0.94,2.79l-3.18,1.72l-0.77,1.17l0.62,1.95l-0.39,4.59l-1.47,5.65l-2.76,4.61l-0.24,1.58l0.33,2.68l-0.24,0.48l-0.78,0.78l-1.01,0.38l-1.12,-0.03l-2.25,-1.05l-1.39,0.04l-1.87,1.31l-1.55,1.57l-2.77,5.26l-0.72,0.95l-1.32,0.99l-0.63,1.33l-0.1,0.87l0.3,0.83l-0.22,2.61l0.25,0.61l-0.5,0.74l0.04,1.02l-0.77,2.11l0.05,0.97l1.13,1.76l1.0,0.36l0.36,0.82l1.73,1.33l0.53,2.12l0.31,0.27l1.42,0.01l1.2,-0.32l1.28,0.44l3.7,2.31l1.31,0.08l8.58,2.77l0.35,0.97l-0.51,2.61l-0.01,3.13l-1.48,4.13l-1.67,2.04l-1.86,4.34l-0.5,2.08l0.43,2.32l6.96,8.54l2.13,1.45l5.76,-0.37l1.21,-0.28l1.77,-0.89l1.82,0.82l2.42,4.36l-0.34,2.55l0.89,2.95l-0.4,0.97l-0.1,1.23l-1.87,1.27l-0.33,1.47l0.78,2.74l2.53,3.58l-2.17,1.59l-1.07,0.4l-3.27,0.05l-0.84,0.26l-5.24,-4.28l-0.53,-2.13l-0.46,-0.64l-3.81,-1.33l-4.17,1.05l-1.35,0.91l-1.67,1.7l-3.55,2.02l-0.83,-0.2l-0.91,-1.02l-0.8,-0.08l-0.94,0.49l-3.34,3.66l-1.13,2.48l-0.26,3.16l-0.57,0.96l-1.42,1.21l-1.15,2.45l1.06,4.47l0.51,6.68l-0.18,1.18l-0.8,1.12l-4.71,3.88l-3.8,1.21l-1.6,-0.25l-1.38,-0.9l-0.38,-1.03l0.12,-1.79l-0.68,-0.91l-0.94,-0.35l-1.08,0.17l-1.12,-0.65l-1.03,-0.09l-1.27,0.49l-0.46,0.46l-1.25,0.34l-0.3,1.06l-3.34,2.02l-2.51,1.93l-2.54,1.22l-4.18,0.96l-1.9,-1.57l-1.73,0.05l-1.16,0.75l-1.7,2.04l-2.74,2.52l-2.8,0.94l-2.81,2.39l-2.61,5.09l-4.5,5.61l-1.28,3.48l-0.54,0.16l-7.39,-2.13l-4.93,-2.4l6.48,-8.62l0.2,-0.96l-0.38,-2.01l0.9,-1.4l0.3,-2.39l-0.68,-1.63l-2.08,-1.37l-0.35,-0.68l-0.73,-7.58l-0.28,-0.3l-4.41,-1.29l-0.58,-0.6l-0.34,-0.78l0.26,-2.32l-0.3,-1.75l0.2,-1.44l-0.38,-0.49l-1.68,-0.68l-3.09,0.04l-2.09,0.73l-2.67,-1.11l-2.44,-1.57l-0.5,0.05l-2.24,2.15l-3.58,2.0l-2.06,1.82l-1.39,-0.91l-1.41,-0.38l-1.94,0.15l-1.15,0.53l-1.85,1.5l-0.32,1.57l-3.05,-3.84l-0.8,-0.45l-0.82,0.05l-2.91,2.13l-1.3,0.33l-2.23,-0.68l-5.77,-0.48l-3.13,-1.27l-1.13,-0.07l-1.59,0.22l-1.19,0.59l-0.69,0.79l-0.49,1.84l-1.14,1.36l-1.45,0.91l-2.38,0.82l-1.77,-0.13l-2.09,-0.56l-0.54,-0.63l-0.58,-1.82l-0.61,-0.57l-0.75,-0.12l-0.84,0.09l-0.87,0.54l-0.87,3.07l-0.96,0.38l-5.45,-0.98l-1.73,-0.73l-1.59,0.31l-2.51,-0.75l-1.99,0.37l-1.13,0.71l-1.17,1.92l-1.16,0.49l-2.14,0.35l-18.62,-0.75l-2.52,-0.89l-2.81,-0.13l-0.82,0.26l-0.52,0.68l-0.26,3.49l-0.57,0.1l-7.47,-2.55l-2.87,-1.36l-0.61,-0.37l-1.87,-2.58l-1.86,-1.98l-1.75,-1.5l-1.95,-1.24l-1.56,-0.29l-0.91,-0.47l-1.51,-2.27l-2.33,-1.82l-2.3,-1.16l-0.74,-1.11l-0.93,-0.67l-2.82,-1.29l-2.97,-0.46l-2.17,-1.19l-0.97,-1.49l-0.25,-3.24l-0.44,-0.87l-0.84,-0.44l-4.06,0.13l-2.08,-0.85l-3.23,-2.45l2.01,-0.36l1.2,-1.27l2.29,-7.71l1.28,-2.51l0.87,-0.92l0.97,-0.42l2.4,0.17l0.81,-0.21l0.4,-0.63l0.61,-3.05l-0.25,-1.15l-0.51,-0.69l-1.92,-0.38l-2.96,-1.17l-0.41,-0.97l-0.2,-1.89l-0.89,-0.92l-0.61,-2.71l0.68,-0.39l0.48,0.1l3.55,1.62l1.31,-0.36l1.81,-1.15l0.26,-0.81l-0.17,-0.73l-2.03,-1.7l-0.19,-1.84l1.27,-4.84l2.49,-2.69l2.13,0.35l1.82,-0.33l1.01,0.17l3.8,1.89l0.86,0.04l0.37,-0.59l-0.84,-1.51l-2.92,-3.4l-1.26,-2.47l-1.39,-3.74l-0.03,-0.71l0.35,-0.49l1.87,-0.86l0.77,-1.0l0.97,-2.89l0.96,-1.83l0.25,-1.81l-0.98,-2.75l-0.7,-0.1l-0.66,0.9l-3.18,1.69l-0.99,1.19l-3.0,1.01l-4.22,2.08l-4.0,-2.02l-1.42,-1.19l-3.77,-4.47l-1.06,-1.7l-2.6,-1.24l-2.82,-2.89l-2.41,-3.13l-2.42,-2.0l-0.05,-0.64l2.67,-4.35l1.11,-5.4l-0.07,-0.8l-1.53,-2.27l0.37,-2.2l-0.6,-1.86l-0.84,-0.55l-2.47,0.42l-1.39,1.2l-1.54,2.08l-3.15,-0.38l-0.39,-0.85l0.42,-3.6l0.16,-0.97l1.22,-2.38l-0.04,-0.92l-1.15,-1.61l-1.24,-0.81l-2.51,0.02l-1.57,0.39l-0.19,-2.81l1.11,-6.37l0.25,-6.36l0.6,-2.73l1.87,-1.01l6.26,0.79l2.72,1.48l1.67,0.04l1.86,-0.6l3.37,-2.71l1.32,-1.48l2.3,-0.91l0.73,0.16l0.41,2.31l0.6,0.78l1.15,0.27l1.56,-0.35l1.03,-0.46l1.98,-1.56l1.28,-2.94l5.05,-3.78l0.86,-1.22l0.72,-2.76l4.36,-0.42l1.46,-0.46l0.58,0.24l0.74,4.55l1.01,1.14l2.21,0.86l1.05,-0.03l3.47,-1.19l1.45,0.93l2.02,0.16l0.77,-0.39l1.01,-1.15l3.82,-2.08l2.98,-3.5l1.6,-2.41l0.65,0.66l-0.1,2.4l0.71,1.89l3.26,2.69l0.87,-0.18l1.03,-0.87l1.52,-2.31l0.9,-0.82l1.59,-0.28l1.67,-1.01l0.36,0.02l2.79,2.74l2.53,0.54l2.1,-1.14l0.35,0.05l1.87,0.91l1.91,2.23l4.37,1.54l2.15,1.04l3.07,0.79l1.81,1.62l2.11,-0.11l1.44,1.82l0.91,0.53l1.02,0.26l1.6,-0.26l3.06,0.53l3.71,2.06l0.09,1.79l-1.39,3.14l-2.41,1.35l-3.05,3.26l-0.97,0.83l-1.64,0.68l-1.32,1.46l-4.87,1.37l-1.52,1.04l-0.1,0.47l0.39,0.74l3.09,2.18l1.06,0.16l0.96,-0.22l2.25,-1.77l1.94,-1.98l2.36,-0.59l1.94,-1.16l2.09,-0.76l0.35,-0.65l0.09,-1.38l2.26,-0.73l1.43,-1.02l3.23,-0.94l0.91,-1.53l0.7,-0.62l6.16,0.26l2.23,-0.95l1.05,0.83l1.1,0.19l3.61,-0.76l3.96,-2.11l2.47,-0.84l0.94,0.55l0.27,0.99l0.41,0.34l3.3,-0.16l1.54,-0.49l1.74,-1.65l0.48,-1.44l-1.55,-3.62l-0.04,-0.65l0.39,0.11l0.5,-0.46l-0.65,-3.41l-0.28,-3.71l-1.15,-2.68l-0.89,-0.68l-1.09,0.11l-1.71,1.26l-1.27,1.46l-0.43,-0.37l-0.15,-1.09l0.67,-4.06l1.6,-1.99l0.69,-2.2l0.31,-3.02l-0.27,-1.23l-1.09,-1.79l-2.52,-1.51l-0.22,-4.93l-0.36,-1.14l-3.01,-2.55l-0.91,-0.12l-1.86,0.76l0.4,-1.28l-0.35,-1.47l-1.59,-1.39l-0.56,-1.09l0.5,-4.06l-0.24,-0.45l-0.8,-0.15l-0.65,0.36l-0.91,-0.45l-2.49,-3.28l-0.83,0.23l-0.34,0.55l-1.76,0.16l-1.07,-0.97l0.01,-0.89l1.06,-1.86l-0.48,-3.5l-0.95,-1.6l-2.45,-1.05l1.19,-2.42l0.65,-3.42l1.47,-1.52l-0.23,-2.43l2.59,-7.18l0.17,-2.11l-1.77,-5.8l-3.26,-1.74l-1.29,-1.79l-2.4,-2.41l-0.16,-0.88l1.48,-0.19l5.05,-3.83l2.03,-0.63l0.56,-2.44l-0.07,-0.77l-0.55,-0.93Z",
        name: "Castilla-La Mancha"
    },
    "ES-CL": {
        path: "M162.52,126.18l1.16,-1.77l0.51,-3.06l-1.09,-2.34l-4.67,-1.31l-1.95,-1.19l-0.99,-0.0l-1.3,0.43l-1.35,1.12l-0.52,0.06l-2.78,-0.63l-2.48,-0.12l0.44,-1.29l0.1,-2.25l1.16,-2.7l-0.1,-3.5l0.23,-0.61l1.74,-1.61l-0.18,-1.3l-1.28,-1.95l-0.21,-1.06l0.4,-1.33l0.91,-1.17l1.95,-0.89l1.42,-1.45l1.52,0.08l0.99,-0.42l4.33,-5.28l0.72,-2.15l-0.55,-2.95l0.1,-0.93l1.1,-1.32l0.82,-2.04l1.86,0.3l1.01,0.52l0.63,1.0l0.49,0.11l1.1,-0.52l1.47,-1.58l1.73,-0.76l4.18,-0.24l1.8,0.69l3.15,0.26l4.13,-1.22l3.47,-1.93l0.45,-0.78l-0.04,-1.03l-2.11,-1.15l-0.17,-0.53l1.94,-0.23l1.93,-0.73l0.4,-0.52l0.12,-1.13l1.27,-2.15l1.6,-0.72l0.96,0.25l1.2,0.94l2.17,0.37l2.79,1.4l1.51,0.36l0.79,-0.26l0.38,-0.6l0.16,-1.11l0.9,-0.44l4.12,1.24l1.17,-0.1l1.45,-0.76l0.49,-0.76l0.42,-1.64l0.34,-0.15l4.04,0.68l1.88,-0.43l0.77,0.7l0.44,1.91l0.71,1.24l2.49,1.8l2.01,1.21l2.93,1.26l3.86,-0.04l0.93,-0.33l0.58,-0.63l1.03,-2.67l1.6,-2.62l1.42,-0.64l2.45,0.04l1.88,0.93l3.74,0.6l1.21,0.76l1.51,0.12l1.59,-0.65l1.74,0.03l0.6,-0.6l0.7,-1.43l3.41,-0.06l1.48,-0.45l0.72,-0.77l0.52,-1.96l0.39,-0.26l0.71,-0.14l3.57,0.54l6.3,-0.77l3.53,-1.75l1.72,0.54l0.96,-0.11l1.77,-1.97l0.88,-2.73l1.16,-1.71l3.56,-1.26l2.05,-1.15l1.08,-0.99l3.39,-1.85l1.09,-0.01l1.71,1.15l1.72,2.98l-0.27,4.73l0.61,2.7l1.16,1.27l2.68,1.46l0.79,1.46l1.25,1.23l0.73,2.76l0.38,0.31l1.39,0.02l1.14,-0.35l3.27,-0.02l2.52,-0.52l3.23,0.14l2.33,-1.26l1.86,-0.18l1.8,-0.99l1.64,0.23l2.04,1.23l1.97,3.6l1.02,0.77l6.8,2.54l0.77,0.55l0.16,2.97l0.81,5.05l0.65,1.44l1.46,0.37l1.76,-1.31l1.39,-0.4l0.7,0.54l0.08,0.45l-0.42,0.74l-2.33,0.68l-0.48,0.3l-0.36,0.72l0.24,0.92l1.79,1.69l3.24,0.73l1.48,1.9l0.44,0.19l2.82,-0.85l1.82,-4.06l0.54,-0.38l-0.03,4.25l0.29,0.44l2.48,0.66l3.27,-1.02l2.28,-2.12l3.45,-0.27l0.76,-0.49l0.44,-0.73l0.01,-1.31l-0.67,-1.5l-0.11,-2.25l-0.45,-0.93l-0.7,-0.36l-0.9,-0.03l-0.94,0.53l-1.33,1.7l-0.59,-0.22l-0.17,-0.4l-0.28,-1.56l0.61,-1.3l1.79,-0.17l1.99,-1.28l0.49,-0.81l-0.15,-0.97l-0.89,-1.27l-1.2,-0.7l-1.38,0.37l-1.46,2.17l-2.72,1.36l-1.04,-0.21l-1.06,-1.41l0.07,-1.12l2.0,-5.19l2.25,-1.44l1.39,-1.53l2.76,-1.35l0.9,-1.03l0.31,-2.39l1.25,-0.35l1.96,0.15l1.41,-0.49l3.0,-2.25l2.57,-3.21l2.11,-1.93l0.98,0.13l1.58,1.13l3.87,0.82l1.84,0.85l4.54,0.45l1.97,-0.18l4.05,-1.57l5.57,-3.57l1.41,-0.26l1.57,1.23l3.73,0.28l1.33,0.21l0.38,0.36l0.01,0.54l-1.12,0.94l-0.87,2.17l0.09,1.0l0.45,0.71l1.2,0.56l0.25,0.42l-0.43,4.66l-1.06,2.06l0.07,0.44l0.96,0.7l2.09,0.6l2.67,0.25l0.97,-0.5l1.15,-2.5l0.93,-0.45l0.28,0.11l0.31,1.37l0.63,0.66l1.15,0.38l0.46,0.74l-0.56,1.38l-2.43,0.19l-0.42,0.39l0.06,1.05l0.96,1.2l0.94,0.67l1.86,0.67l0.28,0.74l-0.46,0.8l-1.5,0.34l-1.23,1.09l-3.47,0.4l-3.48,-0.86l-0.64,-1.59l-1.16,-0.89l-1.63,-0.36l-2.36,0.27l-0.87,0.66l-2.48,3.4l-0.63,1.39l0.26,1.36l3.04,3.62l1.37,0.58l0.55,-0.45l0.09,-1.02l0.84,-1.31l0.95,-0.36l1.43,-0.01l1.05,-0.86l0.88,-1.29l0.48,0.07l0.05,1.3l-1.87,2.96l-0.69,1.69l0.27,1.45l1.17,1.45l-0.42,1.27l0.38,0.55l1.21,0.09l3.57,-1.42l1.89,1.01l1.86,1.75l2.26,1.39l1.61,2.03l1.77,0.86l4.25,3.57l0.8,1.37l-4.12,1.44l-2.69,-0.78l-4.32,-0.51l-2.91,0.32l-1.13,0.5l-0.4,1.16l0.72,1.04l0.21,0.99l-1.45,2.22l-2.06,2.4l0.01,0.99l0.56,0.5l1.71,-0.29l0.5,0.23l0.07,1.02l-0.81,2.82l0.33,0.82l1.22,1.04l0.67,1.58l-0.59,2.3l0.14,3.98l-0.96,1.71l-2.23,0.83l-0.32,0.77l0.67,1.23l0.08,2.1l0.67,3.3l-0.92,4.49l-1.13,1.3l-0.1,0.8l2.22,3.49l0.73,2.0l1.46,1.09l2.02,3.39l1.18,0.56l4.83,-0.12l0.96,2.06l0.48,2.94l0.28,0.32l2.59,0.77l2.36,-1.0l1.8,-1.12l0.83,-0.89l0.46,-1.05l0.06,-2.42l1.29,-2.29l0.63,-0.41l2.14,0.01l0.37,0.22l0.23,0.92l-0.19,1.71l-1.2,1.4l-0.89,2.53l-0.03,0.96l0.48,0.71l0.96,0.5l1.89,0.21l1.81,1.21l0.76,0.17l2.93,-0.24l3.11,0.19l0.36,-0.28l2.3,-4.52l1.44,-1.5l0.41,-3.53l1.67,0.19l2.94,-2.11l1.65,-0.55l4.07,-0.32l3.27,0.38l0.75,0.52l0.61,2.5l1.39,1.29l0.84,-0.03l3.64,-1.28l1.1,-0.12l2.07,0.32l0.54,0.35l0.2,0.75l-1.6,1.53l-0.13,1.56l0.65,1.41l1.6,1.36l0.6,1.04l0.13,0.43l-0.65,0.73l-0.21,0.87l0.44,1.97l0.53,0.8l0.77,0.43l4.75,1.02l1.54,0.65l1.44,1.19l0.82,0.2l3.11,-0.68l3.77,-2.3l0.37,3.8l0.97,2.84l1.36,1.98l-0.34,1.84l-1.37,2.46l-0.24,1.1l1.81,2.98l0.72,1.85l1.41,1.48l-0.14,0.98l-1.71,3.69l-2.46,0.76l-1.38,1.4l-1.34,0.74l-1.84,2.23l-2.61,-0.53l-0.85,0.38l-1.0,1.07l-0.13,1.42l0.56,1.06l0.37,2.31l-0.18,3.04l0.23,1.54l1.28,2.24l0.62,4.19l-2.01,0.74l-2.26,1.48l-0.77,0.18l-0.39,-0.5l0.09,-2.01l-0.53,-1.39l-1.73,-0.83l-2.32,-0.26l-0.74,0.42l-0.54,0.8l-0.77,4.78l-0.71,1.09l-1.27,0.82l-0.55,0.85l-0.38,1.68l-0.1,2.91l0.94,2.32l0.69,6.67l0.95,1.32l3.52,0.81l1.83,1.69l0.03,1.11l-0.6,2.31l0.22,2.38l-0.33,-0.03l-1.15,-1.31l-2.46,-1.9l-0.72,-0.28l-0.93,0.44l-2.06,2.0l-3.78,0.11l-1.71,1.19l-1.71,0.69l-2.3,0.2l-1.71,-1.11l-1.04,-0.23l-2.91,1.35l-0.69,-0.03l-1.7,-0.76l-1.03,-0.87l-0.9,-2.39l-1.66,-1.06l-1.2,-2.49l-0.97,-0.45l-2.24,0.99l-0.88,-0.23l0.48,-1.1l-0.0,-0.81l-0.5,-0.77l-1.37,-0.84l0.85,-0.6l0.46,-0.75l0.12,-0.85l-0.39,-0.57l-0.82,-0.22l-1.22,0.19l-1.14,-1.15l-1.19,-0.62l-2.81,-0.63l-0.61,-0.33l-1.46,-1.87l-1.64,-0.11l-2.04,1.14l-1.47,0.09l-2.41,-0.67l-1.1,-0.79l-1.05,-3.13l-1.47,-0.8l-0.97,-0.05l-1.4,0.54l-1.08,1.6l-0.89,0.57l-1.38,0.35l-6.58,0.56l-7.54,-1.78l-1.79,0.85l-1.82,2.18l-1.84,0.05l-0.88,0.49l-3.09,0.6l-3.18,-0.17l-1.73,-0.72l-0.47,0.13l-0.22,0.68l0.83,1.42l-0.26,2.29l-1.93,0.58l-5.06,3.85l-1.62,0.01l-3.06,0.67l-2.21,1.34l-4.08,4.82l-3.88,2.93l-2.9,4.79l-1.09,0.74l-5.65,1.95l-0.85,0.67l-2.17,2.84l-0.93,1.68l-0.35,1.27l0.2,1.87l-0.88,2.1l-0.34,2.63l-0.98,2.46l-1.98,0.64l-2.86,-0.37l-2.08,1.37l-4.81,7.31l-0.46,1.71l-0.34,3.76l-1.16,0.69l-2.97,0.88l-1.28,-0.59l-0.87,-1.44l-1.09,0.13l-0.35,0.67l0.42,2.65l-0.28,1.45l-1.45,1.53l-0.57,1.1l0.02,5.33l0.23,1.15l-0.87,3.08l0.28,1.51l-2.92,0.6l-1.85,-0.4l-1.32,0.69l-0.98,1.39l-0.56,3.3l-1.06,1.94l-0.67,0.45l-1.54,0.27l-1.69,-1.85l-1.02,0.08l-0.47,0.64l-0.03,0.78l0.45,2.95l-1.18,2.25l-0.57,2.96l-0.8,1.31l-1.87,0.78l-2.26,0.42l-2.36,-1.1l-0.43,-0.93l-0.59,-4.04l-0.66,-0.71l-5.31,0.89l-1.34,-0.03l-0.76,0.69l-0.57,2.64l-0.71,0.95l-5.02,3.75l-1.3,2.96l-1.8,1.4l-2.23,0.69l-0.72,-0.2l-0.75,-2.88l-0.72,-0.46l-0.83,0.05l-2.6,1.05l-1.37,1.52l-3.31,2.65l-1.52,0.46l-1.39,-0.05l-2.71,-1.47l-6.25,-0.79l-2.06,-3.94l-0.15,-4.38l0.91,-2.48l0.02,-0.48l-0.42,-0.64l-1.63,-0.05l-3.33,0.98l-3.72,3.41l-1.3,0.44l-2.47,0.08l-2.4,-0.85l-1.61,-0.94l-1.54,-2.12l-4.07,-3.32l-2.69,-1.08l-2.49,0.79l-1.18,-0.13l-0.28,-0.42l0.69,-1.6l-0.07,-0.94l-0.94,-1.7l-0.87,-0.26l-4.94,1.89l-0.6,0.53l-0.94,2.32l-0.81,0.63l-0.69,-0.05l-3.96,-1.82l-2.35,-2.13l-4.46,-2.15l1.56,-3.23l-0.05,-0.81l-0.52,-0.5l-2.09,-0.89l-0.38,-0.35l-0.14,-0.97l-0.29,-0.32l-1.74,-0.58l-1.73,-1.69l-2.26,-1.47l-1.4,-0.3l-0.99,0.13l-3.63,2.38l-2.08,0.5l-1.82,1.42l-0.89,1.75l-0.49,0.33l-2.65,0.7l-2.02,1.89l-4.85,2.06l-2.07,1.63l-0.83,1.15l0.26,2.53l-0.98,1.22l-5.49,1.23l-2.13,1.02l-1.91,-0.78l-0.71,0.12l-2.03,1.09l-1.7,-0.32l-1.85,0.37l-1.73,-0.88l-1.89,-1.94l0.22,-1.03l3.78,-3.11l1.22,-2.17l-0.08,-0.48l-2.18,-2.06l-1.46,-2.39l-0.36,-2.64l1.16,-2.9l1.52,-2.16l0.25,-1.21l-0.42,-1.77l-1.95,-2.78l-0.13,-1.34l2.38,-5.68l-0.14,-2.68l-1.5,-6.94l0.37,-3.44l-0.29,-1.56l0.08,-1.89l1.08,-0.55l0.27,-1.3l-0.48,-1.37l-1.7,-0.8l-0.42,-0.56l-1.99,-5.41l-0.98,-1.63l-2.63,-3.07l-0.11,-0.87l0.69,-1.18l0.23,-1.44l1.1,-0.57l3.94,0.36l2.12,-0.31l0.95,-0.96l2.66,-3.99l0.55,-1.59l-0.13,-2.23l0.19,-0.48l3.19,-3.13l0.87,-2.03l2.96,-4.22l5.28,-0.24l4.62,-2.16l2.28,-1.77l2.12,-2.19l2.04,-3.32l0.95,0.13l0.52,-0.34l0.22,-1.84l1.26,-0.68l2.0,-0.15l0.37,-0.39l0.01,-0.64l2.45,-3.96l-0.13,-2.0l0.35,-0.74l1.7,-1.81l3.15,-4.65l-0.01,-0.47l-1.58,-2.16l-2.82,-2.98l-3.11,-2.03l-3.28,-1.21l-5.42,-1.12l-1.18,0.07l-1.74,1.52l-1.45,0.62l-1.61,-0.61l-0.79,-1.24l-0.52,-3.36l-0.9,-2.18l1.1,-2.31l1.61,-7.23l0.74,-1.63l-0.24,-0.54l-2.8,-0.75l-0.31,-0.37l0.51,-3.78l-0.35,-1.66l-1.04,-1.18l-1.6,-0.68l-0.52,0.2l-0.81,1.73l-2.02,0.63l-4.58,0.2l-1.76,-0.54l-2.33,-3.61l-2.29,-0.53l-0.46,0.33l-0.39,2.46l-1.32,0.83l-3.95,0.33l-1.7,-0.35l-2.26,-1.59l-0.22,-1.97l1.37,-3.42l-0.04,-0.71l-0.82,-1.4l-0.58,-0.41l-1.51,-0.05l-0.74,-0.36l-0.41,-0.72l0.17,-0.5l0.87,-0.89l1.57,-2.48l2.06,-1.61l1.04,-3.02l2.7,-2.99l1.98,-1.42l1.35,-0.32l2.65,0.24l0.64,-2.01l1.95,-2.11l1.69,-2.69l0.42,-1.23l0.17,-3.23l-0.4,-1.17l-1.07,-1.18l-2.2,-1.44l-2.81,-2.38ZM438.75,93.85l2.44,-0.16l1.46,1.35l1.25,0.18l-1.12,2.72l-1.61,0.88l-0.13,1.15l1.89,2.42l0.65,0.43l1.13,-0.12l1.44,-1.18l0.53,1.78l0.02,1.12l-1.08,0.39l-0.41,-0.53l-0.94,-0.34l-5.01,-0.12l-3.31,-1.38l-4.45,-1.03l-3.99,-1.86l-1.7,-1.29l-1.79,-2.16l2.36,-3.54l0.82,-0.45l4.13,-0.26l1.7,0.17l5.71,1.86Z",
        name: "Castilla y León"
    },
    "ES-MD": {
        path: "M311.9,319.04l0.76,-1.29l0.55,-2.88l1.21,-2.32l0.12,-0.77l-0.52,-3.01l0.31,-0.18l1.05,1.37l0.81,0.53l2.15,-0.36l0.89,-0.65l1.16,-2.11l0.61,-3.44l0.73,-0.98l0.9,-0.49l1.75,0.41l2.63,-0.41l1.03,-0.67l-0.24,-1.73l0.87,-3.12l-0.24,-6.45l1.99,-2.51l0.32,-1.67l-0.41,-1.95l0.12,-0.8l1.23,1.64l1.33,0.46l3.35,-0.92l1.5,-0.91l0.95,-5.74l4.63,-7.03l1.78,-1.17l2.7,0.4l1.94,-0.47l0.64,-0.6l1.04,-2.63l0.32,-2.57l0.9,-2.19l-0.18,-1.96l0.3,-1.06l2.94,-4.26l0.59,-0.48l6.36,-2.36l0.69,-0.57l2.86,-4.74l3.83,-2.88l3.99,-4.75l1.99,-1.23l2.59,-0.57l0.31,1.34l2.46,2.46l1.34,1.84l3.09,1.55l1.7,5.49l-0.15,1.81l-2.61,7.26l0.28,2.26l-1.45,1.48l-0.69,3.5l-1.23,2.47l0.35,0.96l2.36,0.9l0.74,1.28l0.43,3.13l-1.01,1.66l-0.22,1.06l0.75,1.15l1.06,0.73l2.08,-0.13l0.86,-0.79l2.2,3.12l1.36,0.62l0.84,-0.32l-0.41,4.03l0.71,1.38l1.49,1.23l0.28,1.08l-0.44,1.16l0.15,0.57l0.33,0.34l0.75,0.08l1.67,-0.8l0.43,0.08l2.68,2.31l0.32,2.75l-0.09,2.43l0.28,0.77l2.66,1.68l0.93,1.57l0.19,0.83l-0.3,1.25l0.08,1.27l-0.7,2.36l-1.66,2.13l-0.66,3.37l0.14,2.22l0.56,0.81l0.83,0.13l3.2,-2.82l0.37,-0.06l0.55,0.38l1.28,3.44l0.03,2.61l0.54,2.86l-0.59,0.24l-0.24,0.57l0.51,2.15l1.11,2.12l-0.34,0.98l-1.52,1.42l-1.17,0.36l-2.9,0.14l-0.52,-1.15l-1.51,-0.72l-2.73,0.93l-3.94,2.1l-3.44,0.71l-2.1,-1.05l-2.19,0.98l-6.23,-0.26l-1.16,0.87l-0.76,1.4l-3.1,0.88l-1.51,1.06l-2.24,0.71l-0.57,0.76l-0.01,1.35l-1.86,0.64l-1.91,1.15l-2.49,0.65l-2.04,2.05l-2.08,1.65l-0.59,0.16l-0.89,-0.14l-1.98,-1.27l-0.85,-0.94l1.05,-0.69l5.0,-1.43l1.42,-1.54l1.58,-0.63l1.06,-0.9l3.06,-3.27l2.45,-1.38l0.96,-1.63l0.71,-2.33l-0.05,-1.55l-1.02,-1.11l-3.45,-1.71l-3.15,-0.54l-1.7,0.26l-0.68,-0.19l-0.7,-0.41l-1.65,-1.95l-0.74,-0.16l-1.47,0.23l-1.75,-1.6l-3.11,-0.8l-2.12,-1.03l-4.25,-1.48l-1.76,-2.13l-2.15,-1.08l-0.99,-0.02l-1.88,1.08l-2.03,-0.48l-2.97,-2.8l-0.85,0.02l-1.57,0.98l-1.77,0.35l-1.16,1.06l-1.03,1.76l-1.46,1.28l-0.83,-0.93l-1.1,-0.49l-0.9,-0.88l-0.62,-1.59l0.04,-2.62l-0.36,-0.63l-0.92,-0.53l-0.8,0.29l-1.54,2.43l-2.0,2.08l-0.93,1.37l-0.85,0.6l-2.84,1.38l-1.49,1.42l-1.62,-0.14l-1.1,-0.73Z",
        name: "Comunidad de Madrid"
    },
    "ES-MC": {
        path: "M493.61,553.66l-1.62,-1.21l-10.65,-16.46l-0.22,-4.04l0.61,-2.66l-0.5,-4.32l0.57,-1.79l0.15,-2.54l0.96,-1.47l-0.03,-1.01l-0.68,-0.51l-6.15,-0.85l-3.19,-1.47l-3.08,0.16l-3.83,-2.41l-1.87,-2.2l-2.35,-3.99l-2.59,-2.03l0.84,-2.69l4.82,-6.13l2.54,-4.99l2.6,-2.23l2.93,-1.02l2.79,-2.57l1.71,-2.05l0.95,-0.6l0.99,-0.05l2.15,1.65l4.55,-0.99l2.72,-1.3l2.53,-1.94l3.43,-2.08l0.39,-1.05l0.94,-0.21l1.51,-0.9l0.71,0.06l1.12,0.66l1.77,0.04l0.45,0.8l-0.22,1.24l0.28,1.13l1.04,1.11l1.52,0.67l1.54,0.08l4.05,-1.32l4.79,-3.94l1.04,-1.5l0.21,-1.4l-0.51,-6.74l-1.07,-4.25l1.03,-2.15l1.37,-1.14l0.7,-1.19l0.29,-3.27l1.06,-2.28l1.98,-2.4l1.83,-1.35l1.45,1.27l0.96,0.05l3.88,-2.15l2.91,-2.55l3.77,-0.98l2.85,0.87l0.71,0.54l0.7,2.42l5.4,4.41l1.06,5.24l-0.01,2.07l-0.86,3.61l-0.02,2.54l-0.66,1.0l-3.0,3.0l-0.5,1.11l-0.16,1.35l0.04,3.51l0.5,2.17l0.79,0.46l3.68,1.02l1.0,0.73l0.67,1.08l0.92,3.26l-1.09,6.17l-2.79,5.07l-0.32,1.66l0.47,3.24l2.92,4.5l3.92,7.15l2.3,2.83l3.4,3.43l1.76,0.67l1.75,1.36l1.49,-0.05l0.22,2.88l-1.36,-1.68l-0.69,0.11l-1.58,4.3l-0.72,0.61l-1.64,0.63l-0.58,1.37l0.24,1.56l2.99,5.02l3.81,2.19l1.31,0.16l0.75,-0.86l0.76,0.44l0.34,0.73l-0.2,0.72l-1.82,1.5l-1.28,-0.35l-5.29,2.26l-3.3,0.19l-2.44,1.43l-3.13,-1.61l-2.23,-0.43l-4.2,-0.1l-2.35,0.54l-0.87,0.72l-0.46,0.95l0.17,1.04l-3.32,-0.99l-1.14,-0.97l-2.52,-0.73l-0.88,-0.01l-3.61,0.99l-3.07,0.3l-2.32,1.18l-2.96,2.91l-1.0,0.65l-1.68,0.46l-1.12,0.94l-0.5,0.98l-0.76,3.17l-0.27,0.22l-0.62,-0.36l-0.72,0.02l-1.88,1.5l-4.9,1.87l-1.33,0.92l-5.48,-4.26l-4.2,-1.04l-0.54,0.17l-0.47,0.84ZM563.77,527.63l0.41,0.74l-0.34,1.05l0.02,-0.95l-0.09,-0.83ZM564.04,533.2l0.1,0.35l-0.07,-0.08l-0.03,-0.27Z",
        name: "Región de Murcia"
    },
    "ES-AN": {
        path: "M116.64,543.93l-0.02,-0.49l0.9,-1.18l0.18,-1.61l2.73,-3.01l0.93,-5.28l0.87,-2.42l1.1,-1.62l6.02,-5.08l1.91,-3.36l2.56,-8.33l-0.25,-2.27l2.96,-1.14l2.35,0.41l1.95,-0.74l1.28,-1.33l1.07,-2.2l0.88,0.09l3.68,1.52l1.87,-0.17l0.34,-0.29l0.53,-1.98l0.64,-1.11l0.56,-2.49l1.21,-2.5l1.43,-4.11l0.62,-2.52l0.68,-0.56l8.6,2.93l0.24,0.84l-1.36,3.32l0.21,0.68l0.71,0.56l3.71,1.33l3.12,0.06l1.61,-0.25l2.08,0.18l1.66,0.54l2.02,2.35l0.42,2.3l0.74,0.67l3.1,0.21l1.58,0.52l1.13,-0.1l2.58,-3.06l1.3,-0.33l3.18,2.03l1.26,2.72l1.65,0.45l8.52,3.53l1.07,1.03l0.56,-0.01l2.86,-2.4l1.56,-0.82l9.06,-1.67l1.71,-0.84l0.89,-1.05l0.66,-1.94l1.34,-2.14l0.01,-0.84l-0.78,-1.58l0.43,-1.49l0.87,-1.01l2.26,-1.49l1.88,-2.39l1.87,-0.7l4.3,-0.59l0.69,0.13l0.8,0.62l1.3,1.83l-2.28,1.43l-0.49,0.64l-0.04,0.6l0.53,2.58l0.63,0.56l0.74,0.13l1.45,-0.29l4.5,-3.74l2.94,0.06l2.83,-2.29l0.47,-0.76l0.22,-2.17l0.68,-1.23l0.13,-2.49l-0.36,-2.88l-1.62,-3.88l-1.28,-1.61l0.47,-2.92l-0.3,-0.99l-0.75,-0.99l0.4,-2.31l1.18,-1.15l4.05,-2.02l1.59,-2.11l3.01,-2.29l0.58,-0.84l0.7,-1.98l1.3,-1.83l1.05,-0.96l3.61,-0.13l1.4,-2.39l2.08,-1.8l2.95,-2.03l2.08,-0.72l0.96,-2.44l-0.28,-1.54l0.5,-0.24l5.16,-0.12l1.17,-0.52l1.57,-0.22l3.65,2.78l2.28,0.95l4.19,-0.1l0.42,0.26l0.45,3.74l1.24,1.88l2.41,1.31l2.21,0.23l3.4,1.43l0.79,0.56l0.79,1.16l2.38,1.21l2.24,1.75l1.52,2.28l1.23,0.64l1.45,0.26l1.78,1.14l1.66,1.42l1.82,1.94l1.91,2.62l0.77,0.5l2.99,1.42l7.71,2.6l1.08,-0.17l0.33,-0.39l0.04,-3.05l0.47,-0.84l0.41,-0.08l2.53,0.12l2.58,0.91l18.81,0.75l2.23,-0.37l1.43,-0.59l1.22,-1.98l0.91,-0.59l1.76,-0.32l2.33,0.75l1.58,-0.32l1.72,0.73l4.72,1.0l1.04,-0.02l1.46,-0.71l0.76,-2.94l1.19,-0.42l0.7,0.36l0.76,2.2l0.62,0.47l2.34,0.64l2.02,0.13l2.61,-0.88l1.58,-0.99l1.4,-1.67l0.24,-1.27l0.64,-1.01l0.93,-0.48l1.41,-0.2l0.92,0.04l3.15,1.27l5.86,0.49l2.32,0.69l1.71,-0.44l1.06,-0.97l2.14,-1.1l2.29,2.93l1.55,1.44l0.5,-0.05l0.35,-0.43l0.28,-1.53l1.55,-1.23l0.95,-0.45l1.65,-0.14l3.14,1.28l2.29,-1.95l3.6,-2.02l2.09,-2.0l2.27,1.45l2.86,1.18l3.39,-0.86l1.72,0.07l1.49,0.6l-0.21,1.28l0.3,1.75l-0.26,2.29l0.23,0.84l1.17,1.27l4.29,1.26l0.72,7.49l0.57,0.99l1.97,1.25l0.52,1.2l-0.26,2.09l-0.94,1.53l0.29,2.67l-6.72,8.95l0.15,0.59l5.44,2.64l6.9,2.1l1.53,-0.12l2.55,1.98l2.28,3.91l1.96,2.31l4.08,2.58l3.22,-0.12l3.2,1.47l6.33,1.05l-1.04,1.83l-0.16,2.6l-0.58,1.83l0.49,4.43l-0.61,2.6l0.01,3.41l0.28,1.01l10.72,16.58l0.84,0.85l1.53,0.76l0.48,-0.22l0.49,-0.86l3.78,0.96l5.15,4.01l-2.19,1.85l-1.29,3.21l-1.91,2.77l-3.85,3.89l-1.78,2.49l-1.16,3.37l-1.65,7.45l-1.93,4.97l-1.43,2.47l0.4,3.69l-0.54,0.39l-1.96,0.33l-3.27,2.53l-1.01,1.29l-0.66,3.31l-2.81,2.84l-0.95,2.86l-1.8,0.74l-0.85,1.69l-0.9,0.7l-2.37,0.67l-2.29,-0.73l-5.23,-6.0l-2.41,-1.5l-2.95,-0.76l-1.36,0.25l-2.2,1.15l-1.19,0.27l-3.27,-1.11l-5.76,0.97l-1.2,0.74l-1.7,2.66l-1.36,3.68l-2.63,2.64l-1.57,0.68l-1.68,0.3l-1.38,-0.4l-1.18,0.5l-3.7,-2.19l-0.87,0.16l-1.05,0.9l-0.47,-0.27l-1.76,-2.35l-1.73,-0.98l-1.37,-0.11l-2.44,0.36l-16.91,-1.12l-6.78,0.82l-3.39,2.6l-2.73,1.03l-2.3,-0.06l-9.7,-2.82l-1.44,-1.04l-4.47,1.16l-2.79,0.22l-5.01,-1.6l-2.94,-0.31l-6.69,1.83l-6.41,-0.77l-1.71,0.15l-7.69,2.54l-1.75,0.24l-11.87,-0.93l-1.28,0.42l-0.94,0.86l-2.2,3.88l-1.61,2.2l-0.7,1.96l-7.88,4.98l-1.39,2.8l-0.95,0.72l-4.06,1.15l-2.65,-0.07l-8.18,-1.53l-1.67,-0.05l-6.06,3.29l-4.46,1.16l-3.13,1.93l-3.18,0.57l-1.99,0.91l-2.79,4.47l-1.29,1.36l-1.66,4.12l-1.2,1.06l-1.04,0.4l-0.25,0.42l0.38,1.82l-2.91,4.49l-0.33,0.95l-0.29,3.5l-0.7,0.0l-0.53,-1.29l-1.14,-0.8l-1.55,-0.56l-1.4,-0.07l-1.22,1.78l-0.29,1.04l0.04,1.29l0.39,1.01l-0.28,0.72l0.72,2.16l-0.17,0.72l-1.04,1.4l-7.59,2.32l-1.56,0.71l-2.23,-1.87l-3.94,-2.49l-1.82,0.48l-2.55,-1.23l-2.7,-0.79l-0.9,-0.83l-1.44,-2.11l-4.3,-4.21l-1.33,-0.88l-1.73,-0.04l-2.83,0.54l-2.5,-0.94l-1.61,-2.13l-2.79,-5.19l-3.22,-2.47l-1.01,-3.94l-3.62,-7.62l-1.81,-2.51l-1.47,-2.84l-1.71,-1.55l0.52,-0.03l1.99,1.83l0.4,0.52l-0.21,0.86l1.53,1.99l0.39,0.13l0.82,-0.19l0.74,-0.63l2.09,-2.67l-0.26,-0.66l-1.9,0.37l-0.84,-0.12l-0.4,-0.94l0.38,-2.6l-0.58,-1.57l-2.83,-2.66l-0.86,-0.41l-5.49,-0.57l-0.84,-0.88l-0.8,-3.23l-1.62,-3.11l-0.38,-1.39l0.26,-1.28l1.12,-1.22l3.56,-1.44l1.11,-0.99l0.71,-2.12l-0.55,-3.37l0.33,-1.75l2.0,-1.74l5.53,0.24l1.88,-2.46l-0.03,-0.52l-0.52,-0.06l-2.82,1.48l-1.45,0.03l-1.51,-1.04l-2.8,1.09l-1.33,1.0l-0.67,2.08l0.37,4.89l-0.25,0.59l-1.88,0.03l-1.71,-2.23l-2.12,-5.43l-1.51,-2.65l-1.93,-2.06l-16.24,-11.76l-1.8,-0.98l-2.63,-0.89l-2.68,-2.23l-2.61,-1.28l-1.09,-1.7l-0.4,-1.96l3.47,-5.04l0.75,-1.47l-0.13,-0.51l-0.52,0.07l-3.32,3.75l-1.69,1.2l-1.95,0.01l-0.4,0.4l0.06,0.73l1.43,2.21l0.72,1.8l-0.36,0.04l-5.68,-2.8l-2.18,-0.72l-5.3,-0.53l-0.42,0.29l0.2,0.47l0.88,0.45l-13.06,0.33l-1.26,0.54l-1.21,1.12l-0.99,0.12l-1.9,-0.92l-1.27,-5.23l0.42,-1.39l-0.65,-2.69l-0.49,-6.56l-1.13,-2.61l0.13,-0.92l-0.6,-3.93l-0.52,-1.67l-2.56,-2.85l-0.53,-2.14l-0.35,-0.25Z",
        name: "Andalucía"
    },
    "ES-EX": {
        path: "M115.01,365.36l13.6,0.65l3.27,-0.98l2.58,0.08l1.09,-0.32l1.47,0.85l2.05,0.09l9.78,-1.21l1.07,-0.44l0.98,-2.05l-0.22,-2.09l1.33,-2.99l-0.45,-2.49l0.79,-1.31l2.26,-1.13l1.72,-2.61l0.4,-3.12l-0.23,-1.71l1.03,-1.23l0.63,-2.84l-0.09,-1.02l1.39,-3.05l-2.66,-4.8l-2.44,-3.38l-1.54,-0.99l-2.43,-0.45l-0.65,-0.98l-0.46,-2.86l-0.49,-1.18l1.61,-3.51l3.92,-2.34l3.92,-0.24l1.22,-0.84l0.35,-0.75l2.07,2.06l1.56,0.59l1.9,-0.36l1.98,0.28l2.44,-1.16l1.13,0.63l1.03,0.11l2.16,-1.04l4.66,-0.88l1.01,-0.44l1.05,-0.98l0.31,-1.43l-0.34,-1.7l0.62,-0.87l2.01,-1.58l4.74,-1.99l1.99,-1.88l2.71,-0.72l0.76,-0.57l0.84,-1.7l1.56,-1.23l2.86,-0.85l2.83,-2.01l1.7,0.15l2.15,1.39l1.79,1.73l1.72,0.62l0.22,1.06l0.53,0.5l2.42,1.19l-1.13,2.74l-0.49,0.47l-0.11,0.54l0.36,0.48l4.58,2.22l2.38,2.15l4.13,1.9l0.98,0.09l0.9,-0.43l0.54,-0.59l0.93,-2.31l0.35,-0.29l4.48,-1.76l0.35,0.06l0.72,1.31l-0.07,1.09l-0.59,1.3l0.65,1.04l1.81,0.23l2.15,-0.78l2.51,1.0l3.84,3.16l1.63,2.2l1.79,1.04l2.5,0.89l2.73,-0.06l1.11,-0.29l0.66,-0.33l3.51,-3.28l4.19,-0.99l-0.83,2.81l0.15,4.6l2.04,4.03l-1.72,0.87l-0.54,1.19l-0.36,2.19l-0.24,6.31l-1.11,6.38l0.02,2.38l0.31,1.18l0.54,0.27l1.78,-0.5l2.2,-0.04l0.87,0.59l0.99,1.36l-0.15,0.86l-1.07,1.95l-0.61,4.75l0.25,0.9l0.65,0.69l3.37,0.5l0.88,-0.52l1.33,-1.9l1.26,-1.08l1.55,-0.31l0.6,0.22l0.51,1.59l-0.38,2.2l1.55,2.3l0.06,0.53l-1.08,5.26l-2.6,4.18l-0.19,0.66l0.22,0.75l2.52,2.16l2.42,3.14l2.85,2.92l2.65,1.28l3.62,4.87l2.68,2.52l4.7,2.18l4.32,-2.15l3.11,-1.06l1.01,-1.2l3.19,-1.69l0.4,-0.48l0.69,1.95l-0.2,1.33l-0.96,1.86l-0.96,2.86l-1.08,1.06l-1.43,0.57l-0.56,0.94l0.04,0.88l1.45,3.98l1.27,2.51l3.43,4.31l-3.78,-1.88l-1.31,-0.19l-1.7,0.33l-1.77,-0.36l-0.78,0.12l-2.76,2.96l-1.37,5.14l0.23,2.27l2.02,1.68l-0.02,0.83l-2.45,1.14l-3.95,-1.72l-0.77,0.19l-0.66,0.54l-0.1,0.88l0.62,2.55l0.89,0.98l0.18,1.73l0.54,1.26l0.69,0.57l2.73,0.92l1.6,0.23l0.48,1.1l-0.75,3.17l-2.87,-0.12l-1.21,0.53l-1.1,1.16l-1.36,2.68l-1.6,5.96l-1.16,2.35l-4.59,1.08l-1.1,0.5l-5.16,0.12l-0.89,0.39l-0.37,0.7l0.35,1.37l-0.73,1.99l-1.91,0.61l-3.05,2.11l-2.2,1.91l-0.83,1.15l-0.35,1.04l-2.53,-0.12l-1.13,0.29l-1.2,1.09l-1.35,1.89l-1.24,2.76l-2.98,2.26l-1.46,1.99l-4.03,2.01l-1.44,1.4l-0.55,2.48l1.08,2.24l-0.47,3.02l1.36,1.86l1.58,3.8l0.31,2.67l-0.11,2.21l-0.67,1.22l-0.46,2.57l-2.66,2.16l-2.89,-0.08l-4.57,3.78l-0.98,0.19l-0.77,-0.35l-0.37,-2.51l2.33,-1.41l0.47,-0.89l-0.45,-1.1l-1.15,-1.31l-0.91,-0.7l-1.15,-0.24l-4.41,0.6l-2.06,0.76l-0.78,0.6l-1.34,1.96l-2.21,1.43l-1.06,1.26l-0.53,1.96l0.78,2.13l-1.28,1.96l-0.66,1.94l-0.65,0.76l-1.42,0.7l-9.18,1.71l-1.69,0.9l-2.69,2.21l-0.96,-0.89l-10.15,-3.99l-1.13,-2.6l-3.49,-2.2l-0.93,-0.04l-1.13,0.55l-2.28,2.88l-5.36,-0.64l-0.69,-2.61l-1.25,-1.73l-0.99,-0.85l-1.96,-0.67l-2.23,-0.2l-1.65,0.26l-3.03,-0.06l-3.4,-1.23l-0.49,-0.52l1.34,-3.13l0.0,-0.74l-0.39,-0.82l-9.19,-3.24l-1.25,0.79l-0.95,-0.57l-3.94,0.57l-0.45,0.15l-0.75,1.04l-1.47,0.67l-2.38,0.32l-1.36,-1.29l-2.71,-6.86l-1.9,-1.65l-1.0,-2.14l-6.98,-9.01l-2.43,-1.7l1.33,-1.8l0.0,-1.23l-0.61,-0.89l0.55,-0.87l1.18,-4.18l2.72,-3.96l0.41,-1.28l-0.2,-0.89l-1.15,-1.1l-0.11,-1.38l0.57,-4.73l0.85,-1.91l3.76,-3.09l1.04,-0.44l1.1,-0.92l1.82,-2.34l3.04,-0.68l1.19,-0.61l2.07,-1.78l0.43,-2.77l-0.79,-1.67l1.24,-1.05l1.47,-2.05l3.3,-6.32l-0.11,-0.77l-0.69,-0.69l0.38,-1.41l-0.42,-1.66l-0.97,-1.63l-1.12,-1.11l-1.57,-1.09l-1.84,-0.53l-1.89,0.19l-2.37,1.25l-1.69,-0.59l-0.54,-0.54l-0.06,-0.47l0.85,-2.52l-0.84,-1.87l-5.1,-2.25l-0.83,-1.2l-0.47,-1.58l0.09,-1.62l0.84,-1.48l-0.04,-0.45l-3.28,-4.03l-1.23,-1.0l-0.43,-0.87l-0.33,-3.53l0.85,-2.42l0.35,-2.02l-0.04,-2.02l-0.73,-1.05l-2.74,-0.73l-1.33,-0.64l-0.88,-0.72l-0.59,-1.77l-0.63,-0.85l-2.31,-1.25l-1.04,-1.0l-1.94,-2.6l-1.17,-1.08l-2.46,-6.71Z",
        name: "Extremadura"
    },
    "ES-VC": {
        path: "M549.58,507.02l-1.08,-2.21l-2.49,-3.52l-0.66,-2.24l-0.13,-1.58l0.62,-2.31l1.9,-2.87l0.56,-1.31l1.1,-5.37l0.01,-1.2l-0.95,-3.37l-0.85,-1.37l-1.27,-0.91l-4.09,-1.18l-0.4,-1.82l-0.03,-3.4l0.53,-2.05l3.36,-3.42l0.57,-1.41l-0.13,-2.05l0.85,-3.54l0.03,-2.27l-1.04,-5.15l3.96,-0.26l1.25,-0.48l2.07,-1.47l0.48,-0.64l-0.07,-0.53l-2.54,-3.56l-0.7,-2.49l0.2,-0.9l1.84,-1.23l0.66,-2.57l-0.88,-3.19l0.31,-2.72l-2.54,-4.6l-1.65,-0.98l-1.34,-0.11l-1.5,0.87l-1.08,0.25l-1.81,-0.06l-3.55,0.46l-0.75,-0.39l-1.06,-0.85l-6.35,-7.55l-0.78,-1.97l0.1,-1.45l1.86,-4.85l1.94,-2.58l1.38,-3.7l0.33,-1.93l-0.13,-1.96l0.52,-2.65l-0.13,-0.82l-0.63,-0.86l-8.76,-2.83l-1.27,-0.08l-3.55,-2.24l-1.49,-0.52l-2.43,0.34l-0.61,-2.19l-1.73,-1.32l-0.33,-0.81l-1.02,-0.39l-0.96,-1.38l-0.04,-0.7l0.76,-2.07l-0.05,-0.97l0.58,-0.97l-0.3,-0.63l0.22,-2.57l-0.24,-1.44l0.46,-1.03l1.3,-0.98l0.81,-1.06l2.38,-4.74l2.94,-2.9l1.46,-0.21l2.2,1.04l1.35,0.05l1.43,-0.52l1.04,-1.05l0.33,-0.78l-0.33,-2.76l0.21,-1.34l2.73,-4.54l1.52,-5.81l0.41,-4.81l-0.63,-1.72l0.51,-0.74l2.45,-1.11l0.69,-0.58l1.14,0.59l4.92,-1.25l3.48,-0.03l1.7,0.42l3.15,1.5l0.84,1.01l0.2,0.55l-0.47,2.39l0.52,1.13l0.12,2.44l0.44,0.69l1.59,0.8l2.21,-0.31l3.67,-1.91l0.18,-0.53l-0.47,-0.95l-1.71,-1.59l-0.52,-1.02l-0.41,-2.2l0.46,-2.22l0.37,-0.47l3.3,-1.77l0.66,-0.82l0.7,-2.41l1.89,0.05l2.52,-0.39l4.71,-2.39l0.31,-0.79l-0.33,-2.49l2.23,-2.31l0.89,-1.66l0.17,-1.39l0.76,-1.42l0.27,-1.31l0.13,-2.9l0.59,-0.24l2.28,0.87l3.35,-0.5l3.09,-1.34l0.68,-0.63l0.5,-0.8l-0.01,-2.55l2.15,-1.87l1.66,-2.39l2.56,-1.69l0.55,-0.85l-0.23,-1.76l-1.25,-1.69l-1.78,-1.62l-0.24,-1.01l0.87,-0.99l2.99,-1.26l0.59,-0.73l-0.57,-2.18l-1.12,-1.11l0.33,-1.74l-0.37,-3.7l0.27,-2.52l-0.82,-0.69l-1.64,0.41l-2.9,-1.06l-0.2,-2.75l0.51,-0.95l1.26,-0.47l0.92,0.17l1.01,0.7l0.81,0.04l4.82,-2.79l0.53,-0.88l0.36,-3.73l1.76,-2.48l0.56,-0.23l1.02,-0.04l0.78,0.38l2.11,1.88l3.15,2.01l1.73,0.32l3.32,-0.2l0.91,0.25l0.48,0.88l0.1,1.17l0.8,0.57l0.83,-0.02l1.85,-1.44l1.21,-0.54l3.33,-0.26l1.88,-0.71l1.6,0.3l1.25,-0.24l0.66,1.38l0.84,0.85l1.55,0.53l1.19,0.98l-0.65,1.49l-0.08,0.93l0.53,1.44l0.69,0.78l1.71,0.94l4.65,1.63l1.99,1.09l1.03,0.96l0.3,1.33l1.12,1.3l4.23,1.82l-0.93,2.28l-3.21,4.32l-0.46,2.24l-1.69,1.76l-4.58,8.9l-3.38,3.25l-2.27,3.21l-3.11,3.28l-4.83,8.03l-1.75,1.87l-4.22,2.71l-1.73,2.55l-2.84,6.08l-1.67,2.54l-4.16,4.67l-6.81,11.37l-0.98,4.44l-3.18,4.08l-0.81,1.5l-0.78,2.51l-2.07,3.04l-0.73,1.64l-0.46,3.51l0.12,3.84l0.52,3.75l1.69,6.19l4.46,11.36l-0.17,0.7l-0.95,0.94l-0.21,1.08l0.23,1.47l2.05,4.15l1.64,4.2l2.45,3.39l2.45,4.31l1.0,1.29l2.51,2.01l2.46,2.57l1.59,1.22l4.83,0.76l3.07,0.9l2.74,1.55l1.69,1.91l-0.55,0.41l0.07,0.68l0.71,0.32l1.42,1.9l0.74,0.08l0.29,1.76l-0.27,0.38l-2.23,0.35l-1.2,0.64l-1.02,1.02l-0.99,2.07l-1.73,0.33l-2.41,1.89l-0.76,1.46l0.18,0.8l-0.75,-0.14l-2.94,0.84l-2.06,0.05l-1.05,0.38l-0.94,0.76l-0.92,1.69l0.07,2.35l-0.37,1.04l-0.89,0.96l-0.82,0.32l-2.75,0.01l-3.04,0.7l-1.75,0.69l-2.06,1.49l-6.33,2.69l-1.0,0.71l-0.51,1.04l-2.95,3.12l-0.77,1.39l-0.32,2.54l-2.97,0.41l-0.85,0.79l-0.29,1.14l-1.99,-0.12l-0.42,0.33l-0.6,3.42l0.18,7.03l-0.59,0.76l-0.95,0.24l-2.31,-0.17l-1.77,0.47l-1.27,1.06l-1.67,2.76l-0.74,2.59l-0.2,3.6l0.49,6.05l-0.12,1.39l-2.7,2.65l-0.69,1.18l-2.67,6.71l-0.15,1.27l-1.23,0.1l-1.62,-1.3l-1.69,-0.62l-5.07,-5.41l-3.22,-5.53ZM530.4,325.39l0.23,1.1l0.69,0.73l1.42,0.64l4.13,0.49l1.56,0.99l2.91,2.66l0.23,0.92l-0.45,0.88l-3.47,1.88l-6.78,1.59l-0.9,-0.06l-1.8,-0.69l-5.39,-0.84l-0.43,-0.37l-2.29,-7.11l-2.52,-2.12l0.16,-1.06l3.08,0.74l2.15,0.05l2.77,-0.87l0.58,-0.95l-0.06,-2.57l0.96,-1.06l1.51,3.25l1.68,1.76Z",
        name: "Comunidad Valenciana"
    },
    "ES-NC": {
        path: "M487.26,54.0l1.46,0.39l0.47,-0.28l0.3,-1.1l0.98,0.39l1.72,-0.65l0.97,-0.96l1.95,-3.49l1.04,-0.99l1.14,-0.34l0.42,0.22l0.71,-0.12l3.53,-1.13l2.04,0.93l-0.19,0.83l0.61,2.41l0.54,0.66l0.92,0.41l1.65,0.0l0.87,-0.47l1.03,-2.42l0.76,-0.46l1.14,0.04l1.97,0.59l2.71,1.43l2.27,-0.34l1.67,1.74l0.24,3.11l-0.69,3.53l-0.98,2.78l-3.52,4.03l-0.58,1.15l0.83,1.96l1.37,1.55l1.56,0.89l1.68,0.44l1.81,0.16l1.28,-0.39l0.83,-1.57l0.15,-2.33l0.42,-1.68l1.01,-1.14l1.27,-0.48l0.63,0.17l-0.91,0.83l-0.54,1.18l0.27,1.47l1.2,1.46l1.34,0.83l3.89,0.73l2.18,1.21l2.12,1.74l2.67,-0.13l2.17,1.33l3.2,0.56l0.79,0.91l2.3,1.73l2.64,0.88l5.34,0.45l5.09,-0.91l1.49,0.52l0.71,1.83l-1.34,0.07l-2.29,1.26l-0.6,0.86l-0.41,1.83l-1.75,2.36l-0.33,0.92l-0.44,4.84l-0.6,1.38l-1.87,1.29l-0.56,1.12l-1.34,0.64l-2.53,2.21l-4.07,1.36l-0.54,0.69l-0.23,1.9l-0.53,1.52l-0.53,0.3l-1.91,-0.15l-4.19,0.63l-0.52,0.64l-0.24,1.4l-0.86,0.35l-0.15,0.67l1.03,0.63l-2.6,2.24l-0.69,1.59l-1.11,0.58l-1.21,-0.34l-1.0,0.11l-1.47,2.02l-0.46,1.63l0.77,2.45l-1.34,2.3l-1.76,1.74l-1.45,2.44l-0.56,2.54l0.08,0.79l1.17,1.84l-3.45,5.0l-2.16,7.24l0.1,1.58l1.22,2.33l0.33,5.21l1.28,1.46l1.5,2.83l2.24,0.88l0.19,0.55l-0.21,1.36l-2.94,4.66l-1.48,3.59l-2.04,2.81l-4.65,-1.18l-2.0,0.84l-2.24,0.15l-2.05,-1.12l-1.61,-1.91l-1.77,-1.02l-1.45,-0.43l-1.83,0.72l-1.04,-0.09l-1.72,-0.79l-2.39,-2.32l-0.76,-0.27l-3.07,-0.16l-1.04,-0.59l-0.79,0.0l-2.33,-1.98l-0.63,-1.62l0.3,-2.43l3.55,-4.05l1.11,-1.98l0.92,-0.0l1.59,0.6l2.42,-0.65l2.15,0.93l1.36,-0.23l0.56,-0.51l0.25,-0.69l-0.41,-1.71l0.24,-1.19l-0.6,-1.37l-0.13,-2.12l-1.97,-1.39l-1.42,-0.45l-3.11,-1.78l-2.22,-1.88l-1.79,-0.0l-0.45,-2.43l-2.46,-1.8l-4.94,-6.0l-3.91,-0.14l-1.34,-0.48l-0.64,-0.97l0.72,-1.08l-0.05,-0.54l-1.4,-1.27l-2.17,-0.33l-5.59,0.2l-0.86,-0.28l-2.12,-2.26l-2.7,-1.64l-4.38,0.57l-3.73,-1.18l0.74,-5.69l-0.51,-2.59l-0.52,-0.62l-1.13,-0.27l-1.95,2.01l-1.87,-0.82l-0.58,-0.62l0.02,-0.91l4.76,-4.17l1.43,-0.07l1.56,1.79l1.43,0.07l1.51,-0.5l2.45,-1.89l-0.15,-1.71l-1.07,-0.54l-0.52,-3.78l0.41,-0.58l1.67,-0.58l0.62,-0.86l0.33,-3.59l0.7,-1.96l1.42,-2.39l0.2,-1.89l-0.88,-3.62l1.33,-3.0l1.01,-1.14l0.64,-0.13l1.86,0.66l3.47,-0.52l1.99,-2.41l2.27,-0.66l0.75,-0.54l0.52,-0.72l0.2,-0.89l-0.06,-2.1l1.62,-3.37l5.0,-3.45l0.85,-0.93l0.94,-1.88l0.13,-1.23l-0.54,-3.42l0.52,-2.47ZM542.15,123.5l-0.25,0.17l-1.98,-0.35l-1.38,-0.68l0.34,-1.44l0.87,-1.19l0.42,-0.01l0.18,1.36l1.8,1.71l0.0,0.42ZM535.17,126.28l-0.52,0.04l-0.25,-0.47l0.13,-0.86l1.61,-1.14l0.02,0.73l-0.43,1.11l-0.55,0.57Z",
        name: "Comunidad Foral de Navarra"
    },
    "ES-AR": {
        path: "M499.91,312.07l0.28,-2.34l-0.43,-1.46l-3.9,-4.95l-1.58,-0.74l1.41,-1.27l2.66,-3.95l1.8,-1.09l1.01,-1.25l0.12,-4.37l1.28,-3.53l0.23,-0.18l2.08,0.39l2.03,1.14l0.81,0.12l0.75,-0.12l1.15,-0.68l1.34,-1.59l-0.15,-2.8l1.11,-3.29l-0.15,-2.81l-1.13,-2.67l0.1,-1.48l1.11,-2.97l-0.4,-3.64l-0.76,-0.88l-1.68,-1.14l-1.32,-1.66l-0.81,-2.28l0.22,-3.71l-0.77,-1.66l-3.89,-3.98l-3.51,-3.06l-2.3,-3.43l-3.27,-2.8l-2.25,-1.27l-2.66,-2.09l-1.7,-0.72l-1.98,-1.91l-2.01,-0.48l-5.1,1.63l-1.99,-1.78l-1.24,-0.46l-1.86,-0.2l-0.78,-0.49l-0.88,-7.08l-0.92,-2.24l0.09,-2.78l0.35,-1.49l0.65,-0.78l1.03,-0.61l0.83,-1.27l0.6,-4.24l0.46,-1.04l0.53,-0.3l1.82,0.26l1.38,0.63l0.3,0.93l-0.07,2.14l0.37,0.7l0.66,0.36l1.26,-0.27l2.26,-1.48l1.3,-0.34l1.03,-0.66l-0.33,-4.13l-1.48,-2.93l-0.21,-1.36l0.18,-3.13l-0.4,-2.48l-0.55,-0.97l0.09,-0.95l1.26,-0.96l1.96,0.64l0.81,-0.16l2.1,-2.4l1.27,-0.68l1.34,-1.37l2.47,-0.76l0.75,-0.99l1.26,-3.11l0.11,-1.59l-1.46,-1.53l-0.69,-1.79l-1.72,-2.75l1.55,-3.11l0.41,-1.62l-0.08,-0.88l-1.34,-1.94l-0.94,-2.74l-0.39,-4.19l0.85,-2.57l-0.37,-1.23l1.39,0.62l3.5,0.32l2.27,2.25l2.0,0.93l1.4,0.11l1.78,-0.71l1.03,0.36l1.55,0.87l1.66,1.95l2.3,1.25l2.7,-0.14l1.77,-0.81l4.54,1.19l0.76,-0.29l2.1,-2.94l1.49,-3.61l3.02,-4.86l0.23,-1.52l-0.28,-0.95l-0.62,-0.58l-1.75,-0.48l-1.43,-2.74l-1.22,-1.37l-0.25,-4.98l-1.25,-2.47l-0.05,-1.21l2.1,-7.0l3.22,-4.34l0.3,-0.86l-0.22,-0.91l-0.97,-1.21l0.45,-2.92l1.35,-2.24l1.75,-1.73l1.46,-2.53l-0.06,-0.96l-0.68,-1.79l0.38,-1.23l1.15,-1.66l1.87,0.34l1.68,-0.87l0.7,-1.61l2.7,-2.37l0.16,-0.45l-0.21,-0.47l-0.55,-0.27l0.62,-0.5l0.08,-0.95l0.41,-0.77l3.72,-0.48l1.98,0.14l0.93,-0.46l0.46,-0.76l0.41,-2.51l0.46,-0.86l3.97,-1.29l2.61,-2.27l1.3,-0.6l0.68,-1.23l1.86,-1.28l0.81,-1.78l0.39,-2.67l-0.09,-1.45l0.37,-1.38l1.79,-2.43l0.77,-2.4l2.12,-1.16l1.35,-0.03l-0.16,1.96l1.13,1.6l2.09,0.19l3.28,2.29l2.49,3.35l-0.08,0.91l0.23,0.38l1.72,0.28l0.21,0.3l-0.08,1.02l0.82,0.76l0.8,-0.02l1.75,-0.98l0.27,-0.36l0.09,-1.75l1.21,0.03l3.48,1.64l2.21,-0.12l1.81,-1.05l2.89,-2.29l0.75,0.42l0.52,-0.2l0.82,-1.26l4.54,2.97l1.05,1.8l1.93,0.2l2.52,-0.78l-0.07,1.03l0.43,1.66l0.8,1.33l1.45,1.35l0.27,1.17l1.72,0.79l1.2,1.27l2.6,1.04l2.57,-0.21l5.05,-1.87l4.01,-0.6l1.33,-0.85l0.9,-0.14l4.3,1.34l1.4,2.46l1.39,1.37l1.25,-0.31l1.83,-2.6l1.09,-1.09l0.89,-0.32l1.58,1.36l0.1,0.83l0.44,0.55l1.52,0.36l1.46,-0.08l2.38,-0.63l1.14,0.45l8.19,-0.24l2.31,0.31l1.05,-0.34l0.4,-0.5l1.62,2.62l0.9,2.5l0.57,0.85l0.76,0.62l1.96,0.54l0.69,0.54l-0.59,3.41l-1.93,4.04l-0.02,1.6l-1.57,0.61l-0.34,0.97l0.91,3.91l1.19,1.5l0.86,3.13l0.32,5.44l-0.44,1.92l-0.08,3.22l-0.65,2.16l-0.92,1.67l-0.94,4.37l-0.14,0.96l0.35,1.47l-0.36,2.74l-0.54,1.59l-0.7,0.72l-1.03,3.95l-0.89,1.94l-0.22,2.23l-0.48,0.68l-1.27,0.77l-1.05,1.69l-0.92,0.33l-1.16,0.89l-0.75,1.21l0.15,1.01l1.62,1.55l0.26,3.26l-0.2,0.46l-0.78,0.97l-1.45,0.9l-1.1,1.68l-2.74,1.29l-2.37,3.95l-3.9,1.33l-0.83,1.44l-0.89,0.88l-0.89,1.48l-1.59,1.49l-1.0,1.63l0.06,1.44l0.92,2.23l0.6,2.76l0.49,0.63l0.7,0.33l3.64,0.4l1.0,3.8l-2.71,4.25l-2.27,0.8l-0.92,0.86l-0.19,3.98l-0.65,2.3l-0.96,1.6l0.2,1.76l1.77,0.95l0.79,0.79l0.53,1.08l0.19,1.36l-1.63,3.79l0.5,3.94l-2.38,1.43l-0.6,0.69l-0.96,3.76l-0.36,0.48l-2.29,1.04l-0.96,1.17l-1.89,0.56l-0.67,1.49l-0.08,1.5l1.49,4.71l1.15,1.05l1.95,1.19l0.96,2.98l-0.25,1.86l-1.64,3.22l-0.74,3.02l0.57,3.07l0.9,2.24l-0.03,0.52l-2.39,3.7l-4.0,2.58l-0.45,0.76l0.24,0.71l-1.43,0.56l-2.49,0.09l-1.74,0.46l-2.38,1.73l-0.57,-0.15l-0.29,-1.66l-0.7,-0.77l-1.23,-0.32l-3.24,0.21l-1.6,-0.3l-2.91,-1.89l-2.19,-1.92l-1.09,-0.48l-1.33,0.07l-0.88,0.42l-1.93,2.74l-0.64,4.28l-4.46,2.65l-1.46,-0.72l-1.24,-0.2l-1.61,0.6l-0.68,0.72l-0.11,3.36l0.37,0.89l2.84,1.18l2.27,-0.24l-0.27,2.37l0.37,3.62l-0.32,1.87l0.27,0.78l0.91,0.57l0.5,1.73l-3.26,1.49l-1.2,1.58l0.37,1.49l1.88,1.75l1.13,1.53l0.14,1.2l-2.89,2.13l-1.7,2.43l-2.16,1.85l-0.27,0.79l0.09,2.12l-0.79,0.92l-2.31,1.11l-3.41,0.61l-2.54,-0.86l-0.65,0.03l-0.66,0.57l-0.25,3.24l-0.24,1.18l-0.74,1.37l-0.18,1.41l-0.78,1.45l-1.98,1.8l-0.39,0.8l-0.12,0.83l0.38,2.02l-4.36,2.24l-4.61,0.4l-0.48,0.63l-0.56,2.17l-0.52,0.61l-3.16,1.64l-0.62,0.76l-0.56,2.65l0.44,2.37l0.69,1.33l0.98,0.77l0.91,1.24l-3.29,1.71l-1.85,0.24l-1.28,-0.88l-0.12,-2.42l-0.51,-1.04l0.46,-2.48l-0.33,-0.83l-1.08,-1.23l-3.26,-1.55l-1.94,-0.48l-3.65,0.03l-4.86,1.23l-0.79,-0.53l-0.96,-2.84l1.22,-0.33l3.7,-2.03l0.69,-1.29l-0.29,-1.44l-3.15,-2.94l-1.71,-1.08l-4.32,-0.55l-1.17,-0.55l-0.54,-0.78l-0.19,-1.08l-1.61,-1.47l-1.73,-3.51l-0.78,-0.07l-0.88,0.69l-0.49,0.8l-0.19,0.99l0.24,1.26l-0.28,0.92l-2.37,0.75l-1.98,-0.04l-2.99,-0.72l0.58,-2.25l-0.14,-1.22l-0.42,-0.56l-1.99,0.18l-2.6,-0.7l-0.89,0.05l-0.72,0.41l-0.32,-0.14l-7.82,-7.36l-1.8,-0.94l-0.97,-0.12l-0.94,0.45ZM537.73,122.8l0.99,1.0l2.43,0.6l1.07,0.01l0.72,-0.7l-0.13,-1.11l-1.68,-1.49l-0.06,-0.93l-0.54,-0.94l-1.05,0.0l-0.99,0.93l-0.68,1.61l-0.08,1.0ZM536.95,123.71l-0.5,-0.66l-0.52,-0.03l-2.07,1.53l-0.27,1.32l0.48,1.06l1.31,0.14l0.97,-0.86l0.57,-1.39l0.03,-1.11Z",
        name: "Aragón"
    },
    "ES-CB": {
        path: "M315.65,35.72l1.39,1.36l0.56,-0.0l1.29,-1.28l1.65,-0.31l1.64,0.46l1.2,1.14l0.69,0.11l1.39,-1.45l3.04,0.34l8.2,-0.88l1.97,-1.47l4.07,-1.28l4.64,-0.29l0.88,-1.21l1.83,1.2l0.55,-0.08l1.43,-0.8l-0.9,-1.1l2.08,-1.52l0.97,-0.42l1.26,0.22l0.6,-0.37l0.75,0.37l1.86,-1.16l1.83,-0.39l1.8,0.36l1.18,0.79l-2.27,1.04l-1.21,0.8l-0.95,1.06l-0.01,0.52l0.84,0.97l-0.08,0.66l0.38,0.38l0.83,0.03l1.77,-0.71l1.42,-1.8l0.96,1.01l1.06,0.07l0.36,-0.68l-0.15,-0.82l-0.74,-1.31l1.07,0.42l0.61,-0.24l0.43,-0.89l-0.2,-0.28l2.26,-0.29l2.07,-1.46l4.95,-1.56l1.17,0.08l-0.1,1.17l0.37,0.43l1.01,0.06l2.17,1.75l4.75,1.01l0.16,1.28l-0.75,0.03l-1.51,-0.77l-0.45,0.18l-0.5,0.97l-1.44,1.01l-0.19,0.41l0.32,0.32l1.15,0.22l1.39,1.39l0.56,-0.14l0.61,-1.09l0.64,0.7l0.92,0.08l2.03,-0.57l4.02,1.28l4.01,0.56l3.81,1.29l2.05,2.02l1.61,0.57l0.08,4.53l-0.58,1.26l-2.65,1.3l-2.07,-0.6l-1.67,0.21l-4.26,-0.26l-7.17,5.16l-0.79,1.0l-0.29,0.96l0.3,1.44l-0.04,1.96l1.09,3.91l-1.41,0.12l-4.3,-0.42l-1.81,-0.84l-3.78,-0.79l-2.15,-1.37l-0.93,0.05l-1.2,0.75l-3.87,4.62l-2.92,2.17l-1.01,0.33l-2.54,-0.11l-1.22,0.6l-0.4,2.58l-0.7,0.76l-2.67,1.28l-1.41,1.55l-2.43,1.62l-2.11,5.42l-0.1,1.45l0.35,0.89l1.05,1.09l1.53,0.35l1.43,-0.46l1.78,-1.1l1.34,-2.07l0.82,-0.27l0.78,0.48l0.73,1.07l-0.14,0.8l-1.82,1.17l-1.78,0.12l-0.36,0.28l-0.72,1.61l0.28,1.86l0.4,0.85l0.47,0.36l0.8,0.1l0.89,-0.56l0.92,-1.4l0.61,-0.32l0.83,0.26l0.16,2.07l0.8,2.12l-0.0,1.0l-0.72,0.66l-3.41,0.25l-2.42,2.19l-2.9,0.91l-1.89,-0.54l0.03,-3.87l-0.31,-0.9l-0.49,-0.13l-1.26,0.85l-1.78,3.98l-2.07,0.51l-0.92,-1.4l-0.66,-0.51l-3.21,-0.71l-1.61,-1.51l0.01,-0.57l0.33,-0.2l1.79,-0.43l1.1,-0.81l0.28,-0.93l-0.11,-0.66l-0.54,-0.68l-1.0,-0.41l-1.61,0.47l-1.74,1.3l-0.88,-0.49l-0.98,-5.73l-0.06,-2.57l-0.31,-0.84l-1.03,-0.72l-6.7,-2.49l-0.81,-0.59l-1.96,-3.58l-0.74,-0.6l-2.47,-1.16l-1.23,-0.03l-1.93,1.03l-1.95,0.22l-2.14,1.2l-3.19,-0.14l-2.46,0.51l-3.29,0.02l-2.14,0.34l-0.74,-2.67l-1.34,-1.36l-0.78,-1.45l-2.81,-1.58l-0.95,-1.04l-0.5,-2.29l0.25,-4.38l3.64,-0.61l1.88,0.24l0.77,-0.52l0.75,-1.99l0.28,-2.11l-0.16,-1.17l0.39,-0.86l1.29,-0.56l3.4,-0.07l1.02,-0.62l0.76,-1.03l1.39,-0.65l1.73,0.32l1.14,1.61l0.87,-0.05l0.71,-0.56l0.48,-0.69l0.33,-1.81l-0.23,-1.34l-0.98,-2.42l1.53,-3.12l0.06,-2.82Z",
        name: "Cantabria"
    }
},
height: 671.3455904856035,
projection: {
    type: "merc",
    centralMeridian: 0
},
width: 900
}), $.fn.vectorMap("addMap", "usa", {
insets: [{
    width: 200,
    top: 370,
    height: 108.45463042130267,
    bbox: [{
        y: -9738382.809686134,
        x: -19771865.68561177
    }, {
        y: -6263522.893432467,
        x: -13363914.447835693
    }],
    left: 10
}, {
    width: 100,
    top: 400,
    height: 63.33165105817722,
    bbox: [{
        y: -2517962.357553506,
        x: -16734015.891922569
    }, {
        y: -2133376.310059541,
        x: -16126758.634187918
    }],
    left: 220
}, {
    width: 900,
    top: 0,
    height: 448.5173156956177,
    bbox: [{
        y: -5994230.507329411,
        x: -12777719.644375157
    }, {
        y: -2788583.1868796386,
        x: -6345230.892117638
    }],
    left: 0
}],
paths: {
    "US-VA": {
        path: "M759.72,228.63l0.64,-1.33l-0.16,-0.64l0.65,-0.59l-0.13,-0.56l-0.23,-0.12l0.65,-0.53l-0.04,-1.04l0.41,-0.18l0.06,-0.65l0.56,-0.07l0.37,-0.53l0.38,-0.57l0.29,-1.13l0.94,-0.11l0.2,-0.72l0.35,-0.03l0.21,-1.09l-0.46,-0.7l0.88,-0.42l0.13,-0.6l2.51,-0.3l-0.19,1.95l-0.63,0.69l-1.28,2.35l-0.76,1.86l0.05,0.89l-0.5,0.66l-0.32,-0.72l-0.53,-0.19l-0.67,0.55l-0.02,0.58l-0.78,0.38l-0.46,0.79l0.02,0.56l-0.55,0.89l-0.28,2.22l-0.25,-0.03l-0.4,0.35l-0.22,0.94l-0.73,-1.63l0.38,-0.59l-0.11,-0.6ZM641.29,241.29l1.08,-0.37l1.53,-0.15l1.13,-0.6l3.42,-0.84l1.03,-1.75l0.75,-0.03l2.31,-0.9l0.31,-0.59l0.03,-0.85l2.1,-1.18l0.23,-0.5l-0.05,-0.81l0.26,-0.25l5.11,-2.52l5.14,-3.99l0.13,0.53l0.67,0.45l0.07,1.16l1.06,0.8l0.49,0.76l1.29,0.3l0.58,0.64l1.08,0.59l1.27,0.15l0.78,-0.2l0.89,-0.86l1.14,-0.27l0.71,-1.01l1.77,1.52l0.38,0.1l1.46,-0.65l2.17,-0.43l0.66,0.17l1.13,-0.6l0.48,-0.66l-0.25,-0.86l0.24,-0.22l1.58,0.77l3.37,-1.55l0.25,-0.02l0.35,0.66l0.6,0.05l2.55,-1.47l0.35,-0.72l-0.33,-0.48l1.05,-0.67l0.23,-0.54l-0.18,-0.51l-0.77,-0.46l1.18,-2.26l3.23,-3.39l0.91,-1.64l0.35,-1.51l1.93,-1.77l-0.01,-0.8l0.37,-0.6l0.55,-0.31l0.69,-1.32l0.1,-1.12l0.36,-0.56l0.14,-0.83l1.05,0.36l0.73,1.6l3.32,1.02l0.59,-0.12l1.45,-1.85l0.65,-1.86l0.84,-0.71l0.3,-1.33l1.12,-1.68l1.45,0.93l0.62,-0.02l1.85,-2.41l0.5,0.14l0.61,-0.21l0.72,-0.87l0.88,-0.4l0.77,-1.37l1.75,-1.7l0.23,-2.16l0.85,-1.31l0.13,-1.64l7.33,5.42l0.62,-0.15l1.41,-3.06l2.36,0.44l0.44,0.58l0.9,0.38l-0.85,1.2l0.37,0.92l1.28,1.0l2.27,0.46l0.67,1.15l1.44,0.42l0.92,0.81l0.46,0.73l-0.04,2.07l-0.99,0.43l-0.4,-0.08l-0.38,0.29l-0.09,0.56l-0.47,-0.14l-0.59,0.41l-0.54,1.17l0.02,0.38l-0.35,0.41l-0.43,1.77l-0.42,0.12l-0.14,0.61l0.66,0.68l-0.54,0.56l0.36,0.4l1.48,0.26l1.36,-0.21l1.93,-0.94l0.19,0.45l-0.56,0.12l-0.12,0.6l1.43,1.22l-0.01,0.39l0.39,0.62l1.43,0.61l1.24,0.18l0.33,0.44l0.41,0.14l0.88,-0.35l0.92,0.15l0.19,0.5l0.91,0.68l-0.16,0.45l0.22,0.55l0.78,0.01l0.33,0.53l3.27,1.45l-0.02,0.81l-0.64,-0.47l-0.62,0.25l-0.09,0.39l0.46,1.21l-0.43,0.35l-0.0,0.41l0.32,0.4l-0.53,0.55l0.0,0.45l-0.43,-0.15l-0.57,-0.37l-0.35,-0.67l-0.67,0.01l-0.16,0.26l-0.95,-1.5l-0.79,-0.84l-0.37,0.01l-0.22,-0.51l-0.55,0.14l-0.84,-1.43l-1.01,-0.61l-0.3,-0.61l-0.65,-0.47l-0.99,-1.65l-1.16,-0.37l-0.34,-0.58l-0.47,-0.28l-1.05,-0.19l-0.48,0.35l-0.02,0.43l0.3,0.36l0.95,0.21l0.43,0.66l1.17,0.32l0.42,0.44l0.25,1.24l1.06,1.18l0.9,0.49l0.15,0.57l0.81,1.15l2.04,1.26l0.31,1.04l0.5,0.73l0.47,0.25l1.43,0.17l0.77,0.55l-0.47,0.43l0.19,0.52l1.64,0.69l0.13,0.6l0.46,0.2l-0.25,1.18l-0.7,-0.77l-0.38,0.09l-0.77,-1.01l-0.62,0.14l-0.11,0.65l-0.4,0.49l0.09,0.48l0.3,0.26l-0.23,0.43l0.43,0.4l0.43,0.02l-0.77,0.16l-1.69,-0.99l-0.9,-1.35l-0.67,-0.43l-0.75,-1.18l-0.8,-0.74l-0.55,-0.03l-0.34,0.43l0.06,0.76l0.52,0.31l0.61,0.99l0.56,0.38l1.49,1.87l2.11,1.42l1.14,-0.0l0.2,0.92l0.97,0.38l-0.45,0.39l0.15,0.64l0.82,0.05l-0.25,0.82l-0.89,0.14l-0.64,0.44l-0.43,-0.85l-2.26,-1.63l-0.17,-1.18l-0.42,-0.63l-0.75,-0.26l-1.18,0.28l-1.38,-0.66l-0.06,-0.94l-0.66,-0.22l-0.26,0.32l-0.08,0.72l-0.35,0.24l-0.97,-1.32l-0.47,-0.03l-0.53,0.34l-0.49,-0.43l-0.97,0.17l-1.95,-0.5l-0.55,0.76l0.23,0.48l1.63,0.54l1.28,0.02l0.27,0.3l0.43,0.06l0.64,-0.44l0.34,0.8l1.1,0.61l1.78,0.14l1.16,0.85l0.71,-0.34l0.27,2.07l0.94,0.47l0.25,0.49l1.28,0.63l0.13,0.71l-0.71,0.72l0.43,0.53l1.79,-0.69l0.75,0.15l0.22,0.43l0.5,0.3l0.67,-0.14l-0.32,-0.87l0.16,-0.22l-0.12,-0.66l3.27,0.82l1.07,-0.12l0.85,2.76l-0.52,0.53l-0.14,2.49l-0.41,-0.54l-0.46,-0.15l-0.25,0.68l-62.65,0.19l-17.72,-0.53l-6.35,-0.44l-0.37,-0.28l-3.84,-0.14l-0.83,0.37l-25.18,-0.12Z",
        name: "Virginia"
    },
    "US-PA": {
        path: "M694.82,141.0l0.62,-0.03l3.44,-1.82l1.38,-0.51l0.0,4.46l0.4,0.4l68.61,0.05l1.16,0.78l0.34,1.3l0.54,0.24l0.81,-0.1l0.94,0.7l-0.01,0.78l0.61,0.41l-0.28,0.45l0.2,0.87l-0.04,1.57l1.26,2.14l1.1,0.5l0.68,0.59l2.08,0.32l0.45,0.78l-1.02,0.41l-1.04,1.05l-0.73,1.8l-0.75,0.91l-0.67,0.44l-0.71,1.05l-1.66,1.0l-0.17,0.73l1.21,1.74l-0.42,0.41l-0.25,0.83l-0.88,0.18l-0.35,0.47l-0.26,1.26l0.25,2.59l0.44,0.36l1.13,0.11l0.29,1.75l0.49,0.79l0.45,0.31l0.66,-0.07l0.33,0.86l3.22,3.27l-2.75,1.25l-1.05,0.88l-2.04,1.01l-0.42,0.6l-0.06,0.72l-1.48,0.61l-0.79,-0.06l-1.46,0.59l-0.46,0.46l-1.53,-0.46l-2.03,0.25l-1.37,0.86l-0.7,1.03l-73.27,-0.0l-0.01,-41.2l2.03,-0.67l2.57,-1.29l0.95,-0.71Z",
        name: "Pennsylvania"
    },
    "US-TN": {
        path: "M537.69,269.77l0.72,-0.73l0.2,-0.77l0.85,0.12l0.67,-0.6l0.08,-1.04l-0.52,-1.93l0.03,-1.03l1.4,-1.41l0.18,-1.05l1.05,-0.24l0.38,-0.37l0.04,-0.41l-0.42,-0.73l0.47,-0.43l0.12,-0.51l-0.66,-1.1l2.36,-1.0l1.07,-0.81l-0.02,-0.8l-0.58,-0.52l0.3,-0.09l0.71,0.37l0.48,-0.27l0.1,-0.6l-0.21,-0.54l-0.65,-0.78l0.67,-1.58l0.59,-0.27l0.42,-0.56l-0.02,-0.36l-0.89,-1.38l1.3,-0.09l0.44,-0.38l-0.08,-0.63l-0.89,-0.61l0.81,-0.1l0.44,-0.36l0.19,-0.59l-0.38,-1.22l0.69,0.43l0.56,-0.19l0.61,-0.63l21.3,0.01l0.4,-0.36l0.07,-1.1l-0.44,-1.92l2.57,0.23l0.32,0.47l0.36,0.09l20.66,-0.36l9.96,0.63l11.63,0.07l21.66,0.7l1.08,-0.33l26.64,0.13l0.75,-0.37l3.11,0.12l-0.53,0.97l0.22,0.77l-0.68,1.5l0.1,0.62l-0.89,-0.16l-1.81,1.17l-1.72,2.91l-0.68,0.51l-0.39,-0.09l-0.42,-0.68l-1.26,-0.23l-2.62,0.98l-0.91,0.81l-0.78,1.15l-0.97,0.55l-0.2,-0.27l0.04,-0.88l-0.57,-0.55l-0.49,0.04l-2.2,1.02l-0.58,1.07l-0.76,-0.31l-0.87,0.26l-0.29,0.59l0.14,0.67l-1.02,1.54l-1.12,-0.14l-1.71,0.65l-1.32,0.81l-0.7,0.74l-0.72,0.11l-2.36,1.63l-0.92,0.17l-0.66,-0.25l-2.05,0.14l-2.56,1.03l-0.54,0.76l-0.84,0.31l-0.63,0.59l-0.59,2.28l-0.37,0.39l-1.49,0.18l-0.75,-0.24l-1.11,0.78l-0.25,0.61l-0.34,3.54l-37.06,-0.04l-22.57,-0.35l-0.31,0.21l-31.59,-0.04Z",
        name: "Tennessee"
    },
    "US-ID": {
        path: "M117.67,96.19l1.16,-1.26l0.34,-1.21l1.1,-2.21l1.49,-1.06l1.11,-1.54l0.69,-2.05l-0.17,-1.04l1.77,-2.43l0.95,-2.56l0.13,-1.25l1.63,-2.26l0.48,-1.32l0.74,-0.86l0.2,-0.61l-0.15,-0.91l-1.32,-2.48l-1.83,-0.85l-0.64,-0.52l-0.95,-0.19l-1.14,-1.27l-0.96,-2.57l-0.78,-0.91l0.7,-1.19l-0.56,-2.08l-1.53,-2.17l0.28,-0.93l-0.2,-50.44l14.63,0.0l-0.01,19.38l1.86,2.45l1.25,0.99l0.55,1.36l1.51,1.4l0.02,0.77l0.59,0.93l-0.76,0.61l-0.11,0.4l0.72,0.69l0.33,0.73l-0.75,0.25l-0.13,0.71l2.29,1.23l1.4,1.67l2.52,0.76l0.82,1.34l1.35,1.03l0.66,0.99l1.32,1.28l0.21,0.6l0.88,0.42l1.06,0.95l-0.02,0.79l0.36,0.89l1.31,0.99l0.8,0.28l-0.11,0.76l0.26,0.46l0.73,0.06l0.89,-0.64l0.4,0.31l-0.26,0.53l0.17,0.53l1.27,0.7l1.65,-0.09l1.83,-0.57l-0.27,2.34l-0.67,0.28l-0.23,0.33l0.44,0.93l-0.49,1.16l-0.04,0.92l-0.76,1.53l0.33,1.49l-0.8,0.17l-0.31,0.57l0.15,0.47l0.67,0.65l-0.48,0.83l0.16,1.08l0.3,0.41l0.78,0.29l-0.2,0.84l0.4,0.72l-1.48,0.55l-1.02,1.44l0.27,1.01l0.57,0.6l-0.0,0.61l-0.72,0.8l0.18,0.62l-0.23,0.41l0.1,0.4l1.59,0.35l1.67,1.39l0.79,0.13l1.02,-0.44l0.44,-0.77l0.58,-0.04l1.21,-0.57l1.02,-1.28l0.78,-0.36l0.08,-0.69l0.91,0.61l0.34,0.6l1.16,0.43l-0.26,1.08l0.22,0.45l0.66,0.33l-0.14,1.24l0.19,0.6l0.57,0.49l0.03,1.45l0.69,0.62l0.19,0.58l1.06,0.92l0.57,1.47l0.87,0.21l0.96,1.71l-0.04,0.81l-0.68,0.66l0.79,1.65l1.39,0.85l0.42,0.66l0.79,-0.03l0.83,-0.43l1.18,0.68l1.43,2.28l-0.39,0.75l0.64,1.15l0.46,0.35l-0.16,0.61l0.25,0.79l1.16,0.93l0.86,0.29l0.58,0.61l0.48,0.02l0.42,-0.26l0.14,-0.38l-0.29,-0.63l0.93,-0.87l0.92,-0.3l4.69,0.88l0.64,-0.35l0.49,-1.24l1.14,-0.49l0.5,0.26l1.87,0.3l3.27,-0.45l1.05,0.66l1.33,-0.29l0.87,-0.46l1.64,0.01l0.91,0.38l0.75,-0.05l0.4,-0.53l-0.23,-0.42l-0.54,-0.22l-0.04,-0.39l0.17,-0.47l0.68,-0.52l-0.15,-0.84l0.75,-0.18l0.37,-0.37l0.55,0.28l0.93,1.47l0.39,0.26l0.26,0.96l0.62,0.39l0.97,1.16l0.76,0.31l0.02,46.58l-92.18,0.01l-0.19,-34.03l0.87,-1.17l0.58,-2.47l-0.1,-0.77l-0.4,-0.65l0.49,-0.09l0.31,-0.34l0.35,-1.39l-1.11,-0.96l-0.4,-1.01l-1.22,0.13l-0.58,-0.56l-0.64,0.04l-0.36,0.32l-0.43,-0.33l0.04,-0.86l-0.31,-0.82l0.31,-1.0l-0.09,-0.55Z",
        name: "Idaho"
    },
    "US-NV": {
        path: "M156.86,269.15l-30.9,-27.49l-22.85,-19.78l-29.06,-23.59l-0.01,-54.79l92.05,-0.01l0.01,105.04l-0.64,1.01l-0.57,1.83l-0.34,0.18l-1.19,-0.01l-1.15,-1.66l-0.73,-0.43l-1.21,0.35l-1.86,-0.57l-1.39,0.39l-1.09,0.56l-0.37,0.45l-0.34,2.13l0.44,1.05l0.69,0.89l-0.39,0.82l-0.04,1.1l0.13,0.94l0.62,1.5l-0.01,1.1l-0.29,1.05l1.17,2.83l0.3,2.44l-0.11,0.81l-0.64,0.13l-0.23,0.28l-0.03,0.49l0.37,0.54l-0.33,0.46Z",
        name: "Nevada"
    },
    "US-TX": {
        path: "M282.01,322.94l55.53,-0.02l0.4,-0.4l0.37,-78.58l46.56,-0.0l0.05,33.71l0.44,0.4l0.89,-0.11l0.66,0.21l3.27,3.06l1.46,0.17l0.76,-0.46l2.18,0.52l0.43,-0.3l0.23,-1.03l0.47,0.57l0.79,0.18l0.31,0.72l0.64,0.6l0.06,1.59l0.41,0.43l2.49,0.37l1.08,-0.15l1.19,0.72l2.4,0.58l1.6,-0.42l0.53,0.09l1.09,1.2l0.53,0.26l1.22,-0.07l1.1,-1.12l2.1,0.24l1.4,-0.33l0.04,1.73l0.82,0.62l1.33,0.33l-0.13,1.33l0.25,0.5l0.47,0.27l0.91,0.24l0.81,-0.16l2.89,-2.14l0.35,0.23l0.02,0.72l0.31,0.52l1.72,0.2l0.17,0.79l0.66,0.45l1.28,-0.13l0.78,-0.71l0.3,0.25l0.57,-0.06l0.51,-0.74l0.16,0.24l-0.42,0.95l0.1,0.68l0.56,0.94l0.7,0.37l0.49,-0.02l0.56,-0.4l0.29,-1.16l0.32,-0.25l0.09,-0.45l0.8,-0.58l0.32,-1.14l0.44,-0.08l0.3,0.09l0.22,0.78l0.43,0.5l1.13,0.1l0.7,0.42l1.11,-0.13l0.64,-1.04l0.3,0.1l-0.07,0.62l0.4,0.52l1.02,0.39l0.42,0.6l1.31,0.01l1.22,1.41l0.49,0.03l0.6,-0.52l0.1,-0.51l1.25,-0.03l0.42,-0.3l0.42,-0.81l1.63,-0.26l1.46,-0.83l1.28,0.7l1.34,-0.12l0.33,-0.64l1.93,-0.5l0.49,-0.4l0.36,0.23l0.12,0.63l0.2,0.1l1.58,0.4l1.46,0.02l1.7,-0.87l0.35,-0.77l0.89,0.28l1.86,1.32l0.99,0.18l0.13,0.4l1.31,1.32l1.82,0.42l0.87,0.79l0.66,-0.05l2.09,0.79l0.87,0.07l0.28,0.64l1.16,0.84l1.28,-0.04l0.35,-0.53l0.65,0.31l0.79,-0.27l0.77,0.32l0.67,-0.08l0.48,0.29l0.08,26.89l1.21,1.43l1.04,0.7l0.93,1.51l0.37,1.29l-0.29,1.47l0.08,0.6l0.79,1.02l0.58,0.33l-0.02,0.73l0.57,0.42l0.18,0.66l0.46,0.55l-0.15,1.02l0.75,0.78l0.41,1.31l0.33,0.29l0.53,-0.01l-0.25,1.21l0.51,0.97l-0.65,0.31l-0.13,0.44l0.54,0.99l-0.48,0.64l0.07,1.11l-0.61,1.17l-0.16,0.87l-0.66,0.61l-0.38,1.15l-0.47,0.32l-0.27,0.59l0.42,1.59l-0.7,1.18l-0.1,0.56l0.09,0.88l0.61,0.93l-0.2,0.8l0.31,1.24l-0.28,1.06l-0.97,1.18l-0.84,0.12l-1.67,2.59l-0.08,0.9l1.31,1.76l-2.73,-0.07l-6.11,2.55l-0.01,-0.21l-0.67,-0.28l-0.17,0.14l-1.0,-0.4l-2.52,0.67l0.6,-1.34l0.32,-1.46l-0.19,-0.75l-0.78,-0.74l-0.42,-0.02l-1.3,0.6l-0.88,1.5l-1.2,-0.8l-1.42,0.04l-0.09,0.62l0.63,0.51l0.01,0.79l0.38,0.33l-0.48,0.91l0.18,0.45l1.07,0.49l-0.34,0.52l0.36,0.8l0.9,0.49l-0.25,0.75l-0.39,0.01l-0.84,0.59l-1.57,1.71l-0.84,-0.39l-0.49,0.11l0.2,0.84l-0.01,1.91l-1.56,1.08l-1.62,1.55l-0.79,0.25l-3.42,2.09l-2.69,0.23l-2.1,0.74l-0.23,0.78l-0.87,-0.16l-1.37,0.57l-0.25,-0.27l-0.73,0.06l0.26,-0.48l-0.18,-0.49l-0.3,-0.11l-1.2,0.13l-0.96,0.77l-0.39,-0.4l-0.1,-0.98l-1.15,-0.69l-0.5,0.42l0.47,1.18l-0.02,0.73l-1.45,-0.33l-0.44,-1.04l-1.19,-0.34l-0.58,0.37l0.02,0.42l0.72,1.38l0.0,0.98l1.59,0.72l-0.51,0.22l-0.3,0.54l0.11,0.28l0.63,0.25l0.88,-0.39l0.65,0.35l-3.41,1.7l-0.41,-0.12l-0.27,-1.1l-0.37,-0.16l-0.89,-1.15l-0.47,-0.05l-0.44,0.43l-0.03,0.46l-0.39,0.24l-0.07,0.52l0.89,1.24l-0.27,0.77l0.22,0.66l-1.33,1.3l0.21,-1.65l-0.41,-0.36l-0.48,0.15l-0.61,0.84l0.17,0.61l-0.23,0.52l0.01,-0.71l-0.47,-0.49l-1.58,0.93l-0.65,-0.26l-0.64,0.44l0.0,0.6l-0.62,0.7l0.14,0.67l0.73,0.25l0.11,0.47l0.55,0.4l0.5,-0.37l0.3,-0.78l0.55,-0.22l0.01,0.29l-2.29,3.19l-0.95,-0.74l-1.15,0.27l-0.24,-0.28l-2.83,0.12l-0.2,0.59l0.34,0.5l0.47,0.32l1.13,0.05l0.02,0.68l0.43,0.52l1.59,0.85l-2.31,5.7l-0.49,-0.33l0.08,-0.45l-0.55,-0.45l-0.89,0.61l-0.09,0.31l-0.54,0.06l-0.36,0.41l-1.28,-1.77l-0.94,-0.74l-0.61,0.39l0.06,0.4l1.09,1.57l-0.15,0.49l-0.6,-0.05l-0.34,0.63l0.44,0.47l1.5,0.09l1.63,0.59l0.64,-0.02l0.96,-0.44l-0.3,1.22l0.16,0.56l-0.78,0.51l0.24,1.18l-0.82,0.08l-0.4,0.38l0.24,1.62l-0.26,1.25l0.4,0.59l0.62,0.17l0.61,2.18l0.5,2.17l-0.74,0.59l0.46,0.45l-0.05,0.97l0.55,0.27l0.13,0.44l0.41,0.27l0.33,1.37l0.46,0.28l0.36,2.46l0.95,0.53l-0.28,0.75l0.16,0.8l-0.29,0.43l-0.78,0.06l-0.52,0.45l0.01,0.68l-0.56,0.09l-0.26,-0.47l-1.17,-0.39l-2.26,-2.01l-1.71,-0.18l-0.68,-0.41l-3.31,0.0l-0.65,0.29l-0.64,-0.47l-1.3,0.16l-1.62,-0.7l-0.54,-0.74l-0.41,-0.14l-0.26,-0.55l-0.91,-0.39l-0.77,-0.04l-1.55,-0.68l-1.16,0.28l-0.45,-0.36l-0.17,-0.46l-0.47,-0.19l-1.12,-1.07l-1.58,-0.03l-1.17,-0.5l-1.84,-0.18l0.2,-0.97l-0.43,-0.81l-0.74,-0.29l-0.21,-1.34l-1.04,-3.28l-2.19,-2.37l-0.23,-0.87l-0.81,-0.53l0.26,-0.56l-0.18,-0.64l0.27,-1.66l-0.34,-0.75l-0.77,-0.8l0.5,-1.68l-0.0,-0.87l-0.14,-0.45l-0.41,-0.29l-0.14,-1.37l-1.52,-1.16l-0.68,0.13l-0.21,-0.27l-0.66,-0.11l-0.59,-1.0l-1.73,-1.29l0.0,-0.5l-0.37,-0.47l0.06,-0.67l-0.79,-0.72l-0.08,-0.6l-0.88,-0.45l-1.06,-2.23l-2.13,-1.15l-0.34,-0.71l-0.87,-0.43l-0.05,-0.9l-0.66,-0.91l-0.4,-1.44l0.21,-0.11l-0.04,-0.73l-0.81,-0.36l-0.2,-0.97l-0.65,-0.46l-0.78,-1.32l-0.51,-1.86l-1.5,-1.82l-0.13,-1.28l-0.61,-2.01l-1.49,-1.04l0.04,-0.53l-0.65,-0.96l-1.08,-0.58l-0.84,-0.81l-1.32,-0.65l-0.63,-1.46l-1.49,-0.46l-1.17,-0.76l-0.03,-1.25l-0.54,-0.31l-0.62,0.14l-0.17,-0.53l-0.73,-0.18l-0.72,-1.57l-0.56,-0.47l-0.31,0.1l-0.41,-0.34l-0.65,0.15l-0.54,-0.64l-0.45,0.15l-0.18,0.45l-0.83,0.13l-2.32,-0.32l-0.38,-0.3l-1.21,-0.0l-0.64,0.24l-0.63,-0.33l-2.19,0.25l-1.35,-0.7l-0.62,-0.08l-1.0,-0.68l-0.6,-0.03l-0.85,0.67l-0.48,1.25l-1.62,-0.09l-0.41,0.32l-0.41,-0.09l-2.08,0.67l-2.38,4.95l-0.12,1.35l-0.6,0.59l-0.26,1.21l0.21,0.63l-1.49,0.79l-0.55,1.02l-0.85,0.5l-0.52,0.72l-0.19,0.79l-2.25,-0.21l-0.95,-0.64l-0.42,0.23l-1.38,-0.86l-1.11,-1.22l-2.39,-0.58l-0.9,-0.68l-0.07,-0.5l-0.4,-0.35l-2.26,-0.31l-1.87,-0.72l-1.6,-1.29l-0.8,-1.16l-0.81,-0.67l-0.6,-0.24l-0.7,0.03l-1.46,-0.89l-0.21,-0.42l-0.97,-0.71l-0.78,-2.21l-0.74,-0.75l-0.23,-0.82l-0.68,-0.97l-0.3,-1.77l0.32,-1.29l-0.01,-1.12l-2.68,-3.84l-0.15,-1.54l-1.14,-1.9l-0.84,-0.34l-0.43,-0.94l-1.22,-0.57l-0.66,-0.75l-1.23,-0.85l-0.86,-0.06l-1.7,-0.85l-0.66,-0.77l-2.15,-1.71l-0.58,-1.19l-2.73,-1.84l-1.45,-1.83l-1.05,-0.69l-0.54,-0.77l-0.8,-0.52l-2.37,-0.83l-0.7,-0.5l-1.09,-1.62l-0.41,-1.19l-0.75,-1.23l-0.71,-0.64l-1.51,-0.22l-0.92,-0.89l-0.56,-0.24l-0.83,-2.27ZM429.17,424.54l0.13,-0.1l0.18,-0.24l0.02,0.31l-0.33,0.03ZM435.46,388.17l-0.06,-0.27l0.65,-0.15l-0.01,0.01l-0.58,0.41ZM433.07,390.44l0.59,-0.97l0.4,-0.3l-0.02,0.22l-0.97,1.05Z",
        name: "Texas"
    },
    "US-NH": {
        path: "M814.7,129.01l-0.12,-0.41l-1.07,-1.17l-0.13,-0.77l0.46,-1.63l0.68,-0.37l0.19,-0.45l0.5,-4.61l0.55,-0.96l0.17,-4.78l0.92,-1.07l0.35,-1.89l1.48,-1.3l0.53,-1.95l1.26,-1.74l-0.22,-0.67l0.95,-1.88l0.19,-3.32l0.69,-0.84l1.98,-0.2l1.08,-0.98l1.85,-0.99l1.23,-1.31l0.1,-1.01l0.68,-0.38l0.03,-0.62l-1.27,-2.65l0.04,-0.28l1.81,-2.51l0.12,-0.74l-0.34,-0.61l-0.04,-0.61l0.44,-0.47l-0.02,-0.62l1.42,-2.56l-0.03,-0.78l1.26,-1.0l2.27,0.92l0.51,-0.16l0.39,-0.45l1.93,32.44l-0.29,3.24l0.32,0.71l1.48,1.83l0.69,0.45l-0.06,1.59l1.14,1.36l-0.08,0.23l0.59,0.49l-1.51,2.74l-1.52,-0.22l-1.58,0.64l-0.75,0.64l-1.01,0.05l-0.5,0.41l-0.46,0.83l-0.75,0.29l-0.7,0.61l-17.79,-0.51Z",
        name: "New Hampshire"
    },
    "US-NY": {
        path: "M790.32,168.22l1.69,-2.23l0.58,0.13l0.69,-0.48l0.66,0.3l0.61,-0.25l0.04,-0.2l0.5,0.1l0.43,-0.47l0.6,0.14l0.35,-0.48l-0.16,-0.72l0.31,-0.34l0.66,-0.16l1.17,0.49l0.38,-0.02l0.25,-0.34l1.38,0.2l0.43,-0.59l1.66,0.44l1.22,-0.48l0.33,-0.65l0.49,0.38l0.56,-0.39l4.74,0.1l2.41,-0.51l2.6,-1.87l-0.49,0.75l-1.12,0.46l-0.42,0.61l-0.76,0.36l-0.56,0.61l0.38,0.62l1.52,0.09l0.06,0.48l-0.47,0.26l-1.5,0.38l-0.44,-0.18l-2.3,0.2l-0.48,0.76l-0.63,-0.24l-2.95,0.74l-0.96,-0.12l-0.4,0.6l-1.12,-0.22l-2.54,1.01l-4.61,0.73l-0.39,0.53l-0.2,0.0l-0.27,-0.77l-1.17,-0.37l-1.29,0.45l-0.1,0.59l-0.45,0.25l-0.5,0.09l-0.44,-0.76ZM814.87,163.5l0.43,-0.79l1.47,-0.97l0.52,0.04l0.73,-0.49l0.43,0.42l0.68,-0.27l0.01,-0.28l0.43,0.65l-1.61,0.54l-2.22,1.18l-0.74,0.21l-0.12,-0.22ZM817.27,159.0l0.01,-0.0l-0.01,0.01l-0.0,-0.0ZM701.06,138.32l4.33,-2.51l1.67,-1.59l1.71,-0.83l0.35,-0.4l1.27,-0.44l1.93,-2.56l1.76,-0.79l0.7,-0.62l0.2,-1.63l-0.5,-1.04l-0.16,-0.94l-0.33,-0.35l0.63,-0.82l-0.01,-0.76l-0.68,-0.61l-2.0,-0.38l0.25,-0.78l-0.07,-1.92l2.7,-0.82l1.64,-0.25l1.06,-0.45l4.71,-0.64l2.33,0.3l1.92,-0.26l5.47,0.92l1.8,1.31l0.9,0.36l0.83,-0.02l2.57,-0.75l5.51,0.24l0.45,0.5l0.67,-0.02l0.37,-0.8l1.53,-0.3l1.22,-0.57l0.76,-0.01l1.14,-1.56l2.21,-1.08l1.06,-0.89l1.08,0.26l1.19,-0.2l1.41,-1.13l-0.04,-0.64l-0.21,-0.14l0.61,-0.84l-0.12,-0.59l-0.6,-0.12l0.12,-1.01l-0.51,-1.53l-0.76,-0.72l0.59,0.4l0.55,-0.12l1.07,-1.05l0.22,-0.77l0.93,-0.37l0.26,-0.41l-0.03,-0.51l-0.35,-0.32l-0.48,-0.05l-0.82,0.48l0.62,-0.87l-0.64,-0.79l-1.19,-0.23l-1.05,0.48l-0.78,-0.72l2.59,-1.67l2.08,-0.85l2.27,-1.86l0.82,-0.32l0.27,-0.48l0.99,-0.63l0.22,-0.51l-0.22,-0.9l1.19,-1.38l6.63,-5.37l5.82,-2.74l2.9,0.22l20.64,-0.13l0.14,0.78l-0.64,1.69l0.64,1.26l-0.64,3.31l0.18,0.95l1.04,1.76l0.08,0.56l-0.61,1.57l0.24,1.39l-0.09,0.81l-0.85,0.74l-0.95,2.9l0.43,0.94l0.16,1.79l0.34,0.81l-0.12,0.96l0.35,0.83l-0.88,2.4l-0.08,0.9l0.31,0.88l0.47,0.19l0.67,-0.38l0.3,-0.7l0.36,0.02l0.28,0.77l0.38,0.38l-0.3,12.86l-0.2,0.91l0.35,1.16l-3.89,12.6l0.39,0.71l-0.99,14.0l0.76,1.36l-3.35,1.89l-0.13,0.56l1.05,1.41l0.02,0.41l-0.24,0.31l-0.7,0.22l-1.07,1.31l-0.48,0.24l-0.08,0.57l-1.15,0.18l0.99,-3.16l0.06,-1.95l-0.27,-1.53l-1.04,-1.2l0.13,-0.94l-0.63,-0.29l-0.56,0.47l-0.19,0.56l0.31,1.25l0.73,0.88l0.14,2.42l-11.57,-6.36l-0.83,-1.49l-2.26,-0.33l-0.47,-0.49l-0.94,-0.35l-1.13,-1.93l0.09,-1.32l-0.18,-0.67l0.27,-0.62l-0.19,-0.64l-0.39,-0.27l0.13,-0.29l-0.24,-0.52l-1.36,-0.91l-1.07,0.03l-0.36,-1.32l-1.4,-0.99l-68.54,-0.05l-0.0,-4.37ZM787.73,169.9l0.24,-1.17l1.09,-0.13l-0.02,0.42l-1.3,0.88ZM712.63,123.92l0.15,-0.49l0.71,0.07l-0.54,0.76l-0.32,-0.34Z",
        name: "New York"
    },
    "US-HI": {
        path: "M299.29,452.24l-0.38,-1.84l-1.43,-2.18l-0.07,-0.61l1.19,-1.43l1.02,-0.51l1.22,-1.85l0.89,-0.87l0.03,-0.74l-1.18,-1.62l-0.41,-1.16l0.54,-1.35l1.78,0.6l0.3,0.64l2.59,1.48l0.76,-0.14l6.09,2.66l2.05,2.08l0.31,2.57l0.42,0.33l1.21,-0.04l0.42,1.59l0.84,0.83l2.08,1.2l-0.46,0.99l-1.43,0.8l-1.77,1.66l-3.22,1.03l-1.84,0.06l-4.08,2.68l-0.87,0.84l-0.47,1.4l-0.72,1.01l-0.56,0.37l-1.4,-1.21l-2.07,-0.51l-0.58,-0.81l-0.03,-1.73l0.48,-3.2l-0.75,-2.68l-0.49,-0.36ZM286.01,423.9l0.9,-0.55l0.27,0.17l0.79,0.82l0.62,1.38l0.7,0.4l1.78,-0.43l0.88,-0.52l1.46,0.23l0.78,0.84l0.92,0.21l0.34,0.69l2.12,0.81l0.0,0.91l-0.91,0.96l-1.17,0.65l-1.35,-0.13l-1.46,0.78l-2.14,0.2l-0.42,-0.69l-0.06,-1.65l-0.61,-1.49l-0.57,-0.24l-1.08,0.14l-1.34,-0.63l-1.06,-1.5l0.62,-1.36ZM285.63,432.65l0.71,-0.3l1.0,-0.59l0.01,0.75l-1.71,0.14ZM275.29,419.94l0.41,-0.1l0.67,0.47l2.41,0.12l1.03,0.31l0.59,-0.27l1.14,0.63l1.42,-0.01l0.44,-0.24l0.96,0.19l-0.55,0.66l-1.87,0.73l-3.55,-1.07l-3.93,0.35l0.83,-1.76ZM281.65,428.21l-0.63,0.2l-0.7,-0.21l-0.3,-1.67l-0.95,-0.78l1.95,-0.17l1.19,1.01l0.48,0.51l-1.05,1.11ZM256.79,412.83l2.28,0.06l1.55,-1.67l0.9,-0.52l0.59,0.4l0.71,1.47l0.81,0.81l-0.18,0.64l0.55,1.06l0.69,0.7l0.96,0.1l0.57,0.49l0.18,0.92l0.72,0.52l-0.49,0.34l-0.77,-0.12l-1.11,0.31l-1.25,-1.19l-0.39,-0.21l-0.53,0.14l0.01,-0.78l-0.95,-0.4l-1.35,0.61l0.12,0.44l0.71,0.48l-1.59,0.28l-0.42,-1.28l-0.62,-0.41l-1.28,-1.67l0.08,-0.82l-0.51,-0.69ZM228.76,403.72l1.13,-1.59l2.84,-1.59l0.87,0.33l1.94,-0.42l1.06,0.59l0.51,1.02l-0.79,1.72l0.1,1.09l-0.33,0.59l-1.5,1.19l-1.2,-0.5l-1.34,0.04l-1.05,-1.11l-0.84,-0.02l-0.86,-0.41l-0.54,-0.92ZM220.67,408.19l-0.26,-0.26l0.27,-0.86l0.55,-0.78l0.42,-0.11l1.38,-1.44l-0.28,1.39l-1.17,0.42l-0.67,0.83l-0.24,0.81Z",
        name: "Hawaii"
    },
    "US-VT": {
        path: "M799.62,104.23l0.87,-2.6l0.89,-0.82l0.13,-1.1l-0.25,-1.27l0.61,-1.61l-0.12,-0.89l-1.04,-1.75l-0.14,-0.75l0.64,-3.2l-0.1,-0.54l-0.54,-0.79l0.63,-1.53l-0.12,-0.93l27.44,-0.17l0.32,1.7l-1.42,1.79l-0.49,1.31l1.28,2.83l-0.62,0.38l-0.09,1.0l-1.09,1.14l-1.72,0.9l-1.0,0.94l-1.86,0.15l-0.86,0.63l-0.39,0.82l-0.19,3.34l-0.97,1.95l0.19,0.58l-1.13,1.55l-0.48,1.85l-1.49,1.31l-0.42,2.02l-0.95,1.16l-0.18,4.84l-0.55,0.97l-0.5,4.61l-0.78,0.55l-0.54,1.95l0.22,1.23l1.06,1.17l-11.47,-0.39l-0.28,-0.78l0.19,-0.94l0.3,-13.03l-0.82,-1.51l-0.39,-0.28l-0.99,0.03l-0.56,0.85l0.03,-0.8l0.81,-1.86l0.11,-0.78l-0.37,-1.02l0.13,-0.84l-0.35,-0.89l-0.17,-1.83l-0.41,-0.68Z",
        name: "Vermont"
    },
    "US-NM": {
        path: "M244.72,333.74l0.01,-98.74l93.41,0.0l0.01,8.14l-0.65,0.42l-0.36,78.56l-55.65,0.02l-0.4,0.42l0.01,0.29l0.48,1.51l0.58,1.29l0.69,0.39l-25.57,-0.07l-0.4,0.4l0.0,7.36l-12.16,0.0Z",
        name: "New Mexico"
    },
    "US-NC": {
        path: "M631.07,265.86l0.78,0.25l1.38,-0.1l0.44,-0.26l0.62,-0.73l0.07,-0.73l0.47,-0.85l-0.04,-0.52l1.34,-0.75l0.55,-0.75l2.17,-0.85l1.92,-0.12l0.63,0.25l1.24,-0.23l2.45,-1.67l0.71,-0.08l0.82,-0.85l1.15,-0.7l1.44,-0.57l1.39,0.07l0.64,-0.62l0.81,-1.35l-0.07,-0.98l1.42,0.29l0.74,-1.25l0.9,-0.45l1.05,-0.44l0.18,1.25l0.45,0.39l0.46,0.06l1.37,-0.74l1.6,-1.89l1.75,-0.48l0.68,-0.4l0.65,0.17l0.15,0.43l0.46,0.33l0.97,-0.01l0.93,-0.73l1.59,-2.77l0.39,-0.31l1.12,-0.7l1.27,0.3l0.46,-0.2l0.05,-0.46l-0.42,-0.69l0.68,-1.5l-0.2,-0.83l0.51,-0.85l6.66,0.48l17.74,0.53l62.79,-0.19l0.1,0.98l2.34,3.26l0.43,1.17l-0.61,-0.88l-0.07,-0.56l-0.71,-0.51l-0.47,-0.07l-0.38,0.58l0.45,0.56l0.2,1.21l-0.45,-0.1l-0.62,-0.77l-1.78,-1.08l-0.3,-0.47l-0.52,-0.0l-0.45,0.51l-0.02,0.61l1.1,0.64l1.05,1.3l-0.98,0.26l-1.88,-1.43l-0.46,0.4l0.04,0.4l0.96,1.04l-1.32,-0.55l-1.73,-1.12l-0.48,0.04l-0.09,0.47l0.34,0.64l1.13,0.92l-0.76,0.23l-0.19,0.52l-0.43,0.27l-1.42,0.29l-0.59,-0.77l-0.86,0.18l-0.62,-2.02l0.74,-2.06l-0.29,-0.49l-0.73,-0.35l-0.49,0.55l0.38,0.6l-0.58,0.68l-0.25,0.85l0.05,1.48l0.87,2.01l-0.51,0.93l0.4,0.4l2.68,0.12l2.13,-0.75l0.35,0.74l0.46,0.08l0.29,-0.18l1.33,0.35l0.31,-0.67l-0.26,-0.27l1.1,-0.29l1.74,-0.0l-0.28,0.86l0.45,0.39l-0.67,0.67l0.51,0.92l-0.71,-0.1l-0.34,0.61l0.42,0.43l0.67,0.22l-0.06,0.62l-0.95,-0.18l-0.34,0.61l0.46,0.61l1.09,0.13l0.4,0.3l0.47,-0.25l0.59,-1.5l0.08,-2.69l0.43,-0.27l0.38,0.44l0.81,0.23l0.37,-0.32l-0.03,-0.5l0.4,-0.32l1.01,1.72l-0.31,1.09l0.32,0.72l-0.44,0.04l-0.36,0.39l0.5,1.08l-0.12,0.2l-0.44,0.32l-0.69,-0.08l-0.58,-0.85l-0.39,0.23l-0.17,1.0l-1.28,1.06l0.02,0.45l-0.26,0.08l-0.35,0.72l-0.53,0.05l-0.23,0.25l-0.15,0.73l-0.93,0.55l-0.91,-0.04l-0.44,-0.41l-0.57,0.29l-0.61,-0.81l-0.72,-0.09l-0.16,-0.68l-0.49,-0.32l-0.55,0.2l-0.13,0.74l-0.48,0.08l-0.16,-0.42l-0.42,-0.16l-0.11,-0.48l0.71,0.03l0.45,-0.31l0.23,-0.48l-0.44,-0.57l-1.8,-0.16l-1.21,0.57l-0.19,0.4l0.59,0.47l0.06,0.83l-0.32,-0.3l-1.62,0.31l-0.86,-0.55l-1.26,-0.23l-1.44,-0.56l-0.81,-0.6l-0.5,-0.0l-0.12,0.48l0.25,0.54l0.76,0.57l0.15,0.52l0.57,0.26l0.35,-0.18l0.44,0.1l1.3,0.81l2.03,0.8l2.85,0.73l0.26,0.36l-0.11,0.3l-0.83,-0.15l-0.46,0.53l-1.62,0.8l0.16,0.66l1.41,0.37l-2.75,2.05l-0.95,-0.04l-0.46,-0.24l-1.15,-1.07l-0.72,-0.32l-0.83,-1.03l-0.56,-0.24l-0.46,0.11l-0.03,0.47l2.19,3.16l2.24,0.74l1.03,0.63l1.9,-1.34l0.33,0.46l0.93,0.49l0.52,-0.47l-0.29,-0.69l0.61,0.26l0.06,0.46l0.34,0.31l1.55,-0.33l0.07,0.62l-0.28,0.16l-0.4,-0.25l-0.37,0.25l-0.16,0.69l-1.19,1.14l-0.16,0.59l-0.46,-0.12l0.03,-0.65l-0.83,-0.7l-0.51,0.36l-0.04,0.58l-0.39,-0.6l-0.71,-0.01l-0.97,0.61l-0.23,0.3l0.12,0.23l-1.72,-0.14l-2.68,0.89l-0.34,-0.84l-0.62,-0.45l-0.47,0.39l0.13,0.96l-0.46,-0.09l-0.34,0.35l0.02,0.3l-1.1,1.13l-0.92,0.47l-0.31,-0.24l0.46,-0.39l0.14,-0.7l-0.67,-0.87l-0.01,-0.48l-0.4,-0.36l-1.01,-0.28l-0.25,0.42l0.13,1.0l0.1,0.29l0.49,0.19l0.11,0.42l-0.79,0.09l-0.25,0.65l0.44,0.64l0.57,0.26l-0.06,0.18l-2.1,0.89l-2.18,1.71l-2.56,2.97l-0.76,1.76l-0.49,-1.33l-0.48,-0.28l-0.4,0.4l0.29,2.16l-0.09,1.1l-0.93,1.57l-3.31,-0.56l-1.34,0.25l-0.14,-0.41l-0.5,-0.3l-0.68,0.73l-1.84,0.55l-0.47,-0.13l-16.83,-15.97l-0.9,-0.2l-16.57,-0.35l-0.1,-2.25l-2.31,-2.76l-0.44,-0.01l-1.2,0.78l0.18,-0.9l-0.65,-0.61l-20.24,-0.86l-0.53,-0.31l-0.63,0.28l-0.33,0.47l-3.74,0.94l-0.34,0.49l-0.62,0.35l-0.38,-0.19l-0.5,0.1l-4.54,1.41l-18.63,0.23l0.35,-3.53l0.7,-0.61ZM761.81,249.9l0.04,0.15l0.02,0.05l-0.09,-0.12l0.04,-0.08ZM754.42,270.87l0.07,-0.12l0.03,0.03l-0.1,0.09ZM752.17,270.3l0.0,-0.07l0.05,0.06l-0.05,0.01ZM760.06,243.17l0.28,-0.11l0.02,0.2l-0.23,0.0l-0.06,-0.09Z",
        name: "North Carolina"
    },
    "US-ND": {
        path: "M428.09,7.99l1.98,6.42l-0.67,1.34l-0.19,0.98l0.53,2.22l-0.32,1.08l0.43,1.83l-0.22,1.37l0.13,1.64l1.37,3.67l0.44,0.49l-0.1,0.88l0.36,1.42l0.64,0.71l0.84,1.89l0.29,1.26l0.27,0.28l0.08,2.07l-0.25,1.45l0.41,0.66l-0.11,2.44l0.33,1.83l0.01,3.3l0.49,1.44l0.49,0.23l-0.34,0.75l-0.23,1.56l0.31,1.49l-0.21,1.58l0.68,1.04l0.13,1.95l0.39,0.47l0.07,0.55l1.76,2.35l0.07,1.95l0.47,0.98l0.13,1.24l-0.3,1.2l0.21,1.52l-115.8,-0.01l-0.04,-59.52l105.46,-0.0Z",
        name: "North Dakota"
    },
    "US-NE": {
        path: "M408.75,124.69l3.79,2.38l2.08,0.8l0.51,0.53l1.2,0.36l1.29,-0.16l0.51,-0.4l0.37,-0.91l0.48,-0.16l0.98,0.2l0.73,-0.12l0.71,0.26l1.3,-0.38l1.54,0.25l3.39,-0.47l2.26,1.76l1.36,0.16l1.49,0.7l1.41,0.11l0.83,0.97l1.37,0.17l-0.03,0.85l0.82,0.68l0.18,0.62l0.57,0.54l3.19,0.61l0.15,0.53l-0.27,1.58l1.03,1.72l-0.23,1.32l0.16,0.64l1.09,0.98l0.26,1.47l0.56,0.64l1.05,0.65l-0.01,1.58l1.36,1.81l-0.56,1.94l0.3,2.63l0.5,0.53l0.84,-0.13l-0.04,1.02l1.12,0.48l-0.47,1.89l0.2,0.48l0.96,0.35l-0.54,0.57l-0.11,1.17l0.32,0.48l0.51,0.21l0.1,1.17l-0.28,0.65l0.2,0.51l-0.08,0.5l0.57,0.74l0.2,1.59l-0.26,1.1l0.17,0.62l-0.55,0.73l-0.0,0.73l0.39,0.76l1.14,0.58l-0.07,1.39l0.21,0.72l0.99,0.44l0.01,0.67l0.43,0.61l0.1,0.77l0.45,0.88l-0.34,0.61l0.1,0.24l0.32,0.24l0.79,0.0l0.71,0.86l0.98,0.21l-0.15,0.82l1.12,1.41l-0.23,0.91l0.27,0.7l-102.78,0.0l-0.01,-18.05l-0.4,-0.4l-30.79,-0.0l0.01,-36.63l86.2,0.0Z",
        name: "Nebraska"
    },
    "US-LA": {
        path: "M478.53,322.47l0.03,-17.05l43.98,-0.05l0.27,0.67l1.15,0.56l-0.86,0.95l-0.39,1.71l0.39,0.66l0.93,0.24l-1.0,0.21l-0.49,0.67l0.28,1.13l0.81,0.74l-0.11,1.67l0.38,0.52l1.18,0.67l0.31,0.87l1.14,0.38l-0.83,0.86l-0.88,1.73l-0.61,-0.02l-0.54,0.41l-0.08,0.61l0.47,0.65l-0.25,0.79l-1.21,0.65l-1.05,1.39l-1.19,0.42l-0.66,0.63l-0.85,1.86l-0.46,2.69l-0.96,0.65l-0.46,0.61l-0.0,1.02l0.44,0.8l-0.46,1.76l-1.46,0.13l-0.45,0.44l0.17,0.83l0.46,0.5l-0.29,1.07l0.68,1.17l-1.02,0.81l-0.13,0.45l0.38,0.27l29.57,0.0l-0.85,2.5l-0.52,0.75l-0.37,1.76l0.47,0.82l-0.11,0.56l0.41,0.83l1.02,0.68l0.87,1.18l0.04,0.69l0.6,1.12l0.03,0.86l0.69,1.4l-1.44,0.12l-0.21,-0.07l-0.12,-0.71l-0.31,-0.24l-1.06,0.11l-0.93,-0.56l-1.24,0.01l-0.39,-0.77l-0.97,-0.81l-2.34,-0.61l-1.11,0.41l-1.34,1.67l-1.19,1.01l-0.43,0.72l-0.03,0.99l0.4,0.76l0.65,0.52l1.78,0.36l1.64,0.62l2.85,-0.51l1.21,-0.83l0.6,-0.74l0.22,0.36l0.78,0.41l1.33,-0.19l-0.37,0.4l-0.86,-0.16l-0.52,0.21l-0.41,0.5l-0.06,0.78l0.53,0.97l1.21,0.15l0.75,0.97l0.6,0.22l0.8,-0.09l0.49,-0.33l0.49,-0.86l0.09,-1.02l0.8,-0.36l0.51,-0.68l-0.22,0.95l0.12,0.6l0.24,0.12l-0.14,0.34l1.1,1.18l-0.14,0.73l-0.69,-0.55l-0.6,-0.13l-1.03,1.39l-0.67,0.03l-0.46,0.39l-0.08,0.81l-1.07,-0.5l-0.44,0.15l0.0,0.47l0.71,0.72l-1.31,-0.06l-0.33,0.38l0.51,0.46l0.89,1.69l1.47,0.51l0.61,0.44l-0.14,0.91l0.28,0.39l0.52,0.12l1.2,-0.19l0.53,0.21l0.15,0.4l0.59,0.32l1.1,-0.13l0.39,0.63l1.11,-0.18l0.65,0.67l-0.35,0.51l1.09,0.82l-0.3,0.43l0.28,0.52l-0.23,0.41l-0.84,0.89l-0.7,-1.07l-0.4,-0.18l-0.22,0.13l0.12,-0.61l-0.37,-0.43l-0.71,-0.37l-0.53,0.41l0.05,0.92l-0.36,0.24l-0.13,-0.78l-0.44,-0.25l-0.55,-0.96l0.02,-0.69l-0.79,-0.19l-0.46,0.33l-1.05,-0.23l-0.21,-0.44l0.14,-0.46l-0.31,-0.47l-0.43,-0.06l-0.71,0.49l-0.78,-0.07l0.17,-0.65l-0.29,-0.82l-0.52,-0.37l-0.33,0.1l0.19,-0.65l-0.32,-0.36l-0.78,-0.09l-0.26,0.34l-0.63,-0.28l-0.39,0.16l-1.99,-1.18l-1.01,-0.14l-0.47,-0.51l-0.61,0.12l-0.28,0.39l-0.16,1.07l1.35,0.9l1.24,0.35l-0.16,0.67l0.17,0.34l-0.28,0.24l0.09,0.49l-0.66,0.7l-0.08,0.51l0.29,0.73l0.25,0.13l-0.82,0.91l-1.06,0.58l-0.5,-0.85l0.28,-1.1l-0.22,-0.8l-0.43,-0.21l-0.34,0.24l-0.89,-0.92l-0.48,0.22l-0.51,-0.8l-0.53,-0.22l-0.41,0.29l-0.25,0.69l-0.7,0.13l-0.37,-0.44l-0.3,-0.03l-0.79,0.38l-0.15,0.53l0.3,0.39l-0.51,0.27l-0.23,1.08l-0.34,0.07l-0.37,0.6l-0.63,-0.06l-0.08,-0.42l-1.31,-0.48l-0.72,0.67l-1.43,-0.84l-0.24,-0.44l-0.87,-0.06l-0.29,0.42l-0.69,-0.42l0.21,-0.18l0.12,-0.86l-0.16,-0.76l-1.52,-1.16l-0.03,-0.4l-0.62,-0.62l-0.01,-0.64l0.73,-1.13l-0.27,-0.71l-0.75,-0.24l-0.39,0.55l0.1,0.25l-0.54,0.6l0.01,0.64l-1.29,-0.41l-0.34,-0.74l-1.6,0.42l-0.47,-1.74l-0.41,-0.13l-0.61,0.2l0.13,-1.17l-0.37,-0.63l-0.83,-0.21l-1.53,0.08l-0.97,0.44l-0.13,-0.38l0.72,-0.21l0.01,-0.66l-0.49,-0.56l-0.86,-0.16l-0.73,0.26l-0.77,-0.16l-0.4,0.6l-1.67,0.69l-0.49,-0.25l-0.37,0.09l-0.81,0.49l0.35,1.12l0.67,0.35l0.47,1.02l-0.9,0.08l-1.55,0.68l-2.95,-0.53l-1.05,0.08l-2.48,-0.53l-1.57,-0.65l-1.42,-0.94l-2.96,-1.07l-2.59,-0.55l-2.12,0.31l-4.64,0.06l-0.85,0.16l-1.52,0.87l-0.4,-0.47l-0.14,-0.73l1.31,-0.32l0.68,-1.37l0.06,-1.24l-0.26,-0.44l0.95,-1.06l0.3,-1.26l-0.3,-1.48l0.13,-1.15l-0.52,-0.62l-0.1,-0.76l0.81,-1.67l-0.42,-1.54l0.68,-0.62l0.31,-1.1l0.71,-0.7l0.17,-0.89l0.65,-1.3l-0.06,-1.13l0.53,-0.71l-0.51,-1.04l0.65,-0.25l0.22,-0.38l-0.65,-1.15l0.18,-0.5l-0.06,-1.19l-0.29,-0.27l-0.6,-0.03l-0.39,-1.2l-0.71,-0.69l0.29,-1.0l-0.64,-0.63l-0.22,-0.76l-0.43,-0.3l0.15,-0.77l-0.95,-0.53l-0.6,-0.74l0.27,-1.9l-0.48,-1.59l-1.01,-1.62l-1.12,-0.79l-0.42,-0.68l-0.53,-0.38ZM552.44,372.37l0.02,0.13l-0.09,0.01l0.07,-0.14ZM545.5,355.37l0.12,-0.23l0.16,-0.01l-0.02,0.15l-0.25,0.09ZM522.71,369.55l-0.6,-0.1l-1.13,-0.64l0.79,-0.72l0.86,0.55l-0.15,0.31l0.22,0.6ZM509.89,363.89l0.99,-0.28l0.38,-0.33l0.72,0.15l0.64,0.52l0.98,0.34l-0.35,0.26l-0.23,0.61l-0.48,0.08l-2.65,-1.36Z",
        name: "Louisiana"
    },
    "US-SD": {
        path: "M322.49,86.42l0.28,-0.51l-0.1,-17.59l115.66,0.01l-0.22,1.43l-0.8,1.48l-3.04,2.09l-0.48,1.15l1.55,1.99l1.01,1.86l0.52,0.33l1.77,0.27l1.0,0.77l0.53,0.9l0.0,33.83l-1.81,0.02l-0.32,0.15l-0.12,0.4l0.19,1.26l0.82,0.98l-0.04,1.19l-0.65,0.31l0.11,1.34l0.47,0.42l1.06,0.07l0.26,1.39l-0.18,0.75l-0.64,0.7l-0.05,1.51l-0.39,0.55l-0.35,1.48l-0.49,0.37l-0.73,1.62l0.46,1.03l1.19,0.91l-0.13,0.55l0.52,0.46l0.37,1.03l-1.6,-0.29l-0.29,-0.79l-0.79,-0.65l0.2,-0.45l-0.28,-0.6l-1.52,-0.24l-0.97,-1.04l-1.52,-0.14l-1.45,-0.69l-1.31,-0.14l-2.27,-1.77l-0.63,-0.08l-3.07,0.51l-1.6,-0.25l-1.19,0.37l-0.68,-0.26l-0.71,0.12l-1.14,-0.2l-0.97,0.4l-0.42,0.96l-0.35,0.26l-0.73,0.03l-3.55,-1.62l-3.98,-2.46l-86.37,-0.0l-0.05,-37.46Z",
        name: "South Dakota"
    },
    "US-DC": {
        path: "M742.58,199.53l0.49,-0.45l1.47,1.34l-0.75,0.69l-0.28,-0.93l-0.93,-0.65Z",
        name: "District of Columbia"
    },
    "US-DE": {
        path: "M763.07,185.56l0.71,-1.11l1.08,-0.7l1.09,-0.22l1.52,0.24l-0.41,0.49l-0.31,0.91l-0.67,0.76l-0.68,0.32l-0.27,0.62l-0.03,0.58l0.72,0.89l-0.41,1.44l1.47,2.46l0.98,0.76l0.46,1.36l-0.13,1.2l0.22,1.7l0.55,0.49l0.62,1.14l0.2,1.19l2.26,2.25l1.28,0.22l0.09,0.96l-0.69,0.0l-0.37,0.25l-0.16,1.19l0.14,0.13l-0.54,0.13l-0.48,0.42l0.12,0.28l-0.22,0.43l0.57,0.37l0.92,-0.4l0.56,0.42l0.29,-0.09l0.28,1.22l-9.64,0.1l-1.17,-22.43Z",
        name: "Delaware"
    },
    "US-FL": {
        path: "M578.94,340.18l39.64,-0.01l0.46,0.46l0.52,1.15l0.35,2.19l0.8,0.9l0.34,0.11l40.51,2.62l0.64,1.15l-0.14,0.82l0.29,0.92l0.3,0.41l0.53,0.16l1.39,0.02l0.59,-0.19l0.26,-0.32l0.6,-3.55l-0.57,-1.31l0.09,-1.35l0.32,-0.45l0.54,-0.16l0.23,-0.51l4.34,1.57l3.31,0.49l-0.13,0.71l-0.55,-0.12l-0.38,0.34l-0.04,1.25l1.43,1.74l0.02,0.81l0.27,0.32l-0.06,1.53l0.52,1.93l0.46,0.88l0.16,1.58l0.51,1.88l-0.08,0.46l0.45,0.82l0.18,1.23l0.92,2.11l0.26,1.29l1.64,3.26l1.04,2.73l1.36,2.42l0.06,0.54l0.43,0.36l4.04,6.55l-0.56,0.4l-0.96,-0.2l-0.08,-0.7l0.36,-0.38l0.09,-0.84l-1.73,-1.13l-0.55,0.43l0.35,2.31l0.45,0.85l0.92,3.95l5.57,11.94l0.57,2.58l1.91,4.44l-1.08,-0.43l-0.31,0.62l0.52,0.63l0.65,0.34l0.47,-0.06l0.95,0.91l1.04,2.53l-0.37,0.13l-0.23,0.47l0.24,0.37l0.58,0.26l0.38,1.5l-0.24,0.77l0.3,0.82l0.03,2.07l-0.33,0.52l-0.75,6.89l-0.42,0.78l0.24,0.61l-0.12,2.32l-0.86,1.01l-0.31,1.67l-0.73,0.38l-0.47,1.34l-0.52,0.6l-0.07,1.14l-0.51,1.27l0.16,1.47l0.21,0.2l-1.07,1.1l-0.48,0.84l-0.67,0.04l-0.42,-0.22l-1.13,0.13l-0.47,0.7l-0.72,0.14l-0.24,0.4l-0.7,0.37l-1.08,-0.08l-0.17,-0.32l-0.99,-0.25l-0.85,0.65l-2.55,0.36l-0.65,-0.57l-0.36,-0.85l0.28,-1.22l0.51,0.72l1.13,0.61l0.19,0.55l0.41,0.14l1.2,-0.35l0.29,-0.52l-0.1,-0.59l-1.08,-1.13l-1.79,-0.57l-0.59,-0.46l-0.38,-1.35l-0.53,-0.62l0.28,-0.75l-0.38,-0.35l-0.39,0.01l-0.65,-1.99l-0.37,-0.38l-0.45,-0.03l-0.18,-0.42l0.24,-0.73l-0.45,-0.6l-0.86,-0.65l-0.79,-0.22l-0.48,-0.51l-0.5,0.02l-0.75,-0.42l-1.47,-0.35l-0.31,-0.71l-0.63,-0.01l-0.1,-0.59l-0.55,-0.58l-0.25,-1.14l-0.44,-0.26l-0.09,-2.22l-0.44,-0.86l0.09,-1.17l-0.22,-0.73l-0.41,-0.77l-0.45,-0.24l-0.31,0.68l-0.7,-0.3l0.97,-0.82l0.36,-1.04l0.79,-0.86l0.57,-0.18l0.36,-0.63l-0.52,-0.5l-1.27,0.51l-0.9,0.87l-0.65,1.56l-0.98,0.08l0.05,-1.01l-0.41,-1.11l0.42,-2.68l-0.12,-0.62l-0.44,-0.36l1.48,-0.84l0.24,-0.6l-0.49,-0.52l-2.63,0.99l-0.53,-0.59l-0.3,0.11l-0.86,-0.82l-0.51,0.62l0.75,1.03l0.38,0.14l0.66,1.61l-0.75,-0.06l-0.99,-0.44l-0.41,-1.3l-0.51,-0.6l-0.29,-0.05l-1.13,-2.18l-0.45,-1.14l-0.04,-0.75l-0.85,-0.8l0.19,-0.64l-0.5,-1.52l-1.21,-1.0l0.12,-0.35l0.48,0.01l0.36,-0.27l-0.13,-0.44l0.37,-0.46l-0.24,-0.32l0.62,-1.1l2.46,-2.8l-0.46,-2.05l-0.54,-0.52l-0.82,0.19l-0.34,0.46l-0.08,1.14l0.02,-1.29l-0.24,-0.65l-0.7,-0.35l-0.83,-0.81l-1.26,-0.47l-0.18,0.45l0.18,0.44l-0.13,0.66l-0.4,0.38l0.16,0.64l1.58,0.71l0.08,0.69l-0.51,1.08l-0.0,0.64l-0.15,-0.4l-0.62,-0.31l-1.46,-1.46l-0.34,0.1l-0.12,-0.42l0.75,-1.51l0.36,-1.6l0.16,-1.1l-0.26,-1.12l0.4,-0.36l0.66,-1.38l-0.09,-0.5l0.95,-2.2l0.5,-4.05l-0.18,-1.31l0.2,-0.42l-0.05,-1.72l-1.49,-1.34l0.04,-0.33l-0.35,-0.51l0.04,-0.69l-0.62,-0.75l-0.23,-1.19l-0.57,-0.36l-1.16,0.04l-0.82,-0.29l-1.26,0.21l-0.67,-1.47l-1.14,-0.57l-0.14,-0.62l-0.81,-1.22l-0.62,-0.57l-0.53,-0.05l-1.02,-1.07l-0.59,-0.25l-0.1,-0.6l0.21,-0.95l-0.16,-0.64l-2.32,-1.29l-0.43,-0.52l-0.25,-1.0l-1.5,-1.8l-1.61,-1.11l-1.18,-0.3l-2.55,-1.74l-2.47,0.35l-0.8,-0.42l-0.93,0.2l-0.38,0.46l-1.17,0.36l-0.52,0.49l-0.07,0.43l-0.5,-0.21l-0.43,0.15l-0.2,0.26l0.55,1.01l-1.08,0.03l-1.48,0.96l-0.81,0.24l-1.34,1.08l-1.38,0.56l-0.07,-0.74l-0.58,-0.11l-0.88,0.46l-1.08,1.01l-1.8,-0.09l-1.85,0.56l-0.58,-0.06l0.05,-1.55l-0.89,-1.63l-0.84,-0.87l-1.08,-0.49l-0.14,-0.37l0.58,0.07l0.78,-0.41l0.13,-0.69l-1.12,-0.47l-0.25,0.19l-0.06,-0.55l-0.22,-0.11l0.13,-0.37l-0.43,-0.4l-1.18,0.32l-1.67,-0.79l0.55,-0.65l0.71,-0.01l1.04,-1.11l-0.65,-0.88l-0.46,0.05l-0.52,0.7l-0.34,-0.07l-0.7,0.32l-0.44,-0.72l-0.7,-0.01l-0.15,0.24l-1.22,0.43l-0.15,0.78l-2.88,-1.4l-2.77,-0.78l0.41,-0.28l1.2,0.51l0.65,-0.14l0.16,-0.51l-0.62,-0.92l0.13,-0.51l-0.57,-0.38l-0.39,0.18l-0.14,-0.34l-1.65,-0.12l-1.7,0.41l-0.22,-0.77l-0.81,0.14l-0.49,-0.23l-0.28,0.41l0.07,0.52l-1.19,0.41l-0.47,0.44l-2.76,-0.02l-1.28,0.2l0.14,-0.26l-0.29,-0.52l-1.09,-0.38l-0.42,-0.43l0.5,-0.22l0.24,-0.43l-0.11,-0.32l-0.55,-0.19l-0.61,-0.6l-0.47,0.06l0.0,0.65l-0.44,1.12l-1.04,-1.37l-0.68,-0.12l-0.39,0.62l0.47,1.44l-0.29,0.55l-1.21,0.58l-0.21,0.8l-0.45,0.1l-0.27,0.45l-0.96,0.2l0.03,-0.7l0.99,-0.62l0.2,-0.53l-0.3,-0.67l-0.94,-0.31l-0.23,-0.65l0.44,-1.24l0.1,-1.14l-0.31,-0.42l-1.45,-0.88l-1.65,-2.05l0.39,-1.09l-0.01,-0.76ZM679.8,408.73l0.23,0.88l0.68,0.46l0.62,0.02l0.79,1.42l0.63,0.6l1.34,0.82l1.27,0.31l0.55,-0.26l0.13,-0.67l0.52,-0.48l0.06,-0.89l0.81,-0.92l0.37,-1.4l-0.24,-1.35l-0.82,-1.76l-1.15,-1.27l-0.98,-0.32l-1.04,0.47l-1.94,2.11l-1.92,1.13l-0.3,0.6l0.15,0.42l0.24,0.08ZM588.98,349.59l-0.19,0.02l0.1,-0.07l0.09,0.05ZM606.35,353.24l0.57,-0.09l0.13,0.58l-0.69,-0.49ZM688.14,382.63l0.13,0.22l-0.24,0.29l0.11,-0.51ZM610.42,355.75l-0.09,-0.07l0.02,0.01l0.07,0.06ZM686.27,384.49l-0.42,-2.4l1.11,-0.97l-0.63,2.2l-0.06,1.16ZM616.92,362.57l0.09,-0.08l0.16,0.02l-0.07,0.15l-0.18,-0.1Z",
        name: "Florida"
    },
    "US-WA": {
        path: "M0.53,24.52l0.34,-0.6l0.19,-2.09l0.33,-0.65l-0.08,-0.36l-0.71,-0.6l0.92,0.2l4.82,2.2l1.32,0.07l1.16,0.46l1.17,0.97l2.19,0.53l3.54,0.07l1.09,0.5l1.46,-0.24l1.5,0.21l0.54,0.31l2.58,0.13l1.37,-0.76l0.63,0.17l0.76,0.5l0.24,0.33l0.01,0.64l0.74,0.54l0.32,0.03l0.39,-0.47l-0.11,-0.64l0.51,-0.07l0.21,0.48l0.48,0.16l0.31,0.45l-0.27,0.58l0.44,0.4l0.54,-0.15l0.54,-0.92l-0.22,-0.67l-0.62,-0.64l0.09,-0.24l0.71,-0.23l-0.16,0.86l1.09,1.79l0.51,0.39l0.15,0.69l0.6,0.71l-0.38,0.18l-1.34,2.0l-0.1,-1.27l-0.3,-0.33l-0.61,0.44l-0.63,0.11l-0.2,0.84l0.31,0.8l-0.95,1.79l-1.67,1.65l-0.73,1.48l-0.8,0.81l-0.71,1.74l0.13,0.69l0.74,0.38l0.98,-0.1l2.69,-1.02l1.09,-0.78l-0.19,-0.7l-0.67,-0.06l-2.8,1.34l-0.46,-0.17l1.34,-2.3l1.07,-1.37l2.89,-1.44l0.54,-1.54l1.43,-1.79l0.69,0.44l0.46,-0.3l-0.22,-1.67l0.76,2.59l0.26,0.17l-1.06,0.01l-0.47,0.85l-0.64,-0.59l-0.53,-0.05l-0.24,0.71l0.49,0.58l0.45,1.52l-0.56,-1.05l-0.67,-0.05l-0.31,0.74l0.12,0.72l0.6,0.48l-0.46,0.6l0.08,0.44l0.44,0.09l1.61,-0.89l0.16,0.68l0.34,0.25l-0.64,1.77l-0.07,0.44l0.23,0.53l-0.41,0.24l-0.24,0.58l0.37,0.79l-1.03,-0.4l0.74,-1.51l-0.08,-0.49l-0.37,-0.33l-1.7,1.36l-0.28,0.72l-0.05,-0.73l-0.5,-1.17l-0.5,0.11l-0.65,1.63l-1.14,0.74l-0.69,1.89l-1.46,0.59l-0.36,0.49l0.06,1.13l0.45,0.1l0.67,-0.36l-0.15,0.35l0.36,0.31l0.95,-0.2l0.25,0.61l0.63,0.29l0.44,-0.39l-0.05,-1.63l0.22,0.38l0.8,-0.36l0.9,0.88l0.57,0.25l1.17,-0.82l1.31,-1.65l0.62,-1.61l0.87,0.58l0.72,-0.03l0.39,-0.29l-0.05,-0.65l-0.2,-0.12l1.42,-0.79l0.14,-0.95l-0.65,-1.06l-0.07,-1.11l-0.52,-1.18l0.22,0.26l0.69,-0.2l0.08,-0.92l-0.39,-0.65l-0.83,-0.37l0.59,-1.17l-0.35,-1.58l0.24,-0.6l0.71,-0.74l0.29,-1.34l1.53,-0.78l0.52,-1.26l-0.61,-0.5l-0.53,0.11l-1.24,-1.0l-0.28,-0.52l-0.06,-1.36l-0.47,-0.73l0.29,-0.74l-0.15,-0.83l-1.62,-1.31l-0.75,-0.22l-0.32,-0.52l0.03,-0.49l0.68,0.13l0.46,-0.41l-0.16,-1.67l0.73,-0.4l0.06,-1.0l-0.36,-0.66l-0.43,-0.28l-0.4,-1.03l0.31,-0.88l-0.27,-0.47l-1.2,-0.57l-0.9,0.53l-0.75,-0.83l-0.29,-0.7l-0.8,-0.67l0.32,-0.47l-0.15,-0.69l0.35,-0.63l88.01,-0.0l0.2,50.37l-0.29,0.97l0.21,0.63l1.39,1.89l0.5,1.7l-0.68,0.91l-0.09,0.44l1.04,1.46l-32.49,0.04l-1.5,0.99l-3.79,0.05l-2.17,0.36l-1.51,0.0l-1.47,1.1l-4.22,0.66l-3.07,0.98l-1.49,0.96l-0.94,-0.06l-1.13,0.49l-0.97,-0.11l-0.6,0.2l-2.61,-0.36l-0.79,0.57l-1.69,0.41l-0.83,0.53l-0.82,0.18l-2.25,-0.21l-1.59,0.58l-0.52,-1.0l-0.55,-0.42l-0.82,-0.25l-4.65,-0.4l-2.32,0.37l-1.68,-0.13l-2.43,1.48l-4.34,1.43l-1.26,-0.39l-1.23,-0.02l-1.85,-0.65l-0.89,0.14l-1.08,-0.19l-0.92,-0.79l-0.08,-1.99l-0.4,-0.73l0.09,-1.04l-0.52,-2.03l-0.7,-0.73l-0.69,-1.61l-0.82,-0.71l-2.84,-1.29l-2.84,0.51l-1.36,-0.91l-0.4,-0.86l-0.7,-0.44l-2.43,0.25l-0.65,-0.14l-0.45,-0.63l-0.49,-0.04l-0.89,0.53l-0.88,-0.05l-1.03,0.59l-1.35,-1.06l-0.92,0.01l0.1,-1.24l0.64,0.55l0.64,-0.12l0.59,-0.8l0.63,0.44l0.65,-0.21l-0.04,-0.78l-0.8,-0.45l-0.5,-0.63l0.47,-0.35l0.12,-0.47l-0.41,-1.15l0.35,-0.51l-0.35,-0.82l0.08,-0.2l0.69,-0.18l0.18,0.42l0.57,0.26l0.84,-0.48l-0.24,-0.66l-0.38,-0.05l-1.41,-1.09l-0.53,0.06l-0.3,0.28l-2.07,-0.07l-0.32,-1.69l0.82,0.33l0.46,-0.18l0.16,-0.6l-0.28,-0.51l3.13,-1.19l0.3,-0.35l-0.23,-0.4l-0.51,-0.21l-2.35,-0.17l-0.38,-0.91l-0.7,-0.47l-1.31,0.12l-0.92,-4.23l-0.43,-0.78l-0.39,-0.24l-0.1,-0.63l-0.49,-0.2l-0.75,-5.21l-0.79,-2.13l-0.63,-0.47l-0.58,-1.24l-1.03,-1.0l-0.83,-0.27l-0.46,-0.75l-0.69,-2.02l-0.14,-1.56l-0.39,-0.75ZM30.4,41.91l0.32,0.6l-0.26,0.59l-0.27,-0.87l0.21,-0.32ZM35.18,22.7l-0.36,0.86l-0.01,0.61l-0.2,-1.0l0.58,-0.47ZM33.85,18.4l-0.07,-0.02l0.03,-0.04l0.05,0.05ZM33.04,18.46l-0.38,0.48l-0.36,0.01l0.22,-0.67l-0.19,-0.48l0.21,-0.13l0.49,0.8ZM31.29,22.37l1.22,-2.19l0.53,-0.14l0.2,0.62l0.79,0.57l-0.03,0.2l-0.54,-0.44l-0.48,0.0l-0.46,0.52l-0.38,-0.01l-0.18,0.73l-0.67,0.13ZM31.78,23.44l0.4,-0.07l0.76,0.32l0.15,0.25l-0.9,-0.02l-0.41,-0.48ZM33.4,25.51l0.04,0.65l0.0,0.04l-0.13,-0.25l0.09,-0.43ZM34.32,27.68l0.01,0.0l0.08,-0.04l-0.06,0.06l-0.02,-0.02ZM34.66,27.42l0.2,-0.89l1.4,0.91l0.37,0.92l-0.24,0.37l-0.42,0.01l-0.43,-1.16l-0.55,-0.25l-0.33,0.1ZM34.85,39.32l0.08,-0.98l0.17,-0.28l0.23,0.91l-0.48,0.35ZM34.0,35.06l-0.16,-0.88l0.3,-0.48l0.16,1.5l-0.29,-0.14ZM31.41,44.27l0.13,-0.22l0.06,0.01l-0.04,0.22l-0.15,-0.01ZM27.52,14.4l0.4,-0.43l0.04,0.57l0.5,0.74l-0.27,-0.0l-0.68,-0.88ZM29.15,13.76l1.05,0.54l-0.56,0.43l-0.49,-0.97ZM28.65,16.75l0.04,0.3l-0.04,0.7l0.1,0.46l-0.56,-0.25l0.45,-1.22ZM29.0,18.52l0.19,0.12l0.31,-0.0l-0.44,0.01l-0.06,-0.13ZM28.52,42.59l0.03,-0.11l0.06,0.21l-0.06,-0.05l-0.04,-0.05ZM26.27,17.69l-1.37,-0.54l-0.27,-1.6l0.38,0.05l1.24,0.95l0.27,0.38l-0.27,0.23l0.02,0.53Z",
        name: "Washington"
    },
    "US-KS": {
        path: "M459.62,181.66l0.38,0.54l0.71,0.18l0.94,0.71l0.62,-0.07l1.06,-0.69l0.41,-0.05l-0.04,0.62l0.95,0.67l0.07,1.14l-0.79,-0.2l-0.58,0.25l-0.21,0.79l-1.13,1.11l-0.12,0.91l-0.54,0.11l-0.23,0.33l0.02,0.58l1.36,1.82l1.76,1.33l0.14,0.93l0.34,0.73l0.65,0.49l0.27,0.96l1.71,0.84l0.88,0.03l0.51,0.26l0.0,38.23l-114.85,0.0l-0.18,-53.64l104.39,0.0l0.91,0.86l0.57,0.23Z",
        name: "Kansas"
    },
    "US-WI": {
        path: "M588.91,78.53l0.26,0.11l0.6,-0.13l-0.23,0.6l-0.58,-0.06l-0.05,-0.52ZM583.23,85.53l0.54,-0.33l0.56,-2.0l0.61,0.1l0.91,-0.58l0.33,-0.34l0.29,-1.02l0.51,-0.52l0.65,0.06l0.01,0.25l-0.75,-0.04l-0.26,0.5l0.16,0.28l-0.17,0.77l-0.39,0.1l-0.2,0.58l0.43,0.52l-0.28,0.49l-0.54,0.24l-0.94,1.58l-0.25,0.71l0.1,0.39l-1.29,1.84l-0.47,0.08l-0.72,-0.93l-0.09,-0.61l0.51,-1.29l0.76,-0.84ZM497.92,84.81l0.4,-0.21l0.36,-0.8l-0.33,-1.37l0.18,-1.64l0.8,-0.97l0.71,-1.98l-0.14,-0.53l-0.75,-0.86l-0.52,-1.31l-0.82,-0.38l-1.3,-0.09l-0.17,-0.4l0.14,-1.58l1.86,-1.87l0.03,-0.72l0.88,-1.29l2.08,-0.83l0.55,-0.63l1.01,-0.15l0.53,-0.64l1.19,-0.03l0.41,-0.71l0.8,-0.65l0.01,-10.84l1.08,-0.23l0.33,-0.97l0.56,-0.28l0.31,-0.55l0.77,0.7l1.65,0.7l2.73,-0.3l3.52,-1.15l2.79,-0.52l2.54,-1.76l0.3,0.33l1.39,0.02l0.51,-0.61l0.55,-0.09l0.38,-0.52l0.88,-0.47l1.08,0.02l0.51,-0.44l0.3,0.46l0.49,0.05l0.21,0.46l-0.65,1.4l-0.77,0.78l-0.17,0.9l0.23,0.61l-1.29,1.51l-0.18,0.38l0.19,0.53l0.65,0.22l0.52,-0.1l1.95,-0.73l0.77,-0.7l2.13,1.31l2.34,0.62l0.41,0.53l0.88,-0.06l1.59,0.79l1.55,3.06l0.35,0.3l15.53,3.74l4.49,2.21l1.73,0.03l1.58,0.54l1.45,-0.38l1.75,0.62l0.68,-0.04l0.69,0.39l2.21,0.32l0.82,0.46l0.43,0.81l-0.56,0.9l0.33,0.78l0.75,0.39l1.03,-0.02l0.56,0.42l1.02,0.14l1.22,1.1l-0.21,0.62l0.45,1.02l-0.46,0.68l0.27,1.13l-0.95,1.0l-0.26,1.59l0.31,0.46l0.52,0.22l1.4,-0.07l1.15,-0.52l0.13,0.2l-1.09,2.03l-0.13,1.19l1.15,1.46l0.73,0.37l-0.29,0.52l-0.15,1.13l-2.58,0.77l-0.61,0.63l-0.13,1.1l-0.88,0.92l-0.4,1.07l-0.79,0.88l-0.1,0.95l-0.4,0.62l-0.33,1.51l1.0,0.84l0.9,0.07l0.52,-0.26l0.67,-1.13l2.0,-1.08l0.64,-0.93l-0.04,-0.47l0.39,-0.73l1.31,-1.37l0.08,0.22l0.45,0.01l0.68,-0.56l0.54,0.03l0.4,-0.28l0.99,1.12l0.54,0.23l-0.57,1.8l-1.55,2.32l-0.83,3.62l-0.46,1.16l0.08,1.02l0.67,0.92l-0.0,0.39l-0.61,0.76l-0.91,0.44l-0.55,0.58l-1.36,3.28l-0.19,2.26l0.55,1.12l-0.09,1.02l-1.45,2.64l-0.15,1.83l-0.97,1.72l-0.59,2.1l0.02,0.91l0.3,0.91l-0.19,1.15l0.4,0.52l-0.4,1.42l0.79,0.77l0.22,2.12l0.97,1.43l-0.13,1.39l-0.5,1.21l0.09,2.5l-43.18,-0.37l-0.13,-0.67l-0.89,-1.61l-0.43,-0.4l-4.72,-1.12l-0.88,-1.2l-0.2,-1.46l-0.77,-1.11l-0.39,-4.21l0.14,-0.51l1.11,-1.61l0.02,-0.9l-0.64,-0.79l-1.36,-0.52l-0.53,-1.54l-0.09,-3.73l0.18,-1.47l-0.11,-0.62l-0.45,-0.66l-0.01,-1.28l-0.29,-0.99l-1.09,-0.63l-0.95,-1.44l-0.91,-0.17l-1.09,-0.74l-1.7,-0.06l-2.5,-1.76l-1.98,-3.2l-2.46,-2.03l-2.89,-0.67l-0.63,-1.12l-1.05,-0.95l-3.08,-0.6l-2.15,-1.9l-1.14,-0.7l0.53,-1.02l0.01,-1.43l0.31,-0.71l-0.22,-1.68l-0.42,-1.06ZM534.21,46.54l0.1,-0.31l0.02,0.19l-0.12,0.12ZM530.1,51.03l0.11,-0.06l0.01,0.03l-0.12,0.03Z",
        name: "Wisconsin"
    },
    "US-OR": {
        path: "M3.12,127.4l1.89,-3.81l0.87,-5.49l0.22,0.65l0.61,0.32l0.4,-0.4l-0.01,-0.64l0.28,-0.37l-0.09,-0.49l0.31,-0.44l0.55,0.77l1.14,0.1l0.18,-0.63l-0.84,-1.34l0.05,-0.79l-0.47,-0.05l-0.65,0.42l0.83,-2.89l0.84,-1.05l0.93,0.07l0.4,-0.4l-0.39,-0.63l-1.18,-0.38l0.52,-4.16l0.29,-0.42l-0.21,-1.05l0.37,-2.46l-0.03,-2.34l0.51,-1.81l0.42,0.17l0.53,-0.51l-0.51,-0.75l-0.56,-0.08l0.37,-2.38l0.38,0.12l0.51,-0.34l0.04,-0.32l-0.17,-0.47l-0.62,-0.16l-0.15,-3.39l0.75,-1.81l0.2,-2.41l-0.14,-0.37l0.45,-0.77l0.21,-0.96l-0.03,-1.8l0.24,-0.5l-0.05,-1.09l-0.28,-0.41l0.86,-1.11l-0.12,-0.62l-0.48,-0.25l-0.12,-0.48l1.07,0.3l0.63,-0.76l-0.57,-0.6l0.04,-0.55l-0.49,-0.45l-0.45,-0.09l0.22,-0.96l1.06,-1.03l-0.03,-0.46l-1.03,-0.11l-0.61,-0.99l0.33,-0.81l0.06,-1.22l-0.37,-1.24l0.7,-0.71l0.21,-1.23l-0.32,-1.76l-0.54,-1.13l1.13,0.83l0.64,0.01l0.12,0.81l0.67,0.32l0.56,-1.04l-0.47,-0.77l0.17,-0.11l0.4,0.45l0.73,0.12l1.5,-0.29l0.27,-0.4l1.35,-0.46l1.51,1.59l2.63,0.27l1.06,-0.82l0.82,-0.14l1.12,0.67l0.99,0.27l1.02,0.73l0.67,1.6l0.61,0.57l0.46,1.75l-0.08,1.14l0.41,0.77l-0.01,1.6l0.62,1.22l0.97,0.56l1.22,0.22l0.84,-0.14l1.68,0.61l1.43,0.06l1.2,0.38l4.77,-1.48l1.78,-1.17l0.87,-0.34l1.24,0.21l2.25,-0.37l4.56,0.39l0.82,0.34l0.44,0.95l0.68,0.4l1.78,-0.6l2.25,0.21l0.97,-0.21l0.8,-0.52l1.87,-0.47l0.62,-0.5l2.38,0.39l0.67,-0.2l1.02,0.1l1.13,-0.48l1.04,0.04l1.59,-1.0l2.97,-0.94l4.19,-0.65l1.41,-1.09l1.45,0.01l2.12,-0.36l3.83,-0.05l0.9,-0.33l0.68,-0.65l32.62,-0.04l0.56,1.54l1.27,1.46l1.28,0.38l1.36,0.92l0.67,0.14l1.27,2.3l0.02,0.83l-0.73,0.86l-0.45,1.27l-1.7,2.39l-0.16,1.31l-0.91,2.48l-1.77,2.43l0.09,1.28l-0.26,1.15l-1.14,1.81l-1.77,1.37l-1.19,2.39l-0.27,1.08l-1.24,1.32l0.06,0.75l-0.27,0.68l-0.04,0.61l0.3,0.76l-0.09,0.74l0.46,0.78l0.67,0.44l0.5,-0.06l0.34,-0.38l0.76,0.57l0.85,-0.18l0.33,0.84l0.82,0.54l-0.22,0.87l-0.62,0.15l-0.27,0.45l0.53,1.49l-0.55,2.34l-0.94,1.44l0.16,0.77l0.05,33.25l-111.6,0.0l-2.03,-1.84l-0.36,-1.92l-0.43,-0.71l-0.4,-1.44l0.24,-1.06l-0.18,-1.39l0.58,-1.8l-0.24,-1.67l-1.32,-1.99l-0.35,-0.06l-0.52,-1.42Z",
        name: "Oregon"
    },
    "US-KY": {
        path: "M550.67,243.16l0.47,-1.56l1.03,0.93l0.49,0.15l0.71,-0.23l0.48,-0.62l1.03,-2.31l0.14,-1.08l-0.28,-0.95l0.42,-0.65l0.09,-1.66l-0.91,-1.61l1.44,-2.02l1.01,-0.58l1.26,0.05l5.4,2.57l0.78,0.18l0.79,-0.19l0.56,-0.55l0.36,-0.9l-0.05,-0.75l-1.06,-1.73l-0.11,-0.53l0.32,-1.25l0.39,-0.36l1.01,-0.04l1.21,-0.55l2.8,-0.47l0.64,-0.35l0.28,-1.02l-1.14,-1.81l0.01,-0.48l0.29,-0.5l1.12,-0.93l0.28,-0.91l1.05,0.47l0.43,-0.17l0.75,-0.8l0.08,-0.44l-0.45,-1.26l0.86,0.7l0.74,0.24l1.6,-0.48l-0.1,0.88l0.19,0.29l0.7,0.25l1.02,-0.67l0.23,-1.03l0.98,0.01l1.22,-0.46l3.77,1.71l0.48,0.82l0.77,0.24l0.62,-0.44l0.96,-1.95l1.31,-0.28l1.42,-0.93l0.62,1.13l0.65,0.43l0.98,0.04l0.07,0.6l0.84,0.27l0.71,-0.46l0.15,-0.77l0.99,-0.39l0.17,-1.92l0.8,-0.21l0.4,-0.47l0.05,-0.5l1.16,-0.32l0.42,-0.54l0.11,1.21l0.49,0.58l1.24,0.69l1.12,0.15l0.89,0.79l0.51,-0.03l0.32,-0.41l1.04,-0.23l0.59,-0.52l0.31,-0.8l0.21,-2.03l1.06,-1.64l0.88,0.29l1.58,-0.78l0.5,-0.85l0.35,-1.5l0.31,-0.36l1.0,-0.17l1.83,-1.61l0.12,-0.76l-0.66,-2.39l2.59,-0.11l0.7,0.64l0.58,0.22l0.75,-0.17l3.17,-1.62l2.1,-0.08l0.2,-0.49l-0.17,-0.48l0.54,-1.14l-0.27,-0.41l-0.98,-0.16l0.45,-0.45l0.19,-0.6l-0.76,-1.34l1.75,-1.24l1.48,1.2l0.85,0.03l1.3,-0.54l0.61,-0.03l0.58,0.82l1.51,0.66l0.31,1.1l0.72,0.88l0.18,1.16l0.28,0.48l2.26,0.9l1.79,-0.2l1.44,0.44l1.69,1.8l0.81,0.48l1.18,0.04l0.5,-0.38l0.29,-0.61l0.96,-0.29l1.14,0.59l1.21,0.22l1.03,1.08l1.25,-0.38l1.31,0.09l0.46,-0.22l0.47,-0.77l1.12,-0.81l1.71,-0.58l0.44,1.99l0.5,0.8l2.1,1.03l1.05,0.98l0.48,0.93l-0.06,0.82l0.39,0.94l-0.06,0.98l-0.4,0.34l-0.03,0.58l-0.49,0.42l-0.08,0.49l1.59,2.5l1.05,0.93l-0.24,0.58l0.1,0.28l0.87,0.68l0.33,1.24l1.23,1.28l0.52,1.37l1.05,0.51l0.48,0.56l0.34,0.03l0.78,1.06l1.68,0.53l-5.18,4.03l-5.19,2.57l-0.54,0.68l0.01,0.98l-1.52,0.71l-0.64,0.54l-0.21,1.3l-1.98,0.72l-0.98,0.13l-0.48,0.48l-0.66,1.31l-1.55,0.23l-2.67,1.08l-1.54,0.15l-1.52,0.49l-1.85,0.97l-21.62,-0.7l-11.62,-0.07l-9.98,-0.63l-20.59,0.35l-0.52,-0.51l-3.24,-0.3l-0.36,0.16l-0.11,0.36l0.53,2.01l-0.0,0.89l-20.62,-0.01ZM548.17,243.14l0.02,-0.31l0.36,0.03l0.07,0.27l-0.46,0.01Z",
        name: "Kentucky"
    },
    "US-CO": {
        path: "M352.94,180.17l0.18,54.04l-108.39,0.0l0.0,-72.09l108.2,0.0l0.01,18.05Z",
        name: "Colorado"
    },
    "US-OH": {
        path: "M642.66,148.39l0.3,0.29l1.21,0.34l1.04,-0.1l1.4,1.11l1.98,0.56l1.19,1.2l1.15,0.38l-0.51,0.35l-1.33,0.25l-0.22,0.44l0.38,0.32l0.79,0.03l0.24,0.25l0.58,-0.03l0.67,0.28l1.5,-0.71l1.12,0.18l0.6,-0.12l1.36,0.69l0.46,-0.07l1.22,0.7l0.87,0.07l1.61,-0.84l1.74,-0.22l1.25,-0.62l1.98,-0.5l2.47,0.39l0.72,-0.05l0.42,-0.29l0.65,0.24l0.52,-0.09l1.15,-0.49l5.01,-3.84l4.93,-2.13l1.03,-0.17l1.14,-0.41l0.34,-0.33l4.86,-1.53l0.0,24.03l-0.56,0.35l-1.26,0.13l-0.58,0.73l0.1,0.61l1.0,1.57l-0.39,1.69l0.32,0.32l0.11,0.77l-0.17,0.6l-0.57,0.47l-0.43,0.88l-0.91,2.57l-0.09,1.48l-0.36,1.05l-0.58,0.29l0.09,0.96l-0.62,1.32l-0.46,0.38l-0.06,0.4l0.51,0.78l-0.39,0.54l-0.18,0.88l-2.68,1.74l-1.1,1.38l-0.63,0.24l-0.89,0.76l-1.26,0.34l-0.68,0.47l-0.63,-0.88l-1.11,-0.08l-1.52,1.2l-0.33,1.05l-1.5,0.2l-1.26,1.65l-0.15,1.6l-1.01,0.58l0.17,0.65l0.49,0.44l-0.03,0.93l-0.68,0.06l-0.38,0.83l-0.35,0.39l0.25,-0.69l-0.63,-1.21l-1.3,-0.69l-0.6,0.06l-0.57,0.42l-1.03,1.43l-0.76,2.1l-0.64,0.63l0.49,3.06l-0.89,0.01l-0.52,0.25l-0.73,2.44l-0.24,0.21l-1.21,0.1l-1.27,0.42l-0.9,-0.1l-0.5,-0.96l-1.19,-1.13l-2.0,-0.94l-0.72,-1.68l-0.1,-0.96l-0.64,-0.44l-2.27,0.74l-1.2,0.88l-0.53,0.79l-1.32,-0.08l-0.88,0.37l-0.84,-0.97l-1.34,-0.29l-0.65,-0.46l-0.77,-0.17l-1.36,0.39l-0.68,0.94l-0.65,-0.06l-2.41,-2.26l-1.71,-0.5l-1.7,0.21l-1.85,-0.71l-0.27,-1.36l-0.71,-0.88l-0.44,-1.3l-1.68,-0.82l-0.4,-0.66l-0.49,-0.31l-0.92,0.08l-1.33,0.55l-0.43,-0.04l-1.46,-1.24l-0.59,0.09l-0.62,0.48l0.42,-46.93l20.03,-0.68ZM652.53,151.94l0.37,-0.44l0.34,0.38l-0.29,0.17l-0.42,-0.1Z",
        name: "Ohio"
    },
    "US-OK": {
        path: "M385.72,277.2l-0.05,-33.66l-0.39,-0.4l-46.32,-0.01l-0.01,-8.14l129.83,0.0l-0.0,8.6l2.79,19.76l-0.69,30.12l-0.96,-0.22l-0.24,-0.3l-1.81,-0.27l-0.89,-0.75l-1.58,-0.31l-1.43,-1.7l-1.06,-0.23l-1.87,-1.33l-1.3,-0.38l-0.73,0.34l-0.26,0.71l-0.67,0.13l-0.45,0.48l-2.11,-0.2l-0.34,-0.17l-0.23,-0.54l-0.89,-0.53l-2.06,0.94l-1.03,0.14l-0.21,0.41l-0.52,0.21l-1.34,-0.67l-0.46,-0.01l-1.5,0.88l-1.01,0.03l-0.8,0.32l-0.75,1.05l-1.28,0.0l-0.39,0.34l-0.14,0.62l-1.01,-1.24l-1.46,-0.15l-0.36,-0.51l-0.95,-0.34l0.04,-0.72l-0.4,-0.45l-1.09,-0.17l-0.69,1.08l-0.54,0.06l-0.72,-0.42l-0.83,0.04l-0.55,-1.21l-0.97,-0.32l-1.05,0.44l-0.11,0.8l-0.32,0.53l-0.57,-0.09l-0.5,0.42l0.17,0.55l-0.41,1.29l-0.33,0.11l-0.43,-0.42l-0.22,-0.67l0.34,-0.64l0.04,-0.68l-0.66,-0.75l-0.74,0.13l-0.43,0.57l-0.73,-0.14l-0.82,0.75l-0.91,0.07l-0.42,-1.09l-0.71,-0.23l-0.98,0.05l-0.22,-1.16l-1.07,-0.48l-0.73,0.26l-1.88,1.67l-1.03,0.37l-0.77,-0.28l0.16,-1.4l-0.23,-0.51l-1.98,-0.57l-0.02,-1.67l-0.4,-0.52l-1.86,0.27l-2.19,-0.23l-0.58,0.21l-0.72,0.94l-0.79,0.03l-1.51,-1.43l-0.85,-0.11l-1.3,0.42l-2.31,-0.53l-1.61,-0.82l-0.92,0.19l-2.12,-0.26l-0.12,-1.67l-0.73,-0.7l-0.37,-0.81l-1.03,-0.36l-0.61,-0.66l-0.77,0.08l-0.36,1.29l-1.92,-0.55l-0.94,0.47l-0.83,-0.07l-3.28,-3.02l-0.99,-0.35l-0.65,0.06Z",
        name: "Oklahoma"
    },
    "US-WV": {
        path: "M656.31,213.62l0.4,-0.35l0.14,-0.64l0.45,-0.47l0.05,-1.36l-0.36,-1.19l0.93,-0.01l2.86,-0.65l0.47,-0.55l0.57,-2.19l1.06,0.01l0.48,-0.44l-0.07,-2.17l-0.35,-1.04l0.55,-0.45l0.8,-2.18l0.89,-1.22l0.48,-0.24l1.01,0.62l0.21,0.56l-0.29,0.97l0.58,0.5l0.79,-0.24l0.69,-1.05l0.4,0.24l0.55,-0.07l0.3,-0.4l-0.24,-0.83l0.04,-0.98l-0.52,-0.52l0.8,-0.49l0.08,-1.46l1.02,-1.47l1.59,-0.16l0.44,-1.27l1.17,-0.97l0.4,0.0l0.46,0.74l0.58,0.27l2.37,-0.92l0.94,-0.79l0.73,-0.31l1.05,-1.35l2.94,-2.05l0.61,-1.65l-0.43,-0.94l1.03,-1.77l-0.04,-0.61l0.59,-0.4l0.41,-2.86l1.17,-3.1l0.64,-0.56l0.3,-0.96l-0.12,-1.06l-0.3,-0.37l0.32,-0.78l0.02,-0.84l-1.08,-1.8l0.48,-0.3l0.81,0.06l0.32,-0.21l0.01,16.39l0.4,0.4l15.83,-0.0l-0.16,8.96l0.41,0.46l0.64,-0.24l1.72,-1.41l1.0,-0.29l0.51,-0.76l1.89,-1.32l0.43,-0.79l0.56,-0.23l0.99,0.58l0.73,-0.13l1.74,-1.86l0.64,-0.26l0.11,-0.65l0.33,0.54l1.5,0.73l1.32,0.21l0.66,-0.21l1.04,0.13l0.91,-0.58l0.43,-1.15l0.72,-0.24l1.18,0.03l1.29,-1.17l0.64,0.04l1.82,1.48l0.73,0.34l1.79,-0.23l-0.37,0.15l-0.27,0.56l0.3,0.84l1.06,0.62l-0.11,0.79l0.9,0.51l-0.17,0.97l0.2,0.41l-1.27,2.74l-7.19,-5.3l-0.63,0.07l-0.55,0.91l0.01,1.35l-0.82,1.23l-0.09,1.88l-1.73,1.68l-0.75,1.34l-0.76,0.29l-0.6,0.81l-0.29,0.12l-0.51,-0.3l-0.42,0.21l-1.78,2.4l-1.5,-0.96l-0.64,0.09l-1.35,1.94l-0.3,1.33l-0.88,0.79l-0.64,1.84l-1.22,1.58l-2.8,-0.85l-0.99,-1.67l-1.49,-0.5l-0.55,0.27l-0.28,1.13l-0.38,0.59l-0.08,1.07l-0.56,1.09l-0.52,0.27l-0.49,0.79l0.01,0.8l-1.87,1.66l-0.45,1.69l-0.84,1.5l-3.19,3.33l-1.27,2.41l-0.01,0.74l0.85,0.58l-1.17,0.87l-0.07,0.56l0.24,0.37l-2.14,1.23l-0.4,-0.62l-0.77,-0.02l-3.23,1.5l-0.81,-0.61l-1.22,-0.01l-0.58,0.69l0.2,0.98l-0.94,0.55l-0.64,-0.16l-2.19,0.43l-1.24,0.57l-1.69,-1.42l-0.65,-0.12l-0.46,0.27l-0.55,0.87l-1.06,0.22l-0.99,0.92l-0.34,0.06l-0.97,-0.1l-0.93,-0.51l-0.64,-0.67l-1.15,-0.21l-0.41,-0.68l-0.96,-0.67l-0.01,-1.04l-0.63,-0.6l0.38,-0.58l-0.17,-0.64l-0.71,-0.45l-0.79,0.07l-1.16,-0.34l-0.26,-0.56l-0.65,-0.58l-1.69,-0.93l-0.47,-1.3l-1.18,-1.19l-0.38,-1.31l-0.75,-0.6l0.17,-0.4l-0.15,-0.53l-1.08,-0.97l-1.42,-2.12Z",
        name: "West Virginia"
    },
    "US-WY": {
        path: "M213.5,86.55l108.19,-0.0l0.05,74.77l-108.23,0.0l-0.01,-74.77Z",
        name: "Wyoming"
    },
    "US-UT": {
        path: "M172.31,143.49l40.4,0.0l0.0,18.22l0.4,0.4l30.82,0.0l-0.0,72.09l-77.02,-0.06l-0.04,-90.66l5.43,0.0ZM182.46,151.58l-0.28,0.07l-0.18,0.62l1.17,2.91l-0.72,0.27l-0.34,0.74l0.04,0.51l0.39,0.31l0.78,0.07l0.31,-0.37l-0.04,-0.4l0.29,-0.17l1.02,0.85l0.34,0.71l0.63,0.55l-0.1,0.9l0.33,1.15l-0.27,0.71l0.41,0.4l0.06,0.48l1.69,1.35l0.12,0.49l0.63,0.48l0.68,1.0l0.65,-0.17l0.56,-1.54l0.33,0.94l0.01,0.91l0.62,0.75l0.06,1.17l0.24,0.33l0.98,0.29l1.47,-0.74l2.13,-1.75l0.19,-1.07l0.76,-0.48l0.69,-0.13l1.57,-1.04l0.06,-0.46l-0.63,-0.83l-0.75,-0.64l-1.36,-0.44l-0.55,-1.17l-0.61,-0.46l-0.25,-0.81l-0.83,-0.75l-0.06,-0.4l-0.4,-0.34l-0.44,0.0l0.64,-0.74l1.31,0.36l0.49,-0.25l0.75,-0.02l0.83,-1.0l-0.25,-0.83l-0.34,-0.22l-1.38,-0.02l-0.53,0.41l-0.56,0.1l-0.52,-0.08l0.11,-0.64l-0.76,-0.65l-0.59,0.1l-0.48,-0.19l-0.7,0.21l-0.33,0.99l0.36,0.69l-0.24,0.55l0.82,1.94l-0.8,0.36l-0.36,-0.28l-0.15,-0.65l0.13,-0.87l-0.49,-0.58l-0.29,-1.45l-0.73,-0.43l-0.58,-0.06l-0.36,0.25l-0.34,-0.14l-1.21,-1.17l-0.24,-0.48l0.51,-0.5l0.18,-1.16l-0.99,-1.14l-1.19,-0.09l-0.83,0.79l-2.57,0.48l-0.28,0.64l0.25,0.45l0.43,0.2l-0.16,0.29ZM194.95,161.59l0.4,0.69l-0.05,0.66l-0.45,-0.68l0.11,-0.67Z",
        name: "Utah"
    },
    "US-IN": {
        path: "M571.97,219.66l0.08,-0.22l-0.43,-0.53l0.47,-0.45l-0.14,-0.95l0.22,-0.44l0.01,-1.14l0.89,-0.52l0.0,-0.61l-0.25,-0.2l0.56,-0.2l0.32,-0.5l-0.07,-0.45l-0.83,-0.86l0.54,-0.86l0.26,0.17l0.6,-0.29l0.73,-0.02l0.52,-1.43l0.55,-0.27l0.52,-0.71l0.07,-0.67l1.49,-0.72l0.15,-0.61l-0.28,-0.75l0.62,-0.64l0.27,-1.02l0.87,-0.34l0.6,-1.53l-0.68,-2.23l0.3,-0.6l-0.02,-0.99l-0.75,-0.85l-0.38,-1.29l-0.86,-0.74l0.03,-0.4l1.02,-1.08l0.01,-0.78l-0.33,-1.08l1.05,-0.55l0.3,-0.45l0.18,-42.67l0.65,0.27l0.59,0.61l1.97,0.36l1.49,-0.15l2.68,-0.86l2.88,-1.45l31.4,0.02l-0.42,48.46l-0.77,0.91l0.16,0.85l0.6,0.67l-0.74,0.79l0.01,0.5l0.59,0.44l0.67,0.06l-0.32,0.43l-0.06,0.75l-1.62,0.0l-3.69,1.75l-1.16,-0.84l-2.84,0.11l-0.44,0.19l-0.22,0.69l0.66,2.63l-1.51,1.33l-1.15,0.26l-0.55,0.7l-0.62,2.04l-1.11,0.57l-0.93,-0.32l-0.5,0.33l-1.2,1.91l-0.42,2.63l-1.64,0.75l-0.75,-0.65l-1.12,-0.14l-1.08,-0.6l-0.22,-0.24l0.04,-0.89l-0.21,-0.46l-0.98,-0.73l-0.74,-0.19l-0.44,0.2l-0.12,0.52l0.53,0.59l-0.44,0.12l-0.77,-0.39l-0.38,0.23l-0.1,0.46l0.37,0.74l-1.04,0.41l-0.22,0.62l0.02,1.33l-1.04,0.42l-0.11,0.62l-0.26,-0.55l-1.47,-0.03l-0.61,-0.64l-0.43,-0.87l-0.45,-0.13l-1.7,1.02l-1.51,0.39l-1.32,2.22l-0.6,-0.96l-2.42,-0.93l-0.93,-0.61l-0.95,-0.26l-1.7,0.56l-0.3,-0.27l-0.13,-0.61l-0.52,-0.23l-0.58,0.44l0.01,0.78l0.34,0.81l-0.37,0.58l-0.23,0.06l0.12,-0.91l-0.37,-0.43l-0.53,-0.05l-1.42,0.49l-1.69,-0.96l-0.53,0.19l-0.3,0.62l0.44,1.34l-0.48,0.49l-0.95,-0.43ZM593.79,218.58l-0.06,0.21l-0.07,0.04l0.12,-0.25Z",
        name: "Indiana"
    },
    "US-IL": {
        path: "M518.86,173.55l0.84,-0.23l0.44,-0.61l-0.02,-1.95l-0.59,-0.85l0.14,-0.27l0.71,-0.5l2.36,-0.64l0.74,-0.5l0.76,-1.37l0.34,-1.73l1.77,-1.93l0.35,-0.79l0.09,-1.07l-0.38,-1.7l-0.59,-0.76l-1.35,-0.99l0.05,-1.44l0.83,-1.91l0.45,-0.28l4.46,-0.34l0.81,-0.28l0.89,-0.87l2.52,-0.62l1.52,-1.2l0.23,-0.61l-0.05,-0.76l0.53,-1.36l1.49,-1.09l0.38,-0.64l0.75,-3.66l-0.53,-1.96l-3.62,-2.44l-0.11,-1.24l-0.4,-0.79l-3.19,-2.29l43.47,0.37l-0.33,2.19l0.24,2.28l1.02,2.27l1.12,0.93l0.39,2.24l0.87,2.45l1.11,1.7l-0.18,43.34l-1.25,0.81l-0.18,0.62l0.42,0.95l-0.01,0.5l-0.87,0.78l-0.19,0.97l0.24,0.5l0.74,0.59l0.33,1.19l0.72,0.76l-0.31,1.47l0.68,1.97l-0.41,1.12l-0.55,0.11l-0.62,0.68l-0.13,0.85l-0.68,0.9l0.18,0.73l-1.4,0.73l-0.29,0.38l0.18,0.56l-0.35,0.49l-0.62,0.35l-0.42,0.92l-0.33,-0.07l-0.44,0.4l-0.26,-0.18l-0.54,0.24l-0.78,1.32l0.06,0.75l0.67,0.71l-1.16,0.74l0.07,0.7l-0.24,0.1l-0.2,0.54l0.02,2.3l-0.63,-0.11l-0.42,0.2l0.04,0.46l0.58,0.59l-0.29,0.1l-0.11,0.64l0.69,0.33l-0.0,0.26l-1.39,1.42l-0.37,0.97l0.4,1.12l0.56,0.6l0.2,0.8l-3.08,0.64l-1.16,0.54l-1.15,0.07l-0.83,0.77l-0.39,1.69l0.18,0.77l1.03,1.67l-0.25,0.96l-0.31,0.29l-0.86,-0.07l-5.39,-2.57l-0.96,-0.17l-0.83,0.11l-1.28,0.73l-1.66,2.32l-0.04,0.48l-0.33,-0.2l-0.2,-0.66l-0.36,-0.19l-1.01,0.23l-0.13,0.53l0.21,0.46l-0.72,-0.58l0.04,-0.56l-1.21,-1.93l-0.27,-0.96l-0.61,-0.36l0.0,-0.3l0.97,-1.0l0.29,-0.88l-0.2,-0.88l-1.08,-1.75l0.11,-1.25l-0.24,-1.4l-1.94,-1.01l-1.19,-1.87l-1.68,-0.83l-1.43,-1.24l-1.41,-0.25l-1.56,-0.94l-1.13,-1.14l-0.8,-0.49l-1.9,-2.16l-0.15,-1.56l2.8,-5.38l-0.0,-1.91l1.09,-1.61l-0.28,-0.8l-2.33,-1.44l-1.48,-0.34l-0.85,-0.43l-1.24,0.28l-0.92,1.11l-0.44,0.19l-0.4,-0.14l-0.99,-1.61l-0.26,-1.28l0.21,-0.73l-0.41,-0.79l-0.12,-1.38l-0.66,-1.21l-0.8,-0.83l-3.58,-2.4l-0.78,-1.43l-3.91,-3.26l-0.51,-1.62l-0.86,-1.07l0.1,-1.31l-0.78,-1.3l-0.4,-2.98l0.34,-2.4l0.65,-0.98Z",
        name: "Illinois"
    },
    "US-AK": {
        path: "M78.48,405.02l0.26,-0.21l0.65,-0.01l0.35,-0.11l0.11,-0.08l0.15,-0.28l-0.02,-0.19l0.16,-0.1l-0.05,-0.14l0.12,-0.08l0.36,0.19l0.27,0.01l0.41,-0.12l0.32,-0.2l0.27,-0.1l0.21,-0.18l0.05,-0.13l0.12,-0.04l0.05,-0.19l0.25,-0.26l0.57,-0.29l0.33,-0.09l0.46,-0.23l0.15,0.01l-0.01,0.08l0.42,0.22l1.18,0.12l1.04,-0.29l0.2,-0.63l-0.26,-0.23l-0.63,-0.24l0.75,-0.35l0.39,-0.09l0.21,-0.1l0.4,-0.03l0.15,0.15l0.17,0.08l0.37,-0.21l0.02,0.03l0.18,-0.07l0.19,-0.22l0.61,-0.33l0.12,-0.14l0.49,-0.11l0.83,-0.11l0.85,-0.05l0.28,0.21l0.11,0.02l-0.22,0.23l-0.04,0.11l-0.1,0.5l0.05,0.32l-0.58,0.14l-0.39,0.19l-0.05,0.09l0.34,0.61l0.75,0.02l0.32,0.37l0.34,0.19l0.41,0.08l1.0,-0.1l0.3,0.11l0.57,0.03l0.38,-0.06l0.31,-0.12l0.43,-0.0l0.04,0.25l0.21,0.25l0.46,-0.04l0.12,-0.15l0.25,-0.06l0.25,0.11l0.37,0.01l0.5,-0.2l0.54,0.11l0.08,0.22l0.07,0.01l0.01,0.11l0.37,0.1l0.43,-0.09l0.24,-0.37l-0.06,-0.12l0.11,-0.07l0.17,-0.27l-0.01,-0.07l0.5,-0.74l0.1,0.0l0.36,0.26l0.3,0.05l-0.14,0.17l0.23,0.36l0.38,0.07l0.38,-0.14l0.33,-0.48l0.09,-0.36l-0.01,-0.3l-0.06,-0.12l-0.39,-0.47l0.69,0.38l0.28,0.04l0.53,-0.01l0.55,-0.12l0.67,-0.05l0.29,-0.14l0.13,-0.18l0.07,-0.25l-0.01,-0.58l-0.06,-0.22l-0.27,-0.35l0.02,-0.47l-0.11,-0.05l-0.31,-0.04l-0.34,0.13l-0.28,-0.0l-0.21,0.08l-0.16,0.15l-0.16,-0.05l-0.36,-0.26l-0.37,-0.12l-0.99,0.11l-0.26,0.07l-0.15,0.1l-0.34,0.51l-0.08,-0.0l-0.29,-0.03l-0.12,-0.08l-0.13,-0.25l-0.22,-0.05l-0.58,-0.41l0.02,-0.2l0.17,-0.2l0.07,-0.3l0.2,-0.18l0.43,0.01l0.29,-0.16l0.05,-0.54l-0.3,-0.26l-0.19,-0.03l-0.32,-0.17l-0.24,-0.02l-0.19,-0.11l-0.27,-0.05l-0.54,0.03l-0.58,0.13l-0.21,-0.19l-0.01,-0.28l-0.17,-0.23l-0.36,-0.12l-0.38,0.09l-0.21,0.45l0.05,0.04l-0.28,0.31l-0.06,-0.0l-0.04,-0.1l-0.35,-0.1l-0.62,0.01l-0.25,0.04l-0.06,0.07l-0.41,-0.17l-1.83,-0.26l-0.06,-0.66l-0.18,-0.62l-0.51,-0.9l-0.34,-0.44l-0.37,-0.33l-1.07,-0.58l-0.9,-0.7l-0.24,-0.1l-0.32,-0.05l-1.29,-0.86l-0.74,-0.39l-1.7,-0.46l-0.51,-0.54l-0.85,-0.46l0.02,-0.31l0.14,-0.18l0.1,-0.32l0.13,-0.14l0.11,-0.23l-0.0,-0.27l0.1,-0.46l0.05,-0.57l-0.03,-0.28l0.3,0.08l0.63,-0.04l0.58,0.11l2.14,-0.12l0.92,-0.2l1.62,-0.11l0.68,-0.18l0.72,-0.3l1.21,-0.72l1.1,-1.09l0.05,0.03l0.25,-0.15l0.3,-0.34l0.2,-0.39l0.02,-0.39l0.15,-0.34l0.04,-0.75l0.12,-0.04l0.22,-0.22l0.06,-0.15l-0.06,-0.4l1.41,-1.04l0.25,-0.46l0.25,-0.24l0.12,-0.21l0.25,-0.18l0.17,-0.08l0.12,0.11l0.89,-0.1l0.33,-0.18l0.15,0.01l0.42,-0.27l-0.02,-0.06l0.04,-0.05l0.95,-0.03l0.46,-0.11l0.47,-0.21l0.19,0.11l0.28,-0.26l0.39,-0.12l0.83,-0.52l0.16,-0.19l0.39,-0.16l0.37,-0.25l0.13,0.3l0.31,0.12l-0.22,0.29l0.27,0.59l0.13,0.02l0.36,-0.11l0.12,0.11l0.4,0.63l0.45,0.15l0.28,-0.38l0.0,-0.19l-0.07,-0.23l-0.17,-0.19l-0.01,-0.41l-0.14,-0.26l0.02,-0.08l0.38,0.01l0.55,-0.2l0.32,0.04l0.5,-0.2l0.22,-0.22l0.0,-0.44l-0.41,-0.17l-0.38,0.08l-0.51,-0.04l-0.44,0.16l-0.16,-0.13l-0.03,-0.15l-0.16,-0.23l0.15,-0.07l0.05,-0.11l0.47,-0.45l0.23,-0.06l0.2,0.27l0.24,0.08l0.35,0.33l0.67,-0.05l0.02,-0.27l0.51,-0.08l0.1,-0.18l0.83,0.1l1.31,-0.17l0.1,-0.12l0.99,-0.02l0.62,-0.19l1.17,-0.59l1.14,-0.76l0.57,-0.59l0.23,-0.31l0.67,-0.61l0.32,-0.2l0.13,0.2l0.31,0.13l0.19,0.19l0.92,0.04l-0.06,0.17l0.43,0.4l0.35,-0.07l0.24,-0.14l0.12,0.06l0.28,-0.07l0.47,0.12l0.02,0.03l-0.4,0.25l-0.1,0.15l-0.21,0.09l-0.69,0.05l-0.2,0.06l0.02,0.05l-0.36,0.26l-0.22,0.42l0.34,0.34l0.23,0.01l0.0,0.06l0.13,0.04l0.02,0.53l0.49,0.39l0.35,-0.12l0.17,-0.19l0.02,-0.14l0.23,-0.06l0.54,-0.01l0.29,-0.14l0.23,-0.32l0.02,-0.32l0.3,-0.27l0.07,-0.02l0.17,0.11l0.29,0.02l0.23,-0.15l0.32,0.01l0.29,-0.19l0.13,-0.36l0.13,0.0l0.42,0.31l-0.06,0.17l-0.18,0.04l-0.31,0.25l0.36,0.64l0.21,-0.02l0.26,0.31l0.14,0.04l0.31,0.01l0.4,-0.08l0.24,0.03l0.04,0.16l0.17,0.14l0.15,0.05l0.2,0.01l0.37,-0.12l0.67,-0.49l0.11,-0.15l1.18,0.07l0.65,-0.11l0.28,-0.18l0.16,0.02l0.35,0.17l0.29,-0.03l0.25,0.24l0.23,0.08l0.21,-0.01l0.08,0.1l0.32,0.15l0.36,-0.14l0.14,-0.16l0.02,-0.13l0.44,0.11l-0.26,0.27l-0.28,0.18l-0.12,0.34l0.05,0.24l-0.2,0.11l-0.18,0.2l0.17,0.6l0.5,0.12l0.34,-0.07l1.32,-0.08l-0.09,0.14l0.3,0.61l0.89,0.08l0.89,-0.02l0.29,0.07l0.48,0.3l0.34,-0.01l0.34,-0.39l-0.0,-0.06l0.32,-0.02l0.55,-0.13l0.31,0.01l0.07,-0.03l0.01,-0.16l0.23,-0.02l0.37,0.12l-0.01,0.08l0.43,0.4l0.61,-0.17l0.4,-0.0l0.19,-0.05l0.64,-0.35l0.28,0.07l0.33,-0.09l0.59,-0.02l0.09,0.1l0.37,0.06l0.33,-0.09l0.76,0.19l0.16,0.17l0.21,0.1l0.24,-0.04l0.32,0.12l0.32,-0.03l0.39,0.16l0.33,0.48l0.58,0.03l0.29,-0.11l0.21,-0.17l0.09,0.01l0.2,0.18l0.18,0.08l0.19,0.01l0.09,0.06l0.36,-0.04l0.07,0.39l0.55,0.2l0.97,0.07l1.09,0.22l0.84,-0.05l0.13,-0.11l1.38,0.07l0.66,-0.02l0.57,0.19l0.78,-0.01l0.71,0.39l0.04,-0.1l0.11,0.24l0.21,-0.05l0.26,0.16l0.43,0.13l0.02,0.16l0.31,0.07l0.35,-0.05l0.67,0.14l0.34,-0.08l0.61,0.09l0.53,-0.08l0.33,-0.25l0.28,-0.1l0.67,-0.0l0.2,0.31l0.45,-0.11l0.2,-0.37l0.17,-0.1l0.19,-0.0l0.24,-0.09l0.3,0.07l0.83,-0.07l0.15,0.22l0.53,0.07l0.07,-0.05l0.05,-0.24l0.15,0.07l0.27,0.0l0.11,0.09l0.21,0.06l0.32,-0.06l0.69,0.3l0.15,0.28l0.28,0.05l0.29,0.12l0.13,0.24l0.43,0.31l0.64,0.09l0.16,0.24l0.19,0.09l0.27,0.02l0.17,-0.07l0.73,0.23l0.43,0.26l0.26,0.33l0.23,0.13l0.42,0.1l0.34,-0.07l0.17,-0.16l0.17,0.04l0.02,52.47l0.29,0.38l1.69,0.5l0.46,-0.19l0.07,-0.12l1.32,0.53l0.4,-0.06l0.92,-0.72l1.52,-0.07l-0.3,0.83l0.08,0.41l0.47,0.51l-0.17,-0.01l-0.51,-0.56l-0.28,-0.14l-0.17,-0.18l-0.37,-0.05l-0.07,0.03l-0.15,0.19l-0.03,-0.02l-0.23,0.37l-0.33,0.22l-0.41,0.44l-1.31,0.53l-0.16,0.03l-0.94,-0.03l-0.77,-0.17l-0.48,-0.22l-0.75,-0.24l0.08,-0.18l0.03,-0.3l-0.06,-0.32l-0.12,-0.21l0.03,-0.06l-0.23,-0.22l-0.21,-0.08l-0.26,-0.24l-0.45,0.12l-0.23,0.31l0.06,0.37l-0.38,0.13l-0.97,-0.34l-1.76,-0.25l-0.56,-0.14l-0.55,-0.05l-1.47,0.23l-1.49,0.1l-0.92,0.25l-0.14,-0.23l-0.46,-0.33l-0.0,-0.19l-0.14,-0.23l-0.3,-0.11l-0.2,0.08l-0.36,-0.05l-0.15,0.05l-0.42,-0.11l-0.1,0.04l-0.31,-0.32l-0.39,-0.18l0.15,-0.15l0.13,-0.39l-0.04,-0.23l-0.09,-0.02l0.05,-0.18l0.11,-0.12l0.31,-0.08l0.16,-0.14l0.09,-0.16l0.02,-0.34l-0.19,-0.29l-0.39,-0.04l-0.46,0.16l-0.27,0.31l-0.27,0.2l-0.1,0.21l-0.42,0.22l-0.29,0.44l-0.19,0.11l-0.2,0.2l-0.17,-0.02l-0.16,-0.1l-0.22,-0.24l-0.57,-0.2l0.35,-0.45l0.0,-0.43l-0.48,-0.25l-0.4,0.18l-0.05,-0.1l-0.11,-0.01l-0.15,-0.17l-0.17,-0.05l-0.11,-0.32l-0.26,-0.17l-0.06,-0.16l-0.45,-0.27l-0.34,-0.04l-0.11,0.04l-0.34,0.32l-0.12,-0.12l-0.2,0.07l-0.11,-0.05l-0.06,-0.09l-0.01,-0.27l0.24,-0.09l0.02,-0.05l0.61,0.02l0.33,-0.1l0.14,-0.65l-0.29,-0.26l-0.33,-0.09l-1.02,0.02l-0.19,0.09l-0.25,0.24l-0.4,0.24l-0.22,0.2l-0.15,-0.1l-0.43,-0.05l-0.34,0.16l-0.15,-0.14l-0.32,0.21l-0.08,-0.07l-0.1,0.02l0.04,-0.19l-0.14,-0.26l-0.1,-0.06l-0.06,-0.33l-0.22,-0.08l-0.26,0.03l-0.2,-0.59l-0.39,-0.07l-0.24,0.14l-0.27,0.38l-0.25,0.2l-0.23,0.28l-0.45,-0.14l-0.99,0.34l-0.0,0.23l-0.34,0.44l0.34,0.43l-0.5,0.07l-0.49,0.23l-0.22,0.39l0.16,0.2l-0.16,0.38l0.37,0.4l0.24,0.0l-0.34,0.27l-0.19,0.31l-0.02,0.08l0.19,0.44l0.43,0.05l0.56,-0.39l0.13,0.04l0.07,0.18l0.16,0.03l-0.05,0.24l-0.38,0.2l-0.08,0.19l0.02,0.15l-0.15,0.18l0.24,0.38l-0.05,0.26l-0.12,-0.04l-0.26,0.31l-0.08,0.01l-0.0,0.06l-0.04,-0.02l-0.03,0.05l-0.33,-0.06l-0.38,0.07l-0.23,-0.13l-0.18,-0.01l-0.12,-0.38l-0.42,-0.05l-0.24,0.09l-0.18,0.14l-0.05,-0.22l-0.21,-0.26l-0.31,-0.09l-0.24,0.06l-0.26,0.31l-0.05,0.32l0.04,0.32l-0.15,0.06l-0.07,-0.08l-0.31,-0.15l-0.42,0.16l-0.13,0.4l-0.28,0.11l0.02,0.27l-0.32,-0.09l-0.36,0.17l-0.09,0.23l0.04,0.18l-0.19,0.05l-0.21,-0.18l-0.1,0.03l-0.27,0.2l-0.34,0.53l-0.11,-0.18l-0.13,-0.01l-0.23,0.06l-0.38,0.22l-0.24,0.37l0.16,0.27l-0.37,0.23l-0.04,0.09l-0.35,0.19l-0.15,0.2l-0.13,-0.06l-0.26,0.02l-0.36,-0.11l-0.21,-0.01l-0.19,0.06l-0.07,0.29l-0.33,-0.05l-0.38,0.15l-0.16,0.13l-0.25,0.08l-0.37,-0.16l0.22,-0.12l-0.04,-0.25l0.12,-0.03l0.21,-0.16l0.42,0.03l0.18,0.12l0.25,0.06l0.39,-0.28l-0.0,-0.31l0.12,-0.02l0.2,-0.18l0.1,-0.01l0.33,-0.39l-0.01,-0.08l0.2,-0.32l0.28,-0.21l0.01,-0.63l-0.34,-0.17l-0.45,0.07l-1.31,0.75l-0.63,-0.21l-0.17,-0.11l0.46,-1.1l0.98,-0.93l0.18,-0.37l0.05,-0.39l0.1,-0.04l0.19,-0.25l0.09,-0.9l-0.04,-0.18l-0.15,-0.22l-0.11,-0.31l0.17,-0.13l0.68,-0.1l1.07,-0.74l1.01,-0.53l0.23,0.32l0.36,0.2l0.63,0.11l0.25,-0.04l0.63,-0.28l0.13,0.01l0.38,0.18l0.41,0.02l0.21,0.09l1.13,0.18l0.3,0.16l0.26,-0.01l0.25,-0.58l-0.2,-0.33l-0.18,-0.17l-0.3,-0.16l-0.33,-0.06l-0.37,0.08l-0.46,-0.23l-0.47,-0.07l-0.9,-0.48l0.19,-0.21l0.17,-0.35l0.28,-0.13l0.18,-0.26l1.3,-0.39l0.22,-0.14l0.05,-0.07l-0.18,-0.63l-0.84,-0.09l-0.87,0.17l-0.38,0.19l-0.56,0.47l-0.15,0.25l-0.06,0.32l-0.77,-0.05l-0.18,-0.12l-0.35,0.16l-0.11,-0.01l0.03,-0.1l-0.48,-0.5l-0.08,0.02l-0.24,0.16l-0.15,0.28l-0.17,0.02l-0.13,0.18l-0.44,0.16l-0.28,0.05l-0.37,0.21l-0.18,0.19l-0.27,0.44l-0.53,0.15l-0.22,-0.02l-0.36,0.07l-0.22,0.1l-0.41,0.33l-0.23,0.09l-0.35,0.46l-0.07,0.29l0.03,0.17l-0.22,0.07l-0.31,0.24l-0.15,0.05l-0.13,0.13l-0.14,0.25l-0.44,0.28l-0.33,0.34l-0.16,0.34l0.04,0.38l-0.22,0.31l-0.22,0.08l-0.18,0.13l-0.4,-0.01l-0.06,-0.08l-0.18,-0.05l-0.25,-0.21l-0.11,-0.03l-0.53,0.02l-0.33,0.15l-0.08,0.07l-0.12,0.39l0.4,0.34l0.24,-0.07l0.06,0.12l0.27,0.22l0.39,0.14l0.36,0.31l-0.21,0.23l-0.08,0.21l-0.23,0.08l-0.58,-0.02l-0.71,0.1l-0.31,0.16l-0.19,0.25l-0.01,0.09l-0.39,-0.08l-0.25,0.39l-0.01,0.21l-0.14,-0.12l-0.09,0.01l-0.56,0.46l-0.04,0.07l0.12,0.23l-0.32,-0.04l-0.26,0.12l-0.17,0.43l0.15,0.12l-0.23,0.16l-0.44,0.07l-0.39,0.24l0.08,0.4l-0.09,0.17l-0.04,0.31l-0.33,0.28l0.07,0.14l-0.11,0.17l0.03,0.09l0.17,0.16l0.07,0.36l0.24,0.24l0.34,0.04l0.24,-0.13l0.14,-0.14l0.44,0.08l0.51,-0.03l0.14,0.19l0.32,0.18l0.21,0.05l0.2,-0.02l0.09,0.18l-0.16,0.44l-0.35,0.15l-0.26,0.31l-0.36,0.06l-0.42,-0.01l-0.3,0.2l-0.07,0.27l-0.08,0.04l0.01,0.1l-0.16,0.0l-0.35,0.19l-0.01,0.47l-0.04,0.04l-0.58,0.27l-0.16,0.14l-0.07,0.2l0.01,0.18l-0.12,-0.02l-0.01,0.04l0.12,0.02l-0.0,0.01l-0.46,0.03l-0.09,0.31l-0.15,0.02l-0.12,0.25l-0.29,0.06l-0.22,0.18l-0.55,-0.05l-0.4,0.1l-0.06,0.04l-0.05,0.23l-0.05,0.01l-0.16,0.4l-0.22,-0.02l-0.53,0.29l-0.15,0.34l-0.25,-0.16l-0.34,-0.05l-0.11,0.03l-0.2,0.14l-0.09,0.14l-0.1,0.42l-0.26,0.06l-0.04,0.31l-0.33,0.12l-0.5,-0.09l-0.13,0.17l-0.1,0.03l-0.08,0.27l-0.14,-0.01l-0.37,0.18l-0.04,0.07l-0.31,0.14l-0.37,0.31l-0.3,0.13l-0.19,0.24l-0.03,0.33l0.32,0.36l0.19,0.05l-0.09,0.06l-0.02,0.2l-0.96,0.1l-0.18,0.16l-0.07,0.19l-0.17,-0.03l-0.2,0.35l-0.12,0.01l-0.33,0.29l-0.29,-0.0l-0.07,0.21l-0.2,-0.18l-0.22,-0.11l-0.4,0.03l-0.28,0.25l-0.07,0.29l-0.22,0.23l-0.17,0.03l-0.0,0.14l-0.38,-0.08l-0.63,0.23l-0.17,0.18l-0.52,0.25l-0.24,0.4l-0.23,-0.04l-0.2,0.03l-0.37,0.2l-0.38,0.39l-0.05,0.11l-0.27,0.18l-0.18,0.23l-0.05,0.14l0.1,0.34l-0.06,0.03l-0.1,0.31l-0.04,-0.03l-0.02,0.11l-0.04,-0.01l-0.01,0.05l0.07,0.02l-0.07,0.06l0.07,0.17l-0.08,0.03l-0.2,-0.06l-0.31,0.17l-0.14,0.21l-0.22,0.06l-0.28,-0.01l-0.36,0.16l-0.3,0.07l-0.36,0.07l-0.14,-0.18l-0.07,0.0l-0.32,0.07l-0.19,0.14l-0.03,0.1l-0.74,-0.07l-0.48,0.29l-0.11,-0.03l-0.32,0.14l-0.12,0.22l-0.06,-0.09l0.11,-0.29l-0.05,-0.07l-0.17,-0.14l-0.27,-0.08l-0.51,-0.24l-0.01,-0.04l0.23,-0.33l0.06,-0.32l0.23,-0.42l0.37,-0.25l0.21,-0.25l0.56,-0.28l0.59,-0.47l0.29,-0.15l0.48,-0.18l0.13,0.03l0.31,-0.08l0.63,-0.3l0.24,-0.03l0.31,-0.32l-0.03,-0.07l0.21,-0.08l0.22,0.04l0.13,-0.14l0.38,0.15l0.38,-0.01l0.16,0.09l0.52,-0.47l-0.04,-0.31l-0.12,-0.28l-0.0,-0.45l0.19,-0.29l0.95,-0.99l0.33,-0.18l0.34,-0.02l0.14,-0.21l0.29,-0.24l0.18,-0.25l0.41,-0.22l0.07,0.22l0.26,0.12l0.77,0.02l0.27,-0.09l0.18,-0.14l0.12,-0.27l-0.01,-0.2l-0.14,-0.18l-0.41,-0.31l-0.17,0.05l-0.1,-0.25l-0.25,-0.17l0.23,-0.93l0.09,-0.93l0.39,-0.12l0.17,-0.13l0.31,0.05l0.32,0.15l0.37,-0.63l-0.16,-0.2l-0.22,-0.14l-0.56,-0.17l-0.26,-0.01l-0.16,0.05l-0.04,-0.19l0.27,-0.56l0.26,-0.13l0.38,-0.42l0.5,-0.38l0.47,-0.13l0.29,-0.39l-0.3,-0.28l0.01,-0.24l0.11,-0.18l0.03,-0.16l0.26,-0.12l0.17,-0.24l0.05,-0.49l0.16,-0.2l-0.05,-0.52l-0.52,-0.03l-0.25,0.18l-0.2,0.3l-0.08,0.33l-0.35,0.17l-0.21,0.37l-0.44,0.19l-0.44,0.09l-0.83,0.32l-0.72,0.29l-0.55,0.29l-0.59,0.15l-0.12,-0.05l-0.03,-0.23l-0.21,-0.33l-0.38,-0.21l0.08,-0.27l0.17,-0.25l0.42,0.07l0.1,0.08l0.13,0.36l0.21,0.2l0.05,0.03l0.28,-0.17l0.01,0.08l0.04,-0.01l0.11,-0.13l0.05,0.05l0.03,-0.03l-0.05,-0.05l0.11,-0.05l0.09,-0.18l-0.18,-0.2l0.01,-0.17l-0.11,-0.23l-0.37,-0.39l-1.08,-0.29l-0.33,-0.43l-0.64,0.24l-0.02,0.27l0.16,0.29l-0.14,0.29l-0.44,-0.23l-0.27,0.09l-0.17,0.65l0.07,0.17l-0.26,0.17l-0.05,0.07l0.04,0.07l-0.2,0.31l0.09,0.43l0.41,0.82l0.04,0.23l-0.37,-0.06l-0.01,-0.09l-0.05,0.03l-0.14,-0.16l0.04,-0.03l-0.31,-0.46l-0.71,-0.92l-0.29,-0.29l-0.33,-0.21l-0.04,-0.24l-0.14,-0.22l-0.29,-0.13l-0.48,0.07l-0.37,0.24l0.03,0.18l-0.09,0.14l-0.15,-0.2l-0.14,-0.09l-0.23,-0.06l-0.26,0.03l-0.09,-0.04l-0.03,-0.25l-0.23,-0.31l-0.03,-0.12l-0.34,-0.19l-0.36,0.02l-0.17,0.07l-1.26,0.83l-0.38,0.01l-0.17,0.05l-0.73,0.38l-0.19,0.0l-0.14,-0.1l-0.2,0.07l-0.19,0.21l-0.04,0.25l-0.23,0.35l-0.52,0.22l-0.08,-0.08l0.33,-0.29l-0.02,-0.57l-0.1,-0.1l-0.25,-0.09l0.0,-0.32l0.51,-0.33l0.26,-0.37l-0.12,-0.37l-0.33,-0.2l-0.36,0.0l-0.14,0.09l-0.54,0.01l-0.03,-0.08l0.12,-0.24l0.04,-0.43l0.38,-0.29l0.26,-0.13l0.18,-0.23l-0.04,-0.42l-0.45,-0.58l-0.14,-0.44l-0.41,-0.6l-0.27,-0.31l-0.06,-0.38l-0.35,-0.32l-0.04,-0.1l0.08,-0.19l0.06,-0.47l0.14,-0.13l-0.17,-0.42l-0.26,-0.09l-0.15,0.02l-0.1,0.03l-0.06,0.15l-0.11,-0.1l0.2,-0.32l0.09,-0.29l0.17,-0.12l0.14,-0.23l0.03,-0.24l0.24,-0.17l0.21,0.02l0.37,-0.18l0.13,-0.16l0.02,-0.72l-0.1,-0.05l-0.31,-0.02l-0.28,0.13l-0.19,-0.17l-0.37,-0.08l-0.35,0.27l0.08,0.3l-0.29,0.15l-0.12,0.2l-0.09,0.36l-0.24,0.39l-0.16,0.07l-0.05,0.11l-0.21,0.22l-0.25,0.13l-0.06,0.1l0.05,0.02l-0.16,0.19l-0.32,0.23l0.22,0.46l0.53,0.16l-0.04,0.31l0.06,0.22l-0.13,0.02l-0.24,-0.08l-0.56,0.34l-0.89,0.4l-0.74,0.14l-1.0,0.15l-0.84,0.01l-0.68,-0.16l0.28,-0.4l-0.31,-0.28l0.03,-0.06l-0.05,-0.0l-0.04,-0.15l-0.88,-0.39l-0.37,-0.53l-0.36,-0.21l-0.07,-0.48l-0.52,-0.03l-0.13,0.1l-0.67,-0.22l0.25,-0.32l0.06,-0.29l-0.09,-0.26l-0.18,-0.16l-0.17,-0.05l0.22,-0.16l0.11,-0.16l0.04,-0.33l0.34,-0.27l0.06,0.08l0.28,0.18l0.64,0.03l0.38,0.12l-0.28,0.29l-0.14,0.23l-0.02,0.07l0.05,0.02l-0.06,0.51l0.08,0.07l0.4,0.06l0.08,-0.03l0.51,-0.48l0.39,-0.06l0.2,-0.17l0.14,-0.32l0.18,-0.1l0.02,0.59l0.19,0.29l0.18,0.12l0.23,0.05l0.39,-0.06l0.27,-0.11l0.62,-0.39l0.18,-0.18l0.09,-0.18l-0.0,-0.36l-0.06,-0.12l0.08,-0.15l-0.16,-0.16l-0.3,-0.17l-0.0,-0.4l-0.22,-0.24l-0.28,-0.07l-0.12,-0.35l-0.12,-0.04l-0.29,0.01l-0.21,0.08l-0.12,0.15l-0.19,0.06l-0.24,0.17l-0.15,0.22l-1.2,-0.05l-0.43,0.05l-0.1,-0.18l-0.2,-0.14l-0.46,-0.07l-0.24,0.05l-0.1,-0.07l0.25,-0.11l0.16,-0.66l-0.37,-0.18l-0.31,0.05l-0.41,-0.02l0.02,-0.47l-0.27,-0.21l0.03,-0.16l0.22,-0.09l0.22,-0.27l0.46,-0.06l0.14,-0.17l0.18,-0.08l0.18,-0.18l0.21,-0.73l-0.14,-0.17l-0.21,-0.12l-0.23,-0.03l-0.39,0.28l-0.22,0.31l-0.4,0.1l-0.22,0.14l-0.17,0.21l-0.3,0.16l-0.09,0.22l-0.3,0.26l0.05,0.04l-0.1,0.3l-0.3,0.22l-0.14,0.29l-0.04,-0.25l0.06,-0.19l-0.36,-0.28l-0.5,-0.11l0.25,-0.22l0.09,-0.38l-0.06,-0.23l-0.14,-0.19l-0.31,-0.16l0.32,-0.11l0.0,-0.67l-0.11,-0.04l0.13,-0.07l0.32,-0.01l0.31,-0.14l-0.12,-0.47l0.12,-0.09l-0.12,-0.17l-0.22,-0.16l-0.11,-0.24l0.17,-0.4l0.32,-0.24l0.49,-0.65l0.39,-0.39l0.18,-0.3l0.52,-0.44l0.3,0.0l0.26,0.29l0.23,0.07l-0.08,0.2l0.4,0.29l0.34,-0.09l0.54,-0.41l0.02,-0.37l-0.04,-0.09l-0.18,-0.16l0.02,-0.17l-0.26,-0.15l0.69,-0.64l-0.17,-0.68l-0.37,0.01l-0.38,0.28l-0.24,-0.53l0.32,-0.52l0.27,-0.01l0.18,0.09l0.25,-0.05l0.37,0.09l0.3,-0.11l0.13,-0.47l-0.17,-0.33l-0.2,-0.16l-0.18,-0.07l0.03,-0.03l0.76,-0.21l0.41,0.03l0.81,0.25l0.07,0.16l-0.25,0.11l-0.22,0.26l-0.05,0.2l0.19,0.45l0.48,-0.07l0.1,-0.1l0.38,-0.17l0.29,-0.24l0.29,0.31l0.41,0.04l0.14,-0.07l0.7,-0.06l0.9,-0.54l0.18,-0.2l0.06,-0.15l0.37,-0.1l0.35,-0.26l0.72,-0.88l0.24,-0.19l0.33,0.29l1.72,-0.21l0.38,0.07l0.19,-0.06l0.09,0.03l0.28,-0.03l0.15,-0.09l0.64,-0.13l0.18,-0.09l0.45,-0.38l0.15,-0.22l0.15,-0.07l0.27,-0.3l0.17,-0.11l0.3,-0.46l0.09,-0.43l-0.01,-0.19l-0.16,-0.52l-0.4,-0.75l-0.06,-0.75l-0.09,-0.35l-0.16,-0.23l-0.47,-0.3l-0.17,-0.18l0.06,-0.1l-0.08,-0.08l0.27,-0.03l0.24,-0.12l0.11,-0.11l-0.01,-0.06l0.64,-0.47l0.18,-0.33l0.06,-0.45l-0.07,-0.27l-0.42,-0.59l-0.14,-0.11l-0.22,-0.08l0.13,-0.13l-0.18,-0.41l-0.36,-0.11l-0.24,0.07l-0.24,-0.02l-0.28,0.07l-0.15,0.25l-0.35,0.22l-0.27,0.42l-0.2,0.02l-0.25,-0.07l-0.29,-0.2l-0.4,-0.05l-0.41,0.31l0.03,0.06l-0.38,0.24l-0.34,-0.03l-0.14,0.05l-0.07,0.1l-0.36,0.2l-0.18,0.25l-0.78,0.34l-0.44,0.36l-0.14,0.25l-0.17,-0.28l-0.61,-0.34l-0.72,-0.58l-0.5,0.11l-0.44,0.25l-0.15,0.22l-0.7,-0.18l-0.58,-0.01l-0.49,0.11l-0.85,0.0l-0.27,-0.1l-0.28,0.02l-0.8,0.37l-0.3,-0.07l-0.5,0.08l-0.21,-0.1l-0.3,0.24l-0.06,-0.0l0.03,0.03l-0.05,-0.01l-0.11,0.13l0.01,0.06l-1.33,-0.33l-1.47,-0.2l-0.47,-0.13l-0.59,-0.07l-0.49,-0.23l-0.25,-0.32l0.22,-0.13l0.12,-0.27l-0.22,-0.77l-0.31,-0.23l-0.58,-0.24l-0.01,-0.05l0.37,-0.1l0.34,-0.35l0.1,-0.31l0.07,-0.03l0.75,0.16l0.26,-0.02l0.2,-0.08l0.11,-0.61l-0.13,-0.15l-0.27,-0.19l-0.44,-0.16l-0.47,-0.05l-0.12,0.04l-0.8,-0.28l-1.13,-0.12l-0.1,0.06l-0.8,-0.18l-0.6,-0.05l-0.54,-0.17l-0.21,-0.19l-0.88,-0.38ZM96.16,411.44l-0.0,0.01l0.0,0.04l-0.02,-0.03l0.02,-0.01ZM86.52,429.18l-0.01,0.04l0.08,0.26l-0.09,-0.07l-0.01,-0.22l0.03,-0.02ZM105.13,456.7l0.01,0.0l-0.0,0.02l-0.01,-0.02ZM104.02,457.09l-0.05,0.02l-0.08,0.43l-0.26,-0.21l0.07,-0.02l0.05,-0.32l0.07,0.07l0.19,0.03ZM103.12,457.55l-0.18,0.02l-0.09,0.13l-0.43,-0.01l-0.24,0.12l-0.16,0.17l-0.04,-0.25l-0.05,-0.05l-0.21,-0.11l-0.19,-0.04l-0.17,-0.16l-0.53,-0.25l-0.24,-0.01l-0.63,0.13l-0.08,0.16l-0.15,0.08l-0.36,0.43l-0.05,0.3l0.04,0.11l-0.03,0.21l-0.45,0.54l-0.4,0.02l-0.29,0.36l-0.28,0.11l-0.24,0.2l-0.29,-0.23l-0.21,-0.39l0.16,-0.11l0.09,-0.2l-0.01,-0.21l-0.07,-0.19l0.83,-0.86l0.3,-0.15l0.17,-0.16l0.6,-0.32l0.37,-0.27l1.29,-0.31l0.84,0.04l0.14,0.25l0.34,0.31l0.35,0.43l0.28,-0.03l0.16,0.19l0.11,0.04ZM101.32,458.43l-0.1,0.04l-0.1,-0.07l0.2,0.03ZM100.96,458.34l-0.01,0.0l0.0,-0.0l0.0,0.0ZM96.09,460.15l-0.21,0.37l-0.06,0.0l-0.05,-0.33l-0.13,-0.08l0.36,-0.22l0.12,0.1l-0.02,0.17ZM93.49,461.59l-0.11,0.14l-0.04,0.2l-0.31,0.14l-0.56,-0.12l-1.19,0.07l-0.32,0.1l-0.59,0.41l-0.14,0.19l-0.03,0.21l-0.14,0.07l-0.48,0.05l-0.15,0.07l-0.31,-0.03l-0.17,-0.3l0.41,-0.14l0.24,-0.19l0.68,-1.09l0.23,0.13l0.48,0.03l0.24,-0.08l0.18,-0.26l0.42,-0.09l0.37,-0.26l0.43,-0.08l0.43,0.03l0.31,0.3l0.03,0.32l0.09,0.21ZM129.29,436.86l0.03,0.01l-0.05,0.04l-0.06,-0.02l0.09,-0.04ZM148.48,429.66l0.01,0.18l-0.23,0.15l0.07,0.21l-0.21,0.07l-0.22,0.18l0.13,-0.26l-0.02,-0.12l0.48,-0.41ZM179.19,436.27l0.21,0.08l0.16,0.47l0.24,0.3l3.42,2.62l0.31,1.03l-0.09,0.31l0.41,0.51l0.29,-0.02l0.22,-0.08l0.56,-0.41l0.34,-0.18l-0.39,0.45l-0.08,0.27l0.47,0.39l0.29,-0.11l0.23,-0.22l0.18,0.0l0.07,0.12l0.36,-0.06l0.31,0.25l0.16,0.28l0.06,0.02l0.07,0.15l-0.04,0.04l0.11,0.54l0.3,0.17l0.28,-0.02l0.1,-0.06l0.12,0.04l0.26,-0.08l0.05,0.06l-0.14,0.21l0.06,0.09l-0.23,-0.07l-0.04,0.06l-0.35,-0.23l-0.42,0.13l-0.08,0.29l-0.33,0.13l-0.01,0.06l-0.36,-0.31l-0.1,0.05l-0.13,-0.1l-0.29,-0.09l-0.39,0.05l-0.14,-0.13l-0.31,-0.14l-0.58,-0.39l0.1,-0.51l-0.15,-0.17l-0.12,-0.08l-0.27,-0.03l-0.36,0.14l-0.64,-0.48l-0.05,-0.05l-0.09,-0.39l-0.21,-0.3l-0.82,-0.64l-0.3,-0.14l-0.25,-0.19l-0.16,0.0l-0.09,-0.44l-0.36,-0.13l-0.59,0.11l-1.03,-0.51l-0.38,-0.12l-0.2,-0.18l-0.18,-0.07l-0.08,-0.14l-0.33,-0.07l-0.31,-0.16l-0.26,0.01l-0.18,-0.12l-0.27,-0.09l0.14,-0.09l0.01,-0.25l0.09,0.04l0.21,-0.23l0.07,0.49l0.38,0.2l0.35,-0.08l0.25,-0.37l0.01,-0.36l-0.1,-0.18l-0.04,-0.44l0.34,0.01l0.36,0.21l0.33,-0.03l0.08,-0.04l0.2,-0.46l-0.23,-0.17ZM186.32,440.51l-0.14,-0.1l0.17,-0.09l-0.02,0.18ZM188.31,441.49l-0.01,-0.02l0.02,0.01l-0.01,0.01ZM188.23,440.71l-0.15,0.1l-0.1,0.39l-0.24,-0.01l0.05,-0.31l-0.46,-0.4l-0.21,0.06l-0.23,-0.25l0.22,-0.01l0.31,-0.17l0.42,-0.6l0.07,-0.24l-0.02,-0.47l0.26,-0.06l0.23,-0.16l0.26,-0.38l0.04,-0.39l0.72,-0.12l1.42,-0.63l0.3,0.22l0.26,0.12l0.13,0.23l0.18,0.17l0.22,0.08l0.12,0.11l0.0,0.12l-0.15,0.19l0.11,0.58l0.12,0.07l0.01,0.26l0.26,0.34l0.24,0.15l0.63,0.13l0.15,0.25l0.4,0.32l0.35,0.09l0.11,0.15l-0.03,0.17l0.29,0.42l0.05,0.19l0.27,0.32l0.14,0.11l1.34,0.61l0.25,0.29l-0.36,0.04l-0.3,0.13l-0.17,0.24l-0.02,0.12l-0.32,0.39l0.07,0.15l-0.21,0.18l-0.09,0.18l-0.61,-0.49l-0.24,-0.08l-0.4,-0.05l-0.16,-0.09l-0.05,-0.3l-0.12,-0.18l-0.19,-0.13l-0.01,-0.09l-0.07,-0.04l-0.12,-0.2l0.07,-0.12l-0.07,-0.26l0.02,-0.28l-0.08,-0.29l-0.33,-0.15l0.06,-0.07l-0.04,-0.03l-0.12,0.03l0.01,-0.08l-0.04,-0.01l-0.01,0.09l-0.07,-0.08l-0.1,0.04l-0.11,-0.61l-0.14,-0.3l-0.11,-0.52l-0.43,-0.69l0.11,-0.76l-0.11,-0.34l-0.7,0.01l-0.18,0.59l-0.18,-0.02l-0.38,0.28l0.18,0.47l-0.13,0.34l0.52,0.64l0.02,0.68l0.49,0.89l0.04,0.3l0.14,0.24l-0.1,0.32l0.44,0.87l0.11,0.36l-0.11,0.17l-0.16,-0.05l-0.09,-0.12l-0.1,-0.37l-0.3,-0.57l-0.33,-0.17l-0.07,0.0l-0.38,0.31l-0.2,0.02l-0.24,0.1l0.06,-0.18l-0.03,-0.28l0.11,-0.17l-0.26,-0.36l-0.1,-0.03l-0.29,-0.54l0.56,-0.13l0.25,-0.6l-0.05,-0.08l-0.17,-0.15l-0.24,-0.08l-0.47,-0.03l-0.14,0.15l-0.16,-0.5l-0.22,-0.2l-0.2,-0.06l-0.32,0.08l-0.08,0.49ZM197.15,443.3l0.52,0.44l-0.07,0.32l0.31,0.52l0.67,0.7l0.32,0.67l-1.31,-0.17l0.01,-0.06l-0.21,-0.22l0.09,-0.7l-0.52,-0.12l-0.2,0.07l-0.39,0.63l-0.09,-0.12l0.01,-0.12l-0.12,-0.26l0.07,-0.23l0.21,-0.23l0.05,-0.23l-0.06,-0.23l0.09,-0.1l0.08,-0.24l0.27,-0.03l0.25,-0.28ZM199.35,446.49l1.4,2.05l0.67,0.78l0.31,0.5l-0.24,0.37l0.24,0.61l0.66,0.16l-0.14,0.43l0.23,0.49l0.52,0.2l0.04,0.19l0.17,0.28l0.04,0.43l0.34,0.25l0.47,0.03l0.36,-0.04l1.58,0.9l0.38,0.12l0.55,0.06l0.15,0.07l0.46,0.44l0.49,0.15l0.12,0.31l0.11,0.14l0.19,0.11l0.62,0.16l0.37,-0.03l0.06,0.13l0.01,0.28l-0.37,0.42l-0.16,0.39l0.06,0.43l0.09,0.14l-0.06,0.16l-0.0,0.33l0.07,0.22l0.26,0.47l0.01,0.35l0.06,0.16l-0.19,0.14l-0.06,0.19l-0.14,0.17l-0.46,0.84l-0.2,0.27l-0.29,0.19l-0.28,-0.02l-0.04,-0.25l-0.14,-0.2l0.2,-0.19l0.14,-0.25l0.32,-0.29l0.32,-0.42l0.1,-0.2l-0.4,-0.54l-0.3,0.11l-0.43,-0.2l-0.29,0.16l-0.02,-0.25l0.07,-0.51l-0.1,-0.9l-0.16,-0.27l-0.08,-0.38l-0.32,-0.08l-0.13,-0.21l-0.18,-0.16l0.17,-0.1l0.08,-0.21l0.12,-0.12l0.05,-0.51l-0.49,-0.14l-0.31,0.16l-0.38,0.35l-0.36,0.15l-0.47,-0.07l-0.08,0.06l0.01,0.04l-0.21,-0.01l-0.15,0.13l-0.13,0.01l-0.42,0.26l-0.23,0.02l0.03,-0.17l-0.07,-0.53l0.47,-0.04l0.48,0.08l0.27,-0.11l0.18,-0.18l-0.02,-0.03l0.26,-0.23l-0.24,-0.44l-0.08,-0.03l-0.24,-0.02l-0.28,0.1l-0.74,-0.08l-0.18,-0.53l-0.3,-0.18l-0.36,-0.07l-0.1,-0.24l-0.17,-0.17l-0.28,-0.13l0.09,-0.15l-0.37,-0.6l-0.15,0.02l0.19,-0.16l0.0,-0.68l-0.39,-0.09l-0.23,0.09l-0.23,0.18l-0.45,-0.26l-0.09,-0.17l0.16,-0.21l-0.18,-0.82l-0.44,-0.14l-0.33,0.22l-0.12,-0.01l-0.26,-0.15l0.03,-0.15l-0.29,-0.26l0.24,-0.06l0.21,-0.13l0.18,-0.36l-0.0,-0.1l-0.32,-0.29l0.22,-0.08l0.17,-0.19l-0.15,-0.53l-0.24,-0.1l-0.17,-0.21l-0.08,0.04l-0.43,-0.43l-0.3,-0.12l-0.19,-0.17l-0.3,-0.11l-0.0,-0.12l0.25,0.11l0.85,0.15l0.06,-0.01l0.18,-0.43ZM207.02,460.63l-0.05,-0.06l0.08,0.04l-0.03,0.01ZM207.22,459.6l-0.02,0.02l-0.05,-0.02l0.06,-0.0ZM203.19,456.71l0.02,0.11l0.19,0.08l-0.1,0.18l-0.36,-0.02l0.21,-0.13l0.06,-0.22ZM202.7,457.28l-0.04,-0.15l0.06,-0.02l-0.02,0.18ZM202.49,454.42l0.21,0.0l0.05,0.12l-0.04,0.0l-0.22,-0.13ZM201.69,455.19l0.08,-0.04l0.33,0.08l-0.15,0.14l-0.27,-0.18ZM201.13,454.97l-0.11,-0.02l0.1,-0.05l0.01,0.07ZM199.18,448.65l-0.17,0.11l-0.25,0.03l0.01,-0.17l-0.15,-0.3l-0.11,-0.03l0.1,-0.06l0.11,0.04l0.45,0.38ZM195.21,449.44l-0.03,0.1l-0.2,0.03l-0.14,0.11l-0.06,0.24l-0.15,0.06l-0.03,-0.07l0.04,-0.06l-0.11,-0.25l0.08,-0.16l0.31,0.1l0.27,-0.34l0.02,0.23ZM194.43,450.12l-0.07,0.04l-0.01,-0.09l0.08,-0.04l0.0,0.09ZM194.46,450.04l-0.03,-0.01l0.07,-0.0l-0.04,0.02ZM194.52,449.99l0.02,-0.01l-0.0,0.02l-0.01,-0.01ZM195.14,448.74l-0.13,-0.29l-0.0,-0.71l-0.37,-0.07l-0.37,0.1l-0.12,-0.13l-0.05,-0.32l-0.1,-0.21l0.04,-0.29l-0.09,-0.54l-0.21,-0.71l0.11,-0.22l0.52,-0.06l0.22,0.12l0.04,0.12l-0.08,0.12l0.1,0.17l-0.08,0.08l0.14,0.46l-0.05,0.23l0.07,0.28l0.04,0.05l0.3,0.01l0.46,0.63l-0.04,0.23l0.05,0.06l0.37,0.13l-0.4,0.03l-0.09,0.12l0.02,0.12l-0.12,0.09l0.11,0.29l-0.17,0.25l-0.12,-0.13ZM192.51,441.36l0.03,0.05l-0.04,0.01l0.01,-0.04l-0.01,-0.02ZM188.54,443.73l-0.06,0.02l-0.09,-0.12l0.12,-0.01l0.03,0.1ZM177.07,436.53l-0.08,-0.29l0.08,-0.06l0.11,0.15l-0.07,0.22l-0.03,-0.03ZM147.86,377.56l0.0,0.0l-0.01,0.02l-0.01,-0.01l0.02,-0.02ZM101.92,400.49l-0.49,-0.18l-0.15,-0.03l0.12,-0.08l0.21,0.13l0.21,0.05l0.1,0.11ZM97.86,398.24l-0.56,-0.05l-0.2,-0.37l0.43,-0.04l0.34,0.46ZM204.23,458.42l0.06,-0.05l0.03,0.19l-0.06,-0.1l-0.04,-0.04ZM204.67,457.73l-0.03,-0.23l0.18,-0.05l-0.02,0.22l-0.13,0.06ZM205.03,456.97l0.14,-0.12l-0.02,-0.37l0.38,-0.14l0.42,0.57l0.06,0.21l0.21,0.26l0.06,0.17l-0.04,0.11l0.06,0.1l-0.12,0.08l-0.02,0.46l-0.07,0.1l-0.16,-0.11l-0.08,-0.33l-0.13,-0.27l-0.06,-0.35l-0.49,-0.26l-0.19,0.16l0.12,-0.18l-0.06,-0.1ZM198.75,454.62l0.0,-0.0l0.0,0.0l-0.0,-0.0ZM199.13,455.84l0.41,0.06l0.06,-0.04l0.28,0.16l0.26,0.03l0.67,0.6l0.01,0.07l0.18,0.21l0.06,0.25l-0.07,0.04l-0.03,0.15l-0.13,0.08l-0.15,0.24l0.11,0.17l-0.2,0.07l-0.26,0.23l0.07,0.25l-0.04,0.06l0.05,0.12l-0.04,0.02l0.02,0.05l0.04,-0.02l0.14,0.3l0.42,-0.1l0.47,0.28l0.18,-0.07l0.24,0.1l-0.13,0.38l0.06,0.31l0.26,0.22l0.28,-0.02l-0.05,0.16l-0.3,0.16l-0.04,-0.14l-0.31,-0.04l-0.21,-0.19l-0.13,-0.3l-0.02,-0.13l0.04,-0.03l-0.4,-0.51l-0.46,0.15l-0.15,-0.57l-0.34,-0.13l-0.19,-0.37l-0.1,-0.04l0.08,-0.06l0.28,-0.07l-0.02,-0.72l-0.26,-0.07l-0.22,0.02l-0.82,0.24l0.34,-0.16l0.36,-0.47l0.04,-0.27l-0.03,-0.27l-0.19,-0.26l-0.17,0.06l0.06,-0.15ZM202.04,460.79l0.03,-0.05l0.03,0.07l-0.01,-0.01l-0.05,-0.01ZM202.39,461.11l0.07,0.01l-0.0,0.06l-0.06,-0.05l0.0,-0.02ZM201.99,459.07l0.0,-0.0l0.0,0.0l-0.0,0.0ZM200.31,452.57l0.09,0.06l0.03,0.03l-0.13,0.03l0.01,-0.12ZM199.87,453.94l0.07,-0.03l0.37,0.05l-0.0,0.18l-0.15,0.04l-0.29,-0.23ZM195.6,452.13l-0.15,-0.18l0.24,0.02l0.12,-0.12l0.1,0.05l0.03,0.13l-0.08,0.14l-0.27,-0.05ZM197.53,452.12l0.09,-0.37l-0.06,-0.31l-0.39,-0.28l-0.01,-0.17l-0.36,-0.16l0.92,0.22l0.44,0.18l0.06,0.11l-0.25,0.12l0.0,0.4l0.05,0.28l0.12,0.23l0.16,0.14l-0.01,0.18l0.36,0.24l0.07,0.1l-0.22,0.0l-0.14,-0.11l-0.34,-0.03l-0.36,0.26l0.02,-0.16l-0.14,-0.23l0.11,0.01l0.0,-0.07l-0.02,-0.17l-0.11,-0.18l0.02,-0.2ZM198.73,453.22l-0.02,0.02l0.01,-0.03l0.01,0.01ZM199.19,451.81l-0.14,-0.26l-0.14,-0.11l0.04,-0.22l0.12,-0.0l0.26,0.23l-0.13,0.15l-0.01,0.21ZM188.93,446.97l0.38,-0.64l-0.54,-0.48l0.35,-0.18l-0.09,-0.34l0.08,0.03l0.46,-0.17l0.08,-0.25l0.12,-0.07l0.25,0.17l0.21,0.02l0.07,0.06l-0.03,0.04l-0.41,0.03l-0.17,0.06l-0.02,0.21l-0.15,-0.02l-0.43,0.44l0.24,0.37l0.09,0.04l0.09,0.13l0.19,0.12l0.57,0.18l0.17,0.09l0.13,0.14l-0.47,-0.26l-0.29,-0.07l-0.42,0.56l0.09,0.16l-0.05,0.09l0.07,0.1l-0.16,-0.19l-0.2,-0.06l-0.11,-0.21l-0.1,-0.07ZM190.97,445.99l0.09,-0.16l0.27,-0.17l0.7,0.08l-0.48,0.09l-0.03,0.45l-0.56,-0.29ZM192.57,447.43l0.03,0.22l0.13,0.3l0.0,0.17l-0.18,-0.01l-0.71,-0.45l0.15,-0.01l0.19,-0.11l0.39,-0.12ZM192.79,449.92l0.02,0.11l0.1,0.1l0.08,0.35l0.1,-0.04l0.06,0.1l-0.06,-0.01l-0.01,0.06l0.05,0.44l0.15,0.34l0.03,0.39l0.22,0.5l0.02,0.47l-0.16,0.05l-0.04,0.29l0.05,0.25l0.08,0.14l0.03,0.32l-0.03,0.1l0.05,0.21l-0.58,-0.9l0.14,-0.06l0.16,-0.3l0.17,-0.18l0.07,-0.44l-0.38,-0.24l-0.14,0.01l-0.0,-0.1l-0.17,-0.22l-0.19,-0.09l-0.24,0.08l-0.26,-0.37l-0.16,0.03l-0.01,-0.12l0.44,-0.21l0.06,-0.35l-0.03,-0.1l-0.28,-0.27l-0.23,-0.02l0.17,-0.22l-0.26,-0.37l-0.14,-0.05l-0.28,-0.38l-0.08,0.01l-0.01,-0.19l0.28,-0.14l0.01,0.11l0.61,0.11l-0.01,0.06l0.24,0.36l0.07,0.23l0.3,0.21ZM189.68,447.75l0.18,0.25l0.1,-0.02l0.02,0.12l-0.39,-0.26l0.09,-0.09ZM190.19,448.37l0.06,0.01l-0.05,0.02l-0.02,-0.03ZM190.68,447.0l0.24,0.08l0.05,0.12l-0.23,-0.14l-0.07,-0.06ZM148.81,435.84l0.0,0.03l-0.02,-0.0l0.01,-0.03ZM130.34,445.32l0.4,-0.36l-0.1,-0.21l0.41,-0.02l-0.1,0.37l-0.16,-0.09l-0.35,0.28l-0.02,0.08l-0.08,-0.04ZM131.25,444.46l0.01,-0.13l-0.12,-0.41l0.21,-0.01l0.05,-0.06l0.06,0.29l0.32,0.23l0.19,-0.03l0.05,0.05l-0.08,0.34l-0.12,0.0l-0.35,-0.38l-0.22,0.1ZM124.41,449.07l0.06,-0.22l0.11,-0.08l0.0,-0.24l0.06,0.02l0.13,-0.09l0.27,0.02l0.06,-0.12l0.41,-0.18l-0.03,-0.15l0.03,-0.04l0.29,-0.09l0.09,0.03l-0.14,0.15l0.3,0.41l0.39,0.03l0.11,0.42l0.11,0.15l0.18,0.12l0.2,0.3l0.22,0.17l-0.38,0.14l-0.09,0.08l-0.09,-0.07l-0.31,-0.03l-0.13,-0.08l-0.51,-0.06l-0.49,0.03l-0.25,0.08l-0.3,-0.52l-0.17,-0.12l-0.15,-0.04ZM127.65,449.83l0.11,-0.02l0.01,0.22l-0.12,-0.2ZM128.34,449.53l-0.21,-0.01l0.0,-0.29l-0.12,-0.14l-0.26,-0.16l-0.18,-0.34l-0.01,-0.07l0.19,-0.03l0.08,-0.28l0.4,-0.11l0.1,-0.25l0.27,-0.01l0.07,-0.2l0.24,0.0l0.13,-0.1l0.28,0.12l0.39,-0.6l0.01,-0.1l0.17,0.02l0.02,0.19l0.18,0.26l0.39,0.14l0.17,-0.06l0.17,-0.14l0.08,-0.35l0.21,0.0l0.19,-0.16l0.08,-0.14l0.21,-0.01l-0.35,0.37l0.04,0.5l0.29,0.09l0.22,0.41l-0.18,0.05l-0.14,-0.09l-0.24,-0.01l-0.24,-0.14l-0.72,-0.07l-0.26,0.03l-0.07,0.03l-0.01,0.17l-0.38,0.35l-0.06,0.32l-0.15,-0.04l-0.31,0.33l0.01,0.28l-0.67,0.25ZM127.66,447.01l-0.24,-0.06l-0.25,-0.02l0.1,-0.1l0.21,-0.09l0.17,0.14l0.0,0.13ZM80.59,434.8l0.2,-0.04l0.94,0.12l0.31,-0.04l0.29,-0.24l0.09,-0.26l0.12,-0.05l0.27,0.05l0.37,-0.26l0.13,-0.15l0.14,0.23l0.28,-0.08l0.27,-0.15l0.35,0.1l0.07,0.18l0.16,0.05l0.35,0.04l0.23,-0.03l0.19,-0.1l0.08,0.05l0.05,0.31l-0.08,0.3l0.26,0.52l-0.09,0.03l0.11,0.24l-0.18,0.12l-0.01,-0.04l-0.27,0.1l-0.09,-0.06l-0.39,-0.01l-0.07,0.04l0.01,0.12l-0.19,0.08l-0.06,-0.05l-0.32,-0.01l-0.2,0.04l-0.13,0.09l-0.39,-0.12l-0.54,0.01l-0.19,-0.13l-0.21,-0.05l-0.17,-0.13l-0.67,-0.3l0.0,-0.11l-0.06,-0.04l-0.21,-0.03l-0.03,-0.04l-0.24,0.06l-0.09,-0.05l-0.12,-0.17l-0.23,-0.14ZM84.92,464.82l0.0,-0.0l0.0,0.02l-0.0,-0.0l-0.0,-0.01ZM81.67,467.52l-0.0,-0.07l0.0,-0.03l0.0,0.0l-0.01,0.09ZM82.43,467.18l0.03,-0.05l0.06,-0.02l-0.06,0.06l-0.03,0.01ZM82.59,467.01l0.01,0.02l-0.04,0.03l0.03,-0.06ZM82.55,466.45l-0.09,-0.1l-0.35,-0.05l-0.5,-0.19l-0.3,-0.03l0.42,-0.19l-0.06,-0.0l0.42,-0.02l0.12,0.06l0.02,0.24l0.33,0.18l-0.02,0.1ZM75.57,469.7l-0.03,-0.15l0.16,-0.14l0.12,-0.08l0.17,0.04l0.16,-0.03l-0.19,0.25l-0.39,0.11ZM76.94,468.55l-0.05,-0.3l0.33,-0.25l0.45,-0.11l0.33,0.15l0.01,0.05l-0.3,0.11l-0.48,0.29l-0.28,0.06ZM65.05,416.31l0.1,-0.13l-0.01,0.05l0.32,0.19l-0.08,0.1l0.26,0.13l0.8,-0.07l0.32,0.06l0.07,0.09l0.25,0.06l-0.27,0.09l-0.17,0.13l-0.3,0.08l-0.11,0.07l0.04,0.07l-0.06,0.05l-0.35,0.15l-0.16,-0.03l-0.19,-0.1l-0.41,-0.1l-0.15,-0.2l-0.06,-0.18l0.02,-0.26l0.14,-0.26ZM68.08,416.71l0.42,-0.21l0.21,-0.17l0.31,-0.03l0.3,-0.15l0.14,0.05l0.26,-0.01l0.4,0.3l0.22,0.07l-0.07,0.2l0.07,0.47l0.62,0.09l0.33,0.15l0.07,0.09l0.21,0.05l0.45,-0.01l0.11,0.23l0.14,0.14l0.21,0.1l0.38,0.04l0.36,-0.08l0.12,0.13l-0.33,0.12l-0.28,0.17l-0.01,0.11l-0.4,0.22l-0.16,0.21l-0.32,-0.34l-0.28,-0.19l-0.46,-0.15l-0.03,0.02l-0.24,-0.12l-0.12,-0.12l-0.18,-0.01l-0.08,-0.2l-0.14,-0.17l-0.37,-0.15l-0.42,-0.3l-0.77,-0.3l-0.4,-0.06l-0.28,-0.2ZM74.42,418.15l0.04,0.01l0.45,0.07l-0.06,0.08l-0.23,-0.01l-0.26,-0.1l0.06,-0.06ZM56.48,473.36l-0.0,-0.01l0.03,0.01l-0.02,-0.0ZM47.78,475.84l0.0,-0.0l0.0,0.0l-0.0,0.0ZM11.64,470.76l-0.08,-0.02l-0.06,-0.11l0.37,-0.01l-0.23,0.14Z",
        name: "Alaska"
    },
    "US-NJ": {
        path: "M766.67,187.23l0.54,-0.39l0.22,-0.71l0.59,-0.6l0.07,-0.61l0.72,-0.81l1.36,-0.67l2.71,-0.64l0.7,-0.57l0.08,-0.58l-0.16,-0.2l0.49,-0.19l0.76,-1.04l1.53,-1.1l2.83,-1.23l0.35,-0.52l-0.24,-0.87l-3.18,-3.16l-0.43,-1.01l-0.46,-0.16l-0.43,0.15l-0.34,-0.36l-0.22,-1.6l-0.31,-0.65l-1.03,-0.42l-0.45,0.04l-0.13,-0.5l0.08,-2.41l0.27,-0.31l0.88,-0.27l0.91,-1.81l-0.12,-0.52l-1.1,-1.42l1.55,-0.9l0.86,-1.19l0.59,-0.38l0.86,-1.08l0.61,-1.63l0.96,-0.94l1.03,-0.38l11.9,6.54l-0.69,2.02l-0.68,1.04l-0.35,1.34l-0.65,0.53l-0.05,-0.22l-0.59,-0.24l-0.43,0.28l-0.31,0.61l-0.57,0.45l-0.51,1.35l-0.6,0.81l-0.16,1.28l0.45,0.71l0.92,0.35l1.23,-0.07l2.14,0.78l0.11,1.58l-1.32,3.57l0.12,0.43l-0.57,0.23l-0.14,0.42l0.18,0.29l-0.86,0.48l-0.06,0.29l0.32,0.31l-0.3,0.36l0.2,0.69l-1.05,2.95l0.36,0.58l-0.6,0.92l-1.5,1.22l-0.33,0.7l-0.82,-0.16l-0.66,0.31l0.1,1.09l0.28,0.36l-0.61,0.06l-0.34,0.26l-0.39,1.07l0.73,0.58l-0.29,0.14l-0.04,-0.39l-0.44,-0.26l-0.51,0.08l-0.77,1.1l-1.09,0.1l-0.49,0.43l0.28,0.67l0.61,0.2l-0.82,0.77l-0.6,1.13l-0.77,0.38l0.03,0.52l0.25,0.14l-1.09,0.99l-0.15,0.73l-1.71,0.95l0.19,-1.22l0.8,-1.6l0.11,-0.71l-0.33,-0.84l-0.75,-0.44l-1.06,0.03l-0.66,-0.45l-1.56,0.39l-0.11,-0.63l-1.01,-0.71l-0.23,-0.41l-0.9,-0.18l-0.42,-0.7l-0.65,-0.1l-2.4,-2.27l0.35,-1.38l-0.66,-0.94Z",
        name: "New Jersey"
    },
    "US-ME": {
        path: "M836.32,80.6l0.84,-0.72l0.37,-0.01l0.86,1.81l0.75,0.26l0.42,-0.41l0.05,-0.66l0.57,-0.64l0.02,-1.58l0.18,-0.35l0.29,-0.05l1.27,0.8l0.81,-0.16l0.37,-0.39l-0.08,-0.75l-1.01,-0.73l-0.22,-0.57l0.61,-1.13l1.45,-1.47l2.72,-1.34l0.33,-0.88l-0.21,-0.9l1.49,-1.08l0.86,-1.18l0.07,-0.92l-0.87,-0.56l0.38,-1.21l-0.22,-0.45l0.79,-0.63l0.17,-0.57l-0.12,-0.7l-0.46,-0.63l0.66,-1.42l0.58,-0.46l0.15,-0.84l1.81,-1.32l1.03,-5.53l11.67,-14.61l2.37,0.45l-0.13,1.67l0.2,1.4l0.41,0.53l2.29,1.21l2.37,-0.94l1.93,-0.21l0.9,-0.72l0.93,-0.39l0.59,-0.02l0.68,0.29l0.79,-0.21l0.72,-1.15l0.55,-0.13l1.37,0.45l0.65,0.69l2.49,1.62l0.79,1.16l1.13,1.12l0.82,0.48l0.37,21.66l0.38,0.74l-0.54,0.68l-0.05,0.34l0.37,0.76l-0.57,1.14l0.08,1.3l0.5,0.61l0.71,0.3l0.34,-0.1l0.89,0.82l0.9,0.37l2.54,0.28l0.05,0.83l-0.9,0.66l-0.15,0.41l0.22,0.85l0.76,1.2l-0.59,1.45l-0.05,0.86l2.04,2.24l0.92,0.21l0.71,-0.49l0.12,-0.43l1.09,0.57l0.25,0.59l0.69,0.71l0.02,0.73l0.86,1.14l-0.11,0.38l-0.47,-0.3l-0.48,0.24l-0.1,0.69l-0.68,-0.37l-0.44,0.24l-0.06,0.65l0.58,0.67l0.2,0.91l0.39,0.31l0.39,-0.31l0.06,-0.37l0.43,-0.07l0.01,0.24l0.61,0.32l0.54,-0.62l0.18,0.38l-0.56,0.57l-0.56,-0.01l-0.86,1.12l-1.38,1.21l-0.6,-0.24l-0.43,0.29l-0.2,-1.06l-0.65,-0.19l-0.46,0.36l-0.59,-0.13l-0.16,0.46l0.26,0.83l-0.37,-0.57l-0.35,-0.1l-0.5,0.5l0.07,0.46l-1.03,-0.62l-0.43,0.13l-0.61,0.53l-0.11,0.46l0.39,0.24l-0.12,0.83l-0.2,0.09l-0.19,-0.58l-0.46,-0.21l-0.52,0.26l-0.57,0.87l0.05,-1.42l-1.06,-0.34l-0.89,0.42l-0.85,1.19l0.22,0.7l-0.4,-0.09l-0.46,0.31l-0.49,-0.61l-0.38,0.17l-0.18,0.39l-0.46,0.08l-0.12,0.66l0.69,0.7l-0.36,0.08l-0.4,0.7l-0.49,-0.83l-0.06,-1.22l-0.83,-0.71l-0.43,0.08l-0.3,-0.48l-0.59,0.14l-0.14,0.27l-0.39,-0.4l-0.72,-0.16l-0.43,0.3l-0.09,0.36l0.23,0.46l0.33,0.14l-0.06,0.23l-0.5,-0.2l-0.63,0.2l-0.31,0.54l-0.14,-0.98l-0.47,-0.33l-0.62,-0.03l-0.36,0.57l0.21,0.79l-0.26,-0.04l-0.42,0.36l-0.57,-0.09l-0.44,0.18l0.44,1.19l-0.26,0.9l0.29,0.63l-0.8,-0.63l-0.96,-0.08l-0.92,-0.67l0.1,-0.72l0.37,0.12l0.46,-0.26l-0.21,-0.96l-0.57,-0.34l-0.38,0.18l0.53,-1.4l-0.02,-0.58l-0.3,-0.32l-1.1,-0.09l-0.6,1.64l-0.4,0.01l-0.87,0.64l-1.09,0.42l-0.15,0.51l0.7,1.52l-0.9,0.58l-1.42,3.17l0.03,1.02l0.27,0.3l-0.71,0.29l-0.2,0.52l-0.66,0.31l-0.4,-0.4l-0.3,0.02l-0.73,0.67l-0.57,-0.24l-0.02,-1.06l-0.61,-0.39l-0.79,0.7l-0.15,0.61l-0.58,0.36l-0.65,2.04l-0.57,-1.09l0.51,-0.94l-0.03,-0.62l-0.68,-0.19l-0.17,0.17l-0.74,1.64l-0.32,-0.28l0.61,-1.2l-0.33,-0.54l-0.77,0.22l-1.68,2.32l-0.14,-1.66l0.55,-0.83l-0.02,-0.47l-0.71,-0.17l-1.67,1.54l-0.2,0.52l0.33,0.64l0.75,-0.03l0.22,1.85l-0.07,-0.54l-0.43,-0.36l-0.68,0.07l-0.32,0.3l0.05,0.24l-1.27,-0.48l-3.0,2.03l-1.09,1.46l0.08,0.53l-0.42,-0.0l-0.41,0.4l0.36,0.54l0.92,0.07l0.05,0.75l-0.8,0.04l-0.32,0.29l-0.37,-0.16l-0.63,0.33l-0.46,0.85l0.17,1.33l-0.23,0.47l-1.12,0.85l-1.06,0.25l-0.7,0.77l-0.5,1.07l0.12,0.84l-1.19,2.17l-0.64,-0.5l-0.29,0.03l-0.26,0.39l-0.74,-0.89l0.19,-0.93l-0.19,-0.76l-0.77,-0.56l-1.61,-2.2l0.31,-3.04l-1.96,-33.02ZM854.36,108.58l-0.04,-0.01l0.11,-0.35l0.0,0.2l-0.08,0.16ZM855.7,108.79l0.22,0.68l-0.19,0.34l-0.21,-0.46l0.19,-0.56ZM858.89,106.86l0.07,0.68l-0.13,0.1l-0.31,-0.24l0.37,-0.55ZM871.89,98.35l-0.11,0.07l0.03,-0.12l0.07,0.05ZM877.72,99.01l0.38,-0.86l0.61,-0.45l-0.02,-0.41l0.53,-0.28l0.64,0.08l1.0,1.49l-1.09,0.39l-0.61,-0.3l-0.39,0.31l0.11,1.22l-0.82,-0.42l-0.02,-0.54l-0.33,-0.25ZM873.34,101.55l0.01,-0.47l0.33,-0.44l-0.04,-0.4l0.45,0.42l-0.4,0.14l-0.2,0.56l0.15,0.25l-0.3,-0.05ZM871.03,103.63l0.09,0.02l0.34,0.05l-0.24,0.22l-0.19,-0.29Z",
        name: "Maine"
    },
    "US-MD": {
        path: "M705.36,194.02l0.15,-8.34l18.87,0.0l-0.75,0.78l-0.87,-0.11l-1.58,0.37l-0.09,0.62l-0.42,0.35l0.07,0.63l-0.97,-0.12l-0.73,0.2l-1.35,-0.25l-0.84,-0.47l0.18,-0.2l-0.19,-0.56l-0.42,-0.38l-0.51,-0.07l-0.83,1.38l-2.03,2.0l-1.17,-0.57l-1.06,0.32l-0.63,0.95l-1.84,1.27l-0.54,0.77l-0.89,0.21l-1.52,1.25ZM726.9,185.68l35.38,0.01l1.19,22.74l0.4,0.37l7.95,0.01l-0.15,0.26l0.76,0.49l-0.12,0.51l0.28,0.35l0.41,0.08l-0.1,0.21l-0.63,1.06l-0.49,-0.24l-0.86,0.54l-0.78,2.07l-0.56,0.03l-0.48,0.48l-0.37,1.16l-3.55,0.43l-0.51,0.52l-1.72,-0.16l-0.89,0.34l-0.23,-0.44l0.12,-0.24l0.5,-0.14l1.21,-1.3l-0.26,-0.61l-0.31,-0.02l0.05,-0.49l-0.27,-0.28l-2.11,0.01l1.55,-0.68l0.01,-0.73l-1.13,-0.36l0.87,-1.73l0.04,-0.85l-0.5,-0.21l-0.37,0.13l-0.84,1.25l-0.15,-0.55l-0.56,-0.22l-0.4,0.21l-0.88,1.1l0.25,0.87l-0.47,-0.64l-0.46,-0.17l-1.19,-1.51l-0.26,-0.17l-0.62,0.16l-0.38,-0.55l-0.1,-0.24l0.38,-0.17l0.3,-0.92l0.8,-0.31l0.31,-1.1l1.58,0.5l0.66,-0.03l0.6,-0.25l0.38,-0.59l0.19,-0.7l-0.16,-0.57l-0.39,-0.14l-0.78,0.94l-0.37,-0.01l-0.43,-0.28l-0.29,-0.45l0.13,-0.3l-0.43,-0.4l-0.49,0.06l-0.07,-0.54l-0.69,-0.09l0.07,-0.24l0.97,0.0l0.55,-0.7l-0.03,-0.54l-0.72,-0.15l-0.27,0.29l-0.07,-0.13l0.03,-0.21l0.96,-0.5l-0.08,-0.71l-0.42,-0.16l0.01,-0.36l-0.35,-0.36l-0.35,0.05l-0.31,-0.44l0.83,-0.45l0.2,-1.19l1.03,-1.09l0.15,-0.78l-0.45,-0.11l-0.79,0.41l-0.43,-0.26l-0.77,0.6l-0.47,-0.57l1.22,-2.67l0.48,-0.14l0.37,-0.61l4.06,-0.1l0.28,-0.67l-0.4,-0.35l-2.11,-0.14l0.85,-0.73l1.3,0.26l0.46,-0.4l-0.21,-0.47l-0.46,-0.26l0.45,-0.53l0.33,-0.9l-0.51,-0.49l-0.53,0.22l-0.86,0.91l0.3,-1.01l-0.48,-0.49l-0.46,0.17l-0.42,0.57l-1.62,0.21l-0.67,1.28l0.07,0.43l0.63,0.39l-1.63,1.13l0.21,-1.27l-0.51,-0.54l-0.72,0.46l-0.28,1.12l-0.68,-0.35l-1.19,0.28l-0.15,0.71l0.72,0.33l-0.31,0.32l-0.81,0.02l-0.12,0.25l-0.39,-0.12l-0.48,0.56l0.67,1.13l-1.43,-0.96l-1.23,0.22l-0.01,0.73l1.27,0.78l0.61,0.93l0.67,0.06l0.26,0.58l-0.78,-0.26l-1.35,0.88l0.11,0.78l1.08,0.88l-0.49,0.02l-0.32,0.35l0.01,0.42l0.39,0.61l-0.34,0.41l0.32,1.34l-0.55,0.73l0.07,0.54l0.52,0.68l0.08,3.03l0.37,0.82l1.46,1.7l0.18,0.62l-0.52,0.01l-0.4,-0.72l-1.23,-0.54l-1.17,-1.33l-0.46,-2.75l-0.15,-0.45l-0.38,-0.27l-0.44,0.57l0.34,3.41l0.74,1.31l1.65,0.99l0.69,1.1l0.53,0.24l0.83,-0.1l-0.25,0.83l0.16,0.49l0.97,1.09l-0.15,0.76l-0.66,-0.4l-0.16,-1.11l-0.48,-0.53l-0.44,-0.05l-0.22,0.39l0.09,0.59l-0.14,-0.15l-0.44,0.13l-0.41,-0.8l-1.11,-0.82l-2.26,0.03l-0.44,-0.64l-0.3,-1.33l-0.99,-0.85l-0.48,0.05l-0.09,0.47l0.6,1.55l-0.14,-0.08l-1.16,-1.25l-0.45,-1.34l-0.54,-0.82l-0.69,0.24l-0.3,0.66l-0.16,-0.61l-0.72,-0.0l-0.25,0.17l0.09,0.72l-0.19,0.36l-0.77,0.27l-0.35,-0.53l-0.14,-0.79l0.41,-1.25l0.8,-0.32l0.1,-0.68l0.7,-0.18l0.53,-1.24l1.19,-0.62l0.24,-0.84l-0.21,-0.78l1.6,-1.48l-0.0,-0.59l-2.07,-1.88l-0.54,0.0l-0.8,0.74l-1.61,-0.57l-0.29,-0.77l-0.9,-0.63l-2.18,-0.42l-0.89,-0.9l0.83,-0.95l-0.16,-0.92l-1.01,-0.49l-0.67,-0.71l-1.38,-0.4l-1.07,-0.06l-0.25,-0.22l0.16,-1.04l-0.36,-0.52l-0.44,-0.17l0.34,-0.89l-0.43,-0.4l-0.42,0.05l-0.11,-0.52l-0.29,-0.22l0.27,-0.53l-0.3,-0.64l-0.61,-0.24l-1.79,0.2l-1.53,-1.32ZM762.54,214.51l-0.03,0.03l-0.03,0.01l0.01,-0.04l0.05,-0.01ZM759.92,210.95l-0.03,0.08l-0.05,-0.04l0.08,-0.03ZM755.71,205.81l-0.01,0.01l0.01,-0.01l0.0,0.0ZM755.2,199.06l-0.31,0.34l-0.53,0.05l0.32,-1.02l0.58,0.49l-0.06,0.15ZM751.61,197.48l0.11,0.02l0.84,0.39l-0.39,0.12l-0.56,-0.53ZM755.64,202.25l-0.24,0.12l-0.55,-0.29l0.35,-0.39l0.43,0.56Z",
        name: "Maryland"
    },
    "US-AR": {
        path: "M471.67,293.63l0.69,-30.28l-2.73,-19.4l68.75,0.0l0.55,1.32l0.82,0.61l-0.06,1.37l-0.73,0.37l-0.27,0.72l-1.35,0.64l-0.35,0.81l-0.79,0.37l-1.3,1.99l-0.05,0.65l0.48,0.29l9.79,-0.25l0.57,0.71l-0.96,0.15l-0.58,0.75l0.2,0.53l0.6,0.32l-3.35,1.79l-0.07,0.78l0.58,0.84l-0.45,0.4l-0.14,0.5l0.41,0.74l-1.25,0.46l-0.25,1.17l-1.47,1.57l-0.05,1.35l0.51,2.49l-0.12,0.16l-0.93,-0.1l-0.35,0.21l-0.58,1.31l-1.41,0.63l-0.1,0.52l0.59,0.78l-0.01,0.44l-1.03,0.83l-1.88,0.75l-0.26,0.56l0.27,0.78l-0.14,0.15l-1.06,-0.08l-0.45,0.53l-0.46,1.51l0.27,1.31l-0.24,2.39l-1.16,0.74l-1.38,0.0l-0.16,0.49l0.21,0.75l-0.19,0.29l-0.84,0.16l-0.65,1.35l-1.37,0.82l-0.12,0.81l0.23,0.35l0.91,0.41l-0.06,0.42l-1.06,0.13l-2.05,0.82l-0.05,0.63l0.77,0.69l-0.47,0.88l0.34,1.1l-0.91,0.31l-1.91,1.97l0.41,0.69l0.8,0.44l-0.03,0.34l-1.09,0.27l-0.2,0.45l0.39,0.73l1.3,0.9l-0.08,1.31l-0.58,0.74l-0.14,0.75l0.22,0.34l0.87,0.39l0.23,1.68l-1.0,0.67l-0.12,1.64l-44.02,0.05l-0.09,-9.07l-1.01,-0.81l-0.8,0.08l-0.68,-0.31l-0.84,0.25l-1.03,-0.32l-0.55,0.52l-0.32,-0.01l-0.45,-0.39l-0.52,-0.02l-0.61,-0.92Z",
        name: "Arkansas"
    },
    "US-MA": {
        path: "M809.43,142.43l-0.35,-0.36l-10.34,-0.4l-0.15,-0.17l3.69,-12.11l30.22,0.94l1.94,-1.08l0.75,-1.12l0.99,-0.04l0.87,-0.69l1.45,-0.56l1.26,0.27l-0.78,0.3l0.22,0.62l0.93,0.61l-0.34,0.42l0.18,0.83l0.79,0.54l-0.13,0.25l0.28,0.33l0.86,0.19l0.23,0.26l-0.24,0.34l-1.74,0.35l-1.14,0.52l-0.38,0.9l0.33,0.26l-0.54,0.12l-0.29,0.42l-0.56,0.28l-0.22,0.43l0.07,0.5l-0.98,0.29l-0.18,0.24l0.12,1.39l1.13,0.73l0.08,0.47l0.25,0.18l1.03,-0.23l0.37,0.11l0.49,-0.41l1.1,0.39l0.57,0.57l0.01,0.58l1.23,1.59l-0.41,0.9l-0.4,0.14l-0.08,0.64l1.22,1.07l1.12,0.18l0.26,1.09l-0.14,0.98l0.64,0.85l1.1,0.67l1.37,0.28l0.3,0.42l1.02,0.09l4.1,-1.44l0.35,-0.39l0.46,0.19l-0.04,1.52l-3.48,0.35l-1.11,0.43l-0.13,-0.16l-1.85,0.36l-0.44,-0.23l-0.53,0.25l-0.77,1.05l-2.11,0.51l-0.03,-2.15l0.32,-0.34l0.16,-0.78l-0.42,-0.4l-0.56,0.19l-0.81,-0.33l-0.45,0.39l-0.05,0.76l-0.45,0.56l-0.38,-0.06l-0.89,0.74l-0.51,-0.34l-0.6,0.32l-0.37,0.96l0.02,0.56l-1.03,0.44l-0.37,-0.79l-0.44,-0.11l-0.26,0.41l-0.22,-0.04l-0.2,-0.9l0.14,-0.84l-0.28,-0.45l-0.51,-0.15l1.07,-1.83l-0.06,-0.45l-0.44,-0.11l-0.41,0.21l-0.69,1.11l-0.7,-0.01l-1.11,-0.87l-0.17,-0.23l0.07,-1.63l-0.14,-0.26l-0.53,-0.17l-0.1,-1.89l-0.39,-0.37l-6.25,0.09l-0.21,-0.2l-14.89,-0.21l-0.41,0.36ZM842.82,131.33l-0.03,-0.02l0.08,-0.66l0.34,0.25l-0.39,0.42ZM853.25,145.65l-0.14,-0.56l0.02,-0.01l0.18,0.56l-0.05,0.01ZM852.83,144.13l-0.71,-0.3l-0.37,-1.21l0.95,1.1l0.13,0.41ZM849.72,141.8l-0.05,0.07l-0.07,-0.09l0.12,0.02ZM851.6,156.68l1.07,-0.67l0.15,0.25l0.05,0.23l-0.39,0.19l-0.89,0.0ZM840.6,155.31l0.17,-0.0l0.1,-0.02l-0.13,0.12l-0.14,-0.1ZM841.44,154.95l0.52,-0.77l1.12,-0.74l0.05,0.23l0.48,0.05l-0.04,0.34l0.2,0.17l0.63,0.18l0.04,0.23l-2.02,0.04l-0.98,0.27Z",
        name: "Massachusetts"
    },
    "US-AL": {
        path: "M566.41,349.72l-1.28,-25.24l6.18,-52.37l0.02,-0.28l-0.89,-0.69l-0.43,-0.73l39.27,0.42l6.26,35.66l0.47,1.16l0.05,0.87l0.77,1.39l0.26,1.55l1.54,2.21l0.53,1.5l-0.38,1.63l1.34,1.11l-0.25,0.4l-0.47,0.04l-0.28,0.55l-0.55,0.15l-0.37,0.4l-0.5,1.78l0.02,1.17l-0.93,1.67l-0.36,1.42l0.53,2.46l0.8,1.33l0.22,1.27l-0.34,1.01l0.1,0.51l-0.28,0.43l-0.2,1.91l-0.31,0.6l0.13,1.67l0.97,1.11l0.63,1.6l-40.05,0.01l-0.47,0.48l-0.0,0.91l-0.39,0.89l0.01,0.6l1.9,2.43l1.51,0.93l-0.58,2.02l0.55,1.63l-0.87,1.13l-1.07,0.63l-0.87,-0.69l-0.4,0.44l0.36,1.13l-2.09,0.46l0.13,-0.38l-0.19,-0.57l-0.81,-0.81l0.15,-0.58l-0.14,-0.34l-0.48,-0.24l-0.52,0.41l-0.38,-0.33l-0.34,-0.98l0.5,-1.38l-0.57,-1.68l-0.37,-0.44l-0.64,-0.24l-0.17,-0.69l-0.49,-0.22l-0.43,0.56l-0.52,1.94l-0.37,0.61l-0.39,1.8l-0.13,2.03l-0.32,-0.02l-0.22,-0.57l-0.45,-0.16l-1.32,-0.39l-0.3,0.15l-0.38,-0.24l-0.67,0.13Z",
        name: "Alabama"
    },
    "US-MO": {
        path: "M451.6,169.51l25.16,0.47l16.16,-0.13l21.04,-0.68l0.66,1.1l0.82,0.4l0.26,0.5l1.07,0.66l0.2,0.63l0.96,0.79l-0.74,1.99l-0.13,1.76l0.43,3.1l0.76,1.25l-0.11,1.3l0.92,1.25l0.31,1.34l0.38,0.54l3.88,3.24l0.84,1.48l3.63,2.44l0.63,0.66l0.53,0.98l0.11,1.35l0.38,0.67l-0.22,0.53l0.28,1.59l0.76,1.43l0.65,0.67l0.93,0.21l0.83,-0.4l0.89,-1.07l0.54,-0.11l0.77,0.41l1.39,0.3l1.47,0.76l0.66,0.64l-1.06,1.5l0.02,1.87l-2.8,5.39l-0.09,0.89l0.48,1.66l1.84,1.98l0.87,0.54l1.17,1.18l1.71,1.02l1.31,0.2l1.38,1.2l1.65,0.81l1.15,1.84l1.74,0.83l0.18,1.06l-0.1,1.35l1.14,1.91l0.11,0.57l-1.15,1.42l0.03,1.26l0.61,0.31l0.23,0.85l0.97,1.39l0.18,1.1l0.3,0.32l1.65,0.92l0.55,-0.25l0.1,-0.45l0.59,0.92l0.38,0.16l0.58,-0.12l-0.07,1.4l-0.45,0.88l0.31,1.31l-1.32,2.95l-0.44,0.01l-1.1,-1.03l-0.61,0.04l-0.45,0.64l-0.6,2.0l-0.41,0.44l0.16,-0.71l-0.42,-0.97l-0.85,-0.25l-0.75,0.5l-0.08,0.92l0.38,0.53l-0.1,0.54l0.38,1.12l-0.18,0.24l-1.11,0.21l-0.23,0.4l0.09,0.5l0.5,0.62l-1.35,0.14l-0.2,0.62l1.12,1.63l-0.81,0.5l-0.76,1.63l-9.37,0.24l1.07,-1.61l0.81,-0.4l0.25,-0.69l1.34,-0.63l0.34,-0.75l0.57,-0.24l0.33,-0.48l0.01,-1.92l-0.87,-0.72l-0.1,-0.61l-0.89,-1.08l-69.04,0.0l0.08,-47.55l-0.95,-0.61l-1.11,-0.08l-1.35,-0.66l-0.14,-0.78l-0.68,-0.52l-0.27,-0.57l0.0,-0.79l-0.29,-0.55l-0.49,-0.1l-0.26,-0.48l-1.01,-0.59l-0.54,-0.92l-0.63,-0.58l0.68,-0.37l0.14,-1.01l1.1,-0.99l0.13,-0.64l0.92,0.18l0.55,-0.33l0.16,-0.43l-0.25,-0.58l0.02,-0.96l-0.89,-0.63l0.01,-0.56l-0.3,-0.41l-1.09,-0.06l-1.27,0.75l-0.73,-0.61l-0.68,-0.17l-0.23,-0.42l-0.6,-0.26l-1.57,-1.39l-0.96,-0.27l0.21,-1.31l-1.13,-1.45l0.1,-0.89l-0.34,-0.33l-0.94,-0.18l-0.52,-0.73l-0.69,-0.25l-0.5,-2.01l-0.51,-0.84l0.03,-0.6l-0.38,-0.48l-0.77,-0.26l-0.03,-0.34Z",
        name: "Missouri"
    },
    "US-MN": {
        path: "M428.9,7.99l28.82,0.0l0.08,1.07l0.6,0.7l0.9,0.44l1.91,-0.37l1.2,-1.29l0.91,-0.25l2.17,2.15l1.8,0.33l0.27,1.14l1.85,1.38l1.86,0.54l2.85,-0.23l0.28,0.22l0.09,0.57l0.66,0.42l5.47,0.31l0.39,0.24l0.47,1.5l0.69,0.59l4.57,-0.45l0.84,-0.55l0.13,-0.63l2.66,-0.58l4.24,0.25l1.46,0.75l3.55,0.85l-1.14,0.6l-0.06,0.82l0.48,0.44l0.71,0.13l1.45,-0.16l0.94,0.18l0.25,0.53l0.12,1.42l1.49,2.23l0.69,0.09l1.14,-0.63l-0.07,-1.37l0.18,-0.22l1.74,-0.29l1.18,0.06l0.23,0.13l0.55,1.41l0.55,0.56l2.04,0.88l1.61,0.29l0.49,0.53l-0.17,0.26l0.1,0.53l0.56,0.36l1.37,0.16l-0.06,0.28l0.42,0.52l1.5,-0.06l1.12,0.3l0.92,-0.4l1.49,-0.19l3.17,-2.1l2.83,-1.2l0.18,0.88l0.53,0.42l0.36,1.12l0.93,0.55l2.43,-0.41l0.85,0.41l0.72,-0.23l5.73,-0.4l0.58,0.22l1.21,1.63l1.23,0.66l0.59,0.05l1.8,-0.6l1.17,0.25l-0.81,0.73l-5.26,2.34l-6.95,1.97l-4.09,1.92l-2.49,2.06l-1.05,0.44l-7.72,7.28l-1.04,0.47l-1.25,1.32l-1.42,0.81l-0.78,0.8l-1.54,0.75l-3.09,2.12l-1.05,1.54l-0.6,0.35l-0.23,0.85l-0.83,-0.06l-0.49,0.46l-0.02,10.93l-0.59,0.44l-0.31,0.57l-1.06,-0.01l-0.6,0.69l-0.86,0.08l-0.68,0.69l-2.2,0.91l-1.1,1.6l-0.01,0.66l-1.9,2.01l-0.17,1.83l0.32,0.87l0.29,0.24l1.88,0.27l0.42,1.14l0.81,1.1l-0.67,1.62l-0.67,0.68l-0.22,0.76l-0.15,1.51l0.36,1.19l-0.81,1.06l0.48,1.31l0.19,1.46l-0.3,0.63l0.01,1.33l-0.61,1.15l0.1,0.5l1.39,0.9l1.65,1.64l0.68,0.38l2.98,0.55l0.83,0.75l0.87,1.34l2.82,0.64l2.27,1.85l2.07,3.29l2.46,1.76l0.64,0.23l1.42,0.0l1.0,0.7l0.85,0.15l0.68,1.23l0.99,0.49l0.17,0.32l0.09,1.77l0.55,1.17l-0.19,1.37l0.14,2.75l-80.36,0.02l-0.0,-34.0l-0.67,-1.19l-0.82,-0.73l-0.57,-0.35l-2.01,-0.43l-0.89,-1.71l-1.4,-1.61l0.21,-0.52l2.96,-1.99l1.08,-1.88l0.5,-2.2l-0.3,-1.41l0.3,-1.39l-0.12,-1.61l-0.48,-0.95l-0.1,-2.1l-1.77,-2.38l-0.09,-0.61l-0.34,-0.42l-0.15,-1.95l-0.64,-0.9l0.22,-1.47l-0.31,-1.37l0.23,-1.56l0.4,-0.82l-0.18,-0.55l-0.52,-0.28l-0.35,-0.9l-0.01,-3.28l-0.33,-1.79l0.11,-2.48l-0.41,-0.76l0.25,-1.27l-0.16,-0.97l0.11,-1.3l-0.38,-0.51l-0.25,-1.17l-0.89,-2.0l-0.52,-0.6l-0.39,-1.26l0.08,-1.11l-0.49,-0.5l-1.31,-3.47l-0.11,-1.45l0.22,-1.5l-0.43,-1.8l0.32,-1.02l-0.52,-2.16l0.86,-2.35l-0.13,-0.96l-1.85,-5.46ZM461.11,0.56l1.34,0.51l1.19,-0.06l0.22,0.35l-0.0,1.03l-0.44,0.83l-1.75,0.65l-0.15,-0.46l-0.41,-0.15l-0.01,-2.71Z",
        name: "Minnesota"
    },
    "US-CA": {
        path: "M6.7,168.8l0.41,-1.17l0.54,0.28l0.53,-0.22l0.2,-1.06l0.51,-0.85l1.11,-0.47l0.41,-0.56l-0.32,-0.66l-0.88,-0.06l0.72,-2.53l-0.65,-1.25l-0.08,-0.71l1.09,-3.1l0.49,-2.8l-0.32,-1.54l0.13,-0.2l-0.17,-0.58l-0.32,-0.26l-0.04,-0.76l-0.52,-1.02l-0.04,-0.78l-0.74,-0.87l-1.0,-0.63l0.7,-1.32l0.05,-2.19l64.72,0.0l0.01,54.73l0.15,0.57l29.2,23.69l22.85,19.77l31.53,28.04l0.21,2.18l0.76,0.65l0.41,1.33l0.83,0.42l1.02,1.89l0.07,0.74l0.72,1.01l-0.12,0.51l0.17,0.64l3.1,2.06l0.65,0.5l0.07,0.33l-1.44,1.37l-2.51,1.37l-0.49,0.68l-0.28,1.04l-1.31,1.09l-0.2,0.77l0.41,0.72l-0.32,0.49l0.39,2.5l-0.41,0.61l-0.23,1.97l-0.65,0.71l-0.73,1.44l-1.33,0.29l-0.32,0.56l0.36,0.62l-0.29,1.14l0.6,0.82l0.14,0.9l-0.28,2.25l0.64,0.75l2.06,0.35l0.75,0.75l0.16,1.84l-0.87,0.72l-0.17,1.11l-1.96,-0.21l-1.0,0.62l-36.8,3.1l-0.01,-0.77l0.27,-0.1l0.2,-0.47l-0.32,-0.83l-0.62,-0.67l-0.97,-0.37l-0.46,0.08l-0.01,-0.86l-0.4,-0.75l0.42,-0.67l0.03,-0.53l-0.92,-3.28l-0.87,-1.72l-2.26,-2.89l-3.66,-2.66l-1.41,-1.35l-2.38,-1.29l-2.23,-2.05l-2.04,-0.36l-0.69,0.29l-0.28,0.86l-0.56,-0.44l-0.78,-0.04l-0.14,-0.17l0.38,-0.66l-0.13,-1.29l-0.73,-1.56l-1.2,-1.39l-0.98,-0.43l-3.8,0.54l-0.8,-0.38l-2.33,-0.5l-1.38,-0.76l-0.61,0.02l-1.05,-0.76l-0.86,-1.96l-0.91,-0.21l-1.83,-1.53l-2.18,-1.0l-1.15,-0.12l-0.78,0.16l-0.56,0.4l-1.15,-0.6l-1.07,0.22l-2.44,-1.01l-0.9,0.18l-1.45,-0.29l-4.2,0.43l-0.74,-1.12l-0.65,-0.51l-1.32,-0.31l0.67,-2.09l-0.46,-1.06l0.25,-1.67l-0.79,-0.96l0.62,-2.11l-0.19,-1.97l-1.12,-0.84l-1.14,0.03l-1.42,-0.74l0.03,-1.19l0.65,-0.22l0.16,-0.51l-0.84,-1.66l-0.73,-0.5l-1.42,-0.39l-2.3,-2.79l-1.82,-0.67l-0.84,-2.06l-0.68,-0.43l-1.22,-1.3l-0.22,-1.1l-0.55,-0.96l-1.19,-0.54l-1.24,-2.18l-0.53,-0.52l-2.11,-1.16l-0.3,-0.61l-0.47,-0.34l-0.49,-2.55l-0.39,-0.9l0.3,-0.23l0.09,-0.42l-0.18,-0.43l-0.53,-0.36l0.26,-0.45l0.58,0.38l0.69,-0.16l0.6,-0.83l0.21,-1.1l0.71,-0.16l0.06,-0.69l-0.46,-0.27l0.13,-1.04l-1.83,-2.69l-0.65,-0.26l-0.9,0.26l-1.79,-0.04l-1.13,-0.64l-1.3,-1.43l-1.03,-0.75l-1.15,-1.61l0.25,-2.02l-0.16,-0.95l-0.75,-1.85l-0.43,-0.46l-0.5,-0.08l-0.03,-0.89l0.38,-1.02l-0.36,-2.17l0.24,-0.53l0.95,-0.04l0.22,0.93l-0.2,1.69l0.31,0.78l1.34,0.83l0.49,-0.02l0.78,0.88l1.21,0.42l0.57,0.73l0.87,0.15l0.7,-0.33l-0.08,-0.67l-0.35,-0.5l-0.72,-0.29l-0.25,-0.4l-0.96,-2.79l-0.63,-0.48l0.04,-0.6l-1.5,-0.54l0.21,-0.92l-0.15,-0.86l-1.37,-0.99l0.49,-0.67l0.69,-0.11l0.95,-0.81l1.33,0.57l1.59,-0.6l5.43,0.88l0.53,-0.18l0.31,-1.21l0.56,-0.15l0.77,0.73l0.66,0.22l1.07,0.81l0.54,-0.38l-0.07,-0.36l-0.55,-0.68l-1.79,-1.22l-1.47,0.04l0.08,-0.45l-0.39,-0.47l-0.43,0.18l-0.72,0.98l-1.68,0.16l-0.36,0.31l-0.21,-0.38l-0.94,-0.1l0.1,-0.59l-0.18,-0.3l-0.86,-0.22l-0.83,0.42l-0.37,0.79l-0.88,0.51l-1.39,-0.46l-0.54,-0.62l-1.65,-0.86l-0.53,0.16l-0.42,0.58l-0.84,0.08l-0.38,0.47l0.11,1.57l0.28,0.55l-0.3,1.28l0.38,0.39l-0.22,0.6l0.14,0.44l-2.52,-1.88l-0.46,-0.02l-0.12,0.29l-0.85,-0.63l-0.43,-0.8l-1.32,-0.69l-0.56,-0.73l-0.55,-0.03l0.25,-1.08l0.24,0.62l1.0,1.03l0.49,0.12l0.22,-0.45l-0.16,-0.56l-2.04,-2.65l-0.26,-0.69l-1.25,-0.92l-0.12,-0.65l-0.78,-1.42l-0.57,-0.53l-2.3,-1.26l-2.65,-3.25l-1.36,-1.07l-2.57,-2.67l-0.03,-0.3l0.49,-0.59l0.14,-0.64l-0.22,-1.66l-0.91,-1.64l-0.93,-2.81l0.52,-2.58l0.45,-0.74l-0.41,-1.27l0.02,-1.33l-0.75,-1.24l-0.36,-1.61l-2.23,-2.98l-1.14,-0.73l-0.15,-0.65l-0.67,-0.88l-3.58,-2.62l0.15,-1.17l-0.83,-2.1l0.61,-2.07l0.59,-1.14ZM97.75,298.07l1.14,0.41l0.74,0.97l-0.65,-0.28l-0.94,0.2l-0.28,-1.3ZM97.08,306.81l1.02,1.01l0.39,0.23l-0.94,-0.39l-0.47,-0.84ZM80.99,300.74l0.1,-0.04l0.76,0.4l-0.32,-0.05l-0.53,-0.32ZM75.73,286.91l0.84,0.33l0.95,-0.0l1.05,0.45l-2.13,0.27l-0.63,-0.28l-0.09,-0.76ZM79.78,287.45l0.43,-0.32l0.21,0.15l-0.19,0.09l-0.45,0.09ZM70.61,287.96l2.0,-0.32l0.31,0.52l0.51,0.24l-0.83,0.55l-0.99,0.11l-0.47,-0.25l-0.53,-0.86Z",
        name: "California"
    },
    "US-IA": {
        path: "M438.84,115.24l82.4,-0.03l0.72,2.23l1.85,1.0l0.02,0.46l-1.03,1.44l-0.26,0.94l0.42,4.43l0.79,1.17l0.22,1.53l0.57,0.99l0.71,0.6l4.72,1.13l1.01,1.79l-0.38,0.8l0.22,0.67l3.26,2.32l0.6,2.13l3.45,2.28l0.41,1.43l-0.71,3.48l-1.76,1.51l-0.67,1.6l0.0,1.09l-1.32,1.02l-2.49,0.6l-0.96,0.92l-0.55,0.16l-4.43,0.32l-0.92,0.55l-0.74,1.41l-0.38,2.18l0.29,0.96l1.41,0.93l0.37,0.47l0.23,0.65l0.04,1.55l-0.22,0.54l-1.83,2.01l-0.41,1.87l-0.6,1.11l-2.83,0.94l-1.06,0.79l-0.28,0.9l0.6,0.77l0.0,1.72l-0.54,0.14l-1.18,-0.78l-0.22,-0.66l-1.14,-0.79l-0.25,-0.45l-0.8,-0.36l-0.2,-0.69l-0.84,-0.65l-21.24,0.69l-14.35,0.12l-7.2,0.04l-19.64,-0.5l-0.17,-0.87l-1.21,-0.69l-0.27,-0.54l0.58,-0.87l-0.14,-0.86l0.26,-1.16l-0.26,-1.88l-0.51,-0.57l0.18,-3.14l-0.96,-0.56l0.08,-0.55l0.71,-0.83l-0.03,-0.47l-1.19,-0.51l0.39,-2.12l-0.29,-0.37l-0.93,-0.2l0.25,-0.58l-0.09,-0.42l-0.67,-0.41l-0.7,0.18l0.08,-0.71l-0.34,-0.56l-0.03,-1.06l0.31,-0.46l0.25,-1.72l-1.4,-1.93l0.18,-0.87l-0.18,-0.74l-1.66,-1.38l-0.28,-1.5l-1.01,-0.84l0.11,-1.84l-0.99,-1.64l0.26,-1.38l-0.22,-0.98l-0.53,-0.46l-0.78,-0.18l-0.32,-1.24l-0.41,-0.61l0.02,-0.57l-1.32,-1.06l-0.38,-0.58l0.6,-1.23l0.54,-0.4l0.37,-1.57l0.44,-0.73l0.1,-1.46l0.52,-0.55l0.26,-1.05l-0.43,-2.0l-0.42,-0.25l-0.79,-0.05l-0.04,-0.53l0.41,-0.49l0.05,-1.56l-0.89,-1.22l0.0,-0.66Z",
        name: "Iowa"
    },
    "US-MI": {
        path: "M591.56,147.18l0.95,-0.52l1.06,-1.03l0.87,-1.25l1.7,-3.51l1.79,-2.4l1.67,-4.11l0.85,-4.52l-0.13,-5.66l-1.5,-3.87l0.62,-0.35l0.42,-0.66l-0.49,-0.52l-1.14,0.35l-2.82,-6.77l0.26,-1.1l1.25,-1.65l0.14,-0.86l-0.38,-2.16l0.08,-0.67l-1.02,-1.55l0.04,-0.49l2.08,-2.12l1.8,-3.43l0.24,-0.9l-0.14,-1.53l0.47,-2.26l-0.53,-1.47l0.43,-0.48l0.81,-0.34l0.8,0.09l0.63,-0.34l0.24,-3.05l1.08,0.05l0.89,-1.17l1.14,0.58l0.67,-0.2l1.16,-2.17l0.99,-0.93l0.81,-1.39l0.57,-0.08l-0.69,0.63l0.33,1.48l-0.56,0.59l-0.4,0.88l0.64,0.48l-0.87,2.24l0.68,1.38l0.28,0.16l0.45,-0.13l0.44,0.57l0.65,-0.12l1.23,-1.85l1.21,-2.97l0.25,-1.82l-0.23,-3.06l0.73,-0.79l2.4,-1.14l2.85,-0.09l1.07,-0.41l0.38,-0.52l-0.17,-0.61l-1.74,-0.33l-0.57,-0.49l-0.46,-0.93l0.0,-1.2l0.26,-0.47l1.28,-0.93l0.79,-0.93l0.08,-0.66l1.7,0.04l0.92,-0.73l2.59,1.36l1.29,0.99l0.79,0.23l2.08,-0.06l1.33,0.55l1.0,1.07l0.35,1.09l0.69,0.54l2.46,0.1l1.53,1.14l1.9,0.36l0.69,0.68l1.2,0.4l1.36,0.15l0.62,0.34l0.91,0.79l-0.21,0.36l0.05,0.65l0.8,1.3l0.6,0.29l0.19,0.8l-0.25,0.41l-0.6,-0.33l-1.02,0.35l-0.57,1.6l0.59,1.29l1.4,1.1l0.44,1.26l0.25,2.04l-0.42,1.46l-0.21,4.9l-0.23,0.46l-0.59,0.08l-0.66,0.78l-0.75,-0.06l-0.91,0.59l-0.37,0.78l-0.25,2.2l-0.32,0.41l-0.0,0.41l-1.16,0.24l-0.32,0.68l-1.88,0.09l-0.82,0.42l-1.01,2.16l0.13,0.46l-0.25,0.39l-0.25,1.5l0.07,0.77l0.37,0.69l0.77,0.66l2.67,1.13l0.87,0.07l1.26,-0.89l0.85,-1.16l0.58,0.27l0.39,-0.15l1.33,-2.09l0.28,-0.83l0.76,-0.81l0.03,-0.45l0.44,-0.21l0.75,-0.88l1.43,-0.12l1.16,-0.42l1.01,-0.81l0.94,-0.24l1.93,0.83l0.97,0.77l0.78,1.07l0.79,2.02l0.88,5.33l0.51,1.49l0.33,3.31l0.79,3.3l0.91,1.67l0.02,0.41l-1.05,2.81l0.17,0.95l-0.18,1.21l-0.94,2.24l-0.42,0.32l-0.31,-1.07l0.16,-0.68l-0.4,-0.4l-0.93,-0.32l-0.44,-0.0l-1.66,0.91l-0.22,0.75l0.33,0.62l-0.8,0.32l-0.43,0.64l-0.18,0.93l0.21,0.67l-0.26,0.91l-0.58,0.54l-1.7,0.53l-1.33,1.4l-1.04,3.06l-0.2,0.95l0.13,0.41l-0.4,0.71l-0.43,0.09l-0.18,0.76l-0.6,0.16l-0.55,0.85l-0.58,0.37l-0.7,1.01l-0.2,0.85l-0.61,0.57l-19.97,0.68l-0.0,-0.68l-0.4,-0.4l-30.67,-0.02ZM610.84,88.0l-0.04,-0.14l0.09,-0.11l-0.04,0.22l-0.01,0.04ZM535.15,55.52l5.24,-1.66l4.06,-2.9l6.12,-0.65l1.51,-0.61l1.33,-0.88l1.42,-1.31l1.01,0.14l1.64,-0.49l1.31,-1.92l3.31,-2.28l-0.13,1.01l0.17,0.59l0.5,0.39l1.34,0.33l-0.24,0.97l0.12,0.34l0.65,0.18l0.46,0.59l0.03,0.58l-0.59,2.16l0.3,0.89l-0.37,0.37l0.16,0.53l0.7,0.06l1.41,-1.62l-0.01,-0.24l0.58,-0.16l0.65,-0.53l-0.55,0.95l0.51,0.51l0.92,-0.5l0.7,-1.03l1.11,-0.28l3.24,0.13l1.54,0.36l0.69,0.36l0.4,0.61l0.67,0.08l0.2,0.39l0.64,0.08l0.35,1.01l2.17,2.76l0.95,0.43l0.34,1.44l0.69,0.39l1.9,0.28l0.78,-0.27l1.1,0.08l0.6,-0.52l0.98,-0.27l0.89,1.12l1.02,0.7l1.04,-0.1l0.84,-0.66l0.48,0.5l0.91,0.3l0.35,0.38l0.69,-0.22l2.07,-2.09l3.16,-1.32l2.01,-1.26l0.91,0.23l3.54,-0.64l5.32,0.48l0.82,-0.14l2.82,-1.26l1.38,-0.39l2.64,0.04l-0.47,2.82l0.18,0.68l-0.53,0.96l0.56,0.87l0.61,0.19l0.82,-0.26l0.4,0.36l1.71,0.58l1.22,-0.22l1.23,-0.63l0.58,0.5l0.12,0.69l0.78,0.31l1.41,-0.52l1.23,-1.23l0.72,0.08l0.72,0.78l0.76,1.63l0.22,1.43l0.34,0.51l-1.01,0.81l0.35,0.9l0.42,0.39l1.44,-0.18l0.5,0.49l0.6,0.11l-0.17,0.67l0.19,0.44l0.84,0.91l0.92,0.26l0.5,0.41l-1.29,0.35l-3.3,-0.64l-1.05,0.02l-0.65,-0.26l-0.57,0.2l-1.35,-0.36l-0.44,0.26l-0.53,-0.01l-0.55,-0.78l-1.63,-0.29l-0.63,0.32l-0.29,1.06l-0.62,0.6l0.02,1.85l-0.9,-0.33l-0.75,-0.94l-0.75,-0.22l-0.4,-0.6l-1.31,-1.13l-2.34,-0.86l-1.63,-0.19l-0.97,-0.58l-0.57,0.19l-0.65,-0.32l-0.64,0.25l-1.13,-0.1l-0.66,0.31l-1.59,2.07l-3.64,0.18l-0.69,0.62l-2.06,-0.58l-2.96,0.45l-0.82,0.65l-0.94,2.14l-0.82,0.14l-0.95,0.66l-0.68,0.16l-0.07,-0.44l0.47,-1.17l-0.04,-0.36l-0.59,-0.61l-1.05,0.17l-0.92,0.73l-0.93,-0.47l-0.7,0.06l-0.41,0.3l-0.02,0.75l-1.02,1.67l-1.32,0.38l0.08,-1.2l-0.32,-0.96l0.49,-0.84l0.09,-0.62l-0.13,-0.39l-0.63,-0.24l-0.52,0.45l-0.33,1.05l-0.58,0.74l-0.58,2.23l-1.25,0.67l-1.69,2.5l-0.98,2.26l-3.27,4.36l-0.81,0.6l-0.01,0.78l-1.23,-1.23l0.4,-1.47l0.86,-1.44l-0.32,-0.81l-0.57,-0.34l-1.42,0.58l-1.22,-0.01l0.18,-1.06l0.61,-0.45l0.39,-0.76l-0.22,-1.2l0.34,-0.36l0.09,-0.59l-0.43,-0.91l0.23,-0.77l-1.73,-1.6l-1.1,-0.17l-0.54,-0.45l-0.89,0.08l-0.61,-0.25l0.5,-1.11l-0.78,-1.44l-1.07,-0.57l-2.25,-0.33l-0.66,-0.39l-0.69,0.04l-1.8,-0.63l-1.15,0.11l-0.48,0.25l-1.42,-0.53l-1.68,-0.02l-4.42,-2.19l-15.43,-3.72l-1.22,-2.66l-0.47,-0.55l-1.44,-0.61l-0.39,-0.42l-0.79,0.17l-0.07,-0.2ZM594.86,71.41l-0.05,0.36l-0.5,0.22l-0.92,1.15l-0.03,0.49l-0.37,-0.25l-0.18,-0.28l0.46,-0.42l0.74,-1.34l0.85,0.05ZM637.67,67.18l2.1,-1.04l0.29,-0.53l-0.13,-0.56l1.03,0.3l0.59,1.21l0.75,0.26l-0.43,0.84l-0.42,0.11l-1.46,-0.53l-0.85,0.29l-1.46,-0.37ZM630.86,57.21l0.68,-0.59l0.48,0.13l-0.55,1.04l0.09,1.05l-0.35,-1.26l-0.37,-0.37ZM632.03,60.7l0.36,0.48l0.09,0.5l-0.51,-0.71l0.06,-0.27ZM626.47,70.68l1.25,0.39l0.4,-0.13l0.34,0.25l-0.22,0.35l-0.82,-0.01l-0.95,-0.85ZM610.55,74.21l-0.79,-0.07l1.02,-2.54l0.28,2.15l-0.51,0.46ZM603.02,83.31l0.44,0.31l-0.17,0.47l-0.34,-0.65l0.07,-0.12ZM593.15,56.73l-0.2,-0.37l0.1,-0.31l0.34,0.29l-0.23,0.39ZM563.06,44.08l0.15,-1.33l1.16,-0.81l1.48,-1.76l2.12,-1.16l0.63,0.09l0.62,-0.47l2.3,-0.57l3.54,0.0l1.03,0.67l-0.59,0.26l-1.34,-0.26l-2.44,0.43l-0.2,0.24l0.22,0.64l0.66,0.18l-1.28,0.69l-0.32,0.5l-0.64,0.3l-0.74,0.75l-0.75,0.17l-0.49,0.69l-0.08,0.58l-1.35,1.09l-0.97,1.8l-0.59,-0.84l0.88,-0.76l0.39,-1.75l-0.56,-0.47l-0.23,0.11l-0.73,0.76l-0.15,0.65l-0.51,-0.35l-1.23,-0.07ZM553.84,30.03l0.66,-0.44l0.23,-0.5l-0.31,-0.21l0.58,-0.38l2.63,-1.31l0.72,-0.1l1.86,-0.82l2.29,-1.36l0.64,-0.12l-0.46,0.49l-0.01,0.75l-0.49,0.38l-4.78,1.88l-1.02,0.8l0.17,0.37l-2.07,0.86l-0.37,-0.01l-0.26,-0.29Z",
        name: "Michigan"
    },
    "US-GA": {
        path: "M610.09,270.84l37.76,-0.27l-1.38,0.76l-0.7,1.25l-0.71,0.57l-0.62,1.33l-0.08,1.06l0.6,0.75l1.46,0.89l0.86,0.25l2.02,1.96l0.7,0.31l1.68,-0.02l0.44,0.26l0.41,1.37l1.04,1.48l0.49,2.1l1.03,0.87l0.52,1.01l0.45,0.31l0.57,1.52l0.88,0.4l0.84,0.94l1.57,0.88l1.36,1.11l1.53,2.82l1.82,0.79l1.86,1.67l0.02,1.86l0.91,1.01l0.43,-0.06l-0.02,0.88l0.56,0.7l0.63,0.2l0.29,1.01l3.73,2.0l0.28,0.65l-0.12,0.94l1.01,1.62l0.51,1.68l-0.19,0.56l0.28,0.65l-0.1,1.01l0.48,0.61l1.23,0.5l0.92,0.66l0.14,0.43l0.44,0.29l0.5,2.12l0.53,0.55l-0.38,2.04l0.41,1.34l1.01,0.92l1.31,0.03l1.06,0.81l1.09,0.25l-0.49,0.38l-0.42,-0.34l-0.47,0.16l-0.52,0.77l0.31,0.8l-0.28,0.21l-1.07,-0.32l-0.58,-0.56l-0.64,0.26l0.0,0.61l-0.4,0.31l0.23,0.68l0.77,0.12l0.29,0.26l-0.63,0.82l-1.18,-0.02l-1.04,-0.55l-0.48,0.25l-0.09,0.37l0.25,0.48l0.89,0.4l-0.5,0.5l0.14,0.35l-0.29,0.54l0.52,0.56l-0.24,0.19l-0.57,-0.21l-0.88,0.25l-0.22,0.6l0.73,0.53l-0.03,0.72l0.48,0.04l0.95,-0.6l-0.89,1.25l-0.25,-0.44l-0.44,-0.08l-0.53,0.58l0.13,0.61l0.61,0.67l-1.77,-0.32l-0.71,-0.36l-0.6,0.14l-0.06,0.65l0.39,0.34l2.24,0.62l0.72,0.58l-0.55,0.3l-0.99,1.33l-0.12,-1.11l-0.41,-0.2l-0.59,0.18l-0.25,0.4l0.08,0.93l-0.46,0.06l-0.21,0.67l-0.24,0.08l-0.01,0.47l0.88,1.04l-0.72,0.22l-0.33,0.39l0.24,0.49l0.46,0.17l-0.47,1.17l-0.44,0.4l0.63,1.45l-0.08,0.49l-0.64,0.13l-2.11,-0.52l-3.17,-1.34l-1.17,0.09l-0.28,0.51l-0.58,0.14l-0.49,0.94l-0.1,1.69l0.55,1.3l-0.55,3.06l-0.26,0.07l-1.29,-0.04l-0.27,-0.73l0.1,-1.03l-0.57,-0.84l-0.03,-0.68l-0.26,-0.12l-40.95,-2.67l-0.48,-0.48l-0.23,-1.76l-0.7,-1.7l-0.36,-0.34l0.17,-0.5l-0.41,-1.28l-0.84,-1.34l-0.42,-0.28l-0.12,-1.36l0.31,-0.58l0.18,-1.81l0.26,-0.33l-0.05,-0.75l0.34,-1.13l-0.27,-1.5l-0.79,-1.27l-0.5,-2.15l0.31,-1.23l0.96,-1.74l-0.0,-1.22l0.43,-1.6l1.52,-0.82l0.6,-1.18l-0.41,-0.59l-1.06,-0.68l0.39,-0.99l-0.04,-0.68l-0.57,-1.58l-1.49,-2.14l-0.52,-2.33l-0.53,-0.61l-0.01,-0.76l-0.46,-1.13l-6.25,-35.47ZM678.57,328.71l0.34,-0.04l-0.12,0.34l-0.08,-0.13l-0.15,-0.17ZM674.24,342.17l-0.1,-0.24l0.18,-0.35l-0.05,0.47l-0.03,0.12Z",
        name: "Georgia"
    },
    "US-AZ": {
        path: "M154.94,313.68l0.12,-1.4l0.89,-1.11l0.31,-0.92l0.33,-0.23l1.47,0.28l0.82,-0.14l0.41,-0.45l0.09,-0.95l0.98,-0.97l-0.15,-2.2l-0.56,-0.94l-0.84,-0.44l-1.36,-0.09l-0.76,-0.57l0.35,-1.96l-0.19,-1.11l-0.58,-0.82l0.36,-0.71l-0.18,-0.62l1.17,-0.4l1.61,-2.53l0.23,-1.97l0.45,-0.71l-0.38,-2.49l0.38,-0.61l-0.44,-1.02l1.3,-1.09l0.5,-1.44l2.69,-1.53l1.55,-1.49l0.17,-0.53l-0.27,-0.85l-3.24,-2.36l-0.46,-0.12l0.02,-1.0l-0.74,-1.04l-0.07,-0.75l-1.12,-2.06l-0.81,-0.36l-0.38,-1.27l-0.68,-0.52l-0.29,-2.76l0.37,-0.81l-0.28,-0.55l0.74,-0.49l0.16,-1.2l-0.32,-2.58l-1.14,-2.77l0.27,-0.72l0.03,-1.43l-0.75,-2.3l0.02,-0.9l0.38,-1.25l-0.97,-1.41l-0.15,-0.64l0.3,-0.48l0.1,-1.09l2.13,-0.81l1.67,0.58l1.22,-0.33l1.13,1.65l0.8,0.49l1.38,-0.07l0.86,-0.56l0.6,-1.92l0.68,-1.1l0.04,-13.8l77.02,0.06l-0.01,98.74l-30.99,-0.1l-57.99,-19.96Z",
        name: "Arizona"
    },
    "US-MT": {
        path: "M139.97,32.58l-0.3,-0.58l-0.6,-0.39l-0.49,-1.28l-1.31,-1.05l-1.65,-2.0l0.01,-19.3l186.21,-0.0l0.14,77.75l-108.87,0.0l-0.4,0.4l-0.01,9.14l-1.76,-1.59l-0.13,-0.77l-1.48,-1.94l-1.31,-0.51l-1.68,1.0l-0.08,0.49l0.23,0.41l-0.66,0.45l-0.18,1.38l-2.44,-0.09l-1.85,0.71l-0.37,-0.4l-0.65,-0.24l-3.32,0.45l-2.49,-0.57l-1.57,0.69l-0.65,1.38l-2.12,-0.52l-2.72,-0.33l-1.23,0.47l-0.99,0.91l-0.23,0.63l-0.98,-0.38l-0.85,-0.65l-0.17,-0.48l0.18,-0.77l-1.08,-1.33l0.34,-0.48l-0.06,-0.46l-1.61,-2.55l-0.76,-0.61l-0.85,-0.3l-0.57,0.03l-0.81,0.46l-0.32,-0.54l-1.2,-0.64l-0.54,-1.07l0.55,-0.67l-0.02,-1.26l-1.11,-1.99l-0.81,-0.21l-0.54,-1.34l-1.88,-2.03l0.02,-1.35l-0.74,-1.01l0.13,-1.29l-0.33,-0.45l-0.52,-0.23l0.33,-0.86l-0.34,-0.69l-1.25,-0.51l-0.23,-0.51l-0.99,-0.69l-0.83,-0.24l-0.42,0.3l-0.03,0.76l-0.62,0.31l-0.96,1.22l-1.7,0.55l-0.59,0.87l-0.48,0.23l-0.41,-0.03l-1.64,-1.37l-1.09,-0.24l-0.11,-0.69l0.61,-0.64l0.08,-1.01l-0.83,-1.29l0.7,-1.05l1.06,-0.22l0.73,-0.85l-0.44,-0.97l0.25,-0.64l-0.1,-0.53l-1.01,-0.46l-0.18,-0.69l0.49,-1.12l-0.71,-0.9l0.65,-0.15l0.34,-0.45l-0.3,-1.57l0.72,-1.45l0.05,-0.94l0.47,-1.03l0.01,-0.63l-0.23,-0.39l0.75,-0.67l0.18,-2.82l-0.27,-0.34l-0.52,-0.14l-1.9,0.58l-1.51,0.06l-0.64,-0.36l0.27,-0.64l-0.44,-0.69l-0.87,-0.38l-0.9,0.47l-0.24,-0.88l-0.9,-0.35l-1.12,-0.82l-0.29,-1.68l-1.33,-1.13l-0.68,-0.25l-0.21,-0.61l-1.34,-1.3l-0.72,-1.05l-1.31,-1.0l-0.87,-1.38l-2.65,-0.86l-1.18,-1.49l-1.59,-0.91l0.57,-0.26l0.15,-0.61l-0.62,-0.5l-0.56,-0.88l0.47,-0.44l0.13,-0.73l-0.59,-0.94l-0.08,-0.9l-0.73,-0.62Z",
        name: "Montana"
    },
    "US-MS": {
        path: "M515.87,335.38l1.34,-0.07l0.48,-0.44l0.54,-2.14l-0.51,-1.46l1.44,-1.3l0.47,-2.76l0.79,-1.7l1.66,-0.82l1.12,-1.46l1.27,-0.73l0.35,-0.59l0.06,-0.83l-0.47,-0.71l0.99,-0.17l1.02,-1.95l0.89,-0.99l-0.07,-0.74l-1.27,-0.49l-0.24,-0.78l-1.44,-0.93l0.11,-1.66l-0.75,-0.7l-0.29,-0.64l-0.01,-0.2l0.96,-0.14l0.48,-0.53l-0.16,-0.85l-1.12,-0.41l0.33,-1.33l0.96,-1.14l-0.05,-0.44l-0.34,-0.4l-1.06,-0.46l0.1,-2.16l0.77,-0.32l0.29,-0.71l-0.33,-2.06l-1.0,-0.59l0.68,-0.96l0.12,-1.78l-0.68,-0.81l-0.82,-0.46l0.6,-0.12l0.42,-0.37l0.1,-1.0l-0.37,-0.47l-0.63,-0.31l1.41,-1.42l0.81,-0.17l0.4,-0.55l-0.3,-1.3l0.45,-0.73l0.0,-0.38l-0.5,-0.69l1.21,-0.49l1.1,-0.12l0.6,-0.58l0.03,-0.91l-0.23,-0.34l-0.9,-0.47l1.26,-0.72l0.68,-1.34l0.77,-0.01l0.46,-0.85l-0.06,-0.57l1.23,-0.24l1.18,-0.88l0.39,-2.85l-0.27,-1.26l0.43,-1.29l0.62,0.12l0.64,-0.22l0.46,-0.75l-0.28,-0.78l2.52,-1.15l0.62,-0.85l-0.06,-0.97l32.0,0.04l0.6,1.06l0.66,0.44l-6.17,52.3l1.23,26.06l-0.59,0.45l-1.18,-0.37l-0.7,-0.82l-1.2,0.7l-1.0,0.02l-1.67,-1.18l-1.54,-0.31l-0.7,0.2l-0.39,0.4l0.18,0.31l-0.4,0.19l-3.37,0.93l0.01,-0.37l-0.74,-0.48l-0.87,-0.06l-0.62,0.8l0.25,0.41l0.32,0.09l-1.38,0.76l-0.41,0.98l-0.54,0.15l-1.07,-0.17l-0.73,-1.47l0.01,-0.7l-0.62,-1.21l-0.09,-0.82l-1.03,-1.41l-0.89,-0.49l-0.28,-0.58l0.11,-0.52l-0.48,-0.76l0.36,-1.49l0.49,-0.67l0.81,-2.27l0.06,-1.0l-0.39,-0.33l-28.8,-0.0l0.46,-0.65l-0.74,-1.43l0.31,-0.79l-0.07,-0.52l-0.56,-0.6Z",
        name: "Mississippi"
    },
    "US-SC": {
        path: "M648.79,270.55l4.59,-1.42l0.9,0.11l0.9,-0.5l0.3,-0.42l3.68,-0.92l0.52,-0.62l0.51,0.26l1.15,-0.1l19.0,0.94l-0.19,0.91l0.3,0.57l0.63,0.13l1.26,-0.82l1.95,2.41l-0.05,1.96l0.42,0.57l17.51,0.53l16.38,15.6l-0.12,0.35l-2.42,1.24l-2.75,2.42l-3.12,4.03l-0.36,0.73l-0.21,1.26l-0.74,-0.28l1.19,-1.88l-0.56,-0.37l-0.82,0.56l-0.74,0.99l-0.39,1.22l0.25,0.68l1.11,0.64l0.17,0.68l-0.56,-0.12l-0.44,0.36l-0.72,-0.12l-0.37,0.63l0.64,0.45l-1.06,0.61l-0.26,0.77l-1.17,0.24l-0.28,-0.52l-0.45,-0.17l-1.05,0.49l-0.79,1.2l0.11,0.86l-1.15,0.72l-0.76,1.0l-1.17,0.57l-0.55,-0.41l0.26,-0.32l-0.05,-0.55l-0.27,-0.24l-1.25,0.01l-0.21,0.41l0.12,0.53l-0.38,-0.02l-0.11,0.69l0.31,0.45l1.17,0.68l-0.94,0.71l-1.12,0.0l-0.34,0.43l0.12,0.34l-2.02,0.62l-1.01,-0.86l-0.51,-0.02l-0.24,0.65l0.76,0.71l-1.38,0.87l-0.49,-0.66l-0.58,0.42l-0.03,0.47l-0.53,-0.4l-0.71,-0.14l-0.99,-0.87l-0.52,0.39l0.02,0.34l-1.57,-0.08l-0.49,0.63l0.33,0.4l-0.4,0.5l0.12,1.93l-0.58,-0.49l-0.34,-0.85l-0.17,-0.75l0.14,-0.68l-0.52,-0.29l-0.32,-0.56l-0.61,-0.13l-0.39,0.51l0.52,0.94l-0.09,0.54l0.6,1.55l-0.15,0.66l0.71,0.96l-0.45,0.25l-0.16,0.79l-1.58,2.47l-0.29,-0.41l-0.76,-0.38l-1.3,-0.04l-0.63,-0.63l-0.29,-0.84l0.37,-2.2l-0.63,-0.86l-0.45,-2.02l-0.82,-1.01l-2.35,-1.41l0.02,-2.14l-0.58,-1.87l-0.92,-1.44l0.12,-0.81l-0.46,-1.09l-3.76,-2.05l-0.29,-1.07l-0.92,-0.41l0.1,-0.59l-0.33,-0.79l-0.73,-0.13l-0.48,-0.54l0.21,-0.95l-0.36,-1.09l-2.01,-1.8l-1.74,-0.73l-1.07,-2.3l-0.43,-0.48l-1.47,-1.2l-1.57,-0.88l-0.87,-0.98l-0.67,-0.2l-0.61,-1.57l-0.4,-0.26l-0.59,-1.07l-0.89,-0.7l-0.46,-2.01l-1.06,-1.54l-0.61,-1.64l-0.86,-0.45l-1.71,0.02l-0.35,-0.18l-2.04,-2.11l-0.91,-0.13l-1.34,-0.81l-0.34,-0.44l0.63,-1.61l0.68,-0.54l0.51,-1.04l1.35,-0.77l0.51,-0.71ZM685.22,318.34l0.48,0.03l0.28,0.33l-1.08,1.1l0.33,-0.66l0.0,-0.8ZM686.87,314.23l0.75,0.13l-0.19,0.34l0.37,0.34l1.58,0.18l-0.95,0.59l-0.38,0.58l0.45,0.55l0.73,-0.19l-1.01,0.6l-0.84,0.15l0.19,-1.48l-0.51,-0.41l0.15,-0.89l-0.34,-0.49Z",
        name: "South Carolina"
    },
    "US-RI": {
        path: "M834.45,149.62l0.28,0.08l-0.11,0.67l0.29,1.63l-0.37,0.3l-0.08,-2.69ZM832.72,152.28l-0.15,-0.24l0.63,-1.1l-0.05,1.18l-0.42,0.16ZM824.57,155.27l0.16,-0.88l0.35,-0.37l0.14,-1.92l-0.07,-8.82l5.67,-0.09l0.11,1.82l0.34,0.41l0.32,0.04l-0.03,0.58l-0.03,0.29l-0.78,0.05l-0.06,0.24l0.05,1.35l0.39,0.51l-0.57,-0.07l-0.64,0.49l0.5,1.05l-0.47,0.91l0.25,0.89l-0.01,1.12l-0.88,1.57l-1.28,-0.15l-3.47,0.98ZM833.02,148.46l0.06,0.35l-0.22,0.17l0.05,-0.22l0.11,-0.3ZM828.1,158.43l0.01,-0.01l0.0,0.0l-0.01,0.0Z",
        name: "Rhode Island"
    },
    "US-CT": {
        path: "M795.36,159.92l3.38,-1.92l0.09,-0.57l-0.85,-1.29l0.96,-13.65l9.73,0.36l0.44,0.52l0.67,-0.06l0.38,-0.42l14.19,0.21l0.08,8.98l-0.12,1.65l-0.3,0.34l-0.21,1.0l-1.59,-0.15l-1.07,0.44l-0.54,-0.46l-0.47,-0.04l-0.43,0.69l-1.06,-0.22l-1.51,0.72l-0.49,-0.24l0.02,-0.5l-0.3,-0.47l-0.79,-0.29l-0.38,0.6l0.49,0.66l-0.07,0.38l-0.78,-0.22l-1.17,0.47l-1.52,-0.35l-0.89,0.18l-0.42,0.31l-0.76,-0.28l-2.11,0.18l-0.18,-0.63l-0.58,-0.06l-1.38,1.5l-0.62,0.09l-1.12,0.85l-0.7,-0.23l-1.06,0.38l-0.35,0.47l-0.49,-0.09l-1.01,0.4l-3.34,1.84l-0.25,-0.14l-0.71,0.14l-0.8,-1.04Z",
        name: "Connecticut"
    }
},
height: 478.4546304213027,
projection: {
    type: "mill",
    centralMeridian: -10
},
width: 900
}), define("document/default", [], function() {
function l(l) {
    if (!e[l]) {
        e[l] = !0, l = t + "/presentation/" + l;
        var n = document.createElement("link");
        n.type = "text/css", n.rel = "stylesheet", n.href = l, document.getElementsByTagName("head")[0].appendChild(n)
    }
}
var e = {},
    t = document.body.getAttribute("data-master-base-path"),
    n = {
        ".js-lightbox": function(e, t) {
            l("document/default/vendorlib/jquery.colorbox.css"), require(["document/default/vendorlib/jquery.colorbox"], function(l) {
                var e, n = l(t),
                    i = "90%",
                    a = n.attr("data-lightbox-wireframe"),
                    r = n.closest("div.container").width(),
                    o = !1,
                    s = !1;
                "1/3" === a ? e = r / 3 : "2/3" === a ? e = 2 * r / 3 : "3/3" === a ? e = r : (e = n.attr("data-lightbox-width"), i = n.attr("data-lightbox-height")), "true" === n.attr("data-lightbox-alwaysinview") && (o = "90%", s = "90%"), n.colorbox({
                    iframe: !0,
                    width: e,
                    height: i,
                    title: n.attr("data-lightbox-title"),
                    overlayClose: "enable" === n.attr("data-lightbox-autoclose"),
                    maxWidth: o,
                    maxHeight: s
                })
            })
        }
    };
return function(l) {
    var e;
    for (e in n) n.hasOwnProperty(e) && l.find(e).each(n[e])
}
}), define("document/form_document", function() {}), define("document/maxymiser_iframe", [], function() {
return function() {}
}), define("region/content", [], function() {
return function() {}
}), define("region/disclaimer", ["jquery"], function(l) {
var e = function(l) {
    function e(l) {
        return o.raw ? l : encodeURIComponent(l)
    }

    function t(l) {
        return o.raw ? l : decodeURIComponent(l)
    }

    function n(l) {
        return e(o.json ? JSON.stringify(l) : String(l))
    }

    function i(l) {
        0 === l.indexOf('"') && (l = l.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return l = decodeURIComponent(l.replace(r, " ")), o.json ? JSON.parse(l) : l
        } catch (e) {}
    }

    function a(e, t) {
        var n = o.raw ? e : i(e);
        return l.isFunction(t) ? t(n) : n
    }
    var r = /\+/g,
        o = function(i, r, s) {
            if (void 0 !== r && !l.isFunction(r)) {
                if (s = l.extend({}, o.defaults, s), "number" == typeof s.expires) {
                    var c = s.expires,
                        u = s.expires = new Date;
                    u.setTime(+u + 864e5 * c)
                }
                return document.cookie = [e(i), "=", n(r), s.expires ? "; expires=" + s.expires.toUTCString() : "", "; path=/", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var d = i ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], h = 0, p = f.length; p > h; h++) {
                var m = f[h].split("="),
                    g = t(m.shift()),
                    v = m.join("=");
                if (i && i === g) {
                    d = a(v, r);
                    break
                }
                i || void 0 === (v = a(v)) || (d[g] = v)
            }
            return d
        };
    return o.defaults = {}, o.remove = function(e, t) {
        return void 0 === o(e) ? !1 : (o(e, "", l.extend({}, t, {
            expires: -1
        })), !o(e))
    }, o
}(l);
return function(t) {
    function n(l) {
        l.target.href && "#" != l.target.href && l.target.href != window.location.href && l.target.href != window.location.href + "#" || (l.preventDefault(), i && e(i, "1", {
            expires: a ? 30 * a : null
        }), t.addClass("hidden"), r && r.remove())
    }
    if (l("body").hasClass("edit-mode")) return t.removeClass("hidden");
    var i = t.data("cookie_name"),
        a = t.data("cookie_session_time");
    if (a = a || 0, !i || "1" != e(i)) {
        var r;
        t.hasClass("position-top") && (r = l("<div></div>").css("height", t.height()).prependTo(l("body"))), t.removeClass("hidden"), t.on("click", "a, .close-btn", n)
    }
}
}), define("region/footer", [], function() {
return function() {}
}), define("region/form_region", ["jquery", "i18n", "debounce", "bootstrap-vanilla", "bootstrap-jquery"], function(l, e, t) {
return function(n) {
    function i() {
        o.on("resize", f), a(), r(c.data("locale"))
    }

    function a() {
        u.on("click", function() {
            var e = l(this).parent().siblings(".hint");
            c.find(".display-alert.hint").not(e).removeClass("display-alert"), e.toggleClass("display-alert")
        }), d.on("click", function() {
            l(this).removeClass("display-alert")
        })
    }

    function r(l) {
        e.setLocale(l)
    }
    var o = l(window),
        s = o.width() <= 975,
        c = n.find("form"),
        u = (n.find(".container-form_vertical .form-control"), n.find(".form-col .glyphicon")),
        d = n.find(".form-col.hint"),
        f = (n.find(".display-alert"), t(function() {
            s = o.width() <= 975, a()
        }, 250));
    i()
}
}), define("region/header", [], function() {
return function() {}
}), define("region/meta", [], function() {
return function() {}
}), define("region/metabar", [], function() {
return function() {}
}), define("region/search", ["jquery", "ext/markup", "utils/DateUtils", "utils/LabelUtils", "utils/NumberUtils", "utils/PreviewBuilder", "utils/TextUtils", "search/config", "managers/Manager.jquery", "widgets/jquery/PagerWidget", "oneweb/ResultWidget", "oneweb/SearchInfoWidget", "oneweb/LazyLoadingWidget", "oneweb/FilterManagerWidget", "oneweb/FilterWidget", "oneweb/QueryFilterWidget", "oneweb/SpellcheckWidget", "oneweb/SearchTipsWidget"], function(l) {
return function(e) {
    var t = new AjaxSolr.Config;
    hubbleAjaxLoaderUrl = t.ajaxLoaderImgUrl, dateUtils = new AjaxSolr.DateUtils, numberUtils = new AjaxSolr.NumberUtils, textUtils = new AjaxSolr.TextUtils, hubbleLocale = l("html").attr("lang"), labelUtils = new AjaxSolr.LabelUtils, labelUtils.init(hubbleLocale);
    var n = (l("div[id^=search-result-header-]").length, e.find(".search-result-list").attr("data-results_per_page")),
        i = e.find(".search-result-list").attr("data-result_style"),
        a = e.find(".search-result-container").attr("data-solr_core"),
        r = e.find(".search-result-container").attr("data-search_path"),
        o = e.find(".search-result-container").attr("data-result_region_count"),
        s = e.find(".search-filter-container").attr("data-filter_container_count"),
        c = e.find(".search-filter-container").attr("data-filteroption_style"),
        u = e.find(".search-result-container").attr("data-links_custom_base"),
        d = l("meta[name=onewebCMSSearchCore]").attr("content");
    (void 0 == a || 0 == a.length) && (a = d);
    var f = t.solrPath + a;
    if (void 0 !== r && r.length > 0 && (f = r + a), Manager = new AjaxSolr.Manager({
            solrUrl: f,
            timeout: t.timeout,
            linksCustomBase: u
        }), t.spellcheckWidget.active && Manager.addWidget(new AjaxSolr.SpellcheckWidget({
            id: "spellcheck-" + o,
            target: "#search-spell-check-" + o,
            regionCount: o,
            filterStyle: c,
            filterCount: s
        })), t.resultWidget.active && Manager.addWidget(new AjaxSolr.ResultWidget({
            id: "result-" + o,
            target: "#search-result-list-" + o,
            errorTarget: "#hubbleErrorMessage",
            hasEditorial: t.resultWidget.hasEditorial,
            hasHighlighting: t.resultWidget.hasHighlighting
        })), t.resultWidget.hasEditorial && Manager.addWidget(new AjaxSolr.EditorialWidget({
            target: "#search-result-list-" + o,
            id: "editorial",
            numberOfEntries: 3
        })), t.searchTipsWidget.active && Manager.addWidget(new AjaxSolr.SearchTipsWidget({
            id: "searchTips",
            target: "#search-tips-" + o
        })), "Pagination" !== i && Manager.addWidget(new AjaxSolr.LazyLoadingWidget({
            id: "lazyLoading",
            resultWidget: "result-" + o,
            infiniteScrolling: t.lazyLoadingWidget.infiniteScrolling,
            target: "#search-lazy-loading-button-" + o
        })), t.pagerWidget.active && Manager.addWidget(new AjaxSolr.PagerWidget({
            id: "pager-" + o,
            target: "#pager-" + o,
            prevLabel: "<",
            nextLabel: ">",
            innerWindow: 1
        })), t.filterWidget.active) {
        Manager.addWidget(new AjaxSolr.FilterManagerWidget({
            id: "filterManager-" + s,
            filterCount: s
        }));
        for (var h = l("#search-filter-options-list-" + s + " li.module-search_filter_static ul"), p = 0, m = h.length; m > p; p++) {
            var g = l(h[p]).attr("id"),
                v = l(h[p]).attr("data-filter_key"),
                y = l(h[p]).attr("data-select_type");
            Manager.addWidget(new AjaxSolr.FilterWidget({
                id: v,
                parent: "#search-filter-options-list-" + s,
                target: "#" + g,
                field: v,
                selectType: y,
                multivalue: t.multivalueFields[v] ? !0 : !1,
                regionCount: o
            }))
        }
    }
    if (t.queryFilterWidget.active)
        for (var b = l("#search-filter-options-list-" + s + " li.module-search_filter_range ul"), p = 0, m = b.length; m > p; p++) {
            var M = b[p],
                g = l(M).attr("id"),
                v = l(M).attr("data-filter_key"),
                y = l(M).attr("data-select_type"),
                w = [];
            l(M).find("input").map(function() {
                w.push(l(this).attr("value"))
            });
            var x = [];
            l(M).find("label").map(function() {
                x.push(l(this).text())
            }), Manager.addWidget(new AjaxSolr.QueryFilterWidget({
                id: v,
                parent: "#search-filter-options-list-" + s,
                labels: x,
                values: w,
                target: "#" + g,
                field: v,
                selectType: y,
                multivalue: t.multivalueFields[v] ? !0 : !1
            }))
        }
    t.searchInfoWidget.active && Manager.addWidget(new AjaxSolr.SearchInfoWidget({
        id: "result-header-" + o,
        target: "#search-result-header-" + o
    })), Manager.init();
    var k = oneweb_search.filter;
    if ("" !== k)
        for (var Z = k.split(";"), p = 0, m = Z.length; m > p; p++) {
            var C = Z[p].split(":"),
                v = C[0],
                S = C.length > 1 ? C[1] : void 0;
            if (void 0 !== S) {
                var j = new AjaxSolr.FilterWidget({
                    id: v,
                    field: v,
                    selectType: "radio",
                    multivalue: t.multivalueFields[v] ? !0 : !1
                });
                Manager.addWidget(j), j.multivalue ? j.add(S) : j.set(S)
            }
        }
    var _ = l.cookie("hubbleQuery");
    if (null != _ && "" == l("#hubbleSearcherQuery").val()) Manager.store.parseString(_), Manager.doRequest(Manager.store.start);
    else {
        var E = t.solrParams;
        for (var T in E) Manager.store.addByValue(T, E[T]); {
            e.find(".search-result-list").attr("data-results_per_page")
        }
        Manager.store.addByValue("rows", n > 0 ? n : 15);
        var A = [],
            N = [];
        for (var L in Manager.widgets) {
            var q = Manager.widgets[L];
            q instanceof AjaxSolr.QueryFilterWidget ? A = A.concat(q.getFacetQuery()) : q instanceof AjaxSolr.FilterWidget && N.push(q.getFacetQuery())
        }
        A.length > 0 && Manager.store.addByValue("facet.query", A), N.length > 0 && Manager.store.addByValue("facet.field", N)
    }
    var I = oneweb_search.query;
    "" !== I && (Manager.store.addByValue("q", I), Manager.doRequest(0))
}
}), define("region/worldwide_presence", ["jquery"], function(l) {
return function(e) {
    function t(e) {
        e.each(function() {
            l(this).siblings().removeClass("open"), l(this).addClass("open"), i.removeClass("open"), i.eq(l(this).index() - 1).addClass("open")
        })
    }
    var n = e.find(".worldwide_presence_data_head_cell"),
        i = e.find(".worldwide_presence_data_content_cell"),
        a = i.find("a"),
        r = e.find(".worldwide_presence_data_country_info"),
        o = e.find(".worldwide_presence_data_head_mobile_prev"),
        s = e.find(".worldwide_presence_data_head_mobile_next"),
        c = 500;
    document.styleSheets[0].insertRule(".worldwide_presence_data_country_info::before {border-top-color: " + window.mapBgColor + " !important; }", 0), n.click(function() {
        l(this).hasClass("open") || t(l(this))
    }), a.click(function() {
        var e = l(this).html(),
            t = l(this).siblings(".mapDataContentCellCountryContent").html();
        r.slideUp(c, function() {
            l(this).find(".worldwide_presence_data_country_name").html(e), l(this).find(".worldwide_presence_data_country_content").html(t), l(this).slideDown(c)
        }), n.eq(l(this).parents(".worldwide_presence_data_content_cell").index()).trigger("click")
    }), o.click(function() {
        var e = l(this).siblings(".open").prev(".worldwide_presence_data_head_cell");
        0 == e.length && (e = l(this).siblings(".worldwide_presence_data_head_cell:last")), t(e)
    }), s.click(function() {
        var e = l(this).siblings(".open").next(".worldwide_presence_data_head_cell");
        0 == e.length && (e = l(this).siblings(".worldwide_presence_data_head_cell:first")), t(e)
    })
}
}), define("container/content", ["jquery"], function(l) {
return function(e) {
    var t = l(e.find(".module.toggle-collapsible")),
        n = l(e.find(".module-responsive")),
        i = function() {
            n.each(function(e, t) {
                l(t).slideToggle(300).promise().done(function() {
                    l(t).toggleClass("closed")
                })
            })
        };
    0 === l("body.edit-mode").length && (t.hasClass("collapsed") && n.each(function(e, t) {
        l(t).toggleClass("closed")
    }), t.click(function() {
        t.toggleClass("collapsed"), i()
    }))
}
}), define("container/content_navigation", ["jquery"], function(l) {
return function(e) {
    function t() {
        return n() || -1 !== navigator.appVersion.indexOf("MSIE")
    }

    function n() {
        return navigator.userAgent.indexOf(".NET CLR") > -1
    }

    function i() {
        e.find("a[href*=#]:not([href=#])").click(function(e) {
            if (e.preventDefault(), location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var n = l(this).attr("href"),
                    i = n.lastIndexOf("#"),
                    a = n.substring(i + 1);
                if (n.length) {
                    var r = l('[name="' + a + '"]'),
                        o = r.offset().top - c;
                    r.closest(".left-right-box").length > 0 && (o = r.closest(".type-left-right-box").offset().top - c), l("html, body").animate({
                        scrollTop: o
                    }, s, function() {
                        return window.location.hash = "#" + r.attr("id"), t() && l("html, body").animate({
                            scrollTop: o
                        }, 0), l.event.trigger({
                            type: "contentNavClicked",
                            message: "#" + r.attr("id"),
                            time: new Date
                        }), !1
                    })
                }
            }
        })
    }

    function a(l) {
        var e = v * l * -1,
            t = Math.max(Math.min(parseInt(x + e), M), w);
        m.css(b, t), x = t
    }

    function r() {
        Z.scrollTop() > _ ? (e.addClass("float"), T.show(), C >= S ? e.css(b, 0) : e.css(b, (S - C) / 2)) : (e.removeClass("float").css(b, 0), T.hide());
        var t = -1;
        if (j.each(function(l, e) {
                return o(e) ? (t = l, !1) : void 0
            }), E !== t && -1 !== t) {
            if (g.removeClass("active"), l(g[t]).addClass("active"), -1 !== t) {
                var n = t * v * -1 + h.width() - 1,
                    i = (x - n) / v;
                a(i)
            }
            E = t
        }
    }

    function o(e) {
        var t = Z.scrollTop(),
            n = t + Z.height(),
            i = l(e).offset().top,
            a = i + l(e).height();
        return a >= t && n >= i && n >= a && i >= t
    }
    var s = 500,
        c = 0;
    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && l(document).ready(function() {
        window.location.hash.length > 0 && window.setTimeout(function() {
            window.location.hash
        }, 0)
    }), i(), t() && l(window).load(function() {
        if (window.location.hash.length > 0) {
            var e = l(window.location.hash);
            e = e.length ? e : l('[name="' + this.hash.slice(1) + '"]');
            var t = e.offset().top - c;
            e.closest(".left-right-box").length > 0 && (t = e.closest(".type-left-right-box").offset().top - c), l("html, body").scrollTop(t)
        }
    });
    var u = e.height(),
        d = e.find(".inner"),
        f = e.find(".prev"),
        h = e.find(".next"),
        p = e.find(".module-content_navigation"),
        m = p.find("ul"),
        g = m.find("li"),
        v = g.outerWidth();
    if (0 == g.length || 50 > u) return p.attr("style", "visibility: hidden !important"), !0;
    var y = l("body"),
        b = "rtl" == y.css("direction") ? "right" : "left";
    if (g.length * v > d.width()) {
        var M = h.width() - 1,
            w = -1 * (v * g.length - d.width() + h.width()),
            x = M;
        f.show(), h.show(), h.click(function() {
            a(1)
        }), f.click(function() {
            a(-1)
        }), m.css(b, x)
    }
    if (e.hasClass("nosticky")) return !0;
    var k, Z = l(window),
        C = e.width(),
        S = y.width(),
        j = y.find(".content_navigation_mark"),
        _ = e.offset().top,
        E = -1,
        T = l("<div></div>").css("height", u).attr("class", "clone").hide().insertAfter(e);
    Z.on("scroll", function() {
        r(), clearTimeout(k), k = setTimeout(r, 125)
    }).on("resize", r), r(), l(window).on("resize", function() {
        function l(l) {
            var i = v * l * -1,
                a = Math.max(Math.min(parseInt(n + i), e), t);
            m.css(b, a), n = a
        }
        if (g.length * v > d.width()) {
            var e = h.width() - 1,
                t = -1 * (v * g.length - d.width() + h.width()),
                n = e;
            f.show(), h.show(), h.click(function() {
                l(1)
            }), f.click(function() {
                l(-1)
            }), m.css(b, n), m.removeClass("no-scroll")
        } else f.hide(), h.hide(), m.css(b, 0), m.addClass("no-scroll")
    })
}
}), define("container/custom", [], function() {
return function() {}
}), define("container/disclaimer", [], function() {
return function() {}
}), define("container/downloadcenter", ["jquery", "jscookie"], function(l, e) {
var t = l(window),
    n = "acd",
    i = n + "-cart",
    a = "." + n,
    r = "filters",
    o = "cart-info",
    s = "details",
    c = "cart",
    u = "save",
    d = "in-cart",
    f = "filtered-out",
    h = "on",
    p = "download-id",
    m = "file-props",
    g = 0,
    v = function(l) {
        var e, t = 0,
            i = ("" + l).length,
            a = 0;
        if (!l || 1 > i) return t;
        for (; i > a; a++) e = l.charCodeAt(a), t = (t << 5) - t + e, t |= 0;
        return n + t
    },
    y = function() {
        var t = function(t) {
            var n = l.extend({
                    cookieName: "cart"
                }, t),
                i = [];
            this.cookieName = "" + n.cookieName, i = e.getJSON(this.cookieName) || [], this.items = l.isArray(i) ? i : []
        };
        return t.prototype.getItemIndexForId = function(l) {
            return l ? function(l) {
                return this.items.indexOf(l)
            } : function(l) {
                for (var e = 0, t = this.items.length; t > e; e++)
                    if (this.items[e] === l) return e;
                return -1
            }
        }("function" == typeof [].indexOf), t.prototype.contains = function(l) {
            return this.getItemIndexForId(l) > -1
        }, t.prototype.addItem = function(l) {
            this.contains(l) || (this.items.push(l), this.update())
        }, t.prototype.removeItem = function(l) {
            var e = this.getItemIndexForId(l);
            e > -1 && this.items.splice(e, 1), this.update()
        }, t.prototype.empty = function() {
            this.items = [], e.remove(this.cookieName), this.update()
        }, t.prototype.update = function() {
            e.set(this.cookieName, this.items), l(document).trigger("cartUpdated", [this.items])
        }, t
    }(),
    b = function() {
        var e = function(e) {
            this.settings = l.extend({
                appendToBody: !1,
                shouldFitViewport: !1,
                container: l("body"),
                cssClassLightbox: "lightbox",
                cssClassCloser: "close",
                cssClassPrev: "prev",
                cssClassNext: "next",
                onShow: function() {},
                getDetailImgUrl: function(l, e) {
                    return l.find(e.settings.selectorTrigger).attr("href")
                },
                getDetailCaption: function(l, e) {
                    return l.find(e.settings.selectorTrigger).attr("title")
                },
                nsEvents: ".acdlightbox",
                selectorItem: "<li>",
                selectorTrigger: "a.lightbox"
            }, e), this.$lightbox = l('<div class="' + this.settings.cssClassLightbox + '">        <div>          <span class="' + this.settings.cssClassCloser + '"></span>          <figure></figure>          <div class="caption"></div>          <div class="nav">            <span class="' + this.settings.cssClassPrev + '"></span>            <span class="' + this.settings.cssClassNext + '"></span>          </div>        </div>      </div>'), this.$container = this.settings.container, this.currentIndex = 0, this.$lightbox.appendTo(this.settings.appendToBody ? l("body") : this.$container), this.setEventHandlersPermanent()
        };
        return e.prototype.setEventHandlersPermanent = function() {
            var e = this,
                t = this.settings;
            this.$container.on("click" + t.nsEvents, t.selectorItem + " " + t.selectorTrigger, function(t) {
                return t.preventDefault(), t.stopPropagation(), e.open.call(e, l(this))
            })
        }, e.prototype.setEventHandlersTransient = function() {
            var e = this,
                t = this.settings;
            this.$lightbox.on("click" + t.nsEvents, "> div", function(e) {
                return l(e.target).is("a") ? !0 : void e.stopPropagation()
            }).on("click" + t.nsEvents, "." + t.cssClassCloser, function(l) {
                return e.close.call(e, l)
            }).on("click" + t.nsEvents, "." + t.cssClassPrev, function() {
                return e.skipBack.call(e)
            }).on("click" + t.nsEvents, "." + t.cssClassNext, function() {
                return e.skipForth.call(e)
            }), l(document).on("click" + t.nsEvents, function(l) {
                return 1 === l.which ? e.close.call(e, l) : void 0
            }).on("keydown" + t.nsEvents, function(l) {
                switch (l.which) {
                    case 27:
                        return e.close.call(e, l);
                    case 37:
                        return e.skipBack.call(e);
                    case 39:
                        return e.skipForth.call(e);
                    default:
                        return
                }
            }), t.shouldFitViewport && l(window).on("resize" + t.nsEvents, function() {
                return e.fitImgHeight.call(e)
            })
        }, e.prototype.unsetEventHandlersTransient = function() {
            this.$lightbox.off(this.settings.nsEvents), l(document).off(this.settings.nsEvents)
        }, e.prototype.open = function(l) {
            this.setEventHandlersTransient(), this.$lightbox.find("figure").empty(), this.$lightbox.find(".caption").empty().hide(), this.$lightbox.children("div").css({
                width: ""
            }), this.$lightbox.addClass("on"), this.currentIndex = l.closest(this.settings.selectorItem).index(), this.show()
        }, e.prototype.close = function() {
            this.unsetEventHandlersTransient(), this.$lightbox.removeClass("on"), l("html").css({
                overflow: ""
            }), l("body").off("scroll" + this.settings.nsEvents)
        }, e.prototype.show = function() {
            var e = this.settings,
                t = this,
                n = this.$lightbox.children("div"),
                i = this.$container.find(e.selectorItem).eq(this.currentIndex),
                a = this.$lightbox.find(".caption"),
                r = this.$lightbox.find("figure"),
                o = "function" == typeof e.getDetailCaption ? e.getDetailCaption(i, this) : "",
                s = "function" == typeof e.getDetailImgUrl ? e.getDetailImgUrl(i, this) : "",
                c = new Image;
            r.children("img").css({
                visibility: "hidden"
            }), a.empty().hide(), n.css({
                "overflow-y": "hidden"
            }), s && (c.onload = function() {
                e.shouldFitViewport && t.fitImgHeight.apply(t, [c]), t.$lightbox.removeClass("loading"), n.css({
                    "overflow-y": ""
                }), r.empty().append(l(c)), o && a.append(o).show()
            }, c.src = s), this.$lightbox.addClass("loading"), this.$lightbox.toggleClass("at-start", 0 === this.currentIndex), this.$lightbox.toggleClass("at-end", this.currentIndex >= this.$container.find(e.selectorItem).has(e.selectorTrigger).length - 1), "function" == typeof e.onShow && e.onShow(i, this)
        }, e.prototype.fitImgHeight = function(e) {
            var t, n = e || this.$lightbox.find("figure img").get(0),
                i = this.$lightbox.children("div"),
                a = n.height || l(n).height(),
                r = .9 * l(window).height() - (i.outerHeight() - i.height());
            t = r / a, 1 !== t && i.css({
                width: n.width * t + "px"
            })
        }, e.prototype.skipBack = function() {
            this.currentIndex = Math.max(this.currentIndex - 1, 0), this.show()
        }, e.prototype.skipForth = function() {
            var l = this.settings;
            this.currentIndex = Math.min(this.currentIndex + 1, this.$container.find(l.selectorItem).has(l.selectorTrigger).length - 1), this.show()
        }, e.prototype.skipTo = function(l) {
            var e = this.settings;
            l = parseInt(l), isNaN(l) || 0 > l || l >= this.$container.find(e.selectorItem).has(e.selectorTrigger).length - 1 || (this.currentIndex = l, this.show())
        }, e.prototype.isOpen = function() {
            return this.$lightbox.hasClass("on")
        }, e
    }(),
    M = function() {
        var e = function(e) {
            this.settings = l.extend({
                requestUrl: window.location.href,
                requestMethod: "post",
                onSubmit: function() {}
            }, e)
        };
        return e.prototype.requestDownload = function(e) {
            var t, n = this.settings,
                i = "";
            n.requestUrl && "string" == typeof n.requestUrl && (e = "string" == typeof e ? e : decodeURIComponent(l.param(e)), l.each(e.split("&"), function() {
                t = this.split("="), i += '<input type="hidden" name="' + t[0] + '" value="' + t[1] + '" />'
            }), i = '<form action="' + n.requestUrl + '" method="' + (n.requestMethod || "post") + '">' + i + "</form>", l(i).appendTo("body").submit().remove(), "function" == typeof n.onSubmit && n.onSubmit(this))
        }, e
    }();
return function(e) {
    var n = l(e),
        w = n.find("." + o),
        x = w.find("div." + s),
        k = {},
        Z = [],
        C = [],
        S = [],
        j = new y({
            cookieName: i + "_" + n.data("cart-id")
        }),
        _ = new b({
            shouldFitViewport: !0,
            container: n,
            onShow: function(l, e) {
                e.$lightbox.children("div").toggleClass(d, l.hasClass(d))
            },
            getDetailCaption: function(l) {
                return l.children("h5, span, .details, .actions").clone()
            },
            selectorItem: ".block-download.on",
            selectorTrigger: "figure a"
        }),
        E = new M({
            requestUrl: n.data("zip-url"),
            onSubmit: function() {
                j.empty()
            }
        }),
        T = {},
        A = n.find(".items").data("lines-per-block") - 0 || 1,
        N = 1,
        L = !0,
        q = null,
        I = function() {
            L = !0, q && window.clearTimeout(q), q = window.setTimeout(function() {
                l(document).height() <= t.scrollTop() + t.height() + 80 ? l("html,body").animate({
                    scrollTop: t.scrollTop() - 80
                }, {
                    duration: 100,
                    complete: function() {
                        L = !1
                    }
                }) : L = !1
            }, 1e3)
        },
        D = function(e, t) {
            for (var i = l("<select>"), a = 0; a < t.length; a++) i.append(l("<option></option>").val(t[a]).html(t[a]));
            var r = n.find('select[name="' + e + '"]');
            r.append(i.html())
        };
    n.on("click" + a, ".items .actions a." + c, function(e) {
        e.preventDefault();
        var t = l(this).closest(".block-download");
        j.addItem(t.data(p)), t.addClass(d)
    }).on("click" + a, ".lightbox .actions a." + c, function(l) {
        l.preventDefault(), l.stopPropagation(), n.find(_.settings.selectorItem).eq(_.currentIndex).find(".actions a." + c).trigger("click"), _.$lightbox.children("div").addClass(d)
    }).on("mouseover" + a, "." + o + " > .flyout-wrapper", function() {
        x.addClass("on")
    }).on("mouseout" + a, "." + o + " > .flyout-wrapper", function() {
        x.removeClass("on")
    }).on("click" + a, "." + s + " > ul > li > span", function() {
        j.removeItem(l(this).parent().data(p))
    }).on("click" + a, "." + s + " .actions > span", function(e) {
        e.preventDefault(), E.requestDownload({
            files: l.map(j.items, function(l) {
                return k[l].url
            })
        })
    }).on("change" + a, "." + r + " select", function() {
        var e, t, i, a, r = n.find(".items .block-download"),
            o = n.find(".no-results");
        "" !== this.value ? T[this.name] = this.value : (delete T[this.name], r.removeClass(h)), r.each(function() {
            a = l(this), e = l(this).data(m) || {}, i = !1;
            for (t in T)
                if (!e[t] || e[t] !== T[t]) {
                    i = !0;
                    break
                }
            a.toggleClass(f, i), i && a.removeClass(h)
        }), n.trigger("padline"), o.length > 0 && (0 == l(".block-download-component.on").length ? o.show() : o.hide())
    }).on("click" + a, ".items .more", function() {
        n.trigger("showmore")
    }).on("showmore" + a, function() {
        var l = n.find(".items .block-download:not(." + h + ", ." + f + ")"),
            e = l.eq(0).parent().width(),
            t = l.eq(0).outerWidth(!0);
        N = Math.floor(e / t), l.slice(0, N * A).addClass(h).find("img[data-src]").trigger("loadimg"), n.toggleClass("expanded", 0 === l.not("." + h).length), I()
    }).on("padline" + a, function() {
        var l = n.find(".items .block-download:not(." + f + ")"),
            e = l.filter("." + h),
            t = l.eq(0).parent().width(),
            i = l.eq(0).outerWidth(!0),
            a = 0,
            r = 0,
            o = 0;
        N = Math.floor(t / i), r = N * A, o = e.length, a = o > r ? Math.abs((o - r) % N) : r - o, (!o || 0 !== a && a !== r) && (e.length && N / 2 > a ? (l.slice(e.length - a).removeClass(h), n.removeClass("expanded")) : (l.not("." + h).slice(0, a).addClass(h).find("img[data-src]").trigger("loadimg"), n.toggleClass("expanded", 0 === l.not("." + h).length)), I())
    }).on("loadimg" + a, "img[data-src]", function() {
        var e = l(this),
            t = new Image,
            n = e.data("src"),
            i = function() {
                e.removeAttr("data-src").attr("src", t.src), t = null
            };
        t.onload = i, t.src = n
    }), l(document).on("cartUpdated" + a, function() {
        var e = j.items.length,
            t = w.find('p[data-labels-total="' + e + '"]'),
            i = x.find("ul");
        t.length || (t = w.find("p").not("[data-labels-total]").eq(0)), t.find("i").html(e), t.siblings("p").removeClass("on"), t.addClass("on"), i.empty(), l.each(j.items, function(l, e) {
            k.hasOwnProperty(e) && i.append("<li data-" + p + '="' + e + '"><span></span>' + k[e].label + "</li>")
        }), n.find(".items .block-download").each(function() {
            var e = l(this),
                t = e.data(p);
            e.toggleClass(d, j.contains(t))
        })
    }), t.on("resize" + a, function() {
        n.not(".expanded").trigger("padline")
    }), n.next(".component").length || (t.scrollTop(0), t.on("scroll", function() {
        if (!(L || n.hasClass("expanded") || _.isOpen())) {
            var l = n.position().top + n.height() + g - t.height();
            t.scrollTop() >= l && n.trigger("showmore")
        }
    })), n.find(".items .block-download").each(function() {
        var e = l(this),
            t = e.find(".actions a." + c),
            n = t.attr("href") || t.siblings("." + u).attr("href"),
            i = v(n);
        k[i] = {
            label: e.children("h5").html(),
            url: n
        }, e.data(p, i).toggleClass(d, j.contains(i));
        var a = l(this).data(m) || {}; - 1 == l.inArray(a.year, Z) && Z.push(a.year), -1 == l.inArray(a.category, C) && C.push(a.category), -1 == l.inArray(a.type, S) && S.push(a.type)
    }), D("year", Z.sort()), D("category", C.sort()), D("type", S.sort()), j.update(), I(), n.find("." + r + " option").each(function() {
        l(this).prop("selected", "" === this.value)
    }), n.trigger("showmore")
}
}), define("container/extern_javascript", ["jquery"], function(l) {
function e(e) {
    function t() {
        if (!i) try {
            i = e.prop("contentDocument").body
        } catch (s) {}
        if (i) try {
            n = l(i), a = n.height() || n.prop("scrollHeight"), a && a != r && (r = a, e.css("height", a), n.css("overflow", "hidden")), o = requestAnimationFrame(t)
        } catch (s) {} else o = requestAnimationFrame(t)
    }
    var n, i, a, r, o;
    l(window).on("unload", function() {
        cancelRequestAnimationFrame(o)
    }), t()
}
var t = ["<style type='text/css'>", "* {", "	margin: 0;", "	padding: 0;", "	outline: 0 none;", "	border: 0 none;", "}", "iframe {", "	display: block;", "	position: relative;", "	width: 100%;", "	height: 100%;", "}", "</style>"].join("");
return function() {
    l('script[type="text/iframe"]').each(function() {
        var n = (l(this), this),
            i = l("<iframe></iframe>").attr({
                "class": "themeless"
            }).on("load", function() {
                this.contentDocument.firstChild.innerHTML = t + unescape(n.innerHTML), e(i)
            });
        i.insertAfter(n), n.remove()
    })
}
}), define("container/footer", ["jquery"], function(l) {
return function() {
    var e = (l(".module-footer_menu-component .group_label"), l(".module-footer_menu-component div.data"));
    l(".module-footer_menu .group_label").click(function() {
        l(this).next(".data").toggleClass("open-block"), e.hasClass("modeClosed") && l(this).toggleClass("open");
        var t = l(".mobDet").is(":visible")
    }), l(window).resize(function() {
        var t = l(".mobDet").is(":visible");
        if (t) {
            e.css("display", "");
            var n = l(".modeClosed").prev(".open");
            n.removeClass("open");
            var i = l(".modeOpened").prev();
            i.addClass("open")
        } else e.show()
    });
    var t = l(".module-footer_menu-component .block-richtext-component .inner");
    e.hasClass("footerDarkGrey") ? t.css("color", "#656565") : t.css("color", "#e6e6e6")
}
}), define("container/form_inline", ["jquery", "validation"], function(l, e) {
return function(l) {
    l.find("form").each(function(l, t) {
        e.validate(t)
    })
}
}), define("container/form_vertical", ["jquery", "form", "pubsub", "validation"], function(l, e, t, n) {
function i(l) {
    var t = function(l) {
            var t = {
                jwt: l.body,
                csrf: e.getCsrfToken(l)
            };
            latestTokens = t
        },
        n = function() {
            var e = l.find(".js-setup-error");
            e.addClass("show")
        };
    e.requestTokens(t, n)
}

function a(t) {
    var i = t.data("iframe-behaviour"),
        a = t.data("processor"),
        r = t.data("success-page"),
        o = t.find(".js-submit-error"),
        s = function() {
            o.removeClass("show"), "parent" === i ? parent.location.href = r : location.href = r
        },
        c = function() {
            o.addClass("show")
        },
        u = function(t) {
            var n = l(t);
            if (latestTokens) {
                var i = e.buildFieldsObject(n),
                    r = {
                        fields: i,
                        locale: n.attr("data-locale"),
                        formName: n.attr("name"),
                        processor: a,
                        tokens: latestTokens
                    };
                e.sendRequest(r, s, c)
            }
        };
    n.validate(t[0], {
        submitHandler: u
    })
}
return function(e) {
    var r = e.find("form"),
        o = e.find(".step-container.active"),
        s = e.find(".js-prev"),
        c = e.find(".js-next"),
        u = e.find(".js-submit"),
        d = e.find(".form-wizard"),
        f = function(l) {
            l.length && l.hasClass("step-container") && (l.siblings(".step-container").removeClass("active").end().addClass("active").removeClass("disabled"), o = l, p(), h(l.index()))
        },
        h = function(l) {
            d.children().removeClass("active").eq(l).addClass("active").removeClass("disabled")
        },
        p = function() {
            s.toggleClass("hide", !o.prev().length), c.toggleClass("hide", !o.next().length), u.toggleClass("hide", Boolean(o.next().length))
        },
        m = function() {
            i(r), r.each(function() {
                var e = l(this);
                a(e)
            }), p()
        };
    s.on("click", function(l) {
        l.preventDefault();
        var e = o.prev();
        f(e)
    }), c.on("click", function(e) {
        e.preventDefault();
        var i = n.getValidator(l(this).closest("form")[0]).form();
        if (i) {
            var a = o.next();
            f(a);
            var r = a.find(".module-form_summary-component");
            r.length && t.publish("form:summaryStep", r)
        }
    }), m()
}
}), define("container/gallery", ["jquery"], function(l) {
return function(e) {
    var t, n, i, a = l("html"),
        r = e.find(".body"),
        o = e.find(".module-gallery_page-component"),
        s = "1" == e.data("lightbox"),
        c = this,
        u = !1,
        d = o.length - 1 ? "" : "hidden",
        f = e.find(".prev"),
        h = e.find(".next"),
        p = l("body").css("direction"),
        m = "rtl" == p,
        g = m ? "right" : "left",
        v = e.find(".module-gallery_page-component .content-block"),
        y = m ? "padding-left" : "padding-right",
        b = (parseInt(o.css(y), 10) + parseInt(v.css(y), 10), 0),
        M = 0;
    h.add(f).addClass(d);
    var w = parseFloat(e.find(".navi.navi_thumbnails").data("itemwidth"));
    w && e.find(".navi.navi_thumbnails").find("ul").css("width", 1.5 * w * o.length), e.find(".navi.navi_thumbnails").find("li").each(function(e) {
        l(this).data("index", e)
    }), e.find(".navi.navi_dots li").each(function(e) {
        l(this).data("index", e)
    });
    var x = e.find(".navi.navi_thumbnails").clone().removeClass("bottom_navi_thumbnails").addClass("top_navi_thumbnails");
    x.find("li").each(function(e) {
        l(this).data("index", e)
    }), x.prependTo(e);
    var k = e.find(".navi ul"),
        Z = e.data("animation-interval");
    Z && (n = 1e3 * parseFloat(Z), (0 > n || 0 / 0 == n || "string" == typeof n) && (n = !1));
    var C = 0,
        S = 0;
    o.each(function() {
        var e = l(this),
            t = e.find(".content-block"),
            n = e.find("h4.page_title");
        t.each(function() {
            var e = l(this);
            0 == e.find(".cloned-title").length && n.clone().addClass("cloned-title").prependTo(e)
        })
    }), c.go_to = function(s, d, f) {
        clearTimeout(i);
        var h = t + 1,
            p = o.eq(C),
            v = p.find(".content-block");
        f || 3 != v.length || (S += s - C), (0 > S || S >= v.length - h + 1 || f || 3 != v.length) && (0 > s ? s = o.length - 1 : s >= o.length && (s = 0), p = o.eq(s), p.length && p.offset() || (s = 0, p = o.eq(s)), v = p.find(".content-block"), C = s, 0 > S ? (S = v.length - h, S = 0 > S ? 0 : S) : S = 0);
        var y = parseInt(r.css("min-width"), 10);
        0 == s && (b = y - p.position().left), r.css(m ? {
            right: -1 * (y - (0 != S ? v.eq(S) : p).position().left - (0 == S ? b : M))
        } : {
            left: -1 * (0 != S ? v.eq(S) : p).position().left
        }), k.find("li.active").removeClass("active"), k.each(function() {
            var e = l(this);
            e.find("li").eq(C).addClass("active")
        }), e.find(".navi.navi_thumbnails").each(function() {
            var e = l(this),
                t = e.find(".inner").width(),
                n = e.find("li.active");
            if (n.length) {
                var i = t - n.outerWidth(!0) - n.position().left;
                e.find(".inner ul").width() < t ? (e.find(".inner").addClass("no-navi"), e.find(".navi-prev, .navi-next").hide()) : (e.find(".inner").removeClass("no-navi"), e.find(".navi-prev, .navi-next").show()), i > 0 && (i = 0), e.find(".inner ul").css(g, i)
            }
        }), n && (i = setTimeout(function() {
            c.go_to(C + 1, !0, f)
        }, n)), u && !d && a.trigger("analytics:track", {
            source: e,
            data: {
                index: C,
                page: p
            }
        })
    }, k.on("click", "li", function() {
        var e = arguments.length > 1;
        return c.go_to(l(this).data("index"), e, !0), !1
    }), e.find("a.next").click(function(l) {
        return l.preventDefault(), c.go_to(C + 1), !1
    }), e.find("a.prev").click(function(l) {
        return l.preventDefault(), c.go_to(C - 1), !1
    }), this.onresize = function() {
        var n = e.width(),
            i = n;
        t = parseInt(l("#media-size-info").css("z-index")), o.each(function() {
            var e = l(this).find(".content-block");
            if (i += n + 1, 3 == e.length) {
                var a = 0;
                e.each(function() {
                    M = (n - 15 - 5 * (t + 1)) / (t + 1), 1 == t && (M -= 2), 0 == t && (M -= 10), a += M + 10, l(this).attr("style", "width: " + M + "px !important;").css("float", g).css("display", "block").addClass("onepage-block")
                }), i += a, l(this).attr("style", "width: " + a + "px !important;")
            } else l(this).css("width", n - 10), e.eq(0).addClass("onepage-block")
        }), e.hasClass("resizing") || (r.css("min-width", i), k.find("li.active").trigger("click", "false"))
    }, l(window).on("resize", this.onresize), this.onresize(), this.go_to(C, !0, !0), s && ! function() {
        e.find(".block-image").addClass("lightbox-item");
        var t = e.find(".block-image-wrapper");
        l("<span class='lupe'></span>").prependTo(t);
        var n = e.find(".lightbox-item").each(function(e) {
            l(this).data("index", e)
        });
        l("body.edit-mode").length || n.on("click", function(t) {
            function i() {
                var l = r.height(),
                    e = s.outerHeight(!0);
                120 > e && (e = 120), e >= l ? (c.css("max-height", l - 70), s.stop().animate({
                    top: 10,
                    "max-height": l - 20
                }, 350)) : (c.css("max-height", "auto"), s.stop().animate({
                    top: (l - e) / 2,
                    "max-height": "auto"
                }, 350))
            }

            function a() {
                c.empty(), u.clone().appendTo(c);
                var e = u.nextUntil(".lightbox-item");
                e.clone().appendTo(c);
                var t = (u.find(".block-image-wrapper"), u.find(".block-image-wrapper").css("background-image"));
                t = l.trim(t.substr(4, t.length - 5)).replace(/^[\"\']+|[\"\']+$/g, "");
                var a = new Image;
                a.onload = function() {
                    var l = c.width() / a.width;
                    c.find(".block-image").css({
                        "max-height": .72 * r.height(),
                        height: (a.height * l).toFixed(1) + "px"
                    }), i()
                }, a.src = t, n.eq(u.data("index") + 1).length ? r.find(".next").show() : r.find(".next").hide(), u.data("index") - 1 > -1 ? r.find(".prev").show() : r.find(".prev").hide(), i()
            }
            t.preventDefault(), e.find(".lightbox").remove();
            var r = l(['<div class="lightbox">', '<div class="inner">', '<a class="close-btn"></a>', '<h4 class="title"></h4>', '<a class="next"></a>', '<a class="prev"></a>', '<div class="content"></div>', "</div>", "</div>"].join("")).css("opacity", 0).appendTo(e),
                o = l(this);
            r.find(".title").html(e.find(".module-title-component .title").html());
            var s = r.find("> .inner"),
                c = r.find(".content"),
                u = o;
            a(), r.stop().animate({
                opacity: 1
            }, 500), r.on("click", function(e) {
                var t = l(e.target);
                if (t.hasClass("lightbox") || t.hasClass("close-btn")) r.stop().animate({
                    opacity: 0
                }, 500, function() {
                    r.remove()
                });
                else {
                    var i = window.innerWidth / 2 < e.pageX;
                    i ? r.find(".next:visible").length && (u = n.eq(u.data("index") + 1)) : r.find(".prev:visible").length && (u = n.eq(u.data("index") - 1)), a()
                }
            })
        })
    }(), e.addClass("initialized")
}
}), define("container/geolocation", [], function() {
return function() {}
}), define("container/header", [], function() {
return function() {}
}), define("container/header_15", ["jquery"], function(l) {
var e = function(l, e, t) {
    var n;
    return function() {
        var i = this,
            a = arguments,
            r = function() {
                n = null, t || l.apply(i, a)
            },
            o = t && !n;
        clearTimeout(n), n = setTimeout(r, e), o && l.apply(i, a)
    }
};
return function(t) {
    function n() {
        d || f ? i() : r()
    }

    function i() {
        if (d) {
            var e = t.find(".js_mobile-control"),
                n = e.find(".js_toggle_mobile_menu"),
                i = e.find(".js_toggle_search"),
                r = t.find(".js_toggle_open.search-flyout");
            n.off("click"), n.on("click", function() {
                e.toggleClass(c), r.removeClass(c)
            }), i.off("click"), i.on("click", function() {
                r.toggleClass(c), e.removeClass(c)
            })
        }
        var o = t.find(s);
        o.off("click"), u.on("click", a.bind(this)), o.on("click", function(e) {
            e.stopPropagation();
            var t = l(e.currentTarget);
            !t.hasClass(c) && t.is(".has-next-level") && e.preventDefault();
            var n = t.parents(".nav-level, .metabar-dropdown").siblings(s),
                i = o.not(n).not(t);
            i.removeClass(c), t.toggleClass(c), t.hasClass(c) && (g = !0, m = t)
        })
    }

    function a(e) {
        !l(e.target).parents(".level-1, .search-form").length && g && (m.removeClass("open"), g = !1)
    }

    function r() {
        var e = t.find(s + ".level-1-item, .module-metabar_15 " + s).parent();
        e.off("mouseenter mouseleave"), e.hover(function() {
            clearTimeout(h);
            var t = l(this).find(".level-1-item, .dropdown-label");
            e.find(".level-1-item, .dropdown-label").removeClass(c), t.addClass(c)
        }, function() {
            $hovered = l(this).find(".level-1-item, .dropdown-label"), h = setTimeout(function() {
                $hovered.removeClass(c)
            }, 500)
        })
    }

    function o() {
        l(".mobile-control").on("click", function() {
            l(this).next(".nav-level").toggle()
        })
    }
    var s = ".js_toggle_open",
        c = "open",
        u = l(window),
        d = u.width() <= 975,
        f = t.find(".module-main_navigation").hasClass("js_click");
    if (!f) {
        var h = 0,
            p = e(function() {
                n()
            }, 250);
        u.on("resize", p)
    }
    var m, g = !1;
    n(), o()
}
}), define("container/ir_ipad_categories", [], function() {
return function() {}
}), define("container/ir_ipad_docs", [], function() {
return function() {}
}), define("container/marketing_stage", ["jquery"], function(l) {
return function(e) {
    e.find(".controller-marketing_stage").animate({
        opacity: 1
    }, 500), e.find(".stage-container-stages").delay(500).animate({
        opacity: 1
    }, 500);
    var t = e.attr("data-selectmode").toLowerCase(),
        n = e.find(".stage-container-stages .module-marketing_stage_item");
    n.hide().eq(0).show();
    var i = e.find(".controller-marketing_stage .tab-item");
    i.eq(0).addClass("active-stage"), i.on(t, function() {
        var e = l(this);
        return e.hasClass("active-stage") ? !1 : (i.removeClass("active-stage"), e.addClass("active-stage"), l.each(n, function() {
            var t = l(this);
            t[0] != n.eq(i.index(e))[0] ? t.stop().hide() : t.fadeIn(500)
        }), void 0)
    });
    var a, r = function(l, e) {
            return Math.abs(l - e) > 25
        },
        o = function(e, t) {
            var n = l(".tab-item.active-stage");
            t > e ? n.is(":last-child") ? l(".tab-item:first-child").click() : n.next().click() : n.is(":first-child") ? l(".tab-item:last-child").click() : n.prev().click()
        };
    l(".container-marketing_stage-component").on("touchstart", function(l) {
        a = {
            x: l.originalEvent.touches[0].pageX,
            y: l.originalEvent.touches[0].pageY
        }
    }), l(".container-marketing_stage-component").on("touchend", function(l) {
        var e = l.originalEvent.changedTouches[0].pageX,
            t = r(e, a.x);
        t && o(e, a.x)
    }), l.fn.enterKey = function(e) {
        return this.each(function() {
            l(this).keypress(function(l) {
                var t = l.keyCode ? l.keyCode : l.which;
                "13" == t && e.call(this, l)
            })
        })
    }, l(".tab-item").enterKey(function() {
        l(this).mouseover().click(), e.find(".notepad-link-group a").focus()
    })
}
}), define("container/metabar", [], function() {
return function() {}
}), define("container/page_navigation", [], function() {
return function() {}
}), define("container/page_title", [], function() {
return function() {}
}), define("container/search_filter", ["jquery"], function() {
return function(l) {
    function e() {
        l.find(".search-filter-header-filterswitchbutton").click(function(e) {
            e.preventDefault(), l.find(".search-filter-header-filterswitchbutton").toggleClass("prime"), l.find(".search-filter-options").slideToggle()
        })
    }
    e()
}
}), define("container/search_result", [], function() {
return function() {}
}), define("container/selector_stage", ["jquery"], function(l) {
return function(e) {
    e.find(".stage-container-stages .module-teaser_content").length > 3 && !l("body").hasClass("edit-mode") && (e.find(".stage-container-stages .module-teaser_content").last().remove(), e.find(".controller-selector_stage .controller-selector_stage").last().remove());
    var t = e.find(".stage-container-stages .block-selector_stage"),
        n = e.find(".controller-selector_stage .block-selector_stage"),
        i = n.add(t),
        a = e.find(".stage-container-stages .module > div:last-child"),
        r = e.find(".stage-container-stages .module"),
        o = 0,
        s = e.find(".module-phone-hidden").is(":visible") ? "desktop" : "mobile";
    l(".block.block-selector_stage.component.block-selector_stage-component:nth-child(1)").addClass("active"), i.on("click", function() {
        if ("mobile" == s) {
            var e = l(this).closest(".module"),
                t = l(this).closest(".module-inner");
            return t.find("> div.module").removeClass("visibleOnPhone"), t.find("> div.module").addClass("hiddenOnPhone"), t.find("> div.module .inner").css("display", ""), void e.addClass("visibleOnPhone")
        }
        var n, i = l(this).not(".active"),
            t = i.parent(),
            o = t.hasClass("module"),
            c = o ? t : i,
            u = c.index();
        n = c.siblings().removeClass("active").end().toggleClass("active").hasClass("active"), -1 != u && (a.hide().eq(u).toggle(n || !o), o || r.hide().eq(u).toggle(n || !o))
    }), l(window).on("resize", function() {
        var l = e.find(".module-phone-hidden").is(":visible") ? "desktop" : "mobile";
        l != s && (n.removeClass("active"), a.hide(), "mobile" == l ? (r.show(), t.show()) : a.eq(o).show(), s = l)
    })
}
}), define("container/stackla", [], function() {
return function() {
    require(["container/stackla/fluid-embed"], function() {}, function() {})
}
}), define("container/stage", ["jquery"], function(l) {
return function(e) {
    var t, n, i = l("html"),
        a = e.find(".body"),
        r = l("body").css("direction"),
        o = e.find(".gallery-slide"),
        s = e.find(".navi ul"),
        c = this,
        u = !1,
        d = "rtl" == r;
    e.addClass("initialized"), e.css("padding", 0), o.each(function(e) {
        l("<li></li>").appendTo(s).data("index", e)
    }), s.on("click", "li", function() {
        return c.go_to(l(this).data("index")), !1
    });
    var f = e.data("animation-interval");
    f && (t = 1e3 * parseFloat(f), (0 > t || 0 / 0 == t || "string" == typeof t) && (t = !1));
    var h = 0;
    this.go_to = function(l, r) {
        clearTimeout(n), 0 > l ? l = o.length - 1 : l >= o.length && (l = 0);
        var f = o.eq(l);
        d ? f.length && f.offset() || (l = o.length - 1, f = o.eq(l)) : f.length && f.offset() || (l = 0, f = o.eq(l)), h = l, a.css(d ? {
            right: f.width() * l * -1
        } : {
            left: -1 * f.position().left
        }), s.find("li.active").removeClass("active"), s.find("li").eq(h).addClass("active"), t && (n = setTimeout(function() {
            c.go_to(h + 1, !0)
        }, t)), u && !r && i.trigger("analytics:track", {
            source: e,
            data: {
                index: h,
                page: f
            }
        })
    }, e.find("a.next").click(function(l) {
        return l.preventDefault(), c.go_to(h + 1), !1
    }), e.find("a.prev").click(function(l) {
        return l.preventDefault(), c.go_to(h - 1), !1
    }), this.onresize = function() {
        var l = e.width();
        o.closest(".gallery-slide").attr("style", function() {
            return "width: " + (l - 9) + "px !important;"
        }), targetWidth = l * (o.length + 1) + (o.length + 50), e.hasClass("resizingg") || a.css("min-width", targetWidth), c.go_to(h, !0)
    }, this.go_to(0, !0), this.onresize(), l(window).on("resize", this.onresize), e.addClass("initialized").removeClass("on-initialize").css("min-height", "initial")
}
}), define("container/tabcontainer", ["jquery"], function() {
return function(l) {
    require(["container/tabcontainer/js/archive"], function(e) {
        e.init(l)
    }, function() {}), require(["container/tabcontainer/js/togglebox"], function(e) {
        e.init(l)
    }, function() {})
}
}), define("container/teaser_edit", [], function() {
return function() {}
}), define("container/teaser_reference", [], function() {
return function() {}
}), define("container/tiles", ["jquery"], function(l) {
return function(e) {
    var t = l(e.find(".moduleghost.toggle-collapsible")),
        n = l(e.find(".module-responsive")),
        i = function() {
            n.each(function(e, t) {
                l(t).slideToggle(300).promise().done(function() {
                    l(t).toggleClass("closed")
                })
            })
        };
    0 === l("body.edit-mode").length && (t.hasClass("collapsed") && n.each(function(e, t) {
        l(t).toggleClass("closed")
    }), t.click(function() {
        t.toggleClass("collapsed"), i()
    }))
}
}), define("container/togglebox", ["jquery"], function(l) {
return function(e) {
    var t = e.find(".tab_menu"),
        n = t.is(":visible") ? "desktop" : "mobile",
        i = t.find(".tab"),
        a = e.find(".tab_content"),
        r = a.find(".body"),
        o = a.find(".tab-head"),
        s = a.find(".tab-body");
    i.on("click", function() {
        var e = l(this),
            t = e.closest("li").prevAll().size();
        return i.removeClass("open"), e.addClass("open"), r.hide(), l(r.get(t)).show(), l(s.get(t)).show(), !1
    }), o.on("click", function() {
        var e = l(this),
            t = e.closest(".body").prevAll().size(),
            n = l(s.get(t));
        return o.not(e).removeClass("open"), e.toggleClass("open"), s.not(n).hide(), n.toggle(), !1
    });
    var c = function(e) {
        if ("mobile" != e) {
            var n = t.find("ul").css("height");
            r.not(":first").hide(), a.css({
                height: n
            }), t.find(".open").get(0) ? t.find(".open").trigger("click") : l(i.get(0)).addClass("open").trigger("click")
        } else t.find(".open").removeClass("open"), r.show(), a.css({
            height: "100%"
        }), t.hide(), s.hide(), o.show()
    };
    window.onresize = function() {
        var l = t.is(":visible") ? "desktop" : "mobile";
        l != n && c(l), n = l
    }, c(n)
}
}), define("container/videocenter", ["jquery"], function(l) {
return function(e) {
    var t = this,
        n = e.find(".navi ul"),
        i = "AIzaSyAEaZH0OZKQ2zp_sb_28CD2i2e-uv8Ivdc";
    t.initLightBoxes = function() {
        var t = e.find(".block-image").addClass("lightbox-item");
        l("<span class='video'></span>").prependTo(t);
        var n = e.find(".lightbox-item").each(function(e) {
            l(this).data("index", e)
        });
        l("body.edit-mode").length || n.on("click", function(t) {
            function i() {
                var l = r.height(),
                    e = s.outerHeight(!0);
                120 > e && (e = 120), e >= l ? (c.css("max-height", l - 70), s.stop().animate({
                    top: 10,
                    "max-height": l - 20
                }, 350)) : (c.css("max-height", "auto"), s.stop().animate({
                    top: (l - e) / 2,
                    "max-height": "auto"
                }, 350))
            }

            function a() {
                c.empty(), u.clone().appendTo(c), r.find(".title").html(u.find(".copy h4").html()), c.find(".copy h4").remove(), c.find(".copy .info").show();
                var e = "m24" === u.data("type") ? '<iframe scrolling="no" height="378" width="626" frameborder="0" src="https://www.movingimage24.com/video_' + u.data("src") + '?width=626&height=378&player=42&scwm=2&chapter=0&overlays=0&cbarPlayPauseFlag=1&cbarTrackFlag=1&cbarTimeTotalFlag=1&cbarTimeDurationFlag=1&cbarvolumeBarFlag=1&cbarFullScreenFlag=1&qs=1&adbtn=0&adbtn1=0&adbtn5=0&bg=676666&fg=ffffff&ctcb1=ffffff&ctcb2=676666&ctcb3=555555&ctcb4=676666&ctcb7=cccccc&ctab1=1c1b1b&ctab2=3e3d3d&ctab3=3e3d3d&wvm=2&start=0&volume=100&loadtime=0&wmode=transparent&fupdate=1&cwm=0&ctp=0&stillimg=0&plang=default&qd=2"></iframe>' : '<iframe width="626" height="380" src="https://www.youtube.com/embed/' + u.data("src") + '?wmode=transparent&rel=0" frameborder="0" allowfullscreen="1"></iframe>';
                c.find(".media").html(e);
                var t = u.nextUntil(".lightbox-item");
                t.clone().appendTo(c);
                var a = (u.find(".block-image-wrapper"), u.find(".block-image-wrapper").css("background-image"));
                a = l.trim(a.substr(4, a.length - 5)).replace(/^[\"\']+|[\"\']+$/g, "");
                var o = new Image;
                o.onload = function() {
                    var l = c.width() / o.width;
                    c.find(".block-image").css({
                        "max-height": .72 * r.height(),
                        height: (o.height * l).toFixed(1) + "px"
                    }), i()
                }, o.src = a, n.eq(u.data("index") + 1).length ? r.find(".next").show() : r.find(".next").hide(), u.data("index") - 1 > -1 ? r.find(".prev").show() : r.find(".prev").hide(), i()
            }
            t.preventDefault(), e.find(".lightbox").remove();
            var r = l(['<div class="lightbox">', '<div class="inner">', '<a class="close-btn"></a>', '<h4 class="title"></h4>', '<a class="next"></a>', '<a class="prev"></a>', '<div class="content"></div>', "</div>", "</div>"].join("")).css("opacity", 0).appendTo(e),
                o = l(this),
                s = r.find("> .inner"),
                c = r.find(".content"),
                u = o;
            a(), r.stop().animate({
                opacity: 1
            }, 500), r.on("click", function(e) {
                var t = l(e.target);
                if (t.hasClass("lightbox") || t.hasClass("close-btn")) r.stop().animate({
                    opacity: 0
                }, 500, function() {
                    r.remove()
                });
                else {
                    var i = window.innerWidth / 2 < e.pageX;
                    i ? r.find(".next:visible").length && (u = n.eq(u.data("index") + 1)) : r.find(".prev:visible").length && (u = n.eq(u.data("index") - 1)), a()
                }
            })
        })
    };
    var a, r = e.find(".body"),
        o = e.find(".prev"),
        s = e.find(".next"),
        c = 0;
    t.go_to = function(t) {
        var i = e.find(".module-videocenter-component .page"),
            a = i.eq(c);
        0 > t ? t = i.length - 1 : t >= i.length && (t = 0), a = i.eq(t), a.length && a.offset() || (t = 0, a = i.eq(t)), c = t, r.css({
            left: -1 * a.position().left
        }), n.find("li.active").removeClass("active"), n.each(function() {
            var e = l(this);
            e.find("li").eq(c).addClass("active")
        })
    }, t.initNavElements = function() {
        e.find(".module-videocenter-component .page").length <= 1 && (s.add(o).addClass("hidden"), e.addClass("navi-hidden")), e.find(".navi.navi_dots li").each(function(e) {
            l(this).data("index", e)
        }), n.on("click", "li", function() {
            return t.go_to(l(this).data("index")), !1
        }), e.find("a.next").click(function(l) {
            return l.preventDefault(), t.go_to(c + 1), !1
        }), e.find("a.prev").click(function(l) {
            return l.preventDefault(), t.go_to(c - 1), !1
        })
    }, this.onresize = function() {
        var t = e.find(".module-videocenter-component .page"),
            i = e.width(),
            o = i;
        a = parseInt(l("#media-size-info").css("z-index")), t.each(function() {
            var e = l(this).find(".content-block");
            if (o += i + 1, 3 == e.length) {
                var t = 0;
                e.each(function() {
                    var e = (i - 15 - 5 * (a + 1)) / (a + 1);
                    1 == a && (e -= 2), 0 == a && (e -= 10), t += e + 10, l(this).attr("style", "width: " + e + "px !important;").css("float", "left").css("display", "block").addClass("onepage-block")
                }), o += t, l(this).attr("style", "width: " + t + "px !important;")
            } else l(this).css("width", i - 40), e.eq(0).addClass("onepage-block")
        }), e.hasClass("resizing") || (l(".edit-mode").length > 0 ? (l(".module-videocenter-component").css("min-width", o), r.width(r.width() + 30)) : r.css("min-width", o), n.find("li.active").trigger("click", "false"))
    }, e.find(".videocenter").hasClass("feed") || t.initNavElements(), l(window).on("resize", this.onresize), this.onresize(), this.go_to(c), this.initLightBoxes(), e.addClass("initialized"), l.fn.loadChannelVideos = function() {
        var a = l(this),
            r = a.find("ul.manually li").length,
            o = (a.data("list-type"), a.data("list-id")),
            s = a.data("page-size"),
            u = a.find(".asset-tpl"),
            d = a.data("max-results"),
            f = !1;
        a.closest(".container").find(".lt-ie8").length > 0 && (f = !0, a.removeClass("videocenter"), s = 3), "channel" == a.data("list-type") ? l.ajax({
            url: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=" + o + "&key=" + i,
            dataType: "jsonp",
            traditional: !0,
            type: "get"
        }).done(function(e) {
            var t = e.items[0].contentDetails.relatedPlaylists.uploads;
            "" != t && l.ajax({
                url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + t + "&maxResults=" + d + "&key=" + i,
                dataType: "jsonp",
                traditional: !0,
                type: "get"
            }).done(function(l) {
                void 0 !== l.items ? h(a, l) : m("Error loading video feed.")
            }).fail(function() {
                m("Error loading video feed.")
            })
        }).fail(function() {}) : l.ajax({
            url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=" + d + "&playlistId=" + o + "&key=" + i,
            dataType: "jsonp",
            traditional: !0,
            type: "get"
        }).done(function(l) {
            void 0 !== l.items ? h(a, l) : m("Error loading video feed.")
        }).fail(function() {
            m("Error loading video feed.")
        });
        var h = function(e, i) {
                e.find(".info-msg").remove(), n.append("<li></li>");
                for (var a = e.find(".page:last-child"), o = 0; o < i.items.length; o++) {
                    if (o > 0 && (o + r) % s == 0 || r > 0 && 0 == o && o % s == 0) {
                        var d = l('<div class="page"></div>');
                        e.append(d), n.append("<li></li>"), a = d
                    }
                    var h = u.clone();
                    h.removeClass("asset-tpl"), h.attr("data-type", "yt"), f && (h.removeClass("mediabox"), h.addClass("grid4"), h.find(".media-wrapper").addClass("module module-download_gallery_item copy")), a.append(h), h.detach().map(function() {
                        return [this, document.createTextNode("\n")]
                    }).appendTo(a), p(h, i.items[o].snippet)
                }
                a.append(l('<div class="mediabox placeholder"></div>')), a.append(l('<div class="mediabox placeholder"></div>')), t.onresize(), t.go_to(c), t.initNavElements(), t.initLightBoxes(), l(".lightbox").addClass("videocenter")
            },
            p = function(e, t) {
                e.attr("data-src", t.resourceId.videoId), e.find("h4").html(t.title);
                var n = '<a class="link" href="https://www.youtube.com/watch?v=' + t.resourceId.videoId + '" target="_blank">';
                n += "de" == l("html").attr("lang") ? "Weitere Informationen auf YouTube" : "More information on YouTube", n += "</a>", e.find(".info p").html(n);
                var i = e.find("img");
                void 0 === t.thumbnails ? i.remove() : (i.attr("src", t.thumbnails.medium.url), i.attr("alt", t.title), i.attr("title", t.title))
            },
            m = function(l) {
                var t = e.find(".info-msg");
                t.find(".loading").remove(), t.html(l)
            }
    }, e.find(".feed").each(function() {
        l(this).loadChannelVideos(), l(this).find(".asset-tpl").remove()
    })
}
}), define("container/worldwide_presence_data", ["jquery"], function() {
return function(l) {
    require(["container/worldwide_presence_data/js/archive"], function(e) {
        e.init(l)
    }, function() {}), require(["container/worldwide_presence_data/js/togglebox"], function(e) {
        e.init(l)
    }, function() {})
}
}), define("container/worldwide_presence_map", ["jquery"], function() {
return function() {
    showWorldwidePresenceMap()
}
}), define("module/angular_application", [], function() {
return function() {}
}), define("module/content", [], function() {
return function() {}
}), define("module/content_navigation", [], function() {
return function() {}
}), define("module/custom", [], function() {
return function() {}
}), define("module/custom_demo", [], function() {
return function() {}
}), define("module/downloadcenter", [], function() {
return function() {}
}), define("module/extern_javascript", [], function() {
return function() {}
}), define("module/extern_javascript_google_analytics", [], function() {
return function() {}
}), define("module/extern_javascript_google_tagmanager", [], function() {
return function() {}
}), define("module/extern_javascript_maxymiser", [], function() {
return function() {}
}), define("module/extern_javascript_newsletter", [], function() {
return function() {}
}), define("module/extern_javascript_optimizely", [], function() {
return function() {}
}), define("module/extern_javascript_qualtrics", [], function() {
return function() {}
}), define("module/extern_javascript_stockimg", [], function() {
return function() {}
}), define("module/extern_javascript_tagcommander", [], function() {
return function() {}
}), define("module/extern_javascript_tealium", [], function() {
return function() {}
}), define("module/footer_menu", [], function() {
return function() {}
}), define("module/form_inline", function() {
return function() {}
}), define("module/form_summary", ["form", "hbs!template/form_summary", "pubsub"], function(l, e, t) {
return function(n) {
    function i(l, e) {
        var t = {
            steps: []
        };
        return l.each(function(l, n) {
            var i = $(n),
                a = o.eq(l).find(".vertical-form-headline").text(),
                r = {
                    fields: [],
                    headline: a
                };
            i.find(".block").each(function() {
                var l = $(this).find(':input:not([type="hidden"])'),
                    t = l.attr("name"),
                    n = e['"' + t + '"'];
                n && r.fields.push(n)
            }), r.fields.length && t.steps.push(r)
        }), t
    }

    function a(t) {
        if (t[0] === n[0]) {
            var a = l.getSuccessfulControls(r),
                o = i(s, a);
            n.find(".js-steps").html(e(o))
        }
    }
    var r = n.closest("form"),
        o = r.find(".module-form_vertical"),
        s = (n.find(".steps"), r.find(".js-step-container"));
    t.subscribe("form:summaryStep", function(l, e) {
        a(e)
    })
}
}), define("module/form_vertical", function() {
return function() {}
}), define("module/gallery_page", [], function() {
return function() {}
}), define("module/geolocation", ["jquery"], function(l) {
return function() {
    function e() {
        var l = -1,
            e = "undefined" != typeof Storage ? sessionStorage.getItem("html5GeolocationLastUpdateTime") : null;
        switch (e = null != e ? Number(e) : e, html5GeolocationUpdateFrequency) {
            case "on every page load":
                l = 0;
                break;
            case "every minute":
                l = 6e4;
                break;
            case "every 5 minutes":
                l = 3e5;
                break;
            case "every 10 minutes":
                l = 6e5;
                break;
            case "every 30 minutes":
                l = 18e5;
                break;
            case "every 60 minutes":
                l = 36e5;
                break;
            case "every 120 minutes":
                l = 72e5;
                break;
            default:
                l = -1
        }
        performUpdate = null == e || l >= 0 && Date.now() >= e + l, trackHtml5Geolocation && performUpdate && "undefined" != typeof Storage && navigator.geolocation && navigator.geolocation.getCurrentPosition(t)
    }
    var t = function(e) {
        var t = e.coords.latitude,
            n = e.coords.longitude,
            i = e.coords.accuracy;
        void 0 !== t && null != t && void 0 !== n && null != n && l.getJSON("/oneweb/ajax/aspro/context-service/session", function(e) {
            e && (e.html5Latitude = t, e.html5Longitude = n, e.html5Accuracy = void 0 === i ? null : i, l.ajax({
                contentType: "application/json",
                type: "POST",
                url: "/oneweb/ajax/aspro/context-service/session",
                data: JSON.stringify(e),
                dataType: "text",
                success: function() {
                    "undefined" != typeof Storage && sessionStorage.setItem("html5GeolocationLastUpdateTime", Date.now())
                }
            }))
        })
    };
    e()
}
}), define("module/header", ["jquery"], function(l) {
return function(e) {
    var t = e.find(".header_metabar-linklist");
    t.hover(function() {
        l(this).addClass("open-dd")
    }, function() {
        l(this).removeClass("open-dd")
    }); {
        var n = e.find(".logo");
        e.find(".header_metabar-linklist")
    }
    n[0] && parseInt(l(window).width()) < 640 && (n.css("margin-top", "33px"), e.find(".block-header_navigation-component").css("top", "103px"));
    var i = e.find(".header_metabar-languageswitch");
    i.hover(function() {
        l(this).find("ul").removeClass("hidden"), l(this).addClass("open")
    }, function() {
        l(this).find("ul").addClass("hidden"), l(this).removeClass("open")
    });
    var a = e.find(".mob_view");
    a.on("click", function() {
        e.find(".header_metabar-linklist").toggleClass("collapsed")
    }), l(window).resize(function() {
        n[0] && parseInt(l(window).width()) < 640 ? (n.css("margin-top", "33px"), e.find(".block-header_navigation-component").css("top", "103px")) : (n.attr("style", ""), e.find(".block-header_navigation-component").attr("style", ""))
    })
}
}), define("module/iframe", [], function() {
return function() {}
}), define("module/ir_ipad_categories", [], function() {
return function() {}
}), define("module/ir_ipad_docs", [], function() {
return function() {}
}), define("module/joboffers", ["jquery"], function(l) {
return function(e) {
    var t = {};
    t.location = "LOCATIONS", t.area = "FUNCTIONALAREAS", t.level = "HIERARCHYLEVELS", t.company = "COMPANIES";
    var n = {};
    n.Australia = "70360000", n.Austria = "30400000", n.Belgium = "30560000", n.Benin = "12040000", n.Bermuda = "50600000", n.Brazil = "60760000", n["Burkina Faso"] = "18540000", n.Cameroon = "11200000", n.Canada = "51240000", n["Central African Republic"] = "11400000", n.China = "21560000", n["Cote d'Ivoire"] = "13840000", n["Czech Republic"] = "32030000", n.Denmark = "32080000", n.Finland = "32460000", n.France = "32500000", n.Germany = "32760000", n.Greece = "33000000", n["Hong Kong"] = "23440000", n.India = "23560000", n.Indonesia = "23600000", n.Ireland = "33720000", n.Italy = "33800000", n.Japan = "23920000", n.Madagascar = "14500000", n.Malaysia = "24580000", n.Mali = "14660000", n.Morocco = "15040000", n.Netherlands = "35280000", n["New Zealand"] = "75540000", n.Norway = "35780000", n.Poland = "36160000", n["Puerto Rico"] = "66300000", n.Russia = "36430000", n["Saudi Arabia"] = "46820000", n.Senegal = "16860000", n.Singapore = "27020000", n["South Africa"] = "17100000", n["South Korea"] = "24100000", n.Spain = "37240000", n.Sweden = "37520000", n.Switzerland = "37560000", n.Taiwan = "21580000", n.Thailand = "27640000", n.Togo = "17680000", n.Turkey = "37920000", n["United Arab Emirates"] = "47840000", n["United Kingdom"] = "38260000", n["United States of America"] = "58400000";
    var i = {};
    i.Accounting = "1", i.Actuarial = "2", i.Administration = "3", i["Apprenticeship / combined studies"] = "46", i["Asset Management"] = "4", i.Audit = "5", i.Banking = "6", i["Business Development"] = "7", i["Capital Markets"] = "8", i["Claims / Payments"] = "9", i.Collections = "56", i.Communications = "10", i.Compliance = "11", i.Controlling = "12", i["Customer Service"] = "16", i["Data Protection"] = "15", i.Finance = "18", i["Human Resources"] = "20", i["Information Technology"] = "21", i["Internal Consulting"] = "23", i["Investment Research"] = "52", i.Legal = "25", i["Loss Control"] = "43", i.Marketing = "26", i.Operations = "44", i.Others = "28", i.Physicians = "45", i["Portfolio Management"] = "53", i["Product Management"] = "54", i["Product Training"] = "55", i["Project Management"] = "31", i["Real Estate"] = "32", i.Reinsurance = "33", i.Reporting = "34", i["Risk Management"] = "35", i.Sales = "36", i["Supply Management"] = "38", i.Taxation = "39", i.Trading = "51", i.Underwriting = "41";
    var a = {};
    a.Executive = "9", a.Graduate = "3", a["Internship / Co-op"] = "6", a.Management = "1", a.Professional = "2", a.Temporary = "8", a.Trainee = "4", a["Work Student"] = "5";
    var r = {};
    r["Allianz Asia Pacific"] = "5", r["Allianz Asset Management AG"] = "41", r["Allianz Automotive Services GmbH"] = "26", r["Allianz Beratungs- und Vertriebs-AG, SV"] = "45", r["Allianz Brazil"] = "44", r["Allianz Deutschland AG"] = "20", r["Allianz España"] = "47", r["Allianz France"] = "4", r["Allianz Global Assistance"] = "16", r["Allianz Global Benefits"] = "22", r["Allianz Global Corporate & Specialty"] = "42", r["Allianz Global Investors"] = "3", r["Allianz Gruppe Österreich"] = "2", r["Allianz Insurance plc (UK)"] = "52", r["Allianz Ireland"] = "15", r["Allianz Lebensversicherungs - AG"] = "28", r["Allianz Life"] = "14", r["Allianz Managed Operations & Services"] = "25", r["Allianz Pension Consult GmbH"] = "23", r["Allianz Pension Partners GmbH"] = "38", r["Allianz Private Krankenversicherungs-AG"] = "24", r["Allianz Real Estate"] = "40", r["Allianz SE (global headquarters)"] = "1", r["Allianz SE Reinsurance"] = "46", r["Allianz Suisse Immobilien AG"] = "51", r["Allianz Suisse Versicherungsgesellschaft"] = "11", r["Allianz Versicherungs-AG"] = "31", r["Allianz Worldwide Partners"] = "53", r["Allianz Zentrum für Technik GmbH"] = "29", r["AZ Beratungs&Vertriebs-AG (Außendienst)"] = "35", r["AZ Beratungs&Vertriebs-AG (Innendienst)"] = "21", r["CAP Rechtsschutz AG"] = "49", r["Euler Hermes Group"] = "43", r["Fireman's Fund Insurance Company"] = "10";
    var o = "EN";
    "de" == l("html").attr("lang") && (o = "DE");
    var s = "/oneweb/ajax/aspro/jobapi/sap/hcmx/hitlist_na",
        c = s + "?sap-client=100&sap-language=" + o + "&pattern=PT",
        u = "https://jobs.allianz.com/sap/bc/bsp/sap/zhcmx_erc_ui_ex/",
        d = e,
        f = e.find(".jobads"),
        h = e.find(".ads-wrapper"),
        p = function(e, t) {
            var n = e;
            if (void 0 !== e && void 0 !== t) {
                var i = "";
                l.each(e.split(","), function() {
                    i = i + "," + t[this]
                }), n = i.substring(1)
            }
            return console.log("mappedData:", n), n
        },
        m = function(e) {
            var o = "",
                s = e.data("filters");
            if (void 0 !== s) {
                var c = !0;
                l.each(s.split(","), function() {
                    var l = e.data("filter-" + this);
                    if (void 0 !== l) {
                        var s;
                        "location" == this ? s = n : "area" == this ? s = i : "level" == this ? s = a : "company" == this && (s = r), c ? c = !1 : o += "&", o += encodeURIComponent(t[this] + "=" + p(l, s))
                    }
                })
            }
            return o
        };
    l.ajax({
        type: "GET",
        url: c,
        data: m(f),
        contentType: "application/json",
        dataType: "json"
    }).done(function(e) {
        if (0 == e.d.results.length) h.append("de" == l("html").attr("lang") ? l("<p>Keine Stellenanzeigen gefunden.</p>") : l("<p>No job offers found.</p>"));
        else {
            var t = l("<ul>");
            l.each(e.d.results, function() {
                t.append(l('<li><a class="link" href="' + u + "?jobId=" + this.JobID + '&utm_campaign=AZSE&utm_source=website&utm_medium=careers" target="_blank">' + this.Title + "</a></li>"))
            }), t.append("</ul>"), h.append(t)
        }
        d.find(".loading").remove(), d.find("a.more").show()
    }).fail(function(l, e, t) {
        f.append('<div class="info alert">Can\'t load job offers (Error ' + l.status + " " + t + ")</div>")
    }), d.find(".loading").remove(), d.find("a.more").show()
}
}), define("module/jobsearch", ["jquery"], function(l) {
return function(e) {
    var t = function(l, e, t) {
            l.append("<br>- '" + e + "' not found (" + t + ")"), l.show()
        },
        n = "https://jobs.allianz.com/sap/bc/bsp/sap/zhcmx_erc_ui_ex/",
        i = "EN";
    "de" == l("html").attr("lang") && (i = "DE");
    var a = {};
    a.location = "FilterLocations", a.area = "FilterFunctionalAreas", a["hierarchy-level"] = "FilterHierarchyLevels", a.company = "FilterCompanies";
    var r, o = "/oneweb/ajax/aspro/jobapi/sap/opu/odata/hcmx/erc_ui_open_srv/",
        s = {
            location: {
                name: "location",
                label: "Location",
                ajax: {
                    url: o + "LocationSet?$format=json&sap-language=" + i
                },
                select: {
                    name: "location",
                    labelKey: "Text",
                    valueKey: "LocationID"
                }
            },
            area: {
                name: "area",
                label: "Area of Expertise",
                ajax: {
                    url: o + "FunctionalAreaSet?$format=json&sap-language=" + i
                },
                select: {
                    name: "workArea",
                    labelKey: "Text",
                    valueKey: "FunctionalAreaID"
                }
            },
            level: {
                name: "level",
                label: "Job Level",
                ajax: {
                    url: o + "HierarchyLevelSet?$format=json&sap-language=" + i
                },
                select: {
                    name: "careerStatus",
                    labelKey: "Text",
                    valueKey: "HierarchyLevelID"
                }
            },
            company: {
                name: "company",
                label: "Company",
                ajax: {
                    url: o + "CompanySet?$format=json&sap-language=" + i
                },
                select: {
                    name: "company",
                    labelKey: "Text",
                    valueKey: "CompanyID"
                }
            }
        },
        c = e.find(".selects .info.alert"),
        u = function(e, n) {
            l.ajax({
                type: "GET",
                url: n.ajax.url,
                contentType: "application/json",
                dataType: "json"
            }).done(function(t) {
                var i = e.find('select[name="' + n.select.name + '"]'),
                    a = t.d.results;
                if (void 0 !== a && a.length > 0) {
                    var r = a.sort(d),
                        o = l("<select>");
                    l.each(r, function() {
                        "location" == n.name ? 3 == this.Type && o.append(l("<option></option>").val(l(this).attr(n.select.valueKey)).html(l(this).attr(n.select.labelKey))) : o.append(l("<option></option>").val(l(this).attr(n.select.valueKey)).html(l(this).attr(n.select.labelKey)))
                    }), i.append(o.html()), i.prop("disabled", !1)
                }
            }).fail(function(l) {
                t(c, n.label, l.status)
            })
        },
        d = function(e, t) {
            var n = l(e).attr("Text").toLowerCase(),
                i = l(t).attr("Text").toLowerCase();
            return n == i ? 0 : n > i ? 1 : -1
        },
        f = e.find(".search-form"),
        h = f.find("a.submit"),
        p = 0;
    f.find(".button-placeholder").height(h.outerHeight()), f.find(".col.fields").each(function(e, t) {
        r = l(t).height(), r > p && (p = r)
    }), f.find(".loading").remove(), f.find(".col.fields").each(function(e, t) {
        l(t).find("label").css("padding-top", p - l(t).height()), l(t).css("visibility", "visible")
    }); {
        var c = e.find(".selects .info.alert");
        location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
    }
    u(f, s.location), u(f, s.area), u(f, s.level), u(f, s.company), h.attr("href", n + "?" + f.serialize() + "&utm_campaign=AZSE&utm_source=website&utm_medium=careers"), f.find('input[type="text"]').keyup(function() {
        h.attr("href", n + "?" + f.serialize() + "&utm_campaign=AZSE&utm_source=website&utm_medium=careers")
    }), f.find("select").change(function() {
        h.attr("href", n + "?" + f.serialize() + "&utm_campaign=AZSE&utm_source=website&utm_medium=careers")
    })
}
}), define("module/legal_disclaimer", [], function() {
return function() {}
}), define("module/legal_disclaimer_country_picker", ["jquery"], function() {
var l = {
    Afghanistan: 93,
    Albanien: 355,
    Albania: 355,
    Algerien: 213,
    Algeria: 213,
    "Amerikanisch-Samoa": 1684,
    "American Samoa": 1684,
    Andorra: 376,
    Angola: 244,
    Anguilla: 1264,
    "Australische Außengebiete: Antarktis, Norfolkinsel": 672,
    Antarctica: 672,
    Antigua: 1268,
    Argentinien: 54,
    Argentina: 54,
    Armenien: 374,
    Armenia: 374,
    Aruba: 297,
    Ascension: 247,
    Australien: 61,
    Australia: 61,
    "Australian External Territories": 672,
    Österreich: 43,
    Austria: 43,
    Aserbaidschan: 994,
    Azerbaijan: 994,
    Bahamas: 1242,
    Bahrain: 973,
    Bangladesch: 880,
    Bangladesh: 880,
    Barbados: 1246,
    "Antigua und Barbuda": 1268,
    Barbuda: 1268,
    Belarus: 375,
    Belgien: 32,
    Belgium: 32,
    Belize: 501,
    Benin: 229,
    Bermuda: 1441,
    Bhutan: 975,
    Bolivien: 591,
    Bolivia: 591,
    "Bosnien und Herzegowina": 387,
    "Bosnia & Herzegovina": 387,
    Botsuana: 267,
    Botswana: 267,
    Brasilien: 55,
    Brazil: 55,
    "Britische Jungferninseln": 1284,
    "British Virgin Islands": 1284,
    Brunei: 673,
    "Brunei Darussalam": 673,
    Bulgarien: 359,
    Bulgaria: 359,
    "Burkina Faso": 226,
    Burundi: 257,
    Kambodscha: 855,
    Cambodia: 855,
    Kamerun: 237,
    Cameroon: 237,
    Kanada: 1,
    Canada: 1,
    "Kap Verde": 238,
    "Cape Verde Islands": 238,
    "Caiman-Inseln": 1345,
    "Cayman Islands": 1345,
    "Zentralafrikanische Republik": 236,
    "Central African Republic": 236,
    Tschad: 235,
    Chad: 235,
    Neuseeland: 64,
    "Chatham Island (New Zealand)": 64,
    Chile: 56,
    China: 86,
    "China (PRC)": 86,
    "ehemals Weihnachtsinseln - jetzt Australien": 53,
    "Christmas Island": 53,
    "ehemals Kokosinseln - jetzt Australien": 61,
    "Cocos-Keeling Islands": 61,
    Kolombien: 57,
    Colombia: 57,
    Komoren: 269,
    Comoros: 269,
    "Republik Kongo (Brazzaville)": 242,
    Congo: 242,
    "Demokratische Republik Kongo (Kinshasa, früher Zaire)": 243,
    "Congo, Dem. Rep. of  (former Zaire)": 243,
    Cookinseln: 682,
    "Cook Islands": 682,
    "Costa Rica": 506,
    "Côte dIvoire (Elfenbeinküste)": 225,
    "Ivory Coast": 225,
    Kroatien: 385,
    Croatia: 385,
    Kuba: 53,
    Cuba: 53,
    "Kuba (Guantanamo Bay)": 5399,
    "Cuba (Guantanamo Bay)": 5399,
    Curaçao: 599,
    Zypern: 357,
    Cyprus: 357,
    Tschechien: 420,
    "Czech Republic": 420,
    Dänemark: 45,
    Denmark: 45,
    "Chagos-Archipel (Diego-Garcia)": 246,
    "Diego Garcia": 246,
    Dschibuti: 253,
    Djibouti: 253,
    Dominica: 1767,
    "Dominican Republic": 1809,
    "Dominikanische Republik": 1829,
    Osttimor: 670,
    "East Timor": 670,
    "Osterinseln (Chile)": 56,
    "Easter Island": 56,
    Ecuador: 593,
    Ägypten: 20,
    Egypt: 20,
    "El Salvador": 503,
    Äquatorialguinea: 240,
    "Equatorial Guinea": 240,
    Eritrea: 291,
    Estland: 372,
    Estonia: 372,
    Äthiopien: 251,
    Ethiopia: 251,
    Falklandinseln: 500,
    "Falkland Islands (Malvinas)": 500,
    Färöer: 298,
    "Faroe Islands": 298,
    Fidschi: 679,
    "Fiji Islands": 679,
    Finnland: 358,
    Finland: 358,
    Frankreich: 33,
    France: 33,
    Martinique: 596,
    "French Antilles": 596,
    "Französisch-Guayana": 594,
    "French Guiana": 594,
    "Französisch-Polynesien": 689,
    "French Polynesia": 689,
    Gabun: 241,
    "Gabonese Republic": 241,
    Gambia: 220,
    Georgien: 995,
    Georgia: 995,
    Deutschland: 49,
    Germany: 49,
    Ghana: 233,
    Gibraltar: 350,
    Griechenland: 30,
    Greece: 30,
    Grönland: 299,
    Greenland: 299,
    Grenada: 1473,
    Guadeloupe: 590,
    Guam: 1671,
    "Guantanamo Bay": 5399,
    Guatemala: 502,
    "Guinea-Bissau": 245,
    Guinea: 224,
    Guyana: 592,
    Haiti: 509,
    Honduras: 504,
    "Hong Kong": 852,
    Ungarn: 36,
    Hungary: 36,
    Island: 354,
    Iceland: 354,
    Indien: 91,
    India: 91,
    Indonesien: 62,
    Indonesia: 62,
    Iran: 98,
    Irak: 964,
    Iraq: 964,
    Irland: 353,
    Ireland: 353,
    Israel: 972,
    Italien: 39,
    Italy: 39,
    Jamaika: 1876,
    Jamaica: 1876,
    Japan: 81,
    Jordanien: 962,
    Jordan: 962,
    Kasachstan: 7,
    Kazakhstan: 7,
    Kenia: 254,
    Kenya: 254,
    Kiribati: 686,
    "Korea, Demokratische Volksrepublik": 850,
    "Korea (North)": 850,
    "Korea, Republik / Corea": 82,
    "Korea (South)": 82,
    Kuwait: 965,
    Kirgisistan: 996,
    "Kyrgyz Republic": 996,
    Laos: 856,
    Lettland: 371,
    Latvia: 371,
    Libanon: 961,
    Lebanon: 961,
    Lesotho: 266,
    Liberia: 231,
    Libyen: 218,
    Libya: 218,
    Liechtenstein: 423,
    Litauen: 370,
    Lithuania: 370,
    Luxemburg: 352,
    Luxembourg: 352,
    Macao: 853,
    Mazedonien: 389,
    "Macedonia (Former Yugoslav Rep of.)": 389,
    Madagaskar: 261,
    Madagascar: 261,
    Malawi: 265,
    Malaysia: 60,
    Malediven: 960,
    Maldives: 960,
    Mali: 223,
    "Mali Republic": 223,
    Malta: 356,
    Marshallinseln: 692,
    "Marshall Islands": 692,
    Mauretanien: 222,
    Mauritania: 222,
    Mauritius: 230,
    Mayotte: 269,
    "Mayotte Island": 269,
    Mexiko: 52,
    Mexico: 52,
    Mikronesien: 691,
    "Micronesia, (Federal States of)": 691,
    "Midway Island": 1808,
    Moldawien: 373,
    Moldova: 373,
    Monaco: 377,
    Mongolei: 976,
    Mongolia: 976,
    Montenegro: 382,
    Montserrat: 1664,
    Marokko: 212,
    Morocco: 212,
    Mozambique: 258,
    "Myanmar (Burma)": 95,
    Myanmar: 95,
    Namibia: 264,
    Nauru: 674,
    Nepal: 977,
    Niederlande: 31,
    Netherlands: 31,
    "Niederländische Antillen": 599,
    "Netherlands Antilles": 599,
    "St. Kitts und Nevis": 1869,
    Nevis: 1869,
    Neukaledonien: 687,
    "New Caledonia": 687,
    "New Zealand": 64,
    Nicaragua: 505,
    Niger: 227,
    Nigeria: 234,
    Niue: 683,
    Norfolkinseln: 672,
    "Norfolk Island": 672,
    "Nördliche Marianen": 1670,
    "Northern Marianas Islands": 1670,
    Norwegen: 47,
    Norway: 47,
    Oman: 968,
    Pakistan: 92,
    Palau: 680,
    "reserviert (Palästinensische Autonomiegebiete)": 970,
    "Palestinian Settlements": 970,
    Panama: 507,
    "Papua-Neuguinea": 675,
    "Papua New Guinea": 675,
    Paraguay: 595,
    Peru: 51,
    Philippinen: 63,
    Philippines: 63,
    Polen: 48,
    Poland: 48,
    Portugal: 351,
    "Puerto Rico": 1787,
    Katar: 974,
    Qatar: 974,
    Reunion: 262,
    "Réunion Island": 262,
    Rumänien: 40,
    Romania: 40,
    Russland: 7,
    Russia: 7,
    Ruanda: 250,
    "Rwandese Republic": 250,
    "St. Helena": 290,
    "St. Kitts": 1869,
    "St. Kitts/Nevis": 1869,
    "St. Lucia": 1758,
    "St. Pierre & Miquelon": 508,
    "St. Vincent und die Grenadinen": 1784,
    "St. Vincent & Grenadines": 1784,
    Samoa: 685,
    "San Marino": 378,
    "São Tomé und Principe": 239,
    "São Tomé and Principe": 239,
    "Saudi-Arabien": 966,
    "Saudi Arabia": 966,
    Senegal: 221,
    Serbien: 381,
    Serbia: 381,
    Seychellen: 248,
    "Seychelles Republic": 248,
    "Sierra Leone": 232,
    Singapur: 65,
    Singapore: 65,
    Slowakei: 421,
    "Slovak Republic": 421,
    Slowenien: 386,
    Slovenia: 386,
    Salomonen: 677,
    "Solomon Islands": 677,
    Somalia: 252,
    "Somali Democratic Republic": 252,
    Südafrika: 27,
    "South Africa": 27,
    Spanien: 34,
    Spain: 34,
    "Sri Lanka": 94,
    Sudan: 249,
    Suriname: 597,
    Swasiland: 268,
    Swaziland: 268,
    Schweden: 46,
    Sweden: 46,
    Schweiz: 41,
    Switzerland: 41,
    Syrien: 963,
    Syria: 963,
    Taiwan: 886,
    Tadschikistan: 992,
    Tajikistan: 992,
    Tansania: 255,
    Tanzania: 255,
    Thailand: 66,
    "Timor Leste": 670,
    Togo: 228,
    "Togolese Republic": 228,
    Tokelau: 690,
    Tonga: 676,
    "Tonga Islands": 676,
    "Trinidad & Tobago": 1868,
    Tunesien: 216,
    Tunisia: 216,
    Türkei: 90,
    Turkey: 90,
    Turkmenistan: 993,
    "Turks- und Caicosinseln": 1649,
    "Turks and Caicos Islands": 1649,
    Tuvalu: 688,
    Uganda: 256,
    Ukraine: 380,
    "Vereinigte Arabische Emirate": 971,
    "United Arab Emirates": 971,
    Großbritannien: 44,
    "United Kingdom": 44,
    USA: 1,
    "United States of America": 1,
    "Amerikanische Jungferninseln": 1340,
    "US Virgin Islands": 1340,
    Uruguay: 598,
    Usbekistan: 998,
    Uzbekistan: 998,
    Vanuatu: 678,
    Vatikanstadt: 418,
    "Vatican City": 418,
    Venezuela: 58,
    Vietnam: 84,
    "Wake Island": 808,
    "Wallis und Futuna": 681,
    "Wallis and Futuna Islands": 681,
    Jemen: 967,
    Yemen: 967,
    Sambia: 260,
    Zambia: 260,
    Zanzibar: 255,
    Simbabwe: 263,
    Zimbabwe: 263
};
return function(e) {
    function t(l) {
        r = l;
        var e = r.find("div.disclaimer-country-group").attr("selected-countries");
        s = e.split("|")
    }

    function n() {
        var l = r.find("div.disclaimer-country-group > div.disclaimer-country-row > div.disclaimer-field > select.disclaimer-country");
        $(l).change(function() {
            c = $(l).val(), a()
        })
    }

    function i() {
        var l = r.find("div.disclaimer-country-group > div.disclaimer-country-row > div.disclaimer-field > input.disclaimer-country-code");
        $(l).keyup(function() {
            o = $(l).val();
            var e = "",
                t = o.substr(0, 1);
            "+" === t && (e = o.substr(1, o.length), o = e), a()
        })
    }

    function a() {
        l[c] === parseInt(o) || "Puerto Rico" === c && ("1787" === o || "1939" === o) ? -1 !== s.indexOf(c) && r.find("div.disclaimer-button.disclaimer-button-ok").removeClass("hidden") : r.find("div.disclaimer-button.disclaimer-button-ok").addClass("hidden")
    }
    var r, o, s, c = "";
    t(e), n(), i()
}
}), define("module/logo", [], function() {
return function() {}
}), define("module/main_navigation", [], function() {
return function() {}
}), define("module/marketing_stage_item", [], function() {
return function() {}
}), define("module/metabar", [], function() {
return function() {}
}), define("module/metabar_15", ["jquery"], function(l) {
function e(e) {
    var t = e.find(".js_dropdown-label");
    t.on("click", function() {
        var e = l(this);
        e.trigger("toggle")
    })
}

function t(e) {
    var t = e.find(".js_dropdown-label");
    t.on("mouseover", function() {
        var e = l(this);
        e.trigger("toggle")
    }), t.on("mouseleave", function() {
        var e = l(this);
        e.trigger("close")
    })
}
return function(l) {
    Modernizr.touch ? e(l) : t(l)
}
}), define("module/newsletter", [], function() {
return function() {}
}), define("module/notepad", [], function() {
return function() {}
}), define("module/notepad_grid", [], function() {
return function() {}
}), define("module/page_navigation", [], function() {
return function() {}
}), define("module/page_title", [], function() {
return function() {}
}), define("module/portlet", [], function() {
return function() {}
}), define("module/reverse_portlet_proxy", [], function() {
return function() {}
}), define("module/reverse_proxy", [], function() {
return function() {}
}), define("module/search_field", ["jquery"], function(l) {
return function(e) {
    function t() {
        return d.val().length
    }

    function n() {
        var l = "undefined" != typeof v ? "&amp;filter=" + v : "";
        self.location.href = m.attr("action") + "?" + s + "=" + d.val() + l
    }

    function i() {
        d.val(""), d.blur(), g.hide()
    }

    function a() {
        parseInt(l(window).width()) > 640 ? (f.css("display", "inline-block"), f.width(d.width()), h.hide()) : (f.hide(), h.css("display", "inline-block"), h.width(d.width()))
    }

    function r() {
        parseInt(l(window).width()) > 640 ? (d.parent().removeAttr("style"), f.hide()) : (d.parent().removeAttr("style"), h.hide())
    }

    function o() {
        "" != d.val() ? (r(), y.value = d.val()) : a(), l(document).on("mediaQueryChanged", function() {
            a()
        }), g.click(function() {
            i()
        })
    }
    var s = "query",
        c = e.find(".flyout").attr("data-suggestions_min_char"),
        u = e.find(".flyout").attr("data-number_of_suggestions"),
        d = (e.find(".flyout").attr("data-typeahead_available"), e.find(".search_field-flyout-searchfield")),
        f = e.find(".search_field-flyout-searchfield-overlay"),
        h = e.find(".search_field-flyout-searchfield-overlay-mobile"),
        p = e.find(".search_field-flyout-searchbutton"),
        m = e.find(".search-form"),
        g = e.find(".search_field-flyout-searchfield-clearbutton"),
        v = d.data("searchfilter"),
        y = (l("html").attr("lang"), {});
    e.parent().css("left", "180px"), e.width(e.parent().parent().width() - 190), parseInt(l(window).width()) > 640 ? (f.css("display", "inline-block"), f.width(d.width())) : (h.css("display", "inline-block"), h.width(d.width())), p.click(function() {
        n()
    }), d.focus(function() {
        r()
    }), d.focusout(function() {
        l(this).val().length < 1 && (a(), d.parent().css("position", "relative"))
    }), d.keyup(function(l) {
        13 == l.which && n(), 27 == l.which && i(), t() > 0 ? g.fadeIn(200) : g.hide()
    }), l(window).on("resize", function() {
        e.parent().css("left", "180px"), e.width(e.parent().parent().width() - 190)
    });
    var b = l("meta[name=onewebCMSSearchCore]").attr("content"),
        M = e.find(".flyout").attr("data-typeahead_path") + b + "/";
    d.autocomplete({
        serviceUrl: M,
        minChars: c,
        lookupLimit: u,
        appendTo: ".search_field-flyout-inner",
        zIndex: 500,
        triggerSelectOnValidInput: !0,
        params: {
            count: u
        },
        onSelect: function(l) {
            y.value !== l.value && (y = l)
        },
        formatResult: function(t, i) {
            var a = "(" + l.Autocomplete.utils.escapeRegExChars(i) + ")",
                r = e.find(".autocomplete-suggestions");
            return r.click(function() {
                n()
            }), "undefined" == typeof t.url || t.url.length <= 0 ? '<div class="autocomplete-no-quick-link">' + t.value.replace(new RegExp(a, "gi"), '<span class="search-suggestion-char">$1</span>') + "</div>" : '<div class="autocomplete-quick-link"><a href="' + t.url + '">' + t.value + "</a></div>"
        }
    }), o()
}
}), define("module/search_filter_range", [], function() {
return function() {}
}), define("module/search_filter_static", [], function() {
return function() {}
}), define("module/servicebox", ["jquery"], function(l) {
return function(e) {
    {
        var t, n = e.find(">.inner"),
            i = n.find(">.content"),
            a = n.find(">.tabs"),
            r = n.closest(".container-content_navigation").get(0),
            o = n.find(">.h3");
        l("html")
    }
    n.find(".active").get(0) || (a.find(".tab:first").addClass("active"), i.find(".block-servicebox_tab:first").addClass("active")), r && (n.addClass("close"), o.on("click", function() {
        if (n.toggleClass("open").toggleClass("close"), n.hasClass("open")) {
            var e = i.find(".active").prevAll().size();
            l(a.find("li").get(e)).addClass("active")
        } else a.find("li").removeClass("active")
    }), a.find("li").removeClass("active")), t = a.find("li").click(function() {
        var e = l(this),
            t = e.prevAll().size();
        return r && (e.hasClass("active") || !e.hasClass("active") && n.hasClass("close")) && n.toggleClass("open").toggleClass("close"), n.find(".active").removeClass("active"), l(i.find(".block-servicebox_tab").get(t)).add(e).addClass("active"), n.hasClass("close") && e.removeClass("active"), !1
    }).each(function(e) {
        l(this).data("index", e)
    }), n.addClass("ready")
}
}), define("module/social_sharing", ["jquery"], function(l) {
var e = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
} [Modernizr.prefixed("transition")] || "transitionend";
return function(t) {
    var n = l(t),
        i = n.filter(".js_info_container"),
        a = function(l, t) {
            l.one(e, function() {
                l.addClass("notransition").height("auto"), setTimeout(function() {
                    l.removeClass("notransition")
                }, 0)
            }), l.height(t)
        },
        r = function(l, e) {
            l.addClass("notransition").height(e), setTimeout(function() {
                l.removeClass("notransition").height(0)
            }, 0)
        },
        o = function(l) {
            l.preventDefault();
            var e = i.find(".js_info_wrapper");
            e.toggleClass("open");
            var t = i.find(".js_info_content").outerHeight();
            e.hasClass("open") ? a(e, t) : r(e, t)
        };
    i.find(".js_info_toggle").on("click", o), i.find(".js_info_up_icon").on("click", o)
}
}), define("module/teaser_aggregator", ["jquery", "ext/markup", "utils/DateUtils", "utils/LabelUtils", "utils/NumberUtils", "utils/PreviewBuilder", "utils/TextUtils", "search/config", "managers/AggregatorManager.jquery", "widgets/jquery/PagerWidget", "oneweb/AggregatorResultWidget", "oneweb/AggregatorFilterWidget", "oneweb/AggregatorQueryFilterWidget", "oneweb/LazyLoadingWidget", "oneweb/InfiniteLoadingWidget"], function() {
return function(l) {
    function e(l) {
        x = l, k = l.find("div.result-container"), Z = x.find("div.result-container > div.result-list"), C = x.find("div.result-container > div.result-error")
    }

    function t() {
        x.find("div.filter-date-range-block label").text(q.getLabel("teaseraggregator.daterange.label")), x.find("div.filter-keyword-block label").text(q.getLabel("teaseraggregator.keyword.label")), x.find("div.filter-topic-block label").text(q.getLabel("teaseraggregator.topic.label")), x.find("div.filter-category-block label").text(q.getLabel("teaseraggregator.category.label")), x.find("div.block-button-component a").text(q.getLabel("teaseraggregator.resetfilter.label")), ("1" === E.dateRange.enable || "1" === E.keyword.enable || "1" === E.topic.enable || "1" === E.category.enable) && x.find("div.filter").removeClass("hidden")
    }

    function n() {
        var l = x.find("div.block-button-component");
        $(l).click(function() {
            "1" === E.dateRange.enable && $(x.find("select.filter-date-range")).val(T), "1" === E.keyword.enable && $(x.find("select.filter-keyword")).val(T), "1" === E.topic.enable && $(x.find("select.filter-topic")).val(T), "1" === E.category.enable && $(x.find("select.filter-category")).val(T);
            for (var l in S.widgets)
                if (S.widgets.hasOwnProperty(l)) {
                    var e = S.widgets[l];
                    (e instanceof AjaxSolr.AggregatorFilterWidget || e instanceof AjaxSolr.AggregatorQueryFilterWidget) && (e.clear(), e.value = T)
                }
            o()
        })
    }

    function i(l) {
        var e = "",
            t = x.find("select." + l);
        return e = t.length > 0 ? t.val() : x.find("div." + l + "-block").attr("default-value")
    }

    function a() {
        var l = {};
        l.dateRange = {
            value: x.find("div.filter-date-range-block").attr("default-value"),
            enable: x.find("div.filter-date-range-block").attr("enable-filter")
        }, l.searchTerm = {
            value: x.find("div.filter-search-term-block").attr("default-value"),
            enable: x.find("div.filter-date-range-block").attr("enable-filter")
        }, l.folder = {
            value: x.find("div.filter-folder-block").attr("default-value"),
            enable: x.find("div.filter-folder-block").attr("enable-filter")
        }, l.keyword = {
            value: x.find("div.filter-keyword-block").attr("default-value"),
            enable: x.find("div.filter-keyword-block").attr("enable-filter")
        }, l.topic = {
            value: x.find("div.filter-topic-block").attr("default-value"),
            enable: x.find("div.filter-topic-block").attr("enable-filter")
        }, l.category = {
            value: x.find("div.filter-category-block").attr("default-value"),
            enable: x.find("div.filter-category-block").attr("enable-filter")
        }, E = l
    }

    function r() {
        j = L;
        var l = $(k).attr("search-path"),
            e = $("meta[name=onewebCMSSearchCore]").attr("content"),
            t = A.solrPath + e;
        if (_ = $("meta[name=portalName]").attr("content"), void 0 !== E.folder.value && E.folder.value.length > 0) {
            _ = x.find("div.filter-folder-block").attr("portalName"), e = x.find("div.filter-folder-block").attr("onewebCMSSearchCore");
            var n = x.find("div.filter-folder-block").attr("lang");
            void 0 !== n && n.length > 0 && (j = n)
        }
        void 0 !== l && l.length > 0 && (t = l + e), S = new AjaxSolr.AggregatorManager({
            solrUrl: t,
            timeout: A.timeout
        }), S.addWidget(new AjaxSolr.AggregatorResultWidget({
            id: "aggregator-result-widget",
            target: Z,
            errorTarget: C,
            portalName: _
        }))
    }

    function o() {
        S.doRequest(0)
    }

    function s() {
        var l = $(k).attr("paging-type"),
            e = x.find("div.result").attr("module-height") || "auto",
            t = x.find("h1").height() + x.find("div.filter").height();
        if (l === N.pagination) {
            var n = 34;
            "auto" !== e && ($(Z).css("height", e - t - n), $(Z).css("overflow-y", "auto"));
            var i = x.find("ul.pager");
            S.addWidget(new AjaxSolr.PagerWidget({
                id: "pager",
                target: i,
                prevLabel: "<",
                nextLabel: ">",
                innerWindow: 1
            }))
        } else if (l === N.button) {
            var a = 20;
            "auto" !== e && ($(Z).css("height", e - t - a), $(Z).css("overflow-y", "auto"));
            var r = x.find("div.result-container > div.lazy-loading-button");
            S.addWidget(new AjaxSolr.LazyLoadingWidget({
                id: "lazy-loading-widget",
                resultWidget: "aggregator-result-widget",
                infiniteScrolling: !1,
                target: r
            }))
        } else $(Z).addClass("infinitive-scroll"), S.addWidget(new AjaxSolr.InfiniteLoadingWidget({
            id: "infinite-loading-widget",
            resultWidget: "aggregator-result-widget",
            height: e,
            headerHeight: t
        }))
    }

    function c() {
        var l = A.solrAggregatorParams;
        for (var e in l) l.hasOwnProperty(e) && S.store.addByValue(e, l[e]);
        var t = $(k).attr("sorting"),
            n = $(k).attr("priority"),
            i = "";
        "1" === n && (i = "_teaser_priority_1 ASC, "), "Alphabetically by the title" === t ? i += "_teaser_title_1 ASC" : "By date ascending" === t ? i += "_teaser_date_1 ASC" : "By date descending" === t && (i += "_teaser_date_1 DESC"), i += ",score desc", S.store.addByValue("sort", i);
        var a = $(k).attr("data-results_per_page");
        S.store.addByValue("rows", a > 0 ? a : 10)
    }

    function u() {
        d(), h(), f(), p()
    }

    function d() {
        if ("1" === E.topic.enable)
            if (E.topic.value.length > 0) {
                for (var l = [{
                        value: T,
                        text: "All"
                    }], e = E.topic.value.split(","), t = 0; t < e.length; t++) l.push({
                    value: e[t],
                    text: e[t]
                });
                S.addWidget(new AjaxSolr.AggregatorQueryFilterWidget({
                    id: "aggregator-filter-widget-topic",
                    field: "_doc_topic",
                    target: x.find("select.filter-topic"),
                    values: l
                }))
            } else S.addWidget(new AjaxSolr.AggregatorFilterWidget({
                id: "aggregator-filter-widget-topic",
                field: "_doc_topic",
                target: x.find("select.filter-topic")
            }))
    }

    function f() {
        if ("1" === E.category.enable)
            if (E.category.value.length > 0) {
                for (var l = [{
                        value: T,
                        text: "All"
                    }], e = E.category.value.split(","), t = 0; t < e.length; t++) l.push({
                    value: e[t],
                    text: e[t]
                });
                S.addWidget(new AjaxSolr.AggregatorQueryFilterWidget({
                    id: "aggregator-filter-widget-category",
                    field: "_doc_category",
                    target: x.find("select.filter-category"),
                    values: l
                }))
            } else S.addWidget(new AjaxSolr.AggregatorFilterWidget({
                id: "aggregator-filter-widget-category",
                field: "_doc_category",
                target: x.find("select.filter-category")
            }))
    }

    function h() {
        if ("1" === E.keyword.enable)
            if (E.keyword.value.length > 0) {
                for (var l = [{
                        value: T,
                        text: "All"
                    }], e = E.keyword.value.split(","), t = 0; t < e.length; t++) l.push({
                    value: e[t],
                    text: e[t]
                });
                S.addWidget(new AjaxSolr.AggregatorQueryFilterWidget({
                    id: "aggregator-filter-widget-keyword",
                    field: "_doc_keyword",
                    target: x.find("select.filter-keyword"),
                    values: l
                }))
            } else S.addWidget(new AjaxSolr.AggregatorFilterWidget({
                id: "aggregator-filter-widget-keyword",
                field: "_doc_keyword",
                target: x.find("select.filter-keyword")
            }))
    }

    function p() {
        "1" === E.dateRange.enable && S.addWidget(new AjaxSolr.AggregatorQueryFilterWidget({
            id: "aggregator-filter-widget-date-range",
            field: "_teaser_date_1",
            target: x.find("select.filter-date-range"),
            values: I
        }))
    }

    function m() {
        var l = [],
            e = [];
        for (var t in S.widgets)
            if (S.widgets.hasOwnProperty(t)) {
                var n = S.widgets[t];
                n instanceof AjaxSolr.AggregatorFilterWidget ? (l.push(n.getFacetQuery()), e = e.concat(n.getAllFacetQuery())) : n instanceof AjaxSolr.AggregatorQueryFilterWidget && (e = e.concat(n.getFacetQuery()))
            }
        l.length > 0 && S.store.addByValue("facet.field", l), e.length > 0 && S.store.addByValue("facet.query", e);
        var a = i("filter-search-term");
        void 0 !== a && a.length > 0 ? S.store.addByValue("q", a) : S.store.addByValue("q", "*"), g(), v(), y(), b(), M(), S.store.addByValue("fq", "{!tag=_teaser_no}_teaser_no:[1 TO *]"), S.store.addByValue("fq", "_language:" + j)
    }

    function g() {
        var l = E.folder.value;
        if (void 0 !== l && l.length > 0) {
            if (l.indexOf(_) >= 0) {
                var e = l.indexOf(_) + _.length;
                l = l.substring(e, l.length)
            }
            S.store.addByValue("fq", "{!tag=_doc_folder_guid}_doc_folder_path:" + w(l) + "*")
        }
    }

    function v() {
        if ("0" === E.dateRange.enable && E.dateRange.value.length > 0) {
            var l = "",
                e = "";
            "All" === E.dateRange.value || E.dateRange.value === T ? e = q.getLabel("teaseraggregator.daterange.all") : "Last week" === E.dateRange.value ? e = q.getLabel("teaseraggregator.daterange.week") : "Last month" === E.dateRange.value ? e = q.getLabel("teaseraggregator.daterange.month") : "Last year" === E.dateRange.value && (e = q.getLabel("teaseraggregator.daterange.year"));
            for (var t = 0; t < I.length; t++)
                if (I[t].text === e) {
                    l = I[t].value;
                    break
                }
            T !== l && S.store.addByValue("fq", "{!tag=_teaser_date_1}_teaser_date_1:" + l)
        }
    }

    function y() {
        if ("0" === E.keyword.enable && E.keyword.value.length > 0) {
            for (var l = E.keyword.value.split(","), e = 0; e < l.length; e++) l[e] = w(l[e]);
            S.store.addByValue("fq", "{!tag=_doc_keyword}_doc_keyword:" + l.join(" OR "))
        }
    }

    function b() {
        if ("0" === E.topic.enable && E.topic.value.length > 0) {
            for (var l = E.topic.value.split(","), e = 0; e < l.length; e++) l[e] = w(l[e]);
            S.store.addByValue("fq", "{!tag=_doc_topic}_doc_topic:" + l.join(" OR "))
        }
    }

    function M() {
        if ("0" === E.category.enable && E.category.value.length > 0) {
            for (var l = E.category.value.split(","), e = 0; e < l.length; e++) l[e] = w(l[e]);
            S.store.addByValue("fq", "{!tag=_doc_category}_doc_category:" + l.join(" OR "))
        }
    }

    function w(l) {
        return l = l.replace(/[\+\-\&\|\!\(\)\{\}\[\]\^\"\~\*\?\:\\\/]/g, "\\$&"), l = AjaxSolr.Parameter.escapeValue(l)
    }
    var x, k, Z, C, S, j, _, E, T = "shfiehr8erz8hfiushjshiu",
        A = new AjaxSolr.Config,
        N = A.PagingTypes,
        L = $("html").attr("lang"),
        q = new AjaxSolr.LabelUtils;
    q.init(L);
    var I = [{
        value: T,
        text: q.getLabel("teaseraggregator.daterange.all")
    }, {
        value: "[NOW-7DAY TO NOW]",
        text: q.getLabel("teaseraggregator.daterange.week")
    }, {
        value: "[NOW-1MONTH TO NOW]",
        text: q.getLabel("teaseraggregator.daterange.month")
    }, {
        value: "[NOW-1YEAR TO NOW]",
        text: q.getLabel("teaseraggregator.daterange.year")
    }];
    e(l), a(), t(), n(), r(), s(), u(), S.init(), c(), m(), o()
}
}), define("module/teaser_content", ["jquery"], function(l) {
return function(e) {
    var t = e.find(">.inner");
    t.hasClass("linked") && !l("body").hasClass("edit-mode") && t.click(function() {
        document.location.href = t.data("link")
    })
}
}), define("module/teaser_edit", [], function() {
return function() {}
}), define("module/teaser_reference", [], function() {
return function() {}
}), define("module/title", [], function() {
return function() {}
}), define("module/togglebox", [], function() {
return function() {}
}), define("module/videocenter", [], function() {
return function() {}
}), define("module/worldwide_presence_data_box", [], function() {
return function() {}
}), define("block/angular_application", ["jquery", "block/iframe"], function(l, e) {
return function(l) {
    e(l)
}
}), define("block/breadcrumbs", [], function() {
return function() {}
}), define("block/button", [], function() {
return function() {}
}), define("block/download", [], function() {
return function() {}
}), define("block/extern_javascript", [], function() {
return function() {}
}), define("block/extern_javascript_maxymiser_dlp", [], function() {
return function() {}
}), define("block/extern_javascript_maxymiser_dlp_iframe", [], function() {
return function() {}
}), define("block/extern_javascript_maxymiser_standard", [], function() {
return function() {}
}), define("block/form_button_row", function() {
return function() {}
}), define("block/form_checkbox", function() {
return function() {}
}), define("block/form_date_picker", ["jquery", "cldr", "i18n", "iframe-detection", "bootstrap-vanilla", "bootstrap-jquery"], function(l, e, t, n) {
function i(l) {
    var e = l.toLowerCase();
    return e = e.replace(/(?:^|[\/\.])(y{1}|y{3})([\/\.]|$)/, function(l) {
        return l.replace(/y+/, "yy")
    })
}

function a(e, t, n) {
    if (!l.fn.datepicker.dates[t]) {
        var i = Object.keys(n.days.format.wide),
            a = n.days.format,
            r = [],
            o = [],
            s = [],
            c = Object.keys(n.months.format.wide),
            u = n.months.format,
            d = [],
            f = [];
        i.forEach(function(l) {
            r.push(a.wide[l]), o.push(a.abbreviated[l]), s.push(a.short[l])
        }), c.forEach(function(l) {
            d.push(u.wide[l]), f.push(u.abbreviated[l])
        }), l.fn.datepicker.dates[t] = {
            days: r,
            daysShort: o,
            daysMin: s,
            months: d,
            monthsShort: f,
            weekStart: i.indexOf(e.supplemental.weekData.firstDay())
        }
    }
}

function r() {
    var l = new e(t.getLocale()),
        n = t.getLang(),
        i = l.main("dates/calendars/gregorian");
    return {
        cldr: l,
        lang: n,
        gregorian: i
    }
}

function o(l, e) {
    var t = e.cldr,
        n = e.lang,
        r = e.gregorian;
    a(t, n, r), l.datepicker({
        format: i(r.dateFormats.short),
        language: n
    }), l.datepicker("setDate", new Date)
}
return function(e) {
    var i = e.find("[data-datepicker]");
    t.loading().done(function() {
        var l = r();
        o(i, l)
    });
    var a = e.find(".input-group");
    a.on("click", function() {
        var e = l(this).children(".form-control");
        e.focus()
    }), n() && i.add(e.find(".input-group-addon")).click(function() {
        setTimeout(function() {
            l(".datepicker-dropdown").attr("data-iframe-height", !0), l("html, body").scrollTop(0)
        }, 1)
    })
}
}), define("block/form_dropdown", ["jquery", "iframe-detection"], function(l, e) {
return function(t) {
    if (e()) {
        var n = t.find("div.dropdown-menu");
        n.attr("data-iframe-height", !0), t.find(".dropdown-toggle").click(function() {
            setTimeout(function() {
                l("html, body").scrollTop(0)
            }, 1)
        })
    }
}
}), define("block/form_hidden", function() {
return function() {}
}), define("block/form_input", function() {
return function() {}
}), define("block/form_radio_button", function() {
return function() {}
}), define("block/form_slider", function() {
return function() {}
}), define("block/form_slider_range", function() {
return function() {}
}), define("block/form_textarea", function() {
return function() {}
}), define("block/geolocation", ["jquery"], function() {
return function() {}
}), define("block/header_image", [], function() {
return function() {}
}), define("block/header_navigation", ["jquery"], function(l) {
return function(e) {
    function t() {
        var t = e.find("ul.level-2 > li"),
            n = 180;
        t.each(function(e, t) {
            n += l(t).outerWidth()
        }), n > e.innerWidth() ? e.find("> ul").addClass("multiline") : e.find("> ul").removeClass("multiline")
    }
    if (l("body").add(".container").add(".module").not("a").on("click", function() {
            l(".open").toggleClass("open")
        }), e.find("ul.level-2").hasClass("enable-mouseover")) {
        var n = e.children("ul.enable-mouseover").find("> li > a");
        n.each(function(t, n) {
            l(n).mouseover(l(n).hasClass("has-submenu") ? function() {
                var e;
                switch (l("ul.level-3").css("z-index")) {
                    case "401":
                        e = "MOBILE";
                        break;
                    default:
                        e = "DEFAULT"
                }
                "MOBILE" == e || l(this).parent("li").hasClass("open") || l(this).trigger("click")
            } : function() {
                setTimeout(function() {
                    e.find(".level-2 li").removeClass("open"), e.removeClass("expanded")
                }, 0)
            })
        }), e.find("ul.level-3").hover(null, function() {
            setTimeout(function() {
                e.find(".level-2 li").removeClass("open"), e.removeClass("expanded")
            }, 0)
        })
    }
    var i = e.children("ul").find("> li > a");
    i.on("click", function() {
        var t;
        switch (l("ul.level-3").css("z-index")) {
            case "401":
                t = "MOBILE";
                break;
            default:
                t = "DEFAULT"
        }
        if ("MOBILE" == t || l(this).hasClass("has-submenu")) {
            if (l(this).parent("li").hasClass("open")) {
                "#" != l(this).attr("href").substr(0, 1) && l(this).click();
                var n = l(this);
                setTimeout(function() {
                    n.parent("li").removeClass("open"), e.removeClass("expanded")
                }, 0)
            } else {
                var n = l(this);
                if (setTimeout(function() {
                        e.find(".level-2 li").removeClass("open"), n.parent("li").addClass("open"), 0 != n.parent("li").find("ul.level-3 > li").length && e.addClass("expanded")
                    }, 0), 0 == n.parent("li").find("ul.level-3 > li").length) return !0
            }
            return !1
        }
    }), i.on("focus", function() {
        this.blur()
    });
    var a = e.find(".level-1-back"),
        r = e.find(".level-1");
    a.on("click", function() {
        setTimeout(function() {
            e.find("li").removeClass("open"), e.removeClass("expanded")
        }, 0)
    }), r.on("click", function() {
        e.toggleClass("collapsed")
    }), l(window).on("resize", t), t()
}
}), define("block/header_search", ["jquery"], function(l) {
function e(e, t) {
    var n = t.data("suggestions_min_char"),
        i = t.data("number_of_suggestions"),
        a = t.find(".js_search-field"),
        r = l("meta[name=onewebCMSSearchCore]").attr("content"),
        o = t.data("typeahead_path") + r + "/",
        s = e.find(".js_suggestions-wrapper");
    a.autocomplete({
        serviceUrl: o,
        minChars: n,
        lookupLimit: i,
        appendTo: s,
        zIndex: 1,
        width: t.outerWidth() + 1,
        triggerSelectOnValidInput: !1,
        params: {
            count: i
        },
        onSelect: function(l) {
            "undefined" != typeof l.url && l.url.length > 0 ? window.location.href = l.url : t.submit()
        },
        formatResult: function(e, t) {
            var n = "(" + l.Autocomplete.utils.escapeRegExChars(t) + ")";
            return "undefined" == typeof e.url || e.url.length <= 0 ? e.value.replace(new RegExp(n, "gi"), "<strong>$1</strong>") : '<a class="autocomplete-quick-link" href="' + e.url + '">' + e.value + "</a>"
        }
    })
}

function t(l) {
    var t = l.parent(".module");
    if (!t.is(".module-metabar_15") || t.is(":visible")) {
        var n = l.find(".js_search-form");
        e(l, n)
    }
}
return t
}), define("block/icon", [], function() {
return function() {}
}), define("block/iframe", ["jquery"], function() {
return function(l) {
    function e() {
        try {
            var l = window.frames[n.attr("name")].document || window.frames[n.attr("name")].contentDocument;
            l || window.frames[n.attr("name")].contentWindow.document;
            var e = l.getElementById("resizerInjectedScript");
            if (!e) try {
                var t = l.createElement("script");
                t.type = "text/javascript", t.id = "resizerInjectedScript", t.src = u, l.getElementsByTagName("head")[0].appendChild(t)
            } catch (i) {
                return !0
            }
            return !1
        } catch (i) {
            return !1
        }
    }

    function t() {
        20 === d && (f = 500), r = setTimeout(function() {
            return h && (h = e()), 40 !== d && h ? (d++, void t()) : (clearTimeout(r), void(h = !1))
        }, f)
    }
    var n, i, a, r, o = location.host,
        s = location.protocol,
        c = document.body.getAttribute("data-master-base-path"),
        u = s + "//" + o + c + "/presentation/block/iframe/vendorlib/iframeResizer.contentWindow.js",
        d = 0,
        f = 100,
        h = !0,
        p = function() {
            h = !0, d = 0, f = 100
        };
    n = l.find("iframe"), i = n.closest(".module"), i.removeClass("module-row"), a = n.hasClass("fixHeight");
    var m = n.attr("data-calcmethod"),
        g = n[0].contentWindow,
        v = function(l) {
            if (g === l.source && "injectedIframeResizerScriptLoaded" === l.data.event) {
                var e = {};
                void 0 !== l.data.iFrameResizerConfig && (e = l.data.iFrameResizerConfig), void 0 !== m && (e.heightCalculationMethod = m), require(["block/iframe/vendorlib/iframeResizer"], function() {
                    n.iFrameResize(e)
                }, function(l) {
                    "object" == typeof window.console && console.error(l)
                })
            }
        };
    if (a) {
        var y = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        y && l.closest(".module-fixed").addClass("safari-iframe")
    } else n.on("load", function() {
        h || (p(), t())
    }), window.addEventListener("message", v, !1), t()
}
}), define("block/iframe_responsive", ["jquery"], function(l) {
return function(e) {
    var t;
    t = e.find("iframe");
    var n = t.attr("data-id"),
        i = t.attr("data-allowedorigin");
    t.on("load", function() {
        t[0].contentWindow.postMessage("action=initialize&value=" + n, i)
    }), this.onresize = function() {
        t[0].contentWindow.postMessage("action=requestHeight", i)
    }, this.handleMessage = function(e) {
        var t = new Object,
            n = e.originalEvent.data.split("&");
        if (e.originalEvent.origin === i) {
            for (d in n) {
                var a = n[d].split("=");
                t[a[0]] = a[1]
            }
            switch (t.action) {
                case "setHeight":
                    l(document).find("iframe[data-id='" + t.target + "']").css("height", t.value)
            }
        }
    }, l(window).on("resize", this.onresize), l(window).on("message", this.handleMessage)
}
}), define("block/image", ["jquery"], function(l) {
return function(e) {
    e.find(".block-image-caption").length > 0 && (e.css("marginBottom", 20), l(window).on("resize", function() {
        e.css("marginBottom", 20)
    }))
}
}), define("block/ir_ipad_category", [], function() {
return function() {}
}), define("block/ir_ipad_doc", [], function() {
return function() {}
}), define("block/label", [], function() {
return function() {}
}), define("block/link", [], function() {
return function() {}
}), define("block/linked_dropdown", ["jquery"], function() {
return function(l) {
    var e = l.find("select");
    e.on("change", function() {
        var l = e.val();
        "" !== l && (0 === parseInt(e.data("open")) ? document.location.href = l : window.open(l, "_blank"))
    })
}
}), define("block/linklist", ["jquery"], function(l) {
return function(e) {
    var t = e.find(".header_metabar-lili");
    t.hover(function() {
        l(this).find("ul").removeClass("hidden"), l(this).addClass("open"), e.addClass("open")
    }, function() {
        l(this).find("ul").addClass("hidden"), l(this).removeClass("open"), e.removeClass("open")
    })
}
}), define("block/logo", [], function() {
var l = !1;
return function() {
    l || (require(["block/logo/vendorlib/picturefill"], function() {}), l = !0)
}
}), define("block/logo_default", [], function() {
return function() {}
}), define("block/meta_open_graph", [], function() {
return function() {}
}), define("block/meta_twitter_cards", [], function() {
return function() {}
}), define("block/metabar_dropdown", [], function() {
return function() {}
}), define("block/metabar_lang_switch", [], function() {
return function() {}
}), define("block/metabar_link", [], function() {
return function() {}
}), define("block/metabar_login", [], function() {
return function() {}
}), define("block/newsletter_form", ["jquery"], function(l) {
return function(e) {
    var t;
    t = "de" == l("html").attr("lang") ? {
        error_mandatory: "Füllen Sie alle mit einem * markierten Felder aus!",
        error_email: "Bitte überprüfen Sie Ihre E-Mail-Adresse!",
        error_list: "Bitte wählen Sie mindestens eine Liste!"
    } : {
        error_mandatory: "Please fill in* marked fields!",
        error_email: "Please check your email address!",
        error_list: "Please select at least one item from the list!"
    };
    var n = {
        form_id: "subscribe_1_",
        ci_id: "subscribe_1_mwic",
        ci: !0,
        check_lists_or_setups: !1,
        mandatories: ["subscribe_1_optin_field_1"],
        emailfields: ["subscribe_1_optin_field_1"],
        subscriberlists: [],
        optinsetups: [],
        datepicks: [],
        msg: t,
        init: function() {
            for (i = 0; i < this.datepicks.length; i++) {
                var l = new DateTimePicker(this.datepicks[i].id + "_hidden", this.datepicks[i].id, this.datepicks[i]);
                l.init()
            }
            this.ci && setInterval(function() {
                var l = document.getElementById(n.ci_id);
                l && (l.value = 1 == isNaN(parseInt(l.value)) ? 0 : parseInt(l.value) + 17)
            }, 1e3), e.find("input[name=btn_submit]").click(function() {
                return n.checkForm()
            })
        },
        checkForm: function() {
            try {
                var l = document.getElementById(this.form_id);
                if (this.check_lists_or_setups) {
                    for (var e = !1, t = 0; t < this.subscriberlists.length; t++)
                        if (1 == document.getElementById(this.subscriberlists[t]).checked) {
                            e = !0;
                            break
                        }
                    for (var t = 0; t < this.optinsetups.length; t++)
                        if (1 == document.getElementById(this.optinsetups[t]).checked) {
                            e = !0;
                            break
                        }
                    if (!e) throw this.msg.error_list
                }
                for (var t = 0; t < this.mandatories.length; t++) {
                    var n = document.getElementById(this.mandatories[t]);
                    if (null != n)
                        if ("text" == n.type.toLowerCase()) {
                            if (n.value.match(/^\s*$/)) throw this.msg.error_mandatory
                        } else if ("radio" == n.type.toLowerCase() || "checkbox" == n.type.toLowerCase()) {
                        for (var i = document.getElementsByName(n.name), a = !1, r = 0; r < i.length; r++)
                            if (1 == i[r].checked) {
                                a = !0;
                                break
                            }
                        if (!a) throw this.msg.error_mandatory
                    } else if (n.type.toLowerCase().indexOf("select") >= 0) {
                        if (n.selectedIndex <= 0) throw this.msg.error_mandatory;
                        if (n.selectedIndex <= 0) throw this.msg.error_mandatory
                    }
                }
                for (var o = new RegExp("^[a-zA-Z0-9_\\.\\-]+@[a-zA-Z0-9_\\.\\-]+\\.[a-zA-Z0-9]{2,4}$"), t = 0; t < this.emailfields.length; t++)
                    if (!o.test(document.getElementById(this.emailfields[t]).value)) throw this.msg.error_email;
                l.submit()
            } catch (s) {
                return window.alert(s), !1
            }
        }
    };
    n.init()
}
}), define("block/notepad", [], function() {
return function() {}
}), define("block/notepad_icon", [], function() {
return function() {}
}), define("block/notepad_wbackground", [], function() {
return function() {}
}), define("block/page_title", [], function() {
return function() {}
}), define("block/portlet", ["jquery", "block/iframe"], function(l, e) {
return function(l) {
    e(l)
}
}), define("block/reverse_portlet_proxy", ["jquery", "block/iframe"], function(l, e) {
return function(l) {
    e(l)
}
}), define("block/reverse_proxy", ["jquery", "block/iframe"], function(l, e) {
return function(t) {
    e(t);
    var n = function(l, e) {
            var t = /^((\.\.?)|(f|ht)tps?:)|(javascript:)|(#)/i,
                n = /^(f|ht)tps?:/i,
                a = function(l, e) {
                    var t = e.attr("href");
                    n.test(t) && e.attr("target", "_blank");
                    var i = r(l, t);
                    e.attr("href", i)
                },
                r = function(l, e) {
                    var n = l.attr("data-repro-base-uri");
                    if (void 0 === e || t.test(e) || e.match("^" + n)) return console.log("no need for rewriting '" + e + "'"), e;
                    var i = l.contents()[0].location.href;
                    i = i.substring(0, i.lastIndexOf("/") + 1);
                    var a = "";
                    return a = e.match("^/") ? n + e : i + e, console.log("rewriting '" + e + "' -> '" + a), a
                },
                o = function(l, t, n, i) {
                    var a = e(l),
                        o = r(a, i.url);
                    i.url = o
                };
            return {
                prepare: function() {
                    0 === e("body.edit-mode").length && e(".module-repro").each(function(l, t) {
                        e(t).block({
                            message: null
                        })
                    }), e(".repro").load(function() {
                        var t = e(this);
                        t.parents(".module-repro").unblock();
                        var n = t.contents()[0].location.pathname,
                            r = t.attr("src"),
                            o = i.get(t.attr("id"));
                        r === n && "" !== o && o !== n ? (console.log('Navigating to storedloc "' + o + '"'), t.contents()[0].location.href = o) : t.contents().find("a").click("click", function() {
                            var l = e(this);
                            a(t, l);
                            var n = l.attr("target") || "_self";
                            if ("_self" === n) {
                                var i = l.attr("href");
                                l.attr("href", i), !i || i.match("^javascript") || i.match("^#") || t.parents(".module-repro").block({
                                    message: null
                                })
                            }
                        }), e(l).on("beforeunload", function() {
                            console.log("Storing current location in sessionStorage..."), i.set(t.attr("id"), n)
                        })
                    })
                },
                ajaxHandler: function(l) {
                    "undefined" != typeof l.$ ? (l.$(l.document).ajaxSend(function(e, t, n) {
                        o(document.getElementById(l.name), e, t, n)
                    }), console.log("jQuery detected. Ajax rewriting enabled.")) : console.log("Ajax rewriting only supported for jQuery")
                }
            }
        }(window, jQuery),
        i = function(l) {
            var e = "undefined" != typeof l.sessionStorage ? !0 : !1,
                t = l.sessionStorage;
            return {
                set: function(l, n) {
                    e && t.setItem(l, n)
                },
                get: function(l) {
                    var n = "";
                    return e && (n = t.getItem(l), null === n && (n = "")), n
                }
            }
        }(window);
    l(document).ready(n.prepare), "undefined" != typeof module && null !== module.exports && (module.exports.ReproStore = i)
}
}), define("block/richtext", ["jquery"], function(l) {
function e(e) {
    e = l(e);
    var t = e.find(".sort").data("dir", !0),
        n = {
            american: /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-](\d{2}|\d{4})$/,
            european: /^(0?[1-9]|[12][0-9]|3[01]).[ ]?(0?[1-9]|1[012]).[ ]?(\d{2}|\d{4})$/
        },
        i = function(e) {
            var t = l(e);
            return t.find("tr").removeClass("odd").filter(":odd").addClass("odd"), t
        };
    t.wrapInner('<div class="wrapper" />'), t.on("click", function(e) {
        var t = l(e.target).closest("th, td"),
            n = t.closest("table").find(".active"),
            i = !t.data("dir");
        t.data("dir", i), n && n !== t && n.removeClass("active"), t.addClass("active").toggleClass("down", !i), a(t.closest("table").find("tbody"), t.index(), i)
    });
    var a = function(e, t, a) {
        function r(l) {
            var e = l;
            if (!isNaN(parseFloat(l))) {
                var t = 1;
                l.toUpperCase().indexOf("MRD") > -1 ? t = 1e9 : l.toUpperCase().indexOf("MIO") > -1 && (t = 1e6), e = parseFloat(l.replace(/[^0-9\,]+/g, "").replace(",", ".")) * t
            }
            return e
        }
        var o = e.find("tr"),
            s = e.parent().hasClass("dateformatAmerican"),
            c = e.parent().hasClass("dateformatEuropean");
        o.sort(function(e, i) {
            var o = l.trim(e.cells[t].innerText ? e.cells[t].innerText : e.cells[t].textContent).toLowerCase(),
                u = l.trim(i.cells[t].innerText ? i.cells[t].innerText : i.cells[t].textContent).toLowerCase(),
                d = !1;
            s ? (n.american.test(o) && (d = !0, o = n.american.exec(o), o = o[3] + o[1] + o[2]), n.american.test(u) && (d = !0, u = n.american.exec(u), u = u[3] + u[1] + u[2])) : c && (n.european.test(o) && (d = !0, o = n.european.exec(o), o = o[3] + o[2] + o[1]), n.european.test(u) && (d = !0, u = n.european.exec(u), u = u[3] + u[2] + u[1])), d || (o = r(o), u = r(u));
            var e = o,
                i = u;
            return isNaN(o) && (e = o.replace(/[\/]+/g, "")), isNaN(u) && (i = u.replace(/[\/]+/g, "")), e == i ? 0 : i > e ? a ? -1 : 1 : a ? 1 : -1
        }), o.each(function(l, t) {
            e[0].appendChild(t)
        }), i(e[0])
    }
}
return function(l) {
    l.find("table").each(function() {
        e(this)
    })
}
}), define("block/selector_stage", [], function() {
return function() {}
}), define("block/seo_robots_metatag", [], function() {
return function() {}
}), define("block/seo_sitelinks_searchbox", [], function() {
return function() {}
}), define("block/servicebox_tab", [], function() {
return function() {}
}), define("block/social_sharing_button", ["jquery"], function(l) {
return function(e) {
    var t = l(e),
        n = t.find(".js_service"),
        i = function(e) {
            var t = {},
                n = "",
                i = document.title,
                a = document.location.href;
            switch (e) {
                case "twitter":
                    n = "https://twitter.com/intent/tweet", t.text = i, t.url = a;
                    break;
                case "facebook":
                    n = "https://www.facebook.com/sharer/sharer.php", t.u = a;
                    break;
                case "gplus":
                    n = "https://plus.google.com/share", t.url = a;
                    break;
                case "linkedin":
                    n = "https://www.linkedin.com/shareArticle", t.title = i, t.url = a;
                    break;
                case "xing":
                    n = "https://www.xing.com/spi/shares/new", t.url = a;
                    break;
                default:
                    return n = "mailto:", n + "?subject=" + i + "&body=" + a
            }
            return n + "?" + l.param(t)
        };
    n.on("click", function(l) {
        var e = n.data("serviceName"),
            t = i(e),
            a = "popup" === n.attr("rel") && !t.match(/^mailto/);
        if (n.attr("href", t), a) {
            l.preventDefault();
            var r = n.data("serviceLabel"),
                o = "600",
                s = "460",
                c = "width=" + o + ",height=" + s;
            window.open(t, r, c)
        }
    })
}
}), define("block/social_toolbox", ["jquery"], function() {
return function(l) {
    var e = l.find(".footermail").attr("href");
    e && l.find(".footermail").attr({
        href: e.replace(/{url}/, document.location)
    })
}
}), define("block/teaser_aggregator", [], function() {
return function() {}
}), define("block/teaser_aggregator_filter_category", [], function() {
return function() {}
}), define("block/teaser_aggregator_filter_date_range", [], function() {
return function() {}
}), define("block/teaser_aggregator_filter_folder", [], function() {
return function() {}
}), define("block/teaser_aggregator_filter_keyword", [], function() {
return function() {}
}), define("block/teaser_aggregator_filter_search_term", [], function() {
return function() {}
}), define("block/teaser_aggregator_filter_topic", [], function() {
return function() {}
}), define("block/teaser_edit", ["utils/DateUtils"], function() {
return function(l) {
    var e = $("html").attr("lang"),
        t = new AjaxSolr.DateUtils,
        n = l.find("strong.publish-date"),
        i = n.attr("publish-date");
    void 0 !== i && i.length > 0 && (i.indexOf("Z", i.length - 1) < 0 && (i += "Z"), n.text(t.formatDateByLocale(i, e)))
}
}), define("block/title", [], function() {
return function() {}
}), define("block/togglebox_tab", [], function() {
return function() {}
}), define("block/video", ["jquery"], function() {
return function(l) {
    var e = l.find(".iframe_wrapper"),
        t = e.find("iframe"),
        n = t.data("videosrc"),
        i = e.find(".previewImage");
    i.on("click", function() {
        t.attr("src", n), t.show(), i.hide()
    })
}
}), define("block/videocenter_single_video", [], function() {
return function() {}
}), define("block/worldwide_presence_data_box_tab", [], function() {
return function() {}
});