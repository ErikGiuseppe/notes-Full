import Header from "../components/Header/Header";
import homeSelect from "../components/homeSelect/homeSelect";
import SelectFormSubmission from "../components/SelectFormSubmission/SelectFormSubmission";

const Home = () => {
  const textheader = "Home";
  return (
    <div>
      <Header textheader={textheader} />;
      <div className="mt-5 sm:mt-0  m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px] flex justify-center">
        <SelectFormSubmission />
      </div>
    </div>
  );
};
export default Home;
