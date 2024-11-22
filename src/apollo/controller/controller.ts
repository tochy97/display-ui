import { useQuery } from '@apollo/client';
import { GET_CONTENT } from '../model/queries';
import { contentVar } from '../apollo';
import { useState } from 'react';
import { PageList } from '../../type';

export default function ContentController() {
  const { data } = useQuery(GET_CONTENT);
  const list:PageList = []
  const [pages, setPages] = useState(list)

  const findPage = () => {
    let found = pages.find(ele => {
      ele.name = data.content.current
    })
    return found;
  }

  return {
    current: data.content.current,
    changeContent(current: string) {
      contentVar({ 
        current: current,
       });
    },
    setContentPages(pageList: PageList) {
      setPages(pageList);
    }
  };
}