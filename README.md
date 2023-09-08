# Don't ask 4 Wi-Fi - Chrome extension

This extension auto-fills the ASK4 form for guest users.

## Usage

Click the connect button to load the signup page. 

The page will autofill, just wait few seconds for the final screen to show up.

## How it works

The connect button opens the signup link in a new tab.

A background script (`autofill.js`) is now loaded on this page to auto-fill the form and validate it.

The form is filled with random strings.

PS: Even if the button wasn't clicked, the form will auto-fill and auto-validate
