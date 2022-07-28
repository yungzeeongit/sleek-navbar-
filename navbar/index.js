
const listitems = document.querySelectorAll('.list')

function pageTransition(){
    for (let index = 0; index < listitems.length; index++) {
        listitems[index].addEventListener('click', function(){
           let currentBtn = document.querySelectorAll('.active');
           currentBtn[0].className = currentBtn[0].className.replace('active', '');
           this.className += ' active'
           event.preventDefault()
        })
    }
}

pageTransition()

