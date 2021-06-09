import FormData from 'form-data';

export type CamelizeString<T extends PropertyKey> = T extends string
  ? string extends T
    ? string
    : T extends `${infer F}_${infer R}`
    ? `${F}${Capitalize<CamelizeString<R>>}`
    : T
  : T;

export type Camelize<T> = { [K in keyof T as CamelizeString<K>]: T[K] };

/* eslint @typescript-eslint/no-explicit-any: 0 */
interface Constructor {
  new (...args: any): any;
}

type Mapper<T extends { [name: string]: Constructor }, P extends keyof T> = {
  [name in P]: InstanceType<T[name]>;
};

export interface BundleType<T extends { [name: string]: Constructor }, P extends keyof T> {
  new (options?: any): Mapper<T, P>;
}

export function bundler<T extends { [name: string]: Constructor }, P extends keyof T>(
  resources: T,
): BundleType<T, P> {
  return function Bundle(options?: any) {
    Object.entries(resources).forEach(([name, Ser]) => {
      /* eslint @typescript-eslint/ban-ts-comment: 0 */
      // @ts-ignore
      this[name] = new Ser(options);
    });
  } as any as BundleType<T, P>;
}

export function appendFormFromObject(object: Record<string, unknown>): FormData {
  /* eslint @typescript-eslint/ban-ts-comment: 0 */
  // @ts-ignore
  const form = new FormData();

  Object.entries(object).forEach(([k, v]) => {
    if (Array.isArray(v)) form.append(k, v[0], v[1]);
    else form.append(k, v as any);
  });

  return form;
}
