pipeline {

    agent any

    environment {
        AWS_REGION = "ap-south-1"
        AWS_ACCOUNT_ID = "351698237623"
        REPO_NAME = "lens-docs"
        IMAGE_NAME = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}"
        VERSION = "${env.BUILD_NUMBER}"
        TASK_DEFINITION = "lens-docs-td"
        CLUSTER = "lens-docs-cluster"
        SERVICE = "lens-docs-service"
    }

    stages {

        stage('Docker Login to ECR') {
            steps {
                script {
                    sh """
                        aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                    """
                }
            }
        }

        stage('Docker Image Build') {
            steps {
                script {
                    sh "sudo docker build -t ${REPO_NAME} ."
                    sh "sudo docker tag ${REPO_NAME}:latest ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:${VERSION}"
                }
            }   
        }

        stage('Docker Image Push') {
            steps {
                script {
                    sh "sudo docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:${VERSION}"
                }
            }   
        }

        stage('Create New Task-Definition') {
            steps {
                script {
                    sh "sudo apt-get update && sudo apt-get install -y jq"
                    sh """
                        aws ecs describe-task-definition --task-definition ${TASK_DEFINITION} --output json > docs-td.json
                        jq --arg IMAGE_URI "${IMAGE_NAME}:${VERSION}" '
                        .taskDefinition |
                        {family, executionRoleArn, networkMode, requiresCompatibilities, cpu, memory,
                        containerDefinitions: [.containerDefinitions[0] + {image: $IMAGE_URI}]}
                        ' docs-td.json > new-td.json
                    """
                }
            }
        }

        stage('Apply Task Definition') {
            steps{
                script {
                    sh 'aws ecs register-task-definition --cli-input-json file://new-td.json'
                }
            }
        }

        stage('Update ECS Service') {
            steps{
                script {
                    sh """aws ecs update-service --cluster ${CLUSTER} --service ${SERVICE} --task-definition ${TASK_DEFINITION}"""
                }
            }
        }
    }
}