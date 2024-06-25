// document.getElementById('downloadButton').addEventListener('click', function() {
//     window.location.href = 'path_to_your_apk_file.apk';
// });


function changeButtonText() {
    window.open('app.apk')
    var buttonText = document.querySelector('#downloadButtonPet .button__text');
    buttonText.textContent = 'Downloading...';
    // var button = document.getElementById('downloadButton');
    // button.innerText = 'Download horhi hai sabar rkhein';

    setTimeout(function () {
        buttonText.textContent = 'Download';
    }, 5000); 
}
document.getElementById('downloadButtonPet').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    changeButtonText();     // Call the function
});