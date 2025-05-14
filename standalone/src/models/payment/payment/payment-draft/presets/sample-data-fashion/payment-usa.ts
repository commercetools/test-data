import {
  LocalizedStringDraft,
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '../../../../../customer';
import { OrderFromCartDraft, TOrderFromCartDraft } from '../../../../../order';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft, constants } from '../../../../transaction';
import { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const customerUSA = CustomerDraft.presets.sampleDataFashion
  .sampleUsa()
  .build<TCustomerDraft>();

const orderUS = OrderFromCartDraft.presets.sampleDataFashion
  .sampleUsaCart01(1)
  .build<TOrderFromCartDraft>();

const paymentUSA = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key(orderUS.cart!.key!)
    .customer(KeyReferenceDraft.presets.customer().key(customerUSA.key!))
    .amountPlanned(MoneyDraft.random().centAmount(32348).currencyCode('USD'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Credit Card')
        .name(LocalizedStringDraft.presets.empty()['en']('Credit Card'))
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(MoneyDraft.random().centAmount(32348).currencyCode('USD'))
        .state(constants.TransactionState.Pending)
        .timestamp('2023-07-01T03:15:00.000Z')
        .type(constants.TransactionType.Authorization)
        .interactionId('123456789'),
      TransactionDraft.presets
        .empty()
        .amount(MoneyDraft.random().centAmount(32348).currencyCode('USD'))
        .state(constants.TransactionState.Success)
        .timestamp('2023-07-01T03:17:00.000Z')
        .type(constants.TransactionType.Charge)
        .interactionId('345678912'),
    ]);

export default paymentUSA;
