import styled from 'styled-components'

const ButtonStyled = styled.button`
    margin-top: 3rem;
    background:  linear-gradient(90deg, #52DEC4 0%, #37BFBF 97.29%);
    border-radius: 5px;
    width: 80%;
    height: 8rem;
    border: none;
    color: rgba(255, 255, 255, 0.9);
    font-family: poppins;
    font-size: 3rem;
    cursor: pointer;
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.3));

    &:hover {
        transition: 0.2s;
        color: rgba(255, 255, 255, 0.7);
        opacity: 0.8;
    }
`

function Button(props: any) {
    return (
        <ButtonStyled onClick={props.handleClick}>
            {props.children}
        </ButtonStyled>
    )
}

export default Button