import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe("Footer", () => {
    it("renders", () => {
      const textToFind = "Jordy de Jong"
  
      render(<Footer />);
      expect(screen.getByText(textToFind)).toBeInTheDocument();
    });
});