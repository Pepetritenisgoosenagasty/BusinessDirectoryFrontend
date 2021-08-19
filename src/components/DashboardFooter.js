import styled from 'styled-components'

const Footer = styled.footer`
background: #FFFFFF;
box-shadow: 0px 3px 6px #E4E9F3CE;
position: absolute;
left: 80px;
// bottom: 0;
width: 100vw;
height: 50px;

p{
  color: #646464D6;
  padding: 17px 0 17px 50px;
  font-size: .6rem;
  font-weight: 600;
}
`

// Dashboard Footer
export const DashboardFooter = () => {


    return(
      <>
        <Footer>
          <p>Business Directory</p>
        </Footer>
      </>
    )
  }