import { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { CartContext } from "../contexts/cart";

export function Card({ data }) {
  const { addValue } = useContext(CartContext);
  return (
    <>
      <section className="w-fit shadow rounded-xl overflow-hidden">
        <figure>
          <div className="bg-white py-2 mb-2 rounded-xl">
            <img
              className="w-2/3 max-w-[180px] mx-auto"
              src={data.picture}
              alt={data.name}
            />
          </div>
          <figcaption className="text-sm font-medium text-slate-800  bg-white p-3 flex justify-between items-center">
            <p className="block sm:hidden">${data.price}</p>
            <p className="hidden sm:block sm:text-base">{data.name}</p>
            <button
              onClick={() => {
                addValue(data);
              }}
            >
              <IoMdAddCircle className="text-3xl text-blue-500 hover:text-blue-600" />
            </button>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
