const accessKey = "jUsKSdOXzHjOyWc4sN3M--BZGymvR4OOQuG0zmADs8U"

const searchForm = document.getElementById('search-form') ;
const searchBox = document.getElementById('search-id') ;
const showmoreBtn = document.getElementById('show-more') ;
const searchResult = document.getElementById('search-result') ;  

//  jUsKSdOXzHjOyWc4sN3M--BZGymvR4OOQuG0zmADs8U

let keyword = "" ;
let page = 1  ;

async function searchImages() {
    keyword = searchBox.value ;
    const url = `https://api.unsplash.com/search/photos?
    page=${page}&query=${keyword}&client_id=${accessKey}&per_page12`  ;

    let response = await fetch(url) ;  
    let data = await response.json() ;

    let results = data.results ;

   if(page === 1) {
    searchResult.innerHTML = ""
   } 

    results.map((result) => {
        const image = document.createElement("img") ;
        image.src = result.urls.small ;
        
        const imageLink = document.createElement("a") ;
        imageLink.href = result.links.html ;

        imageLink.target = "_blank" ;

        imageLink.appendChild(image) ;
        searchResult.appendChild(imageLink) ; 
    }) ;

    showmoreBtn.style.display = "block"
} ;


searchForm.addEventListener("submit" , (e) => {
    e.preventDefault() ;
    page = 1 ;
    searchImages() ;
} )

showmoreBtn.addEventListener("click" , () => {
    page++ ;
    searchImages();
})



