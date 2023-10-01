import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdOutlineContentCopy } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { selector } from '@/redux';

import { handleCopyID } from './handle';

export const RenderID = () => {
  const { currentUserID } = useSelector(selector.user);

  const [checkcopyid, setCheckCopyID] = useState(false);
  return (
    <h2 className="absolute z-30 flex items-center gap-2 pl-5 pt-5">
      ID: {currentUserID}{' '}
      {checkcopyid ? (
        <BsCheckCircleFill className="text-sm" />
      ) : (
        <MdOutlineContentCopy
          className="cursor-pointer"
          onClick={() => handleCopyID(currentUserID, setCheckCopyID)}
        />
      )}
    </h2>
  );
};
