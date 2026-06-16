function forceChatterBottom() {
  const mainView = document.querySelector(".o_form_view");
  const formRenderer = document.querySelector(".o_form_renderer");
  const chatterContainer = document.querySelector(".o-mail-ChatterContainer");
  const formSheetBg = document.querySelector(".o_form_sheet_bg");
  const formSheet = document.querySelector(".o_form_sheet");

  // Capturamos el preview del PDF y el iframe interno del visor
  const pdfPreview = document.querySelector(".o_attachment_preview");

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

  // Reseteamos el chatter para que por defecto sea full width
  if (chatterContainer) {
    if (chatterContainer.classList.contains("o-aside")) {
      chatterContainer.classList.remove("o-aside");
      chatterContainer.classList.add("mt-4", "mt-md-0");
    }
    
    const innerChatter = chatterContainer.querySelector(".o-mail-Chatter");
    if (innerChatter) {
      innerChatter.classList.remove("overflow-auto");
      innerChatter.style.setProperty("width", "100%", "important");
    }
  }

  // --- LÓGICA SEGURA DE DOS COLUMNAS ---
  if (pdfPreview && chatterContainer) {
    let splitContainer = document.querySelector(".o-custom-split-container");

    if (!splitContainer) {
      splitContainer = document.createElement("div");
      splitContainer.className = "o-custom-split-container";
      
      splitContainer.style.setProperty("display", "flex", "important");
      splitContainer.style.setProperty("flex-direction", "row-reverse", "important");
      splitContainer.style.setProperty("align-items", "flex-start", "important");
      splitContainer.style.setProperty("gap", "20px", "important");
      splitContainer.style.setProperty("width", "100%", "important");
      splitContainer.style.setProperty("margin-top", "20px", "important");

      pdfPreview.parentNode.insertBefore(splitContainer, pdfPreview);

      splitContainer.appendChild(pdfPreview);
      splitContainer.appendChild(chatterContainer);
    }

    // 1. Ajustes de ancho para las dos columnas (50/50)
    pdfPreview.style.setProperty("width", "50%", "important");
    pdfPreview.style.setProperty("max-width", "50%", "important");
    pdfPreview.style.setProperty("flex", "1", "important");

    chatterContainer.style.setProperty("width", "50%", "important");
    chatterContainer.style.setProperty("max-width", "50%", "important");
    chatterContainer.style.setProperty("flex", "1", "important");

    // 2. NUEVO: Forzar tamaño normal y alto del PDF para que no se colapse
    pdfPreview.style.setProperty("height", "85vh", "important"); // 85% del alto de la ventana del navegador
    pdfPreview.style.setProperty("min-height", "750px", "important");

    const pdfIframe = pdfPreview.querySelector("iframe");
    if (pdfIframe) {
      pdfIframe.style.setProperty("height", "100%", "important");
      pdfIframe.style.setProperty("width", "100%", "important");
    }

  } else if (chatterContainer) {
    const splitContainer = document.querySelector(".o-custom-split-container");
    if (splitContainer) {
      splitContainer.parentNode.insertBefore(chatterContainer, splitContainer);
      splitContainer.remove();
    }

    chatterContainer.style.setProperty("width", "100%", "important");
    chatterContainer.style.setProperty("max-width", "100%", "important");
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