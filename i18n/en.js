// Cformly website strings — en. Loaded before app.js; app.js merges
// window.CFORMLY_I18N into its translations registry.
window.CFORMLY_I18N = window.CFORMLY_I18N || {};
window.CFORMLY_I18N["en"] = {
  /* nav / global */
  "nav.how": "How it works",
  "nav.setup": "Setup guide",
  "nav.privacy": "Privacy",
  "nav.faq": "FAQ",
  "nav.cta": "Get early access",
  "nav.ariaPrimary": "Primary",
  "nav.menuAria": "Menu",
  "brand.aria": "Cformly home",
  "lang.toggleAria": "Switch language",
  "legal.updated": "Last updated: August 2026",
  "back.toHome": "Back to Cformly",
  "footer.product": "Product",
  "footer.legal": "Legal",
  "footer.contact": "Contact",
  "footer.privacy": "Privacy policy",
  "footer.terms": "Terms of service",
  "footer.blurb":
    "The 24-hour register for hotel front desks in India. Scan, review, send — on-device and private.",
  "footer.copyright": "© 2026 Cformly. All rights reserved.",
  "footer.notAffiliated":
    "Not affiliated with the FRRO or the Government of India.",

  /* index — hero */
  "hero.eyebrow": "For hotels, guest houses & homestays in India",
  "hero.title": "Never refuse a <em>foreign guest</em> again.",
  "hero.lede":
    "The law gives you 24 hours to register every foreign guest with the FRRO — and fines of up to ₹3 lakh when it slips. Cformly turns the whole Form C into a few minutes: scan the passport, check the fields, and the portal form fills itself.",
  "hero.ctaPrimary": "Get early access",
  "hero.secondaryCta": "Why not just use the portal?",
  "hero.ruleText": "the 24-hour window Cformly counts for every guest",

  /* index — why not the portal */
  "why.eyebrow": "The honest question",
  "why.title": "Why not just fill Form C on the portal?",
  "why.lede":
    "You legally can. The portal is just slow, fiddly, and unforgiving — and it punishes the mistakes you make on a busy night. Here's what Cformly takes off your plate.",
  "why.item1Title": "No more typing passport numbers",
  "why.item1Body":
    "A passport has 40+ characters of machine-readable data. Cformly reads it straight off the camera — every name, number, and date filled without a single keystroke, and without the transcription typos that trigger FRRO scrutiny.",
  "why.item2Title": "Every field on one screen",
  "why.item2Body":
    "The portal spreads the form across multiple tabs and pages. Cformly puts the whole record on a single review screen with confidence flags, so nothing is missed and nothing is guessed.",
  "why.item3Title": "The portal form fills itself",
  "why.item3Body":
    "No extension? You copy the fields once. With the free browser extension, Cformly auto-fills the FRRO portal form from those copied fields. You stay in control — you solve the CAPTCHA and attach the photo, as required.",
  "why.item4Title": "The 24-hour deadline never sneaks up",
  "why.item4Body":
    "Cformly counts down from the moment you capture a guest. What used to live in the back of your head is now on screen — so the night shift never files late, never risks the fine of up to ₹3 lakh under §23 of the Immigration and Foreigners Act 2025.",

  /* index — how it works */
  "how.eyebrow": "Your shift, simplified",
  "how.title": "Check in a guest in three moves.",
  "how.lede":
    "No typing, no hunting through portal tabs. From the counter to the filed form — the same three steps, every guest, every time.",
  "how.step1Title": "Scan",
  "how.step1Body":
    "Point the camera at the passport and visa. OCR reads the fields instantly — no typing, no typos.",
  "how.step2Title": "Check",
  "how.step2Body":
    "Every field on one screen, with confidence flags on anything the OCR flagged. Fix it, add arrival and stay details, snap the guest photo.",
  "how.step3Title": "File",
  "how.step3Body":
    "Open the portal in a browser, paste the copied guest fields, and the extension fills the form. You solve the CAPTCHA and attach the photo — done in minutes.",

  /* index — privacy band */
  "privacy.pitch.title": "Guest data stays on the property.",
  "privacy.pitch.lede":
    "Passports and visas are personal data. Cformly reads them on the phone — so that data never needs to leave the front desk, and never touches a Cformly server.",
  "privacy.item1Title": "Open-source OCR, on-device",
  "privacy.item1Body":
    "Passports and visas are read by open-source software on the phone itself — no third-party AI services, and no document photo is ever uploaded to any server.",
  "privacy.item2Title": "Encrypted on the phone",
  "privacy.item2Body":
    "SQLCipher on the device, the key in the hardware keystore. Biometric or PIN lock, screen privacy, and clipboard hygiene are built in.",
  "privacy.item3Title": "Human in the loop",
  "privacy.item3Body":
    "The CAPTCHA and the photo attachment stay with the host. Cformly fills the form; the host files it.",
  "privacy.item4Title": "Your data, your say",
  "privacy.item4Body":
    "Export or delete everything from Settings at any time — your rights under the DPDP Act 2023.",

  /* index — languages */
  "lang.eyebrow": "Languages",
  "lang.title": "Twelve Indian languages, side by side.",
  "lang.lede":
    "Front desks across India speak many languages. Cformly does too, on every screen.",
  "lang.enTitle": "English",
  "lang.hiTitle": "हिन्दी",
  "lang.sampleScan": "Scan passport",
  "lang.sampleReview": "Review details",
  "lang.sampleSend": "Send to portal",
  "lang.note":
    "Switch languages any time from settings — every screen, in every language.",

  /* index — faq */
  "faq.eyebrow": "FAQ",
  "faq.title": "Questions, answered plainly.",
  "faq.q0":
    "Why do I need the app if I can just fill the form on the FRRO website?",
  "faq.a0":
    "You can — and the FRRO must accept both. The portal is just slow and unforgiving: dozens of fields to type, spread across tabs, under a hard 24-hour deadline. Cformly exists because the manual way wastes time and invites typos. The app scans the passport so you never type it, shows every field on one screen to review, and fills the portal form for you. You keep the legal responsibilities that are yours — solving the CAPTCHA and attaching the photo.",
  "faq.q1": "Is Cformly a government app?",
  "faq.a1":
    "No. Cformly is an independent filing assistant. The host remains legally responsible for accurate and timely filing, and Cformly is not affiliated with or endorsed by the FRRO or the Government of India.",
  "faq.q2": "Who solves the CAPTCHA on the portal?",
  "faq.a2":
    "The host, always. The extension fills the form fields; the human solves the CAPTCHA and attaches the photo before submitting.",
  "faq.q3": "Where does guest data live?",
  "faq.a3":
    "Passports and visas are read on the phone itself with open-source OCR — no third-party AI services, and no document photo is ever uploaded. Guest data is stored encrypted on the device and can be exported or deleted from Settings at any time.",
  "faq.q4": "Does it work offline?",
  "faq.a4":
    "Scanning, extracting fields, reviewing records, and filling the portal all work fully on-device — no connection needed to read a passport or fill the form. Filing to the FRRO portal needs a browser (with or without the extension).",
  "faq.q5": "What is the 24-hour rule?",
  "faq.a5":
    "Foreign guests must be registered with the FRRO within 24 hours of check-in. Cformly shows a countdown from the moment a guest is captured, so the deadline never sneaks up on the night shift.",
  "faq.q6": "Which languages does it support?",
  "faq.a6":
    "Twelve: English, Hindi, Kannada, Tamil, Telugu, Malayalam, Punjabi, Marathi, Urdu, Bengali, Gujarati and Assamese — switchable from settings.",

  /* index — cta / disclaimer */
  "cta.title": "Stop retyping passports. Start filing fast.",
  "cta.lede":
    "Cformly is in invite-only testing with real front desks. Tell us where to send your invite — app, extension, and a walkthrough of your first filing.",
  "cta.primary": "Request early access",
  "cta.emailLabel": "Work email",
  "cta.emailPlaceholder": "you@yourhotel.com",
  "cta.propertyLabel": "Your property",
  "cta.propHotel": "Hotel",
  "cta.propGuestHouse": "Guest house",
  "cta.propHomestay": "Homestay / B&B",
  "cta.propOther": "Other",
  "cta.platformLabel": "Phone",
  "cta.platAndroid": "Android",
  "cta.platIos": "iOS",
  "cta.platEither": "Either is fine",
  "cta.note":
    'No tracking, no cookies — this opens a pre-written email in your own email app. Prefer plain email? <a href="mailto:support@cformly.com">support@cformly.com</a>',
  "cta.done":
    "Your email app should have opened — press send, and we'll write back within a day.",
  "cta.wa": "Chat on WhatsApp",
  "cta.waText": "Hello! I'd like early access to Cformly for my property.",
  "demo.statusIdle": "Fields read on-device",
  "demo.statusScanning": "Scanning passport…",
  "demo.statusReviewing": "Fields extracted — check & confirm",
  "demo.statusFiled": "Form filled on the FRRO portal",
  "cta.appStore": "App Store",
  "cta.googlePlay": "Google Play",
  "cta.comingSoon": "coming soon",
  "disclaimers.main":
    "Cformly is a filing assistant. The host remains legally responsible for accurate and timely Form III filing under the Immigration and Foreigners Act 2025. Cformly is not affiliated with or endorsed by the FRRO or the Government of India.",

  /* index — meta */
  "meta.indexTitle": "Cformly — The front desk's 24-hour register",
  "meta.indexDesc":
    "Fill FRRO Form C in minutes, not a whole shift. Cformly scans the passport, shows every field on one screen, and auto-fills the FRRO portal form. Download the app — no typing, no typos, 24-hour deadline covered.",
  "meta.indexOgTitle": "Cformly — The front desk's 24-hour register",
  "meta.indexOgDesc":
    "Fill FRRO Form C in minutes. Cformly scans the passport, reviews every field, and fills the portal form for you — no typing, no typos, deadline covered.",

  /* privacy page */
  "privacy.title": "Privacy Notice & Consent",
  "privacy.lede":
    "Compliant with the DPDP Act 2023. This notice explains what Cformly collects, where it is stored, and the rights you hold over it.",
  "privacy.collect": "What We Collect",
  "privacy.collectIntro":
    "Cformly collects the minimum data needed to file Form C / Form III (foreigner registration) on behalf of your guests:",
  "privacy.collect1":
    "<strong>Guest passport data:</strong> full name, surname, given names, sex, date of birth, nationality, passport number, place/date of issue, expiry. Read from the passport's MRZ line by on-device open-source OCR — <strong>never uploaded to any server</strong>.",
  "privacy.collect2":
    "<strong>Guest visa data:</strong> visa number, type, place/date of issue, expiry. Read from the visa by the same on-device OCR — <strong>never uploaded</strong>.",
  "privacy.collect3":
    "<strong>Guest photo:</strong> captured and resized to portal limits, stored encrypted on-device.",
  "privacy.collect4":
    "<strong>Host/property profile:</strong> establishment name, address, FRRO office jurisdiction, contact details. Entered once, reused across filings.",
  "privacy.whereStored": "Where Data Is Stored",
  "privacy.where1":
    "<strong>On-device encrypted SQLite database</strong> (key in iOS Keychain / Android Keystore, hardware-backed where available). Never in plaintext, never in cloud backups.",
  "privacy.where2":
    "<strong>Backend (India region):</strong> host accounts and auth tokens only. <strong>No document data, ever</strong> — no passport/visa images or extracted fields touch a server.",
  "privacy.howUsed": "How We Use It",
  "privacy.use1": "To pre-fill Form C / Form III fields for review and filing.",
  "privacy.use2":
    "To copy the filled fields to the clipboard or a PDF for manual pasting into the portal.",
  "privacy.use3":
    "To auto-fill the FRRO portal form via the free browser extension (the host stays in the browser; no server relay).",
  "privacy.rights": "Your Rights (DPDP Act 2023)",
  "privacy.right1":
    "<strong>Access:</strong> export all your data in machine-readable JSON (Settings &gt; Data &amp; Privacy &gt; Export Data).",
  "privacy.right2":
    "<strong>Correction:</strong> edit any guest field on the Review screen before filing.",
  "privacy.right3":
    "<strong>Erasure:</strong> Settings &gt; Delete Account removes all local PII, keys, and triggers server-side deletion. You receive a confirmation when complete.",
  "privacy.right4":
    '<strong>Grievance:</strong> contact <a href="mailto:dpo@cformly.com">dpo@cformly.com</a> for any privacy concern or data request.',
  "privacy.retention": "Data Retention",
  "privacy.retention1":
    "Document photos and extracted fields stay encrypted on the device until you delete them. They leave it only through actions you take explicitly — pushing reviewed fields to the FRRO portal, or exporting a copy — never to Cformly servers.",
  "privacy.retention2":
    "The encrypted local store persists until you delete the account or uninstall.",
  "privacy.crossBorder": "Cross-Border Processing",
  "privacy.crossBorderBody":
    "All document capture and OCR runs entirely on the phone. Guest passport, visa, and field data are never sent to Cformly servers and never cross a border through us; they leave the device only when you explicitly push fields to the official FRRO portal or export a copy. Only host accounts and property data (non-guest) are held in an India region.",
  "privacy.consent": "Consent",
  "privacy.consentBody":
    "By using Cformly, you consent to this data processing. You can withdraw consent at any time by deleting your account. Withdrawal does not affect filings already submitted to the FRRO (those are governed by the FRRO's own policies).",
  "privacy.contactH": "Contact",
  "privacy.dpoLabel": "Data Protection Officer:",
  "privacy.securityLabel": "Security:",
  "privacy.supportLabel": "Support:",
  "meta.privacyTitle": "Privacy Policy — Cformly",
  "meta.privacyDesc":
    "Cformly privacy notice and consent — DPDP Act 2023 compliant. What we collect, where data is stored, your rights.",

  /* terms page */
  "terms.title": "Terms of Service",
  "terms.lede":
    "The agreement between you and Cformly for using the app, the extension, and this website.",
  "terms.acceptance": "1. Acceptance of Terms",
  "terms.acceptanceBody":
    'By downloading, installing, or using the Cformly mobile application ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.',
  "terms.description": "2. Description of Service",
  "terms.descriptionBody":
    'Cformly is a filing assistant that helps hotels, guest houses, and individual hosts ("Hosts") prepare and file FRRO Form C (Foreigner Registration / Form III) as required under the Immigration and Foreigners Act, 2025 and related regulations.',
  "terms.disclaimer": "3. Important Disclaimer",
  "terms.disclaimerBold":
    "<strong>Cformly is NOT affiliated with, endorsed by, or connected to the FRRO (Foreigners Regional Registration Office), the Bureau of Immigration, or the Government of India.</strong>",
  "terms.disclaimerBody":
    "Cformly is an independent filing assistant. The Host remains solely and legally responsible for the accuracy of all information filed, timely submission within the prescribed timeframe, and compliance with all applicable laws.",
  "terms.obligations": "4. Host Obligations",
  "terms.obligation1": "Provide accurate property registration details",
  "terms.obligation2":
    "Verify all extracted data before submission (OCR may produce errors)",
  "terms.obligation3":
    "Ensure the guest has consented to collection of their data",
  "terms.obligation4": "File Form C within the legally mandated timeframe",
  "terms.obligation5":
    "Not use the App to file false, fraudulent, or misleading information",
  "terms.privacy": "5. Privacy and Data Handling",
  "terms.privacyBody":
    'Your use of the App is also governed by our <a href="privacy.html">Privacy Policy</a>. All guest data is encrypted at rest on the device using SQLCipher (AES-256); document capture and OCR run entirely on-device. The backend holds only host accounts (non-PII) in India. No third-party AI services are used.',
  "terms.accuracy": "6. Data Accuracy",
  "terms.accuracyBody":
    "The App uses OCR to extract data from passports and visas. OCR is not 100% accurate. The Host must review all extracted data before submission.",
  "terms.liability": "7. Limitation of Liability",
  "terms.liabilityBody":
    'To the maximum extent permitted by law, Cformly is provided "AS IS" without warranties of any kind. We are not liable for penalties, fines, or legal consequences arising from late, inaccurate, or incomplete Form C filings.',
  "terms.contactH": "8. Contact",
  "terms.grievanceLabel": "Privacy/Grievance:",
  "terms.governing": "9. Governing Law",
  "terms.governingBody":
    "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.",
  "meta.termsTitle": "Terms of Service — Cformly",
  "meta.termsDesc":
    "Cformly terms of service — acceptance, host obligations, data accuracy, limitation of liability, governing law.",

  /* setup guide page (round-66) */
  "meta.setupTitle": "Setup Guide — Cformly",
  "meta.setupDesc":
    "Set up Cformly in three steps: the app on your phone, the free extension on the computer, and your first Form III filing — move by move.",
  "setup.title": "Set up Cformly in three steps",
  "setup.lede":
    "One-time setup on the phone and the computer. After this, every filing is: scan, send, fill.",
  "setup.step1Title": "1 · Install the app on your phone",
  "setup.step1Body":
    "Get Cformly from Google Play or the App Store and sign in with your email. It's invite-only internal testing for now — your property's invite link arrives by email. Add your property once — the address, FRRO office, and contact details pre-fill every form after that.",
  "setup.step2Title": "2 · Add the extension on the computer you file from",
  "setup.step2Download": "Download the Cformly extension (.zip)",
  "setup.step2Checksums": "SHA-256 checksums",
  "setup.step2Body":
    "On the computer you file from, add the free Cformly extension. The Chrome Web Store listing is coming soon — until then use only the official Cformly zip: download it, open chrome://extensions, temporarily turn on Developer mode, click Load unpacked and pick the unzipped folder, then turn Developer mode off again (this temporary step is only needed until the store listing is live). It works only on the FRRO portal page you have open — the CAPTCHA and the guest photo always stay with you. The guest's details travel through the message you send yourself — never through our servers.",
  "setup.step3Title": "3 · File your first guest",
  "setup.step3Body":
    "Scan the passport and visa, review the fields, take the guest photo, then tap Push to Portal → Send to Computer. On the portal page, press the navy Cformly button (bottom-right corner), paste, and press Fill Form.",
  "setup.walkTitle": "The first filing, move by move",
  "setup.walk1": "Phone: open the guest and tap Push to Portal.",
  "setup.walk2":
    "Phone: tap Send to Computer and send the fields (and the photo) to yourself — email or WhatsApp.",
  "setup.walk3":
    "Computer: open the FRRO portal, start a Form III, press the navy Cformly button in the bottom-right corner, and paste the fields into its box.",
  "setup.walk4":
    "Computer: attach the guest photo (drop it on the panel) and type the security code.",
  "setup.walk5":
    "Computer: press Save and Continue. The panel shows the Application ID big, and as a QR code.",
  "setup.walk6":
    "Phone: tap Scan from Computer and point the camera at the QR code. Done — the guest is marked filed.",
  "setup.faqTitle": "When something doesn't work",
  "setup.q1": "The clipboard button says it can't read anything?",
  "setup.a1":
    "Paste the fields into the box instead — the navy Cformly button (bottom-right corner) on the portal page has one too.",
  "setup.q2": "The photo won't attach?",
  "setup.a2":
    "Send the photo from the phone as a FILE or document — not as a picture inside a chat — then drop it onto the panel's dashed box.",
  "setup.q3": "The form filled but some fields are empty?",
  "setup.a3":
    "The panel lists exactly which fields need attention. Fix those on the portal page before saving.",
  "setup.privacyNote":
    "Everything above keeps guest data on your phone. The fields reach the computer only through the message you send yourself, and the extension fills only the portal page you have open.",
  /* trust badge (roadmap 71) */
  "trust.metaTitle": "Guest Privacy Badge — Cformly",
  "trust.metaDesc":
    "A printable reception card for foreign guests: your passport details are processed on the hotel's phone and never uploaded anywhere.",
  "trust.title": "Guest Privacy Badge",
  "trust.lede":
    "A card hotels can print and keep at reception, so foreign guests can see exactly what happens to their passport details.",
  "trust.printHint":
    "Print this page (Ctrl/Cmd + P) — it fits A4 and Letter, and prints without any scripts or colors.",
  "trust.badgeTitle": "Your passport never left this phone",
  "trust.point1":
    "Your passport and visa are scanned on the hotel's own phone. The photos and every extracted detail stay on that one device, in an encrypted store.",
  "trust.point2":
    "No document image or passport detail is uploaded to any server — not to the hotel's, not to Cformly's.",
  "trust.point3":
    "Reading your form is done by open-source software running entirely on the device — no third-party AI or cloud service ever sees it.",
  "trust.point4":
    "Your details leave the phone only once: to pre-fill the official FRRO Form C portal page in the hotel's own browser session, for the registration the law requires within 24 hours.",
  "trust.point5":
    "A person — not software — always completes the security check and submits the form. The hotel checks each field before saving.",
  "trust.close":
    "Hotels must register foreign guests with the FRRO within 24 hours of check-in — this is the law, and it happens without your data ever being copied to the cloud.",
  "trust.note":
    "Cformly is a tool used by the hotel. It is not affiliated with the FRRO or the Government of India. Full details: cformly.com/privacy",
  "trust.askH": "Questions a guest may ask",
  "trust.ask1":
    '"Can I see what was filled?" — Yes. Ask the front desk to show the filled Form C page before it is saved.',
  "trust.ask2":
    '"Where is my data deleted?" — Everything stays on the hotel\'s phone in an encrypted on-device store; the hotel manages its retention.',
  "trust.ask3":
    '"Who do I contact?" — Write to dpo@cformly.com for any privacy question; the hotel\'s front desk can help first.',
  "footer.trust": "Guest privacy badge",

  /* free tool: photo compressor (roadmap 99) */
  "meta.compressTitle": "Free photo compressor for the FRRO portal — Cformly",
  "meta.compressDesc": "Shrink a guest photo below the FRRO portal's 50 KB limit right in your browser. Free, works offline, and the photo never leaves your device.",
  "compress.title": "Compress a photo for the FRRO portal",
  "compress.lede": "The portal rejects guest photos over 50 KB. This free tool shrinks any photo below the limit in your browser — the file never leaves your device.",
  "compress.howTitle": "How it works",
  "compress.step1": "Choose the guest photo from your phone or computer.",
  "compress.step2": "The tool resizes it and re-encodes it below your target size — entirely on this page, offline.",
  "compress.step3": "Download the compressed JPEG and attach it on the portal.",
  "compress.choose": "Choose photo",
  "compress.targetLabel": "Target size (KB)",
  "compress.compressBtn": "Compress",
  "compress.before": "Original",
  "compress.after": "Compressed",
  "compress.download": "Download JPEG",
  "compress.again": "Compress another photo",
  "compress.errorNoFile": "Choose a photo first.",
  "compress.errorBadFile": "Couldn't read that file — please use a JPG or PNG photo.",
  "compress.offline": "No upload, ever: this page has no server and no tracking. The photo is processed by your own browser and stays on your device.",

  /* knowledge hub: Form III (roadmap 100) */
  "meta.formcTitle": "Form III (formerly Form C): the 24-hour register — Cformly",
  "meta.formcDesc": "What FRRO Form III is, the 24-hour rule for foreign guests, who must file, and how Cformly helps Indian hotels file on time.",
  "formc.title": "Form III: the 24-hour register, explained",
  "formc.lede": "A plain-language guide for hotels, guest houses, and homestays: what the form is, the deadline, and where Cformly fits.",
  "formc.whatTitle": "What is Form III?",
  "formc.whatBody": "Every stay of a foreign guest in India must be reported to the FRRO on its portal. The form long known as Form C is now called Form III under the Immigration and Foreigners Act, 2025 — same register, new name.",
  "formc.ruleTitle": "The 24-hour rule",
  "formc.ruleBody": "The law requires the report within 24 hours of the guest's arrival — and the departure is reported the same way (Immigration and Foreigners Act 2025, §8(1)). Cformly runs a countdown from the moment you capture a guest, so the deadline never sneaks up on a busy shift.",
  "formc.whoTitle": "Who must file",
  "formc.whoBody": "Every accommodation hosting a foreign guest — hotels, guest houses, homestays, PGs, hostels, hospitals, and anyone renting a room or flat. The host stays legally responsible for accurate, on-time filing.",
  "formc.penaltyTitle": "What happens if it slips",
  "formc.penaltyBody": "Fines for late or missed registration can run as high as ₹3 lakh. Cformly exists so the deadline is tracked on screen, not in someone's head.",
  "formc.portalTitle": "How the portal works",
  "formc.portalBody": "The FRRO portal has no API and is CAPTCHA-gated. A single guest means dozens of fields typed by hand, spread across tabs, plus a photo under 50 KB — 15 to 25 minutes per guest when done manually, twice per stay.",
  "formc.helpTitle": "How Cformly helps",
  "formc.helpBody": "Scan the passport and visa — the fields are read on-device by open-source OCR. Review everything on one screen. The free browser extension fills the portal form in your own browser session; you solve the CAPTCHA and attach the photo, as required.",
  "formc.watchTitle": "Portal changes",
  "formc.watchBody": "We track FRRO portal changes that affect filing. The changelog starts with the first verified change — until then, this space stays honestly empty.",
  "formc.linksTitle": "Next steps",

  /* extension trust page (roadmap 196) */
  "meta.extTitle": "The Cformly browser extension — Cformly",
  "meta.extDesc": "How the free Cformly extension fills the FRRO portal form inside your own browser session — no credentials, no PII, no server relay.",
  "ext.title": "The extension: fill inside your own session",
  "ext.lede": "The free Cformly browser extension writes the reviewed guest fields into the FRRO portal form — in your own tab, under your own login. It never touches credentials or personal data.",
  "ext.howTitle": "How the fill works",
  "ext.how1": "You send the reviewed fields from the Cformly app to yourself — email or WhatsApp. The details travel through the message you send, never through our servers.",
  "ext.how2": "On the FRRO portal page, you click the Cformly button and press Fill. The extension reads the payload only on that explicit click.",
  "ext.how3": "It writes the fields into the form open in your own browser tab, where you can watch and correct every one.",
  "ext.how4": "You type the security code, attach the photo, and press Save. The filing is yours — Cformly never submits anything.",
  "ext.neverTitle": "What the extension never does",
  "ext.never1": "It never stores credentials or guest PII — nothing persists after the fill.",
  "ext.never2": "It never writes to your clipboard, and it never sends anything to Cformly servers — there is no relay.",
  "ext.never3": "It operates on one site only: the official FRRO portal page you have open.",
  "ext.never4": "It never solves the CAPTCHA or attaches the photo — those stay with the host, as the portal requires.",
  "ext.sigTitle": "Verified form mappings",
  "ext.sigBody": "The portal's layout changes sometimes. The fill instructions the extension loads (the form mapping) carry an Ed25519 signature checked against a public key built into the extension — if a mapping doesn't verify, the extension refuses to use it.",
  "ext.sigNote": "Fail closed, by design: an unverifiable mapping is never applied.",
  "ext.cta": "Read the setup guide",

  /* footer: free tools + extension */
  "footer.tools": "Free tools",
  "footer.formc": "Form III guide",
  "footer.compress": "Photo compressor",
  "footer.ext": "Browser extension",

  /* accommodator-registration guide (roadmap 59) */
  "meta.hotelregTitle": "FRRO portal registration for hotels — Cformly",
  "meta.hotelregDesc": "Step-by-step: register your hotel, guest house, or homestay on the FRRO portal — what to prepare, what the form asks, and the FRRO-office fallback.",
  "hotelreg.backToFormc": "Back to the Form III guide",
  "hotelreg.title": "Registering your property on the FRRO portal",
  "hotelreg.lede": "Before any Form III filing, your property needs a free account on the FRRO portal. Here is the whole path — including the FRRO office fallback nobody mentions.",
  "hotelreg.whatTitle": "Why an account is needed",
  "hotelreg.whatBody": "Form III is filed per accommodation. Your property's account carries the establishment details, the portal login, and a short accommodation ID (like 7X78) issued on approval. No approved account, no filing.",
  "hotelreg.prepTitle": "Have these ready",
  "hotelreg.prepBody": "Your property's full postal address and contact details · an email address and an Indian mobile number (both receive OTPs) · the accommodation type — hotel, guest house, homestay, PG · the owner's name and ID details.",
  "hotelreg.portalTitle": "What registration asks",
  "hotelreg.portalBody": "Open indianfrro.gov.in, choose the accommodation (Form III) registration, fill establishment, address, and contact details, verify email and mobile by OTP, and submit. FRRO then approves the account and issues your login and accommodation ID — approval can take days.",
  "hotelreg.afterTitle": "After approval",
  "hotelreg.afterBody": "Keep the login safe; add the User ID and accommodation ID to your Cformly property profile. The app uses them only to pre-fill filings and check the extension fills the right property — your password never leaves you.",
  "hotelreg.rejectTitle": "When registration fails",
  "hotelreg.rejectBody": "Check spam for the OTP or approval mail; fix any highlighted field. If the portal keeps rejecting or approval stalls, visit your local FRRO office with property documents — accommodations are registered in person there. A normal, documented path.",
  "hotelreg.privacyTitle": "About your password",
  "hotelreg.privacyBody": "Cformly never asks for or stores your FRRO portal password. You enter it only on the official portal, in your own browser session.",
  "hotelreg.cformlyTitle": "Where Cformly fits",
  "hotelreg.cformlyBody": "Once approved, Cformly carries the rest: scan passport and visa on the phone, review on one screen, and the free extension fills the portal form in your own session. You solve the CAPTCHA and attach the photo.",
  "hotelreg.formcLink": "The Form III guide: the 24-hour register",
  "hotelreg.navLink": "FRRO portal registration guide",

  /* DPDP posture page (roadmap 193) */
  "meta.dpdpTitle": "Guest data, on-device by design — Cformly",
  "meta.dpdpDesc":
    "Our DPDP Act 2023 posture in plain words: on-device open-source OCR, passports and visas that never leave the phone, a human filing on the portal — with proof you can check today.",
  "dpdp.title": "Guest data, on-device by design",
  "dpdp.lede":
    "Where Cformly stands on the DPDP Act 2023 — and the features in the app today that back it up.",
  "dpdp.howTitle": "The posture, in four points",
  "dpdp.point1":
    "Passports and visas are read by open-source OCR running entirely on the phone. No third-party AI, no cloud OCR — and no document image is ever uploaded to any server, including ours.",
  "dpdp.point2":
    "Guest records, photos, and extracted fields live only in an encrypted on-device database (SQLCipher; the key stays in the phone's keystore, hardware-backed where available).",
  "dpdp.point3":
    "Filing happens in the hotel's own browser: the extension fills the portal form in the host's logged-in session, and a person solves the CAPTCHA, attaches the photo, and submits. Cformly never submits anything.",
  "dpdp.point4":
    "Your rights are built in: export or delete everything from Settings at any time — access, correction, and erasure as the DPDP Act 2023 lays out.",
  "dpdp.whenTitle": "Where the DPDP Act stands",
  "dpdp.whenBody":
    "The DPDP Act 2023 has commenced only in part: most substantive duties for data fiduciaries, and most operational rules, are scheduled to commence on 13 May 2027. Cformly is built to those requirements today — on-device processing, purpose-limited data, consent artifacts. These are stated practices, not certifications.",
  "dpdp.proofTitle": "Proof you can check today",
  "dpdp.proof1":
    "Consent receipt export — Settings → Data & Privacy exports exactly what was consented to and when: the data-practice scope lines, a timestamp, and the app version. Ready to share with a guest or an auditor.",
  "dpdp.proof2":
    "Readiness templates — a hotel retention-policy template and a DPIA template, written around how Cformly actually processes data, ship alongside the product.",
  "dpdp.proof3":
    "Guest privacy badge — a printable reception card that tells guests in plain words what happens to their passport details.",
  "footer.dpdp": "DPDP posture",
};
