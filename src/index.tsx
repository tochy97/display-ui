import Nav from './Nav/Nav'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import { PageList } from "./type";

type Props = {
  pageList: PageList,
  title: string
}

export default function index({pageList, title}: Props) {
  return (
    <div>
      <Nav pageList={pageList} title={title}/>
      <Content pageList={pageList}/>
      <Footer />
    </div>
  )
}