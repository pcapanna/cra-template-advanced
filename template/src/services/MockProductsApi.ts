import {Product} from "../model";

const mockProductos = [
  {id: 1,
    name: "Alfajor",
    description: "Dulce artesanal o industrial formado por dos piezas circulares" +
      " de masa unidas entre sí por alguna" +
      " sustancia cremosa como dulce de leche o manjar blanco, chocolate o mermelada. "},
  {id: 2, name: "Mayonesa", description: "Salsa hecha con huevo, aceite, vinagre o limón y sal; " +
      "se sirve fría acompañando entremeses, platos fríos, verduras o pescados.\n"},
  {id: 3, name: "Rhodesia", description: "La clasica que no puede fallar RHODESIA"},
  {id: 4, name: "Milanesas con pure", description: "La unica e incomparable milanesas " +
      "casera de la abuela con pure de papa"},
];

class MockProductsApi {
  public listProducts(filtros): Promise<Product[]> {
    // TODO could resolve a real Web Api fetch like shown on comments
    // return fetch("http://api.url.com.ar", {
    //   "method": "GET",
    //   "headers": {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authentication': 'Bearer 343234k2po4234'
    //   }
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    debugger;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockProductos);
      }, 1000)
    })

  }
}

const ApiInstance = new MockProductsApi();

export default ApiInstance;
