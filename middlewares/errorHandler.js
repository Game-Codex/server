module.exports = (err, req, res, next) => {
  console.log(err)
  let status, message
  switch (err.name) {
    default:
      status = err.status || 500
      message = err.message || 'Internal server error'
      break
  }

  res.status(status).json({ message })
}
