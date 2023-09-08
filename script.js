var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"  
    crsrblur.style.left = dets.x-80+"px"
    crsrblur.style.top = dets.y-80+"px"  
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #ace022"
        crsr.style.backgroundColor = "#ace022"
    }) 
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"75px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end: " top -100%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
     duration:1,
     stagger:0.4,
     scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:2
     }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//      duration:0.1,
//      scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end: "top 62%",
//         scrub:1
//      }
// })
gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:2
    }
})
gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });

