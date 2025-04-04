import { CartDraft, type TCartDraft } from '@commercetools-test-data/cart';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdCart1Cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdCart1()
  .build<TCartDraft>();

const lifttechSolutionsLtdQuoteRequest1 = (
  cartVersion: number
): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-quote-request-1')
    .cart(
      KeyReferenceDraft.presets.cart().key(lifttechSolutionsLtdCart1Cart.key!)
    )
    .cartVersion(cartVersion)
    .comment('Please provide a quote for the following items.');

export default lifttechSolutionsLtdQuoteRequest1;
