# exercise 1

- Used tailwindcss for styling
- Created a basic responsive layout with header / main / footer
- Created basic responsiveness in header: below a small breakpoint, search is rendered below logo
- Added some a11y best practices in the search box
- Autofocus in search field on page load
- Tests don't make sense yet at this stage, but you can unit test with `npm run coverage`, thresholds set to 80/80/80/80 percent


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
