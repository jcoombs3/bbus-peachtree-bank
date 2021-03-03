document.addEventListener("DOMContentLoaded", () => {
  const password = document.getElementById("password");
  const visibilityToggleButton = document.getElementById(
    "password-visibility-toggle-button"
  );
  const eyeIcon = document.getElementById("password-eye-icon");

  showHidePassword = () => {
    if (password.type == "password") {
      password.setAttribute("type", "text");
      eyeIcon.classList.add("fa-eye-slash");
      visibilityToggleButton.setAttribute(
        "aria-labelledby",
        "hide-password-aria-label"
      );
    } else {
      eyeIcon.classList.remove("fa-eye-slash");
      password.setAttribute("type", "password");
      visibilityToggleButton.setAttribute(
        "aria-labelledby",
        "show-password-aria-label"
      );
    }
  };
  visibilityToggleButton.addEventListener("click", showHidePassword);
});
