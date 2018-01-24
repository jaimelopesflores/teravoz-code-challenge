import { Router } from 'express';
import { handle } from './controller';

const router = new Router();

/**
 * @api {post} /webhook Handle webhook
 * @apiName Webhook
 * @apiGroup Webhook
 * @apiParam client_number Client client_number.
 * @apiSuccess {Object} Webhook's processment data data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Webhook not found.
 */
router.post('/', handle);

export default router;
