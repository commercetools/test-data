import * as Image from '@commercetools-test-data/image';
import ProductVariantDraft from '../builder';

function withOneImage() {
  return ProductVariantDraft().images([Image.presets.commercetoolsPosAem()]);
}

export default withOneImage;
