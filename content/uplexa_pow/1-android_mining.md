---
title: "uPlexa Android Miner"
metaTitle: "uPlexa | Andoid Miner - Info & Guides"
metaDescription: "Details info and guides how to install and use uPlexa Android Miner"
---
uPlexa is designed around complete IoT ubiquity. The underlying core functionality of this project, is to provide an incentive to IoT users to mint coins. With uPlexa's efficient algorithm to boost IoT hashing power, our first proved concept of IoT mining is realized with the release of uPlexa Android Miner.  

On June 6, 2019 uPlexa release UPX Android Miner 0.0.1 Beta for public testing. We have improved the Android Miner since then by listening to our Community and further enhanced the mining efficiency and profitability of the IoT mining with the release of IoTProxy and UPXTWO codebase.

# Downloads

[![Latest Version](https://img.shields.io/static/v1?label=upx-android-miner&message=v0.3.1&color=success)](https://github.com/uPlexa/upx-android-miner/releases/tag/v0.3.1)

- [Github Repository](https://github.com/uPlexa/upx-android-miner/releases)
- [Android APK Installer](https://github.com/uPlexa/upx-android-miner/releases/download/v0.3.1/upx-android-miner-v3.1.apk)
- [Source Code](https://github.com/uPlexa/upx-android-miner/archive/v0.3.1.zip)

# Installation

Once you downloaded the .APK file, simply click on the file and it'll install to your phone.  
You may need to enable **_Install from unknown sources_** on your phone. UPX Android Miner does not require any special access on your phone.

# First Run

Before you continue, make sure you have your uPlexa wallet address copied. If you have not created any uPlexa wallet yet, please see out details guide here: [uPlexa Wallets](/uplexa_wallet/)

On the **Settings** page, enter the following informations:
- **Wallet Address** - Your wallet address (Start with UPX...)
- **Payout threshold** (minimum: 75 UPX) - Change this if you want higher payout threshold
- **Miner Name** - Give specific name to your miner (useful if you mining on a few devices)

On the **Miner** page, set the following setting to your preference:
- **Threads** - Number of threads to be use. Available threads is stated in the bracket ( )
- **Max CPU** (in percentage) -  You can set CPU usage percentage from 25%, 50%, 75% and 100%.

| ❗ WARNING  |
|-------------|
> Running this software will consume an optional amount of your CPU. Running your CPU at a high setting for a prolonged duration may result in negative effects such as: battery drainage, slow response time, overheating, and may cause permanent damage to your device. By using this application, you assume full responsibility for any potential damage that may caused to your device.


- **START** - Start mining
- **STOP** - Stop mining
- **LOG** - Toggle miner on/off (default: enable)
- **BLACK MODE** - Reduce your device screen brightness. Simply tap the screen to disable.

# Mining Stats

On the **Stats** page, you can view your current stat for your mining operation:
- **Total Due** - Accumulated UPX from your mining pending payout.
- **Total Paid** - Total payout from your miner to your wallet.
- **Total Hashes** - Hashes submitted by your miner to the pools.
- **Minimum Pay** - Minimum payout threshold. Your **Total Due** must be over this limit for it to be paid out to your wallet.

# IoT Proxy
> **iot-proxy.uplexa.com** is uPlexa own lightweight proxy that allow IoT devices to reach maximum efficiency and profits by grouping IoT miners into acting as one singular miner to the stratum protocol/pools.

If you have several IoT devices (android phone, raspberry pi, android box tv, etc) you may view the devices mining stats on [**iot-proxy.uplexa.com**](https://iot-proxy.uplexa.com) just like workers stat page on uplexa mining pool. Simply enter your wallet address that you use for your mining operations.