import { SlackEventReceivedController } from './slack-event-received.controller';
import { models } from '../../../../../shared/infra/database/mongodb/index';
import { SlackOAuthAccessRepo } from '../../../../../shared/repo/slack-oauth-access.repo';
import { SlackEventReceivedUsecase } from './slack-event-received.usecase';

const slackOAuthAccessRepo = new SlackOAuthAccessRepo(models);
const slackEventReceivedUsecase = new SlackEventReceivedUsecase(
  slackOAuthAccessRepo
);
const slackEventRecivedController = new SlackEventReceivedController(
  slackEventReceivedUsecase
);

export { slackEventRecivedController };
