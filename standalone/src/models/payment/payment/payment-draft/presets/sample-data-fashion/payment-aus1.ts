import * as PaymentDraft from '../..';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
  MoneyDraft,
} from '@/models/commons';
import { CustomerDraft, type TCustomerDraft } from '@/models/customer';
import { OrderFromCartDraft, TOrderFromCartDraft } from '@/models/order';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft, constants } from '../../../../transaction';
import { TPaymentDraftBuilder } from '../../../types';

const customerAUS = CustomerDraft.presets.sampleDataFashion
  .sampleAustralia()
  .build<TCustomerDraft>();

const orderAUS2 = OrderFromCartDraft.presets.sampleDataFashion
  .sampleAustraliaCart02(1)
  .build<TOrderFromCartDraft>();

const paymentAUS1 = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key(orderAUS2.cart!.key!)
    .customer(KeyReferenceDraft.presets.customer().key(customerAUS.key!))
    .amountPlanned(MoneyDraft.random().centAmount(4075).currencyCode('AUD'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Debit Card')
        .name(LocalizedStringDraft.presets.empty()['en']('Debit Card'))
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Pending'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(MoneyDraft.random().centAmount(4075).currencyCode('AUD'))
        .state(constants.TransactionState.Pending)
        .timestamp('2023-07-01T13:00:00.000Z')
        .type(constants.TransactionType.Authorization)
        .interactionId('147258369'),
    ]);

export default paymentAUS1;
