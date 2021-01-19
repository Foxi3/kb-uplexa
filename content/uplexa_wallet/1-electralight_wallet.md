---
title: "ElectraLight Wallet"
metaTitle: "uPlexa | ElectraLight Wallet Info & Guides"
metaDescription: "Details info and guides how to install and use uPlexa ElectraLight Wallet"
---
![ElectraLight Wallet Logo](https://raw.githubusercontent.com/uPlexa/electralight-wallet/master/src/statics/uplexa-wallet.svg)

**ElectraLight** wallet is the Lightweight GUI Wallet for uPlexa. It is an electron based wallet that bring several improvement and user-friendliness over uPlexa GUI wallet.

> **_NOTE:_** We especially recommended **ElectraLight** wallet for a beginner or less technical user to use.

# Features

- Option to Switch Between Wallets  
    You can keep several wallets on one PC, and switch between them easily - just pick your wallet from the list and enter your password.
- Specific Wallet Naming & Unique Identification Images  
    Each wallet created will be assigned unique identification images and you can choose specific name for your wallets that fits your wallet usage. i.e: Funds, Groceries, Savings, Investment, etc.
- Mixed Sync of Blockchain Nodes  
    At a wallet startup, your wallet will sync faster from remote node connection, and at the same time ElectraLight wallet will download blockchain files to your hard drive. This increase wallet reliability. You will still be able to access your wallet through local node in the event that remote node access is disconnected.
    >**_Note:_** Use Remote Node (Speed) & Local Node (Reliability) to get the most out of **ElectraLight** wallet
- Improved Address Book Functionality  
    Adding recipients into your address book will let you keep track of who you have sent funds to
- Simplified Transaction Tab with Lazy Loading  
    Check your transaction history by just scrolling in the transaction tab without having to select different pages.
- Increase Wallet Stability and Response Time  
    Known issue with stuck processes after closing GUI wallet is now a past history. Overall increased speed and reduced response time of wallet's interface.
- Non-Latin Seed Restore  
    Restore your wallet with non-latin characters (Russian, German, Chinese and other languages)
- Automatic Scan of Wallet Default Folder  
    Import your wallet key from previous GUI wallet or other machines by placing the wallet key in the wallet's default folder. **ElectraLight** wallet will automatically scan and added your wallet in the list.
- Power User Settings  
    **ElectraLight** wallet is readily use with an Optimum settings, but you may edit the wallet settings such as:
    >**_Note:_** Only change the wallet settings if you know what you are doing!

    - Node sync switch (Mixed, Remote, or Local)
    - lmdb storage path 
    - Various ports (daemon, p2p, uplexad, remote, etc)
    - Remote Node URL
    - Bandwidth utilization (upload & download speed)

# Downloads

[![Latest Version](https://img.shields.io/static/v1?label=electralight-wallet&message=v0.2.1&color=success)](https://github.com/uPlexa/electralight-wallet/releases/tag/v0.2.1)
- [Github Repository](https://github.com/uPlexa/electralight-wallet/releases/tag/v0.2.1)
- [Windows Installer](https://github.com/uPlexa/electralight-wallet/releases/download/v0.2.1/Wallet.ElectraLight.Setup.0.2.1.exe)
- [Linux AppImage](https://github.com/uPlexa/electralight-wallet/releases/download/v0.2.1/Wallet.ElectraLight.0.2.1-Linux.AppImage)
- [Source Code](https://github.com/uPlexa/electralight-wallet/archive/v0.2.1.tar.gz)

# Installation

### Windows 10

Download the executable (.exe) file from Github and install to your system.  
The installer will automatically install **ElectraLight** wallet and create program shortcut on your desktop. The default installation path as follows:  
- Default wallet installation folder  
&nbsp;&nbsp;&nbsp;`C:\Users\{UserName}\AppData\Local\Programs\uplexa-wallet-electralight`  
- Default wallet data storage path  
&nbsp;&nbsp;&nbsp;`C:\ProgramData\uplexa`  
- Wallet updater file  
&nbsp;&nbsp;&nbsp;`C:\Users\{UserName}\AppData\Local\uplexa-wallet-electralight-updater`  
- Default wallet gui setting file  
&nbsp;&nbsp;&nbsp;`C:\Users\{UserName}\AppData\Roaming\uPlexa ElectraLight Wallet`  

### Linux (Ubuntu 18.04)

Download the AppImage from Github. You need to make it excutable using the following command:  
&nbsp;&nbsp;&nbsp;`chmod a+x Wallet.Electralight.*.AppImage`  
Run the wallet  
&nbsp;&nbsp;&nbsp;`./Wallet.Electraligt.*.AppImage`

# First Run

Upon completed installation, there will be program shortcut on the desktop and start menu. Run **ElectraLight** wallet for the first time and you will be greated with the splash screen and initial wallet settings as follows:
<div class="video-responsive"><iframe src="https://drive.google.com/uc?id=17OY9doACy0sBcslrgbkhqguU104tGRAD" width="1138" height="640" allowFullScreen></iframe></div>

# Wallet Menu

On the main window of **ElectraLight** wallet, you have several option to choose from such as:  
![ElectraLight Wallet Main Page](https://i.imgur.com/eUhtCpu.png#thumbnail)
- Create new wallet
- Restore wallet from seed
- Restore view-only wallet
- Import wallet from file

# Create New Wallet

| ❗IMPORTANT   |
|---------------|

> Please copy your wallet **Seed Word**. Keeping this secure and private is very important, as it is the only way that you will be able to login to your account. As we don't store your wallet **Seed Word** on the server there is no way to recover it if it is lost! Your wallet **Seed Word** can also never be changed, and if it is stolen or otherwise compromised, you will have to move your funds to a new account with a new **Seed Word**. Therefore, it is best that you backup your wallet **Seed Word** by writing it down, perhaps obscuring it as part of a poem or letter, and storing it in multiple safe and secure places.

Select *Create new wallet* and fill in the following info:  
<div class="video-responsive"><iframe src="https://drive.google.com/uc?id=1Vf4woW_djva7ku2EBfUnOKyNkw-H19c_" width="1138" height="640" allowFullScreen></iframe></div>

- **Wallet Name** - Name of your wallet. Try giving specific wallet name (i.e MainWallet, Mining, Exchanges, etc.)
- **Seed Language** - Choose the language for the 25-word mnemonic seed. 
    >**_Note:_** You must select the same seed language when restoring your wallet!
- **Password** - Password for your wallet.


# Restore Wallet (25-Word Seed)

Select *Restore wallet from seed* and fill in the following existing wallet information:  
<div class="video-responsive"><iframe src="https://drive.google.com/uc?id=1COr5O4wBP7qD2lKrqaLbYkJvV--Nh7R9" width="1138" height="640" allowFullScreen></iframe></div>

- **Wallet Name** - Name of your wallet. Try giving specific wallet name (i.e MainWallet, Mining, Exchanges, etc.)
- **Mnemonic seed** - 25-seed word generated when creating the wallet for the first time. This seed word is unique and specific to your wallet only.
    >**_Note:_** Seed word is case-sensitive and must be entered exactly in the arrangement when it first generated. Please check to ensure no extra spaces at the end.
- **Restore from date/block height** - Entered the date when the wallet is created or the block height. You can refer to uPlexa blockheight summary here: [uPlexa Blockchain.](/technical_data/#uplexablockchain) If unsure, put the block height to "0". This will scan the entire blockchain from the genesis block until the current blockheight.
- **Password** - Password for your wallet.

# Wallet Settings

In the wallet settings page, you may change wallet appearance and general settings as shown here:
<div class="video-responsive"><iframe src="https://drive.google.com/uc?id=1YX_GRYx5zq9aX55vRKK9COLOj5yS7PFn" width="1138" height="640" allowFullScreen></iframe></div>

### Wallet Appearance

You can change the wallet appearance from:
- Dark theme (default)
- Light theme

### General Settings

In general settings, you will be able to change the followings:
- Node type:
    - Remote Daemon Only
    - Local + Remote Daemon
    - Local Daemon Only
- Remote Node Host and Port - by default, the remote node host is set to **_remote.uplexa.com_** and port **_21061_**. You may select your own remote node if you preferred.
- Data Storage Path - Location of the wallet data storage such as wallet file, wallet gui settings, wallet logs and blockchain lmdb file.