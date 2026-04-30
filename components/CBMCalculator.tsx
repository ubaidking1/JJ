"use client";
import React, { useState } from 'react';

export default function CBMCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [result, setResult] = useState<number | null>(null);

  const calculateCBM = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const q = parseInt(quantity);

    if (l && w && h && q) {
      // Calculation for CM to CBM: (L * W * H) / 1,000,000 * Quantity
      const cbm = (l * w * h) / 1000000 * q;
      setResult(parseFloat(cbm.toFixed(3)));
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-blue-100 max-w-2xl mx-auto my-16">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <span className="text-3xl">📏</span>
        <h2 className="text-2xl font-bold text-blue-900 text-center">LCL Volume (CBM) Calculator</h2>
      </div>
      
      <p className="text-center text-gray-500 text-sm mb-8">Enter your cargo dimensions in centimeters (cm) to calculate total volume.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Length (cm)</label>
          <input 
            type="number" 
            value={length} 
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-blue-900 font-bold" 
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Width (cm)</label>
          <input 
            type="number" 
            value={width} 
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-blue-900 font-bold" 
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Height (cm)</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-blue-900 font-bold" 
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Quantity</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-blue-900 font-bold" 
            placeholder="1"
          />
        </div>
      </div>

      <button 
        onClick={calculateCBM}
        className="w-full py-4 bg-blue-700 text-white font-black rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200 mb-8 uppercase tracking-widest"
      >
        Calculate CBM
      </button>

      {result !== null && (
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-2xl text-center shadow-xl border-b-4 border-blue-600 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-blue-200 text-xs uppercase font-bold tracking-widest mb-1">Total Shipment Volume</p>
            <h3 className="text-5xl font-black">{result} <span className="text-xl">CBM</span></h3>
            <p className="text-[10px] text-blue-300 mt-4 italic">*This volume is an estimate for cargo booking and consolidation planning.</p>
            
            <div className="mt-6 pt-6 border-t border-blue-700/50">
              <a href="#quote-form" className="inline-block bg-white text-blue-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
                Get Rate for {result} CBM →
              </a>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 text-8xl opacity-10 rotate-12">📦</div>
        </div>
      )}
    </div>
  );
}
