/* Subtle cursor and circuit-line accent. No dependencies.
 * Add <script src="portfolio-effects.js" defer></script> to each page.
 * Keeps the native cursor; disabled on touch and with reduced motion.
 */
(() => {
  'use strict';
  if (document.getElementById('portfolio-effects-style')) return;

  const style = document.createElement('style');
  style.id = 'portfolio-effects-style';
  style.textContent = `
    .portfolio-cursor {
      position: fixed; top: 0; left: 0; width: 28px; height: 28px;
      z-index: 9999; pointer-events: none; opacity: 0;
      color: var(--accent, #a94c35); will-change: transform;
    }
    .portfolio-cursor::before {
      content: ''; position: absolute; inset: 0; border: 1px solid currentColor;
      border-radius: 50%; opacity: .55;
      transition: transform 160ms ease, background-color 160ms ease;
    }
    .portfolio-cursor[data-link]::before {
      transform: scale(1.55); background: color-mix(in srgb, currentColor 7%, transparent);
    }
    .portfolio-cursor[data-pressed]::before { transform: scale(.7); }
    .portfolio-circuit {
      position: absolute; right: -1px; bottom: 0; width: 67%; height: auto;
      color: var(--accent, #a94c35); opacity: .19; pointer-events: none;
    }
    @media (prefers-reduced-motion: reduce), (hover: none), (pointer: coarse) {
      .portfolio-cursor { display: none; }
    }
    @media (forced-colors: active) {
      .portfolio-cursor, .portfolio-circuit { display: none; }
    }
  `;
  document.head.append(style);

  // Decorative linework sits behind a future portrait photograph.
  const fallback = document.querySelector('.portrait-fallback');
  if (fallback) {
    const ns = 'http://www.w3.org/2000/svg';
    const art = document.createElementNS(ns, 'svg');
    art.classList.add('portfolio-circuit');
    art.setAttribute('viewBox', '0 0 240 200');
    art.setAttribute('aria-hidden', 'true');
    art.setAttribute('focusable', 'false');
    art.setAttribute('fill', 'none');
    art.setAttribute('stroke', 'currentColor');
    art.setAttribute('stroke-width', '1');
    const traces = ['M240 35H154L126 63V200', 'M240 63H182L154 91V200', 'M240 91H210L182 119V200'];
    traces.forEach(d => {
      const path = document.createElementNS(ns, 'path');
      path.setAttribute('d', d);
      art.append(path);
    });
    [[154, 35], [182, 63], [210, 91]].forEach(([x, y]) => {
      const node = document.createElementNS(ns, 'circle');
      node.setAttribute('cx', x);
      node.setAttribute('cy', y);
      node.setAttribute('r', '3');
      node.setAttribute('fill', 'var(--photo, #e6ded2)');
      art.append(node);
    });
    fallback.prepend(art);
  }

  const media = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)');
  const ring = document.createElement('div');
  ring.className = 'portfolio-cursor';
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(ring);

  let x = 0, y = 0, targetX = 0, targetY = 0, frame = 0, visible = false;
  function draw() {
    x += (targetX - x) * .35;
    y += (targetY - y) * .35;
    const settled = Math.abs(targetX - x) + Math.abs(targetY - y) < .1;
    if (settled) { x = targetX; y = targetY; }
    ring.style.transform = `translate3d(${x - 14}px, ${y - 14}px, 0)`;
    ring.style.opacity = '1';
    frame = !settled && visible ? requestAnimationFrame(draw) : 0;
  }
  function hide() {
    visible = false;
    cancelAnimationFrame(frame);
    frame = 0;
    ring.style.opacity = '0';
    ring.removeAttribute('data-pressed');
    ring.removeAttribute('data-link');
  }
  document.addEventListener('pointermove', event => {
    if (!media.matches || event.pointerType !== 'mouse') return hide();
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), dialog[open]')) return hide();
    targetX = event.clientX;
    targetY = event.clientY;
    if (!visible) { x = targetX; y = targetY; }
    visible = true;
    ring.toggleAttribute('data-link', !!target?.closest('a, button, summary, [role="button"]'));
    if (!frame) frame = requestAnimationFrame(draw);
  }, { passive: true });
  document.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse') return hide();
    if (visible) ring.setAttribute('data-pressed', '');
  }, { passive: true });
  document.addEventListener('pointerup', () => ring.removeAttribute('data-pressed'), { passive: true });
  document.documentElement.addEventListener('pointerleave', hide);
  document.addEventListener('keydown', hide);
  document.addEventListener('visibilitychange', hide);
  window.addEventListener('blur', hide);
  window.addEventListener('scroll', hide, { passive: true });
  media.addEventListener('change', hide);
})();
