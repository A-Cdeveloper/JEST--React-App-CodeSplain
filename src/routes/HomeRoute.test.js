import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router';

import HomeRoute from './HomeRoute';

// intersepting real api requests
const handlers = [
  rest.get('/api/repositories', (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    const langName = query.split(':').at(-1);

    return res(
      ctx.json({
        items: [
          {
            id: 1,
            full_name: `${langName}-1`,
          },
          {
            id: 2,
            full_name: `${langName}-2`,
          },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('HomeRoute Component', () => {
  it('renders two links for eache table/language', async () => {
    render(
      <MemoryRouter>
        <HomeRoute />
      </MemoryRouter>
    );

    const languages = [
      'javascript',
      'typescript',
      'rust',
      'go',
      'python',
      'java',
    ];

    languages.forEach(async (language) => {
      const heading = await screen.findByRole('heading', {
        name: new RegExp(language, 'i'),
      });
      expect(heading).toBeInTheDocument();

      const links = await screen.findAllByRole('link', {
        name: new RegExp(`${language}-`, 'i'),
      });
      expect(links).toHaveLength(2);
      expect(links[0]).toHaveAttribute('href', `/repositories/${language}-1`);
      expect(links[1]).toHaveAttribute('href', `/repositories/${language}-2`);
    });
    // await pause(1000);
    // screen.debug();
  });
});
//
//const pause = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
