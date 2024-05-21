import * as React from "react";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import TitleIcon from "@mui/icons-material/Title";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import TagIcon from "@mui/icons-material/Tag";
import BookIcon from "@mui/icons-material/Book";

import { useState } from "react";
import { useMutation } from "react-query";
import NoteRepository from "../../Repositories/NoteRepository";
const noteRepository = new NoteRepository();

export default function CardForm() {
  const [post, setPost] = useState({
    title: "",
    text: "",
    tags: "",
    type: "",
  });
  const mutation = useMutation({
    mutationFn: (Post) => {
      return noteRepository.createNote(Post);
    },

    onSuccess: (data) => {
      console.log({ data });
    },

    onError: (err) => {
      const error1 = err.response.data.message;
    },
  });
  return (
    <Card
      className="dark:bg-dark-200"
      variant="outlined"
      sx={{
        maxHeight: "max-content",
        maxWidth: "100%",
        mx: "auto",
        // to make the demo resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Typography
        className="dark:text-white"
        level="title-lg"
        startDecorator={<InfoOutlined />}
      >
        Adicione um novo card
      </Typography>
      <Divider inset="none" />
      <form>
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel className="dark:text-white">Titulo do card</FormLabel>
            <Input
              endDecorator={<TitleIcon />}
              name="title"
              placeholder="Digite o titulo do card"
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
            />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel className="dark:text-white">Texto do card</FormLabel>
            <Input
              endDecorator={<StickyNote2Icon />}
              name="texto"
              placeholder="Digite o texto do card"
              type="text"
              value={post.text}
              onChange={(e) => setPost({ ...post, text: e.target.value })}
              required
            />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel className="dark:text-white">Tags do Card</FormLabel>
            <Input
              endDecorator={<TagIcon />}
              name="tags"
              placeholder="Digite a tag do card"
              type="text"
              value={post.tags}
              onChange={(e) => setPost({ ...post, tags: e.target.value })}
              required
            />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel className="dark:text-white">Tipo do Card</FormLabel>
            <Input
              endDecorator={<BookIcon />}
              name="type"
              placeholder="Digite o tipo do card"
              type="text"
              value={post.type}
              onChange={(e) => setPost({ ...post, type: e.target.value })}
              required
            />
          </FormControl>

          <CardActions sx={{ gridColumn: "1/-1" }}>
            <Button
              variant="solid"
              color="primary"
              onClick={() => mutation.mutate(post)}
            >
              Add card
            </Button>
          </CardActions>
        </CardContent>
      </form>
    </Card>
  );
}
