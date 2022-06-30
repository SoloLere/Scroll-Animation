const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    const triggerPoint = window.innerHeight / 5 * 4.5
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        
        boxTop < triggerPoint? box.classList.add('show') : box.classList.remove('show')
    })
}