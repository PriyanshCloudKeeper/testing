pipeline {
    agent any
    environment {
        AWS_REGION = "ap-south-1"
        AWS_ACCOUNT_ID = "351698237623"
        REPO_NAME = "lens-docs"
        IMAGE_NAME = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}"
        VERSION = "${env.BUILD_NUMBER}"
        TASK_DEFINITION = "lens-docs-td"
        SERVICE = "lens-docs-td-service"
        CLUSTER = "priyansh-crazy-cluster"
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
                    sh "docker build -t ${REPO_NAME} ."
                    sh "docker tag ${REPO_NAME}:latest ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:${VERSION}"
                }
            }
        }
        stage('Docker Image Push') {
            steps {
                script {
                    sh "docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:${VERSION}"
                }
            }
        }
        stage('Update Task-Definition') {
            steps {
                script {
                    sh """
                        # Extract only the 'taskDefinition' block and remove runtime-specific fields
                        aws ecs describe-task-definition \
                            --task-definition ${TASK_DEFINITION} \
                            --query 'taskDefinition' \
                            --output json > temp-td.json
                        
                        # Remove fields that shouldn't be included in registration and update image
                        jq 'del(.taskDefinitionArn, .revision, .status, .requiresAttributes, .placementConstraints, .compatibilities, .registeredAt, .registeredBy) | .containerDefinitions[0].image = "${IMAGE_NAME}:${VERSION}"' temp-td.json > docs-td.json
                        
                        # Clean up temp file
                        rm temp-td.json
                    """
                }
            }
        }
        stage('Apply Task-Definition') {
            steps{
                script {
                    sh 'aws ecs register-task-definition --cli-input-json file://docs-td.json'
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