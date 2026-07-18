"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-transparent border border-transparent" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:scale-110 transition-all active:scale-95 shadow-sm"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 transition-all" />
      ) : (
        <Sun className="w-5 h-5 transition-all" />
      )}
    </button>
  )
}
