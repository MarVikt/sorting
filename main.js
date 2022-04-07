const advertisement = document.querySelector('.adv');
const books = document.querySelectorAll('.book');
const bodySite = document.querySelector('body');
const titleBook_4 = books[4].querySelector('h2 a');
const chaptersBook_2 = books[0].querySelectorAll('li');
const chaptersBook_5 = books[5].querySelectorAll('li');
let chaptersBook_6 = books[2].querySelectorAll('li');
const listBook_6 = books[2].querySelector('ul');
const chapter_8_Book_6 = document.createElement('li');

// удаление рекламы
advertisement.remove();

// восстановление порядка книг
books[0].before(books[1]);
books[2].before(books[4]);
books[5].after(books[2]);

// замена заднего фона
bodySite.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// исправление ошибки в заголовке Книги 3
titleBook_4.textContent = 'Книга 3. this и Пропотипы Объектов';

// восстановление порядка глав Книга 2
chaptersBook_2[0].before(chaptersBook_2[1]);
chaptersBook_2[10].before(chaptersBook_2[2]);
chaptersBook_2[4].before(chaptersBook_2[8]);
chaptersBook_2[8].before(chaptersBook_2[6]);

// восстановление порядка глав Книга 5
chaptersBook_5[6].before(chaptersBook_5[2]);
chaptersBook_5[3].before(chaptersBook_5[9]);
chaptersBook_5[8].before(chaptersBook_5[5]);

// добавление главы 8 в Книгу 6
chapter_8_Book_6.textContent = 'Глава 8: За пределами ES6';
listBook_6.append(chapter_8_Book_6);
chaptersBook_6 = books[2].querySelectorAll('li');
chaptersBook_6[9].before(chaptersBook_6[10]);
