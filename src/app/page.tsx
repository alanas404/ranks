"use client";
import Image from "next/image";
import Description from "./components/Description";
import ReviewsSection from "./components/ReviewsSection";
import Order from "./components/Order";
import LoyaltyPoint from "./components/LoyaltyPoint";
import LoyaltyPointCard from "./components/LoyaltyPointCard";
import OrderDetails from "./components/OrderDetails";
import PaymentDetails from "./components/PaymentDetails";
import OrderItems from "./components/OrderItems";
import GiftOrderItems from "./components/GiftOrderItems";
import ModalComponent from "./components/ModalComponent";

export default function Home() {
  return (
    <div className="container  mx-auto px-4 md:p-0">
       <Order/>
       <LoyaltyPoint/> 
       <LoyaltyPointCard/> 
       <OrderDetails/>
       <PaymentDetails/>
       <OrderItems/>
       <GiftOrderItems/>
       <ModalComponent/>
    </div>
  );
}
