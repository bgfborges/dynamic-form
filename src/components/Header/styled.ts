import styled from 'styled-components';

export const Container = styled.header`
    padding: 20px;
    border-bottom: 1px solid #5a2593;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 28px;
    }

    p {
        font-size: 14px;
        color: #b8b8d4;
    }

    button {
        color: white;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        background-color: #25cd89;
        display: none;
    }

    @media (max-width: 750px) {
        button {
            display: block;
        }
    }
`;