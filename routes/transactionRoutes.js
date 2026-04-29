const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const {
  getAllTransactions
} = require("../controllers/transactionController");

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Transaction management APIs
 */

/**
 * @swagger
 * /api/admin/transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         example: SUCCESS
 *         description: Filter by transaction status
 *
 *       - in: query
 *         name: accountNumber
 *         schema:
 *           type: string
 *         example: AA/098181
 *         description: Search by account number
 *
 *     responses:
 *       200:
 *         description: Transactions fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/",
  auth,
  getAllTransactions
);

module.exports = router;