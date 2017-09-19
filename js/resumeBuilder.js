/*
This is empty on purpose! Your code to build the resume will go here.
 */
var dataPlaceholder = '%data%';
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
        var formattedHeaderName = HTMLheaderName.replace(dataPlaceholder, bio.name);
        var formattedHeaderRole = HTMLheaderRole.replace(dataPlaceholder, bio.role);
        var header = $('#header');
        header.prepend(formattedHeaderRole);
        header.prepend(formattedHeaderName);

        var formattedHTMLmobile = HTMLmobile.replace(dataPlaceholder, bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace(dataPlaceholder, bio.contacts.email);
        var formattedHTMLgithub = HTMLgithub.replace(dataPlaceholder, bio.contacts.github);
        var formattedHTMLlocation = HTMLlocation.replace(dataPlaceholder, bio.contacts.location);
        var topContacts = $('#topContacts');
        topContacts.append(formattedHTMLmobile);
        topContacts.append(formattedHTMLemail);
        topContacts.append(formattedHTMLgithub);
        topContacts.append(formattedHTMLlocation);

        var formattedBioPic = HTMLbioPic.replace(dataPlaceholder, bio.biopic);
        header.append(formattedBioPic);

        var welcomeMessage = HTMLwelcomeMsg.replace(dataPlaceholder, bio.welcomeMessage);
        header.append(welcomeMessage);

        header.append(HTMLskillsStart);
        var skills = $('#skills');
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace(dataPlaceholder, skill);
            skills.append(formattedSkills);
        });

        var footerContacts = $('#footerContacts');
        footerContacts.append(formattedHTMLmobile);
        footerContacts.append(formattedHTMLemail);
        footerContacts.append(formattedHTMLgithub);
        footerContacts.append(formattedHTMLlocation);
    }
};

var education = {
    schools: [{
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
    onlineCourses: [{
        title: 'Front End Web Developer Nano Degree',
        school: 'Udacity',
        dates: 'In progress',
        url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }],
    display: function() {
        var educationObj = $('#education');
        education.schools.forEach(function(school) {
            educationObj.append(HTMLschoolStart);
            var educationEntry = $('.education-entry:last');
            var formattedSchoolName = HTMLschoolName.replace(dataPlaceholder, school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(dataPlaceholder, school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace(dataPlaceholder, school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(dataPlaceholder, school.location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(dataPlaceholder, school.majors.join(', '));
            educationEntry.append(formattedSchoolName + formattedSchoolDegree);
            educationEntry.append(formattedSchoolDates);
            educationEntry.append(formattedSchoolLocation);
            educationEntry.append(formattedSchoolMajor);
        });
        educationObj.append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            educationObj.append(HTMLschoolStart);
            var educationEntry = $('.education-entry:last');
            var formattedOnlineCourseTitle = HTMLonlineTitle.replace(dataPlaceholder, onlineCourse.title);
            var formattedOnlineCourseSchool = HTMLonlineSchool.replace(dataPlaceholder, onlineCourse.school);
            var formattedOnlineCourseDates = HTMLonlineSchool.replace(dataPlaceholder, onlineCourse.dates);
            var formattedOnlineCourseURL = HTMLonlineURL.replace(dataPlaceholder, onlineCourse.url);
            educationEntry.append(formattedOnlineCourseTitle + formattedOnlineCourseSchool);
            educationEntry.append(formattedOnlineCourseDates);
            educationEntry.append(formattedOnlineCourseURL);
        });
    }
};

var work = {
    jobs: [{
        employer: 'YouNoodle',
        title: 'Quality Assurance Engineer',
        location: 'San Francisco, CA',
        dates: 'In progress',
        description: 'I test our platform and writing automated test scripts and a little bit of front end work.'
    }],
    display: function() {
        $('#workExperience').append(HTMLworkStart);
        var workEntry = $('.work-entry');
        work.jobs.forEach(function(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace(dataPlaceholder, job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace(dataPlaceholder, job.title);
            var formattedWorkDates = HTMLworkDates.replace(dataPlaceholder, job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace(dataPlaceholder, job.location);
            var formattedWorkDescription = HTMLworkDescription.replace(dataPlaceholder, job.description);
            workEntry.append(formattedWorkEmployer + formattedWorkTitle);
            workEntry.append(formattedWorkDates);
            workEntry.append(formattedWorkLocation);
            workEntry.append(formattedWorkDescription);
        });
    }
};

var projects = {
    projects: [{
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
        projects.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);
            var projectEntry = $('.project-entry:last');
            var formattedProjectTitle = HTMLprojectTitle.replace(dataPlaceholder, project.title);
            var formattedProjectDates = HTMLprojectDates.replace(dataPlaceholder, project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(dataPlaceholder, project.description);
            var formattedProjectImage = HTMLprojectImage.replace(dataPlaceholder, project.images);
            projectEntry.append(formattedProjectTitle);
            projectEntry.append(formattedProjectDates);
            projectEntry.append(formattedProjectDescription);
            projectEntry.append(formattedProjectImage);
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);