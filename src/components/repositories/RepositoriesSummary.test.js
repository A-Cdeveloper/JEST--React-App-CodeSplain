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
  test('Dsiplay primary lang of repository', () => {
    render(<RepositoriesSummary repository={repository} />);
    // const stargazers_count = screen.getByText(repository.stargazers_count);
    // const open_issues = screen.getByText(
    //   new RegExp(repository.open_issues, 'i')
    // );
    // const forks = screen.getByText(new RegExp(repository.forks, 'i'));
    const language = screen.getByText(/javascript/i);

    // expect(stargazers_count).toBeInTheDocument();
    // expect(open_issues).toBeInTheDocument();
    // expect(forks).toBeInTheDocument();
    expect(language).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
  });
});
