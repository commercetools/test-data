import type { TPaymentMethodInfoDraftBuilder } from '../../types';
import PaymentMethodInfoDraft from '../builder';

const empty = (): TPaymentMethodInfoDraftBuilder =>
  PaymentMethodInfoDraft()
    .paymentInterface(undefined)
    .method(undefined)
    .name(undefined);

export default empty;
