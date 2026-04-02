
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getStylistAdvice(history: ChatMessage[], prompt: string): Promise<string> {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are an expert jewelry stylist for Thriya Jewels. 
          Your tone is elegant, helpful, and sophisticated. 
          Suggest jewelry based on occasions (weddings, festivals, daily wear, gifts) or styles. 
          Always mention prices in Indian Rupees (₹) when referring to value.
          Mention our products: Rings, Necklaces, Earrings, Bracelets in Gold, Silver, and Rose Gold. 
          Keep responses concise but luxurious.`,
        },
      });

      // Send message to Gemini
      const result = await chat.sendMessage({ message: prompt });
      return result.text || "I apologize, I'm unable to provide styling advice at the moment. How else can I help you?";
    } catch (error) {
      console.error("Gemini Stylist Error:", error);
      return "I'm currently attending to other clients. Please try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();
