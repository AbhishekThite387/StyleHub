pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AbhishekThite387/StyleHub.git'
            }
        }

        stage('SonarQube Scan') {
            steps {
                script {
                    def scannerHome = tool 'sonar-scanner'

                    withSonarQubeEnv('SonarQube') {
                        sh """
                            ${scannerHome}/bin/sonar-scanner
                        """
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build -t stylehub-backend ./backend
                    docker build -t stylehub-frontend ./frontend
                    docker build -t stylehub-admin ./styleHub_admin
                '''
            }
        }

        stage('Trivy Scan') {
            steps {
                sh '''
                    mkdir -p trivy-reports

                    trivy image \
                    --severity HIGH,CRITICAL \
                    --format table \
                    -o trivy-reports/backend-trivy.txt \
                    stylehub-backend

                    trivy image \
                    --severity HIGH,CRITICAL \
                    --format table \
                    -o trivy-reports/frontend-trivy.txt \
                    stylehub-frontend

                    trivy image \
                    --severity HIGH,CRITICAL \
                    --format table \
                    -o trivy-reports/admin-trivy.txt \
                    stylehub-admin
                    '''
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([
                usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )
                ]) {
                sh '''
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

                    docker tag stylehub-backend $DOCKER_USERNAME/stylehub-backend:latest
                    docker tag stylehub-frontend $DOCKER_USERNAME/stylehub-frontend:latest
                    docker tag stylehub-admin $DOCKER_USERNAME/stylehub-admin:latest

                    docker push $DOCKER_USERNAME/stylehub-backend:latest
                    docker push $DOCKER_USERNAME/stylehub-frontend:latest
                    docker push $DOCKER_USERNAME/stylehub-admin:latest

                    docker logout
                '''
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'trivy-reports/*.txt',
                    allowEmptyArchive: true
        }
    }
}