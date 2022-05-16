import Papa from "papaparse";
import { useRef, useState } from "react";

export const CsvUpload = () => {
  const [csvfile, setCsvfile] = useState();
  const fileInput = useRef(null);

  const handleChange = (event) => {
    setCsvfile(event.target.files[0]);
  };

  const importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  const updateData = () => {
    console.log(csvfile);
  };

  return (
    <div className="App">
      <h2>Import CSV File!</h2>
      <input
        className="csv-input"
        type="file"
        ref={fileInput}
        name="file"
        placeholder={null}
        onChange={handleChange}
      />
      <p />
      <button onClick={importCSV}> Upload now! </button>
      <span> </span>
      <button onClick={updateData}> Log results</button>
    </div>
  );
};
