import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      accent: string;
      surface: string;
      text: string;
    };
    fonts: {
      main: string;
    };
  }
}
