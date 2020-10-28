function findBook(){
    var userSearch = document.getElementById('userInput').value;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: "JSON",
        success: function(book){
            console.log(book);
            for(var i = 0; book.items.length; i++){
                var wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'media';
                var image = document.createElement('img');
            image.className = 'mr-3';    
            image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
            //Tạo class div với class media-body
            var div = document.createElement('div');
            div.className = 'media-body';
            //create header for body
            var header = document.createElement('h3');
            header.className = 'mt-0';
            header.innerHTML = book.items[i].volumeInfo.title;
            //append header to the body
            div.appendChild(header);
            wrapperDiv.appendChild(image);
            wrapperDiv.appendChild(div);
            //Tạo mục tác giả
            var author = document.createElement('p');
            author.innerHTML = 'Tác giả: ' + book.items[i].volumeInfo.authors;
            div.appendChild(author);
            //Tạo mục quốc gia
            var quocgia = document.createElement('p')
            quocgia.innerHTML = 'Quốc gia: ' + book.items[i].accessInfo.country;
            div.appendChild(quocgia);
            //Page count
            var pageCount = document.createElement('p');
            pageCount.innerHTML = 'Số trang: ' + book.items[i].volumeInfo.pageCount;
            div.appendChild(pageCount);
            //Năm phát hành
            var namphathanh = document.createElement('p');
            namphathanh.innerHTML = 'Năm phát hành: ' + book.items[i].volumeInfo.publishedDate;
            div.appendChild(namphathanh);
            // Mô tả
            var decs = document.createElement('p')
            decs.innerHTML = book.items[i].volumeInfo.description;
            div.appendChild(decs);
            //Tạo hr ngăn cách mỗi sách
            var line = document.createElement('hr');
            bookResult.appendChild(wrapperDiv);
            bookResult.appendChild(line);
            }
        }
    })
 
}