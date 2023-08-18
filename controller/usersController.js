const bcrypt = require("bcrypt")

// get login page
const getUsers = (req, res, next) => {
  res.render('users')
}

async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10)

  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    })
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    })
  }
  try {
    const result = await newUser.save();
    res.status(200).join({
      message: "User has add successfully"
    })
  } catch (err) {
    res.status(500).join({
      errors: {
        common: {
          msg: " Unknown error accured"
        }
      }
    })
  }
}

module.exports = {
  getUsers,
  addUser
}