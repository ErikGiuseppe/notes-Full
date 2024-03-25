import React, { useEffect, useState } from "react";
import Article from "../Article/Article";
import axios from "axios";
import CardForm from "../CardForm/CardForm";
import { useQuery } from "react-query";
import AxiosApi from "../../API/AxiosApi";
const axiosApi = new AxiosApi();

const ArticleList = () => {
  const { data, isLoading, error } = useQuery(
    "note",
    async () => {
      return axiosApi.tela();
    },
    {
      retry: 2,
      refetchOnWindowFocus: true,
      refetchInterval: 1000,
    }
  );
  if (isLoading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="loading">Algo Deu errado...</div>;
  }

  return (
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
      <CardForm />
      {data.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </div>
  );
};
export default ArticleList;
