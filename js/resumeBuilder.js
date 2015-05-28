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
    "biopic" : "images/me.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills;
	for (var i = 0; i < bio.skills.length; i++) {
		formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
}

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
		for (job in this.jobs) {
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

work.display();



var education = {
	"schools" : [
		{
			"name" : "McGill University",
			"location" : "Montreal",
			"degree" : "Bachelor of Arts",
			"majors" : ["Foundations of Computing"],
			"dates" : 2005,
			"url" : "https://www.mcgill.ca/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Nanodegree in Front-End Web Development",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/"
		}
	]
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
	]
};

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

