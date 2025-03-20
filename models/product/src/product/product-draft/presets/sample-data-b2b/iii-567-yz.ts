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
import { productPriceMode } from '../../../constants';
import { ProductDraft } from '../../../index';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const pilingHammersCategory = CategoryDraft.presets.sampleDataB2B
  .pilingHammers()
  .build<TCategoryDraft>();

const iii567Yz = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('iii567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('III567 YZ Rammpfahlhammer')
        ['it-IT']('III567 YZ Martello per Pali')
        ['nl-NL']('III567 YZ Heihamer')
        ['fr-FR']('III567 YZ Marteau de battage')
        ['en-AU']('III567 YZ Piling Hammer')
        ['es-ES']('III567 YZ Martillo de pilotaje')
        ['en-GB']('III567 YZ Piling Hammer')
        ['en-NZ']('III567 YZ Piling Hammer')
        ['pt-PT']('III567 YZ Martelo de Cravação')
        ['en-US']('III567 YZ Piling Hammer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Robuster Rammpfahlhammer mit fortschrittlicher Schlagkraftregelung für effizientes und kontrolliertes Rammen von Fundamenten.')
        [
          'it-IT'
        ]("Martello robusto per pali con controllo avanzato della forza d'impatto per piantare pali in modo efficiente e controllato.")
        [
          'nl-NL'
        ]('Robuuste heihamer met geavanceerde slagkrachtcontrole voor efficiënt en gecontroleerd heien van funderingen.')
        [
          'fr-FR'
        ]("Marteau de battage robuste avec un contrôle avancé de la force d'impact pour un fonçage de fondation efficace et maîtrisé.")
        [
          'en-AU'
        ]('Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.')
        [
          'es-ES'
        ]('Martillo de pilotaje robusto con control avanzado de la fuerza de impacto para pilotes de cimentación eficientes y controlados.')
        [
          'en-GB'
        ]('Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.')
        [
          'en-NZ'
        ]('Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.')
        [
          'pt-PT'
        ]('Martelo de cravação robusto com controle avançado de força de impacto para cravação eficiente e controlada de fundações.')
        [
          'en-US'
        ]('Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('iii567-yz')
        ['it-IT']('iii567-yz')
        ['nl-NL']('iii567-yz')
        ['fr-FR']('iii567-yz')
        ['en-AU']('iii567-yz')
        ['es-ES']('iii567-yz')
        ['en-GB']('iii567-yz')
        ['en-NZ']('iii567-yz')
        ['pt-PT']('iii567-yz')
        ['en-US']('iii567-yz')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(heavyLiftingAndSpecializedEquipmentProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.iii567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.iii567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.iii567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(pilingHammersCategory.key!),
    ]);

export default iii567Yz;
