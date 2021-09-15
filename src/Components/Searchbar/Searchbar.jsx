import {
  Header,
  Form,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.pictureName.value);
  };

  return (
    <Header>
      <Form onSubmit={handleSearch} autoComplete="off">
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <Input
          name="pictureName"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
