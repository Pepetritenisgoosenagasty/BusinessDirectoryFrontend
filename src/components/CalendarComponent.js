import { Calendar } from "antd";

const CalendarComponent = () => {
    function onPanelChange(value, mode) {
        console.log(value, mode);
      }
      
  return (
    <div className="site-calendar-demo-card">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarComponent;
