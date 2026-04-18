"use client";
import Nav from "@/components/nav";
import React, { use, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const page = ({ params }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [err, setErr] = useState(false);
  const [allNotes, setAllNotes] = useState([]);
  const param = use(params);

  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      setAllNotes(JSON.parse(data));
    }
  }, []);
  const currentNote = allNotes.find(
    (note) => note.title === decodeURIComponent(param.title),
  );

  return (
    <>
      <Nav />
      {currentNote ? (
        <div className="max-w-full md:w-full md:mx-auto lg:mx-auto  h-full flex flex-col p-5">
          <h1 className="font-bold text-3xl lg:text-xl text-gray-400 text-center">
            Your Note
          </h1>
          <form className="flex flex-col h-auto gap-4">
            <h1 className="px-10 py-5 text-3xl font-bold rounded-xl">
              {currentNote.title}
            </h1>
            <p className="rounded-xl p-10 border-white resize-x-none bg-gray-800 outline-none">
              {currentNote.note}
            </p>
          </form>
        </div>
      ) : (
        <Loader2
          className="animate-spin text-white mx-auto my-auto"
          size={40}
        />
      )}
    </>
  );
};

export default page;
