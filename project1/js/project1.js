document.addEventListener('DOMContentLoaded', () => {
    
    /* PART 1: INTRO TEXT
    --------------------------------------------------
    */

    let name = "";
    let age = 0;
    let isStudent = false;

    // TODO: Declare variables for name, age, and isStudent setting values with your own name, age, and student status.
    
    const introduction = (name, age, isStudent) => {

        // TODO: Check if isStudent is true or false and set text output to a new variable called studentStatus
        // - If isStudent is true, set studentStatus to "I am currently a student."
        // - If isStudent is false, set studentStatus to "I am not a student."

        let studentStatus = "";

        if (isStudent) 
        {
            studentStatus = "I am currently a student.";
        } else 
        {
            studentStatus = "I am not a student.";
        }
        
        // TODO: Using string concatenation, store a message to a new variable called message. 
        // - The message variable should should include your name, age, and a statement about whether you are a student or not. 
        // - Example message format: "Hello, my name is John. I am 25 years old and I am currently a student."

        let message = "Hello, my name is " + name + " . I am " + age + " years old and " + studentStatus;
    
        // DO NOT CHANGE: The following code selects the messageDisplayArea ID in the HTML file and appends a div 
        // tag with the message variable defined above.
        const messageDisplayArea = document.getElementById('messageDisplayArea');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageDisplayArea.appendChild(messageElement);
    };
    
    // Call the introduction function. Do not edit this line.
    introduction(name, age, isStudent);

    /* PART 2: SELECTORS
    --------------------------------------------------
    */

    document.querySelector("#add-classes").addEventListener('click', () => {
        document.querySelector('.selector-examples li:first-child').classList.add('first');
        document.querySelectorAll('.selector-examples li:nth-child(odd)').forEach(el => el.classList.add('odd'));
        // TODO: Add remaining selectors using nth-child, loops and conditional logic where approriate. (https://www.w3schools.com/CSSref/sel_nth-child.php) 
        const items = document.querySelectorAll('.selector-examples li');
        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
            if (i + 1 === 1) {
                items[i].classList.add('first');
            }
            if ((i + 1) % 2 === 1) {
                items[i].classList.add('odd');
            } else {
                items[i].classList.add('even');
            }
            if (i + 1 === 4 || i + 1 === 5) {
                items[i].classList.add('highlighter');
            }
        }
    });

    /* PART 3: REPLACEMENT TEXT
    --------------------------------------------------
    */

    document.querySelector("#change-language").addEventListener('click', () => {
        // TODO: Add code to change the text of the currentLanguage class to the value of the newLanguage ID:
        // - 1: Create a new variable called inputValue and set it to the value of the #newLanguage id
        // - 2: Create a new variable called element and set it to the .currentLanguage class
        // - 3: Using .innerHTML (https://www.w3schools.com/jsref/prop_html_innerhtml.asp), update element with inputValue
        const inputValue = document.getElementById('newLanguage').value;
        const element = document.querySelector('.currentLanguage');
        element.innerHTML = inputValue;
    });

    /* PART 4: TOGGLES
    --------------------------------------------------
    */

    // Modifying CSS attributes
    let boxColor = "rgb(153, 51, 51)";

    document.querySelector("#button_toggle_colors").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            const currentColor = window.getComputedStyle(box).backgroundColor;
            if (currentColor === boxColor) {
                // TODO: element backgroundColor currently has boxColor set, change it to 'white'
                box.css('background-color', 'white');
            } else {
                // TODO: element backgroundColor currently does not have boxcolor set, set it to boxColor
                box.css('background-color', boxColor);
            }
        });
    });

    // Adding/Removing classes to manipulate shapes
    document.querySelector("#button_toggle_roundedges").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            // TODO: Add a toggle to box.classList and toggle the CSS 'round-edge' class
        });
    });
});
