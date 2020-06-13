// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function Tabs(topic) {

    // Create Elements
    const tabDiv = document.createElement('div');

    // Add class
    tabDiv.classList.add('.tab');

    // Add text
    tabDiv.textContent = topic;
    
    return tabDiv;
}

// Entry Point to HTML 
const tabsEntryPoint = document.querySelector('.topics');

// GET request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( (response) => {
        console.log(response);
        response.data.topics.map( (currentTopic) => {
            const topicsTab = Tabs(currentTopic);
            tabsEntryPoint.appendChild(topicsTab);
      })
    })
    .catch( (err) => {
        console.log("data returned error", err);
    });

