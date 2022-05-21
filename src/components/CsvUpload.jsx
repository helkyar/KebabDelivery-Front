import postOrder from "helpers/orders/postOrder";
import sendEmail from "helpers/orders/sendEmail";
import { useSession } from "helpers/session/useSession";
import Papa from "papaparse";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { CSVLink } from "react-csv";
import Modal from "./modal/Modal";
import { ModalSession } from "./modalSession/ModalSession";

export const CsvUpload = () => {
  const [csvfile, setCsvfile] = useState();
  const [openModal, setOpenModal] = useState();
  const { jwt, isLogged, user } = useSession();
  const fileInput = useRef(null);

  const handleChange = (event) => {
    setCsvfile(event.target.files[0]);
  };

  const importCSV = () => {
    if (!isLogged) {
      setOpenModal(true);
      return;
    }
    Papa.parse(csvfile, {
      complete: (results) => setCsvfile(results),
    });
  };

  useEffect(() => {
    if (!isLogged) {
      setOpenModal(true);
      return;
    }
    if (!csvfile?.data || !user?.id) return;

    console.log(isLogged, csvfile?.data, user?.id);

    csvfile.data.forEach(async (order, i) => {
      console.log(order, "FOREACH");
      if (i < 2) return; //header
      if (order.length < 6) return;
      const pakage = {
        from: order[0],
        to: order[1],
        pick_up_date: new Date(order[2]),
        pakage: order[3],
        letter: order[4],
        comment: order[5],
        id_client: user.id,
      };
      const data = await postOrder(pakage, jwt);
      console.log(data, "DATA");
      // const email = {
      //   to: user.email,
      //   text: `Tu paquete ha sido registrado correctamente, usa el siguiente código para hacer el seguimiento ${data.id}`,
      // };
      // await sendEmail(email)
    });
  }, [csvfile, user]);

  return (
    <div className="csv-form">
      <div>
        <input
          className="csv-input"
          type="file"
          ref={fileInput}
          name="file"
          placeholder={null}
          onChange={handleChange}
        />
        <button onClick={importCSV}> Enviar! </button>
      </div>
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
        className="button"
      >
        Descargar Template
      </CSVLink>
      <Modal onOpen={openModal} setOnOpen={setOpenModal}>
        <ModalSession />
      </Modal>
    </div>
  );
};
