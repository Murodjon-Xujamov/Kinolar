const moviesParent = document.getElementById("moviesParent");
    movies.forEach((movie) => {
      // console.log(movie.Title);
      let listItem = document.createElement("li");
      listItem.classList.add("list__item");

      
      let movieName = document.createElement("h3");
      movieName.classList.add("h5", "movieName");
      movieName.textContent = movie.title;
      
      let movieImg = document.createElement("img");
      movieImg.classList.add("img__movie");
      movieImg.setAttribute("src", movie.poster);
      movieImg.setAttribute("alt", movie.Title);
      
      moviesParent.appendChild(listItem);
      listItem.appendChild(movieImg);
      listItem.appendChild(movieName);

      movie.genres.forEach((cate) => {
          var spanCategory = document.createElement("span");
          spanCategory.classList.add("category");
        spanCategory.textContent = cate;
        listItem.appendChild(spanCategory);
      });
    });