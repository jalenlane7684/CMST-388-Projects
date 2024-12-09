document.addEventListener('DOMContentLoaded', () => {
    /* PART 1: SETUP VARIABLES
    --------------------------------------------------
    */
    
    // TODO: Get the elements from the DOM and store them in variables. Include the following elements:
    // - introduction
    // - editIntroButton
    // - projectList
    // - skillList
    // - addSkillButton
    // - newSkillInput
    // - skillLevelInput
    // - contactForm
    // - themeToggleButton
    // - body
    const introduction = document.getElementById('introduction');
    const editIntroButton = document.getElementById('edit-intro');
    const projectList = document.getElementById('project-list');
    const skillList = document.getElementById('skill-list');
    const addSkillButton = document.getElementById('add-skill');
    const newSkillInput = document.getElementById('new-skill');
    const skillLevelInput = document.getElementById('skill-level');
    const contactForm = document.getElementById('contact-form');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    /* PART 2: IMPLEMENT DYNAMIC PROJECTS AND SKILLS
    --------------------------------------------------
    */

    const projects = [
        // TODO: Add projects here by defining objects with title, description, and link properties
        // Example: { title: 'Project 1', description: 'Description of project 1', link: '#'}
        { title: 'Victoris Prodotype', description: 'A website for displaying the schedule, current standings, and contact information for the Victoris Amateur Draft League', link: 'https://victoris-prodotype-bvd7w2eoc-jalenlane7684.vercel.app/'},
        { title: 'Project Portfolio', description: 'Description of project 1', link: 'https://cmst-385-projects.vercel.app/'},
        { title: 'Email Submission Form', description: 'A practice web page for submitting forms to my email address.', link: 'https://cmst388-jlane83.azurewebsites.net/project2/index.html'},
        { title: 'Photography Portfolio', description: '(WIP) A web page where I will display my photo galleries, as well as allow users to contact me via email, and read my resume. This page is not completed, and the link will just redirect you back to this page.', link: '#About Me'}
    ];

    const skills = [
        // TODO: Add skills here by defining objects with name and level properties
        {
            name: "HTML",
            level: 90
        },
        {
            name: "CSS",
            level: 90
        },
        {
            name: "JavaScript",
            level: 50
        },
        {
            name: "C#",
            level: 70
        },
        {
            name: "Python",
            level: 60
        },
        

    ];

    function displayProjects() {
        projectList.innerHTML = '';
        projects.forEach(project => {
            // TODO: Create a new div element assigned to a new variable called projectCard and assign a className of 'project-card'. Set innerHTML to display the project title, description, and link
            // Example: projectCard.innerHTML = `<h3>${project.title}</h3> ...`
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Go To Project</a>
            `
            projectList.appendChild(projectCard);
        });
    }

    function displaySkills() {
        skillList.innerHTML = '';
        skills.forEach(skill => {
            // TODO: Create a new li element assigned to a new variable called skillItem. Set innerHTML to display the skill name and level
            const skillItem = document.createElement('li');
            skillItem.innerHTML = `
            <div>${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-bar-fill"></div>
            </div>
            `
            const skillbarFill = skillItem.querySelector('.skill-bar-fill');
            skillbarFill.style.width = skill.level + "%";
            skillList.appendChild(skillItem);
        });
    }

    /* PART 3: IMPLEMENT INTRO TEXT EDITING
    --------------------------------------------------
    */

    editIntroButton.addEventListener('click', () => {
        // TODO: Prompt the user to enter a new introduction and update the introduction element with the new text
        const newIntro = prompt('Please enter a new introduction:');
        introduction.innerHTML = newIntro;
    });

    /* PART 4: IMPLEMENT SKILLS DISPLAY AND CONTACT FORM FUNCTIONALITY
    --------------------------------------------------
    */

    addSkillButton.addEventListener('click', () => {
        const newSkill = newSkillInput.value.trim();
        const skillLevel = parseInt(skillLevelInput.value, 10);
        if (newSkill && skillLevel >= 0 && skillLevel <= 100) {
            // TODO: 
            //   1. Add the new skill to the skills array and display the updated list of skills. 
            //   2. Clear the input fields after adding the skill
            skills.push({
                name: newSkill,
                level: skillLevel
            });
            displaySkills();
        } else {
            // TODO: Display an alert if the skill name is empty or the skill level is not between 0 and 100
            if (!newSkill) {
                alert("Please enter a skill name.");
            } else {
                alert("The skill level is not between 0 and 100")
            }
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // TODO: 
        //   1. Get the values from the form fields name, email, and message and store them in variables.
        //   2. Display an alert if any of the fields are empty. Otherwise, display a success message
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let nameContent;
        let emailContent;
        let messageContent;


        if (name.value == "") {
            alert("Please enter your name to send a message!");
        } else if (email.value == "" || !(email.value.includes("@") || !(email.value.includes()))) {
            alert("Please enter a valid email address to send a message!");
        } else if (message.value == "") {
            alert("Please type out the message you want to send!");
        } else {
            nameContent = name.value;
            emailContent = email.value;
            messageContent = message.value;
            alert("You have successfully sent a message!");
        }

    });

    /* PART 5: IMPLEMENT THEME TOGGLE
    --------------------------------------------------
    */

    themeToggleButton.addEventListener('click', () => {
        // TODO: Toggle the dark-mode class on the body and save the theme preference to local storage
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
        } else {
            body.classList.add("dark-mode");
        }
    });

    // Do not edit any code below this line
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
    }

    applySavedTheme();
    displayProjects();
    displaySkills();
});
