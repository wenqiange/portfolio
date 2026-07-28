export default function TypingIndicator() {
  return (
    <article className="flex justify-start animate-slide-up">
      <div className="inline-flex min-w-[76px] items-center gap-1.5 rounded-2xl border border-[#e7dfd3] bg-[#f7f2e9] px-4 py-3 shadow-[0_6px_18px_rgba(36,24,10,0.07)] dark:border-[#38332e] dark:bg-[#2c2723]">
        <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[#82796f] [animation-delay:0ms] dark:bg-[#a59d92]" />
        <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[#82796f] [animation-delay:200ms] dark:bg-[#a59d92]" />
        <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[#82796f] [animation-delay:400ms] dark:bg-[#a59d92]" />
      </div>
    </article>
  )
}
