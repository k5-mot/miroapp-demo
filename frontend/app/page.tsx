"use client";
import { Button } from "@serendie/ui";
import Image from "next/image";
import { Container, VStack } from "@/styled-system/jsx";
// import GetStickyNotes from "@/utils/GetStickeyNotes";
// import { useState } from "react";
import "@/assets/style.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  //   const [notes, setNotes] = useState<string[]>([]);
  //   const handleClickButton = async () => {
  //     const newNotes = await GetStickyNotes();
  //     for (const newNote of newNotes) {
  //       console.log(newNote);
  //     }
  //     console.log(newNotes);

  //     setNotes(newNotes);
  //   };

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
          onClick={() => router.push("/feat_a")}
        >
          機能A
        </Button>
        <Button
          size="medium"
          styleType="filled"
          style={{ width: "80%" }}
          //   onClick={handleClickButton}
        >
          機能B
        </Button>
        <Button
          size="medium"
          styleType="filled"
          style={{ width: "80%" }}
          //   onClick={handleClickButton}
        >
          機能C
        </Button>
      </VStack>
    </Container>
  );
}
