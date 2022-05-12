import ButtonCard from "components/buttoms/ButtonCard";
import { React, useEffect, useState, useContext } from "react";
import getUser from "../helpers/users/getUser";
import Context from "../contexts/user";
import patchUser from "helpers/users/patchUser";

export const Profile = () => {
  const [data, setData] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { user, jwt } = useContext(Context);

  if (name === "" && data) {
    setName(data.user.name);
  }
  if (surname === "" && data) {
    setSurname(data.user.surname);
  }
  if (phone === "" && data) {
    setPhone(data.user.phone);
  }

  function handleDisabled() {
    setIsDisabled(!isDisabled);
  }

  const userUpdate = async (e) => {
    e.preventDefault();
    const sendCredentials = { name: name, surname: surname, phone: phone };
    await patchUser(sendCredentials, user.id, jwt);
  };

  // const endpoint = ""
  useEffect(() => {
    if (user.id) {
      const getProfile = async () => {
        const profile = await getUser(user.id, jwt);
        setData(profile);
      };
      getProfile();
    }
  }, [user]);

  return (
    <>
      <div className="profile-view">
        <ButtonCard size={"small"} titleButton={"Mis pedidos"} />
        <ButtonCard size={"small"} titleButton={"Direcciones favoritas"} />
        <form className="my-data" onSubmit={userUpdate}>
          <img
            className="my-data-edit-icon"
            src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
            onClick={handleDisabled}
          />
          <p className="my-data-title">Mis datos:</p>
          {data !== "" ? (
            <>
              <input
                className={isDisabled ? "isDisabled" : "isEnabled"}
                type="text"
                defaultValue={data.user.name}
                onChange={(e) => setName(e.target.value)}
                disabled={isDisabled}
              />
              <input
                className={isDisabled ? "isDisabled" : "isEnabled"}
                type="text"
                defaultValue={data.user.surname}
                onChange={(e) => setSurname(e.target.value)}
                disabled={isDisabled}
              />
              <input
                className={isDisabled ? "isDisabled" : "isEnabled"}
                type="text"
                defaultValue={data.user.phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isDisabled}
              />
            </>
          ) : null}

          {!isDisabled ? <button>Confirmar cambios</button> : false}
        </form>
      </div>
    </>
  );
};
