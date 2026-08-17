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
                    trivy image --severity HIGH,CRITICAL stylehub-backend
                    trivy image --severity HIGH,CRITICAL stylehub-frontend
                    trivy image --severity HIGH,CRITICAL stylehub-admin
                '''
            }
        }
    }
}