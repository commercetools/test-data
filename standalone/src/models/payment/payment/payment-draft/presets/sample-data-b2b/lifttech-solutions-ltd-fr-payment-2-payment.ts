import {
  LocalizedStringDraft,
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '../../../../../customer';
import {
  OrderFromCartDraft,
  OrderFromQuoteDraft,
  TOrderFromCartDraft,
  TOrderFromQuoteDraft,
} from '../../../../../order';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const camilleLefevre = CustomerDraft.presets.sampleDataB2B
  .camilleLefevre()
  .build<TCustomerDraft>();

const order = OrderFromCartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdFrCart2(1)
  .build<TOrderFromCartDraft>();

const lifttechSolutionsLtdFrPayment2Payment = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr-payment-2')
    .customer(KeyReferenceDraft.presets.customer().key(camilleLefevre.key!))
    .amountPlanned(MoneyDraft.random().currencyCode('EUR').centAmount(24300000))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('bank transfer')
        .name(LocalizedStringDraft.presets.empty())
    )
    .paymentStatus(
      PaymentStatusDraft.presets.empty().interfaceText('undefined')
    );
export default lifttechSolutionsLtdFrPayment2Payment;
