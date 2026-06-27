// Cursor
const cur=document.getElementById('cur');
const curF=document.getElementById('curF');
let mx=0,my=0,fx=0,fy=0;
if(cur){
  document.addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    cur.style.left=mx+'px';cur.style.top=my+'px';
  });
  (function raf(){
    fx+=(mx-fx)*.13;fy+=(my-fy)*.13;
    curF.style.left=fx+'px';curF.style.top=fy+'px';
    requestAnimationFrame(raf);
  })();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('hov'));
  });
}

// Scroll reveal
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('v');ro.unobserve(e.target);}
  });
},{threshold:.08});
document.querySelectorAll('.r').forEach(el=>ro.observe(el));
