import React, { useState, useEffect, useRef } from 'react';
import { colorByTag } from '../App';

export default function TextEditor({ handleClear, setIndices, data, highlight }) {
  const [splitText, setSplitText] = useState({
    pre: null,
    mid: null,
    pos: data.text,
  });

  const spanRef = useRef(null);
  const scrollParentRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    if (highlight.active) {
      const pre = data.text.slice(0, highlight.start);
      const mid = data.text.slice(highlight.start, highlight.end);
      const pos = data.text.slice(highlight.end);

      setSplitText({
        pre,
        mid,
        pos,
      });
    } else {
      setSplitText({
        pre: null,
        mid: null,
        pos: data.text,
      });
    }
  }, [highlight, data]);

  useEffect(() => {
    if (highlight.active) {
      spanRef.current.scrollIntoView({ block: 'center' });
    }
    // eslint-disable-next-line
  }, [splitText]);

  function keyDownIntercept(e) {
    if (e.keyCode === 8) handleClear(e);
    e.preventDefault();
  }
  function handleSelection() {
    const selection = window.getSelection();
    const anchorNode = selection.anchorNode;

    let start = Math.min(selection.anchorOffset, selection.focusOffset);
    let end = Math.max(selection.anchorOffset, selection.focusOffset);

    if (start === end) {
      return setIndices({
        start: null,
        end: null,
      });
    }
    // Expand selection variables to cover whole words
    while (!/\s/.test(anchorNode.textContent[start - 1])) {
      if (start === 0) break;
      start--;
    }

    while (!/\s/.test(anchorNode.textContent[end])) {
      if (end === anchorNode.textContent.length) break;
      end++;
    }
    // Imperatively declare the expanded selection in browser

    const range = new Range();
    range.setStart(anchorNode, start);
    range.setEnd(anchorNode, end);
    selection.removeAllRanges();
    selection.addRange(range);

    setIndices({
      start: start,
      end: end,
    });
  }

  return (
    <div ref={scrollParentRef} className="section has-background-white" id="text-section">
      <p
        ref={pRef}
        onKeyDown={(e) => keyDownIntercept(e)}
        onMouseUp={() => handleSelection()}
        onTouchEnd={() => handleSelection()}
      >
        {splitText.pre}
        <span
          ref={spanRef}
          className={highlight.active ? `has-background-${colorByTag(highlight.tag)}-light` : ''}
        >
          {splitText.mid}
        </span>
        {splitText.pos}
      </p>
    </div>
  );
}
