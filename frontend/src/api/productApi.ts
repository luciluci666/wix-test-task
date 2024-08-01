import axios from "axios"


export default class ProductApi {
    static url = 'http://localhost:3000/product'

    static async getProduct(id: number) {
        const response = await axios.get(`${this.url}/${id}`)
        return response.data
    }

    static async getProducts() {
        const response = await axios.get(this.url)
        return response.data
    }

    static async createProduct(product: any) { // TODO: create
        const response = await axios.post(this.url, product)
        return response.data
    }

    static async updateProduct(id: string, product: any) { // TODO: update
        const response = await axios.patch(`${this.url}/${id}`, product)
        return response.data
    }

    static async deleteProduct(id: number) { // TODO: delete
        const response = await axios.delete(`${this.url}/${id}`)
        return response.data
    }
}