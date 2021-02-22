---
title: Node
lang: en-US
---
## Running locally

### With Docker Compose

You can [download this Docker Compose file](https://github.com/antsankov/astor-network/blob/master/docs/node/docker-compose.yml) and automate away the set up of a simple Besu with a CPU miner.

Download the file and make sure Docker Compose is installed.

In the directory where you downloaded the file, run:

`$> docker-compose up`

It will run interactively the set up and collaboration of Besu with the CPU miner.

You can exit with Ctrl+C.

### With Docker

We are making available a simple Docker-based set up with Hyperledger Besu so you can try out locally Keccak mining.
The local network has a very small fixed difficulty as well so you can easily produce blocks on your machine with CPU mining.

`docker run -p 8545:8545 tmio/besu-keccak --rpc-http-enabled --rpc-http-api=admin,eth,debug,miner,net,txpool,priv,trace,web3 --rpc-http-cors-origins="all" --network=ecip1049_dev --miner-enabled --miner-coinbase=fe3b557e8fb62b89f4916b721be55ceb828dbd73`

## Mining locally

If you would like to mine on the network, you will need to install a miner to connect to Besu (see below).

You will need to enable Besu's stratum mining as well:

1. `docker run -p 8545:8545 tmio/besu-keccak --rpc-http-enabled --rpc-http-api=admin,eth,debug,miner,net,txpool,priv,trace,web3 --rpc-http-cors-origins="all" --network=ecip1049_dev --miner-enabled --miner-coinbase=fe3b557e8fb62b89f4916b721be55ceb828dbd73
  --miner-stratum-enabled --miner-stratum-host=0.0.0.0`


1. Connect Metamask to `localhost:8545`

The dev network uses 3 accounts. Here are the private keys:
* `8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63`
* `c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3`
* `ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f`

You can import them into Metamask.

## Mining Client (EXPERIMENTAL)

Currently, we have only created a CPU miner in Python, however we will be working on an open source GPU version as well. Please consult [our resources](/mine/) if you are interested in mining.

1. `$ git clone https://github.com/snissn/ethereum-cpu-miner.git`
1. `$ pip3 install -r requirements.txt`
1. `$ sh run.sh`

Make sure to change the `run.sh` to have the `-n` be the number of blocks you want to mine on the testnet. Screenshot below is succesful testnet mine to the author address.

## More difficulty

The dev network uses a fixed, small difficulty so it uses CPU mining by default.
You can provide a different genesis file with the following approach:
1. mount a different genesis file
1. change the arguments to pick it up.

Here is an example of genesis file:
```
{
  "config": {
    "chainId": 2021,
    "ecip1049Block": 0,
    "keccak256": {
    }
  },
  "nonce": "0x42",
  "timestamp": "0x0",
  "extraData": "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",
  "gasLimit": "0x1fffffffffffff",
  "difficulty": "0x10000",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "alloc": {
    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {
      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",
      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",
      "balance": "0xad78ebc5ac6200000"
    },
    "627306090abaB3A6e1400e9345bC60c78a8BEf57": {
      "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",
      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",
      "balance": "90000000000000000000000"
    },
    "f17f52151EbEF6C7334FAD080c5704D77216b732": {
      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",
      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",
      "balance": "90000000000000000000000"
    }
  }
}
```

`$ docker run -p 8545:8545 -v genesis.json:/tmp/genesis.json tmio/besu-keccak --rpc-http-enabled --rpc-http-api=admin,eth,debug,miner,net,txpool,priv,trace,web3 --rpc-http-cors-origins="all"  --miner-enabled --miner-coinbase=fe3b557e8fb62b89f4916b721be55ceb828dbd73 --genesis-file=/tmp/genesis.json`

![](/success.png)


![Network](/network.gif)