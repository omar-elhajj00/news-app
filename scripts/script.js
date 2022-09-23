$(document).ready(function(){
    $.ajax({
        url: 'http://localhost/news-app/php/get_news.php',
        type: 'get',
        success: function (data) {
            var data= JSON.parse(data);//Creating object for parsed JSON data
            var len = data.length;
            
            for (var i = 0; i < len; i++){
                
                if (i % 3 == 0) {
                    var $row = $("<div class='row justify-content-evenly mx-5 my-3'></div>");
                    
                }
                var id = data[i].id;
                var title = data[i].title;
                var body = data[i].body;
                

                
                
                var newsCard =
                    "<div class='col-4'><div class='card' style='width: 18rem;'><img src='images/wsj.jfif' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"
                    + title
                
                    + "</h5 ><p class='card-text'>" + body +
                    "</p><a href='#' class='btn btn-primary'>Go somewhere</a></div ></div ></div > "
                
                $row.append(newsCard);

                // var tr_str = "<tr>" +
                //     "<td align='center'>" + (i+1) + "</td>" +
                //     "<td align='center'>" + username + "</td>" +
                //     "<td align='center'>" + name + "</td>" +
                //     "<td align='center'>" + email + "</td>" +
                //     "</tr>";
                
                
                
                $(".news").append($row);
                debugger
            }

        }
    });
});


