import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="my-8 px-2 drop-shadow-lg  mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Create
        </span>{" "}
        Prompts
      </h1>
      <p className="desc text-left max-w-md">
        Unleash boundless imagination with AI's mind-bending prompts,
        transcending the limits of what you thought possible. Prepare for an
        exhilarating journey where reality and imagination merge in electrifying
        harmony.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-2-2xl flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satodhi -semibold text-base text-gray-700">
            {" "}
            Write Your AI PROMPT:
          </span>{" "}
        </label>

        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write Your Prompt here..."
          required
          className="form_textarea"
        ></textarea>
        <label>
          <span className="font-satodhi -semibold text-base text-gray-700">
            {" "}
            Tags:
            <span className="font-normal">(#webdev #android #recepies)</span>
          </span>{" "}
        </label>

        <input
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="Write Your Tags here..."
          required
          className="form_input"
        />
        <div className="flex-end mx-3  gap-4 mt-6">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
