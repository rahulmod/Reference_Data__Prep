import React, { useState } from 'react';
import { Bitcoin, Database, Shield, Layers, GitBranch, Server, Lock, Activity, TrendingUp, Globe, AlertCircle, CheckCircle, Zap, Coins, Network, Cloud, HardDrive } from 'lucide-react';

const CryptoMDMArchitecture = () => {
  const [activeView, setActiveView] = useState('overview');
  const [selectedAsset, setSelectedAsset] = useState('bitcoin');

  const cryptoAssets = [
    { id: 'bitcoin', name: 'Bitcoin (BTC)', type: 'Layer 1', networks: ['Bitcoin', 'Lightning'], custody: 'Cold 95%' },
    { id: 'ethereum', name: 'Ethereum (ETH)', type: 'Layer 1', networks: ['Ethereum', 'Arbitrum', 'Optimism', 'Base'], custody: 'Cold 90%' },
    { id: 'solana', name: 'Solana (SOL)', type: 'Layer 1', networks: ['Solana'], custody: 'Cold 92%' },
    { id: 'usdc', name: 'USDC', type: 'Stablecoin', networks: ['Ethereum', 'Solana', 'Arbitrum', 'Base'], custody: 'Cold 85%' },
    { id: 'tokenized', name: 'Tokenized Securities', type: 'RWA', networks: ['Arbitrum'], custody: 'Cold 98%' }
  ];

  const architectureLayers = [
    {
      name: 'Blockchain Networks',
      components: ['Bitcoin Network', 'Ethereum Mainnet', 'Solana', 'Layer 2s (Arbitrum, Optimism, Base)', 'Cross-chain Bridges'],
      color: 'bg-purple-100 border-purple-300'
    },
    {
      name: 'Custody Layer',
      components: ['Cold Storage (HSM)', 'Hot Wallets', 'Multi-sig Wallets', 'Key Management System', 'Robinhood Wallet (Self-custody)'],
      color: 'bg-blue-100 border-blue-300'
    },
    {
      name: 'Data Ingestion',
      components: ['Blockchain Indexers', 'Market Data Feeds', 'On-chain Event Listeners', 'Transaction Mempool Monitors', 'Oracle Networks'],
      color: 'bg-green-100 border-green-300'
    },
    {
      name: 'Crypto MDM Hub',
      components: ['Asset Master', 'Wallet Registry', 'Transaction Master', 'Balance Aggregator', 'Token Metadata Service'],
      color: 'bg-yellow-100 border-yellow-300'
    },
    {
      name: 'Integration Layer',
      components: ['Bitstamp Bridge', 'Traditional Finance Sync', 'Unified Customer View', 'Portfolio Aggregation', 'Cross-asset Settlement'],
      color: 'bg-indigo-100 border-indigo-300'
    },
    {
      name: 'Application Layer',
      components: ['Trading Engine', 'Staking Service', 'Transfer Service', 'API Gateway', 'Robinhood Ledger (Institutional)'],
      color: 'bg-pink-100 border-pink-300'
    }
  ];

  const cryptoDataModel = {
    'Asset Master': [
      'Chain ID (Ethereum: 1, Arbitrum: 42161)',
      'Contract Address (ERC-20 tokens)',
      'Token Standard (ERC-20, SPL, BRC-20)',
      'Decimal Precision',
      'Circulating Supply',
      'Market Cap',
      'Security Classification'
    ],
    'Wallet Registry': [
      'Wallet Address (Multi-chain)',
      'Derivation Path (BIP-44/BIP-32)',
      'Custody Type (Hot/Cold/Self)',
      'Multi-sig Configuration',
      'Customer Mapping',
      'Network Associations',
      'Balance Cache'
    ],
    'Transaction Master': [
      'Transaction Hash',
      'Block Number & Timestamp',
      'From/To Addresses',
      'Amount & Gas Fees',
      'Transaction Type (Transfer/Swap/Stake)',
      'Settlement Status',
      'Regulatory Flags'
    ],
    'Token Metadata': [
      'Token Name & Symbol',
      'Logo & Branding',
      'Project Information',
      'Audit Reports',
      'Risk Scores',
      'Listing Status',
      'Supported Networks'
    ]
  };

  const bitstampIntegration = [
    {
      component: 'Institutional Order Routing',
      description: 'Smart order routing through Bitstamp for deep liquidity',
      status: 'Active',
      dataFlow: 'Robinhood Ledger → Bitstamp API → MDM Hub'
    },
    {
      component: 'Global License Registry',
      description: '50+ licenses across EU, UK, US, Asia in reference data',
      status: 'Active',
      dataFlow: 'Bitstamp Compliance DB → RDM → Unified Registry'
    },
    {
      component: 'Crypto-as-a-Service',
      description: 'White-label infrastructure and institutional lending',
      status: 'Integration',
      dataFlow: 'Bitstamp Platform → Service Layer → Customer Accounts'
    },
    {
      component: 'Staking Infrastructure',
      description: 'ETH, SOL, ADA staking through Bitstamp nodes',
      status: 'Active',
      dataFlow: 'Customer Assets → Bitstamp Validators → Rewards Engine'
    },
    {
      component: 'Custody Consolidation',
      description: 'Unified custody view across Robinhood + Bitstamp',
      status: 'In Progress',
      dataFlow: 'Both Custody Systems → MDM Hub → Golden Records'
    }
  ];

  const shardingStrategy = {
    overview: 'Crypto sharding extends brokerage model with blockchain-specific considerations',
    approach: [
      'Customer-based sharding: hash(customer_id) % num_shards',
      'Each shard: Django app + PostgreSQL + Redis cache + Kafka consumer',
      'Shared settlement service across shards for efficiency',
      'Blockchain node connections pooled across shards',
      'Cross-shard balance aggregation for portfolio view'
    ],
    challenges: [
      'Hot wallet management per shard (security vs. liquidity)',
      'Cross-shard transfers require coordination',
      'Blockchain confirmations tracked per shard',
      'Gas fee optimization across shards'
    ]
  };

  const referenceDataSources = [
    { category: 'Chain IDs', source: 'ChainList (chainid.network)', update: 'Weekly', criticality: 'High' },
    { category: 'Token Contracts', source: 'CoinGecko, Etherscan', update: 'Real-time', criticality: 'Critical' },
    { category: 'Network Parameters', source: 'Blockchain Explorers', update: 'Daily', criticality: 'High' },
    { category: 'Gas Prices', source: 'EthGasStation, Blocknative', update: 'Real-time', criticality: 'Critical' },
    { category: 'Staking Validators', source: 'On-chain Queries', update: 'Hourly', criticality: 'Medium' },
    { category: 'DEX Liquidity', source: '0x API, LI.FI', update: 'Real-time', criticality: 'High' },
    { category: 'Oracle Prices', source: 'Chainlink, Pyth', update: 'Real-time', criticality: 'Critical' },
    { category: 'Regulatory Status', source: 'SEC, CFTC, MiCA', update: 'Daily', criticality: 'High' }
  ];

  const securityModel = [
    {
      layer: 'Cold Storage',
      details: '95% of crypto in HSM-protected cold wallets, air-gapped',
      controls: ['Multi-party computation', 'Geographic distribution', 'Regular audits', 'Lloyd\'s insurance']
    },
    {
      layer: 'Hot Wallets',
      details: '5% in hot wallets for daily operations with tiered limits',
      controls: ['Multi-sig (3-of-5)', 'Transaction velocity limits', 'Anomaly detection', 'Real-time monitoring']
    },
    {
      layer: 'Key Management',
      details: 'BIP-32/44 hierarchical deterministic wallets per customer',
      controls: ['HSM storage', 'Key rotation', 'Threshold signatures', 'Backup procedures']
    },
    {
      layer: 'Self-Custody',
      details: 'Robinhood Wallet for users who control private keys',
      controls: ['Client-side encryption', 'Secure enclave', 'Backup warnings', 'Phishing protection']
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Bitcoin className="text-orange-500" size={24} />
          Crypto Integration Architecture Overview
        </h3>
        <p className="text-gray-700 mb-4">
          Robinhood's cryptocurrency integration extends the core MDM/RDM architecture to support digital assets 
          across multiple blockchains, custody models, and regulatory frameworks. The system unifies traditional 
          securities with crypto assets through a hybrid custody model and cross-platform data synchronization.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600">200+</div>
            <div className="text-sm text-gray-600">Supported Cryptocurrencies</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-600">Cold Storage Coverage</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">50+</div>
            <div className="text-sm text-gray-600">Global Crypto Licenses</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cryptoAssets.map(asset => (
          <div 
            key={asset.id}
            onClick={() => setSelectedAsset(asset.id)}
            className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
              selectedAsset === asset.id 
                ? 'border-purple-500 bg-purple-50 shadow-md' 
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <Coins className="text-purple-600" size={24} />
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{asset.type}</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">{asset.name}</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Networks: {asset.networks.join(', ')}</div>
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-blue-500" />
                {asset.custody}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Layers className="text-purple-600" size={24} />
          Crypto-Enhanced Architecture Stack
        </h3>
        <div className="space-y-3">
          {architectureLayers.map((layer, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-2 ${layer.color}`}>
              <h4 className="font-bold text-gray-800 mb-3">{layer.name}</h4>
              <div className="flex flex-wrap gap-2">
                {layer.components.map((comp, i) => (
                  <span key={i} className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-full border border-gray-300">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <GitBranch className="text-purple-600" size={24} />
          Sharding Strategy for Crypto
        </h3>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-700">{shardingStrategy.overview}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Implementation Approach</h4>
            <ul className="space-y-2">
              {shardingStrategy.approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Technical Challenges</h4>
            <ul className="space-y-2">
              {shardingStrategy.challenges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <AlertCircle size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataModel = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Database className="text-purple-600" size={24} />
          Crypto Master Data Model
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(cryptoDataModel).map(([entity, attributes]) => (
            <div key={entity} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-gray-800 mb-3">{entity}</h4>
              <ul className="space-y-2">
                {attributes.map((attr, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Globe className="text-purple-600" size={24} />
          Crypto Reference Data Sources
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Source</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Update Frequency</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Criticality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {referenceDataSources.map((source, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{source.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{source.source}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{source.update}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      source.criticality === 'Critical' ? 'bg-red-100 text-red-700' :
                      source.criticality === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {source.criticality}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBitstamp = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Network className="text-blue-600" size={24} />
          Bitstamp Integration Architecture
        </h3>
        <p className="text-gray-700 mb-4">
          The $200M Bitstamp acquisition (June 2025) brings institutional-grade infrastructure, 50+ global licenses, 
          and deep liquidity to Robinhood's crypto ecosystem. Integration focuses on unified custody, smart order routing, 
          and regulatory compliance across jurisdictions.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">5,000+</div>
            <div className="text-sm text-gray-600">Institutional Clients</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">$95M</div>
            <div className="text-sm text-gray-600">Annual Revenue (2024)</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600">85+</div>
            <div className="text-sm text-gray-600">Tradable Assets</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {bitstampIntegration.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-800">{item.component}</h4>
              <span className={`text-xs px-3 py-1 rounded-full ${
                item.status === 'Active' ? 'bg-green-100 text-green-700' :
                item.status === 'Integration' ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {item.status}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{item.description}</p>
            <div className="bg-gray-50 p-3 rounded text-xs font-mono text-gray-600">
              {item.dataFlow}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Integration Timeline & Roadmap</h3>
        <div className="space-y-3">
          {[
            { phase: 'Q2 2025', milestone: 'Acquisition Completed', status: 'Complete' },
            { phase: 'Q2 2025', milestone: 'Smart Order Routing via Bitstamp', status: 'Complete' },
            { phase: 'Q3 2025', milestone: 'Unified Custody View MDM Integration', status: 'In Progress' },
            { phase: 'Q3 2025', milestone: 'Institutional API Access (Robinhood Ledger)', status: 'In Progress' },
            { phase: 'Q4 2025', milestone: 'EU/UK Customer Migration', status: 'Planned' },
            { phase: 'Q1 2026', milestone: 'Consolidated Staking Infrastructure', status: 'Planned' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded">
              <div className="w-20 text-sm font-semibold text-gray-700">{item.phase}</div>
              <div className="flex-1 text-sm text-gray-800">{item.milestone}</div>
              <span className={`text-xs px-3 py-1 rounded-full ${
                item.status === 'Complete' ? 'bg-green-100 text-green-700' :
                item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="text-blue-600" size={24} />
          Multi-Layered Crypto Security Model
        </h3>
        <div className="space-y-4">
          {securityModel.map((layer, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-bold text-gray-800 mb-2">{layer.layer}</h4>
              <p className="text-sm text-gray-700 mb-3">{layer.details}</p>
              <div className="flex flex-wrap gap-2">
                {layer.controls.map((control, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                    {control}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HardDrive className="text-blue-600" size={20} />
            Cold Storage Architecture
          </h3>
          <div className="space-y-3">
            {[
              'Hardware Security Modules (HSM)',
              'Air-gapped systems',
              'Geographic distribution',
              'Multi-party computation (MPC)',
              'Regular third-party audits',
              'Lloyd\'s crime insurance coverage'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="text-blue-600" size={20} />
            Hot Wallet Operations
          </h3>
          <div className="space-y-3">
            {[
              '5% of assets for daily operations',
              'Multi-sig (3-of-5) authorization',
              'Transaction velocity limits',
              'Real-time anomaly detection',
              'Automated cold storage sweeps',
              'Emergency circuit breakers'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Regulatory Compliance Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { region: 'United States', regs: ['NYDFS BitLicense', 'FinCEN MSB', 'State MTLs', 'Bank Secrecy Act'] },
            { region: 'European Union', regs: ['MiCA Framework', 'CSSF License', 'AMLD5', 'GDPR'] },
            { region: 'United Kingdom', regs: ['FCA Registration', 'MLR 2017', 'Travel Rule', 'Consumer Duty'] }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">{item.region}</h4>
              <ul className="space-y-1">
                {item.regs.map((reg, i) => (
                  <li key={i} className="text-sm text-gray-600">• {reg}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const views = [
    { id: 'overview', name: 'Overview', icon: Bitcoin },
    { id: 'architecture', name: 'Architecture', icon: Layers },
    { id: 'datamodel', name: 'Data Model', icon: Database },
    { id: 'bitstamp', name: 'Bitstamp Integration', icon: Network },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold mb-2">Crypto Integration with MDM/RDM</h1>
          <p className="text-purple-100">Robinhood Financial Services - Blockchain Asset Management Architecture</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6 p-2">
          <div className="flex flex-wrap gap-2">
            {views.map(view => {
              const Icon = view.icon;
              return (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeView === view.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  {view.name}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          {activeView === 'overview' && renderOverview()}
          {activeView === 'architecture' && renderArchitecture()}
          {activeView === 'datamodel' && renderDataModel()}
          {activeView === 'bitstamp' && renderBitstamp()}
          {activeView === 'security' && renderSecurity()}
        </div>

        <div className="mt-6 bg-purple-50 border border-purple-200 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
            <div className="text-sm text-gray-700">
              <strong>Architecture Note:</strong> This system integrates blockchain networks with traditional financial infrastructure. 
              Production deployment requires blockchain node infrastructure, HSM-based key management, and comprehensive regulatory compliance frameworks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoMDMArchitecture;
