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
      if (order.length < 8) return;
      const pakage = {
        from: order[0],
        to: order[1],
        id_delivered: order[2],
        pick_up_date: order[3],
        pick_up_time: order[4],
        pakage: order[5],
        letter: order[6],
        comment: order[7],
      };
      const data = await postOrder(pakage, jwt);
      const email = {
        to: user.email,
        text: `Tu paquete ha sido registrado correctamente, usa el siguiente código para hacer el seguimiento ${data.id}`,
      };
      // await sendEmail(email)
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
