﻿(function (config) {
    var aa = navigator.userAgent.toLowerCase(), e = window, ga = document, na = ga.documentElement; function G(a) { return -1 !== aa.indexOf(a) }
    var oa = "ActiveXObject" in e, pa = "devicePixelRatio" in e && 1 < e.devicePixelRatio || oa && "matchMedia" in e && e.matchMedia("(min-resolution:144dpi)") && e.matchMedia("(min-resolution:144dpi)").matches, qa = G("windows nt"), va = -1 !== aa.search(/windows nt [1-5]\./), wa = -1 !== aa.search(/windows nt 5\.[12]/), Aa = va && !wa, Ba = G("windows phone"), Pa = G("macintosh"), Qa = G("Mb2345Browser"), Za = G("ipad;") || G("ipad "), $a = Za && pa, ab = G("ipod touch;"), ib = G("iphone;") || G("iphone "), jb = ib || Za || ab, kb = jb && -1 !== aa.search(/ os [456]_/); jb && aa.search(/ os [4-8]_/);
    var lb = jb && -1 !== aa.search(/ os [78]_/); jb && G("os 8_"); var yb = jb && G("os 10_"), Pb = G("android"), Qb = -1 !== aa.search(/android [123]/), Rb = G("android 4"); Pb && -1 === aa.search(/android [1-4]/) || aa.search(/android 4.4/);
    var Sb = Pb ? "android" : jb ? "ios" : qa ? "windows" : Pa ? "mac" : "other", Tb = oa && !e.XMLHttpRequest, Ub = oa && !ga.querySelector, Vb = oa && !ga.addEventListener, Wb = oa && G("ie 9"), Xb = oa && G("msie 10"), Yb = oa && G("rv:11"), $b = G("alipay") || Pb && Zb, ac = G("edge"), nc = G("qtweb"), Zb = G("ucbrowser"), oc = G("miuibrowser"), pc = G("micromessenger"), qc = G("mqqbrowser"), rc = G("baidubrowser"), chrome = (G("chrome") || G("crios")) && !pc && !rc && !qc && !ac && !oc, sc = chrome && G("chromium"), tc = G("firefox"), uc = qa && chrome && G("/55.0.2883") && !G("; x64"), vc = (Pa || jb) && G("safari") &&
    G("version/"), wc = jb && G("aliapp"), xc = jb && (!qc && !Zb && !pc && !chrome && !tc && !vc || wc), yc = Pb || jb || Ba || G("mobile") || "undefined" !== typeof orientation, zc = e.navigator && e.navigator.msPointerEnabled && !!e.navigator.msMaxTouchPoints, Ac = e.navigator && e.navigator.pointerEnabled && !!e.navigator.maxTouchPoints, Bc = Ac || zc, Cc = "ontouchstart" in ga || Bc, Nc = function () {
        if (!yc) return e.devicePixelRatio || 1; for (var a = document.getElementsByTagName("meta"), b = a.length - 1; 0 <= b; b--) if ("viewport" === a[b].name) {
            var b = a[b].content, c; -1 !== b.indexOf("initial-scale") &&
            (c = parseFloat(b.split("initial-scale=")[1])); a = -1 !== b.indexOf("minimum-scale") ? parseFloat(b.split("minimum-scale=")[1]) : 0; b = -1 !== b.indexOf("maximum-scale") ? parseFloat(b.split("maximum-scale=")[1]) : Infinity; if (c) { if (b >= a) return c > b ? b : c < a ? a : c } else if (b >= a) return 1 <= a ? 1 : Math.min(b, 1); console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5"); return null
        }
    }(), Oc = oa && "transition" in na.style, Pc = !!ga.createElementNS && !!ga.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, Qc = ga.createElement("canvas"),
    Rc = !(!Qc || !Qc.getContext), Sc = window.URL || window.webkitURL, Tc = !oa && !(Zb && Pb) && window.Worker && Sc && Sc.createObjectURL && window.Blob, Uc = !yc && chrome && !uc && !sc && Tc && Rc && !xc && !(!Qc.getContext("webgl") && !Qc.getContext("experimental-webgl")), Vc = !Rc || nc || Ba || yc && tc || Wb || kb || $a || ab || Qb || G("gt-n710") || Aa, Wc = !Vc && !Uc && (Rb || lb || jb && pc || !yc), Xc = Uc ? "vw" : Vc ? "d" : Wc ? "dv" : "v", Yc = G("webkit"), Zc = "WebKitCSSMatrix" in e && "m11" in new window.WebKitCSSMatrix, $c = "MozPerspective" in na.style, ad = "OTransition" in na.style, bd = Oc || Zc ||
    $c || ad, cd = void 0 !== config[8] ? config[8] : !0, dd = void 0 !== config[9] ? config[9] : !0, ed = !Pc && yc && Rc, fd = !1; try { fd = "undefined" !== typeof e.localStorage } catch (gd) { }
    config.j = { size: ib ? 100 : Pb ? 200 : 400, nt: Pa, s5: qa, QI: jb, KX: yb, gf: Pb, m2: Qb, WH: $b, $p: Sb, Px: rc, o4: qc, UK: vc, S0: pc, Ym: oa, eg: Tb, Kp: Ub, B3: Wb, wX: Xb, pd: Vb, yX: oa && !Yb, lY: Qa, mt: fd, geolocation: yc || oa && !Vb || ac, eB: Zb, chrome: chrome, ry: pa && chrome, SH: tc, X: yc, a4: yc && Yc, oY: yc && Zc, Z3: yc && e.opera, Mc: pa, jB: Nc, pa: pa && (!yc || !!Nc && 1 <= Nc), fd: Cc, b4: zc, pZ: Ac, qK: Bc, Q0: Yc, A3: Oc, R0: Zc, U2: $c, e4: ad, jU: bd, Ei: Pc, Np: Rc, eJ: Tc, $m: Uc, f1: !1, Ig: cd && !Vc, wU: cd ? Xc : "d", an: dd && !!e.WebSocket && !rc, PY: ed, UY: Rc || ed ? "c" : "d" }; var e = window, L = "http map anip layers overlay0 brender mrender".split(" "); config.Wc = "main"; config.j.fd && (L += ",touch", config.Wc += "t"); config.j.X || (L += ",mouse", config.Wc += "m"); config.Wc += "c"; config.j.Ig && (config.Wc += "v", L += ",vectorlayer,overlay", config.j.ry && (config.Wc += "dir", L += ",labelDir"), config.j.$m ? (config.Wc += "w", L += ",wgl") : (config.Wc += "cg", L += ",cgl")); config[7] && (L += "," + config[7], config.Wc += config[7].replace(",", "").replace(eval("/AMap./gi"), "")); L += ",sync"; config.IL = L.split(","); window.AMap = window.AMap || {}; window.AMap.Xh = "1.3.22.8"; var hd = window.AMap.iB = {}, id = config[2].split(",")[0], jd = id + "/theme/v" + config[4] + "/style1.3.22.8.css", kd = document.head || document.getElementsByTagName("head")[0]; if (kd) { var ld = document.createElement("link"); ld.setAttribute("rel", "stylesheet"); ld.setAttribute("type", "text/css"); ld.setAttribute("href", jd); kd.insertBefore(ld, kd.firstChild) } else document.write("<link rel='stylesheet' href='" + jd + "'/>");
    function md(a) { var b = document, c = b.createElement("script"); c.charset = "utf-8"; c.src = a; (a = b.body || kd) && a.appendChild(c) }
    function nd() { for (var a = id + "/maps/main?v=" + config[4] + "&key=" + config[0] + "&m=" + config.IL.join(",") + "&vrs=1.3.22.8", b = document.getElementsByTagName("script"), c, d = 0; d < b.length; d += 1) if (0 === b[d].src.indexOf(id.split(":")[1] + "/maps?")) { c = b[d]; break } config[5] || c && c.async ? md(a) : (document.write('<script id="amap_main_js" src=\'' + a + "' type='text/javascript'>\x3c/script>"), setTimeout(function () { document.getElementById("amap_main_js") || md(a) }, 1)) } var od = (new Date).getTime();
    hd.__load__ = function (a) { a(config, od); hd.__load__ = null }; try { if (window.localStorage) { var pd = window.localStorage["_AMap_" + config.Wc], wd = !1; pd ? (pd = JSON.parse(pd), pd.version === window.AMap.Xh ? (eval(pd.script), hd.loaded = !0) : wd = !0) : wd = !0; if (wd) for (var xd in window.localStorage) window.localStorage.hasOwnProperty(xd) && 0 === xd.indexOf("_AMap_") && window.localStorage.removeItem(xd) } } catch (yd) { } hd.loaded || (nd(), config.IL = void 0);
})(["f07e75646876646ed34a84f363d51891", [115.423411, 39.442758, 117.514625, 41.060816, 116.405285, 39.904989], "http://webapi.amap.com", 1, "1.3", null, "110000", "AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder", true, true])