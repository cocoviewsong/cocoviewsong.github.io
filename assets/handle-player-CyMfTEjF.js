const s=t=>Object.keys(t);function o(t){const n=t+"";return("00"+n).slice(n.length)}function c(t){t=t/1e3;const n=Math.floor(t/60),e=Math.floor(t)%60;return o(n)+":"+o(e)}export{c as f,s as k};
