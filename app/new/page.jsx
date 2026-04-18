"use client";
import Nav from "@/components/nav";
import React, { useEffect, useState } from "react";
const page = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [err, setErr] = useState(false);
  const [showPop, setShowpop] = useState(false);
  const [allNotes, setAllNotes] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && note.trim()) {
      const savedData = localStorage.getItem("notes");
      const currentNotes = savedData ? JSON.parse(savedData) : [];

      // 2. Add the new note to that array
      const newNote = { title: title.trim(), note: note.trim() };
      const updatedNotes = [...currentNotes, newNote];

      // 3. Save the updated array back to LocalStorage
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setTitle("");
      setNote("");
      setShowpop(true);
    } else {
      setErr(true);
    }
  }
  return (
    <>
      <Nav />

      <div className="w-full p-4 flex flex-col relative" >
        <div className="flex w-full h-full p-10 flex-col ">
          <h1 className="text-xl font-bold self-center m-1 sm:text-4xl">
            Create Note
          </h1>
          <div className="flex flex-col w-full h-auto p-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-auto gap-4"
            >
              <input
                type="text"
                label="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="px-10 py-5 bg-gray-800 outline-none focus:border-white rounded-xl"
              />
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                name=""
                placeholder="Your note goes here..."
                className="rounded-xl p-10 border-white resize-x-none bg-gray-800 outline-none"
              ></textarea>

              {err ? (
                <div className="p-3 bg-gray-700 text-sm">
                  <p>Fields cannot be empty.</p>
                </div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="w-32 self-center py-1.5 px-5 rounded-full bg-white text-black hover:shadow-2xl text-sm hover:bg-gray-200 cursor-pointer"
              >
                Done
              </button>
            </form>
          </div>
        </div>
        {showPop ? (
          <div className="h-8 w-fit p-8 bg-green-600 flex items-center rounded-2xl absolute right-10">
            Notes saved 👍
            <button
              onClick={() => setShowpop(false)}
              className="ml-10 rounded-full text-red-400 bg-white h-8 w-8"
            >
              x
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default page;
