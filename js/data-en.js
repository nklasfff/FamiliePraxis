// ============================================================
// FamiliePraxis — English Content
// Rikke Veth · Familiepraxis · Frederiksberg
// ============================================================

var PRAKSIS_INFO_EN = {
  navn: 'Familiepraxis',
  terapeut: 'Rikke Veth',
  titel: 'Family Therapist · Narrative-Systemic Specialist · Breathwork Therapist',
  adresse: 'Amalievej 6, 1875 Frederiksberg C',
  telefon: '+45 31 21 33 25',
  email: 'rikke@familiepraxis.dk',
  cvr: '42689823',
  website: 'familiepraxis.dk'
};

// ============================================================
// Circle texts for the two perspectives
// ============================================================
var CIRKEL_TEKSTER_EN = {
  privat: {
    centrum: ['The family', 'as a whole'],
    relationer: ['Attachment', '& safety'],
    parterapi: ['The couple', '& closeness'],
    familie: ['Interaction', '& patterns'],
    individuel: ['Yourself', '& your traces'],
    aandedraet: ['Breath', '& nervous system'],
    boern: ['The child\'s', 'voice']
  },
  professionel: {
    centrum: ['Systemic', 'whole-view'],
    relationer: ['Attachment', '& mentalization'],
    parterapi: ['Parental couple', '& alliance'],
    familie: ['Family', 'treatment'],
    individuel: ['Individual', 'trauma therapy'],
    aandedraet: ['Polyvagal', 'regulation'],
    boern: ['The child\'s', 'perspective']
  }
};

// ============================================================
// Circle names (lookup)
// ============================================================
var CIRKEL_NAVNE_EN = {
  centrum: 'The family as a whole',
  relationer: 'Attachment & safety',
  parterapi: 'The couple',
  familie: 'Interaction & patterns',
  individuel: 'Yourself & your traces',
  aandedraet: 'Breath & nervous system',
  boern: 'The child\'s voice'
};

// ============================================================
// 7 Circles — Core Areas
// ============================================================
var CIRKLER_EN = [
  {
    id: 'centrum',
    titel: 'The family as a whole',
    ikon: 'leaf',
    privat: {
      overblik: {
        beskrivelse: 'In a family, everything is connected. When one member is struggling, everyone feels it — and when the family finds its way together, it lifts everyone. Understanding the family as a whole is the first step toward change.',
        punkter: [
          'Everything in the family is connected',
          'Traumatic traces affect the entire family',
          'Change in one place creates movement everywhere',
          'Your story also holds your strength'
        ],
        tip: 'Try seeing your challenges as something the family carries together — not as one person\'s problem. It changes everything.'
      },
      dybde: [
        'Families that have lived through difficult experiences — neglect, violence, abuse, mental illness, or chronic stress — develop patterns that were once necessary for survival. But those same patterns can keep the family stuck, even when the danger has passed. Understanding that is where change begins.',
        'When we see the family as a whole, we discover something important: the child\'s behaviour is not the problem — it is communication. A child who hits, screams, or withdraws is telling us something about what they sense in the family. When we listen to that communication, new possibilities open up.',
        'Many families have tried to solve their problems by focusing on one family member — often the child. But because everything is connected, that is rarely enough. Family therapy looks at the whole dynamic: the parents\' own histories, the couple relationship, the sibling relationships, and the external pressures.',
        'Working with the family as a whole takes courage. It means everyone must look at their own role in the dynamic — not to assign blame, but to find possibilities. When a parent dares to look at their own wounds, it gives the child permission to let go of the burdens they have been carrying.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'A narrative-systemic approach sees the family as a unified system, where traumatic experiences, attachment patterns, and generational traces shape the dynamic we encounter. Intervention targets the whole — not the symptom bearer.',
        punkter: [
          'Narrative-systemic whole-system understanding',
          'Intergenerational trauma patterns',
          'The child as symptom bearer for the system',
          'Person-centred, not method-centred approach'
        ],
        tip: 'The most important tool is your intuition for what this person needs. The method follows the person — not the other way around.'
      },
      dybde: [
        'In family treatment with vulnerable families, it is essential to understand that the family\'s current difficulties rarely emerged in a vacuum. Generational trauma, neglect, and adverse childhood conditions are transmitted through attachment patterns, somatic responses, and the stories the family tells about itself.',
        'The narrative-systemic approach allows us to work with the family\'s self-understanding. By externalising the problems — separating the person from the problem — space is created for the family to see itself as more than its difficulties. This is particularly important for families with a long history in the municipal system.',
        'In complex cases with many involved professionals, coordination is crucial. The role of "chaos pilot" — navigating between social workers, schools, institutions, psychiatry, and healthcare — requires the ability to keep the family\'s perspective central, even when the system\'s logic pulls in other directions.',
        'Family assessments require transparency. The family should always know what is written about them and have the opportunity to comment. This transparency is not just ethically correct — it strengthens the alliance and increases treatment effectiveness.'
      ]
    }
  },
  {
    id: 'relationer',
    titel: 'Attachment & safety',
    ikon: 'heart',
    privat: {
      overblik: {
        beskrivelse: 'Safety is the foundation for everything. The way you were met as a child shapes the way you meet the world today. Understanding your attachment patterns is not about finding faults — it is about finding your way home to yourself.',
        punkter: [
          'Your patterns once protected you',
          'Insecure attachment can be healed',
          'Safety is created in relationships',
          'You can give your child what you never received'
        ],
        tip: 'When you react disproportionately strongly in a relationship, it is often an echo from something older. Be curious about that echo — it is telling you something important.'
      },
      dybde: [
        'Attachment is not a choice — it is a biological necessity. From birth, we seek connection with those meant to protect us. If that connection was unstable, unpredictable, or absent, our nervous system learns to stay alert. That is not a flaw — it was the best strategy you had as a child.',
        'In families with traumatic experiences, we often see attachment patterns passed down. A parent who grew up without safety may struggle to give their child the calm the child needs — not because the parent doesn\'t want to, but because the nervous system hasn\'t learned what safety feels like.',
        'The good news is that attachment patterns can change. The brain remains plastic throughout life. Through safe relationships — with a partner, a friend, a therapist — new experiences can slowly overwrite the old ones. It takes time and repeated experiences of being met, but it is possible.',
        'For parents in vulnerable families, it is crucial to understand: you don\'t need to repair your entire history before you can be a good enough parent. Even small moments of genuine contact — a look, a touch, an "I\'m here" — make a difference for your child.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Attachment and mentalization are the two supporting pillars in trauma-informed family treatment. We map attachment patterns and strengthen the parents\' capacity to understand the child\'s inner world.',
        punkter: [
          'Circle of Security as framework',
          'Mentalization-Based Treatment (MBT)',
          'Disorganised attachment and trauma',
          'Intergenerational transmission of patterns'
        ],
        tip: 'The parents\' attachment history is often the key to understanding the child\'s symptoms. Always ask about the parents\' own upbringing.'
      },
      dybde: [
        'In work with vulnerable families, we often encounter disorganised attachment — the pattern that arises when the person meant to provide safety is also the source of fear. The child is trapped in an unsolvable paradox, and the strategies they develop may look like behaviour problems but are actually survival strategies.',
        'Mentalization — the ability to see behind the behaviour and understand the emotions and intentions that drive it — is often weakened in parents who experienced neglect themselves. When we strengthen mentalizing capacity, we strengthen the parent\'s ability to meet their child with curiosity rather than reactivity.',
        'Circle of Security provides a concrete language for the attachment process: the child needs a safe base to explore from and a safe haven to return to. Many parents in vulnerable families painfully recognise that they themselves lacked this circle — and that recognition can become the driving force for change.',
        'In interdisciplinary collaboration, it is important to convey attachment understanding to everyone involved — social workers, educators, teachers. When the entire system around the family understands the child\'s behaviour as attachment communication, interventions shift from control to care.'
      ]
    }
  },
  {
    id: 'parterapi',
    titel: 'The couple',
    ikon: 'heartDouble',
    privat: {
      overblik: {
        beskrivelse: 'The couple relationship is the family\'s nerve centre. When the parents struggle — with each other, with life, with their own traces — the whole family feels it. Taking care of the couple relationship is taking care of the children.',
        punkter: [
          'Your conflicts have deeper roots',
          'Both partners\' histories play a role',
          'Children sense the tension between you',
          'It is never too late to find your way back'
        ],
        tip: 'When you argue, try to pause and ask: "What am I actually afraid of right now?" The answer is rarely about the dishes.'
      },
      dybde: [
        'In families with traumatic experiences, the couple relationship is often under extra pressure. When both partners carry difficult experiences from their own childhood, even small conflicts can trigger powerful emotions — because what is activated is older than the relationship itself.',
        'A common pattern is that one partner seeks contact while the other withdraws. It looks like a conflict about practical things, but it is always about the same question: "Are you there for me? Can I trust you?" When both partners carry insecure attachment, this pattern can become very intense.',
        'For parents in vulnerable families, the couple relationship is often complicated by external pressures: finances, housing, contact with authorities, worry about the children. It is important to acknowledge that your difficulties are not just about your relationship — but also about the conditions you live under.',
        'Working with the couple relationship in a traumatised family is not about becoming the perfect couple. It is about creating enough safety between you for the children to feel it. Even small steps — maintaining eye contact, saying "I\'m sorry," listening without defending — can change the family\'s climate.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'The parental alliance is crucial for the success of family treatment. In vulnerable families, the couple relationship is often burdened by individual traumas, external pressure, and systemic involvement, requiring an integrated approach.',
        punkter: [
          'The parental alliance as treatment focus',
          'Trauma-informed couples therapy',
          'Co-regulation between parents',
          'The couple under external pressure (authorities, finances)'
        ],
        tip: 'In vulnerable families, the couple relationship is often the most neglected area. Strengthen the alliance between the parents, and you strengthen the entire system.'
      },
      dybde: [
        'In municipal family treatment, the parental alliance is often the key but rarely the direct focus. When the parents are in constant conflict — or in silent disconnection — even the best child-focused intervention cannot compensate. Addressing the couple relationship is therefore a systemic intervention, not an add-on.',
        'Trauma-informed couples therapy with vulnerable families requires understanding that both partners\' nervous systems are involved. When one partner is in sympathetic activation (fight-flight) and the other in dorsal vagal (collapse), conversation is meaningless. Only when both are regulated can contact arise.',
        'In blended families with trauma histories, the dynamic is particularly complex: new partners must navigate loyalty conflicts, step-parent roles, and the children\'s grief over the original family. A narrative approach can help the family create a new, shared story that holds everyone\'s experiences.',
        'When parents are separated, the focus shifts from couples therapy to co-parenting. Here, the goal is not to save the relationship but to establish a functional parental alliance where children are not caught in loyalty conflicts.'
      ]
    }
  },
  {
    id: 'familie',
    titel: 'Interaction & patterns',
    ikon: 'homeHeart',
    privat: {
      overblik: {
        beskrivelse: 'Every family has its patterns — ways of reacting, roles that are distributed, things left unsaid. Some patterns protect. Others keep you stuck. Seeing them is the first step toward choosing differently.',
        punkter: [
          'Patterns are inherited — but can be broken',
          'Roles in the family can change',
          'The unspoken shapes the interaction',
          'New paths require that everyone is seen'
        ],
        tip: 'Try to notice what happens just BEFORE a conflict escalates. Who does what? Who goes silent? That pattern is telling you something important.'
      },
      dybde: [
        'In families with traumatic experiences, fixed roles often develop: the one who takes care of everyone; the one who acts out; the one who becomes invisible; the one who holds everything together. These roles are not freely chosen — they are survival strategies that grew because someone had to fill the gaps.',
        'Patterns repeat across generations. A mother who was parentified as a child may unconsciously make her child into the one who takes care of her. A father who grew up with violence may either repeat the pattern or withdraw completely from conflicts. Both affect the family\'s interaction.',
        'When a family has many professionals around it — social workers, family therapists, educators, teachers — it can paradoxically make interaction more confused. The family may feel surveilled, judged, or paralysed. It is important that help gives the family more agency — not less.',
        'Changing the family\'s patterns is not about doing everything differently overnight. It is about finding the small moments where you are already doing what you want to do more of — and building from there. Even in the most burdened families, there are moments of connection and care.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'The family\'s interaction patterns are mapped narratively and systemically. We examine roles, alliances, generational patterns, and the dominant stories the family lives by — and help the family find alternative narratives.',
        punkter: [
          'Narrative externalisation of problems',
          'Parentification and role confusion',
          'Genograms and generational patterns',
          '3-month family assessments'
        ],
        tip: 'Always ask: "If this pattern once had a function — what did it protect the family from?" That opens understanding rather than judgment.'
      },
      dybde: [
        'Narrative therapy is particularly well-suited to work with vulnerable families because it separates the person from the problem. When we externalise — "when does the anger sneak in?" rather than "why are you angry?" — a space is created where the family can see the problem from outside and find their own agency.',
        'In intensive family treatment with home visits, we see interaction patterns unfold in the family\'s own environment. This provides entirely different access than office conversations. We see who sits at the table, who withdraws, who takes over — and we can intervene in actual situations.',
        '3-month family assessments require systematic mapping of the family\'s dynamics, resources, and stressors. The genogram is an indispensable tool: it makes patterns visible across generations and gives the family itself a visual understanding of where their stories come from.',
        'In interdisciplinary collaboration, it is important to hold firm that the family\'s patterns are not pathology — they are adaptations to difficult life conditions. This understanding shifts intervention from wanting to "fix" the family to wanting to strengthen the family\'s own capacity for change.'
      ]
    }
  },
  {
    id: 'individuel',
    titel: 'Yourself & your traces',
    ikon: 'butterfly',
    privat: {
      overblik: {
        beskrivelse: 'You carry traces from your life — from your upbringing, your relationships, your losses and your battles. Individual therapy is not about fixing you. It is about standing more solidly in what you stand in, and finding resources you forgot you had.',
        punkter: [
          'Your reactions make sense',
          'Trauma can be processed at your own pace',
          'You are more than your story',
          'Understanding your body is understanding yourself'
        ],
        tip: 'You don\'t need to understand everything before you can start feeling better. Sometimes it is enough to feel that someone is listening — truly listening.'
      },
      dybde: [
        'Many people live with a feeling that something is wrong — without being able to put it into words. It can show up as anxiety, exhaustion, anger, or a feeling of emptiness. Often these are traces of experiences that were never processed — because there was no room for it, or because no one asked.',
        'In therapy, I meet you where you are — with everything you carry. It is not about solving problems but about becoming better at holding the difficult, understanding how your body reacts, and slowly finding more space inside. We don\'t fix — we create room.',
        'For parents in vulnerable families, individual therapy is often an important complement to family treatment. Your own unprocessed experiences — neglect, violence, loss, loneliness — affect your ability to be present with your children. Taking care of your own wounds is a gift to the whole family.',
        'Trauma processing happens in phases: first we create safety and stability, so you have a foundation to stand on. Then we can slowly approach the difficult material — at your pace, with respect for your boundaries. Integration is the final step: finding a new place for what happened, so it no longer controls your life.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Individual therapy in a family therapeutic context always keeps focus on the individual-in-relation. We work narratively with the client\'s story and somatically with the body\'s traces — always with attention to the systemic field.',
        punkter: [
          'Phase-based trauma treatment',
          'Narrative identity work',
          'Somatic trauma therapy and breathwork',
          'PTSD, complex PTSD, and C-PTSD'
        ],
        tip: 'Stabilisation first — always. A client who is not regulated cannot process. Give the body priority when it is in alarm.'
      },
      dybde: [
        'In working with clients from vulnerable families, we often encounter complex PTSD: a pattern of symptoms stemming from repeated, prolonged traumatic experiences in close relationships. Unlike single-event trauma, C-PTSD requires a slower, more relational approach, where the therapeutic alliance itself is healing.',
        'The narrative approach gives the client the opportunity to retell their story — not by changing facts, but by finding new perspectives. When a woman who experienced violence can see her survival as strength instead of shame, the entire self-understanding shifts.',
        'Integration of somatic therapy and breathwork is central to trauma treatment. The body carries the imprint of trauma as tensions, breathing restrictions, and chronic nervous system activation. Through body awareness and breathwork, these patterns can slowly dissolve.',
        'In the interdisciplinary field, it is important to ensure that individual therapy does not work against family treatment. Close coordination with the family therapist and social worker is necessary, while respecting the client\'s confidentiality. This balance requires experience and professional integrity.'
      ]
    }
  },
  {
    id: 'aandedraet',
    titel: 'Breath & nervous system',
    ikon: 'wind',
    privat: {
      overblik: {
        beskrivelse: 'Your nervous system is like an inner alarm. In people with traumatic experiences, the alarm is often on — even when there is no danger. Breathing is the most direct path to telling your body that it is safe now.',
        punkter: [
          'Your nervous system reacts faster than your thoughts',
          'Stressed breathing keeps you in alarm mode',
          'Calm breathing signals safety to the brain',
          'You can learn to regulate yourself'
        ],
        tip: 'Try right now: breathe in for 4 counts, out for 6 counts. Do it three times. Notice how the body responds. That is your nervous system shifting gears.'
      },
      dybde: [
        'Breathing is the only autonomic function you can also control consciously. That makes it a direct line to your nervous system. When you consciously extend the exhale, you activate the part of the nervous system that signals safety — the vagus nerve, a quiet stream of communication between body and mind.',
        'People who have experienced trauma often have breathing that is tight and shallow. The body holds on — in the chest, the diaphragm, the belly — because it is still on alert. Breathwork is not about forcing the body to relax, but about slowly re-inviting safety into the body.',
        'For families with traumatic experiences, somatic regulation is especially important. When a parent is in chronic alarm, the child can feel it — and the child\'s nervous system follows along. Learning to regulate your own nervous system is therefore one of the most concrete gifts you can give your children.',
        'Breathwork is not just technique — it is a path into emotions that have been locked inside the body. Many people experience grief, relief, or old fear being released during breathwork. That is the body\'s way of letting go of what it has held onto. It requires safe conditions and a therapist who can hold what emerges.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'Polyvagal theory and breathwork constitute the somatic dimension in trauma-informed family treatment. We work with the nervous system\'s three states and use breathing as a clinical intervention for regulation.',
        punkter: [
          'Polyvagal theory — three states of the nervous system',
          'Certified breathwork therapist (2022-23)',
          'Co-regulation in family treatment',
          'NADA ear acupuncture as supplement'
        ],
        tip: 'Always begin by reading the client\'s nervous system state. Are they in ventral vagal, sympathetic activation, or dorsal collapse? Your intervention depends on the answer.'
      },
      dybde: [
        'Stephen Porges\' polyvagal theory gives us a precise language for the nervous system\'s three hierarchical states: ventral vagal (safety, social engagement), sympathetic (fight-flight, alarm), and dorsal vagal (collapse, disconnection). In traumatised families, we often see the nervous system "locked" in sympathetic activation or dorsal collapse.',
        'Breathwork as a clinical tool starts with observing the client\'s breathing: Where in the body do they breathe? How deeply? How fast? Breathing restrictions reveal where the body is holding — and give us a map of the somatic traces of trauma.',
        'Co-regulation — when one person\'s regulated nervous system helps another find calm — is the foundation of therapeutic contact with traumatised families. The therapist\'s own nervous system is the most important tool. Therefore, personal somatic practice and supervision are essential.',
        'In family treatment, somatic interventions can be used directly in sessions with the whole family. When a conversation escalates, a shared breathing exercise can break the escalation pattern and create a new shared starting point. NADA ear acupuncture can supplement as a regulation tool, particularly with substance abuse and anxiety.'
      ]
    }
  },
  {
    id: 'boern',
    titel: 'The child\'s voice',
    ikon: 'sprout',
    privat: {
      overblik: {
        beskrivelse: 'Children\'s behaviour is never random. A child who hits, screams, withdraws, or over-adapts is telling us something important. The child\'s behaviour is not the problem — it is communication about something in the environment being difficult.',
        punkter: [
          'Behaviour is communication — always',
          'Work with the environment, not just the child',
          'All emotions are allowed',
          'Children carry the family\'s burdens — let them let go'
        ],
        tip: 'Next time your child "misbehaves," try asking yourself: "What is my child trying to tell me?" It changes everything.'
      },
      dybde: [
        'Children are experts at reading their environment — far better than most adults. They sense tension, grief, anxiety, and anger in the family long before anyone says anything. And because they have no words for it, they use what they have: their body and their behaviour.',
        'A child who acts out is not a "difficult child" — it is a child having a hard time. And most often it is not about the child itself, but about what the child is living in. Turmoil in the family, the parents\' unprocessed trauma, conflicts, abuse, or neglect — the child feels all of it and reacts to it.',
        'For parents, it can be painful to hear that the child\'s difficulties are connected to the family\'s dynamic. But it is also a liberating realisation: it means you don\'t have to fix your child. You need to understand what your child is telling you — and work with the environment the child lives in.',
        'Children in vulnerable families often carry burdens far too heavy for them: they look after younger siblings, they comfort parents, they try to hold together something that is falling apart. When we support the parents in taking the responsibility back, the child can finally be allowed to be a child.'
      ]
    },
    professionel: {
      overblik: {
        beskrivelse: 'The child\'s perspective is the central guiding star in all family treatment. We see the child\'s behaviour as meaningful communication and work with the environment — not the symptom bearer.',
        punkter: [
          'The child\'s behaviour as systemic communication',
          'Child conversations adapted to age and maturity',
          'Mandatory reporting and authority collaboration',
          'Children in care and parental support'
        ],
        tip: 'The child\'s "symptoms" are the best solutions the child has been able to find. Respect the strategy — and work with the environment that necessitates it.'
      },
      dybde: [
        'In family treatment with vulnerable families, the child is often the one referred — but rarely the one with "the problem." The child\'s symptoms — behavioural difficulties, school avoidance, self-harm, anxiety — are signals that the system around the child is under strain. Treating the child alone without addressing the family\'s dynamic is rarely effective.',
        'Child conversations in family treatment require special competence. The child must experience that their experience is taken seriously, without being assigned responsibility for solving the family\'s problems. With younger children, we use play, drawing, and storytelling as paths into the child\'s world.',
        'The mandatory reporting requirement is a reality in work with vulnerable families. Navigating between the therapeutic alliance and the duty to report requires transparency: the family should always know what is reported and why. This openness protects both the child and the therapeutic relationship.',
        'When children are placed in care, parental support is crucial. Parents who lose custody of their child need help processing grief, shame, and loss — and building a new relationship with the child within the framework of the placement. This effort is often undervalued but can make a decisive difference for the child\'s possibility of returning home.'
      ]
    }
  }
];

// ============================================================
// Connections between circles (cross-references)
// ============================================================
var SAMMENHAENGE_EN = [
  {
    fra: 'relationer',
    til: 'parterapi',
    privat: 'The attachment patterns you carry from childhood — perhaps insecurity, ambivalence, or avoidance — are activated most powerfully in your intimate relationship. When you trigger each other, it is often old wounds speaking. Understanding this shifts the conflict from "you are the problem" to "we both carry something with us."',
    professionel: 'In families under pressure, unresolved attachment patterns often drive the escalation between parents. Mentalization-Based Treatment (MBT) can help couples see behind each other\'s behaviour and restore the mental capacity that chronic stress erodes.'
  },
  {
    fra: 'relationer',
    til: 'boern',
    privat: 'Your child doesn\'t just inherit your eye colour — they also inherit your attachment patterns. If you grew up with insecurity, it can be difficult to give your child the safety you never had yourself. But here is the good news: simply knowing this gives you the power to do things differently.',
    professionel: 'Intergenerational transmission of attachment is well documented in ACE research. A parent\'s unprocessed trauma increases the risk of disorganised attachment in the child. Circle of Security interventions can break this transmission.'
  },
  {
    fra: 'relationer',
    til: 'individuel',
    privat: 'Many of your relational patterns were created before you had words for them. In individual therapy with a narrative approach, you can begin to put words to the wordless — and slowly write a new story about who you are in relationships.',
    professionel: 'In narrative-systemic individual therapy, the work involves externalising the dominant stories about the client\'s relational identity. Particularly for parents with their own experiences of neglect, this can create space for an alternative parenting narrative.'
  },
  {
    fra: 'parterapi',
    til: 'familie',
    privat: 'Your couple relationship IS the family\'s nervous system. When you as a couple are in constant fight-or-flight, the entire family lives in a state of alert. Children sense the tension between you — even the tension you think you are hiding. When you find more calm together, the whole family\'s stress level drops.',
    professionel: 'The parental alliance is the primary organising force in the family system. In vulnerable families, where the couple relationship is often burdened by poverty, trauma, or systemic pressure, strengthening the parental alliance is crucial for the entire family\'s regulatory capacity.'
  },
  {
    fra: 'parterapi',
    til: 'boern',
    privat: 'Your children learn about love by watching the two of you. When you shout, they learn that conflict is dangerous. When you repair, they learn that ruptures can be healed. The most important thing is not that you never argue — but that the children see you find your way back to each other.',
    professionel: 'Interparental conflict is a stronger predictor of children\'s distress than family breakdown itself. In child welfare assessments, the parents\' conflict level and the child\'s exposure to it should be evaluated as an independent risk factor.'
  },
  {
    fra: 'familie',
    til: 'boern',
    privat: 'When the family begins to function in new ways — with more calm, more listening, more room for everyone — children are the first to respond. Their behaviour is a mirror of the family\'s state. Turmoil in the children is rarely "the child\'s problem" — it is the family\'s signal.',
    professionel: 'The child\'s symptoms are often a systemic signal. In family treatment, the work involves shifting focus from the identified child to the family patterns that maintain the symptoms — including parentification, triangulation, and invisible loyalty conflicts.'
  },
  {
    fra: 'familie',
    til: 'individuel',
    privat: 'Your family\'s patterns live inside you — in your body, your reactions, your automatic thoughts. "That\'s how we\'ve always done it" is a sentence that can keep you trapped. Individual therapy gives you space to sort through: what do you want to keep from your family, and what do you want to let go of?',
    professionel: 'When family treatment uncovers deeply individual issues — such as complex PTSD, dissociation, or active self-harm — parallel individual therapy with a somatic and narrative approach may be necessary to stabilise the parent so that family treatment can bear fruit.'
  },
  {
    fra: 'aandedraet',
    til: 'individuel',
    privat: 'Breathwork opens doors that conversation alone cannot. Many traumas live in the body as held breath, tension in the diaphragm, a constant feeling of holding your breath. When you learn to breathe freely, the body slowly begins to release what it has been holding onto.',
    professionel: 'Breathwork as a supplement to narrative-systemic individual therapy provides access to bottom-up processes that talk therapy alone cannot reach. Particularly in complex traumatisation, where the body holds trauma memories, breathwork can facilitate somatic integration.'
  },
  {
    fra: 'aandedraet',
    til: 'familie',
    privat: 'When you as a family learn to regulate together — breathe together, ground together — you build a shared capacity for handling crises. It sounds simple, but for families that have lived in constant alarm, it is deeply transformative to discover that you can find calm TOGETHER.',
    professionel: 'Family-based co-regulation is grounded in polyvagal theory: when the family\'s adults can activate the ventral vagal system, it spreads to the children. In vulnerable families with chronic dysregulation, shared regulation exercises are a concrete tool for building the family\'s window of tolerance.'
  },
  {
    fra: 'aandedraet',
    til: 'boern',
    privat: 'Children understand the body better than words. When your child is overwhelmed by anger, anxiety, or grief, a single shared breath can do more than a hundred explanations. You don\'t need to say "take a deep breath" — you can simply do it yourself, and the child will follow.',
    professionel: 'Somatic regulation strategies are particularly effective for children with trauma histories, as the trauma often resides pre-verbally. Polyvagally informed interventions — slow exhales, rhythmic movement, co-regulated breathing — can reach children that verbal interventions cannot.'
  },
  {
    fra: 'centrum',
    til: 'relationer',
    privat: 'The family\'s wholeness rests on the quality of your attachment to one another. In families with trauma histories, attachment is often ambivalent — you love each other, but you cannot always feel it. Strengthening the attachment is strengthening the entire family.',
    professionel: 'From a systemic perspective, the family\'s wholeness is more than the sum of its individuals. The quality of attachment between family members is the supporting structure — and in vulnerable families, this structure is often fragmented by trauma, loss, and systemic pressure.'
  },
  {
    fra: 'centrum',
    til: 'parterapi',
    privat: 'The couple relationship is the family\'s backbone. In families under pressure — from finances, from the authorities, from your own histories — the couple relationship is the first to suffer. But it is also where change has the greatest impact on everyone.',
    professionel: 'The parental couple\'s relationship is the primary organising force in vulnerable families. When the couple relationship collapses under systemic pressure, the family loses its co-regulatory base. Couples therapy should often be prioritised in parallel with family treatment.'
  },
  {
    fra: 'centrum',
    til: 'familie',
    privat: 'Your family patterns — who comforts, who withdraws, who carries the most — are not random. They are survival strategies you have developed together. Seeing them clearly is not a judgment — it is the first step toward choosing new patterns.',
    professionel: 'Systemic family treatment uncovers the circular interaction patterns that maintain the family\'s dysfunction. In vulnerable families, these patterns are often protective strategies from generations of survival — they must be understood before they can be changed.'
  },
  {
    fra: 'centrum',
    til: 'individuel',
    privat: 'You are part of your family — but you are also yourself. Many parents in pressured families lose themselves in the role of caregiver, firefighter, the one who holds everything together. Taking care of YOU is not selfishness — it is a prerequisite for being able to carry others.',
    professionel: 'In vulnerable families, the individual\'s mental health and the family\'s functioning are deeply intertwined. The parent\'s own unresolved traumas affect their mentalizing capacity and thereby the entire family\'s regulation. Individual therapy may be necessary to restore parental functioning.'
  },
  {
    fra: 'centrum',
    til: 'aandedraet',
    privat: 'Your nervous system is the family\'s foundation. When you are dysregulated — in constant alarm, exhausted, disconnected — everyone feels it. Breathwork and polyvagal regulation are not luxuries. They are the most fundamental tools for restoring the family\'s balance.',
    professionel: 'The nervous system\'s regulatory capacity is the prerequisite for mentalization, attachment, and interaction. In families with chronic stress, the ventral vagal system is often suppressed. Polyvagally informed practice should be integrated as a foundation in any family intervention.'
  },
  {
    fra: 'centrum',
    til: 'boern',
    privat: 'Your children are the family\'s barometer. Their behaviour — restlessness, withdrawal, anger, clinging — tells you something about how the family is doing. It is not their fault, and it is not your fault. It is a signal that something in the system needs attention.',
    professionel: 'The child\'s symptoms, from a systemic perspective, are a signal about the family\'s state. In child welfare assessments and interventions, the child\'s behaviour should always be contextualised within the family\'s overall burden — including poverty, trauma, mental illness, and systemic pressure.'
  },
  {
    fra: 'individuel',
    til: 'boern',
    privat: 'The best thing you can do for your child is to tend to your own wounds. When you process your history — your childhood, your losses, your pain — you free up the capacity to be the parent your child needs. Not perfect. Just present.',
    professionel: 'A parent\'s individual trauma processing has a direct effect on the child\'s attachment security. Research on reflective functioning shows that a parent\'s ability to mentalise their own experiences is the strongest predictor of the child\'s attachment pattern.'
  },
  {
    fra: 'relationer',
    til: 'aandedraet',
    privat: 'Your body remembers what your relationships have done to you. A racing heart when someone raises their voice. Tension in your stomach when the mood shifts. These reactions are your nervous system\'s memory. Through breathwork, you can learn to meet them without being overwhelmed by them.',
    professionel: 'Somatic markers in relationships reveal attachment patterns that are not verbally accessible. In narrative-systemic therapy, the body\'s reactions can be used as an entry point to explore and externalise the dominant stories about the client\'s relational experiences.'
  },
  {
    fra: 'parterapi',
    til: 'individuel',
    privat: 'Sometimes the couple relationship hits something in you that is older than your relationship. Perhaps you react to your partner the way you reacted to your father. Individual therapy can help you sort through: what is about us — and what is about ME and my history?',
    professionel: 'In vulnerable families, the couple relationship is often burdened by both partners\' trauma histories. When couples therapy uncovers individual traumatisation — such as neglect, violence, or loss — parallel individual therapy with a somatic approach may be necessary to stabilise before the couple work can continue.'
  },
  {
    fra: 'parterapi',
    til: 'aandedraet',
    privat: 'When conflict escalates, your brain shuts down. You cannot listen, cannot mentalise, cannot feel your partner. Your nervous system has taken over. Vagal breathing in the middle of a conflict — just 30 seconds — can reopen your window and make it possible to meet your partner as a human being instead of as a threat.',
    professionel: 'Polyvagally informed couples therapy integrates somatic regulation directly into the session. When couples learn to recognise and regulate their autonomic arousal, they can remain in a mentalising position for longer — which is the prerequisite for productive couple work.'
  },
  {
    fra: 'individuel',
    til: 'aandedraet',
    privat: 'Many traumatic experiences live in the body as frozen states — held breath, chronic tension, a feeling of being locked. Breathwork in individual therapy can gently begin to thaw these states — not by forcing, but by inviting the body to slowly let go.',
    professionel: 'Integration of breathwork in individual trauma treatment provides access to both top-down and bottom-up processes. For clients with complex PTSD, where dissociation and somatic flashbacks are prominent, breathwork can be the gentlest entry point into the trauma material.'
  }
];

// ============================================================
// Themes — Everyday situations
// ============================================================
var TEMA_INDHOLD_EN = [
  {
    id: 'kommunikation',
    titel: 'When words are not enough',
    ikon: 'chatBubble',
    privat: {
      intro: 'In families with difficult experiences, communication is rarely just words. It is tone of voice, silence, glances, and bodies speaking.',
      tekst: 'Many families have learned to survive by not talking about the hard things. The silence protects — but it also isolates. Learning to communicate is not about finding the right words, but about daring to show what lies behind them. In families with traumatic traces, the body is often faster than the mouth: irritation, withdrawal, or outbursts tell more than the words themselves.',
      cirkler: ['centrum', 'relationer', 'familie']
    },
    professionel: {
      intro: 'In vulnerable families, communication patterns are often shaped by survival strategies: silence, escalation, or avoidance.',
      tekst: 'A narrative approach to communication focuses on giving the family a new language for their experiences. By externalising — "when does the silence creep in between you?" — a conversation opens up without blame. In families with trauma histories, nonverbal communication is often more important than the verbal: the body\'s reactions, facial expressions, and the state of the nervous system provide crucial information.',
      cirkler: ['centrum', 'familie', 'aandedraet']
    }
  },
  {
    id: 'skilsmisse',
    titel: 'Rupture, loss & new family forms',
    ikon: 'heartCrack',
    privat: {
      intro: 'When a family splits apart, everyone loses something — and children need to know that it is not their fault.',
      tekst: 'Divorce, out-of-home placement, or losing a parent are among the most upheaval experiences for a child. In vulnerable families, the rupture is often complicated by pre-existing burdens: conflict, substance abuse, mental illness, or intervention by the authorities. The most important thing is that children are not caught in the middle. They need to know that both parents are still their parents — regardless of what happened between the adults.',
      cirkler: ['parterapi', 'boern', 'familie']
    },
    professionel: {
      intro: 'In vulnerable families, ruptures are rarely simple divorces — they involve out-of-home placements, authority decisions, and complex loyalty conflicts.',
      tekst: 'Co-parenting after a rupture in traumatised families requires particular attention. When the conflict between the parents is driven by unprocessed trauma, conventional mediation is rarely sufficient. The nervous system must be regulated before cooperation becomes possible. In cases of out-of-home placement, parental support is essential for preserving and developing the relationship with the child.',
      cirkler: ['parterapi', 'boern', 'familie']
    }
  },
  {
    id: 'graenser',
    titel: 'Boundaries in chaos',
    ikon: 'shield',
    privat: {
      intro: 'In families under pressure, boundaries can be either too rigid or entirely absent. Both cause harm.',
      tekst: 'Many parents in vulnerable families struggle with setting boundaries — because they themselves grew up without clear boundaries, or because they experienced boundaries as punishment. Healthy boundaries are not walls — they are guidance. They say: "I am here, I am holding on, and I will not let you go." For children in chaos, clear, warm boundaries are the most safety-creating thing there is.',
      cirkler: ['individuel', 'boern', 'centrum']
    },
    professionel: {
      intro: 'Boundary issues in vulnerable families are rarely about knowledge — they are about the parents\' own boundary experiences.',
      tekst: 'Parents who have experienced boundary violations themselves may struggle to distinguish between healthy boundaries and control. Working with boundaries must therefore always include the parents\' own history. A narrative approach makes it possible to explore: "What boundaries did you need as a child — and what did you get instead?" This understanding transforms boundary-setting from duty to care.',
      cirkler: ['individuel', 'familie', 'centrum']
    }
  },
  {
    id: 'stress',
    titel: 'Chronic stress & survival',
    ikon: 'lightning',
    privat: {
      intro: 'Stress in vulnerable families is rarely temporary — it is a state the body has grown accustomed to living in.',
      tekst: 'When stress is not a passing reaction but a constant state, it changes the entire family\'s nervous system. The parents are exhausted, the children are on guard, and even small things can trigger massive reactions. The first step is to acknowledge that your stress is not weakness — it is a normal response to abnormal conditions. And that the body\'s way out of chronic stress runs through regulation, not willpower.',
      cirkler: ['centrum', 'aandedraet', 'individuel']
    },
    professionel: {
      intro: 'Chronic stress in vulnerable families is often intertwined with trauma, poverty, and systemic burden.',
      tekst: 'ACE research (Adverse Childhood Experiences) documents that accumulation of adverse childhood experiences has a cumulative effect on health and functioning. In vulnerable families, we often see both parents and children scoring high. Polyvagal understanding is central: chronic stress keeps the nervous system in sympathetic activation, which reduces mentalizing capacity and increases reactivity. Somatic regulation is therefore a prerequisite for talk-based intervention to be effective.',
      cirkler: ['centrum', 'aandedraet', 'individuel']
    }
  },
  {
    id: 'tab',
    titel: 'Grief, loss & placement',
    ikon: 'dove',
    privat: {
      intro: 'Loss in vulnerable families has many faces — and the grief over what you never had can weigh just as heavily as the grief over what you lost.',
      tekst: 'Loss is not only about death. It is about the childhood you never had. It is about the relationship that fell apart. It is about the child who was placed in care. Grief in families with traumatic experiences is often complicated, because it mixes with guilt, shame, and anger. Making space for the grief — without judging it — is the beginning of healing.',
      cirkler: ['familie', 'individuel', 'boern']
    },
    professionel: {
      intro: 'Grief in vulnerable families is often complicated by shame, guilt, and systemic involvement — particularly in cases of out-of-home placement.',
      tekst: 'Parents\' grief over children placed in care is one of the most underestimated clinical challenges. The grief is ambivalent: mixed with relief, shame, anger toward the system, and self-blame. Without processing this grief, the parents\' ability to rebuild the relationship with the child is weakened. Parental support should always include a grief dimension.',
      cirkler: ['familie', 'individuel', 'boern']
    }
  },
  {
    id: 'unge',
    titel: 'Young people in vulnerable families',
    ikon: 'star',
    privat: {
      intro: 'Young people who grow up in families with traumatic traces often carry more than anyone sees — and their rebellion often holds a plea for help.',
      tekst: 'The teenage years are difficult for all families — but for young people in vulnerable families, they are especially intense. They struggle to break free from parents they may both love and fear. They may take on their parents\' patterns or rebel against them. Some young people react outwardly with anger and boundary-crossing. Others turn inward with anxiety, self-harm, or isolation. Both are meaningful communication.',
      cirkler: ['boern', 'familie', 'individuel']
    },
    professionel: {
      intro: 'Young people from vulnerable families often display symptoms that reflect the family\'s unprocessed traumas — the process of individuation activates the entire system\'s attachment wounds.',
      tekst: 'Adolescence is a critical period when family patterns often intensify. The young person\'s need for autonomy challenges parents whose own attachment pattern is insecure — they may experience the separation as betrayal. Conversely, young people with disorganised attachment may struggle to balance freedom and connection. The work requires both individual contact with the young person and systemic intervention in the family.',
      cirkler: ['boern', 'familie', 'individuel']
    }
  },
  {
    id: 'selvvaerd',
    titel: 'Shame, guilt & self-worth',
    ikon: 'sparkles',
    privat: {
      intro: 'Many parents in vulnerable families carry a deep shame — about their own history, about their parenting, about needing help.',
      tekst: 'Shame is one of the most destructive emotions, because it says: "There is something wrong with ME." Guilt says: "I did something wrong." Shame says: "I AM wrong." In families with traumatic experiences, shame often lives across generations. Daring to look at it — and slowly replacing it with self-compassion — is one of the most important transformations in therapy.',
      cirkler: ['individuel', 'relationer', 'aandedraet']
    },
    professionel: {
      intro: 'Shame is a central affect in work with vulnerable families and a significant barrier to change.',
      tekst: 'Shame-based self-understanding blocks mentalization: a parent who is flooded with shame cannot be curious about the child\'s inner world. A narrative approach is particularly effective because it separates identity from action. When the parent can see their history as context — "you did the best you could with what you had" — the shame diminishes, and the capacity for action grows.',
      cirkler: ['individuel', 'relationer', 'aandedraet']
    }
  },
  {
    id: 'traumer',
    titel: 'Family trauma & healing',
    ikon: 'leaf',
    privat: {
      intro: 'A family trauma is not just what happened — it is what happened inside the whole family as a result of what happened.',
      tekst: 'Trauma in families spreads like ripples in water. A parent who carries unprocessed trauma can unconsciously pass it on to their children — not out of ill will, but because the nervous system remembers what the mind has tried to forget. Healing is not about forgetting, but about integrating: finding a place for what happened so that it no longer governs the family\'s interactions. It takes time, safety, and professional help.',
      cirkler: ['centrum', 'individuel', 'aandedraet']
    },
    professionel: {
      intro: 'Family trauma requires an integrated approach that addresses both the individual and systemic dimensions of the trauma.',
      tekst: 'Intergenerational trauma is transmitted through three channels: attachment patterns (relational transmission), somatic regulation (somatic transmission), and family narratives (narrative transmission). Effective treatment addresses all three. Judith Herman\'s phase-based model — safety, processing, integration — applies at the family level as well. Somatic approaches and breathwork are central supplements to narrative family treatment.',
      cirkler: ['centrum', 'individuel', 'aandedraet']
    }
  }
];
var OEVELSER_EN = [
  {
    id: 'vagus-aanding',
    titel: 'Vagal Breathing for Parents Under Pressure',
    tid: '5 min',
    sted: 'Anywhere — even in the middle of chaos',
    intro: 'This exercise activates your vagus nerve and shifts your nervous system from alarm mode to calm. It is designed for you as a parent living under constant pressure — from child services, from your children\'s needs, from your own history. When you regulate yourself, you can regulate your child. This is not self-indulgence — it is the most important parenting tool you have.',
    trin: [
      'Stop what you are doing. You don\'t need to leave the room — you can do this standing at the kitchen counter, in the bathroom, or sitting in the car.',
      'Place one hand on your chest and one on your belly. Notice which hand moves more. For most stressed parents, it is the chest hand — that means your nervous system is on high alert.',
      'Breathe in through your nose for 4 seconds. Imagine drawing the breath all the way down to the hand resting on your belly.',
      'Hold your breath for 4 seconds. Not straining — just a gentle pause.',
      'Breathe out through your mouth for 8 seconds — twice as long as the inhale. This is WHERE the vagus nerve is activated. The extended exhale tells your nervous system: "There is no danger right now."',
      'Repeat 4 times. By the third round, most people notice a shift: shoulders drop, the jaw softens, the belly begins to move.',
      'Notice the difference. Your child can feel it too — children read your nervous system faster than they hear your words.',
      'Use this exercise BEFORE you react to your child\'s behaviour. Not after. The 20 seconds it takes can change the entire situation.'
    ],
    cirkel: 'aandedraet'
  },
  {
    id: 'co-regulering',
    titel: 'Co-Regulation: Lending Your Child Your Calm',
    tid: '10 min',
    sted: 'At home — when your child is unsettled or overwhelmed',
    intro: 'Children in vulnerable families often have a nervous system locked in permanent alarm mode. They cannot regulate themselves — they need to borrow YOUR nervous system. This exercise draws on polyvagal theory and Circle of Security: you become the safe harbour your child can land in. It does not require saying the right words. It requires your body being calm.',
    trin: [
      'When your child is unsettled, flooded with emotion, or in full meltdown: STOP. Take three deep vagal breaths (long exhale) BEFORE you do anything.',
      'Get down so you are at your child\'s eye level. Not above them — beside them or in front of them. Your nervous system should signal: "I am here. I am calm. You are not alone."',
      'Speak in a low, slow voice. It is not what you say but HOW you say it that regulates your child. Try: "I can see this is really hard right now. I am staying right here."',
      'If your child allows it: place a hand on their back or shoulder. Slow, rhythmic touch activates your child\'s vagus nerve. Not patting — just steady, gentle pressure.',
      'Breathe deliberately slowly so your child can hear your breathing. Children automatically synchronise with an adult\'s breath when that adult is regulated.',
      'Do NOT try to talk your child out of the feeling. Don\'t say "it\'s nothing to be upset about" or "stop it now." The feeling is real. Your job is to hold space for it — not to make it disappear.',
      'Stay with it. Even when it feels uncomfortable. Many parents learned early on that strong emotions are dangerous. But when you stay present with your child through the storm, you are both learning something new: that feelings can be held and will pass.',
      'Once the storm has settled, you can talk about what happened. Not before. Mentalisation — the ability to understand what was happening inside — requires the nervous system to be calm first.'
    ],
    cirkel: 'boern'
  },
  {
    id: 'narrativ-livslinje',
    titel: 'Your Family\'s Story — A Narrative Lifeline',
    tid: '20 min',
    sted: 'A quiet place with paper and pen',
    intro: 'In narrative therapy, we work with the story you tell about your life and your family. Many families in crisis carry a "thin story" — a narrative dominated by problems, failures, and blame. This exercise helps you discover the "thick story": all the moments where you acted with strength, love, or courage — even when it didn\'t work out perfectly. Your family is more than the hardest thing you have been through.',
    trin: [
      'Take a large sheet of paper and draw a horizontal line from left to right. The left end is your birth, the right end is now.',
      'Mark the major events in your life ABOVE the line: births, moves, meetings, losses, breakups, care placements, new beginnings. Just short words or symbols.',
      'Now the important part: mark BELOW the line the moments where you showed strength — including the quiet kind. Things like: "I called child services even though I was terrified." "I held my child when everything else was chaos." "I stood up to my partner."',
      'Look at those moments below the line. What do they tell you about who you are? What values have carried you — even through the darkest times?',
      'Give those values names. Perhaps "protection," "endurance," "love against all odds," "the courage to ask for help."',
      'Choose one of those moments and write 5 to 10 lines about it. Not about what was hard — but about what YOU did, and why it mattered.',
      'Ask yourself: If my child read this in 20 years, what would they think about me? The answer is often a completely different story than the one you usually tell about yourself.',
      'You can do this exercise with your partner, a family member, or alone. The story is yours — and you have every right to tell it from the beginning.'
    ],
    cirkel: 'individuel'
  },
  {
    id: 'mentalisering-par',
    titel: 'Mentalisation Between Parents',
    tid: '20 min',
    sted: 'At home — when the children are asleep or away',
    intro: 'Mentalisation is the ability to imagine what is happening INSIDE the other person — not just reacting to what is happening on the OUTSIDE. In families under pressure, mentalisation often collapses: you react to each other\'s behaviour without understanding what lies behind it. This exercise is rooted in mentalisation-based therapy (MBT) and helps you rebuild the bridge between you that stress has eroded.',
    trin: [
      'Sit facing each other. No phones, no background noise. You need 20 uninterrupted minutes.',
      'Partner A: Describe a specific situation from the past week where you felt alone, frustrated, or overlooked. Be specific: "When you walked out of the room while I was talking about the meeting with child services..."',
      'Partner B: Your only task is to LISTEN. Not defend yourself. Not explain. Just listen with your body turned towards your partner and with eye contact.',
      'Partner B: When A has finished, say: "I think you felt... because..." — GUESS what your partner was feeling inside. You don\'t need to get it right. What matters is the attempt to understand.',
      'Partner A: Confirm or adjust. "Yes, that was exactly it" or "That was close, but actually I felt more like..."',
      'Switch roles. Partner B shares, Partner A listens and mentalises.',
      'Finish by each answering this question: "What makes me most vulnerable right now — and what do I need most from you?"',
      'It is completely normal for this exercise to feel awkward or difficult the first few times. Many parents in pressured families have never experienced being listened to in this way. You are practising — and that is enough.'
    ],
    cirkel: 'parterapi'
  },
  {
    id: 'familiekort',
    titel: 'The Family Map — Who Stands Where?',
    tid: '15 min',
    sted: 'At home with the family — everyone who wants to can join in',
    intro: 'In systemic family therapy, we work to make the invisible patterns in a family visible: who is close to whom, who feels left out, who carries the most weight. This exercise makes the abstract concrete — and often produces surprising insights. Children are frequently remarkably precise in their family maps because they sense the dynamics directly in their bodies.',
    trin: [
      'Find objects to represent family members — toy animals, cups, shoes, stones, or draw circles on a large piece of paper. Each object represents one family member.',
      'One person starts: Place the objects the way you experience the family right now. Who is close to whom? Who is far apart? Who has their back turned? Who is holding someone?',
      'The others observe the arrangement in silence. No corrections yet.',
      'Ask the person who set it up: "Tell us what you see. Why are they placed like that?" Listen to the story behind the positions.',
      'Now the next family member creates their own arrangement — using the same objects. Notice the differences and similarities.',
      'If children take part: Take their arrangement just as seriously as the adults\'. Children\'s maps often reveal things adults won\'t say aloud — for example, a child who placed themselves between two parents as a "buffer."',
      'Finish by creating one shared arrangement together: "This is how we would like things to be." It is not a plan — it is a direction.',
      'This exercise can reveal parentification (a child shouldering parental responsibility), hidden alliances, or isolation. Seeing it is not dangerous — it is the beginning of change.'
    ],
    cirkel: 'familie'
  },
  {
    id: 'tryghedscirkel-barn',
    titel: 'The Circle of Security — Exercise for Parent and Child',
    tid: '15 min',
    sted: 'A safe, quiet place — the floor is often best',
    intro: 'This exercise is inspired by Circle of Security, the attachment framework that Rikke uses in her therapeutic work. Every child needs two things: a secure base to venture out from (to explore the world) and a safe haven to return to (when the world becomes too much). In vulnerable families, this circle is often broken — the child does not know whether the haven will be there when they come back. This exercise rebuilds the circle — one moment at a time.',
    trin: [
      'Sit on the floor with your child. Not on the sofa, not at the table — the floor. It lowers the hierarchy and makes you physically accessible.',
      'Say to your child: "We\'re going to try something. You decide when you go, and when you come back. I will stay right here."',
      'Let your child move away from you — to fetch a toy, look out the window, explore. YOU STAY SEATED. You are the base.',
      'When your child looks back towards you (and they will), meet their gaze with a smile or a nod. This is the "refuelling stop" — your child is checking: "Are you still there?"',
      'When your child comes back to you, receive them. Physically: open arms, a hug, a touch. Say: "There you are. I am right here." You are the haven.',
      'Repeat this natural pattern: the child ventures out, the child returns. Every time you are there when your child comes back, you strengthen the attachment bond.',
      'For older children (ages 8 to 14), you can do the exercise verbally: "When this week did you need me? Was I there? What do you wish I had done?"',
      'The most important thing is NOT being perfect. The most important thing is repair: "I can see that I wasn\'t there for you that day. I am sorry. What do you need right now?" Repair is more powerful than perfection.'
    ],
    cirkel: 'boern'
  },
  {
    id: 'somatisk-landing',
    titel: 'Somatic Grounding — When the Body Carries the Trauma',
    tid: '10 min',
    sted: 'Lying down or seated — somewhere you feel safe',
    intro: 'Trauma lives in the body. Not only as memories, but as tension, pain, restlessness, and a constant feeling of being "on guard." Many parents in vulnerable families carry decades of unresolved traumatic imprints in their body — from their own childhood, from violence, from loss, from systemic failures. This exercise is rooted in somatic trauma therapy and helps you slowly rebuild your relationship with your body as a safe place to be.',
    trin: [
      'Find a position where you feel SAFE. For many people with a trauma history, lying down with eyes closed does NOT feel safe — it can feel exposed. Sit upright with your eyes open and your back against a wall if you prefer. Safety first.',
      'Start with your feet. Press them into the floor. Feel the floor pressing back. Say to yourself: "I am here. The ground is holding me."',
      'Slowly scan upward through your body — not to find anything wrong, but to notice what IS there. Feel your legs, your hips, your belly, your chest, your shoulders.',
      'When you reach a place of tension, restlessness, or discomfort: STAY THERE for a moment. Not to fix it. Just to acknowledge it. Try saying inwardly: "I can feel you. You have been carrying something for me."',
      'Place a hand on the spot in your body that needs the most attention. Many trauma survivors feel it in the belly, the chest, or the throat. Your hand is an anchor — a signal that you are showing up for yourself.',
      'Breathe in slowly and imagine the breath reaching all the way to the place where your hand rests. Breathe out and imagine the tension dissolving just a little. Not all of it — just a little.',
      'Finish by sensing your whole body as one. Notice that you are sitting here, that you have survived everything that brought you to this point. Your body has been protecting you. Now you can begin to tell it that the danger has passed.',
      'Important note: If this exercise brings up strong emotions or memories, that is a sign the body is beginning to release. It is not dangerous, but it may benefit from professional support. Rikke can help you take the next step.'
    ],
    cirkel: 'individuel'
  },
  {
    id: 'generationsbrev',
    titel: 'A Letter to the Parent You Want to Be',
    tid: '15 min',
    sted: 'A quiet place with paper and pen',
    intro: 'Many parents in vulnerable families struggle with intergenerational patterns: they parent based on what they themselves experienced — or in desperate resistance against it. This narrative exercise helps you separate the past from the present and consciously choose the kind of parent you want to be — not out of guilt or shame, but from your deepest values for your children.',
    trin: [
      'Write at the top of the page: "Dear me, as a parent."',
      'First, write down three things you inherited from your own childhood that you do NOT want to pass on. Be specific: not "a bad childhood," but for example "silence around feelings," "being punished for crying," "nobody explaining what was happening."',
      'Now write down three things from your childhood that you want to KEEP — even small things. Perhaps a grandmother who listened. A tradition. A moment of safety. These are your foundation.',
      'Now write to your child (or children) — as if they are grown up and reading this in 20 years: "The most important thing to me as your parent was..."',
      'Write about the battles you are fighting RIGHT NOW to break the pattern. This is not an admission of weakness — it is documentation of courage. Write something like: "I fought to learn to hold my anger, because my father couldn\'t."',
      'Write one concrete thing you will do differently THIS WEEK. Not a grand promise. A small, specific action. For example: "I will sit down when my child talks to me" or "I will say sorry when I have shouted."',
      'Fold the letter and keep it somewhere you can find it again. Take it out when shame or doubt creeps in. It is your compass.',
      'Remember: The fact that you are even considering these questions already shows that you are a different parent than the one you had. The pattern is already beginning to break.'
    ],
    cirkel: 'relationer'
  }
];

var TRAPPEN_EN = [
  {
    trin: 1,
    navn: 'Safety & Connection',
    farve: 'sage',
    privat: {
      beskrivelse: 'Your ventral vagal system is active — you are in your "window of safety." You can sense yourself, sense others, and be present without being on guard. For many parents in vulnerable families, this state is rare and unfamiliar. You may only know it in brief glimpses. That is okay. Every glimpse counts — and the more you practise recognising this state, the easier it becomes to find your way back to it.',
      kropsSignaler: ['Your breathing is slow and reaches deep into your belly', 'Your shoulders are relaxed — without you thinking about it', 'You can hold eye contact with your child without discomfort', 'Your voice is soft and warm — your child can hear it'],
      handlinger: ['Use this moment to connect with your child — just a glance, a smile, a touch', 'Share something that is on your mind with someone you trust', 'Notice the calm that is here right now — it is real, even if it is brief', 'If your child is nearby: let them feel your calm. They regulate themselves through you.'],
      oevelser: ['co-regulering', 'familiekort', 'generationsbrev']
    },
    professionel: {
      beskrivelse: 'Ventral vagal state (Porges): the social engagement system is fully active. The client has access to mentalisation, reflective functioning, and relational contact. This is the optimal window for narrative work, for exploring attachment patterns, and for processing traumatic experiences. In vulnerable families, this state is often underdeveloped — the family\'s "safety muscle" has not had the opportunity to strengthen.',
      kropsSignaler: ['Regulated diaphragmatic respiration', 'Prosodic vocal quality with natural variation', 'Responsive facial affect — the client "meets" you', 'Relaxed musculature, particularly jaw and shoulders'],
      handlinger: ['Leverage this window for narrative work: externalise the problem-saturated story and explore alternative narratives', 'Facilitate mentalisation between family members — "What do you think your daughter was feeling in that moment?"', 'Work with Circle of Security: strengthen the parent\'s capacity to serve as both a secure base and a safe haven', 'Consolidate new experiences somatically — invite the client to notice in their body what it feels like to be safe'],
      oevelser: ['mentalisering-par', 'familiekort', 'generationsbrev']
    }
  },
  {
    trin: 2,
    navn: 'Alarm & Activation',
    farve: 'amber',
    privat: {
      beskrivelse: 'Your sympathetic nervous system is activated — fight or flight. You feel it as anger, restlessness, anxiety, or an intense urge to act RIGHT NOW. For parents with a trauma history, this state can be triggered by things that are objectively small: your child not listening, a phone call from child services, a voice that sounds like something from the past. Your body is reacting as if the danger is here NOW — even though it really belongs to back then.',
      kropsSignaler: ['Your heart is racing — you can feel your pulse in your throat', 'Your muscles are clenched, especially jaw, shoulders, and hands', 'Your breathing is fast and high in the chest', 'You cannot think clearly — your brain has "shut down" nuance'],
      handlinger: ['STOP before you react. Twenty seconds of vagal breathing can change everything: 4 seconds in, 8 seconds out', 'Feel your feet on the floor — it tells your nervous system you are HERE, not BACK THEN', 'Say to yourself: "My body is reacting to something old. The danger is not real right now."', 'If you notice you are about to react to your child from this place: walk away for 2 minutes. Not as punishment. As protection — for both of you.'],
      oevelser: ['vagus-aanding', 'somatisk-landing', 'co-regulering']
    },
    professionel: {
      beskrivelse: 'Sympathetic activation: the fight-flight system is dominant. In families with a trauma history, this is often chronic — the nervous system has learned that the world is dangerous and remains on high alert. The client may present as agitated, confrontational, hypervigilant, or panicked. Mentalisation is compromised — the client is responding from the limbic system, not from the prefrontal cortex. ALWAYS prioritise regulation before processing.',
      kropsSignaler: ['Elevated autonomic arousal: tachycardia, hypertension, mydriasis', 'Muscular tension, particularly axial muscles and jaw', 'Hypervigilance — the client is continuously scanning for threat', 'Respiration is thoracic and rapid — the vagal brake is disengaged'],
      handlinger: ['Down-regulate through attunement: match the client\'s energy level first, then gradually lower it', 'Deploy polyvagal interventions: extended exhalation, vocal prosody modulation, slow rhythmic movement', 'Validate the nervous system response — "Your body is doing exactly what it learned to do to protect you"', 'Avoid confrontation and interpretation in this state — the brain cannot process it. Regulate first, mentalise after.'],
      oevelser: ['vagus-aanding', 'somatisk-landing', 'co-regulering']
    }
  },
  {
    trin: 3,
    navn: 'Overwhelm & Shutdown',
    farve: 'rose',
    privat: {
      beskrivelse: 'Your dorsal vagal system has taken over — your body has shut down to protect you. You feel empty, distant, exhausted, or "not really present." For many parents with a trauma history, this is a familiar state — you survived by disconnecting. It was a wise strategy back then. But now it makes it hard to be present for your child and for yourself. The way back is slow, gentle, and does not require you to "pull yourself together."',
      kropsSignaler: ['Numbness or emptiness — as though you are watching life from the outside', 'Deep fatigue that does not go away with sleep', 'Difficulty sensing your body, your feelings, or your needs', 'A feeling of being "behind glass" — present, but not really there'],
      handlinger: ['Start with the most concrete thing: feel the water on your hands, a warm cup in your grip, your feet on the floor', 'Move slowly — take a short walk, stretch, gently shake your body. Movement tells your nervous system you are not frozen', 'Seek out another person — you do not need to talk about it. Simply sitting near another regulated nervous system helps', 'Be patient with yourself. Shutdown is not weakness. It is the most advanced protective system your body has. It took time to get here — it takes time to come back.'],
      oevelser: ['somatisk-landing', 'vagus-aanding', 'narrativ-livslinje']
    },
    professionel: {
      beskrivelse: 'Dorsal vagal state (Porges): the immobilisation response is active. The client is in hypoarousal — below the therapeutic window. They may present as dissociated, affectively flat, distant, or "compliant without contact." In vulnerable families, this is frequently seen in parents with complex PTSD and prolonged experiences of neglect — the nervous system has learned that disconnection is the safest strategy. This state requires the most careful, graduated approach.',
      kropsSignaler: ['Hypotonic musculature — the body appears "heavy" or collapsed', 'Monotone, low voice without prosodic variation', 'Reduced or absent facial affect', 'Limited eye contact — gaze is "vacant" or directed downward'],
      handlinger: ['Gently activate through sensory stimulation: temperature, touch, scent — bottom-up interventions that bypass cognitive processing', 'Work with orientation: "Can you look around? What do you notice in the room?" — gradually reactivate the social engagement system', 'Maintain a slow, warm voice with prosodic variation — your voice IS a polyvagal intervention', 'NEVER push the client to "feel" or "be present." Follow the nervous system\'s pace. Offer small, safe invitations. Repair of a dorsal vagal state takes time — and that is okay.'],
      oevelser: ['somatisk-landing', 'vagus-aanding', 'narrativ-livslinje']
    }
  }
];
// ============================================================
// Morning Check-in — 25 variants (English)
// Each variant: question, answer buttons with response + link
// ============================================================
var MORGEN_CHECKIN_EN = [
  {
    spoergsmaal: 'How are you feeling right now, in this moment?',
    svar: [
      { label: 'Calm', respons: 'That is a good place to begin. Maybe today is the day you can notice something that usually gets lost in the noise.', link: 'temaer', linkTekst: 'Explore a theme' },
      { label: 'Restless', respons: 'When your body is on alert, it is hard to think clearly. Start with your breath — it is the fastest path back to stillness.', link: 'oevelser', linkTekst: 'Try an exercise' },
      { label: 'Heavy', respons: 'Some mornings weigh more than others. You do not have to carry it all. Just one thing.', link: 'muligt', linkTekst: 'What is possible right now?' },
      { label: 'Not sure', respons: 'That is an answer too. Just being here is enough.', link: 'hjem', linkTekst: 'Explore at your own pace' }
    ]
  },
  {
    spoergsmaal: 'What weighs heaviest in you this morning?',
    svar: [
      { label: 'Worry', respons: 'Worries take up space because you care about someone. Let us see if there is one small place to begin.', link: 'muligt', linkTekst: 'Find one step' },
      { label: 'Sadness', respons: 'Sadness is not weakness. It tells you that something matters. Give it room.', link: 'temaer', linkTekst: 'Read about loss & grief' },
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
      { label: 'I feel okay', respons: 'That is worth noticing. Good moments deserve attention — even the quiet ones.', link: 'hjem', linkTekst: 'Enjoy the stillness' }
    ]
  },
  {
    spoergsmaal: 'Where are you on the staircase right now?',
    svar: [
      { label: 'Safe', respons: 'When you are inside your window of tolerance, you are at your best to meet yourself and others. Use it.', link: 'temaer', linkTekst: 'Explore a new theme' },
      { label: 'Activated', respons: 'Your sympathetic nervous system is switched on. That is not dangerous — but it is important to notice it before it starts driving you.', link: 'trappen', linkTekst: 'Learn more about the staircase' },
      { label: 'Shut down', respons: 'When the body shuts down, it needs warmth — not demands. Be gentle with yourself.', link: 'oevelser', linkTekst: 'Start softly with an exercise' },
      { label: 'Shifting all the time', respons: 'That is normal, especially under pressure. Your nervous system is searching for balance. Let us find an anchor.', link: 'oevelser', linkTekst: 'Find an anchor' }
    ]
  },
  {
    spoergsmaal: 'What do you need today?',
    svar: [
      { label: 'Stillness', respons: 'Stillness is not laziness. It is recharging. Give yourself permission.', link: 'oevelser', linkTekst: 'Exercise for calm' },
      { label: 'Courage', respons: 'Courage is not about being fearless. It is about taking the next step, even when it is hard.', link: 'muligt', linkTekst: 'Take one step' },
      { label: 'To be seen', respons: 'It is deeply human to need a witness. You are not alone in what you carry.', link: 'temaer', linkTekst: 'You are not alone' },
      { label: 'Clarity', respons: 'When everything runs together, it helps to sort. One thing at a time.', link: 'muligt', linkTekst: 'Create an overview' }
    ]
  },
  {
    spoergsmaal: 'Is there something you are carrying from yesterday?',
    svar: [
      { label: 'A conflict', respons: 'Conflicts leave traces in the body. The most important thing now is not to resolve it — but to regulate yourself first.', link: 'trappen', linkTekst: 'Check your nervous system' },
      { label: 'A good moment', respons: 'Hold on to that. Good moments are fuel. Notice what made it possible.', link: 'hjem', linkTekst: 'Continue from here' },
      { label: 'A guilty conscience', respons: 'Guilt shows that you care. But it must not fill so much space that it paralyzes you. What can you do today?', link: 'muligt', linkTekst: 'What is possible now?' },
      { label: 'Nothing in particular', respons: 'That is fine too. Not every day needs to be heavy. Some days just are.', link: 'hjem', linkTekst: 'Just be here' }
    ]
  },
  {
    spoergsmaal: 'Who is on your mind right now?',
    svar: [
      { label: 'My child', respons: 'Your child feels you before you say a word. When you regulate yourself, you give your child permission to relax.', link: 'trappen', linkTekst: 'Start with yourself' },
      { label: 'My partner', respons: 'The relationship is the foundation of the family. Even small movements toward each other make a difference.', link: 'temaer', linkTekst: 'Read about the relationship' },
      { label: 'Myself', respons: 'Thinking about yourself is not selfish. It is necessary. You cannot pour from an empty cup.', link: 'oevelser', linkTekst: 'Do something for yourself' },
      { label: 'The whole family', respons: 'The family is a system. When you move, everyone moves. Start with what you can.', link: 'hjem', linkTekst: 'See the bigger picture' }
    ]
  },
  {
    spoergsmaal: 'If you could only carry one thing today — what would it be?',
    svar: [
      { label: 'Something practical', respons: 'Practical things can give you back a sense of control. Choose the smallest task and finish it. It counts.', link: 'muligt', linkTekst: 'Write it down' },
      { label: 'A relationship', respons: 'Relationships ask for presence, not perfection. One moment of genuine contact is enough.', link: 'temaer', linkTekst: 'Understand the relationship' },
      { label: 'My own state', respons: 'The most important work is often invisible. Regulating yourself is a gift to everyone around you.', link: 'oevelser', linkTekst: 'Start here' },
      { label: 'I do not know', respons: 'When you do not know, that is honest. Give it a little time. The answer will come when the body is ready.', link: 'hjem', linkTekst: 'Take it easy' }
    ]
  },
  {
    spoergsmaal: 'How did you sleep last night?',
    svar: [
      { label: 'Well', respons: 'Sleep is the body\'s most important repair. Take that with you as a good foundation today.', link: 'hjem', linkTekst: 'Good start' },
      { label: 'Restlessly', respons: 'Restless sleep tells you the nervous system is still working. Breathing can help you find calm.', link: 'oevelser', linkTekst: 'Try a breathing exercise' },
      { label: 'Too little', respons: 'When the body lacks sleep, the threshold is lower. Be extra kind to yourself today.', link: 'trappen', linkTekst: 'Be mindful today' },
      { label: 'Could not fall asleep', respons: 'Racing thoughts keep the nervous system active. Try landing in the body instead of in the mind.', link: 'oevelser', linkTekst: 'Exercise for grounding' }
    ]
  },
  {
    spoergsmaal: 'What is the first thing you notice in your body right now?',
    svar: [
      { label: 'Tension in my shoulders', respons: 'Your shoulders carry what you do not say out loud. Let them drop — just for a moment. You do not have to carry it all.', link: 'oevelser', linkTekst: 'Release the tension' },
      { label: 'A knot in my stomach', respons: 'The stomach responds to what lies beneath awareness. Something wants your attention. You do not have to solve it — just notice it.', link: 'trappen', linkTekst: 'Understand the signal' },
      { label: 'Heaviness', respons: 'Heaviness is the body\'s way of saying: slow down. Follow its pace today.', link: 'oevelser', linkTekst: 'Start slowly' },
      { label: 'Nothing in particular', respons: 'Sometimes the body is quiet. That is fine. It will speak when it is ready.', link: 'hjem', linkTekst: 'Continue quietly' }
    ]
  },
  {
    spoergsmaal: 'What would you say to yourself if you were your own best friend?',
    svar: [
      { label: 'You are doing well enough', respons: '"Good enough" is not an excuse — it is the truth. Perfectionism is trauma in disguise.', link: 'temaer', linkTekst: 'Read about shame & guilt' },
      { label: 'It will get better', respons: 'And it will. Not because everything fixes itself — but because you are already in motion.', link: 'hjem', linkTekst: 'See your progress' },
      { label: 'Take a break', respons: 'A break is not giving up. It is regulation. Your body knows best.', link: 'oevelser', linkTekst: 'Take a break now' },
      { label: 'Ask for help', respons: 'Asking for help is strength, not weakness. Nobody manages alone — and you should not have to either.', link: 'temaer', linkTekst: 'You are not alone' }
    ]
  },
  {
    spoergsmaal: 'If this day could give you one thing — what would it be?',
    svar: [
      { label: 'Lightness', respons: 'Lightness comes in small glimpses. Not as the absence of problems, but as moments when you forget them.', link: 'hjem', linkTekst: 'Find a glimpse' },
      { label: 'Connection', respons: 'We are made for connection. One genuine moment with another human being can change an entire day.', link: 'temaer', linkTekst: 'Understand connection' },
      { label: 'Clarity', respons: 'Clarity rarely comes from thinking more. It comes from pausing and feeling what truly matters.', link: 'muligt', linkTekst: 'Sort out what matters' },
      { label: 'Just to survive', respons: 'That is enough. Survival is not failure — it is foundation. You are here. That counts.', link: 'trappen', linkTekst: 'Feel where you are' }
    ]
  },
  {
    spoergsmaal: 'What makes you most vulnerable right now?',
    svar: [
      { label: 'Loneliness', respons: 'Loneliness inside a family is one of the heaviest things. You are not wrong — you are missing being met.', link: 'temaer', linkTekst: 'About isolation' },
      { label: 'Power struggles', respons: 'Power struggles are rarely about power. They are about being heard. What do you really want to say?', link: 'temaer', linkTekst: 'Understand the conflict' },
      { label: 'The children\'s reactions', respons: 'Children respond to what they sense — not what they are told. Their behavior is communication.', link: 'hjem', linkTekst: 'See the child\'s perspective' },
      { label: 'My own story', respons: 'Your wounds do not make you a bad parent. They make you a human being who is fighting. That is brave.', link: 'oevelser', linkTekst: 'Start with yourself' }
    ]
  },
  {
    spoergsmaal: 'Do you feel more fear or more hope right now?',
    svar: [
      { label: 'Mostly fear', respons: 'Fear is the nervous system\'s alarm bell. It protects you — but it does not have to steer you.', link: 'trappen', linkTekst: 'Regulate the fear' },
      { label: 'Mostly hope', respons: 'Hope is not naive. It is your nervous system saying: there are possibilities here. Follow it.', link: 'muligt', linkTekst: 'Seize the possibility' },
      { label: 'Both', respons: 'That is the most human answer. Fear and hope live side by side. You do not have to choose.', link: 'hjem', linkTekst: 'Let both be' },
      { label: 'Neither', respons: 'Numbness can be the body\'s pause button. It protects you, but it also keeps you at a distance.', link: 'oevelser', linkTekst: 'Come back to the body' }
    ]
  },
  {
    spoergsmaal: 'What do you need to hear today?',
    svar: [
      { label: 'That it is okay', respons: 'It is okay. Not everything needs to be resolved. Not everything needs to make sense. It is okay, just as it is right now.', link: 'hjem', linkTekst: 'Just be here' },
      { label: 'That I am not alone', respons: 'You are not alone. Thousands of families are fighting the same fight. Your struggle does not isolate you — it connects you.', link: 'temaer', linkTekst: 'Others know this too' },
      { label: 'That there is a way', respons: 'There is a way. It is not always visible, and it is rarely straight. But it is there.', link: 'muligt', linkTekst: 'See the next step' },
      { label: 'That I am doing well enough', respons: 'You are doing well enough. Not perfectly — well enough. And that is exactly enough.', link: 'oevelser', linkTekst: 'Give yourself credit' }
    ]
  },
  {
    spoergsmaal: 'Which role fills the most space in you right now?',
    svar: [
      { label: 'Parent', respons: 'Being a parent under pressure is exhausting. Remember: your child does not need a perfect parent — just a good enough one.', link: 'hjem', linkTekst: 'Give yourself rest' },
      { label: 'Partner', respons: 'A relationship under pressure is like building a bridge in a storm. It takes patience — with yourself and with the other.', link: 'temaer', linkTekst: 'About the relationship' },
      { label: 'Myself', respons: 'You exist beyond your roles. The person you were before all of this — that person is still there.', link: 'oevelser', linkTekst: 'Find yourself' },
      { label: 'Everything at once', respons: 'When everything demands everything all at once, the foundation creaks. Choose one role today. The rest can wait.', link: 'muligt', linkTekst: 'Prioritize today' }
    ]
  },
  {
    spoergsmaal: 'How would you describe your energy right now?',
    svar: [
      { label: 'Full of energy', respons: 'Use it wisely. Energy is a resource — and you decide where it goes.', link: 'muligt', linkTekst: 'Put it to use' },
      { label: 'Neutral', respons: 'Neutral is underrated. This is where you can choose freely. Enjoy the quiet moment.', link: 'hjem', linkTekst: 'Explore gently' },
      { label: 'Low', respons: 'Low energy is the body\'s message: do less, not more. What can you let go of today?', link: 'oevelser', linkTekst: 'Recharge quietly' },
      { label: 'Fluctuating', respons: 'Fluctuating energy reflects a nervous system in motion. It is not instability — it is regulation in progress.', link: 'trappen', linkTekst: 'Understand the shifts' }
    ]
  },
  {
    spoergsmaal: 'What would help you the most right now?',
    svar: [
      { label: 'To understand more', respons: 'Understanding creates calm. When you know what is happening, it loses some of its power.', link: 'temaer', linkTekst: 'Learn something new' },
      { label: 'To do something concrete', respons: 'Action is medicine for powerlessness. Even the smallest action changes the dynamic.', link: 'muligt', linkTekst: 'Do one thing' },
      { label: 'To feel my body', respons: 'The body often knows more than the mind. When you land in it, you find answers that thinking cannot give.', link: 'oevelser', linkTekst: 'Land in the body' },
      { label: 'Just to breathe', respons: 'Then do that. Three deep breaths. In through the nose, out through the mouth. You have time.', link: 'oevelser', linkTekst: 'The breath' }
    ]
  },
  {
    spoergsmaal: 'What do you see when you look at your family right now?',
    svar: [
      { label: 'Love under pressure', respons: 'Love under pressure is still love. It is just harder to see when the alarm is running.', link: 'hjem', linkTekst: 'See the bigger picture' },
      { label: 'Distance', respons: 'Distance in a family is painful. But it is also information: something can be repaired.', link: 'temaer', linkTekst: 'Understand the distance' },
      { label: 'Chaos', respons: 'Chaos is what happens when many nervous systems are dysregulated at the same time. It is not the family\'s fault.', link: 'trappen', linkTekst: 'Start with your nervous system' },
      { label: 'Possibilities', respons: 'Seeing possibilities is a sign that you are inside your window of tolerance. Seize it while it is here.', link: 'muligt', linkTekst: 'Seize them now' }
    ]
  },
  {
    spoergsmaal: 'Which sentence resonates with you the most right now?',
    svar: [
      { label: 'I am doing my best', respons: 'Yes. And your best is enough. It is not always pretty — but it is real.', link: 'hjem', linkTekst: 'You are enough' },
      { label: 'I am afraid of failing', respons: 'The fear of failure is often inherited. You are not necessarily repeating your history — you are writing a new one.', link: 'temaer', linkTekst: 'Break the pattern' },
      { label: 'I miss myself', respons: 'Missing yourself is a healthy sign. It means you know there is more.', link: 'oevelser', linkTekst: 'Find yourself again' },
      { label: 'This cannot go on', respons: 'When you feel that, you are already in motion. Change begins with saying: this is not working.', link: 'muligt', linkTekst: 'Take the first step' }
    ]
  },
  {
    spoergsmaal: 'What is the mood like at home?',
    svar: [
      { label: 'Quiet — the good kind', respons: 'Quiet rooms are rooms where the nervous system can regulate. Enjoy it. It is healing.', link: 'hjem', linkTekst: 'Rest in it' },
      { label: 'Tense', respons: 'Tension is contagious. When one nervous system is on alert, the others follow. Start by regulating your own.', link: 'trappen', linkTekst: 'Start with yourself' },
      { label: 'Chaotic', respons: 'Chaos is temporary. It feels endless, but it is not. Find one calm point and hold on.', link: 'oevelser', linkTekst: 'Find your anchor' },
      { label: 'Absent', respons: 'When everyone is present but no one is truly "there," connection is missing. One moment of real contact can change that.', link: 'temaer', linkTekst: 'Rebuild the connection' }
    ]
  },
  {
    spoergsmaal: 'What did you dream of when you were younger?',
    svar: [
      { label: 'A safe family', respons: 'That dream is still alive. Safety is not built from perfection, but from presence and repair.', link: 'hjem', linkTekst: 'Keep building' },
      { label: 'Freedom', respons: 'Freedom in a family is not about escaping — it is about being yourself, together with others.', link: 'oevelser', linkTekst: 'Feel the freedom' },
      { label: 'To be seen', respons: 'The need to be seen never goes away. Give yourself what you did not receive. It is never too late.', link: 'temaer', linkTekst: 'About attachment' },
      { label: 'I do not remember', respons: 'When dreams are forgotten, it is often because survival took all the space. They are still there — beneath the surface.', link: 'oevelser', linkTekst: 'Dig gently' }
    ]
  },
  {
    spoergsmaal: 'When did you last feel truly present?',
    svar: [
      { label: 'Recently', respons: 'Hold on to that feeling. Presence is a muscle — the more you use it, the stronger it gets.', link: 'hjem', linkTekst: 'Strengthen it' },
      { label: 'It has been a while', respons: 'When presence has become rare, the nervous system needs help to slow down.', link: 'oevelser', linkTekst: 'Slow down' },
      { label: 'Only with my child', respons: 'Children pull us into the now. They are our best teachers in presence — no matter their age.', link: 'hjem', linkTekst: 'Learn from your child' },
      { label: 'Never really', respons: 'If you have always lived in survival mode, presence can feel foreign. It can be learned. Slowly and safely.', link: 'trappen', linkTekst: 'Understand why' }
    ]
  },
  {
    spoergsmaal: 'What would Rikke say to you right now?',
    svar: [
      { label: 'Feel it', respons: 'Rikke would say: let yourself feel it. Do not analyze it, do not solve it — just feel it.', link: 'oevelser', linkTekst: 'Feel it now' },
      { label: 'You are not alone', respons: 'Rikke would say: every family I meet carries this. You are not the only one.', link: 'temaer', linkTekst: 'See that others know this' },
      { label: 'Start with the body', respons: 'Rikke would say: your body remembers more than you think. The way in through the body is often faster than words.', link: 'oevelser', linkTekst: 'Start with the body' },
      { label: 'Ask for help', respons: 'Rikke would say: asking for help is not giving up. It is taking yourself and your family seriously.', link: 'hjem', linkTekst: 'Take it seriously' }
    ]
  },
  {
    spoergsmaal: 'How do you feel about the day ahead?',
    svar: [
      { label: 'Manageable', respons: 'When the day feels manageable, your nervous system is regulated. Use that — but do not push yourself.', link: 'hjem', linkTekst: 'Carry it with you' },
      { label: 'Overwhelming', respons: 'An overwhelming day does not have to be lived all at once. Think in the next 30 minutes. That is enough.', link: 'muligt', linkTekst: 'One step at a time' },
      { label: 'Monotonous', respons: 'Monotony can be safe — or suffocating. Which is it for you? There are no wrong answers.', link: 'temaer', linkTekst: 'Explore something new' },
      { label: 'Unpredictable', respons: 'Unpredictability keeps the nervous system active. Give yourself an anchor — one thing that stays constant.', link: 'oevelser', linkTekst: 'Find your anchor' }
    ]
  }
];

// Greetings based on day of week and season (English)
var MORGEN_HILSNER_EN = {
  mandag: 'A new week. You do not need a plan — just a next step.',
  tirsdag: 'Tuesday. The week is underway. How did you land in it?',
  onsdag: 'Middle of the week. A good time to pause and check in with yourself.',
  torsdag: 'Thursday. The weekend is close. What has this week taught you?',
  fredag: 'Friday. The week is almost over. What will you carry forward?',
  loerdag: 'Weekend. Perhaps there is room for something that usually does not get space.',
  soendag: 'Sunday. A day for gathering yourself — before a new week begins.',
  vinter: 'It is dark outside. But you are here.',
  foraar: 'Something new is on its way. In you, too.',
  sommer: 'The light is long. Use it to see clearly.',
  efteraar: 'The leaves are falling. Perhaps there is something you can let go of, too.'
};

// Default "What is possible" items (English)
var MULIGT_DEFAULTS_EN = [
  { id: 'okonomi', titel: 'Finances', farve: 'amber', status: 'none', note: '' },
  { id: 'boern', titel: 'The children', farve: 'sage', status: 'none', note: '' },
  { id: 'folelser', titel: 'Feelings & relationships', farve: 'rose', status: 'none', note: '' },
  { id: 'kommunen', titel: 'The municipality & the system', farve: 'stone', status: 'none', note: '' },
  { id: 'bolig', titel: 'Housing & daily life', farve: 'amber', status: 'none', note: '' },
  { id: 'krop', titel: 'Body & health', farve: 'sage', status: 'none', note: '' }
];
