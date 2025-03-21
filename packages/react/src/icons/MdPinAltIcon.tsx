import React from 'react';
import type MdIconProps from './icon.model';

const MdPinAltIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPinAltIcon is deprecated and will be removed in a future release. Use MdIconLocation instead.');

  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M10.8626 17.952L15.8386 25.152L20.8306 18.032C21.0549 17.7691 21.2532 17.4851 21.4226 17.184C21.9487 16.274 22.2298 15.2431 22.2386 14.192C22.2218 12.5467 21.5575 10.9742 20.3895 9.81527C19.2216 8.6563 17.644 8.00412 15.9986 8H15.8386C14.2069 8.00374 12.6411 8.6449 11.4754 9.78672C10.3097 10.9285 9.63619 12.4807 9.59863 14.112C9.60065 15.1649 9.87044 16.2 10.3826 17.12C10.523 17.4082 10.6834 17.6862 10.8626 17.952ZM15.8386 12.128C16.3501 12.1281 16.85 12.2805 17.2746 12.5657C17.6992 12.8509 18.0293 13.2561 18.2228 13.7296C18.4163 14.2031 18.4644 14.7235 18.3611 15.2245C18.2577 15.7254 18.0076 16.1843 17.6425 16.5426C17.2774 16.9008 16.8139 17.1423 16.3111 17.2362C15.8083 17.3301 15.2889 17.2722 14.8191 17.0699C14.3493 16.8675 13.9504 16.5299 13.6732 16.1C13.396 15.6701 13.2531 15.1674 13.2626 14.656C13.2752 13.9812 13.5522 13.3382 14.0339 12.8654C14.5156 12.3927 15.1637 12.1279 15.8386 12.128Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdPinAltIcon;
