import { r as d, R as or, a as Ts, b as rr } from './index.E74hX-B_.js';
var En = { exports: {} },
  wt = {};
var go;
function Cs() {
  if (go) return wt;
  go = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.fragment');
  function n(o, r, s) {
    var i = null;
    if ((s !== void 0 && (i = '' + s), r.key !== void 0 && (i = '' + r.key), 'key' in r)) {
      s = {};
      for (var c in r) c !== 'key' && (s[c] = r[c]);
    } else s = r;
    return ((r = s.ref), { $$typeof: e, type: o, key: i, ref: r !== void 0 ? r : null, props: s });
  }
  return ((wt.Fragment = t), (wt.jsx = n), (wt.jsxs = n), wt);
}
var mo;
function Os() {
  return (mo || ((mo = 1), (En.exports = Cs())), En.exports);
}
var X = Os();
const ho = {};
function Ne(e, t) {
  const n = d.useRef(ho);
  return (n.current === ho && (n.current = e(t)), n);
}
const xn = or[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)],
  Ps = xn && xn !== d.useLayoutEffect ? xn : (e) => e();
function z(e) {
  const t = Ne(Is).current;
  return ((t.next = e), Ps(t.effect), t.trampoline);
}
function Is() {
  const e = {
    next: void 0,
    callback: ks,
    trampoline: (...t) => e.callback?.(...t),
    effect: () => {
      e.callback = e.next;
    },
  };
  return e;
}
function ks() {}
const As = () => {},
  K = typeof document < 'u' ? d.useLayoutEffect : As,
  Ms = d.createContext(void 0);
function Fs() {
  return d.useContext(Ms)?.direction ?? 'ltr';
}
function Ls(e, t) {
  return function (o, ...r) {
    const s = new URL(e);
    return (
      s.searchParams.set('code', o.toString()),
      r.forEach((i) => s.searchParams.append('args[]', i)),
      `${t} error #${o}; visit ${s} for the full message.`
    );
  };
}
const it = Ls('https://base-ui.com/production-error', 'Base UI');
function Zt(e, t, n, o) {
  const r = Ne(sr).current;
  return (Ns(r, e, t, n, o) && ir(r, [e, t, n, o]), r.callback);
}
function Ds(e) {
  const t = Ne(sr).current;
  return (Bs(t, e) && ir(t, e), t.callback);
}
function sr() {
  return { callback: null, cleanup: null, refs: [] };
}
function Ns(e, t, n, o, r) {
  return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== o || e.refs[3] !== r;
}
function Bs(e, t) {
  return e.refs.length !== t.length || e.refs.some((n, o) => n !== t[o]);
}
function ir(e, t) {
  if (((e.refs = t), t.every((n) => n == null))) {
    e.callback = null;
    return;
  }
  e.callback = (n) => {
    if ((e.cleanup && (e.cleanup(), (e.cleanup = null)), n != null)) {
      const o = Array(t.length).fill(null);
      for (let r = 0; r < t.length; r += 1) {
        const s = t[r];
        if (s != null)
          switch (typeof s) {
            case 'function': {
              const i = s(n);
              typeof i == 'function' && (o[r] = i);
              break;
            }
            case 'object': {
              s.current = n;
              break;
            }
          }
      }
      e.cleanup = () => {
        for (let r = 0; r < t.length; r += 1) {
          const s = t[r];
          if (s != null)
            switch (typeof s) {
              case 'function': {
                const i = o[r];
                typeof i == 'function' ? i() : s(null);
                break;
              }
              case 'object': {
                s.current = null;
                break;
              }
            }
        }
      };
    }
  };
}
const Vs = parseInt(d.version, 10);
function Gn(e) {
  return Vs >= e;
}
function bo(e) {
  if (!d.isValidElement(e)) return null;
  const t = e,
    n = t.props;
  return (Gn(19) ? n?.ref : t.ref) ?? null;
}
function Nn(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e || t) return { ...e, ...t };
}
function $s(e, t) {
  const n = {};
  for (const o in e) {
    const r = e[o];
    if (t?.hasOwnProperty(o)) {
      const s = t[o](r);
      s != null && Object.assign(n, s);
      continue;
    }
    r === !0
      ? (n[`data-${o.toLowerCase()}`] = '')
      : r && (n[`data-${o.toLowerCase()}`] = r.toString());
  }
  return n;
}
function Ws(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Hs(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
const Ct = {};
function cr(e, t, n, o, r) {
  let s = { ...Bn(e, Ct) };
  return (t && (s = zt(s, t)), n && (s = zt(s, n)), o && (s = zt(s, o)), s);
}
function js(e) {
  if (e.length === 0) return Ct;
  if (e.length === 1) return Bn(e[0], Ct);
  let t = { ...Bn(e[0], Ct) };
  for (let n = 1; n < e.length; n += 1) t = zt(t, e[n]);
  return t;
}
function zt(e, t) {
  return lr(t) ? t(e) : _s(e, t);
}
function _s(e, t) {
  if (!t) return e;
  for (const n in t) {
    const o = t[n];
    switch (n) {
      case 'style': {
        e[n] = Nn(e.style, o);
        break;
      }
      case 'className': {
        e[n] = ar(e.className, o);
        break;
      }
      default:
        Ys(n, o) ? (e[n] = Us(e[n], o)) : (e[n] = o);
    }
  }
  return e;
}
function Ys(e, t) {
  const n = e.charCodeAt(0),
    o = e.charCodeAt(1),
    r = e.charCodeAt(2);
  return n === 111 && o === 110 && r >= 65 && r <= 90 && (typeof t == 'function' || typeof t > 'u');
}
function lr(e) {
  return typeof e == 'function';
}
function Bn(e, t) {
  return lr(e) ? e(t) : (e ?? Ct);
}
function Us(e, t) {
  return t
    ? e
      ? (n) => {
          if (qs(n)) {
            const r = n;
            Vn(r);
            const s = t(r);
            return (r.baseUIHandlerPrevented || e?.(r), s);
          }
          const o = t(n);
          return (e?.(n), o);
        }
      : t
    : e;
}
function Vn(e) {
  return (
    (e.preventBaseUIHandler = () => {
      e.baseUIHandlerPrevented = !0;
    }),
    e
  );
}
function ar(e, t) {
  return t ? (e ? t + ' ' + e : t) : e;
}
function qs(e) {
  return e != null && typeof e == 'object' && 'nativeEvent' in e;
}
function ur() {}
const we = Object.freeze({}),
  Xs = 500,
  zs = { style: { transition: 'none' } },
  fr = 'data-base-ui-click-trigger',
  Gs = { fallbackAxisSide: 'end' },
  Ks = { clipPath: 'inset(50%)', position: 'fixed', top: 0, left: 0 };
function Mt(e, t, n = {}) {
  const o = t.render,
    r = Js(t, n);
  if (n.enabled === !1) return null;
  const s = n.state ?? we;
  return Qs(e, o, r, s);
}
function Js(e, t = {}) {
  const { className: n, style: o, render: r } = e,
    { state: s = we, ref: i, props: c, stateAttributesMapping: u, enabled: l = !0 } = t,
    a = l ? Ws(n, s) : void 0,
    f = l ? Hs(o, s) : void 0,
    h = l ? $s(s, u) : we,
    m = l ? (Nn(h, Array.isArray(c) ? js(c) : c) ?? we) : we;
  return (
    typeof document < 'u' &&
      (l
        ? Array.isArray(i)
          ? (m.ref = Ds([m.ref, bo(r), ...i]))
          : (m.ref = Zt(m.ref, bo(r), i))
        : Zt(null, null)),
    l
      ? (a !== void 0 && (m.className = ar(m.className, a)),
        f !== void 0 && (m.style = Nn(m.style, f)),
        m)
      : we
  );
}
const Zs = Symbol.for('react.lazy');
function Qs(e, t, n, o) {
  if (t) {
    if (typeof t == 'function') return t(n, o);
    const r = cr(n, t.props);
    r.ref = n.ref;
    let s = t;
    return (s?.$$typeof === Zs && (s = d.Children.toArray(t)[0]), d.cloneElement(s, r));
  }
  if (e && typeof e == 'string') return ei(e, n);
  throw new Error(it(8));
}
function ei(e, t) {
  return e === 'button'
    ? d.createElement('button', { type: 'button', ...t, key: t.key })
    : e === 'img'
      ? d.createElement('img', { alt: '', ...t, key: t.key })
      : d.createElement(e, t);
}
const ft = 'trigger-press',
  Te = 'trigger-hover',
  dr = 'outside-press',
  Ot = 'focus-out',
  pr = 'escape-key',
  ti = 'imperative-action';
function me(e, t, n, o) {
  let r = !1,
    s = !1;
  const i = we;
  return {
    reason: e,
    event: t ?? new Event('base-ui'),
    cancel() {
      r = !0;
    },
    allowPropagation() {
      s = !0;
    },
    get isCanceled() {
      return r;
    },
    get isPropagationAllowed() {
      return s;
    },
    trigger: n,
    ...i,
  };
}
const ni = { ...or };
let vo = 0;
function oi(e, t = 'mui') {
  const [n, o] = d.useState(e),
    r = e || n;
  return (
    d.useEffect(() => {
      n == null && ((vo += 1), o(`${t}-${vo}`));
    }, [n, t]),
    r
  );
}
const yo = ni.useId;
function ht(e, t) {
  if (yo !== void 0) {
    const n = yo();
    return e ?? (t ? `${t}-${n}` : n);
  }
  return oi(e, t);
}
function gr(e) {
  return ht(e, 'base-ui');
}
var Ge = Ts();
const ri = [];
function un(e) {
  d.useEffect(e, ri);
}
const $t = null;
class si {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = !1;
  tick = (t) => {
    this.isScheduled = !1;
    const n = this.callbacks,
      o = this.callbacksCount;
    if (((this.callbacks = []), (this.callbacksCount = 0), (this.startId = this.nextId), o > 0))
      for (let r = 0; r < n.length; r += 1) n[r]?.(t);
  };
  request(t) {
    const n = this.nextId;
    return (
      (this.nextId += 1),
      this.callbacks.push(t),
      (this.callbacksCount += 1),
      !this.isScheduled && (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
      n
    );
  }
  cancel(t) {
    const n = t - this.startId;
    n < 0 || n >= this.callbacks.length || ((this.callbacks[n] = null), (this.callbacksCount -= 1));
  }
}
const Wt = new si();
class Ve {
  static create() {
    return new Ve();
  }
  static request(t) {
    return Wt.request(t);
  }
  static cancel(t) {
    return Wt.cancel(t);
  }
  currentId = $t;
  request(t) {
    (this.cancel(),
      (this.currentId = Wt.request(() => {
        ((this.currentId = $t), t());
      })));
  }
  cancel = () => {
    this.currentId !== $t && (Wt.cancel(this.currentId), (this.currentId = $t));
  };
  disposeEffect = () => this.cancel;
}
function Kn() {
  const e = Ne(Ve.create).current;
  return (un(e.disposeEffect), e);
}
function _e(e) {
  return e == null ? e : 'current' in e ? e.current : e;
}
let Pt = (function (e) {
  return ((e.startingStyle = 'data-starting-style'), (e.endingStyle = 'data-ending-style'), e);
})({});
const ii = { [Pt.startingStyle]: '' },
  ci = { [Pt.endingStyle]: '' },
  li = {
    transitionStatus(e) {
      return e === 'starting' ? ii : e === 'ending' ? ci : null;
    },
  };
function mr(e, t = !1, n = !0) {
  const o = Kn();
  return z((r, s = null) => {
    o.cancel();
    function i() {
      Ge.flushSync(r);
    }
    const c = _e(e);
    if (c == null) return;
    const u = c;
    if (typeof u.getAnimations != 'function' || globalThis.BASE_UI_ANIMATIONS_DISABLED) r();
    else {
      let l = function () {
          const f = Pt.startingStyle;
          if (!u.hasAttribute(f)) {
            o.request(a);
            return;
          }
          const h = new MutationObserver(() => {
            u.hasAttribute(f) || (h.disconnect(), a());
          });
          (h.observe(u, { attributes: !0, attributeFilter: [f] }),
            s?.addEventListener('abort', () => h.disconnect(), { once: !0 }));
        },
        a = function () {
          Promise.all(u.getAnimations().map((f) => f.finished))
            .then(() => {
              s?.aborted || i();
            })
            .catch(() => {
              const f = u.getAnimations();
              if (n) {
                if (s?.aborted) return;
                i();
              } else f.length > 0 && f.some((h) => h.pending || h.playState !== 'finished') && a();
            });
        };
      if (t) {
        l();
        return;
      }
      o.request(a);
    }
  });
}
function ai(e, t = !1, n = !1) {
  const [o, r] = d.useState(e && t ? 'idle' : void 0),
    [s, i] = d.useState(e);
  return (
    e && !s && (i(!0), r('starting')),
    !e && s && o !== 'ending' && !n && r('ending'),
    !e && !s && o === 'ending' && r(void 0),
    K(() => {
      if (!e && s && o !== 'ending' && n) {
        const c = Ve.request(() => {
          r('ending');
        });
        return () => {
          Ve.cancel(c);
        };
      }
    }, [e, s, o, n]),
    K(() => {
      if (!e || t) return;
      const c = Ve.request(() => {
        r(void 0);
      });
      return () => {
        Ve.cancel(c);
      };
    }, [t, e]),
    K(() => {
      if (!e || !t) return;
      e && s && o !== 'idle' && r('starting');
      const c = Ve.request(() => {
        r('idle');
      });
      return () => {
        Ve.cancel(c);
      };
    }, [t, e, s, r, o]),
    d.useMemo(() => ({ mounted: s, setMounted: i, transitionStatus: o }), [s, o])
  );
}
function fn() {
  return typeof window < 'u';
}
function Ke(e) {
  return Jn(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function He(e) {
  var t;
  return (t = (Jn(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Jn(e) {
  return fn() ? e instanceof Node || e instanceof Ee(e).Node : !1;
}
function re(e) {
  return fn() ? e instanceof Element || e instanceof Ee(e).Element : !1;
}
function ve(e) {
  return fn() ? e instanceof HTMLElement || e instanceof Ee(e).HTMLElement : !1;
}
function It(e) {
  return !fn() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof Ee(e).ShadowRoot;
}
function Je(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = Oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== 'inline' && r !== 'contents';
}
function ui(e) {
  return /^(table|td|th)$/.test(Ke(e));
}
function dn(e) {
  try {
    if (e.matches(':popover-open')) return !0;
  } catch {}
  try {
    return e.matches(':modal');
  } catch {
    return !1;
  }
}
const fi = /transform|translate|scale|rotate|perspective|filter/,
  di = /paint|layout|strict|content/,
  ot = (e) => !!e && e !== 'none';
let Rn;
function Zn(e) {
  const t = re(e) ? Oe(e) : e;
  return (
    ot(t.transform) ||
    ot(t.translate) ||
    ot(t.scale) ||
    ot(t.rotate) ||
    ot(t.perspective) ||
    (!pn() && (ot(t.backdropFilter) || ot(t.filter))) ||
    fi.test(t.willChange || '') ||
    di.test(t.contain || '')
  );
}
function pi(e) {
  let t = qe(e);
  for (; ve(t) && !Ye(t); ) {
    if (Zn(t)) return t;
    if (dn(t)) return null;
    t = qe(t);
  }
  return null;
}
function pn() {
  return (
    Rn == null &&
      (Rn = typeof CSS < 'u' && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none')),
    Rn
  );
}
function Ye(e) {
  return /^(html|body|#document)$/.test(Ke(e));
}
function Oe(e) {
  return Ee(e).getComputedStyle(e);
}
function gn(e) {
  return re(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function qe(e) {
  if (Ke(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (It(e) && e.host) || He(e);
  return It(t) ? t.host : t;
}
function hr(e) {
  const t = qe(e);
  return Ye(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : ve(t) && Je(t) ? t : hr(t);
}
function kt(e, t, n) {
  var o;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const r = hr(e),
    s = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    i = Ee(r);
  if (s) {
    const c = $n(i);
    return t.concat(i, i.visualViewport || [], Je(r) ? r : [], c && n ? kt(c) : []);
  } else return t.concat(r, kt(r, [], n));
}
function $n(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const gi = d.createContext(void 0);
function mi(e = !1) {
  const t = d.useContext(gi);
  if (t === void 0 && !e) throw new Error(it(16));
  return t;
}
function hi(e) {
  const {
      focusableWhenDisabled: t,
      disabled: n,
      composite: o = !1,
      tabIndex: r = 0,
      isNativeButton: s,
    } = e,
    i = o && t !== !1,
    c = o && t === !1;
  return {
    props: d.useMemo(() => {
      const l = {
        onKeyDown(a) {
          n && t && a.key !== 'Tab' && a.preventDefault();
        },
      };
      return (
        o || ((l.tabIndex = r), !s && n && (l.tabIndex = t ? r : -1)),
        ((s && (t || i)) || (!s && n)) && (l['aria-disabled'] = n),
        s && (!t || c) && (l.disabled = n),
        l
      );
    }, [o, n, t, i, c, s, r]),
  };
}
function bi(e = {}) {
  const {
      disabled: t = !1,
      focusableWhenDisabled: n,
      tabIndex: o = 0,
      native: r = !0,
      composite: s,
    } = e,
    i = d.useRef(null),
    c = mi(!0),
    u = s ?? c !== void 0,
    { props: l } = hi({
      focusableWhenDisabled: n,
      disabled: t,
      composite: u,
      tabIndex: o,
      isNativeButton: r,
    }),
    a = d.useCallback(() => {
      const m = i.current;
      wn(m) && u && t && l.disabled === void 0 && m.disabled && (m.disabled = !1);
    }, [t, l.disabled, u]);
  K(a, [a]);
  const f = d.useCallback(
      (m = {}) => {
        const { onClick: b, onMouseDown: g, onKeyUp: p, onKeyDown: E, onPointerDown: y, ...w } = m;
        return cr(
          {
            type: r ? 'button' : void 0,
            onClick(v) {
              if (t) {
                v.preventDefault();
                return;
              }
              b?.(v);
            },
            onMouseDown(v) {
              t || g?.(v);
            },
            onKeyDown(v) {
              if (t || (Vn(v), E?.(v), v.baseUIHandlerPrevented)) return;
              const S = v.target === v.currentTarget,
                x = v.currentTarget,
                P = wn(x),
                B = !r && vi(x),
                W = S && (r ? P : !B),
                A = v.key === 'Enter',
                M = v.key === ' ',
                I = x.getAttribute('role'),
                k = I?.startsWith('menuitem') || I === 'option' || I === 'gridcell';
              if (S && u && M) {
                if (v.defaultPrevented && k) return;
                (v.preventDefault(),
                  B || (r && P)
                    ? (x.click(), v.preventBaseUIHandler())
                    : W && (b?.(v), v.preventBaseUIHandler()));
                return;
              }
              W && (!r && (M || A) && v.preventDefault(), !r && A && b?.(v));
            },
            onKeyUp(v) {
              if (!t) {
                if (
                  (Vn(v),
                  p?.(v),
                  v.target === v.currentTarget && r && u && wn(v.currentTarget) && v.key === ' ')
                ) {
                  v.preventDefault();
                  return;
                }
                v.baseUIHandlerPrevented ||
                  (v.target === v.currentTarget && !r && !u && v.key === ' ' && b?.(v));
              }
            },
            onPointerDown(v) {
              if (t) {
                v.preventDefault();
                return;
              }
              y?.(v);
            },
          },
          r ? void 0 : { role: 'button' },
          l,
          w,
        );
      },
      [t, l, u, r],
    ),
    h = z((m) => {
      ((i.current = m), a());
    });
  return { getButtonProps: f, buttonRef: h };
}
function wn(e) {
  return ve(e) && e.tagName === 'BUTTON';
}
function vi(e) {
  return !!(e?.tagName === 'A' && e?.href);
}
const bt = typeof navigator < 'u',
  Sn = xi(),
  br = wi(),
  vr = Ri(),
  yr = typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter:none'),
  Er =
    Sn.platform === 'MacIntel' && Sn.maxTouchPoints > 1
      ? !0
      : /iP(hone|ad|od)|iOS/.test(Sn.platform),
  yi = bt && /apple/i.test(navigator.vendor),
  Wn = (bt && /android/i.test(br)) || /android/i.test(vr);
bt && br.toLowerCase().startsWith('mac') && navigator.maxTouchPoints;
const Ei = vr.includes('jsdom/');
function xi() {
  if (!bt) return { platform: '', maxTouchPoints: -1 };
  const e = navigator.userAgentData;
  return e?.platform
    ? { platform: e.platform, maxTouchPoints: navigator.maxTouchPoints }
    : { platform: navigator.platform ?? '', maxTouchPoints: navigator.maxTouchPoints ?? -1 };
}
function Ri() {
  if (!bt) return '';
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands.map(({ brand: t, version: n }) => `${t}/${n}`).join(' ')
    : navigator.userAgent;
}
function wi() {
  if (!bt) return '';
  const e = navigator.userAgentData;
  return e?.platform ? e.platform : (navigator.platform ?? '');
}
const Hn = 'data-base-ui-focusable',
  xr = 'active',
  Rr = 'selected',
  wr =
    "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function rt(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; ) t = t.shadowRoot.activeElement;
  return t;
}
function Z(e, t) {
  if (!e || !t) return !1;
  const n = t.getRootNode?.();
  if (e.contains(t)) return !0;
  if (n && It(n)) {
    let o = t;
    for (; o; ) {
      if (e === o) return !0;
      o = o.parentNode || o.host;
    }
  }
  return !1;
}
function Sr(e, t) {
  if (!re(e)) return !1;
  const n = e;
  if (t.hasElement(n)) return !n.hasAttribute('data-trigger-disabled');
  for (const [, o] of t.entries()) if (Z(o, n)) return !o.hasAttribute('data-trigger-disabled');
  return !1;
}
function Le(e) {
  return 'composedPath' in e ? e.composedPath()[0] : e.target;
}
function Fe(e, t) {
  if (t == null) return !1;
  if ('composedPath' in e) return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Si(e) {
  return e.matches('html,body');
}
function Qn(e) {
  return ve(e) && e.matches(wr);
}
function Eo(e) {
  return e ? e.getAttribute('role') === 'combobox' && Qn(e) : !1;
}
function jn(e) {
  return e ? (e.hasAttribute(Hn) ? e : e.querySelector(`[${Hn}]`) || e) : null;
}
function Ue(e, t, n = !0) {
  return e
    .filter((r) => r.parentId === t && (!n || r.context?.open))
    .flatMap((r) => [r, ...Ue(e, r.id, n)]);
}
function xo(e, t) {
  let n = [],
    o = e.find((r) => r.id === t)?.parentId;
  for (; o; ) {
    const r = e.find((s) => s.id === o);
    ((o = r?.parentId), r && (n = n.concat(r)));
  }
  return n;
}
function Ti(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Ci(e) {
  return 'nativeEvent' in e;
}
function Oi(e) {
  return e.pointerType === '' && e.isTrusted
    ? !0
    : Wn && e.pointerType
      ? e.type === 'click' && e.buttons === 1
      : e.detail === 0 && !e.pointerType;
}
function Pi(e) {
  return Ei
    ? !1
    : (!Wn && e.width === 0 && e.height === 0) ||
        (Wn &&
          e.width === 1 &&
          e.height === 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === 'mouse') ||
        (e.width < 1 &&
          e.height < 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === 'touch');
}
function At(e, t) {
  const n = ['mouse', 'pen'];
  return (t || n.push('', void 0), n.includes(e));
}
function Tr(e) {
  const t = e.type;
  return t === 'click' || t === 'mousedown' || t === 'keydown' || t === 'keyup';
}
const Ii = ['top', 'right', 'bottom', 'left'],
  dt = Math.min,
  Ce = Math.max,
  Qt = Math.round,
  Ht = Math.floor,
  We = (e) => ({ x: e, y: e }),
  ki = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function _n(e, t, n) {
  return Ce(e, dt(t, n));
}
function Xe(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Se(e) {
  return e.split('-')[0];
}
function Ze(e) {
  return e.split('-')[1];
}
function eo(e) {
  return e === 'x' ? 'y' : 'x';
}
function to(e) {
  return e === 'y' ? 'height' : 'width';
}
function ke(e) {
  const t = e[0];
  return t === 't' || t === 'b' ? 'y' : 'x';
}
function no(e) {
  return eo(ke(e));
}
function Ai(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ze(e),
    r = no(e),
    s = to(r);
  let i =
    r === 'x' ? (o === (n ? 'end' : 'start') ? 'right' : 'left') : o === 'start' ? 'bottom' : 'top';
  return (t.reference[s] > t.floating[s] && (i = en(i)), [i, en(i)]);
}
function Mi(e) {
  const t = en(e);
  return [Yn(e), t, Yn(t)];
}
function Yn(e) {
  return e.includes('start') ? e.replace('start', 'end') : e.replace('end', 'start');
}
const Ro = ['left', 'right'],
  wo = ['right', 'left'],
  Fi = ['top', 'bottom'],
  Li = ['bottom', 'top'];
function Di(e, t, n) {
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? wo : Ro) : t ? Ro : wo;
    case 'left':
    case 'right':
      return t ? Fi : Li;
    default:
      return [];
  }
}
function Ni(e, t, n, o) {
  const r = Ze(e);
  let s = Di(Se(e), n === 'start', o);
  return (r && ((s = s.map((i) => i + '-' + r)), t && (s = s.concat(s.map(Yn)))), s);
}
function en(e) {
  const t = Se(e);
  return ki[t] + e.slice(t.length);
}
function Bi(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Cr(e) {
  return typeof e != 'number' ? Bi(e) : { top: e, right: e, bottom: e, left: e };
}
function tn(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function Vi(e) {
  return Oe(e).display !== 'none';
}
var $i = [
    'input:not([inert]):not([inert] *)',
    'select:not([inert]):not([inert] *)',
    'textarea:not([inert]):not([inert] *)',
    'a[href]:not([inert]):not([inert] *)',
    'button:not([inert]):not([inert] *)',
    '[tabindex]:not(slot):not([inert]):not([inert] *)',
    'audio[controls]:not([inert]):not([inert] *)',
    'video[controls]:not([inert]):not([inert] *)',
    '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',
    'details>summary:first-of-type:not([inert]):not([inert] *)',
    'details:not([inert]):not([inert] *)',
  ],
  nn = $i.join(','),
  Or = typeof Element > 'u',
  pt = Or
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  on =
    !Or && Element.prototype.getRootNode
      ? function (e) {
          var t;
          return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
        }
      : function (e) {
          return e?.ownerDocument;
        },
  rn = function (t, n) {
    var o;
    n === void 0 && (n = !0);
    var r =
        t == null || (o = t.getAttribute) === null || o === void 0 ? void 0 : o.call(t, 'inert'),
      s = r === '' || r === 'true',
      i =
        s || (n && t && (typeof t.closest == 'function' ? t.closest('[inert]') : rn(t.parentNode)));
    return i;
  },
  Wi = function (t) {
    var n,
      o =
        t == null || (n = t.getAttribute) === null || n === void 0
          ? void 0
          : n.call(t, 'contenteditable');
    return o === '' || o === 'true';
  },
  Pr = function (t, n, o) {
    if (rn(t)) return [];
    var r = Array.prototype.slice.apply(t.querySelectorAll(nn));
    return (n && pt.call(t, nn) && r.unshift(t), (r = r.filter(o)), r);
  },
  sn = function (t, n, o) {
    for (var r = [], s = Array.from(t); s.length; ) {
      var i = s.shift();
      if (!rn(i, !1))
        if (i.tagName === 'SLOT') {
          var c = i.assignedElements(),
            u = c.length ? c : i.children,
            l = sn(u, !0, o);
          o.flatten ? r.push.apply(r, l) : r.push({ scopeParent: i, candidates: l });
        } else {
          var a = pt.call(i, nn);
          a && o.filter(i) && (n || !t.includes(i)) && r.push(i);
          var f = i.shadowRoot || (typeof o.getShadowRoot == 'function' && o.getShadowRoot(i)),
            h = !rn(f, !1) && (!o.shadowRootFilter || o.shadowRootFilter(i));
          if (f && h) {
            var m = sn(f === !0 ? i.children : f.children, !0, o);
            o.flatten ? r.push.apply(r, m) : r.push({ scopeParent: i, candidates: m });
          } else s.unshift.apply(s, i.children);
        }
    }
    return r;
  },
  Ir = function (t) {
    return !isNaN(parseInt(t.getAttribute('tabindex'), 10));
  },
  kr = function (t) {
    if (!t) throw new Error('No node provided');
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Wi(t)) && !Ir(t)
      ? 0
      : t.tabIndex;
  },
  Hi = function (t, n) {
    var o = kr(t);
    return o < 0 && n && !Ir(t) ? 0 : o;
  },
  ji = function (t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
  },
  Ar = function (t) {
    return t.tagName === 'INPUT';
  },
  _i = function (t) {
    return Ar(t) && t.type === 'hidden';
  },
  Yi = function (t) {
    var n =
      t.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(t.children).some(function (o) {
        return o.tagName === 'SUMMARY';
      });
    return n;
  },
  Ui = function (t, n) {
    for (var o = 0; o < t.length; o++) if (t[o].checked && t[o].form === n) return t[o];
  },
  qi = function (t) {
    if (!t.name) return !0;
    var n = t.form || on(t),
      o = function (c) {
        return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
      },
      r;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      r = o(window.CSS.escape(t.name));
    else
      try {
        r = o(t.name);
      } catch (i) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            i.message,
          ),
          !1
        );
      }
    var s = Ui(r, t.form);
    return !s || s === t;
  },
  Xi = function (t) {
    return Ar(t) && t.type === 'radio';
  },
  zi = function (t) {
    return Xi(t) && !qi(t);
  },
  Gi = function (t) {
    var n,
      o = t && on(t),
      r = (n = o) === null || n === void 0 ? void 0 : n.host,
      s = !1;
    if (o && o !== t) {
      var i, c, u;
      for (
        s = !!(
          ((i = r) !== null &&
            i !== void 0 &&
            (c = i.ownerDocument) !== null &&
            c !== void 0 &&
            c.contains(r)) ||
          (t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t))
        );
        !s && r;
      ) {
        var l, a, f;
        ((o = on(r)),
          (r = (l = o) === null || l === void 0 ? void 0 : l.host),
          (s = !!(
            (a = r) !== null &&
            a !== void 0 &&
            (f = a.ownerDocument) !== null &&
            f !== void 0 &&
            f.contains(r)
          )));
      }
    }
    return s;
  },
  So = function (t) {
    var n = t.getBoundingClientRect(),
      o = n.width,
      r = n.height;
    return o === 0 && r === 0;
  },
  Ki = function (t, n) {
    var o = n.displayCheck,
      r = n.getShadowRoot;
    if (o === 'full-native' && 'checkVisibility' in t) {
      var s = t.checkVisibility({
        checkOpacity: !1,
        opacityProperty: !1,
        contentVisibilityAuto: !0,
        visibilityProperty: !0,
        checkVisibilityCSS: !0,
      });
      return !s;
    }
    if (getComputedStyle(t).visibility === 'hidden') return !0;
    var i = pt.call(t, 'details>summary:first-of-type'),
      c = i ? t.parentElement : t;
    if (pt.call(c, 'details:not([open]) *')) return !0;
    if (!o || o === 'full' || o === 'full-native' || o === 'legacy-full') {
      if (typeof r == 'function') {
        for (var u = t; t; ) {
          var l = t.parentElement,
            a = on(t);
          if (l && !l.shadowRoot && r(l) === !0) return So(t);
          t.assignedSlot
            ? (t = t.assignedSlot)
            : !l && a !== t.ownerDocument
              ? (t = a.host)
              : (t = l);
        }
        t = u;
      }
      if (Gi(t)) return !t.getClientRects().length;
      if (o !== 'legacy-full') return !0;
    } else if (o === 'non-zero-area') return So(t);
    return !1;
  },
  Ji = function (t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var n = t.parentElement; n; ) {
        if (n.tagName === 'FIELDSET' && n.disabled) {
          for (var o = 0; o < n.children.length; o++) {
            var r = n.children.item(o);
            if (r.tagName === 'LEGEND')
              return pt.call(n, 'fieldset[disabled] *') ? !0 : !r.contains(t);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  },
  Un = function (t, n) {
    return !(n.disabled || _i(n) || Ki(n, t) || Yi(n) || Ji(n));
  },
  qn = function (t, n) {
    return !(zi(n) || kr(n) < 0 || !Un(t, n));
  },
  Zi = function (t) {
    var n = parseInt(t.getAttribute('tabindex'), 10);
    return !!(isNaN(n) || n >= 0);
  },
  Mr = function (t) {
    var n = [],
      o = [];
    return (
      t.forEach(function (r, s) {
        var i = !!r.scopeParent,
          c = i ? r.scopeParent : r,
          u = Hi(c, i),
          l = i ? Mr(r.candidates) : c;
        u === 0
          ? i
            ? n.push.apply(n, l)
            : n.push(c)
          : o.push({ documentOrder: s, tabIndex: u, item: r, isScope: i, content: l });
      }),
      o
        .sort(ji)
        .reduce(function (r, s) {
          return (s.isScope ? r.push.apply(r, s.content) : r.push(s.content), r);
        }, [])
        .concat(n)
    );
  },
  Ft = function (t, n) {
    n = n || {};
    var o;
    return (
      n.getShadowRoot
        ? (o = sn([t], n.includeContainer, {
            filter: qn.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: Zi,
          }))
        : (o = Pr(t, n.includeContainer, qn.bind(null, n))),
      Mr(o)
    );
  },
  Qi = function (t, n) {
    n = n || {};
    var o;
    return (
      n.getShadowRoot
        ? (o = sn([t], n.includeContainer, {
            filter: Un.bind(null, n),
            flatten: !0,
            getShadowRoot: n.getShadowRoot,
          }))
        : (o = Pr(t, n.includeContainer, Un.bind(null, n))),
      o
    );
  },
  Fr = function (t, n) {
    if (((n = n || {}), !t)) throw new Error('No node provided');
    return pt.call(t, nn) === !1 ? !1 : qn(n, t);
  };
function ue(e) {
  return e?.ownerDocument || document;
}
const vt = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == 'function' && ResizeObserver.toString().includes('[native code]')
      ? 'full'
      : 'none',
});
function Lr(e, t) {
  const n = Ft(e, vt()),
    o = n.length;
  if (o === 0) return;
  const r = rt(ue(e)),
    s = n.indexOf(r),
    i = s === -1 ? (t === 1 ? 0 : o - 1) : s + t;
  return n[i];
}
function oo(e) {
  return Lr(ue(e).body, 1) || e;
}
function Dr(e) {
  return Lr(ue(e).body, -1) || e;
}
function Nr(e, t) {
  if (!e) return null;
  const n = Ft(ue(e).body, vt()),
    o = n.length;
  if (o === 0) return null;
  const r = n.indexOf(e);
  if (r === -1) return null;
  const s = (r + t + o) % o;
  return n[s];
}
function ec(e) {
  return Nr(e, 1);
}
function tc(e) {
  return Nr(e, -1);
}
function at(e, t) {
  const n = t || e.currentTarget,
    o = e.relatedTarget;
  return !o || !Z(n, o);
}
function nc(e) {
  Ft(e, vt()).forEach((n) => {
    ((n.dataset.tabindex = n.getAttribute('tabindex') || ''), n.setAttribute('tabindex', '-1'));
  });
}
function To(e) {
  e.querySelectorAll('[data-tabindex]').forEach((n) => {
    const o = n.dataset.tabindex;
    (delete n.dataset.tabindex, o ? n.setAttribute('tabindex', o) : n.removeAttribute('tabindex'));
  });
}
const Br = 'ArrowUp',
  Vr = 'ArrowDown',
  $r = 'ArrowLeft',
  Wr = 'ArrowRight',
  Hr = 'Home',
  jr = 'End',
  oc = new Set([$r, Wr]),
  rc = new Set([Br, Vr]),
  sc = new Set([...oc, ...rc]);
[...sc];
const ic = new Set([Br, Vr, $r, Wr, Hr, jr]);
function _r(e) {
  const { enabled: t = !0, open: n, ref: o, onComplete: r } = e,
    s = z(r),
    i = mr(o, n, !1);
  d.useEffect(() => {
    if (!t) return;
    const c = new AbortController();
    return (
      i(s, c.signal),
      () => {
        c.abort();
      }
    );
  }, [t, n, s, i]);
}
const St = 0;
class De {
  static create() {
    return new De();
  }
  currentId = St;
  start(t, n) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = St), n());
      }, t)));
  }
  isStarted() {
    return this.currentId !== St;
  }
  clear = () => {
    this.currentId !== St && (clearTimeout(this.currentId), (this.currentId = St));
  };
  disposeEffect = () => this.clear;
}
function gt() {
  const e = Ne(De.create).current;
  return (un(e.disposeEffect), e);
}
let Co = {},
  Oo = {},
  Po = '';
function cc(e) {
  if (typeof document > 'u') return !1;
  const t = ue(e);
  return Ee(t).innerWidth - t.documentElement.clientWidth > 0;
}
function lc(e) {
  if (
    !(typeof CSS < 'u' && CSS.supports && CSS.supports('scrollbar-gutter', 'stable')) ||
    typeof document > 'u'
  )
    return !1;
  const n = ue(e),
    o = n.documentElement,
    r = n.body,
    s = Je(o) ? o : r,
    i = s.style.overflowY,
    c = o.style.scrollbarGutter;
  ((o.style.scrollbarGutter = 'stable'), (s.style.overflowY = 'scroll'));
  const u = s.offsetWidth;
  s.style.overflowY = 'hidden';
  const l = s.offsetWidth;
  return ((s.style.overflowY = i), (o.style.scrollbarGutter = c), u === l);
}
function ac(e) {
  const t = ue(e),
    n = t.documentElement,
    o = t.body,
    r = Je(n) ? n : o,
    s = { overflowY: r.style.overflowY, overflowX: r.style.overflowX };
  return (
    Object.assign(r.style, { overflowY: 'hidden', overflowX: 'hidden' }),
    () => {
      Object.assign(r.style, s);
    }
  );
}
function uc(e) {
  const t = ue(e),
    n = t.documentElement,
    o = t.body,
    r = Ee(n);
  let s = 0,
    i = 0,
    c = !1;
  const u = Ve.create();
  if (yr && (r.visualViewport?.scale ?? 1) !== 1) return () => {};
  function l() {
    const h = r.getComputedStyle(n),
      m = r.getComputedStyle(o),
      p = (h.scrollbarGutter || '').includes('both-edges') ? 'stable both-edges' : 'stable';
    ((s = n.scrollTop),
      (i = n.scrollLeft),
      (Co = {
        scrollbarGutter: n.style.scrollbarGutter,
        overflowY: n.style.overflowY,
        overflowX: n.style.overflowX,
      }),
      (Po = n.style.scrollBehavior),
      (Oo = {
        position: o.style.position,
        height: o.style.height,
        width: o.style.width,
        boxSizing: o.style.boxSizing,
        overflowY: o.style.overflowY,
        overflowX: o.style.overflowX,
        scrollBehavior: o.style.scrollBehavior,
      }));
    const E = n.scrollHeight > n.clientHeight,
      y = n.scrollWidth > n.clientWidth,
      w = h.overflowY === 'scroll' || m.overflowY === 'scroll',
      R = h.overflowX === 'scroll' || m.overflowX === 'scroll',
      v = Math.max(0, r.innerWidth - o.clientWidth),
      S = Math.max(0, r.innerHeight - o.clientHeight),
      x = parseFloat(m.marginTop) + parseFloat(m.marginBottom),
      P = parseFloat(m.marginLeft) + parseFloat(m.marginRight),
      B = Je(n) ? n : o;
    if (((c = lc(e)), c)) {
      ((n.style.scrollbarGutter = p),
        (B.style.overflowY = 'hidden'),
        (B.style.overflowX = 'hidden'));
      return;
    }
    (Object.assign(n.style, { scrollbarGutter: p, overflowY: 'hidden', overflowX: 'hidden' }),
      (E || w) && (n.style.overflowY = 'scroll'),
      (y || R) && (n.style.overflowX = 'scroll'),
      Object.assign(o.style, {
        position: 'relative',
        height: x || S ? `calc(100dvh - ${x + S}px)` : '100dvh',
        width: P || v ? `calc(100vw - ${P + v}px)` : '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        scrollBehavior: 'unset',
      }),
      (o.scrollTop = s),
      (o.scrollLeft = i),
      n.setAttribute('data-base-ui-scroll-locked', ''),
      (n.style.scrollBehavior = 'unset'));
  }
  function a() {
    (Object.assign(n.style, Co),
      Object.assign(o.style, Oo),
      c ||
        ((n.scrollTop = s),
        (n.scrollLeft = i),
        n.removeAttribute('data-base-ui-scroll-locked'),
        (n.style.scrollBehavior = Po)));
  }
  function f() {
    (a(), u.request(l));
  }
  return (
    l(),
    r.addEventListener('resize', f),
    () => {
      (u.cancel(),
        a(),
        typeof r.removeEventListener == 'function' && r.removeEventListener('resize', f));
    }
  );
}
class fc {
  lockCount = 0;
  restore = null;
  timeoutLock = De.create();
  timeoutUnlock = De.create();
  acquire(t) {
    return (
      (this.lockCount += 1),
      this.lockCount === 1 &&
        this.restore === null &&
        this.timeoutLock.start(0, () => this.lock(t)),
      this.release
    );
  }
  release = () => {
    ((this.lockCount -= 1),
      this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock));
  };
  unlock = () => {
    this.lockCount === 0 && this.restore && (this.restore?.(), (this.restore = null));
  };
  lock(t) {
    if (this.lockCount === 0 || this.restore !== null) return;
    const o = ue(t).documentElement,
      r = Ee(o).getComputedStyle(o).overflowY;
    if (r === 'hidden' || r === 'clip') {
      this.restore = ur;
      return;
    }
    const s = Er || !cc(t);
    this.restore = s ? ac(t) : uc(t);
  }
}
const dc = new fc();
function pc(e = !0, t = null) {
  K(() => {
    if (e) return dc.acquire(t);
  }, [e, t]);
}
function gc(e, t) {
  return t != null && !At(t) ? 0 : typeof e == 'function' ? e() : e;
}
function Gt(e, t, n) {
  const o = gc(e, n);
  return typeof o == 'number' ? o : o?.[t];
}
function Io(e) {
  return typeof e == 'function' ? e() : e;
}
function Yr(e, t) {
  return t || e === 'click' || e === 'mousedown';
}
function $e(e) {
  const t = Ne(mc, e).current;
  return ((t.next = e), K(t.effect), t);
}
function mc(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    },
  };
  return t;
}
const hc = {
    clipPath: 'inset(50%)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1,
  },
  bc = { ...hc, position: 'fixed', top: 0, left: 0 },
  mt = d.forwardRef(function (t, n) {
    const [o, r] = d.useState();
    K(() => {
      yi && r('button');
    }, []);
    const s = { tabIndex: 0, role: o };
    return X.jsx('span', {
      ...t,
      ref: n,
      style: bc,
      'aria-hidden': o ? void 0 : !0,
      ...s,
      'data-base-ui-focus-guard': '',
    });
  });
function cn(e) {
  return `data-base-ui-${e}`;
}
let ko = 0;
function Tn(e, t = {}) {
  const { preventScroll: n = !1, cancelPrevious: o = !0, sync: r = !1 } = t;
  o && cancelAnimationFrame(ko);
  const s = () => e?.focus({ preventScroll: n });
  r ? s() : (ko = requestAnimationFrame(s));
}
const Cn = { inert: new WeakMap(), 'aria-hidden': new WeakMap() },
  Ao = 'data-base-ui-inert',
  Xn = { inert: new WeakSet(), 'aria-hidden': new WeakSet() };
let Tt = new WeakMap(),
  On = 0;
function vc(e) {
  return Xn[e];
}
function Ur(e) {
  return e ? (It(e) ? e.host : Ur(e.parentNode)) : null;
}
const Pn = (e, t) =>
    t
      .map((n) => {
        if (e.contains(n)) return n;
        const o = Ur(n);
        return e.contains(o) ? o : null;
      })
      .filter((n) => n != null),
  Mo = (e) => {
    const t = new Set();
    return (
      e.forEach((n) => {
        let o = n;
        for (; o && !t.has(o); ) (t.add(o), (o = o.parentNode));
      }),
      t
    );
  },
  Fo = (e, t, n) => {
    const o = [],
      r = (s) => {
        !s ||
          n.has(s) ||
          Array.from(s.children).forEach((i) => {
            Ke(i) !== 'script' && (t.has(i) ? r(i) : o.push(i));
          });
      };
    return (r(e), o);
  };
function yc(e, t, n, o, { mark: r = !0, markerIgnoreElements: s = [] }) {
  const i = o ? 'inert' : n ? 'aria-hidden' : null;
  let c = null,
    u = null;
  const l = Pn(t, e),
    a = r ? Pn(t, s) : [],
    f = new Set(a),
    h = r ? Fo(t, Mo(l), new Set(l)).filter((g) => !f.has(g)) : [],
    m = [],
    b = [];
  if (i) {
    const g = Cn[i],
      p = vc(i);
    ((u = p), (c = g));
    const E = Pn(t, Array.from(t.querySelectorAll('[aria-live]'))),
      y = l.concat(E);
    Fo(t, Mo(y), new Set(y)).forEach((R) => {
      const v = R.getAttribute(i),
        S = v !== null && v !== 'false',
        x = (g.get(R) || 0) + 1;
      (g.set(R, x),
        m.push(R),
        x === 1 && S && p.add(R),
        S || R.setAttribute(i, i === 'inert' ? '' : 'true'));
    });
  }
  return (
    r &&
      h.forEach((g) => {
        const p = (Tt.get(g) || 0) + 1;
        (Tt.set(g, p), b.push(g), p === 1 && g.setAttribute(Ao, ''));
      }),
    (On += 1),
    () => {
      (c &&
        m.forEach((g) => {
          const E = (c.get(g) || 0) - 1;
          (c.set(g, E), E || (!u?.has(g) && i && g.removeAttribute(i), u?.delete(g)));
        }),
        r &&
          b.forEach((g) => {
            const p = (Tt.get(g) || 0) - 1;
            (Tt.set(g, p), p || g.removeAttribute(Ao));
          }),
        (On -= 1),
        On ||
          ((Cn.inert = new WeakMap()),
          (Cn['aria-hidden'] = new WeakMap()),
          (Xn.inert = new WeakSet()),
          (Xn['aria-hidden'] = new WeakSet()),
          (Tt = new WeakMap())));
    }
  );
}
function Lo(e, t = {}) {
  const { ariaHidden: n = !1, inert: o = !1, mark: r = !0, markerIgnoreElements: s = [] } = t,
    i = ue(e[0]).body;
  return yc(e, i, n, o, { mark: r, markerIgnoreElements: s });
}
const qr = d.createContext(null),
  Xr = () => d.useContext(qr),
  Ec = cn('portal');
function xc(e = {}) {
  const { ref: t, container: n, componentProps: o = we, elementProps: r } = e,
    s = ht(),
    c = Xr()?.portalNode,
    [u, l] = d.useState(null),
    [a, f] = d.useState(null),
    h = z((p) => {
      p !== null && f(p);
    }),
    m = d.useRef(null);
  K(() => {
    if (n === null) {
      m.current && ((m.current = null), f(null), l(null));
      return;
    }
    if (s == null) return;
    const p = (n && (Jn(n) ? n : n.current)) ?? c ?? document.body;
    if (p == null) {
      m.current && ((m.current = null), f(null), l(null));
      return;
    }
    m.current !== p && ((m.current = p), f(null), l(p));
  }, [n, c, s]);
  const b = Mt('div', o, { ref: [t, h], props: [{ id: s, [Ec]: '' }, r] });
  return { portalNode: a, portalSubtree: u && b ? Ge.createPortal(b, u) : null };
}
const Rc = d.forwardRef(function (t, n) {
  const { children: o, container: r, className: s, render: i, renderGuards: c, ...u } = t,
    { portalNode: l, portalSubtree: a } = xc({
      container: r,
      ref: n,
      componentProps: t,
      elementProps: u,
    }),
    f = d.useRef(null),
    h = d.useRef(null),
    m = d.useRef(null),
    b = d.useRef(null),
    [g, p] = d.useState(null),
    E = g?.modal,
    y = g?.open,
    w = typeof c == 'boolean' ? c : !!g && !g.modal && g.open && !!l;
  (d.useEffect(() => {
    if (!l || E) return;
    function v(S) {
      l && S.relatedTarget && at(S) && (S.type === 'focusin' ? To : nc)(l);
    }
    return (
      l.addEventListener('focusin', v, !0),
      l.addEventListener('focusout', v, !0),
      () => {
        (l.removeEventListener('focusin', v, !0), l.removeEventListener('focusout', v, !0));
      }
    );
  }, [l, E]),
    d.useEffect(() => {
      !l || y || To(l);
    }, [y, l]));
  const R = d.useMemo(
    () => ({
      beforeOutsideRef: f,
      afterOutsideRef: h,
      beforeInsideRef: m,
      afterInsideRef: b,
      portalNode: l,
      setFocusManagerState: p,
    }),
    [l],
  );
  return X.jsxs(d.Fragment, {
    children: [
      a,
      X.jsxs(qr.Provider, {
        value: R,
        children: [
          w &&
            l &&
            X.jsx(mt, {
              'data-type': 'outside',
              ref: f,
              onFocus: (v) => {
                if (at(v, l)) m.current?.focus();
                else {
                  const S = g ? g.domReference : null;
                  Dr(S)?.focus();
                }
              },
            }),
          w && l && X.jsx('span', { 'aria-owns': l.id, style: Ks }),
          l && Ge.createPortal(o, l),
          w &&
            l &&
            X.jsx(mt, {
              'data-type': 'outside',
              ref: h,
              onFocus: (v) => {
                if (at(v, l)) b.current?.focus();
                else {
                  const S = g ? g.domReference : null;
                  (oo(S)?.focus(),
                    g?.closeOnFocusOut && g?.onOpenChange(!1, me(Ot, v.nativeEvent)));
                }
              },
            }),
        ],
      }),
    ],
  });
});
function zr() {
  const e = new Map();
  return {
    emit(t, n) {
      e.get(t)?.forEach((o) => o(n));
    },
    on(t, n) {
      (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
    },
    off(t, n) {
      e.get(t)?.delete(n);
    },
  };
}
class wc {
  nodesRef = { current: [] };
  events = zr();
  addNode(t) {
    this.nodesRef.current.push(t);
  }
  removeNode(t) {
    const n = this.nodesRef.current.findIndex((o) => o === t);
    n !== -1 && this.nodesRef.current.splice(n, 1);
  }
}
const Gr = d.createContext(null),
  Kr = d.createContext(null),
  ct = () => d.useContext(Gr)?.id || null,
  yt = (e) => {
    const t = d.useContext(Kr);
    return e ?? t;
  };
function Sc(e) {
  const t = ht(),
    n = yt(e),
    o = ct();
  return (
    K(() => {
      if (!t) return;
      const r = { id: t, parentId: o };
      return (
        n?.addNode(r),
        () => {
          n?.removeNode(r);
        }
      );
    }, [n, t, o]),
    t
  );
}
function Tc(e) {
  const { children: t, id: n } = e,
    o = ct();
  return X.jsx(Gr.Provider, {
    value: d.useMemo(() => ({ id: n, parentId: o }), [n, o]),
    children: t,
  });
}
function Cc(e) {
  const { children: t, externalTree: n } = e,
    o = Ne(() => n ?? new wc()).current;
  return X.jsx(Kr.Provider, { value: o, children: t });
}
function Oc(e, t) {
  const n = Ee(e.target);
  return e instanceof n.KeyboardEvent
    ? 'keyboard'
    : e instanceof n.FocusEvent
      ? t || 'keyboard'
      : 'pointerType' in e
        ? e.pointerType || 'keyboard'
        : 'touches' in e
          ? 'touch'
          : e instanceof n.MouseEvent
            ? t || (e.detail === 0 ? 'keyboard' : 'mouse')
            : '';
}
const Do = 20;
let ze = [];
function ro() {
  ze = ze.filter((e) => e.deref()?.isConnected);
}
function Pc(e) {
  (ro(),
    e && Ke(e) !== 'body' && (ze.push(new WeakRef(e)), ze.length > Do && (ze = ze.slice(-Do))));
}
function In() {
  return (ro(), ze[ze.length - 1]?.deref());
}
function Ic(e) {
  if (!e) return null;
  const t = vt();
  return Fr(e, t) ? e : Ft(e, t)[0] || e;
}
function kc(e) {
  return !e || !e.isConnected
    ? !1
    : typeof e.checkVisibility == 'function'
      ? e.checkVisibility()
      : Vi(e);
}
function No(e, t) {
  if (!t.current.includes('floating') && !e.getAttribute('role')?.includes('dialog')) return;
  const n = vt(),
    r = Qi(e, n).filter((i) => {
      const c = i.getAttribute('data-tabindex') || '';
      return Fr(i, n) || (i.hasAttribute('data-tabindex') && !c.startsWith('-'));
    }),
    s = e.getAttribute('tabindex');
  t.current.includes('floating') || r.length === 0
    ? s !== '0' && e.setAttribute('tabindex', '0')
    : (s !== '-1' ||
        (e.hasAttribute('data-tabindex') && e.getAttribute('data-tabindex') !== '-1')) &&
      (e.setAttribute('tabindex', '-1'), e.setAttribute('data-tabindex', '-1'));
}
function Ac(e) {
  const {
      context: t,
      children: n,
      disabled: o = !1,
      initialFocus: r = !0,
      returnFocus: s = !0,
      restoreFocus: i = !1,
      modal: c = !0,
      closeOnFocusOut: u = !0,
      openInteractionType: l = '',
      nextFocusableElement: a,
      previousFocusableElement: f,
      beforeContentFocusGuardRef: h,
      externalTree: m,
      getInsideElements: b,
    } = e,
    g = 'rootStore' in t ? t.rootStore : t,
    p = g.useState('open'),
    E = g.useState('domReferenceElement'),
    y = g.useState('floatingElement'),
    { events: w, dataRef: R } = g.context,
    v = z(() => R.current.floatingContext?.nodeId),
    S = r === !1,
    x = Eo(E) && S,
    P = d.useRef(['content']),
    B = $e(r),
    W = $e(s),
    A = $e(l),
    M = yt(m),
    I = Xr(),
    k = d.useRef(!1),
    C = d.useRef(!1),
    D = d.useRef(!1),
    N = d.useRef(-1),
    O = d.useRef(''),
    L = d.useRef(''),
    G = d.useRef(null),
    _ = d.useRef(null),
    te = Zt(G, h, I?.beforeInsideRef),
    ge = Zt(_, I?.afterInsideRef),
    q = gt(),
    se = gt(),
    H = Kn(),
    le = I != null,
    Y = jn(y),
    de = z(($ = Y) => ($ ? Ft($, vt()) : [])),
    ie = z(() => b?.().filter(($) => $ != null) ?? []),
    ye = z(($) => {
      const J = de($);
      return P.current
        .map(() => J)
        .filter(Boolean)
        .flat();
    });
  (d.useEffect(() => {
    if (o || !c) return;
    function $(oe) {
      oe.key === 'Tab' && Z(Y, rt(ue(Y))) && de().length === 0 && !x && Ti(oe);
    }
    const J = ue(Y);
    return (
      J.addEventListener('keydown', $),
      () => {
        J.removeEventListener('keydown', $);
      }
    );
  }, [o, E, Y, c, P, x, de, ye]),
    d.useEffect(() => {
      if (o || !p) return;
      const $ = ue(Y);
      function J() {
        D.current = !1;
      }
      function oe(j) {
        const U = Le(j),
          he = ie(),
          V = Z(y, U) || Z(E, U) || Z(I?.portalNode, U) || he.some((T) => T === U || Z(T, U));
        ((D.current = !V),
          (L.current = j.pointerType || 'keyboard'),
          U?.closest(`[${fr}]`) && (C.current = !0));
      }
      function fe() {
        L.current = 'keyboard';
      }
      return (
        $.addEventListener('pointerdown', oe, !0),
        $.addEventListener('pointerup', J, !0),
        $.addEventListener('pointercancel', J, !0),
        $.addEventListener('keydown', fe, !0),
        () => {
          ($.removeEventListener('pointerdown', oe, !0),
            $.removeEventListener('pointerup', J, !0),
            $.removeEventListener('pointercancel', J, !0),
            $.removeEventListener('keydown', fe, !0));
        }
      );
    }, [o, y, E, Y, p, I, ie]),
    d.useEffect(() => {
      if (o || !u) return;
      const $ = ue(Y);
      function J() {
        ((C.current = !0),
          se.start(0, () => {
            C.current = !1;
          }));
      }
      function oe(V) {
        const T = Le(V),
          Q = de().indexOf(T);
        Q !== -1 && (N.current = Q);
      }
      function fe(V) {
        const T = V.relatedTarget,
          F = V.currentTarget,
          Q = Le(V);
        queueMicrotask(() => {
          const ae = v(),
            Ae = g.context.triggerElements,
            et = ie(),
            Be =
              T?.hasAttribute(cn('focus-guard')) &&
              [
                G.current,
                _.current,
                I?.beforeInsideRef.current,
                I?.afterInsideRef.current,
                I?.beforeOutsideRef.current,
                I?.afterOutsideRef.current,
                _e(f),
                _e(a),
              ].includes(T),
            tt = !(
              Z(E, T) ||
              Z(y, T) ||
              Z(T, y) ||
              Z(I?.portalNode, T) ||
              et.some((be) => be === T || Z(be, T)) ||
              (T != null && Ae.hasElement(T)) ||
              Ae.hasMatchingElement((be) => Z(be, T)) ||
              Be ||
              (M &&
                (Ue(M.nodesRef.current, ae).find(
                  (be) =>
                    Z(be.context?.elements.floating, T) || Z(be.context?.elements.domReference, T),
                ) ||
                  xo(M.nodesRef.current, ae).find(
                    (be) =>
                      [be.context?.elements.floating, jn(be.context?.elements.floating)].includes(
                        T,
                      ) || be.context?.elements.domReference === T,
                  )))
            );
          if ((F === E && Y && No(Y, P), i && F !== E && !kc(Q) && rt($) === $.body)) {
            if (ve(Y) && (Y.focus(), i === 'popup')) {
              H.request(() => {
                Y.focus();
              });
              return;
            }
            const be = N.current,
              pe = de(),
              xe = pe[be] || pe[pe.length - 1] || Y;
            ve(xe) && xe.focus();
          }
          if (R.current.insideReactTree) {
            R.current.insideReactTree = !1;
            return;
          }
          (x || !c) &&
            T &&
            tt &&
            !C.current &&
            (x || T !== In()) &&
            ((k.current = !0), g.setOpen(!1, me(Ot, V)));
        });
      }
      function j() {
        D.current ||
          ((R.current.insideReactTree = !0),
          q.start(0, () => {
            R.current.insideReactTree = !1;
          }));
      }
      const U = ve(E) ? E : null,
        he = [];
      if (!(!y && !U))
        return (
          U &&
            (U.addEventListener('focusout', fe),
            U.addEventListener('pointerdown', J),
            he.push(() => {
              (U.removeEventListener('focusout', fe), U.removeEventListener('pointerdown', J));
            })),
          y &&
            (y.addEventListener('focusin', oe),
            y.addEventListener('focusout', fe),
            I &&
              (y.addEventListener('focusout', j, !0),
              he.push(() => {
                y.removeEventListener('focusout', j, !0);
              })),
            he.push(() => {
              (y.removeEventListener('focusin', oe), y.removeEventListener('focusout', fe));
            })),
          () => {
            he.forEach((V) => {
              V();
            });
          }
        );
    }, [o, E, y, Y, c, M, I, g, u, i, de, x, v, P, R, q, se, H, a, f, ie]),
    d.useEffect(() => {
      if (o || !y || !p) return;
      const $ = Array.from(I?.portalNode?.querySelectorAll(`[${cn('portal')}]`) || []),
        oe = (M ? xo(M.nodesRef.current, v()) : []).find((T) =>
          Eo(T.context?.elements.domReference || null),
        )?.context?.elements.domReference,
        j = [
          ...[
            y,
            ...$,
            G.current,
            _.current,
            I?.beforeOutsideRef.current,
            I?.afterOutsideRef.current,
            ...ie(),
          ],
          oe,
          _e(f),
          _e(a),
          x ? E : null,
        ].filter((T) => T != null),
        U = Lo(j, { ariaHidden: c || x, mark: !1 }),
        he = [y, ...$].filter((T) => T != null),
        V = Lo(he);
      return () => {
        (V(), U());
      };
    }, [p, o, E, y, c, P, I, x, M, v, a, f, ie]),
    K(() => {
      if (!p || o || !ve(Y)) return;
      const $ = ue(Y),
        J = rt($);
      queueMicrotask(() => {
        const oe = ye(Y),
          fe = B.current,
          j = typeof fe == 'function' ? fe(A.current || '') : fe;
        if (j === void 0 || j === !1) return;
        let U;
        (j === !0 || j === null ? (U = oe[0] || Y) : (U = _e(j)),
          (U = U || oe[0] || Y),
          !Z(Y, J) && Tn(U, { preventScroll: U === Y }));
      });
    }, [o, p, Y, S, ye, B, A]),
    K(() => {
      if (o || !Y) return;
      const $ = ue(Y),
        J = rt($);
      Pc(J);
      function oe(j) {
        if (
          (j.open || (O.current = Oc(j.nativeEvent, L.current)),
          j.reason === Te && j.nativeEvent.type === 'mouseleave' && (k.current = !0),
          j.reason === dr)
        )
          if (j.nested) k.current = !1;
          else if (Oi(j.nativeEvent) || Pi(j.nativeEvent)) k.current = !1;
          else {
            let U = !1;
            (document.createElement('div').focus({
              get preventScroll() {
                return ((U = !0), !1);
              },
            }),
              U ? (k.current = !1) : (k.current = !0));
          }
      }
      w.on('openchange', oe);
      function fe() {
        const j = W.current;
        let U = typeof j == 'function' ? j(O.current) : j;
        if (U === void 0 || U === !1) return null;
        if ((U === null && (U = !0), typeof U == 'boolean')) {
          const V = E || In();
          return V && V.isConnected ? V : null;
        }
        const he = E || In();
        return _e(U) || he || null;
      }
      return () => {
        w.off('openchange', oe);
        const j = rt($),
          U = ie(),
          he =
            Z(y, j) ||
            U.some((T) => T === j || Z(T, j)) ||
            (M && Ue(M.nodesRef.current, v(), !1).some((T) => Z(T.context?.elements.floating, j))),
          V = fe();
        queueMicrotask(() => {
          const T = Ic(V),
            F = typeof W.current != 'boolean';
          (W.current &&
            !k.current &&
            ve(T) &&
            (!(!F && T !== j && j !== $.body) || he) &&
            T.focus({ preventScroll: !0 }),
            (k.current = !1));
        });
      };
    }, [o, y, Y, W, R, w, M, E, v, ie]),
    K(() => {
      if (!yr || p || !y) return;
      const $ = rt(ue(y));
      !ve($) || !Qn($) || (Z(y, $) && $.blur());
    }, [p, y]),
    K(() => {
      if (!(o || !I))
        return (
          I.setFocusManagerState({
            modal: c,
            closeOnFocusOut: u,
            open: p,
            onOpenChange: g.setOpen,
            domReference: E,
          }),
          () => {
            I.setFocusManagerState(null);
          }
        );
    }, [o, I, c, p, g, u, E]),
    K(() => {
      if (!(o || !Y))
        return (
          No(Y, P),
          () => {
            queueMicrotask(ro);
          }
        );
    }, [o, Y, P]));
  const Qe = !o && (c ? !x : !0) && (le || c);
  return X.jsxs(d.Fragment, {
    children: [
      Qe &&
        X.jsx(mt, {
          'data-type': 'inside',
          ref: te,
          onFocus: ($) => {
            if (c) {
              const J = ye();
              Tn(J[J.length - 1]);
            } else
              I?.portalNode &&
                ((k.current = !1),
                at($, I.portalNode) ? oo(E)?.focus() : _e(f ?? I.beforeOutsideRef)?.focus());
          },
        }),
      n,
      Qe &&
        X.jsx(mt, {
          'data-type': 'inside',
          ref: ge,
          onFocus: ($) => {
            c
              ? Tn(ye()[0])
              : I?.portalNode &&
                (u && (k.current = !0),
                at($, I.portalNode) ? Dr(E)?.focus() : _e(a ?? I.afterOutsideRef)?.focus());
          },
        }),
    ],
  });
}
function Mc(e, t = {}) {
  const n = 'rootStore' in e ? e.rootStore : e,
    o = n.context.dataRef,
    {
      enabled: r = !0,
      event: s = 'click',
      toggle: i = !0,
      ignoreMouse: c = !1,
      stickIfOpen: u = !0,
      touchOpenDelay: l = 0,
      reason: a = ft,
    } = t,
    f = d.useRef(void 0),
    h = Kn(),
    m = gt(),
    b = d.useMemo(
      () => ({
        onPointerDown(g) {
          f.current = g.pointerType;
        },
        onMouseDown(g) {
          const p = f.current,
            E = g.nativeEvent,
            y = n.select('open');
          if (g.button !== 0 || s === 'click' || (At(p, !0) && c)) return;
          const w = o.current.openEvent,
            R = w?.type,
            v = n.select('domReferenceElement') !== g.currentTarget,
            S = (y && v) || !(y && i && (!(w && u) || R === 'click' || R === 'mousedown'));
          if (Qn(E.target)) {
            const P = me(a, E, E.target);
            S && p === 'touch' && l > 0
              ? m.start(l, () => {
                  n.setOpen(!0, P);
                })
              : n.setOpen(S, P);
            return;
          }
          const x = g.currentTarget;
          h.request(() => {
            const P = me(a, E, x);
            S && p === 'touch' && l > 0
              ? m.start(l, () => {
                  n.setOpen(!0, P);
                })
              : n.setOpen(S, P);
          });
        },
        onClick(g) {
          if (s === 'mousedown-only') return;
          const p = f.current;
          if (s === 'mousedown' && p) {
            f.current = void 0;
            return;
          }
          if (At(p, !0) && c) return;
          const E = n.select('open'),
            y = o.current.openEvent,
            w = n.select('domReferenceElement') !== g.currentTarget,
            R = (E && w) || !(E && i && (!(y && u) || Tr(y))),
            v = me(a, g.nativeEvent, g.currentTarget);
          R && p === 'touch' && l > 0
            ? m.start(l, () => {
                n.setOpen(!0, v);
              })
            : n.setOpen(R, v);
        },
        onKeyDown() {
          f.current = void 0;
        },
      }),
      [o, s, c, n, u, i, h, m, l, a],
    );
  return d.useMemo(() => (r ? { reference: b } : we), [r, b]);
}
const Fc = { intentional: 'onClick', sloppy: 'onPointerDown' };
function Lc() {
  return !1;
}
function Dc(e) {
  return {
    escapeKey: typeof e == 'boolean' ? e : (e?.escapeKey ?? !1),
    outsidePress: typeof e == 'boolean' ? e : (e?.outsidePress ?? !0),
  };
}
function Nc(e, t = {}) {
  const n = 'rootStore' in e ? e.rootStore : e,
    o = n.useState('open'),
    r = n.useState('floatingElement'),
    { dataRef: s } = n.context,
    {
      enabled: i = !0,
      escapeKey: c = !0,
      outsidePress: u = !0,
      outsidePressEvent: l = 'sloppy',
      referencePress: a = Lc,
      referencePressEvent: f = 'sloppy',
      bubbles: h,
      externalTree: m,
    } = t,
    b = yt(m),
    g = z(typeof u == 'function' ? u : () => !1),
    p = typeof u == 'function' ? g : u,
    E = p !== !1,
    y = z(() => l),
    w = d.useRef(!1),
    R = d.useRef(!1),
    v = d.useRef(!1),
    { escapeKey: S, outsidePress: x } = Dc(h),
    P = d.useRef(null),
    B = gt(),
    W = gt(),
    A = z(() => {
      (W.clear(), (s.current.insideReactTree = !1));
    }),
    M = d.useRef(!1),
    I = d.useRef(''),
    k = z(a),
    C = z((_) => {
      if (!o || !i || !c || _.key !== 'Escape' || M.current) return;
      const te = s.current.floatingContext?.nodeId,
        ge = b ? Ue(b.nodesRef.current, te) : [];
      if (!S && ge.length > 0) {
        let H = !0;
        if (
          (ge.forEach((le) => {
            le.context?.open && !le.context.dataRef.current.__escapeKeyBubbles && (H = !1);
          }),
          !H)
        )
          return;
      }
      const q = Ci(_) ? _.nativeEvent : _,
        se = me(pr, q);
      (n.setOpen(!1, se), !S && !se.isPropagationAllowed && _.stopPropagation());
    }),
    D = z(() => {
      ((s.current.insideReactTree = !0), W.start(0, A));
    });
  (d.useEffect(() => {
    if (!o || !i) return;
    ((s.current.__escapeKeyBubbles = S), (s.current.__outsidePressBubbles = x));
    const _ = new De(),
      te = new De();
    function ge() {
      (_.clear(), (M.current = !0));
    }
    function q() {
      _.start(pn() ? 5 : 0, () => {
        M.current = !1;
      });
    }
    function se() {
      ((v.current = !0),
        te.start(0, () => {
          v.current = !1;
        }));
    }
    function H() {
      ((w.current = !1), (R.current = !1));
    }
    function le() {
      const T = I.current,
        F = T === 'pen' || !T ? 'mouse' : T,
        Q = y(),
        ae = typeof Q == 'function' ? Q() : Q;
      return typeof ae == 'string' ? ae : ae[F];
    }
    function Y(T) {
      const F = le();
      return (F === 'intentional' && T.type !== 'click') || (F === 'sloppy' && T.type === 'click');
    }
    function de(T) {
      const F = s.current.floatingContext?.nodeId,
        Q = b && Ue(b.nodesRef.current, F).some((ae) => Fe(T, ae.context?.elements.floating));
      return Fe(T, n.select('floatingElement')) || Fe(T, n.select('domReferenceElement')) || Q;
    }
    function ie(T) {
      if (Y(T)) {
        A();
        return;
      }
      if (s.current.insideReactTree) {
        A();
        return;
      }
      const F = Le(T),
        Q = `[${cn('inert')}]`;
      let ae = Array.from(ue(n.select('floatingElement')).querySelectorAll(Q));
      const Ae = re(F) ? F.getRootNode() : null;
      It(Ae) && (ae = ae.concat(Array.from(Ae.querySelectorAll(Q))));
      const et = n.context.triggerElements;
      if (F && (et.hasElement(F) || et.hasMatchingElement((pe) => Z(pe, F)))) return;
      let Be = re(F) ? F : null;
      for (; Be && !Ye(Be); ) {
        const pe = qe(Be);
        if (Ye(pe) || !re(pe)) break;
        Be = pe;
      }
      if (
        ae.length &&
        re(F) &&
        !Si(F) &&
        !Z(F, n.select('floatingElement')) &&
        ae.every((pe) => !Z(Be, pe))
      )
        return;
      if (ve(F) && !('touches' in T)) {
        const pe = Ye(F),
          xe = Oe(F),
          xt = /auto|scroll/,
          Lt = pe || xt.test(xe.overflowX),
          Dt = pe || xt.test(xe.overflowY),
          Nt = Lt && F.clientWidth > 0 && F.scrollWidth > F.clientWidth,
          Bt = Dt && F.clientHeight > 0 && F.scrollHeight > F.clientHeight,
          ce = xe.direction === 'rtl',
          Re = Bt && (ce ? T.offsetX <= F.offsetWidth - F.clientWidth : T.offsetX > F.clientWidth),
          Pe = Nt && T.offsetY > F.clientHeight;
        if (Re || Pe) return;
      }
      if (de(T)) return;
      if (le() === 'intentional' && v.current) {
        (te.clear(), (v.current = !1));
        return;
      }
      if (typeof p == 'function' && !p(T)) return;
      const tt = s.current.floatingContext?.nodeId,
        be = b ? Ue(b.nodesRef.current, tt) : [];
      if (be.length > 0) {
        let pe = !0;
        if (
          (be.forEach((xe) => {
            xe.context?.open && !xe.context.dataRef.current.__outsidePressBubbles && (pe = !1);
          }),
          !pe)
        )
          return;
      }
      (n.setOpen(!1, me(dr, T)), A());
    }
    function ye(T) {
      le() !== 'sloppy' ||
        T.pointerType === 'touch' ||
        !n.select('open') ||
        !i ||
        Fe(T, n.select('floatingElement')) ||
        Fe(T, n.select('domReferenceElement')) ||
        ie(T);
    }
    function Qe(T) {
      if (
        le() !== 'sloppy' ||
        !n.select('open') ||
        !i ||
        Fe(T, n.select('floatingElement')) ||
        Fe(T, n.select('domReferenceElement'))
      )
        return;
      const F = T.touches[0];
      F &&
        ((P.current = {
          startTime: Date.now(),
          startX: F.clientX,
          startY: F.clientY,
          dismissOnTouchEnd: !1,
          dismissOnMouseDown: !0,
        }),
        B.start(1e3, () => {
          P.current && ((P.current.dismissOnTouchEnd = !1), (P.current.dismissOnMouseDown = !1));
        }));
    }
    function $(T) {
      I.current = 'touch';
      const F = Le(T);
      function Q() {
        (Qe(T), F?.removeEventListener(T.type, Q));
      }
      F?.addEventListener(T.type, Q);
    }
    function J(T) {
      if (
        (B.clear(),
        T.type === 'pointerdown' && (I.current = T.pointerType),
        T.type === 'mousedown' && P.current && !P.current.dismissOnMouseDown)
      )
        return;
      const F = Le(T);
      function Q() {
        (T.type === 'pointerdown' ? ye(T) : ie(T), F?.removeEventListener(T.type, Q));
      }
      F?.addEventListener(T.type, Q);
    }
    function oe(T) {
      if (!w.current) return;
      const F = R.current;
      if ((H(), le() === 'intentional')) {
        if (T.type === 'pointercancel') {
          F && se();
          return;
        }
        if (!de(T)) {
          if (F) {
            se();
            return;
          }
          (typeof p == 'function' && !p(T)) || (te.clear(), (v.current = !0), A());
        }
      }
    }
    function fe(T) {
      if (
        le() !== 'sloppy' ||
        !P.current ||
        Fe(T, n.select('floatingElement')) ||
        Fe(T, n.select('domReferenceElement'))
      )
        return;
      const F = T.touches[0];
      if (!F) return;
      const Q = Math.abs(F.clientX - P.current.startX),
        ae = Math.abs(F.clientY - P.current.startY),
        Ae = Math.sqrt(Q * Q + ae * ae);
      (Ae > 5 && (P.current.dismissOnTouchEnd = !0),
        Ae > 10 && (ie(T), B.clear(), (P.current = null)));
    }
    function j(T) {
      const F = Le(T);
      function Q() {
        (fe(T), F?.removeEventListener(T.type, Q));
      }
      F?.addEventListener(T.type, Q);
    }
    function U(T) {
      le() !== 'sloppy' ||
        !P.current ||
        Fe(T, n.select('floatingElement')) ||
        Fe(T, n.select('domReferenceElement')) ||
        (P.current.dismissOnTouchEnd && ie(T), B.clear(), (P.current = null));
    }
    function he(T) {
      const F = Le(T);
      function Q() {
        (U(T), F?.removeEventListener(T.type, Q));
      }
      F?.addEventListener(T.type, Q);
    }
    const V = ue(r);
    return (
      c &&
        (V.addEventListener('keydown', C),
        V.addEventListener('compositionstart', ge),
        V.addEventListener('compositionend', q)),
      E &&
        (V.addEventListener('click', J, !0),
        V.addEventListener('pointerdown', J, !0),
        V.addEventListener('pointerup', oe, !0),
        V.addEventListener('pointercancel', oe, !0),
        V.addEventListener('mousedown', J, !0),
        V.addEventListener('mouseup', oe, !0),
        V.addEventListener('touchstart', $, !0),
        V.addEventListener('touchmove', j, !0),
        V.addEventListener('touchend', he, !0)),
      () => {
        (c &&
          (V.removeEventListener('keydown', C),
          V.removeEventListener('compositionstart', ge),
          V.removeEventListener('compositionend', q)),
          E &&
            (V.removeEventListener('click', J, !0),
            V.removeEventListener('pointerdown', J, !0),
            V.removeEventListener('pointerup', oe, !0),
            V.removeEventListener('pointercancel', oe, !0),
            V.removeEventListener('mousedown', J, !0),
            V.removeEventListener('mouseup', oe, !0),
            V.removeEventListener('touchstart', $, !0),
            V.removeEventListener('touchmove', j, !0),
            V.removeEventListener('touchend', he, !0)),
          _.clear(),
          te.clear(),
          H(),
          (v.current = !1));
      }
    );
  }, [s, r, c, E, p, o, i, S, x, C, A, y, b, n, B]),
    d.useEffect(A, [p, A]));
  const N = d.useMemo(
      () => ({
        onKeyDown: C,
        [Fc[f]]: (_) => {
          k() && n.setOpen(!1, me(ft, _.nativeEvent));
        },
        ...(f !== 'intentional' && {
          onClick(_) {
            k() && n.setOpen(!1, me(ft, _.nativeEvent));
          },
        }),
      }),
      [C, n, f, k],
    ),
    O = z((_) => {
      if (!o || !i || _.button !== 0) return;
      const te = Le(_.nativeEvent);
      Z(n.select('floatingElement'), te) && (w.current || ((w.current = !0), (R.current = !1)));
    }),
    L = z((_) => {
      !o ||
        !i ||
        ((_.defaultPrevented || _.nativeEvent.defaultPrevented) && w.current && (R.current = !0));
    }),
    G = d.useMemo(
      () => ({
        onKeyDown: C,
        onPointerDown: L,
        onMouseDown: L,
        onClickCapture: D,
        onMouseDownCapture(_) {
          (D(), O(_));
        },
        onPointerDownCapture(_) {
          (D(), O(_));
        },
        onMouseUpCapture: D,
        onTouchEndCapture: D,
        onTouchMoveCapture: D,
      }),
      [C, D, O, L],
    );
  return d.useMemo(() => (i ? { reference: N, floating: G, trigger: N } : {}), [i, N, G]);
}
function Bo(e, t, n) {
  let { reference: o, floating: r } = e;
  const s = ke(t),
    i = no(t),
    c = to(i),
    u = Se(t),
    l = s === 'y',
    a = o.x + o.width / 2 - r.width / 2,
    f = o.y + o.height / 2 - r.height / 2,
    h = o[c] / 2 - r[c] / 2;
  let m;
  switch (u) {
    case 'top':
      m = { x: a, y: o.y - r.height };
      break;
    case 'bottom':
      m = { x: a, y: o.y + o.height };
      break;
    case 'right':
      m = { x: o.x + o.width, y: f };
      break;
    case 'left':
      m = { x: o.x - r.width, y: f };
      break;
    default:
      m = { x: o.x, y: o.y };
  }
  switch (Ze(t)) {
    case 'start':
      m[i] -= h * (n && l ? -1 : 1);
      break;
    case 'end':
      m[i] += h * (n && l ? -1 : 1);
      break;
  }
  return m;
}
async function Bc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: s, rects: i, elements: c, strategy: u } = e,
    {
      boundary: l = 'clippingAncestors',
      rootBoundary: a = 'viewport',
      elementContext: f = 'floating',
      altBoundary: h = !1,
      padding: m = 0,
    } = Xe(t, e),
    b = Cr(m),
    p = c[h ? (f === 'floating' ? 'reference' : 'floating') : f],
    E = tn(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(p))) == null || n
            ? p
            : p.contextElement ||
              (await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating))),
        boundary: l,
        rootBoundary: a,
        strategy: u,
      }),
    ),
    y =
      f === 'floating'
        ? { x: o, y: r, width: i.floating.width, height: i.floating.height }
        : i.reference,
    w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)),
    R = (await (s.isElement == null ? void 0 : s.isElement(w)))
      ? (await (s.getScale == null ? void 0 : s.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    v = tn(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: y,
            offsetParent: w,
            strategy: u,
          })
        : y,
    );
  return {
    top: (E.top - v.top + b.top) / R.y,
    bottom: (v.bottom - E.bottom + b.bottom) / R.y,
    left: (E.left - v.left + b.left) / R.x,
    right: (v.right - E.right + b.right) / R.x,
  };
}
const Vc = 50,
  $c = async (e, t, n) => {
    const {
        placement: o = 'bottom',
        strategy: r = 'absolute',
        middleware: s = [],
        platform: i,
      } = n,
      c = i.detectOverflow ? i : { ...i, detectOverflow: Bc },
      u = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let l = await i.getElementRects({ reference: e, floating: t, strategy: r }),
      { x: a, y: f } = Bo(l, o, u),
      h = o,
      m = 0;
    const b = {};
    for (let g = 0; g < s.length; g++) {
      const p = s[g];
      if (!p) continue;
      const { name: E, fn: y } = p,
        {
          x: w,
          y: R,
          data: v,
          reset: S,
        } = await y({
          x: a,
          y: f,
          initialPlacement: o,
          placement: h,
          strategy: r,
          middlewareData: b,
          rects: l,
          platform: c,
          elements: { reference: e, floating: t },
        });
      ((a = w ?? a),
        (f = R ?? f),
        (b[E] = { ...b[E], ...v }),
        S &&
          m < Vc &&
          (m++,
          typeof S == 'object' &&
            (S.placement && (h = S.placement),
            S.rects &&
              (l =
                S.rects === !0
                  ? await i.getElementRects({ reference: e, floating: t, strategy: r })
                  : S.rects),
            ({ x: a, y: f } = Bo(l, h, u))),
          (g = -1)));
    }
    return { x: a, y: f, placement: h, strategy: r, middlewareData: b };
  },
  Wc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: r,
              middlewareData: s,
              rects: i,
              initialPlacement: c,
              platform: u,
              elements: l,
            } = t,
            {
              mainAxis: a = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: m = 'bestFit',
              fallbackAxisSideDirection: b = 'none',
              flipAlignment: g = !0,
              ...p
            } = Xe(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const E = Se(r),
            y = ke(c),
            w = Se(c) === c,
            R = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)),
            v = h || (w || !g ? [en(c)] : Mi(c)),
            S = b !== 'none';
          !h && S && v.push(...Ni(c, g, b, R));
          const x = [c, ...v],
            P = await u.detectOverflow(t, p),
            B = [];
          let W = ((o = s.flip) == null ? void 0 : o.overflows) || [];
          if ((a && B.push(P[E]), f)) {
            const k = Ai(r, i, R);
            B.push(P[k[0]], P[k[1]]);
          }
          if (((W = [...W, { placement: r, overflows: B }]), !B.every((k) => k <= 0))) {
            var A, M;
            const k = (((A = s.flip) == null ? void 0 : A.index) || 0) + 1,
              C = x[k];
            if (
              C &&
              (!(f === 'alignment' ? y !== ke(C) : !1) ||
                W.every((O) => (ke(O.placement) === y ? O.overflows[0] > 0 : !0)))
            )
              return { data: { index: k, overflows: W }, reset: { placement: C } };
            let D =
              (M = W.filter((N) => N.overflows[0] <= 0).sort(
                (N, O) => N.overflows[1] - O.overflows[1],
              )[0]) == null
                ? void 0
                : M.placement;
            if (!D)
              switch (m) {
                case 'bestFit': {
                  var I;
                  const N =
                    (I = W.filter((O) => {
                      if (S) {
                        const L = ke(O.placement);
                        return L === y || L === 'y';
                      }
                      return !0;
                    })
                      .map((O) => [
                        O.placement,
                        O.overflows.filter((L) => L > 0).reduce((L, G) => L + G, 0),
                      ])
                      .sort((O, L) => O[1] - L[1])[0]) == null
                      ? void 0
                      : I[0];
                  N && (D = N);
                  break;
                }
                case 'initialPlacement':
                  D = c;
                  break;
              }
            if (r !== D) return { reset: { placement: D } };
          }
          return {};
        },
      }
    );
  };
function Vo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function $o(e) {
  return Ii.some((t) => e[t] >= 0);
}
const Hc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'hide',
        options: e,
        async fn(t) {
          const { rects: n, platform: o } = t,
            { strategy: r = 'referenceHidden', ...s } = Xe(e, t);
          switch (r) {
            case 'referenceHidden': {
              const i = await o.detectOverflow(t, { ...s, elementContext: 'reference' }),
                c = Vo(i, n.reference);
              return { data: { referenceHiddenOffsets: c, referenceHidden: $o(c) } };
            }
            case 'escaped': {
              const i = await o.detectOverflow(t, { ...s, altBoundary: !0 }),
                c = Vo(i, n.floating);
              return { data: { escapedOffsets: c, escaped: $o(c) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Jr = new Set(['left', 'top']);
async function jc(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    i = Se(n),
    c = Ze(n),
    u = ke(n) === 'y',
    l = Jr.has(i) ? -1 : 1,
    a = s && u ? -1 : 1,
    f = Xe(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: b,
  } = typeof f == 'number'
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
  return (
    c && typeof b == 'number' && (m = c === 'end' ? b * -1 : b),
    u ? { x: m * a, y: h * l } : { x: h * l, y: m * a }
  );
}
const _c = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, o;
          const { x: r, y: s, placement: i, middlewareData: c } = t,
            u = await jc(t, e);
          return i === ((n = c.offset) == null ? void 0 : n.placement) &&
            (o = c.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + u.x, y: s + u.y, data: { ...u, placement: i } };
        },
      }
    );
  },
  Yc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r, platform: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: c = !1,
              limiter: u = {
                fn: (E) => {
                  let { x: y, y: w } = E;
                  return { x: y, y: w };
                },
              },
              ...l
            } = Xe(e, t),
            a = { x: n, y: o },
            f = await s.detectOverflow(t, l),
            h = ke(Se(r)),
            m = eo(h);
          let b = a[m],
            g = a[h];
          if (i) {
            const E = m === 'y' ? 'top' : 'left',
              y = m === 'y' ? 'bottom' : 'right',
              w = b + f[E],
              R = b - f[y];
            b = _n(w, b, R);
          }
          if (c) {
            const E = h === 'y' ? 'top' : 'left',
              y = h === 'y' ? 'bottom' : 'right',
              w = g + f[E],
              R = g - f[y];
            g = _n(w, g, R);
          }
          const p = u.fn({ ...t, [m]: b, [h]: g });
          return { ...p, data: { x: p.x - n, y: p.y - o, enabled: { [m]: i, [h]: c } } };
        },
      }
    );
  },
  Uc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: s, middlewareData: i } = t,
            { offset: c = 0, mainAxis: u = !0, crossAxis: l = !0 } = Xe(e, t),
            a = { x: n, y: o },
            f = ke(r),
            h = eo(f);
          let m = a[h],
            b = a[f];
          const g = Xe(c, t),
            p =
              typeof g == 'number'
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (u) {
            const w = h === 'y' ? 'height' : 'width',
              R = s.reference[h] - s.floating[w] + p.mainAxis,
              v = s.reference[h] + s.reference[w] - p.mainAxis;
            m < R ? (m = R) : m > v && (m = v);
          }
          if (l) {
            var E, y;
            const w = h === 'y' ? 'width' : 'height',
              R = Jr.has(Se(r)),
              v =
                s.reference[f] -
                s.floating[w] +
                ((R && ((E = i.offset) == null ? void 0 : E[f])) || 0) +
                (R ? 0 : p.crossAxis),
              S =
                s.reference[f] +
                s.reference[w] +
                (R ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) -
                (R ? p.crossAxis : 0);
            b < v ? (b = v) : b > S && (b = S);
          }
          return { [h]: m, [f]: b };
        },
      }
    );
  },
  qc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, o;
          const { placement: r, rects: s, platform: i, elements: c } = t,
            { apply: u = () => {}, ...l } = Xe(e, t),
            a = await i.detectOverflow(t, l),
            f = Se(r),
            h = Ze(r),
            m = ke(r) === 'y',
            { width: b, height: g } = s.floating;
          let p, E;
          f === 'top' || f === 'bottom'
            ? ((p = f),
              (E =
                h === ((await (i.isRTL == null ? void 0 : i.isRTL(c.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((E = f), (p = h === 'end' ? 'top' : 'bottom'));
          const y = g - a.top - a.bottom,
            w = b - a.left - a.right,
            R = dt(g - a[p], y),
            v = dt(b - a[E], w),
            S = !t.middlewareData.shift;
          let x = R,
            P = v;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = w),
            (o = t.middlewareData.shift) != null && o.enabled.y && (x = y),
            S && !h)
          ) {
            const W = Ce(a.left, 0),
              A = Ce(a.right, 0),
              M = Ce(a.top, 0),
              I = Ce(a.bottom, 0);
            m
              ? (P = b - 2 * (W !== 0 || A !== 0 ? W + A : Ce(a.left, a.right)))
              : (x = g - 2 * (M !== 0 || I !== 0 ? M + I : Ce(a.top, a.bottom)));
          }
          await u({ ...t, availableWidth: P, availableHeight: x });
          const B = await i.getDimensions(c.floating);
          return b !== B.width || g !== B.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function Zr(e) {
  const t = Oe(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = ve(e),
    s = r ? e.offsetWidth : n,
    i = r ? e.offsetHeight : o,
    c = Qt(n) !== s || Qt(o) !== i;
  return (c && ((n = s), (o = i)), { width: n, height: o, $: c });
}
function so(e) {
  return re(e) ? e : e.contextElement;
}
function ut(e) {
  const t = so(e);
  if (!ve(t)) return We(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: s } = Zr(t);
  let i = (s ? Qt(n.width) : n.width) / o,
    c = (s ? Qt(n.height) : n.height) / r;
  return (
    (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), { x: i, y: c }
  );
}
const Xc = We(0);
function Qr(e) {
  const t = Ee(e);
  return !pn() || !t.visualViewport
    ? Xc
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function zc(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Ee(e)) ? !1 : t);
}
function st(e, t, n, o) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const r = e.getBoundingClientRect(),
    s = so(e);
  let i = We(1);
  t && (o ? re(o) && (i = ut(o)) : (i = ut(e)));
  const c = zc(s, n, o) ? Qr(s) : We(0);
  let u = (r.left + c.x) / i.x,
    l = (r.top + c.y) / i.y,
    a = r.width / i.x,
    f = r.height / i.y;
  if (s) {
    const h = Ee(s),
      m = o && re(o) ? Ee(o) : o;
    let b = h,
      g = $n(b);
    for (; g && o && m !== b; ) {
      const p = ut(g),
        E = g.getBoundingClientRect(),
        y = Oe(g),
        w = E.left + (g.clientLeft + parseFloat(y.paddingLeft)) * p.x,
        R = E.top + (g.clientTop + parseFloat(y.paddingTop)) * p.y;
      ((u *= p.x),
        (l *= p.y),
        (a *= p.x),
        (f *= p.y),
        (u += w),
        (l += R),
        (b = Ee(g)),
        (g = $n(b)));
    }
  }
  return tn({ width: a, height: f, x: u, y: l });
}
function mn(e, t) {
  const n = gn(e).scrollLeft;
  return t ? t.left + n : st(He(e)).left + n;
}
function es(e, t) {
  const n = e.getBoundingClientRect(),
    o = n.left + t.scrollLeft - mn(e, n),
    r = n.top + t.scrollTop;
  return { x: o, y: r };
}
function Gc(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const s = r === 'fixed',
    i = He(o),
    c = t ? dn(t.floating) : !1;
  if (o === i || (c && s)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    l = We(1);
  const a = We(0),
    f = ve(o);
  if ((f || (!f && !s)) && ((Ke(o) !== 'body' || Je(i)) && (u = gn(o)), f)) {
    const m = st(o);
    ((l = ut(o)), (a.x = m.x + o.clientLeft), (a.y = m.y + o.clientTop));
  }
  const h = i && !f && !s ? es(i, u) : We(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + a.x + h.x,
    y: n.y * l.y - u.scrollTop * l.y + a.y + h.y,
  };
}
function Kc(e) {
  return Array.from(e.getClientRects());
}
function Jc(e) {
  const t = He(e),
    n = gn(e),
    o = e.ownerDocument.body,
    r = Ce(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    s = Ce(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + mn(e);
  const c = -n.scrollTop;
  return (
    Oe(o).direction === 'rtl' && (i += Ce(t.clientWidth, o.clientWidth) - r),
    { width: r, height: s, x: i, y: c }
  );
}
const Wo = 25;
function Zc(e, t) {
  const n = Ee(e),
    o = He(e),
    r = n.visualViewport;
  let s = o.clientWidth,
    i = o.clientHeight,
    c = 0,
    u = 0;
  if (r) {
    ((s = r.width), (i = r.height));
    const a = pn();
    (!a || (a && t === 'fixed')) && ((c = r.offsetLeft), (u = r.offsetTop));
  }
  const l = mn(o);
  if (l <= 0) {
    const a = o.ownerDocument,
      f = a.body,
      h = getComputedStyle(f),
      m =
        (a.compatMode === 'CSS1Compat' && parseFloat(h.marginLeft) + parseFloat(h.marginRight)) ||
        0,
      b = Math.abs(o.clientWidth - f.clientWidth - m);
    b <= Wo && (s -= b);
  } else l <= Wo && (s += l);
  return { width: s, height: i, x: c, y: u };
}
function Qc(e, t) {
  const n = st(e, !0, t === 'fixed'),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    s = ve(e) ? ut(e) : We(1),
    i = e.clientWidth * s.x,
    c = e.clientHeight * s.y,
    u = r * s.x,
    l = o * s.y;
  return { width: i, height: c, x: u, y: l };
}
function Ho(e, t, n) {
  let o;
  if (t === 'viewport') o = Zc(e, n);
  else if (t === 'document') o = Jc(He(e));
  else if (re(t)) o = Qc(t, n);
  else {
    const r = Qr(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return tn(o);
}
function ts(e, t) {
  const n = qe(e);
  return n === t || !re(n) || Ye(n) ? !1 : Oe(n).position === 'fixed' || ts(n, t);
}
function el(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = kt(e, [], !1).filter((c) => re(c) && Ke(c) !== 'body'),
    r = null;
  const s = Oe(e).position === 'fixed';
  let i = s ? qe(e) : e;
  for (; re(i) && !Ye(i); ) {
    const c = Oe(i),
      u = Zn(i);
    (!u && c.position === 'fixed' && (r = null),
      (
        s
          ? !u && !r
          : (!u &&
              c.position === 'static' &&
              !!r &&
              (r.position === 'absolute' || r.position === 'fixed')) ||
            (Je(i) && !u && ts(e, i))
      )
        ? (o = o.filter((a) => a !== i))
        : (r = c),
      (i = qe(i)));
  }
  return (t.set(e, o), o);
}
function tl(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const i = [...(n === 'clippingAncestors' ? (dn(t) ? [] : el(t, this._c)) : [].concat(n)), o],
    c = Ho(t, i[0], r);
  let u = c.top,
    l = c.right,
    a = c.bottom,
    f = c.left;
  for (let h = 1; h < i.length; h++) {
    const m = Ho(t, i[h], r);
    ((u = Ce(m.top, u)), (l = dt(m.right, l)), (a = dt(m.bottom, a)), (f = Ce(m.left, f)));
  }
  return { width: l - f, height: a - u, x: f, y: u };
}
function nl(e) {
  const { width: t, height: n } = Zr(e);
  return { width: t, height: n };
}
function ol(e, t, n) {
  const o = ve(t),
    r = He(t),
    s = n === 'fixed',
    i = st(e, !0, s, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const u = We(0);
  function l() {
    u.x = mn(r);
  }
  if (o || (!o && !s))
    if (((Ke(t) !== 'body' || Je(r)) && (c = gn(t)), o)) {
      const m = st(t, !0, s, t);
      ((u.x = m.x + t.clientLeft), (u.y = m.y + t.clientTop));
    } else r && l();
  s && !o && r && l();
  const a = r && !o && !s ? es(r, c) : We(0),
    f = i.left + c.scrollLeft - u.x - a.x,
    h = i.top + c.scrollTop - u.y - a.y;
  return { x: f, y: h, width: i.width, height: i.height };
}
function kn(e) {
  return Oe(e).position === 'static';
}
function jo(e, t) {
  if (!ve(e) || Oe(e).position === 'fixed') return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (He(e) === n && (n = n.ownerDocument.body), n);
}
function ns(e, t) {
  const n = Ee(e);
  if (dn(e)) return n;
  if (!ve(e)) {
    let r = qe(e);
    for (; r && !Ye(r); ) {
      if (re(r) && !kn(r)) return r;
      r = qe(r);
    }
    return n;
  }
  let o = jo(e, t);
  for (; o && ui(o) && kn(o); ) o = jo(o, t);
  return o && Ye(o) && kn(o) && !Zn(o) ? n : o || pi(e) || n;
}
const rl = async function (e) {
  const t = this.getOffsetParent || ns,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: ol(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function sl(e) {
  return Oe(e).direction === 'rtl';
}
const il = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gc,
  getDocumentElement: He,
  getClippingRect: tl,
  getOffsetParent: ns,
  getElementRects: rl,
  getClientRects: Kc,
  getDimensions: nl,
  getScale: ut,
  isElement: re,
  isRTL: sl,
};
function os(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function cl(e, t) {
  let n = null,
    o;
  const r = He(e);
  function s() {
    var c;
    (clearTimeout(o), (c = n) == null || c.disconnect(), (n = null));
  }
  function i(c, u) {
    (c === void 0 && (c = !1), u === void 0 && (u = 1), s());
    const l = e.getBoundingClientRect(),
      { left: a, top: f, width: h, height: m } = l;
    if ((c || t(), !h || !m)) return;
    const b = Ht(f),
      g = Ht(r.clientWidth - (a + h)),
      p = Ht(r.clientHeight - (f + m)),
      E = Ht(a),
      w = {
        rootMargin: -b + 'px ' + -g + 'px ' + -p + 'px ' + -E + 'px',
        threshold: Ce(0, dt(1, u)) || 1,
      };
    let R = !0;
    function v(S) {
      const x = S[0].intersectionRatio;
      if (x !== u) {
        if (!R) return i();
        x
          ? i(!1, x)
          : (o = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      (x === 1 && !os(l, e.getBoundingClientRect()) && i(), (R = !1));
    }
    try {
      n = new IntersectionObserver(v, { ...w, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(v, w);
    }
    n.observe(e);
  }
  return (i(!0), s);
}
function _o(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == 'function',
      layoutShift: c = typeof IntersectionObserver == 'function',
      animationFrame: u = !1,
    } = o,
    l = so(e),
    a = r || s ? [...(l ? kt(l) : []), ...(t ? kt(t) : [])] : [];
  a.forEach((E) => {
    (r && E.addEventListener('scroll', n, { passive: !0 }), s && E.addEventListener('resize', n));
  });
  const f = l && c ? cl(l, n) : null;
  let h = -1,
    m = null;
  i &&
    ((m = new ResizeObserver((E) => {
      let [y] = E;
      (y &&
        y.target === l &&
        m &&
        t &&
        (m.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var w;
          (w = m) == null || w.observe(t);
        }))),
        n());
    })),
    l && !u && m.observe(l),
    t && m.observe(t));
  let b,
    g = u ? st(e) : null;
  u && p();
  function p() {
    const E = st(e);
    (g && !os(g, E) && n(), (g = E), (b = requestAnimationFrame(p)));
  }
  return (
    n(),
    () => {
      var E;
      (a.forEach((y) => {
        (r && y.removeEventListener('scroll', n), s && y.removeEventListener('resize', n));
      }),
        f?.(),
        (E = m) == null || E.disconnect(),
        (m = null),
        u && cancelAnimationFrame(b));
    }
  );
}
const ll = _c,
  al = Yc,
  ul = Wc,
  fl = qc,
  dl = Hc,
  pl = Uc,
  gl = (e, t, n) => {
    const o = new Map(),
      r = { platform: il, ...n },
      s = { ...r.platform, _c: o };
    return $c(e, t, { ...r, platform: s });
  };
var ml = typeof document < 'u',
  hl = function () {},
  Kt = ml ? d.useLayoutEffect : hl;
function ln(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, o, r;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (!ln(e[o], t[o])) return !1;
      return !0;
    }
    if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length)) return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === '_owner' && e.$$typeof) && !ln(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function rs(e) {
  return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yo(e, t) {
  const n = rs(e);
  return Math.round(t * n) / n;
}
function An(e) {
  const t = d.useRef(e);
  return (
    Kt(() => {
      t.current = e;
    }),
    t
  );
}
function bl(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: o = [],
      platform: r,
      elements: { reference: s, floating: i } = {},
      transform: c = !0,
      whileElementsMounted: u,
      open: l,
    } = e,
    [a, f] = d.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, m] = d.useState(o);
  ln(h, o) || m(o);
  const [b, g] = d.useState(null),
    [p, E] = d.useState(null),
    y = d.useCallback((O) => {
      O !== S.current && ((S.current = O), g(O));
    }, []),
    w = d.useCallback((O) => {
      O !== x.current && ((x.current = O), E(O));
    }, []),
    R = s || b,
    v = i || p,
    S = d.useRef(null),
    x = d.useRef(null),
    P = d.useRef(a),
    B = u != null,
    W = An(u),
    A = An(r),
    M = An(l),
    I = d.useCallback(() => {
      if (!S.current || !x.current) return;
      const O = { placement: t, strategy: n, middleware: h };
      (A.current && (O.platform = A.current),
        gl(S.current, x.current, O).then((L) => {
          const G = { ...L, isPositioned: M.current !== !1 };
          k.current &&
            !ln(P.current, G) &&
            ((P.current = G),
            Ge.flushSync(() => {
              f(G);
            }));
        }));
    }, [h, t, n, A, M]);
  Kt(() => {
    l === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), f((O) => ({ ...O, isPositioned: !1 })));
  }, [l]);
  const k = d.useRef(!1);
  (Kt(
    () => (
      (k.current = !0),
      () => {
        k.current = !1;
      }
    ),
    [],
  ),
    Kt(() => {
      if ((R && (S.current = R), v && (x.current = v), R && v)) {
        if (W.current) return W.current(R, v, I);
        I();
      }
    }, [R, v, I, W, B]));
  const C = d.useMemo(
      () => ({ reference: S, floating: x, setReference: y, setFloating: w }),
      [y, w],
    ),
    D = d.useMemo(() => ({ reference: R, floating: v }), [R, v]),
    N = d.useMemo(() => {
      const O = { position: n, left: 0, top: 0 };
      if (!D.floating) return O;
      const L = Yo(D.floating, a.x),
        G = Yo(D.floating, a.y);
      return c
        ? {
            ...O,
            transform: 'translate(' + L + 'px, ' + G + 'px)',
            ...(rs(D.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: L, top: G };
    }, [n, c, D.floating, a.x, a.y]);
  return d.useMemo(
    () => ({ ...a, update: I, refs: C, elements: D, floatingStyles: N }),
    [a, I, C, D, N],
  );
}
const vl = (e, t) => {
    const n = ll(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  yl = (e, t) => {
    const n = al(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  El = (e, t) => ({ fn: pl(e).fn, options: [e, t] }),
  xl = (e, t) => {
    const n = ul(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Rl = (e, t) => {
    const n = fl(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  wl = (e, t) => {
    const n = dl(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  };
var an = Symbol('NOT_FOUND');
function Sl(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t);
}
function Tl(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t);
}
function Cl(e, t = 'expected all items to be functions, instead received the following types: ') {
  if (!e.every((n) => typeof n == 'function')) {
    const n = e
      .map((o) => (typeof o == 'function' ? `function ${o.name || 'unnamed'}()` : typeof o))
      .join(', ');
    throw new TypeError(`${t}[${n}]`);
  }
}
var Uo = (e) => (Array.isArray(e) ? e : [e]);
function Ol(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Cl(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: ',
    ),
    t
  );
}
function Pl(e, t) {
  const n = [],
    { length: o } = e;
  for (let r = 0; r < o; r++) n.push(e[r].apply(null, t));
  return n;
}
function Il(e) {
  let t;
  return {
    get(n) {
      return t && e(t.key, n) ? t.value : an;
    },
    put(n, o) {
      t = { key: n, value: o };
    },
    getEntries() {
      return t ? [t] : [];
    },
    clear() {
      t = void 0;
    },
  };
}
function kl(e, t) {
  let n = [];
  function o(c) {
    const u = n.findIndex((l) => t(c, l.key));
    if (u > -1) {
      const l = n[u];
      return (u > 0 && (n.splice(u, 1), n.unshift(l)), l.value);
    }
    return an;
  }
  function r(c, u) {
    o(c) === an && (n.unshift({ key: c, value: u }), n.length > e && n.pop());
  }
  function s() {
    return n;
  }
  function i() {
    n = [];
  }
  return { get: o, put: r, getEntries: s, clear: i };
}
var Al = (e, t) => e === t;
function Ml(e) {
  return function (n, o) {
    if (n === null || o === null || n.length !== o.length) return !1;
    const { length: r } = n;
    for (let s = 0; s < r; s++) if (!e(n[s], o[s])) return !1;
    return !0;
  };
}
function Fl(e, t) {
  const n = typeof t == 'object' ? t : { equalityCheck: t },
    { equalityCheck: o = Al, maxSize: r = 1, resultEqualityCheck: s } = n,
    i = Ml(o);
  let c = 0;
  const u = r <= 1 ? Il(i) : kl(r, i);
  function l() {
    let a = u.get(arguments);
    if (a === an) {
      if (((a = e.apply(null, arguments)), c++, s)) {
        const h = u.getEntries().find((m) => s(m.value, a));
        h && ((a = h.value), c !== 0 && c--);
      }
      u.put(arguments, a);
    }
    return a;
  }
  return (
    (l.clearCache = () => {
      (u.clear(), l.resetResultsCount());
    }),
    (l.resultsCount = () => c),
    (l.resetResultsCount = () => {
      c = 0;
    }),
    l
  );
}
var Ll = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Dl = typeof WeakRef < 'u' ? WeakRef : Ll,
  Nl = 0,
  qo = 1;
function jt() {
  return { s: Nl, v: void 0, o: null, p: null };
}
function ss(e, t = {}) {
  let n = jt();
  const { resultEqualityCheck: o } = t;
  let r,
    s = 0;
  function i() {
    let c = n;
    const { length: u } = arguments;
    for (let f = 0, h = u; f < h; f++) {
      const m = arguments[f];
      if (typeof m == 'function' || (typeof m == 'object' && m !== null)) {
        let b = c.o;
        b === null && (c.o = b = new WeakMap());
        const g = b.get(m);
        g === void 0 ? ((c = jt()), b.set(m, c)) : (c = g);
      } else {
        let b = c.p;
        b === null && (c.p = b = new Map());
        const g = b.get(m);
        g === void 0 ? ((c = jt()), b.set(m, c)) : (c = g);
      }
    }
    const l = c;
    let a;
    if (c.s === qo) a = c.v;
    else if (((a = e.apply(null, arguments)), s++, o)) {
      const f = r?.deref?.() ?? r;
      (f != null && o(f, a) && ((a = f), s !== 0 && s--),
        (r = (typeof a == 'object' && a !== null) || typeof a == 'function' ? new Dl(a) : a));
    }
    return ((l.s = qo), (l.v = a), a);
  }
  return (
    (i.clearCache = () => {
      ((n = jt()), i.resetResultsCount());
    }),
    (i.resultsCount = () => s),
    (i.resetResultsCount = () => {
      s = 0;
    }),
    i
  );
}
function is(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    o = (...r) => {
      let s = 0,
        i = 0,
        c,
        u = {},
        l = r.pop();
      (typeof l == 'object' && ((u = l), (l = r.pop())),
        Sl(
          l,
          `createSelector expects an output function after the inputs, but received: [${typeof l}]`,
        ));
      const a = { ...n, ...u },
        { memoize: f, memoizeOptions: h = [], argsMemoize: m = ss, argsMemoizeOptions: b = [] } = a,
        g = Uo(h),
        p = Uo(b),
        E = Ol(r),
        y = f(
          function () {
            return (s++, l.apply(null, arguments));
          },
          ...g,
        ),
        w = m(
          function () {
            i++;
            const v = Pl(E, arguments);
            return ((c = y.apply(null, v)), c);
          },
          ...p,
        );
      return Object.assign(w, {
        resultFunc: l,
        memoizedResultFunc: y,
        dependencies: E,
        dependencyRecomputations: () => i,
        resetDependencyRecomputations: () => {
          i = 0;
        },
        lastResult: () => c,
        recomputations: () => s,
        resetRecomputations: () => {
          s = 0;
        },
        memoize: f,
        argsMemoize: m,
      });
    };
  return (Object.assign(o, { withTypes: () => o }), o);
}
var Bl = is(ss),
  Vl = Object.assign(
    (e, t = Bl) => {
      Tl(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const n = Object.keys(e),
        o = n.map((s) => e[s]);
      return t(o, (...s) => s.reduce((i, c, u) => ((i[n[u]] = c), i), {}));
    },
    { withTypes: () => Vl },
  );
is({ memoize: Fl, memoizeOptions: { maxSize: 1, equalityCheck: Object.is } });
const ee = (e, t, n, o, r, s, ...i) => {
  if (i.length > 0) throw new Error(it(1));
  let c;
  if (e) c = e;
  else throw new Error('Missing arguments');
  return c;
};
var Mn = { exports: {} },
  Fn = {};
var Xo;
function $l() {
  if (Xo) return Fn;
  Xo = 1;
  var e = rr();
  function t(f, h) {
    return (f === h && (f !== 0 || 1 / f === 1 / h)) || (f !== f && h !== h);
  }
  var n = typeof Object.is == 'function' ? Object.is : t,
    o = e.useState,
    r = e.useEffect,
    s = e.useLayoutEffect,
    i = e.useDebugValue;
  function c(f, h) {
    var m = h(),
      b = o({ inst: { value: m, getSnapshot: h } }),
      g = b[0].inst,
      p = b[1];
    return (
      s(
        function () {
          ((g.value = m), (g.getSnapshot = h), u(g) && p({ inst: g }));
        },
        [f, m, h],
      ),
      r(
        function () {
          return (
            u(g) && p({ inst: g }),
            f(function () {
              u(g) && p({ inst: g });
            })
          );
        },
        [f],
      ),
      i(m),
      m
    );
  }
  function u(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var m = h();
      return !n(f, m);
    } catch {
      return !0;
    }
  }
  function l(f, h) {
    return h();
  }
  var a =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? l
      : c;
  return (
    (Fn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : a), Fn
  );
}
var zo;
function cs() {
  return (zo || ((zo = 1), (Mn.exports = $l())), Mn.exports);
}
var Wl = cs(),
  Ln = { exports: {} },
  Dn = {};
var Go;
function Hl() {
  if (Go) return Dn;
  Go = 1;
  var e = rr(),
    t = cs();
  function n(l, a) {
    return (l === a && (l !== 0 || 1 / l === 1 / a)) || (l !== l && a !== a);
  }
  var o = typeof Object.is == 'function' ? Object.is : n,
    r = t.useSyncExternalStore,
    s = e.useRef,
    i = e.useEffect,
    c = e.useMemo,
    u = e.useDebugValue;
  return (
    (Dn.useSyncExternalStoreWithSelector = function (l, a, f, h, m) {
      var b = s(null);
      if (b.current === null) {
        var g = { hasValue: !1, value: null };
        b.current = g;
      } else g = b.current;
      b = c(
        function () {
          function E(S) {
            if (!y) {
              if (((y = !0), (w = S), (S = h(S)), m !== void 0 && g.hasValue)) {
                var x = g.value;
                if (m(x, S)) return (R = x);
              }
              return (R = S);
            }
            if (((x = R), o(w, S))) return x;
            var P = h(S);
            return m !== void 0 && m(x, P) ? ((w = S), x) : ((w = S), (R = P));
          }
          var y = !1,
            w,
            R,
            v = f === void 0 ? null : f;
          return [
            function () {
              return E(a());
            },
            v === null
              ? void 0
              : function () {
                  return E(v());
                },
          ];
        },
        [a, f, h, m],
      );
      var p = r(l, b[0], b[1]);
      return (
        i(
          function () {
            ((g.hasValue = !0), (g.value = p));
          },
          [p],
        ),
        u(p),
        p
      );
    }),
    Dn
  );
}
var Ko;
function jl() {
  return (Ko || ((Ko = 1), (Ln.exports = Hl())), Ln.exports);
}
var _l = jl();
const Yl = Gn(19),
  Ul = Yl ? Xl : zl;
function ls(e, t, n, o, r) {
  return Ul(e, t, n, o, r);
}
function ql(e, t, n, o, r) {
  const s = d.useCallback(() => t(e.getSnapshot(), n, o, r), [e, t, n, o, r]);
  return Wl.useSyncExternalStore(e.subscribe, s, s);
}
function Xl(e, t, n, o, r) {
  return ql(e, t, n, o, r);
}
function zl(e, t, n, o, r) {
  return _l.useSyncExternalStoreWithSelector(e.subscribe, e.getSnapshot, e.getSnapshot, (s) =>
    t(s, n, o, r),
  );
}
class Gl {
  constructor(t) {
    ((this.state = t), (this.listeners = new Set()), (this.updateTick = 0));
  }
  subscribe = (t) => (
    this.listeners.add(t),
    () => {
      this.listeners.delete(t);
    }
  );
  getSnapshot = () => this.state;
  setState(t) {
    if (this.state === t) return;
    ((this.state = t), (this.updateTick += 1));
    const n = this.updateTick;
    for (const o of this.listeners) {
      if (n !== this.updateTick) return;
      o(t);
    }
  }
  update(t) {
    for (const n in t)
      if (!Object.is(this.state[n], t[n])) {
        this.setState({ ...this.state, ...t });
        return;
      }
  }
  set(t, n) {
    Object.is(this.state[t], n) || this.setState({ ...this.state, [t]: n });
  }
  notifyAll() {
    const t = { ...this.state };
    this.setState(t);
  }
  use(t, n, o, r) {
    return ls(this, t, n, o, r);
  }
}
class as extends Gl {
  constructor(t, n = {}, o) {
    (super(t), (this.context = n), (this.selectors = o));
  }
  useSyncedValue(t, n) {
    (d.useDebugValue(t),
      K(() => {
        this.state[t] !== n && this.set(t, n);
      }, [t, n]));
  }
  useSyncedValueWithCleanup(t, n) {
    const o = this;
    K(
      () => (
        o.state[t] !== n && o.set(t, n),
        () => {
          o.set(t, void 0);
        }
      ),
      [o, t, n],
    );
  }
  useSyncedValues(t) {
    const n = this,
      o = Object.values(t);
    K(() => {
      n.update(t);
    }, [n, ...o]);
  }
  useControlledProp(t, n) {
    d.useDebugValue(t);
    const o = n !== void 0;
    K(() => {
      o && !Object.is(this.state[t], n) && super.setState({ ...this.state, [t]: n });
    }, [t, n, o]);
  }
  select(t, n, o, r) {
    const s = this.selectors[t];
    return s(this.state, n, o, r);
  }
  useState(t, n, o, r) {
    return (d.useDebugValue(t), ls(this, this.selectors[t], n, o, r));
  }
  useContextCallback(t, n) {
    d.useDebugValue(t);
    const o = z(n ?? ur);
    this.context[t] = o;
  }
  useStateSetter(t) {
    const n = d.useRef(void 0);
    return (
      n.current === void 0 &&
        (n.current = (o) => {
          this.set(t, o);
        }),
      n.current
    );
  }
  observe(t, n) {
    let o;
    typeof t == 'function' ? (o = t) : (o = this.selectors[t]);
    let r = o(this.state);
    return (
      n(r, r, this),
      this.subscribe((s) => {
        const i = o(s);
        if (!Object.is(r, i)) {
          const c = r;
          ((r = i), n(i, c, this));
        }
      })
    );
  }
}
const Kl = {
  open: ee((e) => e.open),
  domReferenceElement: ee((e) => e.domReferenceElement),
  referenceElement: ee((e) => e.positionReference ?? e.referenceElement),
  floatingElement: ee((e) => e.floatingElement),
  floatingId: ee((e) => e.floatingId),
};
class io extends as {
  constructor(t) {
    const { nested: n, noEmit: o, onOpenChange: r, triggerElements: s, ...i } = t;
    super(
      { ...i, positionReference: i.referenceElement, domReferenceElement: i.referenceElement },
      {
        onOpenChange: r,
        dataRef: { current: {} },
        events: zr(),
        nested: n,
        noEmit: o,
        triggerElements: s,
      },
      Kl,
    );
  }
  setOpen = (t, n) => {
    if (
      ((!t || !this.state.open || Tr(n.event)) &&
        (this.context.dataRef.current.openEvent = t ? n.event : void 0),
      !this.context.noEmit)
    ) {
      const o = {
        open: t,
        reason: n.reason,
        nativeEvent: n.event,
        nested: this.context.nested,
        triggerElement: n.trigger,
      };
      this.context.events.emit('openchange', o);
    }
    this.context.onOpenChange?.(t, n);
  };
}
function Jl(e, t) {
  const n = d.useRef(null),
    o = d.useRef(null);
  return d.useCallback(
    (r) => {
      if (e !== void 0) {
        if (n.current !== null) {
          const s = n.current,
            i = o.current,
            c = t.context.triggerElements.getById(s);
          (i && c === i && t.context.triggerElements.delete(s),
            (n.current = null),
            (o.current = null));
        }
        r !== null && ((n.current = e), (o.current = r), t.context.triggerElements.add(e, r));
      }
    },
    [t, e],
  );
}
function Zl(e, t, n, o) {
  const r = n.useState('isMountedByTrigger', e),
    s = Jl(e, n),
    i = z((c) => {
      if ((s(c), !c || !n.select('open'))) return;
      const u = n.select('activeTriggerId');
      if (u === e) {
        n.update({ activeTriggerElement: c, ...o });
        return;
      }
      u == null && n.update({ activeTriggerId: e, activeTriggerElement: c, ...o });
    });
  return (
    K(() => {
      r && n.update({ activeTriggerElement: t.current, ...o });
    }, [r, n, t, ...Object.values(o)]),
    { registerTrigger: i, isMountedByThisTrigger: r }
  );
}
function Ql(e) {
  const t = e.useState('open');
  K(() => {
    if (t && !e.select('activeTriggerId') && e.context.triggerElements.size === 1) {
      const n = e.context.triggerElements.entries().next();
      if (!n.done) {
        const [o, r] = n.value;
        e.update({ activeTriggerId: o, activeTriggerElement: r });
      }
    }
  }, [t, e]);
}
function ea(e, t, n) {
  const { mounted: o, setMounted: r, transitionStatus: s } = ai(e);
  t.useSyncedValues({ mounted: o, transitionStatus: s });
  const i = z(() => {
      (r(!1),
        t.update({ activeTriggerId: null, activeTriggerElement: null, mounted: !1 }),
        n?.(),
        t.context.onOpenChangeComplete?.(!1));
    }),
    c = t.useState('preventUnmountingOnClose');
  return (
    _r({
      enabled: !c,
      open: e,
      ref: t.context.popupRef,
      onComplete() {
        e || i();
      },
    }),
    { forceUnmount: i, transitionStatus: s }
  );
}
class co {
  constructor() {
    ((this.elementsSet = new Set()), (this.idMap = new Map()));
  }
  add(t, n) {
    const o = this.idMap.get(t);
    o !== n &&
      (o !== void 0 && this.elementsSet.delete(o), this.elementsSet.add(n), this.idMap.set(t, n));
  }
  delete(t) {
    const n = this.idMap.get(t);
    n && (this.elementsSet.delete(n), this.idMap.delete(t));
  }
  hasElement(t) {
    return this.elementsSet.has(t);
  }
  hasMatchingElement(t) {
    for (const n of this.elementsSet) if (t(n)) return !0;
    return !1;
  }
  getById(t) {
    return this.idMap.get(t);
  }
  entries() {
    return this.idMap.entries();
  }
  elements() {
    return this.elementsSet.values();
  }
  get size() {
    return this.idMap.size;
  }
}
function ta() {
  return new io({
    open: !1,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new co(),
    floatingId: '',
    nested: !1,
    noEmit: !1,
    onOpenChange: void 0,
  });
}
function na() {
  return {
    open: !1,
    openProp: void 0,
    mounted: !1,
    transitionStatus: 'idle',
    floatingRootContext: ta(),
    preventUnmountingOnClose: !1,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    triggerIdProp: void 0,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: we,
    inactiveTriggerProps: we,
    popupProps: we,
  };
}
const _t = ee((e) => e.triggerIdProp ?? e.activeTriggerId),
  oa = {
    open: ee((e) => e.openProp ?? e.open),
    mounted: ee((e) => e.mounted),
    transitionStatus: ee((e) => e.transitionStatus),
    floatingRootContext: ee((e) => e.floatingRootContext),
    preventUnmountingOnClose: ee((e) => e.preventUnmountingOnClose),
    payload: ee((e) => e.payload),
    activeTriggerId: _t,
    activeTriggerElement: ee((e) => (e.mounted ? e.activeTriggerElement : null)),
    isTriggerActive: ee((e, t) => t !== void 0 && _t(e) === t),
    isOpenedByTrigger: ee((e, t) => t !== void 0 && _t(e) === t && e.open),
    isMountedByTrigger: ee((e, t) => t !== void 0 && _t(e) === t && e.mounted),
    triggerProps: ee((e, t) => (t ? e.activeTriggerProps : e.inactiveTriggerProps)),
    popupProps: ee((e) => e.popupProps),
    popupElement: ee((e) => e.popupElement),
    positionerElement: ee((e) => e.positionerElement),
  };
function ra(e) {
  const { open: t = !1, onOpenChange: n, elements: o = {} } = e,
    r = ht(),
    s = ct() != null,
    i = Ne(
      () =>
        new io({
          open: t,
          onOpenChange: n,
          referenceElement: o.reference ?? null,
          floatingElement: o.floating ?? null,
          triggerElements: new co(),
          floatingId: r,
          nested: s,
          noEmit: !1,
        }),
    ).current;
  return (
    K(() => {
      const c = { open: t, floatingId: r };
      (o.reference !== void 0 &&
        ((c.referenceElement = o.reference),
        (c.domReferenceElement = re(o.reference) ? o.reference : null)),
        o.floating !== void 0 && (c.floatingElement = o.floating),
        i.update(c));
    }, [t, r, o.reference, o.floating, i]),
    (i.context.onOpenChange = n),
    (i.context.nested = s),
    (i.context.noEmit = !1),
    i
  );
}
function sa(e = {}) {
  const { nodeId: t, externalTree: n } = e,
    o = ra(e),
    r = e.rootContext || o,
    s = {
      reference: r.useState('referenceElement'),
      floating: r.useState('floatingElement'),
      domReference: r.useState('domReferenceElement'),
    },
    [i, c] = d.useState(null),
    u = d.useRef(null),
    l = yt(n);
  K(() => {
    s.domReference && (u.current = s.domReference);
  }, [s.domReference]);
  const a = bl({ ...e, elements: { ...s, ...(i && { reference: i }) } }),
    f = d.useCallback(
      (x) => {
        const P = re(x)
          ? {
              getBoundingClientRect: () => x.getBoundingClientRect(),
              getClientRects: () => x.getClientRects(),
              contextElement: x,
            }
          : x;
        (c(P), a.refs.setReference(P));
      },
      [a.refs],
    ),
    [h, m] = d.useState(null),
    [b, g] = d.useState(null);
  (r.useSyncedValue('referenceElement', h),
    r.useSyncedValue('domReferenceElement', re(h) ? h : null),
    r.useSyncedValue('floatingElement', b));
  const p = d.useCallback(
      (x) => {
        ((re(x) || x === null) && ((u.current = x), m(x)),
          (re(a.refs.reference.current) ||
            a.refs.reference.current === null ||
            (x !== null && !re(x))) &&
            a.refs.setReference(x));
      },
      [a.refs, m],
    ),
    E = d.useCallback(
      (x) => {
        (g(x), a.refs.setFloating(x));
      },
      [a.refs],
    ),
    y = d.useMemo(
      () => ({
        ...a.refs,
        setReference: p,
        setFloating: E,
        setPositionReference: f,
        domReference: u,
      }),
      [a.refs, p, E, f],
    ),
    w = d.useMemo(
      () => ({ ...a.elements, domReference: s.domReference }),
      [a.elements, s.domReference],
    ),
    R = r.useState('open'),
    v = r.useState('floatingId'),
    S = d.useMemo(
      () => ({
        ...a,
        dataRef: r.context.dataRef,
        open: R,
        onOpenChange: r.setOpen,
        events: r.context.events,
        floatingId: v,
        refs: y,
        elements: w,
        nodeId: t,
        rootStore: r,
      }),
      [a, y, w, t, r, R, v],
    );
  return (
    K(() => {
      r.context.dataRef.current.floatingContext = S;
      const x = l?.nodesRef.current.find((P) => P.id === t);
      x && (x.context = S);
    }),
    d.useMemo(() => ({ ...a, context: S, refs: y, elements: w, rootStore: r }), [a, y, w, S, r])
  );
}
function ia(e) {
  const { popupStore: t, noEmit: n = !1, treatPopupAsFloatingElement: o = !1, onOpenChange: r } = e,
    s = ht(),
    i = ct() != null,
    c = t.useState('open'),
    u = t.useState('activeTriggerElement'),
    l = t.useState(o ? 'popupElement' : 'positionerElement'),
    a = t.context.triggerElements,
    f = Ne(
      () =>
        new io({
          open: c,
          referenceElement: u,
          floatingElement: l,
          triggerElements: a,
          onOpenChange: r,
          floatingId: s,
          nested: i,
          noEmit: n,
        }),
    ).current;
  return (
    K(() => {
      const h = { open: c, floatingId: s, referenceElement: u, floatingElement: l };
      (re(u) && (h.domReferenceElement = u),
        f.state.positionReference === f.state.referenceElement && (h.positionReference = u),
        f.update(h));
    }, [c, s, u, l, f]),
    (f.context.onOpenChange = r),
    (f.context.nested = i),
    (f.context.noEmit = n),
    f
  );
}
const ca = `button,a,[role="button"],select,[tabindex]:not([tabindex="-1"]),${wr}`;
function la(e) {
  return e ? !!e.closest(ca) : !1;
}
class lo {
  constructor() {
    ((this.pointerType = void 0),
      (this.interactedInside = !1),
      (this.handler = void 0),
      (this.blockMouseMove = !0),
      (this.performedPointerEventsMutation = !1),
      (this.pointerEventsScopeElement = null),
      (this.pointerEventsReferenceElement = null),
      (this.pointerEventsFloatingElement = null),
      (this.restTimeoutPending = !1),
      (this.openChangeTimeout = new De()),
      (this.restTimeout = new De()),
      (this.handleCloseOptions = void 0));
  }
  static create() {
    return new lo();
  }
  dispose = () => {
    (this.openChangeTimeout.clear(), this.restTimeout.clear());
  };
  disposeEffect = () => this.dispose;
}
function ao(e) {
  e.performedPointerEventsMutation &&
    (e.pointerEventsScopeElement?.style.removeProperty('pointer-events'),
    e.pointerEventsReferenceElement?.style.removeProperty('pointer-events'),
    e.pointerEventsFloatingElement?.style.removeProperty('pointer-events'),
    (e.performedPointerEventsMutation = !1),
    (e.pointerEventsScopeElement = null),
    (e.pointerEventsReferenceElement = null),
    (e.pointerEventsFloatingElement = null));
}
function aa(e, t) {
  const { scopeElement: n, referenceElement: o, floatingElement: r } = t;
  (ao(e),
    (e.performedPointerEventsMutation = !0),
    (e.pointerEventsScopeElement = n),
    (e.pointerEventsReferenceElement = o),
    (e.pointerEventsFloatingElement = r),
    (n.style.pointerEvents = 'none'),
    (o.style.pointerEvents = 'auto'),
    (r.style.pointerEvents = 'auto'));
}
function us(e) {
  const t = Ne(lo.create).current,
    n = e.context.dataRef.current;
  return (
    n.hoverInteractionState || (n.hoverInteractionState = t),
    un(n.hoverInteractionState.disposeEffect),
    n.hoverInteractionState
  );
}
function ua(e, t = {}) {
  const n = 'rootStore' in e ? e.rootStore : e,
    o = n.useState('open'),
    r = n.useState('floatingElement'),
    s = n.useState('domReferenceElement'),
    { dataRef: i } = n.context,
    { enabled: c = !0, closeDelay: u = 0 } = t,
    l = us(n),
    a = yt(),
    f = ct(),
    h = z(() => Yr(i.current.openEvent?.type, l.interactedInside)),
    m = z(() => {
      const w = i.current.openEvent?.type;
      return w?.includes('mouse') && w !== 'mousedown';
    }),
    b = z((w) => Sr(w, n.context.triggerElements)),
    g = d.useCallback(
      (w) => {
        const R = Gt(u, 'close', l.pointerType),
          v = () => {
            (n.setOpen(!1, me(Te, w)), a?.events.emit('floating.closed', w));
          };
        R ? l.openChangeTimeout.start(R, v) : (l.openChangeTimeout.clear(), v());
      },
      [u, n, l, a],
    ),
    p = z(() => {
      ao(l);
    }),
    E = z((w) => {
      const R = Le(w);
      if (!la(R)) {
        l.interactedInside = !1;
        return;
      }
      l.interactedInside = R?.closest('[aria-haspopup]') != null;
    });
  (K(() => {
    o || ((l.pointerType = void 0), (l.restTimeoutPending = !1), (l.interactedInside = !1), p());
  }, [o, l, p]),
    d.useEffect(() => p, [p]),
    K(() => {
      if (c && o && l.handleCloseOptions?.blockPointerEvents && m() && re(s) && r) {
        const w = s,
          R = r,
          v = ue(r),
          S = a?.nodesRef.current.find((P) => P.id === f)?.context?.elements.floating;
        S && (S.style.pointerEvents = '');
        const x =
          l.handleCloseOptions?.getScope?.() ??
          l.pointerEventsScopeElement ??
          S ??
          w.closest('[data-rootownerid]') ??
          v.body;
        return (
          aa(l, { scopeElement: x, referenceElement: w, floatingElement: R }),
          () => {
            p();
          }
        );
      }
    }, [c, o, s, r, l, m, a, f, p]));
  const y = gt();
  d.useEffect(() => {
    if (!c) return;
    function w() {
      (l.openChangeTimeout.clear(), y.clear(), a?.events.off('floating.closed', v), p());
    }
    function R(x) {
      if (a && f && Ue(a.nodesRef.current, f).length > 0) {
        a.events.on('floating.closed', v);
        return;
      }
      if (!b(x.relatedTarget)) {
        if (l.handler) {
          l.handler(x);
          return;
        }
        (p(), h() || g(x));
      }
    }
    function v(x) {
      !a ||
        !f ||
        Ue(a.nodesRef.current, f).length > 0 ||
        y.start(0, () => {
          (a.events.off('floating.closed', v),
            n.setOpen(!1, me(Te, x)),
            a.events.emit('floating.closed', x));
        });
    }
    const S = r;
    return (
      S &&
        (S.addEventListener('mouseenter', w),
        S.addEventListener('mouseleave', R),
        S.addEventListener('pointerdown', E, !0)),
      () => {
        (S &&
          (S.removeEventListener('mouseenter', w),
          S.removeEventListener('mouseleave', R),
          S.removeEventListener('pointerdown', E, !0)),
          a?.events.off('floating.closed', v));
      }
    );
  }, [c, r, n, i, h, b, g, p, E, l, a, f, y]);
}
const fa = { current: null };
function da(e, t = {}) {
  const n = 'rootStore' in e ? e.rootStore : e,
    { dataRef: o, events: r } = n.context,
    {
      enabled: s = !0,
      delay: i = 0,
      handleClose: c = null,
      mouseOnly: u = !1,
      restMs: l = 0,
      move: a = !0,
      triggerElementRef: f = fa,
      externalTree: h,
      isActiveTrigger: m = !0,
      getHandleCloseContext: b,
    } = t,
    g = yt(h),
    p = us(n),
    E = $e(c),
    y = $e(i),
    w = $e(l),
    R = $e(s);
  m && (p.handleCloseOptions = E.current?.__options);
  const v = z(() => Yr(o.current.openEvent?.type, p.interactedInside)),
    S = z((A) => Sr(A, n.context.triggerElements)),
    x = z((A, M, I) => {
      const k = n.context.triggerElements;
      if (k.hasElement(M)) return !A || !Z(A, M);
      if (!re(I)) return !1;
      const C = I;
      return k.hasMatchingElement((D) => Z(D, C)) && (!A || !Z(A, C));
    }),
    P = d.useCallback(
      (A, M = !0) => {
        const I = Gt(y.current, 'close', p.pointerType);
        I
          ? p.openChangeTimeout.start(I, () => {
              (n.setOpen(!1, me(Te, A)), g?.events.emit('floating.closed', A));
            })
          : M &&
            (p.openChangeTimeout.clear(),
            n.setOpen(!1, me(Te, A)),
            g?.events.emit('floating.closed', A));
      },
      [y, n, p, g],
    ),
    B = z(() => {
      if (!p.handler) return;
      (ue(n.select('domReferenceElement')).removeEventListener('mousemove', p.handler),
        (p.handler = void 0));
    });
  d.useEffect(() => B, [B]);
  const W = z(() => {
    ao(p);
  });
  return (
    d.useEffect(() => {
      if (!s) return;
      function A(M) {
        M.open ||
          (B(),
          p.openChangeTimeout.clear(),
          p.restTimeout.clear(),
          (p.blockMouseMove = !0),
          (p.restTimeoutPending = !1));
      }
      return (
        r.on('openchange', A),
        () => {
          r.off('openchange', A);
        }
      );
    }, [s, r, p, B]),
    d.useEffect(() => {
      if (!s) return;
      const A = f.current ?? (m ? n.select('domReferenceElement') : null);
      if (!re(A)) return;
      function M(k) {
        if (
          (p.openChangeTimeout.clear(),
          (p.blockMouseMove = !1),
          (u && !At(p.pointerType)) || (Io(w.current) > 0 && !Gt(y.current, 'open')))
        )
          return;
        const D = Gt(y.current, 'open', p.pointerType),
          N = k.currentTarget ?? null,
          O = n.select('domReferenceElement'),
          L = N == null ? !1 : x(O, N, k.target),
          G = n.select('open'),
          _ = !G || L;
        L && G
          ? n.setOpen(!0, me(Te, k, N))
          : D
            ? p.openChangeTimeout.start(D, () => {
                _ && n.setOpen(!0, me(Te, k, N));
              })
            : _ && n.setOpen(!0, me(Te, k, N));
      }
      function I(k) {
        if (v()) {
          W();
          return;
        }
        B();
        const C = n.select('domReferenceElement'),
          D = ue(C);
        (p.restTimeout.clear(), (p.restTimeoutPending = !1));
        const N = o.current.floatingContext ?? b?.();
        if (S(k.relatedTarget)) return;
        if (E.current && N) {
          n.select('open') || p.openChangeTimeout.clear();
          const G = f.current;
          ((p.handler = E.current({
            ...N,
            tree: g,
            x: k.clientX,
            y: k.clientY,
            onClose() {
              (W(), B(), R.current && !v() && G === n.select('domReferenceElement') && P(k, !0));
            },
          })),
            D.addEventListener('mousemove', p.handler),
            p.handler(k));
          return;
        }
        (p.pointerType !== 'touch' || !Z(n.select('floatingElement'), k.relatedTarget)) && P(k);
      }
      return (
        a && A.addEventListener('mousemove', M, { once: !0 }),
        A.addEventListener('mouseenter', M),
        A.addEventListener('mouseleave', I),
        () => {
          (a && A.removeEventListener('mousemove', M),
            A.removeEventListener('mouseenter', M),
            A.removeEventListener('mouseleave', I));
        }
      );
    }, [B, W, o, y, P, n, s, E, p, m, x, v, S, u, a, w, f, g, R, b]),
    d.useMemo(() => {
      if (!s) return;
      function A(M) {
        p.pointerType = M.pointerType;
      }
      return {
        onPointerDown: A,
        onPointerEnter: A,
        onMouseMove(M) {
          const { nativeEvent: I } = M,
            k = M.currentTarget,
            C = n.select('domReferenceElement'),
            D = n.select('open'),
            N = x(C, k, M.target);
          if (u && !At(p.pointerType)) return;
          const O = Io(w.current);
          if (
            (D && !N) ||
            O === 0 ||
            (!N && p.restTimeoutPending && M.movementX ** 2 + M.movementY ** 2 < 2)
          )
            return;
          p.restTimeout.clear();
          function L() {
            if (((p.restTimeoutPending = !1), v())) return;
            const G = n.select('open');
            !p.blockMouseMove && (!G || N) && n.setOpen(!0, me(Te, I, k));
          }
          p.pointerType === 'touch'
            ? Ge.flushSync(() => {
                L();
              })
            : N && D
              ? L()
              : ((p.restTimeoutPending = !0), p.restTimeout.start(O, L));
        },
      };
    }, [s, p, v, x, u, n, w])
  );
}
function fs(e = []) {
  const t = e.map((l) => l?.reference),
    n = e.map((l) => l?.floating),
    o = e.map((l) => l?.item),
    r = e.map((l) => l?.trigger),
    s = d.useCallback((l) => Yt(l, e, 'reference'), t),
    i = d.useCallback((l) => Yt(l, e, 'floating'), n),
    c = d.useCallback((l) => Yt(l, e, 'item'), o),
    u = d.useCallback((l) => Yt(l, e, 'trigger'), r);
  return d.useMemo(
    () => ({ getReferenceProps: s, getFloatingProps: i, getItemProps: c, getTriggerProps: u }),
    [s, i, c, u],
  );
}
function Yt(e, t, n) {
  const o = new Map(),
    r = n === 'item',
    s = {};
  n === 'floating' && ((s.tabIndex = -1), (s[Hn] = ''));
  for (const i in e) (r && e && (i === xr || i === Rr)) || (s[i] = e[i]);
  for (let i = 0; i < t.length; i += 1) {
    let c;
    const u = t[i]?.[n];
    (typeof u == 'function' ? (c = e ? u(e) : null) : (c = u), c && Jo(s, c, r, o));
  }
  return (Jo(s, e, r, o), s);
}
function Jo(e, t, n, o) {
  for (const r in t) {
    const s = t[r];
    (n && (r === xr || r === Rr)) ||
      (r.startsWith('on')
        ? (o.has(r) || o.set(r, []),
          typeof s == 'function' &&
            (o.get(r)?.push(s),
            (e[r] = (...i) =>
              o
                .get(r)
                ?.map((c) => c(...i))
                .find((c) => c !== void 0))))
        : (e[r] = s));
  }
}
const pa = new Map([
  ['select', 'listbox'],
  ['combobox', 'listbox'],
  ['label', !1],
]);
function ga(e, t = {}) {
  const n = 'rootStore' in e ? e.rootStore : e,
    o = n.useState('open'),
    r = n.useState('floatingId'),
    s = n.useState('domReferenceElement'),
    i = n.useState('floatingElement'),
    { role: c = 'dialog' } = t,
    u = ht(),
    l = s?.id || u,
    a = d.useMemo(() => jn(i)?.id || r, [i, r]),
    f = pa.get(c) ?? c,
    m = ct() != null,
    b = d.useMemo(
      () =>
        f === 'tooltip' || c === 'label'
          ? we
          : {
              'aria-haspopup': f === 'alertdialog' ? 'dialog' : f,
              'aria-expanded': 'false',
              ...(f === 'listbox' && { role: 'combobox' }),
              ...(f === 'menu' && m && { role: 'menuitem' }),
              ...(c === 'select' && { 'aria-autocomplete': 'none' }),
              ...(c === 'combobox' && { 'aria-autocomplete': 'list' }),
            },
      [f, m, c],
    ),
    g = d.useMemo(
      () =>
        f === 'tooltip' || c === 'label'
          ? { [`aria-${c === 'label' ? 'labelledby' : 'describedby'}`]: o ? a : void 0 }
          : {
              ...b,
              'aria-expanded': o ? 'true' : 'false',
              'aria-controls': o ? a : void 0,
              ...(f === 'menu' && { id: l }),
            },
      [f, a, o, l, c, b],
    ),
    p = d.useMemo(() => {
      const y = { id: a, ...(f && { role: f }) };
      return f === 'tooltip' || c === 'label'
        ? y
        : { ...y, ...(f === 'menu' && { 'aria-labelledby': l }) };
    }, [f, a, l, c]),
    E = d.useCallback(
      ({ active: y, selected: w }) => {
        const R = { role: 'option', ...(y && { id: `${a}-fui-option` }) };
        switch (c) {
          case 'select':
          case 'combobox':
            return { ...R, 'aria-selected': w };
        }
        return {};
      },
      [a, c],
    );
  return d.useMemo(() => ({ reference: g, floating: p, item: E, trigger: b }), [g, p, b, E]);
}
const Zo = 0.1,
  ma = Zo * Zo,
  ne = 0.5;
function Ut(e, t, n, o, r, s) {
  return o >= t != s >= t && e <= ((r - n) * (t - o)) / (s - o) + n;
}
function qt(e, t, n, o, r, s, i, c, u, l) {
  let a = !1;
  return (
    Ut(e, t, n, o, r, s) && (a = !a),
    Ut(e, t, r, s, i, c) && (a = !a),
    Ut(e, t, i, c, u, l) && (a = !a),
    Ut(e, t, u, l, n, o) && (a = !a),
    a
  );
}
function ha(e, t, n) {
  return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height;
}
function Xt(e, t, n, o, r, s) {
  const i = Math.min(n, r),
    c = Math.max(n, r),
    u = Math.min(o, s),
    l = Math.max(o, s);
  return e >= i && e <= c && t >= u && t <= l;
}
function ba(e = {}) {
  const { blockPointerEvents: t = !1 } = e,
    n = new De(),
    o = ({ x: r, y: s, placement: i, elements: c, onClose: u, nodeId: l, tree: a }) => {
      const f = i?.split('-')[0];
      let h = !1,
        m = null,
        b = null,
        g = typeof performance < 'u' ? performance.now() : 0;
      function p(y, w) {
        const R = performance.now(),
          v = R - g;
        if (m === null || b === null || v === 0) return ((m = y), (b = w), (g = R), !1);
        const S = y - m,
          x = w - b,
          P = S * S + x * x,
          B = v * v * ma;
        return ((m = y), (b = w), (g = R), P < B);
      }
      function E() {
        (n.clear(), u());
      }
      return function (w) {
        n.clear();
        const R = c.domReference,
          v = c.floating;
        if (!R || !v || f == null || r == null || s == null) return;
        const { clientX: S, clientY: x } = w,
          P = Le(w),
          B = w.type === 'mouseleave',
          W = Z(v, P),
          A = Z(R, P);
        if (W && ((h = !0), !B)) return;
        if (A && ((h = !1), !B)) {
          h = !0;
          return;
        }
        if (B && re(w.relatedTarget) && Z(v, w.relatedTarget)) return;
        function M() {
          return !!(a && Ue(a.nodesRef.current, l).length > 0);
        }
        function I() {
          M() || E();
        }
        if (M()) return;
        const k = R.getBoundingClientRect(),
          C = v.getBoundingClientRect(),
          D = r > C.right - C.width / 2,
          N = s > C.bottom - C.height / 2,
          O = C.width > k.width,
          L = C.height > k.height,
          G = (O ? k : C).left,
          _ = (O ? k : C).right,
          te = (L ? k : C).top,
          ge = (L ? k : C).bottom;
        if (
          (f === 'top' && s >= k.bottom - 1) ||
          (f === 'bottom' && s <= k.top + 1) ||
          (f === 'left' && r >= k.right - 1) ||
          (f === 'right' && r <= k.left + 1)
        ) {
          I();
          return;
        }
        let q = !1;
        switch (f) {
          case 'top':
            q = Xt(S, x, G, k.top + 1, _, C.bottom - 1);
            break;
          case 'bottom':
            q = Xt(S, x, G, C.top + 1, _, k.bottom - 1);
            break;
          case 'left':
            q = Xt(S, x, C.right - 1, ge, k.left + 1, te);
            break;
          case 'right':
            q = Xt(S, x, k.right - 1, ge, C.left + 1, te);
            break;
        }
        if (q) return;
        if (h && !ha(S, x, k)) {
          I();
          return;
        }
        if (!B && p(S, x)) {
          I();
          return;
        }
        let se = !1;
        switch (f) {
          case 'top': {
            const H = O ? ne / 2 : ne * 4,
              le = O || D ? r + H : r - H,
              Y = O ? r - H : D ? r + H : r - H,
              de = s + ne + 1,
              ie = D || O ? C.bottom - ne : C.top,
              ye = D ? (O ? C.bottom - ne : C.top) : C.bottom - ne;
            se = qt(S, x, le, de, Y, de, C.left, ie, C.right, ye);
            break;
          }
          case 'bottom': {
            const H = O ? ne / 2 : ne * 4,
              le = O || D ? r + H : r - H,
              Y = O ? r - H : D ? r + H : r - H,
              de = s - ne,
              ie = D || O ? C.top + ne : C.bottom,
              ye = D ? (O ? C.top + ne : C.bottom) : C.top + ne;
            se = qt(S, x, le, de, Y, de, C.left, ie, C.right, ye);
            break;
          }
          case 'left': {
            const H = L ? ne / 2 : ne * 4,
              le = L || N ? s + H : s - H,
              Y = L ? s - H : N ? s + H : s - H,
              de = r + ne + 1,
              ie = N || L ? C.right - ne : C.left,
              ye = N ? (L ? C.right - ne : C.left) : C.right - ne;
            se = qt(S, x, ie, C.top, ye, C.bottom, de, le, de, Y);
            break;
          }
          case 'right': {
            const H = L ? ne / 2 : ne * 4,
              le = L || N ? s + H : s - H,
              Y = L ? s - H : N ? s + H : s - H,
              de = r - ne,
              ie = N || L ? C.left + ne : C.right,
              ye = N ? (L ? C.left + ne : C.right) : C.left + ne;
            se = qt(S, x, de, le, de, Y, ie, C.top, ye, C.bottom);
            break;
          }
        }
        se ? h || n.start(40, I) : I();
      };
    };
  return ((o.__options = { blockPointerEvents: t }), o);
}
function va(e) {
  const t = d.useRef(''),
    n = d.useCallback(
      (r) => {
        r.defaultPrevented || ((t.current = r.pointerType), e(r, r.pointerType));
      },
      [e],
    );
  return {
    onClick: d.useCallback(
      (r) => {
        if (r.detail === 0) {
          e(r, 'keyboard');
          return;
        }
        ('pointerType' in r ? e(r, r.pointerType) : e(r, t.current), (t.current = ''));
      },
      [e],
    ),
    onPointerDown: n,
  };
}
function ya(e, t) {
  const n = d.useRef(e),
    o = z(t);
  (K(() => {
    n.current !== e && o(n.current);
  }, [e, o]),
    K(() => {
      n.current = e;
    }, [e]));
}
function Ea(e) {
  const [t, n] = d.useState(null),
    o = z((i, c) => {
      e || n(c || (Er ? 'touch' : ''));
    });
  ya(e, (i) => {
    i && !e && n(null);
  });
  const { onClick: r, onPointerDown: s } = va(o);
  return d.useMemo(
    () => ({ openMethod: t, triggerProps: { onClick: r, onPointerDown: s } }),
    [t, r, s],
  );
}
let uo = (function (e) {
    return (
      (e.open = 'data-open'),
      (e.closed = 'data-closed'),
      (e[(e.startingStyle = Pt.startingStyle)] = 'startingStyle'),
      (e[(e.endingStyle = Pt.endingStyle)] = 'endingStyle'),
      (e.anchorHidden = 'data-anchor-hidden'),
      (e.side = 'data-side'),
      (e.align = 'data-align'),
      e
    );
  })({}),
  zn = (function (e) {
    return ((e.popupOpen = 'data-popup-open'), (e.pressed = 'data-pressed'), e);
  })({});
const xa = { [zn.popupOpen]: '' },
  Ra = { [zn.popupOpen]: '', [zn.pressed]: '' },
  wa = { [uo.open]: '' },
  Sa = { [uo.closed]: '' },
  Ta = { [uo.anchorHidden]: '' },
  Ca = {
    open(e) {
      return e ? xa : null;
    },
  },
  Oa = {
    open(e) {
      return e ? Ra : null;
    },
  },
  ds = {
    open(e) {
      return e ? wa : Sa;
    },
    anchorHidden(e) {
      return e ? Ta : null;
    },
  };
function Pa(e) {
  return Gn(19) ? e : e ? 'true' : void 0;
}
const Ia = d.forwardRef(function (t, n) {
  const { cutout: o, ...r } = t;
  let s;
  if (o) {
    const i = o?.getBoundingClientRect();
    s = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${i.left}px ${i.top}px,
      ${i.left}px ${i.bottom}px,
      ${i.right}px ${i.bottom}px,
      ${i.right}px ${i.top}px,
      ${i.left}px ${i.top}px
    )`;
  }
  return X.jsx('div', {
    ref: n,
    role: 'presentation',
    'data-base-ui-inert': '',
    ...r,
    style: {
      position: 'fixed',
      inset: 0,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      clipPath: s,
    },
  });
});
function ka(e) {
  const t = d.useRef(!0);
  t.current && ((t.current = !1), e());
}
const Aa = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { x: n, y: o, placement: r, rects: s, platform: i, elements: c, middlewareData: u } = t,
        { element: l, padding: a = 0, offsetParent: f = 'real' } = Xe(e, t) || {};
      if (l == null) return {};
      const h = Cr(a),
        m = { x: n, y: o },
        b = no(r),
        g = to(b),
        p = await i.getDimensions(l),
        E = b === 'y',
        y = E ? 'top' : 'left',
        w = E ? 'bottom' : 'right',
        R = E ? 'clientHeight' : 'clientWidth',
        v = s.reference[g] + s.reference[b] - m[b] - s.floating[g],
        S = m[b] - s.reference[b],
        x = f === 'real' ? await i.getOffsetParent?.(l) : c.floating;
      let P = c.floating[R] || s.floating[g];
      (!P || !(await i.isElement?.(x))) && (P = c.floating[R] || s.floating[g]);
      const B = v / 2 - S / 2,
        W = P / 2 - p[g] / 2 - 1,
        A = Math.min(h[y], W),
        M = Math.min(h[w], W),
        I = A,
        k = P - p[g] - M,
        C = P / 2 - p[g] / 2 + B,
        D = _n(I, C, k),
        N =
          !u.arrow &&
          Ze(r) != null &&
          C !== D &&
          s.reference[g] / 2 - (C < I ? A : M) - p[g] / 2 < 0,
        O = N ? (C < I ? C - I : C - k) : 0;
      return {
        [b]: m[b] + O,
        data: { [b]: D, centerOffset: C - D - O, ...(N && { alignmentOffset: O }) },
        reset: N,
      };
    },
  }),
  Ma = (e, t) => ({ ...Aa(e), options: [e, t] }),
  Fa = {
    name: 'hide',
    async fn(e) {
      const { width: t, height: n, x: o, y: r } = e.rects.reference,
        s = t === 0 && n === 0 && o === 0 && r === 0;
      return { data: { referenceHidden: (await wl().fn(e)).data?.referenceHidden || s } };
    },
  },
  Jt = { sideX: 'left', sideY: 'top' },
  La = {
    name: 'adaptiveOrigin',
    async fn(e) {
      const {
          x: t,
          y: n,
          rects: { floating: o },
          elements: { floating: r },
          platform: s,
          strategy: i,
          placement: c,
        } = e,
        u = Ee(r),
        l = u.getComputedStyle(r);
      if (!(l.transitionDuration !== '0s' && l.transitionDuration !== ''))
        return { x: t, y: n, data: Jt };
      const f = await s.getOffsetParent?.(r);
      let h = { width: 0, height: 0 };
      if (i === 'fixed' && u?.visualViewport)
        h = { width: u.visualViewport.width, height: u.visualViewport.height };
      else if (f === u) {
        const y = ue(r);
        h = { width: y.documentElement.clientWidth, height: y.documentElement.clientHeight };
      } else (await s.isElement?.(f)) && (h = await s.getDimensions(f));
      const m = Se(c);
      let b = t,
        g = n;
      (m === 'left' && (b = h.width - (t + o.width)),
        m === 'top' && (g = h.height - (n + o.height)));
      const p = m === 'left' ? 'right' : Jt.sideX,
        E = m === 'top' ? 'bottom' : Jt.sideY;
      return { x: b, y: g, data: { sideX: p, sideY: E } };
    },
  };
function ps(e, t, n) {
  const o = e === 'inline-start' || e === 'inline-end';
  return {
    top: 'top',
    right: o ? (n ? 'inline-start' : 'inline-end') : 'right',
    bottom: 'bottom',
    left: o ? (n ? 'inline-end' : 'inline-start') : 'left',
  }[t];
}
function Qo(e, t, n) {
  const { rects: o, placement: r } = e;
  return {
    side: ps(t, Se(r), n),
    align: Ze(r) || 'center',
    anchor: { width: o.reference.width, height: o.reference.height },
    positioner: { width: o.floating.width, height: o.floating.height },
  };
}
function Da(e) {
  const {
      anchor: t,
      positionMethod: n = 'absolute',
      side: o = 'bottom',
      sideOffset: r = 0,
      align: s = 'center',
      alignOffset: i = 0,
      collisionBoundary: c,
      collisionPadding: u = 5,
      sticky: l = !1,
      arrowPadding: a = 5,
      disableAnchorTracking: f = !1,
      keepMounted: h = !1,
      floatingRootContext: m,
      mounted: b,
      collisionAvoidance: g,
      shiftCrossAxis: p = !1,
      nodeId: E,
      adaptiveOrigin: y,
      lazyFlip: w = !1,
      externalTree: R,
    } = e,
    [v, S] = d.useState(null);
  !b && v !== null && S(null);
  const x = g.side || 'flip',
    P = g.align || 'flip',
    B = g.fallbackAxisSide || 'end',
    W = typeof t == 'function' ? t : void 0,
    A = z(W),
    M = W ? A : t,
    I = $e(t),
    C = Fs() === 'rtl',
    D =
      v ||
      {
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
        'inline-end': C ? 'left' : 'right',
        'inline-start': C ? 'right' : 'left',
      }[o],
    N = s === 'center' ? D : `${D}-${s}`;
  let O = u;
  const L = 1,
    G = o === 'bottom' ? L : 0,
    _ = o === 'top' ? L : 0,
    te = o === 'right' ? L : 0,
    ge = o === 'left' ? L : 0;
  typeof O == 'number'
    ? (O = { top: O + G, right: O + ge, bottom: O + _, left: O + te })
    : O &&
      (O = {
        top: (O.top || 0) + G,
        right: (O.right || 0) + ge,
        bottom: (O.bottom || 0) + _,
        left: (O.left || 0) + te,
      });
  const q = { boundary: c === 'clipping-ancestors' ? 'clippingAncestors' : c, padding: O },
    se = d.useRef(null),
    H = $e(r),
    le = $e(i),
    ie = [
      vl(
        (ce) => {
          const Re = Qo(ce, o, C),
            Pe = typeof H.current == 'function' ? H.current(Re) : H.current,
            Ie = typeof le.current == 'function' ? le.current(Re) : le.current;
          return { mainAxis: Pe, crossAxis: Ie, alignmentAxis: Ie };
        },
        [typeof r != 'function' ? r : 0, typeof i != 'function' ? i : 0, C, o],
      ),
    ],
    ye = P === 'none' && x !== 'shift',
    Qe = !ye && (l || p || x === 'shift'),
    $ =
      x === 'none'
        ? null
        : xl({
            ...q,
            padding: { top: O.top + L, right: O.right + L, bottom: O.bottom + L, left: O.left + L },
            mainAxis: !p && x === 'flip',
            crossAxis: P === 'flip' ? 'alignment' : !1,
            fallbackAxisSideDirection: B,
          }),
    J = ye
      ? null
      : yl(
          (ce) => {
            const Re = ue(ce.elements.floating).documentElement;
            return {
              ...q,
              rootBoundary: p
                ? { x: 0, y: 0, width: Re.clientWidth, height: Re.clientHeight }
                : void 0,
              mainAxis: P !== 'none',
              crossAxis: Qe,
              limiter:
                l || p
                  ? void 0
                  : El((Pe) => {
                      if (!se.current) return {};
                      const { width: Ie, height: je } = se.current.getBoundingClientRect(),
                        Me = ke(Se(Pe.placement)),
                        nt = Me === 'y' ? Ie : je,
                        lt = Me === 'y' ? O.left + O.right : O.top + O.bottom;
                      return { offset: nt / 2 + lt / 2 };
                    }),
            };
          },
          [q, l, p, O, P],
        );
  (x === 'shift' || P === 'shift' || s === 'center' ? ie.push(J, $) : ie.push($, J),
    ie.push(
      Rl({
        ...q,
        apply({ elements: { floating: ce }, availableWidth: Re, availableHeight: Pe, rects: Ie }) {
          const je = ce.style;
          (je.setProperty('--available-width', `${Re}px`),
            je.setProperty('--available-height', `${Pe}px`));
          const Me = window.devicePixelRatio || 1,
            { x: nt, y: lt, width: Vt, height: hn } = Ie.reference,
            bn = (Math.round((nt + Vt) * Me) - Math.round(nt * Me)) / Me,
            vn = (Math.round((lt + hn) * Me) - Math.round(lt * Me)) / Me;
          (je.setProperty('--anchor-width', `${bn}px`),
            je.setProperty('--anchor-height', `${vn}px`));
        },
      }),
      Ma(
        () => ({
          element: se.current || document.createElement('div'),
          padding: a,
          offsetParent: 'floating',
        }),
        [a],
      ),
      {
        name: 'transformOrigin',
        fn(ce) {
          const { elements: Re, middlewareData: Pe, placement: Ie, rects: je, y: Me } = ce,
            nt = Se(Ie),
            lt = ke(nt),
            Vt = se.current,
            hn = Pe.arrow?.x || 0,
            bn = Pe.arrow?.y || 0,
            vn = Vt?.clientWidth || 0,
            ys = Vt?.clientHeight || 0,
            yn = hn + vn / 2,
            po = bn + ys / 2,
            Es = Math.abs(Pe.shift?.y || 0),
            xs = je.reference.height / 2,
            Rt = typeof r == 'function' ? r(Qo(ce, o, C)) : r,
            Rs = Es > Rt,
            ws = {
              top: `${yn}px calc(100% + ${Rt}px)`,
              bottom: `${yn}px ${-Rt}px`,
              left: `calc(100% + ${Rt}px) ${po}px`,
              right: `${-Rt}px ${po}px`,
            }[nt],
            Ss = `${yn}px ${je.reference.y + xs - Me}px`;
          return (
            Re.floating.style.setProperty('--transform-origin', Qe && lt === 'y' && Rs ? Ss : ws),
            {}
          );
        },
      },
      Fa,
      y,
    ),
    K(() => {
      !b &&
        m &&
        m.update({ referenceElement: null, floatingElement: null, domReferenceElement: null });
    }, [b, m]));
  const oe = d.useMemo(
      () => ({
        elementResize: !f && typeof ResizeObserver < 'u',
        layoutShift: !f && typeof IntersectionObserver < 'u',
      }),
      [f],
    ),
    {
      refs: fe,
      elements: j,
      x: U,
      y: he,
      middlewareData: V,
      update: T,
      placement: F,
      context: Q,
      isPositioned: ae,
      floatingStyles: Ae,
    } = sa({
      rootContext: m,
      placement: N,
      middleware: ie,
      strategy: n,
      whileElementsMounted: h ? void 0 : (...ce) => _o(...ce, oe),
      nodeId: E,
      externalTree: R,
    }),
    { sideX: et, sideY: Be } = V.adaptiveOrigin || Jt,
    tt = ae ? n : 'fixed',
    be = d.useMemo(() => {
      const ce = y ? { position: tt, [et]: U, [Be]: he } : { position: tt, ...Ae };
      return (ae || (ce.opacity = 0), ce);
    }, [y, tt, et, U, Be, he, Ae, ae]),
    pe = d.useRef(null);
  (K(() => {
    if (!b) return;
    const ce = I.current,
      Re = typeof ce == 'function' ? ce() : ce,
      Ie = (er(Re) ? Re.current : Re) || null || null;
    Ie !== pe.current && (fe.setPositionReference(Ie), (pe.current = Ie));
  }, [b, fe, M, I]),
    d.useEffect(() => {
      if (!b) return;
      const ce = I.current;
      typeof ce != 'function' &&
        er(ce) &&
        ce.current !== pe.current &&
        (fe.setPositionReference(ce.current), (pe.current = ce.current));
    }, [b, fe, M, I]),
    d.useEffect(() => {
      if (h && b && j.domReference && j.floating) return _o(j.domReference, j.floating, T, oe);
    }, [h, b, j, T, oe]));
  const xe = Se(F),
    xt = ps(o, xe, C),
    Lt = Ze(F) || 'center',
    Dt = !!V.hide?.referenceHidden;
  K(() => {
    w && b && ae && S(xe);
  }, [w, b, ae, xe]);
  const Nt = d.useMemo(
      () => ({ position: 'absolute', top: V.arrow?.y, left: V.arrow?.x }),
      [V.arrow],
    ),
    Bt = V.arrow?.centerOffset !== 0;
  return d.useMemo(
    () => ({
      positionerStyles: be,
      arrowStyles: Nt,
      arrowRef: se,
      arrowUncentered: Bt,
      side: xt,
      align: Lt,
      physicalSide: xe,
      anchorHidden: Dt,
      refs: fe,
      context: Q,
      isPositioned: ae,
      update: T,
    }),
    [be, Nt, se, Bt, xt, Lt, xe, Dt, fe, Q, ae, T],
  );
}
function er(e) {
  return e != null && 'current' in e;
}
function gs(e) {
  return e === 'starting' ? zs : we;
}
const Na = d.createContext(void 0);
function Ba(e) {
  return d.useContext(Na);
}
const ms = d.createContext(void 0);
function Et(e) {
  const t = d.useContext(ms);
  if (t === void 0 && !e) throw new Error(it(47));
  return t;
}
function Va() {
  return {
    ...na(),
    disabled: !1,
    modal: !1,
    instantType: void 0,
    openMethod: null,
    openChangeReason: null,
    titleElementId: void 0,
    descriptionElementId: void 0,
    stickIfOpen: !0,
    nested: !1,
    openOnHover: !1,
    closeDelay: 0,
    hasViewport: !1,
  };
}
const $a = {
  ...oa,
  disabled: ee((e) => e.disabled),
  instantType: ee((e) => e.instantType),
  openMethod: ee((e) => e.openMethod),
  openChangeReason: ee((e) => e.openChangeReason),
  modal: ee((e) => e.modal),
  stickIfOpen: ee((e) => e.stickIfOpen),
  titleElementId: ee((e) => e.titleElementId),
  descriptionElementId: ee((e) => e.descriptionElementId),
  openOnHover: ee((e) => e.openOnHover),
  closeDelay: ee((e) => e.closeDelay),
  hasViewport: ee((e) => e.hasViewport),
};
class fo extends as {
  constructor(t) {
    const n = { ...Va(), ...t };
    (n.open && t?.mounted === void 0 && (n.mounted = !0),
      super(
        n,
        {
          popupRef: d.createRef(),
          backdropRef: d.createRef(),
          internalBackdropRef: d.createRef(),
          onOpenChange: void 0,
          onOpenChangeComplete: void 0,
          triggerFocusTargetRef: d.createRef(),
          beforeContentFocusGuardRef: d.createRef(),
          stickIfOpenTimeout: new De(),
          triggerElements: new co(),
        },
        $a,
      ));
  }
  setOpen = (t, n) => {
    const o = n.reason === Te,
      r = n.reason === ft && n.event.detail === 0,
      s = !t && (n.reason === pr || n.reason == null);
    if (
      ((n.preventUnmountOnClose = () => {
        this.set('preventUnmountingOnClose', !0);
      }),
      this.context.onOpenChange?.(t, n),
      n.isCanceled)
    )
      return;
    const i = {
      open: t,
      nativeEvent: n.event,
      reason: n.reason,
      nested: this.state.nested,
      triggerElement: n.trigger,
    };
    this.state.floatingRootContext.context.events?.emit('openchange', i);
    const u = () => {
      const l = { open: t, openChangeReason: n.reason },
        a = n.trigger?.id ?? null;
      ((a || t) && ((l.activeTriggerId = a), (l.activeTriggerElement = n.trigger ?? null)),
        this.update(l));
    };
    (o
      ? (this.set('stickIfOpen', !0),
        this.context.stickIfOpenTimeout.start(Xs, () => {
          this.set('stickIfOpen', !1);
        }),
        Ge.flushSync(u))
      : u(),
      r || s
        ? this.set('instantType', r ? 'click' : 'dismiss')
        : n.reason === Ot
          ? this.set('instantType', 'focus')
          : this.set('instantType', void 0));
  };
  static useStore(t, n) {
    const o = Ne(() => new fo(n)).current,
      r = t ?? o;
    return (un(o.disposeEffect), r);
  }
  disposeEffect = () => this.context.stickIfOpenTimeout.disposeEffect();
}
function tr({ props: e }) {
  const {
      children: t,
      open: n,
      defaultOpen: o = !1,
      onOpenChange: r,
      onOpenChangeComplete: s,
      modal: i = !1,
      handle: c,
      triggerId: u,
      defaultTriggerId: l = null,
    } = e,
    a = fo.useStore(c?.store, {
      modal: i,
      open: o,
      openProp: n,
      activeTriggerId: l,
      triggerIdProp: u,
    });
  (ka(() => {
    n === void 0 && a.state.open === !1 && o === !0 && a.update({ open: !0, activeTriggerId: l });
  }),
    a.useControlledProp('openProp', n),
    a.useControlledProp('triggerIdProp', u));
  const f = a.useState('open'),
    h = a.useState('positionerElement'),
    m = a.useState('payload'),
    b = a.useState('openChangeReason');
  (a.useContextCallback('onOpenChange', r), a.useContextCallback('onOpenChangeComplete', s));
  const { openMethod: g, triggerProps: p } = Ea(f);
  Ql(a);
  const { forceUnmount: E } = ea(f, a, () => {
    a.update({ stickIfOpen: !0, openChangeReason: null });
  });
  (pc(f && i === !0 && b !== Te && g !== 'touch', h),
    d.useEffect(() => {
      f || a.context.stickIfOpenTimeout.clear();
    }, [a, f]));
  const y = d.useCallback(
      (k) => {
        const C = me(k);
        return (
          (C.preventUnmountOnClose = () => {
            a.set('preventUnmountingOnClose', !0);
          }),
          C
        );
      },
      [a],
    ),
    w = d.useCallback(() => {
      a.setOpen(!1, y(ti));
    }, [a, y]);
  d.useImperativeHandle(e.actionsRef, () => ({ unmount: E, close: w }), [E, w]);
  const R = ia({ popupStore: a, onOpenChange: a.setOpen }),
    v = Nc(R, {
      outsidePressEvent: { mouse: i === 'trap-focus' ? 'sloppy' : 'intentional', touch: 'sloppy' },
    }),
    S = ga(R),
    { getReferenceProps: x, getFloatingProps: P, getTriggerProps: B } = fs([v, S]),
    W = d.useMemo(() => x(p), [x, p]),
    A = d.useMemo(() => B(p), [B, p]),
    M = d.useMemo(() => P(), [P]);
  a.useSyncedValues({
    modal: i,
    openMethod: g,
    activeTriggerProps: W,
    inactiveTriggerProps: A,
    popupProps: M,
    floatingRootContext: R,
    nested: ct() != null,
  });
  const I = d.useMemo(() => ({ store: a }), [a]);
  return X.jsx(ms.Provider, { value: I, children: typeof t == 'function' ? t({ payload: m }) : t });
}
function Wa(e) {
  return Et(!0) ? X.jsx(tr, { props: e }) : X.jsx(Cc, { children: X.jsx(tr, { props: e }) });
}
const Ha = 300,
  ja = d.forwardRef(function (t, n) {
    const {
        render: o,
        className: r,
        disabled: s = !1,
        nativeButton: i = !0,
        handle: c,
        payload: u,
        openOnHover: l = !1,
        delay: a = Ha,
        closeDelay: f = 0,
        id: h,
        ...m
      } = t,
      b = Et(!0),
      g = c?.store ?? b?.store;
    if (!g) throw new Error(it(74));
    const p = gr(h),
      E = g.useState('isTriggerActive', p),
      y = g.useState('floatingRootContext'),
      w = g.useState('isOpenedByTrigger', p),
      R = d.useRef(null),
      { registerTrigger: v, isMountedByThisTrigger: S } = Zl(p, R, g, {
        payload: u,
        disabled: s,
        openOnHover: l,
        closeDelay: f,
      }),
      x = g.useState('openChangeReason'),
      P = g.useState('stickIfOpen'),
      B = g.useState('openMethod'),
      W = da(y, {
        enabled: y != null && l && (B !== 'touch' || x !== ft),
        mouseOnly: !0,
        move: !1,
        handleClose: ba(),
        restMs: a,
        delay: { close: f },
        triggerElementRef: R,
        isActiveTrigger: E,
      }),
      A = Mc(y, { enabled: y != null, stickIfOpen: P }),
      M = fs([A]),
      I = g.useState('triggerProps', S),
      k = { disabled: s, open: w },
      { getButtonProps: C, buttonRef: D } = bi({ disabled: s, native: i }),
      N = d.useMemo(
        () => ({
          open(te) {
            return te && x === ft ? Oa.open(te) : Ca.open(te);
          },
        }),
        [x],
      ),
      O = Mt('button', t, {
        state: k,
        ref: [D, n, v, R],
        props: [M.getReferenceProps(), W, I, { [fr]: '', id: p }, m, C],
        stateAttributesMapping: N,
      }),
      L = d.useRef(null),
      G = z((te) => {
        (Ge.flushSync(() => {
          g.setOpen(!1, me(Ot, te.nativeEvent, te.currentTarget));
        }),
          tc(L.current)?.focus());
      }),
      _ = z((te) => {
        const ge = g.select('positionerElement');
        if (ge && at(te, ge)) g.context.beforeContentFocusGuardRef.current?.focus();
        else {
          Ge.flushSync(() => {
            g.setOpen(!1, me(Ot, te.nativeEvent, te.currentTarget));
          });
          let q = ec(g.context.triggerFocusTargetRef.current || R.current);
          for (; q !== null && Z(ge, q); ) {
            const se = q;
            if (((q = oo(q)), q === se)) break;
          }
          q?.focus();
        }
      });
    return E
      ? X.jsxs(d.Fragment, {
          children: [
            X.jsx(mt, { ref: L, onFocus: G }),
            X.jsx(d.Fragment, { children: O }, p),
            X.jsx(mt, { ref: g.context.triggerFocusTargetRef, onFocus: _ }),
          ],
        })
      : X.jsx(d.Fragment, { children: O }, p);
  }),
  hs = d.createContext(void 0);
function _a() {
  const e = d.useContext(hs);
  if (e === void 0) throw new Error(it(45));
  return e;
}
const Ya = d.forwardRef(function (t, n) {
    const { keepMounted: o = !1, ...r } = t,
      { store: s } = Et();
    return s.useState('mounted') || o
      ? X.jsx(hs.Provider, { value: o, children: X.jsx(Rc, { ref: n, ...r }) })
      : null;
  }),
  bs = d.createContext(void 0);
function Ua() {
  const e = d.useContext(bs);
  if (!e) throw new Error(it(46));
  return e;
}
const qa = d.forwardRef(function (t, n) {
    const {
        render: o,
        className: r,
        anchor: s,
        positionMethod: i = 'absolute',
        side: c = 'bottom',
        align: u = 'center',
        sideOffset: l = 0,
        alignOffset: a = 0,
        collisionBoundary: f = 'clipping-ancestors',
        collisionPadding: h = 5,
        arrowPadding: m = 5,
        sticky: b = !1,
        disableAnchorTracking: g = !1,
        collisionAvoidance: p = Gs,
        ...E
      } = t,
      { store: y } = Et(),
      w = _a(),
      R = Sc(),
      v = y.useState('floatingRootContext'),
      S = y.useState('mounted'),
      x = y.useState('open'),
      P = y.useState('openChangeReason'),
      B = y.useState('activeTriggerElement'),
      W = y.useState('modal'),
      A = y.useState('positionerElement'),
      M = y.useState('instantType'),
      I = y.useState('transitionStatus'),
      k = y.useState('hasViewport'),
      C = d.useRef(null),
      D = mr(A, !1, !1),
      N = Da({
        anchor: s,
        floatingRootContext: v,
        positionMethod: i,
        mounted: S,
        side: c,
        sideOffset: l,
        align: u,
        alignOffset: a,
        arrowPadding: m,
        collisionBoundary: f,
        collisionPadding: h,
        sticky: b,
        disableAnchorTracking: g,
        keepMounted: w,
        nodeId: R,
        collisionAvoidance: p,
        adaptiveOrigin: k ? La : void 0,
      }),
      O = d.useMemo(() => {
        const q = {};
        return (
          x || (q.pointerEvents = 'none'),
          { role: 'presentation', hidden: !S, style: { ...N.positionerStyles, ...q } }
        );
      }, [x, S, N.positionerStyles]),
      L = d.useMemo(() => ({ props: O, ...N }), [O, N]),
      G = v.useState('domReferenceElement');
    K(() => {
      const q = G,
        se = C.current;
      if ((q && (C.current = q), se && q && q !== se)) {
        y.set('instantType', void 0);
        const H = new AbortController();
        return (
          D(() => {
            y.set('instantType', 'trigger-change');
          }, H.signal),
          () => {
            H.abort();
          }
        );
      }
    }, [G, D, y]);
    const _ = { open: x, side: L.side, align: L.align, anchorHidden: L.anchorHidden, instant: M },
      te = d.useCallback(
        (q) => {
          y.set('positionerElement', q);
        },
        [y],
      ),
      ge = Mt('div', t, {
        state: _,
        props: [L.props, gs(I), E],
        ref: [n, te],
        stateAttributesMapping: ds,
      });
    return X.jsxs(bs.Provider, {
      value: L,
      children: [
        S &&
          W === !0 &&
          P !== Te &&
          X.jsx(Ia, { ref: y.context.internalBackdropRef, inert: Pa(!x), cutout: B }),
        X.jsx(Tc, { id: R, children: ge }),
      ],
    });
  }),
  Xa = d.createContext(void 0);
function za() {
  const [e, t] = d.useState(0),
    n = z(
      () => (
        t((r) => r + 1),
        () => {
          t((r) => Math.max(0, r - 1));
        }
      ),
    );
  return { context: d.useMemo(() => ({ register: n }), [n]), hasClosePart: e > 0 };
}
function Ga(e) {
  const { value: t, children: n } = e;
  return X.jsx(Xa.Provider, { value: t, children: n });
}
const Ka = { ...ds, ...li },
  Ja = d.forwardRef(function (t, n) {
    const { className: o, render: r, initialFocus: s, finalFocus: i, ...c } = t,
      { store: u } = Et(),
      l = Ua(),
      a = Ba() != null,
      { context: f, hasClosePart: h } = za(),
      m = u.useState('open'),
      b = u.useState('openMethod'),
      g = u.useState('instantType'),
      p = u.useState('transitionStatus'),
      E = u.useState('popupProps'),
      y = u.useState('titleElementId'),
      w = u.useState('descriptionElementId'),
      R = u.useState('modal'),
      v = u.useState('mounted'),
      S = u.useState('openChangeReason'),
      x = u.useState('activeTriggerElement'),
      P = u.useState('floatingRootContext');
    _r({
      open: m,
      ref: u.context.popupRef,
      onComplete() {
        m && u.context.onOpenChangeComplete?.(!0);
      },
    });
    const B = u.useState('disabled'),
      W = u.useState('openOnHover'),
      A = u.useState('closeDelay');
    ua(P, { enabled: W && !B, closeDelay: A });
    function M(O) {
      return O === 'touch' ? u.context.popupRef.current : !0;
    }
    const I = s === void 0 ? M : s,
      k = { open: m, side: l.side, align: l.align, instant: g, transitionStatus: p },
      C = R !== !1 && h,
      D = d.useCallback(
        (O) => {
          u.set('popupElement', O);
        },
        [u],
      ),
      N = Mt('div', t, {
        state: k,
        ref: [n, u.context.popupRef, D],
        props: [
          E,
          {
            'aria-labelledby': y,
            'aria-describedby': w,
            onKeyDown(O) {
              a && ic.has(O.key) && O.stopPropagation();
            },
          },
          gs(p),
          c,
        ],
        stateAttributesMapping: Ka,
      });
    return X.jsx(Ac, {
      context: P,
      openInteractionType: b,
      modal: C,
      disabled: !v || S === Te,
      initialFocus: I,
      returnFocus: i,
      restoreFocus: 'popup',
      previousFocusableElement: ve(x) ? x : void 0,
      nextFocusableElement: u.context.triggerFocusTargetRef,
      beforeContentFocusGuardRef: u.context.beforeContentFocusGuardRef,
      children: X.jsx(Ga, { value: f, children: N }),
    });
  }),
  Za = d.forwardRef(function (t, n) {
    const { render: o, className: r, ...s } = t,
      { store: i } = Et(),
      c = gr(s.id);
    return (
      K(
        () => (
          i.set('descriptionElementId', c),
          () => {
            i.set('descriptionElementId', void 0);
          }
        ),
        [i, c],
      ),
      Mt('p', t, { ref: n, props: [{ id: c }, s] })
    );
  }),
  nr = (...e) => {
    let t = 0,
      n,
      o,
      r = '';
    for (; t < e.length; ) (n = e[t++]) && (o = vs(n)) && (r && (r += ' '), (r += o));
    return r;
  },
  vs = (e) => {
    if (typeof e == 'string') return e;
    let t,
      n = '';
    for (let o = 0; o < e.length; o++) e[o] && (t = vs(e[o])) && (n && (n += ' '), (n += t));
    return n;
  };
function eu({ children: e }) {
  return X.jsxs(Wa, {
    children: [
      X.jsxs(ja, {
        className: 'group cursor-help outline-none',
        children: [
          X.jsx('span', {
            className: nr(
              'relative',
              'underline decoration-black/30 decoration-dotted decoration-1 underline-offset-[3px]',
              'group-hover:text-black group-focus-visible:text-black group-data-popup-open:text-black',
              'transition-colors duration-125 group-hover:duration-75',
              'before:absolute before:-inset-y-0.5 before:-inset-s-0.75 before:-inset-e-1.5 before:-z-1 before:rounded-[3px] before:bg-black/8 before:opacity-0',
              'before:transition-opacity before:duration-150 before:ease-out',
              'group-data-popup-open:decoration-transparent group-data-popup-open:before:opacity-100',
            ),
            children: 'Scheveningen',
          }),
          '.',
        ],
      }),
      X.jsx(Ya, {
        children: X.jsx(qa, {
          side: 'top',
          sideOffset: 8,
          positionMethod: 'fixed',
          children: X.jsxs(Ja, {
            className: nr(
              'flex max-w-72 flex-col will-change-transform outline-none',
              'rounded-md bg-white shadow-2xl ring-[0.5px] ring-black/8',
              'origin-(--transform-origin) transition-all duration-spring ease-spring',
              'data-starting-style:scale-90 data-starting-style:opacity-0',
              'data-ending-style:scale-90 data-ending-style:opacity-0',
            ),
            children: [
              e,
              X.jsx(Za, {
                className: 'p-3 text-sm',
                children: 'A seaside district in The Hague, Netherlands.',
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { eu as CarouselPopover };
