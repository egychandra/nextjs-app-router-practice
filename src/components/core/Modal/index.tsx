"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useRef } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const overlayRef = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if(e.target === overlayRef.current) {
      router.back();
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/50"
      onClick={close}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg"
      >
        {children}
      </div>
    </div>
  )
}