export default async () => {
  return {
    transform: {
      "^.+\\.(t|j)sx?$": ["@swc/jest"],
    },
  };
};