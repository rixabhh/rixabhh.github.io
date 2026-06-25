---
title: "Identity Resolution Layer"
company: "EshopBox"
role: "Product + Data Design"
timeline: "2024"
status: "Shipped"
summary: "CRM data accuracy restored to 95% across all customer touchpoints."
tags: ["Data Engineering","EshopBox","Shipped"]
---

## The Job to Be Done

When I look at a customer record in our CRM, I want to see a single,
accurate view of their interactions across all touchpoints, so I can
trust the data I'm using to make sales and ops decisions.
*(User: Sales rep / ops team)*

---

## Problem

EshopBox's CRM was fragmenting the same customer into multiple records.
A seller who had interacted via web, WhatsApp, and a kiosk touchpoint
appeared as three separate entities. Sales reps were making follow-up
decisions based on incomplete context. Ops reporting was unreliable.

The workaround was manual deduplication - reps would spot-check records,
merge duplicates when they found them, and annotate notes to compensate
for missing history. This was unsustainable and invisible to leadership
who were reading reports from the fragmented data.

---

## Insight

Root cause (via 5 Whys):
- Surface: CRM records were inaccurate
- Why: Same customer appeared as multiple records
- Why: Events from different touchpoints were not linked
- Why: No shared identity key existed across systems
- Why: Each system was instrumented independently
- Root: No event schema existed. Instrumentation was ad hoc.

The problem was not a CRM configuration issue. It was a missing
data foundation - specifically, the absence of a consistent identity
key and event schema across all customer touchpoints.

---

## Key Decisions

### Decision 1: Define a canonical identity key before touching the CRM
The instinct was to build a deduplication script against existing records.
The correct fix was upstream: agree on a canonical identifier (phone number
as primary, email as secondary) and instrument all touchpoints to emit it.
Deduplication without a schema just creates a recurring maintenance problem.

### Decision 2: Event schema first, ETL second
Designed the event schema - what a "customer interaction" event must contain
regardless of which touchpoint emits it - before writing any transformation
logic. This made the ETL layer deterministic and auditable.

### Decision 3: Restore trust before adding features
There was pressure to add enrichment (lead score, intent signals) to the
resolved records. Deferred this explicitly. Adding intelligence to untrustworthy
data compounds the problem. Accuracy first, enrichment second.

---

## What I Cut and Why

Retroactive enrichment: High Impact / Very High Effort → deferred.
Backfilling enrichment data on historical records requires significant
compute and carries a high error risk on old, incomplete data.
Forward-looking accuracy was the priority.

Real-time identity resolution: High Impact / High Effort → deferred.
Near-real-time (batch every 15 minutes) was sufficient for the use case.
Real-time adds infrastructure complexity not justified by the
decision latency of the downstream users (sales reps reviewing daily).

---

## Outcome

North Star: CRM data trust (proxy: % records with single resolved identity)

L1 results:
- CRM record accuracy restored to 95%
- Single customer view available across web, WhatsApp, and kiosk touchpoints
- Sales and ops reporting rebuilt on clean foundation

What I'd do differently: Instrument a "data confidence score" per record
from day one. A binary accurate/inaccurate label misses the nuance of
partial matches. A confidence distribution would have given us a better
view of where the resolution was weakest.

---

## Next
← WhatsApp Sales Discovery Bot    Multi-Provider LLM Lead Scoring →