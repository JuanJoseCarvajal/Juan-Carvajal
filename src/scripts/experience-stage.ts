const stage = document.querySelector<HTMLElement>('[data-experience-stage]');
if (stage) {
 const chapters = [...stage.querySelectorAll<HTMLElement>('[data-chapter]')];
 const buttons = [...stage.querySelectorAll<HTMLButtonElement>('[data-stage]')];
 const controller = stage.querySelector<HTMLElement>('.object-controller')!;
 const object = stage.querySelector<HTMLElement>('.design-object')!;
 const reduced = matchMedia('(prefers-reduced-motion: reduce)');
 const desktop = matchMedia('(min-width: 1000px)');
 let active = 0, yaw = 0, pitch = 0, drag: {id:number;x:number;y:number}|null = null;
 const pose = () => {
  object.style.setProperty('--object-y', `${[-16,12,-24,0,16][active]+yaw}deg`);
  object.style.setProperty('--object-x', `${8+pitch}deg`);
  object.style.setProperty('--object-spread', `${[0,18,36,12,0][active]}px`);
 };
 const select = (index:number) => {
  active=index;
  chapters.forEach((node,i)=>{node.hidden=i!==index;});
  buttons.forEach((node,i)=>{if(i===index)node.setAttribute('aria-current','step');else node.removeAttribute('aria-current');});
  pose();
 };
 const scrollable = () => desktop.matches && !reduced.matches;
 const onScroll = () => {
  if (!scrollable()) return;
  const travel=stage.offsetHeight-innerHeight+110;
  const progress=Math.max(0,Math.min(1,(110-stage.getBoundingClientRect().top)/travel));
  const index=Math.min(4,Math.floor(progress*5));
  if(index!==active)select(index);
 };
 buttons.forEach((button,index)=>button.addEventListener('click',()=>{
  select(index);
  if(scrollable())window.scrollTo({top:scrollY+stage.getBoundingClientRect().top-110+(stage.offsetHeight-innerHeight+110)*(index+.15)/5,behavior:'instant'});
 }));
 const reset=()=>{yaw=0;pitch=0;pose();};
 stage.querySelector('[data-reset]')?.addEventListener('click',reset);
 stage.querySelectorAll<HTMLElement>('[data-turn]').forEach(button=>button.addEventListener('click',()=>{yaw+=Number(button.dataset.turn)*15;pose();}));
 controller.addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(event.key))return;
  event.preventDefault();
  if(event.key==='Home')reset();
  else {yaw+=event.key==='ArrowLeft'?-10:event.key==='ArrowRight'?10:0;pitch=Math.max(-25,Math.min(25,pitch+(event.key==='ArrowUp'?-5:event.key==='ArrowDown'?5:0)));pose();}
 });
 controller.addEventListener('pointerdown',event=>{
  if(event.button!==0)return;
  drag={id:event.pointerId,x:event.clientX,y:event.clientY};controller.setPointerCapture(event.pointerId);object.classList.add('dragging');
 });
 controller.addEventListener('pointermove',event=>{
  if(!drag||event.pointerId!==drag.id)return;
  yaw+=(event.clientX-drag.x)*.35;pitch=Math.max(-25,Math.min(25,pitch-(event.clientY-drag.y)*.15));drag.x=event.clientX;drag.y=event.clientY;pose();
 });
 const end=()=>{drag=null;object.classList.remove('dragging');};
 controller.addEventListener('pointerup',end);controller.addEventListener('pointercancel',end);controller.addEventListener('lostpointercapture',end);
 window.addEventListener('scroll',onScroll,{passive:true});
 window.addEventListener('resize',onScroll);reduced.addEventListener('change',onScroll);
 pose();onScroll();
}
