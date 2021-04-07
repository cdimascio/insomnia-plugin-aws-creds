const { AwsCredentials } = require("./aws.creds");

const run = async (context, key) => {
  try {
    const creds = await AwsCredentials.retrieve();
    return creds[key];
  } catch (e) {
    throw Error("AWS IAM could not get credentials. ", e.message || "");
  }
};

const runAccessKeyId = async (context) => run(context, "accessKeyId");
const runSecretAccessKey = async (context) => run(context, "secretAccessKey");
const runSessionToken = async (context) => run(context, "sessionToken");

module.exports.templateTags = [
  {
    name: "awsCccessKeyId",
    displayName: "AWS Access Key Id",
    description: "AWS Access Key Id",
    run: runAccessKeyId,
  },
  {
    name: "awsSecretAccessKey",
    displayName: "AWS Secret Key",
    description: "AWS Secret Key",
    run: runSecretAccessKey,
  },
  {
    name: "awsSessionToken",
    displayName: "AWS Session Token",
    description: "AWS Session Token",
    run: runSessionToken,
  },
];
