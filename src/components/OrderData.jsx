import { React, useEffect, useState, useContext } from "react";
import getUser from "../helpers/users/getUser";
import Context from "../contexts/user";
import patchUser from "helpers/users/patchUser";
import { useSession } from "../helpers/session/useSession";
export const OrderData = () => {
  const [data, setData] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { user, jwt } = useContext(Context);
  const { logout } = useSession();
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
  let test;
  if (data !== "") {
    test = Object.keys(data.user);
  }
  return (
    <div className="my-data">
      <p className="my-data-title">Mis datos:</p>
      <form className="my-data-form" onSubmit={userUpdate}>
        <img
          className="my-data-edit-icon"
          src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
          onClick={handleDisabled}
        />

        {data !== "" ? (
          <>
            <p className={isDisabled ? "isDisabled" : "isEnabled"}>
              <label>Name:</label>
              <input
                className={isDisabled ? "isDisabled" : "isEnabled"}
                type="text"
                defaultValue={`${data.user.name}`}
                onChange={(e) => setName(e.target.value)}
                disabled={isDisabled}
              />
            </p>
            <p className={isDisabled ? "isDisabled" : "isEnabled"}>
              <label>Surname:</label>
              <input
                type="text"
                defaultValue={data.user.surname}
                onChange={(e) => setSurname(e.target.value)}
                disabled={isDisabled}
              />
            </p>
            <p className={isDisabled ? "isDisabled" : "isEnabled"}>
              <label>Phone number: </label>{" "}
              <input
                type="text"
                defaultValue={data.user.phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isDisabled}
              />
            </p>
          </>
        ) : null}

        {!isDisabled ? (
          <button className="secondary-button">Confirmar cambios</button>
        ) : (
          false
        )}
        <input
          className="button"
          type="button"
          value="Log Out"
          onClick={logout}
        />
      </form>
    </div>
  );
};
