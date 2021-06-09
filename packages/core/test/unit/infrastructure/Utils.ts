import FormData from 'form-data';
import { bundler, appendFormFromObject } from '../../../src/infrastructure';

describe('bundler', () => {
  /* eslint max-classes-per-file: 0 */
  class Test1 {
    public value: number;

    constructor(value: number) {
      this.value = value * 3;
    }
  }

  class Test2 {
    public value: number;

    constructor(value: number) {
      this.value = value * 2;
    }
  }

  it('should merge classes passed to Bundler', () => {
    const Bundle = bundler({ Test1, Test2 });
    const resources = new Bundle();

    expect(resources.Test1).toBeInstanceOf(Test1);
    expect(resources.Test2).toBeInstanceOf(Test2);
  });

  it('should initialize classes passed to Bundler with options', () => {
    const Bundle = bundler({ Test1, Test2 });
    const resources = new Bundle(2);

    expect(resources.Test1.value).toBe(6);
    expect(resources.Test2.value).toBe(4);
  });
});

describe('appendFormFromObject', () => {
  it('should convert object key/values to formdata instance', () => {
    const data = { a: 5, b: 'test' };
    const form = appendFormFromObject(data);

    expect(form).toBeInstanceOf(FormData);
  });

  it('should convert object key/values with metadata to formdata instance', () => {
    const data = { a: 5, b: ['test', { filename: 'name.jpg' }] };
    const form = appendFormFromObject(data);

    expect(form).toBeInstanceOf(FormData);
  });
});
