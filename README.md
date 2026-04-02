# Responsive Macaroons Landing Page

A commercial landing page for a dessert shop featuring a dynamic order system and automated build workflow.

## 🚀 Key Technical Features
* **Form Logic & Validation:** Custom JavaScript validation with visual error feedback and masked phone input.
* **AJAX Integration:** asynchronous order submission to the server with a loading state (spinner) and success/error handling.
* **Dynamic UI:** Smooth scroll navigation and automated product selection (the form automatically populates with the product name upon clicking "Order").
* **Animations:** CSS "flip" animations for switching between the order form and the success message.

## 🛠️ Development Stack
* **Preprocessors:** Styled with **Less** for better nesting and variables.
* **Task Runner:** **Gulp** used for compiling Less, minifying assets, and optimizing images.
* **Libraries:** jQuery for DOM manipulation, `jquery.maskedinput` for phone formatting.

## 📦 Build Instructions
1. Run `npm install` to install dependencies.
2. Run `gulp` to compile styles and start the development server.
