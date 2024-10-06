document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const overlay = document.getElementById("mobileMenuOverlay");
    const closeBtn = overlay.querySelector(".close-btn-icon");
    const overlayLinks = overlay.querySelectorAll("a");

    hamburgerIcon.addEventListener("click", function () {
        overlay.style.width = "100%";
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.width = "0%";
    });

    overlayLinks.forEach((link) => {
        link.addEventListener("click", function () {
            overlay.style.width = "0%";
        });
    });

    document.getElementById("npm-install").addEventListener("click", function () {
        navigator.clipboard
            .writeText("npm install -g final-api-cli")
            .then(function () {
                const toast = document.getElementById("toast");
                toast.className = "show";
                setTimeout(function () {
                    toast.className = toast.className.replace("show", "");
                }, 3000);
            })
            .catch(function (error) {
                console.error("Failed to copy text: ", error);
            });
    });

    const folders = document.querySelectorAll(".folder");
    folders.forEach((folder) => {
        folder.addEventListener("click", function (e) {
            e.stopPropagation();
            this.classList.toggle("open");
        });
    });

    const swiggerUIs = document.querySelectorAll(".swigger");
    swiggerUIs.forEach((swiggerUI) => {
        swiggerUI.addEventListener("click", function (e) {
            e.stopPropagation();
            this.classList.toggle("open");
        });
    });
});
