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
    newsesDiv.classList.add("nav");
    newsesDiv.innerHTML = `
    <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="#">${newses.category_name}</a>
    </li>
    `;
    newsContainer.appendChild(newsesDiv)
  })
  toggleSpinner(true);
}

loadNews()
