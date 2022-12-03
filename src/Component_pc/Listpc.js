import React, { useEffect, useState } from "react";
import {
  AiFillDelete,
  AiTwotoneEdit,
  AiFillFileAdd,
  AiFillHome,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Listpc = () => {
  const [allpcs, setAllpcs] = useState([]);

  const getAllpcs = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/product`);
      const data = await res.json();

      setAllpcs(data);
    } catch (e) {
      console.log(e);
    }
  };

  const Deletepc = async (id) => {
    try {
      const res = await fetch("http://localhost:3001/product/delete/" + id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        const newallpcs = allpcs.filter((i) => i._id !== id);
        setAllpcs(newallpcs);
      }

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllpcs();
  }, []);
  return (
    <>
      <Link to="/" className="text-3xl top:0 left-1/5 absolute">
        {" "}
        <AiFillHome />
      </Link>
      <Link
        to="/user/adduser"
        className="text-5xl text-blue-600 absolute right-0 top-0"
      >
        <AiFillFileAdd />
      </Link>
      <h1 className="font-bold text-white bg-red-500 max-w-5xl rounded-full text-center mt-[1%] mx-auto py-3 ">
        All Product
      </h1>
      <div className="grid lg:grid-cols-2 gap-1 md:grid-cols-2 sm:grid-cols-1 w-[90%] mx-auto">
        {allpcs.length === 0 ? (
          <h1>loading . . .</h1>
        ) : (
          allpcs.map((i, index) => (
            <div
              className="card bg-blue-900 hover:bg-blue-500  flex items-center justify-around mt-4 rounded-xl  text-white h-[20vh]"
              key={index}
            >
              <div className="w-[25%] rounded-full overflow-hidden h-[90%]">
                <img src={i.pro_img} alt="pic_card" className="w-full h-full" />
              </div>

              <div className="body-card ">
                <p>Name : {i.pro_name}</p>

                <p>Age : {i.pro_price}.00 $</p>
                <p>Income: {i.pro_income.slice(0, 10)}</p>
              </div>
              <div className="footer-card text-2xl flex flex-col items-center justify-between h-[10vh] ">
                <Link
                  to={"/pc/detail/" + i._id}
                  className="hover:text-green-300"
                >
                  <AiTwotoneEdit />
                </Link>

                <button className="hover:text-red-600">
                  <AiFillDelete
                    onClick={() => {
                      Deletepc(i._id);
                    }}
                  />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Listpc;
