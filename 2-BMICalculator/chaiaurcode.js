const form = document.querySelector('form');
// This give you empty value 
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a vaild height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a vaild weight ${weight}`
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        if (BMI < 18.6) {
            results.innerHTML = `<span>Under Weight = ${BMI}</span>`;
        } else if (BMI > 24.9) {
            results.innerHTML = `<span>Over Weight = ${BMI}</span>`;
        } else {
            results.innerHTML = `<span>Normal Weight = ${BMI}</span>`;
        }
    }
})