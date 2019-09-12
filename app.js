var myAnimals = ["dog", "cat", "hamester", "horse", "rabbit", "bird", "racoon", "squirrel", "bear", "dear", "cow", "sheep", "lion"]

var animal;


function displayAnimal() {

    $("#buttonArea").empty();

    for (let i = 0; i < myAnimals.length; i++) {
        var btn = $("<button>")
        btn.attr("class", "btnAnimal");
        btn.attr("value", myAnimals[i]);
        btn.text(myAnimals[i]);
        $("#buttonArea").append(btn);
    }

}

displayAnimal();

$(document).on("click", ".btnAnimal", function() {

    animal = $(this).val();
    $("#imagesArea").empty();

    // var query = "https://api.giphy.com/v1/gifs/search?api_key=Boi88Wtkqy6j61XKYNFfl5SbSbL1Hs2c&q=" + animal + "&limit=10&offset=0&lang=en";
    // curl - H "Authorization: 563492ad6f917000010000010c1c0adf3ab645c8abdfcdc1caa179df";
    var query = "https://api.pexels.com/v1/search?query=people";
    // api_key=563492ad6f917000010000010c1c0adf3ab645c8abdfcdc1caa179df";
    $.ajax({
        headers: {
            'Authorization': '563492ad6f917000010000010c1c0adf3ab645c8abdfcdc1caa179d'
        },
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
    // bttn.attr("class", "btnAnimal");
    // bttn.attr("value", user);
    // bttn.text(user);
    // $("#buttonArea").append(bttn);

})