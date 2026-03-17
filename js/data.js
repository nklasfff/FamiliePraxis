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
    titel: 'Når ordene ikke rækker',
    ikon: '💬',
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
    ikon: '💔',
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
    ikon: '🛡️',
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
    ikon: '⚡',
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
    ikon: '🕊️',
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
    ikon: '🌟',
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
    ikon: '✨',
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
    ikon: '🌿',
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
