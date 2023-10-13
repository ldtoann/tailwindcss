"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const Add = () => {
  const [values, setValues] = useState({
    name: "",
    desc: "",
    price: "",
    categoryId: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8000/products`, values)
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="my-10 ml-96 w-[700px]">
        <p className="font-black text-[40px]">ADD</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="name"
          />
          <input
            name="desc"
            onChange={(e) => setValues({ ...values, desc: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="desc"
          />
          <input
            name="price"
            onChange={(e) => setValues({ ...values, price: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="price"
          />
          <input
            name="categoryId"
            onChange={(e) =>
              setValues({ ...values, categoryId: e.target.value })
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="categoryId"
          />
          <input
            name="img1"
            onChange={(e) => setValues({ ...values, img1: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img1"
          />
          <input
            name="img2"
            onChange={(e) => setValues({ ...values, img2: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img2"
          />
          <input
            name="img3"
            onChange={(e) => setValues({ ...values, img3: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img3"
          />
          <input
            name="img4"
            onChange={(e) => setValues({ ...values, img4: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img4"
          />
          <input
            name="img5"
            onChange={(e) => setValues({ ...values, img5: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img5"
          />
          <input
            name="img6"
            onChange={(e) => setValues({ ...values, img6: e.target.value })}
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img6"
          />
          <input
            name="description"
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="description"
          />
          <button
            type="submit"
            className="bg-green-700 font-bold text-white py-3 px-6 w-fit"
          >
            CREATE
          </button>
          <Link
            href="/"
            className="py-3 px-6 font-bold w-fit text-white bg-red-700 no-underline"
          >
            BACK
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Add;
