import { getProductDetails } from "@/app/_component/Service/ProductApi"
import ProductDetails from "./ProductDetails"

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProductDetails(id)

  return <ProductDetails product={product} />
}
