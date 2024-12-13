import Image from "next/image";
import Description from "./components/Description";
import ReviewsSection from "./components/ReviewsSection";

export default function Home() {
  return (
    <div className="container  mx-auto px-4 md:p-0">
       <Description/>
       <ReviewsSection/>
    </div>
  );
}
