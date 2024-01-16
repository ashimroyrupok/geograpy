import { useEffect, useState } from "react";

const Poka = () => {
      const [search, setSearch] = useState("");
      const [findZilla, setFindZilla] = useState([]);

       const countries = [
         {
           name: "Pakistan",
           value: "PK",
           cities: ["Ahammadbad", "Rajnogor"],
         },
         {
           name: "Bangladesh",
           value: "BD",
           cities: ["Dhaka", "Kurigram"],
         },
         {
           name: "India",
           value: "IN",
           cities: ["Mumbai", "Kolkata"],
         },
       ];

         const handleInput = (e) => {
           console.log("hello");
           setSearch(e.target.value);
         };

         useEffect(() => {
           if (search) {
             const filter = countries.filter(
               (upazila) =>
                 upazila.name.toLowerCase() === search.toLocaleLowerCase()
             );
             console.log(filter, "filter");
             setFindZilla(filter);
           }
         }, [search]);
         console.log(search);
         console.log(findZilla);


    return (
      <div>
        <select onChange={handleInput} name="" id="">
          {countries.map((country) => (
            <option key={country.name}> {country.name}</option>
          ))}
        </select>
        <select name="" id="">
          {findZilla &&
            findZilla[0]?.cities?.map((country, idx) => (
              <option key={idx} value={idx}>
                {country}
              </option>
            ))}
        </select>
      </div>
    );
};

export default Poka;