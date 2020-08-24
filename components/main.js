let $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
};
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
};
//button;
$btn.addEventListener('click', function () {
    console.log('kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});


// function init;
function init() {
    console.log('Start game!');
}
function renderHP(person) {
    renderHPLife(person);
    renderProgressbar(person);

}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP +'/'+ person.defaultHP;
}
function renderProgressbar(person) {
person.elProgressbar.style.width = person.damageHP + '%';

}

//kick -';
function changeHP(count, person) {
    if (person.damageHP < count){
        person.damageHP = 0;
        alert(person.name + ' you lost baby!!');
        $btn.disabled = true;
    }
    else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random()* num);
}

init();
