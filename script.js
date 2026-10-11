function showMessage() {
    alert("Welcome to my portfolio!");
}
function toggleSkills() {
    const skills = document.getElementById("skillsList");

    if (skills.style.display === "none") {
        skills.style.display = "flex";
    } else {
        skills.style.display = "none";
    }
}

function toggleSkills() {
    const skills = document.getElementById("skillsList");
    const button = document.getElementById("skillsButton");

    if (skills.style.display === "none") {
        skills.style.display = "flex";
        button.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        button.textContent = "Show Skills";
    }
}