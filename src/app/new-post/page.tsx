"use client";

import { useState } from "react";

export default function NewPost() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
      setPassword("");
    }
  };

  const handlePublish = () => {
    if (!title.trim() || !description.trim() || !content.trim()) return;

    console.log("Post data:", { title, description, content });
    alert("Post created! (No database connected)");
  };

  if (!isAuthenticated) {
    return (
      <main className="fixed inset-0 flex items-center justify-center">
        <form
          onSubmit={handlePasswordSubmit}
          className="flex flex-col gap-4 p-8 border rounded shadow-lg"
        >
          <h1 className="text-2xl font-bold">Enter Password</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="flex flex-col max-w-4xl mx-auto py-16 outline p-12 gap-4">
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-3xl font-bold border-none outline-none"
      />

      <input
        type="text"
        placeholder="Post Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full text-xl font-bold border-none outline-none"
      />

      <textarea
        placeholder="Write your post content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full min-h-[300px] border rounded p-4 outline-none resize-y"
      />

      <button
        onClick={handlePublish}
        disabled={!title.trim() || !description.trim() || !content.trim()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Publish Post
      </button>
    </main>
  );
}
