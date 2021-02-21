---
title: Mine
lang: en-US
---

# Mine on Astor (SHA3)

Currently, the only way to mine on Astor testnet is using our Python CPU miner. You can follow the tutorial here to start [CPU mining](/node/#using-a-miner-with-parity).

![Beaver](/beaver.png)

The SHA3 algorithm was specfically designed by the Keccak team to be particularly efficient in hardware implementations. If you are interested in building a miner we suggest you use these resources:

* [Keccak Implementation documentation](https://keccak.team/files/Keccak-implementation-3.2.pdf), specfically Section 4.
* [SHA3 Ethereum CPU Miner](https://github.com/snissn/ethereum-cpu-miner)
* [Hardware Performance of SHA-3 Candidates using Multiple FPGA Architectures](https://web.archive.org/web/20120504073240/http://www.ecrypt.eu.org/hash2011/proceedings/hash2011_07.pdf).
* [ECIP-1049 Proposal and Discussion](https://github.com/ethereumclassic/ECIPs/issues/394)
* [Which cryptographic hash function does Ethereum use?](https://ethereum.stackexchange.com/questions/550/which-cryptographic-hash-function-does-ethereum-use)
* [NIST SHA3 Competition Proceedings](https://csrc.nist.gov/projects/hash-functions/sha-3-project)
* [Ethereum EVM Schematic](/evm.jpg)

## Known performance of miners (early 2021):
![Miners](/miners.jpg)

If you would like to start immediately mining SHA3 for monetary gain, consider researching the 0xBitcoin project as a proving ground for mining hardware:

* [0xBitcoin Homepage](https://0xbitcoin.org) - A mineable ERC-20 that uses SHA3 to mint tokens.
* [Cosmic SHA3 Miner](https://bitbucket.org/LieutenantTofu/cosmic-v3/downloads/) - A good template for GPU-optimized SHA3 mining software.
* [0xBTC mining stats](https://0x1d00ffff.github.io/0xBTC-Stats/?page=graphs#difficulty) - Tracks difficulty and mining pools over time.

![Keccak](/keccak.jpg)

![EVM](/evm.jpg)
