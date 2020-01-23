var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');
var i;

for (i = 0; i < acc.length; i++) {

    acc[i].onclick = function () {
        // First Remove the Active and Show from all the panels
        const setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        // If its not active and was clicked, active it and show panel
        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

/**
 * Sets or Removes classes to a list of dom elements
 * @param {*} els
 * @param {*} className
 * @param {*} fnName
 */
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
