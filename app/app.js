 import CardComponent from './components/card.js';
 import ListComponent from './components/list.js';

 const section = document.getElementById('section');

const baseCardsData = [
    {
        _id: 1,
        title: 'En esta sección...',
        text: 'Encontraras información sobre los personajes más populares de las películas',
        color: 'red',
        range: '1 - 5'
    },
    {
        _id: 2,
        title: 'En esta sección...',
        text: 'Encontraras información sobre personajes secundarios importantes.',
        color: 'green',
        range: '6 - 11'
    },
    {
        _id: 3,
        title: 'En esta sección...',
        text: 'Encontraras otros personajes significativos.',
        color: 'sky',
        range: '12 - 17'
    }
];

async function addCard(e) {
    const currentCard = e.target
    const idCard = currentCard.getAttribute('_id')

    let counter = parseInt(currentCard.getAttribute('mouseenter-counter'), 10)
    if(isNaN(counter)) {
        counter = 0
    }
    if( idCard === 'red' && counter < 5){
        counter ++
        currentCard.setAttribute('mouseenter-counter', counter.toString());
        await getCharacterCard(counter, idCard, 'list1')
    }
    if( idCard === 'green' && counter < 6){
        counter ++
        currentCard.setAttribute('mouseenter-counter', counter.toString());
        await getCharacterCard(counter + 5, idCard, 'list2')
    }
    if( idCard === 'sky' && counter < 6 ){
        counter ++
        currentCard.setAttribute('mouseenter-counter', counter.toString());
        await getCharacterCard(counter + 11, idCard, 'list3')
    }
}
async function getCharacterCard(id, color, listId) {
    const data = await getData(id)
    const card = new CardComponent()
    const {name, height, mass} = data;
    card.setAttribute('color', color)
    card.setAttribute('title', name)
    const text = `Estatura: ${height} cm, Peso: ${mass} kg.`
    card.setAttribute('text', text)
    const li = document.createElement('li')
    li.appendChild(card)
    const list = document.getElementById(listId)
    list.appendChild(li)
}

document.addEventListener('DOMContentLoaded', () => {
    baseCardsData.map(card => {
        const ul = new ListComponent();
        ul.setAttribute('_id', 'list'+card._id)
        ul.setAttribute('range', card.range);
        section.appendChild(ul)
    })
    baseCardsData.map(card => {
        const li = document.createElement('li')
        const cardElement = new CardComponent(); 
        cardElement.setAttribute('color', card.color)
        cardElement.setAttribute('title', card.title);
        cardElement.setAttribute('text', card.text)
        cardElement.setAttribute('_id', card.color)
        cardElement.addEventListener('mouseenter', addCard)
        li.appendChild(cardElement)
        const list = document.getElementById('list'+card._id)
        list.appendChild(li)  
    })
})

 const options = {method: 'GET'};

 async function getData(id) {
    //la api tiene un error por lo cual no es posible obtener el 17
    if(id === 17) {
        id = 18;
    }
     const url = `https://swapi.dev/api/people/${id}/`;
  
     try {
       const response = await fetch(url, options);
       const data = await response.json();
       return data;
     } catch(error) {
       console.error(error);
     }
   }

  

