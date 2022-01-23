"use strict";

const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/authorization");

const authController = require("../../controllers/auth.controller");
const validator = require("express-validation");
const { create } = require("../../validations/user.validation");

router.post("/pre-login-email", authController.preLoginEmail);
router.post("/pre-reset-pass", authController.preResetPass);
router.post("/pre-auth-reset-pass", authController.preAuthresetPass);
router.post("/reset-pass",auth(), authController.resetPass);
router.post("/recover-pass-send-email",  authController.recoverPass);
router.post("/login-gmail", authController.loginGmail);
router.post('/login-apple',authController.appleAuth);
router.post("/pre-login-email-sms", authController.TryLoginConfirmPhone);
router.post("/invite-user",auth() ,authController.inviteUser);
router.put("/complete-registration/:id", authController.completeRegistration);
router.get("/actkey/:email",  authController.getActKey);
router.get("/verify", auth(), authController.verify);
router.get("/user-validation-key/:id",  authController.getUserDataActivate);


module.exports = router;

/**
 * @swagger
 * /api/auth/pre-login:
 *   post:
 *     summary: Recives phone, create a user if doenst exists, send SMS code to use in login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                telephone:
 *                  type: string
 *                  description: telefone do usuario.
 *                  example: "+541170334532"
 *     responses:
 *       200:
 *
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 */
