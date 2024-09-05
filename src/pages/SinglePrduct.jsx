import React, { useEffect, useState } from "react";
import appAxios from "../utils/axiosConfig";
import { useParams,useNavigate } from "react-router-dom";
function SinglePrduct() {
 const params=useParams()
 const navigate=useNavigate()
 console.log(params)
  const [product, setProduct] = useState({});
  useEffect(() => {
    appAxios.get("/products/"+params.id).then((res) => setProduct(res.data))
    .catch((e)=>console.log(e)
    )
  }, []);
  return (
    <div>
      <img src={product.image} height={200} alt="" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <button onClick={()=>navigate(-1)}>return</button>
      
    </div>
  );
}

export default SinglePrduct;
