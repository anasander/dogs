import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "../User/UserPhotoPost";
import UserStats from "../User/UserStats";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import Head from "../Helper/Head";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head
        title="Minha Conta"
        description="Página do perfil do usuário do site Dogs"
      />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
