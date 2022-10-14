import styled from 'styled-components'
import emailIcon from '../../assets/email-icon.svg'
import passwordIcon from '../../assets/password-icon.svg'
import nameIcon from '../../assets/name-icon.svg'

const StyledField = styled.div`
    width: 80%;
    height: 8rem;
    background-color: #0E2D3F;
    border-radius: 5px;
    display: flex;
    margin: 0 0 2rem 0;
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.3));

    &:hover {
        background: #0C2533;
        transition: 0.2s;
    }
`

const StyledLabel = styled.label`
    height: 100%;
    display: flex;
    width: 8rem;
    align-items: center;
    justify-content: center;
    margin: 0 1.5rem;
`

const StyledInput = styled.input.attrs({

})`
    background: none;
    border: none;
    font-size: 2.2rem;
    font-weight: 200;
    color: #CBDCEC;
    outline: 0;

    ::placeholder {
        color: #738899;
    }
`

function Input(props: any) {

    return (
        <StyledField>
            <StyledLabel>
                <img 
                    src={props.type == 'name' ? nameIcon : props.type == 'email' ? emailIcon : props.type == 'password' ? passwordIcon : undefined} 
                    alt={`${props.type} icon`}
                    height={'40rem'}
                    width={'40rem'}
                />
            </StyledLabel>
            <StyledInput 
                placeholder={props.type == 'name' ? 'Nome de usuário' : props.type == 'email' ? 'Email' : props.type == 'password' ? 'Senha' : 'oloco bicho'} 
                type={props.type == 'name' ? 'text' : props.type}></StyledInput
            >
        </StyledField>
    )
}

export default Input