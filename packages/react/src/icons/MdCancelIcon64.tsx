import React from 'react';
import MdIconProps from './icon.model';

const MdCancelIcon64: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M41.5732 21.0352L32.0002 30.6152L22.4282 21.0352L21.0352 22.4282L30.6152 32.0002L21.0352 41.5732L22.4282 42.9662L32.0012 33.3842L41.5742 42.9662L42.9672 41.5732L33.3852 32.0002L42.9672 22.4272L41.5732 21.0352Z" fill="currentColor"/>
      <path d="M32 8C27.2533 8 22.6131 9.40757 18.6663 12.0447C14.7195 14.6819 11.6434 18.4302 9.8269 22.8156C8.0104 27.201 7.53512 32.0266 8.46116 36.6822C9.38721 41.3377 11.673 45.6141 15.0294 48.9706C18.3859 52.327 22.6623 54.6128 27.3178 55.5388C31.9734 56.4649 36.799 55.9896 41.1844 54.1731C45.5698 52.3566 49.3181 49.2805 51.9553 45.3337C54.5924 41.3869 56 36.7468 56 32C56 25.6348 53.4714 19.5303 48.9706 15.0294C44.4697 10.5286 38.3652 8 32 8ZM32 54.038C27.6413 54.038 23.3805 52.7455 19.7564 50.3239C16.1322 47.9024 13.3076 44.4605 11.6396 40.4336C9.97155 36.4067 9.53512 31.9756 10.3855 27.7006C11.2358 23.4256 13.3347 19.4988 16.4168 16.4168C19.4989 13.3347 23.4257 11.2358 27.7006 10.3855C31.9756 9.53511 36.4067 9.97154 40.4336 11.6395C44.4605 13.3075 47.9024 16.1322 50.3239 19.7563C52.7455 23.3805 54.038 27.6413 54.038 32C54.038 37.8448 51.7162 43.4503 47.5832 47.5832C43.4503 51.7161 37.8449 54.038 32 54.038Z" fill="currentColor"/>
    </svg>

  );
};

export default MdCancelIcon64;
