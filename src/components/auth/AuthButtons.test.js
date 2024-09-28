import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import { createServer } from '../../../test/mock/server';

describe('AuthButtons Component', () => {
  const renderComponent = async () => {
    render(
      <MemoryRouter>
        <AuthButtons />
      </MemoryRouter>
    );
    await screen.findAllByRole('link');
  };

  describe('User is not login', () => {
    ////
    createServer([
      {
        path: '/api/user',
        method: 'get',
        response: { user: null },
      },
    ]);

    test('should render sign in/up buttons when user IS NOT login', async () => {
      await renderComponent();
      const signInButton = await screen.findByRole('link', {
        name: /sign in/i,
      });
      const signUpButton = await screen.findByRole('link', {
        name: /sign up/i,
      });
      expect(signInButton).toBeInTheDocument();
      expect(signInButton).toHaveAttribute('href', '/signin');
      expect(signUpButton).toBeInTheDocument();
      expect(signUpButton).toHaveAttribute('href', '/signup');
    });
    test('should not render sign out button when user IS NOT login', async () => {
      await renderComponent();
      const signOutButton = screen.queryByRole('link', {
        name: /sign out/i,
      });

      expect(signOutButton).not.toBeInTheDocument();
    });
  });

  ///
  // describe('User is login', () => {
  //   createServer([
  //     {
  //       path: '/api/user',
  //       method: 'get',
  //       response: { user: { id: 1, email: 'a@a.com' } },
  //     },
  //   ]);

  //   test('should render sign out button when user IS login', async () => {});
  //   test('should not render sign in/up buttons when user IS login', async () => {});
  // });

  ////
});
