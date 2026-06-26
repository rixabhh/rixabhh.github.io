---
title: "Eshopbox Plus Kiosk Flow"
company: "Lead Capture"
role: "Product Design + Launch"
timeline: "2024"
status: "Shipped"
summary: "+25% lead capture uplift from in-store physical touchpoints."
tags: ["Product Design","Lead Capture","EshopBox","Shipped"]
---

## The Job to Be Done

When a potential seller visits a physical touchpoint, I want to capture
their intent and contact details before they leave, so I can follow up
with a qualified lead rather than losing them to zero-friction exit.
*(User: EshopBox field sales team)*

---

## Problem

Physical touchpoints - trade events, partner locations - generated
seller interest that was not being captured. A potential seller would
engage with the display, ask questions, and leave. No lead record.
No follow-up path. The event produced goodwill but no pipeline.

The workaround was manual: a sales rep would collect business cards or
manually enter contact details on a phone. Inconsistent, lossy, and
dependent on rep availability at every moment.

---

## Insight

The friction was in the handoff from interest to capture. Sellers were
willing to engage but not willing to hand over a business card or wait
for a rep. A self-serve kiosk flow that captured name, contact, and
basic qualification in under 60 seconds removed the rep dependency
and met the seller at peak intent.

---

## Key Decisions

### Decision 1: Under 60 seconds or it fails
Kiosk flows at physical touchpoints compete with distraction and
time pressure. Every field beyond the minimum reduces completion.
The flow was designed to 4 fields maximum: name, phone, product
category, monthly order volume. Everything else was deferred to
the WhatsApp bot follow-up.

### Decision 2: WhatsApp follow-up, not email
Sellers in the target segment are more responsive on WhatsApp than email.
Kiosk captured phone number → triggered WhatsApp qualification flow
automatically. The kiosk was the top of the funnel; the bot was the
qualification layer.

### Decision 3: A/B test the CTA copy before locking the design
Two versions of the primary CTA were tested: "Register your interest"
vs "Get a callback in 24 hours." The second performed higher on
completion rate - specificity of the promise reduced ambiguity.

---

## What I Cut and Why

Photo / ID capture: Low Impact / High Effort → cut. Added friction
with no downstream use case at this stage.

In-kiosk product demo: Medium Impact / High Effort → cut. Kiosk's job
is lead capture, not product education. Mixing goals reduces completion.

Offline mode: Medium Impact / High Effort → deferred. Events with reliable
connectivity were the primary use case. Offline handling adds significant
engineering complexity not justified for v1.

---

## Outcome

North Star: Lead capture rate at physical touchpoints

L1 results:
- +25% lead capture uplift vs manual rep-dependent process
- Automated WhatsApp follow-up triggered on every captured lead
- Sales reps received qualified, contextualized leads post-event

What I'd do differently: Instrument time-on-screen from day one.
We measured completion rate but not where users dropped off within
the flow. Funnel visibility within the kiosk would have let us optimize
individual steps, not just overall completion.