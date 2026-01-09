output "ses_domain_identity_arn" {
  description = "ARN of the SES domain identity"
  value       = aws_ses_domain_identity.main.arn
}

output "ses_domain" {
  description = "SES verified domain"
  value       = aws_ses_domain_identity.main.domain
}
