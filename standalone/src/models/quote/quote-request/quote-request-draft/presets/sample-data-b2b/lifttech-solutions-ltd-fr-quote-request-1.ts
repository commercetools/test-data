import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdFrCart1Cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdFrCart1()
  .build<TCartDraft>();

const lifttechSolutionsLtdFrQuoteRequest1 = (
  cartVersion: number
): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr-quote-request-1')
    .cart(
      KeyReferenceDraft.presets.cart().key(lifttechSolutionsLtdFrCart1Cart.key!)
    )
    .cartVersion(cartVersion)
    .comment('Please provide a quote for the following items.');

export default lifttechSolutionsLtdFrQuoteRequest1;
