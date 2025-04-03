"use client";
import { Button } from "@serendie/ui";
import { Container, VStack } from "@/styled-system/jsx";
import "@/assets/style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Container
      style={{
        width: "100%",
        height: "100vh",
        overflowY: "scroll"
      }}
    >
      <VStack
        style={{
          margin: "0 0 30px 0",
          gap: "16px"
        }}
      >
        <Image
          loader={({ src }) => src}
          src="https://placehold.jp/500x150.png"
          alt=""
          width="500"
          height="500"
          style={{
            width: "80%",
            height: "auto"
          }}
        />
        <Button
          size="medium"
          styleType="filled"
          style={{ width: "80%" }}
          //   onClick={handleClickButton}
        >
          オス
        </Button>
        <Button
          size="medium"
          styleType="outlined"
          style={{ width: "80%" }}
          onClick={() => {
            router.back();
          }}
        >
          戻る
        </Button>
      </VStack>
    </Container>
  );
}
