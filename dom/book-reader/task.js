let buttons = document.querySelectorAll('.font-size');
let reader = document.querySelector('.book');

for(let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', (event) => {
		event.preventDefault();
		let key = event.target;
		for(let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove('font-size_active');
		}
        key.classList.add('font-size_active');
        
        let textSize = key.dataset.size;
        
        
		switch(textSize) {
			case 'small':
              reader.classList.remove('book_fs-big');
              reader.classList.add('book_fs-small');
				break;
			case 'big':
              reader.classList.remove('book_fs-small');
              reader.classList.add('book_fs-big');
				break;
			default:
              reader.classList.remove('book_fs-small');
              reader.classList.remove('book_fs-big');
				break;
		}
	});
}

