// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    // Create Elements
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const titleH1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    // Add classes 
    headerDiv.classList.add('.header');
    dateSpan.classList.add('.date');
    tempSpan.classList.add('.temp');

    // Add Text using 
    dateSpan.textContent = 'SMARCH 28, 2019';
    titleH1.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    // Attach to DOM / parent.append(child)
    headerDiv.append(dateSpan, titleH1, tempSpan);

    return headerDiv;
    
}

// Entry Point to HTML
const headerEntryPoint = document.querySelector('.header-container');
const newHeader = Header();
headerEntryPoint.appendChild(newHeader);

