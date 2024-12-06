function init(){
    // getFromLocalStorage();
    renderBooks();
}


function renderBooks(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let index = 0; index < books.length; index++) {
        let book = books[index]
        contentRef.innerHTML += getBookTemplate(book, index);
    }
}

function renderPrice(price) {
    let priceFormat = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });
    return priceFormat.format(price);
}

function toggleLike(index){
    books[index].likes++;
    renderBooks();
}