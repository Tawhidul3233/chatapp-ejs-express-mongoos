// get login page
const getUsers = (req, res, next) => {
  res.render('users', {
    title: 'Users - chat application users'
  })
}



module.exports = {
  getUsers
}