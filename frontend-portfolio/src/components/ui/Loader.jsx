import loader from "../../assets/animations/loader.json";
import Lottie from "lottie-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Lottie animationData={loader} loop={true} autoplay={true} />
    </div>
  )
}