// render inbox page
const getInbox = (req, res, next) => {
  res.render('inbox', {
    title: 'inobx - chat application'
  })
}

module.exports = {
  getInbox
}