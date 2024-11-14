import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center justify-start bg-base-200 gap-3 p-2">
            <p className="bg-[#D72050] px-6 py-2 text-base-100 text-xl">Latest</p>
            <Marquee pauseOnHover={true}  className="gap-24">
            <Link to={'/news'}><p className="text-[18px] font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link>
            <Link to={'/news'}><p className="text-[18px] font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;