interface ProductsInterface {
  URL: string;
  getProduct(id: number): Promise<any>;
}

interface ProxyProduct {
  products: ProductsInterface;
  getProductById(id: number): Promise<any>;
}

class Products implements ProductsInterface {
  URL = 'https://dummyjson.com/products/';
  getProduct(id: number) {
    return fetch(this.URL + id).then((res) => res.json());
  }
}

class ProxyProducts implements ProxyProduct {
  products;
  constructor(products: ProductsInterface) {
    this.products = products;
  }
  getProductById(id: number) {
    if (id > 10) throw new Error('Id продукта не может быть больше 10');
    return this.products.getProduct(id);
  }
}

const products = new ProxyProducts(new Products());
products.getProductById(1).then(console.log).catch(console.error);
products.getProductById(2).then(console.log).catch(console.error);
products.getProductById(3).then(console.log).catch(console.error);
products.getProductById(7).then(console.log).catch(console.error);
products.getProductById(11).then(console.log).catch(console.error);
