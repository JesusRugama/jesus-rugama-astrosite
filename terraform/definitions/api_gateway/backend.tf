terraform {
  backend "s3" {
    bucket         = "jesusrugama.terraform"
    key            = "jesusrugama-infrastructure/jesusrugama.com/api_gateway/terraform.tfstate"
    region         = "us-east-2"
    dynamodb_table = "jesusrugama.terraform-locks"
    encrypt        = true
  }
}
