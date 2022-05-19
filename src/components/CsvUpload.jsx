import Papa from "papaparse";
import { useEffect } from "react";
import { useRef, useState } from "react";

export const CsvUpload = () => {
  const [csvfile, setCsvfile] = useState();
  const fileInput = useRef(null);

  const handleChange = (event) => {
    setCsvfile(event.target.files[0]);
  };

  const importCSV = () => {
    Papa.parse(csvfile, {
      complete: (results) => setCsvfile(results),
    });
    
  };

  useEffect(()=>{
    if(!csvfile.data) return;
    csvfile.data.forEach(async(order,i) => {
      if(i===0) return; //header
      const {from} = order;
      const params = {from};
      // post of order
    });
  },[csvfile])

  return (
    <div className="csv-form">
      <input
        className="csv-input"
        type="file"
        ref={fileInput}
        name="file"
        placeholder={null}
        onChange={handleChange}
      />      
      <button onClick={importCSV}> Process File! </button>
    </div>
  );
};
