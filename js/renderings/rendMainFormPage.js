let strs = [
    [
        'ahb acb aeb aaaab caeeb adcb axeb bbbba aba aca aea xxyxx abba adca abea',
    ],
];

let exercises = [
    [
        `1.Дана строка: <span class ="main-form-h-ex">${strs[0][0]}</span>. Составтье выражение, которое найдет ahb, acb, aeb, aab, abb по шаблону: буква 'a', любой символ, буква 'b'`,
        `2.Дана строка: <span class ="main-form-h-ex">${strs[0][0]}</span>. Составтье выражение, которое найдет aaaa, abba, adca, abea, по шаблону: буква 'a', 2 любых символа, буква 'a'`,
        `3.Дана строка: <span class ="main-form-h-ex">${strs[0][0]}</span>. Составтье выражение, которое найдет abba и abea, не захватив adca.`,
    ],
];

function createFormOne(exercise, i) {
    let form = document.getElementById('main-form-one').innerHTML += `
        <div class="main-form-div">
            <h4 class="main-form-div-h4">${exercise}</h4>       
            <label class="main-form-div-label" for="input_${i}">Введите регулярное выражение(/ / - указывать не нужно ):</label>
            <input class="main-form-div-input-tx" type="text" id ="input_${i}" name="input" autocomplete="off">
            <input class="main-form-div-input-sm" type="submit" id ="submit" name="submit" value="Проверить"> 
            <p class="main-form-div-p-out" id="output_${i}"></p><br>
        </div>
    `;
}

for (let i = 0; i < exercises[0].length; i++) {
    createFormOne(exercises[0][i], i);
}