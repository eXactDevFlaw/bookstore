function init(){
    getFromLocalStorage();
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

function toggleLike(index) {
    let book = books[index];
    if (book.liked) {
        book.liked = false;
        book.likes = book.likes - 1;
    } else {
        book.liked = true;
        book.likes = book.likes + 1;
    }
    saveBookDataToLocalStorage(index);
    renderBooks();
}

function addComment(index) {
    let inputField = document.getElementById(`comment_input_${index}`);
    let commentText = inputField.value.trim();
    if (commentText) {
        let newComment = { name: "User", comment: commentText };
        books[index].comments.unshift(newComment);
        saveBookDataToLocalStorage(index);
        renderBooks();
        inputField.value = "";
    } else {
        alert("Bitte füge einen Kommentar ein :)");
    }
}

function getFromLocalStorage() {
    books.forEach((book, index) => {
        let savedData = localStorage.getItem(`book_${index}`);
        if (savedData) {
            let parsedData = JSON.parse(savedData);
            book.liked = parsedData.liked;
            book.comments = parsedData.comments;
        }
    });
}

function saveBookDataToLocalStorage(index) {
    let book = books[index];
    let bookData = {
        liked: book.liked,
        comments: book.comments,
    };
    localStorage.setItem(`book_${index}`, JSON.stringify(bookData));
}