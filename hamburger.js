const toggleBtn = document.getElementById("toggle-btn");
const mobileNavContainerEl = document.querySelector('.mobile-nav-container');

toggleBtn.addEventListener("click", ()=> {
    mobileNavContainerEl.classList.toggle("show-mobile-nav");
});
document.addEventListener("click", event => {
    if(!mobileNavContainerEl.contains(event.target) && event.target !== toggleBtn) {
        mobileNavContainerEl.classList.remove("show-mobile-nav");
    }
});