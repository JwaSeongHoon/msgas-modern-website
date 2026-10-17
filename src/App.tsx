/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { NewsSection } from './components/NewsSection';
import { QuickPortalSection } from './components/QuickPortalSection';

// Dedicated Sub-Pages
import { CompanyPage } from './components/pages/CompanyPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { FacilitiesPage } from './components/pages/FacilitiesPage';
import { EsgPage } from './components/pages/EsgPage';
import { SupportPage } from './components/pages/SupportPage';

// Modals
import { ProductModal } from './components/ProductModal';
import { QuoteModal } from './components/QuoteModal';
import { NoticeModal } from './components/NoticeModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { ChatbotWidget } from './components/ChatbotWidget';

// Data types
import { GasProduct, NoticeItem, PRODUCTS_DATA } from './data/companyData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [language, setLanguage] = useState<'KOR' | 'ENG'>('KOR');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<GasProduct | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [supportInitialTab, setSupportInitialTab] = useState<'notices' | 'msds' | 'faq' | 'inquiry'>('notices');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleOpenQuoteWithProduct = (product?: GasProduct) => {
    setQuoteInitialProduct(product || null);
    setIsQuoteOpen(true);
  };

  const handleOpenMSDS = (_gasName?: string) => {
    setSupportInitialTab('msds');
    setCurrentView('support');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToProducts = () => {
    if (currentView !== 'home') {
      setCurrentView('products');
    } else {
      const el = document.getElementById('products-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#0e1d2a] flex flex-col font-sans antialiased selection:bg-[#c6e7ff] selection:text-[#001e2d]">
      {/* Sticky Main Navigation */}
      <Header
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onOpenQuote={() => handleOpenQuoteWithProduct()}
        onOpenPortal={() => setIsPortalOpen(true)}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full pt-20">
        {currentView === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Hero Section with Tanker Fleet Card */}
            <HeroSection
              onScrollToProducts={handleScrollToProducts}
              onOpenQuote={() => handleOpenQuoteWithProduct()}
              onOpenMSDS={() => handleOpenMSDS()}
              onOpenPortal={() => setIsPortalOpen(true)}
              language={language}
            />

            {/* 2. Metrics & Regional Capability Bento Strip */}
            <MetricsSection
              onSelectMetric={(metric) => {
                if (metric === 'regions' || metric === 'branches') {
                  setCurrentView('facilities');
                } else if (metric === 'revenue' || metric === 'global') {
                  setCurrentView('company');
                }
              }}
            />

            {/* 3. Product Portfolio Grid (GAS-01 ~ GAS-06) */}
            <ProductsSection
              onSelectProduct={(p) => setSelectedProduct(p)}
              onOpenCatalog={() => {
                setSupportInitialTab('msds');
                setCurrentView('products');
              }}
            />

            {/* 4. Total Service Engineering Bento Cards */}
            <ServicesSection
              onOpenServiceDetail={() => {
                setCurrentView('services');
              }}
            />

            {/* 5. R&D, Advanced Facilities & Green Energy */}
            <FacilitiesSection
              onOpenFacilityModal={() => {
                setCurrentView('facilities');
              }}
            />

            {/* 6. ESG & Heritage Showcase (4 photographic mosaic cards) */}
            <ShowcaseSection
              onNavigate={(view) => setCurrentView(view)}
              onOpenMSDS={() => handleOpenMSDS()}
            />

            {/* 7. Press & Official Notices (Featured Tender + List) */}
            <NewsSection
              onSelectNotice={(notice) => setSelectedNotice(notice)}
              onNavigateToSupport={() => {
                setSupportInitialTab('notices');
                setCurrentView('support');
              }}
            />

            {/* 8. Quick Business Portal Bar & Fast Consultation Strip */}
            <QuickPortalSection
              onNavigate={(view) => setCurrentView(view)}
              onOpenQuote={() => handleOpenQuoteWithProduct()}
              onOpenMSDS={() => handleOpenMSDS()}
            />
          </div>
        )}

        {currentView === 'company' && (
          <CompanyPage
            onOpenQuote={() => handleOpenQuoteWithProduct()}
            onNavigate={(view) => setCurrentView(view)}
          />
        )}

        {currentView === 'products' && (
          <ProductsPage
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenQuote={(p) => handleOpenQuoteWithProduct(p)}
            onOpenMSDS={(gasName) => handleOpenMSDS(gasName)}
          />
        )}

        {currentView === 'services' && (
          <ServicesPage
            onOpenQuote={() => handleOpenQuoteWithProduct()}
          />
        )}

        {currentView === 'facilities' && (
          <FacilitiesPage />
        )}

        {currentView === 'esg' && (
          <EsgPage />
        )}

        {currentView === 'support' && (
          <SupportPage
            initialTab={supportInitialTab}
            onSelectNotice={(notice) => setSelectedNotice(notice)}
            onOpenQuote={() => handleOpenQuoteWithProduct()}
          />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onNavigate={(view) => setCurrentView(view)}
        onOpenQuote={() => handleOpenQuoteWithProduct()}
      />

      {/* Product Spec Inspection Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onStartQuote={(product) => handleOpenQuoteWithProduct(product)}
        onOpenMSDS={(gasName) => {
          setSelectedProduct(null);
          handleOpenMSDS(gasName);
        }}
      />

      {/* Interactive Quotation Calculator & Inquiry Modal */}
      {isQuoteOpen && (
        <QuoteModal
          initialProduct={quoteInitialProduct || PRODUCTS_DATA[0]}
          onClose={() => setIsQuoteOpen(false)}
        />
      )}

      {/* Notice & Tender Reader Modal */}
      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      {/* 24H Tanker GPS Mesh & Client Portal Modal */}
      {isPortalOpen && (
        <ClientPortalModal
          onClose={() => setIsPortalOpen(false)}
          onOpenQuote={() => {
            setIsPortalOpen(false);
            handleOpenQuoteWithProduct();
          }}
        />
      )}

      {/* Floating 24H AI Technical Consultant Chatbot */}
      <ChatbotWidget
        onOpenQuote={() => handleOpenQuoteWithProduct()}
        onOpenMSDS={() => handleOpenMSDS()}
        onNavigateToFacilities={() => {
          setCurrentView('facilities');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
