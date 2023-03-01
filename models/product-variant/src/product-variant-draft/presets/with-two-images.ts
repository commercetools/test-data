import * as Image from '@commercetools-test-data/image';
import ProductVariantDraft from '../builder';

function withTwoImages() {
  return ProductVariantDraft().images([
    Image.presets.commercetoolsPosAem(),
    Image.presets.commercetoolsApiPlatform(),
  ]);
}

export default withTwoImages;
