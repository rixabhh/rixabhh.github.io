---
title: "Multi-Provider LLM Lead Scoring"
company: "Lead Ops"
role: "Product + Prompt Engineering"
timeline: "2024"
status: "Shipped"
summary: "Higher-quality sales pipeline through automated lead qualification at scale."
tags: ["AI","Lead Ops","EshopBox","Shipped"]
---

## The Job to Be Done

When a new lead enters the pipeline, I want a reliable qualification score
before any human reviews it, so I can prioritize high-intent leads and stop
wasting sales capacity on weak ones.
*(User: Sales ops / SDR team)*

---

## Problem

Lead volume exceeded the capacity of the sales team to manually triage.
Without a qualification layer, reps were working the pipeline in FIFO order -
oldest leads first, regardless of quality. High-intent leads were aging
in the queue while reps worked low-signal entries.

The workaround was informal scoring: reps used gut feel and available CRM
data to mentally prioritize. This was inconsistent across reps and invisible
to management.

---

## Insight

The qualification signal existed in the lead data - company size, category,
stated monthly volume, source touchpoint. The problem was that no system
was reading this data and producing a consistent score. Two reps looking
at the same lead would reach different conclusions.

The scoring criteria were articulable. If they could be written down,
they could be prompted.

---

## Key Decisions

### Decision 1: Multi-provider chain over single model
Single model evaluation showed accuracy drops on edge cases -
particularly leads with incomplete data or ambiguous category descriptions.
A multi-provider chain with fallback routing to a secondary model on
low-confidence outputs improved overall precision.

AI Triangle trade-off: Quality + Cost over Latency.
Lead scoring happens asynchronously - a rep reviews the queue, not a
real-time stream. An extra 1-2 seconds per scoring call is irrelevant
to the user experience. Quality and cost per scored lead were the
metrics that mattered.

### Decision 2: Scoring logic in the prompt, not in code
Qualification criteria were encoded in the prompt as structured rules,
not hardcoded in application logic. This meant sales ops could adjust
scoring thresholds by updating the prompt - no deployment required.
Reduced dependency on engineering for what was fundamentally a
business rules problem.

### Decision 3: Human review on low-confidence scores
Scores below a confidence threshold were flagged for human review
rather than auto-assigned to a tier. This preserved trust in the
system during the validation period and gave us a labeled dataset
to measure against.

---

## What I Cut and Why

Real-time scoring on form submit: Medium Impact / High Effort → deferred.
Batch scoring on ingestion was sufficient. Real-time adds webhook
infrastructure and error-handling complexity not justified by the
latency requirements of the downstream workflow.

Custom fine-tuned model: High Impact (eventually) / Very High Effort → cut.
No training data existed at the start. Prompt engineering against
a general model with structured output was the right starting point.
Fine-tuning is a future option once a labeled dataset exists.

Automated CRM tier assignment: Medium Impact / Medium Effort → deferred.
Reps needed to build trust in the scores before acting on them automatically.
Showing the score as an advisory signal first, then automating the action
after validation, was the safer adoption path.

---

## Outcome

North Star: Sales pipeline quality (revenue conversion rate from scored leads)

L1 results:
- Higher-quality lead pipeline for sales follow-up
- Consistent qualification criteria across all reps
- Low-confidence leads routed to human review - created a validation loop

What I'd do differently: Define precision and recall targets before shipping.
We optimized for precision (don't misqualify a good lead) but didn't formally
track recall (don't miss a good lead either). In retrospect, both metrics
should have been instrumented from day one with agreed thresholds.

---

## Next
← Identity Resolution Layer    Eshopbox Plus Kiosk Flow →