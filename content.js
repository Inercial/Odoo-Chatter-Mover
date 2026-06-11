function forceChatterBottom() {
  const mainView = document.querySelector(".o_form_view");
  const formRenderer = document.querySelector(".o_form_renderer");
  const chatterContainer = document.querySelector(".o-mail-ChatterContainer");
  const formSheetBg = document.querySelector(".o_form_sheet_bg");
  const formSheet = document.querySelector(".o_form_sheet");

  if (formRenderer && formRenderer.classList.contains("flex-nowrap")) {
    formRenderer.classList.remove("flex-nowrap", "h-100");
    formRenderer.classList.add("flex-column");
  }

  if (mainView && mainView.classList.contains("o_xxl_form_view")) {
    mainView.classList.remove("o_xxl_form_view", "h-100");
  }

  if (formSheetBg) {
    formSheetBg.style.setProperty("width", "100%", "important");
    formSheetBg.style.setProperty("max-width", "100%", "important");
  }

  if (formSheet) {
    formSheet.style.setProperty("width", "100%", "important");
    formSheet.style.setProperty("max-width", "100%", "important");
  }


  if (chatterContainer && chatterContainer.classList.contains("o-aside")) {
    chatterContainer.classList.remove("o-aside");
    chatterContainer.classList.add("mt-4", "mt-md-0");
    
    chatterContainer.style.setProperty("width", "100%", "important");
    chatterContainer.style.setProperty("max-width", "100%", "important");
    
    const innerChatter = chatterContainer.querySelector(".o-mail-Chatter");
    if (innerChatter) {
      innerChatter.classList.remove("overflow-auto");
      innerChatter.style.setProperty("width", "100%", "important");
    }
    console.log("[Odoo Extension] Formulario y Chatter expandidos al 100%.");
  }
}

const observer = new MutationObserver(() => {
  forceChatterBottom();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

setInterval(forceChatterBottom, 400);

window.addEventListener("DOMContentLoaded", forceChatterBottom);
window.addEventListener("load", forceChatterBottom);
forceChatterBottom();