function education() {
	const educationArr = [
		{
			school: "Nanyang Junior College",
			subjects:
				"GCE 'A' Level H2 Physics, H2 Computing, H2 Mathematics, H2 Economics, H1 General Paper, H1 Project Work, H1 Chinese",
			timeperiod: "Jan 2021 - Dec 2022",
			grade: "AAA/A, 6 Distinctions",
			activities: [
				"NYJC Biz Club",
				"NYJC Galileo Talent Development Programme 2021-2022",
				"NYJC Braddell-Heights Community Leadership Programme: Organiser",
			],
			awards: [
				"JC2 Honour Roll",
				"Oxford University Computing Challenge (OUCC) 2022 - Certificate of Distinction",
				"Computational and Algorithmic Thinking (CAT) 2022 - Certificate of Credit",
				"Junior Achievement (JA) Singapore Company of The Year (COY) Competition 2022 - 2nd Runner-Up",
				"Australian Mathematics Competition (AMC) 2021 - Certificate of Credit",
			],
		},
		{
			school: "Xinmin Secondary School",
			subjects:
				"GCE 'O' Level Additional Mathematics, Ordinary Mathematics, Pure Chemistry, Pure Physics, Computing, Combined Humanities (SS/Elective History), Chinese, English",
			timeperiod: "Jan 2017 - Dec 2020",
			grade: "L1R4: 5, L1R5: 7, 8 Distinctions",
			activities: [
				"Media Club (AVA Department) - Administrative Manager",
			],
			awards: [
				"Singapore Mathematics Project Festival 2020 - Honourable Mention",
			],
		},
	];

	const educationDoc = document.getElementById("education");
	const h1 = document.createElement("h1");
	h1.innerHTML = "Education";
	educationDoc.appendChild(h1);

	for (var item of educationArr) {
		// school as h2
		const h2 = document.createElement("h2");
		h2.innerHTML = item["school"];
		educationDoc.appendChild(h2);

		// subj, timeperiod n grade as h3
		const generalh3 = document.createElement("h3");
		generalh3.innerHTML = "Time of study: " + item["timeperiod"];
		generalh3.innerHTML += "<br>Subjects taken: " + item["subjects"];
		generalh3.innerHTML += "<br>Grade: " + item["grade"];
		educationDoc.appendChild(generalh3);

		// activities as h3 + unordered list of list item
		const activitiesh3 = document.createElement("h3");
		activitiesh3.innerHTML += "Activities";
		educationDoc.appendChild(activitiesh3);

		const activitiesul = document.createElement("ul");
		for (var award of item["activities"]) {
			var activitiesli = document.createElement("li");
			activitiesli.innerHTML = award;
			activitiesul.appendChild(activitiesli);
		}
		educationDoc.appendChild(activitiesul);

		// awards as h3 + unordered list of list item
		const awardsh3 = document.createElement("h3");
		awardsh3.innerHTML += "Awards";
		educationDoc.appendChild(awardsh3);

		const awardsul = document.createElement("ul");
		for (var award of item["awards"]) {
			var awardsli = document.createElement("li");
			awardsli.innerHTML = award;
			awardsul.appendChild(awardsli);
		}
		educationDoc.appendChild(awardsul);
	}

	return educationDoc;
}

education();
