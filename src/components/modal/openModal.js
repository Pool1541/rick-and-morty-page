import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import StyledDiv from "../elements/div.elements";

const StyledFallback = styled(StyledDiv)`
  position: absolute;
`;

export function openModal(info) {
  const Modal = lazy(() => import("./modal"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  modalDiv.style.position = "absolute";
  modalDiv.style.top = 0;
  document.querySelector("#root").appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<StyledFallback>Cargando...</StyledFallback>}>
      <Modal root={root} info={info} />
    </Suspense>
  );
}
