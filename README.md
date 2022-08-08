# Author comment

I have spent around 8 hours to finish this task. I used variant of Weltz's algorithm with radomization which run in expected Θ(n) (linear) time. I based my implementation on implementation from [Project Nayuki](https://www.nayuki.io/page/smallest-enclosing-circle). I aimed on code structuring, responsivity and code test coverage (unit and e2e tests). Implementation could be improved by allowing user to interactively move and choose points.

# Smallest circle problem
## The task
Create an app with the latest React. The app should have an text input and a button. The button will be disabled when text input is empty. Clicking on the button will show a window with result of Smallest circle problem for inputed number of points in input (style it as a dialog/modal window), clicking outside of the window will close this window.

## How to run test

* `npm test` - unit tests
* `npm run lint` - ESLint tests
* `npm run type-check` - TypeScript tests
* `npm run fulltest` - all tests above
* `npm run e2e-open` - e2e tests in browser
* `npm run e2e-run` - e2e tests in CLI
