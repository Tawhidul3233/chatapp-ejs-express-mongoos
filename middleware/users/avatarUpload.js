// manage avatar upload
const avatarUpload = (req, res, next) => {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "only jpeg, jpg, png allowed"
  );

  // call the meddilware funcation

  upload.any()(req, res , (err)=>{
    if(err){
      res.status(500).join({
        errors:{
          avatar:{
            msg: error.massage
          }
        }
      })
    }else{
      next()
    }
  })
}

module.exports = avatarUpload;