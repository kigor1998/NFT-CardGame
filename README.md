# Smart Contract
My smart contract on Binance smart chain testnet use hardhat to deploy

Example transaction
https://testnet.bscscan.com/token/0xe97bd2b6b71647f0c3517613f19f8c561b98a7e8

# How to get start
```
(Note Game)
You should get Moralis API server from moralis.io with binance testnet then open Godot(v.3.4) go to Login Screen Click Login Node You'll see Server Url and App Id from the right side change it if you not see you can open Login script and update it.
PS.You should check the Nakama connect to the your ip (ServerConnect.gd line 3)

(Note Metamask)
if you want 1 BNB go to
https://testnet.binance.org/faucet-smart

(Note Smart contract)
if you want to deploy and get you own smart contract you can do this
1. change the key at secret.json (key is Metamask private key you will get 92b99... then you just add 0x before your private key)
2. npm i
3. npm run deploy:binance

How to run
(you should have docker first)
1. docker-compose up

App: http://localhost
```

