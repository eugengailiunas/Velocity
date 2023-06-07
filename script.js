// делаю переключение табов

// выбираю все кнопки в обёртке табов
const tabsBtns = document.querySelectorAll(".tabs__nav .button");
// console.log(tabsBtns);

// выбираю все айтемы в обёртке табов
const tabsItem = document.querySelectorAll(".tabs__item");
// console.log(tabsItem)

// делаю функцию которая будет скрывать табы и убирать активный класс у  кнопки
function hideTabs() {
  tabsItem.forEach(item => item.classList.add("hide"));
  tabsBtns.forEach(btn => btn.classList.remove("active"));
};

// делаю функцию которая будет показывать табы и добавлять активный класс у соотвутствующей кнопки по индексу
function showTabs(index) {
  tabsItem[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
};

hideTabs();
showTabs(0);

//вызываю на кнопку отслеживание по клику на кнопку нужный таб и отображение его, ориентиром будет индекс
tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabs();
  showTabs(index);
}))


// ----------------------
// smooth scroll page

/* делаю плавную прокрутку при нажатии на меню
1. оглашаю константу которая ищет все пункты меню
2. перебираю эту константу с помощю => в которой указываю слушать на клик
и передаю вторым аргументом функцию с ивентом, который дальше будет убирать
привычное поведение ссылки (то есть при нажатии на кнопку ссылка куда-то 
ведет и появляется в строке раутинг) я это убираю
3. Объявляю константу которая забирает аттрибут у ссылки - это href так как
в нем передаю id секции к которой надо прокрутить страницу (в html к данным
секциям вешаю id и передаю их в ссылках в аттрибуте href)
4. Объявляю константу в которой элемент заюирает нужную секцию по id
5.Обращаюсь к окну через скролл и при помощи top передаю куда должна вернуться
страница elem.offsetTop это значит к верху секции и поведение плавное 
*/


const anchors = document.querySelectorAll(".menu__link");

anchors.forEach(anc => {
  anc.addEventListener("click", function (event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 50,
      behavior: "smooth"
    })
  })
});



// const anchors = document.querySelectorAll(".menu__link");

// anchors.forEach(anc => {
//   anc.addEventListener("click", function (event) {
//     event.preventDefault();

//     const id = anc.getAttribute("href");
//     const elem = document.querySelector(id);

//     window.scroll({
//       top: elem.offsetTop - 50,
//       behavior: "smooth"
//     })
//   })
// })
