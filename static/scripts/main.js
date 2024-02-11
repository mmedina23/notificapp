console.log(window.location.pathname)

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('q')) {
    const myParam = urlParams.get('q');
    console.log(myParam)

    fetch('http://127.0.0.1:3000/announcements/' + myParam + '.json')
        .then(result => result.json())
        .then((output) => {
            console.log('Output: ', output);
            
    }).catch(err => console.error(err));

}
