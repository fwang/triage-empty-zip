import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const fn = new aws.lambda.Function("fn", {
  role: "arn:aws:iam::112245769880:role/next-ion-frank-WebImageOptimizerRole-useast1",
  runtime: "nodejs20.x",
  handler: "index.handler",
  code: new pulumi.asset.FileArchive("./test-function"),
});

// Export the name of the bucket
export const fnName = fn.name;
