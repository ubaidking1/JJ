import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/mistakes-marketers-make-with-ai" },
  title: "AI Marketing Mistakes | Jilani Shipping Blog",
  description: "Learn common AI marketing mistakes, practical fixes, vibe coding practices and ways to build more reliable AI solutions.",
  keywords: ["AI in marketing", "vibe coding", "AI mistakes", "marketing automation", "AI best practices", "Claude Code", "MCP connector"],
};

export default function AiMarketingMistakes() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <article className="prose lg:prose-xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
            AI & Technology
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-6">
            Mistakes Marketers Keep Making with AI and How to Fix Them
          </h1>
          <p className="text-gray-500 text-lg italic">
            Published on May 20, 2026 • Live Session Announcement
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-12 shadow-sm">
          <p className="text-xl text-blue-900 font-medium leading-relaxed italic">
            "Spending more tokens fixing your vibe coded app than building it? Unable to improve the mediocre content that your AI creates? Numbers from the MCP connector not matching the main platform, again?"
          </p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            If you’re facing these problems with AI, you’re not alone! Many marketers and developers are struggling with the transition to agent-driven, AI-integrated workflows.
          </p>
          
          <p>
            The promise of AI is to put your life and business on autopilot, but without the right architecture and best practices, it can often lead to more work rather than less.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10">Join Our Live Session</h2>
          <p>
            In this upcoming live session, we'll be walking through the most common, most painful mistakes marketers make with AI. We’ll also be showcasing <strong>vibe coding best practices</strong> you can adopt to stop making these mistakes for good.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                🌍 APAC / EU Session
              </h3>
              <p className="text-sm font-semibold text-gray-600">📆 21st May</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• 5:00 PM Singapore</li>
                <li>• 2:30 PM Mumbai</li>
                <li>• 10:00 AM London</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                🌎 NA / SA Session
              </h3>
              <p className="text-sm font-semibold text-gray-600">📆 22nd May</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• 12:00 PM New York</li>
                <li>• 9:00 AM San Francisco</li>
                <li>• 6:00 PM Berlin</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-10">What You'll Learn</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>How to escape the "token trap" when fixing AI-generated code.</li>
            <li>Strategies for elevating AI content from mediocre to high-impact.</li>
            <li>Ensuring data integrity across MCP connectors and main platforms.</li>
            <li>Vibe coding best practices for sustainable AI development.</li>
          </ul>

          <p className="mt-8">
            Don't miss out on this opportunity to transform your AI builds from frustrating experiments into powerful business partners.
          </p>
        </div>

        <div className="mt-16 p-8 bg-blue-900 text-white rounded-3xl text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Level Up Your AI?</h2>
          <p className="mb-8 text-blue-100">
            Join us and walk away with better, more powerful AI builds!
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg">
            Register for the Session
          </Link>
        </div>
      </article>

      <div className="mt-20 border-t pt-10 text-center">
        <Link href="/" className="text-blue-600 font-bold hover:underline">
          ← Back to Jilani Shipping Home
        </Link>
      </div>
    </main>
  );
}
