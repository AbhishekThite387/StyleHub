module "eks" {
  source = "./modules/eks"

  project_name              = var.project_name
  environment               = var.environment
  cluster_role_arn          = module.iam.eks_cluster_role_arn
  node_role_arn             = module.iam.eks_node_role_arn
  private_subnet_ids        = module.vpc.private_subnet_ids
  cluster_security_group_id = module.security.eks_cluster_security_group_id
}