function main() {
  
  // Define email address, subject, and body for the email
  var emailAddress = "your_email@example.com"; // Enter your email address
  var subject = "Low Quality Score Keywords Report";
  var body = "Please find the attached report of keywords with low Quality Scores.";
  
  // Set pauseKeywords to true if you want to automatically pause low Quality Score keywords
  var pauseKeywords = true; // Set to true if you want to automatically pause low Quality Score keywords

  // Retrieve the keywords report for the last 7 days
  var report = AdsApp.report(
    "SELECT CampaignName, AdGroupName, Criteria, QualityScore, KeywordMatchType " +
    "FROM KEYWORDS_PERFORMANCE_REPORT " +
    "WHERE Status = ENABLED AND CampaignStatus = ENABLED " +
    "AND AdGroupStatus = ENABLED " +
    "AND QualityScore < 5 " +
    "DURING LAST_7_DAYS");

  // Iterate over the rows in the report and collect the data
  var rows = report.rows();
  var data = [];
  while (rows.hasNext()) {
    var row = rows.next();
    var campaignName = row['CampaignName'];
    var adGroupName = row['AdGroupName'];
    var keyword = row['Criteria'];
    var qualityScore = row['QualityScore'];
    var matchType = row['KeywordMatchType'];

    data.push([campaignName, adGroupName, keyword, qualityScore, matchType]);

    if (pauseKeywords) {
      var keywordIterator = AdsApp.keywords()
        .withCondition("CampaignName = '" + campaignName + "'")
        .withCondition("AdGroupName = '" + adGroupName + "'")
        .withCondition("Criteria = '" + keyword + "'")
        .get();

      while (keywordIterator.hasNext()) {
        var keyword = keywordIterator.next();
        keyword.pause();
      }
    }
  }

  // If there are keywords with low Quality Scores, create a spreadsheet with the data and send it via email
  if (data.length > 0) {
    var spreadsheet = SpreadsheetApp.create("Low Quality Score Keywords Report");
    var sheet = spreadsheet.getActiveSheet();
    sheet.getRange(1, 1, data.length, 5).setValues(data);

    var url = spreadsheet.getUrl();
    var attachment = {
      fileName: "Low_Quality_Score_Keywords_Report.xlsx",
      content: UrlFetchApp.fetch(url).getBlob()
    };

    MailApp.sendEmail({
      to: emailAddress,
      subject: subject,
      body: body,
      attachments: [attachment]
    });

    Logger.log("Email sent with the Low Quality Score Keywords Report.");
  } else {
    Logger.log("No keywords with low Quality Scores found.");
  }
}