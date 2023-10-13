"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Edit = ({ params }) => {
  const { id } = params;
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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/` + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/products/` + id, values)
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
        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          <input
            name="name"
            value={values.name}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                name: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="name"
          />
          <input
            name="desc"
            value={values.desc}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                desc: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="desc"
          />
          <input
            name="price"
            value={values.price}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                price: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="price"
          />
          <input
            name="categoryId"
            value={values.categoryId}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                categoryId: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="categoryId"
          />
          <input
            name="img1"
            value={values.img1}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                img1: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img1"
          />
          <input
            name="img2"
            value={values.img2}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                img2: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img2"
          />
          <input
            name="img3"
            value={values.img3}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                img3: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img3"
          />
          <input
            name="img4"
            value={values.img4}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                img4: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img4"
          />
          <input
            name="img5"
            value={values.img5}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                img5: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img5"
          />
          <input
            name="img6"
            value={values.img6}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                img6: e.target.value,
              }))
            }
            className="h-16 border border-slate-600 px-8 [y-2"
            type="text"
            placeholder="img6"
          />
          <input
            name="description"
            value={values.description}
            onChange={(e) =>
              setValues((prevValues) => ({
                ...prevValues,
                description: e.target.value,
              }))
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

export default Edit;
