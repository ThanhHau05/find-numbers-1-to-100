import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Loading } from '@/components/base/loading';
import { Images } from '@/components/images';
import { ContainerHome, RenderID } from '@/components/page/home';
import { ShowOptionMode } from '@/components/page/home/ShowOptionMode';
import { PlayGame } from '@/components/page/play';
import { MainContext } from '@/context/main-context';
import { selector } from '@/redux';

const Home = () => {
  const { currentUserID } = useSelector(selector.user);

  const { currentModeData } = useSelector(selector.data);

  const { valueshowmode } = useContext(MainContext);

  const [number, setNumber] = useState({ value: 0, color: 'text-black' });
  const [showloading, setShowLoading] = useState(true);

  useEffect(() => {
    if (currentUserID) {
      setShowLoading(false);
    }
  }, [currentUserID]);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-300">
      <div className="relative h-full w-full bg-slate-50 sm:w-400">
        {!currentUserID && showloading ? (
          <Loading
            color={number.color}
            value={number.value}
            setNumber={setNumber}
            setShowLoading={setShowLoading}
          />
        ) : null}
        {currentModeData && currentModeData.mode ? (
          <PlayGame data={currentModeData} />
        ) : (
          <>
            {valueshowmode ? <ShowOptionMode /> : null}
            <RenderID />
            <ContainerHome />
          </>
        )}
        <img
          src={Images.PaperBackground.src}
          alt=""
          className="absolute h-full w-full"
        />
      </div>
    </div>
  );
};

export default Home;
