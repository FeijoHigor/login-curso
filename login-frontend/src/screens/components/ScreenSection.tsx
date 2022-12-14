import styled from 'styled-components'

const ScreenSection = styled.div`
    background: #1E4861;
    width: 550px;
    margin 4rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.5rem 0;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.49);

    @media(max-width: 700px) {
        width: 90%;
    }
`

export default ScreenSection