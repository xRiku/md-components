import React from 'react';

export interface MdDeleteIconProps {
  className?: string;
  [otherProps: string]: unknown;
};

const MdDeleteIcon64: React.FunctionComponent<MdDeleteIconProps> = ({
  className = '',
  ...otherProps
}: MdDeleteIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...otherProps}
    >
      <path d="M47.8799 12.8179H38.0729V9.00391C38.0729 8.73869 37.9676 8.48434 37.78 8.2968C37.5925 8.10926 37.3381 8.00391 37.0729 8.00391H27.8139C27.5487 8.00391 27.2943 8.10926 27.1068 8.2968C26.9193 8.48434 26.8139 8.73869 26.8139 9.00391V12.8179H17.0039C16.7387 12.8179 16.4843 12.9233 16.2968 13.1108C16.1093 13.2983 16.0039 13.5527 16.0039 13.8179V22.0589C16.0039 22.3241 16.1093 22.5785 16.2968 22.766C16.4843 22.9536 16.7387 23.0589 17.0039 23.0589H18.5699V54.9889C18.5699 55.2541 18.6753 55.5085 18.8628 55.696C19.0503 55.8836 19.3047 55.9889 19.5699 55.9889H45.3099C45.5751 55.9889 45.8295 55.8836 46.017 55.696C46.2045 55.5085 46.3099 55.2541 46.3099 54.9889V23.0669H47.8799C48.1451 23.0669 48.3995 22.9615 48.587 22.774C48.7745 22.5865 48.8799 22.3321 48.8799 22.0669V13.8219C48.8804 13.6902 48.855 13.5598 48.8049 13.438C48.7549 13.3162 48.6813 13.2055 48.5884 13.1122C48.4955 13.0189 48.3851 12.9449 48.2635 12.8944C48.1419 12.8439 48.0116 12.8179 47.8799 12.8179V12.8179ZM28.8079 10.0099H36.0549V12.8209H28.8179L28.8079 10.0099ZM44.3079 53.9949H20.5799V23.0669H44.3059L44.3079 53.9949ZM46.8799 21.0589H18.0079V14.8259H46.8799V21.0589Z" fill="black"/>
      <path d="M27.8125 46.6463C28.0777 46.6463 28.3321 46.5409 28.5196 46.3534C28.7071 46.1659 28.8125 45.9115 28.8125 45.6463V30.6963C28.8125 30.4311 28.7071 30.1767 28.5196 29.9892C28.3321 29.8016 28.0777 29.6963 27.8125 29.6963C27.5473 29.6963 27.2929 29.8016 27.1054 29.9892C26.9179 30.1767 26.8125 30.4311 26.8125 30.6963V45.6963C26.8253 45.9527 26.9363 46.1944 27.1225 46.3713C27.3087 46.5481 27.5557 46.6466 27.8125 46.6463Z" fill="black"/>
      <path d="M37.0703 46.6463C37.3355 46.6463 37.5899 46.5409 37.7774 46.3534C37.965 46.1659 38.0703 45.9115 38.0703 45.6463V30.6963C38.0703 30.4311 37.965 30.1767 37.7774 29.9892C37.5899 29.8016 37.3355 29.6963 37.0703 29.6963C36.8051 29.6963 36.5507 29.8016 36.3632 29.9892C36.1757 30.1767 36.0703 30.4311 36.0703 30.6963V45.6963C36.0832 45.9527 36.1941 46.1944 36.3803 46.3713C36.5665 46.5481 36.8135 46.6466 37.0703 46.6463Z" fill="black"/>
    </svg>
  );
};

export default MdDeleteIcon64;
