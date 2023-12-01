# Speed Dial Prompt Macro

This macro creates a single speed dial button on your Webex Device which prompts for confirmation before dialling the target number.

<img width="855" alt="image" src="https://github.com/wxsd-sales/speed-dial-prompt-macro/assets/21026209/bb103121-715f-46ac-b01e-1e614a363897">


## Overview

Using the configuration at the beginning of the macro, the macro will save a speed dial button to the device and listen for when it is clicked.

Once clicked, the macro will display a confirmation prompt and if the use hits 'Yes' it will process that response and dial the target number.


## Setup

### Prerequisites & Dependencies: 

- RoomOS/CE 9.6.x or above Webex Device.
- Web admin access to the device to upload the macro.


### Installation Steps:
1. Download the ``speed-dial-prompt.js`` file and upload it to your Webex Room devices Macro editor via the web interface.
2. Configure the Macro by changing the initial values, there are comments explaining each one.
3. Enable the Macro on the editor.
4. (Optional) - Hide all other native UI buttons and calling options, refer to these two device configurations:
    - https://roomos.cisco.com/xapi/Configuration.UserInterface.Features.HideAll
    - https://roomos.cisco.com/xapi/Configuration.RoomScheduler.Enabled
    
## Demo

*For more demos & PoCs like this, check out our [Webex Labs site](https://collabtoolbox.cisco.com/webex-labs).


## License

All contents are licensed under the MIT license. Please see [license](LICENSE) for details.


## Disclaimer

Everything included is for demo and Proof of Concept purposes only. Use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex use cases, but are not Official Cisco Webex Branded demos.


## Questions
Please contact the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=speed-dial-prompt-macro) for questions. Or, if you're a Cisco internal employee, reach out to us on the Webex App via our bot (globalexpert@webex.bot). In the "Engagement Type" field, choose the "API/SDK Proof of Concept Integration Development" option to make sure you reach our team. 
