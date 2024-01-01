import HeaderBottom from '@/common/components/layouts/HeaderBottom'
import HeaderTop from '@/common/components/layouts/HeaderTop'
import Footer from '@/common/components/layouts/Footer'
import Homepage from '@/modules/homepage'

export default function Home() {
  return (
    <main className="bg-white">
      <HeaderTop />
      <HeaderBottom />
      <Homepage />
      <Footer />
    </main>
  )
}
