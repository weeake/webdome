// 创建时间线 (时间线时间长短，动画幅度)                          
const tl = gsap.timeline({defaults:{duration:0.75,ease:"power1.out"}})

tl.fromTo('.cookie-container',{scale: 0},{scale: 1,ease:"elastic.out(1,0.4)",duration:1.5});

//'<50%'运行时间和前一个的一半接近
tl.fromTo('.cookie',{opacity:0,x:-75,rotation:'-45deg'},{opacity:1,x:0,rotation:'0deg'},'<50%');

//'<'运行时间和前一个接近
tl.fromTo('.text',{x:30,opacity:0},{x:0,opacity:1},'<');

//yoyo: 动画名字   repeat动画执行次数  -1是无限次
tl.fromTo('.cookie',{y:0,rotation:'0deg'},{y:-20,rotation:'-20deg',yoyo:true,repeat:-1})

// 点击按钮向下消失
const button = document.querySelector('button');
button.addEventListener('click', () =>{
	gsap.to('.cookie-container',{opacity:0, y: 100, duration: 0.75,ease:"power1.out"})
})

// Cookie 跳跃


	