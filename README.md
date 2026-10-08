# Simple Calculator

A clean, beginner-friendly calculator built with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Features

- Addition, subtraction, multiplication and division
- Chained operations (e.g. `2 + 3 × 4`)
- Decimal numbers, clear (`C`) and delete (`⌫`)
- Divide-by-zero handling and floating-point rounding
- Keyboard support: digits, `+ - * /`, `Enter`, `Backspace`, `Esc`
- Responsive layout with automatic light/dark theme

## Project structure

```
simple-calculator/
├── index.html   # structure: display and buttons
├── style.css    # layout and design (CSS Grid, theme variables)
├── script.js    # logic: state, operators, calculate()
├── README.md
├── LICENSE
└── .gitignore
```

## Run it

Open `index.html` in any browser. That's it.

## Publish with GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your calculator goes live at `https://<your-username>.github.io/<repo-name>/`.

## What it teaches

- **HTML** builds the page structure with `data-*` attributes on buttons.
- **CSS** styles it with Grid, custom properties and media queries.
- **JavaScript** handles events and keeps state (`current`, `previous`, `operator`).

## License

MIT, see [LICENSE](LICENSE).
