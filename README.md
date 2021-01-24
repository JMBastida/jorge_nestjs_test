# Jorge Nest Test

## Description

The product owner of an application needs to add a new feature to the platform. Several users claim for a time record system to handle their daily basis.
You need to build using NestJS a basic graphql API to manage time records. (Only backend)


## Rules

- The app needs to detect (without an API call) that the user is online to start recording the time. And if the user is offline, the app should stop recording the time.
- The app needs an endpoint to get the records between 2 dates from a user.

### Questions

  - How much time did you spend? (😱 real!! We would like to know if you can work under-pressure) 
  > About 3-4 hours, easy to find way to proceed but big trouble with moongose package 🤯 
  
  - Difficulties that you found in the task?
  > Not clear at all the description of the rules(Be creative!! 🎨) 🤣

  >I get in trouble using mongo because using "moongose" package... not used to using this package, I use npm i mongodb

  > Rusty with graphql structurinng. 

  > I've started with SSE (event source) but then i realise i need a ping call when client app inits so the WebSocket was more adapted to the rule however a simple ping or the mentioned SSE is way better

### License

Nest is [MIT licensed](LICENSE).
