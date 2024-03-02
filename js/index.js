const loadNews = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const newses = data.posts;
    // console.log(news)
    displayNews(newses);
}

const displayNews = (newses) =>{

    const newsContainer =document.getElementById('news-container'); 
    
   newses.forEach(news => {
     console.log(news)
     const newsCard = document.createElement('div'); 
     newsCard.classList= `flex gap-5 bg-slate-100 p-5 rounded-2xl`;
     newsCard.innerHTML = `
     <figure><img src="${news.image}" alt="Shoes" /></figure>
     <div class="">
     <div class="flex gap-6 font-medium">
     <p># ${news.category}</p>
     <p>Author :${news.author.name}</p>
     </div>
     <h2 class="text-xl font-bold">${news.title}</h2>
     <p class="mb-3 text-slate-500">${news.description}</p>
     <hr class="mb-3">
     <div class="flex justify-evenly text-slate-500">
     <div class="flex gap-2">
     <img src="./images/tabler-icon-message-2.png" alt="">
     <p>${news.comment_count}</p>
        
     </div>
     <div class="flex gap-2">
      <img src="./images/tabler-icon-eye.png" alt="">
      <p>${news.view_count}</p>
        
     </div>
     <div class="flex gap-2">
     <img src="./images/tabler-icon-clock-hour-9.png" alt="">
      <p>${news.posted_time
      } min</p>

     </div>
     <div id="message-container">
      <img src="./images/email 1.png" alt="">
     </div>
     </div>
     </div>

     
     `
     newsContainer.appendChild(newsCard);
   });
} 

const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText =searchField.value;
    console.log(searchText);
}
loadNews();