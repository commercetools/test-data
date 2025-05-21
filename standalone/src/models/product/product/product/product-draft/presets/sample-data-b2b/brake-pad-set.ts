import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { productPriceMode } from '../../../constants';
import type { TProductDraft } from '../../../types';
import { ProductDraft } from '../../index';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const brakePadSet = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('brake-pad-set')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bremsbelagsatz')
        ['it-IT']('Set di pastiglie freno')
        ['nl-NL']('Remblokkenset')
        ['fr-FR']('Jeu de plaquettes de frein')
        ['es-ES']('Juego de pastillas de freno')
        ['pt-PT']('Conjunto de pastilhas de freio')
        ['en-US']('Brake Pad Set')
        ['en-GB']('Brake Pad Set')
        ['en-AU']('Brake Pad Set')
        ['en-NZ']('Brake Pad Set')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Stellt die Reibung bereit, um das Fahrzeug anzuhalten.')
        ['it-IT']("Fornisce l'attrito per fermare il veicolo.")
        ['nl-NL']('Zorgt voor de wrijving om het voertuig te stoppen.')
        ['fr-FR']('Fournit la friction nécessaire pour arrêter le véhicule.')
        ['es-ES']('Proporciona la fricción para detener el vehículo.')
        ['pt-PT']('Fornece a fricção para parar o veículo.')
        ['en-US']('Provides the friction to stop the vehicle.')
        ['en-GB']('Provides the friction to stop the vehicle.')
        ['en-AU']('Provides the friction to stop the vehicle.')
        ['en-NZ']('Provides the friction to stop the vehicle.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('brake-pad-set')
        ['it-IT']('brake-pad-set')
        ['nl-NL']('brake-pad-set')
        ['fr-FR']('brake-pad-set')
        ['es-ES']('brake-pad-set')
        ['pt-PT']('brake-pad-set')
        ['en-US']('brake-pad-set')
        ['en-GB']('brake-pad-set')
        ['en-AU']('brake-pad-set')
        ['en-NZ']('brake-pad-set')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.brakePadSet01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default brakePadSet;
