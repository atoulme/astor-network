---
title: Explore
lang: en-US
---

# Astor Roadmap

<div class="featured">Astor Place is a local station on the Lexington Avenue Line of the New York City Subway. Completed in 1904, it is one of the original twenty-eight stations in the system.</div>

![](/astor.png)

**Achievements so far:**
- [ECIP-1049 Moved to Accepted](https://github.com/ethereumclassic/ECIPs/issues/394)
*January 2019*
- [Create Astor Full Node Implementation](https://github.com/snissn/parity-ethereum/tree/progpow_guts_hack) *May 2019*
- [First CPU SHA3 Miner in Python](https://github.com/snissn/ethereum-cpu-miner) *May 2019*
- [Offical Astor Site Launch](http://astor.host)
*May 2019*

## Near Term Goals (2019 - 2021)
**What we are trying to achieve right now:**
- Create P2P Mineable Astor Testnet.
- Integrate in more than one Ethereum client (Geth, Mantis)
- Connect Astor to Blockscout block explorer.
- Create an open-source GPU Miner.
- Flyclient compatibility.
- Security audit of Parity implementation.
- Joule Token merge mining.

## Long Term Goals (2020 and Beyond)
**What we hope to achieve in the future:**
- Launch on Ethereum Classic (ETC) mainnet.
- Open source FPGA design for SHA3 mining.
- SHA3 Mining Pool software.
- Built in SHA3 instruction on mobile phones.  

## Joule Token Concept
Because Keccak is compute and not memory bound, the hash rate  of a network is proportional to the number of watts being used to secure the network. Over time this can be tallied to determine the proportional number of Joules that went into securing the network. We will be deploying an ERC-20 token that will be distributed to miners if they call a method to generate tokens. These Joule tokens will be inflationary and be proportionally distributed to the hash rate applied to secure the network. These tokens will be stable coins of their own kind, stable relative to the price of creating hash power.