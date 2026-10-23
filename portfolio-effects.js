/* Orbit cursor: colored satellite rings, a fading ink trail, and click sparks.
 * Touch, text editing, keyboard navigation and reduced motion use the native pointer.
 * Decorative artwork remains behind a future portrait photo. No dependencies.
 */
(() => {
  'use strict';
  if (document.getElementById('portfolio-effects-style')) return;
  const style = document.createElement('style');
  style.id = 'portfolio-effects-style';
  style.textContent = `
    .orbit-cursor, .orbit-core, .cursor-ink { position:fixed; top:0; left:0; pointer-events:none; z-index:9999; }
    .orbit-cursor { width:38px; height:38px; opacity:0; color:var(--teal,#2d777c); will-change:transform; }
    .orbit-core { width:5px; height:5px; border-radius:50%; background:var(--accent,#b04c36); opacity:0; }
    .orbit-track { position:absolute; inset:0; transition:scale 180ms ease; }
    .orbit-loop { position:absolute; inset:3px; border:1px solid currentColor; border-radius:50%; transform:rotate(-35deg) scaleY(.48); }
    .orbit-loop::before { content:''; position:absolute; width:5px; height:5px; left:2px; top:2px; background:currentColor; border-radius:50%; }
    .orbit-loop:nth-child(2) { color:var(--violet,#7663a5); transform:rotate(55deg) scaleY(.48); }
    .orbit-spin { position:absolute; inset:0; animation:orbit-turn 4s linear infinite paused; }
    .orbit-active .orbit-spin { animation-play-state:running; }
    .orbit-cursor[data-link] .orbit-track { scale:1.6; }
    .orbit-cursor[data-link] .orbit-spin { animation-duration:1.8s; }
    .orbit-cursor[data-pressed] .orbit-track { scale:.65; }
    .cursor-ink { width:100%; height:100%; z-index:9998; }
    html.orbit-active, html.orbit-active * { cursor:none!important; }
    .portfolio-circuit { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:0; }
    @keyframes orbit-turn { to { transform:rotate(360deg); } }
    @media (prefers-reduced-motion:reduce), (hover:none), (pointer:coarse), (forced-colors:active) {
      .orbit-cursor,.orbit-core,.cursor-ink { display:none; }
      html.orbit-active, html.orbit-active * { cursor:revert!important; }
    }
    @media (forced-colors:active) { .portfolio-circuit { display:none; } }
  `;
  document.head.append(style);

  const fallback = document.querySelector('.portrait-fallback');
  if (fallback) {
    const ns = 'http://www.w3.org/2000/svg';
    const art = document.createElementNS(ns, 'svg');
    art.classList.add('portfolio-circuit');
    art.setAttribute('viewBox', '0 0 400 500');
    art.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    art.setAttribute('aria-hidden', 'true');
    art.setAttribute('focusable', 'false');
    art.setAttribute('fill', 'none');
    const add = (tag, attrs) => {
      const node = document.createElementNS(ns, tag);
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
      art.append(node);
    };
    // A static abstract orbit and short circuit traces, not a project illustration.
    add('ellipse', {cx:200,cy:250,rx:174,ry:116,transform:'rotate(-35 200 250)',stroke:'var(--teal,#2d777c)','stroke-width':1,opacity:.25});
    add('ellipse', {cx:200,cy:250,rx:174,ry:116,transform:'rotate(35 200 250)',stroke:'var(--violet,#7663a5)','stroke-width':1,opacity:.25});
    add('circle', {cx:72,cy:172,r:5,fill:'var(--accent,#b04c36)',opacity:.7});
    add('circle', {cx:333,cy:323,r:4,fill:'var(--teal,#2d777c)',opacity:.7});
    ['M400 378H337L311 404V500','M400 402H361L337 426V500','M400 426H385L361 450V500'].forEach((d,i) => {
      add('path', {d,stroke:i===1?'var(--violet,#7663a5)':'var(--teal,#2d777c)','stroke-width':1,opacity:.25});
    });
    add('path', {d:'M54 73v14M47 80h14',stroke:'var(--violet,#7663a5)','stroke-width':1.5,opacity:.65});
    fallback.prepend(art);
  }

  const media = matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference) and (forced-colors:none)');
  const ring = document.createElement('div');
  ring.className = 'orbit-cursor';
  ring.setAttribute('aria-hidden', 'true');
  const track = document.createElement('div');
  track.className = 'orbit-track';
  const spin = document.createElement('div');
  spin.className = 'orbit-spin';
  for (let i = 0; i < 2; i++) {
    const loop = document.createElement('span');
    loop.className = 'orbit-loop';
    spin.append(loop);
  }
  track.append(spin);
  ring.append(track);
  const core = document.createElement('div');
  core.className = 'orbit-core';
  core.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-ink';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas, ring, core);
  const ctx = canvas.getContext('2d');
  // Keep a native pointer if canvas is unavailable.
  if (!ctx) { ring.remove(); core.remove(); canvas.remove(); return; }
  let dpr = 1, width = 0, height = 0;
  let particles = [], colors = [], x = 0, y = 0, targetX = 0, targetY = 0;
  let frame = 0, visible = false, lastDraw = 0, lastEmit = 0, lastX = 0, lastY = 0;
  let hueIndex = 0;
  function readColors() {
    const css = getComputedStyle(document.documentElement);
    colors = ['--accent','--teal','--violet'].map((name,i) => css.getPropertyValue(name).trim() || ['#b04c36','#2d777c','#7663a5'][i]);
  }
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    width = innerWidth; height = innerHeight;
    canvas.width = Math.round(width*dpr); canvas.height = Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  readColors(); size();
  new MutationObserver(readColors).observe(document.documentElement, {attributes:true,attributeFilter:['data-theme']});
  function schedule() { if (!frame) frame = requestAnimationFrame(draw); }
  function draw(now) {
    frame = 0;
    const dt = Math.min((now - (lastDraw || now)) / 16.67, 3);
    lastDraw = now;
    ctx.clearRect(0,0,width,height);
    x += (targetX-x)*.24; y += (targetY-y)*.24;
    ring.style.transform = `translate3d(${x-19}px,${y-19}px,0)`;
    for (const p of particles) {
      p.life -= dt; p.x += p.vx*dt; p.y += p.vy*dt;
      p.vx *= .97; p.vy *= .97;
      if (p.life <= 0) continue;
      ctx.globalAlpha = Math.max(0,p.life/p.max)*.65;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      if (p.spark) {
        const r=p.r*(p.life/p.max);
        ctx.moveTo(p.x,p.y-r*2);ctx.lineTo(p.x+r*.45,p.y-r*.45);
        ctx.lineTo(p.x+r*2,p.y);ctx.lineTo(p.x+r*.45,p.y+r*.45);
        ctx.lineTo(p.x,p.y+r*2);ctx.lineTo(p.x-r*.45,p.y+r*.45);
        ctx.lineTo(p.x-r*2,p.y);ctx.lineTo(p.x-r*.45,p.y-r*.45);
        ctx.closePath();
      } else ctx.arc(p.x,p.y,p.r*(p.life/p.max),0,Math.PI*2);
      ctx.fill();
    }
    ctx.globalAlpha=1;
    particles=particles.filter(p=>p.life>0);
    const moving = Math.abs(targetX-x)+Math.abs(targetY-y)>.1;
    if (particles.length || (visible && moving)) schedule();
    else lastDraw=0;
  }
  function hide() {
    visible=false;
    document.documentElement.classList.remove('orbit-active');
    ring.style.opacity='0'; core.style.opacity='0';
    ring.removeAttribute('data-link');ring.removeAttribute('data-pressed');
    particles=[];cancelAnimationFrame(frame);frame=0;lastDraw=0;
    ctx.clearRect(0,0,width,height);
  }
  document.addEventListener('pointermove', event => {
    if (!media.matches || event.pointerType!=='mouse') return hide();
    const target=event.target instanceof Element?event.target:null;
    if (target?.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),dialog[open]')) return hide();
    targetX=event.clientX; targetY=event.clientY;
    if (!visible) { x=targetX;y=targetY;lastX=x;lastY=y;lastEmit=event.timeStamp; }
    visible=true;
    document.documentElement.classList.add('orbit-active');
    core.style.transform=`translate3d(${targetX-2.5}px,${targetY-2.5}px,0)`;
    core.style.opacity='1';ring.style.opacity='1';
    ring.toggleAttribute('data-link',!!target?.closest('a,button,summary,[role="button"]'));
    const distance=Math.hypot(targetX-lastX,targetY-lastY);
    if (distance>5 && event.timeStamp-lastEmit>16) {
      particles.push({x:targetX,y:targetY,vx:0,vy:0,r:2.8,life:22,max:22,color:colors[hueIndex++%3]});
      particles=particles.slice(-64);
      lastX=targetX;lastY=targetY;lastEmit=event.timeStamp;
    }
    schedule();
  },{passive:true});
  document.addEventListener('pointerdown',event=>{
    if (event.pointerType!=='mouse') return hide();
    if (!visible) return;
    ring.setAttribute('data-pressed','');
    for(let i=0;i<9;i++) {
      const angle=i*Math.PI*2/9;
      particles.push({x:event.clientX,y:event.clientY,vx:Math.cos(angle)*2.6,vy:Math.sin(angle)*2.6,r:i%3===0?2.7:1.8,life:30,max:30,color:colors[i%3],spark:true});
    }
    particles=particles.slice(-64);schedule();
  },{passive:true});
  document.addEventListener('pointerup',()=>ring.removeAttribute('data-pressed'),{passive:true});
  document.documentElement.addEventListener('pointerleave',hide);
  document.addEventListener('keydown',hide);
  document.addEventListener('visibilitychange',hide);
  window.addEventListener('blur',hide);
  window.addEventListener('scroll',hide,{passive:true});
  window.addEventListener('resize',()=>{hide();size();},{passive:true});
  media.addEventListener('change',hide);
})();
