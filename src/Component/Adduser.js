import { useState } from "react";
import { Link } from "react-router-dom";

const Adduser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [imgv, setImgv] = useState("");
  const adduser = async () => {
    const dataupdate = {
      name: name,
      age: age,
      img: imgv,
    };
    try {
      const res = await fetch("https://express-api-pu2z.onrender.com/user", {
        method: "POST",
        body: JSON.stringify(dataupdate),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setName("");
      setAge("");
      alert("Success add new user");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="mt-10 flex flex-col  justify-center items-center w-full">
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full overflow-hidden flex justify-center items-center">
          <img src={imgv} alt="---No Pic" className="w-full h-full" />
        </div>
        <h1 className="text-blue-500 font-bold text-3xl mb-10">
          Welcome to Create your Account
        </h1>
        <div className="flex flex-col items-center justify-between w-full">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-cyan-400 rounded-md w-[50%] placeholder:px-2 mb-1 focus:outline-slate-700 px-2 py-2 "
          />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="age"
            className="border-2 border-cyan-400 rounded-md w-[50%] placeholder:px-2 mb-1 focus:outline-slate-700 px-2 py-2 "
          />
          <input
            type="text"
            value={imgv}
            onChange={(e) => setImgv(e.target.value)}
            placeholder="img"
            className="border-2 border-cyan-400 rounded-md w-[50%] placeholder:px-2 mb-1 focus:outline-slate-700 px-2 py-2 "
          />
        </div>
        <div className="flex justify-between w-[40%] my-2 items-center">
          <button
            className="bg-blue-600 text-white px-2 py-1 rounded-md "
            onClick={adduser}
          >
            ADD
          </button>
          <Link to="/user">
            <button className="bg-red-600 text-white px-2 py-1 rounded-md ">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Adduser;
