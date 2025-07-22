# Custom React Accordion Implementation

A simple and clean accordion component built from scratch using React hooks and Tailwind CSS.

## 📁 File Structure

```
src/
├── pages/
│   └── RestMenu.jsx          # Main component with accordion logic
├── components/
│   ├── MenuTitle.jsx         # Accordion header component
│   └── MenuItem.jsx          # Accordion content component
```

## 🚀 Features

- **Simple State Management**: Uses single `isOpen` state to control which accordion is open
- **Click to Toggle**: Click on any accordion header to expand/collapse
- **Single Panel Open**: Only one accordion panel can be open at a time
- **Dynamic Content**: Renders menu items dynamically from API data
- **Clean UI**: Gray header with white content area
- **Icon Integration**: Uses React Icons for visual indicators

## 🔧 Implementation Details

### State Management
```javascript
const [isOpen, setIsOpen] = useState(0); // Controls which accordion is open
```

### Core Logic
- **RestMenu.jsx**: Manages the accordion state and renders multiple accordion sections
- **MenuTitle.jsx**: Clickable header that triggers accordion toggle
- **MenuItem.jsx**: Content area that shows/hides based on accordion state

### Key Components

#### 1. MenuTitle Component
```javascript
const MenuTitle = ({ MenuTitle, MenuLength, onClick }) => {
  return (
    <div
      className="flex justify-between items-center bg-gray-500 text-white px-2 cursor-pointer"
      onClick={onClick}
    >
      <div>{MenuTitle} ({MenuLength})</div>
      <div><BsArrowDownSquare /></div>
    </div>
  );
};
```

#### 2. MenuItem Component
```javascript
const MenuItem = ({ openStatus, indexData, MenuSubData }) => {
  return (
    <div>
      {openStatus === indexData && (
        <div style={{ padding: "10px", backgroundColor: "#fff" }}>
          {MenuSubData?.map((item) => (
            <div>{item?.card?.info?.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
```

#### 3. Main Accordion Logic
```javascript
{menuData.map((menu, index) => (
  <div className="max-w-[800px] mx-auto">
    <MenuTitle
      MenuTitile={menu?.card?.card?.title}
      MenuLength={menu?.card?.card?.itemCards?.length}
      onClick={() => setIsOpen(index)}
    />
    <MenuItem
      openStatus={isOpen}
      indexData={index}
      MenuSubData={menu?.card?.card?.itemCards}
    />
  </div>
))}
```

## 🎨 Styling

- **Header**: Gray background (`bg-gray-500`) with white text
- **Content**: White background with padding
- **Layout**: Flexbox for header alignment
- **Responsive**: Max width container for better mobile experience

## 🔄 How It Works

1. **Initial State**: First accordion (index 0) is open by default
2. **Click Handler**: `onClick={() => setIsOpen(index)}` updates the active accordion
3. **Conditional Rendering**: `{openStatus === indexData && ...}` shows content only for active accordion
4. **Dynamic Data**: Maps through `menuData` to create multiple accordion sections

## 💡 Usage Example

```javascript
// In your component
const [isOpen, setIsOpen] = useState(0);

// Render accordion
{data.map((item, index) => (
  <div key={index}>
    <MenuTitle 
      onClick={() => setIsOpen(index)}
      // ... other props
    />
    <MenuItem 
      openStatus={isOpen}
      indexData={index}
      // ... other props
    />
  </div>
))}
```

## 🌟 Benefits

- **Lightweight**: No external accordion libraries needed
- **Customizable**: Easy to modify styling and behavior
- **Reusable**: Components can be used in other parts of the application
- **Performance**: Minimal re-renders with simple state management
- **Accessible**: Click handlers and proper semantic structure

## 🔧 Customization

To customize the accordion:

1. **Styling**: Modify Tailwind classes in `MenuTitle.jsx`
2. **Animation**: Add CSS transitions for smooth expand/collapse
3. **Multiple Open**: Change logic to allow multiple panels open simultaneously
4. **Icons**: Replace `BsArrowDownSquare` with custom icons

---

*This accordion implementation is part of a food delivery app's restaurant menu display system.*
