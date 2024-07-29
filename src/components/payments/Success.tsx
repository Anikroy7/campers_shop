import { Link, useLocation } from "react-router-dom";
import OutLayout from "../layouts/OutLayout";
import '../../assets/css/Success.css'
export default function Success() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transaction_id = query.get("transaction_id");
  return (
    <OutLayout>
      <div className="row justify-content-center w-[50%] p-10 mx-auto">
        <div className="col-md-5">
          <div className="message-box _success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h2> Your payment was successful </h2>
            <p>
              Thank you for your payment. we will <br />
              be in contact with more details shortly{" "}
            </p>
            <p>
              Transaction id:{" "}
              {transaction_id ? (
                <span className="text-green-500 font-bold">{transaction_id}</span>
              ) : (
                <span className="text-red-500 font-bold">No id available</span>
              )}
            </p>
          </div>
          <div className="flex justify-center">
            <Link className="w-[25%]" to={'/products'}>
              <button className="bg-gray-500 hover:bg-gray-800" >Back to products</button>
            </Link>
          </div>
        </div>
      </div>
    </OutLayout>
  );
}
