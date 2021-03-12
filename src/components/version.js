import React from 'react';
import metadata from '../../version.json'

function Version() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', marginTop: '7vh' }} >
      <div style={{ display: 'flex', lineHeight: '20px' }}>
        adv.rodneyrinaldi.com
      </div>
      <div style={{ display: 'flex', lineHeight: '20px' }}>
        {`version ${metadata.buildMajor}.
        ${metadata.buildMinor}.
        ${metadata.buildRevision} 
        ${metadata.buildTag}`}
      </div>
    </div>
  );
}
export default Version;