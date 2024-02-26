import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const uu789UvGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('uu789-uv-green-2')
    .sku('uu789-uv-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3025000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default uu789UvGreen2;
