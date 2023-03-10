import Link from "next/link";
import MemberCard from "./components/MemberCard";
import Layout from "./common/Layout";
import ProductCard from "./components/ProductCard";

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col w-full items-center">
        <article className="mt-20 flex flex-col w-full items-center">
          <h2 className="text-4xl font-bold">About</h2>
          <h3 className="mt-4 text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            &quot;Hmm... reveal everything you want&quot;
          </h3>
          <p className="mt-3 mb-3 text-lg">
            The Reveally.club explores and reveals products that people want on
            Web3.
          </p>
          <Link
            href="https://discord.gg/nNr2DRk3gp"
            target="_blank"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-400 to-sky-400 group-hover:from-violet-500 group-hover:to-sky-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-sky-300"
          >
            <span className="relative px-5 py-2.5 font-medium transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Join Club
            </span>
          </Link>
        </article>
        <article className="mt-20 flex flex-col w-full items-center">
          <h2 className=" text-4xl font-bold">Products</h2>
          <h3 className="mt-4 text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            &quot;Enjoy the various products of the club.&quot;
          </h3>
          <div className="mt-6 flex flex-wrap justify-center md:flex-row flex-col gap-8">
            <ProductCard
              link="https://discord.gg/nNr2DRk3gp"
              image="/products/whales-club.png"
              name="Whales.club"
              description="NFT Wallet Wallet Tracking Data Visualization Solution, Whales.club"
            />
            <ProductCard
              link="https://life.reveally.club"
              image="/products/life-pass.png"
              name="Life.pass"
              description="Betting Platform Services to Achieve Your Objectives, life.pass a.k.a 갓생.패쓰"
            />
            {/* <ProductCard
              link="https://nft.reveally.club"
              image="/products/nft-club.png"
              name="NFT.club"
              description="Secure NFT Solutions with NFT Metadata Inspection, NFT.club"
            /> */}
            <ProductCard
              link="https://twitter.reveally.club"
              image="/products/twitter-club.png"
              name="Twitter.club"
              description="Solutions to help you use Twitter more simply and efficiently, Twitter.club"
            />
            <ProductCard
              link="https://discord.gg/nNr2DRk3gp"
              image="/products/mochi-club.png"
              name="Mochi.club"
              description="Simple but effective performance management solution, Mochi.club"
            />
          </div>
        </article>
        <article className="mt-20 flex flex-col w-full items-center">
          <h2 className=" text-4xl font-bold">Members</h2>
          <h3 className="mt-4 text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            &quot;You can be a member if you want.&quot;
          </h3>
          <div className="mt-6 flex flex-wrap justify-center  md:flex-row flex-col gap-8">
            <MemberCard
              link="https://twitter.com/dilrong_"
              image="/members/dilrong.png"
              name="Dilrong (이학성)"
              role="Developer"
            />
            <MemberCard
              link="/"
              image="/members/dodori.png"
              name="Dodori"
              role="Marketer"
            />
            <MemberCard
              link="https://twitter.com/BADBOY_WEB3"
              image="/members/badboy.png"
              name="Badboy"
              role="SUPER idiot"
            />
            <MemberCard
              link="/"
              image="/members/고래절미.png"
              name="고래절미"
              role="Bot Developer"
            />
            <MemberCard
              link="/"
              image="/members/우영기.png"
              name="wooma(우영기)"
              role="Project Manager"
            />
          </div>
        </article>
        <article className="mt-20 mb-20 flex flex-col w-full items-center">
          <h2 className=" text-4xl font-bold">Contact Us</h2>
          <h3 className="mt-4 text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            &quot;The moment you want us.&quot;
          </h3>
          <Link
            href="https://discord.gg/nNr2DRk3gp"
            target="_blank"
            className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-400 to-sky-400 group-hover:from-violet-500 group-hover:to-sky-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-sky-300"
          >
            <span className="relative  px-5 py-2.5 font-medium transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Contacts
            </span>
          </Link>
        </article>
      </section>
    </Layout>
  );
};

export default Home;
