import turls from "../index";

describe("Test `turls` function", () => {
  it("should return a string", () => {
    expect(typeof turls("https://www.google.com")).toBe("string");
  });

  it("should include all strings on the URL not as a query and return a valid URL", () => {
    expect(turls("https://www.google.com/", "search")).toBe("https://www.google.com/search");

    expect(turls("https://www.google.com/", "search", "query")).toBe("https://www.google.com/searchquery");
  });

  it("should include true conditiions on the query and return valid URL", () => {
    expect(turls("https://www.google.com",
      {
        [`foo=bar`]: true,
        [`bar=foo`]: false
      }
    )).toBe("https://www.google.com?foo=bar");

    expect(turls("https://www.google.com/",
      { [`foo=bar`]: true }
    )).toBe("https://www.google.com/?foo=bar");

    expect(turls("https://www.google.com/search?",
      { [`foo=bar`]: true }
    )).toBe("https://www.google.com/search?foo=bar");
  })

  it("should not include false conditions on the URL", () => {
    const url = turls("https://www.google.com/search?",
      {
        [`foo=bar`]: true,
        [`fubar=qux`]: false,
        [`bar=foo`]: true
      });

    expect(url).toBe("https://www.google.com/search?foo=bar&bar=foo");
  });

  it("should work with dynamic query parameters and include on the URL", () => {
    const dynamicValue = "bar";
    const url = turls("https://www.google.com/search?",
      {
        [`foo=${dynamicValue}`]: true,
        [`fubar=qux`]: false,
        [`${dynamicValue}=foo`]: true
      });

    expect(url).toBe("https://www.google.com/search?foo=bar&bar=foo");
  });
})