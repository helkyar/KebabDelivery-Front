import postOrder from "helpers/orders/postOrder";
import sendEmail from "helpers/orders/sendEmail";
import { useSession } from "helpers/session/useSession";
import Papa from "papaparse";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { CSVLink } from "react-csv";

export const CsvUpload = () => {
  const [csvfile, setCsvfile] = useState();
  const { jwt, isLogged, user } = useSession();
  const fileInput = useRef(null);

  const handleChange = (event) => {
    setCsvfile(event.target.files[0]);
  };

  const importCSV = () => {
    Papa.parse(csvfile, {
      complete: (results) => setCsvfile(results),
    });
  };

  useEffect(() => {
    if (!isLogged) {
      // open modal
      return;
    }
    if (!csvfile?.data || user?.email) return;
    csvfile.data.forEach(async (order, i) => {
      if (i < 2) return; //header
      if (order.length < 7) return;
      const pakage = {
        from: order[0],
        to: order[1],
        pick_up_date: new Date(order[2]),
        pakage: order[3],
        letter: order[4],
        comment: order[5],
      };
      pakage.id_client = user.id;
      const data = await postOrder(pakage, jwt);
      const email = {
        to: user.email,
        text: `Tu paquete ha sido registrado correctamente, usa el siguiente código para hacer el seguimiento ${data.id}`,
      };
      // await sendEmail(email)
    });
  }, [csvfile, user]);

  console.log(csvfile, "CSV");

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
      <CSVLink
        data={[
          {
            from: "Departure Street",
            to: "Destinatary Street",
            pick_up_date: "YYYY-MM-DDT00:00",
            package: "S, M , L",
            letter: "S, M , L",
            comment: "Leave a comment here",
          },
        ]}
        headers={[
          { label: "From", key: "from" },
          { label: "To", key: "to" },
          { label: "Pick up Date", key: "pick_up_date" },
          { label: "Package", key: "package" },
          { label: "Letter ", key: "letter" },
          { label: "Comment ", key: "comment" },
        ]}
      >
        Download CSV Template
      </CSVLink>
    </div>
  );
};
