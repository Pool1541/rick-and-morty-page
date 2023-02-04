import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./loading";

export function openModal(info) {
  const Modal = lazy(() => import("./modal"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  modalDiv.style.position = "absolute";
  modalDiv.style.top = 0;
  document.querySelector("#root").appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<Loading />}>
      <Modal root={root} info={info} />
    </Suspense>
  );
}
