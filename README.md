# Playwright Test Automation Template

<!-- Status -->
<h2 align="center"> 
	<b>Status</b>: In Progress... 🚧
</h2> 

<!-- Stats -->
<p align="center">
  <img alt="Test Status" src="https://github.com/yyeshchev96/playwright-test-automation-template/actions/workflows/playwright.yml/badge.svg?branch=main">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/yyeshchev96/playwright-test-automation-template">
  <img alt="License" src="https://img.shields.io/github/license/yyeshchev96/playwright-test-automation-template">
</p>

## About
The repo was created to help developers and software testers to quickly write UI/Acceptance tests using [Playwright](https://playwright.dev/) framework. 

## Prerequisites
- Node >= 14
- TypeScript

**Optional**
- [VSCode Extention](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [VSCode Extention Guide](https://playwright.dev/docs/getting-started-vscode)

## Installation

1. Using VSCode extention: `CMD+Shift+P` and run command `Install Playwright`

2. Using cli: `npm i`

## Running Tests

### Using VSCode
todo

### From CLI
Run all tests:

    npx playwright test

Specify number of workers (for parallel execution):

    npx playwright test --workers 4

## Reporting

Open report in browser:

    npx playwright show-report

## Useful Links
1. Getting Started: https://playwright.dev/docs/intro
2. Configuration file: https://playwright.dev/docs/test-configuration
3. Parallel Execution: https://playwright.dev/docs/test-parallel
