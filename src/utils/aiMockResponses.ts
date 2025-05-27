export const generateMockAIResponse = (question: string): string => {
  const responses = [
    "Based on the documents in your portal, here's what I can tell you:",
    "I've analyzed your documents and my response is:",
    "After review, I found this information:",
    "From the document analysis, I discovered:"
  ];

  const answers: Record<string, string> = {
    contract: 'Several contract documents found. The latest has a 12-month validity.',
    invoice: 'Invoices show $15,420 pending. Latest generated on the 15th of this month.',
    report: 'Quarterly report shows 23% productivity increase with positive trends.',
    policy: 'Company policy updated 6 months ago, covering remote work and security.'
  };

  const lower = question.toLowerCase();

  for (const key in answers) {
    if (lower.includes(key)) {
      return `${responses[Math.floor(Math.random() * responses.length)]} ${answers[key]}`;
    }
  }

  return `${responses[Math.floor(Math.random() * responses.length)]} I don’t have specific info on "${question}". Please check recent uploads or refine your search.`;
};
