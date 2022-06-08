const AppLayout = ({ children }) => {
  return (
    <div>
    <div>
  {/* <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } /> */}
  <main id="page-wrap">
   {children}
  </main>
</div>
      
      <style global jsx>{`
        body {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default AppLayout
