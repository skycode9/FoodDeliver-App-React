# 🍕 FoodDeliver App - React

A modern, responsive food delivery application built with React and styled with Tailwind CSS. Browse restaurants, view their details, and enjoy a seamless food ordering experience with advanced loading states and smooth animations.

## ✨ Features

- **Restaurant Listing**: Browse through a curated list of restaurants with live API data
- **Restaurant Cards**: View restaurant details including:
  - Restaurant name and cuisine types
  - Average rating and cost for two
  - Delivery time estimates
  - High-quality restaurant images from Swiggy API
- **Advanced Search Functionality**: 
  - Real-time search with instant results
  - Search by restaurant name with case-insensitive matching
  - Clear search to restore full restaurant list
  - "No results found" message for empty searches
- **Smart Filtering**: Filter restaurants to show only top-rated ones (4.5+ stars)
- **Loading States**: Beautiful shimmer UI while data loads
- **Routing**: Multi-page navigation with React Router
  - Home page with restaurant listings
  - About page
  - Contact page
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and intuitive user interface with Tailwind CSS
- **Sticky Footer**: Footer always stays at bottom of page

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS 4.1
- **Build Tool**: Vite 7
- **Routing**: React Router DOM
- **API**: Swiggy API for live restaurant data
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with logo and menu
│   ├── Body.jsx            # Main content area with search and restaurant list
│   ├── RestaurantCard.jsx  # Individual restaurant card component
│   ├── Footer.jsx          # Sticky footer with copyright info
│   ├── Shimmer.jsx         # Loading skeleton for restaurant cards
│   └── ShimmerContainer.jsx # Container for multiple shimmer cards
├── pages/
│   ├── Body.jsx            # Home page with restaurant listings
│   ├── About.jsx           # About page
│   └── Contact.jsx         # Contact page
├── layouts/
│   └── MainLayout.jsx      # Main layout wrapper with header/footer
├── utils/
│   ├── mockData.js         # Restaurant data and mock API responses
│   └── comman.js           # Common constants and URLs
├── App.jsx                 # Main application component with routing
├── index.css               # Global styles and shimmer animations
└── main.jsx               # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FoodDeliver-App-React
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Components Overview

### Header Component
- Displays the FoodDeliver logo
- Navigation menu with Home, About, Contact, and Cart links
- Responsive design with proper spacing
- Integrated with React Router for navigation

### Body Component
- **Enhanced Search Bar**: Real-time restaurant filtering with instant results
- **Top Rated Restaurant Filter**: Button to filter restaurants with 4.5+ star ratings
- **Advanced State Management**: 
  - Loading states with shimmer UI
  - Separate filtered and main restaurant lists
  - Search text state management
- **Error Handling**: Graceful handling of API failures
- **Empty State**: "No restaurants found" message with helpful text
- Restaurant container displaying filtered restaurants
- Maps through restaurant data to render individual cards
- Responsive layout with search and filter controls

### RestaurantCard Component
- Displays restaurant image from Swiggy CDN
- Shows restaurant name, cuisine types, ratings, cost, and delivery time
- Hover effects for better user interaction
- Consistent styling with proper spacing

### Shimmer Components
- **Shimmer.jsx**: Individual loading skeleton matching RestaurantCard structure
- **ShimmerContainer.jsx**: Container displaying 12 shimmer cards
- **Custom CSS Animation**: Smooth shimmer effect with gradient animation
- **Responsive Design**: Matches actual card dimensions and layout

### Footer Component
- **Sticky Footer**: Always stays at bottom of page
- Dynamic copyright year
- Consistent styling with site theme
- Responsive layout for mobile and desktop

### Layout System
- **MainLayout.jsx**: Flexbox-based layout ensuring footer stays at bottom
- **Routing Integration**: Wraps all pages with consistent header/footer
- **Responsive Container**: Proper spacing and mobile optimization

## 🚀 Key Features Explained

### Shimmer Loading UI
- **Purpose**: Provides visual feedback while restaurant data loads
- **Implementation**: CSS animations with gradient effects
- **User Experience**: Reduces perceived loading time
- **Responsive**: Adapts to different screen sizes

### Enhanced Search Functionality
- **Real-time Filtering**: Results update as you type
- **Case Insensitive**: Search works regardless of letter case
- **State Management**: Maintains original data for filtering
- **Empty State Handling**: Shows helpful message when no results found
- **Clear Functionality**: Empty search restores full restaurant list

### API Integration
- **Live Data**: Fetches real restaurant data from Swiggy API
- **Error Handling**: Graceful fallback when API fails
- **Loading States**: Proper loading indicators during data fetch
- **Optional Chaining**: Safe data access preventing crashes

### Routing System
- **React Router**: Multi-page navigation
- **Layout Wrapper**: Consistent header/footer across pages
- **404 Handling**: Proper error page for invalid routes

## 🔧 Customization

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Header.jsx`

### Modifying Shimmer Animation
Update the CSS in `src/index.css` to customize the shimmer effect:
```css
.shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### Styling
The app uses Tailwind CSS. Modify classes in components or extend the Tailwind configuration for custom styling.

### Constants
Update `src/utils/comman.js` to modify image URLs or other constants.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Restaurant data and images sourced from Swiggy API
- Built with modern React practices and hooks
- Styled with Tailwind CSS for rapid development
