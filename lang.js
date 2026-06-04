(function() {
  var translations = {
    sv: {
      pageTitle: 'Voxna Södra Fiskevårdsförening',
      navHome: 'Hem',
      navPosts: 'Inlägg',
      navRules: 'Regler',
      navFiskekort: 'Fiskekort',
      navMap: 'Karta',
      siteName: 'Voxna Södra Fiskevårdsförening',
      tagline: 'För er som gillar fiske',
      footerText: 'Voxna Södra Fiskevårdsförening',
      indexTitle: 'Välkommen till Voxna Södra Fiskevårdsförening',
      indexP1: 'Voxna Södra Fiskevårdsförening förvaltar och vårdar fiskevatten i den natursköna Voxnadalen i västra Hälsingland. Hos oss hittar du lugna sjöar, strömmande åar och en fiskeupplevelse i en av Sveriges vackraste inlandsmiljöer.',
      indexP2: 'Våra vatten håller fina bestånd av gädda, abborre, öring och harr. Voxnan bjuder på ett otroligt varierat fiske - här kan du flugfiska efter öring och harr i strömmarna, men också kasta efter grov gädda och abborre i de lugnare partierna. Vill du hellre hitta lugnet vid en skogstjärn har vi dessutom flera sjöar med jättefint gädd- och abborrfiske.',
      indexP3: 'Vi erbjuder även put & take-fiske med regelbunden isättning av röding, öring och regnbåge — perfekt för hela familjen eller den som vill ha en garanterat spännande dag vid vattnet!',
      indexP4: 'Fiskekort köps via Swish eller hos återförsäljare. Information om fiske och fiskekort finns även på plats vid vattnen eller hos Voxna Livs.',
      indexP5: 'Vi ber alla fiskare att följa gällande regler för att tillsammans värna om våra fina fiskebestånd för framtida generationer.',
      fiskekortTitle: 'Fiskekort & Regler',
      fiskekortIntro: 'Kortpriser gällande Voxna Södra Fiskevårdsförening fr.o.m. 2026-01-01 till 2026-12-31',
      kortPrisHeaderKort: 'Kort',
      kortPrisHeaderPris: 'Pris',
      kortPrisHeaderInfo: 'Info',
      kortDagkort: 'Dagkort',
      kortVeckokort: 'Veckokort',
      kortArskortVoxnabor: 'Årskort Voxnabor',
      kortArskortOvriga: 'Årskort övriga',
      kortDagkortHalltjarn: 'Dagkort Hälltjärn',
      kortDagkortHalltjarnNote: 'Ingår även i årskortet',
      kortDagkortHalltjarnInfo: 'Max 3 fiskar per kort',
      kortDagkortGalttjarn: 'Dagkort Galttjärn',
      kortDagkortGalttjarnInfo: 'Max 2 fiskar per kort',
      kortDagkortFinnstugastrommen: 'Dagkort Finnstugaströmmen',
      kortDagkortFinnstugastrommenNote: 'Ingår även i årskortet',
      kortDagkortFinnstugastrommenInfo: 'Flugfiske, C&R, hullinglöst',
      kortDagkortFinnsen: 'Dagkort Finnsen',
      kortDagkortFinnsenInfo: 'Max 3 fiskar per kort',
      kortBathyraFinnsen: 'Båthyra Finnsen',
      kortBathyraFinnsenNote: 'Bokning och nyckel via Voxna Livs\nTel: 0271-41067',
      kortBathyraFinnsenInfo: 'Båtmotor ej tillåten',
      swishSectionTitle: 'Köp fiskekort via Swish',
      swishInstruction: 'Ange vilket vatten du ska fiska på i meddelandet och skicka rätt summa. Detta ska göras innan fisket påbörjas.',
      swishButton: 'Betala med Swish',
      priceListTitle: 'Kortpriser',
      loadingNews: 'Laddar nyheter…',
      swishCardCaption: 'Voxna Södra FVF',
      sidebarTitle: 'Köp fiskekort',
      sidebarLocation: 'Voxna Livs',
      sidebarSwish: 'Swish: 1231280221',
      rulesGeneralTitle: 'Allmänna regler/Info',
      rule1: 'Följ alltid gällande fiskeregler och märkningar vid varje vatten.',
      rule2: 'Ta med ditt fiskekort och visa upp det vid kontroll.',
      rule3: 'Visa hänsyn till naturen och andra fiskare.',
      rule4: 'Ta med allt skräp hem och lämna platsen ren.',
      rule5: 'Fiskekort får ej överlåtas.',
      rule6: 'Återsättning av Gäddor över 80 cm rekommenderas.',
      rule7: 'Harr och öring (strömmande vatten): Minimimått 35 cm, maximimått 45 cm. Fisk utanför detta måttintervall ska återutsättas.',
      rule8: 'Barn och ungdomar fiskar gratis upp till 15 år. Undantaget är våra put-and-take-vatten – där krävs antingen ett eget fiskekort, eller att barnet fiskar på målsmans kort och kvot.',
      galttjarnTitle: 'Särskilda regler – Galttjärn',
      galttjarn1: 'Endast dagkort gäller - årskort gäller ej',
      galttjarn2: 'Max 2 fiskar per kort',
      galttjarn3: 'Ett fiskespö per kort',
      finnsenTitle: 'Särskilda regler – Finnsen',
      finnsen1: 'Endast dagkort gäller - årskort gäller ej',
      finnsen2: 'Max 3 fiskar per kort',
      finnsen3: 'Ett fiskespö per kort',
      finnsen4: 'Båtmotor ej tillåten',
      finnsen5: 'Båt finns att hyra vid Finnsen',
      finnsen6: 'Bokning och nyckel via Voxna Livs, tel: 0271-41067',
      halltjarnTitle: 'Särskilda regler – Hälltjärn',
      halltjarn1: 'Årskort gäller',
      halltjarn2: 'Max 3 fiskar per kort',
      halltjarn3: 'Ett fiskespö per kort',
      finnstugastrommenTitle: 'Särskilda regler – Finnstugaströmmen',
      finnstugastrommen1: 'Endast dagkort gäller - årskort gäller ej',
      finnstugastrommen2: 'All fisk ska behandlas varsamt och återutsättas',
      finnstugastrommen3: 'Endast flugspö med en fluga och hullingslös enkelkrok',
      postsTitle: 'Senaste nyheter',
      loadingNews: 'Laddar nyheter…',
      recentPostsTitle: 'Senaste inläggen',
      mapTitle: 'Karta över fiskevatten',
      mapDescription: 'Klicka på en markering för att se information om vattendraget. Orange markeringar kräver eget dagkort.',
      legendFish: 'Fiskevatten',
      legendPutAndTake: 'Put and Take - Eget dagkort krävs',
      legendShop: 'Voxna Livs (fiskekort)',
      mapCredit: '© OpenStreetMap-bidragsgivare',
      waterListTitle: 'Alla fiskevatten'
    },
    en: {
      pageTitle: 'Voxna Södra Fishing Association',
      navHome: 'Home',
      navPosts: 'Posts',
      navRules: 'Rules',
      navFiskekort: 'Fishing permits',
      navMap: 'Map',
      siteName: 'Voxna Södra Fishing Association',
      tagline: 'For those who enjoy fishing',
      footerText: 'Voxna Södra Fishing Association',
      indexTitle: 'Welcome to Voxna Södra Fishing Association',
      indexP1: 'Voxna Södra Fishing Association manages and cares for fishing waters in the scenic Voxna Valley in western Hälsingland. With us you will find calm lakes, flowing streams and a fishing experience in one of Sweden''s most beautiful inland landscapes.',
      indexP2: 'Our waters hold good stocks of pike, perch, trout and grayling. Voxnan offers incredibly varied fishing – here you can fly fish for trout and grayling in the currents, and also cast for big pike and perch in the calmer sections. If you prefer tranquility by a forest lake, we also have several lakes with excellent pike and perch fishing.',
      indexP3: 'We also offer put & take fishing with regular stocking of char, trout and rainbow trout — perfect for the whole family or anyone who wants a guaranteed exciting day by the water!',
      indexP4: 'Fishing permits are purchased via Swish or from resellers. Information about fishing and permits is also available on site at the waters or at Voxna Livs.',
      indexP5: 'We ask all anglers to follow the applicable rules to jointly protect our fine fish stocks for future generations.',
      fiskekortTitle: 'Fishing permits & rules',
      fiskekortIntro: 'Permit prices for Voxna Södra Fishing Association from 2026-01-01 to 2026-12-31',
      kortPrisHeaderKort: 'Permit',
      kortPrisHeaderPris: 'Price',
      kortPrisHeaderInfo: 'Info',
      kortDagkort: 'Day permit',
      kortVeckokort: 'Week permit',
      kortArskortVoxnabor: 'Annual permit - local residents',
      kortArskortOvriga: 'Annual permit - others',
      kortDagkortHalltjarn: 'Day permit Hälltjärn',
      kortDagkortHalltjarnNote: 'Also included in annual permit',
      kortDagkortHalltjarnInfo: 'Max 3 fish per permit',
      kortDagkortGalttjarn: 'Day permit Galttjärn',
      kortDagkortGalttjarnInfo: 'Max 2 fish per permit',
      kortDagkortFinnstugastrommen: 'Day permit Finnstugaströmmen',
      kortDagkortFinnstugastrommenNote: 'Also included in annual permit',
      kortDagkortFinnstugastrommenInfo: 'Fly fishing, C&R, barbless',
      kortDagkortFinnsen: 'Day permit Finnsen',
      kortDagkortFinnsenInfo: 'Max 3 fish per permit',
      kortBathyraFinnsen: 'Boat rental Finnsen',
      kortBathyraFinnsenNote: 'Booking and key via Voxna Livs\nTel: 0271-41067',
      kortBathyraFinnsenInfo: 'Boat motor not allowed',
      swishSectionTitle: 'Buy fishing permits via Swish',
      swishInstruction: 'Enter the water you are fishing in the message and send the correct amount. This must be done before fishing begins.',
      swishButton: 'Pay with Swish',
      priceListTitle: 'Permit prices',
      loadingNews: 'Loading news…',
      swishCardCaption: 'Voxna Södra FVF',
      sidebarTitle: 'Buy fishing permits',
      sidebarLocation: 'Voxna Livs',
      sidebarSwish: 'Swish: 1231280221',
      rulesGeneralTitle: 'General rules / Info',
      rule1: 'Always follow current fishing rules and signage at each water.',
      rule2: 'Carry your fishing permit and show it during inspections.',
      rule3: 'Respect nature and other anglers.',
      rule4: 'Take all litter home and leave the area clean.',
      rule5: 'Fishing permits may not be transferred.',
      rule6: 'Release of pike over 80 cm is recommended.',
      rule7: 'Grayling and trout (running waters): Minimum 35 cm, maximum 45 cm. Fish outside this range must be returned.',
      rule8: 'Children and youth fish free up to 15 years. Put-and-take waters require either their own permit or the child fishes under a guardian’s permit and quota.',
      galttjarnTitle: 'Special rules – Galttjärn',
      galttjarn1: 'Only day permits are valid - annual permits do not apply',
      galttjarn2: 'Max 2 fish per permit',
      galttjarn3: 'One fishing rod per permit',
      finnsenTitle: 'Special rules – Finnsen',
      finnsen1: 'Only day permits are valid - annual permits do not apply',
      finnsen2: 'Max 3 fish per permit',
      finnsen3: 'One fishing rod per permit',
      finnsen4: 'Boat motor not allowed',
      finnsen5: 'Boat available to rent at Finnsen',
      finnsen6: 'Booking and key via Voxna Livs, tel: 0271-41067',
      halltjarnTitle: 'Special rules – Hälltjärn',
      halltjarn1: 'Annual permit valid',
      halltjarn2: 'Max 3 fish per permit',
      halltjarn3: 'One fishing rod per permit',
      finnstugastrommenTitle: 'Special rules – Finnstugaströmmen',
      finnstugastrommen1: 'Only day permits are valid - annual permits do not apply',
      finnstugastrommen2: 'All fish must be handled carefully and returned',
      finnstugastrommen3: 'Only fly rod with one fly and barbless single hook',
      postsTitle: 'Latest news',
      recentPostsTitle: 'Latest posts',
      mapTitle: 'Map of fishing waters',
      mapDescription: 'Click a marker to see information about the water. Orange markers require a separate day permit.',
      legendFish: 'Fishing water',
      legendPutAndTake: 'Put and Take - Separate day permit required',
      legendShop: 'Voxna Livs (permits)',
      mapCredit: '© OpenStreetMap contributors',
      waterListTitle: 'All fishing waters'
    }
  };

  var posts = {
    sv: [
      { id: 'default-1', date: '2026-05-01', title: 'Ny fiskerestriktion vid Finnstugaströmmen', content: 'Från och med nästa månad måste all fisk i Finnstugaströmmen återutsättas. Detta är ett viktigt steg för att skydda beståndet av öring och harr i området. Vi uppmanar alla medlemmar att kontrollera sina fiskekort och följa de nya reglerna för att undvika böter.' },
      { id: 'default-2', date: '2026-04-15', title: 'Vårstäddagen vid Voxnaån', content: 'Vårens städdag blir lördagen den 20 april. Vi samlas klockan 10:00 vid Voxna Livs för en gemensam insats längs med ån. Medlemmar som hjälper till bjuds på kaffe och smörgås. Ta gärna med handskar och vadarbyxor.' },
      { id: 'default-3', date: '2026-03-30', title: 'Ny återförsäljare för fiskekort', content: 'Voxnabruks Kanot & Camping säljer nu fiskekort i butiken. Det ger fler möjligheter för besökare att köpa kort på plats. Swish-numret för direktköp är fortfarande 1231280221, men nu finns också fysisk försäljning under butikens öppettider.' }
    ],
    en: [
      { id: 'default-1', date: '2026-05-01', title: 'New fishing restriction at Finnstugaströmmen', content: 'From next month, all fish in Finnstugaströmmen must be returned. This is an important step to protect the trout and grayling stocks in the area. We urge all members to check their fishing permits and follow the new rules to avoid fines.' },
      { id: 'default-2', date: '2026-04-15', title: 'Spring cleanup day at Voxnaån', content: 'The spring cleanup day will be Saturday April 20. We gather at 10:00 at Voxna Livs for a joint effort along the river. Members who help are offered coffee and sandwiches. Please bring gloves and waders.' },
      { id: 'default-3', date: '2026-03-30', title: 'New fishing permit retailer', content: 'Voxnabruks Kanot & Camping now sells fishing permits in the shop. This gives more opportunities for visitors to buy permits on site. The Swish number for direct purchase is still 1231280221, but physical sales are now also available during the shop''s opening hours.' }
    ]
  };

  var waterInfo = {
    sv: {
      6: 'Regnbåge. Eget dagkort krävs – 100:- (max 2 fiskar). Köps vid Voxna Livs eller Voxnabruks Kanot & Camping. Årskort gäller ej.',
      7: 'Flugfiske med hullingslös enkelkrok. Catch & Release – all fisk återutsätts. Eget dagkort 100:-. Årskort gäller ej.',
      8: 'Röding, Öring. Eget dagkort 200:- (max 3 fiskar). Båt att hyra 100:-. Elmotor ej tillåtet. Bokning via Voxna Livs, tel: 0271-41067.',
      9: 'Röding, Öring. Eget dagkort 100:- (max 3 fiskar). Ingår även i årskortet.',
      18: 'Här köper du fiskekort. Öppet i butiken under ordinarie öppettider, övrig tid via automat vid entrén. Tel: 0271-41067.'
    },
    en: {
      6: 'Rainbow trout. Separate day permit required – 100 SEK (max 2 fish). Available at Voxna Livs or Voxnabruks Kanot & Camping. Annual permit does not apply.',
      7: 'Fly fishing with barbless single hook. Catch & Release – all fish must be returned. Separate day permit 100 SEK. Annual permit does not apply.',
      8: 'Arctic char, trout. Separate day permit 200 SEK (max 3 fish). Boat rental 100 SEK. Electric motor not allowed. Booking via Voxna Livs, tel: 0271-41067.',
      9: 'Arctic char, trout. Separate day permit 100 SEK (max 3 fish). Also included in the annual permit.',
      18: 'Here you buy fishing permits. Open in the shop during regular opening hours, other times via the machine at the entrance. Tel: 0271-41067.'
    }
  };

  var currentLang = localStorage.getItem('siteLanguage') || document.documentElement.lang || 'sv';
  if (currentLang !== 'sv' && currentLang !== 'en') {
    currentLang = 'sv';
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    localStorage.setItem('siteLanguage', lang);
    document.documentElement.lang = lang;

    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var text = translations[lang][key];
      if (typeof text === 'undefined') return;
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
        el.value = text;
      } else {
        el.textContent = text;
      }
    });

    document.title = translations[lang].pageTitle || document.title;
    document.querySelectorAll('.lang-button').forEach(function(button) {
      button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });

    if (window.updateDynamicContent) {
      window.updateDynamicContent(lang);
    }
  }

  function initLanguageSwitcher() {
    document.querySelectorAll('.lang-button').forEach(function(button) {
      button.addEventListener('click', function () {
        setLanguage(button.getAttribute('data-lang'));
      });
    });
    setLanguage(currentLang);
  }

  window.getCurrentLang = function() {
    return currentLang;
  };

  window.getPosts = function() {
    return posts[currentLang] || posts.sv;
  };

  window.getWaterInfo = function(id) {
    return waterInfo[currentLang] && waterInfo[currentLang][id] ? waterInfo[currentLang][id] : '';
  };

  window.updateDynamicContent = function(lang) {
    var onLangChange = window.onLangChange;
    if (typeof onLangChange === 'function') {
      onLangChange(lang);
    }
  };

  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
})();
