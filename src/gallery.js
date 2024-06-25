let getPhotosButton = document.getElementById("getPhotos");
let photoCountInput = document.getElementById("photoCount");
let imageList = document.getElementById("imageList");

getPhotosButton.addEventListener('click', function() {
    
    imageList.innerHTML = '';

    let photoCount = parseInt(photoCountInput.value);
    
    for (let i = 1; i <= photoCount; i++) {
        let img = document.createElement('img');
        img.setAttribute("src", `./image/${i}.jpg`); 
    
        imageList.appendChild(img);
    }
});
