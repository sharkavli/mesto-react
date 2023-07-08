import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfileLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={300}
    viewBox="0 0 1000 300"
    backgroundColor="#a3a3a3"
    foregroundColor="#000000"
    {...props}
  >
    <rect x="349" y="69" rx="3" ry="3" width="186" height="35" />
    <rect x="350" y="125" rx="3" ry="3" width="189" height="18" />
    <circle cx="259" cy="109" r="63" />
  </ContentLoader>
);

export default ProfileLoader;
