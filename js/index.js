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

//tabs
// const tabOpportunities = document.getElementById("opportunities");
// const tabRequirements = document.getElementById("requirements");
// const opportunitiesPage = document.getElementById("opportunitiesPage");
// const requirementsPage = document.getElementById("functionalPage");

// if (tabOpportunities) {
//   tabOpportunities.addEventListener("click", () => {
//     tabRequirements.classList.remove("active");
//     tabOpportunities.classList.add("active");
//     opportunitiesPage.classList.remove("active");
//     requirementsPage.classList.add("active");
//   });
// }

// if (tabRequirements) {
//   tabRequirements.addEventListener("click", () => {
//     tabOpportunities.classList.remove("active");
//     tabRequirements.classList.add("active");
//     requirementsPage.classList.remove("active");
//     opportunitiesPage.classList.add("active");
//   });
// }
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

//выбор дней
const formPageChecks = document.querySelectorAll(".form-page-check");
const formChecks = document.querySelectorAll(".form-check");
const formAgreement = document.querySelector(".cheat-enemy__agreement span");
const buyArrow = document.querySelectorAll(".buy");

if (formPageChecks) {
  formPageChecks.forEach((item) => {
    item.addEventListener("click", () => {
      formChecks.forEach((elem) => {
        if (elem.classList.contains("active")) {
          elem.classList.remove("active");
          formAgreement.classList.remove("active");
          buyArrow.forEach((el) => {
            el.classList.remove("active");
          });
        }
        const formCheck = item.querySelector(".form-check");
        formCheck.classList.add("active");
      });
    });
  });
}
if (formAgreement) {
  formAgreement.addEventListener("click", () => {
    formAgreement.classList.toggle("active");
    formPageChecks.forEach((item) => {
      const itemSpan = item.querySelector(".form-check");
      if (itemSpan.classList.contains("active")) {
        const itemArrow = item.querySelector(".buy");
        itemArrow.classList.toggle("active");
      }
    });
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
