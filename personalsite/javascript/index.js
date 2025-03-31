document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.querySelector(".filter_div select");
    const resumeDiv = document.querySelector(".resume_div");
    const resumeImage = document.querySelector(".resume_image");
    
    // Create a div for filtered content
    const filteredContent = document.createElement("div");
    filteredContent.classList.add("filtered_content");
    resumeDiv.appendChild(filteredContent);

    // Object holding different resume sections
    const resumeSections = {
        "Objective": "This is my objective statement.",
        "Education": "Here is my educational background.",
        "Accomplishments": "These are some of my key accomplishments.",
        "Skills": "These are my skills and proficiencies.",
        "Work Experience": "Here is my work experience.",
        "Volunteer Service": "Details about my volunteer service.",
        "References": "Contact information for my references."
    };

    filterSelect.addEventListener("change", function () {
        const selectedValue = filterSelect.value;
        
        if (selectedValue && resumeSections[selectedValue]) {
            resumeImage.style.display = "none";
            filteredContent.textContent = resumeSections[selectedValue];
        } else {
            resumeImage.style.display = "block";
            filteredContent.textContent = "";
        }
    });
});
