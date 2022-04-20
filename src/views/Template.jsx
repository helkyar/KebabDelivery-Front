import Context from "contexts/user";
import delTemplate from "helpers/delTemplate";
import getTemplate from "helpers/getTemplate";
import patchTemplate from "helpers/patchTemplate";
import postTemplate from "helpers/postTemplate";
import React, { useContext } from "react";
import { useNavigate } from "react-router";

export const Template = () => {
  const { jwt } = useContext(Context);
  const navigate = useNavigate();
  const get = async () => {
    await getTemplate("d1b57adc-2b9b-4681-9a75-1ffd30d8b073", jwt);
  };
  const post = async () => {
    await postTemplate({ column1: "pepe", column2: "juan" }, jwt);
  };
  const del = async () => {
    await delTemplate("9c1f94bc-73d7-4705-b95e-c826eef497b1", jwt);
  };
  const patch = async () => {
    await patchTemplate(
      { column1: "paco", column2: "jose" },
      "9c1f94bc-73d7-4705-b95e-c826eef497b1",
      jwt
    );
  };
  return (
    <div>
      <h1>Template</h1>
      <button onClick={() => navigate("/")}>back</button>
      <button onClick={() => get()}>get</button>
      <button onClick={() => post()}>post</button>
      <button onClick={() => patch()}>patch</button>
      <button onClick={() => del()}>delete</button>
    </div>
  );
};
