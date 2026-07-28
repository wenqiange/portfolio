import { useEffect, useMemo, useRef, useState } from "react"
import ChatWindow from "./components/ChatWindow"
import Sidebar from "./components/Sidebar"
import { chatOptions, welcomeData } from "./data/chatData"

function App() {
  const [messages, setMessages] = useState([])
  const [activeId, setActiveId] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768)
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  const chatScrollRef = useRef(null)
  const typingTimeoutRef = useRef(null)
  const streamIntervalRef = useRef(null)

  const optionsById = useMemo(
    () => Object.fromEntries(chatOptions.map((option) => [option.id, option])),
    []
  )

  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }, [messages, isTyping])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true)
      }
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(
    () => () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      if (streamIntervalRef.current) {
        clearInterval(streamIntervalRef.current)
      }
    },
    []
  )

  const resetChat = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current)
    }

    setMessages([])
    setActiveId(null)
    setIsTyping(false)
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }
  }

  const handleOption = (id) => {
    if (isTyping) return

    const selected = optionsById[id]
    if (!selected) return

    setActiveId(id)
    setMessages((prev) => [
      ...prev,
      { id: `user-${crypto.randomUUID()}`, role: "user", content: selected.question },
    ])
    setIsTyping(true)
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }

    typingTimeoutRef.current = setTimeout(() => {
      const assistantId = `assistant-${crypto.randomUUID()}`
      if (typeof selected.answer === "string") {
        const words = selected.answer.split(" ")
        let idx = 0

        setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }])

        streamIntervalRef.current = setInterval(() => {
          idx += 1
          setMessages((prev) =>
            prev.map((message) =>
              message.id === assistantId
                ? { ...message, content: words.slice(0, idx).join(" ") }
                : message
            )
          )

          if (idx >= words.length) {
            clearInterval(streamIntervalRef.current)
            streamIntervalRef.current = null
            setIsTyping(false)
          }
        }, 35)
      } else {
        setMessages((prev) => [
          ...prev,
          { id: assistantId, role: "assistant", content: selected.answer },
        ])
        setIsTyping(false)
      }
    }, 900)
  }

  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#f6f3ee] text-[#2d2925] dark:bg-[#1b1917] dark:text-[#f3ede5] md:grid-cols-[300px_1fr] md:items-stretch">
      <Sidebar
        options={chatOptions}
        activeId={activeId}
        isOpen={isSidebarOpen}
        onSelect={handleOption}
        onReset={resetChat}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        onClose={() => setIsSidebarOpen(false)}
      />

      <button
        type="button"
        aria-label="Cerrar menu"
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-10 bg-black/35 transition md:hidden ${
          isSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <ChatWindow
        messages={messages}
        options={chatOptions}
        activeId={activeId}
        isTyping={isTyping}
        onSelect={handleOption}
        onOpenSidebar={() => setIsSidebarOpen(true)}
        welcomeData={welcomeData}
        scrollRef={chatScrollRef}
      />
    </div>
  )
}

export default App
