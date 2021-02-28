const mainDiv = document.getElementById("mainContainer");
const cookieBannerWrapper = document.createElement("div");
const cookieBannerContainer = document.createElement("div");
const text = document.createElement("div");
const buttonWrapper = document.createElement("div");
const button = document.createElement("button");

button.textContent = "OK";
buttonWrapper.appendChild(button);
buttonWrapper.classList.add("bannerWrapper");
text.textContent = "Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy.";
text.classList.add("cookieText");
cookieBannerContainer.append(text,buttonWrapper);
cookieBannerContainer.classList.add("cookieBannerContainer");
cookieBannerWrapper.append(cookieBannerContainer);
cookieBannerWrapper.classList.add("cookieBannerWrapper");


button.addEventListener("click", () => {
    mainDiv.removeChild(cookieBannerWrapper)
})

mainDiv.appendChild(cookieBannerWrapper);

