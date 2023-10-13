"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";

const callouts = [
  {
    name: "Nike Collections",
    description: "Work from home accessories",
    imageSrc:
      "https://i.pinimg.com/564x/d0/b4/46/d0b446056d1234218eb11e99d83b3b6b.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Adidas World Cup 2022",
    description: "Journals and note-taking",
    imageSrc:
      "https://i.pinimg.com/564x/e8/08/d5/e808d557dae43e93af91154c8d510ee2.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Vans Collections",
    description: "Daily commute essentials",
    imageSrc:
      "https://i.pinimg.com/564x/96/cc/15/96cc1572a0bfda73730936f6f4799a9a.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Adidas Collections",
    description: "Daily commute essentials",
    imageSrc:
      "https://i.pinimg.com/564x/c0/15/92/c015921c59d17e44402249b79867bfa3.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Converse Collections",
    description: "Daily commute essentials",
    imageSrc:
      "https://i.pinimg.com/564x/4b/91/de/4b91deab0c068c38a6625c14a98ebb14.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const StyledCard = styled.div`
  #img,
  #img-change {
    object-fit: cover;
    transition: all 1s;
  }
  #item_col {
    overflow: hidden;
    position: relative;
  }
  #item_col #img-change {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1;
    /* width: 100%;
    height: auto; */
  }
  #item_col:hover #img-change {
    opacity: 0;
  }
`;
const Home = () => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/products?limit=4`)
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products`)
      .then((res) => {
        const firstFourProducts = res.data.slice(0, 4);
        setProducts(firstFourProducts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="h-[810px] relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-14 lg:pb-48 lg:pt-56">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                SMATE STORE
              </h1>
              <p className="mt-4 text-2xl text-gray-500">
                Let Smate take care of your feet in the best way
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-[50%] sm:top-0 sm:translate-x-8 lg:left-[50%] lg:top-[45%] xl:left-[40%] md:left-[40%] lg:-translate-y-[45%] lg:translate-x-8">
                    <div className="flex items-center space-x-3 lg:space-x-3">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 lg:gap-y-3">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.pinimg.com/564x/c7/80/df/c780dfd66000510ce5820251b3726e22.jpg"
                            alt="adidas"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/71/a3/8b/71a38bbcb372d82dac86a4d3190697d6.jpg"
                            alt="adidas"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 lg:gap-y-3">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/87/f6/9b/87f69b4829922ae4acb481cbb5ae3dc1.jpg"
                            alt="nike"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/4d/ef/ab/4defab87bb669dbe3ce8d88d78e6570b.jpg"
                            alt="nike"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/74/43/bb/7443bbb7aa64b0dbcc4c3a97b1c12a61.jpg"
                            alt="nike"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 lg:gap-y-3">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/a6/ed/58/a6ed582c18352e4be3411ab95ae5d4a2.jpg"
                            alt="vans"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/07/3a/f4/073af4d178a7640ca83bc5a24c09e563.jpg"
                            alt="vans"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 lg:gap-y-3">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/c0/82/f1/c082f1479a0a84aa27d0b2c13bf2571d.jpg"
                            alt="converse"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/ea/82/20/ea8220221702a85dbbd5538ee78c8202.jpg"
                            alt="converse"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/52/5b/9f/525b9f3ca49ab354c5dc37a150882514.jpg"
                            alt="converse"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/products" legacyBehavior>
                  <a className="no-underline inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                    Shop now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              New Collections
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">New Products</h2>
          <StyledCard>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products &&
                products.map((item, index) => (
                  <Link href={`/detail/${item.id}`} key={index} legacyBehavior>
                    <a className="no-underline">
                      <div id="item_col">
                        <img
                          id="img"
                          className="w-full h-[300px]"
                          src={item.img2}
                          alt="image"
                        />
                        <img
                          className="w-full h-[300px]"
                          id="img-change"
                          src={item.img1}
                          alt="image"
                        />
                        <h3 className="mt-4 text-sm text-gray-700">
                          {item.name}
                        </h3>
                        <h3 className="mt-1 text-sm text-gray-700">
                          {item.desc}
                        </h3>
                        <p className="mt-1 text-end text-lg font-black text-red-900">
                          {item.price}
                        </p>
                      </div>
                    </a>
                  </Link>
                ))}
            </div>
          </StyledCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
