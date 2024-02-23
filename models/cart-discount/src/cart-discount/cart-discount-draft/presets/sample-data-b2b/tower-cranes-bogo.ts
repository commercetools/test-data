import {
  CategoryDraft,
  type TCategoryDraft,
} from '@commercetools-test-data/category';
import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import {
  CartDiscountMultiBuyLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
  selectionMode,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

const category = CategoryDraft.presets.sampleDataB2B
  .towerCranes()
  .build<TCategoryDraft>();

const towerCranesBogo = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .key('tower-cranes-bogo')
    .value(CartDiscountValueRelativeDraft.random().permyriad(10000))
    .target(
      CartDiscountMultiBuyLineItemsTargetDraft.presets
        .empty()
        .predicate(`categories.key contains "${category.key}`)
        .triggerQuantity(2)
        .discountedQuantity(1)
        .selectionMode(selectionMode.Cheapest)
    )
    .cartPredicate(`1 = 1`)
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Kaufen Sie einen Turmkran und erhalten Sie den zweiten kostenlos'
        )
        ['it-IT']('Acquista una gru a torre e ricevi la seconda gratis')
        ['nl-NL']('Koop één torenkraan en krijg de tweede gratis')
        ['fr-FR']('Achetez une grue à tour et recevez la deuxième gratuitement')
        ['en-AU']('Buy One Tower Crane and Receive the Second for Free')
        ['es-ES']('Compra una grúa torre y recibe la segunda gratis')
        ['en-GB']('Buy One Tower Crane and Receive the Second for Free')
        ['en-NZ']('Buy One Tower Crane and Receive the Second for Free')
        ['pt-PT']('Compre uma grua torre e receba a segunda de graça')
        ['en-US']('Buy One Tower Crane and Receive the Second for Free')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Zwei zum Preis von einem bei allen Turmkränen (Rabatt auf den günstigsten Artikel)'
        )
        ['it-IT'](
          'Due al prezzo di uno su tutte le gru a torre (sconto sull&#39;articolo più economico)'
        )
        ['nl-NL'](
          'Twee voor de prijs van één op alle torenkranen (korting op het goedkoopste artikel)'
        )
        ['fr-FR'](
          'Deux pour le prix d&#39;un sur toutes les grues à tour (réduction sur l&#39;article le moins cher)'
        )
        ['en-AU'](
          'Two for one on all tower cranes (discount on the cheapest item)'
        )
        ['es-ES'](
          'Dos por uno en todas las grúas torre (descuento en el artículo más barato)'
        )
        ['en-GB'](
          'Two for one on all tower cranes (discount on the cheapest item)'
        )
        ['en-NZ'](
          'Two for one on all tower cranes (discount on the cheapest item)'
        )
        ['pt-PT'](
          'Dois pelo preço de um em todas as gruas torre (desconto no item mais barato)'
        )
        ['en-US'](
          'Two for one on all tower cranes (discount on the cheapest item)'
        )
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.15');

export default towerCranesBogo;
