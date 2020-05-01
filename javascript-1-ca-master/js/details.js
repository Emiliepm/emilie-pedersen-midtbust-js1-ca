const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let name = "";

if (params.has("name")) {
  name = params.get("name");
}

const endpointUrl = "https://restcountries-v1.p.rapidapi.com/name/" + name;

const options = {
  headers: {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "621ecf41c2msh731fa7899ad2bbbp1fd486jsnfe4a4a8fbe18",
  },
};

async function callCountry() {
  try {
    const response = await fetch(endpointUrl, options);
    const countryResponse = await response.json();
    displayCountry(countryResponse);
  } catch (error) {
    displayError(error);
  }
}

callCountry();

function displayCountry(countryResponse) {
  const countryContainer = document.querySelector(".detail-container");
  const titleContainer = document.querySelector("title");

  let html = `<div class="detail-details">
                    <h1>${countryResponse[0].name}</h1>
                    <p><b>Capital: </b>${countryResponse[0].capital}</p> 
                    <p><b>Region: </b>${countryResponse[0].region}</p>
                </div>`;

  countryContainer.innerHTML = html;
  titleContainer.innerHTML = countryResponse[0].name;
}

function displayError(error) {
  const headerContainer = document.querySelector("h1");
  headerContainer.innerHTML = error;
}
