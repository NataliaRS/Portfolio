import { jsxs as _, jsx as t, Fragment as Be } from "react/jsx-runtime";
import { forwardRef as g, useState as B, useId as E, useRef as Z, useEffect as U, useCallback as Qt, Children as et, isValidElement as Oe, cloneElement as At, Fragment as Ut } from "react";
import { createPortal as St } from "react-dom";
const Xt = "_button_1ytn2_4", Ot = "_sm_1ytn2_29", Vt = "_md_1ytn2_34", en = "_lg_1ytn2_39", tn = "_primary_1ytn2_46", nn = "_secondary_1ytn2_58", sn = "_tertiary_1ytn2_71", ln = "_icon_1ytn2_91", on = "_label_1ytn2_96", re = {
  button: Xt,
  sm: Ot,
  md: Vt,
  lg: en,
  primary: tn,
  secondary: nn,
  tertiary: sn,
  icon: ln,
  label: on
}, cn = (...e) => e.filter(Boolean).join(" "), st = g(function({
  variant: n = "primary",
  size: s = "md",
  leadingIcon: l,
  trailingIcon: o,
  children: c,
  className: a,
  type: r = "button",
  ...i
}, u) {
  return /* @__PURE__ */ _(
    "button",
    {
      ref: u,
      type: r,
      className: cn(re.button, re[n], re[s], a),
      ...i,
      children: [
        l ? /* @__PURE__ */ t("span", { className: re.icon, "aria-hidden": !0, children: l }) : null,
        c != null ? /* @__PURE__ */ t("span", { className: re.label, children: c }) : null,
        o ? /* @__PURE__ */ t("span", { className: re.icon, "aria-hidden": !0, children: o }) : null
      ]
    }
  );
}), an = {
  Plus: "add",
  Check: "check",
  Chevron: "chevron_right",
  Close: "close",
  Arrow: "arrow_forward",
  Search: "search",
  Info: "info",
  Alert: "warning",
  Visibility: "visibility",
  VisibilityOff: "visibility_off",
  Folder: "folder"
}, rn = {
  add: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",
  arrow_forward: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
  arrow_back: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
  check: "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",
  chevron_right: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z",
  close: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
  folder: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z",
  info: "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
  search: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
  visibility: "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z",
  visibility_off: "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z",
  warning: "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z",
  error: "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
  account_circle: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z",
  stat_1: "m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z",
  stat_minus_1: "M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z",
  sell: "M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z",
  stacked_email: "M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z",
  chat_bubble: "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z",
  emoji_language: "M620-40q-104 0-183.5-62T331-260q45 2 89-9t84-31h164q1-11 1.5-21.5t.5-21.5q0-9-.5-18.5T668-380h-59q16-18 29.5-38t24.5-42h141q-20-30-48-52.5T693-547q5-20 6.5-41t.5-41q96 26 158 105.5T920-340q0 125-87.5 212.5T620-40Zm-95-102q-7-20-12.5-39t-9.5-39h-67q17 25 39.5 45t49.5 33Zm95 14q12-22 20.5-45t14.5-47h-70q6 24 15 47t20 45Zm95-14q27-13 49.5-33t39.5-45h-67q-5 20-10 39t-12 39Zm33-158h88q2-10 3-19.5t1-20.5q0-11-1-20.5t-3-19.5h-88q1 9 1.5 18.5t.5 18.5q0 11-.5 21.5T748-300Zm-408-20q-125 0-212.5-87.5T40-620q0-125 87.5-212.5T340-920q125 0 212.5 87.5T640-620q0 125-87.5 212.5T340-320Zm0-80q91 0 155.5-64.5T560-620q0-91-64.5-155.5T340-840q-91 0-155.5 64.5T120-620q0 91 64.5 155.5T340-400ZM240-640q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm100 176q48 0 85.5-27t54.5-69H200q17 42 54.5 69t85.5 27Zm100-176q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640Zm-100 20Z",
  star: "m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",
  download: "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",
  send: "M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
};
function Pt(e) {
  return an[e] ?? e;
}
function _n(e) {
  return rn[Pt(e)];
}
const dn = "_icon_9re3p_2", un = {
  icon: dn
}, mn = (...e) => e.filter(Boolean).join(" "), q = g(function({ glyph: n, size: s = 16, title: l, className: o, ...c }, a) {
  const r = Pt(n), i = _n(n);
  return /* @__PURE__ */ _(
    "svg",
    {
      ref: a,
      className: mn(un.icon, o),
      "data-icon": r,
      width: s,
      height: s,
      viewBox: "0 -960 960 960",
      fill: "currentColor",
      role: l ? "img" : void 0,
      "aria-label": l,
      "aria-hidden": l ? void 0 : !0,
      ...c,
      children: [
        l ? /* @__PURE__ */ t("title", { children: l }) : null,
        i ? /* @__PURE__ */ t("path", { d: i }) : null
      ]
    }
  );
}), hn = "_iconButton_1fydl_1", fn = "_icon_1fydl_1", pn = "_sm_1fydl_18", vn = "_md_1fydl_19", bn = "_lg_1fydl_20", yn = "_primary_1fydl_26", $n = "_secondary_1fydl_31", gn = "_tertiary_1fydl_40", ze = {
  iconButton: hn,
  icon: fn,
  sm: pn,
  md: vn,
  lg: bn,
  primary: yn,
  secondary: $n,
  tertiary: gn
}, Nn = (...e) => e.filter(Boolean).join(" "), wn = g(function({ variant: n = "primary", size: s = "md", icon: l, className: o, type: c = "button", ...a }, r) {
  return /* @__PURE__ */ t(
    "button",
    {
      ref: r,
      type: c,
      className: Nn(ze.iconButton, ze[n], ze[s], o),
      ...a,
      children: /* @__PURE__ */ t("span", { className: ze.icon, children: l })
    }
  );
}), kn = "_link_1b1gm_1", xn = "_disabled_1b1gm_20", lt = {
  link: kn,
  disabled: xn
}, qn = (...e) => e.filter(Boolean).join(" "), v1 = g(function({ disabled: n, className: s, children: l, href: o, onClick: c, ...a }, r) {
  return /* @__PURE__ */ t(
    "a",
    {
      ref: r,
      className: qn(lt.link, n && lt.disabled, s),
      href: n ? void 0 : o,
      "aria-disabled": n || void 0,
      onClick: n ? (i) => i.preventDefault() : c,
      ...a,
      children: l
    }
  );
}), Tn = "_badge_1sole_1", jn = "_icon_1sole_15", Bn = "_neutral_1sole_23", zn = "_brand_1sole_24", Mn = "_success_1sole_25", Dn = "_warning_1sole_26", Zn = "_danger_1sole_27", In = "_info_1sole_28", Ke = {
  badge: Tn,
  icon: jn,
  neutral: Bn,
  brand: zn,
  success: Mn,
  warning: Dn,
  danger: Zn,
  info: In
}, Rn = (...e) => e.filter(Boolean).join(" "), b1 = g(function({ tone: n = "neutral", icon: s, className: l, children: o, ...c }, a) {
  const r = s === !0 ? /* @__PURE__ */ t(q, { glyph: "sell" }) : s;
  return /* @__PURE__ */ _("span", { ref: a, className: Rn(Ke.badge, Ke[n], l), ...c, children: [
    r ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": !0, children: r }) : null,
    o
  ] });
}), En = "_tag_m0sst_1", Ln = "_neutral_m0sst_15", An = "_brand_m0sst_16", Sn = "_indigo_m0sst_17", ot = {
  tag: En,
  neutral: Ln,
  brand: An,
  indigo: Sn
}, Pn = (...e) => e.filter(Boolean).join(" "), y1 = g(function({ tone: n = "neutral", className: s, children: l, ...o }, c) {
  return /* @__PURE__ */ t("span", { ref: c, className: Pn(ot.tag, ot[n], s), ...o, children: l });
}), Hn = "_kbd_12e1i_1", Cn = {
  kbd: Hn
}, Fn = (...e) => e.filter(Boolean).join(" "), $1 = g(function({ className: n, children: s, ...l }, o) {
  return /* @__PURE__ */ t("kbd", { ref: o, className: Fn(Cn.kbd, n), ...l, children: s });
}), Kn = "_track_19k5l_1", Gn = "_segment_19k5l_9", Wn = "_input_19k5l_23", Yn = "_label_19k5l_33", Jn = "_active_19k5l_43", Qn = "_disabled_19k5l_56", ie = {
  track: Kn,
  segment: Gn,
  input: Wn,
  label: Yn,
  active: Jn,
  disabled: Qn
}, ct = (...e) => e.filter(Boolean).join(" "), g1 = g(
  function({ options: n, value: s, defaultValue: l, onValueChange: o, name: c, disabled: a, className: r, ...i }, u) {
    var p;
    const d = s != null, [m, h] = B(l ?? ((p = n[0]) == null ? void 0 : p.value)), y = d ? s : m, N = E(), v = (f) => {
      d || h(f), o == null || o(f);
    };
    return /* @__PURE__ */ t("div", { ref: u, role: "radiogroup", className: ct(ie.track, r), ...i, children: n.map((f) => {
      const x = f.value === y, $ = a || f.disabled;
      return /* @__PURE__ */ _(
        "label",
        {
          className: ct(ie.segment, x && ie.active, $ && ie.disabled),
          children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: ie.input,
                name: c ?? N,
                value: f.value,
                checked: x,
                disabled: $,
                onChange: () => v(f.value)
              }
            ),
            /* @__PURE__ */ t("span", { className: ie.label, children: f.label })
          ]
        },
        f.value
      );
    }) });
  }
), Un = "_root_f81bs_1", Xn = "_input_f81bs_7", On = "_circle_f81bs_15", Vn = "_dot_f81bs_30", es = "_label_f81bs_59", Ne = {
  root: Un,
  input: Xn,
  circle: On,
  dot: Vn,
  label: es
}, ts = (...e) => e.filter(Boolean).join(" "), ns = g(function({ label: n, className: s, ...l }, o) {
  return /* @__PURE__ */ _("label", { className: ts(Ne.root, s), children: [
    /* @__PURE__ */ t("input", { ref: o, type: "radio", className: Ne.input, ...l }),
    /* @__PURE__ */ t("span", { className: Ne.circle, "aria-hidden": !0, children: /* @__PURE__ */ t("span", { className: Ne.dot }) }),
    n != null ? /* @__PURE__ */ t("span", { className: Ne.label, children: n }) : null
  ] });
}), ss = "_root_nlds7_1", ls = "_input_nlds7_7", os = "_box_nlds7_15", cs = "_check_nlds7_31", as = "_bar_nlds7_34", rs = "_label_nlds7_75", _e = {
  root: ss,
  input: ls,
  box: os,
  check: cs,
  bar: as,
  label: rs
}, is = (...e) => e.filter(Boolean).join(" "), tt = g(function({ indeterminate: n = !1, label: s, className: l, ...o }, c) {
  const a = Z(null);
  U(() => {
    a.current && (a.current.indeterminate = n);
  }, [n]);
  const r = (i) => {
    a.current = i, typeof c == "function" ? c(i) : c && (c.current = i);
  };
  return /* @__PURE__ */ _("label", { className: is(_e.root, l), children: [
    /* @__PURE__ */ t("input", { ref: r, type: "checkbox", className: _e.input, ...o }),
    /* @__PURE__ */ _("span", { className: _e.box, "aria-hidden": !0, children: [
      /* @__PURE__ */ t("span", { className: _e.check, children: /* @__PURE__ */ t(q, { glyph: "Check", size: 12 }) }),
      /* @__PURE__ */ t("span", { className: _e.bar })
    ] }),
    s != null ? /* @__PURE__ */ t("span", { className: _e.label, children: s }) : null
  ] });
}), _s = "_group_2e8gr_1", ds = "_legend_2e8gr_11", us = "_items_2e8gr_20", ms = "_helper_2e8gr_26", Me = {
  group: _s,
  legend: ds,
  items: us,
  helper: ms
}, hs = (...e) => e.filter(Boolean).join(" "), N1 = g(
  function(n, s) {
    const { type: l, label: o, options: c, helper: a, name: r, disabled: i, className: u } = n, d = E(), m = E(), h = r ?? d, [y, N] = B(
      l === "radio" ? n.defaultValue : void 0
    ), [v, p] = B(
      l === "checkbox" ? n.defaultValue ?? [] : []
    ), f = (b) => l === "radio" ? (n.value ?? y) === b : (n.value ?? v).includes(b), x = (b) => {
      var w;
      n.type === "radio" && (n.value == null && N(b), (w = n.onValueChange) == null || w.call(n, b));
    }, $ = (b) => {
      var R;
      if (n.type !== "checkbox") return;
      const w = n.value ?? v, z = w.includes(b) ? w.filter((P) => P !== b) : [...w, b];
      n.value == null && p(z), (R = n.onValueChange) == null || R.call(n, z);
    };
    return /* @__PURE__ */ _(
      "fieldset",
      {
        ref: s,
        className: hs(Me.group, u),
        disabled: i,
        "aria-describedby": a != null ? m : void 0,
        children: [
          /* @__PURE__ */ t("legend", { className: Me.legend, children: o }),
          /* @__PURE__ */ t("div", { className: Me.items, children: c.map(
            (b) => l === "radio" ? /* @__PURE__ */ t(
              ns,
              {
                name: h,
                value: b.value,
                label: b.label,
                checked: f(b.value),
                disabled: b.disabled,
                onChange: () => x(b.value)
              },
              b.value
            ) : /* @__PURE__ */ t(
              tt,
              {
                value: b.value,
                label: b.label,
                checked: f(b.value),
                disabled: b.disabled,
                onChange: () => $(b.value)
              },
              b.value
            )
          ) }),
          a != null ? /* @__PURE__ */ t("p", { id: m, className: Me.helper, children: a }) : null
        ]
      }
    );
  }
), fs = "_wrap_wlulb_1", ps = "_leading_wlulb_7", vs = "_input_wlulb_13", bs = "_clear_wlulb_51", De = {
  wrap: fs,
  leading: ps,
  input: vs,
  clear: bs
}, ys = (...e) => e.filter(Boolean).join(" "), $s = g(function({ onClear: n, className: s, value: l, placeholder: o = "Buscar", ...c }, a) {
  const r = l != null && l !== "";
  return /* @__PURE__ */ _("span", { className: De.wrap, children: [
    /* @__PURE__ */ t(q, { glyph: "Search", size: 16, className: De.leading }),
    /* @__PURE__ */ t(
      "input",
      {
        ref: a,
        type: "search",
        role: "searchbox",
        className: ys(De.input, s),
        value: l,
        placeholder: o,
        ...c
      }
    ),
    n && r ? /* @__PURE__ */ t("button", { type: "button", className: De.clear, "aria-label": "Limpiar búsqueda", onClick: n, children: /* @__PURE__ */ t(q, { glyph: "Close", size: 12 }) }) : null
  ] });
}), gs = "_item_9xhz0_1", Ns = "_selected_9xhz0_25", ws = "_check_9xhz0_29", ks = "_icon_9xhz0_41", xs = "_shortcut_9xhz0_42", qs = "_label_9xhz0_50", de = {
  item: gs,
  selected: Ns,
  check: ws,
  icon: ks,
  shortcut: xs,
  label: qs
}, Ts = (...e) => e.filter(Boolean).join(" "), Ht = g(function({ icon: n, shortcut: s, selected: l, children: o, className: c, type: a = "button", ...r }, i) {
  return /* @__PURE__ */ _(
    "button",
    {
      ref: i,
      type: a,
      role: "menuitem",
      className: Ts(de.item, l && de.selected, c),
      ...r,
      children: [
        n ? /* @__PURE__ */ t("span", { className: de.icon, "aria-hidden": !0, children: n }) : null,
        /* @__PURE__ */ t("span", { className: de.label, children: o }),
        s ? /* @__PURE__ */ t("span", { className: de.shortcut, children: s }) : null,
        l ? /* @__PURE__ */ t(q, { glyph: "check", size: 16, className: de.check, "aria-hidden": !0 }) : null
      ]
    }
  );
}), js = "_combobox_1u991_1", Bs = "_list_1u991_8", zs = "_empty_1u991_26", Ge = {
  combobox: js,
  list: Bs,
  empty: zs
}, Ms = (...e) => e.filter(Boolean).join(" "), w1 = g(function({
  options: n,
  value: s,
  defaultValue: l,
  onValueChange: o,
  placeholder: c = "Buscar…",
  disabled: a,
  emptyText: r = "Sin resultados",
  className: i,
  id: u,
  "aria-label": d
}, m) {
  var L;
  const h = s !== void 0, [y, N] = B(l), v = h ? s : y, p = ((L = n.find((k) => k.value === v)) == null ? void 0 : L.label) ?? "", [f, x] = B(!1), [$, b] = B(""), [w, z] = B(0), R = Z(null), P = E(), oe = u ?? P, te = `${oe}-list`, H = (k) => `${oe}-opt-${k}`, C = f ? n.filter((k) => k.label.toLowerCase().includes($.toLowerCase())) : n;
  U(() => {
    if (!f) return;
    const k = (A) => {
      R.current && !R.current.contains(A.target) && x(!1);
    };
    return document.addEventListener("pointerdown", k, !0), () => document.removeEventListener("pointerdown", k, !0);
  }, [f]);
  const ce = () => {
    a || f || (b(p), z(0), x(!0));
  }, ae = (k) => {
    k.disabled || (h || N(k.value), o == null || o(k.value), x(!1));
  }, T = (k) => {
    if (k.key === "ArrowDown") {
      if (k.preventDefault(), !f) return ce();
      z((A) => Math.min(A + 1, C.length - 1));
    } else k.key === "ArrowUp" ? (k.preventDefault(), z((A) => Math.max(A - 1, 0))) : k.key === "Enter" ? f && C[w] && (k.preventDefault(), ae(C[w])) : k.key === "Escape" && f && (k.stopPropagation(), x(!1));
  }, M = f && C[w] ? H(w) : void 0;
  return /* @__PURE__ */ _("div", { className: Ms(Ge.combobox, i), ref: R, children: [
    /* @__PURE__ */ t(
      $s,
      {
        ref: m,
        role: "combobox",
        "aria-label": d,
        "aria-expanded": f,
        "aria-controls": te,
        "aria-activedescendant": M,
        "aria-autocomplete": "list",
        value: f ? $ : p,
        placeholder: c,
        disabled: a,
        onChange: (k) => {
          b(k.target.value), z(0), x(!0);
        },
        onFocus: ce,
        onKeyDown: T,
        onClear: v || $ ? () => {
          h || N(void 0), o == null || o(""), b("");
        } : void 0
      }
    ),
    f ? /* @__PURE__ */ t("div", { role: "listbox", id: te, className: Ge.list, children: C.length === 0 ? /* @__PURE__ */ t("p", { className: Ge.empty, children: r }) : C.map((k, A) => /* @__PURE__ */ t(
      Ht,
      {
        role: "option",
        id: H(A),
        "aria-selected": k.value === v,
        tabIndex: -1,
        disabled: k.disabled,
        style: A === w ? { background: "var(--color-bg-brand-2-subtle)" } : void 0,
        onMouseEnter: () => z(A),
        onMouseDown: (Jt) => Jt.preventDefault(),
        onClick: () => ae(k),
        children: k.label
      },
      k.value
    )) }) : null
  ] });
}), Ds = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
], Zs = ["L", "M", "M", "J", "V", "S", "D"], at = (e) => String(e).padStart(2, "0"), Ct = (e) => `${at(e.getDate())} / ${at(e.getMonth() + 1)} / ${e.getFullYear()}`, Ze = (e, n) => !!e && !!n && e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate(), Ft = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate());
function Is(e, n) {
  const s = (new Date(e, n, 1).getDay() + 6) % 7, l = new Date(e, n + 1, 0).getDate(), o = Array(s).fill(null);
  for (let c = 1; c <= l; c++) o.push(new Date(e, n, c));
  return o;
}
const Rs = "_calendar_1t2oo_1", Es = "_header_1t2oo_16", Ls = "_nav_1t2oo_21", As = "_prev_1t2oo_42", Ss = "_month_1t2oo_45", Ps = "_weekdays_1t2oo_56", Hs = "_grid_1t2oo_57", Cs = "_weekday_1t2oo_56", Fs = "_day_1t2oo_73", Ks = "_blank_1t2oo_74", Gs = "_today_1t2oo_102", Ws = "_inRange_1t2oo_107", Ys = "_selected_1t2oo_116", I = {
  calendar: Rs,
  header: Es,
  nav: Ls,
  prev: As,
  month: Ss,
  weekdays: Ps,
  grid: Hs,
  weekday: Cs,
  day: Fs,
  blank: Ks,
  today: Gs,
  inRange: Ws,
  selected: Ys
}, Js = (...e) => e.filter(Boolean).join(" ");
function Kt({ mode: e, selected: n = null, range: s, defaultMonth: l, onPick: o, onClose: c, labelId: a }) {
  const r = l ?? n ?? (s == null ? void 0 : s.from) ?? /* @__PURE__ */ new Date(), [i, u] = B({ year: r.getFullYear(), month: r.getMonth() }), d = /* @__PURE__ */ new Date(), m = (p) => u(({ year: f, month: x }) => {
    const $ = x + p;
    return { year: f + Math.floor($ / 12), month: ($ % 12 + 12) % 12 };
  }), h = (p) => {
    p.key === "Escape" && (p.stopPropagation(), c == null || c());
  }, y = (p) => e === "single" ? Ze(p, n) : Ze(p, (s == null ? void 0 : s.from) ?? null) || Ze(p, (s == null ? void 0 : s.to) ?? null), N = (p) => e === "range" && !!(s != null && s.from) && !!(s != null && s.to) && p > s.from && p < s.to, v = (p) => e === "single" && Ze(p, d);
  return /* @__PURE__ */ _("div", { role: "dialog", "aria-labelledby": a, className: I.calendar, onKeyDown: h, children: [
    /* @__PURE__ */ _("div", { className: I.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: I.nav, "aria-label": "Mes anterior", onClick: () => m(-1), children: /* @__PURE__ */ t(q, { glyph: "Chevron", size: 18, className: I.prev, title: "" }) }),
      /* @__PURE__ */ _("p", { id: a, className: I.month, children: [
        Ds[i.month],
        " ",
        i.year
      ] }),
      /* @__PURE__ */ t("button", { type: "button", className: I.nav, "aria-label": "Mes siguiente", onClick: () => m(1), children: /* @__PURE__ */ t(q, { glyph: "Chevron", size: 18, title: "" }) })
    ] }),
    /* @__PURE__ */ t("div", { className: I.weekdays, children: Zs.map((p, f) => /* @__PURE__ */ t("span", { className: I.weekday, children: p }, f)) }),
    /* @__PURE__ */ t("div", { className: I.grid, children: Is(i.year, i.month).map(
      (p, f) => p ? /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Js(
            I.day,
            v(p) && I.today,
            N(p) && I.inRange,
            y(p) && I.selected
          ),
          "aria-label": Ct(p),
          "aria-pressed": y(p),
          onClick: () => o(p),
          children: p.getDate()
        },
        f
      ) : /* @__PURE__ */ t("span", { className: I.blank }, f)
    ) })
  ] });
}
const Qs = "_wrap_19jka_1", Us = "_label_19jka_6", Xs = "_field_19jka_14", Os = "_open_19jka_37", Vs = "_error_19jka_40", el = "_value_19jka_48", tl = "_placeholder_19jka_49", nl = "_icon_19jka_66", ee = {
  wrap: Qs,
  label: Us,
  field: Xs,
  open: Os,
  error: Vs,
  value: el,
  placeholder: tl,
  icon: nl
}, sl = (...e) => e.filter(Boolean).join(" ");
function ll() {
  return /* @__PURE__ */ _(
    "svg",
    {
      className: ee.icon,
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      "aria-hidden": !0,
      focusable: "false",
      children: [
        /* @__PURE__ */ t("rect", { x: "2", y: "3", width: "12", height: "11", rx: "2" }),
        /* @__PURE__ */ t("path", { d: "M2 6.5 H14" }),
        /* @__PURE__ */ t("path", { d: "M5.5 2 V4" }),
        /* @__PURE__ */ t("path", { d: "M10.5 2 V4" })
      ]
    }
  );
}
const Ve = g(function({ label: n, htmlFor: s, value: l = null, placeholder: o = "DD / MM / AAAA", open: c, error: a, disabled: r, onClick: i }, u) {
  const d = E(), m = s ?? d;
  return /* @__PURE__ */ _("div", { className: ee.wrap, children: [
    n ? /* @__PURE__ */ t("label", { className: ee.label, htmlFor: m, children: n }) : null,
    /* @__PURE__ */ _(
      "button",
      {
        ref: u,
        type: "button",
        id: m,
        className: sl(ee.field, c && ee.open, a && ee.error),
        disabled: r,
        "aria-haspopup": "dialog",
        "aria-expanded": c,
        "aria-invalid": a || void 0,
        onClick: i,
        children: [
          /* @__PURE__ */ t("span", { className: l ? ee.value : ee.placeholder, children: l ? Ct(l) : o }),
          /* @__PURE__ */ t(ll, {})
        ]
      }
    )
  ] });
}), ol = "_root_bb285_1", cl = "_fields_bb285_7", rt = {
  root: ol,
  fields: cl
}, al = (...e) => e.filter(Boolean).join(" "), k1 = g(
  function({ value: n, defaultValue: s, onValueChange: l, fromLabel: o = "Desde", toLabel: c = "Hasta", disabled: a, className: r }, i) {
    const u = n !== void 0, [d, m] = B(s ?? { from: null, to: null }), h = u ? n : d, [y, N] = B(!1), v = Z(null), p = E(), f = ($) => {
      v.current = $, typeof i == "function" ? i($) : i && (i.current = $);
    };
    U(() => {
      if (!y) return;
      const $ = (b) => {
        v.current && !v.current.contains(b.target) && N(!1);
      };
      return document.addEventListener("pointerdown", $, !0), () => document.removeEventListener("pointerdown", $, !0);
    }, [y]);
    const x = ($) => {
      const b = Ft($);
      let w;
      !h.from || h.from && h.to ? w = { from: b, to: null } : b < h.from ? w = { from: b, to: null } : w = { from: h.from, to: b }, u || m(w), l == null || l(w);
    };
    return /* @__PURE__ */ _("div", { className: al(rt.root, r), ref: f, children: [
      /* @__PURE__ */ _("div", { className: rt.fields, children: [
        /* @__PURE__ */ t(
          Ve,
          {
            label: o,
            value: h.from,
            open: y,
            disabled: a,
            onClick: () => !a && N(!0)
          }
        ),
        /* @__PURE__ */ t(
          Ve,
          {
            label: c,
            value: h.to,
            open: y,
            disabled: a,
            onClick: () => !a && N(!0)
          }
        )
      ] }),
      y ? /* @__PURE__ */ t(
        Kt,
        {
          mode: "range",
          range: h,
          defaultMonth: h.from ?? void 0,
          onPick: x,
          onClose: () => N(!1),
          labelId: p
        }
      ) : null
    ] });
  }
), rl = "_status_l48xn_1", il = "_dot_l48xn_6", _l = "_online_l48xn_12", dl = "_busy_l48xn_13", ul = "_away_l48xn_14", ml = "_offline_l48xn_15", hl = "_label_l48xn_16", Ie = {
  status: rl,
  dot: il,
  online: _l,
  busy: dl,
  away: ul,
  offline: ml,
  label: hl
}, it = {
  online: "En línea",
  busy: "Ocupado",
  away: "Ausente",
  offline: "Desconectado"
}, _t = (...e) => e.filter(Boolean).join(" "), x1 = g(function({ status: n = "offline", label: s = !1, className: l, ...o }, c) {
  const a = s === !0 ? it[n] : s || void 0;
  return /* @__PURE__ */ _("span", { ref: c, className: _t(Ie.status, l), ...o, children: [
    /* @__PURE__ */ t("span", { className: _t(Ie.dot, Ie[n]), role: "img", "aria-label": it[n] }),
    a ? /* @__PURE__ */ t("span", { className: Ie.label, children: a }) : null
  ] });
}), fl = "_pill_jgpzs_1", pl = "_selected_jgpzs_32", dt = {
  pill: fl,
  selected: pl
}, vl = (...e) => e.filter(Boolean).join(" "), q1 = g(function({ selected: n = !1, className: s, children: l, type: o = "button", ...c }, a) {
  return /* @__PURE__ */ t(
    "button",
    {
      ref: a,
      type: o,
      "aria-pressed": n,
      className: vl(dt.pill, n && dt.selected, s),
      ...c,
      children: l
    }
  );
}), bl = "_chip_yyhx5_1", yl = "_label_yyhx5_14", $l = "_input_yyhx5_17", gl = "_avatar_yyhx5_18", Nl = "_avatarSlot_yyhx5_38", wl = "_remove_yyhx5_44", kl = "_choice_yyhx5_62", xl = "_choiceSelected_yyhx5_81", ql = "_disabled_yyhx5_88", Y = {
  chip: bl,
  label: yl,
  input: $l,
  avatar: gl,
  avatarSlot: Nl,
  remove: wl,
  choice: kl,
  choiceSelected: xl,
  disabled: ql
}, ut = (...e) => e.filter(Boolean).join(" "), T1 = g(function({ variant: n = "input", label: s, disabled: l, avatar: o, onRemove: c, selected: a, onToggle: r, className: i, ...u }, d) {
  return n === "choice" ? /* @__PURE__ */ _(
    "button",
    {
      type: "button",
      disabled: l,
      "aria-pressed": !!a,
      onClick: r,
      className: ut(Y.chip, Y.choice, a && Y.choiceSelected, i),
      children: [
        a ? /* @__PURE__ */ t(q, { glyph: "Check", size: 16 }) : null,
        /* @__PURE__ */ t("span", { className: Y.label, children: s })
      ]
    }
  ) : /* @__PURE__ */ _(
    "span",
    {
      ref: d,
      "aria-disabled": l || void 0,
      className: ut(Y.chip, Y[n], l && Y.disabled, i),
      ...u,
      children: [
        n === "avatar" && o ? /* @__PURE__ */ t("span", { className: Y.avatarSlot, children: o }) : null,
        /* @__PURE__ */ t("span", { className: Y.label, children: s }),
        c ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Y.remove,
            "aria-label": `Quitar ${s}`,
            disabled: l,
            onClick: c,
            children: /* @__PURE__ */ t(q, { glyph: "Close", size: 16 })
          }
        ) : null
      ]
    }
  );
}), Tl = "_divider_17y29_1", jl = "_horizontal_17y29_5", Bl = "_vertical_17y29_9", zl = "_labeled_17y29_14", Ml = "_line_17y29_20", Dl = "_label_17y29_14", ue = {
  divider: Tl,
  horizontal: jl,
  vertical: Bl,
  labeled: zl,
  line: Ml,
  label: Dl
}, mt = (...e) => e.filter(Boolean).join(" "), j1 = g(function({ orientation: n = "horizontal", label: s, className: l, ...o }, c) {
  return n === "horizontal" && s ? /* @__PURE__ */ _("div", { ref: c, role: "separator", className: mt(ue.labeled, l), ...o, children: [
    /* @__PURE__ */ t("span", { className: ue.line }),
    /* @__PURE__ */ t("span", { className: ue.label, children: s }),
    /* @__PURE__ */ t("span", { className: ue.line })
  ] }) : /* @__PURE__ */ t(
    "div",
    {
      ref: c,
      role: "separator",
      "aria-orientation": n,
      className: mt(ue.divider, ue[n], l),
      ...o
    }
  );
}), Zl = "_avatar_no25a_1", Il = "_img_no25a_15", Rl = "_icon_no25a_21", El = "_xs_no25a_25", Ll = "_sm_no25a_26", Al = "_md_no25a_27", Sl = "_lg_no25a_28", Pl = "_xl_no25a_35", we = {
  avatar: Zl,
  img: Il,
  icon: Rl,
  xs: El,
  sm: Ll,
  md: Al,
  lg: Sl,
  xl: Pl
}, Hl = (...e) => e.filter(Boolean).join(" "), Cl = g(function({ size: n = "md", src: s, alt: l = "", initials: o = "", className: c, ...a }, r) {
  return /* @__PURE__ */ t("span", { ref: r, className: Hl(we.avatar, we[n], c), ...a, children: s ? /* @__PURE__ */ t("img", { className: we.img, src: s, alt: l }) : o ? /* @__PURE__ */ t("span", { className: we.initials, children: o }) : /* @__PURE__ */ t(q, { glyph: "account_circle", className: we.icon }) });
}), Fl = "_spinner_8pvqx_1", Kl = "_sm_8pvqx_10", Gl = "_md_8pvqx_11", Wl = "_lg_8pvqx_12", ht = {
  spinner: Fl,
  "viu-spin": "_viu-spin_8pvqx_1",
  sm: Kl,
  md: Gl,
  lg: Wl
}, Yl = (...e) => e.filter(Boolean).join(" "), Jl = g(function({ size: n = "md", label: s = "Cargando", className: l, ...o }, c) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: c,
      role: "status",
      "aria-label": s,
      className: Yl(ht.spinner, ht[n], l),
      ...o
    }
  );
}), Ql = "_skeleton_1cpkq_1", Ul = "_text_1cpkq_15", Xl = "_rect_1cpkq_19", Ol = "_circle_1cpkq_22", ft = {
  skeleton: Ql,
  "viu-shimmer": "_viu-shimmer_1cpkq_1",
  text: Ul,
  rect: Xl,
  circle: Ol
}, Vl = (...e) => e.filter(Boolean).join(" "), B1 = g(function({ variant: n = "text", width: s, height: l, className: o, style: c, ...a }, r) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: r,
      "aria-hidden": !0,
      className: Vl(ft.skeleton, ft[n], o),
      style: { width: s, height: l, ...c },
      ...a
    }
  );
}), eo = "_field_1y8nq_1", to = "_input_1y8nq_16", no = "_error_1y8nq_37", We = {
  field: eo,
  input: to,
  error: no
}, so = (...e) => e.filter(Boolean).join(" "), z1 = g(function({ error: n, className: s, ...l }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      className: so(We.field, We.input, n && We.error, s),
      "aria-invalid": n || void 0,
      ...l
    }
  );
}), lo = "_field_1mzci_1", oo = "_error_1mzci_36", pt = {
  field: lo,
  error: oo
}, co = (...e) => e.filter(Boolean).join(" "), M1 = g(function({ error: n, className: s, ...l }, o) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: o,
      className: co(pt.field, n && pt.error, s),
      "aria-invalid": n || void 0,
      ...l
    }
  );
}), ao = "_wrap_1v3ug_1", ro = "_field_1v3ug_6", io = "_error_1v3ug_41", _o = "_chevron_1v3ug_46", Re = {
  wrap: ao,
  field: ro,
  error: io,
  chevron: _o
}, uo = (...e) => e.filter(Boolean).join(" "), D1 = g(function({ error: n, className: s, children: l, ...o }, c) {
  return /* @__PURE__ */ _("span", { className: Re.wrap, children: [
    /* @__PURE__ */ t(
      "select",
      {
        ref: c,
        className: uo(Re.field, n && Re.error, s),
        "aria-invalid": n || void 0,
        ...o,
        children: l
      }
    ),
    /* @__PURE__ */ t(q, { glyph: "Chevron", size: 16, className: Re.chevron })
  ] });
}), mo = "_root_vywb3_1", ho = "_track_vywb3_6", fo = "_thumb_vywb3_20", po = "_label_vywb3_48", Ee = {
  root: mo,
  track: ho,
  thumb: fo,
  label: po
}, vt = (...e) => e.filter(Boolean).join(" "), Z1 = g(function({ checked: n = !1, onCheckedChange: s, label: l, disabled: o, className: c, onClick: a, ...r }, i) {
  const u = /* @__PURE__ */ t(
    "button",
    {
      ref: i,
      type: "button",
      role: "switch",
      "aria-checked": n,
      disabled: o,
      className: vt(Ee.track, !l && c),
      onClick: (d) => {
        a == null || a(d), s == null || s(!n);
      },
      ...r,
      children: /* @__PURE__ */ t("span", { className: Ee.thumb, "aria-hidden": !0 })
    }
  );
  return l == null ? u : /* @__PURE__ */ _("label", { className: vt(Ee.root, c), children: [
    u,
    /* @__PURE__ */ t("span", { className: Ee.label, children: l })
  ] });
}), vo = "_slider_t4q99_2", bo = "_rangeInput_t4q99_29", yo = "_rangeDisabled_t4q99_67", $o = "_range_t4q99_29", go = "_rail_t4q99_84", No = "_band_t4q99_85", le = {
  slider: vo,
  rangeInput: bo,
  rangeDisabled: yo,
  range: $o,
  rail: go,
  band: No
}, Gt = (...e) => e.filter(Boolean).join(" "), bt = (e) => `linear-gradient(90deg, var(--color-bg-brand) ${e}%, var(--color-bg-subtle) ${e}%)`;
function wo({
  min: e = 0,
  max: n = 100,
  step: s,
  value: l,
  defaultValue: o,
  onValueChange: c,
  disabled: a,
  labels: r = ["Valor mínimo", "Valor máximo"],
  className: i,
  style: u,
  id: d
}) {
  const m = l != null, [h, y] = B(o ?? [e, n]), [N, v] = m ? l : h, p = n > e ? n - e : 1, f = (N - e) / p * 100, x = (v - e) / p * 100, $ = (f + x) / 2 > 50, b = (w) => {
    m || y(w), c == null || c(w);
  };
  return /* @__PURE__ */ _(
    "span",
    {
      className: Gt(le.range, a && le.rangeDisabled, i),
      style: u,
      children: [
        /* @__PURE__ */ t("span", { className: le.rail, "aria-hidden": !0 }),
        /* @__PURE__ */ t(
          "span",
          {
            className: le.band,
            "aria-hidden": !0,
            style: { left: `${f}%`, right: `${100 - x}%` }
          }
        ),
        /* @__PURE__ */ t(
          "input",
          {
            type: "range",
            className: le.rangeInput,
            min: e,
            max: n,
            step: s,
            value: N,
            disabled: a,
            "aria-label": r[0],
            id: d ? `${d}-min` : void 0,
            style: { zIndex: $ ? 4 : 3 },
            onChange: (w) => b([Math.min(Number(w.target.value), v), v])
          }
        ),
        /* @__PURE__ */ t(
          "input",
          {
            type: "range",
            className: le.rangeInput,
            min: e,
            max: n,
            step: s,
            value: v,
            disabled: a,
            "aria-label": r[1],
            id: d ? `${d}-max` : void 0,
            style: { zIndex: $ ? 3 : 4 },
            onChange: (w) => b([N, Math.max(Number(w.target.value), N)])
          }
        )
      ]
    }
  );
}
const I1 = g(function(n, s) {
  if (n.range) {
    const { range: p, ...f } = n;
    return /* @__PURE__ */ t(wo, { ...f });
  }
  const {
    range: l,
    className: o,
    min: c = 0,
    max: a = 100,
    value: r,
    defaultValue: i,
    style: u,
    onInput: d,
    ...m
  } = n, h = Number(c), y = Number(a), N = Number(r ?? i ?? h), v = y > h ? (N - h) / (y - h) * 100 : 0;
  return /* @__PURE__ */ t(
    "input",
    {
      ref: s,
      type: "range",
      min: c,
      max: a,
      value: r,
      defaultValue: i,
      className: Gt(le.slider, o),
      style: { "--viu-track": bt(v), ...u },
      onInput: (p) => {
        const f = p.currentTarget, x = y > h ? (Number(f.value) - h) / (y - h) * 100 : 0;
        f.style.setProperty("--viu-track", bt(x)), d == null || d(p);
      },
      ...m
    }
  );
}), ko = "_track_lra6a_1", xo = "_sm_lra6a_7", qo = "_md_lra6a_8", To = "_lg_lra6a_9", jo = "_fill_lra6a_10", Bo = "_indeterminate_lra6a_16", Le = {
  track: ko,
  sm: xo,
  md: qo,
  lg: To,
  fill: jo,
  indeterminate: Bo,
  "viu-progress": "_viu-progress_lra6a_1"
}, zo = (...e) => e.filter(Boolean).join(" "), R1 = g(function({ value: n = 0, max: s = 100, size: l = "md", indeterminate: o = !1, label: c, className: a, ...r }, i) {
  const u = Math.max(0, Math.min(100, n / s * 100));
  return /* @__PURE__ */ t(
    "div",
    {
      ref: i,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": s,
      "aria-valuenow": o ? void 0 : n,
      "aria-label": c,
      className: zo(Le.track, Le[l], o && Le.indeterminate, a),
      ...r,
      children: /* @__PURE__ */ t("div", { className: Le.fill, style: o ? void 0 : { width: `${u}%` } })
    }
  );
}), yt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
function Wt(e) {
  const [n, s] = B(e), l = Qt(
    (o, c) => {
      if (!o || !c || typeof window > "u") {
        s(e);
        return;
      }
      const a = o.getBoundingClientRect(), r = c.getBoundingClientRect(), i = 8, u = window.innerWidth, d = window.innerHeight, m = (h) => {
        switch (h) {
          case "top":
            return a.top - i - r.height >= 0;
          case "bottom":
            return a.bottom + i + r.height <= d;
          case "left":
            return a.left - i - r.width >= 0;
          case "right":
            return a.right + i + r.width <= u;
        }
      };
      s(m(e) || !m(yt[e]) ? e : yt[e]);
    },
    [e]
  );
  return { side: n, recompute: l };
}
const Mo = "_wrap_14xg7_1", Do = "_bubble_14xg7_5", Zo = "_top_14xg7_25", Io = "_bottom_14xg7_30", Ro = "_left_14xg7_35", Eo = "_right_14xg7_40", Ye = {
  wrap: Mo,
  bubble: Do,
  top: Zo,
  bottom: Io,
  left: Ro,
  right: Eo
}, Lo = (...e) => e.filter(Boolean).join(" ");
function E1({ label: e, side: n = "top", children: s }) {
  const l = Z(null), o = Z(null), { side: c, recompute: a } = Wt(n), r = () => a(l.current, o.current);
  return /* @__PURE__ */ _(
    "span",
    {
      className: Ye.wrap,
      ref: l,
      onPointerEnter: r,
      onFocusCapture: r,
      children: [
        s,
        /* @__PURE__ */ t("span", { ref: o, role: "tooltip", className: Lo(Ye.bubble, Ye[c]), children: e })
      ]
    }
  );
}
const Ao = "_rating_1fbkn_1", So = "_star_1fbkn_6", Po = "_button_1fbkn_13", Ho = "_filled_1fbkn_21", me = {
  rating: Ao,
  star: So,
  button: Po,
  filled: Ho
}, Je = (...e) => e.filter(Boolean).join(" ");
function $t({ size: e }) {
  return /* @__PURE__ */ t("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: /* @__PURE__ */ t("path", { d: "M12 2l2.9 6.26 6.6.7-4.9 4.6 1.3 6.74L12 17.6 6.1 20.9l1.3-6.74L2.5 8.96l6.6-.7L12 2Z" }) });
}
function L1({
  value: e = 0,
  max: n = 5,
  size: s = 20,
  onChange: l,
  readOnly: o,
  className: c,
  "aria-label": a
}) {
  const r = !!l && !o;
  return /* @__PURE__ */ t(
    "span",
    {
      role: r ? "radiogroup" : "img",
      "aria-label": a ?? `${e} de ${n}`,
      className: Je(me.rating, c),
      children: Array.from({ length: n }, (i, u) => {
        const d = u + 1, m = d <= e;
        return r ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-label": `${d}`,
            "aria-pressed": m,
            className: Je(me.star, me.button, m && me.filled),
            onClick: () => l(d),
            children: /* @__PURE__ */ t($t, { size: s })
          },
          d
        ) : /* @__PURE__ */ t("span", { className: Je(me.star, m && me.filled), children: /* @__PURE__ */ t($t, { size: s }) }, d);
      })
    }
  );
}
const Co = "_tab_1dyww_1", Fo = "_inner_1dyww_12", Ko = "_icon_1dyww_27", Go = "_underline_1dyww_34", Wo = "_segmented_1dyww_44", Yo = "_line_1dyww_47", he = {
  tab: Co,
  inner: Fo,
  icon: Ko,
  underline: Go,
  segmented: Wo,
  line: Yo
}, Jo = (...e) => e.filter(Boolean).join(" "), Qo = g(function({ active: n = !1, variant: s = "line", icon: l, trailingIcon: o, children: c, className: a, type: r = "button", ...i }, u) {
  return /* @__PURE__ */ _(
    "button",
    {
      ref: u,
      type: r,
      role: "tab",
      "aria-selected": n,
      className: Jo(he.tab, he[s], a),
      ...i,
      children: [
        /* @__PURE__ */ _("span", { className: he.inner, children: [
          l ? /* @__PURE__ */ t("span", { className: he.icon, "aria-hidden": !0, children: l }) : null,
          /* @__PURE__ */ t("span", { children: c }),
          o ? /* @__PURE__ */ t("span", { className: he.icon, "aria-hidden": !0, children: o }) : null
        ] }),
        s === "line" ? /* @__PURE__ */ t("span", { className: he.underline, "aria-hidden": !0 }) : null
      ]
    }
  );
}), Uo = "_step_zkxzi_1", Xo = "_row_zkxzi_8", Oo = "_node_zkxzi_14", Vo = "_connector_zkxzi_27", ec = "_label_zkxzi_33", tc = "_complete_zkxzi_41", nc = "_current_zkxzi_48", sc = "_upcoming_zkxzi_53", fe = {
  step: Uo,
  row: Xo,
  node: Oo,
  connector: Vo,
  label: ec,
  complete: tc,
  current: nc,
  upcoming: sc
}, lc = (...e) => e.filter(Boolean).join(" "), oc = g(function({ status: n = "upcoming", number: s, label: l, connector: o = !1, className: c, ...a }, r) {
  return /* @__PURE__ */ _("div", { ref: r, className: lc(fe.step, fe[n], c), ...a, children: [
    /* @__PURE__ */ _("div", { className: fe.row, children: [
      /* @__PURE__ */ t("span", { className: fe.node, children: n === "complete" ? /* @__PURE__ */ t(q, { glyph: "Check", size: 16 }) : s }),
      o ? /* @__PURE__ */ t("span", { className: fe.connector }) : null
    ] }),
    l != null ? /* @__PURE__ */ t("span", { className: fe.label, children: l }) : null
  ] });
}), cc = "_badge_1tsg6_1", ac = "_dot_1tsg6_8", rc = "_count_1tsg6_13", Ae = {
  badge: cc,
  dot: ac,
  count: rc
}, gt = (...e) => e.filter(Boolean).join(" "), A1 = g(
  function({ count: n = 0, max: s = 99, dot: l = !1, className: o, ...c }, a) {
    if (l)
      return /* @__PURE__ */ t("span", { ref: a, className: gt(Ae.badge, Ae.dot, o), ...c });
    const r = n > s ? `${s}+` : String(n);
    return /* @__PURE__ */ t("span", { ref: a, className: gt(Ae.badge, Ae.count, o), ...c, children: r });
  }
), ic = "_image_pi6qs_1", _c = "_r169_pi6qs_7", dc = "_r43_pi6qs_8", uc = "_r11_pi6qs_9", mc = "_r32_pi6qs_10", hc = "_img_pi6qs_12", fc = "_placeholder_pi6qs_19", pc = "_caption_pi6qs_32", pe = {
  image: ic,
  r169: _c,
  r43: dc,
  r11: uc,
  r32: mc,
  img: hc,
  placeholder: fc,
  caption: pc
}, vc = {
  "16:9": "r169",
  "4:3": "r43",
  "1:1": "r11",
  "3:2": "r32",
  free: void 0
}, bc = (...e) => e.filter(Boolean).join(" "), S1 = g(function({ src: n, alt: s = "", ratio: l = "16:9", state: o, errorLabel: c = "Sin imagen", className: a, ...r }, i) {
  const [u, d] = B(!1), m = o ?? (!n || u ? "error" : "default"), h = vc[l];
  return /* @__PURE__ */ _("div", { ref: i, className: bc(pe.image, h && pe[h], a), ...r, children: [
    m === "default" && n ? /* @__PURE__ */ t("img", { className: pe.img, src: n, alt: s, onError: () => d(!0) }) : null,
    m === "loading" ? /* @__PURE__ */ t("div", { className: pe.placeholder, children: /* @__PURE__ */ t(Jl, { size: "sm" }) }) : null,
    m === "error" ? /* @__PURE__ */ _("div", { className: pe.placeholder, children: [
      /* @__PURE__ */ t(q, { glyph: "Alert", size: 24 }),
      /* @__PURE__ */ t("span", { className: pe.caption, children: c })
    ] }) : null
  ] });
}), yc = "_container_1fm2i_3", $c = "_sm_1fm2i_14", gc = "_md_1fm2i_15", Nc = "_lg_1fm2i_16", wc = "_filled_1fm2i_22", kc = "_brand_1fm2i_22", xc = "_neutral_1fm2i_23", qc = "_inverse_1fm2i_24", Tc = "_danger_1fm2i_25", jc = "_warning_1fm2i_26", Bc = "_success_1fm2i_27", zc = "_info_1fm2i_28", Mc = "_disabled_1fm2i_29", Dc = "_stroke_1fm2i_32", Se = {
  container: yc,
  sm: $c,
  md: gc,
  lg: Nc,
  filled: wc,
  brand: kc,
  neutral: xc,
  inverse: qc,
  danger: Tc,
  warning: jc,
  success: Bc,
  info: zc,
  disabled: Mc,
  stroke: Dc
}, Zc = (...e) => e.filter(Boolean).join(" "), P1 = g(function({ size: n = "lg", tone: s = "neutral", appearance: l = "filled", icon: o, className: c, ...a }, r) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: r,
      className: Zc(Se.container, Se[n], Se[l], Se[s], c),
      ...a,
      children: o
    }
  );
}), Ic = "_field_1hv29_1", Rc = "_label_1hv29_7", Ec = "_req_1hv29_17", Lc = "_message_1hv29_20", Ac = "_error_1hv29_27", Sc = "_disabled_1hv29_30", ve = {
  field: Ic,
  label: Rc,
  req: Ec,
  message: Lc,
  error: Ac,
  disabled: Sc
}, Nt = (...e) => e.filter(Boolean).join(" "), H1 = g(function({ label: n, htmlFor: s, required: l, helper: o, error: c, disabled: a, children: r, className: i, ...u }, d) {
  const m = c ?? o;
  return /* @__PURE__ */ _("div", { ref: d, "aria-disabled": a || void 0, className: Nt(ve.field, a && ve.disabled, i), ...u, children: [
    /* @__PURE__ */ _("label", { className: ve.label, htmlFor: s, children: [
      n,
      l ? /* @__PURE__ */ t("span", { className: ve.req, "aria-hidden": !0, children: "*" }) : null
    ] }),
    r,
    m ? /* @__PURE__ */ t("p", { className: Nt(ve.message, c ? ve.error : !1), children: m }) : null
  ] });
}), Pc = "_tablist_1icu1_1", Hc = "_segmented_1icu1_6", wt = {
  tablist: Pc,
  segmented: Hc
}, Cc = (...e) => e.filter(Boolean).join(" ");
function C1({ items: e, value: n, onValueChange: s, variant: l = "line", className: o, ...c }) {
  const a = Z({}), r = e.filter((u) => !u.disabled), i = (u) => {
    var h;
    const d = r.findIndex((y) => y.value === n), m = r[(d + u + r.length) % r.length];
    m && (s(m.value), (h = a.current[m.value]) == null || h.focus());
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "tablist",
      "aria-label": c["aria-label"],
      className: Cc(wt.tablist, l === "segmented" && wt.segmented, o),
      onKeyDown: (u) => {
        u.key === "ArrowRight" || u.key === "ArrowDown" ? (u.preventDefault(), i(1)) : (u.key === "ArrowLeft" || u.key === "ArrowUp") && (u.preventDefault(), i(-1));
      },
      children: e.map((u) => /* @__PURE__ */ t(
        Qo,
        {
          ref: (d) => {
            a.current[u.value] = d;
          },
          variant: l,
          active: n === u.value,
          disabled: u.disabled,
          icon: u.icon,
          tabIndex: n === u.value ? 0 : -1,
          onClick: () => s(u.value),
          children: u.label
        },
        u.value
      ))
    }
  );
}
const Fc = "_nav_1wdcj_1", Kc = "_list_1wdcj_4", Gc = "_item_1wdcj_13", Wc = "_link_1wdcj_22", Yc = "_current_1wdcj_35", Jc = "_sep_1wdcj_38", be = {
  nav: Fc,
  list: Kc,
  item: Gc,
  link: Wc,
  current: Yc,
  sep: Jc
}, Qc = (...e) => e.filter(Boolean).join(" ");
function F1({ items: e, separator: n = "chevron", className: s, ...l }) {
  const o = n === "slash" ? "/" : "›";
  return /* @__PURE__ */ t("nav", { "aria-label": l["aria-label"] ?? "Breadcrumb", className: Qc(be.nav, s), children: /* @__PURE__ */ t("ol", { className: be.list, children: e.map((c, a) => {
    const r = a === e.length - 1;
    return /* @__PURE__ */ _("li", { className: be.item, children: [
      r || !c.href ? /* @__PURE__ */ t("span", { className: be.current, "aria-current": r ? "page" : void 0, children: c.label }) : /* @__PURE__ */ t("a", { href: c.href, className: be.link, children: c.label }),
      r ? null : /* @__PURE__ */ t("span", { className: be.sep, "aria-hidden": !0, children: o })
    ] }, a);
  }) }) });
}
const Uc = "_banner_1j76c_1", Xc = "_icon_1j76c_9", Oc = "_content_1j76c_14", Vc = "_title_1j76c_21", ea = "_message_1j76c_29", ta = "_link_1j76c_36", na = "_close_1j76c_39", sa = "_info_1j76c_60", la = "_success_1j76c_62", oa = "_warning_1j76c_64", ca = "_danger_1j76c_66", aa = "_neutral_1j76c_68", O = {
  banner: Uc,
  icon: Xc,
  content: Oc,
  title: Vc,
  message: ea,
  link: ta,
  close: na,
  info: sa,
  success: la,
  warning: oa,
  danger: ca,
  neutral: aa
}, ra = {
  info: "Info",
  neutral: "Info",
  success: "Check",
  warning: "Alert",
  danger: "Alert"
}, ia = (...e) => e.filter(Boolean).join(" "), K1 = g(function({ tone: n = "info", title: s, link: l, onClose: o, children: c, className: a, ...r }, i) {
  return /* @__PURE__ */ _("div", { ref: i, role: "status", className: ia(O.banner, O[n], a), ...r, children: [
    /* @__PURE__ */ t("span", { className: O.icon, "aria-hidden": !0, children: /* @__PURE__ */ t(q, { glyph: ra[n], size: 16 }) }),
    /* @__PURE__ */ _("div", { className: O.content, children: [
      s ? /* @__PURE__ */ t("p", { className: O.title, children: s }) : null,
      c ? /* @__PURE__ */ t("p", { className: O.message, children: c }) : null,
      l ? /* @__PURE__ */ t("div", { className: O.link, children: l }) : null
    ] }),
    o ? /* @__PURE__ */ t("button", { type: "button", className: O.close, "aria-label": "Cerrar", onClick: o, children: /* @__PURE__ */ t(q, { glyph: "Close", size: 16 }) }) : null
  ] });
}), _a = "_toast_16bp1_1", da = "_icon_16bp1_13", ua = "_content_16bp1_17", ma = "_title_16bp1_24", ha = "_message_16bp1_32", fa = "_close_16bp1_39", pa = "_info_16bp1_59", va = "_success_16bp1_60", ba = "_warning_16bp1_61", ya = "_danger_16bp1_62", ne = {
  toast: _a,
  icon: da,
  content: ua,
  title: ma,
  message: ha,
  close: fa,
  info: pa,
  success: va,
  warning: ba,
  danger: ya
}, $a = {
  info: "Info",
  success: "Check",
  warning: "Alert",
  danger: "Alert"
}, kt = (...e) => e.filter(Boolean).join(" "), G1 = g(function({ tone: n = "info", title: s, onClose: l, children: o, className: c, ...a }, r) {
  return /* @__PURE__ */ _("div", { ref: r, role: "status", "aria-live": "polite", className: kt(ne.toast, c), ...a, children: [
    /* @__PURE__ */ t("span", { className: kt(ne.icon, ne[n]), "aria-hidden": !0, children: /* @__PURE__ */ t(q, { glyph: $a[n], size: 20 }) }),
    /* @__PURE__ */ _("div", { className: ne.content, children: [
      s ? /* @__PURE__ */ t("p", { className: ne.title, children: s }) : null,
      o ? /* @__PURE__ */ t("p", { className: ne.message, children: o }) : null
    ] }),
    l ? /* @__PURE__ */ t("button", { type: "button", className: ne.close, "aria-label": "Cerrar", onClick: l, children: /* @__PURE__ */ t(q, { glyph: "Close", size: 16 }) }) : null
  ] });
}), ga = "_nav_1tflq_1", Na = "_simple_1tflq_6", wa = "_cell_1tflq_9", ka = "_edge_1tflq_36", xa = "_current_1tflq_39", qa = "_ellipsis_1tflq_48", Ta = "_text_1tflq_56", ja = "_chevLeft_1tflq_62", F = {
  nav: ga,
  simple: Na,
  cell: wa,
  edge: ka,
  current: xa,
  ellipsis: qa,
  text: Ta,
  chevLeft: ja
}, Pe = (...e) => e.filter(Boolean).join(" ");
function Ba(e, n, s) {
  const l = [], o = Math.max(2, e - s), c = Math.min(n - 1, e + s);
  l.push(1), o > 2 && l.push("…");
  for (let a = o; a <= c; a++) l.push(a);
  return c < n - 1 && l.push("…"), n > 1 && l.push(n), l;
}
function W1({
  page: e,
  total: n,
  onPageChange: s,
  variant: l = "numbered",
  siblingCount: o = 1,
  className: c,
  ...a
}) {
  const r = (d) => s(Math.max(1, Math.min(n, d))), i = /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: Pe(F.cell, F.edge),
      "aria-label": "Página anterior",
      disabled: e <= 1,
      onClick: () => r(e - 1),
      children: /* @__PURE__ */ t(q, { glyph: "Chevron", size: 16, className: F.chevLeft })
    }
  ), u = /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: Pe(F.cell, F.edge),
      "aria-label": "Página siguiente",
      disabled: e >= n,
      onClick: () => r(e + 1),
      children: /* @__PURE__ */ t(q, { glyph: "Chevron", size: 16 })
    }
  );
  return /* @__PURE__ */ _(
    "nav",
    {
      "aria-label": a["aria-label"] ?? "Paginación",
      className: Pe(F.nav, l === "simple" && F.simple, c),
      children: [
        i,
        l === "numbered" ? Ba(e, n, o).map(
          (d, m) => d === "…" ? /* @__PURE__ */ t("span", { className: F.ellipsis, "aria-hidden": !0, children: "…" }, `e${m}`) : /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Pe(F.cell, d === e && F.current),
              "aria-label": `Página ${d}`,
              "aria-current": d === e ? "page" : void 0,
              onClick: () => r(d),
              children: d
            },
            d
          )
        ) : /* @__PURE__ */ _("span", { className: F.text, children: [
          "Página ",
          e,
          " de ",
          n
        ] }),
        u
      ]
    }
  );
}
const za = "_nav_56m8j_1", Ma = {
  nav: za
}, Da = (...e) => e.filter(Boolean).join(" ");
function Y1({ children: e, className: n, ...s }) {
  return /* @__PURE__ */ t("nav", { className: Da(Ma.nav, n), ...s, children: e });
}
const Za = "_item_z9ht7_1", Ia = "_active_z9ht7_26", Ra = "_icon_z9ht7_34", Ea = "_label_z9ht7_42", He = {
  item: Za,
  active: Ia,
  icon: Ra,
  label: Ea
}, La = (...e) => e.filter(Boolean).join(" "), J1 = g(function({ icon: n, active: s, children: l, className: o, ...c }, a) {
  return /* @__PURE__ */ _(
    "a",
    {
      ref: a,
      className: La(He.item, s && He.active, o),
      "aria-current": s ? "page" : void 0,
      ...c,
      children: [
        n ? /* @__PURE__ */ t("span", { className: He.icon, "aria-hidden": !0, children: n }) : null,
        /* @__PURE__ */ t("span", { className: He.label, children: l })
      ]
    }
  );
}), Aa = "_accordion_1938y_1", Sa = {
  accordion: Aa
}, Pa = (...e) => e.filter(Boolean).join(" ");
function Q1({ children: e, className: n, ...s }) {
  return /* @__PURE__ */ t("div", { className: Pa(Sa.accordion, n), ...s, children: e });
}
const Ha = "_header_1hunf_1", Ca = "_title_1hunf_22", Fa = "_chevron_1hunf_26", Ka = "_open_1hunf_31", Ga = "_body_1hunf_34", ke = {
  header: Ha,
  title: Ca,
  chevron: Fa,
  open: Ka,
  body: Ga
}, Wa = (...e) => e.filter(Boolean).join(" "), U1 = g(function({ title: n, defaultOpen: s = !1, open: l, onOpenChange: o, children: c, className: a, ...r }, i) {
  const [u, d] = B(s), m = l ?? u, h = E(), y = () => {
    o == null || o(!m), l === void 0 && d((N) => !N);
  };
  return /* @__PURE__ */ _("div", { ref: i, className: a, ...r, children: [
    /* @__PURE__ */ _("button", { type: "button", className: ke.header, "aria-expanded": m, "aria-controls": h, onClick: y, children: [
      /* @__PURE__ */ t("span", { className: ke.title, children: n }),
      /* @__PURE__ */ t(q, { glyph: "Chevron", size: 16, className: Wa(ke.chevron, m && ke.open) })
    ] }),
    /* @__PURE__ */ t("div", { id: h, role: "region", hidden: !m, className: ke.body, children: c })
  ] });
}), Ya = "_list_7mf22_1", Ja = {
  list: Ya
}, Qa = (...e) => e.filter(Boolean).join(" ");
function X1({ children: e, className: n, ...s }) {
  return /* @__PURE__ */ t("ul", { role: "list", className: Qa(Ja.list, n), ...s, children: e });
}
const Ua = "_li_6azkd_1", Xa = "_row_6azkd_4", Oa = "_interactive_6azkd_22", Va = "_selected_6azkd_32", er = "_disabled_6azkd_35", tr = "_title_6azkd_39", nr = "_subtitle_6azkd_40", sr = "_meta_6azkd_41", lr = "_chev_6azkd_42", or = "_leading_6azkd_45", cr = "_content_6azkd_49", ar = "_trailing_6azkd_76", S = {
  li: Ua,
  row: Xa,
  interactive: Oa,
  selected: Va,
  disabled: er,
  title: tr,
  subtitle: nr,
  meta: sr,
  chev: lr,
  leading: or,
  content: cr,
  trailing: ar
}, xt = (...e) => e.filter(Boolean).join(" ");
function O1({
  leading: e,
  title: n,
  subtitle: s,
  meta: l,
  selected: o,
  disabled: c,
  chevron: a,
  onSelect: r,
  className: i,
  ...u
}) {
  const d = !!r, m = xt(
    S.row,
    d && S.interactive,
    o && S.selected,
    c && S.disabled
  ), h = /* @__PURE__ */ _(Be, { children: [
    e ? /* @__PURE__ */ t("span", { className: S.leading, children: e }) : null,
    /* @__PURE__ */ _("span", { className: S.content, children: [
      /* @__PURE__ */ t("span", { className: S.title, children: n }),
      s ? /* @__PURE__ */ t("span", { className: S.subtitle, children: s }) : null
    ] }),
    l || a ? /* @__PURE__ */ _("span", { className: S.trailing, children: [
      l ? /* @__PURE__ */ t("span", { className: S.meta, children: l }) : null,
      a ? /* @__PURE__ */ t(q, { glyph: "Chevron", size: 16, className: S.chev }) : null
    ] }) : null
  ] });
  return /* @__PURE__ */ t("li", { className: xt(S.li, i), ...u, children: d ? /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: m,
      disabled: c,
      "aria-current": o ? "true" : void 0,
      onClick: r,
      children: h
    }
  ) : /* @__PURE__ */ t("div", { className: m, "aria-current": o ? "true" : void 0, children: h }) });
}
const rr = "_group_6f67s_1", ir = "_ring_6f67s_4", _r = "_count_6f67s_11", dr = "_xs_6f67s_22", ur = "_sm_6f67s_23", mr = "_md_6f67s_24", hr = "_lg_6f67s_25", fr = "_xl_6f67s_26", xe = {
  group: rr,
  ring: ir,
  count: _r,
  xs: dr,
  sm: ur,
  md: mr,
  lg: hr,
  xl: fr
}, qt = (...e) => e.filter(Boolean).join(" ");
function V1({ items: e, max: n = 4, size: s = "md", className: l }) {
  const o = e.slice(0, n), c = e.length - o.length;
  return /* @__PURE__ */ _("div", { className: qt(xe.group, l), children: [
    o.map((a, r) => /* @__PURE__ */ t("span", { className: xe.ring, children: /* @__PURE__ */ t(Cl, { size: s, src: a.src, alt: a.alt, initials: a.initials }) }, r)),
    c > 0 ? /* @__PURE__ */ t("span", { className: xe.ring, children: /* @__PURE__ */ _("span", { className: qt(xe.count, xe[s]), "aria-label": `${c} más`, children: [
      "+",
      c
    ] }) }) : null
  ] });
}
const pr = "_stepper_wqhfv_1", vr = {
  stepper: pr
}, br = (...e) => e.filter(Boolean).join(" ");
function yr({ steps: e, className: n, ...s }) {
  return /* @__PURE__ */ t("div", { role: "list", className: br(vr.stepper, n), ...s, children: e.map((l, o) => {
    const c = o === e.length - 1;
    return /* @__PURE__ */ t(
      oc,
      {
        role: "listitem",
        status: l.status,
        number: l.number ?? o + 1,
        label: l.label,
        connector: !c,
        style: c ? void 0 : { flex: "1 1 0", width: "auto", minWidth: 0 }
      },
      o
    );
  }) });
}
const $r = "_menu_9ggr2_1", gr = {
  menu: $r
}, Nr = (...e) => e.filter(Boolean).join(" ");
function eu({ children: e, className: n, ...s }) {
  return /* @__PURE__ */ t("div", { role: "menu", className: Nr(gr.menu, n), ...s, children: e });
}
const wr = "_zone_2mupu_1", kr = "_active_2mupu_27", xr = "_error_2mupu_31", qr = "_input_2mupu_34", Tr = "_circle_2mupu_37", jr = "_title_2mupu_51", Br = "_hint_2mupu_58", se = {
  zone: wr,
  active: kr,
  error: xr,
  input: qr,
  circle: Tr,
  title: jr,
  hint: Br
}, zr = (...e) => e.filter(Boolean).join(" "), tu = g(function({
  title: n = "Arrastrá tus archivos o hacé click para explorar",
  hint: s = "PNG, JPG o PDF · hasta 10 MB",
  error: l,
  accept: o,
  multiple: c,
  onFilesSelected: a,
  className: r,
  ...i
}, u) {
  const d = Z(null), [m, h] = B(!1), y = () => {
    var v;
    return (v = d.current) == null ? void 0 : v.click();
  }, N = l ?? (m ? "Soltá para subir" : s);
  return /* @__PURE__ */ _(
    "div",
    {
      ref: u,
      role: "button",
      tabIndex: 0,
      "aria-label": typeof n == "string" ? n : "Zona de carga de archivos",
      className: zr(se.zone, m && se.active, l && se.error, r),
      onClick: y,
      onKeyDown: (v) => {
        (v.key === "Enter" || v.key === " ") && (v.preventDefault(), y());
      },
      onDragOver: (v) => {
        v.preventDefault(), h(!0);
      },
      onDragLeave: () => h(!1),
      onDrop: (v) => {
        var p;
        v.preventDefault(), h(!1), (p = v.dataTransfer.files) != null && p.length && (a == null || a(v.dataTransfer.files));
      },
      ...i,
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: d,
            type: "file",
            accept: o,
            multiple: c,
            className: se.input,
            onChange: (v) => {
              var p;
              (p = v.target.files) != null && p.length && (a == null || a(v.target.files));
            }
          }
        ),
        /* @__PURE__ */ t("span", { className: se.circle, "aria-hidden": !0, children: /* @__PURE__ */ t(q, { glyph: "Plus", size: 22 }) }),
        /* @__PURE__ */ t("p", { className: se.title, children: n }),
        /* @__PURE__ */ t("p", { className: se.hint, children: N })
      ]
    }
  );
}), Mr = "_row_12ckv_1", Dr = "_tile_12ckv_12", Zr = "_content_12ckv_28", Ir = "_name_12ckv_36", Rr = "_statusRow_12ckv_46", Er = "_track_12ckv_52", Lr = "_fill_12ckv_60", Ar = "_meta_12ckv_65", Sr = "_pct_12ckv_66", Pr = "_errorRow_12ckv_74", Hr = "_errText_12ckv_82", Cr = "_dot_12ckv_85", Fr = "_retry_12ckv_88", Kr = "_trailing_12ckv_99", Gr = "_ok_12ckv_105", Wr = "_remove_12ckv_108", D = {
  row: Mr,
  tile: Dr,
  content: Zr,
  name: Ir,
  statusRow: Rr,
  track: Er,
  fill: Lr,
  meta: Ar,
  pct: Sr,
  errorRow: Pr,
  errText: Hr,
  dot: Cr,
  retry: Fr,
  trailing: Kr,
  ok: Gr,
  remove: Wr
}, Yr = (...e) => e.filter(Boolean).join(" "), nu = g(function({ name: n, ext: s = "file", state: l = "loading", progress: o = 0, meta: c, onRemove: a, onRetry: r, className: i, ...u }, d) {
  return /* @__PURE__ */ _("div", { ref: d, className: Yr(D.row, i), ...u, children: [
    /* @__PURE__ */ t("span", { className: D.tile, "aria-hidden": !0, children: s }),
    /* @__PURE__ */ _("div", { className: D.content, children: [
      /* @__PURE__ */ t("p", { className: D.name, children: n }),
      l === "loading" ? /* @__PURE__ */ _("div", { className: D.statusRow, children: [
        /* @__PURE__ */ t("div", { className: D.track, children: /* @__PURE__ */ t("div", { className: D.fill, style: { width: `${Math.max(0, Math.min(100, o))}%` } }) }),
        /* @__PURE__ */ _("span", { className: D.pct, children: [
          Math.round(o),
          "%"
        ] })
      ] }) : null,
      l === "complete" && c ? /* @__PURE__ */ t("p", { className: D.meta, children: c }) : null,
      l === "error" ? /* @__PURE__ */ _("div", { className: D.errorRow, children: [
        /* @__PURE__ */ t("span", { className: D.errText, children: "Error al subir" }),
        r ? /* @__PURE__ */ _(Be, { children: [
          /* @__PURE__ */ t("span", { className: D.dot, "aria-hidden": !0, children: "·" }),
          /* @__PURE__ */ t("button", { type: "button", className: D.retry, onClick: r, children: "Reintentar" })
        ] }) : null
      ] }) : null
    ] }),
    /* @__PURE__ */ _("div", { className: D.trailing, children: [
      l === "complete" ? /* @__PURE__ */ t("span", { className: D.ok, "aria-hidden": !0, children: /* @__PURE__ */ t(q, { glyph: "Check", size: 16 }) }) : null,
      a ? /* @__PURE__ */ t("button", { type: "button", className: D.remove, "aria-label": `Quitar ${n}`, onClick: a, children: /* @__PURE__ */ t(q, { glyph: "Close", size: 16 }) }) : null
    ] })
  ] });
}), Jr = "_wrap_wc05n_1", Qr = "_field_wc05n_7", Ur = "_error_wc05n_42", Xr = "_toggle_wc05n_47", Ce = {
  wrap: Jr,
  field: Qr,
  error: Ur,
  toggle: Xr
}, Or = (...e) => e.filter(Boolean).join(" "), su = g(function({ error: n, className: s, ...l }, o) {
  const [c, a] = B(!1);
  return /* @__PURE__ */ _("span", { className: Ce.wrap, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: o,
        type: c ? "text" : "password",
        className: Or(Ce.field, n && Ce.error, s),
        "aria-invalid": n || void 0,
        ...l
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: Ce.toggle,
        "aria-label": c ? "Ocultar contraseña" : "Mostrar contraseña",
        "aria-pressed": c,
        onClick: () => a((r) => !r),
        children: /* @__PURE__ */ t(q, { glyph: c ? "VisibilityOff" : "Visibility", size: 16 })
      }
    )
  ] });
}), Vr = "_row_7u7kg_1", ei = "_interactive_7u7kg_9", ti = "_selected_7u7kg_15", ni = "_checkCell_7u7kg_18", si = "_chevronCell_7u7kg_25", qe = {
  row: Vr,
  interactive: ei,
  selected: ti,
  checkCell: ni,
  chevronCell: si
}, li = (e) => et.map(
  e,
  (n) => Oe(n) && !n.props.role ? At(n, { role: "cell" }) : n
), oi = (...e) => e.filter(Boolean).join(" "), lu = g(function({ selectable: n, selected: s, onSelectedChange: l, chevron: o, interactive: c, children: a, className: r, onClick: i, ...u }, d) {
  const m = c || !!i;
  return /* @__PURE__ */ _(
    "div",
    {
      ref: d,
      role: "row",
      "aria-selected": s || void 0,
      className: oi(qe.row, s && qe.selected, m && qe.interactive, r),
      onClick: i,
      ...u,
      children: [
        n ? /* @__PURE__ */ t("div", { role: "cell", className: qe.checkCell, children: /* @__PURE__ */ t(
          tt,
          {
            checked: !!s,
            onChange: (h) => l == null ? void 0 : l(h.target.checked),
            onClick: (h) => h.stopPropagation(),
            "aria-label": "Seleccionar fila"
          }
        ) }) : null,
        li(a),
        o ? /* @__PURE__ */ t("div", { role: "cell", className: qe.chevronCell, "aria-hidden": !0, children: /* @__PURE__ */ t(q, { glyph: "Chevron", size: 16 }) }) : null
      ]
    }
  );
}), ci = "_item_1coqu_1", ai = "_selected_1coqu_29", ri = "_chevron_1coqu_33", ii = "_disabled_1coqu_36", _i = "_icon_1coqu_42", di = "_checkbox_1coqu_45", ui = "_open_1coqu_55", mi = "_spacer_1coqu_58", hi = "_label_1coqu_68", X = {
  item: ci,
  selected: ai,
  chevron: ri,
  disabled: ii,
  icon: _i,
  checkbox: di,
  open: ui,
  spacer: mi,
  label: hi
}, Tt = (...e) => e.filter(Boolean).join(" ");
function ou({
  label: e,
  level: n = 0,
  hasChildren: s,
  expanded: l,
  onExpandedChange: o,
  selected: c,
  onSelect: a,
  disabled: r,
  icon: i,
  checkbox: u,
  checked: d,
  onCheckedChange: m,
  className: h
}) {
  return /* @__PURE__ */ _(
    "div",
    {
      role: "treeitem",
      "aria-selected": c || void 0,
      "aria-expanded": s ? !!l : void 0,
      "aria-level": n + 1,
      "aria-disabled": r || void 0,
      tabIndex: r ? -1 : c ? 0 : -1,
      className: Tt(X.item, c && X.selected, r && X.disabled, h),
      style: { paddingLeft: `calc(var(--space-xs) + ${n} * var(--space-md))` },
      onClick: r ? void 0 : a,
      children: [
        u ? /* @__PURE__ */ t("span", { className: X.checkbox, onClick: (y) => y.stopPropagation(), children: /* @__PURE__ */ t(
          tt,
          {
            checked: d,
            disabled: r,
            onChange: (y) => m == null ? void 0 : m(y.target.checked),
            "aria-label": typeof e == "string" ? e : "Seleccionar elemento"
          }
        ) }) : null,
        s ? /* @__PURE__ */ t(
          "span",
          {
            className: Tt(X.chevron, l && X.open),
            role: "button",
            "aria-label": l ? "Colapsar" : "Expandir",
            onClick: (y) => {
              y.stopPropagation(), r || o == null || o(!l);
            },
            children: /* @__PURE__ */ t(q, { glyph: "Chevron", size: 16 })
          }
        ) : /* @__PURE__ */ t("span", { className: X.spacer }),
        i ? /* @__PURE__ */ t("span", { className: X.icon, "aria-hidden": !0, children: i }) : null,
        /* @__PURE__ */ t("span", { className: X.label, children: e })
      ]
    }
  );
}
const fi = "_toolbar_17zvu_1", pi = {
  toolbar: fi
}, vi = (...e) => e.filter(Boolean).join(" ");
function cu({ children: e, className: n, ...s }) {
  return /* @__PURE__ */ t("div", { role: "toolbar", className: vi(pi.toolbar, n), ...s, children: e });
}
const bi = "_quote_v2qdb_1", yi = "_text_v2qdb_9", $i = "_author_v2qdb_16", gi = "_role_v2qdb_26", Fe = {
  quote: bi,
  text: yi,
  author: $i,
  role: gi
}, Ni = (...e) => e.filter(Boolean).join(" ");
function au({ author: e, source: n, children: s, className: l, ...o }) {
  return /* @__PURE__ */ _("figure", { className: Ni(Fe.quote, l), ...o, children: [
    /* @__PURE__ */ t("blockquote", { className: Fe.text, children: s }),
    e || n ? /* @__PURE__ */ _("figcaption", { className: Fe.author, children: [
      e,
      n ? /* @__PURE__ */ _("span", { className: Fe.role, children: [
        "· ",
        n
      ] }) : null
    ] }) : null
  ] });
}
const wi = "_prose_1wyxv_1", jt = {
  prose: wi
}, Bt = (...e) => e.filter(Boolean).join(" ");
function ru({ html: e, children: n, className: s, ...l }) {
  return e != null ? /* @__PURE__ */ t("div", { className: Bt(jt.prose, s), dangerouslySetInnerHTML: { __html: e }, ...l }) : /* @__PURE__ */ t("div", { className: Bt(jt.prose, s), ...l, children: n });
}
const ki = "_embed_8hc1c_1", xi = "_poster_8hc1c_9", qi = "_play_8hc1c_16", Qe = {
  embed: ki,
  poster: xi,
  play: qi
}, Ti = (...e) => e.filter(Boolean).join(" "), iu = g(function({ poster: n, alt: s = "", onPlay: l, className: o, ...c }, a) {
  return /* @__PURE__ */ _("div", { ref: a, className: Ti(Qe.embed, o), ...c, children: [
    n ? /* @__PURE__ */ t("img", { className: Qe.poster, src: n, alt: s }) : null,
    /* @__PURE__ */ t("button", { type: "button", className: Qe.play, "aria-label": "Reproducir video", onClick: l, children: /* @__PURE__ */ t("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": !0, children: /* @__PURE__ */ t("path", { d: "M8 5v14l11-7z" }) }) })
  ] });
}), ji = "_root_pejp5_1", Bi = "_label_pejp5_9", zi = "_control_pejp5_18", Mi = "_open_pejp5_37", Di = "_error_pejp5_41", Zi = "_value_pejp5_53", Ii = "_placeholder_pejp5_54", Ri = "_chevron_pejp5_65", Ei = "_message_pejp5_68", Li = "_messageError_pejp5_75", Ai = "_dropdown_pejp5_78", K = {
  root: ji,
  label: Bi,
  control: zi,
  open: Mi,
  error: Di,
  value: Zi,
  placeholder: Ii,
  chevron: Ri,
  message: Ei,
  messageError: Li,
  dropdown: Ai
}, Ue = (...e) => e.filter(Boolean).join(" "), zt = (e) => String(e).padStart(2, "0"), Mt = (e) => {
  const [n, s] = e.split(":").map(Number);
  return n * 60 + s;
}, Si = (e) => `${zt(Math.floor(e / 60))}:${zt(e % 60)}`;
function Pi(e, n, s) {
  const l = Mt(e), o = Mt(n), c = [];
  for (let a = l; a <= o; a += s) c.push(Si(a));
  return c;
}
const _u = g(function({
  value: n,
  defaultValue: s,
  onValueChange: l,
  label: o,
  htmlFor: c,
  helper: a,
  error: r,
  disabled: i,
  step: u = 30,
  min: d = "00:00",
  max: m = "23:30",
  className: h
}, y) {
  const N = n !== void 0, [v, p] = B(s ?? null), f = N ? n ?? null : v, x = Pi(d, m, u), [$, b] = B(!1), [w, z] = B(0), R = Z(null), P = Z(null), oe = E(), te = r ?? a;
  U(() => {
    if (!$) return;
    const T = (M) => {
      R.current && !R.current.contains(M.target) && b(!1);
    };
    return document.addEventListener("pointerdown", T, !0), () => document.removeEventListener("pointerdown", T, !0);
  }, [$]), U(() => {
    if (!$) return;
    const T = f ? x.indexOf(f) : -1, M = T >= 0 ? T : 0;
    z(M), requestAnimationFrame(() => {
      var L, k;
      (k = (L = P.current) == null ? void 0 : L.children[M]) == null || k.scrollIntoView({ block: "nearest" });
    });
  }, [$]);
  const H = (T) => {
    N || p(T), l == null || l(T), b(!1);
  }, C = () => {
    i || b((T) => !T);
  }, ce = (T) => {
    z((M) => {
      var k, A;
      const L = Math.min(x.length - 1, Math.max(0, M + T));
      return (A = (k = P.current) == null ? void 0 : k.children[L]) == null || A.scrollIntoView({ block: "nearest" }), L;
    });
  }, ae = (T) => {
    T.key === "ArrowDown" || T.key === "ArrowUp" ? (T.preventDefault(), $ ? ce(T.key === "ArrowDown" ? 1 : -1) : b(!0)) : T.key === "Enter" && $ ? (T.preventDefault(), H(x[w])) : T.key === "Escape" && $ && (T.preventDefault(), b(!1));
  };
  return /* @__PURE__ */ _("div", { className: Ue(K.root, h), ref: R, children: [
    o ? /* @__PURE__ */ t("label", { className: K.label, htmlFor: c, children: o }) : null,
    /* @__PURE__ */ _(
      "button",
      {
        ref: y,
        type: "button",
        id: c,
        className: Ue(K.control, $ && K.open, !!r && K.error),
        disabled: i,
        "aria-haspopup": "listbox",
        "aria-expanded": $,
        "aria-invalid": r ? !0 : void 0,
        onClick: C,
        onKeyDown: ae,
        children: [
          /* @__PURE__ */ t("span", { className: f ? K.value : K.placeholder, children: f ?? "HH:MM" }),
          /* @__PURE__ */ t(q, { glyph: $ ? "stat_1" : "stat_minus_1", size: 16, className: K.chevron })
        ]
      }
    ),
    $ ? /* @__PURE__ */ t("div", { ref: P, role: "listbox", "aria-labelledby": oe, className: K.dropdown, children: x.map((T, M) => {
      const L = T === f;
      return /* @__PURE__ */ t(
        Ht,
        {
          role: "option",
          "aria-selected": L,
          selected: L,
          style: M === w && !L ? { background: "var(--color-bg-brand-2-subtle)" } : void 0,
          onMouseEnter: () => z(M),
          onClick: () => H(T),
          children: T
        },
        T
      );
    }) }) : null,
    te ? /* @__PURE__ */ t("p", { className: Ue(K.message, r ? K.messageError : !1), children: te }) : null
  ] });
}), Hi = "_root_146u4_1", Ci = "_message_146u4_8", Fi = "_messageError_146u4_15", Xe = {
  root: Hi,
  message: Ci,
  messageError: Fi
}, Dt = (...e) => e.filter(Boolean).join(" "), du = g(function({ value: n, defaultValue: s, onValueChange: l, label: o, htmlFor: c, helper: a, error: r, disabled: i, className: u }, d) {
  const m = n !== void 0, [h, y] = B(s ?? null), N = m ? n : h, [v, p] = B(!1), f = Z(null), x = E(), $ = r ?? a;
  U(() => {
    if (!v) return;
    const w = (z) => {
      f.current && !f.current.contains(z.target) && p(!1);
    };
    return document.addEventListener("pointerdown", w, !0), () => document.removeEventListener("pointerdown", w, !0);
  }, [v]);
  const b = (w) => {
    const z = Ft(w);
    m || y(z), l == null || l(z), p(!1);
  };
  return /* @__PURE__ */ _("div", { className: Dt(Xe.root, u), ref: f, children: [
    /* @__PURE__ */ t(
      Ve,
      {
        ref: d,
        label: o,
        htmlFor: c,
        value: N,
        open: v,
        error: !!r,
        disabled: i,
        onClick: () => {
          i || p((w) => !w);
        }
      }
    ),
    $ ? /* @__PURE__ */ t("p", { className: Dt(Xe.message, !!r && Xe.messageError), children: $ }) : null,
    v ? /* @__PURE__ */ t(
      Kt,
      {
        mode: "single",
        selected: N,
        defaultMonth: N ?? void 0,
        onPick: b,
        onClose: () => p(!1),
        labelId: x
      }
    ) : null
  ] });
}), Ki = "_card_jl33v_1", Gi = "_elevated_jl33v_11", Wi = "_outlined_jl33v_15", Yi = "_filled_jl33v_19", Ji = "_horizontal_jl33v_24", Qi = "_mediaBottom_jl33v_27", Ui = "_interactive_jl33v_33", Xi = "_selected_jl33v_52", Oi = "_disabled_jl33v_56", Vi = "_eyebrow_jl33v_60", e_ = "_title_jl33v_61", t_ = "_subtitle_jl33v_62", n_ = "_body_jl33v_63", s_ = "_authorName_jl33v_64", l_ = "_authorMeta_jl33v_65", o_ = "_media_jl33v_27", c_ = "_accent_jl33v_85", a_ = "_badge_jl33v_94", r_ = "_content_jl33v_102", i_ = "_iconBox_jl33v_111", __ = "_tags_jl33v_123", d_ = "_header_jl33v_129", u_ = "_headerTop_jl33v_134", m_ = "_action_jl33v_148", h_ = "_link_jl33v_172", f_ = "_footer_jl33v_175", p_ = "_divider_jl33v_182", v_ = "_author_jl33v_64", b_ = "_authorAvatar_jl33v_194", y_ = "_authorText_jl33v_198", j = {
  card: Ki,
  elevated: Gi,
  outlined: Wi,
  filled: Yi,
  horizontal: Ji,
  mediaBottom: Qi,
  interactive: Ui,
  selected: Xi,
  disabled: Oi,
  eyebrow: Vi,
  title: e_,
  subtitle: t_,
  body: n_,
  authorName: s_,
  authorMeta: l_,
  media: o_,
  accent: c_,
  badge: a_,
  content: r_,
  iconBox: i_,
  tags: __,
  header: d_,
  headerTop: u_,
  action: m_,
  link: h_,
  footer: f_,
  divider: p_,
  author: v_,
  authorAvatar: b_,
  authorText: y_
}, Zt = (...e) => e.filter(Boolean).join(" "), uu = g(function({
  surface: n = "elevated",
  orientation: s = "vertical",
  selected: l,
  disabled: o,
  interactive: c,
  media: a,
  badge: r,
  accent: i,
  icon: u,
  tags: d,
  eyebrow: m,
  title: h,
  subtitle: y,
  action: N,
  body: v,
  titleSize: p = "title-s",
  link: f,
  primaryAction: x,
  secondaryAction: $,
  author: b,
  children: w,
  className: z,
  onClick: R,
  onKeyDown: P,
  ...oe
}, te) {
  const H = (c || !!R) && !o, C = m != null || N != null, ce = C || h != null || y != null, ae = x != null || $ != null, T = (M) => {
    P == null || P(M), H && (M.key === "Enter" || M.key === " ") && (M.preventDefault(), M.currentTarget.click());
  };
  return /* @__PURE__ */ _(
    "div",
    {
      ref: te,
      className: Zt(
        j.card,
        j[n],
        s === "horizontal" && j.horizontal,
        s === "media-bottom" && j.mediaBottom,
        l && j.selected,
        o && j.disabled,
        H && j.interactive,
        z
      ),
      role: H ? "button" : void 0,
      tabIndex: H ? 0 : void 0,
      "aria-disabled": o || void 0,
      onClick: H ? R : void 0,
      onKeyDown: T,
      ...oe,
      children: [
        i ? /* @__PURE__ */ t("span", { className: j.accent, "aria-hidden": !0 }) : null,
        r ? /* @__PURE__ */ t("div", { className: j.badge, children: r }) : null,
        a ? /* @__PURE__ */ t("div", { className: j.media, children: a }) : null,
        /* @__PURE__ */ _("div", { className: j.content, children: [
          u ? /* @__PURE__ */ t("div", { className: j.iconBox, children: u }) : null,
          d ? /* @__PURE__ */ t("div", { className: j.tags, children: d }) : null,
          ce ? /* @__PURE__ */ _("div", { className: j.header, children: [
            C ? /* @__PURE__ */ _("div", { className: j.headerTop, children: [
              /* @__PURE__ */ t("span", { className: j.eyebrow, children: m }),
              N != null ? /* @__PURE__ */ t("span", { className: j.action, children: N }) : null
            ] }) : null,
            h != null ? /* @__PURE__ */ t("h3", { className: Zt(j.title, `viu-type-${p}`), children: h }) : null,
            y != null ? /* @__PURE__ */ t("p", { className: j.subtitle, children: y }) : null
          ] }) : null,
          v != null ? /* @__PURE__ */ t("p", { className: j.body, children: v }) : null,
          w,
          f != null ? /* @__PURE__ */ t("div", { className: j.link, children: f }) : null,
          ae ? /* @__PURE__ */ _("div", { className: j.footer, children: [
            x,
            $
          ] }) : null,
          b ? /* @__PURE__ */ _(Be, { children: [
            /* @__PURE__ */ t("hr", { className: j.divider }),
            /* @__PURE__ */ _("div", { className: j.author, children: [
              b.avatar ? /* @__PURE__ */ t("span", { className: j.authorAvatar, children: b.avatar }) : null,
              /* @__PURE__ */ _("span", { className: j.authorText, children: [
                /* @__PURE__ */ t("span", { className: j.authorName, children: b.name }),
                b.meta != null ? /* @__PURE__ */ t("span", { className: j.authorMeta, children: b.meta }) : null
              ] })
            ] })
          ] }) : null
        ] })
      ]
    }
  );
}), $_ = "_empty_lyt8i_1", g_ = "_circle_lyt8i_9", N_ = "_first_lyt8i_17", w_ = "_emptyIcon_lyt8i_21", k_ = "_error_lyt8i_25", x_ = "_title_lyt8i_29", q_ = "_description_lyt8i_37", T_ = "_actions_lyt8i_45", ye = {
  empty: $_,
  circle: g_,
  first: N_,
  emptyIcon: w_,
  error: k_,
  title: x_,
  description: q_,
  actions: T_
}, j_ = { first: "Plus", empty: "Search", error: "Alert" }, B_ = { first: "first", empty: "emptyIcon", error: "error" }, It = (...e) => e.filter(Boolean).join(" "), mu = g(function({ variant: n = "first", icon: s, title: l, description: o, actions: c, className: a, ...r }, i) {
  return /* @__PURE__ */ _("div", { ref: i, className: It(ye.empty, a), ...r, children: [
    /* @__PURE__ */ t("span", { className: It(ye.circle, ye[B_[n]]), "aria-hidden": !0, children: s ?? /* @__PURE__ */ t(q, { glyph: j_[n], size: 24 }) }),
    /* @__PURE__ */ t("p", { className: ye.title, children: l }),
    o ? /* @__PURE__ */ t("p", { className: ye.description, children: o }) : null,
    c ? /* @__PURE__ */ t("div", { className: ye.actions, children: c }) : null
  ] });
}), z_ = "_header_16q9r_1", M_ = "_centered_16q9r_9", D_ = "_topRow_16q9r_13", Z_ = "_left_16q9r_23", I_ = "_breadcrumb_16q9r_33", R_ = "_titleRow_16q9r_40", E_ = "_title_16q9r_40", L_ = "_standard_16q9r_51", A_ = "_compact_16q9r_57", S_ = "_subtitle_16q9r_61", P_ = "_actions_16q9r_69", H_ = "_tabs_16q9r_74", C_ = "_divider_16q9r_77", G = {
  header: z_,
  centered: M_,
  topRow: D_,
  left: Z_,
  breadcrumb: I_,
  titleRow: R_,
  title: E_,
  standard: L_,
  compact: A_,
  subtitle: S_,
  actions: P_,
  tabs: H_,
  divider: C_
}, F_ = (...e) => e.filter(Boolean).join(" "), hu = g(function({ title: n, breadcrumb: s, subtitle: l, status: o, actions: c, tabs: a, onBack: r, variant: i = "standard", divider: u = !0, className: d, ...m }, h) {
  return /* @__PURE__ */ _("header", { ref: h, className: F_(G.header, G[i], d), ...m, children: [
    /* @__PURE__ */ _("div", { className: G.topRow, children: [
      /* @__PURE__ */ _("div", { className: G.left, children: [
        s ? /* @__PURE__ */ t("div", { className: G.breadcrumb, children: s }) : null,
        /* @__PURE__ */ _("div", { className: G.titleRow, children: [
          r ? /* @__PURE__ */ t(
            wn,
            {
              variant: "tertiary",
              size: "sm",
              "aria-label": "Volver",
              onClick: r,
              icon: /* @__PURE__ */ t(q, { glyph: "Arrow", style: { transform: "rotate(180deg)" } })
            }
          ) : null,
          /* @__PURE__ */ t("h1", { className: G.title, children: n }),
          o
        ] }),
        l ? /* @__PURE__ */ t("p", { className: G.subtitle, children: l }) : null
      ] }),
      c ? /* @__PURE__ */ t("div", { className: G.actions, children: c }) : null
    ] }),
    a ? /* @__PURE__ */ t("div", { className: G.tabs, children: a }) : null,
    u ? /* @__PURE__ */ t("div", { className: G.divider, "aria-hidden": !0 }) : null
  ] });
}), K_ = "_footer_1v584_1", G_ = "_copyright_1v584_16", Rt = {
  footer: K_,
  copyright: G_
}, W_ = (...e) => e.filter(Boolean).join(" ");
function fu({ copyright: e, children: n, className: s, ...l }) {
  return /* @__PURE__ */ _("footer", { className: W_(Rt.footer, s), ...l, children: [
    n,
    e ? /* @__PURE__ */ t("span", { className: Rt.copyright, children: e }) : null
  ] });
}
const Y_ = "_root_1wsnp_1", J_ = "_table_1wsnp_4", Q_ = "_footer_1wsnp_9", U_ = "_header_1wsnp_18", X_ = "_body_1wsnp_28", Te = {
  root: Y_,
  table: J_,
  footer: Q_,
  header: U_,
  body: X_
}, Et = (...e) => e.filter(Boolean).join(" "), O_ = (e) => {
  const n = Oe(e) && e.type === Ut ? e.props.children : e;
  return et.map(n, (s) => {
    if (!Oe(s)) return s;
    const l = s.props;
    return l.role || l.children == null || l.children === "" ? s : At(s, { role: "columnheader" });
  });
};
function V_({ header: e, footer: n, children: s, className: l, "aria-label": o, ...c }) {
  const a = (
    // Sin footer: root byte-idéntico al original (role="table" con aria-label +
    // className + rest) — DataTable y demás consumidores no se ven afectados.
    /* @__PURE__ */ _(
      "div",
      {
        role: "table",
        "aria-label": o,
        className: Et(Te.table, !n && l),
        ...n ? {} : c,
        children: [
          e ? /* @__PURE__ */ t("div", { role: "row", className: Te.header, children: O_(e) }) : null,
          /* @__PURE__ */ t("div", { role: "rowgroup", className: Te.body, children: s })
        ]
      }
    )
  );
  return n ? /* @__PURE__ */ _("div", { className: Et(Te.root, l), ...c, children: [
    a,
    /* @__PURE__ */ t("div", { className: Te.footer, children: n })
  ] }) : a;
}
const ed = "_tree_so94u_1", td = {
  tree: ed
}, nd = (...e) => e.filter(Boolean).join(" ");
function pu({ children: e, className: n, ...s }) {
  return /* @__PURE__ */ t("div", { role: "tree", className: nd(td.tree, n), ...s, children: e });
}
const sd = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function nt(e, n, s, l = {}) {
  const o = Z(s);
  o.current = s;
  const c = Z(l.closeOnEsc ?? !0);
  c.current = l.closeOnEsc ?? !0, U(() => {
    if (!e) return;
    const a = n.current;
    if (!a) return;
    const r = document.activeElement, i = () => Array.from(a.querySelectorAll(sd)).filter(
      (d) => d.offsetParent !== null || d === document.activeElement
    );
    (i()[0] ?? a).focus();
    const u = (d) => {
      var v;
      if (d.key === "Escape" && c.current) {
        d.stopPropagation(), (v = o.current) == null || v.call(o);
        return;
      }
      if (d.key !== "Tab") return;
      const m = i();
      if (m.length === 0) {
        d.preventDefault(), a.focus();
        return;
      }
      const h = m[0], y = m[m.length - 1], N = document.activeElement;
      d.shiftKey ? (N === h || !a.contains(N)) && (d.preventDefault(), y.focus()) : (N === y || !a.contains(N)) && (d.preventDefault(), h.focus());
    };
    return document.addEventListener("keydown", u, !0), () => {
      var d;
      document.removeEventListener("keydown", u, !0), (d = r == null ? void 0 : r.focus) == null || d.call(r);
    };
  }, [e, n]);
}
function Yt(e) {
  U(() => {
    if (!e || typeof document > "u") return;
    const n = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = n;
    };
  }, [e]);
}
const ld = "_overlay_1wak0_1", od = "_dialog_1wak0_12", cd = "_sm_1wak0_24", ad = "_md_1wak0_27", rd = "_lg_1wak0_30", id = "_header_1wak0_34", _d = "_icon_1wak0_41", dd = "_heading_1wak0_47", ud = "_title_1wak0_55", md = "_subtitle_1wak0_64", hd = "_close_1wak0_72", fd = "_body_1wak0_92", pd = "_footer_1wak0_101", W = {
  overlay: ld,
  dialog: od,
  sm: cd,
  md: ad,
  lg: rd,
  header: id,
  icon: _d,
  heading: dd,
  title: ud,
  subtitle: md,
  close: hd,
  body: fd,
  footer: pd
}, vd = (...e) => e.filter(Boolean).join(" "), vu = g(function({
  open: n,
  onClose: s,
  size: l = "md",
  title: o,
  subtitle: c,
  icon: a,
  showClose: r = !0,
  footer: i,
  closeOnOverlayClick: u = !0,
  closeOnEsc: d = !0,
  children: m,
  className: h,
  ...y
}, N) {
  const v = Z(null), p = E(), f = E();
  if (nt(n, v, s, { closeOnEsc: d }), Yt(n), !n || typeof document > "u") return null;
  const x = (b) => {
    v.current = b, typeof N == "function" ? N(b) : N && (N.current = b);
  }, $ = (b) => {
    u && b.target === b.currentTarget && (s == null || s());
  };
  return St(
    /* @__PURE__ */ t("div", { className: W.overlay, onMouseDown: $, children: /* @__PURE__ */ _(
      "div",
      {
        ref: x,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": p,
        "aria-describedby": c ? f : void 0,
        tabIndex: -1,
        className: vd(W.dialog, W[l], h),
        ...y,
        children: [
          /* @__PURE__ */ _("div", { className: W.header, children: [
            a ? /* @__PURE__ */ t("span", { className: W.icon, "aria-hidden": !0, children: a }) : null,
            /* @__PURE__ */ _("div", { className: W.heading, children: [
              /* @__PURE__ */ t("p", { id: p, className: W.title, children: o }),
              c ? /* @__PURE__ */ t("p", { id: f, className: W.subtitle, children: c }) : null
            ] }),
            r ? /* @__PURE__ */ t("button", { type: "button", className: W.close, "aria-label": "Cerrar", onClick: s, children: /* @__PURE__ */ t(q, { glyph: "Close", size: 16 }) }) : null
          ] }),
          m != null ? /* @__PURE__ */ t("div", { className: W.body, children: m }) : null,
          i ? /* @__PURE__ */ t("div", { className: W.footer, children: i }) : null
        ]
      }
    ) }),
    document.body
  );
}), bd = "_overlay_afg2y_1", yd = "_right_afg2y_8", $d = "_left_afg2y_11", gd = "_panel_afg2y_15", Nd = "_header_afg2y_26", wd = "_title_afg2y_33", kd = "_close_afg2y_44", xd = "_divider_afg2y_63", qd = "_body_afg2y_69", Td = "_footer_afg2y_86", J = {
  overlay: bd,
  right: yd,
  left: $d,
  panel: gd,
  header: Nd,
  title: wd,
  close: kd,
  divider: xd,
  body: qd,
  footer: Td
}, Lt = (...e) => e.filter(Boolean).join(" "), bu = g(function({
  open: n,
  onClose: s,
  side: l = "right",
  title: o,
  showClose: c = !0,
  footer: a,
  closeOnOverlayClick: r = !0,
  closeOnEsc: i = !0,
  children: u,
  className: d,
  ...m
}, h) {
  const y = Z(null), N = E();
  if (nt(n, y, s, { closeOnEsc: i }), Yt(n), !n || typeof document > "u") return null;
  const v = (f) => {
    y.current = f, typeof h == "function" ? h(f) : h && (h.current = f);
  }, p = (f) => {
    r && f.target === f.currentTarget && (s == null || s());
  };
  return St(
    /* @__PURE__ */ t("div", { className: Lt(J.overlay, J[l]), onMouseDown: p, children: /* @__PURE__ */ _(
      "div",
      {
        ref: v,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": N,
        tabIndex: -1,
        className: Lt(J.panel, d),
        ...m,
        children: [
          /* @__PURE__ */ _("div", { className: J.header, children: [
            /* @__PURE__ */ t("p", { id: N, className: J.title, children: o }),
            c ? /* @__PURE__ */ t("button", { type: "button", className: J.close, "aria-label": "Cerrar", onClick: s, children: /* @__PURE__ */ t(q, { glyph: "Close", size: 20 }) }) : null
          ] }),
          /* @__PURE__ */ t("div", { className: J.divider }),
          /* @__PURE__ */ t("div", { className: J.body, children: u }),
          a ? /* @__PURE__ */ _(Be, { children: [
            /* @__PURE__ */ t("div", { className: J.divider }),
            /* @__PURE__ */ t("div", { className: J.footer, children: a })
          ] }) : null
        ]
      }
    ) }),
    document.body
  );
}), jd = "_root_16sxp_1", Bd = "_anchor_16sxp_6", zd = "_panel_16sxp_10", Md = "_bottom_16sxp_32", Dd = "_top_16sxp_35", Zd = "_caret_16sxp_39", Id = "_header_16sxp_54", Rd = "_title_16sxp_60", Ed = "_close_16sxp_71", Ld = "_body_16sxp_90", Ad = "_actions_16sxp_97", Q = {
  root: jd,
  anchor: Bd,
  panel: zd,
  bottom: Md,
  top: Dd,
  caret: Zd,
  header: Id,
  title: Rd,
  close: Ed,
  body: Ld,
  actions: Ad
}, Sd = (...e) => e.filter(Boolean).join(" "), yu = g(function({
  open: n,
  onOpenChange: s,
  side: l = "bottom",
  trigger: o,
  title: c,
  showClose: a = !0,
  actions: r,
  closeOnEsc: i = !0,
  children: u,
  className: d,
  ...m
}, h) {
  const y = Z(null), N = Z(null), v = E(), { side: p, recompute: f } = Wt(l);
  nt(n, N, () => s == null ? void 0 : s(!1), { closeOnEsc: i }), U(() => {
    if (!n) return;
    const $ = () => f(y.current, N.current);
    return $(), window.addEventListener("resize", $), window.addEventListener("scroll", $, !0), () => {
      window.removeEventListener("resize", $), window.removeEventListener("scroll", $, !0);
    };
  }, [n, f]), U(() => {
    if (!n) return;
    const $ = (b) => {
      y.current && !y.current.contains(b.target) && (s == null || s(!1));
    };
    return document.addEventListener("pointerdown", $, !0), () => document.removeEventListener("pointerdown", $, !0);
  }, [n, s]);
  const x = ($) => {
    N.current = $, typeof h == "function" ? h($) : h && (h.current = $);
  };
  return /* @__PURE__ */ _("span", { className: Q.root, ref: y, children: [
    /* @__PURE__ */ t("span", { className: Q.anchor, onClick: () => s == null ? void 0 : s(!n), children: o }),
    n ? /* @__PURE__ */ _(
      "div",
      {
        ref: x,
        role: "dialog",
        "aria-labelledby": c ? v : void 0,
        tabIndex: -1,
        className: Sd(Q.panel, Q[p], d),
        ...m,
        children: [
          /* @__PURE__ */ t("span", { className: Q.caret, "aria-hidden": !0 }),
          c ? /* @__PURE__ */ _("div", { className: Q.header, children: [
            /* @__PURE__ */ t("p", { id: v, className: Q.title, children: c }),
            a ? /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: Q.close,
                "aria-label": "Cerrar",
                onClick: () => s == null ? void 0 : s(!1),
                children: /* @__PURE__ */ t(q, { glyph: "Close", size: 16 })
              }
            ) : null
          ] }) : null,
          /* @__PURE__ */ t("div", { className: Q.body, children: u }),
          r ? /* @__PURE__ */ t("div", { className: Q.actions, children: r }) : null
        ]
      }
    ) : null
  ] });
}), Pd = "_shell_1et90_1", Hd = "_sidebar_1et90_9", Cd = "_main_1et90_18", Fd = "_topbar_1et90_25", Kd = "_content_1et90_34", je = {
  shell: Pd,
  sidebar: Hd,
  main: Cd,
  topbar: Fd,
  content: Kd
}, Gd = (...e) => e.filter(Boolean).join(" "), $u = g(function({ sidebar: n, topbar: s, children: l, className: o, ...c }, a) {
  return /* @__PURE__ */ _("div", { ref: a, className: Gd(je.shell, o), ...c, children: [
    /* @__PURE__ */ t("aside", { className: je.sidebar, children: n }),
    /* @__PURE__ */ _("div", { className: je.main, children: [
      s ? /* @__PURE__ */ t("header", { className: je.topbar, children: s }) : null,
      /* @__PURE__ */ t("main", { className: je.content, children: l })
    ] })
  ] });
}), Wd = "_form_1xso5_1", Yd = "_head_1xso5_11", Jd = "_title_1xso5_17", Qd = "_description_1xso5_26", Ud = "_banner_1xso5_34", Xd = "_fields_1xso5_38", Od = "_divider_1xso5_44", Vd = "_actions_1xso5_49", V = {
  form: Wd,
  head: Yd,
  title: Jd,
  description: Qd,
  banner: Ud,
  fields: Xd,
  divider: Od,
  actions: Vd
}, e1 = (...e) => e.filter(Boolean).join(" "), gu = g(function({ title: n, description: s, banner: l, actions: o, children: c, className: a, ...r }, i) {
  return /* @__PURE__ */ _("form", { ref: i, className: e1(V.form, a), ...r, children: [
    n || s ? /* @__PURE__ */ _("div", { className: V.head, children: [
      n ? /* @__PURE__ */ t("h2", { className: V.title, children: n }) : null,
      s ? /* @__PURE__ */ t("p", { className: V.description, children: s }) : null
    ] }) : null,
    l ? /* @__PURE__ */ t("div", { className: V.banner, children: l }) : null,
    /* @__PURE__ */ t("div", { className: V.fields, children: c }),
    o ? /* @__PURE__ */ _(Be, { children: [
      /* @__PURE__ */ t("div", { className: V.divider }),
      /* @__PURE__ */ t("div", { className: V.actions, children: o })
    ] }) : null
  ] });
}), t1 = "_wizard_l3rty_1", n1 = "_divider_l3rty_11", s1 = "_step_l3rty_16", l1 = "_footer_l3rty_22", o1 = "_count_l3rty_28", $e = {
  wizard: t1,
  divider: n1,
  step: s1,
  footer: l1,
  count: o1
}, c1 = (...e) => e.filter(Boolean).join(" "), Nu = g(function({ steps: n, current: s, onStepChange: l, onFinish: o, backLabel: c = "Atrás", nextLabel: a = "Continuar", finishLabel: r = "Finalizar", className: i, ...u }, d) {
  var y;
  const m = s >= n.length - 1, h = n.map((N, v) => ({
    label: N.label,
    number: v + 1,
    status: v < s ? "complete" : v === s ? "current" : "upcoming"
  }));
  return /* @__PURE__ */ _("div", { ref: d, className: c1($e.wizard, i), ...u, children: [
    /* @__PURE__ */ t(yr, { steps: h }),
    /* @__PURE__ */ t("div", { className: $e.divider }),
    /* @__PURE__ */ t("div", { className: $e.step, children: (y = n[s]) == null ? void 0 : y.content }),
    /* @__PURE__ */ t("div", { className: $e.divider }),
    /* @__PURE__ */ _("div", { className: $e.footer, children: [
      /* @__PURE__ */ _("span", { className: $e.count, children: [
        "Paso ",
        s + 1,
        " de ",
        n.length
      ] }),
      /* @__PURE__ */ t(st, { variant: "secondary", disabled: s === 0, onClick: () => l == null ? void 0 : l(s - 1), children: c }),
      /* @__PURE__ */ t(st, { variant: "primary", onClick: () => m ? o == null ? void 0 : o() : l == null ? void 0 : l(s + 1), children: m ? r : a })
    ] })
  ] });
}), a1 = "_dataTable_1e2fv_1", r1 = "_toolbar_1e2fv_7", i1 = "_empty_1e2fv_13", _1 = "_footer_1e2fv_19", d1 = "_caption_1e2fv_25", u1 = "_pagination_1e2fv_33", ge = {
  dataTable: a1,
  toolbar: r1,
  empty: i1,
  footer: _1,
  caption: d1,
  pagination: u1
}, m1 = (...e) => e.filter(Boolean).join(" "), wu = g(function({ toolbar: n, header: s, caption: l, pagination: o, empty: c, children: a, className: r, "aria-label": i, ...u }, d) {
  const m = et.count(a) > 0;
  return /* @__PURE__ */ _("div", { ref: d, className: m1(ge.dataTable, r), ...u, children: [
    n ? /* @__PURE__ */ t("div", { className: ge.toolbar, children: n }) : null,
    /* @__PURE__ */ t(V_, { "aria-label": i, header: s, children: m ? a : c ? (
      // El estado vacío vive dentro del rowgroup → envolverlo como una fila válida
      // (role=row > role=cell) para que role=table no quede sin filas (axe:
      // aria-required-children).
      /* @__PURE__ */ t("div", { role: "row", className: ge.empty, children: /* @__PURE__ */ t("div", { role: "cell", children: c }) })
    ) : null }),
    l || o ? /* @__PURE__ */ _("div", { className: ge.footer, children: [
      l ? /* @__PURE__ */ t("span", { className: ge.caption, children: l }) : null,
      o ? /* @__PURE__ */ t("div", { className: ge.pagination, children: o }) : null
    ] }) : null
  ] });
});
export {
  Q1 as Accordion,
  U1 as AccordionItem,
  $u as AppShell,
  Cl as Avatar,
  V1 as AvatarGroup,
  b1 as Badge,
  K1 as Banner,
  F1 as Breadcrumb,
  st as Button,
  uu as Card,
  tt as Checkbox,
  T1 as Chip,
  N1 as ChoiceGroup,
  w1 as Combobox,
  wu as DataTable,
  k1 as DateRangePicker,
  du as Datepicker,
  j1 as Divider,
  bu as Drawer,
  tu as Dropzone,
  mu as EmptyState,
  nu as FileRow,
  fu as Footer,
  gu as Form,
  H1 as FormField,
  q as Icon,
  wn as IconButton,
  P1 as IconContainer,
  S1 as Image,
  z1 as Input,
  $1 as Kbd,
  v1 as Link,
  X1 as List,
  O1 as ListItem,
  eu as Menu,
  Ht as MenuItem,
  vu as Modal,
  Y1 as Nav,
  J1 as NavItem,
  A1 as NotificationBadge,
  hu as PageHeader,
  W1 as Pagination,
  su as PasswordInput,
  q1 as Pill,
  yu as Popover,
  R1 as Progress,
  au as Quote,
  ns as Radio,
  L1 as Rating,
  ru as RichText,
  $s as Search,
  g1 as SegmentedControl,
  D1 as Select,
  B1 as Skeleton,
  I1 as Slider,
  Jl as Spinner,
  x1 as Status,
  oc as Step,
  yr as Stepper,
  Z1 as Switch,
  Qo as Tab,
  V_ as Table,
  lu as TableRow,
  C1 as Tabs,
  y1 as Tag,
  M1 as Textarea,
  _u as TimePicker,
  G1 as Toast,
  cu as Toolbar,
  E1 as Tooltip,
  ou as TreeItem,
  pu as TreeView,
  iu as VideoEmbed,
  Nu as Wizard
};
//# sourceMappingURL=index.js.map
