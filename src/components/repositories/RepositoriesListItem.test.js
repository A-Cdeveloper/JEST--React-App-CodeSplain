import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

//const pause = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//jest.mock('../tree/FileIcon', () => () => 'FileIcon Component Mock Version');

describe('RepositoriesListItem Component', () => {
  const renderComponent = () => {
    const repository = {
      full_name: 'facebook/react',
      language: 'javascript',
      description: 'Personal website for Aleksandar Cvetkovic',
      owner: 'facebook',
      name: 'react',
      html_url: 'https://github.com/facebook/react',
    };

    render(
      <MemoryRouter>
        <RepositoriesListItem repository={repository} />
      </MemoryRouter>
    );

    return {
      repository,
    };
  };

  test('Show a link to the github repo homepage for the repository', async () => {
    const { repository } = renderComponent();
    const fileicon = await screen.findByRole('img', {
      name: repository.language,
    });
    expect(fileicon).toBeInTheDocument();

    const link = screen.getByRole('link', {
      name: /github repository/i,
    });

    expect(link).toHaveAttribute('href', repository.html_url);
  });
});
