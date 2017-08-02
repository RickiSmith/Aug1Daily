var sectionWrapper = document.createElement("section");
 sectionWrapper.setAttribute("class", "wrapper");

function getValuesFromArray(){
  for(var i = 0; i < customers.results.length; i++){
    var divContainer = document.createElement("div");
    divContainer.setAttribute("class", "customer");
    divContainer.innerHTML = `<img src = ${customers.results[i].picture.large}>
    <h3><u>${customers.results[i].name.first} ${customers.results[i].name.last}</u></h3>
    <p id="email">${customers.results[i].email}</p>
    <p id="address">${customers.results[i].location.street}</br>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</br>${customers.results[i].phone}</p>`;

    sectionWrapper.appendChild(divContainer);
      // console.log(`
        // <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
        // <p>${customers.results[i].email}.</p>
        // <p> ${customers.results[i].location.street}.</p>
        // <p>${customers.results[i].phone}.</p>
  }
}
document.body.appendChild(sectionWrapper);
getValuesFromArray();
