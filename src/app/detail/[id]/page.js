"use client";
import React, { Fragment, useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import Link from "next/link";
const product = {
  sizes: [
    { name: "36", inStock: true },
    { name: "37", inStock: true },
    { name: "38", inStock: true },
    { name: "39", inStock: true },
    { name: "40", inStock: true },
    { name: "41", inStock: true },
    { name: "42", inStock: true },
    { name: "43", inStock: true },
  ],
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
};

const reviews = { href: "#", average: 5, totalCount: 999 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Detail = ({ params }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [detail, setDetail] = useState(product.sizes[2]);
  const { id } = params;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/` + id)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-10 lg:pt-[20px]">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {detail.name}
              </h1>
            </div>
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {detail.price}
              </p>
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
              <form className="mt-10">
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {detail.description}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-2xl pb-14 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-5 lg:px-5">
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-5">
              <div className="h-[240px] w-full overflow-hidden rounded-lg">
                <img
                  src={detail.img1}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={detail.img5}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-5">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={detail.img4}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-[240px] w-full overflow-hidden rounded-lg">
                <img
                  src={detail.img6}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            {/* <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-5">
              <div className="h-[240px] w-full overflow-hidden rounded-lg">
                <img
                  src={detail.img2}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-4 aspect-w-3 lg:aspect-h-3 lg:aspect-w-2">
                <img
                  src={detail.img3}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div> */}
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg ">
              <div className="lg:grid lg:grid-cols-1 lg:gap-y-5">
                {/* <img
                  src={detail.img2}
                  className="h-[240px] w-full object-cover object-center xl:overflow-visible sm:hidden"
                /> */}
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-5">
                  <div className="h-[240px] w-full overflow-hidden rounded-lg">
                    <img
                      src={detail.img2}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <img
                  src={detail.img3}
                  className="h-[full] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={detail.img3}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={detail.img2}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={detail.img1}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={detail.img4}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
