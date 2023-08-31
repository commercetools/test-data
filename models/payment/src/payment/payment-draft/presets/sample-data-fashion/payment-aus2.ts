import {
  LocalizedString,
  KeyReference,
  Money,
} from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import * as PaymentDraft from '../..';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft, constants } from '../../../../transaction';
import { TPaymentDraftBuilder } from '../../../types';

const customerAUS = CustomerDraft.presets.sampleDataFashion
  .sampleAustralia()
  .build<TCustomerDraft>();

const paymentAUS2 = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .customer(KeyReference.presets.customer().key(customerAUS.key!))
    .amountPlanned(Money.random().centAmount(4000).currencyCode('AUD'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Gift Card')
        .name(LocalizedString.presets.empty()['en']('Gift Card'))
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(4000).currencyCode('AUD'))
        .state(constants.TransactionState.Pending)
        .timestamp('2023-07-01T13:00:00.000Z')
        .type(constants.TransactionType.Authorization)
        .interactionId('741852963'),
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(4000).currencyCode('AUD'))
        .state(constants.TransactionState.Success)
        .timestamp('2023-07-01T13:05:00.000Z')
        .type(constants.TransactionType.Charge)
        .interactionId('321654987'),
    ]);

export default paymentAUS2;
