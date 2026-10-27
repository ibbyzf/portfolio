(() => {
'use strict';
const data=window.PORTFOLIO;
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
let stored;try{stored=localStorage.getItem('portfolio-theme');}catch{}
const setTheme=t=>{document.documentElement.dataset.theme=t;document.querySelectorAll('.theme-toggle').forEach(b=>b.setAttribute('aria-label','Switch to '+(t==='dark'?'light':'dark')+' mode'));};
setTheme(stored==='dark'?'dark':'light');document.querySelectorAll('.theme-toggle').forEach(b=>b.addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(t);try{localStorage.setItem('portfolio-theme',t);}catch{}}));
const path=location.pathname.split('/').pop();document.querySelectorAll('.site-header nav a').forEach(a=>{if(a.getAttribute('href')===path||(path==='project.html'&&a.getAttribute('href')==='projects.html'))a.setAttribute('aria-current','page');});
const contactIcons={Email:'assets/icons/email.svg?v=2',LinkedIn:'assets/icons/linkedin.svg?v=2'};
document.querySelectorAll('[data-contact-links]').forEach(box=>{
  [['Email',data.email?'mailto:'+data.email:''],['LinkedIn',data.linkedin],['GitHub',data.github]].forEach(([name,url])=>{
    if(!url)return;
    try{if(!['https:','mailto:'].includes(new URL(url).protocol))return;}catch{return;}
    const a=el('a','contact-link');a.href=url;
    a.setAttribute('aria-label',name==='Email'?'Email Ibrahim Feknous':name+' profile (opens in a new tab)');
    if(contactIcons[name]){const img=el('img','contact-icon');img.src=contactIcons[name];img.alt='';img.width=22;img.height=22;a.append(img);}
    a.append(el('span','contact-label',name));
    if(!url.startsWith('mailto:')){a.target='_blank';a.rel='noopener noreferrer';}
    box.append(a);
  });
});
const imageDialog=document.querySelector('#image-dialog');let imageTrigger;
imageDialog?.querySelector('.image-close').addEventListener('click',()=>imageDialog.close());imageDialog?.addEventListener('close',()=>imageTrigger?.focus());imageDialog?.addEventListener('click',e=>{if(e.target===imageDialog){const r=imageDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)imageDialog.close();}});
function validImage(src){if(typeof src!=='string'||!src.trim())return false;try{return ['http:','https:','file:'].includes(new URL(src,document.baseURI).protocol);}catch{return false;}}
function addPhoto(container,src,alt,position='center',zoom=false,caption='',fit='cover'){if(!validImage(src))return;const img=el('img','photo-image');img.alt=alt||'Project photograph';img.style.objectPosition=position;img.style.objectFit=fit;img.loading=container.id==='portrait-media'?'eager':'lazy';if(container.id==='portrait-media')img.fetchPriority='high';if(zoom&&imageDialog){const button=el('button','photo-button');button.type='button';button.setAttribute('aria-label','Enlarge image: '+img.alt);button.append(img);button.addEventListener('click',()=>{imageTrigger=button;const full=imageDialog.querySelector('img');full.src=src;full.alt=img.alt;imageDialog.querySelector('figcaption').textContent=caption;imageDialog.showModal();});img.addEventListener('error',()=>button.remove());img.src=src;container.append(button);}else{img.addEventListener('error',()=>img.remove());img.src=src;container.append(img);}}
function gallery(items,container){(items||[]).forEach(photo=>{if(!validImage(photo.src))return;const fig=el('figure'),media=el('div','gallery-media');addPhoto(media,photo.src,photo.alt,photo.position||'center',true,photo.caption||'',photo.fit||'cover');fig.append(media);if(photo.caption)fig.append(el('figcaption','',photo.caption));container.append(fig);});}
const portrait=document.querySelector('#portrait-media');if(portrait&&data.portrait)addPhoto(portrait,data.portrait.src,data.portrait.alt,data.portrait.position);
const aboutGallery=document.querySelector('#about-gallery');if(aboutGallery)gallery(data.aboutPhotos,aboutGallery);
const skills=document.querySelector('#skills-text');
if(skills){
  if(data.skillGroups?.length)data.skillGroups.forEach(group=>{
    const section=el('div','skill-group');section.append(el('h3','',group.title),el('p','',group.items.join(' · ')));skills.append(section);
  });
  else skills.textContent=(data.skills||[]).join(' · ');
}
function cover(p,index,cls,zoom=false){const c=el('div',cls),f=el('div','work-fallback');f.setAttribute('aria-hidden','true');f.append(el('span','work-number',String(index+1).padStart(2,'0')),el('span','work-type',p.category==='power'?'POWER':p.category==='embedded'?'HARDWARE':'SYSTEMS'));c.append(f);addPhoto(c,p.image,p.imageAlt||p.title,p.imagePosition||'center',zoom,p.imageCaption||'',p.imageFit||(cls==='detail-cover'?'contain':'cover'));return c;}
const projects=document.querySelector('#project-list');if(projects)data.projects.forEach((p,i)=>{const a=el('a','work-row');a.href='project.html?id='+encodeURIComponent(p.id);const copy=el('div','work-copy');copy.append(el('h2','',p.title),el('span','date',p.date+' / '+p.status),el('p','',p.summary));const arrow=el('span','work-arrow','↗');arrow.setAttribute('aria-hidden','true');a.append(cover(p,i,'work-cover'),copy,arrow);projects.append(a);});
const detail=document.querySelector('#project-detail');if(detail){const id=new URLSearchParams(location.search).get('id'),index=data.projects.findIndex(p=>p.id===id),p=data.projects[index];if(!p){const n=el('div','not-found');n.append(el('h1','','Project not found'));const back=el('a','inline-link','Browse all projects ↗');back.href='projects.html';n.append(back);detail.append(n);}else{document.title=p.title+' | Ibrahim Feknous';const back=el('a','project-back','← All work');back.href='projects.html';const title=el('div','detail-title');title.append(el('p','eyebrow',p.label),el('h1','',p.title));const meta=el('div','detail-meta');meta.append(el('span','',p.date),el('span','',p.status));title.append(meta);const layout=el('div','detail-layout'),aside=el('aside','detail-aside');aside.append(el('p','aside-label','TOOLS & FOCUS'),el('p','detail-tools',p.tags.join(' / ')));const body=el('div','detail-body');body.append(el('p','detail-overview',p.overview),el('h2','','MY CONTRIBUTION'));const ul=el('ul');p.details.forEach(t=>ul.append(el('li','',t)));body.append(ul,el('p','detail-note',p.note));if(p.website){const link=el('a','inline-link','Visit the team website ↗');link.href=p.website;link.target='_blank';link.rel='noopener noreferrer';body.append(link);}layout.append(aside,body);const images=el('div','gallery');gallery(p.gallery,images);const next=data.projects[(index+1)%data.projects.length],nextBlock=el('div','detail-next');nextBlock.append(el('span','','Next project'));const a=el('a','',next.title+' ↗');a.href='project.html?id='+encodeURIComponent(next.id);nextBlock.append(a);detail.append(back,title,cover(p,index,'detail-cover',true),layout,images,nextBlock);}}
const work=document.querySelector('#experience-list');if(work)data.experience.forEach(e=>{const a=el('article','experience-item');a.append(el('h3','',e.company),el('p','role',e.role),el('span','date',e.date));const ul=el('ul');e.points.forEach(t=>ul.append(el('li','',t)));a.append(ul);work.append(a);});
const lead=document.querySelector('#leadership-list');
if(lead)data.leadership.forEach(l=>{
  const a=el('article','leadership-item'),copy=el('div','leadership-copy');
  if(l.logo){const logo=el('img','organization-logo');logo.src=l.logo;logo.alt=l.title+' logo';logo.loading='lazy';copy.append(logo);}
  copy.append(el('h3','',l.title),el('p','role',l.role));
  const points=el('ul','leadership-points');(l.points||[l.text]).filter(Boolean).forEach(t=>points.append(el('li','',t)));copy.append(points);
  if(l.website){const link=el('a','leadership-project-link','Team website ↗');link.href=l.website;link.target='_blank';link.rel='noopener noreferrer';copy.append(link);}
  if(l.projectId&&data.projects.some(p=>p.id===l.projectId)){
    const link=el('a','leadership-project-link','View project ↗');link.href='project.html?id='+encodeURIComponent(l.projectId);copy.append(link);
  }
  a.append(copy);
  if(validImage(l.image)){
    a.classList.add('has-photo');const photo=el('figure','leadership-photo');
    addPhoto(photo,l.image,l.imageAlt||l.title,l.imagePosition||'center',true,'',l.imageFit||'contain');a.append(photo);
  }
  lead.append(a);
});
})();
