import styled from 'styled-components'

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
`

const StyledText = styled.span`
    font-size: 1.8rem;
    color: #f23030;
    text-align: center;
`

function Errors(props: any) {
    return (
        props.errors.length > 0 ? (
            <StyledSection>
                {props.errors.map((e: any, i: any) => 
                    (
                        <StyledText key={i}>{e}</StyledText>
                    )
                )}
            </StyledSection>  
        ) :  (<></>)
    )
}

export default Errors