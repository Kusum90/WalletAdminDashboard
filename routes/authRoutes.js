const router = require("express").Router();

const { login } = require("../controllers/authController");
const { createAdmin } = require("../controllers/adminController");

/**
 * @swagger
 * /api/admin/auth/create-admin:
 *   post:
 *     summary: Create Admin or Super Admin
 *     tags: [Admin Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *                 example: Super Admin
 *               email:
 *                 type: string
 *                 example: superadmin@gmail.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 example: SUPER_ADMIN
 *     responses:
 *       201:
 *         description: Admin created successfully
 */
router.post("/create-admin", createAdmin);

/**
 * @swagger
 * /api/admin/auth/login:
 *   post:
 *     summary: Admin login
 *     tags: [Admin Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: superadmin@gmail.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", login);

module.exports = router;