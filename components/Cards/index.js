// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// Create Card Function
function Cards(object) {
    // Create Elements
    const 
        cardDiv = document.createElement('div'),
        headlineDiv = document.createElement('div'),
        authorContainerDiv = document.createElement('div'),
        imageContainerDiv = document.createElement('div'),
        authorImage = document.createElement('img'),
        authorNameSpan = document.createElement('span');

    // Add classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorContainerDiv.classList.add('author');
    imageContainerDiv.classList.add('img-container');

    // Text
    headlineDiv.textContent = object.headline;
    authorNameSpan.textContent = `By: ${object.authorName}`;

    // Image Src
    authorImage.src = object.authorPhoto;

    // Append
    cardDiv.appendChild(headlineDiv, authorContainerDiv);
    authorContainerDiv.appendChild(imageContainerDiv, authorNameSpan);
    imageContainerDiv.appendChild(authorImage);

    return cardDiv;

}

// Cards Entry Point
const cardsEntryPoint = document.querySelector('.cards-container');

// GET request
axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then( (response) => {
            console.log(response);
            response.data.articles.bootstrap.map(currentArticle => {
                const articleCards = Cards(currentArticle)
                    cardsEntryPoint.appendChild(articleCards);
            })
            response.data.articles.javascript.map(currentArticle => {
                const articleCards = Cards(currentArticle)
                    cardsEntryPoint.appendChild(articleCards);
                })
            response.data.articles.jquery.map(currentArticle => {
                    const articleCards = Cards(currentArticle)
                        cardsEntryPoint.appendChild(articleCards);
                    })
            response.data.articles.node.map(currentArticle => {
                        const articleCards = Cards(currentArticle)
                            cardsEntryPoint.appendChild(articleCards);
                        })
             response.data.articles.technology.map(currentArticle => {
                            const articleCards = Cards(currentArticle)
                                cardsEntryPoint.appendChild(articleCards);
                            })
        })
    