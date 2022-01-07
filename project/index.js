function loadjson(file, callback) {
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", file, true);
    xhr.onreadystatechange= function () {
        if(xhr.readyState === 4 && xhr.status == "200") {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json", function (text){
    var data = JSON.parse(text);
    console.log(data);
    Display(data.cards);
});
// fun
function Display(mb) {
    var deck=document.querySelector(".card-deck");
    for(var i in mb){
        // console.log(mb[i].name);
        var card=document.createElement("div");
        card.classList.add("card");
        deck.append(card);
        var im = document.createElement("img");
        im.src = mb[i].img;
        card.append(im);
        var nam = document.createElement("h1");
        nam.textContent = mb[i].name;
        card.append(nam);
    }
}