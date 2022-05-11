// https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget

const btns = document.querySelectorAll('.btn')
const counter = document.querySelector('#counter')

let count = 0

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const herb = e.currentTarget.classList
        if (herb.contains('up')) {
			count++
		} else if (herb.contains('down')) {
			count--
		} else {
            count = "000"
		}
		counter.textContent = count
	})
})
