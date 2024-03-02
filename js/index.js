const loadNews = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const newses = data.posts;
    // console.log(news)
    displayNews(newses);
    
}

const displayNews = (newses) =>{
       const newsContainer = document.getElementById('news-container');
       newsContainer.textContent="";
    
    newses.forEach(news => {
       const newsCard = document.createElement('div');
       newsCard.classList= `flex flex-col gap-4 bg-slate-100 p-5 rounded-2xl `;
       newsCard.innerHTML = `
       <div class="img">
       <img class ="w-[30%] rounded-3xl" src="${news.image}" alt="">
   </div>
       <div class="flex gap-10 font-medium">
           <p># Music</p>
           <p>Author: ${news.author.name}</p>
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
               <p>${news.posted_time}min</p>

           </div>
           <div id="message-container">
               <button><img src="./images/email 1.png" alt=""></button>

           </div>
       </div>
       `
       newsContainer.appendChild(newsCard)
        
    });
    
    toggleLoadingSpinner(false)
}

const handleSearch = () =>{
    toggleLoadingSpinner(true);
    const value =document.getElementById('search-field').value;
    if (value) {
        loadNews(value);
    }
    else{
        alert('Please enter a valid ID')
    }

}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    
   if (isLoading) {
     loadingSpinner.classList.remove('hidden');
    }
    else{
    loadingSpinner.classList.add('hidden');
    }
   
    

}


const latestLoadData = async() =>{
    const res =await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const datas = await res.json();
    const latestNews = datas;

    const latestDataContainer =document.getElementById('latest-data-container');
    latestNews.forEach(data =>{
        const container = document.createElement('container');
        container.classList =`card w-96 bg-base-100 shadow-xl`
        container.innerHTML=`
        <figure class="px-10 pt-10">
                      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <div class="flex gap-2">
                            <img src="./images/Frame.png" alt="">
                            <div id="">
                               <p class="text-slate-500">29 January 2024</p>
                            </div>

                        </div>
                      <h2 class="card-title text-base font-bold text-start">What will a mars habitat force that impact in our daily life!!!</h2>
                      <p class="text-slate-400 text-start">Yes, you can run unit tests and view the results directly within the app. </p>
                      <div class="flex">
                        <img src="" alt="">
                        <div>
                            <h2 class="font-bold text-xs text-start">Cameron Williamson</h2>
                            <p class="font-bold text-xs text-slate-400 text-start">Unknown</p>
                        </div>                        
                      </div>
                    </div>
        `
        latestDataContainer.appendChild(container);
    })
}
latestLoadData();
     
loadNews();