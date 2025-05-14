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

const customerSebastianMueller = CustomerDraft.presets.sampleDataB2CLifestyle
  .sebastianMuller()
  .build<TCustomerDraft>();

const orderSebastianMueller = OrderFromCartDraft.presets.sampleDataB2CLifestyle
  .sebastianMuellerCart01(1)
  .build<TOrderFromCartDraft>();

const sebastianMuellerPayment = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key(orderSebastianMueller.cart!.key!)
    .customer(
      KeyReferenceDraft.presets.customer().key(customerSebastianMueller.key!)
    )
    .amountPlanned(MoneyDraft.random().centAmount(395890).currencyCode('EUR'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Credit Card')
        .name(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Credit Card')
            ['en-GB']('Credit Card')
        )
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(MoneyDraft.random().centAmount(395890).currencyCode('EUR'))
        .state(constants.TransactionState.Pending)
        .type(constants.TransactionType.Authorization)
        .interactionId('741852300'),
      TransactionDraft.presets
        .empty()
        .amount(MoneyDraft.random().centAmount(395890).currencyCode('EUR'))
        .state(constants.TransactionState.Success)
        .type(constants.TransactionType.Charge)
        .interactionId('323044987'),
    ]);

export default sebastianMuellerPayment;
