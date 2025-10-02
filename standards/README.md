# 🧩 OCPS Standards Alignment

The **OpenChain Profile Standard (OCPS)** aligns with the broader movement for **chain-agnostic DAO transparency** and open data certification.

---

## 🌍 Standards Referenced

### 1. [EIP-4824](https://eips.ethereum.org/EIPS/eip-4824)
Defines a `dao://` URI scheme for discovering DAO metadata.

- OCPS builds *on top* of this by defining *what metrics* DAOs should disclose.
- EIP-4824 focuses on *where* metadata lives; OCPS focuses on *what* data matters.
- Together, they enable cross-chain transparency and discoverability.

---

### 2. [CAIP – Chain Agnostic Improvement Proposals](https://github.com/ChainAgnostic/CAIPs)
CAIPs standardize identifiers and interfaces across chains (e.g., wallet IDs, chain IDs).

- OCPS references **CAIP-2 (Chain IDs)** and **CAIP-10 (Account References)**.
- Future OCPS versions will implement these IDs directly in DAO profile structures.

---

### 3. [Metal Blockchain Ecosystem Alignment]
Metal provides a Layer-0 foundation (Avalanche consensus) and XPR Network integration for OCPS’s first on-chain attestations.

- The Metal-based pilot demonstrates the **DAO certification workflow**.
- OCPS remains **modular** and **chain-agnostic**, allowing easy expansion to Ethereum, Solana, or Cosmos networks.

---

## 📖 Future Standardization Goals

- Add JSON-LD export for cross-chain discoverability.
- Adopt [CAIP-122: Cross-chain Messaging] once finalized.
- Support DID-based identity for DAO verification.
- Integrate with existing DAO metadata schemas (e.g., Aragon, Snapshot).

---

### ✳️ TL;DR

OCPS =  
**DAO Transparency Schema (OCPS YAML / JSON)**  
+ **EIP-4824 discoverability**  
+ **CAIP identifiers**  
+ **On-chain attestations**  

→ **Chain-agnostic DAO certification for Web3 transparency.**
