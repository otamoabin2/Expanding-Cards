const panel = document.querySelectorAll('.panel')

panel.forEach(panel => {
    panel.addEventListener('click', () => {
        // before you add an active class we remove the existing active class 
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses() {
    panel.forEach(panel => {
        panel.classList.remove('active')
    })
}