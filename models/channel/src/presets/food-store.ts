import { LocalizedString } from '@commercetools-test-data/commons';
import Channel from '../builder';

const foodStore = () =>
  Channel()
    .name(
      LocalizedString.presets
        .empty()
        .en('Food Store')
        .de('Lebensmittelgeschäft')
    )
    .key('food-store-key');

export default foodStore;
