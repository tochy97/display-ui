import { useRef, useState } from "react";
import { IoOptionsOutline, IoClose } from "react-icons/io5";

import {
  navBar,
  navComponentContainer,
  subNavContainer,
} from "./model/classnames";
import ContentController from "../apollo/controller/controller";
import { InternalPage } from "../../type";

type Props = {
  list: Array<InternalPage>,
  title: string
}

export default function Nav({ list, title }: Props) {
  const [subVisible, setSubVisible] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const changeView = async (current: string) => {
    ContentController().changeContent(current);
    setSubVisible(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <nav className={navBar} ref={navRef}>
        <div
          className={navComponentContainer}
          onClick={() => changeView("Home")}
        >
          {title}
        </div>
        {
        window.innerWidth < 1024 
        ? 
        (
          <>
            <div
              className={`h-auto visible cursor-pointer mt-2 ${navComponentContainer}`}
              onClick={() => setSubVisible(!subVisible)}
            >
              {subVisible ? (
                <IoClose size={25} />
              ) : (
                <IoOptionsOutline size={25} />
              )}
            </div>
            {subVisible && (
              <div className={subNavContainer}>{
                    list.map((content, index) =>
                      <div key={index} onClick={() => changeView(content.name)}>
                    {content.name}
                  </div>
                )
              }</div>
            )}
          </>
        ) 
        : 
        (
          <div className={"flex"}>{
                list.map((content, index) =>
              <div key={index} onClick={() => changeView(content.name)}>
                {content.name}
              </div>
            )
          }</div>
        )}
      </nav>
    </>
  );
}
