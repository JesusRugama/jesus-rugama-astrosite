variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Domain name"
  type        = string
  default     = "jesusrugama.com"
}

variable "recipient_email" {
  description = "Email address to receive contact form submissions"
  type        = string
}
