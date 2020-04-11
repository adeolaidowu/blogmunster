import { v4 as uuidv4 } from "uuid";

//ADD_POST
export const addPost = ({
  title = "",
  content = "",
  imageLink = "",
  createdAt = 0,
} = {}) => ({
  type: "ADD_POST",
  post: {
    id: uuidv4(),
    title,
    content,
    imageLink,
    createdAt,
  },
});

//EDIT_POST
export const editPost = (id, updates) => ({
  type: "EDIT_POST",
  id,
  updates,
});

//DELETE_POST
export const deletePost = ({ id } = {}) => ({
  type: "DELETE_POST",
  id,
});
