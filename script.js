/* ========= SCREEN SWITCH ========= */
function go(step){
  document.querySelectorAll(".screen").forEach(sc=>{
    sc.classList.remove("active");
  });
  document.getElementById("s"+step).classList.add("active");
}

/* ========= STEP 3 WAIT ========= */
let waitBtn = document.getElementById("waitBtn");
if(waitBtn){
  setTimeout(()=>{
    waitBtn.disabled = false;
    waitBtn.innerText = "I'm Ready 🌸";
    waitBtn.onclick = ()=>go(4);
  },5000);
}

/* ========= TYPEWRITER EFFECT ========= */
const memoryText = `Sun yaar…
Mujhe pata hai humare beech aaj-kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se…
aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga
jo mere saath 1.5 saal tak chalega.
Aur haan yaar… 1.5 saal ho gaye,
pata hi nahi chala.

Tujhe wo date yaad hai?
June 17 — jab tu mujhe mili thi,
jab humari baatein start hui thi.

Ly ❤️‍🩹
Happpppppyyyy Birthday meri Shraddha 🎂❤️
Again and again.`;

let index = 0;
let typingStarted = false;

function startTyping(){
  if(typingStarted) return;
  typingStarted = true;

  let box = document.getElementById("typeText");

  function type(){
    if(index < memoryText.length){
      box.innerText += memoryText.charAt(index);
      index++;
      setTimeout(type, 35); // 👈 perfect emotional speed
    }
  }
  type();
}

/* typing start jab memory page active ho */
const observer = new MutationObserver(()=>{
  if(document.getElementById("s6").classList.contains("active")){
    startTyping();
  }
});

observer.observe(document.body,{attributes:true,subtree:true});

/* ========= END TRANSITION ========= */
function endShow(){
  let last = document.getElementById("s7");
  last.classList.add("fade");

  setTimeout(()=>{
    go(8);
  },1500);
}
