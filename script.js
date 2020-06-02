
const toggler = document.querySelector('[type=checkbox]');

toggler.onchange = () => {
    if (toggler.checked) {
        document.documentElement.setAttribute("theme", "light");
    } else {
        document.documentElement.setAttribute("theme", "dark");
    }
}