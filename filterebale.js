
let input = document.getElementById('input');
let gramsOutput = document.getElementById('gramsOutput');
let kgOutput = document.getElementById('kgOutput');
let ozOutput = document.getElementById('ozOutput');
console.log(kgOutput);


function convert() {
    const weightLbs = input.value
    let weightIngrams = weightLbs * 453.592
    gramsOutput.innerText = weightIngrams

    let weightInKg = weightLbs * 0.453592;
    kgOutput.innerText = weightInKg

    let weightInOz = weightLbs * 16;
    ozOutput.innerText = weightInOz;

}


input.addEventListener('input', convert)
