// components/BlocklyApp.js
"use client";
import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import { save, load } from '../blockly/serialization';
import { forBlock } from '../blockly/generators/javascript';
import '../styles/blockly.css';
import { toolbox } from '../blockly/toolbox';
import { shiftGenerator } from '../blockly/generators/shiftBlock';
import { blocks } from '../blockly/blocks/shiftBlock';
import * as BlockDynamicConnection from '@blockly/block-dynamic-connection';
import AudioEngine from './AudioEngine';

const BlocklyApp = () => {
  const audioEngineRef = useRef(null);

  useEffect(() => {
    if (document.getElementById('blocklyDiv').childNodes.length > 0) return;

    Blockly.common.defineBlocks(blocks);
    Object.assign(shiftGenerator.forBlock, forBlock);

    const blocklyDiv = document.getElementById('blocklyDiv');
    const ws = Blockly.inject(blocklyDiv, { toolbox });

    load(ws);

    ws.addChangeListener((e) => {
      if (e.isUiEvent) return;
      save(ws);
    });

    ws.addChangeListener((e) => {
      if (e.isUiEvent || e.type === Blockly.Events.FINISHED_LOADING || ws.isDragging()) return;
      runCode();
    });

    const runCode = () => {
      const code = shiftGenerator.workspaceToCode(ws);
      document.getElementById('generatedCodeDummy').innerText = code;
      document.getElementById('generatedCodeDisplay').innerText = code;
    };

    return () => {
      ws.dispose();
    };
  }, []);

  return (
    <div>

      <AudioEngine ref={audioEngineRef} />
      
      <textarea id="code"></textarea>

      <button className="buttonW" onClick={() => audioEngineRef.current?.doEvaluate()}> ▶️ </button>
      <button className="buttonW" onClick={() => audioEngineRef.current?.stop()}> Stop </button>

      <div id="status"></div>

      <div id="blocklyDiv" style={{ height: '700px', width: '100%' }}></div>
      <pre id="generatedCodeDummy"></pre>
      <pre id="generatedCodeDisplay"><code></code></pre>
    </div>
  );
};

export default BlocklyApp;
