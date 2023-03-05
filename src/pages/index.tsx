import Link from "next/link";
import { ThreadState, useListThreadsQuery } from "../modules/reducers/thread";
import Layout from "./common/Layout";
import Loading from "./common/Loading";

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
          <div className="mt-6 flex flex-row gap-8">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="/products/whales.png"
                alt="Whales.club"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Whales.club</div>
                <p className="text-gray-700 text-base">
                  product that tracks the wallet of an NFT whale selected by the
                  club.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="/products/life.png"
                alt="Life.pass"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Life.pass</div>
                <p className="text-gray-700 text-base">
                  The betting target achievement service provides rewards based
                  on the success of the participants.
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="mt-20 flex flex-col w-full items-center">
          <h2 className=" text-4xl font-bold">Members</h2>
          <h3 className="mt-4 text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            &quot;You can be a member if you want.&quot;
          </h3>
          <div className="mt-6 flex flex-row gap-8">
            <Link href="https://twitter.com/dilrong_" target="_blank">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-48" src="members/dilrong.png" alt="dilrong" />
                <div className="px-4 py-4">
                  <div className="font-bold text-xl mb-1">Dilrong (이학성)</div>
                  <p className="text-gray-700 text-base">Developer</p>
                </div>
              </div>
            </Link>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-48" src="members/dodori.png" alt="Dodori" />
              <div className="px-4 py-4">
                <div className="font-bold text-xl mb-1">Dodori</div>
                <p className="text-gray-700 text-base">Marketer</p>
              </div>
            </div>
            <Link href="https://twitter.com/BADBOY_WEB3" target="_blank">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-48" src="members/badboy.png" alt="Badboy" />
                <div className="px-4 py-4">
                  <div className="font-bold text-xl mb-1">Badboy</div>
                  <p className="text-gray-700 text-base">SUPER idiot</p>
                </div>
              </div>
            </Link>
          </div>
        </article>
        {/* <article className="mt-12 mb-12 flex flex-col w-full items-center">
          <h2 className=" text-4xl font-bold">With Us</h2>
          <h3 className="mt-4 text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            &quot;believe in us.&quot;
          </h3>
        </article> */}
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
