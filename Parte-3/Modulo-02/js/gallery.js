/*Name this external file gallery.js*/

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