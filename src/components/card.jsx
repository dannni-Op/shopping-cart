import { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { CartContext } from "../context/cart";

export function Card({ data }) {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <section
        className="w-fit shadow rounded-xl overflow-hidden"
        onClick={() => {
          setCart("Hello World");
        }}
      >
        <figure>
          <div className="bg-white py-2">
            <img
              className="rounded-xl mb-2 w-2/3 mx-auto"
              src={data.picture}
              alt={data.name}
            />
          </div>
          <figcaption className="font-medium text-slate-800  bg-white p-3 flex justify-between items-center">
            {data.name}
            <button>
              <IoMdAddCircle className="text-3xl text-blue-500 hover:text-blue-600" />
            </button>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
