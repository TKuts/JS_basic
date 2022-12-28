const tabs = document.querySelectorAll(".tabs-title");
const tabsItems = document.querySelectorAll(".tabs_item");

const onTabClick = (item) => {
  item.addEventListener("click", () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabs.forEach((item) => {
        item.classList.remove("active");
      });
      tabsItems.forEach((item) => {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
  document.querySelector(".tabs-title").click();
};

tabs.forEach(onTabClick);
