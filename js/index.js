const cheatImageMain = document.querySelector(".cheat-enemy__left-image");
const cheatImageMini = document.querySelectorAll(
  ".cheat-enemy__left-image-mini"
);

if (cheatImageMini) {
  cheatImageMini.forEach((item) => {
    item.addEventListener("click", () => {
      cheatImageMain.src = item.src;
    });
  });
}

//функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.toggle(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};

makeCodeUniversal(".cheat-enemy__centr-tab", ".cheat-enemy__centr-page");
makeCodeUniversal(".pay-mobile__tab", ".pay-mobile__tabs-pages");

//аккордеон
const pageItemBtn = document.querySelectorAll(".page-item");
const pageItemAll = document.querySelectorAll(".page-item-inner");

if (pageItemBtn) {
  pageItemBtn.forEach((item) => {
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      const pageItem = item.querySelector(".page-item-inner");
      const pageItemArrow = item.querySelector(".arrow-img");
      pageItemArrow.classList.toggle("active");
      if (pageItem.classList.contains("active")) {
        pageItem.classList.remove("active");
      } else {
        pageItemAll.forEach((elem) => {
          elem.classList.remove("active");
        });
        pageItem.classList.add("active");
      }
    });
  });
}

//выбор дней + цена
const formCheckDays = document.querySelectorAll(".form-page-check");
const formCheckDaysCheck = document.querySelectorAll(".form-check");
const formAmount = document.querySelector(".form-page-amount span");

if (formCheckDays) {
  formCheckDays.forEach((item) => {
    item.addEventListener("click", () => {
      formCheckDaysCheck.forEach((elem) => {
        elem.classList.remove("active");
      });
      const itemCheck = item.querySelector(".form-check");
      itemCheck.classList.add("active");
    });
  });
}

//делаем кнопку купить кликабельной,если согласен
const formBtnActive = document.querySelector(".form-page__btn-wrapp");
const formBtnPay = document.querySelector(".form-page__btn");
const cheatAgreementCheck = document.querySelector(
  ".cheat-enemy__agreement span"
);

if (cheatAgreementCheck) {
  cheatAgreementCheck.addEventListener("click", () => {
    cheatAgreementCheck.classList.toggle("active");
    formBtnActive.classList.toggle("active");
    formBtnPay.classList.toggle("active");
  });
}

//смотреть все карточки игр
const catalogButton = document.querySelector(".catalog__button");
const catalogGalleryHidden = document.querySelector(".catalog__gallery-hidden");
const catalogButtonHidden = document.querySelector(".catalog__button-hidden");

if (catalogButton) {
  catalogButton.addEventListener("click", () => {
    catalogGalleryHidden.classList.add("active");
    catalogButton.classList.add("active");
    catalogButtonHidden.classList.add("active");
  });
}

if (catalogButtonHidden) {
  catalogButtonHidden.addEventListener("click", () => {
    catalogGalleryHidden.classList.remove("active");
    catalogButton.classList.remove("active");
    catalogButtonHidden.classList.remove("active");
    const element = document.getElementById("catalogGallery");
    element.scrollIntoView({ behavior: "smooth" });
  });
}

//проскроливание картинок
const scrollContainer = document.querySelector(".cheat-enemy__scroll");

if (scrollContainer) {
  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollBy({
      left: event.deltaY,
      behavior: "smooth",
    });
  });
}

//кнопка скачивание файла
const btnDownload = document.getElementById("downloadBtn");

if (btnDownload) {
  btnDownload.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "path/to/your/file.ext"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

//ховер эффект при наведении на кнопки в блоке promo
const promoButton = document.querySelector(".promo__button");
const promoPurchase = document.querySelector(".promo__purchase");

if (promoButton) {
  promoButton.addEventListener("mouseover", function () {
    promoPurchase.classList.add("active");
  });

  promoButton.addEventListener("mouseout", function () {
    promoPurchase.classList.remove("active");
  });
}

if (promoPurchase) {
  promoPurchase.addEventListener("mouseover", function () {
    promoButton.classList.add("active");
  });

  promoPurchase.addEventListener("mouseout", function () {
    promoButton.classList.remove("active");
  });
}

//статус / посмотреть еще
const statusGride = document.querySelector(".cheat-status__gride-more");
const hiddenGrid = document.querySelector(".hidden-grid");

if (statusGride) {
  statusGride.addEventListener("click", () => {
    hiddenGrid.classList.toggle("active");
    const element = document.getElementById("statusGride");
    element.scrollIntoView({ behavior: "smooth" });
  });
}
//мобильное меню
const burger = document.querySelector(".header__burger");
const page = document.querySelector(".page ");
const menuMobile = document.querySelector(".menu-mobile");
const menuMobileItem = document.querySelector(".menu-mobile-item");
const menuMobileList = document.querySelector(".menu-mobile-list");
const menuMobileAssortment = document.querySelector(".menu-mobile-assortment");
const headerLogo = document.querySelector(".header__logo");

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuMobile.classList.toggle("active");
    page.classList.toggle("active");
  });
}

if (menuMobileItem) {
  menuMobileItem.addEventListener("click", () => {
    menuMobileList.classList.add("active");
    menuMobileAssortment.classList.remove("active");
    headerLogo.classList.add("active");
  });
}

if (headerLogo)
  headerLogo.addEventListener("click", () => {
    menuMobileList.classList.remove("active");
    menuMobileAssortment.classList.add("active");
    headerLogo.classList.remove("active");
  });

//наведение на кнопку товары по 400
const catalogCards = document.querySelectorAll(".catalog__card");

if (catalogCards) {
  catalogCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const cardButtons = item.querySelectorAll(".catalog__card-button");
      cardButtons.forEach((elem) => {
        elem.textContent = "Приобрести читы";
      });
    });
  });
}

if (catalogCards) {
  catalogCards.forEach((item) => {
    item.addEventListener("mouseout", () => {
      const cardButtons = item.querySelectorAll(".catalog__card-button");
      cardButtons.forEach((elem) => {
        elem.textContent = "Товары от 400 руб";
      });
    });
  });
}

//выбор дней и появление цены в оплате
const checkDays = document.querySelectorAll(".pay-button");
const amountBody = document.querySelector(".form-page-amount span");

if (checkDays) {
  checkDays.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item, amountBody);
      const dataPrise = item.getAttribute("data-prise");
      amountBody.textContent = dataPrise + " " + "₽";
    });
  });
}
