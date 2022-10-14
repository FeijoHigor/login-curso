import styled from 'styled-components'

import adcLogo from '../../assets/adc-logo.svg'

const PageTitle = styled.h2`
    color: #53DEC1;
    font-size: 6rem;
    margin-bottom: 0;
    margin-top: 2rem;
    text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);

    @media(max-width: 480px) {
        font-size: 4rem;
    }
`
const StyledHeader = styled.header`
    margin-bottom: 3.3rem;
    display: flex;
    flex-direction: column;
    align-itens: center;
`

function Header(props: any) {
    return (
        <StyledHeader>
            <img src={adcLogo} height={140} alt="logo do além do código" />
            <PageTitle>{props.children}</PageTitle>
        </StyledHeader>
    )
}

export default Header