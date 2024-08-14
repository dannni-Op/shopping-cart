import { useContext } from "react";
import { CartContext } from "../contexts/cart";
import { toast } from "react-toastify";

export function CartItem({ data }) {
  const { addValue, reduceValue, changeValue } = useContext(CartContext);
  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  return (
    <>
      <section className="flex justify-between w-full p-2">
        <div className="flex items-center gap-4 basis-8/12">
          <div className="w-1/3 bg-red-200 max-w-[100px]">
            <img className="w-full" src={data.picture} alt="" />
          </div>
          <div className="text-base sm:text-lg">
            <h1>{data.name}</h1>
            <p>${data.price}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 lg:gap-20 basis-2/3">
          <button
            className="self-end w-fit leading-none text-xl sm:text-2xl"
            onClick={() => {
              data.quantity = 0;
              reduceValue(data);
              notifyRemovedFromCart(data);
            }}
          >
            x
          </button>
          <div className="flex justify-end">
            <button
              className="border px-2 text-xl sm:text-2xl rounded-l-lg"
              onClick={(e) => {
                reduceValue(data);
                if (data.quantity === 1) notifyRemovedFromCart(data);
                e.target.parentNode.childNodes[1].value = data.quantity - 1;
              }}
            >
              -
            </button>
            <input
              className="w-4/12 md:w-2/12 border text-base sm:text-xl text-center"
              type="text"
              defaultValue={data.quantity}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, "");
                data.quantity = Number(e.target.value);
                if (data.quantity === 0) {
                  e.target.value = 1;
                  data.quantity = 1;
                }
                changeValue(data);
              }}
            />
            <button
              className="border px-2 text-xl sm:text-2xl rounded-r-lg"
              onClick={(e) => {
                addValue(data);
                e.target.parentNode.childNodes[1].value = data.quantity + 1;
              }}
            >
              +
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
