# Quick Start: Push to GitHub

## Step 1: Extract the File

Extract `ftu-trips-for-github.tar.gz`:

**Mac/Linux:**
```bash
tar -xzf ftu-trips-for-github.tar.gz
cd ftu-trips-clean
```

**Windows:**
- Use 7-Zip or WinRAR to extract
- Navigate to the `ftu-trips-clean` folder

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ftu-trips`
3. Choose Private or Public
4. **DO NOT** check "Initialize with README"
5. Click "Create repository"

## Step 3: Push to GitHub

Open Terminal/Command Prompt in the `ftu-trips-clean` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: FTU Trips website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ftu-trips.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Verify

Go to `https://github.com/YOUR_USERNAME/ftu-trips` to see your code!

## Next Steps

### Run Locally

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000`

### Deploy

Connect your GitHub repo to:
- **Vercel**: https://vercel.com (Recommended)
- **Netlify**: https://netlify.com
- **Manus**: Click "Publish" in the Management UI

## Need Help?

If you get authentication errors:
1. Generate a Personal Access Token: https://github.com/settings/tokens
2. Use it as your password when pushing

---

**That's it! Your website is now on GitHub.**
