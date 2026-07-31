import { useState } from 'react';

const useConfigs = () => {
  const [config] = useState({
        videoFiles:"https://api.antares.ninja/videos/files",
        mkvVideos:"https://api.antares.ninja/videos/mkv/",
        musicFiles:"https://api.antares.ninja/music/files",
        videos:"https://api.antares.ninja/videos/mp4/",
        music:"https://api.antares.ninja/music/",
        book:"https://api.antares.ninja/book"
  });

  return config;
};

export default useConfigs;