var car = document.getElementById("car");
var signal = document.getElementById("signal");
var red = document.getElementById("red");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");
var carsound = document.getElementById("carsound");
var startsound = document.getElementById("startsound");

function traffic(a) {
  if (a == "red") {
    red.style.opacity = "100%";
    gsap.killTweensOf("#car");
    yellow.style.opacity = "10%";
    green.style.opacity = "10%";
  } else if (a == "yellow") {
    startsound.play();
    gsap.killTweensOf("#car");
    gsap.to("#car", { y: "+=1", x: "+=1", repeat: 1 });
    yellow.style.opacity = "100%";
    green.style.opacity = "10%";
    red.style.opacity = "10%";
  } else if (a == "green") {
    carsound.play();
    green.style.opacity = "100%";
    yellow.style.opacity = "10%";
    red.style.opacity = "10%";
    gsap.fromTo("#car", { x: 0 }, { x: -1400, duration: 7 }).repeat(Infinity);
  }
}
console.log(carsound);
