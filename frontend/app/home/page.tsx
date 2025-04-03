"use client";
import Image from "next/image";
import { Container, VStack, Box } from "@/styled-system/jsx";
import "@/assets/style.css";

export default function Page() {
  return (
    <Container
      style={{
        width: "100%",
        height: "100vh",
        overflowY: "scroll",
        padding: "2rem"
      }}
    >
      <VStack style={{ gap: "16px", alignContent: "center" }}>
        <Box>
          <h1>Miroアプリへようこそ</h1>
          <p>オンラインホワイトボードで、アイデアを自由に共有しましょう</p>
        </Box>

        <Box style={{ display: "flex", gap: "16px" }}>
          <Image
            src="https://placehold.jp/600x400.png"
            alt="Miroアプリのデモ画像"
            width={600}
            height={400}
            style={{ borderRadius: "8px" }}
          />

          <VStack style={{ alignItems: "flex-start", gap: "16px" }}>
            <Box>
              <h4>✨ 直感的な操作</h4>
              <p>ドラッグ＆ドロップで簡単に付箋を作成・移動できます</p>
            </Box>

            <Box>
              <h4>🤝 リアルタイム共有</h4>
              <p>チームメンバーと同時に編集が可能です</p>
            </Box>

            <Box>
              <h4>💾 自動保存</h4>
              <p>作業内容は自動的に保存されるので安心です</p>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <h1>Miroアプリへようこそ</h1>
          <p>オンラインホワイトボードで、アイデアを自由に共有しましょう</p>
        </Box>
        <Box textAlign="center">
          <h2>Miroアプリへようこそ</h2>
          <p>オンラインホワイトボードで、アイデアを自由に共有しましょう</p>
        </Box>
        <Box textAlign="center">
          <h3>Miroアプリへようこそ</h3>
          <p>オンラインホワイトボードで、アイデアを自由に共有しましょう</p>
        </Box>
        <Box textAlign="center">
          <h4>Miroアプリへようこそ</h4>
          <p>オンラインホワイトボードで、アイデアを自由に共有しましょう</p>
        </Box>
        <Box textAlign="center">
          <h5>Miroアプリへようこそ</h5>
          <p>オンラインホワイトボードで、アイデアを自由に共有しましょう</p>
        </Box>
        <Box textAlign="center">
          <h6>Miroアプリへようこそ</h6>
          <p>オンラインホワイトボードで、アイデアを自由に共有しましょう</p>
        </Box>
      </VStack>
    </Container>
  );
}
