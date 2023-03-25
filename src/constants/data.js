import images from "./images";

const coffee = [
  {
    title: "Espresso",
    price: "$3",
    tags: "Shot | Colombiano",
  },
  {
    title: "Doppio",
    price: "$4",
    tags: "Shot | Colombiano",
  },
  {
    title: "Flat-White",
    price: "$5",
    tags: "Cup | Colombiano",
  },
  {
    title: "Latte",
    price: "$6",
    tags: "Cup | Colombiano",
  },
  {
    title: "Capuccino",
    price: "$6",
    tags: "Cup | Colombiano",
  },
];

const cocktails = [
  {
    title: "Aperol Spritz",
    price: "$10",
    tags: "Aperol | Villa Marchesi  | Soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Ron oscuro| Cerveza de jengibre | Rebanada de lima",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Ron | Jugo de frutillas | Azucar",
  },
  {
    title: "Old Fashioned",
    price: "$21",
    tags: "Bourbon | Azucar mascabo | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Vermut | Campari | Naranja",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default {coffee, cocktails, awards};
