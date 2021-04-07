const { CredentialProviderChain } = require("aws-sdk");

module.exports.AwsCredentials = class {
  static awsCredentials;
  static async retrieve() {
    if (this.awsCredentials && !this.awsCredentials.expired) {
      console.log("using cached creds");
      return this.awsCredentials;
    }
    this.awsCredentials = await this.generateCreds();
    console.log("generating new creds", this.awsCredentials);
    return this.awsCredentials;
  }
  static async generateCreds() {
    const defaultCredentialProviderChain = new CredentialProviderChain();
    return await defaultCredentialProviderChain.resolvePromise();
  }
};
