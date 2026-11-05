import React from 'react';

interface PolaroidBannerProps {
  onExploreCollection?: () => void;
}

export const PolaroidBanner: React.FC<PolaroidBannerProps> = ({ onExploreCollection }) => {
  return (
    <section
      onClick={onExploreCollection}
      className="relative w-full overflow-hidden cursor-pointer block select-none bg-[#340b13]"
    >
      <img
        src="/assets/Gemini_Generated_Image_qsdg8kqsdg8kqsdg (1).jpg"
        alt="NŌRA Ritual Sets and Formulations Banner"
        className="w-full h-auto block object-cover"
      />
    </section>
  );
};
