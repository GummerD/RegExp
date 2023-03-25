let form = document.querySelector('form');

form.addEventListener('submit', getResultTwoForm);

function getResultTwoForm(event) {
    event.preventDefault();

    let arrRegExps = [
        ['ab+a', 'ab{2,3}a'],
        ['a..a', 'a\\w\\wa'],
        ['ab.a', 'ab\\wa', 'a[^d].a', 'a[^d]\\wa']
    ];

    let str = 'buuu ahb aba aca addda abba acc aeb aeeb adcb adca abbba abea';
    
    let el = document.getElementById('main-form-two');
    let input_0 = el.input_0.value;
    let input_1 = el.input_1.value;
    let input_2 = el.input_2.value;
    //let input_3 = el.input_3.value;
    //let input_4 = el.input_4.value;

    document.getElementById('main-form-two').innerHTML += `<p id ="fail"></p>`;

    if (input_0 == arrRegExps[0][0] || input_0 == arrRegExps[0][1]) {
        let newRegExp = new RegExp(input_0, 'g');
        console.log(newRegExp);
        let strOutPut_0 = str.match(newRegExp);
        strOutPut_0 = strOutPut_0.join(' ');
        document.getElementById('output_0').innerHTML = `
            Ваш вариант регулярного выражения - /${input_0}/, подходит, результат поиска: ${strOutPut_0}
        `;
        
        el.input_0.value = ' ';
        
        document.getElementById('fail').innerHTML = ` `;

    } else if (input_1 == arrRegExps[1][0] || input_1 == arrRegExps[1][1]) {
        let newRegExp = new RegExp(input_1, 'g');
        console.log(newRegExp);
        let strOutPut_1 = str.match(newRegExp);
        strOutPut_1 = strOutPut_1.join(' ');
        document.getElementById('output_1').innerHTML += `
            Ваш вариант регулярного выражения - /${input_1}/, подходит, результат поиска: ${strOutPut_1}
        `;

        el.input_1.value = ' ';

        document.getElementById('fail').innerHTML = ` `;
    }
    else if (input_2 == arrRegExps[2][0] || input_2 == arrRegExps[2][1] || input_2 == arrRegExps[2][2] || input_2 == arrRegExps[2][3]) {
        let newRegExp = new RegExp(input_2, 'g');
        console.log(newRegExp);
        let strOutPut_2 = str.match(newRegExp);
        strOutPut_2 = strOutPut_2.join(' ');
        document.getElementById('output_2').innerHTML += `
            Ваш вариант регулярного выражения - /${input_2}/, подходит, результат поиска: ${strOutPut_2}
        `;

        el.input_2.value = ' ';

        document.getElementById('fail').innerHTML = ` `;
    }
    else {
        document.getElementById('fail').innerHTML = `
            Неверно подобрано регулярное выражение.
        `;
    }



}



