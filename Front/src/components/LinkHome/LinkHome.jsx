import * as React from "react";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Stack from "@mui/joy/Stack";
import { useQuery } from "react-query";
import NoteRepository from "../../Repositories/NoteRepository";
import { Link } from "react-router-dom";

export default function LinkHome() {
  const noteRepository = new NoteRepository();
  const { data, isLoading, error } = useQuery(
    "type",
    async () => {
      return noteRepository.getTypes();
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
  const urlBasic = 'card/'

  return (
    <div className="flex flex-col ">
      {data.map((props, index) => (
        <Link className="alura-button my-3 text-center" to={urlBasic + props}>
          {props}
        </Link>
      ))}
    </div>
  );
}
