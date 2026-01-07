// This function handles browser visits (GET requests)
function doGet(e) {
    return ContentService.createTextOutput("Status: Online. Send a POST request to submit data.");
}

function doPost(e) {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        // 1. Get the Active Sheet (No setup() needed anymore)
        var doc = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = doc.getSheets()[0]; // Always grabs the first tab

        // 2. Get Headers from Row 1
        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        var nextRow = sheet.getLastRow() + 1;
        var newRow = [];

        // 3. Parse Incoming Data
        var data = e.parameter; // Default form data

        // Add Auto-Timestamp
        data.timestamp = new Date();
        data.Timestamp = new Date();

        // 4. Map Data to Headers (Case-Insensitive)
        for (var i = 0; i < headers.length; i++) {
            var headerName = headers[i].toString().toLowerCase(); // e.g. "email"
            var value = "";

            // Search data for matching key (ignore case)
            for (var key in data) {
                if (key.toLowerCase() == headerName) {
                    value = data[key];
                    break;
                }
            }
            newRow.push(value);
        }

        // 5. Save to Sheet
        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

        return ContentService
            .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}
