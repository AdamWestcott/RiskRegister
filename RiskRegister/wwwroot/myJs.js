////function saveAsFile(fileName, bytesBase64) {

////    var link = document.createElement('a');

////    link.download = fileName;

////    link.href = 'data:application/pdf;base64,' + bytesBase64;

////    document.body.appendChild(link);

////    link.click();

////    document.body.removeChild(link);
////}

//function ShowPDF(fileName, filePromise) {
//    document.addEventListener("adobe_dc_view_sdk.ready")
//    type = "text/javascript";
//    var adobeDCView = new AdobeDC.View({ clientId: "d177e1afd072400a94115f298f0e92a2", divId: "adobe-dc-view" });
//    adobeDCView.previewFile({
//        content: {location: { url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf" } },
//        metaData: { fileName: fileName }
//    }, viewerOptions, { embedMode: "IN_LINE", showDownloadPDF: false, showPrintPDF: false });
//}

const clientId = "d177e1afd072400a94115f298f0e92a2";

//var filePromise, buttonsDiv = document.getElementById("showPdf");


//document.addEventListener("adobe_dc_view_sdk.ready", function () {
//        var adobeDCView = new AdobeDC.View({ clientId: "d177e1afd072400a94115f298f0e92a2", divId: "adobe-dc-view" });
//        adobeDCView.previewFile({
//            content: { promise: Promise.resolve(base64ToArrayBuffer(filePromise)) },
//            metaData: { fileName: "Bodea Brochure.pdf" }
//        }, { embedMode: "IN_LINE", showDownloadPDF: false, showPrintPDF: false });
//    });
//document.getElementById("showPDF").addEventListener("click", function () {
//    showPDF(filePromise)
//});
function base64ToArrayBuffer(base64) {
    //var bin = window.atob(base64);
    //var len = bin.length;
    //var uInt8Array = new Uint8Array(len);
    //for (var i = 0; i < len; i++) {
    //    uInt8Array[i] = bin.charCodeAt(i);
    //}

    //document.getElementById("myFrame").src = uInt8Array.buffer;

    var byteCharacters = atob(base64);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: 'application/pdf' });

    //Convert blob into URL Object
    blob = window.URL.createObjectURL(blob);
    document.getElementById("myFrame").src = blob;
   // iframe = container.find('iframe')[0];
    //return uInt8Array.buffer;
}

function reloadJs(src) {
    src = $('script[src$="' + src + '"]').attr("src");
    $('script[src$="' + src + '"]').remove();
    $('<script/>').attr('src', src).appendTo('head');
}

function showPDF(filename, filePromise) {
    var adobeDCView = new AdobeDC.View({
        clientId: clientId, divId: "adobe-dc-view"
    });
    var previewFilePromise = adobeDCView.previewFile(
        {
            content: { promise: Promise.resolve(base64ToArrayBuffer(filePromise)) },
            metaData: { fileName: "Bodea Summary.pdf" }
        },
        { embedMode: "IN_LINE", showDownloadPDF: false, showPrintPDF: false }
    );
}

//document.addEventListener("adobe_dc_view_sdk.ready", function () {
//    document.getElementById("showPDF").addEventListener("click", function () {
//        showPDF("https://documentcloud.adobe.com/view-sdk-demo/PDFs/Summary.pdf")
//    });
//});
