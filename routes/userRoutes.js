const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  getUserDetails
} = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/",
  auth,
  role(["ADMIN", "SUPER_ADMIN"]),
  getAllUsers
);

/**
 * @swagger
 * /api/admin/users/{id}:
 *   get:
 *     summary: Get user details with transaction history
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68106c1f2b91f9e1b1234567
 *     responses:
 *       200:
 *         description: User details fetched successfully
 *       404:
 *         description: User not found
 */
router.get(
  "/:id",
  auth,
  role(["ADMIN", "SUPER_ADMIN"]),
  getUserDetails
);

module.exports = router;