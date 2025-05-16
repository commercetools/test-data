import { CartDraft, type TCartDraft } from '../../../../../cart';
import { KeyReferenceDraft } from '../../../../commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraftBuilder,
} from '../../../index';

const eagleHeavyLiftTechnologiesIncUsCart1Cart = CartDraft.presets.sampleDataB2B
  .eagleHeavyLiftTechnologiesIncUsCart1()
  .build<TCartDraft>();

const eagleHeavyLiftTechnologiesIncUsQuoteRequest13 = (
  cartVersion: number
): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us-quote-request-1-3')
    .cart(
      KeyReferenceDraft.presets
        .cart()
        .key(eagleHeavyLiftTechnologiesIncUsCart1Cart.key!)
    )
    .cartVersion(cartVersion)
    .comment('Please provide a quote for the following items.');

export default eagleHeavyLiftTechnologiesIncUsQuoteRequest13;
