function init(){
    renderBooks();
}

function renderBooks(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    books.forEach(book => {
        contentRef.innerHTML += getBookTemplate(book)
    })
}