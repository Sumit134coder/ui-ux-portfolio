"use client";

import useEventThrottle from "@/hooks/useEventThrottle";

const EventCaptureSection = () => {
  const {
    data: { position },
    methods: { handleMouseTrack },
  } = useEventThrottle();

  return (
    <div className="w-full m-3">
      EventCaptureSection
      <div
        className="border-2 rounded-lg h-64 w-auto flex justify-center items-center"
        onMouseMove={handleMouseTrack}
      />
      <div>
        <div className="flex justify-between items-center">
          <h5 className="font-bold">Mouse Coordinates</h5>
          <p>
            X : {position.x} , Y : {position.y}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCaptureSection;
