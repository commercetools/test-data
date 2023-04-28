import { Image } from '../../../index';
import ProductVariantDraft from '../builder';

function withOneImage() {
  return ProductVariantDraft().images([Image.presets.commercetoolsPosAem()]);
}

export default withOneImage;
