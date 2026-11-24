const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){ menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Abrir menu'); nav.classList.remove('open'); }
menu.addEventListener('click',()=>{ const open=menu.getAttribute('aria-expanded')==='true'; if(open) closeMenu(); else{menu.setAttribute('aria-expanded','true');menu.setAttribute('aria-label','Fechar menu');nav.classList.add('open');} });
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
window.matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.08});document.querySelectorAll('.needs-grid article,.about-copy,.room-wrap,.steps article,.faq-items').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
