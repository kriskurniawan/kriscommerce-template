import HeaderBottom from '@/common/components/layouts/HeaderBottom'
import HeaderTop from '@/common/components/layouts/HeaderTop'
import Footer from '@/common/components/layouts/Footer'
import { Broadcum } from '@/common/components/layouts/Broadcum'
import Categories from '@/modules/categories'

export default function Home() {
    return (
        <main className="bg-white">
            <HeaderTop />
            <HeaderBottom />
            <Broadcum />
            <Categories />
            <Footer />
        </main>
    )
}
