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
  OrderFromQuoteDraft,
  TOrderFromQuoteDraft,
} from '@commercetools-test-data/order';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const camilleLefevre = CustomerDraft.presets.sampleDataB2B
  .camilleLefevre()
  .build<TCustomerDraft>();

const order = OrderFromQuoteDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUsQuote1(1)
  .build<TOrderFromQuoteDraft>();

const libertyCraneSolutionsLlcUsFromQuotePayment1Payment =
  (): TPaymentDraftBuilder =>
    PaymentDraft.presets
      .empty()
      .key(order.orderNumber)
      .customer(KeyReferenceDraft.presets.customer().key(camilleLefevre.key!))
      .amountPlanned(
        MoneyDraft.random().currencyCode('EUR').centAmount(29160000)
      )
      .paymentMethodInfo(
        PaymentMethodInfoDraft.presets
          .empty()
          .method('bank transfer')
          .name(LocalizedStringDraft.presets.empty())
      )
      .paymentStatus(
        PaymentStatusDraft.presets.empty().interfaceText('undefined')
      );
export default libertyCraneSolutionsLlcUsFromQuotePayment1Payment;
