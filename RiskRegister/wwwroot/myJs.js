
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
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    document.getElementById("myFrame").src = blob + "#toolbar=0";
}

function HideShowIframe() {
    var x = document.getElementById("myFrame");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function HideIframeOnDelete() {
    var x = document.getElementById("myFrame");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
}


