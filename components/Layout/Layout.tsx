import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import {Header} from "@/components/Header/Header";
import styled from "styled-components";

export const Layout: NextPage<PropsWithChildren> = (props) => {

    const {children} = props

    return (
        <Container>
            <Header/>
            {children}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`
const Main = styled.div`
    width: 100%;
    padding-bottom: 10px;
    overflow: hidden;
`
export function getLayout (page: ReactElement) {
    return <Layout>{page}</Layout>
}