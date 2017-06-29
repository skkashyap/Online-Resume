var bio = {
    "name": "Shubham Kashyap",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-8295389992",
        "email": "kashyapshubham707@gmail.com",
        "github": "www.github.com/skkashyap",
        "location": "Ambala City,Haryana,India"
    },
    "welcomeMessage": "I am Student of Chitkara University",
    "skills": ["Programming", "Javascript", "HTML", "Bootstrap", "CSS"],
    "biopic": "images/myimg.jpg"

};

bio.display = function() {
    var myRole = HTMLheaderRole.replace('%data%', bio.role);
    var myName = HTMLheaderName.replace('%data%', bio.name);
    var mypic = HTMLbioPic.replace('%data%', bio.biopic);
    var mymessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    var mycontact = [];
    mycontact.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
    mycontact.push(HTMLemail.replace('%data%', bio.contacts.email));
    mycontact.push(HTMLgithub.replace('%data%', bio.contacts.github));
    mycontact.push(HTMLlocation.replace('%data%', bio.contacts.location));

    $("#header").prepend(myRole);
    $("#header").prepend(myName);
    $("#header").append(mypic);
    $("#header").append(mymessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (var j = 0; j < mycontact.length; j++) {
        $("#topContacts").append(mycontact[j]);
        $("#footerContacts").append(mycontact[j]);
    }

};
bio.display();

var education = {
    "schools": [{
        "name": "Chitkara University",
        "location": "Himachal Pradesh",
        "degree": "bachelor of engineering",
        "dates": "2014-07-02",
        "majors": ["Computer Science", "Computer Networking"],
        "url": "www.Chitkara.edu.in"
    }],
    "onlineCourses": [{
            "school": "Udacity",
            "title": "Front-End-Web Developing",
            "dates": "2017",
            "url": "www.Udacity.com"
        },
        {
            "school": "Udacity",
            "title": "Javascript Basics",
            "dates": "2017",
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "school": "Udacity",
            "title": "Intro to HTML and CSS",
            "dates": "2016",
            "url": "https://www.udacity.com/course/ud304"
        },
        {
            "school": "Chitkara University",
            "title": "Oracle 12 c Certification",
            "dates": "2014",
            "url": "www.oracle.com"
        }
    ]
};
education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        $("#education").append("<h3>Schools</h3>");
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var mySchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var mySchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var mySchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var mySchoolDates = HTMLworkDates.replace("%data%", education.schools[i].dates);
            var mySchoolMajor = "";
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                mySchoolMajor += HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                mySchoolMajor += " ";
            }

            $(".education-entry:last").append(mySchoolName + mySchoolDegree);
            $(".education-entry:last").append(mySchoolLocation);
            $(".education-entry:last").append(mySchoolDates);
            $(".education-entry:last").append(mySchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var k = 0; k < education.onlineCourses.length; k++) {
                $("#education").append(HTMLschoolStart);
                var myOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].url);
                var myOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
                var myOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
                var myOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url).replace("#", education.onlineCourses[k].url);

                $(".education-entry:last").append(myOnlineTitle + myOnlineSchool);
                $(".education-entry:last").append(myOnlineDates);
                $(".education-entry:last").append(myOnlineURL);
            }
        }

    }
};

education.display();


var work = {
    "jobs": [{
            "employer": "HCL Infosystem limited",
            "title": "Customer support engineer",
            "location": "Ludhiana",
            "dates": "Nov 2013 - Nov 2014",
            "description": "i was hired to as a Customer support engineer. i had some banking project if any breakdown in any bank or any other issue due to any software or hardware problem.i went to there and sort out that problem."
        },
        {
            "employer": "Hero Cycles limited",
            "title": "IT and Maintenence supervisor",
            "location": "Ludhiana",
            "dates": "Nov 2014 - July 2015",
            "description": "i was hired to as a IT supervisor there. When any breake down occur i went to that place and sort out it i also have a knowledge or some automation work and also a networking related."
        }
    ]
};

work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            var myEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var myWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var myWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var myDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var myWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var myEmployerWorkTitle = myEmployer + myWorkTitle;

            $(".work-entry:last").append(myEmployerWorkTitle);
            $(".work-entry:last").append(myWorkLocation);
            $(".work-entry:last").append(myDatesWorked);
            $(".work-entry:last").append(myWorkDescription);
        }

    }
};
work.display();

var projects = {
    "projects": [{
            "title": "Online Portfolio Site",
            "dates": "March-2017-March 2017",
            "description": "The online Portfolio Site is a part of Front-End Nanodegree Program. I created the interior Designer Portfolio.",
            "images": ["images/img1.jpg"]
        },
        {
            "title": "Online Student attendence record",
            "dates": "august-2014 - october 2014",
            "description": "This is my first project. i was created this project in java.",
            "images": ["images/2.jpg"]
        }
    ]
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var myProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var myProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var myProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var myProjectImage = "";
            for (var j = 0; j < projects.projects[i].images.length; j++)
                myProjectImage += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

            $(".project-entry:last").append(myProjectTitle);
            $(".project-entry:last").append(myProjectDates);
            $(".project-entry:last").append(myProjectDescription);
            $(".project-entry:last").append(myProjectImage);




        }
    }
};

projects.display();
$("#mapDiv").append(googleMap);