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
import * as PaymentMethodInfo from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft } from '../../../../transaction';
import { TPaymentDraftBuilder } from '../../../types';

const customerAUS = CustomerDraft.presets.sampleDataFashion
  .sampleUsa()
  .build<TCustomerDraft>();

const paymentAUS1 = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .customer(KeyReference.presets.customer().key(customerAUS.key!))
    .amountPlanned(Money.random().centAmount(4075).currencyCode('AUD'))
    .paymentMethodInfo(
      PaymentMethodInfo.random()
        .method('Debit Card')
        .name(LocalizedString.presets.empty()['en']('Debit Card'))
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Pending'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(4075).currencyCode('AUD'))
        .state('Pending')
        .timestamp('2023-07-01T13:00:00.000Z')
        .type('Authorization')
        .interactionId('147258369'),
    ]);

export default paymentAUS1;
