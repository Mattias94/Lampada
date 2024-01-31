
function bulbToggle(){
    let bulb = document.getElementById('lampada');

    if(bulb.src.match('lightoff')){
        bulb.src = 'lighton.jpg';
    } else {
        bulb.src = 'lightoff.jpg'
    }
}