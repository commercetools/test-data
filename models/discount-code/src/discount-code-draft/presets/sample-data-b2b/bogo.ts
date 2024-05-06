import {
  LocalizedStringDraft,
  ReferenceDraft,
} from '@commercetools-test-data/commons';
import { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const bogo = (cartDiscountId: string): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('BOGO')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('BOGO')
        ['it-IT']('BOGO')
        ['nl-NL']('BOGO')
        ['fr-FR']('BOGO')
        ['en-AU']('BOGO')
        ['es-ES']('BOGO')
        ['en-GB']('BOGO')
        ['en-NZ']('BOGO')
        ['pt-PT']('BOGO')
        ['en-US']('BOGO')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kaufen Sie einen und erhalten Sie den zweiten kostenlos')
        ['it-IT']('Compra uno e ricevi il secondo gratis')
        ['nl-NL']('Koop er één en krijg de tweede gratis')
        ['fr-FR']('Achetez-en un et recevez le deuxième gratuitement')
        ['en-AU']('Buy One and Receive the Second for Free')
        ['es-ES']('Compra uno y recibe el segundo gratis')
        ['en-GB']('Buy One and Receive the Second for Free')
        ['en-NZ']('Buy One and Receive the Second for Free')
        ['pt-PT']('Compre um e receba o segundo de graça')
        ['en-US']('Buy One and Receive the Second for Free')
    )
    .cartDiscounts([
      ReferenceDraft.random().id(cartDiscountId).typeId('cart-discount'),
    ])
    .isActive(true)
    .maxApplicationsPerCustomer(5);

export default bogo;
