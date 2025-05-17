@Library('devops-library') _  // Load the shared library

pipeline {
    agent any

    stages {    
        stage('Hello') {
            steps {
                script {
                    hello()  // Calls vars/hello.groovy
                }
            }
        }
        stage('Install Backend') {
            steps {
                script {
                    mvnInstall()  // Calls vars/mvnInstall.groovy
                }
            }
        }
    }
}
