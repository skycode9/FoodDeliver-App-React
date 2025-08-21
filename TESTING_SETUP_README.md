# React Testing Setup Guide - Step by Step

This guide provides a complete step-by-step process to set up testing in your React project. Follow each step one by one.

## Prerequisites
- Node.js must be installed
- React project already created (with Vite)

---

## Step 1: Install Vitest (Testing Framework)

First, install the main testing framework:

```bash
npm install --save-dev vitest
```

**What is Vitest:**
- Modern testing framework (alternative to Jest)
- Fast and lightweight
- Built for Vite projects

**✅ Complete Step 1 before moving to Step 2**

---

## Step 2: Install React Testing Library

Install the React testing utilities:

```bash
npm install --save-dev @testing-library/react
```

**What is React Testing Library:**
- Provides utilities to test React components
- Renders components in test environment
- Queries DOM elements for testing

**✅ Complete Step 2 before moving to Step 3**

---

## Step 3: Install Jest-DOM Matchers

Install additional testing matchers:

```bash
npm install --save-dev @testing-library/jest-dom
```

**What is Jest-DOM:**
- Provides extra matchers like `toBeInTheDocument()`
- Makes assertions more readable
- Extends testing capabilities

**✅ Complete Step 3 before moving to Step 4**

---

## Step 4: Install DOM Testing Utilities

Install DOM testing support:

```bash
npm install --save-dev @testing-library/dom
```

**What is DOM Testing Library:**
- Core DOM testing utilities
- Foundation for React Testing Library
- Provides DOM querying methods

**✅ Complete Step 4 before moving to Step 5**

---

## Step 5: Install JSDOM (Browser Environment)

Install browser environment simulator:

```bash
npm install --save-dev jsdom
```

**What is JSDOM:**
- Simulates browser environment in Node.js
- Provides DOM APIs for testing
- Required for React component testing

**✅ Complete Step 5 before moving to Step 6**

---

## Step 6: Add Test Scripts to Package.json

Add test scripts to your `package.json` file in the scripts section:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

**What we're adding:**
- `test` script to run tests
- `test:ui` script for visual testing interface

**✅ Complete Step 6 before moving to Step 7**

---

## Step 7: Create Vitest Configuration File

Create `vitest.config.js` file in your project root:

```javascript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
```

**Configuration explanation:**
- `globals: true` - Makes describe, it, expect globally available
- `environment: "jsdom"` - Simulates browser environment
- `setupFiles` - Path to test setup file

**✅ Complete Step 7 before moving to Step 8**

---

## Step 8: Create Setup Tests File

Create `src/setupTests.js` file:

```javascript
import "@testing-library/jest-dom";
```

**What this does:**
- Makes Jest-DOM matchers globally available
- Provides matchers like `toBeInTheDocument()`, `toHaveClass()`
- Sets up testing environment

**✅ Complete Step 8 before moving to Step 9**

---

## Step 9: Create Sample Component (For Testing)

Create `src/components/Hello.jsx` file:

```jsx
import React from "react";

const Hello = () => {
  return <h1>Hello, Vitest!</h1>;
};

export default Hello;
```

**Important Points:**
- React import is required when using JSX
- Simple component for testing purposes
- Make sure components folder exists

**✅ Complete Step 9 before moving to Step 10**

---

## Step 10: Create Test File

Create `src/components/Hello.test.jsx` file:

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("renders Hello component", () => {
  render(<Hello />);
  expect(screen.getByText("Hello, Vitest!")).toBeInTheDocument();
});
```

**Test breakdown:**
- `render(<Hello />)` - Renders component in test DOM
- `screen.getByText()` - Finds text in the DOM
- `toBeInTheDocument()` - Checks if element exists in DOM

**✅ Complete Step 10 before moving to Step 11**

---

## Step 11: Run Your First Test

Now you can run your test:

```bash
npm test
```

**Expected Output:**
```
✓ src/components/Hello.test.jsx (1 test | 1 passed)
  ✓ renders Hello component

Test Files  1 passed (1)
     Tests  1 passed (1)
```

**✅ Step 11 Complete - Testing Setup is Done!**

---

## Common Issues & Solutions

### Issue 1: "React is not defined"
**Solution:** Import React in both component and test files:
```jsx
import React from "react";
```

### Issue 2: "toBeInTheDocument is not a function"
**Solution:** Check your setupTests.js file:
```javascript
import "@testing-library/jest-dom";
```

### Issue 3: Test script not found
**Solution:** Add test script to package.json:
```json
"test": "vitest"
```

---

## Next Steps - More Advanced Testing

### 1. Testing User Interactions
```jsx
import { fireEvent } from "@testing-library/react";

test("button click test", () => {
  render(<MyButton />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  // assertions...
});
```

### 2. Testing Props
```jsx
test("component with props", () => {
  render(<Greeting name="Sky" />);
  expect(screen.getByText("Hello, Sky!")).toBeInTheDocument();
});
```

### 3. Testing State Changes
```jsx
test("state changes", () => {
  render(<Counter />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

---

## File Structure After Setup

```
src/
├── components/
│   ├── Hello.jsx
│   └── Hello.test.jsx
├── setupTests.js
└── ...other files

Root/
├── vitest.config.js
├── package.json
└── ...other files
```

---

## Commands Summary

```bash
# Install dependencies (one by one as shown in steps 1-5)
npm install --save-dev vitest
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/dom
npm install --save-dev jsdom

# Run tests
npm test

# Run tests in UI mode
npm run test:ui

# Test specific file
npx vitest src/components/Hello.test.jsx
```

**🎉 Congratulations! Your React Testing Setup is Complete!**
