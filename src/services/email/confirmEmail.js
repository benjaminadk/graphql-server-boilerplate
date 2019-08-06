module.exports = (to, url) => {
  return {
    from: '"Prisma Boilerplate 🐐" <foo@example.com>',
    to,
    subject: 'Confirm Email',
    html: `<html>
      <body>
      <p>Testing Mailtrap</p>
      <a href="${url}">confirm email</a>
      </body>
    </html>`
  }
}
