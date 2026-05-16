const yearElement = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");
const copyEmailButton = document.getElementById("copyEmailButton");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function setThemeLabel() {
  if (!themeToggle) {
    return;
  }

  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

if (themeToggle) {
  setThemeLabel();
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Theme still changes for this page view if storage is unavailable.
    }
    setThemeLabel();
  });
}

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email || "";
    const defaultLabel = copyEmailButton.dataset.defaultLabel || "Copy Email";

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = "Copied";
    } catch {
      window.prompt("Copy email address:", email);
      copyEmailButton.textContent = "Copy Shown";
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = defaultLabel;
    }, 1800);
  });
}
