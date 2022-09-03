export interface ISuggestion {
  "input": string[],
  "weight": number,
  "contexts": {
    "groupings": string[]
  }
}
