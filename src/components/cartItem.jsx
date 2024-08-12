import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export function CartItem({ data }) {
  const { addValue, reduceValue } = useContext(CartContext);
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
        <div className="flex flex-col justify-between gap-8 lg:gap-20 basis-1/3">
          <button
            className="self-end w-fit leading-none text-xl sm:text-2xl"
            onClick={() => {
              data.quantity = 0;
              reduceValue(data);
            }}
          >
            x
          </button>
          <div className="flex">
            <button
              className="border px-2 text-xl sm:text-2xl"
              onClick={() => reduceValue(data)}
            >
              -
            </button>
            <input
              className="w-full border text-base sm:text-xl"
              type="text"
              inputMode="numeric"
              value={data.quantity}
              disabled="true"
            />
            <button
              className="border px-2 text-xl sm:text-2xl"
              onClick={() => addValue(data)}
            >
              +
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
