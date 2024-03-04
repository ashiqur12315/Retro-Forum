const loadPost = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    console.log(posts);
    displayPost(posts);
    
}


const displayPost = posts =>{
    const postContainer = document.getElementById('post-container');
    postContainer.textContent = '';
    console.log(postContainer);
    
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList = `bg-[#12132d0d]  rounded-3xl`;
        postCard.innerHTML = `<div class="p-10 flex gap-x-6">
        <div class="avatar online w-20 h-20">
            <div class="w-24 rounded-2xl">
              <img src="${post.image}" />
            </div>
          </div>
        <div class="w-full mb-6">
            
            <div class="flex gap-5 text-[14px] font-medium mb-3">
                <p># <span>${post.category}</span></p>
                <p>Author : <span>${post.author.name}</span></p>
            </div>
            
            <div class="mb-5">
                <h2 class="text-[20px] font-bold mb-4">${post.title}</h2>
                <p class="text-[#12132d99] text-[16px] font-normal">${post.description}</p>
            </div>
            <hr class="w-full divide-dotted">
            <div class="text-[#12132d99] mt-5 space-x-6">
                <i class="fa-regular fa-message"><span class="ml-3">${post.comment_count}</span></i>
                <i class="fa-regular fa-eye"><span class="ml-3">${post.view_count}</span></i>
                <i class="fa-regular fa-clock"><span class="ml-3">${post.posted_time} min</span></i>
                <button onclick="addPost('${post.title}','${post.view_count}')" class="float-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <g clip-path="url(#clip0_57_425)">
                          <path d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z" fill="#10B981"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_57_425">
                            <rect width="28" height="28" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                </button>
            </div>
        </div>
    </div>`;
    postContainer.appendChild(postCard);            
    })
}

// Search Handler
const searchHandler = () => {
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPost(searchText);
}

// Adding post to --Title Mark as read

const addPost = (id, vu) =>{
    // Mark as you read count
    const markCount = document.getElementById('count');
    let count = parseInt(markCount.innerText);
    count= count +1;
    markCount.innerText = count;

    const markAsYouReadContainer = document.getElementById('mark-as-you-read-container');
    const addedPost = document.createElement('div');
    addedPost.classList =`flex justify-between p-4`;
    addedPost.innerHTML = `<div><h2 class="text-[16px] font-semibold">${id}</h2></div>
                            <div><i class="fa-regular fa-eye"><span class="ml-3">${vu}</span></i></div>`;
    
    markAsYouReadContainer.appendChild(addedPost);
}


// ------------------------------------------ Latest Post Functionalities---------------------------------------------------//

const loadLatestPost = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const latestPosts = await res.json();
    console.log(latestPosts.length)
    let n = 0;
    // document.getElementById('posted-date').innerText = latestPosts[0].author.posted_date;
    // document.getElementById('cover-image').innerHTML = `<img src="${latestPosts[0].cover_image}" alt="Shoes" />`;
    // document.getElementById('title').innerText = latestPosts[0].title;
    // document.getElementById('description').innerText = latestPosts[0].description;
    // document.getElementById('name').innerText = latestPosts[0].author.name;
    // document.getElementById('designation').innerText = latestPosts[0].author.designation;
    const latestPostContainer = document.getElementById('latest-post');
   
    latestPosts.forEach(card => {
        
        const newCard = document.createElement('div');
        newCard.classList = `card card-compact w-96 bg-base-100 shadow-xl border`;
        newCard.innerHTML = `
        <figure id="cover-image"  class="border mt-6 ml-6 mr-6"><img src="${latestPosts[n].cover_image}" alt="Shoes" /></figure>
        <div class="card-body">
            <div class="flex justify-center items-center gap-2">
                <img src="images/calender.jpg" alt="">
                <p id="posted-date" class="text-[#12132d99] text-[16px] font-normal">${latestPosts[n].author.posted_date || 'No publish date'}</p>
            </div>
            <h2 id="title" class="card-title text-[18px] font-extrabold">${latestPosts[n].title}</h2>
            <p id="description" class="text-[16px] font-normal text-[#12132d99] mt-2 mb-4">${latestPosts[n].description}</p>
            <div class="flex gap-2">
                <div class="w-11"><img class="rounded-full" src="${latestPosts[n].profile_image}" alt=""></div>
                <div>
                    <p id="name" class="text-[16px] font-bold">${latestPosts[n].author.name}</p>
                    <p id="designation" class="text-[#12132d99] text-[14px] font-normal">${latestPosts[n].author.designation || 'Unknown'}</p>
                </div>
          </div>
        </div>`;
        latestPostContainer.appendChild(newCard);
        n = n+1;
        console.log(n)
        
    })
    



}
loadLatestPost();





