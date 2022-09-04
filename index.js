const loadNews = () =>{
  const url = 'https://openapi.programming-hero.com/api/news/categories';

  try {
    fetch(url)
       .then(res => res.json())
       .then(data => fildNews(data.data.news_category))


  }
  catch (error) {
    console.log(error)
  }
}

const fildNews = news => {
  // console.log(news)
  const  newsContainer = document.getElementById('navbar-2')
  news.forEach(newses => {
   
    const newsesDiv = document.createElement('ul');

    newsesDiv.classList.add("d-flex");
    newsesDiv.innerHTML = `
    <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="#" onclick='loadNewsBlogs()'>${newses.category_name}</a>
    </li>
    `;
    newsContainer.appendChild(newsesDiv)
    toggleSpinner(true);
  })
  toggleSpinner(false);
 
 
}

loadNews()


// news blogs start
const loadNewsBlogs = () => {
  const url = 'https://openapi.programming-hero.com/api/news/category/01';
  try {
    fetch(url)
       .then(res => res.json())
       .then(data => displayNews(data.data))
  }
  catch (error) {
    console.log(error)
  }
}

const displayNews = news => {
  // console.log(news)
  const newsContainer = document.getElementById('news-blogs')
  news.forEach(blog =>{
    const newsdiv = document.createElement('div');
    newsdiv.innerHTML = `
    <div class="card mb-3 flex justify-center shadow-xl" style="max-width: 740px; height: 40vh;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${blog.image_url}" class="img-fluid rounded-start m-1" style="height: 35vh" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title font-semibold">${blog.title}</h5>
        <p class="card-text">${blog.details.slice(0, 150)}</p>
        <p class="card-text"><small class="text-muted"></small>
        <div class="d-flex m-2">
        <div><img src="${blog.author.img}" class="img-fluid rounded-full  rounded-start m-1 mt-4" style="width: 40px;" alt="..."></div>
        <div class="mt-2">
        <h3 class="m-3 text-sm"> ${blog.author.name}</h3>
        <p class="text-xs"> ${blog.author.published_date}</p>
        </div>
        <div class="mt-5 ml-8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg></div>
        <p class="text-xs mt-5 ml-4">${blog.total_view}</p>
        <div><button type="button" style="height: 35px" class="btn btn-primary mt-5 ml-16 bg-blue-600">Details<i class="fa-solid fa-arrow-right"></i></button></div>
        </div>


       
        </p>
      </div>
    </div>
  </div>
</div>
    `
    newsContainer.appendChild(newsdiv)
  })


}
  loadNewsBlogs();

  // toggle sppiner

  const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader')
    if (isLoading) {
      loaderSection.classList.remove('d-none')
    }
    else{
      loaderSection.classList.add('d-none')
    }
  }

  