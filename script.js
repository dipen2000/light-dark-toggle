let btn = document.getElementById("btn");
let sunMoonContainer = document.querySelector(".sun-moon-container");
btn.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark");
    // let currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"));
    // sunMoonContainer.style.setProperty("--rotation" , currentRotation + 180);
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
});