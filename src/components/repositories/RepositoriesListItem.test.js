import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

describe('RepositoriesListItem Component', () => {
  const repository = {
    full_name: 'facebook/react',
    language: 'javascript',
    description: 'Personal website for Aleksandar Cvetkovic',
    owner: 'facebook',
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };

  const renderComponent = () => {
    render(
      <MemoryRouter>
        <RepositoriesListItem repository={repository} />
      </MemoryRouter>
    );
  };

  test('Show a link to the github repo homepage for the repository', () => {});
  renderComponent();

  //render(<RepositoriesListItem repository={repository} />);

  //   Object.values(repository).forEach((value) => {
  //     const el = screen.getByText(new RegExp(value, 'i'));
  //     expect(el).toBeInTheDocument();
  //   });
});
