# Contributing to OCPS

Thank you for your interest in contributing to the **Open-Source Community Profile Standard (OCPS)** for DAOs on the Metal Blockchain ecosystem!  
This guide will help you submit DAO profiles in a consistent, verifiable, and community-driven manner.

---

## Quick Links
- [OCPS README](./README.md)  
- [Sample DAO Profile](./profiles/sample_dao.yaml)  
- [Vision Doc](./docs/vision_doc.md)  
- [Public Explainer](./docs/public_explainer.md)  
- [Roadmap](./docs/v0.2_roadmap.md)  

---

## Contributor Checklist

### 1. Profile File
- [ ] Copy `sample_dao.yaml` from [`profiles/`](./profiles/).  
- [ ] Rename to your DAO’s name (e.g., `MyDAO.yaml`).  
- [ ] Fill in all required fields:  
  - `dao_name`  
  - `chain`  
  - `version`  
  - `created`  
  - `contributors`  
  - `governance` (model, token, supply, quorum, voting_period)  
  - `transparency` (IPFS CID, attestation_tx, attestor)  
  - `notes`  

### 2. Transparency & Verification
- [ ] Pin the profile to **IPFS** for verifiable decentralization snapshots.  
- [ ] Verify the **on-chain attestation** on the XPR Network:  
  - Ensure `attestor` matches your blockchain identity.  
  - Include OCPS version and IPFS CID in the memo.  

### 3. Visual Assets
- [ ] Include DAO Nutrition Labels if applicable.  
- [ ] Place visual files in `/visuals` with descriptive names.  
- [ ] Update the README or profile to reference the images.  

### 4. Documentation
- [ ] Ensure references to docs are accurate:  
  - Vision: `docs/vision_doc.md`  
  - Public Explainer: `docs/public_explainer.md`  
  - Roadmap: `docs/v0.2_roadmap.md`  

### 5. Pull Request Submission
- [ ] Create a PR to the main repo.  
- [ ] Title: `"Add [YourDAO] OCPS Profile"`  
- [ ] Ensure no YAML formatting errors.  
- [ ] Optional: Add a summary about your DAO and governance model.  

### 6. Final Review
- [ ] Confirm all badges and version info are current.  
- [ ] Validate IPFS CID links:  
  - [dweb.link](https://dweb.link/)  
  - [ipfs.io](https://ipfs.io/)  
- [ ] Ensure all fields match the OCPS v0.1.2 specification.  

---

Thank you for helping build **transparent and community-driven DAO profiles** for the Metal Blockchain ecosystem! 🚀
