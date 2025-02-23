//Калькулятор
const inputCalc = document.querySelector('input');
const calcResult = document.querySelector('#calculator_number');
//Расчет с input
inputCalc.oninput = function () {
    calcResult.textContent = Number(inputCalc.value) * 2;
    calcExam();
}
//Проверка на число или букву
function calcExam() {
    if (calcResult.textContent === 'NaN') {
        calcResult.textContent = 0;
    } else {
        calcResult.textContent = Number(inputCalc.value) * 2;
    }
}
//Калькулятор


//Генератор eth и btc

//Рандомные Eth
const randomEth = [
    '0x5099ea57E3a...',
    '0x0DD5b3e9B0c...',
    '0x1b8495c5292...',
    '0x5cd378A73E0...',
    '0x7e97EB56C51...',
    '0x693Bab538f4...',
    '0x75047745A7e...',
    '0xe731840505E...',
    '0xDFEfF7E18f4...',
    '0x35ce8757621...',
    '0xC0BB60ec58c...',
    '0x5e46a5A2A04...',
    '0x690aaF3fA9d...',
    '0x5e68101aB9a...',
    '0x1DD76b8F8Ce...',
    '0xD91b35BF4Fa...',
    '0x3d5288B26b4...',
    '0x8D83A70213d...',
    '0x9A68e98745d...',
    '0xa69ea3e7eb2...'
];
//Рандомные Btc
const randomBtc = [
    'mogCdfQKe71QsQnr...',
    'mgB2QCRPTgEZkWBa...',
    'mxsV7fRdsyh9vZdc...',
    'myn2pooaZ5zcsNkG...',
    'mx19tQYg6jqWDtec...',
    'mtuARNynZXW55jJk...',
    'mjZjSL4aeMNGmNfh...',
    'mn8t9JTTqeAMTmA6...',
    'n2595NVHduyC5qmB...',
    'moZX4MdPx8nVGuJB...',
    'mmK7qV9R6Eb6E1fR...',
    'mmy4eXBEGC3Qupvh...',
    'mxhYBgVQFZup42EV...',
    'mv39RB4sXB8WePbH...',
    'mwu32DVf67VKFujY...',
    'mrbXm6nuxKUf7A4j...',
    'mjvxPjcteEHPLuzs...',
    'mt53yRuaLoUyK8ms...',
    'flCHJR3yJXy4xVka...'
];


//Получаем таблицу
const table = document.querySelector('.transaction-content')

//Получаем шаблон Eth

const templateEth = document.querySelector('#table-element-eth')

// Получаем данные из шаблона Eth
const ethData = [
    {
        hashEth: templateEth.content.querySelector('.txhash'),
        block: templateEth.content.querySelector('.block'),
        from: templateEth.content.querySelector('.from'),
        to: templateEth.content.querySelector('.to'),
        value: templateEth.content.querySelector('.value'),
        fee: templateEth.content.querySelector('.fee')
    },
]
//Генератор рандомных кошельков
function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//Заменяем значения Eth table

console.log(ethData[0].hashEth.textContent)
console.log(ethData[0].block.textContent)
console.log(ethData[0].from.textContent)
console.log(ethData[0].to.textContent)
console.log(ethData[0].value.textContent)
console.log(ethData[0].fee.textContent)


ethData[0].hashEth.textContent = getRandomArrayElement(randomEth).substr(3, 13);
ethData[0].block.textContent = Math.floor(Math.random() * 902411) + 191228 + '...';  // возвращает случайное целое число от 191228 до 902411
ethData[0].from.textContent = getRandomArrayElement(randomEth);
ethData[0].to.textContent = ethData[0].from.textContent;
ethData[0].value.textContent = Math.floor(Math.random() * 5) + 1 + '.' + Math.floor(Math.random() * 203) + ' ETH';
ethData[0].fee.textContent = '0.00' + Math.floor(Math.random() * 100) + 2;

//Дубликат Eth
let ethTableElement = templateEth.content.cloneNode(true);

//Вставляем в таблицу
function setEth() {
    for (let index = 0; index < 1; index++) {
        ethData[0].hashEth.textContent = getRandomArrayElement(randomEth).substr(3, 13);
        ethData[0].block.textContent = Math.floor(Math.random() * 902411) + 191228 + '...';  // возвращает случайное целое число от 191228 до 902411
        ethData[0].from.textContent = getRandomArrayElement(randomEth);
        ethData[0].to.textContent = ethData[0].from.textContent;
        ethData[0].value.textContent = Math.floor(Math.random() * 5) + 1 + '.' + Math.floor(Math.random() * 203) + ' ETH';
        ethData[0].fee.textContent = '0.00' + Math.floor(Math.random() * 100) + 2;
        ethTableElement = templateEth.content.cloneNode(true);
        table.insertBefore(ethTableElement, table.children[0]);
    }
}
// Получаем шаблон Btc

const templateBtc = document.querySelector('#table-element-btc');

// Получаем данные из шаблона Btc

const btcData = [
    {
        hashEth: templateBtc.content.querySelector('.txhash'),
        block: templateBtc.content.querySelector('.block'),
        from: templateBtc.content.querySelector('.from'),
        to: templateBtc.content.querySelector('.to'),
        value: templateBtc.content.querySelector('.value'),
        fee: templateBtc.content.querySelector('.fee')
    },
];
//Заменяем значения Btc table
function setBtc() {
    for (let index = 0; index < 1; index++) {
        btcData[0].hashEth.textContent = getRandomArrayElement(randomBtc).substr(3, 13);
        btcData[0].block.textContent = Math.floor(Math.random() * 902411) + 191228 + '...';  // возвращает случайное целое число от 191228 до 902411
        btcData[0].from.textContent = getRandomArrayElement(randomBtc);
        btcData[0].to.textContent = btcData[0].from.textContent;
        btcData[0].value.textContent = Math.floor(Math.random() * 5) + 1 + '.' + Math.floor(Math.random() * 203) + ' BTC';
        btcData[0].fee.textContent = '0.00' + Math.floor(Math.random() * 100) + 2;

        let btcTableElement = templateBtc.content.cloneNode(true);

        //Вставляем в таблицу
        table.insertBefore(btcTableElement, table.children[0]);
    }
}
//Запуск генераторов
setInterval(setEth, 4000)
setInterval(setBtc, 7000)





//Скрипт копирования кошельков

// Получаем кнопки

const btcCopy = document.querySelector('#btc-copy');
const ethCopy = document.querySelector('#eth-copy')


//Копирование
btcCopy.onclick = function(){
    navigator.clipboard.writeText('1CK9wjfEAFyaA6gN2GuoVSwD17LruCEKLA')
}
ethCopy.onclick = function(){
    navigator.clipboard.writeText('0x56317C37600730F0f69104C9D1D8c94a32361178')
}