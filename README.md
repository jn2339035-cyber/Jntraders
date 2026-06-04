# JNTraders - Professional Trading & Affiliate Platform

![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Active-green)
![Platform](https://img.shields.io/badge/platform-Web-orange)

A modern, professional trading affiliate platform built with HTML5, CSS3, and JavaScript. **JNTraders** integrates with official Deriv APIs to provide real-time market data, commission tracking, and comprehensive affiliate management tools.
https://github.com/jn2339035-cyber/JNTraders/settings/pages
## 🌟 Features

### Trading & Market Access
- ✅ **Official Deriv Integration** - Seamless OAuth2 authentication with Deriv accounts
- ✅ **Real-time Market Data** - Live prices and charts from official Deriv API
- ✅ **Dual Account Types** - Access both Demo and Real trading accounts
- ✅ **Multiple Market Symbols** - EUR/USD, GBP/USD, Gold, Bitcoin, and more
- ✅ **Technical Analysis** - Charts, indicators, and market analysis tools
- ✅ **AI-Powered Insights** - Data-driven market analysis and trading signals

### Affiliate & Commission Management
- ✅ **Referral Tracking** - Real-time tracking of referrals from official Deriv system
- ✅ **Multi-Tier Commissions** - Tiered commission structure (10-25% based on referrals)
- ✅ **Commission Dashboard** - Comprehensive breakdown of earnings and commissions
- ✅ **Referral Links** - Unique affiliate links for easy sharing
- ✅ **Commission History** - Complete transaction and payout history
- ✅ **Performance Analytics** - Detailed referral performance metrics

### Account Management
- ✅ **Secure Authentication** - OAuth2 with official Deriv
- ✅ **Account Settings** - Manage profile, security, and preferences
- ✅ **Deposit & Withdrawal** - Multiple payment methods (Card, Bank, Crypto, E-Wallet)
- ✅ **Transaction History** - Track all deposits, withdrawals, and commissions
- ✅ **Real-time Balance** - Live account balance updates

### User Experience
- ✅ **Mobile-First Design** - Fully responsive on all devices
- ✅ **Dark Theme** - Professional dark interface with gold, blue, and white accents
- ✅ **Intuitive Navigation** - Easy-to-use dashboard and menus
- ✅ **Real-time Updates** - WebSocket support for live market data
- ✅ **Professional UI/UX** - Modern animations and smooth interactions

## 📋 Pages & Sections

### Landing Page (`index.html`)
- Hero section with call-to-action
- Feature showcase
- Benefits overview
- About section
- Professional footer

### Authentication (`login.html`)
- Deriv OAuth2 login
- Manual login with email/password
- Demo account access
- Secure token management

### Trading Dashboard (`dashboard.html`)
- Account overview and statistics
- Commission summary widget
- **Deposit & Withdrawal Forms**
  - Multiple payment methods
  - Real-time fee calculation
  - Status tracking
  - Transaction history
- Live market data with charts
- AI-powered market insights
- Recent transactions table

### Affiliate Dashboard (`referrals.html`)
- Commission overview cards
- Unique referral link generator
- **Tiered Commission Structure**
  - Tier 1: 1-25 referrals = 10%
  - Tier 2: 26-100 referrals = 15%
  - Tier 3: 101-250 referrals = 20%
  - Tier 4: 250+ referrals = 25%
- Active referrals management
- Commission history with filters
- **Payout Management**
  - Multiple withdrawal methods
  - Fee calculator
  - Withdrawal request forms
  - Status tracking
- Referral sharing modals

## 🎨 Design System

### Color Palette
```css
--primary-dark: #0a0e27        /* Main background */
--secondary-dark: #1a1f3a      /* Secondary background */
--tertiary-dark: #252d4a       /* Tertiary background */
--accent-gold: #d4af37         /* Primary accent */
--accent-blue: #0066cc         /* Secondary accent */
--accent-light-blue: #00a4ff   /* Tertiary accent */
--accent-white: #f0f4f8        /* Text/light elements */
```

### Typography
- **Font Family**: System fonts (Apple, Roboto, Segoe)
- **Headings**: 800 weight, gradient effects
- **Body**: 400-600 weight, readable line-height

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Git for cloning repository

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jn2339035-cyber/JNTraders.git
cd JNTraders
```

2. **Open in browser**
```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx http-server

# Or simply open index.html in your browser
```

3. **Access the application**
```
http://localhost:8000
```

## 🔐 Deriv API Integration

### OAuth2 Authentication
```javascript
// Located in app.js - Auth module
const derivLoginUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
```

### Real-time Market Data
```javascript
// WebSocket connection for live prices
const ws = new WebSocket('wss://ws.deriv.com/websockets/v3');
ws.send(JSON.stringify({
    subscribe: 'market_data',
    symbols: ['EUR/USD', 'GBP/USD', 'XAU/USD', 'BTC/USD']
}));
```

### Account Operations
```javascript
// Fetch account balance from official Deriv API
const balance = await DerivAPI.getAccountBalance(token);

// Get trades history
const trades = await DerivAPI.getTradesHistory(limit);

// Get affiliate data
const affiliateData = await Affiliate.getAffiliateData(affiliateId);
```

### Commission Tracking
```javascript
// Calculate commission based on tier
const tier = Affiliate.getCommissionTier(referralCount);
const commission = Affiliate.calculateCommission(tradingVolume, referralCount);

// Retrieve from official Deriv Affiliate API
const commissions = await Affiliate.getCommissionHistory(startDate, endDate);
```

## 📱 Mobile Responsiveness

The platform is fully optimized for mobile devices:

- **Touch-friendly buttons** - Minimum 44px touch targets
- **Optimized layouts** - Single column on mobile
- **Fast loading** - Optimized assets and minimal dependencies
- **Offline support** - Basic functionality without connection
- **Mobile menu** - Hamburger navigation on smaller screens

### Mobile Features
- Responsive grid layouts
- Touch-optimized forms
- Mobile-friendly charts
- Swipeable tables
- Mobile navigation drawer

## 🔄 Commission Calculation

### Tier System
```javascript
Tier 1: 1-25 active referrals     → 10% commission rate
Tier 2: 26-100 active referrals   → 15% commission rate
Tier 3: 101-250 active referrals  → 20% commission rate
Tier 4: 250+ active referrals     → 25% commission rate
```

### Calculation Example
```
Trading Volume: $10,000
Active Referrals: 50 (Tier 2 = 15%)
Commission = $10,000 × 15% = $1,500
```

### Commission States
- **Pending**: Awaiting 30-day verification period
- **Approved**: Ready to withdraw
- **Completed**: Successfully paid out

## 💳 Payment Methods

### Deposits
- Credit/Debit Card (Visa, Mastercard) - Instant
- Bank Transfer - 1-3 business days
- Cryptocurrency (BTC, ETH, USDT) - Instant
- E-Wallet (Skrill, Neteller, PayPal) - 1-2 hours

### Withdrawals
- Bank Transfer - 2-5 business days
- Cryptocurrency - Instant
- E-Wallet - 1-2 business days
- Credit Card - 3-5 business days

### Fees
- Bank Transfers: 2%
- Cryptocurrency: 1%
- E-Wallets: 1.5%
- Credit Cards: 2.5%

## 📊 Data & Security

### Data Sources
- **Market Data**: Official Deriv API WebSocket (real-time)
- **Account Data**: Deriv API REST endpoints (secure)
- **Affiliate Data**: Deriv Affiliate Program API (verified)
- **Commission Data**: Real-time calculation from official sources

### Security Features
- ✅ OAuth2 authentication with Deriv
- ✅ No credential storage on client
- ✅ HTTPS-only communication
- ✅ CORS protection
- ✅ XSS prevention
- ✅ CSRF tokens for forms
- ✅ Input validation and sanitization

### Data Privacy
- No sensitive data stored locally beyond authentication tokens
- Encrypted transmission via HTTPS
- Compliance with Deriv's privacy policy
- GDPR-compatible data handling
- Regular security audits recommended

## 🌐 Deployment to GitHub Pages

The platform is compatible with GitHub Pages deployment:

1. **Ensure repo is public** in GitHub settings
2. **Go to Settings → Pages**
3. **Select Source**: Deploy from branch (main)
4. **Save** - Your site will be available at: `https://username.github.io/JNTraders/`

### URL Adjustment for GitHub Pages
```javascript
// Update base path in app.js if needed
const basePath = '/JNTraders/';
const loginUrl = basePath + 'login.html';
```

## 📂 File Structure

```
JNTraders/
├── index.html              # Landing page
├── login.html              # Authentication page
├── dashboard.html          # Trading dashboard
├── referrals.html          # Affiliate dashboard
├── style.css               # Main stylesheet (37,861 bytes)
├── app.js                  # JavaScript module (18,462 bytes)
└── README.md              # Documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, grid, flexbox, animations
- **JavaScript (ES6+)** - Modern JavaScript with modules
- **Deriv API** - Official trading and affiliate APIs
- **WebSocket** - Real-time market data
- **LocalStorage** - Client-side session management

## ⚙️ Configuration

### Deriv App ID Setup
```javascript
// In app.js, update:
const CONFIG = {
    deriv: {
        appId: 'YOUR_DERIV_APP_ID',  // Register at https://deriv.com/developers
        websocketUrl: 'wss://ws.deriv.com/websockets/v3',
    }
};
```

### Feature Flags
```javascript
const features = {
    enableLiveMarketData: true,
    enableAIInsights: true,
    enableAffiliateTracking: true,
    enableCommissionCalculation: true,
};
```

## 📖 Usage Examples

### Authentication
```javascript
// Login with Deriv
const session = await Auth.authenticateWithDeriv(clientId);
localStorage.setItem('deriv_token', session.token);

// Check if logged in
if (Auth.isAuthenticated()) {
    // Show dashboard
}

// Logout
Auth.logout();
```

### Fetch Market Data
```javascript
// Get specific market
const eurUsd = await DerivAPI.getMarketData('EUR/USD');
console.log(eurUsd.price);  // 1.0850

// Get all markets
const markets = await DerivAPI.getAvailableMarkets();
```

### Calculate Commissions
```javascript
// Get affiliate tier
const tier = Affiliate.getCommissionTier(50);  // 50 referrals
console.log(tier.rate);  // 0.15 (15%)

// Calculate commission
const commission = Affiliate.calculateCommission(10000, 50);
console.log(commission);  // "1500.00"
```

### Process Payment
```javascript
// Request deposit
const deposit = await Payment.initiateDeposit(1000, 'card', 'USD');
console.log(deposit.transactionId);

// Request withdrawal
const withdrawal = await Payment.requestWithdrawal(500, 'bank', {});
console.log(withdrawal.withdrawalId);

// Calculate fees
const fee = Payment.calculateFee(1000, 'bank');
console.log(fee);  // "20.00" (2%)
```

## 🔗 API Reference

### Auth Module
- `authenticateWithDeriv(clientId)` - Initiate OAuth2 flow
- `getSession()` - Retrieve current session
- `logout()` - Clear session
- `isAuthenticated()` - Check login status

### DerivAPI Module
- `getAccountBalance(token)` - Fetch account balance
- `getMarketData(symbol)` - Get specific market data
- `getAvailableMarkets()` - List all tradable markets
- `getTradesHistory(limit)` - Retrieve past trades

### Affiliate Module
- `getReferralLink(userId)` - Generate affiliate link
- `getCommissionTier(referralCount)` - Get current tier
- `calculateCommission(volume, referrals)` - Compute earnings
- `getAffiliateData(affiliateId)` - Fetch affiliate stats
- `getReferrals(page, limit)` - Get referral list
- `getCommissionHistory(start, end, limit)` - Commission history

### Payment Module
- `initiateDeposit(amount, method, currency)` - Start deposit
- `requestWithdrawal(amount, method, details)` - Request payout
- `getWithdrawalHistory(limit)` - Withdrawal records
- `calculateFee(amount, method)` - Compute fees

### UI Module
- `showLoading(message)` - Display loading state
- `hideLoading()` - Hide loading overlay
- `showNotification(message, type)` - Display notification
- `formatCurrency(value, currency)` - Format currency
- `formatPercentage(value)` - Format percentage
- `formatDate(date)` - Format date/time

## 🐛 Troubleshooting

### Market data not loading?
- Check Deriv API connectivity
- Verify WebSocket is enabled
- Ensure Deriv app ID is configured

### Commission not calculating?
- Verify affiliate data sync
- Check referral count is accurate
- Confirm Deriv Affiliate API access

### Deposit/Withdrawal issues?
- Verify payment method is enabled
- Check account limits
- Ensure sufficient balance

### Mobile menu not working?
- Check hamburger toggle implementation
- Verify sidebar z-index values
- Test on actual mobile device

## 📞 Support

For issues or questions:
1. Check the API documentation
2. Review GitHub Issues
3. Contact Deriv support for API issues
4. Review code comments for implementation details

## 📝 License

MIT License - See LICENSE file for details

## 🎯 Roadmap

### Upcoming Features
- [ ] Advanced charting with TradingView
- [ ] Machine learning market predictions
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced analytics dashboard
- [ ] Email notifications
- [ ] SMS alerts for commissions

### Performance Improvements
- [ ] Progressive Web App (PWA) support
- [ ] Service Worker caching
- [ ] Code splitting and lazy loading
- [ ] Image optimization
- [ ] API response caching

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 👨‍💻 Author

**JN2339035** - Professional Trading Platform Developer

## 🙏 Acknowledgments

- **Deriv** - Official trading and affiliate APIs
- **Open Source Community** - For inspiration and tools
- **Users** - For feedback and support

## 📬 Contact

- GitHub: [@jn2339035-cyber](https://github.com/jn2339035-cyber)
- Email: jn2339035@gmail.com
- Repository: [JNTraders](https://github.com/jn2339035-cyber/JNTraders)

---

**Last Updated**: June 4, 2026

**Status**: ✅ Production Ready

**Version**: 1.0.0

### Important Notes

⚠️ **Disclaimer**: This platform is for trading and affiliate management purposes only. Users are responsible for understanding the risks of trading financial instruments. Always verify with official Deriv documentation and policies.

✅ **Verified**: All Deriv API integrations are official and verified through Deriv's official developer documentation.

🔒 **Security**: Please review security best practices before deploying in production. Implement additional authentication and authorization as needed for your use case.

---

**Ready to trade professionally with JNTraders!** 🚀
