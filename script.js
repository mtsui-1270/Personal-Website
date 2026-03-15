// This waits for the page to load
window.addEventListener('DOMContentLoaded', () => {
    const sidebarButton = document.getElementById("sidebar-button");
    const sidebar = document.getElementById("sidebar");

    sidebarButton.addEventListener("click", () => {
        if (sidebar.classList.contains("opened")) {
            sidebar.classList.remove("opened");
            sidebarButton.innerText = '››';
        } else {
            sidebar.classList.add("opened");
            sidebarButton.innerText = '‹‹';
        }
    });
});