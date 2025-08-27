
"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null;
  }

  const isChecked = theme === 'dark';

  const handleToggle = () => {
    setTheme(isChecked ? 'light' : 'dark')
  }

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  )
}
