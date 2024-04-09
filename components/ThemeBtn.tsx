"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import Button from "./button/Button";

const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), []);

  if (!mount) return null;
  return (
    <button
      className="icon-style"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Button leftIcon={<HiMoon className="h-6 w-6" />} />
      ) : (
        <Button leftIcon={<HiSun className="h-6 w-6" />} />
      )}
    </button>
  );
};

export default ThemeBtn;
