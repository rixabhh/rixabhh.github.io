---
title: "WhatsApp Sales Discovery Bot"
company: "EshopBox"
role: "Product + Conversation Design"
timeline: "2024"
status: "Shipped"
summary: "40% of L1 support queries automated before any human involvement."
tags: ["AI Automation","EshopBox","Shipped"]
---

## The Job to Be Done

When a seller reaches out about using EshopBox, I want to understand their
category, volume, and logistics setup immediately, so I can route them to
the right sales rep without spending discovery call time on poor-fit leads.
*(User: EshopBox sales rep)*

---

## Problem

EshopBox's sales team was spending significant time on discovery calls with
sellers who were not a fit - wrong product category, wrong order volume, wrong
geography. The qualification step was happening too late in the funnel, after
human time was already committed.

The workaround was manual: a sales rep would take an initial call, run through
a standard set of questions, and then either route or disqualify. This worked
at low volume. At scale, it created a bottleneck where the best reps spent
disproportionate time on unqualified leads.

---

## Insight

The qualification criteria were deterministic. Category, monthly order volume,
and current logistics setup could be captured via a structured conversation
before any human involvement. The only reason a human was doing it was that
no system existed to do it first.

Root cause (via 5 Whys): The qualification step had never been productized.
It was a human process by default, not by necessity.

---

## Key Decisions

### Decision 1: WhatsApp over a web form
Sellers were already on WhatsApp. A web form would require them to find a URL,
open a browser, and context-switch. WhatsApp meets them where they already are.
Completion rate for conversational flows on WhatsApp significantly outperforms
web forms for the seller demographic we were targeting.

### Decision 2: Multi-LLM chain for intent parsing
A single model broke on ambiguous seller inputs - particularly for sellers
who responded in fragmented messages or mixed languages. A multi-LLM chain
with fallback routing improved accuracy on these edge cases.

AI Triangle trade-off: Quality + Cost, accepted higher Latency.
In a WhatsApp conversation, users expect a few seconds between messages -
the latency increase from the chain was within acceptable range.
Misrouting a qualified lead costs more than an extra API call.

### Decision 3: Qualification logic stays deterministic
The LLM was used only for intent parsing and message normalization -
not for the scoring decision itself. Scoring logic was rules-based and
auditable. This made it easier to debug, explain to stakeholders,
and adjust thresholds without retraining.

---

## What I Cut and Why

Multilingual support (full): Medium Impact / High Effort → deferred.
Hindi intent parsing was included. Full regional language support was not
justified until the core flow was validated.

CRM auto-update on disqualification: Low Impact / Medium Effort → deferred.
Qualified leads got CRM entries with context. Disqualified leads were logged
but not pushed to CRM - adding noise to the pipeline without clear value.

Sentiment analysis on conversations: Low Impact / High Effort → cut entirely.
No downstream action was defined for sentiment data. Building instrumentation
without a clear use case is waste.

---

## Outcome

North Star: Qualified lead rate into the sales pipeline.

L1 results:
- 40% of L1 support and discovery queries handled without human involvement
- Sales team received pre-qualified leads with context already attached
- Reduction in unqualified discovery calls

What I'd do differently: Define a precision threshold before shipping.
We didn't set a formal accuracy target for disqualification before launch.
In retrospect, agreeing on "we will not disqualify a lead unless confidence
exceeds X%" would have given us a clearer validation criterion and made the
post-launch audit more structured.