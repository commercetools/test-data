import AttributePlainEnumValue from '../builder';

const presets = {
  red: () => AttributePlainEnumValue().key('red').label('Red color'),
  blue: () => AttributePlainEnumValue().key('blue').label('Blue color'),
  green: () => AttributePlainEnumValue().key('green').label('Green color'),
  s: () => AttributePlainEnumValue().key('s').label('Size S'),
  m: () => AttributePlainEnumValue().key('m').label('Size M'),
  l: () => AttributePlainEnumValue().key('l').label('Size L'),
  xl: () => AttributePlainEnumValue().key('xl').label('Size XL'),
};

export default presets;
