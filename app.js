const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on('scroll', (e) => {
    console.log(e);
  })

  var tl = gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"0% 90%",
    end:"40% 40%",
    scrub:true
  }})

  tl.to("#wine" ,{
    top:"110%",
    left:"-26%",
    scale:"1.2"

  })

  var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".page3",
    start:"0% 95%",
    end:"40% 50%",
    scrub:true
  }})

  tl2.to("#wine",{
    top:"197%",
    scale:"0.91"
  })