import styled from 'styled-components';

export const Container = styled.section`
    background-color: #281041;
    color: white;
    height: 100%;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 1280px;
    height: 100%;
    min-height: 100vh;
    display: flex;
    gap: 10px;
    position: relative;
`;

interface ISidebar {
    mobileActive: boolean
}

export const Sidebar = styled.div<ISidebar>`
    width: 30%;
    border-right: 1px solid #5a2593; 
    padding: 10px;
    background-color: #281041;
    min-height: 100vh;
    transition: margin 400ms ease-in-out;
    
    @media (max-width: 750px) {
        position: absolute;
        margin-left: ${({ mobileActive }) => mobileActive ? '0' : '-750px'};
        width: 90%;
    }
`;

export const Page = styled.div`
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;