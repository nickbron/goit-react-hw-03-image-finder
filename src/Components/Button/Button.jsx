import { Button } from './Button.styled';

// function onClickToBtn(callback) {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
// }

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <>
      <Button type="button" onClick={onClick}>
        Load more
      </Button>
    </>
  );
};
