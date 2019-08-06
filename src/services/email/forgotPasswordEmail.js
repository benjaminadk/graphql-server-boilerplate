module.exports = (to, url) => {
  return {
    from: '"Prisma Boilerplate 🐐" <foo@example.com>',
    to,
    subject: 'Forgot Password',
    html: `<html>
      <body>
      <p>Testing Mailtrap</p>
      <a href="${url}">Change Password</a>
      </body>
    </html>`
  }
}
