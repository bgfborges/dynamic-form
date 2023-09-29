import { get } from 'lodash'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { Container, Area, Sidebar, Page } from './styled'

interface ISection {
    sidebar: ReactNode
    page: ReactNode
}

export const Section = ({ sidebar, page }: ISection) => {
    const mobileActive = useSelector((state) => get(state, 'formR.mobileMenuOpened')) as unknown as boolean

    return (
        <Container>
            <Header />

            <Area>
                <Sidebar mobileActive={mobileActive}>
                    {sidebar}
                </Sidebar>

                <Page>
                    {page}
                </Page>
            </Area>
        </Container>
    )
}