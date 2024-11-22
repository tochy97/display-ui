import { useRef, useState } from "react";
import { IoOptionsOutline, IoClose } from "react-icons/io5";

import {
  navBar,
  navComponentContainer,
  subNavContainer,
} from "./model/classnames";
import ContentController from "../apollo/controller/controller";
import { PageList } from "../type";

type Props = {
  pageList: PageList,
  title: string
}

export default function Nav({pageList, title}: Props) {
  const [subVisible, setSubVisible] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const { changeContent } = ContentController();

  const changeView = async (current: string) => {
    changeContent(current);
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
        {window.innerWidth < 1024 ? (
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
                pageList.map((element, index) => 
                  <div key={index}>
                    {element.name}
                  </div>
                )
              }</div>
            )}
          </>
        ) : (
          <div className={"flex"}>{
            pageList.map((element, index) => 
              <div key={index}>
                {element.name}
              </div>
            )
          }</div>
        )}
      </nav>
    </>
  );
}
