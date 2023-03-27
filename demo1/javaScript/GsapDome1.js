// gsap.set('.box', { y: 500 });

// 设置gsap时间线 重复时间线
const tl = gsap.timeline({ repeat: -1, yoyo: true, default: { duration: 0.5 } });




tl.from('.box', {
    // duration: 2,
    width: '10px',
    height: '10px',
    opacity: 0,
    stagger: 0.32,
});
// 
tl.to('.box ', {
    x: 100,
    // duration: 2,
    stagger: 0.3
})

// tl.to('.box', {
//     x: 100,
//     // 获取组件  duration时间
//     duration: 2,
//     rotation: 360,
//     border: '10px solid purple',
//     borderRadius: '50%',
//     // // repeat动画次数  -1无限次 
//     repeat: -1,
//     // yoyo  ture返回原来状态
//     yoyo: true,
//     //多个延迟多少秒
//     stagger: 0.5,
//     // 动画结束延迟多少秒   delay 动画开始前  {},"1" "<" "=+1")  等待1s   跟 
//     repeatDelay: 1,
//     // ease  in开始快    out 结束快     inout对称 
//     ease: 'power1.inout'
// });