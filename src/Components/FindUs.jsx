import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start"> <FaFacebook /> Button</button>
        <button className="btn join-item justify-start">Button</button>
        <button className="btn join-item justify-start">Button</button>
      </div>
    </div>
  );
};

export default FindUs;
