import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto border border-red-700 ">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto my-2"> <Navbar></Navbar></nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-3">
                <aside className="col-span-3 border">Left Navbar</aside>
                <section className="col-span-6 border">Main content</section>
                <aside className="col-span-3 border">Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;