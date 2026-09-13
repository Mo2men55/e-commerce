import { prodType } from "@/app/_interface/product"

const PRODUCTS_URL = `${process.env.BASE_API}/api/v1/products`

type ProductsResponse = {
  data: prodType[]
}

type ProductResponse = {
  data: prodType
}

export async function getAllProducts(): Promise<prodType[]> {
  const response = await fetch(PRODUCTS_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  const result: ProductsResponse = await response.json()
  return result.data
}



export async function getProductDetails(prodId: string): Promise<prodType> {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch product details")
  }

  const product: ProductResponse = await response.json()
  return product.data
}
