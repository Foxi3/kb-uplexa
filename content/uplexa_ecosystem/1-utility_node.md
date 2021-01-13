---
title: "Utility Nodes (PoS)"
metaTitle: "How-To for uPlexa Utility Nodes"
metaDescription: "Details info and guides how to install and use uPlexa Utility Nodes"
---
| ⚠️ TESTNET STAGE 🛠  |
|---------------------|

![Steadfast Storm Testnet](https://miro.medium.com/max/700/1*GsI8l5iL3M3Nm1ipdfmfiQ.png)

On 31st December 2020, uPlexa project officially release **"Steadfast Storm"** code on the Testnet.

# Utility Node

Steadfast Storm enables Utility Nodes (UNs).  
UNs are like master nodes in the terms of providing proof-of-stake transactional validation. However, UNs are more complex, using PoU (proof-of-utility) in order to provide the backbones infrastructure for our decentralized privacy network (dVPN) known as Plexanet. PlexaNet will release in Alpha (on testnet) in January, 2021.

# Requirements
There are certain requirements for Utility Node as we want to ensure quality and reliablity of the nodes.

### Mainnet

- Total Stake: 2,000,000 UPX for Solo Node _or_ 500,000 UPX for Shared Node
- Virtual Machine Requirements:
    - Min 1-2 vCPU
    - Min 2GB of RAM
    - Min 13Mbps connection speed
    - 99.999% Uptime (or risks losing out on rewards)

> **_NOTE:_** We do not recommend using AWS, Google Cloud, or Microsoft Azure to deploy your VM.

### Testnet

- Total Stake: 20,000 Testnet UPX for Solo Node _or_ 5,000 Testnet UPX for Shared Node
- Virtual Machine Requirements:
    - All specification will be the same as Mainnet but you are welcome to deploy the testnet on any devices capable of compiling the Steadfast Storm code.

# Testnet Setup Guide (Ubuntu 18.04)

### TO-DO
- [ ] List of tested hosting
- [ ] simple video of deploying a VM and initial setup.


> We recommend using Ubuntu 18.04 or latest version for beginners and less technical user. As such, our guides setup will be based on Ubuntu 18.04 system. You may refer to our Github for compile instruction for other distros.

#### Step 1: Create Your Virtual Machine and Run Initial Setup
Deploy your VM with your favourite hosting services and run initial system update and upgrade.
&nbsp;&nbsp;&nbsp;`sudo apt update -y && apt upgrade -y`

#### Step 2: Installed Required Libraries and Dependencies
In order to compile uPlexa, install dependencies libraries and tool required for the compilation:  
```
sudo apt install git build-essential cmake pkg-config libboost-all-dev libssl-dev libzmq3-dev libunbound-dev libsodium-dev libpgm-dev -y
```  
More details summaries of the libraries and tools can be found here: `https://github.com/uplexa/uplexa#dependencies`


#### Step 3: Pull uPlexa Core Bundle (Steadfast Storm) from Official Github Repo 