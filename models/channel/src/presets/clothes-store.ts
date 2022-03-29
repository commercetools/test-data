import { LocalizedString } from '@commercetools-test-data/commons';
import Channel from '../builder';

const clothesStore = () =>
  Channel()
    .name(LocalizedString.presets.empty().en('Clothes Store'))
    .key('clothes-store-key');

export default clothesStore;
