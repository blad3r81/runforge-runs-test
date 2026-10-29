import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import App from './App';
afterEach(cleanup);
describe('Runs',()=>{
 it('filters by status',async()=>{render(<App/>); await screen.findByText('Fix checkout tests');await userEvent.click(screen.getByRole('button',{name:'Failed'}));expect(screen.getByText('Investigate build failure')).toBeInTheDocument();expect(screen.queryByText('Fix checkout tests')).not.toBeInTheDocument();});
 it('combines search and status filter',async()=>{render(<App/>);await screen.findByText('Fix checkout tests');await userEvent.click(screen.getByRole('button',{name:'Succeeded'}));await userEvent.type(screen.getByRole('textbox',{name:'Search runs'}),'web-platform');expect(screen.getByText('Add usage dashboard')).toBeInTheDocument();expect(screen.queryByText('Fix checkout tests')).not.toBeInTheDocument();});
 it('opens and closes details',async()=>{render(<App/>);await userEvent.click(await screen.findByRole('button',{name:/Fix checkout tests/}));const dialog=screen.getByRole('dialog');expect(within(dialog).getByText('All tests passed')).toBeInTheDocument();await userEvent.keyboard('{Escape}');expect(screen.queryByRole('dialog')).not.toBeInTheDocument();});
});
