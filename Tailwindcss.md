Summarizing the Tailwind CSS installation steps. Checking the current setup:


[3 tools called]


## Step-by-Step Guide: Installing Tailwind CSS v4 in Vite + React

### Step 1: Install Tailwind CSS and dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
```

### Step 2: Install the PostCSS plugin (required for Tailwind v4)
```bash
npm install -D @tailwindcss/postcss
```

### Step 3: Create PostCSS configuration file
Create `postcss.config.js` in the project root (same level as `package.json`):

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### Step 4: Add Tailwind import to your CSS file
In your main CSS file (e.g., `src/index.css`), add the Tailwind import at the top:

```css
@import "tailwindcss";
```

### Step 5: Restart your development server
```bash
npm run dev
```

---

## Summary of files modified/created:

1. `package.json` — Added dependencies:
   - `tailwindcss`
   - `@tailwindcss/postcss`
   - `postcss`
   - `autoprefixer`

2. `postcss.config.js` — Created with PostCSS plugin configuration

3. `src/index.css` — Added `@import "tailwindcss";` at the top

---

## Testing Tailwind CSS

Add Tailwind classes to verify it's working:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Tailwind is working!
</div>
```

That's it. Tailwind CSS should now be working in your project.