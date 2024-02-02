import { Router } from 'express';
import { addToSlackController } from '../usecases/add-to-slack';
import { removeFromSlackController } from '../usecases/remove-from-slack';
import { slackEventRecivedController } from '../usecases/slack-event-received';
import { verificationChallenge } from '../middleware/verification-challenge.function';
import { middleware } from './../../../../shared/infra/http/_index';

const slackRouter: Router = Router();

slackRouter.post('/install', middleware.isAuthenticated(), (req, res) =>
  addToSlackController.execute(req, res)
);

slackRouter.delete('/install', middleware.isAuthenticated(), (req, res) =>
  removeFromSlackController.execute(req, res)
);

slackRouter.post('/event-recived', verificationChallenge(), (req, res) =>
  slackEventRecivedController.execute(req, res)
);

export { slackRouter };
