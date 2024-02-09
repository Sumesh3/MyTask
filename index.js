var radio1 = document.getElementById('unit_radio');
var radio2 = document.getElementById('unit_radio2');
var radio3 = document.getElementById('unit_radio3');
var table1 = document.getElementById('option_table');
var table2 = document.getElementById('option_table2');
var table3 = document.getElementById('option_table3');
var popularDiv = document.querySelector('.popular');
var popular1Div = document.querySelector('.popular1');
var popular2Div = document.querySelector('.popular2');
var std_price = document.querySelector('.std_price');
var std_price1 = document.querySelector('.std_price1');
var main_section = document.querySelector('.main_section');
var main_section2 = document.querySelector('.main_section2');
var main_section3 = document.querySelector('.main_section3');

function handleRadioChange() {
    if (radio1.checked || radio2.checked || radio3.checked) {

        if (radio1.checked) {
            table1.style.display = 'table';
            table2.style.display = 'none';
            table3.style.display = 'none';
            popularDiv.style.display = 'block';
            popular1Div.style.display = 'none';
            popular2Div.style.display = 'none';
            std_price.style.display = 'none';
            std_price1.style.display = 'block';
            main_section.style.border = '2px solid #fa3a74';
            main_section2.style.border = '1px solid rgb(190, 185, 185)'
            main_section3.style.border = '1px solid rgb(190, 185, 185)'
            main_section.style.backgroundColor = '#fa3a740f'
            main_section2.style.backgroundColor = 'white'
            main_section3.style.backgroundColor = 'white'

        } else if (radio2.checked) {
            table1.style.display = 'none';
            table2.style.display = 'table';
            table3.style.display = 'none';
            popularDiv.style.display = 'none';
            popular1Div.style.display = 'block';
            popular2Div.style.display = 'none';
            std_price.style.display = 'block';
            std_price1.style.display = 'none';
            main_section2.style.border = '2px solid #fa3a74'
            main_section.style.border = '1px solid rgb(190, 185, 185)'
            main_section3.style.border = '1px solid rgb(190, 185, 185)'
            main_section.style.backgroundColor = 'white'
            main_section2.style.backgroundColor = '#fa3a740f'
            main_section3.style.backgroundColor = 'white'

        } else {
            table1.style.display = 'none';
            table2.style.display = 'none';
            table3.style.display = 'table';
            popularDiv.style.display = 'none';
            popular1Div.style.display = 'none';
            popular2Div.style.display = 'block';
            std_price.style.display = 'block';
            std_price1.style.display = 'block';
            main_section3.style.border = '2px solid #fa3a74'
            main_section2.style.border = '1px solid rgb(190, 185, 185)'
            main_section.style.border = '1px solid rgb(190, 185, 185)'
            main_section.style.backgroundColor = 'white'
            main_section3.style.backgroundColor = '#fa3a740f'
            main_section2.style.backgroundColor = 'white'
        }
    } else {
        popularDiv.style.display = 'none';
        popular1Div.style.display = 'none';
        popular2Div.style.display = 'none';
        table1.style.display = 'none';
        table2.style.display = 'none';
        table3.style.display = 'none';
        std_price.style.display = 'block';
        std_price1.style.display = 'block';
        main_section.style.border = '1px solid rgb(190, 185, 185)'
        main_section2.style.border = '1px solid rgb(190, 185, 185)'
        main_section3.style.border = '1px solid rgb(190, 185, 185)'
        main_section.style.backgroundColor = 'white'
        main_section2.style.backgroundColor = 'white'
        main_section3.style.backgroundColor = 'white'
    }
}
radio1.addEventListener('change', handleRadioChange);
radio2.addEventListener('change', handleRadioChange);
radio3.addEventListener('change', handleRadioChange);
handleRadioChange();