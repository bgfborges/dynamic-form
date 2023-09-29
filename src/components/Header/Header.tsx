import { useDispatch } from 'react-redux';
import { TOGGLE_MODAL_SIDEBAR } from '../../constants/formConstants';
import { Container } from './styled';

const Header = () => {
    const dispatch = useDispatch()

    const handleOpenModalSidebar = () => {
        dispatch({
            type: TOGGLE_MODAL_SIDEBAR,
        })
    }

    return (
        <Container>
            <div>
                <h1>Sierra Interactive</h1>
                <p>Get in touch now.</p>
            </div>

            <button onClick={handleOpenModalSidebar}>
                ANSWERS
            </button>
        </Container>
    )
}

export { Header };