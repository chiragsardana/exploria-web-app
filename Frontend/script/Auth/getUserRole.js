var XMLHttpRequest = require('xhr2');
function getAllDishByCategory() {
    var url_api =
      "https://major-project-backend.onrender.com/users/userping";
    var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmNAbmN1aW5kaWEuZWR1Iiwicm9sZXMiOiJST0xFX1VTRVIiLCJpYXQiOjE2NzE4ODQ5NjAsImV4cCI6MTY3MTkwMjk2MH0.PXVcuHYvb0MTOhbHYRBTueov6AO34vg79dozCU-GL-U";
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
        // var json = JSON.parse(this.responseText);
        // console.log(json);
      }
      else if (http.readyState == 4 && http.status == 401) {
        console.log("Unauthorised");
    }
    };
    http.open("get", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization",token);
    http.send();
  };
getAllDishByCategory()