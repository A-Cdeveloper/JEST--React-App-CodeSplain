import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

//const pause = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

  test('Show a link to the github repo homepage for the repository', async () => {
    renderComponent();
    const fileicon = await screen.findByRole('img', {
      name: repository.language,
    });
    expect(fileicon).toBeInTheDocument();
  });
});
