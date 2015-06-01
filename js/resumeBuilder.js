var bio = {
	"name" : "Marc-Antoine Vadnais",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "514-652-4417",
		"email" : "ma_vadnais@hotmail.com",
		"github" : "mavadnais",
		"twitter" : "@mavadnais",
		"location" : "Montreal"
	},
	"welcomeMessage" : "Hi, Welcome to my resume", 
    "skills" : ["Awesomeness", "Web Development", "Programming", "C++", "Java", "Javascript"],
    "biopic" : "images/me.jpg",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMessage);

		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

		if (this.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkills;
			for (var i = 0; i < this.skills.length; i++) {
				formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
				$("#skills").append(formattedSkills);
			}
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Feedbacc Studios",
			"title" : "Independent Game Developer",
			"location" : "Montreal",
			"dates" : "February 2011 - Present",
			"description" : "Created the iOS game titled FCRC: Flying Car Racing Championship, for the Apple App Store: http://www.feedbaccstudios.com"
		},
		{
			"employer" : "DTI Software",
			"title" : "Integration Programmer",
			"location" : "Montreal",
			"dates" : "November 2007 - January 2011",
			"description" : "Integrated many games (including Tetris, Bejeweled, Street Fighter 2, ...) to run on a wide variety of In-Flight Entertainment consoles (Mas2k, Mas3k, eFX, eX2, EVU, Thales, Archos, ...)."
		},
		{
			"employer" : "CGI",
			"title" : "Unix Systems Administrator",
			"location" : "Montreal",
			"dates" : "July 2005 - November 2007",
			"description" : "Saw to the proper functioning of many AIX systems for a variety of clients (Yellow Pages, Desjardins, Metro)."
		}
	],
	"display" : function() {
		for (var job in this.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "McGill University",
			"location" : "Montreal",
			"degree" : "Bachelor of Arts",
			"majors" : ["Foundations of Computing"],
			"dates" : 2005,
			"url" : "https://www.mcgill.ca/"
		},
		{
			"name" : "The Arts Institute at Bournemouth",
			"location" : "Bournemouth",
			"degree" : "Bachelor of Arts",
			"majors" : ["Film and Animation"],
			"dates" : 2002,
			"url" : "http://aub.ac.uk/"
		},
		{
			"name" : "The Arts Institute at Bournemouth",
			"location" : "Bournemouth",
			"degree" : "BTEC",
			"majors" : ["Foundation in Art and Design"],
			"dates" : 1999,
			"url" : "http://aub.ac.uk/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Nanodegree in Front-End Web Development",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/"
		}
	],
	"display" : function() {
		for (var school in this.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			for (var major in this.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
			var formattedURL = HTMLonlineURL.replace("%data%", this.schools[school].url);
			$(".education-entry:last").append(formattedURL);
		}
		if (this.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (var onlineCourse in this.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
				$(".education-entry:last").append(formattedTitle + formattedSchool);
				var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].date);
				$(".education-entry:last").append(formattedDates);
				var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
				$(".education-entry:last").append(formattedURL);
			}
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "FCRC: Flying Car Racing Championship",
			"dates" : "February 2011 - October 2014",
			"description" : "iOS game where you race flying cars across futuristic cityscapes",
			"images" : [
				"http://www.feedbaccstudios.com/main_menu_wide.jpg",
				"http://www.feedbaccstudios.com/racers_wide.jpg",
				"http://www.feedbaccstudios.com/race_1_wide.jpg",
				"http://www.feedbaccstudios.com/race_2_wide.jpg",
				"http://www.feedbaccstudios.com/race_3_wide.jpg"
			]
		}
	],
	"display" : function() {
		for(var project in this.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			for(var image in this.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

function inName(oldName) {
    var finalName = oldName;
    var nameArray = finalName.split(' ');
    var lowerFirstName = nameArray[0].toLowerCase();
    var upperLastName = nameArray[1].toUpperCase();
    var firstName = lowerFirstName.charAt(0).toUpperCase() + lowerFirstName.substring(1);
    finalName = firstName + ' ' + upperLastName;
    return finalName;
}

bio.display();
work.display();
education.display();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


