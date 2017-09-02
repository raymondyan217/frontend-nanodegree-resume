/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: 'Raymond Yan',
    role: 'Front-End Engineer',
    contacts: {
        mobile: '415-333-3333',
        email: 'testing@email.com',
        github: 'raymondyan217',
        location: 'San Francisco, CA'
    },
    welcomeMessage: 'Welcome to my online resume built using javascript for the Udacity Online Resume Project.',
    skills: [
        'Javascript',
        'HTML',
        'PHP',
        'AngularJS'
    ],
    biopic: 'https://raymondyan217.github.io/images/raymond.png',
    display: function() {

    }
};

var education = {
    schools: [
        {
            name: 'City College Of San Francisco',
            location: 'San Francisco, CA',
            degree: 'No degree',
            majors: [
                'Computer Science'
            ],
            dates: '2012 - 2014'
        },
        {
            name: 'Year Up',
            location: 'San Francisco, CA',
            degree: 'No degree',
            majors: [
                'Information Technology'
            ],
            dates: '2012 - 2013'
        },
        {
            name: 'City College Of San Francisco',
            location: 'San Francisco, CA',
            degree: 'No degree',
            majors: [
                'Automotive Engineering Technology'
            ],
            dates: '2011 - 2012'
        },
    ],
    onlineCourses: [
        {
            title: 'Front End Web Developer Nano Degree',
            school: 'Udacity',
            dates: 'In progress',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display: function() {

    }
};

var work = {
    jobs: [
        {
            employer: 'YouNoodle',
            title: 'Quality Assurance Engineer',
            location: 'San Francisco, CA',
            dates: 'In progress',
            description: 'I test our platform and writing automated test scripts and a little bit of front end work.'
        }
    ],
    display: function() {

    }
};

var projects = {
    projects: [
        {
            title: 'YouNoodle',
            dates: 'February 2012 - Current',
            description: 'Developed a website for the company I currently work for using Wordpress with customized theme',
            images: 'https://raymondyan217.github.io/images/younoodle.png'
        },
        {
            title: 'Start-up Denmark',
            dates: 'March 2015',
            description: 'Developed a website for one of our clients that\'s running a start up program on YouNoodle',
            images: 'https://static.younoodle.com/static/wordpress/startupdenmark/images/SUD-logo-final.png'
        },
        {
            title: 'WeMENA',
            dates: 'December 2016',
            description: 'Developed a website for one of our clients that\'s running a start up program on YouNoodle using webflow',
            images: 'https://daks2k3a4ib2z.cloudfront.net/582cabf5aec414ad3ca33b79/583f759e39a08ff77d787cf3_wemena_logo.png'
        }
    ],
    display: function() {

    }
};

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
var header = $('#header');
header.prepend(formattedHeaderRole);
header.prepend(formattedHeaderName);


var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var topContacts = $('#topContacts');
topContacts.append(formattedHTMLmobile);
topContacts.append(formattedHTMLemail);
topContacts.append(formattedHTMLgithub);
topContacts.append(formattedHTMLlocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
header.append(formattedBioPic);

var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
header.append(welcomeMessage);

header.append(HTMLskillsStart);
var skills = $('#skills');
bio.skills.forEach(function(skill) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    skills.append(formattedSkills);
});

$('#workExperience').append(HTMLworkStart);
var workEntry = $('.work-entry');
work.jobs.forEach(function(job) {
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
    workEntry.append(formattedWorkEmployer + formattedWorkTitle);
    workEntry.append(formattedWorkDates);
    workEntry.append(formattedWorkLocation);
    workEntry.append(formattedWorkDescription);
});

$('#projects').append(HTMLprojectStart);
var projectEntry = $('.project-entry');
projects.projects.forEach(function(project) {
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
    projectEntry.append(formattedProjectTitle);
    projectEntry.append(formattedProjectDates);
    projectEntry.append(formattedProjectDescription);
    projectEntry.append(formattedProjectImage);
});

$('#education').append(HTMLschoolStart);
var educationEntry = $('.education-entry');
education.schools.forEach(function(school) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors.join(', '));
    educationEntry.append(formattedSchoolName + formattedSchoolDegree);
    educationEntry.append(formattedSchoolDates);
    educationEntry.append(formattedSchoolLocation);
    educationEntry.append(formattedSchoolMajor);
});

educationEntry.append(HTMLonlineClasses);
education.onlineCourses.forEach(function(onlineCourse) {
    var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
    var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
    var formattedOnlineCourseDates = HTMLonlineSchool.replace("%data%", onlineCourse.dates);
    var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
    educationEntry.append(formattedOnlineCourseTitle + formattedOnlineCourseSchool);
    educationEntry.append(formattedOnlineCourseDates);
    educationEntry.append(formattedOnlineCourseURL);
});

$('#mapDiv').append(googleMap);

var footerContacts = $('#footerContacts');
footerContacts.append(formattedHTMLmobile);
footerContacts.append(formattedHTMLemail);
footerContacts.append(formattedHTMLgithub);
footerContacts.append(formattedHTMLlocation);
