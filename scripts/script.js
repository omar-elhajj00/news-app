$(document).ready(function(){
    $.ajax({
        url: 'http://localhost/news-app/php/get_news.php',
        type: 'get',
        success: function (data) {
            var data= JSON.parse(data);//Creating object for parsed JSON data
            var len = data.length;
            var row = "<div class='row justify-content-evenly mx-5 my-3'></div>";
            for(var i=0; i<len; i++){
                var id = data[i].id;
                var title = data[i].title;
                var body = data[i].body;
                

                
                
                var newsCard = "<div class='col-4'><div class='card' style='width: 18rem;'><img src='images/game.jpeg' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"
                    + title
                
                    + "</h5 ><p class='card-text'>" + body + "</p><a href='#' class='btn btn-primary'>Go somewhere</a></div ></div ></div > "
                
                row.innerHtml = newsCard;

                // var tr_str = "<tr>" +
                //     "<td align='center'>" + (i+1) + "</td>" +
                //     "<td align='center'>" + username + "</td>" +
                //     "<td align='center'>" + name + "</td>" +
                //     "<td align='center'>" + email + "</td>" +
                //     "</tr>";
                if (i % 3 == 0) {
                    var row = "<div class='row justify-content-evenly mx-5 my-3'></div>";
                    
                }
                row.innerHtml = newsCard;
                
                $("body").append(newsCard);
                debugger
            }

        }
    });
});





























// $.get("http://localhost/news-app/php/get_news.php", function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//     // for (var i = 0; i <= data.length; i++){
//     //     $(".card").append
//     // }
//     if (data.success){  
//     $.each(data, function (index, item) {
//         if ('success'!= index){
//             $('.card').append("<div class='col-md-6' ><img class='img-rounded' src="+item.image+"alt='MyImage' width='550px' height='240px'></div><div class='col-md-6'><h3>"+item.title+"</h3><p class='well'>"+item.description+"<p></div>");

//         }
//     });
// };
// });
























// //define the input by their ids
// let fullName = document.querySelector('#full-name');
// let email = document.querySelector('#email');
// let phoneNumber = document.querySelector('#phone-number');
// let message = document.getElementById('message-text');
// let sendForm = document.getElementById('send-form');

// // define the warnings
// let fullNAmeWarning = document.getElementById('fname-warning');
// let emailWarning = document.getElementById('email-warning');
// let phoneNumberWarning = document.getElementById('phone-num-warning');
// let messageWarning = document.getElementById('message-warning');
// let successMessage = document.getElementById('success-msg');

// //define the send button
// const sendButton = document.getElementById('send-btn')

// //prevent refresh page when send button is clicked
// sendForm.addEventListener("submit", function (evt) {
//     evt.preventDefault();
// })

// // when click on send button
// sendButton.addEventListener('click', validateInfo);

// // validation function
// function validateInfo() {
//     // chec if full name is less than 5 characters
//     if (fullName.value.length < 5) {
//         fullNAmeWarning.innerHTML = 'the name must be more than 5 characters';
//     }
//     // chec if there are 3 characters before @
//     else if (email.value.substring(0, email.value.indexOf('@')).length < 3) {
//         fullNAmeWarning.innerHTMl = null;
//         emailWarning.innerHTML = 'Email should have minimum 3 characters before @';
//         // clear the previous warning
//         fullNAmeWarning.innerHTML = "";
        
//     // chec if there are 5 characters after @
//     }
//     else if (email.value.substring(email.value.indexOf('@')+1,email.value.length).length < 5) {
//         emailWarning.innerHTML = 'Email should have minimum 5 characters after @';
//         // clear the previous warning
//         fullNAmeWarning.innerHTML = "";
//     }
//     // check if the phone number start with +961
//     else if (phoneNumber.value.substring(0,4) != "+961") {
//         phoneNumberWarning.innerHTML = 'the phone number should start with +961';
//         // clear the previous warning
//         fullNAmeWarning.innerHTML = "";
//         emailWarning.innerHTML = "";
//     }
//     // check if there are 8 digits after +961 in phone number input
//     else if (phoneNumber.value.substring(4,phoneNumber.value.length).length != 8) {
//         phoneNumberWarning.innerHTML = 'the phone number should have 8 digits after +961';
//         // clear the previous warning
//         fullNAmeWarning.innerHTML = "";
//         emailWarning.innerHTML = "";
//     }
//     // check if the message have less than 100 characters
//     else if (message.value.length<100) {
//         messageWarning.innerHTML = 'message should have in minimum 100 characters';
//         // clear the previous warning
//         fullNAmeWarning.innerHTML = "";
//         emailWarning.innerHTML = "";
//         phoneNumberWarning.innerHTML = "";
//     }
//     //if everythig is okay
//     else {
//         // successMessage.innerHTML = 'submitted , thank you !';
//         // console.log('hah');
//         // clear all the warnings
//         fullNAmeWarning.innerHTML = "";
//         emailWarning.innerHTML = "";
//         phoneNumberWarning.innerHTML = "";
//         messageWarning.innerHTML = "";

//         //send data to php by fetch api
//         const fnameV = fullName.value;
//         const emailV = email.value;
//         const phoneV = phoneNumber.value;
//         const messageV = message.value;

//         let url = "http://localhost/bootstrap-with-db/php/add_user_info.php";
//         let parameters = {
//             method:'POST',
//             body: new URLSearchParams({
//                 fname: fnameV,
//                 email:emailV,
//                 phone : phoneV,
//                 message:messageV
//             })
//         }

//         fetch(url,parameters)
//             .then(respone=>respone.json())
//             .then(data=>console.log(data));

//             // const sendData = async (fname, email, phone, message) => {
//             // try {
//             // const url=  "http://localhost/bootstrap-with-db/php/add_user_info.php";
//             // const res = await fetch(url, {
//             //     method: 'POST',
//             //     body: JSON.stringify({
//             //         fname:fnameV,
//             //         email:emailV,
//             //         phone : phoneV,
//             //         message:messageV
//             //     }),
//             //     headers:{
//             //         'Content-Type': 'application/json',
//             //     }
//             //     })

//         // url="http://localhost/bootstrap-with-db/php/add_user_info.php";
//         // fetch(url, {
//         // method: 'POST',
//         // body: JSON.stringify({
//         //     fname:fullName.value ,
//         //     email:email.value ,
//         //     phone:phoneNumber.value ,
//         //     message:message.value ,
//         // })
//         // })
//         // .then(function(response) {
//         //     return response.text();
//         // })
//         // .then(function(data) {
//         //     console.log(data);
//         // });
//     }




// }