
// 7 buttone object in 
// console.log(cat);output
// id: 101
// lessonName: "Basic Vocabulary"




// category-container 
//buttton er jono
function loadbuttone(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((data)=>displayCatagories(data.data));
    //console.log("con")
    }
    loadbuttone();
    
    
    //display 
    function displayCatagories(categorys){
    //show button in website
    /***
     * get the container
     * loop operation
     * create element
     * appand
     */
    const categoryContainer=document.getElementById("category-container");
    for (let cat of categorys){
        console.log(cat)
        //create element
        const categoryDiv=document.createElement("div");
        categoryDiv.innerHTML=`<button id="btn-${cat.level_no}" onclick="loadcard(${cat.level_no})" class="btn btn-outline btn-primary"><img src="./assets/fa-book-open.png" alt="">Lesson-${cat.level_no}</button>`;
        categoryContainer.append(categoryDiv)
    }
    }
    //buttone ssash
    
    
    //Load ward card
    function loadWordcard(){
        shoeloader();
        fetch("https://openapi.programming-hero.com/api/level/5")
        .then((response)=>response.json())
        .then((data)=>displayloadwordcard(data.data));
    }
    //loadWordcard()
    
    
    //{id: 4, level: 5, word: 'Diligent', meaning: 'পরিশ্রমী', pronunciation: 'ডিলিজেন্ট'}
    
    const displayloadwordcard=(words)=>{
    //console.log(word);
    const wordContainer=document.getElementById("word-container");
    wordContainer.innerHTML="";


if(words.length==0){
    wordContainer.innerHTML=`<div class="bg-[#F8F8F8]  col-span-full w-11/12 mx-auto flex  flex-col justify-center items-center text-center " >
      
<div class="w-[120px]"><img  src="https://img.icons8.com/?size=160&id=4imHE87rnKtQ&format=png" alt=""></div>
<div class="bg-[#F8F8F8]   ">
   
    <div><h3 class="font-semibold text-[#79716B] py-6">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয় নি । </h3></div>
    <div><h1 class="font-bold text-[#292524] text-4xl pb-8">নেক্সট Lesson এ যান</h1></div>
</div>

</div>`;
    return;
}

    //loop
     words.forEach(word=>{
     
         console.log(words);
           //element create
           const wordcard=document.createElement("div");
           wordcard.innerHTML=`<div class="card bg-base-100  shadow-sm">
     
    
           <div class="card-body ">
                <div class="text-center">
                <h2 class="font-bold text-2xl mt-5 pb-2">${word.word}</h2>
            <h1 class="pb-2 font-black">Meaning/Pronouncution</h1>
             <h2 class="font-bold text-1xl mb-5">${word.meaning}/${word.pronunciation}</h2>
            </div>
              <div class="flex justify-between mt-2 mb-3">
                <div id="info"><img onclick=infobtn(${word.id}) src="https://img.icons8.com/?size=48&id=84883&format=png" alt=""></div>
                <div><img src="https://img.icons8.com/?size=48&id=4nJj4Jt11SNK&format=png" alt=""></div>
            </div>
        </div>
      </div>
        `;
    wordContainer.append(wordcard);     
    });
    hideloader();
    };
    
    
    //button click one one show
   const loadcard=(id)=>{
    shoeloader();
    console.log(id);

    const url=`https://openapi.programming-hero.com/api/level/${id}`
  console.log(url)
   
  fetch(url)
  .then((res)=>res.json())
  .then ((data)=>{
    const clickedButton=document.getElementById(`btn-${id}`);
    removeActiveClass()
    clickedButton.classList.add("active")
    console.log(clickedButton);
    displayloadwordcard(data.data)
    
  }) ;

   }
    


   function removeActiveClass(){
    const activeButtone=document.getElementsByClassName("active");
    for (let btn of activeButtone){
btn.classList.remove("active");
    }
  
   }

   const infobtn=(WId)=>{
    console.log(WId);

    const url=`https://openapi.programming-hero.com/api/word/${WId}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displaymodal(data.data));

   }
    

   const displaymodal=(data)=>{
console.log(data)
document.getElementById("my_modal_1") .showModal()

const detailsContainer=document.getElementById("details-container");
detailsContainer.innerHTML=`  <div class=" bg-base-100 w-96 shadow-sm">
  
        <div class="card-body font-bold">
          <h2 class="card-title">${data.word}(<img src="https://img.icons8.com/?size=48&id=85836&format=png" alt="">:${data.pronunciation} )</h2>
             <h2>Meaning</h2>
         <h2>${data.meaning}</h2>
         
         <h2>Example</h2>
         <h2>${data.sentence}</h2>
         <h2>সমার্থক শব্দ গুলো</h2>
        
         <div class="flex gap-1"> <button class="btn">${data.synonyms[0]}</button><button class="btn">${data.synonyms[1]}</button><button class="btn">${data.synonyms[2]}</button></div>
          </div>
           <button class="btn btn-primary btn-sm">Compleate Learning</button>  
      </div>    `
   }
    

   document.getElementById("A").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (password === "123456") {
        document.getElementById("Ban").style.display = "none";
        document.getElementById("headerr").style.display = "block"; // Hide the section
        document.getElementById("B").style.display = "block";
        document.getElementById("faqSection").style.display = "block";
          // Show the section
    } else {
        alert("Incorrect Password!");
    }
});


const shoeloader=()=>{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("word-container").classList.add("hidden");
}
const hideloader=()=>{
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("word-container").classList.remove("hidden");
}