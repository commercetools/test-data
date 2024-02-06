import {
  LocalizedString,
  KeyReferenceDraft,
  Money,
} from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import {
  OrderFromCartDraft,
  TOrderFromCartDraft,
} from '@commercetools-test-data/order';
import * as PaymentDraft from '../..';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft, constants } from '../../../../transaction';
import { TPaymentDraftBuilder } from '../../../types';

const customerJenniferJones = CustomerDraft.presets.sampleDataGoodStore
  .jenniferJones()
  .build<TCustomerDraft>();

const orderJenniferJones = OrderFromCartDraft.presets.sampleDataGoodStore
  .jenniferJonesCart01(1)
  .build<TOrderFromCartDraft>();

const jenniferJonesPayment = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key(orderJenniferJones.cart!.key!)
    .customer(
      KeyReferenceDraft.presets.customer().key(customerJenniferJones.key!)
    )
    .amountPlanned(Money.random().centAmount(485759).currencyCode('GBP'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Debit Card')
        .name(
          LocalizedString.presets
            .empty()
            ['en-US']('Debit Card')
            ['en-GB']('Debit Card')
        )
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(485759).currencyCode('GBP'))
        .state(constants.TransactionState.Pending)
        .type(constants.TransactionType.Authorization)
        .interactionId('741852963'),
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(485759).currencyCode('GBP'))
        .state(constants.TransactionState.Success)
        .type(constants.TransactionType.Charge)
        .interactionId('321654987'),
    ]);

export default jenniferJonesPayment;
