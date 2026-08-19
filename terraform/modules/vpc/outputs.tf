output "vpc_id" {
  description = "ID of the StyleHub VPC"
  value       = aws_vpc.stylehub_vpc.id
}

output "vpc_cidr" {
  description = "CIDR block of the StyleHub VPC"
  value       = aws_vpc.stylehub_vpc.cidr_block
}

output "public_subnet_ids" {
  description = "IDs of the public subnets"
  value = [
    aws_subnet.public_subnet.id,
    aws_subnet.public_subnet_2.id
  ]
}

output "private_subnet_ids" {
  description = "IDs of the private subnets"
  value = [
    aws_subnet.private_subnet.id,
    aws_subnet.private_subnet_2.id
  ]
}

output "internet_gateway_id" {
  description = "ID of the Internet Gateway"
  value       = aws_internet_gateway.stylehub_igw.id
}

output "nat_gateway_id" {
  description = "ID of the NAT Gateway"
  value       = aws_nat_gateway.stylehub_nat.id
}