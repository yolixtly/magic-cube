function openTab(tabNumber) {
    let i;
    const x = document.getElementsByClassName("tab-body");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("show");
    }

    const element = document.getElementById(`tab${tabNumber}`);
    console.log(element.classList);
    element.classList.add("show");
    console.log(element.classList);
}
