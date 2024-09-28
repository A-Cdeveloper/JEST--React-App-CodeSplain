import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import { createServer } from '../../../test/mock/server';
import e from 'express';

describe('AuthButtons Component', () => {
  describe('User is not login', () => {
    ////
    createServer([
      {
        path: '/api/user',
        method: 'get',
        response: { user: null },
      },
    ]);

    test('should render sign in/up buttons when user IS NOT login', async () => {});
    test('should not render sign out button when user IS NOT login', async () => {});
  });

  ///
  describe('User is login', () => {
    createServer([
      {
        path: '/api/user',
        method: 'get',
        response: { user: { id: 1, email: 'a@a.com' } },
      },
    ]);

    test('should render sign out button when user IS login', async () => {});
    test('should not render sign in/up buttons when user IS login', async () => {});
  });

  ////
});
