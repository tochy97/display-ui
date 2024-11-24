import { container } from "./classNames";
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
  const { current } = ContentController();
  return (
      <main className={container}>
        {
          list.find(ele => (ele.name === current))?.content 
          ??
        notFound
        }
      </main>
  );
}
