import type { Product } from "@/interfaces/productInterface";
import axios from "axios";

export default class ProductApi {
  static url: string = "http://localhost:3000/product";

  static async getProduct(id: string): Promise<Product> {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  static async getProducts(): Promise<Product[]> {
    const response = await axios.get(this.url);
    return response.data;
  }

  static async createProduct(product: any): Promise<Product> {
    const response = await axios.post(this.url, product);
    return response.data;
  }

  static async updateProduct(id: string, product: any): Promise<Product> {
    const response = await axios.patch(`${this.url}/${id}`, product);
    return response.data;
  }

  static async deleteProduct(id: string): Promise<void> {
    const response = await axios.delete(`${this.url}/${id}`);
    return response.data;
  }
}
