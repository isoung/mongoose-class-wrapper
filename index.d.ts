interface ILoadClassOptions {
  target: any;
  options: object;
}

declare function loadClass(schema: any, {target: any , options: object}:ILoadClassOptions): void;
export = loadClass;
