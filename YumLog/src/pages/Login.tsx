import { Box, Container, TextField, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import logo from "../assets/IMG_0111.png";
import SignInButton from "../components/common/SignInButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // パスワードの目のマーク
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: ログイン処理の実装
    console.log("Email:", email, "Password:", password);
  };

  // パスワードの目のマーク
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    const cursorPosition = passwordRef.current?.selectionStart ?? 0; //undefined の場合は初期位置
    setTimeout(() => {
      passwordRef.current?.setSelectionRange(cursorPosition, cursorPosition);
    }, 0);
  };

  // パスワードの目のマーク
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        position: "absolute", // 絶対位置指定
        top: "50%", // 上から50%の位置
        left: "50%", // 左から50%の位置
        transform: "translate(-50%, -50%)", // 要素自体の中心を中央に
        textAlign: "center",
        padding: 0,
      }}
    >
      {/* 白枠Box */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          border: "1px solid #ccc", //枠線
          backgroundColor: "white", // 背景色
        }}
      >
        {/* 中の要素のBox */}
        <Box
          sx={{
            my: 10, // 上下のマージン（margin-top と margin-bottom）
            mx: 3, // 左右のマージン（margin-left と margin-right）
          }}
        >
          {/* ロゴ画像 */}
          <img
            src={logo}
            alt="YumLog"
            style={{
              marginBottom: "16px",
              height: "100px", // 必要に応じてサイズ調整してください
            }}
          />

          <TextField
            margin="dense" //上下のマージン：8px
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                padding: "8px 14px", // さらにコンパクトに
              },
              "& .MuiInputLabel-root": {
                // ラベルの位置調整
                transform: "translate(14px, 8px) scale(1)",
              },
              "& .MuiInputLabel-asterisk": {
                // アスタリスクを非表示
                display: "none",
              },
              "& .MuiInputLabel-shrink": {
                // フォーカス時のラベル位置
                transform: "translate(14px, -9px) scale(0.75)",
              },
            }}
          />

          <TextField
            margin="dense"
            required
            fullWidth
            name="password"
            label="パスワード"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputRef={passwordRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="パスワードの表示切り替え"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-input": {
                padding: "8px 14px",
              },
              "& .MuiInputLabel-root": {
                // ラベルの位置調整
                transform: "translate(14px, 8px) scale(1)",
                "& .MuiInputLabel-asterisk": {
                  // アスタリスクを非表示
                  display: "none",
                },
              },
              "& .MuiInputLabel-shrink": {
                transform: "translate(14px, -9px) scale(0.75)",
              },
            }}
          />

          <SignInButton
            buttonText="ログイン"
            sx={{
              mt: 3,
              mb: 2,
            }}
          />

          {/* 文言横並びのためのBox */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // 横並びに変更
              alignItems: "center", // 縦方向の中央揃え
              justifyContent: "center", // 横方向の中央揃え
            }}
          >
            <Typography variant="body2">初めての方は</Typography>
            <Typography
              variant="body2"
              component="a" // aタグとしてレンダリング
              href="/SignUp" // リンク先のパス
              sx={{
                cursor: "pointer",
                textDecoration: "none", // 下線を削除
                color: "primary.main", // プライマリカラー
                "&:hover": {
                  color: "primary.main", // ホバー時も同じ色を維持
                },
              }}
            >
              こちら
            </Typography>
          </Box>

          <SignInButton
            buttonText="Googleでログイン"
            sx={{
              mt: 5,
              mb: 2,
              textTransform: "none", // 大文字化を防ぐ
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
