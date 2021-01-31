const menu = [
  {
    name: 'Chicken parmesan',
    isVegetarian: false,
  },
  {
    name: 'Penne a la vodka',
    isVegetarian: true,
  },
  {
    name: 'Mushroom risotto',
    isVegetarian: true,
  },
  {
    name: 'Veal saltambuca',
    isVegetarian: false,
  },
  {
    name: 'Filet mignon',
    isVegetarian: false,
  },
];

const vegetarianFoods = menu.filter((food) => food.isVegetarian);
console.log(vegetarianFoods);
