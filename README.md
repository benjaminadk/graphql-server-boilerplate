# Express Apollo Prisma Boilerplate

Basic starter for a modern GraphQL backend. Powered by Express, Apollo and Prisma.

## Features

- Sign Up
- Sign In
- Sign Out
- Twitter OAuth
- Email Verification
- Forgot Password
- Cookies
- Authentication
- Permission System
- Rate Limiting
- Account Locking
- Datebase Seeding

## Installation

- Clone this repository to your local machine

```bash
git clone https://github.com/benjaminadk/graphql-server-boilerplate.git
```

- Install dependencies

```bash
cd graphql-server-boilerplate
npm install
```

## Prisma

Download the Prisma CLI

```bash
npm install prisma -g
```

Create a [Prisma Server](https://www.prisma.io/docs/prisma-server/) for development

## Redis

- Install and run [Redis](https://redis.io)

## Twitter OAuth

- To utilize optional OAuth a [Twitter Developer](https://developer.twitter.com/) account and project is needed

## Environment Variables

Create a `.env` at the project root with these [Environment Variables](#environment-variables)

```
// example
ADMIN_EMAIL="example@gmail.com"
```

|          Name           |            Description            |
| :---------------------: | :-------------------------------: |
|       ADMIN_EMAIL       |        Your email address         |
|       ADMIN_PASS        |    Your password for this app     |
|         BACKEND         |          URL of backend           |
|       EMAIL_HOST        |          SMTP Email Host          |
|       EMAIL_PASS        |       Email client password       |
|       EMAIL_USER        |       Email client username       |
|        FRONTEND         |          URL of frontend          |
|          PORT           |   Express listens on this port    |
|     PRISMA_ENDPOINT     |     HTTP endpoint for Prisma      |
|      PRISMA_SECRET      | Security for your Prisma endpoint |
|      PRISMA_TOKEN       |   Used to authenticate seeding    |
|      SESSION_NAME       |          Name of session          |
|     SESSION_SECRET      |    Security for session cookie    |
|  TWITTER_CONSUMER_KEY   |        Provided by Twitter        |
| TWITTER_CONSUMER_SECRET |        Provided by Twitter        |

## Email

Create [Mail Trap](https://mailtrap.io/) or equivilant account to test email service

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
|  `db:seed`  |       Reset and seed Prisma database        |
| `db:token`  | Generate and copy Prisma token to clipboard |

## Testing

- Coming Soon

## Playground

- Helpful `Query` and `Mutation` setup to test backend flows
  - SIGNUP - create user in database
  - SIGNIN_1 - should throw error due to user not being confirmed
  - Check testing email account and click confirm link
  - SIGNIN_1 - should work now
  - USER - session cookie should be read
  - SIGNOUT - should clear session
  - USER - should return `null`
  - FORGOT_PASSWORD - locks account
  - SIGNIN_1 - should throw account locked error
  - Check testing email and click link - copy id param
  - CHANGE_FORGOT_PASS - replace `key` with id from last step
  - SIGNIN_1 - should throw password mismatch error
  - SIGNIN_2 - should work
  - USER - should work

```graphql
# Reads cookie to get current user
query USER {
  currentUser {
    id
    twitterId
    createdAt
    name
    email
    image
    role
    forgotPasswordLock
    confirmed
  }
}

# initial sign up
mutation SIGNUP {
  signup(name: "example", email: "example@gmail.com", password: "password") {
    success
    message
    user {
      id
      twitterId
      createdAt
      name
      email
      image
      role
      forgotPasswordLock
      confirmed
    }
  }
}

# sign in after confirmation email
mutation SIGNIN_1 {
  signin(email: "example@gmail.com", password: "password") {
    success
    message
    user {
      id
      twitterId
      createdAt
      name
      email
      image
      role
      forgotPasswordLock
      confirmed
    }
  }
}

# sign in after changing password
mutation SIGNIN_2 {
  signin(email: "example@gmail.com", password: "newpassword") {
    success
    message
    user {
      id
      twitterId
      createdAt
      name
      email
      image
      role
      forgotPasswordLock
      confirmed
    }
  }
}

# sign out clears session
mutation SIGNOUT {
  signout {
    success
    message
  }
}

# trigger forgot password email and account lock
mutation FORGOT_PASSWORD {
  sendForgotPasswordEmail(email: "example@gmail.com") {
    success
    message
  }
}

# change password
# make sure to replace key with route param in email link
mutation CHANGE_FORGOT_PASS {
  forgotPasswordChange(newPassword: "newpassword", key: "cf346fe0-aa16-44b8-b2a8-c9307aae6445") {
    success
    message
  }
}
```

## Acknowledgements

- Shout Out to @benawad for his [GraphQl Typescript Boilerplate](https://github.com/benawad/graphql-ts-server-boilerplate) which inspired the use of [Redis](https://redis.io) and Rate Limitting in this project.
