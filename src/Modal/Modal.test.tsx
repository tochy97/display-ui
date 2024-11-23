import { render, screen } from '@testing-library/react';
import Modal from './Modal';

it('Modal: Trigger tests', () => {
    render(<Modal enableOnClick={true} trigger={'trigger'} content={'content'}/>);
    expect(screen.getByText('trigger')).toBeInTheDocument();
});