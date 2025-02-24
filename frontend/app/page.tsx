"use client";
import {
  DropdownMenu,
  Divider,
  Button,
  TextField,
  SvgIcon,
  ModalDialog
} from "@serendie/ui";
import Image from "next/image";
import { Container, VStack } from "@/styled-system/jsx";
// import congratulations from '@/assets/congratulations.png';
// import MiroSample from '@/components/MiroSample';
import GetStickyNotes from "@/utils/GetStickeyNotes";
import { useState } from "react";
import "@/assets/style.css";
import { TruncateString } from "@/utils/StringUtils";

export default function Page() {
  const [notes, setNotes] = useState<string[]>([]);

  const handleClickButton = async () => {
    const newNotes = await GetStickyNotes();
    for (const newNote of newNotes) {
      console.log(newNote);
    }
    console.log(newNotes);

    setNotes(newNotes);
  };

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
          onClick={handleClickButton}
        >
          機能A
        </Button>

        {/* <ModalDialog
          cancelButtonLabel="Close"
          onButtonClick={function zu() {}}
          onOpenChange={function zu() {}}
          submitButtonLabel="Button"
          title="Dialog Title"
          isOpen={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </ModalDialog> */}

        <DropdownMenu
          title="付箋nnnnnnnnnnnn"
          items={notes.map((note, i) => ({
            icon: <SvgIcon icon="check" size="2em" />,
            label: TruncateString(note, 20),
            value: `note-${i}`
          }))}
          disabled={notes.length === 0}
        />
        <Button size="medium" styleType="filled" style={{ width: "80%" }}>
          機能B
        </Button>
        <Button size="medium" styleType="filled" style={{ width: "80%" }}>
          機能C
        </Button>

        <TextField
          label="メールアドレス"
          placeholder="email"
          style={{ padding: "10px auto" }}
        />
        <TextField label="パスワード" placeholder="password" />
        <Divider />
        <Button
          size="medium"
          styleType="filled"
          style={{ width: "80%" }}
          leftIcon={<SvgIcon icon="chevron_left" size="2em" />}
        >
          戻る
        </Button>
      </VStack>
    </Container>
  );
}
