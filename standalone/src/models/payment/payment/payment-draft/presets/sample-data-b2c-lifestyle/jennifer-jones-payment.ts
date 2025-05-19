import {
  LocalizedStringDraft,
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '@/models/customer/customer';
import { OrderFromCartDraft, TOrderFromCartDraft } from '../../../../../order';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft, constants } from '../../../../transaction';
import { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const customerJenniferJones = CustomerDraft.presets.sampleDataB2CLifestyle
  .jenniferJones()
  .build<TCustomerDraft>();

const orderJenniferJones = OrderFromCartDraft.presets.sampleDataB2CLifestyle
  .jenniferJonesCart01(1)
  .build<TOrderFromCartDraft>();

const jenniferJonesPayment = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key(orderJenniferJones.cart!.key!)
    .customer(
      KeyReferenceDraft.presets.customer().key(customerJenniferJones.key!)
    )
    .amountPlanned(MoneyDraft.random().centAmount(485759).currencyCode('GBP'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Debit Card')
        .name(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Debit Card')
            ['en-GB']('Debit Card')
        )
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(MoneyDraft.random().centAmount(485759).currencyCode('GBP'))
        .state(constants.TransactionState.Pending)
        .type(constants.TransactionType.Authorization)
        .interactionId('741852963'),
      TransactionDraft.presets
        .empty()
        .amount(MoneyDraft.random().centAmount(485759).currencyCode('GBP'))
        .state(constants.TransactionState.Success)
        .type(constants.TransactionType.Charge)
        .interactionId('321654987'),
    ]);

export default jenniferJonesPayment;
