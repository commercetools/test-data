import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const r123Ts20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('r123-ts-2015-1')
    .sku('r123-ts-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1045000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default r123Ts20151;
