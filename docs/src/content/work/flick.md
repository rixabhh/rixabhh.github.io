---
title: "Flick"
company: "Solo Build"
role: "Solo builder - product + engineering"
timeline: "2025"
status: "Shipped v1.0.0"
summary: "A system-level AI writing assistant for people who think faster than they type."
tags: ["AI Desktop Tool","Solo Build","Shipped"]
---

## The Job to Be Done

When I am writing a message, email, or document mid-thought, I want to
transform my draft text in-place using AI, so I can communicate more
clearly without breaking my flow to switch applications.
*(User: Knowledge worker - especially non-native English speakers
who code-switch between languages)*

---

## Problem

Every knowledge worker hits the same friction: mid-thought in Slack,
a doc, an email - the words don't come out right. The existing fix is
tabbing to ChatGPT, rephrasing, copying back. That is four context
switches for one sentence.

At scale - across dozens of messages per day - this is not a minor
inconvenience. It is a sustained interruption to the kind of focused
work that actually requires fluid communication.

---

## Insight

The friction was not with AI quality - it was with AI accessibility
within a flow state. ChatGPT produces excellent rewrites. The problem
is that accessing it requires leaving the context you are writing in.

The insight: if the AI can intercept at the OS keyboard level and return
transformed text in-place, the context switch disappears entirely.
The user never leaves their document.

---

## Key Decisions

### Decision 1: Rust + Tauri v2 over Electron

The keyboard hook must intercept at the OS level before the active
application receives the input. This requires low-level system access
and minimal latency.

Electron's V8 runtime adds overhead that would be perceptible at the
keyboard hook layer. Rust gives direct OS API access with zero GC pauses.
Tauri v2 provides the webview shell for the UI without the Electron
bundle size or memory footprint.

This was a performance-first decision made before writing a single
line of UI code.

### Decision 2: BYOK with OS keychain storage

RICE analysis:
Managed keys: (100 × 2 × 0.8) / 4 = 40
BYOK:         (100 × 1.5 × 1.0) / 1 = 150

BYOK eliminates the need for billing infrastructure, key management,
rate limiting, and security audit on a solo-built v1 with zero revenue.
OS keychain storage means the key never touches disk unencrypted and
is never transmitted to a server Rishabh operates.

Trust is a product feature. Users keeping their own keys is the
correct default.

### Decision 3: Hindi/Hinglish prompt awareness

Users who code-switch between English and Hindi produce output that
generic English-only prompts handle poorly - the rewrite loses the
natural voice and register of the original. A prompt layer that
detects code-switching and adapts its output accordingly produces
rewrites that feel like the user, not like a translation.

This was a user empathy decision, not a technical one. It required
no additional infrastructure - only careful prompt engineering.

AI Triangle trade-off: Latency + Cost, variable Quality.
Target: under 1.5 seconds end-to-end for the transformation.
BYOK via OpenRouter lets users choose their own quality/cost balance
by selecting their preferred model. Gemini as default for latency
profile and free tier accessibility.

---

## What I Cut and Why (Impact/Effort Matrix)

Custom prompt library:     High Impact / High Effort  → v2 scope
Team sharing:              Medium Impact / High Effort → not in v1 target use case
Usage analytics:           Low Impact / Medium Effort  → v2 (needs user base first)
Windows support:           High Impact / High Effort   → macOS first, validate, expand
Plugin marketplace:        Low Impact / Very High      → cut entirely for v1
Managed key hosting:       Medium Impact / High Effort → eliminated by BYOK decision

---

## Outcome

North Star: Transformations per active user per week

Shipped: v1.0.0 available on GitHub with landing page.

v2 scope:
- Custom trigger phrases
- Local model support via Ollama
- Usage analytics (requires user base)
- Windows support

What I'd do differently: Instrument from v1, not v2. Currently have
no visibility into whether users are activating the trigger, which
providers they're using, or where the flow breaks. Even a lightweight
local log would give enough signal to prioritize v2 correctly.

---

## Next
← Internal CX Platform    Toolzi →