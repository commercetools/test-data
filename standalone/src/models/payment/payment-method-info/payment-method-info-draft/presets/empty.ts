import PaymentMethodInfoDraft from '../builder';

const empty = () =>
  PaymentMethodInfoDraft()
    .paymentInterface(undefined)
    .method(undefined)
    .name(undefined);

export default empty;
