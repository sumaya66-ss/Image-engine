 const accessKey ="6wOyXpF1wp2KO-o8uQj4SD1T9CoH5w5ZZzbDrZLuQHM";

const searchForm =document.getElementById("search-form");
const searchbox =document.getElementById("search-box");
const searchResult =document.getElementById("search-result");
const showMoreBtn =document.getElementById("show-more-btn");

let keyWord ="";
let page = 1;
async function searchImages() {
    //keyWord =searchbox.value ;
    try {
         const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
    const res = await fetch(url);
    const data =await res.json();
    if(page === 1){
        searchResult.innerHTML="";
    }
    const results =data.results;
    results.map((results) =>{
        const image =document.createElement("img");
        image.src = results.urls.small;

         image.classList.add(
       "w-full",
    "h-[230px]",
    "object-cover",
    "rounded-[5px]"
    );

        const imageLink =document.createElement("a");
        imageLink.href =results.links.html;
        imageLink.target ="_blank";


        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);



    });
    showMoreBtn.style.display ="block";
        
    } catch (error) {
        console.log(error);
    }
    
   

    searchbox.value = "";

    
    
};

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
     keyWord = searchbox.value;  
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click",()=>{
    console.log("Button Clicked");
    
    page++;
    searchImages();
})