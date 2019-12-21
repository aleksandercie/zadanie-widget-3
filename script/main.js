// variables
const button = document.getElementById('btn');
const widget = document.getElementById('widget');

// function open/close widget
    button.addEventListener('click', ()=>{
        widget.classList.toggle("open-widget");
    })
