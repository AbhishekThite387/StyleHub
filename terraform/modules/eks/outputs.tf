output "cluster_name" {
  description = "Name of the EKS cluster"
  value       = aws_eks_cluster.stylehub.name
}

output "cluster_endpoint" {
  description = "Endpoint of the EKS cluster"
  value       = aws_eks_cluster.stylehub.endpoint
}

output "cluster_arn" {
  description = "ARN of the EKS cluster"
  value       = aws_eks_cluster.stylehub.arn
}

output "node_group_name" {
  description = "Name of the EKS node group"
  value       = aws_eks_node_group.stylehub.node_group_name
}