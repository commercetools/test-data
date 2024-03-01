import {
  LocalizedStringDraft,
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import {
  OrderFromCartDraft,
  TOrderFromCartDraft,
} from '@commercetools-test-data/order';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const avaBrown = CustomerDraft.presets.sampleDataB2B
  .avaBrown()
  .build<TCustomerDraft>();

const order = OrderFromCartDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUsCart2(1)
  .build<TOrderFromCartDraft>();

const libertyCraneSolutionsLlcUsPayment2Payment = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key(order.orderNumber)
    .customer(KeyReferenceDraft.presets.customer().key(avaBrown.key!))
    .amountPlanned(MoneyDraft.random().currencyCode('USD').centAmount(13198500))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('bank transfer')
        .name(LocalizedStringDraft.presets.empty())
    )
    .paymentStatus(
      PaymentStatusDraft.presets.empty().interfaceText('undefined')
    );
export default libertyCraneSolutionsLlcUsPayment2Payment;
