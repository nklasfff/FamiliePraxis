// ============================================================
// FamiliePraxis — Data & Indhold
// Rikke Veth · Familiepraxis · Frederiksberg
// ============================================================

var PRAKSIS_INFO = {
  navn: 'Familiepraxis',
  terapeut: 'Rikke Veth',
  titel: 'Familieterapeut · Narrativ-systemisk specialist · Åndedrætsterapeut',
  adresse: 'Amalievej 6, 1875 Frederiksberg C',
  telefon: '+45 31 21 33 25',
  email: 'rikke@familiepraxis.dk',
  cvr: '42689823',
  website: 'familiepraxis.dk'
};

// ============================================================
// SVG-cirkel tekster for de to perspektiver
// ============================================================
var CIRKEL_TEKSTER = {
  privat: {
    centrum: ['Familien', 'som helhed'],
    relationer: ['Tilknytning', '& tryghed'],
    parterapi: ['Parforholdet', '& nærvær'],
    familie: ['Samspil', '& mønstre'],
    individuel: ['Dig selv', '& dine spor'],
    aandedraet: ['Åndedræt', '& nervesystem'],
    boern: ['Barnets', 'stemme']
  },
  professionel: {
    centrum: ['Systemisk', 'helhedssyn'],
    relationer: ['Tilknytning', '& mentalisering'],
    parterapi: ['Forældrepar', '& alliance'],
    familie: ['Familie-', 'behandling'],
    individuel: ['Individuel', 'traumeterapi'],
    aandedraet: ['Polyvagal', 'regulering'],
    boern: ['Barnets', 'perspektiv']
  }
};

// ============================================================
// Cirkelnavne (lookup)
// ============================================================
var CIRKEL_NAVNE = {
  centrum: 'Familien som helhed',
  relationer: 'Tilknytning & tryghed',
  parterapi: 'Parforholdet',
  familie: 'Samspil & mønstre',
  individuel: 'Dig selv & dine spor',
  aandedraet: 'Åndedræt & nervesystem',
  boern: 'Barnets stemme'
};

// ============================================================
// 7 Cirkler — Kerneområder
// ============================================================
var CIRKLER = [
  {
    id: 'centrum',
    titel: 'Familien som helhed',
    ikon: '🌿',
    privat: {
      overblik: {
        beskrivelse: 'I en familie hænger alt sammen. Når ét medlem har det svært, mærker alle det — og når familien finder vej sammen, løfter det alle. At forstå familien som en helhed er det første skridt mod forandring.',
        punkter: [
          'Alt i familien hænger sammen',
          'Traumatiske spor påvirker hele familien',
          'Forandring ét sted skaber bevægelse alle steder',
          'Jeres historie rummer også jeres styrke'
        ],
        tip: 'Prøv at se jeres udfordringer som noget, familien bærer sammen — ikke som ét menneskes problem. Det ændrer alt.'
      },
      dybde: [
        'Familier, der har levet med svære oplevelser — omsorgssvigt, vold, misbrug, psykisk sygdom eller kronisk stress — udvikler mønstre, der engang var nødvendige for at overleve. Men de samme mønstre kan holde familien fast, også når faren er overstået. At forstå det er begyndelsen på forandring.',
        'Når vi ser familien som en helhed, opdager vi noget vigtigt: børnenes adfærd er ikke problemet — den er kommunikation. Et barn, der slår, råber eller trækker sig, fortæller os noget om, hvad det mærker i familien. Når vi lytter til den kommunikation, åbner der sig nye muligheder.',
        'Mange familier har prøvet at løse problemerne ved at fokusere på ét familiemedlem — ofte barnet. Men fordi alt hænger sammen, er det sjældent nok. Familiebehandling ser på hele dynamikken: forældrenes egne historier, parforholdet, søskenderelationerne og de ydre belastninger.',
        'At arbejde med familien som helhed kræver mod. Det betyder, at alle må se på deres egen rolle i samspillet — ikke for at finde skyld, men for at finde muligheder. Når en forælder tør se på sine egne sår, giver det barnet lov til at slippe de byrder, det har båret.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'En narrativ-systemisk tilgang ser familien som et samlet system, hvor traumatiske erfaringer, tilknytningsmønstre og generationelle spor skaber den dynamik, vi møder. Intervention rettes mod helheden — ikke symptombæreren.',
        punkter: [
          'Narrativ-systemisk helhedsforståelse',
          'Intergenerationelle traumemønstre',
          'Barnet som symptombærer for systemet',
          'Menneskecentreret, ikke metodecentreret tilgang'
        ],
        tip: 'Det vigtigste redskab er din intuition for, hvad dette menneske har brug for. Metoden følger mennesket — ikke omvendt.'
      },
      dybde: [
        'I familiebehandling med udsatte familier er det afgørende at forstå, at familiens aktuelle vanskeligheder sjældent er opstået i et vakuum. Generationelle traumer, omsorgssvigt og belastende opvækstvilkår videreføres gennem tilknytningsmønstre, kropslige reaktioner og de historier, familien fortæller om sig selv.',
        'Den narrativ-systemiske tilgang giver os mulighed for at arbejde med familiens selvforståelse. Ved at eksternalisere problemerne — adskille personen fra problemet — skabes rum for, at familien kan se sig selv som mere end deres vanskeligheder. Det er særligt vigtigt for familier, der har en lang historie i det kommunale system.',
        'I komplekse sager med mange involverede fagprofessionelle er koordinering afgørende. Rollen som "kaospilot" — at navigere mellem socialrådgivere, skoler, institutioner, psykiatri og sundhedsvæsen — kræver evnen til at holde familiens perspektiv centralt, selv når systemets logik trækker i andre retninger.',
        'Familieundersøgelser og §50-vurderinger kræver gennemsigtighed. Familien skal altid vide, hvad der skrives om dem, og have mulighed for at kommentere. Denne gennemsigtighed er ikke bare etisk korrekt — den styrker alliancen og øger behandlingens effektivitet.'
      ]
    }
  },
  {
    id: 'relationer',
    titel: 'Tilknytning & tryghed',
    ikon: '💛',
    privat: {
      overblik: {
        beskrivelse: 'Tryghed er fundamentet for alt. Den måde, du blev mødt på som barn, former den måde, du møder verden på i dag. At forstå dine tilknytningsmønstre er ikke at finde fejl — det er at finde vejen hjem til dig selv.',
        punkter: [
          'Dine mønstre har engang beskyttet dig',
          'Utryg tilknytning kan heles',
          'Tryghed skabes i relationer',
          'Du kan give dit barn det, du selv manglede'
        ],
        tip: 'Når du reagerer uforholdsmæssigt stærkt i en relation, er det ofte et ekko fra noget ældre. Vær nysgerrig på det ekko — det fortæller dig noget vigtigt.'
      },
      dybde: [
        'Tilknytning er ikke et valg — det er en biologisk nødvendighed. Fra fødslen søger vi forbindelse med dem, der skal beskytte os. Hvis den forbindelse var ustabil, uforudsigelig eller fraværende, lærer vores nervesystem at være på vagt. Det er ikke en fejl — det var den bedste strategi, du havde som barn.',
        'I familier med traumatiske erfaringer ser vi ofte, at tilknytningsmønstrene går i arv. En forælder, der selv voksede op uden tryghed, kan have svært ved at give sit barn den ro, barnet har brug for — ikke fordi forælderen ikke vil, men fordi nervesystemet ikke har lært, hvordan tryghed føles.',
        'Det gode budskab er, at tilknytningsmønstre kan ændres. Hjernen er plastisk hele livet. Gennem trygge relationer — med en partner, en ven, en terapeut — kan nye erfaringer langsomt overskrive de gamle. Det kræver tid og gentagne oplevelser af at blive mødt, men det er muligt.',
        'For forældre i udsatte familier er det afgørende at forstå: du behøver ikke reparere hele din historie, før du kan være en god nok forælder. Selv små øjeblikke af ægte kontakt — et blik, en berøring, et "jeg er her" — gør en forskel for dit barn.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Tilknytning og mentalisering er de to bærende søjler i traumeinformeret familiebehandling. Vi kortlægger tilknytningsmønstre og styrker forældrenes kapacitet til at forstå barnets indre verden.',
        punkter: [
          'Circle of Security som ramme',
          'Mentaliseringsbaseret behandling (MBT)',
          'Desorganiseret tilknytning og trauma',
          'Intergenerationel transmission af mønstre'
        ],
        tip: 'Forældrenes tilknytningshistorie er ofte nøglen til at forstå barnets symptomer. Spørg altid til forældrenes egen opvækst.'
      },
      dybde: [
        'I arbejdet med udsatte familier møder vi ofte desorganiseret tilknytning — det mønster, der opstår, når den person, der skal give tryghed, samtidig er kilden til frygt. Barnet fanges i et uløseligt paradoks, og de strategier, det udvikler, kan se ud som adfærdsproblemer, men er i virkeligheden overlevelsesstrategier.',
        'Mentalisering — evnen til at se bag adfærden og forstå de følelser og intentioner, der driver den — er ofte svækket hos forældre, der selv har oplevet omsorgssvigt. Når vi styrker mentaliseringsevnen, styrker vi forælderens mulighed for at møde barnet med nysgerrighed frem for reaktivitet.',
        'Circle of Security giver et konkret sprog for tilknytningsprocessen: barnet har brug for en sikker base at udforske fra og en sikker havn at vende tilbage til. Mange forældre i udsatte familier genkender smerteligt, at de selv manglede denne cirkel — og den erkendelse kan blive drivkraften for forandring.',
        'I tværfagligt samarbejde er det vigtigt at formidle tilknytningsforståelsen til alle involverede — socialrådgivere, pædagoger, lærere. Når hele systemet omkring familien forstår barnets adfærd som tilknytningskommunikation, ændrer interventionerne karakter fra kontrol til omsorg.'
      ]
    }
  },
  {
    id: 'parterapi',
    titel: 'Parforholdet',
    ikon: '💜',
    privat: {
      overblik: {
        beskrivelse: 'Parforholdet er familiens nerve. Når forældrene kæmper — med hinanden, med livet, med deres egne spor — mærker hele familien det. At tage sig af parforholdet er at tage sig af børnene.',
        punkter: [
          'Jeres konflikter har dybere rødder',
          'Begge parters historie spiller ind',
          'Børnene mærker stemningen mellem jer',
          'Det er aldrig for sent at finde tilbage'
        ],
        tip: 'Når I skændes, så prøv at stoppe op og spørge: "Hvad er det, jeg egentlig er bange for lige nu?" Svaret handler sjældent om opvasken.'
      },
      dybde: [
        'I familier med traumatiske erfaringer er parforholdet ofte under ekstra pres. Når begge partnere bærer på svære oplevelser fra deres egen opvækst, kan selv små konflikter udløse store følelser — fordi det, der aktiveres, er ældre end parforholdet.',
        'Et typisk mønster er, at den ene søger kontakt, mens den anden trækker sig. Det ligner en konflikt om praktiske ting, men det handler altid om det samme spørgsmål: "Er du der for mig? Kan jeg stole på dig?" Når begge partnere bærer utryg tilknytning, kan dette mønster blive meget intenst.',
        'For forældre i udsatte familier kompliceres parforholdet ofte af ydre pres: økonomi, boligsituation, kontakt med myndigheder, bekymring for børnene. Det er vigtigt at anerkende, at jeres vanskeligheder ikke kun handler om jeres relation — men også om de vilkår, I lever under.',
        'At arbejde med parforholdet i en traumatiseret familie handler ikke om at blive det perfekte par. Det handler om at skabe nok tryghed mellem jer til, at børnene kan mærke det. Selv små skridt — at holde øjenkontakt, at sige "jeg er ked af det", at lytte uden at forsvare sig — kan ændre familiens klima.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Forældrealliancen er afgørende for familiebehandlingens succes. I udsatte familier er parforholdet ofte belastet af individuelle traumer, ydre pres og systemisk involvering, hvilket kræver en integreret tilgang.',
        punkter: [
          'Forældrealliancen som behandlingsfokus',
          'Traumeinformeret parterapi',
          'Co-regulering mellem forældre',
          'Parforholdet under ydre pres (myndigheder, økonomi)'
        ],
        tip: 'I udsatte familier er parforholdet ofte det mest forsømte område. Styrk alliancen mellem forældrene, og du styrker hele systemet.'
      },
      dybde: [
        'I kommunal familiebehandling er forældrealliancen ofte nøglen, men sjældent det direkte fokus. Når forældrene er i konstant konflikt — eller i tavs afkobling — kan selv den bedste børnefaglige indsats ikke kompensere. At adressere parforholdet er derfor en systemisk intervention, ikke et add-on.',
        'Traumeinformeret parterapi med udsatte familier kræver forståelse for, at begge partneres nervesystemer er involveret. Når den ene partner er i sympatisk aktivering (kamp-flugt) og den anden i dorsal vagal (kollaps), er samtale meningsløs. Først når begge er regulerede, kan kontakt opstå.',
        'I sammenbragte familier med traumehistorie er dynamikken ekstra kompleks: nye partnere skal navigere i loyalitetskonflikter, stedforælder-roller og børnenes sorg over den oprindelige familie. En narrativ tilgang kan hjælpe familien med at skabe en ny, fælles historie, der rummer alles oplevelser.',
        'Når forældrene er separerede, ændres fokus fra parterapi til co-parenting. Her er målet ikke at redde parforholdet, men at etablere en funktionel forældrealliancealliance, hvor børnene ikke fanges i loyalitetskonflikter. §75-støtte kan være relevant, når en forælder har et barn anbragt.'
      ]
    }
  },
  {
    id: 'familie',
    titel: 'Samspil & mønstre',
    ikon: '🏡',
    privat: {
      overblik: {
        beskrivelse: 'Hver familie har sine mønstre — måder at reagere på, roller der er fordelt, ting der ikke siges højt. Nogle mønstre beskytter. Andre holder jer fast. At se dem er første skridt mod at vælge dem om.',
        punkter: [
          'Mønstre går i arv — men kan brydes',
          'Roller i familien kan ændres',
          'Det usagte former samspillet',
          'Nye veje kræver at alle bliver set'
        ],
        tip: 'Prøv at lægge mærke til, hvad der sker lige FØR en konflikt eskalerer. Hvem gør hvad? Hvem tier? Det mønster fortæller jer noget vigtigt.'
      },
      dybde: [
        'I familier med traumatiske erfaringer udvikler der sig ofte faste roller: den, der passer på alle; den, der udadreagerer; den, der bliver usynlig; den, der holder sammen på det hele. Disse roller er ikke frit valgte — de er overlevelsesstrategier, der er vokset frem, fordi nogen måtte fylde de huller, der var.',
        'Mønstre gentager sig på tværs af generationer. En mor, der selv var parentificeret som barn, kan ubevidst gøre sit barn til den, der passer på hende. En far, der voksede op med vold, kan enten gentage mønsteret eller trække sig helt fra konflikter. Begge dele påvirker familiens samspil.',
        'Når en familie har mange professionelle omkring sig — socialrådgivere, familiebehandlere, pædagoger, lærere — kan det paradoksalt nok gøre samspillet mere forvirret. Familien kan føle sig overvåget, dømt eller handlingslammet. Det er vigtigt, at hjælpen giver familien mere handlekraft — ikke mindre.',
        'At ændre familiens mønstre handler ikke om at gøre alt anderledes fra den ene dag til den anden. Det handler om at finde de små øjeblikke, hvor I allerede gør det, I gerne vil gøre mere af — og bygge videre derfra. Selv i de mest belastede familier er der øjeblikke af forbindelse og omsorg.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Familiens samspilsmønstre afdækkes narrativt og systemisk. Vi undersøger roller, alliancer, generationelle mønstre og de dominerende historier, familien lever efter — og hjælper familien med at finde alternative fortællinger.',
        punkter: [
          'Narrativ eksternalisering af problemer',
          'Parentificering og rolleforvirring',
          'Generogrammer og generationelle mønstre',
          '3-måneders familieundersøgelser'
        ],
        tip: 'Spørg altid: "Hvis dette mønster havde en funktion engang — hvad beskyttede det familien mod?" Det åbner for forståelse frem for fordømmelse.'
      },
      dybde: [
        'Narrativ terapi er særligt velegnet i arbejdet med udsatte familier, fordi den adskiller personen fra problemet. Når vi eksternaliserer — "hvornår sniger vreden sig ind?" frem for "hvorfor er du vred?" — skabes et rum, hvor familien kan se problemet udefra og finde deres egen handlekraft.',
        'I intensive familiebehandlingsforløb med hjemmebesøg ser vi samspilsmønstrene udfolde sig i familiens eget miljø. Det giver en helt anden adgang end samtaler på et kontor. Vi ser, hvem der sidder ved bordet, hvem der trækker sig, hvem der tager over — og vi kan intervenere i de faktiske situationer.',
        '3-måneders familieundersøgelser kræver en systematisk kortlægning af familiens dynamik, ressourcer og belastninger. Genogrammet er et uundværligt redskab her: det synliggør mønstre på tværs af generationer og giver familien selv en visuel forståelse af, hvor deres historier kommer fra.',
        'I det tværfaglige samarbejde er det vigtigt at holde fast i, at familiens mønstre ikke er patologi — de er tilpasninger til svære livsvilkår. Denne forståelse ændrer interventionen fra at ville "rette" familien til at ville styrke familiens egen kapacitet for forandring.'
      ]
    }
  },
  {
    id: 'individuel',
    titel: 'Dig selv & dine spor',
    ikon: '🦋',
    privat: {
      overblik: {
        beskrivelse: 'Du bærer på spor fra dit liv — fra din opvækst, dine relationer, dine tab og dine kampe. Individuel terapi handler ikke om at fikse dig. Det handler om at stå mere solidt i det, du står i, og finde de ressourcer, du har glemt du har.',
        punkter: [
          'Dine reaktioner giver mening',
          'Traumer kan bearbejdes i dit tempo',
          'Du er mere end din historie',
          'At forstå din krop er at forstå dig selv'
        ],
        tip: 'Du behøver ikke forstå alt, før du kan begynde at have det bedre. Nogle gange er det nok at mærke, at nogen lytter — virkelig lytter.'
      },
      dybde: [
        'Mange mennesker lever med en fornemmelse af, at noget er galt — uden at kunne sætte ord på hvad. Det kan vise sig som angst, udmattelse, vrede eller en følelse af tomhed. Ofte er det spor fra oplevelser, der aldrig blev bearbejdet — fordi der ikke var plads til det, eller fordi ingen spurgte.',
        'I terapien møder jeg dig, hvor du er — med alt det, du bærer med dig. Det handler ikke om at løse problemer, men om at blive bedre til at holde det svære, forstå hvordan din krop reagerer, og langsomt finde mere plads indeni. Som Rikke siger: vi fikser ikke — vi skaber rum.',
        'For forældre i udsatte familier er individuel terapi ofte et vigtigt supplement til familiebehandlingen. Dine egne ubearbejdede erfaringer — omsorgssvigt, vold, tab, ensomhed — påvirker din evne til at være nærværende med dine børn. At tage sig af sine egne sår er en gave til hele familien.',
        'Traumebearbejdning foregår i faser: først skaber vi tryghed og stabilitet, så du har et fundament at stå på. Derefter kan vi langsomt nærme os det svære — i dit tempo, med respekt for dine grænser. Integration er det sidste skridt: at finde en ny plads til det, der skete, så det ikke længere styrer dit liv.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Individuel terapi i en familieterapeutisk kontekst holder altid fokus på individet-i-relation. Vi arbejder narrativt med klientens historie og somatisk med kroppens spor — altid med blik for det systemiske felt.',
        punkter: [
          'Faseopdelt traumebehandling',
          'Narrativ identitetsarbejde',
          'Somatisk traumeterapi og åndedræt',
          'PTSD, kompleks PTSD og C-PTSD'
        ],
        tip: 'Stabilisering først — altid. En klient, der ikke er reguleret, kan ikke bearbejde. Giv kroppen forrang, når den er i alarmberedskab.'
      },
      dybde: [
        'I arbejdet med klienter fra udsatte familier møder vi ofte kompleks PTSD: et mønster af symptomer, der stammer fra gentagne, langvarige traumatiske oplevelser i nære relationer. I modsætning til enkeltstående traumer kræver C-PTSD en langsommere, mere relationel tilgang, hvor den terapeutiske alliance i sig selv er helende.',
        'Den narrative tilgang giver klienten mulighed for at genfortælle sin historie — ikke ved at ændre fakta, men ved at finde nye perspektiver. Når en kvinde, der har oplevet vold, kan se sin overlevelse som styrke i stedet for skam, ændrer hele selvforståelsen karakter.',
        'Integration af somatisk terapi og åndedrætsterapi er central i traumebehandling. Kroppen bærer traumets aftryk i form af spændinger, åndedrætsrestriktioner og nervesystemets kroniske aktivering. Gennem kropslig bevidsthed og åndedrætsarbejde kan disse mønstre langsomt opløses.',
        'I det tværfaglige felt er det vigtigt at sikre, at individuel terapi ikke modarbejder familiebehandlingen. Tæt koordinering med familiebehandleren og socialrådgiveren er nødvendig, samtidig med at klientens fortrolighed respekteres. Denne balance kræver erfaring og faglig integritet.'
      ]
    }
  },
  {
    id: 'aandedraet',
    titel: 'Åndedræt & nervesystem',
    ikon: '🌬️',
    privat: {
      overblik: {
        beskrivelse: 'Dit nervesystem er som en indre alarm. Hos mennesker med traumatiske erfaringer står alarmen ofte på — også når der ikke er fare. Åndedrættet er den mest direkte vej til at fortælle din krop, at det er trygt nu.',
        punkter: [
          'Dit nervesystem reagerer hurtigere end dine tanker',
          'Stresset åndedræt holder dig i alarmberedskab',
          'Roligt åndedræt signalerer tryghed til hjernen',
          'Du kan lære at regulere dig selv'
        ],
        tip: 'Prøv lige nu: Ånd ind i 4 tæller, ud i 6 tæller. Gør det tre gange. Mærk, hvordan kroppen svarer. Det er dit nervesystem, der skifter gear.'
      },
      dybde: [
        'Åndedrættet er den eneste autonome funktion, du også kan styre bevidst. Det gør det til en direkte linje til dit nervesystem. Når du bevidst forlænger udåndingen, aktiverer du den del af nervesystemet, der signalerer tryghed — den vagusnerve, der fungerer som en stille strøm af kommunikation mellem krop og sind.',
        'Mennesker, der har oplevet traumer, har ofte et åndedræt, der er stramt og overfladisk. Kroppen holder fast — i brystet, i mellemgulvet, i maven — fordi den stadig er i beredskab. Åndedrætsterapi handler ikke om at tvinge kroppen til at slappe af, men om langsomt at geninvitere tryghed ind i kroppen.',
        'For familier med traumatiske erfaringer er kropslig regulering ekstra vigtigt. Når en forælder er i kronisk alarmberedskab, kan barnet mærke det — og barnets nervesystem følger med. At lære at regulere sit eget nervesystem er derfor en af de mest konkrete gaver, du kan give dine børn.',
        'Åndedrætsterapi er ikke bare teknik — det er en vej ind til følelser, der har været låst inde i kroppen. Mange oplever, at sorg, lettelse eller gammel frygt frigøres under åndedrætsarbejde. Det er kroppens måde at slippe det, den har holdt fast i. Det kræver trygge rammer og en terapeut, der kan rumme det, der kommer.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Polyvagal teori og åndedrætsterapi udgør den kropslige dimension i traumeinformeret familiebehandling. Vi arbejder med nervesystemets tre tilstande og bruger åndedræt som klinisk intervention til regulering.',
        punkter: [
          'Polyvagal teori — tre tilstande i nervesystemet',
          'Åndedrætsterapi (certificeret 2022-23)',
          'Co-regulering i familiebehandling',
          'NADA øreakupunktur som supplement'
        ],
        tip: 'Begynd altid med at aflæse klientens nervesystemtilstand. Er de i ventral vagal, sympatisk aktivering eller dorsal kollaps? Din intervention afhænger af svaret.'
      },
      dybde: [
        'Stephen Porges\' polyvagale teori giver os et præcist sprog for nervesystemets tre hierarkiske tilstande: ventral vagal (tryghed, social engagement), sympatisk (kamp-flugt, alarm) og dorsal vagal (kollaps, afkobling). I traumatiserede familier ser vi ofte, at nervesystemet er "fastlåst" i sympatisk aktivering eller dorsal kollaps.',
        'Åndedrætsterapi som klinisk redskab starter med at observere klientens åndedræt: Hvor i kroppen trækker de vejret? Hvor dybt? Hvor hurtigt? Åndedrætsrestriktioner afslører, hvor kroppen holder fast — og giver os et kort over de somatiske spor af traumet.',
        'Co-regulering — når én persons regulerede nervesystem hjælper en andens med at finde ro — er fundamentet for terapeutisk kontakt med traumatiserede familier. Terapeutens eget nervesystem er det vigtigste redskab. Derfor er egen kropslig praksis og supervision afgørende.',
        'I familiebehandling kan kropslige interventioner bruges direkte i sessioner med hele familien. Når en samtale eskalerer, kan en fælles vejrtrækningsøvelse bryde eskaleringsmønsteret og skabe et nyt fælles udgangspunkt. NADA øreakupunktur kan supplere som reguleringsredskab, særligt ved stofmisbrug og angst.'
      ]
    }
  },
  {
    id: 'boern',
    titel: 'Barnets stemme',
    ikon: '🌱',
    privat: {
      overblik: {
        beskrivelse: 'Børns adfærd er aldrig tilfældig. Et barn, der slår, skriger, trækker sig eller tilpasser sig for meget, fortæller os noget vigtigt. Barnets adfærd er ikke problemet — den er kommunikation om, at noget i omgivelserne er svært.',
        punkter: [
          'Adfærd er kommunikation — altid',
          'Arbejd med omgivelserne, ikke kun barnet',
          'Alle følelser er tilladte',
          'Børn bærer familiens byrder — lad dem slippe'
        ],
        tip: 'Næste gang dit barn "opfører sig dårligt", prøv at spørge dig selv: "Hvad prøver mit barn at fortælle mig?" Det ændrer alt.'
      },
      dybde: [
        'Børn er eksperter i at aflæse deres omgivelser — langt bedre end de fleste voksne. De mærker spændinger, sorg, angst og vrede i familien, længe før nogen siger noget. Og fordi de ikke har ord for det, bruger de det, de har: deres krop og deres adfærd.',
        'Et barn, der udadreagerer, er ikke et "svært barn" — det er et barn, der har det svært. Og oftest handler det ikke om barnet selv, men om det, barnet lever i. Uro i familien, forældrenes ubearbejdede traumer, konflikter, misbrug eller omsorgssvigt — barnet mærker det hele og reagerer på det.',
        'For forældre kan det være smertefuldt at høre, at barnets vanskeligheder hænger sammen med familiens dynamik. Men det er også en befriende erkendelse: det betyder, at du ikke skal fikse dit barn. Du skal forstå, hvad dit barn fortæller dig — og arbejde med de omgivelser, barnet lever i.',
        'Børn i udsatte familier bærer ofte byrder, der er alt for tunge for dem: de passer på yngre søskende, de trøster forældre, de forsøger at holde sammen på noget, der falder fra hinanden. Når vi giver forældrene støtte til at tage ansvaret tilbage, kan barnet endelig få lov til at være barn.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Barnets perspektiv er den centrale navigationsstjerne i al familiebehandling. Vi ser barnets adfærd som meningsfuld kommunikation og arbejder med omgivelserne — ikke symptombæreren.',
        punkter: [
          'Barnets adfærd som systemisk kommunikation',
          'Børnesamtaler tilpasset alder og modenhed',
          'Underretningspligt og myndighedssamarbejde',
          'Anbragte børn og §75-støtte til forældre'
        ],
        tip: 'Barnets "symptomer" er de bedste løsninger, barnet har kunnet finde. Respektér strategien — og arbejd med de omgivelser, der nødvendiggør den.'
      },
      dybde: [
        'I familiebehandling med udsatte familier er barnet ofte den, der henvises — men sjældent den, der har "problemet". Barnets symptomer — adfærdsvanskeligheder, skolefravær, selvskade, angst — er signaler om, at systemet omkring barnet er belastet. At behandle barnet alene uden at adressere familiens dynamik er sjældent effektivt.',
        'Børnesamtaler i familiebehandling kræver særlig kompetence. Barnet skal opleve, at dets oplevelse tages alvorligt, uden at det pålægges ansvar for at løse familiens problemer. Med yngre børn bruger vi leg, tegning og fortælling som veje ind i barnets verden.',
        'Underretningspligten er en realitet i arbejdet med udsatte familier. At navigere mellem den terapeutiske alliance og myndighedsansvaret kræver gennemsigtighed: familien skal altid vide, hvad der underrettes om og hvorfor. Denne åbenhed beskytter både barnet og den terapeutiske relation.',
        'Ved anbringelser er §75-støtte til forældrene afgørende. Forældre, der mister omsorgen for deres barn, har brug for hjælp til at bearbejde sorg, skam og tab — og til at opbygge en ny relation til barnet inden for anbringelsens rammer. Denne indsats er ofte undervurderet, men kan gøre en afgørende forskel for barnets mulighed for at vende hjem.'
      ]
    }
  }
];

// ============================================================
// Sammenhænge mellem cirkler (krydsreferencer)
// ============================================================
var SAMMENHAENGE = [
  {
    fra: 'relationer',
    til: 'parterapi',
    privat: 'Dine tilknytningsmønstre fra barndommen viser sig tydeligst i parforholdet. At forstå dem er nøglen til at bryde uhensigtsmæssige mønstre.',
    professionel: 'Tilknytningsteori er fundamentet for EFT-parterapi. Parternes tilknytningsmønstre driver de negative interaktionscyklusser.'
  },
  {
    fra: 'relationer',
    til: 'boern',
    privat: 'Dit barns tilknytning formes af jeres relation. Ved at arbejde med din egen tilknytningshistorie kan du give dit barn en tryggere start.',
    professionel: 'Intergenerationel transmission af tilknytningsmønstre er veldokumenteret. Forældrenes Adult Attachment Interview (AAI) forudsiger barnets tilknytningsmønster.'
  },
  {
    fra: 'relationer',
    til: 'individuel',
    privat: 'I individuel terapi kan du udforske dine relationelle mønstre i et trygt rum — og langsomt ændre dem indefra.',
    professionel: 'Den terapeutiske relation er selv en tilknytningsrelation, som kan bruges til at give klienten korrigerende relationelle erfaringer.'
  },
  {
    fra: 'parterapi',
    til: 'familie',
    privat: 'Parforholdet er familiens fundament. Når I som par finder tilbage til hinanden, mærker hele familien det.',
    professionel: 'Forældrealliancen er en afgørende faktor for familiens funktion. Styrkelse af parforholdet har ofte positiv afsmitning på hele familiesystemet.'
  },
  {
    fra: 'parterapi',
    til: 'boern',
    privat: 'Børn er utroligt følsomme over for stemningen mellem forældrene. Jeres parforhold er en af de vigtigste faktorer for børnenes trivsel.',
    professionel: 'Interparental konflikt er en af de stærkeste prædiktorer for børns mistrivsel — stærkere end selve skilsmissen.'
  },
  {
    fra: 'familie',
    til: 'boern',
    privat: 'Når familien finder nye og bedre måder at fungere på, mærker børnene det først. De blomstrer i trygge rammer.',
    professionel: 'Familiebehandling er ofte den mest effektive intervention for børns mistrivsel, da den adresserer de systemiske faktorer, der opretholder problemet.'
  },
  {
    fra: 'familie',
    til: 'individuel',
    privat: 'Familiens mønstre lever videre i dig. Individuel terapi kan hjælpe dig med at sortere i, hvad du vil tage med — og hvad du vil gøre anderledes.',
    professionel: 'Individuel terapi kan være nødvendig som supplement til familiebehandling, når et familiemedlems individuelle problematik kræver særskilt opmærksomhed.'
  },
  {
    fra: 'aandedraet',
    til: 'individuel',
    privat: 'Åndedrættet er et kraftfuldt redskab i individuel terapi. Det hjælper dig med at komme i kontakt med følelser, du måske har lukket af for.',
    professionel: 'Integration af kropslige interventioner i individuel terapi øger behandlingens effektivitet, særligt ved traumerelaterede tilstande.'
  },
  {
    fra: 'aandedraet',
    til: 'familie',
    privat: 'Når I som familie lærer at regulere jer sammen — f.eks. gennem fælles vejrtrækningsøvelser — styrker det jeres forbindelse.',
    professionel: 'Familiebaseret regulering er et kraftfuldt koncept: når familien lærer at co-regulere, styrkes familiens samlede kapacitet for at håndtere stress.'
  },
  {
    fra: 'aandedraet',
    til: 'boern',
    privat: 'Børn tager hurtigt åndedrætsøvelser til sig. Det giver dem et konkret redskab til at håndtere store følelser.',
    professionel: 'Kropslige reguleringsstrategier er særligt velegnede til børn, da de er konkrete og ikke kræver avanceret sproglig formåen.'
  },
  {
    fra: 'centrum',
    til: 'relationer',
    privat: 'Familiens balance hviler på de relationer, I har til hinanden. At styrke tilknytningen er at styrke familien.',
    professionel: 'Familiebalance er i sin kerne et spørgsmål om tilknytningskvalitet mellem familiens medlemmer.'
  },
  {
    fra: 'centrum',
    til: 'parterapi',
    privat: 'Parforholdet er familiens motor. Når I tager jer af jeres relation, tager I jer af hele familien.',
    professionel: 'Forældreparrets relation er den primære organiserende kraft i familiesystemet.'
  },
  {
    fra: 'centrum',
    til: 'familie',
    privat: 'Familiens samspil er selve kernen i den balance, vi søger. Små justeringer i jeres daglige mønstre kan gøre en stor forskel.',
    professionel: 'Systemisk intervention rettet mod familiens interaktionsmønstre er den mest direkte vej til at påvirke familiens samlede funktion.'
  },
  {
    fra: 'centrum',
    til: 'individuel',
    privat: 'Din personlige trivsel er en del af familiens balance. Når du har det godt, har familien det bedre.',
    professionel: 'Individets psykiske sundhed og familiens funktion er gensidigt afhængige — intervention på det ene niveau påvirker det andet.'
  },
  {
    fra: 'centrum',
    til: 'aandedraet',
    privat: 'Kropslig regulering er fundamentet for familiens balance. Når du er reguleret, kan du bedre regulere dine relationer.',
    professionel: 'Nervesystemets reguleringskapacitet er forudsætningen for relationel kapacitet — og dermed for familiens funktion.'
  },
  {
    fra: 'centrum',
    til: 'boern',
    privat: 'Børnenes trivsel er det tydeligste barometer for familiens balance. Når børnene blomstrer, er familien på rette vej.',
    professionel: 'Barnets trivsel er den ultimative indikator for familiebehandlingens effekt.'
  },
  {
    fra: 'individuel',
    til: 'boern',
    privat: 'Når du tager dig af din egen indre verden, giver du dit barn den gave at have en mere nærværende og reguleret forælder.',
    professionel: 'Forældres individuelle terapi kan have betydelig positiv effekt på børns trivsel via forbedret forældrekapacitet.'
  },
  {
    fra: 'relationer',
    til: 'aandedraet',
    privat: 'Kroppen reagerer i relationer. At lære at mærke og regulere dine kropslige reaktioner giver dig flere muligheder i mødet med andre.',
    professionel: 'Somatiske markører i relationer giver vigtig diagnostisk information. Kroppens reaktioner afslører ofte tilknytningsmønstre, som ikke er verbalt tilgængelige.'
  },
  {
    fra: 'parterapi',
    til: 'individuel',
    privat: 'Nogle gange har du brug for at sortere i dine egne følelser, før du kan møde din partner. Individuel terapi kan supplere parterapien.',
    professionel: 'Kombination af parterapi og individuel terapi kan være indiceret, men kræver omhyggelig håndtering af fortrolighed og alliancer.'
  },
  {
    fra: 'parterapi',
    til: 'aandedraet',
    privat: 'At lære at regulere dig selv midt i en konflikt med din partner er en af de vigtigste færdigheder. Åndedrættet er din hurtigste vej til ro.',
    professionel: 'Parterapi med integration af somatiske interventioner kan hjælpe par med at bryde eskaleringsmønstre ved at aktivere den ventrale vagus.'
  },
  {
    fra: 'individuel',
    til: 'aandedraet',
    privat: 'I individuel terapi kan du gå dybere med åndedrætsarbejdet og udforske, hvad kroppen fortæller dig om dine følelser og din historie.',
    professionel: 'Kombination af samtaleterapi og kropslig terapi giver adgang til både top-down og bottom-up processer i traumebehandling.'
  }
];

// ============================================================
// Temaer — Hverdagssituationer
// ============================================================
var TEMA_INDHOLD = [
  {
    id: 'kommunikation',
    titel: 'Kommunikation i familien',
    ikon: '💬',
    privat: {
      intro: 'Måden I taler sammen på former hele familiens atmosfære.',
      tekst: 'God kommunikation handler ikke om altid at sige det rigtige. Det handler om at lytte med ægte nysgerrighed, at turde være ærlig og at kunne sige undskyld, når det er nødvendigt. I familier, der kommunikerer godt, er der plads til uenighed — uden at nogen bliver gjort forkert.',
      cirkler: ['centrum', 'relationer', 'familie']
    },
    professionel: {
      intro: 'Kommunikationsmønstre er en af de vigtigste indikatorer for familiens funktion.',
      tekst: 'Strukturerede kommunikationsøvelser — som gensidig lytning, jeg-budskaber og parafrasering — kan implementeres i familiebehandlingen. Videoanalyse af familiens kommunikation er et kraftfuldt redskab til at synliggøre mønstre.',
      cirkler: ['centrum', 'familie', 'parterapi']
    }
  },
  {
    id: 'skilsmisse',
    titel: 'Skilsmisse & brud',
    ikon: '💔',
    privat: {
      intro: 'En skilsmisse er en af livets største omvæltninger — for alle i familien.',
      tekst: 'At gå fra hinanden behøver ikke at betyde, at familien går i stykker. Med den rette støtte kan I finde en ny form for familie, hvor børnene stadig mærker kærlighed og tryghed fra begge forældre. Det kræver mod, men det er muligt.',
      cirkler: ['parterapi', 'boern', 'familie']
    },
    professionel: {
      intro: 'Skilsmisseforløb kræver en særlig opmærksomhed på børneperspektivet og forældrealliancen.',
      tekst: 'Forskning viser konsistent, at det ikke er skilsmissen i sig selv, men den interparentale konflikt, der skader børnene. Facilitering af et konstruktivt co-parenting-samarbejde er derfor centralt. Konflikttrappen og forskellige samværsmodeller bør indgå i den faglige vurdering.',
      cirkler: ['parterapi', 'boern', 'familie']
    }
  },
  {
    id: 'graenser',
    titel: 'Grænser & behov',
    ikon: '🛡️',
    privat: {
      intro: 'At sætte grænser er en kærlighedshandling — over for dig selv og andre.',
      tekst: 'Mange af os har lært, at det er egoistisk at have grænser. Men uden grænser brænder vi ud, bliver bitre eller trækker os helt fra relationen. Sunde grænser er fleksible, tydelige og kærlige. De beskytter det vigtigste: din evne til at være til stede for dem, du elsker.',
      cirkler: ['individuel', 'relationer', 'centrum']
    },
    professionel: {
      intro: 'Grænser i familiesystemer er et centralt begreb i strukturel familieterapi.',
      tekst: 'Minuchins begreb om grænser — rigide, diffuse eller klare — giver et præcist sprog for familiens organisation. Intervention rettes mod at etablere klare, fleksible grænser mellem subsystemer: forældresubsystemet, søskendesubsystemet og individet.',
      cirkler: ['individuel', 'familie', 'centrum']
    }
  },
  {
    id: 'stress',
    titel: 'Stress & overbelastning',
    ikon: '⚡',
    privat: {
      intro: 'Stress er ikke kun et individuelt problem — det smitter i hele familien.',
      tekst: 'Når en forælder er stresset, mærker børnene det. Når børnene reagerer, stiger forældrenes stress. Det kan blive en spiral, men den kan brydes. Det første skridt er at anerkende, at stress er et fælles problem, der kræver fælles løsninger.',
      cirkler: ['centrum', 'aandedraet', 'individuel']
    },
    professionel: {
      intro: 'Familiens stressregulering er et systemisk fænomen med individuelle og relationelle komponenter.',
      tekst: 'Det dobbelte ABCX-model beskriver, hvordan familier håndterer stress: stressoren (A), familiens ressourcer (B), familiens perception (C) og det samlede resultat (X). Intervention kan rettes mod alle fire komponenter.',
      cirkler: ['centrum', 'aandedraet', 'individuel']
    }
  },
  {
    id: 'tab',
    titel: 'Sorg & tab',
    ikon: '🕊️',
    privat: {
      intro: 'Sorg er kærlighedens pris. At sørge sammen som familie kan styrke jeres bånd.',
      tekst: 'Tab kan have mange former: dødsfald, skilsmisse, sygdom, tab af drømme. Familier sørger på forskellige måder og i forskellige tempi, og det kan skabe misforståelser. I terapien lærer I at give plads til alles sorg — uden at sammenligne eller rangordne.',
      cirkler: ['familie', 'relationer', 'individuel']
    },
    professionel: {
      intro: 'Familier i sorg kræver en tilgang, der rummer systemets samlede tabsoplevelse.',
      tekst: 'Worden\'s fire sorgsopgaver og Stroebe & Schuts dobbeltproces-model giver nyttige rammer for at forstå familiers sorgprocesser. Kulturelle og spirituelle faktorer spiller en væsentlig rolle og bør altid afdækkes.',
      cirkler: ['familie', 'relationer', 'individuel']
    }
  },
  {
    id: 'unge',
    titel: 'Unge & identitet',
    ikon: '🌟',
    privat: {
      intro: 'Ungdomsårene er en tid med vild forandring — for den unge og for hele familien.',
      tekst: 'Når dit barn bliver teenager, ændrer jeres relation sig fundamentalt. Den unge har brug for at løsrive sig — og samtidig vide, at I er der. Det kan føles som en afvisning, men det er sundt. Kunst er at give slip uden at slippe.',
      cirkler: ['boern', 'familie', 'relationer']
    },
    professionel: {
      intro: 'Adolescensens udviklingsopgaver stiller særlige krav til familiebehandlingen.',
      tekst: 'Individuation-separationsprocessen (Blos) og identitetsudvikling (Erikson) er centrale rammer. Familien skal navigere den paradoksale opgave at understøtte autonomi og samtidig opretholde tilknytning. Ungdomsårene afslører ofte latente familiedynamikker.',
      cirkler: ['boern', 'familie', 'relationer']
    }
  },
  {
    id: 'selvvaerd',
    titel: 'Selvværd & selvmedfølelse',
    ikon: '✨',
    privat: {
      intro: 'Dit selvværd er ikke noget, du har eller ikke har. Det er noget, du kan dyrke.',
      tekst: 'Mange kæmper med en indre kritiker, der aldrig er tilfreds. Selvmedfølelse — at behandle dig selv med samme venlighed, som du ville give en god ven — er en af de mest transformerende praksisser, der findes. Det starter med at lægge mærke til, hvordan du taler til dig selv.',
      cirkler: ['individuel', 'relationer', 'aandedraet']
    },
    professionel: {
      intro: 'Selvværd og selvmedfølelse er forskningsbaserede fokusområder med dokumenteret terapeutisk effekt.',
      tekst: 'Kristin Neffs og Christopher Germers arbejde med Mindful Self-Compassion (MSC) giver evidensbaserede interventioner for lavt selvværd. Integration af selvmedfølelsesøvelser i terapien styrker klientens evne til at tolerere svære følelser og reducerer skam.',
      cirkler: ['individuel', 'relationer', 'aandedraet']
    }
  },
  {
    id: 'traumer',
    titel: 'Traumer & heling',
    ikon: '🌿',
    privat: {
      intro: 'Et traume er ikke det, der skete med dig. Det er det, der skete inde i dig som følge af det, der skete.',
      tekst: 'Traumer kan stamme fra store begivenheder, men også fra gentagne små krænkelser i relationer. Heling handler ikke om at glemme, men om at integrere oplevelsen, så den ikke længere styrer dit liv og dine relationer. Det er muligt at heles — i dit eget tempo.',
      cirkler: ['individuel', 'aandedraet', 'relationer']
    },
    professionel: {
      intro: 'Traumebehandling i en familieterapeutisk kontekst holder fokus på traumets relationelle dimensioner.',
      tekst: 'Relationelle traumer kræver relationel heling. Judith Hermans faseopdelte model (sikkerhed, bearbejdning, integration) forbliver den kliniske standard. Integration af somatiske tilgange (SE, sensorimotor psykoterapi) er indiceret ved kompleks PTSD.',
      cirkler: ['individuel', 'aandedraet', 'relationer']
    }
  }
];

// ============================================================
// Øvelser
// ============================================================
var OEVELSER = [
  {
    id: 'pusterummet',
    titel: 'Pusterummet',
    tid: '3 min',
    sted: 'Hvor som helst',
    intro: 'En enkel øvelse der bringer dig tilbage til nuet gennem tre bevidste vejrtrækninger.',
    trin: [
      'Find en behagelig position — siddende, stående eller liggende.',
      'Luk øjnene eller lad blikket hvile blødt på et punkt foran dig.',
      'Tag en dyb indånding gennem næsen. Tæl langsomt til 4.',
      'Hold vejret et øjeblik. Mærk stilheden.',
      'Ånd langsomt ud gennem munden. Tæl til 6. Lad udåndingen være længere end indåndingen.',
      'Gentag tre gange. Mærk, hvad der ændrer sig i din krop.',
      'Åbn øjnene. Tag den ro med dig videre.'
    ],
    cirkel: 'aandedraet'
  },
  {
    id: 'tryg-havn',
    titel: 'Den trygge havn',
    tid: '10 min',
    sted: 'Et roligt sted',
    intro: 'En visualiseringsøvelse der hjælper dig med at finde din indre tryghed — et sted du altid kan vende tilbage til.',
    trin: [
      'Sæt dig behageligt og luk øjnene.',
      'Tag et par dybe vejrtrækninger og lad kroppen falde til ro.',
      'Forestil dig et sted, hvor du føler dig helt tryg. Det kan være virkeligt eller opdigtet.',
      'Se stedet for dig i detaljer: farver, lys, former.',
      'Mærk stedet med alle sanser: hvad kan du høre? Lugte? Mærke mod huden?',
      'Læg mærke til den følelse af ro og tryghed, der fylder dig.',
      'Giv stedet et navn eller et billede, du nemt kan finde tilbage til.',
      'Bliv her så længe, du har brug for det.',
      'Når du er klar, vend langsomt tilbage. Mærk fødderne mod gulvet.'
    ],
    cirkel: 'individuel'
  },
  {
    id: 'familiecirklen',
    titel: 'Familiecirklen',
    tid: '15 min',
    sted: 'Hjemme med familien',
    intro: 'En øvelse I kan lave som familie, der styrker forbindelsen og giver alle en stemme.',
    trin: [
      'Sæt jer i en cirkel — på gulvet, sofaen eller ved bordet.',
      'En voksen starter med at sige én ting, de er taknemmelige for i dag.',
      'Send ordet videre til den næste i cirklen. Alle bidrager.',
      'Anden runde: Sig én ting, der var svær i dag. Ingen kommentarer — bare lytning.',
      'Tredje runde: Sig én ting, du ønsker for i morgen.',
      'Afslut med at holde i hånd eller give hinanden et kram.',
      'Tip: Gør det til en ugentlig tradition — f.eks. søndag aften.'
    ],
    cirkel: 'familie'
  },
  {
    id: 'parmoede',
    titel: 'Parforholdscheck-in',
    tid: '20 min',
    sted: 'Et roligt sted uden afbrydelser',
    intro: 'En struktureret samtale mellem jer to, der åbner op for det, der fylder — uden at det bliver til en diskussion.',
    trin: [
      'Sæt jer over for hinanden. Sluk telefoner og fjern distraktioner.',
      'Partner A taler i 5 minutter om, hvad der fylder lige nu. Partner B lytter — uden at svare eller kommentere.',
      'Partner B parafraserer kort: "Jeg hører dig sige, at..."',
      'Partner A bekræfter eller korrigerer.',
      'Byt roller. Partner B taler, Partner A lytter.',
      'Afslut med at dele én ting, I sætter pris på ved hinanden.',
      'Kram hinanden. Det behøver ikke være mere kompliceret end det.'
    ],
    cirkel: 'parterapi'
  },
  {
    id: 'grounding',
    titel: '5-4-3-2-1 Grounding',
    tid: '5 min',
    sted: 'Hvor som helst',
    intro: 'En sanselig øvelse der bringer dig tilbage til her-og-nu, når tankerne kører i ring.',
    trin: [
      'Tag tre dybe vejrtrækninger.',
      'Nævn 5 ting, du kan SE. Vær specifik — farver, former, detaljer.',
      'Nævn 4 ting, du kan MÆRKE. Stolen under dig, luften på huden...',
      'Nævn 3 ting, du kan HØRE. Lytte efter de stille lyde.',
      'Nævn 2 ting, du kan LUGTE. Eller gå hen og lug til noget.',
      'Nævn 1 ting, du kan SMAGE.',
      'Tag en afsluttende dyb vejrtrækning. Mærk, at du er her.'
    ],
    cirkel: 'aandedraet'
  },
  {
    id: 'boernetegning',
    titel: 'Tegn din familie',
    tid: '15 min',
    sted: 'Ved et bord med papir og farver',
    intro: 'En øvelse for børn (og voksne!), der åbner for samtale om familiens relationer.',
    trin: [
      'Giv barnet papir og farver.',
      'Bed barnet tegne familien — "Tegn alle dem, der hører til din familie."',
      'Lad barnet tegne i fred. Ingen rettelser eller forslag.',
      'Når tegningen er færdig, spørg nysgerrigt: "Fortæl mig om din tegning."',
      'Lyt til, hvem barnet har tegnet, hvem der står sammen, hvem der er stor/lille.',
      'Spørg: "Hvad laver I på tegningen? Er I glade? Hvorfor?"',
      'Hæng tegningen op et sted, barnet selv vælger.'
    ],
    cirkel: 'boern'
  },
  {
    id: 'kropsscanning',
    titel: 'Kropsscanning',
    tid: '10 min',
    sted: 'Liggende eller siddende',
    intro: 'En blid rejse gennem kroppen, der hjælper dig med at mærke, hvad du bærer på — og slippe det.',
    trin: [
      'Læg dig ned eller sæt dig behageligt. Luk øjnene.',
      'Begynd ved fødderne. Mærk kontakten med underlaget.',
      'Flyt langsomt opmærksomheden op gennem benene. Mærk eventuelle spændinger.',
      'Fortsæt til maven og brystet. Læg mærke til åndedrættet her.',
      'Mærk skuldrene, nakken, kæben. Slip eventuelle spændinger med udåndingen.',
      'Scan ansigtet: panden, øjnene, munden. Blødgør alt, hvad du kan.',
      'Mærk hele kroppen som en helhed. Hvil her et øjeblik.',
      'Åbn langsomt øjnene. Tak din krop for at bære dig.'
    ],
    cirkel: 'aandedraet'
  },
  {
    id: 'taknemmelighed',
    titel: 'Taknemmeligheds­brev',
    tid: '15 min',
    sted: 'Et stille sted med papir og pen',
    intro: 'Skriv et brev til en person, der har betydet noget for dig. Du behøver ikke sende det.',
    trin: [
      'Vælg en person, der har gjort en forskel i dit liv.',
      'Find papir og pen — håndskrift virker bedre end skærm her.',
      'Skriv til personen. Start med: "Kære... Jeg skriver til dig fordi..."',
      'Beskriv konkret, hvad personen har gjort, og hvad det har betydet for dig.',
      'Lad dig mærke af følelserne undervejs. Det er meningen.',
      'Afslut brevet, som det føles rigtigt.',
      'Beslut om du vil sende det, dele det, eller beholde det for dig selv. Alt er rigtigt.'
    ],
    cirkel: 'relationer'
  }
];

// ============================================================
// Tilstande (nervesystem-trappe)
// ============================================================
var TRAPPEN = [
  {
    trin: 1,
    navn: 'Tryghed & forbindelse',
    farve: 'sage',
    privat: {
      beskrivelse: 'Du er i kontakt med dig selv og dem omkring dig. Du føler dig tryg, nærværende og åben. Herfra kan du møde andres følelser uden at miste dig selv.',
      kropsSignaler: ['Roligt åndedræt', 'Afslappede skuldre', 'Øjenkontakt føles naturlig', 'Varm fornemmelse i brystet'],
      handlinger: ['Vær nysgerrig på dem omkring dig', 'Del det, der fylder — også det gode', 'Nyd de stille øjeblikke', 'Vær til stede med hele din opmærksomhed'],
      oevelser: ['pusterummet', 'familiecirklen', 'taknemmelighed']
    },
    professionel: {
      beskrivelse: 'Ventral vagal tilstand: social engagement-systemet er aktivt. Klienten er tilgængelig for relationel kontakt og terapeutisk arbejde. Optimal tilstand for dybere bearbejdning.',
      kropsSignaler: ['Reguleret åndedræt', 'Afslappet muskulatur', 'Prosodisk stemme', 'Responsiv ansigtsmimik'],
      handlinger: ['Arbejd med dybere temaer', 'Facilitér relationel kontakt', 'Udforsk følelsesmæssige lag', 'Konsolidér nye erfaringer'],
      oevelser: ['parmoede', 'familiecirklen', 'taknemmelighed']
    }
  },
  {
    trin: 2,
    navn: 'Alarm & aktivering',
    farve: 'amber',
    privat: {
      beskrivelse: 'Dit nervesystem er i alarmberedskab. Du mærker uro, irritation eller angst. Det er kroppens måde at sige, at noget kræver opmærksomhed — men du behøver ikke handle på det med det samme.',
      kropsSignaler: ['Hurtig puls', 'Spændte muskler', 'Rastløshed', 'Overfladisk åndedræt'],
      handlinger: ['Tag en pause — det er ikke svaghed, det er visdom', 'Mærk fødderne mod gulvet', 'Forlæng udåndingen', 'Sig til en du stoler på, at du har brug for et øjeblik'],
      oevelser: ['pusterummet', 'grounding', 'kropsscanning']
    },
    professionel: {
      beskrivelse: 'Sympatisk aktivering: kamp-flugt-systemet er aktiveret. Klienten kan fremstå agiteret, fjendtlig eller angst. Prioritér regulering før bearbejdning.',
      kropsSignaler: ['Forhøjet puls og blodtryk', 'Muskelspændinger', 'Hypervigilans', 'Overfladisk thorakal respiration'],
      handlinger: ['Down-regulér gennem samstemning', 'Brug pacing og grounding', 'Validér nervesystemets reaktion', 'Undgå konfrontation i denne tilstand'],
      oevelser: ['pusterummet', 'grounding', 'kropsscanning']
    }
  },
  {
    trin: 3,
    navn: 'Overbelastning & afkobling',
    farve: 'rose',
    privat: {
      beskrivelse: 'Dit nervesystem har lukket ned. Du føler dig tom, fjern eller udmattet. Det er kroppens ultimative beskyttelse — men den kan langsomt åbnes igen. Vær blid ved dig selv.',
      kropsSignaler: ['Følelsesløshed eller tomhed', 'Træthed og energiløshed', 'Følelse af at være "væk"', 'Svært at tænke klart'],
      handlinger: ['Gør noget meget lille og konkret', 'Mærk noget fysisk — en varm kop, en blød dyne', 'Bed om hjælp — det er okay', 'Vær tålmodig med dig selv'],
      oevelser: ['kropsscanning', 'tryg-havn', 'pusterummet']
    },
    professionel: {
      beskrivelse: 'Dorsal vagal tilstand: immobiliseringsresponsen er aktiv. Klienten kan fremstå dissocieret, affladdet eller fjern. Kræver varsom, gradvis mobilisering.',
      kropsSignaler: ['Hypoton muskulatur', 'Monoton stemme', 'Reduceret ansigtsmimik', 'Begrænset øjenkontakt'],
      handlinger: ['Aktiver forsigtigt gennem sensorisk stimulering', 'Arbejd med orientering i rummet', 'Hold en langsom, varm stemme', 'Undgå at presse — følg klientens tempo'],
      oevelser: ['kropsscanning', 'tryg-havn', 'grounding']
    }
  }
];
