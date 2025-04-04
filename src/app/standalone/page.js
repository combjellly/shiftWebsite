"use client";

//import Script from "next/script";
import { useRef } from "react";
import AudioEngine from "../../components/AudioEngine";
import Repl from "../../components/Repl";
import "../../styles/standalone.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Standalone = () => {
  const audioEngineRef = useRef(null);

  return (
    <div>
      <h1>shift</h1>
    

      {/* Audio Engine */}
      <AudioEngine ref={audioEngineRef} />

      {/* Pass doEvaluate and stop as props */}
      <Repl
        doEvaluateStandalone={() => audioEngineRef.current?.doEvaluateStandalone()}
        stop={() => audioEngineRef.current?.stop()}
        launchNow={() => audioEngineRef.current?.launchNow()}
      />

      <div id="mySidebar" className="sidebar">
        <button className="closebtn" onClick={() => document.getElementById("mySidebar").style.width = "0"}>
          &times;
        </button>
        <div>
          <img
            style={{ display: "block", margin: "auto" }}
            src="static/img/logo.png"
            width="30%"
            height="auto"
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <a href="https://shift.nickhernandez.ca/docs/intro"> About</a>
            <a href="https://shift.nickhernandez.ca/docs/category/tutorial---basics"> Tutorials</a>
            <a href="http://hdl.handle.net/11375/28305"> Thesis</a>
            <br />
            <label htmlFor="midiOutputDropdown">Select MIDI Output:</label>
            <select id="midiOutputDropdown"></select>
            <button onClick={() => populateMidiOutputDropdown()}>Populate MIDI Output</button>
            <button onClick={() => playMidiEvents()}>Test MIDI Output</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standalone;
