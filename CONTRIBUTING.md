# 🤝 Contributing to MoneyFusion Developer Docs

Thanks for your interest in contributing to **MoneyFusion Developer Docs**!  
We welcome contributions of all kinds — whether it's fixing typos, improving content, adding new documentation, or helping with translations.

---

## 📁 Project Structure

```
content/
└── docs/
    ├── en/      → English docs
    └── fr/      → French docs
```

Each `.mdx` file inside these folders represents a documentation page.

---

## 🛠️ Getting Started

### 1. Fork the Repository

Click the **"Fork"** button on the top right of the [repo page](https://github.com/sc-digital/docs.moneyfusion.net) to create your copy.

### 2. Clone Your Fork Locally

```bash
git clone https://github.com/YOUR_USERNAME/docs.moneyfusion.net.git
cd docs.moneyfusion.net
pnpm install
```

> We use [pnpm](https://pnpm.io/) as our package manager. Running `pnpm install` also installs the Git hooks (Husky) used to format your changes and check commit messages.

### 3. Create a Branch

```bash
git checkout -b feat/my-new-doc
```

### 4. Make Your Changes

Edit or create `.mdx` files in `content/docs/en/` or `content/docs/fr/`.

### 5. Start the Development Server

```bash
pnpm dev
```

Preview your changes at:

- [http://localhost:3000/en](http://localhost:3000/en)
- [http://localhost:3000/fr](http://localhost:3000/fr)

---

## 📝 Commit Message Conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org) specification. **Every commit message is checked automatically** before it is created.

The format is:

```
<type>(<optional scope>): <short description>
```

### Allowed types

| Type | Use it for |
| --- | --- |
| `feat` | A new feature or new documentation section |
| `fix` | A bug fix (content errors, broken links, wrong code samples, SEO…) |
| `docs` | Documentation-only changes |
| `style` | Formatting, whitespace, typos (no behavior change) |
| `refactor` | Rewriting content/structure without changing behavior |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `build` | Build system or dependencies |
| `ci` | CI/CD configuration |
| `chore` | Maintenance tasks that don't fit the categories above |
| `revert` | Reverting a previous commit |

### Examples

```bash
git commit -m "feat: add payout webhook guide"
git commit -m "fix(seo): correct canonical URL on the domain page"
git commit -m "docs(fr): update the PHP integration snippets"
git commit -m "chore(deps): upgrade fumadocs to the latest version"
git commit -m "fix(ui): align the page actions row"
```

Rules enforced by the hook:

- The `type` must be one of the list above and lowercase.
- A short description is required and must not end with a period.
- The first line must be **100 characters or fewer**.
- Use the imperative mood in the description ("add", not "added" or "adds").
- Optional `scope` is the affected area (`seo`, `ui`, `docs`, `fr`, `en`, `deps`, `i18n`, `llms`, …).
- For a breaking change, add a `BREAKING CHANGE:` footer in the commit body.

---

## ✅ Submitting a Pull Request

1. Push your branch:

```bash
git push origin feat/my-new-doc
```

2. Go to your fork on GitHub and click **"Compare & pull request"**.
3. Give the PR a [Conventional Commit](#-commit-message-conventions) style title (for example `feat: add payout webhook guide`) and describe your changes clearly.
4. Wait for review and feedback. We’ll get back to you as soon as possible!

---

## ✍️ Content Style Guide

- Use clear, concise, and simple language.
- Use proper Markdown formatting.
- Prefer `mdx` code blocks for code examples (with language tags like `js`, `ts`, `bash`).
- Avoid duplicate content.
- When adding new sections, update the corresponding file in both `en/` and `fr/` when possible.

---

## 🌐 Internationalization

We support the following languages:

- `en` — English
- `fr` — Français

If you're adding new content in one language, try to add the translated version too. If not, no worries — someone else may translate it later.

---

## 🧪 Tech Stack

- [Fumadocs](https://fumadocs.dev) — documentation framework
- [Next.js](https://nextjs.org) — App Router (using app directory)
- [Tailwind CSS](https://tailwindcss.com) — styling
- [MDX](https://mdxjs.com) — Markdown with JSX

---

## 💬 Questions?

Feel free to open an issue or start a discussion if you need help or have ideas.

---

## ❤️ Code of Conduct

Please be respectful and kind in all interactions. We strive to maintain a welcoming and inclusive environment for everyone.

---

Thank you for contributing! Let's build something amazing together 💜
