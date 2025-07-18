const boysBtn = document.getElementById('boys-btn'),
girlsBtn = document.getElementById('girls-btn'),
studentContainer = document.querySelectorAll(".stu-det-cont"),
studentContainerBoys = document.querySelector(".stu-det-cont.boys"),
studentContainerGirls = document.querySelector(".stu-det-cont.girls"),
sideBar= document.querySelector(".sideBar"),
prevImg= document.querySelector('.prev-img'),
images= document.querySelectorAll(".box img"),
closeIcon= prevImg.querySelector("span")


closeIcon.onclick = ()=>{
   prevImg.classList.remove("active")
}

prevImg.style.viewTransitionName = "target";

images.forEach(img=>{
   img.addEventListener('click',()=>{
     document.startViewTransition(async ()=>{
        prevImg.classList.add("active");
     prevImg.querySelector("img").src = img.src;
     })
   }
      
   )
})

   



girlsBtn.addEventListener("click", (e)=>{

studentContainer[0].classList.remove("active")
studentContainer[1].classList.add("active")
e.target.classList.add("active")
boysBtn.classList.remove("active")
   
})

boysBtn.addEventListener("click", (e)=>{
   studentContainer[0].classList.add("active")
studentContainer[1].classList.remove("active")
girlsBtn.classList.remove("active")
e.target.classList.add("active")
})






fetch("js/data.json").then(res=>
   res.json()).then(data=>{
studentContainerBoys.innerHTML= data.boys.map(item=>{
      return `        <div class="card">
               <div class="id">${item.id}</div>
               <div class="header">

                  <div class="card-title">
                     <h1>United Private Center</h1>
                     <p id="joinDate">${item.joinDate} </p>
                  </div>
               </div>
               
               <div class="card-details">
                  <img src="${item.img}" alt="${item.name}" loading="lazy" class="profile-img" />
                  <div>
                     <h1>${item.name}</h1>
                     <p>studied at : <b><i>${item.school}</i></b></p>
                  </div>
               </div>
               
            </div> 
            
            

            `
   }).join('');
   
const  boxCont = document.querySelectorAll(".box-cont")

boxCont.forEach(box=>{
   box.addEventListener("click", function(){
   this.classList.toggle("active")
})
}) 
   
   studentContainerGirls.innerHTML= data.girls.map(item=>{
      return `  <div class="card">
               <div class="id">${item.id}</div>
               <div class="header">
                  
                  <div class="card-title">
                     <h1>United Private Center</h1>
                     <p id="joinDate">${item.joinDate} </p>
                  </div>
               </div>
               
               <div class="card-details">
                  <img src="${item.img || "images/images.png"} 
                " loading="lazy" alt="${item.name}"  class="profile-img" />
                  <div>
                     <h1>${item.name}</h1>
                     <p>studied at : <b><i>${item.school}</i></b></p>
                  </div>
               </div>
               
            </div>`
   }).join('');
   
}).catch(e=>{
   alert(e)
});



function openBar(){
   sideBar.classList.add("hide")
}
const closeBar = ()=>{
   sideBar.classList.remove("hide")
}

                             
fetch('images/upc-image.svg')
    .then(res => res.text())
    .then(data => {
       document.querySelector(".content").innerHTML= data;
    })
    .catch(err => {
    console.error(err)
    alert(err)
    }
    ); 
gsap.registerPlugin(ScrambleTextPlugin)
  
  
     gsap.to(".main-title-txt", {
  duration: 3, 
  scrambleText: {
    text: "STUDENTS", 
    chars: "lowerCase", 
    revealDelay: 0.5, 
    speed: 0.3, 
    newClass: "mainTxtActive"
  }
});
  

