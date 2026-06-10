export interface HomeFaq {
	q: string;
	a: string;
	open?: boolean;
}

export const homeFaqs: HomeFaq[] = [
	{
		q: "Which maths courses do you teach?",
		a: "IB, Cambridge IGCSE & A-Level, Further Maths, NCEA, and US courses including AP Calculus and SAT maths, plus general high-school mathematics and selected university-level topics.",
		open: true,
	},
	{
		q: "Do you teach both IB Maths AA and AI?",
		a: "Yes. I teach Analysis & Approaches and Applications & Interpretation at both Standard and Higher Level. The majority of my tutoring has been IB mathematics.",
	},
	{
		q: "Do you teach Further Mathematics?",
		a: "Yes, including the harder A-Level Further content. It is taught carefully and at the pace the material genuinely needs.",
	},
	{
		q: "How does the free intro lesson work?",
		a: "It is a free 30-minute online session to talk through where the student is now, what they are aiming for, and whether the tutoring approach is a good fit. There is no obligation to continue afterwards.",
	},
	{
		q: "Do you offer lesson packages?",
		a: "Yes. Single lessons are $50 per hour, or a 6-hour package is $250, which saves $50 compared with booking six individual hours.",
	},
	{
		q: "Do you help with exam preparation?",
		a: "Yes. Past papers, technique, timing and exam temperament are a core part of the work in the run-up to exams.",
	},
	{
		q: "Do you teach university students?",
		a: "For selected topics, yes, particularly calculus, statistics, economics and finance. If you are unsure whether your topic fits, ask in the intro.",
	},
	{
		q: "What if my child has lost confidence in maths?",
		a: "That is one of the most common reasons families get in touch. We rebuild confidence quietly, starting from what the student does understand and working outward without making them feel small for struggling.",
	},
];
