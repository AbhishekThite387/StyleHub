resource "aws_eks_cluster" "stylehub" {
  name     = "${var.project_name}-eks"
  role_arn = var.cluster_role_arn

  vpc_config {
    subnet_ids = var.private_subnet_ids

    security_group_ids = [
      var.cluster_security_group_id
    ]

    endpoint_public_access  = true
    endpoint_private_access = true
  }

  tags = {
    Name        = "${var.project_name}-eks"
    Environment = var.environment
  }
}

resource "aws_eks_node_group" "stylehub" {
  cluster_name    = aws_eks_cluster.stylehub.name
  node_group_name = "${var.project_name}-node-group"
  node_role_arn   = var.node_role_arn

  subnet_ids = var.private_subnet_ids

  instance_types = ["t3.medium"]

  scaling_config {
    desired_size = 2
    min_size     = 1
    max_size     = 3
  }

  tags = {
    Name        = "${var.project_name}-node-group"
    Environment = var.environment
  }
}