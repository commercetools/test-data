import {
  LocalizedStringDraft,
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '../../../../../customer';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const avaBrown = CustomerDraft.presets.sampleDataB2B
  .avaBrown()
  .build<TCustomerDraft>();

const libertyCraneSolutionsLlcUsPayment2Payment = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-payment-2')
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
