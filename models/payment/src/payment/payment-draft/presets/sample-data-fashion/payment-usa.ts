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

const customerUSA = CustomerDraft.presets.sampleDataFashion
  .sampleUsa()
  .build<TCustomerDraft>();

const paymentUSA = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .customer(KeyReference.presets.customer().key(customerUSA.key!))
    .amountPlanned(Money.random().centAmount(32348).currencyCode('USD'))
    .paymentMethodInfo(
      PaymentMethodInfo.random()
        .method('Credit Card')
        .name(LocalizedString.presets.empty()['en']('Credit Card'))
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(32348).currencyCode('USD'))
        .state('Pending')
        .timestamp('2023-07-01T03:15:00.000Z')
        .type('Authorization')
        .interactionId('123456789'),
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(32348).currencyCode('USD'))
        .state('Success')
        .timestamp('2023-07-01T03:17:00.000Z')
        .type('Charge')
        .interactionId('345678912'),
    ]);

export default paymentUSA;
