const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '8f2236f08486728b83821fc6eb7f8d88-us8',
  server: 'us8',
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();
