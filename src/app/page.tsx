import Image from "next/image";

export default function Home() {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/m.y.k.png" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “My name is muhammad yahya. I from rahim yar khan.I am complete my assigment.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      MUHAMMADYAHYA
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, pakistan
      </div>
    </figcaption>
  </div>
</figure>
  );
}
