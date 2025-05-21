import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdDeCart1Cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdDeCart1()
  .build<TCartDraft>();

const lifttechSolutionsLtdDeQuoteRequest1 = (
  cartVersion: number
): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-de-quote-request-1')
    .cart(
      KeyReferenceDraft.presets.cart().key(lifttechSolutionsLtdDeCart1Cart.key!)
    )
    .cartVersion(cartVersion)
    .comment('Please provide a quote for the following items.');

export default lifttechSolutionsLtdDeQuoteRequest1;
