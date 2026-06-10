export interface SubjectPage {
	slug: string;
	title: string;
	navLabel: string;
	metaTitle: string;
	description: string;
	eyebrow: string;
	heroTitle: string;
	heroBody: string;
	bestFor: string[];
	painPoints: string[];
	outcomes: string[];
	faqs: {
		q: string;
		a: string;
	}[];
}

export const subjectPages: SubjectPage[] = [
	{
		slug: "ib-maths-tutor",
		title: "IB Mathematics Tutoring",
		navLabel: "IB Maths",
		metaTitle: "IB Maths Tutor Online | AA, AI, SL and HL | First Principles",
		description:
			"Online IB Maths tutoring for AA, AI, SL and HL students. Build understanding, close gaps, and prepare properly for exams with Harry Whateley.",
		eyebrow: "IB AA · AI · SL · HL",
		heroTitle: "IB Maths tutoring that makes the syllabus feel connected.",
		heroBody:
			"IB Maths becomes much easier when algebra, functions, calculus, statistics and exam technique stop feeling like separate islands. We work from the underlying ideas, then apply them to the exact style of IB questions students actually face.",
		bestFor: [
			"Students choosing between AA and AI",
			"HL students who need depth, not shortcuts",
			"SL students aiming to rebuild confidence before exams",
			"International students who need clear online support",
		],
		painPoints: [
			"Following class examples but freezing on unfamiliar past-paper questions",
			"Knowing procedures without understanding why they work",
			"Carrying algebra or function gaps into calculus and statistics",
		],
		outcomes: [
			"A clearer map of the IB syllabus",
			"Better first steps on unfamiliar questions",
			"More deliberate past-paper practice",
			"Calmer exam preparation built around real weaknesses",
		],
		faqs: [
			{
				q: "Do you teach both IB Maths AA and AI?",
				a: "Yes. I teach Analysis & Approaches and Applications & Interpretation at both SL and HL.",
			},
			{
				q: "Can you help near exam time?",
				a: "Yes, but the work is most effective when we quickly identify the highest-value gaps and practise past-paper questions deliberately.",
			},
			{
				q: "Do you help with Internal Assessment?",
				a: "I can help students understand mathematical ideas, structure their thinking, and improve clarity while staying within academic honesty rules.",
			},
		],
	},
	{
		slug: "a-level-maths-tutor",
		title: "Cambridge and A-Level Maths Tutoring",
		navLabel: "A-Level",
		metaTitle: "A-Level Maths Tutor Online | Cambridge, IGCSE, AS and A-Level",
		description:
			"Online Cambridge and A-Level Maths tutoring for IGCSE, AS and A-Level students who want clearer explanations and stronger exam technique.",
		eyebrow: "IGCSE · AS · A-Level",
		heroTitle: "A-Level Maths tutoring for students who want the ideas to click.",
		heroBody:
			"Strong A-Level work depends on fluency with algebra, functions, trigonometry, calculus and probability. We slow down where the logic matters, then speed up through targeted exam practice.",
		bestFor: [
			"Cambridge IGCSE students preparing for the jump to AS",
			"AS and A-Level students who need more than memorised methods",
			"Students retaking modules or trying to raise predicted grades",
			"Parents looking for structured online support",
		],
		painPoints: [
			"Small algebra errors costing marks across the paper",
			"Calculus methods feeling mechanical or disconnected",
			"Past-paper questions looking different from textbook exercises",
		],
		outcomes: [
			"Stronger algebraic control",
			"Clearer understanding of core methods",
			"More reliable exam technique",
			"A practical plan for revision and past papers",
		],
		faqs: [
			{
				q: "Which A-Level boards do you support?",
				a: "I support Cambridge and the major A-Level pathways, with lessons adapted to the student's specification and exam style.",
			},
			{
				q: "Can lessons focus only on past papers?",
				a: "Yes, although the best past-paper work usually includes stepping back to repair the concept behind repeated mistakes.",
			},
			{
				q: "Do you teach IGCSE students?",
				a: "Yes. IGCSE is often the best time to strengthen foundations before A-Level becomes more abstract.",
			},
		],
	},
	{
		slug: "further-maths-tutor",
		title: "Further Maths Tutoring",
		navLabel: "Further Maths",
		metaTitle: "Further Maths Tutor Online | Careful Support for Advanced Students",
		description:
			"Online Further Maths tutoring for advanced students who need careful explanations, deeper understanding, and focused exam preparation.",
		eyebrow: "Advanced maths",
		heroTitle: "Further Maths tutoring that respects the difficulty of the material.",
		heroBody:
			"Further Maths is not just more content; it asks students to think more flexibly and tolerate harder problems. The work here is patient, precise and honest about what genuinely needs time.",
		bestFor: [
			"High-performing students taking on harder material",
			"Students aiming for competitive university pathways",
			"Students who understand class but struggle with challenge questions",
			"Learners who want the structure behind advanced methods",
		],
		painPoints: [
			"Hard questions requiring several ideas at once",
			"Proof, vectors, matrices or complex numbers feeling abstract",
			"Confidence dropping because easy marks are no longer enough",
		],
		outcomes: [
			"More resilient problem-solving habits",
			"Clearer links between advanced topics",
			"Better handling of multi-step questions",
			"More realistic, structured revision",
		],
		faqs: [
			{
				q: "Is Further Maths suitable for online tutoring?",
				a: "Yes. With a tablet, shared working and careful pacing, online lessons work very well for advanced mathematics.",
			},
			{
				q: "Can you help a student who is already strong?",
				a: "Yes. Strong students often benefit most from sharper explanations, better problem selection and more disciplined review.",
			},
			{
				q: "Do you cover university-level topics?",
				a: "For selected topics, yes. The free intro is the best place to check whether the topic is a good fit.",
			},
		],
	},
	{
		slug: "ncea-maths-tutor",
		title: "NCEA Maths Tutoring",
		navLabel: "NCEA",
		metaTitle: "NCEA Maths Tutor Online | Levels 1-3 Calculus and Statistics",
		description:
			"Online NCEA Maths tutoring for Levels 1-3, including calculus and statistics standards, confidence rebuilding, and exam preparation.",
		eyebrow: "NCEA Levels 1-3",
		heroTitle: "NCEA Maths tutoring for confidence, standards and exams.",
		heroBody:
			"NCEA students often need two things at once: help with the immediate standard and a stronger base for what comes next. We work on both, so tutoring helps beyond the next assessment.",
		bestFor: [
			"Students preparing for Level 1, 2 or 3 assessments",
			"Students choosing between calculus and statistics pathways",
			"Parents who want clear, calm support",
			"Students who have lost confidence in maths",
		],
		painPoints: [
			"Understanding the topic in class but losing marks in assessments",
			"Gaps from earlier years making current standards harder",
			"Uncertainty about calculus, statistics or future subject choices",
		],
		outcomes: [
			"Clearer understanding of each standard",
			"More confident assessment preparation",
			"Stronger foundations for the next level",
			"Better communication about what to practise next",
		],
		faqs: [
			{
				q: "Do you teach NCEA calculus and statistics?",
				a: "Yes. I support NCEA Levels 1-3, including calculus and statistics achievement standards.",
			},
			{
				q: "Can you help before an internal assessment?",
				a: "Yes. Short-term support can help, especially when we focus on the standard, common errors and the student's specific gaps.",
			},
			{
				q: "Do you work with students in New Zealand time zones?",
				a: "Yes. Lessons are online, and scheduling can be arranged around New Zealand and international students.",
			},
		],
	},
	{
		slug: "ap-calculus-sat-maths-tutor",
		title: "AP Calculus and SAT Maths Tutoring",
		navLabel: "AP & SAT",
		metaTitle: "AP Calculus and SAT Maths Tutor Online | International Students",
		description:
			"Online AP Calculus, SAT Maths and international high-school maths tutoring with clear explanations, exam practice and patient support.",
		eyebrow: "AP · SAT · International",
		heroTitle: "Online maths tutoring for AP, SAT and international students.",
		heroBody:
			"International students often need support that adapts to their course, timezone and exam system. Lessons focus on the ideas underneath the method, then turn that understanding into better performance on timed questions.",
		bestFor: [
			"AP Calculus AB or BC students",
			"Students preparing for SAT Maths",
			"International students studying in English",
			"Students moving between school systems",
		],
		painPoints: [
			"Timed test questions creating pressure even when the topic is familiar",
			"Weak algebra slowing down calculus or functions",
			"Different curricula leaving gaps after a school move",
		],
		outcomes: [
			"More fluent algebra and function work",
			"Clearer calculus foundations",
			"Better timing and test habits",
			"A tutoring plan adapted to the student's school system",
		],
		faqs: [
			{
				q: "Do you teach AP Calculus AB and BC?",
				a: "Yes. Lessons can focus on conceptual understanding, homework support, exam review or targeted practice.",
			},
			{
				q: "Can you help with SAT Maths timing?",
				a: "Yes. SAT support usually combines content repair, strategy and repeated practice under realistic time pressure.",
			},
			{
				q: "Do you work with students outside New Zealand?",
				a: "Yes. Tutoring is online and built for students in different countries and school systems.",
			},
		],
	},
	{
		slug: "online-maths-tutor-for-parents",
		title: "Online Maths Tutoring for Parents",
		navLabel: "For parents",
		metaTitle: "Online Maths Tutor for Parents | Clear Support for Struggling Students",
		description:
			"Clear online maths tutoring for parents looking for patient, experienced support for a child who is stuck, anxious, or preparing for exams.",
		eyebrow: "For parents",
		heroTitle: "Maths support that helps students feel capable again.",
		heroBody:
			"When a student has lost confidence, more pressure rarely helps. The first job is to find what is missing, explain it without shame, and rebuild enough trust that they can try again.",
		bestFor: [
			"Parents whose child has started saying they are bad at maths",
			"Students who avoid homework because it feels overwhelming",
			"Families preparing for exams or subject choices",
			"Parents who want honest feedback after lessons",
		],
		painPoints: [
			"Your child understands in the lesson but cannot start alone",
			"Homework turns into stress at home",
			"You are unsure whether the issue is confidence, gaps or exam technique",
		],
		outcomes: [
			"A calmer explanation of what is actually going wrong",
			"Lessons that start from the student's current understanding",
			"Clear priorities instead of vague extra work",
			"More confidence and independence over time",
		],
		faqs: [
			{
				q: "Will you tell me how my child is going?",
				a: "Yes. Parents can get honest, practical feedback about what we worked on and what should happen next.",
			},
			{
				q: "What if my child is embarrassed about needing help?",
				a: "That is very common. Lessons are calm and respectful, with no shaming for gaps or mistakes.",
			},
			{
				q: "Is the free intro for parents or students?",
				a: "It can include either or both. The goal is to understand the situation and decide whether the tutoring fit is right.",
			},
		],
	},
];

export const featuredSubjectPages = subjectPages.slice(0, 4);
