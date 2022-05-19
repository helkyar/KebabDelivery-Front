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
    if(!csvfile?.data) return;
    csvfile.data.forEach(async(order,i) => {
      console.log(order);
      if(i===0) return; //header
      // id_client
      const pacage = { 
        from: order[1], 
        to: order[2], 
        id_delivered: order[3], 
        pick_up_date: order[4], 
        pick_up_time: order[5],    
        pakage: order[6],    
        letter: order[7],    
        comment: order[8],
      };
  
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
