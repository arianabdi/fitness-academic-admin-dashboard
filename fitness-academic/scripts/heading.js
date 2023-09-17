function _renderHeading(title, description) {
    const heading = document.getElementById('heading');

    // Clear existing rows
    heading.innerHTML = '';
    // Iterate through the data and create rows

    const element = document.createElement('div');
    element.innerHTML += `
        <h1 class="df-title yekan-bakh"> ${title}</h1>
        <p class="mg-b-30 yekan-bakh">  ${description}</p>
    `;
    heading.appendChild(element);


}


_renderHeading(heading.title, heading.description)