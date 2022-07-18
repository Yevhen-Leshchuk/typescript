// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
// 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const China: string = 'Китай';
const Chile: string = 'Чили';
const Australia: string = 'Австралия';
const India: string = 'Индия';
const Jamaica: string = 'Ямайка';

const priceChina: string = '100';
const priceChile: string = '250';
const priceAustralia: string = '170';
const priceIndia: string = '80';
const priceJamaica: string = '120';

let message: string;

const userInput = prompt('Введите название страны');

if (userInput !== null) {
  switch (userInput?.toLowerCase()) {
    case China.toLowerCase():
      message = `Доставка в ${China} будет стоить  ${priceChina} кредитов`;
      break;

    case Chile.toLowerCase():
      message = `Доставка в ${Chile} будет стоить  ${priceChile} кредитов`;
      break;

    case Australia.toLowerCase():
      message = `Доставка в ${Australia} будет стоить  ${priceAustralia} кредитов`;
      break;

    case India.toLowerCase():
      message = `Доставка в ${India} будет стоить  ${priceIndia} кредитов`;
      break;

    case Jamaica.toLowerCase():
      message = `Доставка в ${Jamaica} будет стоить  ${priceJamaica} кредитов`;
      break;

    default:
      message = 'В вашей стране доставка не доступна!';
      break;
  }
} else {
  message = 'Отменено пользователем!';
}

alert(message);

export {};
