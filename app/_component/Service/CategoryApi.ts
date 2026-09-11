import { Category } from "@/app/_interface/product"

export async function getAllCategories(): Promise<Category[]> {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`, {
    method: "GET"
  })
  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }
  const data = await res.json()
  return data.data
}