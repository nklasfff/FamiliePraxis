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
    ikon: 'leaf',
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
    ikon: 'heart',
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
    ikon: 'heartDouble',
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
    ikon: 'homeHeart',
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
    ikon: 'butterfly',
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
    ikon: 'wind',
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
    ikon: 'sprout',
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
    privat: 'De tilknytningsmønstre, du bærer fra din barndom — måske utryghed, ambivalens eller undgåelse — aktiveres stærkest i dit parforhold. Når I bliver triggede af hinanden, er det ofte gamle sår, der taler. At forstå dette ændrer konflikten fra "du er problemet" til "vi bærer begge noget med os."',
    professionel: 'I familier under pres driver uforløste tilknytningsmønstre ofte eskaleringen mellem forældrene. Mentaliseringsbaseret parterapi (MBT) kan hjælpe par med at se bag hinandens adfærd og genskabe den mentale kapacitet, som kronisk stress nedbryder.'
  },
  {
    fra: 'relationer',
    til: 'boern',
    privat: 'Dit barn arver ikke kun dine øjenfarve — det arver også dine tilknytningsmønstre. Hvis du selv voksede op med utryghed, kan det være svært at give dit barn den tryghed, du aldrig selv fik. Men her er det gode: bare det at du VED det, giver dig mulighed for at gøre det anderledes.',
    professionel: 'Intergenerationel transmission af tilknytning er veldokumenteret i ACE-forskningen. Forældrens uforarbejdede traumer øger risikoen for desorganiseret tilknytning hos barnet. Circle of Security-interventioner kan bryde denne transmission.'
  },
  {
    fra: 'relationer',
    til: 'individuel',
    privat: 'Mange af dine relationelle mønstre blev skabt, før du havde ord for dem. I individuel terapi med narrativ tilgang kan du begynde at sætte ord på det ordløse — og langsomt skrive en ny historie om, hvem du er i relationer.',
    professionel: 'I narrativ-systemisk individuel terapi arbejdes med at eksternalisere de dominerende historier om klientens relationelle identitet. Særligt for forældre med egne omsorgssvigt-erfaringer kan dette skabe rum for en alternativ forældrenarrativ.'
  },
  {
    fra: 'parterapi',
    til: 'familie',
    privat: 'Jeres parforhold ER familiens nervesystem. Når I som par er i konstant kamp-eller-flugt, lever hele familien i alarmberedskab. Børn mærker spændingen mellem jer — også den I tror, I skjuler. Når I finder mere ro sammen, falder hele familiens stressniveau.',
    professionel: 'Forældrealliancen er den primære organiserende kraft i familiesystemet. I udsatte familier, hvor parrelationen ofte er belastet af fattigdom, traumer eller systemisk pres, er styrkelse af forældrealliancen afgørende for hele familiens reguleringskapacitet.'
  },
  {
    fra: 'parterapi',
    til: 'boern',
    privat: 'Dine børn lærer om kærlighed ved at se jer to. Når I råber, lærer de, at konflikt er farligt. Når I reparerer, lærer de, at brud kan heles. Det vigtigste er ikke, at I aldrig skændes — men at børnene ser jer finde tilbage til hinanden.',
    professionel: 'Interparental konflikt er en stærkere prædiktor for børns mistrivsel end selve familiesammenbruddet. I §50-undersøgelser bør forældrenes konfliktniveau og barnets eksponering for dette vurderes som selvstændig risikofaktor.'
  },
  {
    fra: 'familie',
    til: 'boern',
    privat: 'Når familien begynder at fungere på nye måder — med mere ro, mere lytning, mere plads til alle — er børnene de første, der reagerer. Deres adfærd er et spejl af familiens tilstand. Uro hos børnene er sjældent "barnets problem" — det er familiens signal.',
    professionel: 'Barnets symptomer er ofte et systemisk signal. I familiebehandling efter §52 arbejdes med at flytte fokus fra det identificerede barn til de familiemønstre, der opretholder symptomerne — herunder parentificering, triangulering og usynlige loyalitetskonflikter.'
  },
  {
    fra: 'familie',
    til: 'individuel',
    privat: 'Din families mønstre bor i dig — i din krop, dine reaktioner, dine automatiske tanker. "Sådan har vi altid gjort" er en sætning, der kan holde dig fanget. Individuel terapi giver dig rum til at sortere: hvad vil du beholde fra din familie, og hvad vil du lægge fra dig?',
    professionel: 'Når familiebehandling afdækker dybt individuelle problematikker — f.eks. kompleks PTSD, dissociation eller aktiv selvskade — kan parallel individuel terapi med somatisk og narrativ tilgang være nødvendig for at stabilisere forælderen, så familiebehandlingen kan bære frugt.'
  },
  {
    fra: 'aandedraet',
    til: 'individuel',
    privat: 'Åndedrætsterapi åbner døre, som samtale alene ikke kan. Mange traumer sidder i kroppen som tilbageholdt åndedræt, spændinger i mellemgulvet, en konstant følelse af at holde vejret. Når du lærer at ånde frit, begynder kroppen langsomt at slippe det, den har holdt fast i.',
    professionel: 'Åndedrætsterapi som supplement til narrativ-systemisk individuel terapi giver adgang til bottom-up-processer, som samtaleterapi alene ikke når. Særligt ved kompleks traumatisering, hvor kroppen holder traumeminder, kan åndedrætsarbejde facilitere somatisk integration.'
  },
  {
    fra: 'aandedraet',
    til: 'familie',
    privat: 'Når I som familie lærer at regulere jer sammen — ånde sammen, lande sammen — opbygger I en fælles kapacitet for at håndtere kriser. Det lyder simpelt, men for familier der har levet i konstant alarm, er det dybt transformerende at opdage, at I kan finde ro SAMMEN.',
    professionel: 'Familiebaseret co-regulering bygger på polyvagal teori: når familiens voksne kan aktivere det ventrale vagale system, smitter det til børnene. I udsatte familier med kronisk dysregulering er fælles reguleringsøvelser et konkret redskab til at opbygge familiens "vindue of tolerance."'
  },
  {
    fra: 'aandedraet',
    til: 'boern',
    privat: 'Børn forstår kroppen bedre end ord. Når dit barn er overtaget af vrede, angst eller sorg, kan et enkelt åndedræt sammen gøre mere end hundrede forklaringer. Du behøver ikke sige "tag en dyb vejrtrækning" — du kan bare gøre det selv, og barnet vil følge.',
    professionel: 'Kropslige reguleringsstrategier er særligt effektive for børn med traumehistorik, da traumet ofte sidder præverbalt. Polyvagalt informerede interventioner — langsom udånding, rytmisk bevægelse, co-reguleret åndedræt — kan nå børn, som verbale interventioner ikke når.'
  },
  {
    fra: 'centrum',
    til: 'relationer',
    privat: 'Familiens helhed hviler på kvaliteten af jeres tilknytning til hinanden. I familier med traumehistorik er tilknytningen ofte ambivalent — I elsker hinanden, men kan ikke altid mærke det. At styrke tilknytningen er at styrke hele familien.',
    professionel: 'I systemisk perspektiv er familiens helhed mere end summen af individerne. Tilknytningskvaliteten mellem familiens medlemmer er den bærende struktur — og i udsatte familier er denne struktur ofte fragmenteret af traumer, tab og systemisk pres.'
  },
  {
    fra: 'centrum',
    til: 'parterapi',
    privat: 'Parforholdet er familiens rygrad. I familier under pres — fra økonomi, fra kommunen, fra jeres egne historier — er parforholdet det første, der lider. Men det er også det sted, hvor forandring har størst effekt på alle.',
    professionel: 'Forældreparrets relation er den primære organiserende kraft i udsatte familier. Når parrelationen kollapser under systemisk pres, mister familien sin co-regulerende base. Parterapi bør ofte prioriteres parallelt med familiebehandling.'
  },
  {
    fra: 'centrum',
    til: 'familie',
    privat: 'Jeres familiemønstre — hvem der trøster, hvem der trækker sig, hvem der bærer mest — er ikke tilfældige. De er overlevelsesstrategier, I har udviklet sammen. At se dem tydeligt er ikke en dom — det er det første skridt mod at vælge nye mønstre.',
    professionel: 'Systemisk familiebehandling afdækker de cirkulære interaktionsmønstre, der opretholder familiens dysfunktion. I udsatte familier er disse mønstre ofte beskyttelsesstrategier fra generationer af overlevelse — de skal forstås før de kan ændres.'
  },
  {
    fra: 'centrum',
    til: 'individuel',
    privat: 'Du er en del af din familie — men du er også dig selv. Mange forældre i pressede familier mister sig selv i rollen som omsorgsgiver, som brandslukker, som den der holder sammen. At tage dig af DIG er ikke egoisme — det er en forudsætning for at kunne bære andre.',
    professionel: 'I udsatte familier er individets psykiske sundhed og familiens funktion dybt sammenflettet. Forældrens egne uforløste traumer påvirker mentaliseringskapaciteten og dermed hele familiens regulering. Individuel terapi kan være nødvendig for at genoprette forældrefunktionen.'
  },
  {
    fra: 'centrum',
    til: 'aandedraet',
    privat: 'Dit nervesystem er familiens fundament. Når du er dysreguleret — i konstant alarm, udmattet, afkoblet — mærker alle det. Åndedrætsarbejde og polyvagal regulering er ikke luksus. Det er det mest basale redskab til at genoprette familiens balance.',
    professionel: 'Nervesystemets reguleringskapacitet er forudsætningen for mentalisering, tilknytning og samspil. I familier med kronisk stress er det ventrale vagale system ofte undertrykt. Polyvagalt informeret praksis bør integreres som fundament i enhver familieintervention.'
  },
  {
    fra: 'centrum',
    til: 'boern',
    privat: 'Dine børn er familiens barometer. Deres adfærd — uro, tilbagetrækning, vrede, klamren — fortæller noget om, hvordan familien har det. Det er ikke deres skyld, og det er ikke din skyld. Det er et signal om, at noget i systemet har brug for opmærksomhed.',
    professionel: 'Barnets symptomer er i systemisk optik et signal om familiens tilstand. I §50-undersøgelser og §52-foranstaltninger bør barnets adfærd altid kontekstualiseres i familiens samlede belastning — herunder fattigdom, traumer, psykisk sygdom og systemisk pres.'
  },
  {
    fra: 'individuel',
    til: 'boern',
    privat: 'Det bedste, du kan gøre for dit barn, er at tage dig af dine egne sår. Når du bearbejder din historie — din barndom, dine tab, din smerte — frigør du kapacitet til at være den forælder, dit barn har brug for. Ikke perfekt. Bare til stede.',
    professionel: 'Forældres individuelle traumebearbejdning har direkte effekt på barnets tilknytningssikkerhed. Forskning i reflective functioning viser, at forældrens evne til at mentalisere egne oplevelser er den stærkeste prædiktor for barnets tilknytningsmønster.'
  },
  {
    fra: 'relationer',
    til: 'aandedraet',
    privat: 'Din krop husker, hvad dine relationer har gjort ved dig. Hjertebanken, når nogen hæver stemmen. Spænding i maven, når stemningen skifter. Disse reaktioner er dit nervesystems hukommelse. Gennem åndedrætsarbejde kan du lære at møde dem uden at blive overtaget af dem.',
    professionel: 'Somatiske markører i relationer afslører tilknytningsmønstre, som ikke er verbalt tilgængelige. I narrativ-systemisk terapi kan kroppens reaktioner bruges som indgang til at udforske og eksternalisere de dominerende historier om klientens relationelle erfaringer.'
  },
  {
    fra: 'parterapi',
    til: 'individuel',
    privat: 'Nogle gange rammer parforholdet noget i dig, der er ældre end jeres relation. Måske reagerer du på din partner, som du reagerede på din far. Individuel terapi kan hjælpe dig med at sortere: hvad handler om os — og hvad handler om MIG og min historie?',
    professionel: 'I udsatte familier er parrelationen ofte belastet af begge parters traumehistorik. Når parterapi afdækker individuel traumatisering — f.eks. omsorgssvigt, vold eller tab — kan parallel individuel terapi med somatisk tilgang være nødvendig for at stabilisere inden pararbejdet kan fortsætte.'
  },
  {
    fra: 'parterapi',
    til: 'aandedraet',
    privat: 'Når konflikten eskalerer, lukker din hjerne ned. Du kan ikke lytte, ikke mentalisere, ikke mærke din partner. Dit nervesystem har overtaget. Vagus-åndedræt midt i konflikten — bare 30 sekunder — kan åbne dit vindue igen og gøre det muligt at møde din partner som menneske i stedet for som trussel.',
    professionel: 'Polyvagalt informeret parterapi integrerer somatisk regulering direkte i sessionen. Når par lærer at genkende og regulere deres autonome arousal, kan de forblive i mentaliseringsposition længere — hvilket er forudsætningen for produktivt pararbejde.'
  },
  {
    fra: 'individuel',
    til: 'aandedraet',
    privat: 'Mange traumatiske oplevelser sidder i kroppen som fastfrosne tilstande — tilbageholdt åndedræt, kroniske spændinger, en følelse af at være låst. Åndedrætsterapi i individuel terapi kan nænsomt begynde at tø disse tilstande op — ikke ved at tvinge, men ved at invitere kroppen til langsomt at slippe.',
    professionel: 'Integration af åndedrætsterapi i individuel traumebehandling giver adgang til både top-down og bottom-up processer. For klienter med kompleks PTSD, hvor dissociation og somatiske flashbacks er fremtrædende, kan åndedrætsarbejde være den mest skånsomme indgang til traumematerialet.'
  }
];

// ============================================================
// Temaer — Hverdagssituationer
// ============================================================
var TEMA_INDHOLD = [
  {
    id: 'kommunikation',
    titel: 'Når ordene ikke rækker',
    ikon: 'chatBubble',
    privat: {
      intro: 'I familier med svære erfaringer er kommunikation sjældent bare ord. Det er tonefald, tavshed, blikke og kroppe, der taler.',
      tekst: 'Mange familier har lært at overleve ved ikke at tale om det svære. Tavsheden beskytter — men den isolerer også. At lære at kommunikere handler ikke om at finde de rigtige ord, men om at turde vise, hvad der ligger bag ordene. I familier med traumatiske spor er kroppen ofte hurtigere end munden: irritation, tilbagetrækning eller udbrud fortæller mere end selve ordene.',
      cirkler: ['centrum', 'relationer', 'familie']
    },
    professionel: {
      intro: 'I udsatte familier er kommunikationsmønstre ofte præget af overlevelsesstrategier: tavshed, eskalering eller undvigelse.',
      tekst: 'Narrativ tilgang til kommunikation fokuserer på at give familien et nyt sprog for deres oplevelser. Ved at eksternalisere — "hvornår sniger tavsheden sig ind mellem jer?" — åbnes der for samtale uden skyld. I familier med traumehistorie er nonverbal kommunikation ofte vigtigere end den verbale: kroppens reaktioner, ansigtsudtryk og nervesystemets tilstand giver afgørende information.',
      cirkler: ['centrum', 'familie', 'aandedraet']
    }
  },
  {
    id: 'skilsmisse',
    titel: 'Brud, tab & nye familieformer',
    ikon: 'heartCrack',
    privat: {
      intro: 'Når en familie splitter, mister alle noget — og børnene har brug for at vide, at de ikke er skyld i det.',
      tekst: 'Skilsmisse, anbringelse eller tab af en forælder er blandt de mest omvæltende oplevelser for et barn. I udsatte familier kompliceres bruddet ofte af allerede eksisterende belastninger: konflikter, misbrug, psykisk sygdom eller myndighedsindgreb. Det vigtigste er, at børnene ikke fanges i midten. De har brug for at vide, at begge forældre stadig er deres forældre — uanset hvad der er sket mellem de voksne.',
      cirkler: ['parterapi', 'boern', 'familie']
    },
    professionel: {
      intro: 'I udsatte familier er brud sjældent simple skilsmisser — de involverer ofte anbringelser, myndighedsafgørelser og komplekse loyalitetskonflikter.',
      tekst: 'Co-parenting efter brud i traumatiserede familier kræver særlig opmærksomhed. Når konflikten mellem forældrene er drevet af ubearbejdede traumer, er klassisk mægling sjældent nok. Nervesystemet skal reguleres, før samarbejde er muligt. Ved anbringelser er §75-støtte til forældrene afgørende for at bevare og udvikle relationen til barnet.',
      cirkler: ['parterapi', 'boern', 'familie']
    }
  },
  {
    id: 'graenser',
    titel: 'Grænser i kaos',
    ikon: 'shield',
    privat: {
      intro: 'I familier under pres kan grænser enten være for stive eller helt fraværende. Begge dele gør ondt.',
      tekst: 'Mange forældre i udsatte familier kæmper med at sætte grænser — fordi de selv voksede op uden tydelige grænser, eller fordi de selv oplevede grænser som straf. Sunde grænser er ikke mure — de er vejledning. De siger: "Jeg er her, jeg holder, og jeg slipper dig ikke." For børn i kaos er tydelige, varme grænser det mest tryghedsskabende, der findes.',
      cirkler: ['individuel', 'boern', 'centrum']
    },
    professionel: {
      intro: 'Grænseproblematik i udsatte familier handler sjældent om viden — det handler om forældrenes egen grænseerfaring.',
      tekst: 'Forældre, der selv har oplevet grænseoverskridelser, kan have svært ved at skelne mellem sunde grænser og kontrol. Arbejdet med grænser må derfor altid inkludere forældrenes egen historie. Narrativ tilgang gør det muligt at udforske: "Hvilke grænser havde du brug for som barn — og hvad fik du i stedet?" Denne forståelse transformerer grænsesætning fra pligt til omsorg.',
      cirkler: ['individuel', 'familie', 'centrum']
    }
  },
  {
    id: 'stress',
    titel: 'Kronisk stress & overlevelse',
    ikon: 'lightning',
    privat: {
      intro: 'Stress i udsatte familier er sjældent forbigående — det er en tilstand, kroppen har vænnet sig til at leve i.',
      tekst: 'Når stress ikke er en forbigående reaktion, men en konstant tilstand, ændrer det hele familiens nervesystem. Forældrene er udmattede, børnene er på vagt, og selv små ting kan udløse store reaktioner. Det første skridt er at anerkende, at jeres stress ikke er svaghed — det er en normal reaktion på unormale vilkår. Og at kroppens vej ud af kronisk stress går gennem regulering, ikke viljestyrke.',
      cirkler: ['centrum', 'aandedraet', 'individuel']
    },
    professionel: {
      intro: 'Kronisk stress i udsatte familier er ofte sammenflettet med trauma, fattigdom og systemisk belastning.',
      tekst: 'ACE-forskningen (Adverse Childhood Experiences) dokumenterer, at ophobning af belastende barndomsoplevelser har kumulativ effekt på sundhed og funktion. I udsatte familier ser vi ofte, at både forældre og børn scorer højt. Polyvagal forståelse er central: kronisk stress fastholder nervesystemet i sympatisk aktivering, hvilket reducerer mentaliseringsevnen og øger reaktiviteten. Kropslig regulering er derfor en forudsætning for, at samtalebaseret intervention kan virke.',
      cirkler: ['centrum', 'aandedraet', 'individuel']
    }
  },
  {
    id: 'tab',
    titel: 'Sorg, tab & anbringelse',
    ikon: 'dove',
    privat: {
      intro: 'Tab i udsatte familier har mange ansigter — og sorgen over det, man aldrig fik, kan være lige så tung som sorgen over det, man mistede.',
      tekst: 'Tab handler ikke kun om dødsfald. Det handler om den barndom, du ikke fik. Det handler om det parforhold, der gik i stykker. Det handler om det barn, der blev anbragt. Sorg i familier med traumatiske erfaringer er ofte kompliceret, fordi den blander sig med skyld, skam og vrede. At give plads til sorgen — uden at dømme den — er begyndelsen på heling.',
      cirkler: ['familie', 'individuel', 'boern']
    },
    professionel: {
      intro: 'Sorg i udsatte familier er ofte kompliceret af skam, skyld og systemisk involvering — særligt ved anbringelser.',
      tekst: 'Forældres sorg over anbragte børn er en af de mest undervurderede kliniske udfordringer. Sorgen er ambivalent: blandet med lettelse, skam, vrede mod systemet og selvbebrejdelse. Uden bearbejdning af denne sorg svækkes forældrenes mulighed for at genopbygge relationen til barnet. §75-støtte bør altid inkludere en sorgdimension.',
      cirkler: ['familie', 'individuel', 'boern']
    }
  },
  {
    id: 'unge',
    titel: 'Unge i udsatte familier',
    ikon: 'star',
    privat: {
      intro: 'Unge, der vokser op i familier med traumatiske spor, bærer ofte på mere, end nogen ser — og deres oprør rummer ofte en bøn om hjælp.',
      tekst: 'Teenageårene er svære for alle familier — men for unge i udsatte familier er det ekstra intenst. De kæmper med at løsrive sig fra forældre, de måske både elsker og frygter. De kan overtage forældrenes mønstre eller gøre oprør mod dem. Nogle unge reagerer udadtil med vrede og grænseoverskridelser. Andre trækker sig indad med angst, selvskade eller isolation. Begge dele er meningsfuld kommunikation.',
      cirkler: ['boern', 'familie', 'individuel']
    },
    professionel: {
      intro: 'Unge fra udsatte familier viser ofte symptomer, der afspejler familiens ubearbejdede traumer — løsrivelsen aktiverer hele systemets tilknytningssår.',
      tekst: 'Ungdomsårene er en kritisk periode, hvor familiemønstre ofte intensiveres. Den unges behov for autonomi udfordrer forældre, hvis eget tilknytningsmønster er utrygt — de kan opleve løsrivelsen som svigt. Omvendt kan unge med desorganiseret tilknytning have svært ved at balancere frihed og forbindelse. Arbejdet kræver både individuel kontakt med den unge og systemisk intervention i familien.',
      cirkler: ['boern', 'familie', 'individuel']
    }
  },
  {
    id: 'selvvaerd',
    titel: 'Skam, skyld & selvværd',
    ikon: 'sparkles',
    privat: {
      intro: 'Mange forældre i udsatte familier bærer på en dyb skam — over deres egen historie, over deres forældreskab, over at have brug for hjælp.',
      tekst: 'Skam er en af de mest destruktive følelser, fordi den siger: "Der er noget galt med MIG." Skyld siger: "Jeg gjorde noget forkert." Skam siger: "JEG er forkert." I familier med traumatiske erfaringer lever skammen ofte i generationer. At turde se den — og langsomt erstatte den med medfølelse for sig selv — er en af de vigtigste transformationer i terapien.',
      cirkler: ['individuel', 'relationer', 'aandedraet']
    },
    professionel: {
      intro: 'Skam er en central affekt i arbejdet med udsatte familier og en væsentlig barriere for forandring.',
      tekst: 'Skam-baseret selvforståelse blokerer mentalisering: en forælder, der er oversvømmet af skam, kan ikke være nysgerrig på barnets indre verden. Narrativ tilgang er særligt effektiv, fordi den adskiller identitet fra handling. Når forælderen kan se sin historie som kontekst — "du gjorde det bedste, du kunne med det, du havde" — reduceres skammen, og handlekraften vokser.',
      cirkler: ['individuel', 'relationer', 'aandedraet']
    }
  },
  {
    id: 'traumer',
    titel: 'Familietraumer & heling',
    ikon: 'leaf',
    privat: {
      intro: 'Et familietraume er ikke bare det, der skete — det er det, der skete inde i hele familien som følge af det, der skete.',
      tekst: 'Traumer i familier spreder sig som ringe i vand. En forælder, der bærer på ubearbejdede traumer, kan ubevidst give dem videre til sine børn — ikke af ond vilje, men fordi nervesystemet husker det, sindet har forsøgt at glemme. Heling handler ikke om at glemme, men om at integrere: at finde en plads til det, der skete, så det ikke længere styrer familiens samspil. Det kræver tid, tryghed og professionel hjælp.',
      cirkler: ['centrum', 'individuel', 'aandedraet']
    },
    professionel: {
      intro: 'Familietraumer kræver en integreret tilgang, der adresserer både individuelle og systemiske dimensioner af traumet.',
      tekst: 'Intergenerationelle traumer videreføres gennem tre kanaler: tilknytningsmønstre (relationel transmission), kropslig regulering (somatisk transmission) og familiefortællinger (narrativ transmission). Effektiv behandling adresserer alle tre. Judith Hermans faseopdelte model — sikkerhed, bearbejdning, integration — gælder også på familieniveau. Somatiske tilgange og åndedrætsterapi er centrale supplement til den narrative familiebehandling.',
      cirkler: ['centrum', 'individuel', 'aandedraet']
    }
  }
];

// ============================================================
// Øvelser
// ============================================================
var OEVELSER = [
  {
    id: 'vagus-aanding',
    titel: 'Vagus-åndedræt for forældre i pres',
    tid: '5 min',
    sted: 'Hvor som helst — også midt i kaos',
    intro: 'Denne øvelse aktiverer din vagusnerve og skifter dit nervesystem fra alarm til ro. Den er designet til dig som forælder, der lever med konstant pres — fra kommunen, fra børnenes behov, fra din egen historie. Når du regulerer dig selv, kan du regulere dit barn. Det er ikke selvforkælelse — det er det vigtigste forældreredskab, du har.',
    trin: [
      'Stop hvad du laver. Du behøver ikke gå væk — du kan gøre dette stående ved køkkenbordet, på toilettet, eller i bilen.',
      'Læg én hånd på brystet og én på maven. Mærk hvilken hånd der bevæger sig mest. Hos de fleste stressede forældre er det brysthånden — det betyder, at dit nervesystem er i alarmberedskab.',
      'Ånd ind gennem næsen i 4 sekunder. Forestil dig, at du trækker vejret helt ned til den hånd, der ligger på maven.',
      'Hold vejret i 4 sekunder. Ikke anstrengt — bare en blid pause.',
      'Ånd ud gennem munden i 8 sekunder — dobbelt så lang udånding. Det er HER vagusnerven aktiveres. Den lange udånding fortæller dit nervesystem: "Der er ingen fare lige nu."',
      'Gentag 4 gange. Ved tredje gentagelse vil de fleste mærke en ændring: skuldrene falder, kæben løsner, maven begynder at bevæge sig.',
      'Mærk forskellen. Dit barn kan mærke den også — børn aflæser dit nervesystem hurtigere end dine ord.',
      'Brug denne øvelse FØR du reagerer på dit barns adfærd. Ikke efter. De 20 sekunder, det tager, kan ændre hele situationen.'
    ],
    cirkel: 'aandedraet'
  },
  {
    id: 'co-regulering',
    titel: 'Co-regulering: Lån dit barn din ro',
    tid: '10 min',
    sted: 'Hjemme — når dit barn er uroligt eller ude af sig selv',
    intro: 'Børn i udsatte familier har ofte et nervesystem, der er i konstant alarmberedskab. De kan ikke regulere sig selv — de har brug for at låne DIT nervesystem. Denne øvelse bygger på polyvagal teori og Circle of Security: du bliver den trygge havn, dit barn kan lande i. Det kræver ikke, at du siger de rigtige ord. Det kræver, at din krop er rolig.',
    trin: [
      'Når dit barn er uroligt, overtaget af følelser eller i udbrud: STOP. Tag tre dybe vagus-vejrtrækninger (lang udånding) FØR du gør noget.',
      'Sæt dig ned, så du er i barnets øjenhøjde. Ikke over barnet — ved siden af eller foran. Dit nervesystem skal signalere: "Jeg er her. Jeg er rolig. Du er ikke alene."',
      'Tal med lav, langsom stemme. Ikke hvad du siger, men HVORDAN du siger det, regulerer barnet. Prøv: "Jeg kan se, det er rigtig svært lige nu. Jeg bliver her."',
      'Hvis barnet tillader det: læg en hånd på ryggen eller skulderen. Langsom, rytmisk berøring aktiverer barnets vagusnerve. Ikke klap — bare roligt, stabilt tryk.',
      'Ånd bevidst langsomt, så barnet kan høre din vejrtrækning. Børn synkroniserer automatisk til en voksens åndedræt, når den voksne er reguleret.',
      'Forsøg IKKE at tale barnet ud af følelsen. Sig ikke "det er ikke noget at være ked af" eller "stop nu." Følelsen er reel. Din opgave er at rumme den — ikke fjerne den.',
      'Bliv i det. Også når det er ubehageligt. Mange forældre har selv lært, at stærke følelser er farlige. Men når du bliver i det med dit barn, lærer I begge noget nyt: at følelser kan holdes og gå over.',
      'Når stormen har lagt sig, kan I tale om det. Ikke før. Mentalisering — evnen til at forstå hvad der skete indeni — kræver, at nervesystemet er roligt først.'
    ],
    cirkel: 'boern'
  },
  {
    id: 'narrativ-livslinje',
    titel: 'Din families fortælling — narrativ livslinje',
    tid: '20 min',
    sted: 'Et roligt sted med papir og pen',
    intro: 'I narrativ terapi arbejder vi med den historie, du fortæller om dit liv og din familie. Mange familier i krise bærer på en "tynd historie" — en fortælling domineret af problemer, nederlag og skyld. Denne øvelse hjælper dig med at finde den "tykke historie": alle de øjeblikke, hvor du handlede med styrke, kærlighed eller mod — også selvom det ikke lykkedes perfekt. Din familie er mere end det sværeste, I har oplevet.',
    trin: [
      'Tag et stort stykke papir og tegn en vandret linje fra venstre til højre. Venstre er din fødsel, højre er nu.',
      'Marker de store begivenheder i dit liv OVER linjen: fødsler, flytninger, møder, tab, brud, anbringelser, nye begyndelser. Bare korte ord eller symboler.',
      'Nu det vigtige: marker UNDER linjen de øjeblikke, hvor du viste styrke — også den stille slags. Det kan være: "Jeg ringede til kommunen, selvom jeg var bange." "Jeg holdt mit barn, da alt andet var kaos." "Jeg sagde fra over for min partner."',
      'Kig på de øjeblikke under linjen. Hvad fortæller de om dig? Hvad er det for værdier, der har båret dig — også når det var sværest?',
      'Giv disse værdier navne. Måske er det "beskyttelse", "udholdenhed", "kærlighed trods alt", "mod til at bede om hjælp."',
      'Vælg ét af disse øjeblikke og skriv 5-10 linjer om det. Ikke hvad der var svært — men hvad DU gjorde, og hvorfor det mattered.',
      'Spørg dig selv: Hvis mit barn om 20 år læste dette, hvad ville de tænke om mig? Ofte er svaret en helt anden historie end den, du normalt fortæller om dig selv.',
      'Du kan lave denne øvelse sammen med din partner, et familiemedlem, eller alene. Fortællingen er din — og du har ret til at fortælle den forfra.'
    ],
    cirkel: 'individuel'
  },
  {
    id: 'mentalisering-par',
    titel: 'Mentalisering mellem forældre',
    tid: '20 min',
    sted: 'Hjemme — når børnene sover eller er væk',
    intro: 'Mentalisering er evnen til at forestille sig, hvad der foregår INDE I den anden — ikke kun reagere på det, der sker UDENFOR. I familier under pres kollapser mentaliseringen ofte: I reagerer på hinandens adfærd uden at forstå, hvad der ligger bag. Denne øvelse er baseret på mentaliseringsbaseret terapi (MBT) og hjælper jer med at genopbygge den bro mellem jer, som stress har nedbrudt.',
    trin: [
      'Sæt jer over for hinanden. Ingen telefoner, ingen baggrundsstøj. I har brug for 20 uforstyrrede minutter.',
      'Partner A: Beskriv en konkret situation fra den seneste uge, hvor du følte dig alene, frustreret eller overset. Vær specifik: "Da du gik ud af stuen, mens jeg talte om mødet med kommunen..."',
      'Partner B: Din opgave er KUN at lytte. Ikke forsvare dig. Ikke forklare. Bare lytte med kroppen vendt mod din partner og øjenkontakt.',
      'Partner B: Når A er færdig, sig: "Jeg tror, du følte... fordi..." — GÆT på, hvad din partner følte indeni. Du behøver ikke ramme rigtigt. Det vigtige er forsøget på at forstå.',
      'Partner A: Bekræft eller juster. "Ja, det var lige præcis det" eller "Det var tæt på, men egentlig følte jeg mere..."',
      'Byt roller. Partner B deler, Partner A lytter og mentaliserer.',
      'Afslut med at svare hinanden på dette spørgsmål: "Hvad gør mig mest sårbar lige nu — og hvad har jeg allermest brug for fra dig?"',
      'Det er normalt, at denne øvelse føles akavet eller svær de første gange. Mange forældre i pressede familier har aldrig selv oplevet at blive lyttet til på denne måde. I øver jer — og det er nok.'
    ],
    cirkel: 'parterapi'
  },
  {
    id: 'familiekort',
    titel: 'Familielandkortet — hvem står hvor?',
    tid: '15 min',
    sted: 'Hjemme med familien — alle der har lyst deltager',
    intro: 'I systemisk familieterapi arbejder vi med at synliggøre de usynlige mønstre i familien: hvem er tæt på hvem, hvem føler sig udenfor, hvem bærer mest. Denne øvelse gør det abstrakte konkret — og giver ofte overraskende indsigter. Børn er ofte exceptionelt præcise i deres familielandkort, fordi de mærker dynamikkerne direkte i kroppen.',
    trin: [
      'Find figurer — det kan være legetøjsdyr, kopper, sko, sten eller tegn cirkler på et stort papir. Hver figur repræsenterer et familiemedlem.',
      'Én person starter: Placer figurerne, som du oplever familien lige nu. Hvem er tæt på hvem? Hvem er langt fra hinanden? Hvem vender ryggen til? Hvem holder om nogen?',
      'De andre kigger på opstillingen i stilhed. Ingen rettelser endnu.',
      'Spørg den, der har opstillet: "Fortæl os, hvad du ser. Hvorfor står de sådan?" Lyt til historien bag placeringerne.',
      'Nu laver næste familiemedlem sin egen opstilling — med de samme figurer. Læg mærke til forskelle og ligheder.',
      'Hvis børn deltager: Tag deres opstilling lige så alvorligt som de voksnes. Ofte afslører børns kort ting, som voksne ikke vil sige højt — f.eks. at et barn har placeret sig selv mellem to forældre som "buffer."',
      'Afslut med at lave én fælles opstilling: "Sådan kunne vi godt tænke os, at det var." Det er ikke en plan — det er en retning.',
      'Denne øvelse kan afsløre parentificering (et barn der bærer forældreansvar), usynlige alliancer, eller isolation. Det er ikke farligt at se det — det er begyndelsen på forandring.'
    ],
    cirkel: 'familie'
  },
  {
    id: 'tryghedscirkel-barn',
    titel: 'Tryghedscirklen — øvelse for forælder og barn',
    tid: '15 min',
    sted: 'Et trygt, roligt sted — gulvet er ofte bedst',
    intro: 'Denne øvelse er inspireret af Circle of Security — tryghedscirklen — som Rikke arbejder med i sit terapeutiske arbejde. Alle børn har brug for to ting: en tryg base at gå ud fra (udforske verden) og en tryg havn at vende tilbage til (når verden bliver for meget). I udsatte familier er denne cirkel ofte brudt — barnet ved ikke, om havnen er der, når det kommer tilbage. Denne øvelse genopbygger cirklen — ét øjeblik ad gangen.',
    trin: [
      'Sid på gulvet med dit barn. Ikke i sofaen, ikke ved bordet — gulvet. Det sænker hierarkiet og gør dig tilgængelig.',
      'Sig til dit barn: "Vi skal prøve noget. Du bestemmer, hvornår du går, og hvornår du kommer tilbage. Jeg bliver her."',
      'Lad barnet bevæge sig væk fra dig — hente legetøj, kigge ud af vinduet, udforske. DU BLIVER SIDDENDE. Du er basen.',
      'Når barnet kigger tilbage mod dig (og det vil det), mød dets blik med et smil eller et nik. Det er "tankstationen" — barnet tjekker: "Er du der stadig?"',
      'Når barnet kommer tilbage til dig, tag imod det. Fysisk: åbne arme, et kram, en berøring. Sig: "Der er du. Jeg er her." Du er havnen.',
      'Gentag dette naturlige mønster: barnet går ud, barnet vender tilbage. Hver gang du er der, når barnet vender tilbage, styrker du tilknytningen.',
      'For ældre børn (8-14 år) kan du lave øvelsen verbalt: "Hvornår i denne uge havde du brug for mig? Var jeg der? Hvad ønsker du, at jeg havde gjort?"',
      'Det vigtigste er IKKE at være perfekt. Det vigtigste er reparation: "Jeg kan se, at jeg ikke var der for dig den dag. Det er jeg ked af. Hvad har du brug for nu?" Reparation er stærkere end perfektion.'
    ],
    cirkel: 'boern'
  },
  {
    id: 'somatisk-landing',
    titel: 'Somatisk landing — når kroppen bærer traumet',
    tid: '10 min',
    sted: 'Liggende eller siddende — et sted du føler dig sikker',
    intro: 'Traumer sætter sig i kroppen. Ikke kun som minder, men som spændinger, smerter, uro og en konstant følelse af at være "på vagt." Mange forældre i udsatte familier bærer årtiers uforløste traumatiske spor i deres krop — fra egen barndom, fra vold, fra tab, fra systemsvigt. Denne øvelse er baseret på somatisk traumeterapi og hjælper dig med langsomt at genopbygge kontakten til din krop som et sikkert sted at være.',
    trin: [
      'Find en position, hvor du føler dig SIKKER. For mange med traumehistorik er det IKKE at ligge med lukkede øjne — det kan føles sårbart. Sid gerne op med åbne øjne og ryggen mod en væg. Sikkerhed først.',
      'Begynd med fødderne. Pres dem mod gulvet. Mærk gulvet presse tilbage. Sig til dig selv: "Jeg er her. Gulvet holder mig."',
      'Scan langsomt op gennem kroppen — ikke for at finde noget galt, men for at mærke, hvad der ER. Mærk benene, hofterne, maven, brystet, skuldrene.',
      'Når du møder et sted med spænding, uro eller ubehag: BLIV DER et øjeblik. Ikke for at fikse det. Bare for at anerkende det. Prøv at sige indeni: "Jeg kan mærke dig. Du har båret noget for mig."',
      'Læg en hånd på det sted i kroppen, der har mest brug for opmærksomhed. Mange traumeoverlevere mærker det i maven, brystet eller halsen. Din hånd er en anker — et signal om, at du er til stede for dig selv.',
      'Ånd langsomt ind og forestil dig, at åndedrættet når helt hen til det sted, din hånd hviler. Ånd ud og forestil dig, at spændingen opløses en lille smule. Ikke alt — bare en lille smule.',
      'Afslut med at mærke hele din krop som en helhed. Mærk, at du sidder her, at du har overlevet alt det, der bragte dig hertil. Din krop har beskyttet dig. Nu kan du begynde at fortælle den, at faren er forbi.',
      'Vigtig note: Hvis denne øvelse fremkalder stærke følelser eller minder, er det et tegn på, at kroppen begynder at slippe. Det er ikke farligt, men det kan kræve professionel støtte. Rikke kan hjælpe dig videre.'
    ],
    cirkel: 'individuel'
  },
  {
    id: 'generationsbrev',
    titel: 'Brev til den forælder, du gerne vil være',
    tid: '15 min',
    sted: 'Et stille sted med papir og pen',
    intro: 'Mange forældre i udsatte familier kæmper med intergenerationelle mønstre: de opdrager ud fra det, de selv oplevede — eller i desperat modstand mod det. Denne narrative øvelse hjælper dig med at skille fortid fra nutid og bevidst vælge, hvilken forælder du vil være — ikke ud fra skyld eller skam, men ud fra dine dybeste værdier for dine børn.',
    trin: [
      'Skriv øverst på papiret: "Kære mig selv som forælder."',
      'Skriv først tre ting, du fik med fra din egen barndom, som du IKKE vil give videre. Vær specifik: ikke "dårlig barndom", men f.eks. "tavshed om følelser", "at blive straffet for at græde", "at ingen forklarede, hvad der skete."',
      'Skriv nu tre ting fra din barndom, du gerne vil BEVARE — også små ting. Måske en bedstemor, der lyttede. En tradition. Et øjeblik af tryghed. Disse ting er dit fundament.',
      'Skriv nu til dit barn (eller dine børn) — som om de er voksne og læser dette om 20 år: "Det vigtigste for mig som din forælder var..."',
      'Skriv om de kampe, du kæmper NU for at bryde mønstret. Det er ikke en indrømmelse af svaghed — det er dokumentation af mod. Skriv f.eks.: "Jeg kæmpede for at lære at holde min vrede, fordi min far ikke kunne."',
      'Skriv én konkret ting, du vil gøre anderledes DENNE UGE. Ikke et stort løfte. En lille, konkret handling. F.eks.: "Jeg vil sætte mig ned, når mit barn taler til mig" eller "Jeg vil sige undskyld, når jeg har råbt."',
      'Fold brevet sammen og gem det et sted, du kan finde det igen. Tag det frem, når skammen eller tvivlen melder sig. Det er dit kompas.',
      'Husk: At du overvejer disse spørgsmål, viser allerede, at du er en anden forælder end den, du selv havde. Mønstret er allerede begyndt at brydes.'
    ],
    cirkel: 'relationer'
  }
];

// ============================================================
// Øvelsesrefleksioner (spørgsmål efter hver øvelse)
// ============================================================
var OEVELSE_REFLEKSIONER = {
  'vagus-aanding': {
    privat: ['Hvad lagde du mærke til i kroppen, da du skiftede til den lange udånding?', 'Hvornår på dagen ville denne øvelse gøre mest forskel for dig?'],
    professionel: ['Hvilken effekt observerede du på din egen reguleringskapacitet?', 'Hvordan ville du tilpasse denne øvelse til en forælder med begrænset kropsbevidsthed?']
  },
  'co-regulering': {
    privat: ['Hvordan reagerede dit barn, da du blev stille i stedet for at tale?', 'Hvad var det sværeste ved at blive i det — uden at "løse" noget?'],
    professionel: ['Hvilke tilknytningsstrategier observerede du hos barnet under øvelsen?', 'Hvordan påvirkede din egen reguleringstilstand barnets respons?']
  },
  'narrativ-livslinje': {
    privat: ['Hvilket øjeblik under linjen overraskede dig mest?', 'Hvad ville du ønske, at du kunne fortælle dit yngre jeg om de styrker, du fandt?'],
    professionel: ['Hvilke alternative fortællinger dukkede op, som klienten ikke selv havde set?', 'Hvor ser du potentiale for "re-authoring" i denne families narrativ?']
  },
  'mentalisering-par': {
    privat: ['Hvad overraskede dig ved din partners svar?', 'Hvornår i hverdagen kunne I bruge denne form for lytning — uden at det behøver være en øvelse?'],
    professionel: ['Hvor brød mentaliseringen sammen, og hvad triggede det?', 'Hvilke præ-mentaliserende tilstande (konkret, psykisk ækvivalens, pretend mode) observerede du?']
  },
  'familiekort': {
    privat: ['Var der noget i opstillingen, der overraskede dig?', 'Hvis du lavede kortet igen om et halvt år — hvad håber du ville se anderledes ud?'],
    professionel: ['Hvilke systemiske mønstre blev synlige gennem familiemedlemmernes forskellige opstillinger?', 'Var der tegn på parentificering, koalitioner eller triangulering?']
  },
  'tryghedscirkel-barn': {
    privat: ['Hvad mærkede du i dig selv, da dit barn vendte tilbage til dig?', 'Er der situationer i hverdagen, hvor du kan øve dig i at være "havnen" — bare ved at blive?'],
    professionel: ['Hvilken tilknytningsstrategi udviste barnet (sikker, undgående, ambivalent, desorganiseret)?', 'Hvordan reagerede forælderen på barnets tilbagevendingsadfærd?']
  },
  'somatisk-landing': {
    privat: ['Hvilken del af kroppen "svarede" først, da du landede i den?', 'Hvad overraskede dig mest ved at mærke efter i stedet for at tænke?'],
    professionel: ['Hvilke somatiske markører identificerede du hos dig selv under øvelsen?', 'Hvordan ville du guide en klient med dissociative tendenser gennem denne øvelse?']
  },
  'generationsbrev': {
    privat: ['Hvad var det sværeste at skrive — og hvad lettede mest?', 'Hvis dit barn læste dette brev som voksen, hvad ville du håbe, de tog med sig?'],
    professionel: ['Hvilke intergenerationelle mønstre blev tydelige gennem brevskrivningen?', 'Hvor ser du mulighed for at bryde den transgenerationelle transmission?']
  }
};

// ============================================================
// Daglige refleksionsspørgsmål (pulje til rotation)
// ============================================================
var REFLEKSIONER = {
  privat: [
    // Forbindelse
    { id: 'r01', tekst: 'Hvad skaber mest forbindelse i din familie — og hvornår sker det?', tema: 'forbindelse' },
    { id: 'r02', tekst: 'Hvem i dit liv får dig til at føle dig mest som dig selv?', tema: 'forbindelse' },
    { id: 'r03', tekst: 'Hvad gør I som familie, når det er allerbedst?', tema: 'forbindelse' },
    // Mønstre
    { id: 'r04', tekst: 'Hvad er noget, du gerne vil gøre anderledes end dine egne forældre? Hvad vil du tage med videre?', tema: 'mønstre' },
    { id: 'r05', tekst: 'Hvornår reagerer du mest automatisk — og hvad ville du ønske, du gjorde i stedet?', tema: 'mønstre' },
    { id: 'r06', tekst: 'Er der noget i jeres hverdag, der gentager sig, og som du godt kunne tænke dig at ændre?', tema: 'mønstre' },
    // Styrke
    { id: 'r07', tekst: 'Hvad har du klaret i dit liv, som du godt kan være stolt af — også selvom det ikke var perfekt?', tema: 'styrke' },
    { id: 'r08', tekst: 'Hvad ville dit barn sige, du er rigtig god til som forælder?', tema: 'styrke' },
    { id: 'r09', tekst: 'Hvornår i denne uge mærkede du, at du håndterede noget godt? Hvad gjorde du?', tema: 'styrke' },
    // Ro & krop
    { id: 'r10', tekst: 'Hvad hjælper dig med at finde ro — og hvornår gør du det?', tema: 'ro' },
    { id: 'r11', tekst: 'Hvordan kan du mærke i kroppen, om du har en god dag eller en svær dag?', tema: 'ro' },
    { id: 'r12', tekst: 'Hvad ville du gøre mere af, hvis du havde én ekstra time til dig selv om ugen?', tema: 'ro' },
    // Perspektiv
    { id: 'r13', tekst: 'Hvad er én ting, der er bedre i dag end for et halvt år siden — også selvom det er småt?', tema: 'perspektiv' },
    { id: 'r14', tekst: 'Hvad ønsker du for din familie om et år? Hvad er ét lille skridt i den retning?', tema: 'perspektiv' },
    { id: 'r15', tekst: 'Hvis en god ven beskrev din familie — hvad ville de fremhæve, som du måske overser?', tema: 'perspektiv' }
  ],
  professionel: [
    // Faglig refleksion
    { id: 'rp01', tekst: 'Hvilken teoretisk tilgang har du brugt mest denne uge — og virkede den, som du forventede?', tema: 'faglig refleksion' },
    { id: 'rp02', tekst: 'Hvad er det vigtigste, du har lært af en klient i den seneste tid?', tema: 'faglig refleksion' },
    { id: 'rp03', tekst: 'Hvilken intervention overraskede dig positivt denne uge?', tema: 'faglig refleksion' },
    // Relationel bevidsthed
    { id: 'rp04', tekst: 'Hvordan påvirker din egen baggrund den måde, du møder familier på?', tema: 'relationel bevidsthed' },
    { id: 'rp05', tekst: 'Hvornår i denne uge var du mest nærværende i en session — og hvad gjorde forskellen?', tema: 'relationel bevidsthed' },
    { id: 'rp06', tekst: 'Er der en familie, du synes fungerer særligt godt med? Hvad handler det om?', tema: 'relationel bevidsthed' },
    // Systemisk blik
    { id: 'rp07', tekst: 'Hvilke mønstre ser du gå igen på tværs af de familier, du arbejder med?', tema: 'systemisk blik' },
    { id: 'rp08', tekst: 'Hvis du kunne ændre én ting i det system, familierne befinder sig i — hvad ville det være?', tema: 'systemisk blik' },
    { id: 'rp09', tekst: 'Hvornår har du sidst set et gennembrud — og hvad muliggjorde det?', tema: 'systemisk blik' },
    // Selvomsorg
    { id: 'rp10', tekst: 'Hvad gør du for at passe på dig selv mellem sessioner? Er det nok?', tema: 'selvomsorg' },
    { id: 'rp11', tekst: 'Hvornår har du sidst søgt sparring eller supervision — og hvad fik du ud af det?', tema: 'selvomsorg' },
    { id: 'rp12', tekst: 'Hvad giver dig energi i dit arbejde — og hvad dræner?', tema: 'selvomsorg' }
  ]
};

// ============================================================
// Tilstande (nervesystem-trappe)
// ============================================================
var TRAPPEN = [
  {
    trin: 1,
    navn: 'Tryghed & forbindelse',
    farve: 'sage',
    privat: {
      beskrivelse: 'Dit ventrale vagale system er aktivt — du er i din "tryghedszone." Du kan mærke dig selv, mærke andre, og være til stede uden at være på vagt. For mange forældre i udsatte familier er denne tilstand sjælden og uvant. Måske kender du den kun i korte glimt. Det er okay. Hvert glimt tæller — og jo mere du øver dig i at genkende denne tilstand, jo lettere kan du finde tilbage til den.',
      kropsSignaler: ['Åndedrættet er langsomt og når ned i maven', 'Skuldrene er sænkede — uden at du tænker over det', 'Du kan holde øjenkontakt med dit barn uden ubehag', 'Stemmen er blød og varm — dit barn kan høre det'],
      handlinger: ['Brug dette øjeblik til at forbinde med dit barn — bare et blik, et smil, en berøring', 'Del noget, der fylder, med en du stoler på', 'Mærk den ro, der er her lige nu — den er reel, også selvom den er kort', 'Hvis dit barn er i nærheden: lad dem mærke din ro. De regulerer sig efter dig.'],
      oevelser: ['co-regulering', 'familiekort', 'generationsbrev']
    },
    professionel: {
      beskrivelse: 'Ventral vagal tilstand (Porges): det sociale engagementsystem er fuldt aktivt. Klienten har adgang til mentalisering, refleksion og relationel kontakt. Dette er det optimale vindue for narrativt arbejde, for udforskning af tilknytningsmønstre, og for at bearbejde traumatiske oplevelser. I udsatte familier er denne tilstand ofte underudviklet — familiens "tryghedsmuskel" har ikke haft mulighed for at træne.',
      kropsSignaler: ['Reguleret diafragmatisk respiration', 'Prosodisk stemmeføring med variation', 'Responsiv ansigtsmimik — klienten "møder" dig', 'Afslappet muskulatur, særligt kæbe og skuldre'],
      handlinger: ['Udnyt vinduet til narrativt arbejde: eksternaliser problemhistorien, udforsk alternative fortællinger', 'Facilitér mentalisering mellem familiemedlemmer — "hvad tror du, din datter følte i det øjeblik?"', 'Arbejd med Circle of Security: styrk forælderens evne til at være tryg base og tryg havn', 'Konsolidér nye erfaringer somatisk — lad klienten mærke i kroppen, hvad det vil sige at være tryg'],
      oevelser: ['mentalisering-par', 'familiekort', 'generationsbrev']
    }
  },
  {
    trin: 2,
    navn: 'Alarm & aktivering',
    farve: 'amber',
    privat: {
      beskrivelse: 'Dit sympatiske nervesystem er aktiveret — kamp-eller-flugt. Du mærker det som vrede, uro, angst eller en intens trang til at handle LIGE NU. For forældre med traumehistorik kan denne tilstand trigges af ting, der objektivt set er små: dit barn, der ikke lytter, en opringning fra kommunen, en stemme der lyder som noget fra fortiden. Din krop reagerer, som om faren er her NU — selvom den egentlig hører til dengang.',
      kropsSignaler: ['Hjertet banker hurtigt — du kan mærke pulsen i halsen', 'Musklerne spænder, særligt kæbe, skuldre og hænder', 'Åndedrættet er hurtigt og højt i brystet', 'Du kan ikke tænke klart — hjernen "lukker ned" for nuancer'],
      handlinger: ['STOP før du reagerer. 20 sekunder vagus-åndedræt kan ændre alt: 4 sekunder ind, 8 sekunder ud', 'Mærk fødderne mod gulvet — det fortæller dit nervesystem, at du er HER, ikke DENGANG', 'Sig til dig selv: "Min krop reagerer på noget gammelt. Faren er ikke reel lige nu."', 'Hvis du mærker, at du er ved at reagere på dit barn fra dette sted: gå væk i 2 minutter. Ikke som straf. Som beskyttelse — for jer begge.'],
      oevelser: ['vagus-aanding', 'somatisk-landing', 'co-regulering']
    },
    professionel: {
      beskrivelse: 'Sympatisk aktivering: kamp-flugt-systemet dominerer. I familier med traumehistorik er dette ofte kronisk — nervesystemet har lært, at verden er farlig, og forbliver i alarmberedskab. Klienten kan fremstå agiteret, konfronterende, hypervigilant eller panikslagen. Mentalisering er kompromitteret — klienten reagerer fra det limbiske system, ikke fra præfrontal cortex. Prioritér ALTID regulering før bearbejdning.',
      kropsSignaler: ['Forhøjet autonom arousal: takykardi, hypertension, mydriasis', 'Muskelspændinger, særligt aksiale muskler og kæbe', 'Hypervigilans — klienten scanner konstant for fare', 'Respiration er thorakal og hurtig — vagal bremse er deaktiveret'],
      handlinger: ['Down-regulér gennem samstemning: match først energiniveau, sænk derefter gradvist', 'Brug polyvagale interventioner: forlænget udånding, stemmelejevariation, langsom rytmisk bevægelse', 'Validér nervesystemets reaktion — "Din krop gør præcis, hvad den har lært at gøre for at beskytte dig"', 'Undgå konfrontation og fortolkning i denne tilstand — hjernen kan ikke processere det. Regulér først, mentaliser bagefter.'],
      oevelser: ['vagus-aanding', 'somatisk-landing', 'co-regulering']
    }
  },
  {
    trin: 3,
    navn: 'Overbelastning & nedlukning',
    farve: 'rose',
    privat: {
      beskrivelse: 'Dit dorsale vagale system har taget over — din krop har lukket ned for at beskytte dig. Du føler dig tom, fjern, udmattet eller "ikke rigtig til stede." For mange forældre med traumehistorik er dette en velkendt tilstand — du har overlevet ved at koble fra. Det var en klog strategi dengang. Men nu gør den det svært at være til stede for dit barn og for dig selv. Vejen tilbage er langsom, blid og kræver ikke, at du "tager dig sammen."',
      kropsSignaler: ['Følelsesløshed eller tomhed — som om du ser livet udefra', 'Dyb træthed, der ikke forsvinder med søvn', 'Svært at mærke kroppen, følelser eller behov', 'Følelse af at være "bag glas" — til stede, men ikke rigtigt der'],
      handlinger: ['Start med det allermest konkrete: mærk vandet mod hænderne, en varm kop i hånden, fødderne mod gulvet', 'Bevæg dig langsomt — gå en kort tur, stræk dig, ryst kroppen let. Bevægelse fortæller nervesystemet, at du ikke er frosset fast', 'Opsøg en anden person — du behøver ikke tale om det. Bare at sidde i nærheden af et andet reguleret nervesystem hjælper', 'Vær tålmodig med dig selv. Nedlukning er ikke svaghed. Det er det mest avancerede beskyttelsessystem, din krop har. Det tog tid at komme hertil — det tager tid at komme tilbage.'],
      oevelser: ['somatisk-landing', 'vagus-aanding', 'narrativ-livslinje']
    },
    professionel: {
      beskrivelse: 'Dorsal vagal tilstand (Porges): immobiliseringsresponsen er aktiv. Klienten er i hypoarousal — under det terapeutiske vindue. Kan fremstå dissocieret, affladtet, fjern eller "compliant uden kontakt." I udsatte familier ses dette ofte hos forældre med kompleks PTSD og langvarig omsorgssvigt — nervesystemet har lært, at afkobling er den sikreste strategi. Denne tilstand kræver den mest varsomme, graduerede tilgang.',
      kropsSignaler: ['Hypoton muskulatur — kroppen virker "tung" eller kollapset', 'Monoton, lav stemme uden prosodisk variation', 'Reduceret eller fraværende ansigtsmimik', 'Begrænset øjenkontakt — blikket er "tomt" eller rettet nedad'],
      handlinger: ['Aktivér forsigtigt gennem sensorisk stimulering: temperatur, berøring, lugt — bottom-up interventioner der omgår kognitiv processering', 'Arbejd med orientering: "Kan du se dig omkring? Hvad lægger du mærke til i rummet?" — genaktivér det sociale engagementsystem gradvist', 'Hold en langsom, varm stemme med prosodisk variation — din stemme ER en polyvagal intervention', 'ALDRIG pres klienten til at "mærke" eller "være til stede." Følg nervesystemets tempo. Tilbyd små, sikre invitationer. Reparation af dorsal vagal tilstand tager tid — og det er okay.'],
      oevelser: ['somatisk-landing', 'vagus-aanding', 'narrativ-livslinje']
    }
  }
];

// ============================================================
// Morgen Check-in — 25 varianter
// Hver variant: spørgsmål, svar-knapper med respons + link
// ============================================================
var MORGEN_CHECKIN = [
  {
    spoergsmaal: 'Hvordan mærker du dig selv lige nu?',
    svar: [
      { label: 'Rolig', respons: 'Det er et godt udgangspunkt. Måske er det i dag, du kan mærke lidt mere af det, der ellers forsvinder i støjen.', link: 'temaer', linkTekst: 'Udforsk et tema' },
      { label: 'Urolig', respons: 'Når kroppen er i alarm, er det svært at tænke klart. Start med åndedrættet — det er den hurtigste vej til ro.', link: 'oevelser', linkTekst: 'Prøv en øvelse' },
      { label: 'Tung', respons: 'Nogle morgener vejer mere end andre. Du behøver ikke løfte det hele. Bare én ting.', link: 'muligt', linkTekst: 'Hvad er muligt lige nu?' },
      { label: 'Ved ikke', respons: 'Det er også et svar. Bare det at du er her, er nok.', link: 'hjem', linkTekst: 'Udforsk i dit tempo' }
    ]
  },
  {
    spoergsmaal: 'Hvad fylder mest i dig her til morgen?',
    svar: [
      { label: 'Bekymring', respons: 'Bekymringer fylder, fordi du holder af nogen. Lad os se, om der er ét lille sted at starte.', link: 'muligt', linkTekst: 'Find ét skridt' },
      { label: 'Tristhed', respons: 'Tristhed er ikke svaghed. Den fortæller dig, at noget betyder noget. Giv den plads.', link: 'temaer', linkTekst: 'Læs om tab & sorg' },
      { label: 'Vrede', respons: 'Vrede er energi. Den viser dig, hvor dine grænser er. Spørgsmålet er, hvad du vil gøre med den.', link: 'trappen', linkTekst: 'Se hvor du er på trappen' },
      { label: 'Håb', respons: 'Hold fast i det. Selv det mindste håb er en dør, der står på klem.', link: 'hjem', linkTekst: 'Udforsk videre' }
    ]
  },
  {
    spoergsmaal: 'Hvis din krop kunne sige én ting — hvad ville det være?',
    svar: [
      { label: 'Jeg er træt', respons: 'Din krop beder om pause. Ikke nødvendigvis søvn — men et øjeblik uden krav. Start med tre dybe åndedrag.', link: 'oevelser', linkTekst: 'Prøv åndedrættet' },
      { label: 'Jeg er anspændt', respons: 'Spændinger er kroppens måde at beskytte dig på. Lad os hjælpe den med at slippe, bare lidt.', link: 'trappen', linkTekst: 'Forstå dit nervesystem' },
      { label: 'Jeg er rastløs', respons: 'Rastløshed er bevægelse, der leder efter en retning. Måske er der noget, der vil have opmærksomhed.', link: 'temaer', linkTekst: 'Find dit tema' },
      { label: 'Jeg har det ok', respons: 'Det er værd at lægge mærke til. Gode øjeblikke fortjener opmærksomhed — også de stille.', link: 'hjem', linkTekst: 'Nyd roen' }
    ]
  },
  {
    spoergsmaal: 'Hvor er du på trappen lige nu?',
    svar: [
      { label: 'Tryg', respons: 'Når du er i dit tolerancevindue, er du bedst til at møde dig selv og andre. Brug det.', link: 'temaer', linkTekst: 'Udforsk et nyt tema' },
      { label: 'Aktiveret', respons: 'Dit sympatiske nervesystem er tændt. Det er ikke farligt — men det er vigtigt at mærke det, før det styrer dig.', link: 'trappen', linkTekst: 'Lær mere om trappen' },
      { label: 'Lukket ned', respons: 'Når kroppen lukker ned, har den brug for varme — ikke krav. Vær blid med dig selv.', link: 'oevelser', linkTekst: 'Start blødt med en øvelse' },
      { label: 'Skifter hele tiden', respons: 'Det er normalt, især under pres. Dit nervesystem søger balance. Lad os finde et anker.', link: 'oevelser', linkTekst: 'Find et anker' }
    ]
  },
  {
    spoergsmaal: 'Hvad har du brug for i dag?',
    svar: [
      { label: 'Ro', respons: 'Ro er ikke dovenskab. Det er genopladning. Giv dig selv lov.', link: 'oevelser', linkTekst: 'Øvelse til ro' },
      { label: 'Mod', respons: 'Mod handler ikke om at være frygtløs. Det handler om at tage næste skridt, selvom det er svært.', link: 'muligt', linkTekst: 'Tag ét skridt' },
      { label: 'At blive set', respons: 'Det er menneskeligt at have brug for vidner. Du er ikke alene i det, du bærer.', link: 'temaer', linkTekst: 'Du er ikke alene' },
      { label: 'Overblik', respons: 'Når alt flyder sammen, hjælper det at sortere. Én ting ad gangen.', link: 'muligt', linkTekst: 'Skab overblik' }
    ]
  },
  {
    spoergsmaal: 'Er der noget, du bærer med fra i går?',
    svar: [
      { label: 'En konflikt', respons: 'Konflikter efterlader spor i kroppen. Det vigtigste nu er ikke at løse den — men at regulere dig selv først.', link: 'trappen', linkTekst: 'Tjek dit nervesystem' },
      { label: 'En god stund', respons: 'Gem den. Gode stunder er brændstof. Læg mærke til, hvad der gjorde den mulig.', link: 'hjem', linkTekst: 'Fortsæt herfra' },
      { label: 'Dårlig samvittighed', respons: 'Samvittighed viser, at du holder af. Men den må ikke fylde så meget, at den lammer dig. Hvad kan du gøre i dag?', link: 'muligt', linkTekst: 'Hvad er muligt nu?' },
      { label: 'Ingenting særligt', respons: 'Også fint. Ikke alle dage behøver at være tunge. Nogle dage bare er.', link: 'hjem', linkTekst: 'Bare vær her' }
    ]
  },
  {
    spoergsmaal: 'Hvem tænker du på lige nu?',
    svar: [
      { label: 'Mit barn', respons: 'Dit barn mærker dig, før du siger noget. Når du regulerer dig selv, giver du dit barn lov til at slappe af.', link: 'trappen', linkTekst: 'Start med dig selv' },
      { label: 'Min partner', respons: 'Parforholdet er familiens fundament. Selv små bevægelser mod hinanden gør en forskel.', link: 'temaer', linkTekst: 'Læs om parforholdet' },
      { label: 'Mig selv', respons: 'At tænke på dig selv er ikke egoistisk. Det er nødvendigt. Du kan ikke give fra en tom kop.', link: 'oevelser', linkTekst: 'Gør noget for dig' },
      { label: 'Hele familien', respons: 'Familien er et system. Når du bevæger dig, bevæger alle sig. Start med det, du kan.', link: 'hjem', linkTekst: 'Se helheden' }
    ]
  },
  {
    spoergsmaal: 'Hvis du kun måtte løfte én ting i dag — hvad ville det være?',
    svar: [
      { label: 'Noget praktisk', respons: 'Praktiske ting kan give kontrol tilbage. Vælg den mindste opgave og gør den færdig. Det tæller.', link: 'muligt', linkTekst: 'Skriv det ned' },
      { label: 'En relation', respons: 'Relationer kræver nærvær, ikke perfektion. Ét øjeblik af ægte kontakt er nok.', link: 'temaer', linkTekst: 'Forstå relationen' },
      { label: 'Min egen tilstand', respons: 'Det vigtigste arbejde er ofte det usynlige. At regulere dig selv er en gave til alle omkring dig.', link: 'oevelser', linkTekst: 'Start her' },
      { label: 'Jeg ved det ikke', respons: 'Når du ikke ved, er det ærligt. Giv det lidt tid. Svaret kommer, når kroppen er klar.', link: 'hjem', linkTekst: 'Tag det roligt' }
    ]
  },
  {
    spoergsmaal: 'Hvordan sov du i nat?',
    svar: [
      { label: 'Godt', respons: 'Søvn er kroppens vigtigste reparation. Tag det med som et godt fundament i dag.', link: 'hjem', linkTekst: 'God start' },
      { label: 'Uroligt', respons: 'Urolig søvn fortæller, at nervesystemet stadig arbejder. Åndedrættet kan hjælpe med at finde ro.', link: 'oevelser', linkTekst: 'Prøv åndedrætsøvelse' },
      { label: 'For lidt', respons: 'Når kroppen mangler søvn, er tærsklen lavere. Vær ekstra venlig mod dig selv i dag.', link: 'trappen', linkTekst: 'Vær opmærksom i dag' },
      { label: 'Kunne ikke falde i søvn', respons: 'Tankemylder holder nervesystemet aktivt. Prøv at lande i kroppen i stedet for i hovedet.', link: 'oevelser', linkTekst: 'Øvelse til landing' }
    ]
  },
  {
    spoergsmaal: 'Hvad er det første, du mærker i kroppen lige nu?',
    svar: [
      { label: 'Spænding i skuldrene', respons: 'Skuldrene bærer det, du ikke siger højt. Lad dem falde — bare et øjeblik. Du behøver ikke bære det hele.', link: 'oevelser', linkTekst: 'Slip spændingen' },
      { label: 'Knude i maven', respons: 'Maven reagerer på det ubevidste. Der er noget, der vil have opmærksomhed. Du behøver ikke løse det — bare mærke det.', link: 'trappen', linkTekst: 'Forstå signalet' },
      { label: 'Tyngde', respons: 'Tyngde er kroppens måde at sige: langsomt. Følg dens tempo i dag.', link: 'oevelser', linkTekst: 'Start langsomt' },
      { label: 'Ingenting særligt', respons: 'Nogle gange er kroppen stille. Det er fint. Den taler, når den er klar.', link: 'hjem', linkTekst: 'Fortsæt stille' }
    ]
  },
  {
    spoergsmaal: 'Hvad ville du sige til dig selv, hvis du var din egen bedste ven?',
    svar: [
      { label: 'Du gør det godt nok', respons: '"Godt nok" er ikke en undskyldning — det er sandheden. Perfektionisme er traumets forklædning.', link: 'temaer', linkTekst: 'Læs om skam & skyld' },
      { label: 'Det bliver bedre', respons: 'Og det gør det. Ikke fordi alt fikser sig selv — men fordi du allerede er i bevægelse.', link: 'hjem', linkTekst: 'Se din bevægelse' },
      { label: 'Tag en pause', respons: 'Pause er ikke opgivelse. Det er regulering. Din krop ved bedst.', link: 'oevelser', linkTekst: 'Tag en pause nu' },
      { label: 'Bed om hjælp', respons: 'At bede om hjælp er styrke, ikke svaghed. Ingen klarer det alene — og det skal du heller ikke.', link: 'temaer', linkTekst: 'Du er ikke alene' }
    ]
  },
  {
    spoergsmaal: 'Hvis denne dag kunne give dig én ting — hvad ville det være?',
    svar: [
      { label: 'Lethed', respons: 'Lethed kommer i små glimt. Ikke som fravær af problemer, men som øjeblikke hvor du glemmer dem.', link: 'hjem', linkTekst: 'Find et glimt' },
      { label: 'Forbindelse', respons: 'Vi er skabt til forbindelse. Ét ægte øjeblik med et andet menneske kan ændre en hel dag.', link: 'temaer', linkTekst: 'Forstå forbindelsen' },
      { label: 'Klarhed', respons: 'Klarhed kommer sjældent af at tænke mere. Den kommer af at stoppe op og mærke, hvad der er vigtigt.', link: 'muligt', linkTekst: 'Sortér det vigtige' },
      { label: 'Bare at overleve', respons: 'Det er nok. Overlevelse er ikke fiasko — det er fundament. Du er her. Det tæller.', link: 'trappen', linkTekst: 'Mærk hvor du er' }
    ]
  },
  {
    spoergsmaal: 'Hvad gør dig mest sårbar lige nu?',
    svar: [
      { label: 'Ensomhed', respons: 'Ensomhed i en familie er en af de tungeste ting. Du er ikke forkert — du mangler at blive mødt.', link: 'temaer', linkTekst: 'Om isolation' },
      { label: 'Magtkampe', respons: 'Magtkampe handler sjældent om magt. De handler om at blive hørt. Hvad vil du egentlig sige?', link: 'temaer', linkTekst: 'Forstå konflikten' },
      { label: 'Børnenes reaktioner', respons: 'Børn reagerer på det, de mærker — ikke det, de bliver fortalt. Deres adfærd er kommunikation.', link: 'hjem', linkTekst: 'Se barnets perspektiv' },
      { label: 'Min egen historie', respons: 'Dine sår gør dig ikke til en dårlig forælder. De gør dig til et menneske, der kæmper. Det er modigt.', link: 'oevelser', linkTekst: 'Start med dig selv' }
    ]
  },
  {
    spoergsmaal: 'Mærker du mere frygt eller mere håb lige nu?',
    svar: [
      { label: 'Mest frygt', respons: 'Frygt er nervesystemets alarmklokke. Den beskytter dig — men den behøver ikke styre dig.', link: 'trappen', linkTekst: 'Regulér frygten' },
      { label: 'Mest håb', respons: 'Håb er ikke naivt. Det er dit nervesystem, der siger: der er muligheder her. Følg det.', link: 'muligt', linkTekst: 'Grib muligheden' },
      { label: 'Begge dele', respons: 'Det er det mest menneskelige svar. Frygt og håb lever side om side. Du behøver ikke vælge.', link: 'hjem', linkTekst: 'Lad begge dele være' },
      { label: 'Hverken eller', respons: 'Følelsesløshed kan være kroppens pause-knap. Den beskytter dig, men den holder dig også væk.', link: 'oevelser', linkTekst: 'Kom tilbage til kroppen' }
    ]
  },
  {
    spoergsmaal: 'Hvad har du brug for at høre i dag?',
    svar: [
      { label: 'At det er okay', respons: 'Det er okay. Ikke alt behøver at være løst. Ikke alt behøver at give mening. Det er okay, som det er lige nu.', link: 'hjem', linkTekst: 'Bare vær her' },
      { label: 'At jeg ikke er alene', respons: 'Du er ikke alene. Tusindvis af familier kæmper med det samme. Din kamp gør dig ikke isoleret — den forbinder dig.', link: 'temaer', linkTekst: 'Andre kender det' },
      { label: 'At der er en vej', respons: 'Der er en vej. Den er ikke altid synlig, og den er sjældent lige. Men den er der.', link: 'muligt', linkTekst: 'Se næste skridt' },
      { label: 'At jeg gør det godt nok', respons: 'Du gør det godt nok. Ikke perfekt — godt nok. Og det er præcis nok.', link: 'oevelser', linkTekst: 'Giv dig selv credit' }
    ]
  },
  {
    spoergsmaal: 'Hvilken rolle fylder mest i dig lige nu?',
    svar: [
      { label: 'Forælder', respons: 'At være forælder under pres er udmattende. Husk: dit barn har ikke brug for en perfekt forælder — men en tilstrækkelig én.', link: 'hjem', linkTekst: 'Giv dig selv ro' },
      { label: 'Partner', respons: 'Parforholdet under pres er som at bygge bro i storm. Det kræver tålmodighed — med dig selv og den anden.', link: 'temaer', linkTekst: 'Om parforholdet' },
      { label: 'Mig selv', respons: 'Du eksisterer også uden dine roller. Den person, du var før alt det her — den er der stadig.', link: 'oevelser', linkTekst: 'Find dig selv' },
      { label: 'Alt på én gang', respons: 'Når alt skal alt på én gang, knager fundamentet. Vælg én rolle i dag. Resten venter.', link: 'muligt', linkTekst: 'Prioritér i dag' }
    ]
  },
  {
    spoergsmaal: 'Hvordan ville du beskrive din energi lige nu?',
    svar: [
      { label: 'Fuld af energi', respons: 'Brug den klogt. Energi er en ressource — og du bestemmer, hvor den skal hen.', link: 'muligt', linkTekst: 'Sæt den i spil' },
      { label: 'Neutral', respons: 'Neutral er undervurderet. Det er herfra, du kan vælge frit. Nyd det stille øjeblik.', link: 'hjem', linkTekst: 'Udforsk roligt' },
      { label: 'Lav', respons: 'Lav energi er kroppens besked: gør mindre, ikke mere. Hvad kan du droppe i dag?', link: 'oevelser', linkTekst: 'Genoplad stille' },
      { label: 'Svingende', respons: 'Svingende energi afspejler et nervesystem i bevægelse. Det er ikke ustabilitet — det er regulering i gang.', link: 'trappen', linkTekst: 'Forstå svingningerne' }
    ]
  },
  {
    spoergsmaal: 'Hvad ville hjælpe dig mest lige nu?',
    svar: [
      { label: 'At forstå mere', respons: 'Forståelse skaber ro. Når du ved, hvad der sker, mister det noget af sin magt.', link: 'temaer', linkTekst: 'Lær noget nyt' },
      { label: 'At gøre noget konkret', respons: 'Handling er medicin mod magtesløshed. Selv den mindste handling ændrer dynamikken.', link: 'muligt', linkTekst: 'Gør én ting' },
      { label: 'At mærke min krop', respons: 'Kroppen ved ofte mere end hovedet. Når du lander i den, finder du svar, tanken ikke kan give.', link: 'oevelser', linkTekst: 'Land i kroppen' },
      { label: 'Bare at trække vejret', respons: 'Så gør det. Tre dybe åndedrag. Ind gennem næsen, ud gennem munden. Du har tid.', link: 'oevelser', linkTekst: 'Åndedrættet' }
    ]
  },
  {
    spoergsmaal: 'Hvad ser du, når du kigger på din familie lige nu?',
    svar: [
      { label: 'Kærlighed under pres', respons: 'Kærlighed under pres er stadig kærlighed. Den er bare svær at få øje på, når alarmen kører.', link: 'hjem', linkTekst: 'Se helheden' },
      { label: 'Afstand', respons: 'Afstand i en familie er smertefuld. Men den er også information: noget kan repareres.', link: 'temaer', linkTekst: 'Forstå afstanden' },
      { label: 'Kaos', respons: 'Kaos er, hvad der sker, når mange nervesystemer er dysregulerede samtidig. Det er ikke familiens skyld.', link: 'trappen', linkTekst: 'Start med dit nervesystem' },
      { label: 'Muligheder', respons: 'At se muligheder er et tegn på, at du er i dit tolerancevindue. Grib det, mens det er her.', link: 'muligt', linkTekst: 'Grib dem nu' }
    ]
  },
  {
    spoergsmaal: 'Hvilken sætning rammer dig mest lige nu?',
    svar: [
      { label: 'Jeg gør mit bedste', respons: 'Ja. Og dit bedste er nok. Det er ikke altid pænt — men det er ægte.', link: 'hjem', linkTekst: 'Du er nok' },
      { label: 'Jeg er bange for at fejle', respons: 'Angsten for at fejle er ofte arvet. Du gentager ikke nødvendigvis din historie — du skriver en ny.', link: 'temaer', linkTekst: 'Bryd mønstret' },
      { label: 'Jeg savner mig selv', respons: 'Savn efter dig selv er et sundt tegn. Det betyder, at du ved, der er mere.', link: 'oevelser', linkTekst: 'Find dig selv igen' },
      { label: 'Det kan ikke fortsætte', respons: 'Når du mærker det, er du allerede i bevægelse. Forandring starter med at sige: det her virker ikke.', link: 'muligt', linkTekst: 'Tag det første skridt' }
    ]
  },
  {
    spoergsmaal: 'Hvordan er stemningen derhjemme?',
    svar: [
      { label: 'Stille — den gode slags', respons: 'Stille rum er rum, hvor nervesystemet kan regulere. Nyd det. Det er helende.', link: 'hjem', linkTekst: 'Hvil i det' },
      { label: 'Anspændt', respons: 'Anspændthed smitter. Når ét nervesystem er i alarm, følger de andre. Start med at regulere dit eget.', link: 'trappen', linkTekst: 'Start med dig' },
      { label: 'Kaotisk', respons: 'Kaos er midlertidigt. Det føles uendeligt, men det er det ikke. Find ét roligt punkt og hold fast.', link: 'oevelser', linkTekst: 'Find dit anker' },
      { label: 'Fraværende', respons: 'Når alle er til stede men ingen er "der", mangler forbindelsen. Ét øjeblik af ægte kontakt kan ændre det.', link: 'temaer', linkTekst: 'Genopbyg kontakten' }
    ]
  },
  {
    spoergsmaal: 'Hvad drømte du om, da du var yngre?',
    svar: [
      { label: 'En tryg familie', respons: 'Den drøm lever stadig. Tryghed bygges ikke af perfektion, men af tilstedeværelse og reparation.', link: 'hjem', linkTekst: 'Byg videre' },
      { label: 'Frihed', respons: 'Frihed i en familie handler ikke om at slippe væk — men om at være dig selv, sammen med andre.', link: 'oevelser', linkTekst: 'Mærk friheden' },
      { label: 'At blive set', respons: 'Behovet for at blive set forsvinder aldrig. Giv dig selv det, du ikke fik. Det er aldrig for sent.', link: 'temaer', linkTekst: 'Om tilknytning' },
      { label: 'Husker det ikke', respons: 'Når drømme er glemt, er det ofte fordi overlevelse tog al pladsen. De er der stadig — under overfladen.', link: 'oevelser', linkTekst: 'Grav forsigtigt' }
    ]
  },
  {
    spoergsmaal: 'Hvornår følte du dig sidst virkelig til stede?',
    svar: [
      { label: 'For nylig', respons: 'Hold fast i den følelse. Nærvær er en muskel — jo mere du bruger den, jo stærkere bliver den.', link: 'hjem', linkTekst: 'Styrk den' },
      { label: 'Det er længe siden', respons: 'Når nærvær er blevet sjældent, har nervesystemet brug for hjælp til at komme ned i gear.', link: 'oevelser', linkTekst: 'Kom ned i gear' },
      { label: 'Kun med mit barn', respons: 'Børn trækker os ind i nuet. De er vores bedste lærere i nærvær — uanset alder.', link: 'hjem', linkTekst: 'Lær af dit barn' },
      { label: 'Aldrig rigtig', respons: 'Hvis du altid har levet i overlevelsesmode, kan nærvær føles fremmed. Det kan læres. Langsomt og trygt.', link: 'trappen', linkTekst: 'Forstå hvorfor' }
    ]
  },
  {
    spoergsmaal: 'Hvad ville Rikke sige til dig lige nu?',
    svar: [
      { label: 'Mærk det', respons: 'Rikke ville sige: lad dig mærke det. Ikke analysere det, ikke løse det — bare mærke det.', link: 'oevelser', linkTekst: 'Mærk det nu' },
      { label: 'Du er ikke alene', respons: 'Rikke ville sige: de familier, jeg møder, bærer alle på det her. Du er ikke den eneste.', link: 'temaer', linkTekst: 'Se at andre kender det' },
      { label: 'Start med kroppen', respons: 'Rikke ville sige: din krop husker mere, end du tror. Vejen ind gennem kroppen er ofte hurtigere end ord.', link: 'oevelser', linkTekst: 'Start med kroppen' },
      { label: 'Bed om hjælp', respons: 'Rikke ville sige: at bede om hjælp er ikke at give op. Det er at tage sig selv og sin familie alvorligt.', link: 'hjem', linkTekst: 'Tag det alvorligt' }
    ]
  },
  {
    spoergsmaal: 'Hvordan har du det med dagen, der venter?',
    svar: [
      { label: 'Overskuelig', respons: 'Når dagen føles overskuelig, er dit nervesystem reguleret. Brug det — men pres dig ikke.', link: 'hjem', linkTekst: 'Tag det med' },
      { label: 'Overvældende', respons: 'En overvældende dag behøver ikke leves på én gang. Tænk i de næste 30 minutter. Det er nok.', link: 'muligt', linkTekst: 'Ét skridt ad gangen' },
      { label: 'Ensformig', respons: 'Ensformighed kan være trygt — eller kvælende. Hvad er det for dig? Der er ingen forkerte svar.', link: 'temaer', linkTekst: 'Udforsk noget nyt' },
      { label: 'Uforudsigelig', respons: 'Uforudsigelighed holder nervesystemet aktivt. Giv dig selv et anker — én ting, der er fast.', link: 'oevelser', linkTekst: 'Find dit anker' }
    ]
  }
];

// ============================================================
// Morning Check-in — 25 variants (English)
// Each variant: question, answer buttons with response + link
// ============================================================
var MORGEN_CHECKIN_EN = [
  {
    spoergsmaal: 'How are you feeling right now?',
    svar: [
      { label: 'Calm', respons: 'That is a good starting point. Perhaps today is the day you can sense a little more of what usually gets lost in the noise.', link: 'temaer', linkTekst: 'Explore a theme' },
      { label: 'Restless', respons: 'When your body is in alarm, it is hard to think clearly. Start with your breath — it is the fastest path to calm.', link: 'oevelser', linkTekst: 'Try an exercise' },
      { label: 'Heavy', respons: 'Some mornings weigh more than others. You do not have to carry it all. Just one thing.', link: 'muligt', linkTekst: 'What is possible now?' },
      { label: 'Not sure', respons: 'That is also an answer. Just being here is enough.', link: 'hjem', linkTekst: 'Explore at your pace' }
    ]
  },
  {
    spoergsmaal: 'What is weighing on you most this morning?',
    svar: [
      { label: 'Worry', respons: 'Worries fill you because you care about someone. Let us see if there is one small place to begin.', link: 'muligt', linkTekst: 'Find one step' },
      { label: 'Sadness', respons: 'Sadness is not weakness. It tells you that something matters. Give it space.', link: 'temaer', linkTekst: 'Read about loss & grief' },
      { label: 'Anger', respons: 'Anger is energy. It shows you where your boundaries are. The question is what you want to do with it.', link: 'trappen', linkTekst: 'See where you are on the staircase' },
      { label: 'Hope', respons: 'Hold on to that. Even the smallest hope is a door left ajar.', link: 'hjem', linkTekst: 'Explore further' }
    ]
  },
  {
    spoergsmaal: 'If your body could say one thing — what would it be?',
    svar: [
      { label: 'I am tired', respons: 'Your body is asking for a pause. Not necessarily sleep — but a moment without demands. Start with three deep breaths.', link: 'oevelser', linkTekst: 'Try the breathing exercise' },
      { label: 'I am tense', respons: 'Tension is your body\'s way of protecting you. Let us help it release, just a little.', link: 'trappen', linkTekst: 'Understand your nervous system' },
      { label: 'I am restless', respons: 'Restlessness is movement searching for a direction. Perhaps something is asking for your attention.', link: 'temaer', linkTekst: 'Find your theme' },
      { label: 'I feel okay', respons: 'That is worth noticing. Good moments deserve attention — even the quiet ones.', link: 'hjem', linkTekst: 'Enjoy the calm' }
    ]
  },
  {
    spoergsmaal: 'Where are you on the staircase right now?',
    svar: [
      { label: 'Safe', respons: 'When you are in your window of tolerance, you are best able to meet yourself and others. Use it.', link: 'temaer', linkTekst: 'Explore a new theme' },
      { label: 'Activated', respons: 'Your sympathetic nervous system is switched on. It is not dangerous — but it is important to notice before it takes the wheel.', link: 'trappen', linkTekst: 'Learn more about the staircase' },
      { label: 'Shut down', respons: 'When the body shuts down, it needs warmth — not demands. Be gentle with yourself.', link: 'oevelser', linkTekst: 'Start softly with an exercise' },
      { label: 'Keeps shifting', respons: 'That is normal, especially under pressure. Your nervous system is seeking balance. Let us find an anchor.', link: 'oevelser', linkTekst: 'Find an anchor' }
    ]
  },
  {
    spoergsmaal: 'What do you need today?',
    svar: [
      { label: 'Calm', respons: 'Calm is not laziness. It is recharging. Give yourself permission.', link: 'oevelser', linkTekst: 'Exercise for calm' },
      { label: 'Courage', respons: 'Courage is not about being fearless. It is about taking the next step, even when it is hard.', link: 'muligt', linkTekst: 'Take one step' },
      { label: 'To be seen', respons: 'It is human to need witnesses. You are not alone in what you carry.', link: 'temaer', linkTekst: 'You are not alone' },
      { label: 'Overview', respons: 'When everything blurs together, it helps to sort. One thing at a time.', link: 'muligt', linkTekst: 'Create an overview' }
    ]
  },
  {
    spoergsmaal: 'Is there something you are carrying from yesterday?',
    svar: [
      { label: 'A conflict', respons: 'Conflicts leave traces in the body. The most important thing now is not to resolve it — but to regulate yourself first.', link: 'trappen', linkTekst: 'Check your nervous system' },
      { label: 'A good moment', respons: 'Keep that. Good moments are fuel. Notice what made it possible.', link: 'hjem', linkTekst: 'Continue from here' },
      { label: 'Guilt', respons: 'Guilt shows that you care. But it must not fill so much space that it paralyses you. What can you do today?', link: 'muligt', linkTekst: 'What is possible now?' },
      { label: 'Nothing much', respons: 'That is fine too. Not every day needs to be heavy. Some days simply are.', link: 'hjem', linkTekst: 'Just be here' }
    ]
  },
  {
    spoergsmaal: 'Who are you thinking about right now?',
    svar: [
      { label: 'My child', respons: 'Your child senses you before you say a word. When you regulate yourself, you give your child permission to relax.', link: 'trappen', linkTekst: 'Start with yourself' },
      { label: 'My partner', respons: 'The relationship is the family\'s foundation. Even small movements toward each other make a difference.', link: 'temaer', linkTekst: 'Read about the relationship' },
      { label: 'Myself', respons: 'Thinking about yourself is not selfish. It is necessary. You cannot pour from an empty cup.', link: 'oevelser', linkTekst: 'Do something for you' },
      { label: 'The whole family', respons: 'The family is a system. When you move, everyone moves. Start with what you can.', link: 'hjem', linkTekst: 'See the whole picture' }
    ]
  },
  {
    spoergsmaal: 'If you could only carry one thing today — what would it be?',
    svar: [
      { label: 'Something practical', respons: 'Practical things can give back a sense of control. Choose the smallest task and finish it. It counts.', link: 'muligt', linkTekst: 'Write it down' },
      { label: 'A relationship', respons: 'Relationships need presence, not perfection. One moment of genuine contact is enough.', link: 'temaer', linkTekst: 'Understand the relationship' },
      { label: 'My own state', respons: 'The most important work is often invisible. Regulating yourself is a gift to everyone around you.', link: 'oevelser', linkTekst: 'Start here' },
      { label: 'I don\'t know', respons: 'When you don\'t know, that is honest. Give it a little time. The answer will come when your body is ready.', link: 'hjem', linkTekst: 'Take it easy' }
    ]
  },
  {
    spoergsmaal: 'How did you sleep last night?',
    svar: [
      { label: 'Well', respons: 'Sleep is the body\'s most important repair. Take that with you as a good foundation today.', link: 'hjem', linkTekst: 'Good start' },
      { label: 'Restlessly', respons: 'Restless sleep tells you that the nervous system is still working. Breathing can help you find calm.', link: 'oevelser', linkTekst: 'Try a breathing exercise' },
      { label: 'Too little', respons: 'When the body lacks sleep, the threshold is lower. Be extra kind to yourself today.', link: 'trappen', linkTekst: 'Be mindful today' },
      { label: 'Couldn\'t fall asleep', respons: 'Racing thoughts keep the nervous system active. Try landing in the body instead of the mind.', link: 'oevelser', linkTekst: 'Grounding exercise' }
    ]
  },
  {
    spoergsmaal: 'What is the first thing you notice in your body right now?',
    svar: [
      { label: 'Shoulder tension', respons: 'Your shoulders carry what you don\'t say out loud. Let them drop — just for a moment. You don\'t have to carry it all.', link: 'oevelser', linkTekst: 'Release the tension' },
      { label: 'Knot in my stomach', respons: 'The stomach responds to the unconscious. Something wants your attention. You don\'t have to solve it — just notice it.', link: 'trappen', linkTekst: 'Understand the signal' },
      { label: 'Heaviness', respons: 'Heaviness is your body\'s way of saying: slow down. Follow its pace today.', link: 'oevelser', linkTekst: 'Start slowly' },
      { label: 'Nothing special', respons: 'Sometimes the body is quiet. That is fine. It will speak when it is ready.', link: 'hjem', linkTekst: 'Continue quietly' }
    ]
  },
  {
    spoergsmaal: 'What would you say to yourself if you were your own best friend?',
    svar: [
      { label: 'You\'re doing enough', respons: '"Good enough" is not an excuse — it is the truth. Perfectionism is trauma in disguise.', link: 'temaer', linkTekst: 'Read about shame & guilt' },
      { label: 'It will get better', respons: 'And it will. Not because everything fixes itself — but because you are already in motion.', link: 'hjem', linkTekst: 'See your progress' },
      { label: 'Take a break', respons: 'A break is not giving up. It is regulation. Your body knows best.', link: 'oevelser', linkTekst: 'Take a break now' },
      { label: 'Ask for help', respons: 'Asking for help is strength, not weakness. Nobody manages alone — and you shouldn\'t have to either.', link: 'temaer', linkTekst: 'You are not alone' }
    ]
  },
  {
    spoergsmaal: 'If this day could give you one thing — what would it be?',
    svar: [
      { label: 'Lightness', respons: 'Lightness comes in small glimpses. Not as the absence of problems, but as moments when you forget them.', link: 'hjem', linkTekst: 'Find a glimpse' },
      { label: 'Connection', respons: 'We are built for connection. One genuine moment with another person can change an entire day.', link: 'temaer', linkTekst: 'Understand connection' },
      { label: 'Clarity', respons: 'Clarity rarely comes from thinking more. It comes from pausing and feeling what truly matters.', link: 'muligt', linkTekst: 'Sort out what matters' },
      { label: 'Just surviving', respons: 'That is enough. Survival is not failure — it is the foundation. You are here. That counts.', link: 'trappen', linkTekst: 'Notice where you are' }
    ]
  },
  {
    spoergsmaal: 'What makes you feel most vulnerable right now?',
    svar: [
      { label: 'Loneliness', respons: 'Loneliness inside a family is one of the heaviest things. You are not wrong — you are missing being met.', link: 'temaer', linkTekst: 'About isolation' },
      { label: 'Power struggles', respons: 'Power struggles are rarely about power. They are about being heard. What do you truly want to say?', link: 'temaer', linkTekst: 'Understand the conflict' },
      { label: 'My children\'s reactions', respons: 'Children react to what they sense — not what they are told. Their behaviour is communication.', link: 'hjem', linkTekst: 'See the child\'s perspective' },
      { label: 'My own history', respons: 'Your wounds do not make you a bad parent. They make you a human being who is fighting. That is brave.', link: 'oevelser', linkTekst: 'Start with yourself' }
    ]
  },
  {
    spoergsmaal: 'Do you feel more fear or more hope right now?',
    svar: [
      { label: 'Mostly fear', respons: 'Fear is the nervous system\'s alarm bell. It protects you — but it does not have to steer you.', link: 'trappen', linkTekst: 'Regulate the fear' },
      { label: 'Mostly hope', respons: 'Hope is not naive. It is your nervous system saying: there are possibilities here. Follow it.', link: 'muligt', linkTekst: 'Seize the possibility' },
      { label: 'Both', respons: 'That is the most human answer. Fear and hope live side by side. You do not have to choose.', link: 'hjem', linkTekst: 'Let both exist' },
      { label: 'Neither', respons: 'Numbness can be the body\'s pause button. It protects you, but it also keeps you away.', link: 'oevelser', linkTekst: 'Come back to the body' }
    ]
  },
  {
    spoergsmaal: 'What do you need to hear today?',
    svar: [
      { label: 'That it\'s okay', respons: 'It is okay. Not everything needs to be resolved. Not everything needs to make sense. It is okay, just as it is right now.', link: 'hjem', linkTekst: 'Just be here' },
      { label: 'That I\'m not alone', respons: 'You are not alone. Thousands of families are struggling with the same thing. Your struggle does not isolate you — it connects you.', link: 'temaer', linkTekst: 'Others know this too' },
      { label: 'That there\'s a way', respons: 'There is a way. It is not always visible, and it is rarely straight. But it is there.', link: 'muligt', linkTekst: 'See the next step' },
      { label: 'That I\'m enough', respons: 'You are doing well enough. Not perfectly — well enough. And that is precisely enough.', link: 'oevelser', linkTekst: 'Give yourself credit' }
    ]
  },
  {
    spoergsmaal: 'Which role fills you the most right now?',
    svar: [
      { label: 'Parent', respons: 'Being a parent under pressure is exhausting. Remember: your child does not need a perfect parent — just a good enough one.', link: 'hjem', linkTekst: 'Give yourself calm' },
      { label: 'Partner', respons: 'A relationship under pressure is like building a bridge in a storm. It demands patience — with yourself and with the other.', link: 'temaer', linkTekst: 'About the relationship' },
      { label: 'Myself', respons: 'You exist beyond your roles too. The person you were before all of this — they are still there.', link: 'oevelser', linkTekst: 'Find yourself' },
      { label: 'All at once', respons: 'When everything demands everything at once, the foundation creaks. Choose one role today. The rest can wait.', link: 'muligt', linkTekst: 'Prioritise today' }
    ]
  },
  {
    spoergsmaal: 'How would you describe your energy right now?',
    svar: [
      { label: 'Full of energy', respons: 'Use it wisely. Energy is a resource — and you decide where it goes.', link: 'muligt', linkTekst: 'Put it to use' },
      { label: 'Neutral', respons: 'Neutral is underrated. From here, you can choose freely. Enjoy the quiet moment.', link: 'hjem', linkTekst: 'Explore calmly' },
      { label: 'Low', respons: 'Low energy is the body\'s message: do less, not more. What can you let go of today?', link: 'oevelser', linkTekst: 'Recharge quietly' },
      { label: 'Fluctuating', respons: 'Fluctuating energy reflects a nervous system in motion. It is not instability — it is regulation in progress.', link: 'trappen', linkTekst: 'Understand the shifts' }
    ]
  },
  {
    spoergsmaal: 'What would help you most right now?',
    svar: [
      { label: 'Understanding more', respons: 'Understanding creates calm. When you know what is happening, it loses some of its power.', link: 'temaer', linkTekst: 'Learn something new' },
      { label: 'Doing something concrete', respons: 'Action is medicine for powerlessness. Even the smallest action changes the dynamic.', link: 'muligt', linkTekst: 'Do one thing' },
      { label: 'Feeling my body', respons: 'The body often knows more than the mind. When you land in it, you find answers that thought cannot give.', link: 'oevelser', linkTekst: 'Land in the body' },
      { label: 'Just breathing', respons: 'Then do it. Three deep breaths. In through the nose, out through the mouth. You have time.', link: 'oevelser', linkTekst: 'The breathing exercise' }
    ]
  },
  {
    spoergsmaal: 'What do you see when you look at your family right now?',
    svar: [
      { label: 'Love under pressure', respons: 'Love under pressure is still love. It is just harder to see when the alarm is running.', link: 'hjem', linkTekst: 'See the whole picture' },
      { label: 'Distance', respons: 'Distance in a family is painful. But it is also information: something can be repaired.', link: 'temaer', linkTekst: 'Understand the distance' },
      { label: 'Chaos', respons: 'Chaos is what happens when many nervous systems are dysregulated at the same time. It is not the family\'s fault.', link: 'trappen', linkTekst: 'Start with your nervous system' },
      { label: 'Possibilities', respons: 'Seeing possibilities is a sign that you are in your window of tolerance. Seize it while it is here.', link: 'muligt', linkTekst: 'Seize them now' }
    ]
  },
  {
    spoergsmaal: 'Which sentence resonates with you most right now?',
    svar: [
      { label: 'I\'m doing my best', respons: 'Yes. And your best is enough. It is not always pretty — but it is real.', link: 'hjem', linkTekst: 'You are enough' },
      { label: 'I\'m afraid to fail', respons: 'The fear of failure is often inherited. You are not necessarily repeating your history — you are writing a new one.', link: 'temaer', linkTekst: 'Break the pattern' },
      { label: 'I miss myself', respons: 'Missing yourself is a healthy sign. It means you know there is more.', link: 'oevelser', linkTekst: 'Find yourself again' },
      { label: 'This can\'t go on', respons: 'When you feel that, you are already in motion. Change begins with saying: this is not working.', link: 'muligt', linkTekst: 'Take the first step' }
    ]
  },
  {
    spoergsmaal: 'What is the mood like at home?',
    svar: [
      { label: 'Quiet — the good kind', respons: 'Quiet spaces are spaces where the nervous system can regulate. Enjoy it. It is healing.', link: 'hjem', linkTekst: 'Rest in it' },
      { label: 'Tense', respons: 'Tension is contagious. When one nervous system is in alarm, the others follow. Start by regulating your own.', link: 'trappen', linkTekst: 'Start with yourself' },
      { label: 'Chaotic', respons: 'Chaos is temporary. It feels endless, but it is not. Find one calm point and hold on.', link: 'oevelser', linkTekst: 'Find your anchor' },
      { label: 'Absent', respons: 'When everyone is present but no one is truly "there", the connection is missing. One moment of genuine contact can change that.', link: 'temaer', linkTekst: 'Rebuild the connection' }
    ]
  },
  {
    spoergsmaal: 'What did you dream of when you were younger?',
    svar: [
      { label: 'A safe family', respons: 'That dream is still alive. Safety is not built from perfection, but from presence and repair.', link: 'hjem', linkTekst: 'Build on' },
      { label: 'Freedom', respons: 'Freedom in a family is not about escaping — but about being yourself, together with others.', link: 'oevelser', linkTekst: 'Feel the freedom' },
      { label: 'To be seen', respons: 'The need to be seen never disappears. Give yourself what you did not receive. It is never too late.', link: 'temaer', linkTekst: 'About attachment' },
      { label: 'I don\'t remember', respons: 'When dreams are forgotten, it is often because survival took up all the space. They are still there — beneath the surface.', link: 'oevelser', linkTekst: 'Dig gently' }
    ]
  },
  {
    spoergsmaal: 'When did you last feel truly present?',
    svar: [
      { label: 'Recently', respons: 'Hold on to that feeling. Presence is a muscle — the more you use it, the stronger it becomes.', link: 'hjem', linkTekst: 'Strengthen it' },
      { label: 'A long time ago', respons: 'When presence has become rare, the nervous system needs help shifting down.', link: 'oevelser', linkTekst: 'Shift down' },
      { label: 'Only with my child', respons: 'Children draw us into the present. They are our best teachers in presence — at any age.', link: 'hjem', linkTekst: 'Learn from your child' },
      { label: 'Never really', respons: 'If you have always lived in survival mode, presence can feel foreign. It can be learned. Slowly and safely.', link: 'trappen', linkTekst: 'Understand why' }
    ]
  },
  {
    spoergsmaal: 'What would Rikke say to you right now?',
    svar: [
      { label: 'Feel it', respons: 'Rikke would say: let yourself feel it. Not analyse it, not solve it — just feel it.', link: 'oevelser', linkTekst: 'Feel it now' },
      { label: 'You\'re not alone', respons: 'Rikke would say: the families I meet all carry this. You are not the only one.', link: 'temaer', linkTekst: 'See that others know this' },
      { label: 'Start with the body', respons: 'Rikke would say: your body remembers more than you think. The path through the body is often faster than words.', link: 'oevelser', linkTekst: 'Start with the body' },
      { label: 'Ask for help', respons: 'Rikke would say: asking for help is not giving up. It is taking yourself and your family seriously.', link: 'hjem', linkTekst: 'Take it seriously' }
    ]
  },
  {
    spoergsmaal: 'How do you feel about the day ahead?',
    svar: [
      { label: 'Manageable', respons: 'When the day feels manageable, your nervous system is regulated. Use it — but don\'t push yourself.', link: 'hjem', linkTekst: 'Carry it with you' },
      { label: 'Overwhelming', respons: 'An overwhelming day does not have to be lived all at once. Think about the next 30 minutes. That is enough.', link: 'muligt', linkTekst: 'One step at a time' },
      { label: 'Monotonous', respons: 'Monotony can be safe — or suffocating. Which is it for you? There are no wrong answers.', link: 'temaer', linkTekst: 'Explore something new' },
      { label: 'Unpredictable', respons: 'Unpredictability keeps the nervous system active. Give yourself an anchor — one thing that stays fixed.', link: 'oevelser', linkTekst: 'Find your anchor' }
    ]
  }
];

// ============================================================
// Trappen — Forstå dit nervesystem (uddybende afsnit)
// ============================================================
var TRAPPEN_FORSTAELSE = {
  privat: {
    titel: 'Forstå dit nervesystem som forælder',
    afsnit: [
      {
        undertitel: 'Hvorfor dit barn reagerer på DIT nervesystem',
        tekst: 'Børn har ikke et færdigudviklet nervesystem. De låner dit. Når du er rolig, kan dit barn finde ro. Når du er i alarm, går dit barn i alarm — ikke fordi det har forstået situationen, men fordi dets krop aflæser din. Det kaldes co-regulering, og det er den mest grundlæggende mekanisme i forældreskabet. Det betyder, at det vigtigste du kan gøre for dit barn i en presset situation, er at regulere dig selv først. Ikke fordi dine følelser er forkerte — men fordi dit barn har brug for at låne din ro, før det kan finde sin egen.'
      },
      {
        undertitel: 'Dine reaktioner er ikke din skyld — men de er dit ansvar',
        tekst: 'Hvis du voksede op i en familie med uforudsigelighed, vold, omsorgssvigt eller fravær, har dit nervesystem lært at være på vagt. Det er ikke en fejl — det var en overlevelsesstrategi. Men den strategi kan gøre det svært at være den forælder, du gerne vil være. Når dit barn skriger, og du mærker raseriet vælte op, er det ofte ikke dit barn, du reagerer på — det er et ekko fra din egen historie. At forstå det er ikke en undskyldning. Det er begyndelsen på at vælge anderledes.'
      },
      {
        undertitel: 'Regulering kommer før samtale',
        tekst: 'Mange forældre prøver at tale med deres børn, når alle stadig er i alarm. Men hjernen kan ikke lytte, når nervesystemet er i kamp-eller-flugt. Det er biologisk umuligt. Derfor er rækkefølgen afgørende: først regulering (åndedræt, grounding, pause), så kontakt (øjenkontakt, berøring, nærvær), og først til sidst samtale. Trappen hjælper dig med at genkende, hvor du er — så du ved, hvad der er muligt lige nu. Nogle dage er svaret bare: overlev. Og det er nok.'
      }
    ]
  },
  professionel: {
    titel: 'Nervesystemet i familiebehandling',
    afsnit: [
      {
        undertitel: 'Co-regulering som fundament for intervention',
        tekst: 'Stephen Porges\' polyvagale teori beskriver, hvordan det autonome nervesystem organiserer sig hierarkisk: ventral vagal (social engagement), sympatisk (kamp-flugt) og dorsal vagal (immobilisering). I familiebehandling med udsatte familier er denne forståelse central, fordi forældrenes reguleringskapacitet direkte former barnets nervesystemudvikling. Når en forælder kronisk befinder sig i sympatisk eller dorsal vagal tilstand, mangler barnet den co-regulerende funktion, der er forudsætningen for tryg tilknytning. Terapeutens primære opgave er ofte at fungere som co-regulerende nervesystem for forælderen — som derefter kan videreføre denne regulering til barnet.'
      },
      {
        undertitel: 'Intergenerationel transmission af dysregulering',
        tekst: 'ACE-forskningen (Felitti & Anda) dokumenterer, at belastende barndomsoplevelser har kumulativ effekt på nervesystemets grundindstilling. Forældre med høj ACE-score har ofte et nervesystem, der er kalibreret til fare — det tolker neutrale signaler som truende (neuroception). Daniel Siegels "Window of Tolerance"-model er klinisk nyttig: vi kortlægger familiemedlemmernes tolerancevinduer og arbejder målrettet med at udvide dem. Judith Hermans faseopdeling — sikkerhed, bearbejdning, integration — gælder også nervesystemet: regulering er altid fase 1.'
      },
      {
        undertitel: 'Bottom-up før top-down',
        tekst: 'I traumeinformeret familiebehandling er rækkefølgen afgørende: kropslig regulering (bottom-up) før kognitiv bearbejdning (top-down). Bessel van der Kolks "The Body Keeps the Score" understreger, at traumatiske erfaringer lagres somatisk og ikke kan tilgås udelukkende gennem samtale. I praksis betyder det: vagusnerve-aktivering, åndedrætsinstrukter og somatisk grounding skal integreres i hver session — ikke som supplement, men som fundament. Trappen bruges klinisk til at etablere et fælles sprog med familien om reguleringstilstande og til at identificere, hvornår interventioner er mulige.'
      }
    ]
  }
};

// ============================================================
// Trappen — Understanding your nervous system (English version)
// ============================================================
var TRAPPEN_FORSTAELSE_EN = {
  privat: {
    titel: 'Understanding your nervous system as a parent',
    afsnit: [
      {
        undertitel: 'Why your child responds to YOUR nervous system',
        tekst: 'Children do not yet have a fully developed nervous system. They borrow yours. When you are calm, your child can find calm. When you are in alarm, your child goes into alarm — not because they understand the situation, but because their body reads yours. This is called co-regulation, and it is the most fundamental mechanism in parenting. It means that the most important thing you can do for your child in a stressful moment is to regulate yourself first. Not because your feelings are wrong — but because your child needs to borrow your calm before they can find their own.'
      },
      {
        undertitel: 'Your reactions are not your fault — but they are your responsibility',
        tekst: 'If you grew up in a family marked by unpredictability, violence, neglect, or absence, your nervous system learned to stay on guard. That is not a flaw — it was a survival strategy. But that strategy can make it difficult to be the parent you want to be. When your child screams and you feel rage rising, it is often not your child you are reacting to — it is an echo from your own history. Understanding this is not an excuse. It is the beginning of choosing differently.'
      },
      {
        undertitel: 'Regulation comes before conversation',
        tekst: 'Many parents try to talk with their children while everyone is still in alarm. But the brain cannot listen when the nervous system is in fight-or-flight. It is biologically impossible. That is why the sequence matters: first regulation (breathing, grounding, pausing), then connection (eye contact, touch, presence), and only then conversation. The Staircase helps you recognise where you are — so you know what is possible right now. Some days the answer is simply: survive. And that is enough.'
      }
    ]
  },
  professionel: {
    titel: 'The nervous system in family therapy',
    afsnit: [
      {
        undertitel: 'Co-regulation as a foundation for intervention',
        tekst: 'Stephen Porges\' Polyvagal Theory describes how the autonomic nervous system organises itself hierarchically: ventral vagal (social engagement), sympathetic (fight-flight), and dorsal vagal (immobilisation). In family therapy with vulnerable families, this understanding is central, because the parents\' regulatory capacity directly shapes the child\'s nervous system development. When a parent is chronically in a sympathetic or dorsal vagal state, the child lacks the co-regulatory function that is the prerequisite for secure attachment. The therapist\'s primary task is often to serve as the co-regulating nervous system for the parent — who can then pass that regulation on to the child.'
      },
      {
        undertitel: 'Intergenerational transmission of dysregulation',
        tekst: 'ACE research (Felitti & Anda) documents that adverse childhood experiences have a cumulative effect on the nervous system\'s baseline setting. Parents with high ACE scores often have a nervous system calibrated for danger — interpreting neutral signals as threatening (neuroception). Daniel Siegel\'s "Window of Tolerance" model is clinically useful: we map family members\' windows of tolerance and work systematically to widen them. Judith Herman\'s phase model — safety, processing, integration — also applies to the nervous system: regulation is always phase one.'
      },
      {
        undertitel: 'Bottom-up before top-down',
        tekst: 'In trauma-informed family therapy, the sequence is essential: somatic regulation (bottom-up) before cognitive processing (top-down). Bessel van der Kolk\'s "The Body Keeps the Score" underlines that traumatic experiences are stored somatically and cannot be accessed through conversation alone. In practice, this means: vagus nerve activation, breathing exercises, and somatic grounding must be integrated into every session — not as a supplement, but as a foundation. The Staircase is used clinically to establish a shared language with the family about regulatory states and to identify when interventions are possible.'
      }
    ]
  }
};

// ============================================================
// Trappen — Familie-effekt per tilstand
// ============================================================
var TRAPPEN_FAMILIE_EFFEKT = {
  1: {
    privat: {
      titel: 'Hvad mærker familien, når du er tryg?',
      barn: 'Dit barn slapper af. Det tør udforske, lege og komme til dig, når det har brug for det. Børn aflæser din ro hurtigere end dine ord — og de begynder at spejle den.',
      partner: 'Jeres samtaler bliver lettere. I kan lytte til hinanden uden at gå i forsvar. Selv de svære emner kan rummes, når begge nervesystemer er i tryghed.',
      familie: 'Hele familiens tempo sænkes. Der er plads til pauser, til humor, til bare at være sammen uden formål. Det er i disse øjeblikke, forbindelsen styrkes.'
    },
    professionel: {
      titel: 'Systemisk effekt af ventral vagal tilstand',
      barn: 'Barnets sociale engagementsystem aktiveres spejlneuronalt: tryg forælder → trygt barn. Tilknytningsadfærd (udforske/vende tilbage) fungerer optimalt. Mentaliseringsevne er tilgængelig.',
      partner: 'Forældrealliancen styrkes: co-regulering mellem partnere muliggør konstruktiv konfliktløsning og samarbejde om forældreopgaven. Affektiv afstemning er tilgængelig.',
      familie: 'Systemet som helhed er i homeostase. Kommunikationsmønstre er fleksible, roller er forhandlingsbare, og familiens narrative identitet kan udvikles. Det optimale vindue for terapeutisk intervention.'
    }
  },
  2: {
    privat: {
      titel: 'Hvad mærker familien, når du er i alarm?',
      barn: 'Dit barn mærker det øjeblikkeligt. Nogle børn bliver stille og usynlige — de har lært, at det er sikrest. Andre eskalerer, fordi de prøver at "nå dig" gennem din alarm. Begge dele er tilknytningsadfærd.',
      partner: 'Jeres kommunikation bliver hård eller forsvinder. Den ene angriber, den anden trækker sig. Det ligner en konflikt om praktiske ting — men det handler om: "Er du der for mig? Kan jeg nå dig?"',
      familie: 'Stemningen i hjemmet bliver elektrisk. Alle er på vagt. Selv de gode stunder er skrøbelige, fordi alle venter på den næste eskalering. Rutiner brydes, tålmodighed forsvinder.'
    },
    professionel: {
      titel: 'Systemisk effekt af sympatisk aktivering',
      barn: 'Barnets neuroception registrerer fare: tilknytningssystemet aktiveres i protest- eller fortvivlelsesmode. Adfærd som klæben, udadreageren eller tilbagetrækning er reguleringsstrategier — ikke "problemadfærd."',
      partner: 'Pursuer-withdrawer-dynamik intensiveres. Når én partner er i sympatisk arousal, trigges den andens nervesystem — negativ interaktionscyklus etableres. Mentalisering kompromitteres bilateralt.',
      familie: 'Systemet skifter til overlevelsesmodus: kommunikation reduceres til imperativ form, rollefleksibilitet forsvinder, og parentificeringsrisiko øges. Børn overtager reguleringsansvar for forældre.'
    }
  },
  3: {
    privat: {
      titel: 'Hvad mærker familien, når du er lukket ned?',
      barn: 'Dit barn mærker dit fravær — også selvom du er fysisk til stede. Nogle børn prøver desperat at vække dig: de råber, kaster, provokerer. Andre giver op og trækker sig ind i sig selv. Begge dele er et barn, der savner sin forælder.',
      partner: 'Din partner kan opleve dig som ligeglad eller kold — men det er ikke ligegyldighed. Det er overbelastning. Misforståelsen kan skabe dyb ensomhed hos begge parter.',
      familie: 'Familien mister sin forbindelse. Alle er i samme rum, men ingen er rigtigt til stede. Rutiner holdes måske i gang på overfladen, men den emotionelle kontakt er brudt. Børnene begynder at klare sig selv.'
    },
    professionel: {
      titel: 'Systemisk effekt af dorsal vagal tilstand',
      barn: 'Barnets tilknytningssystem er i crisis: tilknytningsfiguren er fysisk tilgængelig men emotionelt utilgængelig. Dette er kernen i desorganiseret tilknytning — frygt uden løsning. Barnets egne strategier (hyperaktivering eller deaktivering) konsolideres.',
      partner: 'Partner oplever emotionel utilgængelighed: forsøg på kontakt mødes med affladning eller fravær. Kan tolkes som afvisning og trigge partners eget tilknytningssystem. Risiko for parallel isolation.',
      familie: 'Systemet fragmenterer: familiemedlemmer opererer som isolerede enheder. Emotional neglect — ikke gennem intention, men gennem kapacitetssvigt. Særligt risikabelt for yngre børn, hvis tilknytningsudvikling kræver aktiv emotionel tilgængelighed.'
    }
  }
};

// ============================================================
// Trappen — Mønster-refleksioner (baseret på tracking-data)
// ============================================================
var TRAPPEN_MOENSTRE = {
  privat: {
    mestTryg: 'Du har mest været i tryghedszonen. Det er et godt fundament — hold fast i det, der bringer dig derhen. Læg mærke til, hvad der gør forskellen på de dage.',
    mestAlarm: 'Du har mest været i alarm denne periode. Det er ikke forkert — det er information. Dit nervesystem fortæller dig, at der er noget, der presser. Hvad ville der ske, hvis du gav dig selv 5 minutters åndedræt, hver gang du mærker det?',
    mestNedlukning: 'Du har mest været i nedlukning. Det fortæller, at belastningen har været høj — måske længere end du selv har lagt mærke til. Vær blid med dig selv. Små skridt: mærk fødderne, drik noget varmt, opsøg et andet menneske. Du behøver ikke løse noget — bare at komme lidt tilbage til kroppen.',
    blandtMoenster: 'Du har bevæget dig mellem tilstandene. Det er faktisk sundt — det viser, at dit nervesystem kan skifte. Læg mærke til, hvad der bringer dig op, og hvad der bringer dig ned. De mønstre er nøglen.',
    forFaa: 'Du har kun mærket ind få gange. Det er helt okay — der er ingen krav her. Jo oftere du mærker ind, jo tydeligere bliver mønsteret. Prøv at gøre det til en del af din morgen.',
    ingenData: 'Du har ikke mærket ind endnu. Prøv det — det tager 5 sekunder. Over tid giver det dig et billede af, hvor dit nervesystem befinder sig i hverdagen.'
  },
  professionel: {
    mestTryg: 'Klienten befinder sig overvejende i ventral vagal tilstand — det terapeutiske vindue er åbent. Overvej at intensivere narrativt arbejde og mentaliseringsøvelser i denne periode.',
    mestAlarm: 'Klienten er overvejende i sympatisk aktivering. Prioritér reguleringsinterventioner (polyvagal, somatisk) over samtalebaseret bearbejdning. Udforsk hvad der opretholder den kroniske aktivering — ydre stressorer eller retraumatisering?',
    mestNedlukning: 'Klienten er overvejende i dorsal vagal tilstand. Gå forsigtigt: bottom-up interventioner, sensorisk stimulering, gradueret aktivering. Undersøg om der er aktiv fare i klientens liv, der opretholder immobiliseringsresponsen.',
    blandtMoenster: 'Klienten oscillerer mellem tilstande — tolerancevinduet er smalt men fleksibelt. Fokus på at udvide vinduet: psychoedukation om nervesystemet, reguleringsøvelser og konsolidering af tryghedsøjeblikke.',
    forFaa: 'Utilstrækkelig data til mønsteranalyse. Opfordr klienten til daglig registrering — det øger selv-awareness og giver klinisk relevant data.',
    ingenData: 'Ingen registreringer. Introducer Trappen som psykoedukativt værktøj og opfordr til daglig brug mellem sessioner.'
  }
};

// Hilsner baseret på ugedag og årstid
var MORGEN_HILSNER = {
  mandag: 'Ny uge. Du behøver ikke have en plan — bare et næste skridt.',
  tirsdag: 'Tirsdag. Ugen er i gang. Hvordan landede du i den?',
  onsdag: 'Midt i ugen. Et godt tidspunkt at stoppe op og mærke efter.',
  torsdag: 'Torsdag. Snart weekend. Hvad har denne uge lært dig?',
  fredag: 'Fredag. Ugen er næsten slut. Hvad vil du tage med videre?',
  loerdag: 'Weekend. Måske er der rum til noget, der ellers ikke får plads.',
  soendag: 'Søndag. En dag til at samle sig — inden en ny uge begynder.',
  vinter: 'Det er mørkt udenfor. Men du er her.',
  foraar: 'Noget nyt er på vej. Også i dig.',
  sommer: 'Lyset er langt. Brug det til at se klart.',
  efteraar: 'Bladene falder. Måske er der noget, du også kan slippe.'
};

// ============================================================
// ENGLISH TRANSLATIONS
// ============================================================

// ============================================================
// Trappen — Family effect per state (English)
// ============================================================
var TRAPPEN_FAMILIE_EFFEKT_EN = {
  1: {
    privat: {
      titel: 'What does your family feel when you are safe?',
      barn: 'Your child relaxes. They dare to explore, play, and come to you when they need to. Children read your calm faster than your words — and they begin to mirror it.',
      partner: 'Your conversations become easier. You can listen to each other without becoming defensive. Even the hard topics can be held when both nervous systems feel safe.',
      familie: 'The whole family slows down. There is room for pauses, for humour, for simply being together without purpose. It is in these moments that connection grows stronger.'
    },
    professionel: {
      titel: 'Systemic effect of ventral vagal state',
      barn: 'The child\'s social engagement system is activated via mirror neurons: safe parent → safe child. Attachment behaviour (explore/return) functions optimally. Mentalisation capacity is accessible.',
      partner: 'The parental alliance is strengthened: co-regulation between partners enables constructive conflict resolution and cooperation on the parenting task. Affective attunement is accessible.',
      familie: 'The system as a whole is in homeostasis. Communication patterns are flexible, roles are negotiable, and the family\'s narrative identity can evolve. This is the optimal window for therapeutic intervention.'
    }
  },
  2: {
    privat: {
      titel: 'What does your family feel when you are in alarm?',
      barn: 'Your child senses it immediately. Some children become quiet and invisible — they have learned that it is safest. Others escalate, because they are trying to "reach you" through your alarm. Both are attachment behaviour.',
      partner: 'Your communication becomes harsh or disappears. One attacks, the other withdraws. It looks like a conflict about practical things — but it is really about: "Are you there for me? Can I reach you?"',
      familie: 'The atmosphere at home becomes electric. Everyone is on guard. Even the good moments are fragile, because everyone is waiting for the next escalation. Routines break down, patience vanishes.'
    },
    professionel: {
      titel: 'Systemic effect of sympathetic activation',
      barn: 'The child\'s neuroception detects danger: the attachment system activates in protest or despair mode. Behaviours such as clinging, acting out, or withdrawal are regulatory strategies — not "problem behaviour."',
      partner: 'Pursuer-withdrawer dynamics intensify. When one partner is in sympathetic arousal, the other\'s nervous system is triggered — a negative interaction cycle is established. Mentalisation is compromised bilaterally.',
      familie: 'The system shifts to survival mode: communication is reduced to imperative form, role flexibility disappears, and the risk of parentification increases. Children take on regulatory responsibility for parents.'
    }
  },
  3: {
    privat: {
      titel: 'What does your family feel when you are shut down?',
      barn: 'Your child feels your absence — even when you are physically present. Some children desperately try to wake you: they shout, throw, provoke. Others give up and retreat into themselves. Both are a child who misses their parent.',
      partner: 'Your partner may experience you as indifferent or cold — but it is not indifference. It is overload. The misunderstanding can create deep loneliness in both of you.',
      familie: 'The family loses its connection. Everyone is in the same room, but no one is truly present. Routines may keep going on the surface, but the emotional contact is broken. The children begin to fend for themselves.'
    },
    professionel: {
      titel: 'Systemic effect of dorsal vagal state',
      barn: 'The child\'s attachment system is in crisis: the attachment figure is physically available but emotionally unavailable. This is the core of disorganised attachment — fear without resolution. The child\'s own strategies (hyperactivation or deactivation) become consolidated.',
      partner: 'The partner experiences emotional unavailability: attempts at contact are met with flatness or absence. This can be interpreted as rejection and trigger the partner\'s own attachment system. Risk of parallel isolation.',
      familie: 'The system fragments: family members operate as isolated units. Emotional neglect — not through intention, but through capacity failure. Particularly risky for younger children, whose attachment development requires active emotional availability.'
    }
  }
};

// ============================================================
// Trappen — Pattern reflections (English)
// ============================================================
var TRAPPEN_MOENSTRE_EN = {
  privat: {
    mestTryg: 'You have mostly been in the safety zone. That is a good foundation — hold on to what brings you there. Notice what makes the difference on those days.',
    mestAlarm: 'You have mostly been in alarm this period. That is not wrong — it is information. Your nervous system is telling you that something is pressing. What would happen if you gave yourself 5 minutes of breathing each time you notice it?',
    mestNedlukning: 'You have mostly been in shutdown. That tells you the strain has been high — perhaps for longer than you realised. Be gentle with yourself. Small steps: feel your feet, drink something warm, seek out another person. You do not need to solve anything — just come a little bit back to your body.',
    blandtMoenster: 'You have moved between states. That is actually healthy — it shows that your nervous system can shift. Notice what brings you up, and what brings you down. Those patterns are the key.',
    forFaa: 'You have only checked in a few times. That is perfectly okay — there are no demands here. The more often you check in, the clearer the pattern becomes. Try making it part of your morning.',
    ingenData: 'You have not checked in yet. Give it a try — it takes 5 seconds. Over time it gives you a picture of where your nervous system is in everyday life.'
  },
  professionel: {
    mestTryg: 'The client is predominantly in a ventral vagal state — the therapeutic window is open. Consider intensifying narrative work and mentalisation exercises during this period.',
    mestAlarm: 'The client is predominantly in sympathetic activation. Prioritise regulatory interventions (polyvagal, somatic) over conversation-based processing. Explore what maintains the chronic activation — external stressors or retraumatisation?',
    mestNedlukning: 'The client is predominantly in a dorsal vagal state. Proceed cautiously: bottom-up interventions, sensory stimulation, graduated activation. Investigate whether there is active danger in the client\'s life sustaining the immobilisation response.',
    blandtMoenster: 'The client oscillates between states — the window of tolerance is narrow but flexible. Focus on expanding the window: psychoeducation about the nervous system, regulatory exercises, and consolidation of moments of safety.',
    forFaa: 'Insufficient data for pattern analysis. Encourage the client to register daily — this increases self-awareness and provides clinically relevant data.',
    ingenData: 'No registrations. Introduce the Staircase as a psychoeducational tool and encourage daily use between sessions.'
  }
};

// ============================================================
// Morning greetings by weekday and season (English)
// ============================================================
var MORGEN_HILSNER_EN = {
  mandag: 'New week. You do not need a plan — just a next step.',
  tirsdag: 'Tuesday. The week is underway. How did you land in it?',
  onsdag: 'Middle of the week. A good time to pause and feel into yourself.',
  torsdag: 'Thursday. The weekend is near. What has this week taught you?',
  fredag: 'Friday. The week is almost over. What will you carry forward?',
  loerdag: 'Weekend. Perhaps there is room for something that usually does not get space.',
  soendag: 'Sunday. A day to gather yourself — before a new week begins.',
  vinter: 'It is dark outside. But you are here.',
  foraar: 'Something new is on its way. In you, too.',
  sommer: 'The light is long. Use it to see clearly.',
  efteraar: 'The leaves are falling. Perhaps there is something you can let go of, too.'
};

// ============================================================
// VURDERING — Selvvurdering / Assessment
// 6 cirkler × 1 generelt spørgsmål + 3 uddybende vinkler
// ============================================================
var VURDERING_DATA = {
  centrum: {
    titel: 'Familien som helhed',
    ikon: 'leaf',
    farve: '#2C5F5C',
    generelt: {
      privat: 'Hvordan oplever du jeres familie som helhed lige nu?',
      professionel: 'Hvordan vurderer du familiens samlede funktionsniveau?'
    },
    vinkler: [
      {
        id: 'sammenhold',
        privat: { label: 'Sammenhold', spg: 'Føler du, at I holder sammen som familie — også når det er svært?' },
        professionel: { label: 'Kohæsion', spg: 'Hvor stærk er familiens indbyrdes kohæsion under pres?' }
      },
      {
        id: 'kommunikation',
        privat: { label: 'Åbenhed', spg: 'Kan I tale åbent om det, der fylder — uden at det bliver til konflikt?' },
        professionel: { label: 'Kommunikation', spg: 'Hvor funktionel er familiens kommunikation om svære emner?' }
      },
      {
        id: 'haab',
        privat: { label: 'Håb', spg: 'Tror du på, at jeres familie kan finde en bedre balance?' },
        professionel: { label: 'Motivation', spg: 'Hvor motiveret er familien for forandring og behandling?' }
      }
    ]
  },
  relationer: {
    titel: 'Tilknytning & tryghed',
    ikon: 'heart',
    farve: '#3A7A76',
    generelt: {
      privat: 'Hvordan oplever du tryghed og tilknytning i dine nære relationer?',
      professionel: 'Hvordan vurderer du tilknytningsmønstrene i familien?'
    },
    vinkler: [
      {
        id: 'tryghed',
        privat: { label: 'Tryghed', spg: 'Føler du dig tryg i dine vigtigste relationer?' },
        professionel: { label: 'Tilknytningstryghed', spg: 'Hvor tryg er den primære tilknytning i familien?' }
      },
      {
        id: 'saarbarhed',
        privat: { label: 'Sårbarhed', spg: 'Oplever du, at du bliver mødt, når du viser dig sårbar?' },
        professionel: { label: 'Emotionel responsivitet', spg: 'Hvor emotionelt responsive er familiemedlemmerne over for hinanden?' }
      },
      {
        id: 'arv',
        privat: { label: 'Arv fra opvækst', spg: 'Føler du, at din egen opvækst påvirker dine relationer i dag?' },
        professionel: { label: 'Intergenerationel transmission', spg: 'I hvor høj grad påvirker forældrenes egne tilknytningserfaringer familiedynamikken?' }
      }
    ]
  },
  parterapi: {
    titel: 'Parforholdet & nærvær',
    ikon: 'heartDouble',
    farve: '#8B6F5C',
    generelt: {
      privat: 'Hvordan oplever du parforholdet lige nu?',
      professionel: 'Hvordan vurderer du forældrealliancen?'
    },
    vinkler: [
      {
        id: 'naerhed',
        privat: { label: 'Nærvær', spg: 'Kan I finde nærvær og intimitet i hverdagen?' },
        professionel: { label: 'Emotionel nærhed', spg: 'Er der emotionel nærhed mellem forældrene?' }
      },
      {
        id: 'konflikt',
        privat: { label: 'Konflikter', spg: 'Kan I håndtere uenigheder uden at det eskalerer?' },
        professionel: { label: 'Konfliktmønster', spg: 'Hvor konstruktiv er parrets konflikthåndtering?' }
      },
      {
        id: 'reparation',
        privat: { label: 'Reparation', spg: 'Kan I finde tilbage til hinanden efter en konflikt?' },
        professionel: { label: 'Reparationskapacitet', spg: 'Er parret i stand til at reparere efter brud?' }
      }
    ]
  },
  familie: {
    titel: 'Samspil & mønstre',
    ikon: 'homeHeart',
    farve: '#6B7B5C',
    generelt: {
      privat: 'Hvordan oplever du jeres families samspil og mønstre?',
      professionel: 'Hvordan vurderer du familiens interaktionsmønstre?'
    },
    vinkler: [
      {
        id: 'gentagelser',
        privat: { label: 'Gentagelser', spg: 'Oplever du, at de samme konflikter gentager sig igen og igen?' },
        professionel: { label: 'Cirkulære mønstre', spg: 'Hvor fastlåste er familiens cirkulære interaktionsmønstre?' }
      },
      {
        id: 'stemning',
        privat: { label: 'Stemning', spg: 'Hvordan er den generelle stemning derhjemme?' },
        professionel: { label: 'Emotionelt klima', spg: 'Hvordan er det emotionelle klima i familien?' }
      },
      {
        id: 'plads',
        privat: { label: 'Plads til alle', spg: 'Har alle i familien plads til at være sig selv?' },
        professionel: { label: 'Individuation', spg: 'Er der plads til individuation inden for familiesystemet?' }
      }
    ]
  },
  individuel: {
    titel: 'Dig selv & dine spor',
    ikon: 'butterfly',
    farve: '#9E6B7B',
    generelt: {
      privat: 'Hvordan har du det med dig selv lige nu?',
      professionel: 'Hvordan vurderer du klientens individuelle funktionsniveau?'
    },
    vinkler: [
      {
        id: 'traumer',
        privat: { label: 'Gamle sår', spg: 'Hvor meget påvirker gamle oplevelser dit liv i dag?' },
        professionel: { label: 'Traumebelastning', spg: 'Hvor belastet er klienten af uforarbejdede traumatiske oplevelser?' }
      },
      {
        id: 'energi',
        privat: { label: 'Energi', spg: 'Har du energi til at være den forælder og partner, du gerne vil være?' },
        professionel: { label: 'Ressourcer', spg: 'Har klienten tilstrækkelige psykiske ressourcer til forældreopgaven?' }
      },
      {
        id: 'stabilitet',
        privat: { label: 'Stabilitet', spg: 'Føler du dig stabil nok til at håndtere hverdagen?' },
        professionel: { label: 'Psykisk stabilitet', spg: 'Hvor psykisk stabil er klienten i dagligdagen?' }
      }
    ]
  },
  aandedraet: {
    titel: 'Åndedræt & nervesystem',
    ikon: 'wind',
    farve: '#B8956A',
    generelt: {
      privat: 'Hvordan oplever du dit nervesystem og din krop lige nu?',
      professionel: 'Hvordan vurderer du klientens reguleringskapacitet?'
    },
    vinkler: [
      {
        id: 'ro',
        privat: { label: 'Indre ro', spg: 'Kan du finde ro i din krop, når du har brug for det?' },
        professionel: { label: 'Selvregulering', spg: 'Er klienten i stand til at selvregulere sit nervesystem?' }
      },
      {
        id: 'alarm',
        privat: { label: 'Alarm', spg: 'Hvor ofte føler du dig i alarmberedskab — anspændt, på vagt, urolig?' },
        professionel: { label: 'Sympatisk aktivering', spg: 'Hvor kronisk er klientens sympatiske aktivering?' }
      },
      {
        id: 'coregulering',
        privat: { label: 'Smitte', spg: 'Kan du mærke, at din uro smitter af på dem omkring dig?' },
        professionel: { label: 'Co-regulering', spg: 'Er forælderen i stand til at co-regulere barnet?' }
      }
    ]
  },
  boern: {
    titel: 'Barnets stemme',
    ikon: 'sprout',
    farve: '#5C8B6F',
    generelt: {
      privat: 'Hvordan oplever du, at dit barn/dine børn har det?',
      professionel: 'Hvordan vurderer du barnets trivsel og position i familiesystemet?'
    },
    vinkler: [
      {
        id: 'trivsel',
        privat: { label: 'Trivsel', spg: 'Virker dit barn generelt glad og i trivsel?' },
        professionel: { label: 'Generel trivsel', spg: 'Hvordan vurderer du barnets generelle trivsel?' }
      },
      {
        id: 'stemme',
        privat: { label: 'Stemme', spg: 'Har dit barn plads til at udtrykke sine følelser derhjemme?' },
        professionel: { label: 'Barnets stemme', spg: 'Har barnet en autentisk stemme i familiesystemet?' }
      },
      {
        id: 'kontakt',
        privat: { label: 'Kontakt', spg: 'Kan du og dit barn finde forbindelse — også i de svære øjeblikke?' },
        professionel: { label: 'Forælder-barn-relation', spg: 'Hvor tryg er forælder-barn-relationen?' }
      }
    ]
  }
};

// Rækkefølge for vurderingstrin (ekskl. centrum — det er samlet resultat)
var VURDERING_RAEKKEFOELGE = ['relationer', 'parterapi', 'familie', 'boern', 'aandedraet', 'individuel'];
