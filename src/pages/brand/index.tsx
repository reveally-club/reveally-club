import Layout from "../common/Layout";

const Brand = () => {
  return (
    <Layout>
      <section className="flex flex-col">
        <h2 className="text-4xl font-bold mt-8">Core Value</h2>
        <h2 className="text-4xl font-bold mt-8">Color</h2>
        <section className="mt-4">
          <h3 className="text-xl">Brand</h3>
          <div>
            <div className="h-8 bg-gradient-to-r from-sky-400 to-violet-400" />
            <p className="mt-1 text-sm">#38bdf8 ~ #a78bfa gradient-right</p>
          </div>
          <h3 className="mt-4 text-xl">Primary</h3>
          <div>
            <div className="h-8 bg-sky-400" />
            <p className="mt-1 text-sm">#38bdf8</p>
          </div>
          <h3 className="mt-4 text-xl">Secondary</h3>
          <div>
            <div className="h-8 bg-violet-400" />
            <p className="mt-1 text-sm">#a78bfa</p>
          </div>
        </section>
        <h2 className="text-4xl font-bold mt-8">Typography</h2>
        <section className="mt-4">
          <h3 className="text-xl">Public Sans</h3>
        </section>
        <h2 className="text-4xl font-bold mt-8">Logo</h2>
        <section className="mt-4"></section>
        <h2 className="text-4xl font-bold mt-8">Resource</h2>
      </section>
    </Layout>
  );
};

export default Brand;
