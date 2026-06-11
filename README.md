# Odoo Chatter Mover

A lightweight browser extension designed to optimize the user interface layout within Odoo ERP. It automatically repositions the discussion panel (_chatter_) from the right-hand sidebar to the bottom of the form view, expanding both the primary document sheet and the message logs to utilize 100% of the available screen width.

## Features

- **Full-Width Layout:** Eliminates empty lateral space by expanding the `.o_form_sheet_bg` container to full width.
- **Native Page Scroll:** Removes forced internal wrappers (`overflow-auto`) to allow fluid, native browser scrolling.
- **Dynamic Persistence:** Implements a `MutationObserver` combined with a fallback execution safety loop to handle Odoo's dynamic Single Page Application (SPA) view rendering.

## Project Structure

```text
├── manifest.json   # Extension configuration (Manifest V3)
├── content.js      # Core DOM manipulation script
└── README.md       # Project documentation

Installation
Chromium-Based Browsers (Google Chrome, Brave, Edge)

    Download or clone this repository to your local machine.

    Navigate to chrome://extensions/ in your browser.

    Enable Developer mode via the toggle switch in the upper-right corner.

    Click the Load unpacked button in the upper-left corner.

    Select the directory containing the extension files.

Mozilla Firefox

    Navigate to about:debugging#/runtime-this-fox in your browser.

    Click Load Temporary Add-on....

    Select the manifest.json file from your local directory.

Compatibility Note

    Firefox Lifecycle Limitation: In Mozilla Firefox, performing a hard page refresh (F5 / Ctrl+R) will temporarily revert the layout due to strict thread-isolation constraints over Odoo's underlying OWL framework. The extension will automatically re-apply the layout optimization upon internal application navigation between views or modules.
```
# Odoo-Chatter-Mover
