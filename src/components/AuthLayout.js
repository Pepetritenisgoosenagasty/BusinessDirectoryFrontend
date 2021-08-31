const AuthLayout = ({ children }) => {
  return (
    <div>
      {children}

      <style global jsx>{`
        body {
          font-family: "Montserrat", sans-serif;
            overflow: hidden;
          background-color: #D3D2C7; 
          background-image: url(/assets/symphony.png);
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;
