function getBookTemplate(indexBook){
    return /*html*/`
    <div id="bookchart">
    <div id="bookchart_headline">Hier überschrift</div>
    <div id="bookchart_img">hier bild</div>
    <div id="bookchart_info">
      <div id="bookchart_price_likes">
        <div id="bookchart_price">hier Preis</div>
        <div id="bookchart_likes"></div>
        <img
          id="bookchart_button"
          onclick="function_counter_imgchange"
          src=""
          alt=""
        />
      </div>
      <div id="bookchart_author">author</div>
      <div id="bookchart_publish_year">year</div>
      <div id="bookchart_genre">genre</div>
    </div>
    <div id="bookchart_coments">
        <h2>Kommentare:</h2>
        <div id="bookchart_coments_pull"></div>
        <input type="text">
    </div>
  </div>
    `;
}