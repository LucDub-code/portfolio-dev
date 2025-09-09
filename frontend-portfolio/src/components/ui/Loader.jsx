import loader from "../../assets/animations/loader.json";
import Lottie from "lottie-react";

export default function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie animationData={loader} loop={true} autoplay={true} />
    </div>
  )
}