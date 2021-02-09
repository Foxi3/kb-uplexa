---
title: "CPU & GPU Mining"
metaTitle: "uPlexa | CPU & GPU Mining - Info & Guides"
metaDescription: "Details info and guides how to mining on uPlexa networks"
---

# CPU Mining - Introduction

CPU mining is a process that utilizes cores of a Central Processing Unit (CPU) to verify transaction on the uPlexa blockchain. A CPU is a part of computer that provides computing power for execution of operations performed by software installed on that computer. If you have a computer, chances are you will be able to mining uPlexa.

# CPU Mining - Mining Software

There are few mining software that supported uPlexa Algorithm that are available in Windows, Linux and MacOS.

- **XMRig-UPX** - XMRig-UPX is a high performance uPlexa (UPX) CPU miner, with official support for Windows and Linux. Originally based on cpuminer-multi with heavy optimizations/rewrites and removing a lot of legacy code, since version 1.0.0 completely rewritten from scratch on C++.
- **XMRigCC** - XMRigCC is a high performance RandomX, CryptoNight, Argon2 and AstroBWT CPU miner for support for Windows, Linux and MacOS.

# CPU Mining - Downloads

Make sure to download from verifiable resources to avoid using mining software that already injected with harmful malware.

## XMRig-UPX
[![Latest Version](https://img.shields.io/static/v1?label=xmrig-upx&message=v0.2.0&color=success)](https://github.com/uPlexa/xmrig-upx/releases/tag/v0.2.0)
- [Github Repository](https://github.com/uPlexa/xmrig-upx)
- [Windows](https://github.com/uPlexa/xmrig-upx/releases/download/v0.2.0/xmrig-upx-v0.2.0-win64.zip)
- [Linux](https://github.com/uPlexa/xmrig-upx/releases/download/v0.2.0/xmrig-upx-v0.2.0-lin64.tar.gz)
- [Source Code](https://github.com/uPlexa/xmrig-upx/archive/v0.2.0.tar.gz)

## XMRigCC
[![Latest Version](https://img.shields.io/static/v1?label=xmrigCC&message=v2.8.4&color=success)](https://github.com/Bendr0id/xmrigCC/releases/tag/2.8.4)
- [Github Repository](https://github.com/Bendr0id/xmrigCC)
- [Windows 64bit](https://github.com/Bendr0id/xmrigCC/releases/download/2.8.4/xmrigCC-2.8.4-with_tls_and_gzip-gcc-win64.zip)
- [Linux 64bit](https://github.com/Bendr0id/xmrigCC/releases/download/2.8.4/xmrigCC-2.8.4-with_tls_and_gzip-gcc7-linux-static-amd64.tar.gz)
- [Source Code](https://github.com/Bendr0id/xmrigCC/archive/2.8.4.zip)

# CPU Mining - Installation

| ⚠️ ATTENTION |
|-------------|
> Almost all crytocurrency mining software are flagged by Anti Virus Application as potential _"harmful/coinminer"_ and will automatically quarantine/delete the miner executable file. This classification by the Anti Virus companies due to irresponsible individual which injected the mining software to other machine without the victim knowledge to gain profit.  
**XMRig-UPX** is safe to use as acknowledge by our Community.

## XMRig-UPX

### On Windows
- Unzip the download archive file.
- Edit `config.json` file to enter your wallet details and mining pool address.
- Enable hugepages (optional).
- Run `xmrig.exe` to start mining.
- `config.json` sample:

```javascript
{
    "algo": "cryptonight-upx/2",
    "api": {
        "port": 0,
        "access-token": null,
        "id": null,
        "worker-id": null,
        "ipv6": false,
        "restricted": true
    },
    "asm": true,
    "autosave": true,
    "background": false,
    "colors": true,
    "cpu-affinity": false,
    "cpu-priority": null,
    "donate-level": 1,
    "huge-pages": true,
    "hw-aes": null,
    "log-file": null,
    "max-cpu-usage": 100, //reduce cpu usage accordingly.
    "av": 1,
    "pools": [
        {
-           "url": "loudmining.com:2002",
+           "url": "mine.uplexa.online:1111",
-           "user": "YOUR_UPX_ADDRESS_HERE",
+           "user": "UPX1nq6zDL1...", //your own UPX wallet address
            "pass": "X", //some pool detect "pass" as miner ID/name.
            "rig-id": null,
            "nicehash": false,
            "keepalive": false,
            "variant": 1,
            "tls": false,
            "tls-fingerprint": null
        }
    ],
    "print-time": 60,
    "retries": 5,
    "retry-pause": 5,
    "safe": false,
    "user-agent": null,
    "watch": false
}
```
### On Linux
Using linux terminal:
- Untar the downloaded archive file. `tar xvzf xmrig-upx-*.tar.gz`
- Navigate to the extracted folder. `cd xmrig-upx-v0.2.0-lin64`
- Edit `config.json` file to enter your wallet details and mining pool address.
- Run the miner. `./xmrig`



