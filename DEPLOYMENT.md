# 🚀 Sync.co Deployment Guide

Welcome to the deployment guide for **Sync.co** — *Where Innovation Finds Rhythm.*

This document helps contributors, developers, and collaborators deploy the project seamlessly to **Netlify**.

---

## 🧠 Tech Overview

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Deployment Platform:** Netlify
- **Node Version:** 18.x
- **NPM Version:** 11.6.1

---

## 🌍 1. Deploying for the First Time

If you are the maintainer or deploying Sync.co for the first time:

1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Click **“Add new site → Import an existing project”**
3. Choose **GitHub** as your source
4. Select your **sync-co** repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click **Deploy site**

✅ That’s it — your project will be live in a few minutes at  
**https://sync-co.netlify.app** (or your custom domain).

---

## 🔁 2. Continuous Deployment (Auto Updates)

Once connected, Netlify automatically redeploys whenever you:

```bash
git add .
git commit -m "update landing page"
git push origin main
