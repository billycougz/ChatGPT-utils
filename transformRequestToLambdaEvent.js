// Write me a JavaScript function that takes an Express request object as input and returns that object transformed into an API Gateway Lambda event object. This should work for all HTTP methods.
function transformRequestToLambdaEvent(req) {
  const lambdaEvent = {
    httpMethod: req.method,
    path: req.path,
    headers: req.headers,
    queryStringParameters: req.query,
    body: req.body,
    isBase64Encoded: false
  };
  return lambdaEvent;
}
