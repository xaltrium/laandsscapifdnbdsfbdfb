import { GoogleGenAI, Type, Schema } from "@google/genai";
import { LeadFormData, AIResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Define the response schema strictly
const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    confirmationMessage: {
      type: Type.STRING,
      description: "A friendly, professional confirmation message for a UK landscaping client.",
    },
    proTip: {
      type: Type.STRING,
      description: "A specific, valuable landscaping tip related to the user's inquiry (e.g., drainage advice for paving).",
    },
  },
  required: ["confirmationMessage", "proTip"],
};

export const generateLeadResponse = async (data: LeadFormData): Promise<AIResponse> => {
  if (!apiKey) {
    // Fallback if no API key is present (for demo purposes)
    return {
      confirmationMessage: "Thank you for contacting HJM Landscaping. We have received your details.",
      proTip: "Tip: Ensure you have good drainage plans for any new patio projects!"
    };
  }

  try {
    const prompt = `
      You are the AI assistant for HJM Landscaping, a premium UK landscaping company.
      A user named ${data.name} from ${data.postcode} has submitted an inquiry.
      Service Interest: ${data.service}
      Project Description: ${data.description}

      Please generate:
      1. A warm, professional British English confirmation message (max 2 sentences).
      2. A specific, helpful "Pro Tip" related to their specific project description or service type (max 2 sentences).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as AIResponse;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Graceful fallback
    return {
      confirmationMessage: `Thanks ${data.name}, we've got your inquiry regarding ${data.service}.`,
      proTip: "We'll be in touch shortly to discuss your project in detail."
    };
  }
};
