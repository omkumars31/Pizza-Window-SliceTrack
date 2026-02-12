import { useParams } from "react-router-dom";

const TrackOrder = () => {
  const { orderId } = useParams();
  return <h1>Tracking Order: {orderId}</h1>;
};

export default TrackOrder;
