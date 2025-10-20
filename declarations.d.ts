declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export = classes;
}
declare module "*.svg" {
  const value: string;
  export default value;
}