import CartSection from "./CartSection";
import SearchSection from "./SearchSection";

export default function HeaderBottom() {
    return (
        <div className="w-full h-24 bg-sky-900 items-center gap-20 inline-flex">
            <img className="w-36 h-10 ml-16" src="https://via.placeholder.com/140x39" />
            <SearchSection />
            <CartSection />
        </div>
    )
}