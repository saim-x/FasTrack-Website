// document.getElementById('downloadButton').addEventListener('click', function() {
//     window.location.href = 'path_to_your_apk_file.apk';
// });


function changeButtonText() {
    window.open('app.apk')
    var button = document.getElementById('downloadButton');
    button.innerText = 'Download horhi hai sabar rkhein';

    setTimeout(function () {
        button.innerText = 'Download APK (25M)';
    }, 5000); 
}
