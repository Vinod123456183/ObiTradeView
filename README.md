# 💹 ObitradeView

**ObitradeView** is a modern and responsive cryptocurrency dashboard built with **React + Vite**, inspired by [Crypto Tokenizer Admin Dashboard](https://crypto-tokenizer-admin-dashboard.multipurposethemes.com/bs5/main/index13.html). This platform provides live crypto price tracking, coin insights, and a sleek user interface designed for fast performance and extendability.

![ObitradeView Screenshot 1](https://github.com/Vinod123456183/Coding_Resource/blob/main/Projects%20Images/ObitradeView/1.png)
![ObitradeView Screenshot 2](https://github.com/Vinod123456183/Coding_Resource/blob/main/Projects%20Images/ObitradeView/2.png)
![ObitradeView Screenshot 3](https://github.com/Vinod123456183/Coding_Resource/blob/main/Projects%20Images/ObitradeView/3.png)

---

## 🚀 Features

- 📊 Real-time cryptocurrency data  
- 🌐 Interactive dashboard with multiple views  
- 🧭 Breadcrumb navigation  
- 🔍 Coin detail pages  
- 📉 Auto-scrolling price sidebar  
- 🧠 Error boundary handling  
- 📱 Fully responsive design  
- 🎨 Built with Tailwind CSS for clean styling  
- ⚛️ Powered by React + Vite for blazing-fast performance  

---

## 🛠️ Tech Stack

| Tech           | Description                        |
|----------------|------------------------------------|
| React          | JavaScript library for UI          |
| Vite           | Next-gen build tool                |
| Tailwind CSS   | Utility-first CSS framework        |
| React Router   | Client-side routing                |
| CoinGecko API  | Live crypto data                   |
| Lucide Icons   | Clean SVG icons                    |

---

## 📁 Project Structure

```bash
ObitradeView/
│── public/                  # Static assets
│   └── favicon.ico
│
│── src/                     # Source code
│   ├── assets/              # Images, logos, etc.
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   └── AutoPriceBar.jsx
│   │
│   ├── pages/               # Main pages
│   │   ├── Dashboard.jsx
│   │   ├── CoinDetail.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/              # React Router setup
│   │   └── AppRouter.jsx
│   │
│   ├── context/             # Context API (React Query / Theme / Auth)
│   │   └── CoinContext.jsx
│   │
│   ├── styles/              # Tailwind + custom styles
│   │   └── index.css
│   │
│   ├── App.jsx              # Root React component
│   ├── main.jsx             # Vite entry point
│   └── api/                 # API integration
│       └── coinApi.js
│
│── .gitignore
│── package.json
│── vite.config.js
