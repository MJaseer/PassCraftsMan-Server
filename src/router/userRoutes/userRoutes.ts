import express from 'express'
import {registerUser,userLogin,savedPassword,fetchSavedData} from '../../controller/userController'
import verifyUserToken from '../../middlewares/authorisation/authorisation'

const router = express.Router()
console.log("Request in routes");

router.post('/sign-up',registerUser)

router.post('/login',userLogin)

router.post('/save-password',verifyUserToken,savedPassword)

router.get('/fetch-saved-data',verifyUserToken,fetchSavedData)

// router.post('/page-saved-data',verifyUserToken,fetchSavedData)

export default router;