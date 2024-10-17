const url = 'https://api.thecatapi.com/v1/images/search'
const apiKey = ''

const btn = document.querySelector('.btn')
const div = document.querySelector('.picture')
const box = document.querySelector('.kiity-box')

function getPicture() {
  fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
  .then(res => res.json())
  .then((data) => {
    let picUrl = data[0].url
    createElement(picUrl)
  })
  .catch((error) => console.log(error))
}

function createElement(picUrl) {
  div.innerHTML = ''
  const img = document.createElement('img')
  img.src = picUrl
  img.classList.add('pic')
  div.appendChild(img)
}

btn.addEventListener('click', getPicture)