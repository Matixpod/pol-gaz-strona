"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Upload } from 'lucide-react';

interface FormData {
  date: string;
  clientName: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  boilerModel: string;
  serialNumber: string;
  yearProduction: string;
  userReport: string;
  symptomsDescription: string;
  parts1: string;
  parts2: string;
  parts3: string;
  parts4: string;
  parts5: string;
  parts6: string;
  gasSealing: boolean;
  gasProtection: boolean;
  exhaustAnalysis: boolean;
  chimneyTime: string;
  nextInspection: string;
  deviceStatus: string;
  serviceDate: string;
  userSignature: string | null;
}

export default function ServiceProtocol() {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    clientName: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    boilerModel: '',
    serialNumber: '',
    yearProduction: '',
    userReport: '',
    symptomsDescription: '',
    parts1: '',
    parts2: '',
    parts3: '',
    parts4: '',
    parts5: '',
    parts6: '',
    gasSealing: false,
    gasProtection: false,
    exhaustAnalysis: false,
    chimneyTime: '',
    nextInspection: '',
    deviceStatus: '',
    serviceDate: '',
    userSignature: null
  });

  const [suggestions, setSuggestions] = useState<Record<string, string[]>>({});
  const [showSuggestions, setShowSuggestions] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Załaduj zapisane dane przy starcie
  useEffect(() => {
    const saved = localStorage.getItem('formSuggestions');
    if (saved) {
      setSuggestions(JSON.parse(saved));
    }
    
    // Automatyczne wypełnienie dzisiejszej daty
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({
      ...prev,
      date: today,
      serviceDate: today
    }));
  }, []);

  // Zapisz sugestie do localStorage
  const saveSuggestion = (field: string, value: string) => {
    if (!value || value.length < 2) return;
    
    setSuggestions(prev => {
      const fieldSuggestions = prev[field] || [];
      if (!fieldSuggestions.includes(value)) {
        const updated = {
          ...prev,
          [field]: [...fieldSuggestions, value].slice(-10) // Zachowaj ostatnie 10
        };
        localStorage.setItem('formSuggestions', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  const handleChange = (field: string, value: string | boolean) => {
    // Formatowanie numeru telefonu
    if (field === 'phone' && typeof value === 'string') {
      // Usuń wszystkie znaki oprócz cyfr
      const digits = value.replace(/\D/g, '');
      // Dodaj spacje co 3 cyfry
      const formatted = digits.replace(/(\d{3})(?=\d)/g, '$1 ');
      setFormData(prev => ({ ...prev, [field]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleBlur = (field: string, value: string) => {
    saveSuggestion(field, value);
    setShowSuggestions(prev => ({ ...prev, [field]: false }));
  };

  const handleFocus = (field: string) => {
    setShowSuggestions(prev => ({ ...prev, [field]: true }));
  };

  const selectSuggestion = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setShowSuggestions(prev => ({ ...prev, [field]: false }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, userSignature: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const renderInputWithSuggestions = (field: string, placeholder: string, type = 'text') => {
    const fieldSuggestions = suggestions[field] || [];
    const filteredSuggestions = fieldSuggestions.filter((s: string) => 
      s.toLowerCase().includes((formData[field as keyof typeof formData] || '').toString().toLowerCase())
    );

    return (
      <div className="relative">
        <input
          type={type}
          value={formData[field as keyof typeof formData] as string}
          onChange={(e) => handleChange(field, e.target.value)}
          onBlur={(e) => handleBlur(field, e.target.value)}
          onFocus={() => handleFocus(field)}
          className="w-full border-b border-gray-400 focus:border-blue-500 outline-none px-1 py-1 text-sm bg-white"
          placeholder={placeholder}
        />
        {showSuggestions[field] && filteredSuggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg mt-1 max-h-40 overflow-y-auto">
            {filteredSuggestions.map((suggestion: string, idx: number) => (
              <div
                key={idx}
                className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm"
                onMouseDown={() => selectSuggestion(field, suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-black">
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
        {/* Przycisk drukuj - ukryty przy drukowaniu */}
        <div className="print:hidden p-4 border-b flex justify-end gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Drukuj / Zapisz PDF
          </button>
        </div>

        {/* Formularz */}
        <div className="p-8 print:p-6">
          {/* Nagłówek */}
          <div className="text-center mb-3">
            <h1 className="text-xl font-bold uppercase">Protokół Serwisowy</h1>
          </div>

          {/* Data */}
          <div className="mb-3 flex items-center gap-2">
            <span className="font-semibold">Data:</span>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              className="border-b border-gray-400 px-1 py-1 text-sm flex-1 outline-none focus:border-blue-500"
            />
          </div>

          {/* Dane klienta */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold w-32 shrink-0">Nazwa klient:</span>
              <div className="flex-1">
                {renderInputWithSuggestions('clientName', 'Nazwa firmy/klienta')}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold w-32 shrink-0">Nazwisko Imię:</span>
              <div className="flex-1 flex gap-2">
                {renderInputWithSuggestions('lastName', 'Nazwisko')}
                {renderInputWithSuggestions('firstName', 'Imię')}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold w-32 shrink-0">Adres:</span>
              <div className="flex-1">
                {renderInputWithSuggestions('address', 'Ulica i numer')}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold w-32 shrink-0">Miejscowość:</span>
              {renderInputWithSuggestions('city', 'Miasto')}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold w-32 shrink-0">Telefon:</span>
              {renderInputWithSuggestions('phone', '+48', 'tel')}
            </div>
          </div>

          {/* Dane kotła */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold w-32 shrink-0">Kocioł – model:</span>
              <div className="flex-1">
                {renderInputWithSuggestions('boilerModel', 'Model kotła')}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold w-60 shrink-0">Nr. Fabryczny – rok produkcji:</span>
              <div className="flex-1 flex gap-2">
                {renderInputWithSuggestions('serialNumber', 'Numer seryjny')}
                {renderInputWithSuggestions('yearProduction', 'Rok', 'number')}
              </div>
            </div>
          </div>

          {/* Opis zgłoszenia */}
          <div className="mb-3">
            <div className="font-semibold mb-1 text-sm">Opis zgłoszenia Użytkownika:</div>
            <textarea
              value={formData.userReport}
              onChange={(e) => handleChange('userReport', e.target.value)}
              onBlur={(e) => handleBlur('userReport', e.target.value)}
              className="w-full border border-gray-400 p-1 text-xs h-12 outline-none focus:border-blue-500"
              placeholder="Opis problemu zgłoszonego przez użytkownika..."
            />
          </div>

          {/* Objawy / Czynności */}
          <div className="mb-3">
            <div className="font-semibold mb-1 text-sm">Objawy / Opis Czynności / Uwagi:</div>
            <textarea
              value={formData.symptomsDescription}
              onChange={(e) => handleChange('symptomsDescription', e.target.value)}
              onBlur={(e) => handleBlur('symptomsDescription', e.target.value)}
              className="w-full border border-gray-400 p-1 text-xs h-16 outline-none focus:border-blue-500"
              placeholder="Szczegółowy opis wykonanych czynności i uwag..."
            />
          </div>

          {/* Wymienione części i kontrole - obok siebie */}
          <div className="mb-3 grid grid-cols-2 gap-4">
            {/* Lewa kolumna - Wymienione części */}
            <div>
              <div className="font-semibold mb-1 text-sm">Wymienione częsci:</div>
              <div className="space-y-1">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <span className="w-6">{num}.</span>
                    {renderInputWithSuggestions(`parts${num}`, `Część ${num}`)}
                  </div>
                ))}
              </div>
            </div>

            {/* Prawa kolumna - Kontrole i pozostałe */}
            <div className="space-y-2">
              {/* Kontrole - checkboxy */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.gasSealing}
                    onChange={(e) => handleChange('gasSealing', e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Kontrola szczelności gazowej urządzenia.</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.gasProtection}
                    onChange={(e) => handleChange('gasProtection', e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Kontrola zabezpieczenia przeciwwypływowego gazu.</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.exhaustAnalysis}
                    onChange={(e) => handleChange('exhaustAnalysis', e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Analiza spalin.</span>
                </div>
              </div>

              {/* Czas zadziałania czujnika */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Czas zadziałania czujnika ciągu kominowego:</span>
                <input
                  type="number"
                  value={formData.chimneyTime}
                  onChange={(e) => handleChange('chimneyTime', e.target.value)}
                  className="w-20 border-b border-gray-400 px-1 py-1 text-sm outline-none focus:border-blue-500"
                  placeholder="0"
                />
                <span className="text-sm">sekund</span>
              </div>

              {/* Termin następnego badania */}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">Termin następnego badania:</span>
                <input
                  type="date"
                  value={formData.nextInspection}
                  onChange={(e) => handleChange('nextInspection', e.target.value)}
                  className="border-b border-gray-400 px-1 py-1 text-sm flex-1 outline-none focus:border-blue-500"
                />
              </div>
              
              {/* Status urządzenia */}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">Urządzenie jest:</span>
                {renderInputWithSuggestions('deviceStatus', 'Sprawne/Niesprawne')}
              </div>
            </div>
          </div>

          {/* Potwierdzenie */}
          <div className="border-t-2 border-gray-800 pt-2 mt-4">
            <div className="font-semibold mb-2 text-sm">Potwierdzenie wykonania usługi</div>
            
            <div className="mb-2 flex items-center gap-2 text-sm">
              <span className="font-semibold">Data:</span>
              <input
                type="date"
                value={formData.serviceDate}
                onChange={(e) => handleChange('serviceDate', e.target.value)}
                className="border-b border-gray-400 px-1 py-1 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-1">
              <span className="font-semibold text-sm">Czytelny podpis użytkownika:</span>
            </div>
            
            <div className="mt-2 flex justify-end">
              {formData.userSignature ? (
                <div className="relative inline-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={formData.userSignature} 
                    alt="Podpis" 
                    className="max-h-20"
                  />
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, userSignature: null }))}
                    className="print:hidden absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs rounded"
                  >
                    Usuń
                  </button>
                </div>
              ) : (
                <div className="print:hidden">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded border border-gray-400"
                  >
                    <Upload size={16} />
                    Wstaw podpis/pieczątkę
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Style dla druku */}
      <style jsx global>{`
        @media print {
          /* Ukryj header i footer podczas druku */
          header,
          footer,
          nav {
            display: none !important;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          @page {
            margin: 0.5cm;
            size: A4;
          }
          
          /* Usuń padding z main */
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}