/* ============================================================
   Cformly website — progressive enhancement only.
   Everything here degrades gracefully: no JS, no motion, no i18n
   (the static HTML remains a complete English site).
   i18n: English <-> हिन्दी, persisted per visitor (localStorage),
   applied instantly without reload. Contract: docs/design-system.md.
   ============================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'cformly_lang';

  /* ---------- translations ---------- */
  var translations = {
    en: {
      /* nav / global */
      'nav.how': 'How it works',
      'nav.privacy': 'Privacy',
      'nav.faq': 'FAQ',
      'nav.cta': 'Start filling the easy way',
      'nav.ariaPrimary': 'Primary',
      'brand.aria': 'Cformly home',
      'lang.toggleAria': 'Switch language',
      'legal.updated': 'Last updated: July 2025',
      'back.toHome': 'Back to Cformly',
      'footer.product': 'Product',
      'footer.legal': 'Legal',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy policy',
      'footer.terms': 'Terms of service',
      'footer.blurb': 'The 24-hour register for hotel front desks in India. Scan, review, send — on-device and private.',
      'footer.copyright': '© 2025 Cformly. All rights reserved.',
      'footer.notAffiliated': 'Not affiliated with the FRRO or the Government of India.',

      /* index — hero */
            /* index — hero (conversion) */
      'hero.eyebrow': 'FRRO Form C · Filled from your phone',
      'hero.title': 'The fastest way to fill <em>FRRO Form C</em>.',
      'hero.lede': 'Every foreign guest must be registered with the FRRO within 24 hours. Cformly scans the passport, checks every field, and fills the portal form for you — so the whole filing takes minutes, not a whole shift. You just confirm, solve the one-time CAPTCHA, and attach the photo.',
      'hero.ctaPrimary': 'Start filling the easy way',
      'hero.secondaryCta': 'Why not just use the portal?',
      'hero.fact1Value': '< 10',
      'hero.fact1Label': 'minutes per guest',
      'hero.fact2Value': '0',
      'hero.fact2Label': 'manual passport typing',
      'hero.fact3Value': 'EN + हिन्दी',
      'hero.fact3Label': 'every screen, both ways',
      'hero.ruleText': 'the 24-hour window Cformly counts for every guest',

      /* index — hero compare (before/after) */
      'compare.portalTag': 'The hard way',
      'compare.portal1': 'Type every passport & visa field by hand',
      'compare.portal2': 'Hop between portal tabs, hunting for fields',
      'compare.portal3': 'Risk a typo the FRRO fines',
      'compare.portal4': 'Beat the 24-hour deadline on a night shift',
      'compare.appTag': 'The Cformly way',
      'compare.app1': 'Scan the passport — fields fill themselves',
      'compare.app2': 'Review every field on one screen',
      'compare.app3': 'Extension fills the portal form for you',
      'compare.app4': 'See the 24-hour countdown, never miss it',

      /* index — why not the portal */
      'why.eyebrow': 'The honest question',
      'why.title': 'Why not just fill Form C on the portal?',
      'why.lede': 'You legally can. The portal is just slow, fiddly, and unforgiving — and it punishes the mistakes you make on a busy night. Here\'s what Cformly takes off your plate.',
      'why.item1Title': 'No more typing passport numbers',
      'why.item1Body': 'A passport has 40+ characters of machine-readable data. Cformly reads it straight off the camera — every name, number, and date filled without a single keystroke, and without the transcription typos that trigger FRRO scrutiny.',
      'why.item2Title': 'Every field on one screen',
      'why.item2Body': 'The portal spreads the form across multiple tabs and pages. Cformly puts the whole record on a single review screen with confidence flags, so nothing is missed and nothing is guessed.',
      'why.item3Title': 'The portal form fills itself',
      'why.item3Body': 'No extension? You copy the fields once. With the free browser extension, Cformly auto-fills the FRRO portal form from a handoff code. You stay in control — you solve the CAPTCHA and attach the photo, as required.',
      'why.item4Title': 'The 24-hour deadline never sneaks up',
      'why.item4Body': 'Cformly counts down from the moment you capture a guest. What used to live in the back of your head is now on screen — so the night shift never files late, never pays the fine.',

      /* index — how it works */
      'how.eyebrow': 'Your shift, simplified',
      'how.title': 'Check in a guest in three moves.',
      'how.lede': 'No typing, no hunting through portal tabs. From the counter to the filed form — the same three steps, every guest, every time.',
      'how.step1Title': 'Scan',
      'how.step1Body': 'Point the camera at the passport and visa. OCR reads the fields instantly — no typing, no typos.',
      'how.step2Title': 'Check',
      'how.step2Body': 'Every field on one screen, with confidence flags on anything the OCR flagged. Fix it, add arrival and stay details, snap the guest photo.',
      'how.step3Title': 'File',
      'how.step3Body': 'Open the portal in a browser, enter the handoff code, and the extension fills the form. You solve the CAPTCHA and attach the photo — done in minutes.',

      /* index — privacy band */
      'privacy.title': 'Guest data stays on the property.',
      'privacy.lede': 'Passports and visas are personal data. Cformly reads them on the phone — so that data never needs to leave the front desk, and never touches a server.',
      'privacy.item1Title': 'Open-source OCR, on-device',
      'privacy.item1Body': 'Passports and visas are read by open-source software on the phone itself — no third-party AI services, and no document photo is ever uploaded to any server.',
      'privacy.item2Title': 'Encrypted on the phone',
      'privacy.item2Body': 'SQLCipher on the device, the key in the hardware keystore. Biometric or PIN lock, screen privacy, and clipboard hygiene are built in.',
      'privacy.item3Title': 'Human in the loop',
      'privacy.item3Body': 'The CAPTCHA and the photo attachment stay with the host. Cformly fills the form; the host files it.',
      'privacy.item4Title': 'Your data, your say',
      'privacy.item4Body': 'Export or delete everything from Settings at any time — your rights under the DPDP Act 2023.',

      /* index — languages */
      'lang.eyebrow': 'Languages',
      'lang.title': 'English and Hindi, side by side.',
      'lang.lede': 'Front desks in India speak both. Cformly does too, on every screen.',
      'lang.enTitle': 'English',
      'lang.hiTitle': 'हिन्दी',
      'lang.sampleScan': 'Scan passport',
      'lang.sampleReview': 'Review details',
      'lang.sampleSend': 'Send to portal',
      'lang.note': 'Switch languages any time from settings — every screen, both ways.',

      /* index — faq */
      'faq.eyebrow': 'FAQ',
      'faq.title': 'Questions, answered plainly.',
      'faq.q0': 'Why do I need the app if I can just fill the form on the FRRO website?',
      'faq.a0': 'You can — and the FRRO must accept both. The portal is just slow and unforgiving: dozens of fields to type, spread across tabs, under a hard 24-hour deadline. Cformly exists because the manual way wastes time and invites typos. The app scans the passport so you never type it, shows every field on one screen to review, and fills the portal form for you. You keep the legal responsibilities that are yours — solving the CAPTCHA and attaching the photo.',
      'faq.q1': 'Is Cformly a government app?',
      'faq.a1': 'No. Cformly is an independent filing assistant. The host remains legally responsible for accurate and timely filing, and Cformly is not affiliated with or endorsed by the FRRO or the Government of India.',
      'faq.q2': 'Who solves the CAPTCHA on the portal?',
      'faq.a2': 'The host, always. The extension fills the form fields; the human solves the CAPTCHA and attaches the photo before submitting.',
      'faq.q3': 'Where does guest data live?',
      'faq.a3': 'Passports and visas are read on the phone itself with open-source OCR — no third-party AI services, and no document photo is ever uploaded. Guest data is stored encrypted on the device and can be exported or deleted from Settings at any time.',
      'faq.q4': 'Does it work offline?',
      'faq.a4': 'Scanning, extracting fields, reviewing records, and filling the portal all work fully on-device — no connection needed to read a passport or fill the form. Filing to the FRRO portal needs a browser (with or without the extension).',
      'faq.q5': 'What is the 24-hour rule?',
      'faq.a5': 'Foreign guests must be registered with the FRRO within 24 hours of check-in. Cformly shows a countdown from the moment a guest is captured, so the deadline never sneaks up on the night shift.',
      'faq.q6': 'Which languages does it support?',
      'faq.a6': 'English and Hindi, switchable from settings.',

      /* index — cta / disclaimer */
      'cta.title': 'Stop retyping passports. Start filing fast.',
      'cta.lede': 'Cformly will be on the App Store and Google Play. Leave your address and we\'ll write when it ships.',
      'cta.primary': 'Start filling the easy way',
      'cta.appStore': 'App Store',
      'cta.googlePlay': 'Google Play',
      'cta.comingSoon': 'coming soon',
      'disclaimers.main': 'Cformly is a filing assistant. The host remains legally responsible for accurate and timely Form III filing under the Immigration and Foreigners Act 2025. Cformly is not affiliated with or endorsed by the FRRO or the Government of India.',

      /* index — meta */
      'meta.indexTitle': 'Cformly — The front desk\'s 24-hour register',
      'meta.indexDesc': 'Fill FRRO Form C in minutes, not a whole shift. Cformly scans the passport, shows every field on one screen, and auto-fills the FRRO portal form. Download the app — no typing, no typos, 24-hour deadline covered.',
      'meta.indexOgTitle': 'Cformly — The front desk\'s 24-hour register',
      'meta.indexOgDesc': 'Fill FRRO Form C in minutes. Cformly scans the passport, reviews every field, and fills the portal form for you — no typing, no typos, deadline covered.',

      /* privacy page */
      'privacy.title': 'Privacy Notice & Consent',
      'privacy.lede': 'Compliant with the DPDP Act 2023. This notice explains what Cformly collects, where it is stored, and the rights you hold over it.',
      'privacy.collect': 'What We Collect',
      'privacy.collectIntro': 'Cformly collects the minimum data needed to file Form C / Form III (foreigner registration) on behalf of your guests:',
      'privacy.collect1': '<strong>Guest passport data:</strong> full name, surname, given names, sex, date of birth, nationality, passport number, place/date of issue, expiry. Read from the passport\'s MRZ line by on-device open-source OCR — <strong>never uploaded to any server</strong>.',
      'privacy.collect2': '<strong>Guest visa data:</strong> visa number, type, place/date of issue, expiry. Read from the visa by the same on-device OCR — <strong>never uploaded</strong>.',
      'privacy.collect3': '<strong>Guest photo:</strong> captured and resized to portal limits, stored encrypted on-device.',
      'privacy.collect4': '<strong>Host/property profile:</strong> establishment name, address, FRRO office jurisdiction, contact details. Entered once, reused across filings.',
      'privacy.whereStored': 'Where Data Is Stored',
      'privacy.where1': '<strong>On-device encrypted SQLite database</strong> (key in iOS Keychain / Android Keystore, hardware-backed where available). Never in plaintext, never in cloud backups.',
      'privacy.where2': '<strong>Backend (India region):</strong> host accounts and auth tokens only. <strong>No document data, ever</strong> — no passport/visa images or extracted fields touch a server.',
      'privacy.howUsed': 'How We Use It',
      'privacy.use1': 'To pre-fill Form C / Form III fields for review and filing.',
      'privacy.use2': 'To copy the filled fields to the clipboard or a PDF for manual pasting into the portal.',
      'privacy.use3': 'To auto-fill the FRRO portal form via the free browser extension (the host stays in the browser; no server relay).',
      'privacy.rights': 'Your Rights (DPDP Act 2023)',
      'privacy.right1': '<strong>Access:</strong> export all your data in machine-readable JSON (Settings &gt; Data &amp; Privacy &gt; Export Data).',
      'privacy.right2': '<strong>Correction:</strong> edit any guest field on the Review screen before filing.',
      'privacy.right3': '<strong>Erasure:</strong> Settings &gt; Delete Account removes all local PII, keys, and triggers server-side deletion. You receive a confirmation when complete.',
      'privacy.right4': '<strong>Grievance:</strong> contact <a href="mailto:dpo@cformly.com">dpo@cformly.com</a> for any privacy concern or data request.',
      'privacy.retention': 'Data Retention',
      'privacy.retention1': 'Document photos and extracted fields never leave the device — they stay encrypted there until you delete them.',
      'privacy.retention2': 'The encrypted local store persists until you delete the account or uninstall.',
      'privacy.crossBorder': 'Cross-Border Processing',
      'privacy.crossBorderBody': 'All document capture and OCR runs entirely on the phone. No passport, visa, or field data ever leaves the device or crosses a border. Only host accounts and auth tokens (non-PII) are held in an India region.',
      'privacy.consent': 'Consent',
      'privacy.consentBody': 'By using Cformly, you consent to this data processing. You can withdraw consent at any time by deleting your account. Withdrawal does not affect filings already submitted to the FRRO (those are governed by the FRRO\'s own policies).',
      'privacy.contactH': 'Contact',
      'privacy.dpoLabel': 'Data Protection Officer:',
      'privacy.securityLabel': 'Security:',
      'privacy.supportLabel': 'Support:',
      'meta.privacyTitle': 'Privacy Policy — Cformly',
      'meta.privacyDesc': 'Cformly privacy notice and consent — DPDP Act 2023 compliant. What we collect, where data is stored, your rights.',

      /* terms page */
      'terms.title': 'Terms of Service',
      'terms.lede': 'The agreement between you and Cformly for using the app, the extension, and this website.',
      'terms.acceptance': '1. Acceptance of Terms',
      'terms.acceptanceBody': 'By downloading, installing, or using the Cformly mobile application ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.',
      'terms.description': '2. Description of Service',
      'terms.descriptionBody': 'Cformly is a filing assistant that helps hotels, guest houses, and individual hosts ("Hosts") prepare and file FRRO Form C (Foreigner Registration / Form III) as required under the Immigration and Foreigners Act, 2025 and related regulations.',
      'terms.disclaimer': '3. Important Disclaimer',
      'terms.disclaimerBold': '<strong>Cformly is NOT affiliated with, endorsed by, or connected to the FRRO (Foreigners Regional Registration Office), the Bureau of Immigration, or the Government of India.</strong>',
      'terms.disclaimerBody': 'Cformly is an independent filing assistant. The Host remains solely and legally responsible for the accuracy of all information filed, timely submission within the prescribed timeframe, and compliance with all applicable laws.',
      'terms.obligations': '4. Host Obligations',
      'terms.obligation1': 'Provide accurate property registration details',
      'terms.obligation2': 'Verify all extracted data before submission (OCR may produce errors)',
      'terms.obligation3': 'Ensure the guest has consented to collection of their data',
      'terms.obligation4': 'File Form C within the legally mandated timeframe',
      'terms.obligation5': 'Not use the App to file false, fraudulent, or misleading information',
      'terms.privacy': '5. Privacy and Data Handling',
      'terms.privacyBody': 'Your use of the App is also governed by our <a href="privacy.html">Privacy Policy</a>. All guest data is encrypted at rest on the device using SQLCipher (AES-256); document capture and OCR run entirely on-device. The backend holds only host accounts (non-PII) in India. No third-party AI services are used.',
      'terms.accuracy': '6. Data Accuracy',
      'terms.accuracyBody': 'The App uses OCR to extract data from passports and visas. OCR is not 100% accurate. The Host must review all extracted data before submission.',
      'terms.liability': '7. Limitation of Liability',
      'terms.liabilityBody': 'To the maximum extent permitted by law, Cformly is provided "AS IS" without warranties of any kind. We are not liable for penalties, fines, or legal consequences arising from late, inaccurate, or incomplete Form C filings.',
      'terms.contactH': '8. Contact',
      'terms.grievanceLabel': 'Privacy/Grievance:',
      'terms.governing': '9. Governing Law',
      'terms.governingBody': 'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.',
      'meta.termsTitle': 'Terms of Service — Cformly',
      'meta.termsDesc': 'Cformly terms of service — acceptance, host obligations, data accuracy, limitation of liability, governing law.'
    },

    hi: {
      /* nav / global */
      'nav.how': 'यह कैसे काम करता है',
      'nav.privacy': 'गोपनीयता',
      'nav.faq': 'सामान्य प्रश्न',
      'nav.cta': 'आसान तरीके से भरना शुरू करें',
      'nav.ariaPrimary': 'मुख्य',
      'brand.aria': 'Cformly होम',
      'lang.toggleAria': 'भाषा बदलें',
      'legal.updated': 'अंतिम अद्यतन: जुलाई 2025',
      'back.toHome': 'Cformly पर वापस जाएं',
      'footer.product': 'उत्पाद',
      'footer.legal': 'कानूनी',
      'footer.contact': 'संपर्क',
      'footer.privacy': 'गोपनीयता नीति',
      'footer.terms': 'सेवा की शर्तें',
      'footer.blurb': 'भारत के होटल फ्रंट डेस्क के लिए 24 घंटे का रजिस्टर। स्कैन करें, समीक्षा करें, भेजें — डिवाइस पर ही, पूरी तरह निजी।',
      'footer.copyright': '© 2025 Cformly. सर्वाधिकार सुरक्षित।',
      'footer.notAffiliated': 'FRRO या भारत सरकार से कोई संबद्धता नहीं।',

      /* index — hero */
            /* index — hero (conversion) hi */
      'hero.eyebrow': 'FRRO फ़ॉर्म C · आपके फ़ोन से भरें',
      'hero.title': '<em>FRRO फ़ॉर्म C</em> भरने का सबसे तेज़ तरीका।',
      'hero.lede': 'हर विदेशी अतिथि का पंजीकरण 24 घंटे के भीतर FRRO में कराना अनिवार्य है। Cformly पासपोर्ट स्कैन करता है, हर फ़ील्ड की जाँच करता है, और पोर्टल का फ़ॉर्म आपके लिए भर देता है — इससे पूरी फ़ाइलिंग कुछ मिनटों में हो जाती है, पूरी पाली में नहीं। आप बस पुष्टि करें, एक बार की CAPTCHA हल करें, और फ़ोटो लगाएँ।',
      'hero.ctaPrimary': 'आसान तरीके से भरना शुरू करें',
      'hero.secondaryCta': 'पोर्टल पर ही क्यों नहीं?',
      'hero.fact1Value': '< 10',
      'hero.fact1Label': 'मिनट प्रति अतिथि',
      'hero.fact2Value': '0',
      'hero.fact2Label': 'मैन्युअल पासपोर्ट टाइपिंग',
      'hero.fact3Value': 'EN + हिन्दी',
      'hero.fact3Label': 'हर स्क्रीन, दोनों तरह',
      'hero.ruleText': 'हर अतिथि के लिए Cformly जो गिनता है, वह 24 घंटे की विंडो',

      /* index — hero compare (before/after) hi */
      'compare.portalTag': 'कठिन तरीका',
      'compare.portal1': 'हर पासपोर्ट व वीज़ा फ़ील्ड हाथ से टाइप करें',
      'compare.portal2': 'फ़ील्ड ढूँढने के लिए पोर्टल के टैब में भटकें',
      'compare.portal3': 'टाइपिंग की गलती पर FRRO जुर्माना लगाए',
      'compare.portal4': 'रात की पाली में 24 घंटे की समय सीमा से लड़ें',
      'compare.appTag': 'Cformly का तरीका',
      'compare.app1': 'पासपोर्ट स्कैन करें — फ़ील्ड अपने आप भर जाते हैं',
      'compare.app2': 'सभी फ़ील्ड एक ही स्क्रीन पर जाँचें',
      'compare.app3': 'एक्सटेंशन आपके लिए पोर्टल फ़ॉर्म भर देता है',
      'compare.app4': '24 घंटे की उलटी गिनती देखें, कभी न चूकें',

      /* index — why not the portal hi */
      'why.eyebrow': 'सीधा सवाल',
      'why.title': 'पोर्टल पर ही फ़ॉर्म C क्यों नहीं भरते?',
      'why.lede': 'कानूनी रूप से भर सकते हैं। पर पोर्टल धीमा, पेचीदा और बेरहम है — और व्यस्त रात में की गई गलतियों को दंडित करता है। Cformly आपके कंधे से यह बोझ उतार देता है।',
      'why.item1Title': 'पासपोर्ट नंबर टाइप करना बंद',
      'why.item1Body': 'एक पासपोर्ट में 40+ वर्णों का मशीन-पठनीय डेटा होता है। Cformly इसे सीधे कैमरे से पढ़ लेता है — हर नाम, नंबर और तिथि बिना एक भी कीस्ट्रोक के भर जाती है, और FRRO की जाँच में फँसाने वाली टाइपिंग की गलती भी नहीं।',
      'why.item2Title': 'सभी फ़ील्ड एक ही स्क्रीन पर',
      'why.item2Body': 'पोर्टल फ़ॉर्म को कई टैब और पृष्ठों में बाँटता है। Cformly पूरा रिकॉर्ड कॉन्फिडेंस फ़्लैग के साथ एक ही समीक्षा स्क्रीन पर रखता है, ताकि कुछ भी छूटे नहीं और कुछ भी अनुमान से न भरा जाए।',
      'why.item3Title': 'पोर्टल फ़ॉर्म अपने आप भरता है',
      'why.item3Body': 'एक्सटेंशन नहीं? फ़ील्ड एक बार कॉपी करें। मुफ़्त ब्राउज़र एक्सटेंशन के साथ, Cformly हैंडऑफ़ कोड से FRRO पोर्टल फ़ॉर्म अपने आप भर देता है। नियंत्रण आपके पास रहता है — CAPTCHA हल करना और फ़ोटो लगाना आप ही करते हैं, जैसा आवश्यक है।',
      'why.item4Title': '24 घंटे की समय सीमा कभी नहीं छूटती',
      'why.item4Body': 'Cformly अतिथि के कैप्चर होते ही उलटी गिनती शुरू कर देता है। जो पहले आपके दिमाग़ में रहता था, वह अब स्क्रीन पर है — ताकि रात की पाली कभी देर से फ़ाइल न करे, कभी जुर्माना न भरे।',

      /* index — how it works hi */
      'how.eyebrow': 'आपकी पाली, सरल',
      'how.title': 'तीन कदमों में अतिथि का चेक-इन।',
      'how.lede': 'ना टाइपिंग, ना पोर्टल के टैब में ढूँढना। काउंटर से लेकर दाखिल फ़ॉर्म तक — हर अतिथि के लिए हर बार वही तीन कदम।',
      'how.step1Title': 'स्कैन',
      'how.step1Body': 'कैमरा पासपोर्ट और वीज़ा पर रखें। OCR फ़ील्ड तुरंत पढ़ लेता है — ना टाइपिंग, ना गलती।',
      'how.step2Title': 'जाँच',
      'how.step2Body': 'सभी फ़ील्ड एक स्क्रीन पर, और OCR ने जो चिह्नित किया उस पर कॉन्फिडेंस फ़्लैग। ठीक करें, आगमन और ठहराव का विवरण जोड़ें, अतिथि फ़ोटो लें।',
      'how.step3Title': 'दाखिल',
      'how.step3Body': 'ब्राउज़र में पोर्टल खोलें, हैंडऑफ़ कोड डालें, और एक्सटेंशन फ़ॉर्म भर देता है। CAPTCHA हल करें, फ़ोटो लगाएँ — कुछ मिनटों में पूरा।',

      /* index — privacy band */
      'privacy.title': 'अतिथि का डेटा होटल में ही रहता है।',
      'privacy.lede': 'पासपोर्ट और वीज़ा व्यक्तिगत डेटा हैं। Cformly इन्हें फ़ोन पर ही पढ़ता है — ताकि डेटा को फ्रंट डेस्क से बाहर जाने की ज़रूरत ही न पड़े, और कभी किसी सर्वर तक न पहुँचे।',
      'privacy.item1Title': 'ऑन-डिवाइस ओपन-सोर्स OCR',
      'privacy.item1Body': 'पासपोर्ट और वीज़ा फ़ोन पर ही ओपन-सोर्स सॉफ़्टवेयर से पढ़े जाते हैं — कोई थर्ड-पार्टी AI सेवा नहीं, और कोई दस्तावेज़ फ़ोटो कभी किसी सर्वर पर अपलोड नहीं होती।',
      'privacy.item2Title': 'फ़ोन पर एन्क्रिप्टेड',
      'privacy.item2Body': 'डिवाइस पर SQLCipher, कुंजी हार्डवेयर कीस्टोर में। बायोमेट्रिक या PIN लॉक, स्क्रीन गोपनीयता और क्लिपबोर्ड स्वच्छता अंतर्निहित हैं।',
      'privacy.item3Title': 'मानव ही निर्णायक',
      'privacy.item3Body': 'CAPTCHA और फ़ोटो संलग्न करना होस्ट के पास ही रहता है। Cformly फ़ॉर्म भरता है; दाखिल करना होस्ट करता है।',
      'privacy.item4Title': 'आपका डेटा, आपका अधिकार',
      'privacy.item4Body': 'कभी भी सेटिंग्स से सब कुछ निर्यात या हटाएं — DPDP अधिनियम 2023 के तहत आपके अधिकार।',

      /* index — languages */
      'lang.eyebrow': 'भाषाएं',
      'lang.title': 'अंग्रेज़ी और हिंदी, साथ-साथ।',
      'lang.lede': 'भारत के फ्रंट डेस्क दोनों बोलते हैं। Cformly भी — हर स्क्रीन पर।',
      'lang.enTitle': 'English',
      'lang.hiTitle': 'हिन्दी',
      'lang.sampleScan': 'पासपोर्ट स्कैन करें',
      'lang.sampleReview': 'विवरण की समीक्षा करें',
      'lang.sampleSend': 'पोर्टल पर भेजें',
      'lang.note': 'कभी भी भाषा बदलें — हर स्क्रीन, दोनों तरह।',

      /* index — faq */
      'faq.eyebrow': 'सामान्य प्रश्न',
      'faq.title': 'सवाल, सीधे जवाब।',
      'faq.q0': 'अगर मैं FRRO वेबसाइट पर ही फ़ॉर्म भर सकता हूँ तो ऐप की क्या ज़रूरत?',
      'faq.a0': 'भर सकते हैं — और FRRO को दोनों स्वीकार करने होते हैं। पर पोर्टल धीमा और बेरहम है: दर्जनों फ़ील्ड टाइप करने होते हैं, कई टैब में फैले, कठोर 24 घंटे की सीमा के तहत। Cformly इसलिए है क्योंकि मैन्युअल तरीका समय बर्बाद करता है और गलतियाँ बुलाता है। ऐप पासपोर्ट स्कैन करता है ताकि आपको टाइप ही न करना पड़े, हर फ़ील्ड एक स्क्रीन पर दिखाता है, और पोर्टल फ़ॉर्म आपके लिए भरता है। CAPTCHA हल करने और फ़ोटो लगाने जैसी आपकी कानूनी ज़िम्मेदारियाँ आपके पास ही रहती हैं।',
      'faq.q1': 'क्या Cformly कोई सरकारी ऐप है?',
      'faq.a1': 'नहीं। Cformly एक स्वतंत्र दाखिल करने में सहायक उपकरण है। सटीक और समय पर दाखिल करने की कानूनी ज़िम्मेदारी होस्ट की ही रहती है, और Cformly की FRRO या भारत सरकार से कोई संबद्धता या मान्यता नहीं है।',
      'faq.q2': 'पोर्टल पर CAPTCHA कौन हल करता है?',
      'faq.a2': 'हमेशा होस्ट। एक्सटेंशन फ़ॉर्म के फ़ील्ड भरता है; इंसान CAPTCHA हल करता है और जमा करने से पहले फ़ोटो लगाता है।',
      'faq.q3': 'अतिथि का डेटा कहाँ रहता है?',
      'faq.a3': 'पासपोर्ट और वीज़ा फ़ोन पर ही ओपन-सोर्स OCR से पढ़े जाते हैं — कोई थर्ड-पार्टी AI सेवा नहीं, और कोई दस्तावेज़ फ़ोटो अपलोड नहीं होती। अतिथि डेटा डिवाइस पर एन्क्रिप्टेड रखा जाता है और सेटिंग्स से कभी भी निर्यात या हटाया जा सकता है।',
      'faq.q4': 'क्या यह ऑफ़लाइन काम करता है?',
      'faq.a4': 'स्कैन करना, फ़ील्ड निकालना, रिकॉर्ड की समीक्षा और पोर्टल भरना — सब कुछ पूरी तरह डिवाइस पर चलता है; पासपोर्ट पढ़ने या फ़ॉर्म भरने के लिए कनेक्शन ज़रूरी नहीं। FRRO पोर्टल पर दाखिल करने के लिए ब्राउज़र चाहिए (एक्सटेंशन के साथ या बिना)।',
      'faq.q5': '24 घंटे का नियम क्या है?',
      'faq.a5': 'विदेशी अतिथियों का पंजीकरण चेक-इन के 24 घंटे के भीतर FRRO में कराना अनिवार्य है। अतिथि स्कैन होते ही Cformly उलटी गिनती दिखाता है, ताकि रात की पाली में भी समय सीमा हाथ से न निकले।',
      'faq.q6': 'यह कौन-सी भाषाओं का समर्थन करता है?',
      'faq.a6': 'अंग्रेज़ी और हिंदी, सेटिंग्स से बदली जा सकती हैं।',

      /* index — cta / disclaimer */
      'cta.title': 'पासपोर्ट दोबारा टाइप करना बंद करें। तेज़ी से भरना शुरू करें।',
      'cta.lede': 'अभी परीक्षकों के लिए तैयार है, App Store और Google Play पर जल्द। हमें बताएँ कि पहला बिल्ड कहाँ भेजें — हम आपको सेट कर देंगे।',
      'cta.primary': 'आसान तरीके से भरना शुरू करें',
      'cta.appStore': 'App Store',
      'cta.googlePlay': 'Google Play',
      'cta.comingSoon': 'जल्द आ रहा है',
      'disclaimers.main': 'Cformly एक दाखिल करने में सहायक उपकरण है। आप्रवासन और विदेशी अधिनियम, 2025 के तहत सटीक और समय पर फ़ॉर्म III दाखिल करने की कानूनी ज़िम्मेदारी होस्ट की ही रहती है। Cformly की FRRO या भारत सरकार से कोई संबद्धता या मान्यता नहीं है।',

      /* index — meta */
      'meta.indexTitle': 'Cformly — मिनटों में FRRO फ़ॉर्म C भरें',
      'meta.indexDesc': 'मिनटों में FRRO फ़ॉर्म C भरें, पूरी पाली में नहीं। Cformly पासपोर्ट स्कैन करता है, हर फ़ील्ड एक स्क्रीन पर दिखाता है, और FRRO पोर्टल फ़ॉर्म अपने आप भरता है। ऐप डाउनलोड करें — ना टाइपिंग, ना गलती, 24 घंटे की सीमा पूरी।',
      'meta.indexOgTitle': 'Cformly — मिनटों में FRRO फ़ॉर्म C भरें',
      'meta.indexOgDesc': 'मिनटों में FRRO फ़ॉर्म C भरें। Cformly पासपोर्ट स्कैन करता है, हर फ़ील्ड की जाँच करता है, और पोर्टल फ़ॉर्म आपके लिए भरता है — ना टाइपिंग, ना गलती, समय सीमा पूरी।',

      /* privacy page */
      'privacy.title': 'गोपनीयता सूचना और सहमति',
      'privacy.lede': 'DPDP अधिनियम 2023 के अनुरूप। यह सूचना बताती है कि Cformly क्या एकत्र करता है, वह कहाँ रखा जाता है, और उस पर आपके क्या अधिकार हैं।',
      'privacy.collect': 'हम क्या एकत्र करते हैं',
      'privacy.collectIntro': 'Cformly आपके अतिथियों की ओर से फ़ॉर्म C / फ़ॉर्म III (विदेशी पंजीकरण) दाखिल करने के लिए आवश्यक न्यूनतम डेटा एकत्र करता है:',
      'privacy.collect1': '<strong>अतिथि पासपोर्ट डेटा:</strong> पूरा नाम, उपनाम, दिए गए नाम, लिंग, जन्म तिथि, राष्ट्रीयता, पासपोर्ट नंबर, जारी करने का स्थान/तिथि, समाप्ति। पासपोर्ट की MRZ पंक्ति से डिवाइस पर ही ओपन-सोर्स OCR द्वारा पढ़ा जाता है — <strong>किसी भी सर्वर पर कभी अपलोड नहीं होता</strong>।',
      'privacy.collect2': '<strong>अतिथि वीज़ा डेटा:</strong> वीज़ा नंबर, प्रकार, जारी करने का स्थान/तिथि, समाप्ति। उसी डिवाइस-आधारित OCR से पढ़ा जाता है — <strong>कभी अपलोड नहीं होता</strong>।',
      'privacy.collect3': '<strong>अतिथि फ़ोटो:</strong> कैप्चर कर पोर्टल की सीमा तक छोटी की जाती है, डिवाइस पर एन्क्रिप्टेड रखी जाती है।',
      'privacy.collect4': '<strong>होस्ट/प्रॉपर्टी प्रोफ़ाइल:</strong> प्रतिष्ठान का नाम, पता, FRRO कार्यालय का क्षेत्राधिकार, संपर्क विवरण। एक बार दर्ज करें, हर दाखिले में फिर उपयोग होता है।',
      'privacy.whereStored': 'डेटा कहाँ रखा जाता है',
      'privacy.where1': '<strong>डिवाइस पर एन्क्रिप्टेड SQLite डेटाबेस</strong> (कुंजी iOS Keychain / Android Keystore में, जहाँ उपलब्ध हो हार्डवेयर-समर्थित)। कभी सादे पाठ में नहीं, कभी क्लाउड बैकअप में नहीं।',
      'privacy.where2': '<strong>बैकएंड (भारत क्षेत्र):</strong> केवल होस्ट खाते और प्रमाणीकरण टोकन। <strong>कोई दस्तावेज़ डेटा कभी नहीं</strong> — कोई पासपोर्ट/वीज़ा छवि या निकाला गया फ़ील्ड सर्वर तक नहीं पहुँचता।',
      'privacy.howUsed': 'हम इसका उपयोग कैसे करते हैं',
      'privacy.use1': 'समीक्षा और दाखिल करने के लिए फ़ॉर्म C / फ़ॉर्म III के फ़ील्ड पहले से भरने हेतु।',
      'privacy.use2': 'भरे गए फ़ील्ड को पोर्टल में मैन्युअल रूप से चिपकाने के लिए क्लिपबोर्ड या PDF पर कॉपी करना।',
      'privacy.use3': 'मुफ़्त ब्राउज़र एक्सटेंशन के माध्यम से FRRO पोर्टल फ़ॉर्म अपने आप भरना (होस्ट ब्राउज़र में ही रहता है; कोई सर्वर रिले नहीं)।',
      'privacy.rights': 'आपके अधिकार (DPDP अधिनियम 2023)',
      'privacy.right1': '<strong>पहुंच:</strong> अपना सारा डेटा मशीन-पठनीय JSON में निर्यात करें (Settings &gt; Data &amp; Privacy &gt; Export Data)।',
      'privacy.right2': '<strong>सुधार:</strong> दाखिल करने से पहले समीक्षा स्क्रीन पर कोई भी अतिथि फ़ील्ड संपादित करें।',
      'privacy.right3': '<strong>मिटाना:</strong> Settings &gt; Delete Account सभी स्थानीय व्यक्तिगत डेटा और कुंजियाँ हटाकर सर्वर-पक्षीय विलोपन शुरू करता है। पूरा होने पर आपको पुष्टि मिलती है।',
      'privacy.right4': '<strong>शिकायत:</strong> किसी भी गोपनीयता संबंधी चिंता या डेटा अनुरोध के लिए <a href="mailto:dpo@cformly.com">dpo@cformly.com</a> से संपर्क करें।',
      'privacy.retention': 'डेटा प्रतिधारण',
      'privacy.retention1': 'दस्तावेज़ फ़ोटो और निकाले गए फ़ील्ड कभी डिवाइस से बाहर नहीं जाते — जब तक आप हटाते नहीं, तब तक वे डिवाइस पर ही एन्क्रिप्टेड रहते हैं।',
      'privacy.retention2': 'एन्क्रिप्टेड स्थानीय भंडार तब तक बना रहता है जब तक आप खाता नहीं हटाते या ऐप अनइंस्टॉल नहीं करते।',
      'privacy.crossBorder': 'सीमा-पार प्रसंस्करण',
      'privacy.crossBorderBody': 'सारा दस्तावेज़ कैप्चर और OCR पूरी तरह फ़ोन पर चलता है। कोई पासपोर्ट, वीज़ा या फ़ील्ड डेटा कभी डिवाइस से बाहर नहीं जाता या सीमा पार नहीं करता। केवल होस्ट खाते और प्रमाणीकरण टोकन (गैर-PII) भारत क्षेत्र में रखे जाते हैं।',
      'privacy.consent': 'सहमति',
      'privacy.consentBody': 'Cformly का उपयोग करके आप इस डेटा प्रसंस्करण के लिए सहमति देते हैं। आप किसी भी समय अपना खाता हटाकर सहमति वापस ले सकते हैं। सहमति वापस लेने से FRRO में पहले ही जमा किए गए दाखिलों पर कोई प्रभाव नहीं पड़ता (वे FRRO की अपनी नीतियों द्वारा नियंत्रित होते हैं)।',
      'privacy.contactH': 'संपर्क',
      'privacy.dpoLabel': 'डेटा संरक्षण अधिकारी:',
      'privacy.securityLabel': 'सुरक्षा:',
      'privacy.supportLabel': 'सहायता:',
      'meta.privacyTitle': 'गोपनीयता नीति — Cformly',
      'meta.privacyDesc': 'Cformly गोपनीयता सूचना और सहमति — DPDP अधिनियम 2023 के अनुरूप। हम क्या एकत्र करते हैं, डेटा कहाँ रखा जाता है, आपके अधिकार।',

      /* terms page */
      'terms.title': 'सेवा की शर्तें',
      'terms.lede': 'ऐप, एक्सटेंशन और इस वेबसाइट के उपयोग के लिए आपके और Cformly के बीच का समझौता।',
      'terms.acceptance': '1. शर्तों की स्वीकृति',
      'terms.acceptanceBody': 'Cformly मोबाइल ऐप्लिकेशन ("ऐप") को डाउनलोड, इंस्टॉल या उपयोग करके आप इन सेवा शर्तों ("शर्तें") से बंधने के लिए सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो ऐप का उपयोग न करें।',
      'terms.description': '2. सेवा का विवरण',
      'terms.descriptionBody': 'Cformly एक दाखिल करने में सहायक उपकरण है जो होटलों, गेस्ट हाउसों और व्यक्तिगत होस्टों ("होस्ट") को आप्रवासन और विदेशी अधिनियम, 2025 और संबंधित विनियमों के अनुसार FRRO फ़ॉर्म C (विदेशी पंजीकरण / फ़ॉर्म III) तैयार करने और दाखिल करने में मदद करता है।',
      'terms.disclaimer': '3. महत्वपूर्ण अस्वीकरण',
      'terms.disclaimerBold': '<strong>Cformly की FRRO (Foreigners Regional Registration Office), आप्रवासन ब्यूरो या भारत सरकार से कोई संबद्धता, मान्यता या संपर्क नहीं है।</strong>',
      'terms.disclaimerBody': 'Cformly एक स्वतंत्र दाखिल करने में सहायक उपकरण है। दाखिल की गई सभी जानकारी की सटीकता, निर्धारित समय सीमा के भीतर समय पर जमा करना और सभी लागू कानूनों का अनुपालन करने की पूरी कानूनी ज़िम्मेदारी होस्ट की ही है।',
      'terms.obligations': '4. होस्ट के दायित्व',
      'terms.obligation1': 'सटीक प्रॉपर्टी पंजीकरण विवरण दें',
      'terms.obligation2': 'जमा करने से पहले सभी निकाले गए डेटा की पुष्टि करें (OCR में त्रुटियाँ हो सकती हैं)',
      'terms.obligation3': 'सुनिश्चित करें कि अतिथि ने अपने डेटा एकत्र करने की सहमति दी है',
      'terms.obligation4': 'कानूनी रूप से निर्धारित समय सीमा के भीतर फ़ॉर्म C दाखिल करें',
      'terms.obligation5': 'झूठी, धोखाधड़ी वाली या भ्रामक जानकारी दाखिल करने के लिए ऐप का उपयोग न करें',
      'terms.privacy': '5. गोपनीयता और डेटा प्रबंधन',
      'terms.privacyBody': 'ऐप के आपके उपयोग पर हमारी <a href="privacy.html">गोपनीयता नीति</a> भी लागू होती है। सारा अतिथि डेटा SQLCipher (AES-256) से डिवाइस पर एन्क्रिप्टेड रखा जाता है; दस्तावेज़ कैप्चर और OCR पूरी तरह डिवाइस पर चलता है। बैकएंड में केवल होस्ट खाते (गैर-PII) भारत में रखे जाते हैं। कोई थर्ड-पार्टी AI सेवा उपयोग नहीं होती।',
      'terms.accuracy': '6. डेटा सटीकता',
      'terms.accuracyBody': 'ऐप पासपोर्ट और वीज़ा से डेटा निकालने के लिए OCR का उपयोग करता है। OCR 100% सटीक नहीं है। होस्ट को जमा करने से पहले सभी निकाले गए डेटा की समीक्षा करनी चाहिए।',
      'terms.liability': '7. दायित्व की सीमा',
      'terms.liabilityBody': 'कानून द्वारा अनुमत अधिकतम सीमा तक, Cformly किसी भी प्रकार की वारंटी के बिना "जैसा है" (AS IS) प्रदान किया जाता है। विलंबित, गलत या अधूरे फ़ॉर्म C दाखिलों से उत्पन्न जुर्माने, दंड या कानूनी परिणामों के लिए हम उत्तरदायी नहीं हैं।',
      'terms.contactH': '8. संपर्क',
      'terms.grievanceLabel': 'गोपनीयता/शिकायत:',
      'terms.governing': '9. लागू कानून',
      'terms.governingBody': 'ये शर्तें भारत के कानूनों द्वारा नियंत्रित हैं। किसी भी विवाद पर मुंबई, महाराष्ट्र, भारत की अदालतों का अनन्य क्षेत्राधिकार होगा।',
      'meta.termsTitle': 'सेवा की शर्तें — Cformly',
      'meta.termsDesc': 'Cformly सेवा की शर्तें — स्वीकृति, होस्ट के दायित्व, डेटा सटीकता, दायित्व की सीमा, लागू कानून।'
    }
  };

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
    } catch (e) { /* storage unavailable — fall through */ }
    if (saved === 'en' || saved === 'hi') return saved;
    return (navigator.language || '').toLowerCase().indexOf('hi') === 0 ? 'hi' : 'en';
  }

  function applyI18n(lang) {
    var dict = translations[lang] || translations.en;

    document.documentElement.setAttribute('lang', lang);

    var title = document.querySelector('title');
    if (title && title.dataset.i18nTitle) {
      title.textContent = lookup(title.dataset.i18nTitle, lang);
    }

    var metas = document.querySelectorAll('meta[data-i18n-meta]');
    for (var m = 0; m < metas.length; m++) {
      metas[m].setAttribute('content', lookup(metas[m].dataset.i18nMeta, lang));
    }

    var texts = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < texts.length; i++) {
      texts[i].textContent = lookup(texts[i].dataset.i18n, lang);
    }

    var htmls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmls.length; j++) {
      htmls[j].innerHTML = lookup(htmls[j].dataset.i18nHtml, lang);
    }

    var arias = document.querySelectorAll('[data-i18n-aria-label]');
    for (var k = 0; k < arias.length; k++) {
      arias[k].setAttribute('aria-label', lookup(arias[k].dataset.i18nAriaLabel, lang));
    }

    var toggles = document.querySelectorAll('[data-i18n-toggle]');
    for (var t = 0; t < toggles.length; t++) {
      toggles[t].textContent = lang === 'en' ? 'हिन्दी' : 'English';
      toggles[t].setAttribute('aria-pressed', lang === 'hi' ? 'true' : 'false');
      toggles[t].removeAttribute('hidden');
    }
  }

  function bindToggles() {
    var toggles = document.querySelectorAll('[data-i18n-toggle]');
    // Session language: when localStorage is unavailable, currentLang() would
    // always return the browser default and the toggle could never switch back.
    var sessionLang = currentLang();
    for (var t = 0; t < toggles.length; t++) {
      toggles[t].addEventListener('click', function () {
        var next = sessionLang === 'en' ? 'hi' : 'en';
        sessionLang = next;
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch (e) { /* non-persistent toggle still works for the session */ }
        applyI18n(next);
      });
    }
  }

  /* ---------- scroll reveals (unchanged behaviour) ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
    revealEls.forEach(function (el) {
      if (el.dataset.delay) {
        el.style.transitionDelay = el.dataset.delay + 'ms';
      }
      io.observe(el);
    });
  }

  /* ---------- FAQ: one open at a time (native <details> still works without JS) ---------- */
  var details = document.querySelectorAll('details.faq-item');
  if (details.length > 1) {
    details.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (d.open) {
          details.forEach(function (other) {
            if (other !== d) other.removeAttribute('open');
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
    var el = document.getElementById('deadline-clock');
    if (!el) return;
    var remaining = 23 * 3600 + 58 * 60 + 42; // ~84s into the window
    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function render() {
      var h = Math.floor(remaining / 3600);
      var m = Math.floor((remaining % 3600) / 60);
      var s = remaining % 60;
      el.innerHTML = pad(h) + '<span class="colon">:</span>' + pad(m) + '<span class="colon">:</span>' + pad(s);
    }
    render();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.setInterval(function () {
      remaining = remaining > 1 ? remaining - 1 : 24 * 3600 - 1;
      render();
    }, 1000);
  })();

  /* ---------- init ---------- */
  applyI18n(currentLang());
  bindToggles();
})();
