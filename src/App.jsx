import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [findZilla, setFindZilla] = useState([]);

  const data = {
    upazilas: [
      {
        id: "1",
        district_id: "34",
        name: "Amtali",
        bn_name: "আমতলী",
      },
      {
        id: "2",
        district_id: "34",
        name: "Bamna",
        bn_name: "বামনা",
      },
      {
        id: "3",
        district_id: "34",
        name: "Barguna Sadar",
        bn_name: "বরগুনা সদর",
      },
      {
        id: "4",
        district_id: "34",
        name: "Betagi",
        bn_name: "বেতাগি",
      },
      {
        id: "5",
        district_id: "34",
        name: "Patharghata",
        bn_name: "পাথরঘাটা",
      },
      {
        id: "6",
        district_id: "34",
        name: "Taltali",
        bn_name: "তালতলী",
      },
      {
        id: "7",
        district_id: "35",
        name: "Muladi",
        bn_name: "মুলাদি",
      },
      {
        id: "8",
        district_id: "35",
        name: "Babuganj",
        bn_name: "বাবুগঞ্জ",
      },
      {
        id: "9",
        district_id: "35",
        name: "Agailjhara",
        bn_name: "আগাইলঝরা",
      },
    ],
  };
  const union = {
    postcodes: [
      {
        division_id: "1",
        district_id: "34",
        upazila: "Amtali",
        postOffice: "Amtali",
        postCode: "8710",
      },
      {
        division_id: "1",
        district_id: "34",
        upazila: "Bamna",
        postOffice: "Bamna",
        postCode: "8730",
      },
      {
        division_id: "1",
        district_id: "34",
        upazila: "Barguna Sadar",
        postOffice: "Barguna Sadar",
        postCode: "8700",
      },
      {
        division_id: "1",
        district_id: "34",
        upazila: "Barguna Sadar",
        postOffice: "Nali Bandar",
        postCode: "8701",
      },
      {
        division_id: "1",
        district_id: "34",
        upazila: "Betagi",
        postOffice: "Betagi",
        postCode: "8740",
      },
      {
        division_id: "1",
        district_id: "34",
        upazila: "Betagi",
        postOffice: "Darul Ulam",
        postCode: "8741",
      },
      {
        division_id: "1",
        district_id: "34",
        upazila: "Patharghata",
        postOffice: "Kakchira",
        postCode: "8721",
      },
      {
        division_id: "1",
        district_id: "34",
        upazila: "Patharghata",
        postOffice: "Patharghata",
        postCode: "8720",
      },
    ],
  };

  const handleInput = (e) => {
    console.log("hello");
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      const filter = union.postcodes.filter(
        (upazila) =>
          upazila.upazila.toLowerCase() === search.toLocaleLowerCase()
      );
      console.log(filter, "filter");
      setFindZilla(filter);
    }
  }, [search]);
  console.log(search);
  console.log(findZilla);

  // console.log(data.upazilas.length);

  return (
    <>
      <h1>Vite + React</h1>

      <div>
        <select onChange={handleInput} name="" id="">
          {data.upazilas?.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <select name="" id="">
          {findZilla &&
            findZilla?.map((item) => (
              <option key={item.id} >
                {item.postOffice}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

export default App;
