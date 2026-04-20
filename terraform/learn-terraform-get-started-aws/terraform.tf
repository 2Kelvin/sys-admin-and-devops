# terraform global configuration
terraform {
  required_providers { # terraform aws api provider
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.92" # aws provider version
    }
  }

  required_version = ">= 1.2" # terraform cli version
}
