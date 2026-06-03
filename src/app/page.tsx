'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const faqItems = [
    {
      question: 'Can I use this for my company?',
      answer: 'Yes, absolutely. These templates are open-source licensed. Attribution (Auto Company Ops Kit) is appreciated but not required.'
    },
    {
      question: 'Do I need 14 agents?',
      answer: 'No. You can scale down or up based on your needs. Minimum 3 agents to start: CEO, Critic, Fullstack.'
    },
    {
      question: 'Can I customize the agents?',
      answer: 'Yes. You can modify agent definitions to fit your needs. The important thing is to preserve the operating principles (autonomy, consensus, documentation).'
    },
    {
      question: 'How do I implement this?',
      answer: '3 steps: 1) Import templates into Notion, 2) Customize for your project, 3) Start your first cycle.'
    },
    {
      question: 'Is there a demo?',
      answer: 'Video walkthrough coming soon. Currently available: this README and examples within the templates.'
    },
    {
      question: 'What format are the templates?',
      answer: 'Markdown files that can be imported into Notion. Each template is a separate file for easy customization.'
    }
  ]

  const templates = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Decision Log',
      description: 'Track every company decision with rationale and ownership.',
      features: [
        'Last Updated timestamp',
        'Current Phase tracking',
        'Key Decisions log',
        'Active Projects table',
        'Next Action always defined'
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Agent Workflow Playbook',
      description: '14 AI agents defined. When to use each. 6 standard workflows.',
      features: [
        '14 agent definitions',
        'Core principles per agent',
        'Tool access matrix',
        '6 standard workflows',
        'Quick reference table'
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Operating Principles',
      description: 'Safety guardrails. Decision framework. Communication norms.',
      features: [
        'Mission statement',
        'Safety guardrails defined',
        '7 decision principles',
        'Team architecture',
        'Decision framework'
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Cycle Management',
      description: '5-phase cycles. Consensus protocol. Convergence rules.',
      features: [
        '5 cycle phases defined',
        'Convergence rules',
        'Runtime guardrails',
        'Consensus protocol',
        'Cycle metrics tracking'
      ]
    }
  ]

  const pricingTiers = [
    {
      name: 'Core',
      price: '$29',
      features: ['4 core templates', '14 agent definitions', '6 standard workflows', 'Basic support'],
      featured: false,
      ctaStyle: 'btn-secondary'
    },
    {
      name: 'Pro',
      price: '$49',
      features: [
        'Everything in Core',
        'Notion dashboard templates',
        'Automation examples',
        'Custom agent guide',
        'Priority support'
      ],
      featured: true,
      ctaStyle: 'btn-primary'
    },
    {
      name: 'Enterprise',
      price: '$99',
      features: [
        'Everything in Pro',
        'Custom agent configurations',
        '1-hour consultation',
        'Team onboarding',
        'Lifetime updates'
      ],
      featured: false,
      ctaStyle: 'btn-secondary'
    }
  ]

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHowItWorks = () => {
    document.getElementById('problem-solution')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
        <div className="container flex items-center justify-between">
          <div className="font-semibold text-gray-900 text-lg">
            Auto Company Ops Kit
          </div>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); scrollToPricing(); }}
            className="btn-primary"
          >
            Get Templates
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-4xl">
          <div className="fade-in-up">
            <span className="badge badge-featured mb-6">
              Battle-Tested AI System
            </span>
          </div>

          <h1 className="fade-in-up stagger-1 text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Run Your Company Like an AI
          </h1>

          <p className="fade-in-up stagger-2 text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            4 Notion templates from a fully autonomous AI company. 14 agents. Zero human involvement.
          </p>

          <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToPricing}
              className="btn-primary"
            >
              Get the Templates
            </button>
            <button
              onClick={scrollToHowItWorks}
              className="btn-secondary"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="problem-solution" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Chaos Without System
              </h2>
              <ul className="space-y-4">
                {[
                  'Decisions lost in Slack threads',
                  'No clear decision framework',
                  'Agent roles undefined',
                  'Workflows inconsistent across cycles',
                  'Context rebuilt every week'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="fade-in-up stagger-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Clarity With Auto Company
              </h2>
              <ul className="space-y-4">
                {[
                  'Every decision logged with rationale',
                  'Clear decision principles defined',
                  '14 expert AI agents documented',
                  '6 standard workflows established',
                  'Context preserved across cycles'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Templates. Complete System.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your AI company coherently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template, index) => (
              <div key={index} className={`card fade-in-up stagger-${index % 4}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    {template.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {template.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {template.description}
                </p>
                <ul className="space-y-2">
                  {template.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing. One-Time Payment.
            </h2>
            <p className="text-lg text-gray-600">
              No subscriptions. No SaaS. Lifetime use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`card relative fade-in-up stagger-${index} ${
                  tier.featured ? 'border-2 border-blue-600 shadow-elevation-3' : ''
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 right-6">
                    <span className="badge badge-featured">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://t.me/tolgabrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tier.ctaStyle} text-center block w-full`}
                >
                  Get {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`fade-in-up border-b border-gray-200 ${index === faqItems.length - 1 ? '' : 'pb-4'}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left"
                  aria-expanded={activeFaq === index}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 faq-chevron ${
                      activeFaq === index ? 'rotate' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`faq-content ${activeFaq === index ? 'open' : ''}`}
                >
                  <p className="text-gray-600 pb-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-narrow text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in-up">
            Ready to Run Your Company Like an AI?
          </h2>
          <p className="text-lg text-blue-100 mb-8 fade-in-up stagger-1">
            Get the complete Ops Kit. Start your first autonomous cycle today.
          </p>
          <a
            href="https://t.me/tolgabrk"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in-up stagger-2 inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Telegram @tolgabrk
          </a>
          <p className="mt-4 text-sm text-blue-200 fade-in-up stagger-3">
            Templates delivered via Notion link
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h4 className="font-semibold text-white mb-2">
                Auto Company Ops Kit
              </h4>
              <p className="text-sm">
                Make money legally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">
                Resources
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="https://github.com/tolgabrk/Auto-Company" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tolgabrk/Auto-Company/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Report Issues
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">
                Contact
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="https://t.me/tolgabrk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Telegram @tolgabrk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2026 Auto Company Ops Kit. MIT License.
          </div>
        </div>
      </footer>
    </div>
  )
}
