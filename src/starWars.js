const URL_FILMS = 'https://swapi.dev/api/films';
const eventContainer = document.querySelector('.eventContainer');
const loader = document.querySelector('.loader');
loader.setAttribute('hidden', '');

const getCharacters = async (filmURL) => {
  const requests = await fetch(filmURL);
  const filmInfo = await requests.json();

  const charRequests = filmInfo.characters.map((charURL) => fetch(charURL));
  const charResponse = await Promise.all(charRequests);
  const allChars = await Promise.all(charResponse.map((data) => data.json()));
  return allChars;
}

const getFilms = async () => {
  try {
    toggleElement(loader);
    const response = await fetch(URL_FILMS);
    if (!response.ok){
      throw new Error ('Ошибка при загрузке данных');
    }
    const filmsList = await response.json();
    toggleElement(loader);

    filmsList.results.forEach((film) => {
      const filmContainer = document.createElement('div');
      filmContainer.className = 'filmInfo';
      eventContainer.append(filmContainer);

      const filmTitle = document.createElement('h2');
      filmTitle.className = 'episod_title';
      filmTitle.textContent = film.title;
      filmContainer.append(filmTitle);

      const filmDescription = document.createElement('div');
      filmDescription.className = 'film_description';
      filmDescription.textContent = film.opening_crawl;
      filmContainer.append(filmDescription);

      const releaseData = document.createElement('span');
      releaseData.className = 'release_data';
      releaseData.textContent = `Release date >>> ${film.release_date}`;
      filmContainer.append(releaseData);

      const filmLinkData = document.createElement('div');
      filmLinkData.className = 'link_to_movie';
      filmContainer.append(filmLinkData)

      const filmSpan = document.createElement('span');
      filmSpan.textContent = 'Episode description here >>>';
      filmLinkData.append(filmSpan);

      const filmLink = document.createElement('a');
      filmLink.className = 'link_to_movie';
      filmLink.textContent = `${film.url}`;
      filmLink.setAttribute('href', film.url);
      filmLinkData.append(filmLink);
    })
  } catch (error) {
    console.error(error);
    toggleElement(loader);
    const errorSpan = document.createElement('div');
    errorSpan.className = 'errorMessage';
    errorSpan.textContent = error;
    eventContainer.append(errorSpan);
  }
}

const toggleElement = (element) => {
  if (element.hasAttribute('hidden')) {
    element.removeAttribute('hidden')
  } else {
    element.setAttribute('hidden', '')
  }
}

eventContainer.addEventListener('click', async (event) => {
  const { target } = event;
  const isTitle = target.closest('.episod_title');
  if (isTitle) {
    const link = target.closest('.filmInfo').lastChild;
    if (link.className === 'characters_container') {
      console.log('Уже существует');
      toggleElement(link)
    } else {
      const linkText = link.querySelector('a');
      const characters = await getCharacters(linkText.href);
      const charactersBox = document.createElement('div');
      charactersBox.className = 'characters_container';
      target.closest('.filmInfo').append(charactersBox);
      characters.forEach((char) => {
        const charObject = document.createElement('div');
        charObject.className = 'character_item';
        charObject.textContent = char.name;
        charactersBox.append(charObject);
      })
    }
  }
})

getFilms()