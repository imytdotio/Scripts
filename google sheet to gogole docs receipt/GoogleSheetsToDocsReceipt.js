function createReceipts() {
  // Get the receipt template
  var templateFile = DriveApp.getFileById('');
  // Plug your own template ID here, the ID can be found after 'docs.google.com/document/d/{{id}}/edit'
  var templateDoc = DocumentApp.openById(templateFile.getId());

  // Get the transaction data from the spreadsheet
  var sheet = SpreadsheetApp.openById('').getSheetByName('');
  // Plug your excel sheet here, the ID can be found after 'sheets.google.com/document/d/{{id}}/edit'
  // The sheet name is the name of the sheet you want to use


  var data = sheet.getDataRange().getValues();
  var lastRow = sheet.getLastRow()

  for (var i = 2; i <= lastRow; i++) {
    var row = data[i - 1];

    if (row.join('').length > 0) {
      var newDoc = templateFile.makeCopy();
      var newDocId = newDoc.getId();
      var newDocFile = DriveApp.getFileById(newDocId);
      var newDocName = row[1] + ' Receipt';
      newDocFile.setName(newDocName);
      var newDocBody = DocumentApp.openById(newDocId).getBody();
      newDocBody.replaceText('<<Date>>', row[0]);

      newDocBody.replaceText('<<Item>>', row[1]);
      newDocBody.replaceText('<<Quantity>>', row[2]);
      newDocBody.replaceText('<<Price>>', `${row[3]}`);
      newDocBody.replaceText('<<Shop>>', row[4]);


      console.log(row[0], row[1])
      // Repeat for any other placeholders in the template

      // Save the new receipt and move it to a folder (optional)
      var folder = DriveApp.getFolderById('');
      // Plug your own folder ID here, the ID can be found after 'drive.google.com/drive/folders/{{id}}'
      folder.addFile(newDocFile);

    }
  }
}
