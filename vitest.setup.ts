// Add custom stringFromArray matcher
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(expect as any).stringFromArray = (allowed: string[]) => ({
  asymmetricMatch: (value: unknown) =>
    typeof value === 'string' && allowed.includes(value),
  getExpectedType: () => 'string',
});
