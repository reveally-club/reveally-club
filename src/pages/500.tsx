import Link from "next/link";

export default function Custom500() {
  return (
    <section className="bg-white min-h-screen flex">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex content-center items-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            500
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Internal Server Error
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            Something went wrong on that page. <br />
            The error was passed to the development team.
          </p>
          <Link
            href="/"
            className="inline-flex text-white font-medium hover:font-bold bg-gradient-to-r from-sky-400 to-violet-400 rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
