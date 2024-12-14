const form = document.querySelector("form");

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // BMI Category Logic
        let category = '';
        let categoryColor = '';
        if (bmi < 18.6) {
            category = 'Underweight';
            categoryColor = 'blue'; // Color for Underweight
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal weight';
            categoryColor = 'green'; // Color for Normal weight
        } else {
            category = 'Overweight';
            categoryColor = 'red'; // Color for Overweight
        }

        // Display result with category on new line and colors
        results.innerHTML = `
            <span style="color: white;">Your BMI: ${bmi}</span><br>
            <span style="color: ${categoryColor};">You are ${category}</span>
        `;

        // results.setAttribute('style', `
        //     color: white;
        //     font-size: 30px;
        //     font-weight:bold;

        // `)

        

    }
        
});