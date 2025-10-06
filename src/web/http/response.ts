export class HttpResponse {
    static json(data: any, status = 200): Response {
      return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    static text(content: string, status = 200): Response {
      return new Response(content, {
        status,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    static gingaError(error: number, descripion = 'Some Ginga CCWS Error'): Response {
      return new Response(JSON.stringify({
        error, descripion
      }),{
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
}
