import { useEffect, useRef, useState } from "react";
import presets from "../shift/presets.js";
import "bootstrap-icons/font/bootstrap-icons.css";


const Repl = ({ doEvaluateStandalone, stop, launchNow }) => {
  const textareaRef = useRef(null);
  const [buttonState, setButtonState] = useState(1);
  const messages = Object.values(presets);
  let currMesg = 0;

  useEffect(() => {
    advanceMessage();
    readURL();
  }, []);

  const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "250px";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0";
  };

  const advanceMessage = () => {
    if (textareaRef.current) {
      textareaRef.current.value = messages[currMesg++ % messages.length];
    }
  };

const exportCode = () => {
  if (textareaRef.current) {
    // Create the exported code from the textarea value
    let hashedCode = btoa(textareaRef.current.value)
      .replace(/=+$/, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
    
    // Get the current full URL (including path and query params if any)
    const currentUrl = window.location.href;

    // Construct the URL with the hashed code, but keeping the full current URL intact
    const urlString = `${currentUrl.split('#')[0]}#${hashedCode}`;

    // Write the URL with the exported code to the clipboard
    navigator.clipboard.writeText(urlString);
    console.log(urlString);  // Optionally log to console for debugging
  }
};




  const toggleButton = () => {
    setButtonState(prevState => {
      const newState = prevState + 1;
      const buttonToggle = document.getElementById("button_toggle");
      if (newState % 2 === 0) {
        buttonToggle.className = "bi bi-stop-fill";
        doEvaluateStandalone(); // Call the function passed from Standalone
      } else {
        buttonToggle.className = "bi bi-play-fill";
        stop(); // Call the stop function passed from Standalone
      }
      return newState;
    });
  };

  const readURL = () => {
    if (window.location.hash && textareaRef.current) {
      let hashedCode = window.location.hash.substring(1);
      let decodedCode = atob(hashedCode.replace(/-/g, '+').replace(/_/g, '/'));
      textareaRef.current.value = decodedCode;
    } else {
      console.log("No Hash");
    }
  };

  return (
    <div id="repl-container">
      <div className="buttonPlace">
      <p>
        <button onClick={openSidebar} className = "bi bi-info-circle"></button>
      </p>

      <p>
        <button onClick={toggleButton} id="button_toggle" className = "bi bi-play-fill" ></button>
      </p> 
      <p>
        <button onClick={advanceMessage} className = "bi bi-fast-forward-fill"></button>
      </p>
      <p>
        <button onClick={exportCode} className="bi bi-box-arrow-up-right"></button>
      </p>

      </div>

      <textarea ref={textareaRef} id="code" rows="4" cols="50"  />
    
    </div>
  );
};

export default Repl;
