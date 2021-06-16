import download from "downloadjs";
import html2canvas from "html2canvas";
import React from "react";

/**
 * Hook to generate screenshot
 */
function useScreenshot() {
  const captureRef = React.useRef(null);

  const [status, setStatus] = React.useState("idle");

  async function generateImage(e) {
    e.preventDefault();
    if (!captureRef?.current) {
      return;
    }
    try {
      setStatus("loading");
      let area = document.getElementById("codeArea");
      let oldStyle = area.style.cssText;
      area.style = "display: none;";
      html2canvas(captureRef.current).then((canvas) => {
        download(canvas.toDataURL(), `kodsnap-${Date.now()}.png`);
        area.style = oldStyle;
      });
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  }

  return {
    generateImage,
    captureRef,
    status,
  };
}

export default useScreenshot;
