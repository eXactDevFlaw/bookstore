function renderBooks(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < books.length; indexNote++) {
        contentRef.innerHTML += getBookTemplate(indexNote);
    }
}
    
