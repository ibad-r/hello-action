
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get inputs from action.yml
  const name = core.getInput('who-to-greet', {
    required: true
  });

  const greeting = core.getInput('greeting') || 'Hello';

  // Generate greeting
  const message = `${greeting}, ${name}!`;

  // Display information in workflow logs
  core.info(`Message: ${message}`);
  core.info(`Triggered by: ${github.context.actor}`);
  core.info('Student: Ibad ur Rehman');
  core.info('SAP ID: 56468');

  // Set action output
  core.setOutput('message', message);

} catch (error) {
  core.setFailed(error.message);
}
