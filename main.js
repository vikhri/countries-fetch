'use strict';


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderData = function (countryData, className = '') {
  const html =`
  <article class="country ${className}">
    <img class="country__img" src="${countryData.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${countryData.name.common}</h3>
      <h4 class="country__region">${countryData.region}</h4>
      <p class="country__row"><span>👫</span>${(+countryData.population / 1000000).toFixed(1)} mil people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(countryData.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(countryData.currencies)[0].name}</p>
     </div>
  </article>`

  countriesContainer.insertAdjacentHTML('beforeend', html);

}
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
}
///////////////////////////////////////
// const createCountryCard = function(country){
//
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();
//
// request.addEventListener('load', function(){
//   const [data] = JSON.parse(this.responseText);
//   console.log(data)
//
//   const html =`
//   <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mil people</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//           </div>
//         </article>
//   `
//
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// })
// }
//

//
// const getCountryAndNeighbour = function(country){
//
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//
//   request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     renderData(data);
//     console.log(data)
//
//     //Get neighbour country
//     const [neighbour] = data.borders;
//     if(!neighbour) return;
//     console.log(neighbour)
//
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//      const [neighbourData] = JSON.parse(this.responseText);
//      renderData(neighbourData, 'neighbour')
//      })
//
//   })
// }
//
// getCountryAndNeighbour('poland');
// ______________________________________________________________

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
//
// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if(!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderData(data[0]);
//       const neighbour = data[0].borders[0]
//       if(!neighbour) return;
//
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then((response) => response.json())
//     .then(([data]) => renderData(data, 'neighbour'))
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Something went wrong.  ${err.message}`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// }
// ______________________app_________________________---
//
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//  return fetch(url).then(response => {
//     if(!response.ok) throw new Error(`${errorMsg} и вот (${response.status})`);
//
//     return response.json()}
//   )
// };
//
// const getCountryData = function(country) {
//
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then(data => {
//       renderData(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('Neighbour not found')
//
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Error 2')
//     })
//     .then(([data]) => renderData(data, 'neighbour'))
//     .catch((err) => {
//       renderError(` ${err.message}`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// }
//
//
// btn.addEventListener('click', () => {
//   getCountryData('australia')
// })

// CHALLENGE--CHALLENGE--CHALLENGE--CHALLENGE--CHALLENGE--CHALLENGE--CHALLENGE--
const coord = document.querySelector('#coord');
const whereContainer = document.querySelector('.whereami');
const renderMessage = function (obj) {
  whereContainer.innerHTML = '';
  whereContainer.insertAdjacentHTML('beforeend',`<p> You are in ${obj.city}, ${obj.country}</p>`)
}

const renderGeoError = function (msg) {
  whereContainer.innerHTML = '';
  whereContainer.insertAdjacentHTML('afterbegin', `<b style='color: red'> ${msg}</b>`)
}

const renderCountryCard = function (country) {
  fetch(`https://restcountries.com/v3.1/alpha/mn${country}`)
    .then((response) => {
      if(!response.ok) { throw new Error('Something went wrong. Can not draw a card')};
      return response.json()
    })
    .then(([data]) => {
      const html =`
   <article class="country" >
           <img class="country__img" src="${data.flags.png}" />
           <div class="country__data">
             <h3 class="country__name">${data.name.common}</h3>
             <h4 class="country__region">${data.region}</h4>
             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mil people</p>
             <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
           </div>
         </article>
   `
   countriesContainer.innerHTML = '';
   countriesContainer.insertAdjacentHTML('beforeend', html);
   countriesContainer.style.opacity = 1;
    }).catch((err) => {
    console.log('error with fetching restcounties.com');
  })
}
const getGeo = function (coordinates) {

  fetch(`https://geocode.xyz/${coordinates}?geoit=json&auth=496199233209489115244x19201`)
    .then((response) => {

      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((data) => {
      if (!data.error) {
        renderMessage(data);
        renderCountryCard(data.state);
      } else {
        throw new Error('Wrong coordinates')
      }
    })
    .catch((err) => renderGeoError(err.message));
}

btn.addEventListener('click', () => {

    getGeo(coord.value);
})