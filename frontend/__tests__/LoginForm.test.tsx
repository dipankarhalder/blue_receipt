import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  test('renders login form', () => {
    render(<Home />);
  });

  test('fills in form fields and submits', () => {
    render(<Home />);

    const usernameInput = screen.getByText('username');
    const passwordInput = screen.getByText('password');
    const submitButton = screen.getByText('Submit');

    // Fill in form fields
    fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Assert that the login functionality is triggered or expected behavior occurs
    // You can check if a specific message is displayed or if a redirect occurs
  });
});