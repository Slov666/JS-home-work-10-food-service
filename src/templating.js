import itemstemplate from './templates/gallery-items.hbs'
import recepi from './menu.json'

const markup = itemstemplate(recepi)

const boxForMenu = document.querySelector('ul.js-menu');

boxForMenu.insertAdjacentHTML('beforeend', markup)