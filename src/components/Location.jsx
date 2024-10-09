export default function Location({ active = '/Unknow' }) {
  function cleanText(input) {
    let cleaned = input.replace(/^\/+/, "").replace(/-/g, " ");
    cleaned = cleaned.replace(/\b\w/g, (char) => char.toUpperCase());
    return cleaned;
  }
  return (
    <section className="p-4 flex items-end p-6 min-[800px]:px-20  bg-background_image_1  bg-no-repeat bg-center bg-cover">
      <h4 className="text-2xl text-white pt-4">
        Home &gt; {cleanText(active)}{" "}
      </h4>
    </section>
  );
}
