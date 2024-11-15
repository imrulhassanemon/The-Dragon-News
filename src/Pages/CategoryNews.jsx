import { useLoaderData } from "react-router-dom";
import NewsCart from "../Components/NewsCart";


const CategoryNews = () => {
    const {data:news} = useLoaderData()
    console.log(news);
    return (
        <div>
            <h2 className="font-semibold">Dragon news Home</h2>
            <p className="text-gray-400 text-sm">{news.length} News Found on This Category</p>
            <div>
                {
                    news.map(singleNews => <NewsCart singleNews={singleNews} key={singleNews._id}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;