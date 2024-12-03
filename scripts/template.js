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
      </div><table class="tg"><thead>
      <tr>
        <th class="tg-0pky">${books[indexBook].price} €</th>
        <th class="tg-dvpl" colspan="2">
        <p>${books[indexBook].likes}</p>
        <img
          id="bookchart_button"
          class="bookchart_button"
          onclick="function_counter_imgchange"
          src="./img/icons/like.png"
          alt=""
        /></th>
      </tr></thead>
    <tbody>
      <tr>
        <td class="tg-0pky">Author</td>
        <td class="tg-0pky">:</td>
        <td class="tg-0pky">${books[indexBook].author}</td>
      </tr>
      <tr>
        <td class="tg-0pky">Erischeinungsjahr</td>
        <td class="tg-0pky">:</td>
        <td class="tg-0pky">${books[indexBook].publishedYear}</td>
      </tr>
      <tr>
        <td class="tg-0pky">Genre</td>
        <td class="tg-0pky">:</td>
        <td class="tg-0pky">${books[indexBook].genre}</td>
      </tr>
    </tbody>
    </table>
    <div id="bookchart_coments">
        <h3>Kommentare:</h3>
        <div id="bookchart_coments_pull">${books[indexBook].comments[1]}</div>
        <tr>
        <td class="tg-0pky">Erischeinungsjahr</td>
        <td class="tg-0pky">:</td>
        <td class="tg-0pky">${books[indexBook].publishedYear}</td>
      </tr>
      <tr>
        <td class="tg-0pky">Genre</td>
        <td class="tg-0pky">:</td>
        <td class="tg-0pky">${books[indexBook].genre}</td>
      </tr>
        <input type="text">
    </div>
  </div>
    `;
}

function getCommentsTempalte(indexBook){
  
}