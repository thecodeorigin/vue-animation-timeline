declare module "*.vue" {
  import { DefineComponent } from "vue";

  const Component: DefineComponent<any, any, any>;
  export default Component;
}
