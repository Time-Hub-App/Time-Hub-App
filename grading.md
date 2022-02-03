## Time Hub Grading Notes

- Signup function isn't working -- its requiring a username which isn't being tracked in the form or passed from the component
- The header state is a little confusing -- i think ideally it would show more clearly when you are logged in and when you aren't
  - remove the journals link when you're logged out
  - remove the login link when you're logged in
- Had to deduct some points for tests - some of them are logging after the test is done which means you're not awaiting the async content to load on the page
- Your JournalList component is using a useEffect - move that to the Container component to make sure JournalList remains presentational

| Rubric                                                                    | Deduction |
| ------------------------------------------------------------------------- | --------- |
| Users must be able to sign in and sign up                                 | -2        |
| Uses react components to "compose" the UI and follows data-down/events-up | -1        |
| Clear separation of container and presentational components               | -1        |
| Snapshot tests for all components                                         | -5        |
| Works as intended with no bugs                                            | -1        |

**Total Points: 140 / 150**
