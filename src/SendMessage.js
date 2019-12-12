import React, { PureComponent } from "react";

class SendMessage extends PureComponent {
  message = () => {
    const slackMessage = {
      title: "New Skill Request",
      attachments: [
        {
          title: "New Skill Request",
          text:
            "[Resource’s first/preferred name and last name] has added [skill name] as a skill. Please go to their account page to approve this skill”"
        },
        {
          fallback: "Do you approve this Skill Update?",
          title: "Do you approve this Skill Update?",
          actions: [
            {
              text: "Approve",
              style: "primary",
              type: "button",
              url: "https://skillbase-staging.techtonic.com/resources/50",
              value: "Approve"
            },
            {
              text: "Deny",
              type: "button",
              url: "https://skillbase-staging.techtonic.com/resources/50",
              value: "Deny"
            }
          ]
        }
      ]
    };
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://hooks.slack.com/services/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"
    );
    xhr.send(JSON.stringify(slackMessage));

  };

  render() {
    return (
      <>
        <button onClick={this.message}>Send A Message to Slack</button>
      </>
    );
  }
}
export default SendMessage;
