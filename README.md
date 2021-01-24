# Jorge Nest Test

## Description

The product owner of an application needs to add a new feature to the platform. Several users claim for a time record system to handle their daily basis.
You need to build using NestJS a basic graphql API to manage time records. (Only backend)


## Rules

- The app needs to detect (without an API call) that the user is online to start recording the time. And if the user is offline, the app should stop recording the time.
- The app needs an endpoint to get the records between 2 dates from a user.

### Questions

  - How much time did you spend? (😱 real!! We would like to know if you can work under-pressure) 
  > About 3 hours, I've needed to think well how to proceed, the first rule was the problematic one.
  - Difficulties that you found in the task?
  > Not clear at all the description of the rules(Be creative!! 🎨) 🤣

  > Tons of ways of structuring the project, basic way is not the one im not use to.

  > Choosing WebSockets instead of SSE (event source) because finally the last one need an starting "get" when client app inits so the WebSocket was more adapted to the rule however a simple ping or the mentioned SSE is way better

### License

Nest is [MIT licensed](LICENSE).
