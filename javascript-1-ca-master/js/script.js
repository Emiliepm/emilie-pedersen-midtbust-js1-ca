const endpointUrl = "https://restcountries-v1.p.rapidapi.com/region/europe";

const options = {
  headers: {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "621ecf41c2msh731fa7899ad2bbbp1fd486jsnfe4a4a8fbe18",
  },
};

async function callRegion() {
  try {
    const response = await fetch(endpointUrl, options);
    const countriesResponse = await response.json();
    displayRegion(countriesResponse);
  } catch (error) {
    displayError(error);
  }
}

callRegion();

function displayRegion(countriesResponse) {
  console.dir(countriesResponse);
  const countriesContainer = document.querySelector(
    ".col-sm-6",
    ".col-md-4",
    ".col-lg-3"
  );

  let html = "";

  for (let i = 0; i < countriesResponse.length; i++) {
    html += `<div class="card">
                <div class=${countriesResponse[i].name}>
                    <div class="details">
                            <h4 class="${countriesResponse[i].name}">${countriesResponse[i].name}</h4> 
                            <p><b>Capital:</b>${countriesResponse[i].capital}</p> 
                            <p><b>Region:</b>${countriesResponse[i].region}</p>
                            <a class="btn btn-primary" href="details.html?name=${countriesResponse[i].name}">Details</a>
                    </div>
                </div>
            </div>`;
  }
  countriesContainer.innerHTML = html;
}

function displayError(error) {
  const headerContainer = document.querySelector("h1");
  headerContainer.innerHTML = error;
}
