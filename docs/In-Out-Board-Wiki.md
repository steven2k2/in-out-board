
# In-Out Board Wiki

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Setup Guide](#setup-guide)
4. [Usage](#usage)
5. [Customization](#customization)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Overview**
The **In-Out Board** is a React-based web application designed to display the status of staff members in a clean and modern interface. It is ideal for office environments, warehouses, or other use cases where staff status tracking is required.

---

## **Features**
- **Dynamic Status Display**: Visual indicators to show if a staff member is "In" or "Out."
- **Automatic Pagination**: Cycles through pages of staff members at a configurable interval.
- **Responsive Design**: Built using Material-UI for a seamless user experience across devices.
- **Customizable**: Easily adjust the refresh interval and rows per page.

---

## **Setup Guide**
### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/in-out-board.git
   cd in-out-board
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## **Usage**
### Example Staff Data
```javascript
const staff = [
  { id: '1', name: 'Alice Johnson', status: 'in', notes: 'In the office' },
  { id: '2', name: 'Bob Smith', status: 'out', notes: 'On vacation' },
  { id: '3', name: 'Charlie Brown', status: 'in', notes: 'Working remotely' },
];

<StaffStatusBoard staff={staff} interval={30000} />
```

- **`staff`**: Array of staff members with their `id`, `name`, `status`, and optional `notes`.
- **`interval`**: Time in milliseconds for automatic page cycling. Default: `30000` (30 seconds).

---

## **Customization**
### Adjust Rows Per Page
The number of rows per page is defined in the component. To change it, update the `ROWS_PER_PAGE` constant:
```javascript
const ROWS_PER_PAGE = 5; // Default: 10
```

### Modify Status Colors
Change the colors of the "In" or "Out" indicators in the `renderStatus` function:
```javascript
const statusStyles = {
  in: { color: '#8BC34A' },  // Green for "In"
  out: { color: '#03A9F4' }, // Blue for "Out"
};
```

---

## **Contributing**
We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request on GitHub.

---

## **License**
This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in compliance with the license terms.
