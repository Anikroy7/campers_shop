import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

export default function Success() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transaction = query.get('transaction_id');
  const [reload, setReload] = useState(false)
 
  return (
    <div>This is success page

      <h3>transaction id: {transaction}</h3>
    </div>
  )
}
