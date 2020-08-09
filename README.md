# Tech Stack

_Frontend_: Vue.js (version 2)
Having tinkered around with React and Angular, neither compare to the ease and simplicity of Vue.js (can't wait for version 3!).

_Backend_: Node.js
Beside being most experienced in Javascript, the frontend is also built in it.
This makes it easier for both frontend and backend teams to understand the code base.

The backend also uses the Serverless framework as it was built around running on Lambda.
Lambda is perfect for this simple task in question as it is very cost effective and easy to manage.

# Running client & server locally

At the root of this project, you may run the following commands:

1. `npm install`
2. `npm run start`

The 2nd command will start both the `client` and `server` in parallel.
Alternatively, you made navigate into each (`client`/`server`) folder and execute the 2nd command.

_Frontend URL_: localhost:8080

_Backend URL_: localhost:3000/count

# Running unit tests

Navigate into `client`/`server` folder and execute either of the following commands:

1. `npm run test`
2. `npm run coverage`

_Frontend_:
One unit test exists (at the time of documentation). The test covers the Lambda handler being invoked without error, mocking all dependencies.

_Backend_:
One unit test exists (at the time of documentation). The test covers the Table.vue component, passing it props to render.
