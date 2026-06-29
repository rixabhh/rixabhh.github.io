---
title: "Internal CX Platform"
company: "B2B SaaS"
role: "Product Owner"
timeline: "2025–ongoing"
status: "Active alpha · Company name withheld · NDA"
summary: "Designed and shipped a B2B SaaS platform from zero requirements to alpha handoff - bridging a CX team and an external dev shop in one build cycle."
tags: ["Internal Product","B2B SaaS","Amkette (EvoFox)","Active Alpha"]
---

## The Job to Be Done

When I pick up a customer support ticket, I want full conversation history,
suggested templates, and clear escalation paths in one place, so I can
resolve the issue without hunting across disconnected tools.
*(User: CX agent)*

---

## Problem

The CX team was running support across disconnected tools - no unified
ticket view, no SLA tracking, no consistent escalation routing. Agents
context-switched between systems on every ticket. Response quality was
person-dependent, not system-dependent. There was no instrumentation -
leadership had no visibility into response times or escalation patterns.

Root cause (via 5 Whys):
- Surface: Agents were slow and inconsistent in quality
- Why: No unified context per ticket
- Why: History, templates, and escalation paths lived in separate tools
- Why: Each tool was adopted organically by different team members
- Why: No one owned the CX tooling decision
- Root: No product ownership over the CX stack. Tooling was reactive,
  not designed.

---

## Insight

The problem was structural, not behavioral. Agents were doing the right
things - the system was forcing them to do it inefficiently. A platform
that unified ticket context, surfaced templates, and encoded escalation
paths would make good performance the default, not the exception.

---

## Key Decisions

### Decision 1: Stakeholder alignment call before any build started
Ran a structured requirements session with the CX team before the
dev team wrote a single line of code. Surfaced: ticket lifecycle
management, branch-based routing, two-tier escalation model, SLA
tracking, WYSIWYG reply editor, multi-channel support, dashboard
filters, and template systems.

Translated these into a prioritized backlog with explicit severity
tiers. Handed this to the dev team as the source of truth.

### Decision 2: Held two items as non-negotiable handoff blockers
Email thread continuity and WYSIWYG editing for agent replies were
identified as critical to agent adoption. Without these, agents would
revert to their previous tools - making the platform optional rather
than the system of record.

Resisted pressure to ship without them. They shipped.

### Decision 3: Maintained a 60-item issue tracker with triage criteria
Acted as the single source of truth for what was a bug, what was an
improvement, and what was a feature request. Prevented scope creep
from the dev team re-labeling features as bug fixes to accelerate
delivery. Kept stakeholder expectations calibrated.

### Decision 4: Deferred AI features to protect handoff quality

RICE analysis:
WYSIWYG editor: (100 × 2 × 1.0) / 2 = 100
AI chatbot:     (100 × 3 × 0.3) / 6 = 15

AI Triangle context: The chatbot at alpha stage would have had poor
quality (no validated accuracy), unpredictable cost, and unclear
latency for a team with SLA commitments. Shipping an unreliable
AI feature in a CX context destroys platform trust faster than
any UX issue.

---

## What I Cut and Why

AI support chatbot: High potential / Low confidence → deferred one sprint.
No training data, no accuracy baseline. Ships post-handoff when
agent usage data provides a foundation.

Sentiment analysis dashboard: Medium Impact / High Effort → post-alpha.
No downstream action was defined. Instrumentation without use case is waste.

Mobile app for agents: Medium Impact / Very High Effort → not in alpha.
Agents work at desks. Mobile is a future channel, not a day-one requirement.

Self-serve onboarding: Low Impact for internal alpha / Medium Effort → post-alpha.
Onboarding will be done in-person for the initial CX team cohort.

---

## Outcome

North Star: Agent first-response time
L1 targets: Ticket pickup rate / Template usage rate / Escalation rate
L2 targets: Login frequency / Time-to-first-action per ticket

Status: Active alpha. CX team handoff imminent.
Post-handoff: AI feature build begins approximately 6 weeks out.
Outcomes to be updated with real data post-handoff.

What I'd do differently: Instrument from alpha, not from launch.
Waiting until handoff to define metrics means the alpha period produces
no data. Even basic logging - tickets opened, templates used, escalations
triggered - during alpha would have given us a baseline to measure
against at launch.