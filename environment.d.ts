declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_RAPID_API_KEY: string;
        NEXT_PUBLIC_RAPID_API_HOST: string;
        NEXT_PUBLIC_IMAGIN_API_KEY: string;
      }
    }
  }

  export {}