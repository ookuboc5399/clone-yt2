declare module "@vimeo/vimeo" {
    export class Vimeo {
      constructor(clientId: string, clientSecret: string, accessToken: string);
      request(
        options: {
          method: string;
          path: string;
          query?: Record<string, any>;
          body?: Record<string, any>;
        },
        callback: (error: any, body: any, statusCode?: number, headers?: any) => void
      ): void;
    }
  }