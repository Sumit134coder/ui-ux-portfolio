"use client";

import React from "react";
import styles from "../styles.module.css";

const ThrottleOptions = () => {
  const handleThrottleActive = (e) => {
    console.log(e?.target?.checked);
  };

  const handleDuration = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h5 className="text-center">Throttle Actions</h5>
      <div className="flex items-center gap-4">
  <label className="text-sm">Enable / Disable Throttling</label>

  <label className="relative inline-flex cursor-pointer items-center">
    <input
      type="checkbox"
      className="sr-only peer"
      onChange={handleThrottleActive}
    />

    <div
      className="
        relative
        w-12 h-7 rounded-full
        bg-gray-300
        peer-checked:bg-emerald-500
        transition-colors duration-300

        after:content-['']
        after:absolute
        after:top-0.5 after:left-0.5
        after:h-6 after:w-6
        after:rounded-full after:bg-white
        after:shadow-md
        after:transition-transform after:duration-300
        peer-checked:after:translate-x-5
      "
    />
  </label>
</div>

      <div>
        <label className="mb-2 mt-6" htmlFor="duration">
          Throttle Duration:
        </label>
        <input
          id="duration"
          name="throttleDuration"
          type="range"
          onChange={handleDuration}
        />
      </div>
    </div>
  );
};

export default ThrottleOptions;
