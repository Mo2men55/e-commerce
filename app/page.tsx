import { getAllProducts } from "./_component/Service/ProductApi"
import FeaturedProducts from "./_component/FeaturedProducts/FeaturedProducts"

export default async function Home() {
  const products = await getAllProducts()

  return <main className="bg-slate-50 px-4 py-6 sm:px-6 lg:px-8"><FeaturedProducts products={products} /></main>
}



