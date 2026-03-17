// ============================================================
// FamiliePraxis — Data & Indhold
// Rikke Veth · Familiepraxis · Frederiksberg
// ============================================================

var PRAKSIS_INFO = {
  navn: 'Familiepraxis',
  terapeut: 'Rikke Veth',
  titel: 'Familieterapeut',
  adresse: 'Amalievej 6, 1875 Frederiksberg C',
  telefon: '+45 28 94 55 60',
  email: 'info@familiepraxis.dk',
  cvr: '42689823',
  website: 'familiepraxis.dk'
};

// ============================================================
// SVG-cirkel tekster for de to perspektiver
// ============================================================
var CIRKEL_TEKSTER = {
  privat: {
    centrum: ['Familien', 'i balance'],
    relationer: ['Relationer', '& tilknytning'],
    parterapi: ['Parforholdet', '& nærvær'],
    familie: ['Familien', '& samspil'],
    individuel: ['Dig selv', '& indre ro'],
    aandedraet: ['Åndedræt', '& krop'],
    boern: ['Børnene', '& trivsel']
  },
  professionel: {
    centrum: ['Faglig', 'indsats'],
    relationer: ['Relationel', 'forståelse'],
    parterapi: ['Parforhold', '& dynamikker'],
    familie: ['Familie-', 'behandling'],
    individuel: ['Individuel', 'behandling'],
    aandedraet: ['Krop &', 'regulering'],
    boern: ['Børne-', 'perspektivet']
  }
};

// ============================================================
// Cirkelnavne (lookup)
// ============================================================
var CIRKEL_NAVNE = {
  centrum: 'Familien i balance',
  relationer: 'Relationer & tilknytning',
  parterapi: 'Parforholdet',
  familie: 'Familiesamspil',
  individuel: 'Individuel terapi',
  aandedraet: 'Åndedræt & krop',
  boern: 'Børn & trivsel'
};

// ============================================================
// 7 Cirkler — Kerneområder
// ============================================================
var CIRKLER = [
  {
    id: 'centrum',
    titel: 'Familien i balance',
    ikon: '🌿',
    privat: {
      overblik: {
        beskrivelse: 'Når familien er i balance, mærker alle medlemmer en grundlæggende tryghed. Det handler ikke om perfektion, men om at kunne rumme hinandens følelser og behov — også når livet er svært.',
        punkter: [
          'Tryghed som fundament for trivsel',
          'At kunne tale om det svære',
          'Plads til alle i familien',
          'Fra konflikter til forbindelse'
        ],
        tip: 'Start med at lægge mærke til de øjeblikke i hverdagen, hvor I faktisk lykkes som familie. Anerkend dem højt.'
      },
      dybde: [
        'Familiens balance er ikke en statisk tilstand, men en levende proces. Det er evnen til at vende tilbage til forbindelse efter konflikter, at reparere brud og at holde fast i kærligheden — selv når den er svær at mærke.',
        'Mange familier oplever perioder, hvor kommunikationen bryder sammen, og hvor medlemmerne trækker sig fra hinanden. Det kan ske i forbindelse med store forandringer som skilsmisse, sygdom, flytning eller konflikter. I de perioder har familien brug for hjælp til at finde tilbage til hinanden.',
        'I familieterapien arbejder vi med at forstå de mønstre, der holder familien fast i negative spiraler. Vi udforsker, hvordan hvert familiemedlems historie og behov påvirker samspillet — og vi finder nye veje til at møde hinanden.',
        'Når familien begynder at opleve, at konflikter kan løses uden at nogen går i stykker, vokser tilliden. Børnene mærker det. Forældrene mærker det. Der opstår en ny form for ro, som bærer familien videre.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Familiebalance er det terapeutiske mål, hvor systemet fungerer godt nok til at rumme udvikling og udfordringer. Fagligt arbejder vi med familiens samlede kapacitet for regulering og tilknytning.',
        punkter: [
          'Systemisk forståelse af familiedynamikker',
          'Tilknytningsbaseret tilgang',
          'Ressourcefokuseret intervention',
          'Familiens reguleringskapacitet'
        ],
        tip: 'Brug genogrammet som redskab til at synliggøre mønstre på tværs af generationer.'
      },
      dybde: [
        'I det professionelle arbejde med familier er det afgørende at forstå familien som et system, hvor hvert medlem påvirker og påvirkes af helheden. En systemisk tilgang betyder, at vi ikke leder efter en enkelt årsag til problemerne, men udforsker de cirkulære processer, der opretholder dem.',
        'Tilknytningsteori giver os et fundament for at forstå, hvorfor bestemte mønstre gentager sig i familier. Når vi kan identificere tilknytningsmønstrene — tryg, utryg-ambivalent, utryg-undgående eller desorganiseret — kan vi målrette vores intervention mod de specifikke behov.',
        'Familiebehandling i kommunalt regi kræver en særlig opmærksomhed på samarbejdet med andre fagprofessionelle. Koordinering med socialrådgivere, skoler, institutioner og sundhedsvæsen er ofte en forudsætning for en vellykket indsats.',
        'Dokumentation og evaluering af familiebehandlingen er centralt. Vi arbejder med løbende vurdering af familiens progression og tilpasser indsatsen efter familiens aktuelle behov og ressourcer.'
      ]
    }
  },
  {
    id: 'relationer',
    titel: 'Relationer & tilknytning',
    ikon: '💛',
    privat: {
      overblik: {
        beskrivelse: 'Vores tidligste relationer former den måde, vi møder verden på. At forstå dine tilknytningsmønstre er første skridt mod dybere og mere nærværende relationer.',
        punkter: [
          'Forstå dit tilknytningsmønster',
          'Skab tryggere relationer',
          'Bryd uhensigtsmæssige mønstre',
          'Lær at bede om det, du har brug for'
        ],
        tip: 'Læg mærke til, hvad du gør, når du bliver usikker i en relation. Trækker du dig? Klynger du dig? Begge dele er naturlige strategier — men de kan ændres.'
      },
      dybde: [
        'Tilknytning er den dybeste menneskelige drift — behovet for at høre til, at blive set og at være elsket. Fra vores første åndedrag søger vi forbindelse med dem omkring os, og den måde vi bliver mødt på former vores indre arbejdsmodeller for relationer resten af livet.',
        'Mange af de udfordringer, vi oplever i vores voksne relationer, har rødder i de tidlige tilknytningserfaringer. Hvis du som barn lærte, at dine behov var for meget, eller at du måtte klare dig selv, bærer du sandsynligvis de strategier med dig ind i dine nuværende relationer.',
        'I terapien arbejder vi med at gøre disse ubevidste mønstre bevidste. Når du kan se, at din tendens til at trække dig under konflikter er en overlevelsesstrategi fra barndommen — ikke en fejl ved dig — åbner der sig nye muligheder for forandring.',
        'At ændre tilknytningsmønstre kræver tid og mod. Det handler om at turde vise sårbarhed, at øve sig i at blive i kontakten, også når det er ubehageligt, og langsomt at opbygge nye erfaringer af tryg forbindelse.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Tilknytningsteorien er fundamentet for vores forståelse af relationelle vanskeligheder. Vi arbejder med at kortlægge og transformere tilknytningsmønstre i den terapeutiske relation.',
        punkter: [
          'Tilknytningsbaseret assessment',
          'Mentaliseringsbaseret intervention',
          'Relationel traumeforståelse',
          'Circle of Security-principper'
        ],
        tip: 'Vær opmærksom på din egen tilknytningsstil som terapeut — den påvirker den terapeutiske alliance.'
      },
      dybde: [
        'Tilknytningsteori, som udviklet af John Bowlby og videreført af Mary Ainsworth, Mary Main og mange andre, giver os en robust ramme for at forstå menneskelig udvikling og psykopatologi. I klinisk praksis bruger vi denne forståelse til at guide vores interventioner.',
        'Mentalisering — evnen til at forstå adfærd i lyset af underliggende mentale tilstande — er tæt forbundet med tryg tilknytning. Når vi arbejder med familier, er et centralt mål at styrke forældrenes evne til at mentalisere omkring deres børns indre verden.',
        'Relationelle traumer — gentagne krænkelser i tilknytningsrelationen — kræver en særlig terapeutisk tilgang. Her er den terapeutiske relation i sig selv et centralt redskab: terapeuten tilbyder en ny relationel erfaring, som gradvist kan udvide klientens tilknytningsrepræsentationer.',
        'I supervision og faglig refleksion er det vigtigt at holde fokus på parallelprocesser: de mønstre, der udspiller sig i familien, har en tendens til at gentage sig i relationen mellem terapeut og familie, og mellem terapeut og supervisor.'
      ]
    }
  },
  {
    id: 'parterapi',
    titel: 'Parforholdet',
    ikon: '💜',
    privat: {
      overblik: {
        beskrivelse: 'Parforholdet er den mest intense voksne tilknytningsrelation. Når det fungerer, er det en kilde til dyb tryghed og glæde. Når det halter, påvirker det alt andet i livet.',
        punkter: [
          'Forstå jeres negative dansetrin',
          'Genopbyg tillid og nærhed',
          'Lær at håndtere konflikter konstruktivt',
          'Styrk den følelsesmæssige forbindelse'
        ],
        tip: 'De fleste parkonflikter handler ikke om det, I skændes om. De handler om: "Er du der for mig? Betyder jeg noget for dig?"'
      },
      dybde: [
        'Parforholdet rummer et paradoks: den person, der kan give os den dybeste tryghed, er også den person, der kan såre os mest. Det er denne sårbarhed, der gør parforholdet til livets mest transformerende — og mest udfordrende — relation.',
        'De fleste par, der søger terapi, er fanget i negative interaktionsmønstre, som John Gottman og Sue Johnson har beskrevet indgående. Et typisk mønster er forfølger-undviger-dynamikken, hvor den ene part kræver kontakt, mens den anden trækker sig — og begge føler sig alene og misforstået.',
        'I parterapien arbejder vi med at komme bag om de overfladiske konflikter og finde de dybere følelsesmæssige behov, der driver dem. Når partnerne kan dele deres sårbarhed — deres frygt for at blive forladt, deres længsel efter nærhed — ændrer samtalen karakter.',
        'At genopbygge tillid efter et tillidsbrud er en af de sværeste, men også mest meningsfulde processer i et parforhold. Det kræver, at den ene part tager ansvar og viser ægte anger, mens den anden part langsomt tør åbne sig igen. Det er muligt — men det tager tid.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Parterapi kræver en særlig kompetence i at navigere mellem to personers samtidige behov og at facilitere følelsesmæssig kontakt i en sikker ramme.',
        punkter: [
          'EFT (Emotionally Focused Therapy)',
          'Gottmans forskningsbaserede tilgang',
          'Tilknytningsfokuseret parterapi',
          'Arbejde med tillidsbrud og reparation'
        ],
        tip: 'Hold fokus på processen mellem parterne — ikke på indholdet i konflikten. Det er dansen, der skal ændres, ikke trinene.'
      },
      dybde: [
        'Emotionally Focused Therapy (EFT), udviklet af Sue Johnson, er en af de mest veldokumenterede tilgange til parterapi. EFT bygger på tilknytningsteori og arbejder med at identificere og transformere de negative interaktionscyklusser, der holder parret fast.',
        'Gottmans forskning har identificeret fire kommunikationsmønstre — kritik, foragt, forsvar og stonewalling — som med stor præcision kan forudsige parforholdets overlevelse. I terapien arbejder vi aktivt med at erstatte disse mønstre med sundere alternativer.',
        'Kulturelle og kønsmæssige faktorer spiller en væsentlig rolle i parforholdet. Som terapeut er det vigtigt at være opmærksom på, hvordan samfundsmæssige forventninger til køn, seksualitet og familieformer påvirker parrets dynamik og selvforståelse.',
        'Supervision af parterapi bør inkludere refleksion over terapeutens egen parforholdshistorie og tilknytningsstil. Modoverføring er særligt intens i parterapi, fordi terapeutens egne relationelle erfaringer uundgåeligt aktiveres.'
      ]
    }
  },
  {
    id: 'familie',
    titel: 'Familiesamspil',
    ikon: '🏡',
    privat: {
      overblik: {
        beskrivelse: 'Familiens samspil er den daglige dans mellem alle medlemmer. Små forandringer i mønstrene kan skabe store forandringer i hele familiens trivsel.',
        punkter: [
          'Forstå jeres familiedynamik',
          'Skab bedre kommunikation',
          'Håndter forandringer sammen',
          'Styrk familiens fællesskab'
        ],
        tip: 'Familiemøder — selv 15 minutter om ugen — kan gøre en kæmpe forskel. Giv alle en stemme, også de mindste.'
      },
      dybde: [
        'Hver familie har sin egen unikke kultur — sine egne ritualer, regler, roller og kommunikationsmønstre. Nogle af disse mønstre er bevidste valg, men mange er arvet fra tidligere generationer eller er opstået som reaktion på udfordringer, familien har mødt.',
        'Når et barn mistrives, er det sjældent kun barnets problem. Det er oftest et signal om, at noget i familiens samspil behøver opmærksomhed. Barnet bærer symptomerne, men familien bærer dynamikken. Derfor er familiebehandling så effektiv.',
        'Familier i forandring — efter skilsmisse, ved sammensatte familier, ved sygdom eller tab — har brug for at genforhandle roller og regler. Det kan være smertefuldt, men det rummer også muligheden for at skabe nye og bedre måder at være familie på.',
        'At arbejde med familiens ressourcer er mindst lige så vigtigt som at adressere problemerne. Hver familie har styrker, traditioner og øjeblikke af forbindelse, som kan bruges som fundament for forandring.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Familiesamspil analyseres systemisk med fokus på kommunikationsmønstre, grænser, hierarkier og alliancer. Intervention rettes mod systemet, ikke individet.',
        punkter: [
          'Strukturel familieterapi (Minuchin)',
          'Narrativ familieterapi',
          'Løsningsfokuseret tilgang',
          'Familieundersøgelser (§50)'
        ],
        tip: 'Brug cirkulære spørgsmål til at synliggøre relationelle mønstre for familien selv.'
      },
      dybde: [
        'Den strukturelle familieterapi, som Salvador Minuchin udviklede, giver os redskaber til at forstå familiens organisation: grænser mellem subsystemer, hierarkier, koalitioner og alliancer. Når strukturen er dysfunktionel — f.eks. når et barn er parentificeret — kan vi intervenere direkte i strukturen.',
        'Narrativ terapi tilbyder familien muligheden for at genfortælle sin historie. Ved at eksternalisere problemet ("problemet er problemet, personen er ikke problemet") skabes rum for, at familien kan finde alternative historier om sig selv — historier med mere handlekraft og håb.',
        'I kommunalt regi udføres familieundersøgelser efter Servicelovens §50 som grundlag for afgørelser om foranstaltninger. Disse undersøgelser kræver en grundig og balanceret vurdering af familiens samlede situation, ressourcer og belastninger.',
        'Samarbejde med familien — ikke bare om familien — er et centralt princip. Inddragelse af familiens eget perspektiv, ønsker og mål for behandlingen øger ikke bare effektiviteten, men er også en etisk forpligtelse.'
      ]
    }
  },
  {
    id: 'individuel',
    titel: 'Individuel terapi',
    ikon: '🦋',
    privat: {
      overblik: {
        beskrivelse: 'Individuel terapi er et rum, hvor du kan udforske dig selv i dit eget tempo. Her er plads til det, der er svært at sige højt, og til de følelser, der fylder mest.',
        punkter: [
          'Et trygt rum til selvudforskning',
          'Arbejd med angst, stress eller depression',
          'Forstå dine mønstre og reaktioner',
          'Find tilbage til dig selv'
        ],
        tip: 'Det kræver mod at bede om hjælp. At du overvejer terapi, er allerede et tegn på styrke.'
      },
      dybde: [
        'I individuel terapi er der plads til at stoppe op og lytte indad. Hverdagen giver sjældent rum til den slags fordybelse, og mange mennesker lever med en fornemmelse af, at noget er galt — uden helt at kunne sætte ord på hvad.',
        'Terapi handler ikke om at få gode råd. Det handler om at få en tryg relation, hvor du kan udforske de dele af dig selv, du normalt holder skjult — også for dig selv. I den udforskning ligger nøglen til forandring.',
        'Mange oplever, at de gentager de samme mønstre i forskellige relationer: vælger de forkerte partnere, siger ja når de mener nej, undgår konflikter eller eksploderer i vrede. Disse mønstre har engang tjent et formål, men de kan ændres, når de bliver bevidste.',
        'Terapiens mål er ikke at gøre dig til et andet menneske, men at give dig flere valgmuligheder. Når du forstår, hvorfor du reagerer, som du gør, kan du begynde at vælge anderledes — og langsomt skabe det liv, der passer til dig.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Individuel terapi i en familieterapeutisk kontekst holder altid fokus på individet-i-relation. Vi arbejder med intrapsykiske processer i lyset af det relationelle felt.',
        punkter: [
          'Tilknytningsfokuseret individuel terapi',
          'Traumebearbejdning',
          'Affektregulering og mentalisering',
          'Eksistentiel og fænomenologisk tilgang'
        ],
        tip: 'Husk at individuel terapi med én part i et par/familiesystem altid påvirker hele systemet. Overvej alliancespørgsmålet.'
      },
      dybde: [
        'Individuel terapi i en systemisk ramme adskiller sig fra traditionel individuel terapi ved konsekvent at tænke individet i kontekst. Vi udforsker klientens indre verden, men altid med opmærksomhed på de relationelle kontekster, der har formet og fortsat former denne verden.',
        'Traumebearbejdning kræver en faseopdelt tilgang: først stabilisering og ressourceopbygning, derefter bearbejdning af traumatiske erindringer, og endelig integration og ny orientering i livet. At springe stabiliseringsfasen over er en af de hyppigste fejl i traumeterapi.',
        'Affektregulering — evnen til at opleve, tolerere og modulere følelser — er en kernekompetence, som udvikles i trygge relationer. Mange klienter har ikke lært denne kompetence i opvæksten og har brug for at udvikle den i den terapeutiske relation.',
        'Supervision af individuel terapi bør fokusere på terapeutens brug af sig selv: Hvad sker der i den terapeutiske relation? Hvilke følelser aktiveres hos terapeuten? Og hvordan kan denne information bruges konstruktivt i terapien?'
      ]
    }
  },
  {
    id: 'aandedraet',
    titel: 'Åndedræt & krop',
    ikon: '🌬️',
    privat: {
      overblik: {
        beskrivelse: 'Kroppen bærer alt det, vi ikke siger. Åndedrættet er den mest direkte vej til at regulere dit nervesystem og finde ro — også midt i stormen.',
        punkter: [
          'Lær dit nervesystem at kende',
          'Brug åndedrættet som anker',
          'Slip kropslige spændinger',
          'Find ro i din krop'
        ],
        tip: 'Prøv lige nu: Tag tre dybe vejrtrækninger, hvor du forlænger udåndingen. Mærk hvad der sker i din krop.'
      },
      dybde: [
        'Åndedrættet er en bro mellem det bevidste og det ubevidste, mellem krop og sind. Det er den eneste autonome funktion, vi også kan styre bevidst — og det gør det til et kraftfuldt redskab for selvregulering.',
        'Når vi er stressede eller angste, ændrer vores åndedræt sig: det bliver overfladisk, hurtigt, og flytter op i brystet. Denne ændring sender signal til hjernen om, at der er fare, hvilket forstærker stressresponsen i en negativ spiral. Ved bevidst at ændre åndedrættet kan vi bryde denne spiral.',
        'Åndedrætsterapi går dybere end simple vejrtrækningsøvelser. Det handler om at møde de følelser og minder, der er lagret i kroppen, og langsomt at frigøre dem. Mange oplever, at dybe følelser — sorg, vrede, lettelse — kommer til overfladen under åndedrætsarbejde.',
        'Kroppen husker det, sindet har glemt. Mange mennesker bærer på kropslige spændinger — i kæben, skuldrene, maven — som er udtryk for undertrykte følelser eller gamle beskyttelsesstrategier. Gennem kropsbevidsthed og åndedræt kan disse spændinger langsomt frigøres.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Kropsligt orienteret terapi og åndedrætsterapi integrerer somatiske processer i den terapeutiske behandling. Vi arbejder med polyvagal teori og somatisk oplevelse.',
        punkter: [
          'Polyvagal teori (Stephen Porges)',
          'Somatic Experiencing (Peter Levine)',
          'Åndedrætsterapi som klinisk redskab',
          'Kropslig regulering i familiebehandling'
        ],
        tip: 'Inddrag kropslige interventioner tidligt i forløbet — de giver klienten konkrete redskaber til selvregulering mellem sessionerne.'
      },
      dybde: [
        'Stephen Porges\' polyvagale teori har revolutioneret vores forståelse af nervesystemets rolle i psykisk sundhed. Teorien beskriver tre hierarkiske tilstande: den ventrale vagus (social engagement og tryghed), det sympatiske system (kamp-flugt) og den dorsale vagus (kollaps og afkobling).',
        'Peter Levines Somatic Experiencing bygger på observationen af, at dyr i naturen sjældent udvikler traumer, fordi de instinktivt gennemfører den fysiologiske cyklus af aktivering og afladning. Mennesker derimod "fryser" ofte i aktiveringstilstanden, hvilket lagrer traumet i kroppen.',
        'Åndedrætsterapi som klinisk redskab kræver grundig uddannelse og supervision. Dybt åndedrætsarbejde kan aktivere stærke følelsesmæssige og fysiologiske reaktioner, og terapeuten skal kunne rumme og guide disse processer sikkert.',
        'I familiebehandling kan kropslige interventioner bruges til at ændre dynamikken i rummet. Når en familie er i høj affekt, kan en simpel vejrtrækningsøvelse sammen skabe et fælles reguleringspunkt og åbne for ny kontakt.'
      ]
    }
  },
  {
    id: 'boern',
    titel: 'Børn & trivsel',
    ikon: '🌱',
    privat: {
      overblik: {
        beskrivelse: 'Børn kommunikerer med hele deres væsen. Når et barn mistrives, er det en invitation til at lytte dybere — til barnet, til familien og til de omstændigheder, barnet lever i.',
        punkter: [
          'Forstå dit barns signaler',
          'Styrk tilknytningen til dit barn',
          'Hjælp dit barn med store følelser',
          'Skab trygge rammer for udvikling'
        ],
        tip: 'Børn har brug for at vide, at alle følelser er tilladte — også vrede, sorg og frygt. Det er adfærden, vi sætter grænser for, ikke følelserne.'
      },
      dybde: [
        'Børn er eksperter i at aflæse deres omgivelser. Længe før de har ord for det, mærker de stemninger, spændinger og forandringer i familien. Deres adfærd — hvad enten det er udadreageren, tilbagetrækning eller overdreven tilpasning — er altid meningsfuld kommunikation.',
        'Tryg tilknytning er det vigtigste, vi kan give vores børn. Det handler ikke om at være perfekte forældre, men om at være "gode nok" — om at kunne rumme barnets følelser, at reparere brud i kontakten og at være en sikker base, hvorfra barnet kan udforske verden.',
        'Når børn oplever skilsmisse, sygdom, tab eller andre svære livsbegivenheder, har de brug for hjælp til at forstå og bearbejde deres oplevelser. Børn har en tendens til at tage skyld og ansvar på sig, og de har brug for voksne, der hjælper dem med at sætte ord på det svære.',
        'At hjælpe sit barn er også at hjælpe sig selv. Ofte opdager forældre i terapien, at barnets udfordringer spejler noget i deres egen historie — og at vejen til at støtte barnet går gennem deres egen bearbejdning og vækst.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Børneperspektivet er centralt i al familiebehandling. Vi arbejder med barnets stemme, barnets oplevelse og barnets ret til at blive hørt og forstået.',
        punkter: [
          'Børnesamtaler og børneinddragelse',
          'Udviklingspsykologisk forståelse',
          'Børn i udsatte positioner',
          'Tværfagligt samarbejde om børn'
        ],
        tip: 'Husk at barnets "symptomer" ofte er de bedste løsninger, barnet har kunnet finde i en svær situation. Respektér barnets strategi, mens du hjælper med at finde bedre alternativer.'
      },
      dybde: [
        'Barnets perspektiv skal altid inddrages — det er ikke bare god praksis, det er en rettighed forankret i FN\'s Børnekonvention. I familiebehandling betyder det, at vi aktivt opsøger barnets oplevelse og forståelse, tilpasset barnets alder og modenhed.',
        'Udviklingspsykologisk viden er fundamentet for at forstå, hvad der er aldersvarende og hvad der er bekymrende. Et barns reaktioner skal altid vurderes i lyset af dets udviklingstrin — hvad der er normalt for en toårig, er anderledes end for en tiårig.',
        'Børn i udsatte positioner — omsorgssvigt, vold, misbrug — kræver en særlig opmærksomhed og en koordineret indsats. Som behandler har vi underretningspligt, og vi skal kunne navigere mellem den terapeutiske relation og myndighedsansvaret.',
        'Det tværfaglige samarbejde omkring udsatte børn er ofte komplekst og kan rumme mange modsatrettede perspektiver. At kunne facilitere og koordinere dette samarbejde er en vigtig kompetence for familieterapeuten.'
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
