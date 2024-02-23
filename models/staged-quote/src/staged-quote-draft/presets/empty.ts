import type { TStagedQuoteDraftBuilder } from '../../types';
import StagedQuoteDraft from '../builder';

const empty = (): TStagedQuoteDraftBuilder =>
  StagedQuoteDraft()
    .key(undefined)
    .quoteRequestStateToAccepted(undefined)
    .state(undefined)
    .custom(undefined);

export default empty;
