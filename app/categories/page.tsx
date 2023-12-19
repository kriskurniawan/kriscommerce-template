import HeaderBottom from '@/common/components/layouts/HeaderBottom'
import HeaderTop from '@/common/components/layouts/HeaderTop'
import Navigation from '@/common/components/layouts/Navigation'
import Footer from '@/common/components/layouts/Footer'

export default function Home() {
    return (
        <main className="bg-white">
            <HeaderTop />
            <HeaderBottom />
            <Navigation />
            <Footer />
        </main>
    )
}
