import { Result } from '../../../../../shared/core/Result';
import { UseCaseError } from '../../../../../shared/core/use-case-error';
import { EHttpStatus } from '../../../../../shared/infra/http/models/base-controller';

export enum ESlackEventReceivedErrors {
  SlackEventTypeNotSupported = 'SLACK_EVENT_TYPE_NOT_SUPPORTED',
  SlackOAuthAccessNotFound = 'SLACK_OAUTH_ACCESS_NOT_FOUND',
}

export namespace SlackEventReceivedErrors {
  export class SlackEventTypeNotSupported extends Result<UseCaseError> {
    constructor(eventType: string) {
      super(
        false,
        new UseCaseError(
          EHttpStatus.BadRequest,
          ESlackEventReceivedErrors.SlackEventTypeNotSupported,
          `Slack Event Type ${eventType} Is Not Supported`
        )
      );
    }
  }
}
