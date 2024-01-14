import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from 'styled/LoaderContainer.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#cd5c5c"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderContainer>
  );
};
