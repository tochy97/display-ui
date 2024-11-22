import { useQuery } from "@apollo/client";
import { container } from "./model/classNames";
import { GET_CONTENT } from "../apollo/model/queries";
import ContentController from "../apollo/controller/controller";
import { ReactNode, useState } from "react";
import { PageList } from "../type";

type Props = {
  pageList: PageList,
}

/**
 * Main body for content
 * @returns 
 */
export default function Content({pageList}: Props) {
  const { current } = ContentController();
  return (
    <main className={container}>
      {
        current.current
      }
    </main>
  );
}
