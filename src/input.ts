type IsString<T> = T extends string ? 'Yes' : 'No';

type res = IsString<true>;
type res2 = IsString<'abc'>;