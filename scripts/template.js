function getBookTemplate(book, index) {
  return /*html*/ `
    <div class="bookchart">
      <div class="bookchart_headline">
      <h3>${book.name}</h3>
      </div>
      <div id="bookchart_img">
      <img class="bookchart_img" src="./img/images/open-book-5218061_640.png">
      </div>
      <div id="bookchart_info" class="bookchart_info">
        <div class="bookchart_price_likes">
          <div id="bookchart_price" class="bookchart_price">
          ${renderPrice(book.price)}
          </div>
          <div id="bookchart_likes" class="bookchart_likes">
            <p>${book.likes}</p>
            <img
              id="bookchart_button"
              class="bookchart_button"
              onclick="toggleLike(${index})"
              src="./img/icons/like.png"
              alt=""/>
          </div>
        </div>   
          <table class="bookchart_table">
            <tbody>
              <tr class="flex_1">
                <td class="flex_2">Author</td>
                <td>:</td>
                <td class="flex_2">${book.author}</td>
              </tr>
              <tr class="flex_1">
                <td class="flex_2">Erischeinungsjahr</td>
                <td>:</td>
                <td class="flex_2">${book.publishedYear}</td>
              </tr>
              <tr class="flex_1">
                <td class="flex_2">Genre</td>
                <td>:</td>
                <td class="flex_2">${book.genre}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="bookchart_comments" class="bookchart_comments">
          <h3>Kommentare:</h3>
          <div class="bookchart_table">
            <table>
            <tbody>
              ${book.comments.map(comment => `
                <tr class="flex_1">
                  <td class="flex_2">${comment.name}</td>
                  <td>:</td>
                  <td class="flex_3">${comment.comment}</td>
                </tr>
              `).join('')}
            </tbody>
            </table>
          </div>
        </div>
        <div id="comment_input_section" class="comment_input_section">
          <input type="text">
          <img src="./img/icons/flat-2126882.svg" onclick="functionAddComment">
        </div>  
      </div>
    </div>
    `;
}