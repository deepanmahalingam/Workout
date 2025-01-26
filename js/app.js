const skills_wrap = document.querySelector(".core-skills");
const skills_bars = document.querySelectorAll(".skill-progress");

// Get the current year
const currentYear = new Date().getFullYear();

// Set the year in the element with id "current-year"
document.getElementById("current-year").textContent = currentYear;

window.addEventListener("scroll", () =>
{
    skillsEffect();
})

function checkScroll(el)
{
    let rect = el.getBoundingClientRect();
    if(window.innerHeight >= rect.top + el.offsetHeight) return true
    return false
}

function skillsEffect()
{
    if(!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
