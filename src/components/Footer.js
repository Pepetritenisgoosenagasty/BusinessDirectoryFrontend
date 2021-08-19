import styled, { css } from 'styled-components'

const Wrapper = styled.footer`
text-align: center;
background: #004ba8;
color: #fff;
font-size: .7rem;
padding: 20px;
// box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
`

const Footer = () => {
    return (
        <Wrapper>
            <span>&copy; Copyright { new Date().getFullYear() } Business Directory. All rights reserved.</span>
        </Wrapper>
    )
}

export default Footer
