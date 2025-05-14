document.addEventListener("DOMContentLoaded", () => {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    
    // Remove the welcome overlay after animation
    setTimeout(() => {
        welcomeOverlay.style.display = 'none';
    }, 4000);

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

    document.body.appendChild(welcomeMessage);
});