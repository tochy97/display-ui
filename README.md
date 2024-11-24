# Display-UI

This is a node react UI display package including a nav, content, footer as a single page application. The main goal is to simplify content loading and it is completely responsive. 

## Usage

### Display

```tsx
import ReactDOM from 'react-dom/client';
import Display from "./Display/Display"

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
```js
type Props = {
    contentList: Array<InternalPage>, // List of ReactElements
    title: string, // Title of Nav
    footerList: Array<InternalPage | ExternalPage> // List of ReactElements or External Links
}
```

### Modal

```tsx
<Modal
  enableOnClick={true}
  trigger={
    <div>
        Trigger
    </div>
  }
  content={
    <>
      <select>
        <option value="test">
          Test
        </option>
      </select>
      <button>
        Go
      </button>
    </>
  }
  width="[100px]"
  height="[50px]"
  top="0"
  left="0"
/>
```

```js
type Props = {
  enableOnClick: boolean; // Disables trigger boolean
  // Default: true
  trigger?: ReactNode; // Trigger ReactElement 
  // Default: null
  content: ReactNode; // Content ReactElement  
  // Required
  header?: ReactNode; // Header ReactElement 
  // Default: null
  closeButtonclass?: string; // Button class string 
  // Default: null
  modalContainerClass?: string; // Modal content class string 
  // Default: null
  width?: string; // Content width 
  // Defaults: screen width
  height?: string; // Content height 
  // Defaults: screen heigth
  top?: string; // Content top 
  // Defaults: 7%
  left?: string; // Content left 
  // Defaults: 0
};

```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)