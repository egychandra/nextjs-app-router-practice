"use client";

import { useState } from "react"

const AdminProductPage = () => {
  const [ status, setStatus ] = useState("");

  const revalidate = async () => {
    const res = await fetch("/api/revalidate?tag=products&secret=12345678", { method: "POST" })

    if (!res.ok) {
      throw new Error("Failed to revalidate")
    }

    const response = await res.json()
    if(response.revalidated) {
      setStatus("Success to revalidate")
    } else {
      setStatus("Failed to revalidate")
    }

    return response;
  }

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>Admin Product Page</h1>
      <p>{status}</p>
      <button
        className="text-white bg-blue-500 rounded-md p-3 m-5 cursor-pointer"
        onClick={revalidate}
      >
        Revalidate
      </button>
    </div>
  )
}

export default AdminProductPage