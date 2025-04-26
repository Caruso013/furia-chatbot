declare module '*.json' {
  const value: { question: string; answer: string }[];
  export default value;
}