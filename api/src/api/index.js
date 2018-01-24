import { Router } from 'express'
import webhook from '../services/webhook'

const router = new Router()

router.use('/webhook', webhook)

export default router
