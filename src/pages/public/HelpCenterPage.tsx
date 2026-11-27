import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { FAQ_ITEMS, OFFICIAL_CONTACT } from '../../services/academyData'

export const HelpCenterPage: React.FC = () => {
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id)

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FAQ_ITEMS
    return FAQ_ITEMS.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title="Help Center" backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        <div className="relative flex items-center">
          <Search
            className="w-4 h-4 text-on-surface-variant absolute left-3 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs (QR pickup, makeup, tuition)..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-lg bg-surface border border-outline text-body-md"
          />
        </div>

        <section className="flex flex-col gap-gutter-sm">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-gutter-md text-left flex items-center justify-between gap-2"
                >
                  <div>
                    <span className="font-body text-label-sm text-secondary block">
                      {faq.category}
                    </span>
                    <span className="font-body text-title-md text-on-surface">{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-on-surface-variant shrink-0" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-gutter-md pb-gutter-md pt-gutter-xs border-t border-outline-variant font-body text-body-sm text-on-surface-variant">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </section>

        <section className="bg-primary-container rounded-xl p-gutter-md border border-outline-variant flex flex-col gap-gutter-xs">
          <h2 className="font-headline text-title-lg text-primary">Still need assistance?</h2>
          <p className="font-body text-body-sm text-on-primary-container">
            Reach our coordinators at {OFFICIAL_CONTACT.email} or {OFFICIAL_CONTACT.phone}.
          </p>
          <Link
            to="/contact"
            className="mt-1 min-h-[44px] inline-flex items-center justify-center rounded-md bg-primary text-on-primary font-body text-label-lg"
          >
            Contact Support
          </Link>
        </section>
      </main>
    </MobileShell>
  )
}
