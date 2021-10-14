function pageLoaded() {
    console.log('Az oldal betöltődött.');

    document.getElementById('root').classList.add('loaded');

    function rootClicked() {
        console.log('the element with the id of root has been clicked');
    }

    document.getElementById('root').addEventListener('click', rootClicked);
}

window.addEventListener('load', pageLoaded);