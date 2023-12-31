import HeaderBottom from '@/common/components/layouts/HeaderBottom'
import HeaderTop from '@/common/components/layouts/HeaderTop'
import Footer from '@/common/components/layouts/Footer'
import { Broadcum } from '@/common/components/layouts/Broadcum'
import SideCategories from './SideCategories'

export default function Home() {
    return (
        <main className="bg-white">
            <HeaderTop />
            <HeaderBottom />
            <Broadcum />
            <div className="container mx-auto mt-28">
                <SideCategories />
            </div>
            <Footer />
        </main>
    )
}
