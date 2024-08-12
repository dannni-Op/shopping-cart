export function CartItem({ data }) {
  return (
    <>
      <section className="flex justify-between w-full p-2">
        <div className="flex items-center gap-4 basis-8/12">
          <div className="w-1/3 bg-red-200">
            <img className="w-full" src={data.picture} alt="" />
          </div>
          <div className="text-base sm:text-xl">
            <h1>{data.name}</h1>
            <p>${data.price}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 basis-1/3">
          <button className="self-end w-fit leading-none text-xl sm:text-3xl">x</button>
          <div className="flex">
            <button className="border px-2 text-xl sm:text-4xl">-</button>
            <input className="w-full border text-base sm:text-3xl" type="text" inputMode="numeric" />
            <button className="border px-2 text-xl sm:text-3xl">+</button>
          </div>
        </div>
      </section>
    </>
  );
}
