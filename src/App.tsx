import Display from './Display/Display';
import Floaters from './Floaters/Floaters';
function Home({}) {
  return (
    <div>Display.test.Home</div>
  )
}
function App1({}) {
return (
  <div>Display.test.Home</div>
)
}

function App2({ }) {
  return (
      <div>Display.test.2</div>
  )
}
function App3({ }) {
  return (
      <div>Display.test.3</div>
  )
}

function App() {

  let list = [
    {
      name: "",
      content: <Home />
    },
    {
      name: "1",
      content: <App1 />
    },
    {
      name: "2",
      content: <App2 />
    },
    {
      name: "3",
      content: <App3 />
    }
  ]
  return (
    <div>
      <Display contentList={list} title={'Home'} />      
      <Floaters />
    </div>
  );
}

export default App;
