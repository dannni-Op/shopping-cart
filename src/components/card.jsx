export function Card({ data }) {
  return (
    <>
      <section className="w-fit shadow rounded-xl overflow-hidden">
        <figure>
          <img className="rounded-xl mb-2" src={data.picture} alt={data.name} />
          <figcaption className="font-medium text-slate-800  bg-white p-3">
            {data.name}
          </figcaption>
        </figure>
      </section>
    </>
  );
}
