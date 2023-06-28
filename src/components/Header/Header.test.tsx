import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header", () => {
    it("renders children", () => {
      const textToFind = "Foo"
  
      render(<Header>{textToFind}</Header>);
      expect(screen.getByText(textToFind)).toBeInTheDocument();
    });
});