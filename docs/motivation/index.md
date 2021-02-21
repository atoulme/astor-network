---
title: Motivation
lang: en-US
---

# The History of Astor Testnet

Let's start with the motivation behind the Astor SHA3 Testnet.

**In early January 2019, Ethereum Classic was [51% attacked](https://medium.com/@slowmist/the-analysis-of-etc-51-attack-from-slowmist-team-728596d76ead) twice.**
- Attackers were able to acquire 51+% of the hash power (Ethash) on the network.
- They used this to reverse a series of deposits that they had made on exchanges.
- Many users throughout the ecosystem tried to mine ETC to protect it, but were unable to respond quickly enough to prevent the attack.

**A few days after the attack, [ECIP-1049](https://github.com/ethereumclassic/ECIPs/issues/394) was proposed. Its goal was to change ETC's proof of work algorithm to something safer, simpler, and proven. That algorithm is SHA3 (also called Keccak256).**

![Astor Tiles](/tiles.png)

There were three main reasons behind the proposal: 

**Strength.** SHA3 is the current gold standard in terms of hashing algorithms, and it is widely used in high performance and scientfic applications to safely and efficeintly hash data. It was the product of decades of research by the Keccak team, and was the winner of NIST SHA3 competition. ECIP-1049 also recognizes the need for ETC to diversify away from the same hashing algorithm as Ethereum.

![Hash](/hash.png)

**Transparency.** The SHA3 algorithm has been throughly peer-reviewed and its implementation verfied. With SHA3, block producers around the world have an even platform to competetitvely mine without having to worry about one team having an advantage over another. The 0xBitcoin community had been using SHA3 for over a year and has proven its viability as a proof of work algorithm. 

[Full Keccak Implementation Document](https://keccak.team/files/Keccak-implementation-3.2.pdf)

**Realism.** The 51% attack revealed something important, that ETC was a minority chain and could be attacked at any moment. Because of this, exchanges started requiring thousands of block confirmations to mitigate the risk of 51% attacks. By switching to a new algorithm, both powerful and untapped by other chains, ETC could achieve majority hashpower and protect itself.

# Team
In May 2019, Alex Tsankov and Mike Seiler decided to collaborate on implementing ECIP-1049 over the 36 hour ETH NY hackathon. This site and code is a product of that collaboration.

### Alex Tsankov 

Alex is an Ethereum Classic developer and enthusiast based in New York city. He is the maintainer of [Dappdirect.net](https://dappdirect.net), a website that tracks usage of ETC dapps, and a community leader of [P3C.io](https://p3c.io), an algorithmic bank on Ethereum Classic. B.A. University of Colorado, Boulder.

[Alex's Twitter](https://twitter.com/antsankov)

### Mike Seiler

Founder and CTO of [Torch](www.torch1.com) a Business Intelligence Platform for Philanthropy and the Social Sector. ERC918 co-author and VP at [0xBitcoin foundation](0xbitcoin.foundation) and founder at [Mike.rs](mike.rs) mining pool. First engineering hire at Moat, which Oracle acquired for $850M in April 2017. Innovated features for mobile app viewability tracking, heat maps, fraud detection, data visualization B.S. and M.Eng. Cornell University Applied Engineering Physics.

[Mike's Twitter](https://twitter.com/mseiler1)

# Important Resources
* [Interview with Dr. Guido Bertoni, Creator of Keccak](https://www.youtube.com/watch?v=vN7NI0Oi79E)
<div class="iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/vN7NI0Oi79E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
* [ECIP 1049 Github Thread](https://github.com/ethereumclassic/ECIPs/issues/394)
* [Why Ethereum Classic should Adopt Keccak256 for its Proof of Work Algorithm.](https://medium.com/@antsankov/ecip-1049-why-ethereum-classic-should-adopt-keccak256-for-its-proof-of-work-algorithm-e45aee32d8a9)
* [(pt. 2) Why Ethereum Classic should Adopt Keccak256 for its Proof of Work Algorithm.](https://medium.com/@antsankov/pt-2-ecip-1049-why-ethereum-classic-should-adopt-keccak256-for-its-proof-of-work-algorithm-24052ea6eed1)