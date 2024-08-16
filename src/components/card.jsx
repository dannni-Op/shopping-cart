import { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { CartContext } from "../contexts/cart";
import { toast } from "react-toastify";

export function Card({ data }) {
  const { addValue } = useContext(CartContext);

  const notifyAddedToCart = (item) =>
    toast.success(`${item.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

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
          <figcaption className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-slate-800  bg-white p-3 flex justify-between items-center">
            <p className="block sm:hidden">${data.price}</p>
            <p className="hidden sm:block">{data.name}</p>
            <button
              onClick={() => {
                addValue(data);
                notifyAddedToCart(data);
              }}
            >
              <IoMdAddCircle className="text-2xl md:text-3xl text-blue-500 hover:text-blue-600" />
            </button>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
