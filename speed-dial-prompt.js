/********************************************************
 * 
 * Macro Author:      	William Mills
 *                    	Technical Solutions Specialist 
 *                    	wimills@cisco.com
 *                    	Cisco Systems
 * 
 * Version: 1-0-0
 * Released: 12/01/23
 * 
 * This macro creates a single speed dial button on your Webex Device
 * which prompts for confirmation before dialling the target number.
 * 
 * Full Readme, source code and license agreement available on Github:
 * https://github.com/wxsd-sales/speed-dial-prompt-macro
 * 
 ********************************************************/

import xapi from 'xapi';

/*********************************************************
 * Configure the settings below
**********************************************************/

const config = {
  targetNumber: 'user@example.com',         // The target number which will be dialled
  button: {
    name: 'Speed Dial', // The text displayed below the button
    icon: 'Helpdesk',   // The buttons icon, check UI Extention Editor for more options
    color: '#148579',   // The buttons color in Hex format
  },
  prompt: {
    Duration: 20,                           // Duration in which the prompt should display in seconds
    Title: 'Speed Dial Prompt',             // Title of the prompt
    Text: 'Are you sure you want to dial?', // Text content of the prompt
    "Option.1": 'Yes',                      // The confirmation text
    "Option.2": 'No'                        // The decline text
  },
  panelId: 'speedDialPrompt'                // A unique panel Id so not to conflict with other macros
}

/*********************************************************
 * The functions below create the button and add event 
 * listener for clicks.
**********************************************************/

createPanel();

xapi.Event.UserInterface.Extensions.Panel.Clicked.on(event => {
  if (event.PanelId != config.panelId) return;
  console.log(`Speed Dial Button clicked`);
  displayPrompt();
})

xapi.Event.UserInterface.Message.Prompt.Response.on(event => {
  if (event.FeedbackId != config.panelId) return
  if (event.OptionId != 1) return
  console.log(`Speed Dial Confirmation Received`);
  dialTarget();
});

function displayPrompt() {
  console.log(`Displaying Speed Dial Confirmation Prompt`);
  const prompt = config.prompt;
  prompt.FeedbackId = config.panelId;
  console.log(`Displaying Speed Dial Confirmation Prompt`, prompt);
  xapi.Command.UserInterface.Message.Prompt.Display(prompt);
}

function dialTarget() {
  console.log(`Dialling Target [${config.targetNumber}]`);
  xapi.Command.Dial({ Number: config.targetNumber, });
}


async function createPanel() {
  const button = config.button;
  const panel = `
    <Extensions>
      <Panel>
        <Type>Statusbar</Type>
        <Location>HomeScreen</Location>
        <Icon>${button.icon}</Icon>
        <Color>${button.color}</Color>
        <Name>${button.name}</Name>
        <ActivityType>Custom</ActivityType>
      </Panel>
    </Extensions>`
  xapi.Command.UserInterface.Extensions.Panel.Save({ PanelId: config.panelId }, panel)
    .catch(e => console.log('Error saving panel: ' + e.message))
}
