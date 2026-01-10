import EventCaptureSection from "./components/EventCaptureSection";
import ThrottleOptions from "./components/ThrottleOptions";

export const metadata = {
  title: "Event throttling",
  description:
    "A example of event throttling in react using event for mouse pointer",
};

const EventThrottle = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-lg font-bold my-2">
          Event Throttling via mouse event
        </h1>
        <p className="text-sm">
          In this example , we will be demonstrating the event throttle by mouse
          move pointer <br /> and throttling that with custom duration and full
          control of enabling/disabling the throttle functionality
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 my-4 border-2 w-3/4 md:w-2/3 mx-auto">
      <ThrottleOptions />
      <EventCaptureSection />
      </div>
    </div>
  );
};

export default EventThrottle;
