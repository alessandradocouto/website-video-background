'use strict';

async function fetchApi() {
    try {
        const urlApi = (`https://type.fit/api/quotes`);
        const response = await fetch(urlApi);
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};


function showQuote() {
    const displayStr = document.querySelector('.container-quote');
    const searchBtn = document.querySelector('.container-button');
    let tagHtml;
    let countBtn = 0;

    searchBtn.addEventListener('click', async () => {
        const textAuthor = await fetchApi();
        if (!textAuthor[countBtn]) {
            let starQuote =
                prompt('Você chegou ao final das frases. Quer voltar ao começo ou quer ler alguma frase específica? [0] a [1642] ');
            countBtn = starQuote;
        }

        if (!textAuthor[countBtn].author) {
            textAuthor[countBtn].author = 'Unknown';
        }

        tagHtml =  '<h2 class="container-quote-text">' + 
                    textAuthor[countBtn].text +
                    '</h2>' + 
                    '<h3 class="container-quote-author">' + 
                    textAuthor[countBtn].author +
                    '</h3>';

        displayStr.innerHTML = tagHtml;
        countBtn++;
        searchBtn.textContent = 'mais frases';
    });
}


showQuote();