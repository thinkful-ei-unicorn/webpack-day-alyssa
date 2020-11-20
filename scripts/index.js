import $ from 'jquery';
import shoppingList from './src/scripts/shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
