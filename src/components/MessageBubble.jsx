function LinkButton({ href, label, icon = "↗" }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-2 rounded-full border border-[#decfbc] bg-[#fcf7ef] px-3 py-1.5 text-sm font-medium text-[#7b4d23] transition hover:bg-[#f3e8d8] dark:border-[#4a4036] dark:bg-[#342d27] dark:text-[#f4cfab] dark:hover:bg-[#403730]"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  )
}

function SectionTitle({ icon, children }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-[0.95rem] font-semibold text-[#3d342b] dark:text-[#f2e7db]">
      <span className="text-base">{icon}</span>
      <span>{children}</span>
    </div>
  )
}

function RichAssistantContent({ content }) {
  if (typeof content === "string") {
    return <p>{content}</p>
  }

  switch (content.type) {
    case "profile":
      return (
        <div className="space-y-4">
          <p className="text-[1rem] leading-7 text-[#564c43] dark:text-[#d8cec4]">{content.intro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {content.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#eadfce] bg-[#fcf8f2] p-4 dark:border-[#433b33] dark:bg-[#332d28]"
              >
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <p className="text-[0.98rem] leading-7 text-[#5f554c] dark:text-[#d5cbc1]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case "projects":
      return (
        <div className="space-y-4">
          <p className="text-[1rem] leading-7 text-[#564c43] dark:text-[#d8cec4]">{content.intro}</p>
          <div className="grid gap-4 xl:grid-cols-2">
            {content.projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-[#eadfce] bg-[#fcf8f2] p-4 dark:border-[#433b33] dark:bg-[#332d28]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="m-0 flex items-center gap-2 text-[1rem] font-semibold">
                      <span>{project.icon}</span>
                      <span>{project.name}</span>
                    </h3>
                    <p className="mt-2 text-[0.98rem] leading-7 text-[#5f554c] dark:text-[#d5cbc1]">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#e2d5c5] bg-[#f6eee2] px-2.5 py-1 text-xs font-medium text-[#69584a] dark:border-[#4a4036] dark:bg-[#3a332d] dark:text-[#e3d3c4]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.experience?.length ? (
                  <ul className="mt-4 grid gap-2 pl-5 text-[0.96rem] leading-6 text-[#5f554c] dark:text-[#d5cbc1] 2xl:grid-cols-2">
                    {project.experience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <LinkButton key={link.url} href={link.url} label={link.label} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      )

    case "timeline":
      return (
        <div className="space-y-4">
          <p className="text-[1rem] leading-7 text-[#564c43] dark:text-[#d8cec4]">{content.intro}</p>
          <div className="space-y-3">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#eadfce] bg-[#fcf8f2] p-4 dark:border-[#433b33] dark:bg-[#332d28]"
              >
                <SectionTitle icon={item.icon}>{item.title}</SectionTitle>
                <ul className="space-y-2 pl-5 text-[0.96rem] leading-6 text-[#5f554c] dark:text-[#d5cbc1]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      )

    case "skills":
      return (
        <div className="space-y-5">
          <p className="text-[1rem] leading-7 text-[#564c43] dark:text-[#d8cec4]">{content.intro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {content.groups.map((group) => (
              <section
                key={group.title}
                className="rounded-2xl border border-[#eadfce] bg-[#fcf8f2] p-4 dark:border-[#433b33] dark:bg-[#332d28]"
              >
                <SectionTitle icon={group.icon}>{group.title}</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#e2d5c5] bg-[#f6eee2] px-2.5 py-1 text-xs font-medium text-[#69584a] dark:border-[#4a4036] dark:bg-[#3a332d] dark:text-[#e3d3c4]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="rounded-2xl border border-[#eadfce] bg-[#fcf8f2] p-4 dark:border-[#433b33] dark:bg-[#332d28]">
            <SectionTitle icon="✨">Core skills</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {content.core.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dcc8b0] bg-[#f1e3cd] px-3 py-1.5 text-sm font-medium text-[#6d5030] dark:border-[#54453a] dark:bg-[#43372d] dark:text-[#f0d5b5]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      )

    case "contact":
      return (
        <div className="space-y-4">
          <p className="text-[1rem] leading-7 text-[#564c43] dark:text-[#d8cec4]">{content.intro}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {content.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="rounded-2xl border border-[#eadfce] bg-[#fcf8f2] p-4 transition hover:bg-[#f7efe2] dark:border-[#433b33] dark:bg-[#332d28] dark:hover:bg-[#3a332d]"
              >
                <div className="mb-2 text-2xl">{link.icon}</div>
                <div className="text-sm font-semibold">{link.label}</div>
                <div className="mt-2 text-sm leading-6 text-[#6a6057] dark:text-[#cfc4b9]">
                  {link.url.replace("mailto:", "")}
                </div>
              </a>
            ))}
          </div>
        </div>
      )

    default:
      return <p>{content.intro ?? ""}</p>
  }
}

export default function MessageBubble({ role, content }) {
  const isUser = role === "user"

  return (
    <article className={`flex animate-slide-up ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[92%] rounded-2xl border px-4 py-3 leading-7 shadow-[0_6px_18px_rgba(36,24,10,0.07)] ${
          isUser
            ? "border-[#d3e4f0] bg-[#dceef9] text-[#2d3c47] md:max-w-[760px] dark:border-[#304a5f] dark:bg-[#27445b] dark:text-[#e7f4ff]"
            : "w-full border-[#e7dfd3] bg-[#f7f2e9] md:max-w-[1100px] dark:border-[#38332e] dark:bg-[#2c2723]"
        }`}
      >
        {isUser ? (
          <p>{content}</p>
        ) : (
          <RichAssistantContent content={content} />
        )}
      </div>
    </article>
  )
}
