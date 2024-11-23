import { container } from "./classNames";
import { GET_CONTENT } from "../apollo/queries";
import ContentController from "../apollo/controller";
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
          ??
        notFound + " " + ContentController().current
        }
      </main>
  );
}
