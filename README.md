# 🌐 CoinOf API Gateway

## Details of stack, third party, programming language
- Full Stack
- No third party
- Java script

## Website main functionality

This is the gateway service for **CoinOf**, acting as the bridge between the frontend and the backend monolithic architecture. It performs initial auth, wake-up.

---

## ⚙️ Key Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET`  | `/val_86556` | Incremental value to trigger first service alive check |
| `GET`  | `/1_gate_way_api___` | Confirms that the gateway is active |
| `GET`  | `/start_engine` | Starts backend engine by pinging backend2 service |

All routes require:

>http Headers:
>x-api-key: _API_KEY

---
---

## 📜 License

This project is **not open-source** and is protected under **All Rights Reserved**.  
You may not use, copy, distribute, or modify any part of this project without explicit permission.

---
