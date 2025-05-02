import { Button } from "antd";
import { useCallback } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const ThemeToggle = () => {
  const { setThemeMode, themeMode } = useGlobalContext();

  const onToggleTheme = useCallback(() => {
    setThemeMode(themeMode == "dark" ? "default" : "dark");
  }, [setThemeMode, themeMode]);

  return (
    <Button
      onClick={onToggleTheme}
      style={{
        fontWeight: 500,
      }}
    >
      {themeMode == "dark" ? <MoonOutlined /> : <SunOutlined />}
    </Button>
  );
};

export default ThemeToggle;
