import MessageBubble from "./MessageBubble"
import SuggestionChips from "./SuggestionChips"
import TypingIndicator from "./TypingIndicator"

export default function ChatWindow({
  messages,
  options,
  activeId,
  isTyping,
  onSelect,
  onOpenSidebar,
  welcomeData,
  scrollRef,
}) {
  return (
    <main className="grid min-w-0 grid-rows-[auto_1fr_auto] md:min-h-screen">
      <header className="sticky top-0 z-[5] flex h-16 items-center gap-3 border-b border-[#e7dfd3] bg-[#fcfaf6]/75 px-4 backdrop-blur-sm dark:border-[#38332e] dark:bg-[#22201d]/75">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#e7dfd3] bg-[#f5f0e8] transition hover:bg-[#eee5d8] dark:border-[#38332e] dark:bg-[#2d2823] dark:hover:bg-[#3a342e] md:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>
        <h1 className="m-0 text-[0.95rem] font-semibold tracking-[0.01em]">Chat portfolio</h1>
      </header>

      <section ref={scrollRef} className="flex flex-col gap-3 px-4 py-8 md:px-[max(6vw,1rem)] lg:px-[max(10vw,2rem)]">
        {messages.length === 0 ? (
          <section className="mt-[8vh] max-w-[700px] animate-slide-up">
            <h2 className="m-0 text-[clamp(1.45rem,2.6vw,1.95rem)] font-semibold leading-tight tracking-[-0.01em]">{welcomeData.title}</h2>
            <p className="mt-2.5 max-w-[560px] text-[1.02rem] leading-7 text-[#82796f] dark:text-[#a59d92]">{welcomeData.subtitle}</p>
          </section>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message.id} role={message.role} content={message.content} />
          ))
        )}

        {isTyping && <TypingIndicator />}

        <SuggestionChips
          options={options}
          activeId={activeId}
          onSelect={onSelect}
          disabled={isTyping}
        />
      </section>

      <footer className="sticky bottom-0 border-t border-[#e7dfd3] bg-[#fcfaf6]/92 p-4 backdrop-blur-sm dark:border-[#38332e] dark:bg-[#22201d]/92">
        <input
          type="text"
          disabled
          placeholder="Elige una opcion arriba..."
          className="w-full rounded-2xl border border-[#e7dfd3] bg-[#fcfaf6] px-4 py-3 text-sm text-[#82796f] outline-none dark:border-[#38332e] dark:bg-[#22201d] dark:text-[#a59d92]"
          aria-label="Input deshabilitado"
        />
      </footer>
    </main>
  )
}
