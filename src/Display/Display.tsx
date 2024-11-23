import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

import Nav from './Nav/Nav'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import { ExternalPage, InternalPage } from "../type";
import { localCache } from "./apollo/apollo";

type Props = {
    contentList: Array<InternalPage>,
    title: string,
    footerList: Array<InternalPage | ExternalPage>
}

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    connectToDevTools: true,
    cache: localCache,
});

export default function Display({ contentList, title, footerList }: Props) {
    return (
        <ApolloProvider client={client}>
            <Nav list={contentList} title={title} />
            <Content list={contentList} />
            <Footer list={footerList} />
        </ApolloProvider>
    )
}