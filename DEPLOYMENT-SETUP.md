# Firebase Automatic Deployment Setup

Your repository is now configured for automatic deployments to **nordic-pro.org** via GitHub Actions!

## ⚠️ One-Time Setup Required

You need to add a Firebase service account to GitHub Secrets. Follow these steps:

### Step 1: Generate Firebase Service Account

From your local terminal where you have Firebase CLI installed and authenticated:

```bash
firebase login:ci
```

This will output a token. **Copy this token.**

### Step 2: Add Secret to GitHub

1. Go to: https://github.com/adriwilson04/Nordic-Pro-Web/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `FIREBASE_SERVICE_ACCOUNT_NORDIC_PRO`
4. Value: Paste the token from Step 1
5. Click **"Add secret"**

### Step 3: Trigger Deployment

Once the secret is added, push any commit to `main` and it will automatically deploy to nordic-pro.org!

Or manually trigger the workflow:
```bash
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

---

## ✅ What's Already Set Up

- ✅ Firebase configuration files (`firebase.json`, `.firebaserc`)
- ✅ GitHub Actions workflow (`.github/workflows/firebase-deploy.yml`)
- ✅ Max Auhagen's profile with photo ready to deploy
- ✅ Project ID: `nordic-pro`

## 🚀 After Setup

Every push to `main` will automatically deploy to:
**https://nordic-pro.org**

No manual `firebase deploy` commands needed!
