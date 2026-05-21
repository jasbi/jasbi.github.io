var papers = [

    // ── IN PREP ──────────────────────────────────────────────────────────────

    {
      section: 'inprep',
      title: 'Boolean Linguistic Reasoning in Large Language Models',
      authors: 'Chiem, C. & Jasbi, M.',
      venue: 'Manuscript in preparation',
      topics: ['computational'],
      links: {},
      abstract: 'Large language models (LLMs) exhibit significant failures in logical reasoning tasks, yet the underlying causes remain unclear. A key challenge is that existing evaluations conflate logical operations with non-logical factors such as representational format and task demands, making it difficult to isolate the sources of failure. In this study, we disentangle logical and non-logical contributions to LLM reasoning failures by constructing a controlled evaluation dataset grounded in Boolean linguistic reasoning. We systematically vary three dimensions: (1) logical construction, comprising 12 constructions built from negation, conjunction, and disjunction; (2) non-logical representation, using letters in words, digits in numbers, and words in sentences as targets of reasoning; and (3) task type, comparing a Truth Value Judgment Task (TVJT) and an Object Selection Task (OST). While TVJT may allow for success through chance performance and shallow heuristics due its limited response options, the OST requires a deeper understanding of the compositional combination of logical concepts. We tested five LLMs (Llama-3.1 8B, Qwen3 4B, Mistral v0.3 7B, GPT-5.1, and  Claude Opus 4.6) and found that both logical operations and nonlogical representations affect model performance. Almost all models showed lower accuracy in the OST (compared to TVJT) suggesting that the models\' successes are often due to shallow heuristics and not compositional logical-linguistic reasoning.',
      apa: 'Chiem, C., Bhat, D., & Jasbi, M. (in preparation). Boolean linguistic reasoning in large language models. Manuscript in preparation.',
      bibtex: '@unpublished{ChiemBhatJasbi,\n  author = {Chiem, C. and Bhat, D. and Jasbi, M.},\n  title  = {Boolean Linguistic Reasoning in Large Language Models},\n  note   = {Manuscript in preparation}\n}',
      firstPage: false
    },
    {
      section: 'inprep',
      title: 'The Validity and Reliability of Offline Experimental Measures for Scalar Implicatures',
      authors: 'Qiu, H., Felton, C., Houghton, Z., & Jasbi, M.',
      venue: 'Manuscript in preparation',
      topics: ['experimental'],
      links: {},
      abstract: 'Experimental research on scalar implicatures (SIs) relies on behavioral tasks whose psychometric properties remain largely unexamined. This paper investigates the validity and reliability of three offline tasks widely used to measure SI computation: the Truth Value Judgment Task (TVJT), the Picture Selection Task (PST), the Hidden Card Task (HCT), and a novel Multiple Answer Picture Selection Task (MAPST). Across four experiments with online participants, we systematically compare these tasks using three lexical scales ("some-all", "or-and", and "ad hoc") and evaluate them along multiple psychometric dimensions: reliability, convergent validity, divergent validity, and response process validity. All four tasks demonstrated high test-retest reliability (Cronbach\'s α > 0.80) and robust divergent validity, with SI rates dropping to near zero when implicatures were explicitly cancelled. However, the tasks diverged substantially in their estimates of SI rates for the "some-all" and "ad hoc" scales, indicating weak convergent validity across paradigms. Crucially, the TVJT and HCT produced convergent patterns despite their surface differences, while the PST yielded markedly higher SI rates for these two scales. The "or-and\" scale showed persistently low SI rates in all binary tasks, which the MAPST partially remedied by providing a richer set of response alternatives that improves pragmatic felicity for disjunction. To account for these patterns, we propose that the tasks instantiate three distinct response processes (accept-reject, choose-one-of-two, and choose-as-many) each of which differently invites pragmatic enrichment. We discuss the implications of these findings for the accuracy and appropriateness of task selection in experimental pragmatics research.',
      apa: 'Qiu, H., Felton, C., Houghton, Z., & Jasbi, M. (in preparation). The validity and reliability of measuring scalar implicatures in truth value judgment and card selection tasks. Manuscript in preparation.',
      bibtex: '@unpublished{QiuFeltonHoughtonJasbi,\n  author = {Qiu, H. and Felton, C. and Houghton, Z. and Jasbi, M.},\n  title  = {The Validity and Reliability of Measuring Scalar Implicatures in Truth Value Judgment and Card Selection Tasks},\n  note   = {Manuscript in preparation}\n}',
      firstPage: false
    },
    {
      section: 'inprep',
      title: 'Uniqueness and Familiarity in Persian Definite and Indefinite Descriptions',
      authors: 'Jasbi, M.',
      venue: 'Manuscript in preparation',
      topics: ['theoretical'],
      links: {},
      abstract: '',
      apa: 'Jasbi, M. (in preparation). Uniqueness and familiarity in Persian definite and indefinite descriptions. Manuscript in preparation.',
      bibtex: '@unpublished{Jasbi_PersianDefiniteness,\n  author = {Jasbi, M.},\n  title  = {Uniqueness and Familiarity in Persian Definite and Indefinite Descriptions},\n  note   = {Manuscript in preparation}\n}',
      firstPage: false
    },
    {
      section: 'inprep',
      title: 'Universality in the Interpretation of Logical Constructions: Evidence from English, Hungarian, Mandarin Chinese, and Spanish',
      authors: 'Jasbi, M., Bermudez, N., Zhang, Y., Siro, R., & Davidson, K.',
      venue: 'Under review',
      topics: ['experimental', 'theoretical'],
      links: {},
      abstract: '',
      apa: 'Jasbi, M., Bermudez, N., Zhang, Y., Siro, R., & Davidson, K. (under review). Universality in the interpretation of logical constructions: Evidence from English, Hungarian, Mandarin Chinese, and Spanish.',
      bibtex: '@unpublished{JasbiEtAl_Universality,\n  author = {Jasbi, M. and Bermudez, N. and Zhang, Y. and Siro, R. and Davidson, K.},\n  title  = {Universality in the Interpretation of Logical Constructions: Evidence from English, Hungarian, Mandarin Chinese, and Spanish},\n  note   = {Under review}\n}',
      firstPage: false
    },

    // ── IN PRESS ─────────────────────────────────────────────────────────────

    {
      section: 'inpress',
      title: 'Resolving the Vagueness of Quantifiers with Explicit Expectations',
      authors: 'Reese, S., Jasbi, M., & Morgan, E.',
      venue: '<em>Open Mind</em>',
      topics: ['experimental', 'computational', 'theoretical'],
      links: {},
      abstract: 'Vague quantifiers like many, few, and several may vary considerably with respect to the quantity they denote. Depending on the context, many may indicate different quantities in “many students” versus “many cups of coffee.” The vagueness and context sensitivity of such quantifiers pose a challenge for semantic theories that aim to formally characterize quantifier meaning. We address this challenge by extending and experimentally testing a Bayesian model proposed by Schöller and Franke (2017), which represents quantifiers as cumulative density thresholds over probability distributions of expected values. We hypothesized that each quantifier has a stable semantic threshold, with contextual variability arising from differences in expected value distributions. To test this, we conducted two experiments: one eliciting contextual expectations, and another collecting cardinality judgments for quantified utterances. We then fit five hierarchical Bayesian models and used model comparison (via WAIC and DIC) to evaluate whether thresholds generalize across contexts. Our results reveal conflicting evidence. While estimated thresholds are highly overlapping across contexts—suggesting some stability—models with individualized thresholds consistently outperform the context-stable alternative. Moreover, semantically motivated bounds do appear more stable than pragmatically motivated ones, as expected.',
      apa: 'Reese, S., Jasbi, M., & Morgan, E. (in press). Resolving the Vagueness of Quantifiers with Explicit Expectations. Open Mind.',
      bibtex: '@article{ReeseJasbiMorgan_inpress,\n  author  = {Reese, S. and Jasbi, M. and Morgan, E.},\n  title   = {Resolving the Vagueness of Quantifiers with Explicit Expectations},\n  journal = {Open Mind},\n  note    = {in press}\n}',
      firstPage: false
    },
    {
      section: 'inpress',
      title: 'Corpus-based Population-level Estimates of Onset Age-of-Acquisition for English Function Words',
      authors: 'Jasbi, M., Pilapil, A., & Odufuwa, D.',
      venue: '<em>Proceedings of the 50th Boston University Conference on Language Development (BUCLD 2025)</em>',
      topics: ['learning', 'computational'],
      links: {},
      abstract: 'Previous research has shown that content words are acquired earlier than function words, but the exact trajectory and order of function word acquisition has remained relatively understudied. In this study, we use the largest available child language corpora as well as Bayesian growth curve modeling to estimate the population level onset of production for more than 100 English function words. Our estimates suggest that for the large majority of function words, the earliest age of production lies between 12-24 months. A linear regression found longer function words as measured by the number of phonemes and function words with higher Mean Length of Utterance (MLU) have later estimated onset age of production. We did not find a significant effect of frequency in child directed-speech on onset age of production for function words. Overall these results point to early emergence of abstract functional morphemes with production limitations as the main bottleneck.',
      apa: 'Jasbi, M., Pilapil, A., & Odufuwa, D. (2026). Corpus-based population-level estimates of onset age-of-acquisition for English function words. Proceedings of the 50th Boston University Conference on Language Development.',
      bibtex: '@inproceedings{JasbiPilapilOdufuwa2026,\n  author    = {Jasbi, M. and Pilapil, A. and Odufuwa, D.},\n  title     = {Corpus-based Population-level Estimates of Onset Age-of-Acquisition for English Function Words},\n  booktitle = {Proceedings of the 50th Boston University Conference on Language Development (BUCLD 2025)},\n  year      = {2026}\n}',
      firstPage: false
    },
    {
      section: 'inpress',
      title: 'Moving Beyond Forced-Choice: A Fresh Perspective on Children’s Disjunction Comprehension',
      authors: 'Bhaumik, M., & Jasbi, M.',
      venue: '<em>Proceedings of the 50th Boston University Conference on Language Development (BUCLD 2025)</em>',
      topics: ['learning', 'experimental'],
      links: {},
      abstract: 'Prior research has shown that preschool children sometimes interpret a positive disjunction (e.g., P or Q) similar to a positive conjunction (e.g., P and Q). The literature has considered three possible explanations: 1. Non-adult-like pragmatic strengthening; 2. task artefacts; and 3. non-linguistic default interpretation of unknown connectives. More specifically, Truth Value Judgment Tasks (TVJTs) with two alternatives and trivially true disjunctions have been shown to increase children’s conjunctive interpretations. We tested Bengali-speaking children on their interpretation of positive conjunction and disjunction in a novel give-item task that avoids previously discussed experimental artefacts. We find that some children still interpret positive disjunctions similar to a conjunction. Our study provides support for the hypothesis that conjunctive interpretations of disjunction are due to default biases on the interpretation of an unknown or difficult-to-comprehend coordination, potentially exacerbated by task demands.',
      apa: 'Bhaumik, M., & Jasbi, M. (2026). Moving beyond forced-choice: A fresh perspective on children’s disjunction comprehension. Proceedings of the 50th Boston University Conference on Language Development.',
      bibtex: '@inproceedings{BhaumikJasbi2026,\n  author    = {Bhaumik, M. and Jasbi, M.},\n  title     = {Moving Beyond Forced-Choice: A Fresh Perspective on Children\'s Disjunction Comprehension},\n  booktitle = {Proceedings of the 50th Boston University Conference on Language Development (BUCLD 2025)},\n  year      = {2026}\n}',
      firstPage: false
    },
    {
      section: 'inpress',
      title: 'A Formal Semantic Analysis of Plurality and Definiteness in Modern Colloquial Persian',
      authors: 'Jasbi, M.',
      venue: 'In Jasbi, M., Mirrazi, Z., & Samiian, V. (Eds.), <em>Advances in Iranian Linguistics III</em>. John Benjamins',
      topics: ['theoretical'],
      links: {},
      abstract: 'Persian can form plurals by combining a noun (e.g. ketɑb “book”) with the plural morpheme (e.g. ketɑb-hɑ “books”) or alternatively numerals and classifiers, without the plural morpheme (e.g. do/se/t͡ʃænd tɑ ketɑb “two/three/some books”). The first is often interpreted as definite and the second as indefinite. Previous research suggests that the plural morpheme -hɑ makes nouns definite, while the numerals jek/do/…/t͡ʃænd make them indefinite. This study argues against this view by looking at five plural constructions in Persian: bare plurals, indefinite plurals, classifier plurals, negative plurals, and plural constituent questions. It presents evidence suggesting that despite taking the plural morpheme, bare plurals and indefinite plurals receive indefinite interpretations systematically. Therefore, the plural morpheme is unlikely to encode for definiteness. It shows that the plurals with numerals and classifiers can be definite. Therefore, it is unlikely that numerals encode for indefiniteness. It also shows that in both singular and plural constructions, definiteness is the result of a variety of factors including the presence/absence of the indefinite clitic, prosody, background knowledge, tense, and aspect. The paper presents a formal semantic analysis of Persian plurals in which plurality and definiteness are introduced via separate mechanisms: plurality is introduced morphologically via the plural marker or numeral classifiers, and (in)definiteness is introduced via type-shifting operations that can be cued through different factors such as prosody, world-knowledge, or tense and aspect',
      apa: 'Jasbi, M. (in press). A formal semantic analysis of plurality and definiteness in Modern Colloquial Persian. In M. Jasbi, Z. Mirrazi, & V. Samiian (Eds.), Advances in Iranian Linguistics III. John Benjamins.',
      bibtex: '@incollection{Jasbi_PersianPlurality,\n  author    = {Jasbi, M.},\n  title     = {A Formal Semantic Analysis of Plurality and Definiteness in Modern Colloquial Persian},\n  booktitle = {Advances in Iranian Linguistics III},\n  editor    = {Jasbi, M. and Mirrazi, Z. and Samiian, V.},\n  publisher = {John Benjamins},\n  note      = {in press}\n}',
      firstPage: false
    },
    {
      section: 'inpress',
      title: 'Advances in Iranian Linguistics III',
      authors: 'Jasbi, M., Mirrazi, Z., & Samiian, V. (Eds.)',
      venue: '<em>John Benjamins</em>',
      topics: ['theoretical'],
      links: {},
      abstract: 'Iranian languages are exceptional in providing both synchronic and diachronic data on linguistic structures that, due to extensive contact with other languages, are remarkably diverse in nature. Despite their potential to inform linguistic theory, Iranian languages have remained relatively understudied. The North American Conference on Iranian Linguistics (NACIL) was established in 2017 with the primary goal of bringing together researchers working on Iranian languages, expanding the range of languages studied, and diversifying the linguistic topics investigated within this language family. Since 2017, three biannual meetings have been held, and even within this short period, the conference has been a major success. The range of languages studied and discussed has expanded considerably, and several subfields have flourished, including the formal semantics of Iranian languages. This volume presents a collection of papers from the third conference (NACIL 3), submitted for peer-reviewed publication.',
      apa: 'Jasbi, M., Mirrazi, Z., & Samiian, V. (Eds.). (in press). Advances in Iranian Linguistics III. John Benjamins.',
      bibtex: '@book{JasbiMirraziSamiian_AIL3,\n  editor    = {Jasbi, M. and Mirrazi, Z. and Samiian, V.},\n  title     = {Advances in Iranian Linguistics III},\n  publisher = {John Benjamins},\n  note      = {in press}\n}',
      firstPage: false
    },

    // ── PUBLISHED ────────────────────────────────────────────────────────────

    {
      section: 'published',
      title: 'On the compatibility of generative AI and generative linguistics',
      authors: 'Portelance, E., & Jasbi, M. (2025)',
      venue: '<em>Nature Computational Science</em>',
      topics: ['computational', 'theoretical'],
      links: {
        doi: 'https://doi.org/10.1038/s43588-025-00861-2',
        pdf: 'https://arxiv.org/abs/2411.10533'
      },
      abstract: 'In mid-20th century, the linguist Noam Chomsky established generative linguistics, and made significant contributions to linguistics, computer science, and cognitive science by developing the computational and philosophical foundations for a theory that defined language as a formal system, instantiated in human minds or artificial machines. These developments in turn ushered a wave of research on symbolic Artificial Intelligence (AI). More recently, a new wave of non-symbolic AI has emerged with neural Language Models (LMs) that exhibit impressive linguistic performance, leading many to question the older approach and wonder about the the compatibility of generative AI and generative linguistics. In this paper, we argue that generative AI is compatible with generative linguistics and reinforces its basic tenets in at least three ways. First, we argue that LMs are formal generative models as intended originally in Chomsky\'s work on formal language theory. Second, LMs can help develop a program for discovery procedures as defined by Chomsky\'s "Syntactic Structures". Third, LMs can be a major asset for Chomsky\'s minimalist approach to Universal Grammar and language acquisition. In turn, generative linguistics can provide the foundation for evaluating and improving LMs as well as other generative computational models of language.',
      apa: 'Portelance, E., & Jasbi, M. (2025). On the compatibility of generative AI and generative linguistics. Nature Computational Science. https://doi.org/10.1038/s43588-025-00861-2',
      bibtex: '@article{PortelanceJasbi2025_NCS,\n  author  = {Portelance, E. and Jasbi, M.},\n  title   = {On the Compatibility of Generative AI and Generative Linguistics},\n  journal = {Nature Computational Science},\n  year    = {2025},\n  doi     = {10.1038/s43588-025-00861-2}\n}',
      firstPage: true
    },
    {
      section: 'published',
      title: 'What data should I include in my POS tagging training set?',
      authors: 'Liu, Z., Jasbi, M., Grant, C., Sagae, K., & Prud\'hommeaux, E. (2025)',
      venue: '<em>Findings of the Association for Computational Linguistics</em>',
      topics: ['computational'],
      links: {
        doi: 'https://doi.org/10.18653/v1/2025.findings-emnlp.448',
        pdf: 'https://aclanthology.org/2025.findings-emnlp.448.pdf'
      },
      abstract: 'Building an NLP training set for understudied languages, including Indigenous and endangered languages, often faces challenges due to varying degrees of resource limitations in the speaker communities. What are some reasonable approaches for training set construction in these cases? We address this question with POS tagging as the test case. Although many might consider POS tagging “a solved problem”, it remains a crucial task for descriptive linguistics and language documentation and requires laborious manual annotation. Drawing data from 12 language families, we compare in-context learning, active learning (AL), and random sampling. Our results suggest: (1) for communities whose language data can be ethically shared with an API, using only 1,000 randomly sampled tokens as prompt examples, the proprietary GPT-4.1-mini can deliver desirable performance (F1>0.83) on par with that from a training set of thousands of tokens in AL iterations; (2) in cases where communities prefer not to share data, 4,500-5,500 tokens selected from AL can yield reasonable results at a pace statistically significantly faster than random sampling, evidenced by growth curve modeling.',
      apa: 'Zoey Liu, Masoud Jasbi, Christan Grant, Kenji Sagae, and Emily Prud’hommeaux. (2025). What data should I include in my POS tagging training set?. In Findings of the Association for Computational Linguistics: EMNLP 2025, pages 8439–8455, Suzhou, China. Association for Computational Linguistics.',
      bibtex: '@inproceedings{LiuEtAl2025_EMNLP,\n  author    = {Liu, Z. and Jasbi, M. and Grant, C. and Sagae, K. and Prud\'hommeaux, E.},\n  title     = {What Data Should I Include in My POS Tagging Training Set?},\n  booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2025},\n  year      = {2025}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Leaky Grammars in Instructed Second Language Acquisition',
      authors: 'Jasbi, M., & Samavati, F. (2025)',
      venue: 'In Taleghani, A. & Shabani-Jadidi, P. (Eds.), <em>Persian Second Language Pedagogy: New Trends and Innovations</em>. Routledge',
      topics: ['learning', 'theoretical'],
      links: {},
      abstract: 'Humans are capable of language learning with or without instruction. While “instruction” is typically associated with formal education, it can be more broadly defined as any intervention in the learning process with the intention of improving the process or the outcome. This intervention may be in the selection of the linguistic data that informs language learning, it may be the design of language learning tasks, the provision of feedback that guides the learner, or the presentation of meta-linguistic generalizations that consciously inform the learner about the grammar of the language. It can be “indirect” by simply providing the environment that facilitates learning, or it can be “direct” by providing pre-defined learningoutcomes, a structured syllabus, or metalinguistic descriptive generalizations (Ellis et al. 2009). A fundamental question in second language acquisition is whether instruction improves language learning; and if so, what type of instruction is optimal for language learning (Loewen 2020)?',
      apa: 'Jasbi, M., & Samavati, F. (2025). Leaky grammars in instructed second language acquisition. In A. Taleghani & P. Shabani-Jadidi (Eds.), Persian Second Language Pedagogy: New Trends and Innovations. Routledge.',
      bibtex: '@incollection{JasbiSamavati2025,\n  author    = {Jasbi, M. and Samavati, F.},\n  title     = {Leaky Grammars in Instructed Second Language Acquisition},\n  booktitle = {Persian Second Language Pedagogy: New Trends and Innovations},\n  editor    = {Taleghani, A. and Shabani-Jadidi, P.},\n  publisher = {Routledge},\n  year      = {2025}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'The development of English negative constructions and communicative functions',
      authors: 'Liu, Z., & Jasbi, M. (2025)',
      venue: '<em>Language Learning and Development</em>, 1–35',
      topics: ['learning'],
      links: { doi: 'https://doi.org/10.1080/15475441.2025.2468335' },
      abstract: 'How does linguistic negation develop in early child language? Prior research has suggested that abstract and context-general negation develops from concrete and context-specific communicative functions such as rejection, prohibition, or nonexistence in fixed and ordered stages. The evidence for the emergence of these functions in stages is mixed, however, leaving the possibility that negation starts as an abstract concept that can serve multiple specific functions from the beginning, and that the development of the different functions starts more or less simultaneously depending on the early communicative environment. Leveraging automatic annotations of large-scale child speech corpora in English and growth-curve modeling, we examine children’s production of seven negative constructions that tend to convey communicative functions previously discussed in the literature. We also investigate children’s discourse-level negative responses (saying no) to parents’ utterances with the same constructions as a proxy for children’s comprehension. We do not find strong evidence for population-level stages in children’s development of negation. Instead, the results of our growth-curve modeling suggest that for our measures of comprehension and production, children’s ability to negate different constructions likely emerges around 18–22 months of age. Our results complement and confirm recent findings in experimental studies on children’s comprehension of negation.',
      apa: 'Liu, Z., & Jasbi, M. (2025). The development of English negative constructions and communicative functions. Language Learning and Development, 1–35. https://doi.org/10.1080/15475441.2025.2468335',
      bibtex: '@article{LiuJasbi2025_LLD,\n  author  = {Liu, Z. and Jasbi, M.},\n  title   = {The Development of English Negative Constructions and Communicative Functions},\n  journal = {Language Learning and Development},\n  year    = {2025},\n  pages   = {1--35},\n  doi     = {10.1080/15475441.2025.2468335}\n}',
      firstPage: true
    },
    {
      section: 'published',
      title: 'Quantifying Non-Implicature Sources of Disjunction Exclusivity',
      authors: 'Felton, C., & Jasbi, M. (2025)',
      venue: '<em>Proceedings of Experiments in Linguistic Meaning (ELM 3)</em>, 163–175',
      topics: ['experimental'],
      links: { pdf: 'https://journals.linguisticsociety.org/proceedings/index.php/ELM/article/view/5806/5608' },
      abstract: 'Disjunction in natural language alternates between an inclusive reading (A or B or Both) and an exclusive  reading (A or B but not Both). Traditional accounts of this ambiguity focus on scalar implicature as the source of disjunction exclusivity, a process whereby Gricean reasoning over Horn scales strengthens the baseline inclu-sive  reading  to  an  implied  exclusive  reading  (Grice,  1978;  Horn,  1972;  Gazdar, 1980). Despite nearly all theories acknowledging that other factors likely play a role in  the  generation  of  exclusivity  implications,  non-implicature  factors  have  received comparatively  little  attention. Across  four  experiments  we  tested  two  such  non  im-plicature factors, prior compatibility and syntactic category, finding that both play a role in speaker interpretations of disjunctive sentences. Additionally, by drawing our stimuli in the first two experiments from the prior literature, we found evidence that previous  research  on  disjunction,  while  accurately  identifying  the  key  role  of  scalar implicatures, may be overestimating the effect size thereof due to a failure to control for non-implicature factors.',
      apa: 'Felton, C., & Jasbi, M. (2025). Quantifying non-implicature sources of disjunction exclusivity. Proceedings of Experiments in Linguistic Meaning (ELM 3), 163–175.',
      bibtex: '@inproceedings{FeltonJasbi2025_ELM3,\n  author    = {Felton, C. and Jasbi, M.},\n  title     = {Quantifying Non-Implicature Sources of Disjunction Exclusivity},\n  booktitle = {Proceedings of Experiments in Linguistic Meaning (ELM 3)},\n  year      = {2025},\n  pages     = {163--175}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Experimental Paradigms on Scalar Implicature Estimation',
      authors: 'Qiu, H., Felton, C., Houghton, Z., & Jasbi, M. (2025)',
      venue: '<em>Proceedings of Experiments in Linguistic Meaning (ELM 3)</em>, 308–318',
      topics: ['experimental'],
      links: { pdf: 'https://journals.linguisticsociety.org/proceedings/index.php/ELM/article/view/5807/5620' },
      abstract: 'Experimental research on the processing of Scalar Implicatures (SIs) relies on behavioral tasks that purport to measure the rate at which scalar implicatures are computed within an experimental paradigm. Two paradigms, the Truth Value Judg-ment  Task  (TVJT)  (Gordon,  1998,Crain  &  Thornton,  2000)  and  the  Picture Selection  Task  (PST)  (Gerken  &  Shady,  1998)  have  dominated  the  experimental pragmatics literature; yet the effects of task choice on implicature rate have remained underexplored. Here we report the results of three studies testing participants in aTVJT and aPST using three different linguistic scales in English:“or-and”, “some-all”, and“ad-hoc”.We varied the task (TVJT vs. PST) within subjects in the first ex-periment  and  between  subjects  in  the  second.  The  third  experiment  examined  a variant of the PST called the Hidden Card Task (HCT) which is increasingly used in the context of priming research (Bott & Chemla, 2016). We found that the estimated rate of scalar implicature computation varied noticeably between different tasksas well as scales. This suggests that the experimental paradigm itself has a significant impact on our estimates of the implicature rate for a given linguistic scale, and thus, researchers studying scalar implicatures need to carefully consider the pragmatics of the task itself when designing experimental studies and interpreting their results.',
      apa: 'Qiu, H., Felton, C., Houghton, Z., & Jasbi, M. (2025). Experimental paradigms on scalar implicature estimation. Proceedings of Experiments in Linguistic Meaning (ELM 3), 308–318.',
      bibtex: '@inproceedings{QiuEtAl2025_ELM3,\n  author    = {Qiu, H. and Felton, C. and Houghton, Z. and Jasbi, M.},\n  title     = {Experimental Paradigms on Scalar Implicature Estimation},\n  booktitle = {Proceedings of Experiments in Linguistic Meaning (ELM 3)},\n  year      = {2025},\n  pages     = {308--318}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'The Roles of Neural Networks in Language Acquisition',
      authors: 'Portelance, E., & Jasbi, M. (2024)',
      venue: '<em>Language and Linguistics Compass</em>, 18, e70001',
      topics: ['computational', 'learning'],
      links: { doi: 'https://doi.org/10.1111/lnc3.70001' },
      abstract: 'How can modern neural networks like language models be useful to the field of language acquisition, and more broadly cognitive science, if they are not a priori designed to be cognitive models? As developments towards natural language understanding and generation have improved leaps and bounds, with models like GPT-4, the question of how they can inform our understanding of human language acquisition has re-emerged. As such, it is critical to examine how in practice linking hypotheses between models and human learners can be safely established. To address these questions, we propose a model taxonomy, including four modelling approaches, each having differing goals, from exploratory hypothesis generation to hypothesis differentiation and testing. We show how the goals of these approaches align with the overarching goals of science and linguistics by connecting our taxonomy to the realist versus instrumentalist approaches in philosophy of science. We survey recent work having adopted each of our modelling approaches and address the importance of computational modelling in language acquisition studies.',
      apa: 'Portelance, E., & Jasbi, M. (2024). The roles of neural networks in language acquisition. Language and Linguistics Compass, 18, e70001. https://doi.org/10.1111/lnc3.70001',
      bibtex: '@article{PortelanceJasbi2024_LLC,\n  author  = {Portelance, E. and Jasbi, M.},\n  title   = {The Roles of Neural Networks in Language Acquisition},\n  journal = {Language and Linguistics Compass},\n  year    = {2024},\n  volume  = {18},\n  pages   = {e70001},\n  doi     = {10.1111/lnc3.70001}\n}',
      firstPage: true
    },
    {
      section: 'published',
      title: 'Using constructed languages to introduce and teach linguistics',
      authors: 'Duval, C., Booker, N., Brotherton, C., Diaz, A., & Jasbi, M. (2024)',
      venue: '<em>Linguistics Vanguard</em>, 10(s3), 201–214',
      topics: [],
      links: {
        doi: 'https://doi.org/10.1515/lingvan-2024-0091',
        pdf: 'research/DuvalEtal2024.pdf'
      },
      abstract: 'Introductory linguistics courses are a common component of general education curricula at many institutions of higher education, reaching tens of thousands of students with diverse backgrounds and interests. Such courses provide a great opportunity for linguists to convey the field’s message and its values to a wider audience. We propose that it is possible to increase the public outreach of such courses by engaging not only the students in the course, but also the campus community at large. In this paper, we report on using constructed languages (conlangs) as a tool to help students understand course materials via active learning as well as present linguistic research to the wider community of college campuses.',
      apa: 'Duval, C., Booker, N., Brotherton, C., Diaz, A., & Jasbi, M. (2024). Using constructed languages to introduce and teach linguistics. Linguistics Vanguard, 10(s3), 201–214. https://doi.org/10.1515/lingvan-2024-0091',
      bibtex: '@article{DuvalEtAl2024,\n  author  = {Duval, C. and Booker, N. and Brotherton, C. and Diaz, A. and Jasbi, M.},\n  title   = {Using Constructed Languages to Introduce and Teach Linguistics},\n  journal = {Linguistics Vanguard},\n  year    = {2024},\n  volume  = {10},\n  number  = {s3},\n  pages   = {201--214},\n  doi     = {10.1515/lingvan-2024-0091}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Frequency-Dependent Regularization in Mandarin Elastic Word Length',
      authors: 'Reese, S. J., Liu, Z., Jasbi, M., & Morgan, E. (2024)',
      venue: '<em>Proceedings of the Annual Meeting of the Cognitive Science Society</em>, 46',
      topics: ['experimental', 'computational'],
      links: { doi: 'https://escholarship.org/uc/item/7x6670f0' },
      abstract: 'In English binomial expressions, “bread and butter” is preferred over “butter and bread”. Morgan & Levy (2015) show that for these types of expressions, frequently used phrases tend to have stronger, more extreme preferences. In contrast, there is roughly an equal preference for “bishops and rooks” versus “rooks and bishops”, a much less common pairing. This paper extends this research to the concept of Mandarin elastic word length, a phenomenon in which most Mandarin words have long and short forms. We find evidence for frequency-dependent regularization in the elastic length of Noun-Noun compounds in Chinese, demonstrating that frequency-dependent regularization extends to structures with more than two alternations and to languages other than English.',
      apa: 'Reese, S. J., Liu, Z., Jasbi, M., & Morgan, E. (2024). Frequency-dependent regularization in Mandarin elastic word length. Proceedings of the Annual Meeting of the Cognitive Science Society, 46.',
      bibtex: '@inproceedings{ReeseEtAl2024_CogSci,\n  author    = {Reese, S. J. and Liu, Z. and Jasbi, M. and Morgan, E.},\n  title     = {Frequency-Dependent Regularization in Mandarin Elastic Word Length},\n  booktitle = {Proceedings of the Annual Meeting of the Cognitive Science Society},\n  year      = {2024},\n  volume    = {46}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Default biases in the interpretation of English negation, conjunction, and disjunction',
      authors: 'Jasbi, M., Bermudez, N., & Davidson, K. (2023)',
      venue: 'In Knowlton, T., Schwarz, F., & Papafragou, A. (Eds.), <em>Proceedings of Experiments in Linguistic Meaning (ELM 2)</em>, Vol. 2 (pp. 129–141)',
      topics: ['experimental'],
      links: { doi: 'https://doi.org/10.3765/elm.2.5382' },
      abstract: 'Previous research has hypothesized default interpretive biases for three types of ambiguities with English logical words and, or, and not. First, disjunction (A or B) is hypothesized to be biased towards an exclusive interpretation in upward-entailing environments and an inclusive interpretation in downward-entailing environments (Levinson 2000, Chierchia 2004, Breheny et al. 2005). A negated disjunction (not A or B) is claimed to be biased towards a “neither-nor” interpretation (i.e. wide scope negation: ¬[A ∨ B]) and a negated conjunction is said to be biased towards an “either-not” interpretation (i.e. wide-scope negation: ¬[A ∧ B]) (Szabolcsi 2002, Szabolcsi & Haddican 2004). We tested these hypotheses within the same experimental paradigm with 149 English-speaking participants and found disjunction to be biased towards an inclusive interpretation across three different entailment environments: episodic declaratives, questions, and conditional antecedents. Our results also confirmed that English negated disjunction is biased towards a “neither-nor” (wide scope negation) interpretation but the results did not show an “either-not” bias (wide scope negation) for negated conjunction.',
      apa: 'Jasbi, M., Bermudez, N., & Davidson, K. (2023). Default biases in the interpretation of English negation, conjunction, and disjunction. In T. Knowlton, F. Schwarz, & A. Papafragou (Eds.), Proceedings of Experiments in Linguistic Meaning (ELM 2), Vol. 2 (pp. 129–141). https://doi.org/10.3765/elm.2.5382',
      bibtex: '@inproceedings{JasbiBermudezDavidson2023,\n  author    = {Jasbi, M. and Bermudez, N. and Davidson, K.},\n  title     = {Default Biases in the Interpretation of English Negation, Conjunction, and Disjunction},\n  booktitle = {Proceedings of Experiments in Linguistic Meaning (ELM 2)},\n  editor    = {Knowlton, T. and Schwarz, F. and Papafragou, A.},\n  year      = {2023},\n  volume    = {2},\n  pages     = {129--141},\n  doi       = {10.3765/elm.2.5382}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Context-Dependent Learning of Linguistic Disjunction',
      authors: 'Jasbi, M., Jaggi, A., Clark, E. V., & Frank, M. C. (2022)',
      venue: '<em>Journal of Child Language</em>, 51(1), 1–36',
      topics: ['learning', 'computational'],
      links: { doi: 'https://doi.org/10.1017/S0305000922000502' },
      abstract: 'What are the constraints, cues, and mechanisms that help learners create successful word-meaning mappings? This study takes up linguistic disjunction and looks at cues and mechanisms that can help children learn the meaning of or. We first used a large corpus of parent-child interactions to collect statistics on or uses. Children started producing or between 18-30 months and by 42 months, their rate of production reached a plateau. Second, we annotated for the interpretation of disjunction in child-directed speech. Parents used or mostly as exclusive disjunction, typically accompanied by rise-fall intonation and logically inconsistent disjuncts. But when these two cues were absent, disjunction was generally not exclusive. Our computational modeling suggests that an ideal learner could successfully interpret an English disjunction (as exclusive or not) by mapping forms to meanings after partitioning the input according to the intonational and logical cues available in child-directed speech.',
      apa: 'Jasbi, M., Jaggi, A., Clark, E. V., & Frank, M. C. (2022). Context-dependent learning of linguistic disjunction. Journal of Child Language, 51(1), 1–36. https://doi.org/10.1017/S0305000922000502',
      bibtex: '@article{JasbiEtAl2022_JCL,\n  author  = {Jasbi, M. and Jaggi, A. and Clark, E. V. and Frank, M. C.},\n  title   = {Context-Dependent Learning of Linguistic Disjunction},\n  journal = {Journal of Child Language},\n  year    = {2022},\n  volume  = {51},\n  number  = {1},\n  pages   = {1--36},\n  doi     = {10.1017/S0305000922000502}\n}',
      firstPage: true
    },
    {
      section: 'published',
      title: 'Adults’ and Children’s Comprehension of Linguistic Disjunction',
      authors: 'Jasbi, M., & Frank, M. C. (2021)',
      venue: '<em>Collabra: Psychology</em>, 7(1)',
      topics: ['learning', 'experimental'],
      links: {
        doi: 'https://doi.org/10.1525/collabra.27702',
        github: 'https://github.com/jasbi/disjunction_comprehension'
      },
      abstract: 'Disjunction has played a major role in advancing theories of logic, language, and cognition, featuring as the centerpiece of debates on the origins and development of logical thought. Recent studies have argued that due to non-adult-like pragmatic reasoning, preschool children’s comprehension of linguistic disjunction differs from adults in two ways. First, children are more likely to interpret “or” as “and” (conjunctive interpretations); Second, children are more likely to consider a disjunction as inclusive (lack of exclusivity implicatures). We tested adults and children’s comprehension of disjunction in existential sentences using two and three-alternative forced choice tasks, and analyzed children’s spontaneous verbal reactions prior to their forced-choice judgments. Overall our results are compatible with studies that suggest children understand the basic truth-conditional semantics of disjunction. Children did not interpret “or” as “and”, supporting studies that argue conjunctive interpretations are due to task demands. In addition, even though our forced-choice tasks suggest children interpreted disjunction as inclusive, spontaneous verbal reactions showed that children were sensitive to the adult-like pragmatics of disjunction. Theoretically, these studies provide evidence against previous developmental accounts, and lend themselves to two alternative hypotheses. First, that preschool children’s pragmatic knowledge is more adult-like than previously assumed, but forced-choice judgments are not sensitive enough to capture this knowledge. Second, children may have the knowledge of the relevant lexical scale themselves, but be uncertain whether a new speaker also has this knowledge (mutual knowledge of the scale).',
      apa: 'Jasbi, M., & Frank, M. C. (2021). Adults’ and children’s comprehension of linguistic disjunction. Collabra: Psychology, 7(1). https://doi.org/10.1525/collabra.27702',
      bibtex: '@article{JasbiFrank2021_Collabra,\n  author  = {Jasbi, M. and Frank, M. C.},\n  title   = {Adults\' and Children\'s Comprehension of Linguistic Disjunction},\n  journal = {Collabra: Psychology},\n  year    = {2021},\n  volume  = {7},\n  number  = {1},\n  doi     = {10.1525/collabra.27702}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'English Negative Constructions and Communicative Functions in Child Language',
      authors: 'Liu, Z., & Jasbi, M. (2021)',
      venue: '<em>Proceedings of the Annual Meeting of the Cognitive Science Society</em>, 43',
      topics: ['learning'],
      links: {
        doi: 'https://escholarship.org/uc/item/0kj5j80c',
        github: 'https://github.com/zoeyliu18/Negative_Constructions'
      },
      abstract: 'How does abstract linguistic negation develop in early child language? Previous research has suggested that abstract negation develops in stages and from more concrete communicative functions such as rejection, prohibition, or non-existence. The evidence for the emergence of these functions in stages is mixed, however, leaving the possibility that negation is an abstract concept from the beginning that can serve multiple specific functions depending on early communicative environment. Leveraging automatic annotations of large-scale child speech corpora in English, we examine the production trajectories of seven negative constructions that tend to convey communicative functions previously discussed in the literature. The results demonstrate the emergence and gradual increase of these constructions in child speech within the age range of 18-36 months. Production mostly remains stable, regular, and close to parents’ levels after this age range. These findings are consistent with two hypotheses: first, that negation starts as an abstract concept that can serve multiple functions from the beginning; and second, that negation develops in stages from specific communicative functions but this development is early and quick, leaving our corpus methods incapable of detecting them from the available corpus data.',
      apa: 'Liu, Z., & Jasbi, M. (2021). English negative constructions and communicative functions in child language. Proceedings of the Annual Meeting of the Cognitive Science Society, 43.',
      bibtex: '@inproceedings{LiuJasbi2021_CogSci,\n  author    = {Liu, Z. and Jasbi, M.},\n  title     = {English Negative Constructions and Communicative Functions in Child Language},\n  booktitle = {Proceedings of the Annual Meeting of the Cognitive Science Society},\n  year      = {2021},\n  volume    = {43}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Parents’ and Children’s Production of English Negation',
      authors: 'Jasbi, M., McDermott-Hinman, A., Davidson, K., & Carey, S. (2021)',
      venue: 'In Dionne, D. & Vidal Covas, L. (Eds.), <em>Proceedings of the 45th Annual Boston University Conference on Language Development</em> (pp. 360–373). Cascadilla Press',
      topics: ['learning', 'experimental'],
      links: {
        doi: 'https://www.lingref.com/bucld/45/BUCLD45-28.pdf',
        github: 'https://github.com/jasbi/negation_production/tree/master/BUCLD2020'
      },
      abstract: 'Previous research has proposed several stages for children’s production of negative morphemes. For example, Cameron-Faulkner, Lieven, and Theakston (2007) proposed that English negative morphemes appear with a no>not>n’t order in children’s speech. Klima and Bellugi (1966) proposed that negation first appears outside the sentence and later moves inside between the subject and the verb. They also proposed that can’t and don’t are learned as unanalyzed wholes before their positive auxiliary variants. However, comprehension studies have not provided evidence for such stages yet (Austin et al. 2014; Feiman et al. 2017; Reuter, Feiman, and Snedeker 2018). This discrepancy can be explained in two ways. First, the lack of evidence may be due to limitations in comprehension studies. Second, the proposed stages may be limited to production and not generalizable to comprehension. This paper presents two exploratory corpus studies that support the second possibility. The results suggest that some previous stage hypotheses do not hold generally and may be limited to a few children. Furthermore, stages that do hold across children may be limited to production only.',
      apa: 'Jasbi, M., McDermott-Hinman, A., Davidson, K., & Carey, S. (2021). Parents’ and children’s production of English negation. In D. Dionne & L. Vidal Covas (Eds.), Proceedings of the 45th Annual Boston University Conference on Language Development (pp. 360–373). Cascadilla Press.',
      bibtex: '@inproceedings{JasbiEtAl2021_BUCLD45,\n  author    = {Jasbi, M. and McDermott-Hinman, A. and Davidson, K. and Carey, S.},\n  title     = {Parents\' and Children\'s Production of English Negation},\n  booktitle = {Proceedings of the 45th Annual Boston University Conference on Language Development},\n  editor    = {Dionne, D. and Vidal Covas, L.},\n  publisher = {Cascadilla Press},\n  year      = {2021},\n  pages     = {360--373}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Lexicalization of quantificational forces in adverbial and determiner domains',
      authors: 'Alstott, J., & Jasbi, M. (2020)',
      venue: '<em>Proceedings of the Annual Meeting of the Cognitive Science Society</em>, 42',
      topics: ['theoretical', 'experimental'],
      links: { doi: 'https://escholarship.org/uc/item/2p908196' },
      abstract: 'Which quantificational forces do languages encode lexically?When a language features multiple quantificational scales(e.g. determiner and adverbial quantification), does the pat-tern of lexicalization of quantificational forces we discoverfor one scale correlate with those of other scales? We useEnglish as a first test case for examining these questions,adapting the basic ideas of Lewis (1975) into the hypothesisthat English lexical quantifiers unrelated to cardinal numbersor definite descriptions, determiner and adverbial alike, haveone of six quantificational forces. To begin to test this claimempirically, we elicited speaker interpretations of a range ofquantifiers in a web-based study. Dividing participants into anadverbial condition and a determiner condition, we gave acontext specifying a 100-day period and asked participants tojudge the quantificational force of quantified sentences denot-ing an individual’s daily activities during this period. Wefound evidence of cross-scale correspondences but fewerquantificational forces than expected. These results providepreliminary evidence for parts of our hypothesis but suggest aneed for future research that covers more lexical items, lan-guages, and quantificational scales.',
      apa: 'Alstott, J., & Jasbi, M. (2020). Lexicalization of quantificational forces in adverbial and determiner domains. Proceedings of the Annual Meeting of the Cognitive Science Society, 42.',
      bibtex: '@inproceedings{AlstottJasbi2020,\n  author    = {Alstott, J. and Jasbi, M.},\n  title     = {Lexicalization of Quantificational Forces in Adverbial and Determiner Domains},\n  booktitle = {Proceedings of the Annual Meeting of the Cognitive Science Society},\n  year      = {2020},\n  volume    = {42}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Linguistic Features for Readability Assessment',
      authors: 'Deutsch, T., Jasbi, M., & Shieber, S. (2020)',
      venue: '<em>Proceedings of the 15th Workshop on Innovative Use of NLP for Building Educational Applications (BEA 2020)</em>, pages 1–17. ACL',
      topics: ['computational'],
      links: { doi: 'https://aclanthology.org/2020.bea-1.1' },
      abstract: 'Readability assessment aims to automatically classify text by the level appropriate for learning readers. Traditional approaches to this task utilize a variety of linguistically motivated features paired with simple machine learning models. More recent methods have improved performance by discarding these features and utilizing deep learning models. However, it is unknown whether augmenting deep learning models with linguistically motivated features would improve performance further. This paper combines these two approaches with the goal of improving overall model performance and addressing this question. Evaluating on two large readability corpora, we find that, given sufficient training data, augmenting deep learning models with linguistically motivated features does not improve state-of-the-art performance. Our results provide preliminary evidence for the hypothesis that the state-of-the-art deep learning models represent linguistic features of the text related to readability. Future research on the nature of representations formed in these models can shed light on the learned features and their relations to linguistically motivated ones hypothesized in traditional approaches.',
      apa: 'Deutsch, T., Jasbi, M., & Shieber, S. (2020). Linguistic features for readability assessment. Proceedings of the 15th Workshop on Innovative Use of NLP for Building Educational Applications (BEA 2020), pages 1–17. Association for Computational Linguistics.',
      bibtex: '@inproceedings{DeutschJasbiShieber2020,\n  author    = {Deutsch, T. and Jasbi, M. and Shieber, S.},\n  title     = {Linguistic Features for Readability Assessment},\n  booktitle = {Proceedings of the 15th Workshop on Innovative Use of NLP for Building Educational Applications},\n  year      = {2020},\n  pages     = {1--17},\n  publisher = {Association for Computational Linguistics}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'The suffix that makes Farsi nouns unique',
      authors: 'Jasbi, M. (2020)',
      venue: 'In Larson, R. K., Moradi, S., & Samiian, V. (Eds.), <em>Advances in Iranian Linguistics</em> (pp. 107–118). John Benjamins',
      topics: ['theoretical'],
      links: { doi: 'https://doi.org/10.1075/cilt.351.06jas' },
      abstract: 'Although it is widely acknowledged that Tehrani Persian (often broadly labeled as Persian) has no dedicated marker of definiteness, the nominal suffix -e has been analyzed as a colloquial definiteness marker. Here I show that -e can mark bare nominals to ensure a definite interpretation, but it can also appear on indefinites marked by the indefinite determiner ye. I show that indefinites marked by -e are scopally inert. To unify the effect of -e on definites and indefinites, I propose that -e introduces a uniqueness implication on the nominal it modifies. More specifically, N-e denotes a singleton set of objects. On a bare nominal, this uniqueness implication ensures a definite interpretation. On an indefinite, it restricts the domain of quantification to a singleton, making the indefinite scopally inert. I present a compositional account of definite and indefinite constructions with -e in Tehrani Persian.',
      apa: 'Jasbi, M. (2020). The suffix that makes Farsi nouns unique. In R. K. Larson, S. Moradi, & V. Samiian (Eds.), Advances in Iranian Linguistics (pp. 107–118). John Benjamins. https://doi.org/10.1075/cilt.351.06jas',
      bibtex: '@incollection{Jasbi2020_suffix,\n  author    = {Jasbi, M.},\n  title     = {The Suffix That Makes Farsi Nouns Unique},\n  booktitle = {Advances in Iranian Linguistics},\n  editor    = {Larson, R. K. and Moradi, S. and Samiian, V.},\n  publisher = {John Benjamins},\n  year      = {2020},\n  pages     = {107--118},\n  doi       = {10.1075/cilt.351.06jas}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'The meaning of the Farsi object marker “ra”',
      authors: 'Jasbi, M. (2020)',
      venue: 'In Larson, R. K., Moradi, S., & Samiian, V. (Eds.), <em>Advances in Iranian Linguistics</em>. John Benjamins',
      topics: ['theoretical'],
      links: { doi: 'https://doi.org/10.1075/cilt.351.07jas' },
      abstract: 'The Persian object marker rā is called many things, among them: marker of specificity (Karimi 1990), definiteness (Mahootian 1997), secondary topics (Dabir-Moghaddam 1992), and presuppositions (Ghomeshi 1996). These accounts capture the core of what rā is, yet also include a lot of what rā is not. I report novel examples that show rā is not an (exclusive) marker of specific or definite referents. It is also not an (exclusive) marker of (secondary) topics. Instead, rā’s core contribution is something shared by all these accounts: old or presupposed information. I show that the information presupposed by rā is an existence implication. A marked object like sandali-ro (“chair”-rā) implies that there is one or more chairs in the conversational context. This account captures several novel observations on the distribution of rā such as its optional presence on proper names in some contexts. I provide a formal and compositional analysis of simple Persian sentences with definite and indefinite objects.',
      apa: 'Jasbi, M. (2020). The meaning of the Farsi object marker “ra.” In R. K. Larson, S. Moradi, & V. Samiian (Eds.), Advances in Iranian Linguistics. John Benjamins. https://doi.org/10.1075/cilt.351.07jas',
      bibtex: '@incollection{Jasbi2020_ra,\n  author    = {Jasbi, M.},\n  title     = {The Meaning of the Farsi Object Marker "ra"},\n  booktitle = {Advances in Iranian Linguistics},\n  editor    = {Larson, R. K. and Moradi, S. and Samiian, V.},\n  publisher = {John Benjamins},\n  year      = {2020},\n  doi       = {10.1075/cilt.351.07jas}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Some Unique Semantic Properties of Persian',
      authors: 'Jasbi, M. (2020)',
      venue: 'In Shabani-Jadidi, P. (Ed.), <em>The Routledge Handbook of Second Language Acquisition and Pedagogy of Persian</em>. Routledge',
      topics: ['theoretical'],
      links: {},
      abstract: '',
      apa: 'Jasbi, M. (2020). Some unique semantic properties of Persian. In P. Shabani-Jadidi (Ed.), The Routledge Handbook of Second Language Acquisition and Pedagogy of Persian. Routledge.',
      bibtex: '@incollection{Jasbi2020_Persian,\n  author    = {Jasbi, M.},\n  title     = {Some Unique Semantic Properties of Persian},\n  booktitle = {The Routledge Handbook of Second Language Acquisition and Pedagogy of Persian},\n  editor    = {Shabani-Jadidi, P.},\n  publisher = {Routledge},\n  year      = {2020}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Linking hypothesis and number of response options modulate inferred scalar implicature rate',
      authors: 'Jasbi, M., Waldon, B., & Degen, J. (2019)',
      venue: '<em>Frontiers in Psychology</em>, 10',
      topics: ['experimental'],
      links: {
        doi: 'https://doi.org/10.3389/fpsyg.2019.00189',
        github: 'https://github.com/thegricean/si-paradigms'
      },
      abstract: 'The past 15 years have seen increasing experimental investigations of core pragmatic questions in the ever more active and lively field of experimental pragmatics. Within experimental pragmatics, many of the core questions have relied on the operationalization of the theoretical notion of “implicature rate.” Implicature rate based results have informed the work on acquisition, online processing, and scalar diversity, inter alia. Implicature rate has typically been quantified as the proportion of “pragmatic” judgments in two-alternative forced choice truth value judgment tasks. Despite its theoretical importance, this linking hypothesis from implicature rate to behavioral responses has never been extensively tested. Here we show that two factors dramatically affect the “implicature rate” inferred from truth value judgment tasks: (a) the number of responses provided to participants; and (b) the linking hypothesis about what constitutes a “pragmatic” judgment. We argue that it is time for the field of experimental pragmatics to engage more seriously with its foundational assumptions about how theoretical notions map onto behaviorally measurable quantities, and present a sketch of an alternative linking hypothesis that derives behavior in truth value judgment tasks from probabilistic utterance expectations.',
      apa: 'Jasbi, M., Waldon, B., & Degen, J. (2019). Linking hypothesis and number of response options modulate inferred scalar implicature rate. Frontiers in Psychology, 10. https://doi.org/10.3389/fpsyg.2019.00189',
      bibtex: '@article{JasbiWaldonDegen2019,\n  author  = {Jasbi, M. and Waldon, B. and Degen, J.},\n  title   = {Linking Hypothesis and Number of Response Options Modulate Inferred Scalar Implicature Rate},\n  journal = {Frontiers in Psychology},\n  year    = {2019},\n  volume  = {10},\n  doi     = {10.3389/fpsyg.2019.00189}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Learning disjunction',
      authors: 'Jasbi, M. (2018)',
      venue: 'Doctoral dissertation, Stanford University',
      topics: ['learning', 'theoretical', 'experimental', 'computational'],
      links: {
        doi: 'http://purl.stanford.edu/qz846xz9663',
        github: 'https://github.com/jasbi/jasbi_dissertation'
      },
      abstract: 'To understand language, we rely on mental representations of words and their meanings. What constitutes these representations? How are they learned? To address these questions, I investigate how children learn and interpret the disjunction word "or". The highly abstract and context-dependent interpretation of or challenges word learning theories and provides an exceptional opportunity to better understand how words are associated with their meanings. "Or" has several interpretations, including exclusive and inclusive disjunction. Inclusive disjunction holds when A is true, B is true, or both. For example, a waiter may ask if you would like something to eat or drink, not excluding the possibility that you choose both. Exclusive disjunction is true when only A is true, or only B is true, but not both. If the waiter later asks whether you would like to see the dessert menu or have the check, his "or" is most likely interpreted as exclusive. He is suggesting that you should choose one or the other. Given these complexities in the interpretation of "or", how do children learn it? A previous study has shown that when parents talk to their children, the majority of "or"-examples they use are exclusive. I present an annotation study on parents\' speech to children that replicated this finding. Nevertheless, comprehension studies have found that preschool children understand the inclusive interpretation of disjunction around four years of age. In an experimental study with a novel paradigm, I replicated this finding in simple existential sentences. These two findings lead to a puzzle in the literature: How can children learn the inclusive interpretation of "or" if they rarely hear it? I argue that this puzzle arises in models of word learning that directly map words to their meanings, thereby ignoring accompanying linguistic and conceptual cues. I present an in-depth annotation study demonstrating that exclusive interpretations correlate with contextual cues (such as intonation and the semantic relation of the alternatives "or" combines with) in children\'s input. Applying supervised learning techniques to the annotated data, I found that a learner who makes use of these contextual cues can learn the inclusive as well as exclusive interpretation of disjunction from the language heard. These findings indicate that the representation of a word like "or" cannot be isolated from the linguistic and conceptual environment in which it appears. The linguistic and conceptual aspects of "or"\'s environment can act as cues that aid its acquisition and interpretation. Together, these studies show that learning a function word like "or" requires richer lexical representations than are currently assumed by our theories of word learning.',
      apa: 'Jasbi, M. (2018). Learning disjunction [Doctoral dissertation, Stanford University]. http://purl.stanford.edu/qz846xz9663',
      bibtex: '@phdthesis{Jasbi2018_dissertation,\n  author = {Jasbi, M.},\n  title  = {Learning Disjunction},\n  school = {Stanford University},\n  year   = {2018},\n  url    = {http://purl.stanford.edu/qz846xz9663}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Conceptual and Prosodic Cues in Child-directed Speech can Help Children Learn the Meaning of Disjunction',
      authors: 'Jasbi, M., Jaggi, A., & Frank, M. C. (2018)',
      venue: '<em>Proceedings of the Annual Meeting of the Cognitive Science Society</em>, 40',
      topics: ['learning', 'computational'],
      links: {
        doi: 'https://escholarship.org/uc/item/0bz8t9cc',
        github: 'https://github.com/jasbi/JasbiJaggiFrank_cogsci2018'
      },
      abstract: 'At first glance, children’s word learning appears to be mostly a problem of learning words like dog and run. However, it is small words like and and or that enable the construction of complex combinatorial language. How do children learn the meaning of these function words? Using transcripts of parent- child interactions, we investigate the cues in child-directed speech that can inform the interpretation and acquisition of the connective or which has a particularly challenging semantics. Study 1 finds that, despite its low overall frequency, children can use or close to parents’ rate by age 4, in some speech acts. Study 2 uses annotations of a subset of parent-child interac- tions to show that disjunctions in child-directed speech are ac- companied by reliable cues to the correct interpretation (ex- clusive vs. inclusive). We present a decision-tree model that learns from a handful of annotated examples to correctly pre- dict the interpretation of a disjunction. These studies suggest that conceptual and prosodic cues in child-directed speech can provide information for the acquisition of functional categories like disjunction.',
      apa: 'Jasbi, M., Jaggi, A., & Frank, M. C. (2018). Conceptual and prosodic cues in child-directed speech can help children learn the meaning of disjunction. Proceedings of the Annual Meeting of the Cognitive Science Society, 40.',
      bibtex: '@inproceedings{JasbiJaggiFrank2018,\n  author    = {Jasbi, M. and Jaggi, A. and Frank, M. C.},\n  title     = {Conceptual and Prosodic Cues in Child-directed Speech Can Help Children Learn the Meaning of Disjunction},\n  booktitle = {Proceedings of the Annual Meeting of the Cognitive Science Society},\n  year      = {2018},\n  volume    = {40}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'The Semantics and Pragmatics of Logical Connectives: Adults’ and Children’s Interpretations of And and Or in a Guessing Game',
      authors: 'Jasbi, M., & Frank, M. C. (2017)',
      venue: '<em>Proceedings of the Annual Meeting of the Cognitive Science Society</em>, 39',
      topics: ['experimental', 'learning'],
      links: {
        doi: 'https://escholarship.org/uc/item/1t0472h6',
        github: 'https://github.com/jasbi/cogsci2017'
      },
      abstract: 'The development of the ubiquitous logical connectives and andor provides a window into the role of semantics and pragmat-ics in children’s linguistic development. Previous research hassuggested that adults and children might differ in their interpre-tation of or in two ways. First, unlike adults, children mightinterpret or as logical conjunction, akin to and. Second, chil-dren might interpret or as inclusive disjunction while adultsinterpret it as exclusive. We report experimental studies thatprobe interpretations of and and or in adults and children us-ing truth value judgements as well as children’s spontaneouslinguistic feedback. Both truth judgements and linguistic feed-back showed that four-year-olds do not interpret or as and.While children’s truth judgments suggested that they did notderive exclusivity implicatures, however, their corrective feed-back showed signs of sensitivity to the implicature, suggestingthat the truth value judgement task could have underestimatedchildren’s pragmatic competence. More generally, four-year-olds’ interpretation of logical connectives may not be as differ-ent from adults as previously supposed.',
      apa: 'Jasbi, M., & Frank, M. C. (2017). The semantics and pragmatics of logical connectives: Adults’ and children’s interpretations of and and or in a guessing game. Proceedings of the Annual Meeting of the Cognitive Science Society, 39.',
      bibtex: '@inproceedings{JasbiFrank2017,\n  author    = {Jasbi, M. and Frank, M. C.},\n  title     = {The Semantics and Pragmatics of Logical Connectives: Adults\' and Children\'s Interpretations of And and Or in a Guessing Game},\n  booktitle = {Proceedings of the Annual Meeting of the Cognitive Science Society},\n  year      = {2017},\n  volume    = {39}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'Three types of indefinites in Persian: Simple, Complex, and Antidefinite',
      authors: 'Jasbi, M.  (2016)',
      venue: 'In Moroney, M., Little, C.-R., Burgdorf, D., & Collard, J. (Eds.), <em>Proceedings of Semantics and Linguistic Theory 26</em> (pp. 244–263). CLC Publications',
      topics: ['theoretical'],
      links: { doi: 'https://doi.org/10.3765/salt.v26i0.3807' },
      abstract: 'This paper investigates three indefinite constructions in Persian: simple (ye-NP), complex (ye-NP-i), and antidefinite (NP-i). It shows that simple indefinites with the determiner ye carry an at-issue existence implication, similar to their English counterpart with the indefinite determiner a(n). Complex indefinites with both ye and -i introduce an antisingleton implication, similar to Spanish indefinites with alguién. Antidefinites with only the clitic -i are a novel category which trigger a projective non-uniqueness implication. The paper provides a compositional account in which the antisingleton implication of complex indefinites is derived from the existence implication of the determiner "ye" and the non-uniqueness implication of the clitic "-i". The predictions of this account as well as the pragmatic effects of complex indefinites such as ignorance, indifference, free choice, and domain widening implications are discussed. ',
      apa: 'Jasbi, M. (2016). Three types of indefinites in Persian: Simple, complex, and antidefinite. In M. Moroney, C.-R. Little, D. Burgdorf, & J. Collard (Eds.), Proceedings of Semantics and Linguistic Theory 26 (pp. 244–263). CLC Publications. https://doi.org/10.3765/salt.v26i0.3807',
      bibtex: '@inproceedings{Jasbi2016_SALT26,\n  author    = {Jasbi, M.},\n  title     = {Three Types of Indefinites in Persian: Simple, Complex, and Antidefinite},\n  booktitle = {Proceedings of Semantics and Linguistic Theory 26},\n  editor    = {Moroney, M. and Little, C.-R. and Burgdorf, D. and Collard, J.},\n  publisher = {CLC Publications},\n  year      = {2016},\n  pages     = {244--263},\n  doi       = {10.3765/salt.v26i0.3807}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'The Acquisition of Projective Content: Children’s comprehension of the English presupposition trigger “too”',
      authors: 'Jasbi, M. (2016)',
      venue: 'In Scott, J. & Waughtal, D. (Eds.), <em>The 40th Annual Boston University Conference on Language Development Online Proceedings Supplement</em>',
      topics: ['learning', 'experimental'],
      links: { pdf: 'http://www.bu.edu/bucld/files/2016/09/jasbi_bucld40.pdf' },
      abstract: '',
      apa: 'Jasbi, M. (2016). The acquisition of projective content: Children’s comprehension of the English presupposition trigger “too.” In J. Scott & D. Waughtal (Eds.), The 40th Annual Boston University Conference on Language Development Online Proceedings Supplement.',
      bibtex: '@inproceedings{Jasbi2016_BUCLD40,\n  author    = {Jasbi, M.},\n  title     = {The Acquisition of Projective Content: Children\'s Comprehension of the English Presupposition Trigger "too"},\n  booktitle = {The 40th Annual Boston University Conference on Language Development Online Proceedings Supplement},\n  editor    = {Scott, J. and Waughtal, D.},\n  year      = {2016}\n}',
      firstPage: false
    },
    {
      section: 'published',
      title: 'The Semantics of Differential Object Marking in Persian',
      authors: 'Jasbi, M. (2014)',
      venue: 'Qualifying Paper, Stanford University',
      topics: ['theoretical'],
      links: { pdf: 'research/persian_dom_semantics_draft.pdf' },
      abstract: '',
      apa: 'Jasbi, M. (2014). The semantics of differential object marking in Persian. Qualifying Paper, Stanford University.',
      bibtex: '@unpublished{Jasbi2014_DOM,\n  author = {Jasbi, M.},\n  title  = {The Semantics of Differential Object Marking in Persian},\n  note   = {Qualifying Paper, Stanford University},\n  year   = {2014}\n}',
      firstPage: false
    }

  ]; // end papers
