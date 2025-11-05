import PaymentStatusDraft from '../builder';

const empty = () =>
  PaymentStatusDraft()
    .interfaceCode(undefined)
    .interfaceText(undefined)
    .state(undefined);

export default empty;
