# 🎯 Double Word – Educational Digital Dobble

An educational “doubles” game that supports early reading skills by pairing **words with visual images**.  
Designed to help learners — including **dyslexic readers** — recognize patterns, strengthen decoding, and build rapid word–image association.

---

## 📋 Overview

Double Word adapts the classic **Dobble / Spot It!** mechanic to literacy practice:  
- Each card shows **8 items**.  
- Exactly **one word–image pair** is common to any two cards.  
- Cards are shuffled using the **Fisher–Yates algorithm** for fairness.  
- The UI uses **event-driven updates** and **dynamic DOM rendering** for a smooth experience.  

---

## 🎮 How to Play

1. Two cards appear, each with 8 items (mix of words and images).  
2. Find the **single matching word–image pair** across both cards.  
3. Correct match → **+5 points** · Wrong guess → **–1 point**.  
4. A new round starts automatically every **90 seconds**.  

---

## 🌟 Key Features

- 📖 **Literacy-focused gameplay**: strengthens word recognition via immediate word–image association.  
- ♿ **Accessible by design**: dyslexia-friendly font, adjustable contrast & font size, keyboard navigation, reduced-motion mode.  
- 📱 **Responsive UI**: works seamlessly on desktop & mobile.  
- 🏆 **Progress tracking**: score & high score saved with LocalStorage.  
- 🎯 **Multiple difficulty levels** to scale challenge.  

---

## 🚀 Getting Started

1. **Clone the repository**  
   ```bash
   git clone [repository-url]
   cd double-word
