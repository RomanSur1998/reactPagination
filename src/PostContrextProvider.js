import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
export const postContext = createContext();

const API = "https://rickandmortyapi.com/api/character";
const INIT_STATE = {
  post: [],
  page: 1,
  totalPages: 1,
};

function reduser(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, post: action.payload };

    case "CURRENT_PAGE":
      return { ...state, page: action.payload };

    case "SET_TOTAL_PAGES":
      return { ...state, totalPages: action.payload };

    default:
      return state;
  }
}

const PostContrextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  async function getPosts() {
    let res = await axios.get(`${API}?page=${state.page}`);
    console.log(res);
    dispatch({ type: "GET_POSTS", payload: res.data.results });
    dispatch({ type: "SET_TOTAL_PAGES", payload: res.data.info.pages });
  }
  console.log(state);

  function setPage(page) {
    dispatch({ type: "CURRENT_PAGE", payload: page });
  }

  useEffect(() => {
    getPosts();
  }, [state.page]);
  const values = {
    getPosts,
    posts: state.post,
    setPage,
    page: state.page,
    totalPages: state.totalPages,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContrextProvider;
