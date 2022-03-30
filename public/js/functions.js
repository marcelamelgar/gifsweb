allLinks = []

const key = {
    giphy: "DfOahr5tii7JT0MEWeyUSVIjn9ixaBHm"
}

const fetchURL = fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${key.giphy}&limit=10`)

fetchURL.then(response => {
    const URLPromise = response.json();
    URLPromise.then(json => {
        const info = json.data;

        for(let i = 0; i < info.length; i++){
            allLinks.push(info[i]['embed_url']);
        }
        console.log(allLinks);
    })
})