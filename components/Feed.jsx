"use client";

import React, { useEffect } from "react";
import PromptCard from "./PromptCard";
import { useState } from "react";

const PromptCardList = ({ data, handleTagClick }) => {
   
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
        return (
          <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [post, setPost] = useState(null);
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setPost(data);
        console.log(data)
      } catch (error) {
        console.log(error)
      }

    };
    fetchPost();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flix-center">
        <input
          type="text"
          placeholder="Search For a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="w-full hover:shadow-2xl h-10 px-3 pr-10 text-sm text-gray-700 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
          required
        />
      </form>

      <PromptCardList data={[post]} handleTagClicks={() => { }} />
    </section>
  );
};

export default Feed;






