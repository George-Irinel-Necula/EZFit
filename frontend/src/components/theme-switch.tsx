import { FC, useState, useEffect } from "react";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";
import { Switch, SwitchIcon } from "@heroui/react";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    const initialTheme = savedTheme || "dark";

    setTheme(initialTheme);
    root.classList.toggle("dark", initialTheme === "dark");
    setIsMounted(true);
  }, []);

  const toggleTheme = (checked: boolean) => {
    const newTheme: "light" | "dark" = checked ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Switch
      onChange={toggleTheme}
      defaultSelected={theme=="dark"?true:false}
    >
      <Switch.Control>
        <Switch.Thumb >
          <SwitchIcon>
            {theme=="dark" ? <IconMoonFilled size={12} /> : <IconSunFilled size={12} />}
          </SwitchIcon>
        </Switch.Thumb>
      </Switch.Control>

      <Switch.Content>
        
      </Switch.Content>
    </Switch>
  );
};