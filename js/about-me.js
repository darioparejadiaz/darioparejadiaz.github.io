import "/components/dp-header/dp-header.js";
import "/components/dp-footer/dp-footer.js";

const skillsAnchor = document.querySelector("#skills-anchor");

skillsAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  goToSkillsAnchor.scrollIntoView({
    behavior: "smooth",
  });
});
