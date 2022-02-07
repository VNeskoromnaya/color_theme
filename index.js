// debugger

let wrapper = document.getElementById('wrapper');
let color = document.getElementById('color');


function changeBackground() {    
    if(color.value == "white") {
        wrapper.style.background = 'white';
    }
    if(color.value == "green") {
    wrapper.style.background = 'green';
    }
    if(color.value == "orange") {
        wrapper.style.background = 'orange';
    }
    if(color.value == "yellow") {
        wrapper.style.background = 'yellow';
    }
    if(color.value == "pink") {
        wrapper.style.background = 'pink';
    }
}

color.onchange = changeBackground;
