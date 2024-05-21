import NoteRepository from "../Repositories/NoteRepository";

export default class NoteService {
  constructor() {
    this.noteRepository = new NoteRepository();
  }
  async getAllDistinct() {
    const note = await this.noteRepository.getAll();
    var types = [];
  

    note.map((props, index) => {
      if (index != 0) {
        types = types.filter(function (e) {
          return e !== props.type;
        });
      }

      types.push(props.type);
    });
   

    return types;
  }
}
