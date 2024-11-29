function getBookTemplate(indexBook){
    return /*html*/`
    <div class="bookchart">
    <div class="bookchart_headline"><h3>${books[indexBook].name}</h3></div>
    <div id="bookchart_img">
      <img class="bookchart_img" src="./img/images/open-book-5218061_640.png">
      </div>
    <div id="bookchart_info" class="bookchart_info">
      <div class="bookchart_price_likes">
        <div id="bookchart_price">${books[indexBook].price} €</div>
        <div id="bookchart_likes" class="bookchart_likes">
        <p>${books[indexBook].likes}</p>
        <img
          id="bookchart_button"
          class="bookchart_button"
          onclick="function_counter_imgchange"
          src="./img/icons/like.png"
          alt=""
        /></div>
      </div>
      <div id="bookchart_author"><h3>Author:</h3>${books[indexBook].author}</div>
      <div id="bookchart_publish_year"><h3>Erscheinungsjahr:</h3>${books[indexBook].publishedYear}</div>
      <div id="bookchart_genre"><h3>Genre:</h3>${books[indexBook].genre}</div>
    </div>
    <div id="bookchart_coments">
        <h3>Kommentare:</h3>
        <div id="bookchart_coments_pull">${books[indexBook].comments[1]}</div>
        <input type="text">
    </div>
  </div>
    `;
}