import { render, screen } from '@testing-library/react';

import Display from './Display';
import { InternalPage } from '../type';
import { act } from 'react';

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

it('Display: Content', async () => {
    await act(async () => render(<Display contentList={list} title={'Test'} footerList={[]} />));
    expect(screen.getByText('Display.test.Home')).toBeInTheDocument();
});

it('Display: Nav', async () => {
    await act(async () => render(<Display contentList={list} title={'Test'} footerList={[]} />));
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByRole('navComponent0')).toBeInTheDocument();
    expect(screen.getByRole('navComponent1')).toBeInTheDocument();
    expect(screen.getByRole('navComponent2')).toBeInTheDocument();
});

it('Display: Footer', async () => {
    await act(async () => render(<Display contentList={list} title={'Test'} footerList={[]} />));
    expect(screen.getByText('Test')).toBeInTheDocument();
});
