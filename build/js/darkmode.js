const sunIcon = document.querySelector(".sun_icon");
const moonIcon = document.querySelector(".moon_icon");
var body = document.getElementsByTagName("body")

// Setting user and system themes
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;


// Icon toggle
const iconToggle = () =>{
   moonIcon.classList.toggle("display-none");
   sunIcon.classList.toggle("display-none");
}

// Theme check
const themeCheck = () =>{
   if (userTheme === "dark" || (!userTheme && systemTheme)){
      document.documentElement.classList.add("dark");
      moonIcon.classList.add("display-none");
      return;
   }
   sunIcon.classList.add("display-none");
};

// Theme switch
const themeSwitch = () =>{
   if (document.documentElement.classList.contains("dark")){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
   }
   document.documentElement.classList.add("dark");
   localStorage.setItem("theme", "dark");
   iconToggle();
};


// Switch themes when clicking on icons
sunIcon.addEventListener("click", () =>{
   themeSwitch();
});
moonIcon.addEventListener("click", () =>{
   themeSwitch();
});

// Initial check on load
themeCheck();