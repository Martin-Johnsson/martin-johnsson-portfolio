import { FC } from 'react';

import 'shared/components/LoadingSpinner/LoadingSpinner.css';

interface ILoadingSpinnerProps {
  asOverlay?: boolean;
}

const LoadingSpinner: FC<ILoadingSpinnerProps> = (props) => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <div className='lds-dual-ring'></div>
    </div>
  );
};

export default LoadingSpinner;
