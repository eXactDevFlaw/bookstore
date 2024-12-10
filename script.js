function init(){
    getFromLocalStorage();
    renderBooks();
}

function pushDBtoLocalStorage(){
    if(!localStorage.getItem("books")){
        localStorage.setItem("books", JSON.stringify(books));
    }
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
    let bookIndex = books[index];
    let likeButtonIcon = "";

    if (!bookIndex.liked){
        likeButtonIcon = "./img/icons/heart.png";
        bookIndex.likes++;
        bookIndex.liked = true;
    }else{
        likeButtonIcon = "./img/icons/like.png";
        bookIndex.likes--;
        bookIndex.liked = false;
    }
    localStorage.setItem(`like_status_${index}`, bookIndex.liked);
    renderBooks();
}

function getFromLocalStorage() {
    books.forEach((book, index) => {
        let likeStatus = localStorage.getItem(`like_status_${index}`);
        book.liked = likeStatus === "true";
    } ) 
}