/* ============================================================
   Cformly website — progressive enhancement only.
   Everything here degrades gracefully: no JS, no motion, no i18n
   (the static HTML remains a complete English site).
   i18n: English <-> हिन्दी, persisted per visitor (localStorage),
   applied instantly without reload. Contract: docs/design-system.md.
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "cformly_lang";

  /* ---------- translations ---------- */
  var translations = window.CFORMLY_I18N || { en: {} };
var SUPPORTED_LANGS = Object.keys(translations).filter(function (k) {
    return k !== "en" && translations[k] && Object.keys(translations[k]).length > 0;
  });
  var NATIVE_LABELS = {
    en: "English", hi: "हिन्दी", kn: "ಕನ್ನಡ", ta: "தமிழ்", te: "తెలుగు",
    ml: "മലയാളം", pa: "ਪੰਜਾਬੀ", mr: "मराठी", ur: "اردو", bn: "বাংলা",
    gu: "ગુજરાતી", as: "অসমীয়ा"
  };;

  /* ---------- i18n engine ---------- */

  function lookup(key, lang) {
    if (translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    if (translations.en[key] !== undefined) {
      return translations.en[key];
    }
    return key; // visible fallback: never an empty string
  }

  function currentLang() {
    var saved = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* storage unavailable — fall through */
    }
    if (SUPPORTED_LANGS.indexOf(saved) !== -1 || saved === "en") return saved;
    var pref = (navigator.language || "").toLowerCase();
    var langs = ["en"].concat(SUPPORTED_LANGS);
    for (var i = 0; i < langs.length; i++) {
      if (pref.indexOf(langs[i]) === 0) return langs[i];
    }
    return "en";
  }

  function applyI18n(lang) {
    var dict = translations[lang] || translations.en;

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ur" || lang === "ar" ? "rtl" : "ltr");

    var title = document.querySelector("title");
    if (title && title.dataset.i18nTitle) {
      title.textContent = lookup(title.dataset.i18nTitle, lang);
    }

    var metas = document.querySelectorAll("meta[data-i18n-meta]");
    for (var m = 0; m < metas.length; m++) {
      metas[m].setAttribute("content", lookup(metas[m].dataset.i18nMeta, lang));
    }

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    for (var p = 0; p < placeholders.length; p++) {
      placeholders[p].setAttribute(
        "placeholder",
        lookup(placeholders[p].dataset.i18nPlaceholder, lang),
      );
    }

    var texts = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < texts.length; i++) {
      texts[i].textContent = lookup(texts[i].dataset.i18n, lang);
    }

    var htmls = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmls.length; j++) {
      htmls[j].innerHTML = lookup(htmls[j].dataset.i18nHtml, lang);
    }

    var arias = document.querySelectorAll("[data-i18n-aria-label]");
    for (var k = 0; k < arias.length; k++) {
      arias[k].setAttribute(
        "aria-label",
        lookup(arias[k].dataset.i18nAriaLabel, lang),
      );
    }

    var toggles = document.querySelectorAll("[data-i18n-toggle]");
    for (var t = 0; t < toggles.length; t++) {
      toggles[t].textContent = NATIVE_LABELS[lang] || lang;
      toggles[t].setAttribute("aria-pressed", "true");
      toggles[t].removeAttribute("hidden");
    }
  }

  function bindToggles() {
    var toggles = document.querySelectorAll("[data-i18n-toggle]");
    // Session language: when localStorage is unavailable, currentLang() would
    // always return the browser default and the selector could never switch back.
    var sessionLang = currentLang();
    for (var t = 0; t < toggles.length; t++) {
      // Upgrade each legacy toggle button into a language selector: 12
      // languages need real navigation, not a two-way cycle.
      var btn = toggles[t];
      var select = document.createElement("select");
      select.className = btn.className;
      select.setAttribute("aria-label", lookup("lang.toggleAria", sessionLang));
      var langs = ["en"].concat(SUPPORTED_LANGS);
      for (var l = 0; l < langs.length; l++) {
        var opt = document.createElement("option");
        opt.value = langs[l];
        opt.textContent = NATIVE_LABELS[langs[l]] || langs[l];
        if (langs[l] === sessionLang) opt.selected = true;
        select.appendChild(opt);
      }
      select.addEventListener("change", function () {
        var next = this.value || "en";
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {
          /* non-persistent choice still works for the session */
        }
        applyI18n(next);
        // Keep every selector on the page in sync.
        var all = document.querySelectorAll("select[data-cformly-lang]");
        for (var s = 0; s < all.length; s++) all[s].value = next;
      });
      select.setAttribute("data-cformly-lang", "1");
      select.removeAttribute("data-i18n-toggle");
      btn.parentNode.replaceChild(select, btn);
    }
  }

  /* ---------- scroll reveals (unchanged behaviour) ---------- */
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  var revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    revealEls.forEach(function (el) {
      if (el.dataset.delay) {
        el.style.transitionDelay = el.dataset.delay + "ms";
      }
      io.observe(el);
    });
  }

  /* ---------- FAQ: one open at a time (native <details> still works without JS) ---------- */
  var details = document.querySelectorAll("details.faq-item");
  if (details.length > 1) {
    details.forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (d.open) {
          details.forEach(function (other) {
            if (other !== d) other.removeAttribute("open");
          });
        }
      });
    });
  }

  /* ---------- hero deadline clock ----------
     Illustrative countdown of the 24-hour window (the feature the app shows
     per guest). Seeds near 24h and ticks down; loops so it never reads 00:00:00
     on a marketing page. Respects reduced-motion (renders once, no ticking). */
  (function () {
    var el = document.getElementById("deadline-clock");
    if (!el) return;
    var remaining = 23 * 3600 + 58 * 60 + 42; // ~84s into the window
    function pad(n) {
      return n < 10 ? "0" + n : "" + n;
    }
    function render() {
      var h = Math.floor(remaining / 3600);
      var m = Math.floor((remaining % 3600) / 60);
      var s = remaining % 60;
      el.innerHTML =
        pad(h) +
        '<span class="colon">:</span>' +
        pad(m) +
        '<span class="colon">:</span>' +
        pad(s);
    }
    render();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.setInterval(function () {
      remaining = remaining > 1 ? remaining - 1 : 24 * 3600 - 1;
      render();
    }, 1000);
  })();

  /* ---------- mobile nav menu (roadmap 98) ----------
     The inline nav links are hidden ≤880px; this toggle re-exposes them as
     a dropdown. Progressive enhancement: with no JS the links stay in the
     DOM and the page content (incl. footer links) remains reachable. */
  var nav = document.querySelector(".nav");
  var navToggle = document.querySelector(".nav-menu-toggle");
  if (nav && navToggle) {
    var mainEl = document.getElementById("main") || document.querySelector("main");
    var setMenuOpen = function (open) {
      nav.classList.toggle("menu-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (mainEl) {
        if (open) mainEl.setAttribute("inert", "");
        else mainEl.removeAttribute("inert");
      }
      if (open) {
        var focusables = nav.querySelectorAll("a, button, select, [tabindex]:not([tabindex='-1'])");
        if (focusables.length) focusables[0].focus();
      }
    };
    navToggle.addEventListener("click", function () {
      setMenuOpen(!nav.classList.contains("menu-open"));
    });
    // A tap on any link navigates — close so the panel doesn't sit open on
    // the destination page (bfcache restores included).
    nav.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest(".nav-links a")) {
        setMenuOpen(false);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key === "Tab" && nav.classList.contains("menu-open")) {
        var f = nav.querySelectorAll("a, button, select, [tabindex]:not([tabindex='-1'])");
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 880) setMenuOpen(false);
    });
    // bfcache: returning to the page with the menu open restores the open
    // state — reset it on pageshow.
    window.addEventListener("pageshow", function () {
      setMenuOpen(false);
    });
  }

  /* ---------- conversion layer (roadmap 92) ----------
     Launch-gated channels activate by filling ONE constant each; until then
     the elements stay hidden and the page keeps only what is true today.
     WhatsApp number + store URLs are pending business decisions (SEO plan
     §4.7 / §8) — never invent them here. */
  var WHATSAPP_NUMBER = ""; // e.g. "919999999999" — digits only, no "+"
  var STORE_URLS = {
    // Play listing (public track), with launch UTM already attached.
    play: "",
    appstore: "",
  };
  var WAITLIST_TO = "support@cformly.com";

  (function () {
    var wa = document.querySelector("[data-wa-cta]");
    if (wa && WHATSAPP_NUMBER) {
      var text = encodeURIComponent(lookup("cta.waText", currentLang()));
      wa.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
      wa.removeAttribute("hidden");
    }
    var badges = document.querySelectorAll("[data-store-badge]");
    for (var b = 0; b < badges.length; b++) {
      var url = STORE_URLS[badges[b].dataset.storeBadge];
      if (!url) continue;
      var a = document.createElement("a");
      a.href = url;
      a.className = badges[b].className;
      a.setAttribute("data-store-badge", badges[b].dataset.storeBadge);
      a.textContent = badges[b].textContent;
      badges[b].parentNode.replaceChild(a, badges[b]);
    }
  })();

  /* ---------- waitlist form (roadmap 92) ----------
     Static-friendly capture: no backend exists yet, so submit opens a
     pre-written email in the visitor's own mail app. The visible
     support@ mailto link is the no-JS path; this handler is enhancement. */
  (function () {
    var form = document.getElementById("waitlist-form");
    if (!form) return;
    var done = form.querySelector("[data-waitlist-done]");
    var errEl = form.querySelector("[data-waitlist-error]");
    if (!errEl) {
      errEl = document.createElement("p");
      errEl.setAttribute("data-waitlist-error", "");
      errEl.setAttribute("role", "alert");
      errEl.setAttribute("aria-live", "assertive");
      errEl.hidden = true;
      // The form sits on the passport-navy band — the error must read on
      // dark ground (7.6:1+ on navy/navy-deep; WCAG audit 2026-08-28).
      errEl.style.color = "#ff9d92";
      form.insertBefore(errEl, done);
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.elements.email.value.trim();
      if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        errEl.textContent = "Enter a valid work email.";
        errEl.hidden = false;
        form.elements.email.setAttribute("aria-invalid", "true");
        form.elements.email.focus();
        return;
      }
      errEl.hidden = true;
      errEl.textContent = "";
      form.elements.email.removeAttribute("aria-invalid");
      var prop = (form.elements.propertyType.value || "-").replace(/[\r\n]+/g, " ");
      var plat = (form.elements.platform.value || "-").replace(/[\r\n]+/g, " ");
      var body =
        "Property: " + prop + "\nPhone: " + plat + "\n— sent from cformly.com";
      var mailto =
        "mailto:" +
        WAITLIST_TO +
        "?subject=" +
        encodeURIComponent("Early access request — cformly.com") +
        "&body=" +
        encodeURIComponent(body);
      if (done) done.removeAttribute("hidden");
      window.location.href = mailto;
    });
  })();

  /* ---------- hero demo (roadmap 96) ----------
     The filing compressed into one loop: scan → fields resolve → filed.
     Pure enhancement: without JS (or with reduced motion) the panel rests
     in its completed state — an honest still of the product's action. */
  (function () {
    var panel = document.getElementById("hero-demo");
    if (!panel) return;
    var fields = panel.querySelectorAll("[data-demo-field]");
    var statusText = panel.querySelector("[data-demo-status-text]");
    var statusEl = panel.querySelector("[data-demo-status]");
    var labels = {
      scan: "demo.statusScanning",
      review: "demo.statusReviewing",
      filed: "demo.statusFiled",
    };
    function setStatus(key) {
      if (statusText) statusText.textContent = lookup(labels[key], currentLang());
      if (statusEl) statusEl.setAttribute("data-demo-phase", key);
    }
    function clearFields() {
      for (var i = 0; i < fields.length; i++) {
        fields[i].classList.remove("filled");
      }
    }
    function fillFields(step) {
      if (step >= fields.length) return;
      fields[step].classList.add("filled");
      window.setTimeout(function () {
        fillFields(step + 1);
      }, 420);
    }
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.setTimeout
    ) {
      for (var f = 0; f < fields.length; f++) {
        fields[f].classList.add("filled");
      }
      return;
    }
    // Marks the panel as animated — CSS dims values only under .demo-live,
    // so a no-JS visit never shows a half-empty panel.
    panel.classList.add("demo-live");
    function cycle() {
      clearFields();
      setStatus("scan");
      window.setTimeout(function () {
        setStatus("review");
        fillFields(0);
      }, 2400);
      window.setTimeout(function () {
        setStatus("filed");
      }, 2400 + 420 * fields.length + 800);
    }
    cycle();
    window.setInterval(cycle, 11000);
  })();

  /* ---------- init ---------- */
  applyI18n(currentLang());
  bindToggles();
})();
