export const resolveCSSSelector = (selector: string, testId: string) => {
  if (/getByTestId\(.+\)/.test(selector)) {
    return selector
      .replace('getByTestId(', '*[' + testId + '=')
      .replace(')', ']');
  }

  if (/getByText\(.+\)/.test(selector)) {
    return selector.replace('getByText(', 'text=').replace(')', '');
  }

  throw new Error(
    `Selector '${selector}' isn't supported by Library due to limitations outside of Playwright`
  );
};
