// Enforces the Conventional Commits specification.
// See https://www.conventionalcommits.org and CONTRIBUTING.md.
export default {
  extends: ["@commitlint/config-conventional"],
  helpUrl:
    "https://github.com/SC-DIGITAL/docs.moneyfusion.net/blob/main/CONTRIBUTING.md#-commit-message-conventions",
  rules: {
    // Long URLs in bodies/footers shouldn't block a commit.
    "body-max-line-length": [1, "always", 200],
    "footer-max-line-length": [1, "always", 200],
  },
};
