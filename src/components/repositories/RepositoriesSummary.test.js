import { render, screen } from '@testing-library/react';

import RepositoriesSummary from './RepositoriesSummary';

describe('RepositoriesSummary Component', () => {
  const repository = {
    stargazers_count: 100,
    open_issues: 200,
    forks: 300,
    language: 'javascript',
  };

  /////////
  test('display all infos about repository', () => {
    render(<RepositoriesSummary repository={repository} />);

    ///////////
    Object.values(repository).forEach((value) => {
      const el = screen.getByText(new RegExp(value, 'i'));
      expect(el).toBeInTheDocument();
    });
  });
});
