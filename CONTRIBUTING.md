# Contributing

Thank you for your valuable contribution and dedication to improving this project! We greatly appreciate your involvement. To ensure a smooth and cohesive collaboration, we have provided some guidelines to help you get started. Kindly take a moment to review them before submitting your contributions. Your efforts will undoubtedly make this project even better, and we look forward to working together on its success!.

## Code of Conduct

This project is governed by the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to adhere to it.

## Open Development

All work happens directly on `GitHub`. Both core team members and external contributors send pull requests which go through the same `code review` process.

## Semantic Versioning

This project follows semantic versioning. We release patch versions for bug fixes or other changes that do not change the behavior of the API, minor versions for new features that are backward-compatible, and major versions for any breaking changes.

Every significant change is documented in the changelog file.

## Reporting Issues

Welcome to Windi UI! We value your feedback and contributions to make this project better. If you encounter any bugs or have feature requests, please use [Github issues](https://github.com/nuxt-ui-vue/nuxt-ui-vue/issues) issues to submit them.

Before reporting an issue, we ask you to:

1. `Search for Similar Issues` : Ensure you have searched through our existing issues to see if the problem or feature request has already been addressed or is under discussion.

2. `Reproduce the Bug` : If reporting a bug, please provide the minimum code required to reproduce the issue. This will help us understand and resolve the problem more efficiently.

3. `Describe Feature Requests` : For feature requests, please describe the desired functionality and any additional context that might be helpful.

Your participation and attention to these guidelines will help us maintain a more organized and effective development process.

## Sending a pull request

1. Fork [the repository](https://github.com/nuxt-ui-vue/nuxt-ui-vue)，and create your branch from `main`. For new feature, please submit your changes directly to the `feature` branch. Other changes should go against `main` branch.
2. Use `pnpm install` install the dependencies
3. Use `pnpm run dev` start project, RUN `pnpm run play` start the `playground`, RUN `pnpm run docs` to write docs, usually a dev server and document server can be debugged.
4. Make changes to the codebase. Please add `tests` if applicable.
5. Make sure the test suite passes with `pnpm run test`.
6. Use `pnpm run test:ci` to RUN `CI` tests before you commit your code.
8. Commit your changes, adhering to the [Commit Guidelines](#commit-guidelines).
9. Open a new pull request, [referencing corresponding issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) if available.

## Commit Guidelines

Commit messages are required to follow the [conventional-changelog standard](https://www.conventionalcommits.org/en/v1.0.0/):

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

👉 [Commit example](https://github.com/unocss/unocss/releases/tag/v0.39.0)

### Commit types

The following is a list of commit types:

### Commit Types:

- `feat`: Adding a new UI component or significant functionality to the library. Examples:
  - Added a new dropdown menu component.
  - Implemented a dark mode feature for all components.

- `fix`: Addressing bugs or issues in existing UI components. Examples:
  - Fixed misalignment in the button component.
  - Resolved an issue with the modal not closing correctly.

- `docs`: Commits related to documentation changes for Windi UI components. Examples:
  - Updated usage examples in the README for the carousel component.
  - Added API documentation for the accordion component.

- `style`: Commits related to code formatting, styling, or theming of UI components. Examples:
  - Improved button styles for better consistency across browsers.
  - Updated color palette for a more cohesive design.

- `refactor`: Code changes that enhance the library's structure without introducing new features or fixing bugs. Examples:
  - Reorganized folder structure for better modularity.
  - Simplified the logic in a component to improve maintainability.

- `perf`: Commits aimed at improving performance for UI components. Examples:
  - Optimized rendering logic in the data table component.
  - Reduced the size of assets for faster loading times.

- `test`: Commits related to testing Windi UI components. Examples:
  - Added unit tests for the accordion component to ensure functionality.
  - Fixed failing test cases for the dropdown menu.

- `chore`: Other commits not affecting source or test files directly. Examples:
  - Updated third-party dependencies in package.json.
  - Ignored build output in .gitignore.


## NuxtLabs UI Vue Repository Structure

This repository is managed by `pnpm` and includes the following packages：

1. `nuxt-ui-vue`: Main UI component library for Vue

## License

By contributing your code to the repository, you agree to license your contribution under the [MIT license](./LICENSE).