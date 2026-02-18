import React, { useState } from 'react';
import { LeadFormData, ServiceType, AIResponse } from '../types';
import { generateLeadResponse } from '../services/geminiService';
import { Send, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: ServiceType.PAVING,
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network delay for realism + actual AI call
    try {
      const response = await generateLeadResponse(formData);
      setAiResponse(response);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('success'); // Still show success even if AI fails (fallback handled in service)
      setAiResponse({
        confirmationMessage: "Thanks for your message!",
        proTip: "We will contact you shortly."
      });
    }
  };

  if (status === 'success' && aiResponse) {
    return (
      <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-emerald-100 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 p-4 rounded-full">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
        </div>
        <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Inquiry Received!</h3>
        <p className="text-emerald-800 mb-6 text-lg">{aiResponse.confirmationMessage}</p>
        
        <div className="bg-white p-6 rounded-xl border border-emerald-200 shadow-sm text-left max-w-lg mx-auto transform transition-all hover:scale-105">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-emerald-900 text-sm uppercase tracking-wider mb-1">HJM Pro Tip</h4>
              <p className="text-stone-600 italic">"{aiResponse.proTip}"</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => { setStatus('idle'); setFormData({ ...formData, description: '' }); }}
          className="mt-8 text-emerald-600 font-semibold hover:text-emerald-700 underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
      <div className="bg-emerald-900 p-6 md:p-8 text-white">
        <h3 className="text-2xl font-serif font-bold mb-2">Get a Free Quote</h3>
        <p className="text-emerald-100 opacity-90">Tell us about your project. Our AI will analyze your request and provide an instant landscaping tip!</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="e.g. John Smith"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Postcode</label>
            <input
              required
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="e.g. SW1A 1AA"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="07700 900000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Service Required</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
          >
            {Object.values(ServiceType).map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Project Details</label>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
            placeholder="Describe your vision... (e.g. 'I want a natural stone patio with a space for a BBQ')"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Analyzing Project...
            </>
          ) : (
            <>
              Get My Free Quote
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
        <p className="text-xs text-stone-400 text-center mt-2">
          Your data is secure. We usually respond within 24 hours.
        </p>
      </form>
    </div>
  );
};
