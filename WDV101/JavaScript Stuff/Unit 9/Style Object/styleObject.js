// 1.
function changeColor() {
    let clickedParagraph = document.getElementById('changeColor').style.color = 'red';
}

// 2.
function centerH3() {
    document.getElementById('centerOnHover').style.textAlign = 'center';
}


// 3.
function leftAlignH3() {
    document.getElementById('centerOnHover').style.textAlign = 'left';
}

// 4. 
function changeFont() {
    document.getElementById('changeFont').style.fontFamily = 'Chiller, sans-serif';
}

// 5.
function revertFont() {
    document.getElementById('changeFont').style.fontFamily = 'initial';
}

// 6.
function increaseFontSize() {
    document.getElementById('changeFontSize').style.fontSize = '24px';
}

// 7.
function revertFontSize() {
    document.getElementById('changeFontSize').style.fontSize = 'initial';
}

// 8.
function changeBackgroundColor() {
    document.getElementById('changeBackgroundColor').style.backgroundColor = 'yellow';
}

// 9.
function hideFrog() {
    document.getElementById('frogImg').style.display = 'none';
}

// 10.
function displayFrogImg() {
    document.getElementById('frogImg').style.display = 'initial';
}

// 11.
function scaleUpFrogImg() {
    document.getElementById('frogImg').style.transition = '0.235s';
    document.getElementById('frogImg').style.width = '200px';
    document.getElementById('frogImg').style.height = '200px';
}

// 12.
function resetFrogImgSize() {
    document.getElementById('frogImg').style.width = '100px';
    document.getElementById('frogImg').style.height = '100px';
}

// 13.
function addBorder() {
    document.getElementById('alterBorder').style.border = '1px solid black';
}

// 13.
function removeBorder() {
    document.getElementById('alterBorder').style.border = 'none';
}

// 14.
function changeBackgroundGreen() {
    document.getElementById('alterBackgroundColor').style.backgroundColor = 'green';
}
  

// 15.
  function resetBackgroundColor() {
    document.getElementById('alterBackgroundColor').style.backgroundColor = '';
}