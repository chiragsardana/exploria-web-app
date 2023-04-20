var XMLHttpRequest = require("xhr2");
function getAllOurFavRestaurants() {
  var url_api = "https://major-project-backend.onrender.com/Resturant/get";
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allRestaurant = JSON.parse(this.responseText);

      console.log("Calling ");
      $("#unique2").remove();
      var newElement = '<div class="row grid" id="unique2"></div>';
      $("#unique3").append(newElement);
      for (let index = 0; index < allRestaurant.length; index++) {
        const element = allRestaurant[index];
        // console.log(element)
        var id = element["id"];
        var name = element["name"];
        var description = element["description"];
        if(description.includes('Near NCU')){
          description = description.substring(0, description.length - 8)
        }
        var rating = element["rating"];
        var image_urls = element["image_urls"];
        console.log(id);
        console.log(name);
        console.log(description);
        console.log(rating);
        console.log(image_urls);
        console.log();

        // const element = array[index];
        var elementToBeAdded = "";
        elementToBeAdded += '<div class="col-sm-6 col-lg-4 all restaurants">';
        elementToBeAdded += '<div class="box">';
        elementToBeAdded += "<div>";
        elementToBeAdded += '<div class="img-box">';
        elementToBeAdded += '<img src="'+image_urls[0]+'" alt="">';
        elementToBeAdded += "</div>";
        elementToBeAdded += '<div class="detail-box">';
        elementToBeAdded += "<h5>";
        elementToBeAdded += name;
        elementToBeAdded += "</h5>";
        elementToBeAdded += "<p>";
        elementToBeAdded +=
          description;
        // elementToBeAdded += "sed eaque";
        elementToBeAdded += "</p>";
        elementToBeAdded += '<div class="options">';
        elementToBeAdded += "<h6>";
        elementToBeAdded += "";
        elementToBeAdded += "</h6>";
        elementToBeAdded += '<a href="restaurant.html?id='+id+'">';
        elementToBeAdded +=
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"';
        elementToBeAdded +=
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029"';
        elementToBeAdded +=
          'style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">';
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248';
        elementToBeAdded +=
          'c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />';
        elementToBeAdded += " </g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48';
        elementToBeAdded +=
          "C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064";
        elementToBeAdded +=
          "c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4";
        elementToBeAdded += 'C457.728,97.71,450.56,86.958,439.296,84.91z" />';
        elementToBeAdded += "</g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<path";
        elementToBeAdded +=
          'd="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296';
        elementToBeAdded +=
          'c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />';
        elementToBeAdded += "</g >";
        elementToBeAdded += "</g >";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g></g>";

        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "    </g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += " <g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += "  </svg >";
        elementToBeAdded += " </a >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        $("#unique2").append(elementToBeAdded);
      }
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

var XMLHttpRequest = require("xhr2");
function getAllOurFavDishes() {
  var url_api = "https://major-project-backend.onrender.com/Dish/get";
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      var allDishes = JSON.parse(this.responseText);

      console.log("Calling ");
      $("#unique2").remove();
      var newElement = '<div class="row grid" id="unique2"></div>';
      $("#unique3").append(newElement);

      for (let index = 0; index < allDishes.length; index++) {
        const element = allDishes[index];
        // console.log(element)
        var id = element["id"];
        var name = element["name"];
        var description = element["description"];
        var price = element["price"];
        var category = element["category"];
        var resturant_id = element["resturant_id"];
        var rating = element["rating"];
        console.log(id);
        console.log(name);
        console.log(description);
        console.log(price);
        console.log(category);
        console.log(resturant_id);
        console.log(rating);
        console.log();

        var elementToBeAdded = "";
        elementToBeAdded += '<div class="col-sm-6 col-lg-4 all restaurants">';
        elementToBeAdded += '<div class="box">';
        elementToBeAdded += "<div>";
        elementToBeAdded += '<div class="img-box">';
        elementToBeAdded += '<img src="images/f1.png" alt="">';
        elementToBeAdded += "</div>";
        elementToBeAdded += '<div class="detail-box">';
        elementToBeAdded += "<h5>";
        elementToBeAdded += name;
        elementToBeAdded += "</h5>";
        elementToBeAdded += "<p>";
        elementToBeAdded += description;
        elementToBeAdded += "</p>";
        elementToBeAdded += '<div class="options">';
        elementToBeAdded += "<h6>";
        elementToBeAdded += "₹ "+price;
        elementToBeAdded += "</h6>";
        elementToBeAdded += '<a href="dish.html?id='+id+'">';
        elementToBeAdded +=
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"';
        elementToBeAdded +=
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029"';
        elementToBeAdded +=
          'style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">';
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248';
        elementToBeAdded +=
          'c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />';
        elementToBeAdded += " </g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48';
        elementToBeAdded +=
          "C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064";
        elementToBeAdded +=
          "c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4";
        elementToBeAdded += 'C457.728,97.71,450.56,86.958,439.296,84.91z" />';
        elementToBeAdded += "</g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<path";
        elementToBeAdded +=
          'd="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296';
        elementToBeAdded +=
          'c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />';
        elementToBeAdded += "</g >";
        elementToBeAdded += "</g >";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g></g>";

        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "    </g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += " <g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += "  </svg >";
        elementToBeAdded += " </a >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        $("#unique2").append(elementToBeAdded);
      }
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

function createAllOurFavRestaurants() {
  var url_api = "https://major-project-backend.onrender.com/Resturant/get";
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allRestaurant = JSON.parse(this.responseText);
      console.log(allRestaurant);
    //   listCreator(allRestaurant);
   
        createAllOurFavRestaurantSBK(allRestaurant);
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

function createAllOurFavDishes() {
  var url_api = "https://major-project-backend.onrender.com/Dish/get";
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      var allDishes = JSON.parse(this.responseText);
      console.log(allDishes);
      $("#unique2").remove();
      var newElement = '<div class="row grid" id="unique2"></div>';
      $("#unique3").append(newElement);
    //   listCreator(allDishes);
    createAllOurFavDishesSBK(allDishes)
    
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

// var ourFavList = [];
// function listCreator(tempList) {
//   console.log(tempList + " is the Temporary List");
//   ourFavList = ourFavList.concat(tempList);
// }

// console.log(ourFavList + " is the Our Fav List");


function createAllOurFavDishesSBK(allDishes){
   
    var count = 0;
    var max = allDishes.length;
    var min = 0
    var list = [];
      for (let index = 0; index < allDishes.length; index++) {


        if(count != 3){
            randomNumber = Math.floor(Math.random() * (allDishes.length  - 0));
            list.push(allDishes[randomNumber]);
            count++;
          }


        const element = allDishes[index];
        // console.log(element)
        var id = element["id"];
        var name = element["name"];
        var description = element["description"];
        var price = element["price"];
        var category = element["category"];
        var resturant_id = element["resturant_id"];
        var rating = element["rating"];
        console.log(id);
        console.log(name);
        console.log(description);
        console.log(price);
        console.log(category);
        console.log(resturant_id);
        console.log(rating);
        console.log();

        var elementToBeAdded = "";
        elementToBeAdded += '<div class="col-sm-6 col-lg-4 all restaurants">';
        elementToBeAdded += '<div class="box">';
        elementToBeAdded += "<div>";
        elementToBeAdded += '<div class="img-box">';
        elementToBeAdded += '<img src="images/f1.png" alt="">';
        elementToBeAdded += "</div>";
        elementToBeAdded += '<div class="detail-box">';
        elementToBeAdded += "<h5>";
        elementToBeAdded += name;
        elementToBeAdded += "</h5>";
        elementToBeAdded += "<p>";
        elementToBeAdded +=
          description;
        // elementToBeAdded += "sed eaque";
        elementToBeAdded += "</p>";
        elementToBeAdded += '<div class="options">';
        elementToBeAdded += "<h6>";
        elementToBeAdded += "₹ "+price;
        elementToBeAdded += "</h6>";
        elementToBeAdded += '<a href="dish.html?id='+id+'">';
        elementToBeAdded +=
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"';
        elementToBeAdded +=
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029"';
        elementToBeAdded +=
          'style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">';
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248';
        elementToBeAdded +=
          'c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />';
        elementToBeAdded += " </g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48';
        elementToBeAdded +=
          "C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064";
        elementToBeAdded +=
          "c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4";
        elementToBeAdded += 'C457.728,97.71,450.56,86.958,439.296,84.91z" />';
        elementToBeAdded += "</g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<path";
        elementToBeAdded +=
          'd="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296';
        elementToBeAdded +=
          'c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />';
        elementToBeAdded += "</g >";
        elementToBeAdded += "</g >";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g></g>";

        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "    </g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += " <g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += "  </svg >";
        elementToBeAdded += " </a >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        $("#unique2").append(elementToBeAdded);
      }
      createSlider(list);
}


function createAllOurFavRestaurantSBK(allRestaurant){
    for (let index = 0; index < allRestaurant.length; index++) {
        const element = allRestaurant[index];
        // console.log(element)
        var id = element["id"];
        var name = element["name"];
        var description = element["description"];
        var rating = element["rating"];
        var image_urls = element["image_urls"];
        console.log(id);
        console.log(name);
        console.log(description);
        console.log(rating);
        console.log(image_urls);
        console.log();

        // const element = array[index];
        var elementToBeAdded = "";
        elementToBeAdded += '<div class="col-sm-6 col-lg-4 all restaurants">';
        elementToBeAdded += '<div class="box">';
        elementToBeAdded += "<div>";
        elementToBeAdded += '<div class="img-box">';
        elementToBeAdded += '<img src="'+image_urls[0]+'" alt="">';
        elementToBeAdded += "</div>";
        elementToBeAdded += '<div class="detail-box">';
        elementToBeAdded += "<h5>";
        elementToBeAdded += name;
        elementToBeAdded += "</h5>";
        elementToBeAdded += "<p>";
        elementToBeAdded +=
          description;
        // elementToBeAdded += "sed eaque";
        elementToBeAdded += "</p>";
        elementToBeAdded += '<div class="options">';
        elementToBeAdded += "<h6>";
        elementToBeAdded += "";
        elementToBeAdded += "</h6>";
        elementToBeAdded += '<a href="restaurant.html?id='+id+'">';
        elementToBeAdded +=
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"';
        elementToBeAdded +=
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029"';
        elementToBeAdded +=
          'style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">';
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248';
        elementToBeAdded +=
          'c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />';
        elementToBeAdded += " </g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48';
        elementToBeAdded +=
          "C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064";
        elementToBeAdded +=
          "c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4";
        elementToBeAdded += 'C457.728,97.71,450.56,86.958,439.296,84.91z" />';
        elementToBeAdded += "</g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<path";
        elementToBeAdded +=
          'd="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296';
        elementToBeAdded +=
          'c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />';
        elementToBeAdded += "</g >";
        elementToBeAdded += "</g >";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g></g>";

        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "    </g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += " <g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += "  </svg >";
        elementToBeAdded += " </a >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        $("#unique2").append(elementToBeAdded);
      }
    }

    function createAll(){
        createAllOurFavRestaurants()
        createAllOurFavDishes()
    }









    function createSlider(list) {
  
        for (let index = 0; index < 1; index++) {
          const element = list[index];
              // console.log(element)
              var id = element["id"];
              var name = element["name"];
              var description = element["description"];
              var rating = element["rating"];
              var image_urls = element["image_urls"];
              console.log(id);
              console.log(name);
              console.log(description);
              console.log(rating);
              console.log(image_urls);
              console.log();
          var elementToBeAdded = '<div class="carousel-item active">'
          elementToBeAdded += '<div class="container">';
          elementToBeAdded += '<div class="row">';
          elementToBeAdded += '<div class="col-md-7 col-lg-6 ">';
          elementToBeAdded += '<div class="detail-box">';
          elementToBeAdded += '<h1>';
          elementToBeAdded += name;
          // elementToBeAdded += index;
          elementToBeAdded += '</h1>';
          elementToBeAdded += '<p>';
          elementToBeAdded += ''+description;
          elementToBeAdded += '</p>';
          elementToBeAdded += '<div class="btn-box">';
          elementToBeAdded += '<a href="" class="btn1">';
          elementToBeAdded += 'Order Now';
          elementToBeAdded += '</a>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
      
          $("#unique").append(elementToBeAdded);
      
          var elementToBeAdded1 = '<li data-target="#customCarousel1" data-slide-to="';
          elementToBeAdded1 += index + '"class="active"></li>';
          $("#unique1").append(elementToBeAdded1);
        }
      
      
        for (let index = 1; index < list.length; index++) {
          const element = list[index];
              // console.log(element)
              var id = element["id"];
              var name = element["name"];
              var description = element["description"];
              var rating = element["rating"];
              var image_urls = element["image_urls"];
              console.log(id);
              console.log(name);
              console.log(description);
              console.log(rating);
              console.log(image_urls);
              console.log();
          console.log("Secnd Forloop")
          var elementToBeAdded = '<div class="carousel-item">'
          elementToBeAdded += '<div class="container">';
          elementToBeAdded += '<div class="row">';
          elementToBeAdded += '<div class="col-md-7 col-lg-6 ">';
          elementToBeAdded += '<div class="detail-box">';
          elementToBeAdded += '<h1>';
          elementToBeAdded += name;
          // elementToBeAdded += index;
          elementToBeAdded += '</h1>';
          elementToBeAdded += '<p>';
          elementToBeAdded += description;
          elementToBeAdded += '</p>';
          elementToBeAdded += '<div class="btn-box">';
          elementToBeAdded += '<a href="" class="btn1">';
          elementToBeAdded += 'Order Now';
          elementToBeAdded += '</a>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
          elementToBeAdded += '</div>';
      
          $("#unique").append(elementToBeAdded);
      
          var elementToBeAdded1 = '<li data-target="#customCarousel1" data-slide-to="';
          elementToBeAdded1 += index + '"></li>';
          $("#unique1").append(elementToBeAdded1);
        }
      
      }
