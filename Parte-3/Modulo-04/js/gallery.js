/*Name this external file gallery.js*/

    function addTabIndex() {
        const images = document.querySelectorAll(".preview");
        for (let i = 0; i < images.length; i++) {
            images[i].setAttribute("tabindex", "0");
        }
        console.log("Tabindex added to all preview images");
    }
    function upDate(previewPic){
        const imageDiv = document.getElementById("image");
        imageDiv.style.backgroundImage = `url(${previewPic.src})`;
        imageDiv.innerHTML = previewPic.alt;
	}
    
    function unDo(){
        const imageDiv = document.getElementById("image");
        imageDiv.style.backgroundImage = "url('')";
        imageDiv.innerHTML = "Hover over an image below to display here.";
    }