const boysBtn = document.getElementById('boys-btn'),
girlsBtn = document.getElementById('girls-btn'),
studentContainer = document.querySelectorAll(".stu-det-cont"),
studentContainerBoys = document.querySelector(".stu-det-cont.boys"),
studentContainerGirls = document.querySelector(".stu-det-cont.girls"),
sideBar= document.querySelector(".sideBar")
function flip(e){
   e.target.classList.toggle("active")
}
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
            
            
 <!--  <div class="box-cont" >
               <div class="box front">
               <div class="title-txt">
                  <h2>${item.name}</h2>
               </div>
               <div class="img-box">
                  <img src="${item.img}" alt="" />
               </div>
            </div>
            <div class="box back">
               <div class="img-box">
                  <img src="images/img.jpg" alt="" />
               </div>
            </div>
            </div>
  -->
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
}).finally(e=>{
   console.log('finished')
})
function openBar(){
   sideBar.classList.add("hide")
}
const closeBar = ()=>{
   sideBar.classList.remove("hide")
}
