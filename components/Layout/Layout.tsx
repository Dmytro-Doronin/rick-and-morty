import {NextPage} from "next";
import {PropsWithChildren} from "react";
import {Header} from "@/components/Header/Header";
import styled from "styled-components";

export const Layout: NextPage<PropsWithChildren> = (props) => {

    const {children} = props

    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

const Container = styled.div`

`