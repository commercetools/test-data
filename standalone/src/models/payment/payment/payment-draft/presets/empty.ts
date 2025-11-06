import PaymentDraft from '../builder';

const empty = () =>
  PaymentDraft()
    .key(undefined)
    .interfaceId(undefined)
    .anonymousId(undefined)
    .customer(undefined)
    .paymentMethodInfo(undefined)
    .paymentStatus(undefined)
    .transactions(undefined)
    .interfaceInteractions(undefined)
    .custom(undefined);

export default empty;
