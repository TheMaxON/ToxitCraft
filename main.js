// PRELOADER
window.addEventListener('load', function () {
    var loader = document.querySelector('.preloader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// ONLOAD ANIMATION
function appearOnload() {
    const mainLogo = document.querySelector('.box-1__logo');
    mainLogo.classList.add('opacity');
}

// RULES GLITCH
// const rulesDiv = document.querySelector('.rules-body')
// const count = 18
// for (let i = 0; i < count; i++) {
//     const glitch = document.createElement('div')
//     glitch.className = 'glitchBox'
//     rulesDiv.appendChild(glitch)
// }

// const glitchBox = document.querySelectorAll('.glitchBox');
// setInterval(() => {
//     for (let i = 0; i < glitchBox.length; i++) {
//         glitchBox[i].style.left = Math.floor(Math.random() * 100) + 'vw';
//         glitchBox[i].style.top = Math.floor(Math.random() * 100) + 'vw';
//         glitchBox[i].style.width = Math.floor(Math.random() * 800) + 'px'
//         glitchBox[i].style.height = Math.floor(Math.random() * 50) + 'px'
//         glitchBox[i].style.zIndex = '200'
//         console.log('glitch-works')
//     }
// }, 250);

//NEWS EXTEND

function newsOpen() {
    const newsTab = document.querySelector('.news-tab');
    const newsElem = document.querySelector('.news-elem');
    const newsArrow = document.querySelector('.news-arrow');

    newsTab.classList.add('news-tab__open');
    newsElem.style.visibility = 'visible';
    newsArrow.style.transform = 'rotate(90deg)';
}

const newsTab = document.querySelector('.news-tab');
const newsHeader = document.querySelector('.news-tab__header');
const newsElem = document.querySelector('.news-elem');
const newsTabHeight = document.querySelector('.news-tab__open');

newsTab.addEventListener('mouseover', function () {
    newsTab.style.width = '30em';
    newsHeader.style.width = '100%';
    newsHeader.innerHTML =
        'НОВОСТИ <i class="fa-solid fa-angle-right news-arrow"></i>';
});

newsTab.addEventListener('mouseout', function () {
    newsTab.style.width = '90px';
    newsTab.classList.remove('news-tab__open');
    newsHeader.style.width = '90px';
    newsHeader.innerHTML = '<img src="media/newspaper.png" alt="">';
    newsElem.style.visibility = 'hidden';
});

//CLASS CARDS

function dwarfExtend() {
    const classOverlay = document.querySelector('.class-overlay__container');
    const className = document.querySelector('.class-title');
    const classImg = document.querySelector('.class-img__box');
    const classBack = document.querySelector('.class-overlay');
    const classDesc = document.querySelector('.class-descbox p');
    const classHighlighter = document.querySelector('.text-highlighter');

    classOverlay.style.display = 'flex';
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });

    className.innerHTML = 'ДВОРФЫ';
    classImg.innerHTML = '<img src="media/dwarves-icon.png" alt="">';
    classBack.classList.add('class-overlay__dwarf-back');
    classDesc.innerHTML =
        '<span class="text-highlighter">Дворфы</span> – сильная и могучая раса. Эти гордые существа обитают на землях, в которых многие другие не могут или не желают даже находиться. <br> <br> По природе дворфы имеют <span class="text-highlighter">сильные физические данные</span>, отличаясь толстой кожей и отменным здоровьем, из-за чего на них <span class="text-highlighter">совершенно не действуют некоторые яды и болезни</span>. Тем самым они часто проявляют себя как отважные и живучие воины. Как в бою, так и в дружбе – они всегда стойки, крепки и бесстрашны. По окончании тяжёлого дня, любой дворф всегда готов опрокинуть кружку эля в уютной таверне.';
}

function classExtendClose() {
    const classOverlay = document.querySelector('.class-overlay__container');
    const classBack = document.querySelector('.class-overlay');

    classBack.classList.remove('class-overlay__dwarf-back');
    classBack.classList.remove('class-overlay__mage-back');
    classBack.classList.remove('class-overlay__orc-back');
    classBack.classList.remove('class-overlay__elf-back');
    classOverlay.style.display = 'none';
    window.onscroll = function () {};
}

function mageExtend() {
    const classOverlay = document.querySelector('.class-overlay__container');
    const className = document.querySelector('.class-title');
    const classImg = document.querySelector('.class-img__box');
    const classBack = document.querySelector('.class-overlay');
    const classDesc = document.querySelector('.class-descbox p');

    classOverlay.style.display = 'flex';
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });

    className.innerHTML = 'МАГИ';
    classImg.innerHTML = '<img src="media/mages-icon.png" alt="">';
    classBack.classList.add('class-overlay__mage-back');
    classDesc.innerHTML =
        '<span class="text-highlighter">Маг</span> - заклинатель специализирующийся на нанесении <span class="text-highlighter">быстрого и сильного урона</span> как по одной цели, так и по выбранной области. В PvP маг <span class="text-highlighter">атакует с расстояния</span> и <span class="text-highlighter">использует защитные заклинания</span> что бы избежать получения урона в бою. Так же обладают широким спектром возможностей для контроля противника.<br><br> Его основные характеристики - интеллект, выносливость, сила заклинаний, критический удар, меткость и скорость чтения заклинаний.';
}

function orcExtend() {
    const classOverlay = document.querySelector('.class-overlay__container');
    const className = document.querySelector('.class-title');
    const classImg = document.querySelector('.class-img__box');
    const classBack = document.querySelector('.class-overlay');
    const classDesc = document.querySelector('.class-descbox p');

    classOverlay.style.display = 'flex';
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });

    className.innerHTML = 'ОРКИ';
    classImg.innerHTML = '<img src="media/orcs-icon.png" alt="">';
    classBack.classList.add('class-overlay__orc-back');
    classDesc.innerHTML =
        '<span class="text-highlighter">Орки</span> всегда предпочитают ближний бой, где каждый может показать свою силу, выучку и храбрость. Их яростные воины известны всем за свою <span class="text-highlighter">огромную силу и нерушимую стойкость</span>. <br> <br> Орки очень <span class="text-highlighter">гордая и свободолюбивая раса</span>, хотя в свое время они находились под гнетом демонического проклятия и представляли из себя жестоких и кровожадных существ. Они очень воинственный народ. Если есть противник, они никогда не поворачиваются к нему спиной.';
}

function elvesExtend() {
    const classOverlay = document.querySelector('.class-overlay__container');
    const className = document.querySelector('.class-title');
    const classImg = document.querySelector('.class-img__box');
    const classBack = document.querySelector('.class-overlay');
    const classDesc = document.querySelector('.class-descbox p');

    classOverlay.style.display = 'flex';
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });

    className.innerHTML = 'ЭЛЬФЫ';
    classImg.innerHTML = '<img src="media/elves-icon.png" alt="">';
    classBack.classList.add('class-overlay__elf-back');
    classDesc.innerHTML = 'Эльфы';
}
function descboxOverlayMobile() {
    var classDetails = document.querySelector('.class-details');
    var classDescbox = document.querySelector('.class-descbox');
    var classImg = document.querySelector('.class-img__box');
    var classHeaderDetails = document.querySelector(
        '.class-mobile_header_details'
    );
    var classHeaderDescbox = document.querySelector(
        '.class-mobile_header_descbox'
    );
    var activeHeader = 0;

    if (window.screen.width <= 1600) {
        classDetails.style.width = '100%';
        classDetails.style.position = 'absolute';
        classDetails.style.transform = 'none';
        classDetails.style.marginTop = '10%';
        classDescbox.classList.add('class-descbox_mobile');
        classImg.classList.add('class-img_mobile');

        classDetails.style.display = 'none';
        classDescbox.style.display = 'none';
    }

    classHeaderDetails.addEventListener('click', function () {
        if (activeHeader === 1) {
            classDetails.style.display = 'none';
            classDescbox.style.display = 'none';
            classHeaderDescbox.style.backgroundColor = 'transparent';
            classHeaderDetails.style.backgroundColor = 'transparent';
            activeHeader = 0;
        } else {
            classDetails.style.display = 'flex';
            classDescbox.style.display = 'none';
            classHeaderDescbox.style.backgroundColor = 'transparent';
            classHeaderDetails.style.backgroundColor = '#c2beb2';
            activeHeader = 1;
        }
    });

    classHeaderDescbox.addEventListener('click', function () {
        if (activeHeader === 3) {
            classDetails.style.display = 'none';
            classDescbox.style.display = 'none';
            classHeaderDescbox.style.backgroundColor = 'transparent';
            classHeaderDetails.style.backgroundColor = 'transparent';
            activeHeader = 0;
        } else {
            classDescbox.style.display = 'flex';
            classDetails.style.display = 'none';
            classHeaderDetails.style.backgroundColor = 'transparent';
            classHeaderDescbox.style.backgroundColor = '#c2beb2';
            activeHeader = 3;
        }
    });
}

//WIDGET

function widgetMap() {
    var mainHeader = document.querySelector('.main-preview__header');
    var mapBtn = document.querySelector('.map-unit-btn');
    var tasksBtn = document.querySelector('.tasks-unit-btn');
    var storeBtn = document.querySelector('.store-unit-btn');
    var mapWidget = document.querySelector('.map-wrapper');
    var tasksWidget = document.querySelector('.tasks-wrapper');
    var storeWidget = document.querySelector('.store-wrapper');

    mapBtn.classList.add('side-bar__unit-active');
    tasksBtn.classList.remove('side-bar__unit-active');
    storeBtn.classList.remove('side-bar__unit-active');
    mapWidget.style.display = 'initial';
    tasksWidget.style.display = 'none';
    mainHeader.innerHTML = '<span>Карта</span>';
    storeWidget.style.display = 'none';
}

function widgetTasks() {
    var mainHeader = document.querySelector('.main-preview__header');
    var mapBtn = document.querySelector('.map-unit-btn');
    var tasksBtn = document.querySelector('.tasks-unit-btn');
    var storeBtn = document.querySelector('.store-unit-btn');
    var mapWidget = document.querySelector('.map-wrapper');
    var tasksWidget = document.querySelector('.tasks-wrapper');
    var storeWidget = document.querySelector('.store-wrapper');

    mapBtn.classList.remove('side-bar__unit-active');
    tasksBtn.classList.add('side-bar__unit-active');
    storeBtn.classList.remove('side-bar__unit-active');
    mapWidget.style.display = 'none';
    tasksWidget.style.display = 'initial';
    mainHeader.innerHTML = '<span>Задания</span>';
    storeWidget.style.display = 'none';
}

function widgetStore() {
    var mainHeader = document.querySelector('.main-preview__header');
    var mapBtn = document.querySelector('.map-unit-btn');
    var tasksBtn = document.querySelector('.tasks-unit-btn');
    var storeBtn = document.querySelector('.store-unit-btn');
    var mapWidget = document.querySelector('.map-wrapper');
    var tasksWidget = document.querySelector('.tasks-wrapper');
    var storeWidget = document.querySelector('.store-wrapper');

    mapBtn.classList.remove('side-bar__unit-active');
    tasksBtn.classList.remove('side-bar__unit-active');
    storeBtn.classList.add('side-bar__unit-active');
    mapWidget.style.display = 'none';
    tasksWidget.style.display = 'none';
    mainHeader.innerHTML = '<span>Магазин</span>';
    storeWidget.style.display = 'grid';
}

function mainScreenCheck() {
    const mainPrev = document.querySelector('.main-preview');
    const activeTab = document.querySelector('.tasks-unit-btn');
    if (window.screen.width <= 950) {
        mainPrev.style.display = 'none';
        activeTab.classList.remove('side-bar__unit-active');
    }
}

function mainExtender() {
    const mainPrev = document.querySelector('.main-preview');
    const sideBarHint = document.querySelector('.side-bar_hint');

    mainPrev.style.display = 'flex';
    sideBarHint.style.display = 'none';
}

function newsPreviewExtend() {
    const newsContainer = document.querySelector('.news-preview__container');
    const btn = document.querySelector('.news-preview__extender');

    newsContainer.style.height = '100%';
    btn.addEventListener('click', function () {
        if (newsContainer.style.height === '100%') {
            newsContainer.style.height = '15em';
            btn.innerHTML =
                'Показать больше <i class="fa-solid fa-chevron-down"></i>';
        } else {
            newsContainer.style.height = '100%';
            btn.innerHTML = 'Свернуть <i class="fa-solid fa-chevron-up"></i>';
        }
    });
    btn.innerHTML = 'Свернуть <i class="fa-solid fa-chevron-up"></i>';
}

//BURGER
function burgerOpen() {
    const mobMenu = document.querySelector('.header-mobile');

    mobMenu.style.display = 'flex';
}

function burgerClose() {
    const mobMenu = document.querySelector('.header-mobile');

    mobMenu.style.display = 'none';
}
