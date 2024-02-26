import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant';
import { ProductDraft } from '../../../index';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const airFilter = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('air-filter')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Luftfilter')
        ['it-IT']('Filtro aria')
        ['nl-NL']('Luchtfilter')
        ['fr-FR']('Filtre à air')
        ['es-ES']('Filtro de aire')
        ['pt-PT']('Filtro de ar')
        ['en-US']('Air Filter')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Filtert die in den Motor eindringende Luft, um Motorverschleiß zu verhindern.'
        )
        ['it-IT'](
          'Filtra l&#39;aria che entra nel motore per prevenire l&#39;usura del motore.'
        )
        ['nl-NL'](
          'Filtert de lucht die de motor binnenkomt om motorslijtage te voorkomen.'
        )
        ['fr-FR'](
          'Filtre l&#39;air entrant dans le moteur pour prévenir l&#39;usure du moteur.'
        )
        ['es-ES'](
          'Filtra el aire que entra en el motor para prevenir el desgaste del motor.'
        )
        ['pt-PT'](
          'Filtra o ar que entra no motor para prevenir o desgaste do motor.'
        )
        ['en-US']('Filters air entering the engine to prevent engine wear.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('air-filter')
        ['it-IT']('air-filter')
        ['nl-NL']('air-filter')
        ['fr-FR']('air-filter')
        ['es-ES']('air-filter')
        ['pt-PT']('air-filter')
        ['en-US']('air-filter')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(genericProductProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.airFilter01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default airFilter;
