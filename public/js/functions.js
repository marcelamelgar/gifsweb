allLinks = []

const key = {
    giphy: "DfOahr5tii7JT0MEWeyUSVIjn9ixaBHm"
}

function feedLike(){
    const fetchURL = fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${key.giphy}&limit=30`)

    fetchURL.then(response => {
        const URLPromise = response.json();
        URLPromise.then(json => {
            const info = json.data;

            for(let i = 0; i < info.length; i++){
                allLinks.push(info[i]['embed_url']);
            }
            // console.log(allLinks);
            const container = document.getElementById('feed');
            for (let n =  0; n < info.length; n++){
                let col = document.createElement('div');
                col.classList.add('col');

                let card = document.createElement('div');
                card.classList.add('card');

                let frame = document.createElement('iframe');
                frame.setAttribute('src', allLinks[n]);
                frame.classList.add('giphy-embed');

                card.appendChild(frame);
                col.appendChild(card);
                container.appendChild(col)
            }
        });
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function Search() {
    searchLinks =[]
    const searchItem = document.getElementById('searchbox').value
    const fetchURLSearch = fetch(`http://api.giphy.com/v1/gifs/search?api_key=${key.giphy}&q=${searchItem}&limit=30`)
    fetchURLSearch.then(response => {
        const URLPromise = response.json();
        URLPromise.then(json => {
            const info = json.data;

            for (let i = 0; i < info.length; i++) {
                searchLinks.push(info[i]['embed_url']);
            }
            // console.log(searchLinks);
            const container = document.getElementById('feed');
            removeAllChildNodes(container);
            
            for (let n =  0; n < info.length; n++){
                let col = document.createElement('div');
                col.classList.add('col');

                let card = document.createElement('div');
                card.classList.add('card');

                let frame = document.createElement('iframe');
                frame.setAttribute('src', searchLinks[n]);
                frame.classList.add('giphy-embed');

                card.appendChild(frame);
                col.appendChild(card);
                container.appendChild(col)
            }
        });
    });
}


function loadMore(){
    allLinksMore = []
    randomOffset = Math.floor((Math.random() * 4999) + 1);
    
    const fetchURLMore = fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${key.giphy}&limit=30&offset=${randomOffset}`)
    fetchURLMore.then(response => {
        const URLPromise = response.json();
        URLPromise.then(json => {
            const info = json.data;

            for(let i = 0; i < info.length; i++){
                allLinksMore.push(info[i]['embed_url']);
            }
            // console.log(allLinks);
            const container = document.getElementById('feed');
            for (let n =  0; n < info.length; n++){
                let col = document.createElement('div');
                col.classList.add('col');

                let card = document.createElement('div');
                card.classList.add('card');

                let frame = document.createElement('iframe');
                frame.setAttribute('src', allLinksMore[n]);
                frame.classList.add('giphy-embed');

                card.appendChild(frame);
                col.appendChild(card);
                container.appendChild(col)
            }
        });
    });
    
  }