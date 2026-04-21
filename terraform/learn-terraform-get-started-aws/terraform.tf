# Terraform global configuration
terraform {
  cloud { # using HCP Terraform
    organization = "my_terraform_organization_2026"
    workspaces {
      project = "Learn Terraform"
      name    = "learn-terraform-aws-get-started"
    }
  }

  required_providers { # terraform aws api provider
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.92" # aws provider version
    }
  }

  required_version = ">= 1.2" # terraform cli version
}
