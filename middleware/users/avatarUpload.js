// manage avatar upload
const avatarUpload = (req, res, next) => {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "only jpeg, jpg, png allowed"
  );
}

module.exports = avatarUpload;