# exercise 1

- Used tailwindcss for styling
- Created a basic responsive layout with header / main / footer
- Created basic responsiveness in header: below a small breakpoint, search is rendered below logo
- Added some a11y best practices in the search box
- Autofocus in search field on page load
- Tests don't make much sense yet at this stage, but you can unit test with `npm run coverage`, thresholds set to 80/80/80/80 percent


# exercise 2

- Added focus state
- Created a clear icon, making the search a controlled component
- Added basic transitioning of "focus" styles
- Created unit test for clear button/logic

# exercise 3

- Created API
- Added debounce for searching
- Retrieve search results, feed them to "dumb" UI component
- Highlight seach term (current state: only first occurence is highlighted)
- Mocked unit test for search mechanism
- Basic keyboard navigation for search results

# exercise 4

- Fixed Storybook installation
- Added component to Storybook (incomplete)


# summary

This exercise was timeboxed at 4 hours, including freshening up on my React knowledge. I tried to find the best solutions, with the right complexity for the provided requirements.

If I would spend more time, I would have added some of the following:

- routing
- state management
- better Storybook integration
- loading state
- (more) accessibility 

Other improvements, that might have been a bit overkill here

- system/e2e tests
- introducing a view model, not having backend API "leak" into low level components
- using tokens from a design system
- translations / i18n
- server side rendering
- mono repo with automatic versioning / publishing / module boundaries / shared code
- ESLint
- CI pipeline