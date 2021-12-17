
function base64ToArrayBuffer(base64) {
    var byteCharacters = atob(base64);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: 'application/pdf' });

    //Convert blob into URL Object
    blob = window.URL.createObjectURL(blob);
    var x = document.getElementById("myFrame");
    if (x.style.visibility == "hidden") {
        x.style.visibility = "visible";
    }
    document.getElementById("myFrame").src = blob + "#toolbar=0";
}

function HideIframeOnDelete() {
    var x = document.getElementById("myFrame");
    if (x.style.visibility == "visible") {
        x.style.visibility = "hidden";
    }
}


