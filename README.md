# Express Apollo Prisma Boilerplate

Basic starter for a modern GraphQL backend. Powered by Express, Apollo and Prisma.

## Installation

- clone this repository to your local machine

```bash
git clone https://github.com/benjaminadk/graphql-server-boilerplate.git
```

- install dependencies

```bash
cd graphql-server-boilerplate
npm install
```

- download the Prisma CLI

```bash
npm install prisma -g
```

## Usage

```bash
npm run dev
```

- GraphQL Playground will be availble at `http://localhost:$PORT/graphql`
- Make sure `"request.credentials": "include"` is in your Playground Settings

## NPM Scripts

- Any script with the prefix `db` can also be done via _Prisma CLI_

|   Script    |                 Description                 |
| :---------: | :-----------------------------------------: |
|   `start`   |         Start server in production          |
|    `dev`    |         Start server in development         |
|  `db:drop`  |     Deletes all data in Prisma database     |
| `db:deploy` | Updates Prisma datamodel & generates schema |

## Environment Variables

- Create a `.env` at the project root with the following keys

```
// example
ADMIN_EMAIL="example@gmail.com"
```

|      Name       |            Description            |
| :-------------: | :-------------------------------: |
|   ADMIN_EMAIL   |        Your email address         |
|   ADMIN_PASS    |    Your password for this app     |
|   EMAIL_HOST    |          SMTP Email Host          |
|   EMAIL_PASS    |       Email client password       |
|   EMAIL_USER    |       Email client username       |
|    FRONTEND     |          URL of frontend          |
|      PORT       |   Express listens on this port    |
| PRISMA_ENDPOINT |     HTTP endpoint for Prisma      |
|  PRISMA_SECRET  | Security for your Prisma endpoint |
|  PRISMA_TOKEN   |   Used to authenticate seeding    |
| SESSION_SECRET  |    Security for session cookie    |
