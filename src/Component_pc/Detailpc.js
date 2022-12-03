import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Detailpc = () => {
  const id = useParams().id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgv, setImgv] = useState("");

  console.log(name + "/" + price + "/" + imgv);

  const getUser = async (id) => {
    try {
      const res = await fetch("http://localhost:3001/product/" + id);
      const data = await res.json();

      setName(data.pro_name);
      setPrice(data.pro_price);
      setImgv(data.pro_img);
    } catch (e) {
      console.log(e);
    }
  };
  const update = async () => {
    console.log(imgv);

    const dataupdate = {
      name: name,
      price: price,
      img: imgv,
    };
    console.log(
      "new=> " + dataupdate.name + "/" + dataupdate.img + "/" + dataupdate.img
    );
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API}/product/update/` + id,
        {
          method: "PATCH",
          body: JSON.stringify(dataupdate),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      alert("Update Success");
      setName(data.pro_name);
      setPrice(data.pro_price);
      setImgv(data.pro_img);
    } catch (e) {
      console.log(e);
    }
  };
  function clear() {
    setImgv("");
  }
  useEffect(() => {
    getUser(id);
  }, [id]);
  return (
    <div className="mt-10 flex flex-col  justify-center items-center w-full bg-blue-100 ">
      <div className="absolute top-0 left-96 w-40 h-40 rounded-full overflow-hidden flex justify-center items-center">
        <img src={imgv} alt="---No Pic" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center justify-between w-full mt-20">
        <div className=" flex justify-center items-center mb-5">
          <h1 className="text-5xl font-bold">
            Welcome back{" "}
            <small className="text-blue-500 text-8xl">{name}</small>{" "}
          </h1>
        </div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-cyan-400 rounded-md w-[50%] placeholder:px-2 mb-1 focus:outline-slate-700 px-2 py-2 "
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="age"
          className="border-2 border-cyan-400 rounded-md w-[50%] placeholder:px-2 mb-1 focus:outline-slate-700 px-2 py-2 "
        />
        <div className="flex h-[6vh] justify-between w-[50%] items-center mt-2">
          <input
            type="text"
            value={imgv}
            onChange={(e) => setImgv(e.target.value)}
            placeholder="img"
            className="border-2 border-cyan-400 rounded-md w-[90%] placeholder:px-2 mb-1 focus:outline-slate-700 px-2 py-2 "
          />
          <button
            className="ml-2 text-white rounded-md text-sm  px-2  font-mono bg-red-700 h-[60%]"
            onClick={clear}
          >
            clear
          </button>
        </div>
      </div>
      <div className="flex justify-between w-[40%] my-2 items-center">
        <button
          className="bg-blue-600 text-white px-2 py-1 rounded-md "
          onClick={update}
        >
          Update
        </button>
        <Link to="/pc">
          <button className="bg-red-600 text-white px-2 py-1 rounded-md ">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Detailpc;
