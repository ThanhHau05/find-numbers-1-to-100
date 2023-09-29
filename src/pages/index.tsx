import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ContainerHome } from '@/components/page/home';
import { Loading } from '@/components/page/home/base/loading';
import { selector } from '@/redux';

const Home = () => {
  const { currentUserInformation } = useSelector(selector.user);

  const [number, setNumber] = useState({ value: 0, color: 'text-black' });
  const [showloading, setShowLoading] = useState(true);

  useEffect(() => {
    if (currentUserInformation.id) {
      setShowLoading(false);
    }
  }, [currentUserInformation.id]);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-300">
      <div className="relative h-full w-full bg-slate-50 sm:w-400">
        {!currentUserInformation.id && showloading ? (
          <Loading
            color={number.color}
            value={number.value}
            setNumber={setNumber}
            setShowLoading={setShowLoading}
          />
        ) : null}
        <ContainerHome />
      </div>
    </div>
  );
};

export default Home;
