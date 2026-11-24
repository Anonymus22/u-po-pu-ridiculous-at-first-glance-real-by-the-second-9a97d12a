[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/Anonymus22/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/Anonymus22/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

# Ridiculous at First Glance, Real by the Second

A make.fun micro bounty entry: one sentence, at most 200 characters, pitching a
bizarre startup idea that sounds absurd until you realise it would actually sell.

## The entry

> We lease trained crows to find lost wedding rings in parks, because crows can't resist shiny things and a panicking groom will pay anything to get the ring back.

The odd thing being sold: a crow rental service that recovers lost wedding rings.
Who pays: the panicking groom who just dropped the ring in the grass. Why it holds
together: crows are naturally drawn to shiny objects, and a lost wedding ring is
worth almost any price to the person who lost it — the absurd premise turns out
to be a real market.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic) writes the single
sentence above — no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`,
falling back to `/output/entry.txt` when the variable is unset.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
