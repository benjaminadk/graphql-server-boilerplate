# Express Apollo Prisma Boilerplate

Basic setup for a modern GraphQL backend

## NPM Scripts

|   Script    |                 Description                 |
| :---------: | :-----------------------------------------: |
|   `start`   |         Start server in production          |
|    `dev`    |         Start server in development         |
|  `db:drop`  |     Deletes all data in Prisma database     |
| `db:deploy` | Updates Prisma datamodel & generates schema |

## Environment Variables

|      Name       |            Description            |   Type   |
| :-------------: | :-------------------------------: | :------: |
|   EMAIL_HOST    |          SMTP Email Host          | `string` |
|   EMAIL_PASS    |       Email client password       | `string` |
|   EMAIL_USER    |       Email client username       | `string` |
|    FRONTEND     |          URL of frontend          | `string` |
|      PORT       |   Express listens on this port    | `number` |
| PRISMA_ENDPOINT |     HTTP endpoint for Prisma      | `string` |
|  PRISMA_SECRET  | Security for your Prisma endpoint | `string` |
|  PRISMA_TOKEN   |   Used to authenticate seeding    | `string` |
| SESSION_SECRET  |    Security for session cookie    | `string` |
