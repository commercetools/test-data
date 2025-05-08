import {
  LocalizedStringDraft,
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../../commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '../../../../../customer';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const avaBrown = CustomerDraft.presets.sampleDataB2B
  .avaBrown()
  .build<TCustomerDraft>();

const lifttechSolutionsLtdFrFromQuotePayment1Payment =
  (): TPaymentDraftBuilder =>
    PaymentDraft.presets
      .empty()
      .key('lifttech-solutions-ltd-fr-from-quote-payment-1')
      .customer(KeyReferenceDraft.presets.customer().key(avaBrown.key!))
      .amountPlanned(
        MoneyDraft.random().currencyCode('EUR').centAmount(22060350)
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
export default lifttechSolutionsLtdFrFromQuotePayment1Payment;
