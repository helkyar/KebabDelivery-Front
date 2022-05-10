import ButtonCard from "components/buttoms/ButtonCard";
import { React, useEffect, useState, useContext } from "react";
import getUser from "../helpers/users/getUser";
import Context from "../contexts/user";
import patchUser from "helpers/users/patchUser";

export const Profile = () => {
  const [data, setData] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("");
  const { user, jwt } = useContext(Context);

  function handleDisabled() {
    setIsDisabled(!isDisabled);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submited");
  }

  const userRegister = async (e) => {
    e.preventDefault();
    const credentials = name !== "" ? { name: name } : data.user.name;
    await patchUser(credentials, user.id, jwt);
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
        <form className="my-data" onSubmit={userRegister}>
          <input
            className="my-data-edit-icon"
            type="image"
            src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
            onClick={handleDisabled}
          />
          <p className="my-data-title">Mis datos:</p>
          {data !== "" ? (
            <input
              className={isDisabled ? "isDisabled" : "isEnabled"}
              type="text"
              defaultValue={data.user.name}
              onChange={(e) => setName(e.target.value)}
              disabled={isDisabled}
            />
          ) : null}
          {data !== "" ? (
            <input
              className={isDisabled ? "isDisabled" : "isEnabled"}
              type="text"
              defaultValue={data.user.surname}
              disabled={isDisabled}
            />
          ) : null}
          {data !== "" ? (
            <input
              className={isDisabled ? "isDisabled" : "isEnabled"}
              type="text"
              defaultValue={data.user.phone}
              disabled={isDisabled}
            />
          ) : null}
          {!isDisabled ? <button>Confirmar cambios</button> : false}
        </form>
      </div>
    </>
  );
};
