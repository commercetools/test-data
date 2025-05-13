import { CartDraft, type TCartDraft } from '@/models/cart';
import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdEsCart1Cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdEsCart1()
  .build<TCartDraft>();

const lifttechSolutionsLtdEsQuoteRequest12 = (
  cartVersion: number
): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es-quote-request-1-2')
    .cart(
      KeyReferenceDraft.presets.cart().key(lifttechSolutionsLtdEsCart1Cart.key!)
    )
    .cartVersion(cartVersion)
    .comment('Please provide a quote for the following items.');

export default lifttechSolutionsLtdEsQuoteRequest12;
