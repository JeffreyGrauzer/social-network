const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  //addFriend,
  //removeFriend
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/friends/<userId>
//router.route('/:userId').post(addFriend);

// /api/friends/<userId>/<friendId>
//router;
//.route('/:userId/:friendId')
//.delete(removeFriend);

module.exports = router;
