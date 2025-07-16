# 🍕 FoodDeliver App - React

A modern, responsive food delivery application built with React and styled with Tailwind CSS. Browse restaurants, view their details, and enjoy a seamless food ordering experience.

## ✨ Features

- **Restaurant Listing**: Browse through a curated list of restaurants
- **Restaurant Cards**: View restaurant details including:
  - Restaurant name and cuisine types
  - Average rating and cost for two
  - Delivery time estimates
  - High-quality restaurant images
- **Search Functionality**: Search for your favorite restaurants
- **Filter by Rating**: Filter restaurants to show only top-rated ones (4.5+ stars)
- **Dynamic State Management**: Real-time filtering with React hooks
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and intuitive user interface with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS 4.1
- **Build Tool**: Vite 7
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with logo and menu
│   ├── Body.jsx            # Main content area with search and restaurant list
│   └── RestaurantCard.jsx  # Individual restaurant card component
├── utils/
│   ├── mockData.js         # Restaurant data and mock API responses
│   └── comman.js           # Common constants and URLs
├── App.jsx                 # Main application component
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
- Displays the food delivery logo
- Navigation menu with Home, About Us, Contact Us, and Cart links
- Responsive design with proper spacing

### Body Component
- Search bar for restaurant filtering (search functionality)
- **Top Rated Restaurant Filter**: Button to filter restaurants with 4.5+ star ratings
- **State Management**: Uses React useState hook to manage restaurant list dynamically
- Restaurant container displaying filtered restaurants
- Maps through restaurant data to render individual cards
- Responsive layout with search and filter controls

### RestaurantCard Component
- Displays restaurant image, name, and key details
- Shows cuisine types, ratings, cost, and delivery time
- Hover effects for better user interaction

## 🔧 Customization

### Adding New Restaurants
Update the `src/utils/mockData.js` file to add new restaurant data.

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
