output "api_endpoint" {
  description = "API Gateway endpoint URL"
  value       = aws_apigatewayv2_api.contact_api.api_endpoint
}

output "custom_domain_endpoint" {
  description = "Custom domain endpoint"
  value       = "https://api.${var.domain_name}/contact"
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.contact_form.function_name
}
