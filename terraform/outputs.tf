output "bucket_name" {
  description = "Name of the S3 bucket for the main site"
  value       = module.main_site_bucket.bucket_name
}

output "bucket_website_endpoint" {
  description = "Website endpoint for the main site S3 bucket"
  value       = module.main_site_bucket.website_endpoint
}

output "website_url" {
  description = "Website URL"
  value       = "https://${var.domain_name}"
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.main.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.main.domain_name
}

output "acm_certificate_arn" {
  description = "ARN of the ACM certificate"
  value       = aws_acm_certificate.main.arn
}
