-- FamiliePraxis Seed Data
-- Genereret automatisk fra data.js

-- ========== CIRKLER ==========
INSERT INTO circles (id, titel, ikon, sort_order, privat_overblik_beskrivelse, privat_overblik_punkter, privat_overblik_tip, privat_dybde, professionel_overblik_beskrivelse, professionel_overblik_punkter, professionel_overblik_tip, professionel_dybde) VALUES (
  39274centrum39274, 39274Familien som helhed39274, 39274leaf39274, 0,
  39274I en familie hænger alt sammen. Når ét medlem har det svært, mærker alle det — og når familien finder vej sammen, løfter det alle. At forstå familien som en helhed er det første skridt mod forandring.39274,
  '["Alt i familien hænger sammen","Traumatiske spor påvirker hele familien","Forandring ét sted skaber bevægelse alle steder","Jeres historie rummer også jeres styrke"]'::jsonb,
  39274Prøv at se jeres udfordringer som noget, familien bærer sammen — ikke som ét menneskes problem. Det ændrer alt.39274,
  '["Familier, der har levet med svære oplevelser — omsorgssvigt, vold, misbrug, psykisk sygdom eller kronisk stress — udvikler mønstre, der engang var nødvendige for at overleve. Men de samme mønstre kan holde familien fast, også når faren er overstået. At forstå det er begyndelsen på forandring.","Når vi ser familien som en helhed, opdager vi noget vigtigt: børnenes adfærd er ikke problemet — den er kommunikation. Et barn, der slår, råber eller trækker sig, fortæller os noget om, hvad det mærker i familien. Når vi lytter til den kommunikation, åbner der sig nye muligheder.","Mange familier har prøvet at løse problemerne ved at fokusere på ét familiemedlem — ofte barnet. Men fordi alt hænger sammen, er det sjældent nok. Familiebehandling ser på hele dynamikken: forældrenes egne historier, parforholdet, søskenderelationerne og de ydre belastninger.","At arbejde med familien som helhed kræver mod. Det betyder, at alle må se på deres egen rolle i samspillet — ikke for at finde skyld, men for at finde muligheder. Når en forælder tør se på sine egne sår, giver det barnet lov til at slippe de byrder, det har båret."]'::jsonb,
  39274En narrativ-systemisk tilgang ser familien som et samlet system, hvor traumatiske erfaringer, tilknytningsmønstre og generationelle spor skaber den dynamik, vi møder. Intervention rettes mod helheden — ikke symptombæreren.39274,
  '["Narrativ-systemisk helhedsforståelse","Intergenerationelle traumemønstre","Barnet som symptombærer for systemet","Menneskecentreret, ikke metodecentreret tilgang"]'::jsonb,
  39274Det vigtigste redskab er din intuition for, hvad dette menneske har brug for. Metoden følger mennesket — ikke omvendt.39274,
  '["I familiebehandling med udsatte familier er det afgørende at forstå, at familiens aktuelle vanskeligheder sjældent er opstået i et vakuum. Generationelle traumer, omsorgssvigt og belastende opvækstvilkår videreføres gennem tilknytningsmønstre, kropslige reaktioner og de historier, familien fortæller om sig selv.","Den narrativ-systemiske tilgang giver os mulighed for at arbejde med familiens selvforståelse. Ved at eksternalisere problemerne — adskille personen fra problemet — skabes rum for, at familien kan se sig selv som mere end deres vanskeligheder. Det er særligt vigtigt for familier, der har en lang historie i det kommunale system.","I komplekse sager med mange involverede fagprofessionelle er koordinering afgørende. Rollen som \"kaospilot\" — at navigere mellem socialrådgivere, skoler, institutioner, psykiatri og sundhedsvæsen — kræver evnen til at holde familiens perspektiv centralt, selv når systemets logik trækker i andre retninger.","Familieundersøgelser og §50-vurderinger kræver gennemsigtighed. Familien skal altid vide, hvad der skrives om dem, og have mulighed for at kommentere. Denne gennemsigtighed er ikke bare etisk korrekt — den styrker alliancen og øger behandlingens effektivitet."]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO circles (id, titel, ikon, sort_order, privat_overblik_beskrivelse, privat_overblik_punkter, privat_overblik_tip, privat_dybde, professionel_overblik_beskrivelse, professionel_overblik_punkter, professionel_overblik_tip, professionel_dybde) VALUES (
  39274relationer39274, 39274Tilknytning & tryghed39274, 39274heart39274, 1,
  39274Tryghed er fundamentet for alt. Den måde, du blev mødt på som barn, former den måde, du møder verden på i dag. At forstå dine tilknytningsmønstre er ikke at finde fejl — det er at finde vejen hjem til dig selv.39274,
  '["Dine mønstre har engang beskyttet dig","Utryg tilknytning kan heles","Tryghed skabes i relationer","Du kan give dit barn det, du selv manglede"]'::jsonb,
  39274Når du reagerer uforholdsmæssigt stærkt i en relation, er det ofte et ekko fra noget ældre. Vær nysgerrig på det ekko — det fortæller dig noget vigtigt.39274,
  '["Tilknytning er ikke et valg — det er en biologisk nødvendighed. Fra fødslen søger vi forbindelse med dem, der skal beskytte os. Hvis den forbindelse var ustabil, uforudsigelig eller fraværende, lærer vores nervesystem at være på vagt. Det er ikke en fejl — det var den bedste strategi, du havde som barn.","I familier med traumatiske erfaringer ser vi ofte, at tilknytningsmønstrene går i arv. En forælder, der selv voksede op uden tryghed, kan have svært ved at give sit barn den ro, barnet har brug for — ikke fordi forælderen ikke vil, men fordi nervesystemet ikke har lært, hvordan tryghed føles.","Det gode budskab er, at tilknytningsmønstre kan ændres. Hjernen er plastisk hele livet. Gennem trygge relationer — med en partner, en ven, en terapeut — kan nye erfaringer langsomt overskrive de gamle. Det kræver tid og gentagne oplevelser af at blive mødt, men det er muligt.","For forældre i udsatte familier er det afgørende at forstå: du behøver ikke reparere hele din historie, før du kan være en god nok forælder. Selv små øjeblikke af ægte kontakt — et blik, en berøring, et \"jeg er her\" — gør en forskel for dit barn."]'::jsonb,
  39274Tilknytning og mentalisering er de to bærende søjler i traumeinformeret familiebehandling. Vi kortlægger tilknytningsmønstre og styrker forældrenes kapacitet til at forstå barnets indre verden.39274,
  '["Circle of Security som ramme","Mentaliseringsbaseret behandling (MBT)","Desorganiseret tilknytning og trauma","Intergenerationel transmission af mønstre"]'::jsonb,
  39274Forældrenes tilknytningshistorie er ofte nøglen til at forstå barnets symptomer. Spørg altid til forældrenes egen opvækst.39274,
  '["I arbejdet med udsatte familier møder vi ofte desorganiseret tilknytning — det mønster, der opstår, når den person, der skal give tryghed, samtidig er kilden til frygt. Barnet fanges i et uløseligt paradoks, og de strategier, det udvikler, kan se ud som adfærdsproblemer, men er i virkeligheden overlevelsesstrategier.","Mentalisering — evnen til at se bag adfærden og forstå de følelser og intentioner, der driver den — er ofte svækket hos forældre, der selv har oplevet omsorgssvigt. Når vi styrker mentaliseringsevnen, styrker vi forælderens mulighed for at møde barnet med nysgerrighed frem for reaktivitet.","Circle of Security giver et konkret sprog for tilknytningsprocessen: barnet har brug for en sikker base at udforske fra og en sikker havn at vende tilbage til. Mange forældre i udsatte familier genkender smerteligt, at de selv manglede denne cirkel — og den erkendelse kan blive drivkraften for forandring.","I tværfagligt samarbejde er det vigtigt at formidle tilknytningsforståelsen til alle involverede — socialrådgivere, pædagoger, lærere. Når hele systemet omkring familien forstår barnets adfærd som tilknytningskommunikation, ændrer interventionerne karakter fra kontrol til omsorg."]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO circles (id, titel, ikon, sort_order, privat_overblik_beskrivelse, privat_overblik_punkter, privat_overblik_tip, privat_dybde, professionel_overblik_beskrivelse, professionel_overblik_punkter, professionel_overblik_tip, professionel_dybde) VALUES (
  39274parterapi39274, 39274Parforholdet39274, 39274heartDouble39274, 2,
  39274Parforholdet er familiens nerve. Når forældrene kæmper — med hinanden, med livet, med deres egne spor — mærker hele familien det. At tage sig af parforholdet er at tage sig af børnene.39274,
  '["Jeres konflikter har dybere rødder","Begge parters historie spiller ind","Børnene mærker stemningen mellem jer","Det er aldrig for sent at finde tilbage"]'::jsonb,
  39274Når I skændes, så prøv at stoppe op og spørge: "Hvad er det, jeg egentlig er bange for lige nu?" Svaret handler sjældent om opvasken.39274,
  '["I familier med traumatiske erfaringer er parforholdet ofte under ekstra pres. Når begge partnere bærer på svære oplevelser fra deres egen opvækst, kan selv små konflikter udløse store følelser — fordi det, der aktiveres, er ældre end parforholdet.","Et typisk mønster er, at den ene søger kontakt, mens den anden trækker sig. Det ligner en konflikt om praktiske ting, men det handler altid om det samme spørgsmål: \"Er du der for mig? Kan jeg stole på dig?\" Når begge partnere bærer utryg tilknytning, kan dette mønster blive meget intenst.","For forældre i udsatte familier kompliceres parforholdet ofte af ydre pres: økonomi, boligsituation, kontakt med myndigheder, bekymring for børnene. Det er vigtigt at anerkende, at jeres vanskeligheder ikke kun handler om jeres relation — men også om de vilkår, I lever under.","At arbejde med parforholdet i en traumatiseret familie handler ikke om at blive det perfekte par. Det handler om at skabe nok tryghed mellem jer til, at børnene kan mærke det. Selv små skridt — at holde øjenkontakt, at sige \"jeg er ked af det\", at lytte uden at forsvare sig — kan ændre familiens klima."]'::jsonb,
  39274Forældrealliancen er afgørende for familiebehandlingens succes. I udsatte familier er parforholdet ofte belastet af individuelle traumer, ydre pres og systemisk involvering, hvilket kræver en integreret tilgang.39274,
  '["Forældrealliancen som behandlingsfokus","Traumeinformeret parterapi","Co-regulering mellem forældre","Parforholdet under ydre pres (myndigheder, økonomi)"]'::jsonb,
  39274I udsatte familier er parforholdet ofte det mest forsømte område. Styrk alliancen mellem forældrene, og du styrker hele systemet.39274,
  '["I kommunal familiebehandling er forældrealliancen ofte nøglen, men sjældent det direkte fokus. Når forældrene er i konstant konflikt — eller i tavs afkobling — kan selv den bedste børnefaglige indsats ikke kompensere. At adressere parforholdet er derfor en systemisk intervention, ikke et add-on.","Traumeinformeret parterapi med udsatte familier kræver forståelse for, at begge partneres nervesystemer er involveret. Når den ene partner er i sympatisk aktivering (kamp-flugt) og den anden i dorsal vagal (kollaps), er samtale meningsløs. Først når begge er regulerede, kan kontakt opstå.","I sammenbragte familier med traumehistorie er dynamikken ekstra kompleks: nye partnere skal navigere i loyalitetskonflikter, stedforælder-roller og børnenes sorg over den oprindelige familie. En narrativ tilgang kan hjælpe familien med at skabe en ny, fælles historie, der rummer alles oplevelser.","Når forældrene er separerede, ændres fokus fra parterapi til co-parenting. Her er målet ikke at redde parforholdet, men at etablere en funktionel forældrealliancealliance, hvor børnene ikke fanges i loyalitetskonflikter. §75-støtte kan være relevant, når en forælder har et barn anbragt."]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO circles (id, titel, ikon, sort_order, privat_overblik_beskrivelse, privat_overblik_punkter, privat_overblik_tip, privat_dybde, professionel_overblik_beskrivelse, professionel_overblik_punkter, professionel_overblik_tip, professionel_dybde) VALUES (
  39274familie39274, 39274Samspil & mønstre39274, 39274homeHeart39274, 3,
  39274Hver familie har sine mønstre — måder at reagere på, roller der er fordelt, ting der ikke siges højt. Nogle mønstre beskytter. Andre holder jer fast. At se dem er første skridt mod at vælge dem om.39274,
  '["Mønstre går i arv — men kan brydes","Roller i familien kan ændres","Det usagte former samspillet","Nye veje kræver at alle bliver set"]'::jsonb,
  39274Prøv at lægge mærke til, hvad der sker lige FØR en konflikt eskalerer. Hvem gør hvad? Hvem tier? Det mønster fortæller jer noget vigtigt.39274,
  '["I familier med traumatiske erfaringer udvikler der sig ofte faste roller: den, der passer på alle; den, der udadreagerer; den, der bliver usynlig; den, der holder sammen på det hele. Disse roller er ikke frit valgte — de er overlevelsesstrategier, der er vokset frem, fordi nogen måtte fylde de huller, der var.","Mønstre gentager sig på tværs af generationer. En mor, der selv var parentificeret som barn, kan ubevidst gøre sit barn til den, der passer på hende. En far, der voksede op med vold, kan enten gentage mønsteret eller trække sig helt fra konflikter. Begge dele påvirker familiens samspil.","Når en familie har mange professionelle omkring sig — socialrådgivere, familiebehandlere, pædagoger, lærere — kan det paradoksalt nok gøre samspillet mere forvirret. Familien kan føle sig overvåget, dømt eller handlingslammet. Det er vigtigt, at hjælpen giver familien mere handlekraft — ikke mindre.","At ændre familiens mønstre handler ikke om at gøre alt anderledes fra den ene dag til den anden. Det handler om at finde de små øjeblikke, hvor I allerede gør det, I gerne vil gøre mere af — og bygge videre derfra. Selv i de mest belastede familier er der øjeblikke af forbindelse og omsorg."]'::jsonb,
  39274Familiens samspilsmønstre afdækkes narrativt og systemisk. Vi undersøger roller, alliancer, generationelle mønstre og de dominerende historier, familien lever efter — og hjælper familien med at finde alternative fortællinger.39274,
  '["Narrativ eksternalisering af problemer","Parentificering og rolleforvirring","Generogrammer og generationelle mønstre","3-måneders familieundersøgelser"]'::jsonb,
  39274Spørg altid: "Hvis dette mønster havde en funktion engang — hvad beskyttede det familien mod?" Det åbner for forståelse frem for fordømmelse.39274,
  '["Narrativ terapi er særligt velegnet i arbejdet med udsatte familier, fordi den adskiller personen fra problemet. Når vi eksternaliserer — \"hvornår sniger vreden sig ind?\" frem for \"hvorfor er du vred?\" — skabes et rum, hvor familien kan se problemet udefra og finde deres egen handlekraft.","I intensive familiebehandlingsforløb med hjemmebesøg ser vi samspilsmønstrene udfolde sig i familiens eget miljø. Det giver en helt anden adgang end samtaler på et kontor. Vi ser, hvem der sidder ved bordet, hvem der trækker sig, hvem der tager over — og vi kan intervenere i de faktiske situationer.","3-måneders familieundersøgelser kræver en systematisk kortlægning af familiens dynamik, ressourcer og belastninger. Genogrammet er et uundværligt redskab her: det synliggør mønstre på tværs af generationer og giver familien selv en visuel forståelse af, hvor deres historier kommer fra.","I det tværfaglige samarbejde er det vigtigt at holde fast i, at familiens mønstre ikke er patologi — de er tilpasninger til svære livsvilkår. Denne forståelse ændrer interventionen fra at ville \"rette\" familien til at ville styrke familiens egen kapacitet for forandring."]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO circles (id, titel, ikon, sort_order, privat_overblik_beskrivelse, privat_overblik_punkter, privat_overblik_tip, privat_dybde, professionel_overblik_beskrivelse, professionel_overblik_punkter, professionel_overblik_tip, professionel_dybde) VALUES (
  39274individuel39274, 39274Dig selv & dine spor39274, 39274butterfly39274, 4,
  39274Du bærer på spor fra dit liv — fra din opvækst, dine relationer, dine tab og dine kampe. Individuel terapi handler ikke om at fikse dig. Det handler om at stå mere solidt i det, du står i, og finde de ressourcer, du har glemt du har.39274,
  '["Dine reaktioner giver mening","Traumer kan bearbejdes i dit tempo","Du er mere end din historie","At forstå din krop er at forstå dig selv"]'::jsonb,
  39274Du behøver ikke forstå alt, før du kan begynde at have det bedre. Nogle gange er det nok at mærke, at nogen lytter — virkelig lytter.39274,
  '["Mange mennesker lever med en fornemmelse af, at noget er galt — uden at kunne sætte ord på hvad. Det kan vise sig som angst, udmattelse, vrede eller en følelse af tomhed. Ofte er det spor fra oplevelser, der aldrig blev bearbejdet — fordi der ikke var plads til det, eller fordi ingen spurgte.","I terapien møder jeg dig, hvor du er — med alt det, du bærer med dig. Det handler ikke om at løse problemer, men om at blive bedre til at holde det svære, forstå hvordan din krop reagerer, og langsomt finde mere plads indeni. Som Rikke siger: vi fikser ikke — vi skaber rum.","For forældre i udsatte familier er individuel terapi ofte et vigtigt supplement til familiebehandlingen. Dine egne ubearbejdede erfaringer — omsorgssvigt, vold, tab, ensomhed — påvirker din evne til at være nærværende med dine børn. At tage sig af sine egne sår er en gave til hele familien.","Traumebearbejdning foregår i faser: først skaber vi tryghed og stabilitet, så du har et fundament at stå på. Derefter kan vi langsomt nærme os det svære — i dit tempo, med respekt for dine grænser. Integration er det sidste skridt: at finde en ny plads til det, der skete, så det ikke længere styrer dit liv."]'::jsonb,
  39274Individuel terapi i en familieterapeutisk kontekst holder altid fokus på individet-i-relation. Vi arbejder narrativt med klientens historie og somatisk med kroppens spor — altid med blik for det systemiske felt.39274,
  '["Faseopdelt traumebehandling","Narrativ identitetsarbejde","Somatisk traumeterapi og åndedræt","PTSD, kompleks PTSD og C-PTSD"]'::jsonb,
  39274Stabilisering først — altid. En klient, der ikke er reguleret, kan ikke bearbejde. Giv kroppen forrang, når den er i alarmberedskab.39274,
  '["I arbejdet med klienter fra udsatte familier møder vi ofte kompleks PTSD: et mønster af symptomer, der stammer fra gentagne, langvarige traumatiske oplevelser i nære relationer. I modsætning til enkeltstående traumer kræver C-PTSD en langsommere, mere relationel tilgang, hvor den terapeutiske alliance i sig selv er helende.","Den narrative tilgang giver klienten mulighed for at genfortælle sin historie — ikke ved at ændre fakta, men ved at finde nye perspektiver. Når en kvinde, der har oplevet vold, kan se sin overlevelse som styrke i stedet for skam, ændrer hele selvforståelsen karakter.","Integration af somatisk terapi og åndedrætsterapi er central i traumebehandling. Kroppen bærer traumets aftryk i form af spændinger, åndedrætsrestriktioner og nervesystemets kroniske aktivering. Gennem kropslig bevidsthed og åndedrætsarbejde kan disse mønstre langsomt opløses.","I det tværfaglige felt er det vigtigt at sikre, at individuel terapi ikke modarbejder familiebehandlingen. Tæt koordinering med familiebehandleren og socialrådgiveren er nødvendig, samtidig med at klientens fortrolighed respekteres. Denne balance kræver erfaring og faglig integritet."]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO circles (id, titel, ikon, sort_order, privat_overblik_beskrivelse, privat_overblik_punkter, privat_overblik_tip, privat_dybde, professionel_overblik_beskrivelse, professionel_overblik_punkter, professionel_overblik_tip, professionel_dybde) VALUES (
  39274aandedraet39274, 39274Åndedræt & nervesystem39274, 39274wind39274, 5,
  39274Dit nervesystem er som en indre alarm. Hos mennesker med traumatiske erfaringer står alarmen ofte på — også når der ikke er fare. Åndedrættet er den mest direkte vej til at fortælle din krop, at det er trygt nu.39274,
  '["Dit nervesystem reagerer hurtigere end dine tanker","Stresset åndedræt holder dig i alarmberedskab","Roligt åndedræt signalerer tryghed til hjernen","Du kan lære at regulere dig selv"]'::jsonb,
  39274Prøv lige nu: Ånd ind i 4 tæller, ud i 6 tæller. Gør det tre gange. Mærk, hvordan kroppen svarer. Det er dit nervesystem, der skifter gear.39274,
  '["Åndedrættet er den eneste autonome funktion, du også kan styre bevidst. Det gør det til en direkte linje til dit nervesystem. Når du bevidst forlænger udåndingen, aktiverer du den del af nervesystemet, der signalerer tryghed — den vagusnerve, der fungerer som en stille strøm af kommunikation mellem krop og sind.","Mennesker, der har oplevet traumer, har ofte et åndedræt, der er stramt og overfladisk. Kroppen holder fast — i brystet, i mellemgulvet, i maven — fordi den stadig er i beredskab. Åndedrætsterapi handler ikke om at tvinge kroppen til at slappe af, men om langsomt at geninvitere tryghed ind i kroppen.","For familier med traumatiske erfaringer er kropslig regulering ekstra vigtigt. Når en forælder er i kronisk alarmberedskab, kan barnet mærke det — og barnets nervesystem følger med. At lære at regulere sit eget nervesystem er derfor en af de mest konkrete gaver, du kan give dine børn.","Åndedrætsterapi er ikke bare teknik — det er en vej ind til følelser, der har været låst inde i kroppen. Mange oplever, at sorg, lettelse eller gammel frygt frigøres under åndedrætsarbejde. Det er kroppens måde at slippe det, den har holdt fast i. Det kræver trygge rammer og en terapeut, der kan rumme det, der kommer."]'::jsonb,
  39274Polyvagal teori og åndedrætsterapi udgør den kropslige dimension i traumeinformeret familiebehandling. Vi arbejder med nervesystemets tre tilstande og bruger åndedræt som klinisk intervention til regulering.39274,
  '["Polyvagal teori — tre tilstande i nervesystemet","Åndedrætsterapi (certificeret 2022-23)","Co-regulering i familiebehandling","NADA øreakupunktur som supplement"]'::jsonb,
  39274Begynd altid med at aflæse klientens nervesystemtilstand. Er de i ventral vagal, sympatisk aktivering eller dorsal kollaps? Din intervention afhænger af svaret.39274,
  '["Stephen Porges'' polyvagale teori giver os et præcist sprog for nervesystemets tre hierarkiske tilstande: ventral vagal (tryghed, social engagement), sympatisk (kamp-flugt, alarm) og dorsal vagal (kollaps, afkobling). I traumatiserede familier ser vi ofte, at nervesystemet er \"fastlåst\" i sympatisk aktivering eller dorsal kollaps.","Åndedrætsterapi som klinisk redskab starter med at observere klientens åndedræt: Hvor i kroppen trækker de vejret? Hvor dybt? Hvor hurtigt? Åndedrætsrestriktioner afslører, hvor kroppen holder fast — og giver os et kort over de somatiske spor af traumet.","Co-regulering — når én persons regulerede nervesystem hjælper en andens med at finde ro — er fundamentet for terapeutisk kontakt med traumatiserede familier. Terapeutens eget nervesystem er det vigtigste redskab. Derfor er egen kropslig praksis og supervision afgørende.","I familiebehandling kan kropslige interventioner bruges direkte i sessioner med hele familien. Når en samtale eskalerer, kan en fælles vejrtrækningsøvelse bryde eskaleringsmønsteret og skabe et nyt fælles udgangspunkt. NADA øreakupunktur kan supplere som reguleringsredskab, særligt ved stofmisbrug og angst."]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO circles (id, titel, ikon, sort_order, privat_overblik_beskrivelse, privat_overblik_punkter, privat_overblik_tip, privat_dybde, professionel_overblik_beskrivelse, professionel_overblik_punkter, professionel_overblik_tip, professionel_dybde) VALUES (
  39274boern39274, 39274Barnets stemme39274, 39274sprout39274, 6,
  39274Børns adfærd er aldrig tilfældig. Et barn, der slår, skriger, trækker sig eller tilpasser sig for meget, fortæller os noget vigtigt. Barnets adfærd er ikke problemet — den er kommunikation om, at noget i omgivelserne er svært.39274,
  '["Adfærd er kommunikation — altid","Arbejd med omgivelserne, ikke kun barnet","Alle følelser er tilladte","Børn bærer familiens byrder — lad dem slippe"]'::jsonb,
  39274Næste gang dit barn "opfører sig dårligt", prøv at spørge dig selv: "Hvad prøver mit barn at fortælle mig?" Det ændrer alt.39274,
  '["Børn er eksperter i at aflæse deres omgivelser — langt bedre end de fleste voksne. De mærker spændinger, sorg, angst og vrede i familien, længe før nogen siger noget. Og fordi de ikke har ord for det, bruger de det, de har: deres krop og deres adfærd.","Et barn, der udadreagerer, er ikke et \"svært barn\" — det er et barn, der har det svært. Og oftest handler det ikke om barnet selv, men om det, barnet lever i. Uro i familien, forældrenes ubearbejdede traumer, konflikter, misbrug eller omsorgssvigt — barnet mærker det hele og reagerer på det.","For forældre kan det være smertefuldt at høre, at barnets vanskeligheder hænger sammen med familiens dynamik. Men det er også en befriende erkendelse: det betyder, at du ikke skal fikse dit barn. Du skal forstå, hvad dit barn fortæller dig — og arbejde med de omgivelser, barnet lever i.","Børn i udsatte familier bærer ofte byrder, der er alt for tunge for dem: de passer på yngre søskende, de trøster forældre, de forsøger at holde sammen på noget, der falder fra hinanden. Når vi giver forældrene støtte til at tage ansvaret tilbage, kan barnet endelig få lov til at være barn."]'::jsonb,
  39274Barnets perspektiv er den centrale navigationsstjerne i al familiebehandling. Vi ser barnets adfærd som meningsfuld kommunikation og arbejder med omgivelserne — ikke symptombæreren.39274,
  '["Barnets adfærd som systemisk kommunikation","Børnesamtaler tilpasset alder og modenhed","Underretningspligt og myndighedssamarbejde","Anbragte børn og §75-støtte til forældre"]'::jsonb,
  39274Barnets "symptomer" er de bedste løsninger, barnet har kunnet finde. Respektér strategien — og arbejd med de omgivelser, der nødvendiggør den.39274,
  '["I familiebehandling med udsatte familier er barnet ofte den, der henvises — men sjældent den, der har \"problemet\". Barnets symptomer — adfærdsvanskeligheder, skolefravær, selvskade, angst — er signaler om, at systemet omkring barnet er belastet. At behandle barnet alene uden at adressere familiens dynamik er sjældent effektivt.","Børnesamtaler i familiebehandling kræver særlig kompetence. Barnet skal opleve, at dets oplevelse tages alvorligt, uden at det pålægges ansvar for at løse familiens problemer. Med yngre børn bruger vi leg, tegning og fortælling som veje ind i barnets verden.","Underretningspligten er en realitet i arbejdet med udsatte familier. At navigere mellem den terapeutiske alliance og myndighedsansvaret kræver gennemsigtighed: familien skal altid vide, hvad der underrettes om og hvorfor. Denne åbenhed beskytter både barnet og den terapeutiske relation.","Ved anbringelser er §75-støtte til forældrene afgørende. Forældre, der mister omsorgen for deres barn, har brug for hjælp til at bearbejde sorg, skam og tab — og til at opbygge en ny relation til barnet inden for anbringelsens rammer. Denne indsats er ofte undervurderet, men kan gøre en afgørende forskel for barnets mulighed for at vende hjem."]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- ========== SAMMENHÆNGE ==========
INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274relationer39274, 39274parterapi39274,
  39274De tilknytningsmønstre, du bærer fra din barndom — måske utryghed, ambivalens eller undgåelse — aktiveres stærkest i dit parforhold. Når I bliver triggede af hinanden, er det ofte gamle sår, der taler. At forstå dette ændrer konflikten fra "du er problemet" til "vi bærer begge noget med os."39274,
  39274I familier under pres driver uforløste tilknytningsmønstre ofte eskaleringen mellem forældrene. Mentaliseringsbaseret parterapi (MBT) kan hjælpe par med at se bag hinandens adfærd og genskabe den mentale kapacitet, som kronisk stress nedbryder.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274relationer39274, 39274boern39274,
  39274Dit barn arver ikke kun dine øjenfarve — det arver også dine tilknytningsmønstre. Hvis du selv voksede op med utryghed, kan det være svært at give dit barn den tryghed, du aldrig selv fik. Men her er det gode: bare det at du VED det, giver dig mulighed for at gøre det anderledes.39274,
  39274Intergenerationel transmission af tilknytning er veldokumenteret i ACE-forskningen. Forældrens uforarbejdede traumer øger risikoen for desorganiseret tilknytning hos barnet. Circle of Security-interventioner kan bryde denne transmission.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274relationer39274, 39274individuel39274,
  39274Mange af dine relationelle mønstre blev skabt, før du havde ord for dem. I individuel terapi med narrativ tilgang kan du begynde at sætte ord på det ordløse — og langsomt skrive en ny historie om, hvem du er i relationer.39274,
  39274I narrativ-systemisk individuel terapi arbejdes med at eksternalisere de dominerende historier om klientens relationelle identitet. Særligt for forældre med egne omsorgssvigt-erfaringer kan dette skabe rum for en alternativ forældrenarrativ.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274parterapi39274, 39274familie39274,
  39274Jeres parforhold ER familiens nervesystem. Når I som par er i konstant kamp-eller-flugt, lever hele familien i alarmberedskab. Børn mærker spændingen mellem jer — også den I tror, I skjuler. Når I finder mere ro sammen, falder hele familiens stressniveau.39274,
  39274Forældrealliancen er den primære organiserende kraft i familiesystemet. I udsatte familier, hvor parrelationen ofte er belastet af fattigdom, traumer eller systemisk pres, er styrkelse af forældrealliancen afgørende for hele familiens reguleringskapacitet.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274parterapi39274, 39274boern39274,
  39274Dine børn lærer om kærlighed ved at se jer to. Når I råber, lærer de, at konflikt er farligt. Når I reparerer, lærer de, at brud kan heles. Det vigtigste er ikke, at I aldrig skændes — men at børnene ser jer finde tilbage til hinanden.39274,
  39274Interparental konflikt er en stærkere prædiktor for børns mistrivsel end selve familiesammenbruddet. I §50-undersøgelser bør forældrenes konfliktniveau og barnets eksponering for dette vurderes som selvstændig risikofaktor.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274familie39274, 39274boern39274,
  39274Når familien begynder at fungere på nye måder — med mere ro, mere lytning, mere plads til alle — er børnene de første, der reagerer. Deres adfærd er et spejl af familiens tilstand. Uro hos børnene er sjældent "barnets problem" — det er familiens signal.39274,
  39274Barnets symptomer er ofte et systemisk signal. I familiebehandling efter §52 arbejdes med at flytte fokus fra det identificerede barn til de familiemønstre, der opretholder symptomerne — herunder parentificering, triangulering og usynlige loyalitetskonflikter.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274familie39274, 39274individuel39274,
  39274Din families mønstre bor i dig — i din krop, dine reaktioner, dine automatiske tanker. "Sådan har vi altid gjort" er en sætning, der kan holde dig fanget. Individuel terapi giver dig rum til at sortere: hvad vil du beholde fra din familie, og hvad vil du lægge fra dig?39274,
  39274Når familiebehandling afdækker dybt individuelle problematikker — f.eks. kompleks PTSD, dissociation eller aktiv selvskade — kan parallel individuel terapi med somatisk og narrativ tilgang være nødvendig for at stabilisere forælderen, så familiebehandlingen kan bære frugt.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274aandedraet39274, 39274individuel39274,
  39274Åndedrætsterapi åbner døre, som samtale alene ikke kan. Mange traumer sidder i kroppen som tilbageholdt åndedræt, spændinger i mellemgulvet, en konstant følelse af at holde vejret. Når du lærer at ånde frit, begynder kroppen langsomt at slippe det, den har holdt fast i.39274,
  39274Åndedrætsterapi som supplement til narrativ-systemisk individuel terapi giver adgang til bottom-up-processer, som samtaleterapi alene ikke når. Særligt ved kompleks traumatisering, hvor kroppen holder traumeminder, kan åndedrætsarbejde facilitere somatisk integration.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274aandedraet39274, 39274familie39274,
  39274Når I som familie lærer at regulere jer sammen — ånde sammen, lande sammen — opbygger I en fælles kapacitet for at håndtere kriser. Det lyder simpelt, men for familier der har levet i konstant alarm, er det dybt transformerende at opdage, at I kan finde ro SAMMEN.39274,
  39274Familiebaseret co-regulering bygger på polyvagal teori: når familiens voksne kan aktivere det ventrale vagale system, smitter det til børnene. I udsatte familier med kronisk dysregulering er fælles reguleringsøvelser et konkret redskab til at opbygge familiens "vindue of tolerance."39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274aandedraet39274, 39274boern39274,
  39274Børn forstår kroppen bedre end ord. Når dit barn er overtaget af vrede, angst eller sorg, kan et enkelt åndedræt sammen gøre mere end hundrede forklaringer. Du behøver ikke sige "tag en dyb vejrtrækning" — du kan bare gøre det selv, og barnet vil følge.39274,
  39274Kropslige reguleringsstrategier er særligt effektive for børn med traumehistorik, da traumet ofte sidder præverbalt. Polyvagalt informerede interventioner — langsom udånding, rytmisk bevægelse, co-reguleret åndedræt — kan nå børn, som verbale interventioner ikke når.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274centrum39274, 39274relationer39274,
  39274Familiens helhed hviler på kvaliteten af jeres tilknytning til hinanden. I familier med traumehistorik er tilknytningen ofte ambivalent — I elsker hinanden, men kan ikke altid mærke det. At styrke tilknytningen er at styrke hele familien.39274,
  39274I systemisk perspektiv er familiens helhed mere end summen af individerne. Tilknytningskvaliteten mellem familiens medlemmer er den bærende struktur — og i udsatte familier er denne struktur ofte fragmenteret af traumer, tab og systemisk pres.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274centrum39274, 39274parterapi39274,
  39274Parforholdet er familiens rygrad. I familier under pres — fra økonomi, fra kommunen, fra jeres egne historier — er parforholdet det første, der lider. Men det er også det sted, hvor forandring har størst effekt på alle.39274,
  39274Forældreparrets relation er den primære organiserende kraft i udsatte familier. Når parrelationen kollapser under systemisk pres, mister familien sin co-regulerende base. Parterapi bør ofte prioriteres parallelt med familiebehandling.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274centrum39274, 39274familie39274,
  39274Jeres familiemønstre — hvem der trøster, hvem der trækker sig, hvem der bærer mest — er ikke tilfældige. De er overlevelsesstrategier, I har udviklet sammen. At se dem tydeligt er ikke en dom — det er det første skridt mod at vælge nye mønstre.39274,
  39274Systemisk familiebehandling afdækker de cirkulære interaktionsmønstre, der opretholder familiens dysfunktion. I udsatte familier er disse mønstre ofte beskyttelsesstrategier fra generationer af overlevelse — de skal forstås før de kan ændres.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274centrum39274, 39274individuel39274,
  39274Du er en del af din familie — men du er også dig selv. Mange forældre i pressede familier mister sig selv i rollen som omsorgsgiver, som brandslukker, som den der holder sammen. At tage dig af DIG er ikke egoisme — det er en forudsætning for at kunne bære andre.39274,
  39274I udsatte familier er individets psykiske sundhed og familiens funktion dybt sammenflettet. Forældrens egne uforløste traumer påvirker mentaliseringskapaciteten og dermed hele familiens regulering. Individuel terapi kan være nødvendig for at genoprette forældrefunktionen.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274centrum39274, 39274aandedraet39274,
  39274Dit nervesystem er familiens fundament. Når du er dysreguleret — i konstant alarm, udmattet, afkoblet — mærker alle det. Åndedrætsarbejde og polyvagal regulering er ikke luksus. Det er det mest basale redskab til at genoprette familiens balance.39274,
  39274Nervesystemets reguleringskapacitet er forudsætningen for mentalisering, tilknytning og samspil. I familier med kronisk stress er det ventrale vagale system ofte undertrykt. Polyvagalt informeret praksis bør integreres som fundament i enhver familieintervention.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274centrum39274, 39274boern39274,
  39274Dine børn er familiens barometer. Deres adfærd — uro, tilbagetrækning, vrede, klamren — fortæller noget om, hvordan familien har det. Det er ikke deres skyld, og det er ikke din skyld. Det er et signal om, at noget i systemet har brug for opmærksomhed.39274,
  39274Barnets symptomer er i systemisk optik et signal om familiens tilstand. I §50-undersøgelser og §52-foranstaltninger bør barnets adfærd altid kontekstualiseres i familiens samlede belastning — herunder fattigdom, traumer, psykisk sygdom og systemisk pres.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274individuel39274, 39274boern39274,
  39274Det bedste, du kan gøre for dit barn, er at tage dig af dine egne sår. Når du bearbejder din historie — din barndom, dine tab, din smerte — frigør du kapacitet til at være den forælder, dit barn har brug for. Ikke perfekt. Bare til stede.39274,
  39274Forældres individuelle traumebearbejdning har direkte effekt på barnets tilknytningssikkerhed. Forskning i reflective functioning viser, at forældrens evne til at mentalisere egne oplevelser er den stærkeste prædiktor for barnets tilknytningsmønster.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274relationer39274, 39274aandedraet39274,
  39274Din krop husker, hvad dine relationer har gjort ved dig. Hjertebanken, når nogen hæver stemmen. Spænding i maven, når stemningen skifter. Disse reaktioner er dit nervesystems hukommelse. Gennem åndedrætsarbejde kan du lære at møde dem uden at blive overtaget af dem.39274,
  39274Somatiske markører i relationer afslører tilknytningsmønstre, som ikke er verbalt tilgængelige. I narrativ-systemisk terapi kan kroppens reaktioner bruges som indgang til at udforske og eksternalisere de dominerende historier om klientens relationelle erfaringer.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274parterapi39274, 39274individuel39274,
  39274Nogle gange rammer parforholdet noget i dig, der er ældre end jeres relation. Måske reagerer du på din partner, som du reagerede på din far. Individuel terapi kan hjælpe dig med at sortere: hvad handler om os — og hvad handler om MIG og min historie?39274,
  39274I udsatte familier er parrelationen ofte belastet af begge parters traumehistorik. Når parterapi afdækker individuel traumatisering — f.eks. omsorgssvigt, vold eller tab — kan parallel individuel terapi med somatisk tilgang være nødvendig for at stabilisere inden pararbejdet kan fortsætte.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274parterapi39274, 39274aandedraet39274,
  39274Når konflikten eskalerer, lukker din hjerne ned. Du kan ikke lytte, ikke mentalisere, ikke mærke din partner. Dit nervesystem har overtaget. Vagus-åndedræt midt i konflikten — bare 30 sekunder — kan åbne dit vindue igen og gøre det muligt at møde din partner som menneske i stedet for som trussel.39274,
  39274Polyvagalt informeret parterapi integrerer somatisk regulering direkte i sessionen. Når par lærer at genkende og regulere deres autonome arousal, kan de forblive i mentaliseringsposition længere — hvilket er forudsætningen for produktivt pararbejde.39274
);

INSERT INTO connections (fra, til, privat, professionel) VALUES (
  39274individuel39274, 39274aandedraet39274,
  39274Mange traumatiske oplevelser sidder i kroppen som fastfrosne tilstande — tilbageholdt åndedræt, kroniske spændinger, en følelse af at være låst. Åndedrætsterapi i individuel terapi kan nænsomt begynde at tø disse tilstande op — ikke ved at tvinge, men ved at invitere kroppen til langsomt at slippe.39274,
  39274Integration af åndedrætsterapi i individuel traumebehandling giver adgang til både top-down og bottom-up processer. For klienter med kompleks PTSD, hvor dissociation og somatiske flashbacks er fremtrædende, kan åndedrætsarbejde være den mest skånsomme indgang til traumematerialet.39274
);

-- ========== TEMAER ==========
INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274kommunikation39274, 39274Når ordene ikke rækker39274, 39274chatBubble39274, 0,
  39274I familier med svære erfaringer er kommunikation sjældent bare ord. Det er tonefald, tavshed, blikke og kroppe, der taler.39274,
  39274Mange familier har lært at overleve ved ikke at tale om det svære. Tavsheden beskytter — men den isolerer også. At lære at kommunikere handler ikke om at finde de rigtige ord, men om at turde vise, hvad der ligger bag ordene. I familier med traumatiske spor er kroppen ofte hurtigere end munden: irritation, tilbagetrækning eller udbrud fortæller mere end selve ordene.39274,
  '["centrum","relationer","familie"]'::jsonb,
  39274I udsatte familier er kommunikationsmønstre ofte præget af overlevelsesstrategier: tavshed, eskalering eller undvigelse.39274,
  39274Narrativ tilgang til kommunikation fokuserer på at give familien et nyt sprog for deres oplevelser. Ved at eksternalisere — "hvornår sniger tavsheden sig ind mellem jer?" — åbnes der for samtale uden skyld. I familier med traumehistorie er nonverbal kommunikation ofte vigtigere end den verbale: kroppens reaktioner, ansigtsudtryk og nervesystemets tilstand giver afgørende information.39274,
  '["centrum","familie","aandedraet"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274skilsmisse39274, 39274Brud, tab & nye familieformer39274, 39274heartCrack39274, 1,
  39274Når en familie splitter, mister alle noget — og børnene har brug for at vide, at de ikke er skyld i det.39274,
  39274Skilsmisse, anbringelse eller tab af en forælder er blandt de mest omvæltende oplevelser for et barn. I udsatte familier kompliceres bruddet ofte af allerede eksisterende belastninger: konflikter, misbrug, psykisk sygdom eller myndighedsindgreb. Det vigtigste er, at børnene ikke fanges i midten. De har brug for at vide, at begge forældre stadig er deres forældre — uanset hvad der er sket mellem de voksne.39274,
  '["parterapi","boern","familie"]'::jsonb,
  39274I udsatte familier er brud sjældent simple skilsmisser — de involverer ofte anbringelser, myndighedsafgørelser og komplekse loyalitetskonflikter.39274,
  39274Co-parenting efter brud i traumatiserede familier kræver særlig opmærksomhed. Når konflikten mellem forældrene er drevet af ubearbejdede traumer, er klassisk mægling sjældent nok. Nervesystemet skal reguleres, før samarbejde er muligt. Ved anbringelser er §75-støtte til forældrene afgørende for at bevare og udvikle relationen til barnet.39274,
  '["parterapi","boern","familie"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274graenser39274, 39274Grænser i kaos39274, 39274shield39274, 2,
  39274I familier under pres kan grænser enten være for stive eller helt fraværende. Begge dele gør ondt.39274,
  39274Mange forældre i udsatte familier kæmper med at sætte grænser — fordi de selv voksede op uden tydelige grænser, eller fordi de selv oplevede grænser som straf. Sunde grænser er ikke mure — de er vejledning. De siger: "Jeg er her, jeg holder, og jeg slipper dig ikke." For børn i kaos er tydelige, varme grænser det mest tryghedsskabende, der findes.39274,
  '["individuel","boern","centrum"]'::jsonb,
  39274Grænseproblematik i udsatte familier handler sjældent om viden — det handler om forældrenes egen grænseerfaring.39274,
  39274Forældre, der selv har oplevet grænseoverskridelser, kan have svært ved at skelne mellem sunde grænser og kontrol. Arbejdet med grænser må derfor altid inkludere forældrenes egen historie. Narrativ tilgang gør det muligt at udforske: "Hvilke grænser havde du brug for som barn — og hvad fik du i stedet?" Denne forståelse transformerer grænsesætning fra pligt til omsorg.39274,
  '["individuel","familie","centrum"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274stress39274, 39274Kronisk stress & overlevelse39274, 39274lightning39274, 3,
  39274Stress i udsatte familier er sjældent forbigående — det er en tilstand, kroppen har vænnet sig til at leve i.39274,
  39274Når stress ikke er en forbigående reaktion, men en konstant tilstand, ændrer det hele familiens nervesystem. Forældrene er udmattede, børnene er på vagt, og selv små ting kan udløse store reaktioner. Det første skridt er at anerkende, at jeres stress ikke er svaghed — det er en normal reaktion på unormale vilkår. Og at kroppens vej ud af kronisk stress går gennem regulering, ikke viljestyrke.39274,
  '["centrum","aandedraet","individuel"]'::jsonb,
  39274Kronisk stress i udsatte familier er ofte sammenflettet med trauma, fattigdom og systemisk belastning.39274,
  39274ACE-forskningen (Adverse Childhood Experiences) dokumenterer, at ophobning af belastende barndomsoplevelser har kumulativ effekt på sundhed og funktion. I udsatte familier ser vi ofte, at både forældre og børn scorer højt. Polyvagal forståelse er central: kronisk stress fastholder nervesystemet i sympatisk aktivering, hvilket reducerer mentaliseringsevnen og øger reaktiviteten. Kropslig regulering er derfor en forudsætning for, at samtalebaseret intervention kan virke.39274,
  '["centrum","aandedraet","individuel"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274tab39274, 39274Sorg, tab & anbringelse39274, 39274dove39274, 4,
  39274Tab i udsatte familier har mange ansigter — og sorgen over det, man aldrig fik, kan være lige så tung som sorgen over det, man mistede.39274,
  39274Tab handler ikke kun om dødsfald. Det handler om den barndom, du ikke fik. Det handler om det parforhold, der gik i stykker. Det handler om det barn, der blev anbragt. Sorg i familier med traumatiske erfaringer er ofte kompliceret, fordi den blander sig med skyld, skam og vrede. At give plads til sorgen — uden at dømme den — er begyndelsen på heling.39274,
  '["familie","individuel","boern"]'::jsonb,
  39274Sorg i udsatte familier er ofte kompliceret af skam, skyld og systemisk involvering — særligt ved anbringelser.39274,
  39274Forældres sorg over anbragte børn er en af de mest undervurderede kliniske udfordringer. Sorgen er ambivalent: blandet med lettelse, skam, vrede mod systemet og selvbebrejdelse. Uden bearbejdning af denne sorg svækkes forældrenes mulighed for at genopbygge relationen til barnet. §75-støtte bør altid inkludere en sorgdimension.39274,
  '["familie","individuel","boern"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274unge39274, 39274Unge i udsatte familier39274, 39274star39274, 5,
  39274Unge, der vokser op i familier med traumatiske spor, bærer ofte på mere, end nogen ser — og deres oprør rummer ofte en bøn om hjælp.39274,
  39274Teenageårene er svære for alle familier — men for unge i udsatte familier er det ekstra intenst. De kæmper med at løsrive sig fra forældre, de måske både elsker og frygter. De kan overtage forældrenes mønstre eller gøre oprør mod dem. Nogle unge reagerer udadtil med vrede og grænseoverskridelser. Andre trækker sig indad med angst, selvskade eller isolation. Begge dele er meningsfuld kommunikation.39274,
  '["boern","familie","individuel"]'::jsonb,
  39274Unge fra udsatte familier viser ofte symptomer, der afspejler familiens ubearbejdede traumer — løsrivelsen aktiverer hele systemets tilknytningssår.39274,
  39274Ungdomsårene er en kritisk periode, hvor familiemønstre ofte intensiveres. Den unges behov for autonomi udfordrer forældre, hvis eget tilknytningsmønster er utrygt — de kan opleve løsrivelsen som svigt. Omvendt kan unge med desorganiseret tilknytning have svært ved at balancere frihed og forbindelse. Arbejdet kræver både individuel kontakt med den unge og systemisk intervention i familien.39274,
  '["boern","familie","individuel"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274selvvaerd39274, 39274Skam, skyld & selvværd39274, 39274sparkles39274, 6,
  39274Mange forældre i udsatte familier bærer på en dyb skam — over deres egen historie, over deres forældreskab, over at have brug for hjælp.39274,
  39274Skam er en af de mest destruktive følelser, fordi den siger: "Der er noget galt med MIG." Skyld siger: "Jeg gjorde noget forkert." Skam siger: "JEG er forkert." I familier med traumatiske erfaringer lever skammen ofte i generationer. At turde se den — og langsomt erstatte den med medfølelse for sig selv — er en af de vigtigste transformationer i terapien.39274,
  '["individuel","relationer","aandedraet"]'::jsonb,
  39274Skam er en central affekt i arbejdet med udsatte familier og en væsentlig barriere for forandring.39274,
  39274Skam-baseret selvforståelse blokerer mentalisering: en forælder, der er oversvømmet af skam, kan ikke være nysgerrig på barnets indre verden. Narrativ tilgang er særligt effektiv, fordi den adskiller identitet fra handling. Når forælderen kan se sin historie som kontekst — "du gjorde det bedste, du kunne med det, du havde" — reduceres skammen, og handlekraften vokser.39274,
  '["individuel","relationer","aandedraet"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO themes (id, titel, ikon, sort_order, privat_intro, privat_tekst, privat_cirkler, professionel_intro, professionel_tekst, professionel_cirkler) VALUES (
  39274traumer39274, 39274Familietraumer & heling39274, 39274leaf39274, 7,
  39274Et familietraume er ikke bare det, der skete — det er det, der skete inde i hele familien som følge af det, der skete.39274,
  39274Traumer i familier spreder sig som ringe i vand. En forælder, der bærer på ubearbejdede traumer, kan ubevidst give dem videre til sine børn — ikke af ond vilje, men fordi nervesystemet husker det, sindet har forsøgt at glemme. Heling handler ikke om at glemme, men om at integrere: at finde en plads til det, der skete, så det ikke længere styrer familiens samspil. Det kræver tid, tryghed og professionel hjælp.39274,
  '["centrum","individuel","aandedraet"]'::jsonb,
  39274Familietraumer kræver en integreret tilgang, der adresserer både individuelle og systemiske dimensioner af traumet.39274,
  39274Intergenerationelle traumer videreføres gennem tre kanaler: tilknytningsmønstre (relationel transmission), kropslig regulering (somatisk transmission) og familiefortællinger (narrativ transmission). Effektiv behandling adresserer alle tre. Judith Hermans faseopdelte model — sikkerhed, bearbejdning, integration — gælder også på familieniveau. Somatiske tilgange og åndedrætsterapi er centrale supplement til den narrative familiebehandling.39274,
  '["centrum","individuel","aandedraet"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- ========== ØVELSER ==========
INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274vagus-aanding39274, 39274Vagus-åndedræt for forældre i pres39274, 392745 min39274, 39274Hvor som helst — også midt i kaos39274,
  39274Denne øvelse aktiverer din vagusnerve og skifter dit nervesystem fra alarm til ro. Den er designet til dig som forælder, der lever med konstant pres — fra kommunen, fra børnenes behov, fra din egen historie. Når du regulerer dig selv, kan du regulere dit barn. Det er ikke selvforkælelse — det er det vigtigste forældreredskab, du har.39274,
  '["Stop hvad du laver. Du behøver ikke gå væk — du kan gøre dette stående ved køkkenbordet, på toilettet, eller i bilen.","Læg én hånd på brystet og én på maven. Mærk hvilken hånd der bevæger sig mest. Hos de fleste stressede forældre er det brysthånden — det betyder, at dit nervesystem er i alarmberedskab.","Ånd ind gennem næsen i 4 sekunder. Forestil dig, at du trækker vejret helt ned til den hånd, der ligger på maven.","Hold vejret i 4 sekunder. Ikke anstrengt — bare en blid pause.","Ånd ud gennem munden i 8 sekunder — dobbelt så lang udånding. Det er HER vagusnerven aktiveres. Den lange udånding fortæller dit nervesystem: \"Der er ingen fare lige nu.\"","Gentag 4 gange. Ved tredje gentagelse vil de fleste mærke en ændring: skuldrene falder, kæben løsner, maven begynder at bevæge sig.","Mærk forskellen. Dit barn kan mærke den også — børn aflæser dit nervesystem hurtigere end dine ord.","Brug denne øvelse FØR du reagerer på dit barns adfærd. Ikke efter. De 20 sekunder, det tager, kan ændre hele situationen."]'::jsonb,
  39274aandedraet39274, 0
) ON CONFLICT (id) DO NOTHING;

INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274co-regulering39274, 39274Co-regulering: Lån dit barn din ro39274, 3927410 min39274, 39274Hjemme — når dit barn er uroligt eller ude af sig selv39274,
  39274Børn i udsatte familier har ofte et nervesystem, der er i konstant alarmberedskab. De kan ikke regulere sig selv — de har brug for at låne DIT nervesystem. Denne øvelse bygger på polyvagal teori og Circle of Security: du bliver den trygge havn, dit barn kan lande i. Det kræver ikke, at du siger de rigtige ord. Det kræver, at din krop er rolig.39274,
  '["Når dit barn er uroligt, overtaget af følelser eller i udbrud: STOP. Tag tre dybe vagus-vejrtrækninger (lang udånding) FØR du gør noget.","Sæt dig ned, så du er i barnets øjenhøjde. Ikke over barnet — ved siden af eller foran. Dit nervesystem skal signalere: \"Jeg er her. Jeg er rolig. Du er ikke alene.\"","Tal med lav, langsom stemme. Ikke hvad du siger, men HVORDAN du siger det, regulerer barnet. Prøv: \"Jeg kan se, det er rigtig svært lige nu. Jeg bliver her.\"","Hvis barnet tillader det: læg en hånd på ryggen eller skulderen. Langsom, rytmisk berøring aktiverer barnets vagusnerve. Ikke klap — bare roligt, stabilt tryk.","Ånd bevidst langsomt, så barnet kan høre din vejrtrækning. Børn synkroniserer automatisk til en voksens åndedræt, når den voksne er reguleret.","Forsøg IKKE at tale barnet ud af følelsen. Sig ikke \"det er ikke noget at være ked af\" eller \"stop nu.\" Følelsen er reel. Din opgave er at rumme den — ikke fjerne den.","Bliv i det. Også når det er ubehageligt. Mange forældre har selv lært, at stærke følelser er farlige. Men når du bliver i det med dit barn, lærer I begge noget nyt: at følelser kan holdes og gå over.","Når stormen har lagt sig, kan I tale om det. Ikke før. Mentalisering — evnen til at forstå hvad der skete indeni — kræver, at nervesystemet er roligt først."]'::jsonb,
  39274boern39274, 1
) ON CONFLICT (id) DO NOTHING;

INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274narrativ-livslinje39274, 39274Din families fortælling — narrativ livslinje39274, 3927420 min39274, 39274Et roligt sted med papir og pen39274,
  39274I narrativ terapi arbejder vi med den historie, du fortæller om dit liv og din familie. Mange familier i krise bærer på en "tynd historie" — en fortælling domineret af problemer, nederlag og skyld. Denne øvelse hjælper dig med at finde den "tykke historie": alle de øjeblikke, hvor du handlede med styrke, kærlighed eller mod — også selvom det ikke lykkedes perfekt. Din familie er mere end det sværeste, I har oplevet.39274,
  '["Tag et stort stykke papir og tegn en vandret linje fra venstre til højre. Venstre er din fødsel, højre er nu.","Marker de store begivenheder i dit liv OVER linjen: fødsler, flytninger, møder, tab, brud, anbringelser, nye begyndelser. Bare korte ord eller symboler.","Nu det vigtige: marker UNDER linjen de øjeblikke, hvor du viste styrke — også den stille slags. Det kan være: \"Jeg ringede til kommunen, selvom jeg var bange.\" \"Jeg holdt mit barn, da alt andet var kaos.\" \"Jeg sagde fra over for min partner.\"","Kig på de øjeblikke under linjen. Hvad fortæller de om dig? Hvad er det for værdier, der har båret dig — også når det var sværest?","Giv disse værdier navne. Måske er det \"beskyttelse\", \"udholdenhed\", \"kærlighed trods alt\", \"mod til at bede om hjælp.\"","Vælg ét af disse øjeblikke og skriv 5-10 linjer om det. Ikke hvad der var svært — men hvad DU gjorde, og hvorfor det mattered.","Spørg dig selv: Hvis mit barn om 20 år læste dette, hvad ville de tænke om mig? Ofte er svaret en helt anden historie end den, du normalt fortæller om dig selv.","Du kan lave denne øvelse sammen med din partner, et familiemedlem, eller alene. Fortællingen er din — og du har ret til at fortælle den forfra."]'::jsonb,
  39274individuel39274, 2
) ON CONFLICT (id) DO NOTHING;

INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274mentalisering-par39274, 39274Mentalisering mellem forældre39274, 3927420 min39274, 39274Hjemme — når børnene sover eller er væk39274,
  39274Mentalisering er evnen til at forestille sig, hvad der foregår INDE I den anden — ikke kun reagere på det, der sker UDENFOR. I familier under pres kollapser mentaliseringen ofte: I reagerer på hinandens adfærd uden at forstå, hvad der ligger bag. Denne øvelse er baseret på mentaliseringsbaseret terapi (MBT) og hjælper jer med at genopbygge den bro mellem jer, som stress har nedbrudt.39274,
  '["Sæt jer over for hinanden. Ingen telefoner, ingen baggrundsstøj. I har brug for 20 uforstyrrede minutter.","Partner A: Beskriv en konkret situation fra den seneste uge, hvor du følte dig alene, frustreret eller overset. Vær specifik: \"Da du gik ud af stuen, mens jeg talte om mødet med kommunen...\"","Partner B: Din opgave er KUN at lytte. Ikke forsvare dig. Ikke forklare. Bare lytte med kroppen vendt mod din partner og øjenkontakt.","Partner B: Når A er færdig, sig: \"Jeg tror, du følte... fordi...\" — GÆT på, hvad din partner følte indeni. Du behøver ikke ramme rigtigt. Det vigtige er forsøget på at forstå.","Partner A: Bekræft eller juster. \"Ja, det var lige præcis det\" eller \"Det var tæt på, men egentlig følte jeg mere...\"","Byt roller. Partner B deler, Partner A lytter og mentaliserer.","Afslut med at svare hinanden på dette spørgsmål: \"Hvad gør mig mest sårbar lige nu — og hvad har jeg allermest brug for fra dig?\"","Det er normalt, at denne øvelse føles akavet eller svær de første gange. Mange forældre i pressede familier har aldrig selv oplevet at blive lyttet til på denne måde. I øver jer — og det er nok."]'::jsonb,
  39274parterapi39274, 3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274familiekort39274, 39274Familielandkortet — hvem står hvor?39274, 3927415 min39274, 39274Hjemme med familien — alle der har lyst deltager39274,
  39274I systemisk familieterapi arbejder vi med at synliggøre de usynlige mønstre i familien: hvem er tæt på hvem, hvem føler sig udenfor, hvem bærer mest. Denne øvelse gør det abstrakte konkret — og giver ofte overraskende indsigter. Børn er ofte exceptionelt præcise i deres familielandkort, fordi de mærker dynamikkerne direkte i kroppen.39274,
  '["Find figurer — det kan være legetøjsdyr, kopper, sko, sten eller tegn cirkler på et stort papir. Hver figur repræsenterer et familiemedlem.","Én person starter: Placer figurerne, som du oplever familien lige nu. Hvem er tæt på hvem? Hvem er langt fra hinanden? Hvem vender ryggen til? Hvem holder om nogen?","De andre kigger på opstillingen i stilhed. Ingen rettelser endnu.","Spørg den, der har opstillet: \"Fortæl os, hvad du ser. Hvorfor står de sådan?\" Lyt til historien bag placeringerne.","Nu laver næste familiemedlem sin egen opstilling — med de samme figurer. Læg mærke til forskelle og ligheder.","Hvis børn deltager: Tag deres opstilling lige så alvorligt som de voksnes. Ofte afslører børns kort ting, som voksne ikke vil sige højt — f.eks. at et barn har placeret sig selv mellem to forældre som \"buffer.\"","Afslut med at lave én fælles opstilling: \"Sådan kunne vi godt tænke os, at det var.\" Det er ikke en plan — det er en retning.","Denne øvelse kan afsløre parentificering (et barn der bærer forældreansvar), usynlige alliancer, eller isolation. Det er ikke farligt at se det — det er begyndelsen på forandring."]'::jsonb,
  39274familie39274, 4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274tryghedscirkel-barn39274, 39274Tryghedscirklen — øvelse for forælder og barn39274, 3927415 min39274, 39274Et trygt, roligt sted — gulvet er ofte bedst39274,
  39274Denne øvelse er inspireret af Circle of Security — tryghedscirklen — som Rikke arbejder med i sit terapeutiske arbejde. Alle børn har brug for to ting: en tryg base at gå ud fra (udforske verden) og en tryg havn at vende tilbage til (når verden bliver for meget). I udsatte familier er denne cirkel ofte brudt — barnet ved ikke, om havnen er der, når det kommer tilbage. Denne øvelse genopbygger cirklen — ét øjeblik ad gangen.39274,
  '["Sid på gulvet med dit barn. Ikke i sofaen, ikke ved bordet — gulvet. Det sænker hierarkiet og gør dig tilgængelig.","Sig til dit barn: \"Vi skal prøve noget. Du bestemmer, hvornår du går, og hvornår du kommer tilbage. Jeg bliver her.\"","Lad barnet bevæge sig væk fra dig — hente legetøj, kigge ud af vinduet, udforske. DU BLIVER SIDDENDE. Du er basen.","Når barnet kigger tilbage mod dig (og det vil det), mød dets blik med et smil eller et nik. Det er \"tankstationen\" — barnet tjekker: \"Er du der stadig?\"","Når barnet kommer tilbage til dig, tag imod det. Fysisk: åbne arme, et kram, en berøring. Sig: \"Der er du. Jeg er her.\" Du er havnen.","Gentag dette naturlige mønster: barnet går ud, barnet vender tilbage. Hver gang du er der, når barnet vender tilbage, styrker du tilknytningen.","For ældre børn (8-14 år) kan du lave øvelsen verbalt: \"Hvornår i denne uge havde du brug for mig? Var jeg der? Hvad ønsker du, at jeg havde gjort?\"","Det vigtigste er IKKE at være perfekt. Det vigtigste er reparation: \"Jeg kan se, at jeg ikke var der for dig den dag. Det er jeg ked af. Hvad har du brug for nu?\" Reparation er stærkere end perfektion."]'::jsonb,
  39274boern39274, 5
) ON CONFLICT (id) DO NOTHING;

INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274somatisk-landing39274, 39274Somatisk landing — når kroppen bærer traumet39274, 3927410 min39274, 39274Liggende eller siddende — et sted du føler dig sikker39274,
  39274Traumer sætter sig i kroppen. Ikke kun som minder, men som spændinger, smerter, uro og en konstant følelse af at være "på vagt." Mange forældre i udsatte familier bærer årtiers uforløste traumatiske spor i deres krop — fra egen barndom, fra vold, fra tab, fra systemsvigt. Denne øvelse er baseret på somatisk traumeterapi og hjælper dig med langsomt at genopbygge kontakten til din krop som et sikkert sted at være.39274,
  '["Find en position, hvor du føler dig SIKKER. For mange med traumehistorik er det IKKE at ligge med lukkede øjne — det kan føles sårbart. Sid gerne op med åbne øjne og ryggen mod en væg. Sikkerhed først.","Begynd med fødderne. Pres dem mod gulvet. Mærk gulvet presse tilbage. Sig til dig selv: \"Jeg er her. Gulvet holder mig.\"","Scan langsomt op gennem kroppen — ikke for at finde noget galt, men for at mærke, hvad der ER. Mærk benene, hofterne, maven, brystet, skuldrene.","Når du møder et sted med spænding, uro eller ubehag: BLIV DER et øjeblik. Ikke for at fikse det. Bare for at anerkende det. Prøv at sige indeni: \"Jeg kan mærke dig. Du har båret noget for mig.\"","Læg en hånd på det sted i kroppen, der har mest brug for opmærksomhed. Mange traumeoverlevere mærker det i maven, brystet eller halsen. Din hånd er en anker — et signal om, at du er til stede for dig selv.","Ånd langsomt ind og forestil dig, at åndedrættet når helt hen til det sted, din hånd hviler. Ånd ud og forestil dig, at spændingen opløses en lille smule. Ikke alt — bare en lille smule.","Afslut med at mærke hele din krop som en helhed. Mærk, at du sidder her, at du har overlevet alt det, der bragte dig hertil. Din krop har beskyttet dig. Nu kan du begynde at fortælle den, at faren er forbi.","Vigtig note: Hvis denne øvelse fremkalder stærke følelser eller minder, er det et tegn på, at kroppen begynder at slippe. Det er ikke farligt, men det kan kræve professionel støtte. Rikke kan hjælpe dig videre."]'::jsonb,
  39274individuel39274, 6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO exercises (id, titel, tid, sted, intro, trin, cirkel, sort_order) VALUES (
  39274generationsbrev39274, 39274Brev til den forælder, du gerne vil være39274, 3927415 min39274, 39274Et stille sted med papir og pen39274,
  39274Mange forældre i udsatte familier kæmper med intergenerationelle mønstre: de opdrager ud fra det, de selv oplevede — eller i desperat modstand mod det. Denne narrative øvelse hjælper dig med at skille fortid fra nutid og bevidst vælge, hvilken forælder du vil være — ikke ud fra skyld eller skam, men ud fra dine dybeste værdier for dine børn.39274,
  '["Skriv øverst på papiret: \"Kære mig selv som forælder.\"","Skriv først tre ting, du fik med fra din egen barndom, som du IKKE vil give videre. Vær specifik: ikke \"dårlig barndom\", men f.eks. \"tavshed om følelser\", \"at blive straffet for at græde\", \"at ingen forklarede, hvad der skete.\"","Skriv nu tre ting fra din barndom, du gerne vil BEVARE — også små ting. Måske en bedstemor, der lyttede. En tradition. Et øjeblik af tryghed. Disse ting er dit fundament.","Skriv nu til dit barn (eller dine børn) — som om de er voksne og læser dette om 20 år: \"Det vigtigste for mig som din forælder var...\"","Skriv om de kampe, du kæmper NU for at bryde mønstret. Det er ikke en indrømmelse af svaghed — det er dokumentation af mod. Skriv f.eks.: \"Jeg kæmpede for at lære at holde min vrede, fordi min far ikke kunne.\"","Skriv én konkret ting, du vil gøre anderledes DENNE UGE. Ikke et stort løfte. En lille, konkret handling. F.eks.: \"Jeg vil sætte mig ned, når mit barn taler til mig\" eller \"Jeg vil sige undskyld, når jeg har råbt.\"","Fold brevet sammen og gem det et sted, du kan finde det igen. Tag det frem, når skammen eller tvivlen melder sig. Det er dit kompas.","Husk: At du overvejer disse spørgsmål, viser allerede, at du er en anden forælder end den, du selv havde. Mønstret er allerede begyndt at brydes."]'::jsonb,
  39274relationer39274, 7
) ON CONFLICT (id) DO NOTHING;

-- ========== TRAPPEN ==========
INSERT INTO ladder_states (trin, navn, farve, privat_beskrivelse, privat_krops_signaler, privat_handlinger, privat_oevelser, professionel_beskrivelse, professionel_krops_signaler, professionel_handlinger, professionel_oevelser) VALUES (
  1, 39274Tryghed & forbindelse39274, 39274sage39274,
  39274Dit ventrale vagale system er aktivt — du er i din "tryghedszone." Du kan mærke dig selv, mærke andre, og være til stede uden at være på vagt. For mange forældre i udsatte familier er denne tilstand sjælden og uvant. Måske kender du den kun i korte glimt. Det er okay. Hvert glimt tæller — og jo mere du øver dig i at genkende denne tilstand, jo lettere kan du finde tilbage til den.39274,
  '["Åndedrættet er langsomt og når ned i maven","Skuldrene er sænkede — uden at du tænker over det","Du kan holde øjenkontakt med dit barn uden ubehag","Stemmen er blød og varm — dit barn kan høre det"]'::jsonb,
  '["Brug dette øjeblik til at forbinde med dit barn — bare et blik, et smil, en berøring","Del noget, der fylder, med en du stoler på","Mærk den ro, der er her lige nu — den er reel, også selvom den er kort","Hvis dit barn er i nærheden: lad dem mærke din ro. De regulerer sig efter dig."]'::jsonb,
  '["co-regulering","familiekort","generationsbrev"]'::jsonb,
  39274Ventral vagal tilstand (Porges): det sociale engagementsystem er fuldt aktivt. Klienten har adgang til mentalisering, refleksion og relationel kontakt. Dette er det optimale vindue for narrativt arbejde, for udforskning af tilknytningsmønstre, og for at bearbejde traumatiske oplevelser. I udsatte familier er denne tilstand ofte underudviklet — familiens "tryghedsmuskel" har ikke haft mulighed for at træne.39274,
  '["Reguleret diafragmatisk respiration","Prosodisk stemmeføring med variation","Responsiv ansigtsmimik — klienten \"møder\" dig","Afslappet muskulatur, særligt kæbe og skuldre"]'::jsonb,
  '["Udnyt vinduet til narrativt arbejde: eksternaliser problemhistorien, udforsk alternative fortællinger","Facilitér mentalisering mellem familiemedlemmer — \"hvad tror du, din datter følte i det øjeblik?\"","Arbejd med Circle of Security: styrk forælderens evne til at være tryg base og tryg havn","Konsolidér nye erfaringer somatisk — lad klienten mærke i kroppen, hvad det vil sige at være tryg"]'::jsonb,
  '["mentalisering-par","familiekort","generationsbrev"]'::jsonb
);

INSERT INTO ladder_states (trin, navn, farve, privat_beskrivelse, privat_krops_signaler, privat_handlinger, privat_oevelser, professionel_beskrivelse, professionel_krops_signaler, professionel_handlinger, professionel_oevelser) VALUES (
  2, 39274Alarm & aktivering39274, 39274amber39274,
  39274Dit sympatiske nervesystem er aktiveret — kamp-eller-flugt. Du mærker det som vrede, uro, angst eller en intens trang til at handle LIGE NU. For forældre med traumehistorik kan denne tilstand trigges af ting, der objektivt set er små: dit barn, der ikke lytter, en opringning fra kommunen, en stemme der lyder som noget fra fortiden. Din krop reagerer, som om faren er her NU — selvom den egentlig hører til dengang.39274,
  '["Hjertet banker hurtigt — du kan mærke pulsen i halsen","Musklerne spænder, særligt kæbe, skuldre og hænder","Åndedrættet er hurtigt og højt i brystet","Du kan ikke tænke klart — hjernen \"lukker ned\" for nuancer"]'::jsonb,
  '["STOP før du reagerer. 20 sekunder vagus-åndedræt kan ændre alt: 4 sekunder ind, 8 sekunder ud","Mærk fødderne mod gulvet — det fortæller dit nervesystem, at du er HER, ikke DENGANG","Sig til dig selv: \"Min krop reagerer på noget gammelt. Faren er ikke reel lige nu.\"","Hvis du mærker, at du er ved at reagere på dit barn fra dette sted: gå væk i 2 minutter. Ikke som straf. Som beskyttelse — for jer begge."]'::jsonb,
  '["vagus-aanding","somatisk-landing","co-regulering"]'::jsonb,
  39274Sympatisk aktivering: kamp-flugt-systemet dominerer. I familier med traumehistorik er dette ofte kronisk — nervesystemet har lært, at verden er farlig, og forbliver i alarmberedskab. Klienten kan fremstå agiteret, konfronterende, hypervigilant eller panikslagen. Mentalisering er kompromitteret — klienten reagerer fra det limbiske system, ikke fra præfrontal cortex. Prioritér ALTID regulering før bearbejdning.39274,
  '["Forhøjet autonom arousal: takykardi, hypertension, mydriasis","Muskelspændinger, særligt aksiale muskler og kæbe","Hypervigilans — klienten scanner konstant for fare","Respiration er thorakal og hurtig — vagal bremse er deaktiveret"]'::jsonb,
  '["Down-regulér gennem samstemning: match først energiniveau, sænk derefter gradvist","Brug polyvagale interventioner: forlænget udånding, stemmelejevariation, langsom rytmisk bevægelse","Validér nervesystemets reaktion — \"Din krop gør præcis, hvad den har lært at gøre for at beskytte dig\"","Undgå konfrontation og fortolkning i denne tilstand — hjernen kan ikke processere det. Regulér først, mentaliser bagefter."]'::jsonb,
  '["vagus-aanding","somatisk-landing","co-regulering"]'::jsonb
);

INSERT INTO ladder_states (trin, navn, farve, privat_beskrivelse, privat_krops_signaler, privat_handlinger, privat_oevelser, professionel_beskrivelse, professionel_krops_signaler, professionel_handlinger, professionel_oevelser) VALUES (
  3, 39274Overbelastning & nedlukning39274, 39274rose39274,
  39274Dit dorsale vagale system har taget over — din krop har lukket ned for at beskytte dig. Du føler dig tom, fjern, udmattet eller "ikke rigtig til stede." For mange forældre med traumehistorik er dette en velkendt tilstand — du har overlevet ved at koble fra. Det var en klog strategi dengang. Men nu gør den det svært at være til stede for dit barn og for dig selv. Vejen tilbage er langsom, blid og kræver ikke, at du "tager dig sammen."39274,
  '["Følelsesløshed eller tomhed — som om du ser livet udefra","Dyb træthed, der ikke forsvinder med søvn","Svært at mærke kroppen, følelser eller behov","Følelse af at være \"bag glas\" — til stede, men ikke rigtigt der"]'::jsonb,
  '["Start med det allermest konkrete: mærk vandet mod hænderne, en varm kop i hånden, fødderne mod gulvet","Bevæg dig langsomt — gå en kort tur, stræk dig, ryst kroppen let. Bevægelse fortæller nervesystemet, at du ikke er frosset fast","Opsøg en anden person — du behøver ikke tale om det. Bare at sidde i nærheden af et andet reguleret nervesystem hjælper","Vær tålmodig med dig selv. Nedlukning er ikke svaghed. Det er det mest avancerede beskyttelsessystem, din krop har. Det tog tid at komme hertil — det tager tid at komme tilbage."]'::jsonb,
  '["somatisk-landing","vagus-aanding","narrativ-livslinje"]'::jsonb,
  39274Dorsal vagal tilstand (Porges): immobiliseringsresponsen er aktiv. Klienten er i hypoarousal — under det terapeutiske vindue. Kan fremstå dissocieret, affladtet, fjern eller "compliant uden kontakt." I udsatte familier ses dette ofte hos forældre med kompleks PTSD og langvarig omsorgssvigt — nervesystemet har lært, at afkobling er den sikreste strategi. Denne tilstand kræver den mest varsomme, graduerede tilgang.39274,
  '["Hypoton muskulatur — kroppen virker \"tung\" eller kollapset","Monoton, lav stemme uden prosodisk variation","Reduceret eller fraværende ansigtsmimik","Begrænset øjenkontakt — blikket er \"tomt\" eller rettet nedad"]'::jsonb,
  '["Aktivér forsigtigt gennem sensorisk stimulering: temperatur, berøring, lugt — bottom-up interventioner der omgår kognitiv processering","Arbejd med orientering: \"Kan du se dig omkring? Hvad lægger du mærke til i rummet?\" — genaktivér det sociale engagementsystem gradvist","Hold en langsom, varm stemme med prosodisk variation — din stemme ER en polyvagal intervention","ALDRIG pres klienten til at \"mærke\" eller \"være til stede.\" Følg nervesystemets tempo. Tilbyd små, sikre invitationer. Reparation af dorsal vagal tilstand tager tid — og det er okay."]'::jsonb,
  '["somatisk-landing","vagus-aanding","narrativ-livslinje"]'::jsonb
);

-- ========== MORGEN CHECK-IN ==========
INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvordan mærker du dig selv lige nu?39274,
  '[{"label":"Rolig","respons":"Det er et godt udgangspunkt. Måske er det i dag, du kan mærke lidt mere af det, der ellers forsvinder i støjen.","link":"temaer","linkTekst":"Udforsk et tema"},{"label":"Urolig","respons":"Når kroppen er i alarm, er det svært at tænke klart. Start med åndedrættet — det er den hurtigste vej til ro.","link":"oevelser","linkTekst":"Prøv en øvelse"},{"label":"Tung","respons":"Nogle morgener vejer mere end andre. Du behøver ikke løfte det hele. Bare én ting.","link":"muligt","linkTekst":"Hvad er muligt lige nu?"},{"label":"Ved ikke","respons":"Det er også et svar. Bare det at du er her, er nok.","link":"hjem","linkTekst":"Udforsk i dit tempo"}]'::jsonb,
  0
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad fylder mest i dig her til morgen?39274,
  '[{"label":"Bekymring","respons":"Bekymringer fylder, fordi du holder af nogen. Lad os se, om der er ét lille sted at starte.","link":"muligt","linkTekst":"Find ét skridt"},{"label":"Tristhed","respons":"Tristhed er ikke svaghed. Den fortæller dig, at noget betyder noget. Giv den plads.","link":"temaer","linkTekst":"Læs om tab & sorg"},{"label":"Vrede","respons":"Vrede er energi. Den viser dig, hvor dine grænser er. Spørgsmålet er, hvad du vil gøre med den.","link":"trappen","linkTekst":"Se hvor du er på trappen"},{"label":"Håb","respons":"Hold fast i det. Selv det mindste håb er en dør, der står på klem.","link":"hjem","linkTekst":"Udforsk videre"}]'::jsonb,
  1
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvis din krop kunne sige én ting — hvad ville det være?39274,
  '[{"label":"Jeg er træt","respons":"Din krop beder om pause. Ikke nødvendigvis søvn — men et øjeblik uden krav. Start med tre dybe åndedrag.","link":"oevelser","linkTekst":"Prøv åndedrættet"},{"label":"Jeg er anspændt","respons":"Spændinger er kroppens måde at beskytte dig på. Lad os hjælpe den med at slippe, bare lidt.","link":"trappen","linkTekst":"Forstå dit nervesystem"},{"label":"Jeg er rastløs","respons":"Rastløshed er bevægelse, der leder efter en retning. Måske er der noget, der vil have opmærksomhed.","link":"temaer","linkTekst":"Find dit tema"},{"label":"Jeg har det ok","respons":"Det er værd at lægge mærke til. Gode øjeblikke fortjener opmærksomhed — også de stille.","link":"hjem","linkTekst":"Nyd roen"}]'::jsonb,
  2
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvor er du på trappen lige nu?39274,
  '[{"label":"Tryg","respons":"Når du er i dit tolerancevindue, er du bedst til at møde dig selv og andre. Brug det.","link":"temaer","linkTekst":"Udforsk et nyt tema"},{"label":"Aktiveret","respons":"Dit sympatiske nervesystem er tændt. Det er ikke farligt — men det er vigtigt at mærke det, før det styrer dig.","link":"trappen","linkTekst":"Lær mere om trappen"},{"label":"Lukket ned","respons":"Når kroppen lukker ned, har den brug for varme — ikke krav. Vær blid med dig selv.","link":"oevelser","linkTekst":"Start blødt med en øvelse"},{"label":"Skifter hele tiden","respons":"Det er normalt, især under pres. Dit nervesystem søger balance. Lad os finde et anker.","link":"oevelser","linkTekst":"Find et anker"}]'::jsonb,
  3
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad har du brug for i dag?39274,
  '[{"label":"Ro","respons":"Ro er ikke dovenskab. Det er genopladning. Giv dig selv lov.","link":"oevelser","linkTekst":"Øvelse til ro"},{"label":"Mod","respons":"Mod handler ikke om at være frygtløs. Det handler om at tage næste skridt, selvom det er svært.","link":"muligt","linkTekst":"Tag ét skridt"},{"label":"At blive set","respons":"Det er menneskeligt at have brug for vidner. Du er ikke alene i det, du bærer.","link":"temaer","linkTekst":"Du er ikke alene"},{"label":"Overblik","respons":"Når alt flyder sammen, hjælper det at sortere. Én ting ad gangen.","link":"muligt","linkTekst":"Skab overblik"}]'::jsonb,
  4
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Er der noget, du bærer med fra i går?39274,
  '[{"label":"En konflikt","respons":"Konflikter efterlader spor i kroppen. Det vigtigste nu er ikke at løse den — men at regulere dig selv først.","link":"trappen","linkTekst":"Tjek dit nervesystem"},{"label":"En god stund","respons":"Gem den. Gode stunder er brændstof. Læg mærke til, hvad der gjorde den mulig.","link":"hjem","linkTekst":"Fortsæt herfra"},{"label":"Dårlig samvittighed","respons":"Samvittighed viser, at du holder af. Men den må ikke fylde så meget, at den lammer dig. Hvad kan du gøre i dag?","link":"muligt","linkTekst":"Hvad er muligt nu?"},{"label":"Ingenting særligt","respons":"Også fint. Ikke alle dage behøver at være tunge. Nogle dage bare er.","link":"hjem","linkTekst":"Bare vær her"}]'::jsonb,
  5
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvem tænker du på lige nu?39274,
  '[{"label":"Mit barn","respons":"Dit barn mærker dig, før du siger noget. Når du regulerer dig selv, giver du dit barn lov til at slappe af.","link":"trappen","linkTekst":"Start med dig selv"},{"label":"Min partner","respons":"Parforholdet er familiens fundament. Selv små bevægelser mod hinanden gør en forskel.","link":"temaer","linkTekst":"Læs om parforholdet"},{"label":"Mig selv","respons":"At tænke på dig selv er ikke egoistisk. Det er nødvendigt. Du kan ikke give fra en tom kop.","link":"oevelser","linkTekst":"Gør noget for dig"},{"label":"Hele familien","respons":"Familien er et system. Når du bevæger dig, bevæger alle sig. Start med det, du kan.","link":"hjem","linkTekst":"Se helheden"}]'::jsonb,
  6
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvis du kun måtte løfte én ting i dag — hvad ville det være?39274,
  '[{"label":"Noget praktisk","respons":"Praktiske ting kan give kontrol tilbage. Vælg den mindste opgave og gør den færdig. Det tæller.","link":"muligt","linkTekst":"Skriv det ned"},{"label":"En relation","respons":"Relationer kræver nærvær, ikke perfektion. Ét øjeblik af ægte kontakt er nok.","link":"temaer","linkTekst":"Forstå relationen"},{"label":"Min egen tilstand","respons":"Det vigtigste arbejde er ofte det usynlige. At regulere dig selv er en gave til alle omkring dig.","link":"oevelser","linkTekst":"Start her"},{"label":"Jeg ved det ikke","respons":"Når du ikke ved, er det ærligt. Giv det lidt tid. Svaret kommer, når kroppen er klar.","link":"hjem","linkTekst":"Tag det roligt"}]'::jsonb,
  7
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvordan sov du i nat?39274,
  '[{"label":"Godt","respons":"Søvn er kroppens vigtigste reparation. Tag det med som et godt fundament i dag.","link":"hjem","linkTekst":"God start"},{"label":"Uroligt","respons":"Urolig søvn fortæller, at nervesystemet stadig arbejder. Åndedrættet kan hjælpe med at finde ro.","link":"oevelser","linkTekst":"Prøv åndedrætsøvelse"},{"label":"For lidt","respons":"Når kroppen mangler søvn, er tærsklen lavere. Vær ekstra venlig mod dig selv i dag.","link":"trappen","linkTekst":"Vær opmærksom i dag"},{"label":"Kunne ikke falde i søvn","respons":"Tankemylder holder nervesystemet aktivt. Prøv at lande i kroppen i stedet for i hovedet.","link":"oevelser","linkTekst":"Øvelse til landing"}]'::jsonb,
  8
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad er det første, du mærker i kroppen lige nu?39274,
  '[{"label":"Spænding i skuldrene","respons":"Skuldrene bærer det, du ikke siger højt. Lad dem falde — bare et øjeblik. Du behøver ikke bære det hele.","link":"oevelser","linkTekst":"Slip spændingen"},{"label":"Knude i maven","respons":"Maven reagerer på det ubevidste. Der er noget, der vil have opmærksomhed. Du behøver ikke løse det — bare mærke det.","link":"trappen","linkTekst":"Forstå signalet"},{"label":"Tyngde","respons":"Tyngde er kroppens måde at sige: langsomt. Følg dens tempo i dag.","link":"oevelser","linkTekst":"Start langsomt"},{"label":"Ingenting særligt","respons":"Nogle gange er kroppen stille. Det er fint. Den taler, når den er klar.","link":"hjem","linkTekst":"Fortsæt stille"}]'::jsonb,
  9
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad ville du sige til dig selv, hvis du var din egen bedste ven?39274,
  '[{"label":"Du gør det godt nok","respons":"\"Godt nok\" er ikke en undskyldning — det er sandheden. Perfektionisme er traumets forklædning.","link":"temaer","linkTekst":"Læs om skam & skyld"},{"label":"Det bliver bedre","respons":"Og det gør det. Ikke fordi alt fikser sig selv — men fordi du allerede er i bevægelse.","link":"hjem","linkTekst":"Se din bevægelse"},{"label":"Tag en pause","respons":"Pause er ikke opgivelse. Det er regulering. Din krop ved bedst.","link":"oevelser","linkTekst":"Tag en pause nu"},{"label":"Bed om hjælp","respons":"At bede om hjælp er styrke, ikke svaghed. Ingen klarer det alene — og det skal du heller ikke.","link":"temaer","linkTekst":"Du er ikke alene"}]'::jsonb,
  10
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvis denne dag kunne give dig én ting — hvad ville det være?39274,
  '[{"label":"Lethed","respons":"Lethed kommer i små glimt. Ikke som fravær af problemer, men som øjeblikke hvor du glemmer dem.","link":"hjem","linkTekst":"Find et glimt"},{"label":"Forbindelse","respons":"Vi er skabt til forbindelse. Ét ægte øjeblik med et andet menneske kan ændre en hel dag.","link":"temaer","linkTekst":"Forstå forbindelsen"},{"label":"Klarhed","respons":"Klarhed kommer sjældent af at tænke mere. Den kommer af at stoppe op og mærke, hvad der er vigtigt.","link":"muligt","linkTekst":"Sortér det vigtige"},{"label":"Bare at overleve","respons":"Det er nok. Overlevelse er ikke fiasko — det er fundament. Du er her. Det tæller.","link":"trappen","linkTekst":"Mærk hvor du er"}]'::jsonb,
  11
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad gør dig mest sårbar lige nu?39274,
  '[{"label":"Ensomhed","respons":"Ensomhed i en familie er en af de tungeste ting. Du er ikke forkert — du mangler at blive mødt.","link":"temaer","linkTekst":"Om isolation"},{"label":"Magtkampe","respons":"Magtkampe handler sjældent om magt. De handler om at blive hørt. Hvad vil du egentlig sige?","link":"temaer","linkTekst":"Forstå konflikten"},{"label":"Børnenes reaktioner","respons":"Børn reagerer på det, de mærker — ikke det, de bliver fortalt. Deres adfærd er kommunikation.","link":"hjem","linkTekst":"Se barnets perspektiv"},{"label":"Min egen historie","respons":"Dine sår gør dig ikke til en dårlig forælder. De gør dig til et menneske, der kæmper. Det er modigt.","link":"oevelser","linkTekst":"Start med dig selv"}]'::jsonb,
  12
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Mærker du mere frygt eller mere håb lige nu?39274,
  '[{"label":"Mest frygt","respons":"Frygt er nervesystemets alarmklokke. Den beskytter dig — men den behøver ikke styre dig.","link":"trappen","linkTekst":"Regulér frygten"},{"label":"Mest håb","respons":"Håb er ikke naivt. Det er dit nervesystem, der siger: der er muligheder her. Følg det.","link":"muligt","linkTekst":"Grib muligheden"},{"label":"Begge dele","respons":"Det er det mest menneskelige svar. Frygt og håb lever side om side. Du behøver ikke vælge.","link":"hjem","linkTekst":"Lad begge dele være"},{"label":"Hverken eller","respons":"Følelsesløshed kan være kroppens pause-knap. Den beskytter dig, men den holder dig også væk.","link":"oevelser","linkTekst":"Kom tilbage til kroppen"}]'::jsonb,
  13
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad har du brug for at høre i dag?39274,
  '[{"label":"At det er okay","respons":"Det er okay. Ikke alt behøver at være løst. Ikke alt behøver at give mening. Det er okay, som det er lige nu.","link":"hjem","linkTekst":"Bare vær her"},{"label":"At jeg ikke er alene","respons":"Du er ikke alene. Tusindvis af familier kæmper med det samme. Din kamp gør dig ikke isoleret — den forbinder dig.","link":"temaer","linkTekst":"Andre kender det"},{"label":"At der er en vej","respons":"Der er en vej. Den er ikke altid synlig, og den er sjældent lige. Men den er der.","link":"muligt","linkTekst":"Se næste skridt"},{"label":"At jeg gør det godt nok","respons":"Du gør det godt nok. Ikke perfekt — godt nok. Og det er præcis nok.","link":"oevelser","linkTekst":"Giv dig selv credit"}]'::jsonb,
  14
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvilken rolle fylder mest i dig lige nu?39274,
  '[{"label":"Forælder","respons":"At være forælder under pres er udmattende. Husk: dit barn har ikke brug for en perfekt forælder — men en tilstrækkelig én.","link":"hjem","linkTekst":"Giv dig selv ro"},{"label":"Partner","respons":"Parforholdet under pres er som at bygge bro i storm. Det kræver tålmodighed — med dig selv og den anden.","link":"temaer","linkTekst":"Om parforholdet"},{"label":"Mig selv","respons":"Du eksisterer også uden dine roller. Den person, du var før alt det her — den er der stadig.","link":"oevelser","linkTekst":"Find dig selv"},{"label":"Alt på én gang","respons":"Når alt skal alt på én gang, knager fundamentet. Vælg én rolle i dag. Resten venter.","link":"muligt","linkTekst":"Prioritér i dag"}]'::jsonb,
  15
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvordan ville du beskrive din energi lige nu?39274,
  '[{"label":"Fuld af energi","respons":"Brug den klogt. Energi er en ressource — og du bestemmer, hvor den skal hen.","link":"muligt","linkTekst":"Sæt den i spil"},{"label":"Neutral","respons":"Neutral er undervurderet. Det er herfra, du kan vælge frit. Nyd det stille øjeblik.","link":"hjem","linkTekst":"Udforsk roligt"},{"label":"Lav","respons":"Lav energi er kroppens besked: gør mindre, ikke mere. Hvad kan du droppe i dag?","link":"oevelser","linkTekst":"Genoplad stille"},{"label":"Svingende","respons":"Svingende energi afspejler et nervesystem i bevægelse. Det er ikke ustabilitet — det er regulering i gang.","link":"trappen","linkTekst":"Forstå svingningerne"}]'::jsonb,
  16
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad ville hjælpe dig mest lige nu?39274,
  '[{"label":"At forstå mere","respons":"Forståelse skaber ro. Når du ved, hvad der sker, mister det noget af sin magt.","link":"temaer","linkTekst":"Lær noget nyt"},{"label":"At gøre noget konkret","respons":"Handling er medicin mod magtesløshed. Selv den mindste handling ændrer dynamikken.","link":"muligt","linkTekst":"Gør én ting"},{"label":"At mærke min krop","respons":"Kroppen ved ofte mere end hovedet. Når du lander i den, finder du svar, tanken ikke kan give.","link":"oevelser","linkTekst":"Land i kroppen"},{"label":"Bare at trække vejret","respons":"Så gør det. Tre dybe åndedrag. Ind gennem næsen, ud gennem munden. Du har tid.","link":"oevelser","linkTekst":"Åndedrættet"}]'::jsonb,
  17
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad ser du, når du kigger på din familie lige nu?39274,
  '[{"label":"Kærlighed under pres","respons":"Kærlighed under pres er stadig kærlighed. Den er bare svær at få øje på, når alarmen kører.","link":"hjem","linkTekst":"Se helheden"},{"label":"Afstand","respons":"Afstand i en familie er smertefuld. Men den er også information: noget kan repareres.","link":"temaer","linkTekst":"Forstå afstanden"},{"label":"Kaos","respons":"Kaos er, hvad der sker, når mange nervesystemer er dysregulerede samtidig. Det er ikke familiens skyld.","link":"trappen","linkTekst":"Start med dit nervesystem"},{"label":"Muligheder","respons":"At se muligheder er et tegn på, at du er i dit tolerancevindue. Grib det, mens det er her.","link":"muligt","linkTekst":"Grib dem nu"}]'::jsonb,
  18
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvilken sætning rammer dig mest lige nu?39274,
  '[{"label":"Jeg gør mit bedste","respons":"Ja. Og dit bedste er nok. Det er ikke altid pænt — men det er ægte.","link":"hjem","linkTekst":"Du er nok"},{"label":"Jeg er bange for at fejle","respons":"Angsten for at fejle er ofte arvet. Du gentager ikke nødvendigvis din historie — du skriver en ny.","link":"temaer","linkTekst":"Bryd mønstret"},{"label":"Jeg savner mig selv","respons":"Savn efter dig selv er et sundt tegn. Det betyder, at du ved, der er mere.","link":"oevelser","linkTekst":"Find dig selv igen"},{"label":"Det kan ikke fortsætte","respons":"Når du mærker det, er du allerede i bevægelse. Forandring starter med at sige: det her virker ikke.","link":"muligt","linkTekst":"Tag det første skridt"}]'::jsonb,
  19
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvordan er stemningen derhjemme?39274,
  '[{"label":"Stille — den gode slags","respons":"Stille rum er rum, hvor nervesystemet kan regulere. Nyd det. Det er helende.","link":"hjem","linkTekst":"Hvil i det"},{"label":"Anspændt","respons":"Anspændthed smitter. Når ét nervesystem er i alarm, følger de andre. Start med at regulere dit eget.","link":"trappen","linkTekst":"Start med dig"},{"label":"Kaotisk","respons":"Kaos er midlertidigt. Det føles uendeligt, men det er det ikke. Find ét roligt punkt og hold fast.","link":"oevelser","linkTekst":"Find dit anker"},{"label":"Fraværende","respons":"Når alle er til stede men ingen er \"der\", mangler forbindelsen. Ét øjeblik af ægte kontakt kan ændre det.","link":"temaer","linkTekst":"Genopbyg kontakten"}]'::jsonb,
  20
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad drømte du om, da du var yngre?39274,
  '[{"label":"En tryg familie","respons":"Den drøm lever stadig. Tryghed bygges ikke af perfektion, men af tilstedeværelse og reparation.","link":"hjem","linkTekst":"Byg videre"},{"label":"Frihed","respons":"Frihed i en familie handler ikke om at slippe væk — men om at være dig selv, sammen med andre.","link":"oevelser","linkTekst":"Mærk friheden"},{"label":"At blive set","respons":"Behovet for at blive set forsvinder aldrig. Giv dig selv det, du ikke fik. Det er aldrig for sent.","link":"temaer","linkTekst":"Om tilknytning"},{"label":"Husker det ikke","respons":"Når drømme er glemt, er det ofte fordi overlevelse tog al pladsen. De er der stadig — under overfladen.","link":"oevelser","linkTekst":"Grav forsigtigt"}]'::jsonb,
  21
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvornår følte du dig sidst virkelig til stede?39274,
  '[{"label":"For nylig","respons":"Hold fast i den følelse. Nærvær er en muskel — jo mere du bruger den, jo stærkere bliver den.","link":"hjem","linkTekst":"Styrk den"},{"label":"Det er længe siden","respons":"Når nærvær er blevet sjældent, har nervesystemet brug for hjælp til at komme ned i gear.","link":"oevelser","linkTekst":"Kom ned i gear"},{"label":"Kun med mit barn","respons":"Børn trækker os ind i nuet. De er vores bedste lærere i nærvær — uanset alder.","link":"hjem","linkTekst":"Lær af dit barn"},{"label":"Aldrig rigtig","respons":"Hvis du altid har levet i overlevelsesmode, kan nærvær føles fremmed. Det kan læres. Langsomt og trygt.","link":"trappen","linkTekst":"Forstå hvorfor"}]'::jsonb,
  22
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvad ville Rikke sige til dig lige nu?39274,
  '[{"label":"Mærk det","respons":"Rikke ville sige: lad dig mærke det. Ikke analysere det, ikke løse det — bare mærke det.","link":"oevelser","linkTekst":"Mærk det nu"},{"label":"Du er ikke alene","respons":"Rikke ville sige: de familier, jeg møder, bærer alle på det her. Du er ikke den eneste.","link":"temaer","linkTekst":"Se at andre kender det"},{"label":"Start med kroppen","respons":"Rikke ville sige: din krop husker mere, end du tror. Vejen ind gennem kroppen er ofte hurtigere end ord.","link":"oevelser","linkTekst":"Start med kroppen"},{"label":"Bed om hjælp","respons":"Rikke ville sige: at bede om hjælp er ikke at give op. Det er at tage sig selv og sin familie alvorligt.","link":"hjem","linkTekst":"Tag det alvorligt"}]'::jsonb,
  23
);

INSERT INTO morning_checkins (spoergsmaal, svar, sort_order) VALUES (
  39274Hvordan har du det med dagen, der venter?39274,
  '[{"label":"Overskuelig","respons":"Når dagen føles overskuelig, er dit nervesystem reguleret. Brug det — men pres dig ikke.","link":"hjem","linkTekst":"Tag det med"},{"label":"Overvældende","respons":"En overvældende dag behøver ikke leves på én gang. Tænk i de næste 30 minutter. Det er nok.","link":"muligt","linkTekst":"Ét skridt ad gangen"},{"label":"Ensformig","respons":"Ensformighed kan være trygt — eller kvælende. Hvad er det for dig? Der er ingen forkerte svar.","link":"temaer","linkTekst":"Udforsk noget nyt"},{"label":"Uforudsigelig","respons":"Uforudsigelighed holder nervesystemet aktivt. Giv dig selv et anker — én ting, der er fast.","link":"oevelser","linkTekst":"Find dit anker"}]'::jsonb,
  24
);

-- ========== VERSION ==========
INSERT INTO content_versions (version, description) VALUES ('1.0.0', 'Initial seed fra data.js');
