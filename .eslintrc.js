module.exports = {
    env: {
      node: true,
      browser: true,
      es2020: true,
      jest: true,
    },
    extends: [],
    settings: {},
    globals: {},
    rules: {},
    parserOptions: {
        "sourceType": "module",
    },
    parser: '@typescript-eslint/parser',
    overrides: [
      {
        files: ['*.test.ts', '*.test.tsx'],
        plugins: ['jest'],
        extends: ['plugin:jest/recommended'],
        rules: {
          'jest/consistent-test-it': ['error', { fn: 'it' }],
          'jest/expect-expect': 'error',
          'jest/max-expects': ['error', { max: 3 }],
          'jest/max-nested-describe': ['error', { max: 3 }],
          'jest/no-commented-out-tests': 'error',
          'jest/no-conditional-in-test': 'error',
          'jest/no-disabled-tests': 'error',
          'jest/no-duplicate-hooks': 'error',
          'jest/no-hooks': 'off', // we do allow hooks
          'jest/no-if': 'error',
          'jest/no-large-snapshots': 'error',
          'jest/no-restricted-jest-methods': 'error',
          'jest/no-restricted-matchers': 'error',
          'jest/no-test-return-statement': 'error',
          'jest/prefer-called-with': 'off', // we prefer to not use alias methods
          'jest/prefer-comparison-matcher': 'error',
          'jest/prefer-each': 'error',
          'jest/prefer-equality-matcher': 'error',
          'jest/prefer-expect-assertions': 'off', // we do not prefer use of expected assertions
          'jest/prefer-expect-resolves': 'off', // TODO: to be enabled soon
          'jest/prefer-hooks-in-order': 'error',
          'jest/prefer-hooks-on-top': 'error',
          'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
          'jest/prefer-mock-promise-shorthand': 'error',
          'jest/prefer-snapshot-hint': 'error',
          'jest/prefer-spy-on': 'off', // we do not prefer use of spyOn
          'jest/prefer-strict-equal': 'off', // we do not prefer strict equal
          'jest/prefer-to-be': 'error',
          'jest/prefer-to-contain': 'error',
          'jest/prefer-to-have-length': 'error',
          'jest/prefer-todo': 'error',
          'jest/require-hook': 'error',
          'jest/require-to-throw-message': 'error',
          'jest/require-top-level-describe': 'error',
          'jest/valid-describe-callback': 'error',
          'jest/valid-expect': 'error',
          'jest/valid-expect-in-promise': 'error',
          'jest/valid-title': [
            'error',
            {
              disallowedWords: ['a', 'an', 'the', 'you', 'your', 'I', 'my', 'should'],
              mustMatch: {
                it: [
                  /^[^ ]+s /.source,
                  'test names should have at least two words and start with verbs that end with the letter s (e.g., disables, accepts, shows)',
                ],
              },
            },
          ],
        },
      },
      {
        files: ['*.test.tsx'],
        plugins: ['testing-library'],
        extends: ['plugin:testing-library/react'],
        rules: {
          'testing-library/await-async-query': 'error',
          'testing-library/await-async-utils': 'error',
          'testing-library/await-fire-event': 'off', // not relevant for React Testing Library
          'testing-library/consistent-data-testid': ['error', { testIdPattern: '.+', testIdAttribute: ['data-testid'] }],
          'testing-library/no-await-sync-events': ['error', { eventModules: ['fire-event'] }],
          'testing-library/no-await-sync-query': 'error',
          'testing-library/no-container': 'error',
          'testing-library/no-debugging-utils': 'error',
          'testing-library/no-dom-import': 'error',
          'testing-library/no-global-regexp-flag-in-query': 'error',
          'testing-library/no-manual-cleanup': 'error',
          'testing-library/no-node-access': 'error',
          'testing-library/no-promise-in-fire-event': 'error',
          'testing-library/no-render-in-setup': 'error',
          'testing-library/no-unnecessary-act': 'error',
          'testing-library/no-wait-for-empty-callback': 'error',
          'testing-library/no-wait-for-multiple-assertions': 'error',
          'testing-library/no-wait-for-side-effects': 'error',
          'testing-library/no-wait-for-snapshot': 'error',
          'testing-library/prefer-explicit-assert': 'error',
          'testing-library/prefer-find-by': 'error',
          'testing-library/prefer-presence-queries': 'error',
          'testing-library/prefer-query-by-disappearance': 'error',
          'testing-library/prefer-screen-queries': 'error',
          'testing-library/prefer-user-event': 'error',
          'testing-library/prefer-wait-for': 'error',
          'testing-library/render-result-naming-convention': 'error',
        },
      },
    ],
  };
  
