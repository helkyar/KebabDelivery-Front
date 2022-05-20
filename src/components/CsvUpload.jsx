import postOrder from "helpers/orders/postOrder";
import sendEmail from "helpers/orders/sendEmail";
import { useSession } from "helpers/session/useSession";
import Papa from "papaparse";
import { useEffect } from "react";
import { useRef, useState } from "react";

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
      console.log(order);
      if (i === 0) return; //header
      // id_client
      const pakage = {
        from: order[1],
        to: order[2],
        id_delivered: order[3],
        pick_up_date: order[4],
        pick_up_time: order[5],
        pakage: order[6],
        letter: order[7],
        comment: order[8],
      };
      const data = await postOrder(pakage, jwt);
      const email = {
        to: user.email,
        text: `Tu paquete ha sido registrado correctamente, usa el siguiente código para hacer el seguimiento ${data.id}`,
      };
      await sendEmail(email);
    });
  }, [csvfile, user]);

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
