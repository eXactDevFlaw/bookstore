function getBookTemplate(indexBook) {
  return /*html*/ `
    <div class="bookchart">
      <div class="bookchart_headline">
      <h3>${books[indexBook].name}</h3>
      </div>
      <div id="bookchart_img">
      <img class="bookchart_img" src="./img/images/open-book-5218061_640.png">
      </div>
      <div id="bookchart_info" class="bookchart_info">
        <div class="bookchart_price_likes">
          <div class="bookchart_price">
            ${books[indexBook].price} €
          </div>
          <div class="bookchart_likes">
            <p>${books[indexBook].likes}</p>
            <img
              id="bookchart_button"
              class="bookchart_button"
              onclick="function_counter_imgchange"
              src="./img/icons/like.png"
              alt=""/>
          </div>
        </div>   
          <table class="bookchart_table">
            <tbody>
              <tr>
                <td>Author</td>
                <td>:</td>
                <td>${books[indexBook].author}</td>
              </tr>
              <tr>
                <td>Erischeinungsjahr</td>
                <td>:</td>
                <td>${books[indexBook].publishedYear}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>:</td>
                <td>${books[indexBook].genre}</td>
              </tr>
            </tbody>
          </table>
        </div>  
      </div>
    </div>
    `;
}

function getCommentsTempalte(indexBook) {}
