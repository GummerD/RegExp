let form = document.querySelector('form');

form.addEventListener('submit', getResultTwoForm);

function getResultTwoForm(event) {
    event.preventDefault();

    let str = document.getElementById('str').innerHTML;

    let arrRegExps = [
        ['ab+a', 'ab{2,3}a'],
        ['ab*a'],
        ['ab?a'],
        ['x+yx+'],
        ['(ab)+'],
    ];

    let el = document.getElementById('main-form-two');
    let input_0 = el.input_0.value;
    let input_1 = el.input_1.value;
    let input_2 = el.input_2.value;
    let input_3 = el.input_3.value;
    let input_4 = el.input_4.value;

    document.getElementById('main-form-two').innerHTML += `<p id ="fail"></p>`;

    if (input_0 == arrRegExps[0][0] || input_0 == arrRegExps[0][1]) {
        let newRegExp = new RegExp(input_0, 'g');
        console.log(newRegExp);
        let strOutPut_0 = str.match(newRegExp);
        strOutPut_0 = strOutPut_0.join(', ');
        document.getElementById('output_0').innerHTML = `
            Ваш вариант регулярного выражения - /${input_0}/ верен, результат поиска: ${strOutPut_0}
        `;
        
        el.input_0.value = ' ';
        
        document.getElementById('fail').innerHTML = ` `;

    } else if (input_1 == arrRegExps[1][0]) {
        let newRegExp = new RegExp(input_1, 'g');
        console.log(newRegExp);
        let strOutPut_1 = str.match(newRegExp);
        strOutPut_1 = strOutPut_1.join(', ');
        document.getElementById('output_1').innerHTML += `
            Ваш вариант регулярного выражения - /${input_1}/ верен, результат поиска: ${strOutPut_1}
        `;

        el.input_1.value = ' ';

        document.getElementById('fail').innerHTML = ` `;
    }
    else if (input_2 == arrRegExps[2][0]) {
        let newRegExp = new RegExp(input_2, 'g');
        console.log(newRegExp);
        let strOutPut_2 = str.match(newRegExp);
        strOutPut_2 = strOutPut_2.join(', ');
        document.getElementById('output_2').innerHTML += `
            Ваш вариант регулярного выражения - /${input_2}/ верен, результат поиска: ${strOutPut_2}
        `;

        el.input_2.value = ' ';

        document.getElementById('fail').innerHTML = ` `;
    }
    else if (input_3 == arrRegExps[3][0]) {
        let newRegExp = new RegExp(input_3, 'g');
        console.log(newRegExp);
        let strOutPut_3 = str.match(newRegExp);
        strOutPut_3 = strOutPut_3.join(' ');
        document.getElementById('output_3').innerHTML += `
            Ваш вариант регулярного выражения - /${input_3}/ верен, результат поиска: ${strOutPut_3}
        `;

        el.input_3.value = ' ';

        document.getElementById('fail').innerHTML = ` `;
    }
    else if (input_4 == arrRegExps[4][0]) {
        let newRegExp = new RegExp(input_4, 'g');
        console.log(newRegExp);
        let strOutPut_4 = str.match(newRegExp);
        strOutPut_4 = strOutPut_4.join(' ');
        document.getElementById('output_4').innerHTML += `
            Ваш вариант регулярного выражения - /${input_4}/ верен, результат поиска: ${strOutPut_4}
        `;

        el.input_4.value = ' ';

        document.getElementById('fail').innerHTML = ` `;
    }
    else {
        document.getElementById('fail').innerHTML = `
            Неверно подобрано регулярное выражение.
        `;
    }



}



