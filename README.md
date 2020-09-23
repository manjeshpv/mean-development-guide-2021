# mean-development-guide-2021

# Tools of Trade
- Start with github
- Installling Git
- Installing WebStorm

# Folder structure
- start with a console.log(‘hello world’);
- run with res.json({ message: “hello world” })
- Using webstorm for nodejs backend projects
- .ediorconfig
- Unhandled errors and rejections
- ES6
- Typescript
- ts-node-dev
- request-promise
- express-middlewares & config/express.js
- routes.js & Modularity with express routers
- components folder
- eslint 6.8.0
- using dotenv for environment file
- Inspired by generator-angular-fullstack developed by Google, Yeoman

# Writing First Test Case
- mocha spec file for unit tests
- unit tests vs integration test vs api tests
- mocha service.spec.js for functional tests
- mocha controller.spec.js for express api tests with supertest
- nyc for test coverage
- devDependencies vs Dependecies
- what is package-lock.json
- using scripts section in package json
- what is license
- nodemon for restarting as soon code changes
- how webstorm save developer time with autosave feature and nodemon restart the code
- browsersync vs livereload

# Writing first controller
- REST Api standards
- sinatra standards from naming functions in controller
- service.js for functions with async and not using req, res objects
- unit.js for simple javascript without async
- Promise vs Async

# Keeping the code clean
- eslint – global module
- eslint local devDependency
- eslintrc file
- airbnb
- es6 vs normal javascript

# Dealing with databases
- mysql2
- sequelize orm
- migrations
- seeding
- .sequelizerc
- Sequelize best practices

# Crons & Scheduled Jobs
- Do not run email/notifications crons on midnight
- cron vs ttl events
- best and worst delay with crons, achieving realtime processing with websockets using redis kue, rabbitmq
- cron over code vs http api
- how nginx logs help to monitor and improve performance of cron jobs
- Cron job performance issues & Dividing long running cron jobs
- cron job boot up time vs api based crons without per request boot
- using amazon sns for cron jobs
- unifying cron jobs with event processing
- keeping log of failed cron jobs and get alerts to debug, fix and rerun
- gronit vs cron logs with cron

# Monitoring
- API response time with simple-api-response-logger
- Runtime errors with Sentry
- Logging with winston
- Logging cron executions time metrics

# Performance at Production
- Disable logs as much as possible in production
- use PM2
- Pm2 cluster mode & scaling with pm2

# Integrations
- building webhooks with node-webhooks
- lambda

# Interact with servers/services using you own npm modules
- creating your first npm package
- npm package for easy integrations
- nodejs developers feel using npm module is easy. compared to reading api documentation
- Example: Your marketing-server(website) creates a lead in sales-server(lead management system) – instead of sharing a common db

# Socket.io for comments/chats – Realtime
- eventlistners
- socketio client for angular
- socket io config with express
- enabling websocket support in nginx

# Pull Request Reviews
- Write github issues link or asana task link in github commit
- codecov for code coverage
- drone for running tests and submitting report to codecov
- in memory db to improve test run performance
- sinon to stub integrations tests
- nyc & istanbul for test coverage
- precommit-hook to run basic quality checks before commit & eslint

# Easy Deployement with CapRover
- captain-definition file
- create a app in caprover
- adding caprover link to github webhooks for autodeploy on gith push

# Staging Environment for Product and Business Teams to test
- staging prefix for servers
- avoiding production data in staging to avoid hacks

# UI
- Integrate your angular project with OAuth 2.0

# UX
- [Metronic](https://keenthemes.com/metronic/)

# Documentation
- Asana
- Github Markdown/Github Pages
