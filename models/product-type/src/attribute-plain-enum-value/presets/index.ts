import { TBuilder } from '@commercetools-test-data/core';
import {
  AttributePlainEnumValueRest,
  AttributePlainEnumValueGraphql,
  AttributePlainEnumValue,
} from '../index';
import {
  TAttributePlainEnumValue,
  TAttributePlainEnumValueGraphql,
  TAttributePlainEnumValueRest,
} from '../types';

type TPresets<TModel> = {
  red: () => TBuilder<TModel>;
  blue: () => TBuilder<TModel>;
  green: () => TBuilder<TModel>;
  s: () => TBuilder<TModel>;
  m: () => TBuilder<TModel>;
  l: () => TBuilder<TModel>;
  xl: () => TBuilder<TModel>;
};

const buildPresets = <
  TModel extends TAttributePlainEnumValueRest | TAttributePlainEnumValueGraphql,
>(
  builder: TBuilder<TModel>
): TPresets<TModel> => ({
  red: () => builder.key('red').label('Red color'),
  blue: () => builder.key('blue').label('Blue color'),
  green: () => builder.key('green').label('Green color'),
  s: () => builder.key('s').label('Size S'),
  m: () => builder.key('m').label('Size M'),
  l: () => builder.key('l').label('Size L'),
  xl: () => builder.key('xl').label('Size XL'),
});

export const restPresets: TPresets<TAttributePlainEnumValueRest> = buildPresets(
  AttributePlainEnumValueRest.random()
);
export const graphqlPresets: TPresets<TAttributePlainEnumValueGraphql> =
  buildPresets(AttributePlainEnumValueGraphql.random());
export const compatPresets: TPresets<TAttributePlainEnumValue> = buildPresets(
  AttributePlainEnumValue.random()
);
