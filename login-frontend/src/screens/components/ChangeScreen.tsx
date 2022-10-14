import styled from 'styled-components'

const StyledDiv = styled.div`
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 0;
    padding-top: 3rem;
`

const StyledText = styled.p`
    font-size: 2rem;    
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
`

const StyledLink = styled.a`
    color: #53DEC1;
    cursor: pointer;
    font-size: 2rem;

    &:hover {
        color: #0F7C66;
        transition: 0.2s;
    }
`

function ChangeScreen(props: any) {
    return (
        <StyledDiv>
            <StyledText>{props.screen == 'login' ? "Já tem uma conta?" : "Ainda não tem uma conta?"}</StyledText>
            <StyledLink onClick={() => props.handleClick()}>{props.screen == 'login' ? "Efetuar login!" : "Criar agora!"}</StyledLink>
        </StyledDiv>
    )
}

export default ChangeScreen