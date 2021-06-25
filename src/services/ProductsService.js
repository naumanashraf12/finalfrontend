import GenericService from "./GenericService";
class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => this.post("products", data);
  getProducts = () => this.get("products");
  getSingleProduct = (id) => this.get("products/" + id);
}

let productService = new ProductsService();
export default productService;
