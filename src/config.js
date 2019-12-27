export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-10igdmzteltck"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://md6tg83n0f.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_KelqtFt8k",
      APP_CLIENT_ID: "5d73i0cpdl1kboivqqk813565v",
      IDENTITY_POOL_ID: "us-east-2:067f7ce3-5743-4e60-85cb-e4aa91c8bc75"
    }
  };