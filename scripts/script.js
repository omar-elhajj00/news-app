$(document).ready(function(){
    $.ajax({
        //php url
        url: 'http://localhost/news-app/php/get_news.php', 
        //type of method
        type: 'get',
        //get data
        success: function (data) {
            //Creating object for parsed JSON data
            var data = JSON.parse(data);
            //length of json object
            var len = data.length;
            //pass through every row in database
            for (var i = 0; i < len; i++){
                //every row should contain 3 news only
                if (i % 3 == 0) {
                    //create a row
                    var $row = $("<div class='row justify-content-evenly mx-5 my-3'></div>");
                }
                //define the variables
                var title = data[i].title;
                var body = data[i].body;
                //define the news card
                var newsCard =
                    "<div class='col-4'><div class='card' style='width: 18rem;'><img src='images/wsj.jfif' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"
                    + title
                    + "</h5 ><p class='card-text'>" + body +
                    "</p><a href='#' class='btn btn-primary'>More Details</a></div ></div ></div > "
                //append the news card to the wor
                $row.append(newsCard);
                //append the row to the news division
                $(".news").append($row);
            }
        }
    });
});


