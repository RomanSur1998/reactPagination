import React, { useContext, useEffect } from "react";
import { postContext } from "../PostContrextProvider";
import Post from "./Post";
import { Box } from "@mui/material";
import PaginationControlled from "./Pagination";

const PostList = () => {
  const { posts, getPosts } = useContext(postContext);
  console.log(posts);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "5% 0",
        }}
      >
        {posts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </Box>
      <PaginationControlled />
    </div>
  );
};

export default PostList;
