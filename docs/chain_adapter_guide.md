# 🔗 Chain Adapter Guide  
*Version: v0.1.2 — Draft for v0.2 planning*

---

## 🧭 Purpose  
This guide explains how to build **chain adapters** that make the OpenChain Profile Standard (OCPS) usable across multiple blockchains — starting with Metal, and expanding to EVM, Solana, and Cosmos ecosystems.

Adapters make OCPS *chain-agnostic* by standardizing how DAO data is fetched, verified, and displayed, regardless of the underlying protocol.

---

## ⚙️ Adapter Architecture

Each chain adapter follows a modular structure:

| Module | Function | Example |
|--------|-----------|----------|
| `connection` | Connects to RPC or API endpoint | EVM RPC, Metal Pulse API |
| `fetch_metrics` | Retrieves validator / governance data | Stake distribution, block producers |
| `normalize_data` | Converts chain data into OCPS-compatible format | JSON/YAML output |
| `verify_attestation` | Validates on-chain or IPFS-linked signatures | Attestation TX verification |

---

## 🧩 Adapter Types (Planned)

| Adapter | Chain Type | Status |
|----------|-------------|---------|
| `metal_adapter.py` | Metal / XPRNetwork | ✅ v0.1.2 implemented |
| `evm_adapter.py` | Ethereum / Polygon | 🚧 In planning |
| `cosmos_adapter.py` | Cosmos SDK | 🚧 Future version |
| `solana_adapter.py` | Solana | 🧠 Research stage |

---

## 🔍 Example Adapter Flow

1. Connect to blockchain RPC  
2. Query governance data (validators, DAO proposals, votes)  
3. Normalize to OCPS standard format  
4. Export data → `ocps-profile.yaml` or `ocps-certification.json`  
5. Pin to IPFS + record attestation on-chain  

```bash
python adapters/metal_adapter.py --export profiles/mydao.yaml

🧱 Developer Notes
	•	Each adapter should live inside /core/adapters/
	•	Codebase must follow modular imports:
from core.adapters import metal_adapter

•	Each adapter file must include:
	•	fetch_data()
	•	normalize_data()
	•	export_profile()
⸻
🪙 Cross-Chain Vision (v0.3–v1.0 Roadmap)

OCPS will evolve toward:
	•	Full Chain Agnostic Improvement Proposal (CAIP) compatibility
	•	Native EVM adapter for on-chain metadata discovery
	•	DAO profile certification on any supported blockchain
🧠 Goal: Every DAO — on every chain — can generate a transparent OCPS “nutrition label.”
