import HeaderBottom from '@/common/components/layouts/HeaderBottom'
import HeaderTop from '@/common/components/layouts/HeaderTop'
import Footer from '@/common/components/layouts/Footer'
import { Broadcum } from '@/common/components/layouts/Broadcrum'
import Products from '@/modules/products'

export default function CategoriesPage() {
    return (
        <main className="bg-white">
            <HeaderTop />
            <HeaderBottom />
            <Broadcum />
            <Products />
            <Footer />
        </main>
    )
}
