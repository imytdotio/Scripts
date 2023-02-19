Receipt Creation Script

This script is designed to create individualized receipts for transactions listed in a Google Sheet using a template document.
Usage

To use this script, you'll need to have the following:

    A receipt template document in Google Docs
    A Google Sheet with transaction data
    A Google Drive folder to store the generated receipts (optional)

Once you have these components set up, you can do the following:

    Open the Google Sheet with transaction data
    From the toolbar, select Tools > Script editor
    Copy and paste the contents of createReceipts.js into the script editor
    Save the script and close the editor
    Back in the Google Sheet, select Run > createReceipts from the toolbar
    The script will generate receipts for each row of transaction data and save them in the designated Google Drive folder (if specified)

Customization

If you want to customize the receipt template or modify the data being used to generate receipts, you can do the following:

    To customize the template: Open the receipt template document and modify the text as desired. Be sure to replace any placeholders in the document (e.g. <<Date>>) with the appropriate text that you want to use for each receipt.
    To modify the transaction data: Open the Google Sheet with transaction data and make changes to the existing data or add new rows as needed. Note that the script assumes that the transaction data is in a sheet named "Sheet1" and that the data starts in the second row of the sheet (row 1 is assumed to contain headers).
    To modify the folder where receipts are saved: Change the ID of the Google Drive folder in the folder variable on line 26 of the script. Note that if you don't want to save the receipts to a specific folder, you can remove this line from the script entirely.