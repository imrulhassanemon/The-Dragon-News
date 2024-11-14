import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn"><FaGoogle /> Login With Google</button>
        <button className="btn"><FaGithub /> Login Wiht Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
