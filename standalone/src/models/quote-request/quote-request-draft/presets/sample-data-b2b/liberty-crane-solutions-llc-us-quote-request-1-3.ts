import { CartDraft, type TCartDraft } from '@/models/cart';
import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraftBuilder,
} from '../../../index';

const libertyCraneSolutionsLlcUsCart1Cart = CartDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUsCart1()
  .build<TCartDraft>();

const libertyCraneSolutionsLlcUsQuoteRequest13 = (
  cartVersion: number
): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-quote-request-1-3')
    .cart(
      KeyReferenceDraft.presets
        .cart()
        .key(libertyCraneSolutionsLlcUsCart1Cart.key!)
    )
    .cartVersion(cartVersion)
    .comment('Please provide a quote for the following items.');

export default libertyCraneSolutionsLlcUsQuoteRequest13;
