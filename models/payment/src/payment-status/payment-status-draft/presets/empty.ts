import type { TPaymentStatusDraftBuilder } from '../../types';
import PaymentStatusDraft from '../builder';

const empty = (): TPaymentStatusDraftBuilder =>
  PaymentStatusDraft()
    .interfaceCode(undefined)
    .interfaceText(undefined)
    .state(undefined);

export default empty;
