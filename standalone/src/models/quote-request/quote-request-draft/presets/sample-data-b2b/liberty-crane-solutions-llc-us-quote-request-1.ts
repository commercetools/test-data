import { CartDraft, type TCartDraft } from '../../../../../cart';
import { KeyReferenceDraft } from '../../../../commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraftBuilder,
} from '../../../index';

const libertyCraneSolutionsLlcUsCart1Cart = CartDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUsCart1()
  .build<TCartDraft>();

const libertyCraneSolutionsLlcUsQuoteRequest1 = (
  cartVersion: number
): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-quote-request-1')
    .cart(
      KeyReferenceDraft.presets
        .cart()
        .key(libertyCraneSolutionsLlcUsCart1Cart.key!)
    )
    .cartVersion(cartVersion)
    .comment('Please provide a quote for the following items.');

export default libertyCraneSolutionsLlcUsQuoteRequest1;
