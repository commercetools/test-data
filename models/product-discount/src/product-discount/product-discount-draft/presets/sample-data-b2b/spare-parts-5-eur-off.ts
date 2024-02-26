import {
  CategoryDraft,
  type TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  LocalizedStringDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { ProductDiscountValueAbsoluteDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const category = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const spareParts5EurOff = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .key('spare-parts-5-eur-off')
    .value(
      ProductDiscountValueAbsoluteDraft.random().money([
        MoneyDraft.random().currencyCode('EUR').centAmount(500),
      ])
    )
    .predicate(`categories.key contains "${category.key}"`)
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('5 EUR Rabatt auf alle Ersatzteile')
        ['it-IT']('5 EUR di sconto su tutti i pezzi di ricambio')
        ['nl-NL']('5 EUR korting op alle reserveonderdelen')
        ['fr-FR']('5 EUR de réduction sur toutes les pièces détachées')
        ['en-AU']('5 EUR off on all spare parts')
        ['es-ES']('5 EUR de descuento en todos los repuestos')
        ['en-GB']('5 EUR off on all spare parts')
        ['en-NZ']('5 EUR off on all spare parts')
        ['pt-PT']('5 EUR de desconto em todas as peças sobressalentes')
        ['en-US']('5 EUR off on all spare parts')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('5 EUR Rabatt auf alle Ersatzteile')
        ['it-IT']('5 EUR di sconto su tutti i pezzi di ricambio')
        ['nl-NL']('5 EUR korting op alle reserveonderdelen')
        ['fr-FR']('5 EUR de réduction sur toutes les pièces détachées')
        ['en-AU']('5 EUR off on all spare parts')
        ['es-ES']('5 EUR de descuento en todos los repuestos')
        ['en-GB']('5 EUR off on all spare parts')
        ['en-NZ']('5 EUR off on all spare parts')
        ['pt-PT']('5 EUR de desconto em todas as peças sobressalentes')
        ['en-US']('5 EUR off on all spare parts')
    )
    .isActive(true)
    .sortOrder('0.5');

export default spareParts5EurOff;
