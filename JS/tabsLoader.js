const firstTabTitle = document.getElementById("tab1");
const secondTabTitle = document.getElementById("tab2");
const thirdTabTitle = document.getElementById("tab3");
const tabTitles = document.getElementsByClassName("singleTabTitle");
const tabContentWrapper = document.getElementById("tabContentWrapper");


const loadLoader = () => {
    const loaderContainer = document.createElement("div");
    const loader = document.createElement("img");

    while (tabContentWrapper.firstChild) {
        tabContentWrapper.removeChild(tabContentWrapper.lastChild)
    }

    loader.src = "../IMG/loader.png";
    loaderContainer.appendChild(loader);
    loaderContainer.classList.add("loaderContainer");
    tabContentWrapper.appendChild(loaderContainer);
}


const loadTabTextContent = (array) => {
    const singleTabWrapper = document.createElement("div");
    const singleTabContainer = document.createElement("div");

    while (tabContentWrapper.firstChild) {
        tabContentWrapper.removeChild(tabContentWrapper.lastChild)
    }

    array.forEach(element => {
        const line = document.createElement("p");
        line.textContent = element;
        singleTabContainer.appendChild(line);
    });

    singleTabContainer.classList.add("singleTabContainer");
    singleTabWrapper.classList.add("singleTabWrapper");
    singleTabWrapper.appendChild(singleTabContainer);
    tabContentWrapper.appendChild(singleTabWrapper);
}


const loadData = async (tabName) => {
    
    try {
        const promise = await fetch(`../ajax/${tabName}.json`);
        const data = await promise.json();
        loadTabTextContent(data.item.content);
    } catch (error) {
        loadLoader();
        console.log(error);
    }
}


firstTabTitle.addEventListener("click", () => {
    [...tabTitles].forEach(title => title.classList.remove("selected"));
    firstTabTitle.classList.add("selected");

    const idName = firstTabTitle.getAttribute("id");
    loadLoader();
    setTimeout(() => loadData(idName), 1000);  
});


secondTabTitle.addEventListener("click", () => {
    [...tabTitles].forEach(title => title.classList.remove("selected"));
    secondTabTitle.classList.add("selected");

    const idName = secondTabTitle.getAttribute("id");
    loadLoader();
    
    setTimeout(() => loadData(idName), 1000);
});


thirdTabTitle.addEventListener("click", () => {
    [...tabTitles].forEach(title => title.classList.remove("selected"));
    thirdTabTitle.classList.add("selected");

    const idName = thirdTabTitle.getAttribute("id");
    loadLoader();
    setTimeout(() => loadData(idName), 1000);
});

loadData("tab1");




