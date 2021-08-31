import { Spin } from "antd";

export const Spinner = () => {
  return (
    <div className="spinner">
      <Spin size="large" />

      <style jsx>{`
        .spinner {
           width: 100%;
           height: 100%;
        }
        }
      `}</style>
    </div>
  );
};
