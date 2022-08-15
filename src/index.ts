type Map = { [key: string]: boolean };
type URL = string;
type Argument = URL | Map;

export default function turls(...args: Argument[]): string {
  let url = "";

  for (const arg of args) {
    if (typeof arg === "string") {
      url += arg;
    }
    else if (typeof arg === "object") {
      const keys = Object.keys(arg);

      if (keys.length > 0) {
        if(url.indexOf("?") !== url.length-1 || !(url.includes("?") && url.indexOf("&") !== url.length-1)) {          
          url += url.includes("?") ? "&" : "?";
        }

        for (const key of keys) {
          if (arg[key]) {
            url += `${key}&`;
          }
        }

        url = url.slice(0, -1);
      }
    }
  }

  return url;
}