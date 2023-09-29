import styled from 'styled-components';

interface ContainerProps {
    active: string
}

export const Container = styled.div<ContainerProps>`
    padding: 20px;
    border-radius: 10px;
    background: #321452;
    margin-right: 10px;
    margin-top: 10px;
    border: 2px solid ${props => props.active === 'true' ? '#25cd89' : '#321452'};
    cursor: pointer;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: white;

        div {
            width: 200px;
            p, h2 {
                padding: 0;
                margin: 0;
            }

            h2 {
                font-size: 20px;
            }
        }

    }

    ul {
        display: ${props => props.active === 'true' ? 'block' : 'none'};
        padding: 0;
        list-style: none;
        
        li + li {
            margin-top: 20px;
        }

        li {
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
`

export const Point = styled.div`
    width: 16px;
    height: 16px;
    border: 3px solid #5a2593;
    background-color: #5a2593;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80%;
`

export const Empty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
    }
`