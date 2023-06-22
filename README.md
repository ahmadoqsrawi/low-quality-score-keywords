#  Google Ads Low Quality Score Keywords
## License
This script is licensed under the MIT License.
Copyright (c) 2023 Ahmad Ismail

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# The Script

## Google Ads Low Quality Score Keywords
**This script generate a report of keywords with low quality scores, pause them as an optional and send a report via email.**

### Prerequisites
**Before using this script, you need to set up the following:**

- You should have a Google Ads account with the necessary permissions to access and retrieve keyword performance data.
- Valid email address: Provide a valid email address in the **emailAddress** variable. This is where     you'll receive email notifications when campaigns are contains low quality score keywords.

### Usage
1. Access your Google Ads account and navigate to the "Tools & Settings" section.
2. Click on "Scripts" to open the Google Ads Scripts interface.
3. Click on the plus icon or the "New script" button to create a new script.
4. Give your script a name, such as Low Quality Score Keywords Script .
5. Set the emailAddress variable to your desired email address where you want to receive the report.
6. Set the pauseKeywords variable to true if you want to automatically pause low Quality Score keywords. Set it to false if you don't want to pause the keywords.
7. Save the script and run.
8. Set the frequency to "Hourly" to receive the report every hour. Adjust the frequency as desired for your reporting needs.
9. Save the trigger settings, and the script will run automatically according to the defined frequency.
10. Check the specified emailAddress inbox for email notifications whenever a campaign contains low quality score keywords.