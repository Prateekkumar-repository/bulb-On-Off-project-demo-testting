// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');
// heading.style.color = 'purple'

// button.addEventListener('click', function() {
//     heading.style.color = 'green'
//     heading.style.fontSize = '100px'
//     console.log('Button clicked', event );
// });
const bulbSwitch = document.querySelector('#btn');
const bulbImage = document.querySelector('#bulb');

bulbSwitch.addEventListener('click', function() {
    console.log(bulb.src);
    if(bulb.src.match('off')) {
        bulb.src = './bulb on.png';
        bulbSwitch.innerHTML = 'Turn OFF';
    } else {
        bulb.src = './bulb off.png';
        bulbSwitch.innerHTML = 'Turn ON';
    }
    
});