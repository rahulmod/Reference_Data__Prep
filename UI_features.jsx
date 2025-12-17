import React, { useState, useEffect } from 'react';
import { Search, Database, TrendingUp, Users, Building2, DollarSign, RefreshCw, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const FinancialMDMSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [dataQualityScore, setDataQualityScore] = useState(94);

  // Master Data Entities
  const [securities, setSecurities] = useState([
    { id: 'SEC001', symbol: 'AAPL', name: 'Apple Inc.', type: 'Equity', exchange: 'NASDAQ', sector: 'Technology', status: 'Active', lastUpdated: '2024-12-07' },
    { id: 'SEC002', symbol: 'MSFT', name: 'Microsoft Corporation', type: 'Equity', exchange: 'NASDAQ', sector: 'Technology', status: 'Active', lastUpdated: '2024-12-07' },
    { id: 'SEC003', symbol: 'JPM', name: 'JPMorgan Chase & Co.', type: 'Equity', exchange: 'NYSE', sector: 'Financial', status: 'Active', lastUpdated: '2024-12-07' },
    { id: 'SEC004', symbol: 'US10Y', name: 'US Treasury 10Y', type: 'Bond', exchange: 'OTC', sector: 'Government', status: 'Active', lastUpdated: '2024-12-07' }
  ]);

  const [clients, setClients] = useState([
    { id: 'CLI001', name: 'John Smith', type: 'Individual', riskProfile: 'Moderate', aum: 1250000, advisor: 'ADV001', status: 'Active' },
    { id: 'CLI002', name: 'Tech Ventures LLC', type: 'Corporate', riskProfile: 'Aggressive', aum: 5500000, advisor: 'ADV002', status: 'Active' },
    { id: 'CLI003', name: 'Sarah Johnson', type: 'Individual', riskProfile: 'Conservative', aum: 850000, advisor: 'ADV001', status: 'Active' }
  ]);

  const [referenceData, setReferenceData] = useState({
    exchanges: ['NYSE', 'NASDAQ', 'LSE', 'TSE', 'HKEX', 'OTC'],
    sectors: ['Technology', 'Healthcare', 'Financial', 'Energy', 'Consumer', 'Industrial', 'Government'],
    assetClasses: ['Equity', 'Bond', 'ETF', 'Mutual Fund', 'Options', 'Futures', 'Commodities'],
    riskProfiles: ['Conservative', 'Moderate', 'Balanced', 'Aggressive', 'Very Aggressive'],
    currencies: ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD']
  });

  const [dataGovernance, setDataGovernance] = useState([
    { rule: 'Security Symbol Validation', status: 'passing', checks: 1247, failures: 3 },
    { rule: 'Client KYC Compliance', status: 'passing', checks: 456, failures: 0 },
    { rule: 'Price Data Reconciliation', status: 'warning', checks: 8932, failures: 12 },
    { rule: 'Reference Data Sync', status: 'passing', checks: 2341, failures: 1 }
  ]);

  const filteredSecurities = securities.filter(sec => 
    sec.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Securities</p>
              <p className="text-3xl font-bold mt-2">{securities.length}</p>
            </div>
            <Database className="w-12 h-12 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Active Clients</p>
              <p className="text-3xl font-bold mt-2">{clients.length}</p>
            </div>
            <Users className="w-12 h-12 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Data Quality</p>
              <p className="text-3xl font-bold mt-2">{dataQualityScore}%</p>
            </div>
            <Shield className="w-12 h-12 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Total AUM</p>
              <p className="text-3xl font-bold mt-2">$7.6M</p>
            </div>
            <DollarSign className="w-12 h-12 text-orange-200" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          Data Governance & Quality Rules
        </h3>
        <div className="space-y-3">
          {dataGovernance.map((rule, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                {rule.status === 'passing' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                )}
                <span className="font-medium">{rule.rule}</span>
              </div>
              <div className="text-sm text-gray-600">
                {rule.checks} checks | {rule.failures} failures
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Asset Class Distribution</h3>
          <div className="space-y-3">
            {referenceData.assetClasses.slice(0, 5).map((asset, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-gray-700">{asset}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${Math.random() * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {Math.floor(Math.random() * 30)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Exchange Coverage</h3>
          <div className="space-y-3">
            {referenceData.exchanges.map((exchange, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-gray-700">{exchange}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${Math.random() * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {Math.floor(Math.random() * 500)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SecuritiesMaster = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search securities by symbol or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Sync Data
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exchange</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sector</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredSecurities.map((sec) => (
              <tr 
                key={sec.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedEntity(sec)}
              >
                <td className="px-6 py-4">
                  <span className="font-semibold text-blue-600">{sec.symbol}</span>
                </td>
                <td className="px-6 py-4 text-gray-900">{sec.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                    {sec.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{sec.exchange}</td>
                <td className="px-6 py-4 text-gray-600">{sec.sector}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    {sec.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ClientsMaster = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Profile</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">AUM</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-sm text-gray-600">{client.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">{client.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                    {client.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    client.riskProfile === 'Conservative' ? 'bg-green-100 text-green-700' :
                    client.riskProfile === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {client.riskProfile}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  ${(client.aum / 1000000).toFixed(2)}M
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ReferenceData = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {Object.entries(referenceData).map(([category, items]) => (
        <div key={category} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 capitalize flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Financial MDM/RDM System
          </h1>
          <p className="text-gray-600">
            Master Data Management & Reference Data Management for Financial Advisory & Brokerage
          </p>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'dashboard'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Dashboard
              </div>
            </button>
            <button
              onClick={() => setActiveTab('securities')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'securities'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                Securities Master
              </div>
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'clients'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Clients Master
              </div>
            </button>
            <button
              onClick={() => setActiveTab('reference')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'reference'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Reference Data
              </div>
            </button>
          </div>
        </div>

        <div>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'securities' && <SecuritiesMaster />}
          {activeTab === 'clients' && <ClientsMaster />}
          {activeTab === 'reference' && <ReferenceData />}
        </div>
      </div>
    </div>
  );
};

export default FinancialMDMSystem;
