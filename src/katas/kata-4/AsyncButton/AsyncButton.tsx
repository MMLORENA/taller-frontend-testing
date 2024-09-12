import { useFakeFetch } from "./useFakeFetch.ts";

export const AsyncButton = () => {
  const { data, fetchData, resetData } = useFakeFetch();

  const handleOnClick = async () => {
    console.log("Fetching data...");
    await fetchData();
  };

  return (
    <>
      <div className="async-button__container">
        <button onClick={handleOnClick}>Get data</button>
        {data && <span className="async-button__data">{data}</span>}
      </div>
      <button
        onClick={resetData}
        className="async-button__reset"
        disabled={!data}
      >
        Reset
      </button>
    </>
  );
};

export default AsyncButton;
