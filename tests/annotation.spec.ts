// Annotation - 
/*
test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.

test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.

test.slow() marks the test as slow and triples the test timeout.

test.only() - It will execute the test cases which have been marked with test.only()


test.describe() - 

test.step("Step for the test case")

test.describe.configure() - This will configure the timeout/mode/retries at the file level


// tags - smoke, regression 

// To Run Only smoke Test cases - npx playwright test --grep @smoke

// To Run Only regression Test cases - npx playwright test --grep @regression
// from pakage.json - npm run test:regreesion
*/