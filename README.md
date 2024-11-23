# @egeonu/react-display

@egeonu/react-display is a node package for simplifying react UI display including a nav, content, footer as a single page application.

## Installation

```bash
npm install @egeonu/react-display
```

## Usage

```ts
import ReactDOM from 'react-dom/client';
import Display from @egeonu/react-display

let list: Array<InternalPage> = [
    {
        name: "Home",
        content: <App1 />
    },
    {
        name: "Second",
        content: <App2 />
    },
    {
        name: "Third",
        content: <App3 />
    },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Display contentList={list} title={'Test'} footerList={[]} />);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)