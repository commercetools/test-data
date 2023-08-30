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

const customerUSA = CustomerDraft.presets.sampleDataFashion
  .sampleUsa()
  .build<TCustomerDraft>();

const paymentUSA = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .customer(KeyReference.presets.customer().key(customerUSA.key!))
    .amountPlanned(Money.random().centAmount(32348).currencyCode('USD'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Credit Card')
        .name(LocalizedString.presets.empty()['en']('Credit Card'))
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(32348).currencyCode('USD'))
        .state(constants.TRANSACTION_STATE.PENDING)
        .timestamp('2023-07-01T03:15:00.000Z')
        .type(constants.TRANSACTION_TYPE.AUTHORIZATION)
        .interactionId('123456789'),
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(32348).currencyCode('USD'))
        .state(constants.TRANSACTION_STATE.SUCCESS)
        .timestamp('2023-07-01T03:17:00.000Z')
        .type(constants.TRANSACTION_TYPE.CHARGE)
        .interactionId('345678912'),
    ]);

export default paymentUSA;
