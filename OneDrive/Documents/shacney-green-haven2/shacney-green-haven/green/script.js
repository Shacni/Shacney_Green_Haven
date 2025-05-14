// Simple script (optional)
// Add a fun interactive feature
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.createElement("div");
    welcomeMessage.textContent = "Hover over me for a surprise!";
    welcomeMessage.style.cssText = "margin-top: 20px; padding: 10px; background-color: lightgreen; color: darkgreen; font-size: 18px; text-align: center; cursor: pointer; border-radius: 5px;";

    welcomeMessage.addEventListener("mouseover", () => {
        welcomeMessage.textContent = "Enjoy shopping at Shacney Green Haven!";
        welcomeMessage.style.backgroundColor = "darkgreen";
        welcomeMessage.style.color = "white";
    });

    welcomeMessage.addEventListener("mouseout", () => {
        welcomeMessage.textContent = "Hover over me for a surprise!";
        welcomeMessage.style.backgroundColor = "lightgreen";
        welcomeMessage.style.color = "darkgreen";
    });
    // Add a personalized name in the navigation bar
    const navBar = document.createElement("div");
    navBar.style.cssText = "position: fixed; top: 0; width: 100%; background-color: #4CAF50; color: white; padding: 10px; font-size: 20px; text-align: center; font-family: 'Arial, sans-serif'; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); z-index: 1000;";
    navBar.textContent = "Welcome to Shacney Green Haven - By [SAMIRA SHACNEY]";
    document.body.prepend(navBar);
    document.body.appendChild(welcomeMessage);
});
