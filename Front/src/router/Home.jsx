import Header from "../components/Header/Header";

import LinkHome from "../components/LinkHome/LinkHome";

const Home = () => {
  const textheader = "Home";
  return (
    <div>
      <Header textheader={textheader} />;
      <h2 className="flex justify-center  text-alura-200 dark:text-gray-400 text-xl sm:hover:text-2xl sm:cursor-pointer my-5">
        Selecione uma opção:
      </h2>
      <div className="mt-5 sm:mt-0  m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px] flex justify-center text-alura-200 dark:text-gray-400">
        <LinkHome />
      </div>
    </div>
  );
};
export default Home;
