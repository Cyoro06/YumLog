import { BrowserRouter, Routes, Route } from "react-router-dom";

// ページ
import Login from "./pages/Login";
import SignUpForm from "./pages/SignUpForm";

// mui
import { CssBaseline } from "@mui/material"; //全体のスタイル設定
{
  /*
  createTheme: Material-UIのカスタムテーマを作成するための関数
  ThemeProvider: テーマをアプリケーション全体に提供するコンポーネント
*/
}
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFFCF3 ",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* ログイン画面（初回起動画面） */}
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          {/* 新規登録画面 */}
          <Route path="SignUp" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
