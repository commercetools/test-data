import { Image } from '../../../index';
import ProductVariantDraft from '../builder';

function withTwoImages() {
  return ProductVariantDraft().images([
    Image.presets.commercetoolsPosAem(),
    Image.presets.commercetoolsApiPlatform(),
  ]);
}

export default withTwoImages;
