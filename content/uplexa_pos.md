---
title: "Utility Node (PoS)"
metaTitle: "uPlexa | Utility Node - Info & Guides"
metaDescription: "Details info and guides how to install and use uPlexa Utility Node"
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
- [ ] tutorial on running node using screen


> We recommend using Ubuntu 18.04 or latest version for beginners and less technical user. As such, our setup guides will be based on Ubuntu 18.04 system. You may refer to our Github for compile instruction for other distros.

#### Step 1: Create Your Virtual Machine and Run Initial Setup
Deploy your VM with your favourite hosting services and run initial system update and upgrade.
```
sudo apt update -y && apt upgrade -y
```

#### Step 2: Installed Required Libraries and Dependencies
In order to compile uPlexa, install dependencies libraries and tool required for the compilation:  
```
sudo apt install git build-essential cmake pkg-config libboost-all-dev libssl-dev libzmq3-dev libunbound-dev libsodium-dev libpgm-dev -y
```  
More details summaries of the libraries and tools can be found here:  
&nbsp;&nbsp;&nbsp;`https://github.com/uplexa/uplexa#dependencies`


#### Step 3: Pull uPlexa Core Bundle (Steadfast Storm) from Official Github Repo

Run the following command to pull uPlexa Core Bundle to your VM or server:
```
git clone --recursive https://github.com/uPlexa/uplexa
```
Navigate to uplexa directory and initiate & update submodule:
```
cd uplexa && git submodule init && git submodule update
```

#### Step 4: Compile 
Testnet is compile on master branch of uPlexa repo:
```
git checkout master
```
Compile the code:
```
make release
```

Note: If the code compile stuck or running too slow, you may need to create /swapfile.  
You may refer to `https://linuxize.com/post/create-a-linux-swap-file/`

#### Step 5: Start Daemon in Utility Node
The resulting executable can be found at `$ ~/uplexa/build/Linux/master/release/bin`  
Navigate to the folder:
```
cd ~/uplexa/build/Linux/master/release/bin
```
Start daemon in Utility Node mode and let it sync. This may take several hours (much quicker on testnet):
> **_Note:_** You can start daemon in background using --detach mode, or use screen

```
./uplexad --testnet --utility-node
```
> _Optional:_ Add `PATH="$PATH:$HOME/uplexa/build/Linux/master/release/bin"` to .profile and then run uPlexa Node with
```
uplexad --testnet --utility-node
```

#### Step 6: Create Testnet Wallet

Create testnet wallet to get wallet address for staking:
```
./uplexa-wallet-cli --testnet
```
Follow the instructions and save the 25-mnemonic seed word to restore the wallet later if needed. 

#### Step 7: Register Utility Node
Back to your daemon, you may now register your Utility Node to the network:
```
register_node
```
Follow the instructions.

| ⚠️ ATTENTION   |
|---------------|

- Select NO for auto-staking until we patch the code.
- For Manual Staking (in testnet), the locking period is 2 days (1440 block). You need to re-staking (re-register the Utility Node) upon expiry.
- to check your expiry height, run `print_un_status` in the daemon. Check Expiry Height (block) or Expiry Date (Estimated in UTC).

Once complete, you will receive a code in which must be pasted into the wallet client.  
Paste the code you were provided by the daemon to the uplexa-wallet-cli, and agree to the TX fee.  

| ✅ SUCCESS |
|------------|

You are now set up! You should start receiving block rewards coming in every couple minutes.  
Run `show_transfers` to see your incoming transfers from the uplexa-wallet-cli marked _unode._

# Bug Reporting

Please report all bugs using [Github](https://github.com/uPlexa/uplexa/issues).  
Please make sure to search to see if the bug you are posting has already been posted prior to making a new issue. 