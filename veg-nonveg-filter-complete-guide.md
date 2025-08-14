# Veg/Non-Veg Filter System - Complete Guide

## Overview
यह guide आपको FoodDeliver React App में veg/non-veg filtering system के बारे में step-by-step समझाएगी। यह system toggle buttons के साथ काम करता है और दोनों simple और nested menus को filter करता है।

## System Architecture

```
RestMenu.jsx (Main Component)
├── ToggleBtn.jsx (Veg/Non-Veg Buttons) 
├── MenuTitle.jsx (Category Headers)
├── MenuItem.jsx (Individual Food Items)
└── NestedMenu.jsx (Nested Categories)
```

## Step 1: State Management (RestMenu.jsx)

### Code Snippet:
```javascript
// Filter state - null, "VEG", या "NONVEG"
const [selected, setSelected] = useState(null);

// Veg toggle handler
const handleVegToggle = () => {
  setSelected((prev) => (prev === "VEG" ? null : "VEG"));
};

// Non-Veg toggle handler  
const handleNonVegToggle = () => {
  setSelected((prev) => (prev === "NONVEG" ? null : "NONVEG"));
};
```

### Explanation:
- **`selected`**: Current filter state
  - `null` = Show all items
  - `"VEG"` = Show only veg items
  - `"NONVEG"` = Show only non-veg items
- **Toggle Logic**: अगर same button दोबारा click करें तो filter clear हो जाता है

## Step 2: Toggle Buttons UI

### Code Snippet:
```javascript
<div className="flex space-x-6 pt-3">
  <ToggleBtn
    isOn={selected === "VEG"}
    lable="Veg"
    onToggle={handleVegToggle}
    onColor="bg-green-400"
  />
  <ToggleBtn
    isOn={selected === "NONVEG"}
    lable="Non-Veg"
    onToggle={handleNonVegToggle}
    onColor="bg-red-400"
  />
</div>
```

### Explanation:
- **`isOn`**: Button active है या नहीं
- **`onToggle`**: Click handler function
- **`onColor`**: Active state का color (green for veg, red for non-veg)

## Step 3: Menu Type Detection

### Code Snippet:
```javascript
{MenuCategoryData.map((menu, index) => {
  // Check करते हैं कि nested menu है या simple
  const isNestedMenu = menu?.card?.card?.categories?.length > 0;
  
  if (isNestedMenu) {
    // Nested menu filtering logic
  } else {
    // Simple menu filtering logic  
  }
})}
```

### Explanation:
- **Nested Menu**: अगर `categories` array में items हैं
- **Simple Menu**: Direct `itemCards` में items हैं

## Step 4: Simple Menu Filtering

### Code Snippet:
```javascript
// Simple menu के लिए filtering
const itemCards = menu?.card?.card?.itemCards || [];
const filteredData = selected === null
  ? itemCards
  : itemCards.filter(item =>
      item?.card?.info?.itemAttribute?.vegClassifier === selected
    );

// अगर कोई items नहीं बचे तो menu hide करो
if (!filteredData || filteredData.length === 0) return null;
```

### Data Structure:
```javascript
// Swiggy API में veg/non-veg property
item?.card?.info?.itemAttribute?.vegClassifier
// Values: "VEG" या "NONVEG"
```

## Step 5: Nested Menu Filtering

### Code Snippet:
```javascript
// Nested menu के लिए filtering
const hasFilteredItems = menu?.card?.card?.categories?.some(category => {
  const categoryItems = category?.itemCards || [];
  const filteredCategoryItems = selected === null
    ? categoryItems
    : categoryItems.filter(item =>
        item?.card?.info?.itemAttribute?.vegClassifier === selected
      );
  return filteredCategoryItems.length > 0;
});

// अगर कोई category में items नहीं हैं तो पूरा section hide करो
if (!hasFilteredItems) return null;
```

### Explanation:
- **`some()`**: Check करता है कि कम से कम एक category में filtered items हैं
- **Category Level**: हर category के अंदर जाकर items filter करते हैं

## Step 6: Menu Length Calculation

### Code Snippet:
```javascript
const menuLength = isNestedMenu 
  ? menu?.card?.card?.categories?.reduce((total, category) => {
      const categoryItems = category?.itemCards || [];
      const filteredCategoryItems = selected === null
        ? categoryItems
        : categoryItems.filter(item =>
            item?.card?.info?.itemAttribute?.vegClassifier === selected
          );
      return total + filteredCategoryItems.length;
    }, 0)
  : (selected === null
      ? menu?.card?.card?.itemCards?.length || 0
      : menu?.card?.card?.itemCards?.filter(item =>
          item?.card?.info?.itemAttribute?.vegClassifier === selected
        )?.length || 0);
```

### Explanation:
- **Nested Menu**: सभी categories के filtered items का total
- **Simple Menu**: Direct filtered items का count
- **Display**: Menu title में item count दिखता है

## Step 7: NestedMenu Component Updates

### Code Snippet:
```javascript
const NestedMenu = ({ Categories, showItems, selected }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div>
      {showItems && (
        <div className="p-4">
          {Categories.map((elem, index) => {
            // हर category के items को filter करो
            const categoryItems = elem?.itemCards || [];
            const filteredItems = selected === null
              ? categoryItems
              : categoryItems.filter(item =>
                  item?.card?.info?.itemAttribute?.vegClassifier === selected
                );

            // Empty categories को hide करो
            if (filteredItems.length === 0) return null;

            return (
              <div key={elem?.categoryId || index} className="mb-2">
                <MenuTitle
                  MenuTitle={elem?.title}
                  MenuLength={filteredItems.length}
                  setIsOpen={() =>
                    setIsOpen((prev) => (prev === index ? null : index))
                  }
                />
                <MenuItem
                  showItems={index === isOpen ? true : false}
                  MenuSubData={filteredItems}
                  selected={selected}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
```

## Complete Flow Diagram

```
User Clicks Toggle Button
         ↓
handleVegToggle/handleNonVegToggle
         ↓
selected state updates
         ↓
MenuCategoryData.map() re-renders
         ↓
For each menu:
├── Check isNestedMenu
├── If Nested: Check hasFilteredItems across all categories
├── If Simple: Filter itemCards directly
├── If no filtered items: return null (hide menu)
├── Calculate menuLength for display
└── Render MenuTitle + MenuItem/NestedMenu
         ↓
NestedMenu filters each category
         ↓
MenuItem displays filtered items
```

## Key Benefits

1. **Smart Filtering**: दोनों simple और nested menus properly filter होते हैं
2. **Empty Section Hiding**: जो sections में कोई items नहीं हैं वो hide हो जाते हैं
3. **Accurate Counts**: Menu titles में correct item counts दिखते हैं
4. **Clean State Management**: Single `selected` state से सब कुछ control होता है
5. **Performance**: Efficient filtering with proper null checks

## Usage Example

```javascript
// All items दिखाने के लिए
selected = null

// Only veg items दिखाने के लिए  
selected = "VEG"

// Only non-veg items दिखाने के लिए
selected = "NONVEG"
```

## API Data Structure

```javascript
// Swiggy API Response Structure
menu?.card?.card?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier
// Returns: "VEG" or "NONVEG"

// For nested menus:
menu?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier
```

यह system अब पूरी तरह से functional है और सभी edge cases को handle करता है! 🎯
