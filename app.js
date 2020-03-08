var myAnimals = ["dog", "cat", "hamester", "horse", "rabbit", "bird", "racoon", "squirrel", "bear", "dear", "cow", "sheep", "lion"]

var animal;
var count=0;

$("#msgTitle").text("Click on a button!");


function displayAnimal() {

    $("#buttonArea").empty();

    for (let i = 0; i < myAnimals.length; i++) {
        if (count === 0) {
            count++;
            var btn = $("<button>")
            btn.attr("class", "btn btn-outline-primary btnImage");
            btn.attr("value", myAnimals[i]);
            btn.text(myAnimals[i]);
            $("#buttonArea").append(btn);
        }
        else if (count === 1) {
            count++;
            var btn = $("<button>")
            btn.attr("class", "btn btn-outline-secondary btnImage");
            btn.attr("value", myAnimals[i]);
            btn.text(myAnimals[i]);
            $("#buttonArea").append(btn);
        }
        else if (count === 2) {
            count++;
            var btn = $("<button>")
            btn.attr("class", "btn btn-outline-success btnImage");
            btn.attr("value", myAnimals[i]);
            btn.text(myAnimals[i]);
            $("#buttonArea").append(btn);
        }
        else if (count === 3) {
            count++;
            var btn = $("<button>")
            btn.attr("class", "btn btn-outline-danger btnImage");
            btn.attr("value", myAnimals[i]);
            btn.text(myAnimals[i]);
            $("#buttonArea").append(btn);
        }
        else if (count === 4) {
            count++;
            var btn = $("<button>")
            btn.attr("class", "btn btn-outline-warning btnImage");
            btn.attr("value", myAnimals[i]);
            btn.text(myAnimals[i]);
            $("#buttonArea").append(btn);
        }
        else if (count === 5) {
            count = 0;
            var btn = $("<button>")
            btn.attr("class", "btn btn-outline-info btnImage");
            btn.attr("value", myAnimals[i]);
            btn.text(myAnimals[i]);
            $("#buttonArea").append(btn);
        }

        
    }

}

displayAnimal();

$(document).on("click", ".btnImage", function() {

    animal = $(this).val();
    $("#imagesArea").empty();

    var query = "https://api.giphy.com/v1/gifs/search?api_key=Boi88Wtkqy6j61XKYNFfl5SbSbL1Hs2c&q=" + animal + "&limit=10&offset=0&lang=en";
    $.ajax({
        url: query,
        method: "GET"
    }).then(function(params) {
        for (let i = 0; i < params.data.length; i++) {
            var img = $("<img>");
            img.addClass("imgAnimal")
            img.attr("src", params.data[i].images.downsized_still.url);
            img.attr("data-state", "still");
            img.attr("data-still", params.data[i].images.downsized_still.url);
            img.attr("data-animate", params.data[i].images.preview_gif.url);
            $("#imagesArea").append(img);
            console.log(params);
            $("#msgTitle").text("Click on an image to make it move!");
        }
    })
})

$(document).on("click", ".imgAnimal", function() {

    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

$("#addAnimal").on("click", function() {

    var user = $("#userAnimal").val().trim();

    if (user !== "" && myAnimals.indexOf(user) === -1) {
        myAnimals.push(user);
        displayAnimal();
    }
    // var bttn = $("<button>")
    // bttn.attr("class", "btnImage");
    // bttn.attr("value", user);
    // bttn.text(user);
    // $("#buttonArea").append(bttn);

})