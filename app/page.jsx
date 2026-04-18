"use client";
import Nav from "@/components/nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      setAllNotes(JSON.parse(data));
    }
  }, []);
  function remove(e, name) {
    e.stopPropagation();

    const updatedNotes = allNotes.filter((item) => item.title !== name);

    setAllNotes(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }
  return (
    <div className="w-full p-4 flex flex-col ">
      <Nav />
      <section className="w-full h-full flex flex-col ">
        <div className="h-60 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-extrabold ">NOTES 📝</h1>
          <p className="text-gray-400 font-medium max-w-md text-center leading-relaxed">
            Capture your thoughts and access them{" "}
            <span className="text-white">anywhere, anytime.</span>
          </p>
        </div>
        <div className="w-full h-full p-4 flex flex-col">
          <p className="m-1 text-center text-gray-400">Your saved notes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 ">
            {allNotes.length > 0 ? (
              allNotes.map((item, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/${item.title}`)}
                  // Change 'h-auto' to a specific height like 'h-48'
                  className="relative p-5 h-48 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg cursor-pointer hover:border-gray-500 overflow-hidden"
                >
                  <h2 className="text-xl font-bold text-white mb-2 truncate pr-6">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-4">
                    {item.note}
                  </p>
                  <button
                    onClick={(e) => remove(e, item.title)}
                    className="absolute top-3 right-3"
                  >
                    <Trash2 className="size-4 hover:text-red-400 cursor-pointer" />
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500">
                <p className="text-lg italic">
                  Empty notes — go write something brilliant!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
