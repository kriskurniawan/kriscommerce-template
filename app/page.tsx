import Category from '@/common/components/layouts/Category'
import HeaderBottom from '@/common/components/layouts/HeaderBottom'
import HeaderTop from '@/common/components/layouts/HeaderTop'
import Navigation from '@/common/components/layouts/Navigation'
import PopularProduct from '@/common/components/layouts/PopularProduct'
import Product from '@/common/components/layouts/Product'
import Slider from '@/common/components/layouts/Slider'

export default function Home() {
  return (
    <main className="bg-white">
      <HeaderTop />
      <HeaderBottom />
      <Navigation />
      <Slider />
      <Category />
      <PopularProduct />
      <Product />
    </main>
  )
}
