import { Button, SxProps, Theme } from "@mui/material";

interface SignInButtonProps {
  buttonText: string; // ボタンのテキストをpropsとして受け取る
  sx?: SxProps<Theme>; // sx プロパティを追加
}

const SignInButton = ({ buttonText, sx }: SignInButtonProps) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        backgroundColor: "#776454",
        ...sx,
      }}
    >
      {buttonText}
    </Button>
  );
};

export default SignInButton;
