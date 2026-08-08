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
      'nav.cta': 'Get early access',
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
      'hero.eyebrow': 'FRRO Form III · Foreign-guest registration',
      'hero.title': 'The front desk\'s <em>24-hour</em> register.',
      'hero.lede': 'Cformly scans the guest\'s passport and visa, lays every field out for review, and fills the FRRO portal form from a handoff code. You solve the CAPTCHA and attach the photo — that stays human by law.',
      'hero.secondaryCta': 'See how it works',
      'hero.fact1Value': '24 h',
      'hero.fact1Label': 'legal filing window',
      'hero.fact2Label': 'third-party AI services',
      'hero.fact3Label': 'languages · EN + हिन्दी',
      'mock.eyebrow': 'Review & confirm',
      'mock.meta': 'Arrival · check-in 4 Mar, 14:00',
      'mock.verified': 'Verified',
      'mock.passport': 'Passport',
      'mock.visa': 'Visa',
      'mock.send': 'Send to portal',
      'mock.deadline': 'Due in 6 h 20 m',

      /* index — how it works */
      'how.title': 'Three moves, one register.',
      'how.lede': 'From the guest at the counter to the filed form on the portal — the same three steps, every time.',
      'how.step1Title': 'Capture',
      'how.step1Body': 'Point the phone camera at the passport and visa. On-device OCR reads the machine-readable zone — no typing, works offline at the desk.',
      'how.step2Title': 'Review',
      'how.step2Body': 'Every field lands on one screen with confidence flags. Fix what OCR flagged, add arrival and stay details, and snap the guest photo at the portal\'s 50 KB limit.',
      'how.step3Title': 'Send',
      'how.step3Body': 'Open the FRRO portal in a browser and enter your handoff code — the Cformly extension fills the form. No extension handy? Copy the fields; the Tier 1 clipboard path works on any machine.',

      /* index — privacy band */
      'privacy.title': 'Guest data stays on the property.',
      'privacy.lede': 'Passports and visas are personal data. Cformly is built so that data never needs to leave the front desk — and when it does, it stays in India.',
      'privacy.item1Title': 'On-device OCR',
      'privacy.item1Body': 'Passports and visas are read on the phone with open-source software. No third-party AI services, no cloud documents.',
      'privacy.item2Title': 'Encrypted at rest',
      'privacy.item2Body': 'SQLCipher on the device, servers in India. Biometric or PIN lock, screen privacy, and clipboard hygiene are built in.',
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
      'faq.q1': 'Is Cformly a government app?',
      'faq.a1': 'No. Cformly is an independent filing assistant. The host remains legally responsible for accurate and timely filing, and Cformly is not affiliated with or endorsed by the FRRO or the Government of India.',
      'faq.q2': 'Who solves the CAPTCHA on the portal?',
      'faq.a2': 'The host, always. The extension fills the form fields; the human solves the CAPTCHA and attaches the photo before submitting.',
      'faq.q3': 'Where does guest data live?',
      'faq.a3': 'Passports and visas are read on the device or on Cformly\'s own servers in India — no third-party AI services. Guest data is stored encrypted and can be exported or deleted from Settings at any time.',
      'faq.q4': 'Does it work offline?',
      'faq.a4': 'Capture and review work fully offline. Filling the portal needs a browser and the extension; the Tier 1 clipboard path covers any other machine.',
      'faq.q5': 'What is the 24-hour rule?',
      'faq.a5': 'Foreign guests must be registered with the FRRO within 24 hours of check-in. Cformly shows a countdown from the moment a guest is captured, so the deadline never sneaks up on the night shift.',
      'faq.q6': 'Which languages does it support?',
      'faq.a6': 'English and Hindi, switchable from settings.',

      /* index — cta / disclaimer */
      'cta.title': 'Almost ready for the front desk.',
      'cta.lede': 'Cformly will be on the App Store and Google Play. Leave your address and we\'ll write when it ships.',
      'cta.appStore': 'App Store',
      'cta.googlePlay': 'Google Play',
      'cta.comingSoon': 'coming soon',
      'disclaimers.main': 'Cformly is a filing assistant. The host remains legally responsible for accurate and timely Form III filing under the Immigration and Foreigners Act 2025. Cformly is not affiliated with or endorsed by the FRRO or the Government of India.',

      /* index — meta */
      'meta.indexTitle': 'Cformly — The front desk\'s 24-hour register',
      'meta.indexDesc': 'Cformly helps hotel front desks register foreign guests with the FRRO within 24 hours. Scan the passport and visa, review the fields, and let the browser extension fill Form III.',
      'meta.indexOgTitle': 'Cformly — The front desk\'s 24-hour register',
      'meta.indexOgDesc': 'Scan the passport, review the details, send to the FRRO portal. The CAPTCHA and the guest photo stay with you.',

      /* privacy page */
      'privacy.title': 'Privacy Notice & Consent',
      'privacy.lede': 'Compliant with the DPDP Act 2023. This notice explains what Cformly collects, where it is stored, and the rights you hold over it.',
      'privacy.collect': 'What We Collect',
      'privacy.collectIntro': 'Cformly collects the minimum data needed to file Form C / Form III (foreigner registration) on behalf of your guests:',
      'privacy.collect1': '<strong>Guest passport data:</strong> full name, surname, given names, sex, date of birth, nationality, passport number, place/date of issue, expiry. Captured via camera OCR from the passport\'s MRZ line, processed <strong>on-device</strong>.',
      'privacy.collect2': '<strong>Guest visa data:</strong> visa number, type, place/date of issue, expiry. Captured via camera; the image is sent to our backend <strong>only</strong> for OCR extraction and deleted after the request completes (never stored beyond the request lifecycle).',
      'privacy.collect3': '<strong>Guest photo:</strong> captured and resized to portal limits, stored encrypted on-device.',
      'privacy.collect4': '<strong>Host/property profile:</strong> establishment name, address, FRRO office jurisdiction, contact details. Entered once, reused across filings.',
      'privacy.whereStored': 'Where Data Is Stored',
      'privacy.where1': '<strong>On-device encrypted SQLite database</strong> (key in iOS Keychain / Android Keystore, hardware-backed where available). Never in plaintext, never in cloud backups.',
      'privacy.where2': '<strong>Backend (India region):</strong> host accounts, auth tokens. No raw passport/visa images are stored server-side beyond the request lifecycle.',
      'privacy.howUsed': 'How We Use It',
      'privacy.use1': 'To pre-fill Form C / Form III fields for review and filing.',
      'privacy.use2': 'To generate a filled PDF for manual submission (Tier 1 fallback).',
      'privacy.use3': 'To auto-fill the FRRO portal via the browser extension (Tier 2).',
      'privacy.rights': 'Your Rights (DPDP Act 2023)',
      'privacy.right1': '<strong>Access:</strong> export all your data in machine-readable JSON (Settings &gt; Data &amp; Privacy &gt; Export Data).',
      'privacy.right2': '<strong>Correction:</strong> edit any guest field on the Review screen before filing.',
      'privacy.right3': '<strong>Erasure:</strong> Settings &gt; Delete Account removes all local PII, keys, and triggers server-side deletion. You receive a confirmation when complete.',
      'privacy.right4': '<strong>Grievance:</strong> contact <a href="mailto:dpo@cformly.com">dpo@cformly.com</a> for any privacy concern or data request.',
      'privacy.retention': 'Data Retention',
      'privacy.retention1': 'Document images are auto-purged after successful filing (host-configurable to retain proof). Default: images deleted, structured record retained for history.',
      'privacy.retention2': 'The encrypted local store persists until you delete the account or uninstall.',
      'privacy.crossBorder': 'Cross-Border Processing',
      'privacy.crossBorderBody': 'The OCR backend runs in an India region (ap-south-1 / asia-south1). No third-party AI services are used — all OCR runs on self-hosted open-source infrastructure (Tesseract / PaddleOCR). No data leaves India.',
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
      'terms.privacyBody': 'Your use of the App is also governed by our <a href="privacy.html">Privacy Policy</a>. All guest data is encrypted at rest using SQLCipher (AES-256). Data is stored on servers in India. No third-party AI services are used.',
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
      'nav.cta': 'जल्दी पहुंच पाएं',
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
      'hero.eyebrow': 'FRRO फ़ॉर्म III · विदेशी अतिथि पंजीकरण',
      'hero.title': 'फ्रंट डेस्क का <em>24 घंटे</em> का रजिस्टर।',
      'hero.lede': 'Cformly अतिथि के पासपोर्ट और वीज़ा को स्कैन करता है, हर फ़ील्ड को समीक्षा के लिए रखता है, और हैंडऑफ़ कोड से FRRO पोर्टल फ़ॉर्म भर देता है। CAPTCHA हल करना और फ़ोटो लगाना आपके पास ही रहता है — यह कानूनी रूप से मानवीय रहता है।',
      'hero.secondaryCta': 'यह कैसे काम करता है देखें',
      'hero.fact1Value': '24 घंटे',
      'hero.fact1Label': 'कानूनी दाखिल करने की अवधि',
      'hero.fact2Label': 'थर्ड-पार्टी AI सेवाएं',
      'hero.fact3Label': 'भाषाएं · EN + हिन्दी',
      'mock.eyebrow': 'समीक्षा करें और पुष्टि करें',
      'mock.meta': 'आगमन · चेक-इन 4 मार्च, 14:00',
      'mock.verified': 'सत्यापित',
      'mock.passport': 'पासपोर्ट',
      'mock.visa': 'वीज़ा',
      'mock.send': 'पोर्टल पर भेजें',
      'mock.deadline': '6 घंटे 20 मिनट शेष',

      /* index — how it works */
      'how.title': 'तीन कदम, एक रजिस्टर।',
      'how.lede': 'काउंटर पर खड़े अतिथि से लेकर पोर्टल पर दाखिल फ़ॉर्म तक — हर बार वही तीन कदम।',
      'how.step1Title': 'स्कैन करें',
      'how.step1Body': 'फ़ोन का कैमरा पासपोर्ट और वीज़ा पर रखें। ऑन-डिवाइस OCR मशीन-रीडेबल ज़ोन पढ़ता है — टाइपिंग की ज़रूरत नहीं, डेस्क पर ऑफ़लाइन भी काम करता है।',
      'how.step2Title': 'समीक्षा करें',
      'how.step2Body': 'हर फ़ील्ड एक ही स्क्रीन पर कॉन्फिडेंस फ़्लैग के साथ आता है। OCR ने जो चिह्नित किया है उसे ठीक करें, आगमन और ठहराव का विवरण जोड़ें, और पोर्टल की 50 KB सीमा के अनुसार अतिथि की फ़ोटो लें।',
      'how.step3Title': 'भेजें',
      'how.step3Body': 'ब्राउज़र में FRRO पोर्टल खोलें और अपना हैंडऑफ़ कोड दर्ज करें — Cformly एक्सटेंशन फ़ॉर्म भर देता है। एक्सटेंशन नहीं है? फ़ील्ड कॉपी करें; टियर 1 क्लिपबोर्ड तरीका किसी भी मशीन पर चलता है।',

      /* index — privacy band */
      'privacy.title': 'अतिथि का डेटा होटल में ही रहता है।',
      'privacy.lede': 'पासपोर्ट और वीज़ा व्यक्तिगत डेटा हैं। Cformly इस तरह बनाया गया है कि डेटा को फ्रंट डेस्क से बाहर जाने की ज़रूरत ही न पड़े — और यदि जाए भी, तो भारत में ही रहे।',
      'privacy.item1Title': 'ऑन-डिवाइस OCR',
      'privacy.item1Body': 'पासपोर्ट और वीज़ा फ़ोन पर ही ओपन-सोर्स सॉफ़्टवेयर से पढ़े जाते हैं। कोई थर्ड-पार्टी AI सेवा नहीं, कोई क्लाउड दस्तावेज़ नहीं।',
      'privacy.item2Title': 'एन्क्रिप्टेड रखा गया',
      'privacy.item2Body': 'डिवाइस पर SQLCipher, सर्वर भारत में। बायोमेट्रिक या PIN लॉक, स्क्रीन गोपनीयता और क्लिपबोर्ड स्वच्छता अंतर्निहित हैं।',
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
      'faq.q1': 'क्या Cformly कोई सरकारी ऐप है?',
      'faq.a1': 'नहीं। Cformly एक स्वतंत्र दाखिल करने में सहायक उपकरण है। सटीक और समय पर दाखिल करने की कानूनी ज़िम्मेदारी होस्ट की ही रहती है, और Cformly की FRRO या भारत सरकार से कोई संबद्धता या मान्यता नहीं है।',
      'faq.q2': 'पोर्टल पर CAPTCHA कौन हल करता है?',
      'faq.a2': 'हमेशा होस्ट। एक्सटेंशन फ़ॉर्म के फ़ील्ड भरता है; इंसान CAPTCHA हल करता है और जमा करने से पहले फ़ोटो लगाता है।',
      'faq.q3': 'अतिथि का डेटा कहाँ रहता है?',
      'faq.a3': 'पासपोर्ट और वीज़ा डिवाइस पर या भारत में Cformly के अपने सर्वर पर पढ़े जाते हैं — कोई थर्ड-पार्टी AI सेवा नहीं। अतिथि डेटा एन्क्रिप्टेड रखा जाता है और सेटिंग्स से कभी भी निर्यात या हटाया जा सकता है।',
      'faq.q4': 'क्या यह ऑफ़लाइन काम करता है?',
      'faq.a4': 'स्कैन और समीक्षा पूरी तरह ऑफ़लाइन काम करती है। पोर्टल भरने के लिए ब्राउज़र और एक्सटेंशन चाहिए; टियर 1 क्लिपबोर्ड तरीका किसी भी अन्य मशीन पर काम करता है।',
      'faq.q5': '24 घंटे का नियम क्या है?',
      'faq.a5': 'विदेशी अतिथियों का पंजीकरण चेक-इन के 24 घंटे के भीतर FRRO में कराना अनिवार्य है। अतिथि स्कैन होते ही Cformly उलटी गिनती दिखाता है, ताकि रात की पाली में भी समय सीमा हाथ से न निकले।',
      'faq.q6': 'यह कौन-सी भाषाओं का समर्थन करता है?',
      'faq.a6': 'अंग्रेज़ी और हिंदी, सेटिंग्स से बदली जा सकती हैं।',

      /* index — cta / disclaimer */
      'cta.title': 'फ्रंट डेस्क के लिए लगभग तैयार।',
      'cta.lede': 'Cformly जल्द ही App Store और Google Play पर उपलब्ध होगा। अपना पता छोड़ें, लॉन्च होने पर हम लिखेंगे।',
      'cta.appStore': 'App Store',
      'cta.googlePlay': 'Google Play',
      'cta.comingSoon': 'जल्द आ रहा है',
      'disclaimers.main': 'Cformly एक दाखिल करने में सहायक उपकरण है। आप्रवासन और विदेशी अधिनियम, 2025 के तहत सटीक और समय पर फ़ॉर्म III दाखिल करने की कानूनी ज़िम्मेदारी होस्ट की ही रहती है। Cformly की FRRO या भारत सरकार से कोई संबद्धता या मान्यता नहीं है।',

      /* index — meta */
      'meta.indexTitle': 'Cformly — फ्रंट डेस्क का 24 घंटे का रजिस्टर',
      'meta.indexDesc': 'Cformly होटल फ्रंट डेस्क को 24 घंटे के भीतर FRRO में विदेशी अतिथियों का पंजीकरण कराने में मदद करता है। पासपोर्ट और वीज़ा स्कैन करें, फ़ील्ड की समीक्षा करें, और ब्राउज़र एक्सटेंशन से फ़ॉर्म III भरवाएं।',
      'meta.indexOgTitle': 'Cformly — फ्रंट डेस्क का 24 घंटे का रजिस्टर',
      'meta.indexOgDesc': 'पासपोर्ट स्कैन करें, विवरण की समीक्षा करें, FRRO पोर्टल पर भेजें। CAPTCHA और अतिथि फ़ोटो आपके पास ही रहते हैं।',

      /* privacy page */
      'privacy.title': 'गोपनीयता सूचना और सहमति',
      'privacy.lede': 'DPDP अधिनियम 2023 के अनुरूप। यह सूचना बताती है कि Cformly क्या एकत्र करता है, वह कहाँ रखा जाता है, और उस पर आपके क्या अधिकार हैं।',
      'privacy.collect': 'हम क्या एकत्र करते हैं',
      'privacy.collectIntro': 'Cformly आपके अतिथियों की ओर से फ़ॉर्म C / फ़ॉर्म III (विदेशी पंजीकरण) दाखिल करने के लिए आवश्यक न्यूनतम डेटा एकत्र करता है:',
      'privacy.collect1': '<strong>अतिथि पासपोर्ट डेटा:</strong> पूरा नाम, उपनाम, दिए गए नाम, लिंग, जन्म तिथि, राष्ट्रीयता, पासपोर्ट नंबर, जारी करने का स्थान/तिथि, समाप्ति। पासपोर्ट की MRZ पंक्ति से कैमरा OCR द्वारा कैप्चर किया जाता है, <strong>डिवाइस पर ही</strong> संसाधित होता है।',
      'privacy.collect2': '<strong>अतिथि वीज़ा डेटा:</strong> वीज़ा नंबर, प्रकार, जारी करने का स्थान/तिथि, समाप्ति। कैमरे से कैप्चर होता है; छवि <strong>केवल</strong> OCR निष्कर्षण के लिए हमारे बैकएंड को भेजी जाती है और अनुरोध पूरा होने के बाद हटा दी जाती है (अनुरोध की अवधि से अधिक कभी संग्रहीत नहीं होती)।',
      'privacy.collect3': '<strong>अतिथि फ़ोटो:</strong> कैप्चर कर पोर्टल की सीमा तक छोटी की जाती है, डिवाइस पर एन्क्रिप्टेड रखी जाती है।',
      'privacy.collect4': '<strong>होस्ट/प्रॉपर्टी प्रोफ़ाइल:</strong> प्रतिष्ठान का नाम, पता, FRRO कार्यालय का क्षेत्राधिकार, संपर्क विवरण। एक बार दर्ज करें, हर दाखिले में फिर उपयोग होता है।',
      'privacy.whereStored': 'डेटा कहाँ रखा जाता है',
      'privacy.where1': '<strong>डिवाइस पर एन्क्रिप्टेड SQLite डेटाबेस</strong> (कुंजी iOS Keychain / Android Keystore में, जहाँ उपलब्ध हो हार्डवेयर-समर्थित)। कभी सादे पाठ में नहीं, कभी क्लाउड बैकअप में नहीं।',
      'privacy.where2': '<strong>बैकएंड (भारत क्षेत्र):</strong> होस्ट खाते, प्रमाणीकरण टोकन। अनुरोध की अवधि से परे सर्वर पर कोई कच्ची पासपोर्ट/वीज़ा छवि संग्रहीत नहीं होती।',
      'privacy.howUsed': 'हम इसका उपयोग कैसे करते हैं',
      'privacy.use1': 'समीक्षा और दाखिल करने के लिए फ़ॉर्म C / फ़ॉर्म III के फ़ील्ड पहले से भरने हेतु।',
      'privacy.use2': 'मैन्युअल जमा करने के लिए भरा हुआ PDF बनाने हेतु (टियर 1 विकल्प)।',
      'privacy.use3': 'ब्राउज़र एक्सटेंशन के माध्यम से FRRO पोर्टल को स्वतः भरने हेतु (टियर 2)।',
      'privacy.rights': 'आपके अधिकार (DPDP अधिनियम 2023)',
      'privacy.right1': '<strong>पहुंच:</strong> अपना सारा डेटा मशीन-पठनीय JSON में निर्यात करें (Settings &gt; Data &amp; Privacy &gt; Export Data)।',
      'privacy.right2': '<strong>सुधार:</strong> दाखिल करने से पहले समीक्षा स्क्रीन पर कोई भी अतिथि फ़ील्ड संपादित करें।',
      'privacy.right3': '<strong>मिटाना:</strong> Settings &gt; Delete Account सभी स्थानीय व्यक्तिगत डेटा और कुंजियाँ हटाकर सर्वर-पक्षीय विलोपन शुरू करता है। पूरा होने पर आपको पुष्टि मिलती है।',
      'privacy.right4': '<strong>शिकायत:</strong> किसी भी गोपनीयता संबंधी चिंता या डेटा अनुरोध के लिए <a href="mailto:dpo@cformly.com">dpo@cformly.com</a> से संपर्क करें।',
      'privacy.retention': 'डेटा प्रतिधारण',
      'privacy.retention1': 'सफल दाखिले के बाद दस्तावेज़ छवियाँ स्वतः हटा दी जाती हैं (प्रमाण रखने के लिए होस्ट सेटिंग से बदल सकता है)। डिफ़ॉल्ट: छवियाँ हटाई जाती हैं, संरचित रिकॉर्ड इतिहास के लिए रखा जाता है।',
      'privacy.retention2': 'एन्क्रिप्टेड स्थानीय भंडार तब तक बना रहता है जब तक आप खाता नहीं हटाते या ऐप अनइंस्टॉल नहीं करते।',
      'privacy.crossBorder': 'सीमा-पार प्रसंस्करण',
      'privacy.crossBorderBody': 'OCR बैकएंड भारत क्षेत्र (ap-south-1 / asia-south1) में चलता है। कोई थर्ड-पार्टी AI सेवा उपयोग नहीं होती — सारा OCR स्व-होस्टेड ओपन-सोर्स इन्फ्रास्ट्रक्चर (Tesseract / PaddleOCR) पर चलता है। कोई डेटा भारत से बाहर नहीं जाता।',
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
      'terms.privacyBody': 'ऐप के आपके उपयोग पर हमारी <a href="privacy.html">गोपनीयता नीति</a> भी लागू होती है। सारा अतिथि डेटा SQLCipher (AES-256) से एन्क्रिप्टेड रखा जाता है। डेटा भारत के सर्वरों पर संग्रहीत होता है। कोई थर्ड-पार्टी AI सेवा उपयोग नहीं होती।',
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
    for (var t = 0; t < toggles.length; t++) {
      toggles[t].addEventListener('click', function () {
        var next = currentLang() === 'en' ? 'hi' : 'en';
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

  /* ---------- init ---------- */
  applyI18n(currentLang());
  bindToggles();
})();
