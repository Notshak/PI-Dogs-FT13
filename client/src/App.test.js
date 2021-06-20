import { render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './components/LandingPage'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('render landing page', () => {
  const component = render(<LandingPage />)
  component.getAllByText('Doge')
  // expect(LandingPage).toBeInTheDocument()
})
