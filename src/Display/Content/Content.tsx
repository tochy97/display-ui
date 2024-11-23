import { container } from "./model/classNames";
import { GET_CONTENT } from "../apollo/model/queries";
import ContentController from "../apollo/controller/controller";
import { ReactNode, useState } from "react";
import { InternalPage } from "../../type";

type Props = {
  list: Array<InternalPage>,
}

/**
 * Main body for content
 * @returns 
 */
export default function Content({ list }: Props) {
  let notFound = list.find(ele => (ele.name === "NotFound"))?.content ?? <>Not Found</>

  return (
      <main className={container}>
        {
          list.find(ele => (ele.name === ContentController().current))?.content
        }
      </main>
  );
}