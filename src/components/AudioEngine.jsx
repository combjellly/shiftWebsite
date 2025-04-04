import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { launch, launchDirt, renderStandalone, parse } from '../shift/shift.js';

const AudioEngine = forwardRef((props, ref) => {
  const [isWebDirtLoaded, setIsWebDirtLoaded] = useState(false);
  const engineRecordRef = useRef(null);
  const webDirtRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.WebDirt) {
      setIsWebDirtLoaded(true);
      launchNow();
    } else {
      const interval = setInterval(() => {
        if (window.WebDirt) {
          setIsWebDirtLoaded(true);
          clearInterval(interval);
          launchNow();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

    const unlockAudioContext = (audioCtx) => {
    if (audioCtx.state !== 'suspended') return;
    const b = document.body;
    const events = ['touchstart', 'touchend', 'mousedown', 'keydown'];
    events.forEach((e) => b.addEventListener(e, unlock, false));

    function unlock() {
      audioCtx.resume().then(clean);
    }
    function clean() {
      events.forEach((e) => b.removeEventListener(e, unlock));
    }
  };

  const launchNow = () => {
    engineRecordRef.current = launch();
    webDirtRef.current = launchDirt();
    unlockAudioContext(webDirtRef.current);
    render();
};

  const doEvaluate = () => {
    const t = document.getElementById('generatedCodeDummy').innerText;
    const x = parse(engineRecordRef.current)(t)();
    document.getElementById('status').textContent = x;
  };

  const doEvaluateStandalone = () => {
    var t = document.getElementById("code").value;
    var x = parse(engineRecordRef.current)(t)();
    //document.getElementById("status").textContent = x;
  }

  const stop = () => {
    const x = parse(engineRecordRef.current)('')();
    //document.getElementById('status').textContent = x;
  };

  const render = () => {
    const disp = renderStandalone(engineRecordRef.current)(webDirtRef.current)();
    // playMidiEvents(disp); // MIDI
    console.log(disp);
    setTimeout(render, 300);
  };
  
  // Expose functions to parent (BlocklyApp) via ref
  useImperativeHandle(ref, () => ({
    doEvaluateStandalone,
    doEvaluate,
    stop,
    launchNow
  }));

  if (!isWebDirtLoaded) {
    return <div>Loading WebDirt...</div>;
  }

  return (
    <div>
    </div>
  );
});

export default AudioEngine;
