import { ReactElement } from "react";

export type Page = {
    name: string,
    content: ReactElement
}

export type PageList = Array<Page>

export type Content = {
    current: string,
};

