/**
 * JNTraders - Professional Trading & Affiliate Platform
 * JavaScript Application Module
 * Integrates with official Deriv API
 */

// Configuration
const CONFIG = {
    // Deriv API Configuration
    deriv: {
        appId: 'YOUR_DERIV_APP_ID', // Set from environment
        websocketUrl: 'wss://ws.deriv.com/websockets/v3',
        apiBaseUrl: 'https://api.deriv.com/api',
    },
    
    // Feature Flags
    features: {
        enableLiveMarketData: true,
        enableAIInsights: true,
        enableAffiliateTracking: true,
        enableCommissionCalculation: true,
    },
    
    // Commission Settings
    commission: {
        tier1: { min: 1, max: 25, rate: 0.10 },
        tier2: { min: 26, max: 100, rate: 0.15 },
        tier3: { min: 101, max: 250, rate: 0.20 },
        tier4: { min: 251, max: Infinity, rate: 0.25 },
    }
};

// ============================================
// AUTHENTICATION MODULE
// ============================================

const Auth = {
    /**
     * Authenticate user with Deriv OAuth2
     */
    async authenticateWithDeriv(clientId) {
        try {
            const redirectUri = window.location.href.split('?')[0];
            const oauthUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
            
            // In production, this would redirect to Deriv's OAuth2 endpoint
            console.log('Redirecting to Deriv OAuth:', oauthUrl);
            
            // For demo, simulate successful authentication
            return this.createMockSession();
        } catch (error) {
            console.error('Authentication error:', error);
            throw error;
        }
    },

    /**
     * Create mock session for demo
     */
    createMockSession() {
        const token = 'deriv_token_' + Math.random().toString(36).substr(2, 9);
        const session = {
            token: token,
            userId: 'user_' + Math.random().toString(36).substr(2, 6),
            email: 'user@example.com',
            accountType: 'demo',
            createdAt: new Date().toISOString(),
        };
        
        localStorage.setItem('deriv_session', JSON.stringify(session));
        return session;
    },

    /**
     * Get current session
     */
    getSession() {
        const session = localStorage.getItem('deriv_session');
        return session ? JSON.parse(session) : null;
    },

    /**
     * Logout
     */
    logout() {
        localStorage.removeItem('deriv_session');
        localStorage.removeItem('deriv_token');
        localStorage.removeItem('user_type');
        localStorage.removeItem('is_demo');
    },

    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return !!this.getSession();
    }
};

// ============================================
// DERIV API MODULE
// ============================================

const DerivAPI = {
    /**
     * Get account balance
     */
    async getAccountBalance(token) {
        try {
            // In production, this would call: https://api.deriv.com/api/v3/account/balance
            // For demo, return mock data
            return {
                balance: (Math.random() * 50000 + 5000).toFixed(2),
                currency: 'USD',
                lastUpdated: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error fetching account balance:', error);
            throw error;
        }
    },

    /**
     * Get market data for symbol
     */
    async getMarketData(symbol) {
        try {
            // In production, this would fetch from Deriv WebSocket API
            const mockPrices = {
                'EUR/USD': 1.0850,
                'GBP/USD': 1.2650,
                'XAU/USD': 2385.75,
                'BTC/USD': 64250.50
            };
            
            return {
                symbol: symbol,
                price: mockPrices[symbol] || 1.0,
                bid: mockPrices[symbol] * 0.9995,
                ask: mockPrices[symbol] * 1.0005,
                lastUpdated: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error fetching market data:', error);
            throw error;
        }
    },

    /**
     * Get available markets
     */
    async getAvailableMarkets() {
        return [
            { symbol: 'EUR/USD', type: 'forex', spread: '0.8 pips' },
            { symbol: 'GBP/USD', type: 'forex', spread: '1.2 pips' },
            { symbol: 'XAU/USD', type: 'commodity', spread: '0.5 pips' },
            { symbol: 'BTC/USD', type: 'crypto', spread: '2.5 pips' },
        ];
    },

    /**
     * Get trades history
     */
    async getTradesHistory(limit = 10) {
        try {
            // In production: GET /api/v3/account/trades?limit=10
            return [];
        } catch (error) {
            console.error('Error fetching trades:', error);
            throw error;
        }
    }
};

// ============================================
// AFFILIATE MODULE
// ============================================

const Affiliate = {
    /**
     * Get affiliate referral link
     */
    getReferralLink(userId) {
        return `${window.location.origin}/?ref=${userId}`;
    },

    /**
     * Get commission tier based on referral count
     */
    getCommissionTier(referralCount) {
        const tiers = CONFIG.commission;
        
        if (referralCount >= tiers.tier4.min) return { tier: 4, rate: tiers.tier4.rate };
        if (referralCount >= tiers.tier3.min) return { tier: 3, rate: tiers.tier3.rate };
        if (referralCount >= tiers.tier2.min) return { tier: 2, rate: tiers.tier2.rate };
        return { tier: 1, rate: tiers.tier1.rate };
    },

    /**
     * Calculate commission
     */
    calculateCommission(tradingVolume, referralCount) {
        const tier = this.getCommissionTier(referralCount);
        return (tradingVolume * tier.rate).toFixed(2);
    },

    /**
     * Get affiliate data from Deriv Affiliate API
     */
    async getAffiliateData(affiliateId) {
        try {
            // In production: GET https://api.deriv.com/api/v3/affiliate/data/{affiliateId}
            // For demo, return mock data
            return {
                affiliateId: affiliateId,
                totalReferrals: Math.floor(Math.random() * 100 + 1),
                activeReferrals: Math.floor(Math.random() * 50 + 1),
                totalCommissions: (Math.random() * 10000 + 1000).toFixed(2),
                monthlyCommissions: (Math.random() * 1000 + 100).toFixed(2),
                pendingCommissions: (Math.random() * 2000 + 500).toFixed(2),
                lastUpdated: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error fetching affiliate data:', error);
            throw error;
        }
    },

    /**
     * Get referral list
     */
    async getReferrals(page = 1, limit = 20) {
        try {
            // In production: GET /api/v3/affiliate/referrals?page={page}&limit={limit}
            const mockReferrals = [
                {
                    id: '#54321',
                    email: 'user.one@example.com',
                    joinDate: '2024-05-15',
                    tradingVolume: 45230.50,
                    status: 'active'
                },
                {
                    id: '#54320',
                    email: 'user.two@example.com',
                    joinDate: '2024-05-18',
                    tradingVolume: 32150.00,
                    status: 'active'
                },
            ];
            return mockReferrals;
        } catch (error) {
            console.error('Error fetching referrals:', error);
            throw error;
        }
    },

    /**
     * Get commission history
     */
    async getCommissionHistory(startDate, endDate, limit = 20) {
        try {
            // In production: GET /api/v3/affiliate/commission/history
            return [];
        } catch (error) {
            console.error('Error fetching commission history:', error);
            throw error;
        }
    }
};

// ============================================
// PAYMENT MODULE
// ============================================

const Payment = {
    /**
     * Initiate deposit
     */
    async initiateDeposit(amount, method, currency) {
        try {
            // In production: POST /api/v3/account/deposit
            // with params: { amount, method, currency }
            console.log('Deposit initiated:', { amount, method, currency });
            
            return {
                transactionId: 'txn_' + Math.random().toString(36).substr(2, 9),
                status: 'pending',
                amount: amount,
                method: method,
                createdAt: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error initiating deposit:', error);
            throw error;
        }
    },

    /**
     * Request withdrawal
     */
    async requestWithdrawal(amount, method, accountDetails) {
        try {
            // In production: POST /api/v3/account/withdrawal
            console.log('Withdrawal requested:', { amount, method });
            
            return {
                withdrawalId: 'wd_' + Math.random().toString(36).substr(2, 9),
                status: 'pending_review',
                amount: amount,
                method: method,
                createdAt: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error requesting withdrawal:', error);
            throw error;
        }
    },

    /**
     * Get withdrawal history
     */
    async getWithdrawalHistory(limit = 20) {
        try {
            return [];
        } catch (error) {
            console.error('Error fetching withdrawal history:', error);
            throw error;
        }
    },

    /**
     * Calculate fee for transaction
     */
    calculateFee(amount, method) {
        const fees = {
            'bank': 0.02,      // 2%
            'crypto': 0.01,    // 1%
            'ewallet': 0.015,  // 1.5%
            'card': 0.025      // 2.5%
        };
        
        const feeRate = fees[method] || 0.02;
        return (amount * feeRate).toFixed(2);
    }
};

// ============================================
// UI UTILITIES
// ============================================

const UI = {
    /**
     * Show loading state
     */
    showLoading(message = 'Loading...') {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            const p = overlay.querySelector('p');
            if (p) p.textContent = message;
            overlay.style.display = 'flex';
        }
    },

    /**
     * Hide loading state
     */
    hideLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    },

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#00d084' : type === 'error' ? '#ff4757' : '#0066cc'};
            color: white;
            border-radius: 8px;
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },

    /**
     * Format currency
     */
    formatCurrency(value, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(value);
    },

    /**
     * Format percentage
     */
    formatPercentage(value) {
        return (value * 100).toFixed(2) + '%';
    },

    /**
     * Format date
     */
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    }
};

// ============================================
// ANALYTICS MODULE
// ============================================

const Analytics = {
    /**
     * Track event
     */
    trackEvent(eventName, eventData = {}) {
        console.log(`Event: ${eventName}`, eventData);
        
        // In production, send to analytics service
        // e.g., Google Analytics, Mixpanel, etc.
    },

    /**
     * Track page view
     */
    trackPageView(pageName) {
        console.log(`Page View: ${pageName}`);
    },

    /**
     * Track conversion
     */
    trackConversion(type, value) {
        this.trackEvent('conversion', { type, value });
    },

    /**
     * Track affiliate signup
     */
    trackAffiliateSignup(affiliateId) {
        this.trackEvent('affiliate_signup', { affiliateId });
    },

    /**
     * Track commission earned
     */
    trackCommissionEarned(amount, referralCount) {
        this.trackEvent('commission_earned', { amount, referralCount });
    }
};

// ============================================
// WEBSOCKET MODULE for Real-time Data
// ============================================

const WebSocket = {
    ws: null,
    reconnectAttempts: 0,
    maxReconnectAttempts: 5,
    reconnectDelay: 3000,

    /**
     * Connect to Deriv WebSocket
     */
    connect(appId) {
        try {
            this.ws = new window.WebSocket(CONFIG.deriv.websocketUrl);

            this.ws.onopen = () => {
                console.log('WebSocket connected');
                this.reconnectAttempts = 0;
                this.subscribe('market_data');
            };

            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.handleMessage(data);
                } catch (error) {
                    console.error('WebSocket message error:', error);
                }
            };

            this.ws.onclose = () => {
                console.log('WebSocket disconnected');
                this.attemptReconnect();
            };

            this.ws.onerror = (error) => {
                console.error('WebSocket error:', error);
            };
        } catch (error) {
            console.error('WebSocket connection error:', error);
        }
    },

    /**
     * Subscribe to market data
     */
    subscribe(channel) {
        if (this.ws && this.ws.readyState === 1) {
            this.ws.send(JSON.stringify({
                subscribe: channel,
                symbols: ['EUR/USD', 'GBP/USD', 'XAU/USD', 'BTC/USD']
            }));
        }
    },

    /**
     * Handle WebSocket message
     */
    handleMessage(data) {
        // Process market data updates
        if (data.type === 'market_update') {
            this.updateMarketData(data.payload);
        }
        
        // Process commission updates
        if (data.type === 'commission_update') {
            this.updateCommissionData(data.payload);
        }
    },

    /**
     * Update market data in UI
     */
    updateMarketData(data) {
        const priceElement = document.getElementById(`${data.symbol.toLowerCase().replace('/', '')}-price`);
        if (priceElement) {
            priceElement.textContent = data.price.toFixed(4);
        }
    },

    /**
     * Update commission data in UI
     */
    updateCommissionData(data) {
        const commissionElement = document.getElementById('monthlyCommission');
        if (commissionElement) {
            commissionElement.textContent = UI.formatCurrency(data.monthlyCommission);
        }
    },

    /**
     * Attempt to reconnect
     */
    attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`Reconnecting... (attempt ${this.reconnectAttempts})`);
            setTimeout(() => this.connect(CONFIG.deriv.appId), this.reconnectDelay);
        }
    },

    /**
     * Disconnect
     */
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
};

// ============================================
// UTILITIES
// ============================================

/**
 * Copy text to clipboard
 */
function copyToClipboard(text, message = 'Copied!') {
    navigator.clipboard.writeText(text).then(() => {
        UI.showNotification(message, 'success');
    });
}

/**
 * Generate unique ID
 */
function generateId(prefix = '') {
    return prefix + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Deep clone object
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Validate email
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Validate amount
 */
function validateAmount(amount, min = 10, max = 50000) {
    const num = parseFloat(amount);
    return !isNaN(num) && num >= min && num <= max;
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize application
 */
function initializeApp() {
    console.log('JNTraders Platform Initializing...');
    
    // Check authentication
    if (!Auth.isAuthenticated() && window.location.pathname !== '/login.html' && window.location.pathname !== '/index.html') {
        window.location.href = '/login.html';
        return;
    }
    
    // Initialize WebSocket for real-time data
    if (CONFIG.features.enableLiveMarketData) {
        WebSocket.connect(CONFIG.deriv.appId);
    }
    
    // Track page view
    Analytics.trackPageView(window.location.pathname);
    
    console.log('JNTraders Platform Ready');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    WebSocket.disconnect();
});

// Export for global access
window.JNTraders = {
    Auth,
    DerivAPI,
    Affiliate,
    Payment,
    UI,
    Analytics,
    WebSocket,
    CONFIG
};
