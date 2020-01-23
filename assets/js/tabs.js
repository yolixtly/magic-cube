function openTab(tabNumber, buttonId) {
    let i;
    const tabBody = document.getElementsByClassName("tab-body");
    const tabButton = document.getElementsByClassName("tab");
    for (i = 0; i < tabBody.length; i++) {
        tabBody[i].classList.remove("show");
        tabButton[i].classList.remove("active");
    }

    const button = document.getElementById(buttonId);
    button.classList.add('active');
    const element = document.getElementById(`tab${tabNumber}`);
    element.classList.add("show");
    console.log(element.classList);
}
