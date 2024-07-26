function volunteer() {
	const volunteerArr = [
		{
			organisation: "Advisory Singapore",
			role: "Web Developer",
			timeperiod: "June 2023 - Present",
			workDescription:
				"Worked on various issues and generated pull requests for Advisory's Mentorship Page<br>Made use of ReactJS, NextJS, Javascript, HTML, CSS, and Elasticsearch while working on the issues.",
			organisationDescription:
				"Advisory is a fully youth-led nonprofit dedicated to empowering young Singaporeans to make informed career and further education choices. By breaking down the barriers to access that young people face in finding out about their fields of interest, Advisory hopes to create a level playing field and support youth to pursue their passions. Advisory is funded by the National Youth Fund, supported by major organisations like the National Youth Council and Young NTUC, and is an affiliate of Youth Corps Singapore. Advisory’s work has been featured by Prime Minister Lee Hsien Loong and Senior Parliamentary Secretary Baey Yam Keng, as well as prominent media outlets like Channel NewsAsia, The Straits Times, Youth.SG, Berita, Rice Media, The Smart Local, Lianhe Zaobao and Lianhe Wanbao.Advisory is a fully youth-led nonprofit dedicated to empowering young Singaporeans to make informed career and further education choices. By breaking down the barriers to access that young people face in finding out about their fields of interest, Advisory hopes to create a level playing field and support youth to pursue their passions. Advisory is funded by the National Youth Fund, supported by major organisations like the National Youth Council and Young NTUC, and is an affiliate of Youth Corps Singapore. Advisory’s work has been featured by Prime Minister Lee Hsien Loong and Senior Parliamentary Secretary Baey Yam Keng, as well as prominent media outlets like Channel NewsAsia, The Straits Times, Youth.SG, Berita, Rice Media, The Smart Local, Lianhe Zaobao and Lianhe Wanbao.",
		},
	];

	const volunteerDoc = document.getElementById("volunteer");
	const h1 = document.createElement("h1");
	h1.innerHTML = "Volunteer";
	volunteerDoc.appendChild(h1);

	for (var item of volunteerArr) {
		// organisation as h2
		const h2 = document.createElement("h2");
		h2.innerHTML = item["organisation"];
		volunteerDoc.appendChild(h2);

		// roles and timeperiod as h3
		const generalh3 = document.createElement("h3");
		generalh3.innerHTML = "Role: " + item["role"];
		generalh3.innerHTML += "<br>Time of volunteer: " + item["timeperiod"];
		volunteerDoc.appendChild(generalh3);

		const p = document.createElement("p");
		p.innerHTML = "Description: " + item["workDescription"];
		p.innerHTML += "<br><br>" + item["organisationDescription"];

		volunteerDoc.appendChild(p);
	}

	return volunteerDoc;
}

volunteer();
