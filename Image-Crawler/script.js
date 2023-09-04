let imageForm = document.getElementById("imageForm");
let imageTable = document.getElementById("imageTable");

let imageUrls = [];

imageForm.addEventListener("submit",function(event){
    event.preventDefault();

    let imageUrlInput = document.getElementById("imageUrl");
    let imageUrl = imageUrlInput.value.trim(); 

    if(imageUrl){
        imageUrls.push(imageUrl);
        imageUrlInput.value = "";
        displayImages();
    }else {
        alert("Dont add Empty Link");
    }
    console.log(imageUrls);
})

function displayImages() {

    imageTable.innerHTML = "";

    imageUrls.forEach(function(imageUrl){
        // let tr = document.createElement("tr");
        let row = imageTable.insertRow();

        let cell = row.insertCell();
        

        // let img = document.createElement("img");
        let image = new Image();

        image.onload = function(){
            cell.appendChild(image);
        }
        image.onerror = function(){
            cell.textContent = "Image not Found";
            for(let i=0; i<imageUrls.length; i++) {
                if(imageUrls[i] == imageUrl){
                    imageUrls.slice(i,1);
                }
            }
        }

        image.src = imageUrl;
        image.style.maxWidth = "200px";

    })
}