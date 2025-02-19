"use client";
import { Accordion, Divider, Button, TextField } from "@serendie/ui";
import Image from "next/image";
import { Container, VStack } from "../styled-system/jsx";
import { SerendieSymbol } from "@serendie/symbols";
import congratulations from '../assets/congratulations.png';
// import MiroSample from '../components/MiroSample';
import '../assets/style.css';


export default function Page() {

    return (

        <Container style={{
            width: "100%",
            height: "100vh",
            overflowY: "scroll",
        }}>
            <VStack style={{
                margin: '0 0 30px 0',
                gap: '16px',
            }}>
                <Image
                    src="https://placehold.jp/500x150.png"
                    alt="" width="500" height="500"
                    style={{
                        width: '80%',
                        height: 'auto',
                    }} />
                <Button size="medium" styleType="filled"
                    style={{ width: '80%' }}>
                    機能A
                </Button>
                <Button size="medium" styleType="filled"
                    style={{ width: '80%' }}>
                    機能B
                </Button>
                <Button size="medium" styleType="filled"
                    style={{ width: '80%' }}>
                    機能C
                </Button>
                {/* <Button size="medium" styleType="filled"
                    style={{ width: '80%' }}>
                    機能D
                </Button>
                <Button size="medium" styleType="filled"
                    style={{ width: '80%' }}>
                    機能E
                </Button>
                <Button size="medium" styleType="filled"
                    style={{ width: '80%' }}>
                    機能F
                </Button> */}
                <TextField label="メールアドレス" placeholder="email" style={{ padding: '10px auto' }} />
                <TextField label="パスワード" placeholder="password" />
                <Divider />
                <Button size="medium" styleType="filled"
                    style={{ width: '80%' }}>
                    戻る
                </Button>
            </VStack>
        </Container >

    );
}
